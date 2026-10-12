---
name: document/cn/AppGallery-connect-Guides/agc-applinking-ios-integrationsdk-0000001372935825
title: 集成SDK
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-applinking-ios-integrationsdk-0000001372935825
---

# 集成SDK

## 添加配置文件

为了简化配置步骤，AGC为您提供了保存应用配置信息的配置文件。只需将配置文件添加到您的工程目录，AGC上的应用信息将会被自动加载到您的开发环境。

1. [获取agconnect-services.plist文件](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-applinking-obtain-files-0000001318168764#section1538193920578)。
2. 将"agconnect-services.plist"文件添加到Xcode工程目录下。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/w332E1HhRNGhJ9eJWfgmVQ/zh-cn_image_0000001372963941.png?HW-CC-KV=V1&HW-CC-Date=20261008T155708Z&HW-CC-Expire=31536000000&HW-CC-Sign=736974EF3BA16AA6439558D976F4D3E64EC0390C0036FDA70BF7719239A1B1EE)

## 集成AGC及聚合链接SDK

### 使用CocoaPods方式集成

1. 打开命令行窗口，导航至Xcode项目所在的位置。
2. 创建Podfile文件。如果已经存在，可跳过本步骤。

   ```screen
   cd project-directory 
   pod init
   ```

3. 在podfile中添加AGC SDK依赖的pod。

   ```screen
   pod 'AGConnectCore','~> 1.9.4.300'
   ```

4. 在podfile中添加聚合链接SDK要依赖的pod。

   ```screen
   pod 'AGConnectAppLinking','~> 1.9.4.300'
   ```

   > 说明
   >
   > 添加AGC服务依赖的pod后，可以自动集成AGConnectCore，AGConnectCore的pod可不配置。
5. 安装pod，然后打开.xcworkspace文件查看该项目。

   ```screen
   pod install
   ```

6. 初始化AGC SDK。 在项目的AppDelegate.m中导入头文件 #import <AGConnectCore/AGConnectCore.h> , 在 application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions的方法中添加如下代码：

   **OBJECTIVE-C**

   ```screen
   #import "AppDelegate.h"
   #import <AGConnectCore/AGConnectCore.h>

   @implementation AppDelegate
   - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
        // Override point for customization after Application launch.
        [AGCInstance startUp];//初始化
        return YES;
   }
   ```

7. （可选）配置剪切板读取规则。 集成了聚合链接SDK的应用在首次启动时，聚合链接SDK会读取剪切板内容来获取链接信息，用于到达应用内指定的内容。

   在iOS 14及以上版本的设备中，当用户首次打开应用时，如果App读取剪切板，iOS系统会向用户发送提示信息。如果您担心影响用户的体验，可以通过agc_applinking_not_read_pasteboard配置项控制是否关闭此功能：
   > 注意
   >
   > 如果关闭读取剪切板功能，会导致延迟深度链接功能不可用，即用户在安装应用后首次打开时无法跳转到原深度链接指定的地址。
   * 不关闭App读取剪切板功能。 在应用的Xcode项目的Info.plist文件中增加agc_applinking_not_read_pasteboard配置项后，将Type配置为Boolean，Value配置为NO。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/JcEr1P4rSFSun61pp1vmaw/zh-cn_image_0000001372603621.png?HW-CC-KV=V1&HW-CC-Date=20261008T155708Z&HW-CC-Expire=31536000000&HW-CC-Sign=9DD9B6DCD8DE8FBA87822E5DC3FB4D300FEDABEAD160EFFCE2586B85A2B2F4B4)
   * 关闭App读取剪切板功能。 不需要在应用的Xcode项目的Info.plist文件中增加agc_applinking_not_read_pasteboard配置项，或者在应用的Xcode项目的Info.plist文件中增加agc_applinking_not_read_pasteboard配置项，将Type配置为Boolean，Value配置为YES。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/BJc6jKVFQE-xBvRyXqv-_g/zh-cn_image_0000001321523620.png?HW-CC-KV=V1&HW-CC-Date=20261008T155708Z&HW-CC-Expire=31536000000&HW-CC-Sign=3AAEA2D14DE09D3D9964B1092E428935B53697FB62ADD5B25F32D1E6E12A3ED0)

### 不使用CocoaPods方式集成

