---
name: document/cn/system-Guides/faq-0000001050040622
title: FAQ
uri: https://developer.huawei.com/consumer/cn/doc/system-Guides/faq-0000001050040622
---

# FAQ

如果您在下面没有找到需要的问题，请加入[Stack Overflow](https://stackoverflow.com/questions/tagged/huawei-mobile-services?tab=Frequent)社区参与讨论。

## 是否可以在连接阶段不进行token验证？

可以。但是，未经身份验证建立的连接是不安全的，并且可能使设备面临严重的安全漏洞。为避免这种情况，请始终使用身份验证来保护您的连接。

## 能保证不同类型的数据按发送顺序收到吗？

不能。例如：如果发送方发送FILE数据后接着发送BYTES数据，接收方有可能先收到BYTES数据再收到FILE数据。但是，可以保证相同类型的数据按其发送顺序到达。

## 为什么和对方设备在传输的过程中，还能收到该设备的扫描回调onFound/onLost事件？

如果扫描和传输同一时间，可能使用不同技术，例如：使用Wi-Fi传输，使用蓝牙扫描。所以针对扫描的回调事件，您需要进行过滤，对已建立连接设备的扫描回调事件，您要按需进行特殊处理（例如：过滤掉onFound/onLost事件）。

## Nearby Message数据是否加密？

Nearby Message数据是通过HTTPS加密通道进行传输的。

## 信标设备是什么？可以在哪获取到信标设备？

信标是使用基于低功耗蓝牙技术（Bluetooth Low Energy，简称BLE）向周围发送自己"特有ID"的一种物理设备，接收到该ID后，运行在智能手机的应用可以对该信号进行响应。

可以通过登录信标生产厂商的官方网站购买信标设备，例如网站：https://estimote.com/、https://kontakt.io/。

## 开发者是否必须选择数据存储地，开发者配置的beacon数据存储到哪里？

是的，开发者必须选择数据存储地。

您需要选择App对应的数据存储地（德国、新加坡、中国、俄罗斯），Beacon消息存储地与App的数据存储地一致。

## 为什么需要ACCESS_FINE_LOCATION权限？

近距离通信服务需要开启蓝牙，而使用蓝牙需要声明ACCESS_FINE_LOCATION权限。没有此权限，可能扫描不到设备。

## Nearby Message配置页面上一个项目中最多配置多少消息规则？

最多可以配置100条消息规则。

## 当初始化Engine实例传入的参数为非Activity时，如何升级HMS Core？

设备上的HMS Core版本过低时，将会在您调用Nearby Service相关接口时自动升级。当您初始化[DiscoveryEngine](https://developer.huawei.com/consumer/cn/doc/system-References/discoveryengine-0000001050132591)、[TransferEngine](https://developer.huawei.com/consumer/cn/doc/system-References/transferengine-0000001050130658)或[MessageEngine](https://developer.huawei.com/consumer/cn/doc/system-References/messageengine-0000001050130686)实例传入的参数为非Activity时，会返回[HMS Core SDK框架错误码](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/error-code-0000001050045846)（907135003、1212），需要进行如下处理：

```screen
"Java"
Nearby.getMessageEngine(yourContext).put(message, putOption).addOnFailureListener(e -> {
    if (e instanceof ResolvableApiException) {
        ResolvableApiException resolvableApiException = (ResolvableApiException) e;
        try{
             resolvableApiException.startResolutionForResult(yourActivity, 1212);
        }catch(IntentSender.SendIntentException ex){
             Log.e(TAG, ex.getMessage());
        }
     }
});
```

## 在EMUI 9及以下版本，频繁建链导致建链失败，怎么办？

频繁地建链，可能触发EMUI的系统管控，返回错误码：[STATUS_BLUETOOTH_OPERATION_FAILED](https://developer.huawei.com/consumer/cn/doc/system-References/stauscode-0000001050132575#section1061073691614)，请您从业务上避免频繁建链。

## 部分机型由于近距离数据通信服务无法自动打开系统位置开关导致发现失败问题，怎么办？

Nearby Service使用蓝牙扫描周边设备时会尝试打开系统位置信息开关。在部分机型上由于系统管控，无法自动开启位置信息开关，返回错误码：[STATUS_MISSING_SETTING_LOCATION_ON](https://developer.huawei.com/consumer/cn/doc/system-References/stauscode-0000001050132575#section142073310268)，请开发者引导用户手动打开系统位置信息开关。

## 在Android 11上，已安装HMS Core（APK）最新版本，仍然提示升级，如何解决？

Android 11更改了应用查询用户在设备上已安装的其他应用以及与之交互的方式。如果应用的targetSdkVersion是30或者更高版本，并且集成的是Nearby SDK 6.1.0.301之前版本时，将无法访问HMS Core（APK），并且持续提示升级。

您可以通过以下两种方法解决。

* 方法一： 升级SDK至6.1.0.301及以上版本，版本信息请参见[版本更新说明](https://developer.huawei.com/consumer/cn/doc/system-Guides/version-change-history-0000001050040574)。


* 方法二： 如果不升级SDK，需要在"AndroidManifest.xml"中manifest下添加<queries>标签。

  ```screen
  <manifest ...>
      ...
      <queries>
          <intent>
              <action android:name="com.huawei.hms.core.aidlservice" />
          </intent>
      </queries>
      ...
  </manifest>
  ```

  > 说明
  >
  > <queries>标签对工具的要求如下：
  > * Android Studio需升级至3.3或更高版本。
  > * Android Gradle插件需升级至3.3.3、3.4.3、3.5.4、3.6.4、4.0.1或4.1.0及更高版本。

## 调用API时，为什么会抛出NullPointerException或IllegalArgumentException异常？

Nearby Service的全量API会对开发者传入的接口参数进行非空判断，如果为空则抛出NullPointerException或IllegalArgumentException异常，接口调用失败。您需要排查入参是否为空，以保证接口的正常调用。

## 当前无法满足您的需求，您有新需求时应该怎么办？

请选择[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。

