---
name: document/cn/apiref/net-0000001055547972
title: NET
uri: https://developer.huawei.com/consumer/cn/doc/apiref/net-0000001055547972
source: portal
---

# NET

#### Overview

**Description:**

Provides functions and data structures related to network operations. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Files

File Name | Description  
---|---  
[inet.h](https://device.harmonyos.com/cn/docs/develop/apiref/inet_8h-0000001055069406) | Provides functions and data structures related to network operations.   
[ifaddrs.h](https://device.harmonyos.com/cn/docs/develop/apiref/ifaddrs_8h-0000001055189445) | Provides functions and data structures related to network operations.   
[if.h](https://device.harmonyos.com/cn/docs/develop/apiref/if_8h-0000001054909430) | Provides functions and data structures related to network operations. For example, you can use the functions to send and receive network data, manage network addresses, and convert bytes.   
[netdb.h](https://device.harmonyos.com/cn/docs/develop/apiref/netdb_8h-0000001054909432) | Provides functions and data structures related to network operations. For example, you can use the functions to send and receive network data, manage network addresses, and convert bytes.   
[ether.h](https://device.harmonyos.com/cn/docs/develop/apiref/ether_8h-0000001054829483) | Provides functions and data structures related to network operations. For example, you can use the functions to send and receive network data, manage network addresses, and convert bytes.   
[ethernet.h](https://device.harmonyos.com/cn/docs/develop/apiref/ethernet_8h-0000001058195023) | Declares the structures related to an Ethernet address.   
[in.h](https://device.harmonyos.com/cn/docs/develop/apiref/in_8h-0000001057626605) | Declares the data structures and macros related to network operations.   
[resolv.h](https://device.harmonyos.com/cn/docs/develop/apiref/resolv_8h-0000001055308037) | Provides functions and data structures related to network operations. For example, you can use the functions to send and receive network data, manage network addresses, and convert bytes.   
[socket.h](https://device.harmonyos.com/cn/docs/develop/apiref/socket_8h-0000001055387988) | Declares functions and data structures related to network sockets.   
  
#### [h2]Data Structures

Data Structure Name | Description  
---|---  
[ifaddrs](https://device.harmonyos.com/cn/docs/develop/apiref/ifaddrs-0000001054479609) | Defines the network interface information.   
[if_nameindex](https://device.harmonyos.com/cn/docs/develop/apiref/if__nameindex-0000001054879578) | Defines the network adapter information.   
[hostent](https://device.harmonyos.com/cn/docs/develop/apiref/hostent-0000001055678138) | Describes the host name and address information.   
[protoent](https://device.harmonyos.com/cn/docs/develop/apiref/protoent-0000001058556880) | Describes the protocol database information.   
[ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636) | Defines the information about a 48-bit Ethernet address.   
[in_addr](https://device.harmonyos.com/cn/docs/develop/apiref/in__addr-0000001059194624) | Describes the network address information.   
[sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) | Describes the socket address information.   
  
#### [h2]Macros

Macro Name and Value | Description  
---|---  
__h_addr h_addr_list[0] | Defines the first address in **h_addr_list** for compatibility.   
__ETH_ALEN 6 | Defines the length of an Ethernet address.   
__SHUT_RD 0 | Disables reading data from a socket.   
__SHUT_WR 1 | Disables writing data to a socket.   
__SHUT_RDWR 2 | Disables reading data from and writing data to a socket.   
__PF_INET 2 | Defines the IPv4 internet protocol family.   
__PF_INET6 10 | Defines the IPv6 internet protocol family.   
__AF_INET[PF_INET](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga3f5da0b5be27fe31ec7cc11bfa8d1a25) | Defines the IPv4 internet address.   
__AF_INET6[PF_INET6](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga323f2649198fc7e64b19881869265618) | Defines the IPv6 internet address.   
__SOCK_STREAM 1 | Defines stream sockets.   
__SOCK_DGRAM 2 | Defines datagram sockets.   
__SOCK_RAW 3 | Defines raw sockets.   
__MSG_DONTWAIT 0x0040 | Defines the message type of a non-blocking operation.   
__MSG_NOSIGNAL 0x4000 | Defines the message type that does not generate a signal.   
__MSG_MORE 0x8000 | Defines the message type that more data is to be transferred.   
__SO_TYPE 3 | Obtains the socket type.   
__SO_DONTROUTE 5 | Prohibits messages from being sent via a gateway.   
__SO_BROADCAST 6 | Enables sending broadcast messages.   
__SO_SNDBUF 7 | Defines the size of the socket sending buffer, in bytes.   
__SO_RCVBUF 8 | Defines the size of the socket receiving buffer, in bytes.   
__SO_RCVTIMEO 66 | Defines the data receiving timeout interval.   
__SO_SNDTIMEO 67 | Defines the data sending timeout interval.   
__SO_BINDTODEVICE 25 | Binds the socket to a particular device.   
__SOL_SOCKET 1 | Defines the layers of a socket.   
  
#### [h2]Typedefs

Typedef Name | Description  
---|---  
in_addr_t  | ****typedef uint32_t Defines the data type of a network address.   
  
#### [h2]Functions

Function | Description  
---|---  
[htonl](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gac7eed08cd3b67f42bf56063157c8fd55) (uint32_t n) | uint32_t  Converts an integer from the host byte order to the network byte order.   
[htons](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gaabce0f8d453c3380e5b8a3d4947eb48c) (uint16_t n) | uint16_t  Converts a 16-bit integer from the host byte order to the network byte order.   
[ntohl](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gae68530d41f32dfef707f20b2bbaa5a44) (uint32_t n) | uint32_t  Converts an integer from the network byte order to the host byte order.   
[ntohs](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gaf8c87af507c59bd8fef112e5e35fe537) (uint16_t n) | uint16_t  Converts a 16-bit integer from the network byte order to the host byte order.   
[inet_addr](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga617651ec952a1f4c9cbddbf78f4b2e2e) (const char *p) | [in_addr_t](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga98b38134a62f24554da0ffcabde8062c) Converts a string from the IPv4 numbers-and-dots notation to the binary data in network byte order.   
[inet_network](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga6f478437c4810fce89cf0e77d94181f8) (const char *p) | [in_addr_t](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga98b38134a62f24554da0ffcabde8062c) Converts a string from the IPv4 numbers-and-dots notation to the binary data in host byte order.   
[inet_ntoa](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga08b9fff487151e004d9862cbf34a51ad) (struct [in_addr](https://device.harmonyos.com/cn/docs/develop/apiref/in__addr-0000001059194624) in) | char *  Converts a network address to a string in dotted-decimal format.   
[inet_pton](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga3f6e2b2dae98a409d77c6e3b0cebc04b) (int af, const char *__restrict s, void *__restrict a0) | int  Converts a string to a network address in the specified address family.   
[inet_ntop](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gae9a2182ca3255f16723adeea14665b55) (int af, const void *restrict a0, char *restrict s, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) l) | const char *  Converts a network address in the specified address family to a string.   
[inet_aton](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga26ee8e8e3949699a9c0e02ece272d370) (const char *s0, struct [in_addr](https://device.harmonyos.com/cn/docs/develop/apiref/in__addr-0000001059194624) *dest) | int  Converts an IP address from the string format to the 32-bit binary format in network byte order.   
[inet_makeaddr](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gab28732d1d740597f53fb65a09d97800c) ([in_addr_t](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga98b38134a62f24554da0ffcabde8062c) n, [in_addr_t](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga98b38134a62f24554da0ffcabde8062c) h) | struct [in_addr](https://device.harmonyos.com/cn/docs/develop/apiref/in__addr-0000001059194624) Converts the network number and host address to the network address.   
[inet_lnaof](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga1facb1380b7657ca9c72fb2633b60e3b) (struct [in_addr](https://device.harmonyos.com/cn/docs/develop/apiref/in__addr-0000001059194624) in) | [in_addr_t](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga98b38134a62f24554da0ffcabde8062c) Converts an IP address into a host ID in host byte order without network bits.   
[inet_netof](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga3a96aa4e6abe8e6959ea63fe338174dd) (struct [in_addr](https://device.harmonyos.com/cn/docs/develop/apiref/in__addr-0000001059194624) in) | [in_addr_t](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga98b38134a62f24554da0ffcabde8062c) Extracts the network number from the **[in_addr](https://device.harmonyos.com/cn/docs/develop/apiref/in__addr-0000001059194624)** structure and converts it to the host byte order.   
[freeifaddrs](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gabfdd6ca5469fe73ed88ba94bf8db57cc) (struct [ifaddrs](https://device.harmonyos.com/cn/docs/develop/apiref/ifaddrs-0000001054479609) *ifp) | void  Frees the network interface information obtained by **getifaddrs**.   
[if_freenameindex](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga7fe55c04ac2116fa501338fdcb279cc9) (struct [if_nameindex](https://device.harmonyos.com/cn/docs/develop/apiref/if__nameindex-0000001054879578) *idx) | void  Frees the network adapter information obtained by [if_nameindex](https://device.harmonyos.com/cn/docs/develop/apiref/if__nameindex-0000001054879578).   
[setprotoent](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga6a806414e4ae5bffb09e3a1d25d8db75) (int stayopen) | void  Opens a connection to the database and sets the next entry to the first entry.   
[getprotoent](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gaca0da70657afbc3e723990bb229deec3) (void) | struct [protoent](https://device.harmonyos.com/cn/docs/develop/apiref/protoent-0000001058556880) *  Retrieves the current protocol information.   
[getprotobyname](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga83ac8a97dd9d895cda658af3aa46fd55) (const char *name) | struct [protoent](https://device.harmonyos.com/cn/docs/develop/apiref/protoent-0000001058556880) *  Retrieves the information about a specified protocol.   
[getprotobynumber](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gac01697dc4a5b8e434522220913bd46ea) (int num) | struct [protoent](https://device.harmonyos.com/cn/docs/develop/apiref/protoent-0000001058556880) *  Retrieves the information about a protocol with the specified number.   
[herror](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gaa68de2578d4e0849f82d70b2f5b9af70) (const char *msg) | void  Prints error information.   
[hstrerror](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gac1752c48d9cf2ff87e29f29df6caa585) (int ecode) | const char *  Retrieves error information associated with the specified error number.   
[ether_ntoa](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga07e34e6ee9e272c4799780915d11677c) (const struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636) *p_a) | char *  Converts binary data in network byte order into a standard 48-bit Ethernet host address in the colon hexadecimal notation.   
[ether_aton](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gaab4c5b65c36fc0ea96a017daabc3770a) (const char *x) | struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636) *  Converts a standard 48-bit Ethernet host address in the colon hexadecimal notation into binary data in network byte order.   
[ether_ntoa_r](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga245e21de8e82756712a5182c2674c2ad) (const struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636) *p_a, char *x) | char *  Converts binary data in network byte order into a standard 48-bit Ethernet host address in the colon hexadecimal notation. This function is reentrant.   
[ether_aton_r](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gac0954821754bace30f674e61bb9f4e5f) (const char *x, struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636) *p_a) | struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636) *  Converts a standard 48-bit Ethernet host address in the colon hexadecimal notation into binary data in network byte order. This function is reentrant.   
[dn_comp](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga0438570faf515401bffa1a0d9c94a266) (const char *src, unsigned char *dst, int space, unsigned char **dnptrs, unsigned char **lastdnptr) | int  Compresses a network domain name.   
[dn_expand](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga91eb2055a64b28e4942a3a760d747243) (const unsigned char *base, const unsigned char *end, const unsigned char *src, char *dest, int space) | int  Expands a compressed domain name to a full domain name.   
[socket](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gaf4e0711877c45a41168ac677b0670ccd) (int domain, int type, int protocol) | int  Creates a socket and returns its descriptor.   
[shutdown](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga402425b8e1ceab40ac38a949babcf1aa) (int sockfd, int how) | int  Shuts down a socket.   
[bind](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga82199bcd81894331533a25f08e172480) (int sockfd, const struct [sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) *addr, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) addrlen) | int  Binds a local protocol address to a socket.   
[connect](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gacdfd99b6c59c833776412fbb0c539efb) (int sockfd, const struct [sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) *addr, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) addrlen) | int  Connects a socket to the specified address.   
[listen](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga5989c21d05cb17caba26cef496a7beea) (int sockfd, int backlog) | int  Listens for network connection requests on a socket.   
[accept](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga0807af5ac9dfc2a63624e8c3e0ae95ef) (int sockfd, struct [sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) *__restrict addr, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) *__restrict addrlen) | int  Accepts a connection request on a socket.   
[getsockname](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga62577da7dba23abb9c99cf5c2800ab24) (int fd, struct [sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) *restrict addr, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) *restrict len) | int  Retrieves the local address of the specified socket.   
[getpeername](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga13d77555ad4ed62dfef0ce32dd16755c) (int fd, struct [sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) *restrict addr, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) *restrict len) | int  Retrieves the peer address of the specified socket.   
[send](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga4053f5c8e26fd490ef54e2a0abf5c89f) (int fd, const void *buf, size_t len, int flags) | ssize_t  Sends data to another socket.   
[recv](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga5d049263cd0e3206b93530e68dfd7403) (int fd, void *buf, size_t len, int flags) | ssize_t  Receives data from another socket.   
[sendto](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga2587b27d2c6014c6b568a974655f41c5) (int fd, const void *buf, size_t len, int flags, const struct [sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) *addr, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) alen) | ssize_t  Sends data to another socket.   
[recvfrom](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga3089d3ee59e26bd4def3ef870175540e) (int fd, void *__restrict buf, size_t len, int flags, struct [sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) *__restrict addr, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) *__restrict alen) | ssize_t  Receives data from a specified socket.   
[sendmsg](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga70c97d3a1eab72cba4461d66a1778570) (int fd, const struct msghdr *msg, int flags) | ssize_t  Sends data to another socket.   
[recvmsg](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gaaba92f19a31c01b93e3391671a8b3dd5) (int fd, struct msghdr *msg, int flags) | ssize_t  Receives data from a specified socket.   
[getsockopt](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gacfcf672e255123afb75ed4d326257073) (int fd, int level, int optname, void *__restrict optval, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) *__restrict optlen) | int  Retrieves the socket options.   
[setsockopt](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga81983de50d79d797b2ac0f0d0f28953f) (int fd, int level, int optname, const void *optval, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) optlen) | int  Sets the socket options.   
  
#### Details

#### Function

#### [h2]accept()
    
    int accept (int sockfd, struct [sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) *__restrict addr, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) *__restrict addrlen )

**Description:**

Accepts a connection request on a socket. 

This function is used for waiting for a connection request from the client and for TCP only. 

**Parameters:**

Name | Description  
---|---  
sockfd | Indicates the socket descriptor.   
addr | Indicates the pointer to the socket address requiring for the connection.   
addrlen | Indicates the length of the address structure pointed to by **addr**.   
  
**Returns:**

Returns a valid socket if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Invalid input parameter   
EOPNOTSUPP  | The socket requiring for the connection is not of the **NETCONN_TCP** type.   
EWOULDBLOCK  | Failure to receive events in non-blocking mode.   
ENFILE  | Failure to creat a new socket.   
ECONNABORTED  | Failure to receive the remote information.   
ENOMEM  | Memory copy exception.   
  
#### [h2]bind()
    
    int bind (int sockfd, const struct [sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) * addr, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) addrlen )

**Description:**

Binds a local protocol address to a socket. 

This function is called by the server. 

**Parameters:**

Name | Description  
---|---  
sockfd | Indicates the socket descriptor.   
addr | Indicates the address to be bound to the socket.   
addrlen | Indicates the length of the address structure pointed to by **addr**.   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Invalid input parameter   
  
#### [h2]connect()
    
    int connect (int sockfd, const struct [sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) * addr, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) addrlen )

**Description:**

Connects a socket to the specified address. 

This function is for a connection request from the client and for TCP only. 

**Parameters:**

Name | Description  
---|---  
sockfd | Indicates the socket descriptor.   
addr | Indicates the pointer to the address to be connected.   
addrlen | Indicates the length of the address structure pointed to by **addr**.   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Invalid input parameter   
EBADF  | Invalid socket or socket status exception   
EIO  | Incorrect connection type obtained based on the socket descriptor   
ECONNREFUSED  | Restart due to connection failure   
ECONNABORTED  | Shut-down due to connection failure   
  
#### [h2]dn_comp()
    
    int dn_comp (const char * src, unsigned char * dst, int space, unsigned char ** dnptrs, unsigned char ** lastdnptr )

**Description:**

Compresses a network domain name. 

To reduce the size of DNS messages, domain names in the messages are compressed. For details about the compression scheme, see RFC 1035.

**Parameters:**

Name | Description  
---|---  
src | Indicates the pointer to the domain name to be compressed.   
dst | Indicates the pointer to the compressed domain name.   
space | Indicates the size of the compressed domain name.   
dnptrs | Indicates the pointer to an array of pointers to previously compressed domain names. If the value is **NULL** , the current domain name will not be compressed.   
lastdnptr | Indicates the pointer to the last element of the array. If the value is **NULL** , the array is not updated.   
  
**Returns:**

Returns the length of the compressed domain name if the operation is successful; returns **-1** otherwise. 

#### [h2]dn_expand()
    
    int dn_expand (const unsigned char * base, const unsigned char * end, const unsigned char * src, char * dest, int space )

**Description:**

Expands a compressed domain name to a full domain name. 

The compressed domain name is contained in a query or reply message.

**Parameters:**

Name | Description  
---|---  
base | Indicates the pointer to the start of the DNS message body.   
end | Indicates the pointer to the end of the DNS message body.   
src | Indicates the pointer to the compressed domain name.   
dest | Indicates the pointer to the expanded domain name.   
space | Indicates the memory size of the **dest** address.   
  
**Returns:**

Returns the length of the compressed domain name if the operation is successful; returns **-1** otherwise. 

#### [h2]ether_aton()
    
    struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636)* ether_aton (const char * x)

**Description:**

Converts a standard 48-bit Ethernet host address in the colon hexadecimal notation into binary data in network byte order. 

**Parameters:**

Name | Description  
---|---  
x | Indicates the pointer to the host address to be converted.   
  
**Returns:**

Returns the binary data if the operation is successful; returns **0** otherwise. 

#### [h2]ether_aton_r()
    
    struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636)* ether_aton_r (const char * x, struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636) * p_a )

**Description:**

Converts a standard 48-bit Ethernet host address in the colon hexadecimal notation into binary data in network byte order. This function is reentrant. 

This function is used in multitasking scenarios. 

**Parameters:**

Name | Description  
---|---  
x | Indicates the pointer to the host address to be converted.   
p_a | Indicates the pointer to the temporary buffer during conversion.   
  
**Returns:**

Returns the binary data represented by **[ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636)** if the operation is successful; returns **0** otherwise. 

#### [h2]ether_ntoa()
    
    char* ether_ntoa (const struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636) * p_a)

**Description:**

Converts binary data in network byte order into a standard 48-bit Ethernet host address in the colon hexadecimal notation. 

**Parameters:**

Name | Description  
---|---  
p_a | Indicates the pointer to the binary data to be converted.   
  
**Attention:**

Different from glibc (for example, 1:2:3:4:5:f), 0 is prefixed and letters are capitalized (for example, 01:02:03:04:05:0F). 

**Returns:**

Returns the host address if the operation is successful; returns **0** otherwise. 

#### [h2]ether_ntoa_r()
    
    char* ether_ntoa_r (const struct [ether_addr](https://device.harmonyos.com/cn/docs/develop/apiref/ether__addr-0000001059034636) * p_a, char * x )

**Description:**

Converts binary data in network byte order into a standard 48-bit Ethernet host address in the colon hexadecimal notation. This function is reentrant. 

This function is used in multitasking scenarios. 

**Parameters:**

Name | Description  
---|---  
p_a | Indicates the pointer to the binary data to be converted.   
x | Indicates the pointer to the temporary buffer during conversion.   
  
**Attention:**

Different from glibc (for example, 1:2:3:4:5:f), 0 is prefixed and letters are capitalized (for example, 01:02:03:04:05:0F). 

**Returns:**

Returns the host address if the operation is successful; returns **0** otherwise. 

#### [h2]freeifaddrs()
    
    void freeifaddrs (struct [ifaddrs](https://device.harmonyos.com/cn/docs/develop/apiref/ifaddrs-0000001054479609) * ifp)

**Description:**

Frees the network interface information obtained by **getifaddrs**. 

**Parameters:**

Name | Description  
---|---  
ifp | Indicates the pointer to the network interface information to be freed.   
  
#### [h2]getpeername()
    
    int getpeername (int fd, struct [sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) *restrict addr, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) *restrict len )

**Description:**

Retrieves the peer address of the specified socket. 

**Parameters:**

Name | Description  
---|---  
fd | Indicates the socket descriptor.   
addr | Indicates the pointer to the address to be retrieved.   
len | Indicates the pointer to the length of the address pointed to by **addr**.   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Invalid input parameter   
EBADF  | Invalid socket or socket status exception   
ENOMEM  | Memory copy exception   
  
#### [h2]getprotobyname()
    
    struct [protoent](https://device.harmonyos.com/cn/docs/develop/apiref/protoent-0000001058556880)* getprotobyname (const char * name)

**Description:**

Retrieves the information about a specified protocol. 

**Parameters:**

Name | Description  
---|---  
name | Indicates the pointer to the protocol name.   
  
**Attention:**

The **/etc/protocols** configuration file is not supported. Only the following built-in protocols are supported: ip/icmp/igmp/ggp/ipencap/st/tcp/egp/pup/udp/hmp/xns-idp/rdp/iso-tp4/xtp/ ddp/idpr-cmtp/ipv6/ipv6-route/ipv6-frag/idrp/rsvp/gre/esp/ah/skip/ipv6-icmp/ ipv6-nonxt/ipv6-opts/rspf/vmtp/ospf/ipip/encap/pim/raw (This protocol does not have the **aliases** attribute, that is, **aliases** is empty.) 

**Returns:**

Returns the pointer to the protocol information if the operation is successful; returns **NULL** otherwise. 

#### [h2]getprotobynumber()
    
    struct [protoent](https://device.harmonyos.com/cn/docs/develop/apiref/protoent-0000001058556880)* getprotobynumber (int num)

**Description:**

Retrieves the information about a protocol with the specified number. 

**Parameters:**

Name | Description  
---|---  
num | Indicates the protocol number.   
  
**Attention:**

The **/etc/protocols** configuration file is not supported. Only the following built-in protocols are supported: ip/icmp/igmp/ggp/ipencap/st/tcp/egp/pup/udp/hmp/xns-idp/rdp/iso-tp4/xtp/ ddp/idpr-cmtp/ipv6/ipv6-route/ipv6-frag/idrp/rsvp/gre/esp/ah/skip/ipv6-icmp/ ipv6-nonxt/ipv6-opts/rspf/vmtp/ospf/ipip/encap/pim/raw (This protocol does not have the **aliases** attribute, that is, **aliases** is empty.) 

**Returns:**

Returns the pointer to the protocol information if the operation is successful; returns **NULL** otherwise. 

#### [h2]getprotoent()
    
    struct [protoent](https://device.harmonyos.com/cn/docs/develop/apiref/protoent-0000001058556880)* getprotoent (void )

**Description:**

Retrieves the current protocol information. 

**Attention:**

The **/etc/protocols** configuration file is not supported. Only the following built-in protocols are supported: ip/icmp/igmp/ggp/ipencap/st/tcp/egp/pup/udp/hmp/xns-idp/rdp/iso-tp4/xtp/ ddp/idpr-cmtp/ipv6/ipv6-route/ipv6-frag/idrp/rsvp/gre/esp/ah/skip/ipv6-icmp/ ipv6-nonxt/ipv6-opts/rspf/vmtp/ospf/ipip/encap/pim/raw (This protocol does not have the **aliases** attribute, that is, **aliases** is empty.) 

**Returns:**

Returns the pointer to the protocol information if the operation is successful; returns **NULL** otherwise. 

#### [h2]getsockname()
    
    int getsockname (int fd, struct [sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) *restrict addr, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) *restrict len )

**Description:**

Retrieves the local address of the specified socket. 

**Parameters:**

Name | Description  
---|---  
fd | Indicates the socket descriptor.   
addr | Indicates the pointer to the address to be retrieved.   
len | Indicates the pointer to the length of the address pointed to by **addr**.   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Invalid input parameter   
EBADF  | Invalid socket or socket status exception   
ENOMEM  | Memory copy exception   
  
#### [h2]getsockopt()
    
    int getsockopt (int fd, int level, int optname, void *__restrict optval, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) *__restrict optlen )

**Description:**

Retrieves the socket options. 

**Parameters:**

Name | Description  
---|---  
fd | Indicates the socket descriptor.   
level | Indicates the protocol level at which the option resides. Only [SOL_SOCKET](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga92d045f6ee2f343d6b28830a9fec082e) is supported.   
optname | Indicates the socket options to be retrieved, which has the following values: 
     * **SO_BROADCAST** : permits sending and receiving broadcast messages. 
     * **SO_RCVTIMEO** : defines the data receiving timeout interval. 
     * **SO_RCVBUF** : defines the size of the socket receiving buffer, in bytes. 
     * **SO_TYPE** : defines the socket type. 
     * **SO_DONTROUTE** : prohibits messages from being sent via a gateway. 
     * **SO_BINDTODEVICE** : binds this socket to a particular device.   
optval | Indicates the pointer to the option data.   
optlen | Indicates the pointer to the size of the buffer pointed to by **optval**.   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Small **optlen**  
EBADF  | Invalid socket or socket status exception   
EFAULT  | The input parameter is a null pointer.   
ENOBUFS  | Retrieved length exception   
ENOMEM  | Memory copy exception   
  
#### [h2]herror()
    
    void herror (const char * msg)

**Description:**

Prints error information. 

**Parameters:**

Name | Description  
---|---  
msg | Indicates the pointer to the string to be printed together with the error information. This parameter can be null.   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Incorrect symbols or parameters   
EOVERFLOW  | Long item for printing   
  
#### [h2]hstrerror()
    
    const char* hstrerror (int ecode)

**Description:**

Retrieves error information associated with the specified error number. 

**Parameters:**

Name | Description  
---|---  
ecode | Indicates the error number.   
  
**Returns:**

Returns the string representing the error information. 

#### [h2]htonl()
    
    uint32_t htonl (uint32_t n)

**Description:**

Converts an integer from the host byte order to the network byte order. 

**Parameters:**

Name | Description  
---|---  
n | Indicates the integer in host byte order.   
  
**Returns:**

Returns the original data if the system is in big-endian mode; returns the converted data otherwise. 

#### [h2]htons()
    
    uint16_t htons (uint16_t n)

**Description:**

Converts a 16-bit integer from the host byte order to the network byte order. 

**Parameters:**

Name | Description  
---|---  
n | Indicates the integer in host byte order.   
  
**Returns:**

Returns the original data if the system is in big-endian mode; returns the converted data otherwise. 

#### [h2]if_freenameindex()
    
    void if_freenameindex (struct [if_nameindex](https://device.harmonyos.com/cn/docs/develop/apiref/if__nameindex-0000001054879578) * idx)

**Description:**

Frees the network adapter information obtained by [if_nameindex](https://device.harmonyos.com/cn/docs/develop/apiref/if__nameindex-0000001054879578). 

**Parameters:**

Name | Description  
---|---  
idx | Indicates the pointer to the network adapter to be freed.   
  
#### [h2]inet_addr()
    
    [in_addr_t](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga98b38134a62f24554da0ffcabde8062c) inet_addr (const char * p)

**Description:**

Converts a string from the IPv4 numbers-and-dots notation to the binary data in network byte order. 

**Parameters:**

Name | Description  
---|---  
p | Indicates the pointer to the string to be converted.   
  
**Returns:**

Returns the converted data if the operation is successful; returns **-1** otherwise. 

#### [h2]inet_aton()
    
    int inet_aton (const char * s0, struct [in_addr](https://device.harmonyos.com/cn/docs/develop/apiref/in__addr-0000001059194624) * dest )

**Description:**

Converts an IP address from the string format to the 32-bit binary format in network byte order. 

**Parameters:**

Name | Description  
---|---  
s0 | Indicates the pointer to the IP address to be converted.   
dest | Indicates the pointer to the structure for conversion.   
  
**Returns:**

Returns **1** if the operation is successful; returns **0** otherwise. 

#### [h2]inet_lnaof()
    
    [in_addr_t](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga98b38134a62f24554da0ffcabde8062c) inet_lnaof (struct [in_addr](https://device.harmonyos.com/cn/docs/develop/apiref/in__addr-0000001059194624) in)

**Description:**

Converts an IP address into a host ID in host byte order without network bits. 

**Parameters:**

Name | Description  
---|---  
in | Indicates the network address structure.   
  
**Returns:**

Returns the converted host address. 

#### [h2]inet_makeaddr()
    
    struct [in_addr](https://device.harmonyos.com/cn/docs/develop/apiref/in__addr-0000001059194624) inet_makeaddr ([in_addr_t](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga98b38134a62f24554da0ffcabde8062c) n, [in_addr_t](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga98b38134a62f24554da0ffcabde8062c) h )

**Description:**

Converts the network number and host address to the network address. 

**Parameters:**

Name | Description  
---|---  
n | Indicates the network number.   
h | Indicates the host address.   
  
**Returns:**

Returns the converted network address. 

#### [h2]inet_netof()
    
    [in_addr_t](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga98b38134a62f24554da0ffcabde8062c) inet_netof (struct [in_addr](https://device.harmonyos.com/cn/docs/develop/apiref/in__addr-0000001059194624) in)

**Description:**

Extracts the network number from the **[in_addr](https://device.harmonyos.com/cn/docs/develop/apiref/in__addr-0000001059194624)** structure and converts it to the host byte order. 

**Parameters:**

Name | Description  
---|---  
in | Indicates the network address structure.   
  
**Returns:**

Returns the converted network number. 

#### [h2]inet_network()
    
    [in_addr_t](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga98b38134a62f24554da0ffcabde8062c) inet_network (const char * p)

**Description:**

Converts a string from the IPv4 numbers-and-dots notation to the binary data in host byte order. 

**Parameters:**

Name | Description  
---|---  
p | Indicates the pointer to the string to be converted.   
  
**Returns:**

Returns the converted data if the operation is successful; returns **-1** otherwise. 

#### [h2]inet_ntoa()
    
    char* inet_ntoa (struct [in_addr](https://device.harmonyos.com/cn/docs/develop/apiref/in__addr-0000001059194624) in)

**Description:**

Converts a network address to a string in dotted-decimal format. 

**Parameters:**

Name | Description  
---|---  
in | Indicates the network address to be converted.   
  
**Returns:**

Returns the string. 

#### [h2]inet_ntop()
    
    const char* inet_ntop (int af, const void *restrict a0, char *restrict s, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) l )

**Description:**

Converts a network address in the specified address family to a string. 

**Parameters:**

Name | Description  
---|---  
af | Indicates the address family. Currently, only **AF_INET** and **AF_INET6** are supported.   
a0 | Indicates the pointer to the data to be converted.   
s | Indicates the pointer to the string to be converted.   
l | Indicates the size of the string to be converted.   
  
**Returns:**

Returns the converted string if the operation is successful; returns **NULL** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
ENOSPC  | Insufficient space for conversion   
EAFNOSUPPORT  | Unsupported address family   
  
#### [h2]inet_pton()
    
    int inet_pton (int af, const char *__restrict s, void *__restrict a0 )

**Description:**

Converts a string to a network address in the specified address family. 

**Parameters:**

Name | Description  
---|---  
af | Indicates the address family. Currently, only **AF_INET** and **AF_INET6** are supported.   
s | Indicates the pointer to the string to be converted.   
a0 | Indicates the pointer to the converted data.   
  
**Returns:**

Returns **1** if the operation is successful; returns **0** if the input address family is invalid; returns **-1** if the operation fails. The error codes are set as follows: 

errno  | Description   
---|---  
EAFNOSUPPORT  | Unsupported address family   
  
#### [h2]listen()
    
    int listen (int sockfd, int backlog )

**Description:**

Listens for network connection requests on a socket. 

This function is for TCP only. 

**Parameters:**

Name | Description  
---|---  
sockfd | Indicates the socket descriptor.   
backlog | Indicates the maximum length of the queue to accept incoming connection requests.   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Invalid input parameter   
EBADF  | Invalid socket or socket status exception   
EIO  | Incorrect connection type obtained based on the socket descriptor   
  
#### [h2]ntohl()
    
    uint32_t ntohl (uint32_t n)

**Description:**

Converts an integer from the network byte order to the host byte order. 

**Parameters:**

Name | Description  
---|---  
n | Indicates the integer in network byte order.   
  
**Returns:**

Returns the original data if the system is in big-endian mode; returns the converted data otherwise. 

#### [h2]ntohs()
    
    uint16_t ntohs (uint16_t n)

**Description:**

Converts a 16-bit integer from the network byte order to the host byte order. 

**Parameters:**

Name | Description  
---|---  
n | Indicates the integer in network byte order.   
  
**Returns:**

Returns the original data if the system is in big-endian mode; returns the converted data otherwise. 

#### [h2]recv()
    
    ssize_t recv (int fd, void * buf, size_t len, int flags )

**Description:**

Receives data from another socket. 

**Parameters:**

Name | Description  
---|---  
fd | Indicates the socket descriptor.   
buf | Indicates the pointer to a buffer for storing the data to be received.   
len | Indicates the length of the buffer pointed to by **buf**.   
flags | Indicates the socket flags. This parameter has the following values: 
     * **MSG_DONTWAIT** : enables the non-blocking operation. 
     * **MSG_MORE** : indicates that more messages are to be sent. 
     * **MSG_NOSIGNAL** : indicates that no signals are generated.   
  
**Returns:**

Returns the length of the received data if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Invalid input parameter   
EBADF  | Invalid socket or socket status exception   
ENOMEM  | Memory copy exception   
EOPNOTSUPP  | Unsupported message type   
ENOTCONN  | Socket not connected   
EWOULDBLOCK  | Blocking operation   
ENOTCONN  | Connection closed   
  
#### [h2]recvfrom()
    
    ssize_t recvfrom (int fd, void *__restrict buf, size_t len, int flags, struct [sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) *__restrict addr, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) *__restrict alen )

**Description:**

Receives data from a specified socket. 

**Parameters:**

Name | Description  
---|---  
fd | Indicates the socket descriptor.   
buf | Indicates the pointer to a buffer for storing the data to be received.   
len | Indicates the length of the buffer pointed to by **buf**.   
flags | Indicates the socket flags. This parameter has the following values: 
     * **MSG_DONTWAIT** : enables the non-blocking operation. 
     * **MSG_MORE** : indicates that more messages are to be sent. 
     * **MSG_NOSIGNAL** : indicates that no signals are generated.   
addr | Indicates the pointer to the source address.   
alen | Indicates the size of the source address.   
  
**Returns:**

Returns the length of the received data if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Invalid input parameter   
EBADF  | Invalid socket or socket status exception   
ENOMEM  | Memory copy exception   
EOPNOTSUPP  | Unsupported message type   
ENOTCONN  | Socket not connected   
ENOTCONN  | Connection closed   
  
#### [h2]recvmsg()
    
    ssize_t recvmsg (int fd, struct msghdr * msg, int flags )

**Description:**

Receives data from a specified socket. 

**Parameters:**

Name | Description  
---|---  
fd | Indicates the socket descriptor.   
msg | Indicates the pointer to the address to receive the message header.   
flags | Indicates the socket flags. This parameter has the following values: 
     * **MSG_DONTWAIT** : enables the non-blocking operation. 
     * **MSG_MORE** : indicates that more messages are to be sent. 
     * **MSG_NOSIGNAL** : indicates that no signals are generated.   
  
**Attention:**

This function does not allow sending ancillary data. Currently, the length of the array defined by **msg_iov** can only be **1**. 

**Returns:**

Returns the length of the received data if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Invalid input parameter   
EBADF  | Invalid socket or socket status exception   
EDESTADDRREQ  | Invalid connection   
ENOMEM  | Memory copy exception   
EIO  | Incorrect connection type obtained based on the socket descriptor   
  
#### [h2]send()
    
    ssize_t send (int fd, const void * buf, size_t len, int flags )

**Description:**

Sends data to another socket. 

**Parameters:**

Name | Description  
---|---  
fd | Indicates the socket descriptor.   
buf | Indicates the pointer to a buffer for storing the data to be sent.   
len | Indicates the length of the buffer pointed to by **buf**.   
flags | Indicates the socket flags. This parameter has the following values: 
     * **MSG_DONTWAIT** : enables the non-blocking operation. 
     * **MSG_MORE** : indicates that more messages are to be sent. 
     * **MSG_NOSIGNAL** : indicates that no signals are generated.   
  
**Returns:**

Returns the length of the sent data if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Invalid input parameter   
EBADF  | Invalid socket or socket status exception   
EDESTADDRREQ  | Invalid connection   
ENOMEM  | Memory copy exception   
EOPNOTSUPP  | Unsupported message type   
ENOTCONN  | Socket not connected   
EIO  | Incorrect connection type obtained based on the socket descriptor   
  
#### [h2]sendmsg()
    
    ssize_t sendmsg (int fd, const struct msghdr * msg, int flags )

**Description:**

Sends data to another socket. 

**Parameters:**

Name | Description  
---|---  
fd | Indicates the socket descriptor.   
msg | Indicates the pointer to the address of the message header to be sent.   
flags | Indicates the socket flags. This parameter has the following values: 
     * **MSG_DONTWAIT** : enables the non-blocking operation. 
     * **MSG_MORE** : indicates that more messages are to be sent. 
     * **MSG_NOSIGNAL** : indicates that no signals are generated.   
  
**Attention:**

This function does not support ancillary data. 

**Returns:**

Returns the length of the sent data if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Invalid input parameter   
EBADF  | Invalid socket or socket status exception   
EDESTADDRREQ  | Invalid connection   
ENOMEM  | Memory copy exception   
EIO  | Incorrect connection type obtained based on the socket descriptor   
EOPNOTSUPP  | Unsupported message type   
  
#### [h2]sendto()
    
    ssize_t sendto (int fd, const void * buf, size_t len, int flags, const struct [sockaddr](https://device.harmonyos.com/cn/docs/develop/apiref/sockaddr-0000001055518138) * addr, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) alen )

**Description:**

Sends data to another socket. 

**Parameters:**

Name | Description  
---|---  
fd | Indicates the socket descriptor.   
buf | Indicates the pointer to a buffer for storing the data to be sent.   
len | Indicates the length of the buffer pointed to by **buf**.   
flags | Indicates the socket flags. This parameter has the following values: 
     * **MSG_DONTWAIT** : enables the non-blocking operation. 
     * **MSG_MORE** : indicates that more messages are to be sent. 
     * **MSG_NOSIGNAL** : indicates that no signals are generated.   
addr | Indicates the pointer to the destination network address.   
alen | Indicates the length of the destination network address.   
  
**Returns:**

Returns the length of the sent data if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Invalid input parameter   
EBADF  | Invalid socket or socket status exception   
EDESTADDRREQ  | Invalid connection   
ENOMEM  | Memory copy exception   
EOPNOTSUPP  | Unsupported message type   
ENOTCONN  | Socket not connected   
EIO  | Incorrect connection type obtained based on the socket descriptor   
  
#### [h2]setprotoent()
    
    void setprotoent (int stayopen)

**Description:**

Opens a connection to the database and sets the next entry to the first entry. 

**Parameters:**

Name | Description  
---|---  
stayopen | Reserved for interface compatibility (not used currently).   
  
**Attention:**

The **stayopen** parameter does not take effect. It is equivalent to nonzero for [getprotoent](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gaca0da70657afbc3e723990bb229deec3) and zero for [getprotobyname](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga83ac8a97dd9d895cda658af3aa46fd55) and **getprotobynumbmer**. 

#### [h2]setsockopt()
    
    int setsockopt (int fd, int level, int optname, const void * optval, [socklen_t](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga531675af4e35aaa1cc9aeefa6cc2ccc4) optlen )

**Description:**

Sets the socket options. 

**Parameters:**

Name | Description  
---|---  
fd | Indicates the socket descriptor.   
level | Indicates the protocol level at which the option resides. Only [SOL_SOCKET](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga92d045f6ee2f343d6b28830a9fec082e) is supported.   
optname | Indicates the socket options to set, which has the following values: 
     * **SO_BROADCAST** : permits sending and receiving broadcast messages. 
     * **SO_RCVTIMEO** : defines the data receiving timeout interval. 
     * **SO_RCVBUF** : defines the size of the socket receiving buffer, in bytes. 
     * **SO_DONTROUTE** : prohibits messages from being sent via a gateway. 
     * **SO_BINDTODEVICE** : binds this socket to a particular device.   
optval | Indicates the pointer to the option data.   
optlen | Indicates the size of the buffer pointed to by **optval**.   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Small **optlen**  
EBADF  | Invalid socket or socket status exception   
EFAULT  | The input parameter is a null pointer.   
ENOBUFS  | Retrieved length exception   
ENOMEM  | Memory copy exception   
  
#### [h2]shutdown()
    
    int shutdown (int sockfd, int how )

**Description:**

Shuts down a socket. 

**Parameters:**

Name | Description  
---|---  
sockfd | Indicates the socket descriptor.   
how | Indicates how to shut down the socket. You can disable either receptions by [SHUT_RD](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gaf1c8cf84ac37451afaef3bde9976b6e1) or transmissions by [SHUT_WR](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gaddb0a758e6fafdd89f5b7120f84738eb), or both by [SHUT_RDWR](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga80c54d1399557c97a0c81a319d08e9db).   
  
**Returns:**

Returns **0** if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EINVAL  | Invalid input parameter   
ENOTCONN  | Socket not connected   
ENOMEM  | Memory copy exception   
EIO  | Incorrect connection type obtained based on the socket descriptor   
  
#### [h2]socket()
    
    int socket (int domain, int type, int protocol )

**Description:**

Creates a socket and returns its descriptor. 

**Parameters:**

Name | Description  
---|---  
domain | Indicates the socket family.   
type | Indicates the socket type.   
protocol | Indicates the socket protocol.   
  
**Attention:**

The domain can only be [AF_INET](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga9930604d0e32588eae76f43ca38e7826) or [AF_INET6](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__gaa03706b2738b9a58d4985dfbe99e1bac). The socket type can only be [SOCK_RAW](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga346f84e37c42f88e91e7304c3d77fde8), [SOCK_DGRAM](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga4db8b9a846c67404db0b6f014f9a9fdf), or [SOCK_STREAM](https://device.harmonyos.com/cn/docs/develop/apiref/net-0000001055547972#ZH-CN_TOPIC_0000001055547972__ga249394484f9410a2e3f8eba24657feb9). 

**Returns:**

Returns the descriptor for the new socket if the operation is successful; returns **-1** and sets **errno** to a value in the following table if the operation fails. 

errno  | Description   
---|---  
EAFNOSUPPORT  | Invalid socket domain   
ESOCKTNOSUPPORT  | Unsupported socket domain   
EPROTONOSUPPORT  | Unsupported protocol   
EINVAL  | Invalid input parameter   
ENOBUFS  | Connection setup error   
ENFILE  | File table addition exception 
