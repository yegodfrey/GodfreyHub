---
name: document/cn/HMS-Guides/hms-map-v4-faq
title: HUAWEI Map Kit FAQ
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/hms-map-v4-faq
source: portal
---

[问题一]Map Kit Android SDK错误码及处理方式。

**错误码**| **描述**| **处理方式**  
---|---|---  
0| 鉴权成功| 无。  
5| 正在等待结果| 正在处理，请等待。  
010001或6| 网络错误| 查看设备已连接网络。  
010002或2| 指纹非法| 查看agconnect-services.json是否是由项目的签名证书指纹生成的。  
010003| 没有地图权限| 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/)网站，查看申请的App ID有没有打开API开关；或者是否[添加权限](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/hms-map-addingpermissions)。  
  
* * *

[问题二]目前Map Kit各个服务是否支持中国大陆？

Map Kit 提供的Android SDK、JavaScript API、Static Map API，Directions API和Matrix API均不支持中国大陆，支持的国家和地区请参考[支持的国家和地区](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/hms-map-supportedregions)。

* * *

* * *

* * *

* * *

* * *

* * *

* * *

* * *

* * *

[

* * *

* * *

* * *

问题三]Map Kit提供的Android SDK是否支持地图的横竖屏切换？

不支持。

* * *

[问题四]调用Web API返回错误码6。

可能原因是API KEY中包含特殊字符，此时需要对特殊字符编码进行encodeURI编码。例如：原始API KEY：ABC/DFG+ ，转换结果：ABC%2FDFG%2B。

* * *

* * *

* * *

* * *

* * *

* * *

* * *

* * *

* * *

[

* * *

* * *

* * *

问题五]r-classes.jar冲突错误。

如果出现下面的错误，可以升级Map Kit Android SDK版本到4.0.1.301。
      
      1. Duplicate class com.huawei.secure.android.common.ssl.R found in modules r-classes.jar (com.huawei.agconnect:agconnect-credential:1.3.0.300) and r-classes.jar (com.huawei.hms:maps-base:4.0.0.301)
    
    

* * *

[

* * *

* * *

* * *

问题六]调用BitmapDescriptorFactory.fromResource(int)发生空指针异常。

异常堆栈：
      
      1. E/HmsMapKit_CrashHandler_79: uncaughtException stacktrace is java.lang.NullPointerException: Attempt to invoke virtual method 'android.content.res.Resources android.content.Context.getResources()' on a null object reference
    
    

解决方式：

在使用BitmapDescriptorFactory之前调用MapsInitializer.initialize(this.getApplicationContext())或者MapsInitializer.initialize(this)。

* * *
