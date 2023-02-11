---
title: p5.js学习笔记
date: 2021-04-25 20:44
tags:
- web
- js
- 笔记
category: code
cover: https://img.dorakika.cn/md/default.png
slug: '20210425'
---

## 楔子

### 两个函数

```javascript
function setup(){
    //初始化相关代码
    //创建画布，定义线条粗细，填充颜色，轮廓颜色等
}
function draw(){
    //屏幕绘制相关代码
}
```

### 画一个椭圆

```javascript
function setup(){
    createCanvas(1280,720);	//如果不创建画布，默认为100x100
}
function draw(){
    background(220);		//设置背景颜色为rgb(220,220,220)
    ellipse(50,50,80,80);	//画一个圆心坐标为(50,50)，横轴为80，纵轴为80的“椭圆”
}
```

![image-20210425191907783](https://img.dorakika.cn/md/image-20210425191907783.png)

### 交互且画圆

```javascript
function setup() {
  // put setup code here
  createCanvas(1280,720);    //创建画布
}

function draw() {   //此函数定时执行
  // put drawing code here
  if (mouseIsPressed) {     //当鼠标按下
    fill(0);                //填充色为黑色
  } else {
    fill(255);              //填充色为白色
  }
  ellipse(mouseX, mouseY, 80, 80);    //圆心为鼠标坐标
}
```

![image-20210425191957676](https://img.dorakika.cn/md/image-20210425191957676.png)

## 画

### 基本图形

```javascript
function setup() {
  // put setup code here
  createCanvas(1280,720);    //创建画布
}

function draw() {   //此函数定时执行
  // put drawing code here
  background(220);
  //点-参数为点的坐标
  point(100,100);
  //线段，参数为两个端点坐标
  line(115,100,205,100);
  //三角形-参数为三个顶点坐标
  triangle(200,200,300,300,200,300);
  //四边形-参数为四个点坐标
  quad(200,400,300,400,400,300,400,500);
  //矩形-参数为左上角顶点坐标与长宽
  rect(200,500,100,200);
  //圆-参数为圆心坐标和横轴长纵轴长
  ellipse(700,400,100,100);
  //扇形-参数为 圆心坐标，长，宽，起始角度，终止角度
  arc(800,500,100,100,Math.PI*120/180,radians(240));  //Math.PI*120/180-弧度制的120度，radians(240)结果也是弧度制的240度
}
```

![image-20210425192131509](https://img.dorakika.cn/md/image-20210425192131509.png)

### 弧度制与角度制

```javascript
function setup() {
  // put setup code here
  createCanvas(1280,720);    //创建画布
  angleMode(DEGREES);   //设置接下来使用角度制
}

function draw() {   //此函数定时执行
  // put drawing code here
  background(220);
  arc(800,500,100,100,60,240);  //上面的angleMode(DEGREES)设置了使用角度制来表示角度，所以可以直接使用60表示60°
}
```

![image-20210425192202214](https://img.dorakika.cn/md/image-20210425192202214.png)

### 图形属性设置

#### 线条粗细

```javascript
function setup() {
  // put setup code here
  createCanvas(1280,720);    //创建画布
  strokeWeight(3);    //设定初始线条粗细
}

function draw() {   //此函数定时执行
  // put drawing code here
  background(220);

  ellipse(75, 60, 90, 90);
  strokeWeight(8); //8像素
  ellipse(175, 60, 90, 90);
  ellipse(279, 60, 90, 90);
  strokeWeight(20); //20像素
  ellipse(389, 60, 90, 90);
  strokeWeight(3); //由于draw函数会重复执行，所以要么在每次绘制之前设置好属性，要么在绘制结束后恢复你想要的初始属性
}
```

![image-20210425192230610](https://img.dorakika.cn/md/image-20210425192230610.png)

#### 线条连接方式，端点样式

```javascript
function setup() {
  createCanvas(1280, 720);
  strokeWeight(18);
}
function draw() {
  background(204);
  strokeJoin(ROUND); // 圆角
  rect(40, 25, 150, 150);
  strokeJoin(BEVEL); // 斜角
  rect(40, 225, 150, 150);
  strokeCap(SQUARE); // 方形端点
  line(270, 25, 440, 95);
  strokeCap(ROUND); // 圆形端点
  line(270, 125, 440, 195);
}
```

![image-20210425192254756](https://img.dorakika.cn/md/image-20210425192254756.png)

### 填充与轮廓

```javascript
function setup() {
  createCanvas(1280, 720);
  strokeWeight(20);
}
function draw() {
  background(204);  //背景颜色  一个参数：灰度值204（0-255 || 黑-白）
  //						  两个参数：灰度值，透明度
  //                          三个参数：r,g,b
  //                          四个参数：r,g,b,透明度
  fill(255);
  stroke(0);

  fill(220,1,1);  //改变填充色
  rect(40, 25, 150, 150);
  fill(0,230,23);
  rect(40, 225, 150, 150);
  noFill();
  rect(40,425,150,150);


  fill(22,24,222);
  stroke(12,122,230);  //改变轮廓色
  rect(240,25,150,150);
  fill(22,24,222,160);      //第四个参数0-255：透明-不透明
  stroke(220,220,23,169);   //
  rect(440,25,150,150);
  noStroke();
  rect(640,25,150,150);
}
```

![image-20210425192318862](https://img.dorakika.cn/md/image-20210425192318862.png)

### 自定义绘图

```javascript
function setup() {
  createCanvas(1280, 720);
}
function draw() {
  background(220);

  fill(255);
  beginShape();           //开始绘制图形
  vertex(350, 100); //图形顶点
  vertex(400, 300);
  vertex(600, 350);
  vertex(400, 400);
  vertex(350, 600);
  vertex(300, 400);
  vertex(100, 350);
  vertex(300, 300);
  vertex(350, 100);  //将最后一个点与第一个点重合，使图形封闭
  endShape();             //结束绘制图形

  fill(220);
  beginShape();           //绘制新图形
  vertex(300,350);
  vertex(350,300);
  vertex(400,350);
  vertex(350,400);
  endShape(CLOSE);      //除了将最后一个点与第一个点重合，还可以传递CLOSE参数给endShape()来使图形封闭
}
```

![image-20210425192347270](https://img.dorakika.cn/md/image-20210425192347270.png)

### create

```javascript
function setup() {
    createCanvas(480, 120);
}
function draw() {
    background(204);
    // Left creature
    beginShape();
    vertex(50, 120);
    vertex(100, 90);
    vertex(110, 60);
    vertex(80, 20);
    vertex(210, 60);
    vertex(160, 80);
    vertex(200, 90);
    vertex(140, 100);
    vertex(130, 120);
    endShape();
    fill(0);
    ellipse(155, 60, 8, 8);
    // Right creature
    fill(255);
    beginShape();
    vertex(370, 120);
    vertex(360, 90);
    vertex(290, 80);
    vertex(340, 70);
    vertex(280, 50);
    vertex(420, 10);
    vertex(390, 50);
    vertex(410, 90);
    vertex(460, 120);
    endShape();
    fill(0);
    ellipse(345, 50, 10, 10);
}
```

![image-20210425192528910](https://img.dorakika.cn/md/image-20210425192528910.png)

### 画个机器人

```javascript
function setup() {
  createCanvas(680, 620);
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw() {
  background(204);
  // 颈
  stroke(102);
  line(266, 257, 266, 162); // 左
  line(276, 257, 276, 162); // 中
  line(286, 257, 286, 162); // 右
  // 天线
  line(276, 155, 246, 112); // 左
  line(276, 155, 306, 56); // 中
  line(276, 155, 342, 170); // 右
  // 身体
  noStroke();
  fill(102);
  ellipse(264, 377, 33, 33); // 反重力球
  fill(0);
  rect(219, 257, 90, 120); // 主体
  fill(102);
  rect(219, 274, 90, 6); // 条纹
  // 头部
  fill(0);
  ellipse(276, 155, 45, 45); // 头
  fill(255);
  ellipse(288, 150, 14, 14);  // 主眼
  fill(0);
  ellipse(288, 150, 3, 3); // 眼珠
  fill(153);
  ellipse(263, 148, 5, 5); // 副眼 1
  ellipse(296, 130, 4, 4); // 副眼 2
  ellipse(305, 162, 3, 3); // 副眼 3
}
```

![image-20210425192548137](https://img.dorakika.cn/md/image-20210425192548137.png)

## 变量

### 内置变量

- width,height：画布宽高

### 循环

#### 圈圈

```javascript
function setup() {
	createCanvas(480, 120);
	noStroke();
}
function draw() {
    background(0);
    for (var y = 0; y <= height; y += 40) {
        for (var x = 0; x <= width; x += 40) {
            fill(255, 140);
            ellipse(x, y, 40, 40);
        }
    }
}
```

![image-20210425192622014](https://img.dorakika.cn/md/image-20210425192622014.png)

#### 钉子与线

```javascript
function setup() {
  createCanvas(1280, 720);
  fill(255);
  stroke(102);
}
function draw() {
  background(0);
  for (var y = 60; y <= height-40; y += 60) {
    for (var x = 60; x <= width-40; x += 60) {
      ellipse(x, y, 4, 4);
      // Draw a line to the center of the display
      line(x, y, width/2, height/2);
    }
  }
}
```

![image-20210425192645309](https://img.dorakika.cn/md/image-20210425192645309.png)

#### 机器人-变量抽离

```javascript
var x = 160;var y = 620;  //左下点坐标
var bodyHeight = 190; // 身体高度
var neckHeight = 140; // 颈部高度
var radius = 45;
var ny = y - bodyHeight - neckHeight - radius; // 颈部y坐标
function setup() {
  createCanvas(1280, 720);
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw() {
  background(204);
  // 颈部
  stroke(102);
  line(x+2, y-bodyHeight, x+2, ny);
  line(x+12, y-bodyHeight, x+12, ny);
  line(x+22, y-bodyHeight, x+22, ny);
  // 天线
  line(x+12, ny, x-18, ny-43);
  line(x+12, ny, x+42, ny-99);
  line(x+12, ny, x+78, ny+15);
  // 身体
  noStroke();
  fill(102);
  ellipse(x, y-33, 33, 33);
  fill(0);
  rect(x-45, y-bodyHeight, 90, bodyHeight-33);
  fill(102);
  rect(x-45, y-bodyHeight+17, 90, 6);
  // 头部
  fill(0);
  ellipse(x+12, ny, radius, radius);
  fill(255);
  ellipse(x+24, ny-6, 14, 14);
  fill(0);
  ellipse(x+24, ny-6, 3, 3);
  fill(153);
  ellipse(x, ny-8, 5, 5);
  ellipse(x+30, ny-26, 4, 4);
  ellipse(x+41, ny+6, 3, 3);
}
```

![image-20210425192711922](https://img.dorakika.cn/md/image-20210425192711922.png)

## 交互

### 鼠标

- mouseX，mouseY：鼠标的坐标
- pmouseX，pmouseY：鼠标前一帧的坐标

```javascript
function setup() {
  createCanvas(1280, 720); strokeWeight(8); stroke(0, 102);
}
function draw() {
  line(mouseX, mouseY, pmouseX, pmouseY);
}
```

![image-20210425192749084](https://img.dorakika.cn/md/image-20210425192749084.png)

#### 线条平滑：利用前一帧鼠标与当前鼠标的距离控制线条粗细

```javascript
function setup() {
  createCanvas(1280, 720);
  stroke(0, 102);
}
function draw() {
  var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  strokeWeight(weight);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
```

![image-20210425192852817](https://img.dorakika.cn/md/image-20210425192852817.png)

#### 缓动-easing

```javascript
var x = 0;
var y = 0;
var easing = 0.03;
function setup() {
  createCanvas(1220, 620);
}
function draw() {
  var targetX = mouseX;
  var targetY = mouseY;
  x += (targetX - x) * easing;
  y += (targetY - y) * easing;

  ellipse(x, y, 12, 12);
  print(targetX + " : " + x);
}
```

![image-20210425192917461](https://img.dorakika.cn/md/image-20210425192917461.png)

#### 缓动与线条平滑结合

```javascript
var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.05;
function setup() {
  createCanvas(1280, 720);
  stroke(0);
}
function draw() {
  var targetX = mouseX;
  x += (targetX - x) * easing;
  var targetY = mouseY;
  y += (targetY - y) * easing;
  var weight = dist(x, y, px, py);
  strokeWeight(weight);
  line(x, y, px, py); py = y; px = x;
}
```

![image-20210425193023898](https://img.dorakika.cn/md/image-20210425193023898.png)

- mouseIsPressed：鼠标是否按下
  - mouseButton：用于判断是安一个鼠标按键按下-LEFT，CENTER，RIGHT

#### 判断鼠标是否进入圆内-dist()判断距离

```javascript
var x = 120; var y = 60; var radius = 12;
function setup() {
  createCanvas(1240, 620);
  ellipseMode(RADIUS);  //半径模式（默认为直径）
}
function draw() {
  background(204);
  var d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    radius++; fill(0);
  }else{
    fill(255);
  }
  ellipse(x, y, radius, radius);
}
```

#### 判断鼠标是否进入矩形内

```javascript
var x = 80;
var y = 30;
var w = 80;
var h = 60;
function setup() {
  createCanvas(1240, 720);
}
function draw() {
  background(204);
  if ((mouseX > x) && (mouseX < x+w) && (mouseY > y) && (mouseY < y+h)) {
    fill(0);
  }else {
    fill(255);
  }
  rect(x, y, w, h);
}
```

### 键盘

- keyIsPressed：是否有键盘按键按下
  - key：当前（最近一次）按下的键-如  '1'   'a'等
  - keyCode：按下的键的代码--（ALT，SHIFT，CONTROL，UP_ARROW，DOWN_ARROW，LEFT_ARROW，RIGHT_ARROW等可指代对应按键）

```javascript
function setup() {
  createCanvas(420, 120);
  textSize(64); //字体大小
  textAlign(CENTER);   //字体参照坐标的堆砌方式
  fill(255);
}
function draw() {
  background(0);
  text(key, 200, 80);   //在画布上画字
}
```

![image-20210425193108510](https://img.dorakika.cn/md/image-20210425193108510.png)

#### 方向键操纵移动

```javascript
var x = 215;
function setup() {
  createCanvas(480, 120);
}function draw() {
  background(220);
  if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) {
      x--;
    }else if (keyCode == RIGHT_ARROW) {
      x++;
    }
  }
  rect(x, 45, 50, 50);
}
```

### 触屏

- touchIsDown：是否触摸
  - touchX,touchY：触摸点的坐标

### 映射

````javascript
function setup() {
   createCanvas(800, 600);
   strokeWeight(12);
}
function draw() {
  background(204);
  stroke(255);
  line(400, 300, mouseX, mouseY);
  stroke(0);
  var mx = map(mouseX, 0, width, 200, 600);  //将mouseX的值从0-width映射到60-180
  line(400, 300, mx, mouseY);
}
````

![image-20210425193146002](https://img.dorakika.cn/md/image-20210425193146002.png)

### 交互-机器人

```javascript
var x = 60; var y = 440;     //左下角坐标
var radius = 45;      // 头大小
var bodyHeight = 160; // 身体高度
var neckHeight = 70;  // 脖子高度
var easing = 0.04;

var nextX = x;
var nextY = neckHeight;

function setup() {
  createCanvas(1260, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  x += (nextX - x) * easing;
  neckHeight += (nextY - neckHeight) * easing;

  if (mouseIsPressed) {
    bodyHeight = 90;
  } else {
    bodyHeight = 160;
  }
  if(keyIsPressed){
    if(keyCode == UP_ARROW){
      nextY++;
    }else if(keyCode == DOWN_ARROW){
      nextY--;
    }else if(keyCode == LEFT_ARROW){
      nextX -= 2;
    }else if(keyCode == RIGHT_ARROW){
      nextX += 2;
    }
  }
  var neckY = y - bodyHeight - neckHeight - radius;
  background(204);
// 颈部
  stroke(102);
  line(x+12, y-bodyHeight, x+12, neckY);
// 天线
  line(x+12, neckY, x-18, neckY-43);
  line(x+12, neckY, x+42, neckY-99);
  line(x+12, neckY, x+78, neckY+15);
// 身体
  noStroke();
  fill(102);
  ellipse(x, y-33, 33, 33);
  fill(0);
  rect(x-45, y-bodyHeight, 90, bodyHeight-33);
// 头部
  fill(0);
  ellipse(x+12, neckY, radius, radius);
  fill(255);
  ellipse(x+24, neckY-6, 14, 14);
  fill(0);
  ellipse(x+24, neckY-6, 3, 3);
}
```

![image-20210425193250271](https://img.dorakika.cn/md/image-20210425193250271.png)

![image-20210425193306575](https://img.dorakika.cn/md/image-20210425193306575.png)

## Translate、Rotate、Scale

### Translate

- 改变屏幕坐标系的位置

```javascript
function setup(){
  createCanvas(1280,720);
  background(222);
}

function draw(){
  translate(mouseX,mouseY);
  rect(0,0,30,30);	//矩形会随着鼠标移动，因为坐标系在随着鼠标改变
}
```

![image-20210425193339466](https://img.dorakika.cn/md/image-20210425193339466.png)

```javascript
function setup() { 
  createCanvas(1280, 720); 
  background(204); 
}

function draw() { 
  translate(mouseX, mouseY); 
  rect(0, 0, 30, 30); 
  translate(35, 10); 	//translate()函数会相加，即，下一个矩形的(0,0)坐标实际上是(mouseX+35,mouseY+10) || 每执行一次draw()函数就会重置一次translate()
  rect(0, 0, 15, 15); 
}
```

![image-20210425193409051](https://img.dorakika.cn/md/image-20210425193409051.png)

### Rotate

- 旋转坐标系

```javascript
function setup() {
  createCanvas(1280, 720);
  background(204);
}
function draw() {
  rotate(45/180*PI);
  rect(240, 30, 160, 20);
}
```

![image-20210425193443614](https://img.dorakika.cn/md/image-20210425193443614.png)



- Translate + Rotate

```javascript
var angle = 0.0;
function setup() {
  createCanvas(1280, 720);
  background(204);
}
function draw() {
  translate(mouseX, mouseY);
  rotate(angle);
  rect(-15, -15, 30, 30);
  angle += 0.1;
}
```

![image-20210425193510783](https://img.dorakika.cn/md/image-20210425193510783.png)

```js
var angle = 0.0;
function setup() { 
  createCanvas(1280, 720); 
  background(204); 
}

function draw() {
  rotate(angle); 
  translate(mouseX, mouseY); 
  rect(-15, -15, 30, 30);
  angle += 0.1; 
}
```



![image-20210425193542178](https://img.dorakika.cn/md/image-20210425193542178.png)

### 机械臂

```js
var angle = 0.0;
var angleDirection = 1;
var speed = 0.005;
function setup() {
  createCanvas(120, 120);
}
function draw() {
  background(204);
  translate(20, 25); // Move to start position
  rotate(angle);
  strokeWeight(12);
  line(0, 0, 40, 0);
  translate(40, 0); // Move to next joint
  rotate(angle * 2.0);
  strokeWeight(6);
  line(0, 0, 30, 0);
  translate(30, 0); // Move to next joint
  rotate(angle * 2.5);
  strokeWeight(3);
  line(0, 0, 20, 0);
  angle += speed * angleDirection;
  if ((angle > QUARTER_PI) || (angle < 0)) {
    angleDirection *= -1;
  }
}
```

![image-20210425193607595](https://img.dorakika.cn/md/image-20210425193607595.png)

### Scale

```js
function setup() { 
  createCanvas(120, 120); 
  background(204); 
}

function draw() { 
  translate(mouseX, mouseY); 
  scale(mouseX / 60.0);
  rect(-15, -15, 30, 30);
}
```

![image-20210425193707671](https://img.dorakika.cn/md/image-20210425193707671.png)

### push()  pop()

````js
function setup() {
  createCanvas(1280, 720);
  background(204);
}
function draw() {
  push();		//存储当前状态
  translate(mouseX, mouseY);
  rect(0, 0, 30, 30);
  pop(); 		//恢复之前的状态-相当于去除translate(mouseX, mouseY)的影响
  translate(35, 10);	//不与translate(mouseX, mouseY)叠加
  rect(0, 0, 15, 15);
}
````

![image-20210425193751033](https://img.dorakika.cn/md/image-20210425193751033.png)

### 机器人-改进

```js
var x = 60;var y = 440; // 机器人左下角坐标
var radius = 45; // 头部大小
var bodyHeight = 180; // 身体高度
var neckHeight = 40; // 颈部高度
var easing = 0.04;

function setup() {
  createCanvas(360, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  var neckY = -1 * (bodyHeight + neckHeight + radius);
  background(204);
  translate(mouseX, y); // 移动
  if (mouseIsPressed) {
    scale(1.0); //鼠标按下恢复
  } else {
    scale(0.6); //否则缩小为0.6倍
  }
  // 身体
  noStroke();
  fill(102);
  ellipse(0, -33, 33, 33);
  fill(0);
  rect(-45, -bodyHeight, 90, bodyHeight-33);
  // 颈部
  stroke(102);
  line(12, -bodyHeight, 12, neckY);
  // 头发
  push();
  translate(12, neckY);
  var angle = -PI/30.0;
  for (var i = 0; i <= 30; i++) {
    line(80, 0, 0, 0);
    rotate(angle);
  }
  pop();
  // 头部
  noStroke();
  fill(0);
  ellipse(12, neckY, radius, radius);
  fill(255);
  ellipse(24, neckY-6, 14, 14);
  fill(0);
  ellipse(24, neckY-6, 3, 3);
}
```

![image-20210425193824847](https://img.dorakika.cn/md/image-20210425193824847.png)

## 媒体

### 图像

```js
var img;
function preload() {	//预加载函数-在setup()之前运行，用于加载资源
  img = loadImage("../media/lunar.jpg");	//加载图片
}

function setup() {
  createCanvas(480, 120);
    //loadImage("../media/lunar.jpg",function(img){
    //    image(img,....)
    //});	//也可以通过回调函数来绘制图像
}

function draw() {
  image(img, 0, 0,240,120);					//绘制图片：图片变量，x坐标，y坐标，图片宽度，图片高度
  image(img, 240,0, 240, 60);
}
```

![image-20210425193847629](https://img.dorakika.cn/md/image-20210425193847629.png)

### 字体

```js
function setup() {
  createCanvas(480, 120);
  textFont("Arial");      //设置字体-除系统自带字体外，也可使用css中引入的字体
}
function draw() {
  background(102);
  textSize(32);   //设置字体大小
  text("one smallstep for man...", 25, 60);   //绘制字体：文本，左下角x坐标，y坐标
  textSize(16);
  text("one smallstep for man...", 27, 90);
}
```

![image-20210425193910973](https://img.dorakika.cn/md/image-20210425193910973.png)

#### 加载字体

```js
var font;
function preload() {
  font = loadFont("../media/SourceCodePro-Regular.ttf");
}
function setup() {
  createCanvas(480, 120);
  textFont(font);
}
function draw() {
  background(102);
  textSize(28);
  text("one smallstep for man...", 25, 60);
  textSize(16);
  text("one smallstep for man...", 27, 90);
}
```

#### 填充和轮廓

```js
function setup() {
  createCanvas(480, 120);
  textFont("Source Code Pro");
  fill(255,44,0);       //填充与轮廓同样可以应用到字体身上
  stroke(44,233,250);
}
function draw() {
  background(102);
  textSize(28);
  text("one smallstep for man...", 25, 60);
  textSize(16);
  text("one smallstep for man...", 27, 90);
}
```

![image-20210425193930429](https://img.dorakika.cn/md/image-20210425193930429.png)

#### 在限定范围内绘制文本

```js
function setup() {
  createCanvas(480, 120);
  textFont("Source Code Pro");
  textSize(24);
}
function draw() {
  background(102);
  text("one smallstep for man...", 26, 24, 240, 100);
}
```

![image-20210425193951565](https://img.dorakika.cn/md/image-20210425193951565.png)

### 机器人-媒体文件版

```js
var bot1;
var bot2;
var bot3;
var landscape;
var easing = 0.05;
var offset = 0;
function preload() {
  bot1 = loadImage("../media/robot1.svg");
  bot2 = loadImage("../media/robot2.svg");
  bot3 = loadImage("../media/robot2.svg");
  landscape = loadImage("../media/capsule.jpg");
}
function setup() {
  createCanvas(720, 480);
}
function draw() {
  // 背景设置
  background(landscape);
  // 设置映射
  var targetOffset = map(mouseY, 0, height, -40, 40);
  offset += (targetOffset - offset) * easing;
  // 左机器人
  image(bot1, 85 + offset, 65);
  // 右机器人
  var smallerOffset = offset * 0.7; //缩小映射范围
  image(bot2, 510 + smallerOffset, 140, 78, 248);
  // 中间的
  smallerOffset *= -0.5;
  image(bot3, 410 + smallerOffset, 225, 39, 124);
}
```

![image-20210425194019004](https://img.dorakika.cn/md/image-20210425194019004.png)

## 动作

### 帧-每秒执行draw()函数的次数-即每秒绘制的次数

```js
function setup() {
  frameRate(30); // 设置帧速率
}
function draw() {
  var fr = frameRate(); //获取帧速率
  print(fr);			// 30
}
```

### 循环运动

```js
var radius = 40;
var x = -radius;
var speed = 0.5;
function setup() {
  createCanvas(240, 120);
  ellipseMode(RADIUS);
}
function draw() {
  background(0);
  x += speed; // 刷新x
  if (x > width+radius) {
    // 如果超出屏幕
    x = -radius; // 恢复至初始位置
  }
  arc(x, 60, radius, radius, 0.52, 5.76);
}
```

![image-20210425194052782](https://img.dorakika.cn/md/image-20210425194052782.png)

### 边界检测

```js
var radius = 40;
var x = 110;
var speed = 0.5;
var direction = 1;
function setup() {
  createCanvas(240, 120);
  ellipseMode(RADIUS);
}
function draw() {
  background(0);
  x += speed * direction;
  if ((x > width-radius) || (x < radius)) {
    direction = -direction; // 改变方向
  }
  if (direction == 1) {
    arc(x, 60, radius, radius, 0.52, 5.76); // 向右
  } else {
    arc(x, 60, radius, radius, 3.67, 8.9); // 向左
  }
}
```

![image-20210425194112546](https://img.dorakika.cn/md/image-20210425194112546.png)

### 位置计算

```js
var startX = 20; // 初始x
var stopX = 160; // 最终x
var startY = 30; // 初始y
var stopY = 80; // 最终y
var x = startX; // 当前x
var y = startY; // 当前y
var step = 0.005; // 速率
var pct = 0.0; // 进度百分比
function setup() {
  createCanvas(240, 120);
}
function draw() {
  background(0);
  if (pct < 1.0) {
    x = startX + ((stopX-startX) * pct);
    y = startY + ((stopY-startX) * pct);
    pct += step;
  }
  ellipse(x, y, 20, 20);
}
```

![image-20210425194231564](https://img.dorakika.cn/md/image-20210425194231564.png)

### 结合随机数

```js
function setup() {
  createCanvas(240, 120);
}
function draw() {
  background(204);
  for (var x = 20; x < width; x += 20) {
    var mx = mouseX / 10;
    var offsetA = random(-mx, mx);
    var offsetB = random(-mx, mx);
    line(x + offsetA, 20, x - offsetB, 100);
  }
}
```

![image-20210425194319515](https://img.dorakika.cn/md/image-20210425194319515.png)

### 圆的随机漫步

```js
var speed = 2.5;
var diameter = 20;
var x;
var y;
function setup() {
  createCanvas(240, 120);
  x = width/2;
  y = height/2;
  background(204);
}
function draw() {
  x += random(-speed, speed); //random()产生随机数，可以设置相同的randomSeed()来产生相同的伪随机序列
  y += random(-speed, speed);
  x = constrain(x, 0, width); //constrain()函数将数值限定在某个范围内
  y = constrain(y, 0, height);
  ellipse(x, y, diameter, diameter);
}
```

![image-20210425194404187](https://img.dorakika.cn/md/image-20210425194404187.png)

### 时间控制动作进度

```js
var time1 = 2000;
var time2 = 4000;
var x = 0;
function setup() {
  createCanvas(480, 120);
}
function draw() {
  var currentTime = millis();	//p5js程序运行开始，即开始计时，millis()返回当前的毫秒数
  background(204);
  if (currentTime > time2) {
    x -= 0.5;
  } else if (currentTime > time1) {
    x += 2;
  }
  ellipse(x, 60, 90, 90);
}
```

### 利用函数来控制动作速率-呼吸灯

````js
var angle = 0.0;
function draw() {
  var sinval = sin(angle);  //p5js可以使用sin和cos
  var gray = map(sinval, -1, 1, 0, 255);  //将sinval从-1到1 映射到0-255
  background(gray);
  angle += 0.1;
}
````

### 函数-画圆

```js
var angle = 0.0; 
var offset = 60; 
var scalar = 30;
var speed = 0.05;
function setup() { 
  createCanvas(120, 120);
  background(204);
}
function draw() { 
  var x = offset + cos(angle) * scalar; 
  var y = offset + sin(angle) * scalar; 
  ellipse(x, y, 40, 40); 
  angle += speed; 
}
```

![image-20210425194509050](https://img.dorakika.cn/md/image-20210425194509050.png)

### 函数-螺旋

```js
var angle = 0.0;
var offset = 60;
var scalar = 2;
var speed = 0.05;
function setup() {
  createCanvas(120, 120);
  fill(0);
  background(204);
}
function draw() {
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  ellipse(x, y, 2, 2);
  angle += speed;
  scalar += speed;
}
```

![image-20210425203726261](https://img.dorakika.cn/md/image-20210425203726261.png)

### 机器人-随机移动

```js
var x = 180; // x coordinate
var y = 400; // y coordinate
var bodyHeight = 153; // Body height
var neckHeight = 56; // Neck height
var radius = 45; // Head radius
var angle = 0.0; // Angle for motion
function setup() {
  createCanvas(360, 480);
  ellipseMode(RADIUS);
  background(204);
}
function draw() {
  background(220);
  // 随机数改变位置
  x += random(-4, 4);
  y += random(-1, 1);
  neckHeight = 80 + sin(angle) * 30;
  angle += 0.05; // sin()
  var ny = y - bodyHeight - neckHeight - radius;
  // 颈部
  stroke(102);
  line(x+2, y-bodyHeight, x+2, ny);
  line(x+12, y-bodyHeight, x+12, ny);
  line(x+22, y-bodyHeight, x+22, ny);
  // 天线
  line(x+12, ny, x-18, ny-43);
  line(x+12, ny, x+42, ny-99);
  line(x+12, ny, x+78, ny+15);
  // 身体
  noStroke();
  fill(102);
  ellipse(x, y-33, 33, 33);
  fill(0);
  rect(x-45, y-bodyHeight, 90, bodyHeight-33);
  fill(102);
  rect(x-45, y-bodyHeight+17, 90, 6);
  // 头部
  fill(0);
  ellipse(x+12, ny, radius, radius);
  fill(255);
  ellipse(x+24, ny-6, 14, 14);
  fill(0);
  ellipse(x+24, ny-6, 3, 3);
}
```

![image-20210425203838748](https://img.dorakika.cn/md/image-20210425203838748.png)

## 函数

### 利用函数实现可复用代码

```js
function setup() {
  createCanvas(480, 120);
}
function draw() {
  background(204);
  owl(110, 110);
  owl(180, 110);
}
function owl(x, y) {
  push();
  translate(x, y);
  stroke(0);
  strokeWeight(70);
  line(0, -35, 0, -65); // 身体
  noStroke();
  fill(255);
  ellipse(-17.5, -65, 35, 35); // 左眼瞳孔
  ellipse(17.5, -65, 35, 35); // 右眼瞳孔
  arc(0, -65, 70, 70, 0, PI); // 下巴
  fill(0);
  ellipse(-14, -65, 8, 8); // 左眼
  ellipse(14, -65, 8, 8); // 右眼
  quad(0, -58, 4, -51, 0, -44, -4, -51);
  pop();
}
```

![image-20210425203855566](https://img.dorakika.cn/md/image-20210425203855566.png)

### 改进-灰度-大小

```js
function setup() {
  createCanvas(480, 120);
}
function draw() {
  background(204);
  randomSeed(0);
  for (var i = 35; i < width + 40; i += 40) {
    var gray = int(random(0, 102));
    var scalar = random(0.25, 1.0);
    owl(i, 110, gray, scalar);
  }
}

function owl(x, y, g, s) {
  push();
  translate(x, y);
  scale(s); // 设置缩放大小
  stroke(g); // 设置灰度值
  strokeWeight(70);
  line(0, -35, 0, -65); // 身体
  noStroke();
  fill(255-g);
  ellipse(-17.5, -65, 35, 35); // 左瞳孔
  ellipse(17.5, -65, 35, 35); // 右瞳孔
  arc(0, -65, 70, 70, 0, PI); // 下巴
  fill(g);
  ellipse(-14, -65, 8, 8); // 左眼
  ellipse(14, -65, 8, 8); // 右眼
  quad(0, -58, 4, -51, 0, -44, -4, -51);
  pop();
}
```

![image-20210425203911188](https://img.dorakika.cn/md/image-20210425203911188.png)

- 可以添加返回值

### 机器人-函数

```js
function setup() {
  createCanvas(720, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw() {
  background(204);
  drawRobot(120, 420, 110, 140);
  drawRobot(270, 460, 260, 95);
  drawRobot(420, 310, 80, 10);
  drawRobot(570, 390, 180, 40);
}
function drawRobot(x, y, bodyHeight, neckHeight) {
  var radius = 45;
  var ny = y - bodyHeight - neckHeight - radius;
  // 颈部
  stroke(102);
  line(x+2, y-bodyHeight, x+2, ny);
  line(x+12, y-bodyHeight, x+12, ny);
  line(x+22, y-bodyHeight, x+22, ny);
  // 天线
  line(x+12, ny, x-18, ny-43);
  line(x+12, ny, x+42, ny-99);
  line(x+12, ny, x+78, ny+15);
  // 身体
  noStroke();
  fill(102);
  ellipse(x, y-33, 33, 33);
  fill(0);
  rect(x-45, y-bodyHeight, 90, bodyHeight-33);
  fill(102);
  rect(x-45, y-bodyHeight+17, 90, 6);
  // 头
  fill(0);
  ellipse(x+12, ny, radius, radius);
  fill(255);
  ellipse(x+24, ny-6, 14, 14);
  fill(0);
  ellipse(x+24, ny-6, 3, 3);
  fill(153);
  ellipse(x, ny-8, 5, 5);
  ellipse(x+30, ny-26, 4, 4);
  ellipse(x+41, ny+6, 3, 3);
}
```

![image-20210425204211344](https://img.dorakika.cn/md/image-20210425204211344.png)

## js

### 使用数组

```js
var num = 60;
var x = [];
var y = [];
function setup() {
  createCanvas(1240, 720);
  // noStroke();
  strokeWeight(40);
  for (var i = 0; i < num; i++) {
    x[i] = 0;
    y[i] = 0;
  }
}
function draw() {
  background(0);
  // 移位
  for (var i = num-1; i > 0; i--) {
    x[i] = x[i-1];
    y[i] = y[i-1];
  }
  x[0] = mouseX;
  y[0] = mouseY;
  for (var i = num-1; i >= 0; i--) {
    fill((num-i) * 4);
    if(i != 0){
      stroke((num-i)*4);
      line(x[i],y[i],x[i-1],y[i-1]);
    }
    noStroke();
    ellipse(x[i], y[i], 40, 40);
  }
}
```



