---
name: document/cn/design-guides/responsive-design-examples5-0000001930419478
title: 电商购物类
uri: https://developer.huawei.com/consumer/cn/doc/design-guides/responsive-design-examples5-0000001930419478
---

# 电商购物类

购物、买菜等服务类型的应用或业务场景，旨在让用户享受高效的浏览和互动。这类场景的核心是浏览商品、商品比价、直播购，因此，在大屏设备上可以向用户展示更多的商品选择，提供更轻便高效的交互体验。此类应用有如下特点：

* 界面布局舒适美观
* 展示更多的商品信息
* 高效的详情对比
* 快捷流畅的界面交互
* 关键信息无干扰

## 首页

### 首页的沉浸广告

|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|在电商购物应用中，首页通常会有入口图标和商品卡片等丰富的商品信息。通过对入口图标进行挪移或延展，商品卡片增加列数的方式高效适配多端设备尺寸，从而提升大屏设备上界面布局的舒适性、美观性和浏览效率。|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/9N0TVFD7QzifjGNVGSyrvg/zh-cn_image_0000002364802897.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=22DEF1340D68CB21598F72DE291A1436429B966E3B2D9CC45D554D4E6C57067C "点击放大")|

### 首页的卡片响应式布局

有多张卡片时，在宽屏设备上采用延伸布局以露出更多卡片。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/5ylCbIygQ2aINSTFOzQt6w/zh-cn_image_0000002330764670.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=EAB3483DC73E9C3E74FD217DB76D57228339A86A6A4DC7AB479A8B9A13357BAA "点击放大")

只有两张卡片时，在更宽的设备上卡片自适应形变。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/aZFQ2a8bSFaSVo7m34Tbgw/zh-cn_image_0000002364842801.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=8A3A4A60CC6B3060E5E48C504D7CBCA1F1525B6CA5C693E5B249F1793B115957 "点击放大")

只有一张卡片时，在宽屏设备上卡片自适应形变 + 挪移布局范式一：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/RM9hS-LOTa69315zTguRAQ/zh-cn_image_0000002330924506.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=9B52916CAEF681BC8298D352361DA3C21C6BE409DB8D327AE10C06BB8FA56459 "点击放大")

只有一张卡片时，在宽屏设备上卡片自适应形变 + 挪移布局范式二：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/Ar8meCyJSaau5hOF6vWxHw/zh-cn_image_0000002364802945.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=50BCAE07414F5C6EB0559B4F14E738B217FE5107A21ED4CB0199D4FFDED03EEC "点击放大")

本场景的开发指南，请参阅[一多开发实例（购物比价）-首页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section1976644133811)。

## 商品分类

商品分类页主要用于快速查找目标商品，在大屏设备上建议通过分栏布局提升查找效率。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/PzYjpcliQxSedP-XTmpjgA/zh-cn_image_0000002364802901.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=24FA5A00FC8DE2E33A8528D6631E7249121BF17488978BB8B78C8717E5D93965 "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-商品分类页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section1048762514385)。

## 商品搜索

为了避免进入整屏搜索界面时产生的大面积跳转，同时也为了规避搜索联想词列表的留白问题，在折叠屏/平板上建议采用轻量化搜索体验。当用户点击搜索框/搜索按钮时，原地激活搜索框，使用搜索面板承载推荐内容和搜索联想词，保持界面布局的整体稳定性。
> 说明
>
> **注：应用根据自身业务属性决策是否在首页使用，推荐运用于二级频道页。**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/_G-WhmLvTsKIr1WokHUvGg/zh-cn_image_0000002364802857.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=BA8FB7E05F32B3584C4A87CAB40E1B93A5BCE961CD8C1B4FECA95D52DCF64083 "点击放大")

## 商品详情

