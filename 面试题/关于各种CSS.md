# 记录CSS常用布局以及常用代码

## flex

> 居中

```css
  display: flex;
  justify-content: center;
  align-items: center;
```

## transform

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
    transform: translate(-50%,-50%);
}
```
