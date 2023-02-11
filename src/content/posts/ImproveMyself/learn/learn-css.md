---
title: css学习笔记
date: 2020-02-10 22:41
tags:
- css
- 笔记
- web
category: code
cover: https://img.dorakika.cn/md/default.png
description: 很早之前的写在代码内部的css学习笔记，整合了一下
slug: '20200210'
---

> 老早之前的笔记了，整合一下搬运过来

### 添加样式表

```html
<! DOCTYPE html>
<html>
<head>
<title>为网页添加样式表的方法</title>

<style type="text/css">
	<!--
	h3{color:red;font-size:20pt}
	-->
</style>
<!--内部样式表，定义在head的头部标签中，
注释符是为了让不支持css的浏览器忽略此代码，css中的注释方式为/*内容*/-->

<link rel="stylesheet" href="day1.css" type="text/css">
</head>

<body style="color:blue;font-size:10pt">
<!--内嵌样式表，可以应用于body中的任何元素，包括body本身，basefont，param和script除外。
不过这种方法基本不用-->
<p>内嵌样式表</p>
<h3>内部样式表</h3>
<h2>外部样式表</h2>

</body>

</html>
```



### 简单应用于选择符组

```html
<! DOCTYPE html>
<html>

<head>
<title>简单应用与选择符组</title>
<link rel="stylesheet" href="day2.css" type="text/css"></link>
</head>

<body>
<h1>简单应用</h1>
<p>css的定义由三个部分组成：选择符（selector），属性（properties），和属性的取值（value）</p>
<center><a href="#001">selector{</a><a href="#002">properties:</a><a href="#003">value}</a></center>
<a name="001"><h2>选择符</h2></a>
<p>选择符可以有多种形式，一般是所要定义样式的html标签</p>
<a name="002"><h2>属性</h2></a>
<p>如果要对同一个选择符定义多个属性，则不同属性之间可以用分号隔开</p>
<a name="003"><h2>值</h2></a>
<p>如果属性的值是多个单词组成，一定要加上双引号</p>
<h1>选择符组</h1>
<p>为了减少样式的重复定义，可以将相同属性和值的选择符 组合起来书写，使用逗号将选择符隔开<br>eg: h1,h2,h3,h4,h5,h6{color:black}</p>
</body>

</html>
```

### 类选择符与ID选择符

```html
<! doctype html>
<html>
<head>
<title>类选择符与ID选择符</title>

<style>
	p.right{
	text-align:right;
	color:blue;
	}
	p.center{
	text-align:center;
	color:orange;
	}
	p.left{
	text-align:left;
	color:red;
	}
	/*上面三个是用了标签名的，下面是省略标签名的*/
	.tongyong{
	text-align:left;
	color:yellow;
	}
	/*下面是ID选择符*/
	#intro
	{
		font-size:150%;
		font-weight:bold;
		color:#123456;
	}
	h2#hhh
	{
		font-size:200%;
		font-weight:bold;
		color:FF00FF
	}
</style>

</head>



<body>
<h2 class="tongyong">类选择符</h2>
<!--使用class属性就可以使用类选择符所定义的样式-->
<p class="left">使用类选择符可以将相同的元素分类定义为不同的样式，定义类选择符时，在自定义类的名称前面加上一个点号。</p>
<p class="center">若要定义两个不同的段落，一个向左对齐，一个段落居中，一个向右对齐，则可以先定义两个类——p.right和p.center</p>
<p class="right">如下：<br>p.right{text-align:right}<br>p.center{text-align:center}</p>
<p class="tongyong">还可以在定义选择符时省略HTML的标签名，就可以把几个不同的元素定义为相同的样式</p>

<h2 id="hhh">ID选择符</h2>
<p id="intro">在HTML页面中ID参数指定了单一的元素，ID选择符用来对这个元素指定单独的样式</p>
<p id="intro">定义ID选择符时要在ID的名称前加上一个“#”号，和类选择符相同，#前面不加标签名可通用</p>

</body>
</html>
```

### 包含选择符与样式表的层叠性

```html
<! DOCTYPE html>
<html>
<head>
<title>包含选择符与样式表的层叠性</title>

<style>
table a{
	font-size:32px;
	color:orange;
}
div{
	color:red;
	font-size:32px;
}
#color{
	color:blue;
}
.color{
	color:yellow;
}
.color2{
	color:orange!important;
}
p{
	color:green;
}
</style>
</head>



<body>
	<p>包含选择符是一种针对某种元素的包含关系而定义的样式表。就像这里定义的，只有在table表格中的超链接会使用定义的样式，在table外面的超链接不会有影响</p>
	<table border>
		<tr><th>天数</th> <th>学习跳转</th>
		<tr><td>day1</td> <td><a href="../test/day1_文本与超链接.html">文本与超链接</a></td>
		<tr><td>day2</td> <td><a href="../test/day2_头部标签与超链接补充.html">头部标签与超链接补充</a></td>
		<tr><td>day3</td> <td><a href="../test/day3_列表与表格.html">列表与表格</a></td>
		<tr><td>day4</td> <td><a href="../test/day4_图像.html">图像</a></td>
		<tr><td>day5</td> <td><a href="../test/day5_框架.html">框架</a></td>
		<tr><td>day6</td> <td><a href="../test/day6_表单.html">表单</a></td>
		<tr><td>day7</td> <td><a href="../test/day7_动态效果与多媒体.html">动态效果与多媒体</a></td>
		<tr><td>day8</td> <td><a href="day1_添加样式表.html">添加样式表</a></td>
		<tr><td>day9</td> <td><a href="day2_简单应用与选择符组.html">简单应用与选择符组</a></td>
		<tr><td>day10</td><td><a href="day3_类选择符与ID选择符.html">类选择符与ID选择符</a></td>
		<tr><td>day11</td><td><a>本页面</a></td>
	</table>
	<a href="../test/css/仿登录界面.html">表格外的超链接并没有影响</a>
<div>
<p>样式表的层叠性</p>
<p>层叠性是指继承性，样式表的继承规则是外部的元素样式继承给这个元素所包含的全部元素</p>
<p class="color">当样式表在继承的过程中有冲突时，以最近定义的样式为准</p>
<p id="color" class="color">选择符的优先级为ID选择符，类选择符，html标记选择符</p>
<p id="color" class="color2">可以通过在样式后面加上!important来提升某个样式的优先级</p>
</div>
</body>
</html>
```

### 伪类与伪对象

