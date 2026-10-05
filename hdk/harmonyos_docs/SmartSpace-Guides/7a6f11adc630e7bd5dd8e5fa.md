---
name: document/cn/SmartSpace-Guides/install-screen-0000001504516317
title: 安装中控屏
uri: https://developer.huawei.com/consumer/cn/doc/SmartSpace-Guides/install-screen-0000001504516317
---

# 安装中控屏

中控屏可以通过扣在背夹上使用，也可以扣在华为智能主机SE上进行使用；

1. **中控屏扣在背夹上**

   先直接把中控屏吸附上去，背夹后的两个DC口没有区别，都用于供电；使用12V电源线供电

   另外一个Type C口用于安装插件调试

   注意：切记不要先给背夹上电后，再安装中控屏
   > 注意
   >
   > 背夹使用的方式请参考[《背夹使用注意事项》](https://developer.huawei.com/consumer/cn/doc/development/SmartSpace-Guides/precautions-for-back-clip-0000001504202469)
2. **中控屏扣在华为智能主机SE上**
   * 【组网】
     * 轻主机室内网口连接家庭网络路由器。
   * 【操作步骤】
     1. 轻主机上电，并在家庭网口插入网线
     2. 手机安装全屋易维App，并连接轻主机家庭网口的路由器WIFI 说明
        >
        > 该步骤需要使用到华为全屋易维App，如右图所示： ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230525091406.24818798996983939920675055441371:50001231000000:2800:0E9E435EFE9B7A4490F9D0BE199A66F7653CF48446BE18EAB4E92029A953047A.png?needInitFileName=true?needInitFileName=true "点击放大")，由于该App暂未对外，故优先找华为全屋技术服务的同事获取。若未能华为全屋技术服务同事，请联系华为全屋技术开放接口人。
     3. 先登录全屋易维App（登陆账号请单独联系华为全屋技术开放接口人进行申请）
     4. 登录App成功后，再登录轻主机，登录轻主机的方法：点击首页"登录"（如图一），进入自动"扫描登录设备"界面（如图二），App会自动扫描当前网络下的轻主机（查询成功，会自动填充主机IP（如图三），若查询失败，建议优先排查当前手机连接的wifi是否跟轻主机为同一个，若排查无问题，则可以手动添加登录设备，查询轻主机的IP，在装维App界面选择登录主机SE，并输入IP）然后按照手机指引，登录即可。若手机进入设备界面，如下界面（如图四）：则代表登录成功； ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230525091406.66466438282964404275026301578446:50001231000000:2800:D36535FD227E31256221F60E7E1D06AD8F28BDEF1B8AAB1F87A079F95479397E.png?needInitFileName=true?needInitFileName=true "点击放大") ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230525091407.50317815433339863196923582552990:50001231000000:2800:6551D05684C91D91C7A7594F756FC2FD33804E1D3E7F187F9F8F01814D987562.png?needInitFileName=true?needInitFileName=true "点击放大") ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230525091407.11182697066942742882746535010879:50001231000000:2800:00DCF3239CE540EADD02E88C7C2EB462A1A178AA976ABC58DCAF8462091CBC65.jpg?needInitFileName=true?needInitFileName=true "点击放大") ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230525091407.49550031670047194905104391074112:50001231000000:2800:785E4F910C79CCB9694494BFFE8F616326D517BE191CBEB4DBC94A691B42686A.png?needInitFileName=true?needInitFileName=true "点击放大")

     5. 进行中控屏和轻主机绑定，**轻主机的家庭网口需要连接到路由器，先保证全屋易维App已经登陆轻主机，随后将中控屏扣在轻主机上，等待中控屏的IP正确分配后** ，点击装维上图右上角的"+"号，app会自动扫描到中控屏，点击"连接"，待根据手机上的指引一步一步已完成即可，待手机提示成功，即完成中控屏添加，**至此中控屏和轻主机已经进行了绑定** ；如下图所示，会出现中控屏的卡片： 说明
        >
        > 若多次都无法扫描到智能中控屏，请检查中控屏是否已被其他轻主机绑定，如已被绑定则无法重复添加，需先在另一个主机上删除该中控屏后再次扫描；如仍无法解决，请检查是否在中控屏不在线时通过装维删除该设备，如果是，请将中控屏恢复出厂后重新添加

        ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230525091407.97342399836698854128445380343271:50001231000000:2800:742C3470E48E8993500E442EEE7CB746CFCC3FDEEEE4289B6F590BFAFD92988B.png?needInitFileName=true?needInitFileName=true "点击放大")
