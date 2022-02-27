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
