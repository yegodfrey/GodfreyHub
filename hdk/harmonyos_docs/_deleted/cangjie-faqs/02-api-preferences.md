---
name: cangjie-faqs/02-api-preferences
title: ohos.data.preferences（用户首选项）里面的数据，仓颉和ArkTS是否互通
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/02-api-preferences
nodePath: FAQ / HarmonyOS API / ohos.data.preferences（用户首选项）里面的数据，仓颉和ArkTS是否互通
---

# ohos.data.preferences（用户首选项）里面的数据，仓颉和ArkTS是否互通

用户首选项(Preferences)为应用提供Key-Value键值型的数据处理能力，支持应用持久化轻量级数据，并对其修改和查询。当用户有轻量级的键值型数据需要存储时，可以采用Preferences来进行存储。一般适用于保存用户的个性化设置，例如字体大小、是否开启夜间模式等。

用户程序通过ArkTS/仓颉接口调用用户首选项读写对应的数据文件。开发者可以将用户首选项持久化文件的内容加载到Preferences实例，每个文件唯一对应到一个Preferences实例，系统会通过静态容器将该实例存储在内存中，直到主动从内存中移除该实例或删除该文件。

#### 存储模式说明

  * **ArkTS接口** ：



API Version 18之前，ArkTS API仅支持XML存储格式，从API Version 18及之后，ArkTS API支持XML、GSKV双模存储格式。默认使用XML接口格式进行存储。

  * **C/C++接口** ：



API Version 18之前，C API仅支持GSKV存储格式，从API Version 18及之后，C API支持XML、GSKV双模存储格式。

  * **仓颉接口** ：



仓颉API当前仅支持XML存储格式，GSKV存储格式待支持。

#### XML存储

XML存储指的是数据会以XML的形式存储到文件中，该模式的优点是通用性强，支持跨平台。当选择该模式时，首选项对数据的操作主要发生在内存中，开发者可以在需要的时候再调用flush接口进行数据持久化。针对单进程、小数据量场景，推荐使用该存储模式。

#### GSKV存储

GSKV是从API version 18起提供的一种存储模式，该模式的优点是支持多进程并发读写。当选择该模式时，首选项对数据的操作会实时落盘。针对多进程并发场景，推荐使用该存储模式。

#### 仓颉和ArkTS数据互通情况说明

由于GSKV、XML两种存储格式间不互通，故当且仅当ArkTS与仓颉为同一个Preferences实例，且均使用XML存储格式时两种语言Preferences数据互通。
