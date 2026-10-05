---
name: document/cn/quickApp-Guides/quickapp-applet-access-iap-kit-0000001161821217
title: 接入应用内支付服务
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-applet-access-iap-kit-0000001161821217
source: portal
---

接入应用内支付服务 简介 华为应用内支付服务（In-App Purchases，IAP）为应用提供便捷的应用内支付体验，接入流程简便。通过应用内支付，用户可以在您的应用内购买各种类型的虚拟商品，包括消耗型商品、非消耗型商品和订阅型商品。 使用华为应用内支付的场景如下： ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111529.32301834203230341977616281365551:50001231000000:2800:FC8547882F87C68DF89B21B67DDA7726764660604276347F94454E9692610091.png) ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111530.37135610216343161676011700052826:50001231000000:2800:C9E76DF3DFC2743FBD5B451B000CC2AB4C292EFFB75C3B241752D5AAD55C11DC.png) 应用内支付支持的商品主要分如下3类： **商品类型** |  **描述** |  **示例**  
---|---|---  
[消耗型商品](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-access-iap-kit-0000001099300540#section998762993310) |  仅能使用一次，消耗使用后即刻失效，需再次购买。 |  游戏中额外生命、钻石等。  
[非消耗型商品](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-access-iap-kit-0000001099300540#section493211339414) |  一次性购买，永久拥有，无需消耗。 |  游戏中额外的游戏关卡或应用中无时限的高级会员。  
[订阅类商品](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-access-iap-kit-0000001099300540#section126404232425) |  用户购买后在一段时间内允许访问增值功能或内容，周期结束后自动续期购买下一期的服务。 |  应用中有时限的高级会员，如视频月度会员等。  
准入条件 接入应用内支付服务前，需要完成如下准备工作：
    * 在华为开发者联盟上注册成为开发者，并完成实名认证，详细参见“[账号注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)”。
    * 在AppGallery Connect上完成快应用的创建，详细参见“[创建快应用](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-create-quickapp-0000001079835824)”。
    * 在AppGallery Connect上已[开通应用内支付服务](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-enable-iap-kit-0000001079803876)。
    * 应用内支付服务是华为扩展接口，而非厂商联盟规范，请[安装华为快应用IDE](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-installtool-0000001126543467)进行接入。
购买商品流程 [h2]购买消耗型商品 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111530.95529052943679517302829109235352:50001231000000:2800:FBC2C3598D40294EC4D3DF3937879F2A57D22CD99614AF7A5E68258524C763E6.png)
    1. 发起购买。
    2. 请求发货。需要对购买商品详情数据进行验签处理。如果应用对安全性要求比较高，可通过服务端[Order服务购买Token校验](https://developer.huawei.com/consumer/cn/doc/HMSCore-References-V5/api-order-verify-purchase-token-0000001050746113-V5)接口，向华为支付服务器发起校验请求，进一步确认订单的准确性。
    3. 发放商品。需要把已发货的token传至应用的服务器，后续即使消耗失败也可以从应用的服务器获取商品的发货状态，从而避免重复发货的情况。
    4. 发货成功后应用需要使用[qa.consumeOwnedPurchase](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section07478414711)接口消耗该商品，以此通知华为服务器更新商品的发货状态。发送consumeOwnedPurchase请求时，请在请求参数中携带购买数据中的purchaseToken。应用成功执行消耗之后，华为服务器会将相应商品重新设置为可购买状态，即用户可再次购买该商品。
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111530.78137090342746437496087420520277:50001231000000:2800:F5D7490CF6E90A45D112F91F6D430190993255FCE1F50737B8506ABF949F2165.png)
    * 建议应用在发货成功后再执行消耗操作。如果应用在商品消耗后再进行发货，可能存在如下异常场景：华为服务器消耗成功后因为网络异常等原因未能成功将结果回调至应用，从而导致服务器已消耗商品但是应用没有发货。
    * 对于没有服务端的应用，以上流程同样适用，只需将服务端的处理放在客户端即可。
[h2]购买非消耗型商品 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111530.05543277254712483103269401624695:50001231000000:2800:E60E541AA568168055BF72476034CF97919EE818233EB682296D0D1B8E28A7E9.png)
    1. 发起购买。
    2. 请求发货。需要对购买商品详情数据进行验签处理。如果应用对安全性要求比较高，可通过服务端[Order服务购买Token校验](https://developer.huawei.com/consumer/cn/doc/HMSCore-References-V5/api-order-verify-purchase-token-0000001050746113-V5)接口，向华为支付服务器发起校验请求，进一步确认订单的准确性。
    3. 发放商品。验证成功后通过购买商品详情数据中的purchaseState字段判断商品的购买状态，当商品为已购买（purchaseState=0）时，发放相应的商品。
[h2]购买订阅类商品 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111530.35353527129422163281633600487106:50001231000000:2800:6D5E146507762370FDEE38E9B871AC338A00B454F126D6F3F8F0482ED5B2249A.png)
    1. 发起购买。
    2. 请求提供服务。
    3. 提供商品服务，详细参见[订阅专有功能说明](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-applet-subscription-functions-0000001115261444)。
判断是否支持应用内支付 在使用应用内支付之前，您的应用需要向快应用发送isEnvReady请求，以此判断用户当前登录的华为账号所在的服务地是否在IAP支持结算的国家或地区中。 调用[qa.isEnvReady](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section134891143204814)接口，并设置success和fail回调来获取返回结果。
    * 当接口请求成功时，您的应用将获取到一个success返回值，表示用户当前登录的华为账号所在的服务地支持IAP。
    * 当接口请求失败时，会返回一个fail返回值，可使用code获取此次请求的返回码。
    
    qa.isEnvReady({
      isEnvReadyReq: {
         "applicationID": "101315751"
      },
      success: function(e) {  
        console.debug("isEnvReady data = ", JSON.stringify(e));
        qa.showToast({
          message: "Env ready!"
        })
      },
      fail: function(e, code) {
        console.log("isEnvReady fail data = " + e,"code = " + code);
        qa.showToast({
          message: "isEnvReady fail!"
        })
      },
      complete:function(){
        console.log("isEnvReady complete !!")
      }
    })

展示商品信息 若在AppGallery Connect上配置了商品，在应用中可以使用obtainProductInfo接口来获取商品的详细信息。
    1. 调用 [qa.obtainProductInfo](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section109761142817) 接口并设置success和fail回调以接收接口请求的结果。  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111530.82229872254685398599011878864226:50001231000000:2800:832D9CD5B36C2D0A53FD5ACBD6E12A335BD19D7385A10ECE60981DADF961DF2B.png) obtainProductInfo每次只能查询一种类型的商品。
    2. 接口调用成功后返回一个productInfoList对象，可以使用productInfoList[i]查看单个商品信息，包含商品价格、名称、描述等信息，向用户展示可供购买的商品列表。 
           
           qa.obtainProductInfo({
             productInfoReq: {
               "priceType": 1,
               "productIds": ["dy1", "dmy00", "lcole"],
               "applicationID": "101315751",
             },
             success: function(data) {
                console.debug("obtainProductInfo = " + JSON.stringify(data));
                qa.showToast({
                 message: "obtainProductInfo success!"
               })
             },
             fail: function(data, code) {
               console.log("obtainProductInfo fail data = " + JSON.stringify(data), " code = " + code);
               qa.showToast({
                 message: "obtainProductInfo fail!"
               })
             }
           })

