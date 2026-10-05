---
name: document/cn/HMSCore-Guides/android-visual-event-tag-0000001133265701
title: 按Tag模板操作流程
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-visual-event-tag-0000001133265701
source: portal
---

# 按Tag模板操作流程

#### 进入页面

在AGC侧选择“可视化埋点”页签后，点击页面右上角的“按Tag模板埋点”按钮，系统跳转至Tag模板埋点页面。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7b/v3/AHZL9TwwQZWL1e2oIyWe7Q/zh-cn_image_0000001134896605.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=DEC19DC8788C2DF9FB9643455D6CBA82FB12EA8EACDA48FE39EAB7921EE79725)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/QNXDMbraQ0-Obqb7y88-dA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=CA9026771AA885EA8FCA488092668011C740DEA0485D0FE9546810D906742BDF)

当您点击“可视化埋点”页签时，若系统存在已创建的Tag模板，则会直接进入“按Tag模板埋点”页面；否则，系统跳转至如上页面。

#### 新建代码模板

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/GLVHrYefQt6Alz2-AzXc5A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=D5783E2B6A5DF64E51723F5E6F13B798E4412153FE7AB293FA64F41BF6D51E26)

您最多可以创建100个代码模板，其中包含在HUAWEI Analytics中创建的模板，即在DTM和HUAWEI Analytics中创建的模板总数不超过100个。

      1. 在左侧“选择代码模板”页面，点击“新建”按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/06/v3/DLvq67EfS2mjaRnOd046Bg/zh-cn_image_0000001088709840.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=A9ED319CFD8CC450D3BCA717EAE1D4B253D4C2A98D4A543A41F8D68227E853BF)

      2. 系统跳转至“新建代码”页面，输入“代码名称”，选择“扩展”类型，并设置其它公共设置项，点击“保存”。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/qrRU4yEyRx-fylNySAUmdQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=C6216160D3DF1CDC33BD48F5E4ACE0CC03BE33942648D29C008971FE69D2D9A0)

目前已支持HUAWEI Analytics、Petal Ads、Google Analytics（分析）和Facebook分析的代码模板。

本章节以“HUAWEI Analytics”代码模板为例，进行介绍。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/9GY9omn-RkWTEUHdPZIpXw/zh-cn_image_0000001135387609.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=674450585D0D81A764EEBAA47E1FFA66979D235A32B2674320F5D16D5B454EA9)

      3. 创建成功后，在“选择代码模板”页面可查看到已创建的代码模板。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/TZn15LqIQTamuP38kMW0VA/zh-cn_image_0000001088710148.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=C07DC9889F548B1E37FBA5D27D5685526D7B2F816729FE20189CE278244CBB29)

#### 添加埋点

      1. 在左侧的“选择代码模板”页面，选择已创建的代码模板，在右侧的“添加埋点”页面，使用手机浏览器扫描二维码，根据提示打开手机App，手机App和DTM页面将会同时进入可视化埋点页面。在进入可视化埋点状态后，手机App页面出现“蓝色浮动框”，同时手机App当前的页面会自动同步至DTM页面。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/-qdDB9LyTR65ODGAt-hvNw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=67CA625ACD5EDFB6043346F742EEA528E5E69FB8507D9527375059805E90FC69)

扫码前请确认当前设备上运行的App的包名与AGC侧配置的包名一致。

如果您扫码之后无法拉起App，请参见[如果您扫码之后无法拉起iOS App，您应该怎么做](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001050169001#section12742592059)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/pHA5YL8lR2GkNn5iszEeog/zh-cn_image_0000001135532481.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=1DA7E88DE3D42B483E764C190FB0C1CB5B94974C760A50C723D38680D367C1E4)

         * 手机App页面，蓝色浮动框如下图标记：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/zBxHhkFXScKyXu4Xid_dOA/zh-cn_image_0000001133012009.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=005803089639DEB0E1184E8F50DEC2DE65CA2079BC9F314F19F3C799E54C6D41)

         * DTM页面如下图：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/SGlrQm2iTO-_YN9Th6vANQ/zh-cn_image_0000001088390846.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=ED72D578160B0E16B9B1C752624C935228595C9541526D7A742D6244A8594CC8)

      2. 打开DTM可视化埋点页面右侧的“显示可圈选组件”开关，打开后会以红色框展示出可添加埋点的组件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/-RIwad4sTwaBYg-OBJ4Tcg/zh-cn_image_0000001135388329.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=E6BBCAE780713905088E6566B53DD92C410C3204FBA7E23E6F19B210B7157FC8)

      3. 添加页面埋点。“页面埋点”是针对整个页面进入事件的埋点，只能添加一个。

         1. 点击“页面埋点”页签下的“添加埋点”，在“添加埋点”输入框中填入埋点名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d/v3/1zY5-wviRa-p7ZQrCX1iOw/zh-cn_image_0000001088551142.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=93B6DD045372B3EE6C456CEBC5E7E0F443BBC4BFB1242826B9CCA9A3B7234668)

         2. 在“参数”下面，通过点击“添加”按钮，可以为当前埋点添加参数，为参数配置键和值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/c_jxGAMQQm2b9YqmttQcxg/zh-cn_image_0000001135650723.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=DE9B55FC4B1A3B297EF5A706D23A64F27FAE34DE5E51898E2BAA99EDC2B48420)

         3. 点击“确定”，在页面右侧的“页面埋点”页签下将展示已添加的埋点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/5jiTE7IEROOIs27T6Jimag/zh-cn_image_0000001088711450.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=34BDC92914B478FD37E6A610B32BCDD0E0853A1E63BF51E284AF555FD091A848)

      4. 添加元素埋点。

         1. 点击可埋点组件，在弹出的“添加埋点”提示框中选择埋点类型，点击“确定”。
         2. 输入埋点名称，点击“确定”添加埋点。选中可埋点组件时，该组件会以黄色框展示。

