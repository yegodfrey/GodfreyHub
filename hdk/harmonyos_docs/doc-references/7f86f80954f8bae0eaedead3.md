---
name: document/cn/doc-references/overview-0000001070592399
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/overview-0000001070592399
source: portal
---

# Overview  
  
Provides interfaces and classes to implement watch tiles. 

To create a tile, you need to extend the [TileAbility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tileability-0000001070942146) class and implement [TileAbility.onStatusChanged(TileStatus)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tileability-0000001070942146#ZH-CN_TOPIC_0000001070942146__onStatusChanged-ohos_wearable_tile_TileStatus-) to return a TileEntity object as defined.

**Since:**

4

#### Class Summary

Class | Description  
---|---  
[TileAbility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tileability-0000001070942146) | A base class for implementing a tile.  
[TileAnimationData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tileanimationdata-0000001070712297) | Provides information about a frame animation.  
[TileAnimationData.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tileanimationdata_builder-0000001071390624) | A builder class for TileAnimationData objects.  
[TileEntity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tileentity-0000001071550216) | Provides methods related to a TileEntity object.  
[TileEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tileentity_builder-0000001071710184) | A builder class for TileEntity objects holding the tile content.  
  
#### Enum Summary

Enum | Description  
---|---  
[TileStatus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tilestatus-0000001071142011) | Enumerates states of a tile.