商品详情页中通常有顶部的商品图片，在折叠屏上建议通过延伸布局露出更多商品图片，在平板上建议从商品列表到进入商品详情时，提供分栏体验，帮助用户更高效的查找商品。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/g7JsP1NoQX-H2dF-DiGwvQ/zh-cn_image_0000002364802893.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=445472B4489EBAE3E4CA1E8D02781345FE1F0FB5A0F5D2821F9E6275B80D946A "点击放大")

平板上分栏布局时，点击全屏按钮，进入全屏，显示全屏的挪移布局。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/VCMusnXZTc2RCORMJo4tEQ/zh-cn_image_0000002364802885.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=29C29E7FA653225DBEFE4ACBAAC037599A74DC1CDE2FEE114311774B280A63A5 "点击放大")

也可以为平板提供默认的全屏体验，点击商品卡片直接进入商品详情。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/RxQb1ZTqScSazOst2mdFbA/zh-cn_image_0000002330764610.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=0959052448DD5230628203F11B016678030B8CD18AC9FD690C0924FDC14F01EE "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-商品详情页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section112893356386)。

平板上挪移布局显示商品详情时，查看下一层级内容时，建议使用以下两种范式。

范式一：在商品详情页，点击评论等功能进入下一层级页面时，通过侧边面板显示下一层级内容：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/lvHUW0A5R_-teSszkfgc8Q/zh-cn_image_0000002594923034.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=14087A4843B1F820B2E4EDCFCB492C082693348587BC0ED6E8E44DF5A7F6450A "点击放大")

范式二：在商品详情页，点击评论等功能进入下一层级页面时，原来的全屏界面被缩窄，右侧露出的面板上显示下一层级内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/MfWrabLzRZiSTOPZns3g0g/zh-cn_image_0000002364842753.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=DC28C2BAE66EA3D89827D7BB770118EEFF662AF8721FAD5D51D70258256272BA "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-商品详情侧边面板页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section8305102524814)。

## 分屏购物比价

查看商品详情时，在宽屏设备上，可点击应用内"分屏"按钮进行分屏，可满足同时查看两个商品的详细参数进行购物比价的诉求。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/5lkMkiZvTGGzyPY1Hd40vQ/zh-cn_image_0000002594749008.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=DFE02BA0CC251F3C1E9BCFEDEAA3ED3F7463366C99A712E6180D201470A1F95B "点击放大")

形成分屏后，"分屏"按钮自动切换为"全屏"按钮，可再次点击"全屏"按钮回到当前获焦窗口的全屏，退出另一侧的分屏任务。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/MbvryFEBTg2TOWBFdY2wwA/zh-cn_image_0000002625349009.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=B409973980702DA5E939A100B224D63C364F2D06D8ABF87AF9E849E697ACEB2C "点击放大")

多端的应用内分屏购物比价效果：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/cGbsFsGtQFC6i3WmvzX2WA/zh-cn_image_0000002364802913.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=C746B5CB37F1D47403C64F48E3348E471C8E32B2B06B86243C9D658FF6FA0AE6 "点击放大")

## 侧边面板咨询客服

在查看商品详情时，经常会有咨询客服的诉求，可采用侧边辅助面板显示客服对话等辅助信息，从而提升浏览效率，实现边看商品详情边聊天咨询的体验。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/z4I9llyvTKesGDBp95OYXA/zh-cn_image_0000002625282805.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=B4029561A2B8C74C92E30ED0F0020E13F2711536BDAC08CE7FF373161A4DF3F7 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/EMnsDREuRP6ll5ch8iiKfw/zh-cn_image_0000002625363443.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=3EC5E185E424D60EE2AA6D18D6981AAF81B4DC19BC724FDF7E23B6BD3986D216 "点击放大")

侧边面板同样可用于更多场景，例如在商品详情页临时打开购物车、查看评论、查看店铺信息等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/t4TIq_WpTjmMtDWlDwfF3w/zh-cn_image_0000002364802905.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=04C45E1C955A6A0BFA7A1C1D2F5E6F8DC14B25E29CD23E285AB728D732FD509D "点击放大")

