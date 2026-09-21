---
name: cangjie-releases/cj-os-new-feature-602
title: OS新增和增强特性
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-releases/cj-os-new-feature-602
nodePath: 版本说明 / HarmonyOS 6.0.2(22)-仓颉 / OS平台能力 / OS新增和增强特性
---

# OS新增和增强特性

#### 6.0.2(22) Release（仓颉Beta2）关键特性

无新增和增强特性。

#### 6.0.2(22) Beta1（仓颉Beta1）关键特性

#### [h2]Cangjie Kit（仓颉）

  * 提供仓颉和ArkTS互操作能力，包含仓颉调用ArkTS和ArkTS调用仓颉的能力。（[指南](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-cangjie_arkts_overview)、[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop)）
  * 提供仓颉编程语言标准库。标准库预先定义了一组函数、类、结构体等，旨在提供常用的功能，以便开发者高效地编写程序。（[指南](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-basic)、[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-std_module_overview)）



#### [h2]ArkUI（方舟UI框架）

ArkUI开发框架仓颉接口给开发者提供使用仓颉语言开发应用UI时必需的能力，包括状态管理、UI组件、动画、绘制、交互事件等。当前开放的ArkUI开发框架仓颉接口仅支持standard设备。

  * UI组件：面向开发者提供UI组件接口声明，包括文本组件、布局组件、绘制组件，渲染控制，开发者可以通过内置组件组合出所需的页面。([API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-click))
  * UI上下文：面向开发者提供UI上下文接口声明，开发者可以通过UI上下文可以使用曲线插值计算，动画动效，自定义字体，页面路由等能力。([API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-componentutils))
  * 状态管理宏：面向开发者提供状态管理宏的声明，使用状态管理宏，可以修饰开发者定义的变量，被修饰的变量值的改变会引起UI的渲染更新。([指南](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-state-management-overview))



#### [h2]Ability Kit（程序框架服务）

Ability Kit（程序框架服务）提供了应用程序开发和运行的应用模型，是系统为开发者提供的应用程序所需能力的抽象提炼，它提供了应用程序必备的组件和运行机制。有了应用模型，开发者可以基于一套统一的模型进行应用开发，使应用开发更简单、高效。

仓颉 Ability Kit提供的关键能力如下：

**应用框架**

  * 程序访问控制支持拉起设备设置页面的应用权限管理界面。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ability_access_ctrl)）
  * 应用在故障状态下的恢复能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-app_recovery)）
  * 支持通过startAbility的属性StartOptions来指定创建新窗口的大小。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-start_options)）
  * want属性。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want)）
  * UIAbility是包含UI界面的应用组件，提供UIAbility组件创建、销毁、前后台切换等生命周期回调的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability)）
  * 框架测试能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-application-test_runner)）



**包管理**

  * 应用信息查询能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bundle_manager)）
  * 提供ElementName类来提供应用组件结构体。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-element_name)）
  * 元数据信息。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-metadata)）
  * skill标签对象。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-skill)）
  * ErrorManager支持订阅应用运行时未被捕获的rejection事件能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-error_manager)）



#### [h2]ArkData（方舟数据管理）

ArkData（方舟数据管理）是多模态（关系型、键值型、文档型）、端端&端云一体（分布式数据库、分布式变量）的数据存储框架。

ArkData包括Preference、RDB、分布式KVStore、分布式对象等。

仓颉 ArkData提供的关键能力如下：

  * 数据共享谓词。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-data_share_predicates)）
  * 分布式键值数据库。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-distributed_kv_store)）
  * 用户首选项。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-preferences)）
  * 关系型数据库。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-relational_store)）
  * 数据集。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-values_bucket)）



#### [h2]ArkGraphics 2D（方舟2D图形服务）

ArkGraphics 2D（方舟2D图形服务）提供多样化的2D绘制能力，自然流畅的动效和灵活的帧率配置能力，满足开发者多样化的UI自绘制需求，助力打造实时、沉浸、交互的应用体验。

仓颉 ArkGraphics 2D提供的关键能力如下：

  * 色彩管理，包括创建标准色彩空间和自定义色彩空间，以及获取色彩空间相关信息的方法。支持开发者在图片处理、相机管理中设置/获取颜色空间相关信息。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-color_manager)）



#### [h2]ArkWeb（方舟Web）

ArkWeb（方舟Web）提供了在应用中使用Web页面的能力，支持应用集成Web页面、小程序、浏览器网页浏览等场景的混合开发。

