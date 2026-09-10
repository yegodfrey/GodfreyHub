---
name: document/cn/AppGallery-connect-Guides/gameobe-dismissroom-js-0000001239365776
title: 解散房间
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gameobe-dismissroom-js-0000001239365776
---

# 解散房间

创建房间后，如需销毁房间，可以将房间解散。  

#### 前提条件

玩家为房主身份。  

#### 开发步骤

1. 如需解散房间，调用[Client.dismissRoom](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gameobe-client-js-0000001237790585#section13581121510355)方法即可，当前仅支持房主解散房间。

   ```
   global.client.dismissRoom().then((client) => {
     // 解散房间成功
   }).catch((e) => {
     // 解散房间失败
   });
   ```

2. 当房主解散房间时，房间内的其他玩家将通过[Room.onDismiss](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gameobe-room-js-0000001192950624#section98426481967)方法收到事件通知并自动退出房间。

   ```
   global.room.onDismiss(() => {
     // 房间解散成功，做游戏相关逻辑
   });
   ```

3. 当房间被房主解散时，原房间内其他玩家可调用[Room.removeAllListeners();](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gameobe-room-js-0000001192950624#section163041724173911)移除所有事件的监听。

   ```
   global.room.removeAllListeners();
   ```

