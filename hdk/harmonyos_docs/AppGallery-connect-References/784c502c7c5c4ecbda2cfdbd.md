---
name: document/cn/AppGallery-connect-References/agcapi-pms-ppriceinfo-harmonyosnext-0000002131350736
title: ProductPriceInfo
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-pms-ppriceinfo-harmonyosnext-0000002131350736
---

# ProductPriceInfo

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:--------|:----------|:-----|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
|country|M|String|国家码，请参见[国家/地区、语言、币种列表](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-supported-countries-overview-0000001146718725)，例如CN。 默认值CN。|
|price|M|String|定价，单位为分。 例如：1.99元此参数需要传入199。|
|startDate|M|Long|价格调整开始时间。默认值：当前时间。 > 说明 > 价格调整计划必须连续，开始时间必须等于上一个调整计划的结束时间。|
|endDate|O|Long|价格调整结束时间。若不填写结束时间，则默认值：永久。|
|tag|M|String|价格调整标识。|

