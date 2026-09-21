---
name: document/cn/Media-References/hae3dremixsettingbuilder-0000001409424400
title: HAE3DRemixSetting.Builder
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/hae3dremixsettingbuilder-0000001409424400
---

# HAE3DRemixSetting.Builder

|Class Info|
|:-------------------------------------------------------|
|public static class HAE3DRemixSetting.Builder 空间效果设置构造器。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[HAE3DRemixSetting](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hae3dremixsetting-0000001459213949)|[build](#section1560976123012)() 创建空间效果设置实例。|
|HAE3DRemixSetting.Builder|[setRemixOutDir](#section1353074317116)(String remixOutDir) 设置输出的空间效果文件保存目录，不包含文件名。|
|HAE3DRemixSetting.Builder|[setRemixOutName](#section1155625817910)(String remixOutName) 设置输出的空间效果文件名，不包含目录信息。|
|HAE3DRemixSetting.Builder|[setRemixPath](#section1630446183619)(String remixPath) 设置需要生成空间效果的原始音频绝对路径。|
|HAE3DRemixSetting.Builder|[setRemixType](#section13105194918144)([HAE3DRemixSetting.RemixType](https://developer.huawei.com/consumer/cn/doc/development/Media-References/remixtype-0000001459534117) remixType) 设置需要生成的空间效果类型。|

## Public Methods

### build

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HAE3DRemixSetting](https://developer.huawei.com/consumer/cn/doc/development/Media-References/hae3dremixsetting-0000001459213949) build() 创建空间效果设置实例。|

**Returns**

|Type|Description|
|:----------------|:----------|
|HAE3DRemixSetting|空间效果设置实例。|

### setRemixOutDir

|Method|
|:------------------------------------------------------------------------------------------|
|public HAE3DRemixSetting.Builder setRemixOutDir(String remixOutDir) 设置输出的空间效果文件保存目录，不包含文件名。|

**Returns**

|Type|Description|
|:------------------------|:----------|
|HAE3DRemixSetting.Builder|空间效果设置生成器。|

### setRemixOutName

|Method|
|:------------------------------------------------------------------------------------------|
|public HAE3DRemixSetting.Builder setRemixOutName(String remixOutName) 设置输出的空间效果文件名，不包含目录信息。|

**Returns**

|Type|Description|
|:------------------------|:----------|
|HAE3DRemixSetting.Builder|空间效果设置生成器。|

### setRemixPath

|Method|
|:-----------------------------------------------------------------------------------|
|public HAE3DRemixSetting.Builder setRemixPath(String remixPath) 设置需要生成空间效果的原始音频绝对路径。|

**Returns**

|Type|Description|
|:------------------------|:----------|
|HAE3DRemixSetting.Builder|空间效果设置生成器。|

### setRemixType

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public HAE3DRemixSetting.Builder setRemixType([HAE3DRemixSetting.RemixType](https://developer.huawei.com/consumer/cn/doc/development/Media-References/remixtype-0000001459534117) remixType) 设置需要生成的空间效果类型。|

**Returns**

|Type|Description|
|:------------------------|:----------|
|HAE3DRemixSetting.Builder|空间效果设置生成器。|

