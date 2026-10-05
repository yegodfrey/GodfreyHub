---
name: document/cn/other/floating_window-0000001249151166
title: 悬浮窗
uri: https://developer.huawei.com/consumer/cn/doc/other/floating_window-0000001249151166
source: portal
---

# 悬浮窗  
  
#### 悬浮窗介绍

悬浮窗用于在已有的任务基础上，临时处理另一个任务，或短时间多任务并行使用的场景。

支持同时使用多个悬浮窗。手机、折叠屏折叠状态下，一屏幕内最多展开一个悬浮窗；平板或折叠屏展开状态下，一屏幕内最多展开两个悬浮窗。其他悬浮窗自动最小化为悬浮球叠加显示。悬浮窗适用于玩游戏看视频等沉浸式场景下临时回复消息；购物时临时使用计算器计算等。

#### 触发方式

（1）通过一步小窗的手势操作快速让应用从全屏到悬浮窗。本交互适用于所有支持智慧多窗的应用。

（2）智慧多窗应用栏触发：从屏幕边缘向内滑并悬停，拖出应用栏，点击应用图标，打开该应用的悬浮窗。本交互适用于所有支持智慧多窗的应用。

（3）横幅通知触发：沉浸式场景来通知，点击通知，悬浮窗展示。本方式有效解决了查看通知的跨应用跳转痛点。

**5.2.1 悬浮窗口适配指导说明**

适用一步小窗方式触发，侧边应用栏触发和横幅消息触发等方式

     * 悬浮窗代码示例 

1、应用如何声明支持悬浮窗

在 <activity> 或 <application> 节点中设置resizeableActivity属性，启用或禁用多窗口显示：
    
    <application
         android:name=".MyActivity"
         android:resizeableActivity=["true" | "false"] />

设置上述属性为true时，表明应用支持悬浮窗，即可支持一步从全屏触发到悬浮窗。

应用在AndroidManifest.xml中targetSdk大于等于N（24）时，如果应用不显式声明该属性，则默认为true，即支持多窗口。

