---
name: document/cn/doc-guides/lite-wearable-routes-0000000000629875
title: 页面路由
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/lite-wearable-routes-0000000000629875
source: portal
---

# 页面路由

很多应用都不仅仅由一个页面组成，如何将这些页面串联起来，让他们根据开发者的需要来实现跳转，这就需要页面路由来实现。在分布式应用中，页面路由router根据uri的地址来找到目标页面，实现跳转。下面以两个简单页面之间的跳转为例说明页面跳转的操作，具体实现步骤如下：

     1. 在“pages”目录右键，选择“New > JS Page”，将“JS Page Name”设置为“details”。如果使用其他方式添加页面，则在添加页面后需要修改配置文件config.json中的pages标签。
     2. 在index页面添加一个文本和一个按钮，文本通过用来指明当前页面，按钮用来实现两个页面之间的相互跳转。
            
            <!-- index.hml -->
            <div class="container">
                <text class="title">
                    Hello World
                </text>
                <input class="btn" type="button" value="View" onclick="clickAction"></input>
            </div>
            
            /* index.css */
            .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                left: 0px;
                top: 0px;
                width: 454px;
                height: 454px;
            }
            .title {
                font-size: 30px;
                text-align: center;
                width: 454px;
                height: 100px;
                margin: 10px;
            }
            .btn {
                width: 200px;
                height: 50px;
            }

     3. 同样地，在details页面添加一个文本和一个按钮。
            
            <!-- details.hml -->
            <div class="container">
                <text class="title">
                    Details Page
                </text>
                <input class="btn" type="button" value="Back" onclick="clickAction"></input>
            </div>

details.css的文件内容和index.css一致。

     4. 在index页面点击按钮调用router.replace()函数跳转到详情页。
            
            // index.js:
            import router from '@system.router'
            
            export default {
                  clickAction(){
                      router.replace({
                          uri: 'pages/details/details'
                      });
                 }
            }

     5. 在details页面通过点击按钮调用router.replace()回到首页。
            
            // details.js:
            import router from '@system.router'
            
            export default {
                clickAction(){
                    router.replace({
                        uri: 'pages/index/index'
                    });
                }
            }

     6. 请参考[使用预览器查看应用效果](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/previewer-0000001054328973)：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113814.55448803742659898728560159804611:50001231000000:2800:4A1A14BFC00986DB066E796310A7F09C74B87E1E212FC9DD0DE5ED741889D346.png?needInitFileName=true?needInitFileName=true)
