---
title: js学习笔记
date: 2020-09-11 11:41
tags:
- js
- 笔记
- web
category: code
cover: https://img.dorakika.cn/md/default.png
description: 很早之前的写在代码内部的js学习笔记，整合了一下
slug: '20200911'
---

> 老早之前的笔记了，整合一下搬运过来

### 变量、运算符

```js
<!DOCTYPE html>
<html>
<head>
	<title>js</title>
</head>
<body>
	<!-- 内部引入 (可以加上src添加路径外部引入)-->
	<script type="text/javascript">
	//变量声明
		//原始值(stack栈数据)		栈-->先进后出
		var a = 10,			//number类型(天生就是浮点型)
			b = "+20=",		//string类型
			c = 30,
			d = 40,
			e = true,		//Boolean类型
			f = undefined	//undefined类型，表示还没有定义,变量只声明但还没有初始化赋值时，就是默认的undefined类型
			g = null;		//null类型,空,用于占位/覆盖

		a = 50; 			//变量赋值

		document.write(a,' ',b,' ',c+d);		//写入
		document.write(e,' ',f,' ',g);

		//引用值(数组，对象等)(heap堆数据)		地址赋值
		arr = [1,2];		//地址引用，arr -> 地址 -> [1,2]
		arr1 = arr; 		//arr1等于arr储存的的地址 -> [1,2]
		arr.push(3);		//push()方法操作[1,2]
		document.write('<br>',arr,' ',arr1);
		arr = [1,3];		//将arr的地址变为[1,3]的地址
		document.write(' ',arr,' ',arr1);
		document.write(' ',arr[0])//数组引用，加下标

		var x = 'a';document.write(' ',x+1);		//任何数据类型＋字符串都是字符串  同一行写，需要在每条语句后面加上分号

		//运算符
		//+, -, *, /, %, +=, -=...
		//加上括号提升优先级
		/*自增，自减---   a++, 本次运算后a增加1
						 ++a, a增加1后再进行本次运算
						 a--, 本次运算后a减1
						 --a, a减1后再进行本次运算
						 */
		document.write('<br>',a%3,' ',a++,' ',++a,' ',a--,' ',--a);
		
		document.write('<br>',a/0);//输出Infinity//无穷大

		//比较(关系)运算符
		//>=, <=, >, <, ==,!=
		document.write('<br>',a==b)

		//逻辑运算符
		//&&, ||, !,    与或非
		document.write('<br>',!b)

		//按位
		//&, ^, |, ~,  与，异或，非，取反
		document.write('<br>',0b00000011&0b00000110,~0b00000010)
	</script>

</body>
</html>
```

### 条件、循环

```js
<!DOCTYPE html>
<html>
<head>
	<title>条件语句，循环语句</title>
</head>
<body>
	<script type="text/javascript">
		//补充，Infinity等其他可以与自身相等，NaN不相等
		document.write('<br>',NaN==NaN,' ',Infinity==Infinity);

		//条件语句
		if (3>2) {
			document.write('<br>True');
		};
		3>2 && document.write('<br>True');
		//上面两个效果相同下面的与运算，先判断前面的值是否为真，为真才会进行下一个判断（并执行），如果前面的值为假，就不会进行下面的判断
		//（与运算碰到False后就会结束判断，返回False）

		var score = parseInt(window.prompt('input'));	//接受一个输入的值
		if (score > 80) {
			document.write('<br>','good! your score:',score);
		}else if (score > 60) {
			document.write('<br>','just so so! your score:',score);
		}else{
			document.write('<br>','oh shit yourscore:',score);
		};


		//for循环
		for (var i = 0; i < 10; i++) {
			document.write('a')
		};
		/*等同于
		1. var i = 0;	只在开始时执行一次
		2. if (i < 0){
			   document.write('a');
		}				循环部分
		3. i++;			循环部分
		4. 执行2,3
		*/

		//while循环
		var i = 0;
		while(i<10){
			document.write('b');
			i++;
		};
		/*相当于for(;i<10;){
				   document.write('b');
				   i++;
		}
		*/

		//do-while循环
		i = 0;
		do{
			document.write('c');
			i++;
		}while(i < 10);
		//先执行一次循环体，然后进行条件判断

		aaa = Math.sqrt(9);
		document.write(aaa);
		//在控制台进行输出（在页面右击检查打开，单击console进入控制台，可以用来调试程序）
		console.log(aaa);



	</script>
</body>
</html>
```

### 选择、类型转换

```js
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		s = parseInt(window.prompt('input'));
		switch(s){							//s为待比较的量
			case 1:							//当s为1时，执行下面的语句
				document.write('哈哈哈');
				break;						//break跳出执行
			case 2:
				document.write('嘿嘿嘿');
				break;
			case 3: 						//没有break的话，当s为3时就会执行下面的语句，包括4,5的语句（直到遇到break或执行完毕）  
			case 4:
			case 5:
				document.write('嚯嚯嚯');
				break;
			default: 						//当s不是上述的值时，就执行default下面的语句，default可有可无
				document.write('哼哼哼');
				break;
		}
		//break跳出循环
		//continue跳出本次循环，进入下次循环


		//数组
		var arr = [1,2,3,'asd',true];
		//引用，写入
		document.write(arr[0],'<br>');
		arr[2] = 5;
		document.write(arr,'<br>');
		//数组长度
		document.write(arr.length,'<br>');

		//对象
		var obj = {					//花括号表示对象
			name : 'kkk',			//写入属性值（和属性名）
			age : 18,				//属性之间用逗号隔开
			learning : 'js',
		};
		//对象的属性
		document.write(obj.name,'<br>');
		//修改属性值
		obj.name = 'yyy';
		document.write(obj.name,'<br>');


		//typeof操作符
		document.write(typeof(s),'<br>',typeof(arr),'<br>',typeof obj,'<br>')
		//可以加上括号，也可以使用空格
		//返回值有number string boolean object undefined function
		//


		//类型转换
		document.write(typeof(Number('123')),'<br>')		//Number将里面的值转换为数字（转不了，就会变成NaN，但类型肯定会变成number）
		//str 是转换成 字符串
		document.write(typeof(parseInt('123.5',16)),parseInt('123.5',16),'<br>')
		//第一个参数为要转换的数，第二个参数为要转化的数的进制（取2-36）
		//将16进制数（将等待转化的数看作16进制）转化成整数
		//parseFloat  转化成浮点数

		//tostring()方法
		document.write(s.toString(),'<br>')//转化成字符串
		document.write(s.toString(8),'<br>')//转换成目标进制，与parseInt作用差不多相反


		//比较
		document.write(1 == '1','<br>')		//比较的时候会自动进行类型转换，然后比较
		document.write(1 === '1')		//恒等于（绝对等于），不进行类型转换


	</script>
</body>
</html>
```

### 函数