添加成功后，在页面右侧的“元素埋点（可用）”页签下展示出已添加的埋点，已添加埋点的组件会以绿色框展示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/BjoGit_HTTq1SmxahDzDVA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=6D006F38CD4A280A8D5E0F3AC6F7EF726A51755DD153FBD1DB576A146D65B6BC)

埋点可选类型有“当前位置”、“同类元素”和“相同文字”三种类型。

            * 当前位置：只对当前位置的组件有效。
            * 同类元素：即选中元素的某一个就近的父节点内，存在结构、ID或类名一致的元素。适用于ListView、GridView、RecyclerView、ViewPager等同类元素组件。例如商品列表等，点击列表中的任何一个同类元素都会触发该埋点。
            * 相同文字：只对相同文字的组件有效。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/HZ8QjEjgSVW9lne6km5fog/zh-cn_image_0000001135296521.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=0D838154B3FD2D223F9DAFA5DCF43651FAC7E697E5987D32703FDB34EE8AE480)

         3. 在“参数”下面，通过点击“添加”按钮，可以为当前埋点添加参数，为参数配置键和值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/GblLaQ2mTmOZRM2JyhBKFw/zh-cn_image_0000001135659713.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=0306DC16ED584A1A6D08665C94C39B0220D25C920B19C0343D2DF33108B7B07C)

         4. 点击“确定”，在页面右侧的“元素埋点（可用）”页签下将展示已添加的埋点。

对于已添加埋点参数的元素会以蓝色框展示，且当埋点元素和埋点参数位置一致时，以绿色框展示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/TuZ1JW3MRBOBwvIeKJuJgQ/zh-cn_image_0000001088720960.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=6C073D3897C682A3DED20DBD61BABC1165E03E17B8D10DD948B2A129B55300BE)

      5. （可选）对于已添加的埋点，您可以根据需要，通过埋点名称后面的按钮，进行预览、暂停、编辑、删除及查看详情等相关操作。

通过点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/tsTb-GZXTHKJ8dPNqHobzg/zh-cn_image_0000001101573006.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=1B652E66217248A340AD87406FA3D2BC630937D36FFFD7A1ED23D69D5732947C)按钮，您可以修改埋点名称，但不能修改埋点类型。

      6. 完成当前页面组件的埋点后，您可以在手机App上切换页面，对不同页面上的组件创建埋点。

埋点页面右侧仅展示当前页面的埋点信息，如果当前页面中埋点对应的组件不存在或不可见，该埋点将会展示在“元素埋点 （不可用）”页签下，此时您可以对该埋点执行删除操作。如果不存在不可用的元素埋点，则“元素埋点 （不可用）”页签不显示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/c3eh3e8uS_SZd-5J7hyQSw/zh-cn_image_0000001088273096.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=C7C5AFAB29855520BFA849A8503C3B337024828CC41ACFCB1F76156CC7120845)

#### 预览草稿版本

您可以通过“可视化埋点 > 扫描二维码 > 预览”，查看实时的配置信息，详情请参见[预览版本](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-version-management-operation-procedure-0000001077092116#section35141828537)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/J1cuehnRThq7QbwdyeDV7w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=F66931846E19A8D93AD8E15CFC9D8E19DFC1EC9E4A762CB772DE005B84EF5E4A)

通过“可视化埋点 > 按Tag模板埋点 > 扫描二维码 > 预览”与“版本 > 版本详情 > 预览”的功能差异如下：

      * “可视化埋点 > 按Tag模板埋点 > 扫描二维码 > 预览”：您可以预览当前的草稿版本，即当前工作区内实时的配置信息。
      * “版本 > 版本详情 > 预览”：您可以预览当前创建的正式版本，预览内容仅为指定版本的配置信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/MtJTyU2PQwGoE_k77DU-rw/zh-cn_image_0000001131671148.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=FA4DB90B757856C6467BB253E72AC4FD9C2AA8A8BF710D31258EC522D707D254)

#### 发布版本

完成埋点创建后，您可以参见[版本](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-version-management-0000001056603541)完成最后的版本并发布。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/GUz2Mfe3QQirAfNG9suuOA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=895E79E6A64F0DFDE263ED0A7AD34DD9121C3C9A82151BFFAC35E2CABE7EEF78)

按Tag模板埋点的可视化埋点默认触发条件为点击事件，您不需要再手动配置触发条件。

#### 查看按Tag模板可视化埋点列表

      1. 选择“可视化埋点”页签，系统跳转至Tag模板埋点页面。
      2. 在左侧“选择代码模板”页面，点击待查看模板后面的埋点数，进入该模板对应的埋点列表页面。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/05/v3/_W0cQb-9RC69kF_gWExN5w/zh-cn_image_0000001159867437.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=683EAB5AB1F7FE65628A7B2AFF4AD323F1B0EEAA807B1D6D4FAD228D467671DA)

      3. 页面显示使用了该模板的埋点信息，您可以查看“埋点名称”、“埋点页面”、“埋点路径”和“修改时间”。

你还可以通过“操作”中的预览、暂停和删除按钮，进行相应的操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/1F8_ZQFoS-W_AdtxUGoofw/zh-cn_image_0000001113387638.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=E0B705672B246B1CF3A0F4EC40D3EF1A5663CEEBE9F67F0AA15736C09BDA3563)
