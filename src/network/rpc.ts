import appStore from '@/pinia'
// import taroJSBridge from '@/utils/util_js_bridge'

export default async (
  operationType = '',
  requestBody = {},
  requestType = 'POST',
  _errorPage = '',
  _errorType = '',
  _timeout = 20,
  pathArry = []
) => {
  return await new Promise(resolve => {
    let params: any = [
      {
        _requestBody: requestBody
      }
    ]
    if (requestType === 'GET') {
      params = [requestBody]
    } else if (requestType === 'POST_WITHOUT_BODY') {
      params = [requestBody]
    }

    if ((requestType === 'POST' || requestType === 'POST_WITHOUT_BODY') && pathArry.length > 0) {
      const temp = params[0]
      Object.assign(temp, requestBody)
    }

    if (requestBody instanceof Array) {
      params = requestBody
    }

    const timestamp = new Date().getTime()
    const requestId = operationType + timestamp

    // taroJSBridge(
    //   'rpc',
    //   {
    //     operationType: operationType,
    //     requestData: params,
    //     timeout: timeout,
    //     headers: {
    //       authtoken: 'ebei_crm',
    //       token: appStore.useUserStore.userInfo.token,
    //       requestId: requestId,
    //       sensorsanonymousid: ''
    //     }
    //   },
    //   res => {
    //     resolve(res)
    //   }
    // )
  })
}
