# One Team, One goal

## **本项目基于** [uni-app 官网](https://uniapp.dcloud.io)

### **一、开发工具(注意事项)**

- ~~推荐官方 IDE [HBuilderX](https://www.dcloud.io/hbuilderx.html)~~
- [支付宝小程序 IDE](https://opendocs.alipay.com/mini/ide/download)
- [Visual Studio Code](https://code.visualstudio.com/Download/)

### Project setup

```Bash
yarn install

# node版本
16版本以上
# 启动H5
dev:h5
```

### **二、组织结构**

```bash
.
├── App.vue                         应用配置，用来配置App全局样式以及监听
├── main.ts                         Vue初始化入口文件
├── static                          存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├── manifest.json                   配置应用名称、appid、logo、版本等打包信息
├── uni.scss                        全局css主题
├── wxcomponents                    微信小程序自定义组件存放目录
├── mycomponents                    支付宝小程序自定义组件存放目录
├── swancomponents                  百度小程序自定义组件存放目录
├── uni_modules                     存放[uni_module](/uni_modules)。
├── unpackage                       非工程代码，一般存放运行或发行的编译结果
├── components                      全局组件库
├── router                          路由文件
├── enum                            通用枚举
└── assets
│    └── style
│        └── custom_theme.scss      nut-uniapp的使用 Sass 变量 进行主题配置
├── pagesOrder-subpackage           工单-分包
│   ├── components
│   ├── pages
│   └── static                      分包下支持 static 等静态资源拷贝，即分包目录内放置的静态资源不会被打包到主包中，也不可在主包中使用
│       ├── css
│       ├── image
│       └── ts
├── pages                           页面文件src
├── platforms                       存放各平台专用页面的目录（只能存在vue页面文件）
├── pages.json                      配置页面路由、导航条、选项卡等页面类信息
│
└── network                         请求(api)
│   ├── api                         接口服务
│   │   ├── apis
│   │   └── index.ts
│   ├── config.ts                    接口请求配置
│   ├── interceptors                请求拦截器
│   │   ├── requestInterceptor.ts
│   │   └── responseInterceptor.ts
│   ├── request.ts                  请求
│   └── rpc.ts                      移动网关请求
└── utils                           公用工具
    ├── index.ts
    ├── array.ts
    ├── function.ts
    ├── util_js_bridge              mPaaS调用JSAPI
    ├── dayjs.ts
    └── app_sdk.ts
```

### 三、组件按需引入配置

`pages.json` 文件 [参考 easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)
[uni_modules](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#uni-modules)

### **四、全局对象**

```js
uni.$api = api // 请求
uni.$router = router // 路由跳转
uni.$mPaaSJSAPICall = mPaaSJSAPICall // 调用JSAPI
uni.$mPaaSJSAPIOn = mPaaSJSAPIOn // 监听原生事件
```


### 五、版权信息

| 名称                                                                | 是否修改 |
|---------------------------------------------------------------------|----------|
| [NutUi-uniapp 组件库](https://www.uniapp-nutui.tech)                | 否       |
| [mescroll](http://www.mescroll.com/uni.html)                        | 否       |
| [luch-request 请求](https://www.quanzhan.co/luch-request/)          | 否       |
| ~~[tmui组件库](https://tmui.design)~~                               | ~~否 ~~  |
| [Uni Mini Router](https://moonofweisheng.gitee.io/uni-mini-router/) | 否       |

### **六、注意事项**

- [uniapp 运行区分环境](./documents/uniapp运行区分环境.md)
- 其余项目暂时需通过 手动修改来 生成小程序二维码
- 在微信小程序环境组件的 class 和 style 不会被成功编译，如果你想自定义某些组件的 class 或 style，请传递props customClass和customStyle，目前不是每个组件都支持，后续会考虑支持到每个组件
- 样式覆盖请参考 <https://www.uniapp-nutui.tech/components/basic/configprovider.html>
- 解决`mPaaS`真机调试调试工具带旧问题

```plain text
1. 在小程序项目根目录下的 ./.mini-ide/project-ide.json 这里添加这个内容 "enableLegacyRemoteDebug": true
2. 在小程序开发者工具 帮助->本地配置 添加以下内容
{
  "localAdaptorDebug": {
    "resourceCode": "mPaaS",
    "iterationId": 103000103,
    "productId": "tiny_app_ide_mac"
  }
}
3.设置这两个并且重启了ide后，看看真机调试的调试工具标题不带旧
```
