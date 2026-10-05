---
name: document/cn/app/agc-help-enterprise-mdm-cert-0000002283256801
title: 申请企业MDM应用发布证书
uri: https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-mdm-cert-0000002283256801
source: portal
---

# 申请企业MDM应用发布证书

企业MDM（Mobile Device Management）应用从移动端设备管控应用延伸而来，是一种企业级的IT应用解决方案，用于管理并保护公司设备上的数据和应用程序。在HarmonyOS中表示对1+8设备提供高级管控能力的应用，包括对设备、应用、外设等的管理，如禁止连接Wi-Fi、禁止使用USB设备。企业MDM应用仅支持在企业场景下使用，设备需在[华为HEM平台](https://developer.huawei.com/business/cn/support)进行注册管理或者为搭载[鸿蒙电脑专业版、企业版](https://qingyun.huawei.com/harmonyos-computer/harmonyos-enterprise/)的PC设备。

企业MDM应用支持格式为.hap或者.app。如果包含多个HAP、HSP文件，需[打包为.app格式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/packing-tool#app打包指令)，且在[工程级build-profile.json5文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app)中将[packOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section03812484215)的appWithSignedPkg属性配置为true，确保.app里的HAP/HSP包均被签名。

企业MDM应用无法上架华为应用市场进行公开或非公开发布，您可通过如下任意一种方式安装：

                * 设备注册纳管到华为HEM平台，在首次开机时通过[HEM平台批量部署](https://developer.huawei.com/business/cn/doc/HEM/hem-kuaisukaitong-hemchangyongdingzhiosnext-0000002524002086#section104506073517)。
                * 在搭载鸿蒙电脑专业版、企业版的PC设备上，[开启离线应用安装开关](https://developer.huawei.com/business/cn/doc/HEM/hem-kuaisukaitong-hemchangyongdingzhiosnext-0000002524002086#section104506073517)后本地直接安装。
                * 通过上架企业私有应用商店（企业MDM应用）在企业内部进行统一分发安装。

在发布企业MDM应用时，您需要使用企业MDM应用发布证书和企业MDM应用发布Profile手动签名后，才能编译构建正式发布包。请参考本文档申请并下载企业MDM应用发布证书。

#### 申请开通权限

您需满足如下条件，才可申请企业MDM应用发布证书和发布Profile：

                1. [注册华为开发者账号](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)并[完成企业开发者实名认证](https://developer.huawei.com/consumer/cn/doc/start/ht-edrna-0000001154848578)
                2. 申请成为企业MDM应用开发者
                3. 申请将应用加入企业MDM应用受邀名单

权限2和3可向华为运营人员申请开通。在收到您的申请后，华为运营人员将在1-3个工作日内为您安排对接人员。申请方法如下：

                * 申请邮箱地址：agconnect@huawei.com。
                * 邮件标题：[申请企业MDM应用发布证书和发布Profile]-[应用名称]-[应用包名]-[APP ID]-[Developer ID]-[支持设备]，支持设备可参考[配置支持设备](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-devicetype-0000002271592112)查询，Developer ID等查询方法可参见[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。
                * 邮件正文：请说明申请原因，并附上您应用的支持设备截图。 

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7b/v3/AcYN9G64TIiiMMeUez9yig/zh-cn_image_0000002659398915.png?HW-CC-KV=V1&HW-CC-Date=20261005T043444Z&HW-CC-Expire=86400&HW-CC-Sign=801147D4F5E36D5EDB5CE920A253F6CBDCFCF5B4D422BBB6EC10DA940D4A814B)

                * 邮件请抄送华为应用生态对接人员或硬件设备销售对接人员。

#### 准备工作

                * 请准备好[证书请求文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual#section1245916381106)。
                * 请确保您的账号角色已[获取“访问发布类证书”权限](https://developer.huawei.com/consumer/cn/doc/app/agc-help-manageaccount-0000002306610129#ZH-CN_TOPIC_0000002306610129__li626645853313)。

#### 操作步骤

申请企业MDM应用发布证书步骤如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/1hUGFbNrQL6naaXAlaB1kQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T043444Z&HW-CC-Expire=86400&HW-CC-Sign=C064ADC93645F5AE83A06A2C7B4AAD551613D3384DFC1C5A16770C43FE2C9FCB)

每个账号最多申请1个企业MDM应用发布证书。

                1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择“证书、APP ID和Profile”。
                2. 在左侧导航栏选择“证书、APP ID和Profile > 证书”，进入“证书”页面，点击“新增证书”。 

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/hqcbHcFdTAKcfWVCuiDR1g/zh-cn_image_0000002559111797.png?HW-CC-KV=V1&HW-CC-Date=20261005T043444Z&HW-CC-Expire=86400&HW-CC-Sign=DE84B77F67B984AD256DBD4EECC3A0493954D813BF245CAB36D6BE7336692F1D)

                3. 在弹出的“新增证书”窗口填写要申请的证书信息，点击“提交”。 

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/KNJoKJNTT-iXNhi2AuFG5Q/zh-cn_image_0000002361445412.png?HW-CC-KV=V1&HW-CC-Date=20261005T043444Z&HW-CC-Expire=86400&HW-CC-Sign=727FAEB420A7BE73A13AC4F21F0A1D76AB08138F77CEDB0A328E8D47DF5BC427)

参数 |  说明  
---|---  
证书名称 |  自定义证书名称，不超过100个字符。  
证书类型 |  选择“企业MDM应用发布证书”。  
选取证书请求文件（CSR） |  上传准备好的证书请求文件。  
  
                4. 证书申请成功后，“证书”页面展示证书名称等信息。点击“下载”，将生成的证书保存至本地，供后续发布签名使用。 

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/QOgFv_pwQwad4ISvqoJOuA/zh-cn_image_0000002361605304.png?HW-CC-KV=V1&HW-CC-Date=20261005T043444Z&HW-CC-Expire=86400&HW-CC-Sign=CCDA6C00C8194DB3F052E92484BE1E87071748085FFD16ADEB1EF95BC6FAB0D6)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/coffLjqCSMeuZD4ejwaBLg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T043444Z&HW-CC-Expire=86400&HW-CC-Sign=B1F694256F3FBA78E825E98BD4DCC82CC01A00919AB8952E230ADDDA8111C7F8)

                   * 证书申请成功即为“生效”状态。若证书状态变为“失效”或“已吊销”，表示当前证书已不可用，且通过此证书申请的Profile也会全部失效或吊销。您需要重新申请证书与Profile。
                   * 证书一旦废除将不可恢复，且通过此证书申请的Profile也会全部失效，请谨慎操作。
