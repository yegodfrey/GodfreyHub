---
name: document/cn/Tools-Guides/publish-to-agc-0000001053822717
title: Publish to AppGallery Connect
uri: https://developer.huawei.com/consumer/cn/doc/Tools-Guides/publish-to-agc-0000001053822717
---

# Publish to AppGallery Connect

您的应用程序开发、调试完成后，可以直接通过HMS Core提供的Publish to AppGallery Connect功能，将您的应用程序APK文件发布到华为应用市场。

1. 在HMS菜单中，点击"Publish to AppGallery Connect"。
2. 选择团队名称和要发布的APK文件（最大不超过1GB），点击"Upload"完成上传。  
   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174823.44554641430393784643824174822173:50001231000000:2800:CC18B3E86B6F58E3938E2AAD70B1805FB1C1F9D2EBDD2741FB66EBE45894220E.png?needInitFileName=true?needInitFileName=true)  
   上传APK文件会有如下两个检验，如有报错，请修改后重新上传。
   * APK文件的格式必须是release。生成方法请参见[如何在项目工程中生成release.apk文件](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/faq-0000001050061059#section9273037134510)。
   * 获取SHA256证书指纹且已经配置到AGC的应用中。操作步骤：在cmd中输入以下命令来读取APK文件的信息值，然后从信息值里获取SHA256证书指纹，再将SHA256证书指纹填写到对应的应用中。

     ```
     >keytool -printcert -jarfile 工程目录下的app-release.apk路径
     ```

     "工程目录下的app-release.apk路径"请根据实际路径进行替换。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174823.02172285846891585104694822694013:50001231000000:2800:631501B785141A41AAE1A7F5C84E2BFF8DBF6275FD51199D587395EEAC882960.png?needInitFileName=true?needInitFileName=true "点击放大")
3. 上传完成后，点击"RELEASE"，进入"应用上架 \> 准备提交"页面。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174823.20804763329421868303745332792873:50001231000000:2800:ED05EE7CF8BE5CC6B4566153F3841D2FBC6CCECF06D9892F280E585601A74CA5.png?needInitFileName=true?needInitFileName=true "点击放大")
4. 填写应用上架的相关信息并提交审核。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230320174823.99937653735913519051118774404053:50001231000000:2800:D90A808BA317DC496B2CAA58A8B67CEA09AAF498F31CC9C03989C3DC59D119E1.png?needInitFileName=true?needInitFileName=true "点击放大")
