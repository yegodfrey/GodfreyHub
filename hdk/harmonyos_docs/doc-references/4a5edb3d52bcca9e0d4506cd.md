---
name: document/cn/doc-references/magiclayout-0000001078160522
title: MagicLayout
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/magiclayout-0000001078160522
source: portal
---

# MagicLayout

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.agp.components.Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) |---|---[ohos.agp.components.ComponentContainer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043) |---|---|---ohos.agp.components.MagicLayout
    
    public class MagicLayout
    extends [ComponentContainer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043)  
  
---  
Represents a layout in which component positions and sizes can be adaptively adjusted. 

Components in a MagicLayout have seven adaptive features, including wrapping, stretching, scaling, extension, proportion, equalization, and hiding. 

    * Wrapping feature: A component in a MagicLayout will be put to the next line when there is not enough space in the current line. The wrapping feature will not work if components are arranged vertically in the layout. 
    * Stretching feature: Components in a MagicLayout can be stretched horizontally or vertically to adapt to the layout. 
    * Scaling feature: Components in a MagicLayout can be scaled to adapt to the layout.
    * Extension feature: The number of the components that can be displayed in a MagicLayout varies depending on the container. 
    * Proportion feature: Specified components in a MagicLayout are always arranged based on a proportion.
    * Equalization feature: Components in a MagicLayout can adapt to the size change of the layout with the same space between adjacent components. 
    * Hiding feature: Components in a MagicLayout are displayed in the horizontal or vertical direction with defined priorities. A component with a lower priority may be hidden if the current layout does not have sufficient available space. 

**Since:**

5

#### Nested Class Summary

Modifier and Type | Class | Description  
---|---|---  
static class  | [MagicLayout.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout_layoutconfig-0000001078320130) |  Specifies the layout parameters for components in a MagicLayout.   
  
Nested classes/interfaces inherited from class ohos.agp.components.[Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)  
---  
[Component.BindStateChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_bindstatechangedlistener-0000001054600115), [Component.CanAcceptScrollListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_canacceptscrolllistener-0000001138728603), [Component.ClickedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_clickedlistener-0000001054358685), [Component.ComponentStateChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_componentstatechangedlistener-0000001054558707), [Component.ContourRefreshedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_contourrefreshedlistener-0000001172238158), [Component.DefSpeechEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_defspeecheventlistener-0000001060996870), [Component.DoubleClickedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_doubleclickedlistener-0000001071641454), [Component.DragFeedbackProvider](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_dragfeedbackprovider-0000001054838668), [Component.DraggedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_draggedlistener-0000001054238705), [Component.DrawTask](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_drawtask-0000001054678675), [Component.EditEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_editeventlistener-0000001172556684), [Component.EstimateSizeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_estimatesizelistener-0000001078480100), [Component.EstimateSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_estimatespec-0000001078032058), [Component.FadeEffectEnum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_fadeeffectenum-0000001121107261), [Component.FocusChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_focuschangedlistener-0000001054838660), [Component.ForwardHoverListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_forwardhoverlistener-0000001218157969), [Component.ForwardTouchListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_forwardtouchlistener-0000001217877933), [Component.GestureType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_gesturetype-0000001120847517), [Component.HoverEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_hovereventlistener-0000001217996505), [Component.KeyEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_keyeventlistener-0000001054358694), [Component.LayoutDirection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_layoutdirection-0000001054358703), [Component.LayoutRefreshedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_layoutrefreshedlistener-0000001054120035), [Component.LongClickedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_longclickedlistener-0000001054119964), [Component.MeasureSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_measurespec-0000001060519068), [Component.MouseEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_mouseeventlistener-0000001172716628), [Component.MousePointerStyleListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_mousepointerstylelistener-0000001172398132), [Component.OnDragListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_ondraglistener-0000001218076459), [Component.RotationEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_rotationeventlistener-0000001054439993), [Component.ScaledListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_scaledlistener-0000001054199980), [Component.ScrolledListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_scrolledlistener-0000001054518720), [Component.ShadowDevice](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_shadowdevice-0000001218076463), [Component.ShadowMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_shadowmode-0000001172238164), [Component.ShadowSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_shadowsize-0000001172556690), [Component.SpeechEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_speecheventlistener-0000001054678708), [Component.TouchEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_toucheventlistener-0000001054358687), [Component.UnconsumedKeyEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_unconsumedkeyeventlistener-0000001172238160), [Component.VoiceEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_voiceevent-0000001054358702)  
  
Nested classes/interfaces inherited from class ohos.agp.components.[ComponentContainer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043)  
---  
[ComponentContainer.ArrangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_arrangelistener-0000001120712365)  
  
#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [EQUALIZE_DEFAULT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__EQUALIZE_DEFAULT) |  Indicates that the edges of a MagicLayout are involved in equalization operations.   
static int | [EQUALIZE_NEAR_EDGE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__EQUALIZE_NEAR_EDGE) |  Indicates that the edges of a MagicLayout are not involved in equalization operations.   
static int | [FOLD_OBVERSE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__FOLD_OBVERSE) |  Indicates that two adjacent components are wrapped with the left one remaining in the current line and the right one put to the next line.   
static int | [FOLD_REVERSE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__FOLD_REVERSE) |  Indicates that two adjacent components are wrapped with the right one remaining in the current line and the left one put to the next line.   
  
