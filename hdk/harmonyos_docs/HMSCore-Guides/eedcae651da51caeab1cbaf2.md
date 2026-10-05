---
name: document/cn/HMSCore-Guides/harmonyos-custom-events-0000001169634747
title: 自定义事件
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/harmonyos-custom-events-0000001169634747
source: portal
---

# 自定义事件

针对自动采集事件、预置事件无法满足的个性化分析需求，您可上报自定义事件。

您可能有个性化的事件需要埋点分析，分析服务也支持您自定义事件并扩展事件参数，或是对预定义事件新增个性化参数。

例如对教育类的应用，可以添加自定义事件“begin_examination”来表示“进入新考试”的事件， 并给该事件增加相关参数，以此满足特定业务场景的分析。自定义事件示例如下：
    
    // 自定义埋点，在工程合适位置插入埋点代码
    PacMap pacMap = new PacMap(); 
    pacMap.putString("exam_difficulty", "high"); 
    pacMap.putString("exam_level", "1-1"); 
    pacMap.putString("exam_time", "20190520-08"); 
    instance.onEvent("begin_examination", pacMap);

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115313.36303886483556052772594981134010:50001231000000:2800:AD22EDBF0C1A05947A52CF57C79A6511BDAD71B13D8FB4B64CD641FC11C48C8F.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

自定义事件中的**PREPAGEID** 和**CURRPAGEID** 参数为自动采集，您无需对此参数进行埋点。

埋点后，您需要到分析控制台去注册自定义事件及相关参数，注册方法请参见[事件管理](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/meta-manage-0000001050985177)。当用户触发相应的事件时，您可在控制台[实时概览](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/real-time-dashboard-new-0000001159732343)界面查看可视化分析数据的报告。
