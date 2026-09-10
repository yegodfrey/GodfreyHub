---
name: cangjie-guides/cj-defining_and_importing_macro_package
title: 宏包定义和导入
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-defining_and_importing_macro_package
nodePath: 基础入门 / 学习仓颉语言 / 宏 / 宏包定义和导入
---

# 宏包定义和导入

仓颉语言中宏的定义需要放在由 macro package 声明的包中，被 macro package 限定的包仅允许宏定义对外可见，其他声明包内可见。
    
    
    // file define.cj
    macro package define         // 编译 define.cjo 携带 macro 属性
    import std.ast.*
    
    public func A() {}          // Error, 宏包不允许定义外部可见的非宏定义，此处会报错
    
    public macro M(input: Tokens): Tokens { // macro M 外部可见
        return input
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/VicpoZ-yTwG8ylqWvojUEg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111553Z&HW-CC-Expire=86400&HW-CC-Sign=C1EFD49555F495E47C2A09C5700A17A42E7EFDC7364D4654C0D9416A527D64FF)

  * 重导出的声明也允许对外可见，关于包管理和重导出的相关概念，请参见[包的导入](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-import)章节。
  * 在宏包中，允许其他宏包和非宏包的声明被重导出。在非宏包中仅允许非宏包的声明被重导出。
  * 使用宏时，需要同时导入该宏依赖的包（宏定义时如果重导出了依赖的部分，则可以不导入依赖包），并在使用 cjc 编译时用 -l 连接依赖包。否则，代码编译过程中会报错（找不到相关依赖）。



在宏包中重导出宏包和非宏包，示例如下：

  * 在宏包 A 中定义宏 M1
        
        macro package A
        
        import std.ast.*
        
        public macro M1(input: Tokens): Tokens {
            return input
        }

编译命令如下：
        
        cjc A.cj --compile-macro

  * 在非宏包 B 中定义一个 public 函数 f1。注意在非 macro package 中无法重导出 macro package 的符号
        
        package B
        // public import A.* // Error, it is not allowed to re-export a macro package in a package.
        
        public func f1(input: Int64): Int64 {
            return input
        }

编译命令如下，这里选择使用 --output-type 选项将 B 包编译成动态库，关于 cjc 编译选项介绍可以参考 "附录 > cjc 编译选项"。
        
        cjc B.cj --output-type=dylib -o libB.so

  * 在宏包 C 中定义宏 M2，依赖了 A 包和 B 包的内容。可以看到 macro package 中可以重导出 macro package 和非 macro package 的符号
        
        macro package C
        
        public import A.* // correct: macro package is allowed to re-export in a macro package.
        public import B.* // correct: non-macro package is also allowed to re-export in a macro package.
        import std.ast.*
        
        public macro M2(input: Tokens): Tokens {
            return @M1(input) + Token(TokenKind.NL) + quote(f1(1))
        }

编译命令如下，注意这里需要显式链接 B 包动态库：
        
        cjc C.cj --compile-macro -L. -lB

  * 在 main.cj 中使用 M2 宏
        
        import C.*
        
        main() {
            @M2(let a = 1)
        }

编译命令如下：
        
        cjc main.cj -o main -L. -lB

main.cj中 M2 宏展开后的结果如下：
        
        import C.*
        
        main() {
            let a = 1
            f1(1)
        }




可以看到 main.cj 中出现了来自于 B 包的符号 f1。宏的编写者可以在 C 包中重导出 B 包里的符号，这样宏的使用者仅需导入宏包，就可以正确地编译宏展开后的代码。如果在 main.cj 中仅使用 import C.M2 导入宏符号，则会报 undeclared identifier 'f1' 的错误信息。
