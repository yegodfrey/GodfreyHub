---
name: document/cn/guide/sftp_capability-0000001542757745
title: 使用SFTP方式完成远程与本地环境交互
uri: https://developer.huawei.com/consumer/cn/doc/guide/sftp_capability-0000001542757745
source: portal
---

# 使用SFTP方式完成远程与本地环境交互

DevEco Device Tool采用Windows+Ubuntu混合开发环境，提供一站式开发能力，降低了嵌入式开发的环境配置复杂度，提升了开发效率。但是在代码调试过程中，由于调测任务的特殊性，其本身需要占用大量资源，此时如果多位开发者共用一台调测环境，则会导致调测效率降低，影响开发进度。

针对此种情况，从3.1 Release版本开始，DevEco Device Tool提供本地调测能力，允许开发者通过SFTP方式将Ubuntu环境上的待调测代码和调测文件同步到Windows环境中进行调试，提高调测效率，释放Ubuntu环境资源。此外，还可以将调测修改后的文件同步回远程Ubuntu环境中编译。

#### 将远程目标文件同步到本地

     1. 在菜单栏中单击“Remote Development”，打开SFTP配置界面。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240930102424.78073419527176960195096856080249:50001231000000:2800:8F91880352CD70E31CAD100740EC5D0F4A3CC2DA06057796EE25A288DC097FC5.png?needInitFileName=true?needInitFileName=true)

     2. 按照提示信息输入Ubuntu环境的IP地址:端口号、用户名和密码，单击“Next”。

打开SFTP远程目录映射配置界面。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240930102424.20737397446236494161808733896645:50001231000000:2800:9D10C4D7E41D1217FCD6ABA478E3E6CD0E9A8D7AAA4E3419EA23380D47D0330F.png?needInitFileName=true?needInitFileName=true)

     3. 设置同步内容。

        1. 勾选同步类型。
           * Pull soure code：同步内容为待调测的源码目录。
           * Pull the remote target file：同步内容为待调测的ELF文件。
        2. 选择目标内容的本地存放路径，以及目标内容当前路径。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240930102424.61048745805590528207961901373908:50001231000000:2800:338875208059EC90D61754ABCB3E7AF7B205AF41E0F1314D6E770A3BBB56BE41.png?needInitFileName=true?needInitFileName=true)

同步类型为“Pull source code”时，可单击“Add a Subdirectory”同时选择多个目标内容的路径。

     4. 单击“Save”。

在控制台查看打印信息，确认同步成功。

#### 同步变更代码

在将远程源码目录同步到Windows环境后，可通过如下方式将修改后的文件重新同步回远程Ubuntu环境进行编译，亦可以将对应文件再次同步到Windows。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240930102424.51241515704424245434550045482469:50001231000000:2800:70DDCDFB1312539DF4125971F91B5E8C1229061FE5D98CC87DC85E1D4490ED68.png?needInitFileName=true?needInitFileName=true)

当前仅支持文件内容的修改同步，请保持两端源码目录结构和文件名称的一致性。

     1. 在Windows环境中打开从Ubuntu环境中同步过来的文件或文件夹。
     2. 右键单击文件或目录名称，在菜单中单击要进行的操作。

        * Sftp Download Code：从远程Ubuntu环境中同步文件或目录到Windows环境中。
        * Sftp Upload Code：将Windows侧的文件或目录同步到远程Ubuntu环境中。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240930102424.20943494718655985640677739130953:50001231000000:2800:3F890B6414E8FF4F6FDF09CB19FE417C83CCC4074491AEACE2414531C9911516.png?needInitFileName=true?needInitFileName=true)