Android 12（API 级别 31）默认采用多窗口模式。在大屏 (sw >= 600dp) 设备上，不论应用配置为何，所有应用都会在多窗口模式下运行。在小屏设备上，系统会检查 activity 的 [minWidth](https://developer.android.com/reference/android/content/pm/ActivityInfo.WindowLayout#attr_android:minWidth)、[minHeight](https://developer.android.com/reference/android/content/pm/ActivityInfo.WindowLayout#attr_android:minHeight) 和 [resizeableActivity](https://developer.android.com/guide/topics/manifest/application-element#resizeableActivity) 设置以确定该 activity 能否在多窗口模式下运行。

根 activity 的属性设置会应用于其任务堆栈中的所有 activity。例如，如果根 activity 设置了 android:resizeableActivity="true"，那么任务堆栈中的所有 activity 均可调整大小。

2\. 正确使用应用资源

推荐使用Activity作为Context上下文加载合适的资源及做布局运算。如果使用的是 Application Context处理UI 相关的事情，你会发现加载的资源无法感知到多窗口。![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161841.73828678327188726494689035619537:50530628094615:2800:56AE7F97F1A62BB44EB78BBAF44E2963D6F61C0F753EFEB1119AF8FE0271DE1E.png?needInitFileName=true?needInitFileName=true)

使用activity获取特定窗口大小和屏幕大小
    
    activity.getResources().getConfiguration().windowConfiguration.getBounds()

使用activity上下文从资源中获取窗口大小（dp）：
    
    activity.getResources().getConfiguration().screenHeightDp
    activity.getResources().getConfiguration().screenHeightDp

使用activity上下文从资源中获取窗口大小（px）：
    
    activity.getResources().getDisplayMetrics().widthPixels
    activity.getResources().getDisplayMetrics().heightPixels

使用activity上下文从display中获取窗口大小：
    
    activity.getWindowManager().getDefaultDisplay().getMetrics(dm);
    activity.getWindowManager().getDefaultDisplay().getSize(point);

使用activity上下文从display中获取屏幕真实大小（获取屏幕大小也要尽量使用activity上下文，非activity上下文在多屏场景无法正确取到页面所在对应屏幕信息）：
    
    activity.getWindowManager().getDefaultDisplay().getRealMetrics(dm);
    activity.getWindowManager().getDefaultDisplay().getRealSize(point);

3、正确处理Configuration变化

Activity (和 Fragment) 将收到 onConfigurationChanged()方法回调而不是先销毁再重建，并且需要手工管理视图更新，重新加载资源等工作。

     * 千万不要沿用之前的Config信息。可以配置以下信息达到activity走onConfigurationChanged而不是relaunch来重建页面刷新。 
    
    <activity
        android:name=".MyActivity"
        android:configChanges="screenSize|smallestScreenSize|screenLayout|orientation|density" />

在同一块屏上的窗口尺寸大小发生变化时会产生这些变化：screenSize|smallestScreenSize|screenLayout|orientation， 窗口在多屏之间切换时可能还存在density的变化，故上述变化均需要监听和处理。

     * 不要在onDestroy()中调用finish()或其他自行终止进程。这将导致应用程序在多窗口模式切换过程中出现关闭、闪退等问题。 
     * 应用不要自行hook资源上下文的config，由系统统一创建config和Resources对象。 

4、正确获取View的控件位置

多窗口情况下View.getLocationOnScreen和View.getLocationInWindow接口含义不同，前者拿到的控件在屏幕上的位置（相对屏幕左上角起点），后者是控件在窗口内部的位置（相对于窗口左上角起点）

5、Activity 提供以下方法来判别多窗口状态：

     * 调用该方法以确认 Activity 是否处于多窗口模式。
           
           isInMultiWindowMode()

     * 当 Activity 进入或退出多窗口模式时，系统将调用此方法。当 Activity 进入多窗口模式时，系统会向该方法传递 true 值，退出多窗口模式时则传递 false 值。 
    
    onMultiWindowModeChanged()

Fragement也提供了类似接口：Fragment.onMultiWindowModeChanged()。分屏和悬浮窗之间切换则不再通知，因为分屏和悬浮窗都是多窗口状态。

6、不要使用过渡栈中转页面

应用在启动时可能存在使用过渡页面中转的情形，使用过渡页面时不能单独起新栈，否则会导致多窗口的模式无法中继到最终的目标任务栈上，分屏和悬浮窗等多窗口模式都是以任务栈为单位，一旦跨栈则最终的目标栈就是全屏模式。

7、多窗口DecorCaptionView层级设计

悬浮窗场景下，窗口中会被系统插入一个DecorCaptionView标题栏，该标题栏是DecorView的子节点，是ContentView的父节点，应用实现不要在ContentView父节点上插入布局，以免与DecorCaptionView冲突。

8、构建响应式布局

由于多窗口情况下，窗口尺寸会变化，最佳的用户体验，需要实现响应式布局，不同的尺寸下展示不同的布局，例如宽屏下的分栏。尽量根据应用的窗口尺寸大小进行动态布局，不要使用绝对布局。

**注意事项**

Android官方的多窗口设计文档如下：<https://developer.android.com/guide/topics/ui/multi-window.html>

（4）一步窗口触发：点击特定的按钮、菜单项、链接、热区，悬浮窗展示对应的任务。一步窗口的交互需要应用进行适配。

示例

     * 效果示例

**应用一步窗口代码示例** ，以悬浮窗口为例：

以下示例为一个应用通过点击URL链接(此处以[www.baidu.com](https://www.baidu.com/)为例)启动链接查看应用(可能存在多个可响应的应用)到悬浮窗口，代码如下：
    
    Intent intent = new Intent();
    intent.setAction(Intent.ACTION_VIEW);
    intent.setData(Uri.parse("https://www.baidu.com"));
    **intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);**
    ResolveInfo ri = this.getPackageManager().resolveActivity(intent, 0);
    if (ri != null && "com.huawei.android.internal.app".equals(ri.activityInfo.packageName)) {
    intent.putExtra("android.activity.windowingMode", ActivityManagerEx.HW_MULTI_WINDOWING_MODE_FREEFORM,);
    this.startActivity(intent);
    } else {
    ActivityOptions options = ActivityOptions.makeBasic();
    ActivityManagerEx.setLaunchWindowingMode(options, ActivityManagerEx.HW_MULTI_WINDOWING_MODE_FREEFORM, this);
    this.startActivity(intent, options.toBundle());
    }

     * 启动悬浮窗需要指定Intent.FLAG_ACTIVITY_NEW_TASK 来启动新的任务，以免起到原应用栈里 
     * 需要判断打开的应用是否应用选择器，如果是应用选择器(此处以华为应用选择器” com.huawei.android.internal.app”为例)，则需要把窗口类型设置到extra字段数据中，由选择器启动悬浮窗(选择器应用需要适配，华为应用选择器已经适配) 
     * 如果不是应用选择器，则直接通过在ActivityOptions中设置窗口启动模式为悬浮窗口来启动悬浮窗。 

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161841.29796123499319921942839215177482:50530628094615:2800:2810B3C6334EE67FF57F041BA83F044843D39BFC7721E139CA3D4EC0C061F599.png?needInitFileName=true?needInitFileName=true)

       * 发启方如果识别到是**启动选择器** 的，则**不能在****intent****里放入自定义数据类型的数据到****intent** 中，否则选择器无法获取到窗口类型的extra数据 
       * 启动悬浮窗需要指定启动窗口类型ActivityManagerEx.HW_MULTI_WINDOWING_MODE_FREEFORM 
       * 目前发起方需要申请系统级权限<uses-permission android:name="com.huawei.permission.SET_WINDOW_MODE" />

#### 两种悬浮窗

目前支持 2 种悬浮窗：

     * 应用悬浮窗：悬浮窗承载整个应用的功能，在同一个悬浮窗内可进行应用内不同功能的切换和跳转。 
     * 任务悬浮窗：悬浮窗承载一个特定的任务，悬浮窗内只能执行本任务相关的功能。 一步窗口属于任务悬浮窗的一种应用场景。 

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161842.81053368095371680565545169992145:50530628094615:2800:008B4BD330782B58B4E473824C42FF8F46F4DC7897F1F5EE30FAE91CD1823694.jpg?needInitFileName=true?needInitFileName=true) 应用悬浮窗 | ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161842.66739675087154125910197779201219:50530628094615:2800:CEB9F24AED9600BD298E5775E4A7EC0695E5280B14A0F0FB5B652C816CA7B244.jpg?needInitFileName=true?needInitFileName=true) 任务悬浮窗  
---|---  
  
