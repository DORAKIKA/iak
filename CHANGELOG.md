# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.10.1](///compare/v0.10.0...v0.10.1) (2023-04-29)


### Features

* 样式调整 5b62d92
* memory页面，样式修改为时间轴 726d90d

## [0.10.0](///compare/v0.9.2...v0.10.0) (2023-04-28)


### Features

* 惰性注册的右键菜单 e94596d
* 样式修改 32ae20e
* 阅读体验优化，窗口resize后恢复至之前阅读位置 92eafd6
* md website 组件 f8ef26f


### Bug Fixes

* 修复tabs组件嵌套失效bug e37e0f3

### [0.9.2](///compare/v0.9.1...v0.9.2) (2023-04-17)


### Features

* 顶栏固定效果优化 ed9020f
* slider样式优化 23d3d47
* twikoo样式优化 2ffb27d


### Bug Fixes

* mark样式及日期格式化 2cacc57
* nav超过header才变色 846c2a6

### [0.9.1](///compare/v0.9.0...v0.9.1) (2023-04-15)


### Features

* 滚动条样式 49c0fb0
* 颜色修改 f20caf8
* copyright样式 38d2f7e
* md写作，友链Friend组件 fd3d608
* toolbar样式 d760d52


### Bug Fixes

* margin 问题 a32be29

## [0.9.0](///compare/v0.8.0...v0.9.0) (2023-04-11)


### Features

* 卡片链接LinkCard组件 912756f
* a链接md组件 4666e4b
* tabs组件-md 854ff55


### Bug Fixes

* 修复由于聚焦按钮导致的滚动中断问题 c273bf0
* 已知样式问题修复 a808fa9

## [0.8.0](///compare/v0.7.3...v0.8.0) (2023-04-07)


### Features

* **content:** 去除Tip组件，转为Outline组件，添加Grid布局组件 60345d6

### [0.7.3](///compare/v0.7.2...v0.7.3) (2023-04-04)


### Features

* 键盘操作体验优化 82729ee
* 添加时间检测 b50f9b4
* **css:** focus样式修改 63039cb


### Bug Fixes

* 404页面头部 92f87aa

### [0.7.2](///compare/v0.7.1...v0.7.2) (2023-04-02)


### Features

* 添加多种头部背景效果 d812b10


### Bug Fixes

* 滚动逻辑优化，tab键聚焦时自动恢复布局 4704044
* 仅shift+滚轮会触发滚动 20b78b1
* 夜间模式切换同步面板配置 ed3cf43

### [0.7.1](///compare/v0.7.0...v0.7.1) (2023-04-01)


### Bug Fixes

* 修复误操作带来的样式bug 8b4109f
* 页面头部布局填充 fca4da9

## [0.7.0](///compare/v0.6.0...v0.7.0) (2023-04-01)


### Features

* 图片fancybox添加 97664b1
* 增强tab键交互样式 1a685f6
* mdx代码块实现折叠、全屏、复制功能 618847c


### Bug Fixes

* rss误操作恢复 3aff211

## [0.6.0](///compare/v0.5.3...v0.6.0) (2023-03-24)


### Features

* 添加页面与昨日书、首页添加近期碎片 48cd471
* Markdown样式美化：链接，mark，引用 195f514
* mdx组件自动导入 e37513a

### [0.5.3](///compare/v0.5.2...v0.5.3) (2023-03-18)


### Features

* 简陋的夜间模式、额外的文章卡片和轮播、一些样式修改 35009f5
* css 修改 01733d6


### Bug Fixes

* 修复关闭twikoo时仍旧调用twikoo的问题 3bd457e

### [0.5.2](///compare/v0.5.1...v0.5.2) (2023-03-15)


### Features

* 豆瓣同步脚本更新，mark-item类型改为large、medium、small 071956e
* 首页添加最近评论 4f2cf0b
* 文章页添加字数统计 55afe3d
* 友链头像懒加载 f37b78e
* 站点面板近期标记显示icon f186349


### Bug Fixes

* 修复首页轮播图个数限制失效的问题 f5aef69

### [0.5.1](https://github.com/DORAKIKA/iak/compare/v0.5.0...v0.5.1) (2023-03-14)


### Features

