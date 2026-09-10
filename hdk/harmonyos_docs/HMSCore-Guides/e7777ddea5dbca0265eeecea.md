---
name: document/cn/HMSCore-Guides/adaptation-guidance-0000001054031462
title: 适配指导
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/adaptation-guidance-0000001054031462
---

# 适配指导

#### 平行视界状态接口

#### 如何判断Activity是否运行在平行视界状态

获取Activity是否运行在平行视界状态的接口：

```
String config = context.getResources().getConfiguration().toString();
boolean isInMagicWindow = config.contains("hw-magic-windows");
context为Activity的context
```

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230912163206.81280343323613673142013323973396:50001231000000:2800:3A13B4DB37D719C348C10A319E425C6E57ECE549220338EBCC83CEE3FA05BD27.png?needInitFileName=true?needInitFileName=true)  
部分Activity在平行视界下即使显示状态为全屏，其状态仍处于平行视界状态。  

#### 如何获取Activity实际显示的窗口大小

推荐使用：context.getResources().getDisplayMetrics()

不推荐使用：context.getWindowManager().getDefaultDisplay().getMetrics(outMetrics)

上述接口中，context为Activity对应的上下文句柄，每个Activity应该严格使用自己的context来进行布局，而不是使用application的context。  

#### 如何获取Activity的窗口布局方向

获取Activity窗口方向的的方法为：

```
context.getResources().getConfiguration().orientation
```

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230912163206.54719274342041943082567413992870:50001231000000:2800:C06BB770437586F8AE88ABF16BA0389CC613D1511258D8C01EBFA7CB0BE4C1B4.png?needInitFileName=true?needInitFileName=true)  
* 不推荐使用width \> height的方法来判Activity为横屏布局，因为在平行视界双窗口状态下，支持应用内拖动的场景中，其中一个Activity的宽可能大于高，但通过上述接口获取的orientation统一为竖屏。
* 如果Activity是在平行视界状态下全屏显示，其orientation为值为横屏。  

#### 窗口显示

#### 以Activity组件为单位的窗口分离显示

平行视界中窗口在左右两边拆分显示以Activity组件为基本单位，应用窗口需以Activity来实现和启动，才能做到左右窗口独立分离显示。例如，ActivityA在左半边显示，如果想让其点开的新窗口在右半边显示，那么新窗口必须以Activity方式实现，如果只是打开一个Activity窗口上的子布局或者非Activity实现的子窗口（ViewGroup/Fragment/PopUpWindow/Dialog等），新窗口是无法拆分在右半边显示的。  

#### 指定Activity全屏显示

平行视界状态下，Activity希望以全屏来显示，有三种方法：

* 方法一：动态全屏显示，Activity首先以平行视界非全屏显示，调用Activity类的如下接口申请横屏方向可进入全屏显示状态：

  ```
  setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE)
  ```

  在此状态下，调用Activity类申请竖屏方向即可退出全屏状态：

  ```
  setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT)
  ```

  此场景广泛应用于视频全屏播放场景。
* 方法二：在"easygo.json"文件中Activities属性集中将Activity的defaultFullScreen配置为true，即可实现Activity默认以全屏启动，此方法中，Activity会一直以全屏状态显示：

  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230912163206.66133694745156488304399694880487:50001231000000:2800:14B626837C1CDE2F8C8D25C9903C8931253419E53BD17DB5475EAADAD372C598.png?needInitFileName=true?needInitFileName=true "点击放大")
* 方法三：在"AndroidManifest.xml"文件中将Activity的方向配置为横屏，此方法中，Activity会一直以全屏状态显示

  ```
  android:screenOrientation = “landscape”
  ```

  或者

  ```
  android:screenOrientation = “sensorLandscape”
  ```

#### 建议应用主界面Activity以单实例实现

强烈建议：

* 应用主界面Activity的启动以singleTask的模式来启动，保证其在栈内的唯一性。
* 应用内不要存在两个及以上组件名不一样的主界面Activity，例如某个应用在登录前的主界面Activity组件名与登录后的Activity组件名不同，会导致新的主界面Activity显示在右半边。  

#### 尽量避免或者减少过渡Activity的使用

建议尽量避免或者减少使用过渡Activity来实现Activity的启动，如果一定要使用，建议使用ActivityA-\>ActivityB-\>ActivityC的启动方式，而不是(ActivityA-\>ActivityB) + (ActivityA-\>ActivityC)的方式（示例中，ActivityB为过渡Activity）。

过渡Activity的数量不能超过1个，例如ActivityA-\>ActivityB-\>ActivityC-\>ActivityD，其中ActivityB和ActivityC是过渡窗口，平行视界模式下建议从ActivityA直接启动ActivityC。  

