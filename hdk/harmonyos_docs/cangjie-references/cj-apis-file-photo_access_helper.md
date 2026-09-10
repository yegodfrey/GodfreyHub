---
name: cangjie-references/cj-apis-file-photo_access_helper
title: ohos.file.photo_access_helper（相册管理模块）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-file-photo_access_helper
nodePath: 媒体 / Media Library Kit（媒体文件管理服务） / 仓颉API / ohos.file.photo_access_helper（相册管理模块）
---

# ohos.file.photo_access_helper（相册管理模块）  
  
photo_access_helper模块提供相册管理模块能力，包括创建相册以及访问、修改相册中的媒体数据信息等。

#### 导入模块
    
    
    import kit.MediaLibraryKit.*

#### 权限列表

ohos.permission.READ_IMAGEVIDEO

ohos.permission.WRITE_IMAGEVIDEO

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### func getPhotoAccessHelper(UIAbilityContext)
    
    
    public func getPhotoAccessHelper(context: UIAbilityContext): PhotoAccessHelper

**功能：** 获取相册管理模块的实例，用于访问和修改相册中的媒体文件。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiabilitycontext) | 是 | - | 传入Ability实例的上下文。  
  
**返回值：**

类型 | 说明  
---|---  
PhotoAccessHelper | 相册管理模块的实例。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### interface MediaChangeRequest
    
    
    public interface MediaChangeRequest {}

**功能：** 媒体变更请求，资产变更请求和相册变更请求的父类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### class AbsAlbum
    
    
    public open class AbsAlbum {}

**功能：** AbsAlbum模块。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]prop albumName
    
    
    public mut prop albumName: String

**功能：** 相册名称。预置相册不可写，用户相册可写。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]prop albumSubtype
    
    
    public prop albumSubtype: AlbumSubtype

**功能：** 相册子类型。

**类型：** AlbumSubtype

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]prop albumType
    
    
    public prop albumType: AlbumType

**功能：** 相册类型。

**类型：** AlbumType

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]prop albumUri
    
    
    public prop albumUri: String

**功能：** 相册uri。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]prop count
    
    
    public prop count: Int32

**功能：** 相册中文件数量。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]prop coverUri
    
    
    public prop coverUri: String

**功能：** 封面文件uri。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func getAssets(FetchOptions)
    
    
    public func getAssets(options: FetchOptions): PhotoAssetResult

**功能：** 获取相册中的文件。

**需要权限：** ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
options | FetchOptions | 是 | - | 检索选项。  
  
**返回值：**

类型 | 说明  
---|---  
PhotoAssetResult | 返回图片和视频数据结果集。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let albumFetchResult = phAccessHelper.getAlbums(AlbumType.User, AlbumSubtype.UserGeneric)
        let album = albumFetchResult.getFirstObject()
        let fetchResult = album.getAssets(fetchOptions)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class Album
    
    
    public class Album <: AbsAlbum {}

**功能：** 实体相册。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * AbsAlbum



#### [h2]prop imageCount
    
    
    public prop imageCount: Int32

**功能：** 相册中图片数量。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]prop videoCount
    
    
    public prop videoCount: Int32

**功能：** 相册中视频数量。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func commitModify()
    
    
    public func commitModify(): Unit

**功能：** 更新相册属性修改到数据库中。

**需要权限：** ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        predicates.equalTo('album_name', StringValue('test1'))
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAlbums(AlbumType.User,
            AlbumSubtype.UserGeneric, options: fetchOptions)
        let firstAlbum = fetchResult.getFirstObject()
        firstAlbum.albumName = "test10086"
        firstAlbum.commitModify()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class AlbumResult
    
    
    public class AlbumResult <: FetchResult {}

**功能：** 文件检索结果集。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * FetchResult



#### [h2]func getAllObjects()
    
    
    public func getAllObjects(): Array<Album>

**功能：** 获取文件检索结果中的所有文件资产。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<Album> | 返回所有文件资产的数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkUI.LengthProp
    import kit.ArkUI.Column
    import kit.ArkUI.Row
    import kit.ArkUI.Text
    import kit.ArkUI.CustomView
    import kit.ArkUI.CJEntry
    import kit.ArkUI.loadNativeView
    import kit.ArkUI.FontWeight
    import kit.ArkUI.SubscriberManager
    import kit.ArkUI.ObservedProperty
    import kit.ArkUI.LocalStorage
    import kit.ArkUI.ForEach
    import kit.ArkUI.ReuseParams
    import kit.ArkUI.ViewBuilder
    import kit.ArkUI.ViewStackProcessor
    import kit.ArkUI.__Recycle__
    import kit.ArkUI.LegalCallCheck
    import kit.ArkUI.EmptyComponent
    import ohos.arkui.state_macro_manage.*
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    @Component
    class ChildItem {
        @Prop
        var item: String
        func build() {
            Text(this.item).fontSize(50)
        }
    }
    
    func getAlbumList(): Array<Album> {
        try {
            // Global 的实现请参见本文"使用说明"小节
            let ctx = Global.abilityContext
            let phAccessHelper = getPhotoAccessHelper(ctx)
            let predicates = DataSharePredicates()
            predicates.equalTo('album_name', StringValue('test1'))
            let fetchOptions: FetchOptions = FetchOptions([], predicates)
            let fetchResult = phAccessHelper.getAlbums(AlbumType.User, AlbumSubtype.UserGeneric, options: fetchOptions)
            // 获取文件检索结果中的所有相册资产，后续可以遍历相册数组获取每一个相册的信息
            let albums = fetchResult.getAllObjects()
            return albums
        } catch (e: BusinessException) {
            Hilog.info(0, "test", "${e.message}")
            throw e
        }
    }
    
    @Entry
    @Component
    class EntryView {
        @State
        var albumList: Array<Album> = getAlbumList()
    
        func build() {
            Row {
                Column {
                    ForEach(this.albumList, itemGeneratorFunc: {
                        item: Album, idx: Int64 => ChildItem(item: item.albumUri)
                    }, keyGeneratorFunc: {item: Album, idx: Int64 => return item.albumUri})
                }.width(100.percent)
            }.height(100.percent)
        }
    }

#### [h2]func getFirstObject()
    
    
    public func getFirstObject(): Album

**功能：** 获取文件检索结果中的第一个文件资产。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Album | 返回结果集中的第一个对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        predicates.equalTo('album_name', StringValue('test1'))
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAlbums(AlbumType.User,
            AlbumSubtype.UserGeneric, options: fetchOptions)
        let album = fetchResult.getFirstObject()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getLastObject()
    
    
    public func getLastObject(): Album

**功能：** 获取文件检索结果中的最后一个文件资产。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Album | 返回结果集中的最后一个对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        predicates.equalTo('album_name', StringValue('test1'))
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAlbums(AlbumType.User,
            AlbumSubtype.UserGeneric, options: fetchOptions)
        let album = fetchResult.getLastObject()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getNextObject()
    
    
    public func getNextObject(): Album

**功能：** 获取文件检索结果中的下一个文件资产。

在调用此方法之前，必须使用isAfterLast()来检查当前位置是否为最后一行。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Album | 返回结果集中下一个对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        predicates.equalTo('album_name', StringValue('test1'))
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAlbums(AlbumType.User,
            AlbumSubtype.UserGeneric, options: fetchOptions)
        let album = fetchResult.getNextObject()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getObjectByPosition(Int32)
    
    
    public func getObjectByPosition(index: Int32): Album

**功能：** 获取文件检索结果中具有指定索引的文件资产。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
index | Int32 | 是 | - | 要获取的文件的索引，从0开始。  
  
**返回值：**

