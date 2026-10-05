---
name: document/cn/doc-guides/hitrace-0000001064598156
title: HiTrace日志跟踪定位分析
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/hitrace-0000001064598156
source: portal
---

# HiTrace日志跟踪定位分析

在HarmonyOS跨设备分布式应用/服务的问题定位过程中，由于跨设备之间的调用关系复杂，导致问题定位困难。DevEco Studio提供了HiTrace日志跟踪的能力，可以分析和梳理跨设备分布式应用/服务之间的调用关系，通过分析调用链，方便开发者定位调用异常、性能瓶颈等问题。

#### 前提条件

调测的多个设备成功组网，包括连接到同一个WLAN网络和登录同一个华为帐号。

#### 收集Hitrace日志

     1. 在需要跟踪调用链的RPC调用处，前后分别添加[Hitrace类](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hitrace-0000001054358876)接口，用于采集Hitrace日志。对应的示例代码如下所示：
            
            HiTraceId saveId = HiTrace.getId();
             if (saveId.isValid()) {    
                HiTrace.clearId();
             }
             HiTraceId id = HiTrace.begin("MyServiceName", HITRACE_FLAG_INCLUDE_ASYNC | HITRACE_FLAG_TP_INFO);
             ......
             HiTrace.end(id);
             if (saveId.isValid()) {    
                HiTrace.setId(saveId);
             }

     2. 在设备上运行应用/服务，跨设备运行分布式应用/服务的方法请参考[运行/调试分布式应用](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/corss_device_debug-0000001064753150#section1661171313172)。
     3. 在底部工具栏单击**Profiler** ，打开Hitrace工具。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113442.53675878087443833833579769798885:50001231000000:2800:DAF5A7821E366F02D10D0BDE7B1C4410F0325C112220B8DD13F87E617B11E3BC.png?needInitFileName=true?needInitFileName=true)

     4. 在Hitrace窗口，单击**Record** （或![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113442.80132036247235061875667002806680:50001231000000:2800:E03C28F1C2F300CE7A70FC9C732C74FF8E973687977ABA1BF9802BFAD8E33EEB.png?needInitFileName=true?needInitFileName=true)）按钮，开始收集Hitrace日志信息，然后在设备上操作分布式应用/服务。
     5. 单击![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113442.34558913054951412225348272909450:50001231000000:2800:207ADD51C6925F78CBD00447D003A2204E89EE805E0FBD944EE8DE18AE9D5E47.png?needInitFileName=true?needInitFileName=true)按钮，停止收集Hitrace日志信息。日志采集完成后，可以看到如下的时序视图（上半部分）和调用链详情视图（下半部分）。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113442.81794133985109851762945989342408:50001231000000:2800:95E9C59BD4E97BD91D367C6E2D72565DCFD21DB1F1F79CFA4BD576DF2A0D725B.png?needInitFileName=true?needInitFileName=true)

#### Hitrace调用链分析

如上图所示，Hitrace日志采集完成后，会生成时序视图和调用链详情视图，可以利用时序图和调用链详细视图来进行性能分析和故障定位。

     * 利用时序图+调用链视图中的Call Tree视图，可以分析分布式跨设备与跨进程的调用关系。
       * 在时序图中，使用不同颜色矩形块区分不同的调用关系，在矩形块中，可以查看调用的开始时间、结束时间和处理时长，帮助开发者分析处理性能。
       * 单击时序图中的矩形块，则会展示进程的调用方向，从而查看其是调用方或被调用方；同时在Call Tree视图中，也可以清晰的展示进程的调用关系（单设备跨进程调用、跨设备进程调用、调用时长等）。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113442.11206680960058167914918731924224:50001231000000:2800:B887DE205B93E86AD56D408EB3666BC404256C9753CD2129CF67E1CE38508FB9.png?needInitFileName=true?needInitFileName=true)

     * 利用时序图+调用链视图中的Events视图，可以进行分布式调用的故障定位、诊断和分析。
       * 在时序图中，可以展示相关的异常事件，包括Java Crash异常、JS Crash异常、C/C++ Crash异常、跨设备FA调用异常、ANR故障等。
       * 单击时序图中的异常事件，则会在Events视图中展示具体的异常细节，并会自动抓取异常前30s的详细日志信息。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113443.96980705388434113540954439883822:50001231000000:2800:51781A9EE32E4C820D39CA64253572A1703A3DE3228D09BABE640E30145431BA.png?needInitFileName=true?needInitFileName=true)
