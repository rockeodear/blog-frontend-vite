import dayjs from 'dayjs'

export const authorization = 'auth'

let inFifteenDays = expires => {
  return dayjs()
    .add(expires, 'day')
    .toDate()
}

export function getToken() {
  return Cookies.get(authorization)
}

export function setToken(token, expires) {
  return Cookies.set(authorization, token, { expires: inFifteenDays(expires) })
}

export function removeToken() {
  return Cookies.remove(authorization)
}
