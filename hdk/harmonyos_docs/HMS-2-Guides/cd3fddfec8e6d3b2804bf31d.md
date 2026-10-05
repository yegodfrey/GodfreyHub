---
name: document/cn/HMS-2-Guides/hmssdk_jointOper_appProFile
title: 配置工程文件（废弃）
uri: https://developer.huawei.com/consumer/cn/doc/HMS-2-Guides/hmssdk_jointOper_appProFile
source: portal
---

在正式开发前需要在Manifest文件和混淆脚本配置文件中配置HMS SDK信息。

# 1. 配置Manifest文件  


1、在application节点下增加以下meta-data节点，并在其中配置应用ID。应用ID查询可参见[查询应用ID](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_queryappid)。

说明：

如果Manifest文件中没有application节点请自行创建，此为Android通用操作，本文不详细介绍。
      
      1. <meta-data   
        2.     android:name="com.huawei.hms.client.appid"   
        3.     <!-- value的值“xxx”用实际申请的应用ID替换，来源于应用详情。-->   
        4.     android:value="appid=xxx">   
        5. </meta-data>
    
    

2、在application节点下增加activity。  


● BridgeActivity定义了HMS-SDK中一些跳转所需要的透明页面。
      
      1. <activity   
        2.     android:name="com.huawei.hms.activity.BridgeActivity"   
        3.     android:configChanges="orientation|locale|screenSize|layoutDirection|fontScale"   
        4.     android:excludeFromRecents="true"   
        5.     android:exported="false"   
        6.     android:hardwareAccelerated="true"   
        7.     android:theme="@android:style/Theme.Translucent" >   
        8.     <meta-data   
        9.         android:name="hwc-theme"   
        10.         android:value="androidhwext:style/Theme.Emui.Translucent" />   
        11. </activity>
    
    

● AppUpdateActivity和PackageInstallActivity是应用自升级接口所需要使用的页面。
      
      1. <activity 
        2.     android:name="com.huawei.updatesdk.service.otaupdate.AppUpdateActivity" 
        3.     android:configChanges="orientation|screenSize" 
        4.     android:exported="false" 
        5.     android:theme="@style/upsdkDlDialog" > 
        6.     <meta-data 
        7.         android:name="hwc-theme" 
        8.         android:value="androidhwext:style/Theme.Emui.Translucent.NoTitleBar" /> 
        9. </activity> 
        10. <activity 
        11.     android:name="com.huawei.updatesdk.support.pm.PackageInstallerActivity" 
        12.     android:configChanges="orientation|keyboardHidden|screenSize" 
        13.     android:exported="false" 
        14.     android:theme="@style/upsdkDlDialog" > 
        15.     <meta-data 
        16.         android:name="hwc-theme" 
        17.         android:value="androidhwext:style/Theme.Emui.Translucent" /> 
        18. </activity>
    
    

● HMSPMSPayAgentActivity定义了接入支付模块时需要使用的页面。
      
      1. <activity  
        2.     android:name="com.huawei.android.hms.agent.pay.HMSPMSPayAgentActivity"  
        3.     android:exported="false" 
        4.     android:theme="@android:style/Theme.Translucent"  
        5.     android:hardwareAccelerated="true"  
        6.     android:excludeFromRecents="true" 
        7.     android:configChanges="orientation|locale|screenSize|layoutDirection|fontScale"> 
        8.     <meta-data  
        9.         android:name="hwc-theme"  
        10.         android:value="androidhwext:style/Theme.Emui.Translucent"/>  
        11. </activity>
    
    

4、在application节点下增加UpdateProvider，用于HMS-SDK引导升级HMS，提供给系统安装器读取升级文件。
      
      1. <provider   
        2.     android:name="com.huawei.hms.update.provider.UpdateProvider"   
        3.     <!--“xxx.xxx.xxx”用实际的应用包名替换-->   
        4.     android:authorities="xxx.xxx.xxx.hms.update.provider"   
        5.     android:exported="false"   
        6.     android:grantUriPermissions="true" >   
        7. </provider>
    
    

5、在application节点下增加UpdateSdkFileProvider，用于应用自升级。

警告：

如果应用使用了checkUpdate接口，则必须配置UpdateSdkFileProvider。
      
      1. <provider 
        2.     android:name="com.huawei.updatesdk.fileprovider.UpdateSdkFileProvider" 
        3.     <!--“xxx.xxx.xxx”用实际的应用包名替换--> 
        4.     android:authorities="xxx.xxx.xxx.updateSdk.fileProvider" 
        5.     android:exported="false" 
        6.     android:grantUriPermissions="true"> 
        7. </provider>
    
    

5、在application节点下增加Service，用于应用自升级。
      
      1. <!-- 应用下载服务 --> 
        2. <service android:name="com.huawei.updatesdk.service.deamon.download.DownloadService" 
        3.     android:exported="false"/>
    
    

