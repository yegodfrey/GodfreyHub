---
name: document/cn/SPPartnerCenter-develop-Guides/develop-template-0000002554247845
title: 开发模板
uri: https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/develop-template-0000002554247845
---

# 开发模板

模板是服务商开发调试好的元服务常用业务代码，并基于已完成的代码样例编译后的包。

模板可以使用DevEco Studio进行开发。

1. 下载DevEco Studio，并搭建开发环境，详细参考[下载与安装DevEco Studio](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-software-install)。
2. [创建元服务工程](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-service-create-project)，参考[元服务开发指导](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-service-development)开发元服务模板。

   开发元服务模板还需要遵守如下表所示约束条件。  

   |元服务模板类型|具体约束|
   |:--------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   |ArkUI开发模式|* 工程构建build-profile.json5中需要设置useNormalizedOHMUrl=true。 * 开发模板时，不可使用router，需要使用navigation。因为router会存在字节码中写入bundlename的情况，所以不可使用。 * EntryAbility中不可使用loadContent加载页面，必须使用loadContentByName。 * 工程根目录的"hvigor/hvigor-config.json5"文件中需要增加如下配置。 ``` "properties": { "ohos.arkCompile.emptyBundleName": true } ```|
   |类Web开发模式|* 工程构建build-profile.json5中需要设置useNormalizedOHMUrl=true。 * 工程根目录的"hvigor/hvigor-config.json5"文件中需要增加如下配置。 ``` "properties": { "ohos.arkCompile.emptyBundleName": true } ```|

3. [运行、调试元服务模板](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-running-debugging)。
4. 将开发完的模板打包成.app文件，用于上传到第三方平台模板库中，详细参考[打包元服务为.app文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-publish-app#section1480865905920)。  
   ![](https://media:301784792305893785)  
   * 模板需要使用DevEco Studio正常编译出的.app包，并且为不含服务商release签名。
   * 编译包的apiLevel \>= api11。
* 支持使用Stage模型，不支持使用FA模型。  
