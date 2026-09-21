---
name: document/cn/AppGallery-connect-Guides/integrate-sdk-server-java-0000001300655858
title: 集成SDK
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/integrate-sdk-server-java-0000001300655858
---

# 集成SDK

## 集成Server SDK

AGC Server SDK发布在Maven仓库，需要在pom.xml文件中添加Maven仓库地址和SDK依赖。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20241106152701.00886869733234004208998839717386:50001231000000:2800:D16BA5348BDE8174B9DC5F1AE916CC772A1ADF306A33E6EA7388410A03516246.png?needInitFileName=true?needInitFileName=true)

1. 添加Maven仓库地址。

   ```screen
   <repositories>
       <repository>
           <id>sz-maven-public</id>
           <name>sz-maven-public</name>
           <url>https://developer.huawei.com/repo/</url>
       </repository>
   </repositories>
   ```


2. 在Maven项目的pom.xml中，添加云函数服务SDK的依赖。

   ```screen
   <dependency>
       <groupId>com.huawei.agconnect.server</groupId>
       <artifactId>agconnect-function-server</artifactId>
       <version>${https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/server-java-sdk-changenotes-0000001353496181}</version>
   </dependency>
   ```

## 初始化Server SDK

1. 获取认证凭据，并将认证凭据放置到您自定义的目录，服务器执行用户需要具备认证凭证文件读权限，请参见[下载项目级认证凭据](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/server-java-download-project-level-credentials-0000001328608158)。
2. 初始化SDK。

   您可以使用之前下载的认证凭据对SDK进行初始化。当前认证凭证初始化提供了两种方式，您可以设置AGC_CONFIG环境变量，也可以在代码中明确传递认证凭证路径。
   * 方式一：需要先设置环境变量。
     * Linux环境请执行如下操作： 永久环境变量需要在$HOME目录中的.bashrc或者.bash_profile文件中写入如下命令，并执行source .bashrc或者.bash_profile保证环境变量生效。临时环境变量直接执行如下命令，*[PATH]*请替换为凭据文件的实际路径。

       ```screen
       export AGC_CONFIG="[PATH]/agc-apiclient-xxx-xxx.json"
       ```

     * Windows环境请执行如下操作: 永久环境变量需要在Windows的"高级系统设置 > 环境变量"中设置如下的系统变量，建议重启windows系统或者通过其他方式加载环境变量，使设置的系统环境变量生效。

       临时环境变量直接执行如下命令，*[PATH]*请替换为凭据文件的实际路径。

       ```screen
       set AGC_CONFIG=[PATH]\agc-apiclient-xxx-xxx.json
       ```

     然后执行如下操作进行初始化：

     ```screen
     AGCClient.initialize();
     ```

     您也可以为客户端设置名称和数据处理位置，用于支持特定的服务可以灵活地选择数据处理位置。

     ```screen
     String clientName = "[CLIENT_NAME]";
     String region= "[REGION]";
     AGCClient.initialize(clientName, region);
     ```

     其中*[CLIENT_NAME]* 为用户自定义的客户端名称，在获取服务实例的时候，需要用此名称进行关联。*[REGION]*是客户端的数据处理位置，可选的值有"CN"（中国）、"RU"（俄罗斯）、"SG"（新加坡）、"DE"（德国）。


   * 方式二：需要明确传递认证凭证路径。请执行如下操作，*[PATH]* 请替换为凭据文件的实际路径。

     ```screen
     CredentialService credential = CredentialParser.toCredential("[PATH]/agc-apiclient-xxx-xxx.json");
     AGCParameter parameter = AGCParameter.builder().setCredential(credential).build();
     AGCClient.initialize(parameter);
     ```

     您也可以为客户端设置名称和数据处理位置，用于支持特定的服务可以灵活地选择数据处理位置。

     ```screen
     String clientName = "[CLIENT_NAME]";
     String region= "[REGION]";
     CredentialService credential = CredentialParser.toCredential("[PATH]/agc-apiclient-xxx-xxx.json");
     AGCParameter parameter = AGCParameter.builder().setCredential(credential).build();
     AGCClient.initialize(clientName, parameter, region);
     ```

     其中*[CLIENT_NAME]* 为用户自定义的客户端名称，在获取服务实例的时候，需要用此名称进行关联。*[REGION]*是客户端的数据处理位置，可选的值有"CN"（中国）、"RU"（俄罗斯）、"SG"（新加坡）、"DE"（德国）。

