const canNest = (arr1, arr2) => {
  const min1 = Math.min(...arr1)
  const min2 = Math.min(...arr2)
  const max1 = Math.max(...arr1)
  const max2 = Math.max(...arr2)
  return min1 > min2 && max1 < max2
}

const binary = (decimal) => {
  if (decimal === 0) return 0
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

const sortDrinkByPrice = () => {
  
}