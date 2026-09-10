---
name: document/cn/HMSCore-References/webapi-input-params-0000001050165377
title: 请求参数说明
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/webapi-input-params-0000001050165377
---

# 请求参数说明

#### Coordinate

|参数|是否必选|类型|说明|
|:--|:---|:-----|:---------------------|
|lat|是|double|纬度，取值范围：\[-90, 90\]。|
|lng|是|double|经度，取值范围：\[-180, 180\]。|

#### CoordinateBounds

|参数|是否必选|类型|说明|
|:--------|:---|:-----------------------------------|:------|
|northeast|是|[Coordinate](#section11247133131712)|东北角的位置。|
|southwest|是|[Coordinate](#section11247133131712)|西南角的位置。|

