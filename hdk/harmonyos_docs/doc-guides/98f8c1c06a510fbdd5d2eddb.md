---
name: document/cn/doc-guides/ui-java-component-timepicker-0000001060648140
title: TimePicker
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ui-java-component-timepicker-0000001060648140
source: portal
---

# TimePicker

TimePicker主要供用户选择时间。

#### 支持的XML属性

TimePicker的共有XML属性继承自：[StackLayout](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/ui-java-layout-stacklayout-0000001060357540#section154996161416)

TimePicker的自有XML属性见下表：

**表1** TimePicker的自有XML属性属性名称 | 中文描述 | 取值 | 取值说明 | 使用案例  
---|---|---|---|---  
am_pm_order | 在12小时制显示的情况下，控制上午下午排列顺序 | start | 表示am/pm列靠时间选择器起始端显示。 | ohos:mode_24_hour="false" ohos:am_pm_order="start"  
end | 表示am/pm列靠时间选择器结束端显示。 | ohos:mode_24_hour="false" ohos:am_pm_order="end"  
left | 表示am/pm列靠时间选择器左侧显示。 | ohos:mode_24_hour="false" ohos:am_pm_order="left"  
right | 表示am/pm列靠时间选择器右侧显示。 | ohos:mode_24_hour="false" ohos:am_pm_order="right"  
mode_24_hour | 是否24小时制显示 | boolean类型 | 可以直接设置true/false，也可以引用boolean资源。 | ohos:mode_24_hour="true" ohos:mode_24_hour="$boolean:true"  
hour | 显示小时 | integer类型 | 可以直接设置整型数值，也可以引用integer资源。 小时取值范围必须在0~23。 | ohos:hour="23" ohos:hour="$integer:hour"  
minute | 显示分钟 | integer类型 | 可以直接设置整型数值，也可以引用integer资源。 分钟取值范围必须在0~59。 | ohos:minute="59" ohos:minute="$integer:minute"  
second | 显示秒 | integer类型 | 可以直接设置整型数值，也可以引用integer资源。 秒钟取值范围必须在0~59。 | ohos:second="59" ohos:second="$integer:second"  
normal_text_color | 未选中文本的颜色 | color类型 | 可以直接设置色值，也可以引用color资源。 | ohos:normal_text_color="#FFFFFFFF" ohos:normal_text_color="$color:black"  
selected_text_color | 选中文本的颜色 | color类型 | 可以直接设置色值，也可以引用color资源。 | ohos:selected_text_color="#FF45A5FF" ohos:selected_text_color="$color:black"  
operated_text_color | 操作项的文本颜色 | color类型 | 可以直接设置色值，也可以引用color资源。 | ohos:operated_text_color="#A8FFFFFF" ohos:operated_text_color="$color:black"  
normal_text_size | 未选中文本的大小 | float类型 | 表示尺寸的float类型。 可以是浮点数值，其默认单位为px；也可以是带px/vp/fp单位的浮点数值；也可以引用float资源。 | ohos:normal_text_size="30" ohos:normal_text_size="16fp" ohos:normal_text_size="$float:size_value"  
selected_text_size | 选中文本的大小 | float类型 | 表示尺寸的float类型。 可以是浮点数值，其默认单位为px；也可以是带px/vp/fp单位的浮点数值；也可以引用float资源。 | ohos:selected_text_size="30" ohos:selected_text_size="16fp" ohos:selected_text_size="$float:size_value"  
selected_normal_text_margin_ratio | 已选文本边距与常规文本边距的比例 | float类型 | 可以直接设置浮点数值，也可以引用float资源。 取值需>0.0f，默认值为1.0f。 | ohos:selected_normal_text_margin_ratio="0.5" ohos:selected_normal_text_margin_ratio="$float:ratio"  
selector_item_num | 显示的项目数量 | integer类型 | 可以直接设置整型数值，也可以引用integer资源。 | ohos:selector_item_num="3" ohos:selector_item_num="$integer:num"  
shader_color | 着色器颜色 | color类型 | 可以直接设置色值，也可以引用color资源。 | ohos:shader_color="#A8FFFFFF" ohos:shader_color="$color:black"  
text_am | 上午文本 | string类型 | 可以直接设置文本字串，也可以引用string资源（推荐使用）。 | ohos:text_am="8:00:00" ohos:text_am="$string:am"  
text_pm | 下午文本 | string类型 | 可以直接设置文本字串，也可以引用string资源（推荐使用）。 | ohos:text_pm="22:00:00" ohos:text_pm="$string:pm"  
top_line_element | 选中项的顶行 | Element类型 | 可直接配置色值，也可引用color资源或引用media/graphic下的图片资源。 | ohos:top_line_element="#FFFFFFFF" ohos:top_line_element="$color:black" ohos:top_line_element="$media:media_src" ohos:top_line_element="$graphic:graphic_src"  
bottom_line_element | 选中项的底线 | Element类型 | 可直接配置色值，也可引用color资源或引用media/graphic下的图片资源。 | ohos:bottom_line_element="#FFFFFFFF" ohos:bottom_line_element="$color:black" ohos:bottom_line_element="$media:media_src" ohos:bottom_line_element="$graphic:graphic_src"  
wheel_mode_enabled | 选择轮是否循环显示数据 | boolean类型 | 可以直接设置true/false，也可以引用boolean资源。 | ohos:wheel_mode_enabled="false" ohos:wheel_mode_enabled="$boolean:false"  
  
#### 使用TimePicker

     * 创建TimePicker
           
           <TimePicker
               ohos:id="$+id:time_picker"
               ohos:height="match_content"
               ohos:width="match_parent" />

**图1** 创建一个默认的TimePicker的效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113823.07654335989948029710100413363362:50001231000000:2800:6AC161BAB8D91E8791B6FFC3864D553480E8AFBB50451692BC6318B40CAAEBC0.gif?needInitFileName=true?needInitFileName=true)

     * 获取时间
           
           TimePicker timePicker = (TimePicker) findComponentById(ResourceTable.Id_time_picker);
           int hour = timePicker.getHour();
           int minute = timePicker.getMinute();
           int second = timePicker.getSecond();

     * 设置时间
           
           timePicker.setHour(19);
           timePicker.setMinute(18);
           timePicker.setSecond(12);

     * 响应时间改变事件
           
           timePicker.setTimeChangedListener(new TimePicker.TimeChangedListener() {
               @Override
               public void onTimeChanged(TimePicker timePicker, int hour, int minute, int second) {
                   ...
               }
           });

