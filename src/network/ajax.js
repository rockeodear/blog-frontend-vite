import AxIos from 'axios'
import qs from 'qs'
import { authorization, getToken } from 'utils/auth'

const ajax = AxIos.create({
  baseURL: '',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8;',
  },
})

ajax.interceptors.request.use(
  config => {
    console.log(config)

    const meta = config.meta || {}

    if (meta.isFormRequest) {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      config.data = qs.stringify(config.data)
    }
    const token = getToken()
    if (token) {
      config.headers[authorization] = token
    }

    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default ajax