```html
<! DOCTYOPE html>
<html>
<head>
<title>伪类与伪对象</title>

<style>
/*定义顺序为 l v h a，防止样式被后面覆盖*/
a:link{color:#FF0000;text-decoration:none}
a:visited{color:#FFFF00;text-decoration:none}
a:hover{color:#FF00FF;text-decoration:underline}
a:active{color:#0000FF;text-decoration:underline}

/*伪对象。。为了区分，加上类选择符使用*/
p.haha:first-letter{font-size:300%}
div.hehe:first-line{color:red;font-size:200%}
</style>
</head>

<body>
<p>除了类型选择符，ID选择符，和类选择符之外，css也允许使用伪类和伪元素选择符。</p>
<p>伪类选择符是一组基于预定义性质的选择符，HTML元素可以使用这些预定义性质。实际上这些性质与class属性的功能是相同的，因此在css术语中，它们被称作伪类。对应这些伪类的标签，其中不存在真正的class属性；相反，它们代表应用到这些元素的某些方面，或者是相对于该元素的浏览器用户界面的状态。</p>
<p>伪类可以看作一种特殊的类选择符，一种支持css的浏览器能自动识别的特殊选择符。其最大的用处是在于可以对链接在不同状态下定义不同的样式效果。伪类的语法在原有语法里加上一个伪类（pseudo-class）说明，如下</p>
<p>selector:pseudo-class{property:value}</p>
<p>由上面的代码可得伪类的格式为   选择符:伪类{属性:值}<br>伪类不能像类选择符一样随意使用名字，它是css中早已定义好了的，上面的语法可以解释为 对象(选择符)在某个特殊状态下(伪类)的样式。类选择符及其他选择符也同样可以和伪类混用 选择符.类:伪类{属性:值}</p>
<table border>
<tr> <th>伪类</th> <th>说明</th>
<tr> <td>:active</td> <td>被激活的元素（在鼠标单击与释放之间发生的事件）的样式</td>
<tr> <td>:first-child</td> <td>元素的第一个子对象的样式</td>
<tr> <td>:first</td> <td>设置页面容器第一页使用的样式</td>
<tr> <td>:focus</td> <td>设置对象在成为输入焦点（该对象的onfocus事件发生，如接收输入的表单）时的样式</td>
<tr> <td>:hover</td> <td>设置对象在鼠标悬停时的样式</td>
<tr> <td>:lang()</td> <td>设置对象使用特殊语言的内容的样式</td>
<tr> <td>:left</td> <td>设置页面容器位于装订线左边的所有页面使用的样式</td>
<tr> <td>:link</td> <td>设置a元素在未被访问前的样式</td>
<tr> <td>:right</td> <td>设置页面容器位于装订线右边的所有页面使用的样式</td>
<tr> <td>:visited</td> <td>设置a对象在其链接地址已被访问过时的样式</td>
</table>
<p>常用伪类</p>锚的伪类
<a href="../test/day6_表单.html" target="_blank">点点试试</a>
<br>伪类和类选择符<br>将伪类和类选择符组合起来使用，就可以在同一个页面实现几组不同的效果（就不写代码了）
<p>伪对象</p>
<p>样式表中定义了4种伪元素，即虚拟元素，它们是根据内容创建的，是与基本元素相关的，如下：</p>
<table border>
<tr> <th>伪元素名</th> <th>说明</th>
<tr> <td>:after</td> <td>用来和content属性一起使用，设置在对象后（依据对象树的逻辑结构）发生的内容</td>
<tr> <td>:before</td> <td>用来和content属性一起使用，设置在对象前（依据对象树的逻辑结构）发生的内容</td>
<tr> <td>:first-letter</td> <td>此伪元素仅作用于块对象。内联要素要使用此属性，必须先设置对象的height或width属性，或者设定position属性为absolute，或者设定display属性为block。设置对象内的第一行样式。</td>
<tr> <td>:first-line</td> <td>此伪元素仅作用于块对象。内联要素要使用此属性，必须先设置对象的height或width属性，或者设定position属性为absolute，或者设定display属性为block。如果没有强制指定对象的width属性，首行的内容长度可能不是固定的</td>
</table>
<p class="haha">这是一个段落，首个字被放大了</p>
<div class="hehe">这是段落的第一行<br>这是段落的第二行<br>这是段落的第三行</div>
</body>
</html>	
```

### 滤镜

