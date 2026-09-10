---
name: cangjie-guides/cj-restricted-permissions
title: 受限开放权限
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-restricted-permissions
nodePath: 系统 / 安全 / 程序访问控制 / 应用权限管控 / 应用权限列表 / 受限开放权限
---

# 受限开放权限

#### 申请方式

当前仅少量符合特殊场景的应用可在通过审批后，使用受限权限，其申请方式请参考：[申请使用受限权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-declare-permissions-in-acl)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/67/v3/bhfRZbDHQ26ZOTpdxsXA0w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111608Z&HW-CC-Expire=86400&HW-CC-Sign=124B37BD790AFBAF948A398EFCC4CFE1562B5634A12C070B999529DD52C5DDEC)

如果应用涉及获取受限权限，在应用发布上架时，应用市场（AGC）将根据应用的使用场景审核是否可以使用对应的受限权限。如不符合，应用的上架申请将被驳回，审核方式请参见[发布HarmonyOS应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-guide-0000002287176372)。

#### 权限列表

#### [h2]ohos.permission.SYSTEM_FLOAT_WINDOW

允许应用使用悬浮窗的能力。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.READ_CONTACTS

允许应用读取联系人数据。

**可申请此权限的特殊场景与功能：**

应用需要克隆、备份或同步联系人信息。

例如：

  1. 应用需要批量读取本机通讯录数据，并同步到云端服务器。
  2. 应用需要批量读取通讯录数据，在设备间进行同步或者克隆操作。



**其他场景下的使用方案：** 使用“联系人Picker”访问联系人数据。

**权限级别：** system_basic

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.WRITE_CONTACTS

允许应用添加、移除或更改联系人数据。

**可申请此权限的特殊场景与功能：**

应用需要克隆、备份或同步联系人信息。

例如：

  1. 应用需要把从云端服务器读取的通讯录数据批量写入到本地通讯录。
  2. 应用需要把从其他设备同步过来的通讯录数据批量写入通讯录。



**其他场景下的使用方案：** 除以上特殊场景外，应用不能修改联系人数据，应引导用户到“联系人”应用中修改联系人数据。

**权限级别：** system_basic

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.READ_AUDIO

允许读取用户公共目录的音频文件。

**可申请此权限的特殊场景与功能：**

应用需要克隆、备份或同步音频类文件。

例如：

  1. 应用需要批量读取公共目录下的音频文件，并同步到云端服务器。
  2. 应用需要批量读取公共目录下的音频文件，在设备间进行同步或者克隆操作。



**权限级别：** system_basic

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.WRITE_AUDIO

允许修改用户公共目录的音频文件。

**可申请此权限的特殊场景与功能：**

应用需要克隆、备份或同步音频类文件。

例如：

  1. 应用需要把从云端服务器读取的音频文件批量保存到本地公共目录。
  2. 应用需要把从其他设备同步过来的音频文件批量保存到本地公共目录。



**权限级别：** system_basic

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.READ_IMAGEVIDEO

允许读取用户公共目录的图片或视频文件。

**可申请此权限的特殊场景与功能：**

应用需要克隆、备份或同步图片/视频类文件。

例如：

  1. 应用需要批量读取媒体库的文件（图片、视频），并同步到云端服务器。
  2. 应用需要批量读取媒体库的文件（图片、视频），在设备间进行同步或者克隆操作。



**权限级别：** system_basic

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.WRITE_IMAGEVIDEO

允许修改用户公共目录的图片或视频文件。

**可申请此权限的特殊场景与功能：** 应用需要克隆、备份或同步图片/视频类文件。

例如：

  1. 应用需要把从云端服务器读取的图片、视频文件批量保存到本地媒体库。
  2. 应用需要把从其他设备同步过来的图片、视频文件批量保存到本地媒体库。



**其他场景下的使用方案：** 使用安全控件或授权弹窗的方式，将用户指定的媒体资源保存到图库中，使用方式请参见：[保存媒体库资源](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-photoaccesshelper-savebutton)。

**权限级别：** system_basic

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.READ_PASTEBOARD

允许应用读取剪贴板。

