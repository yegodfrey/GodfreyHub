---
name: cangjie-faqs/02-multithreading
title: Java的并发编程对应到仓颉语言应该如何实现
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/02-multithreading
nodePath: FAQ / 标准库 / Java的并发编程对应到仓颉语言应该如何实现
---

# Java的并发编程对应到仓颉语言应该如何实现

以下是一段简单的模拟生产者&消费者的Java示例代码：
    
    
    import java.util.concurrent.ArrayBlockingQueue;
    import java.util.concurrent.BlockingQueue;
    
    public class BlockingQueueDemo {
        public static void main(String[] args) {
            BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(5);
    
            Thread producer = new Thread(() -> {
                try {
                    for (int i = 0; i < 10; i++) {
                        queue.put(i);
                        System.out.println("生产: " + i);
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
    
            Thread consumer = new Thread(() -> {
                try {
                    for (int i = 0; i < 10; i++) {
                        int value = queue.take();
                        System.out.println("消费: " + value);
                        Thread.sleep(100);
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
    
            producer.start();
            consumer.start();
        }
    }

使用仓颉语言来模拟同样的逻辑：
    
    
    public func FAQ18Test() {
        let queue = LinkedBlockingQueue<Int64>(5)
        let producer = spawn {
            for (i in 0..10) {
                queue.add(i)
                Hilog.info(0, "Cangjie Test", "Produce: ${i}")
            }
        }
        let consumer = spawn {
            for (i in 0..10) {
                let temp = queue.remove()
                Hilog.info(0, "Cangjie Test", "Consume: ${temp}")
                sleep(Duration.millisecond * 100)
            }
        }
        producer.get()
        consumer.get()
    }

调用FAQ18Test，日志输出结果（并发输出具有随机性，具体以复现结果为准）：
    
    
    Produce: 0
    Produce: 1
    Produce: 2
    Produce: 3
    Produce: 4
    Produce: 5
    Consume: 0
    Consume: 1
    Produce: 6
    Consume: 2
    Produce: 7
    Consume: 3
    Produce: 8
    Consume: 4
    Produce: 9
    Consume: 5
    Consume: 6
    Consume: 7
    Consume: 8
    Consume: 9

仓颉语言并发编程示例以及指南，详情请参见[并发编程](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-concurrency_overview)。
