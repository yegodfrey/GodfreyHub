---
name: document/cn/harmonyos-center-guides/faqs-app-running-23-0000002180563628
title: macOS上活动监视器中显示模拟器内存偏高
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-center-guides/faqs-app-running-23-0000002180563628
source: portal
---

macOS上活动监视器中显示模拟器内存偏高 配置模拟器内存为4GB并使用一段时间后，在活动监视器中可能发现模拟器进程占用的内存超过6GB（如下图所示）。请注意，图中的6.49GB不代表模拟器进程实际使用的物理内存（即Dirty内存），而是指其占用的phys_footprint内存。在Mac系统中，针对虚拟化平台（如模拟器），phys_footprint内存通常远高于Dirty内存。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/0D_BKKJnSGaDa5y24iNnBQ/zh-cn_image_0000002592938020.png?HW-CC-KV=V1&HW-CC-Date=20261005T053044Z&HW-CC-Expire=86400&HW-CC-Sign=7EFB5372EC8869FB4542CF7E6B2341979112C0C68E5AC321823836A97C69B8DC) 想要查看模拟器的Dirty内存，首先打开活动监视器，查看Emulator的进程号（PID）。然后通过 `footprint -vmObjectDirty 进程号` 命令可以查看Dirty内存大小。
