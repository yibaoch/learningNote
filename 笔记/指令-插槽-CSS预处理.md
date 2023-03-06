# 20230120

## 自定义指令

### 局部注册

> 局部注册的自定义指令，默认在子组件内生效，子组件内无需重新注册即可使用父组件的自定义指令。

```typescript
===对象式写法===
// 注意 directives 和 setup 同级
directives: {
    // `directives` 下的每个字段名就是指令名称
    highlight: {
      // 钩子函数
      mounted(el, binding) {
        el.style.backgroundColor =
          typeof binding.value === 'string' ? binding.value : 'unset'
      },
    },
},

<!-- 这个使用默认值 `unset` -->
<div v-highlight>{{ msg }}</div>

<!-- 这个使用传进去的黄色 -->
<div v-highlight="`yellow`">{{ msg }}</div>
```

```typescript
===函数式写法===
export default defineComponent({
  directives: {
    highlight(el, binding) {
      el.style.backgroundColor =
        typeof binding.value === 'string' ? binding.value : 'unset'
    },
  },
})
```

---

## 插槽

>父组件

```JavaScript
<template>
  <Child>
    <p>这是插槽内容</p>
  </Child>
</template>
```

>子组件

```JavaScript
<template>
  <slot />
</template>
```

### 具名插槽

>父组件
>> v-slot:name 可以缩写为 #name

```JavaScript
<template>
  <Child>
    <template v-slot:title>
      <h1>这是标题</h1>
    </template>
  </Child>
</template>
```

>子组件

```JavaScript
<template>
  <slot name="title"/>
</template>
```

---

## CSS样式和预处理器

### 使用 v-bind 动态修改 style

```JavaScript
const cssr = ref<string>('red')

<style scoped>
.class {
  color: v-bind(cssr);
}
</style>
```

### 样式表的组件作用域

+ Style Scoped

> 在\<style/> 上添加 scoped 属性
>
>编译后，虚拟 DOM 都会带有一个 data-v-xxxxx 这样的属性，其中 xxxxx 是一个随机生成的 Hash ，同一个组件的 Hash 是相同并且唯一的
>
> 添加 scoped 生成的样式，只作用于当前组件中的元素，并且权重高于全局 CSS ，可以覆盖全局样式

+ Style Module

```css

> 在<style/> 上添加 module 属性 ⬇️
<style module>
.class {
  color: red
}
<style/>
```

> 用法⬇️

```html
<h1 class="$style.class">im yibaochen</h1>
```

> 发现一个事情 如果用 module 这种, 写的样式都需要自己手动绑定
>
> 而且好像不能和 scoped 方式混用

+ useCssModule

```JavaScript
<template>
  <div v-html="content"></div>
</template>

const style = useCssModule()

const content = `
  <p class="${style.msg}">
    <span class="${style.text}">Hello World! —— from v-html</span>
  </p>`
```

> 还可以给 module 命名 -> module="classes"

```css
<style module="classes">
/* ... */
</style>

```

```JavaScript
const style = useCssModule('classes')
```
