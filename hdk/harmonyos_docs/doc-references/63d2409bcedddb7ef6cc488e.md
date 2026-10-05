---
name: document/cn/doc-references/datagramchannel-0000001054439777
title: DatagramChannel
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/datagramchannel-0000001054439777
source: portal
---

# DatagramChannel

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.nio.channels.spi.AbstractInterruptibleChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractinterruptiblechannel-0000001054238497) |---|---[java.nio.channels.SelectableChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectablechannel-0000001054838446) |---|---|---[java.nio.channels.spi.AbstractSelectableChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractselectablechannel-0000001054678467) |---|---|---|---java.nio.channels.DatagramChannel
    
    public abstract class DatagramChannel
    extends [AbstractSelectableChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractselectablechannel-0000001054678467)
    implements [ByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytechannel-0000001054678457), [ScatteringByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/scatteringbytechannel-0000001054678490), [GatheringByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gatheringbytechannel-0000001054119817), [MulticastChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multicastchannel-0000001054439775)  
  
---  
A selectable channel for datagram-oriented sockets. 

A datagram channel is created by invoking one of the [open](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__open--) methods of this class. It is not possible to create a channel for an arbitrary, pre-existing datagram socket. A newly-created datagram channel is open but not connected. A datagram channel need not be connected in order for the [send](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__send-java_nio_ByteBuffer-java_net_SocketAddress-) and [receive](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__receive-java_nio_ByteBuffer-) methods to be used. A datagram channel may be connected, by invoking its [connect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__connect-java_net_SocketAddress-) method, in order to avoid the overhead of the security checks are otherwise performed as part of every send and receive operation. A datagram channel must be connected in order to use the [read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__read-java_nio_ByteBuffer-) and [write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__write-java_nio_ByteBuffer-) methods, since those methods do not accept or return socket addresses. 

Once connected, a datagram channel remains connected until it is disconnected or closed. Whether or not a datagram channel is connected may be determined by invoking its [isConnected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__isConnected--) method. 

Socket options are configured using the [setOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__setOption-java_net_SocketOption-T-) method. A datagram channel to an Internet Protocol socket supports the following options: 

Additional (implementation specific) options may also be supported. 

Datagram channels are safe for use by multiple concurrent threads. They support concurrent reading and writing, though at most one thread may be reading and at most one thread may be writing at any given time. 

**Since:**

1.4

#### Constructor Summary

Modifier | Constructor | Description  
---|---|---  
protected  | [DatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__DatagramChannel-java_nio_channels_spi_SelectorProvider-)​([SelectorProvider](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectorprovider-0000001054119756) provider) |  Initializes a new instance of this class.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
abstract [DatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777) | [bind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__bind-java_net_SocketAddress-)​([SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) local) |  Binds the channel's socket to a local address.   
abstract [DatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777) | [connect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__connect-java_net_SocketAddress-)​([SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) remote) |  Connects this channel's socket.   
abstract [DatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777) | [disconnect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__disconnect--)​() |  Disconnects this channel's socket.   
abstract [SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) | [getLocalAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__getLocalAddress--)​() |  Returns the socket address that this channel's socket is bound to.   
abstract [SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) | [getRemoteAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__getRemoteAddress--)​() |  Returns the remote address to which this channel's socket is connected.   
abstract boolean | [isConnected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__isConnected--)​() |  Tells whether or not this channel's socket is connected.   
static [DatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777) | [open](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__open--)​() |  Opens a datagram channel.   
static [DatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777) | [open](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__open-java_net_ProtocolFamily-)​([ProtocolFamily](https://developer.harmonyos.com/cn/docs/documentation/doc-references/protocolfamily-0000001054238473) family) |  Opens a datagram channel.   
abstract int | [read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__read-java_nio_ByteBuffer-)​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) dst) |  Reads a datagram from this channel.   
long | [read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__read-java_nio_ByteBuffer:A-)​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771)[] dsts) |  Reads a datagram from this channel.   
abstract long | [read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__read-java_nio_ByteBuffer:A-int-int-)​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771)[] dsts, int offset, int length) |  Reads a datagram from this channel.   
abstract [SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) | [receive](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__receive-java_nio_ByteBuffer-)​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) dst) |  Receives a datagram via this channel.   
abstract int | [send](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__send-java_nio_ByteBuffer-java_net_SocketAddress-)​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) src, [SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) target) |  Sends a datagram via this channel.   
abstract <T> [DatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777) | [setOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__setOption-java_net_SocketOption-T-)​([SocketOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketoption-0000001054838428)<T> name, T value) |  Sets the value of a socket option.   
abstract [DatagramSocket](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramsocket-0000001054678445) | [socket](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__socket--)​() |  Retrieves a datagram socket associated with this channel.   
int | [validOps](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__validOps--)​() |  Returns an operation set identifying this channel's supported operations.   
abstract int | [write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__write-java_nio_ByteBuffer-)​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) src) |  Writes a datagram to this channel.   
long | [write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__write-java_nio_ByteBuffer:A-)​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771)[] srcs) |  Writes a datagram to this channel.   
abstract long | [write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__write-java_nio_ByteBuffer:A-int-int-)​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771)[] srcs, int offset, int length) |  Writes a datagram to this channel.   
  