Fields inherited from class ohos.agp.components.[Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)  
---  
[ACCESSIBILITY_ADAPTABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__ACCESSIBILITY_ADAPTABLE), [ACCESSIBILITY_DISABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__ACCESSIBILITY_DISABLE), [ACCESSIBILITY_ENABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__ACCESSIBILITY_ENABLE), [AXIS_X](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__AXIS_X), [AXIS_Y](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__AXIS_Y), [CONTOUR_BACKGROUND](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__CONTOUR_BACKGROUND), [CONTOUR_BORDER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__CONTOUR_BORDER), [CONTOUR_PADDING_BORDER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__CONTOUR_PADDING_BORDER), [DEFAULT_SCALE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DEFAULT_SCALE), [DRAG_DOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DRAG_DOWN), [DRAG_HORIZONTAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DRAG_HORIZONTAL), [DRAG_HORIZONTAL_VERTICAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DRAG_HORIZONTAL_VERTICAL), [DRAG_LEFT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DRAG_LEFT), [DRAG_RIGHT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DRAG_RIGHT), [DRAG_UP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DRAG_UP), [DRAG_VERTICAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DRAG_VERTICAL), [EVENT_TYPE_COMPONENT_ACCESSIBILITY_FOCUSED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_ACCESSIBILITY_FOCUSED), [EVENT_TYPE_COMPONENT_ACCESSIBILITY_FOCUSED_CLEAR](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_ACCESSIBILITY_FOCUSED_CLEAR), [EVENT_TYPE_COMPONENT_CLICKED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_CLICKED), [EVENT_TYPE_COMPONENT_FOCUSED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_FOCUSED), [EVENT_TYPE_COMPONENT_LONG_CLICKED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_LONG_CLICKED), [EVENT_TYPE_COMPONENT_SCROLLED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_SCROLLED), [EVENT_TYPE_COMPONENT_SELECTED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_SELECTED), [EVENT_TYPE_COMPONENT_TEXT_UPDATE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_TEXT_UPDATE), [EVENT_TYPE_NOTICE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_NOTICE), [EVENT_TYPE_NOTIFICATION_STATE_UPDATE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_NOTIFICATION_STATE_UPDATE), [EVENT_TYPE_TOAST_SHOW](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_TOAST_SHOW), [EVENT_TYPE_WINDOW_STATE_UPDATE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_WINDOW_STATE_UPDATE), [FOCUS_ADAPTABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_ADAPTABLE), [FOCUS_DISABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_DISABLE), [FOCUS_ENABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_ENABLE), [FOCUS_NEXT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_NEXT), [FOCUS_PREVIOUS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_PREVIOUS), [FOCUS_SIDE_BOTTOM](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_SIDE_BOTTOM), [FOCUS_SIDE_LEFT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_SIDE_LEFT), [FOCUS_SIDE_RIGHT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_SIDE_RIGHT), [FOCUS_SIDE_TOP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_SIDE_TOP), [HIDE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__HIDE), [HORIZONTAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__HORIZONTAL), [ID_DEFAULT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__ID_DEFAULT), [INHERITED_MODE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__INHERITED_MODE), [INVISIBLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__INVISIBLE), [mBackgroundElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mBackgroundElement), [mCanvasForTaskOverContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mCanvasForTaskOverContent), [mCanvasForTaskUnderContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mCanvasForTaskUnderContent), [mComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mComponentParent), [mContext](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mContext), [mDrawTaskOverContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mDrawTaskOverContent), [mDrawTaskUnderContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mDrawTaskUnderContent), [mEstimateSizeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mEstimateSizeListener), [mForegroundElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mForegroundElement), [mForwardHoverListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mForwardHoverListener), [mHoverEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mHoverEventListener), [mKeyEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mKeyEventListener), [mMouseEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mMouseEventListener), [mPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mPosition), [mRotationEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mRotationEventListener), [mShadowElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mShadowElement), [mUnconsumedKeyEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mUnconsumedKeyEventListener), [OVAL_MODE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__OVAL_MODE), [OVAL_SCROLL_BAR_MODE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__OVAL_SCROLL_BAR_MODE), [POSITION_X_INDEX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__POSITION_X_INDEX), [POSITION_Y_INDEX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__POSITION_Y_INDEX), [RECT_MODE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__RECT_MODE), [RECT_SCROLL_BAR_MODE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__RECT_SCROLL_BAR_MODE), [SCROLL_AUTO_STAGE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__SCROLL_AUTO_STAGE), [SCROLL_IDLE_STAGE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__SCROLL_IDLE_STAGE), [SCROLL_NORMAL_STAGE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__SCROLL_NORMAL_STAGE), [UNSPECIFIED_SCROLL_BAR_MODE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__UNSPECIFIED_SCROLL_BAR_MODE), [VERTICAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__VERTICAL), [VISIBLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__VISIBLE)  
  
Fields inherited from class ohos.agp.components.[ComponentContainer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043)  
---  
[FOCUS_CHILDREN_FIRST](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__FOCUS_CHILDREN_FIRST), [FOCUS_CHILDREN_HIDE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__FOCUS_CHILDREN_HIDE), [FOCUS_PARENT_FIRST](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__FOCUS_PARENT_FIRST), [mArrangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__mArrangeListener)  
  
#### Constructor Summary