**可申请此权限的特殊场景与功能：**

  * 手机、平板设备只有符合以下场景可申请： 
    * 银行卡号复制：银行类应用需要读取剪贴板中的银行卡号自动生成卡片。
    * 口令复制：应用需要读取剪贴板中特定格式口令，自动打开应用内对应页面。
    * 文档编辑类应用。
    * 输入法：系统级输入法需要读取剪贴板信息实现自动填充。应用内置输入法不能申请此权限。



例如，手机设备上运行的应用：

  1. 某银行类应用，当用户复制银行卡号到剪贴板上时，用户打开该应用后，该应用需要读取剪贴板，判断是否是银行卡号后提醒用户是否需要进行转账等操作。
  2. 打开应用后，应用需要读取剪贴板上数据，判断是否是应用内的特定口令数据，并自动打开相关页面。
  3. 作为典型的文档编辑类应用，需在手机上使用该应用进行文档编辑操作。
  4. 作为系统级输入法应用，需要读取剪贴板上数据（如验证码），实现自动填充功能。



**权限级别：** system_basic

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.FILE_ACCESS_PERSIST

允许应用支持持久化访问文件Uri。

**权限级别：** normal

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.INPUT_MONITORING

允许应用监听输入事件。

**可申请此权限的特殊场景与功能：**

  * 应用需要录屏，且录屏过程中有显示键盘按键事件，或是显示鼠标指针效果/触摸效果的功能。
  * 应用需要共享桌面。



**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 7

#### [h2]ohos.permission.SHORT_TERM_WRITE_IMAGEVIDEO

允许应用保存图片、视频到用户公共目录。

应用获取此权限后，最长可获得30分钟的短时授权，来保存图片/视频。如果超过30分钟，将再次弹窗，需要用户再次确认。

**可申请此权限的特殊场景与功能：**

  * 应用无法使用安全保存控件，例如H5网页应用等。
  * 存在连续多次保存图片/视频的场景，无法使用保存确认弹框，一次保存多个图片/视频。



**其他场景下的使用方案：** 使用安全控件或授权弹窗的方式，将用户指定的媒体资源保存到图库中，使用方式请参见：[保存媒体库资源](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-photoaccesshelper-savebutton)。

**权限级别：** system_basic

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.GET_WIFI_PEERS_MAC

允许应用获取对端Wi-Fi设备的MAC地址。

在获取Wi-Fi扫描结果时，如果需要获取对端设备的MAC地址，则需要申请该权限。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

**变更信息：** API 12，权限等级为system_core；从API 15开始，权限等级变更为system_basic，向普通应用开放。

#### [h2]ohos.permission.kernel.DISABLE_CODE_MEMORY_PROTECTION

允许应用禁用本应用的代码运行时完整性保护。

**可申请此权限的特殊场景与功能：**

  * 应用需要在运行时修改指令内容。



**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.kernel.ALLOW_WRITABLE_CODE_MEMORY

允许应用申请可写可执行匿名内存。

**可申请此权限的特殊场景与功能：**

  * 仅提供给应用开启自带引擎的即时编译能力，不允许用于热更新。
  * 申请该权限的应用需要主动适配坚盾模式，在该模式下无闪退。



**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.kernel.ALLOW_EXECUTABLE_FORT_MEMORY

允许系统JS引擎申请带MAP_FORT标识的匿名可执行内存。

应用申请此权限后，系统引擎可申请带MAP_FORT的匿名可执行内存，做即时编译，提高运行时执行效率。

**可申请此权限的特殊场景与功能：** 当前仅对游戏应用需要使用系统引擎实现高效游戏脚本解析的场景授予此权限。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION

允许应用设置或移除剪贴板数据的可粘贴范围。

**可申请此权限的特殊场景与功能：**

当应用需要自行设置或移除剪贴板数据的可粘贴范围时可申请。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION

允许应用设置或移除其使用UDMF支持的数据分享范围。

**可申请此权限的特殊场景与功能：**

当应用需要自行设置或移除其使用UDMF支持的数据分享范围时可申请。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.ACCESS_DISK_PHY_INFO

允许应用获取硬盘的硬件信息。

**可申请此权限的特殊场景与功能：**

仅提供给金融证券类应用使用，用于证券、股票交易。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.PRELOAD_FILE

允许应用预加载文件以提升文件打开速度。

**可申请此权限的特殊场景与功能：** 仅当应用为文档编辑类应用可申请此权限。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.SET_PAC_URL

