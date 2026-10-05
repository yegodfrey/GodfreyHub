---
name: document/cn/doc-references/keystorebuilderparameters-0000001054678631
title: KeyStoreBuilderParameters
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/keystorebuilderparameters-0000001054678631
source: portal
---

# KeyStoreBuilderParameters

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---javax.net.ssl.KeyStoreBuilderParameters
    
    public class KeyStoreBuilderParameters
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [ManagerFactoryParameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/managerfactoryparameters-0000001054558661)  
  
---  
A parameters object for X509KeyManagers that encapsulates a List of KeyStore.Builders.

**Since:**

1.5

**See Also:**

[KeyStore.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystore_builder-0000001054358512), [X509KeyManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/x509keymanager-0000001054119989)

#### Constructor Summary

Constructor | Description  
---|---  
[KeyStoreBuilderParameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystorebuilderparameters-0000001054678631#ZH-CN_TOPIC_0000001054678631__KeyStoreBuilderParameters-java_security_KeyStore_Builder-)​([KeyStore.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystore_builder-0000001054358512) builder) |  Construct new KeyStoreBuilderParameters from the specified [KeyStore.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystore_builder-0000001054358512).   
[KeyStoreBuilderParameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystorebuilderparameters-0000001054678631#ZH-CN_TOPIC_0000001054678631__KeyStoreBuilderParameters-java_util_List-)​([List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[KeyStore.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystore_builder-0000001054358512)> parameters) |  Construct new KeyStoreBuilderParameters from a List of [KeyStore.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystore_builder-0000001054358512)s.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[KeyStore.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystore_builder-0000001054358512)> | [getParameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystorebuilderparameters-0000001054678631#ZH-CN_TOPIC_0000001054678631__getParameters--)​() |  Return the unmodifiable List of the [KeyStore.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystore_builder-0000001054358512)s encapsulated by this object.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]KeyStoreBuilderParameters

public KeyStoreBuilderParameters​([KeyStore.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystore_builder-0000001054358512) builder)

Construct new KeyStoreBuilderParameters from the specified [KeyStore.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystore_builder-0000001054358512). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
builder  |  the Builder object  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if builder is null  
  
#### [h2]KeyStoreBuilderParameters

public KeyStoreBuilderParameters​([List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[KeyStore.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystore_builder-0000001054358512)> parameters)

Construct new KeyStoreBuilderParameters from a List of [KeyStore.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystore_builder-0000001054358512)s. Note that the list is cloned to protect against subsequent modification. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
parameters  |  the List of Builder objects  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if parameters is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if parameters is an empty list  
  
#### Method Detail

#### [h2]getParameters

public [List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[KeyStore.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystore_builder-0000001054358512)> getParameters​()

Return the unmodifiable List of the [KeyStore.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystore_builder-0000001054358512)s encapsulated by this object. 

**Returns:**

the unmodifiable List of the [KeyStore.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keystore_builder-0000001054358512)s encapsulated by this object.