## 购物车

购物车页面通常用于快速查看并支付待购买的商品。折叠上可全屏适配显示更多关键参数信息，平板和更大尺寸的屏幕设备的显示区域较大，为避免界面留白较多信息过疏，建议采用重复布局、露出辅助信息等方式确保页面的使用效率。

范式一：重复布局

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/dT-mEFD6SB28XWJDUwTgBw/zh-cn_image_0000002364802853.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=67ACD0117E6800251094C95BF6A79AE1802C6E6D764DC981CE0AB703EC7A93B8 "点击放大")

范式二：右侧露出辅助信息

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/ul0-2xp8RB-tWKIN8kpm-Q/zh-cn_image_0000002330924494.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=27EBA64CA0DD2890BE9E2BDF8CCC4CD34540A8A6A00AAACE4156CA900D135164 "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-购物车页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section49871612174810)。

|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|范式三：从列表变卡片 查看商品详情时，有需要临时查看购物车内待支付商品的诉求，可利用侧边辅助面板显示购物车页面，提升浏览效率。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/A_m_RNtOTve36eKl-VDj6g/zh-cn_image_0000002330764598.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=17C34020C8D4813C2F2228BE245BCF88519F2FE11094EA76608BCD629A3B5BB1 "点击放大")|
|  |

## 浅层窗口支付

全屏商品详情支付时，采用浅层窗口可以有效避免大面积的页面跳转带来的体验中断。平板和折叠屏上调用居中的半模态控件；手机上调用底部半模态控件，来实现浅层窗口体验。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/4AiiWPqeQNCNF3yi8d3tHg/zh-cn_image_0000002330924446.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=3E75DEACFD3D26DCFD4A39EAF6F0687081808F45A81DF6E66B906B84DFE40336 "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-商品支付页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section1965713469388)。

## 直播购物

直播购物在电商购物场景中很常见。

### 全屏直播间

直播画面和推荐的商品信息，在多端基于设备屏幕尺寸进行响应式适配。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/itcQJu2WS3Oz-sZ4KE9kOw/zh-cn_image_0000002330764666.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=B514D105DF4501F237FA193B2A2CF53FBB1E878287593127578B476A7ACEC7D8 "点击放大")

同一设备上，可根据直播画面比例进行自适应的布局适配。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/UDQCbTuJRWaufVceA08lwA/zh-cn_image_0000002330764662.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=8C8CB4906CCA5C8B84EEF7422F7CB2ACC763811747C1224DA3D4BDCBA8FD0EA4 "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-直播间页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section838561613490)。

### 边看边买

**直播 + 商品详情**

在看直播时，经常需要一边听商品讲解一边浏览商品信息，可利用侧边辅助面板查看商品详情，提升购买决策效率。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/Y-Nuf43CSlezRLPpDww6nQ/zh-cn_image_0000002330764658.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=380B7F3259708F54E978D4EFDA6760279B496DB61838A03A96CD5AC7AE7C5C64 "点击放大")

**直播 + 直播间购物袋**

看直播时，会有临时查看直播间中直播商品的诉求，通过侧边辅助面板可快速查看直播间购物袋直播商品，提高浏览效率。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/aytvI9iZR9GkPRNux788rw/zh-cn_image_0000002364802869.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=8F08D920D0A786B4E93B5A2338F5C142DB3129510987249C954C3ABD654A5BEB "点击放大")

**直播 + 支付**

^看直播时，可以通过侧边辅助面板直接进行支付，确保任务不会被中断和支付效率。^

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/KS3ACo1zQrCg-P7iYSpc2g/zh-cn_image_0000002364802889.png?HW-CC-KV=V1&HW-CC-Date=20261008T191054Z&HW-CC-Expire=31536000000&HW-CC-Sign=FA3E5E398C242F18E2E3C808C7DA7359EAE43FD16682202736C9EF0084609BBD "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-直播侧边面板页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section972591693910)。

