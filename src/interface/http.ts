export interface AnyObject {
  [x: string]: any
}

// dms接口返回规范
export interface ResponseSAASObj {
  traceId: string
  message: string
  code: number
  data: any
}
