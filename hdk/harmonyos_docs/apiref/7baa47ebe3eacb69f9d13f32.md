---
name: document/cn/apiref/ohos_1_1uitimepicker_1_1selectedlistener-0000001054479591
title: OHOS::UITimePicker::SelectedListener
uri: https://developer.huawei.com/consumer/cn/doc/apiref/ohos_1_1uitimepicker_1_1selectedlistener-0000001054479591
source: portal
---

# OHOS::UITimePicker::SelectedListener  
  
#### Overview

**Related Modules:**

[UI_Components](https://device.harmonyos.com/cn/docs/develop/apiref/ui__components-0000001128996985)

**Description:**

Defines the listener used by the time picker. This listener is triggered when an item is selected after sliding stops. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Public Member Functions

Function | Description  
---|---  
[SelectedListener](https://device.harmonyos.com/cn/docs/develop/apiref/ui__components-0000001128996985#ZH-CN_TOPIC_0000001128996985__gaf68f896c9d4e4c14a56c201d8e4b3db1) () |  A constructor used to create a **[SelectedListener](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1uitimepicker_1_1selectedlistener-0000001054479591)** instance.   
[~SelectedListener](https://device.harmonyos.com/cn/docs/develop/apiref/ui__components-0000001128996985#ZH-CN_TOPIC_0000001128996985__ga59db1409429fa0c598e3cf70a8ec2738) () |  A destructor used to delete the **[SelectedListener](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1uitimepicker_1_1selectedlistener-0000001054479591)** instance.   
[OnTimePickerStoped](https://device.harmonyos.com/cn/docs/develop/apiref/ui__components-0000001128996985#ZH-CN_TOPIC_0000001128996985__ga525c9a0f0c5b51e0086a53dc5b0b5301) ([UITimePicker](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1uitimepicker-0000001054879560) &picker) | virtual void  Called when an item is selected after sliding stops. This function is implemented by applications.   
[operator new](https://device.harmonyos.com/cn/docs/develop/apiref/ui__utils-0000001128759817#ZH-CN_TOPIC_0000001128759817__ga4854963aa969ee20a6cd174a70f5cd23) (size_t size) | void *  Overrides the **new** function.   
[operator delete](https://device.harmonyos.com/cn/docs/develop/apiref/ui__utils-0000001128759817#ZH-CN_TOPIC_0000001128759817__gadf1997a0f56ac2b220e7f0f8e8e0a6ef) (void *p) | void  Overrides the **delete** function. 
