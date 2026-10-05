---
name: document/cn/doc-references/componentcontainer-0000001054120043
title: ComponentContainer
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/componentcontainer-0000001054120043
source: portal
---

# ComponentContainer

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.agp.components.Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) |---|---ohos.agp.components.ComponentContainer
    
    public abstract class ComponentContainer
    extends [Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)
    implements [ComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709)  
  
---  
  
A special component that can contain other components (called child components).

This layout base class inherits from [Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683).

**Since:**

1

#### Nested Class Summary

Modifier and Type | Class | Description  
---|---|---  
static interface | [ComponentContainer.ArrangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_arrangelistener-0000001120712365) | Provides an interface for customizing the component arrangement process.  
static class | [ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) | Provides layout parameters, such as width and height and margin.  
  
Nested classes/interfaces inherited from class ohos.agp.components.[Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)  
---  
[Component.BindStateChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_bindstatechangedlistener-0000001054600115), [Component.CanAcceptScrollListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_canacceptscrolllistener-0000001138728603), [Component.ClickedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_clickedlistener-0000001054358685), [Component.ComponentStateChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_componentstatechangedlistener-0000001054558707), [Component.ContourRefreshedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_contourrefreshedlistener-0000001172238158), [Component.DefSpeechEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_defspeecheventlistener-0000001060996870), [Component.DoubleClickedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_doubleclickedlistener-0000001071641454), [Component.DragFeedbackProvider](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_dragfeedbackprovider-0000001054838668), [Component.DraggedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_draggedlistener-0000001054238705), [Component.DrawTask](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_drawtask-0000001054678675), [Component.EditEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_editeventlistener-0000001172556684), [Component.EstimateSizeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_estimatesizelistener-0000001078480100), [Component.EstimateSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_estimatespec-0000001078032058), [Component.FadeEffectEnum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_fadeeffectenum-0000001121107261), [Component.FocusChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_focuschangedlistener-0000001054838660), [Component.ForwardHoverListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_forwardhoverlistener-0000001218157969), [Component.ForwardTouchListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_forwardtouchlistener-0000001217877933), [Component.GestureType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_gesturetype-0000001120847517), [Component.HoverEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_hovereventlistener-0000001217996505), [Component.KeyEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_keyeventlistener-0000001054358694), [Component.LayoutDirection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_layoutdirection-0000001054358703), [Component.LayoutRefreshedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_layoutrefreshedlistener-0000001054120035), [Component.LongClickedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_longclickedlistener-0000001054119964), [Component.MeasureSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_measurespec-0000001060519068), [Component.MouseEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_mouseeventlistener-0000001172716628), [Component.MousePointerStyleListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_mousepointerstylelistener-0000001172398132), [Component.OnDragListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_ondraglistener-0000001218076459), [Component.RotationEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_rotationeventlistener-0000001054439993), [Component.ScaledListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_scaledlistener-0000001054199980), [Component.ScrolledListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_scrolledlistener-0000001054518720), [Component.ShadowDevice](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_shadowdevice-0000001218076463), [Component.ShadowMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_shadowmode-0000001172238164), [Component.ShadowSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_shadowsize-0000001172556690), [Component.SpeechEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_speecheventlistener-0000001054678708), [Component.TouchEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_toucheventlistener-0000001054358687), [Component.UnconsumedKeyEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_unconsumedkeyeventlistener-0000001172238160), [Component.VoiceEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component_voiceevent-0000001054358702)  
  
#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [FOCUS_CHILDREN_FIRST](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__FOCUS_CHILDREN_FIRST) | Indicates that this component takes focus before any of its children.  
static int | [FOCUS_CHILDREN_HIDE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__FOCUS_CHILDREN_HIDE) | Indicates that this component blocks its children from getting focus, even if they are focusable.  
static int | [FOCUS_PARENT_FIRST](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__FOCUS_PARENT_FIRST) | Indicates that this component takes focus only if none of its children request focus.  
protected [ComponentContainer.ArrangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_arrangelistener-0000001120712365) | [mArrangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__mArrangeListener) | Customizes children components' arrangement during arrange process  
  
