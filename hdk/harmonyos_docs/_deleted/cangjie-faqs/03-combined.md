---
name: cangjie-faqs/03-combined
title: 子包的仓颉代码修改后运行未生效
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/03-combined
nodePath: FAQ / 工程构建 / 子包的仓颉代码修改后运行未生效
---

# 子包的仓颉代码修改后运行未生效

#### 问题现象

先编译应用推送运行，然后修改模块中子包的仓颉代码，同时在模块的cjpm.toml中增加profile.build.combined配置，再次编译应用推送运行，新修改的仓颉代码未生效。

#### 解决措施

因为新增加profile.build.combined配置会影响子包的产物类型，需要先点击Build > Clean Project清除之前的产物，再编译推送运行。
