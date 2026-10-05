---
name: document/cn/DevicePartner-Guides/multilingual-adaptation-0000002626763134
title: 多语言适配
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-Guides/multilingual-adaptation-0000002626763134
---

# 多语言适配

至少需要适配中英文，维吾尔语如果不适配，需要在组件里面设置direction属性Direction.Ltr，不然会出现显示方向是从右向左的问题，示例如下：

```
Row() {
....
}.direction(Direction.Ltr)
```

