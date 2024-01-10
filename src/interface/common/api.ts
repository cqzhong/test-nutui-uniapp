export interface UserInfoModel {
  name: string | null | undefined
  logoUrl: string | null | undefined
  phone: string | null | undefined
  tenantName: string | null | undefined
  tenantId: string | number
  token: string
  accountId: string
  employeeId: string | number | null | undefined
  orgId: string | null | undefined
  orgName: string | null | undefined
  [prop: string]: any // 绕开多余属性的检查
}
