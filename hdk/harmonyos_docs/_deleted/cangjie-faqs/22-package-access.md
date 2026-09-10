---
name: cangjie-faqs/22-package-access
title: 仓颉语言的包和访问修饰符如何配合使用
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/22-package-access
nodePath: FAQ / 语法 / 仓颉语言的包和访问修饰符如何配合使用
---

# 仓颉语言的包和访问修饰符如何配合使用

仓颉语言使用包（package）组织代码，通过4级访问修饰符控制声明的可见范围，两者配合实现代码的封装与模块化。

#### 包声明与导入

每个包都有自己的包名。在仓颉中使用package声明包，使用import导入包或包的成员：
    
    
    package myapp.utils
    
    public func helper(): String {
        "helper"
    }
    
    
    package myapp.main
    
    import myapp.utils.helper
    
    public func run(): Unit {
        helper()
    }

#### 顶层声明访问修饰符

以下表格适用于顶层声明（函数、类、变量等）：

修饰符 | 当前文件 | 包及子包 | 当前模块 | 全局  
---|---|---|---|---  
private | ✓ | ✗ | ✗ | ✗  
internal（默认） | ✓ | ✓ | ✗ | ✗  
protected | ✓ | ✓ | ✓ | ✗  
public | ✓ | ✓ | ✓ | ✓  
  
#### 使用示例
    
    
    package demo
    
    // 顶层声明的访问修饰符示例
    private func privateFunc(): Unit {} // 仅当前文件可见
    
    func internalFunc(): Unit {} // internal（默认）：当前包及子包可见
    
    protected func protectedFunc(): Unit {} // 当前模块可见
    
    public func publicFunc(): Unit {} // 全局可见

#### 类成员访问修饰符

类成员的访问修饰符规则略有不同：

修饰符 | 可见性  
---|---  
private | 仅在类定义内  
internal（默认） | 当前包及子包  
protected | 当前模块及**子类**  
public | 全局可见  
      
    
    class MyClass {
        private var privateVar: Int64 = 0 // 仅类内部可见
        var internalVar: Int64 = 0 // 当前包及子包可见
        protected var protectedVar: Int64 = 0 // 当前模块及子类可见
        public var publicVar: Int64 = 0 // 全局可见
    }

#### 访问级别约束

声明的访问级别不能超过其使用的类型的访问级别（参数、返回类型、泛型约束等）。

#### import as解决冲突

当不同包中存在同名声明时，使用import as重命名：
    
    
    import pkg1.Config as Config1
    import pkg2.Config as Config2

更多包与访问修饰符的使用方法，详情请参见[包](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-package)和[访问规则](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-access_rules)。