```js
<!DOCTYPE html>
<html>
<head>
	<title>函数</title>
</head>
<body>
	<script type="text/javascript">
		//函数声明1
		function test1() {
			//函数定义，使用function关键字
			console.log('a');
		}
		test1();
		//函数声明2
		var test2 = function test2(){		//这里第二个test2(这是一个命名函数表达式，这里第二个test2成了第一个test2的一个name属性)
			console.log('b');
		}
		test2();
		console.log('test2.name:',test2.name);
		//函数声明3
		var test3 = function() {
			console.log('c');
		}
		test3();


		//传参
		function sum_arg(arg1,arg2) {	//小括号里面的是形参
			// 小括号里面写参数
			console.log(arg1+arg2);
		}
		sum_arg(5,9);					//调用的时候写的是实参

		//不定长参数
		function ddd(arg1,arg2) {
			console.log(arg1,arg2);		//传递的所有参数都会存储在arguments数组里面
			if (ddd.length > arguments.length) {
				console.log('形参多了');
			}else if (ddd.length < arguments.length) {
				console.log('实参多了');
			}else{
				console.log('形参实参相等');
			}
		}
		ddd(1,2,3);	//形参<实参（实参多余不会报错）
		ddd(1);		//形参>实参（此时没有接收到值的形参为undefined）

		//借助上面说的arguments可以实现任意数量参数的使用
		function sum() {
			var ttt = 0;
			for (var i = arguments.length - 1; i >= 0; i--) {
				ttt += arguments[i];
			}
			console.log(ttt);
		}
		sum(1,2,3,4)

		//arguments实际上是形参的一个映射
		function test4(a,b) {
			a = 2;		//当传入的参数改变时，映射出来的arguments也会改变
			b = 2;		//如果一开始并没有被传入值，为undefined，则改变barguments[1]不会变
			console.log(arguments[0] ,arguments[1]);
		}
		test4(1);

		//返回值
		function test5(a,b){
			return a+b;		//将a+b返回，并终止函数执行
		}
		d = test5(1, 2);
		console.log(d)
	</script>
</body>
</html>
```

### 递归、预编译

```js
<!DOCTYPE html>
<html>
<head>
	<title>递归和预编译</title>
</head>
<body>
	<script type="text/javascript">
		//递归
		function mul(n){
			//递归特别符合我们的思维过程
			//思考阶乘的求法
			//n! = n * (n-1)!	--> 层层剥离
			//1的阶乘为1(特殊:0的阶乘为1) 		--> 递归出口
			//n的阶乘
			if(n==1 || n==0){
				return 1;		//递归的出口
			}
			return n*mul(n-1);	//一层一层往里面求
		}
		//递归让代码更简洁，但是运行比较慢，一般复杂程序不用递归

		function feib(n){
			//求斐波那契数列的第n个值
			//规律	-->	f(n)=f(n-1)+f(n-2)
			//出口	-->	f(1)=f(2)=1
			if(n==1 || n==2){
				return 1;
			}
			return feib(n-1)+feib(n-2);
		}

		//函数嵌套时，变量作用域
		function fun1() {
			var a = 1;
			function fun2(){
				var b =2;
				console.log(a);	//内层函数可以访问外部函数中的变量
			}
			fun2();
			//console.log(b)		//此函数访问不了函数内部定义的函数里面的变量
			//会报错
		}


		//预编译
			//js --> 单线程，解释性
			/*js执行过程 	-> 语法分析（通篇扫描，看是否有语法错误）
							-> 预编译
							-> 解释执行
						*/
		test(1);			//虽然是解释一行执行一行，但此时的test()函数依旧可以使用
		//预编译时，会发函数的声明提升到逻辑的最前面，即test()执行依旧在函数声明之后
		function test(a){
			console.log(a)
		}


		//imply global暗示全局变量，即对任何未经声明的变量进行赋值，此变量就会默认为window的属性
		//window就是全局变量的域
		var a = 10;	//全局范围内定义a
		aa = 12;		//aa并没有提前声明，但依旧可以赋值
		console.log(a,aa,window.a,window.aa);

		function ttt() {
			var c = d = 100;
			//上面声明变量并赋值实际上是，先将100赋值给未经定义的d，然后将d的值赋给c。所以根据上面的规则，b为全局变量
		}
		ttt()		//执行一下
		console.log(d,window.d)	//此时可以访问d

		/*预编译  	函数的预编译发生在函数执行前一刻
					1.创建AO对象（Activation Object）（执行期上下文）
						//全局预编译的时候创建的是GO对象（Global Object）
					2.找形参和变量声明，，把形参和变量名作为AO属性名，值为undefined
						以上面的test为例
							AO{
								a:undefined,
							}
					3.将实参值与形参名统一
							AO{
								a:1,
							}
					4.找函数体，将整个函数体与声明统一
						假设test()里面声明了一个a()函数
							AO{
								a:function a(){},
							}
					全局预编译生成的GO就是window（所以任何全局变量都是window的属性，因为都在GO里面）
					*/
	</script>
</body>
</html>
```

### 作用域、闭包初步、立即执行函数

```js
<!DOCTYPE html>
<html>
<head>
	<title>作用域</title>
</head>
<body>
<script type="text/javascript">
	function a(argument) {
		//函数执行的时候会产生一个AO对象，每次执行都会重新产生一个AO对象（执行期上下文）
		//每个JavaScript函数都是一个对象，对象中有些属性我们可以访问，有些我们不可以访问，这些属性进供JavaScript引擎存取，[[scope]]就是其中一个
		//[[scope]]指的就是我们所说的作用域，其中储存了运行期上下文的集合
		//作用域链：[[scope]]中存储的执行期上下文对象的集合，这个集合呈链式连接，这种链式连接即作用域链
		function b(){
			var b = 234;
		}
		var a = 123;
		b();
	}
	a();
	var c = 100;
	/*
	a函数定义时 a.[[scope]]	-->		scope chain
											0 : GO{
													this	:window
													window	:object
													document:object
													a 		:function
													c 		:100
												}
	a函数使用时 a.[[scope]]	-->		scope chain
						[临时，执行完即销毁]	0 : AO{
													this		:window
													arguements	:
													a			:123
													b 			:function
												}
											1 : GO{
													this	:window
													window	:object
													document:object
													a 		:function
													c 		:100
												}
	
	b函数定义时 b.[[scope]] 	-->		scope chain
											0 : AO{
													this		:window
													arguements	:
													a			:123
													b 			:function
												}
											1 : GO{
													this	:window
													window	:object
													document:object
													a 		:function
													c 		:100
												}
	b函数使用时 b.[[scope]] 	-->		scope chain
						[临时，执行完即销毁]	0 : AO{
													this		:window
													arguements	:
													b			:234
												}
											1 : AO{
													this		:window
													arguements	:
													a			:123
													b 			:function
												}
											2 : GO{
													this	:window
													window	:object
													document:object
													a 		:function
													c 		:100
												}
	*/
	//作用域链如上，作用域链查找时自上往下


	//但凡是内部的函数保存到了外部，一定生成闭包
	function d(){
		function e(){
			var bbb = 234;
			console.log(aaa);
		}
		var aaa = 123;
		return e;
	}
	var demo = d();
	demo();

	//闭包应用
	function test(){
		var num = 0;
		function tt(){
			num++;
			console.log(num);
		}
		return tt;
	}
	var zx = test();
	zx();		//此时作用的num来自于-->	scope chain 1 : AO{num:0} (scope chain 0 里面没有num且执行完即销毁，但scope chain 1 不会销毁，执行语句num++后即变为1，不会销毁)
	zx();		//此时在1的基础上进行num++

	//闭包的作用
	//实现公有变量-->如上累加器
	function test1(){
		var num = 100;
		function a(){
			num++;
			console.log(num);
		}
		function b(){
			num--;
			console.log(num);
		}
		return [a,b];
	}
	var myarr = test1();
	myarr[0]();	//因为是地址赋值，a函数和b函数作用域指向的都是原来test1定义时生成的作用域
	myarr[1]();	//所以两个函数作用的num是同一个num
	//可以做缓存	-->	存储结构
	function eater(){
		var food = "";
		var obj = {
			eat : function(){
				console.log("i an eating "+food);
				food = "";
			},
			push : function(myfood){
				food = myfood;
			}
		}
		return obj;
	}
	var eater1 = eater();
	eater1.push("banana");
	eater1.eat();
	//可以实现封装				-->后面学
	//模块化开发，防止污染全局变量	-->后面学


	//立即执行函数
	//针对初始化功能的函数（只用一次就不用了）
	(function (){
		var a = 123;
		var b = 234;
		console.log(a+b);
	}());	//执行完就被释放（销毁）（不占内存）
</script>
</body>
</html>
```

