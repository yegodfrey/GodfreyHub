---
name: document/cn/doc-references/ts-container-gridcontainer-0000001281361130
title: GridContainer
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/ts-container-gridcontainer-0000001281361130
source: portal
---

GridContainer 纵向排布栅格布局容器，仅在栅格布局场景中使用。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172428.29203744718858409431155044896746:50001231000000:2800:05F7DD3D30D2DE4AEEBE86CE47993CFFCC9292330BF341D3CD969C44B9410FD8.png?needInitFileName=true?needInitFileName=true?needInitFileName=true) 该组件从API Version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 子组件可以包含子组件。 接口GridContainer(value?: { columns?: number | auto, sizeType?: SizeType, gutter?: string|number, margin?: string|number}) **参数：** 参数名 | 类型 | 必填 | 说明  
---|---|---|---  
columns | number | auto | 否 | 设置当前布局总列数。 默认值：auto  
sizeType | SizeType | 否 | 选用设备宽度类型。 默认值：SizeType.Auto  
gutter | Length | 否 | 栅格布局列间距。  
margin | Length | 否 | 栅格布局两侧间距。  
SizeType枚举说明 名称 | 描述  
---|---  
XS | 最小宽度类型设备。  
SM | 小宽度类型设备。  
MD | 中等宽度类型设备。  
LG | 大宽度类型设备。  
Auto | 根据设备类型进行选择。  
属性支持通用属性和Column组件的[属性](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ts-container-column-0000001333641085#ZH-CN_TOPIC_0000001333641085__属性)。 事件支持通用事件。 示例
    
    // xxx.ets
    @Entry
    @Component
    struct GridContainerExample {
      @State sizeType: SizeType = SizeType.XS
    
      build() {
        Column({ space: 5 }) {
          GridContainer({ columns: 12, sizeType: this.sizeType, gutter: 10, margin: 20 }) {
            Row() {
              Text('1')
                .useSizeType({
                  xs: { span: 6, offset: 0 },
                  sm: { span: 2, offset: 0 },
                  md: { span: 2, offset: 0 },
                  lg: { span: 2, offset: 0 }
                })
                .height(50).backgroundColor(0x4682B4).textAlign(TextAlign.Center)
              Text('2')
                .useSizeType({
                  xs: { span: 2, offset: 6 },
                  sm: { span: 6, offset: 2 },
                  md: { span: 2, offset: 2 },
                  lg: { span: 2, offset: 2 }
                })
                .height(50).backgroundColor(0x00BFFF).textAlign(TextAlign.Center)
              Text('3')
                .useSizeType({
                  xs: { span: 2, offset: 8 },
                  sm: { span: 2, offset: 8 },
                  md: { span: 6, offset: 4 },
                  lg: { span: 2, offset: 4 }
                })
                .height(50).backgroundColor(0x4682B4).textAlign(TextAlign.Center)
              Text('4')
                .useSizeType({
                  xs: { span: 2, offset: 10 },
                  sm: { span: 2, offset: 10 },
                  md: { span: 2, offset: 10 },
                  lg: { span: 6, offset: 6 }
                })
                .height(50).backgroundColor(0x00BFFF).textAlign(TextAlign.Center)
            }
          }.width('90%')
    
          Text('Click Simulate to change the device width').fontSize(9).width('90%').fontColor(0xCCCCCC)
          Row() {
            Button('XS')
              .onClick(() => {
                this.sizeType = SizeType.XS
              }).backgroundColor(0x317aff)
            Button('SM')
              .onClick(() => {
                this.sizeType = SizeType.SM
              }).backgroundColor(0x317aff)
            Button('MD')
              .onClick(() => {
                this.sizeType = SizeType.MD
              }).backgroundColor(0x317aff)
            Button('LG')
              .onClick(() => {
                this.sizeType = SizeType.LG
              }).backgroundColor(0x317aff)
          }
        }.width('100%').margin({ top: 5 })
      }
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172428.16061853954908703370387414635574:50001231000000:2800:5403DD7A557EFE90FD71E68288766E066D2937B5E00088AE9A9B3E6D21CBCDBB.gif?needInitFileName=true?needInitFileName=true?needInitFileName=true)
