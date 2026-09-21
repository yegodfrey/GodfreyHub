---
name: document/cn/architecture-guides/online_sheet-0000002749548487
title: Web在线表格场景实践
uri: https://developer.huawei.com/consumer/cn/doc/architecture-guides/online_sheet-0000002749548487
---

# Web在线表格场景实践

## 场景介绍

在线表格类应用（在线文档、报表工具、数据填报）在移动端普遍使用Web容器承载表格页面，单元格内容的复制粘贴是高频操作。HarmonyOS上Web容器内的文本选择与复制粘贴默认依赖系统文本菜单：样式与交互固定、无法定制，与应用的视觉风格割裂；菜单的出现时机也难以与网页内部的编辑状态协同，例如编辑单元格时长按会误弹系统菜单，交互体验不连贯。

本示例基于ArkUI[Web组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web)提供一套完整实现：用javaScriptProxy注册应用侧与网页侧的双向通信桥，用editMenuOptions屏蔽系统文本菜单，用[popup弹窗](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup)在透明锚点上定位自定义气泡菜单，结合[剪贴板](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-pasteboard)与[访问控制管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl)打通复制粘贴的权限链路，形成"长按选区→气泡菜单→复制/剪切/粘贴"的完整交互闭环。

粘贴环节实现为两种可插拔策略并存对比：方案A由应用侧申请READ_PASTEBOARD授权后读取系统剪贴板，经runJavaScript将文本注入网页选区，全链路可观测、可干预，粘贴为纯文本。方案B通过[UIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-uicontext)的dispatchKeyEvent向Web组件分发KEYCODE_PASTE按键，由Web内核执行内置粘贴，保留选区替换与富文本语义。两个方案在首页以两个独立表格文件入口呈现，表格数据编辑后经[用户首选项](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-preferences)按方案隔离持久化，重进页面自动恢复。

## 效果预览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/S1h_ggNqQXufG4tmqCX-kg/zh-cn_image_0000002749633349.png?HW-CC-KV=V1&HW-CC-Date=20260921T035900Z&HW-CC-Expire=31536000000&HW-CC-Sign=956659D360FE52B2260C6505DC91CA29DF0B47F71E591725FCDB5141A80BE467 "点击放大")

## 实现思路

1. **屏蔽系统文本菜单**

   **置空onCreateMenu的返回值，接管文本操作入口。** Web组件的editMenuOptions属性用于自定义文本选中菜单，onCreateMenu返回空数组即可完全屏蔽系统菜单；onMenuItemClick返回true表示拦截系统菜单项的点击。系统菜单被屏蔽后，长按选中文本不再弹出系统UI，为自定义气泡菜单让出交互入口。

   ```ts
   // SheetPage.ets
   private editMenuOptions: EditMenuOptions = {
     onCreateMenu: (): Array<TextMenuItem> => {
       return [];
     },
     onMenuItemClick: (): boolean => {
       return true;
     }
   };
   ```

2. **搭建应用侧与网页侧的双向通信桥**

   **网页侧到应用侧用javaScriptProxy，应用侧到网页侧用runJavaScript。** Web组件加载本地sheet.html后，网页侧通过window.SheetBridge对象回调应用侧，包括选区变化、数据变化、页面就绪、复制/剪切/粘贴请求；应用侧通过[WebviewController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-webview)的runJavaScript调用网页侧全局函数（onMenuClick、loadSheetData、pasteFromApp）。注入JSON或文本前需转义反斜杠、单引号与换行，防止注入的脚本语法被破坏。

   ```ts
   // SheetPage.ets
   Web({ src: $rawfile('sheet.html'), controller: this.controller })
     .javaScriptAccess(true)
     .domStorageAccess(true)
     .javaScriptProxy({
       object: this.bridge.getBridgeObj(),
       name: JS_BRIDGE_NAME,
       methodList: ['onSelectionChange', 'onDataChange', 'onMenuReady', 'onCopy', 'onCut', 'onPaste'],
       controller: this.controller
     })
     .editMenuOptions(this.editMenuOptions)
     .focusable(true)
     .id(WEB_COMPONENT_ID)
   ```

   ```ts
   // SheetBridge.ets
   let escapedData: string = data.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
   let script: string = JS_FUNC_LOAD_DATA + "('" + escapedData + "')";
   this.controller.runJavaScript(script);
   ```