发起购买 [h2]购买PMS商品
    1. 构建请求参数[purchaseIntentReq](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#ZH-CN_TOPIC_0000001079530786__p448510574110)，发起[qa.createPurchaseIntent](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section1212164312382)请求。在purchaseIntentReq中需携带已在AppGallery Connect定义并生效的商品ID。 
           
           qa.createPurchaseIntent({
             purchaseIntentReq: {
               "applicationID": "101315751",
               "productId": "dmy001",
               "priceType": 0,
               "developerPayload": "test111111",
               "publicKey":"MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnLLFO6c8d1x6jdbZ8PkNtrLtRMiFaRqWZgEjC4Vj9QXnPCmDZoPO5A5TSwzlWjYL5ktbbDnZC6Vfp8VI8nTMm8DvbGsJ+1ihru31vG1gqvUgOaXESqBhdpMrKFEgNBV8zlalLpcCU6Gayd8QJCxXRPcUisHLTQFJHjTMOWmvOcKiSxt1VmG3dvfWVkoMeKyerZy4qHEWM/asJihPZATBQ7puMC/kOh6i8V2gv4w/74KWifpBr3J5RN+PK6E7yWUqIALFTnN5vOIif2HELvgt+S6uaGpRydhSwu1xtV7bPtXQY20ollYo4BUi+AvM16iBCa1+1Mdw0y6Y9gZAtpHRK1Pf+yea4aoY4y/bZ6EX21wucvbzxexDcBkGn0DVvNHKr3usmUmq/yfMMmDPqPujv3iDWKFENfL4Agugo7I8etCF8vVYDOT5J8gXupgGLiritkfALZD8HgNZADyM+NnvQBJrdeVoHxCYoQMCS2hySPf2AaZWT7PzVAeGidLcEeKlAgMBAAE="
             },
             success: function(data) {
               console.debug("createPurchaseIntent success = " + JSON.stringify(data));
               qa.showToast({
                 message: "createPurchaseIntent success!"
               })
             },
             fail: function(data, code) {
               console.log("createPurchaseIntent fail data = " + JSON.stringify(data), " code = " + code);
               qa.showToast({
                 message: "createPurchaseIntent fail!"
               })
             }
           })

    2. 在应用拉起收银台，并且用户完成支付后（成功购买商品或者取消购买），通过success回调获取结果信息。 
       * 当用户购买成功时，可从success回调的data对象中获取购买数据[inAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#ZH-CN_TOPIC_0000001079530786__p0965191613472)及其签名数据，开发者需要使用开通应用内支付服务时获取的[支付公钥](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-enable-iap-kit-0000001079803876#section1318913307128)进行签名验证，验证方法请参见对结果验签。如果应用有自己的服务器，需要应用服务器到客户端获取购买后详情数据和签名。
       * 用户购买消耗型商品时，如果返回以下支付异常则需要检查是否存在掉单情况，具体参见消耗型商品补单机制。 
         * 支付失败（-1）
         * 已拥有该商品（60051)
[h2]购买非PMS商品 若您的应用仅在中国大陆发布，可使用[qa.createPurchaseIntentWithPrice](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section1766355151316)自行完成商品的定价及支付，而不需要在华为AppGallery Connect录入商品信息。支付的时候需要您传入商品价格、商品名称、币种等信息。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111530.07039427258385794059562255084218:50001231000000:2800:BE6952C8138BE37E91E3CC2B7FDA318C8EEEE07905B2F3211BF6B7DD3A300283.png) 该非PMS支付接口仅支持消耗型商品和非消耗型商品，若您需要使用订阅服务，请使用[qa.createPurchaseIntent](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section1212164312382)。
    1. 构建请求参数[purchaseIntentWithPriceReq](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#ZH-CN_TOPIC_0000001079530786__zh-cn_topic_0000001075552476_p171989915615)，发起qa.createPurchaseIntentWithPrice请求。 
           
           qa.createPurchaseIntentWithPrice({
             purchaseIntentWithPriceReq: {
               "applicationID": "101315751",
               "amount":"0.01",
               "country":"CN",
               "currency":"CNY",
               "developerPayload": "testPurchase",
               "priceType": "0",
               "productId": "abc",
               "productName":"零食大礼包",
               "reservedInfor":{},
               "sdkChannel":"0",
               "serviceCatalog":"X5",
               "publicKey": "MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnLLFO6c8d1x6jdbZ8PkNtrLtRMiFaRqWZgEjC4Vj9QXnPCmDZoPO5A5TSwzlWjYL5ktbbDnZC6Vfp8VI8nTMm8DvbGsJ+1ihru31vG1gqvUgOaXESqBhdpMrKFEgNBV8zlalLpcCU6Gayd8QJCxXRPcUisHLTQFJHjTMOWmvOcKiSxt1VmG3dvfWVkoMeKyerZy4qHEWM/asJihPZATBQ7puMC/kOh6i8V2gv4w/74KWifpBr3J5RN+PK6E7yWUqIALFTnN5vOIif2HELvgt+S6uaGpRydhSwu1xtV7bPtXQY20ollYo4BUi+AvM16iBCa1+1Mdw0y6Y9gZAtpHRK1Pf+yea4aoY4y/bZ6EX21wucvbzxexDcBkGn0DVvNHKr3usmUmq/yfMMmDPqPujv3iDWKFENfL4Agugo7I8etCF8vVYDOT5J8gXupgGLiritkfALZD8HgNZADyM+NnvQBJrdeVoHxCYoQMCS2hySPf2AaZWT7PzVAeGidLcEeKlAgMBAAE="
             },
             success: function (data) {
               console.debug("createPurchaseIntent success =" + JSON.stringify(data));
               qa.showModal({
                 title: '创建订单成功',
                 content: JSON.stringify(data),
               })
             },
             fail: function (data, code) {
               console.log("createPurchaseIntent fail data =" + JSON.stringify(data), "code =" + code);
               qa.showModal({
                 title: '创建订单失败',
                 content: code + ':' + JSON.stringify(data),
               })
             },
             complete: function () {
               console.log("createPurchaseIntent complete");
             }
           })

    2. 在应用拉起收银台，并且用户完成支付后（成功购买商品或者取消购买），通过success回调获取结果信息。 
       * 当用户购买成功时，可从success回调的data对象中获取购买数据[inAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#ZH-CN_TOPIC_0000001079530786__zh-cn_topic_0000001075552476_p25949588499)及其签名数据，开发者需要使用开通应用内支付服务时获取的[支付公钥](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-enable-iap-kit-0000001079803876#section1318913307128)进行签名验证，验证方法请参见对结果验签。如果应用有自己的服务器，需要应用服务器到客户端获取购买后详情数据和签名。
       * 用户购买消耗型商品时，如果返回以下支付异常则需要检查是否存在掉单情况，具体参见消耗型商品补单机制。 
         * 支付失败（-1）
         * 已拥有该商品（60051)
确认交易 用户完成一次支付之后，需要根据购买数据[inAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#ZH-CN_TOPIC_0000001079530786__p0965191613472)的purchaseState字段来判断订单是否已成功支付。成功支付发放相应的商品或提供相应的服务，之后向IAP发送发货确认请求。
    * 对于消耗型商品，需要从inAppPurchaseData的JSON字符串中解析出purchaseToken信息，用于确认商品的发货状态。 在成功发货并记录已发货商品的purchaseToken之后，需要使用[qa.consumeOwnedPurchase](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section07478414711)接口消耗该商品，以此通知华为服务器更新商品的发货状态。调用consumeOwnedPurchase接口时，请在请求参数中携带purchaseToken。应用成功执行消耗之后，华为服务器会将相应商品重新设置为可购买状态，即用户可再次购买该商品。
          
          qa.consumeOwnedPurchase({
            consumeOwnedPurchaseReq: {
              "applicationID": "101315751",
              "developerChallenge":"hello",
              "purchaseToken": "0000017297d6a4faa22aaa2fa705e96247231b89ec228b3fd05e378b70e4c7d023a9c972c540e3d0x434e.1.101315751",
              "publicKey":"MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnLLFO6c8d1x6jdbZ8PkNtrLtRMiFaRqWZgEjC4Vj9QXnPCmDZoPO5A5TSwzlWjYL5ktbbDnZC6Vfp8VI8nTMm8DvbGsJ+1ihru31vG1gqvUgOaXESqBhdpMrKFEgNBV8zlalLpcCU6Gayd8QJCxXRPcUisHLTQFJHjTMOWmvOcKiSxt1VmG3dvfWVkoMeKyerZy4qHEWM/asJihPZATBQ7puMC/kOh6i8V2gv4w/74KWifpBr3J5RN+PK6E7yWUqIALFTnN5vOIif2HELvgt+S6uaGpRydhSwu1xtV7bPtXQY20ollYo4BUi+AvM16iBCa1+1Mdw0y6Y9gZAtpHRK1Pf+yea4aoY4y/bZ6EX21wucvbzxexDcBkGn0DVvNHKr3usmUmq/yfMMmDPqPujv3iDWKFENfL4Agugo7I8etCF8vVYDOT5J8gXupgGLiritkfALZD8HgNZADyM+NnvQBJrdeVoHxCYoQMCS2hySPf2AaZWT7PzVAeGidLcEeKlAgMBAAE="
            },
            success: function(data) {
              console.debug("consumeOwnedPurchase data = ", JSON.stringify(data));
              qa.showToast({
                message: "consumeOwnedPurchase success!"
              })
            },
            fail: function(data, code) {
              console.log("consumeOwnedPurchase fail data = " + JSON.stringify(data), " code = " + code);
              qa.showToast({
                message: "consumeOwnedPurchase fail!"
              })
            }
          })

    * 对于非消耗型商品，华为服务器默认返回已确认的订单数据，应用需要在用户购买成功之后持续向用户提供相应的商品服务，具体参见提供非消耗型商品对应的服务。
    * 订阅类商品的处理参见[订阅专有功能说明](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-applet-subscription-functions-0000001115261444)。
消耗型商品补单机制 在用户支付之后可能由于出现异常（网络错误、进程被终止等等）导致应用无法知道用户实际是否支付成功，即出现掉单情况。应用内支付针对此场景，提供了消耗型商品的补单机制。应用可参考以下流程图进行处理： ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111530.75190292748479805642606436245626:50001231000000:2800:27C1B427CFD5668F0D15FEF79FB3FCEAB09E008CC7783CF9EBF2A166E0CF6F9E.png)
    1. 在应用启动、购买请求返回错误码-1或60051时，使用[qa.obtainOwnedPurchases](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section666532824412)获取用户已购买未发货的消耗型商品的购买信息。应用需要在请求参数[ownedPurchasesReq](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#ZH-CN_TOPIC_0000001079530786__p95111419174814)中指定查询的priceType为0。 当接口请求成功时，可以在success回调中的data查询返回结果，该结果包含用户所有已购但未发货的商品购买信息及其签名数据， 开发者需要使用开通应用内支付服务时获取的[支付公钥](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-enable-iap-kit-0000001079803876#section1318913307128)进行签名验证，验证方法请参见对结果验签。 每个购买信息均以JSON格式的String形式呈现，包含的参数请参见[inAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#ZH-CN_TOPIC_0000001079530786__p0965191613472)。开发者需要从inAppPurchaseData的字符串中解析出purchaseState字段，当purchaseState为0时表示此次交易成功，应用仅需要对这部分商品进行补发货操作。
           
           qa.obtainOwnedPurchases({
             ownedPurchasesReq: {
               "priceType": that.data.priceType,
               "applicationID": "101315751",
               "publicKey":"MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnLLFO6c8d1x6jdbZ8PkNtrLtRMiFaRqWZgEjC4Vj9QXnPCmDZoPO5A5TSwzlWjYL5ktbbDnZC6Vfp8VI8nTMm8DvbGsJ+1ihru31vG1gqvUgOaXESqBhdpMrKFEgNBV8zlalLpcCU6Gayd8QJCxXRPcUisHLTQFJHjTMOWmvOcKiSxt1VmG3dvfWVkoMeKyerZy4qHEWM/asJihPZATBQ7puMC/kOh6i8V2gv4w/74KWifpBr3J5RN+PK6E7yWUqIALFTnN5vOIif2HELvgt+S6uaGpRydhSwu1xtV7bPtXQY20ollYo4BUi+AvM16iBCa1+1Mdw0y6Y9gZAtpHRK1Pf+yea4aoY4y/bZ6EX21wucvbzxexDcBkGn0DVvNHKr3usmUmq/yfMMmDPqPujv3iDWKFENfL4Agugo7I8etCF8vVYDOT5J8gXupgGLiritkfALZD8HgNZADyM+NnvQBJrdeVoHxCYoQMCS2hySPf2AaZWT7PzVAeGidLcEeKlAgMBAAE="
             },
             success: function(data) {
               console.debug("obtainOwnedPurchases data = ", JSON.stringify(data), typeof(data));
               qa.showToast({
                 message: "obtainOwnedPurchases success!"
               })
             },
             fail: function(data, code) {
               console.log("obtainOwnedPurchases fail data = " + JSON.stringify(data), "code = " + code);
               qa.showToast({
                 message: "obtainOwnedPurchases fail!"
               })
             }
           })

    2. 对已发货商品进行消耗。 需要对[qa.obtainOwnedPurchases](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section666532824412)返回的每个商品数据进行发货确认，确认已发货后使用[qa.consumeOwnedPurchase](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section07478414711)接口消耗所有已发货商品，以此通知华为服务器更新商品的发货状态。对于消耗型商品，应用成功执行消耗之后，华为服务器会将相应商品重新设置为可购买状态，用户可再次购买该商品。
提供非消耗型商品对应的服务 若应用为用户提供非消耗型商品，可在应用启动时通过[qa.obtainOwnedPurchases](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section666532824412)接口获取用户已购的非消耗型商品的购买信息，格式请参见[inAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#ZH-CN_TOPIC_0000001079530786__p0965191613472)。若返回的购买信息列表不为空，请确认每个购买信息的purchaseState字段。若purchaseState为0，则需要提供相应的商品服务。
    1. 使用[qa.obtainOwnedPurchases](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section666532824412)接口获取用户已购非消耗型商品的信息。需要在请求参数[ownedPurchasesReq](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#ZH-CN_TOPIC_0000001079530786__p95111419174814)中指定查询的priceType为1。
    2. 从返回的每个商品信息中解析出purchaseState，用于判断当前商品的购买状态，以此作为应用的发货标志。 
           
           qa.obtainOwnedPurchases({
             ownedPurchasesReq: {
               "priceType": that.data.priceType,
               "applicationID": "101315751",
               "publicKey":"MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnLLFO6c8d1x6jdbZ8PkNtrLtRMiFaRqWZgEjC4Vj9QXnPCmDZoPO5A5TSwzlWjYL5ktbbDnZC6Vfp8VI8nTMm8DvbGsJ+1ihru31vG1gqvUgOaXESqBhdpMrKFEgNBV8zlalLpcCU6Gayd8QJCxXRPcUisHLTQFJHjTMOWmvOcKiSxt1VmG3dvfWVkoMeKyerZy4qHEWM/asJihPZATBQ7puMC/kOh6i8V2gv4w/74KWifpBr3J5RN+PK6E7yWUqIALFTnN5vOIif2HELvgt+S6uaGpRydhSwu1xtV7bPtXQY20ollYo4BUi+AvM16iBCa1+1Mdw0y6Y9gZAtpHRK1Pf+yea4aoY4y/bZ6EX21wucvbzxexDcBkGn0DVvNHKr3usmUmq/yfMMmDPqPujv3iDWKFENfL4Agugo7I8etCF8vVYDOT5J8gXupgGLiritkfALZD8HgNZADyM+NnvQBJrdeVoHxCYoQMCS2hySPf2AaZWT7PzVAeGidLcEeKlAgMBAAE="
             },
             success: function(data) {
               console.debug("obtainOwnedPurchases data = ", JSON.stringify(data), typeof(data));
               qa.showToast({
                 message: "obtainOwnedPurchases success!"
               })
             },
             fail: function(data, code) {
               console.log("obtainOwnedPurchases fail data = " + JSON.stringify(data), "code = " + code);
               qa.showToast({
                 message: "obtainOwnedPurchases fail!"
               })
             }
           })

查看用户购买历史（可选） 对于消耗型商品，可使用[pay.obtainOwnedPurchaseRecord](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section732615482171)接口获取用户所有已消耗即已发货的商品信息。
    
    qa.obtainOwnedPurchaseRecord({
      ownedPurchasesRecordReq: {
        "applicationID": "101315751",
        "priceType": 2,
           "publicKey":"MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnLLFO6c8d1x6jdbZ8PkNtrLtRMiFaRqWZgEjC4Vj9QXnPCmDZoPO5A5TSwzlWjYL5ktbbDnZC6Vfp8VI8nTMm8DvbGsJ+1ihru31vG1gqvUgOaXESqBhdpMrKFEgNBV8zlalLpcCU6Gayd8QJCxXRPcUisHLTQFJHjTMOWmvOcKiSxt1VmG3dvfWVkoMeKyerZy4qHEWM/asJihPZATBQ7puMC/kOh6i8V2gv4w/74KWifpBr3J5RN+PK6E7yWUqIALFTnN5vOIif2HELvgt+S6uaGpRydhSwu1xtV7bPtXQY20ollYo4BUi+AvM16iBCa1+1Mdw0y6Y9gZAtpHRK1Pf+yea4aoY4y/bZ6EX21wucvbzxexDcBkGn0DVvNHKr3usmUmq/yfMMmDPqPujv3iDWKFENfL4Agugo7I8etCF8vVYDOT5J8gXupgGLiritkfALZD8HgNZADyM+NnvQBJrdeVoHxCYoQMCS2hySPf2AaZWT7PzVAeGidLcEeKlAgMBAAE="
      },
      success: function(data) {
        console.debug("obtainOwnedPurchaseRecord data = ", JSON.stringify(data));
        qa.showToast({
          message: "obtainOwnedPurchaseRecord success!"
        })
      },
      fail: function(data, code) {
        console.log("obtainOwnedPurchaseRecord fail data = " + JSON.stringify(data), " code = " + code);
        qa.showToast({
          message: "obtainOwnedPurchaseRecord fail!"
        })
      }
    })

对结果验签 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111530.38058480716181224007731940835270:50001231000000:2800:449FF73E33B92FFA6CEE34CAB2A681C9FCEB4DD3FFBA6DE1A0076381D3E45D11.png) 进行验签前，请务必将manifest文件中minPlatformVersion配置为1078或者以上版本。 在接口调用过程中，请求方在获取接收方的响应结果后，如果返回结果中包含了查询结果的签名字符串，请求方可以对签名字符串使用支付公钥进行验签，确认返回结果没有被篡改。支付公钥获取方式参见开通应用内支付服务中“[查询应用内支付服务信息](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-enable-iap-kit-0000001079803876#section1318913307128)”章节。建议把公钥存放在服务端并在服务端完成签名校验，保证接口调用的安全性。
    1. 获取需要验签的返回结果字符串，例如qa.obtainOwnedPurchases返回的inAppPurchaseDataList中商品信息需要验签，先取第1条商品信息的JSON字符串参与验签。
    2. 获取对应的签名字符串，例如qa.obtainOwnedPurchases返回的inAppSignature对应inAppPurchaseDataList的签名字符串，取第1条商品信息的签名字符串参与验签。
    3. 使用支付公钥对结果字符串和对应的签名字符串通过SHA256WithRSA算法进行验证。
JAVA示例代码如下：
    
    /** *校验签名信息  
    * @param content 结果字符串  
    * @param sign 签名字符串  
    * @param publicKey 支付公钥  
    * @param是否校验通过  
    */ 
    public static boolean doCheck(String content, String sign, String publicKey) { 
        if ( sign == null) { 
            return false; 
        } 
        if (publicKey == null) { 
            return false; 
        } 
        try { 
            KeyFactory keyFactory = KeyFactory.getInstance("RSA"); 
            byte[] encodedKey = Base64.decode(publicKey); 
            PublicKey pubKey = keyFactory.generatePublic(new X509EncodedKeySpec(encodedKey)); 
            java.security.Signature signature = null; 
            signature = java.security.Signature.getInstance("SHA256WithRSA"); 
            signature.initVerify(pubKey); 
            signature.update(content.getBytes(StandardCharsets.UTF_8)); 
            byte[] bsign = Base64.decode(sign); 
            return signature.verify(bsign); 
        } catch (RuntimeException e) { 
            throw e; 
        } catch (Exception e) { 
            e.printStackTrace(); 
        } 
        return false; 
    }

Demo ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111530.10690304347492031600498486519049:50001231000000:2800:34152A36904639455B9AD4E87905540D6CEA44DC5C947C93EC2BC6313DF97878.png) [查看视频教程](https://developer.huawei.com/consumer/cn/training/detail/C101637305807866386) [h2]购买消耗型商品 **consumeProducts.qxml文件：**
    
    <!--pages/ConsumeProducts.wxml-->
    <view class="shopcontainer">
        <view class="list">
          <view style="display: flex; flex-direction: column;width: 100%;">
             <block qa:for-items="{{listData}}" qa:key="*this">
               <view class="productinfo">
                <text class="productName">{{ item.productName }}</text>
                <text class="productDesc">{{ item.productDesc }}</text>
                <text class="productDesc">{{ item.price }}</text>
                <button size="mini" class="smallbtan" data-product-Id="{{item.productId}}" data-price-Type="{{item.priceType}}" bindtap="payForConsable">Buy</button>
               </view>
             </block>
          </view>
        </view>
        <view class="bottom">
          <button class="bigbtn" data-price-Type="0" bindtap="getPurchaseRecord">get PurchaseRecord</button>
        </view>
      </view>

**consumeProducts.js文件：**
    
    // pages/ConsumeProducts.js
    Page({
        /**
         * 页面的初始数据
         */
        data: {
            listData: [],
            appid: "101266687",
            iapPublicKey: "MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAgRTXdSeJNOcqTuzUnYJwvKO2QxJuRsrEAC+VFJTIxV/OXsjZK8KQHWe3HGJTYJ3RSZ0GNiEIsdNpyofzJv0bzyodPH4KlnorsUcczhYhuWSUpdP7fleTEmj7+2Meg1MnKIADIuIHMo0gJV4u1lMp4tL/5l2XbRI9fHFZv2EPccAkcIILkbPzyZ4rCsEpD3kLEaUftag3ICZcAbxrl85vE3vhFfa/JpQRr13BN+uDPIevMrFjNr5DPZyjOZsQcS/pcND6pt7dCpKkgBZk0OOSz8CET1nQln6EJXg/zGspXYUk5tIXQZhVopyQX1h2JlPlV5MAbsjwliLf0+ULXdzaRz4ony8QzWBth8jNyyoTaWKWlpi6LP5e117Yx7LYkUwvRH7u0dmGBhO0u9de6W08Cj9BGJ+w0nEoKoaqak98Id2de1tiToWuieetBfTzWjjjbzWpUneKQ7WycwMLymuVVAFW9EXl+bAHNVGnjjjEEWRlKwCe+2WKyrMrbfH+tr6tAgMBAAE=",
            isSupportIAP: false,
            priceType: 0,
            attoken: ''
        },
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
        },
    
        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady: function () {
            qa.setNavigationBarTitle({
                title: 'Consumables'
              });
            this.isEnvReady();
        },
    
        /**
         * 生命周期函数--监听页面显示
         */
        onShow: function () {
        },
    
        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide: function () {
        },
    
        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload: function () {
        },
    
        /**
         * 用户点击右上角分享
         */
        onShareAppMessage: function () {
        },
        isEnvReady: function () {
            var that = this;
            qa.isEnvReady({
                isEnvReadyReq: {
                    applicationID: this.data.appid
                },
                success: function (data) {
                    console.info("isEnvReady data =", JSON.stringify(data));
                    that.setData({isSupportIAP:true});
                    console.info("isEnvReady data isSupportIAP="+that.data.isSupportIAP);
                    that.obtainOwnedPurchases();
                    that.obtainConsumeProductInfo();
                    qa.showToast({
                        title: 'Env ready!',
                        icon: 'success',
                        duration: 2000
                      })
                },
                fail: function (data, code) {
                    console.log("isEnvReady fail data =" + JSON.stringify(data), "code =" + code);
                    qa.showToast({
                        title: 'Env ready fail!',
                        icon: 'error',
                        duration: 2000
                      })
                }
            });
        },
        isSandboxActivated: function () {
            qa.isSandboxActivated({
                isSandboxActivatedReq: {
                    applicationID: this.data.appid
                },
                success: function (data) {
                    console.debug("isSandboxActivated data =", JSON.stringify(data));
                    qa.showToast({
                        title: 'isSandboxActivated success!!',
                        icon: 'success',
                        duration: 2000
                      })
                },
                fail: function (data, code) {
                    console.log("isSandboxActivated fail data =" + JSON.stringify(data), "code =" + code);
                    qa.showToast({
                        title: 'isSandboxActivated fail!!',
                        icon: 'error',
                        duration: 2000
                      })
                }
            });
        },
        obtainConsumeProductInfo: function () {
            var that = this;
            qa.obtainProductInfo({
                productInfoReq: {
                    applicationID: this.data.appid,
                    priceType: 0,
                    productIds: ["wwz_c_02", "wwz_c_01"]
                },
                success: function (data) {
                    console.info("obtainProductInfo =" + JSON.stringify(data));
                    that.setData({
                        listData: data.productInfoList
                    });
                    qa.showToast({
                        title: 'obtainProductInfo success!',
                        icon: 'success',
                        duration: 2000
                      })
                },
                fail: function (data, code) {
                    console.log("obtainProductInfo fail data =" + JSON.stringify(data), "code =" + code);
                    qa.showToast({
                        title: 'obtainProductInfo fail!',
                        icon: 'error',
                        duration: 2000
                      })
                }
            });
        },
        parseOwnedPurchases: function (data) {
            console.info("parseOwnedPurchases data =", JSON.stringify(data));
            console.info("parseOwnedPurchases priceType =" + this.data.priceType);
            let purseDataArray = data.inAppPurchaseDataList; //jsonString array
            let purseDataSignArray = data.inAppSignature;
            if (purseDataArray) {
                let size = purseDataArray.length;
                if (size > 0) {
                    purseDataArray.forEach((item, index, array) => {
                        this.checkSign(item, purseDataSignArray[index], JSON.parse(item).purchaseToken);
                    });
                }
            }
            if (data.continuationToken) {
                console.info("parseOwnedPurchases data.continuationToken");
                this.obtainOwnedPurchases(data.continuationToken);
            }
        },
        checkSign(signData, signStr, token) {
            console.info("checkSign sign signContent=" + signData + ", token=" + token);
            console.info("checkSign sign =" + signStr);
    
              //to do by your quick app's server.Set this result to true for convenience here.
              let result = true;
    
              if (result) {
                let purchaseState = JSON.parse(signData).purchaseState;
                this.confirmTransct(token, purchaseState);
              } else {
                prompt.showToast({
                  message: "Order details verification failed. Please check.",
                  duration: 2000,
                  gravity: "center"
                });
              }
          },
        obtainOwnedPurchases: function (token) {
            console.info("obtainOwnedPurchases token=" + token);
            var that = this;
            qa.obtainOwnedPurchases({
                ownedPurchasesReq: {
                    priceType: 0,
                    applicationID: this.data.appid,
                    continuationToken: token,
                    publicKey: that.data.iapPublicKey
                },
                success: function (data) {
                    //{"returnCode":0,"inAppSignature":[],"inAppPurchaseDataList":[],"errMsg":"success","itemList":["wwz_c_02"]}  此错误是因为传入的公钥
                    //{"returnCode":0,"inAppSignature":       //["JqEIib0Ve0LilZpF909QJBrOqJLcLk034Ku5/E72HC6ikhlE8KGzNL2qkwpi7T/R14jmJRJnBjzGdDZOI7OywT3vs4BGCHTKlWzCFmo0RzP0xeJ0SMXy8O8GgMB2SOkqoyEKxi8FPuKITwbMXw57SQUgEs4awqx7GGXLHsDn8RSrXjKy1pAuzLulnA582P8C/1H5lZXiTAupJA+/7M6efdMaamIXQrP4F1ER9RetmO68oBmCIlyg0vfRdzpd3uV6IUpPakTJy4MgeVwGO36HC9mzwoBrHgiguQ0ff5xLZyOWzBS86mL38HFci2f5hgqkbbJlVTr4fhtwIQFz6XEzeegQtdXCm5i/l1xT7wZw4VCWqQqafDgYZLWZCIIGLUY23ogf0twjpkWYeJi8cRgorc+9FZKJWE29XHeNBRxagNVAfUDXDljkz1FrByA0eUUkkmdZuJaapND5Ij2/h2AWaEvvnhPwV3qrqUf2FpHe7rE+6jrmXZXlc4VO+7tl7sDP"],"inAppPurchaseDataList":[{"country":"CN","purchaseToken":"000001775cbe14c3b60fb32eca40e897fe274acccfec005049adde315f8f8119dec55b3dc3e1e07bx434e.1.101266687","consumptionState":0,"payOrderId":"UN202102011637276909746B887","productId":"wwz_c_02","orderId":"20210201163700802e18c717a1.101266687","kind":0,"developerPayload":"testPurchase","confirmed":0,"productName":"消耗性兑换券","sdkChannel":"1","payType":"16","price":20,"purchaseTime":1612168696000,"currency":"CNY","packageName":"com.huawei.fastapp.dev","applicationId":101266687,"autoRenewing":false,"purchaseState":0,"purchaseTimeMillis":1612168696000}],"errMsg":"success","itemList":["wwz_c_02"]}
                    console.info("obtainOwnedPurchases data =", JSON.stringify(data));
                    that.parseOwnedPurchases(data);
                },
                fail: function (data, code) {
                    console.log("obtainOwnedPurchases fail data =" + JSON.stringify(data), "code =" + code);
                    prompt.showToast({
                        message: "obtainOwnedPurchases fail!"
                    });
                }
            });
        },
        confirmTransct: function (token, purchaseState) {
            var that = this;
            console.info("confirmTransct:token:" + token);
            console.info("confirmTransct: purchaseState:" + purchaseState);
            // Check whether the order has been successfully paid based on the purchaseState field in inAppPurchaseData. After the payment is successful, the corresponding offering or service is provided, and the delivery confirmation request is sent to Huawei IAP.
            if (purchaseState !== 0) {
                return;
            }
            //Consumes a consumable after the consumable is delivered to a user who has completed payment.
            if (this.data.priceType == 0) {
                qa.consumeOwnedPurchase({
                    consumeOwnedPurchaseReq: {
                        applicationID: this.data.appid,
                        purchaseToken: token,
                        publicKey: this.data.iapPublicKey
                    },
                    success: function (data) {
                        console.info("consumeOwnedPurchase data =", JSON.stringify(data));
                        that.checkConsume(data.consumePurchaseData, data.dataSignature);
                        qa.showToast({
                            title: 'consumeOwnedPurchase success!',
                            icon: 'success',
                            duration: 2000
                          })
                    },
                    fail: function (data, code) {
                        console.info("consumeOwnedPurchase fail data =" + JSON.stringify(data), "code =" + code);
                    }
                });
            }
        },
        checkConsume: function (consumePurchaseData, sign) {
            console.info("checkConsume sign signContent=" + consumePurchaseData + ", sign=" + sign);
           // to do by your server. set true here for convience
            let result = true;
            if (result) {
                qa.showToast({
                    title: 'consumePurchaseData verification success!',
                    icon: 'success',
                    duration: 2000
                  });
            } else {
                qa.showToast({
                    title: 'consumePurchaseData verification failed. Please check!',
                    icon: 'error',
                    duration: 2000
                  });
            }
        },
        payForConsable: function (e) {
        console.info("consume product payForConsable e="+JSON.stringify(e));
            let productNo=e.currentTarget.dataset.productId;
            let productType=e.currentTarget.dataset.priceType;
            var that = this;
            qa.createPurchaseIntent({
                purchaseIntentReq: {
                    applicationID: this.data.appid,
                    productId: productNo,
                    priceType: productType,
                    publicKey: this.data.iapPublicKey
                },
                success: function (data) {
                    that.inAppPurchaseData = data.inAppPurchaseData;
                    //{"returnCode":0,"inAppPurchaseData":{"country":"CN","purchaseToken":"0000017762bfdca4bee97011690e5d8305f185252119c6e1aff397e7a4a32bf975f77b8888676c0ax434e.1.101266687","consumptionState":0,"payOrderId":"A4107de3bfd50caa0927672edb78eb87","productId":"wwz_c_02","orderId":"202102022036429405514e8c91.101266687","kind":0,"confirmed":0,"productName":"消耗性兑换券","sdkChannel":"1","payType":"4","price":20,"purchaseTime":1612269475000,"currency":"CNY","packageName":"com.huawei.fastapp.dev","applicationId":101266687,"autoRenewing":false,"purchaseState":0,"purchaseTimeMillis":1612269475000},"inAppDataSignature":"YiBtZvIbWrD5bfaFFs95p8tK5h3n3q0U4JErQ3BxopTSYlWH8HV46lylP0z7OmJ/gYjJg2PTHzoGkPeKWq5JmMDkoKoip/ILii4A94q3tK5/H0xj0DSnWyOoTMEMPIcMkMcGoDtZ4spzC697eDljuiCqdWVDz43h6TEyh7vcIhF+zUwea4CTPQjyTCH3H2ygg/NObSVS3JR4WMhQLEh0YSwoR0ASZkqEksd8jC7Gw3B/3VQqoBPiNTfCCFgQ/NA2/BfFc/yjYU0LkFWU+zjZbPpXgl+R4344CC+6LpJ+j8Rrwq0G0uYjp9cmKoNjSoQve/cvDAz0Fe2Yyjfr6sj3Pt/JhVXQdwopB41ckwGmW2VfeMCfboBFGMXkvIKwa7yAMk/UF7a74TV9+wiZ3sdRt8xf69uOqKCDLjaVsS6xAODEJS0owWuCR1n/nm16LZ3jBWwinmN6NPWrrbOH+eNaEsne12cc4uzJTARd/sLf9GljT7F2SAhPcSusBzfY5uge","errMsg":""}
                    console.info("createPurchaseIntent success =" + JSON.stringify(data));
                    var sign = data.inAppDataSignature;
                    let signData = data.inAppPurchaseData;
                    let type = typeof signData;
                    console.info("createPurchaseIntent type= " + type);
                    let token = JSON.parse(signData).purchaseToken;
                    console.info("createPurchaseIntent token= " + token);
                    that.verifyOrderPurchaseToken(token, JSON.parse(signData).productId);
                    that.checkSign(signData, sign, token);
                },
                fail: function (data, code) {
                    console.log("createPurchaseIntent fail data =" + JSON.stringify(data), "code =" + code);
                    if (code === 60051 || code === -1) {
                        //If the information about consumables is returned, the consumables might not be delivered due to some exceptions.
                        // In this case, your app needs to check whether the consumables are delivered. If not, the app needs to deliver
                        // them and call the pay.consumeOwnedPurchase API to consume them.
                        that.obtainOwnedPurchases();
                    }
                }
            });
        },
        getAccessToken: function () {
            console.info("getAccessToken");
            var that=this;
            return new Promise(function (resolve, reject) {
                var body = {
                    grant_type: 'client_credentials',
                    client_id: '101266687',
                    client_secret: 'd873aa90c3e8792517317e09f24b97df366ee10433b2f1bb3282d6ca6ce3f425'
                }
                qa.request({
                    url: 'https://oauth-login.cloud.huawei.com/oauth2/v3/token',
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8;"
                    },
                    method: 'POST',
                    data: body,
                    success: (res) => {
                        console.log('getAccessToken request success：'+res.data);
                        var result = res.data;
                        that.setData({attoken:result.access_token});
                        console.info('getAccessToken 成功 attoken: ', that.data.attoken);
                        resolve(that.data.attoken);
                      },
                      fail(code,des){
                        reject(new Error(code));
                      }
                })
            });
            },
        sendRequest:function (token, purchasetoken, productId) {
            //data: {"responseCode":"6","responseMessage":"6-211-authorization format invalid"}
            //Authorization: Basic Base64(APPAT:atvalue)
            //token原始值CgB6e3x9XXA3MhMaUtc+2rfQ372XyR10j7hT/wfdrqryJEEXu9gEb+BQyFjEb1pv8O7ktWnIZVNVIOBR9W1a0ztd
            //Authorization: Basic Base64(APPAT:atvalue)
            console.info("send request start token="+token+", purchasetoken="+purchasetoken+", productId="+productId);
            //formatToken 值需要按照規則生成，此处只是个例子，实际值需要动态计算；
            let formatToken = "Basic QVBQQVQ6Q2dCNmUzeDlYWEEzTWhNYVV0YysycmZRMzcyWHlSMTBqN2hUL3dmZHJxcnlKRUVYdTlnRWIrQlF5RmpFYjFwdjhPN2t0V25JWlZOVklPQlI5VzFhMHp0ZA=="
            let chinaSite = "https://orders-drcn.iap.hicloud.com";
            let httpurl = chinaSite + "/applications/purchases/tokens/verify";
            var messbody = {
                "purchaseToken": purchasetoken,
                "productId": productId
            };
            qa.request({
                url: httpurl,
                header: {
                    "Authorization": formatToken,
                    "Content-Type": "application/json; charset=UTF-8;"
                },
                method: "POST",
                data: messbody,
                success: function (data) {
                    console.log("sendRequest code: " + data.code);
                    console.log("sendRequest data: " + data.data);
                },
                fail: function (data, code) {
                    console.log("sendRequest handling fail, code = " + code);
                }
            });
        },
        verifyOrderPurchaseToken: function (purchasetoken, productId) {
            console.info("verifyOrderPurchaseToken purchasetoken=" + purchasetoken + ", productId= " + productId);
            this.getAccessToken().then(token => {
                console.info("verifyOrderPurchaseToken then token=" + token);
                if (token != '') {
                    this.sendRequest(token, purchasetoken, productId);
                }
            });
        },
        getPurchaseRecord: function (e) {
            console.info("consume product getPurchaseRecord e=  "+JSON.stringify(e));
            let type=e.currentTarget.dataset.priceType;
            qa.navigateTo({
              url: '../purchaseRecord/purchaseRecord?ptype='+type,
            })
        }
    })

[h2]购买非消耗型商品 **nonConsumeProducts.qxml文件：**
    
    <!--pages/nonConsumeProducts.wxml-->
    <view class="shopcontainer">
        <view class="list">
          <view style="display: flex; flex-direction: column;width: 100%;">
             <block qa:for-items="{{nonConsumeData}}" qa:key="*this">
               <view class="productinfo">
                <text class="productName">{{ item.productName }}</text>
                <text class="productDesc">{{ item.productDesc }}</text>
                <text class="productDesc">{{ item.price }}</text>
                <text class="productAlert" if="{{item.owned}}">{{ item.purchaseStateDesc }}</text>
                <button size="mini" class="smallbtn" data-product-id="{{item.productId}}" data-price-type="{{item.priceType}}" bindtap="payForNonConsable">Buy</button>
               </view>
             </block>
          </view>
        </view>
        <view class="bottom">
          <button class="bigbtn" bindtap="getPurchaseRecord">ObtainOwnedPurchases</button>
        </view>
      </view>

**nonConsumeProducts.js文件：**
    
    // pages/nonConsumeProducts.js
    Page({
        /**
         * 页面的初始数据
         */
        data: {
            priceType: 1,
            nonConsumeData: [],
            productIds:["wwz_nc_01"],
            iapPublicKey: "MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAgRTXdSeJNOcqTuzUnYJwvKO2QxJuRsrEAC+VFJTIxV/OXsjZK8KQHWe3HGJTYJ3RSZ0GNiEIsdNpyofzJv0bzyodPH4KlnorsUcczhYhuWSUpdP7fleTEmj7+2Meg1MnKIADIuIHMo0gJV4u1lMp4tL/5l2XbRI9fHFZv2EPccAkcIILkbPzyZ4rCsEpD3kLEaUftag3ICZcAbxrl85vE3vhFfa/JpQRr13BN+uDPIevMrFjNr5DPZyjOZsQcS/pcND6pt7dCpKkgBZk0OOSz8CET1nQln6EJXg/zGspXYUk5tIXQZhVopyQX1h2JlPlV5MAbsjwliLf0+ULXdzaRz4ony8QzWBth8jNyyoTaWKWlpi6LP5e117Yx7LYkUwvRH7u0dmGBhO0u9de6W08Cj9BGJ+w0nEoKoaqak98Id2de1tiToWuieetBfTzWjjjbzWpUneKQ7WycwMLymuVVAFW9EXl+bAHNVGnjjjEEWRlKwCe+2WKyrMrbfH+tr6tAgMBAAE=",
            appid: "101266687"
        },
    
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
        },
    
        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady: function () {
            this.isEnvReady();
        },
    
        /**
         * 生命周期函数--监听页面显示
         */
        onShow: function () {
        },
    
        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide: function () {
        },
    
        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload: function () {
        },
    
        /**
         * 用户点击右上角分享
         */
        onShareAppMessage: function () {
        },
    /**If error code 1002 is returned, the authentication fails.
         *  Check whether the app ID and signature fingerprint are the same as those of the AGC. */
        isEnvReady: function () {
            var that = this;
            qa.isEnvReady({
              isEnvReadyReq: {
                applicationID: this.data.appid
              },
              success: function (data) {
                console.debug("isEnvReady data =", JSON.stringify(data));
                that.obtainNoConsumeProductInfo();
                qa.showToast({
                  title: 'Env ready!',
                  icon: 'success',
                  duration: 2000
                });
              },
              fail: function (data, code) {
                console.log("isEnvReady fail data =" + JSON.stringify(data), "code =" + code);
                qa.showToast({
                  title: 'Env ready is not supported!',
                  icon: 'error',
                  duration: 2000
                });
              }
            });
          },
          isSandboxActivated: function () {
            qa.isSandboxActivated({
              isSandboxActivatedReq: {
                applicationID: this.data.appid
              },
              success: function (data) {
                console.debug("isSandboxActivated data =", JSON.stringify(data));
                qa.showToast({
                  title: 'isSandboxActivated success!',
                  icon: 'success',
                  duration: 2000
                });
              },
              fail: function (data, code) {
                console.log("isSandboxActivated fail data =" + JSON.stringify(data), "code =" + code);
                qa.showToast({
                  title: 'isSandboxActivated fail!',
                  icon: 'error',
                  duration: 2000
                });
              }
            });
          },
          obtainNoConsumeProductInfo: function () {
            var that = this;
            qa.obtainProductInfo({
              productInfoReq: {
                applicationID: this.data.appid,
                priceType: this.data.priceType,
                productIds: this.data.productIds
              },
              success: function (data) {
                console.info("obtainNoConsumeProductInfo =" + JSON.stringify(data));
                that.initProductPurchase(data.productInfoList);
                that.setData({nonConsumeData:data.productInfoList});
                that.queryAllProductsPurchase();
                qa.showToast({
                  title: 'obtainNoConsumeProductInfo success!',
                  icon: 'success',
                  duration: 2000
                });
              },
              fail: function (data, code) {
                console.log("obtainNoConsumeProductInfo fail data =" + JSON.stringify(data), "code =" + code);
                qa.showToast({
                  title: 'obtainNoConsumeProductInfo fail!',
                  icon: 'error',
                  duration: 2000
                });
              }
            });
          },
          queryAllProductsPurchase: function () {
            if(this.data.productIds){
              let size = this.data.productIds.length;
              if (size > 0) {
                this.data.productIds.forEach((itemId, index, array) => {
                  this.obtainOwnedPurchases(itemId,this.data.priceType);
                });
              }
            }
          },
        initProductPurchase: function (dataArray) {
            if (dataArray) {
              let size = dataArray.length;
              if (size > 0) {
                dataArray.forEach((item, index, array) => {
                  let up1 = "array[" + index + "].owned";
                  let up2 = "array[" + index + "].purchaseStateDesc";
                  this.setData({[up1]:false});
                  this.setData({[up2]:"Available for purchase"});
                  // item.owned = false;
                  // item.purchaseStateDesc = "Available for purchase";
                });
              }
            }
          },
          payForNonConsable: function (e) {
            var that = this;
            console.info("non consume product payForNonConsable e="+JSON.stringify(e));
            let productNo=e.currentTarget.dataset.productId;
            let productType=e.currentTarget.dataset.priceType;
            qa.createPurchaseIntent({
              purchaseIntentReq: {
                applicationID: this.data.appid,
                productId: productNo,
                priceType: productType,
                publicKey: this.data.iapPublicKey
              },
              success: function (data) {
                //{"returnCode":0,"inAppPurchaseData":{"country":"CN","purchaseToken":"0000017762bfdca4bee97011690e5d8305f185252119c6e1aff397e7a4a32bf975f77b8888676c0ax434e.1.101266687","consumptionState":0,"payOrderId":"A4107de3bfd50caa0927672edb78eb87","productId":"wwz_c_02","orderId":"202102022036429405514e8c91.101266687","kind":0,"confirmed":0,"productName":"消耗性兑换券","sdkChannel":"1","payType":"4","price":20,"purchaseTime":1612269475000,"currency":"CNY","packageName":"com.huawei.fastapp.dev","applicationId":101266687,"autoRenewing":false,"purchaseState":0,"purchaseTimeMillis":1612269475000},"inAppDataSignature":"YiBtZvIbWrD5bfaFFs95p8tK5h3n3q0U4JErQ3BxopTSYlWH8HV46lylP0z7OmJ/gYjJg2PTHzoGkPeKWq5JmMDkoKoip/ILii4A94q3tK5/H0xj0DSnWyOoTMEMPIcMkMcGoDtZ4spzC697eDljuiCqdWVDz43h6TEyh7vcIhF+zUwea4CTPQjyTCH3H2ygg/NObSVS3JR4WMhQLEh0YSwoR0ASZkqEksd8jC7Gw3B/3VQqoBPiNTfCCFgQ/NA2/BfFc/yjYU0LkFWU+zjZbPpXgl+R4344CC+6LpJ+j8Rrwq0G0uYjp9cmKoNjSoQve/cvDAz0Fe2Yyjfr6sj3Pt/JhVXQdwopB41ckwGmW2VfeMCfboBFGMXkvIKwa7yAMk/UF7a74TV9+wiZ3sdRt8xf69uOqKCDLjaVsS6xAODEJS0owWuCR1n/nm16LZ3jBWwinmN6NPWrrbOH+eNaEsne12cc4uzJTARd/sLf9GljT7F2SAhPcSusBzfY5uge","errMsg":""}
                console.info("payForNonConsable createPurchaseIntent success =" + JSON.stringify(data));
                var sign = data.inAppDataSignature;
                let signData = data.inAppPurchaseData;
                let token = JSON.parse(signData).purchaseToken;
                that.checkSign(signData, sign, token, productNo, false);
              },
              fail: function (data, code) {
                console.log("payForNonConsable createPurchaseIntent fail data =" + JSON.stringify(data), "code =" + code);
                if (code === 60051 || code === -1) {
                  that.obtainOwnedPurchases(productNo, productType);
                }
              }
            });
          },
          checkSign(signData, signStr, token, productNo, isOwned) {
            console.info("checkSign sign signContent=" + signData + ", token=" + token);
            console.info("checkSign sign =" + signStr);
            //to do by your quick app's server.Set this result to true for convenience here.
              let result = true;
              if (result) {
                // After a payment is complete, the developer needs to determine whether the order has been successfully paid
                // based on the purchaseState field in inAppPurchaseData.After the payment is successful,
                // the corresponding offering or service is provided, and the delivery confirmation request is sent to Huawei IAP.
                let purchaseState = JSON.parse(signData).purchaseState;
                this.confirmTransct(productNo, token, purchaseState, isOwned);
              } else {
                qa.showToast({
                  title: 'Order details verification failed. Please check. ',
                  icon: 'error',
                  duration: 2000
                });
              }
          },
          parseOwnedPurchases: function (productNo, ptype, data) {
            console.info("parseOwnedPurchases data =", JSON.stringify(data));
            let purseDataArray = data.inAppPurchaseDataList; //jsonString array
            let purseDataSignArray = data.inAppSignature;
            if (purseDataArray) {
              let size = purseDataArray.length;
              if (size > 0) {
                purseDataArray.forEach((item, index, array) => {
                  let itemId = JSON.parse(item).productId;
                  if (productNo == itemId) {
                    this.checkSign(item, purseDataSignArray[index], JSON.parse(item).purchaseToken, productNo, true);
                  }
                });
              }
            }
            if (data.continuationToken) {
              this.obtainOwnedPurchases(productNo,ptype, data.continuationToken);
            }
          },
          // 0: consumable; 1: non-consumable; 2: auto-renewable subscription
          obtainOwnedPurchases: function (productNo, ptype, token) {
            console.info("obtainOwnedPurchases ptype=" + ptype + ", token=" + ptype + ",productNo= " + productNo);
            var that = this;
            qa.obtainOwnedPurchases({
              ownedPurchasesReq: {
                priceType: ptype,
                applicationID: this.data.appid,
                continuationToken: token,
                publicKey: this.data.iapPublicKey
              },
              success: function (data) {
                //{"returnCode":0,"inAppSignature":[],"inAppPurchaseDataList":[],"errMsg":"success","itemList":["wwz_c_02"]}  此错误是因为传入的公钥
                //{"returnCode":0,"inAppSignature":   //["JqEIib0Ve0LilZpF909QJBrOqJLcLk034Ku5/E72HC6ikhlE8KGzNL2qkwpi7T/R14jmJRJnBjzGdDZOI7OywT3vs4BGCHTKlWzCFmo0RzP0xeJ0SMXy8O8GgMB2SOkqoyEKxi8FPuKITwbMXw57SQUgEs4awqx7GGXLHsDn8RSrXjKy1pAuzLulnA582P8C/1H5lZXiTAupJA+/7M6efdMaamIXQrP4F1ER9RetmO68oBmCIlyg0vfRdzpd3uV6IUpPakTJy4MgeVwGO36HC9mzwoBrHgiguQ0ff5xLZyOWzBS86mL38HFci2f5hgqkbbJlVTr4fhtwIQFz6XEzeegQtdXCm5i/l1xT7wZw4VCWqQqafDgYZLWZCIIGLUY23ogf0twjpkWYeJi8cRgorc+9FZKJWE29XHeNBRxagNVAfUDXDljkz1FrByA0eUUkkmdZuJaapND5Ij2/h2AWaEvvnhPwV3qrqUf2FpHe7rE+6jrmXZXlc4VO+7tl7sDP"],"inAppPurchaseDataList":[{"country":"CN","purchaseToken":"000001775cbe14c3b60fb32eca40e897fe274acccfec005049adde315f8f8119dec55b3dc3e1e07bx434e.1.101266687","consumptionState":0,"payOrderId":"UN202102011637276909746B887","productId":"wwz_c_02","orderId":"20210201163700802e18c717a1.101266687","kind":0,"developerPayload":"testPurchase","confirmed":0,"productName":"消耗性兑换券","sdkChannel":"1","payType":"16","price":20,"purchaseTime":1612168696000,"currency":"CNY","packageName":"com.huawei.fastapp.dev","applicationId":101266687,"autoRenewing":false,"purchaseState":0,"purchaseTimeMillis":1612168696000}],"errMsg":"success","itemList":["wwz_c_02"]}
                that.parseOwnedPurchases(productNo, ptype, data);
              },
              fail: function (data, code) {
                console.log("obtainOwnedPurchases fail data =" + JSON.stringify(data), "code =" + code);
                qa.showToast({
                  title: 'obtainOwnedPurchases. ',
                  icon: 'error',
                  duration: 2000
                });
              }
            });
          },
          confirmTransct: function (productNo, token, purchaseState, isOwned) {
            console.info("confirmTransct:token:" + token);
            console.info("confirmTransct: purchaseState:" + purchaseState);
            if (purchaseState == 0) {
              this.updateProductPurchaseState(productNo);
              if (isOwned) {
                qa.showModal({
                  title: 'Tips',
                  content: 'You have purchased it and can use it permanently. You do not need to purchase it again. Please go to the order page to query the purchase details.',
                  confirmText:'OK',
                  confirmColor:'#007DFF',
                  success (res) {
                    if (res.confirm) {
                      console.log('用户点击确定')
                    } else if (res.cancel) {
                      console.log('用户点击取消')
                    }
                  }
                });
              } 
            }
          },
          updateProductPurchaseState: function (productNo) {
            console.info("updateProductPurchaseState productNo=" + productNo);
            if (this.data.nonConsumeData) {
              let size = this.data.nonConsumeData.length;
              if (size > 0) {
                this.data.nonConsumeData.forEach((item, index, array) => {
                  let itemId = item.productId;
                  if (productNo == itemId) {
                    item.owned = true;
                    item.purchaseStateDesc = "you have purchased";
                  let up1 = "nonConsumeData["+index+"].owned";
                  let up2 = "nonConsumeData["+index+"].purchaseStateDesc";
                  this.setData({[up1]:true});
                  this.setData({[up2]:"you have purchased"});
                    console.info("updateProductPurchaseState after item=" + JSON.stringify(item));
                  }
                });
              }
              this.data.nonConsumeData.forEach((item, index, array) => {
                console.info("updateProductPurchaseState concact item=" + JSON.stringify(item));
              });
            }
          },
          getPurchaseRecord: function () {
            qa.navigateTo({
              url: '../nonConsumePurchaseRecord/nonConsumePurchaseRecord',
            });
          }
    })

[h2]购买订阅类商品 **subsProducts.qxml文件：**
    
    <!--pages/subsProducts.wxml-->
    <view class="shopcontainer">
        <view class="list">
          <view style="display: flex; flex-direction: column;">
             <block qa:for-items="{{listData}}">
               <view class="productinfo">
                <text class="productName">{{ item.productName }}</text>
                <text class="productDesc">{{ item.productDesc }}</text>
                <text class="productDesc">price：{{ item.price }}</text>
                <text class="productDesc">subPeriod：{{item.subPeriod}}</text>
                <text qa:if="{{item.subSpecialPrice}}" class="productDesc">subSpecialPrice：{{ item.subSpecialPrice}}</text>
                <button size="mini" class="smallbtn" data-product-Id="{{item.productId}}" data-price-Type="{{item.priceType}}" bindtap="payForSubs">{{item.activeState}}</button>
               </view>
             </block>
          </view>
        </view>
        <view class="bottom">
          <button class="bigbtn" data-price-Type="2" bindtap="getPurchaseRecord">PurchaseRecord</button>
        </view>
      </view>

**subsProducts.js文件：**
    
    // pages/subsProducts.js
    Page({
    
        /**
         * 页面的初始数据
         */
        data: {
            isSupportIAP: false,
            isSupportSandBox: false,
            subsproductid: ["wwz_subscribe_01", "wwz_subscribe_02"],
            priceType: 2,
            listData: [],
            iapPublicKey: "MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAgRTXdSeJNOcqTuzUnYJwvKO2QxJuRsrEAC+VFJTIxV/OXsjZK8KQHWe3HGJTYJ3RSZ0GNiEIsdNpyofzJv0bzyodPH4KlnorsUcczhYhuWSUpdP7fleTEmj7+2Meg1MnKIADIuIHMo0gJV4u1lMp4tL/5l2XbRI9fHFZv2EPccAkcIILkbPzyZ4rCsEpD3kLEaUftag3ICZcAbxrl85vE3vhFfa/JpQRr13BN+uDPIevMrFjNr5DPZyjOZsQcS/pcND6pt7dCpKkgBZk0OOSz8CET1nQln6EJXg/zGspXYUk5tIXQZhVopyQX1h2JlPlV5MAbsjwliLf0+ULXdzaRz4ony8QzWBth8jNyyoTaWKWlpi6LP5e117Yx7LYkUwvRH7u0dmGBhO0u9de6W08Cj9BGJ+w0nEoKoaqak98Id2de1tiToWuieetBfTzWjjjbzWpUneKQ7WycwMLymuVVAFW9EXl+bAHNVGnjjjEEWRlKwCe+2WKyrMrbfH+tr6tAgMBAAE=",
            btnvalue: "Buy",
            appid: "101266687",
        },
    
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
        },
    
        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady: function () {
            this.isEnvReady();
            this.checkSandBox();
        },
    
        /**
         * 生命周期函数--监听页面显示
         */
        onShow: function () {
        },
    
        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide: function () {
        },
    
        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload: function () {
        },
    
        /**
         * 用户点击右上角分享
         */
        onShareAppMessage: function () {
        },
            /**If error code 1002 is returned, the authentication fails.
         *  Check whether the app ID and signature fingerprint are the same as those of the AGC. */
        isEnvReady: function () {
            var that = this;
            qa.isEnvReady({
              isEnvReadyReq: {
                applicationID: this.data.appid
              },
              success: function (data) {
                console.debug("isEnvReady data =", JSON.stringify(data));
                 that.setData({isSupportIAP:true});
                that.obtainSubProductInfo();
                qa.showToast({
                    title: 'Env ready is ready!',
                    icon: 'error',
                    duration: 2000
                  });
              },
              fail: function (data, code) {
                console.log("isEnvReady fail data =" + JSON.stringify(data), "code =" + code);
                that.setData({isSupportIAP:false});
                qa.showToast({
                    title: 'Env ready is not supported!',
                    icon: 'error',
                    duration: 2000
                  });
              }
            });
          },
          checkSandBox: function () {
            var that = this;
            qa.isSandboxActivated({
              isSandboxActivatedReq: {
                applicationID: this.appid
              },
              success: function (data) {
                //{"versionFrMarket":"0","returnCode":0,"versionInApk":"30201301","errMsg":"Sandbox is activated","isSandboxUser":true,"isSandboxApk":true}
                console.info("isSandboxActivated success data =", JSON.stringify(data));
                that.setData({isSupportSandBox:data.isSandboxApk});
              },
              fail: function (data, code) {
                console.log("checkSandBox fail data =" + JSON.stringify(data), "code =" + code);
              }
            });
          },
          initSubsPurchaseState(dataArray) {
            if (dataArray) {
              let size = dataArray.length;
              if (size > 0) {
                dataArray.forEach((item, index, array) => {
                  item.activeState = "Buy";
                });
              }
            }
          },
          obtainSubProductInfo: function () {
            var that = this;
            qa.obtainProductInfo({
              productInfoReq: {
                applicationID: this.data.appid,
                priceType: this.data.priceType,
                productIds: this.data.subsproductid
              },
              success: function (data) {
                console.info("obtainProductInfo =" + JSON.stringify(data));
                that.initSubsPurchaseState(data.productInfoList);
                that.setData({listData:data.productInfoList});
                that.querySubscriptions();
              },
              fail: function (data, code) {
                //60000: canceled
                console.log("obtainProductInfo fail data =" + JSON.stringify(data), "code =" + code);
                qa.showToast({
                    title: 'obtainProductInfo fail!',
                    icon: 'error',
                    duration: 2000
                  });
              }
            });
          },
          parseSubcriptionData: function (data) {
            console.info("parseOwnedPurchases data =", JSON.stringify(data));
            console.info("parseOwnedPurchases priceType =" + this.priceType);
            let purseDataArray = data.inAppPurchaseDataList;
            let purseDataSignArray = data.inAppSignature;
            if (purseDataArray) {
              let size = purseDataArray.length;
              if (size > 0) {
                purseDataArray.forEach((item, index, array) => {
                  this.checkSign(item, purseDataSignArray[index], data.itemList[index]);
                });
              }
            }
          },
          querySubscriptions: function () {
            console.info("querySubscriptions ");
            var that = this;
            qa.obtainOwnedPurchases({
              ownedPurchasesReq: {
                priceType: this.data.priceType,
                applicationID: this.data.appid,
                publicKey: this.data.iapPublicKey
              },
              success: function (data) {
                console.info("querySubscriptions data =", JSON.stringify(data));
                that.parseSubcriptionData(data);
              },
              fail: function (data, code) {
                console.log("querySubscriptions fail data =" + JSON.stringify(data), "code =" + code);
                qa.showToast({
                    title: 'querySubscriptions fail!',
                    icon: 'error',
                    duration: 2000
                  });
              }
            });
          },
          isSandboxActivated: function () {
            qa.isSandboxActivated({
              isSandboxActivatedReq: {
                applicationID: this.data.appid
              },
              success: function (data) {
                console.debug("isSandboxActivated data =", JSON.stringify(data));
                qa.showToast({
                    title: 'isSandboxActivated success!',
                    icon: 'success',
                    duration: 2000
                  });
              },
              fail: function (data, code) {
                console.log("isSandboxActivated fail data =" + JSON.stringify(data), "code =" + code);
                qa.showToast({
                    title: 'isSandboxActivated fail!',
                    icon: 'error',
                    duration: 2000
                  });
              }
            });
          },
          updateProductStatus: function (subValid, productId) {
            console.info("updateProductStatus begin  subValid=" + subValid + ", productId=" + productId);
            if (this.data.listData.length > 0) {
              this.data.listData.forEach((item, index, array) => {
                console.info("updateProductStatus forEach  index=" + index + ", item=" + JSON.stringify(item));
                if (item.productId == productId) {
                  var up = "array[" + index + "].activeState";
                  if (subValid) {
                    item.activeState = "Active";  
                    this.setData({[up]:"Active"});
                  } else {
                    item.activeState = "Buy";
                    this.setData({[up]:"Buy"});
                  }
                  console.info("updateProductStatus check end and item= " + JSON.stringify(item));
                }
              });
            }
          },
          checkSign(signData, signStr, id) {
            console.info("checkSign sign signContent=" + signData + ", id=" + id);
            console.info("checkSign sign =" + signStr);
            //to do by your quick app's server.Set this result to true for convenience here.
            let result = true;
              if(result){
                let subValid=JSON.parse(signData).subIsvalid;
                this.updateProductStatus(subValid, id);
              }else{
                this.updateProductStatus(result, id);
              }
          },
          payForSubs: function (e) {
            console.info("consume product payForConsable e="+JSON.stringify(e));
            let productNo=e.currentTarget.dataset.productId;
            let productType=e.currentTarget.dataset.priceType;
            var that = this;
            qa.createPurchaseIntent({
              purchaseIntentReq: {
                applicationID: this.data.appid,
                productId: productNo,
                priceType: productType,
                publicKey: this.data.iapPublicKey
              },
              success: function (data) {
                console.info("createPurchaseIntent success =" + JSON.stringify(data));
                var sign = data.inAppDataSignature;
                let signData = data.inAppPurchaseData;
                let token = JSON.parse(signData).purchaseToken;
                console.info("createPurchaseIntent token= " + token);
                that.checkSign(signData, sign, productNo);
              },
              fail: function (data, code) {
                console.log("createPurchaseIntent fail data =" + JSON.stringify(data), "code =" + code);
                if (code == 60051 || code == -1) {
                  //60051
                  qa.showModal({
                    title: 'Tips',
                    content: 'You have subscribed. Please do not need to subscribe again. Click OK to view the subscription details.',
                    confirmText:'OK',
                    confirmColor:'#007DFF',
                    success (res) {
                      if (res.confirm) {
                        console.log('用户点击确定');
                        that.gotoSysSubManagerPage(productNo);
                      } else if (res.cancel) {
                        console.log('用户点击取消')
                      }
                    }
                  });
                }
              }
            });
          },
          gotoSysSubManagerPage(subid) {
            qa.startIapActivity({
              startIapActivityReq: {
                applicationID: this.data.appid,
                type: 2,
                subscribeProductId: subid
              },
              success: function (data) {
                console.log("gotoSysSubManagerPage success!");
              },
              fail: function (data, code) {
                console.log("gotoSysSubManagerPage fail data =" + JSON.stringify(data), "code =" + code);
                console.log("gotoSysSubManagerPage fail!");
              }
            });
          },
          getPurchaseRecord: function (e) {
            console.info("consume product getPurchaseRecord e=  "+JSON.stringify(e));
            let type=e.currentTarget.dataset.priceType;
            qa.navigateTo({
              url: '../purchaseRecord/purchaseRecord?ptype='+type,
            });
          },
    })