Fields inherited from class ohos.agp.components.[Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)  
---  
[ACCESSIBILITY_ADAPTABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__ACCESSIBILITY_ADAPTABLE), [ACCESSIBILITY_DISABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__ACCESSIBILITY_DISABLE), [ACCESSIBILITY_ENABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__ACCESSIBILITY_ENABLE), [AXIS_X](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__AXIS_X), [AXIS_Y](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__AXIS_Y), [CONTOUR_BACKGROUND](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__CONTOUR_BACKGROUND), [CONTOUR_BORDER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__CONTOUR_BORDER), [CONTOUR_PADDING_BORDER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__CONTOUR_PADDING_BORDER), [DEFAULT_SCALE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DEFAULT_SCALE), [DRAG_DOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DRAG_DOWN), [DRAG_HORIZONTAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DRAG_HORIZONTAL), [DRAG_HORIZONTAL_VERTICAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DRAG_HORIZONTAL_VERTICAL), [DRAG_LEFT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DRAG_LEFT), [DRAG_RIGHT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DRAG_RIGHT), [DRAG_UP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DRAG_UP), [DRAG_VERTICAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__DRAG_VERTICAL), [EVENT_TYPE_COMPONENT_ACCESSIBILITY_FOCUSED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_ACCESSIBILITY_FOCUSED), [EVENT_TYPE_COMPONENT_ACCESSIBILITY_FOCUSED_CLEAR](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_ACCESSIBILITY_FOCUSED_CLEAR), [EVENT_TYPE_COMPONENT_CLICKED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_CLICKED), [EVENT_TYPE_COMPONENT_FOCUSED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_FOCUSED), [EVENT_TYPE_COMPONENT_LONG_CLICKED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_LONG_CLICKED), [EVENT_TYPE_COMPONENT_SCROLLED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_SCROLLED), [EVENT_TYPE_COMPONENT_SELECTED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_SELECTED), [EVENT_TYPE_COMPONENT_TEXT_UPDATE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_COMPONENT_TEXT_UPDATE), [EVENT_TYPE_NOTICE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_NOTICE), [EVENT_TYPE_NOTIFICATION_STATE_UPDATE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_NOTIFICATION_STATE_UPDATE), [EVENT_TYPE_TOAST_SHOW](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_TOAST_SHOW), [EVENT_TYPE_WINDOW_STATE_UPDATE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__EVENT_TYPE_WINDOW_STATE_UPDATE), [FOCUS_ADAPTABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_ADAPTABLE), [FOCUS_DISABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_DISABLE), [FOCUS_ENABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_ENABLE), [FOCUS_NEXT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_NEXT), [FOCUS_PREVIOUS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_PREVIOUS), [FOCUS_SIDE_BOTTOM](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_SIDE_BOTTOM), [FOCUS_SIDE_LEFT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_SIDE_LEFT), [FOCUS_SIDE_RIGHT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_SIDE_RIGHT), [FOCUS_SIDE_TOP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__FOCUS_SIDE_TOP), [HIDE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__HIDE), [HORIZONTAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__HORIZONTAL), [ID_DEFAULT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__ID_DEFAULT), [INHERITED_MODE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__INHERITED_MODE), [INVISIBLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__INVISIBLE), [mBackgroundElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mBackgroundElement), [mCanvasForTaskOverContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mCanvasForTaskOverContent), [mCanvasForTaskUnderContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mCanvasForTaskUnderContent), [mComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mComponentParent), [mContext](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mContext), [mDrawTaskOverContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mDrawTaskOverContent), [mDrawTaskUnderContent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mDrawTaskUnderContent), [mEstimateSizeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mEstimateSizeListener), [mForegroundElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mForegroundElement), [mForwardHoverListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mForwardHoverListener), [mHoverEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mHoverEventListener), [mKeyEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mKeyEventListener), [mMouseEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mMouseEventListener), [mPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mPosition), [mRotationEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mRotationEventListener), [mShadowElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mShadowElement), [mUnconsumedKeyEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__mUnconsumedKeyEventListener), [OVAL_MODE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__OVAL_MODE), [OVAL_SCROLL_BAR_MODE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__OVAL_SCROLL_BAR_MODE), [POSITION_X_INDEX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__POSITION_X_INDEX), [POSITION_Y_INDEX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__POSITION_Y_INDEX), [RECT_MODE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__RECT_MODE), [RECT_SCROLL_BAR_MODE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__RECT_SCROLL_BAR_MODE), [SCROLL_AUTO_STAGE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__SCROLL_AUTO_STAGE), [SCROLL_IDLE_STAGE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__SCROLL_IDLE_STAGE), [SCROLL_NORMAL_STAGE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__SCROLL_NORMAL_STAGE), [UNSPECIFIED_SCROLL_BAR_MODE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__UNSPECIFIED_SCROLL_BAR_MODE), [VERTICAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__VERTICAL), [VISIBLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__VISIBLE)  
  
#### Constructor Summary

