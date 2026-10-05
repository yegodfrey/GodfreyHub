---
name: document/cn/HiCar-Guides/change-desktop-category-0000002331962406
title: 更改当前要显示的桌面类别
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/change-desktop-category-0000002331962406
---

# 更改当前要显示的桌面类别

## 场景说明

用户在车机设置界面改变当前车机类别后，将改变的车机类别数据存到车机系统中，再调用此接口更新sdk中的当前车机类别。然后车机需自动进行断连后重连，车机便可自动切到用户当前选择的桌面类别。

## 接口说明

当前接口包含一个参数currentDesktop：

* currentDesktop：值为1/2/3，1代表智慧桌面、2代表融合桌面、3代表手机桌面。表示更新当前桌面类别。

## 开发步骤

1. 更新当前桌面。

   ```screen
   // 切换显示当前桌面类别
   public void toggleCurrentDesktop(int currentDesktop) {
       mHiCarAdapter.updateCurrentDesktop(currentDesktop);
       // 执行断连并自动重连逻辑
       ......
   }
   ```

