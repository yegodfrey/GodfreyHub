---
name: document/cn/quickApp-Guides/custom-component-link-0000001309727589
title: 超链接组件
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/custom-component-link-0000001309727589
---

# 超链接组件

#### 简介

超链接组件，主要用于在快应用内复制url，打开新网页。

超链接（link）一般具有如下特点：

* 可以配置超链接的颜色、字体大小
* 可以配置超链接的下划线
* 可以自定义插槽

效果图如下：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220614100207.70408951935013419290017843854638:50001231000000:2800:1FD5F777438995DBECC08DCD5FE43CD51C97ECFC8B0639327657CEF964A18062.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

基本布局代码如下：

```
<import name="link" src="./Link/link.ux"></import>
<template>
  <div class="container">
    <text class="example-info">超链接组件</text>
    <text class="section">基本示例</text>
    <div class="link-view">
      <link href="https://www.huawei.com" > </link>
    </div>
  </div>
</template>
```

#### 开发指引

#### 自定义子组件

1. 定义布局样式。 链接内容部分由text+a组件嵌套实现。

   ```
   <template>
     <text class="text" style="color: {{textcolor}};font-size:{{fontsize}};" onlongpress="onlongpress()">
       <a href="{{href}}" style="text-decoration:{{showunderline?'underline':''}};" value="{{text}}"></a>
     </text>
   </template>
   ```

2. 规划属性和支持的事件。 支持的属性：

   |属性|类型|默认值|描述|
   |:------------|:------|:---------------------|:-------------|
   |href|String|-|点击后打开的外部网页url。|
   |text|String|https://www.huawei.com|显示的文字。|
   |showunderline|Boolean|false|是否显示下划线。|
   |textcolor|String|-|链接文字颜色。|
   |fontsize|String|50|链接文字大小。|

   支持的事件：  

   |事件名称|参数|描述|
   |:----------|:-|:-----------|
   |onlongpress|-|长按超链接时触发的事件。|

#### 父子组件通信

1. 父组件给子组件传递数据：
   1. 子组件通过在props定义参数，接收来自父组件的传值数据。

      ```
      props: {
          href: {
              type: String,
              default: ''
          },
          text: {
              type: String,
              default: 'https://www.huawei.com'
          },
          showunderline: {
              type: Boolean,
              default: false
          },
          textcolor: {
              type: String,
              default: ''
          },
          fontsize: {
              type: String,
              default: '50'
          },
      },
      ```

   2. 父组件给子组件传值，如果是布尔值，需要在data中定义，而不能直接在组件中定义。

      ```
      data: {
        textcolor:'red',
        showunderline: true,
        fontsize:'60',
        copyTips: "已自动复制网址，请在手机浏览器里粘贴该网址",
        text:'点击链接'
      },
      ```

2. 子组件给父组件传递数据和方法。
   1. 子组件中定义超链接长按事件onlongpress()，通过this.$emit方法携带handlelongclick事件及参数通知父组件，处理是否已经复制链接的逻辑。

      ```
      onlongpress() {
          var that = this
          let copytext = this.href
          clipboard.set({
              text: this.href
          })
          clipboard.get({
              success: function (data) {
                  console.log("handling success: " + data.text);
                  if (copytext === data.text) {
                      that.checked = true
                  } else {
                      that.checked = false
                  }
              },
              fail: function (data, code) {
                  console.log("handling fail, code=" + code);
              }
          })
          this.$emit('handlelongclick', { checked: that.checked });
      },
      ```

   2. 父组件中绑定handlelongclick事件，接收子组件传入的参数。

      ```
      <div class="link-view">
         <link href="https://huawei.com"  text={{text}} @handlelongclick="handlelongclick"> </link>
      </div>
      ```

      ```
      handlelongclick(e) {
        console.log(JSON.stringify(e));
        let checked = e.detail.checked;
        console.log("handlelongclick:" + e.detail.checked);
        let msg;
        if (checked) {
          msg = this.copyTips
        }
        prompt.showToast({
          message: msg,
          duration: 2000,
          gravity: 'center'
        })
      }
      ```

#### 示例代码

超链接link.ux代码：

```
<template>
  <text class="text" style="color: {{textcolor}};font-size:{{fontsize}};" onlongpress="onlongpress()">
    <a href="{{href}}" style="text-decoration:{{showunderline?'underline':''}};" value="{{text}}"></a>
  </text>
</template>

<script> 
    import clipboard from '@system.clipboard'
    export default {
        props: {
            href: { 
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: 'https://www.huawei.com'
            },
            showunderline: {
                type: Boolean,
                default: false
            },
            textcolor: {
                type: String,
                default: ''
            },
            fontsize: {
                type: String,
                default: '50'
            },
        },
        onlongpress() {
            var that = this
            let copytext = this.href
            clipboard.set({
                text: this.href
            })
            clipboard.get({
                success: function (data) {
                    console.log("handling success: " + data.text);
                    if (copytext === data.text) {
                        that.checked = true
                    } else {
                        that.checked = false
                    }
                },
                fail: function (data, code) {
                    console.log("handling fail, code=" + code);
                }
            })
            this.$emit('handlelongclick', { checked: that.checked });
        },
    }
</script>

<style>
    .text {
      width: 100%;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-left: 40px;
      padding-right: 40px;
      text-align: center;
      color: #bbbbbb;
    }
</style>
```

页面hello.ux代码：

```
<import name="link" src="./Link/link.ux"></import>
<template>
  <div class="container">
    <text class="example-info">超链接组件</text>
    <text class="section">基本示例</text>
    <div class="link-view">
      <link href="https://www.huawei.com" > </link>
    </div>
    <text class="section">自定义颜色</text>
    <div class="link-view">
      <link href="https://www.huawei.com"  textcolor={{textcolor}}></link>
    </div> 
    <text class="section">自定义下划线</text>
    <div class="link-view">
      <link href="https://www.huawei.com"  showunderline={{showunderline}}></link>
    </div>
    <text class="section">自定义字体大小</text>
    <div class="link-view">
      <link href="https://www.huawei.com"  fontsize={{fontsize}}></link>
    </div>
    <text class="section">自定义插槽</text>
     <div class="link-view">
      <link href="https://www.huawei.com"  text={{text}} @handlelongclick="handlelongclick">
      </link>
    </div>
  </div>
</template>

<style>
  .container {
    flex: 1;
    text-align: right;
    flex-direction: column;
    background-color: #ffffff;
  }
  .example-info {
    padding: 15px;
    color: #3b4144;
    background-color: #ffffff;
    font-size: 40px;
  }
  .section {
    background-color: #afeeee;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 30px;
    padding: 20px;
    width: 100%;
  }
  .link-view {
    flex-direction: column;
    margin: 10px 15px;
    justify-content: center;
  }
</style>

<script>
  import prompt from '@system.prompt'
  module.exports = {
    data: {
      textcolor:'red',
      showunderline: true,
      fontsize:'60',
      copyTips: "已自动复制网址，请在手机浏览器里粘贴该网址",
      text:'点击链接'
    },
    onInit() {
      this.$page.setTitleBar({
        text: 'Link',
        textColor: '#ffffff',
        backgroundColor: '#007DFF',
        backgroundOpacity: 0.5,
        menu: true
      });
    },
    handlelongclick(e) {
      console.log(JSON.stringify(e));
      let checked = e.detail.checked;
      console.log("handlelongclick:" + e.detail.checked);
      let msg;
      if (checked) {
        msg = this.copyTips
      }
      prompt.showToast({
        message: msg,
        duration: 2000,
        gravity: 'center'
      })
    }
  }
</script>
```

