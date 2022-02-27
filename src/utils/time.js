import dayjs from 'dayjs'
/**
 * 整点定时函数
 * @param callback
 */
export const hourlyHandle = callback => {
  let seconds = dayjs().second()
  let ms = 1000 - dayjs().millisecond()
  setTimeout(function() {
    inval()
  }, 60000 - seconds - ms)

  function inval() {
    if (dayjs().minute() === 0) {
      callback()
    }
    setTimeout(function() {
      inval()
    }, 60000)
  }
}
