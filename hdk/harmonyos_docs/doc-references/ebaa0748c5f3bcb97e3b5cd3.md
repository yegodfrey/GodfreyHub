---
name: document/cn/doc-references/viewholder_surfacelistener-0000001054238737
title: ViewHolder.SurfaceListener
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/viewholder_surfacelistener-0000001054238737
source: portal
---

ViewHolder.SurfaceListener  
      
    public static interface ViewHolder.SurfaceListener  
  
---  
Provides the listener for surface events.**Since:** 3Method Summary Modifier and Type | Method | Description  
---|---|---  
void | [onSurfaceAvailable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/viewholder_surfacelistener-0000001054238737#ZH-CN_TOPIC_0000001054238737__onSurfaceAvailable--)​() |  Called back when the surface becomes available.   
void | [onSurfaceDestroyed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/viewholder_surfacelistener-0000001054238737#ZH-CN_TOPIC_0000001054238737__onSurfaceDestroyed--)​() |  Called back when the surface is destroyed.   
void | [onSurfaceSizeUpdated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/viewholder_surfacelistener-0000001054238737#ZH-CN_TOPIC_0000001054238737__onSurfaceSizeUpdated-int-int-)​(int width, int height) |  Called back when the surface is changed, for example, when the surface is resized.   
Method Detail [h2]onSurfaceAvailable void onSurfaceAvailable​() Called back when the surface becomes available.  [h2]onSurfaceSizeUpdated void onSurfaceSizeUpdated​(int width, int height) Called back when the surface is changed, for example, when the surface is resized. **Parameters:** Parameter Name | Parameter Description  
---|---  
width  |  Indicates the new width of the surface.  
height  |  Indicates the new height of the surface.  
[h2]onSurfaceDestroyed void onSurfaceDestroyed​() Called back when the surface is destroyed. 
