---
name: cangjie-guides/cj-i18n-time-zone-display
title: 本地化时区名称
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-i18n-time-zone-display
nodePath: 应用框架 / Localization Kit（本地化开发服务） / 应用国际化 / 本地化名称 / 本地化时区名称
---

# 本地化时区名称

#### 使用场景

在多语言环境中，不同地区的用户对时区的称呼可能有所不同。例如，在中文环境中，中部时区称为“中部时区”，而在英文环境中，则称为“Central Time Zone”。为了确保时区展示符合当地人的语言使用习惯，需要本地化时区名称。

#### 开发步骤

接口具体使用方法和说明请参见[getDisplayName](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-i18n#func-getdisplaynamestring)的API接口文档。

  1. 导入模块。
         
         import kit.LocalizationKit.*

  2. 本地化时区名称，以美洲/圣保罗为例。
         
         let calendar: Calendar = getCalendar('America/Sao_Paulo')
          let timezone = calendar.getTimeZone()
          let timeZoneName: String = calendar.getDisplayName(timezone)