```html
<! DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>滤镜</title>
<style>
/*示例1*/
#png_image{
	/*filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='cb.png',sizingMethod='scale');*/
	/*filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=1,StartColorStr='#00FF00',EndColorStr='#FFFFFF');*/
}
/*示例2*/
#sl2{
width:200;
opacity:0.3;
}
/*示例3*/
#sl3{
width:200;
filter:blur(3px)
}
</style>
</head>

<body>
<p>css除了能对HTML的显示样式进行定义和管理以外，也提供了多媒体处理方面的滤镜功能。
css的滤镜能利用计算机客户端的计算资源对图片等资源生成类似于Photoshop特效滤镜的处理效果。
虽然css所带的滤镜种类比Photoshop少得多，但对于网页应用而言，已经能满足绝大多数应用的需求了。</p>
<p>css滤镜属性的标识符是filter，其定义方式为：
<br>filter:filtername(parameters)
<br>filter是是滤镜属性选择符，只要利用滤镜操作，就必须先定义filter；filtername是滤镜属性名，
可以使用包括alpha、blur、chroma等在内的多种属性，属性的后面还可以增加一些说明参数</p>
<p>css滤镜按其功能可分为：界面滤镜(procedural surfaces)、静态滤镜(static filters)和转换滤镜(transitions)</p>

<h2>界面滤镜</h2>
<p>界面滤镜是一个显示在对象内容和对象背景之间彩色的层，它可以动态定义每个像素点的颜色和alpha值。主要包括AlphaImageLoader和Gradient两种。</p>
<h3>滤镜AlphaImageLoader</h3>
<p>使用该滤镜在对象容器边界内，可以在对象的背景和内容之间显示一张图片，并提供对此图片的剪切和改变尺寸的操作，用法 <font color="red">示例1</font><br>filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='xxx.png',sizingMethod='scale')</p>
<p>sizingMethod可以定义为三种，image、scale或crop（分别是图片大小外不显示、根据文本变化、保持自身大小）如果载入的是PNG格式的图片，则可以提供0-100%的透明度。PNG格式的图片不妨碍你选择文本。</p>
<h3>滤镜Gradient</h3>
<p>使用Gradient滤镜，可以在对象和背景之间显示定制的色彩层。当此效果通过转变显示时，在渐变色彩层之上的文本程序性的初始化为透明的，当色彩渐变实现后，文本颜色会以其定义的值更新，使用如下<font color="red">示例1</font><br>filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=1,StartColorStr='#00FF00',EndColorStr='#FFFFFF')</p>
<p>GradientType控制了色彩渐变的方向，为1时从左往右渐变，为0时从上往下渐变</p>
<!--不知道为什么，实现不了，就注释掉了，说是IE才能用，但我用IE也不行-->

<h2>静态滤镜</h2>
<p>常用静态滤镜如下：</p>

<table border>
<tr><th>滤镜属性</th><th>说明</th>
<tr><td>Alpha</td><td>设置对象内容的透明度，可以设置整体透明度，或线性渐变和放射性渐变的透明度</td>
<tr><td>BasicImage</td><td>用于色彩处理、图像翻转，或对象内容的透明度；当此效果通过转变显示时，在渐变色彩层之上的文本程序性的初始化为透明的，当色彩渐变实现后，文本颜色会以其定义的值更新</td>
<tr><td>Blur</td><td>制作对象内容的模糊效果</td>
<tr><td>Chroma</td><td>将对象中指定的颜色指定为透明；此效果在羽化（柔化色彩以同周围相邻的颜色平和过渡）的线条等处也不会很好地作用；确定的color参数值可能会导致图片自身的透明颜色变为不透明</td>
<tr><td>Compositor</td><td>依据初始对象和新对象色彩特定混合方式显示新的对象内容；这个滤镜提供了丰富的将输入对象的色彩和透明度相互作用的图像合成的功能设置</td>
<tr><td>DropShadow</td><td>制作对象的阴影效果</td>
<tr><td>Emboss</td><td>用灰度值为对象内容制作浮雕纹理效果（凸出）</td>
<tr><td>Engrave</td><td>用灰度值为对象内容制作浮雕纹理效果（凹下）</td>
<tr><td>Glow</td><td>环绕对象内容边缘添加辉光制作发热效果。辉光将出现在对象边界内的内容最外轮廓之外</td>
<tr><td>Light</td><td>为对象的内容建立光照效果</td>
<tr><td>MaskFilter</td><td>将对象内容的透明像素用color参数指定的颜色显示作为一个遮罩，而非透明像素转为透明</td>
<tr><td>Matrix</td><td>使用矩阵变形实现对象内容的改变尺寸、旋转、上下或左右反转</td>
<tr><td>MotionBlur</td><td>为对象内容制作运动模糊效果</td>
<tr><td>Shadow</td><td>为对象内容建立阴影效果</td>
<tr><td>Wave</td><td>为对象内容建立波纹扭曲效果</td>
<tr><td>ICMFilter</td><td>根据颜色配置文件（.icm）转换对象的色彩内容。这样能激活对某些细节内容的显示改良，或对硬件设备输出的模糊显示，如打印机或显示器</td>
<tr><td>Gray</td><td>灰度显示对象内容</td>
<tr><td>Invert</td><td>反相显示对象内容</td>
<tr><td>Xray</td><td>以X光效果显示对象内容</td>
<tr><td>FilpH</td><td>水平翻转对象内容</td>
<tr><td>FilpV</td><td>垂直翻转对象内容</td>
</table>
<!--day6.1-->
<h3>Alpha滤镜</h3>
<p>此滤镜功能为：使对象产生透明度，语法如下：filter:progid:DXImageTransform.Microsoft.Alpha(enabled=bEnabled,style=iStyle,<br>opacity=iOpacity,finishOpactity=iFinishOpactity,startX=iPercent,startY=iPercent,finishX=iPercent,finishY=iPercent)</p>
<table border>
<tr><th>参数</th>			<th>功能</th>	<th>取值说明</th>
<tr><td>opacity</td>		<td>图片的不透明度</td>	<td>值为0-100,0为完全透明，100为完全不透明</td>
<tr><td>finishOpactity</td>	<td>设置渐变的透明效果时，用来指定结束时的不透明度</td>	<td>值为0-100,0为完全透明，100为完全不透明</td>
<tr><td>style</td>			<td>指定渐变的显示形状</td>	<td>0：没有渐进；1：直线渐进；2：圆形渐进；3：矩形渐进</td>
<tr><td>startX</td>			<td>透明渐变效果开始的X坐标</td>	<td></td>
<tr><td>startY</td>			<td>透明渐变效果开始的Y坐标</td>	<td></td>
<tr><td>finishX</td>		<td>透明渐变效果结束的X坐标</td>	<td></td>
<tr><td>finishY</td>		<td>透明渐变效果结束的Y坐标</td>	<td></td>
</table>
<h4>示例2</h4>
<img src="cb.png" id="sl2">
<p>不同浏览器对于滤镜的描述是存在差异的，上述语法为IE中的语法，Chrome中为：opacity:0.6;FireFox为：-moz-opacity:0.6;</p>
<h3>blur滤镜</h3>
<p>这个滤镜可以制作模糊的特效，用法如下：filter:progid:DXImageTransform.Microsoft.Blur(enabled=bEnabled,makeShadow=bShadow,pixelRadius=flRadius,shadowOpacity=fOpacity)</p>
<table border>
<tr><th>参数</th>			<th>功能</th>	<th>取值说明</th>
<tr><td>enabled</td>		<td>设置或检索滤镜是否激活</td>	<td>true：激活；false：禁止</td>
<tr><td>makeShadow</td>	<td>设置或检索对象是否被处理为阴影显示</td>	<td>true：是；false：否；选择为是，则模糊效果不在出现</td>
<tr><td>pixelRadius</td>			<td>设置或检索模糊效果的作用深度</td>	<td>数值，越大越模糊</td>
<tr><td>shadowOpacity</td>		<td>设置或检索使用makeshadow制作的阴影的透明度</td>	<td>0-1之间，1为完全不透明</td>
</table><h4>示例3</h4>
<img src="cb.png" id="sl3">
<p>上面写的是IE的，Chrome为filter:blur(像素值)
<br>还有一些其他滤镜，但是我学的书写的都是IE的用法，我用的是Chrome的浏览器，就不想继续码了。。。</p>
<!--day6 终结-->
<h2>转换滤镜</h2>
<p>转换滤镜主要用来处理网页或者HTML元素对象显示效果的，属性如下：</p>
<table border>
<tr><th>属性</th>	<th>说明</th>
<tr><td>barn</td>	<td>模拟开关门效果转换对象内容</td>
<tr><td>blendtrans</td>	<td>渐隐效果</td>
<tr><td>blinds</td>	<td>百叶窗开关效果</td>
<tr><td>checker board</td>	<td>类似国际象棋棋盘的网格推拉效果</td>
<tr><td>fade</td>	<td>渐隐效果</td>
<tr><td>gradientwipe</td>	<td>滚动渐隐效果</td>
<tr><td>inset</td>	<td>对角扩张效果</td>
<tr><td>iris</td>	<td>特殊形状剪切轮廓扩张或收缩显示效果</td>
<tr><td>pixelate</td>	<td>这个转换滤镜是一个复杂的视觉效果。在转换的前半段，对象内容先显示为矩形色块拼贴，然后矩形的宽度由一个像素增加至MaxSquare 属性所设置的值。每个矩形的颜色由其所覆盖区域的像素的颜色平均值决定。接下来转换的后半段，矩形被还原为新内容具体的图像像素，显示出新的内容</td>
<tr><td>radialwipe</td>	<td>放射状擦除效果</td>
<tr><td>randombars</td>	<td>随机发生的线条</td>
<tr><td>randomdissolve</td>	<td>随机像素溶解效果</td>
<tr><td>revealtrans</td>	<td>提供24种转换对象内容的效果</td>
<tr><td>slide</td>	<td>滑条抽离效果</td>
<tr><td>spiral</td>	<td>矩形螺旋方式</td>
<tr><td>stretch</td>	<td>拉伸变形效果</td>
<tr><td>strips</td>	<td>锯齿边覆盖效果</td>
<tr><td>wheel</td>	<td>风车叶轮旋转效果</td>
<tr><td>zigzag</td>	<td>类似擦地板的效果</td>
</body>
</html>
```

