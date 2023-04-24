# vuejs-challenges note

## ref 全家桶

### 如何检查是否是一个ref对象

```
isRef()
```

### unref()

如果参数是 ref，则返回内部值，否则返回参数本身。

```
val = isRef(val) ? val.value : val 
```

## 可写的计算属性

```javascript
const count = ref(1)
cosnt plusOne = computed({
  get() {
    return count.value 
  },
  set(newVal) {
    count.value = newVal
  }
})
```

## watch family

### 确保副作用函数只执行一次
> watch函数调用后返回 StopHandle方法，调用该方法停止监听，以此达到之监听一次的效果。
```javascript
const stopWatch = watch(count, () => {
  console.log("Only triggered once")
  stopWatch()
})

count.value = 1
setTimeout(() => count.value = 2)
```

### 确保副作用函数被正确触发

> watch()里面配置{ flush: 'post' } 可以保证被推迟到渲染之后调用



