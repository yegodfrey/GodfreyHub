---
name: document/cn/HMSCore-Guides/beacon-awareness-0000001050122985
title: 信标感知能力
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/beacon-awareness-0000001050122985
---

# 信标感知能力

在使用信标相关能力之前，您需要将Beacon设备注册到您的工程下，具体可参见[Beacon管理](https://developer.huawei.com/consumer/cn/doc/development/system-Guides/beacon-management-0000001050040616)。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230529175022.64606008275959174593813711593925:50001231000000:2800:48DB16A0BB02F7A244FA98565461C60484EECBE04151B7F9D8A8679CC1CBC16A.png?needInitFileName=true?needInitFileName=true)  
1. 目前的信标感知能力不支持息屏模式下的蓝牙扫描。
2. 通过updateBarriers接口添加新的beacon围栏时，如果此前使用过该接口添加围栏、且需要保留旧围栏，那么在此次调用updateBarriers接口时，需要使用该接口同时添加新旧围栏，因为在调用该接口添加围栏时，Awareness Kit会覆盖上次调用时添加的旧围栏。  

#### 在Manifest指定权限

在调用信标感知能力时，开发者需要先在Manifest中指定相应的权限。

```
<!-- 位置权限，此权限为敏感权限，声明后还需在代码中动态申请 -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<!-- 蓝牙权限（Android 12以下） -->
<uses-permission android:name="android.permission.BLUETOOTH" />
<!-- 蓝牙权限（Android 12及以上） -->
<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
```

#### 导入接口类

使用信标状态感知能力，除需要导入情景感知服务的公共能力类外，还需要导入信标状态相关的类。

```
import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hms.kit.awareness.Awareness;
// 导入信标快照相关类
import com.huawei.hms.kit.awareness.capture.BeaconStatusResponse;
import com.huawei.hms.kit.awareness.status.BeaconStatus;
// 导入信标围栏相关类
import com.huawei.hms.kit.awareness.barrier.AwarenessBarrier;
import com.huawei.hms.kit.awareness.barrier.BarrierStatus;
import com.huawei.hms.kit.awareness.barrier.BeaconBarrier;
import com.huawei.hms.kit.awareness.barrier.BarrierUpdateRequest;
```

#### 能力开发

#### Capture

1. 获取Awareness Kit的"Capture Client"。
2. 通过"Capture Client"调用信标状态查询能力接口查询情景状态。
3. 根据情景感知服务结果的返回，进行应用的业务处理。  

   ```
   "Java"
   // 查询条件
   String namespace = "sample namespace";
   String type = "sample type";
   byte[] content = new byte[]{'s', 'a', 'm', 'p', 'l', 'e'};
   BeaconStatus.Filter filter = BeaconStatus.Filter.match(namespace, type, content);
   Awareness.getCaptureClient(this).getBeaconStatus(filter)
           // 执行成功的回调监听
           .addOnSuccessListener(new OnSuccessListener<BeaconStatusResponse>() {
               @Override
               public void onSuccess(BeaconStatusResponse beaconStatusResponse) {
                   List<BeaconStatus.BeaconData> beaconDataList = beaconStatusResponse.
                           getBeaconStatus().getBeaconData();
                   if (beaconDataList != null && beaconDataList.size() != 0) {
                       int i = 1;
                       StringBuilder builder = new StringBuilder();
                       for (BeaconStatus.BeaconData beaconData : beaconDataList) {
                           builder.append("Beacon Data ").append(i);
                           builder.append(" namespace:").append(beaconData.getNamespace());
                           builder.append(",type:").append(beaconData.getType());
                           builder.append(",content:").append(Arrays.toString(beaconData.getContent()));
                           builder.append("; ");
                           i++;
                       }
                       Log.i(TAG, builder.toString());
                   } else {
                       Log.i(TAG, "no beacons match filter nearby");
                   }
               }
           })
           // 执行失败的回调监听
           .addOnFailureListener(new OnFailureListener() {
               @Override
               public void onFailure(Exception e) {
                   Log.e(TAG, "get beacon status failed", e);
               }
           });
   ```

   ```
   "Kotlin"
   val namespace = "sample namespace"
   val type = "sample type"
   val content = byteArrayOf('s'.toByte(), 'a'.toByte(), 'm'.toByte(), 'p'.toByte(), 'l'.toByte(), 'e'.toByte())
   val filter = BeaconStatus.Filter.match(namespace, type, content)
   Awareness.getCaptureClient(this).getBeaconStatus(filter)
           // 执行成功的回调监听
           .addOnSuccessListener { beaconStatusResponse ->
               val beaconDataList = beaconStatusResponse.beaconStatus.beaconData
               if (beaconDataList != null && beaconDataList.size != 0) {
                   var i = 1
                   val builder = StringBuilder()
                   for (beaconData in beaconDataList) {
                       builder.append("Beacon Data ").append(i)
                       builder.append(" namespace:").append(beaconData.namespace)
                       builder.append(",type:").append(beaconData.type)
                       builder.append(",content:").append(Arrays.toString(beaconData.content))
                       builder.append("; ")
                       i++
                   }
                   Log.i(TAG, builder.toString())
               } else {
                   Log.i(TAG, "no beacons match filter nearby")
               }
           }
           // 执行失败的回调监听
           .addOnFailureListener { e -> 
               Log.e(TAG, "get beacon status failed", e) 
           }
   ```

#### Barrier

以下以开发信标"discover"的Barrier为例（当手机扫描到周围有匹配传入filter的信标设备后触发Barrier）。

1. 定义Barrier。  

   ```
   "Java"
   String namespace = "sample namespace";
   String type = "sample type";
   byte[] content = new byte[]{'s', 'a', 'm', 'p', 'l', 'e'};
   BeaconStatus.Filter filter = BeaconStatus.Filter.match(namespace, type, content);
   AwarenessBarrier discoverBeaconBarrier = BeaconBarrier.discover(filter);
   ```

   ```
   "Kotlin"
   val namespace = "sample namespace"
   val type = "sample type"
   val content = byteArrayOf('s'.toByte(), 'a'.toByte(), 'm'.toByte(), 'p'.toByte(), 'l'.toByte(), 'e'.toByte())
   val filter = BeaconStatus.Filter.match(namespace, type, content)
   var discoverBeaconBarrier : AwarenessBarrier = BeaconBarrier.discover(filter)
   ```

2. 定义Barrier状态改变时触发的"PendingIntent"，同时注册一个广播接收器用来接收这个广播。  

   ```
   "Java"
   final String BARRIER_RECEIVER_ACTION = getApplication().getPackageName() + "BEACON_BARRIER_RECEIVER_ACTION";
   Intent intent = new Intent(BARRIER_RECEIVER_ACTION); 
   PendingIntent pendingIntent = PendingIntent.getBroadcast(this, 1, intent, PendingIntent.FLAG_UPDATE_CURRENT);
   BeaconBarrierReceiver barrierReceiver = new BeaconBarrierReceiver();
   registerReceiver(barrierReceiver, new IntentFilter(BARRIER_RECEIVER_ACTION));
   ```

   ```
   "Kotlin"
   val BARRIER_RECEIVER_ACTION = application.packageName + "BEACON_BARRIER_RECEIVER_ACTION"
   val intent = Intent(BARRIER_RECEIVER_ACTION)
   val pendingIntent = PendingIntent.getBroadcast(this, 1, intent, PendingIntent.FLAG_UPDATE_CURRENT)
   val barrierReceiver = BeaconBarrierReceiver()
   registerReceiver(barrierReceiver, IntentFilter(BARRIER_RECEIVER_ACTION))
   ```

3. 定义Barrier对应的标签Label，然后添加Barrier。  

   ```
   "Java"
   String beaconBarrierLabel = "discover beacon barrier";
   // 定义更新围栏的请求
   BarrierUpdateRequest.Builder builder = new BarrierUpdateRequest.Builder();
   BarrierUpdateRequest request = builder.addBarrier(beaconBarrierLabel, discoverBeaconBarrier,pendingIntent).build();
   Awareness.getBarrierClient(context).updateBarriers(request)
           // 执行成功的回调监听
           .addOnSuccessListener(new OnSuccessListener<Void>() {
               @Override
               public void onSuccess(Void aVoid) {
                   Toast.makeText(getApplicationContext(), "add barrier success", Toast.LENGTH_SHORT).show();
               }
           })
           // 执行失败的回调监听
           .addOnFailureListener(new OnFailureListener() {
               @Override
               public void onFailure(Exception e) {
                   Toast.makeText(getApplicationContext(), "add barrier failed", Toast.LENGTH_SHORT).show();
                   Log.e(TAG, "add barrier failed", e);
               }
           });
   ```

   ```
   "Kotlin"
   val beaconBarrierLabel = "discover beacon barrier"
   // 定义更新围栏的请求
   val builder = BarrierUpdateRequest.Builder()
   val request = builder.addBarrier(beaconBarrierLabel, discoverBeaconBarrier, pendingIntent).build()
   Awareness.getBarrierClient(context).updateBarriers(request)
           // 执行成功的回调监听
           .addOnSuccessListener { Toast.makeText(applicationContext, "add barrier success", Toast.LENGTH_SHORT).show() 
           }
           // 执行失败的回调监听
           .addOnFailureListener { e ->
               Toast.makeText(applicationContext, "add barrier failed", Toast.LENGTH_SHORT).show()
               Log.e(TAG, "add barrier failed", e)
           }
   ```

4. 定义广播接收器，用于监听Barrier事件，收到事件后进行应用的业务处理。  

   ```
   "Java"
   // 定义广播接收器
   class BeaconBarrierReceiver extends BroadcastReceiver {
       @Override
       public void onReceive(Context context, Intent intent) {
           BarrierStatus barrierStatus = BarrierStatus.extract(intent);
           String label = barrierStatus.getBarrierLabel();
           switch(barrierStatus.getPresentStatus()) {
               case BarrierStatus.TRUE:
                   Log.i(TAG, label + " status:true");
                   break;
               case BarrierStatus.FALSE:
                   Log.i(TAG, label + " status:false");
                   break;
               case BarrierStatus.UNKNOWN:
                   Log.i(TAG, label + " status:unknown");
                   break;
           }
       }
   }
   ```

   ```
   "Kotlin"
   // 定义广播接收器
   internal inner class BeaconBarrierReceiver : BroadcastReceiver() {
   override fun onReceive(context: Context, intent: Intent) {
   val barrierStatus = BarrierStatus.extract(intent)
   val label = barrierStatus.barrierLabel
           when (barrierStatus.presentStatus) {
               BarrierStatus.TRUE -> Log.i(TAG, "$label status:true")
               BarrierStatus.FALSE -> Log.i(TAG, "$label status:false")
               BarrierStatus.UNKNOWN -> Log.i(TAG, "$label status:unknown")
           }
       }
   }
   ```

5. 在应用业务处理完成后，根据Barrier对应的标签Label，进行删除Barrier。  

   ```
   "Java"
   String beaconBarrierLabel = "discover beacon barrier";
   // 定义更新围栏的请求
   BarrierUpdateRequest.Builder builder = new BarrierUpdateRequest.Builder();
   BarrierUpdateRequest request = builder.deleteBarrier(beaconBarrierLabel).build();
   Awareness.getBarrierClient(context).updateBarriers(request)
           // 执行成功的回调监听
           .addOnSuccessListener(new OnSuccessListener<Void>() {
               @Override
               public void onSuccess(Void aVoid) {
                   Toast.makeText(getApplicationContext(), "delete barrier success", Toast.LENGTH_SHORT).show();
               }
           })
           // 执行失败的回调监听
           .addOnFailureListener(new OnFailureListener() {
               @Override
               public void onFailure(Exception e) {
                   Toast.makeText(getApplicationContext(), "delete barrier failed", Toast.LENGTH_SHORT).show();
                   Log.e(TAG, "delete barrier failed", e);
               }
           });
   ```

   ```
   "Kotlin"
   val beaconBarrierLabel = "discover beacon barrier"
   // 定义更新围栏的请求
   val builder = BarrierUpdateRequest.Builder()
   val request = builder.deleteBarrier(beaconBarrierLabel).build()
   Awareness.getBarrierClient(context).updateBarriers(request)
           // 执行成功的回调监听
           .addOnSuccessListener { Toast.makeText(applicationContext, "delete barrier success", Toast.LENGTH_SHORT).show() 
           }
           // 执行失败的回调监听
           .addOnFailureListener { e ->
               Toast.makeText(applicationContext, "delete barrier failed", Toast.LENGTH_SHORT).show()
               Log.e(TAG, "delete barrier failed", e)
           }
   ```