```html
<! DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>滤镜</title>
	<style>
        img.hh {
            filter:blur(5px);
        }
		img.tt {
            filter:brightness(150%);
        }
		img.yy {
            filter:contrast(50%);
        }
		img.uu {
            filter:grayscale(50%);
        }
		img.jj {
            filter:hue-rotate(60deg);
        }
		img.kk {
            filter:invert(100%);
        }
		img.ll {
            filter:opacity(30%);
        }
		img.mm {
            filter:saturate(30%);
        }
		img.nn {
            filter:sepia(30%);
        }
    </style>
</head>

<body>
	<table border>
        <tbody>
       
        <tr><td>属性</td><td>说明</td>
        <tr><td>none	</td><td>默认值，没有效果。</td></tr>
        <tr><td>blur(px)	</td><td>给图像设置高斯模糊。"radius"一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起， 所以值越大越模糊；如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。</td></tr>
        <tr><td>brightness(%)	</td><td>给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。</td></tr>
        <tr><td>contrast(%)	</td><td>调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比。若没有设置值，默认是1。drop-shadow(h-shadow v-shadow blur spread color) 给图像设置一个阴影效果。阴影是合成在图像下面，可以有模糊度的，可以以特定颜色画出的遮罩图的偏移版本。</td></tr>
        <tr><td>grayscale(%)    </td><td>将图像转换为灰度图像。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0；</td></tr>
        <tr><td>hue-rotate(deg)    </td><td>给图像应用色相旋转。"angle"一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。</td></tr>
        <tr><td>invert(%)  </td><td>反转输入图像。值定义转换的比例。100%的价值是完全反转。值为0%则图像无变化。值在0%和100%之间，则是效果的线性乘子。 若值未设置，值默认是0。</td></tr>
        <tr><td>opacity(%) </td><td>转化图像的透明程度。值定义转换的比例。值为0%则是完全透明，值为100%则图像无变化。值在0%和100%之间，则是效果的线性乘子，也相当于图像样本乘以数量。 若值未设置，值默认是1。该函数与已有的opacity属性很相似，不同之处在于通过filter，一些浏览器为了提升性能会提供硬件加速。</td></tr>
        <tr><td>saturate(%)    </td><td>转换图像饱和度。值定义转换的比例。值为0%则是完全不饱和，值为100%则图像无变化。其他值，则是效果的线性乘子。超过100%的值是允许的，则有更高的饱和度。 若值未设置，值默认是1。</td></tr>
        <tr><td>sepia(%)   </td><td>将图像转换为深褐色。值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0；</td></tr>
        <tr><td>url()  </td><td>URL函数接受一个XML文件，该文件设置了 一个SVG滤镜，且可以包含一个锚点来指定一个具体的滤镜元素。例如：filter: url(svg-url#element-id)</td></tr>
        </tbody>
    </table>
	模糊<img src="cb.png" width="200px" height="200px" class="hh">
	亮度<img src="cb.png" width="200px" height="200px" class="tt">
	对比度<img src="cb.png" width="200px" height="200px" class="yy"><br>
	灰度<img src="cb.png" width="200px" height="200px" class="uu">
	色相改变<img src="cb.png" width="200px" height="200px" class="jj">
	反转<img src="cb.png" width="200px" height="200px" class="kk"><br>
	透明<img src="cb.png" width="200px" height="200px" class="ll">
	饱和度<img src="cb.png" width="200px" height="200px" class="mm">
	深褐色<img src="cb.png" width="200px" height="200px" class="nn">
	</body>
</html>
```

### 边框与圆角