允许应用设置代理自动配置脚本地址。

应用完成脚本地址配置后，其他应用可读取此脚本并进行解析，根据解析结果决定是否使用代理。

**可申请此权限的特殊场景与功能：**

  * 企业应用需要设置内网代理管理企业流量。
  * 党政及国家机关、事业单位及其受信任的企业应用需要设置国密代理访问安全类网站。



**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.PERSONAL_MANAGE_RESTRICTIONS

允许设备管理应用管理个人设备限制策略。

**可申请此权限的特殊场景与功能：** 仅当应用为UAD（User as Developer）应用可申请此权限。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.START_PROVISIONING_MESSAGE

允许应用启动设备管理业务部署流程，将该应用激活为个人设备管理应用。

**可申请此权限的特殊场景与功能：** 仅当应用为UAD（User as Developer）应用可申请此权限。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.USE_FRAUD_CALL_LOG_PICKER

允许应用使用诈骗通话记录选择器，获取通话记录内容。

**可申请此权限的特殊场景与功能：**

仅提供给反诈类应用使用。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.USE_FRAUD_MESSAGES_PICKER

允许应用使用诈骗短信选择器，获取短信内容。

**可申请此权限的特殊场景与功能：**

仅提供给反诈类应用使用。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC

允许应用固化对端蓝牙设备MAC对应的虚拟随机地址。

通过BLE扫描、BR扫描或连接监听获取到对端蓝牙设备MAC对应的虚拟随机地址，申请该权限后，可保持该虚拟随机地址长时间保持，即使是开/关/重启蓝牙也不发生变化。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.ACCESS_VIRTUAL_SCREEN

允许应用管控虚拟屏。

获得该权限的应用可以调用虚拟屏相关接口管理虚拟屏，包括创建虚拟屏，使用虚拟屏，销毁虚拟屏等。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.MANAGE_APN_SETTING

允许应用读取或设置APN信息。

**可申请此权限的特殊场景与功能：**

当需要连接移动数据专网进行办公时可申请此权限。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.kernel.ALLOW_USE_JITFORT_INTERFACE

允许应用调用JITFort接口更新MAP_FORT内存的内容。

**可申请此权限的特殊场景与功能：**

应用使用自己的脚本引擎，且需要开启即时编译优化性能。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.kernel.DISABLE_GOTPLT_RO_PROTECTION

允许应用关闭进程内.got.plt段的只读保护。

**可申请此权限的特殊场景与功能：**

应用功能所依赖的基础能力系统尚不支持，必须通过修改.got.plt表方式实现。在申请权限时需要明确说明系统不满足原因。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.USE_FRAUD_APP_PICKER

允许应用使用诈骗应用选择器，获取应用信息。

**可申请此权限的特殊场景与功能：**

仅提供给反诈类应用使用。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.kernel.SUPPORT_PLUGIN

允许主体应用安装插件。

**可申请此权限的特殊场景与功能：**

应当有对应的插件机制，确保可以使用对应的插件，并符合插件市场的管理规定。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.CUSTOM_SANDBOX

允许应用将沙箱类型改为动态沙箱。

**可申请此权限的特殊场景与功能：**

面向华为内部开发工具应用开放，仅在允许名单内的固定应用可申请该权限。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 12

#### [h2]ohos.permission.MANAGE_SCREEN_TIME_GUARD

允许应用调用屏幕时间守护相关接口，进行屏幕使用限制、应用访问控制、管控使用时间等操作。

**可申请此权限的特殊场景与功能：**

  1. 个人用机时间管理：以专注、习惯养成、自律为目的，用于用户管理自己的设备、应用使用情况，限制应用和屏幕访问。
  2. 他人用机时间管理：以守护、看护、关怀为目的，用于学校/家长/企业管理学生/孩子/员工的设备、应用使用情况，限制应用和屏幕访问。



**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**起始版本：** 20

#### [h2]ohos.permission.CUSTOMIZE_SAVE_BUTTON

允许应用自定义保存控件的图标和文本。

**可申请此权限的特殊场景与功能：**

使用保存控件提供的默认样式无法满足业务场景，应用需要自定义保存控件的图标和文本。

**权限级别：** system_basic

**授权方式：** 系统授权（system_grant）

**支持设备：** Phone | Tablet

**起始版本：** 20
