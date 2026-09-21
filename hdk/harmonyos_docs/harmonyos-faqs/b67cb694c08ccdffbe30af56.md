---
name: document/cn/harmonyos-faqs/faqs-compiling-and-building-78
title: DevEco Studio编译报“Operation not permitted”无权限错误
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-78
---

# DevEco Studio编译报"Operation not permitted"无权限错误

**问题描述**

DevEco Studio安装完成后一直报Operation not permitted无权限，具体报错如下所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/UYD2TRWdQ4yC54HvvLmrjg/zh-cn_image_0000002654797899.png?HW-CC-KV=V1&HW-CC-Date=20260916T082508Z&HW-CC-Expire=31536000000&HW-CC-Sign=D445D9DA9368BFE2437D735418B6E3AF9D147BA3F9D9AB91A70B41D488C58B18)

**解决方案**

通过以下命令查看是否有com.example.myapplication标识

xattr -l /path/to/es2abc

用以下命令删除该标识

xattr -d com.example.myapplication/path/to/es2abc

根因：mac系统对文件访问有限制

