
const chalk = require('chalk');

let log_type = 'deploy'

exports.log =  function log(opt){
    let msg = '';
    let tag = log_type;
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

exports.setLogType = function(type){
    log_type = type;
}