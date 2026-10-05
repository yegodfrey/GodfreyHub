---
name: document/cn/doc-references/overview-0000001054679002
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/overview-0000001054679002
source: portal
---

# Overview  
  
Provides common basic system utilities. 

This package provides the following basic system utilities for you to improve service development efficiency: 

    * [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018), [Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001), and [PacMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pacmap-0000001054440291), related to data serialization for communication between processes;
    * [Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009), related to URI parsing;
    * [Pair](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pair-0000001054200278), [LightweightMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lightweightmap-0000001054678973), [LightweightSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lightweightset-0000001054838958), [PlainArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/plainarray-0000001054358985), [PlainBooleanArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/plainbooleanarray-0000001054559007), [PlainIntArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/plainintarray-0000001054239005), and [LongPlainArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longplainarray-0000001054358992),related to data containers.
    * [Ashmem](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ashmem-0000001059908851), provides methods related to the Ashmem, including creating, closing, mapping, and unmapping the Ashmem, reading data from and writing data into the Ashmem, obtaining the Ashmem size, and setting protection for the Ashmem.

**Since:**

1

#### Interface Summary

Interface | Description  
---|---  
[FileWatcher.EventHandler](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filewatcher_eventhandler-0000001054559003) | Provides a handler for processing file events.  
[IOutput](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioutput-0000001071163612) | Defines a unified data output interface for ohos.  
[Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001) | Writes objects of a class into and restores them from a [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) during inter-process communication (IPC).  
[Sequenceable.Producer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable_producer-0000001054678971)<T> | Creates a Sequenceable instance from a [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018).  
  
#### Class Summary

Class | Description  
---|---  
[Ashmem](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ashmem-0000001059908851) | Provides methods related to the anonymous shared memory (Ashmem), including creating, closing, mapping, and unmapping the Ashmem, reading data from and writing data into the Ashmem, obtaining the Ashmem size, and setting protection for the Ashmem.  
[BasePacMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basepacmap-0000001054358990) | Stores and reads data of basic types.  
[CapabilityConstants](https://developer.harmonyos.com/cn/docs/documentation/doc-references/capabilityconstants-0000001054120331) | As of release 5, replaced by SystemCapability  
[CommonPattern](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commonpattern-0000001060388858) | Provides methods for obtaining regular expressions used to verify common patterns.  
[ConditionHelper](https://developer.harmonyos.com/cn/docs/documentation/doc-references/conditionhelper-0000001054120260) | A helper class to use the Condition class built in the java.util.concurrent.locks package without processing Lock and java.lang.InterruptedException exceptions.  
[Dimension](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dimension-0000001054440289) | An immutable class used to describe the height and width of a Dimension object.  
[FileWatcher](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filewatcher-0000001054200276) | Provides the capability of monitoring status changes of a specified file directory.  
[FloatDimension](https://developer.harmonyos.com/cn/docs/documentation/doc-references/floatdimension-0000001054519016) | An immutable class used to describe the height and width of a floating-point number.  
[HalfFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/halffloat-0000001054679004) | Encapsulates data of the half-precision floating-point format.  
[IntArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intarray-0000001054358983) | A collection class of int arrays.  
[IntentConstants](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentconstants-0000001054559005) | Defines the [Intent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intent-0000001054120019)-related constants used in the system, including the actions, entities, and flags contained in the intents passed to methods for starting an ability.  
[IntervalTimer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intervaltimer-0000001054239003) | Provides a timer for task execution that lasts for a while and repeats at regular intervals.  
[LightweightMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lightweightmap-0000001054678973)<K,V> | Provides a container that implements the [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858) interfaces.  
[LightweightSet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lightweightset-0000001054838958)<E> | Provides a container that implements the [Collection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563) and [Set](https://developer.harmonyos.com/cn/docs/documentation/doc-references/set-0000001054439873) interfaces.  
[LongPlainArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longplainarray-0000001054358992)<E> | A basic collection class to store the data structures that use the primitive data type long as the key and any object as the value.  
[LruBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lrubuffer-0000001054120333)<K,V> | A cache class that uses the least recently used (LRU) algorithm to remove the least recently accessed values when the capacity is insufficient for storing new values.  
[ObjectAttribute](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectattribute-0000001054120262)<O,T> | An abstract class of object attributes.  
[PacMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pacmap-0000001054440291) | Provides Map objects that support Sequenceable operations and can be used to store and read key-value pairs in character string format.  
[Pair](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pair-0000001054200278)<F,S> | Provides a data container that saves any two objects as one object.  
[Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) | A data object used for inter-process communication (IPC).  
[PersistablePacMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/persistablepacmap-0000001054679006) | Extends the BasePacMap class and permanently stores data using the JSON string representation.  
[PlainArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/plainarray-0000001054358985)<E> | A basic collection class to store the data structures that use the primitive data type int as the key and any object as the value.  
[PlainBooleanArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/plainbooleanarray-0000001054559007) | A basic collection class to store the data structures that use the primitive data type int as the key and boolean as the value.  
[PlainIntArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/plainintarray-0000001054239005) | A basic collection class to store the data structures that use the primitive data type int as the key and value.  
[PlainLongArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/plainlongarray-0000001054678975) | A basic collection class to store the data structures that use the primitive data type int as the key and long as the value.  
[RationalNumber](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rationalnumber-0000001054838960) | An immutable class representing a rational number.  
[Scope](https://developer.harmonyos.com/cn/docs/documentation/doc-references/scope-0000001054358994)<T extends [Comparable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/comparable-0000001054558443)<? super T>> | Describes the range of valid values for a field.  
[SequenceUuid](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceuuid-0000001054120335) | Encapsulates a universally unique identifier (UUID) object, so that a SequenceUuid object can be converted to a [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) object and vice versa.  
[Stopwatch](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stopwatch-0000001054120264) | Provides the stopwatch function to log execution of subtasks split from a main task and uses [HiLog](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hilog-0000001054678857) to save the records in debug-level logs.  
  
#### Exception Summary

Exception | Description  
---|---  
[ParcelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcelexception-0000001054200280) | Describes an exception that may be thrown when operations are performed on [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) objects.
