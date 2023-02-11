---
title: 添加朋友圈
date: 2022-10-14
tags: 
- butterfly
- 博客改造
category: 博客
cover: https://img.dorakika.cn/md/20221014.png
star_index: 1
description: 发现原来的朋友圈已经好久没有自动更新了，然后就找了一下问题，顺便按照文档升了个级
slug: '20221014'
---

## 前言&预览

- 这几天发现原来的朋友圈一直停留在八月份，就debug了一下，顺便把朋友圈部署从vercel换成了服务器部署
- 左侧列表UI基本上是照着B站客户端动态弄的
- [预览👈](/fcircle/)

![image-20221014211953586](https://img.dorakika.cn/md/image-20221014211953586.png)

![image-20221014220252111](https://img.dorakika.cn/md/image-20221014220252111.png)

- 窄屏下 貌似把文字去掉只留头像要好看一点

## 过程

- 主要就是添加一个新页面，我这里是fcircle
- 你可以使用hexo的命令新建页面，也可以手动在source文件夹下新建一个fcircle目录，并添加index.md，内容如下
- 需要用到两个js文件与一个css文件

```markdown
---
title: 友链朋友圈
date: 2021-10-16 22:37:31
type: "fcircle"
aside: false
top_img: false
permalink: /fcircle/
comments: false
---

<script>
  window.circle_config = {
    api: 'http://circle.dorakika.cn' //你的朋友圈地址，不要加 '/'
  }
</script>

<script defer="defer" type="module" src="/js/circle-module.js"></script>
<link href="/css/circle.css" rel="stylesheet" />
<script defer="defer" src="/js/circle.js" nomodule></script>
<div id="app"></div>
```

- [circle.css](/css/circle.css)
- [circle.js](/js/circle.js)
- [circle-module.js](/js/circle-module.js)

---

- md文件添加后，运行hexo三件套即可在`/fcircle/`地址访问

## 后记

- 因为这个是我在做notion博客时弄的，然后考虑到想移植到hexo博客上，就 使用vue又打包了一下，故不适合二次开发（你要是想继续添加功能的话（新版好像支持后台配置），可以自行尝试或者直接找我要vue的demo）
- 想法：如果twikoo可以获取某个链接的最近评论的话，就可以将右侧改造成友链的个人页面了（有最近文章，最近评论等等）
- 目前的代码中，公共库文章并没有添加上去==>全部动态那个只是`/all`列表