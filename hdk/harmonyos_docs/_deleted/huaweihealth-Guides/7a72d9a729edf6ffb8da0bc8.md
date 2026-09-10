---
name: document/cn/huaweihealth-Guides/get-log-path-0000002342676430
title: 日志收集
uri: https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/get-log-path-0000002342676430
---

# 日志收集

获取收集到的日志文件保存在穿戴设备的路径。  
![](https://media:301785133821749108)  
* SDK组件的日志文件大小上限为20MB。达到容量上限后，新日志将滚动覆盖最早的历史日志条目。
* 完成日志收集后，穿戴设备路径下的日志文件不会自动删除。

1. 导入相关模块。
2. 调用[industryServiceClient](https://developer.huawei.com/consumer/cn/doc/health-References/industryservice-0000002441251357#section7749131442313)中的[getIndustryLog](https://developer.huawei.com/consumer/cn/doc/health-References/industryservice-0000002441251357#section1650163344212)方法，触发日志收集，获取日志文件路径。

   <br />

   ```
   // 导入相关模块
   import { industryServiceClient } from '@huawei-cbg/health-industry-sdk';
   import { BusinessError } from '@ohos.base';

   // 调用industryServiceClient中的getIndustryLog方法, 获取日志文件路径
   industryServiceClient.getIndustryLog(getContext(this)).then((logPath) => {
     // 收集日志成功，打印日志文件路径
     console.info(`Succeeded in getting industry log, log path is ${logPath}`);
   }).catch((err: BusinessError) => {
     // 收集日志失败
     console.error(`Failed to get industry log. Code is ${err.code}, message is ${err.message}.`);
   })
   ```

   <br />