```html
<! DOCTYPE html>
<html>
<head>
<title>边框与圆角</title>
<style>
	#radius
	{
	border-radius:25px;
	background:green;
	padding:20px;
	width:200px;
	}
	#radius1
	{
	border-radius:50px/15px;
	background:green;
	padding:20px;
	width:200px;
	}
	#radius2
	{
	border-radius:50%;
	background:green;
	padding:20px;
	width:200px;
	}
	div
	{
	border:15px solid transparent;
	width:250px;
	padding:10px 20px;
	}
	#hezi
	{
	background-color:red;
	height:50px;
	border:2px solid;
	border-radius:25px;
	}
	#yinying
	{
	height:50px;
	background-color:#123456;
	box-shadow:10px 10px 5px #888888
	}
	#round
	{
	-webkit-border-image:url(border.png) 30 30 round; /* Safari 5 and older */
	-o-border-image:url(border.png) 30 30 round; /* Opera */
	border-image:url(border.png) 30 30 round;
	}
	#stretch
	{
	-webkit-border-image:url(border.png) 30 30 stretch; /* Safari 5 and older */
	-o-border-image:url(border.png) 30 30 stretch; /* Opera */
	border-image:url(border.png) 30 30 stretch;
	}
	#repeat
	{
	-webkit-border-image:url(border.png) 30 30 repeat; /* Safari 5 and older */
	-o-border-image:url(border.png) 30 30 repeat; /* Opera */
	border-image:url(border.png) 30 30 repeat;
	}
</style>
</head>

<body>
<div id="hezi">
	&nbsp这是一个圆角边框
</div>
<!--border-radius属性设置边框的圆角，上面的25px指的是圆角部分的半径-->
<div id="yinying">
	&nbsp这是一个阴影边框
</div><br>
<!--box-shadow属性可以附加一个或多个下拉框的阴影，上面一次表示：向右位移、向下位移、阴影程度、阴影颜色-->
<div id="round">
	这是一个有边界（平铺属性）图片的边框
</div>
<!--border-image属性设置边框图像 round表示平铺（30，30表示将原图片切割的位置详解自己搜吧，平铺的是切割后九宫格上下左右的图片，边角图片不变）-->
<div id="stretch">
	这里，图像被拉伸以填充该区域。
</div>
<!--stretch表示拉伸属性，九宫格的上下左右被拉伸，边角不变-->
<div id="repeat">
	这是一个有边界（重复属性）图片的边框
</div>
<!--repeat属性，我不太了解-->
<p id="radius">css3的border-radius属性可以给任意元素制作圆角，就像这个段落</p>
<!--在border-radius属性中指定一个值，会生成四个圆角，也可以多加几个值
四个值: 第一个值为左上角，第二个值为右上角，第三个值为右下角，第四个值为左下角。
三个值: 第一个值为左上角, 第二个值为右上角和左下角，第三个值为右下角
两个值: 第一个值为左上角与右下角，第二个值为右上角与左下角
一个值： 四个圆角值相同
-->
<p id="radius1">还可以创建椭圆的圆角</p>
<p id="radius2">也创建椭圆</p>
</body>
</html>
```

### 过渡与动画

```html
<! doctype html>
<html>
<head>
<title>过渡与动画</title>
<style>
#body
{
	width:605px;
	height:50px;
	background:orange;
}

/*过渡*/
#gd
{
	background:yellow;
	width:10px;
	height:50px;
	transition:width 2s ease-out 1s;
	
}
div#gd:hover
{
	width:605px;
}

/*动画*/
#dh
{
	background:yellow;
	width:10px;
	height:50px;
	-webkit-animation: myfirst 5s;
}
@-webkit-keyframes myfirst           /*Safari 与 Chrome 加前缀 -webkit-*/
{
    from{width:10px;}
    to 	{width:605px;}
}
/*多个样式变化的动画*/
#bodyplus
{
	width:600px;
	height:300px;
	background:black;
}
#dhplus
{
	background:white;
	width:100px;
	height:100px;
	border-radius:50%;
	position:relative;
	-webkit-animation: myfirstplus 8s linear;
}
#tzd{left:150px;top:20px;position:relative;}
@-webkit-keyframes myfirstplus           /*Safari 与 Chrome 加前缀 -webkit-*/
{
    0%		{left:0px;top:0px;}
	25%		{left:125px;top:150px;}
	50%		{left:200px;top:50px;}
	75%		{left:300px;top:150px;}
    100% 	{left:50px;top:125px;}
}
</style>
</head>

<body>
<h4>过渡</h4>
<!--css3过渡是元素从一种样式逐渐变为另一种的效果，需要规定两项内容
	指定要添加效果的css属性  和  指定效果的持续时间
	如：transition:width 2s；（可以添加多个样式，中间用逗号隔开）
	如果不添加过渡，变化就是瞬间的，而不是逐渐变化-->
<div id="body">
	<div id="gd"></div>
</div>
<table border>
<tr><th>属性</th><th>描述</th>
<tr><td>transition</td><td>简写属性，可以直接设置下面的四个值（空格隔开，按下面的顺序）</td>
<tr><td>transition-property</td><td>规定应用过渡的css名称</td>
<tr><td>transition-duration</td><td>定义过渡所花费的时间，可以是秒或毫秒</td>
<tr><td>transition-timing-function</td><td>规定过渡效果的时间曲线，默认为ease,属性有<br>ease：先慢，中间快，最后又慢下来<br>linear：相同速度完成<br>ease-in：慢速开始，逐渐变速完成<br>ease-out：慢速结束<br>ease-in-out：慢速开始，慢速结束</td>
<tr><td>transition-delay</td><td>过渡延时，规定过渡效果何时开始</td>
</table>
<h4>动画</h4>
<!--创建动画需要@keyframes规则，
@keyframes规则内指定一个css样式和动画将逐步从目前的样式更改为新的样式
在@keyframes创建动画，需要把它绑定到一个选择器，否则动画不会有任何效果
至少将两个css3的动画属性绑定到一个选择器：动画名称 和 动画时长
如  -webkit-animation: myfirst 5s; 前面是Chrome浏览器需要加的前缀-->
属性与过渡差不多<img src="dh.png">
<div id="body">
	<div id="dh"></div>
</div>
<!--动画是使元素从一种样式逐渐变为另一种样式的效果，可以使用“from”和“to”来规定动画发生的时间
也可以只用百分比来规定%0（from）是动画的开始，%100（to）是动画的结束
如下-->

<h4>加强版动画</h4>
<div id="bodyplus">
	<div id="dhplus"></div>
	<div id="tzd"><h1>探照灯效果</h1></div>
</div>
</body>
</html>
```

### 转换

