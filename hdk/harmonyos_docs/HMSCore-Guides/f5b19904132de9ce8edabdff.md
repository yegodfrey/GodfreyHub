---
name: document/cn/HMSCore-Guides/get-started-0000001333905869
title: 新手入门
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/get-started-0000001333905869
---

# 新手入门

在您正式开发应用之前，可以通过本节提供的一个简单的Demo快速体验游戏服务的接入和开发过程。

体验更完整的Demo开发过程，您可以参考[Codelab](https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/HMSGameKit)或者[最佳实践](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/game-bp-0000001333825221)。  

#### 开发环境准备

* JDK 1.8及以上

* 安装Android Studio 3.6.1及以上
  * minSdkVersion 19及以上
  * targetSdkVersion 33（推荐）
  * compileSdkVersion 33（推荐）
  * Gradle 5.4.1及以上（推荐）
* 测试应用的设备：EMUI 3.0及以上的华为设备或Android 4.4及以上的非华为设备。

#### AGC控制台准备

在开发应用前，参考[AGC控制台准备](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/config-agc-0000001281025916)在AppGallery Connect中配置相关信息，包括创建应用、配置签名证书指纹和开通相关服务。  

#### 集成SDK

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，在您的应用所在项目的"项目设置 \> 常规"页面下载"agconnect-services.json"配置文件，并拷贝到应用级根目录下。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250212154813.79242216278282025124683293500798:50001231000000:2800:008F452599BD4383F7E6842BA960139002E9FB897820E791B046702B917716DC.png?needInitFileName=true?needInitFileName=true)
2. 配置HMS Core SDK的Maven仓地址，以Gradle版本7.1及以上版本为例，其他版本配置请参考[更多...](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/integrate-as-sdk-0000001050435953#section1385415381490)。
   1. 打开Android Studio项目级"build.gradle"文件，在"buildscript \> dependencies"中增加agcp插件配置。  
      ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250212154813.77030873691171707767660558603788:50001231000000:2800:ABAA1D5448D0AB6D50A31035633767158A4064A00D93DB46EECCFAFE7C46EDD9.jpg?needInitFileName=true?needInitFileName=true)

      ```
      buildscript {
          dependencies {
              ...
              // 增加agcp插件配置，推荐您使用最新版本的agcp插件。
              classpath 'com.huawei.agconnect:agcp:1.6.0.300'
          }
      ```

   2. 打开项目级"settings.gradle"文件，配置HMS Core SDK的Maven仓地址。

      ```
      pluginManagement {
          repositories {
              gradlePluginPortal()
              google()
              mavenCentral()
              // 配置HMS Core SDK的Maven仓地址。
              maven { url 'https://developer.huawei.com/repo/' }
          }
      }
      dependencyResolutionManagement {
          ...
          repositories {
              google()
              mavenCentral()
              // 配置HMS Core SDK的Maven仓地址。
              maven { url 'https://developer.huawei.com/repo/' }
          }
      }
      ```

3. 添加编译依赖。
   1. 打开应用级的"build.gradle"文件，在"dependencies"中添加如下编译依赖。  
      ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250212154813.14876685297364058052326483628767:50001231000000:2800:8A98630CA927B26268B7F0947A50AC332B520F476F8FBFCE606010F375F25017.png?needInitFileName=true?needInitFileName=true)

      ```
      dependencies {  
           implementation 'com.huawei.hms:hwid:{version}'      
           implementation 'com.huawei.hms:game:6.14.0.300'  
      }
      ```

      ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250212154813.04904329393645350327221862904599:50001231000000:2800:51E4D3504F2292D11D482AC61BFBE7E1C1E0991C62B75C7D639C36415AEE936F.png?needInitFileName=true?needInitFileName=true)  
      hwid为华为帐号服务，{version}替换为Account SDK的最新版本号，请参见[华为帐号服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/version-change-history-0000001050048874)。
4. 添加AGC插件配置。请根据实际情况选择：
   * 方式一：在文件头部声明下一行添加如下配置。

     ```
     apply plugin: 'com.huawei.agconnect'
     ```

   * 方式二：在plugins中添加如下配置。

     ```
     plugins {
         id 'com.android.application'
         // 添加如下配置
         id 'com.huawei.agconnect'
     }
     ```

5. 在完成以上的配置后，点击工具栏中的gradle同步图标，完成"build.gradle"文件的同步，将相关依赖下载到本地。  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250212154813.41732759241049158108392940623280:50001231000000:2800:6904562370EE1773E9BB0728909FD23D007F8700A10984643772AB9ECB18381A.png?needInitFileName=true?needInitFileName=true)  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250212154813.85778584249922453438056049614300:50001231000000:2800:28F9E7214793A5EFE5F94802EAD371BF1375B99E6E058E67BC99D30F69A2177D.png?needInitFileName=true?needInitFileName=true)  
如果出现错误，请检查网络连接是否正常，以及检查"build.gradle"文件是否正确。  

