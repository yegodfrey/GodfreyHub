---
name: document/cn/doc-references/pathmeasure-0000001060837270
title: PathMeasure
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/pathmeasure-0000001060837270
source: portal
---

# PathMeasure

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.agp.render.PathMeasure
    
    public class PathMeasure
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Measures the length of a Path object.

**Since:**

3

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [GET_POSITION_AND_TANGENT_MATRIX_FLAG](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmeasure-0000001060837270#ZH-CN_TOPIC_0000001060837270__GET_POSITION_AND_TANGENT_MATRIX_FLAG) |  Indicates the flag of getting position and tangent.   
static int | [GET_POSITION_MATRIX_FLAG](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmeasure-0000001060837270#ZH-CN_TOPIC_0000001060837270__GET_POSITION_MATRIX_FLAG) |  Indicates the flag of getting position.   
static int | [GET_TANGENT_MATRIX_FLAG](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmeasure-0000001060837270#ZH-CN_TOPIC_0000001060837270__GET_TANGENT_MATRIX_FLAG) |  Indicates the flag of getting tangent.   
  
#### Constructor Summary

Constructor | Description  
---|---  
[PathMeasure](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmeasure-0000001060837270#ZH-CN_TOPIC_0000001060837270__PathMeasure-ohos_agp_render_Path-boolean-)​([Path](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path-0000001055680040) path, boolean forceClosed) |  A constructor used to create a PathMeasure object based on the specified path.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
float | [getLength](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmeasure-0000001060837270#ZH-CN_TOPIC_0000001060837270__getLength--)​() |  Obtains the length of the associated path in this PathMeasure object.   
boolean | [getMatrix](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmeasure-0000001060837270#ZH-CN_TOPIC_0000001060837270__getMatrix-float-ohos_agp_utils_Matrix-int-)​(float distance, [Matrix](https://developer.harmonyos.com/cn/docs/documentation/doc-references/matrix-0000001054518768) matrix, int flags) |  Obtains the matrix that saves the position or tangent value of the specified distance on the path.   
boolean | [getPosTan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmeasure-0000001060837270#ZH-CN_TOPIC_0000001060837270__getPosTan-float-float:A-float:A-)​(float distance, float[] position, float[] tangent) |  Obtains the coordinates that specify the position of the specified length on the associated path and its tangent value.   
boolean | [getSegment](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmeasure-0000001060837270#ZH-CN_TOPIC_0000001060837270__getSegment-float-float-ohos_agp_render_Path-boolean-)​(float startDistance, float stopDistance, [Path](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path-0000001055680040) path, boolean startWithMoveTo) |  Obtains the specified segment of the path associated with this PathMeasure object.   
boolean | [isClosed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmeasure-0000001060837270#ZH-CN_TOPIC_0000001060837270__isClosed--)​() |  Checks whether the contour of the path associated with this PathMeasure object is closed.   
void | [setPath](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmeasure-0000001060837270#ZH-CN_TOPIC_0000001060837270__setPath-ohos_agp_render_Path-boolean-)​([Path](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path-0000001055680040) path, boolean forceClosed) |  Associates the specified path with this PathMeasure object.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]GET_POSITION_AND_TANGENT_MATRIX_FLAG

public static final int GET_POSITION_AND_TANGENT_MATRIX_FLAG

Indicates the flag of getting position and tangent. 

**Since:**

4

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_render_PathMeasure_GET_POSITION_AND_TANGENT_MATRIX_FLAG)

#### [h2]GET_POSITION_MATRIX_FLAG

public static final int GET_POSITION_MATRIX_FLAG

Indicates the flag of getting position. 

**Since:**

4

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_render_PathMeasure_GET_POSITION_MATRIX_FLAG)

#### [h2]GET_TANGENT_MATRIX_FLAG

public static final int GET_TANGENT_MATRIX_FLAG

Indicates the flag of getting tangent. 

**Since:**

4

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_agp_render_PathMeasure_GET_TANGENT_MATRIX_FLAG)

#### Constructor Detail

#### [h2]PathMeasure

public PathMeasure​([Path](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path-0000001055680040) path, boolean forceClosed)

A constructor used to create a PathMeasure object based on the specified path. 

Once a PathMeasure object is associated with a specified path, you must call [setPath(ohos.agp.render.Path, boolean)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pathmeasure-0000001060837270#ZH-CN_TOPIC_0000001060837270__setPath-ohos_agp_render_Path-boolean-) to re-associate the path if the path is modified.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
path  |  Indicates the Path object to associate. This parameter can be null.  
forceClosed  |  Specifies whether to forcibly close the path. If the value is true, the path is forcibly closed. If the value is false, the path keeps unchanged.  
  
**Since:**

3

#### Method Detail

#### [h2]getLength

public float getLength​()

Obtains the length of the associated path in this PathMeasure object. 

**Returns:**

Returns the length of the associated path.

**Since:**

3

#### [h2]getPosTan

public boolean getPosTan​(float distance, float[] position, float[] tangent)

Obtains the coordinates that specify the position of the specified length on the associated path and its tangent value. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
distance  |  Indicates the distance away from the starting point of the associated path.  
position  |  Indicates the coordinate array of the position which is distance away from the starting point of the associated path. The coordinate array contains two values, the x-axis coordinate value and y-axis coordinate value.  
tangent  |  Indicates the tangent value of the position on the associated path, that is, the direction of the path at the point.  
  
**Returns:**

Returns true if the position and tangent value are obtained; returns false otherwise. When false is returned, the position and tangent value of the path keep unchanged.

**Since:**

3

#### [h2]setPath

public void setPath​([Path](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path-0000001055680040) path, boolean forceClosed)

Associates the specified path with this PathMeasure object. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
path  |  Indicates the Path object to associate.  
forceClosed  |  Specifies whether to forcibly close the path. If the value is true, the path is forcibly closed. If the value is false, the path keeps unchanged.  
  
**Since:**

3

#### [h2]getSegment

public boolean getSegment​(float startDistance, float stopDistance, [Path](https://developer.harmonyos.com/cn/docs/documentation/doc-references/path-0000001055680040) path, boolean startWithMoveTo)

Obtains the specified segment of the path associated with this PathMeasure object. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
startDistance  |  Indicates the distance from the start of the segment to the start of the path.  
stopDistance  |  Indicates the distance from the end of the segment to the start of the path.  
path  |  Indicates the Path object used to save the segment of the associated path. The existing structure in the Path object keeps unchanged, and only the segment of the associated path is added.  
startWithMoveTo  |  Specifies whether to use a moveTo feature for the segment. If this parameter is set to true, the segment is left unchanged. If this parameter is set to false and the last point of the path does not overlap the first point of the segment, the two points will be connected.  
  
**Returns:**

Returns true if the segment is obtained; returns false otherwise.

**Since:**

3

#### [h2]isClosed

public boolean isClosed​()

Checks whether the contour of the path associated with this PathMeasure object is closed. 

**Returns:**

Returns true if the contour of the path is closed; returns false otherwise.

**Since:**

4

#### [h2]getMatrix

public boolean getMatrix​(float distance, [Matrix](https://developer.harmonyos.com/cn/docs/documentation/doc-references/matrix-0000001054518768) matrix, int flags)

Obtains the matrix that saves the position or tangent value of the specified distance on the path. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
distance  |  Indicates the distance from the start of the path to the specified position.  
matrix  |  Indicates the matrix used to save the position or/and tangent value of the specified distance.  
flags  |  Indicates the flags used to specify the data to be stored in the matrix. The value 1 means to save the position, 2 means to save the tangent value, and 3 means to save both the position and tangent value.  
  
**Returns:**

Returns true if information is successfully saved in the matrix; returns false otherwise.

**Since:**

4
