---
title: css3学习笔记
date: 2021-06-07 11:14
tags:
- css
- 笔记
- web
category: code
cover: https://img.dorakika.cn/md/default.png
slug: '20210607'
---

## 选择器

### 基本选择器机器扩展

``` css
/* 通配符选择器-* */
*{
	margin:0;
	padding:0;
}
/*id选择器*/
#id{
    background-color:#123456;
}
/*类选择器-.*/
.item{
    width:100px;
    height:100px;
}
/*元素选择器-元素名*/
input{
    outline:none;
}
/*后代选择器-空格*/
.item ul li{
    color:blue;
}
/*子元素选择器*/
.father > .son{
    position:absolute;
}
/*通用兄弟选择器*/
.first ~ .third{
    color:green;
}
/*相邻兄弟选择器*/
.first + .second{
    color:red;
}
/*分组选择器-结合符（,)*/
h1,h2,h3{
    color:black;
}


/*属性选择器*/
div[attr]{		/*含有attr属性的元素*/
    background-color:pink;
}
div[attr=val]{		/*匹配属性attr值为val的元素*/
    background-color:pink;
}
div[attr~=val]{		/*匹配属性attr值含有val（以空格分隔）的元素*/
    background-color:pink;
}
div[attr|=val]{		/*匹配属性attr值以val或以val-开头的元素*/
    background-color:pink;
}
div[attr^=val]{		/*匹配属性attr值以val开头的元素*/
    background-color:pink;
}div[attr$=val]{		/*匹配属性attr值以val结尾的元素*/
    background-color:pink;
}
div[attr*=val]{		/*匹配属性attr值包含字符串val的元素*/
    background-color:pink;
}

/*伪类选择器*/
	/*链接伪类*/
a:link{		/*未被点过的a标签*/
    color: blue;
}
a:visited{	/*已被点过的a标签*/
    /* 只有color,background-color,border-color能应用于此选择器中 */
    color:green;
}
#container:target .item{	/*id为container且被锚点指向的元素 -> 其后代的含类名item的元素*/
    display:block;
}
	/*动态伪类*/
.box:hover{		/* 被鼠标滑入的.box */
    color:red;
}
.box:active{	/* 被鼠标点住的.box */
    color:blue;
}

	/*表单伪类*/
input:enabled{		/*未被禁用的表单*/
    background-color:green;
}
input:disabled{		/*已被禁用的表单*/
    background-color:red;
}
input:checked{		/*被选中的表单*/
    width:100px;
    height:100px;
}
input:focus{		/*被聚焦的表单*/
    opacity:0.6;
}

	/*结构性伪类*/
.item:nth-child(1){		/*与.item同级的元素中（包含它本身）第1个元素*/
    /*
    .item:first-child			是第一个子元素的元素
    .item:last-child			是最后一个子元素的元素
    ,item:nth-last-child(n)		与此同级的元素中的倒数第n个元素
    .item:only-child			是其父元素的唯一子元素
    */
    color: red;
}
.container div:nth-of-type(2){	/*与此div同级的元素中的第2个div*/
    /*			以元素为中心--就算是用类选择器来选择，得到的也是第n个同类标签元素
    div:first-of-type
    div:last-of-type
    div:nth-last-of-type	
    div:only-of-type		其父元素的唯一div
    */
    color:blue;
}
.box:empty{		/*内容为空的.box（空格都不能有）*/
    background-color:red;
}
a:not(:last-of-type){		/*去除某些选择器后所选的元素*/
    border-right:1px solid red;
}

	/*伪元素选择器*/
div:before{		/*由css生成的在元素之前的结构*/
    content"";
    display:block;
}
div:after{		/*由css生成的在元素之后的结构*/
    content:"";
    display:block;
}
p::first-letter{	/*元素内文本首个字符*/
    font-size:20px;
}
p::first-line{		/*元素中的首行*/
    font-size:20px;
}
div::selection{		/*元素中文本被选中*/
    background-color:red;
    color:pink;
}



/*有的浏览器为html，body*/
:root{	/*选中根元素*/
    border:1px solid black;
}
```



