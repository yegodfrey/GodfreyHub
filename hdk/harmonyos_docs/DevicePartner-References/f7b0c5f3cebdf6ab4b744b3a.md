---
name: document/cn/DevicePartner-References/network-layer-interface-0000002613996497
title: 网络层接口适配
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-References/network-layer-interface-0000002613996497
source: portal
---

# 网络层接口适配

#### 获取本地IP
    
    
    /**
     * @brief 获取本地IP
     *
     * @param localIp [IN] 缓冲区, 为点分十进制格式 eg. 192.168.1.2
     * @param len [OUT] 存放IP的缓冲长度
     * @return 0表示成功, 其他表示失败
     */
    int HILINK_GetLocalIp(char *localIp, unsigned char len);

#### 获取本地广播地址
    
    
    /**
     * @brief 获取本地广播地址,用于app广播发现
     *
     * @param broadcastIp [IN] 缓冲区, 为点分十进制格式 eg. 192.168.1.255
     * @param len [OUT] 存放IP的缓冲长度
     * @return 0成功, 非0不支持app广播发现
     */
    int HILINK_GetLocalBroadcastIp(char *broadcastIp, unsigned char len);

#### 获取网络MAC地址
    
    
    /**
     * @brief 获取网络MAC地址 mac格式为{0xa1,0xb2,0xc3,0xd4,0xe5,0xf6}
     *
     * @param mac [IN] 存放MAC的缓冲区
     * @param len [OUT] 缓冲区长度, 为MAC_ADDRESS_LEN
     * @return 0表示成功, 其他表示失败
     */
    int HILINK_GetMacAddr(unsigned char *mac, unsigned char len);

#### 获取当前连接Wi-Fi的ssid
    
    
    /**
    *@brief获取当前连接Wi-Fi的ssid
    *
    *@paramssid[IN]存放ssid的缓冲区
    *@paramssidLen[OUT]缓冲区长度
    *@return0表示成功,其他表示失败
    */
    intHILINK_GetWiFiSsid(char*ssid,unsignedint*ssidLen);

#### 设置Wi-Fi的连接信息
    
    
    /**
     * @brief 设置Wi-Fi的连接信息
     *
     *        ssid和pwd为空表示清除WiFi信息, 设置的Wi-Fi信息需要持久化, 以确保设备重启后依然可以连接Wi-Fi
     *
     * @param ssid [OUT] 待连接Wi-Fi的ssid
     * @param ssidLen [OUT] ssid的长度
     * @param pwd [OUT] 待连接Wi-Fi的密码
     * @param pwdLen [OUT] Wi-Fi密码长度
     * @return 0表示成功, 其他表示失败
     * 注意: (1)ssid和pwd为空表示清除wifi信息
     *       (2)设置的wifi信息需要持久化，确保设备重启后依然可以连接wifi
     */
    int HILINK_SetWiFiInfo(const char *ssid, unsigned int ssidLen, const char *pwd, unsigned int pwdLen);

#### 重新启动WiFi模块
    
    
    /**
     * @brief 重新启动WiFi模块
     *
     *        当设备WiFi断开后, 此函数会被调用重启WiFi模块;
     *
     * @return 0表示成功, 其他表示失败
     */
    int HILINK_RestartWiFi(void);

#### 连接指定bssid的与配网ssid同名的Wi-Fi
    
    
    /**
     * @brief 连接指定bssid的与配网ssid同名的Wi-Fi
     *
     *        securityType来源于HILINK_GetAPScanResult扫描结果
     *        目标bssid来源于指定ssid扫描得到的列表
     *        接口通常在扫描指定ssid后调用, 用于设备切换到更好的Wi-Fi
     *
     * @param securityType [IN] 目标Wi-Fi的加密类型
     * @param bssid [IN] 目标Wi-Fi的bssid
     * @param bssidLen [IN] bssid的长度
     * @return 0表示成功, 其他表示失败
     */
    int HILINK_ConnectWiFiByBssid(int securityType, const unsigned char *bssid, unsigned int bssidLen);

#### 获取上一次连接WiFi失败原因
    
    
    /**
     * @brief 获取上一次连接WiFi失败原因
     *
     *        1、此接口由厂家实现, 当前在调用HILINK_ConnectWiFiByBssid接口后, 调用此接口获取连接失败原因;
     *        2、指定BSSID连接后将轮询调用此接口, 若连接动作未有结果, 函数返回-1, 直到连接动作有结果;
     *        3、如果WiFi连接成功, 出参result返回0;
     *
     * @param result [OUT] 存放连接WiFi失败原因的内存指针
     * @return 0表示成功, 其他表示失败
     */
    int HILINK_GetLastConnectResult(int *result);

