---
name: document/cn/Tools-Guides/ide-build-quickapp-0000001419681933
title: 构建快应用
uri: https://developer.huawei.com/consumer/cn/doc/Tools-Guides/ide-build-quickapp-0000001419681933
---

# 构建快应用

## debug包

菜单选择"构建 > 构建快应用"，打包debug版本rpk。在"输出"窗口可以查看构建结果。

构建成功，则在"输出"窗口打印COMPILE RESULT:SUCCESS，构建包在工程下的dist文件夹中。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100017.82898875405065132446532413908479:50001231000000:2800:5085B33CEBB18E34ED9C98E6066773851D68EC70DB1EF690DDAE036E8D5158AA.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

构建失败，则在"输出"窗口以红色文字打印COMPILE RESULT:FAIL以及错误个数和错误描述。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100017.11364891912155556753007988768867:50001231000000:2800:A7C0A3D026B343DE7124060A2D0415D5827E9455DD5ABF5F7077E82EF90CC41A.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

在"问题"窗口查看error和warning具体所在行。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100017.57054792960394290029837578409289:50001231000000:2800:DABC1A97CCE4ED27A8355C3A5DE305C8C2D4C0920E40E9596ACA4A38893746F2.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

## release包

菜单选择"构建 > 打包正式版本"，打包release版本rpk。
> 注意
>
> 若工程目录中没有签名文件，IDE将使用编译器中集成的debug签名，此签名为公开签名，无法保证安全性，请勿使用在正式版本中。

* 如果没有签名证书，则会先创建签名证书。
* 如果有签名证书，点击打包正式版本，将出现签名界面，可对版本名和版本号进行编辑。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230510100017.58469027799465177232616632333554:50001231000000:2800:5957A6C24863ED72C70716087E1FFF3CFD091E86BC147C6BF1AC484501813F7A.gif?needInitFileName=true?needInitFileName=true?needInitFileName=true)

## 相关链接

### FAQ

[如何使用命令打包快应用rpk？](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-faq-0000001129279483#section15861103134818)
