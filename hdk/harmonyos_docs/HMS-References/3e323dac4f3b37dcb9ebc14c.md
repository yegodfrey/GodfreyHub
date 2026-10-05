---
name: document/cn/HMS-References/wallet-api-server-hwWalletObject-12
title: localized
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/wallet-api-server-hwWalletObject-12
source: portal
---

# **描述**

多语言的字段在 localized 中统一提供，按照语言类型组织。

具体字段展示时如果需要国际化。根据 key 值引用即可。

语言类型遵循：BCP 47语言标记。

  


# **定义**

key| String| Mandatory| Field ID. The key value must be unique across all languages of the same type.  
---|---|---|---  
key| String| 必选| 字段标识，在同一语言类型下 key 值唯一。与 [valueObject ](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/wallet-api-server-hwWalletObject-11)中的 localizedValue 或 localizedLabel 对应。  
language| String| 必选| 语言类型。  
value| String| 必选| 语言类型对应的值。  
  
# **示例**
    
    复制
              1. {
              2.   "localized": [
              3.     {
              4.       "key": "localizedValue_merchantName",
              5.       "language": "zh-cn",
              6.       "value": "华为"
              7.     },
              8.     {
              9.       "key": "localizedLabel_merchantName",
              10.       "language": "zh-cn",
              11.       "value": "公司名称"
              12.     },
              13.     {
              14.       "key": "localizedValue_merchantName",
              15.       "language": "en",
              16.       "value": "Huawei"
              17.     },
              18.     {
              19.       "key": "localizedLabel_merchantName",
              20.       "language": "en",
              21.       "value": "Company Name"
              22.     }
              23.   ]
              24. }
