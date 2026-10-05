---
name: document/cn/DevicePartner-Guides/easyview-compatibility-0000002628684632
title: 易维兼容
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-Guides/easyview-compatibility-0000002628684632
---

# 易维兼容

判断是否易维环境: 根据接口isAiInstall返回值判断。

```
isAiAppInstall({ commit, dispatch }) {
    tryFn(() => {
      let result = window.hilink && window.hilink.isAiInstall();
      console.hLog('isAiAppMode', result);
      commit('UPDATE_STATE', { name: 'isAiAppMode', value: result });
    }, 'isAiAppMode');
  }
```

1）如果是易维环境，易维不支持云侧接口，所以涉及到云侧的页面都不支持显示详情，可点击时候提示"易维不支持该功能"。

2）如果是易维添加的设备同步到智慧生活不能删除：

* 使用原生设置页，无特殊处理逻辑。
* 使用H5设置页，则要隐藏删除入口，易维添加的设备在设备快照里会返回字段setupType=1；参照 src -\> views -\> Settings.vue：

  ```
   // 判断是否易维添加的设备
      if (this.isAiAppMode && this.setupType === 1) {
        return false;
      }
      else if (this.role === 'owner') {
        return true
      } else {
        return false
      }
    }
  ```