1. 下载AGC SDK。

   |包名|SDK说明|下载地址|数字签名（SHA256）校验|
   |:--------------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|
   |agconnectcore-1.9.4.300.zip|AGC框架包。|点击[下载](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/42/v3/fbQcVDBWSbqqwzg7oG7fow/agconnectcore-1.9.4.300.zip?HW-CC-KV=V1&HW-CC-Date=20260605T072200Z&HW-CC-Expire=315360000&HW-CC-Sign=5532F643F2FC374854B1746743D701DD8EC23D3A71B74D9A223F86547B4A681F )。|d0f905c106b1ee37b73bbadf50ff3cd0297febf3c097d3a1a40059ec37a833a2|
   |agconnectcredential-1.9.4.300.zip|AGC网关鉴权包。|点击[下载](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/72/v3/teS22HRESMuEg7iBw8eoFA/agconnectcredential-1.9.4.300.zip?HW-CC-KV=V1&HW-CC-Date=20260605T072800Z&HW-CC-Expire=315360000&HW-CC-Sign=ACBAB17604E27FA4A4643561B5CFCD4DE338504440CA738A06DE4A15B708D036 )。|54c9b788328fb99863894955eda5993b88d91796f415b28c22a82b8f43d67623|
   |hmfoundation-1.9.4.300.zip|Task包。|点击[下载](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/d5/v3/eX4PX--sTJuBHVGHJNKRiw/hmfoundation-1.9.4.300.zip?HW-CC-KV=V1&HW-CC-Date=20260605T072100Z&HW-CC-Expire=315360000&HW-CC-Sign=C170D9FC6FDD0C484E25A4611EFEE63192431E36B8B1F8195E43C5D4247ACD74 )。|404228ec0776d77cef377196e784c8fb79124e39ef04d99a8da543044bed6680|

2. 下载聚合链接SDK。

   |服务|包名|SDK说明|数字签名（SHA256）校验|
   |:---|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:---------------------------------------------------------------|
   |聚合链接|[agconnectapplinking-1.9.4.300.zip](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/e3/v3/MjhlIvHoSjOGU-09mLwHCQ/agconnectapplinking-1.9.4.300.zip?HW-CC-KV=V1&HW-CC-Date=20260605T072300Z&HW-CC-Expire=315360000&HW-CC-Sign=0572861483E6E6E028B2033508BF8D99CCB2B8B28FC6A4535B247FCAECE79151 )|聚合链接针对iOS系统提供的客户端SDK。|cb0802a496a6c226e89a2052485a47033a8a2f68478135b57537ae59a8b213fc|

3. 将下载的压缩包解压到本地。
4. 将如下文件一起拖入到Xcode工程中。

   |文件|所在包名|需求场景|
   |:----------------------------|:--------------------------------|:-----|
   |AGConnectCredential.framework|agconnectcredential-x.x.x.xxx.zip|基础包集成|
   |AGCResources.bundle|agconnectcredential-x.x.x.xxx.zip|基础包集成|
   |AGConnectCore.framework|agconnectcore-x.x.x.xxx.zip|基础包集成|
   |HMFoundation.framework|hmfoundation-x.x.x.xxx.zip|基础包集成|
   |AGConnectAppLinking.framework|agconnectapplinking-x.x.x.xxx.zip|聚合链接集成|

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/xUk6rtPWQlGnYZTkj1W9eA/zh-cn_image_0000001372844261.png?HW-CC-KV=V1&HW-CC-Date=20261008T155708Z&HW-CC-Expire=31536000000&HW-CC-Sign=177A4356BD7BFCB7C83EE5D29FFFC61C7FAAB56162FF9D543001266BC2D8870B)
5. 勾选"Copy items if needed"选项。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/SH0neNgIRfWpOH0NRV0rDw/zh-cn_image_0000001372763445.png?HW-CC-KV=V1&HW-CC-Date=20261008T155708Z&HW-CC-Expire=31536000000&HW-CC-Sign=A48FB6F0C248D94581164613228911958C9330130BF84E4C58B2F8D0BA56D598 "点击放大")


6. 修改工程配置文件。 在Target -> Build Settings -> Other Linker Flags配置中添加'-ObjC'。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/X6p3Ed07QOeKEKFQafM8HA/zh-cn_image_0000001321843484.png?HW-CC-KV=V1&HW-CC-Date=20261008T155708Z&HW-CC-Expire=31536000000&HW-CC-Sign=B3C129F7E6735E01D296CFEB9D0A8A5F07D477104893C7F3923667D8C6ED0B1C "点击放大")
7. 初始化AGC SDK。 在项目的AppDelegate.m中导入头文件 #import <AGConnectCore/AGConnectCore.h> , 在 application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions的方法中添加如下代码：

   **OBJECTIVE-C**

   ```screen
   #import "AppDelegate.h"
   #import <AGConnectCore/AGConnectCore.h>

   @implementation AppDelegate
   - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
        // Override point for customization after Application launch.
        [AGCInstance startUp];//初始化
        return YES;
   }
   ```


