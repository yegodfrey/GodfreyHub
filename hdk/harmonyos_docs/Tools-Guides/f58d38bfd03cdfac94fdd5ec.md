---
name: document/cn/Tools-Guides/ide-compile-debug-0000001147936551
title: 快应用编译调试
uri: https://developer.huawei.com/consumer/cn/doc/Tools-Guides/ide-compile-debug-0000001147936551
---

# 快应用编译调试

#### 自定义编译配置

快应用IDE支持对编译的配置项进行自定义，从而可以自定义编译的项目路径。方法如下：

在项目根路径下创建文件quickapp.config.js，文件内容如下：

```
module.exports = {
  sourceRoot: './src',
  signRoot: './sign',
  releasePath: './dist',
  outputPath: './build',
  lintOnBuild: true,
}
```

* sourceRoot：源码根目录。
* signRoot：证书签名路径
* releasePath：快应用包目录。
* outputPath：输出目录。
* lintOnBuild：开启或关闭编译时进行JS语法静态检查。

上述代码中配置项的值为各项的默认值。

除此之外，快应用IDE还支持自定义resolve、module、plugins和node配置，使用方式与 webpack 类似。

以如何让项目支持 typescript 开发为例，在quickapp.config.js文件中添加如下内容。

```
module.exports = {
    webpack: {
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-env',
                    '@babel/preset-typescript'
                  ]
                },
                exclude: /node_modules/,
            }]
        },
        resolve: {
            mainFields: ['quickapp', 'main', 'module', 'browser'],   // 3.1.1-Stable.300版本开始的默认配置
        }
    }
}
```

由于上述代码中添加了依赖@babel/preset-typescript，所以配置完后，还需要在IDE的"终端"页签，执行 npm i -D @babel/preset-typescript 安装依赖。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100013.62609174188420523829357035283182:50001231000000:2800:E079AE690BD0B44E2445F596D9E6C8633217C13B10F60CF317086758A69ABDB7.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)  

#### 实时编译

1. [连接调试设备](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/ide-link-device-0000001101576706)和[配置调试参数](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/ide-set-common-param-0000001148584193)后，点击"运行"，首次会出现选择运行设备界面。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100014.45534967700788451190961902000134:50001231000000:2800:78E7AF9C3C9BEE4C455CE280BF3F1E72FE6A281728FBE8102E8B1B38E4AB2BE1.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)
2. 点击"确认"，IDE启动设备投屏，并将配置的目标页面或卡片文件推送至手机中渲染。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100014.67343512575336137683401689683853:50001231000000:2800:DE5D525B84ECCB2BC7D2D4471D1BF9EAE7868A2454A87ECBC4885E8F223A6DDD.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

3. 修改ux文件后进行保存，IDE将自动编译，并通过日志输出编译结果，手机设备将实时更新，显示修改后的内容。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100014.38582771598907348575714765015835:50001231000000:2800:6EEDC9C5D99190E6DB3A4629D4477BB2BDA724B96BE1272F6009DC8FCF0CBB6B.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

4. 点击"停止"，结束实时编译，投屏界面将关闭快应用加载器的页面。  

#### 真机调试

1. [连接调试设备](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/ide-link-device-0000001101576706)和[配置调试参数](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/ide-set-common-param-0000001148584193)后，点击"调试"按钮，首次会出现选择运行设备界面。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100014.17953383842907046811531450349481:50001231000000:2800:5BB8D317261E6E2D2581382F046387BFEBBF46DF0E942E5E276F7441B9C1C808.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)
2. 点击"确认"，启动调试流程，控制台输出COMPILE RESULT:SUCCESS {"WARN"：,"NOTE":}后切换至DEVTOOL控制台，并启动终端设备投屏。  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100014.08386412124101110194974640286328:50001231000000:2800:C21DB1E613F1D597FFE2071CA9C1F145F6E214A356D36472196D4AF01137FECB.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)  
   * 若控制台有错误信息输出，则启动调试失败，会退出调试流程，请修改代码后重新调试。
   * 使用基于虚拟机的设备（例如桌面云）进行调试，如果出现投屏黑屏无法显示，但调试手机可以操作的现象，请访问用户目录下的\\.quickapp-ide\\quickscrcpy\\config，将该目录下的config.ini文件中的UseDesktopOpenGL字段修改为0，并重启IDE。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100014.12128800440836730277913143528008:50001231000000:2800:5DA8E00BB374B973B379CC1822DFCDC876E234B4EA657955A05ADF27A2DB7D23.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)
3. 在DEVTOOL面板下的Runtime.js -\>Webpack栏，找到对应的页面文件，设置断点，进行调试。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100014.99199637947561663934662146748799:50001231000000:2800:0A20AA5DFFB9F78034DD753442EDE91390439BFA0BAC207412CF14A44B9FA61A.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

