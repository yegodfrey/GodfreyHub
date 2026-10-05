---
name: document/cn/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821
title: NotificationRequest.NotificationConversationalContent
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821
source: portal
---

# NotificationRequest.NotificationConversationalContent

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.event.notification.NotificationRequest.NotificationConversationalContent
    
    public static final class NotificationRequest.NotificationConversationalContent
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)  
  
---  
Constructs a conversation-like notification that includes message communication among multiple users. 

When constructing a conversation-like notification, you need to call [NotificationRequest#setContent(NotificationContent)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationrequest-0000001054518854#ZH-CN_TOPIC_0000001054518854__setContent-ohos_event_notification_NotificationRequest_NotificationContent-) to set the corresponding notification content type. You can call [setConversationTitle(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setConversationTitle-java_lang_String-) to set the title for the conversation and [addConversationalMessage(ohos.event.notification.NotificationRequest.NotificationConversationalContent.ConversationalMessage)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__addConversationalMessage-ohos_event_notification_NotificationRequest_NotificationConversationalContent_ConversationalMessage-) to add messages included in the conversation. The title and messages set using these two methods will affect the display effect of the title and text set by calling [setTitle(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setTitle-java_lang_String-) and [setText(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setText-java_lang_String-), respectively.

**Since:**

3

#### Nested Class Summary

Modifier and Type | Class | Description  
---|---|---  
static class  | [NotificationRequest.NotificationConversationalContent.ConversationalMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icationconversationalcontent_conversationalmessage-0000001054558843) |  Provides methods for defining a conversational message that is used in notifications created with [NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821).   
  
Nested classes/interfaces inherited from interface ohos.utils.[Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)  
---  
[Sequenceable.Producer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable_producer-0000001054678971)<[T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable_producer-0000001054678971)>  
  
#### Constructor Summary

Constructor | Description  
---|---  
[NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__NotificationConversationalContent-ohos_event_notification_MessageUser-)​([MessageUser](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messageuser-0000001054358828) user) |  A constructor used to create a NotificationConversationalContent instance with the MessageUser specified.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[NotificationRequest.NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821) | [addConversationalMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__addConversationalMessage-java_lang_String-long-ohos_event_notification_MessageUser-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) text, long timestamp, [MessageUser](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messageuser-0000001054358828) sender) |  Adds a message to this conversation-like notification based on the specified message content, timestamp, and MessageUser.   
[NotificationRequest.NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821) | [addConversationalMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__addConversationalMessage-ohos_event_notification_NotificationRequest_NotificationConversationalContent_ConversationalMessage-)​([NotificationRequest.NotificationConversationalContent.ConversationalMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icationconversationalcontent_conversationalmessage-0000001054558843) message) |  Adds a specified message to this conversation-like notification.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getAdditionalText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__getAdditionalText--)​() |  Obtains the additional text that has been set by calling [setAdditionalText(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setAdditionalText-java_lang_String-) for this conversation-like notification.   
[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[NotificationRequest.NotificationConversationalContent.ConversationalMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icationconversationalcontent_conversationalmessage-0000001054558843)> | [getAllConversationalMessages](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__getAllConversationalMessages--)​() |  Obtains all messages included in this conversation-like notification.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getConversationTitle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__getConversationTitle--)​() |  Obtains the title to be displayed for the conversation.   
[MessageUser](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messageuser-0000001054358828) | [getMessageUser](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__getMessageUser--)​() |  Obtains the message sender to be displayed for any messages sent by the user in this conversation-like notification.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__getText--)​() |  Obtains the notification content that has been set by calling [setText(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setText-java_lang_String-) for this conversation-like notification.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getTitle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__getTitle--)​() |  Obtains the title that has been set by calling [setTitle(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setTitle-java_lang_String-) for this conversation-like notification.   
boolean | [isConversationGroup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__isConversationGroup--)​() |  Checks whether this notification represents a group conversation.   
boolean | [marshalling](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__marshalling-ohos_utils_Parcel-)​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) out) |  Marshals this NotificationConversationalContent object into a Parcel.   
[NotificationRequest.NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821) | [setAdditionalText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setAdditionalText-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) additionalText) |  Sets the additional text to be included in this conversation-like notification.   
[NotificationRequest.NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821) | [setConversationGroup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setConversationGroup-boolean-)​(boolean conversationGroup) |  Sets whether this notification represents a group conversation.   
[NotificationRequest.NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821) | [setConversationTitle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setConversationTitle-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) conversationTitle) |  Sets the title to be displayed for the conversation.   
[NotificationRequest.NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821) | [setText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setText-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) text) |  Sets the text to be included in this conversation-like notification.   
[NotificationRequest.NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821) | [setTitle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setTitle-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) title) |  Sets the title of this conversation-like notification.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__toString--)​() |  Returns a string representation of the object.   
boolean | [unmarshalling](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__unmarshalling-ohos_utils_Parcel-)​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) in) |  Unmarshals this NotificationConversationalContent object from a Parcel.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from interface ohos.utils.[Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)  
---  
[hasFileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001#ZH-CN_TOPIC_0000001054239001__hasFileDescriptor--)  
  
#### Constructor Detail

#### [h2]NotificationConversationalContent

public NotificationConversationalContent​([MessageUser](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messageuser-0000001054358828) user) throws [IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724)

A constructor used to create a NotificationConversationalContent instance with the MessageUser specified. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
user  |  Indicates the MessageUser who sends all Message objects in this conversation-like notification. This parameter cannot be null.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if user is null.  
  
**Since:**

3

#### Method Detail

#### [h2]getMessageUser

public [MessageUser](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messageuser-0000001054358828) getMessageUser​()

Obtains the message sender to be displayed for any messages sent by the user in this conversation-like notification. 

**Returns:**

Returns the message sender.

**Since:**

3

#### [h2]getTitle

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getTitle​()

Obtains the title that has been set by calling [setTitle(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setTitle-java_lang_String-) for this conversation-like notification. 

If [setConversationTitle(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setConversationTitle-java_lang_String-) is called together with [addConversationalMessage(ohos.event.notification.NotificationRequest.NotificationConversationalContent.ConversationalMessage)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__addConversationalMessage-ohos_event_notification_NotificationRequest_NotificationConversationalContent_ConversationalMessage-) or [addConversationalMessage(java.lang.String,long,ohos.event.notification.MessageUser)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__addConversationalMessage-java_lang_String-long-ohos_event_notification_MessageUser-) for this notification, the return value of this method will be a combination of the return value of [getConversationTitle()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__getConversationTitle--) and that of [MessageUser#getName()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messageuser-0000001054358828#ZH-CN_TOPIC_0000001054358828__getName--) called on the MessageUser of the last added Message.

**Returns:**

Returns the title of this notification.

**Since:**

3

#### [h2]setTitle

public [NotificationRequest.NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821) setTitle​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) title)

Sets the title of this conversation-like notification. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
title  |  Indicates the title of this conversation-like notification.  
  
**Returns:**

Returns this NotificationConversationalContent object.

**Since:**

3

#### [h2]getText

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getText​()

Obtains the notification content that has been set by calling [setText(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setText-java_lang_String-) for this conversation-like notification. 

If [addConversationalMessage(ohos.event.notification.NotificationRequest.NotificationConversationalContent.ConversationalMessage)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__addConversationalMessage-ohos_event_notification_NotificationRequest_NotificationConversationalContent_ConversationalMessage-) or [addConversationalMessage(java.lang.String,long,ohos.event.notification.MessageUser)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__addConversationalMessage-java_lang_String-long-ohos_event_notification_MessageUser-) is also called for this notification, the return value of this method will be the return value of [ConversationalMessage#getText()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icationconversationalcontent_conversationalmessage-0000001054558843#ZH-CN_TOPIC_0000001054558843__getText--) called on the last added Message.

**Returns:**

Returns the notification content.

**Since:**

3

#### [h2]setText

public [NotificationRequest.NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821) setText​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) text)

Sets the text to be included in this conversation-like notification. This method does not take effect if [setConversationTitle(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setConversationTitle-java_lang_String-) is also called for this notification. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
text  |  Indicates the text to be included.  
  
**Returns:**

Returns this NotificationConversationalContent object.

**Since:**

3

#### [h2]getAdditionalText

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getAdditionalText​()

Obtains the additional text that has been set by calling [setAdditionalText(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setAdditionalText-java_lang_String-) for this conversation-like notification. 

**Returns:**

Returns the additional text of this notification.

**Since:**

3

#### [h2]setAdditionalText

public [NotificationRequest.NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821) setAdditionalText​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) additionalText)

Sets the additional text to be included in this conversation-like notification. 

The additional text is a supplement to the notification text set by calling [setText(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setText-java_lang_String-). The font of the additional text is smaller than the notification text and is displayed in a separate line.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
additionalText  |  Indicates the additional text to be included.  
  
**Returns:**

Returns this NotificationConversationalContent object.

**Since:**

3

#### [h2]getConversationTitle

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getConversationTitle​()

Obtains the title to be displayed for the conversation. 

**Returns:**

Returns the title to be displayed for the conversation.

**Since:**

3

#### [h2]setConversationTitle

public [NotificationRequest.NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821) setConversationTitle​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) conversationTitle)

Sets the title to be displayed for the conversation. 

The title set in this method will overwrite the one set by calling [setTitle(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__setTitle-java_lang_String-).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
conversationTitle  |  Indicates the title to be displayed for the conversation.  
  
**Returns:**

Returns this NotificationConversationalContent object.

**Since:**

3

#### [h2]isConversationGroup

public boolean isConversationGroup​()

Checks whether this notification represents a group conversation. 

**Returns:**

Returns true if this notification represents a group conversation; returns false otherwise.

**Since:**

3

#### [h2]setConversationGroup

public [NotificationRequest.NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821) setConversationGroup​(boolean conversationGroup)

Sets whether this notification represents a group conversation. 

The big icon, if any, set for this notification by calling [NotificationRequest#setBigIcon(PixelMap)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notificationrequest-0000001054518854#ZH-CN_TOPIC_0000001054518854__setBigIcon-ohos_media_image_PixelMap-) will be displayed only when this method is set to true.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
conversationGroup  |  Specifies whether this notification represents a group conversation. The value true indicates a group conversation, and the value false indicates not.  
  
**Returns:**

Returns this NotificationConversationalContent object.

**Since:**

3

#### [h2]getAllConversationalMessages

public [List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[NotificationRequest.NotificationConversationalContent.ConversationalMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icationconversationalcontent_conversationalmessage-0000001054558843)> getAllConversationalMessages​()

Obtains all messages included in this conversation-like notification. 

**Returns:**

Returns the list of all Message objects included.

**Since:**

3

#### [h2]addConversationalMessage

public [NotificationRequest.NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821) addConversationalMessage​([NotificationRequest.NotificationConversationalContent.ConversationalMessage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icationconversationalcontent_conversationalmessage-0000001054558843) message)

Adds a specified message to this conversation-like notification. All messages will be displayed in the order they are added. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
message  |  Indicates the ConversationalMessage object to add.  
  
**Returns:**

Returns this NotificationConversationalContent object.

**Since:**

3

#### [h2]addConversationalMessage

public [NotificationRequest.NotificationConversationalContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821) addConversationalMessage​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) text, long timestamp, [MessageUser](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messageuser-0000001054358828) sender) throws [IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724)

Adds a message to this conversation-like notification based on the specified message content, timestamp, and MessageUser. All messages will be displayed in the order they are added. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
text  |  Indicates the text to be displayed as the message content. This parameter cannot be null.  
timestamp  |  Indicates the time when the message arrived.  
sender  |  Indicates the MessageUser who sent the message.  
  
**Returns:**

Returns this NotificationConversationalContent object.

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if text is null.  
  
**Since:**

3

#### [h2]marshalling

public boolean marshalling​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) out)

