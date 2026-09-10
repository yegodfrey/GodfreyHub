---
name: document/cn/AppGallery-connect-Guides/agc-clouddb-sdk-integration-miniprogram-0000001518546752
title: 集成SDK并使用数据库
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-clouddb-sdk-integration-miniprogram-0000001518546752
---

# 集成SDK并使用数据库

小程序的数据将会储存在云侧，本地不会缓存数据。在进行数据管理操作时，您将会直接操作云侧数据。小程序SDK将会为您的应用与云数据库的通信和安全提供保障。  

#### 概述

此示例应用演示了如何快速的使用云数据库构建简单的图书管理服务。通过快速入门和示例应用，您将会了解到如下信息：

* 如何使用云数据库进行应用开发。
* 应用数据如何写入到云数据库。
* 如何实现数据的查询。
* 实时侦听数据的更改。

* 体验端云数据同步等功能。  

#### 开发前准备

使用云数据库构建应用服务，需要完成以下准备工作：

* 示例应用使用了认证用户的相关权限，需要开通AGC认证服务中"匿名账号"服务，详细请参见[开通认证服务](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-enable-service-0000001274125746)。
* 您已经获取到示例代码，请从[示例代码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Examples/agc-clouddb-samplecode-miniprogram-0000001251194017)获取。  

#### 新增和导出对象类型文件

您需要基于AGC控制台创建对象类型，请您遵循操作步骤创建示例中涉及的对象类型，并导出用于Web应用开发的json格式和js格式对象类型文件。不允许修改导出的json格式和js格式文件，否则会导致数据同步功能异常。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中点击需要配置云数据库的项目。
3. 在左侧导航栏选择"云开发（Serverless）\> 云数据库"，进入云数据库页面。
4. 点击"新增"，创建新的对象类型。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250925143010.69095175018375587123953104485831:50001231000000:2800:7A46D15016C5077DE49A999BE981DCDCB7C678C37A266FF768D966C762FD296F.png)

5. 输入"对象类型名"为"BookInfo"后，点击"下一步"。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250925143010.10689568873167009076189536294462:50001231000000:2800:D86FBEFF3ADF41D914F79631D8C32ECB6D479069F04161070A8B5474942CC6C5.png)

6. 点击"+新增字段"，新增如下表字段后，点击"下一步"。  

   |字段名称|类型|主键|非空|加密|敏感|默认值|
   |:----------|:------|:-|:-|:-|:-|:---|
   |id|Integer|✓|✓|--|--|--|
   |bookName|String|--|--|--|--|--|
   |author|String|--|--|--|--|--|
   |price|Double|--|--|--|--|--|
   |publisher|String|--|--|--|--|--|
   |publishTime|Date|--|--|--|--|--|
   |shadowFlag|Boolean|--|--|--|--|true|

7. 点击"+"新增索引，设置"索引名"为"bookName"，点击"下一步"。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250925143010.27829462384313305561883935535438:50001231000000:2800:BBFA123765CD9A82B0661553B71EC27454FDE75F66ED41E3B5FA51CE6387DBD2.png)

8. 按照如下要求设置各角色权限后，点击"确定"。  

   |角色|query|upsert|delete|
   |:----|:----|:-----|:-----|
   |所有人|✓|--|--|
   |认证用户|✓|✓|✓|
   |数据创建者|✓|✓|✓|
   |管理员|✓|✓|✓|

9. 创建完成后返回对象类型列表，可以查看已创建的对象类型。
10. 勾选创建的BookInfo对象类型，点击"导出"。若不勾选对象类型，默认导出所有对象类型。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250925143010.46162829450061350020775501866413:50001231000000:2800:6D8BB9FCEF9EE286D3E1E16D2D7686C6397A87971008DC8FEFAFEB3A667D75BA.png)

11. 导出"json格式"和"js格式"文件，导出的文件在后续步骤用于添加至本地开发环境。
    * 导出json格式文件 选择"json格式"，点击"确定"。后续[加载对象类型文件](#section167755176370)时，需要将此文件内容复制到app-schema.json文件中使用。

      ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250925143010.38139934156445975873111545234097:50001231000000:2800:BFCB63F5510448C75B4BBFE6CE9B8370B5CA0F674291FA0205E38E08C2139EC7.png)
    * 导出js格式文件 "导出文件格式"选择"js格式"，"使用场景"选择"客户端"。点击"确定"。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250925143010.88791982958374839246905178996342:50001231000000:2800:8493AC35C6D13EA75025BEBCA41DE9E7CDC57172EB244A2135ECEFDF3D26F9E9.png)  

#### 新增存储区

此章节以建一个"存储区名称"为"QuickStartDemo"的存储区举例说明。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中点击需要配置云数据库的项目。
3. 在左侧导航栏选择"云开发（Serverless）\> 云数据库"，进入云数据库页面。
4. 点击"存储区"页签，点击"新增"。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250925143010.97330264721829796329857861592859:50001231000000:2800:A7B79CD5B8932CD779BBAB20014B9F54F787306B374DF8AB0AFB51CFF23C41C9.png)