3. **单元格交互状态机与长按整格选中**

   **单击选中、再次单击编辑、长按弹菜单，三种交互互斥。** 网页侧用独立模块state-machine.js实现交互状态机：单击单元格仅高亮选中，不弹键盘不弹菜单；再次单击同一格进入编辑态，光标置于末尾并聚焦弹出键盘；长按（touchstart启动500ms定时器，touchmove或touchend取消）触发整格选中------对单元格施加selectNodeContents选区保证复制内容完整，主动blur收起键盘不进入编辑态。长按松手后400ms内抑制合成click，避免误入"再次单击=编辑"分支。

   ```js
   // state-machine.js
   document.addEventListener('touchstart', function (e) {
     if (e.touches && e.touches.length > 0) {
       lastPoint.x = e.touches[0].clientX;
       lastPoint.y = e.touches[0].clientY;
       longPressPoint = { x: lastPoint.x, y: lastPoint.y };
       if (longPressTimer) {
         clearTimeout(longPressTimer);
       }
       longPressTimer = setTimeout(onLongPressDetected, 500);
     }
   }, { passive: true });

   function onLongPressDetected() {
     longPressTimer = null;
     if (!longPressPoint) {
       return;
     }
     suppressClickUntil = Date.now() + 400;
     let el = document.elementFromPoint(longPressPoint.x, longPressPoint.y);
     let td = el && el.closest ? el.closest('td[contenteditable="true"]') : null;
     if (!td) {
       return;
     }
     editingCellKey = null;
     selectedCellKey = null;
     clearCellSelection();
     let range = document.createRange();
     range.selectNodeContents(td);
     let sel = window.getSelection();
     sel.removeAllRanges();
     sel.addRange(range);
     if (document.activeElement && document.activeElement.blur &&
       document.activeElement !== document.body) {
       document.activeElement.blur();
     }
   }
   ```

4. **气泡菜单定位与展示**

   **网页侧计算选区矩形，应用侧用透明锚点加bindPopup还原菜单位置。** 网页侧监听selectionchange（100ms防抖）计算选区矩形并组装菜单信息：有选中文本时组装完整菜单（复制/剪切/粘贴/全选），光标落在非编辑中的单元格内时仅组装"粘贴"。ArkWeb中collapsed选区的rect为零矩形，会导致菜单定位到页面左上角，此时用最近触点坐标兜底。菜单信息经JSB传给应用侧后，锚点四参数（宽、高、左边距、上边距）捆绑为一个@Trace对象，一次赋值只触发一次UI刷新，状态管理使用[@ObservedV2和@Trace装饰器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-observedv2-and-trace)。

   ```js
   // sheet.html
   let range = sel.getRangeAt(0);
   let rect = range.getBoundingClientRect();
   if (!rect || rect.width <= 1 || rect.height <= 1) {
     let point = SheetInteraction.getLastPoint();
     rect = {
       left: point.x,
       top: point.y,
       right: point.x + 1,
       bottom: point.y + 1
     };
   }
   ```

   ```ts
   // SheetViewModel.ets
   @ObservedV2
   export class SheetViewModel {
     @Trace anchor: AnchorPosition = new AnchorPosition();
     @Trace showPopupMenu: boolean = false;
     @Trace menuItems: MenuItemData[] = [];
   }
   ```

   应用侧在全屏Stack内叠加一个透明Row锚点，将锚点的尺寸与边距绑定到选区矩形，bindPopup挂在锚点上即可让菜单贴着选区显示：

   ```ts
   // SheetPage.ets
   Stack() {
     Web({ src: $rawfile('sheet.html'), controller: this.controller })
     Row()
       .width(this.viewModel.anchor.anchorWidth)
       .height(this.viewModel.anchor.anchorHeight)
       .clip(true)
       .margin({
         left: this.viewModel.anchor.anchorMarginLeft,
         top: this.viewModel.anchor.anchorMarginTop
       })
       .bindPopup(this.viewModel.showPopupMenu, {
         builder: this.popupMenuBuilder,
         enableArrow: false,
         placement: Placement.Top,
         autoCancel: true,
         mask: false,
         radius: 8,
         popupColor: Color.Transparent,
         onWillDismiss: (action: DismissPopupAction): void => {
           action.dismiss();
           this.viewModel.hideMenu();
         }
       });
   }
   .alignContent(Alignment.TopStart)
   ```

   气泡菜单内容由@Builder函数实现，无组件实例创建开销：

   ```ts
   // SelectionPopupMenu.ets
   @Builder
   export function SelectionPopupMenuBuilder(menuItems: MenuItemData[],
     onItemClick: (item: MenuItemData) => void) {
     Row({ space: 0 }) {
       ForEach(menuItems, (item: MenuItemData) => {
         Text(item.text)
           .fontSize($r('app.float.font_size_14'))
           .fontColor($r('app.color.color_white'))
           .onClick(() => {
             if (onItemClick) {
               onItemClick(item);
             }
           })
       }, (item: MenuItemData) => item.id)
     }
     .backgroundColor($r('app.color.popup_background'))
     .borderRadius($r('app.float.radius_8'))
   }
   ```