### 声明的优先级

- 选择器特殊性

  > 特殊性表述：0 0 0 0
  >
  > ID选择器：0 1 0 0
  >
  > 类选择器、属性选择器、伪类：0 0 1 0
  >
  > 元素选择器、伪元素：0 0 0 1
  >
  > 通配符：0 0 0 0
  >
  > 内联样式：1 0 0 0
  >
  > 继承而来的属性无特殊性（即比通配符还低）
  >
  > 结合符对选择器特殊性无贡献
  >
  > 
  >
  > 不进位（即1 0 0 0大于所有 0 x x x）

- 重要声明

> 声明的结束分号之前可插入!important来标志，表示最重要的声明，覆盖其他所有声明

- 来源

> - css样式的来源大致有三种：
>   - 创作人员（程序员）
>   - 读者（用户）
>   - 用户代理（浏览器）
>
> - 权重：
>   1. 读者的重要声明
>   2. 创作人员的重要声明
>   3. 创作人员的正常声明
>   4. 读者的正常声明
>   5. 用户代理的声明
>
> - 层叠：	
>
>   1. 找出所有相关的规则，这些规则都包含一个选择器
>
>   2. 计算声明的优先级：
>      1. 先按来源排序
>      2. 再按选择器的特殊性排序
>      3. 最终排序





## 自定义字体

- 引入@font-face

```css
<style type="text/css">
@font-face{
    font-family:"Damu";		/*自定义字体名*/
    src:url(./xx.ttf);		/*字体文件*/
}

div.test{
    font:50px "Damu";	/*使用*/
}
</style>
```

## 新增UI方案

### 文本新增样式

- 透明度：opacity
- 颜色模式：rgba()
- 换行：word-break、word-wrap

```css
.test{
	word-break: keep-all; /* normal自动换行、break-all允许在单词内换行、keep-all只能在半角空格或连字符处换行 */
}
.test1{
    word-wrap: break-word; /* normal自动换行、break-word强制换行 */
}
```



- 文字阴影：text-shadow

```css
.test{
	opacity:0.5;
    color:rgba(255,255,255,.5);
    text-shadow: 2px 3px 4px pink，
        		3px 4px 5px black;
}
```

- 文字描边（只有webkit内核支持）：-webkit-text-stroke

```css
.test{
	-webkit-text-stroke: 4px pink;
}
```

- 文字排版

```css
.test{
	direction:rtl;				/*文本排列方向-需配合下面的unicode-bidi使用*/
    unicode-bidi:bidi-override;
}
```

- 溢出显示省略号

```css
.test{
    white-space:nowrap;			/*文本不换行*/
    overflow:hidden;
    text-overflow:ellipse;		/*多出内容省略号显示*/
}
```

### 盒模型新增样式

- 盒模型阴影：box-shadow

```css
.test{
    box-shadow: 5px 5px 20px 10px gray,		/*第四个可选为阴影缩放，大于0放大，小于0缩小*/
        		inset -5px -5px 20px gray;	/*第一个可选，添加后，为盒子内部阴影 inset也可放在后面*/
}
```

- 盒模型倒影（-webkit内核）：-webkit-box-reflect

```css
.test{
	-webkit-box-reflect:left 10px;		/*方向，偏移量*/
}
```

- 拖拽大小：resize（需配合overflow:auto;）

```css
.test{
	overflow:auto;
	resize:horizontal;	/*none:不可缩放，horizontal：水平可缩放，vertical：垂直可缩放，both：水平垂直均可缩放*/
}
```

- 怪异盒模型：box-sizing

```css
.test{
	box-sizing:border-box;
}
```

### 新增UI样式

- 圆角：border-radius（尽量使用px值）

```css
.test{
    border-radius:10px/20px 20px/10px 10px/20px 20px/10px;	/*a/b 	横半轴/纵半轴*/
}
```