```html
<! DOCTYPE html>
<html>
<head>
<title>转换</title>
<style>
	div
	{
	border-radius:25px;
	border:1px solid black;
	width:180px;
	height:120px;
	transition:transform 2s;
	}
					/*2D变化*/
	div#py:hover
	{
	background:#DD0000;
	transform:translate(50px,100px);
	-ms-transform:translate(50px,100px);/* IE 9 */
	-webkit-transform:translate(50px,100px); /* Safari and Chrome */
	/*transform中的translate()方法，根据两个参数（向右，向下），将元素进行移动*/
	}
	div#xz:hover{
	background:#DFDA22;
	transform:rotate(30deg);
	-ms-transform:rotate(30deg);/* IE 9 */
	-webkit-transform:rotate(30deg); /* Safari and Chrome */
	/*transform中的rotate()方法，根据参数（度数），将元素进行顺时针旋转*/
	}
	div#sf:hover{
	background:#123456;
	transform:scale(2,5);
	-ms-transform:scale(2,5);/* IE 9 */
	-webkit-transform:scale(1.25,1.25);/* Safari and Chrome */
	/*transform中的scale()方法，根据参数（横向，纵向），将元素变为原来的多少倍*/
	}
	div#qx:hover{
	background:#654321;
	transform:skew(25deg,25deg);
	-ms-transform:skew(25deg,25deg);/* IE 9 */
	-webkit-transform:skew(25deg,25deg);/* Safari and Chrome */
	/*transform中的skew()方法，根据参数（横向，纵向），将元素倾斜*/
	}
	div#plus:hover{
	background:#225588;
	transform:matrix(0.866,0,0,0.866,50px,100px);
	-ms-transform:matrix(0.866,0,0,0.866,50px,100px);/* IE 9 */
	-webkit-transform:matrix(0.866,0.5,-0.5,0.866,50,100);/* Safari and Chrome */
	/*transform中的matrix(a,b,c,d,e,f)方法，使用六个值的矩阵，变化后的x'=ax+cy+e,y'=bx+dy+f
	矩阵知识我还没学，就不多说了*/
	}
					/*3D变化*/
	div#x-xz
	{
	position:absolute;
	left:500px;
	top:0px;
	}
	div#x-xz:hover{
	background:#999933;
	transform:rotateX(120deg);
	-ms-transform:rotateX(120deg);/* IE 9 */
	-webkit-transform:rotateX(120deg);/* Safari and Chrome */
	/*transform中的rotateX()方法，根据参数（度数），将元素绕x轴旋转*/
	}
	div#y-xz
	{
	position:absolute;
	left:500px;
	top:120px;
	}
	div#y-xz:hover{
	background:#339999;
	transform:rotateY(120deg);
	-ms-transform:rotateY(120deg);/* IE 9 */
	-webkit-transform:rotateY(120deg);/* Safari and Chrome */
	/*transform中的rotateY()方法，根据参数（度数），将元素绕y轴旋转*/
	}
	/*还有个rotateZ()，效果和原版2D差不多*/
	div#xyz-xz
	{
	position:absolute;
	left:500px;
	top:240px;
	}
	div#xyz-xz:hover{
	background:#5566FF;
	transform:rotate3d(20,20,20,120deg);
	-ms-transform:rotate3d(20,20,20,120deg);/* IE 9 */
	-webkit-transform:rotate3d(20,20,20,360deg);/* Safari and Chrome */
	/*transform中的rotate3d()方法，前三个参数用于确定一个坐标，然后将元素绕 从原点指向此坐标的轴 旋转*/
	}
	/*也有translate3d,translateX,translateY,translateZ,scaleX,scaleY,scaleZ,scale3d,用法都和上面的差不多，就不多说了*/
	div#pplus
	{
	position:absolute;
	left:500px;
	top:360px;
	}
	div#pplus:hover{
	background:#666999;
	transform:matrix3d(1.1,0.5,0,0,-0.866,1.1,0.5,0,0,0.5,1.1,0,-100,-100,-100,1);
	-ms-transform:matrix3d(1.1,0.5,0,0,-0.866,1.1,0.5,0,0,0.5,1.1,0,-100,-100,-100,1);/* IE 9 */
	-webkit-transform:matrix3d(1.1,0.5,0,0,-0.866,1.1,0.5,0,0,0.5,1.1,0,-100,-100,-100,1);/* Safari and Chrome */
	/*transform中的matrix3d()方法，有16个参数组成4*4矩阵，我还不懂，就不写了*/
	}
	div#ts
	{
	position:absolute;
	left:500px;
	top:480px;
	}
	div#ts:hover{
	background:#521521;
	transform:rotateY(120deg);
	-ms-transform:rotateY(120deg);/* IE 9 */
	-webkit-transform:perspective(500px) rotateY(120deg);/* Safari and Chrome */
	/*transform中的perspective()方法，根据参数（像素），显示透视视图，超过像素的z轴位置不显示*/
	}
</style>
</head>

<body>
<div id="py"><center>平移</center></div>
<div id="xz"><center>旋转</center></div>
<div id="sf"><center>缩放</center></div>
<div id="qx"><center>倾斜</center></div>
<div id="plus"><center>矩阵变化</center></div>
<div id="x-xz"><center>绕x轴旋转</center></div>
<div id="y-xz"><center>绕y轴旋转</center></div>
<div id="xyz-xz"><center>绕指定轴旋转</center></div>
<div id="pplus"><center>矩阵<br>沿左上平移<br>+变为1.1倍<br>+旋转30度</center></div>
<div id="ts"><center><center>透视视图<br>（使3d效果更明显，对照绕y轴旋转的）</center></center></div>
</body>
</html>
```

### 文本效果、多列与用户界面

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>文本效果与多列与用户界面</title> 
<style>
h3#shadow
{
	text-shadow:5px 5px 5px #665522
}
#boxshadow
{
	width:200px;
	height:50px;
	background:#199889;
	border-radius:15px;
	box-shadow:10px 10px 10px #555555
	/*前两个参数为阴影平移的位移，第三个为阴影的模糊程度，最后是阴影颜色*/
}
#overflow1
{
	white-space:nowrap;
	width:200px;
	border:1px solid black;
	overflow:hidden;
	text-overflow:clip;
}
#overflow2
{
	white-space:nowrap;
	width:200px;
	border:1px solid black;
	overflow:hidden;
	text-overflow:ellipsis;
}
/*text-overflow定义的是文本超出的隐藏方式，还有一个自定义显示：eg:"text-overflow: >>"（只在 Firefox 浏览器下有效）*/
#br
{
	width:150px;
	border:1px solid black;
	word-wrap:break-word;
}
#keep-br
{
	width:150px;
	position:absolute;
	top:200px;
	left:180px;
	border:1px solid black;
	word-break:keep-all;
}
#break-br
{
	width:150px; 
	position:absolute;
	top:200px;
	left:360px;
	border:1px solid black;
	word-break:break-all;
}
/*word-break规定非中日韩文本的换行规则；word-wrap允许对长的不可分割的单词进行分割并换行*/
#col
{
	height:250px;
	background:#DDDDDD;
	-webkit-column-width:200px;
	/*此属性指定列的宽度*/
	-webkit-column-count:3;
	/*此属性指定多列的列数*/
	-webkit-column-gap:20px;
	/*此属性指定列与列之间的间隙*/
	-webkit-column-rule-style:solid;
	/*此属性指定列与列之间的边框样式*/
	-webkit-column-rule-width:1px;
	/*此属性指定列与列之间的边框厚度*/
	-webkit-column-rule-color:blue;
	/*此属性指定列与列之间的边框颜色*/
/*上面的关于边框的所有属性可以使用column-rule属性进行设置，值依次表示：厚度，样式，颜色，中间用空格隔开*/
	-webkit-column-fill:auto;
	/*此属性指定如何填充列，默认balance表示各列长短平衡，auto表示填充完一列，再填充下一列*/
}
h3
{
	-webkit-column-span:all;
	/*此属性指定元素跨多少列*/
}
div#resize
{
	border:1px solid;
	width:200px;
	height:150px;
	resize:both;
	overflow:auto;
}
#contain{width:600px; height:200px; background:#EEEEEE;}
#box
{
	box-sizing:border-box;
	width:50%;
	border:1px solid;
	height:200px;
	float:left;
}/*此属性允许你以某种方式定义某些元素，以适应指定区域。可取以下值：
	默认content-box：这是 CSS2.1 指定的宽度和高度的行为。指定元素的宽度和高度（最小/最大属性）适用于box的宽度和高度。元素的填充和边框布局和绘制指定宽度和高度除外
	border-box：指定宽度和高度（最小/最大属性）确定元素边框。也就是说，对元素指定宽度和高度包括了 padding 和 border 。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
	inherit：指定 box-sizing 属性的值，应该从父元素继承*/
