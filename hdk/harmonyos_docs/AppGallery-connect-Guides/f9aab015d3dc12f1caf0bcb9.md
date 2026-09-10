---
name: document/cn/AppGallery-connect-Guides/ailod-game-object-0000002509342931
title: 方式一：创建单个模型简化任务
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/ailod-game-object-0000002509342931
---

# 方式一：创建单个模型简化任务

#### 第一步：选择原始模型

1. 顶部菜单栏选择"AILOD \> LOD Generator"。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110222.21316088439100385473230010962078:50001231000000:2800:EF365D70F67C131682FD416C65978B82BDCF2B36421B8F525D57575CD129FD79.png)

2. 在场景或Hierarchy窗口中，请选择一个game object对象，要求处于激活状态，且至少包含一个"Mesh Renderer"或"Skinned Mesh Renderer"组件。 选中一个game object对象后，处于激活状态的子对象也将被视为选中。

   选好game object对象后，需要在"LOD Generator"窗口上逐一完成如下配置项：

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110222.46306049246510688513380376488675:50001231000000:2800:4F2091AA6C1753B1759637B0A5D1E0FA41727468D3B6182890770817F317A4A0.png)  

#### 第二步：选择贴图

AILOD使用视觉驱动算法，请为game object对象的每个材质选择基础颜色贴图（Base Color Map/Albedo Map/Diffuse Map）。

默认选择材质属性中的首张纹理。

若无贴图材质，您可以选择"No BaseMap"。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110222.28843651665594003338664439001715:50001231000000:2800:1BDBEA84A7E557A1A22B78D36523F579A095893DB080ED41344E0C9A98D85567.png)  

#### （可选）第三步：自定义锁点

AILOD锁点功能是为了保护模型网格上被选中的顶点不被简化。

1. 若想保护模型上的顶点不被简化，请勾选"开启锁点"。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110222.84109348038938439685816732009241:50001231000000:2800:8AC24A9B574AF1A0492F6F7D7E28D2D966E62EEAB524097FEB59B404BDDCE972.png)

2. 在Scene窗口中，您可以使用任一方式选择想保护的顶点：
   * 方式一：先在可视化面板上设置笔刷大小、顶点大小等参数，再使用笔刷在模型上刷选想保护的顶点。若想保存当前已选择的顶点，点击"导出锁点记录"，将顶点信息JSON文件保存至本地。
   * 方式二：直接点击"导入锁点记录"，选择本地已保存的顶点信息JSON文件，加载锁点记录。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110222.55211556679776475247298085906022:50001231000000:2800:3941016D3B3F8E923B33899071BFA0F0BEA7FAE1F4DE469574DE64577C303BEF.png)  

   |配置项|说明|
   |:-----|:---------------------------------------------------------------------------------------------|
   |笔刷大小|笔刷半径大小。 单位是m，取值范围是\[0.002,5\]。 * 使用"Ctrl + 鼠标左键 + 鼠标左右滑动"快捷键，调整笔刷大小。 * 使用"Ctrl + Z"，撤销上一次刷选操作。|
   |顶点大小|顶点边长大小。 单位是m，取值范围是(0\~0.05\]。|
   |顶点颜色|未选中顶点的颜色。|
   |选中顶点颜色|已选中顶点的颜色。|

   |按钮|说明|
   |:-----|:--------------------------|
   |清空|清空所有已选中顶点。|
   |导出锁点记录|选择本地路径，导出当前已选中的顶点信息到JSON文件。|
   |导入锁点记录|选择本地已保存的顶点信息JSON文件，加载锁点记录。|

   例如，在Scene窗口使用红色笔刷选中模型的右眼和右耳朵后，效果图如下：

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110223.51906839946173311850737460472569:50001231000000:2800:E484BD17E84ADAAA05B888A40FA7DD176AB49F8653D72729DCE994BBA71DE93D.png)  
   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110223.17844651423078292291291338958228:50001231000000:2800:3729AB5485ACF3AD614CE0B18155E4EC9D3E09E8F48AB74C49E3EDB929C6022F.png)  
该三维模型《Stylized Cartoon Fox》由原作者发布于[Stylized Cartoon Fox](https://www.fab.com/listings/ce06022a-70e9-45c1-8f7c-991820a47a75)平台，本文依据[Creative Commons Attribution 4.0 International（CC BY 4.0）](https://creativecommons.org/licenses/by/4.0/)许可协议使用。  

#### 第四步：配置减面参数

AILOD将根据您设置的配置项减少模型的多边形数量。配置项如下：

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110223.62989925069957828756206155000983:50001231000000:2800:90B3128793E18509B78C786EC9BF38390BBCED717B3E7FA339599945A0EAE0A9.png)  

|配置项|说明|
|:-------|:----------------------------------------------------------------------------------------------------------------------------------|
|减面比例|该配置项决定生成的LOD网格与原始网格三角形数量的百分比，范围为1%\~99.9%。 例如，原始模型有1W面，设置比例为70%，则生成的结果大约有7K面。 说明： 因为算法会尝试保留动画关键区域周围的多边形，所以实际结果面数可能会高于您设置的目标比例对应的面数。|
|蒙皮保护|该配置项在简化含有骨骼蒙皮的模型时考虑骨骼权重信息。 勾选该选项后，可使模型在LOD简化后仍尽量正确保持原有的骨骼变形效果。|
|结果保存为预制体|该配置项与最终生成的结果文件相关： * 勾选该选项：将在结果目录中生成一个预制体（Prefab）。 * 未勾选该选项：仅生成对应的Mesh资源文件。您可以自行将该Mesh挂载到已有game object上，或手动创建预制体（Prefab）进行使用。|

#### 第五步：创建任务

配置项完成后，点击"创建LOD任务"，即可创建单个模型简化任务。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110223.63313477885394930904796672988413:50001231000000:2800:659AD0FB92DB58431F9A300A7E5D5E0E9888CAE7A29A37A62D0931D068B4783B.png "点击放大")

单个任务创建成功后，您可以查看任务执行状态并下载模型简化结果，详情请参见[下载模型简化结果](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/ailod-history-0000002513134850)。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110223.49560168564018785571654621848030:50001231000000:2800:CD9D8D8F9E00D410885A7896BA488502426A067243F39FBEF85DF2B2F05B31A6.png)  
