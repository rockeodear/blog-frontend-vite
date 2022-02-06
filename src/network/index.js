/**
 * 成功返回码
 */
import { ElLoading } from 'element-plus'
import qs from 'qs'

const RESPONSE_CODE_SUCCESS = 200

const requestCommon = (options, baseRequest) => {
  let method = options.method || 'get'
  method = method.toLocaleLowerCase()
  // 定制配置
  let config = options
  config.meta = Object.assign(
    {
      isFormRequest: false, // post请求是否使用form表单形式传值
      loadingText: false, // 加载提示或者false
    },
    options.meta ?? {}
  )
  let headers = {
    Accept: 'application/json',
  }
  if (method === 'post' || method === 'put' || method === 'patch') {
    headers['Content-Type'] = 'application/json;charset=UTF-8'
  }
  let data = config.data
  if (data instanceof FormData) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  // Object.assign不能深扩展，而headers需要
  options.headers = Object.assign({}, headers, options.headers)
  let loadingIns =
    config.meta.loadingText &&
    ElLoading.service({
      lock: true,
      fullscreen: false,
      text: config.meta.loadingText,
    })

  return baseRequest(
    Object.assign(
      {
        headers,
        timeout: 6000,
        paramsSerializer: function(params) {
          return qs.stringify(params, { arrayFormat: 'repeat' })
        },
      },
      options
    )
  )
    .then(
      response => {
        let data = response.data
        let status = data.code || 200
        let isSuccess = status === RESPONSE_CODE_SUCCESS
        if (isSuccess) {
          return data
        }
        return Promise.reject(new Error(data.msg))
      },
      error => {
        let res = error.response || {}
        let status = (res && res.status) || ''
        if (status === 401) {
          // handleLogout()
          return Promise.reject(error)
        }
        console.log(error)
        // 自定义错误策略
        return Promise.reject(error)
      }
    )
    .finally(() => {
      loadingIns && loadingIns.close()
    })
}

// 主请求
const request = options => {
  return requestCommon(options, ajax)
}

export default request
