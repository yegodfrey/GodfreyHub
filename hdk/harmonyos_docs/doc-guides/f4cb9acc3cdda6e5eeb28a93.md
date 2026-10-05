---
name: document/cn/doc-guides/ui-js-components-rating-0000001333321301
title: rating开发指导
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ui-js-components-rating-0000001333321301
source: portal
---

# rating开发指导

Rating为评分条组件，表示用户使用感受的衡量标准条。具体用法请参考[Rating](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-basic-rating-0000001281361062)。

#### 创建Rating组件

在pages/index目录下的hml文件中创建一个Rating组件。
    
    <!-- xxx.hml -->
    <div class="container">
      <rating></rating>
    </div>
    
    /* xxx.css */
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #F1F3F5;
    }
    rating {
      width: 80%;
      height: 150px;
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230626101014.66725916801885369412787353906622:50001231000000:2800:21FB7D3AEC7811EDC941035D2E9C128929446F5A5B74C5CD1C57F083B067C4DA.gif?needInitFileName=true?needInitFileName=true)

#### 设置评分星级

Rating组件通过设置numstars和rating属性设置评分条的星级总数和当前评星数。
    
    <!-- xxx.hml -->
    <div class="container">
      <rating numstars="6" rating="5">
      </rating>
    </div>
    
    /* xxx.css */
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #F1F3F5;
    }
    rating {
      width: 80%;
      height: 150px;
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230626101014.74863992724819931745665782565738:50001231000000:2800:FF157F835972B5E4CB534F1903E675AB5A2AF301E3361766E0AA9D9A7B1005B1.gif?needInitFileName=true?needInitFileName=true)

#### 设置评分样式

Rating组件通过star-background、star-foreground和star-secondary属性设置单个星级未选择、选中和选中的次级背景图片。
    
    <!-- xxx.hml -->
    <div class="container">
      <div style="width: 500px;height: 500px;align-items: center;justify-content: center;flex-direction: column;;">
        <rating numstars="5" rating="1" class="myrating" style="width: {{ratewidth}}; height:{{rateheight}};
        star-background: {{backstar}}; star-secondary: {{secstar}};star-foreground: {{forestar}};rtl-flip: true;">
        </rating>
      </div>
    </div>
    
    /* xxx.css */
    .container {
      width: 100%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #F1F3F5;
    }
    
    /* index.js */
    export default {
      data: {
        backstar: 'common/love.png',
        secstar: 'common/love.png',
        forestar: 'common/love1.png',
        ratewidth: '400px',
        rateheight: '150px'
      },
      onInit(){
      }
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230626101015.82284424375120535770846444097309:50001231000000:2800:2D88D20A148916E4F54C94A6C61C3C5BE9E1E316286353D48E78370B07B33481.gif?needInitFileName=true?needInitFileName=true)

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230626101015.74681936357930480984136155172395:50001231000000:2800:B89C48187FD583A8D2BB070AC26F1C6C7C93A96821352621C9DAEE7ACCFE2838.png?needInitFileName=true?needInitFileName=true)

     * star-background、star-secondary、star-foreground属性的星级图源必须全部设置，否则默认的星级颜色为灰色，提示图源设置错误。

     * star-background、star-secondary、star-foreground属性只支持本地路径图片，图片格式为png和jpg。

#### 绑定事件

向Rating组件添加change事件，打印当前评分。
    
    <!-- xxx.hml -->
    <div class="container">
      <rating numstars="5" rating="0" onchange="showrating"></rating>
    </div>
    
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #F1F3F5;
    }
    rating {
      width: 80%;
      height: 150px;
    }
    
    import prompt from '@system.prompt';
    export default {
      showrating(e) {
        prompt.showToast({
          message: '当前评分' + e.rating
        })
      }
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230626101015.18056697613131845707102236797042:50001231000000:2800:83BA8C63AE3A62A4782BDD7074680EAB2159303E623CC2A255E9830CBE288CE8.gif?needInitFileName=true?needInitFileName=true)

#### 场景示例

开发者可以通过改变开关状态切换星级背景图，通过改变滑动条的值调整星级总数。
    
    <!-- xxx.hml -->
    <div style="width: 100%;height:100%;flex-direction: column;align-items: center;background-color: #F1F3F5;">
      <div style="width: 500px;height: 500px;align-items: center;justify-content: center;flex-direction: column;;">
        <rating numstars="{{stars}}" rating="{{rate}}" stepsize="{{step}}" onchange="showrating" class="myrating"
        style="width: {{ratewidth}};height:{{rateheight}};star-background: {{backstar}};star-secondary: {{secstar}};
        star-foreground: {{forestar}};rtl-flip: true;"></rating>
      </div>
      <div style="flex-direction: column;width: 80%;align-items: center;">
        <div style="width: 100%;height: 100px;align-items: center;justify-content: space-around;">
          <text>替换自定义图片</text>
          <switch checked="false" showtext="true" onchange="setstar"></switch>
        </div>
        <div style="width: 100%;height:120px;margin-top: 50px;margin-bottom: 50px;flex-direction: column;align-items: center;
        justify-content: space-around;">
          <text>numstars   {{stars}}</text>
          <slider id="sli1" min="-1" max="10" value="5" step="1" onchange="setnumstars"></slider>
        </div>
        <div style="width: 100%;height:120px;flex-direction: column;align-items: center;justify-content: space-around;">
          <text>rating   {{rate}}</text>
          <slider id="sli2" min="-1" max="10" value="0" step="1" onchange="setrating"></slider>
        </div>
      </div>
    </div>
    
    /* xxx.css */
    .myrating:active {
      width: 500px;
      height: 100px;
    }
    switch{
      font-size: 40px;
    }
    
    /* index.js */
    import prompt from '@system.prompt';
    export default {
      data: {
        backstar: '',
        secstar: '',
        forestar: '',
        stars: 5,
        ratewidth: '300px',
        rateheight: '60px',
        step: 0.5,
        rate: 0
      },
      onInit(){
      },
      setstar(e) {
        if (e.checked == true) {
          this.backstar = 'common/love.png'
          this.secstar = 'common/love.png'
          this.forestar = 'common/love1.png'
        } else {
          this.backstar = ''
          this.secstar = ''
          this.forestar = ''
        }
      },
      setnumstars(e) {
        this.stars = e.progress
        this.ratewidth = 60 * parseInt(this.stars) + 'px'
      },
      setstep(e) {
        this.step = e.progress
      },
      setrating(e){
        this.rate = e.progress
      },
      showrating(e) {
        prompt.showToast({
          message: '当前评分' + e.rating
        })
      }
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230626101015.94448055877354952494623584528573:50001231000000:2800:C31C986E7C736CD36BB3520A4BECB56C9B6E5B0793BD645F34445C637F5256E1.gif?needInitFileName=true?needInitFileName=true)
