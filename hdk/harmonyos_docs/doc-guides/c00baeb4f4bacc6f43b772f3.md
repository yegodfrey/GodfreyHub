---
name: document/cn/doc-guides/fa-pageability-0000001281001030
title: PageAbility开发指导
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/fa-pageability-0000001281001030
source: portal
---

# PageAbility开发指导

#### 概述

#### [h2]功能简介

PageAbility是具备ArkUI实现的Ability，是开发者具体可见并可以交互的Ability实例。开发者通过IDE创建Ability时，IDE会自动创建相关模板代码。PageAbility相关能力通过单独的featureAbility实现，生命周期相关回调则通过app.js/app.ets中各个回调函数实现。

#### [h2]PageAbility的生命周期

**PageAbility生命周期介绍** （Ability Life Cycle）：

PageAbility生命周期是PageAbility被调度到INACTIVE、ACTIVE、BACKGROUND等各个状态的统称。

PageAbility生命周期流转如下图所示：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113734.27110753450457520163417047786261:50001231000000:2800:0E57BA4BED143B289A5CD6A0E2925A40DC59D0EB9039BF2442F0E5E959D4A78A.png?needInitFileName=true?needInitFileName=true)

**Ability生命周期状态说明：**

     * **UNINITIALIZED** ：未初始状态，为临时状态，PageAbility被创建后会由UNINITIALIZED状态进入INITIAL状态。

     * **INITIAL** ：初始化状态，也表示停止状态，表示当前PageAbility未运行，PageAbility被启动后由INITIAL态进入ACTIVE状态。

     * **INACTIVE** ：失去焦点状态，表示当前窗口已显示但是无焦点状态。

     * **ACTIVE** ：前台激活状态，表示当前窗口已显示，并获取焦点。

     * **BACKGROUND** ：后台状态，表示当前PageAbility退到后台，PageAbility在被销毁后由BACKGROUND状态进入INITIAL状态，或者重新被激活后由BACKGROUND状态进入ACTIVE状态。

**PageAbility生命周期回调与生命周期状态的关系如下图所示：**

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113734.48579223631871995380219851006081:50001231000000:2800:A1E256D064EFF504D59A3305A468C96E64520CE145FC3F7FFF4F48E241D4B42E.png?needInitFileName=true?needInitFileName=true)

PageAbility提供生命周期回调，开发者可以在app.js/app.ets中重写生命周期相关回调函数 。目前app.js环境中仅支持onCreate和onDestroy回调，app.ets环境支持全量生命周期回调。

#### [h2]启动模式

ability支持单实例和多实例两种启动模式。

在config.json中通过launchType配置项，可以配置具体的启动模式，其中：

启动模式 | 描述 | 说明  
---|---|---  
standard | 多实例 | 每次startAbility都会启动一个新的实例  
singleton | 单实例 | 系统中只存在唯一一个实例，startAbility时，如果已存在，则复用系统中的唯一一个实例  
  
缺省情况下是singleton模式。

#### 开发指导

#### [h2]featureAbility接口说明

featureAbility，即FA。PageAbility需要用到的featureAbility模块的接口如下：

**表1** featureAbility接口介绍

接口名 | 描述  
---|---  
void startAbility(parameter: StartAbilityParameter) | 启动Ability  
Context getContext(): | 获取应用Context  
void terminateSelf() | 结束Ability  
bool hasWindowFocus() | 是否获取焦点  
  
#### [h2]启动本地PageAbility

**导入模块**
    
    import featureAbility from '@ohos.ability.featureAbility'

**示例**
    
    import featureAbility from '@ohos.ability.featureAbility'
    featureAbility.startAbility({
        want:
        {
            action: "",
            entities: [""],
            type: "",
            options: {
                // Grant the permission to perform read operations on the URI.
                authReadUriPermission: true,
                // Grant the permission to perform write operations on the URI.
                authWriteUriPermission: true,
                // support forwarding the Want result to the ability.
                abilityForwardResult: true,
                // Enable ability continuation.
                abilityContinuation: true,
                // Specify that a component does not belong to ohos.
                notOhosComponent: true,
                // Specify that an ability is started.
                abilityFormEnabled: true,
                // Grant the permission for possible persisting on the URI.
                authPersistableUriPermission: true,
                // Grant the permission for possible persisting on the prefix URI.
                authPrefixUriPermission: true,
                // Support distributed scheduling system startup on multiple devices.
                abilitySliceMultiDevice: true,
                // A service ability is started regardless of whether the host application has been started.
                startForegroundAbility: true,
                // Install the specified ability if it is not installed.
                installOnDemand: true,
                // Return the result to the ability slice.
                abilitySliceForwardResult: true,
                // Install the specified ability with background mode if it is not installed.
                installWithBackgroundMode: true
            },
            deviceId: "",
            bundleName: "com.example.startability",
            abilityName: "com.example.startability.MainAbility",
            uri: ""
        },
    });

want参数也可以使用parameters参数，使用key-value的方式输入。

**示例**
    
    import featureAbility from '@ohos.ability.featureAbility'
    featureAbility.startAbility({
        want:
        {
            bundleName: "com.example.startability",
            uri: "",
            parameters: {
                abilityName: "com.example.startability.MainAbility"
            }
        },
    });

#### [h2]生命周期接口说明

**表2** 生命周期回调函数介绍

接口名 | 描述  
---|---  
onShow() | Ability由后台不可见状态切换到前台可见状态调用onShow方法，此时用户在屏幕可以看到该Ability  
onHide() | Ability由前台切换到后台不可见状态时调用onHide方法，此时用户在屏幕看不到该Ability。  
onDestroy() | 应用退出，销毁Ability对象前调用onDestroy方法，开发者可以在该方法里做一些回收资源、清空缓存等应用退出前的准备工作。  
onCreate() | Ability第一次启动创建Ability时调用onCreate方法，开发者可以在该方法里做一些应用初始化工作。  
onInactive() | Ability失去焦点时调用onInactive方法，Ability在进入后台状态时会先失去焦点，再进入后台。  
onActive() | Ability切换到前台，并且已经获取焦点时调用onActive方法。  
  
**示例**

开发者需要重写app.js/app.ets中相关生命周期回调函数，IDE模板默认生成onCreate()和onDestroy()方法，其他方法需要开发者自行实现。
    
    export default {
      onCreate() {
        console.info('Application onCreate')
      },
      onDestroy() {
        console.info('Application onDestroy')
      },
      onShow(){
        console.info('Application onShow')
      },
      onHide(){
        console.info('Application onHide')
      },
      onInactive(){
        console.info('Application onInactive')
      },
      onActive(){
        console.info('Application onActive')
      },
    }

#### 相关实例

针对PageAbility的开发，有以下Codelabs可供参考：

     * [分布式鉴权（JS）](https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/HarmonyOS-GameAuth)

基于FeatureAbility分布式拉起FA机制，实现鉴权功能。

     * [分布式新闻客户端（JS）](https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/HarmonyOS-DistributeNewsJS)

基于兼容JS的类Web开发范式，使用HarmonyOS应用中Service Ability和Page Ability，实现跨设备FA拉起。

     * [分布式新闻客户端（ArkTS）](https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/HarmonyOS-DistributeNewsETS)

基于HarmonyOS ArkUI，使用HarmonyOS应用中Service Ability和Page Ability，实现跨设备FA拉起。
