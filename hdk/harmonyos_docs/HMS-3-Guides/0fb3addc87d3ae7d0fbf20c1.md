---
name: document/cn/HMS-3-Guides/push-basic-server
title: 服务端开发
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-Guides/push-basic-server
source: portal
---

华为Push服务端接入基于HTTP协议，下面介绍接入开发指导。

注意：

注意：应用在服务端发送消息之前需要先获取应用级AT(Access Token)，获取AT请参考：开放平台鉴权-[客户端密码模式](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/30101#h2-3-2-)

本章节指导开发者基于HTTP协议完成Push基础能力所需的服务端开发。整体功能流程图如下：

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191209145826.18881910394678423178289091037441:50510119024806:2800:D657BF087160DC3F0B540EDF4B46EF406C0A3394A7059A242C6CAE6AB26150E7.gif?needInitFileName=true?needInitFileName=true)

开发者要实现基于HTTP协议给华为手机推送Push消息的功能，需要完成如下开发步骤：

  1. 开发者服务器获取接入令牌AccessToken，详细请参考开放平台鉴权-[客户端密码模式](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/30101#h2-3-2-)。****

  2. 开发者服务器调用API发送Push消息，详细请参考[服务端发送Push消息](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/push-server-send)。

  3. 开发者应用服务器接收Push消息回执，详细请参考[服务端消息回执API](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/push-receiptapi-v3)。

开发者如果需要感知Push消息到达设备的状态信息，则要完成该步骤的开发。Push消息回执发生在系统检测到客户端有应答返回，且开发者华为AppGallery Connect平台上在开通了“消息回执”权益的场景，具体请参考[消息回执章节开通回执权益部分](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/push-receipt-v3#receiptright)，消息回执由华为Push服务器发往开发者服务器，开发者需自行实现接口接收华为Push服务器发送的回执消息。




**典型通知栏消息示例报文：**
    
    
     复制
      
        1. {
        2.     "validate_only": false,
        3.     "message": {
        4.         "notification": {
        5.             "title": "title",
        6.             "body": "body"
        7.         },
        8.         "android": {
        9.             "notification": {
        10.                 "title": "android title",
        11.                 "body": "android body",
        12.                 "click_action": {
        13.                     "type": 1,
        14.                     "intent": "#Intent;compo=com.rvr/.Activity;S.W=U;end"
        15.                 }
        16.             }
        17.         },
        18.         "token": [
        19.             "pushtoken1",
        20.             "pushtoken2"
        21.         ]
        22.     }
        23. }
    
    

**典型透传消息示例报文：**
    
    
     复制
      
        1. {
        2.     "validate_only": false,
        3.     "message": {
        4.         "data": "{'param1':'value1','param2':'value2'}",
        5.         "token": [
        6.             "pushtoken1",
        7.             "pushtoken2"
        8.         ]
        9.     }
        10. }
    
    

  