Constructor | Description  
---|---  
[MagicLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__MagicLayout-ohos_app_Context-)​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context) |  A constructor used to create a MagicLayout instance using the default attribute set and style.   
[MagicLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__MagicLayout-ohos_app_Context-ohos_agp_components_AttrSet-)​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [AttrSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attrset-0000001054518718) attrSet) |  A constructor used to create an MagicLayout with the default attribute set after the XML file is parsed.   
[MagicLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__MagicLayout-ohos_app_Context-ohos_agp_components_AttrSet-java_lang_String-)​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [AttrSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attrset-0000001054518718) attrSet, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) styleName) |  A constructor used to create an MagicLayout with the default attribute set and style after the XML file is parsed.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) | [createLayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__createLayoutConfig-ohos_app_Context-ohos_agp_components_AttrSet-)​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [AttrSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attrset-0000001054518718) attrSet) |  Creates layout parameters using the attribute set of a child component.   
int | [getAlignment](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__getAlignment--)​() |  Obtains the alignment mode of components in the layout.   
int | [getDefaultExtendMargin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__getDefaultExtendMargin--)​() |  Obtains the default margin between components in the MagicLayout.   
int | [getEqualizeType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__getEqualizeType--)​() |  Obtains the equalization type.   
int | [getExtendRevealLength](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__getExtendRevealLength--)​() |  Obtains the revealed length of the component with the extension feature in the MagicLayout.   
int | [getFoldAlignment](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__getFoldAlignment--)​() |  Obtains the alignment mode of components in each line after line wrapping has been performed.   
int | [getFoldDirection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__getFoldDirection--)​() |  Obtains the direction for line wrapping.   
int | [getMaxEqualizeMargin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__getMaxEqualizeMargin--)​() |  Obtains the maximum margin between components in the MagicLayout for equalization operations.   
int | [getMaxHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__getMaxHeight--)​() |  Obtains the maximum height of the MagicLayout.   
int | [getMaxWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__getMaxWidth--)​() |  Obtains the maximum width of the MagicLayout.   
int | [getMinEqualizeMargin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__getMinEqualizeMargin--)​() |  Obtains the minimum margin between components in the MagicLayout for equalization operations.   
int | [getMinExtendMargin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__getMinExtendMargin--)​() |  Obtains the minimum margin between components in the MagicLayout for extension operations.   
int | [getOrientation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__getOrientation--)​() |  Obtains the orientation in which the components are arranged in the layout.   
boolean | [isEqualizeEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__isEqualizeEnabled--)​() |  Checks whether the equalization feature is enabled.   
boolean | [isExtendEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__isExtendEnabled--)​() |  Checks whether the extension feature is enabled.   
boolean | [isExtendRevealEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__isExtendRevealEnabled--)​() |  Checks whether components that enable the extension feature in the MagicLayout can be revealed.   
boolean | [isFoldEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__isFoldEnabled--)​() |  Checks whether line wrapping is enabled.   
boolean | [isHideEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__isHideEnabled--)​() |  Checks whether the hiding feature is enabled.   
boolean | [isHorizontalStretchEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__isHorizontalStretchEnabled--)​() |  Checks whether the horizontal stretching feature is enabled.   
boolean | [isScaleEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__isScaleEnabled--)​() |  Checks whether the scaling feature is enabled.   
boolean | [isVerticalStretchEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__isVerticalStretchEnabled--)​() |  Checks whether the vertical stretching feature is enabled.   
boolean | [isWeightEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__isWeightEnabled--)​() |  Checks whether the proportion feature is enabled.   
void | [setAlignment](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setAlignment-int-)​(int alignment) |  Sets how components are aligned in the remaining space (if any) of the MagicLayout.   
void | [setDefaultExtendMargin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setDefaultExtendMargin-int-)​(int defaultMargin) |  Sets the default margin between components in the MagicLayout layout.   
void | [setEqualizeEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setEqualizeEnabled-boolean-)​(boolean isEnabled) |  Sets whether to enable the equalization feature.   
void | [setEqualizeType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setEqualizeType-int-)​(int equalizeType) |  Sets an equalization type.   
void | [setExtendEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setExtendEnabled-boolean-)​(boolean isEnabled) |  Sets whether to enable the extension feature.   
void | [setExtendRevealEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setExtendRevealEnabled-boolean-)​(boolean isEnabled) |  Sets whether components that enable the extension feature in the MagicLayout can be revealed.   
void | [setExtendRevealLength](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setExtendRevealLength-int-)​(int revealLength) |  Sets the revealed length for a component with the extension feature in the MagicLayout.   
void | [setFoldAlignment](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setFoldAlignment-int-)​(int foldAlignment) |  Sets how components in each line are aligned after line wrapping.   
void | [setFoldDirection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setFoldDirection-int-)​(int foldDirection) |  Sets the direction for line wrapping, which is by default MagicLayout.FOLD_OBVERSE.   
void | [setFoldEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setFoldEnabled-boolean-)​(boolean isFoldEnabled) |  Sets whether to allow line wrapping, which puts a component to the next line if there is not enough space left in the current line.   
void | [setHideEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setHideEnabled-boolean-)​(boolean isEnabled) |  Sets whether to enable the hiding feature.   
void | [setHorizontalStretchEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setHorizontalStretchEnabled-boolean-)​(boolean isEnabled) |  Sets whether to enable the horizontal stretching feature.   
void | [setMaxEqualizeMargin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setMaxEqualizeMargin-int-)​(int maxMargin) |  Sets the maximum margin between components in the MagicLayout for equalization operations.   
void | [setMaxHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setMaxHeight-int-)​(int maxHeight) |  Sets the maximum height for the MagicLayout.   
void | [setMaxWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setMaxWidth-int-)​(int maxWidth) |  Sets the maximum width for the MagicLayout.   
void | [setMinEqualizeMargin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setMinEqualizeMargin-int-)​(int minMargin) |  Sets the minimum margin between components in the MagicLayout for equalization operations.   
void | [setMinExtendMargin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setMinExtendMargin-int-)​(int minMargin) |  Sets the minimum margin between components in the MagicLayout for extension operations.   
void | [setMinHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setMinHeight-int-)​(int minHeight) |  Sets the minimum height for the MagicLayout.   
void | [setMinWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setMinWidth-int-)​(int minWidth) |  Sets the minimum width for the MagicLayout.   
void | [setOrientation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setOrientation-int-)​(int orientation) |  Sets the orientation in which the components are arranged in the layout.   
void | [setScaleEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setScaleEnabled-boolean-)​(boolean isEnabled) |  Sets whether to enable the scaling feature.   
void | [setVerticalStretchEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setVerticalStretchEnabled-boolean-)​(boolean isEnabled) |  Sets whether to enable the vertical stretching feature.   
void | [setWeightEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setWeightEnabled-boolean-)​(boolean isEnabled) |  Sets whether to enable the proportion feature.   
[ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) | [verifyLayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__verifyLayoutConfig-ohos_agp_components_ComponentContainer_LayoutConfig-)​([ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) config) |  Verifies layout parameters based on the current layout type.   
  