### 对象、包装类

```js
<!DOCTYPE html>
<html>
<head>
	<title>对象，包装类</title>
</head>
<body>
<script type="text/javascript">
	//对象定义
	var me = {							//以大括号定义
		name : "k",
		age : 18,						//每个属性之间用逗号隔开
		sex : "male",
		health : 100,
		eat : function(food){			//属性可以为函数（即对象的方法）
			console.log("I am eating",food);
			me.health ++;				//对象内部也可以调用自己的属性
		},
		drink : function(drinks){
			console.log("I am drinking",drinks);
			this.health ++;				//除了上面使用对象的名称来调用自己的属性，使用this.也可以调用自己的属性
		}
	}

	//增
	me.love = 'python';
	//删
	delete me.drink;
	//改
	me.age = 19;
	//查
	console.log(me.age);

	//对象的创建方法
	//1. var obj = {}	PlainObject	对象字面量/对象直接量
	//2. 构造函数
	//		1）系统自带的构造函数		new Object()
	//		2）自定义

	//1)
	var obj1 = new Object();		//相当于 var obj1 = {}
	//2)
	function Car(color){				//跟函数的创建一样，直接function,也可以传参
		this.color = color;				//this.color 和 color 是不同的变量，可以进行赋值
		this.name = "NMW";				//内部写对象的属性（使用=号）
		this.height = "1400";
		this.lang = "4900";
		this.weight = 1000;
		this.health = 100;
		this.run = function(){
			this.health--;
		}
	}
	//构造函数原理（加上new，原本是函数，加上new就会按下面的执行，就变成了构造函数）
	//1. 在前面隐式加上this = {}
	//2. 执行this.xxx = xxx
	//3. 隐式返回this
	var car1 = new Car('green');	//创建时需要加上new
	var car2 = new Car('red');

	//原始的数字，字符串，布尔类型都不能有属性和方法，但可以使用Number类...（这些对象可原始的也一样可以进行运算）
	var num = 123;
	var num1 = new Number(123);
	console.log(num);
	console.log(num1);
	console.log(num+num1);
	var str = "asd";
	var str1 = new String("asd");
	//但是字符串可以打印str.length
	console.log(str.length);
	//上面的语句执行时为：
	//console.log(new String(str).length)
	//delete 上面的String()
	console.log(str);
	console.log(str1);
	console.log(str+str1);
	var boo = true;
	var boo1 = new String(true);
	console.log(boo);
	console.log(boo1);
	console.log(boo&&boo1);

	//如果使用原始值的属性或方法
	num.a = 1;
	//(new Number(num)).a = 1
	//删除上面的Number(num)
	console.log(num.a)
	//此时打印的为(new Number(num)).a
	//因为此时的Number对象是新建的，所以没有属性a
	//打印的就是undefined
	//最后删除上面新建的Number对象

	alert(123)
</script>
</body>
</html>
```

### 闭包补充

```js
<!DOCTYPE html>
<html>
<head>
	<title>闭包</title>
</head>
<body>
<script type="text/javascript">
	function test(){
		var arr = [];
		for (var i = 0; i < 10; i++){
			arr[i] = function(){	//在函数定义的时候，arr[i]里面的i不断变化，但是函数内部的i并不会收到影响（arr[i]里面的i会变成数字，但函数里面的i一直都是一个变量而不是数字）
				console.log(i);
			}
		}
		return arr;
	}

	var myArr = test();
	for (var j = 0; j < 10; j++){
		myArr[j]();
		//当函数被执行时，开始访问i，因为i在之前的for循环中不断i++，一直到了10，所以输出就是10s
	}


	//想要输出不是上面的10个10，而是10,9,8,7...即记录i的值
	function test1(){
		var arr1 = [];
		for (var i = 0; i < 10; i++){
			(function(j){			//添加一个立即执行函数包裹下面的语句，将i的值作为参数传进去，用另一个参数j来接收，此时虽然函数执行后就销毁了，但arr[j]的函数继承了原有的作用域，即j就是本次循环的i的值，不会被后续循环改变
				arr1[j] = function(){
					console.log(j);
				}
			}(i))
		}
		return arr1;
	}
	var myArr1 = test1();
	for (var q = 0; q < 10; q++){
		myArr1[q]();
		//当函数被执行时，访问的都是各自的j
	}


</script>
</body>
</html>
```

### 原型、原型链

