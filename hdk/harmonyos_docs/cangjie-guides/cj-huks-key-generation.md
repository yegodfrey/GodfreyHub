---
name: cangjie-guides/cj-huks-key-generation
title: 生成密钥
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-generation
nodePath: 系统 / 安全 / Universal Keystore Kit（密钥管理服务） / 密钥生成/导入 / 密钥生成 / 开发指导 / 生成密钥
---

# 生成密钥

以生成DH密钥为例，生成随机密钥。具体的场景介绍及支持的算法规格，请参见[密钥生成支持的算法](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-huks-key-generation-overview#支持的算法)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/748MFK4nT7i_6d0JG2I2jA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090128Z&HW-CC-Expire=86400&HW-CC-Sign=61C68611218AF7CF51E40006B51A50860A09F5D11DC91DEE349194C12CFF1C16)

密钥别名中禁止包含个人数据等敏感信息。

#### 开发步骤

  1. 指定待生成的密钥别名keyAlias。

     * 密钥别名的最大长度为128字节，建议不包含个人信息等敏感词汇。
     * 对于不同业务间生成的密钥，HUKS将基于业务身份信息进行存储路径隔离，不会因为和其他业务密钥同名导致冲突。
  2. 初始化密钥属性集。通过[HuksParam](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#class-huksparam)封装密钥属性，搭配Array组成密钥属性集，并赋值给[HuksOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#class-huksoptions)中的properties字段。

密钥属性集中必须包含[HuksKeyAlg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#class-hukskeyalg)、[HuksKeySize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#class-hukskeysize)、[HuksKeyPurpose](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#class-hukskeypurpose)属性，即必传TAG，HUKS_TAG_ALGORITHM、HUKS_TAG_PURPOSE、HUKS_TAG_KEY_SIZE。注：一个密钥只能有一类PURPOSE，并且，生成密钥时指定的用途要与使用时的方式一致，否则会导致异常。

  3. 调用[generateKeyItem](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-security_huks#func-generatekeyitemstring-huksoptions)，传入密钥别名和密钥属性集，生成密钥。




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/M0faGoJmSlmAG8aiM8s1jw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090128Z&HW-CC-Expire=86400&HW-CC-Sign=EB16401C36AD4619A0E4280D86E6F8F830420E7D2D08D15A3FC95D562CBD93B4)

如果业务再次使用相同别名调用HUKS生成密钥，HUKS将生成新密钥并直接覆盖历史的密钥文件。

#### 示例
    
    
    /* 以生成DH密钥为例 */
    import kit.PerformanceAnalysisKit.Hilog
    import kit.UniversalKeystoreKit.*
    
    func loggerInfo(str: String) {
        Hilog.info(0, "CangjieTest", str)
    }
    
    /* 1.确定密钥别名 */
    let keyAlias = 'dh_key'
    /* 2.初始化密钥属性集 */
    let properties1: Array<HuksParam> = [
      HuksParam(
        HuksTag.HUKS_TAG_ALGORITHM,
        HuksParamValue.Uint32Value(HuksKeyAlg.HUKS_ALG_DH)
      ),
      HuksParam(
        HuksTag.HUKS_TAG_PURPOSE,
        HuksParamValue.Uint32Value(HuksKeyPurpose.HUKS_KEY_PURPOSE_AGREE)
      ),
      HuksParam(
        HuksTag.HUKS_TAG_KEY_SIZE,
        HuksParamValue.Uint32Value(HuksKeySize.HUKS_DH_KEY_SIZE_2048)
      )
    ]
    let huksOptions: HuksOptions = HuksOptions(
      properties: properties1,
      inData: Bytes()
    )
    
    /* 3.生成密钥 */
    func publicGenKeyFunc(keyAlias: String, huksOptions: HuksOptions) {
      loggerInfo("enter generateKeyItem")
      try {
        generateKeyItem(keyAlias, huksOptions)
      } catch (e: Exception) {
        loggerInfo("generateKeyItem input arg invalid, ${e}")
      }
    }
    
    func TestGenKey() {
      publicGenKeyFunc(keyAlias, huksOptions)
    }