Methods inherited from class ohos.agp.components.[Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)  
---  
[addDrawTask](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__addDrawTask-ohos_agp_components_Component_DrawTask-), [addDrawTask](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__addDrawTask-ohos_agp_components_Component_DrawTask-int-), [addScrolledListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__addScrolledListener-ohos_agp_components_Component_ScrolledListener-), [announceAccessibility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__announceAccessibility-java_lang_String-), [arrange](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__arrange-int-int-int-int-), [bindCornerMark](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__bindCornerMark--), [callOnClick](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__callOnClick--), [canScroll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__canScroll-int-), [clearFocus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__clearFocus--), [createAnimatorProperty](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__createAnimatorProperty--), [disableFadeEffect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__disableFadeEffect-ohos_agp_components_Component_FadeEffectEnum-), [draw](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__draw-ohos_agp_render_Canvas-), [enableCornerMark](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__enableCornerMark-boolean-), [enableFadeEffect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__enableFadeEffect-ohos_agp_components_Component_FadeEffectEnum-), [enableSaveState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__enableSaveState-boolean-), [enableScrollBar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__enableScrollBar-int-boolean-), [estimateSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__estimateSize-int-int-), [executeDoubleClick](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__executeDoubleClick--), [executeLongClick](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__executeLongClick--), [findFocus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__findFocus--), [findNextFocusableComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__findNextFocusableComponent-int-), [findRequestNextFocus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__findRequestNextFocus-int-), [getAccessibility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getAccessibility--), [getAccessibilityDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getAccessibilityDescription--), [getAlpha](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getAlpha--), [getAltitude](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getAltitude--), [getBackgroundElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getBackgroundElement--), [getBaseLine](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getBaseLine--), [getBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getBottom--), [getBoundaryFadeEffectBottomRate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getBoundaryFadeEffectBottomRate--), [getBoundaryFadeEffectLeftRate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getBoundaryFadeEffectLeftRate--), [getBoundaryFadeEffectRightRate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getBoundaryFadeEffectRightRate--), [getBoundaryFadeEffectTopRate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getBoundaryFadeEffectTopRate--), [getCenterZoomFactor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getCenterZoomFactor--), [getCentralScrollMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getCentralScrollMode--), [getClickedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getClickedListener--), [getClipEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getClipEnabled--), [getComponentDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getComponentDescription--), [getComponentMinSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getComponentMinSize--), [getComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getComponentParent--), [getComponentPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getComponentPosition--), [getComponentSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getComponentSize--), [getComponentStateChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getComponentStateChangedListener--), [getComponentTreeObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getComponentTreeObserver--), [getContentEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getContentEnable--), [getContentPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getContentPosition--), [getContentPositionX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getContentPositionX--), [getContentPositionY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getContentPositionY--), [getContext](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getContext--), [getContour](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getContour--), [getContourRefreshedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getContourRefreshedListener--), [getCornerMark](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getCornerMark--), [getDragAcceptAngle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getDragAcceptAngle--), [getDraggedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getDraggedListener--), [getEditEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getEditEventListener--), [getEstimatedHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getEstimatedHeight--), [getEstimatedWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getEstimatedWidth--), [getFadeEffectBoundaryWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getFadeEffectBoundaryWidth--), [getFadeEffectColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getFadeEffectColor--), [getFocusable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getFocusable--), [getFocusBorderEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getFocusBorderEnable--), [getFocusBorderPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getFocusBorderPadding--), [getFocusBorderRadius](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getFocusBorderRadius--), [getFocusBorderWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getFocusBorderWidth--), [getForegroundElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getForegroundElement--), [getForegroundGravity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getForegroundGravity--), [getForwardHoverListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getForwardHoverListener--), [getForwardTouchListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getForwardTouchListener--), [getGesturePriority](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getGesturePriority-ohos_agp_components_Component_GestureType-), [getHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getHeight--), [getHorizontalPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getHorizontalPadding--), [getHorizontalPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getHorizontalPosition--), [getHoverEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getHoverEventListener--), [getId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getId--), [getKeyEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getKeyEventListener--), [getLayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getLayoutConfig--), [getLayoutDirection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getLayoutDirection--), [getLayoutDirectionResolved](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getLayoutDirectionResolved--), [getLayoutRefreshedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getLayoutRefreshedListener--), [getLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getLeft--), [getLocationOnScreen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getLocationOnScreen--), [getMarginBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMarginBottom--), [getMarginLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMarginLeft--), [getMarginRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMarginRight--), [getMargins](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMargins--), [getMarginsLeftAndRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMarginsLeftAndRight--), [getMarginsTopAndBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMarginsTopAndBottom--), [getMarginTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMarginTop--), [getMatrix](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMatrix--), [getMinHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMinHeight--), [getMinWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMinWidth--), [getMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMode--), [getModeResolved](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getModeResolved--), [getMouseEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMouseEventListener--), [getMousePointerStyleListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMousePointerStyleListener--), [getName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getName--), [getPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPadding--), [getPaddingBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPaddingBottom--), [getPaddingEnd](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPaddingEnd--), [getPaddingLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPaddingLeft--), [getPaddingRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPaddingRight--), [getPaddingStart](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPaddingStart--), [getPaddingTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPaddingTop--), [getPivot](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPivot--), [getPivotX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPivotX--), [getPivotY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPivotY--), [getResourceManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getResourceManager--), [getRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getRight--), [getRotation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getRotation--), [getRotationEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getRotationEventListener--), [getRotationSensitivity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getRotationSensitivity--), [getScale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScale--), [getScaledListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScaledListener--), [getScaleX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScaleX--), [getScaleY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScaleY--), [getScrollbarBackgroundColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarBackgroundColor--), [getScrollbarColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarColor--), [getScrollbarFadingDelay](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarFadingDelay--), [getScrollbarFadingDuration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarFadingDuration--), [getScrollBarMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollBarMode--), [getScrollbarRadius](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarRadius--), [getScrollbarRoundRect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarRoundRect--), [getScrollbarStartAngle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarStartAngle--), [getScrollbarSweepAngle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarSweepAngle--), [getScrollbarThickness](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarThickness--), [getScrollState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollState--), [getScrollValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollValue-int-), [getSelfVisibleRect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getSelfVisibleRect-ohos_agp_utils_Rect-), [getShadowColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getShadowColor--), [getSpeechEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getSpeechEventListener--), [getTag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTag--), [getTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTop--), [getTouchEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTouchEventListener--), [getTransitionSymbol](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTransitionSymbol--), [getTranslation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTranslation--), [getTranslationX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTranslationX--), [getTranslationY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTranslationY--), [getTranslationZ](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTranslationZ--), [getUserNextFocus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getUserNextFocus-int-), [getVerticalPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getVerticalPadding--), [getVerticalPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getVerticalPosition--), [getVisibility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getVisibility--), [getVisibleRectOnScreen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getVisibleRectOnScreen-ohos_agp_utils_Rect-int:A-), [getWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getWidth--), [getWindowVisibleRect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getWindowVisibleRect-ohos_agp_utils_Rect-), [hasFocus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__hasFocus--), [hasFocusedEffect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__hasFocusedEffect--), [hasOverlaps](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__hasOverlaps--), [hideFocusBorder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__hideFocusBorder--), [invalidate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__invalidate--), [isBoundaryFadeEffectEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isBoundaryFadeEffectEnable--), [isBoundToWindow](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isBoundToWindow--), [isClickable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isClickable--), [isClipToContourEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isClipToContourEnabled--), [isComponentDisplayed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isComponentDisplayed--), [isEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isEnabled--), [isFadeEffected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isFadeEffected-ohos_agp_components_Component_FadeEffectEnum-), [isFocusable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isFocusable--), [isFocused](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isFocused--), [isIdentityMatrix](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isIdentityMatrix--), [isLongClickOn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isLongClickOn--), [isPressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isPressed--), [isRtl](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isRtl--), [isSaveStateEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isSaveStateEnabled--), [isScrollbarFadingOn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isScrollbarFadingOn--), [isScrollBarOn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isScrollBarOn-int-), [isScrollbarOverlapEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isScrollbarOverlapEnabled--), [isSelected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isSelected--), [isSoundEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isSoundEnable--), [isTouchFocusable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isTouchFocusable--), [isVibrationEffectEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isVibrationEffectEnabled--), [notifyAccessibility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__notifyAccessibility-int-), [onAttributeConfigChanged](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__onAttributeConfigChanged-ohos_global_configuration_Configuration-), [onRestoreState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__onRestoreState-ohos_utils_Sequenceable-), [onRtlChanged](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__onRtlChanged-ohos_agp_components_Component_LayoutDirection-), [onSaveState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__onSaveState--), [performScale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__performScale--), [playSound](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__playSound-int-), [postLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__postLayout--), [refreshContour](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__refreshContour--), [release](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__release--), [removeBindStateChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__removeBindStateChangedListener-ohos_agp_components_Component_BindStateChangedListener-), [removeScrolledListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__removeScrolledListener-ohos_agp_components_Component_ScrolledListener-), [requestFocus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__requestFocus--), [requestForceForwardTouchEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__requestForceForwardTouchEvent-boolean-), [restoreComponentTreeState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__restoreComponentTreeState-ohos_utils_PlainArray-), [saveComponentTreeState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__saveComponentTreeState-ohos_utils_PlainArray-), [scrollBy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__scrollBy-int-int-), [scrollTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__scrollTo-int-int-), [setAccessibility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setAccessibility-int-), [setAccessibilityDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setAccessibilityDescription-java_lang_String-), [setAlpha](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setAlpha-float-), [setAltitude](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setAltitude-float-), [setBackground](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setBackground-ohos_agp_components_element_Element-), [setBindStateChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setBindStateChangedListener-ohos_agp_components_Component_BindStateChangedListener-), [setBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setBottom-int-), [setBoundaryFadeEffectEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setBoundaryFadeEffectEnable-boolean-), [setCanAcceptScrollListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setCanAcceptScrollListener-ohos_agp_components_Component_CanAcceptScrollListener-), [setCenterZoomFactor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setCenterZoomFactor-float-float-), [setCentralScrollMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setCentralScrollMode-boolean-), [setClickable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setClickable-boolean-), [setClickedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setClickedListener-ohos_agp_components_Component_ClickedListener-), [setClipEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setClipEnabled-boolean-), [setClipToContourEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setClipToContourEnabled-boolean-), [setComponentDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setComponentDescription-java_lang_CharSequence-), [setComponentMinSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setComponentMinSize-int-int-), [setComponentPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setComponentPosition-int-int-int-int-), [setComponentPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setComponentPosition-ohos_agp_utils_Rect-), [setComponentSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setComponentSize-int-int-), [setComponentStateChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setComponentStateChangedListener-ohos_agp_components_Component_ComponentStateChangedListener-), [setContentEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setContentEnable-boolean-), [setContentPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setContentPosition-float-float-), [setContentPositionX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setContentPositionX-float-), [setContentPositionY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setContentPositionY-float-), [setContour](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setContour-ohos_agp_utils_Contour-), [setContourRefreshedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setContourRefreshedListener-ohos_agp_components_Component_ContourRefreshedListener-), [setDoubleClickedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setDoubleClickedListener-ohos_agp_components_Component_DoubleClickedListener-), [setDragAcceptAngle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setDragAcceptAngle-float-), [setDraggedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setDraggedListener-int-ohos_agp_components_Component_DraggedListener-), [setEditEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setEditEventListener-ohos_agp_components_Component_EditEventListener-), [setEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setEnabled-boolean-), [setEstimatedSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setEstimatedSize-int-int-), [setEstimateSizeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setEstimateSizeListener-ohos_agp_components_Component_EstimateSizeListener-), [setFadeEffectBoundaryWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFadeEffectBoundaryWidth-int-), [setFadeEffectColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFadeEffectColor-ohos_agp_utils_Color-), [setFocusable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusable-int-), [setFocusBorderEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusBorderEnable-boolean-), [setFocusBorderPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusBorderPadding-int-), [setFocusBorderRadius](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusBorderRadius-float-), [setFocusBorderRadius](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusBorderRadius-float:A-), [setFocusBorderWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusBorderWidth-int-), [setFocusChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusChangedListener-ohos_agp_components_Component_FocusChangedListener-), [setFocusedEffect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusedEffect-boolean-), [setForeground](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setForeground-ohos_agp_components_element_Element-), [setForegroundGravity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setForegroundGravity-int-), [setForwardHoverListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setForwardHoverListener-ohos_agp_components_Component_ForwardHoverListener-), [setForwardTouchListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setForwardTouchListener-ohos_agp_components_Component_ForwardTouchListener-), [setGesturePriority](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setGesturePriority-ohos_agp_components_Component_GestureType-int-), [setHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setHeight-int-), [setHorizontalPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setHorizontalPadding-int-int-), [setHorizontalPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setHorizontalPosition-int-int-), [setHoverEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setHoverEventListener-ohos_agp_components_Component_HoverEventListener-), [setId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setId-int-), [setKeyEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setKeyEventListener-ohos_agp_components_Component_KeyEventListener-), [setLayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setLayoutConfig-ohos_agp_components_ComponentContainer_LayoutConfig-), [setLayoutDirection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setLayoutDirection-ohos_agp_components_Component_LayoutDirection-), [setLayoutRefreshedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setLayoutRefreshedListener-ohos_agp_components_Component_LayoutRefreshedListener-), [setLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setLeft-int-), [setLongClickable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setLongClickable-boolean-), [setLongClickedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setLongClickedListener-ohos_agp_components_Component_LongClickedListener-), [setMarginBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMarginBottom-int-), [setMarginLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMarginLeft-int-), [setMarginRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMarginRight-int-), [setMarginsLeftAndRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMarginsLeftAndRight-int-int-), [setMarginsTopAndBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMarginsTopAndBottom-int-int-), [setMarginTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMarginTop-int-), [setMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMode-int-), [setMouseEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMouseEventListener-ohos_agp_components_Component_MouseEventListener-), [setMousePointerStyleListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMousePointerStyleListener-ohos_agp_components_Component_MousePointerStyleListener-), [setName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setName-java_lang_String-), [setOnDragListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setOnDragListener-ohos_agp_components_Component_OnDragListener-), [setPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPadding-int-int-int-int-), [setPaddingBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPaddingBottom-int-), [setPaddingLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPaddingLeft-int-), [setPaddingRelative](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPaddingRelative-int-int-int-int-), [setPaddingRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPaddingRight-int-), [setPaddingTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPaddingTop-int-), [setPivot](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPivot-float-float-), [setPivot](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPivot-ohos_agp_utils_Point-), [setPivotX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPivotX-float-), [setPivotY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPivotY-float-), [setPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPosition-int-int-), [setPositionX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPositionX-int-), [setPositionY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPositionY-int-), [setPressState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPressState-boolean-), [setRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setRight-int-), [setRotation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setRotation-float-), [setRotationEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setRotationEventListener-ohos_agp_components_Component_RotationEventListener-), [setRotationSensitivity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setRotationSensitivity-float-), [setScale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScale-float-float-), [setScaledListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScaledListener-ohos_agp_components_Component_ScaledListener-), [setScaleX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScaleX-float-), [setScaleY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScaleY-float-), [setScrollbarBackgroundColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarBackgroundColor-ohos_agp_utils_Color-), [setScrollbarColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarColor-ohos_agp_utils_Color-), [setScrollbarFadingDelay](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarFadingDelay-int-), [setScrollbarFadingDuration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarFadingDuration-int-), [setScrollbarFadingEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarFadingEnabled-boolean-), [setScrollBarMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollBarMode-int-), [setScrollbarOverlapEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarOverlapEnabled-boolean-), [setScrollbarRadius](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarRadius-float-), [setScrollbarRoundRect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarRoundRect-boolean-), [setScrollbarStartAngle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarStartAngle-float-), [setScrollbarSweepAngle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarSweepAngle-float-), [setScrollbarThickness](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarThickness-int-), [setScrolledListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrolledListener-ohos_agp_components_Component_ScrolledListener-), [setSelected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setSelected-boolean-), [setShadowColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setShadowColor-ohos_agp_utils_Color-), [setShadowStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setShadowStyle-ohos_agp_components_Component_ShadowSize-ohos_agp_components_Component_ShadowMode-ohos_agp_components_Component_ShadowDevice-), [setSoundEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setSoundEnable-boolean-), [setSpeechEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setSpeechEventListener-ohos_agp_components_Component_SpeechEventListener-), [setTag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTag-java_lang_Object-), [setTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTop-int-), [setTouchEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTouchEventListener-ohos_agp_components_Component_TouchEventListener-), [setTouchFocusable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTouchFocusable-boolean-), [setTransitionSymbol](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTransitionSymbol-java_lang_String-), [setTranslation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTranslation-float-float-), [setTranslationX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTranslationX-float-), [setTranslationY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTranslationY-float-), [setTranslationZ](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTranslationZ-float-), [setUnconsumedKeyEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setUnconsumedKeyEventListener-ohos_agp_components_Component_UnconsumedKeyEventListener-), [setUserNextFocus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setUserNextFocus-int-int-), [setVerticalPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setVerticalPadding-int-int-), [setVerticalPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setVerticalPosition-int-int-), [setVibrationEffectEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setVibrationEffectEnabled-boolean-), [setVisibility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setVisibility-int-), [setWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setWidth-int-), [showFocusBorder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__showFocusBorder--), [simulateClick](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__simulateClick--), [simulateDrag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__simulateDrag--), [startDragAndDrop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__startDragAndDrop-ohos_agp_utils_MimeData-ohos_agp_components_Component_DragFeedbackProvider-), [subscribeVoiceEvents](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__subscribeVoiceEvents-ohos_agp_components_Component_VoiceEvent-), [unsubscribeVoiceEvents](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__unsubscribeVoiceEvents--)  
  
