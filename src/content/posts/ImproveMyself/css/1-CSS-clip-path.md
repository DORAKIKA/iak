---
title: 学习一手CSS中的clip-path
date: 2022-07-26
tags:
- css
- web
category: code
cover: https://img.dorakika.cn/md/20220726.png
description: 前几天要做一个过场动画，于是选择了使用clip-path的circle来进行元素裁剪实现，进而浅浅学习一下
slug: '20220726'
---

`clip-path`是css3中的一个新属性，允许我们使用裁剪的方式来创建元素的可显示区域（就相当于对元素来了次剪纸）

## 基本语法

- 可以为clip-source、basic-shape、geometry-box、none中一个或多个组合

```css
div{
    clip-path: <clip-source> | [ <basic=shape> || <geometry-box> ] | none;
}
```

- `<clip-source>`为引用SVG的`<clipPath>`元素来指定裁剪路径
- `<basic-shape>`定义一种形状，其大小和位置由`<geometry-box>`的值（默认以`border-box`为参考框（就像box-sizing以content-box为默认值定义宽高的参考框一样））定义
- `<geometry-box>`单独定义时以盒子作为剪切形状（包括border-radius等定义的形状边角），与`<basic-shape>`一起使用则为其参考框

因为`<clip-source>`涉及到SVG，`<geometry-box>`目前只有Firefox实现，所以本文重点放在`<basic-shape>`

### basic-shape

#### inset()

- 用于定义一个矩形`clip-path: inset(<length-percentage>{1,4} [round <border-radus>])`

- 可通过指定inset的距离来进行矩形的裁剪（参数定义参考margin、padding的参数）

```css

.box1{
    /* 在原矩形的基础上，上下左右皆向内10px */
    clip-path: inset(10px);
}
.box2{
    /* 在原矩形的基础上，上下向内10px 左右向内20px */
    clip-path: inset(10px 20px);
}
.box3{
    /* 在原矩形的基础上，上方向内10px 左右向内20px 下方向内30px */
    clip-path: inset(10px 20px 30px);
}
.box4{
    /* 在原矩形的基础上，上方向内10px 右边向内20px 下方向内30px 左边向内40px */
    clip-path: inset(10px 20px 30px 40px);
}
```

