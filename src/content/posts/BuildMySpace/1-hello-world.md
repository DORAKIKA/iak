---
title: 博客搭建+改装
date: '2021-10-17'
tags: 
    - butterfly
    - 博客改造
category: 博客
cover: https://img.dorakika.cn/md/20211012.png
slug: '20211017'
star: 4
description: 记录一下本博客的坎坷历程YaY
---

::note{type=info}
info 本文记录博客魔改过程，随魔改进度更新
::



## 近期更新



{% timeline  %}

{% timenode 2020.10.19 %}

- twikoo评论图床已配置
- 友链朋友圈换版了 —— [pyq](/fcircle/)

{% endtimenode  %}

{% timenode 2020.06.08 %}

- 引入了新的link外挂标签——from[HEO](https://blog.zhheo.com/p/ccaf9148.html)

{% endtimenode  %}

{% timenode 2020.06.08 %}

- 右键菜单小小封装了一下，先试一下效果
- 页脚改成了彩色打字效果
- 右键菜单使用ctrl+右击可打开原生菜单

{% endtimenode  %}

{% timenode 2020.05.07 %}

- 调整了一下css，两个主题的主题色独立了
- 在外挂标签的基础上修改了一下site-card，用在个人页面网站展示上了

{% endtimenode  %}

{% timenode 2020.04.20 %}

- 侧边栏添加了切换自定义设置的按钮，准备取消悬浮栏了（qaq，悬浮按钮有点占位置，影响使用），并且自定义设置里面也可以切换博客主题
- 导航栏博客昵称霓虹灯效果
- 添加了51la统计与灵雀应用监控——参考【[HEO](https://blog.zhheo.com/p/c7c43433.html)】
- 评论可以以弹幕形式显示

{% endtimenode  %}

{% timenode 2020.04.18 %}

- [添加](/p/20220418.html)了一个[留言板](/barrage/)功能，快去留言QAQ

{% endtimenode  %}

{% timenode 2020.04.13 %}

- 直接把头像链接与QQ头像同步，嘿嘿
- 写了个简洁模式的样式，首次进入默认此样式，通过切换可转换到之前的糖豆人样式（主要是因为糖豆人那个有点晃眼
- 碎碎念数据源替换成了我写的一个webApp（还在开发中），数据从坚果云获取（通过云函数解决跨域）

{% endtimenode  %}

{% timenode 2020.04.09 %}

- 字体调大了点

{% endtimenode  %}

{% timenode 2020.04.01 %}

- 愚人节重大更新（

{% endtimenode  %}

{% endtimeline %}



## Long Long ago

{% folding 2022.03-默认蓝色清凉模式-支持小幅度定制 %}

{% timeline  %}



{% timenode 2020.03.20 %}

- 右键设置可定制博客主题色（仅昼夜模式为昼生效）
- 右键设置可定制layout区域透明度

{% endtimenode  %}

{% timenode 2020.03.18 %}

- 标签云增加上下标-from[Eurkon](https://blog.eurkon.com/post/6687849c.html)

{% endtimenode  %}

{% timenode 2020.03.17 %}

- 新域名dorakika.cn已完成备案，可以正常访问了

{% endtimenode  %}



{% timenode 2020.03.15 %}

- 手机端文章底部推荐文章与上一篇下一篇 卡片缩小
- sidebarUI优化
- 手机端添加一个小圆点悬浮导航（测试）

{% endtimenode  %}



{% timenode 2020.03.13 %}

- 加入[开往-友链接力](https://github.com/volfclub/travellings)🚇
- 参考[Akilar](https://akilar.top/posts/62f13a97/)添加[朋友圈](/fcircle/)页面;并做样式调增
- 首页添加【分类】【标签】块

{% endtimenode  %}



{% timenode 2020.03.12 %}

- 修改底部UI，添加页脚打字机效果-参考[HEO](https://blog.zhheo.com/p/62e9e069.html)
- 域名更新为dorakika.cn
- dorakika.cn已在萌国ICP备案-加入页脚萌ICP链接
- Markdown渲染后的列表样式优化，添加小圆点，增强区分度与条理性
- [分类与标签子页面添加导航条](/p/20220313.html)，优化文章列表UI

{% endtimenode  %}



{% timenode 2020.03.03 %}

- 优化-右键菜单在鼠标于底部唤出时可能会溢出可视区
- 右键菜单添加文本复制功能
- 右键菜单添加选中文本后直达评论区，并自动填入选中文本（Markdown引用样式）
- 博客主题升级至butterfly4.1.0，并适配之前魔改样式

{% endtimenode  %}



{% endtimeline  %}

{% endfolding %}



{% folding 原生butterfly主题魔改至糖豆人UI %}

{% timeline  %}



{% timenode 2020.01.16 %}

- 添加[自定义右键菜单](/p/20220303.html)-支持前进、后退、刷新、回到顶部、昼夜切换、主题切换功能
- 主题样式大改，UI参考糖豆人游戏（因改动太多，之前一些插件暂时禁用，样式适配后重新装配）

{% endtimenode  %}



{% timenode 2022.01.06 %}

- Vercel镜像站建立-参考[【Akilar】使用Vercel来加速Hexo博客](https://akilar.top/posts/812734f8/)

{% endtimenode  %}



{% timenode 2021.11.09 %}

- 参考[【Akilar】页脚计时器](https://akilar.top/posts/b941af/)美化页脚
- 参考[【Akilar】首页轮播图](https://akilar.top/posts/8e1264d1/)添加首页轮播图

{% endtimenode  %}



{% timenode 2021.10.23 %}

- 参考[【HEO】Hexo-Butterfly说说朋友圈适配（哔哔 for 腾讯云）自用](https://blog.zhheo.com/p/a6947667.html)配置[碎碎念](/bb/)页面
- 参考[【卓越科技】搞笑标题](https://blog.zykjofficial.top/posts/e55bad60/#%E6%90%9E%E7%AC%91%E6%A0%87%E9%A2%98)配置标题变化

{% endtimenode  %}



{% timenode 2021.10.19 %}

- 配置Markdown图床到gitee（大于1M无法显示，得换个图床）

{% endtimenode  %}



{% timenode 2021.10.19 %}

- 参照[【小冰博客】hexo-electric-clock 电子时钟插件](https://zfe.space/post/hexo-electric-clock.html)添加天气电子时钟
- 参照[【Akilar】Tag Plugins Plus插件](https://akilar.top/posts/615e2dec/)加入大量外挂标签

{% endtimenode  %}



{% timenode 2021.10.18 %}

- 参照[小冰博客](https://zfe.space/post/15655.html)加入分类磁贴

{% endtimenode  %}


{% timenode 2021.10.17 %}

- 使用github Pages搭建hexo博客成功
- 配置butterfly主题

{% endtimenode  %}

{% endtimeline %}





{% endfolding %}















