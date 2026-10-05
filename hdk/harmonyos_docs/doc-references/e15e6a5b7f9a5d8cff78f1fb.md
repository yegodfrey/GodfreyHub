---
name: document/cn/doc-references/commonitem-0000001078320140
title: CommonItem
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/commonitem-0000001078320140
source: portal
---

# CommonItem

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.data.search.model.IndexData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157) |---|---[ohos.data.search.schema.Schema](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273)<[CommonItem](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140)> |---|---|---ohos.data.search.schema.CommonItem
    
    public final class CommonItem
    extends [Schema](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273)<[CommonItem](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140)>  
  
---  
Represents the common index schema. 

The common index schema is used to develop basic search functions and applies to all common scenarios. It supports the following index fields: identifier, title, subtitle, name, alternateName, category, dateCreate, keywords, description, thumbnailUrl, url, potentialAction, reserved1, and reserved2. Among these fields, identifier is mandatory and can be set via the [Schema.setIdentifier(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setIdentifier-java_lang_String-) method. All other schemas will inherit this class, for example, [ContactItem](https://developer.harmonyos.com/cn/docs/documentation/doc-references/contactitem-0000001078480112), [MessageItem](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messageitem-0000001120951637), [DocumentItem](https://developer.harmonyos.com/cn/docs/documentation/doc-references/documentitem-0000001120712377), and [EmailItem](https://developer.harmonyos.com/cn/docs/documentation/doc-references/emailitem-0000001121107271).

**Since:**

5

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [ALTERNATE_NAME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__ALTERNATE_NAME) |  Indicates the index field name of alternateName.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [CATEGORY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__CATEGORY) |  Indicates the index field name of category.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [DATE_CREATE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__DATE_CREATE) |  Indicates the index field name of dateCreate.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [DESCRIPTION](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__DESCRIPTION) |  Indicates the index field name of description.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [IDENTIFIER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__IDENTIFIER) |  Indicates the index field name of identifier.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [KEYWORDS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__KEYWORDS) |  Indicates the index field name of keywords.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [NAME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__NAME) |  Indicates the index field name of name.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [POTENTIAL_ACTION](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__POTENTIAL_ACTION) |  Indicates the index field name of potentialAction.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [RESERVED1](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__RESERVED1) |  Indicates the index field name of reserved1.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [RESERVED2](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__RESERVED2) |  Indicates the index field name of reserved2.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [SUBTITLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__SUBTITLE) |  Indicates the index field name of subtitle.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [THUMBNAIL_URL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__THUMBNAIL_URL) |  Indicates the index field name of thumbnailUrl.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [TITLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__TITLE) |  Indicates the index field name of title.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [URL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__URL) |  Indicates the index field name of url.   
  
#### Constructor Summary

Constructor | Description  
---|---  
[CommonItem](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__CommonItem--)​() |  A constructor used to create a CommonItem instance.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
static [List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[IndexForm](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexform-0000001054120086)> | [getCommonSchema](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonitem-0000001078320140#ZH-CN_TOPIC_0000001078320140__getCommonSchema--)​() |  Obtains a list of index field attributes in this CommonItem object.   
  
Methods inherited from class ohos.data.search.model.[IndexData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157)  
---  
[clear](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__clear--), [get](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__get-java_lang_String-), [getAsDouble](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__getAsDouble-java_lang_String-), [getAsFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__getAsFloat-java_lang_String-), [getAsInteger](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__getAsInteger-java_lang_String-), [getAsLong](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__getAsLong-java_lang_String-), [getAsString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__getAsString-java_lang_String-), [getValues](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__getValues--), [isEmpty](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__isEmpty--), [put](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__put-java_lang_String-java_lang_Double-), [put](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__put-java_lang_String-java_lang_Float-), [put](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__put-java_lang_String-java_lang_Integer-), [put](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__put-java_lang_String-java_lang_Long-), [put](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__put-java_lang_String-java_lang_String-), [remove](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__remove-java_lang_String-), [setValues](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__setValues-java_util_Map-), [size](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157#ZH-CN_TOPIC_0000001054120157__size--)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from class ohos.data.search.schema.[Schema](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273)  
---  
[getAlternateName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__getAlternateName--), [getCategory](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__getCategory--), [getDateCreate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__getDateCreate--), [getDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__getDescription--), [getIdentifier](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__getIdentifier--), [getKeywords](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__getKeywords--), [getName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__getName--), [getPotentialAction](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__getPotentialAction--), [getReserved1](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__getReserved1--), [getReserved2](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__getReserved2--), [getSubtitle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__getSubtitle--), [getThumbnailUrl](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__getThumbnailUrl--), [getTitle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__getTitle--), [getUrl](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__getUrl--), [setAlternateName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setAlternateName-java_lang_String-), [setCategory](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setCategory-java_lang_String-), [setDateCreate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setDateCreate-java_lang_Long-), [setDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setDescription-java_lang_String-), [setIdentifier](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setIdentifier-java_lang_String-), [setKeywords](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setKeywords-java_lang_String-), [setName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setName-java_lang_String-), [setPotentialAction](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setPotentialAction-java_lang_String-), [setReserved1](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setReserved1-java_lang_String-), [setReserved2](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setReserved2-java_lang_String-), [setSubtitle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setSubtitle-java_lang_String-), [setThumbnailUrl](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setThumbnailUrl-java_lang_String-), [setTitle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setTitle-java_lang_String-), [setUrl](https://developer.harmonyos.com/cn/docs/documentation/doc-references/schema-0000001121107273#ZH-CN_TOPIC_0000001121107273__setUrl-java_lang_String-)  
  
#### Field Detail

#### [h2]ALTERNATE_NAME

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) ALTERNATE_NAME

Indicates the index field name of alternateName. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_data_search_schema_CommonItem_ALTERNATE_NAME)

#### [h2]CATEGORY

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) CATEGORY

Indicates the index field name of category. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_data_search_schema_CommonItem_CATEGORY)

#### [h2]DATE_CREATE

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) DATE_CREATE

Indicates the index field name of dateCreate. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_data_search_schema_CommonItem_DATE_CREATE)

