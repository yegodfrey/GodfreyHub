---
name: document/cn/SmartTravel-Guides/about-this-document-0000000000105597
title: About the Service
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-Guides/about-this-document-0000000000105597
source: portal
---

# About the Service

#### Service Introduction

HUAWEI HiCar (HiCar for short) is a solution that Huawei provides to empower users with smart features in all scenarios, and every conceivable environment – in a vehicle, at house, or on the go. HiCar connects mobile phones to vehicles to pool their capabilities for mutually reinforcing, creating a next-level, phone-centric smart travel experience for consumers.

     * Content, information, and services move with the user, creating a seamless, phone-centric continuity experience across devices in a vehicle, at house, or on the go.
     * The hardware resources, system capabilities, and service ecosystems of mobile phones and vehicles are integrated, giving the impression that all of the user's devices are functioning as one virtual super device, thereby refining the smart travel experience.

#### Open Capability

HiCar leverages the distributed virtual bus technology, distributed virtualization capabilities, as well as app and service sharing and virtualization technology to build an open platform solution. HiCar provides open capabilities through the HiCar SDK for vehicle hardware manufacturers to quickly integrate HiCar. Figure 1 shows the logical architecture for vehicle hardware to integrate the HiCar SDK.

**Figure 1** Logical architecture for integrating the HiCar SDK  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230817210304.02917111826312512105654167444014:50001231000000:2800:F42B9561103DA584ADD444A73973681BC6D08DB4E5E6A6D2EBF95282C07DCCB6.png?needInitFileName=true?needInitFileName=true)

The HiCar SDK consists of the following parts:

     * **Application layer interfaces for HiCar integration (HiCar Client Interface)** : HiCar client interfaces at the application layer. For example, an HMI app can call this type of interface to implement HiCar-related human-computer interaction.
     * **HiCar distributed protocol components** : components that Huawei provides to vehicle manufacturers to implement functions such as data transmission and interaction control between head units and phones. They include a distributed device discovery and connection component (Nearby), a distributed device management component (DMSDP), a projection display component (HiSight), and a log processing component (HiViewLite).
     * **Adaptation layer interfaces for HiCar hardware and OS (Adapter Interface)** : Adapter interfaces for hardware and OS at the adaptation layer. Adapt these interfaces so that the HiCar distributed protocol components can use them properly.

#### Terms

Table 1 defines the terms that are associated with HiCar SDK integration.

**Table 1** Terms associated with HiCar SDK integration**No.** | Name | Definition  
---|---|---  
1 | HiCar SDK | Software development kit (SDK) provided for vehicle hardware manufacturers to integrate HiCar, which contains the following:
     * Library file (*.so) of the HiCar distributed protocol components, which will be pre-installed in the head unit's native operating system
     * Header file (**hicar.h**) for integrating into the HMI app
     * Demo file for reference  
2 | HMI app | A Linux program that is pre-installed in the native system of the head unit after the manufacturer integrates the HiCar SDK to support features such as HiCar connection and projection.  
3 | HiCar App | An app pre-installed on phones, used to display HiCar-supported apps on the head unit screen via projection, after a HiCar connection has been established between the two devices. The HiCar app is a bridge between phone apps and the head unit. For example, it notifies HiCar-compatible phone apps of the low fuel warning, vehicle driving status, and related information reported via the HiCar SDK.