类型 | 说明  
---|---  
Album | 返回结果集中指定索引的一个对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        predicates.equalTo('album_name', StringValue('test1'))
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAlbums(AlbumType.User,
            AlbumSubtype.UserGeneric, options: fetchOptions)
        let album = fetchResult.getObjectByPosition(0)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class ChangeData
    
    
    public class ChangeData {
        public var notifyType: NotifyType
        public var uris: Array<String>
        public var extraUris: Array<String>
    }

**功能：** 监听器回调函数的返回值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]var extraUris
    
    
    public var extraUris: Array<String>

**功能：** 相册中变动文件的uri数组。

**类型：** Array<String>

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]var notifyType
    
    
    public var notifyType: NotifyType

**功能：** ChangeData的通知类型。

**类型：** NotifyType

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]var uris
    
    
    public var uris: Array<String>

**功能：** 相同NotifyType的所有uri，可以是PhotoAsset或Album。

**类型：** Array<String>

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### class CreateOptions
    
    
    public class CreateOptions {
        public var title: String = ""
        public var subtype: PhotoSubtype
        public init(title!: String = "", subtype!: PhotoSubtype = Default)
    }

**功能：** 图片或视频的创建选项。

title参数的规格如下：

  * 不应包含扩展名。
  * 文件名字符串长度为1~255。



**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]var subtype
    
    
    public var subtype: PhotoSubtype

**功能：** 图片或者视频的文件子类型。

**类型：** PhotoSubtype

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]var title
    
    
    public var title: String = ""

**功能：** 图片或者视频的标题。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]init(String, PhotoSubtype)
    
    
    public init(title!: String = "", subtype!: PhotoSubtype = Default)

**功能：** 构造CreateOptions对象。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
title | String | 否 | "" | **命名参数。** 图片或者视频的标题。  
subtype | PhotoSubtype | 否 | Default | **命名参数。** 图片或者视频的文件子类型。  
  
#### class FetchOptions
    
    
    public class FetchOptions {
        public var fetchColumns: Array<String>
        public var predicates: DataSharePredicates
        public init(fetchColumns: Array<String>, predicates: DataSharePredicates)
    }

**功能：** 检索条件。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]var fetchColumns
    
    
    public var fetchColumns: Array<String>

**功能：** 检索条件，指定列名查询。

对于照片，如果该参数为空，默认查询'uri'、'media_type'、'subtype'和'display_name'，使用get接口获取当前对象的其他属性时将会报错。示例：fetchColumns: ['uri', 'title']。

对于相册，如果该参数为空，默认查询'uri'和'album_name'。

**类型：** Array<String>

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]var predicates
    
    
    public var predicates: DataSharePredicates

**功能：** 谓词查询，指定过滤条件。

**类型：** [DataSharePredicates](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-data_share_predicates#class-datasharepredicates)

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]init(Array<String>, DataSharePredicates)
    
    
    public init(fetchColumns: Array<String>, predicates: DataSharePredicates)

**功能：** 构造FetchOptions对象。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fetchColumns | Array<String> | 是 | - | 检索条件，指定列名查询。  
predicates | [DataSharePredicates](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-data_share_predicates#class-datasharepredicates) | 是 | - | 谓词查询，指定过滤条件。  
  
#### class FetchResult
    
    
    public open class FetchResult {}

**功能：** 文件检索结果集。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func close()
    
    
    public func close(): Unit

**功能：** 释放FetchResult实例并使其失效，无法再调用其他方法。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        fetchResult.close()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getCount()
    
    
    public func getCount(): Int32

**功能：** 获取文件检索结果中的文件总数。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Int32 | 检索到的文件总数。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let count = fetchResult.getCount()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func isAfterLast()
    
    
    public func isAfterLast(): Bool

**功能：** 检查结果集是否指向最后一行。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 当读到最后一条记录后，后续没有记录返回true，否则返回false。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let isAfterLast = fetchResult.isAfterLast()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class MediaAlbumChangeRequest
    
    
    public class MediaAlbumChangeRequest <: MediaChangeRequest {
        public init(album: Album)
    }

**功能：** 相册变更请求。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * MediaChangeRequest



#### [h2]init(Album)
    
    
    public init(album: Album)

**功能：** 构造函数用于初始化新创建的对象。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
album | Album | 是 | - | 需要变更的相册。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAlbums(AlbumType.User, AlbumSubtype.UserGeneric,
            options: fetchOptions)
        let album = fetchResult.getFirstObject()
        let albumChangeRequest = MediaAlbumChangeRequest(album)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func addAssets(Array<PhotoAsset>)
    
    
    public func addAssets(assets: Array<PhotoAsset>): Unit

**功能：** 向相册中添加资产。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
assets | Array<PhotoAsset> | 是 | - | 待添加到相册中的资产数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
14000011 | System inner fail.  
14000016 | Operation Not Support.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let asset = fetchResult.getFirstObject()
        let albumFetchResult = phAccessHelper.getAlbums(AlbumType.User, AlbumSubtype.UserGeneric)
        let album = albumFetchResult.getFirstObject()
        let albumChangeRequest = MediaAlbumChangeRequest(album)
        albumChangeRequest.addAssets([asset, asset])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getAlbum()
    
    
    public func getAlbum(): Album

**功能：** 获取当前相册变更请求中的相册。

**注意** ：对于创建相册的变更请求，在调用applyChanges提交生效之前，该接口返回异常。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Album | 返回当前相册变更请求中的相册。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkUI.LengthProp
    import kit.ArkUI.Column
    import kit.ArkUI.Row
    import kit.ArkUI.Text
    import kit.ArkUI.CustomView
    import kit.ArkUI.CJEntry
    import kit.ArkUI.loadNativeView
    import kit.ArkUI.FontWeight
    import kit.ArkUI.SubscriberManager
    import kit.ArkUI.ObservedProperty
    import kit.ArkUI.LocalStorage
    import kit.ArkUI.ForEach
    import kit.ArkUI.ReuseParams
    import kit.ArkUI.ViewBuilder
    import kit.ArkUI.ViewStackProcessor
    import kit.ArkUI.__Recycle__
    import kit.ArkUI.LegalCallCheck
    import kit.ArkUI.EmptyComponent
    import ohos.arkui.state_macro_manage.*
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    @Component
    class ChildItem {
        @Prop
        var item: String
        func build() {
            Text(this.item).fontSize(50)
        }
    }
    
    func getPhotoAssetList(): Array<PhotoAsset> {
        try {
            // Global 的实现请参见本文"使用说明"小节
            let ctx = Global.abilityContext
            let phAccessHelper = getPhotoAccessHelper(ctx)
            let predicates = DataSharePredicates()
            let fetchOptions: FetchOptions = FetchOptions([], predicates)
            let albumList = phAccessHelper.getAlbums(AlbumType.User, AlbumSubtype.UserGeneric, options: fetchOptions)
            let album = albumList.getFirstObject()
            let albumChangeRequest = MediaAlbumChangeRequest(album)
            // 获取当前相册变更请求中的相册，后续可以调用接口获取相册相关信息
            let changeRequestAlbum = albumChangeRequest.getAlbum()
            let fetchResult = changeRequestAlbum.getAssets(fetchOptions)
            return fetchResult.getAllObjects()
        } catch (e: BusinessException) {
            Hilog.info(0, "test", "${e.message}")
            throw e
        }
    }
    
    @Entry
    @Component
    class EntryView {
        @State
        var albumList: Array<PhotoAsset> = getPhotoAssetList()
    
        func build() {
            Row {
                Column {
                    ForEach(this.albumList, itemGeneratorFunc: {
                        item: PhotoAsset, idx: Int64 => ChildItem(item: item.displayName)
                    }, keyGeneratorFunc: {item: PhotoAsset, idx: Int64 => return item.displayName})
                }.width(100.percent)
            }.height(100.percent)
        }
    }

#### [h2]func removeAssets(Array<PhotoAsset>)
    
    
    public func removeAssets(assets: Array<PhotoAsset>): Unit

**功能：** 从相册中移除资产。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
assets | Array<PhotoAsset> | 是 | - | 待从相册中移除的资产数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
14000011 | System inner fail.  
14000016 | Operation Not Support.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let albumFetchResult = phAccessHelper.getAlbums(AlbumType.User, AlbumSubtype.UserGeneric)
        let album = albumFetchResult.getFirstObject()
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let asset = fetchResult.getFirstObject()
        let albumChangeRequest = MediaAlbumChangeRequest(album)
        albumChangeRequest.removeAssets([asset])
        phAccessHelper.applyChanges(albumChangeRequest)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func setAlbumName(String)
    
    
    public func setAlbumName(name: String): Unit

**功能：** 设置相册名称。

相册名参数规格：

  * 相册名字符串长度为1~255。
  * 不允许出现的非法英文字符，包括：. \ / : * ? " ' ` < > | { } [ ]
  * 英文字符大小写不敏感。
  * 相册名不允许重名。



**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
name | String | 是 | - | 待设置的相册名称。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAlbums(AlbumType.User, AlbumSubtype.UserGeneric,
            options: fetchOptions)
        let album = fetchResult.getFirstObject()
        let albumChangeRequest = MediaAlbumChangeRequest(album)
        let newAlbumName = "newAAA"
        albumChangeRequest.setAlbumName(newAlbumName)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class MediaAssetChangeRequest
    
    
    public class MediaAssetChangeRequest <: MediaChangeRequest {
        public init(asset: PhotoAsset)
    }

**功能：** 资产变更请求。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * MediaChangeRequest



#### [h2]init(PhotoAsset)
    
    
    public init(asset: PhotoAsset)

**功能：** 构造函数，用于初始化资产变更请求。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
asset | PhotoAsset | 是 | - | 需要变更的资产。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let photoAsset = fetchResult.getFirstObject()
        let assetChangeRequest = MediaAssetChangeRequest(photoAsset)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func createAssetRequest(UIAbilityContext, PhotoType, String, CreateOptions)
    
    
    public static func createAssetRequest(context: UIAbilityContext, photoType: PhotoType, extension: String,
        options!: CreateOptions = CreateOptions(title: "", subtype: Default)): MediaAssetChangeRequest

**功能：** 指定文件类型和扩展名，创建资产变更请求。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiabilitycontext) | 是 | - | 传入Ability实例的上下文。  
photoType | PhotoType | 是 | - | 待创建的文件类型，IMAGE或者VIDEO类型。  
extension | String | 是 | - | 文件扩展名，例如：'jpg'。  
options | CreateOptions | 否 | CreateOptions(title: "", subtype: Default) |  **命名参数。** 创建选项，例如：{title: 'testPhoto'}。 文件名中不允许出现非法英文字符，包括： . .. \ / : * ? " ' ` < > | { } [ ]  
  
