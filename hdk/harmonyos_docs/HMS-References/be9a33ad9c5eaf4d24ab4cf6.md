---
name: document/cn/HMS-References/wallet-api-server-hwWalletObject-8
title: barCode
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/wallet-api-server-hwWalletObject-8
source: portal
---

# **定义**

text| String| Optional| Description or number under the barcode.  
---|---|---|---  
text| String| 可选| 条形码下面一段描述或者数字  
type| String| 必选| 类型，当前支持如下两种  
条形码：codabar  
二维码：qrCode  
value| String| 必选| 二维码的内容  
encoding| String| 必选| 编码方式，如 UTF-8  
  
# **示例**
    
    复制
         
              1. {
              2.   "barCode": {
              3.     "type": "codabar",
              4.     "encoding": "UTF-8",
              5.     "value": "3455566",
              6.     "text": "3455566"
              7.   }
              8. }
