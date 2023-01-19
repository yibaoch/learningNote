# 20230118

## String.prototype.split()

>把字符串按照传参分开 然后放到一个数组里

```JavaScript
const str = 'The quick brown fox jumps over the lazy dog.';`
str.split(' ')
```

---

## .gitignore

让node_module 里面的东西不提交
在里面加上  \*node_modules/*

---

## 对象的类型 -> 接口 (interface)

  对象的类型定义通常采用 **Upper Camel Case**

```typescript
  type UserItem = {
  // ...
  }

  interface UserItem {
  // ...
  }
```

## 可选属性 用 ?

  ```typescript
  interface UserItem {
    name: string
    // 这个属性变成了可选
    age?: number
  }

const petter: UserItem = {
  name: 'Petter',
}
  ```

---

## Omit<Type, Keys>

>从Type中选择所有属性 然后删除Keys(可以是一个并集)构成一个类型

  ```typescript
  interface Todo {
    title: string,
    description: string,
    completed: boolean,
    weiyi: string,
    chen: number
  }

  type TodoPreview = Omit<Todo, "weiyi" | "chen">

  const myTodo: TodoPreview = {
    title: 'chen',
    description: 'nul',
    completed: false
  }
  ```

---

## 函数

  ?可选参数必须排在必传参数的后面。

  ```typescript
  const func = (name: string, age: number, sex?: boolean): void =>  console.log(name, age)

  ```

---

## 类型断言

>当一个变量应用了 联合类型 时，在某些时候如果不显式的指明其中的一种类型，可能会导致后续的代码运行报错。

---