#### [h2]DESCRIPTION

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) DESCRIPTION

Indicates the index field name of description. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_data_search_schema_CommonItem_DESCRIPTION)

#### [h2]IDENTIFIER

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) IDENTIFIER

Indicates the index field name of identifier. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_data_search_schema_CommonItem_IDENTIFIER)

#### [h2]KEYWORDS

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) KEYWORDS

Indicates the index field name of keywords. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_data_search_schema_CommonItem_KEYWORDS)

#### [h2]NAME

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) NAME

Indicates the index field name of name. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_data_search_schema_CommonItem_NAME)

#### [h2]POTENTIAL_ACTION

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) POTENTIAL_ACTION

Indicates the index field name of potentialAction. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_data_search_schema_CommonItem_POTENTIAL_ACTION)

#### [h2]RESERVED1

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) RESERVED1

Indicates the index field name of reserved1. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_data_search_schema_CommonItem_RESERVED1)

#### [h2]RESERVED2

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) RESERVED2

Indicates the index field name of reserved2. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_data_search_schema_CommonItem_RESERVED2)

#### [h2]SUBTITLE

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) SUBTITLE

Indicates the index field name of subtitle. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_data_search_schema_CommonItem_SUBTITLE)

#### [h2]THUMBNAIL_URL

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) THUMBNAIL_URL

Indicates the index field name of thumbnailUrl. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_data_search_schema_CommonItem_THUMBNAIL_URL)

#### [h2]TITLE

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) TITLE

Indicates the index field name of title. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_data_search_schema_CommonItem_TITLE)

#### [h2]URL

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) URL

Indicates the index field name of url. 

**Since:**

5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_data_search_schema_CommonItem_URL)

#### Constructor Detail

#### [h2]CommonItem

public CommonItem​()

A constructor used to create a CommonItem instance. 

**Since:**

5

#### Method Detail

#### [h2]getCommonSchema

public static [List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[IndexForm](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexform-0000001054120086)> getCommonSchema​()

Obtains a list of index field attributes in this CommonItem object. 

**Returns:**

Returns a list of index field attributes.

**Since:**

5
