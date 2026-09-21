---
name: document/cn/harmonyos-faqs/faqs-project-management-15
title: 如何解决Windows系统使用DevEco Studio时SDK卸载失败，报“Unable to rename the file. Cause:Unable to delete D:\xxx\default”错误
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-project-management-15
---

# 如何解决Windows系统使用DevEco Studio时SDK卸载失败，报"Unable to rename the file. Cause:Unable to delete D:\xxx\default"错误

**问题描述**

Windows系统使用DevEco Studio时，SDK卸载失败，提示错误信息。

Unable to rename the file. Cause: Unable to delete D:\\xxx\\default.

**解决方案**

1、启动任务管理器。

2、切换到"性能"选项卡。

3、点击下方"打开资源监视器"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/nQqg5fUxS8iZfhOEdf-jfA/zh-cn_image_0000002624638340.png?HW-CC-KV=V1&HW-CC-Date=20260916T082507Z&HW-CC-Expire=31536000000&HW-CC-Sign=84EECE98C0EAC47AC3827CF936C34375EF5AD0A8C270FFDBD4BF8ECF5F179B8F)

4、将路径 D:\xxx\default 粘贴到关联句柄窗口右侧的搜索栏中，按回车键搜索占用的进程，然后结束该进程。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/sicgiUH2Q9WseHeLH3aJ1w/zh-cn_image_0000002654837745.png?HW-CC-KV=V1&HW-CC-Date=20260916T082507Z&HW-CC-Expire=31536000000&HW-CC-Sign=ED439A2A49D24AA7A71427431CE11A51AFE3086ABF05E53C0954D95D4F1518CE)

