---
name: document/cn/doc-references/pagesliderindicator_indicatorselectionhandler-0000001071323528
title: PageSliderIndicator.IndicatorSelectionHandler
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/pagesliderindicator_indicatorselectionhandler-0000001071323528
source: portal
---

# PageSliderIndicator.IndicatorSelectionHandler  
  
[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.agp.database.Publisher](https://developer.harmonyos.com/cn/docs/documentation/doc-references/publisher-0000001054678730)<[PageSlider.PageChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pageslider_pagechangedlistener-0000001054238709)> |---|---ohos.agp.components.PageSliderIndicator.IndicatorSelectionHandler
    
    protected static class PageSliderIndicator.IndicatorSelectionHandler
    extends [Publisher](https://developer.harmonyos.com/cn/docs/documentation/doc-references/publisher-0000001054678730)<[PageSlider.PageChangedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pageslider_pagechangedlistener-0000001054238709)>  
  
---  
Processes events of selecting a page contained in the [PageSlider](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pageslider-0000001054838672) instance. 

This class is used to listen for and process events on page selection changes in [PageSlider](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pageslider-0000001054838672), so as to update the display of the indicator represented by [PageSliderIndicator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pagesliderindicator-0000001054358706) that is associated with [PageSlider](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pageslider-0000001054838672).

**Since:**

5

#### Field Summary

Fields inherited from class ohos.agp.database.[Publisher](https://developer.harmonyos.com/cn/docs/documentation/doc-references/publisher-0000001054678730)  
---  
[mSubscribers](https://developer.harmonyos.com/cn/docs/documentation/doc-references/publisher-0000001054678730#ZH-CN_TOPIC_0000001054678730__mSubscribers)  
  
#### Constructor Summary

Modifier | Constructor | Description  
---|---|---  
protected  | [IndicatorSelectionHandler](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pagesliderindicator_indicatorselectionhandler-0000001071323528#ZH-CN_TOPIC_0000001071323528__IndicatorSelectionHandler--)​() |     
  
#### Method Summary

Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from class ohos.agp.database.[Publisher](https://developer.harmonyos.com/cn/docs/documentation/doc-references/publisher-0000001054678730)  
---  
[registerSubscriber](https://developer.harmonyos.com/cn/docs/documentation/doc-references/publisher-0000001054678730#ZH-CN_TOPIC_0000001054678730__registerSubscriber-T-), [unregisterSubscriber](https://developer.harmonyos.com/cn/docs/documentation/doc-references/publisher-0000001054678730#ZH-CN_TOPIC_0000001054678730__unregisterSubscriber-long-), [unregisterSubscriber](https://developer.harmonyos.com/cn/docs/documentation/doc-references/publisher-0000001054678730#ZH-CN_TOPIC_0000001054678730__unregisterSubscriber-T-)  
  
#### Constructor Detail

#### [h2]IndicatorSelectionHandler

protected IndicatorSelectionHandler​()
