---
name: document/cn/doc-references/propertychangelistener-0000001054199698
title: PropertyChangeListener
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/propertychangelistener-0000001054199698
source: portal
---

# PropertyChangeListener
    
    public interface PropertyChangeListener
    extends [EventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventlistener-0000001054838538)  
  
---  
A "PropertyChange" event gets fired whenever a bean changes a "bound" property. You can register a PropertyChangeListener with a source bean so as to be notified of any bound property updates.

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [propertyChange](https://developer.harmonyos.com/cn/docs/documentation/doc-references/propertychangelistener-0000001054199698#ZH-CN_TOPIC_0000001054199698__propertyChange-java_beans_PropertyChangeEvent-)​([PropertyChangeEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/propertychangeevent-0000001054358405) evt) |  This method gets called when a bound property is changed.   
  
#### Method Detail

#### [h2]propertyChange

void propertyChange​([PropertyChangeEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/propertychangeevent-0000001054358405) evt)

This method gets called when a bound property is changed. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
evt  |  A PropertyChangeEvent object describing the event source and the property that has changed.
