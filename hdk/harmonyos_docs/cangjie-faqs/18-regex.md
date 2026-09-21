---
name: cangjie-faqs/18-regex
title: 仓颉语言中如何使用正则表达式
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/18-regex
nodePath: FAQ / 标准库 / 仓颉语言中如何使用正则表达式
---

# 仓颉语言中如何使用正则表达式

在仓颉语言标准库中提供了正则表达式相关能力，详情请参见[std.regex](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_overview)。

regex包提供使用正则表达式分析处理文本的能力，支持查找、分割、替换、验证等功能。

以下是匹配日期的简单正则表达式示例：
    
    
    public func FAQ37Test(): Unit {
        let r = Regex(#"(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})"#)
        let iter = r.lazyFindAll("2024-10-24&2025-01-01", group: true)
        for (md in iter) {
            Hilog.info(0, "Cangjie Test", "found: ${md.matchString()}")
        }
    }

调用FAQ37Test，日志输出结果：
    
    
    found: 2024-10-24
    found: 2025-01-01