Constructor | Description  
---|---  
[ComponentContainer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__ComponentContainer-ohos_app_Context-)​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context) | Default constructor used to create a ComponentContainer instance by using the default attribute set and style.  
[ComponentContainer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__ComponentContainer-ohos_app_Context-ohos_agp_components_AttrSet-)​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [AttrSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attrset-0000001054518718) attrSet) | A constructor used to create a ComponentContainer instance by using specified attribute set and default style after the XML file is parsed.  
[ComponentContainer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__ComponentContainer-ohos_app_Context-ohos_agp_components_AttrSet-java_lang_String-)​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [AttrSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attrset-0000001054518718) attrSet, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) styleName) | A constructor used to create a ComponentContainer instance by using specified attribute set and specified style after the XML file is parsed.  
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [addComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__addComponent-ohos_agp_components_Component-)​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) childComponent) | Adds a component to the end of the queue by invoking [addComponent(ohos.agp.components.Component,int index)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__addComponent-ohos_agp_components_Component-int-) internally.  
void | [addComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__addComponent-ohos_agp_components_Component-int-)​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) childComponent, int index) | Adds a component to the specified position.  
void | [addComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__addComponent-ohos_agp_components_Component-int-int-)​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) childComponent, int width, int height) | Adds a component and sets its width and height.  
void | [addComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__addComponent-ohos_agp_components_Component-int-ohos_agp_components_ComponentContainer_LayoutConfig-)​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) childComponent, int index, [ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) layoutConfig) | Adds a component and sets its layout parameters and location.  
void | [addComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__addComponent-ohos_agp_components_Component-ohos_agp_components_ComponentContainer_LayoutConfig-)​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) childComponent, [ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) layoutConfig) | Adds a component and sets its layout parameters.  
[ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) | [createLayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__createLayoutConfig-ohos_app_Context-ohos_agp_components_AttrSet-)​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [AttrSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attrset-0000001054518718) attrSet) | Creates layout parameters using the attribute set of a child component.  
protected void | [dispatchRestoreState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__dispatchRestoreState-ohos_utils_PlainArray-)​([PlainArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/plainarray-0000001054358985)<[Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)> stateContainer) | Distribute the state restore process to restore the states of this component and its child components.  
protected void | [dispatchSaveState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__dispatchSaveState-ohos_utils_PlainArray-)​([PlainArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/plainarray-0000001054358985)<[Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)> stateContainer) | Distribute the state saving process to save the states of this component and its child components.  
<T extends [Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)>T | [findComponentById](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__findComponentById-int-)​(int id) | Finds the component with the given ID.  
[ComponentHolder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentholder-0000001060268765) | [findComponentHolderById](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__findComponentHolderById-int-)​(int resId) | Gets an instance of componentHolder using resource id.  
boolean | [getAutoLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__getAutoLayout--)​() | Obtains whether automatic layout is enabled.  
int | [getChildCount](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__getChildCount--)​() | Obtains the quantity of child components.  
int | [getChildIndex](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__getChildIndex-ohos_agp_components_Component-)​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) component) | Queries the position of a child component.  
[Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) | [getComponentAt](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__getComponentAt-int-)​(int index) | Obtains a child component using an index.  
[ComponentTransition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componenttransition-0000001060157225) | [getComponentTransition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__getComponentTransition--)​() | Obtains the [ComponentTransition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componenttransition-0000001060157225) object of the component.  
int | [getFocusOrder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__getFocusOrder--)​() | Obtains the focusability of this component relative to its descendants.  
[LayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layoutmanager-0000001071295543) | [getLayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__getLayoutManager--)​() | Obtains a [LayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layoutmanager-0000001071295543) object, which is used to lay out relevant child components.  
void | [informConfigurationChanged](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__informConfigurationChanged-ohos_global_configuration_Configuration-)​([Configuration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configuration-0000001054238847) config) | Dispatches a configuration change event.  
boolean | [isClipToChildBoundsEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__isClipToChildBoundsEnabled--)​() | Obtains whether the drawing range of a child component can exceed the boundary of the child component.  
boolean | [isClipToPaddingBoundsEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__isClipToPaddingBoundsEnabled--)​() | Obtains whether the drawing range of a component can exceed the boundary of its padding bounds.  
boolean | [isTouchEventSplitable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__isTouchEventSplitable--)​() | Obtains whether the touch events of this ComponentContainer can be split.  
void | [moveChildToFront](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__moveChildToFront-ohos_agp_components_Component-)​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) component) | Brings a child component to the front.  
boolean | [onDrag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__onDrag-ohos_agp_components_Component-ohos_agp_components_DragEvent-)​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) component, [DragEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dragevent-0000001054838670) event) | Called when a drag event is dispatched to the component.  
void | [removeAllComponents](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__removeAllComponents--)​() | Clears all components managed by ComponentContainer.  
void | [removeComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__removeComponent-ohos_agp_components_Component-)​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) component) | Removes a child component from the parent component.  
void | [removeComponentAt](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__removeComponentAt-int-)​(int index) | Removes the component from a specified position in the component list.  
void | [removeComponentById](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__removeComponentById-int-)​(int id) | Removes a component based on its ID.  
void | [removeComponents](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__removeComponents-int-int-)​(int start, int count) | Removes all components from specified positions in a component list.  
protected void | [setArrangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setArrangeListener-ohos_agp_components_ComponentContainer_ArrangeListener-)​([ComponentContainer.ArrangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_arrangelistener-0000001120712365) listener) | Adds a listener on component-container's arrangement process.  
void | [setAutoLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setAutoLayout-boolean-)​(boolean autoLayout) | Sets whether to enable automatic layout.  
void | [setAutoLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setAutoLayout-boolean-int-)​(boolean autoLayout, int columnType) | Sets whether to enable automatic layout and set the column type.  
void | [setClipToChildBoundsEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setClipToChildBoundsEnabled-boolean-)​(boolean enable) | Controls whether the drawing range of a child component can exceed the boundary of the child component.  
void | [setClipToPaddingBoundsEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setClipToPaddingBoundsEnabled-boolean-)​(boolean enable) | Controls whether the drawing range of a component can exceed the boundary of its padding bounds.  
void | [setComponentTransition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setComponentTransition-ohos_agp_components_ComponentTransition-)​([ComponentTransition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componenttransition-0000001060157225) componentTransition) | Sets a [ComponentTransition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componenttransition-0000001060157225) object.  
void | [setFocusOrder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setFocusOrder-int-)​(int focusability) | Sets the focusability of this component relative to its descendants.  
void | [setLayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setLayoutManager-ohos_agp_components_LayoutManager-)​([LayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layoutmanager-0000001071295543) layoutManager) | Sets a [LayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layoutmanager-0000001071295543) instance, which is used to lay out relevant child components.  
void | [setTouchEventSplitable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setTouchEventSplitable-boolean-)​(boolean enable) | Controls whether dispatch split touch event to multiple children.  
[ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) | [verifyLayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__verifyLayoutConfig-ohos_agp_components_ComponentContainer_LayoutConfig-)​([ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) config) | Verifies layout parameters based on the current layout type.  
  
