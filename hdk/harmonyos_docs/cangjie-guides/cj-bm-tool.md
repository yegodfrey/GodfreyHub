---
name: cangjie-guides/cj-bm-tool
title: bm工具
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-bm-tool
nodePath: 系统 / 调测调优 / 调试命令 / bm工具
---

# bm工具

Bundle Manager（包管理工具，简称bm）是实现应用安装、卸载、更新、查询等功能的工具，bm为开发者提供基本的应用安装包的调试能力。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cc/v3/jhDMuXSpQKOu6yHwcICQ8w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=4EAE25CC54E034CB808562CBB90728B08AE1F0A6DBAA8EF39B7F0A5275570ED9)

当前仓颉仅支持开发HAR和HAP包，不支持HSP包，因此本工具中关于HSP包相关的功能，在仓颉程序中不可用。

#### 环境要求（hdc工具）

在使用本工具前，开发者需要先获取[hdc工具](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-hdc)，执行hdc shell。

#### bm工具命令列表

命令 | 描述  
---|---  
help | 帮助命令，用于查询bm支持的命令信息。  
install | 安装命令，用于安装应用。  
uninstall | 卸载命令，用于卸载应用。  
dump | 查询命令，用于查询应用的相关信息。  
clean | 清理命令，用于清理应用的缓存和数据。此命令在root版本下可用，在user版本下打开开发者模式可用。其它情况不可用。  
get | 获取udid命令，用于获取设备的udid。  
quickfix | 快速修复相关命令，用于执行补丁相关操作，如补丁安装、补丁查询。  
compile | 应用执行编译AOT命令。  
copy-ap | 把应用的ap文件拷贝到/data/local/pgo目录下，供shell用户读取文件。  
dump-dependencies | 查询应用依赖的模块信息。  
dump-shared | 查询应用间HSP应用信息。  
dump-overlay | 打印overlay应用的overlayModuleInfo。  
dump-target-overlay | 打印目标应用的所有关联overlay应用的overlayModuleInfo。  
  
#### 帮助命令（help）
    
    
    # 显示帮助信息
    bm help

#### 安装命令（install）
    
    
    bm install [-h] [-p filePath] [-r] [-w waitingTime] [-s hspDirPath]

**安装命令参数列表：**

参数 | 参数说明  
---|---  
-h | 帮助信息。  
-p | 必选参数，指定路径和多个HAP同时安装。  
-r | 可选参数，覆盖安装一个HAP。默认值为覆盖安装。  
-s | 根据场景判断，安装应用间HSP时为必选参数，其他场景为可选参数。安装应用间共享库， 每个路径目录下只能存在一个同包名的HSP。  
-w | 可选参数，安装HAP时指定bm工具等待时间，最小的等待时长为5s，最大的等待时长为600s, 默认缺省为5s。  
  
示例：
    
    
    # 安装一个hap
    bm install -p /data/app/ohos.app.hap
    # 覆盖安装一个hap
    bm install -p /data/app/ohos.app.hap -r
    # 安装一个应用间共享库
    bm install -s xxx.hsp
    # 同时安装使用方应用和其依赖的应用间共享库
    bm install -p aaa.hap -s xxx.hsp yyy.hsp
    # 安装一个hap,等待时间为10s
    bm install -p /data/app/ohos.app.hap -w 10

#### 卸载命令（uninstall）
    
    
    bm uninstall [-h] [-n bundleName] [-m moduleName] [-k] [-s] [-v versionCode]

**卸载命令参数列表：**

参数 | 参数说明  
---|---  
-h | 帮助信息。  
-n | 必选参数，指定Bundle名称卸载应用。  
-m | 可选参数，指定卸载应用的一个模块。默认卸载所有模块。  
-k | 可选参数，卸载应用时保存应用数据。默认卸载应用时不保存应用数据。  
-s | 根据场景判断，安装应用间HSP时必选参数，其他场景为可选参数。卸载指定的共享库。  
-v | 可选参数，指定共享包的版本号。默认卸载同包名的所有共享包。  
  
示例：
    
    
    # 卸载一个应用
    bm uninstall -n com.ohos.app
    # 卸载应用的一个模块
    bm uninstall -n com.ohos.app -m com.ohos.app.EntryAbility
    # 卸载一个shared bundle
    bm uninstall -n com.ohos.example -s
    # 卸载一个shared bundle的指定版本
    bm uninstall -n com.ohos.example -s -v 100001
    # 卸载一个应用，并保留用户数据
    bm uninstall -n com.ohos.app -k

#### 查询应用信息命令（dump）
    
    
    bm dump [-h] [-a] [-n bundleName] [-s shortcutInfo] [-d deviceId]

**查询命令参数列表：**

参数 | 参数说明  
---|---  
-h | 帮助信息。  
-a | 可选参数，查询系统已经安装的所有应用。  
-n | 可选参数，查询指定Bundle名称的详细信息。  
-s | 可选参数，查询指定Bundle名称下的快捷方式信息。  
-d | 可选参数，查询指定设备中的包信息。默认查询当前设备。  
  
示例：
    
    
    # 显示所有已安装的Bundle名称
    bm dump -a
    # 查询该应用的详细信息
    bm dump -n com.ohos.app
    # 查询该应用的快捷方式信息
    bm dump -s -n com.ohos.app
    # 查询跨设备应用信息
    bm dump -n com.ohos.app -d xxxxx

#### 清理命令（clean）
    
    
    bm clean [-h] [-c] [-n bundleName] [-d] [-i appIndex]

**清理命令参数列表：**

参数 | 参数说明  
---|---  
-h | 帮助信息。  
-c -n | -n为必选参数，-c为可选参数。清除指定Bundle名称的缓存数据。  
-d -n | -n为必选参数，-d为可选参数。清除指定Bundle名称的数据目录。  
-i | 可选参数，清除分身应用的数据目录。默认为0。  
  
示例：
    
    
    # 清理该应用下的缓存数据
    bm clean -c -n com.ohos.app
    # 清理该应用下的用户数据
    bm clean -d -n com.ohos.app
    # 执行结果
    clean bundle data files successfully.

#### 获取udid命令（get）
    
    
    bm get [-h] [-u]

**获取udid命令参数列表：**

参数 | 参数说明  
---|---  
-h | 帮助信息。  
-u | 必选参数，获取设备的udid。  
  
示例：
    
    
    # 获取设备的udid
    bm get -u
    # 执行结果
    udid of current device is :
    23CADE0C

#### 快速修复命令（quickfix）
    
    
    bm quickfix [-h] [-a -f filePath [-t targetPath] [-d]] [-q -b bundleName] [-r -b bundleName]

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/tOqBGGmDSuCEr9tZta4OEA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=6995A7A5DEE3146D5CEF72D05B300562D062613C92D3916F09670D1205BDCF9B)

