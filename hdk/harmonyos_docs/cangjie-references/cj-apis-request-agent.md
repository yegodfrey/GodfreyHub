---
name: cangjie-references/cj-apis-request-agent
title: ohos.request（上传下载）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-request-agent
nodePath: 系统 / 基础功能 / Basic Services Kit（基础服务） / 仓颉API / 数据文件处理 / ohos.request（上传下载）
---

# ohos.request（上传下载）  
  
request模块给应用提供上传下载文件、后台代理传输的基础功能。

#### 导入模块
    
    
    import kit.BasicServicesKit.*

#### 权限列表

ohos.permission.INTERNET

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### func create(UIAbilityContext, Config)
    
    
    public func create(context: UIAbilityContext, config: Config): Task

**功能：** 创建需要上传或下载的任务，并将其排入队列。支持HTTP/HTTPS协议。

**需要权限：** ohos.permission.INTERNET

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiabilitycontext) | 是 | - | 基于应用程序的上下文。  
config | Config | 是 | - | 上传/下载任务的配置信息。  
  
**返回值：**

类型 | 说明  
---|---  
Task | 返回一个Task对象，里面包括任务id和任务的配置信息。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[上传下载错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-request)与[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
13400001 | Invalid file or file system error.  
13400003 | Task service ability error.  
13499999 | Other error.  
21900004 | The application task queue is full.  
21900005 | Operation with wrong task mode.  
  



**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let context = Global.abilityContext
        let config = Config(
            Action.Download,
            "https://example.com/file.txt"
        )
        let task = create(context, config)
        Hilog.info(0, "test", "成功创建任务，任务ID: ${task.tid}")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### func getTask(UIAbilityContext, String, ?String)
    
    
    public func getTask(context: UIAbilityContext, id: String, token!: ?String = None): Task

**功能：** 根据任务id查询任务。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiabilitycontext) | 是 | - | 基于应用程序的上下文。  
id | String | 是 | - | 任务id。  
token | ?String | 否 | None | **命名参数。** 任务查询token。  
  
**返回值：**

类型 | 说明  
---|---  
Task | 返回一个Task对象，里面包括任务id和任务的配置信息。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[上传下载错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-request)。

错误码ID | 错误信息  
---|---  
13400003 | Task service ability error.  
13499999 | Other error.  
21900006 | Task removed or not found.  
  



**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let context = Global.abilityContext
        let taskId = "example_task_id"
        let task = getTask(context, taskId)
        Hilog.info(0, "test", "成功获取任务，任务ID: ${task.tid}")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### func remove(String)
    
    
    public func remove(id: String): Unit

**功能：** 移除属于调用方的指定任务，如果正在处理中，该任务将被迫停止。在调用后任务对象和其回调函数会被释放。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
id | String | 是 | - | 任务id。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[上传下载错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-request)。

错误码ID | 错误信息  
---|---  
13400003 | Task service ability error.  
21900006 | Task removed or not found.  
  



**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let taskId = "example_task_id"
        remove(taskId)
        Hilog.info(0, "test", "成功移除任务，任务ID: ${taskId}")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### func search(Filter)
    
    
    public func search(filter!: Filter = Filter()): Array<String>

**功能：** 根据Filter过滤条件查找任务id。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
filter | Filter | 否 | Filter() | **命名参数。** 过滤条件。  
  
**返回值：**

类型 | 说明  
---|---  
Array<String> | 返回满足条件任务id。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[上传下载错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-request)。

错误码ID | 错误信息  
---|---  
13400003 | Task service ability error.  
  



**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let filter = Filter()
        let taskIds = search(filter: filter)
        Hilog.info(0, "test", "搜索到任务数量: ${taskIds.size}")
        for (id in taskIds) {
            Hilog.info(0, "test", "任务ID: ${id}")
        }
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### func show(String)
    
    
    public func show(id: String): TaskInfo

**功能：** 根据任务id查询任务的详细信息。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
id | String | 是 | - | 任务id。  
  
**返回值：**

类型 | 说明  
---|---  
TaskInfo | 返回任务详细信息的TaskInfo对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[上传下载错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-request)。

错误码ID | 错误信息  
---|---  
13400003 | Task service ability error.  
21900006 | Task removed or not found.  
  



**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let taskId = "example_task_id"
        let taskInfo = show(taskId)
        Hilog.info(0, "test", "任务信息: ${taskInfo.description}")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### func touch(String, String)
    
    
    public func touch(id: String, token: String): TaskInfo

**功能：** 根据任务id和token查询任务的详细信息。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
id | String | 是 | - | 任务id。  
token | String | 是 | - | 任务查询token。  
  
**返回值：**

类型 | 说明  
---|---  
TaskInfo | 返回任务详细信息的TaskInfo对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[上传下载错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-request)。

错误码ID | 错误信息  
---|---  
13400003 | Task service ability error.  
21900006 | Task removed or not found.  
  



