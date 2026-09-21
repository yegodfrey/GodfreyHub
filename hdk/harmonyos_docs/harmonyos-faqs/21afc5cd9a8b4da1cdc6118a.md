---
name: document/cn/harmonyos-faqs/faqs-ux-basic-quality-test-1
title: 如何定位UX测试结果不通过问题
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ux-basic-quality-test-1
---

# 如何定位UX测试结果不通过问题

## 问题现象

* 问题一：使用DevEco Testing执行UX测试结果显示"条件依赖"，报"arklayout文件存储失败"或"arklayout文件依赖调试版本应用"： 测试结果：条件依赖。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/piqsw--uQESH8Spwud5Rew/zh-cn_image_0000002628563632.png?HW-CC-KV=V1&HW-CC-Date=20260909T175758Z&HW-CC-Expire=31536000000&HW-CC-Sign=90E69F3CDB8D77746342F5E7E4DFF9DC7999D4C46F35EDC35E8F1E3C1DCA7A8C "点击放大")

  原因说明：arklayout文件存储失败。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/i4bTzWqRQr-tHPDuj9aubw/zh-cn_image_0000002658922937.png?HW-CC-KV=V1&HW-CC-Date=20260909T175758Z&HW-CC-Expire=31536000000&HW-CC-Sign=19B7076B016F0E1CC3B97296E3B18AC5C25D7521A3AA1CC0A211B137320572A6 "点击放大")

  原因说明：arklayout文件依赖调试版本应用。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d/v3/3QEjao7FSq6yTJ8V9w0j1Q/zh-cn_image_0000002658802983.png?HW-CC-KV=V1&HW-CC-Date=20260909T175758Z&HW-CC-Expire=31536000000&HW-CC-Sign=484D57D255468F7D461C1459E80566C39BAC65EDB81AE478890A08C5B6041D69 "点击放大")
* 问题二：UX检测结果显示"条件依赖"，报"应用包不存在"是什么原因？ 原因显示说明：应用包不存在。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/2OIanelbQgKa0bohLaIi4w/zh-cn_image_0000002628403724.png?HW-CC-KV=V1&HW-CC-Date=20260909T175758Z&HW-CC-Expire=31536000000&HW-CC-Sign=28B4218CFD086A6A2FFBDC82B892A0C6D4E750684FD2F70B2ACD1C755F0247CA "点击放大")
* 问题三：UX检测结果显示"元服务胶囊热区冲突"不通过，导航栏过宽该如何解决？ ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5c/v3/41YfuJdRS427M9x5s6v4rQ/zh-cn_image_0000002628563634.png?HW-CC-KV=V1&HW-CC-Date=20260909T175758Z&HW-CC-Expire=31536000000&HW-CC-Sign=285E083064209878632CD11E92CABC36BF90747F1095646153862E77E7C17F9C "点击放大")

* 问题四：UX检测结果显示"不涉及"该如何处理？ ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/J2Ws_FaaQliPl4tMzMn9Aw/zh-cn_image_0000002658922939.png?HW-CC-KV=V1&HW-CC-Date=20260909T175758Z&HW-CC-Expire=31536000000&HW-CC-Sign=4B0512FA84857F2286BC3A5F1AF92277E855DA40E5597F9C518395706AF7CEA0 "点击放大")

* 问题五：UX检测结果显示"不通过"，如何定位和修复？ ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/YGEb3aTTTRGzAgaG_tkbmQ/zh-cn_image_0000002658802985.png?HW-CC-KV=V1&HW-CC-Date=20260909T175758Z&HW-CC-Expire=31536000000&HW-CC-Sign=D7BC631ED187E723810493C2A457C8A8D829C42C0D3BAE542118066B9AF35A4F "点击放大")

## 解决方案

* 问题一解决方案： UX检测时部分规则依赖debug版本应用进行测试，请安装应用的debug签名版本重启手机后重新测试。

* 问题二解决方案： UX检测时部分规则依赖应用包完成，如果手机上已安装了应用，UX测试的部分结果会提示应用包不存在，请通过DevEco Testing进行应用的安装和测试。

* 问题三解决方案： 应用UX体验建议中关于热区的标准可参考[适用范围](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/experience-suggestions-ux#section1541617350183)中"点击热区"，使用[AtomicServiceNavigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-atomicservicenavigation#atomicservicenavigation-1)设置导航栏的宽度。

* 问题四解决方案： 检测结果为不涉及代表测试用例的执行条件不满足，不会执行相关的测试场景，可以点击不涉及前面的"查看"进行详细查看。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/ZPLtJzYYR8iisPoM7ryxvA/zh-cn_image_0000002628403726.png?HW-CC-KV=V1&HW-CC-Date=20260909T175758Z&HW-CC-Expire=31536000000&HW-CC-Sign=28234B0289B44DE8EC4A22A4E43D51AEE113381AE40083EC2075FC62E96E2025)
* 问题五解决方案： 举例"典型手势时长设计"测试不通过，点击对应的"不通过数"->查看定位日志和修复指南。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/yzqhQ_iaRLyQDvKtCmppwQ/zh-cn_image_0000002628563636.png?HW-CC-KV=V1&HW-CC-Date=20260909T175758Z&HW-CC-Expire=31536000000&HW-CC-Sign=569142242757CB46F7C6D73088AF28503422687CFA2BC207C36085C8D6D0F2D4 "点击放大")

  定位日志查看：

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8/v3/N23R9Rs7TyaeoJputlqoNw/zh-cn_image_0000002658922941.png?HW-CC-KV=V1&HW-CC-Date=20260909T175758Z&HW-CC-Expire=31536000000&HW-CC-Sign=28862A35A662BDC8A559A9D76527A90208F23E6453B478BB69B6CA2F2D952E71 "点击放大")

  修复指南查看：

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/MqY_im-qSw2GIGs0r0L_eA/zh-cn_image_0000002658802987.png?HW-CC-KV=V1&HW-CC-Date=20260909T175758Z&HW-CC-Expire=31536000000&HW-CC-Sign=0D34A604C05A970BF9113BC27D32B29E4241FF34B57DE3EF2B81022F646DF531 "点击放大")

