---
name: document/cn/doc-references/overview-0000001060679066
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/overview-0000001060679066
source: portal
---

# Overview  
  
Provides Embedded-System Graphics Library (EGL) and OpenGL for Embedded Systems (OpenGL ES) APIs. 

EGL APIs are used between OpenGL ES and the underlying window system. You can use these APIs to obtain the underlying configuration and information about the EGL display device, create EGLSurface and EGLContext objects, and associate the created objects. Then, you can call rendering APIs of OpenGL ES to draw your desired content and save the content on the EGLSurface. Finally, you call [EGL.eglSwapBuffers(EGLDisplay, EGLSurface)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/egl-0000001060519179#ZH-CN_TOPIC_0000001060519179__eglSwapBuffers-ohos_agp_render_opengl_EGLDisplay-ohos_agp_render_opengl_EGLSurface-) to display the content on the screen. 

Note: OpenGL ES requires the support of the hardware device. Before using OpenGL ES APIs,check the API version supported by the current device. 

For more information, visit [EGL](https://www.khronos.org/egl) and [OpenGL ES](https://www.khronos.org/opengles/).

**Since:**

3

#### Class Summary

Class | Description  
---|---  
[EGL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/egl-0000001060519179) |     
[EGLConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglconfig-0000001059908811) | Represents a wrapper class for the EGLConfig object.  
[EGLContext](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglcontext-0000001060388818) | Represents a wrapper class for the EGLContext object.  
[EGLDisplay](https://developer.harmonyos.com/cn/docs/documentation/doc-references/egldisplay-0000001060039133) | Represents a wrapper class for the EGLDisplay object.  
[EGLObjectHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglobjecthandle-0000001120951633) | Represents a wrapper class for the EGL object.  
[EGLSurface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglsurface-0000001060837274) | Represents a wrapper class for the EGLSurface object.  
[ETC1](https://developer.harmonyos.com/cn/docs/documentation/doc-references/etc1-0000001060411169) | Provides methods to operate on ETC1 textures.  
[GLES1X](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gles1x-0000001061156856) |     
[GLES20](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gles20-0000001060996878) |     
[GLES2Ext](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gles2ext-0000001138987475) |     
[GLES30](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gles30-0000001060519076) |     
[GLES31](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gles31-0000001138830329) |     
[GLES32](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gles32-0000001138728607) |     
[GLESExt](https://developer.harmonyos.com/cn/docs/documentation/doc-references/glesext-0000001060268773) |     
[Utils](https://developer.harmonyos.com/cn/docs/documentation/doc-references/utils-0000001060679068) | A utility class that provides methods for comparing floating-point numbers.