**返回值：**

类型 | 说明  
---|---  
MediaAssetChangeRequest | 返回创建资产的变更请求。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let photoType = PhotoType.Image
        let extension = "jpg"
        let options = CreateOptions(title: "testPhoto")
        let assetChangeRequest = MediaAssetChangeRequest.createAssetRequest(ctx, photoType,
            extension, options: options)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func createImageAssetRequest(UIAbilityContext, String)
    
    
    public static func createImageAssetRequest(context: UIAbilityContext, fileUri: String): MediaAssetChangeRequest

**功能：** 创建图片资产变更请求。

指定待创建资产的数据来源，可参考[FileUri](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-file_fileuri#class-fileuri)。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiabilitycontext) | 是 | - | 传入Ability实例的上下文。  
fileUri | String | 是 | - | 图片资产的数据来源，在应用沙箱下的uri。示例fileUri：'file://com.example.temptest/data/storage/el2/base/haps/entry/files/test.jpg'。  
  
**返回值：**

类型 | 说明  
---|---  
MediaAssetChangeRequest | 返回创建资产的变更请求。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900002 | The file corresponding to the URI is not in the app sandbox.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let fileUri = "file://com.example.xxx/data/storage/el2/base/haps/entry/files/test.jpg"
        let assetChangeRequest = MediaAssetChangeRequest.createImageAssetRequest(ctx,
            fileUri)
        phAccessHelper.applyChanges(assetChangeRequest)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func createVideoAssetRequest(UIAbilityContext, String)
    
    
    public static func createVideoAssetRequest(context: UIAbilityContext, fileUri: String): MediaAssetChangeRequest

**功能：** 创建视频资产变更请求。

通过fileUri指定待创建资产的数据来源，可参考[FileUri](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-file_fileuri#class-fileuri)。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiabilitycontext) | 是 | - | 传入Ability实例的上下文。  
fileUri | String | 是 | - | 视频资产的数据来源，在应用沙箱下的uri。示例fileUri：'file://com.example.temptest/data/storage/el2/base/haps/entry/files/test.mp4'。  
  
**返回值：**

类型 | 说明  
---|---  
MediaAssetChangeRequest | 返回创建资产的变更请求。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900002 | The file corresponding to the URI is not in the app sandbox.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let fileUri = "file://com.example.xxx/data/storage/el2/base/haps/entry/files/test.mp4"
        let assetChangeRequest = MediaAssetChangeRequest.createVideoAssetRequest(ctx,
            fileUri)
        phAccessHelper.applyChanges(assetChangeRequest)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func deleteAssets(UIAbilityContext, Array<PhotoAsset>)
    
    
    public static func deleteAssets(context: UIAbilityContext, assets: Array<PhotoAsset>): Unit

**功能：** 删除媒体文件，删除的文件进入到回收站。

**需要权限：** ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiabilitycontext) | 是 | - | 传入Ability实例的上下文。  
assets | Array<PhotoAsset> | 是 | - | 待删除的媒体文件数组，数组中元素个数不超过300个。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
14000002 | The uri format is incorrect or does not exist.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let asset = fetchResult.getFirstObject()
        MediaAssetChangeRequest.deleteAssets(ctx, asset.uri)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func deleteAssets(UIAbilityContext, Array<String>)
    
    
    public static func deleteAssets(context: UIAbilityContext, assets: Array<String>): Unit

**功能：** 删除媒体文件，删除的文件进入到回收站。

**需要权限：** ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiabilitycontext) | 是 | - | 传入Ability实例的上下文。  
assets | Array<String> | 是 | - | 待删除的媒体文件uri数组，数组中元素个数不超过300个。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
14000002 | The uri format is incorrect or does not exist.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let asset = fetchResult.getFirstObject()
        MediaAssetChangeRequest.deleteAssets(ctx, asset.uri)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func addResource(ResourceType, String)
    
    
    public func addResource(resourceType: ResourceType, fileUri: String): Unit

**功能：** 通过[fileUri](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-file_fileuri)从应用沙箱添加资源。

**注意** ：对于同一个资产变更请求，成功添加资源后不支持重复调用该接口。对于动态照片，可调用两次该接口分别添加图片和视频资源。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resourceType | ResourceType | 是 | - | 待添加资源的类型。  
fileUri | String | 是 | - | 待添加资源的数据来源，在应用沙箱下的uri。示例fileUri：'file://com.example.temptest/data/storage/el2/base/haps/entry/files/test.jpg'。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
14000011 | System inner fail.  
14000016 | Operation Not Support.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let photoType = PhotoType.Image
        let extension = "jpg"
        let assetChangeRequest = MediaAssetChangeRequest.createAssetRequest(ctx, photoType,
            extension)
        let buffer = Array<Byte>(2048, repeat: 0)
        assetChangeRequest.addResource(ResourceType.ImageResource, buffer)
        phAccessHelper.applyChanges(assetChangeRequest)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func addResource(ResourceType, Array<Byte>)
    
    
    public func addResource(resourceType: ResourceType, data: Array<Byte>): Unit

