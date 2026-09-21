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
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/9N0TVFD7QzifjGNVGSyrvg/zh-cn_image_0000002364802897.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=758A993135732930779ABC4E83737E71361947C3CD678A16FAB71B1636FAB463 "点击放大")|

### 首页的卡片响应式布局

有多张卡片时，在宽屏设备上采用延伸布局以露出更多卡片。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/5ylCbIygQ2aINSTFOzQt6w/zh-cn_image_0000002330764670.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=A933462EAFC7D6EFAF6FF1A250AE204D32A772635E643D8777BB6B8380842236 "点击放大")

只有两张卡片时，在更宽的设备上卡片自适应形变。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/aZFQ2a8bSFaSVo7m34Tbgw/zh-cn_image_0000002364842801.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=B699DDBBADD4F4E9D648622CBAA785C6ECCC096E542F9A0215F8844F23D98491 "点击放大")

只有一张卡片时，在宽屏设备上卡片自适应形变 + 挪移布局范式一：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/RM9hS-LOTa69315zTguRAQ/zh-cn_image_0000002330924506.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=A9C6899753EF74DFDB2D6874CB9D064628AB4E7D4A33E48B7849C811FD3D2FD1 "点击放大")

只有一张卡片时，在宽屏设备上卡片自适应形变 + 挪移布局范式二：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/Ar8meCyJSaau5hOF6vWxHw/zh-cn_image_0000002364802945.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=6D09DFBE0C0425030E3544BB519DD97AC9060223D2A6ADDFE199D7621D32FE1D "点击放大")

本场景的开发指南，请参阅[一多开发实例（购物比价）-首页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section1976644133811)。

## 商品分类

商品分类页主要用于快速查找目标商品，在大屏设备上建议通过分栏布局提升查找效率。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/PzYjpcliQxSedP-XTmpjgA/zh-cn_image_0000002364802901.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=05604F22712A6D8D917FB8A09854DCB9BB8F135DCFD43866E307279C3708242B "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-商品分类页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section1048762514385)。

## 商品搜索

为了避免进入整屏搜索界面时产生的大面积跳转，同时也为了规避搜索联想词列表的留白问题，在折叠屏/平板上建议采用轻量化搜索体验。当用户点击搜索框/搜索按钮时，原地激活搜索框，使用搜索面板承载推荐内容和搜索联想词，保持界面布局的整体稳定性。
> 说明
>
> **注：应用根据自身业务属性决策是否在首页使用，推荐运用于二级频道页。**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/_G-WhmLvTsKIr1WokHUvGg/zh-cn_image_0000002364802857.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=2494ADB2AF4F8E3EE45096F80B9A87589E30E20CFC6D7BABDDD1447138C76FE6 "点击放大")

## 商品详情

商品详情页中通常有顶部的商品图片，在折叠屏上建议通过延伸布局露出更多商品图片，在平板上建议从商品列表到进入商品详情时，提供分栏体验，帮助用户更高效的查找商品。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/g7JsP1NoQX-H2dF-DiGwvQ/zh-cn_image_0000002364802893.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=2305FE64024AD15C2ADE7C195986E2ACCC3576336269F822D525622A5B4730BC "点击放大")

平板上分栏布局时，点击全屏按钮，进入全屏，显示全屏的挪移布局。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/VCMusnXZTc2RCORMJo4tEQ/zh-cn_image_0000002364802885.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=48EAAD2020561F9F494FBAACAEADA0893D28B6ACD274A581105C3F7AC9657A15 "点击放大")

也可以为平板提供默认的全屏体验，点击商品卡片直接进入商品详情。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/RxQb1ZTqScSazOst2mdFbA/zh-cn_image_0000002330764610.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=4FD2EA58FFB8ABED5026B9A5D5E97C693DB8DCE7BE2ED1E87CB8BDB94FA67E43 "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-商品详情页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section112893356386)。

平板上挪移布局显示商品详情时，查看下一层级内容时，建议使用以下两种范式。

范式一：在商品详情页，点击评论等功能进入下一层级页面时，通过侧边面板显示下一层级内容：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/lvHUW0A5R_-teSszkfgc8Q/zh-cn_image_0000002594923034.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=13FF714918778A9825A79C5BDCD50D2DC6D3A885F84AEE9EC4FDCFE617E36091 "点击放大")

范式二：在商品详情页，点击评论等功能进入下一层级页面时，原来的全屏界面被缩窄，右侧露出的面板上显示下一层级内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/MfWrabLzRZiSTOPZns3g0g/zh-cn_image_0000002364842753.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=4A5457517F196852CEF0D31A521E80FC2DB5C76C9E3E4644986AE19FA9FFBE06 "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-商品详情侧边面板页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section8305102524814)。

## 分屏购物比价

查看商品详情时，在宽屏设备上，可点击应用内"分屏"按钮进行分屏，可满足同时查看两个商品的详细参数进行购物比价的诉求。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/5lkMkiZvTGGzyPY1Hd40vQ/zh-cn_image_0000002594749008.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=4B1C52AA701F7B052CEA46D83BE0301579AFBD46CFD94027DC6FE01799051805 "点击放大")

形成分屏后，"分屏"按钮自动切换为"全屏"按钮，可再次点击"全屏"按钮回到当前获焦窗口的全屏，退出另一侧的分屏任务。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/MbvryFEBTg2TOWBFdY2wwA/zh-cn_image_0000002625349009.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=961AB41B2E3A17C181640C2D7301ACCE05D8D8AF01F2719F0312FB4D3D3F66AC "点击放大")

