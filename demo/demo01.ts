const quchong01 = (arr: any[]): any[] => {
  const res: any[] = []
  arr.forEach(i => {
    if (res.indexOf(i) === -1) {
      res.push(i)
    }
  })
  return res
}

console.log(quchong01([1, 2, 2, 2, 2, 3, 4]));

