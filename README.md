<h1 align="center">IAK博客</h1>

<div align="center">
<img src="https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/-TS-0288d1?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/-ASTRO-e36d25?style=for-the-badge&logo=astro&logoColor=white" />
<img src="https://img.shields.io/badge/-VUE3-41b883?style=for-the-badge&logo=vue.js&logoColor=white" />
</div>

<div align="center">
<img src="https://forthebadge.com/images/badges/built-with-love.svg" />
<img src="https://forthebadge.com/images/badges/built-by-hipsters.svg" />
<img src="https://forthebadge.com/images/badges/open-source.svg" />
<img src="https://forthebadge.com/images/badges/made-with-markdown.svg" />
</div>



# 关于
本博客使用[Astro框架](https://astro.build/)开发，组件使用了astro组件和vue组件（vue开发功能比较方便，但本项目是构建静态站点，不是SSR，最终页面呈现时vue组件会有一段时间空白。后期可能会将vue组件慢慢改回astro组件）

示例网站见[Iak示例博客](https://iak.dorakika.cn)、[DORAKIKA的博客](https://blog.dorakika.cn)

![20230407141533.png](https://img.dorakika.cn/md/20230407141533.webp)

![20230407141735.png](https://img.dorakika.cn/md/20230407141735.webp)

# 特色
- 🎨多种主题配置
- 📄支持文章页、豆瓣书影音标记、友链页、说说页
- 🤖友好的SEO、OpenGraph支持、sitemap与robot.txt
- 🖼️支持生成页面分享图片
- 📊站点面板：标签集合、最近豆瓣标记
- 🔀随机文章跳转
- 🔍简易搜索功能
- 🔔rss订阅支持
- ✨友好的键盘交互

# 如何使用
```shell
# 克隆仓库
git clone ...
# 安装依赖
yarn

# 本地开发
yarn dev

# 本地构建
yarn build

# 本地预览
yarn preview
```

# 部署
目前只做了vercel的（因为我用的就是vercel），从vercel直接导入仓库即可，其他可以到Astro官网自行适配（问就是懒

# 使用
- 主要配置内容在`/src/config.ts`中
- 文章内容在`/src/content/posts/`内，后续可能会添加其他形式的内容（目前设想中会添加一种用来记录某段时间事情的文档模式（差不多是日记周记这个概念））
- 友链内容在`/src/content/friends/_index.yml`内配置
- 书影音游等标记在`/src/content/mark/_index.yml`内配置
- 新建页面参考`src/pages/friends.astro`建立
- 启动[twikoo](https://twikoo.js.org/quick-start.html)评论需先部署并获取服务地址（其他评论服务，emm，我只能说：欢迎PR）
