---
title: html学习笔记
date: 2020-01-19 15:53
tags:
- html
- 笔记
- web
category: code
cover: https://img.dorakika.cn/md/default.png
description: 很早之前的写在代码内部的html学习笔记，整合了一下
slug: '20200119'
---

> 老早之前的笔记了，整合一下搬运过来

## 文本与超链接

```html
<!doctype html>
<html><!--文件开始标签-->

<head><!--文件头开始的标签-->
<title>这是一个标题</title>
</head><!--文件头结束的标签-->


<body text="blue"><!--文件主体开始的标签-->
<!--body 的text属性可以设置整个网页的文字颜色不过就近原则font优先-->

<h1>这是一级标题</h1>
<h2>这是二级标题</h2>
<h3 align="left">居左的三级标题</h3><!--align 设置对齐方式，有left center right三种，默认left-->
<h4 align="right">居右的四级标题</h4>
<h5 align="center">居中的五级标题</h5>

<p>这是段落</p><!--使用<p>标签不仅可以换一行，还可以再空一行-->
<p align="center">居中段落</p>

<a href="css/仿登录界面.html">这是一个本地文件刷新的超链接</a><br><!--这是注释  br是换行-->
<a href="https://fishc.com.cn/">这是一个跳转网络网页的超链接</a><br>
<a href="css/仿登录界面.html"target="_blank">这是一个新建页面刷新的超链接</a>

<hr align="center" size="10px" width="80%" color="green" ><!--表示一条水平线,有
align属性（线条放置位置）、
size属性（线条粗细，以像素为单位，默认为2）、
width属性（线条长度，绝对值（以像素为单位）或相对值（相对于当前窗口的百分比））
color属性（线条颜色，默认黑色，可用颜色名称或#开头的一个十六进制代码）
noshade属性（设定线条为平面显示，没有三维效果，默认则有阴影立体效果）-->

<br><b>这是粗体</b>
<br><em>这是斜体</em><i>这也是斜体</i>
<br><u>这是下划线</u><sup>这是上标</sup>
<br><s>这是删除线</s><sub>这是下标</sub>
<br><big>这是大字体</big>
<br><small>这是小字体</small>

<pre>
		在预排格式中，
		可以保留其他编辑器编辑好的段落格式，
		<font size="3" color="red" face="黑体">在pre标签中，</font>
		<!--font标签用于设置字体
		size属性设置字体大小
		color属性设置字体颜色
		face属性设置字体
		font不像h1. font不会自动加粗-->
		任然可以用html语言进行修改</pre>
	
<div align="center">用于分区显示文字、图像等的对齐方式</div>

</body><!--文件主体结束的标签-->
</html><!--文件结束标签-->
```

### 头部链接与超链接补充

