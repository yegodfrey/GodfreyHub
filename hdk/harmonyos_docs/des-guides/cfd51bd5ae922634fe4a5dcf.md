---
name: document/cn/des-guides/title-bar-0000001156785281
title: 标题栏
uri: https://developer.huawei.com/consumer/cn/doc/des-guides/title-bar-0000001156785281
source: portal
---

# 标题栏

标题栏放在界面顶部，用于呈现界面名称和操作入口。在大部分情况下，标题栏左侧显示一个文本标题，以帮助用户理解当前看的是什么界面。在二级界面，文本标题左侧还需要提供一个返回按钮，用于指示当前界面的层级，用户点击返回按钮，可以返回到上一个层级界面。标题栏右侧还可以放置常用操作的图标，用户点击执行对应的操作。所有常规设计界面都需要提供标题栏。在沉浸式界面，可以考虑不显示标题栏。

#### 类型

     * 一级界面标题栏 
     * 非一级界面标题栏 
     * 编辑／选择界面标题栏 

#### 如何使用

#### [h2]一级界面标题栏

分为普通标题栏和强调型标题栏。

     * 普通标题栏用于不需要突出标题的场景，一般用于工具界面或内容型界面，例如闹钟、音乐等。这类应用，更加突出功能或内容的显示，因此不需要突出标题。 
     * 强调型标题栏用于需要突出标题的场景，一般用于效率型应用界面的一级界面。例如联系人、设置等。这类应用，需要体现操作效率，因此默认会让整个页面下沉，方便用户单手操作。 

**普通标题栏**

支持单行标题、子页签型标题两种样式。

子页签型标题用于切换页面的内容，只支持在一级界面中使用。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.78677634161524341151942314557420:50001231000000:2800:BA9CAC925CE704EF57B017208A36576E45733DFA1A2D4ECF1B1E7CA07F32A858.png?needInitFileName=true?needInitFileName=true) 单行标题 | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.37053043490465659920084072204461:50001231000000:2800:9002A3E56A537AE6FF3D4D00220C30E835811744F0F0C63C1FE9131BF0857397.png?needInitFileName=true?needInitFileName=true) 子页签型标题  
---|---  
  
**强调型标题栏**

支持显示单行标题、双行标题以及下拉菜单型标题样式。

双行标题的第二行标题用于显示一些辅助信息。

下拉菜单型标题，用来切换页面内容的展示。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.50116043963482912799035111185155:50001231000000:2800:046A187E72F7BFF5720771830DCCB86CFFCF8BE30E7C1DB5F3E4AE8EB588F476.png?needInitFileName=true?needInitFileName=true) 单行标题 | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.75107150992170733886456833373974:50001231000000:2800:309C9304E34DF8849202F3498383624A4ABDE80B6FC638AC85A0BB5247299735.png?needInitFileName=true?needInitFileName=true) 双行标题  
---|---  
  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.25103593434969049228214932519930:50001231000000:2800:9648904D69D217A01EFF008AA64F361B6A10D1E717363098BD0114671DDF895A.png?needInitFileName=true?needInitFileName=true) 下拉菜单型标题 |     
---|---  
  
#### [h2]非一级界面标题栏

     * 非一级界面的标题是界面的名称。非一级界面标题的左侧需要显示“返回”图标，用于指示用户可以回到上一个视图或层级。 
     * 双行标题中的第二行标题，用于对第一行标题进行辅助说明。 
     * 【不推荐】当需要有多个视图可以切换，但除默认视图外其他视图极少使用时，可以使用下拉菜单型标题。这种做法会导致下拉菜单型标题里面的内容被隐藏，降低用户的使用，因此不推荐使用。 

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.76361187176446045465614170857355:50001231000000:2800:702D23B63C5D0E4205356DB38B072A5F3518107475BA8D343D145DB6E6EADA4A.png?needInitFileName=true?needInitFileName=true) 非一级界面 |     
---|---  
  
#### [h2]编辑界面标题栏

一般使用左“×”或“←”、右“√”的形式。

标题：“新建×××”或“编辑×××”。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.24086987140791107516683165684362:50001231000000:2800:6B2A0E2D9F73EA0B78D3B6552791985B51748E81BCA44FF809310A02C873DDB4.png?needInitFileName=true?needInitFileName=true) 点击“×”取消编辑，点击“√”保存编辑 | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.27762253294066216965023160883924:50001231000000:2800:0D7536BB5DFAD85BC94533E4C39EF6D323B9FA20EC4AAF60C68AC803F5C5F6B7.png?needInitFileName=true?needInitFileName=true) 点击“←”退出编辑并保存，点击“√”保存编辑  
---|---  
  
#### [h2]选择界面标题栏

关闭按钮×：选择界面的标题栏左侧使用“×”按钮，点击后退出选择界面。

标题：“未选择”或“已选择 × 项”。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.23163487871478546211518392823365:50001231000000:2800:8E9030124115E6EC260E4B26DC917487468879BCC48F162C5F4ED1E5E8074AA7.png?needInitFileName=true?needInitFileName=true) 未选择目标项 | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.17890356009370054793083096529492:50001231000000:2800:5999577278249171BEA0EE2EA1E5B5831408E393A10C7124A036F12656BE721A.png?needInitFileName=true?needInitFileName=true) 已选择目标项  
---|---  
  
#### 通用元素构成

标题栏一般由左侧图标、标题、右侧功能图标组成。标题栏的元素构成分为左右两部分。

