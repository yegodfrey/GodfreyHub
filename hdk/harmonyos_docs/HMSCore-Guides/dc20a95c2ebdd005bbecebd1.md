---
name: document/cn/HMSCore-Guides/android-visual-event-tag-example-0000001087267456
title: 按Tag模板场景化示例
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-visual-event-tag-example-0000001087267456
source: portal
---

# 按Tag模板场景化示例

#### Fragment可视化埋点

#### [h2]应用场景

对于使用Fragment组件的Android App，可以参照如下操作，将一小段代码添加至您的App代码中，再通过可视化点击的方式添加埋点事件。这样，当App用户自定义页签顺序时，您的埋点位置也不会随之改变。

#### [h2]操作步骤

      1. 在创建Fragment时添加value。
             
             Fragment fragment = new Fragment();
                 Bundle bundle = new Bundle();
                 // value值为非空字符串，即当您在创建Fragment时，通过Fragment的setArguments方法，向Bundle中添加key值为“DTM_FRAGMENT_TAG”的value。
                 bundle.putString("DTM_FRAGMENT_TAG","value");
                 fragment.setArguments(bundle);

      2. （可选）在您的App的Fragment组件代码中，覆写onResume方法，添加如下代码：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/RCRdbkXESgybYWlqHRiDkg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=33257D1583ED4214D78F2AC8CC1CB65D07AC092A71C97F8C15B5B626AA341A65)

若您集成了DTM插件，可忽略该步骤，详情请参见[（可选）集成DTM插件](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-0000001050041968#section39741922104616)。
             
             @Override
                 public void onResume() {
                     super.onResume();
                     if (getView() != null && getArguments() != null) {
                         // value值为非空字符串，通过步骤1设置。
                         String value = getArguments().getString("DTM_FRAGMENT_TAG");
                         // getView().setTag中的key值固定为0xffff0000，不可更改。
                         getView().setTag(0xffff0000,value);
                     }
                 }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/CPTW7Gy_QhylPrgkl0dCBA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=B047B3F89589ED14D2A482715E843BC4B2C94B60E1C2D2C538A05F1271B89110)

为提高埋点准确度，相同Fragment实例中的value值需保持唯一。

      3. 在AGC侧选择“可视化埋点”页签，点击页面右上角的“按Tag模板埋点”按钮，系统跳转至Tag模板埋点页面。
      4. 在左侧“选择代码模板”页面，新建并选择Tag模板。在右侧的“添加埋点”页面，使用手机浏览器扫描二维码，根据提示打开手机App进入网页页面，手机端应用和DTM界面将会同时进入可视化埋点页面，DTM页面显示如下。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/XQrubeu2S8mCM65Z3RNx0Q/zh-cn_image_0000001133769310.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=B1DEA740EDF8E30CE84C3C00BB9CC54B75F85B56CD82150C6344B9A98DD35F94)

      5. 在DTM可视化埋点页面右侧有“显示可圈选组件”开关，打开后会以红色框展示出可添加埋点的组件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/9YYwOD_dTRmYuv8iG9KN7w/zh-cn_image_0000001179684257.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=497ECA62C286D9C4019968075634382B7B0CD1E0EDA0F9DDAF958B48BFF28DB3)

      6. 您可以选中可埋点组件添加元素埋点。选中可埋点组件时，控件会以黄色框覆盖该组件。

         1. 点击可埋点组件，在弹出的“添加埋点”提示框中选择埋点类型，点击“确定”添加埋点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/GJqZ35jNTB2faYwLfgjJsw/zh-cn_image_0000001133564900.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=AAAAE56540095D229BDF24E35D1B9C5B16251A19DA696650FB63952B9A083E1E)

         2. 添加成功后，在页面右侧的“元素埋点（可用）”页签下展示出已添加的埋点，已添加埋点的组件会以绿色框展示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/tOaml6leQx2z_PzrE1xD9Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=038571A9BA5FF2338D082165993E5074FD915C44B94F67CE0AD11F1116703901)

埋点可选类型有“当前位置”、“同类元素”和“相同文字”三种类型。

            * 当前位置：只对当前位置的组件有效。
            * 同类元素：即选中元素的某一个就近的父节点内，存在结构、ID或类名一致的元素。适用于ListView、GridView、RecyclerView、ViewPager等同类元素组件。例如商品列表等，点击列表中的任何一个同类元素都会触发该埋点。
            * 相同文字：只对相同文字的组件有效。

本章节以同类元素埋点操作进行说明。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/RspayAHcS8eRYOtnYY9bTA/zh-cn_image_0000001133724674.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=5061E70A105DBD3C3EB66F215143951A609FDAD658EC6705396BC7480827BA51)

      7. 设置“埋点名称”及相关参数，单击“确定”完成埋点。

