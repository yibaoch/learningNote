// 防抖：对于高频率触发事件，在事件触发n秒后才执行回调函数，如果n秒内继续触发则重置定时器，一直到停止触发后n秒执行回调函数。

const debounce = (fn, delay = 3000) => {
  let timer = null
  return () => {
    if(timer !== null) clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}

const a = () => {
  console.log('11');
}

debounce(a, 1000)