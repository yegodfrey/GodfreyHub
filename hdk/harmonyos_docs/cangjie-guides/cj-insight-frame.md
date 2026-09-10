---
name: cangjie-guides/cj-insight-frame
title: Frame分析
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-frame
nodePath: 优化应用性能 / 卡顿丢帧分析 / Frame分析
---

# Frame分析

开发应用过程中，如果发现表单滑动不顺畅、页面交互延迟、动效不流畅等卡顿现象时，可以使用DevEco Profiler提供的Frame场景分析能力，录制卡顿过程中的关键数据进行分析，从而识别出导致卡顿丢帧的原因。此外，Frame任务窗口还集成了Time、CPU场景分析任务的功能，方便开发者在分析丢帧数据时同步对比同一时段的其他资源占用情况。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/cjl-B5vzQ_qP-MN697o5aA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=5B8C3002706749C616BA95354B9C15C80B973218EE6D96A318434082A609A9E1)

  * 在任务分析窗口，可以通过“Ctrl+鼠标滚轮”缩放时间轴，通过“Shift+鼠标滚轮”左右移动时间轴，或使用快捷键W/S放大或缩小时间轴，使用A键/D键可以左右移动时间轴。
  * 将鼠标悬停在泳道任意位置，可以通过M键添加单点时间标签。
  * 鼠标框选要关注的时间段，可以通过“Shift+M”添加时间段时间标签。
  * 在任务分析窗口，可以通过“Ctrl+, ”向前选中单点时间标签，通过“Ctrl+. ”向后选中单点时间标签。
  * 在任务分析窗口，可以通过“Ctrl+[ ”向前选中时间段时间标签，通过“Ctrl+]”向后选中时间段时间标签。
  * Frame分析支持离线符号解析能力，请参见[离线符号解析](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-time#离线符号解析)。
  * Frame分析支持能耗分析，请参见[能耗分析](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-time#能耗分析)。



#### 查看GPU使用情况

  1. 创建Frame分析任务并录制相关数据，操作方法请参见[性能问题定位：深度录制](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-profiler-deep-recording)，或在会话区选择**Open File** ，导入历史数据。

  2. “Frame”泳道显示当前设备的GPU的使用率，将其展开，子泳道显示Render Service侧帧数据和App侧帧数据。




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/5hY3INr6Txiye92xL7JiQA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=7FEEEFFECB0941163C0220AF28DE4162946C74F0C493153A2E06CE5D7142D4E8)

  * 一帧的绘制，一般需要由App侧提交渲染到Render Service侧，Render Service侧再提交给硬件进行合成渲染。因此App侧的帧和Render Service侧的帧存在关联的情况，并且可能多个APP侧的帧/同一APP侧的多个帧提交到同一个Render Service侧帧上，出现帧之间的一对多的关联情况。
  * 一帧绘制的期望耗时，与fps的大小有关，一般情况下fps为60，对应的Vsync周期为16.6ms，即App侧/Render Service侧的帧耗时，一般需要在16.6ms以内。App侧帧/Render Service侧帧判断卡顿的标准为帧的实际结束时间晚于帧的期望结束时间。
  * 在“RS Frame”和“App Frame”标签的泳道中，正常完成渲染的帧显示为绿色，出现卡顿的帧显示为红色。
  * 除“RS Frame”和“App Frame”泳道外的“CJ Callstack”、“ArkTS Callstack”、“Callstack”、“CPU Core”等泳道信息，请参见[基础耗时分析：Time分析](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-time)、[CPU活动分析：CPU分析](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-cpu)。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/_LfjA4lbSp617zQp3Z986w/zh-cn_image_0000002743078059.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=26E016E9115FE846F4090A16F8A7F350B08F5EFEA8F1B23810FC7EE4588D4300)

#### 查看指定时间段内所有进程的Frame数据统计信息

  1. 在时间轴上拖拽鼠标选定将查看的时间段。

  2. 框选Frame主泳道。

