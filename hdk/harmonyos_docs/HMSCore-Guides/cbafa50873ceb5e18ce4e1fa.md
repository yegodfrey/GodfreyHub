---
name: document/cn/HMSCore-Guides/guide-certificates-0000001088723154
title: App应用内、快应用、华为钱包CardStore方式证书申请
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/guide-certificates-0000001088723154
---

# App应用内、快应用、华为钱包CardStore方式证书申请

在创建Wallet Kit服务之前，需要提前使用华为提供的证书生成工具，按照如下步骤生成私钥和证书请求文件：

1. 下载[walletKitGenerateRsa_jar.zip](https://media:101782807020702785)压缩包，解压并打开，双击运行"Wallet Kit certificate generator(Windows OS, no JRE).bat"文件：

   <br />

   ![](https://media:101782807020464779)  
   walletKitGenerateRsa证书生成工具仅支持jdk 1.8及以上版本。

   ![](https://media:101782807020487780)

   ![](https://media:101782807020513781)

   <br />

2. 按照提示，输入服务号，建议格式为hwpass.公司简称.项目名称.pass.服务项目，可为大小写英文字母、数字，中间以"."分割，长度不超过40个字符。例：服务项目为发票类的为hwpass.xxx.xxxx.pass.invoice。
3. 运行成功后，界面会提示生成的文件路径，默认当前路径的RSA密钥文件夹下：

   <br />

   ![](https://media:101782807020543782)

   ![](https://media:101782807020568783 "点击放大")

   ![](https://media:101782807020602784)

   <br />

4. 服务号.txt结尾的文件为证书请求CSR文件，华为开发者联盟网站AGC上注册Wallet Kit服务时使用。

   <br />

   服务号.pem结尾的文件为私钥，请妥善保存，不要泄露给其他人。

   <br />

