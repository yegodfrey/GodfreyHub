---
name: document/cn/SPPartnerCenter-develop-Guides/obtain-authorization-link-0000002523075602
title: 获取授权链接
uri: https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/obtain-authorization-link-0000002523075602
---

# 获取授权链接

基于商家是否自行创建元服务，服务商需要获取不同的授权链接。

* 新增元服务授权：商家不自己创建元服务，授权服务商创建、操作元服务。此方式当商家完成授权时，会自动创建元服务对应的项目和元服务。
* 已有元服务授权：商家在授权前自己去AGC完成[项目创建](https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-project-0000002242804048)和[元服务创建](https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-atomic-service-0000002247795706)，此方式当商家完成授权，服务商仅有对元服务操作的权限。

服务商可以有两种方式获取授权链接：[通过页面获取](#section119199595462)或[通过接口获取](#section4152151115477)。  

#### 通过页面获取

![](https://media:201787643972870916)  
获取的授权链接有效期为24小时，请在有效期内尽快提醒商家完成授权。

1. 进入第三方平台详情页，左侧导航选择"授权信息 \> 服务商授权管理"。
2. 进入"服务商授权管理"页面，点击"获取授权链接"，弹出"授权链接"窗口。
3. 点击"新增元服务授权"或者"已有元服务授权"后的"获取链接"按钮，点击新出现气泡框中的复制按钮，获取授权链接。也可以点击"详情"，跳转"授权链接管理"，复制有效的授权链接，详细操作参考[管理授权链接](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/manage-authorization-link-0000002554275531)。

![](https://media:201787643972944917 "点击放大")  

#### 通过接口获取

接口使用参考[获取时效性授权链接](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/temporary-authorization-link-0000002680150323)。  
