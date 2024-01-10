<template>
  <view class="content_view">
    <view class="cell" hover-class="hover-bg" @click="didSelectItem">
      老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！
      <view class="water-num">{{ item }}</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
// components

// #region props
interface PropsInterface {
  item: any
}

const props = withDefaults(defineProps<PropsInterface>(), {
  item: () => {
    return {}
  }
})
// #endregion

// #region refs
// #endregion

// #region Emits
interface EmitsInterface {
  (event: 'select', arg1: any): void
}
const emits = defineEmits<EmitsInterface>()
// #endregion

// #region Events
const didSelectItem = () => {
  emits('select', props.item)
}
// #endregion
</script>

<style>
page {
  background-color: #f3f4f5;
  padding-bottom: 0 !important;
}
</style>
<style lang="scss" scoped>
@mixin retina-one-px-border($direction: top, $color: '#eeeeee') {
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;

  @if $direction ==top or $direction ==bottom {
    right: 0;
    height: 0;
    transform: scaleY(0.5);
    border-top: 1px solid $color;
  }

  @if $direction ==bottom {
    top: auto;
    bottom: 0;
  }

  @if $direction ==right or $direction ==left {
    width: 0;
    bottom: 0;
    transform: scaleX(0.5);
    border-left: 1px solid $color;
  }

  @if $direction ==right {
    left: auto;
    right: 0;
  }

  @if $direction ==all {
    width: 200%;
    height: 200%;
    transform-origin: left top;
    transform: scale(0.5);
    border: 1px solid $color;
  }
}

.content_view {
  width: 100%;
  box-sizing: border-box;
  padding-left: 40rpx;
  padding-right: 40rpx;
  background-color: transparent;

  .cell {
    width: 100%;
    min-height: 302rpx;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 20rpx;
    background-color: #ffffff;
    margin-top: 16rpx;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: '';
      border-radius: 40rpx;
      @include retina-one-px-border(all);
    }

    .water-num {
      position: absolute;
      z-index: 0;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      color: $uni-color-primary;
      opacity: 0.4;
      text-align: center;
      font-size: 240rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
    }
  }
}

.hover-bg {
  background-color: rgba($color: #ffffff, $alpha: 0.6) !important;
}
</style>
