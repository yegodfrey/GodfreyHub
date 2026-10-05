---
name: document/cn/doc-references/queue-0000001054119915
title: Queue
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/queue-0000001054119915
source: portal
---

# Queue
    
    public interface Queue<E>
    extends [Collection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563)<E>  
  
---  
A collection designed for holding elements prior to processing. Besides basic [Collection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563) operations, queues provide additional insertion, extraction, and inspection operations. Each of these methods exists in two forms: one throws an exception if the operation fails, the other returns a special value (either null or false, depending on the operation). The latter form of the insert operation is designed specifically for use with capacity-restricted Queue implementations; in most implementations, insert operations cannot fail. 

Queues typically, but do not necessarily, order elements in a FIFO (first-in-first-out) manner. Among the exceptions are priority queues, which order elements according to a supplied comparator, or the elements' natural ordering, and LIFO queues (or stacks) which order the elements LIFO (last-in-first-out). Whatever the ordering used, the head of the queue is that element which would be removed by a call to [remove()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__remove--) or [poll()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__poll--). In a FIFO queue, all new elements are inserted at the tail of the queue. Other kinds of queues may use different placement rules. Every Queue implementation must specify its ordering properties. 

The [offer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__offer-E-) method inserts an element if possible, otherwise returning false. This differs from the [Collection.add](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__add-E-) method, which can fail to add an element only by throwing an unchecked exception. The offer method is designed for use when failure is a normal, rather than exceptional occurrence, for example, in fixed-capacity (or "bounded") queues. 

The [remove()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__remove--) and [poll()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__poll--) methods remove and return the head of the queue. Exactly which element is removed from the queue is a function of the queue's ordering policy, which differs from implementation to implementation. The remove() and poll() methods differ only in their behavior when the queue is empty: the remove() method throws an exception, while the poll() method returns null. 

The [element()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__element--) and [peek()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__peek--) methods return, but do not remove, the head of the queue. 

The Queue interface does not define the _blocking queue methods_ , which are common in concurrent programming. These methods, which wait for elements to appear or for space to become available, are defined in the [BlockingQueue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/blockingqueue-0000001054838560) interface, which extends this interface. 

Queue implementations generally do not allow insertion of null elements, although some implementations, such as [LinkedList](https://developer.harmonyos.com/cn/docs/documentation/doc-references/linkedlist-0000001054358582), do not prohibit insertion of null. Even in the implementations that permit it, null should not be inserted into a Queue, as null is also used as a special return value by the poll method to indicate that the queue contains no elements. 

Queue implementations generally do not define element-based versions of methods equals and hashCode but instead inherit the identity based versions from class Object, because element-based equality is not always well-defined for queues with the same elements but different ordering properties. 

This interface is a member of the [ Java Collections Framework](https://docs.oracle.com/javase/8/docs/technotes/guides/collections/index.html).

**Since:**

1.5

**See Also:**

[Collection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563), [LinkedList](https://developer.harmonyos.com/cn/docs/documentation/doc-references/linkedlist-0000001054358582), [PriorityQueue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/priorityqueue-0000001054358584), [LinkedBlockingQueue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/linkedblockingqueue-0000001054358593), [BlockingQueue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/blockingqueue-0000001054838560), [ArrayBlockingQueue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/arrayblockingqueue-0000001054238609), [LinkedBlockingQueue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/linkedblockingqueue-0000001054358593), [PriorityBlockingQueue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/priorityblockingqueue-0000001054678583)

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [add](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__add-E-)​([E](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915) e) |  Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions, returning true upon success and throwing an IllegalStateException if no space is currently available.   
[E](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915) | [element](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__element--)​() |  Retrieves, but does not remove, the head of this queue.   
boolean | [offer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__offer-E-)​([E](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915) e) |  Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions.   
[E](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915) | [peek](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__peek--)​() |  Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.   
[E](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915) | [poll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__poll--)​() |  Retrieves and removes the head of this queue, or returns null if this queue is empty.   
[E](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915) | [remove](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__remove--)​() |  Retrieves and removes the head of this queue.   
  
Methods inherited from interface java.util.[Collection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563)  
---  
[addAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__addAll-java_util_Collection-), [clear](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__clear--), [contains](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__contains-java_lang_Object-), [containsAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__containsAll-java_util_Collection-), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__equals-java_lang_Object-), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__hashCode--), [isEmpty](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__isEmpty--), [iterator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__iterator--), [parallelStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__parallelStream--), [remove](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__remove-java_lang_Object-), [removeAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__removeAll-java_util_Collection-), [removeIf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__removeIf-java_util_function_Predicate-), [retainAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__retainAll-java_util_Collection-), [size](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__size--), [spliterator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__spliterator--), [stream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__stream--), [toArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__toArray--), [toArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__toArray-T:A-)  
  
Methods inherited from interface java.lang.[Iterable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iterable-0000001054238441)  
---  
[forEach](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iterable-0000001054238441#ZH-CN_TOPIC_0000001054238441__forEach-java_util_function_Consumer-)  
  
#### Method Detail

#### [h2]add

boolean add​([E](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915) e)

Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions, returning true upon success and throwing an IllegalStateException if no space is currently available. 

**Specified by:**

[add](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__add-E-) in interface [Collection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563)<[E](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915)>

**Parameters:**

Parameter Name | Parameter Description  
---|---  
e  |  the element to add  
  
**Returns:**

true (as specified by [Collection#add](https://developer.harmonyos.com/cn/docs/documentation/doc-references/collection-0000001054358563#ZH-CN_TOPIC_0000001054358563__add-E-))

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalStateException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalstateexception-0000001054678452) |  if the element cannot be added at this time due to capacity restrictions  
[ClassCastException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classcastexception-0000001054678419) |  if the class of the specified element prevents it from being added to this queue  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the specified element is null and this queue does not permit null elements  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if some property of this element prevents it from being added to this queue  
  
#### [h2]offer

boolean offer​([E](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915) e)

Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions. When using a capacity-restricted queue, this method is generally preferable to [add(E)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__add-E-), which can fail to insert an element only by throwing an exception. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
e  |  the element to add  
  
**Returns:**

true if the element was added to this queue, else false

**Throws:**

Throw Name | Throw Description  
---|---  
[ClassCastException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classcastexception-0000001054678419) |  if the class of the specified element prevents it from being added to this queue  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the specified element is null and this queue does not permit null elements  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if some property of this element prevents it from being added to this queue  
  
#### [h2]remove

[E](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915) remove​()

Retrieves and removes the head of this queue. This method differs from [poll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__poll--) only in that it throws an exception if this queue is empty. 

**Returns:**

the head of this queue

**Throws:**

Throw Name | Throw Description  
---|---  
[NoSuchElementException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nosuchelementexception-0000001054119933) |  if this queue is empty  
  
#### [h2]poll

[E](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915) poll​()

Retrieves and removes the head of this queue, or returns null if this queue is empty. 

**Returns:**

the head of this queue, or null if this queue is empty

#### [h2]element

[E](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915) element​()

Retrieves, but does not remove, the head of this queue. This method differs from [peek](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915#ZH-CN_TOPIC_0000001054119915__peek--) only in that it throws an exception if this queue is empty. 

**Returns:**

the head of this queue

**Throws:**

Throw Name | Throw Description  
---|---  
[NoSuchElementException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nosuchelementexception-0000001054119933) |  if this queue is empty  
  
#### [h2]peek

[E](https://developer.harmonyos.com/cn/docs/documentation/doc-references/queue-0000001054119915) peek​()

Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty. 

**Returns:**

the head of this queue, or null if this queue is empty
