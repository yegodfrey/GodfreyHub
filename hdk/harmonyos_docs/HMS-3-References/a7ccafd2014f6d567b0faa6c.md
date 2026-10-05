---
name: document/cn/HMS-3-References/appgallerykit_gettoken-v3
title: 获取Token-V3
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-References/appgallerykit_gettoken-v3
source: portal
---

# 接口功能

应用在与华为服务器端交互前，需要对API客户端接入请求进行授权，鉴权成功后客户端可以获取一个认证Token，应用可以在该Token在有效期内访问已授权的资源。

# 接口约束

请参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/appgallerykit-createapiclient)提前获取用于生成Token的客户端ID和密钥。

# 请求地址

https://connect-api.cloud.huawei.com/oauth2/v1/token

# 请求参数

参数名称| 必选(M)/可选(O)| 类型| 参数说明  
---|---|---|---  
grant_type| M| String| 固定传入“clieant_credentials”。  
client_id| M| String| 客户端ID，即[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/appgallerykit-createapiclient)中生成的“客户端ID”。  
client_secret| M| String| 客户端密钥，即[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/appgallerykit-createapiclient)中生成的“密钥”。  
  
# 返回参数

参数名称| 必选(M)/可选(O)| 类型| 参数说明  
---|---|---|---  
access_token| M| String| 认证Token，在客户端向华为服务端发送请求的Authorization Bearer头中携带。  
expires_in| M| long| **access_token** 的过期时间的时间戳。  
  
# 调用示例

类型| 样例  
---|---  
请求消息样例| 
    
    
    POST /oauth2/v2/token HTTP/1.1Host: oauth-login.cloud.huawei.comContent-Type: application/x-www-form-urlencodedgrant_type=client_credentials&client_id=12345&client_secret=bKaZ0VE3EYrXaXCdCe3d2k9fe  
  
返回消息样例| 
    
    
    HTTP/1.1 200 OKContent-Type: text/html;charset=UTF-8{"access_token":"CFyJ7eTl8WIPi9603E7Ro9Icy+K0JYe2qVjS8uzwCPltlO0fC7mZ0gzZX9p8CCwAai  
    U17nyP+N8+ORRzjjk1EA==","expires_in":3600,"token_type":"Bearer"  
  
  

