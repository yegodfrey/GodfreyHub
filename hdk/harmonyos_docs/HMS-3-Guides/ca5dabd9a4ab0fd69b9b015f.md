---
name: document/cn/HMS-3-Guides/game-events-v3
title: 游戏事件上报-V3
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-Guides/game-events-v3
source: portal
---

# 1\. 场景介绍

事件上报为开发者提供了收集玩家在游戏过程中产生的特定数据，上报并存储至华为游戏服务器，随后在AppGallery Connect上进行归纳分析的能力。

开发者可以自由决策需要上报玩家的哪些事件数据，比如：玩家付费达到一定金额，玩家进入特定游戏场景，玩家通过某关卡等。

开发者可以根据事件上报的数据针对性的对游戏进行改进，比如玩家购买某个游戏道具的上报人数远低于预期，那么开发者可以适当调整该游戏道具费用和趣味性。

一个事件包含的基本属性如下表。

**属性**| **说明**  
---|---  
事件ID| 在配置事件时由AppGallery Connect生成，用于唯一标识一个事件。  
事件名称| 事件的名称，在配置事件时由开发者自行定义。  
事件描述| 对事件的具体描述信息，通常情况下描述事件的具体含义。  
事件类型| 用于定义该事件的类型，当前支持3种事件类型。

  * 货币消耗：代表消耗货币的事件，例如“花费金币”。
  * 货币产出：代表产生了货币的事件，例如“赚取金币”。
  * 无：除了货币相关事件的其他事件。

  
事件数值| 事件的具体数值，无法在配置事件时设置，需要开发者在上报事件时传入。事件数值记录了事件的实际数据，例如“花费金币”事件传入事件数值“500”，表示玩家花费了500金币。事件数值支持两种类型：数字和时间，可在配置事件时设置。数字数值还可以额外定义数字的小数位数及单位。上报事件的数值后AppGallery Connect会自动根据数值的类型转化为对应的单位。  
事件图标| 事件在游戏中展示的图标，图标大小必须为512x512 px，图标文件必须为png或jpg文件，图标中建议不要包含任何本地化的文字。  
初始状态| 配置事件时由开发者自行定义事件是“显示”还是“隐藏”状态，开发者可根据此属性确定是否向用户展示该事件。  
列表顺序| 当前事件在所有事件中排列的顺序，由您在配置事件时指定。  
  
# 2\. 前提条件

  * 确认当前集成的HMS SDK在3.0.3.300版本及以上。

  * 在开发事件上报功能前，请确认已经在AppGallery Connect中配置事件，参见[新增事件](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-add_event)。

  * 调用事件相关接口时，用户的华为帐号必须为已登录状态，参见[游戏登录](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-Guides/game-login-v3)。




# 3\. 初始化EventsClient实例

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191210091244.70338394528204556300080908933253:50510416012928:2800:4C03F9EBD30A0EFCE7C644A063C8516CCFF1E4FFA242725D0FFB4519528731A4.png)

  


在使用事件接口的能力前需要先调用[Games.getEventsClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/games-v3#getEventsClient)()获取[EventsClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/eventsclient-v3)实例。示例代码如下：
    
    
    复制
      
        1. EventsClient client = Games.getEventsClient(this, mSignInHuaweiId);
    
    

接口中传入的mSignInHuaweiId对象在用户登录游戏时获取，如果当前华为帐号登录状态已失效，则需要调用[HuaweiSignInClient.getSignInIntent](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/account-huaweiidsignInclient#getSignInIntent)方法再次登录或调用[HuaweiSignInClient.silentSignIn](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/account-huaweiidsignInclient#silentSignIn)方法静默授权获取[SignInHuaweiId](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/account-signInhuaweiid)。

# 4\. 上报玩家的事件数据

应用可以在用户触发游戏事件时调用[EventsClient.increment](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/eventsclient-v3#increment)方法向华为游戏服务器上报事件数据，传入eventId和incrementAmount。

  * eventId为当前事件的ID，在配置事件时生成。

  * incrementAmount为在已有事件数值的基础上要增量增加的数值。例如游戏需要跟踪的事件为“击败100只怪物”，玩家在首次战斗中击败20只怪物，首次上报该事件时incrementAmount为20。玩家在下一次战斗中又击败了40只怪物，此时上报事件时incrementAmount为增量增加的数值40。




上报事件的示例代码如下：
    
    
    复制
      
        1. client.increment(eventId, incrementAmount);
    
    

# 5\. 获取事件数据  


  


开发者可以在游戏中向用户展示事件的数据。

● 如果用户需要查看所有事件数据，应用可以调用[EventsClient.load](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/eventsclient-v3#load)方法。

● 如果用户只需查看某些特定的事件，应用可以调用[EventsClient.loadByIds](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/eventsclient-v3#loadByIds)方法，在方法中传入包含指定事件ID的数组。

两种方法均可以通过boolean类型的forceReload参数指定是从华为游戏服务端还是从应用客户端本地缓存中查询数据。

获取所有事件数据的示例代码如下：
    
    
    复制
      
        1. Task<AnnotatedData<EventBuffer>> task = client.load(forceReload);
    
    

获取特定事件数据的示例代码如下：  

    
    
    复制
      
        1. Task<AnnotatedData<EventBuffer>> task = client.loadByIds(forceReload, eventIds);
    
    

事件结果数据返回的示例代码如下：
    
    
    复制
      
        1. private void addResultListener(Task<AnnotatedData<EventBuffer>> 
        2.      task) { 
        3.       if (task == null){ return;} 
        4.       task.addOnSuccessListener(new OnSuccessListener<AnnotatedData< 
        5.          EventBuffer>>() { 
        6.           @Override 
        7.           public void onSuccess(AnnotatedData<EventBuffer> data) { 
        8.               EventBuffer eventBuffer = data.get(); 
        9.               if (eventBuffer == null) { 
        10.                   showLog("eventBuffer is null"); 
        11.                   return; 
        12.               } 
        13.               Iterator<Event> iterator = eventBuffer.iterator(); 
        14.               // 事件数据集合 
        15.               events.clear(); 
        16.               while (iterator.hasNext()) { 
        17.                   Event event = iterator.next(); 
        18.                   events.add(event); 
        19.               } 
        20.           } 
        21.       }).addOnFailureListener(new OnFailureListener() { 
        22.           @Override 
        23.           public void onFailure(Exception e) { 
        24.               if (e instanceof ApiException) { 
        25.                   String result = "rtnCode:"  
        26.                    + ((ApiException)e).getStatusCode(); 
        27.                   showLog(result); 
        28.               } 
        29.           } 
        30.       }); 
        31.   }
    
    

  