#offset
{
	margin:20px;
	/*设定可视尺寸*/
	width:150px; 
	padding:10px;
	height:70px;
	border:1px solid black;
	outline:2px solid red;
	outline-offset:15px;
	/*outline-offset设置轮廓框架在 border 边缘外的偏移,值可以为inherit（从父元素继承）或像素*/
}
</style>
</head>
<body>
<h3 id="shadow">文本阴影效果</h3>
<h3 id="boxshadow"><center>盒子阴影效果</center></h3>
<h3 id="overflow1">这个文字超出部分会不显示</h3>
<h3 id="overflow2">这个文字超出部分会变成省略号</h3>
<h3 id="br">这里面的单词会自动换行：hahahahah wordwordword this is a longlonglongword</h3>
<h3 id="break-br">这里面的单词 会被拆开换行：hahahahah wordwordword this is a longlonglongword</h3>
<h3 id="keep-br">这里面的单词 只能在半角 空格或连字符 处换行：hahahahah word-word-word this is a long-long-long-word</h3>
<a href="https://www.runoob.com/css3/css3-text-effects.html">其他文本效果</a>
<br><br>
<div id="col"><h3>英国维斯米斯特教堂碑文</h3>当我年轻的时候，我梦想改变这个世界；当我成熟以后，我发现我不能够改变这个世界，我将目光缩短了些，决定只改变我的国家；当我进入暮年以后，我发现我不能够改变我们的国家，我的最后愿望仅仅是改变一下我的家庭，但是，这也不可能。当我现在躺在床上，行将就木时，我突然意识到：如果一开始我仅仅去改变我自己，然后，我可能改变我的家庭；在家人的帮助和鼓励下，我可能为国家做一些事情；然后，谁知道呢?我甚至可能改变这个世界。</div>
<div id="resize">这个div元素可以由用户自动调节大小</div>
<div id="contain">
	<div id="box"></div>
	<div id="box"></div>
</div>
<div id="offset">这个 div有一个轮廓边界15 px边境外的边缘。</div>
</body>
</html>
```

### 弹性容器

```html
<!DOCTYPE html>
<html>
<head>
	<title>弹性容器</title>
	<style type="text/css">
		#flex-container{
			position: absolute;
			top: 200px;
			left: 10%;
			display: flex;
			/*display指定HTML元素盒子类型；
			弹性盒子只定义了弹性子元素在弹性容器内如何布局，不影响弹性容器外和弹性子元素内的渲染*/
			width: 80%;
			height: 25%;
			background: lightgray;
			flex-direction: row-reverse;
			/*flex-direction属性指定了弹性子元素在父容器中的位置。
			属性值有：
				row：横向从左到右（左对齐），默认排列
				row-reverse：反转横向排列（右对齐，从后往前排，最后一个摆在最前面
				column：纵向排列）
				column-reverse：反转纵向排列，同上上*/
			justify-content: space-around;
			/*此属性定义内容对齐方式，应用在弹性容器上，把弹性项沿着弹性容器的主轴线对齐。
			属性值有：
				flex-start：弹性项目向行头紧挨着填充
				flex-end：弹性项目向行尾紧挨着填充
				center：弹性项目居中紧挨着填充
				space-between：弹性项目均匀分布在该行上
				space-around：弹性项目均匀分布，但两端各留有间隔的一半的空间*/
			align-items: center;
			/*此属性定义或检索弹性盒子元素在纵轴上的对齐方式
			属性值有：
				flex-start：弹性盒子元素的纵轴起始位置的边界紧靠住该行的纵轴起始边界
				flex-end：弹性盒子元素的纵轴起始位置的边界紧靠住该行的纵轴结束边界
				center：弹性盒子元素在该行的纵轴上居中位置（如果该行尺寸小于弹性盒子尺寸，则向两个方向溢出相同长度）
				baseline：如弹性盒子元素的行内轴与纵轴为同一条，则该值与flex-start等效，否则，该值参与基线对齐
				stretch：默认值，如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制*/
			flex-wrap: wrap;
			/*此属性用于指定弹性盒子的子元素换行方式
			属性值有：
				nowrap：默认值，弹性容器为单行，此时弹性子项可能会溢出容器
				wrap：弹性容器为多行，此时，弹性子项溢出部分会被放置到新行，子项内部会断行
				wrap-reverse：反转wrap排列*/
			align-content: center;
			/*此属性用于修改flex-wrap属性的行为，设置各个行的对齐
			属性值有：
				stretch：默认值，各行会伸展以利用剩余的空间
				flex-start：各行会向弹性盒容器的起始位置堆叠
				flex-end：各行会向弹性盒容器的结束位置堆叠
				center：各行会向弹性盒容器的中间位置堆叠
				space-between：各行在弹性盒容器中平均分布
				space-around：平均分布，但两端保留间隔的一半大小*/
		}
		
		body{
			/*这个时候，如果设置direction属性值为rtl（right-to-left），弹性子元素的排列方式也会改变，页面布局也会跟着改变*/
			direction: rtl;
		}
		#flex-item1{
			margin: 2%;
			background-color: grey;
			width: 25%;
			height: 80%;
			order: 1;
			/*此属性用于定义弹性子元素的排序，数值小的排在前面，可以为负值*/
			margin: 10px;
			/*设置margin的值为auto，自动获取弹性容器的剩余空间，可以完美的设置居中*/
			align-self: auto;
			/*此属性用于设置弹性元素自身在纵轴上的对齐方式
			属性值有：
				auto：计算值为父元素的align-item值，如果没有父元素，则计算值为stretch
				flex-start；flex-end；center；baseline；stretch同上*/
			flex: 1;
			/*此属性用于指定弹性元素如何分配空间
			属性值有：
				auto：计算值为 1 1 auto
				initial：计算值为 0 1 auto
				none：计算i值为 0 0 auto
				inherit：从父元素继承
				[flex-grow]：定义弹性盒子元素的扩展比率
				[flex-shrink]：定义弹性盒子元素的收缩比率
				[flex-basis]：定义弹性盒子元素的默认基准值*/ 
		}
		#flex-item2{
			margin: 2%;
			background-color: grey;
			width: 25%;
			height: 80%;
			order: 2;
			margin: 10px;
			flex: 1;
		}
		#flex-item3{
			margin: 2%;
			background-color: grey;
			width: 25%;
			height: 80%;
			order: 3;
			margin: 10px;
			flex: 1;
		}
	</style>
