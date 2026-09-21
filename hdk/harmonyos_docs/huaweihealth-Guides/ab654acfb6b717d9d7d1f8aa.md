---
name: document/cn/huaweihealth-Guides/delete-cert-path-0000002624549011
title: 删除证书路径
uri: https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/delete-cert-path-0000002624549011
---

# 删除证书路径

删除当前配置的证书路径。

1. 导入相关模块。
2. 调用[IndustryService](https://developer.huawei.com/consumer/cn/doc/health-References/industry_service_ios-0000002624668977)的[deleteCertPath](https://developer.huawei.com/consumer/cn/doc/health-References/industry_service_ios-0000002624668977#section1861714117295)方法删除证书路径。

   ```screen
   // 导入相关模块
   import IndustrySDK

   Task {
       do {
           // 调用IndustryService的deleteCertPath方法删除证书路径
           try await IndustryService.deleteCertPath()

           // 删除证书路径成功
           print("Succeeded in deleting cert path")
       } catch let err as IndustryError {
           // 删除证书路径失败
           print("Failed to delete cert path. Code: \(err.code), message: \(err.message)")
       }
   }
   ```