```html
<pre>
<!doctype html>
<html>

<head>

<!--meta标签分为两大部分
HTTP标题信息 和 页面描述信息     提供用户不可见的信息-->


<!--HTTP标题信息（http-equiv）这个属性相当于HTTP的头文件的作用，
用于向浏览器传回一些有用的信息，帮助其正确的显示内容
http-equiv的参数有以下几个-->

	<!--显示字符集：content-type-->
	<meta http-equiv="content-type" content="text/html;charset=GB2132">
	<!--用于设定页面使用的字符集，即说明页面使用的文字语言，浏览器会根据这个调用相应的字符集再显示页面内容
	如这个标签定义的字符集就是GB2132，就是国标汉字码-->

	<!--刷新：refresh-->
	<!-- <meta http-equiv="refresh" content="10"> -->
	<!-- <meta http-equiv="refresh" content="10;url=http://www.fishc.com"> -->
	<!--让网页多少时间（秒）刷新自己，或者多长时间自动链接到其他网页
	content内容为 刷新延时时间，单位是秒；刷新后的位置-->

	<!--期限：expires-->
	<!--<meta http-equiv="expires" content="0">
	<meta http-equiv="expires" content="Fri,10 Jan 2020 12:32:00GMT"> -->
	<!--制定网页在缓存中的过期时间，一旦网页过期，就要到服务器上重新调阅
		必须使用GMT时间格式，上面的0表示不过期-->

	<!--cach模式：pragma-->
	<!--<meta http-equiv="pragma" content="No-cach">-->
	<!--禁止浏览器从本地机的缓存中调阅页面的内容
	网页不会保存在缓存中，每次访问都要刷新页面，这样设定，用户无法脱机浏览-->
	
	<!--cookie设置：set-cookie-->
	<!--<meta http-equiv="set-cookie" content="cookievalue=xxx; expires=Friday, 10-Jan-2020 12:44:00;path=/">-->
	<!--浏览器访问某个网页时，会将之存入某个缓存中，下次访问时就可以直接从缓存中读取，可以提高速度
	通常的网页都没有必要禁用缓存，对于ASP页面，就可以禁用缓存，因为每次看到的页面都是在服务器中动态
	生成的，缓存就失去了意义。如果网页过期，那么存盘cookie就会被删除（时间也是GMT格式）-->
	
	<!--显示窗口的设定：window-target-->
	<meta http-equiv="window-target" content="_top">
	<!--这个属性时用来防止别人在框架里调用自己的页面，强制页面在当前装口以独立页面显示。content的参数包括
	   _blank, _top, _self, _parent  -->
	
	<!--页面的进入与退出：page-enter  page-exit -->
	<meta http-equiv="page-enter" content="blendTrans(Duration=2)">
	<meta http-equiv="page-exit" content="blendTrans(Duration=2)">
	<!--用于页面载入和调出时的一些特效，
	blanTrans是动态滤镜的一种，产生渐隐效果，
	duration表示滤镜持续的时间-->
	

<!--页面描述信息（name）该属性用于说明和描述网页，name是描述网页的，对应于content（页面内容）
以便于搜索引擎机器人查找、分类
	name的取值指定所提供信息的类型，其中有些值是已经定义好了的，如：description，keywords，refresh等
	也可以指定其他任意值，如：creationdate（创建日期），documentID（文档编号）和level（等级）等-->
	
	<!--关键词：keywords-->
	<meta name="Keywords" lang="CN" content="html学习,自学,day2">
	<!--用于声名网页的关键字，有internet搜索引擎完成关键词索引，各关键词之间用逗号隔开，可以用lang特性来过滤语言-->
	
	<!--简介：Description-->
	<meta name="Description" content="这是我第二天的学习内容">
	<!--用于描述网站的主要内容，搜索引擎也会通过这个来检索，但不显示-->
	
	<!--机器人向导：Robots -->
	<meta name="Robots" content="all">
	<!--该属性告诉搜索机器人哪些页面需要索引，哪些页面不需要索引，content参数有：
		all：文件被检索，且页面上的链接可以被查询；
		none：文件不被检索，且页面上的链接不可以被查询；
		index：文件将被检索（让robot/spider登录）；
		follow：页面上的链接可以被查询
		noindex：文件将不被检索，但页面上的链接可以被查询（不让robot/spider登录）；
		nofollow：文件将不被检索，页面上的链接不被查询（不让robot/spider顺着此页面往下找）-->
		
	<!--作者：Author-->
	<meta name="Author" content="yk,CIFAN">
	<!--标注网页的作者或制作组，content可以说名字，也可以是邮箱-->
	
	<!--版权：Copyright-->
	<meta name="Copyright" content="本页版权归yk所有。ALL Rights Reserved">
	<!--标注版权-->
	
	<!--编辑器：Generator-->
	<meta name="Generator" content="Notepad++">
	<!--编辑器的说明，content为你使用的编辑器-->
	
	<!--重访：revisit-after-->
	<!-- <meta name="revisit-after" content="7-days"> -->
	<!--设置重新访问的时间间隔，以天为单位，上面设置的是七天之后可再次访问-->
	
<!--其他标签-->

	<!--方案：scheme-->
	<!-- <meta scheme="ISBN" name="identifier" content="0-14-043205-1"/> -->
	<!--当name用于解释content内容时，可以使用此标签，这里声名一个ISBN标识符，其内容为0-14-043205-1-->
	
	<!--链接：LINK-->
	<!-- <LINK href="fishc.com" rel="fishc"> -->
	<!--链接到某一文件，如果用户把某个网站收藏后，会发现它带有一个小图标，单击进入后会发现地址栏中也有一个小图标-->
	
	<!--基链接：BASE-->
	<!-- <BASE href="http://www.fishc.com.cn/" target="_blank"> -->
	<!--网页上所有相对路径在链接时都会自动在前面加上href的内容-->

<title>头部标签,其他超链接,列表</title>
</head>
	
	
	
	
<body>
	<a href="#final">指向本页面中的超链接</a>
	<!--实现当前页面的超链接，有两个标签，一个超链接标签，一个书签标签-->
	<br><a href="mailto:1633198089@qq.com">发送邮件的超链接</a>
	<br><a name="final">书签标签</a>
	
</body>

</html>
</pre>
```