```js
<!DOCTYPE html>
<html>
<head>
	<title>原型原型链</title>
</head>
<body>
<script type="text/javascript">
	//原型是function对象的一个属性，它定义了构造函数制造出的对象的公共祖先，通过该构造函数产生的对象，可以继承该原型的属性和方法，原型也是对象

	//Person.prototype		--原型
	//Person.prototype = {}		跟python中的父类继承类似
	Person.prototype.name = 'aa';	//可以通过原型的属性直接设置，设置后，Person也会具有这些属性
	function Person(){
		this.age = 18;
	}
	var person = new Person();
	console.log(person.name,person.age);	//此时会输出也有原型的属性

	//原型属性查看
	console.log(person.name);
	//原型属性修改
	Person.prototype.name = 'bb';	//必须通过原型来改
	//person.name = 'cc'只是在person自己的属性中增加了一个name属性，并没有修改到原型
	//原型属性增加
	Person.prototype.sex = 'male';	//必须通过原型增加
	var person1 = new Person();
	console.log(person1.sex,person1.name);
	//原型属性删除
	delete Person.prototype.sex;
	var person2 = new Person();
	console.log(person2.sex);

	//返回构造出这个对象的构造函数
	console.log(person.constructor);

	//返回person对象的原型
	console.log(person.__proto__);
	//所以想要修改对象的原型，可以修改__proto__属性或者修改prototype属性



	//原型链
	Grand.prototype.lastname = "Y";
	function Grand(){

	}//Grand.prototype.__proro__ 	--> 	Object.prototype
	var grand = new Grand();

	Father.prototype = grand;	//原型链的连接点
	function Father(){

	}
	var father = new Father();

	Son.prototype = father;
	function Son(){

	}
	var son = new Son();
	console.log(son.lastname);

	//绝大多数对象最终都会继承自Object.prototype
	//Object.create(原型)
	console.log(Object.create(null));

	//方法重写
	var num = Number(123);
	console.log(num.toString());				//toString()
	Number.prototype.toString = function(){	
		return 'hehe';
	}
	var num2 = Number(234);
	console.log(num2.toString());

	//call
	function KKK(name,age){
		this.name = name;
		this.age = age
	}
	var k1 = new KKK('k1',1);
	var k2 = {};
	KKK.call(k2,'k2',2);		//将KKK中的this指向k2(如果call里面不加参数，相当于KKK())，并执行
	//即函数对象调用call方法后，会将内部的this指向传入的参数所指向的对象
	console.log(k1,k2)

	function Person(name,age,sex){
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
	function Student(name,age,sex,tel,grade){
		Person.call(this,name,age,sex);			//借用别的函数实现自己的功能（此时的语句就相当于把上面Person函数中的三条语句直接拿到此位置）
		//Person.apply(this,[name,age,sex])
		//apply作用和call一样，唯一的区别就是传入的参数形式不同，apply除了第一个，后面的传入的是一个组
		this.tel = tel;
		this.grade = grade;
	}
	var student = new Student('k',19,'male',187,2019);
	console.log(student)


</script>
</body>
</html>
```

### 继承模式、命名空间、对象枚举

```js
<!DOCTYPE html>
<html>
<head>
	<title>继承模式，命名空间，对象枚举</title>
</head>
<body>
<script type="text/javascript">
	/*
	传统方式  --->  原型链
		过多的继承了没用的属性
	借用构造函数
		不能继承借用构造函数的原型
		每次构造函数都要多走一个函数
	共享原型
		不能随便改动自己的原型
	圣杯模式
	*/

	//共享原型
	function Father(){}
	Son.prototype = Father.prototype
	function Son(){}

	//圣杯模式
	function inherit(Target,Origin){
		function F(){}			//作为Target的原型储存地址
		F.prototype = Origin.prototype;	//F与Origin(即需要继承的原型)共享原型
		Target.prototype = new F();		//Target继承F（包含了Origin的属性）
		Target.prototype.constuctor = Target 		//重置一下constuctor属性
		Target.prototype.uber = Origin.prototype	//创建一个“超级原型”的索引
	}
	inherit(Son, Father)
	//此时可以更改Son的原型，而不影响Father的原型


	//命名空间
	//管理变量，防止污染全局，适用于模块化开发
	//可以将自己定义的变量放在一个对象中
	/* var obj = {
		a : 100,
		...
	}
	*/
	//这样可以避免在与别人合作开发的时候变量重名

	//连续调用函数，类似jQuery的方法
	var peo = {
		eat : function(){
			console.log("I am eating");
			return this;				//每次执行完都会返回它自己，这样就可以连续调用函数
		},
		drink : function(){
			console.log("I am drinking");
			return this;
		},
		card1 : 111,
		card2 : 222
	}
	peo.eat().drink()

	//属性调用
	console.log(peo.card1,peo.card2)
	console.log(peo['card'+'1'],peo['card'+'2'])	//使用中括号也可以实现属性调用，且更加灵活

	//对象枚举
	//对于数组的遍历，可以直接使用for循环
	var arr = [1,3,5,6,7,3]
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
	//对于对象，也可以遍历
	for(var key in peo){
		console.log(key);
	}
	for(var prop in peo){
		console.log(peo[prop]);	//如果写的是peo.prop,会被转换成peo['prop'],此时prop就不是变量了
	}

	//使用for in 方法，会把继承来的属性也遍历
	var obj = {
		name : 'k',
		__proto__ : {
			age : 18
		}
	}
	for(var prop in obj){
		console.log(obj[prop]);
	}
	for(var prop in obj){
		if(obj.hasOwnProperty(prop)){		//使用方法进行筛选，此方法判断prop是否为obj自己的属性（而不是由原型继承来的）
			console.log(obj[prop]);
		}
	}

	//in操作符
	//判断一个属性是否为对象所有
	console.log('name' in obj);

	//instanceof
	//判断一个对象是否是一个构造函数构造出来的
	//(判断对象的原型链上是否有此Class)
	console.log([] instanceof Array)
	console.log([] instanceof Object)	//原型链中Array 往上是 Object
</script>
</body>
</html>
```

### 深度克隆、三目运算符、数组、错误捕捉

