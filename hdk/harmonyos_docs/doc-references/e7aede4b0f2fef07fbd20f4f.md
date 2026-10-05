---
name: document/cn/doc-references/doccoordinates-0000001054678768
title: DocCoordinates
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/doccoordinates-0000001054678768
source: portal
---

# DocCoordinates  
  
[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.ai.cv.docrefine.DocCoordinates
    
    public class DocCoordinates
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
A utility class used to store the corner coordinates of the document bounding box.

**Since:**

1

#### Constructor Summary

Constructor | Description  
---|---  
[DocCoordinates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__DocCoordinates--)​() |  Default constructor used to create a DocCoordinates instance.   
[DocCoordinates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__DocCoordinates-ohos_ai_cv_common_CvPoint-ohos_ai_cv_common_CvPoint-ohos_ai_cv_common_CvPoint-ohos_ai_cv_common_CvPoint-)​([CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) topLeft, [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) topRight, [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) bottomLeft, [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) bottomRight) |  A constructor used to create a DocCoordinates instance based on the corner coordinates of the document bounding box.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) | [getBottomLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__getBottomLeft--)​() |  Obtains the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the lower left corner of the document bounding box.   
[CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) | [getBottomRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__getBottomRight--)​() |  Obtains the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the lower right corner of the document bounding box.   
[CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) | [getTopLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__getTopLeft--)​() |  Obtains the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the upper left corner of the document bounding box.   
[CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) | [getTopRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__getTopRight--)​() |  Obtains the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the upper right corner of the document bounding box.   
void | [scaleDocCoordinates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__scaleDocCoordinates-float-)​(float scale) |  Uses a specified scale to zoom in or out the text border.   
void | [scaleDocCoordinates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__scaleDocCoordinates-float-float-)​(float scaleX, float scaleY) |  Uses the specified scales to zoom in or out in the horizontal and vertical directions of the text border.   
void | [setBottomLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__setBottomLeft-ohos_ai_cv_common_CvPoint-)​([CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) bottomLeft) |  Sets the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the lower left corner of the document bounding box.   
void | [setBottomRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__setBottomRight-ohos_ai_cv_common_CvPoint-)​([CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) bottomRight) |  Sets the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the lower right corner of the document bounding box.   
void | [setDocCoordinates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__setDocCoordinates-ohos_ai_cv_docrefine_DocCoordinates-)​([DocCoordinates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768) docCoordinates) |  Creates a DocCoordinates instance by using the corner coordinates of the DocCoordinates data type.   
void | [setTopLeft](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__setTopLeft-ohos_ai_cv_common_CvPoint-)​([CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) topLeft) |  Sets the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the upper left corner of the document bounding box.   
void | [setTopRight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__setTopRight-ohos_ai_cv_common_CvPoint-)​([CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) topRight) |  Sets the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the upper right corner of the document bounding box.   
static [ArrayList](https://developer.harmonyos.com/cn/docs/documentation/doc-references/arraylist-0000001054238589)<[Integer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/integer-0000001054119702)> | [toArrayList](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__toArrayList-ohos_ai_cv_docrefine_DocCoordinates-)​([DocCoordinates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768) docCoordinates) |  Converts a DocCoordinates instance to the corner coordinates of the List<Integer> data type of a text border.   
static [DocCoordinates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768) | [toCoordinates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768#ZH-CN_TOPIC_0000001054678768__toCoordinates-java_util_List-)​([List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[Integer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/integer-0000001054119702)> points) |  Creates a DocCoordinates instance by using the corner coordinate list of the List<Integer> data type.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]DocCoordinates

public DocCoordinates​([CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) topLeft, [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) topRight, [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) bottomLeft, [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) bottomRight)

A constructor used to create a DocCoordinates instance based on the corner coordinates of the document bounding box. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
topLeft  |  Indicates the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the upper left corner of the document bounding box.  
topRight  |  Indicates the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the upper right corner of the document bounding box.  
bottomLeft  |  Indicates the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the lower left corner of the document bounding box.  
bottomRight  |  Indicates the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the lower right corner of the document bounding box.  
  
**Since:**

1

#### [h2]DocCoordinates

public DocCoordinates​()

Default constructor used to create a DocCoordinates instance. 

**Since:**

1

#### Method Detail

#### [h2]getBottomLeft

public [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) getBottomLeft​()

Obtains the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the lower left corner of the document bounding box. 

**Returns:**

Returns the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the lower left corner of the document bounding box.

**Since:**

1

#### [h2]getBottomRight

public [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) getBottomRight​()

Obtains the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the lower right corner of the document bounding box. 

**Returns:**

Returns the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the lower right corner of the document bounding box.

**Since:**

1

#### [h2]getTopLeft

public [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) getTopLeft​()

Obtains the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the upper left corner of the document bounding box. 

**Returns:**

Returns the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the upper left corner of the document bounding box.

**Since:**

1

#### [h2]getTopRight

public [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) getTopRight​()

Obtains the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the upper right corner of the document bounding box. 

**Returns:**

Returns the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the upper right corner of the document bounding box.

**Since:**

1

#### [h2]setBottomLeft

public void setBottomLeft​([CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) bottomLeft)

Sets the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the lower left corner of the document bounding box. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
bottomLeft  |  Indicates the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the lower left corner of the document bounding box.  
  
**Since:**

1

#### [h2]setBottomRight

public void setBottomRight​([CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) bottomRight)

Sets the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the lower right corner of the document bounding box. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
bottomRight  |  Indicates the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the lower right corner of the document bounding box.  
  
**Since:**

1

#### [h2]setTopLeft

public void setTopLeft​([CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) topLeft)

Sets the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the upper left corner of the document bounding box. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
topLeft  |  Indicates the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the upper left corner of the document bounding box.  
  
**Since:**

1

#### [h2]setTopRight

public void setTopRight​([CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) topRight)

Sets the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the upper right corner of the document bounding box. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
topRight  |  Indicates the coordinate of the [CvPoint](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cvpoint-0000001054518778) data type in the upper right corner of the document bounding box.  
  
**Since:**

1

#### [h2]scaleDocCoordinates

public void scaleDocCoordinates​(float scale)

Uses a specified scale to zoom in or out the text border. 

The scale is passed by the caller, and the value range is determined by the variable type.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
scale  |  Indicates the scale to zoom in or out.  
  
**Since:**

1

#### [h2]scaleDocCoordinates

public void scaleDocCoordinates​(float scaleX, float scaleY)

Uses the specified scales to zoom in or out in the horizontal and vertical directions of the text border. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
scaleX  |  Indicates the scale to zoom in or out in the horizontal direction.  
scaleY  |  Indicates the scale to zoom in or out in the vertical direction.  
  
**Since:**

1

#### [h2]setDocCoordinates

public void setDocCoordinates​([DocCoordinates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768) docCoordinates)

Creates a DocCoordinates instance by using the corner coordinates of the DocCoordinates data type. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
docCoordinates  |  Indicates the corner coordinates of the document bounding box.  
  
**Since:**

1

#### [h2]toCoordinates

public static [DocCoordinates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768) toCoordinates​([List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[Integer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/integer-0000001054119702)> points)

Creates a DocCoordinates instance by using the corner coordinate list of the List<Integer> data type. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
points  |  Indicates the corner coordinate list of the List<Integer> data type.  
  
**Returns:**

Returns the created DocCoordinates instance.

**Since:**

1

#### [h2]toArrayList

public static [ArrayList](https://developer.harmonyos.com/cn/docs/documentation/doc-references/arraylist-0000001054238589)<[Integer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/integer-0000001054119702)> toArrayList​([DocCoordinates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doccoordinates-0000001054678768) docCoordinates)

Converts a DocCoordinates instance to the corner coordinates of the List<Integer> data type of a text border. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
docCoordinates  |  Indicates a DocCoordinates instance.  
  
**Returns:**

Returns the corner coordinate list of the List<Integer> data type.

**Since:**

1