Methods inherited from class ohos.agp.components.[Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)  
---  
[addDrawTask](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__addDrawTask-ohos_agp_components_Component_DrawTask-), [addDrawTask](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__addDrawTask-ohos_agp_components_Component_DrawTask-int-), [addScrolledListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__addScrolledListener-ohos_agp_components_Component_ScrolledListener-), [announceAccessibility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__announceAccessibility-java_lang_String-), [arrange](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__arrange-int-int-int-int-), [bindCornerMark](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__bindCornerMark--), [callOnClick](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__callOnClick--), [canScroll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__canScroll-int-), [clearFocus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__clearFocus--), [createAnimatorProperty](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__createAnimatorProperty--), [disableFadeEffect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__disableFadeEffect-ohos_agp_components_Component_FadeEffectEnum-), [draw](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__draw-ohos_agp_render_Canvas-), [enableCornerMark](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__enableCornerMark-boolean-), [enableFadeEffect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__enableFadeEffect-ohos_agp_components_Component_FadeEffectEnum-), [enableSaveState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__enableSaveState-boolean-), [enableScrollBar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__enableScrollBar-int-boolean-), [estimateSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__estimateSize-int-int-), [executeDoubleClick](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__executeDoubleClick--), [executeLongClick](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__executeLongClick--), [findFocus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__findFocus--), [findNextFocusableComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__findNextFocusableComponent-int-), [findRequestNextFocus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__findRequestNextFocus-int-), [getAccessibility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getAccessibility--), [getAccessibilityDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getAccessibilityDescription--), [getAlpha](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getAlpha--), [getAltitude](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getAltitude--), [getBackgroundElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getBackgroundElement--), [getBaseLine](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getBaseLine--), [getBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getBottom--), [getBoundaryFadeEffectBottomRate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getBoundaryFadeEffectBottomRate--), [getBoundaryFadeEffectLeftRate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getBoundaryFadeEffectLeftRate--), [getBoundaryFadeEffectRightRate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getBoundaryFadeEffectRightRate--), [getBoundaryFadeEffectTopRate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getBoundaryFadeEffectTopRate--), [getCenterZoomFactor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getCenterZoomFactor--), [getCentralScrollMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getCentralScrollMode--), [getClickedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getClickedListener--), [getClipEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getClipEnabled--), [getComponentDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getComponentDescription--), [getComponentMinSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getComponentMinSize--), [getComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getComponentParent--), [getComponentPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getComponentPosition--), [getComponentSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getComponentSize--), [getComponentStateChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getComponentStateChangedListener--), [getComponentTreeObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getComponentTreeObserver--), [getContentEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getContentEnable--), [getContentPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getContentPosition--), [getContentPositionX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getContentPositionX--), [getContentPositionY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getContentPositionY--), [getContext](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getContext--), [getContour](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getContour--), [getContourRefreshedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getContourRefreshedListener--), [getCornerMark](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getCornerMark--), [getDragAcceptAngle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getDragAcceptAngle--), [getDraggedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getDraggedListener--), [getEditEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getEditEventListener--), [getEstimatedHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getEstimatedHeight--), [getEstimatedWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getEstimatedWidth--), [getFadeEffectBoundaryWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getFadeEffectBoundaryWidth--), [getFadeEffectColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getFadeEffectColor--), [getFocusable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getFocusable--), [getFocusBorderEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getFocusBorderEnable--), [getFocusBorderPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getFocusBorderPadding--), [getFocusBorderRadius](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getFocusBorderRadius--), [getFocusBorderWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getFocusBorderWidth--), [getForegroundElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getForegroundElement--), [getForegroundGravity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getForegroundGravity--), [getForwardHoverListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getForwardHoverListener--), [getForwardTouchListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getForwardTouchListener--), [getGesturePriority](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getGesturePriority-ohos_agp_components_Component_GestureType-), [getHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getHeight--), [getHorizontalPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getHorizontalPadding--), [getHorizontalPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getHorizontalPosition--), [getHoverEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getHoverEventListener--), [getId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getId--), [getKeyEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getKeyEventListener--), [getLayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getLayoutConfig--), [getLayoutDirection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getLayoutDirection--), [getLayoutDirectionResolved](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getLayoutDirectionResolved--), [getLayoutRefreshedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getLayoutRefreshedListener--), [getLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getLeft--), [getLocationOnScreen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getLocationOnScreen--), [getMarginBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMarginBottom--), [getMarginLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMarginLeft--), [getMarginRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMarginRight--), [getMargins](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMargins--), [getMarginsLeftAndRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMarginsLeftAndRight--), [getMarginsTopAndBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMarginsTopAndBottom--), [getMarginTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMarginTop--), [getMatrix](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMatrix--), [getMinHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMinHeight--), [getMinWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMinWidth--), [getMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMode--), [getModeResolved](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getModeResolved--), [getMouseEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMouseEventListener--), [getMousePointerStyleListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getMousePointerStyleListener--), [getName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getName--), [getPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPadding--), [getPaddingBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPaddingBottom--), [getPaddingEnd](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPaddingEnd--), [getPaddingLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPaddingLeft--), [getPaddingRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPaddingRight--), [getPaddingStart](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPaddingStart--), [getPaddingTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPaddingTop--), [getPivot](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPivot--), [getPivotX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPivotX--), [getPivotY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getPivotY--), [getResourceManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getResourceManager--), [getRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getRight--), [getRotation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getRotation--), [getRotationEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getRotationEventListener--), [getRotationSensitivity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getRotationSensitivity--), [getScale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScale--), [getScaledListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScaledListener--), [getScaleX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScaleX--), [getScaleY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScaleY--), [getScrollbarBackgroundColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarBackgroundColor--), [getScrollbarColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarColor--), [getScrollbarFadingDelay](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarFadingDelay--), [getScrollbarFadingDuration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarFadingDuration--), [getScrollBarMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollBarMode--), [getScrollbarRadius](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarRadius--), [getScrollbarRoundRect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarRoundRect--), [getScrollbarStartAngle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarStartAngle--), [getScrollbarSweepAngle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarSweepAngle--), [getScrollbarThickness](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollbarThickness--), [getScrollState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollState--), [getScrollValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getScrollValue-int-), [getSelfVisibleRect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getSelfVisibleRect-ohos_agp_utils_Rect-), [getShadowColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getShadowColor--), [getSpeechEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getSpeechEventListener--), [getTag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTag--), [getTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTop--), [getTouchEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTouchEventListener--), [getTransitionSymbol](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTransitionSymbol--), [getTranslation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTranslation--), [getTranslationX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTranslationX--), [getTranslationY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTranslationY--), [getTranslationZ](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getTranslationZ--), [getUserNextFocus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getUserNextFocus-int-), [getVerticalPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getVerticalPadding--), [getVerticalPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getVerticalPosition--), [getVisibility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getVisibility--), [getVisibleRectOnScreen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getVisibleRectOnScreen-ohos_agp_utils_Rect-int:A-), [getWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getWidth--), [getWindowVisibleRect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__getWindowVisibleRect-ohos_agp_utils_Rect-), [hasFocus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__hasFocus--), [hasFocusedEffect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__hasFocusedEffect--), [hasOverlaps](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__hasOverlaps--), [hideFocusBorder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__hideFocusBorder--), [invalidate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__invalidate--), [isBoundaryFadeEffectEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isBoundaryFadeEffectEnable--), [isBoundToWindow](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isBoundToWindow--), [isClickable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isClickable--), [isClipToContourEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isClipToContourEnabled--), [isComponentDisplayed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isComponentDisplayed--), [isEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isEnabled--), [isFadeEffected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isFadeEffected-ohos_agp_components_Component_FadeEffectEnum-), [isFocusable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isFocusable--), [isFocused](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isFocused--), [isIdentityMatrix](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isIdentityMatrix--), [isLongClickOn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isLongClickOn--), [isPressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isPressed--), [isRtl](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isRtl--), [isSaveStateEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isSaveStateEnabled--), [isScrollbarFadingOn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isScrollbarFadingOn--), [isScrollBarOn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isScrollBarOn-int-), [isScrollbarOverlapEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isScrollbarOverlapEnabled--), [isSelected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isSelected--), [isSoundEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isSoundEnable--), [isTouchFocusable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isTouchFocusable--), [isVibrationEffectEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__isVibrationEffectEnabled--), [notifyAccessibility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__notifyAccessibility-int-), [onAttributeConfigChanged](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__onAttributeConfigChanged-ohos_global_configuration_Configuration-), [onRestoreState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__onRestoreState-ohos_utils_Sequenceable-), [onRtlChanged](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__onRtlChanged-ohos_agp_components_Component_LayoutDirection-), [onSaveState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__onSaveState--), [performScale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__performScale--), [playSound](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__playSound-int-), [postLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__postLayout--), [refreshContour](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__refreshContour--), [release](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__release--), [removeBindStateChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__removeBindStateChangedListener-ohos_agp_components_Component_BindStateChangedListener-), [removeScrolledListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__removeScrolledListener-ohos_agp_components_Component_ScrolledListener-), [requestFocus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__requestFocus--), [requestForceForwardTouchEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__requestForceForwardTouchEvent-boolean-), [restoreComponentTreeState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__restoreComponentTreeState-ohos_utils_PlainArray-), [saveComponentTreeState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__saveComponentTreeState-ohos_utils_PlainArray-), [scrollBy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__scrollBy-int-int-), [scrollTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__scrollTo-int-int-), [setAccessibility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setAccessibility-int-), [setAccessibilityDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setAccessibilityDescription-java_lang_String-), [setAlpha](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setAlpha-float-), [setAltitude](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setAltitude-float-), [setBackground](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setBackground-ohos_agp_components_element_Element-), [setBindStateChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setBindStateChangedListener-ohos_agp_components_Component_BindStateChangedListener-), [setBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setBottom-int-), [setBoundaryFadeEffectEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setBoundaryFadeEffectEnable-boolean-), [setCanAcceptScrollListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setCanAcceptScrollListener-ohos_agp_components_Component_CanAcceptScrollListener-), [setCenterZoomFactor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setCenterZoomFactor-float-float-), [setCentralScrollMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setCentralScrollMode-boolean-), [setClickable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setClickable-boolean-), [setClickedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setClickedListener-ohos_agp_components_Component_ClickedListener-), [setClipEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setClipEnabled-boolean-), [setClipToContourEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setClipToContourEnabled-boolean-), [setComponentDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setComponentDescription-java_lang_CharSequence-), [setComponentMinSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setComponentMinSize-int-int-), [setComponentPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setComponentPosition-int-int-int-int-), [setComponentPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setComponentPosition-ohos_agp_utils_Rect-), [setComponentSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setComponentSize-int-int-), [setComponentStateChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setComponentStateChangedListener-ohos_agp_components_Component_ComponentStateChangedListener-), [setContentEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setContentEnable-boolean-), [setContentPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setContentPosition-float-float-), [setContentPositionX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setContentPositionX-float-), [setContentPositionY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setContentPositionY-float-), [setContour](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setContour-ohos_agp_utils_Contour-), [setContourRefreshedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setContourRefreshedListener-ohos_agp_components_Component_ContourRefreshedListener-), [setDoubleClickedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setDoubleClickedListener-ohos_agp_components_Component_DoubleClickedListener-), [setDragAcceptAngle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setDragAcceptAngle-float-), [setDraggedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setDraggedListener-int-ohos_agp_components_Component_DraggedListener-), [setEditEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setEditEventListener-ohos_agp_components_Component_EditEventListener-), [setEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setEnabled-boolean-), [setEstimatedSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setEstimatedSize-int-int-), [setEstimateSizeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setEstimateSizeListener-ohos_agp_components_Component_EstimateSizeListener-), [setFadeEffectBoundaryWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFadeEffectBoundaryWidth-int-), [setFadeEffectColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFadeEffectColor-ohos_agp_utils_Color-), [setFocusable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusable-int-), [setFocusBorderEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusBorderEnable-boolean-), [setFocusBorderPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusBorderPadding-int-), [setFocusBorderRadius](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusBorderRadius-float-), [setFocusBorderRadius](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusBorderRadius-float:A-), [setFocusBorderWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusBorderWidth-int-), [setFocusChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusChangedListener-ohos_agp_components_Component_FocusChangedListener-), [setFocusedEffect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setFocusedEffect-boolean-), [setForeground](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setForeground-ohos_agp_components_element_Element-), [setForegroundGravity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setForegroundGravity-int-), [setForwardHoverListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setForwardHoverListener-ohos_agp_components_Component_ForwardHoverListener-), [setForwardTouchListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setForwardTouchListener-ohos_agp_components_Component_ForwardTouchListener-), [setGesturePriority](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setGesturePriority-ohos_agp_components_Component_GestureType-int-), [setHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setHeight-int-), [setHorizontalPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setHorizontalPadding-int-int-), [setHorizontalPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setHorizontalPosition-int-int-), [setHoverEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setHoverEventListener-ohos_agp_components_Component_HoverEventListener-), [setId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setId-int-), [setKeyEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setKeyEventListener-ohos_agp_components_Component_KeyEventListener-), [setLayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setLayoutConfig-ohos_agp_components_ComponentContainer_LayoutConfig-), [setLayoutDirection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setLayoutDirection-ohos_agp_components_Component_LayoutDirection-), [setLayoutRefreshedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setLayoutRefreshedListener-ohos_agp_components_Component_LayoutRefreshedListener-), [setLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setLeft-int-), [setLongClickable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setLongClickable-boolean-), [setLongClickedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setLongClickedListener-ohos_agp_components_Component_LongClickedListener-), [setMarginBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMarginBottom-int-), [setMarginLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMarginLeft-int-), [setMarginRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMarginRight-int-), [setMarginsLeftAndRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMarginsLeftAndRight-int-int-), [setMarginsTopAndBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMarginsTopAndBottom-int-int-), [setMarginTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMarginTop-int-), [setMinHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMinHeight-int-), [setMinWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMinWidth-int-), [setMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMode-int-), [setMouseEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMouseEventListener-ohos_agp_components_Component_MouseEventListener-), [setMousePointerStyleListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setMousePointerStyleListener-ohos_agp_components_Component_MousePointerStyleListener-), [setName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setName-java_lang_String-), [setOnDragListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setOnDragListener-ohos_agp_components_Component_OnDragListener-), [setPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPadding-int-int-int-int-), [setPaddingBottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPaddingBottom-int-), [setPaddingLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPaddingLeft-int-), [setPaddingRelative](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPaddingRelative-int-int-int-int-), [setPaddingRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPaddingRight-int-), [setPaddingTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPaddingTop-int-), [setPivot](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPivot-float-float-), [setPivot](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPivot-ohos_agp_utils_Point-), [setPivotX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPivotX-float-), [setPivotY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPivotY-float-), [setPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPosition-int-int-), [setPositionX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPositionX-int-), [setPositionY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPositionY-int-), [setPressState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setPressState-boolean-), [setRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setRight-int-), [setRotation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setRotation-float-), [setRotationEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setRotationEventListener-ohos_agp_components_Component_RotationEventListener-), [setRotationSensitivity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setRotationSensitivity-float-), [setScale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScale-float-float-), [setScaledListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScaledListener-ohos_agp_components_Component_ScaledListener-), [setScaleX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScaleX-float-), [setScaleY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScaleY-float-), [setScrollbarBackgroundColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarBackgroundColor-ohos_agp_utils_Color-), [setScrollbarColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarColor-ohos_agp_utils_Color-), [setScrollbarFadingDelay](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarFadingDelay-int-), [setScrollbarFadingDuration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarFadingDuration-int-), [setScrollbarFadingEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarFadingEnabled-boolean-), [setScrollBarMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollBarMode-int-), [setScrollbarOverlapEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarOverlapEnabled-boolean-), [setScrollbarRadius](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarRadius-float-), [setScrollbarRoundRect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarRoundRect-boolean-), [setScrollbarStartAngle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarStartAngle-float-), [setScrollbarSweepAngle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarSweepAngle-float-), [setScrollbarThickness](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrollbarThickness-int-), [setScrolledListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setScrolledListener-ohos_agp_components_Component_ScrolledListener-), [setSelected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setSelected-boolean-), [setShadowColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setShadowColor-ohos_agp_utils_Color-), [setShadowStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setShadowStyle-ohos_agp_components_Component_ShadowSize-ohos_agp_components_Component_ShadowMode-ohos_agp_components_Component_ShadowDevice-), [setSoundEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setSoundEnable-boolean-), [setSpeechEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setSpeechEventListener-ohos_agp_components_Component_SpeechEventListener-), [setTag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTag-java_lang_Object-), [setTop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTop-int-), [setTouchEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTouchEventListener-ohos_agp_components_Component_TouchEventListener-), [setTouchFocusable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTouchFocusable-boolean-), [setTransitionSymbol](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTransitionSymbol-java_lang_String-), [setTranslation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTranslation-float-float-), [setTranslationX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTranslationX-float-), [setTranslationY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTranslationY-float-), [setTranslationZ](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setTranslationZ-float-), [setUnconsumedKeyEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setUnconsumedKeyEventListener-ohos_agp_components_Component_UnconsumedKeyEventListener-), [setUserNextFocus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setUserNextFocus-int-int-), [setVerticalPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setVerticalPadding-int-int-), [setVerticalPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setVerticalPosition-int-int-), [setVibrationEffectEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setVibrationEffectEnabled-boolean-), [setVisibility](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setVisibility-int-), [setWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__setWidth-int-), [showFocusBorder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__showFocusBorder--), [simulateClick](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__simulateClick--), [simulateDrag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__simulateDrag--), [startDragAndDrop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__startDragAndDrop-ohos_agp_utils_MimeData-ohos_agp_components_Component_DragFeedbackProvider-), [subscribeVoiceEvents](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__subscribeVoiceEvents-ohos_agp_components_Component_VoiceEvent-), [unsubscribeVoiceEvents](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__unsubscribeVoiceEvents--)  
  