#### 根据参数扫描周围AP信息
    
    
    /**
     * @brief 根据参数扫描周围AP信息
     * 此接口指定了BSSID、SSID以及频率相关的类型扫描, 目前只用了SSID方式
     *
     * @param param [IN] 扫描AP信息时指定的目标参数
     * @return 0表示成功, 其他表示失败
     */
    int HILINK_ScanAP(const HILINK_APScanParam *param);

#### 获取扫描周围AP信息的结果
    
    
    /**
     * @brief SDK调用HILINK_ScanAP后, 调用此函数获取扫描周围AP信息的结果
     * scanList中apList字段内存由外部申请, SDK进行释放
     *
     * @param scanList [OUT] 扫描得到的目标AP列表以及个数
     * @return 0表示成功, 1表示扫描未完成, 其他表示失败
     */
    int HILINK_GetAPScanResult(HILINK_APList *scanList);

#### 厂家实现网络优化相关功能函数
    
    
    /**
    *@brief厂家实现网络优化相关功能函数，通过此接口注册给SDK使用
    *
    *@paramcb[IN]当前SDK仅在鸿蒙系统实现以下接口，鸿蒙系统可直接注册使用，其它形态需自行实现：
    *HILINK_ConnectWiFiByBssid、HILINK_ScanAP、HILINK_GetAPScanResult、
    *HILINK_RestartWiFi、HILINK_GetLastConnectResult
    *以上接口只在部分芯片上验证通过，如果直接使用请自行验证，以保证功能正常。
    *getWifiRecoveryType需要厂商实现
    *@paramcbSize[IN]回调函数结构体的大小，即sizeof(WiFiRecoveryApi)
    *@warning使用此接口需配备特定SDK版本，否则启动后功能不生效
    */
    intHILINK_RegWiFiRecoveryCallback(constWiFiRecoveryApi*cb,unsignedintcbSize);

#### 设置WiFi自恢复时的相关参数
    
    
    /**
     * @brief 设置WiFi自恢复时的相关参数
     * @param scanTimes [IN] WiFi自恢复时扫描AP的最大次数
     * @param connectTimes [IN] WiFi自恢复时每个AP最大连接次数
     * @return 正常返回0，异常返回其他错误码
     */
    int HILINK_SetWiFiRecoveryTimesParam(unsigned int scanTimes, unsigned int connectTimes);

#### 设置差WiFi环境下心跳超时离线导致重连WiFi的阈值
    
    
    /**
     * @brief 设置差WiFi环境下心跳超时离线导致重连WiFi的阈值
     * @param hbLimit [IN] 心跳超时离线导致重连WiFi的阈值
     * @return 正常返回0，异常返回其他错误码
     */
    int HILINK_SetHeartbeatLimit(unsigned int hbLimit);

#### 断开并重连WiFi
    
    
    /**
     * @brief 断开并重连WiFi
     */
    void HILINK_ReconnectWiFi(void);

#### 触发连接WiFi
    
    
    /**
     * @brief 触发连接WiFi
     * @return 0表示成功, 其他表示失败
     */
    int HILINK_ConnectWiFi(void);

#### 获取网络状态
    
    
    /**
     * @brief 获取网络状态
     * @param state [OUT] 返回0表示网络断开或已连接但网卡未分配得ip, 返回1表示已连接且分配得ip
     * @return 0表示成功, 其他表示失败
     */
    int HILINK_GetNetworkState(int *state);

#### 获取当前连接的WiFi的 bssid
    
    
    /**
     * @brief 获取当前连接的WiFi的 bssid
     * @param bssid [IN] 存放bssid的缓冲区
     * @param bssidLen [OUT IN] 出参表示缓冲区长度, 入参表示WiFi bssid长度
     * @return 0表示成功, 其他表示失败
     */
    int HILINK_GetWiFiBssid(unsigned char *bssid, unsigned char *bssidLen);

#### 获取当前连接的WiFi信号强度
    
    
    /**
     * @brief 获取当前连接的WiFi信号强度, 单位db
     * @param rssi [OUT] 信号强度
     * @return 0表示成功, 其他表示失败
     */
    int HILINK_GetWiFiRssi(signed char *rssi);
