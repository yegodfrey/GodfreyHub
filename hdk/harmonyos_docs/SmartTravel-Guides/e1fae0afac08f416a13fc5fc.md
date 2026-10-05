---
name: document/cn/SmartTravel-Guides/broadcast-ip-port-via-mdns-0000001059290770
title: mDNS Broadcast IP Address and Port Number
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-Guides/broadcast-ip-port-via-mdns-0000001059290770
source: portal
---

# mDNS Broadcast IP Address and Port Number

#### Scenario

Sending USB command words can only ensure that a phone that supports this mode can establish a wired HiCar connection with the head unit. Some Huawei phones running EMUI 10.X do not support static IP addresses or ports, and therefore cannot establish a wired HiCar connection with the head unit.

To be compatible with these phones, the head unit needs to start the mDNS server when sending USB command words to the phones, and broadcasts the IP address of the head unit and the server socket port listened by the HiCar SDK. (The IP address and port number are notified to the head unit when the HiCar SDK initializes the USB driver.) The mDNS server is disabled when the head unit detects that the USB connection is dropped.

Phones that do not support static IP addresses and ports obtain the IP address and port number through mDNS broadcast, in order to establish socket connections.

#### API Description

Table 1 describes the mDNS configurations required for enabling the mDNS service during USB connection.

**Table 1** mDNS configurationsmDNS Item | Value | Description  
---|---|---  
name | com.huawei.nearby.usb.nsd | Service name.  
type | _nearby._tcp | Service type.  
domain | local | Service domain.  
txtRecord | Use **ncm.ip** as the label to record the IP address of the local host in the txtRecord format. The **txtRecord** parameter and **txtLen** of the mDNS service are used to carry the mDNS configurations. | Attached text information.  
port | Port number passed by the HiCar SDK. | Port number.  
  
#### Development Procedure

You need to select the mDNS component according to your needs and start the mDNS service. The following code is for your reference only.

The following is the sample code:
    
    DNSServiceFlags flags = 0;
    uint32_t ifindex = kDNSServiceInterfaceIndexAny;
    const char* name = HICAR_MDNS_NAME;
    const char* regtype = HICAR_MDNS_REG_TYPE;
    const char* domain = HICAR_MDNS_DOMAIN;
    const char* host = NULL;
    uint16_t port = (port number passed by **Nearby**)
    
    uint8_t txtBuf[256] = {0};
    TXTRecordRef txtRec;
    TXTRecordCreate( &txtRec, (uint16_t) sizeof( txtBuf ), txtBuf );
    DNSServiceErrorType err = TXTRecordSetValue( &txtRec, HICAR_MDNS_NCMIP_TAG, (uint8_t) strlen( ip ), ip ); //**ip** is the IP address of the local host.
    if (err != kDNSServiceErr_NoError) {
    	HWLog(LOG_LEVEL_ERROR, "TXTRecordSetValue failed: %d\n", err);
    	return;
    }
    txtPtr = (const char*)TXTRecordGetBytesPtr( &txtRec );
    txtLen = TXTRecordGetLength( &txtRec );
    
    err = DNSServiceRegister((DNSServiceRef*)&handle, flags, ifindex, name, regtype, domain, host,htons(port), txtLen, txtPtr, _RegistrationHandler, this);
    if (err != kDNSServiceErr_NoError) {
    	HWLog(LOG_LEVEL_ERROR, "DNSServiceRegister failed: %d\n", err);
    } else {
    	HWLog(LOG_LEVEL_DEBUG, "DNSServiceRegister %s\n", regtype);
    }
