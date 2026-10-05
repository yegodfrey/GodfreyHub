---
name: document/cn/doc-references/layerelement-0000001217996515
title: LayerElement
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/layerelement-0000001217996515
source: portal
---

# LayerElement

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.agp.components.element.Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705) |---|---ohos.agp.components.element.LayerElement
    
    public class LayerElement
    extends [Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705)  
  
---  
  
Provides an element that manages a list of other elements.

These elements are drawn in list order. Therefore, the element with the largest index will be drawn on the top of the layer. That element can be defined in an XML file with the <layer> xml-tag, and other elements in the LayerElement are defined in a nested <item> xml-tag. A LayerElement has its own bounds and padding that are common for all internal elements. Every internal element can also have its own bounds, inlays, and size. These properties allow you to position the internal elements within the LayerElement.

**Since:**

7

#### Nested Class Summary

Nested classes/interfaces inherited from class ohos.agp.components.element.[Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705)  
---  
[Element.ConstantState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element_constantstate-0000001054558727), [Element.OnBoundsChangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element_onboundschangelistener-0000001217996513), [Element.OnChangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element_onchangelistener-0000001060519070), [Element.OnLayoutDirectionChangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element_onlayoutdirectionchangelistener-0000001172716634), [Element.OnRankChangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element_onrankchangelistener-0000001172398138)  
  
#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [DEPENDENT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__DEPENDENT) | Indicates the mode used to nest each layer element inside the inlay of the previous element.  
static int | [INDEPENDENT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__INDEPENDENT) | Indicates the mode used to nest each layer element inside the inlay of the parent element.  
  
Fields inherited from class ohos.agp.components.element.[Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705)  
---  
[ALPHA_DEFAULT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__ALPHA_DEFAULT), [ALPHA_MAX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__ALPHA_MAX), [ALPHA_MIN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__ALPHA_MIN), [DEFAULT_BOUNDS_RECT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__DEFAULT_BOUNDS_RECT), [MAX_RANK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__MAX_RANK), [MIN_RANK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__MIN_RANK)  
  
#### Constructor Summary

