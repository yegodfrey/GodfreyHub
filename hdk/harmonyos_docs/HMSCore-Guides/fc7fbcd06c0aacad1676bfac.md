---
name: document/cn/HMSCore-Guides/access-cases-quickapp-h5-pulls-up-payment-0000001853966585
title: 接入案例-快应用内H5页面拉起华为支付
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/access-cases-quickapp-h5-pulls-up-payment-0000001853966585
---

# 接入案例-快应用内H5页面拉起华为支付

H5页面通过[web组件](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-component-web-0000001074615196)与快应用的[双向通信机制](https://developer.huawei.com/consumer/cn/forum/topic/0204405003333750226?fid=18)实现华为支付对接。

**操作流程**：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c/v3/lc5nWMBTQeSSPaofw39XDA/zh-cn_image_0000002512279997.png?HW-CC-KV=V1&HW-CC-Date=20260910T132631Z&HW-CC-Expire=31536000000&HW-CC-Sign=BD57AF3877D3B0FB93E68019D0DDB3EDB249549142197698438FD583E9ED220E)

1. 快应用里的H5页面需要使用华为支付。
2. H5页面通过[web组件](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-component-web-0000001074615196)与快应用的[双向通信机制](https://developer.huawei.com/consumer/cn/forum/topic/0204405003333750226?fid=18)通知快应用。

   ```screen
   system.postMessage("senddata");
   ```

3. 快应用调用pay接口调起华为支付服务客户端收银台并完成支付操作。
4. 支付成功后，华为支付服务器会调用回调接口返回支付结果信息给商户服务器；支付失败场景可能不会有支付结果回调通知。
5. 商户服务器收到支付结果回调响应，将结果返回给快应用。
6. 快应用借助[web组件](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-component-web-0000001074615196)向H5页面通知支付结果。

   ```screen
   this.$element('web').postMessage("senddata");
   ```

7. H5页面可对支付结果做进一步处理

**web组件与快应用双向通信机制**

具体实现参考：

1. [快应用web组件说明](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-component-web-0000001074615196)
2. [快应用web双向通信介绍及使用](https://developer.huawei.com/consumer/cn/forum/topic/0204405003333750226?fid=18)

> 注意
>
> **使用该方案，需要关注快应用升级机制引起的新老版本兼容问题。由于商户的快应用发布后，用户手机端上的快应用仍存在一段时间的老版本，因此快应用内嵌的h5页面需要考虑对快应用新老版本的兼容，以防止出现老版本的快应用里引用了新版本H5页面，尝试去拉起华为支付但老版本的快应用并没有** **[实现web双向通信](https://developer.huawei.com/consumer/cn/forum/topic/0204405003333750226?fid=18)。**

