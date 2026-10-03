---
name: document/cn/service/list-of-user-groups-for-real-machine-testing-0000002471264273
title: 真机测试
uri: https://developer.huawei.com/consumer/cn/doc/service/list-of-user-groups-for-real-machine-testing-0000002471264273
---

# 真机测试

真机测试为开发者提供了在智能体上架前即可在端侧设备上体验智能体使用效果的能力。

**真机测试使用**
> 说明
>
> 1. 开发者可在智能体调试与预览区域，点击真机测试图标-点击【白名单】跳转至智能体白名单配置页面。
>
> 2. 勾选用于测试的群组，点击屏幕左侧【编排】返回智能体编排页面进行真机测试发布。若无可用真机调试用户组，开发者需要创建一个用户组并添加用于真机测试的用户信息，创建方式见下方真机测试用户组列表部分。
>
> 3. 再次在调试与预览区域点击【真机测试】-【发布真机测试】。提示请求成功后，白名单内人员可通过重新启动小艺，3至5分钟内在对话列表中即可看到"开发中"标签的智能体。
>
> 4. 发布真机测试后，智能体的开发态15天内有效（即端侧可见"开发中"状态有效期15天）。
>
> 5. 真机测试范围及有效期以最后一次发布真机测试时间和所选用户组为准。
>
> 6. 取消真机测试：只需进入到智能体编排页面，再次点击【真机测试】-【取消发布】即可。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/y8o7fH2lQMa3D1MlV6KyMg/zh-cn_image_0000002640104140.gif?HW-CC-KV=V1&HW-CC-Date=20260924T081230Z&HW-CC-Expire=31536000000&HW-CC-Sign=CEFCD08F9A55F26648123504B58683FCCDF6B66AEACB2DF774772395EE57E95D "点击放大")

**创建真机测试用户组列表**

入口1：在智能体的测试白名单页面进行配置。

入口2：通过小艺开放平台首页右上角的【[真机测试管理](https://developer.huawei.com/consumer/cn/hag/hagindex.html?isInFrame=true&lang=zh_CN#/console-web/pub-management/userList)】跳转。

以开发智能体页面内的【测试白名单】页面为例，点击右上角【新建用户组】进行用户组创建。创建好用户组后，可通过点击操作栏内【管理用户】对用户组进行操作。当前支持【邀请用户】和【批量邀请】两种操作方式，同时支持查找和删除功能。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/llVzvyOiTEWQWOy4TvJ2Zg/zh-cn_image_0000002670104115.gif?HW-CC-KV=V1&HW-CC-Date=20260924T081230Z&HW-CC-Expire=31536000000&HW-CC-Sign=7D608B96FC6F38859E49DBAE833CE871E115A9F76EB9C2C0293CCA77D2835F0B "点击放大")

规则限制：

1. 每个团队最多可创建100个用户组，每个用户组最多可添加100个用户。

2. 添加用户时可根据注册账户类型进行填写，当前支持通过手机号码或邮箱（需已注册华为账号，取用户UID）两种账户类型添加用户。

3. 添加的测试账号必须为当前团队账号下的成员，且拥有小艺开放平台的权限，否则会提示"仅可添加本团队账号下的成员"。添加团队成员请参考：【[管理团队账号-开发者联盟](https://developer.huawei.com/consumer/cn/doc/start/mta-0000001059655998)】，需要添加"小艺开放平台"的权限。特别说明：[Inhouse类型的账号](https://developer.huawei.com/consumer/cn/doc/app/agc-help-inhouse-0000002281532696)暂时无法为团队成员添加小艺开放平台的权限，如需要进行真机测试，请使用主账号进行测试。

