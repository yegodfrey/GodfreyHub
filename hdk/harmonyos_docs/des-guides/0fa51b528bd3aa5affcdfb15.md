---
name: document/cn/des-guides/app-navigation-0000001054723026
title: 应用中的导航结构
uri: https://developer.huawei.com/consumer/cn/doc/des-guides/app-navigation-0000001054723026
source: portal
---

# 应用中的导航结构

应用中的导航用于引导用户在应用的各个页面进行浏览。好的导航让用户知道身处何处，去往何方，以及来自哪里。

#### 导航的原则

导航需要遵循以下原则：

     * 一致。导航操作的结果应该与用户的期望保持一致。相同或类似的场景使用用户熟悉的界面布局和控件，确保一致的导航行为，让用户无论在什么页面，都知道如何导航。例如二级界面使用左上角的返回按钮来返回界面的上一个层级。
     * 清晰。导航应该提供清晰的路径。用户使用的时候，逻辑关系简单且容易理解，能够知道当前处在界面的什么位置，操作后将会跳转到什么位置，不会迷失方向。例如使用底部页签，让用户在平级页面之间进行切换。

导航要避免以下设计：
     * 层级过深：导航层级建议在三层以内。对于太深的层次，会带来操作效率的问题。如果确实需要深层级设计，建议使用面包屑设计或增加一键回到首页的功能。
     * 导航复杂：导航设计中应避免同一层级导航同时使用，例如底tab和侧边导航都属于一级导航，如果同时使用会造成导航层级混乱，建议仅使用底tab导航或者仅使用侧边导航。

#### 导航的分类

常用的应用导航有：

     * 平级导航
     * 层级导航
     * 混合导航

#### [h2]平级导航

平级导航结构中，页面均处在同一层级。

使用场景：用于展示同等地位或同等层级的界面。例如以TAB方式组成的页面。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630105011.54166044994788979493940990370779:50001231000000:2800:67728B4B724BF39638EED57DFBD1BAD5065A232B3031F95F15E0E05949588211.jpeg?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### [h2]层级导航

层级导航结构由父页面和子页面组成。父页面可以有一个或多个子页面。每个子页面都有一个父页面。

层级导航适用于多层级的复杂结构。层级结构深的内容，用户访问的路径变长，效率降低，可以通过适当的层级穿透设计（如快捷方式）解决此问题。

使用场景：页面存在上下级关系的应用。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630105011.56260766735632714765348096793617:50001231000000:2800:3A4DED3738B8DBF2065FDA1751C5134275FB1CE4FFC60025FB22FF8EACEA1CF4.jpeg?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### [h2]混合导航

在应用中，对同等地位或同等层级的页面使用平级导航结构，对具有复杂关系的页面使用层级导航结构。

使用场景：应用由几个同等级的模块组成，每个模块又有上下层级关系页面。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630105011.57065660882021416277792442470978:50001231000000:2800:FABA4CAE516CD6D30ADD6E3628273835F1A35F1DE3A3A6A195B12B6092533DCF.jpeg?needInitFileName=true?needInitFileName=true?needInitFileName=true)
