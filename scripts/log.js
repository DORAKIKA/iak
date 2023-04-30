
const chalk = require('chalk');
exports.log =  function log(opt){
    let msg = '';
    let tag = 'deploy';
    let color = 'cyanBright';
    if(typeof opt === 'string'){
        msg = opt;
    }else{
        msg = opt.msg ?? msg;
        tag = opt.tag ?? tag;
        color = opt.color ?? color;
    }
    
    const time = new Date().toLocaleTimeString();
    console.log(chalk.gray(time),chalk.bold[color](`[${tag}]`), msg);
}