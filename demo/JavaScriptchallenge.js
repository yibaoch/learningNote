const canNest = (arr1, arr2) => {
  const min1 = Math.min(...arr1)
  const min2 = Math.min(...arr2)
  const max1 = Math.max(...arr1)
  const max2 = Math.max(...arr2)
  return min1 > min2 && max1 < max2
}

const binary = (decimal) => {
  if (decimal === 0) return '0'
  const arr = []
  while (decimal !== 0) {
    let yushu = decimal % 2
    decimal = Math.floor(decimal / 2)
    arr.push(yushu)
  }
  return arr.reverse().join('')
}

const matchHouses = (step) => {
  if (step === 0) return 0
  if (step === 1) return 6
  return 6 + (step - 1) * 5
}

const shiftToLeft = (x, y) => {
  const _x = x.toString(2)
  let _y = ''
  for (let i = 0; i < y; i++) _y += '0'
  const res = _x + _y
  return parseInt(res, 2)
}

const minMax = (arr) => {
  let min = arr[0]
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i]
    if (max < arr[i]) max = arr[i]
  }
  return [min, max]
}

const detectWord = (str) => {
  const res = []
    ;[...str].forEach(char => {
      char.charCodeAt() >= 97 && res.push(char)
    })
  return res.join('')
}

const timeForMilkAndCookies = (date) => date.getMonth() === 11 && date.getDate() === 24

const largestSwap = num => {
  let c = num + ''
  return c[0] >= c[1]
}

const sortDrinkByPrice = obj => obj.sort((a, v) => a.price - v.price)

const removeRepeats = str => {
  const arr = [...str]
  const res = []
  arr.forEach(char => res[res.length] !== char && res.push(char))
  return res.join('')
}

const whichIsLarger = (fn1, fn2) => fn1() < fn2() ? 'g' : fn1() > fn2() ? 'f' : 'neither'

// Create a function that takes two arrays and insert the second array in the middle of the first array.
const tuckIn = (arr1, arr2) => {
  let res = []
  const bin = [...arr1, ...arr2]
  // bin.forEach(a => {
  //   if (Array.isArray(a)) res.push(...a)
  //   else res.push(a)
  // })
  return bin
}

const potatoes = s => s.match(/potato/g).length;

// Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.
const numberSquares = num => {
  let res = 0
  for (let i = num; i > 0; i--)
    res += (i ** 2)
  return res
}

const countTrue = (arr) => {
  return arr.filter(Boolean).length
}

// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
const sevenBoom = arr => arr.join('').includes('7') ? "Boom!" : "there is no 7 in the array"


const seriesResistance = (arr) => {
  return arr.reduce((rt, rtr) => rt + rtr, 0)
}

const chunk = (arr, size) =>
  arr.reduce(
    (acc, e, i) => {
      return i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
    }, []
  );

const shuffle = arr => {
  let m = arr.length;
  while (m > 1) {
    let index = Math.floor(Math.random() * m--);
    [arr[m], arr[index]] = [arr[index], arr[m]]
  }
  return arr
}

const bugFixFinal = string => string.replaceAll('bug', 'flower')

const firstJSON = (key, value) => {
  let text = `{"${key}" : "${value}"}`;
  return JSON.parse(text);
}

const a = firstJSON('difficulty', '42')
console.log(a);
