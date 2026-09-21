---
name: document/cn/Media-References/haeuimanager-0000001157086697
title: HAEUIManager
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/haeuimanager-0000001157086697
---

# HAEUIManager

|Class Info|
|:-------------------------------------------|
|public class HAEUIManager 导入音频，进入音频编辑主界面管理类。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|String|[copyProjectById](#section56672492579)(String draftId, String newDraftName, [DraftCallback](https://developer.huawei.com/consumer/cn/doc/development/Media-References/draftcallback-0000001378864836) callback) 复制草稿。|
|int|[deleteDrafts](#section49122111312)(List<String> draftIds, [DraftCallback](https://developer.huawei.com/consumer/cn/doc/development/Media-References/draftcallback-0000001378864836) callback) 根据DraftId删除草稿工程。|
|List<[DraftInfo](https://developer.huawei.com/consumer/cn/doc/development/Media-References/draftinfo-0000001429093269)>|[getDraftList](#section35461827717)() 获取草稿列表。|
|static HAEUIManager|[getInstance](#section527915352916)() 用于返回HAEUIManager实例对象。|
|void|[launchEditorActivity](#section078023863016)(Context context) 启动音频编辑主界面。|
|void|[launchEditorActivity](#section10919174513377)(Context context, [AudioEditorLaunchOption](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioeditorlaunchoption-0000001231041500) option) 启动音频编辑主界面（默认不开启草稿）。|
|void|[launchEditorActivity](#section56826492116)(Context context, [AudioEditorLaunchOption](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioeditorlaunchoption-0000001231041500) option, [LaunchCallback](https://developer.huawei.com/consumer/cn/doc/development/Media-References/launchcallback-0000001379024392) callback) 启动音频编辑主界面。|
|void|[setCallback](#section380118122309)([AudioExportCallBack](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioexportcallback-0000001219652057) callBack) 设置导出侦听。|
|boolean|[updateProjectName](#section12140194418110)(String draftId, String newName, [DraftCallback](https://developer.huawei.com/consumer/cn/doc/development/Media-References/draftcallback-0000001378864836) callback) 更新草稿名称。|

## Public Methods

### copyProjectById

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public String copyProjectById(String draftId, String newDraftName, [DraftCallback](https://developer.huawei.com/consumer/cn/doc/development/Media-References/draftcallback-0000001378864836) callback) 复制草稿。 > 注意 > 草稿数量的最大数量是300，超过后不会保存草稿，并提示"The number of drafts has reached the upper limit, please clear in time"。|

**Parameters**

|Name|Description|
|:-----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|draftId|原草稿ID。|
|newDraftName|新草稿的名称，允许为空字串或null，此时使用*原草稿名-副本*命名。 * 草稿ID必须是32位的数字或字母或二者混合。 * 草稿名称不能超过30个字符，并且不能包含特殊字符（**\** 、**/** 、**?** 、**:** 、***** 、**<** 、**"** 、**>** 、**|**），复制后不判断重名。|
|callback|草稿回调函数。|

**Return**

|Name|Description|
|:-----|:----------|
|String|复制后的草稿ID。|

### deleteDrafts

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public int deleteDrafts(List<String> draftIds, [DraftCallback](https://developer.huawei.com/consumer/cn/doc/development/Media-References/draftcallback-0000001378864836) callback) 根据DraftId列表删除草稿工程。|

**Parameters**

|Name|Description|
|:-------|:-----------|
|draftIds|需要删除的草稿ID列表。|
|callback|草稿回调函数。|

**Return**

|Name|Description|
|:---|:----------|
|int|返回删除的草稿数量。|

### getDraftList

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|
|public List<[DraftInfo](https://developer.huawei.com/consumer/cn/doc/development/Media-References/draftinfo-0000001429093269)> getDraftList() 获取草稿列表。|

**Return**

|Name|Description|
|:----------------------------------------------------------------------------------------------------------------------|:----------|
|List<[DraftInfo](https://developer.huawei.com/consumer/cn/doc/development/Media-References/draftinfo-0000001429093269)>|返回草稿列表。|

### getInstance

|Method|
|:-------------------------------------------------------------|
|public static HAEUIManager getInstance() 用于返回HAEUIManager实例对象。|

**Returns**

|Type|Description|
|:-----------|:----------|
|HAEUIManager|获取单例对象。|

### launchEditorActivity(Context context)

|Method|
|:-----------------------------------------------------------|
|public void launchEditorActivity(Context context) 启动音频编辑主界面。|

**Parameters**

|Name|Description|
|:------|:--------------|
|context|Activity类型的上下文。|

### launchEditorActivity(Context context, AudioEditorLaunchOption option)

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void launchEditorActivity(Context context, [AudioEditorLaunchOption](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioeditorlaunchoption-0000001231041500) option) 启动音频编辑主界面（默认不开启草稿）。|

**Parameters**

|Name|Description|
|:------|:--------------|
|context|Activity类型的上下文。|
|option|参数类。|

**Throws**

|Name|Description|
|:----------|:------------|
|IOException|音频文件导出路径读写异常。|

### launchEditorActivity(Context context, AudioEditorLaunchOption option, LaunchCallback callback)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void launchEditorActivity(Context context, [AudioEditorLaunchOption](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioeditorlaunchoption-0000001231041500) option, [LaunchCallback](https://developer.huawei.com/consumer/cn/doc/development/Media-References/launchcallback-0000001379024392) callback) 启动音频编辑主界面。|

**Parameters**

|Name|Description|
|:-------|:--------------|
|context|Activity类型的上下文。|
|option|参数类。|
|callback|启动页回调函数。|

**Throws**

|Name|Description|
|:----------|:------------|
|IOException|音频文件导出路径读写异常。|

### setCallback

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setCallback([AudioExportCallBack](https://developer.huawei.com/consumer/cn/doc/development/Media-References/audioexportcallback-0000001219652057) callBack) 设置导出侦听。|

**Parameters**

|Name|Description|
|:-------|:----------|
|callBack|导出回调。|

### updateProjectName

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean updateProjectName(String draftId, String newName, [DraftCallback](https://developer.huawei.com/consumer/cn/doc/development/Media-References/draftcallback-0000001378864836) callback) 更新草稿名称。|

**Parameters**

|Name|Description|
|:-------|:--------------------------------------------------------------------------------------------------------------------------|
|draftId|原草稿ID。|
|newName|新草稿的名称。 * 草稿ID必须是32位的数字或字母或二者混合。 * 草稿名称不能超过30个字符，并且不能包含特殊字符（**\** 、**/** 、**?** 、**:** 、***** 、**<** 、**"** 、**>** 、**|**）。|
|callback|草稿回调函数。|

**Returns**

|Type|Description|
|:------|:----------------------------|
|boolean|重命名是否成功： * true：成功 * false：失败|