**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let taskId = "example_task_id"
        let token = "example_token"
        let taskInfo = touch(taskId, token)
        Hilog.info(0, "test", "任务信息: ${taskInfo.description}")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class Config
    
    
    public class Config {
        public var action: Action
        public var url: String
        public var title:?String
        public var description: String
        public var mode: Mode
        public var overwrite: Bool
        public var method:?String
        public var headers: HashMap<String, String>
        public var data:?ConfigData
        public var saveas:String
        public var network: Network
        public var metered: Bool
        public var roaming: Bool
        public var retry: Bool
        public var redirect: Bool
        public var index: UInt32
        public var begins: Int64
        public var ends: Int64
        public var gauge: Bool
        public var precise: Bool
        public var token: ?String
        public var priority: UInt32
        public var extras: HashMap<String, String>
    
        public init(action: Action, url: String, title!: ?String = None, description!: String = "",
            mode!: Mode = Mode.Background, overwrite!: Bool = false, method!: ?String = None,
            headers!: HashMap<String, String> = HashMap<String, String>(), data!: ?ConfigData = None,  saveas!: String = "./",
            network!: Network = Network.AnyType, metered!: Bool = false, roaming!: Bool = true, retry!: Bool = true,
            redirect!: Bool = true, index!: UInt32 = 0, begins!: Int64 = 0, ends!: Int64 = -1, gauge!: Bool = false,
            precise!: Bool = false,  token!: ?String = None, priority!: UInt32 = 0,extras!: HashMap<String, String> = HashMap<String, String>()
        )
    }

**功能：** 上传/下载任务的配置信息。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var action
    
    
    public var action: Action

**功能：** 任务操���选项。

UPLOAD表示上传任务。

DOWNLOAD表示下载任务。

**类型：** Action

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var begins
    
    
    public var begins: Int64

**功能：** 文件起点，通常情况下用于断点续传。

下载时，请求读取服务器开始下载文件时的起点位置（HTTP协议中设置"Range"选项）。

上传时，读取需上传的文件的起点位置。

**类型：** Int64

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var data
    
    
    public var data:?ConfigData

**功能：** 下载时，data为字符串类型，通常情况下使用json格式（object将被转换为json文本）。

上传时，data是表单项数组Array<FormItem>。创建单个任务可以上传最多100个文件。

**类型：** ?ConfigData

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var description
    
    
    public var description: String

**功能：** 任务的详细信息，其最大长度为1024个字符。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var ends
    
    
    public var ends: Int64

**功能：** 文件终点，通常情况下用于断点续传。默认值为-1，取值为闭区间，表示传输到整个文件末尾结束。

下载时，请求读取服务器开始下载文件时的结束位置（HTTP协议中设置"Range"选项）。

上传时，读取需上传的文件的结束位置。

**类型：** Int64

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var extras
    
    
    public var extras: HashMap<String, String>

**功能：** 配置的附加功能。

**类型：** HashMap<String,String>

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var gauge
    
    
    public var gauge: Bool

**功能：** 后台任务的过程进度通知策略，仅应用于后台任务。

false：代表仅完成或失败的通知。

true：发出每个进度已完成或失败的通知。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var headers
    
    
    public var headers: HashMap<String, String>

**功能：** 添加要包含在任务中的HTTP协议标志头。

上传请求，默认的Content-Type为"multipart/form-data"。

下载请求，默认的Content-Type为"application/json"。

**类型：** HashMap

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var index
    
    
    public var index: UInt32

**功能：** 任务的路径索引，通常情况下用于任务断点续传。

**类型：** UInt32

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var metered
    
    
    public var metered: Bool

**功能：** 是否允许在按流量计费的网络中工作。

true：是

false：否

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var method
    
    
    public var method:?String

**功能：** 上传或下载HTTP的标准方法，包括GET、POST和PUT，不区分大小写。

上传时，使用PUT或POST，默认值为PUT。

下载时，使用GET或POST，默认值为GET。

**类型：** ?String

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var mode
    
    
    public var mode: Mode

**功能：** 任务模式，默认为后台任务。下载到用户文件场景必须为Mode.Foreground。

**类型：** Mode

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var network
    
    
    public var network: Network

**功能：** 网络选项，当前支持无线网络Wifi和蜂窝数据网络Cellular。

**类型：** Network

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var overwrite
    
    
    public var overwrite: Bool

**功能：** 下载过程中路径已存在时的解决方案选择。

true，覆盖已存在的文件。

false，下载失败。

下载到用户文件场景必须为true。

设置为 true 时，不建议创建多个任务同时往同一个文件下载内容，会导致文件内容混乱。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var precise
    
    
    public var precise: Bool

**功能：** 如果设置为true，在上传/下载无法获取文件大小时任务失败。

如果设置为false，将文件大小设置为-1时任务继续。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var priority
    
    
    public var priority: UInt32

**功能：** 任务的优先级。前台任务的优先级比后台任务高。任务模式相同的情况下，该配置项的数字越小优先级越高。

**类型：** UInt32

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var redirect
    
    
    public var redirect: Bool

**功能：** 是否允许重定向。

true：是

false：否

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var retry
    
    
    public var retry: Bool

**功能：** 是否为后台任务启用自动重试，仅应用于后台任务。

true：是

false：否

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var roaming
    
    
    public var roaming: Bool

**功能：** 是否允许在漫游网络中工作。

true：是

false：否

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var saveas
    
    
    public var saveas:String

**功能：** 保存下载文件的路径，包括如下几种：

相对路径，位于调用方的缓存路径下，如"./xxx/yyy/zzz.html"、"xxx/yyy/zzz.html"。

