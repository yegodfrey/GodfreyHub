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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/9LmD7VBUT221h__poY0-JQ/zh-cn_image_0000002624638648.png?HW-CC-KV=V1&HW-CC-Date=20261008T153717Z&HW-CC-Expire=31536000000&HW-CC-Sign=8171A0B02857D1951375D79711F1F78A29ABF7C5ED28655659DC80E97076A7B4)

**解决措施**

使用正确的密钥库文件口令，密钥库文件口令验证方式如下：

打开DevEco Studio Terminal窗口，使用keytool命令行工具验证密钥库文件口令，示例：keytool -list -keystore ${Store file} -storepass ${Store password}。

* 口令正确示例

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/0Mw78gnsQ8-8FO2Otd0VvQ/zh-cn_image_0000002654838049.png?HW-CC-KV=V1&HW-CC-Date=20261008T153717Z&HW-CC-Expire=31536000000&HW-CC-Sign=9ED09EED7313D7DE4C2C18DC0D19C17BBCBD15B9337F8137CE8479A38F7BF4C5)

* 口令错误示例

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/uP-HexQPSpmDTNzt43uJ1g/zh-cn_image_0000002624478740.png?HW-CC-KV=V1&HW-CC-Date=20261008T153717Z&HW-CC-Expire=31536000000&HW-CC-Sign=E6DE7F4D59F4352B0FC2CE4E42FD7E5643EE1B71097C9F5CBBC76D91D1BD5936)

