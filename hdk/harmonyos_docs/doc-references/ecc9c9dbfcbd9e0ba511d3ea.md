---
name: document/cn/doc-references/ts-basic-components-checkbox-0000001281361102
title: Checkbox
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/ts-basic-components-checkbox-0000001281361102
source: portal
---

Checkbox 多选框组件，通常用于某选项的打开或关闭。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172419.53207807807328206602694808407572:50001231000000:2800:4524D5DD82A543801E177BE9E1F0A19A9A20FB782935FA5DED83EADCC70492C6.png?needInitFileName=true?needInitFileName=true?needInitFileName=true) 该组件从API Version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 子组件无 接口Checkbox( options?: {name?: string, group?: string} ) **参数：** 参数名 | 参数类型 | 必填 | 默认值 | 参数描述  
---|---|---|---|---  
name | string | 否 | - | 多选框名称。  
group | string | 否 | - | 多选框的群组名称。  
属性 名称 | 参数类型 | 默认值 | 描述  
---|---|---|---  
select | boolean | false | 设置多选框是否选中。  
selectedColor | [ResourceColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ts-types-0000001281480778#ZH-CN_TOPIC_0000001281480778__resourcecolor8) | - | 设置多选框选中状态颜色。  
事件 名称 | 功能描述  
---|---  
onChange(callback: (value: boolean) => void) | 当选中状态发生变化时，触发该回调。 \- value为true时，表示已选中。 \- value为false时，表示未选中。  
示例
    
    // xxx.ets
    @Entry
    @Component
    struct CheckboxExample {
    
      build() {
        Row() {
          Checkbox({name: 'checkbox1',  group: 'checkboxGroup'})
            .select(true)
            .selectedColor(0xed6f21)
            .onChange((value: boolean) => {
              console.info('Checkbox1 change is'+ value)
            })
          Checkbox({name: 'checkbox2',  group: 'checkboxGroup'})
            .select(false)
            .selectedColor(0x39a2db)
            .onChange((value: boolean) => {
              console.info('Checkbox2 change is'+ value)
            })
        }
      }
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172419.17290485122015471100137967611415:50001231000000:2800:F12DAC6A08A0A5DD6003E2AAACD8B69AE508DD3FC85A89A6B51855B249F1B7F1.gif?needInitFileName=true?needInitFileName=true?needInitFileName=true)