仓颉 ArkWeb提供的关键能力如下：

  * BackForwardList：历史信息列表。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-webview#class-backforwardlist)）
  * WebCookieManager：Cookie管理。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-webview#class-webcookiemanager)）
  * WebviewController：Web组件控制器。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-webview#class-webviewcontroller)）



#### [h2]Basic Services Kit（基础服务）

Basic Services Kit（基础服务）作为基础服务套件，为应用开发者提供常用的基础能力。比如常用的剪贴板读写、文件上传下载、设备管理等能力都由本Kit提供。

仓颉 Basic Services Kit提供的关键能力如下：

  * 电池服务：支持充放电状态和电池状态信息显示。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-battery_info)）
  * 公共事件管理。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_manager)）
  * 设备管理。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-device_info)）
  * 文件上传下载。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-request-agent)）
  * 提供设置应用基础功能。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-settings)）
  * 提供时间时区基础功能。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-system_date_time)）



#### [h2]Camera Kit（相机服务）

Camera Kit（相机服务）提供的接口可以开发相机应用，应用通过访问和操作相机硬件，实现基础操作，如预览、拍照和录像；还可以通过接口组合完成更多操作，如控制闪光灯和曝光时间、对焦或调焦等。

仓颉 Camera Kit提供的关键能力如下：

  * 预览、拍照和录像、 控制闪光灯和曝光事件、 对焦和调焦、 视频防抖。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-multimedia-camera)）



#### [h2]Connectivity Kit（短距通信服务）

Connectivity Kit（短距通信服务）提供通信服务开放能力，涵盖了WLAN、蓝牙等能力。

仓颉 Connectivity Kit提供的关键能力如下：

  * BLE（低功耗蓝牙）（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-ble)）
  * A2DP（高级音频分发配置文件）（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-a2dp)）
  * HFP即为蓝牙免提协议，允许蓝牙设备控制对端蓝牙设备的通话，例如蓝牙耳机控制手机通话的接听、挂断、拒接、语音拨号等。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-hfp)）
  * WLAN相关接口提供P2P功能。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-wifi_manager)）



#### [h2]Core File Kit（文件基础服务）

Core File Kit（文件基础服务）提供访问和管理应用文件和用户文件的能力。

Core File Kit涵盖了应用文件管理、用户文件访问与管理等能力。

仓颉 Core File Kit提供的关键能力如下：

  * 文件管理：提供包含创建、删除、移动等文件基础操作、文件信息获取、文件信息设置功能。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-file_fs)）
  * 文件URI：提供通过PATH获取文件统一标识符的能力，后续可通过使用文件管理对应接口进行相关open、read、write等操作。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-file_fileuri)）



#### [h2]Crypto Architecture Kit（加解密算法框架服务）

Crypto Architecture Kit（加解密算法框架服务）提供了加解密等算法能力。

仓颉 Crypto Architecture Kit提供的关键能力如下：

  * 密钥生成、加解密、消息摘要计算和安全随机数生成。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-crypto)）



#### [h2]IPC Kit（进程间通信服务）

IPC Kit（进程间通信服务）提供进程间通信能力，包括设备内的进程间通信（IPC）和设备间的进程间通信（RPC），用来实现数据交互。

仓颉 IPC Kit提供的关键能力如下：

  * 传递基本类型的数据、大数据量的数据以共享内存的形式传递、序列化读写数据等。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-rpc)）



#### [h2]Image Kit（图片处理服务）

Image Kit提供了基础的图片编解码能力、图片编辑框架和图片加载框架能能力。

仓颉 Image Kit提供的关键能力如下：

  * 常用格式图片编解码，如png、jpeg、webp、gif（只支持解码）。图片常用变换操作，如旋转、平移、缩放、裁切。 图片常用EXIF信息读、写操作。 图片色彩空间支持和转换。HDR图片编解码，可选解码为SDR和HDR。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-image)）



#### [h2]Localization Kit（本地化开发服务）

Localization Kit（本地化开发服务）提供国际化和本地化能力，可使应用符合当地用户的使用习惯。

国际化是系统提供的一套能力集，支持多语言输入输出、多语言文字处理、区域文化习惯特性、时区和夏令时等，满足应用多语言多文化的设计需求。本地化是为应用开发者提供的一套能力集，支持包括配置多语言翻译资源、资源加载、敏感禁忌检查和本地化测试能力。

仓颉 Localization Kit提供的关键能力如下：

  * 日历提供获取和设置日历属性的能力，如时间，时区等。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-i18n)）
  * 资源管理提供应用资源获取的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-resource_manager)）



