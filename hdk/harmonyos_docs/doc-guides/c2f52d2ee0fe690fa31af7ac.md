---
name: document/cn/doc-guides/tv-media-playback-0000001050714866
title: 媒体播放器开发指导
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/tv-media-playback-0000001050714866
source: portal
---

# 媒体播放器开发指导

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113858.52392911207759748251472914925742:50001231000000:2800:5999FF3969874094D2E49EF58ECBF26299C73A9B432C9752C15E292EB1F8B89C.png?needInitFileName=true?needInitFileName=true)

本篇指导适用于Java语言。

媒体播放器应用为开发者提供了媒体文件播放的方法，支持外置U盘视频文件和本地视频文件的播放。

     1. 设计UI界面，需要创建两个Ability，即播放列表选择页MainAbility与播放页PlayAbility。
     2. 从本地数据库中获取媒体文件信息，该功能需依据[权限申请](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/security-permissions-guidelines-0000000000029886#section5561355101318)章节配置权限ohos.permission.READ_MEDIA与ohos.permission.MEDIA_LOCATION。
            
            private ResultSet queryAvStore(Context context) {
                    ResultSet resultSet = null;
                    DataAbilityHelper helper = DataAbilityHelper.creator(context);
                    try {
                        resultSet = helper.query(AVStorage.Video.Media.EXTERNAL_DATA_ABILITY_URI, null, null);
                    } catch (DataAbilityRemoteException e) {
                        
                    }
                    return resultSet;
                }

     3. 创建视频信息模型类VideoModel。videoModel中包括：视频文件的名称、存储路径等信息。
            
            public class VideoModel {
                String title;    
                String url;
            
                public void setTitle(String title) { this.title = title;}
                public String getTitle() { return title;}
                public void setUrl(String url) { this.url = url;}
                public String getUrl() { return url; }
            }

     4. 创建videoModel模型的列表videoModelList。利用从数据库中获取到的视频文件信息对视频播放列表videoModelList进行初始化。
            
            public List<VideoModel> getVideoModelList(Context context) {
                    ResultSet resultSet = queryAvStore(context);
                    List<VideoModel> videoModels = new ArrayList<>();
                    while (resultSet.goToNextRow()) {
                        VideoModel videoModel = new VideoModel();
                        videoModel.setTitle(resultSet.getString(resultSet.getColumnIndexForName(AVStorage.AVBaseColumns.DISPLAY_NAME)));
                        videoModel.setUrl(resultSet.getString(resultSet.getColumnIndexForName(AVStorage.AVBaseColumns.DATA)));
                        videoModels.add(videoModel);
                    }
                    return videoModels;
                }

     5. 利用列表控件ListContainer显示文件名称的列表，并设置默认的焦点。
        1. 创建VideoProvider方法（该方法继承BaseItemProvider抽象方法），在getComponent方法中设置列表的显示，以及默认焦点和遥控器的按键响应操作。
               
               public class VideoProvider extends BaseItemProvider {
                   private static final int LEFT_MARGIN = 0;
                   private static final int TOP_MARGIN = 6;
                   private static final int RIGHT_MARGIN = 0;
                   private static final int BOTTOM_MARGIN = 6;
                   private static final int COLOR = 0x33FFFFFF;
                   private static final int CORNER_RADIUS = 20;
                   private static final int FOCUS_BACKGROUND_COLOR = 0xE5FFFFFF;
                   private static final int FOCUS_TEXT_COLOR = 0xE5000000;
                   private static final int UNFOCUS_BACKGROUND_COLOR = 0x33FFFFFF;
                   private static final int UNFOCUS_TEXT_COLOR = 0xE5FFFFFF;
               
                   private List<VideoModel> mVideoList;
                   private AbilitySlice slice;
                   public static VideoModel currentVideoModel;
                   public VideoProvider (List<VideoModel> mVideoList, AbilitySlice slice) { 
                       this.mVideoList = mVideoList;
                       this.slice = slice;
                   }
                   @Override
                   public int getCount() {return mVideoList.size();}
                   @Override
                   public VideoModel getItem(int position) {return mVideoList.get(position);}
                   @Override
                   public long getItemId(int position) {return position;}
                   @Override
                   public Component getComponent(int position, Component itemcomponent, ComponentContainer componentContainer) {
                       VideoModel videoModel = mVideoList.get(position);
                       ComponentHolder componentHolder = new ComponentHolder();
                       if (itemcomponent == null) {
                           Component component = LayoutScatter.getInstance(slice).parse(ResourceTable.Layout_itemLayout, null, false);
                           ComponentContainer.LayoutConfig layoutConfig = new                                                       ComponentContainer.LayoutConfig(ComponentContainer.LayoutConfig.MATCH_PARENT,
                                   ComponentContainer.LayoutConfig.MATCH_PARENT);
                           layoutConfig.setMargins(LEFT_MARGIN, TOP_MARGIN, RIGHT_MARGIN, BOTTOM_MARGIN);
                           component.setLayoutConfig(layoutConfig);
                           componentHolder.videoName = (Text) component.findComponentById(ResourceTable.Id_name);
                           componentHolder.videoName.setText(videoModel.getTitle());
                           componentHolder.arrow = (Image) component.findComponentById(ResourceTable.Id_arrow);
                           componentHolder.arrow.setPixelMap(ResourceTable.Media_arrow_normal);
                           ShapeElement shapeElement = new ShapeElement();
                           shapeElement.setRgbColor(RgbColor.fromArgbInt(COLOR));
                           shapeElement.setCornerRadius(CORNER_RADIUS);
                           component.setBackground(shapeElement);
                           component.setFocusable(Component.FOCUS_ENABLE);
                           component.setFocusChangedListener(focusChangedListener);
                           component.setKeyEventListener(itemOnKeyListener);
               
                           if (position == 0) {
                               component.setBindStateChangedListener(new Component.BindStateChangedListener() {
                                   @Override
                                   public void onComponentBoundToWindow(Component component) {
                                       component.requestFocus();
                                   }
               
                                   @Override
                                   public void onComponentUnboundFromWindow(Component component) {
               
                                   }
                               });
                            }
               
                            itemcomponent = component;
                            itemcomponent.setTag(componentHolder);
               
                        } else {
                            componentHolder = (ComponentHolder) itemcomponent.getTag();
                        }
                        return itemcomponent;
                   }
               
                   static class ComponentHolder {
                       Text videoName;
                       Image arrow;
                   }
                   
                   // 焦点变化监听
                   private Component.FocusChangedListener focusChangedListener = new Component.FocusChangedListener() {
                       @Override
                       public void onFocusChange(Component component, boolean hasFocus) {
                           if (hasFocus) {
                               ShapeElement shapeElement = new ShapeElement();
                               shapeElement.setCornerRadius(CORNER_RADIUS);
                               shapeElement.setRgbColor(RgbColor.fromArgbInt(FOCUS_BACKGROUND_COLOR));
                               component.setBackground(shapeElement);
               
                               ComponentHolder componentHolder = (ComponentHolder) component.getTag();
                               componentHolder.videoName.setTextColor(new Color(FOCUS_TEXT_COLOR));
                           } else {
                               ShapeElement shapeElement = new ShapeElement();
                               shapeElement.setCornerRadius(Mystyles.CORNER_RADIUS);
                               shapeElement.setRgbColor(RgbColor.fromArgbInt(UNFOCUS_BACKGROUND_COLOR));
                               component.setBackground(shapeElement);
               
                               ComponentHolder componentHolder = (ComponentHolder) component.getTag();
                               componentHolder.videoName.setTextColor(new Color(UNFOCUS_TEXT_COLOR));
                           }
                       }
                   };   
               }

        2. 在MainAbiltiySlice的OnStart()中获取ListContainer对象，并设置要显示的组件信息。
               
               ComponentContainer menuLayout = (ComponentContainer) LayoutScatter.getInstance(this.getContext()).parse(ResourceTable.Layout_menuLayout, null, false);
               listContainer = (ListContainer) menuLayout.findComponentById(ResourceTable.Id_listContainer);
               VideoProvider mProvider = new VideoProvider(VideoModelList, slice);
               listContainer.setItemProvider(mProvider);

     6. 当对应文件名称的列表项按键按下时，会链接到相应的存储文件路径下，进行相应视频文件的播放。在视频文件播放时，会链接到播放用的PlayAbility中，PlayAbility中需要包含视频的播放以及控件的显示等。
            
            private Component.KeyEventListener itemOnKeyListener = (new Component.KeyEventListener() {
                @Override
                public boolean onKeyEvent(Component component, KeyEvent keyEvent) {
                        if (keyEvent.isKeyDown()) {
                            if (keyEvent.getKeyCode() == KeyEvent.KEY_ENTER || keyEvent.getKeyCode() == KeyEvent.KEY_DPAD_CENTER) {
                                int position = MainAbilitySlice.listContainer.getIndexForComponent(component);
                                currentVideoModel = mVideoList.get(position);
                                Intent intent1 = new Intent();
                                intent1.setElement(new ElementName("", 
            slice.getBundleName(), "PlayAbility"));
                                slice.startAbility(intent1);
                            }
                        }
                    return false;
                }
            });

     7. 视频文件的播放。视频文件播放采用的控件为SurfaceProvider。
        * 当surfaceProvider设置为“pinToZTop(true)”时，视频窗口显示在最前面，其他控件无法显示。
        * 当surfaceProvider设置为“pinToZTop(false)”时，视频窗口不会显示在最前面，支持其他控件（如进度条、播放时间等）与视频播放页面同时显示，但需要保证其他控件与surfaceProvider在同一layout下，并且不能设置背景。
              
              surfaceProvider = new SurfaceProvider(slice);
              DependentLayout.LayoutConfig params = new DependentLayout.LayoutConfig(ComponentContainer.LayoutConfig.MATCH_PARENT, ComponentContainer.LayoutConfig.MATCH_PARENT);
              surfaceProvider.setLayoutConfig(params);
              surfaceProvider.setWidth(WIDTH);
              surfaceProvider.setHeight(HEIGHT);
              surfaceProvider.setVisibility(Component.VISIBLE);
              **surfaceProvider****.pinToZTop(false);**
              WindowManager.getInstance().getTopWindow().get().setTransparent(true);
              surfaceProvider.getSurfaceOps().get().addCallback(surfaceCallback)
              
              private SurfaceOps.Callback surfaceCallback = new SurfaceOps.Callback() {
                  @Override
                  public void surfaceCreated(SurfaceOps surfaceHolder) {
                      if (VideoProvider.currentVideoModel != null) {
                          PlayService.getInstance().play(VideoProvider.currentVideoModel.getUrl(), 0, surfaceProvider);
                      } else if (MainAbilitySlice.currentVideoModel != null) {
                          PlayService.getInstance().play(MainAbilitySlice.currentVideoModel.getUrl(), 0, surfaceProvider);
                      }
                  }
                  @Override
                  public void surfaceChanged(SurfaceOps surfaceHolder, int i, int i1, int i2) {
              
                      }
                  @Override
                  public void surfaceDestroyed(SurfaceOps surfaceHolder) {
              
                  }
              };