### 列表与表格

```html
<!doctype html>
<html>

<head>

<title>列表与表格</title>
</head>

<body>

	<!--列表-->
	
		<!--无序列表-->
		<h1>列表</h1>
		<p align="center"><font size="5" color="blue"><b>下面是无序列表</b></font></p>
		<ul type="disc">
			<li>第一个表项
			<li type="circle">第二个表项
			<li type="square">第三个表项
			<li>第四个表项（符号格式遵从ul定义）
		<!--无序列表通过ul标签（unorder list）建立，表项是li（list item），ul和li都可以定义表项左端的符号类型
		disc为实心圆点，circle为空心圆点，square为实心方块
		也可以通过css样式表将前面的符号换位图片-->
		</ul>
		
		<!--有序列表-->
		<p align="center"><font size="5" color="blue"><b>下面是有序列表</b></font></p>
		<ol type="1">
			<li>第一个表项
			<li type="i">第二个表项
			<li type="a">第三个表项
			<li type="A">第四个表项
			<li type="I">第五个表项
			<li>第六个表项（符号格式遵从ol定义）
		<!--有序列表通过ol标签（order list）建立，表项也是li，type属性设置序号格式（顺序不变），
		1表示序号为数字，i表示序号为小写罗马字母，a为小写英文字母，A是大写英文字母，I是大写罗马字母
		-->
		</ol>
		
		<!--定义列表-->
		<p align="center"><font size="5" color="blue"><b>下面是定义列表</b></font></p>
		<dl>
			<dt><font color="red">定义单词1</font>
				<dd><h3>单词1的说明（内嵌h3标签（块级））</h3>
			<dt><b>定义单词2</b>
				<dd><p><a href="day1.html">单词2的说明</a></p>
		<!--定义列表用dl标签（definition list），dt（definition term）为定义术语，dd（definition description）为定义描述
		定义术语dt中只能包含inline元素（inline元素简单来说就是使用后不自动换行的元素）
		定义描述dd可以使用任何HTML元素（block和inline）甚至是列表元素-->
		</dl>
		
		<!--列表的嵌套-->
		<p align="center"><font size="5" color="blue"><b>下面是列表的嵌套</b></font></p>
		<ol>
			<li>数学计划
			<ul>
				<li>复习高等数学（不仅仅是C类）
				<li>学习高等代数与解析几何
			</ul>
			<li>编程计划
			<ul>
				<li>复习C语言
				<li>学习html5
				<li>学习css3
				<li>学习JavaScript
			</ul>
		</ol>
		<!--通过有序和无序列表的嵌套，可以把主页分为多层次-->
		
	
	
	<!--表格-->
	<h1>表格</h1>
	<!--table是表格标签，tr为行标签，th定义表头信息，td为表项标签-->
	<table border="2px" width="350px" height="60px" cellspacing="2px" cellpadding="2px" align="right" background="../img/cb.jpg" bordercolor="yellow" bordercolorlight="red">
	<!--table的属性决定整个表格的外观，有以下属性；
	border：定义边框的粗细，单位是像素，没有则边框省略（设置为零时生成无边框表格，可以用于排版）；
	width：定义边框的宽度，可以是像素，也可以是占窗口的百分比；
	height：定义边框的高度，可以是像素，也可以是占窗口的百分比；
	cellspaceing：定义表项之间的间隙，单位是像素；
	cellpadding：定义表项内部的空白，单位是像素；
	
	align：决定表格在页面的位置，left，center，right，为center时表格两侧没有文本，left和right时文本在表格另一侧;
	background:设置背景图片，内容为图片文件名；
	bordercolor：设置表格边框颜色；
	bordercolorlight：设定表格边框亮部的颜色；
	rules：设定表内线的显示方法（row，cols或none）。-->
	
		<caption valign="top" align="left">寒假学习初步计划</caption>
		<!--caption标签用于给表格添加标题，有align和valign属性
		valign：设置标题放在表的上部（top）还是下部（bottom）
		align:设置标题为居left，center（默认），还是right，也可以设置top（默认）和bottom-->
		<tr><th rowspan="4">前三天</th><th>日期</th><th bgcolor="red">web|html</th><th bgcolor="blue">数学</th><th bgcolor="green">英语</th>
		<!--td,th,tr,可以使用colspan属性实现跨多列的表项（多列的合并），rowspan为行表项的合并
		
		td，th里面可以使用bgcolor属性来给每个单元设置背景色-->
		<tr><td>day1</td><td>文字与超链接</td><td>数列极限</td><td>背单词</td>
		<tr><td>day2</td><td>头部的一些属性</td><td>代数基础准备</td><td>背单词</td>
		<tr><td>day3</td><td>列表与表格</td><td>函数极限与连续</td><td>背单词</td>
		<tr><td colspan="5" align="center">需要上交报告，英语上交打卡</td>
	</table>
	<p>此文字用于实验</p>
	
	<br><br><br><br><br><br><br><br><br><br>
	
	
	<p align="center"><font size="5" color="orange"><b>表格的分组显示</b></font></p>
	<!--按行分组，可以定义多个表体tbody，thead，tfoot。tbody可以是单标签，也可以是双标签-->
	<table border="2px" align="center">
		<thead>
		<tr><th> </th><th>周一</th><th>周二</th><th>周三</th><th>周四</th><th>周五</th>
		</thead>
		
		<tfoot> </tfoot>
		
		<tbody>
			<tr><td> 1</td><td rowspan="2" bgcolor="purple">数据库原理（理论）</td><td rowspan="2" bgcolor="#FF3300">大学英语2</td><td rowspan="2" bgcolor="yellow">高等数学C2</td><td rowspan="2" bgcolor="#21E3E4">python语言（理论）</td><td></td>
			<tr><td> 2</td><td></td>
			<tr><td> 3</td><td rowspan="2" bgcolor="green">自然科学导引</td><td rowspan="2" bgcolor="#1100FF">羽毛球（高级）</td><td rowspan="3" bgcolor="BB6655">信息组织</td><td rowspan="3" bgcolor="#21E3E4">python语言（实验）</td><td rowspan="2" bgcolor="purple">数据库原理（实验）</td>
			<tr><td> 4</td>
			<tr><td> 5</td><td></td><td></td><td></td>
		</tbody>
		
		<tbody>
			<tr><td> 6</td><td rowspan="2" bgcolor="yellow">高等数学C2</td><td rowspan="3" bgcolor="#777777">马克思主义基本原理概论</td><td rowspan="3" bgcolor="#444444">中国近代史纲要</td><td rowspan="3" bgcolor="#776655">形式与政策</td><td></td>
			<tr><td> 7</td><td></td>
			<tr><td> 8</td><td rowspan="2" bgcolor="#00FF79">军事理论与训练</td><td></td>
			<tr><td> 9</td><td></td><td></td><td></td><td></td>
			<tr><td>10</td><td></td><td></td><td></td><td></td><td></td>
		</tbody>
		
		<tbody>
			<tr><td> 11</td><td rowspan="3" bgcolor="#123456">旅行生活与寄生虫病</td><td rowspan="3" bgcolor="99DDAA">信息政策与法律</td><td rowspan="3" bgcolor="#DA112A">数据素养与数据利用</td><td rowspan="3" bgcolor="#218130">互联网创意思维与用户体验</td><td></td>
			<tr><td> 12</td><td></td>
			<tr><td> 13</td><td></td>
		</tbody>
		
	</table>
	
	<!--按列分组 colgroup列组可以统一设置列的个数和宽度，col可以设置单个列的宽度-->
	<table border>
	<caption>按列分组</caption>
	<colgroup span="2" width="80">
		<thead>
			<tr><th>day1</th><th>day2</th>
		</thead>
			<tr>
				<td>html</td>
				<td>高数</td>
			<tr>
				<td>C语言</td>
				<td>代数</td>
	</table>
	<!--关于对齐
		水平对齐：使用align属性可以设置center，left，right，justify（左右调整）
		垂直对齐：使用valign属性可以设置top，bottom，middle，baseline（与同行单元数据一致）-->
	
</body>

</html>
```

