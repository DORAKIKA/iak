
const { prompt } = require('enquirer');
const version = require('../package.json').version.split('.').map(Number);
const standardVersion = require('standard-version');

const versionIncrements = [
    {
        name: 'patch',
        version: [version[0], version[1], version[2] + 1]
    },{
        name: 'minor',
        version: [version[0], version[1] + 1, 0]
    },{
        name: 'major',
        version: [version[0] + 1, 0, 0]
    }
]

async function main(){

    const { release } = await prompt({
        type: 'select',
        name: 'release',
        message: 'Select release type',
        choices: versionIncrements.map(i => ({
            name: i.name,
            message: i.name+' ('+i.version.join('.')+')'
        }))
    })
    
    const { yes } = await prompt({
        type: 'confirm',
        name: 'yes',
        message: 'Are you sure you want to release as v'+versionIncrements[versionIncrements.findIndex(i => i.name === release)].version.join('.')+'?'
    })

    if(yes){
        standardVersion({
            releaseAs: release,
            silent: true,
        }).then(() => {
            console.log('Released Success!')
        }).catch(err => {
            console.error(`Error: ${err.message}`)
        })
        
    }
}

main()