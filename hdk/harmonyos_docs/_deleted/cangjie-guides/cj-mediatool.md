---
name: cangjie-guides/cj-mediatool
title: mediatool工具
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-mediatool
nodePath: 系统 / 调测调优 / 调试命令 / 命令行工具 / mediatool工具
---

# mediatool工具

mediatool是一个轻量级的命令行工具集合，开发者可通过此工具操作媒体库资源。媒体库为图库提供和管理数据，媒体库中的图片、视频会在图库界面呈现。

mediatool工具为系统自带工具，不需要安装，内置在/bin文件夹中，可以通过hdc shell直接调用。

#### 前置条件

  * 正常连接设备。
  * 系统设置中开启开发者模式。
  * 使用hdc shell进入命令行执行模式。



#### 命令行说明

#### [h2]mediatool recv
    
    
    mediatool recv <resource-uri> <dest-path>

该命令能够将<resource-uri>指定uri对应的媒体库资源的源文件内容导出到<dest-path>指定的设备路径下。

<dest-path>可以指定为待创建文件路径或者文件夹路径，若为文件夹路径则会导出到该文件夹下，文件保留媒体库中的名字。

当<dest-path>指定待创建文件路径时，不能是已经存在文件的路径。

<dest-path>只支持/data/local/tmp下的路径。

文件导出成功后会打印导出文件的路径。

媒体库资源uri获取可参考媒体库uri介绍/获取方式。

将<resource-uri>指定为all则能够将所有媒体库资源的源文件导出。当<resource-uri>为all时，<dest-path>必须为文件夹路径。

该命令无法导出隐藏相册内的媒体资产。

**使用示例：**
    
    
    > mediatool recv file://media/Photo/3 /data/local/tmp/out.jpg
    Table Name: Photos
    /data/local/tmp/out.jpg

#### [h2]mediatool delete
    
    
    mediatool delete <resource-uri>

该命令能够彻底删除<resource-uri>指定uri的媒体库资源。被删除的资源无法恢复，请谨慎执行。

媒体库资源uri的获取可参考媒体库uri介绍/获取方式。

将<resource-uri>指定为all则删除所有媒体库资源，并重置媒体库的所有数据。

**使用示例：**
    
    
    > mediatool delete file://media/Photo/3
    [SUCCESS] delete success.
    
    > mediatool delete all # delete all 执行成功不会有任何打印

#### [h2]mediatool query
    
    
    mediatool query <display-name> [-p] [-u]

该命令能够查询出所有名字为<display-name>的媒体库资源，返回资源的源文件真实路径或媒体资源uri。默认返回源文件真实路径。

该命令无法查询出隐藏相册内的媒体资产。

选项 | 说明  
---|---  
-p | 返回媒体资源源文件在设备中的真实路径。（默认）  
-u | 返回媒体资源uri。不能与-p选项同时使用。  
  
**使用示例：**
    
    
    # 所查询媒体资源存在
    > mediatool query MyImage.jpg
    find 1 result:
    path
    /storage/cloud/100/files/Photo/2/IMG_1721381297_001.jpg
    
    # 所查询媒体资源不存在
    > mediatool query non_exist.jpg
    find 0 result
    
    # 查询的名字格式不正确
    > mediatool query IMG_001
    find 0 result
    The displayName format is not correct!
    
    # 查询媒体资源源文件路径
    > mediatool query MyImage.jpg -p
    find 1 result:
    path
    /storage/cloud/100/files/Photo/2/IMG_1721381297_001.jpg
    
    # 查询媒体资源uri
    > mediatool query MyImage.jpg -u
    find 1 result:
    uri
    "file://media/Photo/2/IMG_1721381297_001/MyImage.jpg"

#### 使用指导

以下使用指导说明了一些常见的mediatool使用场景。

#### [h2]导出特定媒体库资产

示例导出图库中名字叫MyImage的jpg图片。
    
    
    > hdc shell mediatool query -u MyImage.jpg
    find 1 result
    uri
    "file://media/Photo/1/IMG_1743078145_000/MyImage.jpg"
    
    > hdc shell mediatool recv file://media/Photo/1 /data/local/tmp/out.jpg
    Table Name: Photos
    /data/local/tmp/out.jpg
    
    > hdc file recv /data/local/tmp/out.jpg .
    FileTransfer finish, Size:10015455, File count = 1, time:679ms rate:14750.30kB/s

#### [h2]导出所有媒体库资产
    
    
    > hdc shell mediatool recv all /data/local/tmp/media
    Table Name: Photos
    /data/local/tmp/media/MyImage.jpg
    
    Table Name: Audios
    
    > hdc shell tar -cvf /data/local/tmp/media.tar /data/local/tmp/media/*
    removing leading '/' from member names
    data/local/tmp/media/MyImage.jpg
    
    > hdc file recv /data/local/tmp/media.tar .
    FileTransfer finish, Size:10017280, File count = 1, time:664ms rate:15086.27kB/s

#### [h2]删除特定媒体库资产

示例删除图库中名字叫MyImage的jpg图片。
    
    
    > hdc shell mediatool query -u MyImage.jpg
    find 1 result
    uri
    "file://media/Photo/1/IMG_1743078145_000/MyImage.jpg"
    
    > hdc shell mediatool delete file://media/Photo/1/IMG_1743078145_000/MyImage.jpg
    [SUCCESS] delete success.

#### [h2]彻底重置媒体库数据库
    
    
    > hdc shell mediatool delete all

#### 媒体库uri介绍/获取方式

uri是媒体库资产的唯一标识符，每个uri都对应一个媒体资产。mediatool使用uri来判断需要操作的媒体资产对象。

可使用以下方式获取uri：

  * mediatool query 加上 -u 的选项可以返回对应媒体资产的uri。需要输入对应资产的显示名（在图库中展示的名字带后缀名）。



媒体库uri可以用于mediatool recv命令导出特定媒体库资产，也可以用于mediatool delete删除特定媒体库资产。

uri样例：file://media/Photo/1/IMG_1743078145_000/MyImage.jpg。

在mediatool操作中，需要使用以上uri时，无论使用file://media/Photo/1/IMG_1743078145_000/MyImage.jpg还是file://media/Photo/1都能够正确地定位到目标资产。
