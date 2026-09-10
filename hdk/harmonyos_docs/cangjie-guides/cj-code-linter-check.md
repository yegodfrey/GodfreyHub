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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/Ssn6jharR_WyRbGfL6dCLg/zh-cn_image_0000002743077951.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=C327EE4E81EDA7540E47D5AE80C875DB84FAF1ADAA2F30192AD6001C63578AFA)

  2. 在下方可以查看代码检查结果，且在对应的代码编辑区位置有标记。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/Z8Tisn0MQMeI6HoqcJgdIg/zh-cn_image_0000002713558990.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=7B7250A8BCC30F4713D0D23D81EFD93A48D959282E2B146FE9EC2B9948CBA6E0)

  3. 在代码检查结果区的左侧，可以查看到当前代码告警的基本信息及正确处理方式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/siNmXqkMTmGXKrrTYAaE1Q/zh-cn_image_0000002743197903.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=82B6A97EA4D45962DF890766EE5B969D7B288A15F173E14934D6728FF4C054FE)




#### 增量检查

Code Linter 支持对使用Git工具进行仓库管理的工程执行增量代码检查，若开发者选择的仓颉module中没有代码改动，检查结果为空。

  1. 在仓颉目录上右击选择 **Incremental Linter** 即可对仓颉代码进行增量代码检查。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/ec2M5gE1TNmB9kGk6IYKzg/zh-cn_image_0000002713399022.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=510341B35DD2522D644344016D50A436479B454E4BECD16FBC5A6129FAFFEB2D)

  2. 检查结果与告警的基本信息查看方式同全量检查一致。



