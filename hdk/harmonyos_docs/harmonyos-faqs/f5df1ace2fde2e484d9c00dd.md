---
name: document/cn/harmonyos-faqs/faqs-signature-service-13
title: 签名密钥库文件口令错误
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-signature-service-13
---

# 签名密钥库文件口令错误

**问题现象**

打包签名提示"**Init keystore failed: keystore password was incorrect**"错误。

**可能原因**

签名密钥库文件口令错误。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/9LmD7VBUT221h__poY0-JQ/zh-cn_image_0000002624638648.png?HW-CC-KV=V1&HW-CC-Date=20260916T082507Z&HW-CC-Expire=31536000000&HW-CC-Sign=FF0CE944DD41322BFBB1325E10A56E34876925F01EC370E2E064B45618BB6F28)

**解决措施**

使用正确的密钥库文件口令，密钥库文件口令验证方式如下：

打开DevEco Studio Terminal窗口，使用keytool命令行工具验证密钥库文件口令，示例：keytool -list -keystore ${Store file} -storepass ${Store password}。

* 口令正确示例

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/0Mw78gnsQ8-8FO2Otd0VvQ/zh-cn_image_0000002654838049.png?HW-CC-KV=V1&HW-CC-Date=20260916T082507Z&HW-CC-Expire=31536000000&HW-CC-Sign=4C609C57452F47738A078AEFA26FE0BED39C91906B2E74E0CFC76725C720769A)

* 口令错误示例

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/uP-HexQPSpmDTNzt43uJ1g/zh-cn_image_0000002624478740.png?HW-CC-KV=V1&HW-CC-Date=20260916T082507Z&HW-CC-Expire=31536000000&HW-CC-Sign=CE994F825075B6C9B89F170C1A21C59394942B68CAAE252A551BB94D624D7AD5)