**功能：** 通过ArrayBuffer数据添加资源。

**注意** ：对于同一个资产变更请求，成功添加资源后不支持重复调用该接口。对于动态照片，可调用两次该接口分别添加图片和视频资源。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resourceType | ResourceType | 是 | - | 待添加资源的类型。  
data | Array<Byte> | 是 | - | 待添加资源的数据。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
14000011 | System inner fail.  
14000016 | Operation Not Support.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let photoType = PhotoType.Image
        let extension = "jpg"
        let assetChangeRequest = MediaAssetChangeRequest.createAssetRequest(ctx, photoType,
            extension)
        let buffer = Array<Byte>(2048, repeat: 0)
        assetChangeRequest.addResource(ResourceType.ImageResource, buffer)
        phAccessHelper.applyChanges(assetChangeRequest)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func discardCameraPhoto()
    
    
    public func discardCameraPhoto(): Unit

**功能：** 删除相机拍摄的照片。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
14000011 | System inner fail.  
14000016 | Operation Not Support.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let photoAsset = fetchResult.getFirstObject()
        let assetChangeRequest = MediaAssetChangeRequest(photoAsset)
        assetChangeRequest.discardCameraPhoto()
        phAccessHelper.applyChanges(assetChangeRequest)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getAsset()
    
    
    public func getAsset(): PhotoAsset

**功能：** 获取当前资产变更请求中的资产。

**注意** ：对于创建资产的变更请求，在调用applyChanges提交生效之前，该接口返回异常。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
PhotoAsset | 返回当前资产变更请求中的资产。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let photoAsset = fetchResult.getFirstObject()
        let assetChangeRequest = MediaAssetChangeRequest(photoAsset)
        let asset = assetChangeRequest.getAsset()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getWriteCacheHandler()
    
    
    public func getWriteCacheHandler(): Int32

**功能：** 获取临时文件写句柄。

**注意** ：对于同一个资产变更请求，不支持在成功获取临时文件写句柄后，重复调用该接口。

**需要权限：** ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Int32 | 返回临时文件写句柄。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
14000011 | System inner fail.  
14000016 | Operation Not Support.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkUI.LengthProp
    import kit.ArkUI.Column
    import kit.ArkUI.Row
    import kit.ArkUI.Text
    import kit.ArkUI.CustomView
    import kit.ArkUI.CJEntry
    import kit.ArkUI.loadNativeView
    import kit.ArkUI.FontWeight
    import kit.ArkUI.SubscriberManager
    import kit.ArkUI.ObservedProperty
    import kit.ArkUI.LocalStorage
    import kit.ArkUI.ForEach
    import kit.ArkUI.ReuseParams
    import kit.ArkUI.ViewBuilder
    import kit.ArkUI.ViewStackProcessor
    import kit.ArkUI.__Recycle__
    import kit.ArkUI.LegalCallCheck
    import kit.ArkUI.EmptyComponent
    import kit.ArkUI.Image
    import ohos.arkui.state_macro_manage.*
    import kit.MediaLibraryKit.*
    import kit.CoreFileKit.*
    import kit.ImageKit.{createImageSource, PixelMap}
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    func getPixelMap(): PixelMap {
        try {
            // Global 的实现请参见本文"使用说明"小节
            let ctx = Global.abilityContext
            let phAccessHelper = getPhotoAccessHelper(ctx)
            let assetChangeRequest = MediaAssetChangeRequest.createAssetRequest(ctx, PhotoType.Image, "jpg")
            // 获取临时文件写句柄，后续可以通过该句柄写入数据
            let fd = assetChangeRequest.getWriteCacheHandler()
            // write data into fd..
            FileIo.write(fd, Array<UInt8>(96, repeat: 0))
            let imageSource = createImageSource(fd)
            let pixelMap = imageSource.createPixelMap()
            FileIo.close(fd)
            phAccessHelper.applyChanges(assetChangeRequest)
            return pixelMap
        } catch (e: BusinessException) {
            Hilog.info(0, "test", "${e.message}")
            throw e
        }
    }
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row {
                Column {
                    Image(getPixelMap())
                }.width(100.percent)
            }.height(100.percent)
        }
    }

#### [h2]func saveCameraPhoto()
    
    
    public func saveCameraPhoto(): Unit

**功能：** 保存相机拍摄的照片。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
14000011 | System inner fail.  
14000016 | Operation Not Support.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let photoAsset = fetchResult.getFirstObject()
        let assetChangeRequest = MediaAssetChangeRequest(photoAsset)
        assetChangeRequest.saveCameraPhoto()
        phAccessHelper.applyChanges(assetChangeRequest)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func setTitle(String)
    
    
    public func setTitle(title: String): Unit

**功能：** 修改媒体资产的标题。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
title | String | 是 | - | 待修改的资产标题。  
  
title参数规格为：

  * 不应包含扩展名。
  * 文件名字符串长度为1~255。
  * 不允许出现的非法英文字符，包括：. \ / : * ? " ' ` < > | { } [ ]



**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let photoAsset = fetchResult.getFirstObject()
        let assetChangeRequest = MediaAssetChangeRequest(photoAsset)
        let newTitle = "NEW_TITLE" // 新标题，实际使用按需取名
        assetChangeRequest.setTitle(newTitle)
        phAccessHelper.applyChanges(assetChangeRequest)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class PhotoAccessHelper
    
    
    public class PhotoAccessHelper {}

**功能：** 获取图片和视频资源。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func applyChanges(MediaChangeRequest)
    
    
    public func applyChanges(mediaChangeRequest: MediaChangeRequest): Unit

**功能：** 提交媒体变更请求。

