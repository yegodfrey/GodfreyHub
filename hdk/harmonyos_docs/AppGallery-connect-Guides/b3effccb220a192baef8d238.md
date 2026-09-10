---
name: document/cn/AppGallery-connect-Guides/appgallerykit-paidapps-check-0000001073193403
title: Check
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/appgallerykit-paidapps-check-0000001073193403
---

# Check

#### 接口定义

```
void check(Activity activity, String pkgName, String drmId, String drmPublicKey, boolean showErrorDailog, DrmCheckCallback callback)
```

#### 接口描述

鉴权接口，提供给开发者检查用户是否已经购买过付费应用的接口。  

#### 请求参数

|参数名|参数类型|是否必选|参数说明|
|:--------------|:--------------------------------|:---|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|activity|Activity|M|调用check接口的主Activity。|
|pkgName|String|M|调用方应用包名。 示例："com.xxx.huawei"|
|drmId|String|M|AppGallery Connect上获取的版权保护id。 示例：890086000000000080|
|drmPublicKey|String|M|AppGallery Connect上获取的版权保护公钥。 示例：MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7akM5lDrJ47hgQ2vV+DlBb0OTxTT9ucJUbkG5921m+DQ2eT7d0tYtXDh81PVpHky7ecnO7Bf6Yp/Uq8iOaHQ8HcA6YwTcuWHuTsxMpkEF8DlFdymJW/GIocRkZJ7aPA9TLhjq7UCjEVesBoiDEHYHAosKhw1Wj92HWCYVxLvcFM915FQZyYgNCPkRtV7oCd0V7OP4ztnmMgj4ukIUjBT8EvecEpfbo9WHY2j+MhiaMp8uqBp6BhnokPjAJhfL0R9E8mBKkCO/+yfr40Dbgzwy5u/+gVLpE5B+1+iKTIgBUhqg4X3LOLpG5dp9kQZ5e1DbfeFkMhYTfs5ZGQIDAQAB|
|showErrorDailog|boolean|O|是否需要AppGallery DRM Service SDK根据错误码来提示用户。 * true：需要，弹框模式，由AppGallery DRM Service SDK根据错误码向用户弹出对应提示框。 * false：不需要，即错误码模式。由开发者根据错误码自行处理。 该参数不传时默认为true。|
|callback|public interface DrmCheckCallback|M|在应用启动的主Activity中通过声明一个私有内部类来实现该接口，并根据鉴权结果选择不同的处理流程，在鉴权成功的public void onCheckSuccess()方法中继续程序逻辑，而在鉴权失败的public void onCheckFailed(int errorCode)方法中，弹框模式可以直接退出应用；错误码模式下，可以根据回调的入参errorCode自行处理鉴权失败的场景。|

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250425140403.47930609307011896851265942214851:50001231000000:2800:5BEEB6D4462C9C3AA84D7290E5C6F0E631B26ED4FC0CDEE70D293605499DD838.png)  
将check添加到应用程序启动的主Activity的生命周期函数OnCreate的最开始位置，按接口说明传入合法参数，这样Activity就会被AppGallery DRM Service SDK保护。  

#### 示例代码

```
// 实现鉴权接口回调
private class MyDrmCheckCallback implements DrmCheckCallback {
@Override
public void onCheckSuccess() {
         // 鉴权成功，用户继续使用程序。
         setContentView(R.layout.activity_main);
        ……
}
@Override
public void onCheckFailed(int errorCode) {
         // 鉴权失败，用户不能使用程序，程序退出。
         finish();
        }
@Override
public void onCheckFailed(int errorCode, String appStorePkgName) {
         // 鉴权失败，用户不能使用程序，程序退出。
         // 错误码归一的回调接口
         finish();
        }
 }
// 在OnCreate调用check接口
@Override
protected void onCreate(Bundle savedInstanceState) {
         super.onCreate(savedInstanceState);
          // 调用鉴权方法
         Drm.check(this, this.getPackageName(), DRM_ID, DRM_PUBLIC_KEY, TRUE, 
         new MyDrmCheckCallback());
}
```

