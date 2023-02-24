# Vue-challenge 

> 通过这个获取Vue的知识点

---
## < Teleport /> 

是一种能够将我们的模板移动到 DOM 中 Vue app 之外的其他位置的技术，就有点像哆啦A梦的“任意门”

```JavaScript
 <teleport to="#teleport-target">
```
---

## v-once

控制渲染一次
---

## 动态css 

利用 v-bind(变量)

```css
<style scoped>
p {
  color: v-bind(theme);
}
</style>
```
---

## 全局CSS :global

这个东西其实是 CSS Modules 里面的内容 

```css
:global(body) {
   width: 100vw;
  height: 100vh;
  background-color: burlywood;
}
```

## h()

```JavaScript
h(
  'ul',
  list.map()
)
```