Methods inherited from class ohos.agp.components.[ComponentContainer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043)  
---  
[addComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__addComponent-ohos_agp_components_Component-), [addComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__addComponent-ohos_agp_components_Component-int-), [addComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__addComponent-ohos_agp_components_Component-int-int-), [addComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__addComponent-ohos_agp_components_Component-int-ohos_agp_components_ComponentContainer_LayoutConfig-), [addComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__addComponent-ohos_agp_components_Component-ohos_agp_components_ComponentContainer_LayoutConfig-), [dispatchRestoreState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__dispatchRestoreState-ohos_utils_PlainArray-), [dispatchSaveState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__dispatchSaveState-ohos_utils_PlainArray-), [findComponentById](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__findComponentById-int-), [findComponentHolderById](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__findComponentHolderById-int-), [getAutoLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__getAutoLayout--), [getChildCount](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__getChildCount--), [getChildIndex](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__getChildIndex-ohos_agp_components_Component-), [getComponentAt](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__getComponentAt-int-), [getComponentTransition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__getComponentTransition--), [getFocusOrder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__getFocusOrder--), [getLayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__getLayoutManager--), [informConfigurationChanged](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__informConfigurationChanged-ohos_global_configuration_Configuration-), [isClipToChildBoundsEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__isClipToChildBoundsEnabled--), [isClipToPaddingBoundsEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__isClipToPaddingBoundsEnabled--), [isTouchEventSplitable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__isTouchEventSplitable--), [moveChildToFront](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__moveChildToFront-ohos_agp_components_Component-), [onDrag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__onDrag-ohos_agp_components_Component-ohos_agp_components_DragEvent-), [removeAllComponents](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__removeAllComponents--), [removeComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__removeComponent-ohos_agp_components_Component-), [removeComponentAt](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__removeComponentAt-int-), [removeComponentById](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__removeComponentById-int-), [removeComponents](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__removeComponents-int-int-), [setArrangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setArrangeListener-ohos_agp_components_ComponentContainer_ArrangeListener-), [setAutoLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setAutoLayout-boolean-), [setAutoLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setAutoLayout-boolean-int-), [setClipToChildBoundsEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setClipToChildBoundsEnabled-boolean-), [setClipToPaddingBoundsEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setClipToPaddingBoundsEnabled-boolean-), [setComponentTransition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setComponentTransition-ohos_agp_components_ComponentTransition-), [setFocusOrder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setFocusOrder-int-), [setLayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setLayoutManager-ohos_agp_components_LayoutManager-), [setTouchEventSplitable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setTouchEventSplitable-boolean-)  
  
