---
name: document/cn/AppGallery-connect-Guides/agc-get-started-web-0000001057762291
title: Web使用入门
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-get-started-web-0000001057762291
---

# Web使用入门

AppGallery Connect（简称AGC）从构建、质量、增长等方面为您提供了多个开发服务，一个AGC服务的基本开发流程如下：

1. [准备开发环境](#section1270317123213)
2. [创建项目和应用](#section113292017144)
3. [设置数据处理位置](#section17131722114914)
4. [集成AGC SDK](#section1552914317248)
5. [开发应用](#section820114550411)
6. [接入AGC服务](#section1534211161351)

#### 准备开发环境

1. 安装AGC JavaScript SDK支持的浏览器。  

   |服务|Chrome|Edge|Firefox|华为浏览器|Safari|UC浏览器|QQ浏览器|IE11|
   |:-------------------------------|:------------------------------------|:------------------------------------|:------------------------------------|:------------------------------------|:------------------------------------|:------------------------------------|:------------------------------------|:------------------------------------|
   |* 认证服务 * 远程配置 * 云存储 * 云函数 * 云数据库|![](https://media:201775716927187904)|![](https://media:201775716927230905)|![](https://media:201775716927334906)|![](https://media:201775716927557907)|![](https://media:201775716928004908)|![](https://media:201775716928035909)|![](https://media:201775716928089910)|![](https://media:201775716928129911)|

   ![](https://media:201775716928162912)  
   AGC JavaScript SDK基于web最新标准构建，当你需要支持旧版浏览器和JavaScript环境时，推荐使用Babel来解决兼容性问题。Babel根据您指定的浏览器支持要求来引入polyfill，可将ES6标准的代码转换为向后兼容的JavaScript代码，使其能够正常运行在旧版本的浏览器或JavaScript环境中，更多关于Babel的使用请查看[使用指南](https://babeljs.io/docs/en/)。
2. 访问AGC页面时推荐使用谷歌浏览器。如果使用win10系统的火狐浏览器，可能出现请求被浏览器拦截，导致点击下载无响应的问题。 处理方法：

   1. 在火狐浏览器地址栏输入about:config。
   2. 查找security.csp.enable，将其切换为 false。
3. 在[华为开发者联盟](https://developer.huawei.com/consumer/cn)上注册成为开发者并完成实名认证，具体方法可参考[账号注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)。  

#### 创建项目和应用

1. 项目是您在AGC资源的组织实体，您可以将一个应用的不同平台版本添加到同一个项目中。如果您在使用AGC的服务时在AGC中还没有项目，则需要先创建项目，具体操作请参见[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)。
2. 如果您还没有在您的AGC项目中添加应用，请先完成应用的添加，具体请参见[创建Web应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-createweb-0000001912720988)。  

#### 设置数据处理位置

部分AGC服务涉及应用数据的处理，在使用此类服务前，您需要设置保存数据的站点，具体操作请参见[设置数据处理位置](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-data-storage-location-0000001162597847)。  

#### 集成AGC SDK

部分AGC服务提供了集成到本地的AGC SDK，在使用此类服务前需要将AGC SDK集成到您的开发环境，涉及的服务如下：

* 认证服务
* 远程配置
* 云存储
* 云函数
* 云数据库  

#### 获取应用配置信息

为了简化配置步骤，AGC为您提供了应用配置信息，您只需要将配置信息添加到您的项目中。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"开发与服务"。
2. 在项目列表中找到您的项目，在项目下的应用列表中选择您的应用，进入"项目设置"页面。 ![](https://media:201775716928209913)

3. 配置网站限制。

   当您的Web应用需要限制仅指定网站或IP地址才可访问已开通的API时，您可点击"网站限制"后的![](https://media:201775716928301914)，填写指定的域名地址。

   ![](https://media:201775716928702915)  
   ![](https://media:201775716928741916)  
   * 域名地址需要以http://和https://开头。
   * 最多支持配置5个地址，多个地址使用逗号分隔。
4. 获取应用的相关配置信息。
   * 如果您不打开"不包含密钥"开关，配置文件中会包含密钥信息，可能存在一定的安全风险。建议您将密钥存储在您自己的服务器，并妥善保管。
   * 如果您打开"不包含密钥"开关，配置文件中将不包含密钥信息。后续您需调用AGC SDK的接口手动将密钥传给AGC使用，具体请参见[通过配置文件参数传递密钥](#section7775132744813)；如果您有更高的安全要求，可使用密钥信息换取Token，通过Token将密钥传递给AGC，具体请参见[通过Token传递密钥](#section86239164318)。

   <br />

![](https://media:201775716928811917)  

#### 集成AGC JavaScript SDK

1. 如果您还没有package.json文件，可在JavaScript项目的根目录中运行以下命令进行创建。

   ```
   npm init
   ```

   请按实际情况填写项目的配置信息。
2. 执行以下命令，安装AGC JS SDK到您的项目中，并将依赖添加到您项目中的package.json文件中。  

   |服务名称|配置命令|
   |:---|:----------------------------------------------------------|
   |认证服务|``` npm install --save @hw-agconnect/auth@1.5.1 ```|
   |远程配置|``` npm install --save @hw-agconnect/remoteconfig@1.5.1 ```|
   |云存储|``` npm install --save @hw-agconnect/cloudstorage@1.5.1 ```|
   |云函数|``` npm install --save @hw-agconnect/function@1.5.1 ```|
   |云数据库|``` npm install --save @hw-agconnect/database@1.5.1 ```|

3. 在您的项目中导入agc组件。  

   |服务名称|配置命令|
   |:---|:-----------------------------------------------------------------------------------------------------------------------|
   |认证服务|``` import agconnect from "@hw-agconnect/api"; import "@hw-agconnect/auth"; import "@hw-agconnect/instance"; ```|
   |远程配置|``` import agconnect from "@hw-agconnect/api"; import "@hw-agconnect/remoteconfig"; import "@hw-agconnect/instance"; ```|
   |云存储|``` import agconnect from "@hw-agconnect/api"; import "@hw-agconnect/cloudstorage"; import "@hw-agconnect/instance"; ```|
   |云函数|``` import agconnect from "@hw-agconnect/api"; import "@hw-agconnect/function"; import "@hw-agconnect/instance"; ```|
   |云数据库|``` import agconnect from "@hw-agconnect/api"; import "@hw-agconnect/instance"; import "@hw-agconnect/database"; ```|

4. 在您的应用初始化阶段调用agc的初始化方法，应用配置信息请参考[获取应用配置信息](#section0451145762420)。

   ```
   var agConnectConfig =  {
       //应用配置信息
   };
   //初始化agc
   agconnect.instance().configInstance(agConnectConfig);
   ```

#### 设置数据端侧存储位置以及加解密方式

AGC SDK端侧的数据，您可自行实现加解密方法，并通过接口传入加密对象，SDK会通过该加密对象将需要存储的数据加密后存储。

如需对端侧存储数据进行加密，可按如下示例设置您用于加密的对象，传入的对象需包含decrypt和encrypt两个方法，[认证服务](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agcauth-web-0000001054503254#section19899713201012)、[远程配置](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/web-remoteconfig-agconnectconfig-0000001057269353#section11150753121814)也分别支持设置各自不一样的加密对象，如果已通过如下方式设置了加密对象，又单独设置了认证服务或者远程配置的加密对象，则认证服务或者远程配置使用其单独设置的解密对象。

```
function Crypt(){};
Crypt.prototype.encrypt = function(value){
// 加密逻辑  
return encryptedValue;
};
Crypt.prototype.decrypt = function(value){
// 解密逻辑  
return decryptedValue;
};
agconnect.instance().setCryptImp(new Crypt());
```

目前支持设置端侧数据存储位置的有：[认证服务](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcauth-web-0000001054503254#section1030814135113)、[远程配置](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/web-remoteconfig-agconnectconfig-0000001057269353#section4393954131811)。  
![](https://media:201775716928843918)  
设置端侧数据存储位置和加密对象需要在初始化阶段完成。

华为严格遵循《一般数据保护条例》(GDPR) ，华为也致力于帮助开发者在遵循GDPR规定的前提下取得成功。GDPR规定了数据控制者和数据处理者的义务，使用该服务时，开发者扮演着"数据控制者"的角色，而 华为 是"数据处理者"。数据处于开发者的控制之下，华为只在"数据处理者"义务和权利范围内处理数据，而开发者有责任遵循GDPR规定，承担"数据控制者"的义务。  

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

// 定义一个class，用于向AGC提供token信息
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

#### 开发应用

开发应用是指开发应用的具体功能，此部分由开发者自行完成，本文档不详细描述。  

#### 接入AGC服务

如果在开发过程中需要接入AGC的某个服务，请参考对应服务的开发指南。  