8. （可选）配置剪切板读取规则。 集成了聚合链接SDK的应用在首次启动时，聚合链接SDK会读取剪切板内容来获取链接信息，用于到达应用内指定的内容。

   在iOS 14及以上版本的设备中，当用户首次打开应用时，如果App读取剪切板，iOS系统会向用户发送提示信息。如果您担心影响用户的体验，可以通过agc_applinking_not_read_pasteboard配置项控制是否关闭此功能：
   > 注意
   >
   > 如果关闭读取剪切板功能，会导致延迟深度链接功能不可用，即用户在安装应用后首次打开时无法跳转到原深度链接指定的地址。
   * 不关闭App读取剪切板功能。 在应用的Xcode项目的Info.plist文件中增加agc_applinking_not_read_pasteboard配置项后，将Type配置为Boolean，Value配置为NO。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/TLgybptBQwqePHivGX9ySw/zh-cn_image_0000001372603621.png?HW-CC-KV=V1&HW-CC-Date=20261008T155708Z&HW-CC-Expire=31536000000&HW-CC-Sign=F547B28AA0F8940AE72C29E42A1952293F3E7552D82D08FEBC61D625471F2E88)
   * 关闭App读取剪切板功能。 不需要在应用的Xcode项目的Info.plist文件中增加agc_applinking_not_read_pasteboard配置项，或者在应用的Xcode项目的Info.plist文件中增加agc_applinking_not_read_pasteboard配置项，将Type配置为Boolean，Value配置为YES。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/07/v3/V1IfG3S4Q4OyjfR7fSe4IA/zh-cn_image_0000001321523620.png?HW-CC-KV=V1&HW-CC-Date=20261008T155708Z&HW-CC-Expire=31536000000&HW-CC-Sign=67AE18C86301BFF30C8D9BEA385A145E9B12FC0555DD90CCF494D0880AE7F37B)

## （可选）将密钥信息传递给AGC

### 通过配置文件参数传递密钥

AGC SDK提供了AGCServicesConfig类来对agconnect-services.plist文件中的参数进行配置，如果您在下载配置文件时选择了"不包含密钥"，则agconnect-services.plist文件中将不包含client_id、client_secret和api_key参数，您必须通过AGCServicesConfig类的接口在应用启动时将参数设置给AGC SDK。

1. 创建AGCServicesConfig对象。

   ```screen
   AGCServicesConfig *config = [[AGCServicesConfig alloc] initWithDefaultPlist];
   ```

2. 设置clientId、clientSecret和apiKey参数。

   ```screen
   config.clientId = @"YOUR_CLIENT_ID";
   config.clientSecret = @"YOUR_CLIENT_SECRET";
   config.apiKey = @"YOUR_API_KEY";
   ```

   AGCServicesConfig类还支持设置cpId（开发者的账号ID）、productId（项目ID）和appId（应用ID）参数。

   ```screen
   config.cpId = @"YOUR_CP_ID";
   config.productId = @"YOUR_PRODUCT_ID";
   config.appId = @"YOUR_APP_ID";
   ```

   参数的值可在AGC控制台"项目设置 > 常规"页面中查询，对应关系如下：
   * *"YOUR_CLIENT_ID"*替换为"常规"页面"项目"栏中"Client ID"的值。
   * *"YOUR_CLIENT_SECRET"*替换为"常规"页面"项目"栏中"Client Secret"的值。
   * *"YOUR_API_KEY"*替换为"常规"页面"项目"栏中"API密钥（凭据）"的值。
   * *"YOUR_CP_ID"*替换为"常规"页面"开发者"栏中"Developer ID"的值。
   * *"YOUR_PRODUCT_ID"*替换为"常规"页面"项目"栏中"项目ID"的值。

   *YOUR_APP_ID"*替换为当前AGC控制台网页地址栏中的"appId"的值。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/H0pIMw1KRn25U7Bly-cdNw/zh-cn_image_0000001276983674.png?HW-CC-KV=V1&HW-CC-Date=20261008T155708Z&HW-CC-Expire=31536000000&HW-CC-Sign=2B15C7DE23F1865CAC1FC6D0448E546C9EBA21F143B3E9D62FEF68863F937A35)
3. 把手动创建的AGCServicesConfig对象传递到启动代码中。 将application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions的方法的初始化代码"[AGCInstance startUp]"修改为：

   ```screen
   [AGCInstance startUp:config];
   ```

### 通过Token传递密钥

如果您认为client_id和client_secret放在json文件里不安全，我们建议您将client_id和client_secret放在自己的服务端。先调用https://connect-drcn.dbankcloud.cn/agc/apigw/oauth2/v1/token接口去换取Token，然后在初始化AGC SDK时通过[setCustomCredentialsProvider](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agccore-ios-agcservicesconfig-0000001098896302#section2065310480913)将Token传给AGC去使用。

Token接口请求示例：

```screen
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

```screen
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
    "access_token": "eyJhbGciOiJIUzU****************",
    "expires_in": 0
}
```

setCustomCredentialsProvider接口调用示例：

```screen
"Objective-C"
// 将自己获取的token和过期时间传入
 NSString *token = @"access_token";
 long expiration = expires_in;
 AGCServicesConfig *config = [[AGCServicesConfig alloc] initWithDefaultPlist];
 [config setCustomCredentialsProvider:^(HMFTaskCompletionSource<AGCToken *> * _Nonnull source, BOOL isForceRefresh) {
             [source setResult:[[AGCToken alloc] initWithToken:token expiration: expiration]];
    }];
[AGCInstance startUp:config];
```

```screen
"Swift"
let token = "access_token"
let expiration = expires_in
let config = AGCServicesConfig()
config.customCredentialsProvider = { source, isForceRefresh in
    source.result = AGCToken(token: token, expiration: expiration)
}
AGCInstance.startUp(config)
```

