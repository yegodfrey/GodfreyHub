---
name: document/cn/hiai-References/abstractuiextendproxy-0000001051613319
title: MLProductVisionSearchCapture.AbstractProductFragment
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/abstractuiextendproxy-0000001051613319
---

# MLProductVisionSearchCapture.AbstractProductFragment

|Class Info|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
|com.huawei.hms.mlplugin.productvisionsearch.MLProductVisionSearchCapture.AbstractProductFragment 商品展示页面，继承自fragment，需要按照Fragment流程补充完整，使用此Fragment展示商品信息。|

Sample code：

```
// RealProductBean是自定义的商品Bean文件。
public class ProductFragment extends MLProductVisionSearchCapture.AbstractProductFragment<RealProductBean>{

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container,@Nullable Bundle savedInstanceState){
       //自定义商品展示页面。
    }

    @Override
    public List<RealProductBean> getProductList(List<MLProductVisionSearch> list) {
        // list是云端返回的检测结果集，可以转换这个结果集为您要用到的数据格式(RealProductBean)，并返回给插件。
        // 此方法处于异步线程中，注意不要调用UI方法。
    }

    @Override
    public void onResult(List<RealProductBean> productList) {
        // 插件处理数据结束后的回调，可在此方法中刷新数据。
        // 此方法属于UI主线程。
    }

    @Override
    public boolean onError(Exception e) {
        // Return false表明不需要您处理服务器异常的情况，可交给插件自行显示服务器异常的页面；反之Return true表明需要您在fragment中处理异常页面异常，请自行展示异常页面。
        // 此方法属于UI主线程。
    }
}
```

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|abstract List\<T\>|[getProductList](#section1650010718242)(List\<[MLProductVisionSearch](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlproductvisionsearch-0000001050169505)\> productVisionSearchList) throws Exception 返回商品详情信息集（同步请求返回），\<T\> 为自定义的商品结果Bean文件。|
|abstract boolean|[onError](#section13451162111246)(Exception e) 返回异常信息。|
|abstract void|[onResult](#section4775122910248)(List\<T\> productList) 返回商品详情信息集，\<T\> 为自定义的商品结果Bean文件。|

#### Public Methods

#### getProductList(List\<MLProductVisionSearch\> productVisionSearchList) throws Exception

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public abstract List\<T\> getProductList(List\<[MLProductVisionSearch](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlproductvisionsearch-0000001050169505)\> productVisionSearchList) throws Exception 返回商品详情信息集（同步请求返回），\<T\> 为自定义的商品结果Bean文件。|

Parameters  

|Name|Description|
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|productVisionSearchList|商品基本信息集（参见[拍照购商品类别清单](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230822150312.02704414394557671034110995477311:50001231000000:2800:37D1B096F3A16345102E572392EE1D84CC7FE4A2D25808D5E2901D236BC3FB99.xlsx?needInitFileName=true)）。|

Returns  

|Type|Description|
|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|List\<T\>|商品详情信息集（参见[拍照购商品类别清单](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230822150312.93046911408302713621737125215207:50001231000000:2800:7369476263C60EF2CE9BB14ADB38265291C84EECEAAE7A78AE3C35612F061A39.xlsx?needInitFileName=true)）。|

Throws  

|Name|Description|
|:--------|:----------|
|Exception|请求异常。|

#### onError(Exception e)

|Method|
|:---------------------------------------------------|
|public abstract boolean onError(Exception e) 返回异常信息。|

Parameters  

|Name|Description|
|:---|:----------------------------------------------------------------------------------------------------------------------------|
|e|异常信息，请参见[MLException](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlexception-0000001050169383)。|

Returns  

|Type|Description|
|:------|:----------|
|boolean|是否自处理异常。|

#### onResult(List\<T\> productList)

|Method|
|:------------------------------------------------------------------------------------|
|public abstract void onResult(List\<T\> productList) 返回商品详情信息集，\<T\> 为自定义的商品结果Bean文件。|

Parameters  

|Name|Description|
|:----------|:------------------|
|productList|商品详情信息集（信息集需要自行构建）。|

