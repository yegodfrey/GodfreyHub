---
name: document/cn/HMS-References/wallet-api-client-20
title: PassObject
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/wallet-api-client-20
source: portal
---

CLASS info  
---  
public final class PassObject  
对外构建jwt字符串的核心类.通过该对象可以构建会员卡，礼品卡，优惠券的jwt数据。用于添加到华为钱包中，以卡劵的形式展示。  
  
## Nested Class Summary

Type| Name| Desc  
---|---|---  
class| PassObject.Builder| 以Builder方式赋值。  
  
## Public Method Summary

Return type| Method name  
---|---  
static Builder| getBuilder()实例化PassObject.Builder。  
String| getPassTypeIdentifier()获取当前卡劵的类型。  
String| getCurrencyCode()获取当前卡劵的货币类型。  
ArrayList<AppendField>| getUrlList()获取当前卡券的url列表。  
String| getPassStyleIdentifier()获取当前卡劵的样式。  
String| getOrganizationPassId()当前卡劵的id。  
String| getSerialNumber()当前卡劵的唯一标识。  
PassStatus| getStatus()当前卡劵的状态。  
ArrayList<RelatedPassInfo>| getRelatedPassIds()获取当前卡劵的关联优惠券列表。  
ArrayList<Location>| getLocationList()获取位置信息列表，最多五组。  
BarCode| getBarCode()获取条形码信息。  
ArrayList<CommonField>| getCommonField()获取CommonField列表。  
ArrayList<AppendField>| getAppendFields()获取getAppendFields列表。  
ArrayList<AppendField>| getMessageList()获取消息列表。  
ArrayList<AppendField>| getImageList()获取推荐的图片列表。  
ArrayList<AppendField>| getTextList()获取文本信息列表。  
String| toJson()该方法是PassObject的核心,通过toJson可以转成需要生产的jwt数据源。PassObject最终的作用就是提供jwt的数据源，所以必须调用该方法来转成需要的字符串。  
  
## Public Method

Method  
---  
public String getPassTypeIdentifier()  
获取当前卡劵的类型，passTypeIdentifier是区分其他卡劵的标识,属于必须填写字段。  
  
Return

Type| desc  
---|---  
String| 当前卡劵的类型。  
Method  
---  
public String getCurrencyCode()  
获取当前卡劵的货币类型。  
  
Return

Type| desc  
---|---  
String| 当前卡劵的货币类型。  
Method  
---  
public ArrayList<AppendField> getUrlList()  
获取当前卡劵Url列表。  
  
Return

Type| desc  
---|---  
ArrayList<AppendField>| Url列表。  
Method  
---  
public String getPassStyleIdentifier()  
获取当前卡劵的样式,当前卡劵可能是会员卡，礼品卡，优惠券，该字段是用于区分当前的不同功能型卡劵。属于必须填写字段。  
  
Return

Type| desc  
---|---  
String| 当前卡劵的样式。  
Method  
---  
public String getOrganizationPassId()  
获取当前卡劵的id。属于必须填写字段。  
  
Return

Type| desc  
---|---  
String| 当前卡劵的id。  
Method  
---  
public String getSerialNumber()  
获取当前卡劵的唯一标识，用于服务器记录的唯一标识，可以与passId一样。属于必须填写字段。  
  
Return

Type| desc  
---|---  
String| 当前卡劵的唯一标识。  
Method  
---  
public PassStatus getStatus()  
当前卡劵的状态。  
  
Return

Type| desc  
---|---  
PassStatus| 获取当前卡劵的状态。  
Method  
---  
public ArrayList<RelatedPassInfo> getRelatedPassIds()  
当前卡劵关联的优惠券列表。  
  
Return

Type| desc  
---|---  
List<RelatedPassInfo>| 获取当前卡劵的关联的优惠券列表。  
Method  
---  
public ArrayList<Location> getLocationList()  
地理围栏的多组位置信息。  
  
Return

Type| desc  
---|---  
ArrayList<Location>| 地理围栏的多组位置信息。  
Method  
---  
public BarCode getBarCode()  
获取条形码对象。具体的赋值查看BarCode。  
  
Return

Type| desc  
---|---  
BarCode| 获取条形码对象。  
Method  
---  
public ArrayList<CommondField> getCommonField()  
获取构建卡劵的CommonField对象列表。  
  
Return

Type| desc  
---|---  
ArrayList<CommonField>| CommonField对象列表。  
Method  
---  
public ArrayList<AppendField> getAppendFields()  
获取构建卡劵的AppendField对象列表。  
  
Return

Type| desc  
---|---  
ArrayList<AppendField>| AppendField对象列表。  
Method  
---  
public ArrayList<AppendField> getMessageList()  
获取构建卡劵的消息对象列表  
  
Return

Type| desc  
---|---  
ArrayList<AppendField>| MessageList。  
Method  
---  
public ArrayList<AppendField> getImageList()  
获取广告轮播图片列表。  
  
Return

Type| desc  
---|---  
ArrayList<AppendField>| ImageList。  
Method  
---  
public ArrayList<AppendField> getTextList()  
获取文本信息列表。  
  
Return

Type| desc  
---|---  
ArrayList<AppendField>| TextList。  
Method  
---  
public String toJson()  
该方法是PassObject的核心,通过toJson可以转成需要生产的jwt数据源。PassObject最终的作用就是提供jwt的数据源，所以必须调用该方法来转成需要的字符串。  
  
Return

Type| desc  
---|---  
String| PassObject转成的jwt所需的字符串。  
Method  
---  
public static PassObject.Builder getBuilder()  
实例化PassObject.Builder。  
  
Return

Type| desc  
---|---  
PassObject.Builder| 采用build方式来构建PassObject对象。
