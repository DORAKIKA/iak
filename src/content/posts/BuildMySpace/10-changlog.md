---
title: 自动生成的ChangeLog页面
date: 2022-12-03
tags:
    - 博客改造
    - butterfly
category: 博客
star: 1
description: 本来想试试能不能读取git commit的信息来生成博客的更新日志页面，然后找到standard-version自动生成CHANGELOG日志，虽然md格式只能作为文档格式来显示，但也基本满足需求了（其实我更想找一个解析的库，然后自定义页面样式）
cover: https://img.dorakika.cn/md/20221203.png
slug: '20221203'
---
本来想试试能不能读取git commit的信息来生成博客的更新日志页面，然后找到standard-version自动生成CHANGELOG日志，虽然md格式只能作为文档格式来显示，但也基本满足需求了（其实我更想找一个解析的库，然后自定义页面样式）

{% link 本博客更新日志, DORAKIKA, https://blog.dorakika.cn/changelog/ %}

## git提交规范
既然要自动生成，那源数据自然是要“格式化的”（事实上在开发中，基本都会有一套提交规范，即统一了格式，也使每次提交的信息更加清晰）

### commit message格式
一个标准的commit message格式如下：
- 修改类型有：
  - feat:提交新功能
  - fix: 修复了bug
  - docs: 修改文档
  - style: 修改代码格式（并未修改逻辑，如格式化，修改空格，分号等）
  - refactor: 代码重构（没有修复bug或添加新功能）
  - pref: 性能优化
  - test: 添加或修改代码测试
  - chore: 对构建流程或辅助工具和依赖库的更改
  - ci: CI配置文件或辅助工具的变动
  - ...
- 影响范围（可选）：说明本次commit的范围
- 标题（必选）：本次commit的简短描述
- 正文（可选）：本次commit的详细描述
- footer：任何破坏性变更

```plaintext
type(影响范围): subject
<--空行-->
[body]
<--空行-->
[footer]
```

一般来讲，只需要填写type + subject即可，如`feat: 添加朋友圈功能`；关于git commit的格式化，编辑器基本都有相关插件辅助操作（如vscode的commitizen）

## 使用standard-version生成CHANGELOG.md

{% link standard-version, github, https://github.com/conventional-changelog/standard-version %}

### 安装standard-version

```shell
npm i standard-version --save-dev
```

### 配置文件`.versionrc.js`
- 在根目录下新建`.versionrc.js`文件，参考配置如下
- 根据下方定义的type会自动生成CHANGELOG.md

```js
module.exports = {
    "types": [
        { "type": "feat", "section": "✨ Features | 新功能" },
        { "type": "fix", "section": "🐛 Bug Fixes | Bug 修复" },
        { "type": "docs", "section": "✏️ blog | 博客内容" },
        { "type": "style", "section": "💄 Styles | 样式" },
        { "type": "perf", "section": "⚡ Performance Improvements | 性能优化" },
        { "type": "init", "section": "🎉 Init | 初始化" },
        { "type": "refactor", "section": "♻️ Code Refactoring | 代码重构", "hidden": true },
        { "type": "test", "section": "✅ Tests | 测试", "hidden": true },
        { "type": "revert", "section": "⏪ Revert | 回退", "hidden": true },
        { "type": "build", "section": "📦‍ Build System | 打包构建", "hidden": true },
        { "type": "chore", "section": "🚀 Chore | 构建/工程依赖/工具", "hidden": true },
        { "type": "ci", "section": "👷 Continuous Integration | CI 配置", "hidden": true }
    ],
}
```

- 完成之后可配置package.json命令


```json
{
  "scripts": {
    "release": "standard-version",
  },
}
```

- 之后在终端运行`npm run release` 即可release一个小版本（standard-version --release-as minor  |  standard-version --release-as major 分别可使x.y.z中的y和z加1）
- 生成的CHANGELOG参考如下

```md
两次提交

feat: 添加朋友圈功能
fix: 图片链接失效修复

之后 npm run release，就会更新CHANGELOG.md文件，并生成一次release提交

### [x.y.z](https://xxx) (yyyy-mm-dd)

### ✨ Features | 新功能

* 添加朋友圈功能 ([66d16ad](https://xxx))

### 🐛 Bug Fixes | Bug 修复

* 图片链接失效修复 ([66d16ad](https://xxx))


```


## 从CHANGELOG.md生成页面
- 现在，可手动运行standard-version命令来实现版本发布与CHANGELOG自动生成，但是我的需求是生成一个页面
- 现在就需要将CHANGELOG.md中的内容copy到页面文档中

### 编写页面自定义内容
- changlog页面中除了自动生成的更新日志之外，还需要一些页面元信息（标题，侧栏配置等）
- 所以需要我们手动新建一个`_index.md`文件来存储这些内容
- 在你存放页面的地方新建`changelog`文件夹，并在它的内部新建`_index.md`文件，如下

```md
---

title: 更新日志
aside: false
permalink: /changelog/

---

> 本更新日志为自动生成，可能会有bug

```

### copy更新日志
- 需要在生成CHANGELOG之后就立即更新我们的页面文件
- 这就可以从standard-version的生命周期入手，它可以在 生成CHANGELOG之后的 执行脚本
- 在package.json中增加如下内容；在生成changelog之后执行node脚本（这个脚本也可以放在其他地方，不过我为了方便就放在了根目录

```json
{
    "standard-version": {
        "scripts": {
            "postchangelog": "node ./generate_changelog.js"
        }
    }
}
```

- generate_changelog.js如下，其功能就是读取`_index.md`和`CHANGELOG.md`的内容并将他们合并起来写到真正要被渲染的`index.md`中去（本来想直接用命令行实现的，但是发现会出现乱码，就转而使用脚本了）

```js
const {exec} = require("child_process");
const fs = require('fs');

fs.readFile('./source/pages/changelog/_index.md', (err, meta) => {
    if(err)console.error(err);

    fs.readFile('./CHANGELOG.md', async (err, changelog)=>{
        if(err)console.error(err);
        
        await fs.writeFileSync(
            './source/pages/changelog/index.md',
            meta + '\n' + changelog,
            (err) => console.error(err)
        )
        gitCommit()
    })

})

function gitCommit(){
    exec('git add ./source/pages/changelog/index.md && git commit -m "chore(changelog): 生成changelog页面"')
}
```

- 配置完成之后，运行`npm run release`就会在release生成CHANGELOG的同时，也生成页面文件中的changlog/index.md

### 部署命令
- 添加`publish`命令：先执行release版本发布，然后执行hexo的deploy部署
- `deploy`为单纯部署，不涉及版本迭代；publish会迭代版本然后deploy
- minor，major分别控制不同程度的版本变更（x.y.z中的y和x，不加参数默认为z)

```json
{
    "scripts":{
        "deploy": "hexo deploy -g",
        "publish": "standard-version --release && hexo deploy -g",
        "publish-minor": "standard-version --release-as minor && hexo deploy -g",
        "publish-major": "standard-version --release-as major && hexo deploy -g"
    }
}

```

## 整体流程
- 以一天为例，今天更新了功能Fa，Fb；修复了bug：Bc。Bd，Be，更新了文章Df，添加了友链Lg。commit如下

```
feat: 新增Fa
feat: 新增Fb
fix: 解决了Bc造成的xx
fix: 修复bd
fix: 修复了Be的问题
docs(📁): 新增文章Df
docs(🎅): 友链添加Lg
```

- 忙碌了一天之后，执行命令`npm run publish`发布博客内容
- 生成文档如下

```md
...meta...

### [1.2.3](https://github.com/xxx/x/x/x/v1.2.3) (2022-12-03)

### ✨ Features | 新功能

* 新增Fa ([66d16ad](https://xxx))
* 新增Fb ([66d16ad](https://xxx))

### 🐛 Bug Fixes | Bug 修复
* 解决了Bc造成的xx ([66d16ad](https://xxx))
* 修复bd ([66d16ad](https://xxx))
* 修复了Be的问题 ([66d16ad](https://xxx))

### ✏️ blog | 博客内容
* **📁**:新增文章Df ([66d16ad](https://xxx))
* **🎅**:友链添加Lg ([66d16ad](https://xxx))

```