窗口下方的“Statistics”区域中会以进程为维度对选定时间段内的Frame信息进行统计，包括卡顿率（Jank Rate）、卡顿次数（Jank Count）、最大连续卡顿次数（Max Consecutive Jank Count）、最大卡顿耗时（Max Free Duration）、平均卡顿耗时（Avg Jank Duration）以及平均正常耗时（Avg Normal Duration）等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/NgtD4FiRT7CipFPBCRR0Hw/zh-cn_image_0000002713559098.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=EED63F4C6998785AFA97234534FFA5DEC49B9E494741A08DDE22FC36544FC2F7)

  3. 点击“Statistics”列表中任一进程的跳转按钮，在“FrameList”区域将展现该进程对应的Frame列表。体现各帧的VSync编号、起始时间（Start Time）、总耗时（Duration）、GPU耗时（GPU Duration）以及卡顿丢帧类型（Jank Type)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/jTb_N7IgSZKLqlPqd3ANlg/zh-cn_image_0000002743198011.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=BCF76C500413AEB245E405F858851B8FACE7BD8BF8D41433E5F68F5D901FCBE1)

  4. 单击“FrameList”列表中任意一帧，右侧的“More”区域会中显示该帧更多关键信息。在获取该帧的预期起始时间、预期持续时间之外，可以单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/yn4_uCYQQ_aeC6BknXUsvQ/zh-cn_image_0000002713399130.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=290EE0EFB1392537642AD27F323F601856590F930969BAB9BC6830FFAAE74FF6)跳转至关联的切片。




#### 查看指定时间段内指定进程的Frame数据统计信息

  1. 在时间轴上拖拽鼠标选定要查看的时间段。

  2. 选择要观察的子泳道（例如带“RS Frame”标签的泳道）。

窗口下方的“Details”区域中会显示选定时间段内的RS帧统计信息列表，体现各帧的起始时间、总耗时、GPU耗时以及卡顿丢帧类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/UClTrJ0UQVKN6TNoRT67Fg/zh-cn_image_0000002743078061.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=0EE0E1C4F38B28955C61CC78D424D8635422D13DFD68E369B6F60EABD9EFA025)

  3. 单击列表中任意一帧，右侧的“More”区域会中显示该帧更多关键信息。在获取该帧的预期起始时间、预期持续时间之外，可以单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/MxuXrkSVS8-IT2eyz4K8vg/zh-cn_image_0000002713399130.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=D97AC9C1824FEB5E36F4BD1E770FAC4D86112FB0C367E55C403A4B036E16041D)跳转至关联的切片。




#### 查看指定Frame信息

在子泳道（例如带“App Frame”标签的泳道）中选中要查看的Frame，该泳道上方是耗时最长的非UI函数，下方是UI主线程泳道。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/ANOUZtOfRi2jBYvk0MtNqA/zh-cn_image_0000002713559100.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=299684751F26F7C0E3AE81671938F74DDE3831A92529220CD6BFDFBD46503F23)

窗口下方的“Frame”区域中会显示选定帧的关键信息，如VSync编号、开始时间、App应用侧持续时间、App应用侧业务逻辑耗时、Render Service侧持续时间、GPU持续时间、总持续时间、卡顿丢帧类型以及可能出现卡顿的原因等。“Non UI”区域中会显示非UI耗时最大的函数，如开始时间、结束时间、持续时间，函数名等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8/v3/NjWGQt1lRl6ad_YB0XFCGw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=8092CF46EEB5665A4878BC9EFB1C6301203AA269BBDB1E14EEB420328788297E)

  * 在选定观察对象后，DevEco Profiler会自动关联与其相关的切片，用箭头连接。
  * 如果该帧是由于超出期望结束时间引起的，则显示两条线，对应期望开始时间（Expected Start）和期望结束时间（Expected End），用于关联分析同一时刻Trace或者函数采样信息。
  * 将鼠标悬浮在任意帧上，会冒泡显示该帧的Jank信息。
  * 卡顿丢帧类型（Jank Type）：No Jank（不卡顿）、AppDeadlineMissed（App侧的卡顿）、RenderDeadlineMissed（Render Service侧的卡顿）。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/pLYn0R18SoKMIBOJx_ONMQ/zh-cn_image_0000002743198013.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=E1412A5091FDA423B3A4DD3EF70D6E4F70A92803E0E3DB60C77E3C95D788CA34)

#### 查看屏幕帧率动态变化场景下丢帧和卡顿信息

