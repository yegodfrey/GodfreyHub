---
name: document/cn/doc-references/liststaggeredgridlayoutmanager-0000001172556704
title: ListStaggeredGridLayoutManager
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/liststaggeredgridlayoutmanager-0000001172556704
source: portal
---

# ListStaggeredGridLayoutManager

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.agp.components.LayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layoutmanager-0000001071295543) |---|---[ohos.agp.components.listcomponent.ListLayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listlayoutmanager-0000001218076479) |---|---|---ohos.agp.components.listcomponent.ListStaggeredGridLayoutManager
    
    public class ListStaggeredGridLayoutManager
    extends [ListLayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listlayoutmanager-0000001218076479)  
  
---  
  
Inherits from [ListLayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listlayoutmanager-0000001218076479) and implements the masonry layout of the ListComponent.

**Since:**

7

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [GAP_HANDLING_MOVE_ITEMS_BETWEEN_SPANS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__GAP_HANDLING_MOVE_ITEMS_BETWEEN_SPANS) | Indicates the rule for processing the gap between components in the ListComponent.  
static int | [GAP_HANDLING_NONE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__GAP_HANDLING_NONE) | Indicates no processing on the gap.  
static int | [HORIZONTAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__HORIZONTAL) | Indicates that the components are arranged horizontally in the ListComponent.  
static int | [VERTICAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__VERTICAL) | Indicates that the components are arranged vertically in the ListComponent.  
  
#### Constructor Summary

Constructor | Description  
---|---  
[ListStaggeredGridLayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__ListStaggeredGridLayoutManager--)​() | Default constructor used to create a ListStaggeredGridLayoutManager instance.  
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
protected void | [createNativePtr](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__createNativePtr--)​() |     
int | [getGapProcessingStrategy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__getGapProcessingStrategy--)​() | Obtains the gap processing strategy of this ListStaggeredGridLayoutManager instance.  
int | [getLaneCount](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__getLaneCount--)​() | Obtains the number of lanes in the layout.  
int | [getLayoutOrientation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__getLayoutOrientation--)​() | Obtains the layout orientation.  
boolean | [getReverseLayoutChild](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__getReverseLayoutChild--)​() | Checks whether the components need to be laid out in the reverse direction.  
void | [scrollToPositionWithDelta](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__scrollToPositionWithDelta-int-int-)​(int position, int delta) | Scrolls the ListComponent to the specified position in the provider based on a given distance.  
int[] | [searchFirstFullyShowItemPositions](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__searchFirstFullyShowItemPositions-int:A-)​(int[] into) | Obtains the position of the first completely visible component in each lane in the provider.  
int[] | [searchFirstShowItemPositions](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__searchFirstShowItemPositions-int:A-)​(int[] into) | Obtains the position of the first visible component in each lane in the provider.  
int[] | [searchLastFullyShowItemPositions](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__searchLastFullyShowItemPositions-int:A-)​(int[] into) | Obtains the position of the last completely visible component in each lane in the provider.  
int[] | [searchLastShowItemPositions](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__searchLastShowItemPositions-int:A-)​(int[] into) | Obtains the position of the last visible component in each lane in the provider.  
void | [setGapProcessingStrategy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__setGapProcessingStrategy-int-)​(int gapProcessingStrategy) | Sets a gap processing strategy for this ListStaggeredGridLayoutManager instance.  
void | [setLaneCount](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__setLaneCount-int-)​(int laneCount) | Sets the number of lanes for the layout.  
void | [setLayoutOrientation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__setLayoutOrientation-int-)​(int orientation) | Sets the layout orientation.  
void | [setReverseLayoutChild](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__setReverseLayoutChild-boolean-)​(boolean reverseLayout) | Sets whether to lay out the components in the reverse direction.  
  
Methods inherited from class ohos.agp.components.listcomponent.[ListLayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listlayoutmanager-0000001218076479)  
---  
[allowScrollHorizontally](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listlayoutmanager-0000001218076479#ZH-CN_TOPIC_0000001218076479__allowScrollHorizontally--), [allowScrollVertically](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listlayoutmanager-0000001218076479#ZH-CN_TOPIC_0000001218076479__allowScrollVertically--), [getOrientation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listlayoutmanager-0000001218076479#ZH-CN_TOPIC_0000001218076479__getOrientation--), [isPreloadWorkerEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listlayoutmanager-0000001218076479#ZH-CN_TOPIC_0000001218076479__isPreloadWorkerEnabled--), [isScrollingSmoothly](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listlayoutmanager-0000001218076479#ZH-CN_TOPIC_0000001218076479__isScrollingSmoothly--), [setOrientation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listlayoutmanager-0000001218076479#ZH-CN_TOPIC_0000001218076479__setOrientation-int-), [setPreloadWorkerEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listlayoutmanager-0000001218076479#ZH-CN_TOPIC_0000001218076479__setPreloadWorkerEnabled-boolean-)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]GAP_HANDLING_MOVE_ITEMS_BETWEEN_SPANS

public static final int GAP_HANDLING_MOVE_ITEMS_BETWEEN_SPANS

Indicates the rule for processing the gap between components in the ListComponent. The rule is as follows: [before] _BC DDD [after] BCD DD_

**Since:**

7

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_listcomponent_ListStaggeredGridLayoutManager_GAP_HANDLING_MOVE_ITEMS_BETWEEN_SPANS)

