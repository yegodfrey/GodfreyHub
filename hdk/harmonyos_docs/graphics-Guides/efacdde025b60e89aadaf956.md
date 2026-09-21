---
name: document/cn/graphics-Guides/dynamic-mesh-0000001197478609
title: 自定义网格
uri: https://developer.huawei.com/consumer/cn/doc/graphics-Guides/dynamic-mesh-0000001197478609
---

# 自定义网格

CG Kit提供的自定义网格功能可将3D世界中任何需要绘制的面通过三角形绘制出来，实现形状的动态显示效果。

## 绘制自定义网格模型

1. 生成网格。
   1. 生成[Mesh](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/mesh-0000001050181219)对象。
   2. 添加[SubMesh](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/submesh-0000001050179048)对象。
   3. 设置[SubMesh](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/submesh-0000001050179048)对象的顶点起始位置和个数，索引的起始位置和个数。
2. 设置模型顶点信息。
   1. 按照实际需求通过[VertexAttribute](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/vertexattribute-0000001222418353)设置模型顶点的位置、纹理UV坐标。
   2. 通过[UpdateVertexDeclaration](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/mesh-0000001050181219#section134013152019)接口生成或更新[Mesh](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/mesh-0000001050181219)对象中的顶点声明对象。
3. 通过[FillVertexData](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/mesh-0000001050181219#section11626183910191)和[FillIndexData](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/mesh-0000001050181219#section57561043181910)接口，将顶点数据和索引数据设置给Mesh对象。
4. 生成[SceneObject](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/sceneobject-0000001050179052)对象。通过SceneObject对象的[MeshRenderer](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/meshrenderer-0000001050181223)指针，将生成的Mesh对象与SceneObject对象相关联。
5. 为[MeshRenderer](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/meshrenderer-0000001050181223)对象设置[MaterialInstance](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/materialinstance-0000001104663982)。[MaterialInstance](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/materialinstance-0000001104663982)可以通过[cgmat文件](https://developer.huawei.com/consumer/cn/doc/development/graphics-Guides/cgmat-configuration-file-0000001106071566)生成。 说明
   >
   > 使用自定义网格模型渲染图形时，cgmat配置文件的[顶点shader模板](https://developer.huawei.com/consumer/cn/doc/development/graphics-Guides/shader-0000001154736843#section108141951154811)（forward_pbr.vert）和[像素shader模板](https://developer.huawei.com/consumer/cn/doc/development/graphics-Guides/shader-0000001154736843#section974564225020)（directional_forward_pbr.frag、point_forward_pbr.frag、spot_forward_pbr.frag）中的"location"和"binding"需要与VertexAttribute列表中的"location"和"binding"一致。

创建自定义网格模型的使用示例如下。

```screen
struct VertexData
{
     std::vector<Vector2> positions;
     std::vector<Vector2> uvs;
     void Resize(u32 size)
     {
        positions.resize(size);
        uvs.resize(size);
     }
};

void MainApplication::CreateDynamicMesh()
{
    // 生成网格
    Mesh* mesh= CG_NEW(Mesh, GetGraphicsRender());
    if (mesh== nullptr) {
        LOGERROR("Create mesh failed.");
        return;
    }

    // 添加一个子网格
    SubMesh* subMesh= mesh->AddSubMesh();
    if (subMesh== nullptr) {
        LOGERROR("Create subMesh failed.");
        CG_SAFE_DELETE(mesh)
        return;
    }
    // 设置索引的起始点和个数、顶点的起始点和个数。
    subMesh->SetIndexCount(6);
    subMesh->SetIndexStart(0);
    subMesh->SetVertexCount(4);
    subMesh->SetVertexStart(0);
    subMesh->SetMaterialInstanceIndex(0);

    const String POSITION = "POSITION";
    const String TEXCOORD0 = "TEXCOORD0";
    // 生成顶点属性列表。
    std::vector<VertexAttribute> vertexAttributes;
    vertexAttributes.push_back(VertexAttribute(POSITION, 0, 0, PixelFormat::PIXEL_FORMAT_R32G32_FLOAT, 0));
    vertexAttributes.push_back(VertexAttribute(TEXCOORD0, 1, 0, PixelFormat::PIXEL_FORMAT_R32G32_FLOAT, 0));
    // 生成顶点声明。
    mesh->UpdateVertexDeclaration(vertexAttributes);

    // 顶点数据，存入顶点x、y，纹理坐标s、t
    VertexData vertexData;
    vertexData.Resize(4);
    vertexData.positions[0] = Vector2(-0.5f, -0.5f);
    vertexData.uvs[0] = Vector2(0.0f, 0.0f);

    vertexData.positions[1] = Vector2(0.5f, -0.5f);
    vertexData.uvs[1] = Vector2(1.0f, 0.0f);

    vertexData.positions[2] = Vector2(0.5f, 0.5f);
    vertexData.uvs[2] = Vector2(1.0f, 1.0f);

    vertexData.positions[3] = Vector2(-0.5f, 0.5f);
    vertexData.uvs[3] = Vector2(0.0f, 1.0f);

    // 添加到顶点缓存。
    mesh->FillVertexData(vertexData.positions.data(), 4, POSITION);
    mesh->FillVertexData(vertexData.uvs.data(), 4, TEXCOORD0);

    std::vector<u32> index;
    index.resize(6);
    index[0] = 0;
    index[1] = 2;
    index[2] = 1;
    index[3] = 0;
    index[4] = 3;
    index[5] = 2;
    // 添加到索引缓存。
    mesh->FillIndexData(index.data(), 6);

    SceneObject* sceneObject= GetSceneManager()->CreateSceneObject(nullptr);
    if (sceneObject== nullptr) {
        CG_SAFE_DELETE(mesh)
        LOGERROR("Create sceneObject failed.");
        return;
    }
    MeshRenderer* renderer= sceneObject->AddComponent<MeshRenderer>();
    if (renderer== nullptr) {
        CG_SAFE_DELETE(mesh);
        GetSceneManager()->DeleteObject(sceneObject);
        LOGERROR("Add the render failed.");
        return;
    }
    renderer->SetMesh(mesh);
    MaterialInstance* instance = MaterialInstance::New("material/screenQuad.cgmat");
    if (instance== nullptr) {
        CG_SAFE_DELETE(mesh)
        GetSceneManager()->DeleteObject(sceneObject);
        LOGERROR("Create materialinstance failed.");
        return;
    }
    renderer->SetMaterialInstance(0, instance);
    sceneObject->SetPosition(Vector3::ZERO);
    sceneObject->SetScale(Vector3::ONE);
    sceneObject->SetLayerType(LAYER_TYPE_GEOMETRY);
}
```

## 更新自定义网格信息

如果需要更新的顶点数据中，顶点属性有变化，请按照如下操作：

1. 调用[UpdateVertexDeclaration](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/mesh-0000001050181219#section134013152019)接口更新Mesh对象中的顶点声明对象。
2. 调用[FillVertexData](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/mesh-0000001050181219#section11626183910191)和[FillIndexData](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/mesh-0000001050181219#section57561043181910)接口将更新的顶点数据和索引数据设置给Mesh对象。

更新自定义网格模型的使用示例如下。

```screen
struct VertexData
{
     std::vector<Vector2> positions;
     std::vector<Vector2> uvs;
     void Resize(u32 size)
     {
        positions.resize(size);
        uvs.resize(size);
     }
};

void UpdateMesh()
{
    const String POSITION = "POSITION";
    const String TEXCOORD0 = "TEXCOORD0";
    // 生成顶点属性列表。
    std::vector<VertexAttribute> vertexAttributes;
    vertexAttributes.push_back(VertexAttribute(POSITION, 0, 0, PixelFormat::PIXEL_FORMAT_R32G32_FLOAT, 0));
    vertexAttributes.push_back(VertexAttribute(TEXCOORD0, 1, 0, PixelFormat::PIXEL_FORMAT_R32G32_FLOAT, 0));
    // 生成顶点声明。
    mesh->UpdateVertexDeclaration(vertexAttributes);
    // 顶点数据，存入顶点x、y，纹理坐标s、t。
    VertexData vertexData;
    vertexData.Resize(4);
    vertexData.positions[0] = Vector2(-0.8f, -0.8f);
    vertexData.uvs[0] = Vector2(0.0f, 0.0f);

    vertexData.positions[1] = Vector2(0.8f, -0.8f);
    vertexData.uvs[1] = Vector2(1.0f, 0.0f);

    vertexData.positions[2] = Vector2(0.8f, 0.8f);
    vertexData.uvs[2] = Vector2(1.0f, 1.0f);

    vertexData.positions[3] = Vector2(-0.8f, 0.8f);
    vertexData.uvs[3] = Vector2(0.0f, 1.0f);

    // 添加到顶点缓存。
    mesh->FillVertexData(vertexData.positions.data(), 4, POSITION);
    mesh->FillVertexData(vertexData.uvs.data(), 4, TEXCOORD0);

    std::vector<u32> index;
    index.resize(6);
    index[0] = 0;
    index[1] = 2;
    index[2] = 1;
    index[3] = 0;
    index[4] = 3;
    index[5] = 2;
    // 添加到索引缓存。
    mesh->FillIndexData(index.data(), 6);
}
```

