---
name: document/cn/apiref/ether_8h-0000001054829483
title: ether.h
uri: https://developer.huawei.com/consumer/cn/doc/apiref/ether_8h-0000001054829483
source: portal
---

# ether.h  
  
#### Overview

**Related Modules:**

[NET](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972)

**Description:**

Provides functions and data structures related to network operations. For example, you can use the functions to send and receive network data, manage network addresses, and convert bytes. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Functions

Function | Description  
---|---  
[ether_ntoa](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga07e34e6ee9e272c4799780915d11677c) (const struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636) *p_a) | char *  Converts binary data in network byte order into a standard 48-bit Ethernet host address in the colon hexadecimal notation.   
[ether_aton](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gaab4c5b65c36fc0ea96a017daabc3770a) (const char *x) | struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636) *  Converts a standard 48-bit Ethernet host address in the colon hexadecimal notation into binary data in network byte order.   
[ether_ntoa_r](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga245e21de8e82756712a5182c2674c2ad) (const struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636) *p_a, char *x) | char *  Converts binary data in network byte order into a standard 48-bit Ethernet host address in the colon hexadecimal notation. This function is reentrant.   
[ether_aton_r](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gac0954821754bace30f674e61bb9f4e5f) (const char *x, struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636) *p_a) | struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636) *  Converts a standard 48-bit Ethernet host address in the colon hexadecimal notation into binary data in network byte order. This function is reentrant. 