Methods inherited from interface ohos.agp.components.[ComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709)  
---  
[getComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709#ZH-CN_TOPIC_0000001054558709__getComponentParent--), [postLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709#ZH-CN_TOPIC_0000001054558709__postLayout--)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]EQUALIZE_DEFAULT

public static final int EQUALIZE_DEFAULT

Indicates that the edges of a MagicLayout are involved in equalization operations. 

**Since:**

7

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_MagicLayout_EQUALIZE_DEFAULT)

#### [h2]EQUALIZE_NEAR_EDGE

public static final int EQUALIZE_NEAR_EDGE

Indicates that the edges of a MagicLayout are not involved in equalization operations. 

**Since:**

7

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_MagicLayout_EQUALIZE_NEAR_EDGE)

#### [h2]FOLD_OBVERSE

public static final int FOLD_OBVERSE

Indicates that two adjacent components are wrapped with the left one remaining in the current line and the right one put to the next line. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_MagicLayout_FOLD_OBVERSE)

#### [h2]FOLD_REVERSE

public static final int FOLD_REVERSE

Indicates that two adjacent components are wrapped with the right one remaining in the current line and the left one put to the next line. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_MagicLayout_FOLD_REVERSE)

#### Constructor Detail

#### [h2]MagicLayout

public MagicLayout​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context)

A constructor used to create a MagicLayout instance using the default attribute set and style. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context  |  Indicates the application context.  
  
**Since:**

5

#### [h2]MagicLayout

public MagicLayout​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [AttrSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attrset-0000001054518718) attrSet)

A constructor used to create an MagicLayout with the default attribute set after the XML file is parsed. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context  |  Indicates the application context.  
attrSet  |  Indicates the attribute set to use.  
  
**Since:**

5

#### [h2]MagicLayout

public MagicLayout​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [AttrSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attrset-0000001054518718) attrSet, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) styleName)

A constructor used to create an MagicLayout with the default attribute set and style after the XML file is parsed. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context  |  Indicates the application context.  
attrSet  |  Indicates the attribute set to use.  
styleName  |  Indicates the name of the style to use.  
  
**Since:**

5

#### Method Detail

#### [h2]setAlignment

public void setAlignment​(int alignment)

Sets how components are aligned in the remaining space (if any) of the MagicLayout. The default value is LayoutAlignment.START for the horizontal direction and LayoutAlignment.TOP for the vertical direction. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
alignment  |  Indicates the component alignment mode, as enumerated in [LayoutAlignment](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layoutalignment-0000001054200028).  
  
**Since:**

5

#### [h2]setOrientation

public void setOrientation​(int orientation)

Sets the orientation in which the components are arranged in the layout. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
orientation  |  Indicates the orientation in which components are arranged, which can be Component.HORIZONTAL or Component.VERTICAL.  
  
**Since:**

5

#### [h2]setFoldEnabled

public void setFoldEnabled​(boolean isFoldEnabled)

