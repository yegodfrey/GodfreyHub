---
name: document/cn/harmonyos-center-guides/faqs-regression-test-17-0000002150522261
title: 测试过程中没有显示用例包步骤且指标监控中无数据
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-center-guides/faqs-regression-test-17-0000002150522261
source: portal
---

测试过程中没有显示用例包步骤且指标监控中无数据 在用例脚本中，导入并使用hypium.advance.deveco_testing.step中的Step函数标记步骤（from hypium.advance.deveco_testing.step import Step）。否则，回归测试过程中无法正确读取测试步骤，导致指标监控为空。
