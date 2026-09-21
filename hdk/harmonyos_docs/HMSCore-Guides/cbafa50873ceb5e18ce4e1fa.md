---
name: document/cn/HMSCore-Guides/guide-certificates-0000001088723154
title: App应用内、快应用、华为钱包CardStore方式证书申请
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/guide-certificates-0000001088723154
---

# App应用内、快应用、华为钱包CardStore方式证书申请

在创建Wallet Kit服务之前，需要提前使用华为提供的证书生成工具，按照如下步骤生成私钥和证书请求文件：

1. 下载[walletKitGenerateRsa_jar.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260630161020.41851046657065634189800473871005:50001231000000:2800:844997A1C51C10A5831C822ADFECFB27F2E1381DFD15058C11B2E9EFA8BC1A58.zip?needInitFileName=true)压缩包，解压并打开，双击运行"Wallet Kit certificate generator(Windows OS, no JRE).bat"文件：

   > 说明
   >
   > walletKitGenerateRsa证书生成工具仅支持jdk 1.8及以上版本。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/F6zafKBgTMmqxxgdRNH5Bw/zh-cn_image_0000001985454274.png?HW-CC-KV=V1&HW-CC-Date=20260909T180609Z&HW-CC-Expire=31536000000&HW-CC-Sign=22AD303DE32B38887D914BC4DC4B35852C66B6737CF5CE66C30AE860976EE2CD)

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/hlWLyCTrQ0KZMJYoHMD4OA/zh-cn_image_0000001088723346.png?HW-CC-KV=V1&HW-CC-Date=20260909T180609Z&HW-CC-Expire=31536000000&HW-CC-Sign=7B8A52813436270FFDDBB3B1B03E4307B4E72E9AEFAFF778D718094E229271B4)

2. 按照提示，输入服务号，建议格式为*hwpass.公司简称.项目名称.pass.服务项目* ，可为大小写英文字母、数字，中间以"."分割，长度不超过40个字符。例：服务项目为发票类的为hwpass.xxx.xxxx.pass.invoice。
3. 运行成功后，界面会提示生成的文件路径，默认当前路径的RSA密钥文件夹下：

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/ROLucp-hT7W0xK4lHZPmHQ/zh-cn_image_0000001088563410.png?HW-CC-KV=V1&HW-CC-Date=20260909T180609Z&HW-CC-Expire=31536000000&HW-CC-Sign=692BF3875A5EAC3B2975C7FB495FA44B9CDDB9A6539126EDC9FA2737F8668753)

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/t3Kg0Bf8RoSvjErnqWjb1g/zh-cn_image_0000001135299937.png?HW-CC-KV=V1&HW-CC-Date=20260909T180609Z&HW-CC-Expire=31536000000&HW-CC-Sign=27D45E0F449ABF056741C762E53A02838AB8D3DC9B38EDC08FDDA2DF81B5F8C1 "点击放大")

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/VQHQ6HnnSBSTIRGPXMu_DA/zh-cn_image_0000002022214005.png?HW-CC-KV=V1&HW-CC-Date=20260909T180609Z&HW-CC-Expire=31536000000&HW-CC-Sign=89799DD8177B9B223527F2F04CABA541C6282A3DC6B6250B555B2AD774989AE7)

4. 服务号.txt结尾的文件为证书请求CSR文件，华为开发者联盟网站AGC上注册Wallet Kit服务时使用。

   服务号.pem结尾的文件为私钥，请妥善保存，不要泄露给其他人。

