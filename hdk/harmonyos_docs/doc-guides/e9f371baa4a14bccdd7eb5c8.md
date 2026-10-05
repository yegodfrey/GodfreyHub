---
name: document/cn/doc-guides/ui-java-component-tablist-tab-0000001062229749
title: TabList和Tab
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ui-java-component-tablist-tab-0000001062229749
source: portal
---

# TabList和Tab

Tablist可以实现多个页签栏的切换，Tab为某个页签。子页签通常放在内容区上方，展示不同的分类。页签名称应该简洁明了，清晰描述分类的内容。

#### 支持的XML属性

     * Tablist的共有XML属性继承自：[ScrollView](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/ui-java-component-scrollview-0000001060965602#section154996161416)

Tablist的自有XML属性见下表：

**表1** Tablist的自有XML属性属性名称 | 中文描述 | 取值 | 取值说明 | 使用案例  
---|---|---|---|---  
fixed_mode | 固定所有页签并同时显示 | boolean类型 | 可以直接设置true/false，也可以引用boolean资源。 | ohos:fixed_mode="true" ohos:fixed_mode="$boolean:true_tag"  
orientation | 页签排列方向 | horizontal | 表示水平排列。 | ohos:orientation="horizontal"  
vertical | 表示垂直排列。 | ohos:orientation="vertical"  
normal_text_color | 未选中的文本颜色 | color类型 | 可以直接设置色值，也可以引用color资源。 | ohos:normal_text_color="#FFFFFFFF" ohos:normal_text_color="$color:black"  
selected_text_color | 选中的文本颜色 | color类型 | 可以直接设置色值，也可以引用color资源。 | ohos:selected_text_color="#FFFFFFFF" ohos:selected_text_color="$color:black"  
selected_tab_indicator_color | 选中页签的颜色 | color类型 | 可以直接设置色值，也可以引用color资源。 | ohos:selected_tab_indicator_color="#FFFFFFFF" ohos:selected_tab_indicator_color="$color:black"  
selected_tab_indicator_height | 选中页签的高度 | float类型 | 表示尺寸的float类型。 可以是浮点数值，其默认单位为px；也可以是带px/vp/fp单位的浮点数值；也可以引用float资源。 | ohos:selected_tab_indicator_height="100" ohos:selected_tab_indicator_height="20vp" ohos:selected_tab_indicator_height="$float:size_value"  
tab_indicator_type | 页签指示类型 | invisible | 表示选中的页签无指示标记。 | ohos:tab_indicator_type="invisible"  
bottom_line | 表示选中的页签通过底部下划线标记。 | ohos:tab_indicator_type="bottom_line"  
left_line | 表示选中的页签通过左侧分割线标记。 | ohos:tab_indicator_type="left_line"  
oval | 表示选中的页签通过椭圆背景标记。 | ohos:tab_indicator_type="oval"  
tab_length | 页签长度 | float类型 | 表示尺寸的float类型。 可以是浮点数值，其默认单位为px；也可以是带px/vp/fp单位的浮点数值；也可以引用float资源。 | ohos:tab_length="100" ohos:tab_length="20vp" ohos:tab_length="$float:size_value"  
tab_margin | 页签间距 | float类型 | 表示尺寸的float类型。 可以是浮点数值，其默认单位为px；也可以是带px/vp/fp单位的浮点数值；也可以引用float资源。 | ohos:tab_margin="100" ohos:tab_margin="20vp" ohos:tab_margin="$float:size_value"  
text_alignment | 文本对齐方式 | left | 表示文本靠左对齐。 | 可以设置取值项如表中所列，也可以使用“|”进行多项组合。 ohos:text_alignment="center" ohos:text_alignment="top|left"  
top | 表示文本靠顶部对齐。  
right | 表示文本靠右对齐。  
bottom | 表示文本靠底部对齐。  
horizontal_center | 表示文本水平居中对齐。  
vertical_center | 表示文本垂直居中对齐。  
center | 表示文本居中对齐。  
start | 表示文本靠起始端对齐。  
end | 表示文本靠结尾端对齐。  
text_size | 文本大小 | float类型 | 表示尺寸的float类型。 可以是浮点数值，其默认单位为px；也可以是带px/vp/fp单位的浮点数值；也可以引用float资源。 | ohos:text_size="100" ohos:text_size="16fp" ohos:text_size="$float:size_value"  
  
     * xml中创建TabList
           
           <?xml version="1.0" encoding="utf-8"?>
           <DirectionalLayout
               xmlns:ohos="http://schemas.huawei.com/res/ohos"
               ohos:height="match_parent"
               ohos:width="match_parent"
               ohos:background_element="black"
               ohos:orientation="vertical">
           
              <TabList
                  ohos:id="$+id:tab_list"
                  ohos:top_margin="40vp"
                  ohos:tab_margin="24vp"
                  ohos:tab_length="140vp"
                  ohos:text_size="20fp"
                  ohos:height="36vp"
                  ohos:width="match_parent"
                  ohos:layout_alignment="center"
                  ohos:orientation="horizontal"
                  ohos:text_alignment="center" />
           
           </DirectionalLayout>

     * 设置默认状态和选中状态的字体颜色和indicator的颜色
           
           <TabList
               ...
               ohos:normal_text_color="#999999"
               ohos:selected_text_color="#FFFFFF"
               ohos:selected_tab_indicator_color="#FFFFFF"
               ohos:selected_tab_indicator_height="2vp"/>

     * TabList中添加Tab
           
           TabList tabList = (TabList) findComponentById(ResourceTable.Id_tab_list);
           TabList.Tab tab = tabList.new Tab(getContext());
           tab.setText("Image");
           tabList.addTab(tab);
           ... //请自行创建其他Tab

     * 设置Tab的布局

在xml中设置Tab的布局
           
           <TabList
           ...
           ohos:tab_margin="24vp"
           ohos:tab_length="140vp"/>

或者在代码中设置Tab的布局
           
           tabList.setTabLength(140 * 3); // 设置Tab的宽度
           tabList.setTabMargin(24 * 3); // 设置两个Tab之间的间距

**图1** 效果展示  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113822.77488048933847507083575551215040:50001231000000:2800:9E8AAD4DBEFA120525EF819C392B72009CF8E4AC88F2DF1DFA888C6DA04DD7D4.gif?needInitFileName=true?needInitFileName=true)

     * 设置fixedMode