* 标记面板和标签面板合并到站点面板中 ([ced9067](https://github.com/DORAKIKA/iak/commit/ced906754b8703b10820f39136342bd8e1686f06))
* 将主题配置移入全站面板中，并适配样式 ([c49e8d4](https://github.com/DORAKIKA/iak/commit/c49e8d47daf510c72f3ab3372f3ae45dad884ce2))
* 可选白色卡片配置 ([c2b9ca2](https://github.com/DORAKIKA/iak/commit/c2b9ca22c0accc10b0466418f146b39122f81982))
* 样式修改 ([37226f6](https://github.com/DORAKIKA/iak/commit/37226f6b37469ee691f519d46f34d57360d8f4cb))


### Bug Fixes

* 补充说明 ([cbd3a3d](https://github.com/DORAKIKA/iak/commit/cbd3a3da54ca84666c17925e0ad9c8a134011478))

## [0.5.0](https://github.com/DORAKIKA/iak/compare/v0.4.3...v0.5.0) (2023-03-13)


### Features

* 面板从全屏更换为卡片弹窗 ([bcfafae](https://github.com/DORAKIKA/iak/commit/bcfafaec6081a92738730774dcef243e9b131f12))
* 添加从Notion同步豆瓣书影音的脚本 ([3d3bed0](https://github.com/DORAKIKA/iak/commit/3d3bed0a579915c814548aa27ae0f3f7666e33f1))
* mark页可选择添加limit限制个数 ([30b1490](https://github.com/DORAKIKA/iak/commit/30b14902d9b1955877a2032cea2304a42fa5efae))

### [0.4.3](https://github.com/DORAKIKA/iak/compare/v0.4.2...v0.4.3) (2023-03-12)


### Features

* 添加@astro/prefetch ([67fd1a3](https://github.com/DORAKIKA/iak/commit/67fd1a3e27381ca81f47348d4520195c73453833))

### [0.4.2](https://github.com/DORAKIKA/iak/compare/v0.4.1...v0.4.2) (2023-03-11)


### Features

* iak全局对象 ([f1a74c0](https://github.com/DORAKIKA/iak/commit/f1a74c0c3c234ff726537ed4c4fdeccdc859989e))


### Bug Fixes

* 取消twikoo的partytown配置 ([404a9ec](https://github.com/DORAKIKA/iak/commit/404a9ecb96965f69c66be28026d0431e50ab0d2b))
* 修复mark页所有分组会闪现的问题 ([d9cd281](https://github.com/DORAKIKA/iak/commit/d9cd2817eab511c91f0f768c26b3765cf8dbc244))

### [0.4.1](https://github.com/DORAKIKA/iak/compare/v0.4.0...v0.4.1) (2023-03-09)


### Features

* 书影音标记可切换分组 ([7eeb204](https://github.com/DORAKIKA/iak/commit/7eeb2043f2adb0911d7d3d2101e26fece944ab31))
* 样式修改 ([c7b55e8](https://github.com/DORAKIKA/iak/commit/c7b55e826a7e9994861364c0579a317048e16a00))

## [0.4.0](https://github.com/DORAKIKA/iak/compare/v0.3.4...v0.4.0) (2023-03-05)


### Features

* 添加全站面板与标签云 ([e9677e1](https://github.com/DORAKIKA/iak/commit/e9677e1c98828791de9a7f0e7d1bcfd09425d092))
* 添加一个标记书影音游的页面 ([ce03819](https://github.com/DORAKIKA/iak/commit/ce03819c15a6903b5a23aa357b2c808b29be4382))
* 主题添加图片背景控制 ([460471e](https://github.com/DORAKIKA/iak/commit/460471ea4ca60a80bdcddedffb530f515cdc9db0))
* hover样式 ([08617fa](https://github.com/DORAKIKA/iak/commit/08617fa3f05ee3939a3c43b135a68a952bbe1fb9))
* tag页面 ([a692e6b](https://github.com/DORAKIKA/iak/commit/a692e6bb20f3bb502b2a83dfbdf331a45b9b6aa9))


### Bug Fixes

* 修复布局问题 ([1464fc5](https://github.com/DORAKIKA/iak/commit/1464fc5a3a2c36472adf7b334a6928723a7578a5))
* snackbar样式 ([d3368b7](https://github.com/DORAKIKA/iak/commit/d3368b7a866748324a74090d7fe4c649eafdd547))
* tag 链接补充 ([47b05f8](https://github.com/DORAKIKA/iak/commit/47b05f83c465e0749e23aef3b6f3f61e9a0ef9dc))

### [0.3.4](https://github.com/DORAKIKA/iak/compare/v0.3.3...v0.3.4) (2023-03-03)


### Features

* 友链tag标记 ([abacbcd](https://github.com/DORAKIKA/iak/commit/abacbcd47fa2141b416cd6ec13be7bbc4b80f6d0))
* add snackbar.js ([23d8635](https://github.com/DORAKIKA/iak/commit/23d8635cc9f436a8f7c950152091391505583b1a))

### [0.3.3](https://github.com/DORAKIKA/iak/compare/v0.3.2...v0.3.3) (2023-03-02)


### Features

* 动画优化 ([da2612b](https://github.com/DORAKIKA/iak/commit/da2612b016e249225c6df667d69a17b307d5abe8))
* 添加星标文章轮播的最大数限制 ([2620511](https://github.com/DORAKIKA/iak/commit/262051169ecd6f76da8e7979654a6f58a0cc230f))
* 添加主题配置的验证与大圆角的启用 ([b4efcd8](https://github.com/DORAKIKA/iak/commit/b4efcd8d545971d2bd3c1edb8e35137ae94c5c5e))


### Bug Fixes

* 解决移动端scrollTo失效问题 ([9b1a55a](https://github.com/DORAKIKA/iak/commit/9b1a55aa4a038e926b0cc95b5bdb26214e0ff54a))
* 缩短窄屏下列表内边距，容纳更多内容 ([6d041e6](https://github.com/DORAKIKA/iak/commit/6d041e627b1d6081c3d346410b53934b5c5bc592))
* 修复分享卡片图片不居中的问题 ([783bb0c](https://github.com/DORAKIKA/iak/commit/783bb0c7dd8dcf71518ad6e55826531a184b4b03))
* 修复vue-client的样式打包问题 ([1517e41](https://github.com/DORAKIKA/iak/commit/1517e41233e533edc23f067e1e26d1f0a73ad63d))

### [0.3.2](https://github.com/DORAKIKA/iak/compare/v0.3.1...v0.3.2) (2023-03-02)


### Features

* open graph meta标签、重构了一些代码 ([86de15b](https://github.com/DORAKIKA/iak/commit/86de15bdca1da76246c1f02c8ff91d3e313511e5))
* SEO:a标签优化 ([8337f77](https://github.com/DORAKIKA/iak/commit/8337f772ac778c93b02fb8a9d7acca7abe5f3cb3))
* SEO:TDK优化 ([abd29d5](https://github.com/DORAKIKA/iak/commit/abd29d590d64d1cfdea8e48ae3dbec28bfa46398))


### Bug Fixes

* 首页icon背景大小与居中 ([213313c](https://github.com/DORAKIKA/iak/commit/213313cd72e307d9437bd0f0606b17b9a49135dc))
* 提供默认的作者与封面 ([0c76e4b](https://github.com/DORAKIKA/iak/commit/0c76e4b4ddd883d78a8569f4b2890fd6ce98f94f))
* 文章归档按时间排序 ([3f81375](https://github.com/DORAKIKA/iak/commit/3f813756479e46c8d0cded1c2bf9b6bc7036050b))
* 修复文章目录样式打包丢失问题 ([a663362](https://github.com/DORAKIKA/iak/commit/a663362203052ee7781744216134af889dcf00bf))

### [0.3.1](https://github.com/DORAKIKA/iak/compare/v0.3.0...v0.3.1) (2023-02-28)

## [0.3.0](https://github.com/DORAKIKA/iak/compare/v0.2.0...v0.3.0) (2023-02-27)


### Features

* 添加分享卡片 ([b1913f2](https://github.com/DORAKIKA/iak/commit/b1913f2b5d59be382271fbb988b05d3b428d850b))


### Bug Fixes

* html2canvas 路径更改 ([bf9e3a9](https://github.com/DORAKIKA/iak/commit/bf9e3a9db75d7a8e38343fb0dacfb3a193e432b0))

## [0.2.0](https://github.com/DORAKIKA/iak/compare/v0.1.1...v0.2.0) (2023-02-25)


### Features

* 文章归档采用分页器开启分页 ([e9d2653](https://github.com/DORAKIKA/iak/commit/e9d2653b460e2208e5478b16a2afb89c0c5b7c0a))


### Bug Fixes

* grid换flex解决样式错乱 ([c73c90b](https://github.com/DORAKIKA/iak/commit/c73c90b59fa237c04af39b64960b875ab039cb17))

### [0.1.1](https://github.com/DORAKIKA/iak/compare/v0.1.0...v0.1.1) (2023-02-25)


### Features

* **theme:** 顶栏可选择固定 ([57b5306](https://github.com/DORAKIKA/iak/commit/57b5306bad25b5df7a4b36f946dddf5c8596d29f))

## 0.1.0 (2023-02-24)


### Features

* 添加Toolbar与返回顶部按钮 ([64faf0c](https://github.com/DORAKIKA/iak/commit/64faf0c2bad9379a7ab2fc43ab81fce4ae7e6543))
* 页脚 ([88171e4](https://github.com/DORAKIKA/iak/commit/88171e46944a4932096a3600c466e055975c5ee7))
* 一个版权协议声明组件 ([154181a](https://github.com/DORAKIKA/iak/commit/154181a74759ba96dca159f0cae7b9ed2a7354a2))
* 窄屏菜单隐藏 ([61b3563](https://github.com/DORAKIKA/iak/commit/61b3563d7fc517bbee9d00565dbce9b70895d975))
* 支持配置大小圆角 ([a26a8a9](https://github.com/DORAKIKA/iak/commit/a26a8a928b919c29e4dc1af086b3e9ccd4abfb80))
* **components:** 一个离散滑块 ([cbab59a](https://github.com/DORAKIKA/iak/commit/cbab59ae45c44f4befb16c4ff02392d526746200))
* **config:** 梳理配置项 ([07e8c40](https://github.com/DORAKIKA/iak/commit/07e8c4071f6bc03e2f7dd6d1f8c41719da14be89))
* **config:** twikoo url 可配置 ([fe3be48](https://github.com/DORAKIKA/iak/commit/fe3be481b84aac5955578ffcf1002a3d05c8d50f))
* **integrations:** 添加partytown扩展以支持web worker ([f942cfc](https://github.com/DORAKIKA/iak/commit/f942cfcb194341f05fad7d4121ce09ad7c79fa85))
* **MDX:** 添加details详情展开块及样式 ([25b2ede](https://github.com/DORAKIKA/iak/commit/25b2edec333c8b925185e30acd6533de2f926048))
* **mdx:** 添加Tip组件 ([bc4dfce](https://github.com/DORAKIKA/iak/commit/bc4dfceed412e4cd63a602e7c4d0ee32f64690d8))
* **robot:** robot.txt ([8f80b65](https://github.com/DORAKIKA/iak/commit/8f80b65bfa5ff30b7e078116c35d3094228235ea))
* **style:** 样式优化 ([57257b0](https://github.com/DORAKIKA/iak/commit/57257b02997e13dfa95b58293dfe1ce3d626c019))
* **test:** serviceWorker扩展尝试 ([54619b6](https://github.com/DORAKIKA/iak/commit/54619b6fa795f7b837344e8c7d719d96bd933cd5))
* **theme:** 主题配置与新增亮度配置 ([d149f2e](https://github.com/DORAKIKA/iak/commit/d149f2ec24ca4b3fed0e9802de3a1355e856476a))
* **toolbar:** 增加文章目录 ([1fc23bd](https://github.com/DORAKIKA/iak/commit/1fc23bd6ef5b40d5951242712d94551caed01b6c))
* twikoo 可禁用 ([c51495f](https://github.com/DORAKIKA/iak/commit/c51495f3247297e89f770972c6c5a1583ebe54b0))


### Bug Fixes

* 颜色兼容移动端 ([ff4d869](https://github.com/DORAKIKA/iak/commit/ff4d869da5f5a23c1ce34ea9100366c1f70488b2))
* 样式隔离 ([66630e7](https://github.com/DORAKIKA/iak/commit/66630e7e015675227db7528147fcedcbca3f6de5))
* 样式修复 ([dd37427](https://github.com/DORAKIKA/iak/commit/dd3742707fbb92ae09b00c84c99a7a1920cb5614))
* 重复的h1标记 ([47f3f61](https://github.com/DORAKIKA/iak/commit/47f3f610ccfa29d98e32ad8eca698cb99e9215b2))
* client:only组件的css单独提取 ([290d808](https://github.com/DORAKIKA/iak/commit/290d8089d2d43b317f6640a623dc7c21906e5bb1))
* **components:** 组件样式bug修复 ([a1028b5](https://github.com/DORAKIKA/iak/commit/a1028b5f1631e6d71a26fef9eb59591af6ec6680))
* **css:** twikoo css 选择器权重问题 ([aa5ab1c](https://github.com/DORAKIKA/iak/commit/aa5ab1ccea3da443a7e0ae9daa1d0088dc3ca110))
* rss 字段 ([bf00746](https://github.com/DORAKIKA/iak/commit/bf007469e2373661b336925ece81f3422f419a00))
* **sitemap:** sitemap配置 ([41e871e](https://github.com/DORAKIKA/iak/commit/41e871e175bd0164e10d83a2cf18cbc6c12b7165))
* **slider:** slider以star大小排序 ([361b03b](https://github.com/DORAKIKA/iak/commit/361b03b52df15a9a0c1bc49988bca367ced262e5))

### 0.0.2 (2023-02-23)


### Features

* 添加Toolbar与返回顶部按钮 ([64faf0c](https://github.com/DORAKIKA/iak/commit/64faf0c2bad9379a7ab2fc43ab81fce4ae7e6543))
* 页脚 ([88171e4](https://github.com/DORAKIKA/iak/commit/88171e46944a4932096a3600c466e055975c5ee7))
* 窄屏菜单隐藏 ([61b3563](https://github.com/DORAKIKA/iak/commit/61b3563d7fc517bbee9d00565dbce9b70895d975))
* 支持配置大小圆角 ([a26a8a9](https://github.com/DORAKIKA/iak/commit/a26a8a928b919c29e4dc1af086b3e9ccd4abfb80))
* **components:** 一个离散滑块 ([cbab59a](https://github.com/DORAKIKA/iak/commit/cbab59ae45c44f4befb16c4ff02392d526746200))
* **config:** 梳理配置项 ([07e8c40](https://github.com/DORAKIKA/iak/commit/07e8c4071f6bc03e2f7dd6d1f8c41719da14be89))
* **config:** twikoo url 可配置 ([fe3be48](https://github.com/DORAKIKA/iak/commit/fe3be481b84aac5955578ffcf1002a3d05c8d50f))
* **integrations:** 添加partytown扩展以支持web worker ([f942cfc](https://github.com/DORAKIKA/iak/commit/f942cfcb194341f05fad7d4121ce09ad7c79fa85))
* **MDX:** 添加details详情展开块及样式 ([25b2ede](https://github.com/DORAKIKA/iak/commit/25b2edec333c8b925185e30acd6533de2f926048))
* **mdx:** 添加Tip组件 ([bc4dfce](https://github.com/DORAKIKA/iak/commit/bc4dfceed412e4cd63a602e7c4d0ee32f64690d8))
* **robot:** robot.txt ([8f80b65](https://github.com/DORAKIKA/iak/commit/8f80b65bfa5ff30b7e078116c35d3094228235ea))
* **style:** 样式优化 ([57257b0](https://github.com/DORAKIKA/iak/commit/57257b02997e13dfa95b58293dfe1ce3d626c019))
* **test:** serviceWorker扩展尝试 ([54619b6](https://github.com/DORAKIKA/iak/commit/54619b6fa795f7b837344e8c7d719d96bd933cd5))
* **theme:** 主题配置与新增亮度配置 ([d149f2e](https://github.com/DORAKIKA/iak/commit/d149f2ec24ca4b3fed0e9802de3a1355e856476a))
* **toolbar:** 增加文章目录 ([1fc23bd](https://github.com/DORAKIKA/iak/commit/1fc23bd6ef5b40d5951242712d94551caed01b6c))
* twikoo 可禁用 ([c51495f](https://github.com/DORAKIKA/iak/commit/c51495f3247297e89f770972c6c5a1583ebe54b0))


### Bug Fixes

* 颜色兼容移动端 ([ff4d869](https://github.com/DORAKIKA/iak/commit/ff4d869da5f5a23c1ce34ea9100366c1f70488b2))
* 样式隔离 ([66630e7](https://github.com/DORAKIKA/iak/commit/66630e7e015675227db7528147fcedcbca3f6de5))
* 样式修复 ([dd37427](https://github.com/DORAKIKA/iak/commit/dd3742707fbb92ae09b00c84c99a7a1920cb5614))
* client:only组件的css单独提取 ([290d808](https://github.com/DORAKIKA/iak/commit/290d8089d2d43b317f6640a623dc7c21906e5bb1))
* **components:** 组件样式bug修复 ([a1028b5](https://github.com/DORAKIKA/iak/commit/a1028b5f1631e6d71a26fef9eb59591af6ec6680))
* **css:** twikoo css 选择器权重问题 ([aa5ab1c](https://github.com/DORAKIKA/iak/commit/aa5ab1ccea3da443a7e0ae9daa1d0088dc3ca110))
* rss 字段 ([bf00746](https://github.com/DORAKIKA/iak/commit/bf007469e2373661b336925ece81f3422f419a00))
* **sitemap:** sitemap配置 ([41e871e](https://github.com/DORAKIKA/iak/commit/41e871e175bd0164e10d83a2cf18cbc6c12b7165))
* **slider:** slider以star大小排序 ([361b03b](https://github.com/DORAKIKA/iak/commit/361b03b52df15a9a0c1bc49988bca367ced262e5))
