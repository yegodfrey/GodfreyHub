---
name: document/cn/doc-references/datagrampacket-0000001054238475
title: DatagramPacket
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/datagrampacket-0000001054238475
source: portal
---

# DatagramPacket  
  
[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---java.net.DatagramPacket
    
    public final class DatagramPacket
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
This class represents a datagram packet. 

Datagram packets are used to implement a connectionless packet delivery service. Each message is routed from one machine to another based solely on information contained within that packet. Multiple packets sent from one machine to another might be routed differently, and might arrive in any order. Packet delivery is not guaranteed.

**Since:**

JDK1.0

#### Constructor Summary

Constructor | Description  
---|---  
[DatagramPacket](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__DatagramPacket-byte:A-int-)​(byte[] buf, int length) |  Constructs a DatagramPacket for receiving packets of length length.   
[DatagramPacket](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__DatagramPacket-byte:A-int-int-)​(byte[] buf, int offset, int length) |  Constructs a DatagramPacket for receiving packets of length length, specifying an offset into the buffer.   
[DatagramPacket](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__DatagramPacket-byte:A-int-int-java_net_InetAddress-int-)​(byte[] buf, int offset, int length, [InetAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetaddress-0000001054518490) address, int port) |  Constructs a datagram packet for sending packets of length length with offset ioffsetto the specified port number on the specified host.   
[DatagramPacket](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__DatagramPacket-byte:A-int-int-java_net_SocketAddress-)​(byte[] buf, int offset, int length, [SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) address) |  Constructs a datagram packet for sending packets of length length with offset ioffsetto the specified port number on the specified host.   
[DatagramPacket](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__DatagramPacket-byte:A-int-java_net_InetAddress-int-)​(byte[] buf, int length, [InetAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetaddress-0000001054518490) address, int port) |  Constructs a datagram packet for sending packets of length length to the specified port number on the specified host.   
[DatagramPacket](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__DatagramPacket-byte:A-int-java_net_SocketAddress-)​(byte[] buf, int length, [SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) address) |  Constructs a datagram packet for sending packets of length length to the specified port number on the specified host.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[InetAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetaddress-0000001054518490) | [getAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getAddress--)​() |  Returns the IP address of the machine to which this datagram is being sent or from which the datagram was received.   
byte[] | [getData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getData--)​() |  Returns the data buffer.   
int | [getLength](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getLength--)​() |  Returns the length of the data to be sent or the length of the data received.   
int | [getOffset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getOffset--)​() |  Returns the offset of the data to be sent or the offset of the data received.   
int | [getPort](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getPort--)​() |  Returns the port number on the remote host to which this datagram is being sent or from which the datagram was received.   
[SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) | [getSocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getSocketAddress--)​() |  Gets the SocketAddress (usually IP address + port number) of the remote host that this packet is being sent to or is coming from.   
void | [setAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__setAddress-java_net_InetAddress-)​([InetAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetaddress-0000001054518490) iaddr) |  Sets the IP address of the machine to which this datagram is being sent.   
void | [setData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__setData-byte:A-)​(byte[] buf) |  Set the data buffer for this packet.   
void | [setData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__setData-byte:A-int-int-)​(byte[] buf, int offset, int length) |  Set the data buffer for this packet.   
void | [setLength](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__setLength-int-)​(int length) |  Set the length for this packet.   
void | [setPort](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__setPort-int-)​(int iport) |  Sets the port number on the remote host to which this datagram is being sent.   
void | [setSocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__setSocketAddress-java_net_SocketAddress-)​([SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) address) |  Sets the SocketAddress (usually IP address + port number) of the remote host to which this datagram is being sent.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]DatagramPacket

public DatagramPacket​(byte[] buf, int offset, int length)

Constructs a DatagramPacket for receiving packets of length length, specifying an offset into the buffer. 

The length argument must be less than or equal to buf.length.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
buf  |  buffer for holding the incoming datagram.  
offset  |  the offset for the buffer  
length  |  the number of bytes to read.  
  
**Since:**

1.2

#### [h2]DatagramPacket

public DatagramPacket​(byte[] buf, int length)

Constructs a DatagramPacket for receiving packets of length length. 

The length argument must be less than or equal to buf.length.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
buf  |  buffer for holding the incoming datagram.  
length  |  the number of bytes to read.  
  
#### [h2]DatagramPacket

public DatagramPacket​(byte[] buf, int offset, int length, [InetAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetaddress-0000001054518490) address, int port)

Constructs a datagram packet for sending packets of length length with offset ioffsetto the specified port number on the specified host. The length argument must be less than or equal to buf.length. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
buf  |  the packet data.  
offset  |  the packet data offset.  
length  |  the packet data length.  
address  |  the destination address.  
port  |  the destination port number.  
  
**Since:**

1.2

**See Also:**

[InetAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetaddress-0000001054518490)

#### [h2]DatagramPacket

public DatagramPacket​(byte[] buf, int offset, int length, [SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) address)

Constructs a datagram packet for sending packets of length length with offset ioffsetto the specified port number on the specified host. The length argument must be less than or equal to buf.length. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
buf  |  the packet data.  
offset  |  the packet data offset.  
length  |  the packet data length.  
address  |  the destination socket address.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if address type is not supported  
  
