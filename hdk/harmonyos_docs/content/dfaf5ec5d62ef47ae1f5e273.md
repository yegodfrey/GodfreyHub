---
name: document/cn/content/preparation-0000001574244245
title: 制作准备
uri: https://developer.huawei.com/consumer/cn/doc/content/preparation-0000001574244245
---

# 制作准备

## 视觉设计

基于要制作的表盘分辨率，进行表盘视觉设计，包含[亮屏表盘](https://developer.huawei.com/consumer/cn/doc/content/watch-face-introduction-0000001566918497#section0147798445)和[熄屏表盘](https://developer.huawei.com/consumer/cn/doc/content/watch-face-introduction-0000001566918497#section2023216179448)视觉。

> 说明
>
> 1. 进行视觉设计时，需考虑当前分辨率表盘支持的能力集，详见：
>    * [466*466能力集](https://developer.huawei.com/consumer/cn/doc/content/466-capability-0000001881726154)
>    * [390*390/454*454能力集](https://developer.huawei.com/consumer/cn/doc/content/454-capability-0000001580733885)
>    * [280*456/336*480能力集](https://developer.huawei.com/consumer/cn/doc/content/280-capability-0000001592176765)
>    * [194*368能力集](https://developer.huawei.com/consumer/cn/doc/content/194-capability-0000001591976781)
> 2. 仅部分手表设备支持熄屏表盘，详见[分辨率与版本号](https://developer.huawei.com/consumer/cn/doc/content/resolution-version-0000001252603441)。

**466*466** **视觉设计示例：**

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250820185429.23553162857361569812485399845142:50001231000000:2800:2F8717E0932564FD87860D5916D2CD3E308FDD6EA8B0C22E6E7B2D2E9450FA5B.png "点击放大")

## 切图准备

按照表盘视觉设计，制作切图：

* 按照背景、时间（时、分、秒）、日期（月、日、星期）和控件（天气、步数等）四大元素，进行元素分解。
* 将每个元素按照具体绘制类型，分解为一个或多个图层。
* 针对每个图层绘制所需要的资源进行切图导出。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250820185430.16694585111145703555384739337869:50001231000000:2800:0839BF4DF21AA140793C29DFA43E48BCD40DED66AF1EC46E7A85CD87545EDBA6.png "点击放大")

> 说明
>
> 1. 图片文件建议采用A100_002.png、A100_003.png......这样的格式次序命名，避免图片素材导入出错。
> 2. 如何确定特定数据对应多少张切图？详见[数值类型](https://developer.huawei.com/consumer/cn/doc/content/value-type-0000001529974532)。
> 3. 不同分辨率的表盘资源包具有不同的[制作校验](https://developer.huawei.com/consumer/cn/doc/content/constraints-0000001580893701)，请在规定的范围内进行切图准备。

**466*466切图示例：**

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250820185430.09894518518311874592099995776369:50001231000000:2800:07EDE95DB35B4A38D070E5AC82CCFB4BDE796908B57E844126F1FFFF8656FA93.png "点击放大")

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250820185430.70537640959070708960782533677727:50001231000000:2800:79AF707F3CB5CB97AE90DDC44E9110FDF3BE715174BA8E3F775A5F5922D7C13C.png "点击放大")

## 工具准备

仅支持使用[Theme Studio](https://developer.huawei.com/consumer/cn/doc/development/Tools-Library/theme_download-0000001050424897)制作表盘，否则上传表盘资源包时将无法通过主题联盟的校验。

* **工具下载** ：点击下载[Theme Studio](https://developer.huawei.com/consumer/cn/doc/development/Tools-Library/theme_download-0000001050424897)。
* **工具简介** ：详见[Theme Studio简介](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/overview-0000001050145150)。

