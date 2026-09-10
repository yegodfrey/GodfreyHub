---
name: document/cn/AppGallery-connect-Guides/agc-auth-harmonyts6-integration-0000001553624922
title: 集成SDK
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-harmonyts6-integration-0000001553624922
---

# 集成SDK

#### 前提条件

* 安装HUAWEI DevEco Studio 3.0及以上版本
* 配置 SDK API Version 6
  * Compile SDK Version 6
* Compatible SDK Version 6  

#### 添加应用配置文件

1. [获取"agconnect-services.json"文件](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-obtain-files-0000001276801300#section760762814312)。
2. 将"agconnect-services.json"文件拷贝到项目的entry模块的目录下。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250723181116.94984825903095376882448559736313:50001231000000:2800:D88B25F7B8021358EB92A336A1D72F7DC63DC23E0E33387B3AEDAF98F03B4F4D.gif)

#### 配置SDK地址

1. 配置maven仓地址和AppGallery Connect插件地址。
   1. 打开项目级build.gradle文件。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250723181116.54029488525871531218747698388987:50001231000000:2800:F89FB0B9CE6824043F9FA5AE99EFE0B5B8BAE758D47739CA2A92133FDB60FE7D.png)

   2. 在allprojects -\>repositories中检查maven仓地址配置，若配置有缺失，请补充。

      ```
      allprojects { 
                  repositories { 
                      maven {url 'https://repo.huaweicloud.com/repository/maven/' } 
                      maven {url 'https://developer.huawei.com/repo/'} 
                      jcenter() 
                  } 
              }
      ```

   3. 在buildscript-\>repositories中检查maven仓地址配置，若配置有缺失，请补充。

      ```
      buildscript { 
                  repositories { 
                      maven {url 'https://repo.huaweicloud.com/repository/maven/' } 
                      maven {url 'https://developer.huawei.com/repo/'} 
                      jcenter() 
                  } 
       }
      ```

   4. 在buildscript-\>dependencies中配置AppGallery Connect插件地址。

      ```
      buildscript {
          dependencies {
              classpath 'com.huawei.agconnect:agcp-harmony:1.5.1.300'
          } 
      }
      ```

#### 配置SDK依赖

添加配置文件后，需要在DevEco Studio项目中配置SDK依赖。

1. 添加编译依赖。
   1. 打开应用级的build.gradle文件。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250723181116.27669764717182675893444386470178:50001231000000:2800:0F326631D1D4B69506E54F7548C4085CF151B111C05FF448D326F7B7666E610A.png)

   2. 在"com.huawei.ohos.hap" 插件的下一行添加如下配置。

      ```
      apply plugin: 'com.huawei.agconnect'
      ```

   3. 在"dependencies"中添加AppGallery Connect认证服务的编译依赖。

      ```
      dependencies {
          implementation "com.huawei.agconnect:agconnect-auth-harmony:1.5.1.300" 
      }
      ```

2. 打开DevEco Studio项目级"package.json"文件。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250723181116.52291873007956685163379855117838:50001231000000:2800:5559BCB1F94D81A7F70FF76969DD844C29C439075C1154F8832BC903F664C78B.png)

3. 在package.json文件的"dependencies"中里面添加SDK依赖。

   ```
   "dependencies": {
   	
           "@hw-agconnect/auth-harmony": "^1.2.0",
   	// 其他依赖
   	... ...
   }
   ```

4. 打开修改完的package.json文件，右上方出现"Sync Now"链接，点击"Sync Now"等待同步完成。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250723181116.41712576939225641769687733978704:50001231000000:2800:86CB5AC27F3C77E06A5946A2671068C621B4C1AB540649AA0FC49710640F592D.png)

#### 初始化AGC SDK

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250723181116.79003675563302384163436670280901:50001231000000:2800:7A9D6E3093B53F328CBF79D58C92B3572B70761B84778E7937D46BA1EC0B2ED1.png)  
建议您在AbilityPackage的onInitialize或者第一个启动的Ability的onStart方法中完成初始化。

初始化AGC SDK有两种情况：

* 如果您在下载配置文件时未选择"不包含密钥"，可采用默认配置初始化AGC SDK。

  ```
  //添加如下代码
  try {
      AGConnectInstance.initialize(getAbilityPackage());
  } catch (Exception e) {
      e.printStackTrace();
  }
  //TODO: 添加代码结束
  ```

* 如果您在下载配置文件时选择了"不包含密钥"，则需要自定义配置文件参数后初始化AGC SDK。  
  AGC SDK提供了[AGConnectOptionsBuilder](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agccore-agconnectoptionsbulider-harmonyos-0000001203925413)类来对agconnect-services.json文件中的参数进行配置，在下载配置文件时选择了"不包含密钥"，则agconnect-services.json文件中将不包含client_id、client_secret和api_key参数，您必须通过[AGConnectOptionsBuilder](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agccore-agconnectoptionsbulider-harmonyos-0000001203925413)类的接口在应用启动时将以上参数设置给AGC SDK。

  ```
  //添加如下代码
  try {
      AGConnectOptionsBuilder builder = new AGConnectOptionsBuilder();
      ResourceManager resourceManager = getResourceManager();
      // agconnect-services.json 文件路径
      RawFileEntry rawFileEntry =  resourceManager.getRawFileEntry("resources/rawfile/agconnect-services.json");
      Resource resource = rawFileEntry.openRawFile();
      builder.setInputStream(resource );
      // 如果您的json文件中不存在client_id、client_secret和api_key参数，需通过以下接口设置	
      builder.setClientId("your client_id ...");
      builder.setClientSecret("your client_secret ...");
      builder.setApiKey("your api_key ...");
      AGConnectInstance.initialize(getAbilityPackage(), builder);
  } catch (Exception e) {
      e.printStackTrace();
  }
  //TODO: 添加代码结束
  ```

  各参数的值可在"项目设置 \> 常规"页面中查询。点击参数后面的![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250723181116.11988922438658244002630394019033:50001231000000:2800:1DC58827E43087006490DC1C82D35FDF034E844016E27F35AE897D2AD65EA834.png)，可复制参数值。

  需配置的参数值和"常规"页面参数的对应关系如下：
  * client_id替换为"项目"栏中"Client ID"的值
  * client_secret替换为"项目"栏中"Client Secret"的值
  * api_key替换为"项目"栏中"API密钥（凭据）"的值
  * cp_id替换为"开发者"栏中"Developer ID"的值
  * product_id替换为"项目"栏中"项目ID"的值
  * app_id替换为"应用"栏中"APP ID"的值

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250723181116.86584109424541158365903159705753:50001231000000:2800:5F52798CA8ED343B0EBECA980FEC4CFDA4D579B8E291CB4CC3C071462A3B747E.png)  

#### 配置混淆脚本

开发者编译APP前需要配置不要混淆AppGallery Connect，避免功能异常。

1. 打开混淆配置文件。
2. 加入排除AppGallery Connect的混淆配置。  
   如果是Proguard混淆，配置如下：

   ```
   -ignorewarnings
   -keep class com.huawei.agconnect.**{*;}
   ```

   如果是Dexguard混淆，配置如下：

   ```
   -ignorewarnings
   -keep class com.huawei.agconnect.** {*;} 
   -keepresourcexmlelements ** 
   -keepresources */*
   ```

