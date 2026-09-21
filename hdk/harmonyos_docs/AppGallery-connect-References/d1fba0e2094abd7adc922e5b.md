---
name: document/cn/AppGallery-connect-References/storagetask-0000001055727204
title: StorageTask
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/storagetask-0000001055727204
---

# StorageTask

|Class Info|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public abstract class StorageTask<TResult extends StorageTask.ErrorResult> 任务的管理，提供存储任务的各种状态操作的封装，是[UploadTask](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/uploadtask-0000001055247244)和[DownloadTask](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/downloadtask-0000001054848715)的父类。|

## Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
|StorageTask<TResult>|[addOnCanceledListener](#section193211347184017)(OnCanceledListener listener) 注册任务取消的监听器。|
|StorageTask<TResult>|[addOnCanceledListener](#section1966435919134)(Executor executor, OnCanceledListener listener) 在指定Executor中注册任务取消的监听器。|
|StorageTask<TResult>|[addOnCanceledListener](#section167665281711)(Activity activity, OnCanceledListener listener) 在指定Activity中注册任务取消的监听器。|
|StorageTask<TResult>|[addOnCompleteListener](#section1824418011813)(OnCompleteListener<TResult> listener) 注册任务完成的监听器。|
|StorageTask<TResult>|[addOnCompleteListener](#section14199165942014)(Executor executor, OnCompleteListener<TResult> listener) 在指定Executor中注册任务完成的监听器。|
|StorageTask<TResult>|[addOnCompleteListener](#section14181440122112)(Activity activity, OnCompleteListener<TResult> listener) 在指定Activity中注册任务完成的监听器。|
|StorageTask<TResult>|[addOnFailureListener](#section1310411516227)(OnFailureListener listener) 注册任务失败的监听器。|
|StorageTask<TResult>|[addOnFailureListener](#section173437444225)(Executor executor, OnFailureListener listener) 在指定Executor中注册任务失败的监听器。|
|StorageTask<TResult>|[addOnFailureListener](#section729382413162)(Activity activity, OnFailureListener listener) 在指定Activity中注册任务失败的监听器。|
|StorageTask<TResult>|[addOnSuccessListener](#section04161846132311)(OnSuccessListener<TResult> listener) 注册任务成功的监听器。|
|StorageTask<TResult>|[addOnSuccessListener](#section1476020457251)(Executor executor, OnSuccessListener<TResult> listener) 在指定Executor中注册任务成功的监听器。|
|StorageTask<TResult>|[addOnSuccessListener](#section16420749202618)(Activity activity, OnSuccessListener<TResult> listener) 在指定Activity中注册任务成功的监听器。|
|StorageTask<TResult>|[addOnPausedListener](#section1612010132815)(OnPausedListener<TResult> listener) 注册任务暂停的监听器。|
|StorageTask<TResult>|[addOnPausedListener](#section1112117011283)(Executor executor, OnPausedListener<TResult> listener) 在指定Executor中注册任务暂停的监听器。|
|StorageTask<TResult>|[addOnPausedListener](#section1812118014285)(Activity activity, OnPausedListener<TResult> listener) 在指定Activity中注册任务暂停的监听器。|
|StorageTask<TResult>|[addOnProgressListener](#section1882115711353)(OnProgressListener<TResult> listener) 注册任务执行中的监听器。|
|StorageTask<TResult>|[addOnProgressListener](#section6822757123516)(Executor executor, OnProgressListener<TResult> listener) 在指定Executor中注册任务执行中的监听器。|
|StorageTask<TResult>|[addOnProgressListener](#section78222577352)(Activity activity, OnProgressListener<TResult> listener) 在指定Activity中注册任务执行中的监听器。|
|Task<TResult>|[continueWithTask](#section1420017328160)(ExecuteResult<TResult> executeResult) 继续执行当前任务。|
|<TContinuationResult> Task<TContinuationResult>|[continueWith](#section139817015567)(Continuation<TResult, TContinuationResult> continuation) 继续执行下一个任务。|
|<TContinuationResult> Task<TContinuationResult>|[continueWith](#section19739151914124)(Executor executor, Continuation<TResult, TContinuationResult> continuation) 在指定的Executor下继续执行下一个任务。|
|<TContinuationResult> Task<TContinuationResult>|[continueWithTask](#section6408107139)(Continuation<TResult, Task<TContinuationResult>> continuation) 当前任务执行完成后，继续执行下一个任务。|
|<TContinuationResult> Task<TContinuationResult>|[continueWithTask](#section249123216162)(Executor executor, Continuation<TResult, Task<TContinuationResult>> continuation) 当前任务执行完成后，再去指定的Executor下继续执行下一个任务。|
|<TContinuationResult> Task<TContinuationResult>|[onSuccessTask](#section105571017151710)(SuccessContinuation<TResult, TContinuation> continuation) 当前任务成功完成后，继续执行下一个任务。|
|<TContinuationResult> Task<TContinuationResult>|[onSuccessTask](#section1397983619191)(Executor executor, SuccessContinuation<TResult, TContinuation> continuation) 当前任务成功完成后，在指定的Executor下继续执行下一个任务。|
|boolean|[cancel](#section165341923395)() 取消任务。|
|boolean|[isCanceled](#section494115025819)() 任务是否已取消。|
|boolean|[isComplete](#section207652283114)() 任务是否已完成。|
|boolean|[isSuccessful](#section14799104103112)() 任务是否已成功。|
|boolean|[isInProgress](#section12897148113213)() 任务是否正在执行中。|
|boolean|[isPaused](#section1699713410324)() 任务是否已暂停。|
|boolean|[pause](#section12058743315)() 暂停任务。|
|boolean|[resume](#section56484719332)() 继续任务。|
|TResult|[getResult](#section6434419155317)() 获取结果信息。|
|void|[setResult](#section20807165016203)(TResult result) 设置结果信息。|
|TResult|[getTimePointState](#section187361456182118)() 返回任务结果。|
|Exception|[getException](#section2099812365216)() 获取异常信息。|
|void|[setException](#section2034344632213)(Exception exception) 设置异常信息。|
|<E extends Throwable> TResult|[getResultThrowException](#section19179858202418)(Class<E> exceptionClass) 获取结果时抛出的异常。|
|StorageTask<TResult>|[removeOnCanceledListener](#section2406141211345)(OnCanceledListener listener) 移除任务取消的监听器。|
|StorageTask<TResult>|[removeOnCompleteListener](#section9873143923514)(OnCompleteListener<TResult> listener) 移除任务完成的监听器。|
|StorageTask<TResult>|[removeOnFailureListener](#section1046201203619)(OnFailureListener listener) 移除任务失败的监听器。|
|StorageTask<TResult>|[removeOnSuccessListener](#section813393918368)(OnSuccessListener<TResult> listener) 移除任务成功的监听器。|
|StorageTask<TResult>|[removeOnPausedListener](#section17312548377)(OnPausedListener<TResult> listener) 移除任务暂停的监听器。|
|StorageTask<TResult>|[removeOnProgressListener](#section7428193353716)(OnProgressListener<TResult> listener) 移除任务执行中的监听器。|

## Protected Method Summary

|Return|Method|
|:-----|:--------------------------------------------------------|
|void|[onProgress](#section113131417191313)() 任务执行过程中的执行方法，重载用。|
|void|[onPaused](#section0490104299)() 任务暂停时执行的方法，重载用。|
|void|[onFailure](#section930001132912)() 任务失败时执行的方法，重载用。|
|void|[onSuccess](#section49603113292)() 任务成功后执行的方法，重载用。|
|void|[onCanceled](#section15570182142919)() 任务取消后执行的方法，重载用。|

## Methods

### addOnCanceledListener

|Method|
|:-----------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnCanceledListener(OnCanceledListener listener) 注册任务取消的监听器。|

**Parameters**

|Name|Description|
|:-------|:---------------------|
|listener|OnCanceledListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnCanceledListener

|Method|
|:------------------------------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnCanceledListener(Executor executor, OnCanceledListener listener) 在指定Executor中注册任务取消的监听器。|

**Parameters**

|Name|Description|
|:-------|:---------------------|
|executor|Executor执行器。|
|listener|OnCanceledListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnCanceledListener

|Method|
|:------------------------------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnCanceledListener(Activity activity, OnCanceledListener listener) 在指定Activity中注册任务取消的监听器。|

**Parameters**

|Name|Description|
|:-------|:---------------------|
|activity|需要注册监听器的Activity。|
|listener|OnCanceledListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnCompleteListener

|Method|
|:--------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnCompleteListener(OnCompleteListener<TResult> listener) 注册任务完成的监听器。|

**Parameters**

|Name|Description|
|:-------|:---------------------|
|listener|OnCompleteListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnCompleteListener

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnCompleteListener(Executor executor, OnCompleteListener<TResult> listener) 在指定Executor中注册任务完成的监听器。|

**Parameters**

|Name|Description|
|:-------|:---------------------|
|executor|Executor执行器。|
|listener|OnCompleteListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnCompleteListener

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnCompleteListener(Activity activity, OnCompleteListener<TResult> listener) 在指定Activity中注册任务完成的监听器。|

**Parameters**

|Name|Description|
|:-------|:---------------------|
|activity|需要注册监听器的Activity。|
|listener|OnCompleteListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnFailureListener

|Method|
|:---------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnFailureListener(OnFailureListener listener) 注册任务失败的监听器。|

**Parameters**

|Name|Description|
|:-------|:--------------------|
|listener|OnFailureListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnFailureListener

|Method|
|:----------------------------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnFailureListener(Executor executor, OnFailureListener listener) 在指定Executor中注册任务失败的监听器。|

**Parameters**

|Name|Description|
|:-------|:--------------------|
|executor|Executor执行器。|
|listener|OnFailureListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnFailureListener

|Method|
|:----------------------------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnFailureListener(Activity activity, OnFailureListener listener) 在指定Activity中注册任务失败的监听器。|

**Parameters**

|Name|Description|
|:-------|:--------------------|
|activity|需注册监听器的Activity。|
|listener|OnFailureListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnSuccessListener

|Method|
|:------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnSuccessListener(OnSuccessListener<TResult> listener) 注册任务成功的监听器。|

**Parameters**

|Name|Description|
|:-------|:--------------------|
|listener|OnSuccessListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnSuccessListener

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnSuccessListener(Executor executor, OnSuccessListener<TResult> listener) 在指定Executor中注册任务成功的监听器。|

**Parameters**

|Name|Description|
|:-------|:--------------------|
|executor|Executor执行器。|
|listener|OnSuccessListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnSuccessListener

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnSuccessListener(Activity activity, OnSuccessListener<TResult> listener) 在指定Activity中注册任务成功的监听器。|

**Parameters**

|Name|Description|
|:-------|:--------------------|
|activity|需注册监听器的Activity。|
|listener|OnSuccessListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnPausedListener

|Method|
|:----------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnPausedListener(OnPausedListener<TResult> listener) 注册任务暂停的监听器。|

**Parameters**

|Name|Description|
|:-------|:-----------------------------------------------------------------------------------------------------------------------------------|
|listener|[OnPausedListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/onpausedlistener-0000001055247242)监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnPausedListener

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnPausedListener(Executor executor, OnPausedListener<TResult> listener) 在指定Executor中注册任务暂停的监听器。|

**Parameters**

|Name|Description|
|:-------|:-----------------------------------------------------------------------------------------------------------------------------------|
|executor|Executor执行器。|
|listener|[OnPausedListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/onpausedlistener-0000001055247242)监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnPausedListener

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnPausedListener(Activity activity, OnPausedListener<TResult> listener) 在指定Activity中注册任务暂停的监听器。|

**Parameters**

|Name|Description|
|:-------|:-----------------------------------------------------------------------------------------------------------------------------------|
|activity|需注册监听器的Activity。|
|listener|[OnPausedListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/onpausedlistener-0000001055247242)监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnProgressListener

|Method|
|:---------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnProgressListener(OnProgressListener<TResult> listener) 注册任务执行中的监听器。|

**Parameters**

|Name|Description|
|:-------|:---------------------------------------------------------------------------------------------------------------------------------------|
|listener|[OnProgressListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/onprogresslistener-0000001054928652)监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnProgressListener

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnProgressListener(Executor executor, OnProgressListener<TResult> listener) 在指定Executor中注册任务执行中的监听器。|

**Parameters**

|Name|Description|
|:-------|:---------------------------------------------------------------------------------------------------------------------------------------|
|executor|Executor执行器。|
|listener|[OnProgressListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/onprogresslistener-0000001054928652)监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### addOnProgressListener

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> addOnProgressListener(Activity activity, OnProgressListener<TResult> listener) 在指定Activity中注册任务执行中的监听器。|

**Parameters**

|Name|Description|
|:-------|:---------------------------------------------------------------------------------------------------------------------------------------|
|activity|需注册监听器的Activity。|
|listener|[OnProgressListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/onprogresslistener-0000001054928652)监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### continueWithTask

|Method|
|:------------------------------------------------------------------------------------|
|public Task<TResult> continueWithTask(ExecuteResult<TResult> executeResult) 继续执行当前任务。|

**Parameters**

|Name|Description|
|:------------|:----------|
|executeResult|任务当前执行的结果。|

**Return**

|Type|Description|
|:------------|:-------------|
|Task<TResult>|返回当前任务继续执行的结果。|

### continueWith

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------|
|public <TContinuationResult> Task<TContinuationResult> continueWith(Continuation<TResult, TContinuationResult> continuation) 继续执行下一个任务。|

**Parameters**

|Name|Description|
|:-----------|:----------|
|continuation|下一个任务的执行函数。|

**Return**

|Type|Description|
|:----------------------------------------------|:-------------------------------|
|<TContinuationResult> Task<TContinuationResult>|任务执行的结果。TContinuationResult为泛型类。|

### continueWith

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public <TContinuationResult> Task<TContinuationResult> continueWith(Executor executor, Continuation<TResult, TContinuationResult> continuation) 在指定的Executor下继续执行下一个任务。|

**Parameters**

|Name|Description|
|:-----------|:-----------|
|executor|Executor执行器。|
|continuation|下一个任务的执行函数。|

**Return**

|Type|Description|
|:----------------------------------------------|:-------------------------------|
|<TContinuationResult> Task<TContinuationResult>|任务执行的结果。TContinuationResult为泛型类。|

### continueWithTask

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
|public <TContinuationResult> Task<TContinuationResult> continueWithTask(Continuation<TResult, Task<TContinuationResult>> continuation) 当前任务执行完成后，继续执行下一个任务。|

**Parameters**

|Name|Description|
|:-----------|:----------|
|continuation|下一个任务的执行函数。|

**Return**

|Type|Description|
|:----------------------------------------------|:-------------------------------|
|<TContinuationResult> Task<TContinuationResult>|任务执行的结果。TContinuationResult为泛型类。|

### continueWithTask

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public <TContinuationResult> Task<TContinuationResult> continueWithTask(Executor executor, Continuation<TResult, Task<TContinuationResult>> continuation) 当前任务执行完成后，再去指定的Executor下继续执行下一个任务。|

**Parameters**

|Name|Description|
|:-----------|:-----------|
|executor|Executor执行器。|
|continuation|下一个任务的执行函数。|

**Return**

|Type|Description|
|:----------------------------------------------|:-------------------------------|
|<TContinuationResult> Task<TContinuationResult>|任务执行的结果。TContinuationResult为泛型类。|

### onSuccessTask

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------|
|public <TContinuationResult> Task<TContinuationResult> onSuccessTask(SuccessContinuation<TResult, TContinuation> continuation) 当前任务成功完成后，继续执行下一个任务。|

**Parameters**

|Name|Description|
|:-----------|:----------|
|continuation|下一个任务的执行函数。|

**Return**

|Type|Description|
|:----------------------------------------------|:-------------------------------|
|<TContinuationResult> Task<TContinuationResult>|任务执行的结果。TContinuationResult为泛型类。|

### onSuccessTask

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public <TContinuationResult> Task<TContinuationResult> onSuccessTask(Executor executor, SuccessContinuation<TResult, TContinuation> continuation) 当前任务成功完成后，再去指定的Executor下继续执行下一个任务。|

**Parameters**

|Name|Description|
|:-----------|:-----------|
|executor|Executor执行器。|
|continuation|下一个任务的执行函数。|

**Return**

|Type|Description|
|:----------------------------------------------|:-------------------------------|
|<TContinuationResult> Task<TContinuationResult>|任务执行的结果。TContinuationResult为泛型类。|

### cancel

|Method|
|:----------------------------|
|public boolean cancel() 取消任务。|

**Return**

|Type|Description|
|:------|:----------------------------------|
|boolean|取消任务的结果。 * true：取消成功。 * false：取消失败。|

### isCanceled

|Method|
|:-----------------------------------|
|public boolean isCanceled() 任务是否已取消。|

**Return**

|Type|Description|
|:------|:----------------------------|
|boolean|任务是否已取消。 * true：是。 * false：否。|

### isComplete

|Method|
|:-----------------------------------|
|public boolean isComplete() 任务是否已完成。|

**Return**

|Type|Description|
|:------|:-------------------------------------------|
|boolean|任务是否已完成。已完成包括执行成功和执行失败。 * true：是。 * false：否。|

### isSuccessful

|Method|
|:---------------------------------------|
|public boolean isSuccessful() 任务是否已执行成功。|

**Return**

|Type|Description|
|:------|:------------------------------|
|boolean|任务是否已执行成功。 * true：是。 * false：否。|

### isInProgress

|Method|
|:---------------------------------------|
|public boolean isInProgress() 任务是否正在执行中。|

**Return**

|Type|Description|
|:------|:------------------------------|
|boolean|任务是否正在执行中。 * true：是。 * false：否。|

### isPaused

|Method|
|:---------------------------------|
|public boolean isPaused() 任务是否已暂停。|

**Return**

|Type|Description|
|:------|:----------------------------|
|boolean|任务是否已暂停。 * true：是。 * false：否。|

### pause

|Method|
|:---------------------------|
|public boolean pause() 暂停任务。|

**Return**

|Type|Description|
|:------|:------------------------------|
|boolean|暂停任务的结果。 * true：成功。 * false：失败。|

### resume

|Method|
|:----------------------------|
|public boolean resume() 继续任务。|

**Return**

|Type|Description|
|:------|:------------------------------|
|boolean|继续任务的结果。 * true：成功。 * false：失败。|

### getResult

|Method|
|:---------------------------------|
|public TResult getResult() 获取结果信息。|

**Return**

|Type|Description|
|:------|:----------|
|TResult|返回结果信息。|

### setResult

|Method|
|:--------------------------------------------|
|public void setResult(TResult result) 设置结果信息。|

**Parameters**

|Name|Description|
|:-----|:----------|
|result|结果信息。|

### getTimePointState

|Method|
|:-------------------------------------------|
|public TResult getTimePointState() 获取任务状态信息。|

**Return**

|Type|Description|
|:------|:----------|
|TResult|返回任务状态信息。|

### getException

|Method|
|:--------------------------------------|
|public Exception getException() 获取异常信息。|

**Return**

|Type|Description|
|:--------|:----------|
|Exception|返回异常信息。|

### setException

|Method|
|:----------------------------------------------------|
|public void setException(Exception exception) 设置异常信息。|

**Parameters**

|Name|Description|
|:--------|:----------|
|exception|异常信息。|

### getResultThrowException

|Method|
|:-----------------------------------------------------------------------------------------------|
|public <E extends Throwable> TResult getResultThrowException(Class<E> exceptionClass) 获取结果抛出的异常。|

**Parameters**

|Name|Description|
|:-------------|:----------|
|exceptionClass|异常信息。|

**Return**

|Type|Description|
|:----------------------------|:----------|
|<E extends Throwable> TResult|结果信息。|

### removeOnCanceledListener

|Method|
|:--------------------------------------------------------------------------------------------|
|public StorageTask<TResult> removeOnCanceledListener(OnCanceledListener listener) 移除任务取消的监听器。|

**Parameters**

|Name|Description|
|:-------|:---------------------|
|listener|OnCanceledListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### removeOnCompleteListener

|Method|
|:-----------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> removeOnCompleteListener(OnCompleteListener<TResult> listener) 移除任务完成的监听器。|

**Parameters**

|Name|Description|
|:-------|:---------------------|
|listener|OnCompleteListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### removeOnFailureListener

|Method|
|:------------------------------------------------------------------------------------------|
|public StorageTask<TResult> removeOnFailureListener(OnFailureListener listener) 移除任务失败的监听器。|

**Parameters**

|Name|Description|
|:-------|:--------------------|
|listener|OnFailureListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### removeOnSuccessListener

|Method|
|:---------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> removeOnSuccessListener(OnSuccessListener<TResult> listener) 移除任务成功的监听器。|

**Parameters**

|Name|Description|
|:-------|:--------------------|
|listener|OnSuccessListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### removeOnPausedListener

|Method|
|:-------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> removeOnPausedListener(OnPausedListener<TResult> listener) 移除任务暂停的监听器。|

**Parameters**

|Name|Description|
|:-------|:-------------------|
|listener|OnPausedListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

### removeOnProgressListener

|Method|
|:------------------------------------------------------------------------------------------------------|
|public StorageTask<TResult> removeOnProgressListener(OnProgressListener<TResult> listener) 移除任务执行中的监听器。|

**Parameters**

|Name|Description|
|:-------|:---------------------|
|listener|OnProgressListener监听器。|

**Return**

|Type|Description|
|:-------------------|:---------------|
|StorageTask<TResult>|返回StorageTask实例。|

## Protected Methods

### onProgress

|Method|
|:--------------------------------------------|
|protected void onProgress() 任务执行过程中的执行方法，重载用。|

### onPaused

|Method|
|:----------------------------------------|
|protected void onPaused() 任务暂停时执行的方法，重载用。|

### onFailure

|Method|
|:-----------------------------------------|
|protected void onFailure() 任务失败时执行的方法，重载用。|

### onSuccess

|Method|
|:-----------------------------------------|
|protected void onSuccess() 任务成功后执行的方法，重载用。|

### onCanceled

|Method|
|:------------------------------------------|
|protected void onCanceled() 任务取消后执行的方法，重载用。|

