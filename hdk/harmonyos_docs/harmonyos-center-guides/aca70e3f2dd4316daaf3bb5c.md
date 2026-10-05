---
name: document/cn/harmonyos-center-guides/faqs-compiling-and-building-78-0000001940675146
title: DevEco Studio编译报“Operation not permitted”无权限错误
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-center-guides/faqs-compiling-and-building-78-0000001940675146
source: portal
---

DevEco Studio编译报“Operation not permitted”无权限错误  **问题描述** DevEco Studio安装完成后一直报Operation not permitted无权限，具体报错如下所示： ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/r6mTf9w7SqukufLjo6usbg/zh-cn_image_0000002623217775.png?HW-CC-KV=V1&HW-CC-Date=20261005T053112Z&HW-CC-Expire=86400&HW-CC-Sign=C5AF86606BE168C869D3DB54AB80EB366C1DAE539B7F90774D9CD21B0F45D4B2) **解决方案** 通过以下命令查看是否有com.example.myapplication标识 xattr -l /path/to/es2abc 用以下命令删除该标识 xattr -d com.example.myapplication/path/to/es2abc 根因：mac系统对文件访问有限制
