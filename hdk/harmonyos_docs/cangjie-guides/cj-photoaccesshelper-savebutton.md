---
name: cangjie-guides/cj-photoaccesshelper-savebutton
title: 保存媒体库资源
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-photoaccesshelper-savebutton
nodePath: 媒体 / Media Library Kit（媒体文件管理服务） / 保存媒体库资源
---

# 保存媒体库资源

当用户需要保存图片、视频等用户文件到图库时，需在应用中申请相册管理模块权限'ohos.permission.WRITE_IMAGEVIDEO'。

#### 使用弹窗授权保存媒体库资源

下面以弹窗授权的方式保存一张图片资源为例。

**开发步骤**

  1. 指定待保存到媒体库的位于应用沙箱的应用文件图片uri。
  2. 指定待保存照片的创建选项，包括文件后缀和照片类型，标题和照片子类型可选。
  3. 调用[showAssetsCreationDialog](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-file-photo_access_helper#func-showassetscreationdialogarraystring-arrayphotocreationconfig-callback1argumentarraystring)，基于弹窗授权的方式获取的目标媒体文件uri。
  4. 将来源于应用沙箱的照片内容写入媒体库的目标uri。


    
    
    import kit.MediaLibraryKit.*
    import kit.CoreFileKit.*
    import ohos.callback_invoke.*
    import ohos.business_exception.*
    import kit.PerformanceAnalysisKit.Hilog
    
    func example() {
        try {
            let context = Global.abilityContext
            let phAccessHelper = getPhotoAccessHelper(context)
            // 指定待保存到媒体库的位于应用沙箱的图片uri。
            let srcFileUri = 'file://com.example.temptest/data/storage/el2/base/haps/entry/files/test.jpg'
            let srcFileUris: Array<String> = [srcFileUri]
            // 指定待保存照片的创建选项，包括文件后缀和照片类型，标题和照片子类型可选。
            let photoCreationConfigs: Array<PhotoCreationConfig> = [
                PhotoCreationConfig(
                    'jpg',
                    PhotoType.Image,
                    title: 'test', // 可选。
                    subtype: PhotoSubtype.Default, // 可选。
                )
            ]
            // 基于弹窗授权的方式获取媒体库的目标uri。
            phAccessHelper.showAssetsCreationDialog(srcFileUris, photoCreationConfigs, Cb(srcFileUri))
        } catch (e: BusinessException) {
            Hilog.error(1, "error", "failed to create asset by dialog successfully errCode is: ${e.code}, ${e.message}")
        }
    }
    
    class Cb <: Callback1Argument<Array<String>> {
        Cb(let srcFileUri: String) {}
        public func invoke(err: ?BusinessException, desFileUris: Array<String>) {
            // 将来源于应用沙箱的照片内容写入媒体库的目标uri。
            let desFile: File = FileIo.open(desFileUris[0], mode: OpenMode.WRITE_ONLY)
            let srcFile: File = FileIo.open(srcFileUri, mode: OpenMode.READ_ONLY)
            FileIo.copyFile(srcFile.fd, desFile.fd)
            FileIo.close(srcFile)
            FileIo.close(desFile)
            Hilog.info(1, "info", 'create asset by dialog successfully')
        }
    }
    
    
    // main_ability.cj
    import kit.AbilityKit.*
    internal import kit.AbilityKit.UIAbilityContext
    internal import kit.AbilityKit.AbilityStage
    internal import kit.ArkUI.WindowStage
    import kit.PerformanceAnalysisKit.Hilog
    
    class MainAbility <: UIAbility {
        public init() {
            super()
            registerSelf()
        }
    
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
            Hilog.info(0, "system", "MainAbility OnCreated.${want.abilityName}")
            match (launchParam.launchReason) {
                case LaunchReason.StartAbility => Hilog.info(0, "AppLogCj", "START_ABILITY")
                case _ => ()
            }
        }
    
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {
            Hilog.info(0, "system", "MainAbility onWindowStageCreate.")
            Global._abilityContext = Some(this.context)
            Global._windowStage = Some(windowStage)
            windowStage.loadContent("EntryView")
        }
    }
    
    // 定义Global类
    public class Global {
        public static var _abilityContext: Option<UIAbilityContext> = None
        public static var _windowStage: Option<WindowStage> = None
        public static prop abilityContext: UIAbilityContext {
            get() {
                match (_abilityContext) {
                    case Some(context) => context
                    case None => throw Exception("Global.abilityContext is not set")
                }
            }
        }
        public static prop windowStage: WindowStage {
            get() {
                match (_windowStage) {
                    case Some(stage) => stage
                    case None => throw Exception("Global.windowStage is not set")
                }
            }
        }
    }
