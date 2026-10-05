---
name: document/cn/doc-references/ilifecycleobserver-0000001054678647
title: ILifecycleObserver
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/ilifecycleobserver-0000001054678647
source: portal
---

# ILifecycleObserver  
      
    public interface ILifecycleObserver  
  
---  
Identifies a class as a ILifecycleObserver. The child classes that implement this interface provide related methods. 

You can call the [Lifecycle#addObserver(ILifecycleObserver)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lifecycle-0000001054439967#ZH-CN_TOPIC_0000001054439967__addObserver-ohos_aafwk_ability_ILifecycleObserver-) method to add LifecycleObserver objects to the observer list. After that, the objects will be notified if the lifecycle state of an [Ability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ability-0000001054120007) or [AbilitySlice](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilityslice-0000001054678680) changes.

Instead of implementing ILifecycleObserver, you can only use [LifecycleObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lifecycleobserver-0000001054199954) or [LifecycleStateObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lifecyclestateobserver-0000001054838632) to observe lifecycle changes of an [Ability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ability-0000001054120007) or [AbilitySlice](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilityslice-0000001054678680).

**Since:**

1

**See Also:**

[LifecycleObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lifecycleobserver-0000001054199954), [LifecycleStateObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lifecyclestateobserver-0000001054838632)
