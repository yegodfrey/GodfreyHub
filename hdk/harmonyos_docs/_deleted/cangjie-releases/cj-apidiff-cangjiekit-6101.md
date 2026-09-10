---
name: cangjie-releases/cj-apidiff-cangjiekit-6101
title: Cangjie Kit
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-releases/cj-apidiff-cangjiekit-6101
nodePath: 版本说明 / HarmonyOS 6.1.0(23)-仓颉 / OS平台能力 / API变更清单 / Cangjie Kit
---

# Cangjie Kit

操作 | 旧版本 | 新版本 | cj.d文件  
---|---|---|---  
新增API | NA | 类名：ThreadSnapshot API声明：PLAIN_TEXT 差异内容：PLAIN_TEXT | std.core.cj.d  
新增API | NA | 类名：ThreadSnapshot API声明：let id: Int64 差异内容：let id: Int64 | std.core.cj.d  
新增API | NA | 类名：ThreadSnapshot API声明：let name: String 差异内容：let name: String | std.core.cj.d  
新增API | NA | 类名：ThreadSnapshot API声明：let stackTrace: Array<StackTraceElement> 差异内容：let stackTrace: Array<StackTraceElement> | std.core.cj.d  
新增API | NA | 类名：ThreadSnapshot API声明：let state: ThreadState 差异内容：let state: ThreadState | std.core.cj.d  
新增API | NA | 类名：ThreadSnapshot API声明：static func dumpAllThreads(): Array<ThreadSnapshot> 差异内容：static func dumpAllThreads(): Array<ThreadSnapshot> | std.core.cj.d  
新增API | NA | 类名：ThreadSnapshot API声明：static func dumpCurrentThread(): ThreadSnapshot 差异内容：static func dumpCurrentThread(): ThreadSnapshot | std.core.cj.d  
新增API | NA | 类名：ThreadSnapshot API声明：func toString() 差异内容：func toString() | std.core.cj.d  
新增API | NA | 类名：ThreadState API声明：PLAIN_TEXT 差异内容：PLAIN_TEXT | std.core.cj.d  
新增API | NA | 类名：ThreadState API声明：Ready 差异内容：Ready | std.core.cj.d  
新增API | NA | 类名：ThreadState API声明：Running 差异内容：Running | std.core.cj.d  
新增API | NA | 类名：ThreadState API声明：Pending 差异内容：Pending | std.core.cj.d  
新增API | NA | 类名：ThreadState API声明：Pending 差异内容：Pending | std.core.cj.d  
新增API | NA | 类名：ThreadState API声明：func toString() 差异内容：func toString() | std.core.cj.d  
新增API | NA | 类名：Thread API声明：prop state: ThreadState 差异内容：prop state: ThreadState | std.core.cj.d  
新增继承ToString | 类名：StackTraceElement API声明：open class StackTraceElement 差异内容：NA | 类名：StackTraceElement API声明：open class StackTraceElement <: ToString 差异内容：<: ToString | std.core.cj.d  
新增API | NA | 类名：StackTraceElement API声明：func toString() 差异内容：func toString() | std.core.cj.d  
新增API | NA | 类名：JSContext； API声明：public func requireArkModule(src: String): JSValue  差异内容：public func requireArkModule(src: String): JSValue | ohos.ark_interop.cj.d
