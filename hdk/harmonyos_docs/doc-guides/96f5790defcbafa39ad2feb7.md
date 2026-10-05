---
name: document/cn/doc-guides/ability-page-cross-device-0000001051072880
title: 跨设备迁移
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ability-page-cross-device-0000001051072880
source: portal
---

# 跨设备迁移

跨设备迁移（下文简称“迁移”）支持将Page在同一用户的不同设备间迁移，以便支持用户无缝切换的诉求。以Page从设备A迁移到设备B为例，迁移动作主要步骤如下：

     1. 设备A上的Page请求迁移。
     2. HarmonyOS处理迁移任务，并回调设备A上Page的保存数据方法，用于保存迁移必须的数据。
     3. HarmonyOS在设备B上启动同一个Page，并回调其恢复数据方法。

开发者可以参考以下详细步骤开发具有迁移功能的Page。

#### 实现IAbilityContinuation接口

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113815.25073182099698096705678021797378:50001231000000:2800:1BE585533F7FC6CDDB416DC3698EA413B97B6BC7B821BE829FFB0DA35EC39E1C.png?needInitFileName=true?needInitFileName=true)

一个应用可能包含多个Page，仅需要在支持迁移的Page中通过以下方法实现IAbilityContinuation接口。同时，此Page所包含的所有AbilitySlice也需要实现此接口。

     * **onStartContinuation()**

Page请求迁移后，系统首先回调此方法，开发者可以在此回调中决策当前是否可以执行迁移，比如，弹框让用户确认是否开始迁移。

     * **onSaveData()**

如果onStartContinuation()返回true，则系统回调此方法，开发者在此回调中保存必须传递到另外设备上以便恢复Page状态的数据。

     * **onRestoreData()**

源侧设备上Page完成保存数据后，系统在目标侧设备上回调此方法，开发者在此回调中接受用于恢复Page状态的数据。

在目标侧设备上的Page会重新启动其生命周期，无论其启动模式如何配置。且系统回调此方法的时机在onStart()之前。

     * **onCompleteContinuation()**

目标侧设备上恢复数据一旦完成，系统就会在源侧设备上回调Page的此方法，以便通知应用迁移流程已结束。开发者可以在此检查迁移结果是否成功，并在此处理迁移结束的动作，例如，应用可以在迁移完成后终止自身生命周期。

     * **onFailedContinuation()**

迁移过程中发生异常，系统会在发起端设备上回调FA的此方法，以便通知应用迁移流程发生的异常。并不是所有异常都会回调FA此方法，仅局限于该接口枚举的异常。开发者可以在此检查异常信息，并在此处理迁移异常发生后的动作，例如，应用可以提醒用户此时发生的异常信息。

该接口从API Version 6开始提供，目前为Beta版本。

     * **onRemoteTerminated()**

如果开发者使用continueAbilityReversibly()而不是continueAbility()，则此后可以在源侧设备上使用reverseContinueAbility()进行回迁。这种场景下，相当于同一个Page（的两个实例）同时在两个设备上运行，迁移完成后，如果目标侧设备上Page因任何原因终止，则源侧Page通过此回调接收终止通知。

#### 请求迁移

实现IAbilityContinuation的Page可以在其生命周期内，调用continueAbility()或continueAbilityReversibly()请求迁移。两者的区别是，通过后者发起的迁移此后可以进行回迁。
    
    try {
        continueAbility();
    } catch (IllegalStateException e) {
        // Maybe another continuation in progress.
        ...
    }

以Page从设备A迁移到设备B为例，详细的流程如下：

     1. 设备A上的Page请求迁移。
     2. 系统回调设备A上Page及其AbilitySlice栈中所有AbilitySlice实例的IAbilityContinuation.onStartContinuation()方法，以确认当前是否可以立即迁移。
     3. 如果可以立即迁移，则系统回调设备A上Page及其AbilitySlice栈中所有AbilitySlice实例的IAbilityContinuation.onSaveData()方法，以便保存迁移后恢复状态必须的数据。
     4. 如果保存数据成功，则系统在设备B上启动同一个Page，并恢复AbilitySlice栈，然后回调IAbilityContinuation.onRestoreData()方法，传递此前保存的数据；此后设备B上此Page从onStart()开始其生命周期回调。
     5. 系统回调设备A上Page及其AbilitySlice栈中所有AbilitySlice实例的IAbilityContinuation.onCompleteContinuation()方法，通知数据恢复成功与否。
     6. 迁移过程中发生异常，系统回调设备A上Page及其AbilitySlice栈中所有AbilitySlice实例的IAbilityContinuation.onFailedContinuation()方法，通知迁移过程中发生异常，并不是所有异常都会回调FA此方法，仅局限于该接口枚举的异常。

#### 请求回迁

使用continueAbilityReversibly()请求迁移并完成后，源侧设备上已迁移的Page可以发起回迁。此时可使用reverseContinueAbility()将对端设备的ability回迁，以便使用户活动重新回到此设备。
    
    try {
        reverseContinueAbility();
    } catch (IllegalStateException e) {
        // Maybe another continuation in progress.
        ...
    }

以Page从设备A迁移到设备B后并请求回迁为例，详细的流程如下：

     1. 设备A上的Page请求回迁。
     2. 系统回调设备B上Page及其AbilitySlice栈中所有AbilitySlice实例的IAbilityContinuation.onStartContinuation()方法，以确认当前是否可以立即迁移。
     3. 如果可以立即迁移，则系统回调设备B上Page及其AbilitySlice栈中所有AbilitySlice实例的IAbilityContinuation.onSaveData()方法，以便保存回迁后恢复状态必须的数据。
     4. 如果保存数据成功，则系统在设备A上Page恢复AbilitySlice栈，然后回调IAbilityContinuation.onRestoreData()方法，传递此前保存的数据。
     5. 如果数据恢复成功，则系统终止设备B上Page的生命周期。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113815.63034457790706429078463612790047:50001231000000:2800:BF81F82953CBE7DA3371F7BFD75CDE9D8D3898DBF3DAA292E6BD1DFD8A86BA74.png?needInitFileName=true?needInitFileName=true)

关于跨设备迁移的更详细使用指导，可参考[跨端迁移开发指导](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/hop-cross-device-migration-guidelines-0000001146058939)。
