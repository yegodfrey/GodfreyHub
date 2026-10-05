---
name: document/cn/DevicePartner-Guides/debugging-mode-0000002628686488
title: 调试方式
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-Guides/debugging-mode-0000002628686488
---

# 调试方式

合作伙伴在开发阶段，可以使用如下方式进行代码调试。

```
1、使用webpack安装vconsole
    npm install vconsole 或者
    cnpm install vconsole 或者
    yarn add vconsole 均可
2、在src/main.js中引入vconsole
    import Vconsole from 'vconsole';
    let vConsole = new Vconsole();
    export default vConsole
添加后可在单品详情页看到绿色 VConsole 浮窗，点击即可查看控制台日志
注意：正式商用需要注释掉vconsole调试。
```

