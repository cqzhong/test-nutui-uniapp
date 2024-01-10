<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import appStore from '@/pinia'
import { useRouter } from 'uni-mini-router'
// #ifdef H5
// @ts-ignore
import VConsole from 'vconsole'
// #endif

uni.$router = useRouter()

onLaunch(() => {
  const { init } = appStore.useUserStore
  init()
  // #ifdef H5
  if (import.meta.env.MODE !== 'production') {
    new VConsole()
  }
  // #endif
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
@import 'nutui-uniapp/styles/index';

.status_bar {
  height: var(--status-bar-height);
  width: 100%;
}

page {
  background-color: $uni-bg-color;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
