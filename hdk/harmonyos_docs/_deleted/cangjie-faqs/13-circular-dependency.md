---
name: cangjie-faqs/13-circular-dependency
title: 如何解决包之间的循环依赖
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/13-circular-dependency
nodePath: FAQ / 语法 / 如何解决包之间的循环依赖
---

# 如何解决包之间的循环依赖

#### 什么是包之间的循环依赖

包之间的循环依赖即包和包之间存在循环导入的场景，比如：包A导入了包B中任意的声明，包B导入了包C中任意的声明，包C导入了包A中任意的声明。则A->B->C->A形成了包之间的循环依赖。仓颉语言禁止包之间的循环依赖，在编译时会发生报错。

#### 解决方式

  1. 根据编译报错确认依赖环，如果环当中存在不必要的依赖，则可以通过将非必要的导入去除的方式将环打破来解决循环依赖。
  2. 若各个导入都为必要的导入，则需要重新规划包结构或架构设计来解决循环依赖。建议通过将依赖的声明或提出公共抽象层引入到第三个包中的方式来解决。



#### [h2]示例1

当前有包p和包p.a：
    
    
    package ohos_app_cangjie_entry.FAQ_59.p.a
    
    import kit.PerformanceAnalysisKit.Hilog
    import ohos_app_cangjie_entry.FAQ_59.p.config.CONFIG
    
    public func printConfig(): Unit {
        Hilog.info(0, "Cangjie Test", "${CONFIG}")
    }
    
    
    package ohos_app_cangjie_entry.FAQ_59.p
    
    import kit.PerformanceAnalysisKit.Hilog
    import ohos_app_cangjie_entry.FAQ_59.p.a.printConfig
    
    public let CONFIG: String = "CONFIG"
    
    func useConfig() {
        Hilog.info(0, "Cangjie Test", "${CONFIG}")
    }
    
    public func doSomethingWithCfg() {
        printConfig()
        useConfig()
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/0QRN5RRgQUKfDRWqlcCA6g/zh-cn_image_0000002689593457.png?HW-CC-KV=V1&HW-CC-Date=20260804T120346Z&HW-CC-Expire=86400&HW-CC-Sign=954BC474F961755E3B309B98355A72EF4968C9582FDF0EC81FAA2FE2F2E64809)

p和p.a形成循环依赖，引入包p.config将CONFIG移动到其中，调整结构后代码如下：
    
    
    package ohos_app_cangjie_entry.FAQ_59.p.config
    
    public let CONFIG: String = "CONFIG"
    
    
    package ohos_app_cangjie_entry.FAQ_59.p.a
    
    import kit.PerformanceAnalysisKit.Hilog
    import ohos_app_cangjie_entry.FAQ_59.p.config.CONFIG
    
    public func printConfig(): Unit {
        Hilog.info(0, "Cangjie Test", "${CONFIG}")
    }
    
    
    package ohos_app_cangjie_entry.FAQ_59.p
    
    import kit.PerformanceAnalysisKit.Hilog
    import ohos_app_cangjie_entry.FAQ_59.p.config.CONFIG
    import ohos_app_cangjie_entry.FAQ_59.p.a.printConfig
    
    public func useConfig() {
        Hilog.info(0, "Cangjie Test", "useConfig: ${CONFIG}")
    }
    
    public func usePrintConfig() {
        Hilog.info(0, "Cangjie Test", "use print config")
        printConfig()
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/kPJCBsHKSDqEHXw8kZL1FA/zh-cn_image_0000002659514056.png?HW-CC-KV=V1&HW-CC-Date=20260804T120346Z&HW-CC-Expire=86400&HW-CC-Sign=BEE59B45E5ED269CB3E2419DE1715F3479E4540CD4AB4EF1FD9E9909F04738DF)

此时包p、p.a、p.config之间不存在循环依赖。

#### [h2]示例2