#### 显示样式配置

     * 设置字体属性
       1. 设置未选中字体的颜色和大小
              
              <TimePicker
                  ...
                  ohos:normal_text_color="#007DFF"
                  ohos:normal_text_size="20fp"
              />

**图2** 设置未选中字体的颜色和大小的效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113823.02905160733416144094002290210241:50001231000000:2800:45ADABF0AEFA2E6F66E4B9B2987C410D91B3E0D3B7068539E57400B1C376B750.gif?needInitFileName=true?needInitFileName=true)

       2. 设置选中字体的颜色和大小
              
              <TimePicker
                  ...
                  ohos:selected_text_color="#007DFF"
                  ohos:selected_text_size="20fp"
              />

**图3** 设置选中字体的颜色和大小效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113823.07235123185986701927517492876086:50001231000000:2800:4E559B27EA003D96F45E86536A2C39BA440001F950216EE86E423815E7544EAD.gif?needInitFileName=true?needInitFileName=true)

       3. 设置操作项文本颜色
              
              <TimePicker
                  ...
                  ohos:operated_text_color="#FF9912"
              />

**图4** 操作项文本颜色设置效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113823.96264227396432889214431872325583:50001231000000:2800:747F2BC32079C83EF4D42794E53C8F67EF3E215FA0D7EAB15B5058D474C85DD3.gif?needInitFileName=true?needInitFileName=true)

     * 设置TimePicker中已选文本边距与常规文本边距的比例
           
           <TimePicker
               ...
               ohos:selected_normal_text_margin_ratio="10"
           />