#### [h2]Location Kit（位置服务）

Location kit（位置服务）采用GNSS、WLAN、基站等定位技术，提供优秀的定位能力。

Location Kit涵盖定位服务、地理围栏、地理编码、逆地理编码、国家码等功能。

仓颉 Location Kit提供的关键能力如下：

  * 获取当前位置功能。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-geo_location_manager)）



#### [h2]Media Kit（媒体服务）

Media Kit（媒体服务）提供了AVImageGenerator用于从视频资源中获取缩略图。

仓颉 Media Kit提供的关键能力如下：

  * 获取视频缩略图。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-multimedia_media)）



#### [h2]Media Library Kit（媒体文件管理服务）

Media Library Kit（媒体文件管理服务）提供了用户图片和视频的增删改查和相册管理能力。

仓颉 Media Library Kit提供的关键能力如下：

  * 提供了图片和视频资产的管理能力，包含基础的增删改查功能。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-file-photo_access_helper)）
  * 提供了应用订阅用户图片和视频、相册变化事件的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-file-photo_access_helper)）



#### [h2]Network Kit（网络服务）

Network Kit（网络服务）提供了网络管理和网络通信能力。

仓颉 Network Kit提供的关键能力如下：

  * 网络连接管理，包括获取默认激活的数据网络、获取所有激活数据网络列表、开启关闭飞行模式、获取网络能力信息等功能，典型应用场景包括：接收指定网络的状态变化通知、获取所有注册的网络、查询默认网络或者指定网络的连接信息、使用默认网络解析域名，获取所有IP。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-net-connection)）
  * 网络协议栈，提供HTTP数据请求能力，应用通过HTTP发起一个数据请求，支持常见的GET、POST、OPTIONS、HEAD、PUT、DELETE、TRACE、CONNECT方法。当前提供了2种HTTP请求方式，若请求发送或接收的数据量较少，可使用HttpRequest.request，若是大文件的上传或者下载，且关注数据发送和接收进度，可使用HTTP请求流式传输HttpRequest.requestInstream。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-net-http)）



#### [h2]Performance Analysis Kit（性能分析服务）

Performance Analysis Kit（性能分析服务）为开发者提供应用事件、日志、跟踪分析工具，可观测应用运行时状态，用于行为分析、故障分析、安全分析、统计分析，帮助开发者持续改进应用体验。

仓颉 Performance Analysis Kit提供的关键能力如下：

  * HiLog流水日志，提供开发者记录和获取流水日志能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-hilog)）
  * HiTraceMeter和HiTraceChain跟踪，提供开发者Trace度量和跨线程跨进程分布式跟踪的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-hi_tracemeter)）
  * HiAppEvent应用事件，提供开发者记录故障、行为、安全、统计事件的能力，并订阅系统事件。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-hiappevent)）



#### [h2]Sensor Service Kit（传感器服务）

仓颉 Sensor Service Kit（传感器服务）使应用程序能够从传感器获取原始数据，并提供振感控制能力。

Sensor（传感器）模块是应用访问底层硬件传感器的一种设备抽象概念。开发者可根据传感器提供的相关接口订阅传感器数据，并根据传感器数据定制相应的算法开发各类应用，比如指南针、运动健康、游戏等。

Sensor Service Kit提供的关键能力如下：

  * 订阅/取消传感器，订阅传感器数据变化、获取设备上的传感器信息事件的能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-sensor)）



#### [h2]Telephony Kit（蜂窝通信服务）

Telephony Kit（蜂窝通信服务）提供了通话能力。

仓颉 Telephony Kit提供的关键能力如下：

  * 呼叫管理。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-telephony-call)）



#### [h2]Test Kit（应用测试服务）

Test Kit（应用测试服务）为开发者提供UI测试能力。

仓颉 Test Kit提供的关键能力如下：

  * UI测试能力提供简洁易用的查找和操作界面控件的API，支持用户开发基于界面操作的自动化测试脚本。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ui_test)）



#### [h2]Universal Keystore Kit（密钥管理服务）

Universal Keystore Kit（密钥管理服务）提供密钥的全生命周期管理能力，包括密钥生成、销毁、导入、派生、使用（如加密/解密、签名/验签）、访问控制及密钥合法性证明等功能。

仓颉 Universal Keystore Kit提供的关键能力如下：

  * 密钥管理功能接口：向业务/应用提供各类密钥的统一安全操作能力。（[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks)）