类型 | 左侧图标 | 标题 | 右侧功能图标  
---|---|---|---  
一级界面 | 没有图标 | 可换一行 | 最多放三个  
非一级界面 | 只能放返回图标 | 可换一行 | 最多放三个  
编辑界面 | 返回或打叉 | 可换一行 | 只能放勾  
选择界面 | 打叉 | 可换一行 | 只能放勾  
  
#### [h2]标题

     * 区分一级界面与非一级界面标题； 
     * 带下拉按钮以及带子页签的一级界面标题是当前所选栏目的名称。 
     * 【不推荐】当需要有多个视图可以切换，但除默认视图外其他视图极少使用时，可以使用下拉菜单型标题。这种做法会导致下拉菜单型标题里面的内容被隐藏，降低用户的使用，因此不推荐使用。 

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.29122922872721882665568902773342:50001231000000:2800:82E7807DDBED138E1570C37AB336AF9F4EB8828E547B5785652BD18A6C6FAB72.png?needInitFileName=true?needInitFileName=true) 标题+操作按钮 | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.85239693181471469591529703610427:50001231000000:2800:17775A1F6E2B978819CF9A3206148E259A9EECD76B977D100A19A8197AB5D786.png?needInitFileName=true?needInitFileName=true) 左侧为下拉按钮  
---|---  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.27330928479414107246777663085473:50001231000000:2800:65C602D1719FD72B8C23C57CA4E8CD3EF7F17034AD2682CEC7C3745172F37249.png?needInitFileName=true?needInitFileName=true) 子页签型标题 |     
  
#### [h2]操作图标和更多图标放置

标题栏应避免放置多个操作图标。手机：竖屏最多支持 3 个图标（含菜单），横屏最多支持 5 个图标（含菜单）。平板：横竖屏最多支持 5 个图标（含菜单）。

按照重要性从左往右排，任何不常用的操作都应该放进“更多”里面 (即使只有一个操作）。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.76174040303125327508181679236916:50001231000000:2800:EF3862834A55347E3A00B9A0F8063BDCE7B979AE0D313721E8840E18C73F0F9E.png?needInitFileName=true?needInitFileName=true)

#### 交互规则

#### [h2]滚动操作

在内容区滚动时，顶部标题栏可固定在界面顶部，或变化标题栏（隐藏/缩小）。提供隐藏标题栏可以带来沉浸式体验。

**标题栏固定在顶部**

内容区往上或往下滚动时，顶部标题栏不隐藏。

**标题栏上滑缩小**

内容区域滚动时，强调型标题栏可缩小成普通型标题栏

单行标题：一级界面，内容区向上滚动时，标题随着内容向上滚动，标题字体缩小。向下滚动恢复至原大小。

双行标题：在顶部标题栏缩小高度情况下，标题随着内容向上滚动而缩小（子标题的大小不变、淡出）。向下滚动内容到顶时则恢复原样。

#### [h2]滑动操作

带有子页签的标题栏支持通过滑动切换页签；

获焦放大的页签位置，需要判断最后一个页签是否在一屏的界面内显示完整来确定位置；

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.23345720466878902724627305761148:50001231000000:2800:138820E68617C6A40D78C66A9A7F3F899E210655A3BA46D26CE5271E09BFB8BF.png?needInitFileName=true?needInitFileName=true) 如最后一个页签在界面内显示完整， 则获焦的页签跟随滑动方向进行反向切换；（往左滑时，页签一切换到页签二） | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165138.05879838747243870475247863261296:50001231000000:2800:C045162241BF6F2969A3EA0AAFCBEC54A13A6EC59413D85555DEC24ADE82FAC6.png?needInitFileName=true?needInitFileName=true) 如最后一个页签在界面内显示不全或不显示 则获焦页签固定在左侧  
---|---  
  
#### 视觉规则

#### [h2]主题样式

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165139.72193666369432074164445776690757:50001231000000:2800:9B24280BB32A5AE054A4208993EF5A35633F7B41C95A6D1422B92A31EE033F63.png?needInitFileName=true?needInitFileName=true)

浅色主题

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165139.53524561709061852982987496918394:50001231000000:2800:FB70213BB0BDD3BA44716C5552C5542E4DAFEC8246B79EA468A14299C37BC759.png?needInitFileName=true?needInitFileName=true)

深色主题

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165139.95189705982093275217565481660302:50001231000000:2800:FABE6DD53A678FD640E1AFD2481A0C2D591D57A001F405F92D25ED01AE71A6E3.png?needInitFileName=true?needInitFileName=true)

半透明度主题

#### [h2]布局样式

横屏

     * 标题栏布局与竖屏一致，右侧图标为竖屏下工具栏+标题栏上所有功能图标的集合。 
     * 手机端除Launcher应用，状态栏默认不显示，标题栏紧贴屏幕开始显示，高度为 56vp。 

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165139.12671997152587430430135921741674:50001231000000:2800:98B7A9E33CBA2FB423098F756775805F0B6075291E6335C0C148894B39EC496D.png?needInitFileName=true?needInitFileName=true)

平板

     * 支持普通标题栏。 
     * 支持强调型标题栏。 
     * 规则与手机一致。 

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230524165139.74252536357140746979457250759556:50001231000000:2800:68A17A76672882758447C694588DDF4098024B8E4E798D2F88A3BE040399C103.png?needInitFileName=true?needInitFileName=true)

平板效果

#### 界面写作规则

     * 标题简洁明了。 
     * 标题和进入该页面的上一级界面的功能选项名称保持一致。 
     * 无标点，以名词短语为主。 
