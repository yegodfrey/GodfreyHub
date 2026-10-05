---
name: document/cn/HMS-3-Guides/appgallerykit-devguide-game-v3
title: 联运游戏开发指南-V3
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-Guides/appgallerykit-devguide-game-v3
source: portal
---

联运游戏需完成以下内容的开发：

业务| 必选/可选| 说明  
---|---|---  
游戏| 必选| 联运游戏需要按照华为要求接入游戏启动、游戏登录、浮标、防沉迷功能，其他游戏特性可选集成。  
初始化华为分析| 可选| 联运游戏建议在应用启动时初始化华为分析服务。  
升级| 必选| 联运游戏需要使用华为升级接口进行应用升级。  
应用内支付| 必选| 联运游戏需要接入应用内支付。  
应用外支付| 可选| 联运游戏需在华为应用市场应用详情页面展示商品购买信息时集成。  
  
# 1 游戏功能开发  


## 1.1 游戏启动与登录

联运游戏需要按照华为要求进行游戏启动和登录。

  1. 游戏启动功能开发请参见[游戏启动](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/game-start-v3)。

  2. 游戏登录开发请参见[游戏登录](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/game-login-v3)。  





## 1.2 浮标和防沉迷

中国大陆发布的游戏需要接入浮标和防沉迷功能，中国大陆以外地区无需接入。

  * 浮标开发请参见[游戏浮标](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/game-buoy-v3)。

  * 防沉迷功能开发请参见[游戏防沉迷](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/game-anti-indulgence-v3)。




## 1.3 游戏特性

其他的游戏特性（例如成就、事件），开发者可根据实际需求选择接入，参见[游戏服务开发指南](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/game-achievement-v3)。

# 2\. 初始化华为分析  


## 2.1 场景介绍  


华为分析服务(Huawei Analytics)预置大量分析模型，可帮助您清晰地了解用户的行为方式，从而实现用户、产品、内容的深度洞察，让您实现基于数据驱动的运营，可以就应用营销和产品优化制定明智的决策。

联运服务要求开发者在应用启动时初始化华为分析服务，用于采集华为预定义的自动采集事件，包括：

  * 系统级事件：应用升级、首次打开应用时触发，初始化华为分析服务后由HUAWEI Analytics Kit自动采集。

  * Activity页面事件：进入、退出Activity时触发，初始化华为分析服务后由HUAWEI Analytics Kit自动采集。




