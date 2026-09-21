---
name: document/cn/HMSCore-References/valueobject-0000001050160327
title: ValueObject
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/valueobject-0000001050160327
---

# ValueObject

|参数|是否必选|参数类型|描述|
|:-------------|:---|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|​key|是|String|字段标识，在整个卡券对象中保持唯一。|
|value|是|String|字段值。|
|label|否|String|字段标签值。必填还是非必填由各卡券中的具体字段决定。|
|localizedValue|否|String|如果value需要多语言，则此值为对应的多语言字段[Localized](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/localized-0000001050158374)中的key值。未标识此字段则在所有语言中展示默认的value值。|
|localizedLabel|否|String|如果label需要多语言，则此值为对应的多语言字段[Localized](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/localized-0000001050158374)中的key值。未标识此字段则在所用语言中展示默认的label值。|
|redirectUrl|否|String|跳转链接，用于字段点击跳转。可用于imageList和appendFields中的部分字段。|
|type|否|String|标识跳转链接的类型，用于urlList和imageList。取值范围为："URL"，"APP"，"FASTAPP"。|

示例：

```codeblock
{
    "key": "merchantName",
    "value": "Huawei",
    "label": "Company Name",
    "localizedValue": "localizedValue_merchantName",
    "localizedLabel": "localizedLabel_merchantName",
    "redirectUrl": "https://huawei.vmall.com/"
}
```

