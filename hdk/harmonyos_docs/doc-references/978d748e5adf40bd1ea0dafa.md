---
name: document/cn/doc-references/ts-container-navigator-0000001333321217
title: Navigator
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/ts-container-navigator-0000001333321217
source: portal
---

Navigator 路由容器组件，提供路由跳转能力。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172429.57192789713789403948178102860119:50001231000000:2800:E8C4EE86BBC4594ED4C5112F2ED6F510AF637554AC5A59AC4C35E17EE18A5039.png?needInitFileName=true?needInitFileName=true?needInitFileName=true) 该组件从API Version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 子组件可以包含子组件。 接口Navigator(value?: {target: string, type?: NavigationType}) 创建路由组件。 **参数：** 参数名 | 参数类型 | 必填 | 参数描述  
---|---|---|---  
target | string | 是 | 指定跳转目标页面的路径。  
type | NavigationType | 否 | 指定路由方式。 默认值：NavigationType.Push  
NavigationType枚举说明 名称 | 描述  
---|---  
Push | 跳转到应用内的指定页面。  
Replace | 用应用内的某个页面替换当前页面，并销毁被替换的页面。  
Back | 返回到指定的页面。指定的页面不存在栈中时不响应。未传入指定的页面时返回上一页。  
属性 名称 | 参数 | 描述  
---|---|---  
active | boolean | 当前路由组件是否处于激活状态，处于激活状态时，会生效相应的路由操作。  
params | object | 跳转时要同时传递到目标页面的数据，可在目标页面使用router.getParams()获得。  
示例
    
    // Navigator Page
    @Entry
    @Component
    struct NavigatorExample {
      @State active: boolean = false
      @State Text: object = {name: 'news'}
    
      build() {
        Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start, justifyContent: FlexAlign.SpaceBetween }) {
          Navigator({ target: 'pages/container/navigator/Detail', type: NavigationType.Push }) {
            Text('Go to ' + this.Text['name'] + ' page')
                .width('100%').textAlign(TextAlign.Center)
          }.params({ text: this.Text })
    
          Navigator() { 
            Text('Back to previous page').width('100%').textAlign(TextAlign.Center)
          }.active(this.active)
          .onClick(() => {
            this.active = true
          })
        }.height(150).width(350).padding(35)
      }
    }
    
    // Detail Page
    import router from '@system.router'
    
    @Entry
    @Component
    struct DetailExample {
      @State text: any = router.getParams()['text']
    
      build() {
        Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start, justifyContent: FlexAlign.SpaceBetween }) {
          Navigator({ target: 'pages/container/navigator/Back', type: NavigationType.Push }) {
            Text('Go to back page').width('100%').height(20)
          }
    
          Text('This is ' + this.text['name'] + ' page')
              .width('100%').textAlign(TextAlign.Center)
        }
        .width('100%').height(200).padding({ left: 35, right: 35, top: 35 })
      }
    }
    
    // Back Page
    @Entry
    @Component
    struct BackExample {
      build() {
        Column() {
          Navigator({ target: 'pages/container/navigator/Navigator', type: NavigationType.Back }) {
            Text('Return to Navigator Page').width('100%').textAlign(TextAlign.Center)
          }
        }.width('100%').height(200).padding({ left: 35, right: 35, top: 35 })
      }
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172429.32874297890743379693712097269698:50001231000000:2800:D655875C440D35053F7A39062A1824EDDF478E70C0EE56F55B83684479A1DAE5.gif?needInitFileName=true?needInitFileName=true?needInitFileName=true)