自动采集事件的详细说明请参考[自动采集事件](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/3021003#automatically_collected_event)。  


## 2.2 注意事项

不同终端平台的限制：

  * 原则上安装了HMS Core（APK）的Android终端设备均可以支持华为分析业务。

  * 非华为Android手机（小米、VIVO、OPPO、三星、酷派、中兴等）需要终端设备先安装HMS Core（APK）。某些厂商手机可能会删除华为进程，导致数据上报异常。

  * 不支持iOS手机。




## 2.3 隐私说明

华为分析服务作为数据处理者不会主动收集用户的个人数据，由开发者按适用的法律法规决定采集哪些个人数据，并维护个人用户在其个人数据方面享有的权利。如果开发者有采集用户数据，请参考 [样例](https://obs.cn-north-2.myhwclouds.com/hms-ds-wf/sdk/HA_privacy_statement_sample.zip) 在应用中提供隐私声明。

## 2.4 开发步骤

在应用启动时，初始化HUAWEI Analytics Kit。
    
    
    复制
      
        1. @Override
        2. protected void onCreate(Bundle savedInstanceState) {
        3.     super.onCreate(savedInstanceState);
        4.     setContentView(R.layout.activity_main);
        5.     //打开SDK日志开关
        6.     HiAnalyticsTools.enableLog();
        7.     HiAnalyticsInstance instance = HiAnalytics.getInstance(this);
        8. }
    
    

初始化完成后，HUAWEI Analytics Kit将自动采集系统级事件和Activity页面事件，开发者可以通过华为分析功能进行一些基础数据分析，详细指导请参见[华为分析操作指南](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/23588874)。

如果开发者需要实现更复杂的预置事件和自定义事件埋点与上报，请参见[华为分析开发指南](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/3021003)。

# 3 升级

## 3.1 场景介绍  


应用升级是指用户启动应用后应用后台主动检查新版本，或用户在应用的检查升级入口主动触发升级检查操作，HMS SDK从华为应用市场请求下载新版本应用并进行升级安装的过程。

具体交互细节如下：

  1. 用户启动应用或在应用内主动触发检查升级操作。

  2. 应用检查到更新后拉起升级确认页面。

  3. 用户确认升级后进入华为应用市场的应用升级页面，执行升级操作。




## 3.2 业务流程

![](https://obs.cn-north-2.myhwclouds.com/hms-ds-wf/b/8606bc6ff88b4050b736ad5c7f264290-5800708718556032749.png)

  


  1. 用户触发检查升级操作，例如启动应用或主动在检查升级页面检查升级。

  2. 应用调用[JosApps.getAppUpdateClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/josapps-v3#getAppUpdateClient)方法请求初始化AppUpdateClient实例。

  3. HMS SDK向应用返回当前应用的AppUpdateClient实例。

  4. 应用调用[AppUpdateClient.checkAppUpdate](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/appupdateclient-v3#checkAppUpdate)方法请求检查应用是否有更新。

  5. HMS SDK在华为应用市场查询最新的应用版本信息。

  6. 华为应用市场向HMS SDK返回应用版本信息。

  7. HMS SDK通过回调方式将检查结果返回给应用。

  8. 应用从回调结果中onUpdateInfo方法返回的[ApkUpgradeInfo](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/apkupgradeInfo-v3)实例确认应用是否有更新。  
   ● 如果应用版本有更新则进行下一步。  
   ● 如果应用版本没有更新，则流程结束。

  9. 应用调用[AppUpdateClient.showUpdateDialog](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/appupdateclient-v3#showUpdateDialog)方法请求拉起升级提示页面。

  10. HMS SDK向用户拉起升级提示页面。

  11. 用户在升级确认页面中选择升级应用。

  12. HMS SDK向华为应用市场请求下载最新的应用安装包。

  13. 华为应用市场向HMS SDK返回应用软件包。

  14. HMS SDK在下载完成后启动应用安装。




## 3.3 开发步骤

涉及应用升级的关键开发步骤如下：

1、调用[JosApps.getAppUpdateClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/josapps-v3#getAppUpdateClient)方法初始化AppUpdateClient对象。
    
    
    复制
      
        1. AppUpdateClient client = JosApps.getAppUpdateClient(this);
    
    

2、调用[AppUpdateClient.checkAppUpdate](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/appupdateclient-v3#checkAppUpdate)方法检查升级版本。

(1) 调用checkAppUpdate方法。
    
    
    复制
      
        1. public void checkUpdate() {
        2.     AppUpdateClient client = JosApps.getAppUpdateClient(this);
        3.     client.checkAppUpdate(this, new UpdateCallBack(this));
        4. }
    
    

(2) 定义检查更新的回调方法，从回调结果中获取[ApkUpgradeInfo](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/apkupgradeInfo-v3)对象。
    
    
    复制
      
        1. private static class UpdateCallBack implements CheckUpdateCallBack {
        2.     private GameApiActivity apiActivity;
        3.     private UpdateCallBack(GameApiActivity apiActivity) {
        4.         this.apiActivity = apiActivity;
        5.     }
        6.     public void onUpdateInfo(Intent intent) {
        7.         if (intent != null) {
        8.             // 获取更新状态码， Default_value为取不到status时默认的返回码，由应用自行决定
        9.             int status = intent.getIntExtra(UpdateKey.STATUS, DEFAULT_VALUE);
        10.             // 错误码，建议打印
        11.             int rtnCode = intent.getIntExtra(UpdateKey.FAIL_CODE, DEFAULT_VALUE);
        12.             // 失败信息，建议打印
        13.             String rtnMessage = intent.getStringExtra(UpdateKey.FAIL_REASON);
        14.             Serializable info = intent.getSerializableExtra(UpdateKey.INFO);
        15.             //可通过获取到的info是否属于ApkUpgradeInfo类型来判断应用是否有更新
        16.             if (info instanceof ApkUpgradeInfo) {
        17.                 // 这里调用showUpdateDialog接口拉起更新弹窗，由于demo有单独拉起弹窗按钮，所以不在此调用，详见checkUpdatePop()方法
        18.                 apiActivity.showLog("There is a new update");
        19.                 apiActivity.apkUpgradeInfo = (ApkUpgradeInfo) info;
        20.             }
        21.             apiActivity.showLog("onUpdateInfo status: " + status + ", rtnCode: " + rtnCode + ", rtnMessage: " + rtnMessage);
        22.         }
        23.     }
        24. }
    
    

3、当检查到应用版本有更新时，在checkAppUpdate的回调方法中调用[AppUpdateClient.showUpdateDialog](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/appupdateclient-v3#showUpdateDialog)方法向用户弹出升级提示框。
    
    
    复制
      
        1. public void checkUpdatePop(boolean forceUpdate) {
        2.     AppUpdateClient client = JosApps.getAppUpdateClient(this);
        3.     client.showUpdateDialog(this, apkUpgradeInfo, forceUpdate);
        4.     Log.i(TAG, "checkUpdatePop success");
        5. }
    
    

# 4\. 支付

## 4.1 应用内商品支付

联运应用接入华为支付，需要参考[华为支付开发指南](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/iap-managed-products)开发应用内支付支付相关功能。

## 4.2 应用外商品支付

应用外商品是指在AppGallery Connect的商品管理系统（PMS）中创建的商品，进行了商品营销配置后，可以直接在华为应用市场的应用详情页中展示商品宣传图、商品名称、商品描述，供用户点击购买。

注意：

应用外PMS商品支付功能目前仅支持发布地区包含中国大陆的应用。

![](https://obs.cn-north-2.myhwclouds.com/hms-ds-wf/b/53ff597a942f474b9ac392ecf34cbe1e8316741319582961456.png)

  


应用外商品支付分为以下两种方式：

  * DeepLink方式：用户点击购买应用市场的商品后跳转到开发者自己的APP商品地址，该地址可直接拉起开发者APP，由APP自行完成后续的支付和发货。

  * 商品直购方式：用户点击购买应用市场的商品后由华为HMS Core发起支付，在支付完成后由华为服务器通知开发者服务器完成商品发货。




DeepLink方式的应用外商品支付仅需在[配置商品营销信息](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-product_mkt)时配置DeepLink地址，用户点击购买后将直接跳转到该DeepLink地址，后续支付和发货流程与应用内商品支付流程一致，参见[](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/iap-guide)[华为支付开发指南](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/iap-managed-products)。本章节将具体介绍商品直购方式的应用外商品支付的功能开发。

### 4.2.1 前提条件

已参见[配置商品营销信息](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-product_mkt)配置商品营销信息。

### 4.2.2 商品直购

![](https://obs.cn-north-2.myhwclouds.com/hms-ds-wf/b/d74611580a074655ad918009bd81867a-8372954744935561533.png)

接收发货通知：

1、商品直购成功后，华为数字商品服务器会调用[通知发货](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/appgallerykit-notifysendproduct-v3)接口通知开发者服务器对已经完成购买的商品发货。

请求消息样例：
    
    
    复制
      
        1. POST {第三方应用服务器url} HTTP/1.1 
        2. Content Type : application/json ; charset=UTF-8 
        3. { 
        4.   "data": { 
        5.     "developerId": "234234234", 
        6.     "appId": "1231333", 
        7.     "orderId": "sdfsfff32324324234234", 
        8.     "productNo": "product344", 
        9.     "openId": "openId13123", 
        10.     "count": 1, 
        11.     "ts": 12312313123131123 
        12.   }, 
        13.   "sign": "string" 
        14. }
    
    

2、开发者参见[获取验签公钥](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/appgalleryconnect_gettestkey)获取用于验证订单信息的公钥。

3、开发者服务器收到发货通知后，参考[验签示例](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/appgallerykit-notifysendproduct-v3#example)对发货通知消息的sign字段验签，并根据查询订单相关数据的有效性，向华为服务器返回处理结果。

返回消息样例：
    
    
    复制
      
        1. { 
        2.   "error": { 
        3.     "errorCode": 0, 
        4.     "errorMsg": "string" 
        5.   } 
        6. } 
        7. or 
        8. { 
        9.     "data": { 
        10.     "result": 0 
        11.   } 
        12. }
    
    

4、开发者根据商品ID和当前用户信息完成发货操作，此部分由开发者自行完成。

发货成功主动通知：

1、开发者参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/appgallerykit-createapiclient)章节创建用于访问华为服务器接口的API客户端。

说明：

API客户端仅需创建一次。

2、开发者调用[获取Token](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/appgallerykit_gettoken-v3)接口获取用于API客户端认证的的access_token。

3、开发者服务器在发货成功后调用[发货成功通知](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/appgallerykit_notifyproductcallback-v3)接口向华为服务器发送通知，传入access_token。通知成功后华为服务器刷新订单状态。

请求消息样例：
    
    
    复制
      
        1. { 
        2.   "orderId": "string", 
        3.   "productNo": "string", 
        4.   "openId": "string", 
        5.   "status": 0 
        6. "ts": 12312313123131123 
        7.  }
    
    

响应消息样例：
    
    
    复制
      
        1. { 
        2.   "error": { 
        3.     "errorCode": 0, 
        4.     "errorMsg": "string" 
        5.   } 
        6. } 
        7. or 
        8. { 
        9.   "data": { 
        10.     "result": 0 
        11.   } 
        12. }
    
    

### 4.2.3 掉单查询  


商品直购后通知发货过程可能发生通知发货失败而产生掉单，此时华为服务会将该订单标识为未发货状态。当应用启动时需要主动查询当前华为帐号是否有未发货的订单，如果有掉单数据需通知开发者服务器发货。开发者服务器完成发货后通知华为服务器发货成功，华为服务器将订单状态修改为发货状态。

![](https://obs.cn-north-2.myhwclouds.com/hms-ds-wf/b/e9150eaef1504d75bda347204d4d02f2-2192514322468429342.png)

开发步骤：

1、应用启动时主动调用[JosApps.getProductClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/josapps-v3#getProductClient)方法初始化[ProductClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/productclient-v3)实例。
    
    
    复制
      
        1. ProductClient productClient =  JosApps.getProductClient(this);
    
    

2、应用调用[ProductClient.getMissProductOrder](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/productclient-v3#getMissProductOrder)方法查询未发货的订单。

说明：

本步骤仅为建议，开发者可根据查询结果感知当前设备中是否存在已登录的华为帐号，正式的查询将在步骤4中进行。

HMS SDK会根据当前设备中已经登录授权的华为帐号查询该帐号的掉单数据。如果当前设备中未登录华为帐号，则不返回数据。
    
    
    复制
      
        1. productClient.getMissProductOrder(this) 
        2.          .addOnSuccessListener(new OnSuccessListener<ProductOrderBuffer>() { 
        3.              @Override 
        4.              public void onSuccess(ProductOrderBuffer productOrderInfos) { 
        5.                  if (productOrderInfos == null) { 
        6.                      LogUtil.i("QueryDPSMissProductList", "not have miss product"); 
        7.                      return; 
        8.                  } 
        9.                  StringBuffer stringBuffer = new StringBuffer(); 
        10.                  for (ProductOrderInfo productOrderInfo : productOrderInfos) { 
        11.                      stringBuffer 
        12.                              .append("TradeId:").append(productOrderInfo.getTradeId()).append("\r\n") 
        13.                              .append("ProductNo:").append(productOrderInfo.getProductNo()).append("\r\n") 
        14.                              .append("OrderId:").append(productOrderInfo.getOrderId()).append("\r\n") 
        15.                              .append("Sign:").append(productOrderInfo.getSign()).append("\r\n") 
        16.                              .append("--------------\r\n:"); 
        17.                  } 
        18.                  LogUtil.i("QueryDPSMissProductList", stringBuffer.toString()); 
        19.              } 
        20.          }).addOnFailureListener(new OnFailureListener() { 
        21.              @Override 
        22.              public void onFailure(Exception e) { 
        23.                  if (e instanceof ApiException) { 
        24.                      ApiException apiException = (ApiException) e; 
        25.                      LogUtil.i("QueryDPSMissProductList", "getMissProductOrder failed:" + apiException.getStatusCode()); 
        26.                  } 
        27.              } 
        28.          });
    
    

3、引导用户进行华为帐号授权登录。

说明：

为了更好的用户体验，建议开发者将华为帐号与开发者自己的帐号体系绑定，以便于用户可以同时浏览华为帐号和非华为帐号购买的订单。

4、用户的华为帐号授权登录后，应用再次调用[ProductClient.getMissProductOrder](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/productclient-v3#getMissProductOrder)方法确认掉单数据。

5、应用调用[ProductOrderInfo.getSign](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/productorderinfo-v3#getSign)方法获取订单信息中的签名字符串，使用[获取验签公钥](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/appgalleryconnect_gettestKey)中获取的验签公钥参考[对掉单数据验签](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/appgallerykit-missodersignature-v3)对订单信息进行验签。

6、验签通过后，应用客户端通知应用服务端发货。开发者服务器发货完成后向华为服务发送通知，具体参见[发货成功通知](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/appgallerykit_notifyproductcallback-v3)。
