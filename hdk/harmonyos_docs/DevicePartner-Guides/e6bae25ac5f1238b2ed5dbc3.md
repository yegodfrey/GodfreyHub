---
name: document/cn/DevicePartner-Guides/faq-certification-requirement-0000001312231989
title: 认证要求
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-Guides/faq-certification-requirement-0000001312231989
---

# 认证要求

## DECC测试报告有大小限制吗

DECC工具本身对测试报告大小无限制，但Device Partner平台要求上传的测试报告附件不超过500M。

## 产品是否可以继承模组的SRRC认证证书

* 如果产品采用的无线电发射模块均为"完整的非独立操作使用的无线电发射模块"，则可以继承模组的SRRC认证证书。在提交法规认证材料时，需要满足以下要求：
  1. 提供模组的SRRC认证证书。
  2. 在设备标签或其说明书中标识如下内容： 本设备包含型号核准代码(分别)为: CMIIT ID:XXXXYYZZZZ,...的无线电发射模块。

  3. 提供含型号核准代码的文件，可以为产品的电子版说明书或者产品实物图。
  4. 如果支持短距离微功率频段（例如：支持NFC碰一碰功能的产品），还须在产品说明书中增加"工信部2019年52号文规定的8项说明"。
* 如果产品嵌入或使用"限制性非独立操作使用的无线电发射模块（CMIIT ID后加'M'标识）"，则需要进行整机型号核准。

更多关于SRRC认证的说明，请参考Device Partner平台"产品定义"页面的《HarmonyOS Connect生态认证法规认证_商品资质要求一览表》。

## 认证证书中的产品名称是否与Device Partner平台中的产品名称保持一致

一致。HarmonyOS Connect认证证书中的产品名称以Device Partner平台上的产品名称为准。

## 如何获取生态产品认证测试的要求

1. 登录[华为智能硬件合作伙伴平台](https://devicepartner.huawei.com/cn/ )，单击右上角"管理中心"。
2. 在左侧导航中选择"产品开发" ，单击右上角的"产品开发引导"，可以获取产品认证测试的相关材料。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/04/v3/5UMwlM-1TbyDvj54A9t_1w/zh-cn_image_0000001273551426.png?HW-CC-KV=V1&HW-CC-Date=20260924T071230Z&HW-CC-Expire=31536000000&HW-CC-Sign=FC5C64720E36D9525E8D9987C140E2FA7EA2675B7A5417A8F60926E25119FC8E "点击放大")

## 如何获取硬件测试标准

如果产品采用"自选模组/芯片"，则产品自测试环节需要提交《HarmonyOS Connect模组硬件测试报告》和《模组兼容性规范自检表》。其中，Wi-Fi模组硬件测试标准获取方式如下：

1. 登录[华为智能硬件合作伙伴平台](https://devicepartner.huawei.com/cn/ )，单击右上角的"管理中心"。
2. 在平台左侧导航栏中选择"产品开发"，单击对应的产品卡片。
3. 选择"自测试"页签，在"工具&指导"中下载"认证测试指导文档"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/jpclH667QOidUBdtp5aDJQ/zh-cn_image_0000001273231578.png?HW-CC-KV=V1&HW-CC-Date=20260924T071230Z&HW-CC-Expire=31536000000&HW-CC-Sign=964D5F60627E9A559FE90FAAE87087D4EB8264C887AC984C74F66BE136C13872)

4. 解压下载的压缩包，获取"HarmonyOS Connect技术认证Wi-Fi模块硬件认证测试标准"文件。

## 涉及蓝牙功能的产品，对于蓝牙部分法规材料有什么要求

凡涉及蓝牙功能的产品申请HarmonyOS Connect认证，需要提供BQB证书（针对蓝牙通信技术的认证）。

产品可以通过以下任意一种方式提供BQB证书：

* 提供整机产品的BQB证书。
* 提供整机产品的蓝牙模块BQB证书，以及整机产品列名。

如申请认证的产品书面承诺不在产品及外包装上张贴"Bluetooth"标识，不在中国大陆范围外销售，可选择以下任意一种方式申请例外处理：

* 提供芯片BQB证书+整机BQB测试报告（报告必须包含芯片型号+整机型号+整机主板照片，需可看清BQB芯片型号）。
* 提供整机产品的蓝牙模块BQB证书。

## 测试用例要求控制大卡卡片上的功能，如何查找大卡？

仅HarmonyOS 5以上系统的手机支持，长按智慧生活首页九宫格卡片 >编辑卡片大小 >可将智慧生活卡片设置成大卡模式。

## 可信认证测试工具测试产品信息检查用例测试不通过，结果显示failed

问题现象

可信认证测试工具测试产品信息检查用例测试不通过，结果显示failed。

可能原因

设备端上报的数据和DP平台上填写的信息不一致。

解决措施

将设备侧日志中的产品型号、硬件版本号、固件版本号等信息打印出来，针对测试结果failed的检查项，修改设备端和DP平台端保持一致。

## 未按平台通知提交Openharmony5.0.x相关兼容性测试认证材料（XTS日志/兼容性自检表/兼容性测试报告），如何处理？

可能原因

1.未按平台要求提交材料。

2.兼容性测试报告中的 VersionID与DP平台上的版本id信息填写不一致。

2.提交的OS认证材料非5.0.X版本导致不通过。

建议措施

1.Device Partner平台>产品开发>自测试>OpenHarmony兼容性>下载兼容性测试指导，测试完成后，在兼容性测试报告入口处上传：XTS日志/兼容性自检表/兼容性测试报告。

2.修改版本号保持一致。

版本id路径：DP平台>提交预约认证>版本id。

兼容性测试报告的XTS日志中，搜索VersionID就是版本id信息。

3.软硬件定义页面操作系统版本号选择5.0.X版本。

## 如何获取认证材料模板以及查询认证要求？

操作路径：

1.Device Partner平台>产品开发>产品定义>软硬件定义>下载"HarmonyOS Connect生态认证法规认证_商品资质要求一览表 V1.6.xlsx"。

2.Device Partner平台>产品认证>预约认证，下载"HarmonyOS Connect生态认证法规认证_商品资质要求一览表 V1.6.xlsx"、"HarmonyOS Connect营销物料规范"。

如何获取产品环保符合性声明模板？

Device Partner平台>产品开发>产品定义>软硬件定义>" HarmonyOS Connect生态认证法规认证_商品资质要求一览表 V1.6"-"02法规材料提交要求与命名规范"-"中国RoHS"。

Profile信令测试一直失败，测试结果为failed

1.多次点击可信认证工具版本号下的beta，会出现一个vConsole控制台。

2.执行这条Profile信令测试用例的时候点击vConsole（录屏包括问题复现的现象和vConsole错误提示）。

3.伙伴可查看日志中的报错提示分析，或者提工单定位（附上步骤2录屏）。

## 产品提交认证申请前"设备调测自检"数据获取不到

问题现象

伙伴在Device Partner上产品提交认证申请前"设备调测自检"获取不到数据。

可能原因

伙伴设备未做OpenHarmony适配，未完成自测试兼容性测试。

解决措施

伙伴设备做openharmony适配，完成自测试-兼容性测试。兼容性测试的XTS日志里有设备调测自检需要的数据。

