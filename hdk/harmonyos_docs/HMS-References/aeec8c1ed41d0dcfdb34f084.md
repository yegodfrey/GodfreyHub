---
name: document/cn/HMS-References/wallet-api-server-hwWalletObject-6
title: relatedPassIds
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/wallet-api-server-hwWalletObject-6
source: portal
---

# **定义**

typeId| String| Optional| Template ID for the linked object, namely, class.id.  
---|---|---|---  
typeId| String| 可选  
| 关联对象的卡券类型，即 passTypeIdentifier。  
id| String| 可选| 关联对象的个人化数据 Id，即 serialNumber。  
  
# **示例**  

    
    复制
              1. {
              2.   "relatedPassIds": [
              3.     {
              4.       "typeId": "${passTypeIdentifier}",
              5.       "id": "${serialNumber}"
              6.     }
              7.   ]
              8. }

  


  

