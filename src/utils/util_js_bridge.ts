export const mPaaSJSAPICall = (apiName: string, params?, success?, fail?) => {
  // #ifdef H5
  if (window.AlipayJSBridge) {
    return window.AlipayJSBridge.call(apiName, params, success, fail)
  } else {
    return Promise.reject(new Error('请在mpaas中打开'))
  }
  // #endif

  // #ifdef MP-ALIPAY
  return my.call(apiName, params, success, fail)
  // #endif
}

export const mPaaSJSAPIOn = (apiName: string, callback) => {
  // document.addEventListener('AlipayJSBridgeReady', () => {}, false)
  // #ifdef H5
  document.addEventListener(
    apiName,
    res => {
      callback(res)
    },
    false
  )
  // #endif

  // #ifdef MP-ALIPAY
  return my.on(apiName, res => {
    callback(res)
  })
  // #endif
}

// export default mPaaSJSAPICall