6、在manifest节点下增加所需权限。
      
      1. <!--HMS-SDK引导升级HMS功能，访问OTA服务器需要网络权限-->     
        2. <uses-permission android:name="android.permission.INTERNET" />     
        3. <!--HMS-SDK引导升级HMS功能，保存下载的升级包需要SD卡写权限-->     
        4. <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />     
        5. <!--检测网络状态-->   
        6. <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>   
        7. <!--检测wifi状态-->   
        8. <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>   
        9. <!--为了获取用户手机的IMEI，用来唯一的标识用户。-->   
        10. <uses-permission android:name="android.permission.READ_PHONE_STATE"/>  
        11. <!-- 从应用市场9.0.0版本开始，如果要从应用市场获取服务地，需配置此权限 --> 
        12. <uses-permission android:name="com.huawei.appmarket.service.commondata.permission.GET_COMMON_DATA"/> 
        13. <!--应用编译配置的targetSdkVersion>=26，请务必添加以下权限 --> 
        14. <uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />
    
    

7、在application节点下注册android组件。

● 解决HMS Core升级问题的透明界面
      
      1. <activity 
        2.     android:name="com.huawei.android.hms.agent.common.HMSAgentActivity" 
        3.     android:configChanges="orientation|locale|screenSize|layoutDirection|fontScale" 
        4.     android:excludeFromRecents="true" 
        5.     android:exported="false" 
        6.     android:hardwareAccelerated="true" 
        7.     android:theme="@android:style/Theme.Translucent" > 
        8.     <meta-data 
        9.         android:name="hwc-theme" 
        10.         android:value="androidhwext:style/Theme.Emui.Translucent" /> 
        11. </activity>
    
    

● 处理拉起支付界面，并处理支付结果的透明界面
      
      1. <activity 
        2.     android:name="com.huawei.android.hms.agent.pay.HMSPayAgentActivity" 
        3.     android:configChanges="orientation|locale|screenSize|layoutDirection|fontScale" 
        4.     android:excludeFromRecents="true" 
        5.     android:exported="false" 
        6.     android:hardwareAccelerated="true" 
        7.     android:theme="@android:style/Theme.Translucent" > 
        8.     <meta-data 
        9.         android:name="hwc-theme" 
        10.         android:value="androidhwext:style/Theme.Emui.Translucent" /> 
        11. </activity>
    
    

● 处理拉起帐号登录界面，并处理登录结果的透明界面
      
      1. <activity 
        2.     android:name="com.huawei.android.hms.agent.hwid.HMSSignInAgentActivity" 
        3.     android:configChanges="orientation|locale|screenSize|layoutDirection|fontScale" 
        4.     android:excludeFromRecents="true" 
        5.     android:exported="false" 
        6.     android:hardwareAccelerated="true" 
        7.     android:theme="@android:style/Theme.Translucent" > 
        8.     <meta-data 
        9.         android:name="hwc-theme" 
        10.         android:value="androidhwext:style/Theme.Emui.Translucent" /> 
        11. </activity>
    
    

8、配置HMS SDK版本。

满足以下条件之一的应用，必须执行本步骤。不满足则请勿执行，否则审核时将被驳回。  


●在[申请帐号服务](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_prepare_apply_account_service)时，启用了unionId。

● 需要使用[getPurchaseInfo](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_jointOper_api_reference_c21)接口。

在application节点下增加meta-data节点，其中"com.huawei.hms.version"信息，配置后将强制升级HMS SDK至配置的版本。
      
      1. <meta-data       
        2.   android:name="com.huawei.hms.version"       
        3.   android:value="X.X.X">   
        4. </meta-data>
    
    

X.X.X配置为HMS SDK的主版本号，例如2.6.3。

# 2. 配置混淆脚本

开发者编译APK前需要配置不要混淆HMS SDK，避免功能异常。

1、打开Android工程的混淆配置文件。

2、加入排除HMS SDK的混淆配置。
      
      1. -ignorewarnings 
        2. -keepattributes *Annotation* 
        3. -keepattributes Exceptions 
        4. -keepattributes InnerClasses 
        5. -keepattributes Signature 
        6. -keepattributes SourceFile,LineNumberTable 
        7. -keep class com.hianalytics.android.**{*;} 
        8. -keep class com.huawei.updatesdk.**{*;} 
        9. -keep class com.huawei.hms.**{*;} 
        10. -keep class com.huawei.android.hms.agent.**{*;}
    
    

3、如果开发者使用了AndResGuard，需要在混淆配置文件中加入AndResGuard白名单。
      
      1. "R.string.hms*", 
        2.          "R.string.connect_server_fail_prompt_toast", 
        3.          "R.string.getting_message_fail_prompt_toast", 
        4.          "R.string.no_available_network_prompt_toast", 
        5.          "R.string.third_app_*", 
        6.          "R.string.upsdk_*", 
        7.          "R.layout.hms*", 
        8.          "R.layout.upsdk_*", 
        9.          "R.drawable.upsdk*", 
        10.          "R.color.upsdk*", 
        11.          "R.dimen.upsdk*", 
        12.          "R.style.upsdk*"
    
    

# 3. 配置签名证书

1、请确认已提前创建应用的签名证书，并生成签名证书的指纹，相关操作请参见[配置签名证书指纹](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_prepare_apply_certificate)。

2、确保开发环境在运行和编译应用程序时使用的签名证书与华为开发者联盟上配置的签名证书指纹一致，否则连接HMS Core将失败，错误码为6003或907135702。
