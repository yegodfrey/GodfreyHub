---
name: document/cn/graphics-References/good-culling-api-occluderdata-0000001205441269
title: OccluderData
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/good-culling-api-occluderdata-0000001205441269
---

# OccluderData

|Struct Info|
|:------------------|
|OccluderData 遮挡物信息。|

Parameters  

|Name|Description|
|:------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|
|void\*|boundBox 包围盒，默认值nullptr。|
|void\*|idxData 索引数据，默认值nullptr。|
|unsigned int|indCount 索引个数。|
|[IndexBufferType](https://developer.huawei.com/consumer/cn/doc/graphics-References/good-culling-api-indexbuffertype-0000001160319798)|type 索引数据类型。|
|unsigned int|vtxCount 顶点个数。|
|void\*|vtxData 顶点数据，默认值nullptr。|
|unsigned int|vtxOffset 顶点数据偏移量。|
|unsigned int|vtxStride 顶点属性组之间的偏移量。。|
|[BackFaceWinding](https://developer.huawei.com/consumer/cn/doc/graphics-References/good-culling-api-backfacewinding-0000001205639763)|winding 顶点方向。|

