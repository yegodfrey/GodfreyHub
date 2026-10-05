---
name: document/cn/HMSCore-Guides/web-tag-management-example-0000001077462140
title: 场景化示例
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-tag-management-example-0000001077462140
source: portal
---

# 场景化示例

#### HUAWEI Analytics

#### [h2]前提条件

                1. 确保您已集成Analytics Kit 5.2.0.300或以上版本，详情请参见[接入Analytics](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/javascript-accessing-0000001051147976)。
                2. 打开代码工程的main.js文件，在初始化分析实例“agconnect.analytics();”后，添加以下代码实现DTM对HUAWEI Analytics接口的调用。
                       
                       window.agconnect = agconnect;

#### [h2]操作步骤

                1. 在“新建条件”页面输入条件名称，设置条件类型为“所有元素”，并设置“此条件的触发条件”，点击“保存”。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/SgNHpwljSc6_A2XxRuYY2A/zh-cn_image_0000001396270033.png?HW-CC-KV=V1&HW-CC-Date=20261005T043140Z&HW-CC-Expire=86400&HW-CC-Sign=235E256592B59E7F77B4C6AEE672A2193601B92F77BF59219B2AA254FF655E3F)

                2. 在“新建代码”页面中输入代码名称后，将“扩展”类型选择为“HUAWEI Analytics”。
                3. 根据实际情况，配置“事件ID”和“事件参数”相关参数，详情请参见[HUAWEI Analytics](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-extension-template-fields-0000001070856481#section6327192665513)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/4BfUvx7mSluobWFMuwUARw/zh-cn_image_0000001394479613.png?HW-CC-KV=V1&HW-CC-Date=20261005T043140Z&HW-CC-Expire=86400&HW-CC-Sign=86E2225B6D83F56626DB8CF81AAA583291F4F5CBF6F2FE130F58E48411C788D7)

                4. 点击“触发条件”后的“添加”按钮，选择代码的触发条件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ac/v3/CWTYhbeXQtuPM0rliuxYig/zh-cn_image_0000001345994928.png?HW-CC-KV=V1&HW-CC-Date=20261005T043140Z&HW-CC-Expire=86400&HW-CC-Sign=2E2874AF93D200A2657C09E53A1302842305B14E5C826C886C19D447717B5B88)

                5. 配置完成后，点击“保存”。创建成功后，在“代码”页面可查看到已创建的代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/B3LZ42AgTRyu5x1yuAGf7g/zh-cn_image_0000001346155580.png?HW-CC-KV=V1&HW-CC-Date=20261005T043140Z&HW-CC-Expire=86400&HW-CC-Sign=E086EA290394C3841CD2666526E146A5682AEAA178FDCD256EFA7470A416620A)

#### Google Analytics

代码主要由参数及条件两部分组成，对于不同的扩展类型，需要设置的参数也不尽相同，下文以“Google Analytics（分析）：Universal Analytics”为例对创建代码操作进行详细介绍：

                1. 在“新建代码”页面中输入代码名称后，将“扩展”类型选择为“Google Analytics（分析）：Universal Analytics”。
                2. 扩展类型选择为“Google Analytics（分析）：Universal Analytics”后，您需要选择对应的“Google Analytics设置”，支持自定义和引用已创建的变量。
                3. 选择上报类型并填写其他参数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cc/v3/FQpnegcqTNaPKGkAqNVXNg/zh-cn_image_0000001077621788.png?HW-CC-KV=V1&HW-CC-Date=20261005T043140Z&HW-CC-Expire=86400&HW-CC-Sign=D0E277C9A001EFEF6B0312AA71DC0FE0A802FA2C9609B7252E3C651F5DD0D3A0)

                4. 点击“触发条件”下的“添加”按钮，选择代码的触发条件。
                5. （可选）点击“例外条件”下的“添加”按钮，选择代码的例外条件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/9otsiNIzTuSUODlhOJRwzQ/zh-cn_image_0000001077781762.png?HW-CC-KV=V1&HW-CC-Date=20261005T043140Z&HW-CC-Expire=86400&HW-CC-Sign=BC892A605CA5C8F8BF8F37F959CDE07F3BC2BE67FAD1C41B7803AF9B9236F3E2)

                6. 配置完成后，点击“保存”。创建成功后，在“代码”页面可查看到已创建的代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/3ynBq1rzTOOEiVJU5wzmRw/zh-cn_image_0000001090900031.png?HW-CC-KV=V1&HW-CC-Date=20261005T043140Z&HW-CC-Expire=86400&HW-CC-Sign=88E53AED94BB6F9A0037656D1C9E1CF5EEF0573F047C1C3D5E96860598403E8A)

#### Google Analytics（分析）4

Google Analytics（分析）4（以下简称“GA4”）是下一代谷歌分析，用于取代Universal Analytics ，它将原有基于会话的模型改为基于事件的模型，更好的兼顾了Web与App的上报分析。有关GA4的更多设置信息，请参阅[Google Analytics（分析）4（GA4）](https://support.google.com/analytics/answer/10089681?hl=zh-Hans)中的相关内容。

                1. 配置“Google Analytics（分析）：GA4配置”代码。

                   1. 在“新建代码”页面中输入代码名称后，将“扩展”类型选择为“Google Analytics（分析）：GA4配置”。
                   2. 根据实际情况，配置“衡量ID”、“事件参数”、“触发条件”等相关参数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/EEmpsT-eRpSdI5pc5R-Haw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T043140Z&HW-CC-Expire=86400&HW-CC-Sign=60DD74BDFA35BF3F6825D8DA950A83ADBE99F1691DEFD4BB4166CED572C782BF)

此处的“触发条件”，建议使用预置的“Initialization - All pages”条件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/ObpC1SKLTB-5UI1MBQkDUw/zh-cn_image_0000001306256022.png?HW-CC-KV=V1&HW-CC-Date=20261005T043140Z&HW-CC-Expire=86400&HW-CC-Sign=1C859856164357086E3A2ABA4E9C544FE39A36CD217869B960532AFA953A93B1)

                   3. 配置完成后，点击“保存”。创建成功后，在“代码”页面可查看到已创建的代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/z9gYTkPqSd6eOaKFWisPEQ/zh-cn_image_0000001359335853.png?HW-CC-KV=V1&HW-CC-Date=20261005T043140Z&HW-CC-Expire=86400&HW-CC-Sign=17700FBF2B52DFCA73C62F444765B839AB09F077F47763DF17119A38663B0A34)

                2. 配置“Google Analytics（分析）：GA4事件”代码。

                   1. 在“新建代码”页面中输入代码名称后，将“扩展”类型选择为“Google Analytics（分析）：GA4事件”。
                   2. 根据实际情况，配置“衡量ID”、“事件名称”、“事件参数”、“触发条件”等相关参数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/ZrEh_gVrTRWceIEN9eKs9A/zh-cn_image_0000001359014773.png?HW-CC-KV=V1&HW-CC-Date=20261005T043140Z&HW-CC-Expire=86400&HW-CC-Sign=44B016375C1E4617614E1088881BB3A03F07C26D4C46981127B9B145990A52DE)

                   3. 配置完成后，点击“保存”。创建成功后，在“代码”页面可查看到已创建的代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/w8PRH6brRLK678oc8tg7rA/zh-cn_image_0000001359135517.png?HW-CC-KV=V1&HW-CC-Date=20261005T043140Z&HW-CC-Expire=86400&HW-CC-Sign=52FDE2229019DA6E56F3D19FC6C5BD6F9D461C5B92DF4051E38B9C46F31E02D7)