hqf文件制作方式可参考[HQF打包指令](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-packing-tool#hqf打包指令)。

**快速修复命令参数列表：**

参数 | 参数说明  
---|---  
-h | 帮助信息。  
-a -f | -a为可选参数，指定-a后，-f为必选参数。执行快速修复补丁安装命令，file-path对应hqf文件，支持传递1个或多个hqf文件，或传递hqf文件所在的目录。  
-q -b | -q为可选参数，指定-q后，-b为必选参数，未指定-q。根据包名查询补丁信息。  
-r -b | -r为可选参数，指定-r后，-b为必选参数。根据包名卸载未使能的补丁。  
-t | 可选参数，快速修复应用到指定目标路径。  
-d | 可选参数，应用快速修复调试模式。  
  
**示例1：**
    
    
    # 根据包名查询补丁包信息
    bm quickfix -q -b com.ohos.app

**执行结果：**
    
    
    Information as follows:
    ApplicationQuickFixInfo:
    bundle name: com.ohos.app
    bundle version code: xxx
    bundle version name: xxx
    patch version code: x
    patch version name:
    cpu abi:
    native library path:
    type:

**示例2：**
    
    
    # 快速修复补丁安装
    bm quickfix -a -f /data/app/

**执行结果：**
    
    
    apply quickfix succeed.

**示例3：**
    
    
    # 快速修复补丁卸载
    bm quickfix -r -b com.ohos.app

**执行结果：**
    
    
    delete quick fix successfully

#### 共享库查询命令（dump-shared）
    
    
    bm dump-shared [-h] [-a] [-n bundleName] [-m moduleName]

**共享库查询命令参数列表：**

参数 | 参数说明  
---|---  
-h | 帮助信息。  
-a | 可选参数，查询系统中已安装所有共享库。  
-n | 可选参数，查询指定共享库包名的详细信息。  
-m | 可选参数，查询指定共享库包名和模块名的详细信息。  
  
示例：
    
    
    # 显示所有已安装共享库包名
    bm dump-shared -a
    # 显示该共享库的详细信息
    bm dump-shared -n com.ohos.lib
    # 显示指定应用指定模块依赖的共享库信息
    bm dump-dependencies -n com.ohos.app -m entry

#### 共享库依赖关系查询命令（dump-dependencies）

显示指定应用和指定模块依赖的共享库信息。
    
    
    bm dump-dependencies [-h] [-n bundleName] [-m moduleName]

**共享库依赖关系查询命令参数列表：**

参数 | 参数说明  
---|---  
-h | 帮助信息。  
-n | 必选参数，查询指定共享库包名的详细信息。  
-m | 可选参数，查询指定应用指定模块依赖的共享库信息。  
  
示例：
    
    
    # 显示指定应用指定模块依赖的共享库信息
    bm dump-dependencies -n com.ohos.app -m entry

#### 应用执行编译AOT命令（compile）

应用执行编译AOT命令。
    
    
    bm compile [-h] [-m mode] [-r bundleName] [-a]

**compile命令参数列表：**

参数 | 参数说明  
---|---  
-h | 帮助信息。  
-a | 可选参数，编译所有应用。  
-m | 可选参数，可选值为partial或者full。根据包名编译应用。  
-r | 可选参数，移除应用的结果。  
  
示例：
    
    
    # 根据包名编译应用
    bm compile -m partial com.example.myapplication

#### 拷贝ap文件命令（copy-ap）

拷贝ap文件到指定应用的/data/local/pgo路径。
    
    
    bm copy-ap [-h] [-a] [-n bundleName]

**copy-ap命令参数列表：**

参数 | 参数说明  
---|---  
-h | 帮助信息。  
-a | 可选参数，默认所有包相关ap文件。拷贝所有包相关ap文件。  
-n | 可选参数，默认当前应用包名。根据包名拷贝对应包相关的ap文件。  
  
示例：
    
    
    # 根据包名移动对应包相关的ap文件
    bm copy-ap -n com.example.myapplication

#### 查询overlay应用信息命令（dump-overlay）

打印overlay应用的overlayModuleInfo。
    
    
    bm dump-overlay [-h] [-b bundleName] [-m moduleName] [-t targetModuleName]

**dump-overlay命令参数列表：**

参数 | 参数说明  
---|---  
-h | 帮助信息。  
-b | 必选参数，获取指定应用的所有OverlayModuleInfo信息。  
-m | 可选参数，默认当前应用主模块名。根据指定的包名和module名查询OverlayModuleInfo信息。  
-t | 可选参数，根据指定的包名和目标module名查询OverlayModuleInfo信息。  
  
示例：
    
    
    # 根据包名来获取overlay应用com.ohos.app中的所有OverlayModuleInfo信息
    bm dump-overlay -b com.ohos.app
    
    # 根据包名和module来获取overlay应用com.ohos.app中overlay module为entry的所有OverlayModuleInfo信息
    bm dump-overlay -b com.ohos.app -m entry
    
    # 根据包名和module来获取overlay应用com.ohos.app中目标module为feature的所有OverlayModuleInfo信息
    bm dump-overlay -b com.ohos.app -m feature

#### 查询应用的overlay相关信息命令（dump-target-overlay）

查询目标应用的所有关联overlay应用的overlayModuleInfo信息。
    
    
    bm dump-target-overlay [-h] [-b bundleName] [-m moduleName]

**dump-target-overlay命令参数列表：**

参数 | 参数说明  
---|---  
-h | 帮助信息。  
-b | 必选参数，获取指定应用的所有OverlayBundleInfo信息。  
-m | 可选参数，默认当前应用主模块名。根据指定的包名和module名查询OverlayBundleInfo信息。  
  
示例：
    
    
    # 根据包名来获取目标应用com.ohos.app中的所有关联的OverlayBundleInfo信息
    bm dump-target-overlay-b com.ohos.app
    
    # 根据包名和module来获取目标应用com.ohos.app中目标module为entry的所有关联的OverlayModuleInfo信息
    bm dump-target-overlay -b com.ohos.app -m entry

#### bm工具错误码

#### [h2]301 系统账号不存在

**错误信息：**

error: user not exist.

**错误描述：**

系统账号不存在。

**可能原因：**

安装应用时，系统账号ID不存在。

**处理步骤：**

  1. 重启手机后再次尝试安装应用。
  2. 重复上述步骤3到5次后依旧安装失败，请导出日志文件提[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)获取帮助。


    
    
    hdc file recv /data/log/hilog/

#### [h2]304 当前系统账号没有安装HAP包

**错误信息：**

error: user does not install the hap.

**错误描述：**

卸载操作时，当前系统账号没有安装HAP包。

**可能原因：**

当前系统账号下未安装任何HAP包。

**处理步骤：**

当前系统账号下未安装任何HAP包，请不要执行卸载应用操作。

#### [h2]9568319 签名文件异常

**错误信息：**

error: cannot open signature file.

**错误描述：**

安装应用过程中，出现签名文件打开异常，导致安装失败。

**可能原因：**

HAP包签名文件存在异常。

**处理步骤：**

  1. 使用[自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-auto)。在连接设备后，重新为应用进行签名。
  2. 使用手动签名，请参考[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)。



#### [h2]9568320 签名文件不存在

**错误信息：**

error: no signature file.

**错误描述：**

用户安装未签名的HAP包。

**可能原因：**

HAP包没有签名。

**处理步骤：**

  1. 使用[自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-auto)。在连接设备后，重新为应用进行签名。
  2. 使用手动签名，请参考[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)。



#### [h2]9568321 签名文件解析失败

**错误信息：**

error: fail to parse signature file.

**错误描述：**

用户安装时签名文件解析失败。

**可能原因：**

HAP包签名文件存在异常。

**处理步骤：**

  1. 使用[自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-auto)。在连接设备后，重新为应用进行签名。
  2. 使用手动签名，请参考[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)。



#### [h2]9568323 签名摘要验证未通过

**错误信息：**

error: signature verification failed due to not bad digest.

**错误描述：**

用户安装时签名验证失败。

**可能原因：**

HAP包签名不正确。

**处理步骤：**

  1. 使用[自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-auto)。在连接设备后，重新为应用进行签名。
  2. 使用手动签名，请参考[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)。



#### [h2]9568324 签名完整性校验未通过

**错误信息：**

error: signature verification failed due to out of integrity.

**错误描述：**

用户安装时签名验证失败。

**可能原因：**

HAP包签名不正确。

**处理步骤：**

  1. 使用[自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-auto)。在连接设备后，重新为应用进行签名。
  2. 使用手动签名，请参考[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)。



#### [h2]9568326 签名公钥存在异常

**错误信息：**

error: signature verification failed due to bad public key.

**错误描述：**

用户安装时签名验证失败，签名公钥存在异常。

**可能原因：**

HAP包签名不正确。

**处理步骤：**

  1. 使用[自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-auto)。在连接设备后，重新为应用进行签名。
  2. 使用手动签名，请参考[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)。



#### [h2]9568327 签名获取异常

**错误信息：**

error: signature verification failed due to bad bundle signature.

**错误描述：**

用户安装时签名验证失败，签名获取异常。

**可能原因：**

HAP包签名不正确。

**处理步骤：**

  1. 使用[自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-auto)。在连接设备后，重新为应用进行签名。
  2. 使用手动签名，请参考[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)。



#### [h2]9568328 未找到配置文件区块

**错误信息：**

error: signature verification failed due to no profile block.

**错误描述：**

用户安装时签名验证失败，未找到配置文件区块。

**可能原因：**

HAP包签名不正确。

**处理步骤：**

  1. 使用[自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-auto)。在连接设备后，重新为应用进行签名。
  2. 使用手动签名，请参考[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)。



#### [h2]9568330 初始化签名源失败

**错误信息：**

error: signature verification failed due to init source failed.

**错误描述：**

用户安装时签名验证失败，初始化签名源失败。

**可能原因：**

HAP包签名不正确。

**处理步骤：**

  1. 使用[自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-auto)。在连接设备后，重新为应用进行签名。
  2. 使用手动签名，请参考[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)。



#### [h2]9568257 签名文件Pkcs7校验失败

**错误信息：**

error: fail to verify pkcs7 file.

**错误描述：**

用户安装应用时签名Pkcs7校验失败。

**可能原因：**

  1. 证书链不完整或不受信任。
  2. 签名算法不匹配。
  3. 数据被篡改或签名文件损坏。
  4. 签名格式不匹配。
  5. 私钥不匹配。



**处理步骤：**

  1. 使用[自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-auto)。在连接设备后，重新为应用进行签名。
  2. 使用手动签名，请参考[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)。



#### [h2]9568344 解析配置文件失败

**错误信息：**

error: install parse profile prop check error.

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/o90GR5TnRQmEi_P6NUdOLw/zh-cn_image_0000002713398886.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=7768B02FB5CF277CD8698DA86B7DA99FECF5F548960BF788CACB3045E263B850)

