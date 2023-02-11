---
title: 给分类与标签页面添加导航栏
date: 2022-03-13
tags: 
- butterfly
- 博客改造
category: 🎀博客
cover: https://img.dorakika.cn/md/20220313.png
slug: '20220313'
---

> [预览](/tags/🏠博客改造/)

## 来源

在逛博客的过程中，发现几个小伙伴的标签\分类页面都有一个导航条，可以在标签\分类页面直接跳转到其他标签\分类

比如：[HEO](https://blog.zhheo.com/categories/%E7%BB%8F%E9%AA%8C%E5%88%86%E4%BA%AB/)、[Eurkon](https://blog.eurkon.com/categories/%E9%AD%94%E6%94%B9%E6%95%99%E7%A8%8B/)

## 思路

- 对于页面结构，可以使用hexo&butterfly的函数进行生成
- 当前分类\标签选中：这个可以根据当前的URL来判断是哪一个标签\分类，然后将其加上类checked
- 最后给导航条添加一个滑动

## 魔改

### 结构与事件

- 进入`...theme/butterfly/layout/category.pug`,修改如下

```diff
block content
  if theme.category_ui == 'index'
    include ./includes/mixins/post-ui.pug
    #recent-posts.recent-posts.category_ui
      +postUI
      include includes/pagination.pug
  else
    include ./includes/mixins/article-sort.pug
    #category
+      .category-list-bar
+        a.iconfont.icon-fenlei(href="/categories/")
+        .lists!=list_categories()
+        script.
+          document.querySelectorAll('.category-list .category-list-item').forEach(item=>{
+          if(decodeURI(window.location.href.split('/')[4])===item.querySelector('a').innerHTML){
+          item.className += ' checked'
+          }
+          })
+          window.addEventListener('load',function(){document.querySelector('.category-list .category-list-item.checked').scrollIntoView();document.querySelector('#category').scrollIntoView();});
+          document.querySelectorAll('#category .lists')[0].onmousewheel = function(e){
+          if(e.deltaY>0){
+          this.scrollLeft+=20;
+          }else{
+          this.scrollLeft-=20;
+          }return false;}
      .article-sort-title= _p('page.category') + ' - ' + page.category
      +articleSort(page.posts)
      include includes/pagination.pug
```

- `list_categories()`会返回一个所有分类的列表
- 脚本中为判断URL并添加checked & 绑定鼠标滚动事件

---

- 进入`...theme/butterfly/layout/tag.pug`，修改如下

```diff
extends includes/layout.pug

block content
  if theme.tag_ui == 'index'
    include ./includes/mixins/post-ui.pug
    #recent-posts.recent-posts
      +postUI
      include includes/pagination.pug
  else
    include ./includes/mixins/article-sort.pug
+    #tag
+      .tag-list-bar
+        a.iconfont.icon-biaoqian(href="/tags/")
+        .lists
+          ul!=cloudTags({source: site.tags, minfontsize: 1, maxfontsize: 1, limit: 0, unit: 'rem'})
+        script.
+          document.querySelectorAll('#tag .lists a').forEach(item=>{
+          if(decodeURI(window.location.href.split('/')[4])===item.innerHTML){
+          item.className += 'checked';
+          }
+          })
+          window.addEventListener('load',function(){document.querySelector('.lists a.checked').scrollIntoView();document.querySelector('#tag').scrollIntoView();});
+          document.querySelectorAll('#tag .lists')[0].onmousewheel = function(e){
+          if(e.deltaY>0){
+          this.scrollLeft+=20;
+          }else{
+          this.scrollLeft-=20;
+          }return false;}
      .article-sort-title= _p('page.tag') + ' - ' + page.tag
      +articleSort(page.posts)
      include includes/pagination.pug
```

- 各部分功能同上

### 样式参考

```css
/*单个分类*/
.page #category .category-list-bar,
#tag .tag-list-bar{
	width: 100%;
	height: 3rem;
	background-color: var(--kk-card-bg);
	border-radius: 0.5rem;
	line-height: 3rem;
	display: flex;
}
.page #category .category-list-bar .iconfont,
#tag .tag-list-bar .iconfont{
	width: 3rem;
	height: 3rem;
	text-align: center;
	font-size: 1.25rem;
}
.page #category .category-list-bar .lists,
#tag .tag-list-bar .lists{
	width: calc(100% - 3rem);
	overflow: scroll;
}
.page #category .category-list-bar .lists::-webkit-scrollbar,
#tag .tag-list-bar .lists::-webkit-scrollbar{
	width: 0;
	height: 0;
}
.page #category .category-list-bar .lists ul,
#tag .tag-list-bar .lists ul{
	width: max-content;
	height: 3rem;
	display: flex;
	align-items: center;
}
.page #category .category-list-bar .lists .category-list .category-list-item,
#tag .tag-list-bar .lists ul a{
	padding: 0 0.4rem;
	margin: 0 0.3rem;
	height: 2rem;
	line-height: 2rem;
	/*background: #fff;*/
	border-radius: 0.4rem;
	transition: 0.2s;
}
.page #category .category-list-bar .lists .category-list .category-list-item:hover,
.page #category .category-list-bar .lists .category-list .category-list-item.checked,
#tag .tag-list-bar .lists ul a:hover,
#tag .tag-list-bar .lists ul a.checked{
	background-color: var(--kk-border-white);
}

.page #category .category-list-bar .lists .category-list .category-list-item span{
	display: none;
}
```

