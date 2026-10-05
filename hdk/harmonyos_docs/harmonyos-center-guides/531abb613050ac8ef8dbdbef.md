---
name: document/cn/harmonyos-center-guides/faqs-app-test-8-0000002032140813
title: ohosTest测试文件引用了entry模块的方法，测试时报cppcrash
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-center-guides/faqs-app-test-8-0000002032140813
source: portal
---

ohosTest测试文件引用了entry模块的方法，测试时报cppcrash **问题现象** 如果ohosTest测试文件引用了entry的方法，并且entry中存在以普通形式（例如"entry/ets/workers/Worker.ets"）加载worker时，测试执行期间会报cppcrash。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/fWOEf87jRiKJ0Z2eDI1sTg/zh-cn_image_0000002623217681.png?HW-CC-KV=V1&HW-CC-Date=20261005T053048Z&HW-CC-Expire=86400&HW-CC-Sign=92BD762B381ECBC1CAE20694D235F6450960E43C2BF460B0644FFEA87E2BD186) **解决措施** 修改entry中实例化worker的路径形式为带@标识的路径加载形式或相对路径加载形式，再次执行测试以确保可以正常通过。
    * @标识路径加载形式("@entry/ets/workers/Worker.ets")：![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/LW19sV5EQ2203s-YTKytKA/zh-cn_image_0000002592778126.png?HW-CC-KV=V1&HW-CC-Date=20261005T053048Z&HW-CC-Expire=86400&HW-CC-Sign=976278C616DB9812538019C9C122BA273418097057191611BA91C59767D18482)
    * 相对路径加载形式("../workers/Worker.ets")：![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/LyN93RCJQoyZFEra_IyqSQ/zh-cn_image_0000002623377545.png?HW-CC-KV=V1&HW-CC-Date=20261005T053048Z&HW-CC-Expire=86400&HW-CC-Sign=1E66E34C2BA2CCB8180A98BD458BAB27B01AEC2E89BD9BD845382D702A711520)
