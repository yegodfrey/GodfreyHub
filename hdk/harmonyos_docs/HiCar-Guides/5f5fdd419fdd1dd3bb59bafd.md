---
name: document/cn/HiCar-Guides/camera-0000000000030830
title: Camera（Beta）
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/camera-0000000000030830
---

# Camera（Beta）

## 场景说明

HiCar支持发现车辆的Camera设备资源，包括车辆前装的Camera和用户后装的Camera。基于车辆Camera资源能力HiCar可以给用户提供更多的业务和服务。比如：

* **车内视频通话/视频会议：**用户在保障驾驶安全的情况下（如停车模式）可以采用车辆Camera和车机大屏与其它用户进行视频通话/视频会议。
* **驾驶安全关怀：**利用HiCar手机的AI算力、基于车辆驾驶位的Camera实时数据，可以对驾驶员进行实时的驾驶安全监控，异常时可智能提醒用户驾驶安全。
* **手势识别交互：**利用HiCar手机的AI算力、基于车辆驾驶位的Camera实时数据，可以识别驾驶员的手势交互来控制HiCar应用和服务。
* **行车安全辅助：**利用HiCar手机的AI算力、基于车辆行车记录Camera实时数据，可以对行车安全进行辅助检测并智能提醒用户。

车机环境中存在两类Camera：

* Android Camera：通过标准Android接口可以使用的Camera。如果希望HiCar SDK能够使用此类Camera，只需按照[配置Camera信息](https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/configure-camera-0000001064941294)，在HiCar SDK初始化时通过setAndroidCamInfos方法，上报对应的Camera信息即可。
* Native Camera：无法通过标准Android接口使用的Camera。如果希望HiCar SDK能够使用此类Camera，厂商需要事前根据HiCar提供的Camera相关接口根据本章节内容完成适配。适配完成后在HiCar SDK初始化时通过setNativeCamInfos方法，上报对应的Camera信息，详情参见[配置Camera信息](https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/configure-camera-0000001064941294)。

## 交互流程

**图1**交互流程   
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250630214101.60735511623554793514055930278612:50001231000000:2800:65F89561C17DCF3E43BFC70780FB49D1B3D22A2F4B3D7B70256A0401820F433B.png "点击放大")

1. 车机系统中启动DMSDP Device业务后，DMSDP进程在指定目录中（根据系统32位或64位，在"/system/lib"或"/system/lib64"目录中）寻找"libdmsdpcamerahandler.so"，并动态加载so链接库文件。
2. 厂商应用获取so内功能函数的句柄指针集合，后续业务操作通过函数句柄指针来进行（对应接口：DMSDPGetCameraHandler）。
3. 注册业务状态侦听器，实现中缓存侦听器指针，用于后续Camera状态（如Camera忙闲变化），数量等发生变化（如USB Camera插拔等）时，上报Camera状态变化信息。
4. 查询Camera能力信息，包括Camera数量，各个Camera的id，支持的分辨率，帧率，数据格式等（对应接口：GetCameraCapability）。如果车机有多个摄像头，具体返回哪些摄像头用于分布式虚拟化需要厂商根据业务需求自行决定；摄像头可能有多种能力，选择DMSDP支持的一种能力上报即可，建议优先返回H264或H265数据类型，若摄像头不支持输出H264/H265视频流，可以选择返回NV21或RGB565格式。
5. 返回Camera能力信息。
6. Camera设备接口实现中需要监控本地上报的Camera状态变化。例如，车机Camera被打开，需要监控到Camera状态忙；车机新插入一个USB摄像头，如果该摄像头需要进行分布式虚拟化使用，需要查询该摄像头能力信息；如果车机之前上报的一个USB摄像头被拔出，需要监控到摄像头丢失事件。
7. 第6步监控到的摄像头状态和新增/丢失信息，需要通过第3步注册的业务侦听器回传信息到DMSDP Device SDK。
8. DMSDP Device SDK接收到Camera设备状态变化后，更新本地缓存信息，同时上报变化信息到手机侧。
9. 打开Camera之前，注册Camera数据回传函数句柄，Camera视频流数据通过该回传函数句柄回传数据（对应接口：RegisterSendDataCallback）。
10. DMSDP Device SDK调用打开Camera函数，携带Camera参数（对应接口：OpenCamera）。
11. 实现调用车机系统Camera相关接口，打开车机对应Camera。
12. Camera打开后回传Camera数据。
13. 使用第9步注册的对应Camera的数据回传函数句柄回传采集到的数据。
14. 业务运行中，可能会更新Camera配置，例如运行中修改Camera帧率，调用更新接口下发新的配置（对应接口：UpdateConfig）。
15. 实现调用车机对应接口更新配置，如果不支持更新对应配置，该接口实现空实现即可。
16. 车机系统返回更新配置结果。
17. 返回更新配置结果。
18. DMSDP Device SDK调用关闭Camera接口（对应接口：CloseCamera）。
19. 实现车机系统对应的关闭Camera接口，关闭Camera。
20. 释放本地缓存的资源，如数据回传函数句柄等。
21. 返回关闭Camera成功。 说明
    >
    > DMSDP Device SDK是HiCar SDK内部业务模块，用于实现车机外设分布式虚拟化功能，直接调用libdmsdpcamerahandler.so。

## 开发步骤

由厂商按照本章节提供的Camera设备接口头文件，实现Camera相关接口，编译成so动态链接库，供HiCar SDK调用。

定义的Camera接口抽象了Camera操作，将对于Camera的操作封装为打开，关闭，更新配置，查询能力，注册事件侦听器等接口，需要厂商按照接口说明实现对Camera的基本操作。

Camera接口需要厂商实现的头文件包含：

```screen
dmsdp_business.h              -- 定义了错误码，状态码等信息
dmsdp_camera_data_type.h      -- 定义Camera数据对象
dmsdp_camera_handler.h        -- 定义了Camera接口
```

1. 梳理车机Camera硬件信息，判断哪些车机Camera需要进行分布式虚拟化，供手机使用，只有需要参与分布式虚拟化业务的Camera信息需要收集能力和上报。
2. 由于DMSDP Device SDK需要通过Camera设备接口实现操作车机Camera，同时，车机上其他业务也可能操作Camera，需要在实现中妥善处理不同业务对于Camera使用的冲突。
3. 车机Camera上报能力给手机后，可能存在Camera状态变化的情况，如被车机其他业务使用，USB Camera拔出丢失Camera，USB Camera插入新增Camera的情况，如果发生状态变化的Camera是需要参与虚拟化业务的，则需要监控对应Camera的状态变化。
4. 根据设备接口定义头文件实现Camera设备接口，提供Camera操作以及状态侦听的能力。
5. 编译构建生成"libdmsdpcamerahandler.so"文件，根据系统情况分别生成32位或64位的动态库，该动态库文件需要根据系统情况，放置到"/system/lib"或/"system/lib64"目录下。

   HiCar SDK会在运行时，从上述路径搜索so链接库文件，如果未找到文件，则认为车机未实现Camera相关接口。如果找到该文件，则动态加载该so链接库，并通过so链接库中实现的接口从车机获取Camera数据。

