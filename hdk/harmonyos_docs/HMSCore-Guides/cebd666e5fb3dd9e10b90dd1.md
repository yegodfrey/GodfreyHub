---
name: document/cn/HMSCore-Guides/wx-access-0000001122661414
title: 微信小程序接入
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/wx-access-0000001122661414
---

# 微信小程序接入

在完成[申请Health Service Kit服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/apply-kitservice-0000001050707556)后，微信小程序接入还需要处理以下流程：

1. 参考[申请账号服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/apply-id-0000001050747587)步骤1和步骤2进入账号卡片，找到您小程序关联使用的应用，点击"修改"按钮进入应用详情页，在"回调地址"输入框中补充小程序接入专属的回调地址：https://h5hosting.dbankcdn.com/cch5/healthkit/oauth-h5/oauth-callback.html，修改办法参考下图。**回调地址支持配置多个，如应用中已配置您应用的回调地址，请继续保留。**

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/kC_XJbsQS8mNIVQ6YHHlhg/zh-cn_image_0000002547959219.png?HW-CC-KV=V1&HW-CC-Date=20260909T172020Z&HW-CC-Expire=31536000000&HW-CC-Sign=47ED034236F4F5080FA8743FB86C7810A4F26599AB7FFB9E481BB24EB6FECC17)![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/RsSDTiPETxCsK-OCwOxm9g/zh-cn_image_0000002516519324.png?HW-CC-KV=V1&HW-CC-Date=20260909T172020Z&HW-CC-Expire=31536000000&HW-CC-Sign=1D0A2A5F9CC935B30B819476FFD7CA39524490CA3D9E77A7739A7007B84E5B00 "点击放大")

   > 说明
   >
   > 在小程序上用户登录华为账号并授权时，基于华为账号所分配的授权码code只会在上述新增的回调地址中携带返回，您的小程序应用无需感知。

2. 参考[3.6.4.2 申请华为运动健康服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/apply-kitservice-0000001050707556)，在[华为开发者联盟](https://developer.huawei.com/consumer/cn/console#/serviceCards/AppService)上选择"Health Kit"卡片，配置微信小程序ID，配置完需要经过人工审核，审核通过后将赋予相应的权限，请您耐心等待。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/iGYpy5d7RNaVKyBeUfvMLw/zh-cn_image_0000002547959213.png?HW-CC-KV=V1&HW-CC-Date=20260909T172020Z&HW-CC-Expire=31536000000&HW-CC-Sign=CF1CE4788D462DAD6A765437815D679FADA27B75EB560531DD2D559AE1C4CB62 "点击放大")

3. 步骤1、2完成后，您可以基于如下指导进行开发。从您的小程序应用拉起"华为智能穿戴小程序"引导用户进行授权，在跳转至"华为智能穿戴小程序"时传递如下参数：

   |---------|------------|--------------------------------------------------------------------|----|
   |参数名称|参数类型|参数描述|是否可选|
   |appId|String|固定参数，华为智能穿戴小程序的APPID，请勿修改。|必选|
   |path|String|固定参数，华为智能穿戴小程序统一授权页面路径，请勿修改。|必选|
   |client_id|String|注册应用时获得的App ID。|必选|
   |scope|List<String>|授权项列表。|必选|
   |lang|String|语言环境，默认值zh-CN。|可选|
   |state|String|随机串，用于防止CSRF，在返回授权码Code时原封不动返回。建议传递，在授权完成后会随着code一起返回，可用于校验code的安全性。|可选|

   代码示例：

   ```screen
   wx.navigateToMiniProgram({
     appId: "wxa6c04f899577d944",
     path: "pages/authLogin/authLogin",
     extraData: {
       lang: "zh-CN",
       client_id: "xxxx",
       scope: ["https://www.huawei.com/healthkit/step.read"],
       state: 'xxxx'
     }
   })
   ```

   触发跳转至华为智能穿戴小程序后的整体交互效果：
   * 场景一：用户第一次使用华为智能穿戴小程序，登录华为账号->选择确认用此账号登录->允许授权。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/ROYfAJ3uTZuvfEjyW8dpmQ/zh-cn_image_0000002548039213.png?HW-CC-KV=V1&HW-CC-Date=20260909T172020Z&HW-CC-Expire=31536000000&HW-CC-Sign=E6638576CE75BE8F91DF3583C770A6CB32E5AFA7FB15E841684D33543EF50DA4 "点击放大")


   * 场景二：用户已使用过并已在华为智能穿戴小程序完成登录，确认用此账号登录->允许授权 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/ysrDW7qjTxGch9toxGTe9A/zh-cn_image_0000002547959217.png?HW-CC-KV=V1&HW-CC-Date=20260909T172020Z&HW-CC-Expire=31536000000&HW-CC-Sign=75E2034C3E5B6B55F416D6ABA6EF64BA95CDC34C244A3785BC01EB18E7A977E7 "点击放大")

4. 用户授权成功后，华为智能穿戴小程序将授权码code、 state参数返回，如果授权过程中出现了错误，将会携带错误信息error返回，示例代码如下：

   ```screen
   const { code, error, state } = wx.getEnterOptionsSync().referrerInfo.extraData;
   ```

5. 获取到华为智能穿戴小程序返回的授权码后，请根据[授权码模式（Authorization Code）场景示例](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/auth-example-0000001054581058#section9339449355)使用code换取AT。

   > 说明
   >
   > 使用华为智能穿戴小程序返回的code换取AT时，redirect_uri参数使用https://h5hosting.dbankcdn.com/cch5/healthkit/oauth-h5/oauth-callback.html。

