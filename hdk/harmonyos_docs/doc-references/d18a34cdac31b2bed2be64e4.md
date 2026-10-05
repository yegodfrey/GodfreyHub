---
name: document/cn/doc-references/resultsethook-0000001054358810
title: ResultSetHook
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/resultsethook-0000001054358810
source: portal
---

# ResultSetHook
    
    public interface ResultSetHook  
  
---  
Provides the method for creating a result set. 

This class allows you to customize your result set.

**Since:**

1

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [createHook](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsethook-0000001054358810#ZH-CN_TOPIC_0000001054358810__createHook-java_lang_String-java_lang_String:A-ohos_data_resultset_ResultSet-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) sql, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] sqlArgs, [ResultSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultset-0000001054838776) resultSet) |  Creates a hook to customize a specified result set.   
  
#### Method Detail

#### [h2]createHook

void createHook​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) sql, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] sqlArgs, [ResultSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultset-0000001054838776) resultSet)

Creates a hook to customize a specified result set. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
sql  |  Indicates the SQL statement used to customize the result set.  
sqlArgs  |  Indicates the parameters in the SQL statement. The values of these parameters are strings.  
resultSet  |  Indicates the result set to customize.  
  
**Since:**

1

**See Also:**

[RdbStore](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbstore-0000001054518828)