- 边框图片

```css
.test{
    border:30px solid;
    /*边框图片路径*/
    border-image-source: url(xxx.png);
    /*边框切割  切割距离（横上，纵右，横下，纵左），fill可不写，加上fill即将边框图片中间设置为background-image*/
    border-image-slice: 33.33333% fill;
    /*边框图片拉伸方式*/
    border-image-repeat: round;
    /*边框图片宽度-不写默认继承border-width*/
    border-image-width: 20px;
    /*将边框图片向外扩展，但边框位置不变（只是变了图片位置）*/
    border-image-outset:10px;
}
```

- 背景
  - background-color：默认绘制时，平铺border-box
  - background-image：默认从padding-box开始绘制，从border-box开始裁剪  ||  css3中有多背景，默认绘制时尺寸是自己的位图像素
  - background-repeat：控制平铺与否
  - background-position：控制背景图片在背景区域中的位置
  - background-attachment：scroll（背景图不会随着滚动条的滚动而滚动） ||  fixed（相对视口固定定位）
  - background-origin：背景图片起始位置
  - background-clip：裁剪图片
  - background-size：控制图片自适应方式

```css
.test{
    background-color:pink;
    background-image:url(xx.png);
    background-repeat:no-repeat;
    /*图片位置*/
    background-position: -10px 10px;
    background-attachment:fixed;/*将背景扩到视口范围--不推荐用*/
    
    /*css3*/
    /*背景图片的渲染起始位置-- border-box,padding-box,content-box*/
    background-origin: content-box;
    /*背景图片裁剪位置*/
    background-clip:content-box;
    /*将图片只在文字区域显示--配合透明文本使用*/
    -webkit-background-clip:text;
    /*图片大小*/
    background-size: 100% 100%;
    
    /*渐变*/
    background-image:linear-gradient(to right,red 10%,green 50%);
    /*重复渐变*/
    background-image:repeating-linear-gradient(45deg,red,rgba(255,0,0,0) 50%);
    
    /*径向渐变*/
    background-image:radial-gradient(circle,yellow 10%, pink 70%);
    background-image:radial-gradient(closest-side,yellow 10%, pink 70%);
}
```

### 定位与浮动

- 浮动提升半层
- 定位提升一层

## 滚动条问题

- 如果body内部长度超过body长宽，滚动条会出现在document上，只有当html和body都设置了overflow属性时，才会出现在body身上

```css
html,body{
	overflow:auto;
}
```

- 所以开发时一般使用一个div.wrap来模拟视口，代替body（将html和body的滚动条禁用）
  - div.wrap需要加上相对定位--模拟初始包含块



## 过渡

- transition
  - 让属性变化成为一个持续变化的过程

```css
.test{
    transition-property: width, height, font;	/*过渡属性(指可被动画的属性）*/
    transition-duration: 3s, 2s;	/*过渡时间（周期）-与属性一一对应（数量不对应时，会复制对应，即  3s, 2s, 3s, 2s...）*/
    transition-timing-function: linear, cubic-bezier(.28,1.64,.76.-0.5);/*控制变化速度  ease（先加速后减速，默认） ease-in（加速） ease-out（减速） linear（匀速）贝塞尔曲线cubic-bezier(.28,1.64,.76.-0.5) step-start step-end steps(5,start)*/
        /*cubic-bezier.com*/
    transition-delay: 3s;	/*延迟过渡时间-参数不足重复列表*/
    
    
    /*简写*/
    transition: 3s width,
        		2s height linear 4s;
}
```

- 触发事件

```javascript
window.onload = function(){
    var testNode = document.querySelector("#test");
    document.body.onmouseover = function(){
        testNode.style.width = "300px";
        testNode.style.height = "300px";
    };
    testNode.addEventListener("transitionend",function(){
        alert("transitionend!");		//每一个属性的过渡事件完成后都会触发一次transitionend事件，如果在过渡完成前，dom元素display已经成为none，则此事件不会触发
    });
}
```

