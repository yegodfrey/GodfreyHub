---
name: document/cn/HiCar-References/app-metadata-message-0000002012277025
title: 消息元数据
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/app-metadata-message-0000002012277025
---

# 消息元数据

## 场景说明

车机连接HiCar后，在融合桌面的形态下，当HiCar产生消息时，会主动通过消息元数据的方式告知车机，车机获取后以适当形式进行显示。该元数据无需车机提前请求。

当前消息主要分为：

* 通知消息：主要包括手机电量不足、手机过热等提醒类消息。
* 弹框消息：主要包括各类元数据授权确认弹框。

## DataType

531

## 接口版本

1.0

## 接口定义

|**参数名**|必选/可选|**类型**|**说明**|
|:--------------|:----|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|MessageData|必选|object|HiCar下发的消息元数据，详见[表3](https://developer.huawei.com/consumer/cn/doc/HiCar-References/app-metadata-navigation-0000001382774776#ZH-CN_TOPIC_0000001382774776__zh-cn_topic_0000001390876029_table15479123765616)。|
|MessageDataResp|必选|object|车机响应信息。详见[表4](#ZH-CN_TOPIC_0000002012277025__zh-cn_topic_0000001506457032_table16719145133716)。|
[**表1**消息元数据]

|**参数名**|必选/可选|**类型**|**说明**|
|:---------|:----|:-----|:---------------------------------------------------------------------------------------------------|
|Status|必选|int|消息状态： * 0：创建和更新 * 1：移除|
|Type|必选|int|消息类别： * 1：通知消息 * 2：弹框消息|
|Id|必选|int|消息id，唯一标识。|
|Title|必选|string|消息的名称。|
|AppIcon|可选|byte[]|应用的图标。|
|AppPackage|必选|string|应用的包名。|
|InfoImage|可选|byte[]|消息图片。|
|MainText|必选|string|通知时：主信息文本。 弹框时：标题。|
|SubText|必选|string|通知时：辅助信息文本。 弹框时：弹框文本内容。|
|OptText|可选|string|可选文本。|
|Button1|可选|object|左按钮信息，仅弹框消息涉及。详见[表3](#ZH-CN_TOPIC_0000002012277025__zh-cn_topic_0000001506457032_table102366973216)。|
|Button2|可选|object|右按钮信息，仅弹框消息涉及。详见[表3](#ZH-CN_TOPIC_0000002012277025__zh-cn_topic_0000001506457032_table102366973216)。|
|Button3|可选|object|复选框，仅弹框消息涉及。详见[表3](#ZH-CN_TOPIC_0000002012277025__zh-cn_topic_0000001506457032_table102366973216)。|
[**表2**MessageData]

|**参数名**|必选/可选|**类型**|**说明**|
|:------|:----|:-----|:-------------------------------------------------------------------------------|
|BtnText|必选|string|按钮文本内容。|
|BtnType|必选|string|按钮类型： * "emphasize" ： 表示确认类型选项，比如确定。 * "normal" ：表示非默认选项，比如取消。 * "check" ：表示复选框。|
[**表3**ButtonX]

|**参数名**|必选/可选|**类型**|**说明**|
|:-------|:----|:------|:-------------------------------------|
|RespCode|必选|int|响应结果： * 100000：接收成功 * 100001：接收失败|
|Id|必选|int|消息id。|
|Type|必选|int|消息类别 ： * 1：通知消息 * 2：弹框消息|
|Button1|可选|boolean|是否点击左按钮，仅弹框消息涉及： * true：点击 * false：未点击|
|Button2|可选|boolean|是否点击右按钮，仅弹框消息涉及： * true：点击 * false：未点击|
|Button3|可选|boolean|是否选中复选框，仅弹框消息涉及： * true：选中 * false：未选中|
[**表4**MessageDataResp]

## 接口示例

当有消息发生时，HiCar App向车机发送消息元数据，通知类型消息数据示例如下所示：

```screen
{
    "MessageData" : {
        "Status" : 0,
        "Type" : 1,
        "Id" : 5432,
        "Title" : "消息",
        "AppIcon" : [],
        "AppPackage" : "com.huawei.hicar",
        "InfoImage" : [],
        "MainText" : "10%",
        "SubText" : "您的手机电量低，请及时充电！",
        "OptText" : "",
    }
}
```

弹框类型消息数据示例如下所示：

```screen
{
    "MessageData" : {
        "Status" : 0,
        "Type" : 2,
        "Id" : 1020,
        "Title" : "消息",
        "AppIcon" : [],
        "AppPackage" : "com.huawei.hicar",
        "InfoImage" : [],
        "MainText" : "是否允许访问通话数据？"，
        "SubText" : "允许后，连接中的设备可使用手机通话数据。",
        "OptText" : "",
        "Button1" : {
            "BtnText" : "确认",
            "BtnType" : "emphasize",
        }
        "Button2" : {
            "BtnText" : "取消",
            "BtnType" : "normal",
        }
        "Button3" : {
            "BtnText" : "不再提示",
            "BtnType" : "check",
        }
    }
}
```

车机收到消息元数据处理后，向HiCar App发送响应信息，弹框消息的响应信息示例如下所示：

```screen
{
    "MessageDataResp" : {
        "RespCode" : 100000,
        "Id" : 1020,
        "Type" : 2,
        "Button1" : true,
        "Button2" : false,
        "Button3" : true,
    }
}
```

