---
name: document/cn/doc-guides/basic-config-file-elements-0000000000034463
title: 配置文件说明(Java)
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/basic-config-file-elements-0000000000034463
source: portal
---

# 配置文件说明(Java)

此部分提供配置文件“config.json”中所有属性的详细解释。

DevEco Studio提供了两种编辑“config.json”文件的方式。在“config.json”的编辑窗口中，可在右上角切换代码编辑视图或可视化编辑视图。

**图1** config.json文件的可视化编辑视图  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113905.58964953838462016300967349262628:50001231000000:2800:6745850D9834F33D574DEB20D122AA66D38E0AE51BE8F2DE738EAB55D2C9DD9B.png?needInitFileName=true?needInitFileName=true)

#### 配置文件的内部结构

“config.json”由“app”、“deviceConfig”和“module”三个部分组成，缺一不可。配置文件的内部结构说明参见表1。

**表1** 配置文件的内部结构说明  属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
app | 表示应用的全局配置信息。同一个应用的不同HAP包的“app”配置必须保持一致。 | 对象 | 否  
deviceConfig | 表示应用在具体设备上的配置信息。 | 对象 | 否  
module | 表示HAP包的配置信息。该标签下的配置只对当前HAP包生效。 | 对象 | 否  
  
#### app对象的内部结构

app对象包含应用的全局配置信息，内部结构说明参见表2。

**表2** app对象的内部结构说明  属性名称 | 子属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---|---  
bundleName | - | 表示应用的包名，用于标识应用的唯一性。 包名是由字母、数字、下划线（_）和点号（.）组成的字符串，必须以字母开头。支持的字符串长度为7~127字节。 包名通常采用反域名形式表示（例如，“com.example.myapplication”）。建议第一级为域名后缀“com”，第二级为厂商/个人名，第三级为应用名，也可以采用多级。 对于原子化服务，其包名必须以“.hmservice”结尾。 例如，“com.example.myapplication.hmservice”。 使用DevEco Studio创建原子化服务（Atomic Service）时，会自动添加“.hmservice”。 说明：  如需使用ohos.data.orm包的接口，则应用的包名不能使用大写字母。 | 字符串 | 否  
vendor | - | 表示对应用开发厂商的描述。字符串长度不超过255字节。 | 字符串 | 可缺省，缺省值为空。  
version | - | 表示应用的版本信息。 | 对象 | 否  
name | 表示应用的版本号，用于向应用的终端用户呈现。取值可以自定义，长度不超过127个字节。自定义规则如下：
     * API 5及更早版本：推荐使用三段式数字版本号（也兼容两段式版本号），如A.B.C（也兼容A.B），其中A、B、C取值为0~999范围内的整数。除此之外不支持其他格式。A段，一般表示主版本号（Major）。 B段，一般表示次版本号（Minor）。 C段，一般表示修订版本号（Patch）。
     * API 6版本起：推荐采用四段式数字版本号，如A.B.C.D，其中A、B、C取值为0~99范围内的整数，D取值为0~999范围内的整数。A段，一般表示主版本号（Major）。 B段，一般表示次版本号（Minor）。 C段，一般表示特性版本号（Feature）。 D段，一般表示修订版本号（Patch）。
| 字符串 | 否  
code | 表示应用的版本号，仅用于HarmonyOS管理该应用，不对应用的终端用户呈现。取值规则如下：
     * API 5及更早版本：二进制32位以内的非负整数，需要从version.name的值转换得到。转换规则为：code值=A×1,000,000 + B×1,000 + C 例如，version.name字段取值为2.2.1，则code的值为2002001。
     * API 6版本起：code的取值不与version.name字段的取值关联，开发者可自定义code的取值，取值范围为小于231的非负整数，但是每次应用的版本更新，均需更新code字段的值，新版本code取值必须大于旧版本code的值。 
| 数值 | 否  
minCompatibleVersionCode | 表示应用可兼容的最低版本号，用于在跨设备场景下，判断其他设备上该应用的版本是否兼容。 格式与version.code字段的格式要求相同。 | 数值 | 可缺省，缺省值为code标签值。  
smartWindowSize | - | 该标签用于在悬浮窗场景下表示应用的模拟窗口的尺寸。 配置格式为“正整数*正整数”，单位为vp。 正整数取值范围为[200,2000]。 | 字符串 | 可缺省，缺省值为空。  
smartWindowDeviceType | - | 表示应用可以在哪些设备上使用模拟窗口打开。 取值为：
     * 智能手机：phone 
     * 平板：tablet 
     * 智慧屏：tv 
| 字符串数组 | 可缺省，缺省值为空。  
targetBundleList | - | 表示允许以免安装方式拉起的其他HarmonyOS应用，列表取值为每个HarmonyOS应用的bundleName，多个bundleName之间用英文“,”区分，最多配置5个bundleName。 如果被拉起的应用不支持免安装方式，则拉起失败。 | 字符串 | 可缺省，缺省值为空。  
  
app示例：
    
    "app": {
        "bundleName": "com.huawei.hiworld.example", 
        "vendor": "huawei", 
        "version": {
            "code": 2, 
            "name": "2.0.0"
        }
    }

#### deviceConfig对象的内部结构

deviceConfig包含在具体设备上的应用配置信息，可以包含default、phone、tablet、tv、car、wearable、liteWearable和smartVision等属性。default标签内的配置是适用于所有设备通用，其他设备类型如果有特殊的需求，则需要在该设备类型的标签下进行配置。内部结构说明参见表3。