### 图像

```html
<! DOCTYPE html>
<html>

<head>
<title>day4 图像</title>
</head>

<!-- <body bgcolor="#4488FF"> -->
<body background="../img/pic1.jpg">
<!--背景设置，可以使用bgcolor设置背景色，或者background设置背景图片
（图片会被复制，然后平铺满整个页面，所以图片可以做的非常小，一般都是特殊制作的，不然会出现断裂的效果）-->

<h1 align="center"><font color="red">图片标签</font></h1>
<!--使用图片标签，可以把一幅图片插入网页中。可以设置图片替代文本、尺寸、布局等属性-->

<center><img src="../img/pic2.jpg" alt="文字" width="120px" height="120px" hspace="5px" vspace="5px" align="left" align="bottom">这是个图片</img></center>
<!--将图片放在中间可以使用center标签，或者用带align属性的p标签
关于图片的属性有：
src：用于指出要加入图片的位置；
alt：在浏览器还没有加载出图片时，就会显示alt内的文本；
width：设置图片的宽度，像素和百分比都行；
heigh：设置图片的高度，像素和百分比都行；
hspace：设置图片左右的空白，防止文本离图片太近；
vspace：设置图片上下的空白，防止文本离图片太近；
align：设置图片文本的垂直对齐方式（左右的话可以设置图片左右并且可以实现文字环绕，center好像不行，亲测）-->
<p>这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字</p>
<img src="../img/pic13.jpg" width="120px" height="120px" align="right">
<p>这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字</p>
<br clear="all"><!--上面使用align设置文本环绕后，在后面可以使用此标签解除-->
<p>这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字这是测试文字</p>

<a href="day3.html"><img src="../img/pic14.jpg" width="120px" height="120px" ></a>
<!--使用图片做超链接-->
<br clear="all"><!--上面使用align设置文本环绕后，在后面可以使用此标签解除-->
<br>


<!--在图片上定义热区  //  当使用者单击不同的区域，就会转向不同的网页-->
<img src="../img/cb.jpg" width="240px" height="240px" usemap="#mymap"></img>
<!--首先在img中调用usemap属性，内容为map中定义的名称-->
<map name="mymap"><!--map标签，name中就是此map的名称-->
<area shape="circle" coords="30,30,30" href="day1.html" target="_blank">
<area shape="rect" coords="100,100,1000,1000" href="day2.html" target="_blank">
<!--在map中嵌套定义area标签，area中的属性有
shape：定义形状，属性值可以为rect（矩形），circl（圆），polygon（多边形），default（默认）
coords：定义一个以逗号分隔的  坐标列表
href：设置链接地址
还可以使用target，alt（这是我目前已知的）-->
</map>
</body>

</html>
```