Methods inherited from interface ohos.agp.components.[ComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709)  
---  
[getComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709#ZH-CN_TOPIC_0000001054558709__getComponentParent--), [postLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709#ZH-CN_TOPIC_0000001054558709__postLayout--)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]FOCUS_CHILDREN_FIRST

public static final int FOCUS_CHILDREN_FIRST

Indicates that this component takes focus before any of its children.

**Since:**

3

**See Also:**

[setFocusOrder(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setFocusOrder-int-), [Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_ComponentContainer_FOCUS_CHILDREN_FIRST)

#### [h2]FOCUS_CHILDREN_HIDE

public static final int FOCUS_CHILDREN_HIDE

Indicates that this component blocks its children from getting focus, even if they are focusable.

**Since:**

3

**See Also:**

[setFocusOrder(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setFocusOrder-int-), [Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_ComponentContainer_FOCUS_CHILDREN_HIDE)

#### [h2]FOCUS_PARENT_FIRST

public static final int FOCUS_PARENT_FIRST

Indicates that this component takes focus only if none of its children request focus.

**Since:**

3

**See Also:**

[setFocusOrder(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__setFocusOrder-int-), [Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_components_ComponentContainer_FOCUS_PARENT_FIRST)

#### [h2]mArrangeListener

protected [ComponentContainer.ArrangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_arrangelistener-0000001120712365) mArrangeListener

Customizes children components' arrangement during arrange process

#### Constructor Detail

#### [h2]ComponentContainer

public ComponentContainer​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context)

Default constructor used to create a ComponentContainer instance by using the default attribute set and style.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context | Indicates the application context.  
  
#### [h2]ComponentContainer

public ComponentContainer​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [AttrSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attrset-0000001054518718) attrSet)

A constructor used to create a ComponentContainer instance by using specified attribute set and default style after the XML file is parsed.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context | Indicates the application context.  
attrSet | Indicates the attribute set to be used.  
  
#### [h2]ComponentContainer

public ComponentContainer​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [AttrSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attrset-0000001054518718) attrSet, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) styleName)

