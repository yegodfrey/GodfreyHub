---
name: document/cn/harmonyos-references/capi-clouddisk-clouddisk-filesyncstate
title: CloudDisk_FileSyncState
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk-clouddisk-filesyncstate
---

# CloudDisk_FileSyncState

> 2in1 21+ | tablet 21+

```c
typedef struct CloudDisk_FileSyncState {...} CloudDisk_FileSyncState
```

## 概述

文件的同步状态。

**起始版本：** 21

**相关模块：** [CloudDisk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk)

**所在头文件：** [oh_cloud_disk_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-cloud-disk-manager-h)

## 汇总

### 成员变量

|名称|描述|
|:--------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
|[CloudDisk_PathInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk-clouddisk-pathinfo) filePathInfo|文件的路径信息。|
|[CloudDisk_SyncState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-cloud-disk-manager-h#clouddisk_syncstate) syncState|文件的同步状态。|

