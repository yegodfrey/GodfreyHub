---
name: document/cn/HMSCore-Guides/android-smalll-icon-0000001050040134
title: 通知小图标
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-smalll-icon-0000001050040134
---

# 通知小图标

推送服务为您提供了两种设置通知栏消息左侧小图标的方法：

* 设置推送服务端API发送[下行消息](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/https-send-api-0000001050986197)中的[icon](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/https-send-api-0000001050986197#ZH-CN_TOPIC_0000001700731289__p1131938152320)字段。图标文件必须存放在应用的/res/raw路径下，例如"icon"的值为"res/raw/ic_launcher"，标识您应用本地的小图标路径为"/res/raw/ic_launcher.jpg"。

  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231103095828.90789302999236732346158935025586:50001231000000:2800:E398CD17358660D42A9E8F0F71C3D5E7B732BD29E32A89BD00C0FC6D8E24B1E5.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")

  消息体示例：

  ```screen
  {
      "validate_only": false,
      "message": {
          "android": {
              "notification": {
                  "title":"消息标题",
                  "body":"消息内容",
                  "icon":"res/raw/ic_launcher",
                  "click_action": {
                      "type": 3
                  }
              }
          },
          "token": ["pushtoken1"]
      }
  }
  ```

* 在应用的"AndroidManifest.xml"文件中添加meta-data元数据，示例代码如下：

  ```xml
  <meta-data
      android:name="com.huawei.messaging.default_notification_icon"
      android:resource="@drawable/ic_push_notification" />
  ```

  meta-data元数据"name"不可变，"resource"指定资源，该资源需要存放在应用的"res/drawable"目录下。

> 说明
>
> * 图标规格请参见[通知图标规范](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/notificattion_spec-0000001052845223#section1626375315119)，规范中的图标格式为SVG，请转为PNG或JPG格式再将其放置到应用的"res/drawable"目录下。
> * 应用存储的图标文件需要有扩展名（目前支持的文件格式为PNG、JPG）。
> * 如果您同时使用上述两种方式设置了图标，系统优先读取icon字段。如果没有设置，系统展示默认的应用图标。