5. **复制与剪切**

   **菜单点击先由网页侧决定语义，再回调应用侧执行。** 应用侧收到菜单点击后通过runJavaScript调用window.onMenuClick，网页侧按菜单项id分发：复制将选中文本经onCopy回调给应用侧，由ClipboardService写入系统剪贴板（写入无需权限）；剪切在复制的基础上由网页侧删除选区内容并同步数据。全选在网页侧直接完成，不经过应用侧。

   ```js
   // sheet.html
   window.onMenuClick = function(item) {
     if (!item || !item.id) return;
     switch (item.id) {
       case 'COPY':
         let sel = window.getSelection();
         if (sel && sel.rangeCount > 0 && window.SheetBridge && window.SheetBridge.onCopy) {
           window.SheetBridge.onCopy(sel.toString());
         }
         break;
       case 'CUT':
         let selCut = window.getSelection();
         if (selCut && selCut.rangeCount > 0 && window.SheetBridge && window.SheetBridge.onCut) {
           window.SheetBridge.onCut(selCut.toString());
           selCut.getRangeAt(0).deleteContents();
         }
         break;
       case 'PASTE':
         if (window.SheetBridge && window.SheetBridge.onPaste) {
           window.SheetBridge.onPaste();
         }
         break;
     }
   };
   ```

   ```ts
   // ClipboardService.ets
   let pasteData: pasteboard.PasteData =
     pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, content);
   pasteboard.getSystemPasteboard().setData(pasteData);
   ```

6. **粘贴方案A：JSB注入**

   **先授权、再读剪贴板、后注入选区。** READ_PASTEBOARD是user_grant加ACL受限权限，除module.json5声明外还需按[受限开放权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions)流程在AGC申请通过后签名才可安装，运行时以requestPermissionsFromUser弹窗授权（首次粘贴弹一次）。授权是异步操作，必须await完成后再读剪贴板，否则粘贴失败。读到的文本经runJavaScript调用window.pasteFromApp插入当前选区，网页侧插入后500ms内抑制菜单复弹并同步数据。

   ```ts
   // PermissionService.ets
   let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
   let grantStatus: abilityAccessCtrl.GrantStatus = await atManager.checkAccessToken(
     context.applicationInfo.accessTokenId, PermissionService.READ_PASTEBOARD);
   if (grantStatus !== abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED) {
     let result: PermissionRequestResult =
       await atManager.requestPermissionsFromUser(context, [PermissionService.READ_PASTEBOARD]);
     return result.authResults[0] === 0;
   }
   return true;
   ```

   ```ts
   // JsbPasteStrategy.ets
   async paste(): Promise<void> {
     try {
       let granted: boolean = await this.permissionService.ensurePasteboardPermission(this.context);
       if (!granted) {
         hilog.error(LOG_DOMAIN, TAG, 'READ_PASTEBOARD permission denied');
         return;
       }
       let text: string = await this.clipboardService.readText();
       if (!text || text.length === 0) {
         hilog.info(LOG_DOMAIN, TAG, 'clipboard is empty');
         return;
       }
       this.bridge.injectPasteToWeb(text);
     } catch (error) {
       if (error instanceof Error) {
         let err: BusinessError = error as BusinessError;
         hilog.error(LOG_DOMAIN, TAG, 'pasteByJsb failed. Code: %{public}d, Message: %{public}s',
           err.code, err.message);
       }
     }
   }
   ```