**错误描述：**

在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: install parse profile prop check error”错误信息。

**可能原因：**

  1. [app.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-configuration-file)中的bundleName、[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file)中name不符合命名规则。



**处理步骤：**

  1. 根据命名规则调整app.json5配置文件中bundleName、module.json5文件中的name字段。



#### [h2]9568305 依赖的模块不存在

**错误信息：**

error: dependent module does not exist.

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/hgt4WL2bRVyES-maDIABDQ/zh-cn_image_0000002743077817.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=4671C06F3AA91682640A25052B105306A1DBC4FC812947A7981228FFF45A3BB3)

**错误描述：**

在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: dependent module does not exist”错误信息。

**可能原因：**

运行/调试的应用依赖的动态共享包（SharedLibrary）模块未安装导致安装报错。

**处理步骤：**

  1. 先安装依赖的动态共享包（SharedLibrary）模块，再在应用运行配置页勾选Keep Application Data，点击OK保存配置，再运行/调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/jSJPF9vsSoK9KM0jQ-rMLw/zh-cn_image_0000002713558856.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=52380EF2AF7DDE5C76C89EA051ECE81C78A865400285DB930D8DFD4E5D561029)

  2. 在运行配置页，选择Deploy Multi Hap标签页，勾选Deploy Multi Hap Packages，选择依赖的模块，点击OK保存配置，再进行运行/调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/wjpiKgc-S_mMNz2_heOn_g/zh-cn_image_0000002743197769.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=A7CCE276F29155509093C6B5D12D821ACC3DA7C7AD680FEE7FB18ED8FD038A26)

  3. 单击Run > Edit Configurations，在General中，勾选Auto Dependencies。点击OK保存配置，再运行/调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/1-F1QupZSWCUkIFQ24axSQ/zh-cn_image_0000002713398888.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=C0920C035F360512436707938D38C492358F51CAB65625C720147794EF0395A1)




#### [h2]9568259 安装解析配置文件缺少字段

**错误信息：**

error: install parse profile missing prop.

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/bfSrioZAT0ya_haKa5u1uw/zh-cn_image_0000002743077819.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=F076DFB243E952C3546C04C826DF7420A48A6680709976FFACF3CCF729514588)

**错误描述：**

在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: install parse profile missing prop”错误信息。

**可能原因：**

配置文件app.json5和module.json5中必填字段缺失。

**处理步骤：**

  * 方法1：请参考[app.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-configuration-file)和[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file)查看并补充必填字段。

  * 方法2：通过hilog日志判断缺失字段。

开启落盘命令：
        
        hilog -w start

落盘位置：/data/log/hilog。

打开日志查看“profile prop %{public}s is mission”。如“profile prop icon is mission”表示“icon”字段缺失。




#### [h2]9568258 安装应用的releaseType与已安装应用的releaseType不相同

**错误信息：**

error: install releaseType target not same.

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/ov9circ_RgiRj7rjOwYBPA/zh-cn_image_0000002713558858.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=4E64017C721C0C162616FFA5CF5A21BC85ED2174B29A16B33FB286725FD3FAA8)

**错误描述：**

在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: install releaseType target not same”错误信息。

**可能原因：**

  * 场景一：设备上已安装的旧HAP和现在要安装的新HAP所使用的SDK中的releaseType值不一样。
  * 场景二：安装的应用为多HAP时，每个HAP所使用的SDK中的releaseType值不一致。



**处理��骤：**

  * 场景一：请先卸载设备上已安装的HAP，再安装新的HAP。
  * 场景二：使用相同版本的SDK对HAP重新打包，保证多HAP的releaseType值一致。



#### [h2]9568260 安装内部错误

**错误信息：**

error: install internal error.

**错误描述：**

安装内部错误。

**可能原因：**

安装过程中，内部服务异常。

**处理步骤：**

请尝试重启设备后重新安装。

#### [h2]9568267 entry模块已存在

**错误信息：**

error: install entry already exist.

**错误描述：**

待安装应用的entry模块已存在。

**可能原因：**

多模块应用安装要求entry模块唯一。由于待安装的模块包和已安装的模块包名称不同，但均为entry类型，违反了entry唯一性，导致安装失败。

**处理步骤：**

  1. 请先卸载设备上已安装的HAP，再安装新的HAP。
  2. 检查并确保待安装包的entry模块名称与已安装的entry模块名相同，或把待安装模块的类型改为feature后重试。



#### [h2]9568268 安装状态错误

**错误信息：**

error: install state error.

**错误描述：**

应用安装状态更新失败。

**可能原因：**

由于上一个应用安装包过大耗时长，应用安装时上一个应用安装任务未结束，导致安装状态更新失败。

**处理步骤：**

请等待上一个应用安装完成后再重试。

#### [h2]9568269 文件路径无效

**错误信息：**

error: install file path invalid.

**错误描述：**

安装时传入的安装包路径无效。

**可能原因：**

  1. 安装包路径不存在，如拼写有误等。
  2. 安装包路径长度超过256字节。



**处理步骤：**

  1. 检查安装包的路径是否存在且有访问权限。
  2. 检查安装包路径长度不超过256字节。



#### [h2]9568322 由于应用来源不可信，签名验证失败

**错误信息：**

error: signature verification failed due to not trusted app source.

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0/v3/Lj-e7fmtQJG34o2Oqz9y9g/zh-cn_image_0000002743197771.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=B8E191C43730485B4FE2057D1EC66BA6EF7C3516604239B8C1A4FE64404365AB)

**错误描述：**

在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: signature verification failed due to not trusted app source”错误信息。

**可能原因：**

  * 场景一：签名时使用了[发布profile文件](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090)。发布证书签名的应用不能启动调试或运行。

  * 场景二：签名中未包含该调试设备的UDID。




