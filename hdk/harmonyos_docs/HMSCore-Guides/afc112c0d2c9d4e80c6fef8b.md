---
name: document/cn/HMSCore-Guides/harmonyos-js-automatic-event-collection-0000001204716899
title: 自动采集事件
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/harmonyos-js-automatic-event-collection-0000001204716899
source: portal
---

# 自动采集事件

自动采集事件无需埋点，只需开启采集系统事件的开关（初始化时自动开启），即可实现此类事件的自动采集。

自动采集事件的事件ID是分析服务的保留字段，不能被复用。

#### 事件ID列表

事件ID | 说明  
---|---  
LAUNCHAPP | 用户打开应用时，上报此事件。  
UPDATEAPP | 当应用更新到新版本并再次启动时触发。  
APPFIRSTOPEN | 当用户安装或重新安装应用后首次启动时触发。此事件在用户首次使用应用时触发，不会在用户将应用下载到设备时触发。通过此事件可以了解启动类型、安装渠道及时间。  
ENTERSCREEN | 页面进入前台时触发此事件。  
EXITSCREEN | 页面进入后台时触发此事件。  
STOPANALYTICSCOLLECTION | 用户关闭采集事件时，上报此事件。 说明：  此事件为开发者设置[setAnalyticsEnabled](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/harmonyos-js-api-hianalytics-instance-0000001204763599#section113486277512)为false时或者[setRestrictionEnabled](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/harmonyos-js-api-hianalytics-instance-0000001204763599#section1448813311134)为true时SDK触发上报。该事件不会用于洞察报告。  
  
#### 事件参数列表

      * LAUNCHAPP

用户打开应用时，上报此事件。

参数ID | 参数名称 | 参数类型 | 可选/必选 | 参数描述  
---|---|---|---|---  
$PrePageId | 前一个页面ID | string | 可选 | 前一个页面ID。  
$CurrPageId | 当前页面ID | string | 可选 | 当前页面ID。  
  
      * UPDATEAPP

当应用更新到新版本并再次启动时触发。

参数ID | 参数名称 | 参数类型 | 可选/必选 | 参数描述  
---|---|---|---|---  
$PrevVersion | 旧版本号 | string | 必选 | 升级前的版本号。  
$CurrVersion | 当前版本号 | string | 必选 | 升级后的版本号。  
$PrePageId | 前一个页面ID | string | 可选 | 前一个页面ID。  
$CurrPageId | 当前页面ID | string | 可选 | 当前页面ID。  
  
      * APPFIRSTOPEN

当用户安装或重新安装应用后首次启动时触发。此事件在用户首次使用应用时触发，不会在用户将应用下载到设备时触发。

参数ID | 参数名称 | 参数类型 | 可选/必选 | 参数描述  
---|---|---|---|---  
$StartType | 启动方式 | string | 必选 | 打开应用的方式，如：通过桌面点击启动。  
$PrePageId | 前一个页面ID | string | 可选 | 前一个页面ID。  
$CurrPageId | 当前页面ID | string | 可选 | 当前页面ID。  
  
      * ENTERSCREEN

页面进入前台时触发此事件。

参数ID | 参数名称 | 参数类型 | 可选/必选 | 参数描述  
---|---|---|---|---  
$PrevActivityName | 来源页面名称 | string | 必选 | 来源页面名称。  
$PrevActivityClass | 来源页面类名 | string | 必选 | 来源页面类名。  
$PrevActivityId | 来源页面ID | string | 必选 | 来源页面ID。  
$CurActivityName | 当前页面名称 | string | 必选 | 当前页面名称。  
$CurActivityClass | 当前页面类名 | string | 必选 | 当前页面类名。  
$CurActivityId | 当前页面ID | string | 必选 | 当前页面ID。  
$PrePageId | 前一个页面ID | string | 可选 | 前一个页面ID。  
$CurrPageId | 当前页面ID | string | 可选 | 当前页面ID。  
  
      * EXITSCREEN

页面进入后台时触发此事件。

参数ID | 参数名称 | 参数类型 | 可选/必选 | 参数描述  
---|---|---|---|---  
$CurActivityName | 当前页面名称 | string | 必选 | 当前页面名称。  
$CurActivityClass | 当前页面类名 | string | 必选 | 当前页面类名。  
$CurActivityId | 当前页面ID | string | 必选 | 当前页面ID。  
$Duration | 停留时长 | string | 必选 | 停留时长，单位为毫秒。  
$PrePageId | 前一个页面ID | string | 可选 | 前一个页面ID。  
$CurrPageId | 当前页面ID | string | 可选 | 当前页面ID。  
  
      * STOPANALYTICSCOLLECTION

用户关闭采集事件时，上报此事件。该事件不会用于洞察报告。

参数ID | 参数名称 | 参数类型 | 可选/必选 | 参数描述  
---|---|---|---|---  
$PrePageId | 前一个页面ID | string | 可选 | 前一个页面ID。  
$CurrPageId | 当前页面ID | string | 可选 | 当前页面ID。
