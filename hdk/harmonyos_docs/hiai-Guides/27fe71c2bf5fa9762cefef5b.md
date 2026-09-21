---
name: document/cn/hiai-Guides/ios-real-time-translation-0000001062729936
title: 在线文本翻译
uri: https://developer.huawei.com/consumer/cn/doc/hiai-Guides/ios-real-time-translation-0000001062729936
---

# 在线文本翻译

## 服务介绍

在线文本翻译服务将源语言文字通过云侧服务器翻译为目标语言文字。目前实时文本翻译能实现38种语言文字在线互译，支持语言文字的详细信息请参见[文本翻译支持的语言列表](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/ml-resource-0000001050038188)。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172416.11938198803220131078335164493317:50001231000000:2800:87FB142C754B480F949233E09C812B0346C657F742160ECE99652F4DC05071B0.png "点击放大")

## 应用场景

在线文本翻译服务可以广泛应用于需要不同语种互译并且有网络的场景。例如，教育学习类App集成该服务，在学习多种语言时，也可轻松实现将陌生语言翻译成熟悉的语言，提高学习效率。

## 注意事项

在线文本翻译服务需要联网才能提供翻译能力。

## 开发步骤

在开始开发之前，需要完成对应的[开发准备工作](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/ios-config-agc-0000001055443511)，并且完成了本服务的[SDK集成](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/ios-real-time-translation-sdk-0000001061681459)。

1. 导入头文件。

   ```codeblock
   #import <MLTranslate/MLTranslate.h>
   ```

2. 配置全局云端鉴权码，目前提供以下两种方式进行设置：
   * accessToken方式

     ```codeblock
     [[MLTranslateApplication sharedInstance] setAccessToken:@"your accessToken"];
     ```

   * apiKey方式

     ```codeblock
     [[MLTranslateApplication sharedInstance] setApiKey:@"your apiKey"];
     ```

3. 创建文本翻译器。可以通过文本翻译器自定义参数类[MLRemoteTranslateSetting](https://developer.huawei.com/consumer/cn/doc/hiai-References/mlremotetranslatesetting-0000001062404544)创建翻译器。

   ```codeblock
   // 使用自定义的参数配置创建文本翻译器。
   MLRemoteTranslateSetting *settings = [[MLRemoteTranslateSetting alloc] initWithSourceLangCode:@"zh" targetLangCode:@"en"];
   // 设置源语言的编码，使用ISO 639-1标准（中文繁体使用BCP-47标准）。此设置为可选项，如果不设置，将自动检测语种进行翻译。
   // 设置目标语言的编码，使用ISO 639-1标准（中文繁体使用BCP-47标准）。
   [[MLRemoteTranslator sharedInstance] setRemoteTranslator:settings];
   ```

4. 可通过下面的方法查询云侧翻译所支持的语种。

   ```codeblock
   // 异步方法示例代码：
   [MLTranslateLanguage getCloudAllLanguages:^(NSArray * _Nullable allLangs) {
       // 成功获取云侧翻译所支持的语种
   } addOnFailureListener:^(MLTranslateException * _Nonnull exception) {
       // 获取云侧翻译所支持的语种的失败处理逻辑
   }];
   ```

5. 进行文本翻译（错误码信息可参见[机器学习服务错误码](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mltranslateexception-0000001062882342)）。

   异步方法示例代码：

   ```codeblock
   // sourceText为待翻译文本
   [[MLRemoteTranslator sharedInstance] asyncTranslate:@"sourceText" addOnSuccessListener:^(NSString * _Nonnull text) {
       // 翻译成功的处理逻辑
   } addOnFailureListener:^(MLTranslateException *exception) {
       // 翻译失败的处理逻辑
   }];
   ```

