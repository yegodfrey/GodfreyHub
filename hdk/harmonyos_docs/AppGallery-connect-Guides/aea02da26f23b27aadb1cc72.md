---
name: document/cn/AppGallery-connect-Guides/agc-cloudstorage-applicationscenarios-0000001316067312
title: 典型应用场景
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-applicationscenarios-0000001316067312
---

# 典型应用场景

#### 电商网站中的秒杀抢购

秒杀抢购活动并发高，需要较高的硬件配置（如磁盘IO）支撑。而云缓存单节点QPS（Queries-per-second，每秒查询率）支撑能达到10万，使用SET、GET、DEL、RPUSH等命令即可轻松应对秒杀并发。  

#### 视频直播中的消息弹幕

直播间的在线用户列表、礼物排行榜、弹幕消息等信息，都适合使用云缓存进行存储。  

#### 游戏应用中的游戏排行榜

在线游戏一般涉及排行榜实时展现，比如列出当前得分最高的10个用户。云缓存服务提供多达20个操作集合的命令，可以有序集合存储用户排行榜。  

#### 社交应用中返回最新评论/回复

在Web类应用中，常有最新评论之类的查询，例如存储最新1000条评论，当查询的评论数在这个范围，就不需要访问磁盘数据库，直接从云缓存中返回，减少数据库压力的同时，提升应用的响应速度。
