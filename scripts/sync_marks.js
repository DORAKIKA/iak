const fs = require('fs');
const yaml = require('js-yaml');
const { prompt } = require('enquirer');
require('dotenv').config();

// 使用的是github项目将豆瓣数据同步到notion，参考：https://github.com/lizheming/doumark-action 进行配置
// 这是notion的数据库id
const NOTION = {
    MOVIES_ID: '',
    BOOKS_ID: '3c8344aa545c4dc787e786cbb6b4b373',
    MUSICS_ID: '8a7f7ee4c8714518b2c71432bdb7f8e8'
}
// 这是notion的token
const NOTION_API_KEY = process.env.NOTION_TOKEN || '';

// 豆瓣图片需代理,不然容易403
const img_prefix = "https://images.weserv.nl/?url=";
const yaml_path = './src/content/mark/_index.yml';

var axios = require('axios');


async function main() {
    let movies, books, musics;


    
    const { type } = await prompt({
        type: 'select',
        name: 'type',
        message: '同步类型',
        choices: [
            { message: '全部', name: 'all' },
            { message: '电影', name: 'movies' },
            { message: '书籍', name: 'books' },
            { message: '音乐', name: 'musics' },
        ]
    })
    console.log(type)
    if(type === 'all' || type === 'movies'){
        movies = await syncUnit('movies', NOTION.MOVIES_ID);
    }
    if(type === 'all' || type === 'books'){
        books = await syncUnit('books', NOTION.BOOKS_ID);
    }
    if(type === 'all' || type === 'musics'){
        musics = await syncUnit('musics', NOTION.MUSICS_ID);
    }



    console.log(`- write to ${yaml_path} ...`)
    writeToYaml({movies,books,musics}, yaml_path);
    console.log("*write completed")
}

async function syncUnit(type, id){
    console.log(`- get ${type} ...`);
    if(!id.trim()) return console.log('id is null');
    res = await getFromNotion(id);
    console.log(`${type}: `, res && res.length || 0);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return res;
}


function getFromNotion(id){
    var data = JSON.stringify({
        "sorts": [
            {
                "property": "star_time",
                "direction": "descending"
            }
        ]
    });
    
    var config = {
      method: 'post',
      url: `https://api.notion.com/v1/databases/${id}/query`,
      headers: { 
        'Content-Type': 'application/json', 
        'Notion-Version': '2022-06-28', 
        'Authorization': `Bearer ${NOTION_API_KEY}`, 
      },
      data : data,
      timeout: 10000,
    };
    return axios(config)
    .then(function (response) {
      return response.data.results.map(t => {
        return {
          id: t.id,
          title: t.properties.title.title[0].plain_text,
          star: (new Array(t.properties.star.number || 0)).fill('⭐').join(''),
          url: t.properties.url.url,
          time: t.properties.star_time.rich_text[0].plain_text,
          poster: img_prefix + t.properties.poster.files[0].external.url,
        }
      });
    })
    .catch(function (error) {
      console.error(error.message);
    });
}

function writeToYaml(data, path){
    let originYaml = yaml.safeLoad(fs.readFileSync(path, 'utf-8'));
    let cache = {};
    if(!Array.isArray(originYaml)){
        originYaml = [];
    }
    originYaml.forEach((t,i) => {
        cache[t.name] = i;
    });

    for(let key in data){
        if(data[key] !== undefined){
            if(cache[key]){
                originYaml[cache[key]].values = data[key];
            }else{
                originYaml.push({
                    name: key,
                    type: 'horizontal',
                    prefix: 'star',
                    values: data[key],
                });
            }
            console.log('update ', key, data[key].length);
        }
    }

    const yamlStr = yaml.safeDump(originYaml);
    fs.writeFileSync(path, yamlStr, 'utf-8')
}

main()