> transition在元素首次渲染还没有结束的情况下是不会被触发的

### 2D变形

- transform属性只对block元素生效
  - transform: rotate()：旋转，还有rotateX(),rotateY(),rotateZ()
  - transform: translate()：平移，还有translateX(),translateY(),translateZ()
  - transform: skew()：倾斜，还有skewX(),skewY()
  - transform: scale()：缩放，还有scaleX(),scaleY()
- `transform-orgin: top left; `改变基点
  - 矩阵变换：transform: matrix();

```css
.test{
    transform: translate(50%,50%) rotate(90deg) scale(1.1) skew(30deg);
}
.test1{
    transform: matrix(1,0,0,1,0,0);
}
```

### 3D变形

- rotateX(),rotateY,rotateZ(), rotate3d(x,y,z,angle)
- translateX(),translateY(),translateZ(),translate3d()
- scaleX(),scaleY(),scaleZ() ,scale3d()

#### 景深-perspective

```css
.wrap{
    width: 400px;
    height: 400px;
    border: 1px solid black;
    
    perspective: 200px;		/*景深，简单来说，就是眼睛距离屏幕的距离  用于搭建舞台，使其后代元素具有3D效果（近大远小）  景深会叠加-不同浏览器叠加机制不同，所以要避免景深叠加*/
    perspective-orgin: left top;	/* 视角的位置，简单理解，perspective控制视角距离屏幕的z轴位置，perspective-orgin控制x轴与y轴位置 */
    /*另一种使用方法*/
    transform:perspective(200px) rotateY(30deg);	/*这种方法使景深作用于元素本身，而不是作用于后代元素，且perspective()必须放在首位*/
}
.inner{
    width:200px;
    height: 200px;
    border-radius:50%;
    
    transition: 2s;
}
.inner:hover{
    transform: rotateX(360deg);
}
```

#### 舞台 transform-style

```css
.wrap{
    width: 400px;
    height: 400px;
    border: 1px solid black;
    
    perspective: 200px;
    
    transform-style: preserve-3d;	/* 营造具有层级的3d舞台，不可集成，作用于子元素 */
}
.inner{
    width:200px;
    height: 200px;
    border-radius:50%;
    
    transition: 2s;
}
.inner:hover{
    transform: rotateX(360deg);
}
```

#### 背面 backface-visibility

```css
.wrap{
    width: 400px;
    height: 400px;
    border: 1px solid black;
    
    perspective: 200px;
    
    transform-style: preserve-3d;
}
.inner{
    width:200px;
    height: 200px;
    border-radius:50%;
    
    transition: 2s;
    
    backface-visibility: hidden;	/* 即从背面无法看到此元素，只能从正面看到 */
}
.inner:hover{
    transform: rotateX(360deg);
}
```

##  动画

```css
.test{
    width: 100px;
    height: 100px;
    background-color: pink;
    
    animation-name: test;				/*指定动画名称*/
    animation-duration: 3s;				/*一次动画持续时间*/
    animation-timing-function: linear;	/*动画速率函数-参照transition---作用于每两个关键帧之间*/
    animation-delay: 1s;				/*动画延迟时间*/
    animation-iteration-count: 3;		/*动画执行次数*/
    animation-direction: reverse;		/*动画执行方向-reverse即从100%关键帧到0%关键帧执行 alternate即从from-to-from-to...，alternate-reverse即to-from-to-from...*/
    animation-fill-mode: backwards;		/*控制元素在动画外的状态 backwards:动画执行前状态与开始状态保持一致  forwards：动画执行后状态保持最终状态   both：backwards加上forwards*/
    animation-play-state: running;		/*用于控制动画的暂停-running为正常执行，pause为暂停（可结合hover等使用来控制动画的进行）*/
}
@keyframes test{		/*开始编写动画样式-关键帧动画*/
    from{		/*from代表0%，to代表100%*/
        background-color: orange;				/*开始状态*/
    }to{
        background-color: skyblue;			/*最终状态*/
    }
}
```



