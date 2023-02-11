---
title: 自定义右键菜单
date: 2022-01-18
tags: 
- 博客改造
category: 博客
cover: https://img.dorakika.cn/md/20220118.png
slug: '20220118'
star: 3
---
::note{type=warning icon="fas fa-battery-half"}
开发中...
::

{% folding 效果预览 %}
![image-20220120172325136](https://img.dorakika.cn/md/image-20220120172325136.png)

{% endfolding %}

## 写在前面

::note{type=info icon="fas fa-bullhorn"}
我这里使用用的图标为阿里图标：`i.iconfont.icon-xxx`，你可自行替换类名将其设置为font awesome的图标
::
::note{type=error icon="fas fa-fan"}
为了偷懒，js中还引用了jQuery，请在使用前将其引入或自行将js代码改为原生js
::

## 结构

- 首先，想要一个右键菜单，就得向页面中插入一个Dom结构
- 因为是右键唤醒菜单，与页面其他元素无关联，所以可以将此结构直接插入在body下
- 适配于butterfly主题，即新建一个`rightmenu.pug`文件（见下方），位置放在layout文件夹中即可
- 然后在`themes/butterfly/layout/includes/layout.pug`中引入（注意缩进）

```diff
doctype html
html(lang=config.language data-theme=theme.display_mode class=htmlClassHideAside)
  head
    include ./head.pug
  body
    ...

    else
      include ./404.pug

    include ./rightside.pug
    !=partial('includes/third-party/search/index', {}, {cache: true})
+    !=partial('includes/dorakika/rightmenu',{}, {cache:true})
    include ./additional-js.pug
```

- `rightmenu.pug`

```pug
#rightMenu
	.rightMenu-group.rightMenu-small
		a.rightMenu-item(href="javascript:window.history.back();")
			i.iconfont.icon-back
		a.rightMenu-item(href="javascript:window.history.forward();")
			i.iconfont.icon-enter
		a.rightMenu-item(href="javascript:window.location.reload();")
			i.iconfont.icon-chexiao
		a.rightMenu-item(href="javascript:rmf.scrollToTop();")
			i.iconfont.icon-top
	.rightMenu-group.rightMenu-line.hide#menu-text
		a.rightMenu-item(href="javascript:rmf.copySelect();")
			i.iconfont.icon-copy
			span='复制'
	.rightMenu-group.rightMenu-line
		a.rightMenu-item(href="javascript:rmf.switchDarkMode();")
			i.iconfont.icon-DarkTheme
			span='昼夜切换'
		a.rightMenu-item(href="javascript:rmf.switchReadMode();")
			i.iconfont.icon-read
			span='阅读模式'
```

## 样式

- 现在，结构已经插入，如果此时预览，就会看到一堆文字被插入到页面底部。
- 样式文件没啥说的，学一下css就可以自己修改了。
- 你可以通过`config.yml`中的inject将其引入，也可以通过@import引入到.styl文件中

```css
/* rightMenu */
#rightMenu{
	display: none;
	position: fixed;
	width: 160px;
	height: fit-content;
	top: 10%;
	left: 10%;
	background-color: var(--card-bg);
	border: 1px solid var(--font-color);
	border-radius: 8px;
	z-index: 100;
}
#rightMenu .rightMenu-group{
	padding: 7px 6px;
}
#rightMenu .rightMenu-group:not(:nth-last-child(1)){
	border-bottom: 1px solid var(--font-color);
}
#rightMenu .rightMenu-group.rightMenu-small{
	display: flex;
	justify-content: space-between;
}
#rightMenu .rightMenu-group .rightMenu-item{
	height: 30px;
	line-height: 30px;
	border-radius: 8px;
	transition: 0.3s;
	color: var(--font-color);
}
#rightMenu .rightMenu-group.rightMenu-line .rightMenu-item{
	display: flex;
	height: 40px;
	line-height: 40px;
	padding: 0 4px;
}
#rightMenu .rightMenu-group .rightMenu-item:hover{
	background-color: var(--text-bg-hover);
}
#rightMenu .rightMenu-group .rightMenu-item i{
	display: inline-block;
	text-align: center;
	line-height: 30px;
	width: 30px;
	height: 30px;
	padding: 0 5px;
}
#rightMenu .rightMenu-group .rightMenu-item span{
	line-height: 30px;
}

#rightMenu .rightMenu-group.rightMenu-line .rightMenu-item *{
	height: 40px;
	line-height: 40px;
}
.rightMenu-group.hide{
	display: none;
}
```

## 脚本

- 首先要实现的就是控制右键菜单的显示与隐藏：这里使用ontextmenu事件唤醒右键菜单，然后当点击事件发生后，关闭右键菜单
- 从上面的pug文件可以看出，是用a标签加上函数调用实现的各功能项
- 于是，就需要在一个全局对象身上定义一些函数来供这些a标签使用了：这里定义一个rmf对象（rightmenu function），来存放一些函数

```js
let rmf = {};
rmf.showRightMenu = function(isTrue, x=0, y=0){
    let $rightMenu = $('#rightMenu');
    $rightMenu.css('top',x+'px').css('left',y+'px');

    if(isTrue){
        $rightMenu.show();
    }else{
        $rightMenu.hide();
    }
}
rmf.switchDarkMode = function(){
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
        activateDarkMode()
        saveToLocal.set('theme', 'dark', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
    } else {
        activateLightMode()
        saveToLocal.set('theme', 'light', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
    }
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme()
    typeof FB === 'object' && window.loadFBComment()
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
};
rmf.switchReadMode = function(){
    const $body = document.body
    $body.classList.add('read-mode')
    const newEle = document.createElement('button')
    newEle.type = 'button'
    newEle.className = 'fas fa-sign-out-alt exit-readmode'
    $body.appendChild(newEle)

    function clickFn () {
        $body.classList.remove('read-mode')
        newEle.remove()
        newEle.removeEventListener('click', clickFn)
    }

    newEle.addEventListener('click', clickFn)
}

//复制选中文字
rmf.copySelect = function(){
    document.execCommand('Copy',false,null);
    //这里可以写点东西提示一下 已复制
}

//回到顶部
rmf.scrollToTop = function(){
    btf.scrollToDest(0, 500);
}

// 右键菜单事件
if(! (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
    window.oncontextmenu = function(event){
        $('.rightMenu-group.hide').hide();
        //如果有文字选中，则显示 文字选中相关的菜单项
        if(document.getSelection().toString()){
            $('#menu-text').show();
        }

        let pageX = event.clientX + 10;
        let pageY = event.clientY;
        let rmWidth = $('#rightMenu').width();
        let rmHeight = $('#rightMenu').height();
        if(pageX + rmWidth > window.innerWidth){
            pageX -= rmWidth+10;
        }
        if(pageY + rmHeight > window.innerHeight){
            pageY -= pageY + rmHeight - window.innerHeight;
        }



        rmf.showRightMenu(true, pageY, pageX);
        return false;
    };

    window.addEventListener('click',function(){rmf.showRightMenu(false);});
}
```



{% folding 旧版 %}

## UI结构

### 新建rightMenu.pug文件

> 为了便于管理，我是新建了一个文件夹dorakika，存放自建的pug文件

::note{type=info icon="fas fa-bullhorn"}
`i.iconfont.icon-xxx`是在引用阿里图标
::

eg: `...butterfly/layout/includes/dorakika/rightmenu.pug`

```pug
#rightMenu
  .rightMenu-group.rightMenu-small
    .rightMenu-item#menu-backward
      i.iconfont.icon-back
    .rightMenu-item#menu-forward
      i.iconfont.icon-enter
    .rightMenu-item#menu-refresh
      i.iconfont.icon-chexiao
    .rightMenu-item#menu-home
      i.iconfont.icon-home
  .rightMenu-group.rightMenu-line
    .rightMenu-item#menu-darkmode
      i.iconfont.icon-DarkTheme
      span='昼夜切换'
    .rightMenu-item#menu-readmode
      i.iconfont.icon-read
      span='阅读模式'
    .rightMenu-item#menu-themeChange
      i.iconfont.icon-theme
      span='主题切换'
```

### 将pug文件引入布局文件中

编辑`...butterfly/layout/includes/layout.pug`

```diff
doctype html
html(lang=config.language data-theme=theme.display_mode class=htmlClassHideAside)
  head
    include ./head.pug
  body
    ...

    else
      include ./404.pug

    include ./rightside.pug
    !=partial('includes/third-party/search/index', {}, {cache: true})
+    !=partial('includes/dorakika/rightmenu',{}, {cache:true})
    include ./additional-js.pug
```

## 编写样式文件，并引入

> 你可以直接在自定义的css中直接编写，然后在主题文件夹下的`_config.yml`文件中通过inject引入
>
> 也可以像我一样在一个所有页面都会加载的`.styl`文件中`import`导入（我这样做的目的是为了适配主题切换，因为我保留了原版主题，然后通过一个单独的css文件加载另一个主题；后续可通过加载/不加载此css文件来切换主题）

```css
/* rightMenu */
#rightMenu{
	display: none;
	position: fixed;
	width: 8rem;
	height: fit-content;
	top: 10%;
	left: 10%;
	background-color: var(--global-bg);
	box-shadow: var(--card-box-shadow);
	border-radius: 8px;
	z-index: 100;
}
#rightMenu .rightMenu-group{
	padding: 0.35rem 0.3rem;
}
#rightMenu .rightMenu-group:not(:nth-last-child(1)){
	border-bottom: 2px solid var(--font-color);
}
#rightMenu .rightMenu-group.rightMenu-small{
	display: flex;
	justify-content: space-between;
}
#rightMenu .rightMenu-group .rightMenu-item{
	height: 1.5rem;
	border-radius: 8px;
	transition: 0.3s;
}
#rightMenu .rightMenu-group.rightMenu-line .rightMenu-item{
	display: flex;
}
#rightMenu .rightMenu-group .rightMenu-item:hover{
	background-color: var(--text-bg-hover);
}
#rightMenu .rightMenu-group .rightMenu-item i{
	display: inline-block;
	text-align: center;
	line-height: 1.5rem;
	width: 1.5rem;
	height: 1.5rem;
	padding: 0 0.25rem;
}
#rightMenu .rightMenu-group .rightMenu-item span{
	line-height: 1.5rem;
}
```

## 各菜单项功能实现
::note{type=info icon="fas fa-bullhorn"}
我是将工具函数都写进了一个对象kk，便于集中管理
::

::note{type=error icon="fas fa-fan"}
用了jq，复制代码的话记得在之前导入jq；或者自己转化为原生js
::

### 菜单的显示隐藏

> 根据event对象的属性，确定鼠标位置，然后更改菜单位置并显示

```js
kk.showRightMenu = function(isTrue, x=0, y=0){
    let $rightMenu = $('#rightMenu');
    $rightMenu.css('top',x+'px').css('left',y+'px');

    if(isTrue){
        $rightMenu.show();
    }else{
        $rightMenu.hide();
    }
}

let rmWidth = $('#rightMenu').width();
let rmHeight = $('#rightMenu').height();
window.oncontextmenu = function(event){
    let pageX = event.clientX + 10;	//加10是为了防止显示时鼠标遮在菜单上
    let pageY = event.clientY;
    
    // 菜单默认显示在鼠标右下方，当鼠标靠右或靠下时，将菜单显示在鼠标左方\上方
    if(pageX + rmWidth > window.innerWidth){
        pageX -= rmWidth;
    }
    if(pageY + rmHeight > window.innerHeight){
        pageY -= rmHeight;
    }
    
    kk.showRightMenu(true, pageY, pageX);
    return false;
};

window.addEventListener('click',function(){kk.showRightMenu(false);});	//隐藏菜单
```



### 前进、后退、刷新

> 这三个功能直接使用浏览器的api

```js
$('#menu-backward').on('click',function(){window.history.back();});
$('#menu-forward').on('click',function(){window.history.forward();});
$('#menu-refresh').on('click',function(){window.location.reload();});
```

### 阅读模式·昼夜切换

> 这两个功能的代码是直接从butterfly的源码中扒下来的

```js
kk.switchDarkMode = function(){
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
        activateDarkMode()
        saveToLocal.set('theme', 'dark', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
    } else {
        activateLightMode()
        saveToLocal.set('theme', 'light', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
    }
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme()
    typeof FB === 'object' && window.loadFBComment()
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
};
kk.switchReadMode = function(){
    const $body = document.body
    $body.classList.add('read-mode')
    const newEle = document.createElement('button')
    newEle.type = 'button'
    newEle.className = 'fas fa-sign-out-alt exit-readmode'
    $body.appendChild(newEle)

    function clickFn () {
        $body.classList.remove('read-mode')
        newEle.remove()
        newEle.removeEventListener('click', clickFn)
    }

    newEle.addEventListener('click', clickFn)
}


$('#menu-darkmode').on('click',kk.switchDarkMode);
$('#menu-readmode').on('click',kk.switchReadMode);
```

### 回到主页

> 这个功能感觉有点没必要，后续会转换成回到顶部，然后移掉右侧的工具栏

```js
$('#menu-home').on('click',function(){window.location.href = window.location.origin;});
```

### 主题切换

> 1. 思路是将主题css代码放入一个文件中；这样就会有多个主题css；然后通过更改link标签的href属性进行文件的切换
> 2. 通过localStorage来缓存当前主题，下一次加载即可加载对应主题

```js
kk.switchTheme=function(load=false){
    //空字符串表示butterfly原版主题（即不加载css）
    //FallGuys.css是我自己的魔改主题，需替换
    let themes = ['FallGuys.css',''];
    let vTheme = parseInt(localStorage.getItem('visitor-theme'));
    if(!vTheme){
        vTheme = load?0:1;
    }else{
        vTheme += load?0:1;
        vTheme%=themes.length;
    }
    localStorage.setItem('visitor-theme',vTheme)
    let themesrc = ''
    if(themes[vTheme]){
        themesrc += window.location.origin+'/css/dorakika/'+themes[vTheme];
    }
    //css引入时link标签添加属性tag="theme"
    $(document.head).find('[tag="theme"]')[0].href = themesrc;
};

$('#menu-themeChange').on('click',function(){kk.switchTheme();});

window.addEventListener('load',function(){kk.switchTheme(true);});	//页面加载时，通过缓存加载主题
```

### 完整JS

```js
let kk = {};
kk.showRightMenu = function(isTrue, x=0, y=0){
    let $rightMenu = $('#rightMenu');
    $rightMenu.css('top',x+'px').css('left',y+'px');

    if(isTrue){
        $rightMenu.show();
    }else{
        $rightMenu.hide();
    }
}
kk.switchDarkMode = function(){
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
        activateDarkMode()
        saveToLocal.set('theme', 'dark', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
    } else {
        activateLightMode()
        saveToLocal.set('theme', 'light', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
    }
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme()
    typeof FB === 'object' && window.loadFBComment()
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
};
kk.switchReadMode = function(){
    const $body = document.body
    $body.classList.add('read-mode')
    const newEle = document.createElement('button')
    newEle.type = 'button'
    newEle.className = 'fas fa-sign-out-alt exit-readmode'
    $body.appendChild(newEle)

    function clickFn () {
        $body.classList.remove('read-mode')
        newEle.remove()
        newEle.removeEventListener('click', clickFn)
    }

    newEle.addEventListener('click', clickFn)
}
kk.switchTheme=function(load=false){
    //空字符串表示butterfly原版主题（即不加载css）
    //FallGuys.css是我自己的魔改主题，需替换
    let themes = ['FallGuys.css',''];
    let vTheme = parseInt(localStorage.getItem('visitor-theme'));
    if(!vTheme){
        vTheme = load?0:1;
    }else{
        vTheme += load?0:1;
        vTheme%=themes.length;
    }
    localStorage.setItem('visitor-theme',vTheme)
    let themesrc = ''
    if(themes[vTheme]){
        themesrc += window.location.origin+'/css/dorakika/'+themes[vTheme];
    }
    //css引入时link标签添加属性tag="theme"
    $(document.head).find('[tag="theme"]')[0].href = themesrc;
};


// 菜单的show/hide
let rmWidth = $('#rightMenu').width();
let rmHeight = $('#rightMenu').height();
window.oncontextmenu = function(event){
    let pageX = event.clientX + 10;	//加10是为了防止显示时鼠标遮在菜单上
    let pageY = event.clientY;
    
    // 菜单默认显示在鼠标右下方，当鼠标靠右或靠下时，将菜单显示在鼠标左方\上方
    if(pageX + rmWidth > window.innerWidth){
        pageX -= rmWidth;
    }
    if(pageY + rmHeight > window.innerHeight){
        pageY -= rmHeight;
    }
    
    kk.showRightMenu(true, pageY, pageX);
    return false;
};

window.addEventListener('click',function(){kk.showRightMenu(false);});	//隐藏菜单

//菜单功能绑定
$('#menu-backward').on('click',function(){window.history.back();});
$('#menu-forward').on('click',function(){window.history.forward();});
$('#menu-refresh').on('click',function(){window.location.reload();});
$('#menu-darkmode').on('click',kk.switchDarkMode);
$('#menu-readmode').on('click',kk.switchReadMode);
$('#menu-home').on('click',function(){window.location.href = window.location.origin;});
$('#menu-themeChange').on('click',function(){kk.switchTheme();});

window.addEventListener('load',function(){kk.switchTheme(true);});	//页面加载时，通过缓存加载主题
```

{% endfolding %}

