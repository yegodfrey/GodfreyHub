---
name: document/cn/harmonyos-center-guides/faqs-development-environment-2-0000001940515598
title: 导入Sample时，提示连接Gitee超时
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-center-guides/faqs-development-environment-2-0000001940515598
source: portal
---

导入Sample时，提示连接Gitee超时 **问题现象** 导入Sample时，如果连接gitee.com的443端口超时，会提示“Failed to connect to gitee.com port 443: Time out”。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/tptc2ZcxSwyfcOKuLD0gfg/zh-cn_image_0000002623377575.png?HW-CC-KV=V1&HW-CC-Date=20261005T053117Z&HW-CC-Expire=86400&HW-CC-Sign=32F85AFB0F695719B5FF9153000E4C90A498AB687549B125E45B89F070D2D336) **解决措施** 该问题可能是由于网络受限导致的，请检查网络连接状态。如果确实受限，需要通过代理服务器访问网络，请按照以下步骤配置git代理信息。
    1. 打开Git安装目录（默认为C:\\\Program Files\\\Git），双击运行“git-cmd.exe”文件。
    2. 在打开的命令行窗口中，执行以下命令配置代理服务器信息（将proxyUsername、proxyPassword、proxyServer和port按照实际代理服务器进行修改）。![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/ePzpSL-ASBukIjwMarogFg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T053117Z&HW-CC-Expire=86400&HW-CC-Sign=4DC84407B19A0570EF5BB60571C7F3F6AAEFA0241ECDFDDE0DA05CCD93AEE26F) 如果密码中包含特殊字符，如 @、#、* 等，可能导致配置不生效。建议将这些特殊字符替换为 ASCII 码，并在 ASCII 码前加百分号 %。常用符号替换为 ASCII 码的对照表如下：
       * !：%21
       * @：%40
       * #：%23
       * $：%24
       * &：%26
       * *：%2A
    
    git config --global http.proxy http://proxyUsername:proxyPassword@proxy.server.com:port

    3. 执行完成后，请重新尝试导入Sample。
