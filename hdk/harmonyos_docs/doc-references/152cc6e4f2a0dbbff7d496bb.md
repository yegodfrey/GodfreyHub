---
name: document/cn/doc-references/pathmatcher-0000001054558683
title: PathMatcher
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/pathmatcher-0000001054558683
source: portal
---

# PathMatcher

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.aafwk.ability.PathMatcher
    
    public class PathMatcher
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Stores and matches database and file paths in an ability using the Data template.

**Since:**

1

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [NO_MATCH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmatcher-0000001054558683#ZH-CN_TOPIC_0000001054558683__NO_MATCH) |  Indicates the result returned if the given path does not exist.   
  
#### Constructor Summary

Constructor | Description  
---|---  
[PathMatcher](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmatcher-0000001054558683#ZH-CN_TOPIC_0000001054558683__PathMatcher--)​() |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [addPath](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmatcher-0000001054558683#ZH-CN_TOPIC_0000001054558683__addPath-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path, int id) |  Adds an existing database or file path to the cache.   
int | [getPathId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmatcher-0000001054558683#ZH-CN_TOPIC_0000001054558683__getPathId-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path) |  Matches a database or file path to obtain the path ID.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]NO_MATCH

public static final int NO_MATCH

Indicates the result returned if the given path does not exist. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_aafwk_ability_PathMatcher_NO_MATCH)

#### Constructor Detail

#### [h2]PathMatcher

public PathMatcher​()

#### Method Detail

#### [h2]addPath

public boolean addPath​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path, int id)

Adds an existing database or file path to the cache. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
path  |  Indicates the absolute path of the database or file.  
id  |  Indicates the ID of the database or file path.  
  
**Returns:**

Returns true if the operation is successful; returns false otherwise.

**Since:**

1

#### [h2]getPathId

public int getPathId​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path)

Matches a database or file path to obtain the path ID. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
path  |  Indicates the absolute path of the database or file.  
  
**Returns:**

Returns the path ID if a match is found for the input database or file path; returns [NO_MATCH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmatcher-0000001054558683#ZH-CN_TOPIC_0000001054558683__NO_MATCH) otherwise.

**Since:**

1
