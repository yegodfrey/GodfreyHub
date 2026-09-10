---
name: document/cn/HMSCore-Guides/client-dev-0000001050040485
title: 应用开发
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/client-dev-0000001050040485
---

# 应用开发

#### 获取用户选择返回的地址

#### 功能描述

应用需要使用用户地址（姓名、联系方式、详细地址等）时，该接口用于拉起用户身份服务的地址选择页面，用户选择用户地址后返回应用。  

#### 开发步骤

1. 构建请求参数[UserAddressRequest](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/useraddressrequest-0000001050053779)，调用[getUserAddress](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/addressclient-0000001050053765#section1627114915257)接口。  
   示例代码如下：

   ```
   "Java"
   // 实例化UserAddressRequest对象
   UserAddressRequest req = new UserAddressRequest();
   // 调用getUserAddress接口
   Task<GetUserAddressResult> task = Address.getAddressClient(this).getUserAddress(req);
   task.addOnSuccessListener(new OnSuccessListener<GetUserAddressResult>() {
   	@Override
   	public void onSuccess(GetUserAddressResult result) {
   		// 调用成功回调
   		Log.i("IdentityKit", "onSuccess result code:" + result.getReturnCode());
   		try {
   			startActivityForResult(result);
   		} catch (IntentSender.SendIntentException e) {
   			e.printStackTrace();
   		}
   	}
   }).addOnFailureListener(new OnFailureListener() {
   	@Override
   	public void onFailure(Exception e) {
   		// 调用失败回调
   		Log.i("IdentityKit", "on Failed result code:" + e.getMessage());
   	}
   });
   ```

   ```
   "Kotlin"
   // 调用getUserAddress接口
   val task = Address.getAddressClient(this@MainActivity).getUserAddress(UserAddressRequest())
   task.apply {
       addOnSuccessListener {
           // 调用成功回调
           Log.i("IdentityKit", "onSuccess result code: ${it.returnCode}")
           try {
               startActivityForResult(it)
           } catch (e: IntentSender.SendIntentException) {
               e.printStackTrace()
           }
       }.addOnFailureListener {
           // 调用失败回调
           Log.i("IdentityKit", "onFailed resultCode: ${it.message}")
       }
   }
   ```

2. 调用[Status](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/status-0000001050121132)的[startResolutionForResult](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/status-0000001050121132#section04641751152411)方法拉起选择用户身份服务的地址选择页面。  
   示例代码如下：

   ```
   "Java"
   private void startActivityForResult(GetUserAddressResult result) throws IntentSender.SendIntentException {
   	Status status = result.getStatus();
   	if (result.getReturnCode() == 0 && status.hasResolution()) {
   		Log.i("IdentityKit", "the result had resolution.");
   		status.startResolutionForResult(this, 1000);
   	} else {
   		Log.i("IdentityKit", "the result hasn't resolution.");
   	}
   }
   ```

   ```
   "Kotlin"
   private fun startActivityForResult(result: GetUserAddressResult) {
       val status: Status = result.status
       if (result.returnCode == 0 && status.hasResolution()) {
           Log.i("IdentityKit", "the result has resolution")
           status.startResolutionForResult(this@MainActivity, 1000)
       } else {
           Log.i("IdentityKit", "the result hasn't resolution")
       }
   }
   ```

3. 用户选择地址完成后在页面的onActivityResult中调用[UserAddress](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/useraddress-0000001050051846)的[parseIntent](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/useraddress-0000001050051846#section27231755102913)方法从结果中获取用户选择的地址信息。  
   示例代码如下：

   ```
   "Java"
   @Override
   protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
   	super.onActivityResult(requestCode, resultCode, data);
   	Log.i("IdentityKit", "requestCode=" + requestCode + ", resultCode=" + resultCode);
   	if (resultCode == Activity.RESULT_OK) {
   		UserAddress userAddress = UserAddress.parseIntent(data);
   		// 业务处理
   	} else {
   		// 错误处理
   	}
   }
   ```

   ```
   "Kotlin"
   override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
       super.onActivityResult(requestCode, resultCode, data)
       Log.i("IdentityKit", "requestCode = $requestCode, resultCode = $resultCode");
       when (resultCode) {
           Activity.RESULT_OK -> {
               val userAddress: UserAddress? = UserAddress.parseIntent(data)
               // 业务处理
           }else -> {
               // 错误处理
           }
       }
   }
   ```