**表3** deviceConfig对象的内部结构说明  属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
default | 表示所有设备通用的应用配置信息。 | 对象 | 可缺省，缺省为空  
phone | 表示手机类设备的应用信息配置。 | 对象 | 可缺省，缺省为空  
tablet | 表示平板的应用配置信息。 | 对象 | 可缺省，缺省为空。  
tv | 表示智慧屏特有的应用配置信息。 | 对象 | 可缺省，缺省为空。  
car | 表示车机特有的应用配置信息。 | 对象 | 可缺省，缺省为空。  
wearable | 表示智能穿戴特有的应用配置信息。 | 对象 | 可缺省，缺省为空。  
liteWearable | 表示轻量级智能穿戴特有的应用配置信息。 | 对象 | 可缺省，缺省为空。  
smartVision | 表示智能摄像头特有的应用配置信息。 | 对象 | 可缺省，缺省为空。  
  
default、phone、tablet、tv、car、wearable、liteWearable和smartVision等对象的内部结构说明，可参见表4。

**表4** 不同设备的内部结构说明  属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
jointUserId | 表示应用的共享userid。 通常情况下，不同的应用运行在不同的进程中，应用的资源是无法共享。如果开发者的多个应用之间需要共享资源，则可以通过相同的jointUserId值实现，前提是这些应用的签名相同。 该标签仅对系统应用生效，且仅适用于手机、平板、智慧屏、车机、智能穿戴。 该字段在API Version 3及更高版本不再支持配置。 | 字符串 | 可缺省，缺省为空。  
process | 表示应用或者Ability的进程名。 如果在“deviceConfig”标签下配置了“process”标签，则该应用的所有Ability都运行在这个进程中。 如果在“abilities”标签下也为某个Ability配置了“process”标签，则该Ability就运行在这个进程中。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 字符串 | 可缺省，缺省为应用的软件包名。  
supportBackup | 表示应用是否支持备份和恢复。如果配置为“false”，则不支持为该应用执行备份或恢复操作。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 布尔类型 | 可缺省，缺省为“false”。  
compressNativeLibs | 表示libs库是否以压缩存储的方式打包到HAP包。如果配置为“false”，则libs库以不压缩的方式存储，HAP包在安装时无需解压libs，运行时会直接从HAP内加载libs库。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 布尔类型 | 可缺省，缺省为“true”。  
network | 表示网络安全性配置。该标签允许应用通过配置文件的安全声明来自定义其网络安全，无需修改应用代码。 | 对象 | 可缺省，缺省为空。  
  
**表5** network对象的内部结构说明  属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
cleartextTraffic | 表示是否允许应用使用明文网络流量（例如，明文HTTP）。
     * true：允许应用使用明文流量的请求。 
     * false：拒绝应用使用明文流量的请求。 
| 布尔类型 | 可缺省，缺省为“false”。  
securityConfig | 表示应用的网络安全配置信息。 | 对象 | 可缺省，缺省为空。  
  
**表6** securityConfig对象的内部结构说明  属性名称 | 子属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---|---  
domainSettings | - | 表示自定义的网域范围的安全配置，支持多层嵌套，即一个domainSettings对象中允许嵌套更小网域范围的domainSettings对象**。** | 对象 | 可缺省，缺省为空。  
cleartextPermitted | 表示自定义的网域范围内是否允许明文流量传输。当cleartextTraffic和securityConfig同时存在时，自定义网域是否允许明文流量传输以cleartextPermitted的取值为准。
     * true：允许明文流量传输。 
     * false：拒绝明文流量传输。 
| 布尔类型 | 否  
domains | 表示域名配置信息，包含两个参数：subdomains和name。
     * subdomains（布尔类型）：表示是否包含子域名。如果为 “true”，此网域规则将与相应网域及所有子网域（包括子网域的子网域）匹配。否则，该规则仅适用于精确匹配项。 
     * name（字符串）：表示域名名称。 
| 对象数组 | 否  
  
deviceConfig示例：
    
    "deviceConfig": {
        "default": {
            "process": "com.huawei.hiworld.example", 
            "supportBackup": false,
            "network": {
                "cleartextTraffic": true, 
                "securityConfig": {
                    "domainSettings": {
                        "cleartextPermitted": true, 
                        "domains": [
                            {
                                "subdomains": true, 
                                "name": "example.ohos.com"
                            }
                        ]
                    }
                }
            }
        }
    }

#### module对象的内部结构

module对象包含HAP包的配置信息，内部结构说明参见表7。

