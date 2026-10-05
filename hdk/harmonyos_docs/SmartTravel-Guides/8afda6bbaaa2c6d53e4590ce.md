---
name: document/cn/SmartTravel-Guides/scan-qrcode-connect-0000001051010285
title: Scanning the QR Code to Connect
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-Guides/scan-qrcode-connect-0000001051010285
source: portal
---

# Scanning the QR Code to Connect

If you plan to connect to HiCar in wireless mode but the head unit is not capable of BLE advertising, which is used for device discovery, scan to connect can be used to set up the wireless connection.

#### Connection Constraints

As a supplement to wireless connectivity, the scan to connect method allows users to scan a QR code to connect a phone to the head unit, without the need for the head unit to discover the phone via BLE advertising and the phone to enter the PIN. Do not use scan to connect if the head unit is capable of BLE advertising. That is, the PIN code screen and the code scanning screen for wireless connection will never appear at the same time.

#### Process

**Figure 1** Scan to connect procedure  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230817210252.34788461415958217149561454899027:50001231000000:2800:F7E4814AACB6C6FE6F084FE1610C58237D986384F45A3031209890E1AF216694.png?needInitFileName=true?needInitFileName=true)

     1. After startup, the HMI app initializes the HiCar SDK. When a user accesses the code scanning screen, the HMI app needs to change the Bluetooth status of the head unit so that it becomes scanable and connectable.
     2. The HMI app obtains the QR code value through the corresponding API in the HiCar SDK. To prevent information leakage, the QR code value must be refreshed every 2 minutes.
     3. After the user scans QR code with their phone and the QR code is recognized, a prompt will be displayed on the phone, asking the user to connect to the head unit.
     4. After the user touches the connect button, a Bluetooth BR connection is initiated and authentication starts.
     5. If the authentication is successful, a Wi-Fi connection is set up. When the HiCar screen is displayed, the connection is successful.

#### Adaptations

If you choose to implement HiCar wireless connection via the scan to connect method, you may ignore the descriptions in [Bluetooth](https://developer.huawei.com/consumer/cn/doc/development/SmartTravel-Guides/bluetooth-0000001193969601). But still you need to complete the Wi-Fi related configurations by referring to [Wi-Fi](https://developer.huawei.com/consumer/cn/doc/development/SmartTravel-Guides/wifi-0000001147929890).

For details about how to implement the scan to connect function in the HMI app, please refer to [Establishing Scan to Connect (Beta)](https://developer.huawei.com/consumer/cn/doc/development/SmartTravel-Guides/scan-to-connect-0000001051090204).