## 布局

### flex布局-弹性盒子布局

- flex容器
- flex项目
- 主轴
- 侧轴
- 项目永远在主轴的正方向上

```css
.test{
	width: 100px;
    height: 100px;
    display: -webkit-box;
    /* -webkit-box-orient控制主轴是哪一个 */
    -webkit-box-orient: vertical;
    /* -webkit-box-direction 控制主轴排列方向 正排列/反排列*/
    -webkit-box-direction: reverse;
    /* -webkit-box-pack 控制富裕空间  start(富裕空间在项目右边) end center justify（富裕空间在项目中间） */
    -webkit-box-pack: center;
    /* -webkit-box-align 控制侧轴富裕空间 start end center */
}

.new{
    width: 100px;
    height: 100px;
    display: flex;
    /* justify-content 富裕空间管理 flex-start flex-end center space-around space-between */
    justify-content: space-around;
    /*align-items 侧轴富裕空间管理 start end center baseline（子元素在父元素的基线上） stretch(等高布局|不指定高度）*/
    align-items: center;
    
    /* flex-direction 控制布局方向（控制主轴）+ 排列方向 */
    flex-direction: column-reverse;
    flex-wrap: wrap;	/* nowrap：不换行，单行显示；wrap：多行显示，即换行；wrap-reverse：多行，但为反向 */
    flex-flow: column-reverse wrap;	/* 上面两个的复合 */
}

.item{
    flex-grow: 2;	/* 定义子元素放大比例，即当所有子元素宽度之和小于父元素时，子元素会被放大，此属性就是定义这个放大的比例的 */
    flex-shrink: 1;	/* 同上，定义缩小比例 */
    flex-basis: 300px;	/* 定义子元素宽度，效果同width，但只对弹性盒子的子元素生效 */
    flex: 2 1 300px;	/* 效果同上，为上面三个的符合属性 */
    
    order:2;		/* 定义排列顺序 */
}

```

### 多列布局

```css
.test{
	column-count: 3; /* 多列布局的列数 */
    column-width: 100px; /* 每一列的宽度 auto表示由列数决定 */
    column-gap: 10px; /* 定义列与列之间的间距 normal为浏览器默认长度 */
    column-rule: 2px solid red; /* 定义边框样式 */
    column-span: all; /* 表示跨列 */
}
```

- 可用于瀑布流布局



## 滤镜

- filter属性实现所有滤镜效果

```css
.test{
    filter: brightness(80%)	/* 亮度：0%为黑色，0-100为减弱图片亮度，往上为增大亮度 */
    		grayscale(10%)		/* 灰度：0%表示不做修改，100%为完全黑度 */
    		sepia(0%)			/* 复古：即褐色滤镜，100%为完全褐色滤镜 */
    		invert()			/* 反转：颜色反转，100%为反转所有颜色 */
    		hue-rotate(120deg)	/* 旋转：色相旋转，0-360deg */
    		drop-shadow(5px 5px 5px red)	/* 阴影：前两个为偏移量，第三个为模糊程度，最后为阴影颜色 */
    		opacity(60%)		/* 透明度：0为完全透明 */
    		blur(2px)			/* 模糊：像素值越大，模糊程度越大 */
    		contrast(100%)		/* 对比度：100%向下为减弱对比度，向上为增强对比度 */
    		saturate(100%);		/* 饱和度：100%向下为减弱饱和度，向上为增强饱和度 */
}
```

## 其他

```css
.test{
	outline: 1px solid red;	/* 定义轮廓，同边框 */
    
    xx: initial;			/* 将某个属性重置为默认值，如默认color为black */
    
    width: cacl(100% - 30px);	/* calc()函数，可用于计算数值，里面空格分隔 */
    
    pointer-events: none;		/* 禁用鼠标单击事件 */
}
```

