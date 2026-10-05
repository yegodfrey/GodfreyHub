---
name: document/cn/harmonyos-center-guides/faqs-signature-service-12-0000002376513829
title: 签名密钥库文件与JDK版本不兼容
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-center-guides/faqs-signature-service-12-0000002376513829
source: portal
---

签名密钥库文件与JDK版本不兼容 **问题现象** 打包签名提示“**init keystore failed : parseAlgParameters failed:ObjectIdentifier()** ”错误。 **可能原因** 使用高版本JDK生成签名密钥库文件，使用低版本的JDK执行签名，因为兼容性问题无法解析签名密钥库文件，导致签名失败。 **常见错误场景**
    1. DevEco Studio自动生成签名密钥库文件（*.p12），使用DevEco Studio预置的JDK，用户使用本地的低版本JDK进行签名，导致签名失败。
    2. 用户使用本地高版本JDK生成签名密钥库文件（*.p12），使用DevEco Studio进行打包签名，DevEco Studio中预置的JDK版本低于用户的JDK，导致签名失败。
**解决措施** 请检查当前使用的JDK版本和生成签名证书文件使用的JDK版本，确保JDK版本一致，JDK版本信息查看方法如下：
    1. 查看DevEco Studio预置的JDK版本信息，DevEco Studio Terminal窗口执行java -version命令，当前示例DevEco Studio预置的JDK版本为21.0.6。![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/UJwX4-VZQrSF7y0vYUR5Sw/zh-cn_image_0000002592778144.png?HW-CC-KV=V1&HW-CC-Date=20261005T053144Z&HW-CC-Expire=86400&HW-CC-Sign=9ABA0AA4956B362809EF26AEFC0809CC21359FB39A01576100A254BAF08BA85C)
    2. 查看本地系统JDK版本信息，CMD窗口执行java -version命令，当前示例本地系统JDK版本为1.8.0_292，与步骤1示例中DevEco Studio预置的JDK版本不一致。![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/t15GLLlXQlCxtABL9XdcSA/zh-cn_image_0000002623217699.png?HW-CC-KV=V1&HW-CC-Date=20261005T053144Z&HW-CC-Expire=86400&HW-CC-Sign=9EED70F10C9B2EE18A3CA5804C292212D0F2404728653342C5DADD8FC09953D1)