#### 悬浮窗的运用

#### [h2]应用悬浮窗实现多任务并行

支持多实例的应用，可通过悬浮窗实现一个应用的多任务并行。

最常见的方式是全屏打开应用后，再从侧边栏再次打开此应用的悬浮窗。

例如对照旧邮件撰写新邮件、购物时打开两个商品页进行不同商品型号的对比等。应用悬浮窗和任务悬浮窗均可实现此功能。

通过应用悬浮窗实现单应用多任务并行的示例

示例

     * 效果示例 
     * **单应用悬浮窗多任务实例代码示例**

单应用启动的多个悬浮窗任务的适用于同类型且同时操作的场景，移动办公类居多，例如：

1）文档处理应用同时打开多个文档窗口

2）记事本、邮件类同时打开多个编辑框界面等

应用在启动的多个实例窗口之间无依赖关系，彼此独立，且可以快速结束，使用完毕主动去finish销毁activity窗口。

单应用多实例运行到悬浮窗示例代码，以示例页面“com.huawei.android.extdisplay.test.MultiFreeformTestActivity”为例，将其启动到悬浮窗口代码如下：
    
    Intent intent = new Intent();
    intent.setClassName(this, "com.huawei.android.extdisplay.test.MultiFreeformTestActivity");
    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_MULTIPLE_TASK | Intent. FLAG_ACTIVITY_RETAIN_IN_RECENTS);
    ActivityOptions options = ActivityOptions.makeBasic();
    ActivityManagerEx.setLaunchWindowingMode(options, ActivityManagerEx.HW_MULTI_WINDOWING_MODE_FREEFORM, this);
    this.startActivity(intent, options.toBundle());

     * 启动多任务需要指定标志位Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_MULTIPLE_TASK 
     * 启动悬浮窗需要指定启动窗口类型ActivityManagerEx.HW_MULTI_WINDOWING_MODE_FREEFORM 

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161842.76764540157458694968691404227081:50530628094615:2800:A9B185F28510FAE0ADEDD8EE13FF7AF88DF26A06D42148E9CC1844731FD1C1AB.png?needInitFileName=true?needInitFileName=true)

允许起多个实例的activity不能配置singleTask和singleInstance标记，且应用需要声明以下metadata信息供系统识别app是否支持多实例
           
           <meta-data
              android:name="com.huawei.android.multiwindow.multiinstance.enable"
               android:value="true">
           </meta-data>

#### [h2]任务悬浮窗实现一步窗口

想要有更自然的交互体验，更推荐应用进行“应用内触发任务悬浮窗”的适配。

全屏使用应用A时，在应用A内的菜单项或特定按钮触发任务悬浮窗。应用调用华为提供的“应用内触发多任务悬浮窗”接口后，可自定义其应用内的触发入口。

例如应用内通过长按等操作，打开菜单项，菜单中提供“切换为悬浮窗”或“用悬浮窗显示”的选项等。应用根据业务需求，列举需要调用一步窗口的场景，对系统提出调用一步窗口的请求，系统提供一步窗口的能力。

在特定场景下，点击控件、按钮、链接、附件等，直接打开一个任务悬浮窗，即为一步窗口。

一步窗口主要适用于跨应用的跳转。适用于查看IM类通知、应用内拨打电话、应用内查看地图、应用内查看附件等场景。

通过任务悬浮窗实现一步窗口

示例

     * 效果示例 
     * 代码示例：同前述 **应用一步窗口代码示例**
