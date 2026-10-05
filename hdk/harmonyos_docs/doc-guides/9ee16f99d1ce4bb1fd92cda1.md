---
name: document/cn/doc-guides/foldable-screen-samples-component-0000001391861370
title: 其他控件适配示例代码
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/foldable-screen-samples-component-0000001391861370
source: portal
---

# 其他控件适配示例代码

hml 文件示意如下：
    
    <!-- index.hml -->
     
    <div class="container">
    <!-- 头部搜索部分 -->
      <div class="header">
        <search hint="搜索..." icon="pages/common/images/ic_public_search.png">
        </search>
        <div class="headerRight">
          <image src="pages/common/images/ic_public_drawer.png" class="headerScan">
          </image>
        </div>
      </div>
    <!-- 页签切换部分 -->
      <div class="headerTab">
        <text class="tab_text">推荐</text>
        <text class="tab_text">综艺频道</text>
        <text class="tab_text">明星频道</text>
      </div>
    <!-- 视频栅格部分 -->
      <div class="body">
        <grid-container id="mygrid" columns="4" gutter="12vp">
          <grid-row style="flex-wrap: wrap; justify-content: space-between;">
            <grid-col sm="2" md="1" for="{{ videoDate }}">
              <div class="imageFather">
                <image src="{{ $item.videoPoster }}" class="body_image"></image>
                <image src="pages/common/images/player3.png" class="body_image1"></image>
              </div>
            </grid-col>
          </grid-row>
        </grid-container>
      </div>
      <div class="blank"></div>
    <!-- 控制器布局 -->
      <div class="music_controll">
        <div class="music_controll_left">
          <image src="pages/common/images/vavatar.png" style="width: 35vp; height: 35vp; margin: 8vp 8vp 8vp 34vp; border-radius: 6vp;"></image>
          <text style="font-size: 16vp;">
            推荐
          </text>
        </div>
        <div class="music_controll_right">
          <image src="pages/common/images/ic_public_play_norm.png" class="mcr_image"></image>
          <image src="pages/common/images/ic_public_play_next.png" class="mcr_image"></image>
          <image src="pages/common/images/ic_music.png" class="mcr_image"></image>
        </div>
      </div>
    <!-- 底部工具栏 -->
      <toolbar style="position: fixed; bottom: 0vp; height: 80vp; padding: 0vp 13vp; background-color: #f3f3f3;">
        <toolbar-item icon='pages/common/images/ic_health_my_on2.png' value='推荐'></toolbar-item>
        <toolbar-item icon='pages/common/images/ic_health_my_on2.png' value='排行榜'></toolbar-item>
        <toolbar-item icon='pages/common/images/ic_health_my_on2.png' value='电台'></toolbar-item>
        <toolbar-item icon='pages/common/images/ic_health_my_on3.png' value='MV'></toolbar-item>
        <toolbar-item icon='pages/common/images/ic_health_my_on2.png' value='我的'></toolbar-item>
      </toolbar>
    </div>
     

css 文件示意如下：
    
    /* index.css */
     
    /* 弹性布局 */
    .container {
      flex-direction: column;
    }
    .header {
      margin-top: 10vp;
    }
    search {
      margin-left: 24vp;
      margin-right: 24vp;
    }
    .headerRight {
      width: 72vp;
    }
    .headerScan {
      width: 24vp;
      height: 24vp;
      object-fit: contain;
      margin-left: 9vp;
      margin-top: 10vp;
    }
    /* 弹性布局 */
    .headerTab {
      margin-top: 10vp;
      margin-bottom: 16vp;
      flex-direction: row;
      margin-left: 34vp;
      justify-content: space-around;
    }
    .tab_text {
      width: 115vp;
      font-size: 16fp;
      margin-left: 16vp;
    }
    /* 配合栅格完成换行、调整大小 */
    .body {
      flex-wrap: wrap;
    }
    .body_image {
      width: 148vp;
      height: 255vp;
      object-fit: contain;
      margin-bottom: 8vp;
    }
    .imageFather {
      position: relative;
    }
    .body_image1 {
      width: 30vp;
      height: 30vp;
      position: absolute;
      left: 50%;
      margin-left: -15vp;
      top: 50%;
      margin-top: -15vp;
    }
    .blank {
      height: 120px;
    }
    /* 固定布局 */
    .music_controll {
      position: fixed;
      bottom: 80vp;
      width: 100%;
      height: 50vp;
      background-color: #f1f4fc;
      justify-content: space-around;
    }
    .music_controll_left {
      width: 50%;
    }
    .music_image {
      width: 24vp;
      height: 24vp;
      margin: 8vp 8vp 8vp 24vp;
    }
    .music_text {
      font-size: 10vp;
    }
    .music_controll_right {
      margin-right: 24vp;
    }
    .mcr_image {
      width: 24vp;
      height: 24vp;
      margin: 12vp 0 12vp 12vp;
    }

js 文件示意如下：
    
    // index.js
     
    export default {
      data: {
        bgurl: "pages/common/images/player1.png",
        flag: true,
    // 视频数据
        videoDate: [
          {videoSrc: "/common/video1.mp4", videoPoster: "pages/common/images/vBody_Picture1.png"},
          {videoSrc: "/common/video1.mp4", videoPoster: "pages/common/images/vBody_Picture2.png"},
          {videoSrc: "/common/video1.mp4", videoPoster: "pages/common/images/vBody_Picture3.png"},
          {videoSrc: "/common/video1.mp4", videoPoster: "pages/common/images/vBody_Picture4.png"},
          {videoSrc: "/common/video1.mp4", videoPoster: "pages/common/images/vBody_Picture5.png"},
          {videoSrc: "/common/video1.mp4", videoPoster: "pages/common/images/vBody_Picture6.png"},
          {videoSrc: "/common/video1.mp4", videoPoster: "pages/common/images/vBody_Picture7.png"},
          {videoSrc: "/common/video1.mp4", videoPoster: "pages/common/images/vBody_Picture8.png"},
        ]
      }
    }