A constructor used to create a ComponentContainer instance by using specified attribute set and specified style after the XML file is parsed.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context | Indicates the application context.  
attrSet | Indicates the attribute set to be used.  
styleName | Indicates the style name to use.  
  
#### Method Detail

#### [h2]verifyLayoutConfig

public [ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) verifyLayoutConfig​([ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) config)

Verifies layout parameters based on the current layout type.

**Specified by:**

[verifyLayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709#ZH-CN_TOPIC_0000001054558709__verifyLayoutConfig-ohos_agp_components_ComponentContainer_LayoutConfig-) in interface [ComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
config | Indicates a group of layout parameters to be converted into a ComponentContainer instance.  
  
**Returns:**

Returns the LayoutConfig instance, which represents the layout parameters.

#### [h2]createLayoutConfig

public [ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) createLayoutConfig​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [AttrSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attrset-0000001054518718) attrSet)

Creates layout parameters using the attribute set of a child component.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context | Indicates the application context.  
attrSet | Indicates the attribute set.  
  
**Returns:**

Returns the layout parameters created.

#### [h2]setArrangeListener

protected void setArrangeListener​([ComponentContainer.ArrangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_arrangelistener-0000001120712365) listener)

Adds a listener on component-container's arrangement process.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
listener | Specifies the arrangement listener for a component container.  
  
