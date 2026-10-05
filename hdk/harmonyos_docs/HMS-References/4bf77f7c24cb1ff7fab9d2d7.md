---
name: document/cn/HMS-References/wallet-api-server-hwWalletObject-4
title: fields
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/wallet-api-server-hwWalletObject-4
source: portal
---

# **定义**

countryCode| String| 可选| Country code.  
---|---|---|---  
countryCode| String| 可选| 国家码  
currencyCode| String| 可选| 货币单位  
status| [status](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-5)| 可选| 开发者自定义状态信息，包括状态和有效时间，会根据此状态值展示卡券是否失效。  
relatedPassIds| [relatedPassIds](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-6)| 可选| 卡券如果存在关联卡券，开发者可以在此填写关联卡券的ID。  
locationList| [locationList](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-7)| 可选| 地理位置，如果卡券类别支持根据地理围栏通知，可以填写此信息。  
barCode| [barCode](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-8)| 可选| 条码/二维码，在使用卡券时展示，当不涉及条码/二维码展示时，可以不需要填充此字段。  
commonFields| List<[valueObject](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-11)>| 可选| 通用展示字段列表，即一种卡券中通常需要使用到的属性。  
appendFields| [](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-10)[](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-11)List<[valueObject](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-11)>| 可选| 附加展示字段列表，即同种卡券类型，不同商家根据场景差异化的展示信息。  
messageList| [](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-11)List<[valueObject](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-11)>| 可选| 卡券中的通知信息，与卡券的通用展示无关，商家通过此字段可以通知用户特定时间段的使用等等。  
timeList| [](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-11)List<[valueObject](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-11)>| 可选| 展示时间列表  
imageList| [](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-11)List<[valueObject](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-11)>| 可选| 卡券详情页面展示中的轮播图列表，如酒店会员卡可以通过轮播图更直观的将酒店服务图景展示给用户。  
textList| [](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-11)List<[valueObject](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-11)>| 可选| 展示文字列表，由开发者自定义，作为列表展示在详情页中。  
localized| [localized](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-12)| 可选| 多语言字段，当展示字段涉及多语言时，其他语言类型的字段在此节点中定义，由具体的节点通过key引用。  
ticketInfoList| [](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-11)List<[valueObject](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-11)>| 可选| 开发者自定义的票根信息。  
urlList| List<[valueObject](https://developer.huawei.com/consumer/cn/doc/wallet-api-server-hwWalletObject-11)>| 可选| 展示在卡片上的链接。  
  
# **示例**
    
    复制
         
              1. {
              2.   "fields": {
              3.     "countryCode": "zh-cn",
              4.     "currencyCode": "CNY",
              5.     "status": {
              6.       "state": "active",
              7.       "effectTime": "2019-11-13T00:00:00.111Z",
              8.       "expireTime": "2019-11-20T00:00:00.111Z"
              9.     },
              10.     "locationList": [
              11.       {
              12.         "longitude": "114.0679603815",
              13.         "latitude": "22.6592051284"
              14.       }
              15.     ],
              16.     "barCode": {
              17.       "text": "1118466050",
              18.       "type": "codabar",
              19.       "value": "1118466050",
              20.       "encoding": "UTF-8"
              21.     },
              22.     "commonFields": [
              23.       {
              24.         "key": "Number",
              25.         "value": "356688115",
              26.         "label": "NumberLabel",
              27.         "localizedValue": "Number"
              28.       }
              29.     ],
              30.     "appendFields": [
              31.       {
              32.         "key": "homepageUri",
              33.         "value": "https://www.huaw.com/",
              34.         "label": "homepadepartureDateTimegeUriLabel"
              35.       }
              36.     ],
              37.     "messageList": [
              38.       {
              39.         "key": "message[0]",
              40.         "value": "Lorem ipsum dolor sit amet, consecetetur adipiscing elit. Phasellus ac mi ex. Integer sollicitudin eu metus quis vehicula",
              41.         "label": "message"
              42.       },
              43.       {
              44.         "key": "message[1]",
              45.         "value": "consecetetur adipiscing elit. Phasellus ac mi ex.",
              46.         "label": "message[1]Label"
              47.       }
              48.     ],
              49.     "textList": [
              50.       {
              51.         "key": "text[0]",
              52.         "value": "Integer sollicitudin eu metus quis vehicula",
              53.         "label": "Text Module"
              54.       },
              55.       {
              56.         "key": "text[1]",
              57.         "value": "Lorem ipsum dolor sit amet, consecetetur adipiscing elit",
              58.         "label": "text[1]Label"
              59.       }
              60.     ],
              61.     "imageList": [
              62.       {
              63.         "redirectUrl": "https://www.huawei.com",
              64.         "value": "https://obs.cn-north-2.myhwclouds.com/nsp-hiwallet-pass-p02-drcn/serviceCard/img/FC2215CF30922A9719CCC03B41B4047C.jpg",
              65.         "label": "mainImage[0]label",
              66.         "key": "mainImage[0]"
              67.       },
              68.       {
              69.         "redirectUrl": "https://www.huawei.com",
              70.         "value": "https://obs.cn-north-2.myhwclouds.com/nsp-hiwallet-pass-p02-drcn/serviceCard/img/9D170D0030C719B2FA295B341EFB1A11.png",
              71.         "label": "mainImage[1]label",
              72.         "key": "mainImage[1]"
              73.       }
              74.     ],
              75.     "urlList": [
              76.       {
              77.         "key": "detail",
              78.         "value": "https://huawei.vmall.com/"
              79.       },
              80.       {
              81.         "key": "Main Image",
              82.         "value": "https://www.huawei.com/XXX1.png"
              83.       }
              84.     ],
              85.     "localized": [
              86.       {
              87.         "key": "cardName",
              88.         "language": "zh-cn",
              89.         "value": "Vmall gift card"
              90.       }
              91.     ]
              92.   }
              93. }

  

