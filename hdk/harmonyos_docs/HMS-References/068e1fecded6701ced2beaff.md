---
name: document/cn/HMS-References/push-aaid-pkg
title: com.huawei.hms.aaid
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/push-aaid-pkg
source: portal
---

华为推送服务开放能力合集，提供了获取应用的设备匿名标识（AAID）以及接入华为推送服务所需的令牌（Token）的公开类和方法。  
AAID (Application Anonymous Device Identifier)：应用匿名设备标识符，标识运行在移动智能终端设备上的应用实例，只有该应用实例才能访问该标识符，它只存在于应用的安装期。与无法重置的设备级硬件ID相比，AAID具有更好的隐私权属性。  
AAID具有以下特性：  
1、匿名化、无隐私风险：AAID和已有的任何标识符都不关联，并且每个应用只能访问自己的AAID；  
2、同一个设备上，同一个开发者的多个应用，AAID取值不同；  
3、同一个设备上，不同开发者的应用，AAID取值不同；  
4、不同设备上，同一个开发者的应用，AAID取值不同；  
5、不同设备上，不同开发者的应用，AAID取值不同；  
AAID会在包括但不限于下述场景中发生变化：  
1、APP卸载重装；  
2、APP调用删除AAID接口；  
3、用户恢复出厂设置；  
4、用户清除应用数据；  
  
# Classes

Class name| Class description  
---|---  
[HmsInstanceId](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/push-HmsInstanceId-cls)| 本类提供了获取应用的AAID的方法以及接入华为推送服务所需令牌（Token）的获取方法。  
  
# Exceptions

name| description  
---|---  
[ApiException](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/apiexception)| 调用华为移动服务SDK中公开的方法失败时返回的异常。异常错误码请参考[ErrorEnum](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/push-ErrorEnum4)枚举类。
