---
name: document/cn/doc-references/laneinfohelper-0000001218076477
title: LaneInfoHelper
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/laneinfohelper-0000001218076477
source: portal
---

# LaneInfoHelper

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.agp.components.listcomponent.LaneInfoHelper
    
    public abstract class LaneInfoHelper
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
  
A helper abstract class that manages lane information in the [ListGridLayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listgridlayoutmanager-0000001172398150).

**Since:**

7

#### Nested Class Summary

Modifier and Type | Class | Description  
---|---|---  
protected static class | [LaneInfoHelper.LaneInfoHelperCleaner](https://developer.harmonyos.com/cn/docs/documentation/doc-references/laneinfohelper_laneinfohelpercleaner-0000001172238176) | Implements the release of the local [LaneInfoHelper](https://developer.harmonyos.com/cn/docs/documentation/doc-references/laneinfohelper-0000001218076477) object.  
  
#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
protected long | [mNativePtr](https://developer.harmonyos.com/cn/docs/documentation/doc-references/laneinfohelper-0000001218076477#ZH-CN_TOPIC_0000001218076477__mNativePtr) | Obtains the native object.  
  
#### Constructor Summary

Constructor | Description  
---|---  
[LaneInfoHelper](https://developer.harmonyos.com/cn/docs/documentation/doc-references/laneinfohelper-0000001218076477#ZH-CN_TOPIC_0000001218076477__LaneInfoHelper--)​() | A constructor used to create a LaneInfoHelper object.  
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
abstract int | [getLaneCountAt](https://developer.harmonyos.com/cn/docs/documentation/doc-references/laneinfohelper-0000001218076477#ZH-CN_TOPIC_0000001218076477__getLaneCountAt-int-)​(int position) | Obtains the number of lanes occupied by the component at the specified position.  
int | [getLaneIndex](https://developer.harmonyos.com/cn/docs/documentation/doc-references/laneinfohelper-0000001218076477#ZH-CN_TOPIC_0000001218076477__getLaneIndex-int-int-)​(int position, int laneCount) | Obtains the lane index of the component at the specified position.  
int | [getLaneSetIndex](https://developer.harmonyos.com/cn/docs/documentation/doc-references/laneinfohelper-0000001218076477#ZH-CN_TOPIC_0000001218076477__getLaneSetIndex-int-int-)​(int providerPosition, int laneCount) | Obtains the lane set index of the component at the specified position.  
long | [getNativePtr](https://developer.harmonyos.com/cn/docs/documentation/doc-references/laneinfohelper-0000001218076477#ZH-CN_TOPIC_0000001218076477__getNativePtr--)​() | Obtains the native object.  
boolean | [isLaneIndexCacheAllowed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/laneinfohelper-0000001218076477#ZH-CN_TOPIC_0000001218076477__isLaneIndexCacheAllowed--)​() | Checks whether the lane indices can be cached.  
boolean | [isLaneSetIndexCacheAllowed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/laneinfohelper-0000001218076477#ZH-CN_TOPIC_0000001218076477__isLaneSetIndexCacheAllowed--)​() | Checks whether the lane set indices can be cached.  
void | [setLaneGroupIndexCacheAllowed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/laneinfohelper-0000001218076477#ZH-CN_TOPIC_0000001218076477__setLaneGroupIndexCacheAllowed-boolean-)​(boolean cacheLaneGroupIndices) | Sets whether the lane set indices can be cached.  
void | [setLaneIndexCacheAllowed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/laneinfohelper-0000001218076477#ZH-CN_TOPIC_0000001218076477__setLaneIndexCacheAllowed-boolean-)​(boolean cacheLaneIndices) | Sets whether the lane indices can be cached.  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]mNativePtr

protected long mNativePtr

Obtains the native object.

#### Constructor Detail

#### [h2]LaneInfoHelper

public LaneInfoHelper​()

A constructor used to create a LaneInfoHelper object.

**Since:**

7

#### Method Detail

#### [h2]getLaneCountAt

public abstract int getLaneCountAt​(int position)

Obtains the number of lanes occupied by the component at the specified position.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
position | Indicates the position of the component in the provider.  
  
**Returns:**

Returns the number of lanes.

**Since:**

7

#### [h2]getLaneIndex

public int getLaneIndex​(int position, int laneCount)

Obtains the lane index of the component at the specified position.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
position | Indicates the position of the component in the provider.  
laneCount | Indicates the total number of lanes in the grid.  
  
**Returns:**

Returns the lane index.

**Since:**

7

#### [h2]getLaneSetIndex

public int getLaneSetIndex​(int providerPosition, int laneCount)

Obtains the lane set index of the component at the specified position.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
providerPosition | Indicates the position of the component in the provider.  
laneCount | Indicates the total number of lanes in the grid.  
  
**Returns:**

Returns the lane set index.

**Since:**

7

#### [h2]setLaneIndexCacheAllowed

public void setLaneIndexCacheAllowed​(boolean cacheLaneIndices)

Sets whether the lane indices can be cached.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
cacheLaneIndices | Specifies whether the lane indices can be cached. The value true means that the lane indices can be cached, and false means the opposite.  
  
**Since:**

7

#### [h2]isLaneIndexCacheAllowed

public boolean isLaneIndexCacheAllowed​()

Checks whether the lane indices can be cached.

**Returns:**

Returns true if the lane indices can be cached; returns false otherwise.

**Since:**

7

#### [h2]setLaneGroupIndexCacheAllowed

public void setLaneGroupIndexCacheAllowed​(boolean cacheLaneGroupIndices)

Sets whether the lane set indices can be cached.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
cacheLaneGroupIndices | Specifies whether the lane set indices can be cached. The value true means that the lane set indices can be cached, and false means the opposite.  
  
**Since:**

7

#### [h2]isLaneSetIndexCacheAllowed

public boolean isLaneSetIndexCacheAllowed​()

Checks whether the lane set indices can be cached.

**Returns:**

Returns true if the lane set indices can be cached; returns false otherwise.

**Since:**

7

#### [h2]getNativePtr

public long getNativePtr​()

Obtains the native object.

**Returns:**

Returns the native object.