**表7** module对象的内部结构说明  属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
mainAbility | 表示HAP包的入口ability名称。该标签的值应配置为“module > abilities”中存在的Page类型ability的名称。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 字符串 | 如果存在page类型的ability，则该字段不可缺省。  
package | 表示HAP的包结构名称，在应用内应保证唯一性。采用反向域名格式（建议与HAP的工程目录保持一致）。字符串长度不超过127字节。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 字符串 | 否  
name | 表示HAP的类名。采用反向域名方式表示，前缀需要与同级的package标签指定的包名一致，也可采用“.”开头的命名方式。字符串长度不超过255字节。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 字符串 | 否  
description | 表示HAP的描述信息。字符串长度不超过255字节。如果字符串超出长度或者需要支持多语言，可以采用资源索引的方式添加描述内容。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 字符串 | 可缺省，缺省值为空。  
supportedModes | 表示应用支持的运行模式。当前只定义了驾驶模式（drive）。 该标签仅适用于车机。 | 字符串数组 | 可缺省，缺省值为空。  
deviceType | 表示允许Ability运行的设备类型。系统预定义的设备类型包括：phone（手机）、tablet（平板）、tv（智慧屏）、car（车机）、wearable（智能穿戴）、liteWearable（轻量级智能穿戴）等。 | 字符串数组 | 否  
distro | 表示HAP发布的具体描述。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 对象 | 否  
metaData | 表示HAP的元信息。 | 对象 | 可缺省，缺省值为空。  
abilities | 表示当前模块内的所有Ability。采用对象数组格式，其中每个元素表示一个Ability对象。 | 对象数组 | 可缺省，缺省值为空。  
js | 表示基于ArkUI框架开发的JS模块集合，其中的每个元素代表一个JS模块的信息。 | 对象数组 | 可缺省，缺省值为空。  
shortcuts | 表示应用的快捷方式信息。采用对象数组格式，其中的每个元素表示一个快捷方式对象。 | 对象数组 | 可缺省，缺省值为空。  
[defPermissions](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/security-permissions-guidelines-0000000000029886#ZH-CN_TOPIC_0000001072906209__table16180174018340) | 表示应用定义的权限。应用调用者必须申请这些权限，才能正常调用该应用。 | 对象数组 | 可缺省，缺省值为空。  
[reqPermissions](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/security-permissions-guidelines-0000000000029886#ZH-CN_TOPIC_0000001072906209__table73291742539) | 表示应用运行时向系统申请的权限。 | 对象数组 | 可缺省，缺省值为空。  
colorMode | 表示应用自身的颜色模式。
     * dark：表示按照深色模式选取资源。 
     * light：表示按照浅色模式选取资源。 
     * auto：表示跟随系统的颜色模式值选取资源。 
该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 字符串 | 可缺省，缺省值为“auto”。  
resizeable | 表示应用是否支持多窗口特性。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 布尔类型 | 可缺省，缺省值为“true”。  
distroFilter | 表示应用的分发规则。 该标签用于定义HAP包对应的细分设备规格的分发策略，以便在应用市场进行云端分发应用包时做精准匹配。 该标签可配置的分发策略维度包括API Version、屏幕形状、屏幕分辨率。在进行分发时，通过deviceType与这三个属性的匹配关系，唯一确定一个用于分发到对应设备的HAP。 | 对象 | 可缺省。缺省值为空。但当应用中包含多个entry模块时，必须配置该标签。  
  
module示例：
    
    "module": {
        "mainAbility": "MainAbility",
        "package": "com.example.myapplication.entry", 
        "name": ".MyOHOSAbilityPackage", 
        "description": "$string:description_application", 
        "supportedModes": [
            "drive"
        ], 
        "deviceType": [
            "car"
        ], 
        "distro": {
            "deliveryWithInstall": true, 
            "moduleName": "ohos_entry", 
            "moduleType": "entry"
        }, 
        "abilities": [
            ...
        ], 
        "shortcuts": [
            ...
        ],
        "js": [
            ...
        ], 
        "reqPermissions": [
            ...
        ], 
        "defPermissions": [
            ...
        ],
        "colorMode": "light"
    }

**表8** distro对象的内部结构说明  属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
deliveryWithInstall | 表示当前HAP是否支持随应用安装。
     * true：支持随应用安装。 
     * false：不支持随应用安装。 
说明：  该属性建议设置为true。 设置false可能导致最终应用上架应用市场异常。 | 布尔类型 | 否  
moduleName | 表示当前HAP的名称。 | 字符串 | 否  
moduleType | 表示当前HAP的类型，包括两种类型：[entry](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/basic-fundamentals-0000000000041611#ZH-CN_TOPIC_0000001063248002__li2196104218714)和[feature](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/basic-fundamentals-0000000000041611#ZH-CN_TOPIC_0000001063248002__li1419684215718)。 另外，如果表示HAR类型，请设置为[har](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/basic-fundamentals-0000000000041611#section11523202918216)。 | 字符串 | 否  
installationFree | 表示当前HAP是否支持免安装特性。
     * true：表示支持免安装特性，且符合免安装约束。 
     * false：表示不支持免安装特性。 
另外还需注意：
     * 当entry.hap该字段配置为true时，与该entry.hap相关的所有feature.hap该字段也需要配置为true。 
     * 当entry.hap该字段配置为false时，与该entry.hap相关的各feature.hap该字段可按业务需求配置true或false。 
| 布尔类型 | 否  
  
distro示例：
    
    "distro": {
        "deliveryWithInstall": true, 
        "moduleName": "ohos_entry", 
        "moduleType": "entry",
        "installationFree": true
    } 

**表9** metaData对象的内部结构说明  属性名称 | 子属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---|---  
parameters | - | 表示调用Ability时所有调用参数的元信息。每个调用参数的元信息由以下三个标签组成：description、name、type。 | 对象 | 可缺省，缺省值为空。  
description | 表示对调用参数的描述，可以是表示描述内容的字符串，也可以是对描述内容的资源索引以支持多语言。 | 字符串 | 可缺省，缺省值为空。  
name | 表示调用参数的名称。 | 字符串 | 可缺省，缺省值为空。  
type | 表示调用参数的类型，如Integer。 | 字符串 | 否  
results | - | 表示Ability返回值的元信息。每个返回值的元信息由以下三个标签组成：description、name、type。 | 对象 | 可缺省，缺省值为空。  
description | 表示对返回值的描述，可以是表示描述内容的字符串，也可以是对描述内容的资源索引以支持多语言。 | 字符串 | 可缺省，缺省值为空。  
name | 表示返回值的名字。 | 字符串 | 可缺省，缺省值为空。  
type | 表示返回值的类型，如Integer。 | 字符串 | 否  
customizeData | - | 表示父级组件的自定义元信息，parameters和results在module中不可配。 | 对象 | 可缺省，缺省值为空。  
name | 表示数据项的键名称，字符串类型（最大长度255字节）。 | 字符串 | 可缺省，缺省值为空。  
value | 表示数据项的值，字符串类型（最大长度255字节）。 | 字符串 | 可缺省，缺省值为空。  
extra | 表示用户自定义数据格式，标签值为标识该数据的资源的索引值。 | 字符串 | 可缺省，缺省值为空。  
  
metaData示例：
    
    "metaData": {
        "parameters" : [{
            "name" : "string",
            "type" : "Float",
            "description" : "$string:parameters_description"
        }],
        "results" : [{
            "name" : "string",
            "type" : "Float",
            "description" : "$string:results_description"
        }],
        "customizeData" : [{
            "name" : "string",
            "value" : "string",
            "extra" : "$string:customizeData_description"
        }]
    }

**表10** abilities对象的内部结构说明  属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
name | 表示Ability名称。取值可采用反向域名方式表示，由包名和类名组成，如“com.example.myapplication.MainAbility”；也可采用“.”开头的类名方式表示，如“.MainAbility”。 Ability的名称，需在一个应用的范围内保证唯一。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 说明：  在使用DevEco Studio新建项目时，默认生成首个Ability的配置，包括生成“MainAbility.java”文件，及“config.json”中“MainAbility”的配置。如使用其他IDE工具，可自定义名称。 | 字符串 | 否  
description | 表示对Ability的描述。取值可以是描述性内容，也可以是对描述性内容的资源索引，以支持多语言。 | 字符串 | 可缺省，缺省值为空。  
icon | 表示Ability图标资源文件的索引。取值示例：$media:ability_icon。 如果在该Ability的“skills”属性中，“actions”的取值包含 “action.system.home”，“entities”取值中包含“entity.system.home”，则该Ability的icon将同时作为应用的icon。如果存在多个符合条件的Ability，则取位置靠前的Ability的icon作为应用的icon。 说明：  应用的“icon”和“label”是用户可感知配置项，需要区别于当前所有已有的应用“icon”或“label”（至少有一个不同）。 | 字符串 | 可缺省，缺省值为空。  
label | 表示Ability对用户显示的名称。取值可以是Ability名称，也可以是对该名称的资源索引，以支持多语言。 如果在该Ability的“skills”属性中，“actions”的取值包含 “action.system.home”，“entities”取值中包含“entity.system.home”，则该Ability的label将同时作为应用的label。如果存在多个符合条件的Ability，则取位置靠前的Ability的label作为应用的label。 说明：  应用的“icon”和“label”是用户可感知配置项，需要区别于当前所有已有的应用“icon”或“label”（至少有一个不同）。 | 字符串 | 可缺省，缺省值为空。  
uri | 表示Ability的统一资源标识符。格式为[scheme:][//authority][path][?query][#fragment]。 | 字符串 | 可缺省，对于data类型的Ability不可缺省。  
launchType | 表示Ability的启动模式，支持“standard”、“singleMission”和“singleton”三种模式：
     * standard：表示该Ability可以有多实例。“standard”模式适用于大多数应用场景。 
     * singleMission：表示此Ability在每个任务栈中只能有一个实例。 
     * singleton：表示该Ability在所有任务栈中仅可以有一个实例。例如，具有全局唯一性的呼叫来电界面即采用“singleton”模式。 
该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 字符串 | 可缺省，缺省值为“standard”。  
visible | 表示Ability是否可以被其他应用调用。
     * true：可以被其他应用调用。 
     * false：不能被其他应用调用。 
| 布尔类型 | 可缺省，缺省值为“false”。  
permissions | 表示其他应用的Ability调用此Ability时需要申请的权限。通常采用反向域名格式，取值可以是系统预定义的权限，也可以是开发者自定义的权限。如果是自定义权限，取值必须与“defPermissions”标签中定义的某个权限的“name”标签值一致。 | 字符串数组 | 可缺省，缺省值为空。  
skills | 表示Ability能够接收的Intent的特征。 | 对象数组 | 可缺省，缺省值为空。  
deviceCapability | 表示Ability运行时要求设备具有的能力，采用字符串数组的格式表示。 | 字符串数组 | 可缺省，缺省值为空。  
metaData | 表示Ability的元信息。
     * 调用Ability时调用参数的元信息，例如：参数个数和类型。 
     * Ability执行完毕返回值的元信息，例如：返回值个数和类型。 
该标签仅适用于智慧屏、智能穿戴、车机。 | 对象 | 可缺省，缺省值为空。  
type | 表示Ability的类型。取值范围如下：
     * page：表示基于Page模板开发的FA，用于提供与用户交互的能力。 
     * service：表示基于Service模板开发的PA，用于提供后台运行任务的能力。 
     * data：表示基于Data模板开发的PA，用于对外部提供统一的数据访问抽象。 
     * CA：表示支持其他应用以窗口方式调起该Ability。 
| 字符串 | 否  
orientation | 表示该Ability的显示模式。该标签仅适用于page类型的Ability。取值范围如下：
     * unspecified：由系统自动判断显示方向。 
     * landscape：横屏模式。 
     * portrait：竖屏模式。 
     * followRecent：跟随栈中最近的应用。 
| 字符串 | 可缺省，缺省值为“unspecified”。  
backgroundModes | 表示后台服务的类型，可以为一个服务配置多个后台服务类型。该标签仅适用于service类型的Ability。取值范围如下：
     * dataTransfer：通过网络/对端设备进行数据下载、备份、分享、传输等业务。 
     * audioPlayback：音频输出业务。 
     * audioRecording：音频输入业务。 
     * pictureInPicture：画中画、小窗口播放视频业务。 
     * voip：音视频电话、VOIP业务。 
     * location：定位、导航业务。 
     * bluetoothInteraction：蓝牙扫描、连接、传输业务。 
     * wifiInteraction：WLAN扫描、连接、传输业务。 
     * screenFetch：录屏、截屏业务。 
     * multiDeviceConnection：多设备互联业务 
| 字符串数组 | 可缺省，缺省值为空。  
readPermission | 表示读取Ability的数据所需的权限。该标签仅适用于data类型的Ability。取值为长度不超过255字节的字符串。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 字符串 | 可缺省，缺省为空。  
writePermission | 表示向Ability写数据所需的权限。该标签仅适用于data类型的Ability。取值为长度不超过255字节的字符串。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 字符串 | 可缺省，缺省为空。  
configChanges | 表示Ability关注的系统配置集合。当已关注的配置发生变更后，Ability会收到onConfigurationUpdated回调。取值范围：
     * mcc：表示IMSI移动设备国家/地区代码（MCC）发生变更。典型场景：检测到SIM并更新MCC。
     * mnc：IMSI移动设备网络代码（MNC）发生变更。典型场景：检测到SIM并更新MNC。
     * locale：表示语言区域发生变更。典型场景：用户已为设备文本的文本显示选择新的语言类型。
     * layout：表示屏幕布局发生变更。典型场景：当前有不同的显示形态都处于活跃状态。
     * fontSize：表示字号发生变更。典型场景：用户已设置新的全局字号。
     * orientation：表示屏幕方向发生变更。典型场景：用户旋转设备。
     * density：表示显示密度发生变更。典型场景：用户可能指定不同的显示比例，或当前有不同的显示形态同时处于活跃状态。
     * size：显示窗口大小发生变更。 
     * smallestSize：显示窗口较短边的边长发生变更。 
     * colorMode：颜色模式发生变更。 
| 字符串数组 | 可缺省，缺省为空。  
mission | 表示Ability指定的任务栈。该标签仅适用于page类型的Ability。默认情况下应用中所有Ability同属一个任务栈。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 字符串 | 可缺省，缺省为应用的包名。  
targetAbility | 表示当前Ability重用的目标Ability。该标签仅适用于page类型的Ability。如果配置了targetAbility属性，则当前Ability（即别名Ability）的属性中仅“name”、“icon”、“label”、“visible”、“permissions”、“skills”生效，其它属性均沿用targetAbility中的属性值。目标Ability必须与别名Ability在同一应用中，且在配置文件中目标Ability必须在别名之前进行声明。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 字符串 | 可缺省，缺省值为空。表示当前Ability不是一个别名Ability。  
multiUserShared | 表示Ability是否支持多用户状态进行共享，该标签仅适用于data类型的Ability。 配置为“true”时，表示在多用户下只有一份存储数据。需要注意的是，该属性会使visible属性失效。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 布尔类型 | 可缺省，缺省值为“false”。  
supportPipMode | 表示Ability是否支持用户进入PIP模式（用于在页面最上层悬浮小窗口，俗称“画中画”，常见于视频播放等场景）。该标签仅适用于page类型的Ability。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 布尔类型 | 可缺省，缺省值为“false”。  
formsEnabled | 表示Ability是否支持卡片（forms）功能。该标签仅适用于page类型的Ability。
     * true：支持卡片能力。 
     * false：不支持卡片能力。 
| 布尔类型 | 可缺省，缺省值为“false”。  
forms | 表示服务卡片的属性。该标签仅当“formsEnabled”为“true”时，才能生效。 | 对象数组 | 可缺省，缺省值为空。  
resizeable | 表示Ability是否支持多窗口特性。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 布尔类型 | 可缺省，缺省值为“true”。  
  
abilities示例：
    
    "abilities": [
        {
            "name": ".MainAbility",
            "description": "himusic main ability",
            "icon": "$media:ic_launcher",
            "label": "HiMusic",
            "launchType": "standard",
            "orientation": "unspecified",
            "permissions": [
            ], 
            "visible": true,
            "skills": [
                {
                    "actions": [
                        "action.system.home"
                    ],
                    "entities": [
                        "entity.system.home"
                    ]
                }
            ],
            "configChanges": [
                "locale", 
                "layout", 
                "fontSize", 
                "orientation"
            ], 
            "type": "page"
        },
        {
            "name": ".PlayService",
            "description": "himusic play ability",
            "icon": "$media:ic_launcher",
            "label": "HiMusic",
            "launchType": "standard",
            "orientation": "unspecified",
            "visible": false,
            "skills": [
                {
                    "actions": [
                        "action.play.music",
                        "action.stop.music"
                    ],
                    "entities": [
                        "entity.audio"
                    ]
                }
            ],
            "type": "service",
            "backgroundModes": [
                "audioPlayback"
            ]
        },
        {
            "name": ".UserADataAbility",
            "type": "data",
            "uri": "dataability://com.huawei.hiworld.himusic.UserADataAbility",
            "visible": true
        }
    ]

**表11** skills对象的内部结构说明  属性名称 | 子属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---|---  
actions | - | 表示能够接收的Intent的action值，可以包含一个或多个action。 取值通常为系统预定义的action值，详见《API参考》中的ohos.aafwk.content.Intent类。 | 字符串数组 | 可缺省，缺省值为空。  
entities | - | 表示能够接收的Intent的Ability的类别（如视频、桌面应用等），可以包含一个或多个entity。 取值通常为系统预定义的类别，详见《API参考》中的ohos.aafwk.content.Intent类，也可以自定义。 | 字符串数组 | 可缺省，缺省值为空。  
uris | - | 表示能够接收的Intent的uri，可以包含一个或者多个uri。 | 对象数组 | 可缺省，缺省值为空。  
scheme | 表示uri的scheme值。 | 字符串 | 不可缺省。  
host | 表示uri的host值。 | 字符串 | 可缺省，缺省值为空。  
port | 表示uri的port值。 | 字符串 | 可缺省，缺省值为空。  
path | 表示uri的path值。 | 字符串 | 可缺省，缺省值为空。  
type | 表示uri的type值。 | 字符串 | 可缺省，缺省值为空。  
  
skills示例：
    
    "skills": [
        {
            "actions": [
                "action.system.home"
            ], 
            "entities": [
                "entity.system.home"
            ],
            "uris": [
                {
                     "scheme": "http",
                     "host": "www.xxx.com",
                     "port": "8080",
                     "path": "query/student/name",
                     "type": "text/*"
                 }
             ]
        }
    ]

**表12** js对象的内部结构说明  属性名称 | 子属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---|---  
name | - | 表示JS Component的名字。该标签不可缺省，默认值为".default"。 | 字符串 | 否  
pages | - | 表示JS Component的页面。用于列举JS Component中每个页面的路由信息[页面路径+页面名称]。该标签不可缺省，取值为数组，数组第一个元素代表JS FA首页。 | 数组 | 否  
window | - | 用于定义与显示窗口相关的配置。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 | 对象 | 可缺省。  
designWidth | 表示页面设计基准宽度。以此为基准，根据实际设备宽度来缩放元素大小。 | 数值 | 可缺省，缺省值为720px。  
autoDesignWidth | 表示页面设计基准宽度是否自动计算。当配置为true时，designWidth将会被忽略，设计基准宽度由设备宽度与屏幕密度计算得出。 | 布尔类型 | 可缺省，缺省值为“false”。  
type | - | 表示JS应用的类型。取值范围如下：
     * normal：标识该JS Component为应用实例。 
     * form：标识该JS Component为卡片实例。 
| 字符串 | 可缺省，缺省值为“normal”。  
mode | - | 用于定义JS Component的开发模式。该标签可缺省，标签值为对象，包含type和syntax两个子标签。 该标签仅适用于手机、平板、智慧屏、车机、智能穿戴。 mode属性，其优先级高于type属性。 该属性从API Version 6开始支持。 | 对象 | 是  
type | 定义该JS Component的功能类型。支持以下类型：
     * pageAbility：表示该JS Component运行在当前应用的Page类型的Ability上 
     * form：表示该JS Component作为卡片运行在卡片宿主应用内。 
| 字符串 | 可缺省，缺省值为“pageAbility”。  
syntax | 定义该JS Component的语法类型。支持以下类型：
     * hml：表示该JS Component使用hml/css/js语法进行开发。 
     * ets：该JS Component使用ArkTS声明式语法进行开发。 
当type设置为form类型时，syntax仅可选择hml语法类型。 | 字符串 | 可缺省，缺省值为“hml”。  
  
js示例：
    
    "js": [
        {
            "name": ".default", 
            "pages": [            
                "pages/index/index",
                "pages/detail/detail"
            ],         
            "window": {
                "designWidth": 720,
                "autoDesignWidth": false
            },
            "type": "form",
            "mode": {
                "type": form,
                "syntax": hml
            }
        }
    ]

**表13** shortcuts对象的内部结构说明  属性名称 | 子属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---|---  
shortcutId | - | 表示快捷方式的ID。字符串的最大长度为63字节。 | 字符串 | 否  
label | - | 表示快捷方式的标签信息，即快捷方式对外显示的文字描述信息。取值可以是描述性内容，也可以是标识label的资源索引。字符串最大长度为63字节。 | 字符串 | 可缺省，缺省为空。  
intents | - | 表示快捷方式内定义的目标intent信息集合，每个intent可配置两个子标签，targetClass, targetBundle。 | 对象数组 | 可缺省，缺省为空。  
targetClass | 表示快捷方式目标类名。 | 字符串 | 可缺省，缺省值为空。  
targetBundle | 表示快捷方式目标Ability所在应用的包名。 | 字符串 | 可缺省，缺省值为空。  
  
shortcuts示例：
    
    "shortcuts": [
        {
            "shortcutId": "id",
            "label": "$string:shortcut",
            "intents": [
                {
                    "targetBundle": "com.huawei.hiworld.himusic",
                    "targetClass": "com.huawei.hiworld.himusic.entry.MainAbility"
                }
            ]
        }
    ]

**表14** forms对象的内部结构说明  属性名称 | 子属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---|---  
name | - | 表示卡片的类名。字符串最大长度为127字节。 | 字符串 | 否  
description | - | 表示卡片的描述。取值可以是描述性内容，也可以是对描述性内容的资源索引，以支持多语言。字符串最大长度为255字节。 | 字符串 | 可缺省，缺省为空。  
isDefault | - | 表示该卡片是否为默认卡片，每个Ability有且只有一个默认卡片。
     * true：默认卡片。 
     * false：非默认卡片。 
| 布尔值 | 否  
type | - | 表示卡片的类型。取值范围如下：
     * Java：Java卡片。 
     * JS：JS卡片。 
| 字符串 | 否  
colorMode | - | 表示卡片的主题样式，取值范围如下：
     * auto：自适应。 
     * dark：深色主题。 
     * light：浅色主题。 
| 字符串 | 可缺省，缺省值为“auto”。  
supportDimensions | - | 表示卡片支持的外观规格，取值范围：
     * 1*2：表示1行2列的二宫格。 
     * 2*2：表示2行2列的四宫格。 
     * 2*4：表示2行4列的八宫格。 
     * 4*4：表示4行4列的十六宫格。 
| 字符串数组 | 否  
defaultDimension | - | 表示卡片的默认外观规格，取值必须在该卡片supportDimensions配置的列表中。 | 字符串 | 否  
landscapeLayouts | - | 表示卡片外观规格对应的横向布局文件，与supportDimensions中的规格一一对应。 仅当卡片类型为Java卡片时，需要配置该标签。 | 字符串数组 | 否  
portraitLayouts | - | 表示卡片外观规格对应的竖向布局文件，与supportDimensions中的规格一一对应。 仅当卡片类型为Java卡片时，需要配置该标签。 | 字符串数组 | 否  
updateEnabled | - | 表示卡片是否支持周期性刷新，取值范围：
     * true：表示支持周期性刷新，可以在定时刷新（updateDuration）和定点刷新（scheduledUpdateTime）两种方式任选其一，优先选择定时刷新。 
     * false：表示不支持周期性刷新。 
| 布尔类型 | 否  
scheduledUpdateTime | - | 表示卡片的定点刷新的时刻，采用24小时制，精确到分钟。 | 字符串 | 可缺省，缺省值为“0:0”。  
updateDuration | - | 表示卡片定时刷新的更新周期，单位为30分钟，取值为自然数。
     * 当取值为0时，表示该参数不生效。 
     * 当取值为正整数N时，表示刷新周期为30*N分钟。 
| 数值 | 可缺省，缺省值为“0”。  
formConfigAbility | - | 表示卡片的配置跳转链接，采用URI格式。 | 字符串 | 可缺省，缺省值为空。  
jsComponentName | - | 表示JS卡片的Component名称。字符串最大长度为127字节。 仅当卡片类型为JS卡片时，需要配置该标签。 | 字符串 | 否  
metaData | - | 表示卡片的自定义信息，包含customizeData数组标签。 | 对象 | 可缺省，缺省值为空。  
customizeData | - | 表示自定义的卡片信息。 | 对象数组 | 可缺省，缺省值为空。  
name | 表示数据项的键名称。字符串最大长度为255字节。 | 字符串 | 可缺省，缺省值为空。  
value | 表示数据项的值。字符串最大长度为255字节。 | 字符串 | 可缺省，缺省值为空。  
  
forms示例：
    
    "forms": [
        {
            "name": "Form_Js",
            "description": "It's Js Form",
            "type": "JS",
            "jsComponentName": "card",
            "colorMode": "auto",
            "isDefault": true,
            "updateEnabled": true,
            "scheduledUpdateTime": "11:00",
            "updateDuration": 1,
            "defaultDimension": "2*2",
            "supportDimensions": [
                "2*2",
                "2*4",
                "4*4"
            ]
        },
        {
            "name": "Form_Java",
            "description": "It's Java Form",
            "type": "Java",
            "colorMode": "auto",
            "isDefault": false,
            "updateEnabled": true,
            "scheduledUpdateTime": "21:05",
            "updateDuration": 1,
            "defaultDimension": "1*2",
            "supportDimensions": [
                "1*2"
            ],
            "landscapeLayouts": [
                "$layout:ability_form"
            ],
            "portraitLayouts": [
                "$layout:ability_form"
            ],
            "formConfigAbility": "ability://com.example.myapplication.fa/.MainAbility",
            "metaData": {
                "customizeData": [
                    {
                        "name": "originWidgetName",
                        "value": "com.huawei.weather.testWidget"
                    }
                ]
            }
        }
    ]

**表15** distroFilter对象的内部结构说明  属性名称 | 子属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---|---  
apiVersion | - | 表示支持的apiVersion范围。 | 对象 | 可选  
policy | 表示该子属性取值的黑白名单规则。配置为“exclude”或“include”。“include”表示该字段取值为白名单，满足value枚举值匹配规则的表示匹配该属性。 | 字符串  
value | 支持的取值为API Version存在的整数值，例如4、5、6。 场景示例：某应用，针对相同设备型号，同时在网的为使用API 5和API 6开发的两个软件版本，则允许上架2个entry类型的安装包，分别支持到对应设备侧软件版本的分发 _。_ | 数组  
screenShape | - | 表示屏幕形状的支持策略。 | 对象 | 可选  
policy | 表示该子属性取值的黑白名单规则。配置为“exclude”或“include”。“include”表示该字段取值为白名单，满足value枚举值匹配规则的表示匹配该属性。 | 字符串  
value | 支持的取值为circle（圆形）、rect（矩形）。 场景示例：针对智能穿戴设备，可为圆形表盘和矩形表盘分别提供不同的HAP。 | 字符串数组  
screenWindow | - | 表示应用运行时窗口的分辨率支持策略。 该字段仅支持对轻量级智能穿戴设备进行配置。 | 对象 | 可选  
policy | 表示该子属性取值的黑白名单规则。配置为“exclude”或“include”。“include”表示该字段取值为白名单，满足value枚举值匹配规则的表示匹配该属性。 该字段仅支持配置白名单，即“include”。 | 字符串  
value | 单个字符串的取值格式为：“宽*高”，取值为整数像素值，例如“454*454”。 | 字符串数组  
  
distroFilter示例：
    
    "distroFilter": 
    {
        "apiVersion": {
            "policy": "include",
            "value": [4,5]
        },
        "screenShape": {
            "policy": "include",
            "value": ["circle","rect"]
        },
        "screenWindow": {
            "policy": "include",
            "value": ["454*454","466*466"]
        }
    }

#### HAP与HAR的配置文件的合并

如果应用模块中调用了HAR，在编译构建HAP时，需要将HAP的“config.json”文件与一个或多个HAR的“config.json”文件，合并为一个“config.json”文件。在合并过程中，不同文件的同一个标签的取值可能发生冲突，此时，需要通过配置mergeRule来解决冲突。

#### [h2]配置文件合并规则

HAP与HAR的“config.json”文件合并时，需要将HAR的配置信息全部合并到HAP的配置文件。合并规则参见表16**。**

HAP的优先级总是高于HAR。当HAP依赖于多个HAR时，先加载的HAR的优先级高于后加载的HAR，按照HAR的加载顺序依次合并到HAP文件。 

**表16** 配置文件合并规则  序号 | HAP | HAR | **合并结果**  
---|---|---|---  
1 | 无标签值。 | 无标签值。 | 无标签值。  
2 | 有标签值，取值为A。 | 无标签值。 | 有标签值，取值为A。  
3 | 无标签值。 | 有标签值，取值为B。 | 有标签值，取值为B。  
4 | 有标签值，取值为A。 | 有标签值，取值为A。 | 有标签值，取值为A。  
5 | 有标签值，取值为A。 | 有标签值，取值为B。 | 冲突，需要添加mergeRule，详见mergeRule对象的使用。  
  
#### [h2]mergeRule对象的使用

mergeRule通常在HAP的“config.json”文件中使用，可以在“abilities”、“defPermissions”、 “reqPermissions”、“js”等属性中添加。不同属性的合并策略，详见表17。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113905.87241102539803000933695530656175:50001231000000:2800:58C3D3C281F85E54051448179A0D9915A3BB38A076ADAB55748F2E56766F3886.png?needInitFileName=true?needInitFileName=true)

     * HAR配置文件中不能包含“action.system.home”和“entity.system.home”配置项，否则会导致编译报错。 
     * abilities对象中“name”字段的取值，必须为完整的类名，否则会导致合并出错。 

**表17** 属性合并规则  属性名称 | **合并规则**  
---|---  
一级 | 二级 | 三级  
app | - | - | 只保留HAP的“config.json”文件中的app对象。  
deviceConfig | - | - | 只保留HAP的“config.json”文件中的deviceConfig对象。  
module | package | - | 只保留HAP的“config.json”文件中的取值。  
name | - | 只保留HAP的“config.json”文件中的取值。  
description | - | 只保留HAP的“config.json”文件中的取值。  
supportedModes | - | 只保留HAP的“config.json”文件中的取值。  
deviceType | - | 只保留HAP的“config.json”文件中的取值。  
distro | - | 只保留HAP的“config.json”文件中的取值。  
shortcuts | - | 只保留HAP的“config.json”文件中的取值。  
defPermissions | - | 
     * 当“module”中的“name”取值不同时，取值为HAP与HAR的“config.json”文件的并集。 
     * 当“module”中的“name”取值相同时，需要在HAP的“config.json”文件中的相应属性下添加mergeRule字段，以解决合并冲突。   
reqPermissions | - | 
     * 当“module”中的“name”取值不同时，取值为HAP与HAR的“config.json”文件的并集。 
     * 当“module”中的“name”取值相同时，需要在HAP的“config.json”文件中的相应属性下添加mergeRule字段，以解决合并冲突。   
js | - | 
     * 当“module”中的“name”取值不同时，取值为HAP与HAR的“config.json”文件的并集。 
     * 当“module”中的“name”取值相同时，需要在HAP的“config.json”文件中的相应属性下添加mergeRule字段，以解决合并冲突。   
abilities | - | 
     * 当“module”中的“name”取值不同时，取值为HAP与HAR的“config.json”文件的并集。 
     * 当“module”中的“name”取值相同时，需要在HAP的“config.json”文件中的相应属性下添加mergeRule字段，以解决合并冲突。   
permissions | 取值为HAP与HAR的“config.json”文件中相应属性值的并集。  
skills | 取值为HAP与HAR的“config.json”文件中相应属性值的并集。  
backgroundModes | 取值为HAP与HAR的“config.json”文件中相应属性值的并集。  
configChanges | 取值为HAP与HAR的“config.json”文件中相应属性值的并集。  
targetAbility | 如果“targetAbility”与“abilities”中的“name”冲突，则导致编译报错。  
其他 | “abilities”中的其他属性如果发生合并冲突，则需要添加“mergeRule”字段。  
  
**表18** mergeRule对象的内部结构说明  属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
remove | 表示HAP与HAR的“config.json”文件合并时，需要移除的标签。 | 字符串数组 | 是  
replace | 表示HAP与HAR的“config.json”文件合并冲突时，需要替换的标签，始终保留高优先级的值。 | 字符串数组 | 是  
  
**mergeRule的使用示例：**

在下面的示例中，HAP与HAR中的Ability的“name”取值相同，需要对两者“config.json”文件中的Ability进行合并。由于两个文件中的部分字段（例如“launchType”）存在冲突，需要在HAP的“abilities”标签下添加“mergeRule”。

     1. 合并前HAP的“config.json”文件，如下所示：

其中，remove表示合并后需要移除的子标签，replace表示合并后需要替换的子标签（HAP替换HAR）。
            
            "abilities": [
                {
                    "mergeRule": {
                        "remove": ["orientation"],
                        "replace": ["launchType"]
                    }
                    "name": "com.harmony.myapplication.entry.MainAbility",
                    "type": "page",
                    "launchType": "standard",
                    "visible": false
                }
            ],

     2. 合并前HAR的“config.json”文件，如下所示：
            
            "abilities": [
                {
                    "name": "com.harmony.myapplication.entry.MainAbility",
                    "type": "page",
                    "launchType": "singleton",
                    "orientation": "portrait",
                    "visible": false
                }
            ],

     3. 将上述两个“config.json”文件按照mergeRule进行合并，处理完成后mergeRule字段也会被移除。合并后的结果文件，如下所示：
            
            "abilities": [
                {
                    "name": "com.harmony.myapplication.entry.MainAbility",
                    "type": "page",
                    "launchType": "standard",
                    "visible": false
                }
            ],

#### [h2]bundleName占位符的使用

HAR的“config.json”文件中多处需要使用包名，例如自定义权限、自定义action等场景，但是包名只有当HAR编译到HAP时才能确定下来。在编译之前，HAR中的包名可以采用占位符来表示，采用{bundleName}形式。

支持bundleName占位符的标签有actions、entities、permissions、readPermission、writePermission、defPermissions.name。

**使用示例：**

     1. HAR中自定义action时，使用{bundleName}来代替包名。如下所示：
            
            "skills": [
                {
                    "actions": [
                        "{bundleName}.ACTION_PLAY"
                    ],
                    "entities": [
                        "{bundleName}.ENTITY_PLAY"
                    ],
                }
            ],

     2. 将HAR编译到bundleName为“com.huawei.hiworld”的HAP包后，原来的{bundleName}将被替换为HAP的实际包名。替换后的结果如下所示：
            
            "app": {
                "bundleName": "com.huawei.hiworld",
                ……
            },
            "module": {
                "abilities": [
                    {
                        "skills": [
                            {
                                "actions": [
                                    "com.huawei.hiworld.ACTION_PLAY"
                                ],
                                "entities": [
                                    "com.huawei.hiworld.ENTITY_PLAY"
                                ],
                            }
                        ],
