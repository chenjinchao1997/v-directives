export default function throttle (func, wait) {
  let timeout
  return function () {
    let context = this
    let args = arguments
    if (!timeout) {
      func.apply(context, args)
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
    }
  }
}
