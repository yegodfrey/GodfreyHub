---
name: cangjie-guides/cj-explicit-implicit-want-mappings
title: 显式Want与隐式Want匹配规则
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-explicit-implicit-want-mappings
nodePath: 应用框架 / Ability Kit（程序框架服务） / Stage模型开发指导 / Stage模型应用组件 / 信息传递载体Want / 显式Want与隐式Want匹配规则
---

# 显式Want与隐式Want匹配规则

在启动目标应用组件时，会通过显式[Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want)或者隐式[Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want)进行目标应用组件的匹配。本章所述的匹配规则是：调用方传入的[Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want)参数中设置的参数如何与目标应用组件声明的配置文件进行匹配。

#### 显式Want匹配原理

显式[Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want)匹配原理如下表所示。

名称 | 类型 | 匹配项 | 必选 | 规则  
---|---|---|---|---  
deviceId | String | 是 | 否 | 留空将仅匹配本设备内的应用组件。  
bundleName | String | 是 | 是 | 如果指定abilityName，而不指定bundleName，则匹配失败。  
moduleName | String | 是 | 否 | 留空时当同一个应用内存在多个模块且模块间存在重名应用组件，将默认匹配第一个。  
abilityName | String | 是 | 是 | 该字段必须设置表示显式匹配。  
uri | String | 否 | 否 | 系统匹配时将忽略该参数，但仍可作为参数传递给目标应用组件。  
type | String | 否 | 否 | 系统匹配时将忽略该参数，但仍可作为参数传递给目标应用组件。  
action | String | 否 | 否 | 系统匹配时将忽略该参数，但仍可作为参数传递给目标应用组件。  
entities | Array<String> | 否 | 否 | 系统匹配时将忽略该参数，但仍可作为参数传递给目标应用组件。  
flags | UInt32 | 否 | 否 | 不参与匹配，直接传递给系统处理，一般用来设置运行态信息，例如URI数据授权等。  
parameters | String | 否 | 否 | 不参与匹配，应用自定义数据将直接传递给目标应用组件。  
  
#### 隐式Want匹配原理

隐式[Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want)匹配原理如下表所示。

名称 | 类型 | 匹配项 | 必选 | 规则  
---|---|---|---|---  
deviceId | String | 是 | 否 | 跨设备目前不支持隐式调用。  
abilityName | String | 否 | 否 | 该字段必须留空表示隐式匹配。  
bundleName | String | 是 | 否 | 匹配对应应用包内的目标应用组件。  
moduleName | String | 是 | 否 | 匹配对应Module内的目标应用组件。  
uri | String | 是 | 否 | 参见want参数的uri和type匹配规则。  
type | String | 是 | 否 | 参见want参数的uri和type匹配规则。  
action | String | 是 | 否 | 参见want参数的action匹配规则。  
entities | Array<String> | 是 | 否 | 参见want参数的entities匹配规则。  
flags | UInt32 | 否 | 否 | 不参与匹配，直接传递给系统处理，一般用来设置运行态信息，例如URI数据授权等。  
parameters | String | 是 | 否 | 应用自定义数据将直接传递给目标应用组件。当前支持使用key为linkFeature的参数进行匹配，当linkFeature字段取值不为空时，优先进行linkFeature匹配。  
  
从隐式Want的定义，可得知：

  * 调用方传入的want参数，表明调用方需要执行的操作，并提供相关数据以及其他应用类型限制。
  * 待匹配应用组件的skills配置，声明其具备的能力（[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file)中的[skills标签](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file#skills标签)参数）。



系统将调用方传入的want参数（包含action、entities、uri、type和parameters属性）与已安装待匹配应用组件的skills配置（包含actions、entities、uris和type属性）进行匹配。当want参数五个属性匹配均未配置，隐式匹配失败。

  * 当parameters中的linkFeature字段取值不为空时，系统将优先进行linkFeature匹配。 
    * 如果linkFeature匹配成功，并且want中配置了uri或type，则继续匹配uri和type属性，均匹配成功则隐式匹配成功；否则，匹配失败。如果want中未配置uri和type, 则隐式匹配成功。
    * 如果linkFeature匹配失败，则不进行后续属性匹配，匹配失败。
  * 当parameters中的linkFeature未配置或取值为空时，只有当action、entities、uri和type四个属性均匹配通过时，此应用才会被应用选择器展示给用户进行选择。



#### [h2]want参数的action匹配规则

将调用方传入的want参数的action与待匹配应用组件的skills配置中的actions进行匹配。

  * 调用方传入的want参数的action为空，待匹配Ability的skills配置中的actions为空，则action匹配失败。

  * 调用方传入的want参数的action不为空，待匹配应用组件的skills配置中的actions为空，则action匹配失败。

  * 调用方传入的want参数的action为空，待匹配应用组件的skills配置中的actions不为空，则action匹配成功。

  * 调用方传入的want参数的action不为空，待匹配应用组件的skills配置中的actions不为空且包含调用方传入的want参数的action，则action匹配成功。

  * 调用方传入的want参数的action不为空，待匹配应用组件的skills配置中的actions不为空且不包含调用方传入的want参数的action，则action匹配失败。

**图1** want参数的action匹配规则

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/B6KEn1mbTae60oduG5GqUQ/zh-cn_image_0000002731378543.png?HW-CC-KV=V1&HW-CC-Date=20260903T111555Z&HW-CC-Expire=86400&HW-CC-Sign=3934282E8FD02D0409128041E143DABBCB3297E1B19B580A9285A6643A9D42C9)




