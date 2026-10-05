---
name: document/cn/SPPartnerCenter-develop-Guides/ho_sp-cert_auth-0000001947886657
title: 申请凭证授权
uri: https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ho_sp-cert_auth-0000001947886657
source: portal
---

# 申请凭证授权

#### 前置条件

已参照[HarmonyOS开发服务商合作指南](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/sp_partner-hmos_develop_partner_guide-0000002101543573)完成了服务商账号注册和实名认证。

#### 进入凭证授权管理

                1. 使用已认证为服务商的华为账号，登录[服务商合作伙伴中心](https://developer.huawei.com/consumer/cn/partner/)网站，通过点击“管理中心”进入服务商管理中心。
                2. 选择“授权管理 > 凭证授权”。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260126140029.63121337290273981422048929059876:50001231000000:2800:40E040926A7F184D4C1539814A8363D54327787118A20B1553DDF12D38B55C09.png)

#### 创建凭证

                1. 点击“创建凭证”，弹出“创建凭证”。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260126140029.83247974419032983850049414650255:50001231000000:2800:9A2F4321B639C2B8020424A9C2F9353EE79ED25C07EE7DAAA76A0A2365B408EE.png)

                2. 输出“凭据名称”，并勾选HarmonyOS应用的相关权限，例如“saas.app.version.manage”和“saas.app.basicinfo.manage”。
                3. 配置完成后，点击“确定”，提交凭证。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260126140029.62452477178334582963282521839714:50001231000000:2800:E376BF9823B8DF0264495D7707424EB786C4046819E68588BEF5B04DB6E22FD4.png)

                4. 在已创建凭证的操作列，点击“编辑”，进入“编辑凭证”窗口。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260126140029.39618715632068747302726304461132:50001231000000:2800:FE7869E9A54FAAEC5BC04ED7195D4C9C70E61764E82412E30409D0DD5D6E034C.png)

即可获取“API客户端ID”和“API客户端密钥”，后续在服务商调用API前，可通过“API客户端ID”和“API客户端密钥”调用获取Token接口，获取access_token。