</head>

<body>
	<!--弹性盒子（flexbox）是css3的一种新的布局模式是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当行为的布局方式。
		引入弹性盒子的目的是提供一种更有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间-->
<div id="flex-container">
	<div id="flex-item1"><center>1</center></div>
	<div id="flex-item3"><center>2</center></div>
	<div id="flex-item2"><center>3</center></div>
</div>

</body>
</html>
```

### 其他

```html
<!DOCTYPE html>
<html>
<head>
	<title>css补充1</title>
	<style type="text/css">
		div div#ys{
			background: #f40;
		}
		div div{/*父子选择器*/
			width: 100px;
			height: 40px;
			border-radius: 25px;
			background: #000;
			font-size: 20px;
			font-weight: bold;/*字体粗细*/
			font-style: normal;/*字体格式*/
			font-family: cursive;/*字体*/
			color: rgb(255,255,255);/*颜色*/
			border: 1px solid black;/*solid实线 dotted dashed*/
			border-left-color: black;/*左边框，还有右边框等等*/
			line-height: 40px;/*行高*/
			text-indent: 0em;/*缩进*/
			cursor: pointer;/*当鼠标在此区域时的显示方式*/
			margin-left: 20px;/*元素之间的空隙,还有margin-top等等*/
		}
		div div:hover{
			font-size: 22px;
		}
		div > span{/*直接子元素选择器*/
			color: #333;
		}
		.under{
			text-decoration: line-through;/*划线underline,overline,,none*/
		}
		[under]{/*属性选择器*/
			color: #999;
		}
		*{/*通配符选择器*/
			margin: 0;
		}

		/*
			关于选择器的补充

				优先级依次		权重（256进制）
				！important			无穷
				行间样式表			1000
				id 					 100
				class|属性|伪类		  10
				标签|伪元素			   1
				通配符				   0
			对于一个元素，如果有两个同类型的样式定义（如都定义背景颜色），浏览器会按照权重选择，
			对于父子选择器等，将同一行的权重相加即为此样式的权重，如
			div div..      此样式权重为2；
			div div#ys..   此样式权重为102；
			那么对于两者关于背景颜色的定义，浏览器会应用下面的
		*/
	</style>
</head>
<body>
<!-- 行级元素：
		内容决定元素所占位置
		不可以通过css改变宽高
		span strong em a del
	块级元素：
		独占一行
		可以通过css改变宽高
		p ul li div form
	行级块元素：
		内容决定大小
		可以改变宽高
	弹性盒子：...
	上面的可以通过 display 进行设置或修改 -->
	<div>
		<span class="under">原件100元</span>
		<span>折后99.9元</span>
		<div id="ys"><center>购买</center></div>
	</div>	
<!-- 关于盒子：
	三大部分：

		盒子壁：border

		内边距：padding（通常一个值 可 四个值 上 右 下 左
									 三个值 上 左右 下
									 两个值 上下 左右
				可padding-left等等 ）

		盒子内容：width + height

		外边距：margin   值同padding
	这些可以在控制台（浏览器中右击检查）查看-->

<!-- 关于层模型
	当一个元素的position设为absolute时，
	此元素就不属于此层，而是上面一层 
		最近的有定位的父级进行定位，如果没有，则相对于文档进行定位
	
	当position为relevant时，
	保留原有位置，进行定位
		相对于自己原来的位置进行定位

	position为fixed
	配合top left可进行广告定位（无论滚动条怎么滑动，位置都不变）

	一般用relevant作为参照物，用absolute进行定位

	正常元素层数为0,z-index属性设置第几层-->


</body>
</html>
```

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>补充2</title>
</head>
<style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	.style1{
		margin-top: 100px;
		margin-left: 100px;
		height: 100px;
		width: 100px;
		background: red;
		opacity: 1;/*透明度，0-1,越低越透明*/
	}
	.style2{
		width: 50px;
		height: 50px;
		background: green;
		margin-left: 50px;/*此时，设置margin-left属性，可以以父元素为参照系*/
		margin-top: 50px;/*但设置margin-top属性，是以文档为参照系，所以需要设置为150px才能在父元素中向下移动50px，但同时父元素也会因为子元素的margin-top而向下移动，达不到预期效果*/
		/*称这个为margin塌陷，不能解决，只能弥补*/
		position: absolute;
		/*	弥补方法有 加个上边框（不添加）
				position: absolute;
				display: inline-block;
				float: left/right;
				overflow: hidden;
			让盒子变为一个bfc（block format context 块级格式化上下文）
				这些方法能够解决margin塌陷的问题，但是触发了其他问题，所以上述方法需要根据实际情况选择用法
		*/
		/*bfc也可以解决margin在垂直方向不能叠加的问题*/
		
		/*float：left|right    浮动元素，到一行放不下时才换行
			浮动元素产生了浮动流
				所有产生了浮动流的元素，块级元素看不到他们
				产生了bfc的元素和文本类属性的元素以及文本能看到浮动元素
		后续元素可通过设置 clear:both 来清除周围的浮动流，经常在::after中去浮动*/
		/*
		设置了 position: absolute;
				display: inline-block;
				后，元素会从内部换成inline-block元素*/


		/*ps:嵌套时
			行级元素只能嵌套行级元素
			块级元素可以嵌套所有元素
			但：	p标签里面不能嵌套div标签
				a标签不能套a标签*/

		/*inline 和 inline-block元素都是文本类元素*/

	}
</style>
<body>
<div class="style1">
	<div class="style2"></div>
</div>

</body>
</html>