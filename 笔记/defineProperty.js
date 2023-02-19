const defineproperty = () => {
  let obj = {}

  // let a = 3

  Object.defineProperties(obj, {
    a: {
      get() {
        return "a is" + a
      },
      set(newVal) {
        console.log(newVal);
      }
    }
  })

  return obj
}


const o = defineproperty()
