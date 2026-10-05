---
name: document/cn/doc-references/iapplycomponentpaddinglistener-0000001091611342
title: IApplyComponentPaddingListener
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/iapplycomponentpaddinglistener-0000001091611342
source: portal
---

# IApplyComponentPaddingListener
    
    public interface IApplyComponentPaddingListener  
  
---  
Listen for [ComponentPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentpadding-0000001091771012) changes. 

If a listener is set via [Window#setOnApplyComponentPaddingListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/window-0000001054358748#ZH-CN_TOPIC_0000001054358748__setOnApplyComponentPaddingListener-ohos_agp_window_service_IApplyComponentPaddingListener-), [notifyPaddingChange(ohos.agp.window.service.ComponentPadding)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iapplycomponentpaddinglistener-0000001091611342#ZH-CN_TOPIC_0000001091611342__notifyPaddingChange-ohos_agp_window_service_ComponentPadding-) will be called upon [ComponentPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentpadding-0000001091771012) changes so that applications will use the new padding values for layout.

**Since:**

5

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [notifyPaddingChange](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iapplycomponentpaddinglistener-0000001091611342#ZH-CN_TOPIC_0000001091611342__notifyPaddingChange-ohos_agp_window_service_ComponentPadding-)​([ComponentPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentpadding-0000001091771012) padding) |  Called when a [ComponentPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentpadding-0000001091771012) object has changed.   
  
#### Method Detail

#### [h2]notifyPaddingChange

void notifyPaddingChange​([ComponentPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentpadding-0000001091771012) padding)

Called when a [ComponentPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentpadding-0000001091771012) object has changed. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
padding  |  Indicate the [ComponentPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/componentpadding-0000001091771012) object with new padding values.  
  
**Since:**

5
