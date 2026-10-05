---
name: document/cn/HMS-3-Guides/location-test-v3
title: 华为定位服务测试
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-Guides/location-test-v3
source: portal
---

华为定位服务采用GPS、WiFi、基站等多途径的混合定位模式进行定位，赋予应用开发者快速、精准地获取用户位置信息的能力，构建全球定位服务能力，助力开发者发展全球业务。

**定位能力可以对如下接口进行测试，比如：**

[requestLocationUpdates()](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/fusedlocationproviderclient-v3)

[getLastLocation()](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/fusedlocationproviderclient-v3)

注意：

目前HMS Location Kit功能只支持集成HMS SDK 3.0.0.300以上版本的应用，并且测试设备必须安装3.0.0.300以上华为移动服务（APK）。

# **1\. requestLocationUpdates()**  


## **1.1 预置条件**

1、网络连接正常    


2、手机已安装华为移动服务和Location Demo    


3、在设置-应用-华为移动服务-权限中，打开位置权限  。  


4、在“设置>安全和隐私>定位服务>访问我的位置信息”中    


5、打开位置信息开关

## **1.2 测试步骤**

1、打开Location Demo

2、点击requestLocationUpdates with callback按钮

3、再点击requestLocationUpdates with callback按钮

4、如果您想停止定位请求，请点击removeLocationUpdates with callback按钮

## **1.3 预期结果**

请求发送成功，获取到相应的位置信息。

# **2\. getLastLocation()**

## **2.1 预置条件**

1、网络连接正常    


2、手机已安装华为移动服务和Location Demo    


3、在设置-应用-华为移动服务-权限中，打开位置权限    


4、在“设置>安全和隐私>定位服务>访问我的位置信息”中    


5、打开位置信息开关

## **2.2 测试步骤**

1、打开Location Demo    


2、点击getLastLocation接口按钮    


3、连续多次点击getLastLocation

## **2.3 预期结果**

每次都能成功获取坐标或者空值，获取坐标的话，则为手机所在位置的经纬度坐标（如果没有缓存位置信息，则返回为空值）。

注意：

当访问我的位置信息开关关闭，发送request时，[getLastLocation](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/fusedlocationproviderclient-v3)接口返回值为null，[requestLocationUpdates](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/fusedlocationproviderclient-v3)接口不会返回任何信息。

  

