/**
 * @description 对象转url参数
 * @param {object} data,对象
 * @param {Boolean} isPrefix,是否自动加上"?"
 * @param {string} arrayFormat 规则 indices|brackets|repeat|comma
 */
export const queryParams = (data = {}, isPrefix = true, arrayFormat = 'brackets') => {
  const prefix = isPrefix ? '?' : ''
  const _result: string[] = []
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) === -1) arrayFormat = 'brackets'
  for (const key in data) {
    const value = data[key]
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      continue
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (let i = 0; i < value.length; i++) {
            _result.push(`${key}[${i}]=${value[i]}`)
          }
          break
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(_value => {
            _result.push(`${key}[]=${_value}`)
          })
          break
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(_value => {
            _result.push(`${key}=${_value}`)
          })
          break
        case 'comma':
          // 结果: ids=1,2,3
          // eslint-disable-next-line no-case-declarations
          let commaStr = ''
          value.forEach(_value => {
            commaStr += (commaStr ? ',' : '') + _value
          })
          _result.push(`${key}=${commaStr}`)
          break
        default:
          value.forEach(_value => {
            _result.push(`${key}[]=${_value}`)
          })
      }
    } else {
      _result.push(`${key}=${value}`)
    }
  }
  return _result.length ? prefix + _result.join('&') : ''
}

/**
 * @description 深度克隆
 * @param {object} obj 需要深度克隆的对象
 * @param cache 缓存
 * @returns {*} 克隆后的对象或者原值（不是对象）
 */
function deepClone(obj, cache = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj
  if (cache.has(obj)) return cache.get(obj)
  let clone
  if (obj instanceof Date) {
    clone = new Date(obj.getTime())
  } else if (obj instanceof RegExp) {
    clone = new RegExp(obj)
  } else if (obj instanceof Map) {
    clone = new Map(Array.from(obj, ([key, value]) => [key, deepClone(value, cache)]))
  } else if (obj instanceof Set) {
    clone = new Set(Array.from(obj, value => deepClone(value, cache)))
  } else if (Array.isArray(obj)) {
    clone = obj.map(value => deepClone(value, cache))
  } else if (Object.prototype.toString.call(obj) === '[object Object]') {
    clone = Object.create(Object.getPrototypeOf(obj))
    cache.set(obj, clone)
    for (const [key, value] of Object.entries(obj)) {
      clone[key] = deepClone(value, cache)
    }
  } else {
    clone = Object.assign({}, obj)
  }
  cache.set(obj, clone)
  return clone
}

/**
 * @description JS对象深度合并
 * @param {object} target 需要拷贝的对象
 * @param {object} source 拷贝的来源对象
 * @returns {object|boolean} 深度合并后的对象或者false（入参有不是对象）
 */
export const deepMerge = (target = {}, source = {}) => {
  target = deepClone(target)
  if (typeof target !== 'object' || target === null || typeof source !== 'object' || source === null) return target
  const merged = Array.isArray(target) ? target.slice() : Object.assign({}, target)
  for (const prop in source) {
    // eslint-disable-next-line no-prototype-builtins
    if (!source.hasOwnProperty(prop)) continue
    const sourceValue = source[prop]
    const targetValue = merged[prop]
    if (sourceValue instanceof Date) {
      merged[prop] = new Date(sourceValue)
    } else if (sourceValue instanceof RegExp) {
      merged[prop] = new RegExp(sourceValue)
    } else if (sourceValue instanceof Map) {
      merged[prop] = new Map(sourceValue)
    } else if (sourceValue instanceof Set) {
      merged[prop] = new Set(sourceValue)
    } else if (typeof sourceValue === 'object' && sourceValue !== null) {
      merged[prop] = deepMerge(targetValue, sourceValue)
    } else {
      merged[prop] = sourceValue
    }
  }
  return merged
}
export const currentPageRoute = () => {
  // eslint-disable-next-line no-undef
  const pages = getCurrentPages()
  // 获取当前页面
  const currentPage = pages[pages.length - 1]
  // #ifndef H5
  let urlArgs = `${currentPage.route}?`
  for (const key in currentPage['options']) {
    const v = currentPage['options'][key]
    urlArgs += urlArgs.substring(urlArgs.length - 1) === '?' ? `${key}=${v}` : `&${key}=${v}`
  }
  return urlArgs
  // #endif
  // #ifdef H5
  return currentPage['$page']['fullPath'] ?? currentPage.route
  // #endif
}