**处理步骤：**

使用[调试profile文件](https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278)重新签名应用。

#### [h2]9568286 安装应用的签名证书profile文件中的类型与已安装应用的不相同

**错误信息：**

error: install provision type not same.

**错误描述：**

在启动调试或运行应用/服务时，由于安装应用的[Profile签名文件](https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125)中的类型与已安装应用的不相同，导致安装HAP出现错误。

**可能原因：**

设备上已安装应用的签名证书profile文件中的类型与待安装应用不一致。

**处理步骤：**

  1. 确保设备上已安装应用签名证书profile文件中的类型与待安装应用的类型一致，使用相同类型的profile文件签名，再安装新的HAP。
  2. 卸载设备上已安装的应用，再安装新的HAP。



#### [h2]9568288 磁盘空间不足导致安装失败

**错误信息：**

error: install failed due to insufficient disk memory.

**错误描述：**

应用安装时会新建文件或目录，由于设备存储空间不足，创建文件或目录失败，导致应用安装失败。

**可能原因：**

设备存储空间不足，创建文件或目录失败，导致应用安装失败。

**处理步骤：**

查看设备存储空间并清理，保证满足安装所需空间，再重试安装应用。
    
    
    # 查看磁盘空间使用情况
    hdc shell df -h /system
    hdc shell df -h /data

#### [h2]9568289 权限请求失败导致安装失败

**错误信息：**

error: install failed due to grant request permissions failed.

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/xq6Qt8E2S3-PeE_6fyvaIw/zh-cn_image_0000002713398890.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=3E0F89633019F0FB0844518BC3547F65A8690FD05B75BC44F61F345DFA8D50C5)

**错误描述：**

在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: install failed due to grant request permissions failed”错误信息。

**可能原因：**

默认应用等级为normal，只能使用normal等级的权限，如果使用了system_basic或system_core等级的权限，将导致报错。

**处理步骤：**

根据[ACL签名指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)为应用申请受限ACL权限。

#### [h2]9568290 更新HAP token失败导致安装失败

**错误信息：**

error: install failed due to update hap token failed.

**错误描述：**

应用安装过程中，更新HAP时，应用token授权失败。

**可能原因：**

应用安装或更新时，调用元能力的更新token接口，接口返回失败。

**处理步骤：**

  1. 重启手机后再次尝试安装应用。
  2. 重复上述步骤3到5次后依旧安装失败，请导出日志文件提[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)获取帮助。


    
    
    hdc file recv /data/log/hilog/

#### [h2]9568297 由于设备sdk版本较低导致安装失败

**错误信息：**

error: install failed due to older sdk version in the device.

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/KtRi1G0OSF2g69-Y1rUsMA/zh-cn_image_0000002743077821.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=B1643EA1CD45D059D6326F6873E7AE6094144F46F0FF2BCE0DFCA6C79F54B78A)

**错误描述：**

在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: install failed due to older sdk version in the device”错误信息。

**可能原因：**

该问题是由于编译打包所使用的SDK版本与设备镜像版本不匹配。

**处理步骤：**

  * 场景一：设备上的镜像版本低于编译打包的SDK版本，请更新设备镜像版本。查询设备镜像版本命令：
        
        hdc shell param get const.ohos.apiversion

如果镜像提供的api版本为10，且应用编译所使用的SDK版本也为10，仍出现该报错，可能是由于镜像版本较低，未兼容新版本SDK校验规则，请将镜像版本更新为最新版本。

  * 场景二：对于需要运行在HarmonyOS设备上的应用，请确认runtimeOS已改为HarmonyOS。




#### [h2]9568300 应用模块名不唯一导致安装失败

**错误信息：**

error: moduleName is not unique.

**错误描述：**

多模块应用安装过程中，由于模块命名冲突，模块唯一性校验失败，导致安装失败。

**可能原因：**

多模块应用安装过程中，存在模块名称冲突。

**处理步骤：**

查看当前应用所有模块名，与各个模块的module.json5中的name进行比较，保证不一致后，重新打包，进行应用安装。

#### [h2]9568332 签名不一致导致安装失败

**错误信息：**

error: install sign info inconsistent.

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/O3WIg3eQTbqYss_p75vKrQ/zh-cn_image_0000002713558860.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=68EDC590CAEBB5DAB8A4B72D7F61E16F291EC414D376C232100231B4A095060A)

**错误描述：**

在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: install sign info inconsistent”错误信息。

**可能原因：**

  1. 设备上已安装的应用与新安装的应用中签名不一致或者多个包（HAP和HSP）之间的签名存在差异。如果在“Edit Configurations”中勾选了“Keep Application Data”（即不卸载应用，直接覆盖安装），并且重新进行了签名，将导致该报错。
  2. 如果某个应用被卸载但是保留了数据，那么后面安装相同包名的应用时，需要校验其身份信息的一致性。如果两者的签名信息皆不一致，则会导致该报错。



**处理步骤：**

  1. 请卸载设备上已安装的应用，或取消勾选“Keep Application Data”后，重新安装新的应用。
  2. 如果是因不同团队提供的HSP导致签名不一致问题，可以采用[集成态HSP](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/integrated-hsp)的方式统一提供HSP；在多HAP包的情况下，必须确保所有HAP包的签名一致。
  3. 如果某个应用被卸载但是保留了数据，后面安装相同包名但签名信息不一致的应用时，安装失败。如果出现这种情况，则需要把之前已卸载掉的应用重新安装之后，执行不保留数据地卸载，这样相同包名但签名信息不一致的应用才能安装成功。



#### [h2]9568329 签名信息验证失败

**错误信息：**

error: verify signature failed.

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/_eXi8hKDTmCl3xbRyMQghw/zh-cn_image_0000002743197773.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=DBEA6235E0ADF79CD39E2985DF366E275DFCF5A6B03D7B82E9679662C7ABF6D5)

**错误描述：**

签名信息中的包名与应用的包名（bundleName）不一致。

**可能原因：**

  * 场景一：用户导入了三方提供的HSP模块，且该HSP既非[集成态HSP](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/integrated-hsp)，又非同包名的HSP，造成包名不一致。
  * 场景二：用户使用了错误的签名文件（后缀为.p7b）进行签名，造成包名不一致。



**处理步骤：**

  * 场景一：HSP只能给同包名的应用使用，只有集成态HSP可以给不同包名的应用使用。需要用户与三方开发者确认，三方开发者应提供集成态HSP、或同包名的HSP给用户使用。
  * 场景二：检查签名流程和签名证书，参考[配置调试签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)。



#### [h2]9568266 安装权限拒绝

**错误信息：**

error: install permission denied.

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/YMzb_NGDTS2k_xQX8WahLA/zh-cn_image_0000002713398892.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=D441121867DD43EEB6B84C4C917EEF74E162E9AF1DBF14E3CD888F0882ED7EF9)

**错误描述：**

使用hdc install安装HAP时出现错误，提示“code:9568266 error: install permission denied”错误信息。

**可能原因：**

hdc install不能安装release签名的企业应用。

**处理步骤：**

请使用hdc install指令安装调试debug签名的企业应用。

#### [h2]9568337 安装解析失败

**错误信息：**

error: install parse unexpected.

**错误描述：**

应用推送到设备安装时，报错包管理打开hap文件失败。

**可能原因：**

  * 场景一：设备system分区存储空间已满，导致hdc file send文件后，因存储空间不足导致设备中文件损坏。
  * 场景二：推送hap包到设备过程hap包损坏。



**处理步骤：**

  * 场景一：查看设备system分区存储空间，若已满，清理存储满足安装所需空间。
        
        hdc shell df -h /system

  * 场景二：查看本地hap与推送到设备上hap的md5值，若不一致则表示推送过程hap损毁，请尝试重传。




