import Request from 'luch-request'
import appStore from '@/pinia'

const requestInterceptor = (http: Request) => {
  http.interceptors.request.use(
    async (config: any) => {
      // 可使用async await 做异步操作
      // if (import.meta.env.MODE !== 'development') {
        if (!appStore.useUserStore.userInfo.tenantId) {
          const userInfo: any = await appStore.useUserStore.init()
          ;['employeeId', 'tenantId', 'accountId', 'mobile', 'account'].forEach(key => {
            if (config.data.hasOwnProperty(key) && !config.data[key]) {
              let realKey = key
              if (key === 'mobile') realKey = 'realMobile'
              if (key === 'account') realKey = 'accountId'
              config.data[key] = unref(userInfo)[realKey]
            }
          })
        }
        // }
        if (!config?.header?.['X-Auth-Token'] && appStore.useUserStore.userInfo.token) {
          config.header = {
            ...config.header,
            'X-App-Id': '1',
            'X-Auth-Token': appStore.useUserStore.userInfo.token,
            'X-Tenant-Id': appStore.useUserStore.userInfo.tenantId + '', // 打包成mpaas 如果是数字类型会被自动去除
            'X-Client-Type': 'app'
          }
        }
        // console.log('config.header----------: ', config.header)
        config.header = {
          ...config.header
        }
      // if (!token) {
      //   // 如果token不存在，return Promise.reject(config) 会取消本次请求
      //   return Promise.reject(config)
      // }
      return config
    }
  )
}

export default requestInterceptor
