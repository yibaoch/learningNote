# 记录CSS常用布局以及常用代码

## 居中

> flex

```css
  display: flex;
  justify-content: center;
  align-items: center;
```

> transform

```css
 .main{
    text-align: center;
    background-color: #fff;
    border-radius: 20px;
    width: 300px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    /*  */
    transform: translate(-50%,-50%);
}
```

## 如何让元素固定在页面底部？有哪些比较好的实践？

我建议使用fixed

## 用css画一个太阳

画出来了 在demo里面