```js
<!DOCTYPE html>
<html>
<head>
	<title>深度克隆，三目运算符，数组</title>
</head>
<body>
<script type="text/javascript">
	//深度克隆
	//0.遍历对象  for(var prop in obj)
	//1.判断是不是原始值  typeof() object instanceof toString
	//2.判断是数组还是对象
	//3.建立相应的数组和对象（进行克隆）

	function deepClone(origin, target) {
		var target = target || {},
			toStr = Object.prototype.toString,
			arrStr = "[object Array]";

		for(var prop in origin){
			if(origin.hasOwnProperty(prop)){
				//判断是否为自己的属性
				if(origin[prop] !== null && typeof(origin[prop]) == 'object'){
					//判断是不是原始值
					if(toStr.call(origin[prop]) == arrStr){
						//判断是否为数组，是数组则创建一个新数组
						target[prop] = [];
					}else{
						//是对象则创建一个新对象
						target[prop] = {};
					}
					deepClone(origin[prop], target[prop]) //对数组或对象进行深度克隆

				}else{
					target[prop] = origin[prop];//是原始值就直接赋值
				}
			}
		}
		return target;
	}
	var ooo = {
		name:"jkl",
		age:12,
		tt:{
			name:'ttt',
			age:34,
			ss:[1,2,2]
		}
	};
	var ttt = {}
	deepClone(ooo,ttt)

	//三目运算符
	//(判断)? (Y):(N);
	//上面的代码
	// if(toStr.call(origin[prop]) == arrStr){
	// 	target[prop] = [];
	// }else{
	// 	target[prop] = {};
	// }
	//可简化为
	// target[prop] = (toStr.call(origin[prop]) == arrstr) ? [] : {};


	//数组
	var arr0 = [1,2,,,,5,6];		//直接定义自变量数组
	var arr1 = new Array(1,2);	//通过构造创建
	var arr3 = new Array(5);			//如果参数只有一个，则默认表示数组长度，而不是[5]

	//数组不可溢出读，会报undefined
	//可以溢出写，如长度为10的数组，可以对第十一位进行赋值等操作，如arr[10]=2

	//数组常用方法
	var arr = [1,2,3];
	//1.改变原数组
		//[1,2,3]
		arr.push(4);	//在数组的最后一位添加n个数据
		arr.push(5,6,7);	//依次添加5,6,7
		console.log(arr);

		//[1,2,3,4,5,6,7]
		arr.pop();		//把数组的最后一位弹出

		//[1,2,3,4,5,6]
		arr.unshift(0);	//在数组的前面增加n个数据
		arr.unshift(-2,-1);
		console.log(arr);

		//[-2,-1,0,1,2,3,4,5,6]
		arr.shift();	//把数组的第一位弹出

		//[-1,0,1,2,3,4,5,6]
		arr.splice(0,3,0,1);	//从第0位开始剪切三个数据，并在剪切处添加后面的数据（0,1）

		arr = [5,3,4,10,2,6];
		arr.sort();		//默认是按照ascll码排序
		//[10,2,3,4,5,6]

		//自定义sort，传入一个匿名函数
		// 1.必须写两形参
		// 2.看返回值	(1)当返回值为负数时,前面的数在前面
		// 				(2)为正数,后面的数在前面
		// 				(3)为0,不动
		arr.sort(function(a,b){		//大小升序
			return a-b;
		})

		//[2,3,4,5,6,10]
		arr.reverse()	//反序
		//[10,6,5,4,3,2]

	//2.不改变原数组
		var arr1 = [1,2,3];
		var arr2 = [4,5,6];
		console.log(arr1.concat(arr2));		//连接两个数组，不改变原数组

		console.log(arr.slice(2,5));		//截取数组的某一部分（从某位到某位）此处从第2位到第5位(不包括第五位)

		console.log(arr.join('-'));			//将数组的元素用"-"连接成字符串
		//与String的splite方法互逆
		console.log(arr.join('-').split('-'));



		//类数组  如函数里面的arguments

		//属性要为索引（数字）属性
		//必须有length属性，最好加上push
		var obj = {
			"0" : 'a',
			"1" : 'b',
			"2" : 'c',
			"length" : 3,
			"push" : Array.prototype.push,
			"splice" : Array.prototype.splice			//有此属性，对象显示就会像数组一样
		}

		//try...catch(){}
		//错误捕捉
		try{
			console.log('a');
			console.log(b);		//此处b未定义，发生错误，所以跳过try的后续内容，执行catch内容
			console.log('c');
		}catch(error){		//上面的报错信息会传入到此处的error对象中，有name和message属性
			console.log(error.name + " : " + error.message)
		}

</script>
</body>
</html>
```

### dom初探

```js
<!DOCTYPE html>
<html>
<head>
	<title>Document</title>
	<style type="text/css">
		/*按钮切换*/
		/*.content{
			display: none;
			width: 200px;
			height: 100px;
			border: 2px solid red;
		}
		.active {
			background: green;
		}*/

		/*格子画笔*/
		*{
			margin:0;
			padding:0;
		}
		ul{
			list-style: none;
			width: 400px;
			height: 400px;
		}
		li{
			box-sizing: border-box;
			float: left;
			width: 20px;
			height: 20px;
			border:1px solid black;
		}
	</style>
</head>

<body>
<!-- 绑定元素，修改属性 -->
	<!-- <div></div>
	<script type="text/javascript">
		
		var div = document.getElementsByTagName('div')[0];	//div变量绑定文档中的第0个div
		div.style.width = "100px";
		div.style.height = "100px";
		div.style.backgroundColor = "red";

		var count = 0;
		div.onclick = function () {			//当div被点击时触发此函数
			count ++;
			if (count%2 == 1){
				this.style.backgroundColor = "green";
			}else{
				this.style.backgroundColor = "red";
			}
		}
	</script> -->

<!-- 按钮切换 -->
	<!-- <div class="wrapper">
		<button class="active">1</button>
		<button>2</button>
		<button>3</button>
		<div style="display: block;" class="content">111111111</div>
		<div class="content">222222222</div>
		<div class="content">333333333</div>
	</div>
	<script type="text/javascript">

		var btn = document.getElementsByTagName('button');
		var div2 = document.getElementsByClassName('content');

		for(var i = 0; i < btn.length; i++){

			(function(i){
				btn[i].onclick = function () {

					for(var j = 0; j<btn.length; j++){
						btn[j].className = "";
						div2[j].style.display = "none";
					}
					this.className = "active";
					div2[i].style.display = "block";

			}
			}(i))

		}
	</script> -->

	<!-- 创建元素 -->
	<!-- <script type="text/javascript">
		var div3 = document.createElement('div');
		document.body.appendChild(div3);
		div3.style.width = "100px";
		div3.style.height = "100px";
		div3.style.backgroundColor = "#223355";
		div3.style.position = "absolute";
		div3.style.right = "0";
		div3.style.top = "0";

		// setInterval(function(){
		// 	div3.style.right = parseInt(div3.style.right) + 2 + "px";
		// 	div3.style.top = parseInt(div3.style.top) + 2 + "px";

		// },500); //计时器每隔500毫秒执行一次此函数

		document.onkeydown = function(e){					//当键盘按下时，执行此函数，e为监听信息，如下，当e.which为38时，表示按下“上”箭头
			switch(e.which){
				case 38:
					div3.style.top = parseInt(div3.style.top) - 2 + "px";
					break;
				case 39:
					div3.style.right = parseInt(div3.style.right) - 2 + "px";
					break;
				case 40:
					div3.style.top = parseInt(div3.style.top) + 2 + "px";
					break;
				case 37:
					div3.style.right = parseInt(div3.style.right) + 2 + "px";
					break;
			}
		}

	</script> -->

<!-- 格子画笔 -->
	<!-- <ul>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
		<li img-date='0'></li>
	</ul>
	<script type="text/javascript">
		
		var ul = document.getElementsByTagName('ul')[0];

		ul.onmouseover = function(e){
			var event = e || window.event;
			var target = event.target || event.srcElement;

			target.style.backgroundColor = "rgb(0,255," + target.getAttribute('img-date') + ")";
			target.setAttribute('img-date',parseInt(target.getAttribute('img-date')) + 20);
		}
	</script> -->

<!-- 
	document 代表整个文档（可以理解为html的父标签）
	
	getElementById('')			通过Id来选择元素				唯一选择
	getElementByTagName('')		通过标签名称来选择元素			选出一组，可通过...[0]，类似数组访问元素的方法来选出指定标签元素
	getElementByName('')		通过标签的name属性中的值来选择		不是所有标签的name属性都支持
	getElementClassName('')
	
	querySelector('')			可通过css选择器来选择
	querySelectorAll('')		通过css选择器选出一组				这两个选出来的元素不是实时的



	dom节点选择		注释/文本/元素 都是节点
	parentNode属性,表示一个节点的父节点
	<div><strong></strong></div>
	strong.parentNode -> div
	strong.parentNode.parentNode -> body
	strong.parentNode.parentNode.parentNode -> html
	strong.parentNode.parentNode.parentNode.parentNode -> document

	childNodes  ->		子节点们
	firstChild  ->		第一个子节点
	lastChild  ->		最后一个子节点

	nextSilbing  ->		下一个兄弟节点
	previousSilbing ->	前一个兄弟节点

	parentElement -> 返回当前元素的父元素节点

	children  ->  返回当前元素的元素子节点
	childElementCount  ->  返回当前元素节点的子元素节点个数（效果同children.length)

下面IE不兼容
	firstElementChild  ->  第一个元素子节点
	lastElementChild  ->  最后一个元素子节点

	nextElementSilbing -> 下一个兄弟元素子节点
	previousElementSilbing -> 上一个兄弟元素子节点



节点的四个属性
	nodeName   ->  节点名称（只读）
	nodeValue  ->  节点值
	nodeType   ->  节点类型（只读）
	attributes ->  元素节点的属性集合
节点的一个方法
	Node.hasChildNodes();	//判断是否有子节点，包括文本节点、注释节点、元素节点。


	 -->
</body>
</html>
```