Frame泳道下新增Lost Frames和Hitch Time两类子泳道，用于识别和优化卡顿和丢帧现象。

  * Hitch Time：展示当前时间段内卡顿时长。计算方式为渲染前后两帧的间隔减去单帧耗时，若计算结果大于单帧耗时*70%，则视为出现卡顿现象。
  * Lost Frames：展示当前时间段内丢帧数。Lost Frames计算出的结果，六舍七入统计取整。


  1. 创建Frame模板并录制会话，如存在卡顿和丢帧现象，会在Lost Frames和Hitch Time泳道对应时间显示矩形图。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/246ljGjbRnupaUIIpdDRaw/zh-cn_image_0000002713399132.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=702A86FC7B9499441916D4D138DE7E662F967D06D2A557DFFF4E67F94B3E685A)

  2. 鼠标点选某一时间点，提示信息会显示该点所属时间段内的丢帧数以及卡顿时间。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/be/v3/xbhYl7xWSuqjYybEF02SWg/zh-cn_image_0000002743078063.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=07E0678002DE79CD1161B472DD816EC05D647E47F4EDCEB6150786819000BFB7)




#### 支持动效场景调优

开发者在开发应用时，会使用到动效，动效的卡顿影响到使用体验。DevEco Profiler提供动效场景的调优，能帮助开发者优化动效场景。

鼠标放置在某个动效上，显示该动效的详细信息，包括响应时延、动效持续时间、完成时延、期望帧率、FPS。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0b/v3/za0A5BteTKWwthpJAxCIDw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=4D1629237C1B82D77C9B11456E38097202E0E33CF2806110C931DCC4344ACF5D)

  * 响应时延：<=85ms 绿色，85ms~150ms 浅绿色，150ms ~250ms 浅红色，>250ms深红色。
  * 期望帧率：当前系统运行满帧帧率，如60HZ、90HZ、120HZ。智能刷新率模式下，不展示期望帧率。
  * 动效持续时间：根据帧率展示颜色，FPS大于达标帧率即为为绿色，小于则为深红色。智能刷新率模式下，帧率可变，颜色为灰色。达标帧率与期望帧率的大小有关，一般情况下期望帧率为60HZ，则达标帧率= 60HZ * 91.7%。
  * 完成时延：响应时延和动效持续时间只要有一个为深红色，完成时延为深红色。
  * Launch模板中Frame泳道点击Details区域第一条动效详情信息，More区域展示动效帧Animation Data List信息。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/-rfAQJffQKGAMAh6sgoc3w/zh-cn_image_0000002713559102.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=6E8049BF2344F3608B435FC42229B45D693B444CBA129057B48A9F81CF3F8200)

#### 查看组件帧率信息

Frame泳道下新增两类子泳道，分别为Display Vsync与DisplaySync_cb(tid)，用于对可变帧率的检测调优。

  * Display Vsync：该泳道显示对应时间段的屏幕刷新率，支持对框选的时间段内的vsync进行分布统计。区分”<=30HZ”、”30~60HZ”、”60~90HZ”、”>90HZ”。统计值包括框选时间段内各区间的分布比率、最小/最大/平均时长以及平均HZ。如果某场景满足了帧率改变的要求，当底层系统根据机制进行变帧，相应的情况会展现在对应的泳道。帮助开发者了解vsync的变化情况是否符合预期。

  * DisplaySync_cb(tid)：该泳道显示对应组件的帧率，如DisplaySync、XComponent两类接口组件动画对应的帧率。调测时，不同场景下由于帧率可变，系统实际表现是否符合预期，需要有实际的检测手段。尤其是由于DisplaySync的渲染均在UI主线程执行，当存在多个需要渲染的组件需要同时执行时，只能在UI主线程排队，此时任何一个组件的延迟都会对其他组件的渲染产生影响，导致UI卡顿。

如下图所示，vsync2和vsync4中，vsync周期内的组件由于渲染耗时长，导致以下两个vsync周期挤掉下一个vsync周期的渲染时间，导致掉帧的情况产生。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/vjYKz_CjTauVbUkgvzuhrg/zh-cn_image_0000002743198015.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=33D6467C5FC18EB308C29FB89E65589E1A7184E9E48EFE0E4D397A8A522A1D8B)



  1. 选择Display Vsync泳道，在时间轴上拖拽鼠标选定要查看的时间段。

  2. 详情区显示当前时间段的屏幕刷新率，当前帧最小持续时间（Min Period）、最大持续时间（Max Period)、平均持续时间（Avg Period）以及该时间段内平均帧数（Avg HZ）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/rM9JfvVcRuOb8dNOognENg/zh-cn_image_0000002713399134.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=43187808E98F297BF6260C7913BA44AE439E7DBF2D0094DA4AF63EE61E2E5F40)

  3. 点选vsync泳道，可以查看当前帧的耗时和帧率。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/2Y8iFMOLRiGt7nrxB2Rong/zh-cn_image_0000002743078065.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=0111E103CBC8814F55D46A9648AA18014C58CE8CD4D2C839ACA158438D5B8D45)

  4. 框选DisplaySync_cb泳道，可以查看应用侧对应组件的帧率，渲染时间等信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/OHqWf26JQ-Scq8qq3OKVJw/zh-cn_image_0000002713559104.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=2967B2C40FDC7129F8BA04BA97AD0F6900A5C5334E38E218ED47B2DA1C507C93)

  5. 同时，如果组件有掉帧的情况，DisplaySync_cb泳道能显示对应的掉帧情况并标红展示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/UkhwyMmUTdWjPO0w56NgfQ/zh-cn_image_0000002743198017.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=19B9C65524E6D10E8011E1F8548C168D433984EE3C675F863FF17D9C48DFB472)




