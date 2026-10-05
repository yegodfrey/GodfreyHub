---
name: document/cn/doc-references/richtext-0000001054838706
title: RichText
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/richtext-0000001054838706
source: portal
---

RichText [java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.agp.text.RichText
    
    public final class RichText
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [Appendable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714), [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442)  
  
---  
Represents rich text in different formats. This class is the combination of [Text](https://developer.harmonyos.com/cn/docs/documentation/doc-references/text-0000001054838676) and [RichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007). You can use [setRichStyle(ohos.agp.text.richstyles.RichStyle, int, int, ohos.agp.text.richstyles.RangedRichStyle.Flag)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__setRichStyle-ohos_agp_text_richstyles_RichStyle-int-int-ohos_agp_text_richstyles_RangedRichStyle_Flag-) to add a rich style for the text. **Since:** 3Nested Class Summary Modifier and Type | Class | Description  
---|---|---  
static interface  | [RichText.TouchEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext_toucheventlistener-0000001054358731) |  Deprecated. This change is effective since API version 8. Replaced by [ClickRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/clickrichstyle-0000001172238192).   
Constructor Summary Constructor | Description  
---|---  
[RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__RichText--)​() |  A constructor used to create a [RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706) instance.   
[RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__RichText-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) text) |  A constructor used to create a RichText instance based on the specified text.   
[RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__RichText-ohos_agp_text_RichText-)​([RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706) richText) |  A constructor used to create a RichText instance based on the specified richText.   
Method Summary Modifier and Type | Method | Description  
---|---|---  
void | [addTouchEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__addTouchEventListener-ohos_agp_text_RichText_TouchEventListener-int-int-)​([RichText.TouchEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext_toucheventlistener-0000001054358731) listener, int start, int end) |  Deprecated. This change is effective since API version 8. Replaced by [ClickRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/clickrichstyle-0000001172238192).   
[Appendable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714) | [append](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__append-char-)​(char c) |  Appends a character to the end of this rich text.   
[Appendable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714) | [append](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__append-java_lang_CharSequence-)​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) charSequence) |  Appends the specified charSequence to the end of this rich text.   
[Appendable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714) | [append](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__append-java_lang_CharSequence-int-int-)​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) charSequence, int start, int end) |  Appends the content in the range specified by start and end of charSequence to the end of this rich text.   
char | [charAt](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__charAt-int-)​(int position) |  Obtains the character at the specified position in this rich text.   
void | [delete](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__delete-int-int-)​(int start, int end) |  Deletes the text and rich style in the range specified by start and end from this rich text.   
void | [deleteAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__deleteAll--)​() |  Deletes the text and all rich styles from this rich text.   
void | [deleteRichStyles](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__deleteRichStyles--)​() |  Deletes all the rich styles from this rich text.   
[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[Integer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/integer-0000001054119702)> | [findAllTransitionPointsByCapability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__findAllTransitionPointsByCapability-int-int-int-)​(int start, int end, int capability) |  Obtains all the transition points of a rich style in the range specified by start and end based on the capability.   
[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[Integer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/integer-0000001054119702)> | [findAllTransitionPointsByTypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__findAllTransitionPointsByTypeId-int-int-ohos_agp_text_richstyles_RichStyle_TypeId-)​(int start, int end, [RichStyle.TypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_typeid-0000001172716668) typeId) |  Obtains all the transition points of a rich style in the range specified by start and end based on the typeId.   
int | [findNextTransitionPointByCapability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__findNextTransitionPointByCapability-int-int-int-)​(int start, int end, int capability) |  Obtains the next transition point of a rich style in the range specified by start and end based on the capability.   
int | [findNextTransitionPointByTypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__findNextTransitionPointByTypeId-int-int-ohos_agp_text_richstyles_RichStyle_TypeId-)​(int start, int end, [RichStyle.TypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_typeid-0000001172716668) typeId) |  Obtains the next transition point of a rich style in the range specified by start and end based on the typeId.   
int | [getLeadingMargin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__getLeadingMargin-boolean-)​(boolean firstMargin) |  Deprecated. This change is effective since API version 8. Replaced by [IndentRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indentrichstyle-0000001172398168).   
[RangedRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle-0000001172556720) | [getRangedRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__getRangedRichStyle-ohos_agp_text_richstyles_RichStyle-)​([RichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007) richStyle) |  Obtains the coverage and inclusion relationship of the specified rich style in this rich text.   
[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[RangedRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle-0000001172556720)> | [getRangedRichStylesByCapability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__getRangedRichStylesByCapability-int-int-int-)​(int start, int end, int capability) |  Obtains the list of rich styles corresponding to the capability in the given range of this rich text.   
[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[RangedRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle-0000001172556720)> | [getRangedRichStylesByTypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__getRangedRichStylesByTypeId-int-int-ohos_agp_text_richstyles_RichStyle_TypeId-)​(int start, int end, [RichStyle.TypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_typeid-0000001172716668) typeId) |  Obtains the list of rich styles of the specified typeId in a given range of this rich text.   
void | [insert](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__insert-int-java_lang_String-)​(int position, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) text) |  Inserts the specified text into the position of this rich text.   
void | [insert](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__insert-int-java_lang_String-int-int-)​(int position, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) text, int textStart, int textEnd) |  Inserts the content in the range specified by textStart and textEnd in the text into the position of this rich text.   
void | [insert](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__insert-int-ohos_agp_text_RichText-)​(int position, [RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706) richText) |  Inserts the specified rich text into the position of this rich text.   
void | [insert](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__insert-int-ohos_agp_text_RichText-int-int-)​(int position, [RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706) richText, int textStart, int textEnd) |  Inserts the content in the range specified by textStart and textEnd in the richText into the position of this rich text.   
int | [length](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__length--)​() |  Obtains the length of the string in this rich text.   
void | [removeRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__removeRichStyle-ohos_agp_text_richstyles_RichStyle-)​([RichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007) richStyle) |  Removes the specified rich style from this rich text.   
void | [removeRichStyleByCapability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__removeRichStyleByCapability-int-)​(int capability) |  Removes the rich style of the specified capability from this rich text.   
void | [removeRichStyleByTypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__removeRichStyleByTypeId-ohos_agp_text_richstyles_RichStyle_TypeId-)​([RichStyle.TypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_typeid-0000001172716668) typeId) |  Removes the rich styles enumerated by the typeId from this rich text.   
void | [replace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__replace-int-int-java_lang_String-)​(int start, int end, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) text) |  Replaces the content in the range specified by start and end of this rich text with the text.   
void | [replace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__replace-int-int-java_lang_String-int-int-)​(int start, int end, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) text, int textStart, int textEnd) |  Replaces the content in the range specified by start and end of this rich text with the content in the range specified by textStart and textEnd in the text.   
void | [replace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__replace-int-int-ohos_agp_text_RichText-)​(int start, int end, [RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706) richText) |  Replaces the content in the range specified by start and end of this rich text with the richText.   
void | [replace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__replace-int-int-ohos_agp_text_RichText-int-int-)​(int start, int end, [RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706) richText, int textStart, int textEnd) |  Replaces the content in the range specified by start and end of this rich text with the content in the range specified by textStart and textEnd in the richText.   
void | [setLeadingMargin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__setLeadingMargin-int-int-)​(int firstMargin, int restMargin) |  Deprecated. This change is effective since API version 8. Replaced by [IndentRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indentrichstyle-0000001172398168).   
void | [setRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__setRichStyle-ohos_agp_text_richstyles_RangedRichStyle-)​([RangedRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle-0000001172556720) rangedRichStyle) |  Sets a [RangedRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle-0000001172556720) for this rich text.   
void | [setRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__setRichStyle-ohos_agp_text_richstyles_RichStyle-int-int-ohos_agp_text_richstyles_RangedRichStyle_Flag-)​([RichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007) richStyle, int start, int end, [RangedRichStyle.Flag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle_flag-0000001217996545) includeFlag) |  Sets a [RichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007) for this rich text.   
[CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) | [subSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__subSequence-int-int-)​(int start, int end) |  Obtains a substring from this rich text.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__toString--)​() |  Obtains the plain text from this rich text.   
Methods inherited from interface java.lang.[CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442)  
---  
[chars](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442#ZH-CN_TOPIC_0000001054678442__chars--), [codePoints](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442#ZH-CN_TOPIC_0000001054678442__codePoints--)  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
Constructor Detail [h2]RichText public RichText​() A constructor used to create a [RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706) instance. You can use [setRichStyle(ohos.agp.text.richstyles.RichStyle, int, int, ohos.agp.text.richstyles.RangedRichStyle.Flag)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__setRichStyle-ohos_agp_text_richstyles_RichStyle-int-int-ohos_agp_text_richstyles_RangedRichStyle_Flag-) to add a rich style later. **Since:** 7 [h2]RichText public RichText​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) text) A constructor used to create a RichText instance based on the specified text. You can use [setRichStyle(ohos.agp.text.richstyles.RichStyle, int, int, ohos.agp.text.richstyles.RangedRichStyle.Flag)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__setRichStyle-ohos_agp_text_richstyles_RichStyle-int-int-ohos_agp_text_richstyles_RangedRichStyle_Flag-) to add a rich style later. **Parameters:** Parameter Name | Parameter Description  
---|---  
text  |  Indicates the plain text, which can be null.  
**Since:** 7 [h2]RichText public RichText​([RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706) richText) A constructor used to create a RichText instance based on the specified richText. **Parameters:** Parameter Name | Parameter Description  
---|---  
richText  |  Indicates the rich text, which cannot be null.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if the specified richText is null.  
**Since:** 7 Method Detail [h2]charAt public char charAt​(int position) Obtains the character at the specified position in this rich text. **Specified by:** [charAt](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442#ZH-CN_TOPIC_0000001054678442__charAt-int-) in interface [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) **Parameters:** Parameter Name | Parameter Description  
---|---  
position  |  Indicates the position at which the character is to be obtained. The value must be greater than or equal to 0 and less than the text length.  
**Returns:** Returns the character at the specified position. **Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if the value of position exceeds the text length or is negative.  
**Since:** 7 [h2]length public int length​() Obtains the length of the string in this rich text. **Specified by:** [length](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442#ZH-CN_TOPIC_0000001054678442__length--) in interface [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) **Returns:** Returns the string length. **Since:** 7 [h2]subSequence public [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) subSequence​(int start, int end) Obtains a substring from this rich text. **Specified by:** [subSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442#ZH-CN_TOPIC_0000001054678442__subSequence-int-int-) in interface [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) **Parameters:** Parameter Name | Parameter Description  
---|---  
start  |  Indicates the start position in the rich text.  
end  |  Indicates the end position in the rich text.  
**Returns:** Returns the substring. **Since:** 7 [h2]toString public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​() Obtains the plain text from this rich text. **Specified by:** [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442#ZH-CN_TOPIC_0000001054678442__toString--) in interface [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) **Overrides:** [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) **Returns:** Returns the plain text. **Since:** 7 [h2]append public [Appendable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714) append​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) charSequence) Appends the specified charSequence to the end of this rich text. **Specified by:** [append](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714#ZH-CN_TOPIC_0000001054199714__append-java_lang_CharSequence-) in interface [Appendable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714) **Parameters:** Parameter Name | Parameter Description  
---|---  
charSequence  |  Indicates the rich text or plain text to append.  
**Returns:** Returns the new rich text. **Since:** 7 [h2]append public [Appendable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714) append​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) charSequence, int start, int end) Appends the content in the range specified by start and end of charSequence to the end of this rich text. **Specified by:** [append](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714#ZH-CN_TOPIC_0000001054199714__append-java_lang_CharSequence-int-int-) in interface [Appendable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714) **Parameters:** Parameter Name | Parameter Description  
---|---  
charSequence  |  Indicates the rich text or plain text to append.  
start  |  Indicates the start position in the rich text or plain text.  
end  |  Indicates the end position in the rich text or plain text.  
**Returns:** Returns the new rich text. **Since:** 7 [h2]append public [Appendable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714) append​(char c) Appends a character to the end of this rich text. **Specified by:** [append](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714#ZH-CN_TOPIC_0000001054199714__append-char-) in interface [Appendable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714) **Parameters:** Parameter Name | Parameter Description  
---|---  
c  |  Indicates the character to append.  
**Returns:** Returns the new rich text. **Since:** 7 [h2]addTouchEventListener [@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public void addTouchEventListener​([RichText.TouchEventListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext_toucheventlistener-0000001054358731) listener, int start, int end) Deprecated. This change is effective since API version 8. Replaced by [ClickRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/clickrichstyle-0000001172238192). Adds a listener to listen for a touch event on a specific rich text paragraph. **Parameters:** Parameter Name | Parameter Description  
---|---  
listener  |  Indicates the touch event listener to add.  
start  |  Indicates the start position of the rich text paragraph that responds to a touch event.  
end  |  Indicates the end position of the rich text paragraph that responds to a touch event.  
**Since:** 3 [h2]setLeadingMargin [@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public void setLeadingMargin​(int firstMargin, int restMargin) Deprecated. This change is effective since API version 8. Replaced by [IndentRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indentrichstyle-0000001172398168). Sets the leading margins for this rich text paragraph. **Parameters:** Parameter Name | Parameter Description  
---|---  
firstMargin  |  Indicates the margin of the first line in the paragraph, in pixels.  
restMargin  |  Indicates the margin of the other lines in the paragraph, in pixels.  
**Since:** 3 [h2]getLeadingMargin [@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public int getLeadingMargin​(boolean firstMargin) Deprecated. This change is effective since API version 8. Replaced by [IndentRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indentrichstyle-0000001172398168). Obtains the leading margins of this rich text paragraph. **Parameters:** Parameter Name | Parameter Description  
---|---  
firstMargin  |  Specifies whether to obtain the leading margin of the first line or the other lines of this rich text paragraph. The value true means to obtain the margin of the first line, and false means to obtain the margin of the other lines.  
**Returns:** Returns the leading margins, in pixels. **Since:** 3 [h2]getRangedRichStylesByTypeId public [List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[RangedRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle-0000001172556720)> getRangedRichStylesByTypeId​(int start, int end, [RichStyle.TypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_typeid-0000001172716668) typeId) Obtains the list of rich styles of the specified typeId in a given range of this rich text. **Parameters:** Parameter Name | Parameter Description  
---|---  
start  |  Indicates the start position in the rich text.  
end  |  Indicates the end position in the rich text.  
typeId  |  Indicates a [RichStyle.TypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_typeid-0000001172716668) object.  
**Returns:** Returns a list of [RangedRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle-0000001172556720) objects, each of which includes a rich style, its coverage, and its inclusion relationship if obtained; returns the List that contains zero elements if no data is found. **Since:** 7 [h2]getRangedRichStylesByCapability public [List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[RangedRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle-0000001172556720)> getRangedRichStylesByCapability​(int start, int end, int capability) Obtains the list of rich styles corresponding to the capability in the given range of this rich text. **Parameters:** Parameter Name | Parameter Description  
---|---  
start  |  Indicates the start position in the rich text.  
end  |  Indicates the end position in the rich text.  
capability  |  Indicates the capability of a rich style, which affects the character appearance and paragraph presentation. For details, see [RichStyle.Capability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_capability-0000001217877971).  
**Returns:** Returns a list of [RangedRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle-0000001172556720) objects, each of which includes a rich style, its coverage, and its inclusion relationship if obtained; returns the List that contains zero elements if no data is found. **Since:** 7 [h2]getRangedRichStyle public [RangedRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle-0000001172556720) getRangedRichStyle​([RichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007) richStyle) Obtains the coverage and inclusion relationship of the specified rich style in this rich text. **Parameters:** Parameter Name | Parameter Description  
---|---  
richStyle  |  Indicates the style of the rich text.  
**Returns:** Returns a [RangedRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle-0000001172556720) object, which includes a rich style, its coverage, and its inclusion relationship if obtained; returns null if no data is found. **Since:** 7 [h2]setRichStyle public void setRichStyle​([RichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007) richStyle, int start, int end, [RangedRichStyle.Flag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle_flag-0000001217996545) includeFlag) Sets a [RichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007) for this rich text. You must specify a richStyle, its start and end positions (start and end) in the string, and the inclusion relationship (includeFlag) for adding text to the left and right boundaries. Note: An exception is thrown if the range specified by start and end is incorrect. If a rich style is set for multiple times, only the last setting is retained. **Parameters:** Parameter Name | Parameter Description  
---|---  
richStyle  |  Indicates the rich style to set.  
start  |  Indicates the start position in the rich text.  
end  |  Indicates the end position in the rich text.  
includeFlag  |  Indicates the inclusion relationship. For details, see [RangedRichStyle.Flag](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle_flag-0000001217996545).  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if the value of richStyle is null, exceeds the text length, or is negative.  
**Since:** 7 [h2]setRichStyle public void setRichStyle​([RangedRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle-0000001172556720) rangedRichStyle) Sets a [RangedRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedrichstyle-0000001172556720) for this rich text. rangedRichStyle specifies the rich style, start position, end position, and inclusion relationship for adding text to the left and right boundaries. Note: If a rich style is set for multiple times, only the last setting is retained. **Parameters:** Parameter Name | Parameter Description  
---|---  
rangedRichStyle  |  Indicates the RichStyle data structure stored in the rich text, which contains the start position, end position, and inclusion relationship.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if the value of rangedRichStyle is null, exceeds the text length, or is negative.  
**Since:** 7 [h2]findNextTransitionPointByTypeId public int findNextTransitionPointByTypeId​(int start, int end, [RichStyle.TypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_typeid-0000001172716668) typeId) Obtains the next transition point of a rich style in the range specified by start and end based on the typeId. **Parameters:** Parameter Name | Parameter Description  
---|---  
start  |  Indicates the start position in the rich text. start is not included.  
end  |  Indicates the end position in the rich text. end is included.  
typeId  |  Indicates a [RichStyle.TypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_typeid-0000001172716668) object.  
**Returns:** Returns the next transition point if obtained; returns end if no data is found. **Since:** 7 [h2]findNextTransitionPointByCapability public int findNextTransitionPointByCapability​(int start, int end, int capability) Obtains the next transition point of a rich style in the range specified by start and end based on the capability. **Parameters:** Parameter Name | Parameter Description  
---|---  
start  |  Indicates the start position in the rich text. start is not included.  
end  |  Indicates the end position in the rich text. end is included.  
capability  |  Indicates the capability of a rich style, which affects the character appearance and paragraph presentation. For details, see [RichStyle.Capability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_capability-0000001217877971).  
**Returns:** Returns the next transition point if obtained; returns end if no data is found. **Since:** 7 [h2]findAllTransitionPointsByTypeId public [List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[Integer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/integer-0000001054119702)> findAllTransitionPointsByTypeId​(int start, int end, [RichStyle.TypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_typeid-0000001172716668) typeId) Obtains all the transition points of a rich style in the range specified by start and end based on the typeId. **Parameters:** Parameter Name | Parameter Description  
---|---  
start  |  Indicates the start position in the rich text. start is not included.  
end  |  Indicates the end position in the rich text. end is included.  
typeId  |  Indicates a [RichStyle.TypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_typeid-0000001172716668) object.  
**Returns:** Returns all the transition points. **Since:** 7 [h2]findAllTransitionPointsByCapability public [List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[Integer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/integer-0000001054119702)> findAllTransitionPointsByCapability​(int start, int end, int capability) Obtains all the transition points of a rich style in the range specified by start and end based on the capability. **Parameters:** Parameter Name | Parameter Description  
---|---  
start  |  Indicates the start position in the rich text. start is not included.  
end  |  Indicates the end position in the rich text. end is included.  
capability  |  Indicates the capability of a rich style, which affects the character appearance and paragraph presentation. For details, see [RichStyle.Capability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_capability-0000001217877971).  
**Returns:** Returns all the transition points. **Since:** 7 [h2]removeRichStyle public void removeRichStyle​([RichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007) richStyle) Removes the specified rich style from this rich text. If richStyle is null, no rich style is removed. **Parameters:** Parameter Name | Parameter Description  
---|---  
richStyle  |  Indicates the rich style to remove.  
**Since:** 7 [h2]removeRichStyleByTypeId public void removeRichStyleByTypeId​([RichStyle.TypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_typeid-0000001172716668) typeId) Removes the rich styles enumerated by the typeId from this rich text. **Parameters:** Parameter Name | Parameter Description  
---|---  
typeId  |  Indicates a [RichStyle.TypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_typeid-0000001172716668) object.  
**Since:** 7 [h2]removeRichStyleByCapability public void removeRichStyleByCapability​(int capability) Removes the rich style of the specified capability from this rich text. **Parameters:** Parameter Name | Parameter Description  
---|---  
capability  |  Indicates the capability of a rich style, which affects the character appearance and paragraph presentation. For details, see [RichStyle.Capability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_capability-0000001217877971).  
**Since:** 7 [h2]replace public void replace​(int start, int end, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) text) Replaces the content in the range specified by start and end of this rich text with the text. Note: 
    1. If the old content in the specified range contains a rich style, this rich style automatically applies to the new text.
    2. If the specified range is incorrect or the text to be used for replacement is null, the replacement operation will not be performed.
**Parameters:** Parameter Name | Parameter Description  
---|---  
start  |  Indicates the start position in the rich text.  
end  |  Indicates the end position in the rich text.  
text  |  Indicates the text to be used for replacement.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if an input parameter is invalid.  
**Since:** 7 [h2]replace public void replace​(int start, int end, [RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706) richText) Replaces the content in the range specified by start and end of this rich text with the richText. Note: 
    1. If the old content in the specified range contains a rich style, this rich style automatically applies to the new text.
    2. If the specified range is incorrect or the text to be used for replacement is null, the replacement operation will not be performed.
**Parameters:** Parameter Name | Parameter Description  
---|---  
start  |  Indicates the start position in the rich text.  
end  |  Indicates the end position in the rich text.  
richText  |  Indicates the rich text to be used for replacement.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if an input parameter is invalid.  
**Since:** 7 [h2]replace public void replace​(int start, int end, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) text, int textStart, int textEnd) Replaces the content in the range specified by start and end of this rich text with the content in the range specified by textStart and textEnd in the text. Note: 
    1. If the old content in the specified range contains a rich style, this rich style automatically applies to the new text.
    2. If the specified range is incorrect or the text to be used for replacement is null, the replacement operation will not be performed.
**Parameters:** Parameter Name | Parameter Description  
---|---  
start  |  Indicates the start position in the rich text.  
end  |  Indicates the end position in the rich text.  
text  |  Indicates the text to be used for replacement.  
textStart  |  Indicates the start position in the text to be used for replacement.  
textEnd  |  Indicates the end position in the text to be used for replacement.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if an input parameter is invalid.  
**Since:** 7 [h2]replace public void replace​(int start, int end, [RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706) richText, int textStart, int textEnd) Replaces the content in the range specified by start and end of this rich text with the content in the range specified by textStart and textEnd in the richText. Note: 
    1. If the old content in the specified range contains a rich style, this rich style automatically applies to the new text.
    2. If the specified range is incorrect or the text to be used for replacement is null, the replacement operation will not be performed.
**Parameters:** Parameter Name | Parameter Description  
---|---  
start  |  Indicates the start position in the rich text.  
end  |  Indicates the end position in the rich text.  
richText  |  Indicates the rich text to be used for replacement.  
textStart  |  Indicates the start position in the rich text to be used for replacement.  
textEnd  |  Indicates the end position in the rich text to be used for replacement.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if an input parameter is invalid.  
**Since:** 7 [h2]deleteAll public void deleteAll​() Deletes the text and all rich styles from this rich text. **Since:** 7 [h2]deleteRichStyles public void deleteRichStyles​() Deletes all the rich styles from this rich text. **Since:** 7 [h2]delete public void delete​(int start, int end) Deletes the text and rich style in the range specified by start and end from this rich text. No deletion is performed if the input parameters are invalid. **Parameters:** Parameter Name | Parameter Description  
---|---  
start  |  Indicates the start position in the rich text.  
end  |  Indicates the end position in the rich text.  
**Since:** 7 [h2]insert public void insert​(int position, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) text) Inserts the specified text into the position of this rich text. Note: 
    1. If the position contains a rich style, this rich style automatically applies to the inserted text.
    2. If the position is incorrect or the text to insert is null, the insertion operation will not be performed.
**Parameters:** Parameter Name | Parameter Description  
---|---  
position  |  Indicates the position where the text will be inserted.  
text  |  Indicates the text to insert.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if an input parameter is invalid.  
**Since:** 7 [h2]insert public void insert​(int position, [RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706) richText) Inserts the specified rich text into the position of this rich text. Note: 
    1. If the position contains a rich style, this rich style automatically applies to the inserted text.
    2. If the position is incorrect or the text to insert is null, the insertion operation will not be performed.
**Parameters:** Parameter Name | Parameter Description  
---|---  
position  |  Indicates the position where the rich text will be inserted.  
richText  |  Indicates the rich text to insert.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if an input parameter is invalid.  
**Since:** 7 [h2]insert public void insert​(int position, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) text, int textStart, int textEnd) Inserts the content in the range specified by textStart and textEnd in the text into the position of this rich text. Note: 
    1. If the position contains a rich style, this rich style automatically applies to the inserted text.
    2. If the position is incorrect or the text to insert is null, the insertion operation will not be performed.
**Parameters:** Parameter Name | Parameter Description  
---|---  
position  |  Indicates the position where the text will be inserted.  
text  |  Indicates the text to insert.  
textStart  |  Indicates the start position in the text to insert.  
textEnd  |  Indicates the end position in the text to insert.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if an input parameter is invalid.  
**Since:** 7 [h2]insert public void insert​(int position, [RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706) richText, int textStart, int textEnd) Inserts the content in the range specified by textStart and textEnd in the richText into the position of this rich text. Note: 
    1. If the position contains a rich style, this rich style automatically applies to the inserted text.
    2. If the position is incorrect or the text to insert is null, the insertion operation will not be performed.
**Parameters:** Parameter Name | Parameter Description  
---|---  
position  |  Indicates the position where the rich text will be inserted.  
richText  |  Indicates the rich text to insert.  
textStart  |  Indicates the start position in the rich text to insert.  
textEnd  |  Indicates the end position in the rich text to insert.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if an input parameter is invalid.  
**Since:** 7
