---
name: document/cn/doc-references/nfcatag-0000001054238965
title: NfcATag
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/nfcatag-0000001054238965
source: portal
---

# NfcATag

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.nfc.tag.TagManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954) |---|---ohos.nfc.tag.NfcATag
    
    public class NfcATag
    extends [TagManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954)  
  
---  
Provides interfaces to control the read and write of tags that support the NFC-A technology. 

This class is inherited from the [TagManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954) abstract class, and provides methods to create NfcATag objects and obtain the ATQA and SAK.

**Since:**

1

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [EXTRA_ATQA](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nfcatag-0000001054238965#ZH-CN_TOPIC_0000001054238965__EXTRA_ATQA) |  Indicates the keyword used to obtain the ATQA of an NFC-A tag.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [EXTRA_SAK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nfcatag-0000001054238965#ZH-CN_TOPIC_0000001054238965__EXTRA_SAK) |  Indicates the keyword used to obtain the SAK of an NFC-A tag.   
  
Fields inherited from class ohos.nfc.tag.[TagManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954)  
---  
[ISO_DEP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__ISO_DEP), [MIFARE_CLASSIC](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__MIFARE_CLASSIC), [MIFARE_ULTRALIGHT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__MIFARE_ULTRALIGHT), [NDEF](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__NDEF), [NFC_A](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__NFC_A), [NFC_B](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__NFC_B), [NFC_F](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__NFC_F), [NFC_V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__NFC_V)  
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
byte[] | [getAtqa](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nfcatag-0000001054238965#ZH-CN_TOPIC_0000001054238965__getAtqa--)​() |  Obtains the ATQA of an NFC-A tag.   
static [NfcATag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nfcatag-0000001054238965) | [getInstance](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nfcatag-0000001054238965#ZH-CN_TOPIC_0000001054238965__getInstance-ohos_nfc_tag_TagInfo-)​([TagInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/taginfo-0000001054838920) tagInfo) |  Obtains an NfcATag object based on the tag information.   
short | [getSak](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nfcatag-0000001054238965#ZH-CN_TOPIC_0000001054238965__getSak--)​() |  Obtains the SAK of an NFC-A tag.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from class ohos.nfc.tag.[TagManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954)  
---  
[checkConnected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__checkConnected--), [connectTag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__connectTag--), [getMaxSendLength](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__getMaxSendLength--), [getSendDataTimeout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__getSendDataTimeout--), [getTagInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__getTagInfo--), [isTagConnected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__isTagConnected--), [reset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__reset--), [sendData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__sendData-byte:A-), [setSendDataTimeout](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tagmanager-0000001054358954#ZH-CN_TOPIC_0000001054358954__setSendDataTimeout-int-)  
  
#### Field Detail

#### [h2]EXTRA_ATQA

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) EXTRA_ATQA

Indicates the keyword used to obtain the ATQA of an NFC-A tag. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_nfc_tag_NfcATag_EXTRA_ATQA)

#### [h2]EXTRA_SAK

public static final [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) EXTRA_SAK

Indicates the keyword used to obtain the SAK of an NFC-A tag. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_nfc_tag_NfcATag_EXTRA_SAK)

#### Method Detail

#### [h2]getInstance

public static [NfcATag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nfcatag-0000001054238965) getInstance​([TagInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/taginfo-0000001054838920) tagInfo)

Obtains an NfcATag object based on the tag information. 

During tag reading, if the tag supports the NFC-A technology, an NfcATag object will be created based on the tag information.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
tagInfo  |  Indicates the tag information.  
  
**Returns:**

Returns the NfcATag object.

**Since:**

1

#### [h2]getSak

public short getSak​()

Obtains the SAK of an NFC-A tag. 

**Returns:**

Returns the SAK of the NFC-A tag.

**Since:**

1

#### [h2]getAtqa

public byte[] getAtqa​()

Obtains the ATQA of an NFC-A tag. 

**Returns:**

Returns the ATQA of the NFC-A tag.

**Since:**

1