internal协议路径，支持"internal://"及其子路径，internal为调用方（传入的context）对应路径，"internal://cache"对应context.cacheDir。如"internal://cache/path/to/file.txt"。

应用沙箱目录，只支持到base及其子目录下，如"/data/storage/el1/base/path/to/file.txt"。

file协议路径，支持应用文件和用户文件，应用文件必须匹配应用包名，只支持到base及其子目录下，如"file://com.example.test/data/storage/el2/base/file.txt"。用户文件必须为调用方创建好的用户文件uri。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var title
    
    
    public var title:?String

**功能：** 任务标题，其最大长度为256个字符。

**类型：** ?String

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var token
    
    
    public var token: ?String

**功能：** 任务令牌。查询带有token的任务需提供token并通过request.agent.touch查询，否则无法查询到指定任务。其最小为8个字节，最大为2048个字节。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var url
    
    
    public var url: String

**功能：** 资源地址。最大长度为8192个字符。支持HTTP拦截功能。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]init(Action, String, ?String, String, Mode, Bool, ?String, HashMap<String,String>, ?ConfigData, String, Network, Bool, Bool, Bool, Bool, UInt32, Int64, Int64, Bool, Bool, ?String, UInt32, HashMap<String,String>)
    
    
    public init(action: Action, url: String, title!: ?String = None, description!: String = "",
        mode!: Mode = Mode.Background, overwrite!: Bool = false, method!: ?String = None,
        headers!: HashMap<String, String> = HashMap<String, String>(), data!: ?ConfigData = None, saveas!: String = "./",
        network!: Network = Network.AnyType, metered!: Bool = false, roaming!: Bool = true, retry!: Bool = true,
        redirect!: Bool = true, index!: UInt32 = 0, begins!: Int64 = 0, ends!: Int64 = -1, gauge!: Bool = false,
        precise!: Bool = false, token!: ?String = None, priority!: UInt32 = 0,extras!: HashMap<String, String> = HashMap<String, String>()
    )

**功能：** 创建Config对象。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
action | Action | 是 | - | **命名参数。** 任务操作选项。  
url | String | 是 | - | **命名参数。** 资源地址。最大长度为8192个字符。支持HTTP拦截功能。  
title | ?String | 否 | None | **命名参数。** 任务标题，其最大长度为256个字符，默认值为小写的 upload 或 download，与上面的 action 保持一致。  
description | String | 否 | "" | **命名参数。** 任务的详细信息，其最大长度为1024个字符，默认值为空字符串。  
mode | Mode | 否 | Mode.Background | **命名参数。** 任务模式，默认为后台任务。下载到用户文件场景必须为request.agent.Mode.FOREGROUND。  
overwrite | Bool | 否 | false | **命名参数。** 下载过程中路径已存在时的解决方案选择，默认为false。  
method | ?String | 否 | None | **命名参数。** 上传或下载HTTP的标准方法，包括GET、POST和PUT，不区分大小写。  
headers | HashMap<String,String> | 否 | HashMap<String,String>() | **命名参数。** 添加要包含在任务中的HTTP协议标志头。  
data | ?ConfigData | 否 | None | **命名参数。** \- 下载时，data为字符串类型，通常情况下使用json格式（object将被转换为json文本），默认为空。  
saveas | String | 否 | "./" | **命名参数。** 保存下载文件的路径。  
network | Network | 否 | Network.AnyType | **命名参数。** 网络选项，当前支持无线网络Wifi和蜂窝数据网络Cellular，默认为Network.AnyType（Wifi或Cellular）。  
metered | Bool | 否 | false | **命名参数。** 是否允许在按流量计费的网络中工作，默认为false。  
roaming | Bool | 否 | true | **命名参数。** 是否允许在漫游网络中工作，默认为true。  
retry | Bool | 否 | true | **命名参数。** 是否为后台任务启用自动重试，仅应用于后台任务，默认为true。  
redirect | Bool | 否 | true | **命名参数。** 是否允许重定向，默认为true。  
index | UInt32 | 否 | 0 | **命名参数。** 任务的路径索引，通常情况下用于任务断点续传，默认为0。  
begins | Int64 | 否 | 0 | **命名参数。** 文件起点，通常情况下用于断点续传。默认值为0，取值为闭区间，表示从头开始传输。。  
ends | Int64 | 否 | \- 1 | **命名参数。** 文件终点，通常情况下用于断点续传。默认值为-1，取值为闭区间，表示传输到整个文件末尾结束。  
gauge | Bool | 否 | false | **命名参数。** 后台任务的过程进度通知策略，仅应用于后台任务，默认值为false。  
precise | Bool | 否 | false | **命名参数。** \- 如果设置为true，在上传/下载无法获取文件大小时任务失败。  
token | ?String | 否 | None | **命名参数。** 任务令牌。查询带有token的任务需提供token并通过request.agent.touch查询，否则无法查询到指定任务。其最小为8个字节，最大为2048个字节。默认为空。  
priority | UInt32 | 否 | 0 | **命名参数。** 任务的优先级。前台任务的优先级比后台任务高。任务模式相同的情况下，该配置项的数字越小优先级越高，默认值为0。  
extras | HashMap<String,String> | 否 | HashMap<String, String>() | **命名参数。** 配置的附加功能，默认为空。  
  