默认为false，该模式下TabList的总宽度是各Tab宽度的总和，若固定了TabList的宽度，当超出可视区域，则可以通过滑动TabList来显示。如果设置为true，TabList的总宽度将与可视区域相同，各个Tab的宽度也会根据TabList的宽度而平均分配，该模式适用于Tab较少的情况。
           
           tabList.setFixedMode(true);

**图2** fixedMode设置false/true前后的对比效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113822.87691820193120894618111285062856:50001231000000:2800:1CDF841478D938062FE1774417AD4AA6C66C42A703DBFCDEE64CB5BA1CDE84E1.gif?needInitFileName=true?needInitFileName=true)

     * 在某个位置新增Tab
           
           // 本示例中在"图片"和"视频"之间的页签中新增"新闻"页签
           TabList.Tab tab = tabList.new Tab(getContext());
           tab.setText("News");
           tab.setMinWidth(64);
           tab.setPadding(12, 0, 12, 0);
           tabList.addTab(tab, 1, false); // 1表示位置 false表示不选中

**图3** 在某一位置新增tab的效果  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113822.02189848939805629940547360537399:50001231000000:2800:429BAA2CEC5D55A7FC1413D8970E56802B7BE55383DACD38D734B9BA01372F47.gif?needInitFileName=true?needInitFileName=true)

     * 响应焦点变化
           
           tabList.addTabSelectedListener(new TabList.TabSelectedListener() {
               @Override
               public void onSelected(TabList.Tab tab) {
                   // 当某个Tab从未选中状态变为选中状态时的回调
                   ...
               }
           
               @Override
               public void onUnselected(TabList.Tab tab) {
                   // 当某个Tab从选中状态变为未选中状态时的回调
                   ...
               }
           
               @Override
               public void onReselected(TabList.Tab tab) {
                   // 当某个Tab已处于选中状态，再次被点击时的状态回调
                   ...
               }
           });

**表2** TabList常用接口方法 | 说明  
---|---  
getSelectedTab | 返回选中的Tab  
getSelectedTabIndex | 返回选中的Tab的位置索引  
getTabCount | 获取Tab的个数  
getTabAt | 获取某个Tab  
removeTab | 移除某个位置的tab  
setOrientation | 设置横或竖方向  
  
#### Tab的使用

     * 设置Tab属性
           
           tab.setMinWidth(64);
           tab.setPadding(12, 0, 12, 0);

     * 选中某个Tab
           
           tab.select();

     * 获取Tab在TabList中的位置索引
           
           tab.getPosition();
