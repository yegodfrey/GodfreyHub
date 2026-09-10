---
name: document/cn/AppGallery-connect-References/gameobe-updateroominfo-server-ts-0000001494320540
title: UpdateRoomInfo
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gameobe-updateroominfo-server-ts-0000001494320540
---

# UpdateRoomInfo

|Interface Info|
|:----------------------------------------|
|export interface UpdateRoomInfo 可更新的房间信息。|

#### Property Summary

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20241128105404.68237212542344989281324601523869:50001231000000:2800:EFF1E6E8934DE2AEB9AE5C2F4FB412B16199F4B25A2B011CC45318166B82862F.png?needInitFileName=true?needInitFileName=true)  
以下字段均为非必填字段，为空时则不修改该项属性。  

|Name|Type|Mandatory/Optional|Description|
|:-------------------|:-----|:-----------------|:---------------------------------|
|ownerId|string|Optional|房间房主ID。|
|isPrivate|number|Optional|房间是否私有。 * 0：公开 * 1：私有|
|customRoomProperties|string|Optional|自定义的房间属性。|
|isLock|number|Optional|房间是否锁定，锁定状态不允许加入房间。 * 0：非锁定 * 1：锁定|
|roomName|string|Optional|房间名称。|
|roomType|string|Optional|房间类型。|

