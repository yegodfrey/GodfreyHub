---
name: document/cn/doc-guides/ai-word-segmentation-guidelines-0000001050732478
title: 分词开发指导
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ai-word-segmentation-guidelines-0000001050732478
source: portal
---

# 分词开发指导

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113840.93670444818971418357237842682402:50001231000000:2800:28183DEF07143E1C6905D20038F128A59F196FEB39E87AAD1140CEC130D6430A.png?needInitFileName=true?needInitFileName=true)

本篇指导适用于Java语言。

#### 场景介绍

     * 分词相关接口可以应用于搜索引擎开发。对于搜索引擎而言，最重要的是如何把全网搜索的结果进行筛选，并按相关程度进行排序。分词的准确与否，常常直接影响到搜索结果的相关度排序。
     * 分词相关接口可以应用于用户选择文本的场景。原始文本只能按字选择，如果使用分词，用户选中文本的时候可以按词选择。

#### 接口说明

分词API的主要功能是将一个汉字序列切分成一个一个单独的词，可自定义分词的粒度。

**主要接口**

接口名 | 功能描述  
---|---  
ResponseResult getWordSegment(String requestData, int requestType) | 分词，同步接口  
ResponseResult getWordSegment(final String requestData, final int requestType, final OnResultListener<ResponseResult> listener) | 分词，异步接口  
init(Context context, OnResultListener<Integer> listener, boolean isLoadModel) | 初始化NLU服务。在调用NLU等功能接口前需要先调用此接口，在OnResultListener的onResult(T)方法中获取到回调结果后，再调用NLU功能接口。开发者传入listener参数作为回调，用于等待NLU功能接口的调用过程和结果。  
void destroy(Context context) | 取消所有NLU任务，销毁NLU引擎服务。调用此方法后，无法再使用NLU服务。如果需要重新使用NLU服务，需要重新调用init(Context, OnResultListener<Integer>, boolean)}来初始化NLU服务。  
  
**接口输入值说明**

requestType表示请求类型，通过NluRequestType类定义如下：

类型 | 说明  
---|---  
static int | REQUEST_TYPE_LOCAL = 0，本地请求。  
  
requestData表示输入的文本信息，为JSON格式，如下：

参数名 | 是否必选 | 值类型 | 说明  
---|---|---|---  
text | 是 | String | 待分析的文本，utf-8，文本长度不超过500个字符。  
type | 否 | long | 分词的粒度，默认为0。取值包括：
     * 0：基本词，粒度较小。如“我要看速度与激情”，分成“我/要/看/速度/与/激情”。
     * 1：在基本词的基础上，做实体合并。例如：“我要去江宁万达广场看速度与激情”，分成“我/要/去/江宁万达广场/看/速度/与/激情”。对于没有可合并实体的文本信息，其分词效果与type为0的分词效果相同。例如：“明天下午3点一起看电影”，分成“明天/下午/3点/一起/看/电影”。
     * 9223372036854775807（2的63次方减1）：在type为1的基础上，把实体时间、地点等整体结构合并，出现符号隔开不合并，并把一些常用短语合并。如“形容词+的”，“单字动词+单字名词”等，简化句子成分。例如“明天下午三点到五点我在江宁瑞都金逸影城看电影”，分成“明天下午三点/到/五点/我/在/江宁瑞都金逸影城/看/电影”。  
callPkg | 否 | String | 调用者名称。  
callType | 否 | int | 调用者类型：
     * 0：普通应用（默认）
     * 1：快应用  
callVersion | 否 | String | 调用者版本号。  
callState | 否 | int | 调用者状态：
     * -1：未知（默认）
     * 0：前台
     * 1：后台  
  
目前NLU支持的实体类别：

**实体类别** | **备注**  
---|---  
电影 | 依赖字典，要求真实用例，勿做修改。  
电视剧 | 依赖字典，要求真实用例，勿做修改。  
综艺 | 依赖字典，要求真实用例，勿做修改。  
动漫 | 依赖字典，要求真实用例，勿做修改。  
火车车次 | 要求真实用例，勿做修改。  
航班号 | 要求真实用例，勿做修改。  
球队 | 依赖字典，支持NBA、CBA、英超、西甲、德甲、意甲、法甲、中超的球队识别，要求真实用例，勿做修改。  
人名 | 要求真实用例，勿做修改。  
快递单号 | 要求真实用例，勿做修改。  
电话号码 | 要求真实用例，勿做修改。  
url | 要求真实用例，勿做修改。  
邮箱 | 要求真实用例，勿做修改。  
联赛 | NBA、CBA、英超、西甲、德甲、意甲、法甲、中超，要求真实用例，勿做修改。  
时间 | 要求真实用例，勿做修改。  
地点 | 包含酒店、餐馆、景点、学校、道路、省、市、县、区、镇等，部分依赖字典。  
验证码 | 用例真实，勿做修改。  
  
**接口返回值说明**

返回值ResponseResult中responseResult为JSON字符串，体现分词的结果：

参数名 | 是否必选 | 值类型 | 说明  
---|---|---|---  
code | 是 | int | 结果码。取值包括：
     * 0：成功
     * 1：系统正在初始化
     * 2：参数错误
     * 3：系统忙
     * 4：系统异常
     * 5：任务超时
     * 6：其它错误  
message | 是 | String | 错误信息  
words | 否 | JSONArray | 切分出的词数组，数组里每一项的类型均为JSONObject。  
  
#### 开发步骤

     1. 在使用分词API时，将实现分词的相关类添加至工程。
            
            import ohos.ai.nlu.NluRequestType;
            import ohos.ai.nlu.NluClient;
            import ohos.ai.nlu.OnResultListener;
            import ohos.ai.nlu.ResponseResult;

     2. 使用NluClient静态类进行初始化，通过异步方式获取服务的连接。
        * context：应用上下文信息，应为ohos.aafwk.ability.Ability或ohos.aafwk.ability.AbilitySlice的实例或子类实例。
        * listener：初始化结果的回调，可以传null。
        * isLoadModel：是否加载模型，如果传true，则在初始化时加载模型；如果传false，则在初始化时不加载模型。
    
    NluClient.getInstance().init(context, new OnResultListener<Integer>(){
            @Override
            public void onResult(Integer result){
             // 初始化成功回调，在服务初始化成功调用该函数
            }
    }, true);

     3. 调用分词方法得到分析结果，接口提供同步和异步两个方法，开发者可根据自己需要选择。
        * 同步
              
              String requestData = "{\"text\":\"今天天气不错，我们一起看电影吧\\n\",\"type\":0}";
              ResponseResult responseResult = NluClient.getInstance().getWordSegment(requestData, NluRequestType.REQUEST_TYPE_LOCAL);

        * 异步
              
              NluClient.getInstance().getWordSegment(requestData,
                          NluRequestType.REQUEST_TYPE_LOCAL, new OnResultListener<ResponseResult>() {
                              @Override
                              public void onResult(ResponseResult result) {
                                 // onResult deal
                              }
                          });

     4. 解绑服务。
            
            NluClient.getInstance().destroy(context);
