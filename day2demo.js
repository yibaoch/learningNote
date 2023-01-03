//函数式的版本
const find = (f => f(f))(f =>
  (next => (x, y, i = 0) =>
    (i >= x.length) ? null :
      (x[i] == y) ? i :
        next(x, y, i + 1))((...args) =>
          (f(f))(...args)))

let arr = [0, 1, 2, 3, 4, 5]
console.log(find(arr, 2))
console.log(find(arr, 8))