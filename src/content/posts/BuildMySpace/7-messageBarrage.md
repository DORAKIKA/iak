---
title: 添加一个留言弹幕页面
date: 2022-04-18
tags: 
- butterfly
- 博客改造
category: 博客
cover: https://img.dorakika.cn/md/20220418.png
# swiper_index: 1
star: 2
description: 搞得像直播间弹幕一样，TuT
slug: '20220418'
---

## 前言

> [点我预览](/barrage/)

本来是准备做一个留言的地方，这样一些与文章内容无关的留言有地方可以放了。但是又想着如果只是加一个带有评论的空白页面未免有些太单调了，于是就准备做一个弹幕展示框（灵感来源于找API时偶然遇到的[韩小韩](https://www.vvhan.com/message.html)）

::note{type=warning}
本次魔改基于Twikoo评论系统，其他评论系统的小伙伴可以看着自己改一改
::

## 改造步骤

### 新建一个页面

- 首先在`source`目录下新建一个`barrage`目录（名字可以任取），并在其内新建一个`index.md`

```markdown
---
title: 留言
date: 2022-04-18
type: "barrage"
aside: false
permalink: /barrage/
---


<div id="barrage-container">
	<div class="loading">与主机通讯中……</div>
</div>

<link rel="stylesheet" href="/css/barrage.css">
<script type="text/javascript" src="/js/barrage.js"></script>

```

### CSS

- `source/css/barrage.css`
- css就不用多说了，直接引用就行，不合适的再改一改就可以了

```css
#barrage-container{
	width: 100%;
	height: 400px;
	background: var(--blockquote-bg);
	background-size: cover;
	background-position: center;
	border-radius: 8px;
	position: relative;
}

#barrage-container .barrage{
	min-width: 150px;
	max-width: 300px;
	min-height: 80px;
	max-height: 300px;
	position: absolute;
	padding: 8px;
	background: rgba(0, 0, 0, 0.9);
	border-radius: 8px;
	color: #fff;
	animation: barrageIn 0.3s cubic-bezier(.25,.01,.5,1.5);
	transition: 1s;
	display: flex;
	flex-direction: column;
	border: 1px solid rgba(255, 255, 255, 0.2);
}
#barrage-container .barrage.out{
	opacity: 0;
}
@keyframes barrageIn{
	0%{
		transform: scale(0.1);
	},
	100%{
		transform: scale(1.0);
	}
}



#barrage-container .barrage .barrageHead{
	height: 30px;
	padding: 4px 0;
	line-height: 22px;
	font-size: 12px;
	border-bottom: 1px solid rgba(255,255,255,0.3);
    display: flex;
    justify-content: space-between;
}
#barrage-container .barrage .barrageAvatar{
	width: 16px;
	height: 16px;
	margin: 0;
	border-radius: 50%;
}
#barrage-container .barrage .barrageContent{
	font-size: 14px;
}
```

### JS

- `source/js/barrage.js`
- JS里的各参数看注释

```js
//这里可以定义弹幕的背景色与字体色
const barrageColors = [
	['#386adecc','#fffa'],
	['#9248f0cc','#fffa'],
	['#2da55dcc','#fffa'],
	['#ffc505cc','#fffc'],
	['#d44e30cc','#fffa']
]
//这两个是与随机位置的范围相关的
const maxBarrageWidth = 150;
const maxBarrageHeight = 100;
//最多同时显示的弹幕个数
const maxBarrage = 10;
//每个弹幕的间隔时间
const barrageTime = 1500;
//我用的是Vercel部署，这里链接就是Vercel的链接，腾讯云的自己琢磨一下哈，应该也差不多
const twikooUrl = "https://twikoo-bqktkw5rw-cifan-yk.vercel.app/";
//token要手动获取（反正我是开发者工具里获取的，教程在下面
const accessToken = "000111222333";
const pageUrl = "/barrage/"


const barrageTimer = [];
let barrageList = [];
let barrageIndex = 0;


const barrageDom = document.getElementById('barrage-container');
window.addEventListener('load',()=>{

	var data = JSON.stringify({
	  "event": "COMMENT_GET",
	  "accessToken": accessToken,
	  "url": pageUrl
	});

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function() {
	  if(this.readyState === 4) {
		barrageList = linkFilter(JSON.parse(this.responseText).data);
		barrageDom.innerHTML = '';
	  }
	});

	xhr.open("POST", twikooUrl);
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.send(data);

	setInterval(()=>{
		if(barrageList.length){
			popBarrage(barrageList[barrageIndex]);
			barrageIndex += 1;
			barrageIndex %= barrageList.length;
		}
		if(barrageTimer.length > (barrageList.length > maxBarrage?maxBarrage:barrageList.length)){
			removeBarrage(barrageTimer.shift())
		}
	},barrageTime)
})






function linkFilter(data){
	const newData = data.filter((comment)=>{
		return !comment.master;
	})
	return newData;
}
function popBarrage(data){
	let barrage = document.createElement('div');
	let width = barrageDom.clientWidth;
	let height = barrageDom.clientHeight;
	barrage.className = 'barrage'
	barrage.style.top = Math.floor(Math.random()*(height - maxBarrageHeight))+'px';
	barrage.style.left = Math.floor(Math.random()*(width - maxBarrageWidth))+'px';
	let ran = Math.floor(Math.random()*barrageColors.length)
	barrage.style.background = barrageColors[ran][0];
	barrage.style.color = barrageColors[ran][1];

	barrage.innerHTML = `
		<div class="barrageHead">
			<img class="barrageAvatar" src="https://cravatar.cn/avatar/${data.mailMd5}"/>
			<div class="barrageNick">${data.nick}</div>
		</div>
		<div class="barrageContent">${data.comment}</div>
	`
	barrageTimer.push(barrage);
	barrageDom.append(barrage);
    //防止溢出（这里防止随机位置产生的溢出，弹幕太大产生的溢出就要靠css了
	if(barrage.clientWidth+parseInt(barrage.style.left)>width){
		barrage.style.left = (width - barrage.clientWidth) + 'px';
	}
	if(barrage.clientHeight+parseInt(barrage.style.top)>height){
		barrage.style.top = (height - barrage.clientHeight) + 'px';
	}
}
function removeBarrage(barrage){
	barrage.className = 'barrage out';
	setTimeout(()=>{
		barrageDom.removeChild(barrage);
	},1000)
}

```

#### token获取

> 根据提醒，应用会话空间中就有token

![image-20220604231606756](https://img.dorakika.cn/md/image-20220604231606756.png)

- 找一个你开了评论的页面，打开F12控制台
- 找到网络选项卡，搜索twikoo（需要打开后刷新一下才会有请求）,下方的请求中选一个就可以找到accessToken了（没有就换一个）

![image-20220418232556673](https://img.dorakika.cn/md/image-20220418232556673.png)



## 拓展

- 受[Akilar](https://akilar.top)启发，可以将弹幕设置在文章页面内，然后通过侧边栏控制弹幕的显隐
- 然后就将上面的代码稍微改了一下，应用到文章页面去了（本来想做成Akilar说的那样，跟B站一样一条一条的，然后发现这种对于图片的显示以及长文字不太友好，于是还是采用留言页面的布局了

### 容器添加

- 因为是依托于评论建立起的弹幕，所以想要用户在开启评论的时候才会有弹幕显示，所以可以直接将容器加在整个评论容器中
- `...butterfly/layout/includes/third-party/comments/index.pug`
- 注意缩进
- 还是twikoo啊，其他评论自己改一下代码QAQ

```diff

#post-comment
  .comment-head
  	...


  .comment-wrap
    each name in theme.comments.use
      div
        case name
          when 'Disqus'
            #disqus_thread
          ...


+  .comment-barrage
+  link(rel="stylesheet" href="/css/commentBarrage.css")
+  script(src="/js/commentBarrage.js")
```

### /css/commentBarrage.css

```css
#post-comment .comment-barrage{
	position: fixed;
	bottom: 0;
	right: 55px;
	padding: 0 0 30px 10px;
	z-index: 100;
	display: flex;
	flex-direction: column;
	justify-content: end;
	align-items: flex-end;
}

@media screen and (max-width: 768px){
	#post-comment .comment-barrage{
		display: none;
	}
}
#post-comment .comment-barrage-item{
	min-width: 100px;
	max-width: 200px;
	width: fit-content;
	min-height: 80px;
	max-height: 144px;
	margin: 4px 0;
	padding: 8px;
	background: rgba(0, 0, 0, 0.9);
	border-radius: 8px;
	color: #fff;
	animation: barrageIn 0.3s cubic-bezier(.25,.01,.5,1.5);
	transition: 1s;
	display: flex;
	flex-direction: column;
	border: 1px solid rgba(255, 255, 255, 0.2);
}
#post-comment .comment-barrage-item.out{
	opacity: 0;
}
@keyframes barrageIn{
	0%{
		transform: scale(0.1);
	},
	100%{
		transform: scale(1.0);
	}
}



#post-comment .comment-barrage-item .barrageHead{
	height: 30px;
	padding: 0;
	line-height: 30px;
	font-size: 12px;
	border-bottom: 1px solid rgba(255,255,255,0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#post-comment .comment-barrage-item .barrageAvatar{
	width: 16px;
	height: 16px;
	margin: 0;
	border-radius: 50%;
}
#post-comment .comment-barrage-item .barrageContent{
	font-size: 14px;
	height: calc(100% - 30px);
	overflow: scroll;
}
#post-comment .comment-barrage-item .barrageContent::-webkit-scrollbar{
	height: 0;
	width: 4px;
}
#post-comment .comment-barrage-item .barrageContent::-webkit-scrollbar-button{
	display: none;
}
```

### /js/commentBarrage.js

```js
const commentBarrageConfig = {
	//颜色
	colors:[
		['rgba(56,106,178,0.93)','rgba(255,255,255,0.8)'],
		['rgba(146, 72, 240,0.93)','rgba(255,255,255,0.8)'],
		['rgba(45, 165, 93,0.93)','rgba(255,255,255,0.8)'],
		['rgba(255, 197, 5,0.93)','rgba(255,255,255,0.9)'],
		['rgba(212, 78, 48,0.93)','rgba(255,255,255,0.8)']
	],
	//同时最多显示弹幕数
	maxBarrage: 3,
	//弹幕显示间隔时间ms
	barrageTime: 3000,
	//twikoo部署地址腾讯云的为环境ID
	twikooUrl: "https://twikoo-bqktkw5rw-cifan-yk.vercel.app/",
	//token获取见上方
	accessToken: "987203b2c9e0535f6b54123e53aed13c",
	pageUrl: window.location.pathname,
	barrageTimer: [],
	barrageList: [],
	barrageIndex: 0,
	dom: document.querySelector('.comment-barrage'),

}



function initCommentBarrage(){
	console.log('123123')
		var data = JSON.stringify({
		  "event": "COMMENT_GET",
		  "commentBarrageConfig.accessToken": commentBarrageConfig.accessToken,
		  "url": commentBarrageConfig.pageUrl
		});
		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		xhr.addEventListener("readystatechange", function() {
		  if(this.readyState === 4) {
			commentBarrageConfig.barrageList = commentLinkFilter(JSON.parse(this.responseText).data);
			commentBarrageConfig.dom.innerHTML = '';
		  }
		});
		xhr.open("POST", commentBarrageConfig.twikooUrl);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(data);

		setInterval(()=>{
			if(commentBarrageConfig.barrageList.length){
				popCommentBarrage(commentBarrageConfig.barrageList[commentBarrageConfig.barrageIndex]);
				commentBarrageConfig.barrageIndex += 1;
				commentBarrageConfig.barrageIndex %= commentBarrageConfig.barrageList.length;
			}
			if(commentBarrageConfig.barrageTimer.length > (commentBarrageConfig.barrageList.length > commentBarrageConfig.maxBarrage?commentBarrageConfig.maxBarrage:commentBarrageConfig.barrageList.length)){
				removeCommentBarrage(commentBarrageConfig.barrageTimer.shift())
			}
		},commentBarrageConfig.barrageTime)

}
function commentLinkFilter(data){
	data.sort((a,b)=>{
		return a.created - b.created;
	})
	let newData = [];
	data.forEach(item=>{
		newData.push(...getCommentReplies(item));
	});
	return newData;
}
function getCommentReplies(item){
	if(item.replies){
		let replies = [item];
		item.replies.forEach(item=>{
			replies.push(...getCommentReplies(item));
		})
		return replies;
	}else{
		return [];
	}
}
function popCommentBarrage(data){
	let barrage = document.createElement('div');
	let width = commentBarrageConfig.dom.clientWidth;
	let height = commentBarrageConfig.dom.clientHeight;
	barrage.className = 'comment-barrage-item'
	let ran = Math.floor(Math.random()*commentBarrageConfig.colors.length)
	barrage.style.background = commentBarrageConfig.colors[ran][0];
	barrage.style.color = commentBarrageConfig.colors[ran][1];

	barrage.innerHTML = `
		<div class="barrageHead">
			<div class="barrageNick">${data.nick}</div>
			<img class="barrageAvatar" src="https://cravatar.cn/avatar/${data.mailMd5}"/>
		</div>
		<div class="barrageContent">${data.comment}</div>
	`
	commentBarrageConfig.barrageTimer.push(barrage);
	commentBarrageConfig.dom.append(barrage);
}
function removeCommentBarrage(barrage){
	barrage.className = 'comment-barrage-item out';
	setTimeout(()=>{
		commentBarrageConfig.dom.removeChild(barrage);
	},1000)
}


initCommentBarrage()
```

### 控制弹幕显隐

- 既然弹幕是在启用评论的时候才会出现，那控制按钮的逻辑自然也是这样。好在butterfly提供了一个直达评论的按钮，我们可以将控制弹幕显隐的按钮放在它一起

- `...butterfly/layout/includes/rightside.pug`

```diff
....
      when 'hideAside'
        if aside.enable && aside.button && page.aside !== false
          button#hide-aside-btn(type="button" title=_p('rightside.aside'))
            i.fas.fa-arrows-alt-h
      when 'toc'
        if showToc
          button#mobile-toc-button.close(type="button" title=_p("rightside.toc"))
            i.fas.fa-list-ul
      when 'chat'
        if chat_btn
          button#chat_btn(type="button" title=_p("rightside.chat"))
            i.fas.fa-sms
      when 'comment'
        if commentsJsLoad
          a#to_comment(href="#post-comment" title=_p("rightside.scroll_to_comment"))
            i.fas.fa-comments
+          a#switch_commentBarrage(href="javascript:switchCommentBarrage();" title="开关弹幕")
+            i.iconfont.icon-danmu

#rightside
....
```

- 在你的js中添加函数`switchCommentBarrage`

```js
function switchCommentBarrage(){
    let commentBarrage = document.querySelector('.comment-barrage');
    if(commentBarrage){
        $(commentBarrage).toggle()
    }
}
```





## 后记

- 目前在随机位置上面还没有达到预期，后续可能会固定弹幕宽高，然后随机就好办（但这样并不符合我想要的自适应宽高）；
- 还有就是现在样式只是简单写了一下，还没有弹幕的那种感觉（emm，慢慢写）
- 请求也可以换成最近评论（twikoo文档有提供）；其他评论系统步骤应该差不多，可自行魔改哈