#### [h2]9568316 数据代理中APL权限字段描述权限低

**错误信息：**

error: apl of required permission in proxy data is too low.

**错误描述：**

proxyData标签requiredReadPermission和requiredWritePermission属性验证失败。

**可能原因：**

用户工程module.json中，proxyData标签requiredReadPermission和requiredWritePermission属性验证失败，这两个属性要求system_basic或system_core权限等级。

**处理步骤：**

检查应用定义的proxyData内容是否符合要求，参考[proxyData标签](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file#proxydata标签)。

#### [h2]9568315 数据代理URI错误

**错误信息：**

error: uri in proxy data is wrong.

**错误描述：**

proxyData标签uri属性验证失败。

**可能原因：**

用户工程module.json中，proxyData标签uri属性验证失败，不满足uri格式要求。

**处理步骤：**

检查应用定义的proxyData内容是否符合要求，参考[proxyData标签](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file#proxydata标签)。

#### [h2]9568336 应用调试类型与已安装应用不一致

**错误信息：**

error: install debug type not same.

**错误描述：**

应用调试类型（app.json的debug字段）与已安装应用不一致。

**可能原因：**

开发者使用DevEco Studio的debug按钮安装了应用，后面打包之后又通过hdc install方式安装。

**处理步骤：**

卸载已安装的应用，重新安装新应用。

#### [h2]9568296 包类型错误

**错误信息：**

error: install failed due to error bundle type.

**错误描述：**

bundleType错误导致应用安装失败。

**可能原因：**

新安装应用的bundleType与已安装的有相同bundleName应用不一致。

**处理步骤：**

  * 方法一：卸载已安装的应用，重新安装新应用。
  * 方法二：修改应用的bundleType，与已安装应用保持一致。



#### [h2]9568292 UserID为0的用户只能安装singleton应用

**错误信息：**

error: install failed due to zero user can only install singleton app.

**错误描述：**

UserID 0用户只允许安装singleton权限应用，singleton权限应用只允许被UserID 0用户安装。

**可能原因：**

singleton权限应用安装未指定UserID 0。

**处理步骤：**

应用是singleton权限，安装时指定UserID 0。
    
    
    # 指定userId安装命令
    hdc install -p hap名.hap -u 0

#### [h2]9568263 无法降级安装

**错误信息：**

error: install version downgrade.

**错误描述：**

正在安装应用的VersionCode小于系统中已安装应用的VersionCode，安装失败。

**可能原因：**

正在安装应用的VersionCode小于系统中已安装应用的VersionCode。

**处理步骤：**

卸载已安装的应用，重新安装新应用。

#### [h2]9568301 模块类型不一致

**错误信息：**

error: moduleName is inconsistent.

**错误描述：**

正在安装的模块名称在系统中已经存在，但模块名称不一致，导致安装失败。

**可能原因：**

待安装应用模块名称在系统中已存在，但模块类型不一致，导致安装失败。

**处理步骤：**

检查系统中已安装应用的模块名是否与待安装的模块名重复，若模块名称一致但类型不一致，修改对应模块module.json5中type属性。

#### [h2]9568303 企业设备管理禁止安装

**错误信息：**

error: Failed to install the HAP because the installation is forbidden by enterprise device management.

**错误描述：**

存在应用管控策略，安装失败。

**可能原因：**

存在应用管控策略。

**处理步骤：**

由于企业管控，暂无解决方案。请提[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)获取帮助。

#### [h2]9568304 应用不支持当前设备类型

**错误信息：**

error: device type is not supported.

**错误描述：**

正在安装的应用不支持当前设备类型，安装失败。

**可能原因：**

正在安装的应用不支持当前设备类型。

**处理步骤：**

如需要适配当前设备，请在应用设备类型配置中增加当前设备类型。应用deviceTypes配置包含phone（手机）、tablet（平板）。

#### [h2]9568308 应用包类型不一致

**错误信息：**

error: install bundleType not same.

**错误描述：**

应用包类型不一致，导致安装失败。

**可能原因：**

安装多HAP应用时，存在两个模块的bundleType属性不一致。

**处理步骤：**

检查并确保多HAP应用中各模块app.json5的bundleType属性一致。

#### [h2]9568317 应用的多进程配置与系统配置不匹配

**错误信息：**

error: isolationMode does not match the system.

**错误描述：**

安装应用时，设置的isolationMode与系统配置项允许的系统配置不匹配。

**可能原因：**

  * 场景一：设备支持隔离模式，即persist.bms.supportIsolationMode为true时，HAP配置的isolationMode为nonisolationOnly。
  * 场景二：设备不支持隔离模式，即persist.bms.supportIsolationMode为false时，HAP配置的isolationMode为isolationOnly。



**处理步骤：**

按照设备的隔离模式配置HAP配置文件isolationMode属性。
    
    
    # 查询设备persist.bms.supportIsolationMode值，若返回errNum is:106说明没配置
    hdc shell
    param get persist.bms.supportIsolationMode
    # 配置设备persist.bms.supportIsolationMode值
    hdc shell
    param set persist.bms.supportIsolationMode [true|false]

#### [h2]9568315 数据代理的uri属性错误

**错误信息：**

error: uri in proxy data is wrong.

**错误描述：**

应用module.json文件中proxyData标签的uri属性验证失败。

**可能原因：**

uri不满足格式规范。

**处理步骤：**

确认uri满足格式规范。
    
    
    // uri格式规范
    不同数据代理的uri不可重复，且需要满足datashareproxy://当前应用包名/xxx的格式

#### [h2]9568310 兼容策略不同

**错误信息：**

error: compatible policy not same.

**错误描述：**

新包与已安装包兼容策略不同。

**可能原因：**

  1. 应用已安装，再安装一个同包名的应用间共享库。
  2. 应用间共享库已安装，再安装一个同包名的应用。



**处理步骤：**

卸载已安装的应用或应用间共享库，再安装新包。

#### [h2]9568391 包管理服务已停止

**错误信息：**

error: bundle manager service is died.

**错误描述：**

包管理服务已停止。

**可能原因：**

系统出现未知的异常，导致包管理服务已停止或者异常退出。

**处理步骤：**

  1. 重启手机后再次尝试安装应用。

  2. 重复上述步骤3到5次后依旧安装失败，请查询设备的/data/log/faultlog/faultlogger/目录下是否存在包含foundation字样的crash文件。
         
         hdc shell
         cd /data/log/faultlog/faultlogger/
         ls -ls

  3. 导出crash文件和日志文件提[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)获取帮助。
         
         hdc file recv /data/log/faultlog/faultlogger/
         hdc file recv /data/log/hilog/




#### [h2]9568393 验证代码签名失败

**错误信息：**

error: verify code signature failed.

**错误描述：**

验证代码签名失败。

**可能原因：**

包没有代码签名信息。

**处理步骤：**

安装最新版本DevEco Studio，重新签名。

  1. 应用当前使用的签名不符合HarmonyOS应用签名的要求，应该替换为HarmonyOS应用的签名。



#### [h2]9568399 拷贝文件失败

**错误信息：**

error: copy file failed.

**错误描述：**

安装应用过程中，拷贝文件失败。

**可能原因：**

  1. 拷贝源文件路径或目标路径为无效路径。
  2. 源文件打开失败。
  3. 获取源文件状态失败。
  4. 源文件的大小无效。
  5. 源文件拷贝失败。
  6. 源文件没有访问权限。
  7. 更改文件权限失败。



**处理步骤：**

  1. 重启手机后再次尝试安装应用。
  2. 重复上述步骤3到5次后依旧安装失败，请导出日志文件提[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)获取帮助。


    
    
    hdc file recv /data/log/hilog/

#### [h2]9568401 调试包仅支持运行在开发者模式设备

**错误信息：**

error: debug bundle can only be installed in developer mode.

**错误描述：**

调试包仅支持运行在开发者模式设备。

**可能原因：**

终端设备未开启“开发者模式”。

**处理步骤：**

  1. 终端系统查看“设置 > 系统”中是否有“开发者选项”，如果不存在，可在“设置 > 关于本机”连续七次单击“版本号”，直到提示“开启开发者模式”，点击“确认开启”后输入PIN码（如果已设置），设备将自动重启。
  2. USB数据线连接终端和PC，在“设置 > 系统 > 开发者选项”中，打开“USB调试”开关，弹出的“允许USB调试”的弹框，点击“允许”。
  3. 启动调试或运行应用。



#### [h2]9568404 传递签名配置文件失败

**错误信息：**

error: delivery sign profile failed.

**错误描述：**

安装过程中，传递代码签名配置文件出现异常，导致安装失败。

**可能原因：**

  1. 文件路径不存在。
  2. 创建文件路径失败。
  3. 更改文件目录模式失败。
  4. 写配置文件数据失败。
  5. 更改配置文件模式失败。
  6. 添加配置文件数据失败。



**处理步骤：**

  1. 重启手机后再次尝试安装应用。
  2. 重复上述步骤3到5次后依旧安装失败，请导出日志文件提[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)获取帮助。


    
    
    hdc file recv /data/log/hilog/

#### [h2]9568405 删除签名配置文件失败

**错误信息：**

error: remove sign profile failed.

**错误描述：**

应用卸载过程中，删除签名配置文件出现异常，导致卸载应用失败。

**可能原因：**

  1. 文件路径不存在。
  2. 加载配置文件数据失败。
  3. 文件权限不是可写的。



**处理步骤：**

  1. 重启手机后再次尝试卸载应用。

  2. 重复上述步骤3到5次后依旧卸载失败，请导出日志文件提[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)获取帮助。
         
         hdc file recv /data/log/hilog/




#### [h2]9568386 卸载的应用不存在

**错误信息：**

error: uninstall missing installed bundle.

**错误描述：**

卸载的应用不存在。

**可能原因：**

要卸载的应用没有安装。

**处理步骤：**

确认要卸载的应用是否已经安装。

#### [h2]9568388 企业设备管理不允许卸载该应用

**错误信息：**

error: Failed to uninstall the HAP because the uninstall is forbidden by enterprise device management.

**错误描述：**

企业设备管理不允许卸载该应用。

**可能原因：**

应用被设置为不允许被卸载。

**处理步骤：**

由设置方取消该应用的卸载管控。

#### [h2]9568284 安装版本不匹配

**错误信息：**

error: install version not compatible.

**错误描述：**

安装版本不匹配。

**可能原因：**

当前安装HSP的版本信息与已安装HAP的版本信息不匹配。安装HSP时会做如下校验：

  1. bundleName和HAP的一致。
  2. version和HAP的一致。
  3. 签名和HAP的一致。



**处理步骤：**

  1. 卸载版本信息不匹配的HAP，再安装HSP。
  2. 修改HSP版本信息与HAP一致，再安装HSP。



#### [h2]9568287 安装包entry模块数量不合规

**错误信息：**

error: install invalid number of entry hap.

**错误描述：**

安装包entry模块数量不合规。

**可能原因：**

安装包中entry模块有多个。一个应用只能有一个entry模块，可以有多个feature模块。

**处理步骤：**

保留一个entry模块，其余entry模块修改为feature（修改module.json5中type字段）。

#### [h2]9568281 安装包vendor不一致

**错误信息：**

error: install vendor not same.

**错误描述：**

安装包vendor不一致。

**可能原因：**

app.json5文件中app的vendor字段配置不一致。

**处理步骤：**

  1. 若只有一个HAP，要求与已安装应用vendor字段一致，卸载重装即可。
  2. 若包含集成态HSP，要求集成态HSP与使用方HAP的vendor字段保持一致。



#### [h2]9568272 安装包体积大小无效

**错误信息：**

error: install invalid hap size.

**错误描述：**

安装包大小超出限制。

**可能原因：**

安装包体积超过4GB大小。

**处理步骤：**

拆分包，保证每个安装包体积不超过4GB。

#### [h2]9568273 应用生成UID失败，导致安装失败

**错误信息：**

error: install generate uid error.

**错误描述：**

应用生成UID失败，导致安装失败。

**可能原因：**

该设备上已安装的应用数量已超过65535，导致应用安装时分配UID失败。

**处理步骤：**

卸载不必要的应用后重试。

#### [h2]9568274 安装服务错误

**错误信息：**

error: install installd service error.

**错误描述：**

安装服务错误。

**可能原因：**

安装服务异常。

**处理步骤：**

清除缓存，重启设备。

#### [h2]9568275 包管理服务错误

**错误信息：**

error: install bundle mgr service error.

**错误描述：**

包管理服务错误。

**可能原因：**

包管理服务异常，如出现空指针导致异常等。

**处理步骤：**

重启设备或稍后重试。

#### [h2]9568277 包名不一致，导致安装失败

**错误信息：**

error: install bundle name not same.

**错误描述：**

包名不一致，导致安装失败。

**可能原因：**

待安装的路径下的多个安装包包名不一致。

**处理步骤：**

检查待安装路径下的安装包包名，确保所有安装包的app.json5配置文件中bundleName一致。

#### [h2]9568279 版本不一致，导致安装失败

**错误信息：**

error: install version name not same.

**错误描述：**

版本（versionName字段）不一致，导致安装失败。

**可能原因：**

待安装的路径下的多个安装包的versionName不一致。

**处理步骤：**

检查待安装路径下的安装包版本，确保所有安装包的app.json5配置文件中versionName一致。

#### [h2]9568280 minCompatibleVersionCode不一致，导致安装失败

**错误信息：**

error: install min compatible version code not same.

**错误描述：**

minCompatibleVersionCode字段不一致，导致安装失败。

**可能原因：**

待安装的路径下的多个安装包的minCompatibleVersionCode不一致。

**处理步骤：**

检查待安装路径下的安装包，确保所有安装包的app.json5配置文件中minCompatibleVersionCode一致。

#### [h2]9568282 targetAPIVersion不一致，导致安装失败

**错误信息：**

error: install releaseType target not same.

**错误描述：**

targetAPIVersion字段不一致，导致安装失败。

**可能原因：**

待安装的路径下的多个安装包的targetAPIVersion不一致。

**处理步骤：**

检查待安装路径下的安装包，确保所有安装包的app.json5配置文件中targetAPIVersion一致。

#### [h2]9568314 安装应用间共享库失败

**错误信息：**

error: Failed to install the HSP because installing a shared bundle specified by hapFilePaths is not allowed.

**错误描述：**

安装应用间共享库失败。

**可能原因：**

安装应用间共享HSP时使用“hdc app install ***”指令。

**处理步骤：**

安装应用间HSP时使用hdc install -s ***指令。

#### [h2]9568349 操作文件时传入参数异常

**错误信息：**

error: installd param error.

**错误描述：**

操作文件时传入参数异常，导致安装失败。

**可能原因：**

安装过程中，传入参数无效或者传入目录路径为空。

**处理步骤：**

  1. 重启手机后再次尝试安装应用。
  2. 重复上述步骤3到5次后依旧安装失败，请导出日志文件提[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)获取帮助。


    
    
    # 导出日志文件
    hdc file recv /data/log/hilog/

#### [h2]9568351 创建文件目录异常导致安装失败

**错误信息：**

error: installd create dir failed.

**错误描述：**

创建文件目录异常，导致安装失败。

**可能原因：**

创建文件目录时没有写权限。

**处理步骤：**

  1. 重启手机后再次尝试安装应用。
  2. 重复上述步骤3到5次后依旧安装失败，请导出日志文件提[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)获取帮助。


    
    
    # 导出日志文件
    hdc file recv /data/log/hilog/

#### [h2]9568354 删除文件目录异常导致安装失败

**错误信息：**

error: installd remove dir failed.

**错误描述：**

删除文件目录失败，导致安装失败。

**可能原因：**

删除文件目录不存在，或者当前目录没有可写权限。

**处理步骤：**

  1. 重启手机后再次尝试安装应用。
  2. 重复上述步骤3到5次后依旧安装失败，请导出日志文件提[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)获取帮助。


    
    
    # 导出日志文件
    hdc file recv /data/log/hilog/

#### [h2]9568355 安装包中提取文件失败

**错误信息：**

error: installd extract files failed.

**错误描述：**

安装包中提取文件失败，导致安装失败。

**可能原因：**

安装过程中，解压so的目录创建失败，导致HAP包中提取so失败。

**处理步骤：**

  1. 重启手机后再次尝试安装应用。
  2. 重复上述步骤3到5次后依旧安装失败，请导出日志文件提[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)获取帮助。


    
    
    # 导出日志文件
    hdc file recv /data/log/hilog/

#### [h2]9568356 安装过程中重命名目录名失败

**错误信息：**

error: installd rename dir failed.

**错误描述：**

重命名目录名失败，导致安装失败。

**可能原因：**

安装过程中，重命名目录，目录名称超出260字符，或者当前目录没有可写权限。

**处理步骤：**

  1. 重启手机后再次尝试安装应用。
  2. 重复上述步骤3到5次后依旧安装失败，请导出日志文件提[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)获取帮助。


    
    
    # 导出日志文件
    hdc file recv /data/log/hilog/

#### [h2]9568357 清理文件失败

**错误信息：**

error: installd clean dir failed.

**错误描述：**

清理文件失败，导致安装失败。

**可能原因：**

安装过程中，待清理的文件无可写权限导致清理文件失败。

**处理步骤：**

  1. 重启手机后再次尝试安装应用。
  2. 重复上述步骤3到5次后依旧安装失败，请导出日志文件提[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)获取帮助。


    
    
    # 导出日志文件
    hdc file recv /data/log/hilog/

#### [h2]9568359 安装设置selinux失败

**错误信息：**

error: installd set selinux label failed.

**错误描述：**

安装设置selinux失败。

**可能原因：**

签名配置文件中APL字段错误。APL有“normal”、“system_basic”和“system_core”三种等级。

**处理步骤：**

  1. 确认签名文件p7b中apl字段是否有误。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/RxzFZ7_lRiWO-gjC2eaGvQ/zh-cn_image_0000002743077823.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=28D923EF1FF4ADBE4CB82E48695373F49C9451E5E7247745B5270845E1DE1A82)

  2. 若apl字段有误，修改UnsgnedReleasedProfileTemplate.json文件中apl字段，并重新签名。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/fzH6prViSgmve9LAGw_EDA/zh-cn_image_0000002713558862.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=7B1AA5606FECAE907D37C2932C0E178036B1C12E85C25458A3A6276C9A2F5BF1)