#### 查看ArkWeb帧率统计信息

Frame泳道中的App Frame泳道和RS Frame泳道在框选时新增fps标记。RS泳道新增过滤按钮，用于过滤ArkWeb数据。

  1. 展开Frame泳道，框选一段数据。

  2. 泳道出现fps标记，展示当前框选范围内的帧率统计信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/vwO7DKu8RmqNAwT8EQagCQ/zh-cn_image_0000002713399136.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=D0D58444273145DAFDEC53D51526329BA1C97F7A58F31707E15B86F063D2254A)

  3. 打开Only ArkWeb data开关，筛选过滤出包含ArkWeb帧的数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/ehCPGVRiTX2p5Qy97S-iDQ/zh-cn_image_0000002743078067.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=9B51633DD3D1B6967B5087B0892A8DC06EC604127CF4035DBD4B4859344E20A2)




#### Anomaly泳道：查看解码过度耗时和超过阈值的序列化、反序列化操作

如果工程中存在图片资源，并感知到解码绘制/渲染过程存在卡顿，可以通过Anomaly泳道查看主线程解码过程中是否存在解码过度耗时告警，并确认发生告警的时段。

如果应用中使用了worker、Taskpool工作线程等场景，通常会触发跨线程对象传递，并触发序列化和反序列化的操作。对于耗时超过阈值的序列化、反序列化操作，Anomaly也会给出对应的耗时告警，并给出发送这个操作的开始时间和耗时时间。

  1. 在时间轴上拖拽鼠标选定出现告警的时间段。当耗时超过VSync周期的50%时，将在Anomaly泳道中出现红色告警，提示“Image decoding has exceeded 50% of the VSync time“。

  2. 详情区给出录制时段内解码过度耗时的统计情况，包括类型，图片名，计数，总耗时，最小耗时、平均耗时、最大耗时，耗时标准差、 图源尺寸大小，目标尺寸大小等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/UFpnuSJPSampQ-dcIJ0Z9A/zh-cn_image_0000002713559106.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=C0CBF1A324A0F100E9EF3807248A1FDA2B7788673D3D6D5A6069505F920D3299)

  3. 对于耗时超过阈值的序列化、反序列化操作，Anomaly也会给出对应的耗时告警。其中可以通过options配置检测阈值，默认配置阈值为8ms。

  4. 详情区给出录制时段内序列化、反序列化耗时情况统计信息，包括类型、计数、总耗时、最小耗时、平均耗时、最大耗时、耗时标准差等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/72/v3/YE3xHvdKRX6Yw8ZIQ11cpQ/zh-cn_image_0000002743198019.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=9A4A575F45E3E3615AF672A8F10F23F2A785E0ECC562DC3BA425FAD4421262C5)




#### User Events泳道：查看用户事件耗时

开发者在卡顿丢帧场景可通过User Event用户事件，查看用户事件开始时间、应用开始处理时间以及应用处理耗时等情况。

  1. 选择User Event泳道，在时间轴上拖拽鼠标选定要查看的时间段。

  2. 详情区列表给出录制时间段内用户事件详情，包括用户事件ID（User Event ID）、事件开始时间（Input Time）、应用开始处理时间（Processing Start）、应用处理耗时（Duration）和事件类型（User Event Type）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2/v3/H2wYLRvHRriJRnMkDP_7RQ/zh-cn_image_0000002713399138.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=D3225D0FC8277F07366FE664730A908A336464E82AA3C01726D8B625406757B7)

  3. 点选User Event泳道中的条块，Slice详情区展示该事件的详情信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/OmoRuQ26SsmUGi0nPxOMKw/zh-cn_image_0000002743078069.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=C778D0195163D22F503742EF323A72D0ECDE77C159A6C7D185FE99A2BFA49A3D)



