---
name: document/cn/doc-references/rectfloat-0000001120951649
title: RectFloat
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/rectfloat-0000001120951649
source: portal
---

# RectFloat

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.utils.geo.RectFloat
    
    public class RectFloat
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Indicates a rectangle that uses float coordinates. 

This class describes the position, width, and height of a rectangle.

**Since:**

5

#### Nested Class Summary

Modifier and Type | Class | Description  
---|---|---  
static class  | [RectFloat.RotationEnum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat_rotationenum-0000001078320154) |  Indicates the rotation angle.   
  
#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
float | [bottom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__bottom) |  Indicates the Y coordinate of the lower right corner of a rectangle.   
float | [left](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__left) |  Indicates the X coordinate of the upper left corner of a rectangle.   
float | [right](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__right) |  Indicates the X coordinate of the lower right corner of a rectangle.   
float | [top](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__top) |  Indicates the Y coordinate of the upper left corner of a rectangle.   
  
#### Constructor Summary

Constructor | Description  
---|---  
[RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__RectFloat--)​() |  Default constructor used to create a RectFloat instance.   
[RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__RectFloat-float-float-float-float-)​(float left, float top, float right, float bottom) |  A constructor used to create a RectFloat instance.   
[RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__RectFloat-ohos_utils_geo_Rect-)​([Rect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rect-0000001120847539) rect) |  A constructor used to create a RectFloat instance by using a rectangle with integer coordinates.   
[RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__RectFloat-ohos_utils_geo_RectFloat-)​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloat) |  A constructor used to create a RectFloat instance by using a rectangle with float coordinates.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [clear](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__clear--)​() |  Clears this RectFloat.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [convertRectToSignedValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__convertRectToSignedValue--)​() |  Obtains the short string that can represent the current rectangle.   
boolean | [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__equals-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) o) |  Indicates whether some other object is "equal to" this one.   
void | [fuse](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__fuse-float-float-)​(float xCoor, float yCoor) |  Fuses this RectFloat with a specified coordinate.   
void | [fuse](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__fuse-float-float-float-float-)​(float left, float top, float right, float bottom) |  Fuses this RectFloat with a specified rectangle holding given coordinates.   
void | [fuse](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__fuse-ohos_utils_geo_RectFloat-)​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloat) |  Fuses this RectFloat with a specified rectangle.   
[Point](https://developer.harmonyos.com/cn/docs/documentation/doc-references/point-0000001121107283) | [getCenter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getCenter--)​() |  Obtains the center point of this RectFloat.   
float | [getHeight](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getHeight--)​() |  Obtains the height of this RectFloat.   
float | [getHorizontalCenter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getHorizontalCenter--)​() |  Obtains the coordinates of the horizontal center of this RectFloat.   
boolean | [getIntersectRect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getIntersectRect-ohos_utils_geo_RectFloat-)​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloat) |  Checks whether this RectFloat intersects a specified rectangle and sets this RectFloat to that intersection if they intersect.   
[Point](https://developer.harmonyos.com/cn/docs/documentation/doc-references/point-0000001121107283) | [getPivot](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivot--)​() |  Obtains a pivot point.   
float | [getPivotXCoordinate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivotXCoordinate--)​() |  Obtains the x-coordinate of the pivot, around which this RectFloat is rotated and scaled.   
float | [getPivotYCoordinate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivotYCoordinate--)​() |  Obtains the y-coordinate of the pivot, around which this RectFloat is rotated and scaled.   
[DimensFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dimensfloat-0000001120712389) | [getRectSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getRectSize--)​() |  Obtains the size of this RectFloat.   
float | [getVerticalCenter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getVerticalCenter--)​() |  Obtains the coordinates of the vertical center of this RectFloat.   
float | [getWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getWidth--)​() |  Obtains the width of this RectFloat.   
int | [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__hashCode--)​() |  Returns a hash code value for the object.   
boolean | [isEmpty](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__isEmpty--)​() |  Checks whether this RectFloat is empty.   
boolean | [isInclude](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__isInclude-float-float-)​(float x, float y) |  Checks whether a specified point is inside this RectFloat.   
boolean | [isInclude](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__isInclude-float-float-float-float-)​(float left, float top, float right, float bottom) |  Checks whether a specified rectangle is inside this RectFloat.   
boolean | [isInclude](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__isInclude-ohos_utils_geo_Point-)​([Point](https://developer.harmonyos.com/cn/docs/documentation/doc-references/point-0000001121107283) point) |  Checks whether a specified point is inside this RectFloat.   
boolean | [isInclude](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__isInclude-ohos_utils_geo_RectFloat-)​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloat) |  Checks whether a specified rectangle is inside this RectFloat.   
boolean | [isIntersect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__isIntersect-float-float-float-float-)​(float left, float top, float right, float bottom) |  Checks whether a specified rectangle intersects this RectFloat based on left, top, right, and bottom.   
boolean | [isIntersect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__isIntersect-ohos_utils_geo_RectFloat-)​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rect) |  Checks whether a specified rectangle intersects this RectFloat.   
static boolean | [isIntersect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__isIntersect-ohos_utils_geo_RectFloat-ohos_utils_geo_RectFloat-)​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloatA, [RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloatB) |  Checks whether two specified rectangles intersect.   
void | [modify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__modify-float-float-float-float-)​(float left, float top, float right, float bottom) |  Modifies the position of this RectFloat based on the position of a specified rectangle.   
void | [modify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__modify-ohos_utils_geo_Rect-)​([Rect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rect-0000001120847539) rect) |  Modifies the position of this Rect based on the position of a specified rectangle with integer coordinates.   
void | [modify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__modify-ohos_utils_geo_RectFloat-)​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloat) |  Modifies the position of this RectFloat based on the position of a specified rectangle with float coordinates.   
[RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) | [obtainIntersectRect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__obtainIntersectRect-float-float-float-float-)​(float left, float top, float right, float bottom) |  Obtains the intersection rectangle of this RectFloat and a specified rectangle based on left, top, right, and bottom.   
[RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) | [obtainIntersectRect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__obtainIntersectRect-ohos_utils_geo_RectFloat-)​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloat) |  Obtains the intersection rectangle of this RectFloat and a specified rectangle.   
void | [reorder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__reorder--)​() |  If the rectangle is illegal, swap the left, right, or top and bottom coordinates to make the rectangle legal.   
void | [rotateBy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__rotateBy-ohos_utils_geo_RectFloat_RotationEnum-)​([RectFloat.RotationEnum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat_rotationenum-0000001078320154) rotationEnum) |  Rotates this RectFloat around the pivot.   
void | [rounding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__rounding-ohos_utils_geo_Rect-)​([Rect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rect-0000001120847539) rect) |  Rounds the float coordinates of this RectFloat to their nearest integer coordinates and creates a rectangle to hold the new coordinates.   
void | [scale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__scale-float-)​(float scale) |  Scales this RectFloat around the pivot.   
boolean | [setIntersect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setIntersect-ohos_utils_geo_RectFloat-ohos_utils_geo_RectFloat-)​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloatA, [RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloatB) |  Sets this RectFloat as an intersection for two specified rectangles that intersect one another.   
void | [setPivot](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivot-float-float-)​(float x, float y) |  Sets the pivot for this RectFloat.   
void | [setPivot](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivot-ohos_utils_geo_Point-)​([Point](https://developer.harmonyos.com/cn/docs/documentation/doc-references/point-0000001121107283) point) |  Sets the pivot, around which this RectFloat is rotated and scaled based on point.   
void | [setPivotXCoordinate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivotXCoordinate-float-)​(float x) |  Sets the x-coordinate of the pivot, around which this RectFloat is rotated and scaled.   
void | [setPivotYCoordinate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivotYCoordinate-float-)​(float y) |  Sets the y-coordinate of the pivot, around which this RectFloat is rotated and scaled.   
void | [shrink](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__shrink-float-float-)​(float dx, float dy) |  Shrinks this RectFloat.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__toString--)​() |  Returns a string representation of the object.   
void | [translate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__translate-float-float-)​(float dx, float dy) |  Translates this RectFloat.   
void | [translateCenterTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__translateCenterTo-float-float-)​(float centerX, float centerY) |  Translates the center of this RectFloat to a new position.   
void | [translateCenterTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__translateCenterTo-ohos_utils_geo_Point-)​([Point](https://developer.harmonyos.com/cn/docs/documentation/doc-references/point-0000001121107283) point) |  Translates the center of this RectFloat to a new position based on point.   
void | [translateTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__translateTo-float-float-)​(float newLeft, float newTop) |  Translates this RectFloat to a new position.   
boolean | [verifyRectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__verifyRectFloat--)​() |  Checks whether this RectFloat is valid.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]bottom

public float bottom

Indicates the Y coordinate of the lower right corner of a rectangle. 

**Since:**

5

#### [h2]left

public float left

Indicates the X coordinate of the upper left corner of a rectangle. 

**Since:**

5

#### [h2]right

public float right

Indicates the X coordinate of the lower right corner of a rectangle. 

**Since:**

5

#### [h2]top

public float top

Indicates the Y coordinate of the upper left corner of a rectangle. 

**Since:**

5

#### Constructor Detail

#### [h2]RectFloat

public RectFloat​()

Default constructor used to create a RectFloat instance. 

The initial value is (0.0, 0.0, 0.0, 0.0).

**Since:**

5

#### [h2]RectFloat

public RectFloat​(float left, float top, float right, float bottom)

A constructor used to create a RectFloat instance. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
left  |  Indicates the X-coordinate of the upper left corner.  
top  |  Indicates the Y-coordinate of the upper left corner.  
right  |  Indicates the X-coordinate of the lower right corner.  
bottom  |  Indicates the Y-coordinate of the lower right corner.  
  
**Since:**

5

#### [h2]RectFloat

public RectFloat​([Rect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rect-0000001120847539) rect)

A constructor used to create a RectFloat instance by using a rectangle with integer coordinates. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
rect  |  Indicates the rectangle with integer coordinates. For details, see [Rect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rect-0000001120847539).  
  
**Since:**

5

#### [h2]RectFloat

public RectFloat​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloat)

A constructor used to create a RectFloat instance by using a rectangle with float coordinates. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
rectFloat  |  Indicates the rectangle with float coordinates. For details, see [RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649).  
  
**Since:**

5

#### Method Detail

#### [h2]getHorizontalCenter

public final float getHorizontalCenter​()

Obtains the coordinates of the horizontal center of this RectFloat. 

**Returns:**

Returns the coordinates of the horizontal center of this RectFloat.

**Since:**

5

#### [h2]getVerticalCenter

public final float getVerticalCenter​()

Obtains the coordinates of the vertical center of this RectFloat. 

**Returns:**

Returns the coordinates of the vertical center of this RectFloat.

**Since:**

5

#### [h2]getCenter

public [Point](https://developer.harmonyos.com/cn/docs/documentation/doc-references/point-0000001121107283) getCenter​()

Obtains the center point of this RectFloat. 

**Returns:**

Returns the center point.

**Since:**

5

#### [h2]setPivot

public void setPivot​(float x, float y)

Sets the pivot for this RectFloat. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  Indicates the x-coordinate of the pivot to set.  
y  |  Indicates the y-coordinate of the pivot to set.  
  
**Since:**

5

**See Also:**

[setPivotXCoordinate(float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivotXCoordinate-float-), [getPivotXCoordinate()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivotXCoordinate--), [setPivotYCoordinate(float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivotYCoordinate-float-), [getPivotYCoordinate()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivotYCoordinate--), [getPivot()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivot--), [setPivot(Point)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivot-ohos_utils_geo_Point-)

#### [h2]setPivot

public void setPivot​([Point](https://developer.harmonyos.com/cn/docs/documentation/doc-references/point-0000001121107283) point)

Sets the pivot, around which this RectFloat is rotated and scaled based on point. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
point  |  Indicates the coordinates of the pivot to set.  
  
**Since:**

5

**See Also:**

[setPivotXCoordinate(float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivotXCoordinate-float-), [getPivotXCoordinate()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivotXCoordinate--), [setPivotYCoordinate(float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivotYCoordinate-float-), [getPivotYCoordinate()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivotYCoordinate--), #getPivot(Point), [setPivot(float, float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivot-float-float-)

#### [h2]setPivotXCoordinate

public void setPivotXCoordinate​(float x)

Sets the x-coordinate of the pivot, around which this RectFloat is rotated and scaled. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  Indicates the x-coordinate of the pivot to set.  
  
**Since:**

5

**See Also:**

[getPivotXCoordinate()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivotXCoordinate--), [setPivotYCoordinate(float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivotYCoordinate-float-), [getPivotYCoordinate()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivotYCoordinate--), [getPivot()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivot--), [setPivot(Point)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivot-ohos_utils_geo_Point-), [setPivot(float, float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivot-float-float-)

#### [h2]setPivotYCoordinate

public void setPivotYCoordinate​(float y)

Sets the y-coordinate of the pivot, around which this RectFloat is rotated and scaled. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
y  |  Indicates the y-coordinate of the pivot to set.  
  
**Since:**

5

**See Also:**

#setPivotXCoordinate(), #getPivotYCoordinate(float), [getPivotYCoordinate()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivotYCoordinate--), [getPivot()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivot--), [setPivot(Point)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivot-ohos_utils_geo_Point-), [setPivot(float, float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivot-float-float-)

#### [h2]getPivot

public [Point](https://developer.harmonyos.com/cn/docs/documentation/doc-references/point-0000001121107283) getPivot​()

Obtains a pivot point. 

**Returns:**

Returns the pivot point.

**Since:**

5

**See Also:**

[setPivotXCoordinate(float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivotXCoordinate-float-), [getPivotXCoordinate()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivotXCoordinate--), [setPivotYCoordinate(float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivotYCoordinate-float-), [getPivotYCoordinate()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivotYCoordinate--), [setPivot(Point)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivot-ohos_utils_geo_Point-), [setPivot(float, float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivot-float-float-)

#### [h2]getPivotXCoordinate

public float getPivotXCoordinate​()

Obtains the x-coordinate of the pivot, around which this RectFloat is rotated and scaled. 

**Returns:**

Returns the x-coordinate of the pivot.

**Since:**

5

**See Also:**

[setPivotXCoordinate(float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivotXCoordinate-float-), [setPivotYCoordinate(float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivotYCoordinate-float-), [getPivotYCoordinate()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivotYCoordinate--), [getPivot()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivot--), [setPivot(Point)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivot-ohos_utils_geo_Point-), [setPivot(float, float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivot-float-float-)

#### [h2]getPivotYCoordinate

public float getPivotYCoordinate​()

Obtains the y-coordinate of the pivot, around which this RectFloat is rotated and scaled. 

**Returns:**

Returns the y-coordinate of the pivot.

**Since:**

5

**See Also:**

[setPivotXCoordinate(float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivotXCoordinate-float-), [getPivotXCoordinate()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivotXCoordinate--), [setPivotYCoordinate(float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivotYCoordinate-float-), [getPivot()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__getPivot--), [setPivot(Point)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivot-ohos_utils_geo_Point-), [setPivot(float, float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649#ZH-CN_TOPIC_0000001120951649__setPivot-float-float-)

#### [h2]scale

public void scale​(float scale)

Scales this RectFloat around the pivot. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
scale  |  Indicates the scale value.  
  
**Since:**

5

#### [h2]rotateBy

public void rotateBy​([RectFloat.RotationEnum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat_rotationenum-0000001078320154) rotationEnum)

Rotates this RectFloat around the pivot. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
rotationEnum  |  Indicates the rotation angle, as enumerated in [RotationEnum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat_rotationenum-0000001078320154).  
  
**Since:**

5

#### [h2]isInclude

public boolean isInclude​(float x, float y)

Checks whether a specified point is inside this RectFloat. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  Indicates the X coordinate of the specified point.  
y  |  Indicates the Y coordinate of the specified point.  
  
**Returns:**

Returns true if the specified point is inside this RectFloat; returns false otherwise.

**Since:**

5

#### [h2]isInclude

public boolean isInclude​([Point](https://developer.harmonyos.com/cn/docs/documentation/doc-references/point-0000001121107283) point)

Checks whether a specified point is inside this RectFloat. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
point  |  Indicates the specified point.  
  
**Returns:**

Returns true if the specified point is inside this RectFloat; returns false otherwise.

**Since:**

5

#### [h2]isInclude

public boolean isInclude​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloat)

Checks whether a specified rectangle is inside this RectFloat. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
rectFloat  |  Indicates the specified rectangle.  
  
**Returns:**

Returns true if the specified rectangle is inside this RectFloat; returns false otherwise.

**Since:**

5

#### [h2]isInclude

public boolean isInclude​(float left, float top, float right, float bottom)

Checks whether a specified rectangle is inside this RectFloat. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
left  |  Indicates the x-coordinate of the specified rectangle's upper left corner.  
top  |  Indicates the y-coordinate of the specified rectangle's upper left corner.  
right  |  Indicates the x-coordinate of the specified rectangle's lower right corner.  
bottom  |  Indicates the y-coordinate of the specified rectangle's lower right corner.  
  
**Returns:**

Returns true if the specified rectangle is inside this RectFloat; returns false otherwise.

**Since:**

5

#### [h2]equals

public boolean equals​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) o)

Indicates whether some other object is "equal to" this one. 

The equals method implements an equivalence relation on non-null object references: 

    * It is _reflexive_ : for any non-null reference value x, x.equals(x) should return true. 
    * It is _symmetric_ : for any non-null reference values x and y, x.equals(y) should return true if and only if y.equals(x) returns true. 
    * It is _transitive_ : for any non-null reference values x, y, and z, if x.equals(y) returns true and y.equals(z) returns true, then x.equals(z) should return true. 
    * It is _consistent_ : for any non-null reference values x and y, multiple invocations of x.equals(y) consistently return true or consistently return false, provided no information used in equals comparisons on the objects is modified. 
    * For any non-null reference value x, x.equals(null) should return false. 

The equals method for class Object implements the most discriminating possible equivalence relation on objects; that is, for any non-null reference values x and y, this method returns true if and only if x and y refer to the same object (x == y has the value true). 

Note that it is generally necessary to override the hashCode method whenever this method is overridden, so as to maintain the general contract for the hashCode method, which states that equal objects must have equal hash codes.

**Overrides:**

[equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
o  |  the reference object with which to compare.  
  
**Returns:**

true if this object is the same as the obj argument; false otherwise.

**See Also:**

[Object.hashCode()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [HashMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashmap-0000001054518606)

#### [h2]hashCode

public int hashCode​()

Returns a hash code value for the object. This method is supported for the benefit of hash tables such as those provided by [HashMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashmap-0000001054518606). 

The general contract of hashCode is: 

    * Whenever it is invoked on the same object more than once during an execution of a Java application, the hashCode method must consistently return the same integer, provided no information used in equals comparisons on the object is modified. This integer need not remain consistent from one execution of an application to another execution of the same application. 
    * If two objects are equal according to the equals(Object) method, then calling the hashCode method on each of the two objects must produce the same integer result. 
    * It is not required that if two objects are unequal according to the [Object.equals(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-) method, then calling the hashCode method on each of the two objects must produce distinct integer results. However, the programmer should be aware that producing distinct integer results for unequal objects may improve the performance of hash tables. 

As much as is reasonably practical, the hashCode method defined by class Object does return distinct integers for distinct objects. (This is typically implemented by converting the internal address of the object into an integer, but this implementation technique is not required by the Java™ programming language.)

**Overrides:**

[hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

a hash code value for this object.

**See Also:**

[Object.equals(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [System.identityHashCode(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/system-0000001054558449#ZH-CN_TOPIC_0000001054558449__identityHashCode-java_lang_Object-)

#### [h2]getHeight

public final float getHeight​()

Obtains the height of this RectFloat. 

**Returns:**

Returns the rectangle height.

**Since:**

5

#### [h2]getWidth

public final float getWidth​()

Obtains the width of this RectFloat. 

**Returns:**

Returns the rectangle width.

**Since:**

5

#### [h2]getRectSize

public [DimensFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dimensfloat-0000001120712389) getRectSize​()

Obtains the size of this RectFloat. 

**Returns:**

Returns the size.

**Since:**

5

#### [h2]shrink

public void shrink​(float dx, float dy)

Shrinks this RectFloat. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
dx  |  Indicates the horizontal length to shrink.  
dy  |  Indicates the vertical length to shrink.  
  
**Since:**

5

#### [h2]getIntersectRect

public boolean getIntersectRect​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloat)

Checks whether this RectFloat intersects a specified rectangle and sets this RectFloat to that intersection if they intersect. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
rectFloat  |  Indicates the specified rectangle.  
  
**Returns:**

Returns true if this RectFloat intersects the specified rectangle; returns false otherwise.

**Since:**

5

#### [h2]isIntersect

public static boolean isIntersect​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloatA, [RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloatB)

Checks whether two specified rectangles intersect. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
rectFloatA  |  Indicates one rectangle to check.  
rectFloatB  |  Indicates the other rectangle to check.  
  
**Returns:**

Returns true if the two specified rectangles intersect; returns false otherwise.

**Since:**

5

#### [h2]isIntersect

public boolean isIntersect​(float left, float top, float right, float bottom)

Checks whether a specified rectangle intersects this RectFloat based on left, top, right, and bottom. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
left  |  Indicates the x-coordinate of the specified rectangle's upper left corner.  
top  |  Indicates the y-coordinate of the specified rectangle's upper left corner.  
right  |  Indicates the x-coordinate of the specified rectangle's lower right corner.  
bottom  |  Indicates the y-coordinate of the specified rectangle's lower right corner.  
  
**Returns:**

Returns true if the specified rectangle intersects this RectFloat; returns false otherwise.

**Since:**

5

#### [h2]isIntersect

public boolean isIntersect​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rect)

Checks whether a specified rectangle intersects this RectFloat. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
rect  |  Indicates the specified rectangle.  
  
**Returns:**

Returns true if the specified rectangle intersects this RectFloat; returns false otherwise.

**Since:**

5

#### [h2]isEmpty

public final boolean isEmpty​()

Checks whether this RectFloat is empty. 

**Returns:**

Returns true if this RectFloat is empty; returns false otherwise.

**Since:**

5

#### [h2]verifyRectFloat

public boolean verifyRectFloat​()

Checks whether this RectFloat is valid. A rectangle is considered valid if left (x-coordinate of the rectangle's upper left corner) is less than right (x-coordinate of the rectangle's lower right corner) and top (y-coordinate of the rectangle's upper left corner) is less than bottom (y-coordinate of the rectangle's lower right corner). 

**Returns:**

Returns true if this RectFloat is valid; returns false otherwise.

**Since:**

5

#### [h2]translate

public void translate​(float dx, float dy)

Translates this RectFloat. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
dx  |  Indicates the horizontal length to translate.  
dy  |  Indicates the vertical length to translate.  
  
**Since:**

5

#### [h2]modify

public void modify​(float left, float top, float right, float bottom)

Modifies the position of this RectFloat based on the position of a specified rectangle. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
left  |  Indicates the X coordinate of the upper left corner of the specified rectangle.  
top  |  Indicates the Y coordinate of the upper left corner of the specified rectangle.  
right  |  Indicates the X coordinate of the lower right corner of the specified rectangle.  
bottom  |  Indicates the Y coordinate of the lower right corner of the specified rectangle.  
  
**Since:**

5

#### [h2]modify

public void modify​([Rect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rect-0000001120847539) rect)

Modifies the position of this Rect based on the position of a specified rectangle with integer coordinates. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
rect  |  Indicates the specified rectangle with integer coordinates.  
  
**Since:**

5

#### [h2]modify

public void modify​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloat)

Modifies the position of this RectFloat based on the position of a specified rectangle with float coordinates. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
rectFloat  |  Indicates the specified rectangle with float coordinates.  
  
**Since:**

5

#### [h2]clear

public void clear​()

Clears this RectFloat. 

**Since:**

5

#### [h2]setIntersect

public boolean setIntersect​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloatA, [RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloatB)

Sets this RectFloat as an intersection for two specified rectangles that intersect one another. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
rectFloatA  |  Indicates one specified rectangle.  
rectFloatB  |  Indicates another specified rectangle.  
  
**Returns:**

Returns true if the two specified rectangles intersect; returns false otherwise.

**Since:**

5

#### [h2]toString

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​()

Returns a string representation of the object. In general, the toString method returns a string that "textually represents" this object. The result should be a concise but informative representation that is easy for a person to read. It is recommended that all subclasses override this method. 

The toString method for class Object returns a string consisting of the name of the class of which the object is an instance, the at-sign character `@', and the unsigned hexadecimal representation of the hash code of the object. In other words, this method returns a string equal to the value of: 
    
    getClass().getName() + '@' + Integer.toHexString(hashCode())
     

**Overrides:**

[toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

a string representation of the object.

#### [h2]fuse

public void fuse​(float left, float top, float right, float bottom)

Fuses this RectFloat with a specified rectangle holding given coordinates. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
left  |  Indicates the X coordinate of the upper left corner of the specified rectangle.  
top  |  Indicates the Y coordinate of the upper left corner of the specified rectangle.  
right  |  Indicates the X coordinate of the lower right corner of the specified rectangle.  
bottom  |  Indicates the Y coordinate of the lower right corner of the specified rectangle.  
  
**Since:**

5

#### [h2]fuse

public void fuse​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloat)

Fuses this RectFloat with a specified rectangle. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
rectFloat  |  Indicates the specified rectangle.  
  
**Since:**

5

#### [h2]fuse

public void fuse​(float xCoor, float yCoor)

Fuses this RectFloat with a specified coordinate. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
xCoor  |  Indicates the X coordinate.  
yCoor  |  Indicates the Y coordinate.  
  
**Since:**

5

#### [h2]translateTo

public void translateTo​(float newLeft, float newTop)

Translates this RectFloat to a new position. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
newLeft  |  Indicates the X coordinate of the upper left corner of the rectangle at the new position.  
newTop  |  Indicates the Y coordinate of the upper left corner of the rectangle at the new position.  
  
**Since:**

5

#### [h2]translateCenterTo

public void translateCenterTo​(float centerX, float centerY)

Translates the center of this RectFloat to a new position. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
centerX  |  Indicates the x-coordinate of the rectangle's new center.  
centerY  |  Indicates the y-coordinate of the rectangle's new center.  
  
**Since:**

5

#### [h2]translateCenterTo

public void translateCenterTo​([Point](https://developer.harmonyos.com/cn/docs/documentation/doc-references/point-0000001121107283) point)

Translates the center of this RectFloat to a new position based on point. param point Indicates the coordinates of the point representing the new position. 

**Since:**

5

#### [h2]rounding

public void rounding​([Rect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rect-0000001120847539) rect)

Rounds the float coordinates of this RectFloat to their nearest integer coordinates and creates a rectangle to hold the new coordinates. 

The X coordinate of the upper left corner of this RectFloat is rounded down to its nearest integer value as the X coordinate of the upper left corner of the rectangle to create. 

The Y coordinate of the upper left corner of this RectFloat is rounded down to its nearest integer value as the Y coordinate of the upper left corner of the rectangle to create. 

The X coordinate of the lower right corner of this RectFloat is rounded up to its nearest integer value as the X coordinate of the lower right corner of the rectangle to create. 

The Y coordinate of the lower right corner of this RectFloat is rounded up to its nearest integer value as the Y coordinate of the lower right corner of the rectangle to create.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
rect  |  Indicates the rectangle to hold new coordinates.  
  
**Since:**

5

#### [h2]obtainIntersectRect

public [RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) obtainIntersectRect​(float left, float top, float right, float bottom)

Obtains the intersection rectangle of this RectFloat and a specified rectangle based on left, top, right, and bottom. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
left  |  Indicates the x-coordinate of the specified rectangle's upper left corner.  
top  |  Indicates the y-coordinate of the specified rectangle's upper left corner.  
right  |  Indicates the x-coordinate of the specified rectangle's lower right corner.  
bottom  |  indicates the y-coordinate of the specified rectangle's lower right corner.  
  
**Returns:**

Returns the intersection rectangle of the two rectangles.

**Since:**

5

#### [h2]convertRectToSignedValue

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) convertRectToSignedValue​()

Obtains the short string that can represent the current rectangle. 

**Returns:**

Returns the short string.

**Since:**

5

#### [h2]reorder

public void reorder​()

If the rectangle is illegal, swap the left, right, or top and bottom coordinates to make the rectangle legal. 

**Since:**

5

#### [h2]obtainIntersectRect

public [RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) obtainIntersectRect​([RectFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rectfloat-0000001120951649) rectFloat)

Obtains the intersection rectangle of this RectFloat and a specified rectangle. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
rectFloat  |  Indicates the specified rectangle.  
  
**Returns:**

Returns the intersection rectangle of the two rectangles.

**Since:**

5

**See Also:**

#ObtainIntersectRect(float, float, float, float)