<!-- -->

5. 在"新增存储区"弹框中填写"存储区名称"为"QuickStartDemo"，点击"确定"。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250925143010.96045557221029166915719963659965:50001231000000:2800:541A970011DF476F75D14940712EE7EE924476A147D5788EE0D63511C9E38C2B.png)

#### 集成SDK

<br />

#### 获取应用配置信息

为了简化配置步骤，AGC为您提供了应用配置信息，您只需要将配置信息添加到您的项目中。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"开发与服务"。
2. 在项目列表中找到您的项目，在项目下的应用列表中选择您的应用，进入"项目设置"页面。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250925143010.37558144431654636359998493029385:50001231000000:2800:FE6BE821E42626E0F4A1799A018FE1E4697C3DFCE1CDE379DE2EE9CA46347736.png)

3. 配置网站限制。

   当您的Web应用需要限制仅指定网站或IP地址才可访问已开通的API时，您可点击"网站限制"后的![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250925143010.20318861766592682349627104349075:50001231000000:2800:7B1B5E5E4092F5DD08858A238E4814228675DE84E9976D4FAAAA93147943E62E.png)，填写指定的域名地址。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250925143010.75117528119774661385516996284701:50001231000000:2800:900C124A2D532DD8F4BDD3C9F99466CADF82187FA4B050DE1AFE4AE03F5F552C.png)  
   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250925143010.42923420526765430128703535231960:50001231000000:2800:2A72C088CFBF72D5A456DB2AF73FDBBF65D4CE7928661EDE52E7B59FA428BE3E.png)  
   * 域名地址需要以http://和https://开头。
   * 最多支持配置5个地址，多个地址使用逗号分隔。
