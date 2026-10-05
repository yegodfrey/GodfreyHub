---
name: document/cn/SPPartnerCenter-develop-Guides/ht-publish-packagestates-0000002372776901
title: PackageStates
uri: https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ht-publish-packagestates-0000002372776901
source: portal
---

# PackageStates  
  
参数名称 | 必选(M)/可选(O) | 类型 | 参数说明  
---|---|---|---  
pkgId | M | String(64) | 软件包ID。  
successStatus | M | Integer(32) | 软件包状态汇总结果。 取值范围：
                * 0：正常
                * 1：解析中
                * 2：失败，表示软件包不可用  
errorCode | O | String(64) | 当successStatus为2时，errorCode会展示具体的错误码。
