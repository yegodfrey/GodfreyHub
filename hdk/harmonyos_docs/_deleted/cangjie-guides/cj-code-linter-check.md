---
name: cangjie-guides/cj-code-linter-check
title: 代码Code Linter检查
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-linter-check
nodePath: 编写与调试应用 / 代码编辑 / 代码检查 / 代码Code Linter检查
---

# 代码Code Linter检查

DevEco Studio 中的代码检查工具 Code Linter 集成了 [Cangjie Lint](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-cjlint_manual)，通过 Code Linter 可以对仓颉代码进行静态检查。

#### 全量检查

按照如下步骤操作，即可对仓颉代码进行静态检查。

  1. 在仓颉目录或者仓颉文件上右击选择 **Code Linter** 选项。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/tIqGyQk_QU2N5qNTjipGTw/zh-cn_image_0000002701659714.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=F83F75A3B8CAF1BC01E1DDDFF5C4A4622F86C7C327190A06FFE5634CDC05AC8E)

  2. 在下方可以查看代码检查结果，且在对应的代码编辑区位置有标记。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1c/v3/ld_YyCz_S3C-CXE1aVMLeA/zh-cn_image_0000002731378929.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=56F5F68DA9987271A96A8538B7F9F68EA7EDCA485F82E40F50FFC47BB7BA1080)

  3. 在代码检查结果区的左侧，可以查看到当前代码告警的基本信息及正确处理方式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/n5YzmLT9Sm6jF1q15t2f4g/zh-cn_image_0000002701819624.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=0A892888A694A900241225FB416908BE3D75F8FFC9F1074D7BBF45E2DF643F9F)




#### 增量检查

Code Linter 支持对使用Git工具进行仓库管理的工程执行增量代码检查，若开发者选择的仓颉module中没有代码改动，检查结果为空。

  1. 在仓颉目录上右击选择 **Incremental Linter** 即可对仓颉代码进行增量代码检查。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/ppfmdSoKR-iwSY2Fi6xN9A/zh-cn_image_0000002731538905.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=AAD45474BF228A3EADF24388251A02011A7EAE542FD8F0EA110B782A1FD564A6)

  2. 检查结果与告警的基本信息查看方式同全量检查一致。