### dom继承树

```js
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<!-- NodeType常用取值
		1 -> 元素节点
		2 -> 属性节点
		3 -> 文本节点
		8 -> 注释节点
		9 -> 文档节点
		 -->

	<!-- 
		DOM结构树
		Node -> Document 			-> HTMLDocument

			 -> CharacterData		-> Text
			 						-> Comment
			 -> Element 			-> HTMLElement	->HTMLHeadElement
			 										->HTMLBodyElement
			 										->HTMLTitleElement
			 										->HTMLParagraphElement
			 										->HTMLInputElement
			 										...
			 -> Attr
	 -->

	 <!-- 
	 	getELementById方法定义在Document.prototype上，即Element节点上不能使用

	 	getElementsByName方法定义在HTMLDocument.prototype上，即非html中的document不能使用（xml里面不能用）

	 	getElementsByTagName方法定义在Document.prototype和Element.prototype上，即Document和Element皆可使用此方法，如下选择span标签
	  -->


	  <!-- 

	  <div>
	  	<span></span>
	  </div>
	  <span></span>

	  <script type="text/javascript">
	  	var div = Document.getElementsByTagName('div')[0];
	  	var span1 = div.getElementsByTagName('span')[0];	//可以使用div来选出第一个span标签
	  </script>
	  
	   -->


	  <!-- 
	  	HTMLDocument.prototype定义了一些常用的属性，body，head，分别指代HTML文档中的<body><head>标签
	  		即document.body  ->  <body>
	  		  document.head  ->  <head>
	  	Document.prototype上定义了documentElement属性，指代文档的根元素，指代<html>元素
	  		  document.documentElement  ->  <html>
	  	getElementByClassName/querySlectorAll/querySelector在Document.prototype,Element.prototype类中均有定义，同上
	   -->




	   <!-- dom 基本操作 -->
	   <script type="text/javascript">
	   	//增
			var div = document.createElement('div');				//创建一个元素节点

			var text = document.createTextNode('hahaha');			//创建一个文本节点

			var com = document.createComment('this is comment');	//创建一个注释节点

		//插
			document.body.appendChild(div);		//将div加入到body中
			div.appendChild(text);				//将text加入到div中
			document.body.appendChild(text)		//将text加入到body中（从div中拿出来，加入到body）

			var span = document.createElement('span');
			document.body.insertBefore(span,div);	//body中，在div之前插入span

		//删
			span = document.body.removeChild(span);		//将span移出，返回span
			text.remove()								//销毁text

		//替换
			btn = document.createElement('button');
			replaced = document.body.replaceChild(btn,div);		//在body中，用btn替换div,并返回被替换的内容

		//写入
			btn.innerHTML = 'button';				//改变标签内部的文本
			document.body.innerHTML += '<div style = "background:#123456;">789</div>';	//可以写标签代码（利用+=实现“附加”）
			btnHtml = btn.innerHTML;		//利用此属性取出标签内部值

		//节点方法
		btn.setAttribute('class','demo');			//为btn添加属性名和属性值，此处为class='demo'
		btnclass = btn.getAttribute('class');					//获取btn的属性class的值
	   </script>

</body>
</html>
```

### date对象、定时器、窗口属性、dom尺寸

```js
<!DOCTYPE html>
<html>
<head>
	<title>date对象_定时器_窗口属性_dom尺寸_脚本化css</title>
</head>
<body>
	<div style="width: 1000px;height: 1000px;">..........</div>
	<script type="text/javascript">
		//日期对象，是系统提供好的
		var date = new Date();		//date储存创建时的时间

		console.log(Date());		//单独执行此函数，会返回当前时间
		console.log(date.getDate());		//返回date是本月第几天
		console.log(date.getDay());			//返回date是本周第几天（0-6）0就是星期天
		console.log(date.getMonth()+1);		//返回date月份（0-11）加一即月数
		console.log(date.getFullYear());	//返回date年份（使用getYear()返回的是 当前年份-1900 ）
		console.log(date.getHours());		//返回date时间的小时
		console.log(date.getMinutes());		//返回date时间的分钟
		console.log(date.getSeconds());		//返回date时间的秒数
		console.log(date.getMilliseconds());//返回date时间的毫秒数

		console.log(date.getTime());		//返回date时间距离1970年1月1日0时0分...的毫秒数

		date.setDate(15);					//修改date中的数据，修改位置与上方函数相同
		date.setMonth(3);//....
		console.log(date);

		console.log(date.toString())		//将时间戳转换为字符串形式



		//定时器（不是很准）
		var count = 0;
		var timer = setInterval(function(){
			if (count >= 10){
				clearInterval(timer);
			}
			console.log('a');
			count ++
		},5000)			//参数为一个函数，和一个表示时间的数。作用为每隔一定时间执行一次函数。
		//每一个setInterval都会返回一个数字，作为此定时器的唯一标识，可以使用clearInterval进行清除


		var timer2 = setTimeout(function(){
			console.log('b');
		}, 10000)		//延迟10000毫秒后执行参数中的函数,可用clearTimeout(timer2)进行清除


		//窗口属性
		console.log(window.pageXOffset,window.pageYOffset);		//滚动条的x与y轴滚动距离（IE8及以下不支持）
		//IE8和IE8以下浏览器
		//document.body.scrollLeft/Top		IE 8  5  4
		//document.documentElement.scrollLeft/Top  IE  7  6
		//IE8及以下浏览器只有上面其中一个属性，另一个为0，所以使用时直接二者

		console.log(window.innerWidth,window.innerHeight);		//此时可视区窗口的宽高（像素）IE8及以下不兼容
		console.log(document.documentElement.clientWidth,document.documentElement.clientHeight); //标准模式下，全兼容
		console.log(document.body.clientWidth,document.body.clinetHeight);		//适用于怪异模式下的浏览器（不写<!DOCTYPE html>）
		//document.compatMode		->		CSS1Compat -- 标准模式
		//									Back	   -- 怪异模式

		var div = document.getElementsByTagName('div')[0];
		console.log(div.getBoundingClientRect());		//可用于获取任何dom元素的几何尺寸，返回一个对象（包含top，left，bottom，right的坐标和width，height）（结果为静态）


		//dom操作
		console.log(div.offsetWidth,div.offsetHeight);		//返回dom元素的宽高
		console.log(div.offsetLeft,div.offsetTop);			//返回dom元素的位置（坐标）(相对于 有定位的 父级的位置)
		console.log(div.offsetParent)						//返回最近的有定位的父级，body.offsetParent返回null

		//window
		window.scroll(100,100);				//让滚动条滚动到指定距离（x，y）
		window.scrollTo(100,100);			//同上
		window.scrollBy(10,10);				//每次滚动在之前的基础上累加


		//读写css属性
		console.log(div.style);				//表示某个元素的 行间css样式 声明（不包括外部样式表内容），可读写(未指定的属性为空值)
		div.style.backgroundColor = '#fdd';	//-形式的属性以小驼峰式命名读写
		div.style.cssFloat = 'left';		//float建议以cssFloat表示（float是保留字）

		//查询css
		console.log(window.getComputedStyle(div,null));		//获取某个元素的显示样式，null可以换位此元素的伪元素（包括外部样式表）（IE8及以下不兼容）
		//div.currentStyle  ---  IE独有	

	</script>
</body>
</html>
```