#### [h2]want参数的entities匹配规则

将调用方传入的want参数的entities与待匹配应用组件的skills配置中的entities进行匹配。

  * 调用方传入的want参数的entities为空，待匹配应用组件的skills配置中的entities不为空，则entities匹配成功。

  * 调用方传入的want参数的entities为空，待匹配应用组件的skills配置中的entities为空，则entities匹配成功。

  * 调用方传入的want参数的entities不为空，待匹配应用组件的skills配置中的entities为空，则entities匹配失败。

  * 调用方传入的want参数的entities不为空，待匹配应用组件的skills配置中的entities不为空且包含调用方传入的want参数的entities，则entities匹配成功。

  * 调用方传入的want参数的entities不为空，待匹配应用组件的skills配置中的entities不为空且不完全包含调用方传入的want参数的entities，则entities匹配失败。

**图2** want参数的entities匹配规则

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/YJaULfDLSPyhZp5G0KY4OQ/zh-cn_image_0000002701819240.png?HW-CC-KV=V1&HW-CC-Date=20260903T111555Z&HW-CC-Expire=86400&HW-CC-Sign=CB8641B5DF18BA1C2AEA9EACC97AB90FD901AF709A17B7F14C55733A6ECE4E10)




#### [h2]want参数的uri和type匹配规则

调用方传入的want参数中设置uri和type参数发起启动应用组件的请求，系统会遍历当前系统已安装的组件列表，并逐个匹配待匹配应用组件的skills配置中的uris数组，如果待匹配应用组件的skills配置中的uris数组中只要有一个可以匹配调用方传入的want参数中设置的uri和type即为匹配成功。

实际应用中，uri和type共存在四种情况，下面将讲解四种情况的具体匹配规则：

  * 调用方传入的want参数的uri和type都为空。 
    * 如果待匹配应用组件的skills配置中的uris数组为空，匹配成功。
    * 如果待匹配应用组件的skills配置中的uris数组中存在uri的scheme和type都为空的元素，匹配成功。
    * 除以上两种情况，其他情况均为匹配失败。
  * 调用方传入的want参数的uri不为空，type为空。 
    * 如果待匹配应用组件的skills配置中的uris数组为空，匹配失败。
    * 如果待匹配应用组件的skills配置中的uris数组存在一条数据uri匹配成功且type为空，则匹配成功，否则匹配失败。
    * 如果前两条均匹配失败，并且传入的uri为文件路径uri，则根据文件后缀获取文件的MIME类型，如果该类型与skills文件中配置的type相匹配，则匹配成功。
  * 调用方传入的want参数的uri为空，type不为空。 
    * 如果待匹配应用组件的skills配置中的uris数组为空，匹配失败。
    * 如果待匹配应用组件的skills配置中的uris数组存在一条数据uri的scheme为空且type匹配成功，则匹配成功，否则匹配失败。
  * 调用方传入的want参数的uri和type都不为空，如下图所示。 
    * 如果待匹配应用组件的skills配置中的uris数组为空，匹配失败。
    * 如果待匹配应用组件的skills配置中的uris数组存在一条数据uri匹配和type匹配需要均匹配成功，则匹配成功，否则匹配失败。



最左uri匹配：当配置文件待匹配应用组件的skills配置中的uris数组中只配置scheme；或者只配置scheme和host；或者只配置scheme、host和port时。传入want参数的uri的最左边依次需要和scheme，或者scheme和host，或者scheme、host和port都匹配，才满足最左uri匹配。

**图3** want参数中uri和type皆不为空时的匹配规则

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/onEzVEr-Rdu2NcVVsR9BWg/zh-cn_image_0000002731538521.png?HW-CC-KV=V1&HW-CC-Date=20260903T111555Z&HW-CC-Expire=86400&HW-CC-Sign=91BB674FEA03C5838004957FCE915E741031EE73E47526A127C98A34F7CB240B)

为了简化描述：

  * 称调用方传入的want参数中的uri参数为w_uri；待匹配应用组件的skills配置中uris为s_uris，其中每个元素为s_uri。
  * 称调用方传入的want参数的type参数为w_type，待匹配应用组件的skills数组中uris的type数据为s_type。



**图4** want参数中uri和type的具体匹配规则

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/Vw7JhSdNQt6nI5Dk0E2WIw/zh-cn_image_0000002701659330.png?HW-CC-KV=V1&HW-CC-Date=20260903T111555Z&HW-CC-Expire=86400&HW-CC-Sign=6F804ADD25025CCD49EA5353FE9F5F4FF12C9B7106AADA660DCCC8B546561BF8)

#### [h2]uri匹配规则

