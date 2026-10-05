---
name: document/cn/HMS-3-Guides/3021003
title: 华为分析服务开发指南
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-Guides/3021003
source: portal
---

# 1\. 开发流程

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191031092041.56778987059286925449856133375048:50510722024804:2800:A0AFA515587F6B7CCC067280E7F26C3B17E562D61EA9A5CC1EB8CB01DF3CD95F.png?needInitFileName=true?needInitFileName=true)

开发步骤| 参考文档| 说明  
---|---|---  
注册成为开发者| [注册成为开发者](https://developer.huawei.com/consumer/cn/devservice/doc/20300 "注册成为开发者")| 在华为开发者联盟上注册帐号，用于后续在AppGallery Connect上创建应用等操作。  
创建应用| [创建应用](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-Connect/agc-create_app)| 创建应用后，生成用于唯一标识应用的APP ID。  
集成SDK| 集成SDK| 通过本地或者远程方式集成SDK包。  
添加权限| 添加权限| 在Manifest文件中配置SDK上报所需的权限。  
配置混淆脚本| 配置混淆脚本| 在混淆配置文件中加入排除Analytics Kit的混淆配置。  
接入Analytics| 接入Analytics| 参考“[API说明](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/15899621)”中的API，实现相关功能。  
测试与自检| 测试与自检| 使用华为自检工具在线对应用进行自检，并按照华为提供的自检Checklist进行开发自检。  
准备材料，提交审核。| 上架申请| 将完成的应用提交华为方进行审核，审核时间一般为1~2个工作日。  
  
# 2\. 开发前准备

1、如果没有华为开发者联盟帐号，需要先注册帐号并通过实名认证。详细操作请参见“[注册认证帐号](https://developer.huawei.com/consumer/cn/devservice/doc/20300 "注册认证帐号")”。

2、使用申请的帐号登录[AppGallery Connect网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)创建应用，应用类型选择“移动应用”。详细操作请参见“[创建应用](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-Connect/agc-create_app)”。

3、开通高级分析服务：

a、登录[AppGallery Connect网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击“分析”图标。

b、选择需要查看分析数据的应用。

c、点击“高级分析”页签，点击页面上“启动分析服务”按钮。  
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191207201133.92857616807848405689084702954199:50510722024804:2800:7ED430D41A9719B1A6A70931747BBAB4DB06EC8C25A7EBE568640B90B98B4E30.png?needInitFileName=true?needInitFileName=true)

d、进入“项目接入设置”页面，设置数据存储位置、时区、货币、设置用户数据留存时间、设置自然周定义后，点击“完成”，即完成Analytics Kit服务开通。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191213171314.73711147383939772460669127365566:50510722024804:2800:04545332B8F3E23728B84A060C120862B8648455BE4DF73BF14CFD1CDEAA1911.png?needInitFileName=true?needInitFileName=true)  


  


注意：

请在[AGC网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)-开发-概览-设置-API，开启HUAWEI Analytics。  
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191101095912.78665965320560649336320108566826:50510722024804:2800:C787AE4DC2F197C10D751A7E57EB07330AAA349BE0295E3A8FA8E5F5069B6B9E.png?needInitFileName=true?needInitFileName=true)  
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191101112144.34588544011943735601829790142685:50510722024804:2800:ACDF77C6406002D1533CA6B62DC0720A743F197ABD556880D197ADCF6F828AA4.png?needInitFileName=true?needInitFileName=true)

# 3\. 集成SDK

1、在AndroidStudio开发环境中添加当前应用的AppGallery Connect配置文件。

a.登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html) ，选择“我的应用”。

b.在名称列表中找到应用所在的产品，点击对应手机设备的“Android应用”链接。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191031094302.20559879150815858845822987738366:50510722024804:2800:B12CBDFFFF5D851A61E0B20FA6166016AA01D4409D315BA27E5CE5C220F540F8.png?needInitFileName=true?needInitFileName=true)

c. 选择“开发 > 概览”。

d. 单击“应用”栏下的“agconnect-services.json”下载配置文件。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191031094213.51259775791195979702587362507008:50510722024804:2800:FA16BF13C68854E4FBF143CAD4E9976B89CFE80608C853CD0380CD98470B7CB5.png?needInitFileName=true?needInitFileName=true)

e.在AndroidStudio中，切换至Project视图，将从AppGallery Connect网站获取的agconnect-services.json文件移至Android应用模块app的根目录下。  
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191031094127.48055584446064205873776624176125:50510722024804:2800:662F1EC71A82659517DB7BA8D75BD01BCE2FB34D767F851C4DDBF47BF42150A2.png?needInitFileName=true?needInitFileName=true)

注意：

（1）在获取agconnect-services.json文件前，请确保已经完成高级分析服务的开通（开通步骤参见：[开发前准备-开通高级分析服务](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/3021003#enable_the_analytics_service)）。  
（2）如果您在“开发”模块进行过任何修改动作，包括但不限于：设置数据存储位置、开启或管理某些API等。您需要下载最新的connect-services.json，并替换Android应用模块app的根目录下已有的文件。

2、在主工程gradle中添加maven仓地址和agconnect服务依赖。
      
      1. maven {url 'https://developer.huawei.com/repo/'}
        2. classpath 'com.huawei.agconnect:agcp:1.0.0.300'
    
    

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200722103441.92128922579303246457828308110377:50510722024804:2800:20B6DAE6368702949208476DDBF66569ABD26049BF9F25501374B2888179906D.png?needInitFileName=true)

  