4. 获取应用的相关配置信息。
   * 如果您不打开"不包含密钥"开关，配置文件中会包含密钥信息，可能存在一定的安全风险。建议您将密钥存储在您自己的服务器，并妥善保管。
   * 如果您打开"不包含密钥"开关，配置文件中将不包含密钥信息。后续您需调用AGC SDK的接口手动将密钥传给AGC使用，具体请参见[通过配置文件参数传递密钥](#section1424414714819)；如果您有更高的安全要求，可使用密钥信息换取Token，通过Token将密钥传递给AGC，具体请参见[通过Token传递密钥](#section86239164318)。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250925143010.55841396324882020799353302533877:50001231000000:2800:A224AAFF5A4808FBFFB4FDE45946734AB5DA2A8B29CA9BE74EEEE39BA4D9922F.png)  

#### 集成SDK

1. 如果您还没有package.json文件，可在JavaScript项目的根目录中执行如下命令进行创建。 npm init

   请按实际情况填写项目的配置信息。
2. 安装云数据库服务JavaScript SDK到您的项目中。 npm install --save @hw-agconnect/database

3. 在您的项目中导入agc组件和database组件。

   ```
   import agconnect from "@hw-agconnect/api";
   import "@hw-agconnect/instance";
   import "@hw-agconnect/database";
   ```

4. 在您的应用初始化阶段调用AGC的初始化方法。

   ```
   var agConnectConfig =  {
       //应用配置信息
   };
   //初始化agc
   agconnect.instance().configInstance(agConnectConfig);
   ```

#### 加载对象类型文件

在开发应用时，可直接将AGC控制台上导出的json格式和js格式文件添加至本地开发环境中。即可通过AGConnectCloudDB类中的[createObjectType()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddb-miniprogram-0000001244514663#section10644219429)方法实现对象类型的定义和创建。您在进行本地应用开发时，无需再次创建对象类型。  
![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250925143011.36561291492516592976657658655774:50001231000000:2800:3A9650820C6C58FEDC3D994AA4D7E020306EEDF0A5FB12C3CF44378CD861C34F.png)  
如下文件名和文件路径为示例，仅供参考。

1. 在本地开发环境"config"路径下，新建app-schema.js文件，文件路径为"quickstart-js-sdk/src/components/config"。
2. 将已导出的json格式文件内容复制到app-schema.js文件中，然后在js文件中使用export声明内容。
3. 将已导出的其他js格式文件添加至本地开发环境中。 文件路径如下所示：

   js格式：quickstart-js-sdk/src/components/model

如果文件已存在，则请覆盖原文件。  

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

#### 初始化

在添加对象类型文件后，您就可以使用云数据库进行应用开发。您开发应用时，需要先执行初始化操作，即初始化对应数据处理位置的AGConnectCloudDB、创建存储区和对象类型。

1. 初始化AGConnectCloudDB。  
   通过[initialize()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddb-miniprogram-0000001244514663#section35300125219)初始化AGConnectCloudDB。

   ```
   AGConnectCloudDB.initialize(context);
   ```

2. 创建对象类型。  
   通过[getInstance()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddb-miniprogram-0000001244514663#section16294717127)方法获取对应数据处理位置的AGConnectCloudDB实例，并使用[createObjectType()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddb-miniprogram-0000001244514663#section10644219429)创建对象类型。

   ```
   const schema = require('./BookInfo.js');
   const agcCloudDB = AGConnectCloudDB.getInstance();
   agcCloudDB.createObjectType(schema);
   ```

3. 打开存储区。  
   您可以打开一个存储区；也可以在打开存储区时，为其创建自定义traceId。
   * 打开存储区。

     ```
     const config = new CloudDBZoneConfig('QuickStartDemo');
     const cloudDBZone = await agcCloudDB.openCloudDBZone(config);
     ```

   * 打开存储区并为其自定义创建[traceId](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneconfig-miniprogram-0000001199594760#section17195364510)。

     ```
     const extendParams = { 'x-trace-id': '801d523a1cd1f5'}
     const config = new CloudDBZoneConfig('QuickStartDemo', extendParams);
     const cloudDBZone = await agcCloudDB.openCloudDBZone(config);
     ```

#### 写入数据

在本节主要介绍如何在应用程序中进行数据写入操作，以便您了解如何使用云数据库SDK实现数据的写入。在应用界面中，增加了"添加"按钮，用于用户新增数据，并在代码中通过[executeUpsert()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzone-miniprogram-0000001199434788#section17755153212411)实现数据的写入。

```
async function executeUpsert (book) {
	try {
		const cloudDBZoneResult = await cloudDBZone.executeUpsert(book);
		console.log('upsert' + cloudDBZoneResult + 'record' );
	} catch (e) {
		console.log(e);
	}
}
```

#### 查询数据

<br />

#### 获取数据变化

用户在应用界面中新增的数据，将会被存储在云侧。在端侧注册数据变化侦听器，当云侧数据发生变化时，端侧能够感知数据变化。通过查询条件与[subscribeSnapshot()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzone-miniprogram-0000001199434788#section630612914412)方法组合使用，可以指定侦听对象，当侦听对象的数据发生变化时，端侧会收到数据变化通知，并生成新的快照，触发用户回调。

```
async function subscribeSnapshot () {
	const query = CloudDBZoneQuery.where(BookInfo);
	query.equalTo('shadowFlag', true);
	try {
		const onSnapshotListener = {
			onSnapshot: (snapshot, e) => {
				if (e !== null && e !== undefined && e.code !== AGConnectCloudDBExceptionCode.Ok) {
					console.log('subscribeSnapshot error');
					console.log(e);
				}
				return snapshot;
			}
		};
		const listenerHandler = await cloudDBZone.subscribeSnapshot(query, onSnapshotListener);
		console.log(listenerHandler);
	} catch (e) {
		console.log('subscribeSnapshot error');
		console.log(e);
	}
}

function subscribeBookList() {
	subscribeSnapshot().then(snapshot => {
		const resultList = snapshot.getSnapshotObjects();
		console.log(resultList);
	})
}
```

#### 数据查询和排序

在应用界面中，增加了"查询"按钮和排序功能，通过[executeQuery()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-transaction-miniprogram-0000001199434790#section99171302912)实现异步方式查询数据。

```
async function executeQuery() {
    try {
        const query = CloudDBZoneQuery.where(BookInfo);
        const snapshot = await cloudDBZone.executeQuery(query);
        const resultArray = snapshot.getSnapshotObjects();
        console.log(resultArray);
    } catch(e) {
        console.log(e);
    }
}
```

通过查询与[limit()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzonequery-miniprogram-0000001244234679#section195251849262)方法组合，实现限制查询数据显示条数的功能；与[orderByAsc()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzonequery-miniprogram-0000001244234679#section510510507712)方法或者[orderByDesc()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzonequery-miniprogram-0000001244234679#section4831175212713)方法组合来实现数据的排序功能。

```
async function executeQueryWithOrder (object)  {
	const query = CloudDBZoneQuery.where(BookInfo);
	if (object.name.length > 0) {
		query.equalTo('bookName', object.name);
	}
	if (parseFloat(object.minPrice) > 0) {
		query.greaterThanOrEqualTo('price', parseFloat(object.minPrice));
 	}
	if (parseFloat(object.maxPrice) > 0 && parseFloat(object.maxPrice) > parseFloat(object.minPrice)) {
		query.lessThanOrEqualTo('price', parseFloat(object.maxPrice));
	}
	if (parseInt(object.bookCount) > 0) {
		query.limit(parseInt(object.bookCount));
	}
	query.orderByAsc('id');
	try {
		const snapshot = await cloudDBZone.executeQuery(query);
		console.log('resultArray');
		console.log(snapshot.getSnapshotObjects());
		return snapshot.getSnapshotObjects();
	} catch (e) {
		console.log('query failed with reason');
		console.log(e);
                return e;
	}
}
```