### 框架使用

```html
<!DOCTYPE html>
<html>

<head>
<title>day5 开始交互设计|框架</title>
</head>


<!--框架的建立使用frameset和frame两个标签，框架标签需要放在同一个总起的html文件中，这个文件只记录了该框架如何划分
，不会显示任何资料，所以只是以frameset标签取代body标签，用来声名框架的定义，frameset用以划分框窗，每一个框窗由一个frame标签所标识
，frame标签必须在frameset范围中使用，用来声明其中框架页面的内容-->
<frameset rows="120px,*" frameborder="1">
<!--frameset标签用来定义一个框架组的属性，属性有：
rows：设定横向分割的框架数目  可以row=“x”或“y%”或“z*”
								x：表示框架的绝对大小
								y%：表示框架相当于窗口的百分比
								z*：表示自动分配，如：row=50，20%，*   *表示第三个横向框架大小为前两个框架分配好后留下的部分
cols：设定纵向分割的框架数目
border：设定边框的宽度
bordercolor：设定边框的颜色
frameborder：设定有无边框
framespacing：设定各窗口间的空白-->

<frame src="day5_title.html" noresize marginwidth="10px"><!--用于给框架指定页面的内容，其属性有：
src：表示该框架对应的源文件
name：指定框架名，框架名由字母开头，下划线开头无效
border：设定边框的宽度
bordercolor：设定边框的颜色
frameborder：设定有无边框
marginwidth：设定框架内容与左右边框的空白
marginheight：设定框架内容与上下边框的空白
scrolling：设定是（yes）/否（no）/自动（auto）加入滚动条
noresize：不允许各窗口改变大小，默认设置是允许的-->
<frameset cols="120px,*" frameborder="1">
<frame src="day5_menu.html" marginheight="20px">
<frame src="day3_列表与表格.html" name="xianshi">

<!--还可以使用iframe元素，iframe元素会创建包含另一个文档的内联框架-->
<!--   <iframe src="" />  
		属性有src，scrolling，width，height，frameborder，name，用途可参考frame-->

</frameset>
</frameset>

</html>
```