Methods inherited from class java.nio.channels.spi.[AbstractInterruptibleChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractinterruptiblechannel-0000001054238497)  
---  
[begin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractinterruptiblechannel-0000001054238497#ZH-CN_TOPIC_0000001054238497__begin--), [close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractinterruptiblechannel-0000001054238497#ZH-CN_TOPIC_0000001054238497__close--), [end](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractinterruptiblechannel-0000001054238497#ZH-CN_TOPIC_0000001054238497__end-boolean-), [isOpen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractinterruptiblechannel-0000001054238497#ZH-CN_TOPIC_0000001054238497__isOpen--)  
  
Methods inherited from class java.nio.channels.spi.[AbstractSelectableChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractselectablechannel-0000001054678467)  
---  
[blockingLock](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractselectablechannel-0000001054678467#ZH-CN_TOPIC_0000001054678467__blockingLock--), [configureBlocking](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractselectablechannel-0000001054678467#ZH-CN_TOPIC_0000001054678467__configureBlocking-boolean-), [implCloseChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractselectablechannel-0000001054678467#ZH-CN_TOPIC_0000001054678467__implCloseChannel--), [implCloseSelectableChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractselectablechannel-0000001054678467#ZH-CN_TOPIC_0000001054678467__implCloseSelectableChannel--), [implConfigureBlocking](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractselectablechannel-0000001054678467#ZH-CN_TOPIC_0000001054678467__implConfigureBlocking-boolean-), [isBlocking](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractselectablechannel-0000001054678467#ZH-CN_TOPIC_0000001054678467__isBlocking--), [isRegistered](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractselectablechannel-0000001054678467#ZH-CN_TOPIC_0000001054678467__isRegistered--), [keyFor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractselectablechannel-0000001054678467#ZH-CN_TOPIC_0000001054678467__keyFor-java_nio_channels_Selector-), [provider](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractselectablechannel-0000001054678467#ZH-CN_TOPIC_0000001054678467__provider--), [register](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractselectablechannel-0000001054678467#ZH-CN_TOPIC_0000001054678467__register-java_nio_channels_Selector-int-java_lang_Object-)  
  
Methods inherited from interface java.nio.channels.[Channel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/channel-0000001054838442)  
---  
[isOpen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/channel-0000001054838442#ZH-CN_TOPIC_0000001054838442__isOpen--)  
  
Methods inherited from interface java.nio.channels.[MulticastChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multicastchannel-0000001054439775)  
---  
[close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multicastchannel-0000001054439775#ZH-CN_TOPIC_0000001054439775__close--), [join](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multicastchannel-0000001054439775#ZH-CN_TOPIC_0000001054439775__join-java_net_InetAddress-java_net_NetworkInterface-), [join](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multicastchannel-0000001054439775#ZH-CN_TOPIC_0000001054439775__join-java_net_InetAddress-java_net_NetworkInterface-java_net_InetAddress-)  
  
Methods inherited from interface java.nio.channels.[NetworkChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/networkchannel-0000001054199762)  
---  
[getOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/networkchannel-0000001054199762#ZH-CN_TOPIC_0000001054199762__getOption-java_net_SocketOption-), [supportedOptions](https://developer.harmonyos.com/cn/docs/documentation/doc-references/networkchannel-0000001054199762#ZH-CN_TOPIC_0000001054199762__supportedOptions--)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from class java.nio.channels.[SelectableChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectablechannel-0000001054838446)  
---  
[register](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectablechannel-0000001054838446#ZH-CN_TOPIC_0000001054838446__register-java_nio_channels_Selector-int-)  
  
#### Constructor Detail

#### [h2]DatagramChannel

protected DatagramChannel​([SelectorProvider](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectorprovider-0000001054119756) provider)

Initializes a new instance of this class. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
provider  |  The provider that created this channel  
  
#### Method Detail

#### [h2]open

public static [DatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777) open​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Opens a datagram channel. 

The new channel is created by invoking the [openDatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectorprovider-0000001054119756#ZH-CN_TOPIC_0000001054119756__openDatagramChannel--) method of the system-wide default [SelectorProvider](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectorprovider-0000001054119756) object. The channel will not be connected. 

The [ProtocolFamily](https://developer.harmonyos.com/cn/docs/documentation/doc-references/protocolfamily-0000001054238473) of the channel's socket is platform (and possibly configuration) dependent and therefore unspecified. The [open](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__open-java_net_ProtocolFamily-) allows the protocol family to be selected when opening a datagram channel, and should be used to open datagram channels that are intended for Internet Protocol multicasting.

**Returns:**

A new datagram channel

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If an I/O error occurs  
  
#### [h2]open

public static [DatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777) open​([ProtocolFamily](https://developer.harmonyos.com/cn/docs/documentation/doc-references/protocolfamily-0000001054238473) family) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Opens a datagram channel. 

The family parameter is used to specify the [ProtocolFamily](https://developer.harmonyos.com/cn/docs/documentation/doc-references/protocolfamily-0000001054238473). If the datagram channel is to be used for IP multicasting then this should correspond to the address type of the multicast groups that this channel will join. 

The new channel is created by invoking the [openDatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectorprovider-0000001054119756#ZH-CN_TOPIC_0000001054119756__openDatagramChannel-java_net_ProtocolFamily-) method of the system-wide default [SelectorProvider](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectorprovider-0000001054119756) object. The channel will not be connected.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
family  |  The protocol family  
  
**Returns:**

A new datagram channel

**Throws:**

Throw Name | Throw Description  
---|---  
[UnsupportedOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedoperationexception-0000001054238453) |  If the specified protocol family is not supported. For example, suppose the parameter is specified as [StandardProtocolFamily.INET6](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardprotocolfamily-0000001054238481#ZH-CN_TOPIC_0000001054238481__INET6) but IPv6 is not enabled on the platform.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If an I/O error occurs  
  
**Since:**

1.7

#### [h2]validOps

public final int validOps​()

Returns an operation set identifying this channel's supported operations. 

Datagram channels support reading and writing, so this method returns ([SelectionKey#OP_READ](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectionkey-0000001054358480#ZH-CN_TOPIC_0000001054358480__OP_READ) | [SelectionKey#OP_WRITE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectionkey-0000001054358480#ZH-CN_TOPIC_0000001054358480__OP_WRITE)). 

**Specified by:**

[validOps](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectablechannel-0000001054838446#ZH-CN_TOPIC_0000001054838446__validOps--) in class [SelectableChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectablechannel-0000001054838446)

**Returns:**

The valid-operation set

#### [h2]bind

public abstract [DatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777) bind​([SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) local) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Description copied from interface: [NetworkChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/networkchannel-0000001054199762#ZH-CN_TOPIC_0000001054199762__bind-java_net_SocketAddress-)

Binds the channel's socket to a local address. 

This method is used to establish an association between the socket and a local address. Once an association is established then the socket remains bound until the channel is closed. If the local parameter has the value null then the socket will be bound to an address that is assigned automatically.

**Specified by:**

[bind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/networkchannel-0000001054199762#ZH-CN_TOPIC_0000001054199762__bind-java_net_SocketAddress-) in interface [NetworkChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/networkchannel-0000001054199762)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
local  |  The address to bind the socket, or null to bind the socket to an automatically assigned socket address  
  
**Returns:**

This channel

**Throws:**

Throw Name | Throw Description  
---|---  
[AlreadyBoundException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/alreadyboundexception-0000001054678494) |  If the socket is already bound  
[UnsupportedAddressTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedaddresstypeexception-0000001054199770) |  If the type of the given address is not supported  
[ClosedChannelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedchannelexception-0000001054838448) |  If the channel is closed  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If some other I/O error occurs  
[SecurityException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securityexception-0000001054678454) |  If a security manager has been installed and its [SecurityManager#checkListen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securitymanager-0000001054119775#ZH-CN_TOPIC_0000001054119775__checkListen-int-) method denies the operation  
  
**Since:**

1.7

**See Also:**

[NetworkChannel.getLocalAddress()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/networkchannel-0000001054199762#ZH-CN_TOPIC_0000001054199762__getLocalAddress--)

#### [h2]setOption

public abstract <T> [DatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777) setOption​([SocketOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketoption-0000001054838428)<T> name, T value) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Description copied from interface: [NetworkChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/networkchannel-0000001054199762#ZH-CN_TOPIC_0000001054199762__setOption-java_net_SocketOption-T-)

Sets the value of a socket option. 

**Specified by:**

[setOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/networkchannel-0000001054199762#ZH-CN_TOPIC_0000001054199762__setOption-java_net_SocketOption-T-) in interface [NetworkChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/networkchannel-0000001054199762)

**Type Parameters:**

Type Parameter Name | Type Parameter Description  
---|---  
T  |  The type of the socket option value  
  
**Parameters:**

Parameter Name | Parameter Description  
---|---  
name  |  The socket option  
value  |  The value of the socket option. A value of null may be a valid value for some socket options.  
  
**Returns:**

This channel

**Throws:**

Throw Name | Throw Description  
---|---  
[UnsupportedOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedoperationexception-0000001054238453) |  If the socket option is not supported by this channel  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  If the value is not a valid value for this socket option  
[ClosedChannelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedchannelexception-0000001054838448) |  If this channel is closed  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If an I/O error occurs  
  
**Since:**

1.7

**See Also:**

[StandardSocketOptions](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardsocketoptions-0000001054678449)

#### [h2]socket

public abstract [DatagramSocket](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramsocket-0000001054678445) socket​()

Retrieves a datagram socket associated with this channel. 

The returned object will not declare any public methods that are not declared in the [DatagramSocket](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramsocket-0000001054678445) class. 

**Returns:**

A datagram socket associated with this channel

#### [h2]isConnected

public abstract boolean isConnected​()

Tells whether or not this channel's socket is connected. 

**Returns:**

true if, and only if, this channel's socket is [open](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abstractinterruptiblechannel-0000001054238497#ZH-CN_TOPIC_0000001054238497__isOpen--) and connected

#### [h2]connect

public abstract [DatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777) connect​([SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) remote) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Connects this channel's socket. 

The channel's socket is configured so that it only receives datagrams from, and sends datagrams to, the given remote _peer_ address. Once connected, datagrams may not be received from or sent to any other address. A datagram socket remains connected until it is explicitly disconnected or until it is closed. 

This method performs exactly the same security checks as the [connect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramsocket-0000001054678445#ZH-CN_TOPIC_0000001054678445__connect-java_net_InetAddress-int-) method of the [DatagramSocket](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramsocket-0000001054678445) class. That is, if a security manager has been installed then this method verifies that its [checkAccept](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securitymanager-0000001054119775#ZH-CN_TOPIC_0000001054119775__checkAccept-java_lang_String-int-) and [checkConnect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securitymanager-0000001054119775#ZH-CN_TOPIC_0000001054119775__checkConnect-java_lang_String-int-) methods permit datagrams to be received from and sent to, respectively, the given remote address. 

This method may be invoked at any time. It will not have any effect on read or write operations that are already in progress at the moment that it is invoked. If this channel's socket is not bound then this method will first cause the socket to be bound to an address that is assigned automatically, as if invoking the [bind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__bind-java_net_SocketAddress-) method with a parameter of null. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
remote  |  The remote address to which this channel is to be connected  
  
**Returns:**

This datagram channel

**Throws:**

Throw Name | Throw Description  
---|---  
[ClosedChannelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedchannelexception-0000001054838448) |  If this channel is closed  
[AsynchronousCloseException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/asynchronouscloseexception-0000001054558495) |  If another thread closes this channel while the connect operation is in progress  
[ClosedByInterruptException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedbyinterruptexception-0000001054678463) |  If another thread interrupts the current thread while the connect operation is in progress, thereby closing the channel and setting the current thread's interrupt status  
[SecurityException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securityexception-0000001054678454) |  If a security manager has been installed and it does not permit access to the given remote address  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If some other I/O error occurs  
  
#### [h2]disconnect

public abstract [DatagramChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777) disconnect​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Disconnects this channel's socket. 

The channel's socket is configured so that it can receive datagrams from, and sends datagrams to, any remote address so long as the security manager, if installed, permits it. 

This method may be invoked at any time. It will not have any effect on read or write operations that are already in progress at the moment that it is invoked. 

If this channel's socket is not connected, or if the channel is closed, then invoking this method has no effect. 

**Returns:**

This datagram channel

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If some other I/O error occurs  
  
#### [h2]getRemoteAddress

public abstract [SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) getRemoteAddress​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Returns the remote address to which this channel's socket is connected. 

**Returns:**

The remote address; null if the channel's socket is not connected

**Throws:**

Throw Name | Throw Description  
---|---  
[ClosedChannelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedchannelexception-0000001054838448) |  If the channel is closed  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If an I/O error occurs  
  
**Since:**

1.7

#### [h2]receive

public abstract [SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) receive​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) dst) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Receives a datagram via this channel. 

If a datagram is immediately available, or if this channel is in blocking mode and one eventually becomes available, then the datagram is copied into the given byte buffer and its source address is returned. If this channel is in non-blocking mode and a datagram is not immediately available then this method immediately returns null. 

The datagram is transferred into the given byte buffer starting at its current position, as if by a regular [ReadableByteChannel#read(java.nio.ByteBuffer)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/readablebytechannel-0000001054518502#ZH-CN_TOPIC_0000001054518502__read-java_nio_ByteBuffer-) operation. If there are fewer bytes remaining in the buffer than are required to hold the datagram then the remainder of the datagram is silently discarded. 

This method performs exactly the same security checks as the [receive](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramsocket-0000001054678445#ZH-CN_TOPIC_0000001054678445__receive-java_net_DatagramPacket-) method of the [DatagramSocket](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramsocket-0000001054678445) class. That is, if the socket is not connected to a specific remote address and a security manager has been installed then for each datagram received this method verifies that the source's address and port number are permitted by the security manager's [checkAccept](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securitymanager-0000001054119775#ZH-CN_TOPIC_0000001054119775__checkAccept-java_lang_String-int-) method. The overhead of this security check can be avoided by first connecting the socket via the [connect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__connect-java_net_SocketAddress-) method. 

This method may be invoked at any time. If another thread has already initiated a read operation upon this channel, however, then an invocation of this method will block until the first operation is complete. If this channel's socket is not bound then this method will first cause the socket to be bound to an address that is assigned automatically, as if invoking the [bind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__bind-java_net_SocketAddress-) method with a parameter of null. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
dst  |  The buffer into which the datagram is to be transferred  
  
**Returns:**

The datagram's source address, or null if this channel is in non-blocking mode and no datagram was immediately available

**Throws:**

Throw Name | Throw Description  
---|---  
[ClosedChannelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedchannelexception-0000001054838448) |  If this channel is closed  
[AsynchronousCloseException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/asynchronouscloseexception-0000001054558495) |  If another thread closes this channel while the read operation is in progress  
[ClosedByInterruptException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedbyinterruptexception-0000001054678463) |  If another thread interrupts the current thread while the read operation is in progress, thereby closing the channel and setting the current thread's interrupt status  
[SecurityException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securityexception-0000001054678454) |  If a security manager has been installed and it does not permit datagrams to be accepted from the datagram's sender  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If some other I/O error occurs  
  
#### [h2]send

public abstract int send​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) src, [SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) target) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Sends a datagram via this channel. 

If this channel is in non-blocking mode and there is sufficient room in the underlying output buffer, or if this channel is in blocking mode and sufficient room becomes available, then the remaining bytes in the given buffer are transmitted as a single datagram to the given target address. 

The datagram is transferred from the byte buffer as if by a regular [WritableByteChannel#write(java.nio.ByteBuffer)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/writablebytechannel-0000001054558491#ZH-CN_TOPIC_0000001054558491__write-java_nio_ByteBuffer-) operation. 

This method performs exactly the same security checks as the [send](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramsocket-0000001054678445#ZH-CN_TOPIC_0000001054678445__send-java_net_DatagramPacket-) method of the [DatagramSocket](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramsocket-0000001054678445) class. That is, if the socket is not connected to a specific remote address and a security manager has been installed then for each datagram sent this method verifies that the target address and port number are permitted by the security manager's [checkConnect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securitymanager-0000001054119775#ZH-CN_TOPIC_0000001054119775__checkConnect-java_lang_String-int-) method. The overhead of this security check can be avoided by first connecting the socket via the [connect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__connect-java_net_SocketAddress-) method. 

This method may be invoked at any time. If another thread has already initiated a write operation upon this channel, however, then an invocation of this method will block until the first operation is complete. If this channel's socket is not bound then this method will first cause the socket to be bound to an address that is assigned automatically, as if by invoking the [bind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagramchannel-0000001054439777#ZH-CN_TOPIC_0000001054439777__bind-java_net_SocketAddress-) method with a parameter of null. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
src  |  The buffer containing the datagram to be sent  
target  |  The address to which the datagram is to be sent  
  
**Returns:**

The number of bytes sent, which will be either the number of bytes that were remaining in the source buffer when this method was invoked or, if this channel is non-blocking, may be zero if there was insufficient room for the datagram in the underlying output buffer

**Throws:**

Throw Name | Throw Description  
---|---  
[ClosedChannelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedchannelexception-0000001054838448) |  If this channel is closed  
[AsynchronousCloseException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/asynchronouscloseexception-0000001054558495) |  If another thread closes this channel while the read operation is in progress  
[ClosedByInterruptException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedbyinterruptexception-0000001054678463) |  If another thread interrupts the current thread while the read operation is in progress, thereby closing the channel and setting the current thread's interrupt status  
[SecurityException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securityexception-0000001054678454) |  If a security manager has been installed and it does not permit datagrams to be sent to the given address  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If some other I/O error occurs  
  
#### [h2]read

public abstract int read​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) dst) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Reads a datagram from this channel. 

This method may only be invoked if this channel's socket is connected, and it only accepts datagrams from the socket's peer. If there are more bytes in the datagram than remain in the given buffer then the remainder of the datagram is silently discarded. Otherwise this method behaves exactly as specified in the [ReadableByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/readablebytechannel-0000001054518502) interface. 

**Specified by:**

[read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/readablebytechannel-0000001054518502#ZH-CN_TOPIC_0000001054518502__read-java_nio_ByteBuffer-) in interface [ReadableByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/readablebytechannel-0000001054518502)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
dst  |  The buffer into which bytes are to be transferred  
  
**Returns:**

The number of bytes read, possibly zero, or -1 if the channel has reached end-of-stream

**Throws:**

Throw Name | Throw Description  
---|---  
[NotYetConnectedException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notyetconnectedexception-0000001054838450) |  If this channel's socket is not connected  
[ClosedChannelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedchannelexception-0000001054838448) |  If this channel is closed  
[AsynchronousCloseException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/asynchronouscloseexception-0000001054558495) |  If another thread closes this channel while the read operation is in progress  
[ClosedByInterruptException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedbyinterruptexception-0000001054678463) |  If another thread interrupts the current thread while the read operation is in progress, thereby closing the channel and setting the current thread's interrupt status  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If some other I/O error occurs  
  
#### [h2]read

public abstract long read​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771)[] dsts, int offset, int length) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Reads a datagram from this channel. 

This method may only be invoked if this channel's socket is connected, and it only accepts datagrams from the socket's peer. If there are more bytes in the datagram than remain in the given buffers then the remainder of the datagram is silently discarded. Otherwise this method behaves exactly as specified in the [ScatteringByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/scatteringbytechannel-0000001054678490) interface. 

**Specified by:**

[read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/scatteringbytechannel-0000001054678490#ZH-CN_TOPIC_0000001054678490__read-java_nio_ByteBuffer:A-int-int-) in interface [ScatteringByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/scatteringbytechannel-0000001054678490)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
dsts  |  The buffers into which bytes are to be transferred  
offset  |  The offset within the buffer array of the first buffer into which bytes are to be transferred; must be non-negative and no larger than dsts.length  
length  |  The maximum number of buffers to be accessed; must be non-negative and no larger than dsts.length - offset  
  
**Returns:**

The number of bytes read, possibly zero, or -1 if the channel has reached end-of-stream

**Throws:**

Throw Name | Throw Description  
---|---  
[NotYetConnectedException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notyetconnectedexception-0000001054838450) |  If this channel's socket is not connected  
[ClosedChannelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedchannelexception-0000001054838448) |  If this channel is closed  
[AsynchronousCloseException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/asynchronouscloseexception-0000001054558495) |  If another thread closes this channel while the read operation is in progress  
[ClosedByInterruptException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedbyinterruptexception-0000001054678463) |  If another thread interrupts the current thread while the read operation is in progress, thereby closing the channel and setting the current thread's interrupt status  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If some other I/O error occurs  
  
#### [h2]read

public final long read​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771)[] dsts) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Reads a datagram from this channel. 

This method may only be invoked if this channel's socket is connected, and it only accepts datagrams from the socket's peer. If there are more bytes in the datagram than remain in the given buffers then the remainder of the datagram is silently discarded. Otherwise this method behaves exactly as specified in the [ScatteringByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/scatteringbytechannel-0000001054678490) interface. 

**Specified by:**

[read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/scatteringbytechannel-0000001054678490#ZH-CN_TOPIC_0000001054678490__read-java_nio_ByteBuffer:A-) in interface [ScatteringByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/scatteringbytechannel-0000001054678490)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
dsts  |  The buffers into which bytes are to be transferred  
  
**Returns:**

The number of bytes read, possibly zero, or -1 if the channel has reached end-of-stream

**Throws:**

Throw Name | Throw Description  
---|---  
[NotYetConnectedException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notyetconnectedexception-0000001054838450) |  If this channel's socket is not connected  
[ClosedChannelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedchannelexception-0000001054838448) |  If this channel is closed  
[AsynchronousCloseException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/asynchronouscloseexception-0000001054558495) |  If another thread closes this channel while the read operation is in progress  
[ClosedByInterruptException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedbyinterruptexception-0000001054678463) |  If another thread interrupts the current thread while the read operation is in progress, thereby closing the channel and setting the current thread's interrupt status  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If some other I/O error occurs  
  
#### [h2]write

public abstract int write​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) src) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Writes a datagram to this channel. 

This method may only be invoked if this channel's socket is connected, in which case it sends datagrams directly to the socket's peer. Otherwise it behaves exactly as specified in the [WritableByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/writablebytechannel-0000001054558491) interface. 

**Specified by:**

[write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/writablebytechannel-0000001054558491#ZH-CN_TOPIC_0000001054558491__write-java_nio_ByteBuffer-) in interface [WritableByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/writablebytechannel-0000001054558491)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
src  |  The buffer from which bytes are to be retrieved  
  
**Returns:**

The number of bytes written, possibly zero

**Throws:**

Throw Name | Throw Description  
---|---  
[NotYetConnectedException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notyetconnectedexception-0000001054838450) |  If this channel's socket is not connected  
[ClosedChannelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedchannelexception-0000001054838448) |  If this channel is closed  
[AsynchronousCloseException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/asynchronouscloseexception-0000001054558495) |  If another thread closes this channel while the write operation is in progress  
[ClosedByInterruptException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedbyinterruptexception-0000001054678463) |  If another thread interrupts the current thread while the write operation is in progress, thereby closing the channel and setting the current thread's interrupt status  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If some other I/O error occurs  
  
#### [h2]write

public abstract long write​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771)[] srcs, int offset, int length) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Writes a datagram to this channel. 

This method may only be invoked if this channel's socket is connected, in which case it sends datagrams directly to the socket's peer. Otherwise it behaves exactly as specified in the [GatheringByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gatheringbytechannel-0000001054119817) interface. 

**Specified by:**

[write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gatheringbytechannel-0000001054119817#ZH-CN_TOPIC_0000001054119817__write-java_nio_ByteBuffer:A-int-int-) in interface [GatheringByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gatheringbytechannel-0000001054119817)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
srcs  |  The buffers from which bytes are to be retrieved  
offset  |  The offset within the buffer array of the first buffer from which bytes are to be retrieved; must be non-negative and no larger than srcs.length  
length  |  The maximum number of buffers to be accessed; must be non-negative and no larger than srcs.length - offset  
  
**Returns:**

The number of bytes sent, which will be either the number of bytes that were remaining in the source buffer when this method was invoked or, if this channel is non-blocking, may be zero if there was insufficient room for the datagram in the underlying output buffer

**Throws:**

Throw Name | Throw Description  
---|---  
[NotYetConnectedException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notyetconnectedexception-0000001054838450) |  If this channel's socket is not connected  
[ClosedChannelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedchannelexception-0000001054838448) |  If this channel is closed  
[AsynchronousCloseException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/asynchronouscloseexception-0000001054558495) |  If another thread closes this channel while the write operation is in progress  
[ClosedByInterruptException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedbyinterruptexception-0000001054678463) |  If another thread interrupts the current thread while the write operation is in progress, thereby closing the channel and setting the current thread's interrupt status  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If some other I/O error occurs  
  
#### [h2]write

public final long write​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771)[] srcs) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Writes a datagram to this channel. 

This method may only be invoked if this channel's socket is connected, in which case it sends datagrams directly to the socket's peer. Otherwise it behaves exactly as specified in the [GatheringByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gatheringbytechannel-0000001054119817) interface. 

**Specified by:**

[write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gatheringbytechannel-0000001054119817#ZH-CN_TOPIC_0000001054119817__write-java_nio_ByteBuffer:A-) in interface [GatheringByteChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gatheringbytechannel-0000001054119817)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
srcs  |  The buffers from which bytes are to be retrieved  
  
**Returns:**

The number of bytes sent, which will be either the number of bytes that were remaining in the source buffer when this method was invoked or, if this channel is non-blocking, may be zero if there was insufficient room for the datagram in the underlying output buffer

**Throws:**

Throw Name | Throw Description  
---|---  
[NotYetConnectedException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/notyetconnectedexception-0000001054838450) |  If this channel's socket is not connected  
[ClosedChannelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedchannelexception-0000001054838448) |  If this channel is closed  
[AsynchronousCloseException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/asynchronouscloseexception-0000001054558495) |  If another thread closes this channel while the write operation is in progress  
[ClosedByInterruptException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedbyinterruptexception-0000001054678463) |  If another thread interrupts the current thread while the write operation is in progress, thereby closing the channel and setting the current thread's interrupt status  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If some other I/O error occurs  
  
#### [h2]getLocalAddress

public abstract [SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) getLocalAddress​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Returns the socket address that this channel's socket is bound to. 

Where the channel is [bound](https://developer.harmonyos.com/cn/docs/documentation/doc-references/networkchannel-0000001054199762#ZH-CN_TOPIC_0000001054199762__bind-java_net_SocketAddress-) to an Internet Protocol socket address then the return value from this method is of type [InetSocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetsocketaddress-0000001054678478). 

If there is a security manager set, its checkConnect method is called with the local address and -1 as its arguments to see if the operation is allowed. If the operation is not allowed, a SocketAddress representing the [loopback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetaddress-0000001054518490#ZH-CN_TOPIC_0000001054518490__getLoopbackAddress--) address and the local port of the channel's socket is returned.

**Specified by:**

[getLocalAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/networkchannel-0000001054199762#ZH-CN_TOPIC_0000001054199762__getLocalAddress--) in interface [NetworkChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/networkchannel-0000001054199762)

**Returns:**

The SocketAddress that the socket is bound to, or the SocketAddress representing the loopback address if denied by the security manager, or null if the channel's socket is not bound

**Throws:**

Throw Name | Throw Description  
---|---  
[ClosedChannelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closedchannelexception-0000001054838448) |  If the channel is closed  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If an I/O error occurs
