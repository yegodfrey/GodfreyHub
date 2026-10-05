---
name: document/cn/doc-references/iassistancechannel-0000001218157961
title: IAssistanceChannel
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/iassistancechannel-0000001218157961
source: portal
---

# IAssistanceChannel
    
    public interface IAssistanceChannel  
  
---  
Provides methods to receive notifications about collaboration session establishment and disconnection returned by the framework to your application. 

When a collaboration session is established, terminated during establishment, or disconnected, the framework notifies your application through the [IAssistanceChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iassistancechannel-0000001218157961) callback.

When your application calls the [Ability#startAssistAbility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ability-0000001054120007#ZH-CN_TOPIC_0000001054120007__startAssistAbility-ohos_aafwk_content_Intent-ohos_aafwk_ability_assistance_IAssistanceChannel-) method to establish a collaboration session, [IAssistanceChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iassistancechannel-0000001218157961) needs to be passed, and the peer ability of the collaboration session needs to implement the [IAssistanceChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iassistancechannel-0000001218157961) API.

**Since:**

7

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [onConnected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iassistancechannel-0000001218157961#ZH-CN_TOPIC_0000001218157961__onConnected-ohos_aafwk_ability_assistance_AbilityAgent-)​([AbilityAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilityagent-0000001217996497) agent) |  Invoked by the framework to notify your application when a collaboration session is established using the [Ability#startAssistAbility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ability-0000001054120007#ZH-CN_TOPIC_0000001054120007__startAssistAbility-ohos_aafwk_content_Intent-ohos_aafwk_ability_assistance_IAssistanceChannel-) method.   
void | [onConnectFailed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iassistancechannel-0000001218157961#ZH-CN_TOPIC_0000001218157961__onConnectFailed-int-)​(int errorCode) |  Invoked by the framework to notify your application when a collaboration session fails to be established using the [Ability#startAssistAbility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ability-0000001054120007#ZH-CN_TOPIC_0000001054120007__startAssistAbility-ohos_aafwk_content_Intent-ohos_aafwk_ability_assistance_IAssistanceChannel-) method.   
void | [onDisconnected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iassistancechannel-0000001218157961#ZH-CN_TOPIC_0000001218157961__onDisconnected-int-)​(int errorCode) |  Invoked by the framework to notify your application when a collaboration session is disconnected.   
  
#### Method Detail

#### [h2]onConnected

void onConnected​([AbilityAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilityagent-0000001217996497) agent)

Invoked by the framework to notify your application when a collaboration session is established using the [Ability#startAssistAbility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ability-0000001054120007#ZH-CN_TOPIC_0000001054120007__startAssistAbility-ohos_aafwk_content_Intent-ohos_aafwk_ability_assistance_IAssistanceChannel-) method. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
agent  |  Indicates the agent of the peer ability.  
  
**Since:**

7

#### [h2]onConnectFailed

void onConnectFailed​(int errorCode)

Invoked by the framework to notify your application when a collaboration session fails to be established using the [Ability#startAssistAbility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ability-0000001054120007#ZH-CN_TOPIC_0000001054120007__startAssistAbility-ohos_aafwk_content_Intent-ohos_aafwk_ability_assistance_IAssistanceChannel-) method. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
errorCode  |  Indicates the reason why the collaboration session fails to be established. For details about the error code, see [AssistantCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/assistantcode-0000001172716620).  
  
**Since:**

7

#### [h2]onDisconnected

void onDisconnected​(int errorCode)

Invoked by the framework to notify your application when a collaboration session is disconnected. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
errorCode  |  Indicates the reason why the collaboration session is disconnected. For details about the error code, see [AssistantCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/assistantcode-0000001172716620).  
  
**Since:**

7