Marshals this NotificationConversationalContent object into a Parcel. 

A process can call the [unmarshalling(ohos.utils.Parcel)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ificationrequest_notificationconversationalcontent-0000001054358821#ZH-CN_TOPIC_0000001054358821__unmarshalling-ohos_utils_Parcel-) method to unmarshal this NotificationConversationalContent object from a Parcel to implement inter-process communication (IPC).

**Specified by:**

[marshalling](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001#ZH-CN_TOPIC_0000001054239001__marshalling-ohos_utils_Parcel-) in interface [Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
out  |  Indicates the Parcel object for marshalling.  
  
**Returns:**

Returns true if the marshalling is successful; returns false otherwise.

**Since:**

3

#### [h2]unmarshalling

public boolean unmarshalling​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) in)

Unmarshals this NotificationConversationalContent object from a Parcel. 

**Specified by:**

[unmarshalling](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001#ZH-CN_TOPIC_0000001054239001__unmarshalling-ohos_utils_Parcel-) in interface [Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
in  |  Indicates the Parcel object for unmarshalling.  
  
**Returns:**

Returns true if the unmarshalling is successful; returns false otherwise.

**Since:**

3

#### [h2]toString

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​()

Description copied from class: [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--)

Returns a string representation of the object. In general, the toString method returns a string that "textually represents" this object. The result should be a concise but informative representation that is easy for a person to read. It is recommended that all subclasses override this method. 

The toString method for class Object returns a string consisting of the name of the class of which the object is an instance, the at-sign character `@', and the unsigned hexadecimal representation of the hash code of the object. In other words, this method returns a string equal to the value of: 
    
    getClass().getName() + '@' + Integer.toHexString(hashCode())
     

**Overrides:**

[toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

a string representation of the object.

**Since:**

4
