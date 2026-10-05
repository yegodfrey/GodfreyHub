---
name: document/cn/HMS-Guides/game-leaderboards-development
title: 排行榜
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/game-leaderboards-development
source: portal
---

# 1\. 场景介绍

排行榜能有效推动玩家之间的竞争和活跃。您可以在AppGallery Connect上为您的游戏创建排行榜（最多可达70个），随后就能在游戏中的特定时刻（比如升级或一局比赛结束时），将玩家的分数上报至华为游戏服务器，华为游戏服务器会自动处理玩家的分数并进行排名，随后您就能调用排行榜接口向用户展示这些排名。

排行榜基础功能说明：

  1. 华为游戏服务器会自动检查每次上报的分数是否优于该玩家之前的分数，如果是，就会将新分数更新至对应的排行榜上。

  2. 游戏可以有多个排行榜，最多可达70个。一个排行榜最多支持5000条记录。

  3. 游戏服务器会根据您创建的排行榜自动生成3个时间维度（每日，每周和所有时间）的排行榜。例如赛车游戏的完成时间排行榜，可以生成每天、每周、所有时间3个维度的排行榜。您无需为每个时间维度创建单独的排行榜。

  4.  排行榜基准时区为该服务器所属地的时区，比如中国为UTC-8。每日排行榜在每天0点重置，每周排行榜在周六24:00（欧洲站点）或周日24：00（其他站点）重置。只有同一站点的玩家，才会在同一排行榜中统计。

  5. 若为货币排行榜，需由您自行进行汇率转换，华为游戏服务器只对上报的值进行排名。




一个排行榜包含的基本属性如下表。

属性| 说明  
---|---  
排行榜ID| 在配置排行榜时由AppGallery   Connect生成，用于唯一标识一个排行榜。  
名称| 向用户展示的排行榜名称，在配置排行榜时由开发者自行定义。  
分数| 排行榜根据玩家的分数进行排名，排行榜的分数只能由游戏在玩家分数改变时调用游戏服务的接口上报给华为游戏服务器，在创建排行榜时无法指定。  
分数格式| 在创建排行榜时可以指定分数的格式，包含3种。

  * 货币：分数的单位为货币，分数值即为货币金额，根据货币金额排名。
  * 时间：分数的单位为时间，根据时间先后顺序排名。
  * 数字：根据数字大小排名，可以给数字添加自定义单位。

  
自定义单位| 如果分数的格式指定为数字，则可以为分数添加自定义单位，例如“米”、“公里”等。  
图标| 排行榜在游戏中展示的图标，图标大小必须为512x512 px，图标文件必须为png或jpg文件，图标中建议不要包含任何本地化的文字。  
排序| 排序决定了这个排行榜的分数是越高分数越靠前还是越低分数越靠前，排行榜发布之后不可修改。  
限制| 该排行榜允许分数的最大和最小值，能够拒绝一些明显作弊分数的出现，排行榜发布之后不可修改。  
列表顺序| 当前排行榜在所有排行榜中排列的顺序，由开发者在创建排行榜时指定。  
多语言| 排行榜支持多语言，由开发者在创建排行榜时自行定义。需要针对每种语言添加对应的名称和自定义单位。  
  
# 2\. 前提条件  


  * 在启动开发前，必须在AppGallery Connect创建排行榜并获取排行榜ID，具体操作参见[新增排行榜](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-add_leaderboard)。

  * 调用排行榜相关接口时，用户的华为帐号必须为已登录状态。

  * 用户必须打开华为应用市场（10.3及以上版本）中的游戏服务开关才能使用排行榜功能。如果用户没有开启游戏服务开关，当游戏调用排行榜相关接口时HMS SDK会自动拉起华为应用市场的游戏服务开关页面引导用户打开开关，如果用户未打开游戏服务开关，将返回7018错误码，游戏需要主动提示用户到华为应用市场“我的-设置-游戏服务”页面中开启游戏服务开关后才能使用排行榜功能。  





说明：

