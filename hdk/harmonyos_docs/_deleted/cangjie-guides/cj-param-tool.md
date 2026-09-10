---
name: cangjie-guides/cj-param-tool
title: param工具
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-param-tool
nodePath: 系统 / 调测调优 / 调试命令 / param工具
---

# param工具

param是为开发人员提供的系统参数操作工具，该工具只支持标准系统。

#### 环境要求

  * 获取hdc工具，执行hdc shell。
  * 正常连接设备。



#### param工具命令列表

选项 | 说明  
---|---  
-h | 获取param支持的命令。  
ls [-r] [name] | 显示匹配name的系统参数信息。带"-r"则根据参数权限获取信息，不带"-r"则直接获取参数信息。  
get [name] | 获取指定name系统参数的值；若不指定任何name，则返回所有系统参数。  
set name value | 设置指定name系统参数的值为value。  
wait name [value] [timeout] | 同步等待指定name系统参数与指定值value匹配。value支持模糊匹配，如"*"表示任何值，"val*"表示匹配以val开头的值。timeout为等待时间（单位：s），不设置则默认为30s。  
save | 保存persist参数到工作空间。  
  
#### 获取param支持的命令

  * 获取param支持的命令，命令格式如下：
        
        param -h




#### 获取系统参数信息

  * 显示匹配name的系统参数信息，命令格式如下：
        
        param ls [-r] [name]

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c/v3/tfcPMm0qR4iuH8Luwg8Z4g/zh-cn_image_0000002701659586.png?HW-CC-KV=V1&HW-CC-Date=20260903T111617Z&HW-CC-Expire=86400&HW-CC-Sign=353582F78B254549DAF7CD59F7419E859657BDB8DB4016FDD94689B07975377B)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/CaEaVOXXSTqx-i1RJTPG2w/zh-cn_image_0000002731378801.png?HW-CC-KV=V1&HW-CC-Date=20260903T111617Z&HW-CC-Expire=86400&HW-CC-Sign=A51D8893D1777CE4F3B52B66ECACF7B41FDEB942FF5E7DE3280CF7A18DA9FAEA)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/kn8euya1Q0ajbc6RV3GKvA/zh-cn_image_0000002701819498.png?HW-CC-KV=V1&HW-CC-Date=20260903T111617Z&HW-CC-Expire=86400&HW-CC-Sign=C0582C0CBFEF391F2563CB577482A26D90D9E74FA41BD529881F1907BBC4C3A0)




#### 获取系统参数的值

  * 获取指定name系统参数的值，命令格式如下：
        
        param get [name]

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/7eLBy2iHS4yXnSkKOpkV4A/zh-cn_image_0000002731538779.png?HW-CC-KV=V1&HW-CC-Date=20260903T111617Z&HW-CC-Expire=86400&HW-CC-Sign=084B5FF548CC64CFF568B4DE0417AD144CC93495D6B34E9F3DB51A7257DAEE0A)




#### 设置系统参数的值

  * 设置指定name系统参数的值为value，命令格式如下：
        
        param set name value

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/1WDkH6VGR7KBwL6yz-99fw/zh-cn_image_0000002701659588.png?HW-CC-KV=V1&HW-CC-Date=20260903T111617Z&HW-CC-Expire=86400&HW-CC-Sign=8AE15D89F245BE6B3D830544DC0D0A72AF64928A4795BFC4A3A91D3830045260)




#### 等待系统参数值匹配

  * 同步等待指定name系统参数与指定值value匹配，命令格式如下：
        
        param wait name [value] [timeout]

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/e5D1bIaLSlmwD6w3lS0QKw/zh-cn_image_0000002731378803.png?HW-CC-KV=V1&HW-CC-Date=20260903T111617Z&HW-CC-Expire=86400&HW-CC-Sign=9A2AE893646A55B3D7ADEDE2308194B582C85816D1ED4A72D6B95211C14645FF)




#### 保存persist(可持久化)参数

  * 保存persist(可持久化)参数到工作空间，命令格式如下：
        
        param save

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/EhyONQ93QZ-TKz1dgii2MA/zh-cn_image_0000002701819500.png?HW-CC-KV=V1&HW-CC-Date=20260903T111617Z&HW-CC-Expire=86400&HW-CC-Sign=32C1DD7945C4DAA27D79FBD1939B74BDA3B7E2CA5C2E1BB0145F0A90EF5F8DA7)



