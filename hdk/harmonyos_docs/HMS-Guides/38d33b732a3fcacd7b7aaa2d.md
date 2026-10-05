---
name: document/cn/HMS-Guides/game-start
title: 游戏启动
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/game-start
source: portal
---

# 1\. 场景介绍

用户点击应用图标打开游戏，应用后台启动时需要对HMS SDK进行初始化。

# 2\. 业务流程

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191202114106.30613389880550717677089661741332:50510424043526:2800:106EE027C117614B7476C6A2A2E47F01813E1FA44FEC893890CAA8F42A154282.png?needInitFileName=true)

1、用户在移动设备中点击应用图标打开游戏启动界面。

2、应用执行启动程序，加载应用相关资源，具体启动程序由开发者自行完成。

3、应用在启动程序中调用[JosApps.getJosAppsClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/josapps-v4#getJosAppsClient)方法获取[JosAppsClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/josappsclient)实例。

4、HMS SDK返回当前应用的JosAppsClient实例。

5、应用调用[JosAppsClient.init](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/josappsclient#init)方法进行HMS SDK初始化和游戏公告初始化。

6、应用在启动成功后展示游戏首页，并检查应用版本是否有更新。应用升级的流程，请参见[应用升级](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/appgallerykit-upgrade-devguide#h1-1585038797338)。

# 3\. 注意事项

  * 本场景中涉及的功能必须在应用启动时完成，而不是用户在进行登录、支付等操作时才完成，否则可能会导致应用审核被驳回。

  * 如果应用向用户提供了用户隐私协议，init接口必须在用户同意协议后调用。




# 4\. 开发步骤

本功能涉及的关键开发步骤如下：

1、在Application的onCreate方法中添加如下代码，用于注册Activity的回调监听。
      
      1. public class MyApplication extends Application{ 
        2.     @Override  
         
        3.     public void onCreate(){  
         
        4.         super.onCreate();  
         
        5.         HuaweiMobileServicesUtil.setApplication(this);  
         
        6.     }  
         
        7. }
             
    
    

注意：

编译前请确认应用的Manifest文件中application必须已经配置了Application类的名称，例如“android:name=".MyApplication"”。

2、调用[JosApps.getJosAppsClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/josapps-v4#getJosAppsClient)方法初始化[JosAppsClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/josappsclient)对象，并调用[JosAppsClient.init](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/josappsclient#init)方法进行初始化。
      
      1. private void init() {  
         
        2.     JosAppsClient appsClient = JosApps.getJosAppsClient(this, null);  
         
        3.     appsClient.init();  
         
        4.     Log.i(TAG, "初始化成功 | init success");  
         
        5. }
             
    
    

init方法不返回执行结果，应用无需关注执行结果。

  

