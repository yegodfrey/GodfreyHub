---
name: document/cn/HMS-Guides/Nearby-Service-Nearby-Connection
title: Nearby Connection 开发
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/Nearby-Service-Nearby-Connection
source: portal
---

# 1 业务流程

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200110195828.21868006866412669804334719014220:50510609013655:2800:87DA910C0397B05E1E6FF1771CEEEE949F34016A1784B470AA615BE0B5F53AC8.png?needInitFileName=true)

整体流程可以划分为4个阶段。

  1. 广播扫描阶段：广播端启动广播，发现端启动扫描以发现广播端。

  2. 建立连接阶段：发现端发起连接并启动对称的身份验证流程，双端独立接受或拒绝连接请求。

  3. 传输数据阶段：建立连接后，双端进行数据交换。

  4. 断开连接阶段：双端任意一端发起断开连接，通知对端连接断开。




**广播扫描：**

  1. 广播端调用[startBroadcasting](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#startBroadcasting)()启动广播。

  2. 发现端调用[startScan](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#startScan)()启动扫描以发现附近的设备。

  3.  由[onFound](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-scanendpointcallback#onFound)()方法通知扫描结果。




**建立连接：**

  1. 发现端调用[requestConnect](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#requestConnect)()向广播端发起连接请求。

  2. 两端由[onEstablish](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-connectcallback#onEstablish)()通知连接启动后，均可以调用[acceptConnect](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#acceptConnect)()接受连接或调用[rejectConnect](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#rejectConnect)()拒绝连接。

  3. 两端由[onResult](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-connectcallback#onResult)()通知连接结果。仅当两端都接受连接时，连接才能建立。




**传输数据：**

  1. 连接建立后，双端均可以调用[sendData](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-transfer-transferengine#sendData_endpointId)()发送数据给对端。

  2. 接收数据的一端由[onReceived](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-transfer-datacallback#onReceived)()通知接收到数据；两端由[onTransferUpdate](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-transfer-datacallback#onTransferUpdate)()通知当前的传输状态。




**断开连接：**

**     **主动断开连接的一端调用[disconnect](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#disconnect)()断开连接，对端由[onDisconnected](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-connectcallback#onDisconnected)()通知连接断开。

# 2 开发步骤

## 2.1 声明系统权限

Nearby Connection开发场景需要使用Nearby Discovery API和Nearby Transfer API，您的应用必须根据所使用的策略声明适当的权限。更多策略相关的信息参见选择策略章节。例如：使用POLICY_STAR策略开发文件传输的应用，需要添加特定的权限到AndroidManifest.xml：
      
      1. <!-- Required for Nearby Discovery and Nearby Transfer -->   
         
        2. <uses-permission android:name="android.permission.BLUETOOTH" />   
         
        3. <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />   
        4. <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />    
        5. <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />   
         
        6. <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />   
         
        7. <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />   
         
        8. <!-- Required for FILE payloads -->   
         
        9. <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>  
        10. <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" /> 
    
    

由于ACCESS_FINE_LOCATION，WRITE_EXTERNAL_STORAGE和READ_EXTERNAL_STORAGE 是危险的系统权限，因此，您必须动态的申请这些权限。如果权限不足，近距离通信服务（Nearby Service）将会拒绝您的应用开启广播或者开启发现。

 

## 2.2 选择策略

Nearby Discovery支持3种不同的连接策略：POLICY_MESH，POLICY_STAR和POLICY_P2P。请根据您的应用场景优选策略。 

注意：

为了使用策略，应用必须声明以下权限：

  * BLUETOOTH  

  * BLUETOOTH_ADMIN  

  * ACCESS_WIFI_STATE  

  * CHANGE_WIFI_STATE  

  * ACCESS_COARSE_LOCATION  




此外，在运行Android Q（及更高版本）的设备上，需要用ACCESS_FINE_LOCATION代替ACCESS_COARSE_LOCATION。   

策略选择并创建[BroadcastOption](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-broadcastoption)对象的示例代码如下：
      
      1. Policy policy = Policy.POLICY_STAR;  
        2. BroadcastOption broadcastOption = new BroadcastOption.Builder().setPolicy (policy).build();  
         
    
    

### 2.2.1 POLICY_MESH  

POLICY_MESH是一种支持M-N或者网状连接拓扑的点到点连接策略，是默认策略。这使无线范围内的设备都可以发起到M个设备的连接并接受从N个设备发起的连接。

该策略在拓扑约束方面比POLICY_STAR灵活的多，但会降低连接的带宽。它非常适合具有较小有效载荷且需要网状连接的场景（例如：多人游戏）。

### 2.2.2 POLICY_STAR  

POLICY_STAR是一种支持1-N或者星型连接拓扑的点到点连接策略。这使无线范围内的设备进行星型连接成为可能，其中每个设备在任何给定时间都可以充当hub角色（它可以接受来自N个设备的连接）或分支角色（可以发起单个到hub的连接）。但是不能同时扮演两个角色。

该策略在拓扑约束方面比POLICY_MESH更严格，但会带来更高的连接带宽。这非常适合需要高带宽的场景（例如：与一群朋友共享视频）。

### 2.2.3 POLICY_P2P  

POLICY_P2P是一种支持1-1连接拓扑的点到点连接策略。这使无线范围内的设备能够以尽可能大的吞吐量进行连接。但是只能连接一个设备。

该策略在拓扑约束方面比POLICY_STAR更严格，但会带来更高的连接带宽。它非常适合需要高带宽的场景（例如：将大型视频共享到另一台设备）。

  


## 2.3 广播和扫描

一旦您授予应用所需的权限，并为您的应用选择一个策略，您可以开始广播和扫描以发现附近的设备。

### 2.3.1 启动广播  

广播端以选定的policy和serviceId为参数，调用[startBroadcasting](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#startBroadcasting)()启动广播。其中serviceId应该唯一标识您的应用。建议使用您应用的包名作为serviceId（例如：com.huawei.example.myapp）。

示例代码如下：
      
      1. private void doStartBroadcasting() {  
         
        2.     Policy policy = Policy.POLICY_STAR;  
         
        3.     BroadcastOption broadcastOption = new BroadcastOption.Builder().setPolicy(policy).build();  
         
        4.     Nearby.getDiscoveryEngine(getApplicationContext())  
         
        5.             .startBroadcasting(name, serviceId, connectCallback, broadcastOption)  
         
        6.             .addOnSuccessListener(  
         
        7.                     new OnSuccessListener<Void>() {  
         
        8.                         @Override  
         
        9.                         public void onSuccess(Void aVoid) {  
         
        10.                             /* We are broadcasting. */  
         
        11.                         }  
         
        12.                     })  
         
        13.             .addOnFailureListener(  
         
        14.                     new OnFailureListener() {  
         
        15.                         @Override  
         
        16.                         public void onFailure(Exception e) {  
         
        17.                             /* Fail to start broadcasting. */  
         
        18.                         }  
         
        19.                     });  
         
        20. } 
    
    

参数connectCallback是一个连接监听回调类实例，用于通知您连接状态信息。有关ConnectCallback类的详细信息及示例代码，参见确认连接章节。

### 2.3.2 启动扫描  

发现端以选定的policy和serviceId为参数，调用[startScan](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#startScan)()启动扫描以发现附近的设备。

示例代码如下：
      
      1. private void doStartScan() {  
         
        2.     Policy policy = Policy.POLICY_STAR;  
         
        3.     ScanOption scanOption = new ScanOption.Builder().setPolicy(policy).build();  
         
        4.     Nearby.getDiscoveryEngine(getApplicationContext())  
         
        5.             .startScan(serviceId, scanEndpointCallback, scanOption)  
         
        6.             .addOnSuccessListener(  
         
        7.                     new OnSuccessListener<Void>() {  
         
        8.                         @Override  
         
        9.                         public void onSuccess(Void aVoid) {  
         
        10.                             /* Start scan success. */  
         
        11.                         }  
         
        12.                     })  
         
        13.             .addOnFailureListener(  
         
        14.                     new OnFailureListener() {  
         
        15.                         @Override  
         
        16.                         public void onFailure(Exception e) {  
         
        17.                             /* Fail to start scan. */  
         
        18.                         }  
         
        19.                     }); 
        20. }  
         
    
    

参数scanEndpointCallback是一个扫描监听回调类实例，通知发现端扫描结果，发现设备或者已发现设备丢失。
      
      1. private ScanEndpointCallback scanEndpointCallback =
        2.             new ScanEndpointCallback() {
        3.                 @Override
        4.                 public void onFound(String endpointId, ScanEndpointInfo discoveryEndpointInfo) {
        5.                     mEndpointId = endpointId;
        6.                     mDiscoveryEngine.requestConnect(myNameStr, mEndpointId, mConnCb);
        7.                 }
        8.                 @Override
        9.                 public void onLost(String endpointId) {
        10.                     Log.d(TAG, "Nearby Connection Demo app: Lost endpoint: " + endpointId);
        11.                 }
        12.             };
    
    

### 2.3.3 停止广播  

当需要停止广播时，调用[stopBroadcasting](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#stopBroadcasting)()。停止广播后，广播端不可以接收来自发现端的连接请求。

### 2.3.4 停止扫描  

当需要停止扫描时，调用[stopScan](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#stopScan)()。停止扫描后，发现端仍可以向已发现的设备请求连接。一种常见的做法是：一旦发现需要连接的设备，就调用[stopScan](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#stopScan)()停止扫描。

 

## 2.4 建立连接

### 2.4.1 请求连接  

当附近的设备被发现，发现端可以调用[requestConnect](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#requestConnect)()发起连接。

示例代码如下：
      
      1. private void doStartConnect(String name, String endpointId) throws RemoteException {  
         
        2.     Nearby.getDiscoveryEngine(getApplicationContext())  
         
        3.             .requestConnect(name, endpointId, connectCallback)  
         
        4.             .addOnSuccessListener(  
         
        5.                     new OnSuccessListener<Void>() {  
         
        6.                         @Override  
         
        7.                         public void onSuccess(Void aVoid) {  
         
        8.                             /* Request success. */  
         
        9.                         }  
         
        10.                     })  
         
        11.             .addOnFailureListener(  
         
        12.                     new OnFailureListener() {  
         
        13.                         @Override  
         
        14.                         public void onFailure(Exception e) {  
         
        15.                             /* Fail to request connect. */  
         
        16.                         }  
         
        17.                     });  
         
        18. }  
    
    

当然，根据您的需要，您可以向用户展示发现的设备列表，并允许他们选择连接哪些设备。

### 2.4.2 确认连接  

发现端发起连接后，通过回调connectCallback的[onEstablish](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-connectcallback#onEstablish)()方法将连接建立事件通知给双方。双方必须通过调用[acceptConnect](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#acceptConnect)()接受连接或者通过调用[rejectConnect](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#rejectConnect)()拒绝连接。仅当双方都接受连接时，连接才会建立成功。如果一方或双方都选择拒绝，则连接失败。无论哪种方式，连接结果都会通过[onResult](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-connectcallback#onResult)()方法通知。

示例代码如下：
      
      1. private final ConnectCallback connectCallback =  
         
        2.         new ConnectCallback() {  
         
        3.             @Override  
         
        4.             public void onEstablish(String endpointId, ConnectInfo connectInfo) {  
         
        5.                 /* Accept the connection request without notifying user. */  
         
        6.                 Nearby.getDiscoveryEngine(getApplicationContext()).acceptConnect(endpointId, dataCallback);  
         
        7.             }  
         
        8.             @Override  
         
        9.             public void onResult(String endpointId, ConnectResult result) { 
        10.                 switch (result.getStatus().getStatusCode()) {  
         
        11.                     case StatusCode.STATUS_SUCCESS:  
         
        12.                         /* The connection was established successfully, we can exchange data. */  
        13.                         break;  
        14.                     case StatusCode.STATUS_CONNECT_REJECTED:  
        15.                         /* The Connection was rejected. */  
         
        16.                         break;   
        17.                     default:  
         
        18.                         /* other unknown status code. */  
        19.                 }   
        20.             }  
         
        21.             @Override   
        22.             public void onDisconnected(String endpointId) {  
         
        23.                 /* The connection was disconneted. */  
         
        24.             }  
        25.         }; 
    
    

此示例显示了一种双方自动接受连接的确认连接方式。根据您的需要，您可以使用其他的确认连接方式。

### 2.4.3 验证连接  

您的应用程序可以提供一种让用户确认连接到指定设备的方法，例如：通过验证token（token可以是一个短随机字符串或者数字）。通常这涉及在两个设备上显示token并要求用户手动输入或者确认，类似于蓝牙配对对话框。

下面演示一种通过弹窗确认配对码的方式验证连接。

示例代码如下：
      
      1. @Override 
        2. public void onEstablish(String endpointId, ConnectInfo connectInfo) { 
        3.     AlertDialog.Builder builder = new AlertDialog.Builder(getApplicationContext());   
        4.     builder.setTitle(connectInfo.getEndpointName() + " request connection") 
        5.             .setMessage("Please confirm the match code is: " + connectInfo.getAuthCode()) 
        6.             .setPositiveButton(  
         
        7.                     "Accept",   
        8.                     (DialogInterface dialog, int which) ->  
        9.                             /* Accept the connection. */  
         
        10.                             Nearby.getDiscoveryEngine(getApplicationContext())  
        11.                                     .acceptConnect(endpointId, dataCallback))  
         
        12.             .setNegativeButton(  
         
        13.                     "Reject",  
         
        14.                     (DialogInterface dialog, int which) ->  
         
        15.                             /* Reject the connection. */  
         
        16.                             Nearby.getDiscoveryEngine(getApplicationContext())  
         
        17.                                     .rejectConnect(endpointId))  
         
        18.             .setIcon(android.R.drawable.ic_dialog_alert);  
         
        19.     AlertDialog alert = builder.create();  
         
        20.     alert.show(); 
        21. }
    
    

##   


## 2.5 传输数据

设备间建立连接后，可以使用该连接传输Data对象。Data对象的类型包括字节序列、文件和流。通过调用[sendData](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-transfer-transferengine#sendData_endpointId)()方法发送数据，通过DataCallback类实例的[onReceived](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-transfer-datacallback#onReceived)()方法接收数据。

### 2.5.1 数据类型  

**BYTES****：**  

通过调用Data.fromBytes()创建Data.Type.BYTES类型的Data对象。

发送BYTES类型的数据，示例代码如下：
      
      1. Data bytesData = Data.fromBytes(new byte[] {0xA, 0xA, 0xA, 0xA, 0xA});   
        2. Nearby.getTransferEngine(getApplicationContext()).sendData(toEndpointId, bytesData);   
    
    

注意：

BYTES类型数据的长度大小不能超过32KB。

接收BYTES类型的数据，示例代码如下：  

      
      1. static class BytesDataReceiver extends DataCallback {  
        2.     @Override  
         
        3.     public void onReceived(String endpointId, Data data) {  
         
        4.         /* BYTES data is sent as a single block, so we can get complete data. */  
         
        5.         if (data.getType() == Data.Type.BYTES) {  
         
        6.             byte[] receivedBytes = data.asBytes();  
         
        7.         }  
         
        8.     }  
         
        9.     @Override  
         
        10.     public void onTransferUpdate(String endpointId, TransferStateUpdate update) {  
         
        11.         /* We will receive TRANSFER_STATE_SUCCESS update after onReceived() called. */  
         
        12.     }  
         
        13. }  
         
    
    

注意：

BYTES与FILE和STREAM类型不同，BYTES是以单个数据块发送的，因此接收端不用等待BYTES类型的状态更新为[TRANSFER_STATE_SUCCESS](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-transfer-transferstateupdate-status#TRANSFER_STATE_SUCCESS)，当[onReceived](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-transfer-datacallback#onReceived)()被调用时候，您就可以调用data.asBytes()以获取全部数据。

**FILE:**  

通过调用Data.fromFile()创建Data.Type.FILE类型的Data对象。

发送FILE类型数据的示例代码如下：
      
      1. File fileToSend = new File(getApplicationContext().getFilesDir(), "fileSample.txt");  
         
        2. try {  
        3.     Data fileData = Data.fromFile(fileToSend);  
         
        4.     Nearby.getTransferEngine(getApplicationContext()).sendData(endpointList, fileData);  
         
        5. } catch (FileNotFoundException e) { 
        6.     /* Exception handle. */  
         
        7. }  
         
    
    

一种更高效方法是使用ParcelFileDescriptor创建FILE类型，可以最大程度地减少文件的复制。

示例代码如下：
      
      1. ParcelFileDescriptor pfd = getContentResolver().openFileDescriptor(uri, "r");  
         
        2. Data fileData = Data.fromFile(pfd); 
    
    

接收设备收到文件后，文件保存在Download目录，并且将以fileData.getId()转化后的字符串命名。传输完成后，您可以获取FILE对象。

示例代码如下：
      
      1. /* We can get the received file in the Download folder. */    
        2. File payloadFile = fileData.asFile().asJavaFile(); 
    
    

**STREAM****：**  

通过调用Data.fromStream()创建Data.Type.STREAM类型的Data对象。

发送流的示例代码如下：
      
      1. URL url = new URL("https://developers.huawei.com");  
        2. Data streamData = Data.fromStream(url.openStream());  
        3. Nearby.getTransferEngine(getApplicationContext()).sendData(toEndpointId, streamData); 
    
    

接收端，当[onTransferUpdate](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-transfer-datacallback#onTransferUpdate)()回调成功时，可以调用streamData.asStream().asInputStream()或者 streamData.asStream().asParcelFileDescriptor()获取流对象。

示例代码如下：
      
      1. static class StreamDataReceiver extends DataCallback {  
        2.     private final HashMap<Long, Data> incomingData = new HashMap<>();  
         
        3.     @Override  
         
        4.     public void onTransferUpdate(String endpointId, TransferStateUpdate update) {  
         
        5.         if (update.getStatus() == TransferStateUpdate.Status.TRANSFER_STATE_SUCCESS) {  
         
        6.             Data data = incomingData.get(update.getDataId());  
         
        7.             InputStream inputStream = data.asStream().asInputStream();  
         
        8.             /* Further processing... */  
         
        9.         }  
         
        10.     }  
         
        11.     @Override  
         
        12.     public void onReceived(String endpointId, Data data) {  
         
        13.         incomingData.put(data.getId(), data);  
         
        14.     } 
        15. } 
    
    

### 2.5.2 进度更新  

DataCallBack回调类[onTransferUpdate](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-transfer-datacallback#onTransferUpdate)()方法提供数据发送或接收的进度更新，基于此您可以向用户显示传输进度，例如：进度条。

### 2.5.3 取消传输  

如果需要在接收或发送过程中取消传输，调用TransferEngine类实例方法[cancelDataTransfer](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-transfer-transferengine#cancelDataTransfer)()。

  


## 2.6 断开连接

如果需要断开与对端的连接，调用DiscoveryEngine类实例方法[disconnect](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/api-discovery-discoveryengine#disconnect)()。一旦调用此接口，将不能从此endpoint收发数据。