**Since:**

1.4

**See Also:**

[InetAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetaddress-0000001054518490)

#### [h2]DatagramPacket

public DatagramPacket​(byte[] buf, int length, [InetAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetaddress-0000001054518490) address, int port)

Constructs a datagram packet for sending packets of length length to the specified port number on the specified host. The length argument must be less than or equal to buf.length. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
buf  |  the packet data.  
length  |  the packet length.  
address  |  the destination address.  
port  |  the destination port number.  
  
**See Also:**

[InetAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetaddress-0000001054518490)

#### [h2]DatagramPacket

public DatagramPacket​(byte[] buf, int length, [SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) address)

Constructs a datagram packet for sending packets of length length to the specified port number on the specified host. The length argument must be less than or equal to buf.length. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
buf  |  the packet data.  
length  |  the packet length.  
address  |  the destination address.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if address type is not supported  
  
**Since:**

1.4

**See Also:**

[InetAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetaddress-0000001054518490)

#### Method Detail

#### [h2]getAddress

public [InetAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetaddress-0000001054518490) getAddress​()

Returns the IP address of the machine to which this datagram is being sent or from which the datagram was received. 

**Returns:**

the IP address of the machine to which this datagram is being sent or from which the datagram was received.

**See Also:**

[InetAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetaddress-0000001054518490), [setAddress(java.net.InetAddress)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__setAddress-java_net_InetAddress-)

#### [h2]getPort

public int getPort​()

Returns the port number on the remote host to which this datagram is being sent or from which the datagram was received. 

**Returns:**

the port number on the remote host to which this datagram is being sent or from which the datagram was received.

**See Also:**

[setPort(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__setPort-int-)

#### [h2]getData

public byte[] getData​()

Returns the data buffer. The data received or the data to be sent starts from the offset in the buffer, and runs for length long. 

**Returns:**

the buffer used to receive or send data

**See Also:**

[setData(byte[], int, int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__setData-byte:A-int-int-)

#### [h2]getOffset

public int getOffset​()

Returns the offset of the data to be sent or the offset of the data received. 

**Returns:**

the offset of the data to be sent or the offset of the data received.

**Since:**

1.2

#### [h2]getLength

public int getLength​()

Returns the length of the data to be sent or the length of the data received. 

**Returns:**

the length of the data to be sent or the length of the data received.

**See Also:**

[setLength(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__setLength-int-)

#### [h2]setData

public void setData​(byte[] buf, int offset, int length)

Set the data buffer for this packet. This sets the data, length and offset of the packet. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
buf  |  the buffer to set for this packet  
offset  |  the offset into the data  
length  |  the length of the data and/or the length of the buffer used to receive data  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the argument is null  
  
**Since:**

1.2

**See Also:**

[getData()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getData--), [getOffset()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getOffset--), [getLength()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getLength--)

#### [h2]setAddress

public void setAddress​([InetAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inetaddress-0000001054518490) iaddr)

Sets the IP address of the machine to which this datagram is being sent. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
iaddr  |  the InetAddress  
  
**Since:**

JDK1.1

**See Also:**

[getAddress()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getAddress--)

#### [h2]setPort

public void setPort​(int iport)

Sets the port number on the remote host to which this datagram is being sent. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
iport  |  the port number  
  
**Since:**

JDK1.1

**See Also:**

[getPort()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getPort--)

#### [h2]setSocketAddress

public void setSocketAddress​([SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) address)

Sets the SocketAddress (usually IP address + port number) of the remote host to which this datagram is being sent. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
address  |  the SocketAddress  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if address is null or is a SocketAddress subclass not supported by this socket  
  
**Since:**

1.4

**See Also:**

[getSocketAddress()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getSocketAddress--)

#### [h2]getSocketAddress

public [SocketAddress](https://developer.harmonyos.com/cn/docs/documentation/doc-references/socketaddress-0000001054358459) getSocketAddress​()

Gets the SocketAddress (usually IP address + port number) of the remote host that this packet is being sent to or is coming from. 

**Returns:**

the SocketAddress

**Since:**

1.4

**See Also:**

[setSocketAddress(java.net.SocketAddress)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__setSocketAddress-java_net_SocketAddress-)

#### [h2]setData

public void setData​(byte[] buf)

Set the data buffer for this packet. With the offset of this DatagramPacket set to 0, and the length set to the length of buf. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
buf  |  the buffer to set for this packet.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the argument is null.  
  
**Since:**

JDK1.1

**See Also:**

[getLength()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getLength--), [getData()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getData--)

#### [h2]setLength

public void setLength​(int length)

Set the length for this packet. The length of the packet is the number of bytes from the packet's data buffer that will be sent, or the number of bytes of the packet's data buffer that will be used for receiving data. The length must be lesser or equal to the offset plus the length of the packet's buffer. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
length  |  the length to set for this packet.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the length is negative of if the length is greater than the packet's data buffer length.  
  
**Since:**

JDK1.1

**See Also:**

[getLength()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__getLength--), [setData(byte[], int, int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datagrampacket-0000001054238475#ZH-CN_TOPIC_0000001054238475__setData-byte:A-int-int-)