[h2]查询消耗型商品历史购买订单 **purchaseRecord.qxml文件：**
    
    <!--pages/purchaseRecord.wxml-->
    <view class="shopcontainer">
        <view class="list">
          <view style="display: flex; flex-direction: column;">
             <block qa:for-items="{{listObjectData}}" qa:key="*this">
              <view class="productinfo" qa:if="{{priceType==2}}">
                <text class="productName">{{ item.productName }}</text>
                <text class="productDesc">price：{{ item.price }}</text>
                <text class="productDesc">payOrderId：{{ item.payOrderId }}</text>
                <text class="productDesc">purchaseTime：{{ item.purchaseTime }}</text>
                <text class="productDesc">oriPurchaseTime：{{ item.oriPurchaseTime }}</text>
                <text class="productDesc">payType：{{ item.payType }}</text>
                <text class="productDesc">purchaseState：{{ item.purchaseState }}</text>
                <text class="productDesc">lastOrderId：{{ item.lastOrderId }}</text>
                <text class="productDesc">orderId：{{ item.orderId }}</text>
                <text class="productDesc">subscriptionId：{{ item.subscriptionId }}</text>
                <text class="productDesc">oriSubscriptionId：{{ item.oriSubscriptionId }}</text>
                <text class="productDesc">daysLasted：{{ item.daysLasted }}</text>
                <text class="productDesc">numOfPeriods：{{ item.numOfPeriods }}</text>
                <text class="productDesc">expirationDate：{{ item.expirationDate }}</text>
                <text class="productDesc">retryFlag：{{ item.retryFlag }}</text>
                <text class="productDesc">renewStatus：{{ item.renewStatus }}</text>
                <text class="productDesc">subIsvalid：{{ item.subIsvalid }}</text>
                <text class="productDesc">cancelledSubKeepDays：{{ item.cancelledSubKeepDays }}</text>
               </view>
               <view class="productinfo" qa:if="{{priceType==0}}">
                <text class="productName">{{ item.productName }}</text>
                <text class="productDesc">price：{{ item.price }}</text>
                <text class="productDesc">payOrderId：{{ item.payOrderId }}</text>
                <text class="productDesc">purchaseTime：{{ item.purchaseTime }}</text>
                <text class="productDesc">payType：{{ item.payType }}</text>
                <text class="productDesc">purchaseState：{{ item.purchaseState }}</text>
              </view>
             </block>
          </view>
        </view>
        <text class="productName" qa:if="{{priceType==0}}">{{ priceType}}</text>
      </view>

