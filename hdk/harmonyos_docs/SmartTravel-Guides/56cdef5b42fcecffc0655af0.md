---
name: document/cn/SmartTravel-Guides/shared-internet-access-0000001064434175
title: Shared Internet Access
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-Guides/shared-internet-access-0000001064434175
source: portal
---

# Shared Internet Access

#### Scenario

After a HiCar connection is established between the head unit and the phone, the head unit can request to share the Internet access provided by the phone. The process can be briefly described as follows:

     1. The head unit sends an Internet access sharing request to the HiCar app through the HiCar SDK. 
     2. The HiCar app performs authorization based on how shared Internet access has been configured by the user. 
     3. The procedure will proceed only if the sharing is allowed. If otherwise, the request will be rejected, and the procedure ends. 
     4. The HiCar app sends the shared Internet access configuration information to the head unit. 
     5. After receiving the configuration information, the head unit starts Internet access sharing. 
     6. The sharing can be ended in either of the following ways: 
        1. By the head unit: The head unit sends a stop message, and the HiCar app responds to the message. 
        2. By the user: The HiCar app sends a stop message (as initiated by the user), and the head unit responds to the message. 

For details about the related data format, refer to [Shared Internet Access](https://developer.huawei.com/consumer/cn/doc/development/SmartTravel-References/share-internet-access-0000001153450248) in the **APIs Between the HiCar App and Head Unit** section in the API Reference.

#### Development Procedure

     1. After the phone and head unit are successfully connected and the projection is successful, the head unit needs to send an Internet sharing request to HiCar through **sendCarData**. The head unit sends the following data:
            
            {
                "service":"net",
                "subService":"internetShare",
                "command":0,
                "data":{
                    "enable":1
                }
            }

     2. The head unit receives a response from the HiCar app based on the authorization by the user.
        1. After the user has granted the authorization, the head unit receives the shared Internet access configuration information via the **onDataReceive** callback method. The following is the sample code:
               
               {
                   "service":"net",
                   "subService":"internetShare",
                   "command":0,
                   "errorCode":100000,
                   "data":{
                       "gateway":"192.168.43.2",
                       "dns":"192.168.43.1"
                   }
               }

After receiving the configuration information, the head unit adds the route and DNS configuration to the head unit system.

The following is an example of adding a device using the command line. You can also add a device using by adding code.
               
               ip route add default via 192.168.43.2
               Modify the DNS configuration in /etc/resolv.conf.

        2. After the user has not granted the authorization, the head unit receives the result code via the **onDataReceive** callback method. The following is the sample code:
               
               {
                   "service":"net",
                   "subService":"internetShare",
                   "command":0,
                   "errorCode":100002
               }

     3. The head unit stops the Internet access sharing.
        1. The head unit needs to send a message to the HiCar app via **sendCarData** to stop Internet access sharing. The following is the sample code:
               
               {
                   "service":"net",
                   "subService":"internetShare",
                   "command":0,
                   "data":{
                       "enable":0
                   }
               }

        2. After receiving the preceding message, the HiCar app returns the corresponding information. The following is the sample code:
               
               {
                   "service":"net",
                   "subService":"internetShare",
                   "command":0,
                   "errorCode":100000
               }

     4. The phone stops the Internet access sharing.
        1. The HiCar app sends a message to the head unit via the **onDataReceive** callback method to stop Internet access sharing. The following is the sample code:
               
               {
                   "service":"net",
                   "subService":"internetShare",
                   "command":1,
                   "data":{
                       "enable":0
                   }
               }

        2. After receiving the preceding message, the head unit sends a response to the HiCar app via **sendCarData**. The following is the sample code:
               
               {
                   "service":"net",
                   "subService":"internetShare",
                   "command":1,
                   "errorCode":100000
               }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230817210259.39030481180208757857865183194032:50001231000000:2800:7F04E8D0048D74F6D0AF1F60A59EDB767AE19DAEA79EC96CB03F9AE00B5F15AA.png?needInitFileName=true?needInitFileName=true)

When the Internet access sharing ends, you need to delete the added route and DNS configuration information.