7. **粘贴方案B：键盘事件分发**

   **分发KEYCODE_PASTE让Web内核执行内置粘贴。** 粘贴请求回调后先完成权限检查------Web内核读剪贴板同样受READ_PASTEBOARD管控，无权限时dispatchKeyEvent即使返回true，内核粘贴操作仍可能静默失败。随后在postFrameCallback的onIdle回调中执行：focusControl请求Web组件焦点，此时菜单已完全关闭，焦点不再被菜单持有，按键才能进入WebView编辑通道；再用UIContext的dispatchKeyEvent向组件分发Down、Up成对的KEYCODE_PASTE按键，内核收到后执行内置粘贴（选区替换、富文本语义）。分发不被接受时按20ms间隔重试，最多2次。

   ```ts
   // KeyEventDispatcher.ets
   uiContext.postFrameCallback({
     onFrame: (_timeInNano: number): void => {
     },
     onIdle: (_timeLeftInNano: number): void => {
       this.attemptDispatch(uiContext, webId, code, metaKey, 0);
     }
   });

   private attemptDispatch(context: UIContext, webId: string, code: KeyCode,
     metaKey: number, attempt: number): void {
     try {
       let focused: boolean = focusControl.requestFocus(webId);
       let downAccepted: boolean = context.dispatchKeyEvent(webId,
         this.createKeyEvent(code, KeyType.Down, metaKey));
       let upAccepted: boolean = context.dispatchKeyEvent(webId,
         this.createKeyEvent(code, KeyType.Up, metaKey));
       if (!downAccepted || !upAccepted) {
         this.retryDispatch(context, webId, code, metaKey, attempt);
       }
     } catch (error) {
       this.retryDispatch(context, webId, code, metaKey, attempt);
     }
   }
   ```

   ```ts
   // KeyEventDispatcher.ets
   private createKeyEvent(code: KeyCode, type: KeyType, metaKey: number): KeyEvent {
     return {
       type: type,
       keyCode: code,
       keyText: '',
       keySource: KeySource.Keyboard,
       deviceId: 0,
       metaKey: metaKey,
       timestamp: new Date().getTime(),
       stopPropagation: (): void => {
       },
       intentionCode: IntentionCode.INTENTION_DOWN
     };
   }
   ```

   三个易错点：focusControl是ArkUI全局命名空间，可直接使用，无需导入；dispatchKeyEvent的节点参数是组件inspector key（组件.id()设置的值）或FrameNode的uniqueId，不是WebviewController的getWebId()返回的Web组件索引；构造[按键事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-development-guide-keyboard)时KeyType、KeySource用ArkUI全局类型，[键值KeyCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-keycode)从@kit.InputKit导入，IntentionCode从@ohos.multimodalInput.intentionCode导入。

   两种方案对比如下：

   |维度|A. JSB注入|B. 键盘事件分发|
   |:-------|:--------------------|:-----------------------------------|
   |执行者|应用侧读剪贴板+网页JS插入|Web内核执行粘贴|
   |可控性与可观测性|高：全程日志、可加清洗审计、失败可捕获|低：内核内部完成，需网页侧事件日志间接确认|
   |粘贴语义|纯文本插入|内核内置：选区替换、富文本语义|
   |依赖|READ_PASTEBOARD权限|READ_PASTEBOARD权限+焦点处理+inspector key|
   |失败模式|返回值或异常可捕获，可降级处理|可能静默失败，需重试与验证机制|
   |实现复杂度|低（读剪贴板+runJavaScript）|中（焦点+按键构造+重试）|

   选型建议：需要自定义粘贴处理（格式清洗、粘贴保护、审计、纯文本策略）选A；追求内置编辑体验（富文本、选区替换）选B；通用建议以B为主、A兜底，B失败或需要干预时降级到A。
8. **数据持久化与恢复**

   **页面就绪注入已存数据，编辑防抖落盘，销毁兜底flush。** 网页加载完成后立即回调onMenuReady，应用侧读取Preferences中该方案的数据并经loadSheetData注入，网页首次渲染即为已保存数据（sheetDataInitialized标志加200ms兜底，避免默认值闪现后突变）；每次数据变化经onDataChange回调，应用侧按500ms防抖合并高频写入后落盘；页面销毁时取消定时器并兜底flush。两种方案使用不同存储key（sheet_data_jsb、sheet_data_key），互不干扰。

   ```ts
   // SheetPage.ets
   private onDataChange(data: string): void {
     this.pendingSheetData = data;
     if (this.saveTimer !== -1) {
       clearTimeout(this.saveTimer);
     }
     this.saveTimer = setTimeout((): void => {
       this.saveTimer = -1;
       this.dataStore.saveSheetData(this.pendingSheetData);
     }, SAVE_DEBOUNCE_MS);
   }

   aboutToDisappear(): void {
     if (this.saveTimer !== -1) {
       clearTimeout(this.saveTimer);
       this.saveTimer = -1;
       this.dataStore.saveSheetData(this.pendingSheetData);
     }
   }
   ```

   ```ts
   // SheetDataStore.ets
   this.prefInstance = await preferences.getPreferences(context, PREF_STORE_NAME);
   await this.prefInstance.put(this.dataKey, data);
   await this.prefInstance.flush();
   ```

## 约束与限制

* 本示例支持 API Version 20 Release 及以上版本。
* 本示例支持 HarmonyOS 6.0.0 Release SDK 及以上版本。
* 本示例需要使用 DevEco Studio 6.0.0 Release 及以上版本进行编译运行。