**需要权限：** ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
mediaChangeRequest | MediaChangeRequest | 是 | - | 媒体变更请求，支持资产变更请求和相册变更请求。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions = FetchOptions([], predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let photoAsset = fetchResult.getFirstObject()
        let assetChangeRequest = MediaAssetChangeRequest(photoAsset)
        assetChangeRequest.setTitle("newTitle")
        phAccessHelper.applyChanges(assetChangeRequest)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getAlbums(AlbumType, AlbumSubtype, FetchOptions)
    
    
    public func getAlbums(albumType: AlbumType, subtype: AlbumSubtype,
        options!: FetchOptions = FetchOptions(["uri", "album_name"], DataSharePredicates())): AlbumResult

**功能：** 根据检索选项和相册类型获取相册。

在获取相册之前，确保相册已存在。

**需要权限：** ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
albumType | AlbumType | 是 | - | 相册类型。  
subtype | AlbumSubtype | 是 | - | 相册子类型。  
options | FetchOptions | 否 | FetchOptions(["uri", "album_name"], DataSharePredicates()) | **命名参数。** 检索选项，不填时默认根据相册类型检索。  
  
**返回值：**

类型 | 说明  
---|---  
AlbumResult | 返回获取相册的结果集。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult: AlbumResult = phAccessHelper.getAlbums(AlbumType.User,
            AlbumSubtype.UserGeneric, options: fetchOptions)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getAssets(FetchOptions)
    
    
    public func getAssets(options: FetchOptions): PhotoAssetResult

**功能：** 获取图片和视频资源。

**需要权限：** ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
options | FetchOptions | 是 | - | 图片和视频检索选项。  
  
**返回值：**

类型 | 说明  
---|---  
PhotoAssetResult | 返回图片和视频数据结果集。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult: PhotoAssetResult = phAccessHelper.getAssets(fetchOptions)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getBurstAssets(String, FetchOptions)
    
    
    public func getBurstAssets(burstKey: String, options: FetchOptions): PhotoAssetResult

**功能：** 获取连拍照片资源。

**需要权限：** ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
burstKey | String | 是 | - | 一组连拍照片的唯一标识：uuid(可传入PhotoKeys的BURST_KEY)。字符串长度为36。  
options | FetchOptions | 是 | - | 连拍照片检索选项。  
  
**返回值：**

类型 | 说明  
---|---  
PhotoAssetResult | 返回获取连拍照片的结果集。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let burstKey = "YOUR_UUID" // 请输入uuid
        let fetchResult: PhotoAssetResult = phAccessHelper.getBurstAssets(burstKey, fetchOptions)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func registerChange(String, Bool, Callback1Argument<ChangeData>)
    
    
    public func registerChange(uri: String, forChildUris: Bool, callback: Callback1Argument<ChangeData>): Unit

**功能：** 注册对指定uri的监听，使用callback方式返回结果。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
uri | String | 是 | - | PhotoAsset的uri, Album的uri或DefaultChangeUri的值。  
forChildUris | Bool | 是 | - | 是否模糊监听。uri为相册uri时：forChildUris为true，能监听到相册中文件的变化。如果是false，只能监听相册本身变化；uri为photoAsset时：forChildUris为true、false没有区别；uri为DefaultChangeUri时：forChildUris必须为true，如果为false将找不到该uri，收不到任何消息。  
callback | [Callback1Argument](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-callback_invoke#class-callback1argumenta)<ChangeData> | 是 | - | 返回要监听的ChangeData。注：uri可以注册多个不同的callback监听，unregisterChange可以关闭该uri所有监听，也可以关闭指定callback的监听。。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900012 | Permission denied.  
13900020 | Invalid argument.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    import kit.PerformanceAnalysisKit.Hilog
    
    // 此处代码可添加在依赖项定义中
    class MyCallback<T> <: Callback1Argument<T> {
        public let callabck_: (T) -> Unit
        public init(callabck: (T) -> Unit) {
            callabck_ = callabck
        }
        public func invoke(err: ?BusinessException, arg: T): Unit {
            callabck_(arg)
        }
    }
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let callback = MyCallback<ChangeData>(
            {
                arg: ChangeData => Hilog.info(0, "AppLogCj",
                    "onCallback1. ChangeData: type = ${arg.notifyType.toString()}, uris.size: ${arg.uris.size}, extraUris.size = ${arg.extraUris.size}"
                )
            })
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions(['title'], predicates)
        let fetchResult: PhotoAssetResult = phAccessHelper.getAssets(fetchOptions)
        let firstPhotoAsset = fetchResult.getFirstObject()
        phAccessHelper.registerChange(firstPhotoAsset.uri, false, callback)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func release()
    
    
    public func release(): Unit

**功能：** 释放PhotoAccessHelper实例。

当后续不需要使用PhotoAccessHelper实例中的方法时调用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult: PhotoAssetResult = phAccessHelper.getAssets(fetchOptions)
        fetchResult.close()
        phAccessHelper.release()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func showAssetsCreationDialog(Array<String>, Array<PhotoCreationConfig>, Callback1Argument<Array<String>>)
    
    
    public func showAssetsCreationDialog(srcFileUris: Array<String>, photoCreationConfigs: Array<PhotoCreationConfig>,
        callback: Callback1Argument<Array<String>>): Unit

**功能：** 调用接口拉起保存确认弹窗。用户同意保存后，返回已创建并授予保存权限的uri列表，该列表永久生效，应用可使用该uri写入图片/视频。如果用户拒绝保存，将返回空列表。弹框需要显示应用名称，无法直接获取应用名称，依赖于配置项的label和icon，因此调用此接口时请确保module.json5文件中的abilities标签中配置了label和icon项。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/ga3IDtPmT2yHdqtGrL8zaA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090225Z&HW-CC-Expire=86400&HW-CC-Sign=83E9A9C687DEFC50D11805105E73C083BA5874D9DEA0399C43E587B12EA9718A)

当传入uri为沙箱路径时，可正常保存图片/视频，但无界面预览。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
srcFileUris | Array<String> | 是 | - |  需保存到媒体库中的图片/视频文件对应的媒体库uri。 **注意：** \- 一次弹窗最多保存100张图片。 \- 仅支持处理图片、视频uri。 \- 不支持手动拼接的uri，需调用接口获取。  
photoCreationConfigs | Array<PhotoCreationConfig> | 是 | - | 保存图片或视频到媒体库的配置，包括文件名等，与srcFileUris保持一一对应。  
callback | [Callback1Argument](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-callback_invoke#class-callback1argumenta)<Array<String>> | 是 | - |  回调函数，返回给应用的媒体库文件uri列表。uri已对应用授权，支持应用写入数据。如果生成uri异常，则返回批量创建错误码。 返回-3006表示不允许出现非法字符；返回-2004表示图片类型和后缀不符；返回-203表示文件操作异常。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    import kit.PerformanceAnalysisKit.Hilog
    
    // 此处代码可添加在依赖项定义中
    class MyCallback<T> <: Callback1Argument<T> {
        public let callabck_: (T) -> Unit
        public init(callabck: (T) -> Unit) {
            callabck_ = callabck
        }
        public func invoke(err: ?BusinessException, arg: T): Unit {
            callabck_(arg)
        }
    }
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let callback = MyCallback<Array<String>>(
            {
                arg: Array<String> =>
                Hilog.info(0, "AppLogCj", "oncallback: Array.size: ${arg.size}")
                for (str in arg) {
                    Hilog.info(0, "AppLogCj", "oncallback: uri: ${str}")
                }
            }
        )
        // 获取需要保存到媒体库的位于应用沙箱的图片/视频uri
        // 实际场景请使用真实的uri
        let srcFileUris: Array<String> = ["file://media/Photo/37/IMG_1731463495_028/IMG_20241113_100315.jpg"]
        let photoCreationConfigs: Array<PhotoCreationConfig> = [
            PhotoCreationConfig(
                'jpg',
                PhotoType.Image,
                title: "test4",
                subtype: PhotoSubtype.Default
            )
        ]
        phAccessHelper.showAssetsCreationDialog(srcFileUris, photoCreationConfigs, callback)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func unregisterChange(String, ?Callback1Argument<ChangeData>)
    
    
    public func unregisterChange(uri: String, callback!: ?Callback1Argument<ChangeData> = None): Unit

**功能：** 取消指定uri的监听，一个uri可以注册多个监听，存在多个callback监听时，可以取消指定注册的callback的监听；不指定callback时取消该uri的所有监听。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
uri | String | 是 | - | PhotoAsset的uri, Album的uri或DefaultChangeUri的值。  
callback | ?[Callback1Argument](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-callback_invoke#class-callback1argumenta)<ChangeData> | 否 | None | **命名参数。** 取消registerChange注册时的callback的监听，不填时，取消该uri的所有监听。注：off指定注册的callback后不会进入此回调。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900012 | Permission denied.  
13900020 | Invalid argument.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.callback_invoke.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    // 此处代码可添加在依赖项定义中
    class MyCallback<T> <: Callback1Argument<T> {
        public let callabck_: (T) -> Unit
        public init(callabck: (T) -> Unit) {
            callabck_ = callabck
        }
        public open func invoke(err: ?BusinessException, arg: T): Unit {
            callabck_(arg)
        }
    }
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let callback = MyCallback<ChangeData>(
            {
                arg: ChangeData => Hilog.info(0, "AppLogCj",
                    "onCallback. ChangeData: type = ${arg.notifyType.toString()}, uris.size: ${arg.uris.size}, extraUris.size = ${arg.extraUris.size}"
                )
            })
    
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions(['title'], predicates)
        let fetchResult: PhotoAssetResult = phAccessHelper.getAssets(fetchOptions)
        let firstPhotoAsset = fetchResult.getFirstObject()
    
        phAccessHelper.registerChange(firstPhotoAsset.uri, false, callback)
        phAccessHelper.unregisterChange(firstPhotoAsset.uri, callback: callback)
        phAccessHelper.unregisterChange(firstPhotoAsset.uri)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class PhotoAsset
    
    
    public class PhotoAsset {}

**功能：** 提供封装文件属性的方法。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]prop displayName
    
    
    public prop displayName: String

**功能：** 显示文件名，包含后缀名。字符串长度为1~255。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]prop photoType
    
    
    public prop photoType: PhotoType

**功能：** 媒体文件类型。

**类型：** PhotoType

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]prop uri
    
    
    public prop uri: String

