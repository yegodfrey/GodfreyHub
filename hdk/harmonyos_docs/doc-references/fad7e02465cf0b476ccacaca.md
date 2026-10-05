---
name: document/cn/doc-references/textureholder-0000001060157227
title: TextureHolder
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/textureholder-0000001060157227
source: portal
---

TextureHolder [java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.agp.graphics.TextureHolder
    
    public class TextureHolder
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Captures frames from an image stream as an texture. The image stream may come from either camera preview or video decode. A [Surface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/surface-0000001054120059) created from a TextureHolder can be used as an output destination for the image stream. **Since:** 3Nested Class Summary Modifier and Type | Class | Description  
---|---|---  
static interface  | [TextureHolder.OnNewFrameCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder_onnewframecallback-0000001060679062) |  Interface definition for being notified that a new stream frame is available.   
Constructor Summary Constructor | Description  
---|---  
[TextureHolder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder-0000001060157227#ZH-CN_TOPIC_0000001060157227__TextureHolder-int-)​(int texName) |  Default constructor used to create a TextureHolder instance by using the default attribute set and style.   
Method Summary Modifier and Type | Method | Description  
---|---|---  
void | [abandon](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder-0000001060157227#ZH-CN_TOPIC_0000001060157227__abandon--)​() |  Releases all buffers managed by this TextureHolder.   
void | [bindToGPUContext](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder-0000001060157227#ZH-CN_TOPIC_0000001060157227__bindToGPUContext-int-)​(int texName) |  Binds this TextureHolder to the GPU context, that is, the openGL context.   
void | [freeTextureImage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder-0000001060157227#ZH-CN_TOPIC_0000001060157227__freeTextureImage--)​() |  Releases the texture image of the TextureHolder.   
long | [getLastRefreshTextureImageTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder-0000001060157227#ZH-CN_TOPIC_0000001060157227__getLastRefreshTextureImageTime--)​() |  Obtains the timestamp when [TextureHolder#refreshTextureImage()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder-0000001060157227#ZH-CN_TOPIC_0000001060157227__refreshTextureImage--) was last called, in nanoseconds.   
boolean | [getMatrixForTransform](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder-0000001060157227#ZH-CN_TOPIC_0000001060157227__getMatrixForTransform-float:A-)​(float[] matrix) |  Obtains the 4x4 matrix for texture image transformation.   
boolean | [isAbandoned](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder-0000001060157227#ZH-CN_TOPIC_0000001060157227__isAbandoned--)​() |  Checks whether buffers managed by TextHolder have all been released.   
void | [refreshTextureImage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder-0000001060157227#ZH-CN_TOPIC_0000001060157227__refreshTextureImage--)​() |  Updates the texture image to the latest image streams.   
void | [setBufferDimension](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder-0000001060157227#ZH-CN_TOPIC_0000001060157227__setBufferDimension-int-int-)​(int width, int height) |  Sets the size of the image buffer.   
void | [setOnNewFrameCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder-0000001060157227#ZH-CN_TOPIC_0000001060157227__setOnNewFrameCallback-ohos_agp_graphics_TextureHolder_OnNewFrameCallback-)​([TextureHolder.OnNewFrameCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder_onnewframecallback-0000001060679062) callback) |  Sets a callback to listen for whether new image frames are available.   
void | [unbindFromGPUContext](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder-0000001060157227#ZH-CN_TOPIC_0000001060157227__unbindFromGPUContext--)​() |  Unbinds this TextureHolder from the GPU context.   
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
Constructor Detail [h2]TextureHolder public TextureHolder​(int texName) Default constructor used to create a TextureHolder instance by using the default attribute set and style.  Method Detail [h2]bindToGPUContext public void bindToGPUContext​(int texName) Binds this TextureHolder to the GPU context, that is, the openGL context. **Parameters:** Parameter Name | Parameter Description  
---|---  
texName  |  Indicates the texture name defined by the openGL API.  
**Since:** 3 [h2]unbindFromGPUContext public void unbindFromGPUContext​() Unbinds this TextureHolder from the GPU context. **Since:** 3 [h2]freeTextureImage public void freeTextureImage​() Releases the texture image of the TextureHolder. **Since:** 3 [h2]refreshTextureImage public void refreshTextureImage​() Updates the texture image to the latest image streams. **Since:** 3 [h2]setBufferDimension public void setBufferDimension​(int width, int height) Sets the size of the image buffer. **Parameters:** Parameter Name | Parameter Description  
---|---  
width  |  Indicates the buffer width.  
height  |  Indicates the buffer height.  
**Since:** 3 [h2]getMatrixForTransform public boolean getMatrixForTransform​(float[] matrix) Obtains the 4x4 matrix for texture image transformation. **Parameters:** Parameter Name | Parameter Description  
---|---  
matrix  |  Indicates the array storing the 4x4 matrix.  
**Returns:** Returns true if get the Matrix for Transform; returns false otherwise. **Since:** 3 [h2]setOnNewFrameCallback public void setOnNewFrameCallback​([TextureHolder.OnNewFrameCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder_onnewframecallback-0000001060679062) callback) Sets a callback to listen for whether new image frames are available. **Parameters:** Parameter Name | Parameter Description  
---|---  
callback  |  Indicates the callback to set. If this parameter is null, the callback that has been set by this method will be deleted.  
**Since:** 3 [h2]abandon public void abandon​() Releases all buffers managed by this TextureHolder. **Since:** 3 [h2]isAbandoned public boolean isAbandoned​() Checks whether buffers managed by TextHolder have all been released. **Returns:** Returns true if all buffers are released; returns false otherwise. **Since:** 5 [h2]getLastRefreshTextureImageTime public long getLastRefreshTextureImageTime​() Obtains the timestamp when [TextureHolder#refreshTextureImage()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder-0000001060157227#ZH-CN_TOPIC_0000001060157227__refreshTextureImage--) was last called, in nanoseconds. **Returns:** Returns the timestamp when [TextureHolder#refreshTextureImage()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textureholder-0000001060157227#ZH-CN_TOPIC_0000001060157227__refreshTextureImage--) was last called. **Since:** 5