**Since:**

5

**See Also:**

[ComponentContainer.ArrangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_arrangelistener-0000001120712365)

#### [h2]findComponentById

public <T extends [Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)> T findComponentById​(int id)

Finds the component with the given ID.

If the ID of the current component itself matches the given ID, the current component is returned. Otherwise, null is returned.

**Overrides:**

[findComponentById](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__findComponentById-int-) in class [Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
id | Indicates a unique identifier of a component.  
  
**Returns:**

Returns the component whose ID matches the given ID; returns null if no component is found.

#### [h2]addComponent

public void addComponent​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) childComponent)

Adds a component to the end of the queue by invoking [addComponent(ohos.agp.components.Component,int index)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__addComponent-ohos_agp_components_Component-int-) internally.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
childComponent | Indicates the child component to add.  
  
#### [h2]addComponent

public void addComponent​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) childComponent, int width, int height)

Adds a component and sets its width and height.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
childComponent | Indicates the child component to add.  
width | Indicates the width of the child component, in pixels.  
height | Indicates the height of the child component, in pixels.  
  
#### [h2]addComponent

public void addComponent​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) childComponent, [ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) layoutConfig)

Adds a component and sets its layout parameters.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
childComponent | Indicates the child component to add.  
layoutConfig | Indicates the layout parameters of the child component.  
  
#### [h2]addComponent

public void addComponent​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) childComponent, int index, [ComponentContainer.LayoutConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer_layoutconfig-0000001054119972) layoutConfig)

Adds a component and sets its layout parameters and location.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
childComponent | Indicates the child component to add.  
index | Indicates where to add the child component. The value -1 means to add the child component to the end of the queue.  
layoutConfig | Indicates the layout parameters of the child component.  
  
#### [h2]addComponent

public void addComponent​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) childComponent, int index)

Adds a component to the specified position.

If no layout parameters are set for this child component, the default layout parameters of ComponentContainer are used.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
childComponent | Indicates the child component to add.  
index | Indicates where to add the child component. The value -1 means to add the component to the end. If a number greater than the value of getChildCount() is provided, a runtime exception is returned.  
  
#### [h2]getComponentAt

public [Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) getComponentAt​(int index)

Obtains a child component using an index.

ComponentContainer uses an internal list to store child component information. You can obtain specified child components using the index.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the index of child components.  
  
**Returns:**

Returns the child component.

#### [h2]getChildIndex

public int getChildIndex​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) component)

Queries the position of a child component.

**Specified by:**

[getChildIndex](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709#ZH-CN_TOPIC_0000001054558709__getChildIndex-ohos_agp_components_Component-) in interface [ComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
component | Indicates the child component to query.  
  
**Returns:**

Returns a positive integer, which represents the position of the child component in the parent component; returns -1 if the child component is not included in the parent component.

#### [h2]findComponentHolderById

public [ComponentHolder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentholder-0000001060268765) findComponentHolderById​(int resId)

Gets an instance of componentHolder using resource id.

**Overrides:**

[findComponentHolderById](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__findComponentHolderById-int-) in class [Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
resId | Resource id of componentHolder.  
  
**Returns:**

Instance of componentHolder.

**Since:**

4

#### [h2]removeComponent

public void removeComponent​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) component)

Removes a child component from the parent component.

**Specified by:**