**功能：** 媒体文件资源uri（如：file://media/Photo/1/IMG_datetime_0001/displayName.jpg）。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func commitModify()
    
    
    public func commitModify(): Unit

**功能：** 修改文件的元数据。

**需要权限：** ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
13900020 | Invalid argument.  
14000001 | Invalid display name.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchColumns = [PhotoKeys.Title.toString()]
        let fetchOptions: FetchOptions = FetchOptions(fetchColumns, predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let firstPhotoAsset = fetchResult.getFirstObject()
        let photoAssetTitle = firstPhotoAsset.get('title')
        let newTitle = "NEW_TITLE" // 新标题，实际使用按需取名
        firstPhotoAsset.set('title', newTitle)
        firstPhotoAsset.commitModify()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func get(String)
    
    
    public func get(member: String): MemberType

**功能：** 获取PhotoAsset成员参数。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
member | String | 是 | - | 成员参数名称，在get时，除了'uri'、'media_type'、'subtype'和'display_name'四个属性之外，其他的属性都需要在fetchColumns中填入需要获取的PhotoKeys，例如：get title属性fetchColumns: ['title']。  
  
**返回值：**

类型 | 说明  
---|---  
MemberType | 获取PhotoAsset成员参数的值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000014 | The provided member must be a property name of PhotoKey.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchColumns = [PhotoKeys.Title.toString()]
        let fetchOptions: FetchOptions = FetchOptions(fetchColumns, predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let firstPhotoAsset = fetchResult.getFirstObject()
        let photoAssetTitle = firstPhotoAsset.get('title')
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getThumbnail(?Size)
    
    
    public func getThumbnail(size!: ?Size = Size(256, 256)): PixelMap

**功能：** 获取文件的缩略图，传入缩略图尺寸。

**需要权限：** ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
size | ?[Size](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-image#class-size) | 否 | Size(256, 256) | **命名参数。** 缩略图尺寸。  
  
**返回值：**

类型 | 说明  
---|---  
[PixelMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-image#class-pixelmap) | 返回缩略图的PixelMap。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900012 | Permission denied.  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchColumns = [PhotoKeys.Title.toString()]
        let fetchOptions: FetchOptions = FetchOptions(fetchColumns, predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let firstPhotoAsset = fetchResult.getFirstObject()
        let pixm = firstPhotoAsset.getThumbnail()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func set(String, String)
    
    
    public func set(member: String, value: String): Unit

**功能：** 设置PhotoAsset成员参数。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
member | String | 是 | - | 成员参数名称例如：PhotoKeys.TITLE。字符串长度为1~255。  
value | String | 是 | - |  设置成员参数名称，只能修改PhotoKeys.TITLE的值。title的参数规格为： \- 不应包含扩展名。 \- 文件名字符串长度为1~255（资产文件名为标题+扩展名）。 \- 不允许出现的非法英文字符，包括：. \ / : * ? " ' ` < > | { } [ ]  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000014 | The provided member must be a property name of PhotoKey.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchColumns = [PhotoKeys.Title.toString()]
        let fetchOptions: FetchOptions = FetchOptions(fetchColumns, predicates)
        let fetchResult = phAccessHelper.getAssets(fetchOptions)
        let firstPhotoAsset = fetchResult.getFirstObject()
        let newTitle = "NEW_TITLE" // 新标题，实际使用按需取名
        firstPhotoAsset.set('title', newTitle)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class PhotoAssetResult
    
    
    public class PhotoAssetResult <: FetchResult {}

**功能：** 提供封装文件属性的方法。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * FetchResult



#### [h2]func getAllObjects()
    
    
    public func getAllObjects(): Array<PhotoAsset>

**功能：** 获取文件检索结果中的所有文件资产。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<PhotoAsset> | 返回结果集中所有文件资产数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult: PhotoAssetResult = phAccessHelper.getAssets(fetchOptions)
        let photoAssets = fetchResult.getAllObjects()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getFirstObject()
    
    
    public func getFirstObject(): PhotoAsset

**功能：** 获取文件检索结果中的第一个文件资产。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
PhotoAsset | 返回结果集中第一个对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult: PhotoAssetResult = phAccessHelper.getAssets(fetchOptions)
        let photoAsset = fetchResult.getFirstObject()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getLastObject()
    
    
    public func getLastObject(): PhotoAsset

**功能：** 获取文件检索结果中的最后一个文件资产。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
PhotoAsset | 返回结果集中最后一个对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult: PhotoAssetResult = phAccessHelper.getAssets(fetchOptions)
        let photoAsset = fetchResult.getLastObject()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getNextObject()
    
    
    public func getNextObject(): PhotoAsset

**功能：** 获取文件检索结果中的下一个文件资产。

在调用此方法之前，必须使用isAfterLast()来检查当前位置是否为最后一行。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
PhotoAsset | 返回结果集中下一个对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult: PhotoAssetResult = phAccessHelper.getAssets(fetchOptions)
        let photoAsset = fetchResult.getNextObject()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getObjectByPosition(Int32)
    
    
    public func getObjectByPosition(index: Int32): PhotoAsset

**功能：** 获取文件检索结果中具有指定索引的文件资产。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
index | Int32 | 是 | - | 要获取的文件的索引，从0开始。  
  
**返回值：**

类型 | 说明  
---|---  
PhotoAsset | 返回结果集中指定索引的一个对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
14000011 | System inner fail.  
  



**示例：**
    
    
    // index.cj
    
    import kit.MediaLibraryKit.*
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let phAccessHelper = getPhotoAccessHelper(ctx)
        let predicates = DataSharePredicates()
        let fetchOptions: FetchOptions = FetchOptions([], predicates)
        let fetchResult: PhotoAssetResult = phAccessHelper.getAssets(fetchOptions)
        let photoAsset = fetchResult.getObjectByPosition(0)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class PhotoCreationConfig
    
    
    public class PhotoCreationConfig {
        public var fileNameExtension: String
        public var photoType: PhotoType
        public var title: String
        public var subtype: PhotoSubtype
        public init(fileNameExtension: String, photoType: PhotoType, title!: String = "", subtype!: PhotoSubtype = Default)
    }

**功能：** 保存图片/视频到媒体库的配置，包括保存的文件名等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]var fileNameExtension
    
    
    public var fileNameExtension: String

**功能：** 文件扩展名。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]var photoType
    
    
    public var photoType: PhotoType

**功能：** 创建的文件类型PhotoType，Image或者Video。

**类型：** PhotoType

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]var subtype
    
    
    public var subtype: PhotoSubtype

**功能：** 图片或者视频的文件子类型PhotoSubtype。

**类型：** PhotoSubtype

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]var title
    
    
    public var title: String

**功能：** 图片或者视频的标题，不传入时由系统生成。参数规格为：

  * 不应包含扩展名。

  * 文件名字符串长度为1~255（资产文件名为标题+扩展名）。

  * 不允许出现的非法英文字符，包括：. \ / : * ? " ' ` < > | { } [ ]




**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]init(String, PhotoType, String, PhotoSubtype)
    
    
    public init(fileNameExtension: String, photoType: PhotoType, title!: String = "", subtype!: PhotoSubtype = Default)

