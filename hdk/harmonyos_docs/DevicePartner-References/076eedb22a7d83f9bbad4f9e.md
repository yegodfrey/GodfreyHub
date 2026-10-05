---
name: document/cn/DevicePartner-References/take-photo-choose-photo-0000001090560063
title: 调用系统摄像头拍照/从相册查询图片
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-References/take-photo-choose-photo-0000001090560063
source: portal
---

# 调用系统摄像头拍照/从相册查询图片  
  
#### 适用平台

Android、iOS

#### 请求消息

用于调用摄像头拍照后并返回图片，WEB中调用js方法如下：
    
    
    hilink.takePhoto(
    "fileName", // string, 保存时图片的名字
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
    );

如果希望从相册查询图片，则调用js方法如下：
    
    
    hilink.pickPicture(
    "fileName", //string, 保存时图片的名字
    "resultCallback"  //resultCallback，成功或失败时，将调用传入resultStr返回结果
    );

#### 响应消息

当调用成功时，JSSDK将调用success对应的回调函数，将对应的图片base64字符串返回到resultStr中。
    
    
    {
      "base64str"
    }

#### 错误码
    
    
    {
      "errcode": 11
    }

错误码说明参见[通用错误码](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/result-codes-0000001077308408)。
