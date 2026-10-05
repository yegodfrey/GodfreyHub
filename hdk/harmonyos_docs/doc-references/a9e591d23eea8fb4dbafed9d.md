---
name: document/cn/doc-references/liststate-0000001218157991
title: ListState
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/liststate-0000001218157991
source: portal
---

# ListState

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.agp.components.listcomponent.ListState
    
    public class ListState
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
  
Implements the storage of various state information of the ListComponent. This class provides the information for internal submodules of the ListComponent to use as the status context.

**Since:**

7

#### Constructor Summary

Constructor | Description  
---|---  
[ListState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__ListState--)​() |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
int | [getDeletedNotLaidItemCountSincePreviousLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__getDeletedNotLaidItemCountSincePreviousLayout--)​() | Obtains the number of components that are not laid out but have been deleted from the provider after the previous layout.  
long | [getFocusedListItemId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__getFocusedListItemId--)​() | Obtains the ID of the component that gains focus.  
int | [getFocusedListItemPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__getFocusedListItemPosition--)​() | Obtains the position of the component that gains focus.  
int | [getFocusedSubChildViewId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__getFocusedSubChildViewId--)​() | Obtains the ID of the child component that gains focus.  
int | [getLayoutStateStep](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__getLayoutStateStep--)​() | Obtains the layout state of the ListComponent.  
int | [getListItemCount](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__getListItemCount--)​() | Obtains the number of components in the provider.  
int | [getPreviousLaidLayoutItemCount](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__getPreviousLaidLayoutItemCount--)​() | Obtains the number of components in the provider in the previous layout.  
int | [getSurplusScrollHorizontal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__getSurplusScrollHorizontal--)​() | Obtains the remaining horizontal distance to scroll for the animation that is being scrolled.  
int | [getSurplusScrollVertical](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__getSurplusScrollVertical--)​() | Obtains the remaining vertical distance to scroll for the animation that is being scrolled.  
int | [getTargetScrollPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__getTargetScrollPosition--)​() | Obtains the position to which the component is scrolled.  
boolean | [isDateSetStructureModified](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__isDateSetStructureModified--)​() | Checks whether data changes after the last layout.  
boolean | [isInListMeasuringState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__isInListMeasuringState--)​() | Checks whether this ListComponent is measuring the layout.  
boolean | [isInPreLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__isInPreLayout--)​() | Checks whether the ListComponent is in pre-layout state.  
boolean | [isOperaSimpleAnimations](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__isOperaSimpleAnimations--)​() | Checks whether this ListComponent runs simple animations during layout.  
boolean | [isTrackOldChangeOwner](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__isTrackOldChangeOwner--)​() | Checks whether to trace the original ComponentOwner if data changes and the change animation is executed.  
boolean | [willOperaPredictiveAnimations](https://developer.harmonyos.com/cn/docs/documentation/doc-references/liststate-0000001218157991#ZH-CN_TOPIC_0000001218157991__willOperaPredictiveAnimations--)​() | Checks whether this ListComponent runs predictive animations during layout and pre-process the animations in the pre-layout phase.  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]ListState

public ListState​()

#### Method Detail

#### [h2]getTargetScrollPosition

public int getTargetScrollPosition​()

Obtains the position to which the component is scrolled.

**Returns:**

Returns the position of the component in the provider.

**Since:**

7

#### [h2]getPreviousLaidLayoutItemCount

public int getPreviousLaidLayoutItemCount​()

Obtains the number of components in the provider in the previous layout.

**Returns:**

Returns the number of components.

**Since:**

7

#### [h2]getDeletedNotLaidItemCountSincePreviousLayout

public int getDeletedNotLaidItemCountSincePreviousLayout​()

Obtains the number of components that are not laid out but have been deleted from the provider after the previous layout.

**Returns:**

Returns the number of components.

**Since:**

7

#### [h2]getLayoutStateStep

public int getLayoutStateStep​()

Obtains the layout state of the ListComponent.

**Returns:**

Returns the layout state.

**Since:**

7

#### [h2]getListItemCount

public int getListItemCount​()

Obtains the number of components in the provider.

**Returns:**

Returns the number of components.

**Since:**

7

#### [h2]isDateSetStructureModified

public boolean isDateSetStructureModified​()

Checks whether data changes after the last layout.

**Returns:**

Returns true if the data changes; returns false otherwise.

**Since:**

7

#### [h2]isInPreLayout

public boolean isInPreLayout​()

Checks whether the ListComponent is in pre-layout state.

**Returns:**

Returns true if the ListComponent is in pre-layout state; returns false otherwise.

**Since:**

7

#### [h2]isTrackOldChangeOwner

public boolean isTrackOldChangeOwner​()

Checks whether to trace the original ComponentOwner if data changes and the change animation is executed.

**Returns:**

Returns true if the original ComponentOwner needs to be traced; returns false otherwise.

**Since:**

7

#### [h2]isInListMeasuringState

public boolean isInListMeasuringState​()

Checks whether this ListComponent is measuring the layout.

**Returns:**

Returns true if the ListComponent is measuring the layout; returns false otherwise.

**Since:**

7

#### [h2]isOperaSimpleAnimations

public boolean isOperaSimpleAnimations​()

Checks whether this ListComponent runs simple animations during layout.

**Returns:**

Returns true if the ListComponent runs simple animations during layout; returns false otherwise.

**Since:**

7

#### [h2]willOperaPredictiveAnimations

public boolean willOperaPredictiveAnimations​()

Checks whether this ListComponent runs predictive animations during layout and pre-process the animations in the pre-layout phase.

**Returns:**

Returns true if the ListComponent runs predictive animations during layout and pre-process the animations in the pre-layout phase; returns false otherwise.

**Since:**

7

#### [h2]getFocusedListItemPosition

public int getFocusedListItemPosition​()

Obtains the position of the component that gains focus.

**Returns:**

Returns the position.

**Since:**

7

#### [h2]getFocusedListItemId

public long getFocusedListItemId​()

Obtains the ID of the component that gains focus.

**Returns:**

Returns the component ID.

**Since:**

7

#### [h2]getFocusedSubChildViewId

public int getFocusedSubChildViewId​()

Obtains the ID of the child component that gains focus.

**Returns:**

Returns the ID of the child component. The default value is 0.

**Since:**

7

#### [h2]getSurplusScrollHorizontal

public int getSurplusScrollHorizontal​()

Obtains the remaining horizontal distance to scroll for the animation that is being scrolled.

**Returns:**

Returns the remaining horizontal distance to scroll, in pixels. The default value is 0.

**Since:**

7

#### [h2]getSurplusScrollVertical

public int getSurplusScrollVertical​()

Obtains the remaining vertical distance to scroll for the animation that is being scrolled.

**Returns:**

Returns the remaining vertical distance to scroll, in pixels. The default value is 0.

**Since:**

7