![image-20220726104853777](https://img.dorakika.cn/md/image-20220726104853777.png)

- 还可以在此基础上指定四个角的圆角属性（以round分隔距离与圆角属性）(属性值参考border-radius)

```css
.box1{
    clip-path: inset(10% 30px round 10px);
}
    
.box2{
    clip-path: inset(4rem 20% round 1rem 2rem 3rem 4rem);
}
```

![image-20220726105304861](https://img.dorakika.cn/md/image-20220726105304861.png)

#### cirlce()

- 用于定义一个圆的大小即位置：`clip-path: cirlce(<shape-radius> [at <position>])`
- shape-radius：定义圆的半径如50px、3rem等，也可指定特殊值closest-side（从圆心到最近的参考框边的长度）、farthest-side（从圆心到最远的参考框边的长度）
- position：定义圆心的位置如`40px 50px`、`50% 0`，也可指定关键字如`right center`

```css
.box1{
    clip-path: cirlce(50px)
}
.box2{
    clip-path: cirlce(6rem at right center)
}
.box3{
    clip-path: cirlce(closest-side at 5rem 6rem)
}
.box4{
    clip-path: cirlce(farthest-side)
}
```

![image-20220726111239834](https://img.dorakika.cn/md/image-20220726111239834.png)

- **ps**: `circle()`值还可以使用在`shape-outside`属性中，可以改变文本浮动时的环绕边界为原型

```css
.box{
    float: left;
    shape-outside: circle(50%)
}
```

![image-20220726111713240](https://img.dorakika.cn/md/image-20220726111713240.png)

#### ellipse()

- 定义一个椭圆，其前两个参数用于定义椭圆的横纵轴半径，后面参数与circle()一致

```css
.box1{
    clip-path: ellipse(90px 60px);
}
.box1{
    clip-path: ellipse(4rem 50% at right center);
}
.box1{
    clip-path: ellipse(closest-side farthest-side at 40px 70px);
}
```

![image-20220726112832956](https://img.dorakika.cn/md/image-20220726112832956.png)

- **PS**：参考circle，可也用于`shape-outside`

#### polygon()

- 用于定义一个多边形`clip-path: polygon([<fill-rule>,] [<length-percentage> <length-percentage>])`
- fill-rule用于定义填充规则：有nonzero非零填充，evenodd单数填充
- 指定多边形各个顶点位置

```css
.box1{
    clip-path: polygon(10% 30%, 90% 30%, 25% 90%, 50% 0, 75% 90%);
}
.box2{
    clip-path: polygon(evenodd, 10% 30%, 90% 30%, 25% 90%, 50% 0, 75% 90%);
}
```

![image-20220726133519243](https://img.dorakika.cn/md/image-20220726133519243.png)

#### path()

- 该函数接收SVG中的path字符串来定义一个路径：`path([<'fill-rule',]? <string>)`
- 字符串指令如下（大写采用绝对位置，小写为相对位置）：
  - MoveTo：`M`, `m`
  - LineTo：`L`, `l`, `H`, `h`, `V`, `v`
  - Cubic Bezier Curve：`C`, `c`, `S`, `s`
  - Quadratic Bezier Curve：`Q`, `q`, `T`, `t`
  - Elliptical Arc Curve：`A`, `a`
  - ClosePath： `Z`, `z`

##### MoveTo

- `M 20 20`：移动到点(20, 20)
- `m 20 20`：沿x轴移动距离20，y轴移动距离20（即相对上一个点移动(20,20)）

> PS: 命令声明后，其后续的参数都会按照此命令解释，直到下一个命令声明
>
> 如 `M 20 20 30 30` 等价于 `M 20 20 M 30 30`

##### LineTo

- 此处假设起始点(20, 20)

- `L 30 30`：从(20, 20) 画线到 (30, 30)
- `l 30 30`：从(20, 20) 画线到 (20+30, 20+30)
- `H 30`：画一条水平线到x为30的点（即(20, 20) => (30, 20)）
- `h 30`：沿x轴画30距离的水平线（即(20, 20) => (50, 20)）
- `V 30`：画一条垂直线到y为30的点（即(20, 20) => (20, 30)）
- `v 30`：沿y轴画30距离的垂直线（即(20, 30) => (20, 50)）

```css
.box{
    clip-path: path(
                'M  20  240 \
                 L  20  80 L 160  80 \
                 L 160  20 L 280 100 \
                 L 160 180 L 160 120 \
                 L  60 120 L  60 240 Z')
}
```

![image-20220726152159720](https://img.dorakika.cn/md/image-20220726152159720.png)

##### Cubic Bezier Curve

- 三次贝塞尔曲线：即使用四个点定义的一条平滑曲线（起始点、起始控制点、结束控制点、结束点）
- 起始点沿用上一个命令的结束点，所以定义时只需要定义后三个点即可（此处假设起始点为(10 ,10)）
- `C 10 100 40 100 30 0`：四个点=(10,10), (10,100), (40,100), (30,0)
- `c 0 90 30 90 20 -10`：坐标定义相对于起始点的位置，效果同上
- `S 40 100 30 0`：这里省略了起始控制点，如果上一个命令结尾有结束控制点，则这里的起始控制点为上一个结束控制点相对于结束点的对称点，如果没有，则这里的起始控制点与起始点相同。即此处四个点=(0,0), (0,0), (40,100), (30,0)
- `s 30 90 20 -10`：相对于起始点定义，效果同上（起始点为(10 ,10)的情况）

```css
.box{
    clip-path: path(
               'M 50 200 \
             	C 100 200 100 50 150 50 \
        		S 200 200 250 200Z');
}
```

![image-20220726155311339](https://img.dorakika.cn/md/image-20220726155311339.png)

##### Quadratic Bezier Curve

- 二次贝塞尔曲线：三个点定义（相当于三次贝塞尔曲线的起始控制点与结束控制点合并为同一个点）
- 同样，起始点沿用上一个命令的结束点，此处假设为(10 , 10)
- `Q 10 100 30 0`：即三个点为(10,10), (10, 100), (30, 0)
- `q 0 90 20 -10`：相对位置，效果同上
- `T 30 0`：忽略控制点的定义。如果上一个命令为二次贝塞尔曲线，则控制点为上一个控制点相对于结束点的对称位置，若上一个命令不是二次贝塞尔曲线，则控制点为起始点
- `t 20 0`：相对位置，效果同上

```css
.box{
    clip-path: path(
            'M 50 150 \
             Q 100 50 150 150 \
        	 T 250 150 Z');
}
```

![image-20220726163256105](https://img.dorakika.cn/md/image-20220726163256105.png)

##### Elliptical Arc Curve

- 用于定义一段圆弧：`A\a rx ry angle large-arc-flag sweep-flag x\dx y\dy`
- rx与ry分别为椭圆的横纵轴，angle为椭圆的旋转角度，large-arc-flag表示取较大的弧还是较小的弧（取值为1 或 0），sweep-flag表示顺时针（1）/逆时针（0），x与y表示目标点（也是下一个命令的起始点）

```css
.box2{
    /* 一个笑脸 */
    clip-path: path(evenodd,
                   'M 160 20 \
                    A 120 120 0 1 1 160 260 120 120 0 1 1 160 20 \
                    M 110 80 \
                    A 20 20 0 1 1 110 120 20 20 0 1 1 110 80 \
                    M 210 80 \
                    A 20 20 0 1 1 210 120 20 20 0 1 1 210 80 \
                    M 90 180 \
        			a 70 50 0 0 0 140 0 Z');
}
```

![image-20220726164515701](https://img.dorakika.cn/md/image-20220726164515701.png)

##### close path

- `z\Z`：用于闭合路径，即在最初的起始点，与当前结束点之间画一条直线



> PS：clip-path可以用于过渡或者动画属性，前提是前后的clip-path参数类型需一致（包括参数中函数的参数个数）