**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let config = Config(
            Action.Download,
            "https://example.com/file.txt",
            title: "示例下载任务",
            description: "这是一个示例下载任务",
            mode: Mode.Background,
            overwrite: true,
            network: Network.Wifi,
            metered: false,
            roaming: true,
            retry: true,
            redirect: true,
            gauge: false,
            precise: false,
            priority: 0
        )
        Hilog.info(0, "test", "成功创建配置对象")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class FileSpec
    
    
    public class FileSpec {
        public var path: String
        public var mimeType:?String
        public var filename:?String
        public var extras: HashMap<String, String>
    
        public init(
            path: String,
            mimeType!: ?String = None,
            filename!: ?String = None,
            extras!: HashMap<String, String> = HashMap<String, String>()
        )
    }

**功能：** 表单项的文件信息。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var extras
    
    
    public var extras: HashMap<String, String>

**功能：** 文件信息的附加内容，该属性不会体现在HTTP请求中。

**类型：** HashMap<String,String>

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var filename
    
    
    public var filename:?String

**功能：** 文件名。

**类型：** ?String

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var mimeType
    
    
    public var mimeType:?String

**功能：** 文件的mimeType，通过文件名获取。

**类型：** ?String

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var path
    
    
    public var path:String

**功能：** 文件路径。

相对路径，位于调用方的缓存路径下。

例如："./xxx/yyy/zzz.html"、"xxx/yyy/zzz.html"。

internal协议路径，支持"internal://"及其子路径。internal为调用方（即传入的context）对应路径，"internal://cache"对应context.cacheDir。

例如："internal://cache/path/to/file.txt"。

应用沙箱目录，只支持到base及其子目录下。

例如："/data/storage/el1/base/path/to/file.txt"。

file协议路径，必须匹配应用包名，只支持到base及其子目录下。

例如："file://com.example.test/data/storage/el2/base/file.txt"。

用户公共文件，仅支持上传任务。

例如："file://media/Photo/path/to/file.img"。仅支持前台任务。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]init(String, ?String, ?String, HashMap<String,String>)
    
    
    public init(
        path: String,
        mimeType!: ?String = None,
        filename!: ?String = None,
        extras!: HashMap<String, String> = HashMap<String, String>()
    )

**功能：** 创建FileSpec对象。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | **命名参数。** 文件路径。  
mimeType | ?String | 否 | None | **命名参数。** 文件的mimeType，通过文件名获取，默认值为文件名后缀。  
filename | ?String | 否 | None | **命名参数。** 文件名，默认值通过路径获取。  
extras | HashMap<String,String> | 否 | HashMap<String,String>() | **命名参数。** 文件信息的附加内容，该参数不会体现在HTTP请求中。  
  
**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let fileSpec = FileSpec(
            "./example.txt",
            mimeType: "text/plain",
            filename: "example.txt"
        )
        Hilog.info(0, "test", "成功创建文件规范对象")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class Filter
    
    
    public class Filter {
        public var before:?Int64
        public var after:?Int64
        public var state:?State
        public var action:?Action
        public var mode:?Mode
    
        public init(before!: ?Int64 = None, after!: ?Int64 = None, state!: ?State = None,
            action!: ?Action = None, mode!: ?Mode = None
        )
    }

**功能：** 过滤条件。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var action
    
    
    public var action:?Action

**功能：** 任务操作选项。

Upload表示上传任务。

Download表示下载任务。

**类型：** ?Action

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var after
    
    
    public var after:?Int64

**功能：** 开始的Unix时间戳（毫秒）。

**类型：** ?Int64

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var before
    
    
    public var before:?Int64

**功能：** 结束的Unix时间戳（毫秒）。

**类型：** ?Int64

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var mode
    
    
    public var mode:?Mode

**功能：** 任务模式。

Foreground表示前台任务。

Background表示后台任务。

**类型：** ?Mode

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var state
    
    
    public var state:?State

**功能：** 指定任务的状态。

**类型：** ?State

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]init(?Int64, ?Int64, ?State, ?Action, ?Mode)
    
    
    public init(before!: ?Int64 = None, after!: ?Int64 = None, state!: ?State = None,
        action!: ?Action = None, mode!: ?Mode = None
    )

**功能：** 创建Filter对象。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
before | ?Int64 | 否 | None | **命名参数。** 结束的Unix时间戳（毫秒），默认为调用时刻。  
after | ?Int64 | 否 | None | **命名参数。** 开始的Unix时间戳（毫秒），默认值为调用时刻减24小时。  
state | ?State | 否 | None | **命名参数。** 指定任务的状态。如果未填写，则查询所有任务。  
action | ?Action | 否 | None | **命名参数。** 任务操作选项。如果未填写，则查询所有任务。  
mode | ?Mode | 否 | None | **命名参数。** 任务模式。如果未填写，则查询所有任务。  
  
**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let filter = Filter(
            state: State.Running,
            action: Action.Download,
            mode: Mode.Background
        )
        Hilog.info(0, "test", "成功创建过滤器对象")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class FormItem
    
    
    public class FormItem {
        public var name: String
        public var value: FormItemValue
    
        public init(name: String, value: FormItemValue)
    }