#### [h2]9568403 安装加密校验失败

**错误信息：**

error: check encryption failed.

**错误描述：**

安装加密校验失败。

**可能原因：**

可能是镜像版本较老；或者HAP包lib目录内非so文件导致。

**处理步骤：**

  1. 安装新版本镜像。
  2. 删除HAP工程中lib目录内非so文件，重新签名打包。



#### [h2]9568413 应用设备类型不支持当前设备

**错误信息：**

error: check syscap filed and device type is not supported.

**错误描述：**

应用配置的设备类型不支持安装。

**可能原因：**

应用配置的设备类型和安装设备不一致。

**处理步骤：**

调整正确的设备类型。

#### [h2]9568417 签名校验失败

**错误信息：**

error: bundle cannot be installed because the appId is not same with preinstalled bundle.

**错误描述：**

签名校验失败。

**可能原因：**

安装的应用与已经预置的同包名应用签名不一致。

**处理步骤：**

如果安装的应用是预置应用，需要保证安装应用的签名与预置应用的一致。

#### [h2]9568278 安装包的版本号不一致

**错误信息：**

error: install version code not same.

**可能原因：**

  1. 设备上安装的应用和安装报错的应用包版本号（versionCode）不一致。
  2. 安装多个包中存在版本号（versionCode）不一致。