3、在app模块gradle添加插件配置和SDK的版本集成。
      
      1. apply plugin: 'com.huawei.agconnect'
        2. implementation 'com.huawei.hms:hianalytics:2.3.0.304'
        3. implementation 'com.huawei.hms:base:3.0.3.300'
        4. implementation ('com.huawei.hms:opendevice:3.0.3.301'){
        5. exclude (group:'com.huawei.android.hms', module:'hmssdk-base')
        6. }
    
    

注意：

maven仓地址直接在浏览器中打开，无法进行访问，只能在IDE中配置。

  


![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200108163813.41557636908224996529470825109607:50510722024804:2800:A97A6256DE6362028380FD8FA88B994EF7BACCBDC21EA7EDC7F341A071DE394A.png?needInitFileName=true?needInitFileName=true)  


注意：

无论是远程maven仓集成SDK，还是本地集成，请注意插件不能加在gradle首行，否则会出现应用闪退。

4、点击Sync now或Sync Project with Gradle Files，开始构建工程。

# 4\. 添加权限

在工程的manifest节点下添加如下权限：
      
      1. <!--网络权限 -->
        2. <uses-permission android:name="android.permission.INTERNET" />
        3. <!-- 检测网络状态 -->
        4. <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
        5. <!--  AG渠道号查询权限  -->
        6. <uses-permission android:name="com.huawei.appmarket.service.commondata.permission.GET_COMMON_DATA" />
    
    

# 5\. 配置混淆脚本

编译APK前需要配置不要混淆Analytics Kit，避免功能异常。

1、打开Android工程的混淆配置文件。

2、加入排除Analytics Kit的混淆配置。
      
      1. -keep interface com.huawei.hms.analytics.type.HAEventType{*;}
        2. -keep interface com.huawei.hms.analytics.type.HAParamType{*;}
        3. -keep class com.huawei.hms.analytics.HiAnalyticsTools{
        4.         public static void enableLog();
        5.         public static void enableLog(int);
        6. }
        7. -keep class com.huawei.hms.analytics.HiAnalyticsInstance{*;}
        8. -keep class com.huawei.hms.analytics.HiAnalytics{*;}
    
    

# 6\. 接入Analytics

华为分析是基于事件分析数据模型。

分析数据模型采用了 Event-Param-User 模型来记录数据，通过不同的参数对事件进行描述，同时对用户的特征也进行了描述。

术语| 名称| 说明  
---|---|---  
Event| 事件| 描述一个用户在某个时间点、某个地方、以某种方式完成了某个具体的事情。包含who、when、where、how、what等关键要素。  
Param| 参数| 事件上报的关联参数。如加入购物车事件中的 商品名称参数，商品价格参数，支持后续的深入分析。  
UserProperties| 用户属性| 用户的属性表，常见的用户属性有 ODID、设备型号、应用版本、自定义的用户属性（如食品偏好）等。  
  
Analytics Kit 会收集AAID。AAID由HMS Instance Id为每个安装在设备上的应用实例分配。AAID用于连通华为提供的各项服务，例如Push、华为分析、远程配置等。

AAID会在如下场景重置：

  * 用户卸载后重装应用。

  * 用户恢复出厂设置。

  * 用户清除应用数据。

  * 应用主动调用deleteAAID接口。




1、初始化Analytics SDK。

通过 getInstance 接口SDK根据配置完成初始化。
      
      1. HiAnalyticsInstance instance = HiAnalytics.getInstance(context);
    
    

注意：

此处入参context为Activity类型。自2.3.0.304版本开始，已支持Context类型初始化。

2、通过 logEvent 接口记录定义事件。各类事件的定义请参见“附录A：事件说明”。  


3、参考“[API说明](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/15899621)”，调用接口实现各类功能。例如：设置用户属性（setUserProperty）。

## 6.1 示例代码

1、agconnect-services.json文件导入成功后，在第一个Activity的onCreate中初始化Analytics Kit，获得HiAnalyticsInstance实例。若agconnect-services.json文件不正确，则无法进行打点：
      
      1. @Override
        2.     protected void onCreate(Bundle savedInstanceState) {
        3.         super.onCreate(savedInstanceState);
        4.         setContentView(R.layout.activity_main);
        5.         //打开SDK日志开关
        6.         HiAnalyticsTools.enableLog();
        7.         HiAnalyticsInstance instance = HiAnalytics.getInstance(this);
        8.         // 或者使用Context初始化
        9.         // Context context = this.getApplicationContext();
        10.         // HiAnalyticsInstance instance = HiAnalytics.getInstance(context);
        11.         // instance.setUserProperty("userKey","value")
        12.     }
    
    

  


