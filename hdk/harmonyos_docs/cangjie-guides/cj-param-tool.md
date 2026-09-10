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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/dKHeDHuKRzGD73Nep-XM2A/zh-cn_image_0000002743077825.png?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=8B9BE92D8EFFC196859B1046D755E01F9164AEC16FF74F8A1B6FD32345603421)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/nnI14fesRL2EvDHQEnz5lg/zh-cn_image_0000002713558864.png?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=4BCC6E2484274EFA6F06E691B2FA57108D1116EF97562C02692E6715E26342BF)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/MZK17DviRJyCpqbgXYVobw/zh-cn_image_0000002743197777.png?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=BFCE7A087BA31103CB40B925B507C10A2AC75AAA7ABA7BD2EF46083A027A8943)




#### 获取系统参数的值

  * 获取指定name系统参数的值，命令格式如下：
        
        param get [name]

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/k8k0ZEFnSait58cBVacy-Q/zh-cn_image_0000002713398896.png?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=B32D541CB2DB7ADA6CD240530F26209E122B2FBF2FFBABDD12DE5183409529D6)




#### 设置系统参数的值

  * 设置指定name系统参数的值为value，命令格式如下：
        
        param set name value

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/wK2vURDxQ4ebPstBMTmJJg/zh-cn_image_0000002743077827.png?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=B6CEB6CB1DBBFEB779BD50A99DF65D119E57678A7F58D0093CD9C41A5A2A7FEE)




#### 等待系统参数值匹配

  * 同步等待指定name系统参数与指定值value匹配，命令格式如下：
        
        param wait name [value] [timeout]

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/4hH3CFynT6yOVpJtp0Jsmg/zh-cn_image_0000002713558866.png?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=8F30654437E1FF6C2604E19987526CDAFAFDEF3D5A0B7D651C642EAF7B442556)




#### 保存persist(可持久化)参数

  * 保存persist(可持久化)参数到工作空间，命令格式如下：
        
        param save

**示例：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/LtWnmoCyRoKfOnMPyieojA/zh-cn_image_0000002743197779.png?HW-CC-KV=V1&HW-CC-Date=20260908T090133Z&HW-CC-Expire=86400&HW-CC-Sign=CF7F5B83B388AFF8A91BFE12DC0F3FA82E8578991521610849FCB96165F005D6)



