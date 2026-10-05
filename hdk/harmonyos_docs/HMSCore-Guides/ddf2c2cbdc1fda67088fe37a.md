---
name: document/cn/HMSCore-Guides/authotize-to-read-sms-0000001061481826
title: 授权读取短信验证码（可选）
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/authotize-to-read-sms-0000001061481826
source: portal
---

# 授权读取短信验证码（可选）

#### 场景介绍

如果您的应用需要用户输入手机号并通过短信验证码核实用户身份，可以通过集成[ReadSmsManager](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-support-sms-readsmsmanager-0000001050050553)服务，使您的应用在无需申请短信读取权限的前提下，通过用户授权方式来自动获取针对您应用的短信验证码。用户在验证过程中可以省去手动输入短信验证码的操作，优化用户体验。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220518105457.61857149254148593658097376628534:50001231000000:2800:1B659346684C6416A90B57250E2C3EC138D31ED7434216F61EE542B7EDF8D483.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### 支持的设备

设备类型 | OS版本 | HMS Core（APK）版本  
---|---|---  
手机、平板 | EMUI 3.0及以上、Android 4.4及以上 | 4.0.0.300及以上  
  
#### 业务流程

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220518105457.98863590934634606631436779999473:50001231000000:2800:3C32A4E519C8119DD733D349AD2A667C6582A233909890A88837E3E3780980D6.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

整体流程：

      1. 用户在应用客户端需要验证手机号的界面中输入手机号，并请求获取验证码。
      2. 应用客户端调用[ReadSmsManager.startConsent(Activity activity, String phoneNumber)](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-support-sms-readsmsmanager-0000001050050553#section1866019915120)方法向帐号SDK请求开启读取短信服务。
      3. 帐号SDK将请求发送到HMS Core（APK）。
      4. HMS Core（APK）开启读取短信服务，并返回结果给帐号SDK。
      5. 帐号SDK向应用客户端返回开启读取短信服务的结果。
      6. 应用客户端将用户手机号传递给应用服务器。
      7. 应用客户端注册广播接收器。
      8. 应用服务器根据手机号生成短信验证码，并发送短信到用户手机。
      9. HMS Core（APK）将符合[规则](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-support-sms-readsmsmanager-0000001050050553#ZH-CN_TOPIC_0000001050050553__p7946195017185)的短信以弹框形式展现给用户。
      10. 用户点击允许。
      11. HMS Core（APK）将符合[规则](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-support-sms-readsmsmanager-0000001050050553#ZH-CN_TOPIC_0000001050050553__p7946195017185)的短信通过定向广播的方式发送给应用客户端。
      12. 应用客户端收到HMS Core（APK）发送的定向内容，解析出短信验证码，并在应用界面中展示读取到的验证码。
      13. 用户确认验证码无误后，发送验证码请求。
      14. 应用客户端将用户发送的验证码发送给应用服务器验证。
      15. 应用服务器确认验证码无误后，向应用客户端返回验证结果。

#### 注意事项

      * HMS Core（APK）需要用户授予移动设备短信读取权限，应用客户端已不需要申请短信的接收和读取权限。
      * 应用调用ReadSmsManager.startConsent接口时，HMS Core（APK）会将短信以弹框形式展现给用户。

#### 开发步骤

自动读取短信验证码功能涉及应用的关键开发步骤如下：

      1. 应用调用[ReadSmsManager.startConsent(Activity activity, String phoneNumber)](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-support-sms-readsmsmanager-0000001050050553#section1866019915120)方法请求开启短信读取服务。
             
             “Java”
             Task<Void> task = ReadSmsManager.startConsent(MainActivity.this, phoneNumber);
             task.addOnCompleteListener(new OnCompleteListener<Void>() {
                 @Override
                 public void onComplete(Task<Void> task) {
                     if (task.isSuccessful()) {
                         // 开启服务成功，可以继续后续流程
                         doSomethingWhenTaskSuccess();
                     }
                 }
             });
             
             “Kotlin”
             val task = ReadSmsManager.startConsent(this@MainActivity, phoneNumber)
             task.addOnCompleteListener { it ->
                 if (it.isSuccessful) {
                     // 开启服务成功，可以继续后续流程
                     doSomethingWhenTaskSuccess()
                 }
             }

      2. 应用客户端将手机号发送给应用服务器，应用服务器生成一条验证消息，并通过SMS将其发送到用户的手机号。此部分由您自行完成。
      3. 当用户的设备接收到验证消息时，HMS Core（APK）会显式地向应用客户端发送广播，intent里面包含消息的文本。应用客户端可以使用广播接收此验证消息，从消息中获得验证码。
             
             “Java”
             public class MySMSBroadcastReceiver extends BroadcastReceiver {
                 @Override
                 public void onReceive(Context context, Intent intent) {
                     Bundle bundle = intent.getExtras();
             	if (bundle != null && ReadSmsConstant.READ_SMS_BROADCAST_ACTION.equals(intent.getAction())) {
             	    Status status = bundle.getParcelable(ReadSmsConstant.EXTRA_STATUS);
             	    if (status.getStatusCode() == ReadSmsConstant.TIMEOUT) {
             	        // 服务已经超时，未读取到符合要求的短信，服务关闭
             	        doSomethingWhenTimeOut();
                         } else if (status.getStatusCode() == ReadSmsConstant.FAIL) {
             		// 用户不同意该应用读取短信，未读取到符合要求的短信，服务关闭
             	        doSomethingWhenTimeOut();
             	    } else if (status.getStatusCode() == ReadSmsConstant.SUCCESS) {
             	        if (bundle.containsKey(ReadSmsConstant.EXTRA_SMS_MESSAGE)) {
             		    // 服务读取到了符合要求的短信，服务关闭
             		    doSomethingWhenGetMessage(bundle.getString(ReadSmsConstant.EXTRA_SMS_MESSAGE));
             		}
             	    }
             	}
                 }
             }
             
             “Kotlin”
             class MySMSBroadcastReceiver : BroadcastReceiver() {
                 override fun onReceive(context: Context?, intent: Intent?) {
                     intent?.let { it ->
             	    val bundle = it.extras
             	    bundle?.let { itBundle ->
             	        if (ReadSmsConstant.READ_SMS_BROADCAST_ACTION == it.action) {
             	            val status : Status? = itBundle.getParcelable(ReadSmsConstant.EXTRA_STATUS)
             	            if (status?.statusCode == ReadSmsConstant.TIMEOUT) {
             	                // 服务已经超时，未读取到符合要求的短信，服务关闭
             	                doSomethingWhenTimeOut()
             	            }else if (status?.statusCode == ReadSmsConstant. FAIL) {
             	                // 用户不同意该应用读取短信，未读取到符合要求的短信，服务关闭
             	                doSomethingWhenTimeOut()
             	            }else if (status?.statusCode == ReadSmsConstant.SUCCESS){
             	                if (bundle.containsKey(ReadSmsConstant.EXTRA_SMS_MESSAGE)) {
                                         // 服务读取到了符合要求的短信，服务关闭
             	                    doSomethingWhenGetMessage(bundle.getString(ReadSmsConstant.EXTRA_SMS_MESSAGE))
             	                }
             	            }
                             }
             	    }
                     }
                 }
             }
