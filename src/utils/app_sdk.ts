/**
 * 返回用户信息.
 *
 * @return {String} name - 用户名称
 * @return {String} tenantId - 当前租户id
 * @return {String} tenantName - 当前租户名称
 * @return {String} employeeId - 员工 ID
 * @return {String} accountId - 账号 ID
 * @return {String} token - 登录token
 * @return {String} logoUrl - 头像
 * @return {Stirng} orgId - 当前组织id 可能为null
 * @return {Stirng} orgName - 当前组织名称 可能为null
 */
// 壳返回
export const setUserInfo = () => {
  // console.log(import.meta.env.MODE, 111)
  // 判断是否在壳中，获取壳的用户信息
  return new Promise((resolve, _reject) => {
    // #ifdef MP-ALIPAY || H5
    uni.$mPaaSJSAPICall(import.meta.env.VITE_GET_USER_INFO, {}, res => {
      // console.log('env.MODE', import.meta.env.MODE)
      console.log('lJGetUserInfo', res)
      const { accountInfo, loginInfo, userInfo = {} } = res
      return resolve({
        name: userInfo?.name ?? '',
        logoUrl: userInfo?.logoUrl ?? '',
        phone: userInfo?.mobile ?? '',
        tenantName: accountInfo?.name ?? '',
        tenantId: accountInfo?.tenantId ?? '',
        token: loginInfo?.token ?? '',
        accountId: loginInfo?.accountId ?? '',
        employeeId: accountInfo?.employeeId ?? '',
        orgId: userInfo?.orgId ?? '',
        orgName: userInfo?.orgName ?? ''
      })
    })
    // #endif
    // 判断是开发环境
    if (import.meta.env.MODE === 'development') {
      return resolve({
        name: '李小松',
        logoUrl: '',
        tenantId: '10000',
        tenantName: '旭辉永升服务',
        token: '3aa456c815c7465a842881c92de9afdf',
        accountId: 'AC23082113544499171860244',
        employeeId: 'EP10000-543441344964612140',
        orgId: 'OG10000-543020192760877076',
        orgName: '霖久科技公司'
      })
    }
  })
}
// 返回租户列表
export const getTenantList = () => {
  return new Promise((resolve, _reject) => {
    // #ifdef MP-ALIPAY || H5
    uni.$mPaaSJSAPICall(import.meta.env.VITE_GET_USER_ID_LIST, {}, res => {
      console.log('lJGetUserIdList', res)
      return resolve(res)
    })
    // #endif
    // 判断是开发环境
    if (import.meta.env.MODE === 'development') {
      return resolve([])
    }
  })
}