4. 点击调试窗口弹出按钮，可将调试控制台脱离IDE以独立界面形式呈现。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100014.98533967238434632882976871497428:50001231000000:2800:8433D6EC98BE65ECC639C9BA88C065C5990141B467AEFF7D613537BFFC9CECD4.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

5. 再次点击调试按钮，关闭调试。右侧常驻投屏关闭快应用加载器页面显示手机界面，日志输出"Debug service has been closed"。  

#### Inspect

1. [连接调试设备](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/ide-link-device-0000001101576706)和[配置调试参数](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/ide-set-common-param-0000001148584193)后，点击"检查"，首次会出现选择运行设备界面。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100014.73748725594916662131384377390078:50001231000000:2800:074AAD0507B2D7FD0B17FD04A75E6690FA6828E16B3417A86F9502BD9C77AE1D.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)
2. 点击"确认"，启动检查流程，控制台输出COMPILE RESULT:SUCCESS {"WARN"：,"NOTE":}后打开检查窗口，并启动终端设备投屏。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100014.48688600648285117921537097376500:50001231000000:2800:89A41E54F560E2EA0637055EAE98C1C6BDD9E2A44E4C2752953DA95F89F62805.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

3. 选中对应的区域可以检查对应区域的元素，vdom信息，但无法进行样式调试。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100014.84782921862389548011173128221807:50001231000000:2800:5CF58B30654CCAC5BEC1AF91B09EF74D19A091385FA9403700D95E3F5250C4FB.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

4. 在审查页面的DevTool面板中，可以查看应用的网路请求、存储等信息，进行抓包处理。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100014.24712326294944214806862720888362:50001231000000:2800:2E714A168850FDF10619714D4B5573295FCC518619A48B7EC1C21C9F7CBD0CFE.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### Webview调试

Webview调试可以用于：

* 微信小程序转换快应用后的Element布局审查
* HTML5快应用开发调试

具体操作如下。

* 调试项目工程：
  1. 连接设备，通过IDE运行微信小程序转换后的快应用或HTML5快应用。
  2. 菜单选择"工具 \>WebView调试工具"，打开webview调试窗口，选择需要调试的页面进行调试。

<!-- -->

* 调试rpk包：
  1. 在设备上使用快应用加载器运行快应用。
  2. 连接设备，IDE菜单选择"工具 \>WebView调试工具"，打开webview调试窗口，选择需要调试的页面进行调试。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100015.87538837088077127260423496041781:50001231000000:2800:0FFD42668AFE19E19BA8B151D95177ABF1B19C7578B7AA166CC0ADC3B4373A62.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)  
使用webview调试的页面只能是设备上展示的页面，退出当前页面，webview调试页面将会是空白的。  

#### 相关链接

#### FAQ

* [运行调试时，应用界面提示"加载失败"，或者出现修改不生效情况，如何处理？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-faq-0000001129279483#section17775101423015)
* [华为手机日志无法查看，如何处理？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-faq-0000001129279483#section1398013143303)
* [使用IDE Debug代码时，找不到代码，如何处理？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-faq-0000001129279483#section1144191511309)
* [Debug时，电脑显示手机屏幕黑屏，如何处理？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-faq-0000001129279483#section1361714512417)
* [运行IDE发现CPU内存使用过高，如何处理？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-faq-0000001129279483#section1039522415)
* [实时预览画面加载出现问题，如何处理？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-faq-0000001129279483#section1017015523413)
* [如果需要使用IDE中未集成的依赖组件，如何处理？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-faq-0000001129279483#section533395244111)
* [在实时预览模式下，更换了背景图片，预览刷新后智能取色还是以前的效果，没有同步刷新，如何处理？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-faq-0000001129279483#section549965217413)
* [拖拽组件显示异常，如何处理？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-faq-0000001129279483#section128588811491)
* [如何使用IDE断点调试app.js或页面的启动代码？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-faq-0000001129279483#section142141915499)
* [在华为快应用IDE中，将ux文件放在项目的Common文件夹下，为什么没有编译出js文件？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-faq-0000001129279483#section11553791499)
* [如何使用IDE实时调试H5页面？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-faq-0000001129279483#section14901191084916)
* [运行或调试应用，提示 Can't resolve 'sass-loader' 和 Can't resolve 'node-sass' ，该如何处理？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-faq-0000001129279483#section17665252174117)
* [用Inspect无法看到游戏内容，但是预览和调试可以，为什么？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickgame-faq-0000001112830270#section3280101175414)
* [快应用IDE中可以看H5的日志吗？怎么才能看到H5的日志？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickgame-faq-0000001112830270#section12751811195412)
