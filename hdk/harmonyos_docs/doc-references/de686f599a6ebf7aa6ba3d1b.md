---
name: document/cn/doc-references/notificationactionbutton_builder-0000001054120098
title: NotificationActionButton.Builder
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/notificationactionbutton_builder-0000001054120098
source: portal
---

# NotificationActionButton.Builder

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.event.notification.NotificationActionButton.Builder
    
    public static final class NotificationActionButton.Builder
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Builder class for [NotificationActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton-0000001054120169) object.

**Since:**

3

#### Constructor Summary

Constructor | Description  
---|---  
[Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098#ZH-CN_TOPIC_0000001054120098__Builder-ohos_event_notification_NotificationActionButton-)​([NotificationActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton-0000001054120169) actionButton) |  A constructor used to create a Builder instance by copying parameters from an existing [NotificationActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton-0000001054120169) object.   
[Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098#ZH-CN_TOPIC_0000001054120098__Builder-ohos_media_image_PixelMap-java_lang_String-ohos_event_intentagent_IntentAgent-)​([PixelMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelmap-0000001054120190) icon, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) title, [IntentAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagent-0000001054678807) intentAgent) |  A constructor used to create a Builder instance with the specified icon, title, and [IntentAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagent-0000001054678807) for creating [NotificationActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton-0000001054120169) objects.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[NotificationActionButton.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098) | [addAdditionalData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098#ZH-CN_TOPIC_0000001054120098__addAdditionalData-ohos_utils_PacMap-)​([PacMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pacmap-0000001054440291) pacMap) |  Adds additional data to this Builder.   
[NotificationActionButton.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098) | [addNotificationUserInput](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098#ZH-CN_TOPIC_0000001054120098__addNotificationUserInput-ohos_event_notification_NotificationUserInput-)​([NotificationUserInput](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationuserinput-0000001054558845) userInput) |  Adds a [NotificationUserInput](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationuserinput-0000001054558845) object used to collect user input.   
[NotificationActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton-0000001054120169) | [build](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098#ZH-CN_TOPIC_0000001054120098__build--)​() |  Uses all of the settings to create a new [NotificationActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton-0000001054120169) object.   
[NotificationActionButton.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098) | [setAutoCreatedReplies](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098#ZH-CN_TOPIC_0000001054120098__setAutoCreatedReplies-boolean-)​(boolean autoCreatedReplies) |  Sets whether to allow the platform to automatically generate possible replies and add them to [NotificationUserInput#getOptions()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationuserinput-0000001054558845#ZH-CN_TOPIC_0000001054558845__getOptions--).   
[NotificationActionButton.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098) | [setContextDependent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098#ZH-CN_TOPIC_0000001054120098__setContextDependent-boolean-)​(boolean isContextual) |  Sets whether this NotificationActionButton is a contextual action, that is, whether this NotificationActionButton is dependent on the notification message body.   
[NotificationActionButton.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098) | [setSemanticActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098#ZH-CN_TOPIC_0000001054120098__setSemanticActionButton-ohos_event_notification_NotificationConstant_SemanticActionButton-)​([NotificationConstant.SemanticActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationconstant_semanticactionbutton-0000001054358832) semanticActionButton) |  Sets a semantic action for this NotificationActionButton.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]Builder

public Builder​([PixelMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelmap-0000001054120190) icon, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) title, [IntentAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagent-0000001054678807) intentAgent)

A constructor used to create a Builder instance with the specified icon, title, and [IntentAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagent-0000001054678807) for creating [NotificationActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton-0000001054120169) objects. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
icon  |  Indicates the icon to represent this NotificationActionButton.  
title  |  Indicates the title of this NotificationActionButton.  
intentAgent  |  Indicates the IntentAgent to be triggered when this NotificationActionButton is triggered.  
  
**Since:**

3

#### [h2]Builder

public Builder​([NotificationActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton-0000001054120169) actionButton)

A constructor used to create a Builder instance by copying parameters from an existing [NotificationActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton-0000001054120169) object. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
actionButton  |  Indicates the existing NotificationActionButton object.  
  
**Since:**

3

#### Method Detail

#### [h2]addNotificationUserInput

public [NotificationActionButton.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098) addNotificationUserInput​([NotificationUserInput](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationuserinput-0000001054558845) userInput)

Adds a [NotificationUserInput](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationuserinput-0000001054558845) object used to collect user input. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
userInput  |  Indicates the NotificationUserInput object to add.  
  
**Returns:**

Returns this Builder object.

**Since:**

3

#### [h2]setContextDependent

public [NotificationActionButton.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098) setContextDependent​(boolean isContextual)

Sets whether this NotificationActionButton is a contextual action, that is, whether this NotificationActionButton is dependent on the notification message body. For example, a contextual NotificationActionButton provides an address in the notification for users to open a map application. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
isContextual  |  Specifies whether this NotificationActionButton is a contextual action. The value true indicates a contextual action, and the value false indicates not.  
  
**Returns:**

Returns this Builder object.

**Since:**

3

#### [h2]setSemanticActionButton

public [NotificationActionButton.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098) setSemanticActionButton​([NotificationConstant.SemanticActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationconstant_semanticactionbutton-0000001054358832) semanticActionButton)

Sets a semantic action for this NotificationActionButton. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
semanticActionButton  |  Indicates the semantic action to add. For available values, see [NotificationConstant.SemanticActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationconstant_semanticactionbutton-0000001054358832).  
  
**Returns:**

Returns this Builder object.

**Since:**

3

#### [h2]setAutoCreatedReplies

public [NotificationActionButton.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098) setAutoCreatedReplies​(boolean autoCreatedReplies)

Sets whether to allow the platform to automatically generate possible replies and add them to [NotificationUserInput#getOptions()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationuserinput-0000001054558845#ZH-CN_TOPIC_0000001054558845__getOptions--). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
autoCreatedReplies  |  Specifies whether to allow the platform to automatically generate possible replies. The value true means to allow generated replies; and the value false means not.  
  
**Returns:**

Returns this Builder object.

**Since:**

3

#### [h2]addAdditionalData

public [NotificationActionButton.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton_builder-0000001054120098) addAdditionalData​([PacMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pacmap-0000001054440291) pacMap)

Adds additional data to this Builder. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
pacMap  |  Indicates the [PacMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pacmap-0000001054440291) object containing the additional data.  
  
**Returns:**

Returns this Builder object.

**Since:**

3

#### [h2]build

public [NotificationActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton-0000001054120169) build​()

Uses all of the settings to create a new [NotificationActionButton](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton-0000001054120169) object. 

**Returns:**

Returns the created NotificationActionButton object.

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if [NotificationActionButton.isContextDependent()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationactionbutton-0000001054120169#ZH-CN_TOPIC_0000001054120169__isContextDependent--) is true but icon or intentAgent is null.  
  
**Since:**

3
