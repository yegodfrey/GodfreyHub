---
name: cangjie-faqs/15-environment
title: 仓颉如何获取环境变量信息
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/15-environment
nodePath: FAQ / 标准库 / 仓颉如何获取环境变量信息
---

# 仓颉如何获取环境变量信息

仓颉标准库[std.env](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_overview)包提供获取、设置、删除环境变量的接口。

使用示例如下：
    
    
    public func FAQ33Test(): Unit {
        setVariable("new_env_key", "new_env_value")
        Hilog.info(0, "Cangjie Test", getVariable("new_env_key").toString())
        removeVariable("new_env_key")
        Hilog.info(0, "Cangjie Test", getVariable("new_env_key").toString())
    }

调用FAQ33Test，日志输出结果：
    
    
    Some(new_env_value)
    None
