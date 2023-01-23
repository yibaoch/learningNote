const arr = [1, 2, 3, 4, 4, 5, 1, 1, 1, 2]

// 1. set
// const ac = [...new Set([...arr])]

// 2. for for splice 

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1)
      j--
    }
  }
}

function acc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        j--
      }
    }
  }
  return arr;
}


acc(arr)

function abc(arr: any[]) {
  const res:any[] = []
  arr.forEach((i ,index) => {
    res.indexOf(i) === -1 ? res.push(i)
  })
}