---
name: document/cn/doc-references/netcapabilities-0000001054678960
title: NetCapabilities
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/netcapabilities-0000001054678960
source: portal
---

# NetCapabilities  
  
[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.net.NetCapabilities
    
    public final class NetCapabilities
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)  
  
---  
Stores the transmission capabilities and bearer types of data networks. 

You can use the methods of [NetSpecifier.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netspecifier_builder-0000001054838914) to set related parameters.

**Since:**

1

#### Nested Class Summary

Nested classes/interfaces inherited from interface ohos.utils.[Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)  
---  
[Sequenceable.Producer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable_producer-0000001054678971)<[T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable_producer-0000001054678971)>  
  
#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [BEARER_BLUETOOTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__BEARER_BLUETOOTH) |  Indicates that the network is based on a Bluetooth network.   
static int | [BEARER_CELLULAR](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__BEARER_CELLULAR) |  Indicates that the network is based on a cellular network.   
static int | [BEARER_ETHERNET](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__BEARER_ETHERNET) |  Indicates that the network is an Ethernet network.   
static int | [BEARER_LOWPAN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__BEARER_LOWPAN) |  Indicates that the network is a LoWPAN network.   
static int | [BEARER_VPN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__BEARER_VPN) |  Indicates that the network is a VPN.   
static int | [BEARER_WIFI](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__BEARER_WIFI) |  Indicates that the network is based on a Wi-Fi network.   
static int | [BEARER_WIFI_AWARE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__BEARER_WIFI_AWARE) |  Indicates that the network is a Wi-Fi Aware network.   
static int | [NET_CAPABILITY_BIP0](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_BIP0) |  Indicates that the network can access the BIP0 server.   
static int | [NET_CAPABILITY_BIP1](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_BIP1) |  Indicates that the network can access the BIP1 server.   
static int | [NET_CAPABILITY_BIP2](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_BIP2) |  Indicates that the network can access the BIP2 server.   
static int | [NET_CAPABILITY_BIP3](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_BIP3) |  Indicates that the network can access the BIP3 server.   
static int | [NET_CAPABILITY_BIP4](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_BIP4) |  Indicates that the network can access the BIP4 server.   
static int | [NET_CAPABILITY_BIP5](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_BIP5) |  Indicates that the network can access the BIP5 server.   
static int | [NET_CAPABILITY_BIP6](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_BIP6) |  Indicates that the network can access the BIP6 server.   
static int | [NET_CAPABILITY_CAPTIVE_PORTAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_CAPTIVE_PORTAL) |  Indicates that this network was found to have a captive portal in place last time it was probed.   
static int | [NET_CAPABILITY_CBS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_CBS) |  Indicates that the network can access the carrier's CBS server.   
static int | [NET_CAPABILITY_DUN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_DUN) |  Indicates that the network can access the carrier's DUN or Tethering gateway.   
static int | [NET_CAPABILITY_EIMS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_EIMS) |  Indicates that the network can access the carrier's IMS emergency call server.   
static int | [NET_CAPABILITY_FOREGROUND](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_FOREGROUND) |  Indicates that the network is available only for foreground applications.   
static int | [NET_CAPABILITY_FOTA](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_FOTA) |  Indicates that the network can access the FOTA server for remote device upgrade.   
static int | [NET_CAPABILITY_IA](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_IA) |  Indicates that the network can access the carrier's Initial Attach server.   
static int | [NET_CAPABILITY_IMS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_IMS) |  Indicates that the network can access the IMS server.   
static int | [NET_CAPABILITY_INTERNAL_DEFAULT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_INTERNAL_DEFAULT) |  Indicates that the network can access internal default servers.   
static int | [NET_CAPABILITY_INTERNET](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_INTERNET) |  Indicates that the network can access the Internet.   
static int | [NET_CAPABILITY_MCX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_MCX) |  Indicates that the network can access the Mission Critical server of the carrier.   
static int | [NET_CAPABILITY_MMS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_MMS) |  Indicates that the network can access the carrier's MMSC to send and receive multimedia messages.   
static int | [NET_CAPABILITY_NOT_CONGESTED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_NOT_CONGESTED) |  Indicates that the network is not congested.   
static int | [NET_CAPABILITY_NOT_METERED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_NOT_METERED) |  Indicates that the network traffic is not metered.   
static int | [NET_CAPABILITY_NOT_RESTRICTED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_NOT_RESTRICTED) |  Indicates that the network is not restricted.   
static int | [NET_CAPABILITY_NOT_ROAMING](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_NOT_ROAMING) |  Indicates that the network is unavailable during roaming.   
static int | [NET_CAPABILITY_NOT_SUSPENDED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_NOT_SUSPENDED) |  Indicates that the network is not suspended.   
static int | [NET_CAPABILITY_NOT_VPN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_NOT_VPN) |  Indicates that the network does not use a VPN.   
static int | [NET_CAPABILITY_RCS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_RCS) |  Indicates that the network can access the carrier's RCS server.   
static int | [NET_CAPABILITY_SUPL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_SUPL) |  Indicates that the network can access the carrier's SUPL server.   
static int | [NET_CAPABILITY_TRUSTED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_TRUSTED) |  Indicates that the network is trusted.   
static int | [NET_CAPABILITY_VALIDATED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_VALIDATED) |  Indicates that the network is available.   
static int | [NET_CAPABILITY_WIFI_P2P](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_WIFI_P2P) |  Indicates that the network can be used for Wi-Fi Direct.   
static int | [NET_CAPABILITY_XCAP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NET_CAPABILITY_XCAP) |  Indicates that the network can access the carrier's XCAP server.   
static long | [RESTRICTED_CAPABILITIES](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__RESTRICTED_CAPABILITIES) |  Capabilities that suggest that a network is restricted.   
static int | [SIGNAL_STRENGTH_UNSPECIFIED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__SIGNAL_STRENGTH_UNSPECIFIED) |  Unspecified signal strength value.   
static long | [UNRESTRICTED_CAPABILITIES](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__UNRESTRICTED_CAPABILITIES) |  Capabilities that suggest that a network is unrestricted.   
  
