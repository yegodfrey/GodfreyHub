---
name: document/cn/HMSCore-Guides/android-permission-0000001056203546
title: 权限
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-permission-0000001056203546
source: portal
---

# 权限

权限是对配置的访问控制，在团队帐号中，只有团队帐号持有者和管理员具有管理权限，其他的团队成员则根据其团队角色拥有相应的操作权限。团队成员管理的相关信息参见[帐号管理](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-manageaccount-0000001099996700)。

由于每个团队只能设置一个帐号持有者，该帐号持有者为团队最高权限拥有者，因此请您预先制定一项策略决定由谁负责长期管理帐号，以及在团队成员角色变更时如何处理帐号所有权。

操作权限 | 说明  
---|---  
管理DTM配置 | 用户拥有开通DTM服务、关闭DTM服务和导出DTM操作记录的权限。  
查看DTM配置 | 用户可以查看应用对应的配置，并且可以浏览配置中的变量、条件、代码、分组和可视化埋点，但不能修改。  
编辑DTM配置 | 用户可以修改配置中的变量、条件、代码、分组和可视化埋点，也可以创建版本、提交审核，但不能发布版本。  
发布DTM配置 | 用户有权修改配置中的变量、条件、代码、分组和可视化埋点，也可以创建、审核、转移和发布版本，但不能创建和删除配置。  
  
操作权限 | 帐号持有者 | 管理员 | App管理员 | 运营 | 开发  
---|---|---|---|---|---  
管理DTM配置 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/goFUFCOJRNGBlHuZwD8qQA/zh-cn_image_0000001152041477.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=8E86BAB6EA4765EDB27C0C25E51778238E59DDA81EBFDBDAF3AB55B4C709F7A9) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/7-O45nWoQn-u8dFrq_2tUw/zh-cn_image_0000001105201580.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=1A5934351681E0727C5AA5502D961B5C03881AA1E044BBEA512A062839686F16) | - | - | -  
查看DTM配置 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/l9gaHr_eRoyKLDDhJX-4oQ/zh-cn_image_0000001076621880.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=C052AF1B0F18F9D255F606784E1D5C4CB6CEA9B76890F34CB3C3966442F2D457) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/_Y3NGGKLQGOEnaoRGT2Uag/zh-cn_image_0000001082945763.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=5A698FAC2949AB32B44A939DCBFDC0D3FDE56ACF962A3289094FAAB64E02D7B9) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/zQh_rbeBSaWzTbRd3UIGlQ/zh-cn_image_0000001077104756.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=68658F95BBCFA403FD45FAD4052941DF5A9590029AD6317B00D2E6CE139F9A03) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/r0x3skc-TeaJCq0hUzjIlA/zh-cn_image_0000001076944778.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=56F3F0D08AAC0DCBB2E3390F0F2B32ECD2287413A895310D84AFB4A19E8A037C) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/zlJkmXHCQ4uw6qVRdmFjsA/zh-cn_image_0000001076785170.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=1943FECBDADCAC6FBBD1D476B62D3A691A8F544C147BC11903920B10AA952FA8)  
编辑DTM配置 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/AGKXt8OASD6F85yZ1fLWzQ/zh-cn_image_0000001076656712.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=D10DD8B175572B877D7FB32B73FE5EBFE7584CFC594F0724BFE08917C0E7B110) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/TrTyY0AzTxG_rHDHgsSf7g/zh-cn_image_0000001082850105.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=7270F868EF059E205CB34C2AF03EA43D561D291F6766762558F82EA88BD6F620) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/R38j9AmpSSCJPibvPlsoeg/zh-cn_image_0000001083124961.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=1B6F15F1B0B1AFED915D4A2F17D1B1BD173F892CA646AF567F562A45025296C2) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/67/v3/iLLgDCcXTNGQdiaZXMr_fw/zh-cn_image_0000001083043727.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=C09F53097586326510FA79386D14EEDB76DE98FCC373E16B4D4691D17BB5153D) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/koE9wsGSSP2ozk2hc82Wmg/zh-cn_image_0000001082945761.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=DEE8BEFC5B3D9C4BA3C1768C628D83D677A19D9EB61DBC046639FFAE19A33A3D)  
发布DTM配置 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/ydbSP1uyQ8GyJ2VytWfYRw/zh-cn_image_0000001077175958.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=DEE29FE1CCE8D12FF82121A24AEE3937254743ED853940CC872ECF9ACF0A5518) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/QvTL8GXcTreSlKvCqUm3Kg/zh-cn_image_0000001076944776.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=007A64B6BEF7D15478736B01EBF6AE2600CE3B4A1DB92F2093A382ECC6520CBE) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/OrDn7D2qS5aO8RyPkNXJow/zh-cn_image_0000001076785168.png?HW-CC-KV=V1&HW-CC-Date=20261005T042950Z&HW-CC-Expire=86400&HW-CC-Sign=F4BF1626A902022B11FF516D87B50257D980560309FAE8337219C2770493106F) | - | -
