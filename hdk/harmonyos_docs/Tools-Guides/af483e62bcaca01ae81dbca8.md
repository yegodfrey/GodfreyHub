---
name: document/cn/Tools-Guides/disc-io-metrics-0000001837974613
title: Disc I/O Metrics
uri: https://developer.huawei.com/consumer/cn/doc/Tools-Guides/disc-io-metrics-0000001837974613
---

# Disc I/O Metrics

这些计数器显示已装载磁盘利用率的详细信息，例如在一段时间内读取或写入的字节数。这些信息可以帮助估计磁盘I/O操作是否会导致性能问题。

这些计数器从proc/diskstats系统文件轮询。
> 说明
>
> HarmonyOS 5.0及以上版本设备不支持该监控项。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/rFAfEGuCQiSZjULWoYVkAw/zh-cn_image_0000001928616793.png?HW-CC-KV=V1&HW-CC-Date=20261008T143425Z&HW-CC-Expire=31536000000&HW-CC-Sign=7CAE3ADB313DA714E30CC6C2E6BBFFB48C1FC91745861C22D9ECED8C9CDAFDB6)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/I5RyXD2VTXmnC7RK-8GLtg/zh-cn_image_0000001837974709.png?HW-CC-KV=V1&HW-CC-Date=20261008T143425Z&HW-CC-Expire=31536000000&HW-CC-Sign=AFE60556FE777750CEA395FF48F6E9A864D955532E96711370F80D0DF95D85B7)

要在跟踪中启用Disc I/O Metrics，必须包括以下数据源。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1c/v3/9E8LqU1AQayu7Jkq3LYuIw/zh-cn_image_0000001837854761.png?HW-CC-KV=V1&HW-CC-Date=20261008T143425Z&HW-CC-Expire=31536000000&HW-CC-Sign=9FFCF0A32567020813399884A7D7982A885ACAA807117350CA4BE7D8445248CA)