Sets whether to allow line wrapping, which puts a component to the next line if there is not enough space left in the current line. 

Line wrapping will not take effect anyway if the width of the layout is MATCH_CONTENT or orientation is Component.VERTICAL. When the width of a component is MATCH_CONTENT, line wrapping may cause part of it to be invisible.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
isFoldEnabled  |  Specifies whether line wrapping is enabled. true indicates that line wrapping is enabled; false indicates the opposite case.  
  
**Since:**

5

#### [h2]setFoldDirection

public void setFoldDirection​(int foldDirection)

Sets the direction for line wrapping, which is by default MagicLayout.FOLD_OBVERSE. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
foldDirection  |  Indicates how two side-by-side components are wrapped. FOLD_OBVERSE indicates they are wrapped in a way that the left one remains in the current line while the right one is put to the next line. FOLD_REVERSE indicates they are wrapped in a way that the right one remains in the current line while the left one is put to the next line.  
  
**Since:**

5

#### [h2]setFoldAlignment

public void setFoldAlignment​(int foldAlignment)

Sets how components in each line are aligned after line wrapping. 

Vertical alignment modes take effect on components in the same line, and horizontal alignment modes take effect on components in different lines.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
foldAlignment  |  Indicates the component alignment mode. The default value is LayoutAlignment.START for the horizontal direction and LayoutAlignment.TOP for the vertical direction. For details about alignment modes, see [LayoutAlignment](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layoutalignment-0000001054200028).  
  
**Since:**

5

#### [h2]getAlignment

public int getAlignment​()

Obtains the alignment mode of components in the layout. 

**Returns:**

Returns the component alignment mode.

**Since:**

5

#### [h2]getOrientation

public int getOrientation​()

Obtains the orientation in which the components are arranged in the layout. 

**Returns:**

Returns Component.HORIZONTAL or Component.VERTICAL.

**Since:**

5

#### [h2]isFoldEnabled

public boolean isFoldEnabled​()

Checks whether line wrapping is enabled. 

**Returns:**

Returns {code true} if line wrapping is enabled; returns false otherwise.

**Since:**

5

#### [h2]getFoldDirection

public int getFoldDirection​()

Obtains the direction for line wrapping. 

**Returns:**