#### [h2]GAP_HANDLING_NONE

public static final int GAP_HANDLING_NONE

Indicates no processing on the gap.

**Since:**

7

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_listcomponent_ListStaggeredGridLayoutManager_GAP_HANDLING_NONE)

#### [h2]HORIZONTAL

public static final int HORIZONTAL

Indicates that the components are arranged horizontally in the ListComponent.

**Since:**

7

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_listcomponent_ListStaggeredGridLayoutManager_HORIZONTAL)

#### [h2]VERTICAL

public static final int VERTICAL

Indicates that the components are arranged vertically in the ListComponent.

**Since:**

7

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_listcomponent_ListStaggeredGridLayoutManager_VERTICAL)

#### Constructor Detail

#### [h2]ListStaggeredGridLayoutManager

public ListStaggeredGridLayoutManager​()

Default constructor used to create a ListStaggeredGridLayoutManager instance.

**Since:**

7

#### Method Detail

#### [h2]setGapProcessingStrategy

public void setGapProcessingStrategy​(int gapProcessingStrategy)

Sets a gap processing strategy for this ListStaggeredGridLayoutManager instance.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
gapProcessingStrategy | Indicates the gap processing strategy to set, which can be [GAP_HANDLING_MOVE_ITEMS_BETWEEN_SPANS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__GAP_HANDLING_MOVE_ITEMS_BETWEEN_SPANS) or [GAP_HANDLING_NONE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__GAP_HANDLING_NONE)。  
  
**Since:**

7

#### [h2]getGapProcessingStrategy

public int getGapProcessingStrategy​()

Obtains the gap processing strategy of this ListStaggeredGridLayoutManager instance.

**Returns:**

Returns the gap processing strategy.

**Since:**

7

#### [h2]searchLastShowItemPositions

public int[] searchLastShowItemPositions​(int[] into)

Obtains the position of the last visible component in each lane in the provider.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
into | Indicates the array for storing the positions. If this parameter is set to null, the ListLayoutManager will create an array.  
  
**Returns:**

Returns the positions of these components in all lanes in the provider.

**Since:**

7

#### [h2]searchLastFullyShowItemPositions

public int[] searchLastFullyShowItemPositions​(int[] into)

Obtains the position of the last completely visible component in each lane in the provider.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
into | Indicates the array for storing the positions. If this parameter is set to null, the ListLayoutManager will create an array.  
  
**Returns:**

Returns the positions of these components in all lanes in the provider.

**Since:**

7

#### [h2]searchFirstShowItemPositions

public int[] searchFirstShowItemPositions​(int[] into)

Obtains the position of the first visible component in each lane in the provider.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
into | Indicates the array for storing the positions. If this parameter is set to null, the ListLayoutManager will create an array.  
  
**Returns:**

Returns the positions of these components in all lanes in the provider.

**Since:**

7

#### [h2]searchFirstFullyShowItemPositions

public int[] searchFirstFullyShowItemPositions​(int[] into)

Obtains the position of the first completely visible component in each lane in the provider.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
into | Indicates the array for storing the positions. If this parameter is set to null, the ListLayoutManager will create an array.  
  
**Returns:**

Returns the positions of these components in all lanes in the provider.

**Since:**

7

#### [h2]setLaneCount

public void setLaneCount​(int laneCount)

Sets the number of lanes for the layout.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
laneCount | Indicates the number of lanes to set.  
  
**Since:**

7

#### [h2]getLaneCount

public int getLaneCount​()

Obtains the number of lanes in the layout.

**Returns:**

Returns the number of lanes.

**Since:**

7

#### [h2]setReverseLayoutChild

public void setReverseLayoutChild​(boolean reverseLayout)

Sets whether to lay out the components in the reverse direction.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
reverseLayout | Specifies whether to lay out the components in the reverse direction. The value true means to lay out the components in the reverse direction, and false means the opposite.  
  
**Since:**

7

#### [h2]getReverseLayoutChild

public boolean getReverseLayoutChild​()

Checks whether the components need to be laid out in the reverse direction.

**Returns:**

Returns true if the components need to be laid out in the reverse direction; returns false otherwise.

**Since:**

7

#### [h2]setLayoutOrientation

public void setLayoutOrientation​(int orientation)

Sets the layout orientation.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
orientation | Indicates the layout orientation to set, which can be [HORIZONTAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__HORIZONTAL) or [VERTICAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__VERTICAL).  
  
**Since:**

7

#### [h2]getLayoutOrientation

public int getLayoutOrientation​()

Obtains the layout orientation.

**Returns:**

Returns the layout orientation, which can be [HORIZONTAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__HORIZONTAL) or [VERTICAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststaggeredgridlayoutmanager-0000001172556704#ZH-CN_TOPIC_0000001172556704__VERTICAL).

**Since:**

7

#### [h2]scrollToPositionWithDelta

public void scrollToPositionWithDelta​(int position, int delta)

Scrolls the ListComponent to the specified position in the provider based on a given distance.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
position | Indicates the position to scroll to.  
delta | Indicates the distance (in pixels) between the component's start edge and the start edge of the ListComponent.  
  
**Since:**

7

#### [h2]createNativePtr

protected void createNativePtr​()