**功能：** 任务的表单项信息。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var name
    
    
    public var name: String

**功能：** 表单参数名。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var value
    
    
    public var value: FormItemValue

**功能：** 表单参数值。

**类型：** FormItemValue

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]init(String, FormItemValue)
    
    
    public init(name: String, value: FormItemValue)

**功能：** 创建FormItem对象。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
name | String | 是 | - | **命名参数。** 表单参数名。  
value | FormItemValue | 是 | - | **命名参数。** 表单参数值。  
  
**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let formItem = FormItem(
            "exampleField",
            FormItemValue.StringItem("exampleValue")
        )
        Hilog.info(0, "test", "成功创建表单项对象")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class HttpResponse
    
    
    public class HttpResponse {
        public let version: String
        public let statusCode: Int32
        public let reason: String
        public let headers: HashMap<String, Array<String>>
    }

**功能：** 任务响应头的数据结构。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let headers
    
    
    public let headers: HashMap<String, Array<String>>

**功能：** Http响应头部。

**类型：** HashMap<String,Array<String>>

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let reason
    
    
    public let reason: String

**功能：** Http响应原因。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let statusCode
    
    
    public let statusCode: Int32

**功能：** Http响应状态码。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let version
    
    
    public let version: String

**功能：** Http版本。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### class Progress
    
    
    public class Progress {
        public let state: State
        public let index: UInt32
        public let processed: Int64
        public let sizes: Array<Int64>
        public let extras: HashMap<String, String>
    }

**功能：** 任务进度的数据结构。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let extras
    
    
    public let extras: HashMap<String, String>

**功能：** 交互的额外内容，例如：来自服务器的响应的header和body。

**类型：** HashMap<String,String>

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let index
    
    
    public let index: UInt32

**功能：** 任务中当前正在处理的文件索引。

**类型：** UInt32

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let processed
    
    
    public let processed: Int64

**功能：** 任务中当前文件的已处理数据大小，单位为字节（B）。

**类型：** Int64

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let sizes
    
    
    public let sizes: Array<Int64>

**功能：** 任务中文件的大小，单位为字节（B）。在下载过程中，若服务器使用chunk方式传输导致无法从请求头中获取文件总大小时，sizes为 -1。

**类型：** Array<Int64>

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let state
    
    
    public let state: State

**功能：** 任务当前的状态。

**类型：** State

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### class Task
    
    
    public class Task {
        public let tid: String
        public var config: Config
    
        public init(tid: String, config: Config)
    }

**功能：** 上传或下载任务。使用该方法前需要先获取Task对象，通过create获取。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]var config
    
    
    public var config: Config

**功能：** 任务的配置信息。

**类型：** Config

**读写能力：** 可读写

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let tid
    
    
    public let tid: String

**功能：** 任务id，由系统自动生成且唯一。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]init(String, Config)
    
    
    public init(tid: String, config: Config)

**功能：** 创建Task对象。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
tid | String | 是 | - | 任务id，由系统自动生成且唯一。。  
config | Config | 是 | - | 任务的配置信息  
  
**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let context = Global.abilityContext
        let taskId = "example_task_id"
        let config = Config(
            Action.Download,
            "https://example.com/file.txt"
        )
        let task = Task(taskId, config)
        Hilog.info(0, "test", "成功初始化任务，任务ID: ${task.tid}")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func off(EventCallbackType, ?CallbackObject)
    
    
    public func off(event: EventCallbackType, callback!: ?CallbackObject = None): Unit

**功能：** 取消订阅任务事件。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | EventCallbackType | 是 | - |  订阅的事件类型。 \- 取值为Progress，表示任务进度。 \- 取值为Completed，表示任务完成。 \- 取值为Failed，表示任务失败。 \- 取值为Pause，表示任务暂停。 \- 取值为Resume，表示任务恢复。 \- 取值为Remove，表示任务删除。 \- 取值为Response，表示任务响应。  
callback | ?[CallbackObject](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-callback_invoke#class-callbackobject) | 否 | None | **命名参数。** 需要取消订阅的回调函数。若无此参数，则取消订阅当前类型的所有回调函数。  
  
**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    public class ProgressCallback <: Callback1Argument<Progress> {
        public ProgressCallback(let f: (Progress) -> Unit) {}
    
        public func invoke(err: ?BusinessException, arg: Progress): Unit {
            f(arg)
        }
    }
    
    try {
        let config = Config(
            Action.Download,
            "zipURL"
        )
        let task = create(Global.abilityContext, config)
        let callback = ProgressCallback({progress => Hilog.info(0, "test", "invoke success")})
        task.on(EventCallbackType.Pause, callback)
        task.off(EventCallbackType.Pause, callback: callback)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.toString()}")
    }

#### [h2]func on(EventCallbackType, Callback1Argument<HttpResponse>)
    
    
    public func on(event: EventCallbackType, callback: Callback1Argument<HttpResponse>): Unit