Constructor | Description  
---|---  
[LayerElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__LayerElement--)​() | Default constructor used to create a LayerElement.  
[LayerElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__LayerElement-ohos_agp_components_element_Element:A-)​([Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705)[] elements) | A constructor used to create a LayerElement with a list of specified elements.  
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
int | [addElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__addElement-ohos_agp_components_element_Element-)​([Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705) element) | Adds an element to this LayerElement.  
int | [getCount](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--)​() | Obtains the number of elements within this LayerElement.  
[Optional](https://developer.harmonyos.com/cn/docs/documentation/doc-references/optional-0000001054558597)<[Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705)> | [getElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getElement-int-)​(int index) | Obtains the element with the specified index within this LayerElement.  
int | [getElementAlignment](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getElementAlignment-int-)​(int index) | Obtains the alignment used to position or stretch the specified element within its container.  
int | [getElementHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getElementHeight-int-)​(int index) | Obtains the explicit height of the specified element within this LayerElement.  
int | [getElementInlayBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getElementInlayBottom-int-)​(int index) | Obtains the inlay from the bottom bound of the specified element.  
int | [getElementInlayEnd](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getElementInlayEnd-int-)​(int index) | Obtains the inlay from the end bound of the specified element.  
int | [getElementInlayLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getElementInlayLeft-int-)​(int index) | Obtains the inlay from the left bound of the specified element.  
int | [getElementInlayRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getElementInlayRight-int-)​(int index) | Obtains the inlay from the right bound of the specified element.  
int | [getElementInlayStart](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getElementInlayStart-int-)​(int index) | Obtains the inlay from the start bound of the specified element.  
int | [getElementInlayTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getElementInlayTop-int-)​(int index) | Obtains the inlay from the top bound of the specified element.  
int | [getElementWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getElementWidth-int-)​(int index) | Obtains the explicit width of the specified element within this LayerElement.  
int | [getPaddingBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getPaddingBottom--)​() | Obtains the bottom padding of this LayerElement.  
int | [getPaddingEnd](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getPaddingEnd--)​() | Obtains the end padding of this LayerElement.  
int | [getPaddingLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getPaddingLeft--)​() | Obtains the left padding of this LayerElement.  
int | [getPaddingMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getPaddingMode--)​() | Obtains the padding mode of this LayerElement.  
int | [getPaddingRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getPaddingRight--)​() | Obtains the right padding of this LayerElement.  
int | [getPaddingStart](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getPaddingStart--)​() | Obtains the start padding of this LayerElement.  
int | [getPaddingTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getPaddingTop--)​() | Obtains the top padding of this LayerElement.  
[Optional](https://developer.harmonyos.com/cn/docs/documentation/doc-references/optional-0000001054558597)<[Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705)> | [getTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getTop--)​() | Obtains the top element within this LayerElement.  
int | [replaceElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__replaceElement-int-ohos_agp_components_element_Element-)​(int index, [Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705) element) | Replaces the element with the specified index within this LayerElement.  
boolean | [setElementAlignment](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__setElementAlignment-int-int-)​(int index, int alignment) | Sets the alignment used to position or stretch the specified element within its container.  
boolean | [setElementHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__setElementHeight-int-int-)​(int index, int height) | Sets an explicit height for the specified element within this LayerElement.  
boolean | [setElementInlay](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__setElementInlay-int-int-int-int-int-)​(int index, int left, int top, int right, int bottom) | Sets the inlay for the specified element within this LayerElement.  
boolean | [setElementInlayRtl](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__setElementInlayRtl-int-int-int-int-int-)​(int index, int start, int top, int end, int bottom) | Sets the relative inlay for the specified element.  
boolean | [setElementSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__setElementSize-int-int-int-)​(int index, int width, int height) | Sets an explicit width and height for the specified element within this LayerElement.  
boolean | [setElementWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__setElementWidth-int-int-)​(int index, int width) | Sets an explicit width for the specified element within this LayerElement.  
void | [setPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__setPadding-int-int-int-int-)​(int left, int top, int right, int bottom) | Sets the absolute padding for this LayerElement.  
void | [setPaddingMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__setPaddingMode-int-)​(int mode) | Sets the padding mode for this LayerElement.  
void | [setPaddingRtl](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__setPaddingRtl-int-int-int-int-)​(int start, int top, int end, int bottom) | Sets the relative padding for this LayerElement.  
  
Methods inherited from class ohos.agp.components.element.[Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705)  
---  
[clearColorMatrix](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__clearColorMatrix--), [drawToCanvas](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__drawToCanvas-ohos_agp_render_Canvas-), [getAlpha](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__getAlpha--), [getBounds](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__getBounds--), [getCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__getCallback--), [getColorMatrix](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__getColorMatrix--), [getCurrentElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__getCurrentElement--), [getHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__getHeight--), [getLayoutDirection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__getLayoutDirection--), [getMinHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__getMinHeight--), [getMinWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__getMinWidth--), [getPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__getPadding--), [getRank](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__getRank--), [getStateColorMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__getStateColorMode--), [getVisible](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__getVisible--), [getWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__getWidth--), [isInheritDirection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__isInheritDirection--), [isStateful](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__isStateful--), [isVisible](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__isVisible--), [release](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__release--), [setAlpha](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setAlpha-int-), [setBounds](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setBounds-int-int-int-int-), [setBounds](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setBounds-ohos_agp_utils_Rect-), [setCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setCallback-ohos_agp_components_element_Element_OnChangeListener-), [setColorMatrix](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setColorMatrix-ohos_agp_render_ColorMatrix-), [setInheritDirection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setInheritDirection-boolean-), [setLayoutDirection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setLayoutDirection-ohos_agp_components_Component_LayoutDirection-), [setOnBoundsChangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setOnBoundsChangeListener-ohos_agp_components_element_Element_OnBoundsChangeListener-), [setOnLayoutDirectionChangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setOnLayoutDirectionChangeListener-ohos_agp_components_element_Element_OnLayoutDirectionChangeListener-), [setOnRankChangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setOnRankChangeListener-ohos_agp_components_element_Element_OnRankChangeListener-), [setRank](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setRank-int-), [setStateColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setStateColor-ohos_agp_colors_StateColor-), [setStateColorList](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setStateColorList-int:A:A-int:A-), [setStateColorMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setStateColorMode-ohos_agp_render_BlendMode-), [setVisible](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__setVisible-boolean-boolean-), [skipAnimation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705#ZH-CN_TOPIC_0000001054358705__skipAnimation--)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]DEPENDENT

public static final int DEPENDENT

Indicates the mode used to nest each layer element inside the inlay of the previous element.

**Since:**

7

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_element_LayerElement_DEPENDENT)

#### [h2]INDEPENDENT

public static final int INDEPENDENT

Indicates the mode used to nest each layer element inside the inlay of the parent element.

**Since:**

7

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_element_LayerElement_INDEPENDENT)

#### Constructor Detail

#### [h2]LayerElement

public LayerElement​([Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705)[] elements)

A constructor used to create a LayerElement with a list of specified elements.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
elements | Indicates the array of elements to be added as internal items of this LayerElement.  
  
**Since:**

7

#### [h2]LayerElement

public LayerElement​()

Default constructor used to create a LayerElement.

**Since:**

7

#### Method Detail

#### [h2]addElement

public int addElement​([Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705) element)

Adds an element to this LayerElement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
element | Indicates the element to add.  
  
**Returns:**

Returns the index of the element if the operation is successful; returns -1 if the parameter is invalid.

**Since:**

7

#### [h2]replaceElement

public int replaceElement​(int index, [Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705) element)

Replaces the element with the specified index within this LayerElement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element to be replaced. The value must be in the range between 0 and [\- 1](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
element | Indicates the element to be used for the replacement.  
  
**Returns:**

Returns the index of the new element if the operation is successful; returns -1 if one of the parameters is invalid.

**Since:**

7

#### [h2]getElement

public [Optional](https://developer.harmonyos.com/cn/docs/documentation/doc-references/optional-0000001054558597)<[Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705)> getElement​(int index)

Obtains the element with the specified index within this LayerElement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
  
**Returns:**

Returns the element as an [Optional](https://developer.harmonyos.com/cn/docs/documentation/doc-references/optional-0000001054558597) object if the operation is successful; returns an empty [Optional](https://developer.harmonyos.com/cn/docs/documentation/doc-references/optional-0000001054558597) object if the parameter is invalid.

**Since:**

7

#### [h2]getTop

public [Optional](https://developer.harmonyos.com/cn/docs/documentation/doc-references/optional-0000001054558597)<[Element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/element-0000001054358705)> getTop​()

Obtains the top element within this LayerElement.

**Returns:**

Returns the top element as an [Optional](https://developer.harmonyos.com/cn/docs/documentation/doc-references/optional-0000001054558597) object if the operation is successful; returns an empty [Optional](https://developer.harmonyos.com/cn/docs/documentation/doc-references/optional-0000001054558597) object if the LayerElement is empty.

**Since:**

7

#### [h2]getCount

public int getCount​()

Obtains the number of elements within this LayerElement.

**Returns:**

Returns the number of elements.

**Since:**

7

#### [h2]setElementSize

public boolean setElementSize​(int index, int width, int height)

Sets an explicit width and height for the specified element within this LayerElement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
width | Indicates the width to set, in pixels. The value -1 means that the optimal width will be used.  
height | Indicates the height to set, in pixels. The value -1 means that the optimal height will be used.  
  
**Returns:**

Returns true if the operation is successful; returns false otherwise.

**Since:**

7

#### [h2]setElementWidth

public boolean setElementWidth​(int index, int width)

Sets an explicit width for the specified element within this LayerElement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
width | Indicates the width to set, in pixels. The value -1 means that the optimal width will be used.  
  
**Returns:**

Returns true if the operation is successful; returns false otherwise.

**Since:**

7

#### [h2]setElementHeight

public boolean setElementHeight​(int index, int height)

Sets an explicit height for the specified element within this LayerElement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
height | Indicates the height to set, in pixels. The value -1 means that the optimal height will be used.  
  
**Returns:**

Returns true if the operation is successful; returns false otherwise.

**Since:**

7

#### [h2]getElementWidth

public int getElementWidth​(int index)

Obtains the explicit width of the specified element within this LayerElement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
  
**Returns:**

Returns the explicit width of the element, in pixels, if the operation is successful; returns -1 otherwise.

**Since:**

7

#### [h2]getElementHeight

public int getElementHeight​(int index)

Obtains the explicit height of the specified element within this LayerElement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
  
**Returns:**

Returns the explicit height of the element, in pixels, if the operation is successful; returns -1 otherwise.

**Since:**

7

#### [h2]setElementAlignment

public boolean setElementAlignment​(int index, int alignment)

Sets the alignment used to position or stretch the specified element within its container.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
alignment | Indicates the alignment to set.  
  
**Returns:**

Returns true if the operation is successful; returns false otherwise.

**Since:**

7

#### [h2]getElementAlignment

public int getElementAlignment​(int index)

Obtains the alignment used to position or stretch the specified element within its container.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
  
**Returns:**

Returns the alignment if the operation is successful; returns -1 if the parameter is invalid.

**Since:**

7

#### [h2]setElementInlay

public boolean setElementInlay​(int index, int left, int top, int right, int bottom)

Sets the inlay for the specified element within this LayerElement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
left | Indicates the left inlay to add to the left bound of the element, in pixels.  
top | Indicates the top inlay to add to the top bound of the element, in pixels.  
right | Indicates the right inlay to add to the right bound of the element, in pixels.  
bottom | Indicates the bottom inlay to add to the bottom bound of the element, in pixels.  
  
**Returns:**

Returns true if the operation is successful; returns false otherwise.

**Since:**

7

#### [h2]setElementInlayRtl

public boolean setElementInlayRtl​(int index, int start, int top, int end, int bottom)

Sets the relative inlay for the specified element.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
start | Indicates the start inlay to add to the start bound of the element, in pixels.  
top | Indicates the top inlay to add to the top bound of the element, in pixels.  
end | Indicates the end inlay to add to the end bound of the element, in pixels.  
bottom | Indicates the bottom inlay to add to the bottom bound of the element, in pixels.  
  
**Returns:**

Returns true if the operation is successful; returns false otherwise.

**Since:**

7

#### [h2]getElementInlayLeft

public int getElementInlayLeft​(int index)

Obtains the inlay from the left bound of the specified element.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
  
**Returns:**

Returns the inlay, in pixels, if the operation is successful; returns -1 otherwise.

**Since:**

7

#### [h2]getElementInlayTop

public int getElementInlayTop​(int index)

Obtains the inlay from the top bound of the specified element.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
  
**Returns:**

Returns the inlay, in pixels, if the operation is successful; returns -1 otherwise.

**Since:**

7

#### [h2]getElementInlayRight

public int getElementInlayRight​(int index)

Obtains the inlay from the right bound of the specified element.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
  
**Returns:**

Returns the inlay, in pixels, if the operation is successful; returns -1 otherwise.

**Since:**

7

#### [h2]getElementInlayBottom

public int getElementInlayBottom​(int index)

Obtains the inlay from the bottom bound of the specified element.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
  
**Returns:**

Returns the inlay, in pixels, if the operation is successful; returns -1 otherwise.

**Since:**

7

#### [h2]getElementInlayStart

public int getElementInlayStart​(int index)

Obtains the inlay from the start bound of the specified element.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
  
**Returns:**

Returns the inlay, in pixels, if the operation is successful; returns -1 otherwise.

**Since:**

7

#### [h2]getElementInlayEnd

public int getElementInlayEnd​(int index)

Obtains the inlay from the end bound of the specified element.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of the element. The value must be in the range between 0 and [getCount()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__getCount--).  
  
**Returns:**

Returns the inlay, in pixels, if the operation is successful; returns -1 otherwise.

**Since:**

7

#### [h2]setPaddingMode

public void setPaddingMode​(int mode)

Sets the padding mode for this LayerElement.

The padding mode will affect the bounds of each layer in this LayerElement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
mode | Indicates the padding mode to set. The value can be [DEPENDENT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__DEPENDENT) or [INDEPENDENT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__INDEPENDENT). The default value is [INDEPENDENT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__INDEPENDENT).  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) | Throws this exception if the value of mode is not [DEPENDENT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__DEPENDENT) or [INDEPENDENT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__INDEPENDENT).  
  
**Since:**

7

#### [h2]getPaddingMode

public int getPaddingMode​()

Obtains the padding mode of this LayerElement.

**Returns:**

Returns the padding mode, which can be [DEPENDENT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__DEPENDENT) or [INDEPENDENT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layerelement-0000001217996515#ZH-CN_TOPIC_0000001217996515__INDEPENDENT).

**Since:**

7

#### [h2]setPadding

public void setPadding​(int left, int top, int right, int bottom)

Sets the absolute padding for this LayerElement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
left | Indicates the left padding to set, in pixels.  
top | Indicates the top padding to set, in pixels.  
right | Indicates the right padding to set, in pixels.  
bottom | Indicates the bottom padding to set, in pixels.  
  
**Since:**

7

#### [h2]setPaddingRtl

public void setPaddingRtl​(int start, int top, int end, int bottom)

Sets the relative padding for this LayerElement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
start | Indicates the start padding to set, in pixels.  
top | Indicates the top padding to set, in pixels.  
end | Indicates the end padding to set, in pixels.  
bottom | Indicates the bottom padding to set, in pixels.  
  
**Since:**

7

#### [h2]getPaddingLeft

public int getPaddingLeft​()

Obtains the left padding of this LayerElement.

**Returns:**

Returns the left padding, in pixels.

**Since:**

7

#### [h2]getPaddingTop

public int getPaddingTop​()

Obtains the top padding of this LayerElement.

**Returns:**

Returns the top padding, in pixels.

**Since:**

7

#### [h2]getPaddingRight

public int getPaddingRight​()

Obtains the right padding of this LayerElement.

**Returns:**

Returns the right padding, in pixels.

**Since:**

7

#### [h2]getPaddingBottom

public int getPaddingBottom​()

Obtains the bottom padding of this LayerElement.

**Returns:**

Returns the bottom padding, in pixels.

**Since:**

7

#### [h2]getPaddingStart

public int getPaddingStart​()

Obtains the start padding of this LayerElement.

**Returns:**

Returns the start padding, in pixels.

**Since:**

7

#### [h2]getPaddingEnd

public int getPaddingEnd​()

Obtains the end padding of this LayerElement.

**Returns:**

Returns the end padding, in pixels.

**Since:**

7
