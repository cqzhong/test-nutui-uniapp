import { createPinia } from 'pinia'

export const setupPinia = app => {
  app.use(createPinia())
  registerStore()
}

import { useUserStore } from './stores/user'

export interface IAppStore {
  useUserStore: ReturnType<typeof useUserStore>
}

const appStore: IAppStore = {} as IAppStore

/**
 * 注册app状态库
 */
const registerStore = () => {
  appStore.useUserStore = useUserStore()
}

export default appStore
