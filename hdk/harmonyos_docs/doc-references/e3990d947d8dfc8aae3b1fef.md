---
name: document/cn/doc-references/ts-transition-animation-component-0000001281001270
title: 组件内转场
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/ts-transition-animation-component-0000001281001270
source: portal
---

组件内转场 组件内转场主要通过transition属性配置转场参数，在组件插入和删除时显示过渡动效，主要用于容器组件中的子组件插入和删除时，提升用户体验（需要配合[animateTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ts-explicit-animation-0000001281480722)才能生效，动效时长、曲线、延时跟随animateTo中的配置）。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172443.87293693915073379069885330680808:50001231000000:2800:4D2771192E8F25308DF8BE0C720E53B3924EA89FC7FB7C4C43F5F3BF19FE3626.png?needInitFileName=true?needInitFileName=true?needInitFileName=true) 从API Version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 属性 名称 | 参数类型 | 参数描述  
---|---|---  
transition | TransitionOptions | 所有参数均为可选参数，详细描述见transition入参说明。  
TransitionOptions参数说明 参数名称 | 参数类型 | 必填 | 参数描述  
---|---|---|---  
type | [TransitionType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ts-appendix-enums-0000001281201130#ZH-CN_TOPIC_0000001281201130__transitiontype) | 否 | 默认包括组件新增和删除。 默认值：TransitionType.All **说明：** 不指定Type时说明插入删除使用同一种效果。  
opacity | number | 否 | 设置组件转场时的透明度效果，为插入时起点和删除时终点的值。 默认值：1  
translate | { x? : number, y? : number, z? : number } | 否 | 设置组件转场时的平移效果，为插入时起点和删除时终点的值。 -x：横向的平移距离。 -y：纵向的平移距离。 -z：竖向的平移距离。  
scale | { x? : number, y? : number, z? : number, centerX? : number, centerY? : number } | 否 | 设置组件转场时的缩放效果，为插入时起点和删除时终点的值。 -x：横向放大倍数（或缩小比例）。 -y：纵向放大倍数（或缩小比例）。 -z：竖向放大倍数（或缩小比例）。 \- centerX、centerY缩放中心点。 \- 中心点为0时，默认的是组件的左上角。  
rotate | { x?: number, y?: number, z?: number, angle?: Angle, centerX?: Length, centerY?: Length } | 否 | 设置组件转场时的旋转效果，为插入时起点和删除时终点的值。 -x：横向的旋转向量。 -y：纵向的旋转向量。 -z：竖向的旋转向量。 -angle：旋转角度。 \- centerX,centerY指旋转中心点。 \- 中心点为（0，0）时，默认的是组件的左上角。  
示例示例功能通过一个Button控制第二个Button的出现和消失，并通过transition配置第二个Button出现和消失的过场动画。
    
    // xxx.ets
    @Entry
    @Component
    struct TransitionExample {
      @State btn1: boolean = false
      @State show: string = "show"
      build() {
        Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center,}) {
          Button(this.show).width(80).height(30).backgroundColor(0x317aff).margin({bottom:50})
            .onClick(() => {
              animateTo({ duration: 1000 }, () => {
                this.btn1 = !this.btn1
                if(this.btn1){
                  this.show = "hide"
                }else{
                  this.show = "show"
                }
              })
            })
          if (this.btn1) {
            // 插入和删除配置为不同的过渡效果
            Button() {
              Image($r('app.media.bg1')).width("80%").height(300)
            }.transition({ type: TransitionType.Insert, scale : {x:0,y:1.0} })
            .transition({ type: TransitionType.Delete, scale: { x: 1.0, y: 0.0 } })
          }
        }.height(400).width("100%").padding({top:100})
      }
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172443.06191543798579572409331691817662:50001231000000:2800:CB1404BA90810336EB339442DE5ECB3A760806CD3E41404C02D015EC32F49715.gif?needInitFileName=true?needInitFileName=true?needInitFileName=true)