2、在代码合适位置插入埋点代码：
      
      1.         //自定义打点，在工程合适位置插入打点代码
        2.         Bundle bundle = new Bundle();
        3.         bundle.putString("exam_difficulty","high");
        4.         bundle.putString("exam_level","1-1");
        5.         bundle.putString("exam_time","20190520-08");
        6.         instance.logEvent("begin_examination", bundle);
        7.         //预置事件打点
        8.         Bundle bundle_pre = new Bundle();
        9.         bundle_pre.putString(HA_ITEM_ID, "item_ID");
        10.         bundle_pre.putString(HA_ITEM_NAME, "name");
        11.         bundle_pre.putString(HA_ITEM_CATEGORY, "category");
        12.         bundle_pre.putLong(HA_QUANTITY, 100L);
        13.         bundle_pre.putDouble(HA_PRICE, 10.01);
        14.         bundle_pre.putDouble(HA_VALUE, 10);
        15.         bundle_pre.putString(HA_CURRENCY, "currency");
        16.         bundle_pre.putString(HA_ITEM_LOCATION_ID, "location_ID");
        17.         instance.logEvent(HA_ADD_TO_WISHLIST, bundle_pre);
    
    

## 6.2 接入调试

在开发过程中可以启用调试模式，实时查看事件的记录情况，观察具体结果并根据需要进行调整。

### 6.2.1 开启/停用调试模式

1、在Android设备上执行如下命令行，开启调试模式：
      
      1. adb shell setprop debug.huawei.hms.analytics.app <package_name>
    
    

调试模式打开后会保持启用状态，所有事件将实时上报。

2、您可执行如下命令行，停用调试模式：
      
      1. adb shell setprop debug.huawei.hms.analytics.app .none.
    
    

