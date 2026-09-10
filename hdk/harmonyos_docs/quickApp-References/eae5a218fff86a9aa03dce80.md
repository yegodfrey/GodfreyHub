---
name: document/cn/quickApp-References/quickgame-api-vibrator-0000001083746130
title: 震动
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickgame-api-vibrator-0000001083746130
---

# 震动

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260121135255.82475493150644386689573040671551:50001231000000:2800:04C0E76266BBDFB0A941EF51CE4C79CD2ADFD9F38FD19175A2C55F3256DE5BB6.png)  
从1078版本开始，接口前缀由hbs调整为qg，原hbs仍支持。  

#### 接口定义

|接口|描述|
|:-------------------------------------------------------|:-------------------|
|[qg.vibrateShort(Object object)](#section19173334114015)|使手机发生较短时间的振动（15ms）。|
|[qg.vibrateLong(Object object)](#section7538932164116)|使手机发生较长时间的振动（400ms）。|

#### qg.vibrateShort(Object object)

* 描述 使手机发生较短时间的振动（15 ms）。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:--------------------|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

* 示例代码

  ```
  qg.vibrateShort({
          success : function () {
                  console.log("vibrateShort success");
          },
          fail:function(){
                  console.log("vibrateShort fail");
          },
          complete:function() {
                  console.log("vibrateShort complete");
          }
  });
  ```

#### qg.vibrateLong(Object object)

* 描述 使手机发生较长时间的振动（400 ms）。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:--------------------|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

* 示例代码

  ```
  qg.vibrateLong({
          success : function () {
                  console.log("vibrateLong success" );
          },
          fail:function(){
                  console.log("vibrateLong fail");
          },
          complete:function() {
                  console.log("vibrateLong complete");
          }
  });
  ```

