---
name: document/cn/HMSCore-Guides/android-isound-0000001142717056
title: 自定义铃声
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-isound-0000001142717056
---

# 自定义铃声

推送服务为您提供了两种设置自定义铃声的方法来丰富您的通知栏消息样式。

* 首次给应用推送[服务与通讯](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001652651372__p17490182512)消息时携带[sound](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/https-send-api-0000001050986197#ZH-CN_TOPIC_0000001700731289__p123191811234)字段且[default_sound](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/https-send-api-0000001050986197#ZH-CN_TOPIC_0000001700731289__p9319489234)值设置为false。  
  消息体示例：

  ```
  {
      "validate_only": false,
      "message": {
          "android": {
              "notification": {
                  "title":"test title",
                  "body":"test body",
                  "sound":"/raw/shake",
                  "default_sound":false,
                  "click_action": {
                      "type": 3
                  }
              }
          },
          "token": ["your push token"]
      }
  }
  ```

  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231103095824.38413757003439743477505176939496:50001231000000:2800:8931A5B7A570219C85600311BB3593E508893A607B2AC44E1BCF744EEA048685.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)  
  * 通知渠道一旦创建后，推送消息的铃声为创建该渠道时的铃声，即使您sound字段使用其他铃声也无效。
  * 铃声文件必须存放在应用的/res/raw路径下，例如"/res/raw/shake.mp3"，对应sound值参数为"/raw/shake"，支持的格式包括MP3、WAV、MPEG等。

* 应用[自定义通知渠道](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-custom-chan-0000001050040122)时设置铃声。  
  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231103095824.80387299148395586407626765937339:50001231000000:2800:AA2B2DF99473B92632DB47A368EE9C638EA4D8553B1A7477454014F8548F0A0B.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)  
[数据处理位置](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-config-agc-0000001050170137#section3380135485)为中国区的应用不支持自定义通知渠道，不能通过该方法设置自定义铃声。  