#### 编写您的页面

|布局文件配置|页面预览|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|``` <?xml version="1.0" encoding="utf-8"?> <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" android:layout_width="match_parent" android:layout_height="match_parent" android:orientation="vertical"> <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:layout_marginBottom="40dp" android:orientation="vertical"> <TextView android:layout_width="match_parent" android:layout_height="wrap_content" android:gravity="center" android:layout_marginBottom="20dp" android:text="游戏初始化" android:textColor="@color/hwid_auth_button_color_black" android:textSize="16sp" /> <Button android:id="@+id/btn_init" android:layout_width="wrap_content" android:layout_height="wrap_content" android:background="@drawable/blue_bg_shape" android:paddingLeft="100dp" android:paddingRight="100dp" android:text="@string/init" android:textColor="@color/color_white" /> </LinearLayout> <LinearLayout android:layout_width="match_parent" android:layout_height="wrap_content" android:orientation="horizontal"> <ScrollView android:id="@+id/sv_log" android:layout_width="match_parent" android:layout_height="match_parent"> <TextView android:id="@+id/tv_log" android:layout_width="wrap_content" android:layout_height="match_parent" android:gravity="center" android:textColor="#000000" android:paddingBottom="30dp"/> </ScrollView> </LinearLayout> </LinearLayout> ```|![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250212154813.30088107609632761423732065475682:50001231000000:2800:435FAA9092387A08DAA0E3587BF027BE60F25BEEAF66A0390B506BD594B88F88.png?needInitFileName=true?needInitFileName=true)|

#### 调用游戏服务初始化接口

在应用启动的第一个Activity中，添加如下代码。

```
public void init() {
  AccountAuthParams params = AccountAuthParams.DEFAULT_AUTH_REQUEST_PARAM_GAME;
  JosAppsClient appsClient = JosApps.getJosAppsClient(this);
  Task<Void> initTask;
  // 设置防沉迷提示语的Context，此行必须添加
  ResourceLoaderUtil.setmContext(this);
  initTask = appsClient.init(
          new AppParams(params, new AntiAddictionCallback() {
              @Override
              public void onExit() {
                  // System.exit(0);
                  // 该回调会在如下两种情况下返回:
                  // 1.未成年人实名帐号在白天登录游戏，华为会弹框提示玩家不允许游戏，玩家点击“确定”，华为返回回调
                  // 2.未成年实名帐号在国家允许的时间登录游戏，到晚上9点，华为会弹框提示玩家已到时间，玩家点击“知道了”，华为返回回调
                  // 您可在此处实现游戏防沉迷功能，如保存游戏、调用帐号退出接口或直接游戏进程退出(如System.exit(0))
              }
          }));
  initTask.addOnSuccessListener(new OnSuccessListener<Void>() {
      @Override
      public void onSuccess(Void aVoid) {
          showLog("init success");
      }
  }).addOnFailureListener(
          new OnFailureListener() {
              @Override
              public void onFailure(Exception e) {
                  if (e instanceof ApiException) {
                      ApiException apiException = (ApiException) e;
                      int statusCode = apiException.getStatusCode();
                      // 错误码为7401时表示用户未同意华为联运隐私协议
                      if (statusCode == JosStatusCodes.JOS_PRIVACY_PROTOCOL_REJECTED) {
                          showLog("has reject the protocol");
                          // 在此处实现退出游戏或者重新调用初始化接口
                      }
                      // 在此处实现其他错误码的处理
                  }
              }
          });
}
```

#### 打包测试

1. 编译运行Demo源码。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250212154813.85789039599429898161718162126682:50001231000000:2800:D15B4F23DB9F174C8DFE054464E2513803FF9129A4A4D90FCC2B3921834FF16C.png?needInitFileName=true?needInitFileName=true)

2. 安装到手机。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250212154813.31942500109994568172638016531948:50001231000000:2800:E8F314DD3EBA3CCF99DEE8294CA36837F701099566C15858D4BCA83273FB2FA6.png?needInitFileName=true?needInitFileName=true)

3. 游戏启动后，点击界面上的init按钮，初始化成功后显示初始化成功的日志。 效果如下图所示：

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250212154813.70026443865228313251742953233109:50001231000000:2800:58D6FF52BA8A37A242E36A433B3CE20D2DAA120DF5E2DEC593D5DFF44EF426CC.png?needInitFileName=true?needInitFileName=true)