[removeComponent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709#ZH-CN_TOPIC_0000001054558709__removeComponent-ohos_agp_components_Component-) in interface [ComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
component | Indicates the child component to remove.  
  
#### [h2]removeComponentAt

public void removeComponentAt​(int index)

Removes the component from a specified position in the component list.

**Specified by:**

[removeComponentAt](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709#ZH-CN_TOPIC_0000001054558709__removeComponentAt-int-) in interface [ComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index | Indicates the position index of the component to remove.  
  
#### [h2]removeComponentById

public void removeComponentById​(int id)

Removes a component based on its ID.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
id | Indicates the component ID.  
  
**Since:**

4

#### [h2]removeComponents

public void removeComponents​(int start, int count)

Removes all components from specified positions in a component list.

**Specified by:**

[removeComponents](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709#ZH-CN_TOPIC_0000001054558709__removeComponents-int-int-) in interface [ComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
start | Indicates the position index of the first removed component.  
count | Indicates the quantity of components to remove.  
  
#### [h2]removeAllComponents

public void removeAllComponents​()

Clears all components managed by ComponentContainer.

#### [h2]moveChildToFront

public void moveChildToFront​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) component)

Brings a child component to the front.

**Specified by:**

[moveChildToFront](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709#ZH-CN_TOPIC_0000001054558709__moveChildToFront-ohos_agp_components_Component-) in interface [ComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
component | Indicates the component to bring to the front.  
  
#### [h2]getChildCount

public int getChildCount​()

Obtains the quantity of child components.

**Returns:**

Returns the quantity of child components.

#### [h2]informConfigurationChanged

public void informConfigurationChanged​([Configuration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configuration-0000001054238847) config)

Description copied from class: [Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__informConfigurationChanged-ohos_global_configuration_Configuration-)

Dispatches a configuration change event. The event processing logic is implemented by [Component.onAttributeConfigChanged(ohos.global.configuration.Configuration)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__onAttributeConfigChanged-ohos_global_configuration_Configuration-).

**Overrides:**

[informConfigurationChanged](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__informConfigurationChanged-ohos_global_configuration_Configuration-) in class [Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
config | Indicates the latest configuration.  
  
**See Also:**

[Component.onAttributeConfigChanged(Configuration)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__onAttributeConfigChanged-ohos_global_configuration_Configuration-)

#### [h2]getFocusOrder

public int getFocusOrder​()

Obtains the focusability of this component relative to its descendants.

Currently, this affects non-touch focus changes only.

**Returns:**

Returns the focusability, which can be [FOCUS_PARENT_FIRST](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__FOCUS_PARENT_FIRST), [FOCUS_CHILDREN_FIRST](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__FOCUS_CHILDREN_FIRST), or [FOCUS_CHILDREN_HIDE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__FOCUS_CHILDREN_HIDE).

**Since:**

4

#### [h2]setFocusOrder

public void setFocusOrder​(int focusability)

Sets the focusability of this component relative to its descendants.

Currently, this affects non-touch focus changes only.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
focusability | Indicates the focusability, which can be [FOCUS_PARENT_FIRST](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__FOCUS_PARENT_FIRST), [FOCUS_CHILDREN_FIRST](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__FOCUS_CHILDREN_FIRST), or [FOCUS_CHILDREN_HIDE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentcontainer-0000001054120043#ZH-CN_TOPIC_0000001054120043__FOCUS_CHILDREN_HIDE).  
  
**Since:**

4

#### [h2]setAutoLayout

public void setAutoLayout​(boolean autoLayout)

Sets whether to enable automatic layout.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
autoLayout | Indicates the automatic layout status. true means to enable automatic layout, and false means to disable it.  
  
#### [h2]setAutoLayout

public void setAutoLayout​(boolean autoLayout, int columnType)

Sets whether to enable automatic layout and set the column type.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
autoLayout | true means to enable automatic layout, and false means to disable it.  
columnType | Indicates the column type to use.  
  
#### [h2]getAutoLayout

public boolean getAutoLayout​()

Obtains whether automatic layout is enabled.

**Returns:**

Returns true if automatic layout is enabled; returns false otherwise.

#### [h2]onDrag

public boolean onDrag​([Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683) component, [DragEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dragevent-0000001054838670) event)

Called when a drag event is dispatched to the component.

**Specified by:**

[onDrag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709#ZH-CN_TOPIC_0000001054558709__onDrag-ohos_agp_components_Component-ohos_agp_components_DragEvent-) in interface [ComponentParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentparent-0000001054558709)

**Overrides:**

[onDrag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__onDrag-ohos_agp_components_Component-ohos_agp_components_DragEvent-) in class [Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
component | Indicates the component.  
event | Indicates the drag event.  
  
**Returns:**

Returns true if the drag event is processed correctly; returns false otherwise.

#### [h2]setLayoutManager

public void setLayoutManager​([LayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layoutmanager-0000001071295543) layoutManager)

Sets a [LayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layoutmanager-0000001071295543) instance, which is used to lay out relevant child components.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
layoutManager | Indicates the layout manager to set.  
  
**Since:**

5

#### [h2]getLayoutManager

public [LayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layoutmanager-0000001071295543) getLayoutManager​()

Obtains a [LayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layoutmanager-0000001071295543) object, which is used to lay out relevant child components.

**Returns:**

Returns a [LayoutManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/layoutmanager-0000001071295543) object of this component container.

**Since:**

5

#### [h2]setComponentTransition

public void setComponentTransition​([ComponentTransition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componenttransition-0000001060157225) componentTransition)

Sets a [ComponentTransition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componenttransition-0000001060157225) object.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
componentTransition | Indicates the ComponentTransition object to be used. This parameter can not be null.  
  
**Since:**

4

**See Also:**

[ComponentTransition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componenttransition-0000001060157225)

#### [h2]getComponentTransition

public [ComponentTransition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componenttransition-0000001060157225) getComponentTransition​()

Obtains the [ComponentTransition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componenttransition-0000001060157225) object of the component.

**Returns:**

Returns the [ComponentTransition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componenttransition-0000001060157225) object.

**Since:**

4

#### [h2]setClipToChildBoundsEnabled

public void setClipToChildBoundsEnabled​(boolean enable)

Controls whether the drawing range of a child component can exceed the boundary of the child component.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
enable | The value true means allowing the drawing range of a child component to exceed its own boundary, and false means the opposite.  
  
**Since:**

7

#### [h2]isClipToChildBoundsEnabled

public boolean isClipToChildBoundsEnabled​()

Obtains whether the drawing range of a child component can exceed the boundary of the child component.

**Returns:**

Returns whether the drawing range of a child component can exceed the boundary of the child component.

**Since:**

7

#### [h2]setClipToPaddingBoundsEnabled

public void setClipToPaddingBoundsEnabled​(boolean enable)

Controls whether the drawing range of a component can exceed the boundary of its padding bounds.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
enable | The value true means allowing the drawing range of a component to exceed the boundary of its padding bounds, and false means the opposite.  
  
**Since:**

7

#### [h2]isClipToPaddingBoundsEnabled

public boolean isClipToPaddingBoundsEnabled​()

Obtains whether the drawing range of a component can exceed the boundary of its padding bounds.

**Returns:**

Returns whether the drawing range of a component can exceed the boundary of its padding bounds.

**Since:**

7

#### [h2]setTouchEventSplitable

public void setTouchEventSplitable​(boolean enable)

Controls whether dispatch split touch event to multiple children. The feature is disabled by default.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
enable | The value true means allowing to dispatch split touch event to multiple children, and false means not allow.  
  
**Since:**

7

#### [h2]isTouchEventSplitable

public boolean isTouchEventSplitable​()

Obtains whether the touch events of this ComponentContainer can be split.

**Returns:**

true if touch events dispatched to this ComponentContainer can be split to multiple children.

**Since:**

7

#### [h2]dispatchSaveState

protected void dispatchSaveState​([PlainArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/plainarray-0000001054358985)<[Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)> stateContainer)

Distribute the state saving process to save the states of this component and its child components.

**Overrides:**

[dispatchSaveState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__dispatchSaveState-ohos_utils_PlainArray-) in class [Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
stateContainer | Indicates the container to hold the state information.  
  
#### [h2]dispatchRestoreState

protected void dispatchRestoreState​([PlainArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/plainarray-0000001054358985)<[Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)> stateContainer)

Distribute the state restore process to restore the states of this component and its child components.

**Overrides:**

[dispatchRestoreState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683#ZH-CN_TOPIC_0000001054678683__dispatchRestoreState-ohos_utils_PlainArray-) in class [Component](https://developer.harmonyos.com/cn/docs/documentation/doc-references/component-0000001054678683)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
stateContainer | Indicates the container that holds the state information to be restored.
