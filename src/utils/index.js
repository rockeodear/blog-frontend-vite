/**
 *
 * var str2 = "js实现用{1}自符串替换占位符{1} {2}  {0} ".format("I","LOVE","YOU");
 * @param str
 * @param args
 * @returns {*}
 */
export function format(str, ...args) {
  if (args.length === 0) return str
  for (let key in args) {
    str = str.replace(new RegExp('\\{' + key + '\\}', 'g'), args[key])
  }
  return str
}

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 * cancel: 取消节流
 */
export function debounce(func, wait, immediate) {
  var timeout, result

  var debounced = function() {
    var context = this
    var args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout
      timeout = setTimeout(function() {
        timeout = null
      }, wait)
      if (callNow) result = func.apply(context, args)
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args)
      }, wait)
    }
    return result
  }

  debounced.cancel = function() {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}

/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param options  leading：false 表示禁用第一次执行
 *                 trailing: false 表示禁用停止触发的回调
 *
 */
export function throttle(func, wait, options) {
  var timeout, context, args, result
  var previous = 0
  if (!options) options = {}

  var later = function() {
    previous = options.leading === false ? 0 : new Date().getTime()
    timeout = null
    func.apply(context, args)
    if (!timeout) context = args = null
  }

  var throttled = function() {
    var now = new Date().getTime()
    if (!previous && options.leading === false) previous = now
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
  }
  return throttled
}

if (!Object.entries)
  Object.entries = function(obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i) // preallocate the Array
    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]]

    return resArray
  }