### 事件

```js
<!DOCTYPE html>
<html>
<head>
	<title>事件</title>
	<style type="text/css">
		div{
			width: 100px;
			height: 100px;
			background: #123456;
			color: #fff;
			float: left;
			margin: 2px;
			line-height: 50px;
			text-align: center;
		}
		.wrapper,
		.wrapper2,
		.wrapper1{
			width: 300px;
			height: 300px;
			background: red;
		}
		.content,
		.content2,
		.content1{
			width: 200px;
			height: 200px;
			background: green;
		}
		.box,
		.box2,
		.box1{
			width: 100px;
			height: 100px;
			background: yellow;
		}
	</style>
</head>
<body>
	<div>绑定事件演示1</div>
	<div>绑定事件演示2</div>
	<div>解除绑定1</div>
	<div>解除绑定2</div>

	<div class="wrapper">
		<div class="content">
			<div class="box"></div>
		</div>
	</div>
	<div class="wrapper1">
		<div class="content1">
			<div class="box1"></div>
		</div>
	</div>

	<div></div>

	<div class="wrapper2">
		<div class="content2">
			<div class="box2"></div>
		</div>
	</div>

	<ul style="float:left;">
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
		<li>6</li>
		<li>7</li>
		<li>8</li>
		<li>9</li>
		<li>10</li>
	</ul>
	<script type="text/javascript">
		//绑定事件1--句柄绑定--on+事件名（行间写的时候直接onclick='div.style....'无需写function..）
		var div0 = document.getElementsByTagName('div')[0];
		div0.onclick = function(){
			this.style.background = 'green';				//this指向dom本身
		}
		//绑定事件2--事件监听--可绑定多个函数
		var div1 = document.getElementsByTagName('div')[1];
		div1.addEventListener('click',function(){
			this.style.background = 'yellow';				//this指向dom本身
		},false);
		div1.addEventListener('click',function(){
			this.style.color = '#000';
		});
		//绑定事件3--IE独有--可绑定多个
		//div.attachEvent('onclick',function(){});			//this指向window


		//解除事件
		var div2 = document.getElementsByTagName('div')[2];
		div2.onclick = function(){
			console.log('a');
		}
		div2.onclick = false;		//将值变为false，null等即可
		var div3 = document.getElementsByTagName('div')[3];
		test = function(){
			console.log('b');
		}
		div3.addEventListener('click',test,false);
		div3.removeEventListener('click',test,false);		//解除绑定-函数必须是原来的函数（匿名函数不可解除）
		//div.detachEvent('onclick',function(){});		IE解除绑定


		//事件处理模型--要么冒泡，要么捕获

		//事件冒泡：结构上（非视觉上）存在嵌套关系的元素，会存在事件冒泡功能，即同一事件，自子元素冒泡向父元素。（自底向上）
		//focus,blur,change,submit,reset,select无冒泡功能
		var wrapper = document.getElementsByClassName('wrapper')[0];
		var content = document.getElementsByClassName('content')[0];
		var box = document.getElementsByClassName('box')[0];

		wrapper.addEventListener('click',function(){
			console.log('wrapper');
		},false);
		content.addEventListener('click',function(){
			console.log('content');
		},false);
		box.addEventListener('click',function(){
			console.log('box');
		},false);
		//此时点击box，控制台会打印box,content,wrapper（即三者依次被点击，从最里层的box到最外层的wrapper）

		//事件捕获--谷歌有----捕获>冒泡，先执行捕获，后执行冒泡
		//结构上（非视觉上）嵌套关系的元素，会存在事件捕获功能，自父元素驳货至子元素（父元素先捕获此事件，然后传给子元素）
		//将false变为true，处理方式就变为事件捕获
		var wrapper1 = document.getElementsByClassName('wrapper1')[0];
		var content1 = document.getElementsByClassName('content1')[0];
		var box1 = document.getElementsByClassName('box1')[0];

		wrapper1.addEventListener('click',function(){
			console.log('wrapper1');
		},true);
		content1.addEventListener('click',function(){
			console.log('content1');
		},true);
		box1.addEventListener('click',function(){
			console.log('box1');
		},true);
		//此时点击box，控制台会打印wrapper1,content1,box1（自外层向里层捕获）


		//取消冒泡
		var div10 = document.getElementsByTagName('div')[10];
		div10.onclick = function(event){
			//在函数内部执行下列语句之一，可取消此事件的冒泡
			event.stopPropagation();	//不支持ie9以下
			event.cancelBubble = true;	//ie，Google都行
		}

		//取消默认事件
			//句柄绑定时取消
		document.oncontextmenu = function(event){	//此为鼠标右击菜单事件，return false之后就只打印a，不会出现菜单
			console.log('a');
			return false;
			//event.preventDefault;				--IE9以下不兼容--不局限于句柄绑定事件，可在addEventListener中使用
			//event.returnValue = false; 		--兼容IE，同上
		}

		//事件对象
		//事件触发时，浏览器会把事件对象传入函数中,下放为传入e中，IE不会传入，会储存在window.event中
		div10.onclick = function(e){
			this.style.borderRadius = '50%';
			var event = e || window.event; 		//此时兼容IE，使用event来储存事件对象
		}
		//事件源对象--触发此事件的对象来源
		var wrapper2 = document.getElementsByClassName('wrapper2')[0];
		var content2 = document.getElementsByClassName('content2')[0];
		var box2 = document.getElementsByClassName('box2')[0];

		wrapper2.onclick = function(e){
			var event = e || window.event;
			var target = event.target || event.srcElement;	//两个都可表示事件源对象，火狐只有event.target,IE只有event.srcElement,Chrome都有
			console.log(target);
		}//此时点击box2，事件冒泡至wrapper2，打印的时box2对象
		//获取事件源对象后，可用于实现事件委托，如下：
		var ul = document.getElementsByTagName('ul')[0];
		ul.onclick = function(e){		//每点击一个li就打印其里面的内容
			var event = e || window.event;
			var target = event.target || event.srcElement;
			if (target != ul){console.log(target.innerText);}
			//性能-不需要循环所有元素一个个绑定事件
			//灵活-当有新的元素时不需要重新绑定事件
		}


		//事件分类
			//鼠标事件
			/*
			click					--	鼠标点击--只能监听左键
			mousedown				--	鼠标按下		--如果是左键按下，系统传入的event中event.button=0,右键为2，滚轮为1
			mouseup					--	鼠标抬起
			mousemove				--	鼠标移动
			contextmenu				--  鼠标右键产生菜单
			mouseover				--  鼠标挪入dom
			mouseout				--  鼠标挪出
			mouseenter				--	鼠标挪入
			mouseleave				--	鼠标挪出

			移动端
			touchstart
			touchmove
			touchend
			*/
			//键盘事件
			/*
			document.onkeydown			--	键盘按下-按下连续触发--可以响应任何键盘案件--无法判断大小写等
			document.onkeypress			--	键盘按压-按压连续触发--只能响应字符型（ASCLL中的字符）按键
			document.onkeyup			--	键盘抬起-抬起触发
			可从event的属性charcode|which等属性中判断按键
			*/
			//文本类操作事件
			/*
			input.oninput				--	value改变触发
			input.onchange				--	焦点改变触发
			input.onfocus				--	聚焦触发
			input.blur					--	失去焦点
			*/
			//窗体操作类
			/*
			window.onscroll				--	滚动条滚动触发
			window.onload				--	当页面全部加载完毕的时候触发
			*/

	</script>
</body>
</html>
```

