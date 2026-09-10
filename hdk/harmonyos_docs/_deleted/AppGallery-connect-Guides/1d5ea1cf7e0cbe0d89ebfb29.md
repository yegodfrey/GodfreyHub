---
name: document/cn/AppGallery-connect-Guides/develop-func-nodejs-0000001713076049
title: Node.js
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/develop-func-nodejs-0000001713076049
---

# Node.js

#### 入口方法

入口方法定义如下：

```
module.exports.myHandler = function(event, context, callback, logger)
```

* myHandler：入口方法名称。
* event：调用方传递的事件对象，JSON格式。具体内容请参见[event对象](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudfunction-trigger-event-0000001620581529)。
* context：函数运行时上下文对象，封装了日志接口、回调接口、环境变量env对象等。
* callback：事件处理结果。
* logger：记录日志。

函数必须通过显式调用callback(object)将事件处理结果返回给AGC，结果可以是任意对象，但必须与JSON.stringify兼容，AGC会将结果转换成JSON字符串后，返回给调用方。callback执行完成，函数即执行结束。

完整的Node.js 20.x云函数示例代码请参考[函数示例](#section817193312817)。  

#### 日志记录

您可在代码中使用logger接口记录日志，后端已通过global.logger全局定义，目前支持四种级别：

* logger.debug()
* logger.error()
* logger.warn()
* logger.info()  

#### 获取环境变量

您可在代码中使用context.env.key访问环境变量，获取环境变量env1示例如下：

```
let env1 = context.env.env1;
```

若环境变量未配置，则会返回环境变量为undefined。

![](https://media:801773804280908370)  

#### 异常处理

您可以在函数代码中捕获异常，封装成error对象返回给调用方。对于函数执行期间被平台捕获的异常，平台同样以error对象形式返回给调用方。error对象定义如下。

```
error：
{
    "code": xxxxxx,
    "message": "xxxxxxxx"
}
```

其中code为错误码，message为错误码的描述信息。

示例代码如下：

```
try {
    logger.info(JSON.stringify(event));
    let result = { "message": "success" };
    callback(result);
} catch (err) {
    let error = {
        code: 400,
        message: err.message
    }
    callback(error);
}
```

#### 函数示例

示例函数如下：  
![](https://media:801773804280936371)  
示例代码中入口方法myHandler()的返回值类型仅供您参考，您可以根据实际需要定义。

```
/**
 * Describe the basic method of Cloud Functions
 */
let myHandler = function(event, context, callback, logger) {
    // example of display environment variables
    let env1 = context.env.env1;

    // example of display logs
    logger.info("Test info log");
    logger.warn("Test warn log");
    logger.debug("Test debug log");
    logger.error("Test error log");

    logger.info("--------Start-------");
    try {
        let startTime = new Date().getTime();
        let endTime = startTime;
        let interval = 0;
        startTime = process.uptime() * 1000;

        // print input parameters and environment variables
        logger.info("request: " + JSON.stringify(event.request));
        logger.info("env1: " + env1);

        endTime = process.uptime() * 1000;
        interval = endTime - startTime;
        logger.info("intervalTime: " + interval);
        logger.info("--------Finished-------");

        let res = new context.HTTPResponse(context.env, {
            "res-type": "context.env",
            "faas-content-type": "json",
        }, "application/json", "200");
        res.body = {"intervalTime": interval};
        callback(res);
    } catch (error) {
        logger.error("--------Error-------");
        logger.error("error: " + error);
        callback(error);
    }
};

module.exports.myHandler = myHandler;
```

#### 准备函数部署包

函数部署包示例：[nodejs_demo.zip](https://media:801773804280980372)

您上传的Node.js函数部署包须使用如下结构，处理程序所在代码文件必须在zip根目录下，依赖项放到node_modules目录下，可通过npm工具的相关命令，安装与管理依赖。

```
my-function.zip
  |---- index.js
  |---- node_modules
    |----async
    |----async-listener
```

