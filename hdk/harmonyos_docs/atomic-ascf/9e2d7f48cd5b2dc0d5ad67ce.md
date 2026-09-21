---
name: document/cn/atomic-ascf/apis-file-stats
title: Stats
uri: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-file-stats
---

# Stats

描述文件状态的对象。

**属性：**

**起始版本：** 1.0.4

|参数|类型|描述|
|:---------------|:-----|:------------------------|
|mode|number|文件的类型和存取的权限。|
|size|number|文件大小，单位：Byte。|
|lastAccessedTime|number|文件最近一次被存取或被执行的时间，unix时间戳。|
|lastModifiedTime|number|文件最后一次被修改的时间，unix时间戳。|

## Stats.isDirectory

Stats.isDirectory(): boolean

判断当前文件是否一个目录。

**起始版本：** 1.0.4

**示例：**

```js
const fileSystemManager = has.getFileSystemManager();
const fd = fileSystemManager.openSync({
  filePath: 'internal://cache/test.txt'
});
const stats = fileSystemManager.fstatSync({
  fd: fd
});
console.info(stats.isDirectory());
```

## Stats.isFile

Stats.isFile(): boolean

判断当前文件是否一个普通文件。

**起始版本：** 1.0.4

**示例：**

```js
const fileSystemManager = has.getFileSystemManager();
const fd = fileSystemManager.openSync({
  filePath: 'internal://cache/test.txt'
});
const stats = fileSystemManager.fstatSync({
  fd: fd
});
console.info(stats.isFile());
```