### json、异步加载、时间线、正则表达式

```js
<!DOCTYPE html>
<html>
<head>
	<title>json|异步加载|时间线|正则表达式</title>
</head>
<body>
	<script type="text/javascript">
		//json
		//JSON是一种传输数据的格式（以对象为样板，本质上就是对象，但用途有区别，对象是本地用的，json是用来传输的）
		var obj = {
			'name':'ads',
			'age' :18
		}

		//将json转变为字符串格式
		var str = JSON.stringify(obj);
		console.log(str);

		//将字符串转变为json格式
		var obj1 = JSON.parse(str);
		console.log(obj1);

		//异步加载
		//<script type="" defer="defer">< /script>
		//1. 引入js文件时，在头标签加上defer属性，在引入的同时可以在内部写js代码-异步加载，但等到dom解析完才执行--只有IE能用
		//2. 头标签加上aysnc="aysnc",W3C规定，通用，只能引入外部文件-异步加载，加载完即用
		//3. 创建script，插入到dom中(常用)

		//异步加载3
		var script = document.createElement('script');
		script.type = "text/javascript";

		document.head.appendChild(script);		//需要时插入

		//(1)非IE
		script.onload = {	//script加载完后执行下面的代码
			//执行 需要self_function.js 才能执行的代码
		}
		//(2)IE

		script.onreadystatechange = function(){
			//readystatechange在script.readyState发生改变时触发
			//script.readyState为loading时表示还未加载完，为complete或loaded时表示已加载完
			if(script.readyState == "complete" || script.readyState == 'loaded'){
				//执行 需要self_function.js 才能执行的代码
			}
		}
		script.src = "self_function.js";	//绑定上方的onready..事件之后再进行载入，防止载入过快在事件还未绑定时就已触发



		//js加载时间线
		/*
		1. 创建Document对象，开始解析web页面。解析HTML元素和他们的文本内容后添加ELement对象和Text节点到文档中。这个阶段document.readyState = 'loading'。
		2. 遇到link外部css，创建线程加载，并继续解析文档。
		3. 遇到script外部js，并且没有设置async、defer，浏览器加载，并阻塞，等待js加载完成并执行该脚本，然后继续解析文档。
		4. 遇到script外部js，并且设置有async、defer，浏览器创建线程加载，并继续解析文档。对于async属性的脚本，脚本加载完成后立即执行。（异步禁止使用document.write()）。
		5. 遇到img等，先正常解析dom结构，然后浏览器异步加载src，并继续解析文档。
		6. 当文档解析完成，document.readyState = 'interactive'。
		7. 文档解析完成后，所有设置有defer的脚本会按照顺序执行。（注意与async的不同，但同样禁止使用document.write()）。
		8. document对象出发DOMContentLoaded时间，这也标志着程序执行从同步脚本执行阶段，转化为时间驱动阶段。
		9. 当所有的async的脚本加载完成并执行后、img等加载完成有，document.readyState = 'complete',window对象触发load事件。
		10. 从此，以异步响应方式处理用户输入、网络时间等
		*/


		//正则表达式
		//创建方式
		//1. 直接量
		var reg = /ab/;		//写在双斜杠里面；
		var reg1 = /abc[a-z]/i;		//后面写i表示忽略大小写
		var reg4 = /ab/g;			//全局匹配(把所有匹配的都找出来)
		var reg3 = /^a/mg;			//m表示执行多行匹配
		//2. new
		var reg2 = new RegExp("[a-z]{5}");


		//使用
		console.log(reg2.test('abcd'));				//检测'abcd'中是否有正则表达式(表示的内容)
		console.log(reg.compile());					//将正则表达式编译（不然每用一次都需要进行编译一次，提前编译即可优化）
		console.log(reg4.exec('12ababababababab'),reg4.lastIndex);	//检索字符串中指定的值。返回找到的值，并确定其位置，并把reg.lastIndex设置为匹配到的子串最后一个字符的下一个位置
		console.log('abababab'.match(reg));			//字符串.match()返回匹配出的内容
		console.log('abcd\na'.match(reg3));			//多行匹配----\n为换行，所以\n后面的a也可匹配
		console.log('2ababab'.search(reg));			//返回匹配到的第一个子串的位置
		console.log('ababab'.replace(reg,'cd'));	//将正则表达式匹配到的字符串替换、此处只匹配到一个（无g）
		console.log('ababab'.replace(reg4,'cd'));	//加上g就可匹配全部
		console.log('abababddflkj'.split(/a|d/));	//以正则表达式匹配到的字符串分割
	</script>

</body>
</html>
```

### 表单

```js
<!DOCTYPE html>
<html>
<head>
	<title>day16</title>
</head>
<body>
	<form name="myform" onsubmit="return validateForm()">	
		<!-- onsubmit 会根据validateForm的返回值判断是否进行提交，无返回值默认为true -->
		请输入：<input type="text" name="fname">
		<input type="submit" value="提交">

	</form>


<script type="text/javascript">
	function validateForm(){
		var x = document.forms['myform']['fname'].value;	//document.forms获取表单，
		if (x == null || x == ''){
			alert("输入内容不可为空");
			return false;
		}
	}
</script>
</body>
</html>
