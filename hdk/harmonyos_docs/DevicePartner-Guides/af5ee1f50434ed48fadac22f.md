---
name: document/cn/DevicePartner-Guides/health-app-h5-resourcezip-0000001182543252
title: 生成资源包
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-Guides/health-app-h5-resourcezip-0000001182543252
---

# 生成资源包

#### 上传H5文件

1. 进入项目根目录，打包项目。

   <br />

   ```
   npm run dist
   ```

   命令执行完成后在release目录下可获取生成的hpk包，hpk的命名即manifest.json中设置的[pkg_name](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-Guides/health-app-h5-config-0000001238564443#ZH-CN_TOPIC_0000001238564443__li164072047123910)，拼接了版本号。

   <br />

2. 新建一个H5文件夹，将hpk包放入H5目录内，压缩成H5.zip。

   <br />

   |第一层|第二层|
   |:--|:-----------------------------------------|
   |H5|com.huawei.health.device.${uuid}-0.0.1.hpk|

   <br />

3. 将H5.zip上传至合作伙伴平台。

   <br />

   在"产品开发"页面打开"交互设计"，单击"运动健康App"卡片右上方的"进入开发"，选择"测量页面开发"，单击"上传H5文件"下方的"上传"按钮。

   ![](https://media:101783481633723863)

   <br />

#### 获取资源包

将H5.zip上传完成后，单击下载"生成产品资源包"，用于[功能调试](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-Guides/health-app-h5-local-debug-0000001179417744)。下载完成后，请检查product.xml文件中是否包含下图框出的两个字段，如不存在请进行补充。  
![](https://media:101783481633756864)  
* "h5Type"字段置1表示接入的设备为H5设备，且接入方式为H5pro。若您的设备为H5设备，该字段为必填。
* "introduction type"字段如填写"h5"则表示设备详情页为H5页面，填""表示设备详情页为原生页面。

![](https://media:101783481633797865 "点击放大")  
