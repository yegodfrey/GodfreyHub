---
name: document/cn/AppGallery-connect-References/server-rest-versionnamecond-0000001141564854
title: VersionNameCond
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/server-rest-versionnamecond-0000001141564854
---

# VersionNameCond

|参数|必选(M)/可选(O)|类型|描述|
|:-------|:----------|:---------|:-----------------------------------------------------------------|
|operator|M|String|操作符，取值范围： * CONTAINS：包含 * NOT_CONTAINS：不包含 * IN：等于 * REGEX：包含正则表达式|
|values|M|String\[\]|应用版本或者OS版本信息，数组最大长度64。当操作符为REGEX时只有1个值。|

