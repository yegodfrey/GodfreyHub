---
name: document/cn/HMS-Guides/scan-sdk-data-4
title: SDK数据安全说明
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/scan-sdk-data-4
source: portal
---

# 移动端SDK  


移动端SDK需要在应用打包时，被加载在您的应用当中。SDK会随着应用的启动，运行在用户应用的进程空间。当用户关闭应用时，SDK会随着应用的关闭而关闭。

# SDK权限说明

SDK 需要使用的权限如下：

l   相机权限 __ android.permission.CAMERA

l   存储权限 android.permission.READ_EXTERNAL_STORAGE

# SDK收集数据

HMS Scan Kit不会收集个人数据，只会基于运营目的收集BI（Business Intelligence）数据。在非华为手机上，使用Scan Kit SDK会收集同样的BI数据。可能会收集的BI数据类型如下：

**名称**| **描述**  
---|---  
package| 调用ScanKit的应用的包名  
appid| APP ID  
version| Scan Kit SDK的版本号  
service| 固定取值com.huawei.hms.scankit  
apiName| API名称  
result| 扫码是否成功的结果码  
costTime| 每秒接口平均时延  
callTime| 接口调用的起始时刻  
transId| 随机生成的事务标识  
operator| 运营商标识  
networkType| 网络类型  
apkVersion| ScanKit.apk的版本号  
appName| app名称  
countryCode| 国家码  
deviceType| 设备型号  
emuiVersion| EMUI版本号  
androidVersion| android版本号  
deviceCategory| 设备类型  
allCnt| 每秒总调用次数  
failCnt| 每秒程序错误次数  
codeCnt| 每秒扫到码的次数  
scanType| 码的格式  
sceneType| 码内容对应的场景类型  
min| 每秒解码最短时间  
max| 每秒解码最长时间  
imgSizeHistogram| 每秒图片大小区间分布  
algapi| 内部算法接口的名称  
algopt| 算法实现的部件名称  
algPhotoMode| 图片模式扫码算法标志位  
contentLength| 给定的生成码的字符串的长度  
reqWidth| 设置的生成的码的宽度，单位：像素  
reqHeight| 设置的生成的码的高度，单位：像素  
outputWidth| 生成的码的宽度，单位：像素  
outputHeight| 生成的码的高度，单位：像素  
buildBitmapOption| 设置码的颜色、边距、背景色  
hmscoreVersion| HMS Core的版本  
  
# SDK数据安全保护  


SDK不收集个人数据，但会上报API调用结果到BI服务器。SDK使用HTTPS对数据传输进行加密。BI数据按照用户归属地上报到不同区域的站点隔离，由BI服务器进行存储和数据安全保护。