**功能：** 订阅任务响应头。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | EventCallbackType | 是 | - |  订阅的事件类型。 \- 取值为Response，表示任务响应。  
callback | [Callback1Argument](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-callback_invoke#class-callback1argumenta)<HttpResponse> | 是 | - | 发生相关的事件时触发该回调方法，返回任务响应头的数据结构。  
  
**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.callback_invoke.*
    import ohos.business_exception.BusinessException
    
    public class ProgressCallback <: Callback1Argument<HttpResponse> {
        public ProgressCallback(let f: (HttpResponse) -> Unit) {}
    
        public func invoke(err: ?BusinessException, arg: HttpResponse): Unit {
            f(arg)
        }
    }
    
    try {
        let config = Config(
            Action.Download,
            "zipURL"
        )
        let task = create(Global.abilityContext, config)
        let callback = ProgressCallback({response => Hilog.info(0, "test", "invoke success")})
        task.on(EventCallbackType.Response, callback)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.toString()}")
    }

#### [h2]func on(EventCallbackType, Callback1Argument<Progress>)
    
    
    public func on(event: EventCallbackType, callback: Callback1Argument<Progress>): Unit

**功能：** 订阅任务进度的事件。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | EventCallbackType | 是 | - |  订阅的事件类型。 \- 取值为Progress，表示任务进度，任务进度有进展时触发该事件。  
callback | [Callback1Argument](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-callback_invoke#class-callback1argumenta)<Progress> | 是 | - | 发生相关的事件时触发该回调方法，返回任务信息的数据结构。  
  
**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    import ohos.callback_invoke.*
    
    public class ProgressCallback <: Callback1Argument<Progress> {
        public ProgressCallback(let f: (Progress) -> Unit) {}
    
        public func invoke(err: ?BusinessException, arg: Progress): Unit {
            f(arg)
        }
    }
    
    try {
        let config = Config(
            Action.Download,
            "zipURL"
        )
        let task = create(Global.abilityContext, config)
        let callback = ProgressCallback({progress => Hilog.info(0, "test", "invoke success")})
        task.on(EventCallbackType.Pause, callback)
        task.off(EventCallbackType.Pause, callback: callback)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.toString()}")
    }

#### [h2]func pause()
    
    
    public func pause(): Unit

**功能：** 暂停任务，可以暂停正在等待/正在运行/正在重试的任务，已暂停的任务可被resume恢复。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[上传下载错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-request)。

错误码ID | 错误信息  
---|---  
13400003 | Task service ability error.  
21900007 | Operation with wrong task state.  
  



**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let config = Config(
            Action.Download,
            "zipURL"
        )
        let task = create(Global.abilityContext, config)
        task.pause()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.toString()}")
    }

#### [h2]func resume()
    
    
    public func resume(): Unit

**功能：** 重新启动任务，可以恢复被暂停的任务。

**需要权限：** ohos.permission.INTERNET

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[上传下载错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-request)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
13400003 | Task service ability error.  
21900007 | Operation with wrong task state.  
  



**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let config = Config(
            Action.Download,
            "zipURL"
        )
        let task = create(Global.abilityContext, config)
        task.resume()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.toString()}")
    }

#### [h2]func start()
    
    
    public func start(): Unit

**功能：** 启动一个任务。

以下状态的任务可以被启动：

  1. 刚被request.agent.create接口创建的任务。
  2. 使用request.agent.create接口创建的已经失败或者停止的下载任务。



**需要权限：** ohos.permission.INTERNET

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[上传下载错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-request)与[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
13400003 | Task service ability error.  
21900007 | Operation with wrong task state.  
  



**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let context = Global.abilityContext
        let config = Config(
            Action.Download,
            "https://example.com/file.txt"
        )
        let task = create(context, config)
    
        task.start()
        Hilog.info(0, "test", "成功启动任务")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func stop()
    
    
    public func stop(): Unit

**功能：** 停止任务，可以停止正在运行/正在等待/正在重试的任务，已停止的任务可被start恢复。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[上传下载错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-request)。

错误码ID | 错误信息  
---|---  
13400003 | Task service ability error.  
21900007 | Operation with wrong task state.  
  



**示例：**
    
    
    // main_ability.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let context = Global.abilityContext
        let config = Config(
            Action.Download,
            "https://example.com/largefile.zip"
        )
        let task = create(context, config)
    
        task.start()
        task.stop()
        Hilog.info(0, "test", "成功停止任务")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class TaskInfo
    
    
    public class TaskInfo {
        public let saveas: String
        public let url: String
        public let data: ConfigData
        public let tid: String
        public let title: String
        public let description: String
        public let action: Action
        public let mode: Mode
        public let priority: UInt32
        public let mimeType: String
        public let progress: Progress
        public let gauge: Bool
        public let ctime: UInt64
        public let mtime: UInt64
        public let retry: Bool
        public let tries: UInt32
        public let faults: Faults
        public let reason: String
        public let extras: HashMap<String, String>
    }

**功能：** 查询结果的任务信息数据结构，提供普通查询和系统查询，两种字段的可见范围不同。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let action
    
    
    public let action: Action

**功能：** 任务操作选项。

Upload表示上传任务。

Download表示下载任务。

**类型：** Action

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let ctime
    
    
    public let ctime: UInt64

**功能：** 创建任务的Unix时间戳（毫秒），由当前设备的系统生成。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/raurJYuDSSOUgU0KCjST0A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111112Z&HW-CC-Expire=86400&HW-CC-Sign=64A75A7DF5FAC68E94FE15CD96D19E9958581BB6A67E1DB0F54464CE0345ED04)

