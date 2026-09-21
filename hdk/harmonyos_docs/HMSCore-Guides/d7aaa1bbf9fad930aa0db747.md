---
name: document/cn/HMSCore-Guides/get-channel-0000001074587201
title: 获取图标资源（可选）
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/get-channel-0000001074587201
---

# 获取图标资源（可选）

## 场景介绍

应用使用Account SDK登录，获取登录图标资源。适用场景：应用在AppTouch渠道上架。

您获取到图标和描述后，建议将图标和描述进行本地缓存，无需重复调用[getChannel](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/accountauthservice-0000001050199395#section1512412401209)接口。建议您在本地预置[华为帐号图标](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/dev-specifications-0000001050048916)，当调用[getChannel](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/accountauthservice-0000001050199395#section1512412401209)接口失败时，您可使用预置的华为帐号图标显示在登录页面上。

## 支持的设备

|设备类型|OS版本|HMS Core（APK）版本|
|:----|:-------------------------|:--------------|
|手机、平板|EMUI 3.0及以上、Android 4.4及以上|4.0.0.300及以上|

## 业务流程

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230626155609.51700193915672297915127148489034:50001231000000:2800:F09508630012D88D8973EBE5B0BAB8D508EBA447D09B15260C26F80C2D5411F4.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

整体流程：

1. 应用客户端向华为帐号SDK发送请求，获取图标资源。
2. 华为帐号SDK向HMS Core（APK）发送请求，获取图标资源。
3. HMS Core（APK）向华为帐号服务器发送请求，获取图标资源。
4. 华为帐号服务器返回图标资源信息给HMS Core（APK）。
5. HMS Core（APK）返回图标资源信息给华为帐号SDK。
6. 华为帐号SDK返回图标资源信息给应用客户端。

## 开发步骤

获取图标资源功能涉及应用的关键开发步骤如下：

1. 调用[AccountAuthParamsHelper](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/accountauthparamshelper-0000001050438849)的默认构造方法配置授权参数。

   ```screen
   "Java"
   AccountAuthParams authParams = new AccountAuthParamsHelper(AccountAuthParams.DEFAULT_AUTH_REQUEST_PARAM).createParams();
   ```

   ```javascript
   "Kotlin"
   val authParams : AccountAuthParams = AccountAuthParamsHelper(AccountAuthParams.DEFAULT_AUTH_REQUEST_PARAM).createParams()
   ```

2. 调用[AccountAuthManager](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hms-support-account-accountauthmanager-0000001050193690)的[getService](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hms-support-account-accountauthmanager-0000001050193690#section1354442711181)方法初始化[AccountAuthService](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/accountauthservice-0000001050199395)对象。

   ```screen
   "Java"
   AccountAuthService service = AccountAuthManager.getService(MainActivity.this, authParams);
   ```

   ```javascript
   "Kotlin"
   val service : AccountAuthService = AccountAuthManager.getService(this@MainActivity, authParams)
   ```

3. 调用[AccountAuthService.getChannel](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/accountauthservice-0000001050199395#section1512412401209)方法发起获取图标资源请求。

   ```screen
   "Java"
   Task<AccountIcon> task = service.getChannel();
   ```

   ```javascript
   "Kotlin"
   val task : Task<AccountIcon> = service.getChannel()
   ```

4. 处理获取图标资源结果。

   如果获取成功，可获取到图标信息。

   ```screen
   "Java"
   task.addOnSuccessListener(new OnSuccessListener<AccountIcon>(){ 
       @Override 
       public void onSuccess(AccountIcon accountIcon) {
           //获取图标信息
           Log.i(TAG, "desc:" + accountIcon.getDescription());
       } 
   });
   ```

   ```javascript
   "Kotlin"
   task.addOnSuccessListener { accountIcon -> 
       //获取图标信息
       Log.i(TAG, "displayName:" + accountIcon.getDescription)
   }
   ```

   如果获取失败，您可以使用预置的华为帐号图标显示在登录页面上。

   ```javascript
   "Java"
   task.addOnFailureListener(new OnFailureListener() { 
        @Override 
        public void onFailure(Exception e) { 
            //获取失败
            if (e instanceof ApiException) { 
                ApiException apiException = (ApiException) e; 
                Log.i(TAG, "getChannel failed status:" + apiException.getStatusCode()); 
            } 
        } 
    });
   ```

   ```screen
   "Kotlin"
   task.addOnFailureListener { e -> 
       //获取失败
       if (e is ApiException) { 
           Log.i(TAG, "getChannelfailed status:" + e.statusCode) 
       } 
   }
   ```

