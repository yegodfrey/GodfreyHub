---
name: document/cn/HMSCore-Guides/verification-0000001196917670
title: 申请验证
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/verification-0000001196917670
---

# 申请验证

完成[申请Health Service Kit服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/extended-apply-kitservice-0000001211703555)后，审核通过的权限为测试权限，有用户数量的限制。为解除用户数的限制，应用开发完成后，在上架之前，请按照以下步骤提交验证申请，以获取正式权限。  

#### 验证前自检

为遵循数据最小化原则，开发者在申请验证前，请先自行检查应用使用的数据类型与[申请Health Service Kit服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/extended-apply-kitservice-0000001211703555)中申请的权限是否对应。若您的应用所使用的数据类型少于申请的权限，需要在[开发者联盟网站](https://developer.huawei.com/consumer/cn/)提交申请验证时，取消勾选数据权限申请页面多余的权限。  

#### 申请验证

1. 登录[开发者联盟网站](https://developer.huawei.com/consumer/cn/)，进入"管理中心"，单击"Health Service Kit"。

   <br />

   ![](https://media:901788166629715659)

   <br />

   <br />

2. 单击"申请验证"按钮，选择所需要验证的数据权限时，根据您的需求进行勾选（至少选择一项权限），提交审核材料由专家组进行评审，审批周期约为15个工作日，请耐心等待。

   <br />

   ![](https://media:901788166629743660 "点击放大")

   <br />

   ![](https://media:901788166629778661 "点击放大")

   <br />

   ![](https://media:901788166629838662 "点击放大")

   <br />

   审批通过后应用正式接入Health Service Kit。审批结果将以短信和邮件的形式通知您。

   如果提交的材料不满足要求，审批将不能通过，请您根据短信或邮件通知中的驳回原因进行修改并重新提交。如有疑问，请通过[智能客服](https://developer.huawei.com/consumer/cn/customerService/#/bot-dev-top/faq-top/faq-talk-top)反馈。  
   ![](https://media:901788166629876663)  
   * 若审核材料不满足要求导致的审批被驳回，应用状态修改为"已开通测试权限"状态，开发者可以根据驳回原因修改验证后，继续申请审核验证。
   * 验证通过后，平台将对数据使用情况抽查，如您的应用半年内无数据调用记录，平台将关闭已开通的验证权限。
   * 应用上线验收清单：[应用上线CheckList.xlsx](https://hihealthbase-drcn.things.hicloud.com/healthkit/fileServer/getFile/protected/checkList/000/001/044/1000000000000001044.20260511023759.88760037735545040450170735604191:20760428023825:100005355:9A24051D53EF336FE50A7D6DFD83FA90FB14C3AABF9D8AF5242686BBF1CB5959.xlsx)。

   <br />

   <br />

#### 申请验证被驳回常见问题

与基础能力服务相同，请参见基础能力的[申请验证被驳回的常见问题](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/verification-0000001211587947#section19762040143920)。  
