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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/rFAfEGuCQiSZjULWoYVkAw/zh-cn_image_0000001928616793.png?HW-CC-KV=V1&HW-CC-Date=20260909T133428Z&HW-CC-Expire=31536000000&HW-CC-Sign=C8A0F2F946013709A2C182062332DFF22380867C0120075E1BCA695829DFF7AB)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/I5RyXD2VTXmnC7RK-8GLtg/zh-cn_image_0000001837974709.png?HW-CC-KV=V1&HW-CC-Date=20260909T133428Z&HW-CC-Expire=31536000000&HW-CC-Sign=BDDF45BDEE61175B7D0AA8A872AD967083CADF93DC31180D2E0CD265878D3830)

要在跟踪中启用Disc I/O Metrics，必须包括以下数据源。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1c/v3/9E8LqU1AQayu7Jkq3LYuIw/zh-cn_image_0000001837854761.png?HW-CC-KV=V1&HW-CC-Date=20260909T133428Z&HW-CC-Expire=31536000000&HW-CC-Sign=22E4C9965DD8E6C0815417A06B2D952F67D20900C102E38A385789CDA35FFCD2)

