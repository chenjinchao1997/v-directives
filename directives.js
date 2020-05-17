import debounce from './debounce.js'
import throttle from './throttle.js'
export default {
  'debounce': {
    bind: function (el, { value, arg, modifiers }, vnode) {
      const delay = modifiers.long ? 1000 : modifiers.short ? 100 : 300
      const fn = debounce(value, delay)
      if (modifiers.native) {
        el.addEventListener(arg, fn.bind(vnode.context))
      } else {
        vnode.componentInstance.$on(arg, fn.bind(vnode.context))
      }
    }
  },
  'throttle': {
    bind: function (el, { value, arg, modifiers }, vnode) {
      const delay = modifiers.long ? 1000 : modifiers.short ? 100 : 300
      const fn = throttle(value, delay)
      if (modifiers.native) {
        el.addEventListener(arg, fn.bind(vnode.context))
      } else {
        vnode.componentInstance.$on(arg, fn.bind(vnode.context))
      }
    }
  }
}