数据成功上报后，开发者联盟上会展示出数据，如下图：  
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200114213023.30027214915046826941668914462245:50510722024804:2800:91C24CC72743CCB216A6DF288F4420C291D8916A76E612C4E9D85F0E04EE0AEF.png?needInitFileName=true?needInitFileName=true)  
在开发者联盟系统上查看数据，请参考[操作指南-应用调试](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/77681680#app_debugging)。

# 7\. 测试与自检

1、参考“[自检应用](https://developer.huawei.com/consumer/cn/service/hms/catalog/AGCHelp.html?page=AGC_appGalleryConnect_auto_check)”使用自检工具对应用进行自检，并根据自检报告修改问题。

2、对照[《华为分析服务开发自检Checklist.xlsx》](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyManage/011/111/111/0000000000011111111.20200114213409.49783096192408791288964273171280:50510722024804:2800:11DC6B48EDFD8D492EA8E8E07E5D7892BAE67747ED1E6CA4AEA6C1C7BFF6B388.xlsx?needInitFileName=true)对应用进行自测。

# 8\. 上架申请

按照“[版权、版号、备案资质审核](https://developer.huawei.com/consumer/cn/devservice/doc/80301)”准备应用上架所需资质材料，参考“[发布应用](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-Connect/agc-release_app)”在AppGallery Connect上传待审核的应用。

# 9\. 附录A：事件说明

## 9.1 自动采集事件

自动采集事件的事件ID是华为分析的保留字段，不能被复用。

  


**事件ID**| **说明**  
---|---  
$HA_APP_UPDATE| 当应用更新到新版本并再次启动时触发。旧应用版本 ID 会作为参数传递。  
$HA_FIRST_OPEN| 当用户安装或重新安装应用后首次启动时触发。此事件在用户首次使用应用时触发，不会在用户将应用下载到设备时触发。  
$HA_SCREEN_ENTER| 打开自动采集开关时，进入Activity时触发。  
$HA_SCREEN_EXIT| 打开自动采集开关时，退出Activity时触发。  
$HA_NOTIFICATION_CLICK| 当用户点击展示的Push通知时，触发此事件。  
$HA_APP_INSTALL | 应用安装后，首次启动时，触发此事件。通过此事件可以了解用户来源。  
  
###   
9.2 预置事件  


## 

Analytics SDK根据常用的使用场景，预先定义了部分事件ID，推荐优先使用预定义常量进行打点并进行分析，基于预置事件会有丰富的定制化洞察报告。

预置事件和参数是华为分析的保留字段，不能被复用。

### 9.2.1 预置事件示例

以上报加入心愿单事件为例，示例代码如下：
      
      1. import static com.huawei.hms.analytics.type.HAEventType.*;
        2. import static com.huawei.hms.analytics.type.HAParamType.*;
        3. //...
        4. Bundle bundle = new Bundle();
        5. bundle.putString(HA_ITEM_ID, "item_ID");
        6. bundle.putString(HA_ITEM_NAME, "name");
        7. bundle.putString(HA_ITEM_CATEGORY, "category");
        8. bundle.putLong(HA_QUANTITY, 100L);
        9. bundle.putDouble(HA_PRICE, 10.01);
        10. bundle.putDouble(HA_VALUE, 10);
        11. bundle.putString(HA_CURRENCY, "currency");
        12. bundle.putString(HA_ITEM_LOCATION_ID, "location_ID");
        13. instance.logEvent(HA_ADD_TO_WISHLIST, bundle);
    
    

### 9.2.2 事件ID列表

**类型**| **事件ID**| **事件名称**  
---|---|---  
String| $HA_ADD_PAYMENT_INFO| 添加支付信息  
String| $HA_ADD_TO_CART| 加入购物车  
String| $HA_ADD_TO_WISHLIST| 加入收藏夹  
String| $HA_APP_OPEN| 打开应用  
String| $HA_BEGIN_CHECKOUT| 开始结算  
String| $HA_CAMPAIGN_DETAILS| 参与营销  
String| $HA_CHECKOUT_PROGRESS| 结算过程  
String| $HA_EARN_VIRTUAL_CURRENCY| 获取虚拟币  
String| $HA_ECOMMERCE_PURCHASE| 购买商品  
String| $HA_GENERATE_LEAD| 获取线索  
String| $HA_JOIN_GROUP| 加入群组  
String| $HA_LEVEL_START| 开启关卡  
String| $HA_LEVEL_END| 完成关卡  
String| $HA_LEVEL_UP| 等级提升  
String| $HA_LOGIN| 登录  
String| $HA_POST_SCORE| 提交分数  
String| $HA_PRESENT_OFFER| 展示订单  
String| $HA_PURCHASE_REFUND| 退款  
String| $HA_REMOVE_FROM_CART| 移除购物车中商品  
String| $HA_SEARCH| 搜索  
String| $HA_SELECT_CONTENT| 点击内容  
String| $HA_SET_CHECKOUT_OPTION| 填写结算选项  
String| $HA_SHARE| 分享  
String| $HA_SIGN_UP| 注册  
String| $HA_SPEND_VIRTUAL_CURRENCY| 消费虚拟币  
String| $HA_TUTORIAL_BEGIN| 开启教程  
String| $HA_TUTORIAL_COMPLETE| 完成教程  
String| $HA_UNLOCK_ACHIEVEMENT| 解锁成就  
String| $HA_VIEW_ITEM| 查看商品  
String| $HA_VIEW_ITEM_LIST| 查看商品列表  
String| $HA_VIEW_SEARCH_RESULTS| 查看搜索结果  
String| $HA_INVITE| 邀请  
String| $HA_RATE| 评价  
  
### 9.2.3 事件参数列表

1\. $HA_ADD_PAYMENT_INFO

结算过程中，用户已经添加付款信息，但尚未发起支付时，上报此事件。

此事件可以与$HA_BEGIN_CHECKOUT、$HA_ECOMMERCE_PURCHASE组合使用，构建结算过程的漏斗分析。

2\. $HA_ADD_TO_CART

用户添加商品到购物车时，上报此事件。

此事件可以与$HA_VIEW_ITEM、$HA_BEGIN_CHECKOUT组合使用，构建商品购买的漏斗分析；也可用于分析用户对开发者的哪些商品感兴趣，进而对这些用户进行营销。

参数ID  
| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_ITEM_ID| 商品ID| String| 必选| 被添加到购物车中的商品的ID。  
$HA_ITEM_NAME| 商品名称| String| 必选| 被添加到购物车中的商品的名称。  
$HA_ITEM_VARIANT| 商品特征| String| 可选| 被添加到购物车中的商品的特征。  
$HA_ITEM_BRAND| 商品品牌| String| 可选| 被添加到购物车中的商品的品牌。  
$HA_ITEM_CATEGORY| 商品分类| String| 必选| 被添加到购物车中的商品的分类。  
$HA_AFFILIATION| 店铺名称| String| 可选| 被添加到购物车中的商品来自于哪个店铺。  
$HA_QUANTITY| 购买数量| Long| 必选| 用户准备购买的数量。  
$HA_PRICE| 购买价格| Double| 可选| 商品的价格。  
$HA_VALUE| 预计收入| Double| 可选| 用户购买此商品，预计会给开发者带来的收入。必须与$HA_CURRENCY同时使用。  
$HA_CURRENCY| 货币类型| String| 可选| 标识收入的货币类型。与$HA_VALUE一起使用。  
$HA_ITEM_LOCATION_ID| 位置ID| String| 可选| 商品所在地标识。  
  
 3\. $HA_ADD_TO_WISHLIST

用户添加商品到收藏夹时，上报此事件。

可用于分析用户对开发者的哪些商品感兴趣，进而对这些用户进行营销。

参数ID  
| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$ITEM_ID| 商品ID| String| 必选| 被添加到收藏夹中的商品的ID。  
$HA_ITEM_NAME| 商品名称| String| 必选| 被添加到收藏夹中的商品的名称。  
$HA_ITEM_VARIANT| 商品特征| String| 可选| 被添加到收藏夹中的商品的特征。  
$HA_ITEM_BRAND| 商品品牌| String| 可选| 被添加到收藏夹中的商品的品牌。  
$HA_ITEM_CATEGORY| 商品分类| String| 必选| 被添加到收藏夹中的商品的分类。  
$HA_AFFILIATION| 店铺名称| String| 可选| 被添加到收藏夹中的商品来自于哪个店铺。  
$HA_QUANTITY| 购买数量| Long| 必选| 用户准备购买的数量。  
$HA_PRICE| 购买价格| Double| 可选| 商品的价格。  
$HA_VALUE| 预计收入| Double| 可选| 用户购买此商品，预计会给开发者带来的收入。必须与$HA_CURRENCY同时使用。  
$HA_CURRENCY| 货币类型| String| 可选| 标识收入的货币类型。与$HA_VALUE一起使用。  
$HA_ITEM_LOCATION_ID| 位置ID| String| 可选| 商品所在地标识。  
  
 4.$HA_APP_OPEN

用户打开应用时，上报此事件。

5\. $HA_BEGIN_CHECKOUT  


用户下单后，点击结算按钮时，触发此事件。可以与$VIEW_ITEM、$HA_ECOMMERCE_PURCHASE等事件结合使用，用于分析电商购买漏斗转化情况。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_VALUE| 收入| Double| 可选| 会给开发者带来的收入。  
  必须与$HA_CURRENCY同时使用。  
$HA_CURRENCY| 货币类型| String| 可选| 标识收入的货币类型。与$HA_VALUE一起使用。  
$HA_TRANSACTION_ID| 交易ID| String| 可选| 开发者交易系统生成的交易ID。  
$HA_NUMBER_OF_NIGHTS| 入住天数| Long| 可选| 针对预定酒店场景，标识用户入住天数。  
$HA_NUMBER_OF_ROOMS| 预定房间数| Long| 可选| 针对预定酒店场景，标识用户预定房间数。  
$HA_NUMBER_OF_PASSENGERS| 旅客人数| Long| 可选| 针对预定酒店场景，标识入住旅客人数。  
$HA_ORIGIN| 出发地| String| 可选| 针对预定酒店场景，标识用户出发地。  
$HA_DESTINATION| 目的地| String| 可选| 针对预定酒店场景，标识用户目的地。  
$HA_START_DATE| 入住日期| String| 可选| 针对预定酒店场景，标识用户入住日期。  
$HA_END_DATE| 离开日期| String| 可选| 针对预定酒店场景，标识用户离店日期。  
$HA_TRAVEL_CLASS| 预定等级| String| 可选| 针对预定酒店场景，标识用户预定房间等级。  
  
 6.$HA_CAMPAIGN_DETAILS

用户参考一个营销活动的内容时，触发此事件。可以用于分析评价营销活动的转化情况。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_SOURCE| 营销来源| String| 必选| 营销活动提供者的标识，如Huawei PPS等。  
$HA_MEDIUM| 营销类型| String| 必选| 营销活动的类型，如：CPC、Email等。  
$HA_CAMPAIGN| 营销名称| String| 必选| 营销活动的名称。  
$HA_TERM| 关键词| String| 可选| 营销活动的关键词。如：搜索广告的关键词。  
$HA_CONTENT| 营销内容| String| 可选| 营销活动的营销内容。  
$HA_CREATIVE_NAME| 创意名称| String| 可选| 营销活动使用的创意素材名称。  
$HA_CREATIVE_SLOT| 展示位置| String| 可选| 创意素材被展示的位置信息。  
$HA_ACLID| 广告网络标记参数| String| 可选| 广告网络生成的用于标记广告点击的参数。  
$HA_CP1| 自定义参数| String| 可选| 自定义参数。  
  
7.$HA_CHECKOUT_PROGRESS

用户开始结算后，如果结算过程包括多个步骤，可以在每个步骤完成后，上报此事件。可以用于分析结算过程各个步骤的转化情况，优化产品设计。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_CHECKOUT_STEP| 结算步骤数| String| 可选| 标识用户当前处于结算过程中的第几个步骤。  
$HA_CHECKOUT_OPTION| 结算选项| String| 可选| 当前结算步骤中用户填写的结算选项。  
  
8.$HA_EARN_VIRTUAL_CURRENCY

用户获取到虚拟货币时，上报此事件。可以用于分析用户获取虚拟币的难易程度，优化产品设计。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_VIRTUAL_CURRENCY_NAME| 虚拟货币类型名称| String| 必选| 标识用户获取到的虚拟货币类型。  
$HA_VALUE| 虚拟货币数量| Long or Double| 必选| 用户获取到的虚拟货币数量。  
  
 9.$HA_ECOMMERCE_PURCHASE

用户购买商品后，上报此事件。可以用于分析用户对哪些商品或内容更感兴趣，优化运营策略。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_CURRENCY| 货币类型| String| 可选| 标识收入的货币类型。与$HA_VALUE一起使用。  
$HA_VALUE| 收入| Double| 可选| 本次交易会给开发者带来的收入。  
  必须与$HA_CURRENCY同时使用。  
$HA_TRANSACTION_ID| 交易ID| String| 可选| 开发者交易系统生成的交易ID。  
$HA_TAX| 税费| Double| 可选| 本次交易产生的税费。  
$HA_SHIPPING| 运输费| Double| 可选| 本次交易产生的运输费。  
$HA_COUPON| 优惠券| String| 可选| 用户在本次交易中使用的优惠券。  
$HA_LOCATION| 位置ID| String| 可选| 商品所在地标识。  
$HA_NUMBER_OF_NIGHTS| 入住天数| Long| 可选| 针对预定酒店场景，标识用户入住天数。  
$HA_NUMBER_OF_ROOMS| 预定房间数| Long| 可选| 针对预定酒店场景，标识用户预定房间数。  
$HA_NUMBER_OF_PASSENGERS| 旅客人数| Long| 可选| 针对预定酒店场景，标识入住旅客人数。  
$HA_ORIGIN| 出发地| String| 可选| 针对预定酒店场景，标识用户出发地。  
$HA_DESTINATION| 目的地| String| 可选| 针对预定酒店场景，标识用户目的地。  
$HA_START_DATE| 入住日期| String| 可选| 针对预定酒店场景，标识用户入住日期。  
$HA_END_DATE  | 离开日期| String| 可选| 针对预定酒店场景，标识用户离店日期。  
$HA_TRAVEL_CLASS| 预定等级| String| 可选| 针对预定酒店场景，标识用户预定房间等级。  
  
10.$HA_GENERATE_LEAD

获取到销售线索时，上报此事件。如开发者投放了广告，用于获取用户的联系方式，用户点击投放广告，填写并提交了联系方式时，可以上报该事件，以评估本次获取到的线索可能会给开发者带来的收入，用于评估投放广告的ROI。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_CURRENCY| 货币类型| String| 可选| 标识收入的货币类型。与$HA_VALUE一起使用。  
$HA_VALUE| 预计收入| Double| 可选| 线索转化后会带来的预期收入，而非真实收入。  
  
11.$HA_JOIN_GROUP

用户加入群组时，上报此事件。如社交类App，用户加入群聊。可以用于评价产品的社交特性对用户的吸引力。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_GROUP_ID| 群组ID| String| 必选| 用户加入的用户群组ID。  
  
12.$HA_LEVEL_START

游戏类应用，用户进入某个关卡，开始游戏时，上报此事件。可以与$HA_LEVEL_END结合使用，分析游戏关卡设计是否合理，有针对性地制定优化策略。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_LEVEL_NAME| 关卡名称| Long| 必选| 游戏中的关卡名称。  
  
13.$HA_LEVEL_END

游戏类应用，用户完成某个关卡，上报此事件。可以与$HA_LEVEL_START结合使用，分析游戏关卡设计是否合理，有针对性地制定优化策略。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_LEVEL_NAME| 关卡名称| Long| 必选| 游戏中的关卡名称。  
$SUCCESS| 关卡完成情况| String| 可选| 用户通过关卡情况。  
  
 14\. $HA_LEVEL_UP

游戏应用中用户升级时，上报此事件。分析产品的用户等级设置是否合理，有针对性地制定优化策略。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_LEVEL| 用户等级| Long| 必选| 标识用户提升后的等级。  
$HA_CHARACTER| 用户角色| String| 可选| 标识用户的角色。  
  
15.$HA_LOGIN

有登录功能的应用，用户登录时上报此事件。分析用户的登录习惯，有针对性地制定运营策略。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_METHOD| 登录方式| String| 必选| 标识用户登录方式。  
  
16.$HA_POST_SCORE

游戏/教育类应用中，用户提交分数时，上报此事件。用于分析产品内容的难易程度，有针对性的制定优化策略。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_SCORE| 分数| Long| 必选| 标识用户得分。  
$HA_LEVEL  | 用户等级| Long| 可选| 用户当前所处级别。  
$HA_CHARACTER| 用户角色| String| 可选| 标识用户的角色。  
  
17.$HA_PRESENT_OFFER

展示订单详情页，用户开始结算之前上报此事件。可以和$HA_VIEW_ITEM、$HA_ECOMMERCE_PURCHASE等事件组合使用，构建分析漏斗，分析用户在各个环节的流失情况，制定优化策略。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_ITEM_ID| 商品ID| String| 可选| 关联的商品ID。  
$HA_ITEM_NAME| 商品名称| String| 必选| 关联的商品名称。  
$HA_ITEM_VARIANT| 商品特征| String| 可选| 关联的商品特征。  
$HA_ITEM_BRAND| 商品品牌| String| 可选| 关联的商品品牌。  
$HA_ITEM_CATEGORY| 商品分类| String| 必选| 关联的商品分类。  
$HA_AFFILIATION| 店铺名称| String| 可选| 关联的商品来自于哪个店铺。  
$HA_QUANTITY| 购买数量| Long| 必选| 用户购买该商品的数量。  
$HA_PRICE| 价格| Double| 可选| 商品的价格。  
$HA_VALUE| 收入| Double| 可选| 该交易会给开发者带来的收入。  
$HA_CURRENCY| 货币类型| String| 可选| 收入的货币类型。  
$HA_ITEM_LOCATION_ID| 位置ID| String| 可选| 商品所在地标识。  
  
18.$HA_PURCHASE_REFUND

用户退款成功后，上报此事件。可以分析退款造成的损失，有针对性的制定优化策略。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_CURRENCY| 货币类型| String| 可选| 退款的货币类型。  
$HA_VALUE| 退款额| Double| 可选| 退款给开发者带来的收入损失。  
$HA_TRANSACTION_ID| 交易ID| String| 可选| 开发者交易系统生成的交易ID。  
  
19.$HA_REMOVE_FROM_CART

用户将商品从购物车中移除时，上报此事件。可以对相关用户进行营销。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_QUANTITY| 购买数量| Long| 可选| 从购物车中被移除的商品数量。  
$HA_ITEM_CATEGORY| 商品分类| String| 必选| 从购物车中被移除商品的商品分类。  
$HA_ITEM_NAME| 商品名称| String| 必选| 从购物车中被移除商品的商品名称。  
$HA_ITEM_ID| 商品ID| String| 必选| 从购物车中被移除商品的商品ID。  
$HA_ITEM_VARIANT| 商品特征| String| 可选| 从购物车中被移除商品的特征。  
$HA_ITEM_BRAND| 商品品牌| String| 可选| 从购物车中被移除商品的品牌。  
$HA_AFFILIATION| 店铺名称| String| 可选| 从购物车中被移除商品来自于哪个店铺。  
$HA_VALUE| 收入损失| Double| 可选| 本次移除操作预期给开发者带来的收入损失。  
$HA_PRICE| 价格| Double| 可选| 从购物车中被移除商品的商品价格。  
$HA_CURRENCY| 货币类型| String| 可选| 衡量收入损失的货币类型。  
$HA_ITEM_LOCATION_ID| 位置ID| String| 可选| 商品所在地标识。  
$HA_START_DATE| 加入购物车时间| String| 可选| 商品被加入购物车时间。  
$HA_END_DATE| 从购物车中移除的时间| String| 可选| 商品被移出购物车时间。  
$HA_ORIGIN| 发货地| String| 可选| 发货地。  
$HA_DESTINATION| 收货地| String| 可选| 用户收货地。  
  
20.$HA_SEARCH

用户在应用内搜索内容时，上报此事件。可以与$HA_SEARCH_RESULTS、$HA_VIEW_ITEM等事件结合使用，分析搜索结果的准确性。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_SEARCH_TERM| 搜索关键词| String| 必选| 用户搜索关键词。  
$HA_NUMBER_OF_NIGHTS| 入住天数| Long| 可选| 针对预定酒店场景，标识用户入住天数。  
$HA_NUMBER_OF_ROOMS| 预定房间数| Long| 可选| 针对预定酒店场景，标识用户预定房间数。  
$HA_NUMBER_OF_PASSENGERS  | 旅客人数| Long| 可选| 针对预定酒店场景，标识入住旅客人数。  
$HA_ORIGIN| 出发地| String| 可选| 针对预定酒店场景，标识用户出发地。  
$HA_DESTINATION| 目的地| String| 可选| 针对预定酒店场景，标识用户目的地。  
$HA_START_DATE| 入住日期| String| 可选| 针对预定酒店场景，标识用户入住日期。  
$HA_END_DATE| 离开日期| String| 可选| 针对预定酒店场景，标识用户离店日期。  
$HA_TRAVEL_CLASS| 预定等级| String| 可选| 针对预定酒店场景，标识用户预定房间等级。  
  
21.$HA_SELECT_CONTENT

用户点击内容时，上报此事件。如在电商应用内，点击列表中的某个商品以参考详情。可以分析用户对哪些商品感兴趣。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_CONTENT_TYPE| 内容类型| String| 必选| 标识用户点击内容的类型。  
$HA_ITEM_ID| 内容ID| String| 必选| 标识用户点击内容的内容ID。  
  
22.$HA_SET_CHECKOUT_OPTION

结算过程中，用户填写一些结算选项时，上报此事件。可以分析用户的结算偏好。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_CHECKOUT_STEP| 结算步骤数| String| 可选| 标识用户当前处于结算过程中的第几个步骤。  
$HA_CHECKOUT_OPTION| 用户填写的结算选项| String| 可选| 当前结算步骤中用户填写的结算选项。  
  
23.$HA_SHARE

用户通过社交渠道分享商品或内容时，上报此事件。可以分析用户对产品的忠诚度。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_CONTENT_TYPE| 分享内容类型| String| 必选| 标识用户分享内容的类型。  
$HA_ITEM_ID| 分享内容ID| String| 必选| 标识用户点击内容的内容ID。  
$HA_METHOD| 分享方式| String| 必选| 标识用户分享的渠道信息。  
  
24.$HA_SIGN_UP

用户注册账号时，上报此事件。可以分析用户来源，有针对性的优化运营策略。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_SIGN_UP_METHOD| 注册方式| String| 必选| 用户的注册方式，如：手机号、邮件、微信等。  
  
25.$HA_SPEND_VIRTUAL_CURRENCY

用户消费虚拟币时，上报此事件。可以用于分析用户对哪些产品更感兴趣。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_ITEM_NAME| 购买商品名称| String| 必选| 用户购买的商品名称。  
$HA_VIRTUAL_CURRENCY_NAME| 虚拟币单位| String| 必选| 用户使用的虚拟币的货币单位。  
$HA_VALUE| 消费虚拟币金额| Long or Double| 必选| 用户消费的虚拟币数量。  
  
26.$HA_TUTORIAL_BEGIN

用户开始使用引导教程时，上报此事件。可以与$HA_TUTORIAL_COMPLETE结合使用，评价引导教程的质量，有针对性的制定优化措施。

27.$HA_TUTORIAL_COMPLETE

用户完成引导教程时，上报此事件。可以与$HA_TUTORIAL_BEGIN结合使用，评价引导教程的质量，有针对性得制定优化措施。

28.$HA_UNLOCK_ACHIEVEMENT

用户达成某项新成就时，上报此事件。可以衡量成就等级设计是否合理，并有针对性的制定优化策略。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_ACHIEVEMENT_ID| 成就ID| String| 必选| 标识成就ID。  
  
29.$HA_VIEW_ITEM

用户浏览商品时，上报此事件。可以分析用户对哪些商品感兴趣，也可用和其他事件组合完成漏斗分析。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_ITEM_ID| 商品ID| String| 必选| 用户浏览商品的ID。  
$HA_ITEM_NAME| 商品名称| String| 必选| 用户浏览商品的名称。  
$HA_ITEM_VARIANT| 商品特征| String| 可选| 用户浏览商品的特征。  
$HA_ITEM_CATEGORY| 商品分类| String| 必选| 用户浏览商品的分类。  
$HA_ITEM_BRAND| 商品品牌| String| 可选| 用户浏览商品的品牌。  
$HA_AFFILIATION| 店铺名称| String| 可选| 用户浏览商品的来自于哪个店铺。  
$HA_ITEM_LOCATION_ID| 位置ID| String| 可选| 商品所在地标识。  
$HA_INDEX| 商品索引| String| 可选| 用户浏览的商品在商品列表中的索引。  
$HA_ITEM_LIST| 商品列表| String| 可选| 用户浏览的商品列表。  
$HA_PRICE| 商品价格| Double| 可选| 商品的价格。  
$HA_QUANTITY| 数量| Long| 可选| 用户准备购买的数量。  
$HA_CURRENCY| 货币类型| String| 可选| 标识收入的货币类型。与$HA_VALUE一起使用。  
$HA_VALUE| 收入| Double| 可选| 用户购买此商品，预计会给开发者带来的收入。必须与$HA_CURRENCY同时使用。  
$HA_FLIGHT_NUMBER| 航班号| String| 可选| 开发者交易系统生成的航班号。  
$HA_NUMBER_OF_PASSENGERS| 旅客人数| Long| 可选| 针对预定酒店场景，标识入住旅客人数。  
$HA_NUMBER_OF_NIGHTS| 入住天数| Long| 可选| 针对预定酒店场景，标识用户入住天数。  
$HA_NUMBER_OF_ROOMS| 预定房间数| Long| 可选| 针对预定酒店场景，标识用户预定房间数。  
$HA_ORIGIN| 出发地| String| 可选| 针对预定酒店场景，标识用户出发地。  
$HA_DESTINATION| 目的地| String| 可选| 针对预定酒店场景，标识用户目的地。  
$HA_START_DATE| 入住日期| String| 可选| 针对预定酒店场景，标识用户入住日期。  
$HA_END_DATE| 离开日期| String| 可选| 针对预定酒店场景，标识用户离店日期。  
$HA_SEARCH_TERM| 搜索关键词| String| 可选| 开发者交易系统生成的搜索关键词。  
$HA_TRAVEL_CLASS| 预定等级| String| 可选| 针对预定酒店场景，标识用户预定房间等级。  
  
30.$HA_VIEW_ITEM_LIST

浏览商品列表时，上报此事件。如用户按分类查看商品列表时。可以分析用户对哪些类型的内容更感兴趣。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_ITEM_CATEGORY| 商品分类| String| 必选| 用户浏览的商品列表的分类。  
  
31.$HA_VIEW_SEARCH_RESULTS

用户查看搜索结果时，上报此事件。与HA_VIEW_ITEM、HA_SEARCH组合使用，衡量搜索算法的准确性。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_SEARCH_TERM| 搜素关键词| String| **必选**|  用户搜素的关键词。  
  
32.$HA_INVITE

用户在应用内邀请其他用户时，上报此事件。可以分析用户对产品的忠诚度。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_METHOD| 发出邀请的方法| String| 必选| 发出邀请的方法，如：微信、Twitter等。  
  
33.$HA_RATE

用户在应用内给应用内的内容进行评分、评级时，上报此事件。可以分析用户对产品的忠诚度及产品对用户的吸引力。

参数ID| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
$HA_RATING_VALUE| 用户评价| Long| 必选| 用户输入的评分、等级。  
$HA_MAX_RATING_VALUE| 最大值| Long| 必选| 应用设置的最大评分、等级。  
  
  


## 9.3 自定义事件

开发者可能有个性化的事件需要打点分析，华为分析也支持开发者自定义事件并扩展事件参数， 或是对预定义事件新增个性化参数。

比如对教育类的应用，可以添加自定义事件“begin _examination”来表示“进入新考试”的事件， 并给该事件增加参数“exam_difficulty”来定义“考试难度”，以此满足特定业务场景的分析。

自定义事件示例如下：
      
      1. //自定义打点，在工程合适位置插入打点代码
        2. Bundle bundle = new Bundle();
        3. bundle.putString("exam_difficulty","high");
        4. bundle.putString("exam_level","1-1");
        5. bundle.putString("exam_time","20190520-08");
        6. instance.logEvent("begin_examination", bundle);
    
    

# 10\. 附录B：设备ID的采集逻辑

Analytics SDK默认获取AAID，如果AAID没有获取到，则会获取AndroidID。

# 11\. 附录C：配置文件说明

## 11.1 公钥配置

由于业务需要，Analytics SDK需要使用公钥加密，服务器私钥解密的场景；公钥以配置文件的形式存放在SDK发布包的assets目录下，文件名为hianalytics_njjn，随着发布包一起发布。

## 11.2 公钥刷新

公钥支持可刷新，只需要刷新公钥配置文件(hianalytics_njjn)的内容即可。

## 11.3 根证书文件(bks)

发布的包中会自带CA根证书文件（hianalyticscas.bks），此文件用于服务器证书校验。
