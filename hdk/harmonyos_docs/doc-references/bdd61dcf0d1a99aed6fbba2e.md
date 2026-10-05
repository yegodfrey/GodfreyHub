---
name: document/cn/doc-references/defaultitemanimation-0000001172556700
title: DefaultItemAnimation
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/defaultitemanimation-0000001172556700
source: portal
---

# DefaultItemAnimation

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.agp.components.listcomponent.ItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985) |---|---[ohos.agp.components.listcomponent.BaseItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642) |---|---|---ohos.agp.components.listcomponent.DefaultItemAnimation
    
    public class DefaultItemAnimation
    extends [BaseItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642)  
  
---  
  
Inherits from [BaseItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642), manages the animation execution sequence, and implements the remove, add, move, and change animations.

By default, the [DefaultItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/defaultitemanimation-0000001172556700) is used for the ListComponent.

**Since:**

7

#### Nested Class Summary

Nested classes/interfaces inherited from class ohos.agp.components.listcomponent.[ItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985)  
---  
[ItemAnimation.ItemAnimationCleaner](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation_itemanimationcleaner-0000001217877949), [ItemAnimation.ItemAnimationFinishedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation_itemanimationfinishedlistener-0000001217877947)  
  
#### Field Summary

Fields inherited from class ohos.agp.components.listcomponent.[ItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985)  
---  
[ANIMATION_CLASS_TYPE_BASEITEMANIMATION](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__ANIMATION_CLASS_TYPE_BASEITEMANIMATION), [ANIMATION_CLASS_TYPE_DEFAULTITEMANIMATION](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__ANIMATION_CLASS_TYPE_DEFAULTITEMANIMATION), [ANIMATION_CLASS_TYPE_ITEMANIMATION](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__ANIMATION_CLASS_TYPE_ITEMANIMATION), [mNativePtr](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__mNativePtr)  
  
#### Constructor Summary

Constructor | Description  
---|---  
[DefaultItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/defaultitemanimation-0000001172556700#ZH-CN_TOPIC_0000001172556700__DefaultItemAnimation--)​() |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
protected void | [createNativePtr](https://developer.harmonyos.com/cn/docs/documentation/doc-references/defaultitemanimation-0000001172556700#ZH-CN_TOPIC_0000001172556700__createNativePtr--)​() | Creates a native pointer to this ItemAnimation instance.  
void | [finishAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/defaultitemanimation-0000001172556700#ZH-CN_TOPIC_0000001172556700__finishAnimation-ohos_agp_components_listcomponent_ComponentOwner-)​([ComponentOwner](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentowner-0000001172398146) item) | Ends an animation on a component immediately.  
void | [finishAnimations](https://developer.harmonyos.com/cn/docs/documentation/doc-references/defaultitemanimation-0000001172556700#ZH-CN_TOPIC_0000001172556700__finishAnimations--)​() | Ends animations on all components immediately.  
boolean | [isRunning](https://developer.harmonyos.com/cn/docs/documentation/doc-references/defaultitemanimation-0000001172556700#ZH-CN_TOPIC_0000001172556700__isRunning--)​() | Checks whether any component animation is running.  
  
Methods inherited from class ohos.agp.components.listcomponent.[BaseItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642)  
---  
[getAllowChangeAnimations](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642#ZH-CN_TOPIC_0000001172716642__getAllowChangeAnimations--), [onAddFinished](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642#ZH-CN_TOPIC_0000001172716642__onAddFinished-ohos_agp_components_listcomponent_ComponentOwner-), [onAddStarting](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642#ZH-CN_TOPIC_0000001172716642__onAddStarting-ohos_agp_components_listcomponent_ComponentOwner-), [onChangeFinished](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642#ZH-CN_TOPIC_0000001172716642__onChangeFinished-ohos_agp_components_listcomponent_ComponentOwner-boolean-), [onChangeStarting](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642#ZH-CN_TOPIC_0000001172716642__onChangeStarting-ohos_agp_components_listcomponent_ComponentOwner-boolean-), [onMoveFinished](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642#ZH-CN_TOPIC_0000001172716642__onMoveFinished-ohos_agp_components_listcomponent_ComponentOwner-), [onMoveStarting](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642#ZH-CN_TOPIC_0000001172716642__onMoveStarting-ohos_agp_components_listcomponent_ComponentOwner-), [onRemoveFinished](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642#ZH-CN_TOPIC_0000001172716642__onRemoveFinished-ohos_agp_components_listcomponent_ComponentOwner-), [onRemoveStarting](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642#ZH-CN_TOPIC_0000001172716642__onRemoveStarting-ohos_agp_components_listcomponent_ComponentOwner-), [setAllowChangeAnimations](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642#ZH-CN_TOPIC_0000001172716642__setAllowChangeAnimations-boolean-)  
  
Methods inherited from class ohos.agp.components.listcomponent.[ItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985)  
---  
[getAddAnimationTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__getAddAnimationTime--), [getChangeAnimationTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__getChangeAnimationTime--), [getMoveAnimationTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__getMoveAnimationTime--), [getNativePtr](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__getNativePtr--), [getRemoveAnimationTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__getRemoveAnimationTime--), [isRunning](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__isRunning-ohos_agp_components_listcomponent_ItemAnimation_ItemAnimationFinishedListener-), [onAnimationFinished](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__onAnimationFinished-ohos_agp_components_listcomponent_ComponentOwner-), [onAnimationStarted](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__onAnimationStarted-ohos_agp_components_listcomponent_ComponentOwner-), [setAddAnimationTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__setAddAnimationTime-long-), [setChangeAnimationTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__setChangeAnimationTime-long-), [setMoveAnimationTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__setMoveAnimationTime-long-), [setRemoveAnimationTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__setRemoveAnimationTime-long-)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]DefaultItemAnimation

public DefaultItemAnimation​()

#### Method Detail

#### [h2]createNativePtr

protected void createNativePtr​()

Description copied from class: [ItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__createNativePtr--)

Creates a native pointer to this ItemAnimation instance.

**Overrides:**

[createNativePtr](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642#ZH-CN_TOPIC_0000001172716642__createNativePtr--) in class [BaseItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/baseitemanimation-0000001172716642)

#### [h2]finishAnimation

public void finishAnimation​([ComponentOwner](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentowner-0000001172398146) item)

Description copied from class: [ItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__finishAnimation-ohos_agp_components_listcomponent_ComponentOwner-)

Ends an animation on a component immediately.

**Specified by:**

[finishAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__finishAnimation-ohos_agp_components_listcomponent_ComponentOwner-) in class [ItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
item | Indicates the ComponentOwner of the component.  
  
#### [h2]isRunning

public boolean isRunning​()

Description copied from class: [ItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__isRunning--)

Checks whether any component animation is running. You can use this method to determine whether to delay other actions until the animation ends.

**Specified by:**

[isRunning](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__isRunning--) in class [ItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985)

**Returns:**

Returns true if any animation is running; returns false otherwise.

#### [h2]finishAnimations

public void finishAnimations​()

Description copied from class: [ItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__finishAnimations--)

Ends animations on all components immediately.

**Specified by:**

[finishAnimations](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985#ZH-CN_TOPIC_0000001218157985__finishAnimations--) in class [ItemAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itemanimation-0000001218157985)
