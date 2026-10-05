---
name: document/cn/doc-guides/ai-entity-recognition-guidelines-0000001050814419
title: 实体识别开发指导
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ai-entity-recognition-guidelines-0000001050814419
source: portal
---

# 实体识别开发指导

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113841.00142668944129280689319750584966:50001231000000:2800:373BD093A9E1E61961707DB92A9C326BFB1CE251BDC7D6831FD89B8400376BAD.png?needInitFileName=true?needInitFileName=true)

本篇指导适用于Java语言。

#### 场景介绍

     * 双指按压文本弹出卡片

基于文本中所包含的实体内容，如名人、电影、电视剧等。通过双指按压，快速弹出实体对应的卡片介绍信息。让用户可以方便、快捷的获取想知道的信息。

     * 实体信息高亮

将相关的实体信息高亮，并设置快速操作入口。如将文本信息中的电话号码高亮，用户可以直接进行拨号。

#### 接口说明

实体识别提供识别文本中具有特定意义实体的能力，包含电影、电视剧、综艺、动漫、单曲、专辑、图书、火车车次、航班号、球队、人名、快递单号、电话号码、url、邮箱、联赛、时间、地点（包含酒店、餐馆、景点、学校、道路、省、市、县、区、镇等）、验证码。

**主要接口**

**接口名** | **描述**  
---|---  
void init(Context context, OnResultListener<Integer> listener, boolean isLoadModel); | 初始化NLU服务。在调用NLU等功能接口前需要先调用此接口，在OnResultListener的onResult(T)方法中获取到回调结果后，再调用NLU功能接口。开发者传入listener参数作为回调，用于等待NLU功能接口的调用过程和结果。  
ResponseResult getEntity(String requestData, int requestType); | 采用同步方式识别文本中具有特定意义的实体，包含电影、电视剧、综艺、动漫、单曲、专辑、图书、火车车次、航班号、球队、人名、快递单号、电话号码、url、邮箱、联赛、时间、地点（包含酒店、餐馆、景点、学校、道路、省、市、县、区、镇等）、验证码。  
ResponseResult getEntity(final String requestData, final int requestType, final OnResultListener<ResponseResult> listener); | 采用异步方式识别文本中具有特定意义的实体，包含电影、电视剧、综艺、动漫、单曲、专辑、图书、火车车次、航班号、球队、人名、快递单号、电话号码、url、邮箱、联赛、时间、地点（包含酒店、餐馆、景点、学校、道路、省、市、县、区、镇等）、验证码。  
void destroy(Context context); | 取消所有NLU任务，销毁NLU引擎服务。调用此方法后，无法再使用NLU服务。如果需要重新使用NLU服务，需要重新调用init(Context, OnResultListener<Integer>, boolean)}来初始化NLU服务。  
  
**接口输入值说明**

requestType表示请求类型，通过NluRequestType类定义如下： 

枚举的类型 | 枚举的取值  
---|---  
static final int | REQUEST_TYPE_LOCAL = 0 本地请求  
  
requestData的JSON格式如下： 

参数名 | 是否必选 | 类型 | 说明  
---|---|---|---  
text | true | String | 待分析的文本，UTF-8编码，限制500个字符以内。  
module | false | String | 定义需要分析的实体，默认所有实体均会分析。 分析某个实体，传实体键值，例如：只需要分析时间实体，传“time”。可传多个，表示分析多个实体，以半角逗号“,”分隔，例如：分析时间和地点，传“time,location”。 取值范围：name、time、location、phoneNum、email、url、movie、tv、anime、league、team、trainNo、flightNo、expressNo、idNo、verificationCode、app、carNo  
callPkg | false | String | 调用者名称。  
callType | false | int | 调用者类型：
     * 0：普通应用（默认）
     * 1：快应用  
callVersion callState | false false | String int | 调用者版本号。 调用者状态：
     * -1：未知（默认）
     * 0：前台
     * 1：后台  
  
**接口返回值说明**

返回值ResponseResult为JSONObject字符串，体现实体识别的结果： 

参数名 | 是否必选 | 类型 | 说明  
---|---|---|---  
code | true | int | 实体识别的结果码。取值包括：
     * 0：成功
     * 1：系统正在初始化
     * 2：参数错误
     * 3：系统忙
     * 4：系统异常
     * 5：任务超时
     * 6：其它错误  
message | true | String | 实体识别的结果描述。  
entity | false | JSONObject | 实体分析结果。  
  
#### 开发步骤

     1. 在使用实体识别相关接口时，需要将实体识别的相关类添加到工程。
            
            import ohos.ai.nlu.ResponseResult; // 接口返回的结果类
            import ohos.ai.nlu.NluClient; // 接口服务类
            import ohos.ai.nlu.NluRequestType; // 接口调用时传入的类型
            import ohos.ai.nlu.OnResultListener; // 异步函数，执行成功的回调结果类
            import ohos.ai.nlu.util.NluError;// 接口返回码

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

     3. 调用实体识别的接口，获取分析结果。
        * 采用同步方式进行实体识别：
              
              String requestData= "{text:'我要看电影魔兽',module:'movie'}"; // module为可选参数，如果不设置该参数，则默认分析所有实体
              ResponseResult respResult = NluClient.getInstance().getEntity(requestData, NluRequestType.REQUEST_TYPE_LOCAL);
              if (null != respResult && NluError.SUCCESS_RESULT == respResult.getCode()) {
                  // 获取接口返回结果，参考接口文档返回使用
                  String result = respResult.getResponseResult();
              }

        * 采用异步方式进行实体识别：
              
              // 待分析文本
              String requestData= "{text:'我要看电影魔兽',module:'movie'}"; // module为可选参数，如果不设置该参数，则默认分析所有实体
              // 调用接口
              NluClient.getInstance().getEntity(requestData, NluRequestType.REQUEST_TYPE_LOCAL, new OnResultListener < ResponseResult > () {
                  @Override
                  public void onResult(ResponseResult respResult) {
                      // 异步返回
                      if (null != respResult && NluError.SUCCESS_RESULT == respResult.getCode()) {
                          // 获取接口返回结果，参考接口文档返回使用
                          String result = respResult.getResponseResult();
                      }
                  }
              });

     4. 销毁NLU服务。
            
            NluClient.getInstance().destroy();