用户打开游戏服务授权后，建议您在游戏中提供取消游戏服务授权的功能，可调用[GamesClient.cancelGameService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/gamesclient-v4#cancelGameService)方法实现。

# 3\. 初始化RankingsClient实例

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191216223925.96179406525614290036189546999594:50510527080304:2800:FB0C980ED4FA715AF65D783CDAB639316ED03964D0C22A860F4E36803596A2AF.png?needInitFileName=true)

在使用排行榜接口的能力前都需要先调用[Games.getRankingsClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/games-v4#getRankingsClient)()获取[RankingsClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient)实例。示例代码如下：
      
      1. RankingsClient rankingsClient = Games.getRankingsClient(activity, mAuthHuaweiId);
    
    

接口中传入的mAuthHuaweiId为用户登录游戏时获取的[AuthHuaweiId](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-authhuaweiId)对象。如果当前华为帐号登录状态已失效，则需要调用[HuaweiIdAuthService.getSignInIntent](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice#getSignInIntent)方法再次登录或调用[HuaweiIdAuthService.silentSignIn](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice#silentSignIn)方法静默授权获取[AuthHuaweiId](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-authhuaweiId)。

# 4\. 提交玩家分数

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191216223939.34025258392305949879276880054530:50510527080304:2800:A184B2B5A5795E08A36A63A208E67E5EC1DF772404B70CEF3300E4D7BFB2DF73.png?needInitFileName=true)

1、当玩家分数变更时，应用先调用[RankingsClient.getRankingSwitchStatus](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getRankingSwitchStatus)方法查询玩家在当前排行榜的开关状态。
      
      1. Task<Integer> task = rankingsClient.getRankingSwitchStatus(); 
        2. task.addOnSuccessListener(new OnSuccessListener<Integer>() { 
        3. @Override 
        4. public void onSuccess(Integer statusValue) { 
        5.          //success to get the latest value 
        6. } 
        7. }); 
        8. task.addOnFailureListener(new OnFailureListener() { 
        9.     @Override 
        10.      public void onFailure(Exception e) { 
        11.      // errCode information 
        12. if (e instanceof ApiException) { 
        13.          String result = "rtnCode:" + ((ApiException) e).getStatusCode(); 
        14.        } 
        15.      } 
        16. });
    
    

2、用户首次登录时排行榜开关状态默认为0，表示玩家未设置在排行榜中公开自己的分数。开发者可以在游戏中设置开关选项供玩家打开开关。

3、当玩家打开开关时，应用可以调用[RankingsClient.setRankingSwitchStatus](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#setRankingSwitchStatus)将排行榜开关设置为1。
      
      1. Task<Integer> task = rankingsClient.setRankingSwitchStatus(stateValue); 
        2. task.addOnSuccessListener(new OnSuccessListener<Integer>() { 
        3. @Override 
        4. public void onSuccess(Integer statusValue) { 
        5.          // success to set the value,the server will reponse the latest value. 
        6. } 
        7. }); 
        8. task.addOnFailureListener(new OnFailureListener() { 
        9.     @Override 
        10.      public void onFailure(Exception e) { 
        11.      // errCode information 
        12. if (e instanceof ApiException) { 
        13.          String result = "rtnCode:" + ((ApiException) e).getStatusCode(); 
        14.        } 
        15.      } 
        16. });
    
    

4、如果当前排行榜的开关状态为1，则可以调用提交玩家分数。

  *  如果排行榜分数有自定义单位，调用[RankingsClient.submitRankingScore(String rankingId, long score, String scoreTips)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#submitRankingScore)或[RankingsClient.submitScoreWithResult(String rankingId, long score, String scoreTips)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#submitScoreWithResult)方法。

  * 如果排行榜分数没有自定义单位，调用[RankingsClient.submitRankingScore(String rankingId, long score)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#submitRankingScore2)或[RankingsClient.submitScoreWithResult(String rankingId, long score)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#submitScoreWithResult2)方法。



      
      1. RankingsClient rankingsClient = Games.getRankingsClient(activity, signInHuaweiId); 
        2. Task<ScoreSubmissionInfo> scoreTask= rankingsClient.submitScoreWithResult(rankingId, score); 
        3. scoreTask.addOnSuccessListener(new OnSuccessListener<ScoreSubmissionInfo>() { 
        4.    @Override 
        5.     public void onSuccess(ScoreSubmissionInfo scoreTask) { 
        6.          //success to get ScoreSubmissionInfo bean data. 
        7.     } 
        8. }); 
        9. scoreTask.addOnFailureListener(new OnFailureListener() { 
        10.     @Override 
        11.     public void onFailure(Exception e) { 
        12.        if (e instanceof ApiException) { 
        13.           // errCode information 
        14.    # 1. 场景介绍
         
         排行榜能有效推动玩家之间的竞争和活跃。您可以在AppGallery Connect上为您的游戏创建排行榜（最多可达70个），随后就能在游戏中的特定时刻（比如升级或一局比赛结束时），将玩家的分数上报至华为游戏服务器，华为游戏服务器会自动处理玩家的分数并进行排名，随后您就能调用排行榜接口向用户展示这些排名。
         
         排行榜基础功能说明：
         
              1. 华为游戏服务器会自动检查每次上报的分数是否优于该玩家之前的分数，如果是，就会将新分数更新至对应的排行榜上。
         
              2. 游戏可以有多个排行榜，最多可达70个。一个排行榜最多支持5000条记录。
         
              3. 游戏服务器会根据您创建的排行榜自动生成3个时间维度（每日，每周和所有时间）的排行榜。例如赛车游戏的完成时间排行榜，可以生成每天、每周、所有时间3个维度的排行榜。您无需为每个时间维度创建单独的排行榜。
         
              4.  排行榜基准时区为该服务器所属地的时区，比如中国为UTC-8。每日排行榜在每天0点重置，每周排行榜在周六24:00（欧洲站点）或周日24：00（其他站点）重置。只有同一站点的玩家，才会在同一排行榜中统计。
         
              5. 若为货币排行榜，需由您自行进行汇率转换，华为游戏服务器只对上报的值进行排名。
    
    一个排行榜包含的基本属性如下表。
    
    属性| 说明  
    ---|---  
    排行榜ID| 在配置排行榜时由AppGallery   Connect生成，用于唯一标识一个排行榜。  
    名称| 向用户展示的排行榜名称，在配置排行榜时由开发者自行定义。  
    分数| 排行榜根据玩家的分数进行排名，排行榜的分数只能由游戏在玩家分数改变时调用游戏服务的接口上报给华为游戏服务器，在创建排行榜时无法指定。  
    分数格式| 在创建排行榜时可以指定分数的格式，包含3种。
              * 货币：分数的单位为货币，分数值即为货币金额，根据货币金额排名。
              * 时间：分数的单位为时间，根据时间先后顺序排名。
              * 数字：根据数字大小排名，可以给数字添加自定义单位。  
    自定义单位| 如果分数的格式指定为数字，则可以为分数添加自定义单位，例如“米”、“公里”等。  
    图标| 排行榜在游戏中展示的图标，图标大小必须为512x512 px，图标文件必须为png或jpg文件，图标中建议不要包含任何本地化的文字。  
    排序| 排序决定了这个排行榜的分数是越高分数越靠前还是越低分数越靠前，排行榜发布之后不可修改。  
    限制| 该排行榜允许分数的最大和最小值，能够拒绝一些明显作弊分数的出现，排行榜发布之后不可修改。  
    列表顺序| 当前排行榜在所有排行榜中排列的顺序，由开发者在创建排行榜时指定。  
    多语言| 排行榜支持多语言，由开发者在创建排行榜时自行定义。需要针对每种语言添加对应的名称和自定义单位。  
      
    # 2. 前提条件  
    
         
              * 在启动开发前，必须在AppGallery Connect创建排行榜并获取排行榜ID，具体操作参见[新增排行榜](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-add_leaderboard)。
         
              * 调用排行榜相关接口时，用户的华为帐号必须为已登录状态。
         
              * 用户必须打开华为应用市场（10.3及以上版本）中的游戏服务开关才能使用排行榜功能。如果用户没有开启游戏服务开关，当游戏调用排行榜相关接口时HMS SDK会自动拉起华为应用市场的游戏服务开关页面引导用户打开开关，如果用户未打开游戏服务开关，将返回7018错误码，游戏需要主动提示用户到华为应用市场“我的-设置-游戏服务”页面中开启游戏服务开关后才能使用排行榜功能。  
           
    
    说明：
    
    用户打开游戏服务授权后，建议您在游戏中提供取消游戏服务授权的功能，可调用[GamesClient.cancelGameService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/gamesclient-v4#cancelGameService)方法实现。
    
    # 3. 初始化RankingsClient实例
    
    ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191216223925.96179406525614290036189546999594:50510527080304:2800:FB0C980ED4FA715AF65D783CDAB639316ED03964D0C22A860F4E36803596A2AF.png?needInitFileName=true)
    
    在使用排行榜接口的能力前都需要先调用[Games.getRankingsClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/games-v4#getRankingsClient)()获取[RankingsClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient)实例。示例代码如下：
         
         1. RankingsClient rankingsClient = Games.getRankingsClient(activity, mAuthHuaweiId);

接口中传入的mAuthHuaweiId为用户登录游戏时获取的[AuthHuaweiId](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-authhuaweiId)对象。如果当前华为帐号登录状态已失效，则需要调用[HuaweiIdAuthService.getSignInIntent](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice#getSignInIntent)方法再次登录或调用[HuaweiIdAuthService.silentSignIn](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice#silentSignIn)方法静默授权获取[AuthHuaweiId](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-authhuaweiId)。

# 4\. 提交玩家分数

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191216223939.34025258392305949879276880054530:50510527080304:2800:A184B2B5A5795E08A36A63A208E67E5EC1DF772404B70CEF3300E4D7BFB2DF73.png?needInitFileName=true)

1、当玩家分数变更时，应用先调用[RankingsClient.getRankingSwitchStatus](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getRankingSwitchStatus)方法查询玩家在当前排行榜的开关状态。
         
         1. Task<Integer> task = rankingsClient.getRankingSwitchStatus(); 
              2. task.addOnSuccessListener(new OnSuccessListener<Integer>() { 
              3. @Override 
              4. public void onSuccess(Integer statusValue) { 
              5.          //success to get the latest value 
              6. } 
              7. }); 
              8. task.addOnFailureListener(new OnFailureListener() { 
              9.     @Override 
              10.      public void onFailure(Exception e) { 
              11.      // errCode information 
              12. if (e instanceof ApiException) { 
              13.          String result = "rtnCode:" + ((ApiException) e).getStatusCode(); 
              14.        } 
              15.      } 
              16. });

2、用户首次登录时排行榜开关状态默认为0，表示玩家未设置在排行榜中公开自己的分数。开发者可以在游戏中设置开关选项供玩家打开开关。

3、当玩家打开开关时，应用可以调用[RankingsClient.setRankingSwitchStatus](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#setRankingSwitchStatus)将排行榜开关设置为1。
         
         1. Task<Integer> task = rankingsClient.setRankingSwitchStatus(stateValue); 
              2. task.addOnSuccessListener(new OnSuccessListener<Integer>() { 
              3. @Override 
              4. public void onSuccess(Integer statusValue) { 
              5.          // success to set the value,the server will reponse the latest value. 
              6. } 
              7. }); 
              8. task.addOnFailureListener(new OnFailureListener() { 
              9.     @Override 
              10.      public void onFailure(Exception e) { 
              11.      // errCode information 
              12. if (e instanceof ApiException) { 
              13.          String result = "rtnCode:" + ((ApiException) e).getStatusCode(); 
              14.        } 
              15.      } 
              16. });

4、如果当前排行榜的开关状态为1，则可以调用提交玩家分数。

     *  如果排行榜分数有自定义单位，调用[RankingsClient.submitRankingScore(String rankingId, long score, String scoreTips)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#submitRankingScore)或[RankingsClient.submitScoreWithResult(String rankingId, long score, String scoreTips)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#submitScoreWithResult)方法。

     * 如果排行榜分数没有自定义单位，调用[RankingsClient.submitRankingScore(String rankingId, long score)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#submitRankingScore2)或[RankingsClient.submitScoreWithResult(String rankingId, long score)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#submitScoreWithResult2)方法。
         
         1. RankingsClient rankingsClient = Games.getRankingsClient(activity, signInHuaweiId); 
              2. Task<ScoreSubmissionInfo> scoreTask= rankingsClient.submitScoreWithResult(rankingId, score); 
              3. scoreTask.addOnSuccessListener(new OnSuccessListener<ScoreSubmissionInfo>() { 
              4.    @Override 
              5.     public void onSuccess(ScoreSubmissionInfo scoreTask) { 
              6.          //success to get ScoreSubmissionInfo bean data. 
              7.     } 
              8. }); 
              9. scoreTask.addOnFailureListener(new OnFailureListener() { 
              10.     @Override 
              11.     public void onFailure(Exception e) { 
              12.        if (e instanceof ApiException) { 
              13.           // errCode information 
              14.            String result = "rtnCode:" + ((ApiException) e).getStatusCode(); 
              15.        } 
              16.     } 
              17. });

# 5\. 展示排行榜列表

玩家在排行榜入口选择排行榜后，可以将排行榜列表界面展示给用户选择。排行榜列表界面的展示方法分为2种：

     * 直接展示应用助手的排行榜列表页面：游戏需要获取应用助手排行榜界面的Intent对象，然后通过startActivityForResult方法拉起应用助手的排行榜页面，开发者不需要自己开发排行榜列表页面。此方式必须保证玩家终端EMUI为9.0及以上版本，且必须安装10.3及以上版本的华为应用助手。

注意：

只有游戏正式上架后华为应用助手才能正常展示排行榜列表，测试阶段无法正常展示。

     * 自行展示排行榜：获取排行榜数据，自行开发排行榜列表页面。

### **直接展示应用助手的排行榜**

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191216223954.64054213090152273741832430901852:50510527080304:2800:96C0ADC302AC1D4A299D680BFF8D31184CCB23A33EE57940DACB61E7CC1A08DF.png?needInitFileName=true)

1、当玩家进入排行榜入口时，应用获取排行榜界面对应的Intent对象。

     *  如果获取全部排行榜，调用[RankingsClient.getTotalRankingsIntent](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getTotalRankingsIntent)方法。

     * 如果获取某个排行榜全部时间维度的排行榜选择界面，调用[RankingsClient.getRankingIntent(String rankingId)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getRankingIntent2)方法。

     *  如果获取某个排行榜指定时间维度的排行榜选择界面，调用[RankingsClient.getRankingIntent(String rankingId, int timeDimension)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getRankingIntent)方法。

2、 当取得排行榜选择界面对应的Intent对象后，您可以调用startActivityForResult方法直接拉起华为应用助手的排行榜选择界面。
         
         1. Task<Intent> intentTask = rankingsClient.getTotalRankingsIntent(); 
              2. intentTask.addOnSuccessListener(new OnSuccessListener<Intent>() { 
              3.    @Override 
              4.    public void onSuccess(Intent intent) { 
              5.        try { 
              6.            //use startActivityForResult to launch activity 
              7.             startActivityForResult(intent, 100); 
              8.         } catch (Exception e) { 
              9.            //exception when launch the activity 
              10.         } 
              11.    } 
              12. }); 
              13. intentTask.addOnFailureListener(new OnFailureListener() { 
              14.     @Override 
              15.     public void onFailure(Exception e) { 
              16.       if (e instanceof ApiException) { 
              17.          // errCode infomation 
              18.         String result = "rtnCode:" + ((ApiException) e).getStatusCode(); 
              19.       } 
              20.     } 
              21. });

### **自行展示排行榜列表**

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191216224006.79660445836383860294522124786552:50510527080304:2800:030311887A2EF52E123016683E25562A916F32A3664214A8DF0AC1F7C10EE275.png?needInitFileName=true)

玩家进入排行榜入口时，应用调用[RankingsClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient)的相关接口获取排行榜列表。

     * 如果需要获取所有排行榜，调用[RankingsClient.getRankingSummary(boolean isRealTime)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getRankingSummary)方法。

     * 如果仅需要获取某个排行榜，调用[RankingsClient.getRankingSummary(String rankingId, boolean isRealTime)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getRankingSummary2)方法。

两种方法均支持指定从游戏服务器获取还是从本地缓存获取。
         
         1. Task<Ranking> task = rankingsClient.getRankingSummary(rankingId, isRealTime);
              2. task.addOnSuccessListener(new OnSuccessListener<Ranking>() {
              3.     @Override
              4.     public void onSuccess(Ranking s) {
              5.       showLog(method + " success. ");  
              6.       //TODO：获取排行榜数据
              7.     }
              8. });

# 6\. 展示排行榜分数信息

当玩家打开某个排行榜时，可以浏览排行榜中的各种分数信息。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191216224045.43466686739878054262482090597291:50510527080304:2800:59C714A616909439CB456F5BE43A7EBC71F6507C825BE07E16997829712CB39F.png?needInitFileName=true)

当玩家浏览排行榜时，开发者可以实现各种场景的排行榜分数展示页面。

     * 如果需要支持不从头展示的排行榜，而展示玩家自己位置的排行榜。假如玩家位于第1000名，打开排行榜页面时，玩家的分数可以直接展示在排行榜上，此时可以结合[RankingsClient.getCurrentPlayerRankingScore](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getCurrentPlayerRankingScore)和[RankingsClient.getPlayerCenteredRankingScores](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getPlayerCenteredRankingScores)方法实现。

     * 如果排行榜需要分页浏览，则可以使用[RankingsClient.getMoreRankingScores](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getMoreRankingScores)方法。

     * 如果排行榜需要仅获取顶部的数据，则可以使用[RankingsClient.getRankingTopScores](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getRankingTopScores)方法。
         
         1. Task<RankingsClient.RankingScores> task
              2.         = rankingsClient.getRankingTopScores(rankingId, timeDimension, maxResults, offsetPlayerRank, pageDirection);
              3. task.addOnSuccessListener(new OnSuccessListener<RankingsClient.RankingScores>() {
              4.     @Override
              5.     public void onSuccess(RankingsClient.RankingScores s) {
              6.         showLog(method + " success. ");
              7.         //TODO：获取排行榜分数
              8.     }
              9. });

  


# 1\. 场景介绍

游戏登录是指开发者为应用申请游戏服务后，华为允许应用使用用户的华为帐号登录游戏。通过华为游戏服务，开发者可以安全快速地获取用户，共享华为庞大的用户资源。

游戏登录的各种场景交互细节如下所示：

● 场景1：游戏启动时登录华为帐号。

1、用户启动游戏，应用加载游戏首页。

2、如果用户在当前设备未登录华为帐号，将展示华为帐号登录页面。

3、如果用户的华为帐号为中国大陆用户且未进行实名认证，将展示实名认证页面引导用户实名认证。中国大陆以外地区用户不展示实名认证页面。

4、用户登录成功后，应用可以获取玩家信息。

● 场景2：游戏启动时跳过华为帐号登录。

1、用户启动游戏，应用加载游戏首页。

2、如果用户在当前设备未登录华为帐号，将展示华为帐号登录页面。

3、用户选择取消登录返回游戏首页。

4、应用允许用户匿名或通过非华为帐号进入游戏。

说明：

中国大陆地区发布的网络游戏不允许跳过华为帐号登录，仅允许部分单机游戏通过游客方式进入游戏。

● 场景3：游戏内登录。

1、用户点击游戏内华为帐号登录入口按钮，展示华为帐号登录页面。游戏内登录入口图标需使用华为帐号图标标识，具体要求请参见[华为图标规范](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/icon-specification)。

2、用户输入帐号信息后点击登录。

3、用户登录成功后，应用可以获取华为帐号下的玩家信息。  


说明：

此场景仅允许中国大陆以外地区发布的游戏实现，中国大陆地区发布的游戏不允许游戏内登录。

# 2\. 业务流程

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200109120009.10921215932896504137894034074049:50510429100510:2800:0494A3F1A23E76D712612FAD252C5823DC632104F4CEEF267B257B624454C42A.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

1、用户启动游戏时登录，或在游戏内通过华为帐号登录图标入口登录（仅适用于中国大陆以外地区）。

2、应用调用[HuaweiIdAuthManager](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthmanager)的getService方法请求初始化[HuaweiIdAuthService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice)实例。

3、HMS SDK向应用返回当前用户的[HuaweiIdAuthService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice)实例。

4、应用调用[HuaweiIdAuthService.getSignInIntent](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice#getSignInIntent)方法向HMS SDK发起华为帐号登录请求。

5、HMS SDK检查用户的华为帐号登录情况。  
如果用户在当前终端未登录华为帐号，转到6。否则，转到8。

6、HMS SDK向用户拉起华为帐号登录页面。

7、用户在华为帐号登录页面进行登录操作。

     * 如果用户输入华为帐号名和密码后确认登录，转到下一步。

     * 如果用户此时选择取消登录，则直接回到游戏首页。对于中国大陆发布的游戏，仅允许少量单机游戏通过游客方式访问 。对于中国大陆以外地区发布的游戏，由应用自行控制是否匿名或通过其他帐号进入游戏，本流程结束，如果用户后续再通过游戏内的华为帐号登录图标入口登录，则从2重新开始登录流程。

8、HMS SDK检查用户华为帐号的实名认证情况。  
如果是中国大陆用户且未进行实名认证，转到9。否则，转到11。

9、HMS SDK向用户拉起实名认证页面。

10、用户提交实名认证信息。

11、HMS SDK向应用返回[AuthHuaweiId](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-authhuaweiId)对象，应用可以从该对象中获取用户的华为帐号信息。

12、HMS SDK向用户展示欢迎信息。

13、如果游戏配置了游戏公告，HMS SDK同时向用户展示游戏公告信息。

14、应用调用[Games.getPlayersClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/games-v4#getPlayersClient)方法请求初始化[PlayersClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/playersclient-v4)实例。

15、HMS SDK向应用返回当前玩家的[PlayersClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/playersclient-v4)实例。

16、应用调用[PlayersClient.getCurrentPlayer](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/playersclient-v4#getCurrentPlayer)方法向HMS SDK请求获取当前玩家信息。   

注意：

强烈建议接入getCurrentPlayer方法，否则将影响游戏首发评级和推荐资源。

17、HMS SDK向应用返回包含当前玩家信息的[Player](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/player-v4)对象。

18、应用从Player对象中获取用户昵称、用户头像、用户等级、登录签名、时间戳等信息。

     * 如果应用有自己的开发者服务器，转到19。

     * 如果应用没有自己的服务器，则由应用客户端直接调用[校验登录签名](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/verify-login-signature)接口请求登录签名验证，验证成功后即可允许玩家进入游戏。    

注意：

为了保证安全性，强烈建议由应用服务端进行登录签名验证。

19、应用根据获取的玩家信息向开发者服务器请求进行登录验签，以验证玩家信息的准确性。    

20、开发者服务器调用[校验登录签名](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/verify-login-signature)接口向华为服务器请求进行登录签名验证。        String result = "rtnCode:" + ((ApiException) e).getStatusCode();
  15.       }
  16.    }
  17. });



# 5\. 展示排行榜列表

玩家在排行榜入口选择排行榜后，可以将排行榜列表界面展示给用户选择。排行榜列表界面的展示方法分为2种：

  * 直接展示应用助手的排行榜列表页面：游戏需要获取应用助手排行榜界面的Intent对象，然后通过startActivityForResult方法拉起应用助手的排行榜页面，开发者不需要自己开发排行榜列表页面。此方式必须保证玩家终端EMUI为9.0及以上版本，且必须安装10.3及以上版本的华为应用助手。




注意：

只有游戏正式上架后华为应用助手才能正常展示排行榜列表，测试阶段无法正常展示。

  * 自行展示排行榜：获取排行榜数据，自行开发排行榜列表页面。




### **直接展示应用助手的排行榜**

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191216223954.64054213090152273741832430901852:50510527080304:2800:96C0ADC302AC1D4A299D680BFF8D31184CCB23A33EE57940DACB61E7CC1A08DF.png?needInitFileName=true)

1、当玩家进入排行榜入口时，应用获取排行榜界面对应的Intent对象。

  *  如果获取全部排行榜，调用[RankingsClient.getTotalRankingsIntent](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getTotalRankingsIntent)方法。

  * 如果获取某个排行榜全部时间维度的排行榜选择界面，调用[RankingsClient.getRankingIntent(String rankingId)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getRankingIntent2)方法。

  *  如果获取某个排行榜指定时间维度的排行榜选择界面，调用[RankingsClient.getRankingIntent(String rankingId, int timeDimension)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getRankingIntent)方法。




2、 当取得排行榜选择界面对应的Intent对象后，您可以调用startActivityForResult方法直接拉起华为应用助手的排行榜选择界面。
      
      1. Task<Intent> intentTask = rankingsClient.getTotalRankingsIntent(); 
        2. intentTask.addOnSuccessListener(new OnSuccessListener<Intent>() { 
        3.    @Override 
        4.    public void onSuccess(Intent intent) { 
        5.        try { 
        6.            //use startActivityForResult to launch activity 
        7.             startActivityForResult(intent, 100); 
        8.         } catch (Exception e) { 
        9.            //exception when launch the activity 
        10.         } 
        11.    } 
        12. }); 
        13. intentTask.addOnFailureListener(new OnFailureListener() { 
        14.     @Override 
        15.     public void onFailure(Exception e) { 
        16.       if (e instanceof ApiException) { 
        17.          // errCode infomation 
        18.         String result = "rtnCode:" + ((ApiException) e).getStatusCode(); 
        19.       } 
        20.     } 
        21. });
    
    

### **自行展示排行榜列表**

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191216224006.79660445836383860294522124786552:50510527080304:2800:030311887A2EF52E123016683E25562A916F32A3664214A8DF0AC1F7C10EE275.png?needInitFileName=true)

玩家进入排行榜入口时，应用调用[RankingsClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient)的相关接口获取排行榜列表。

  * 如果需要获取所有排行榜，调用[RankingsClient.getRankingSummary(boolean isRealTime)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getRankingSummary)方法。

  * 如果仅需要获取某个排行榜，调用[RankingsClient.getRankingSummary(String rankingId, boolean isRealTime)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getRankingSummary2)方法。




两种方法均支持指定从游戏服务器获取还是从本地缓存获取。
      
      1. Task<Ranking> task = rankingsClient.getRankingSummary(rankingId, isRealTime);
        2. task.addOnSuccessListener(new OnSuccessListener<Ranking>() {
        3.     @Override
        4.     public void onSuccess(Ranking s) {
        5.       showLog(method + " success. ");  
        6.       //TODO：获取排行榜数据
        7.     }
        8. });
    
    

# 6\. 展示排行榜分数信息

当玩家打开某个排行榜时，可以浏览排行榜中的各种分数信息。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191216224045.43466686739878054262482090597291:50510527080304:2800:59C714A616909439CB456F5BE43A7EBC71F6507C825BE07E16997829712CB39F.png?needInitFileName=true)

当玩家浏览排行榜时，开发者可以实现各种场景的排行榜分数展示页面。

  * 如果需要支持不从头展示的排行榜，而展示玩家自己位置的排行榜。假如玩家位于第1000名，打开排行榜页面时，玩家的分数可以直接展示在排行榜上，此时可以结合[RankingsClient.getCurrentPlayerRankingScore](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getCurrentPlayerRankingScore)和[RankingsClient.getPlayerCenteredRankingScores](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getPlayerCenteredRankingScores)方法实现。

  * 如果排行榜需要分页浏览，则可以使用[RankingsClient.getMoreRankingScores](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getMoreRankingScores)方法。

  * 如果排行榜需要仅获取顶部的数据，则可以使用[RankingsClient.getRankingTopScores](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/rankingsclient#getRankingTopScores)方法。



      
      1. Task<RankingsClient.RankingScores> task
        2.         = rankingsClient.getRankingTopScores(rankingId, timeDimension, maxResults, offsetPlayerRank, pageDirection);
        3. task.addOnSuccessListener(new OnSuccessListener<RankingsClient.RankingScores>() {
        4.     @Override
        5.     public void onSuccess(RankingsClient.RankingScores s) {
        6.         showLog(method + " success. ");
        7.         //TODO：获取排行榜分数
        8.     }
        9. });
    
    

  

