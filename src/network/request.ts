import Request from 'luch-request'
import { MethodEnum, baseURL } from './config'

// 请求前拦截器
import requestInterceptor from './interceptors/requestInterceptor'
// 请求结果响应拦截器
import responseInterceptor from './interceptors/responseInterceptor'

const http = new Request({
  baseURL: baseURL(),
  timeout: 15000,
  custom: {
    isPrompt: true // 默认 true 说明：本接口抛出的错误是否提示
  }
})
requestInterceptor(http)
responseInterceptor(http)

class HttpRequest {
  // 重新设置全局配置
  setConfig(params = {}) {
    http.setConfig(config => {
      Object.assign(config, params)
      return config
    })
  }

  // 中间件请求
  middleware(method = MethodEnum.POST, url, data = {}, options = {}) {
    return http.middleware({ method, url, data, ...options })
  }

  // post请求
  post(url, data = {}, options = {}) {
    return this.middleware(MethodEnum.POST, url, data, options)
  }

  // get请求
  get(url, data = {}, options = {}) {
    return this.middleware(MethodEnum.GET, url, data, options)
  }
}

export default new HttpRequest()
