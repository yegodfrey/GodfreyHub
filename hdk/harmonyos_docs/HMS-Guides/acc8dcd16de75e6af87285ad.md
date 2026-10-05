---
name: document/cn/HMS-Guides/Accessing_Analytics_Kit_Android
title: 接入Analytics
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/Accessing_Analytics_Kit_Android
source: portal
---

华为分析是基于事件分析数据模型。

分析数据模型采用了 Event-Param-User 模型来记录数据，通过不同的参数对事件进行描述，同时对用户的特征也进行了描述。

**术语**| **名称**| **说明**  
---|---|---  
Event| 事件| 描述一个用户在某个时间点、某个地方、以某种方式完成了某个具体的事情。包含who、when、where、how、what等关键要素。  
Param| 参数| 事件上报的关联参数。如加入购物车事件中的 商品名称参数，商品价格参数，支持后续的深入分析。  
UserProfiles| 用户属性| 用户的属性表，常见的用户属性有 ODID、设备型号、应用版本、自定义的用户属性（如食品偏好）等。  
  
Analytics Kit 会收集AAID。AAID由HMS Instance Id为每个安装在设备上的应用实例分配。AAID用于连通华为提供的各项服务，例如Push、华为分析、远程配置等。

AAID会在如下场景重置：

  * 用户卸载后重装应用。

  * 用户恢复出厂设置。

  * 用户清除应用数据。

  * 应用主动调用clearCachedData接口。




# 接入步骤

1.初始化Analytics SDK。

   通过 getInstance 接口SDK根据配置完成初始化。
      
      1. HiAnalyticsInstance instance = HiAnalytics.getInstance(context);
    
    

说明：

此处入参context为Activity类型。自2.3.0.304版本开始，已支持Context类型初始化。

2.通过onEvent接口记录定义事件。各类事件的定义请参见[事件说明](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/event_description)。

3.参考“[API说明](https://developer.huawei.com/consumer/cn/doc/3021004)”，调用接口实现各类功能。例如：设置用户属性（setUserProfile）。

# 示例代码

1.agconnect-services.json文件导入成功后，在第一个Activity的onCreate中初始化Analytics Kit，获得HiAnalyticsInstance实例。若agconnect-services.json文件不正确，则无法进行打点：
      
      1. @Override  
        2. protected void onCreate(Bundle savedInstanceState) {
        3.     super.onCreate(savedInstanceState);
        4.     setContentView(R.layout.activity_main);
        5.     //打开SDK日志开关  
        6.     HiAnalyticsTools.enableLog();
        7.     HiAnalyticsInstance instance = HiAnalytics.getInstance(this);
        8.     // 或者使用Context初始化
        9.     // Context context = this.getApplicationContext();
        10.     // HiAnalyticsInstance instance = HiAnalytics.getInstance(context);
        11.     // instance.setUserProfile("userKey","value"); 
        12. }
    
    

2.在代码合适位置插入埋点代码：
      
      1. //自定义打点，在工程合适位置插入打点代码
        2. Bundle bundle = new Bundle();
        3. bundle.putString("exam_difficulty","high");
        4. bundle.putString("exam_level","1-1");
        5. bundle.putString("exam_time","20190520-08");
        6. instance.onEvent("begin_examination", bundle);
        7. //预置事件打点
        8. Bundle bundle_pre = new Bundle();
        9. bundle_pre.putString(PRODUCTID, "item_ID");
        10. bundle_pre.putString(PRODUCTNAME, "name");
        11. bundle_pre.putString(CATEGORY, "category");
        12. bundle_pre.putLong(QUANTITY, 100L);
        13. bundle_pre.putDouble(PRICE, 10.01);
        14. bundle_pre.putDouble(REVENUE, 10);
        15. bundle_pre.putString(CURRNAME, "currency");
        16. bundle_pre.putString(PLACEID, "location_ID");
        17. instance.onEvent(ADDPRODUCT2WISHLIST, bundle_pre);
    
    

# 接入调试

在开发过程中可以启用调试模式，实时查看事件的记录情况，观察具体结果并根据需要进行调整。

## 开启/停用调试模式

1.在Android设备上执行如下命令行，开启调试模式：
      
      1. adb shell setprop debug.huawei.hms.analytics.app **_package_name_**
    
    

调试模式打开后会保持启用状态，所有事件将实时上报。

说明：

请将命令行中的“ _package_name_ ”字段替换为您的应用包名。

2.您可执行如下命令行，停用调试模式：
      
      1. adb shell setprop debug.huawei.hms.analytics.app .none.
    
    

数据成功上报后，开发者联盟上会展示出数据，如下图：

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200511172631.72179887833792423099137207383788:50510526122713:2800:7B7BE95428393FC50F66071DEA0FBACCD8DDE2C375042EADE809732363EFE4A8.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

在开发者联盟系统上查看数据，请参考[应用调试](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/meta_manage#app_debugging)。

  