**purchaseRecord.js文件：**
    
    // pages/purchaseRecord.js
    Page({
      /**
       * 页面的初始数据
       */
      data: {
        priceType: "",
        listObjectData: [],
        iapPublicKey: "MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAgRTXdSeJNOcqTuzUnYJwvKO2QxJuRsrEAC+VFJTIxV/OXsjZK8KQHWe3HGJTYJ3RSZ0GNiEIsdNpyofzJv0bzyodPH4KlnorsUcczhYhuWSUpdP7fleTEmj7+2Meg1MnKIADIuIHMo0gJV4u1lMp4tL/5l2XbRI9fHFZv2EPccAkcIILkbPzyZ4rCsEpD3kLEaUftag3ICZcAbxrl85vE3vhFfa/JpQRr13BN+uDPIevMrFjNr5DPZyjOZsQcS/pcND6pt7dCpKkgBZk0OOSz8CET1nQln6EJXg/zGspXYUk5tIXQZhVopyQX1h2JlPlV5MAbsjwliLf0+ULXdzaRz4ony8QzWBth8jNyyoTaWKWlpi6LP5e117Yx7LYkUwvRH7u0dmGBhO0u9de6W08Cj9BGJ+w0nEoKoaqak98Id2de1tiToWuieetBfTzWjjjbzWpUneKQ7WycwMLymuVVAFW9EXl+bAHNVGnjjjEEWRlKwCe+2WKyrMrbfH+tr6tAgMBAAE=",
        appid: "101266687",
      },
    
      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
        console.info("purchase record onLoad options=" + JSON.stringify(options));
        this.setData({
          priceType: options.ptype
        }, () => {
          console.info("purchase recoed onload set data callback after set  priceType="+this.data.priceType);
        });
        let title;
        if (this.data.priceType == 0) {
          title = "Historical consumption information of consumable";
        } else {
          title = "all subscription receipts of a subscription";
        }
        qa.setNavigationBarTitle({
          title: title
        });
      },
    
      /**
       * 生命周期函数--监听页面初次渲染完成
       */
      onReady: function () {
        console.info("purchase recoed onready");
        this.obtainOwnedPurchaseRecord();
      },
    
      /**
       * 生命周期函数--监听页面卸载
       */
      onUnload: function () {
      },
    
      /**
       * 用户点击右上角分享
       */
      onShareAppMessage: function () {
      },
      parseData: function (data) {
        console.info("parseData data =", JSON.stringify(data));
        console.info("parseData priceType =" + this.data.priceType);
        let dataList = data.inAppPurchaseDataList;
        let signArrayList = data.inAppSignature;
        if (dataList) {
          let size = dataList.length;
          if (size > 0) {
            dataList.forEach((item, index, array) => {
              this.checkSign(item, signArrayList[index]);
            });
          }
        }
        if (data.continuationToken) {
          console.info("parseData data.continuationToken");
          this.obtainOwnedPurchaseRecord(data.continuationToken);
        }
      },
      formateTime: function (time) {
        if (time) {
          let unixTimestamp = new Date(time);
          return unixTimestamp.toLocaleString();
        }
      },
      getPurchaseStateStr: function (state) {
        let result;
        if (state == 0) {
          result = "Purchased";
        } else if (state == 1) {
          result = "Canceled";
        } else if (state == 2) {
          result = "Refunded";
        }
        return result;
      },
      obtainOwnedPurchaseRecord: function (token) {
        var that = this;
        qa.obtainOwnedPurchaseRecord({
          ownedPurchasesRecordReq: {
            applicationID: this.data.appid,
            priceType: this.data.priceType,
            publicKey: this.data.iapPublicKey,
            purchaseToken: token
          },
          success: function (data) {
            console.info("obtainOwnedPurchaseRecord data");
            that.parseData(data);
          },
          fail: function (data, code) {
            console.log("obtainOwnedPurchaseRecord fail data =" + JSON.stringify(data), "code =" + code);
          }
        });
      },
      checkSign(signData, signStr) {
        console.info("purchase records checkSign sign signContent=" + signData);
        console.info("purchase records checkSign sign =" + signStr);
        //to do by your quick app's server.Set this result to true for convenience here.
        let result = true;
        if (result) {
          let order = {};
          order.purchaseTime = this.formateTime(JSON.parse(signData).purchaseTime);
          order.productName = JSON.parse(signData).productName;
          order.orderId = JSON.parse(signData).orderId;
          order.payOrderId = JSON.parse(signData).payOrderId;
          order.purchaseState = this.getPurchaseStateStr(JSON.parse(signData).purchaseState);
          let productPrice = JSON.parse(signData).price / 100;
          order.price = productPrice.toFixed(2) + " " + JSON.parse(signData).currency;
          order.payType = JSON.parse(signData).payType;
          //available only for subscription products.
          order.oriPurchaseTime = this.formateTime(JSON.parse(signData).oriPurchaseTime);
          order.lastOrderId = JSON.parse(signData).lastOrderId;
          order.subscriptionId = JSON.parse(signData).subscriptionId;
          order.oriSubscriptionId = JSON.parse(signData).oriSubscriptionId;
          order.daysLasted = JSON.parse(signData).daysLasted;
          order.numOfPeriods = JSON.parse(signData).numOfPeriods;
          order.numOfDiscount = JSON.parse(signData).numOfDiscount;
          order.expirationDate = this.formateTime(JSON.parse(signData).expirationDate);
          order.numOfDiscount = JSON.parse(signData).numOfDiscount;
          order.expirationIntent = JSON.parse(signData).expirationIntent;
          order.retryFlag = JSON.parse(signData).retryFlag;
          order.introductoryFlag = JSON.parse(signData).introductoryFlag;
          order.trialFlag = JSON.parse(signData).trialFlag;
          order.cancelTime = this.formateTime(JSON.parse(signData).cancelTime);
          order.renewStatus = JSON.parse(signData).renewStatus;
          order.subIsvalid = JSON.parse(signData).subIsvalid;
          order.cancelledSubKeepDays = JSON.parse(signData).cancelledSubKeepDays;
          let list=this.data.listObjectData;
          list.push(order);
          this.setData({listObjectData:list});
        }
      },
      // Date.prototype.toLocaleString = function () {
      //   return this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate() + "/ " + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
      // }
    })
