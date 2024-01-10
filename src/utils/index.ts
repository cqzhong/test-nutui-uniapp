// mescroll组件通用参数
export const getMescrollOptions = () => {
  return {
    down: {
      auto: true // 是否在初始化完毕之后自动执行一次下拉刷新的回调
    },
    up: {
      auto: true, // 是否在初始化完毕之后自动执行一次上拉加载的回调 当配置为false时,建议down的auto也为false,因为downCallback默认调用resetUpScroll,最终还会触发upCallback 如果是想实现返回刷新页面,那么其实不需要设置auto为false, 详情请看 >>
      textNoMore: '无更多数据', // 没有更多数据的提示文本
      noMoreSize: '5', // 配置列表的总数量要大于等于1条才显示'empty'下的tip提示
      empty: {
        use: true, // 是否启用
        icon: null, // 空布局的图标路径 (支持网络路径)
        tip: '暂无相关数据', // 提示文本
        btnText: '', // 按钮文本
        fixed: false, // 是否使用定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,所以最终还是会降级为absolute)
        top: '100rpx', // fixed定位的top值 (完整的单位值,如"100rpx", "10%";)
        zIndex: 99 // fixed定位z-index值
      }
    }
  }
}

// 通用的filter展示option中的text/label
export const getCommonFilter = (value: string | number | boolean, options: any) => {
  if (!Array.isArray(options)) return ''
  if (typeof value === 'undefined') return ''
  const obj: any = {}
  options.forEach((element: any) => {
    obj[element.value] = element.text || element.label || ''
  })
  return obj[value + '']
}

// 隐藏手机号中间4位加星号
export function hideMiddleDigits(phoneNumber) {
  // 使用正则表达式匹配手机号中的数字
  const regex = /^(\d{3})(\d{4})(\d{4})$/
  // 使用 replace 方法将中间四位数字替换为星号
  const maskedNumber = phoneNumber.replace(regex, (_, prefix, middle, suffix) => {
    const maskedMiddle = middle.replace(/\d/g, '*')
    return `${prefix}${maskedMiddle}${suffix}`
  })
  return maskedNumber
}

export function validatePhoneNumber(phoneNumber) {
  // 定义手机号码的正则表达式（兼容微信小程序）
  const phoneRegex = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
  return phoneRegex.test(phoneNumber)
}