使用request.agent.search进行查询时，该值需处于[after,before]区间内才可正常查询到任务id，before和after信息详见Filter。

**类型：** UInt64

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let data
    
    
    public let data: ConfigData

**功能：** 任务值。

通过request.agent.show、request.agent.touch进行查询。

**类型：** ConfigData

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let description
    
    
    public let description: String

**功能：** 任务描述。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let extras
    
    
    public let extras: HashMap<String, String>

**功能：** 任务的额外部分。

**类型：** HashMap<String,String>

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let faults
    
    
    public let faults: Faults

**功能：** 任务的失败原因。Others表示其他故障。Disconnected表示网络断开连接。Timeout表示任务超时。Protocol表示协议错误。Fsio表示文件系统io错误。

**类型：** Faults

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let gauge
    
    
    public let gauge: Bool

**功能：** 后台任务的进度通知策略。

false：代表仅完成或失败的通知。

true，发出每个进度已完成或失败的通知。

**类型：** Bool

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let mimeType
    
    
    public let mimeType: String

**功能：** 任务配置中的mimetype。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let mode
    
    
    public let mode: Mode

**功能：** 任务模式。

Foreground表示前台任务。

Background表示后台任务。

**类型：** Mode

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let mtime
    
    
    public let mtime: UInt64

**功能：** 任务状态改变时的Unix时间戳（毫秒），由当前设备的系统生成。

**类型：** UInt64

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let priority
    
    
    public let priority: UInt32

**功能：** 任务配置中的优先级。前台任务的优先级比后台任务高。相同模式的任务，数字越小优先级越高。

**类型：** UInt32

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let progress
    
    
    public let progress: Progress

**功能：** 任务的过程进度。

**类型：** Progress

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let reason
    
    
    public let reason: String

**功能：** 等待/失败/停止/暂停任务的原因。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let retry
    
    
    public let retry: Bool

**功能：** 任务的重试开关，仅应用于后台任务。

true：是

false：否

**类型：** Bool

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let saveas
    
    
    public let saveas: String

**功能：** 保存下载文件的路径。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let tid
    
    
    public let tid: String

**功能：** 任务id。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let title
    
    
    public let title: String

**功能：** 任务标题。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let tries
    
    
    public let tries: UInt32

**功能：** 任务的尝试次数。

**类型：** UInt32

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]let url
    
    
    public let url: String

**功能：** 任务的url。

通过request.agent.show、request.agent.touch进行查询。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### enum Action
    
    
    public enum Action <: Equatable<Action> & ToString {
        | Download
        | Upload
        | ...
    }

**功能：** 定义操作选项。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**父类型：**

  * Equatable<Action>
  * ToString



#### [h2]Download
    
    
    Download

**功能：** 表示下载任务。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Upload
    
    
    Upload

**功能：** 表示上传任务。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]func !=(Action)
    
    
    public operator func !=(other: Action): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | Action | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(Action)
    
    
    public operator func ==(other: Action): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | Action | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取当前枚举的字符串表示。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 获取当前枚举的字符串表示。  
  
#### enum BroadcastEvent
    
    
    public enum BroadcastEvent <: ToString {
        | Complete
        | ...
    }

**功能：** 定义自定义系统事件。用户可以使用公共事件接口获取该事件。上传下载SA具有'ohos.permission.SEND_TASK_COMPLETE_EVENT' 该权限，用户可以配置事件的metadata 指向的二级配置文件来拦截其他事件发送者。

使用CommonEventData 类型传输公共事件相关数据。成员的内容填写和[CommonEventData介绍](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_manager) 介绍的有所区别，其中CommonEventData.code 表示任务的状态，目前为0x40 COMPLETE或0x41 FAILED; CommonEventData.data 表示任务的taskId。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**父类型：**

  * ToString



#### [h2]Complete
    
    
    Complete

**功能：** 表示自定义系统事件完成。在任务结束后会触发该事件，根据任务的成功或失败，事件的code返回0x40或者0x41。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取当前枚举的字符串表示。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 当前枚举的字符串表示。  
  
#### enum ConfigData
    
    
    public enum ConfigData {
        | StringValue(String)
        | FormItems(Array<FormItem>)
        | ...
    }

**功能：** 上传/下载任务的data配置枚举类型。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]FormItems(Array<FormItem>)
    
    
    FormItems(Array<FormItem>)

**功能：** 表示上传时，data是表单项数组Array<FormItem>。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]StringValue(String)
    
    
    StringValue(String)

**功能：** 表示下载时，data为字符串类型，通常使用json(object将被转换为json文本)。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### enum EventCallbackType
    
    
    public enum EventCallbackType <: Equatable<EventCallbackType> & Hashable & ToString {
        | Progress
        | Completed
        | Failed
        | Pause
        | Resume
        | Remove
        | Response
        | ...
    }

**功能：** 订阅事件类型。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**父类型：**

  * Equatable<EventCallbackType>
  * Hashable
  * ToString



#### [h2]Completed
    
    
    Completed

**功能：** 表示任务完成的事件类型。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Failed
    
    
    Failed

**功能：** 表示任务失败的事件类型。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Pause
    
    
    Pause