#### Constructor Summary

Constructor | Description  
---|---  
[NetCapabilities](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NetCapabilities--)​() |  Construct of NetCapabilities.   
[NetCapabilities](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__NetCapabilities-ohos_net_NetCapabilities-)​([NetCapabilities](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960) nc) |  Construct of NetCapabilities.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__equals-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) obj) |  Indicates whether some other object is "equal to" this one.   
int | [getLinkDownstreamBandwidthKbps](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__getLinkDownstreamBandwidthKbps--)​() |  Retrieves the downstream bandwidth for this network in Kbps.   
int | [getLinkUpstreamBandwidthKbps](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__getLinkUpstreamBandwidthKbps--)​() |  Retrieves the upstream bandwidth for this network in Kbps.   
boolean | [hasBearer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__hasBearer-int-)​(int bearer) |  Checks whether this [NetHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nethandle-0000001054358939) instance has a specified bearer.   
boolean | [hasCap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__hasCap-int-)​(int capability) |  Checks whether this [NetHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nethandle-0000001054358939) instance has a specified capability.   
int | [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__hashCode--)​() |  Returns a hash code value for the object.   
boolean | [marshalling](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__marshalling-ohos_utils_Parcel-)​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) dest) |  Marshals this Sequenceable object into a [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018).   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__toString--)​() |  Composes all the members and their values in the class into a string in sequence.   
boolean | [unmarshalling](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960#ZH-CN_TOPIC_0000001054678960__unmarshalling-ohos_utils_Parcel-)​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) data) |  Unmarshals this Sequenceable object from a [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018).   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from interface ohos.utils.[Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)  
---  
[hasFileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001#ZH-CN_TOPIC_0000001054239001__hasFileDescriptor--)  
  
#### Field Detail

#### [h2]BEARER_BLUETOOTH

public static final int BEARER_BLUETOOTH

Indicates that the network is based on a Bluetooth network. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_BEARER_BLUETOOTH)

#### [h2]BEARER_CELLULAR

public static final int BEARER_CELLULAR

Indicates that the network is based on a cellular network. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_BEARER_CELLULAR)

#### [h2]BEARER_ETHERNET

public static final int BEARER_ETHERNET

Indicates that the network is an Ethernet network. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_BEARER_ETHERNET)

#### [h2]BEARER_LOWPAN

public static final int BEARER_LOWPAN