- menu.html

```html
<!doctype html>
<html>
<head>
<title>目录</title>
</head>
<body bgcolor="orange">
<h1><font color="red">目录</font></h1>
<a href="day1_文本与超链接.html" target="xianshi"><h2><font color="blue">day1</font></h2></a>
<a href="day2_头部标签与超链接补充.html" target="xianshi"><h2><font color="blue">day2</font></h2></a>
<a href="day3_列表与表格.html" target="xianshi"><h2><font color="blue">day3</font></h2></a>
<a href="day4_图像.html" target="xianshi"><h2><font color="blue">day4</font></h2></a>
<a href="day5_框架.html" target="xianshi"><h2><font color="blue">day5</font></h2></a>
</body>
</html>
```

- title.html

```html
<!doctype html>
<html>
<head>
<title>标题</title>
</head>
<body bgcolor="#0077FF">
<h1 align="center"><font color="green">我的HTML5学习</font></h1>
</body>
</html>
```

### 表单

```html
<! DOCTYPE html>
<html>
<head>
<title>day6 表单</title>
</head>

<body>
<!--网页上具有可输入表项及项目选择等控制所组成的栏目称为表单
在网页中，可以通过表单交流和反馈信息达到与用户交互的目的
与表单有关的标签有form和input

form标签主要处理表单结果的处理和传送，属性如下：
action属性：表单处理的方式，往往是Email地址或网址
method属性：表单数据的传送方向，是获得（get）表单还是送出（post）表单

input标签主要用来设计表单中提供给用户的输入方式，属性如下：
type属性：指定要加入表单项目的类型（text，password，checkbox，radio，image，hidden，submit，reset）
name属性：该表项的控制名，主要在处理表单时起作用
size属性：单行文本区域的宽度
maxlength属性：允许输入的最大字符数目
-->

<font color="red" size="7"><p align="center">学习记录</p></font>
<!--使用input标签中的type属性，可以在表单中加入表项，并控制表项的风格
表项前可以加上表项的名称-->
<form action="day5.html" method="post">
学&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp号：<input type="text" name="学号"></input><br>
密&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码：<input type="password" name="密码"></input><br>

<!--页面中的某些地方需要列出几个项目供用户选择时，
可以使用type中的复选框（checkbox）或单选按钮（radio）
value可以设置选择按钮的控制初值，用checked表示默认选中项-->
性&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp别：<input type="radio" name="性别" value="男" checked>男</input>
<input type="radio" name="性别" value="女">女</input><br>
正在学习：<input type="checkbox" name="学习" value="C语言">C语言</input>&nbsp
<input type="checkbox" name="学习" value="html5">html5</input>&nbsp&nbsp
<input type="checkbox" name="学习" value="css3">css3</input>&nbsp&nbsp&nbsp&nbsp
<input type="checkbox" name="学习" value="JavaScript">JavaScript</input><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<input type="checkbox" name="学习" value="高数上">高数上</input>
<input type="checkbox" name="学习" value="python">python</input>
<input type="checkbox" name="学习" value="高数下">高数下</input>
<input type="checkbox" name="学习" value="数据库">数据库</input><br>

<!--当用户选择的项目较多时，如果用选择按钮来选择占用的页面区域就较多，
可以使用select标签和option标签来设置选择栏，选择栏有弹出式和字段式
select标签的属性有：
size：取数字，表示在带滚动条的选择栏中 一次可见 的列表项数
name：控制操作名
multiple：不带值，加上本项表示可多选，否则只能单选

option标签的属性有：
select：不带值，加上本项表示该项是预置的
value：指定控制操作的初始值，默认时初值为option中的内容表示选项值-->
开始学习日期：<select name="年" size="1">
<option value="2019">2019
<option value="2020">2020
<option value="2021" selected>2021
<option value="2022">2022
<option value="2023">2023
</select>
<select name="月" size="1">
<option value="01" selected>01
<option value="02">02
<option value="03">03
<option value="04">04
<option value="05">05
<option value="06">06
<option value="07">07
<option value="08">08
<option value="09">09
<option value="10">10
<option value="11">11
<option value="12">12
</select>
<select name="日" size="1">
<option value="01" selected>01
<option value="02">02
<option value="03">03
<option value="04">04
<option value="05">05
<option value="06">06
<option value="07">07
<option value="08">08
<option value="09">09
<option value="10">10
<option value="11">11
<option value="12">12
<option value="13">13
<option value="14">14
<option value="15">15
<option value="16">16
<option value="17">17
<option value="18">18
<option value="19">19
<option value="20">20
<option value="21">21
<option value="22">22
<option value="23">23
<option value="24">24
<option value="25">25
<option value="26">26
<option value="27">27
<option value="28">28
<option value="29">29
<option value="30">30
</select>
<br><br>
目前是第<select name="天数" size="2">
<option value="01" selected>01
<option value="02">02
<option value="03">03
<option value="04">04
<option value="05">05
<option value="06">06
<option value="07">07
<option value="08">08
<option value="09">09
<option value="10">10
<option value="11">11
<option value="12">12
<option value="13">13
<option value="14">14
<option value="15">15
<option value="16">16
<option value="17">17
<option value="18">18
<option value="19">19
<option value="20">20
<option value="21">21
<option value="22">22
<option value="23">23
<option value="24">24
<option value="25">25
<option value="26">26
<option value="27">27
<option value="28">28
<option value="29">29
<option value="30">30
</select>天<br>
<!--当select为1时就是弹出式选择栏，大于1为字段式选择栏-->

<!--需要输入大段文字时，可以使用textarea标签，它可以设置成允许多行文字的输入
属性有name，rows，cols，其中行数和列数是指不用滚动条就可以看到的部分-->
学习心得：
<textarea name="学习心得" rows="5" cols="50">
</textarea>
<br>
<!--如果用户想清除输入到表单中的全部内容，
可以使用input标签中的type属性所设置的reset（重置）按钮
当用户完成表单的填写后欲发送时，可以使用type的submit按钮
当默认value的设置值时，重置和提交的按钮分别显示为“重置”和“提交查询内容”-->
<center><input type="submit" value="发送"></input>
<input type="reset"></input></center>

</form>

</body>

</html>
```

