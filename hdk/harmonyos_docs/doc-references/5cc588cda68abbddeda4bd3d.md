---
name: document/cn/doc-references/hashtable-0000001054358573
title: Hashtable
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/hashtable-0000001054358573
source: portal
---

# Hashtable

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.util.Dictionary](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593)<K,V> |---|---java.util.Hashtable<K,V>
    
    public class Hashtable<K,V>
    extends [Dictionary](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593)<K,V>
    implements [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<K,V>, [Cloneable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cloneable-0000001054358421), [Serializable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/serializable-0000001054358416)  
  
---  
This class implements a hash table, which maps keys to values. Any non-null object can be used as a key or as a value. 

To successfully store and retrieve objects from a hashtable, the objects used as keys must implement the hashCode method and the equals method. 

An instance of Hashtable has two parameters that affect its performance: _initial capacity_ and _load factor_. The _capacity_ is the number of _buckets_ in the hash table, and the _initial capacity_ is simply the capacity at the time the hash table is created. Note that the hash table is _open_ : in the case of a "hash collision", a single bucket stores multiple entries, which must be searched sequentially. The _load factor_ is a measure of how full the hash table is allowed to get before its capacity is automatically increased. The initial capacity and load factor parameters are merely hints to the implementation. The exact details as to when and whether the rehash method is invoked are implementation-dependent.

Generally, the default load factor (.75) offers a good tradeoff between time and space costs. Higher values decrease the space overhead but increase the time cost to look up an entry (which is reflected in most Hashtable operations, including get and put).

The initial capacity controls a tradeoff between wasted space and the need for rehash operations, which are time-consuming. No rehash operations will _ever_ occur if the initial capacity is greater than the maximum number of entries the Hashtable will contain divided by its load factor. However, setting the initial capacity too high can waste space.

If many entries are to be made into a Hashtable, creating it with a sufficiently large capacity may allow the entries to be inserted more efficiently than letting it perform automatic rehashing as needed to grow the table. 

This example creates a hashtable of numbers. It uses the names of the numbers as keys: 
    
    Hashtable<String, Integer> numbers
         = new Hashtable<String, Integer>();
       numbers.put("one", 1);
       numbers.put("two", 2);
       numbers.put("three", 3);

To retrieve a number, use the following code: 
    
    Integer n = numbers.get("two");
       if (n != null) {
         System.out.println("two = " + n);
       }

The iterators returned by the iterator method of the collections returned by all of this class's "collection view methods" are fail-fast: if the Hashtable is structurally modified at any time after the iterator is created, in any way except through the iterator's own remove method, the iterator will throw a [ConcurrentModificationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/concurrentmodificationexception-0000001054558603). Thus, in the face of concurrent modification, the iterator fails quickly and cleanly, rather than risking arbitrary, non-deterministic behavior at an undetermined time in the future. The Enumerations returned by Hashtable's keys and elements methods are not fail-fast. 

Note that the fail-fast behavior of an iterator cannot be guaranteed as it is, generally speaking, impossible to make any hard guarantees in the presence of unsynchronized concurrent modification. Fail-fast iterators throw ConcurrentModificationException on a best-effort basis. Therefore, it would be wrong to write a program that depended on this exception for its correctness: _the fail-fast behavior of iterators should be used only to detect bugs._

As of the Java 2 platform v1.2, this class was retrofitted to implement the [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858) interface, making it a member of the [ Java Collections Framework](https://docs.oracle.com/javase/8/docs/technotes/guides/collections/index.html). Unlike the new collection implementations, Hashtable is synchronized. If a thread-safe implementation is not needed, it is recommended to use [HashMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashmap-0000001054518606) in place of Hashtable. If a thread-safe highly-concurrent implementation is desired, then it is recommended to use [ConcurrentHashMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/concurrenthashmap-0000001054838564) in place of Hashtable.

**Since:**

JDK1.0

**See Also:**

[Object.equals(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [Object.hashCode()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [rehash()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__rehash--), [Collection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563), [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858), [HashMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashmap-0000001054518606), [TreeMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/treemap-0000001054678569), 

#### Nested Class Summary

Nested classes/interfaces inherited from interface java.util.[Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)  
---  
[Map.Entry](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map_entry-0000001054518598)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map_entry-0000001054518598),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map_entry-0000001054518598)>  
  
#### Constructor Summary

Constructor | Description  
---|---  
[Hashtable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__Hashtable--)​() |  Constructs a new, empty hashtable with a default initial capacity (11) and load factor (0.75).   
[Hashtable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__Hashtable-int-)​(int initialCapacity) |  Constructs a new, empty hashtable with the specified initial capacity and default load factor (0.75).   
[Hashtable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__Hashtable-int-float-)​(int initialCapacity, float loadFactor) |  Constructs a new, empty hashtable with the specified initial capacity and the specified load factor.   
[Hashtable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__Hashtable-java_util_Map-)​([Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<? extends [K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? extends [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> t) |  Constructs a new hashtable with the same mappings as the given Map.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [clear](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__clear--)​() |  Clears this hashtable so that it contains no keys.   
[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) | [clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__clone--)​() |  Creates a shallow copy of this hashtable.   
[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) | [compute](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__compute-K-java_util_function_BiFunction-)​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [BiFunction](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bifunction-0000001054358612)<? super [K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? super [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? extends [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> remappingFunction) |  Attempts to compute a mapping for the specified key and its current mapped value (or null if there is no current mapping).   
[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) | [computeIfAbsent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__computeIfAbsent-K-java_util_function_Function-)​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [Function](https://developer.harmonyos.com/cn/docs/documentation/doc-references/function-0000001054119955)<? super [K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? extends [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> mappingFunction) |  If the specified key is not already associated with a value (or is mapped to null), attempts to compute its value using the given mapping function and enters it into this map unless null.   
[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) | [computeIfPresent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__computeIfPresent-K-java_util_function_BiFunction-)​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [BiFunction](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bifunction-0000001054358612)<? super [K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? super [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? extends [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> remappingFunction) |  If the value for the specified key is present and non-null, attempts to compute a new mapping given the key and its current mapped value.   
boolean | [contains](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__contains-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) value) |  Tests if some key maps into the specified value in this hashtable.   
boolean | [containsKey](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__containsKey-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) key) |  Tests if the specified object is a key in this hashtable.   
boolean | [containsValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__containsValue-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) value) |  Returns true if this hashtable maps one or more keys to this value.   
[Enumeration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enumeration-0000001054678553)<[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> | [elements](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__elements--)​() |  Returns an enumeration of the values in this hashtable.   
[Set](https://developer.harmonyos.com/cn/docs/documentation/doc-references/set-0000001054439873)<[Map.Entry](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map_entry-0000001054518598)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>> | [entrySet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__entrySet--)​() |  Returns a [Set](https://developer.harmonyos.com/cn/docs/documentation/doc-references/set-0000001054439873) view of the mappings contained in this map.   
boolean | [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__equals-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) o) |  Compares the specified Object with this Map for equality, as per the definition in the Map interface.   
void | [forEach](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__forEach-java_util_function_BiConsumer-)​([BiConsumer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/biconsumer-0000001054838578)<? super [K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? super [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> action) |  Performs the given action for each entry in this map until all entries have been processed or the action throws an exception.   
[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) | [get](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__get-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) key) |  Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.   
[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) | [getOrDefault](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__getOrDefault-java_lang_Object-V-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) key, [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) defaultValue) |  Returns the value to which the specified key is mapped, or defaultValue if this map contains no mapping for the key.   
int | [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__hashCode--)​() |  Returns the hash code value for this Map as per the definition in the Map interface.   
boolean | [isEmpty](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__isEmpty--)​() |  Tests if this hashtable maps no keys to values.   
[Enumeration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enumeration-0000001054678553)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> | [keys](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__keys--)​() |  Returns an enumeration of the keys in this hashtable.   
[Set](https://developer.harmonyos.com/cn/docs/documentation/doc-references/set-0000001054439873)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> | [keySet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__keySet--)​() |  Returns a [Set](https://developer.harmonyos.com/cn/docs/documentation/doc-references/set-0000001054439873) view of the keys contained in this map.   
[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) | [merge](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__merge-K-V-java_util_function_BiFunction-)​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) value, [BiFunction](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bifunction-0000001054358612)<? super [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? super [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? extends [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> remappingFunction) |  If the specified key is not already associated with a value or is associated with null, associates it with the given non-null value.   
[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) | [put](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__put-K-V-)​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) value) |  Maps the specified key to the specified value in this hashtable.   
void | [putAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__putAll-java_util_Map-)​([Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<? extends [K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? extends [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> t) |  Copies all of the mappings from the specified map to this hashtable.   
[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) | [putIfAbsent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__putIfAbsent-K-V-)​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) value) |  If the specified key is not already associated with a value (or is mapped to null) associates it with the given value and returns null, else returns the current value.   
protected void | [rehash](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__rehash--)​() |  Increases the capacity of and internally reorganizes this hashtable, in order to accommodate and access its entries more efficiently.   
[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) | [remove](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__remove-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) key) |  Removes the key (and its corresponding value) from this hashtable.   
boolean | [remove](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__remove-java_lang_Object-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) key, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) value) |  Removes the entry for the specified key only if it is currently mapped to the specified value.   
[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) | [replace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__replace-K-V-)​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) value) |  Replaces the entry for the specified key only if it is currently mapped to some value.   
boolean | [replace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__replace-K-V-V-)​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) oldValue, [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) newValue) |  Replaces the entry for the specified key only if currently mapped to the specified value.   
void | [replaceAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__replaceAll-java_util_function_BiFunction-)​([BiFunction](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bifunction-0000001054358612)<? super [K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? super [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? extends [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> function) |  Replaces each entry's value with the result of invoking the given function on that entry until all entries have been processed or the function throws an exception.   
int | [size](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__size--)​() |  Returns the number of keys in this hashtable.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__toString--)​() |  Returns a string representation of this Hashtable object in the form of a set of entries, enclosed in braces and separated by the ASCII characters ", " (comma and space).   
[Collection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563)<[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> | [values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__values--)​() |  Returns a [Collection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563) view of the values contained in this map.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]Hashtable

public Hashtable​(int initialCapacity, float loadFactor)

Constructs a new, empty hashtable with the specified initial capacity and the specified load factor. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
initialCapacity  |  the initial capacity of the hashtable.  
loadFactor  |  the load factor of the hashtable.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the initial capacity is less than zero, or if the load factor is nonpositive.  
  
#### [h2]Hashtable

public Hashtable​(int initialCapacity)

Constructs a new, empty hashtable with the specified initial capacity and default load factor (0.75). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
initialCapacity  |  the initial capacity of the hashtable.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the initial capacity is less than zero.  
  
#### [h2]Hashtable

public Hashtable​()

Constructs a new, empty hashtable with a default initial capacity (11) and load factor (0.75). 

#### [h2]Hashtable

public Hashtable​([Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<? extends [K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? extends [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> t)

Constructs a new hashtable with the same mappings as the given Map. The hashtable is created with an initial capacity sufficient to hold the mappings in the given Map and a default load factor (0.75). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
t  |  the map whose mappings are to be placed in this map.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the specified map is null.  
  
**Since:**

1.2

#### Method Detail

#### [h2]size

public int size​()

Returns the number of keys in this hashtable. 

**Specified by:**

[size](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__size--) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Specified by:**

[size](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593#ZH-CN_TOPIC_0000001054558593__size--) in class [Dictionary](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Returns:**

the number of keys in this hashtable.

#### [h2]isEmpty

public boolean isEmpty​()

Tests if this hashtable maps no keys to values. 

**Specified by:**

[isEmpty](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__isEmpty--) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Specified by:**

[isEmpty](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593#ZH-CN_TOPIC_0000001054558593__isEmpty--) in class [Dictionary](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Returns:**

true if this hashtable maps no keys to values; false otherwise.

#### [h2]keys

public [Enumeration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enumeration-0000001054678553)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> keys​()

Returns an enumeration of the keys in this hashtable. 

**Specified by:**

[keys](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593#ZH-CN_TOPIC_0000001054558593__keys--) in class [Dictionary](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Returns:**

an enumeration of the keys in this hashtable.

**See Also:**

[Enumeration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enumeration-0000001054678553), [elements()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__elements--), [keySet()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__keySet--), [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)

#### [h2]elements

public [Enumeration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enumeration-0000001054678553)<[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> elements​()

Returns an enumeration of the values in this hashtable. Use the Enumeration methods on the returned object to fetch the elements sequentially. 

**Specified by:**

[elements](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593#ZH-CN_TOPIC_0000001054558593__elements--) in class [Dictionary](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Returns:**

an enumeration of the values in this hashtable.

**See Also:**

[Enumeration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enumeration-0000001054678553), [keys()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__keys--), [values()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__values--), [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)

#### [h2]contains

public boolean contains​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) value)

Tests if some key maps into the specified value in this hashtable. This operation is more expensive than the [containsKey](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__containsKey-java_lang_Object-) method. 

Note that this method is identical in functionality to [containsValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__containsValue-java_lang_Object-), (which is part of the [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858) interface in the collections framework).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
value  |  a value to search for  
  
**Returns:**

true if and only if some key maps to the value argument in this hashtable as determined by the equals method; false otherwise.

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the value is null  
  
#### [h2]containsValue

public boolean containsValue​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) value)

Returns true if this hashtable maps one or more keys to this value. 

Note that this method is identical in functionality to [contains](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__contains-java_lang_Object-) (which predates the [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858) interface).

**Specified by:**

[containsValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__containsValue-java_lang_Object-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
value  |  value whose presence in this hashtable is to be tested  
  
**Returns:**

true if this map maps one or more keys to the specified value

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the value is null  
  
**Since:**

1.2

#### [h2]containsKey

public boolean containsKey​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) key)

Tests if the specified object is a key in this hashtable. 

**Specified by:**

[containsKey](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__containsKey-java_lang_Object-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  possible key  
  
**Returns:**

true if and only if the specified object is a key in this hashtable, as determined by the equals method; false otherwise.

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the key is null  
  
**See Also:**

[contains(Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__contains-java_lang_Object-)

#### [h2]get

public [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) get​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) key)

Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key. 

More formally, if this map contains a mapping from a key k to a value v such that (key.equals(k)), then this method returns v; otherwise it returns null. (There can be at most one such mapping.)

**Specified by:**

[get](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__get-java_lang_Object-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Specified by:**

[get](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593#ZH-CN_TOPIC_0000001054558593__get-java_lang_Object-) in class [Dictionary](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  the key whose associated value is to be returned  
  
**Returns:**

the value to which the specified key is mapped, or null if this map contains no mapping for the key

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the specified key is null  
  
**See Also:**

[put(Object, Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__put-K-V-)

#### [h2]rehash

protected void rehash​()

Increases the capacity of and internally reorganizes this hashtable, in order to accommodate and access its entries more efficiently. This method is called automatically when the number of keys in the hashtable exceeds this hashtable's capacity and load factor. 

#### [h2]put

public [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) put​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) value)

Maps the specified key to the specified value in this hashtable. Neither the key nor the value can be null. 

The value can be retrieved by calling the get method with a key that is equal to the original key.

**Specified by:**

[put](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__put-K-V-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Specified by:**

[put](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593#ZH-CN_TOPIC_0000001054558593__put-K-V-) in class [Dictionary](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  the hashtable key  
value  |  the value  
  
**Returns:**

the previous value of the specified key in this hashtable, or null if it did not have one

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the key or value is null  
  
**See Also:**

[Object.equals(Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [get(Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573#ZH-CN_TOPIC_0000001054358573__get-java_lang_Object-)

#### [h2]remove

public [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) remove​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) key)

Removes the key (and its corresponding value) from this hashtable. This method does nothing if the key is not in the hashtable. 

**Specified by:**

[remove](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__remove-java_lang_Object-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Specified by:**

[remove](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593#ZH-CN_TOPIC_0000001054558593__remove-java_lang_Object-) in class [Dictionary](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dictionary-0000001054558593)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  the key that needs to be removed  
  
**Returns:**

the value to which the key had been mapped in this hashtable, or null if the key did not have a mapping

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the key is null  
  
#### [h2]putAll

public void putAll​([Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<? extends [K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? extends [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> t)

Copies all of the mappings from the specified map to this hashtable. These mappings will replace any mappings that this hashtable had for any of the keys currently in the specified map. 

**Specified by:**

[putAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__putAll-java_util_Map-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
t  |  mappings to be stored in this map  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the specified map is null  
  
**Since:**

1.2

#### [h2]clear

public void clear​()

Clears this hashtable so that it contains no keys. 

**Specified by:**

[clear](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__clear--) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

#### [h2]clone

public [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) clone​()

Creates a shallow copy of this hashtable. All the structure of the hashtable itself is copied, but the keys and values are not cloned. This is a relatively expensive operation. 

**Overrides:**

[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

a clone of the hashtable

**See Also:**

[Cloneable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cloneable-0000001054358421)

#### [h2]toString

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​()

Returns a string representation of this Hashtable object in the form of a set of entries, enclosed in braces and separated by the ASCII characters ", " (comma and space). Each entry is rendered as the key, an equals sign =, and the associated element, where the toString method is used to convert the key and element to strings. 

**Overrides:**

[toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

a string representation of this hashtable

#### [h2]keySet

public [Set](https://developer.harmonyos.com/cn/docs/documentation/doc-references/set-0000001054439873)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> keySet​()

Returns a [Set](https://developer.harmonyos.com/cn/docs/documentation/doc-references/set-0000001054439873) view of the keys contained in this map. The set is backed by the map, so changes to the map are reflected in the set, and vice-versa. If the map is modified while an iteration over the set is in progress (except through the iterator's own remove operation), the results of the iteration are undefined. The set supports element removal, which removes the corresponding mapping from the map, via the Iterator.remove, Set.remove, removeAll, retainAll, and clear operations. It does not support the add or addAll operations. 

**Specified by:**

[keySet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__keySet--) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Returns:**

a set view of the keys contained in this map

**Since:**

1.2

#### [h2]entrySet

public [Set](https://developer.harmonyos.com/cn/docs/documentation/doc-references/set-0000001054439873)<[Map.Entry](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map_entry-0000001054518598)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>> entrySet​()

Returns a [Set](https://developer.harmonyos.com/cn/docs/documentation/doc-references/set-0000001054439873) view of the mappings contained in this map. The set is backed by the map, so changes to the map are reflected in the set, and vice-versa. If the map is modified while an iteration over the set is in progress (except through the iterator's own remove operation, or through the setValue operation on a map entry returned by the iterator) the results of the iteration are undefined. The set supports element removal, which removes the corresponding mapping from the map, via the Iterator.remove, Set.remove, removeAll, retainAll and clear operations. It does not support the add or addAll operations. 

**Specified by:**

[entrySet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__entrySet--) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Returns:**

a set view of the mappings contained in this map

**Since:**

1.2

#### [h2]values

public [Collection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563)<[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> values​()

Returns a [Collection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563) view of the values contained in this map. The collection is backed by the map, so changes to the map are reflected in the collection, and vice-versa. If the map is modified while an iteration over the collection is in progress (except through the iterator's own remove operation), the results of the iteration are undefined. The collection supports element removal, which removes the corresponding mapping from the map, via the Iterator.remove, Collection.remove, removeAll, retainAll and clear operations. It does not support the add or addAll operations. 

**Specified by:**

[values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__values--) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Returns:**

a collection view of the values contained in this map

**Since:**

1.2

#### [h2]equals

public boolean equals​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) o)

Compares the specified Object with this Map for equality, as per the definition in the Map interface. 

**Specified by:**

[equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__equals-java_lang_Object-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Overrides:**

[equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
o  |  object to be compared for equality with this hashtable  
  
**Returns:**

true if the specified Object is equal to this Map

**Since:**

1.2

**See Also:**

[Map.equals(Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__equals-java_lang_Object-)

#### [h2]hashCode

public int hashCode​()

Returns the hash code value for this Map as per the definition in the Map interface. 

**Specified by:**

[hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__hashCode--) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Overrides:**

[hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

a hash code value for this object.

**Since:**

1.2

**See Also:**

[Map.hashCode()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__hashCode--)

#### [h2]getOrDefault

public [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) getOrDefault​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) key, [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) defaultValue)

Description copied from interface: [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__getOrDefault-java_lang_Object-V-)

Returns the value to which the specified key is mapped, or defaultValue if this map contains no mapping for the key. 

**Specified by:**

[getOrDefault](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__getOrDefault-java_lang_Object-V-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  the key whose associated value is to be returned  
defaultValue  |  the default mapping of the key  
  
**Returns:**

the value to which the specified key is mapped, or defaultValue if this map contains no mapping for the key

#### [h2]forEach

public void forEach​([BiConsumer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/biconsumer-0000001054838578)<? super [K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? super [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> action)

Description copied from interface: [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__forEach-java_util_function_BiConsumer-)

Performs the given action for each entry in this map until all entries have been processed or the action throws an exception. Unless otherwise specified by the implementing class, actions are performed in the order of entry set iteration (if an iteration order is specified.) Exceptions thrown by the action are relayed to the caller. 

**Specified by:**

[forEach](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__forEach-java_util_function_BiConsumer-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
action  |  The action to be performed for each entry  
  
#### [h2]replaceAll

public void replaceAll​([BiFunction](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bifunction-0000001054358612)<? super [K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? super [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? extends [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> function)

Description copied from interface: [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__replaceAll-java_util_function_BiFunction-)

Replaces each entry's value with the result of invoking the given function on that entry until all entries have been processed or the function throws an exception. Exceptions thrown by the function are relayed to the caller. 

**Specified by:**

[replaceAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__replaceAll-java_util_function_BiFunction-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
function  |  the function to apply to each entry  
  
#### [h2]putIfAbsent

public [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) putIfAbsent​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) value)

Description copied from interface: [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__putIfAbsent-K-V-)

If the specified key is not already associated with a value (or is mapped to null) associates it with the given value and returns null, else returns the current value. 

**Specified by:**

[putIfAbsent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__putIfAbsent-K-V-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  key with which the specified value is to be associated  
value  |  value to be associated with the specified key  
  
**Returns:**

the previous value associated with the specified key, or null if there was no mapping for the key. (A null return can also indicate that the map previously associated null with the key, if the implementation supports null values.)

#### [h2]remove

public boolean remove​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) key, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) value)

Description copied from interface: [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__remove-java_lang_Object-java_lang_Object-)

Removes the entry for the specified key only if it is currently mapped to the specified value. 

**Specified by:**

[remove](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__remove-java_lang_Object-java_lang_Object-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  key with which the specified value is associated  
value  |  value expected to be associated with the specified key  
  
**Returns:**

true if the value was removed

#### [h2]replace

public boolean replace​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) oldValue, [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) newValue)

Description copied from interface: [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__replace-K-V-V-)

Replaces the entry for the specified key only if currently mapped to the specified value. 

**Specified by:**

[replace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__replace-K-V-V-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  key with which the specified value is associated  
oldValue  |  value expected to be associated with the specified key  
newValue  |  value to be associated with the specified key  
  
**Returns:**

true if the value was replaced

#### [h2]replace

public [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) replace​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) value)

Description copied from interface: [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__replace-K-V-)

Replaces the entry for the specified key only if it is currently mapped to some value. 

**Specified by:**

[replace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__replace-K-V-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  key with which the specified value is associated  
value  |  value to be associated with the specified key  
  
**Returns:**

the previous value associated with the specified key, or null if there was no mapping for the key. (A null return can also indicate that the map previously associated null with the key, if the implementation supports null values.)

#### [h2]computeIfAbsent

public [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) computeIfAbsent​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [Function](https://developer.harmonyos.com/cn/docs/documentation/doc-references/function-0000001054119955)<? super [K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? extends [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> mappingFunction)

Description copied from interface: [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__computeIfAbsent-K-java_util_function_Function-)

If the specified key is not already associated with a value (or is mapped to null), attempts to compute its value using the given mapping function and enters it into this map unless null. 

If the function returns null no mapping is recorded. If the function itself throws an (unchecked) exception, the exception is rethrown, and no mapping is recorded. The most common usage is to construct a new object serving as an initial mapped value or memoized result, as in: 
    
    map.computeIfAbsent(key, k -> new Value(f(k)));
     

Or to implement a multi-value map, Map<K,Collection<V>>, supporting multiple values per key: 
    
    map.computeIfAbsent(key, k -> new HashSet<V>()).add(v);
     

**Specified by:**

[computeIfAbsent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__computeIfAbsent-K-java_util_function_Function-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  key with which the specified value is to be associated  
mappingFunction  |  the function to compute a value  
  
**Returns:**

the current (existing or computed) value associated with the specified key, or null if the computed value is null

#### [h2]computeIfPresent

public [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) computeIfPresent​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [BiFunction](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bifunction-0000001054358612)<? super [K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? super [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? extends [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> remappingFunction)

Description copied from interface: [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__computeIfPresent-K-java_util_function_BiFunction-)

If the value for the specified key is present and non-null, attempts to compute a new mapping given the key and its current mapped value. 

If the function returns null, the mapping is removed. If the function itself throws an (unchecked) exception, the exception is rethrown, and the current mapping is left unchanged.

**Specified by:**

[computeIfPresent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__computeIfPresent-K-java_util_function_BiFunction-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  key with which the specified value is to be associated  
remappingFunction  |  the function to compute a value  
  
**Returns:**

the new value associated with the specified key, or null if none

#### [h2]compute

public [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) compute​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [BiFunction](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bifunction-0000001054358612)<? super [K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? super [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? extends [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> remappingFunction)

Description copied from interface: [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__compute-K-java_util_function_BiFunction-)

Attempts to compute a mapping for the specified key and its current mapped value (or null if there is no current mapping). For example, to either create or append a String msg to a value mapping: 
    
    map.compute(key, (k, v) -> (v == null) ? msg : v.concat(msg))

(Method [merge()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__merge-K-V-java_util_function_BiFunction-) is often simpler to use for such purposes.) 

If the function returns null, the mapping is removed (or remains absent if initially absent). If the function itself throws an (unchecked) exception, the exception is rethrown, and the current mapping is left unchanged.

**Specified by:**

[compute](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__compute-K-java_util_function_BiFunction-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  key with which the specified value is to be associated  
remappingFunction  |  the function to compute a value  
  
**Returns:**

the new value associated with the specified key, or null if none

#### [h2]merge

public [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) merge​([K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) key, [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573) value, [BiFunction](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bifunction-0000001054358612)<? super [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? super [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),? extends [V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)> remappingFunction)

Description copied from interface: [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__merge-K-V-java_util_function_BiFunction-)

If the specified key is not already associated with a value or is associated with null, associates it with the given non-null value. Otherwise, replaces the associated value with the results of the given remapping function, or removes if the result is null. This method may be of use when combining multiple mapped values for a key. For example, to either create or append a String msg to a value mapping: 
    
    map.merge(key, msg, String::concat)
     

If the function returns null the mapping is removed. If the function itself throws an (unchecked) exception, the exception is rethrown, and the current mapping is left unchanged.

**Specified by:**

[merge](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858#ZH-CN_TOPIC_0000001054199858__merge-K-V-java_util_function_BiFunction-) in interface [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573),[V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashtable-0000001054358573)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  key with which the resulting value is to be associated  
value  |  the non-null value to be merged with the existing value associated with the key or, if no existing value or a null value is associated with the key, to be associated with the key  
remappingFunction  |  the function to recompute a value if present  
  
**Returns:**

the new value associated with the specified key, or null if no value is associated with the key
