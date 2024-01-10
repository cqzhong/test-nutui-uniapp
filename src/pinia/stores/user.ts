import { ref, unref } from 'vue'
import { defineStore } from 'pinia'
import type { UserInfoModel } from '@/interface'
import HttpRequest from '@/network/request'

import { setUserInfo } from '@/utils/app_sdk'

export const useUserStore = defineStore('userStore', () => {
  // state
  const userInfo = ref<UserInfoModel>({} as UserInfoModel)

  // getters
  function getUserInfo() {
    return unref(userInfo)
  }

  // actions
  function init() {
    return new Promise(async (resolve, _reject) => {
      const info: any = await setUserInfo()
      userInfo.value = info
      HttpRequest.setConfig({
        header: {
          'X-App-Id': '1',
          'X-Auth-Token': unref(userInfo).token,
          'X-Tenant-Id': unref(userInfo).tenantId + '', // 打包成mpaas 如果是数字类型会被自动去除
          'X-Client-Type': 'app'
        }
      })
      resolve(info)
    })
  }

  function resetStoreAction() {
    // this.$reset()
  }

  return { userInfo, getUserInfo, init, resetStoreAction }
})