具体的匹配规则如下：

  * 如果s_uri的scheme为空，当w_uri为空时匹配成功，否则匹配失败。
  * 如果s_uri的host为空，当w_uri和s_uri的scheme相同时匹配成功，否则匹配失败。
  * 如果s_uri的port为空，当w_uri和s_uri中的scheme和host相同时匹配成功，否则匹配失败。
  * 如果s_uri的path、pathStartWith和pathRegex都为空，当w_uri和s_uri中的scheme，host和port相同时匹配成功，否则匹配失败。
  * 如果s_uri的path不为空，当w_uri和s_uri**全路径表达式** 相同时匹配成功，否则继续进行pathStartWith的匹配。
  * 如果s_uri的pathStartWith不为空，当w_uri包含s_uri**前缀表达式** 时匹配成功，否则继续进行pathRegex的匹配。
  * 如果s_uri的pathRegex不为空，当w_uri满足s_uri**正则表达式** 时匹配成功，否则匹配失败。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/2UoQUd0vSiaqUC7haR278Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111555Z&HW-CC-Expire=86400&HW-CC-Sign=BBDEE82D8F5C543E9C5DBEE6282A49B23B8B03EEB0EA908AF67094972391B0F0)

待匹配应用组件的skills配置的uris中scheme、host、port、path、pathStartWith和pathRegex属性拼接，如果依次声明了path、pathStartWith和pathRegex属性时，uris将分别拼接为如下四种表达式：

  * **前缀uri表达式** ：当配置文件只配置scheme，或者只配置scheme和host，或者只配置scheme，host和port时，参数传入以配置文件为前缀的Uri 
    * scheme://
    * scheme://host
    * scheme://host:port
  * **全路径表达式** ：scheme://host:port/path
  * **前缀表达式** ：scheme://host:port/pathStartWith
  * **正则表达式** ：scheme://host:port/pathRegex



系统应用预留uri的scheme统一以ohos开头，例如ohosclock://。三方应用组件配置的uri不能与系统应用重复，否则会导致无法通过该uri拉起三方应用组件。

**图5** want参数中uri的匹配规则示例

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/2xqZ5Qv1ToGmt2TGtz71uA/zh-cn_image_0000002731378545.png?HW-CC-KV=V1&HW-CC-Date=20260903T111555Z&HW-CC-Expire=86400&HW-CC-Sign=3E4DC8FE81E125CA1290D9E39F82C3636D62B461D281F656C93A5C9DF30D987C)

#### [h2]type匹配规则

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/A3TquSx8RiS0SeU4vfezAw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111555Z&HW-CC-Expire=86400&HW-CC-Sign=3A2551C9AC0FE994ACC5D3FBCFB0B6060A4598BB26E4309E8309D3780D5A0D39)

本章节所述的type匹配规则的适用性需建立在want参数内type不为空的基础上。当want参数内type为空时请参见want参数的uri和type匹配规则。

具体的匹配规则如下：

  * 如果s_type为空，则匹配失败。
  * 如果s_type或者w_type为通配符*/*，则匹配成功。
  * 如果s_type最后一个字符为通配符*，如prefixType/*，则当w_type包含prefixType/时匹配成功，否则匹配失败。
  * 如果w_type最后一个字符为通配符*，如prefixType/*，则当s_type包含prefixType/时匹配成功，否则匹配失败。



#### [h2]linkFeature匹配规则

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/fmO_TnaTQqC-1vXX9QfDcw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111555Z&HW-CC-Expire=86400&HW-CC-Sign=DF68E6FD56E6692CEF8AA71F127A84CAF8E1D9A932408529D9BDE8A05151DBEA)

本章节所述的linkFeature匹配规则适用于want参数中的parameters包含linkFeature键，且对应取值不为空的场景。

将调用方传入的want参数的parameters与待匹配应用组件的skills配置中的uris进行匹配。为了简化描述, 称调用方传入的want参数中的linkFeature参数为w_linkFeature, 具体的匹配规则如下：

  * want参数的uri和type均为空, 只匹配linkFeature，当w_linkFeature和s_uri的linkFeature相同时匹配成功，否则匹配失败。
  * want参数的uri或type不为空, 依次匹配linkFeature、uri、type (参见want参数的uri和type匹配规则)，当三个字段均匹配成功时，则匹配成功，否则匹配失败。



**图6** want参数中linkFeature具体匹配规则

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/Hd46IJc0RdqzWZs0Gr6LRg/zh-cn_image_0000002701819242.png?HW-CC-KV=V1&HW-CC-Date=20260903T111555Z&HW-CC-Expire=86400&HW-CC-Sign=C88936A58D32753F884A0D55C874EB16DAA132DB62B98C168D45159E8D4758B7)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/y4Uau8zOSAG-2LcxamyqqQ/zh-cn_image_0000002731538523.png?HW-CC-KV=V1&HW-CC-Date=20260903T111555Z&HW-CC-Expire=86400&HW-CC-Sign=1392359665FC24D214DFE9A82F43F04C240A1EFDD070D71ADA71672227092F95)
