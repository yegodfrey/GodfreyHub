---
name: document/cn/apiref/ohos_1_1ability-0000001054479575
title: OHOS::Ability
uri: https://developer.huawei.com/consumer/cn/doc/apiref/ohos_1_1ability-0000001054479575
source: portal
---

# OHOS::Ability  
  
#### Overview

**Related Modules:**

[AbilityKit](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111)

**Description:**

Declares ability-related functions, including ability lifecycle callbacks and functions for connecting to or disconnecting from Particle Abilities. 

As the fundamental unit of OpenHarmony applications, abilities are classified into [Feature](https://device.harmonyos.com/cn/docs/develop/apiref/feature-0000001055518086) Abilities and Particle Abilities. [Feature](https://device.harmonyos.com/cn/docs/develop/apiref/feature-0000001055518086) Abilities support the Page template, and Particle Abilities support the [Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055198168) template. An ability using the Page template is called Page ability for short and that using the [Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055198168) template is called [Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055198168) ability.

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Public Member Functions

Function | Description  
---|---  
[OnStart](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__ga4d016d42397f33c7710db8544581c757) (const [Want](https://device.harmonyos.com/cn/docs/develop/apiref/want-0000001055039558) &want) | virtual void  Called when this ability is started. You must override this function if you want to perform some initialization operations during ability startup.   
[OnInactive](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__gae251a38aa7c0aebd7498eef86deab7c1) () | virtual void  Called when this ability enters the **STATE_INACTIVE** state.   
[OnActive](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__ga3135bfa435f5aaa185f21014a9e86e59) (const [Want](https://device.harmonyos.com/cn/docs/develop/apiref/want-0000001055039558) &want) | virtual void  Called when this ability enters the **STATE_ACTIVE** state.   
[OnBackground](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__ga8185ad517d94ca99a00917d3d1f10620) () | virtual void  Called when this ability enters the **STATE_BACKGROUND** state.   
[OnStop](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__gaa4145b360bbe5cdb5d267b17ac12af6a) () | virtual void  Called when this ability enters the **STATE_STOP** state.   
[OnConnect](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__ga88e9dbaaa083be9f06adeea27680ef76) (const [Want](https://device.harmonyos.com/cn/docs/develop/apiref/want-0000001055039558) &want) | virtual const SvcIdentity *  Called when this [Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055198168) ability is connected for the first time.   
[OnDisconnect](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__gac17d2b81d661134b63ee74b0212eace6) (const [Want](https://device.harmonyos.com/cn/docs/develop/apiref/want-0000001055039558) &want) | virtual void  Called when all abilities connected to this [Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055198168) ability are disconnected.   
[SetMainRoute](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__gac83a9af046458b7f6bfaf85071b093f4) (const std::string &[entry](https://device.harmonyos.com/cn/docs/develop/apiref/entry-0000001055078183)) | void  Sets the main route for this ability.   
[SetUIContent](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__ga9b734c2ad8ad52f906d676f0c897a4aa) ([RootView](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1rootview-0000001054598173) *rootView) | void  Sets the UI layout for this ability. You can call **GetWindowRootView()** to create a layout and add controls.   
[MsgHandle](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__gab2d208621c7236c3608afb77d8a02966) (uint32_t funcId, IpcIo *request, IpcIo *reply) | virtual void  Handles a message sent by the client to this [Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055198168) ability.   
[Dump](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__ga5330624843c776ebe61366540d32eb92) (const std::string &extra) | virtual void  Prints ability information to the console.   
[StartAbility](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__gab11d708d5eaa1eca54828fa88625681a) (const [Want](https://device.harmonyos.com/cn/docs/develop/apiref/want-0000001055039558) &want) | int  Starts an [Ability](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1ability-0000001054479575) based on the specified [Want](https://device.harmonyos.com/cn/docs/develop/apiref/want-0000001055039558) information.   
[StopAbility](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__gadc670d5f6df0d485ee3062b70b3ffe99) (const [Want](https://device.harmonyos.com/cn/docs/develop/apiref/want-0000001055039558) &want) | int  Stops an [Ability](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1ability-0000001054479575) based on the specified [Want](https://device.harmonyos.com/cn/docs/develop/apiref/want-0000001055039558) information.   
[TerminateAbility](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__gac4a36f03c60fcbeca3b47192ccab1d24) () | int  Destroys this [Ability](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1ability-0000001054479575).   
[ConnectAbility](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__ga4da460ac085a8da1c665f317fcde2ba1) (const [Want](https://device.harmonyos.com/cn/docs/develop/apiref/want-0000001055039558) &want, const [IAbilityConnection](https://device.harmonyos.com/cn/docs/develop/apiref/iabilityconnection-0000001054479567) &conn, void *data) | int  Connects to a [Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055198168) ability based on the specified [Want](https://device.harmonyos.com/cn/docs/develop/apiref/want-0000001055039558) information.   
[DisconnectAbility](https://device.harmonyos.com/cn/docs/develop/apiref/abilitykit-0000001054598111#ZH-CN_TOPIC_0000001054598111__ga1d9023597a9889dbb4015565a10f3470) (const [IAbilityConnection](https://device.harmonyos.com/cn/docs/develop/apiref/iabilityconnection-0000001054479567) &conn) | int  Disconnects from a [Service](https://device.harmonyos.com/cn/docs/develop/apiref/service-0000001055198168) ability. 
