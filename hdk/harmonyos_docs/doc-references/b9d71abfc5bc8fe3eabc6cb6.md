---
name: document/cn/doc-references/meshbuilder_vertexdata-0000001054440037
title: MeshBuilder.VertexData
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/meshbuilder_vertexdata-0000001054440037
source: portal
---

# MeshBuilder.VertexData  
  
[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.agp.render.render3d.util.MeshBuilder.VertexData
    
    public static class MeshBuilder.VertexData
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Provides the vertex data for creating a mesh.

**Since:**

3

#### Constructor Summary

Constructor | Description  
---|---  
[VertexData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/meshbuilder_vertexdata-0000001054440037#ZH-CN_TOPIC_0000001054440037__VertexData--)​() |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) | [getColors](https://developer.harmonyos.com/cn/docs/documentation/doc-references/meshbuilder_vertexdata-0000001054440037#ZH-CN_TOPIC_0000001054440037__getColors--)​() |  Get vertex color data, in vec4 format (r, g, b, a), this buffer is optional.   
[FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) | [getNormals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/meshbuilder_vertexdata-0000001054440037#ZH-CN_TOPIC_0000001054440037__getNormals--)​() |  Obtains the normal data, in vec3 format (x, y, z).   
[FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) | [getPositions](https://developer.harmonyos.com/cn/docs/documentation/doc-references/meshbuilder_vertexdata-0000001054440037#ZH-CN_TOPIC_0000001054440037__getPositions--)​() |  Obtains the position data, in vec3 format (x, y, z).   
[FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) | [getTangents](https://developer.harmonyos.com/cn/docs/documentation/doc-references/meshbuilder_vertexdata-0000001054440037#ZH-CN_TOPIC_0000001054440037__getTangents--)​() |  Get tangent data, in vec4 format (x, y, z, w), this buffer is optional.   
[FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) | [getTexCoords](https://developer.harmonyos.com/cn/docs/documentation/doc-references/meshbuilder_vertexdata-0000001054440037#ZH-CN_TOPIC_0000001054440037__getTexCoords--)​() |  Obtains the texture coordinate data, in vec2 format (u, v).   
void | [setColors](https://developer.harmonyos.com/cn/docs/documentation/doc-references/meshbuilder_vertexdata-0000001054440037#ZH-CN_TOPIC_0000001054440037__setColors-java_nio_FloatBuffer-)​([FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) colors) |  Set vertex color data, in vec4 format (r, g, b, a), this buffer is optional.   
void | [setNormals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/meshbuilder_vertexdata-0000001054440037#ZH-CN_TOPIC_0000001054440037__setNormals-java_nio_FloatBuffer-)​([FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) normals) |  Sets the normal data, in vec3 format (x, y, z).   
void | [setPositions](https://developer.harmonyos.com/cn/docs/documentation/doc-references/meshbuilder_vertexdata-0000001054440037#ZH-CN_TOPIC_0000001054440037__setPositions-java_nio_FloatBuffer-)​([FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) positions) |  Sets the position data, in vec3 format (x, y, z).   
void | [setTangents](https://developer.harmonyos.com/cn/docs/documentation/doc-references/meshbuilder_vertexdata-0000001054440037#ZH-CN_TOPIC_0000001054440037__setTangents-java_nio_FloatBuffer-)​([FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) tangents) |  Set tangent data, in vec4 format (x, y, z, w), this buffer is optional.   
void | [setTexCoords](https://developer.harmonyos.com/cn/docs/documentation/doc-references/meshbuilder_vertexdata-0000001054440037#ZH-CN_TOPIC_0000001054440037__setTexCoords-java_nio_FloatBuffer-)​([FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) texCoords) |  Sets the texture coordinate data, in vec2 format (u, v).   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]VertexData

public VertexData​()

#### Method Detail

#### [h2]getPositions

public [FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) getPositions​()

Obtains the position data, in vec3 format (x, y, z). 

**Returns:**

Returns the position data, as a direct buffer with the native byte order.

#### [h2]setPositions

public void setPositions​([FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) positions)

Sets the position data, in vec3 format (x, y, z). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
positions  |  Indicates the position data, as a direct buffer with the native byte order.  
  
#### [h2]getNormals

public [FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) getNormals​()

Obtains the normal data, in vec3 format (x, y, z). 

**Returns:**

Returns the normal data, as a direct buffer with the native byte order.

#### [h2]setNormals

public void setNormals​([FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) normals)

Sets the normal data, in vec3 format (x, y, z). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
normals  |  Indicates the normal data, as a direct buffer with the native byte order.  
  
#### [h2]getTexCoords

public [FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) getTexCoords​()

Obtains the texture coordinate data, in vec2 format (u, v). 

**Returns:**

Returns the texture coordinate data, as a direct buffer with the native byte order.

#### [h2]setTexCoords

public void setTexCoords​([FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) texCoords)

Sets the texture coordinate data, in vec2 format (u, v). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
texCoords  |  Indicates the texture coordinate data, as a direct buffer with the native byte order.  
  
#### [h2]getTangents

public [FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) getTangents​()

Get tangent data, in vec4 format (x, y, z, w), this buffer is optional. Can be null. If not null the buffer must be a direct buffer with native byte order. 

**Returns:**

tangent data.

#### [h2]setTangents

public void setTangents​([FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) tangents)

Set tangent data, in vec4 format (x, y, z, w), this buffer is optional. Can be null. If not null the buffer must be a direct buffer with native byte order. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
tangents  |  tangent data.  
  
#### [h2]getColors

public [FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) getColors​()

Get vertex color data, in vec4 format (r, g, b, a), this buffer is optional. Can be null. If not null the buffer must be a direct buffer with native byte order. 

**Returns:**

vertex color data.

#### [h2]setColors

public void setColors​([FloatBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatbuffer-0000001054358465) colors)

Set vertex color data, in vec4 format (r, g, b, a), this buffer is optional. Can be null. If not null the buffer must be a direct buffer with native byte order. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
colors  |  vertex color data.
