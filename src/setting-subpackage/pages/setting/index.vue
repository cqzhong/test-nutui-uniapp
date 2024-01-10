<template>
  <view class="setting-view">
    <view class="section-tit-view">个人信息</view>
    <view class="section-view">
    </view>
  </view>
</template>

<script lang="ts" setup>

// components
// import emergencyDetailCell from './emergency-detail-cell'

// const dataList = []
// #region refs
// #endregion

// #region Life Cycle
onShow(() => {
  // 监听页面显示，页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面。
})
onHide(() => {
  // 监听页面隐藏。
})
onUnload(() => {
  // 监听页面卸载。
})
onLoad((_option) => {
  // 监听页面加载，该钩子被调用时，响应式数据、计算属性、方法、侦听器、props、slots 已设置完成，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参）
})
onReady(() => {
  // 监听页面初次渲染完成，此时组件已挂载完成，DOM 树(el)已可用，注意如果渲染速度快，会在页面进入动画完成前触发。
})
// #endregion

// #region Events
// #endregion
</script>

<style lang="scss" scoped>
.setting-view {
  width: 100%;
  padding: 0 16rpx;
  box-sizing: border-box;

  .section-tit-view {
    padding: 20rpx 0 10rpx;
    font-size: 28rpx;
    color: $uni-color-subtitle;
  }

  .section-view {
    width: 100%;
    border-radius: 16rpx;
    overflow: hidden;
  }
}
</style>
