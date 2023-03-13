const fs = require('fs');
const yaml = require('js-yaml');

// 使用的是github项目将豆瓣数据同步到notion，参考：https://github.com/lizheming/doumark-action 进行配置
// 这是notion的数据库id
const NOTION = {
    MOVIES_ID: '',
    BOOKS_ID: '',
    MUSICS_ID: ''
}
// 这是notion的token
const NOTION_API_KEY = "*******aaaabbbbcccc";

// 豆瓣图片需代理,不然容易403
const img_prefix = "https://images.weserv.nl/?url=";
const yaml_path = './src/content/mark/_index.yml';

var axios = require('axios');


async function main() {
    let movies, books, musics;
    if(NOTION.MOVIES_ID){
        console.log('- get movies ...');
        movies = await getFromNotion(NOTION.MOVIES_ID);
        console.log("movies: ", movies && movies.length || 0);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    if(NOTION.BOOKS_ID){
        console.log('- get books ...');
        books = await getFromNotion(NOTION.BOOKS_ID);
        console.log("books: ", books && books.length || 0);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    if(NOTION.MUSICS_ID){
        console.log('- get musics ...');
        musics = await getFromNotion(NOTION.MUSICS_ID);
        console.log("musics: ", musics && musics.length || 0);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }



    console.log(`- write to ${yaml_path} ...`)
    writeToYaml({movies,books,musics}, yaml_path);
    console.log("*write completed")
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