Indicates that the network is a LoWPAN network. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_BEARER_LOWPAN)

#### [h2]BEARER_VPN

public static final int BEARER_VPN

Indicates that the network is a VPN. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_BEARER_VPN)

#### [h2]BEARER_WIFI

public static final int BEARER_WIFI

Indicates that the network is based on a Wi-Fi network. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_BEARER_WIFI)

#### [h2]BEARER_WIFI_AWARE

public static final int BEARER_WIFI_AWARE

Indicates that the network is a Wi-Fi Aware network. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_BEARER_WIFI_AWARE)

#### [h2]NET_CAPABILITY_BIP0

public static final int NET_CAPABILITY_BIP0

Indicates that the network can access the BIP0 server. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_BIP0)

#### [h2]NET_CAPABILITY_BIP1

public static final int NET_CAPABILITY_BIP1

Indicates that the network can access the BIP1 server. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_BIP1)

#### [h2]NET_CAPABILITY_BIP2

public static final int NET_CAPABILITY_BIP2

Indicates that the network can access the BIP2 server. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_BIP2)

#### [h2]NET_CAPABILITY_BIP3

public static final int NET_CAPABILITY_BIP3

Indicates that the network can access the BIP3 server. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_BIP3)

#### [h2]NET_CAPABILITY_BIP4

public static final int NET_CAPABILITY_BIP4

Indicates that the network can access the BIP4 server. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_BIP4)

#### [h2]NET_CAPABILITY_BIP5

public static final int NET_CAPABILITY_BIP5

Indicates that the network can access the BIP5 server. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_BIP5)

#### [h2]NET_CAPABILITY_BIP6

public static final int NET_CAPABILITY_BIP6

Indicates that the network can access the BIP6 server. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_BIP6)

#### [h2]NET_CAPABILITY_CAPTIVE_PORTAL

public static final int NET_CAPABILITY_CAPTIVE_PORTAL

Indicates that this network was found to have a captive portal in place last time it was probed. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_CAPTIVE_PORTAL)

#### [h2]NET_CAPABILITY_CBS

public static final int NET_CAPABILITY_CBS

Indicates that the network can access the carrier's CBS server. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_CBS)

#### [h2]NET_CAPABILITY_DUN

public static final int NET_CAPABILITY_DUN

Indicates that the network can access the carrier's DUN or Tethering gateway. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_DUN)

#### [h2]NET_CAPABILITY_EIMS

public static final int NET_CAPABILITY_EIMS

Indicates that the network can access the carrier's IMS emergency call server. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_EIMS)

#### [h2]NET_CAPABILITY_FOREGROUND

public static final int NET_CAPABILITY_FOREGROUND

Indicates that the network is available only for foreground applications. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_FOREGROUND)

#### [h2]NET_CAPABILITY_FOTA

public static final int NET_CAPABILITY_FOTA

Indicates that the network can access the FOTA server for remote device upgrade. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_FOTA)

#### [h2]NET_CAPABILITY_IA

public static final int NET_CAPABILITY_IA

Indicates that the network can access the carrier's Initial Attach server. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_IA)

#### [h2]NET_CAPABILITY_IMS

public static final int NET_CAPABILITY_IMS

Indicates that the network can access the IMS server. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_IMS)

#### [h2]NET_CAPABILITY_INTERNAL_DEFAULT

public static final int NET_CAPABILITY_INTERNAL_DEFAULT

Indicates that the network can access internal default servers. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_INTERNAL_DEFAULT)

#### [h2]NET_CAPABILITY_INTERNET

public static final int NET_CAPABILITY_INTERNET

Indicates that the network can access the Internet. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_INTERNET)

#### [h2]NET_CAPABILITY_MCX

public static final int NET_CAPABILITY_MCX

Indicates that the network can access the Mission Critical server of the carrier. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_MCX)

#### [h2]NET_CAPABILITY_MMS

public static final int NET_CAPABILITY_MMS

Indicates that the network can access the carrier's MMSC to send and receive multimedia messages. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_MMS)

#### [h2]NET_CAPABILITY_NOT_CONGESTED

public static final int NET_CAPABILITY_NOT_CONGESTED

Indicates that the network is not congested. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_NOT_CONGESTED)

#### [h2]NET_CAPABILITY_NOT_METERED

