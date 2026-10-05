---
name: document/cn/HMS-References/event-v4
title: com.huawei.hms.jos.games.event.Event
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/event-v4
source: portal
---

**Event** 类返回具体事件通知信息。

# Public Method Summary

return type| description  
---|---  
String| getDescription()获取事件描述。  
String| getEventId()获取事件ID。  
String| getLocaleValue()获取事件数值对应的本地化数字。例如阿拉伯国家返回的就是阿拉伯语对应的数字。  
Uri| getThumbnailUri()获取事件图标的URI地址。  
String| getName()获取事件的名称。  
[Player](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/player-v4)| getGamePlayer()获取事件对应的当前登录玩家信息。  
long| getValue()获取当前登录玩家的当前事件数值。  
boolean| isVisible()是否显示该事件。  
  
# Public Methods

## public String getDescription()

获取当前事件的描述信息。

**返回值**

当前事件的描述信息。

## public String getEventId()  


获取当前事件的事件ID。

**返回值**

事件ID。

## public String getLocaleValue()

获取事件数值对应的本地化数字。例如阿拉伯国家返回的就是阿拉伯语对应的数字。

**返回值**

返回本地化语言的数字。

## public Uri getThumbnailUri()  


获取事件图标的URI地址。

**返回值**

图标的URI地址。

## public String getName()

获取当前事件的名称。

**返回值**

当前事件名称。

## public Player getGamePlayer()  


获取当前登录的玩家信息。

**返回值**

以[Player](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/player-v4)对象方式返回玩家具体信息。

## public long getValue()

获取当前登录玩家的当前事件数值。

**返回值**

当前登录玩家的数值。

## public boolean isVisible()

是否显示该事件。

**返回值**

  * true：显示

  * false：不显示




  

