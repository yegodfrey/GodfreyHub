---
name: cangjie-guides/cj-code-check-real-time
title: 代码实时检查
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-check-real-time
nodePath: 编写与调试应用 / 代码编辑 / 代码检查 / 代码实时检查
---

# 代码实时检查

编辑器会实时的进行代码分析，如果输入的语法不符合编码规范，或者出现语义语法错误，将在代码中突出显示错误或警告，将鼠标放置在错误代码处，会提示详细的错误信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/OFoLKNxkQ8-PpAxQuTJAbQ/zh-cn_image_0000002713558986.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=9E5C94A88189D01C09EF5445A9DE0DA3697753D803C76DBA123DC28292760151)

#### 快速修复

编辑器当前提供删除未使用 import 语句、自动导入未定义符号、删除未使用符号定义和生成未实现抽象方法的快速修复，可以通过将鼠标放置在错误代码处使用。

#### [h2]删除未使用 import 语句

对于未使用 import 语句的诊断提示，编辑器提供快速删除 import 语句的快速修复。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/nvj6FXNtQjOzkjdiuWpwgQ/zh-cn_image_0000002743197899.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=7E742489772C73676428CD6983C31A80CE8843C5BD9E900DE5819BBF707F5B73)

如果文件中存在多个未使用 import 语句的诊断提示，提供一键删除文件中所有未使用 import 语句的快速修复。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/ff286kXZRkSdqq4rAi6myg/zh-cn_image_0000002713399018.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=03426F5F4E88C937F89BD0220E0E0219AB6875C7112C90CAA4D3B19A88257F6E)

#### [h2]自动导入未定义符号

对于未定义符号的诊断提示，编辑器根据是否存在可导入同名符号提供导入符号的快速修复。当前仅支持顶层声明符号的自动导入。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/EMbbqDMrQt-d8ooqaVvIXw/zh-cn_image_0000002743077949.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=3E2130C4E98AD2ED316AB8C99C4752D446868AD4AD864798908E657E55E4721E)

如果一个诊断提示中存在多个未定义符号，提供一键导入多个未定义符号的快速修复。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/01/v3/hXqy3iX4Q0mi0efwW00w1g/zh-cn_image_0000002713558988.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=8C75DA13028B8CF0616C871E11FAADD48407A041E575D1AE46A55F804D3ADE82)

#### [h2]删除未使用符号定义

对于未使用符号的诊断提示，编辑器提供快速删除该符号定义的快速修复。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/6uhdlt8LTKmuan-dw11Wvg/zh-cn_image_0000002743197901.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=CAA183C4953058955592085873CB63F7659FC3029E933E298C79C1DC0536B7B7)

#### [h2]生成未实现抽象方法

对于子类中存在未实现抽象方法的诊断提示，编辑器提供一键生成所有未实现抽象方法的快速修复。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/WtM6_4tATHyW38dr0mn17Q/zh-cn_image_0000002713399020.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=81E5B99C8E8113E7D0389B024061D73CF88015C3FB48FB6BEF6AB195785A039D)
