---
name: document/cn/doc-guides/ui-ts-layout-grid-0000001385657608
title: 网格布局
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ui-ts-layout-grid-0000001385657608
source: portal
---

# 网格布局

网格布局（GridLayout）是自适应布局中一种重要的布局，具备较强的页面均分能力，子组件占比控制能力。通过[Grid](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ts-container-grid-0000001281480710)容器组件和子组件[GridItem](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ts-container-griditem-0000001333720969)实现，Grid用于设置网格布局相关参数，GridItem定义子组件相关特征。优势如下：

     1. 容器组件尺寸发生变化时，所有子组件以及间距等比例调整，实现布局的自适应能力。 
     2. 支持自定义网格布局行数和列数，以及每行每列尺寸占比。 
     3. 支持设置网格布局中子组件的行列间距。 
     4. 支持设置子组件横跨几行或者几列。 

#### 容器组件Grid设置

#### [h2]行列数量占比

通过Grid的组件的columnsTemplate和rowTemplate属性设置网格布局行列数量与尺寸占比。

下面以columnsTemplate为例，介绍该属性的设置，该属性值是一个由多个空格和'数字+fr'间隔拼接的字符串，fr的个数即网格布局的列数，fr前面的数值大小，用于计算该列在网格布局宽度上的占比，最终决定该列的宽度。
    
    struct GridExample {
      @State Number: Array<string> = ['1', '2', '3', '4']
    
      build() {
        Column({ space: 5 }) {
          Grid() {
            ForEach(this.Number, (num: string) => {
              GridItem() {
                Text(`列${num}`)
                  .fontSize(16)
                  .textAlign(TextAlign.Center)
                  .backgroundColor(0xd0d0d0)
                  .width('100%')
                  .height('100%')
                  .borderRadius(5)
              }
            })
          }
          .columnsTemplate('1fr 1fr 1fr 1fr')
          .rowsTemplate('1fr')
          .columnsGap(10)
          .rowsGap(20)
          .width('90%')
          .backgroundColor(0xF0F0F0)
          .height(100)
        }.width('100%')
      }
    }

定义了四个等分的列，每列宽度相等。
    
    struct GridExample {
      @State Number: Array<string> = ['1', '2', '3', '4']
    
      build() {
        Column({ space: 5 }) {
          Grid() {
            ForEach(this.Number, (num: string) => {
              GridItem() {
                Text(`列${num}`)
                  .fontSize(16)
                  .textAlign(TextAlign.Center)
                  .backgroundColor(0xd0d0d0)
                  .width('100%')
                  .height('100%')
                  .borderRadius(5)
              }
            })
          }
          .columnsTemplate('1fr 2fr 3fr 4fr')
          .rowsTemplate('1fr')
          .columnsGap(10)
          .rowsGap(20)
          .width('90%')
          .backgroundColor(0xF0F0F0)
          .height(100)
        }.width('100%')
      }
    }

定义了四列，每列宽度比值为1:2:3:4。
    
    struct GridExample {
      @State Number: Array<string> = ['1', '2', '3']
    
      build() {
        Column({ space: 5 }) {
          Grid() {
            ForEach(this.Number, (num: string) => {
              GridItem() {
                Text(`列${num}`)
                  .fontSize(16)
                  .textAlign(TextAlign.Center)
                  .backgroundColor(0xd0d0d0)
                  .width('100%')
                  .height('100%')
                  .borderRadius(5)
              }
            })
          }
          .columnsTemplate('4fr 2fr 3fr')
          .rowsTemplate('1fr')
          .columnsGap(10)
          .rowsGap(20)
          .width('90%')
          .backgroundColor(0xF0F0F0)
          .height(100)
        }.width('100%')
      }
    }

定义了三列，每列宽度比值为4:2:3。

效果如下：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113742.45300368255051292491531263949464:50001231000000:2800:E8420BE9498F9B8BE2735E6F89C49EF480BF33A5266D5549ACFBD76C97AC0F8C.png?needInitFileName=true?needInitFileName=true)

#### [h2]排列方式

通过layoutDirection可以设置网格布局的主轴方向，决定子组件的排列方式。

可选值包括Row，RowReverse， Column， ColumnReverse四种情况。

效果如下：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113742.75588791625867688693212164073236:50001231000000:2800:4F02A7ACD93F443D1E4793999AC2B6E2327F4F46C37CBF8762E0565ED5C2A770.png?needInitFileName=true?needInitFileName=true)

#### [h2]行列间距

