---
title: Vue3学习笔记
date: 2022-05-29
description: 之前只学了vue2，终于把vue3给补上了
tags:
- 笔记
- web
- vue
category: code
cover: https://img.dorakika.cn/md/20220529.png
slug: '20220529'
---

{% note blue 'fas fa-bullhorn' modern %}

笔记文件，记录用，学习参考：[哔哩哔哩尚硅谷VUE](https://www.bilibili.com/video/BV1Zy4y1K7SH)

{% endnote %}

## 创建Vue3.0工程
### 1. 使用vue-cli创建
```shell
#检查vue脚手架版本
vue ---version
#若无，则需要安装或者升级
npm install -g @vue/cli
# 创建项目选择vue3
vue create xx
# 进入目录，运行
cd xx
npm run serve
```

### 2. 使用vite创建
官方文档：https://v3.cn.vuejs.org/guild/installation.html#vite

vite官网：https://vitejs.cn

优势
- 开发环境中，无需打包操作，可快速冷启动
- 轻量快速的热重载（HMR）
- 真正的按需编译，不再等待整个应用编译完成

```shell
## 创建工程
npm init vite-app <project-name>
## 进入工程目录
cd <project-name>
## 安装依赖
npm install
## 运行
npm run dev
```

### 一些变化
- 组件可以没有根标签（但得有至少一个标签）

## 常用Composition API
### setup
1. Vue3.0中的一个新的配置项（与vue2中的data、method等类似），值为一个函数。
2. setup中可使用vue3中的Composition API（组合API）
3. 组件中所用到的：数据、方法等等，均要配置在setup中
4. setup函数的两种返回值：
	1. 若返回一个对象，则对象中的属性，方法，在模板中均可以直接使用
	2. 若返回一个渲染函数，则可以自定义渲染内容
5. 注意
	1. 尽量不要与vue2混用。setup中无法访问vue2的配置（data、methods等），vue2配置中可以访问setup中的属性、方法；重名则setup优先
	2. setup不能是一个async函数，因为async返回值为promise对象，无法被模板使用。（需要Suspense和异步组件的配合）


```vue
<script>
export default {
  name: 'page-header',
  setup(){
    //数据
    let name = "name"
    //需要返回之后才能在模板中使用
    return{
      name,
    }
  }
}
</script>
```


### ref
- 作用：定义一个响应式的数据
- 语法：`const xxx = ref(initValue)`
	- 创建一个包含响应式数据的引用对象（reference对象，简称ref对象）
	- JS中操作数据`xxx.value`
	- 模板中读取数据，不需要`.value`，直接`<div>{{xxx}}</div>`
- 备注
	- 接收的数据可以是：基本类型，也可以是对象类型
	- 基本类型的数据依然是靠`Object.defineProperty()`的`get`和`set`完成的
	- 对象类型的数据：内部为Vue3.0新函数——reactive函数实现（使用Proxy）

```vue
<script>
import {ref} from 'vue';
export default {
    name: 'page-aside',
    setup(){
        //创建引用实现对象
        let name = ref("导航");
        //修改后，会触发vue更新视图；ref创建的数据，需要使用.value才能使用，模板中不需要.value
        name.value = "nav";
        return{
            name,
        }
    }
}
</script>
```

### reactive
- 作用：定义一个对象类型的响应式数据（基本类型不需要用它，要用`ref`函数）
- 语法：`const 代理对象 = reactive(源对象)`接收一个对象（或数组），返回一个代理对象（proxy对象），且对象为深层次的响应

```vue
<script>
import {ref,reactive} from 'vue';
export default {
    name: 'page-aside',
    setup(){
        //创建引用实例对象
        let name = ref("导航");
        let routers = reactive([
            {name:'推荐',icon:'icon-home',url:'/home'},
            {name:'最近',icon:'icon-recent',url:'/recent'},
        ])
  
        //响应式修改
        name.value = "nav";
        //reactive创建，无需.value
        routers[1].name = 'haha'
  
        return{
            name,
            routers
        }
    }
}
</script>
```

### vue3.0中的响应式原理

#### vue2.x
- 通过Object.defineProperty()对属性的读取、修改进行拦截（数据劫持）
- 数组类型：通过重写数组的一系列方法来实现拦截
- 问题：新增属性、删除属性，页面不会更新，直接通过下标修改数组，页面不会自动更新

#### vue3.0
- 实现原理：
	- 通过Proxy（代理）：拦截对象中任意属性的变化，包括：属性值的读写、添加、删除等
	- 通过Reflect（反射）：对被代理对象的属性进行操作


```js
//模拟vue3中实现响应式
let person = {
	name: 'xx',
	age: 18,
}
// 参数：被代理对象, 配置（可为空）
// 增(set)删(deleteProperty)改(set)查(get)
const p = new Proxy(person,{
	set(target,propName,value){
		console.log(`修改${propName},开始更新页面`)
		Reflect.set(target,propName,value);
	},
	get(target,propName){
		console.log(`读取${propName}`);
		return Reflect.get(target,propName);
	},
	deleteProperty(target,propName){
		console.log(`删除${propName}属性,更新页面`);
		return Reflect.deleteProperty(target,propName)
	}
})

p.name = 'tom'
```

### reactive对比ref
- 定义：
	- ref用来定义：基本类型数据
	- reactive用来定义：对象（或数组）类型数据
	- ref也可定义对象或数组（内部使用reactive）
- 原理
	- ref通过Object.defineProperty()来实现（基本类型）
	- reactive通过使用Proxy来实现响应式，并通过Reflect操作源对象内部的数据
- 使用
	- ref定义的数据需要使用xx.value来获取与修改数据
	- reactive定义的数据不需要使用.value

### setup的注意点
- setup会在beforeCreated之前执行，且this是undefined
- 参数：
	- props：包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 `this.$attrs`
	- context：上下文对象
		- -   attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 `this.$attrs`。
		-   slots: 收到的插槽内容, 相当于 `this.$slots`。
		-   emit: 分发自定义事件的函数, 相当于 `this.$emit`。

### 计算属性与监视
- computed函数：与vue2中computed配置功能一致
```js
import {computed} from 'vue'
setup(){
	//简写
	let fullName = computed(()=>{
		return person.firstName+'-'+person.lastName;
	})
	//完整写法
	let fullName = computed({
		get(){
			return person.firstName+'-'+person.lastName;
		},
		set(value){
			const nameArr = value.split('-');
			person.firstName = nameArr[0];
			person.lastName = nameArr[1];
		}
	})
}
```

### watch函数
- 功能与vue2一致
```js
import {watch} from 'vue';
setup(){
	//1. 监视ref定义的响应式数据
	watch(sum,(newValue,oldValue)=>{
		console.log("sum变化了",newValue,oldValue);
	});

	//2. 监视多个ref定义的响应式数据,此时newValue和oldValue都是数组形式
	watch([sum,msg],(newValue,oldValue)=>{
		console.log("sum或msg变化了",newValue,oldValue);
	});

	//3. 监视reactive定义的响应式数据,无法正确获取oldValue，且强制开启深度监视
	watch(person,(newValue,oldValue)=>{
		console.log("person变化了",newValue,oldValue);
	},{immediate:true,deep:false});

	//4. 监视reactive定义的响应式数据中的某个属性;写成函数形式（如果直接写person.name则监视的只是一个拷贝后的字符串，无法做到响应）
	watch(()=>person.name,(newValue,oldValue)=>{
		console.log("person的name变化了",newValue,oldValue);
	})

	//5. 监视多个reactive定义的数据的属性
	watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
		console.log("person的name或age变化了",newValue,oldValue);
	});

	//6. 特殊：此处监视的为person的属性job，为一个正常对象，而非reactive定义过的Proxy对象，所以深度监视配置项是有效的(默认非深度监视)
	watch(()=>person.job,(newValue,oldValue)=>{
		console.log("person的job变化了",newValue,oldValue);
	},{deep:true})

}
```
### watchEffect函数
- 声明回调函数后，watchEffect会自动监视回调中用到的属性
- 与computed类似，但computed注重计算出来的值，watchEffect无需返回值

```js
watchEffect(()=>{
	const x1 = sum.value;
	const x2 = person.value;
	console.log("person或sum被修改")
})
```

### 生命周期
#### vue2中的生命周期
- `beforeCreate`
- `created`
- `beforeMount`
- `mounted`
- `beforeUpdate`
- `updated`
- `beforeDestroy`
- `destroyed`
#### vue3中的生命周期
- `beforeDestroy`更改为`beforeUnmount`
- `destroy`更改为`unmounted`
- 在setup中可形如`onBeforeMount(()=>{console.log(xx)})`的方式进行使用

### 自定义hook函数
- 类似于vue2中的mixin
- 把setup中使用的composition API进行封装

```js
//useHelloWorld.js
import {onMounted} from 'vue';
export default function(){
	onMounted(()=>{
		console.log("Hello World!");
	})
}



//xx.vue
import useHelloWorld from './useHelloWorld.js'
...
setup(){
	useHelloWorld();
}

```

### toRef&toRefs
- 创建一个ref对象，其value值指向另一个对象中的某个属性
- 适用于要将响应式数据中的某个属性单独提供给外部使用

```js
setup(){
	const person = reactive({
		name: 'xx',
		age: 12,
	});
	const p2 = reactive({
		name2: 'xxx',
		age2: '25'
	})

	//对此name的修改相当于对person.name的修改（如果此处用person.name，则return的name为其字符串拷贝，无法实现响应式）
	return{
		name: toRef(person,'name'),
		...toRefs(p2); //返回p2所有属性的ref对象数组，使用...展开
	}
}
```

## 其他Composition API

### shallowReactive与shallowRef
- shallowReactive：只处理对象最外层的响应式（浅响应式，非深度；如果只需要监视一个结构比较深的对象的表层属性，则可以使用这个API）
- shallowRef：只处理基本数据类型的响应式，不对对象的响应式处理

### readonly与shallowReadonly
- readonly：让一个响应式数据变为只读的（即无法修改，且为深度只读）
- shallowReadonly：让一个响应式数据变为浅层只读（即深层次数据可以修改）

### toRaw与markRaw
- toRaw：将一个由reactive生成的响应式对象转化为普通对象（即对此对象的操作不会引起页面更新）
- markRaw：标记一个对象，使其永远不会被转化成响应式对象（比如一些从第三方库中引入的数据，一般不希望它被设置为响应式；再如一些不会发生变化的数据，也不希望它变成响应式来消耗性能）

### customRef
- 可用于创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显示控制

防抖：
```js
import {ref,customRef} from 'vue';
...
setup(){
	function myRef(value,delay){
		let timer;
		//返回一个customRef函数定义的对象（相当于ref()返回的对象）
		return customRef((track,trigger)=>{
			return{
				get(){
					track();  //标记/收集依赖，当此数据触发更新时，使用此数据的位置皆可更新
					return value;
				},
				set(newValue){
					clearTimeout(timer);
					timer = setTimeout(()=>{
						value = newValue;
						trigger();  //触发更新
					},delay)
				}
			}
		})
	}
	//使用
	let keyword = meRef('hello',500)
	return {keyword}
}
```


### provide 与 inject
- 实现祖先组件与后代组件间的通信
- 在父组件中使用provide来提供数据，后代组件中使用inject选项来使用数据

```js
//father.vue
let p = reactive({name:"ss",age:18});
provide('person',p);


//child.vue
const p = inject('person');
return{p}

```

### 响应式数据的判断
- isRef：检查一个对象是否为一个ref对象
- isReactive：检查一个对象是否是由reactive创建的响应式代理
- isReadonly：检查一个对象是否是由readonly创建的只读代理
- isProxy：检查一个对象是否是由reactive或者readonly方法创建的代理

## 新的组件
### Fragment
- 在vue2 中，组件必须有一个根标签
- 在vue3中，组件可以没有根标签，内部会将多个标签包含在一个Fragment虚拟元素中
- 效果：减少标签层级，减少内存占用

### Teleport
- 可将组件的html结构移动到指定的位置
```vue
<teleport to="body">
	<div class="dialog">DIALOG</div>
	<!-- 此html结构会被插入到body内 -->
</teleport>
```

### Suspense
- 等待异步组件时渲染一些额外内容，让应用有更好的用户体验

#### 异步引入组件
```js
import {defineAsyncComponent} from 'vue'
const Child = defineAsyncComponent(()=>import('./components/Child.vue'));

```
#### 使用Suspense包裹组件，并配置default与fallback
```html
<template>
	<div class="app">
		<div>App</div>
		<Suspense>
			<template v-slot:default>
				<Child/>
			</template>
			<template v-slot:fallback>
				<h3>加载中...</h3>
			</template>
		</Suspense>
	</div>
</template>
```

## 其他变化

### 全局API转移

- 将原来Vue身上的API转移到了app身上（如下）

| Vue                      | app                         |
| ------------------------ | --------------------------- |
| Vue.config.xxx           | app.config.xxx              |
| Vue.config.productionTip | 移除                        |
| Vue.component            | app.conponent               |
| Vue.directive            | app.directive               |
| Vue.mixin                | app.mixin                   |
| Vue.use                  | app.use                     |
| Vue.prototype            | app.config.globalProperties |

### 其他改变

- data选项应始终被声明为一个函数
- 过渡类名的更改

```css
/*vue2*/
.v-enter,.v-leave-to{}
.v-leave,.v-enter-to{}
/*vue3*/
.v-enter-from,.v-leave-to{},
.v-leave-from,.v-enter-to{}
```

- 移除keyCode作为v-on的修饰符，同时不再支持`config.keyCodes`
- 移除`v-on.native`修饰符
- 移除过滤器（filter）
- ...