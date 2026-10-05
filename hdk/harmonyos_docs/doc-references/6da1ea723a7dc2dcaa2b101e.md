---
name: document/cn/doc-references/gltfexporter-0000001054200016
title: GltfExporter
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/gltfexporter-0000001054200016
source: portal
---

# GltfExporter
    
    public interface GltfExporter  
  
---  
Provides methods for exporting 3D models, animations, and materials to a glTF file.

**Since:**

3

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [exportGltf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gltfexporter-0000001054200016#ZH-CN_TOPIC_0000001054200016__exportGltf-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) uri) |  Exports scenes as a glTF file.   
  
#### Method Detail

#### [h2]exportGltf

boolean exportGltf​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) uri)

Exports scenes as a glTF file. 

This method exports only resources of the child nodes of scenes, such as meshes and materials.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
uri  |  Indicates the URI of the target glTF file.  
  
**Returns:**

Returns true if the scene is exported to the glTF file; returns false otherwise.
