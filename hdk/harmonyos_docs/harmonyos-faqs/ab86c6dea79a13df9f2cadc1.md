---
name: document/cn/harmonyos-faqs/faqs-arkts-45
title: ArkTS类的方法是否支持重载
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-45
---

# ArkTS类的方法是否支持重载

ArkTS支持TS中的重载，包括多个重载签名及一个实现签名。函数签名仅在编译期进行类型检查，不保留到运行时。

ArkTS不支持多个函数体的重载。示例如下：

```typescript
// declare
function test(param: User): number; 
function test(param: number, flag: boolean): number; 
// implement
function test(param: User | number, flag?: boolean) { 
  if (typeof param === 'number') { 
    return param + (flag ? 1 : 0) 
  } else { 
    return param.age 
  } 
}
```