**处理步骤：**

  1. 调整安装包的版本和设备中已存在的应用包的版本号（versionCode）一致，或者卸载设备中的应用，再去安装新的应用包。
  2. 调整安装的多个包的版本号（versionCode），所有的包都需要保持版本号（versionCode）一致。



#### [h2]9568380 卸载系统应用失败

**错误信息：**

error: uninstall system app error.

**错误描述：**

卸载系统应用失败。

**可能原因：**

部分系统应用设置为不可卸载，不支持卸载此类应用。

**处理步骤：**

不能卸载不可卸载的应用。

#### [h2]9568387 卸载未安装的模块，导致卸载失败

**错误信息：**

error: uninstall missing installed module.

**错误描述：**

卸载未安装的模块。

**可能原因：**

卸载未安装的模块。

**处理步骤：**

使用bm dump -n命令查看应用配置，确认要卸载的模块已经安装。

#### [h2]9568432 插件与应用之间的 pluginDistributionIDs 校验失败，导致安装失败

**错误信息**

error: Check pluginDistributionID between plugin and host application failed.

**错误描述**

应用与插件的 pluginDistributionIDs 之间校验失败。

**可能原因**

应用与插件的 pluginDistributionIDs 没有共同值，导致校验失败。

**处理步骤**

重新配置应用或者插件[Profile签名文件](https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125)中的 pluginDistributionIDs。

#### [h2]9568433 应用缺少ohos.permission.SUPPORT_PLUGIN权限

**错误信息**

error: Failed to install the plugin because host application check permission failed.

**错误描述**

应用安装插件时，应用的权限校验失败。

**可能原因**

应用缺少ohos.permission.SUPPORT_PLUGIN权限。

**处理步骤**

  1. 参考[权限申请指导](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-declare-permissions)申请[ohos.permission.kernel.SUPPORT_PLUGIN权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-restricted-permissions#ohospermissionkernelsupport_plugin)。



#### [h2]9568333 模块名称为空

**错误信息：**

error: Install failed due to hap moduleName is empty.

**错误描述：**

模块名称为空，导致安装失败。

**可能原因：**

模块名称为空。

**处理步骤：**

检查[module.json5](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file)的name字段是否为空。

#### [h2]9568331 签名信息不一致

**错误信息：**

error: Install incompatible signature info.

**错误描述：**

签名信息不一致，导致安装失败。

**可能原因：**

安装多HAP包的应用时，HAP包的签名信息不一致。

**处理步骤：**

重新[签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)，使多个HAP包签名信息一致。

#### [h2]9568334 模块名称重复

**错误信息：**

error: Install failed due to hap moduleName duplicate.

**错误描述：**

模块名称重复，导致安装失败。

**可能原因：**

一个应用同时安装多个模块时，模块名称存在重复。

**处理步骤：**

同一个应用多个模块的名称要保证唯一性。

#### [h2]9568340 配置文件缺失

**错误信息：**

error: Install parse no profile.

**错误描述：**

HAP包没有配置文件，导致安装失败。

**可能原因：**

[module.json、pack.info](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-application-package-structure-stage)等配置文件缺失。

**处理步骤：**

使用DevEco Studio重新构建、打包、安装。

#### [h2]9568341 安装时解析配置文件失败

**错误信息：**

error: Install parse bad profile.

**错误描述：**

安装时解析配置文件失败。

**可能原因：**

[module.json、pack.info](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-application-package-structure-stage)等配置文件格式异常。

**处理步骤：**

使用DevEco Studio重新构建、打包、安装。

#### [h2]9568342 配置文件数据类型错误

**错误信息：**

error: Install parse profile prop type error.

**错误描述：**

安装解析配置文件时，数据类型错误，导致安装失败。

**可能原因：**

[module.json、pack.info](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-application-package-structure-stage)等配置文件存在数据类型错误的字段。

**处理步骤：**

使用DevEco Studio重新构建、打包、安装。

#### [h2]9568345 配置文件中的字符串长度或者数组大小过大

**错误信息：**

error: Too large size of string or array type element in the profile.

**错误描述：**

安装解析配置文件时，字符串长度或者数组大小过大，导致安装失败。

**可能原因：**

[module.json、pack.info](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-application-package-structure-stage)等配置文件存在字符串长度或者数组大小过大的字段。

**处理步骤：**

使用DevEco Studio重新构建、打包、安装。

#### [h2]9568347 解析本地so文件失败

**错误信息：**

error: install parse native so failed.

**错误描述：**

在启动调试或运行C++应用/服务时，安装HAP包出现错误，提示“error: install parse native so failed”错误信息。

**可能原因：**

设备支持的Abi类型与C++工程中配置的Abi类型不匹配。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/F1fx44QvTny_Yx2ETJWFiA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=CC546652727A0EA910203EC7D9F127AD50C2B645E45552AF3E118C8ED7F61F76)

