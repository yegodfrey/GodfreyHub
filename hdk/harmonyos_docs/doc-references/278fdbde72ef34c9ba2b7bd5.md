---
name: document/cn/doc-references/ts-container-column-0000001333641085
title: Column
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/ts-container-column-0000001333641085
source: portal
---

Column 沿垂直方向布局的容器。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172427.49585169133926432176613151811566:50001231000000:2800:6E59CE19E130F180A3FF047C80247CE3DF1213269282C2BFACAF8767ABB584CA.png?needInitFileName=true?needInitFileName=true?needInitFileName=true) 该组件从API Version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 子组件可以包含子组件。 接口Column(value?:{space?: string | number}) **参数：** 参数名 | 参数类型 | 必填 | 默认值 | 参数描述  
---|---|---|---|---  
space | string|number | 否 | 0 | 纵向布局元素间距。  
属性 名称 | 参数类型 | 默认值 | 描述  
---|---|---|---  
alignItems | [HorizontalAlign](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ts-appendix-enums-0000001281201130#ZH-CN_TOPIC_0000001281201130__horizontalalign) | HorizontalAlign.Center | 设置子组件在水平方向上的对齐格式。  
justifyContent8+ | [FlexAlign](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ts-appendix-enums-0000001281201130#ZH-CN_TOPIC_0000001281201130__flexalign) | FlexAlign.Start | 设置子组件在垂直方向上的对齐格式。  
示例
    
    // xxx.ets
    @Entry
    @Component
    struct ColumnExample {
      build() {
        Column() {
            Text('space').fontSize(9).fontColor(0xCCCCCC).width('90%')
            Column({ space: 5 }) {
              Column().width('100%').height(30).backgroundColor(0xAFEEEE)
              Column().width('100%').height(30).backgroundColor(0x00FFFF)
            }.width('90%').height(100).border({ width: 1 })
    
            Text('alignItems(Start)').fontSize(9).fontColor(0xCCCCCC).width('90%')
            Column() {
              Column().width('50%').height(30).backgroundColor(0xAFEEEE)
              Column().width('50%').height(30).backgroundColor(0x00FFFF)
            }.alignItems(HorizontalAlign.Start).width('90%').border({ width: 1 })
    
            Text('alignItems(End)').fontSize(9).fontColor(0xCCCCCC).width('90%')
            Column() {
              Column().width('50%').height(30).backgroundColor(0xAFEEEE)
              Column().width('50%').height(30).backgroundColor(0x00FFFF)
            }.alignItems(HorizontalAlign.End).width('90%').border({ width: 1 })
    
            Text('justifyContent(Center)').fontSize(9).fontColor(0xCCCCCC).width('90%')
            Column() {
              Column().width('30%').height(30).backgroundColor(0xAFEEEE)
              Column().width('30%').height(30).backgroundColor(0x00FFFF)
            }.height('15%').border({ width: 1 }).justifyContent(FlexAlign.Center)
    
            Text('justifyContent(End)').fontSize(9).fontColor(0xCCCCCC).width('90%')
            Column() {
              Column().width('30%').height(30).backgroundColor(0xAFEEEE)
              Column().width('30%').height(30).backgroundColor(0x00FFFF)
            }.height('15%').border({ width: 1 }).justifyContent(FlexAlign.End)
        }.width('100%').padding({ top: 5 })
      }
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172427.68981443670949010947065546392616:50001231000000:2800:BE8AFF2A1EFD766E20347FE2768F85D447BDCA82E65255FB4BAD80A20B488759.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)
