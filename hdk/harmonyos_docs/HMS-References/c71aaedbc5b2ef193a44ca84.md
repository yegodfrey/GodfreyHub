---
name: document/cn/HMS-References/scan-hmsscankit4
title: com.huawei.hms.hmsscankit
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/scan-hmsscankit4
source: portal
---

该包提供Default View mode、Customized View mode和Bitmap mode三种扫码方式的接口和二维码生成接口。  
  
## Interface

Interface name| Class description  
---|---  
[OnResultCallback](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/scan-onresultcallback4)| Customed View扫码方式中扫码结果的回调接口  
  
## Classes

Class name| Class description  
---|---  
[ScanUtil](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/scan-scanutil4)| 扫码工具类，用于检测权限并启动扫码界面，提供Default View和Bitmap两种扫码方式，同时提供二维码生成接口  
[RemoteView](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/scan-remoteview4)| 控制相机预览和扫码的视图，用于Customized View mode扫码方式  
[RemoteView.Builder](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/scan-remoteviewbuilder4)| 用于创建视图类RemoteView的Builder类  
[WriterException](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/scan-WriterException4)| 生成码异常