public static final int NET_CAPABILITY_NOT_METERED

Indicates that the network traffic is not metered. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_NOT_METERED)

#### [h2]NET_CAPABILITY_NOT_RESTRICTED

public static final int NET_CAPABILITY_NOT_RESTRICTED

Indicates that the network is not restricted. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_NOT_RESTRICTED)

#### [h2]NET_CAPABILITY_NOT_ROAMING

public static final int NET_CAPABILITY_NOT_ROAMING

Indicates that the network is unavailable during roaming. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_NOT_ROAMING)

#### [h2]NET_CAPABILITY_NOT_SUSPENDED

public static final int NET_CAPABILITY_NOT_SUSPENDED

Indicates that the network is not suspended. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_NOT_SUSPENDED)

#### [h2]NET_CAPABILITY_NOT_VPN

public static final int NET_CAPABILITY_NOT_VPN

Indicates that the network does not use a VPN. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_NOT_VPN)

#### [h2]NET_CAPABILITY_RCS

public static final int NET_CAPABILITY_RCS

Indicates that the network can access the carrier's RCS server. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_RCS)

#### [h2]NET_CAPABILITY_SUPL

public static final int NET_CAPABILITY_SUPL

Indicates that the network can access the carrier's SUPL server. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_SUPL)

#### [h2]NET_CAPABILITY_TRUSTED

public static final int NET_CAPABILITY_TRUSTED

Indicates that the network is trusted. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_TRUSTED)

#### [h2]NET_CAPABILITY_VALIDATED

public static final int NET_CAPABILITY_VALIDATED

Indicates that the network is available. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_VALIDATED)

#### [h2]NET_CAPABILITY_WIFI_P2P

public static final int NET_CAPABILITY_WIFI_P2P

Indicates that the network can be used for Wi-Fi Direct. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_WIFI_P2P)

#### [h2]NET_CAPABILITY_XCAP

public static final int NET_CAPABILITY_XCAP

Indicates that the network can access the carrier's XCAP server. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_NET_CAPABILITY_XCAP)

#### [h2]RESTRICTED_CAPABILITIES

public static final long RESTRICTED_CAPABILITIES

Capabilities that suggest that a network is restricted. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_RESTRICTED_CAPABILITIES)

#### [h2]SIGNAL_STRENGTH_UNSPECIFIED

public static final int SIGNAL_STRENGTH_UNSPECIFIED

Unspecified signal strength value. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_SIGNAL_STRENGTH_UNSPECIFIED)

#### [h2]UNRESTRICTED_CAPABILITIES

public static final long UNRESTRICTED_CAPABILITIES

Capabilities that suggest that a network is unrestricted. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_net_NetCapabilities_UNRESTRICTED_CAPABILITIES)

#### Constructor Detail

#### [h2]NetCapabilities

public NetCapabilities​()

Construct of NetCapabilities. 

**Since:**

1

#### [h2]NetCapabilities

public NetCapabilities​([NetCapabilities](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960) nc)

Construct of NetCapabilities. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
nc  |  Object of the NetCapabilities.  
  
**Since:**

1

#### Method Detail

#### [h2]equals

public boolean equals​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) obj)

Description copied from class: [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-)

Indicates whether some other object is "equal to" this one. 

The equals method implements an equivalence relation on non-null object references: 

    * It is _reflexive_ : for any non-null reference value x, x.equals(x) should return true. 
    * It is _symmetric_ : for any non-null reference values x and y, x.equals(y) should return true if and only if y.equals(x) returns true. 
    * It is _transitive_ : for any non-null reference values x, y, and z, if x.equals(y) returns true and y.equals(z) returns true, then x.equals(z) should return true. 
    * It is _consistent_ : for any non-null reference values x and y, multiple invocations of x.equals(y) consistently return true or consistently return false, provided no information used in equals comparisons on the objects is modified. 
    * For any non-null reference value x, x.equals(null) should return false. 

The equals method for class Object implements the most discriminating possible equivalence relation on objects; that is, for any non-null reference values x and y, this method returns true if and only if x and y refer to the same object (x == y has the value true). 

Note that it is generally necessary to override the hashCode method whenever this method is overridden, so as to maintain the general contract for the hashCode method, which states that equal objects must have equal hash codes.

