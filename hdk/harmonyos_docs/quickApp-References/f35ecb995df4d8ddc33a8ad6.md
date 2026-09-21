---
name: document/cn/quickApp-References/quickgame-api-account-0000001083874630
title: 账号
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickgame-api-account-0000001083874630
---

# 账号

> 注意
>
> 该功能依赖 Game SDK 提供服务，Game SDK 可能会收集用户的个人数据。请在快游戏中使用该功能之前，告知用户将收集个人数据，并引导用户阅读相应的隐私政策。
> 说明
>
> 从1078版本开始，接口前缀由hbs调整为qg，原hbs仍支持。

## 接口定义

|接口|描述|
|:-----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------|
|[qg.gameLogin(Object object)](#section20934131615911)|游戏登录。|
|[qg.gameLoginWithReal(Object object)(1070+)](#section73325514166)|实现游戏防沉迷登录接口。|
|[qg.savePlayerInfo(Object object)](#section56644702214)|当用户完成选择区服信息进入游戏后，或者用户的等级发生变化时，游戏可以调用此接口存储用户的角色信息。如果游戏本身不具有游戏等级、角色名称、游戏区服或者游戏公会这些信息则可以不接入此接口。|
|[qg.savePlayerInfoWithReal(Object object)(1070+)](#section1227035652414)|存储用户角色信息。|
|[qg.getCachePlayerId(Object object)(1070+)](#section3462192816330)|获取账户ID。|

### qg.gameLogin(Object object)

* 描述 游戏登录。

* 参数

  |参数|类型|必填(M)/选填(O)|说明|
  |:---------|:-------|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |forceLogin|int|M|此参数固定传入"1"，将在玩家未登录华为账号或鉴权失败时主动打开登录页面。|
  |appid|string|M|在华为开发者联盟上创建快游戏后分配的唯一标识。获取方式请参见[获取APP ID](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-enable-account-kit-0000001159772367#section1148753814717)。|
  |success|function|O|接口调用成功的回调函数，code为0时表示成功，请参见[success回调函数参数](#ZH-CN_TOPIC_0000001083874630__li1927801911464)。 > 说明 > 登录成功后建议调用[校验登录签名接口](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickgame-server-login-signature-0000001557499461)对登录结果进行校验。|
  |fail|function|O|接口调用失败的回调函数，返回失败原因，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001083874630__li14329193764915)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * success回调函数参数

    |参数|类型|说明|
    |:-----------|:------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
    |playerId|String|账号ID，如果游戏不需要华为账号的登录结果进行鉴权，那么当返回playerId的时候就可以使用该值进入游戏。|
    |displayName|string|用户的昵称。|
    |playerLevel|integer|玩家等级。|
    |isAuth|integer|当isAuth为1的时候，应用需要校验返回的参数鉴权签名。|
    |ts|string|时间戳，用于鉴权签名校验。|
    |gameAuthSign|string|玩家的登录签名，用于应用服务端调用[校验登录签名](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickgame-server-login-signature-0000001557499461)接口时，向华为发起登录签名验证。|

  * fail回调函数参数

    |参数|类型|说明|
    |:---|:-----|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    |code|number|返回状态码。code为0时表示成功，其他状态码请参见[状态码](#ZH-CN_TOPIC_0000001083874630__li1278219219205)。 常见错误码处理方式： * -1：请参见FAQ"[调用登录接口时，出现"auth fail -1"的错误，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-account-0000002453354825#section185371850113113)" * 6004：请参见FAQ"[调用登录接口时，出现6004的错误码，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-account-0000002453354825#section1246451233210)" * 7001：请参见FAQ"[登录游戏出现7001错误码，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-account-0000002453354825#section1564051214322)" * 7005：请参见FAQ"[登录时提示7005错误码，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-account-0000002453354825#section1598431212326)" > 注意 > 除了正常登录成功，还必须对弹出登录界面，用户取消登录的场景（错误码7004或2012）做处理，建议返回游戏界面，提供玩家"重新登录"或者"退出游戏"的选择。|
    |data|string|异常时返回的消息内容。|

* 状态码

  |类型|描述|
  |:----|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |通用错误码|参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/error-code-0000001050045846)。|
  |业务错误码|参见[游戏错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/game-errorcode-0000001050121676)和[账号错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/account-apk-cn-common-error-codes-0000001050048616)。|

* 示例代码

  ```screen
  qg.gameLogin({
          forceLogin:1,
          appid:"100453595",
          success:function(data){
                  console.log("Game login success:" + data);
                  qg.savePlayerInfo({
                          appid:"100453595",
                          area:"cn",
                          rank:"1",
                          role:"a",
                          sociaty:"1",
                          success:function(data){console.log("Save player info success:" + data);},
                          fail:function(data,code){console.log("Save player info fail:" + data + ", code:" + code);}
                  });
          },
          fail:function(data,code){console.log("Game login fail:" + data + ", code:" + code);}
  });
  ```

### qg.gameLoginWithReal(Object object)(1070+)

* 描述 根据国家要求对未成年人的游戏时间进行防沉迷监控。调用此接口实现游戏登录即可接入防沉迷的能力。

* 参数

  |参数|类型|必填(M)/选填(O)|说明|
  |:---------|:-------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |forceLogin|int|M|此参数固定传入"1"，将在玩家未登录华为账号或鉴权失败时主动打开登录页面。|
  |appid|string|M|在华为开发者联盟上创建快游戏后分配的唯一标识。获取方式请参见[获取APP ID](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-enable-account-kit-0000001159772367#section1148753814717)。|
  |success|function|O|接口调用成功的回调函数，code为0时表示成功，请参见[success回调函数参数](#ZH-CN_TOPIC_0000001083874630__li2544105315514)。|
  |fail|function|O|接口调用失败的回调函数，返回失败原因，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001083874630__li17781531529)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * success回调函数参数

    |参数|类型|说明|
    |:------------|:------|:-----------------------------------------------------|
    |playerId|string|账号ID，如果游戏不需要华为账号的登录结果进行鉴权，那么当返回playerId的时候就可以使用该值进入游戏。|
    |displayName|string|用户的昵称。|
    |playerLevel|integer|玩家等级。|
    |ts|string|时间戳，用于鉴权签名校验。|
    |gameAuthSign|string|鉴权签名。|
    |hiResImageUri|string|高清头像链接，假如没有设置则为空字符串。|
    |imageUri|string|头像链接，假如没有设置则为空字符串。|

  * fail回调函数参数

    |参数|类型|说明|
    |:---|:-----|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    |code|number|返回状态码，具体请参见[状态码](#ZH-CN_TOPIC_0000001083874630__li1278219219205)。 常见错误码处理方式： * -1：请参见FAQ"[调用登录接口时，出现"auth fail -1"的错误，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-account-0000002453354825#section185371850113113)" * 6004：请参见FAQ"[调用登录接口时，出现6004的错误码，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-account-0000002453354825#section1246451233210)" * 7001：请参见FAQ"[登录游戏出现7001错误码，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-account-0000002453354825#section1564051214322)" * 7005：请参见FAQ"[登录时提示7005错误码，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-account-0000002453354825#section1598431212326)" > 注意 > 除了正常登录成功，还必须对弹出登录界面，用户取消登录的场景（错误码7004或者2012）做处理，建议返回游戏界面，提供玩家"重新登录"或者"退出游戏"的选择。|
    |data|string|异常时返回的消息内容。|

* 示例代码

  ```screen
  qg.gameLoginWithReal({
          forceLogin:1,
          appid:"100**95",
          success:function(data){
                  console.log("Game login success:" + data);
                  qg.savePlayerInfoWithReal({
                          rank:"1",
                          role:"a",
                          area:"cn",
                          sociaty:"1",
                          success:function(data){console.log("save player info with real success:" + data);},
                          fail:function(data,code){console.log("save player info with real fail:" + data + ", code:" + code);}
                  });
          },
          fail:function(data,code){console.log("game login with real fail:" + data + ", code:" + code);}
  });
  ```

### qg.savePlayerInfo(Object object)

* 描述 当用户完成选择区服信息进入游戏后，或者用户的等级发生变化时，游戏可以调用此接口存储用户的角色信息。如果游戏本身不具有游戏等级、角色名称、游戏区服或者游戏公会这些信息则可以不接入此接口。

* 参数

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |appid|string|M|在华为开发者联盟上创建快游戏后分配的唯一标识。获取方式请参见[获取APP ID](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-enable-account-kit-0000001159772367#section1148753814717)。|
  |rank|string|O|游戏等级:当前玩家在游戏中的等级，需要和玩家在游戏中实际等级保持一致。|
  |role|string|O|角色名称：玩家在游戏中创建的角色名称，需要和玩家在游戏中的实际角色名称保持一致，如果没有角色名称可不设置此属性。|
  |area|string|O|游戏区服：玩家登录游戏时选择的区服，需要和玩家实际进入游戏区服名称保持一致，如果没有区服信息可不设置此属性。|
  |sociaty|string|O|游戏公会：玩家在游戏中所属公会，如果没有加入公会可不设置此属性。|
  |success|function|O|接口调用成功的回调函数，返回Int类型的retCode状态码。|
  |fail|function|O|接口调用失败的回调函数。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

* 示例代码

  ```screen
  qg.savePlayerInfo({
          appid:"100453595",
          area:"cn",
          rank:"1",
          role:"a",
          sociaty:"1",
          success:function(data){console.log("Save player info success:" + data);},
          fail:function(data,code){console.log("Save player info fail:" + data + ", code:" + code);}
  });
  ```

### qg.savePlayerInfoWithReal(Object object)(1070+)

* 描述 当用户完成选择区服信息进入游戏后，或者用户的等级发生变化时，游戏可以调用此接口存储用户的角色信息。如果游戏本身不具有游戏等级、角色名称、游戏区服或者游戏公会这些信息则可以不接入此接口。该接口后续将代替 qg.savePlayerInfo。

* 参数

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:-------------------------------------------------------------------------------|
  |rank|string|O|游戏等级:当前玩家在游戏中的等级，需要和玩家在游戏中实际等级保持一致。|
  |role|string|O|角色名称：玩家在游戏中创建的角色名称，需要和玩家在游戏中的实际角色名称保持一致，如果没有角色名称可不设置此属性。|
  |area|string|O|游戏区服：玩家登录游戏时选择的区服，需要和玩家实际进入游戏区服名称保持一致，如果没有区服信息可不设置此属性。|
  |sociaty|string|O|游戏公会：玩家在游戏中所属公会，如果没有加入公会可不设置此属性。|
  |success|function|O|接口调用成功的回调函数，请参见[success回调函数参数](#ZH-CN_TOPIC_0000001083874630__li10393653125510)。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001083874630__li18393145315520)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * success回调函数参数

    |参数|类型|说明|
    |:---|:------|:-------------------------------------------------------------------------------|
    |code|Integer|返回状态码，code为0时表示成功，其他状态码请参见[状态码](#ZH-CN_TOPIC_0000001083874630__li1278219219205)。|

  * fail回调函数参数

    |参数|类型|说明|
    |:---|:------|:----------------------------------------------------------------|
    |code|Integer|返回状态码，具体请参见[状态码](#ZH-CN_TOPIC_0000001083874630__li1278219219205)。|
    |data|String|异常时返回的消息内容。|

* 示例代码

  ```screen
  qg.savePlayerInfoWithReal({
      area: "cn-1", // 玩家区服信息
      rank: "100", // 玩家等级
      role: "A11",  // 角色名称
      sociaty: "ss", // 游戏公会
      success: function (res) {
          console.log("save player info success");
          that.getLabel.string = "保存玩家信息成功"+res.code;
      },
      fail: function (data, code) {
          console.log("save player info fail:" + data + ", code:" + code);
          that.getLabel.string = data + "," + code;
      }
  });
  ```

### qg.getCachePlayerId(Object object)(1070+)

* 描述 获取玩家账户ID。

* 参数

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:----------------------------------------------------------------------------------------|
  |success|function|O|接口调用成功的回调函数，code为0时表示成功，请参见[success回调函数参数](#ZH-CN_TOPIC_0000001083874630__li18818297136)。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001083874630__li88862916132)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * success回调函数参数

    |参数|类型|说明|
    |:-------|:-----|:-----------------------------|
    |playerId|string|玩家账户ID，不同华为账号登录游戏成功后返回的玩家账户ID。|

  * fail回调函数参数

    |参数|类型|说明|
    |:---|:-----|:----------------------------------------------------------------|
    |code|number|返回状态码，具体请参见[状态码](#ZH-CN_TOPIC_0000001083874630__li1278219219205)。|
    |data|string|异常时返回的消息内容。|

* 示例代码

  ```screen
  qg.getCachePlayerId({
      success: function (res) {
          console.log("game getCachePlayerId: success"+res.playerId);
      },
      fail(data, code) {
          console.log("on gameLoginWithReal fail: " + data + "," + code);
      },
      complete() {
          console.log("on gameLoginWithReal: complete");
      }
  });
  ```

## 相关链接

### FAQ

* [调用接口登录授权后获取的playerId和openId是否一样？是否都是华为账号的唯一标识？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-account-0000002453354825#section171241644904)
* [快游戏如何校验登录签名？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-account-0000002453354825#section106181024145317)