#### 应用内窗口锁定功能适配

支持锁定的应用在双窗口显示状态会显示锁定按钮，用户点击后可以进行锁定和解锁操作，锁定后，左右窗口不再关联，即左侧打开新窗口在左侧显示，右侧打开新窗口在右侧显示，由于左右两侧任务独立，所以部分Activity可能被同时打开多个实例，比如对于聊天类的应用，左右可以同时显示聊天窗口，应用需要对Activity进行多实例的适配：

* 支持多实例：Activity的launchMode需配置成standard或singleTop，同一个Activity的多个实例之间应尽量避免使用全局共享的状态、变量或对象。
* 支持单实例：Activity的launchMode需配置成singleTask或者singleInstance，建议首选singleTask， 此类Activity启动时，如果栈内已经存在实例(平行视界下左右Activity属于同一个栈)，会直接复用现有实例，不会创建新的实例。

建议主界面、拍照、视频通话等关键Activity配置成单实例模式，建议将聊天界面、新闻详情、商用详情等Activity配置成多实例模式。  

#### Activity布局

#### Activity大小切换时不重启适配

强烈建议应用在Activity窗口大小切换时不重启适配，在android:configChanges属性增加screenSize\|screenLayout\|orientation\|smallestScreenSize，并在Activity的onConfigurationChanged回调中更新宽高刷新子布局。  

#### 避免Activity子布局的缺省重用

平行视界下，左右Activity同时显示，左右显示的两个Activity中不能同时存在单实例的公共布局模块。  

#### 布局自适应

应用复写onConfigurationChanged()方法，通过该方法的Configuration参数获得窗口高度等信息，并对界面布局做相应调整，如切换布局、调整控件位置和间距等。

```
@Override
public void onConfigurationChanged(Configuration newConfig) {
// 以dp为单位的窗口大小
super.onConfigurationChanged(newConfig);
Log.i("test", "newConfig.screenHeightDp:" + newConfig.screenHeightDp
+ ", newConfig.screenWidthDp" + newConfig.screenWidthDp);
}
```

平行视界模式下，应用通过如下接口获取到的是应用窗口实际宽高大小：

```
context.getResources().getDisplayMetrics()
context.getWindowManager().getDefaultDisplay().getMetrics(outMetrics)
// context为Activity对应的context对象。
```

#### Activity生命周期

#### 左右Top Activity同时以multi-resume运行

平行视界双窗口状态下，右边Top Activity始终为resumed状态，左边Top Activity为resumed或者paused状态，系统默认应用支持multi-resume，如果应用希望不支持multi-resume，可以在应用AndroidManifest.xml中增加meta-data字段来关闭：

```
meta-data android:name="android.allow_multiple_resumed_activities" android:value="false"
```

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230912163206.74430369856250796388389354690278:50001231000000:2800:5AFBEEFF3193212FE6F85669CAE01B9BFBBFCD9891AFE8E0C58CB52FD43E08AE.png?needInitFileName=true?needInitFileName=true)  
multi-resume关闭后，应用在其它多窗口状态下也不会再支持multi-resume子特性，同时可能存在Activity失去焦点后音视频播放停止的问题，所以建议应用在关闭multi-resume后，在Activity的onStop而不是onPause中停止音视频的播放。  

#### 音视频播放

#### 支持左右两边Activity同时播放，用户具有绝对的控制权

左右两个Activity可以同时播放，用户主动点击播放/暂停按钮可以控制任意一个窗口的音视频播放状态。  

#### 避免左右两个Activity共用一个播放器

左右两个Activity同时显示，建议两边使用的播放器资源相互独立，互不影响。  

#### Camera适配（仅适用于平板）

#### 平行视界下Camera角度无须额外适配，建议使用通用的接口获取Rotation

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230912163207.01626288970673146176422117329689:50001231000000:2800:7CEF7F73260226D71E9E32A193870F6C9EE1AAE1DFB0597D7CEA187899FE53FA.png?needInitFileName=true?needInitFileName=true "点击放大")

如上图，平行视界下应用无须作额外适配，对camera的处理方法同非平行视界状态保持一致。

此外，应用获取Rotation传感器角度的方法建议使用如下接口：

```
getWindowManager().getDefaultDisplay().getRotation()
```

#### Camera图像分辨率比例应该以实际窗口宽高来设置，且不大于1920\*1920

1. 建议Camera相关的Activity界面配置为全屏显示。
2. 应用应根据Activity窗口的实际显示宽高比例来设置对应的Camera图像分辨率,比如应用在平行视界双窗口下，Activity窗口的显示比例为4:3，则需要设置4:3的Camera图像分辨率。
3. 平行视界双窗口状态下，应用设置的Camera图像分辨率必须小于1920\*1920。