columnsGap用于设置网格子组件GridItem垂直方向的间距，rowsGap用于设置GridItem水平方向的间距。
    
    Grid()
    .columnsTemplate('1fr 1fr 1fr 1fr')
    .columnsGap(10)
    .rowsGap(20)

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113742.52666216547144014791498972021588:50001231000000:2800:211F12350BEBC3FC4C85EBF7D71F4940403D5ACA31B99D31C45E40F1D3B9F932.png?needInitFileName=true?needInitFileName=true)

上图中，设置网格布局子组件间的垂直间距为20，水平间距为10。

#### 网格子组件GridItem设置

#### [h2]设置子组件占的行列数

网格布局的行列标号从1开始，依次编号。

子组件横跨多行时，通过rowStart设置子组件起始行编号，rowEnd设置终点行编号。当rowStart值与rowEnd值相同时，子组件只占一个网格。示例如下：
    
    Grid() {
        GridItem() {
          Text('5')
            .fontSize(16)
            .textAlign(TextAlign.Center)
            .textStyle()
        }.rowStart(2).rowEnd(3)  // 5子组件从第二行到第三行
    
        GridItem() {
          Text('4')
            .fontSize(16)
            .textAlign(TextAlign.Center)
            .textStyle()
        }.columnStart(4).columnEnd(5) // 4从第四列到第五列
      
        GridItem() {
          Text('6')
            .fontSize(16)
            .textAlign(TextAlign.Center)
            .textStyle()
        }.columnStart(2).columnEnd(4)  // 6从第二列到第四列
    
        GridItem() {
          Text('9')
            .fontSize(16)
            .textAlign(TextAlign.Center)
            .textStyle()
        }.columnStart(3).columnEnd(4)    // 从第三列到第四列
    }
    .columnsTemplate('1fr 1fr 1fr 1fr 1fr')
    .rowsTemplate('1fr 1fr 1fr')
    .columnsGap(10)
    .rowsGap(20)
    .width('90%')
    .backgroundColor(0xF0F0F0)
    .height('200vp')
    .layoutDirection(GridDirection.Column)

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113742.22495688338755280503540569839093:50001231000000:2800:788F85BDF084F4D2E9F2293D657B3548A44C5CB55E98C615DCA8B1AEA96CA1D5.png?needInitFileName=true?needInitFileName=true)

#### 场景示例

使用grid布局实现一个计算器的排布效果，代码如下：
    
    @Entry
    @Component
    struct GridExample {
      @State Number: Array<string> = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '/']
    
      @Styles textStyle(){
        .backgroundColor(0xd0d0d0)
        .width('100%')
        .height('100%')
        .borderRadius(5)
      }
    
      build() {
        Column({ space: 5 }) {
          Grid() {
            GridItem() {
              Text('0')
                .fontSize(30)
                .textStyle()
            }.columnStart(1).columnEnd(4)
    
            GridItem() {
              Text('清空')
                .fontSize(16)
                .textAlign(TextAlign.Center)
                .textStyle()
            }.columnStart(1).columnEnd(2)
    
            GridItem() {
              Text('回退')
                .fontSize(16)
                .textAlign(TextAlign.Center)
                .textStyle()
            }.columnStart(3).columnEnd(4)
    
            ForEach(this.Number, (day: string) => {
              if (day === '0') {
                GridItem() {
                  Text(day)
                    .fontSize(16)
                    .textAlign(TextAlign.Center)
                    .textStyle()
                }.columnStart(1).columnEnd(2)
              } else {
                GridItem() {
                  Text(day)
                    .fontSize(16)
                    .textAlign(TextAlign.Center)
                    .textStyle()
                }
              }
            })
          }
          .columnsTemplate('1fr 1fr 1fr 1fr')
          .rowsTemplate('2fr 1fr 1fr 1fr 1fr 1fr')
          .columnsGap(10)
          .rowsGap(15)
          .width('90%')
          .backgroundColor(0xF0F0F0)
          .height('70%')
        }.width('100%').margin({ top: 5 })
      }
    }

在大屏设备上展示效果如下：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113742.82886675131205288650123719411767:50001231000000:2800:88374E9193904D91BC04B20AA74C4E325CD64014BA4B4FCB67063BAFF5D1BC32.png?needInitFileName=true?needInitFileName=true)

在小屏设备下展示效果如下：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113742.24442861607998248452846750490001:50001231000000:2800:154CB00395694FFF27F4BABF6F26B3127CFA6B8E9F31687E726BE9D2A2092A57.png?needInitFileName=true?needInitFileName=true)
