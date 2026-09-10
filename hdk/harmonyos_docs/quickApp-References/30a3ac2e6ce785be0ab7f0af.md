---
name: document/cn/quickApp-References/quickapp-component-refresh-footer-0000001295521065
title: refresh-footer（1090+）
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-component-refresh-footer-0000001295521065
---

# refresh-footer（1090+）

#### 概述

refresh2下拉刷新底部容器。  

#### 使用限制

|限制条件|说明|
|:---|:-----------|
|适用终端|手机、平板、智慧屏、车机|
|适用区域|全球|

#### 子组件

支持。  

#### 属性

除了支持 [通用属性](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-attributes-0000001170050123) 以外，还支持如下属性。  

|名称|类型|默认值|是否必填|描述|
|:---------------------|:------|:----------|:---|:----------------------------------------------------------------------------------------------------------------|
|dragRate|number|0.5|否|拖动率，取值等于footer移动距离除以手势移动距离。|
|triggerRatio|number|0.7|否|移动率，用于计算触发刷新时的footer移动距离。footer移动距离等于该属性取值乘以footer高度。triggerRatio优先级低于triggerSize。|
|triggerSize|number|0|否|触发刷新时的移动距离，取值大于0时生效，优先级高于triggerRatio。单位：px|
|maxdragratio|number|1|否|footer可移动的最大距离比率，该取值乘以footer高度等于最大移动距离。|
|maxdragsize|number|0|否|footer可移动最大距离，取值大于0时有效，优先级高于maxdragratio。 单位：px|
|refreshdisplayratio|number|0.7|否|刷新时footer的展示高度比率，该取值乘以footer高度等于展示高度。footer默认为1。|
|refreshdisplaysize|number|0|否|刷新时footer的展示高度，取值大于0时有效，优先级高于refreshdisplayratio。 单位：px|
|spinnerstyle|string|translation|否|footer的展示风格，支持如下三种类型： * translation：footer移动时，内容跟随移动 * front：footer展示在内容上方，内容不跟随移动 * behind：footer展示在内容下方，内容不跟随移动|
|autorefresh|boolean|false|否|滑向底部时，是否自动加载。|
|translationwithcontent|boolean|true|否|默认取值为true，表示刷新时footer跟随内容移动。|

#### 样式

支持 [通用样式](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-common-styles-0000001170210009) 。  

#### 事件

除了支持 [通用事件](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-events-0000001123530338) 以外，还支持如下事件。  

|名称|参数|描述|
|:---|:----------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|move|{scrollY:number,percent:number,isDrag:boolean,refreshing:boolean}|footer移动参数回调。 * scrollY：footer相对初始位置的移动距离。当上拉footer时，该值为负。 * percent：footer移动距离/触发刷新的距离。当percent取值大于或等于1f（宽度为1的浮点数）时，触发刷新。 * isDrag：是否可通过手势拖拽。 * refreshing：当前是否处理刷新状态（刷新状态下也可移动）。|

#### 示例代码

