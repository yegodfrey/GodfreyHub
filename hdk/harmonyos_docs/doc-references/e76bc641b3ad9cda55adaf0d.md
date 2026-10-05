---
name: document/cn/doc-references/forkjoinpool_managedblocker-0000001054678577
title: ForkJoinPool.ManagedBlocker
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/forkjoinpool_managedblocker-0000001054678577
source: portal
---

# ForkJoinPool.ManagedBlocker  
      
    public static interface ForkJoinPool.ManagedBlocker  
  
---  
Interface for extending managed parallelism for tasks running in [ForkJoinPool](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forkjoinpool-0000001054119870)s. 

A ManagedBlocker provides two methods. Method [isReleasable()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forkjoinpool_managedblocker-0000001054678577#ZH-CN_TOPIC_0000001054678577__isReleasable--) must return true if blocking is not necessary. Method [block()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forkjoinpool_managedblocker-0000001054678577#ZH-CN_TOPIC_0000001054678577__block--) blocks the current thread if necessary (perhaps internally invoking isReleasable before actually blocking). These actions are performed by any thread invoking [ForkJoinPool#managedBlock(ManagedBlocker)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forkjoinpool-0000001054119870#ZH-CN_TOPIC_0000001054119870__managedBlock-java_util_concurrent_ForkJoinPool_ManagedBlocker-). The unusual methods in this API accommodate synchronizers that may, but don't usually, block for long periods. Similarly, they allow more efficient internal handling of cases in which additional workers may be, but usually are not, needed to ensure sufficient parallelism. Toward this end, implementations of method isReleasable must be amenable to repeated invocation. 

For example, here is a ManagedBlocker based on a ReentrantLock: 
    
    class ManagedLocker implements ManagedBlocker {
       final ReentrantLock lock;
       boolean hasLock = false;
       ManagedLocker(ReentrantLock lock) { this.lock = lock; }
       public boolean block() {
         if (!hasLock)
           lock.lock();
         return true;
       }
       public boolean isReleasable() {
         return hasLock || (hasLock = lock.tryLock());
       }
     }

Here is a class that possibly blocks waiting for an item on a given queue: 
    
    class QueueTaker<E> implements ManagedBlocker {
       final BlockingQueue<E> queue;
       volatile E item = null;
       QueueTaker(BlockingQueue<E> q) { this.queue = q; }
       public boolean block() throws InterruptedException {
         if (item == null)
           item = queue.take();
         return true;
       }
       public boolean isReleasable() {
         return item != null || (item = queue.poll()) != null;
       }
       public E getItem() { // call after pool.managedBlock completes
         return item;
       }
     }

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [block](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forkjoinpool_managedblocker-0000001054678577#ZH-CN_TOPIC_0000001054678577__block--)​() |  Possibly blocks the current thread, for example waiting for a lock or condition.   
boolean | [isReleasable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/forkjoinpool_managedblocker-0000001054678577#ZH-CN_TOPIC_0000001054678577__isReleasable--)​() |  Returns true if blocking is unnecessary.   
  
#### Method Detail

#### [h2]block

boolean block​() throws [InterruptedException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/interruptedexception-0000001054678421)

Possibly blocks the current thread, for example waiting for a lock or condition. 

**Returns:**

true if no additional blocking is necessary (i.e., if isReleasable would return true)

**Throws:**

Throw Name | Throw Description  
---|---  
[InterruptedException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/interruptedexception-0000001054678421) |  if interrupted while waiting (the method is not required to do so, but is allowed to)  
  
#### [h2]isReleasable

boolean isReleasable​()

Returns true if blocking is unnecessary. 

**Returns:**

true if blocking is unnecessary