## 工程目录

```ts
├──entry/src/main/ets                        // 代码区
│  ├──bridge
│  │  └──SheetBridge.ets                     // 桥接层：JSB注册+runJavaScript封装
│  ├──common
│  │  └──Constants.ets                       // 桥名、模式常量、存储key、组件id、日志域
│  ├──components
│  │  └──SelectionPopupMenu.ets              // 气泡菜单内容（@Builder函数）
│  ├──data
│  │  └──SheetDataStore.ets                  // Preferences持久化（按方案隔离key）
│  ├──entryability
│  │  └──EntryAbility.ets                    // 应用入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets              // 备份扩展（已关闭备份导出）
│  ├──model
│  │  └──SelectionModel.ets                  // 选区、菜单项、锚点数据模型
│  ├──pages
│  │  ├──Index.ets                           // 文件列表页（Navigation容器）
│  │  └──SheetPage.ets                       // 表格页（组装服务与粘贴策略）
│  ├──paste
│  │  ├──IPasteStrategy.ets                  // 粘贴策略接口
│  │  ├──JsbPasteStrategy.ets                // 粘贴方案A：JSB注入
│  │  └──KeyDispatchPasteStrategy.ets        // 粘贴方案B：键盘事件分发
│  ├──service
│  │  ├──ClipboardService.ets                // 剪贴板读写
│  │  ├──KeyEventDispatcher.ets              // 键盘事件分发（焦点+按键+重试）
│  │  └──PermissionService.ets               //READ_PASTEBOARD运行时授权
│  └──viewmodel
│     └──SheetViewModel.ets                  // 气泡菜单锚点与显示状态
├──entry/src/main/resources                  // 应用资源目录
│  ├──base/element                           // 颜色、字号、间距、文本资源
│  └──rawfile
│     ├──sheet.html                          // 在线表格页面（渲染、选区计算、JS桥）
│     └──state-machine.js                    // 单元格交互状态机
```

## 参考文档

[Web组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web)

[WebviewController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-webview)

[popup弹窗](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup)

[剪贴板](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-pasteboard)

[访问控制管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl)

[受限开放权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions)

[UIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-uicontext)

[按键事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-development-guide-keyboard)

[键值KeyCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-keycode)

[用户首选项](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-preferences)

[@ObservedV2和@Trace装饰器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-observedv2-and-trace)

[粘贴控件PasteButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-security-components-pastebutton)

[Navigation路由容器](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)

## 常见FAQ

Q：为什么不用粘贴控件PasteButton而申请受限权限？

A：两种粘贴方案的剪贴板读取都发生在应用侧API或Web内核。PasteButton的临时授权仅覆盖应用进程的剪贴板API调用，无法授权Web内核读取，而内核读取正是键盘分发方案的核心依赖；且其外观与事件模型无法融入自定义气泡菜单。因此选择READ_PASTEBOARD权限换取统一交互与内核内置粘贴能力。

Q：键盘分发方案可靠吗？

A：可靠。实测链路：focusControl.requestFocus成功→dispatchKeyEvent返回true→网页侧keydown事件trusted=true→内核触发paste事件并写入内容。前提是补齐焦点处理、使用inspector key、Down与Up成对分发并带重试。

Q：dispatchKeyEvent的节点参数应该传什么？

A：传组件inspector key（组件.id()设置的值，如'sheet_web'）或FrameNode的uniqueId。不要传WebviewController的getWebId()返回值，那是Web组件索引，仅用于多Web管理。

Q：两种方案可以同时启用吗？

A：可以按"B为主、A兜底"组合：B失败或需要干预（授权拒绝、格式清洗）时降级到A。本示例以两个独立入口并存，便于直接对比体验与调试日志。

Q：长按与编辑的交互规则是什么？

A：单击=选中单元格；再次单击同一格=进入编辑（弹键盘）；长按=整格选中并弹出复制/剪切/粘贴菜单（不弹键盘、不进编辑）；编辑中不弹粘贴菜单；粘贴后500ms内抑制菜单复弹。

Q：Navigation获取路由参数有什么注意事项？

A：NavPathStack的getParamByName返回Array，ArkTS禁止以unknown类型直接使用，需先整体as为Array<Record<string, string>>转型，再判断数组长度后取[0]，避免索引越界与类型错误。

## 代码下载

[Web在线表格场景实践示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260910131429.08136234305429308607185415096170:50001231000000:2800:1503E6F3BC9F31E5769870C758728B26E1F910D4BA8F1BA2BF07BA4A53C5B4B9.zip?needInitFileName=true)

