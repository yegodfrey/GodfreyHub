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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/lBAGjFmURCe2QuKaL_t3Vg/zh-cn_image_0000002713558606.png?HW-CC-KV=V1&HW-CC-Date=20260908T090116Z&HW-CC-Expire=86400&HW-CC-Sign=811A20788C8027CB7C4BC2852A16D4DB20EB6D5A6AA1F969F80F4BA25B066729)




#### [h2]want参数的entities匹配规则

将调用方传入的want参数的entities与待匹配应用组件的skills配置中的entities进行匹配。

  * 调用方传入的want参数的entities为空，待匹配应用组件的skills配置中的entities不为空，则entities匹配成功。

  * 调用方传入的want参数的entities为空，待匹配应用组件的skills配置中的entities为空，则entities匹配成功。

  * 调用方传入的want参数的entities不为空，待匹配应用组件的skills配置中的entities为空，则entities匹配失败。

  * 调用方传入的want参数的entities不为空，待匹配应用组件的skills配置中的entities不为空且包含调用方传入的want参数的entities，则entities匹配成功。

  * 调用方传入的want参数的entities不为空，待匹配应用组件的skills配置中的entities不为空且不完全包含调用方传入的want参数的entities，则entities匹配失败。

**图2** want参数的entities匹配规则

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/J-WvHE4GQvOsEKtYlOeWrQ/zh-cn_image_0000002743197519.png?HW-CC-KV=V1&HW-CC-Date=20260908T090116Z&HW-CC-Expire=86400&HW-CC-Sign=74F322FA6BE3D28542541341F87058B9EED9A698A7110C1045739B2866582CB7)




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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/BQFk6L-KTzaUnllx64zTpw/zh-cn_image_0000002713398638.png?HW-CC-KV=V1&HW-CC-Date=20260908T090116Z&HW-CC-Expire=86400&HW-CC-Sign=7BDF7D87301F22439024A72058DD970EB897D891B364FD9CEDE14912295E01D9)

为了简化描述：

  * 称调用方传入的want参数中的uri参数为w_uri；待匹配应用组件的skills配置中uris为s_uris，其中每个元素为s_uri。
  * 称调用方传入的want参数的type参数为w_type，待匹配应用组件的skills数组中uris的type数据为s_type。



**图4** want参数中uri和type的具体匹配规则

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/qcRUt9ptSA-DQEL2cv09Og/zh-cn_image_0000002743077569.png?HW-CC-KV=V1&HW-CC-Date=20260908T090116Z&HW-CC-Expire=86400&HW-CC-Sign=5B8C966B0F89221C39EAC4864165175037BEE4FDB27766EA90ED5B3BC3FC4D7D)

#### [h2]uri匹配规则

具体的匹配规则如下：

  * 如果s_uri的scheme为空，当w_uri为空时匹配成功，否则匹配失败。
  * 如果s_uri的host为空，当w_uri和s_uri的scheme相同时匹配成功，否则匹配失败。
  * 如果s_uri的port为空，当w_uri和s_uri中的scheme和host相同时匹配成功，否则匹配失败。
  * 如果s_uri的path、pathStartWith和pathRegex都为空，当w_uri和s_uri中的scheme，host和port相同时匹配成功，否则匹配失败。
  * 如果s_uri的path不为空，当w_uri和s_uri**全路径表达式** 相同时匹配成功，否则继续进行pathStartWith的匹配。
  * 如果s_uri的pathStartWith不为空，当w_uri包含s_uri**前缀表达式** 时匹配成功，否则继续进行pathRegex的匹配。
  * 如果s_uri的pathRegex不为空，当w_uri满足s_uri**正则表达式** 时匹配成功，否则匹配失败。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/ZOHW2WhaTgCfWXM-sgfYUg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090116Z&HW-CC-Expire=86400&HW-CC-Sign=6F7EECD788B4EDFAF0AACF0B046032F6953DF6E04BDC28A9D13530ED58734576)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/kVNTfMw0RmSZ8Grbou6BYg/zh-cn_image_0000002713558608.png?HW-CC-KV=V1&HW-CC-Date=20260908T090116Z&HW-CC-Expire=86400&HW-CC-Sign=AF68F641430F8A0E528DC1922AD9BFBFC3382E0D32E00A2566CA40DF67A72C92)

#### [h2]type匹配规则

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/xgy_eFp7QHSaqPhaTcSF2g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090116Z&HW-CC-Expire=86400&HW-CC-Sign=401CBB16C1CA34E7180930EBCAB9950B1694A8CC8D08C5A6B95B7AC7834CAEC0)

本章节所述的type匹配规则的适用性需建立在want参数内type不为空的基础上。当want参数内type为空时请参见want参数的uri和type匹配规则。

具体的匹配规则如下：

  * 如果s_type为空，则匹配失败。
  * 如果s_type或者w_type为通配符*/*，则匹配成功。
  * 如果s_type最后一个字符为通配符*，如prefixType/*，则当w_type包含prefixType/时匹配成功，否则匹配失败。
  * 如果w_type最后一个字符为通配符*，如prefixType/*，则当s_type包含prefixType/时匹配成功，否则匹配失败。



#### [h2]linkFeature匹配规则

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/GGEZnESJTdWMf3QAiO2s3g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090116Z&HW-CC-Expire=86400&HW-CC-Sign=C182B26EDC6D1EACA2CADE4E80A5A6BB4DD5F2F21F3D1473A51E79BE0A980550)

本章节所述的linkFeature匹配规则适用于want参数中的parameters包含linkFeature键，且对应取值不为空的场景。

将调用方传入的want参数的parameters与待匹配应用组件的skills配置中的uris进行匹配。为了简化描述, 称调用方传入的want参数中的linkFeature参数为w_linkFeature, 具体的匹配规则如下：

  * want参数的uri和type均为空, 只匹配linkFeature，当w_linkFeature和s_uri的linkFeature相同时匹配成功，否则匹配失败。
  * want参数的uri或type不为空, 依次匹配linkFeature、uri、type (参见want参数的uri和type匹配规则)，当三个字段均匹配成功时，则匹配成功，否则匹配失败。



**图6** want参数中linkFeature具体匹配规则

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/SZaMR7lIR42ci1gH_YcDHg/zh-cn_image_0000002743197521.png?HW-CC-KV=V1&HW-CC-Date=20260908T090116Z&HW-CC-Expire=86400&HW-CC-Sign=06D1E19974006B06F97291B24B256E350D0CF190C9F7D3691BD01E7A1F404659)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/0Td7BLybTlqPrUwRa8jKBA/zh-cn_image_0000002713398640.png?HW-CC-KV=V1&HW-CC-Date=20260908T090116Z&HW-CC-Expire=86400&HW-CC-Sign=B18531A11CB87790611056909B4E02F7DCB6144BE82A0573C1F30CA622F95296)
