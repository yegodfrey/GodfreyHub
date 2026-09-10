---
name: document/cn/AppGallery-connect-Guides/agc-cloudfunction-httptrigger-0000001706957925
title: HTTP触发器
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudfunction-httptrigger-0000001706957925
---

# HTTP触发器

您可以为云函数配置HTTP触发器，配置完成后会生成触发URL，在您向该URL发起HTTP请求时将触发云函数。  

#### 前提条件

您已[创建函数](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/create-and-configure-func-andrioid-0000001665054330)。  

#### 创建HTTP触发器

1. 在函数列表中点击函数名称进入函数详情页面。如果点击函数名称右侧"操作"列的"别名"，则在别名列表中点击别名名称，进入别名详情页。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251205152525.73776286725945611009447656841310:50001231000000:2800:873A970779BC52B8AB0C52C247A548000B885B1475B57546FE2DFC33EC55DC8F.png)

2. 点击"触发器"页签下的"添加触发器"，右侧弹出触发器创建界面。
3. 在"添加触发器"弹出框中，"触发器类型"选择"HTTP触发器"，并配置"请求方式"和"认证类型"。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251205152525.92275053196932525706398780615511:50001231000000:2800:E50542AB4D283D6EE6B4D913A9C33CFCDD712DFC599E4CE8A15EF303D86C7611.png)

   |参数|说明|
   |:-------|:---------------------------------------------------------------------------------------------------------------------------|
   |触发器类型|HTTP触发器。|
   |请求方式|HTTP触发器目前仅支持POST请求方式。|
   |认证类型|HTTP触发器的认证类型。 * API客户端鉴权（Client适用）：端侧网关认证，适用于来自APP客户端侧（即本地应用或者项目）的函数调用。 * API客户端鉴权（Server适用）：云侧网关认证，适用于来自APP服务器侧（即云函数）的函数调用。|
   |启用decode|通过HTTP触发器触发函数时，对于contentType为"application/x-www-form-urlencoded"的触发请求，是否使用URLDecoder对请求body进行解码再传入到函数中。|

4. 触发器配置完成后点击"确定"保存触发器，则回到触发器列表，可看到HTTP触发器图框。  
