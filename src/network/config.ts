/**
 * 常用的contentTyp类型
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // json
  TEXT = 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  上传
  FORM_DATA = 'multipart/form-data;charset=UTF-8'
}

export enum MethodEnum {
  /** HTTP 请求 OPTIONS */
  OPTIONS = 'OPTIONS',
  /** HTTP 请求 GET */
  GET = 'GET',
  /** HTTP 请求 HEAD */
  HEAD = 'HEAD',
  /** HTTP 请求 POST */
  POST = 'POST',
  /** HTTP 请求 PUT */
  PUT = 'PUT',
  /** HTTP 请求 DELETE */
  DELETE = 'DELETE',
  /** HTTP 请求 TRACE */
  TRACE = 'TRACE',
  /** HTTP 请求 CONNECT */
  CONNECT = 'CONNECT',
  /** HTTP 请求 UPLOAD */
  UPLOAD = 'UPLOAD',
  /** HTTP 请求 DOWNLOAD */
  DOWNLOAD = 'DOWNLOAD'
}

/**
 * 服务器code码
 */
export enum LinJiuHttpStatus {
  LinJiuHttpStatusSuccess = 200
}

export const errCodeMap = new Map([
  [400, '请求语法错误'],
  [401, '没有权限'],
  [403, '服务器拒绝执行'],
  [404, '无法连接服务器'],
  [405, '请求方法被禁止'],
  [500, '服务器内部错误'],
  [502, '无效的请求'],
  [503, '服务器出错了'],
  [505, '不支持HTTP协议请求']
])

export const baseURL = () => {
  return import.meta.env.VITE_SAAS_API
}
