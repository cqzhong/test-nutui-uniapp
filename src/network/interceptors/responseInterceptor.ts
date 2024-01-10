import Request from 'luch-request'

import { errCodeMap } from '../config'

// 当请求出现错误时候是否需要提示，默认为true
let isPrompt = true

/**
 * 处理异常
 */
const handleException = response => {
  let content: string | null = null
  if (response.code === -2) {
    content = '登录信息已过期，请重新登录'
    uni.showModal({
      content,
      showCancel: false,
      confirmText: '确定',
      success: _res => {}
    })
  } else if (response.code === -2 || response.code === -3) {
    content = 'token参数校验失败，请确认请求来源'
    uni.showModal({
      content,
      showCancel: false,
      confirmText: '确定',
      success: _res => {}
    })
  } else {
    const status = response.code ?? response.token_code ?? response.status ?? response.result ?? response.resultCode ?? response.errorCode
    const toastMsg = response.message ?? response.msg ?? errCodeMap.get(status) ?? ''
    showToast(toastMsg)
  }
  return {
    status: response.token_code ?? response.code ?? response.status,
    message: content ?? response.message ?? response.msg,
    data: response.data
  }
}

const showToast = toastMsg => {
  if (!toastMsg || !isPrompt) return
  uni.showToast({
    title: toastMsg,
    icon: 'none'
  })
}

const responseInterceptor = (http: Request) => {
  http.interceptors.response.use(
    (response: any) => {
      isPrompt = response.config.custom.isPrompt ?? true
      /* 对响应成功做点什么 可使用async await 做异步操作*/
      const responseData = response.data
      if (!responseData) return Promise.reject({ msg: '', data: null, code: -1 })
      const status =
        responseData.code ?? responseData.token_code ?? responseData.status ?? responseData.result ?? responseData.resultCode

      if (![200, 0].includes(Number(status))) {
        return Promise.reject(handleException(responseData))
      }
      return Promise.resolve(responseData)
    },
    response => {
      /*  对响应错误做点什么 （statusCode !== 200）*/
      // console.log(222, response)
      const status = response.statusCode ?? -1
      const errMsg = errCodeMap.get(status) ?? ''
      showToast(errMsg)
      return Promise.reject(response.data)
    }
  )
}

export default responseInterceptor
