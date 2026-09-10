---
name: cangjie-references/cj-io_package_enums
title: 枚举
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_enums
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.io / 枚举
---

# 枚举

#### enum SeekPosition
    
    
    public enum SeekPosition {
        | Current(Int64)
        | Begin(Int64)
        | End(Int64)
    }

功能：该枚举类型表示光标在文件中的位置。

#### [h2]Begin(Int64)
    
    
    Begin(Int64)

功能：表示从起点开始移动指定的长度。

#### [h2]Current(Int64)
    
    
    Current(Int64)

功能：表示从当前位置开始移动指定的长度。

#### [h2]End(Int64)
    
    
    End(Int64)

功能：表示从末尾开始移动指定的长度。
