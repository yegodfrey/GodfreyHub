---
name: document/cn/HMSCore-Guides/configuring-notification-messages-0000001134381639
title: 设置通知栏消息显示开关
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/configuring-notification-messages-0000001134381639
---

# 设置通知栏消息显示开关

#### 场景介绍

通知栏消息是通知中心下拉列表呈现的即时消息。如果您想控制应用是否允许显示通知栏消息，可以调用[turnOnPush](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hmsmessaging-0000001050255650#section867613695918)或者[turnOffPush](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hmsmessaging-0000001050255650#section943612533595)方法。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240222164209.05626850885303239213044990277911:50001231000000:2800:D2BE209B63332E61BE4CB44203CEFD48DF3F20EE4529AA9F704CC1AD3A4213D1.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)  
* 默认允许显示通知栏消息。
* 该功能要求华为设备系统不低于EMUI 9.1.0。  

#### 开发步骤

设置拒绝接收通知栏消息示例：  

```
"Java"
// 设置不显示通知栏消息
HmsMessaging.getInstance(context).turnOffPush().addOnCompleteListener(new OnCompleteListener<Void>() {
    @Override
    public void onComplete(Task<Void> task) {
        // 获取结果
        if (task.isSuccessful()) {
            Log.i(TAG, "turnOffPush Complete");
        } else {
            Log.e(TAG, "turnOffPush failed: ret=" + task.getException().getMessage());
        }
    }
});
```

```
"Kotlin"
// 设置不显示通知栏消息
HmsMessaging.getInstance(this).turnOffPush().addOnCompleteListener { task ->
    // 获取结果
    if (task.isSuccessful) {       
        Log.i(TAG, "turnOffPush successfully.")  
    } else {        
        Log.i(TAG, "turnOffPush failed.") 
    }
}
```

设置允许接收通知栏消息示例：  

```
"Java"
// 设置显示通知栏消息
HmsMessaging.getInstance(context).turnOnPush().addOnCompleteListener(new OnCompleteListener<Void>() {
    @Override
    public void onComplete(Task<Void> task) {
        // 获取结果
        if (task.isSuccessful()) {
            Log.i(TAG, "turnOnPush Complete");
        } else {
            Log.e(TAG, "turnOnPush failed: ret=" + task.getException().getMessage());
        }
    }
});
```

```
"Kotlin"
// 设置显示通知栏消息
HmsMessaging.getInstance(this).turnOnPush().addOnCompleteListener { task ->
    // 获取结果
    if (task.isSuccessful) {       
        Log.i(TAG, "turnOnPush successfully.")  
    } else {        
        Log.i(TAG, "turnOnPush failed.") 
    }
}
```