### 动态效果与多媒体

```html
<! doctype html>
<html>
<head>
<meta charset="utf-8">
<title>动态效果与多媒体</title>
</head>

<body>

<!--使用html规范中的marquee标签可以实现滚动字幕
属性有：
align：设置字幕和垂直文本对齐
bgcolor：设置字幕的背景色
width：设置字幕的宽，像素或者相对窗口的百分比
height：设置字幕的高，像素
direction：设置字幕的方向，left或者right
loop：设置循环次数，为-1或者infinite时为无限循环
behavior：scroll设置文字单向流动，side设置流动文字到达边界停止，alternate设置流动文字到达边界后反向移动
hspace：水平方向空白像素数
vspace：垂直方向空白像素数
scrollamount：字幕移动速度
scrolldelay：移动每步的延时-->
<marquee behavior="alternate" width="90%" bgcolor="#AAAAAA" height="160px" hspace="30px">
<img src="../img/yh.jpg" border="0" width="120px" height="120px"><br>
<font color="blue" size="2">文字和图片都可以</font>
</marquee>
<marquee direction="left" scrollamount="10">我往左跑</marquee>
<marquee direction="right" scrolldelay="100">我往右跑</marquee>

<!--加入音频可以使用bgsound标签（这个不是所有浏览器都兼容）属性有：
src：声音文件的位置
loop：播放的次数-->
<!--  <bgsound src="../music/纳豆nado - 最长的思念.wav" loop="2"></bgsound>  -->

<!--还可以使用audio标签，属性有：
autoplay，controls，loop，muted，src，preload，作用与下面的video大致相同-->
<audio src="../music/纳豆nado - 最长的思念.wav" controls="controls"></audio>
<!--audio里面可以内嵌source标签（媒介元素），为了适应不同的浏览器支持文件的不同而设立-->

<video src="../shiping/纳豆nado - 最长的思念.mp4" controls="controls" height="400px"></video>
<!--使用video标签向网页中添加视频，属性有：
src：插入视频的地址
height：设置高度
width：设置宽度
autoplay：无属性值，出现该属性则视频就绪后立即开始播放
preload：页面加载时加载预备播放，auto表示下载整个视频，none表示不进行载入，metadata表示只载入第一帧
controls：显示播放控件（全屏，音量等）
loop：循环播放
paster：视频载入时显示的图片
muted：静音视频-->

</body>

</html>
```

