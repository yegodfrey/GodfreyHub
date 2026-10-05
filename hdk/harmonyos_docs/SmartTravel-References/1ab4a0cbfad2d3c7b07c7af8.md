---
name: document/cn/SmartTravel-References/app-metadata-message-0000001557247172
title: Message Metadata
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-References/app-metadata-message-0000001557247172
source: portal
---

# Message Metadata

#### Scenario Overview

After the head unit connects to HiCar and displays a converged desktop, HiCar will notify the head unit via message metadata once a message is available. The head unit will then display the message in an appropriate way. The head unit does not need to request the metadata in advance.

There are two types of messages:

     * Notification messages: notifications such as low battery level and phone getting overheated
     * Pop-up messages: confirmation pop-ups for metadata authorization

#### DataType

531

#### API Version

1.0

#### API Definition

**Table 1** Message metadata**Parameter** | Mandatory | **Type** | **Description**  
---|---|---|---  
MessageData | Yes | object | Message metadata sent by HiCar. For details, please refer to [Table 3](https://developer.huawei.com/consumer/cn/doc/development/SmartTravel-References/app-metadata-navigation-0000001382773346#EN-US_TOPIC_0000001382773346__en-us_topic_0000001390876029_table15479123765616).  
MessageDataResp | Yes | object | Head unit response information. For details, please refer to Table 4.  
  
**Table 2** MessageData**Parameter** | Mandatory | **Type** | **Description**  
---|---|---|---  
Status | Yes | int | Message status:
     * **0** : created and updated
     * **1** : removed  
Type | Yes | int | Message type:
     * **1** : notification message
     * **2** : pop-up message  
Id | Yes | int | Unique message ID.  
Title | Yes | string | Message name.  
AppIcon | No | byte[] | App icon.  
AppPackage | Yes | string | App package name.  
InfoImage | No | byte[] | Message image.  
MainText | Yes | string | For notification messages: main text For pop-up messages: title  
SubText | Yes | string | For notification messages: auxiliary text For pop-up messages: text  
OptText | No | string | Optional text.  
Button1 | No | object | Left button information, which is involved only in pop-up messages. For details, please refer to Table 3.  
Button2 | No | object | Right button information, which is involved only in pop-up messages. For details, please refer to Table 3.  
Button3 | No | object | Check box, which is involved only in pop-up messages. For details, please refer to Table 3.  
  
**Table 3** ButtonX**Parameter** | Mandatory | **Type** | **Description**  
---|---|---|---  
BtnText | Yes | string | Button text.  
BtnType | Yes | string | Button type:
     * **emphasize** : confirmation type, for example, an OK button.
     * **normal** : non-default, for example, a Cancel button.
     * **check** : check box  
  
**Table 4** MessageDataResp**Parameter** | Mandatory | **Type** | **Description**  
---|---|---|---  
RespCode | Yes | int | Response result:
     * **100000** : received
     * **100001** : not received  
Id | Yes | int | Message ID.  
Type | Yes | int | Message type:
     * **1** : notification message
     * **2** : pop-up message  
Button1 | No | boolean | Indicates whether to click the left button, which is only involved in pop-up messages.
     * **true** : yes
     * **false** : no  
Button2 | No | boolean | Indicates whether to click the right button, which is only involved in pop-up messages.
     * **true** : yes
     * **false** : no  
Button3 | No | boolean | Indicates whether to select the check box, which is only involved in pop-up messages.
     * **true** : yes
     * **false** : no  
  
#### API Examples

When a message is available, the HiCar app sends the message metadata to the head unit. The following is an example of notification message data:
    
    {
        "MessageData" : {
            "Status" : 0,
            "Type" : 1,
            "Id" : 5432,
            "Title" : "Message",
            "AppIcon" : [],
            "AppPackage" : "com.huawei.hicar",
            "InfoImage" : [],
            "MainText" : "10%",
            "SubText" : "Phone battery low. Please charge in time.",
            "OptText" : "",
        }
    }

The following is an example of pop-up message data:
    
    {
        "MessageData" : {
            "Status" : 0,
            "Type" : 2,
            "Id" : 1020,
            "Title" : "Message",
            "AppIcon" : [],
            "AppPackage" : "com.huawei.hicar",
            "InfoImage" : [],
            "MainText" : "Allow access to call data?",
            "SubText" : "When allowed, devices connected will be able to use phone call data.",
            "OptText" : "",
            "Button1" : {
                "BtnText" : "OK",
                "BtnType" : "emphasize",
            }
            "Button2" : {
                "BtnText" : "Cancel",
                "BtnType" : "normal",
            }
            "Button3" : {
                "BtnText" : "Do not show again",
                "BtnType" : "check",
            }
        }
    }

After receiving and processing the message metadata, the head unit sends a response message to the HiCar app. The following is an example of the response to pop-up messages:
    
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