**功能：** 构造PhotoCreationConfig对象。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fileNameExtension | String | 是 | - | 文件扩展名，例如'jpg'。  
photoType | PhotoType | 是 | - | 创建的文件类型PhotoType，IMAGE或者VIDEO。  
title | String | 否 | "" | **命名参数。** 图片或者视频的标题，不传入时由系统生成。  
subtype | PhotoSubtype | 否 | Default | **命名参数。** 图片或者视频的文件子类型PhotoSubtype，不传入时默认为Default。  
  
#### class RequestOptions
    
    
    public class RequestOptions {
        public var deliveryMode: DeliveryMode
    }

**功能：** 请求策略。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]var deliveryMode
    
    
    public var deliveryMode: DeliveryMode

**功能：** 请求资源分发模式，可以指定对于该资源的请求策略，可被配置为快速模式，高质量模式，均衡模式三种策略。

**类型：** DeliveryMode

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### enum AlbumKeys
    
    
    public enum AlbumKeys <: ToString {
        | Uri
        | AlbumName
        | ...
    }

**功能：** 枚举，相册关键信息。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * ToString



#### [h2]AlbumName
    
    
    AlbumName

**功能：** 相册名字。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Uri
    
    
    Uri

**功能：** 相册uri。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func !=(AlbumKeys)
    
    
    public operator func !=(other: AlbumKeys): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | AlbumKeys | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(AlbumKeys)
    
    
    public operator func ==(other: AlbumKeys): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | AlbumKeys | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取枚举的值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举的说明。  
  
#### enum AlbumSubtype
    
    
    public enum AlbumSubtype <: Equatable<AlbumSubtype> & ToString {
        | UserGeneric
        | Favorite
        | Video
        | Image
        | AnyAlbum
        | ...
    }

**功能：** 枚举，相册子类型，表示具体的相册类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * Equatable<AlbumSubtype>
  * ToString



#### [h2]AnyAlbum
    
    
    AnyAlbum

**功能：** 任意相册。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Favorite
    
    
    Favorite

**功能：** 收藏夹。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Image
    
    
    Image

**功能：** 图片相册。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]UserGeneric
    
    
    UserGeneric

**功能：** 用户相册。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Video
    
    
    Video

**功能：** 视频相册。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func !=(AlbumSubtype)
    
    
    public operator func !=(other: AlbumSubtype): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | AlbumSubtype | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(AlbumSubtype)
    
    
    public operator func ==(other: AlbumSubtype): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | AlbumSubtype | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取枚举的值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举的说明。  
  
#### enum AlbumType
    
    
    public enum AlbumType <: Equatable<AlbumType> & ToString {
        | User
        | System
        | ...
    }

**功能：** 枚举，相册类型，表示是用户相册还是系统预置相册。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * Equatable<AlbumType>
  * ToString



#### [h2]System
    
    
    System

**功能：** 系统预置相册。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]User
    
    
    User

**功能：** 用户相册。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func !=(AlbumType)
    
    
    public operator func !=(other: AlbumType): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | AlbumType | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(AlbumType)
    
    
    public operator func ==(other: AlbumType): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | AlbumType | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取枚举的值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举的说明。  
  
#### enum DefaultChangeUri
    
    
    public enum DefaultChangeUri <: ToString {
        | DefaultPhotoUri
        | DefaultAlbumUri
        | ...
    }

**功能：** 枚举，DefaultChangeUri子类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * ToString



#### [h2]DefaultAlbumUri
    
    
    DefaultAlbumUri

**功能：** 默认相册的uri，与forChildUris{true}一起使用，将接收所有相册的更改通知。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]DefaultPhotoUri
    
    
    DefaultPhotoUri

**功能：** 默认PhotoAsset的uri，与forChildUris{true}一起使用，将接收所有PhotoAsset的更改通知。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func !=(DefaultChangeUri)
    
    
    public operator func !=(other: DefaultChangeUri): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | DefaultChangeUri | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(DefaultChangeUri)
    
    
    public operator func ==(other: DefaultChangeUri): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | DefaultChangeUri | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取枚举的值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举的说明。  
  
#### enum DeliveryMode
    
    
    public enum DeliveryMode <: Equatable<DeliveryMode> & ToString {
        | FastMode
        | HighQualityMode
        | BalanceMode
        | ...
    }

**功能：** 枚举，资源分发模式。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * Equatable<DeliveryMode>
  * ToString



#### [h2]BalanceMode
    
    
    BalanceMode

**功能：** 均衡模式。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]FastMode
    
    
    FastMode

**功能：** 快速模式。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]HighQualityMode
    
    
    HighQualityMode

**功能：** 高质量模式。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func !=(DeliveryMode)
    
    
    public operator func !=(other: DeliveryMode): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | DeliveryMode | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(DeliveryMode)
    
    
    public operator func ==(other: DeliveryMode): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | DeliveryMode | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取枚举的值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举的说明。  
  
#### enum DynamicRangeType
    
    
    public enum DynamicRangeType <: Equatable<DynamicRangeType> & ToString {
        | Sdr
        | Hdr
        | ...
    }

**功能：** 枚举，媒体文件的动态范围类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * Equatable<DynamicRangeType>
  * ToString



#### [h2]Hdr
    
    
    Hdr

**功能：** 高动态范围类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Sdr
    
    
    Sdr

**功能：** 标准动态范围类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func !=(DynamicRangeType)
    
    
    public operator func !=(other: DynamicRangeType): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | DynamicRangeType | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(DynamicRangeType)
    
    
    public operator func ==(other: DynamicRangeType): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | DynamicRangeType | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取枚举的值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举的说明。  
  
#### enum MemberType
    
    
    public enum MemberType {
        | Int64Value(Int64)
        | StringValue(String)
        | BoolValue(Bool)
        | ...
    }

**功能：** PhotoAsset的成员类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]BoolValue(Bool)
    
    
    BoolValue(Bool)

**功能：** 表示值类型为布尔类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Int64Value(Int64)
    
    
    Int64Value(Int64)

**功能：** 表示值类型为数字，可取任意值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]StringValue(String)
    
    
    StringValue(String)

**功能：** 表示值类型为字符，可取任意值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### enum NotifyType
    
    
    public enum NotifyType <: Equatable<NotifyType> & ToString {
        | NotifyAdd
        | NotifyUpdate
        | NotifyRemove
        | NotifyAlbumAddAsset
        | NotifyAlbumRemoveAsset
        | ...
    }

**功能：** 枚举，通知事件的类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * Equatable<NotifyType>
  * ToString



#### [h2]NotifyAdd
    
    
    NotifyAdd

**功能：** 添加文件集或相册通知的类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]NotifyAlbumAddAsset
    
    
    NotifyAlbumAddAsset

**功能：** 在相册中添加的文件集的通知类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]NotifyAlbumRemoveAsset
    
    
    NotifyAlbumRemoveAsset

**功能：** 在相册中删除的文件集的通知类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]NotifyRemove
    
    
    NotifyRemove

**功能：** 删除文件集或相册的通知类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]NotifyUpdate
    
    
    NotifyUpdate

**功能：** 文件集或相册的更新通知类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func !=(NotifyType)
    
    
    public operator func !=(other: NotifyType): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | NotifyType | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(NotifyType)
    
    
    public operator func ==(other: NotifyType): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | NotifyType | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取枚举的值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举的说明。  
  
#### enum PhotoKeys
    
    
    public enum PhotoKeys <: ToString {
        | Uri
        | PhotoType
        | DisplayName
        | Size
        | DateAdded
        | DateModified
        | Duration
        | Width
        | Height
        | DateTaken
        | Orientation
        | Favorite
        | Title
        | DateAddedMs
        | DateModifiedMs
        | PhotoSubtype
        | DynamicRangeType
        | CoverPosition
        | BurstKey
        | LcdSize
        | ThumbnailSize
        | ...
    }

