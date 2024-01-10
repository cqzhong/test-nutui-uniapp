<template>
  <mescroll-body @init="mescrollInit" @down="downCallback" @up="upCallback">
    <view class="notice">mescroll的极简示例,大部分情况就是这么用</view>
    <home-list-item v-for="item in dataList" :item="item" @select="didSelectItem" />
  </mescroll-body>
  <nut-popup :custom-style="{ padding: '60rpx 100rpx' }" v-model:visible="showBasic">正文</nut-popup>
</template>

<script lang="ts" setup>
import { onPageScroll, onReachBottom } from '@dcloudio/uni-app'
import useMescroll from '@/uni_modules/mescroll-uni/hooks/useMescroll'
// components
import HomeListItem from './components/home-list-item.vue'

const { mescrollInit, downCallback, getMescroll } = useMescroll(onPageScroll, onReachBottom) // 调用mescroll的hook
// #region refs
const dataList = ref<number[]>([])
const showBasic = ref(false)
// #endregion

// #region Life Cycle
// #endregion

// #region Events
const didSelectItem = () => {
  showBasic.value = true
  uni.showToast({
    title: '点击cell',
    icon: 'none',
    duration: 2000
  })
}
// 上拉加载的回调: 其中num:当前页 从1开始, size:每页数据条数,默认10
const upCallback = _mescroll => {
  const list: number[] = []
  if (unref(dataList).length < 20) {
    for (let index = 0; index < 10; index++) {
      const element = index + unref(dataList).length
      list.push(element)
    }
  }
  if (_mescroll.num == 1) dataList.value = []
  setTimeout(() => {
    dataList.value = unref(dataList).concat(list)
    getMescroll().endBySize(list.length, 100)
  }, 1500)
}
// #endregion
</script>

<style lang="scss" scoped></style>
