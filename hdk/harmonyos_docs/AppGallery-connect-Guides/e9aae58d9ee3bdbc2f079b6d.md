---
name: document/cn/AppGallery-connect-Guides/agc-auth-quickgame-integration-sdk-0000001276012300
title: 集成SDK
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-quickgame-integration-sdk-0000001276012300
---

# 集成SDK

#### 前提条件

在进行快游戏开发前，请先完成如下准备工作：

* 完成开发环境的搭建，包括在PC上安装[Cocos Creator](https://www.cocos.com/)、在调试快游戏的安卓手机上安装[快应用加载器](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-installtool-0000001126543467#section1026313173811)。
* 生成指纹证书，详细参见"[生成指纹证书](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-generate-fingerprint-0000001113452452)"。  

#### 快游戏集成SDK

1. 打开您的Cocos Creator工程，其目录示例如下。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251128110403.33744260445914180742639446240453:50001231000000:2800:4040BE1799F4E50C14209B9E43E6F0C0E05B4F1A2C7C75B9540491B3199F9EE5.png)

2. 参见[快游戏SDK](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Library/agc-auth-quickgame-sdkdownload-0000001182308451)，下载认证服务的JS SDK，将下载的js脚本放入Script目录下，建议单独创建目录存放，将所有js脚本设置导入为插件，具体步骤为：
   1. 资源管理器中点击选中js脚本。
   2. 选中属性检查器中的"Import As Plugin"。
   3. 点击属性检查器右上角的"Apply"。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251128110403.90307819829381240937187973754737:50001231000000:2800:EAE7BA072499CA89F62F560062114307C12715B333C11C9ECC50B857220C5AFB.png)
3. [获取agconnect-services.json文件](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-obtain-files-0000001276801300#section1294914391612)。
4. 配置导入和初始化。 在Cocos Creator工程的Script目录下新建agconnect-quickgame-init.js文件（若从Cocos Creator中新建文件，需要删除自动填充的代码，保证文件内容为空），将agconnect-services.json中的json拷贝到agconnect-quickgame-init.js文件中，并用其初始化agconnect，将agconnect-quickgame-init.js文件同样设置导入为插件，导入步骤参考[2](#ZH-CN_TOPIC_0000001276012300__li206591266314)。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251128110403.92929766398542071036666968998824:50001231000000:2800:20465B101EA0AAB4BA4C76795491FD27BC8AB15EAB697227A89584CBB750F1C0.png)  
   文件名必须为agconnect-quickgame-init.js，否则可能影响SDK加载。

   ```
   var agConnectConfig = {
       // 应用配置信息
   };
   // 初始化agc
   agconnect.instance().configInstance(agConnectConfig);
   ```

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251128110403.74605896705068176165322827697360:50001231000000:2800:89399CFE17C42DA61EC772B4182FD08A3E83B5DB61429FD40DA646846721EB05.png)  
集成SDK时如遇报错"code":10001,"msg":"agc network request error"，请参见[FAQ](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-faq-0000001053333997#section35241228172417)处理。  

#### （可选）将密钥信息传递给AGC

#### 通过配置文件参数传递密钥

AGC SDK提供了接口对参数进行配置，如果您在下载配置文件时选择了"不包含密钥"，则配置信息中将不包含client_id、client_secret和api_key参数。您可以参考如下方式，在应用启动调用agc的初始化方法完成后将参数设置给AGC SDK。

```
agconnect.instance().setApiKey("xxx")
agconnect.instance().setClientSecret("xxx")
agconnect.instance().setClientId("xxx")
```

#### 通过Token传递密钥

如果您认为client_id和client_secret放在json文件里不安全，我们建议您将client_id和client_secret放在自己的服务端。先调用https://connect-drcn.dbankcloud.cn/agc/apigw/oauth2/v1/token接口去换取Token，然后在初始化AGC SDK时通过[setCustomCredentialsProvider](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agccore-web-agcinstance-0000001159665969#section1269002312125)将Token传给AGC去使用。

Token接口请求示例：

```
POST /agc/apigw/oauth2/v1/token
Host: connect-drcn.dbankcloud.cn
Content-Type: application/json
{
   "grant_type":"client_credentials",
   "client_id":"agc应用页面提供的client_id",
   "client_secret":"agc应用页面提供的client_secret",
   "useJwt":1
}
```

Token接口响应示例：

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
    "access_token": "eyJhbGciOiJIUzU****************",
    "expires_in": 0
}
```

setCustomCredentialsProvider接口调用示例：

```
//初始化agc sdk
agconnect.instance().configInstance(agConnectConfig);

// 定义一个class，用于向agc提供token信息
class ClientTokenProvider {
  // 定义getToken方法，支持bool类型入参forceRefresh，用于token过期时刷新
  getToken(forceRefresh) {
    if (forceRefresh) {
      // 重新调用/agc/apigw/oauth2/v1/token接口
      return {
        expiration: new_expires_in, // token的有效期
        tokenString: new_access_token // 新的access_token
      }
    }
    return {
      expiration: expires_in,
      tokenString: access_token
    }
  }

  agconnect.instance().setCustomCredentialsProvider(new ClientTokenProvider()); //传入Provider对象
}
```