```
<import name="movie-item" src="../Common/SR399/movie-item.ux"></import>
<template>
  <div class="root">
  <refresh2 id="refresh" style="background-color:{{backgroundColor}};progress-color:{{progressColor}};" offset="132px" animationduration="300" class="container" reboundable="true" type="auto" @refresh="refresh" @pulluprefresh="pullUpRefresh" @pulldownrefresh="pullDownRefresh" gesture="true" enablepulldown="true" enablepullup="true">
   <!-- content -->
    <div class="content-list">
      <list class="list" id="movie-list" @scrollbottom="loadMoreData">
        <list-item type="listItem" for="{{dataList}}" tid="$item.id">
          <movie-item item="{{$item}}"></movie-item>
        </list-item>
      </list>
    </div>
  <refresh-footer class="footer" spinnerstyle="behind" triggerratio="0.7" dragrate="0.5" triggersize="0" maxdragratio="1" maxdragsize="0" refreshdisplayratio="0.7" refreshdisplaysize="0" translationwithcontent="false" @move="footerMove" autorefresh="true">
    <text class="loading">Loading...</text>
  </refresh-footer>
  </refresh2>
</div>
</template>
<style>
  .root {
    align-items: center;
  }
  .list {
    padding-left: 16px;
    padding-right: 16px;
  }
  .content-list {
    background-color: #D0D0D0;
    flex-direction: column;
    align-items: center;
  }
  .container {
    height: 100%;
    width: 100%;
  }
  .header {
    height: 175%;
    width: 100%;
    background-color: #800000;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }
  .txt {
    width: 100%;
    height: 100px;
  }
  .circular {
    width: 100%;
    height: 75px;
  }
  .footer {
    height: 100px;
    width: 100%;
    background-color: #008000;
    justify-content: center;
    align-items: center;
  }
  .loading {
    color: #ffffff;
  }
</style>
<script>
import api from '../Common/SR399/service.js'
  const LOAD_MORE_INITIAL_INDEX = 1;
  const LOAD_MORE_INCREASE_THRESHOLD = 1;
  module.exports = {
    backgroundColor: "#ffffff",
    progressColor: "#ffffff",
    data: {
      dataList: [],
      currentTotalPages: Number.MAX_SAFE_INTEGER,
      currentPage: LOAD_MORE_INITIAL_INDEX,
    },
    computed: {
      loadMoreEnabled: {
        get() {
          return this.currentPage < this.currentTotalPages
        }
      },
    },
    onReady(options) {
      this.getData(LOAD_MORE_INITIAL_INDEX)
    },
    // Service calls
    loadMoreData: function () {
      if (this.loadMoreEnabled) {
        this.getData(this.currentPage + LOAD_MORE_INCREASE_THRESHOLD)
      }
    },
    clearData: function () {
      this.dataList = []
    },
    getData: function (page) {
      this.currentPage = page
      var app = this
      api.callGet({ page: page }, function (data) {
        if (page > LOAD_MORE_INCREASE_THRESHOLD) {
          data.results.forEach(movie => {
            app.dataList.push(movie)
          });
        } else {
          app.dataList = data.results
        }
        app.currentTotalPages = data.total_pages
      })
    },
    pullDownRefresh: function () {
      console.log("pullDownRefresh");
      console.log("pulldownrefreshing:" + this.$element('refresh').pulldownrefreshing)
      console.log("pulluprefreshing:" + this.$element('refresh').pulluprefreshing)
      this.$element('refresh').startPullDownRefresh()
      setTimeout(() => {
        this.clearData()
        this.getData(LOAD_MORE_INITIAL_INDEX)
        this.finishPullDownRefresh()
      }, 1500);
    },
    pullUpRefresh: function () {
      console.log("pullUpRefresh");
      console.log("pulldownrefreshing:" + this.$element('refresh').pulldownrefreshing)
      console.log("pulluprefreshing:" + this.$element('refresh').pulluprefreshing)
      this.$element('refresh').startPullUpRefresh();
      setTimeout(() => {
        this.finishPullUpRefresh()
      }, 1500);
    },
    refresh: function (e) {
      console.log("refresh:" + e.refreshing);
    },
    headerMove: function (params) {
      console.log("headermove - scrollY:" + params.scrollY + " percent:" + params.percent + " isDrag:" + params.isDrag + " refreshing:" + params.refreshing);
    },
    footerMove: function (params) {
      console.log("footermove - scrollY:" + params.scrollY + " percent:" + params.percent + " isDrag:" + params.isDrag + " refreshing:" + params.refreshing)
    },
    finishPullDownRefresh: function () {
      console.log("finishPullDownRefresh")
      this.$element('refresh').stopPullDownRefresh()
    },
    finishPullUpRefresh: function () {
      console.log("finishPullUpRefresh")
      this.$element('refresh').stopPullUpRefresh()
    },
  }
</script>
```

#### 版本更新说明

|版本|发布日期|描述|
|:---|:---------|:-------|
|1090|2022-05-19|第一次正式发布。|

