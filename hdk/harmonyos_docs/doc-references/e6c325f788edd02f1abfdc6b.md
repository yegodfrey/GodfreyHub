---
name: document/cn/doc-references/permanent-0000001054358401
title: Permanent
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/permanent-0000001054358401
source: portal
---

# Permanent
    
    [@Retention](https://developer.harmonyos.com/cn/docs/documentation/doc-references/retention-0000001054238461)([CLASS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/retentionpolicy-0000001054678429#ZH-CN_TOPIC_0000001054678429__CLASS))
    [@Target](https://developer.harmonyos.com/cn/docs/documentation/doc-references/target-0000001054678431)([TYPE_USE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementtype-0000001054238459#ZH-CN_TOPIC_0000001054238459__TYPE_USE))
    public @interface Permanent  
  
---  
Annotates persistent memory objects. 

You can use this class to annotate an object in the new statement as a persistent memory object, so that the object will not be recycled by the RC of the Ark compiler. 

Take "Integer cache" from "Integer.java" file as an example: 
    
    private static class IntegerCache {
           static final int low = -128;
           static final int high;
           static final Integer cache[];
    
           static {
               ...;
               for(int k = 0; k < cache.length; k++)
                   cache[k] = new @Permanent Integer(j++);
               ...;
           }
           ...;
       }
     

**Since:**

1
