---
name: document/cn/doc-references/jsmessageresult-0000001091771008
title: JsMessageResult
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/jsmessageresult-0000001091771008
source: portal
---

# JsMessageResult
    
    public interface JsMessageResult  
  
---  
Responds to the callback on a message pop-up. A JsMessageResult object will be used in [BrowserAgent#onJsMessageShow](https://developer.harmonyos.com/cn/docs/documentation/doc-references/browseragent-0000001120951629#ZH-CN_TOPIC_0000001120951629__onJsMessageShow-ohos_agp_components_webengine_WebView-java_lang_String-java_lang_String-boolean-ohos_agp_components_webengine_JsMessageResult-).

**Since:**

5

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [cancel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/jsmessageresult-0000001091771008#ZH-CN_TOPIC_0000001091771008__cancel--)​() |  Handles the situation where a user cancelled the message pop-up.   
void | [confirm](https://developer.harmonyos.com/cn/docs/documentation/doc-references/jsmessageresult-0000001091771008#ZH-CN_TOPIC_0000001091771008__confirm--)​() |  Handles the situation where a user confirmed the message pop-up.   
  
#### Method Detail

#### [h2]confirm

void confirm​()

Handles the situation where a user confirmed the message pop-up. 

**Since:**

5

#### [h2]cancel

void cancel​()

Handles the situation where a user cancelled the message pop-up. 

**Since:**

5
