---
name: document/cn/doc-references/ts-methods-timepicker-dialog-0000001333800589
title: 时间滑动选择器弹窗
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/ts-methods-timepicker-dialog-0000001333800589
source: portal
---

时间滑动选择器弹窗 以24小时的时间区间创建时间滑动选择器，展示在弹窗上。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172445.96964803890022837096386062114986:50001231000000:2800:DE87A5D73ECD1FD07C3A3AF5057D06374D12C3CEE25F5ECBAE1489374C8EF66F.png?needInitFileName=true?needInitFileName=true?needInitFileName=true) 该组件从API Version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 TimePickerDialog.showshow(options?: TimePickerDialogOptions) 定义时间滑动选择器弹窗并弹出。 **options参数** ： 参数名 | 参数类型 | 必填 | 默认值 | 参数描述  
---|---|---|---|---  
selected | Date | 否 | 当前系统时间 | 设置选中项的时间。  
useMilitaryTime | boolean | 否 | false | 展示时间是否为24小时制。  
onAccept | (value: [TimePickerResult](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ts-basic-components-timepicker-0000001281480698#ZH-CN_TOPIC_0000001281480698__timepickerresult对象说明)) => void | 否 | - | 点击弹窗中确定按钮时触发。  
onCancel | () => void | 否 | - | 点击弹窗中取消按钮时触发。  
onChange | (value: [TimePickerResult](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ts-basic-components-timepicker-0000001281480698#ZH-CN_TOPIC_0000001281480698__timepickerresult对象说明)) => void | 否 | - | 滑动选择器，当前选择项改变时触发。  
示例 [h2]时间滑动选择器（24小时制）示例
    
    // xxx.ets
    @Entry
    @Component
    struct TimePickerDialogExample01 {
      @State isUseMilitaryTime: boolean = true
    
      build() {
        Flex({direction: FlexDirection.Column, alignItems: ItemAlign.Center,
          justifyContent: FlexAlign.Center }) {
          Button("TimePickerDialog").onClick(() => {
            TimePickerDialog.show({
              useMilitaryTime: this.isUseMilitaryTime,
              onAccept: (value: TimePickerResult) => {
                console.info("TimePickerDialog:onAccept()" + JSON.stringify(value))
              },
              onCancel: () => {
                console.info("TimePickerDialog:onCancel()")
              },
              onChange: (value: TimePickerResult) => {
                console.info("TimePickerDialog:onChange()" + JSON.stringify(value))
              }
            })
          })
        }
      }
    }

[h2]时间滑动选择器（12小时制）示例
    
    // xxx.ets
    @Entry
    @Component
    struct TimePickerDialogExample02 {
      @State isUseMilitaryTime: boolean = false
    
      build() {
        Flex({direction: FlexDirection.Column, alignItems: ItemAlign.Center,
          justifyContent: FlexAlign.Center }) {
          Button("TimePickerDialog").onClick(() => {
            TimePickerDialog.show({
              useMilitaryTime: this.isUseMilitaryTime,
              onAccept: (value: TimePickerResult) => {
                console.info("TimePickerDialog:onAccept()" + JSON.stringify(value))
              },
              onCancel: () => {
                console.info("TimePickerDialog:onCancel()")
              },
              onChange: (value: TimePickerResult) => {
                console.info("TimePickerDialog:onChange()" + JSON.stringify(value))
              }
            })
          })
        }
      }
    }