多端的应用内分屏购物比价效果：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/cGbsFsGtQFC6i3WmvzX2WA/zh-cn_image_0000002364802913.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=C2CDE8FCBDC42D4DF7C381D5FB5FA73BF9F840EED9EFD4D14637199A532A7C0F "点击放大")

## 侧边面板咨询客服

在查看商品详情时，经常会有咨询客服的诉求，可采用侧边辅助面板显示客服对话等辅助信息，从而提升浏览效率，实现边看商品详情边聊天咨询的体验。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/z4I9llyvTKesGDBp95OYXA/zh-cn_image_0000002625282805.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=1A049D1485D6EF5F0263C4A4514544351DF7FDE41F2B5719442AEAE471D19B2E "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/EMnsDREuRP6ll5ch8iiKfw/zh-cn_image_0000002625363443.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=0E1F16DF16DD4C220633563A27979601ACF220387F7506B3418F749B4C29D06A "点击放大")

侧边面板同样可用于更多场景，例如在商品详情页临时打开购物车、查看评论、查看店铺信息等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/t4TIq_WpTjmMtDWlDwfF3w/zh-cn_image_0000002364802905.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=8FF55DE1CDC22FA29F5F85342D26E0325FA181E99ED20859E54BA51060E333BE "点击放大")

## 购物车

购物车页面通常用于快速查看并支付待购买的商品。折叠上可全屏适配显示更多关键参数信息，平板和更大尺寸的屏幕设备的显示区域较大，为避免界面留白较多信息过疏，建议采用重复布局、露出辅助信息等方式确保页面的使用效率。

范式一：重复布局

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/dT-mEFD6SB28XWJDUwTgBw/zh-cn_image_0000002364802853.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=5E7C09FADFFEEC5FC603B99EDEC200350C8AA7EB300F48FFEC3C47CDDF68CC64 "点击放大")

范式二：右侧露出辅助信息

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/ul0-2xp8RB-tWKIN8kpm-Q/zh-cn_image_0000002330924494.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=27914F47C4E9E0A1B7E18D0CFF86AA95826744B948D1B2EF4E4E2CE83C6DB61B "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-购物车页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section49871612174810)。

|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|范式三：从列表变卡片 查看商品详情时，有需要临时查看购物车内待支付商品的诉求，可利用侧边辅助面板显示购物车页面，提升浏览效率。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/A_m_RNtOTve36eKl-VDj6g/zh-cn_image_0000002330764598.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=F98228CC365836BA71075F1118FD141A96074AD64995F2DE2ADC9937DB29D603 "点击放大")|
|  |

## 浅层窗口支付

全屏商品详情支付时，采用浅层窗口可以有效避免大面积的页面跳转带来的体验中断。平板和折叠屏上调用居中的半模态控件；手机上调用底部半模态控件，来实现浅层窗口体验。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/4AiiWPqeQNCNF3yi8d3tHg/zh-cn_image_0000002330924446.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=0C333F657785806A4D0B8AB327DF74977392A841F4929D2F89CA62BFDD8673A9 "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-商品支付页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section1965713469388)。

## 直播购物

直播购物在电商购物场景中很常见。

### 全屏直播间

直播画面和推荐的商品信息，在多端基于设备屏幕尺寸进行响应式适配。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/itcQJu2WS3Oz-sZ4KE9kOw/zh-cn_image_0000002330764666.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=B7C4D02AAE8007ECFA1C9F70894417804011D59840428064DCD8250CB382C452 "点击放大")

同一设备上，可根据直播画面比例进行自适应的布局适配。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/UDQCbTuJRWaufVceA08lwA/zh-cn_image_0000002330764662.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=5A7B7A9B7D97645627FD8F66501DBE30935B6CE75F7B2797B64A182ABD4EE694 "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-直播间页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section838561613490)。

### 边看边买

**直播 + 商品详情**

在看直播时，经常需要一边听商品讲解一边浏览商品信息，可利用侧边辅助面板查看商品详情，提升购买决策效率。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/Y-Nuf43CSlezRLPpDww6nQ/zh-cn_image_0000002330764658.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=11353D5321A9248AA1538BBD2EE95BDEF16F5A474FF67CDEC8971B75834F67F1 "点击放大")

**直播 + 直播间购物袋**

看直播时，会有临时查看直播间中直播商品的诉求，通过侧边辅助面板可快速查看直播间购物袋直播商品，提高浏览效率。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/aytvI9iZR9GkPRNux788rw/zh-cn_image_0000002364802869.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=F7FDBC02CC1E6321FE87070AD553283F9B1942FA5904F01F572E9DF9FB98EBD7 "点击放大")

**直播 + 支付**

^看直播时，可以通过侧边辅助面板直接进行支付，确保任务不会被中断和支付效率。^

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/KS3ACo1zQrCg-P7iYSpc2g/zh-cn_image_0000002364802889.png?HW-CC-KV=V1&HW-CC-Date=20260909T180843Z&HW-CC-Expire=31536000000&HW-CC-Sign=3DE04B63ABF8DB77A3D0E479E62800BA43FA037B4EF019979E8C54D3DF6AAA88 "点击放大")

本场景的开发指南，请参阅[一多开发实例 (购物比价)-直播侧边面板页](https://developer.huawei.com/consumer/cn/doc/best-practices/multi-shopping-price-comparison#section972591693910)。