当前有包R、R.logger、R.processor：
    
    
    package ohos_app_cangjie_entry.FAQ_59.R.logger
    
    import kit.PerformanceAnalysisKit.Hilog
    import ohos_app_cangjie_entry.FAQ_59.R.processor.DataProcessor
    
    public class Logger {
        private let processor: DataProcessor
    
        public init(processor: DataProcessor) {
            this.processor = processor
        }
    
        public func log(message: String): Unit {
            let processed = processor.process(message, this)
            Hilog.info(0, "Cangjie Test", "[LOG] ${processed}")
        }
    }
    
    
    package ohos_app_cangjie_entry.FAQ_59.R.processor
    
    import ohos_app_cangjie_entry.FAQ_59.R.logger.Logger
    
    public class DataProcessor {
        public func process(data: String, logger: Logger): String {
            if (data.isEmpty()) {
                logger.log("data is empty")
                return ""
            }
            return data.toAsciiTitle()
        }
    }
    
    
    package ohos_app_cangjie_entry.FAQ_59.R
    
    import ohos_app_cangjie_entry.FAQ_59.R.logger.Logger
    import ohos_app_cangjie_entry.FAQ_59.R.processor.DataProcessor
    
    public func logStart(): Unit {
        Logger(DataProcessor()).log("log start")
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/ECrJFOtYR9-qh-pBqV_kyw/zh-cn_image_0000002659354122.png?HW-CC-KV=V1&HW-CC-Date=20260804T120346Z&HW-CC-Expire=86400&HW-CC-Sign=A470E0DF4B6803275F84F7F3DB8A31C5C8FFF2F4186D613BF6C465241701BA38)

包R.logger和R.processor形成循环依赖，引入包R.interfaces并抽取接口到其中，调整结构后代码如下：
    
    
    // logger.cj
    package ohos_app_cangjie_entry.FAQ_59.R.interfaces
    
    public interface Logger {
        func log(message: String): Unit
    }
    
    
    // data_processor.cj
    package ohos_app_cangjie_entry.FAQ_59.R.interfaces
    
    public interface DataProcessor {
        func process(data: String, logger: Logger): String
    }
    
    
    // logger_imp.cj
    package ohos_app_cangjie_entry.FAQ_59.R.logger
    
    import ohos_app_cangjie_entry.FAQ_59.R.interfaces.Logger
    import ohos_app_cangjie_entry.FAQ_59.R.interfaces.DataProcessor
    import kit.PerformanceAnalysisKit.Hilog
    
    public class LoggerImp <: Logger {
        private let processor: DataProcessor
    
        public init(processor: DataProcessor) {
            this.processor = processor
        }
    
        public func log(message: String): Unit {
            let processed = processor.process(message, this)
            Hilog.info(0, "Cangjie Test", "Logged: ${processed}")
        }
    }
    
    
    // data_processor_imp.cj
    package ohos_app_cangjie_entry.FAQ_59.R.processor
    
    import ohos_app_cangjie_entry.FAQ_59.R.interfaces.DataProcessor
    import ohos_app_cangjie_entry.FAQ_59.R.interfaces.Logger
    
    public class DataProcessorImp <: DataProcessor {
        public func process(data: String, logger: Logger): String {
            if (data.isEmpty()) {
                logger.log("data is empty")
                return ""
            }
            return data.toAsciiTitle()
        }
    }
    
    
    // log_start.cj
    package ohos_app_cangjie_entry.FAQ_59.R
    
    import ohos_app_cangjie_entry.FAQ_59.R.logger.LoggerImp as Logger
    import ohos_app_cangjie_entry.FAQ_59.R.processor.DataProcessorImp as DataProcessor
    
    public func logStart(): Unit {
        Logger(DataProcessor()).log("log start")
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/08/v3/IFAMlu8jQ6S38jBKy8mcrA/zh-cn_image_0000002689473649.png?HW-CC-KV=V1&HW-CC-Date=20260804T120346Z&HW-CC-Expire=86400&HW-CC-Sign=24855D12D0EC75993033A63EBB7ED333F4BFED3BDA35AA3E731E7CCE18422CD3)

此时包R、R.logger、R.processor、R.interfaces之间不存在循环依赖。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/1YvnauHiSCWjK_WCbWtUQw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120346Z&HW-CC-Expire=86400&HW-CC-Sign=9897ED6318E9F70F9051E69FC6332CDAA4D0E18D208B43D1B67855F1D90E464C)

通过将包合并的方式也可以解决循环依赖，但随着功能增多代码可能会变得臃肿不易维护和阅读，内聚度下降，请酌情使用。
