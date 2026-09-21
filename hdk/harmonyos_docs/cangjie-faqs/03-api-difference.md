---
name: cangjie-faqs/03-api-difference
title: ArkTS语言与仓颉语言在HarmonyOS API的差异主要体现在哪
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/03-api-difference
nodePath: FAQ / HarmonyOS API / ArkTS语言与仓颉语言在HarmonyOS API的差异主要体现在哪
---

# ArkTS语言与仓颉语言在HarmonyOS API的差异主要体现在哪

#### 基础数据类型差异

基本数据类型 | ArkTS | Cangjie  
---|---|---  
布尔类型 | boolean | Bool  
字符类型 | 无 | Rune  
字符串类型 | string | String  
有符号整数类型 | number | Int64/Int32/Int16/Int8  
无符号整数类型 | number | UInt64/UInt32/UInt16/UInt8  
浮点类型 | number | Float64/Float32/Float16  
无返回值类型 | void | Unit  
数组类型 | T[] | Array<T>  
联合类型 | Union | 无  
元组类型 | 无 | (T1, T2, ..., TN)  
区间类型 | 无 | start..=end : step  
函数类型 | (TN1:T1, TN2:T2, ..., TNN:TN) => T | (TN1:T1, TN2:T2, ..., TNN:TN) -> T  
  
#### 函数语法差异

#### [h2]函数声明差异

**ArkTS函数声明**
    
    
    function 标识符(函数参数列表): 函数返回值 {
        函数体
    }

**仓颉函数声明**
    
    
    func 标识符(函数参数列表): 函数返回值 {
        函数体
    }

#### [h2]函数参数列表语法差异

函数参数 | ArkTS | Cangjie  
---|---|---  
一般函数参数 | name: type | name: type  
可选参数 | name?: type | 无  
命名参数 | 无 | name!: type  
带默认值参数 | name: type = value | name!: type = value  
变长参数 | 最后一个参数为：...name: type[] | 最后一个参数为：name: Array<type>  
  
#### 接口异步同步差异

ArkData kit中distributedKVStore的backup接口为例

**ArkTS示例：**

backup(file:string, callback: AsyncCallback<void>):void

backup(file:string): Promise<void>

**仓颉示例：**

public open func backup(file: String): Unit

**差异说明：**

对于ArkTS API提供的多为callback、Promise形式异步接口，仓颉API则通过同步接口形式提供。

#### 其他差异

差异点 | ArkTS | Cangjie  
---|---|---  
enum成员编程规范 | 大写字母常量名、枚举值名采用全部大写，单词间使用下划线隔开 | 大驼峰  
创建类的实例 | new类名(构造器参数列表){构造器参数列表} | 类名(构造器参数列表)  
命名空间 | namespace | 不支持  
... | ... | ...  
  
更多ArkTS与仓颉差异详情请参见[ArkTS API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/development-intro-api)以及[Cangjie API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro)。