添加成功后，在页面右侧的“元素埋点（可用）”页签下展示出已添加的埋点，已添加埋点参数的元素会以蓝色框展示，且当埋点元素和埋点参数位置一致时，以绿色框展示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/5JpN_ow2QgS2UbD_j2CwTw/zh-cn_image_0000001133941274.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=9E9CF976D76C4FCA0D08ED86E69E2743D62B7DE9E3EA15697DAD070FAAFD5911)

      8. 完成埋点创建后，您需要将可视化埋点配置为代码触发条件以使埋点生效，此时您可以参见[代码](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-tag-management-0000001056773833)、[版本](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-version-management-0000001056603541)完成最后的版本并发布。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/TClU2ZFuQJK2i5c6eiR_Rw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=154DDA3A391939243695F0E2D7F8A7F4B4D26B7C620B8C0FD6532AA0C177D0D2)

建代码时触发条件若选择为可视化埋点，页面会自动将该埋点的参数添加至代码自定义参数列表中（如果代码支持自定义参数），同时您可以对参数引用进行手动调整。

#### 网页可视化埋点

DTM支持Android应用中的网页按Tag模板的可视化埋点。

      1. 在AGC侧选择“可视化埋点”页签，点击页面右上角的“按Tag模板埋点”按钮，系统跳转至Tag模板埋点页面。
      2. 在左侧“选择代码模板”页面，新建并选择Tag模板。在右侧的“添加埋点”页面，使用手机浏览器扫描二维码，根据提示打开手机App进入网页页面，手机端应用和DTM界面将会同时进入可视化埋点页面。
      3. 在DTM界面的可视化埋点页面右侧有“显示可圈选组件”开关，打开后会以红色框展示出网页中可添加埋点的组件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/xG0N2tXhQauVXk49zvU8cw/zh-cn_image_0000001134094195.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=0123E66C7045B3088F438F6CE1DDD5F4E84EC77BFA5AFBBB0C79EC9089030C66)

      4. （可选）添加页面埋点。该“页面埋点”是针对进入App页面的埋点，只能添加一个。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/GviDr_Z6RiybTqtUOPs8BQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=8C55A4748B45F8E4074EBD3E496ECE48AF74606E1D2605FB60D09719D7428CFF)

当进入含WebView的App页面时，可以添加页面埋点，其参数只能选择native组件。

         1. 点击“页面埋点”页签下的“添加埋点”，在弹出的“添加埋点”输入框中填入埋点名称，点击“确定”添加埋点。
         2. 添加成功后，会在页面右侧的“页面埋点”页签下展示已添加的埋点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/jkIEKoNdQqe6yxlIvPNglw/zh-cn_image_0000001087112356.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=E3EADD8AA3804C623083E109FC3475E0B2551AE7DD89E7FBDB28069AAE83C858)

      5. 添加元素埋点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a/v3/8qVPPiiNT2uKfCVAeEavow/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=C2A59EEA181EC293276741CFD16B5E4EF1231800A29DA1FDA2BBB3E2EB7463AD)

当进入含WebView的App页面时，若您添加native组件作为元素埋点，只能选择native组件作为参数，不可选择WebView元素；若您添加WebView元素作为元素埋点，只能选择WebView元素作为参数，不可选择native组件。

         1. 点击可埋点元素，在弹出的“添加埋点”提示框中设置埋点类型，并点击“确定”。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4/v3/L285TBfNS66dKt3BK7pfQQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=D89AE7409FC59F651972F7E78ED86D01348A97295989E8C0DCC9CB0972E6D906)

WebView埋点可选类型有“当前位置”和“同类元素”。

            * 当前位置：只对当前位置的元素有效。
            * 同类元素：即选中元素的某一个就近的父节点内，存在结构、ID或类名一致的元素。适用于列表类的同类元素。例如商品列表等，点击列表中的任何一个同类元素都会触发该埋点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/8kbatoA1SsysoJXOLtn7Ig/zh-cn_image_0000001087271992.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=88D02487878485278C9B6D9A0963DFCCCCA392732C2B928B30AF89A15D90AC06)

         2. 设置“埋点名称”、“参数”及“触发事件”，点击“确定”完成埋点。

添加成功后，在页面右侧的“元素埋点（可用）”页签下展示出已添加的埋点，已添加埋点参数的元素会以蓝色框展示，且当埋点元素和埋点参数位置一致时，以绿色框展示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/lqKyZeSISpCdo9VyGs3q5g/zh-cn_image_0000001086983858.png?HW-CC-KV=V1&HW-CC-Date=20261005T042955Z&HW-CC-Expire=86400&HW-CC-Sign=28956A75C42BC6AC5DA6E30EDDD7B079BE64248CB6B29626134486B742AD9730)

      6. （可选）对于已添加的埋点，您可以根据需要，通过埋点名称后面的按钮，进行预览、暂停、编辑、删除及查看详情等相关操作。