**Overrides:**

[equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
obj  |  the reference object with which to compare.  
  
**Returns:**

true if this object is the same as the obj argument; false otherwise.

**See Also:**

[Object.hashCode()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [HashMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashmap-0000001054518606)

#### [h2]hashCode

public int hashCode​()

Description copied from class: [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--)

Returns a hash code value for the object. This method is supported for the benefit of hash tables such as those provided by [HashMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashmap-0000001054518606). 

The general contract of hashCode is: 

    * Whenever it is invoked on the same object more than once during an execution of a Java application, the hashCode method must consistently return the same integer, provided no information used in equals comparisons on the object is modified. This integer need not remain consistent from one execution of an application to another execution of the same application. 
    * If two objects are equal according to the equals(Object) method, then calling the hashCode method on each of the two objects must produce the same integer result. 
    * It is not required that if two objects are unequal according to the [Object.equals(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-) method, then calling the hashCode method on each of the two objects must produce distinct integer results. However, the programmer should be aware that producing distinct integer results for unequal objects may improve the performance of hash tables. 

As much as is reasonably practical, the hashCode method defined by class Object does return distinct integers for distinct objects. (This is typically implemented by converting the internal address of the object into an integer, but this implementation technique is not required by the Java™ programming language.)

**Overrides:**

[hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

a hash code value for this object.

**See Also:**

[Object.equals(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [System.identityHashCode(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/system-0000001054558449#ZH-CN_TOPIC_0000001054558449__identityHashCode-java_lang_Object-)

#### [h2]hasCap

public boolean hasCap​(int capability)

Checks whether this [NetHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nethandle-0000001054358939) instance has a specified capability. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
capability  |  Indicates the capability to check for, which is defined in [NetCapabilities](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960).  
  
**Returns:**

Returns true if this [NetHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nethandle-0000001054358939) instance has the specified capability; returns false otherwise.

**Since:**

3

#### [h2]hasBearer

public boolean hasBearer​(int bearer)

Checks whether this [NetHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nethandle-0000001054358939) instance has a specified bearer. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
bearer  |  Indicates the bearer to check for, which is defined in [NetCapabilities](https://developer.harmonyos.com/cn/docs/documentation/doc-references/netcapabilities-0000001054678960).  
  
**Returns:**

Returns true if this [NetHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nethandle-0000001054358939) instance has the specified bearer; returns false otherwise.

**Since:**

3

#### [h2]marshalling

public boolean marshalling​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) dest)

Description copied from interface: [Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001#ZH-CN_TOPIC_0000001054239001__marshalling-ohos_utils_Parcel-)

Marshals this Sequenceable object into a [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018). 

**Specified by:**

[marshalling](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001#ZH-CN_TOPIC_0000001054239001__marshalling-ohos_utils_Parcel-) in interface [Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
dest  |  Indicates the [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) object to which the Sequenceable object will be marshaled..  
  
**Returns:**

Returns true if the marshalling is successful; returns false otherwise.

#### [h2]unmarshalling

public boolean unmarshalling​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) data)

Description copied from interface: [Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001#ZH-CN_TOPIC_0000001054239001__unmarshalling-ohos_utils_Parcel-)

Unmarshals this Sequenceable object from a [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018). 

**Specified by:**

[unmarshalling](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001#ZH-CN_TOPIC_0000001054239001__unmarshalling-ohos_utils_Parcel-) in interface [Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
data  |  Indicates the [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) object into which the Sequenceable object has been marshaled.  
  
**Returns:**

Returns true if the unmarshalling is successful; returns false otherwise.

#### [h2]getLinkDownstreamBandwidthKbps

public int getLinkDownstreamBandwidthKbps​()

Retrieves the downstream bandwidth for this network in Kbps. 

**Returns:**

The downstream (network to device) bandwidth.

#### [h2]getLinkUpstreamBandwidthKbps

public int getLinkUpstreamBandwidthKbps​()

Retrieves the upstream bandwidth for this network in Kbps. 

**Returns:**

The upstream (device to network) bandwidth.

#### [h2]toString

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​()

Composes all the members and their values in the class into a string in sequence. 

**Overrides:**

[toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

Returns a string that is composed of all the members and their values in the class.

**Since:**

5