**功能：** 表示任务暂停的事件类型。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Progress
    
    
    Progress

**功能：** 表示任务进度的事件类型。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Remove
    
    
    Remove

**功能：** 表示任务移除的事件类型。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Response
    
    
    Response

**功能：** 表示任务接收到响应的事件类型。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Resume
    
    
    Resume

**功能：** 表示任务恢复的事件类型。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]func !=(EventCallbackType)
    
    
    public operator func !=(other: EventCallbackType): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | EventCallbackType | 是 | - | 另一个订阅事件类型。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(EventCallbackType)
    
    
    public operator func ==(other: EventCallbackType): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | EventCallbackType | 是 | - | 另一个订阅事件类型。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

**功能：** 获取回调事件的哈希值。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Int64 | 当前枚举的哈希值表示。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取当前枚举的字符串表示。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 当前枚举的字符串表示。  
  
#### enum Faults
    
    
    public enum Faults <: ToString {
        | Others
        | Disconnected
        | Timeout
        | Protocol
        | Fsio
        | ...
    }

**功能：** 定义任务失败的原因。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**父类型：**

  * ToString



#### [h2]Disconnected
    
    
    Disconnected

**功能：** 表示网络断开连接。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Fsio
    
    
    Fsio

**功能：** 表示文件系统io错误，例如打开/查找/读取/写入/关闭。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Others
    
    
    Others

**功能：** 表示其他故障。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Protocol
    
    
    Protocol

**功能：** 表示协议错误，例如：服务器内部错误（500）、无法处理的数据区间（416）等。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Timeout
    
    
    Timeout

**功能：** 表示任务超时。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取当前枚举的字符串表示。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 当前枚举的字符串表示。  
  
#### enum FormItemValue
    
    
    public enum FormItemValue {
        | StringItem(String)
        | FileItem(FileSpec)
        | FileItemArray(Array<FileSpec>)
        | ...
    }

**功能：** 表单项的文件信息枚举类型。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]FileItem(FileSpec)
    
    
    FileItem(FileSpec)

**功能：** 表示文件信息。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]FileItemArray(Array<FileSpec>)
    
    
    FileItemArray(Array<FileSpec>)

**功能：** 表示多个文件信息。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]StringItem(String)
    
    
    StringItem(String)

**功能：** 表示文件路径。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### enum Mode
    
    
    public enum Mode <: Equatable<Mode> & ToString {
        | Background
        | Foreground
        | ...
    }

**功能：** 定义模式选项。

当应用的前台任务切换到后台一段时间后会显示运行失败或暂停，而后台任务不受此操作影响。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**父类型：**

  * Equatable<Mode>
  * ToString



#### [h2]Background
    
    
    Background

**功能：** 表示后台任务。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Foreground
    
    
    Foreground

**功能：** 表示前台任务。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]func !=(Mode)
    
    
    public operator func !=(other: Mode): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | Mode | 是 | - | 另一个模式选项。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(Mode)
    
    
    public operator func ==(other: Mode): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | Mode | 是 | - | 另一个模式选项。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取当前枚举的字符串表示。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 当前枚举的字符串表示。  
  
#### enum Network
    
    
    public enum Network <: Equatable<Network> & ToString {
        | AnyType
        | Wifi
        | Cellular
        | ...
    }

**功能：** 定义网络选项。

网络不满足设置条件时，未执行的任务会等待执行，执行中的任务将失败或暂停。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**父类型：**

  * Equatable<Network>
  * ToString



#### [h2]AnyType
    
    
    AnyType

**功能：** 表示不限网络类型。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Cellular
    
    
    Cellular

**功能：** 表示蜂窝数据网络。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Wifi
    
    
    Wifi

**功能：** 表示无线网络。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]func !=(Network)
    
    
    public operator func !=(other: Network): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | Network | 是 | - | 另一个网络选项。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(Network)
    
    
    public operator func ==(other: Network): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | Network | 是 | - | 另一个网络选项。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取当前枚举的字符串表示。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 获取当前枚举的字符串表示。  
  
#### enum State
    
    
    public enum State <: ToString {
        | Initialized
        | Waiting
        | Running
        | Retrying
        | Paused
        | Stopped
        | Completed
        | Failed
        | Removed
        | ...
    }

**功能：** 定义任务当前的状态。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**父类型：**

  * ToString



#### [h2]Completed
    
    
    Completed

**功能：** 表示任务完成。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Failed
    
    
    Failed

**功能：** 表示任务失败。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Initialized
    
    
    Initialized

**功能：** 表示通过配置信息（Config）创建的任务已初始化。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Paused
    
    
    Paused

**功能：** 表示任务暂停，通常后续会恢复任务。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Removed
    
    
    Removed

**功能：** 表示任务移除。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Retrying
    
    
    Retrying

**功能：** 表示任务至少失败一次，现在正在再次处理中。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Running
    
    
    Running

**功能：** 表示任务正在运行中。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Stopped
    
    
    Stopped

**功能：** 表示任务停止。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]Waiting
    
    
    Waiting

**功能：** 表示任务缺少运行或重试的资源，又或是网络状态不匹配。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取当前枚举的字符串表示。

**系统能力：** SystemCapability.Request.FileTransferAgent

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 获取当前枚举的字符串表示。