Returns FOLD_OBVERSE or FOLD_REVERSE depending on how the wrapping direction has been set via [setFoldDirection(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setFoldDirection-int-).

**Since:**

5

#### [h2]getFoldAlignment

public int getFoldAlignment​()

Obtains the alignment mode of components in each line after line wrapping has been performed. 

**Returns:**

Returns the alignment mode of components in each line.

**Since:**

5

#### [h2]setHorizontalStretchEnabled

public void setHorizontalStretchEnabled​(boolean isEnabled)

Sets whether to enable the horizontal stretching feature. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
isEnabled  |  Specifies whether to enable the horizontal stretching feature. true means to enable it; false means the opposite case.  
  
**Since:**

7

#### [h2]isHorizontalStretchEnabled

public boolean isHorizontalStretchEnabled​()

Checks whether the horizontal stretching feature is enabled. 

**Returns:**

Returns true if the horizontal stretching feature is enabled; returns false otherwise.

**Since:**

7

#### [h2]setVerticalStretchEnabled

public void setVerticalStretchEnabled​(boolean isEnabled)

Sets whether to enable the vertical stretching feature. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
isEnabled  |  Specifies whether to enable the vertical stretching feature. true means to enable it; false means the opposite case.  
  
**Since:**

7

#### [h2]isVerticalStretchEnabled

public boolean isVerticalStretchEnabled​()

Checks whether the vertical stretching feature is enabled. 

**Returns:**

Returns true if the vertical stretching feature is enabled; returns false otherwise.

**Since:**

7

#### [h2]setWeightEnabled

public void setWeightEnabled​(boolean isEnabled)

Sets whether to enable the proportion feature. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
isEnabled  |  Specifies whether to enable the proportion feature. true means to enable it; false means the opposite case.  
  
**Since:**

7

#### [h2]isWeightEnabled

public boolean isWeightEnabled​()

Checks whether the proportion feature is enabled. 

**Returns:**

Returns true if the proportion feature is enabled; returns false otherwise.

**Since:**

7

#### [h2]isScaleEnabled

public boolean isScaleEnabled​()

Checks whether the scaling feature is enabled. 

**Returns:**

Returns true if the scaling feature is enabled; returns false otherwise.

**Since:**

7

#### [h2]setScaleEnabled

public void setScaleEnabled​(boolean isEnabled)

Sets whether to enable the scaling feature. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
isEnabled  |  Specifies whether to enable the scaling feature. true means to enable it; false means the opposite case.  
  
**Since:**

7

#### [h2]getMaxWidth

public int getMaxWidth​()

Obtains the maximum width of the MagicLayout. 

**Returns:**

Returns the maximum width, which is Integer.MAX_VALUE by default.

**Since:**

7

#### [h2]setMaxWidth

public void setMaxWidth​(int maxWidth)

Sets the maximum width for the MagicLayout. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
maxWidth  |  Indicates the maximum width to set, within the range [0, Integer.MAX_VALUE].  
  
**Since:**

7

#### [h2]getMaxHeight

public int getMaxHeight​()

Obtains the maximum height of the MagicLayout. 

**Returns:**

Returns the maximum height, which is Integer.MAX_VALUE by default.

**Since:**

7

#### [h2]setMaxHeight

public void setMaxHeight​(int maxHeight)

Sets the maximum height for the MagicLayout. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
maxHeight  |  Indicates the maximum height to set, within the range [0, Integer.MAX_VALUE].  
  
**Since:**

7

#### [h2]setExtendEnabled

public void setExtendEnabled​(boolean isEnabled)

Sets whether to enable the extension feature. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
isEnabled  |  true Specifies whether to enable the extension feature. true means to enable it; false (default value) means the opposite case.  
  
**Since:**

7

#### [h2]isExtendEnabled

public boolean isExtendEnabled​()

Checks whether the extension feature is enabled. 

**Returns:**

Returns true if the extension feature is enabled; returns false otherwise.

**Since:**

7

#### [h2]setExtendRevealEnabled

public void setExtendRevealEnabled​(boolean isEnabled)

Sets whether components that enable the extension feature in the MagicLayout can be revealed. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
isEnabled  |  Specifies whether components that enable the extension feature in the MagicLayout can be revealed. true means that the components can be revealed; false (default value) means the opposite case.  
  
**Since:**

7

#### [h2]isExtendRevealEnabled

public boolean isExtendRevealEnabled​()

Checks whether components that enable the extension feature in the MagicLayout can be revealed. 

**Returns:**

Returns true if the components can be revealed; returns false otherwise.

**Since:**

7

#### [h2]setExtendRevealLength

public void setExtendRevealLength​(int revealLength)

Sets the revealed length for a component with the extension feature in the MagicLayout. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
revealLength  |  Indicates the revealed length to set, within the range [0, Integer.MAX_VALUE].  
  
**Since:**

7

#### [h2]getExtendRevealLength

public int getExtendRevealLength​()

Obtains the revealed length of the component with the extension feature in the MagicLayout. 

**Returns:**

Returns the revealed length of the component, which is 16 (in vp) by default.

**Since:**

7

#### [h2]setDefaultExtendMargin

public void setDefaultExtendMargin​(int defaultMargin)

Sets the default margin between components in the MagicLayout layout. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
defaultMargin  |  Indicates the default margin to set, which takes effect when the extension feature is enabled.  
  
**Since:**

7

#### [h2]getDefaultExtendMargin

public int getDefaultExtendMargin​()

Obtains the default margin between components in the MagicLayout. 

**Returns:**

Returns the default margin set via [MagicLayout#setDefaultExtendMargin(int defaultMargin)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setDefaultExtendMargin-int-). If [MagicLayout#setDefaultExtendMargin(int defaultMargin)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/magiclayout-0000001078160522#ZH-CN_TOPIC_0000001078160522__setDefaultExtendMargin-int-) is not called, 16 (in vp) is returned in the case when the components with the extension feature can be revealed, and 0 (in vp) is returned otherwise.

**Since:**

7

#### [h2]setMinExtendMargin

public void setMinExtendMargin​(int minMargin)

Sets the minimum margin between components in the MagicLayout for extension operations. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
minMargin  |  Indicates the minimum margin to set, within the range [0, Integer.MAX_VALUE].  
  
**Since:**

7

#### [h2]getMinExtendMargin

public int getMinExtendMargin​()

Obtains the minimum margin between components in the MagicLayout for extension operations. 

**Returns:**

Returns the minimum margin.

**Since:**

7

#### [h2]setMinWidth

public void setMinWidth​(int minWidth)

Sets the minimum width for the MagicLayout. 

**Overrides:**

[setMinWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMinWidth-int-) in class [Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
minWidth  |  Indicates the minimum width to set, within the range [0, Integer.MAX_VALUE].  
  
**Since:**

7

**See Also:**

[Component.getMinWidth()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMinWidth--)

#### [h2]setMinHeight

public void setMinHeight​(int minHeight)

Sets the minimum height for the MagicLayout. 

**Overrides:**

[setMinHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMinHeight-int-) in class [Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
minHeight  |  Indicates the minimum height to set, within the range [0, Integer.MAX_VALUE].  
  
**Since:**

7

**See Also:**

[Component.getMinHeight()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMinHeight--)

#### [h2]setHideEnabled

public void setHideEnabled​(boolean isEnabled)

Sets whether to enable the hiding feature. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
isEnabled  |  Specifies whether to enable the hiding feature. true means to enable it; false means the opposite case.  
  
**Since:**

7

#### [h2]isHideEnabled

public boolean isHideEnabled​()

Checks whether the hiding feature is enabled. 

**Returns:**

Returns true if the hiding feature is enabled; returns false otherwise.

**Since:**

7

#### [h2]setEqualizeEnabled

public void setEqualizeEnabled​(boolean isEnabled)

Sets whether to enable the equalization feature. The margin between components generated after the equalization feature takes effect may be different from the margin you obtained via [ComponentContainer.LayoutConfig#getLayoutConfig()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getLayoutConfig--). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
isEnabled  |  Specifies whether to enable the equalization feature. true means to enable it; false means the opposite case.  
  
**Since:**

7

#### [h2]isEqualizeEnabled

public boolean isEqualizeEnabled​()

Checks whether the equalization feature is enabled. 

**Returns:**

Returns true if the equalization feature is enabled; returns false otherwise.

**Since:**

7

#### [h2]setEqualizeType

public void setEqualizeType​(int equalizeType)

Sets an equalization type. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
equalizeType  |  Indicates the equalization type to set. The value can be MagicLayout.EQUALIZE_DEFAULT or MagicLayout.EQUALIZE_NEAR_EDGE. The former means that the edges of the MagicLayout are involved in equalization operations, and the latter means the opposite case.  
  
**Since:**

7

#### [h2]getEqualizeType

public int getEqualizeType​()

Obtains the equalization type. 

**Returns:**

Returns MagicLayout.EQUALIZE_DEFAULT or MagicLayout.EQUALIZE_NEAR_EDGE. The former means that the edges of the MagicLayout are involved in equalization operations, and the latter means the opposite case.

**Since:**

7

#### [h2]setMaxEqualizeMargin

public void setMaxEqualizeMargin​(int maxMargin)

Sets the maximum margin between components in the MagicLayout for equalization operations. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
maxMargin  |  Indicates the maximum margin to set, within the range [0, Integer.MAX_VALUE].  
  
**Since:**

7

#### [h2]getMaxEqualizeMargin

public int getMaxEqualizeMargin​()

Obtains the maximum margin between components in the MagicLayout for equalization operations. 

**Returns:**

Returns the maximum margin.

**Since:**

7

#### [h2]setMinEqualizeMargin

public void setMinEqualizeMargin​(int minMargin)

Sets the minimum margin between components in the MagicLayout for equalization operations. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
minMargin  |  Indicates the minimum margin to set, within the range [0, Integer.MAX_VALUE].  
  
**Since:**

7

#### [h2]getMinEqualizeMargin

public int getMinEqualizeMargin​()

Obtains the minimum margin between components in the MagicLayout for equalization operations. 

**Returns:**

Returns the minimum margin.

**Since:**

7

#### [h2]verifyLayoutConfig

public [ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) verifyLayoutConfig​([ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) config)

Description copied from class: [ComponentContainer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__verifyLayoutConfig-ohos_agp_components_ComponentContainer_LayoutConfig-)

Verifies layout parameters based on the current layout type. 

**Specified by:**

[verifyLayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709#ZH-CN_TOPIC_0000001054558709__verifyLayoutConfig-ohos_agp_components_ComponentContainer_LayoutConfig-) in interface [ComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709)

**Overrides:**

[verifyLayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__verifyLayoutConfig-ohos_agp_components_ComponentContainer_LayoutConfig-) in class [ComponentContainer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
config  |  Indicates a group of layout parameters to be converted into a ComponentContainer instance.  
  
**Returns:**

Returns the LayoutConfig instance, which represents the layout parameters.

#### [h2]createLayoutConfig

public [ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) createLayoutConfig​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [AttrSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attrset-0000001054518718) attrSet)

Description copied from class: [ComponentContainer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__createLayoutConfig-ohos_app_Context-ohos_agp_components_AttrSet-)

Creates layout parameters using the attribute set of a child component. 

**Overrides:**

[createLayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__createLayoutConfig-ohos_app_Context-ohos_agp_components_AttrSet-) in class [ComponentContainer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context  |  Indicates the application context.  
attrSet  |  Indicates the attribute set.  
  
**Returns:**

Returns the layout parameters created.