如果工程有依赖HSP或者HAR模块，请确保所有包含C++代码的模块配置的Abi类型包含设备支持的Abi类型。

如果工程依赖的三方库包含so文件，请确保oh_modules/三方库/libs目录包含有设备支持的Abi目录，如libs/arm64-v8a、/libs/x86_64。

对于HarmonyOS应用，在DevEco Studio NEXT Developer Beta1（5.0.3.200）及以上版本不支持编译armeabi-v7a架构的so文件。

**处理步骤：**

  1. 将设备与DevEco Studio进行连接。

  2. 执行如下命令，查询设备支持的Abi列表，返回结果为default/armeabi-v7a/armeabi/arm64-v8a/x86/x86_64中的一个或多个Abi类型。
         
         hdc shell
         param get const.product.cpu.abilist

  3. 根据查询返回结果，检查[模块级build-profile.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile)文件中的

[“abiFilters”参数](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ohos-abi#在编译架构中指定abi)中的配置，规则如下：

     * 若返回结果为default，请执行如下命令，查询是否存在lib64文件夹。
           
           cd /system/
           ls

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/-wKdYd87QLW6y2Jeqh0D3A/zh-cn_image_0000002743197775.png?HW-CC-KV=V1&HW-CC-Date=20260921T084957Z&HW-CC-Expire=86400&HW-CC-Sign=0936EA109BF669AA4318A41C15C7A3C7E245F569841E598A69474B85BB92B3B2)

若存在lib64文件夹：则“abiFilters”参数中需要包含arm64-v8a类型。若不存在lib64文件夹：则“abiFilters”参数中需要至少包含armeabi/armeabi-v7a中的一个类型。

     * 若返回结果为armeabi-v7a/armeabi/arm64-v8a/x86/x86_64中的一个或多个，需要在“abiFilters”参数中至少包含返回结果中的一个Abi类型。




#### [h2]9568348 解析 ark native SO文件失败

**错误信息：**

error: Install parse ark native file failed.

**错误描述：**

安装时，解析 ark native SO文件失败。

**可能原因：**

安装多HAP时，存在Abi不一致，且与当前设备支持的Abi不匹配。

**处理步骤：**

检查多HAP的Abi是否一致，请参考错误码9568347的处理步骤。

#### [h2]9568350 安装时获取代理对象失败

**错误信息：**

error: Installd get proxy error.

**错误描述：**

安装时获取代理对象失败。

**可能原因：**

包管理或其他服务异常，导致获取代理失败。

**处理步骤：**

  1. 重启手机后再次尝试安装应用。
  2. 重复上述步骤3到5次后依旧安装失败，请导出日志文件提[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)获取帮助。


    
    
    # 导出日志文件
    hdc file recv /data/log/hilog/

#### [h2]9568434 设备不具备插件能力

**错误信息**

error: Failed to install the plugin because current device does not support plugin.

**错误描述**

当前设备不具备插件能力，导致安装插件失败。

**可能原因**

设备不具备插件能力。

**处理步骤**

使用[param工具](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-param-tool)设置const.bms.support_plugin的值为true，即执行hdc shell param set const.bms.support_plugin true。

#### [h2]9568435 应用包名不存在

**错误信息**

error: Host application is not found.

**错误描述**

传入的应用包名不存在。

**可能原因**

应用没有安装。

**处理步骤**

检查传入的应用是否存在。

#### [h2]9568436 多个HSP包信息不一致

**错误信息**

error: Failed to install the plugin because they have different configuration information.

**错误描述**

多HSP之间的包信息不一致，导致安装失败。

**可能原因**

安装的插件为多HSP时，多个HSP文件的包信息不一致。

**处理步骤**

检查多HSP之间的包信息是否一致，包括[app.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-configuration-file)中bundleName、bundleType、versionCode、apiReleaseType字段。

#### [h2]9568437 插件的 pluginDistributionIDs 解析失败

**错误信息**

error: Failed to install the plugin because the plugin id failed to be parsed.

**错误描述**

插件的 pluginDistributionIDs 解析失败，导致安装失败。

**可能原因**

插件签名信息中的 pluginDistributionIDs 配置不符合规范，导致解析失败。

**处理步骤**

参考如下格式，重新配置插件profile签名文件中的"app-services-capabilities"字段。
    
    
    "app-services-capabilities":{
        "ohos.permission.kernel.SUPPORT_PLUGIN":{
            "pluginDistributionIDs":"value-1|value-2|···"
        }
    }

#### [h2]9568438 插件包名不存在

**错误信息**

error: The plugin is not found.

**错误描述**

插件不存在。

**可能原因**

当前应用没有安装该插件。

**处理步骤**

使用bm dump -n 命令查询应用的信息，检查传入的插件是否安装。

#### [h2]9568439 插件与应用包名一致

**错误信息**

error: The plugin name is same as host bundle name.

**错误描述**

插件的包名与应用包名相同。

**可能原因**

插件包名与应用包名一致，导致插件安装失败。

**处理步骤**

重新配置插件的包名。

#### [h2]9568441 应用不能变更U1Enabled

**错误信息**

error: install failed due to U1Enabled can not change.

**错误描述**

签名信息中U1Enabled变更导致安装失败。

**可能原因**

应用[Profile签名文件](https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125)中allowed-acls字段的U1Enabled配置发生变更，例如：

  1. 已安装应用在allowed-acls中配置了U1Enabled，待安装应用在allowed-acls中没有配置U1Enabled。
  2. 已安装应用在allowed-acls中没有配置U1Enabled，待安装应用在allowed-acls中配置了U1Enabled。



**处理步骤**

方案一：重新签名，签名过程中，请参考[自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-auto)的支持ACL权限、或者[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)的使用ACL的签名配置指导进行配置，确保待安装应用与已安装应用配置一致。

方案二：先卸载设备上已安装的应用，再尝试安装待安装应用。

#### [h2]9568442 U1Enable配置不一致

**错误信息**

error: Install failed due to the U1Enabled is not same in all haps.

**错误描述**

签名信息中U1Enabled配置不一致，导致安装失败。

**可能原因**

多HAP包签名时使用的[Profile签名文件](https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125)不一致导致签名信息中allowed-acls的U1Enabled配置不一致。

**处理步骤**

重新签名，签名过程中，请参考[自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-auto)的支持ACL权限、或者[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)的使用ACL的签名配置指导进行配置，使多个HAP包签名信息中allowed-acls的U1Enabled信息一致。
