---
name: document/cn/HMSCore-Guides/identifier-service-obtaining-installreferrer-aidl-0000001050064990
title: 获取转化跟踪参数（AIDL方式）
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/identifier-service-obtaining-installreferrer-aidl-0000001050064990
---

# 获取转化跟踪参数（AIDL方式）

#### 使用场景

广告主App开发者也可直接调用广告服务的AIDL接口获取华为设备上的转化跟踪参数，这种集成方式不需要集成广告服务提供的SDK。AIDL接口获取到的转化跟踪参数与同一台设备上SDK接口获取到的转化跟踪参数相同。  

#### 调用流程

![](https://media:201785910040059752 "点击放大")  

#### 开发步骤

1. 创建接口IPPSChannelInfoService的aidl文件，放置在com.huawei.android.hms.ppskit包路径下，如下图所示：

   <br />

   ![](https://media:201785910040109753 "点击放大")

   <br />

2. 将以下内容复制到aidl文件中。

   <br />

   ```
   package com.huawei.android.hms.ppskit;
   /** 重要：请不要修改此aidl文件的方法顺序 */
   interface IPPSChannelInfoService {
       String getChannelInfo();
   }
   ```

   <br />

3. 创建一个类，实现Android原生的ServiceConnection接口。

   <br />

   1. 实现ServiceConnection的onServiceConnected方法。
   2. 调用Android原生的IPPSChannelInfoService.Stub.asInterface方法获取[IPPSChannelInfoService](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ippschannelinfoservice-0000001050064952)。
   3. 调用[getChannelInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ippschannelinfoservice-0000001050064952#section4936523103714)方法获取转化跟踪参数。

   ```
   private static final String TAG = "InstallReferrerAidlActivity";

   private final class InstallReferrerServiceConnection implements ServiceConnection {
       private InstallReferrerServiceConnection() {
       }
       @Override
       public void onServiceConnected(ComponentName componentName, IBinder iBinder) {
           Log.i(TAG, "onServiceConnected");
           IPPSChannelInfoService service = IPPSChannelInfoService.Stub.asInterface(iBinder);
           if (null != service) {
               try {
                   String json = service.getChannelInfo();
                   parseChannelJson(json);
               } catch (RemoteException e) {
                   Log.e(TAG, "getChannelInfo Exception");
               } finally {
                   getApplicationContext().unbindService(this);
               }
           }
       }
       @Override
       public void onServiceDisconnected(ComponentName componentName) {
           Log.i(TAG, "onServiceDisconnected");
       }
   }
   ```

   <br />

4. 连接转化跟踪参数的AIDL服务。

   <br />

   ```
   private boolean bindService() {
       // 创建一个InstallReferrerServiceConnection实例
       InstallReferrerServiceConnection serviceConnection = new InstallReferrerServiceConnection();
       // 创建一个Intent，Action是“com.huawei.android.hms.CHANNEL_SERVICE”
       Intent intent = new Intent("com.huawei.android.hms.CHANNEL_SERVICE");
       // 设置Intent的包名为”com.huawei.hwid”
       intent.setPackage("com.huawei.hwid");
       // 调用bindService连接转化跟踪参数的AIDL服务
       boolean result = getApplicationContext().bindService(intent,serviceConnection,Context.BIND_AUTO_CREATE);
       Log.i(TAG, "bindService result: " + result);
       return result;
   }
   ```

   <br />

5. 解析返回的数据获取转化跟踪参数。

   <br />

   ```
   private ReferrerDetails parseChannelJson(String channelJson) {
       Log.i(TAG, "parseChannelJson: " + channelJson);
       // 解析返回的JSON格式获取转化跟踪参数
       try {
           JSONObject jsonObject = new JSONObject(channelJson);
           // 跟踪参数
           String channelInfo = jsonObject.optString("channelInfo");
           // 安装时间戳
           long installTimestamp = jsonObject.optLong("installTimestamp", 0);
           // 点击时间戳
           long clickTimestamp = jsonObject.optLong("clickTimestamp", 0);
           ReferrerDetails referrerDetails = new ReferrerDetails(channelInfo, clickTimestamp, installTimestamp);
           updateReferrerDetails(referrerDetails.getInstallReferrer(), clickTimestamp, installTimestamp);
           return referrerDetails;
       } catch (JSONException e) {
           Log.e(TAG, "");
       } 
       return null;
   }
   private void updateReferrerDetails(final String installReferrer, final long clickTimestamp,final long installTimestamp) {
       Log.i(TAG, "installReferrer: " + installReferrer + ", clickTimestamp: " + clickTimestamp + ", installTimestamp: " + installTimestamp);
   }
   ```

   <br />

