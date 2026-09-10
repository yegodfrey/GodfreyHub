---
name: document/cn/harmonyos-faqs/faqs-ux-basic-quality-test-1
title: 如何定位UX测试结果不通过问题
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ux-basic-quality-test-1
---

# 如何定位UX测试结果不通过问题

#### 问题现象

* 问题一：使用DevEco Testing执行UX测试结果显示"条件依赖"，报"arklayout文件存储失败"或"arklayout文件依赖调试版本应用"： 测试结果：条件依赖。

  ![](https://media:101782454469155653 "点击放大")

  原因说明：arklayout文件存储失败。

  ![](https://media:101782454469186654 "点击放大")

  原因说明：arklayout文件依赖调试版本应用。

  ![](https://media:101782454469217655 "点击放大")
* 问题二：UX检测结果显示"条件依赖"，报"应用包不存在"是什么原因？ 原因显示说明：应用包不存在。

  ![](https://media:101782454469240656 "点击放大")
* 问题三：UX检测结果显示"元服务胶囊热区冲突"不通过，导航栏过宽该如何解决？ ![](https://media:101782454469265657 "点击放大")

* 问题四：UX检测结果显示"不涉及"该如何处理？ ![](https://media:101782454469296658 "点击放大")

* 问题五：UX检测结果显示"不通过"，如何定位和修复？ ![](https://media:101782454469324659 "点击放大")

#### 解决方案

* 问题一解决方案： UX检测时部分规则依赖debug版本应用进行测试，请安装应用的debug签名版本重启手机后重新测试。

* 问题二解决方案： UX检测时部分规则依赖应用包完成，如果手机上已安装了应用，UX测试的部分结果会提示应用包不存在，请通过DevEco Testing进行应用的安装和测试。

* 问题三解决方案： 应用UX体验建议中关于热区的标准可参考[适用范围](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/experience-suggestions-ux#section1541617350183)中"点击热区"，使用[AtomicServiceNavigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-atomicservicenavigation#atomicservicenavigation-1)设置导航栏的宽度。

* 问题四解决方案： 检测结果为不涉及代表测试用例的执行条件不满足，不会执行相关的测试场景，可以点击不涉及前面的"查看"进行详细查看。

  ![](https://media:101782454469351660)
* 问题五解决方案： 举例"典型手势时长设计"测试不通过，点击对应的"不通过数"-\>查看定位日志和修复指南。

  ![](https://media:101782454469395661 "点击放大")

  定位日志查看：

  ![](https://media:101782454469421662 "点击放大")

  修复指南查看：

![](https://media:101782454469451663 "点击放大")  
