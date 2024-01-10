// eslint-disable-next-line spaced-comment
///  <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare let my: any
declare let wx: any
declare interface Uni {
  $api: any
  $router: import('uni-mini-router/lib/interfaces').Router
  // $route(arg0?: string | object, arg1?: string | object)
  $mPaaSJSAPICall: Function
  $mPaaSJSAPIOn: Function
}

declare const ROUTES: []

interface Window {
  AlipayJSBridge: any
  EbeiPlugins: any
  EBBusinessHandler: any
}