**功能：** 枚举，图片和视频文件关键信息。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * ToString



#### [h2]BurstKey
    
    
    BurstKey

**功能：** 一组连拍照片的唯一标识：uuid。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]CoverPosition
    
    
    CoverPosition

**功能：** 动态照片的封面位置，具体表示封面帧所对应的视频时间戳（单位：微秒）。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]DateAdded
    
    
    DateAdded

**功能：** 文件创建时的Unix时间戳（单位：秒）。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]DateAddedMs
    
    
    DateAddedMs

**功能：** 文件创建时的Unix时间戳（单位：毫秒）。

注意：查询照片时，不支持基于该字段排序。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]DateModified
    
    
    DateModified

**功能：** 文件修改时的Unix时间戳（单位：秒）。修改文件名不会改变此值，当文件内容发生修改时才会更新。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]DateModifiedMs
    
    
    DateModifiedMs

**功能：** 文件修改时的Unix时间戳（单位：毫秒）。修改文件名不会改变此值，当文件内容发生修改时才会更新。

注意：查询照片时，不支持基于该字段排序。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]DateTaken
    
    
    DateTaken

**功能：** 拍摄时的Unix时间戳（单位：秒）。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]DisplayName
    
    
    DisplayName

**功能：** 显示名字。规格为：

  * 应包含有效文件主名和图片或视频扩展名。

  * 文件名字符串长度为1~255。

  * 文件主名中不允许出现的非法英文字符，包括：. .. \ / : * ? " ' ` < > | { } [ ]




**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Duration
    
    
    Duration

**功能：** 持续时间（单位：毫秒）。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]DynamicRangeType
    
    
    DynamicRangeType

**功能：** 媒体文件的动态范围类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Favorite
    
    
    Favorite

**功能：** 收藏。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Height
    
    
    Height

**功能：** 图片高度（单位：像素）。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]LcdSize
    
    
    LcdSize

**功能：** LCD图片的宽高，值为width:height拼接而成的字符串。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Orientation
    
    
    Orientation

**功能：** 文件的旋转角度，单位为度。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]PhotoSubtype
    
    
    PhotoSubtype

**功能：** 媒体文件的子类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]PhotoType
    
    
    PhotoType

**功能：** 媒体文件类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Size
    
    
    Size

**功能：** 文件大小（单位：字节）。动态照片的size包括图片和视频的总大小。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]ThumbnailSize
    
    
    ThumbnailSize

**功能：** THUMB图片的宽高，值为width:height拼接而成的字符串。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Title
    
    
    Title

**功能：** 文件标题。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Uri
    
    
    Uri

**功能：** 文件uri。

注意：查询照片时，该字段仅支持使用[DataSharePredicates.equalTo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-data_share_predicates#func-equaltostring-vbvaluetype)谓词。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Width
    
    
    Width

**功能：** 图片宽度（单位：像素）。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func !=(PhotoKeys)
    
    
    public operator func !=(other: PhotoKeys): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | PhotoKeys | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(PhotoKeys)
    
    
    public operator func ==(other: PhotoKeys): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | PhotoKeys | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取枚举的值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举的说明。  
  
#### enum PhotoSubtype
    
    
    public enum PhotoSubtype <: Equatable<PhotoSubtype> & ToString {
        | Default
        | MovingPhoto
        | Burst
        | ...
    }

**功能：** PhotoSubtype是不同PhotoAsset类型的枚举。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * Equatable<PhotoSubtype>
  * ToString



#### [h2]Burst
    
    
    Burst

**功能：** 连拍照片文件类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Default
    
    
    Default

**功能：** 默认照片类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]MovingPhoto
    
    
    MovingPhoto

**功能：** 动态照片文件类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func !=(PhotoSubtype)
    
    
    public operator func !=(other: PhotoSubtype): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | PhotoSubtype | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(PhotoSubtype)
    
    
    public operator func ==(other: PhotoSubtype): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | PhotoSubtype | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取枚举的值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举的说明。  
  
#### enum PhotoType
    
    
    public enum PhotoType {
        | Image
        | Video
        | ...
    }

**功能：** 枚举，媒体文件类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Image
    
    
    Image

**功能：** 图片。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Video
    
    
    Video

**功能：** 视频。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func !=(PhotoType)
    
    
    public operator func !=(other: PhotoType): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | PhotoType | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func ==(PhotoType)
    
    
    public operator func ==(other: PhotoType): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | PhotoType | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取枚举的值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举的说明。  
  
#### enum PhotoViewMimeTypes
    
    
    public enum PhotoViewMimeTypes <: Equatable<PhotoViewMimeTypes> & ToString {
        | ImageType
        | VideoType
        | ImageVideoType
        | MovingPhotoImageType
        | ...
    }

**功能：** 枚举，可选择的媒体文件类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * Equatable<PhotoViewMimeTypes>
  * ToString



#### [h2]ImageType
    
    
    ImageType

**功能：** 图片类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]ImageVideoType
    
    
    ImageVideoType

**功能：** 图片和视频类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]MovingPhotoImageType
    
    
    MovingPhotoImageType

**功能：** 动态照片类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]VideoType
    
    
    VideoType

**功能：** 视频类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func !=(PhotoViewMimeTypes)
    
    
    public operator func !=(other: PhotoViewMimeTypes): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | PhotoViewMimeTypes | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(PhotoViewMimeTypes)
    
    
    public operator func ==(other: PhotoViewMimeTypes): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | PhotoViewMimeTypes | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取枚举的值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举的说明。  
  
#### enum RecommendationType
    
    
    public enum RecommendationType <: Equatable<RecommendationType> & ToString {
        | QrOrBarCode
        | QrCode
        | BarCode
        | IdCard
        | ProfilePicture
        | Passport
        | BankCard
        | DriverLicense
        | DrivingLicense
        | FeaturedSinglePortrait
        | ...
    }

**功能：** 枚举，推荐的图片类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * Equatable<RecommendationType>
  * ToString



#### [h2]BankCard
    
    
    BankCard

**功能：** 银行卡。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]BarCode
    
    
    BarCode

**功能：** 条码。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]DriverLicense
    
    
    DriverLicense

**功能：** 驾驶证。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]DrivingLicense
    
    
    DrivingLicense

**功能：** 行驶证。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]FeaturedSinglePortrait
    
    
    FeaturedSinglePortrait

**功能：** 推荐人像。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]IdCard
    
    
    IdCard

**功能：** 身份证。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]Passport
    
    
    Passport

**功能：** 护照。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]ProfilePicture
    
    
    ProfilePicture

**功能：** 头像。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]QrCode
    
    
    QrCode

**功能：** 二维码。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]QrOrBarCode
    
    
    QrOrBarCode

**功能：** 二维码或条码。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func !=(RecommendationType)
    
    
    public operator func !=(other: RecommendationType): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | RecommendationType | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(RecommendationType)
    
    
    public operator func ==(other: RecommendationType): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | RecommendationType | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取枚举的值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举的说明。  
  
#### enum ResourceType
    
    
    public enum ResourceType <: Equatable<ResourceType> & ToString {
        | ImageResource
        | VideoResource
        | ...
    }

**功能：** 枚举，写入资源的类型。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**父类型：**

  * Equatable<ResourceType>
  * ToString



#### [h2]ImageResource
    
    
    ImageResource

**功能：** 表示图片资源。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]VideoResource
    
    
    VideoResource

**功能：** 表示视频资源。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

#### [h2]func !=(ResourceType)
    
    
    public operator func !=(other: ResourceType): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ResourceType | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(ResourceType)
    
    
    public operator func ==(other: ResourceType): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ResourceType | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取枚举的值。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举的说明。
