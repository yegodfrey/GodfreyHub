---
name: cangjie-guides/cj-insight-introduction-session
title: 会话区
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-introduction-session
nodePath: 优化应用性能 / 调优工具简介 / 会话区
---

# 会话区

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/pV__KAZ6Q3eyaFuJ6O7SjQ/zh-cn_image_0000002701659764.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=42CEADA784D8026E277DF417D4382ED60688D2A959BB2E441C21F427F43B3BA9)

DevEco Profiler左侧为会话区，可以分为三个部分：**①调优目标选择区域** 、**②会话列表区域** 、**③场景化模板选择区域** 。

  * 调优目标选择区域：选择设备及要分析的应用和进程。

选定被调优的设备、应用包及应用进程作为后续调优会话的分析对象。依次单击设备、应用、进程列表完成选择。选择完成后，若目标正在运行，将自动开启实时监控进行指标的观测。

  * 会话列表区域：显示当前已创建的调优分析会话。

单击列表中的会话后，界面右侧数据区将显示其数据内容。选择设备应用和进程后，此处默认显示“Realtime Monitor”任务。

会话区将记录当前所有的会话。每一个会话都会包含：会话的名称(图例中的"CPU")、会话当前状态(图例中的"Recorded")、会话对应的录制时长信息(图例中的"4s 103ms")。会话支持拖拽方式调整顺序。

**录制/删除会话** ：通过鼠标悬停在名称后方的信息图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/5Cldp1buTAGeeVkNOurcqw/zh-cn_image_0000002731378979.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=E3D1DF5DF8A73FBACDB3C63AA734500CE8A822C6B9741014DD2848845DE5FCB0)上，会话所要观测的调优对象的基本信息将会以Tooltip的形式展示。单击会话的右侧的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/zaqQSUaxRLGhjhKxilMzrQ/zh-cn_image_0000002701819674.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=DE2F599081EB0EE91C6BA20C647F7B1DBBC45BB8AF7EB72621AABB4F4D2CB059) / ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/-J6cn_63TUeJ6KMqXuayPg/zh-cn_image_0000002731538955.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=6BC4BE0ED3B7E9EBBAE0563B9BA61F4EA6AF354D3174106008BA89001EA527F5)按钮，开启/停止会话录制，此时工具开始抓取性能数据，开发者可以操作应用复现性能劣化场景。单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/XWB5VENNQ-GCHAgtLUcjZA/zh-cn_image_0000002701659766.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=7DECA821C1A19FC4F01EBB0EC47013C1599A4691BB2918AE5E0C4DCCBF9BF15A)将删除该会话。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/g4ljbiMRQPijTM96LIQSpg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=E497E4DCD652E2E4D33BE9C3D2B0EDA4CB9825FC78C289A228B3E7216D4D3EE8)

    * 会话区存在两种会话类型：活跃会话和历史会话。活跃会话可在此区域内直接看到，历史会话需要单击界面下方**View Successesful Sessions** 前往查看。开发者主动选择新的调优目标后，活跃会话会清空，相关会话进入历史会话。

    * 仅成功录制或导入的session可长期存留在任务列表中；录制失败或未启动录制的session，在设备/应用切换时自动从任务列表中清除。

    * 会话录制完成出现![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/3x4uTCTSQZm_dgIlSUF76w/zh-cn_image_0000002731378981.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=C25C9BE20C8ACB5580F5675CB50F2C56EB875E766B2D668398EA97C99714DC01)图标，表示数据处于解析状态，请耐心等待解析完成。

**数据导出** ：待数据解析完成后，会话便会进入数据展示状态，将数据可视化的展示到右侧的数据区中。此时可以单击会话面板中出现的数据导出按钮![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/lMVSORP6TNeMnW8uiPUTVw/zh-cn_image_0000002701819676.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=D028B1058F58769E1EF50511AA5A68D0BDE90FEC4D9D45558F6D01916946B93A)，将录制到的数据导出到本地进行保存，借助这个能力，开发者可以方便的在团队内共享录制到的性能数据，也可以防止采集到的性能数据丢失。

  * 场景化模板选择区域：新建会话的入口，Profiler提供[CPU](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-cpu)场景化分析模板，提供对不同性能问题场景的数据分析方案。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/TbzkcizCQ7-2TzACk-lMNg/zh-cn_image_0000002731538957.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=5FE73F36706D43651D412F172BED2770F879C09C6AD3BA2432319D37366B672B)：CPU调度场景化模板。

选中任意模板图标，单击下方Create Session按钮，即可创建出一个全新的会话。

**数据导入** ：在③场景化模板选择区域，单击Open File按钮，即可选择数据进行导入。当前支持.insight、.htrace、.ftrace、.heapsnapshot、.sys、.perfdata和.nas（包含Native Allocation数据的.htrace文件）文件的导入。



