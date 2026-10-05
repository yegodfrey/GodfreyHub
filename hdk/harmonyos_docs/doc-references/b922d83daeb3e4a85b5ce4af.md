---
name: document/cn/doc-references/synccallback-0000001054120060
title: SyncCallback
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/synccallback-0000001054120060
source: portal
---

SyncCallback
    
    public interface SyncCallback  
  
---  
A callback interface used to receive database synchronization results.**Since:** 1Method Summary Modifier and Type | Method | Description  
---|---|---  
void | [syncCompleted](https://developer.harmonyos.com/cn/docs/documentation/doc-references/synccallback-0000001054120060#ZH-CN_TOPIC_0000001054120060__syncCompleted-java_util_Map-)​([Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460),[Integer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/integer-0000001054119702)> results) |  A callback method used to receive database synchronization results.   
Method Detail [h2]syncCompleted void syncCompleted​([Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460),[Integer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/integer-0000001054119702)> results) A callback method used to receive database synchronization results. You must override this method. It is called after a database synchronization is complete. **Parameters:** Parameter Name | Parameter Description  
---|---  
results  |  Indicates the synchronization results. 0 if the synchronization succeeds; 1 if the synchronization fails; 2 if the synchronization times out.  
**Since:** 1
