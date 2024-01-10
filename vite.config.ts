import { defineConfig } from 'vite'
import { resolve } from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import esbuild from 'rollup-plugin-esbuild'
import copy from 'rollup-plugin-copy-merge'
import AutoImport from 'unplugin-auto-import/vite'

import Components from '@uni-helper/vite-plugin-uni-components'
import { NutResolver } from 'nutui-uniapp'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    Components({
      resolvers: [NutResolver()]
    }),
    copy({
      targets: [{ src: '.mini-ide/*', dest: 'dist/mpaas/mp-alipay/.mini-ide' }]
    }),
    {
      ...esbuild({
        target: 'chrome70',
        // 如有需要可以在这里加 js ts 之类的其他后缀
        // include: /\.[jt]sx?$/
        include: /\.vue|.ts|.js$/,
        loaders: {
          '.vue': 'js'
        }
      }),
      enforce: 'post'
    },
    Unocss(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', 'uni-app'],
      // 如果使用 Typescript，需要设置 dts 为 true
      dts: true // or a custom path
    }),
    // uni插件一定要放到后面
    uni()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          "@import '@/assets/style/custom_theme.scss';@import '@/assets/style/nutui_theme.scss';@import 'nutui-uniapp/styles/variables.scss';"
      }
    }
  }
})
