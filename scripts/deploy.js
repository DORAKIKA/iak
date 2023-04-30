const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const { NodeSSH } = require('node-ssh');
const sd = require('silly-datetime');
const { log } = require('./log.js');
require('dotenv').config();

if(!process.env.SSH_HOST || !process.env.SSH_USERNAME || !process.env.SSH_PASSWORD || !process.env.SSH_DIST_URL) {
    log({
        msg: '请在项目根目录下创建.env文件并配置SSH_HOST, SSH_USERNAME, SSH_PASSWORD, SSH_DIST_URL',
        tag: 'error',
        color: 'red'
    });
    process.exit(0);
}

const CONFIG = {
    host: process.env.SSH_HOST,
    username: process.env.SSH_USERNAME,
    password: process.env.SSH_PASSWORD,
    pathUrl: process.env.SSH_DIST_URL,
}


let args = process.argv.splice(2);

// 当前时间
let curTime = sd.format(new Date(), 'YYYYMMDDHH');


// 设置本地 dist 文件路径
const distPath = path.resolve(__dirname, '../dist');

const ssh = new NodeSSH();


// 本地文件上传至远程服务器
function uploadFile() {
  ssh
    .connect({
      host: CONFIG.host,
      username: CONFIG.username,
      password: CONFIG.password,
      port: 22,
    })
    .then(() => {
      log({
        msg: 'SSH login success',
      });
      ssh
        .putFile(
            path.resolve(distPath, `./dist${curTime}.zip`),
          `${CONFIG.pathUrl}/dist${curTime}.zip`
        )
        .then(() => {
          log({
            msg: 'The zip file is upload successful',
          });
          remoteFileUpdate();
        })
        .catch((err) => {
          log('the file upload fail:' + err);
          process.exit(0);
        });
    })
    .catch((err) => {
      log('SSH conneting fail:' + err);
      process.exit(0);
    });
}

// 远端文件更新
const remoteFileUpdate = () => {
  let cmd = `rm -rf dist`;
  ssh
    .execCommand(cmd, {
      cwd: CONFIG.pathUrl,
    }).then((result) => {
        if (!result.stderr) {
            log('delete old dist success!');
        } else {
            log({
                msg: 'Something wrong:' + result.stderr,
                tag: 'error',
                color: 'red'
            });
        }
    }).finally(() => {
        let unzip_cmd = `unzip dist${curTime}.zip`;
        return ssh.execCommand(unzip_cmd, {
            cwd: CONFIG.pathUrl,
        })
    }).then((result) => {
        log('The update is successful!');
        process.exit(0);
    })
};

// 本地文件压缩
const zipDirector = () => {
  const output = fs.createWriteStream(path.resolve(distPath, `./dist${curTime}.zip`));
  const archive = archiver('zip', {
    zlib: { level: 9 },
  }).on('error', (err) => {
    throw err;
  });
  output.on('close', (err) => {
    if (err) {
      log('something error width the zip process:' + err);
      return;
    }
    uploadFile();
    log(`${archive.pointer()} total bytes`);
    log(
      'archiver has been finalized and the output file descriptor has closed.'
    );
  });
  output.on('end', () => {
    log('Data has been drained');
  });
  archive.pipe(output);
  archive.directory(distPath, '/dist');
  archive.finalize();
};



// 更新代码
log('开始部署', 'deploy')
zipDirector();
