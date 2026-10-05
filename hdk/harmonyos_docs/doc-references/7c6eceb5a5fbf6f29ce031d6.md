---
name: document/cn/doc-references/nodechangelistener-0000001054678607
title: NodeChangeListener
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/nodechangelistener-0000001054678607
source: portal
---

# NodeChangeListener
    
    public interface NodeChangeListener
    extends [EventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventlistener-0000001054838538)  
  
---  
A listener for receiving preference node change events.

**Since:**

1.4

**See Also:**

[Preferences](https://developer.harmonyos.com/cn/docs/documentation/doc-references/preferences-0000001054518652), [NodeChangeEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nodechangeevent-0000001054439925), [PreferenceChangeListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/preferencechangelistener-0000001054838592)

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [childAdded](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nodechangelistener-0000001054678607#ZH-CN_TOPIC_0000001054678607__childAdded-java_util_prefs_NodeChangeEvent-)​([NodeChangeEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nodechangeevent-0000001054439925) evt) |  This method gets called when a child node is added.   
void | [childRemoved](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nodechangelistener-0000001054678607#ZH-CN_TOPIC_0000001054678607__childRemoved-java_util_prefs_NodeChangeEvent-)​([NodeChangeEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nodechangeevent-0000001054439925) evt) |  This method gets called when a child node is removed.   
  
#### Method Detail

#### [h2]childAdded

void childAdded​([NodeChangeEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nodechangeevent-0000001054439925) evt)

This method gets called when a child node is added. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
evt  |  A node change event object describing the parent and child node.  
  
#### [h2]childRemoved

void childRemoved​([NodeChangeEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nodechangeevent-0000001054439925) evt)

This method gets called when a child node is removed. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
evt  |  A node change event object describing the parent and child node.
