---
name: document/cn/HMSCore-Guides/android-image-0000001200934359
title: 通知图片
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-image-0000001200934359
---

# 通知图片

推送服务提供了设置通知栏消息右侧小图片的API接口，您可以在消息中携带[image](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/https-send-api-0000001050986197#ZH-CN_TOPIC_0000001700731289__p1532019822319)参数并设置。image参数需要传入使用HTTPS协议的URL，例如：https://example.com/image.png。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231103095828.61402051089144116098172942475615:50001231000000:2800:8B67B4B1CBE22F48FF97DA59C875A4DA7ED56390C100C5122C3E68C48D42DF9B.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")

消息体示例：

```
{
    "validate_only": false,
    "message": {
        "android": {
            "notification": {
                "title":"消息标题",
                "body":"消息内容",
                "image":"your image url",
                "click_action": {
                    "type": 3
                }
            }
        },
        "token": ["pushtoken1"]
    }
}
```

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231103095828.85638590833904679576587378102131:50001231000000:2800:B0784623B53B05ACBF2E48EC7B68B2C46E002EF750081782A0EEB35078879FF6.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)  
* 图片文件须小于512KB，规格建议为40dp x 40dp，弧角大小为8dp。超出建议规格的图片会存在图片压缩或图片显示不全的情况。
* 图片格式建议使用JPG/JPEG/PNG。  
