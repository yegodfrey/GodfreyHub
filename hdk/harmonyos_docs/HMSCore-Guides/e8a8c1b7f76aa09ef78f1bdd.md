---
name: document/cn/HMSCore-Guides/verification-0000001196917670
title: 申请验证
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/verification-0000001196917670
---

# 申请验证

完成[申请Health Service Kit服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/extended-apply-kitservice-0000001211703555)后，审核通过的权限为测试权限，有用户数量的限制。为解除用户数的限制，应用开发完成后，在上架之前，请按照以下步骤提交验证申请，以获取正式权限。

## 验证前自检

为遵循数据最小化原则，开发者在申请验证前，请先自行检查应用使用的数据类型与[申请Health Service Kit服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/extended-apply-kitservice-0000001211703555)中申请的权限是否对应。若您的应用所使用的数据类型少于申请的权限，需要在[开发者联盟网站](https://developer.huawei.com/consumer/cn/)提交申请验证时，取消勾选数据权限申请页面多余的权限。

## 申请验证

1. 登录[开发者联盟网站](https://developer.huawei.com/consumer/cn/)，进入"管理中心"，单击"Health Service Kit"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/cL3CJTKbS7GOY6aZp0S-kQ/zh-cn_image_0000002548039043.png?HW-CC-KV=V1&HW-CC-Date=20261008T152132Z&HW-CC-Expire=31536000000&HW-CC-Sign=EACCBA38E5C7BE78F8E97B774F836570ADEA7198EA7006B53B962B123F245D70)

2. 单击"申请验证"按钮，选择所需要验证的数据权限时，根据您的需求进行勾选（至少选择一项权限），提交审核材料由专家组进行评审，审批周期约为15个工作日，请耐心等待。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/0TfJZp83Q1ainExkbH8G2Q/zh-cn_image_0000002516519164.png?HW-CC-KV=V1&HW-CC-Date=20261008T152132Z&HW-CC-Expire=31536000000&HW-CC-Sign=075C417599E000F82A0CF6683C25D8656717C979E251763C1AB544EB3A0C6243 "点击放大")

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/VOw6M_eiSDGDwO142I2KAg/zh-cn_image_0000002516359246.png?HW-CC-KV=V1&HW-CC-Date=20261008T152132Z&HW-CC-Expire=31536000000&HW-CC-Sign=D0C63CE7B307133D3B88854E1E930B9F2FAFEE2987B1A4851A3E326E4D4BC12C "点击放大")

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/9H2HBMaqQiqD8IxRthcoFA/zh-cn_image_0000002547959055.png?HW-CC-KV=V1&HW-CC-Date=20261008T152132Z&HW-CC-Expire=31536000000&HW-CC-Sign=5AD29DE7D8E56ED4845ACD7EA58B6A15BF4427396744DBEB9906368D7257B82C "点击放大")

   审批通过后应用正式接入Health Service Kit。审批结果将以短信和邮件的形式通知您。

   如果提交的材料不满足要求，审批将不能通过，请您根据短信或邮件通知中的驳回原因进行修改并重新提交。如有疑问，请通过[智能客服](https://developer.huawei.com/consumer/cn/customerService/#/bot-dev-top/faq-top/faq-talk-top)反馈。
   > 说明
   > * 若审核材料不满足要求导致的审批被驳回，应用状态修改为"已开通测试权限"状态，开发者可以根据驳回原因修改验证后，继续申请审核验证。
   > * 验证通过后，平台将对数据使用情况抽查，如您的应用半年内无数据调用记录，平台将关闭已开通的验证权限。
   > * 应用上线验收清单：[应用上线CheckList.xlsx](https://hihealthbase-drcn.things.hicloud.com/healthkit/fileServer/getFile/protected/checkList/000/001/044/1000000000000001044.20260511023759.88760037735545040450170735604191:20760428023825:100005355:9A24051D53EF336FE50A7D6DFD83FA90FB14C3AABF9D8AF5242686BBF1CB5959.xlsx)。

## 申请验证被驳回常见问题

与基础能力服务相同，请参见基础能力的[申请验证被驳回的常见问题](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/verification-0000001211587947#section19762040143920)。

