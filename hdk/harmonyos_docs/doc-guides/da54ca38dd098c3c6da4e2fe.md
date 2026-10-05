---
name: document/cn/doc-guides/ui-js-components-form-0000001281361210
title: form开发指导
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ui-js-components-form-0000001281361210
source: portal
---

# form开发指导

Form是一个表单容器，支持容器内[Input](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-basic-input-0000001281001178)组件内容的提交和重置。具体用法请参考[Form API](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-container-form-0000001333800521)。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113748.33198666400676282427603254596034:50001231000000:2800:2411B11D8B958AAB1E98D0AE804D8292A38DC05FF0D029656F26CCF8ACAE6B39.png?needInitFileName=true?needInitFileName=true)

从 API Version 6 开始支持。

#### 创建Form组件

在pages/index目录下的hml文件中创建一个Form组件。
    
    <!-- xxx.hml -->
    <div class="container">
      <form style="width: 100%; height: 20%">  
        <input type="text" style="width:80%"></input>
      </form>
    </div>
    
    /* xxx.css */
    .container {
      width:100%;
      height:100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #F1F3F5;
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113748.98741503293509542598555786179696:50001231000000:2800:715CB0B41E21BDAA37B8169D5E1E135B8E33CCFE5A3E26A8E11FD072B124E3EE.png?needInitFileName=true?needInitFileName=true)

#### 实现表单缩放

为Form组件添加click-effect属性，实现点击表单后的缩放效果，click-effect枚举值请参考[通用属性](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-attributes-0000001281480654)。
    
    <!-- xxx.hml -->
    <div class="container">
      <form  id="formId" class="formClass" click-effect="spring-large">
        <input type="text"></input>  
      </form>
    </div>

#### 设置Form样式

通过为Form添加background-color和border属性，来设置表单的背景颜色和边框。
    
    /* xxx.css */
    .container {
      width: 100%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #F1F3F5;
    }
    .formClass{
      width: 80%;
      height: 100px;
      padding: 10px;
      border: 1px solid #cccccc;
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113748.74779653654582546332037210595422:50001231000000:2800:846BCDC374EB69725E15715531D68FE74AB514421BD9A1964D8DF467F133CD7E.gif?needInitFileName=true?needInitFileName=true)

#### 添加响应事件

为Form组件添加submit和reset事件，来提交表单内容或重置表单选项。
    
    <!-- xxx.hml -->
    <div class="container">
      <form onsubmit='onSubmit' onreset='onReset' class="form">
        <div style="width: 100%;justify-content: center;">
          <label>Option 1</label>
          <input type='radio' name='radioGroup' value='radio1'></input>
          <label>Option 2</label>
          <input type='radio' name='radioGroup' value='radio2'></input>
        </div>
        <div style="width: 100%;justify-content: center; margin-top: 20px">
          <input type="submit" value="Submit" style="width:120px; margin-right:20px;" >   
          </input>
          <input type="reset" value="Reset" style="width:120px;"></input>
        </div>
      </form>
    </div>
    
    /* index.css */
    .container{
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      background-color: #F1F3F5;
    }
    .form{
      width: 100%;
      height: 30%;
      margin-top: 40%;
      flex-direction: column;
      justify-items: center;
      align-items: center;
    }
    
    /* xxx.js */
    import prompt from '@system.prompt';
    export default{
      onSubmit(result) {
        prompt.showToast({
          message: result.value.radioGroup
        })
      },
      onReset() {
        prompt.showToast({
          message: 'Reset All'
        })
      }
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113748.10623508321128034491400725705253:50001231000000:2800:D803D687FB93A09FA671ED4A66ECE0348E96DAD42EB85BA18915FABD4CFB6E93.gif?needInitFileName=true?needInitFileName=true)

#### 场景示例

在本场景中，开发者可以选择相应选项并提交或重置数据。

创建[Input](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-basic-input-0000001281001178)组件，分别设置type属性为checkbox（多选框）和radio（单选框），再使用Form组件的onsubmit和onreset事件实现表单数据的提交与重置。
    
    <!-- xxx.hml -->
    <div class="container">
       <form onsubmit="formSubmit" onreset="formReset">
     <text style="font-size: 30px; margin-bottom: 20px; margin-top: 100px;">
          <span > Form </span>
      </text>
        <div style="flex-direction: column;width: 90%;padding: 30px 0px;">
         <text class="txt">Select 1 or more options</text>
          <div style="width: 90%;height: 150px;align-items: center;justify-content: space-around;">
            <label target="checkbox1">Option 1</label>
            <input id="checkbox1" type="checkbox" name="checkbox1"></input>
            <label target="checkbox2">Option 2</label>
            <input id="checkbox2" type="checkbox" name="checkbox2"></input>
           </div>
           <divider style="margin: 20px 0px;color: pink;height: 5px;"></divider>
           <text class="txt">Select 1 option</text>
           <div style="width: 90%;height: 150px;align-items: center;justify-content: space-around;">
             <label target="radio1">Option 1</label>
             <input id="radio1" type="radio" name="myradio"></input>
             <label target="radio2">Option 2</label>
             <input id="radio2" type="radio" name="myradio"></input>
           </div>
           <divider style="margin: 20px 0px;color: pink;height: 5px;"></divider>
           <text class="txt">Text box</text>
           <input type="text" placeholder="Enter content." style="margin-top: 50px;"></input>
           <div style="width: 90%;align-items: center;justify-content: space-between;margin: 40px;">
             <input type="submit">Submit</input>
             <input type="reset">Reset</input>
           </div>
        </div>
      </form>
    </div>
    
    /* index.css */
    .container {
      width: 100%;
      height: 100%;
      flex-direction:column;
      align-items:center;
      background-color:#F1F3F5;
    }
    .txt {
      font-size:33px;
      font-weight:bold;
      color:darkgray;
    }
    label{
      font-size: 20px;
    }
    
    /* xxx.js */
    import prompt from '@system.prompt';
    export default {
      formSubmit() {
        prompt.showToast({
          message: 'Submitted.'
        })
      },
      formReset() {
        prompt.showToast({
          message: 'Reset.'
        })
      }
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113748.59677369530766387164301358055440:50001231000000:2800:4E52E91656327A74C6D8BC0E133DCB205228E155F5D61176FC2246E3E9EC65AB.gif?needInitFileName=true?needInitFileName=true)