**图5** 已选文本与常规文本间隔效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113823.13531671154315477721595081873131:50001231000000:2800:B756A893F82893EF926167167CB7223B88C393CE402D8557BDA2165F407364F5.gif?needInitFileName=true?needInitFileName=true)

     * 设置着色器颜色
           
           <TimePicker
               ...
               ohos:shader_color="#00BFFF"
           />

**图6** 配置着色器颜色效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113823.97895527089439371553694903558144:50001231000000:2800:6714E4663D45D9B62D51E6CD5ABC1F00BD5A9FD80C889B25E809F84E8E5D6F0A.gif?needInitFileName=true?needInitFileName=true)

     * 设置选中时间的上下边框
           
           <TimePicker
               ...
               ohos:bottom_line_element="#00BFFF"
           />

**图7** 设置上下区域分割线颜色效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113823.42969436338018964866881745618779:50001231000000:2800:EF16442B4F1F9042E32CF9C54EBB2F9DC6B8380A46D18D624902E267F70CFF17.gif?needInitFileName=true?needInitFileName=true)

     * 设置12小时制下显示样式

AM/PM默认置于左侧，如需位于右边：
           
           <TimePicker
               ...
               ohos:mode_24_hour="false"
               ohos:am_pm_order="right"
           />

**图8** 设置AM/PM位于右边显示的效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113823.53066051687853355442112024896790:50001231000000:2800:D03E8381F1970FFEEA90C5F6EAEB7394E76405B410416F1CCC346D0AA85423A8.gif?needInitFileName=true?needInitFileName=true)

#### 范围选择设置

     * 设置隐藏或显示时分秒
       1. 隐藏小时的显示
              
              timePicker.showHour(false);

**图9** 小时不显示效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113823.38931430164063692625030267650973:50001231000000:2800:AFC38E4B4770B0DEC5E7FEE2735A06460353BFFB1A60AE18989A2D9A6E761E39.gif?needInitFileName=true?needInitFileName=true)

       2. 隐藏分钟
              
              timePicker.showMinute(false);

**图10** 隐藏分钟效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113824.51283654372198854588062744981467:50001231000000:2800:CF67B5FB3A85F7E44DEC26316ECB07764D9843EC3DC8BC56186FB304422BD470.gif?needInitFileName=true?needInitFileName=true)

       3. 隐藏秒
              
              timePicker.showSecond(false);

**图11** 隐藏秒效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113824.17045826240945733232234463703998:50001231000000:2800:45F762E85BE968DE0633551622BAD563C34310E22F72B61F94ACC3E42925CEBF.gif?needInitFileName=true?needInitFileName=true)

     * 设置TimePicker的selector是否可以滑动
       1. 设置小时selector无法滚动选择
              
              timePicker.enableHour(false);

**图12** 小时selector无法滚动选择效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113824.59407278567695228357481508058164:50001231000000:2800:EC9A1A4F154991A0A8FF780EE52BABB08CB224432A6E5CCAC275ABE20573B076.gif?needInitFileName=true?needInitFileName=true)

       2. 设置分钟selector无法滚动
              
              timePicker.enableMinute(false);

**图13** 分钟selector固定无法选择效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113824.52844372866405446585776767956640:50001231000000:2800:876C55D64CC3664222D634938EB2552A55C5A15D7D8FE3D6A8D92A724035F8A1.gif?needInitFileName=true?needInitFileName=true)

       3. 设置秒selector无法滚动
              
              timePicker.enableSecond(false);

**图14** 秒selector无法滚动选择效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113824.10956915830851786038787288613491:50001231000000:2800:76DF93F571709012201E62522BBCE66EDEC5C5027D9A37C08850B5B9C42DEB75.gif?needInitFileName=true?needInitFileName=true)
