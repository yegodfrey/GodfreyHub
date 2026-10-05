---
name: document/cn/HMS-References/MLTextBlock-4
title: MLText.Block
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/MLTextBlock-4
source: portal
---

class info  
---  
com.huawei.hms.mlsdk.text.MLText.Block  
表示图像中检测出的文本区块。包含继承自Base的5个属性和文本行：  
1、[getStringValue()](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/MLTextBase-4#q6)：检测出的文本内容  
2、[getBorder()](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/MLTextBase-4#q1)：文本区块的边框  
3、[getVertexes()](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/MLTextBase-4#q7)：文本区块的顶点  
4、[getPossibility()](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/MLTextBase-4#q5)：检测结果的置信度  
5、[getLanguageList()](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/MLTextBase-4#q4)：检测到的所有语种  
6、[getContents()](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/MLTextBase-4#q2)：组成文本区块的文本行  
  
## Public Method Summary

Return type| Method name  
---|---  
List<MLText.TextLine>| getContents()  
  
## Public Methods

Method  
---  
public List<MLText.TextLine> getContents()  
获取文本区块中的文本行。  
  
**Return**

Type| desc  
---|---  
List<MLText.TextLine>| 返回文本行列表。
