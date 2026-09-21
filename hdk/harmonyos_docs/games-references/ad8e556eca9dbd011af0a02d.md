---
name: document/cn/games-references/event-tagchangedevent-0000002477222365
title: TagChangedEvent
uri: https://developer.huawei.com/consumer/cn/doc/games-references/event-tagchangedevent-0000002477222365
---

# TagChangedEvent

|Class/Struct Info|
|:-------------------------------------------------------------------------|
|public readonly struct TagChangedEvent : IEvent 标签变化事件结构体，当实体的标签被添加或移除时触发。|

## Property Summary

|Name|Type|Description|
|:---------|:------------|:----------|
|ChangeType|TagChangeType|变化类型。|
|EntityId|int|实体ID。|
|Tags|ITags|标签类型集合。|
|EcsWorld|IECSWorld|ECSWorld引用。|

**Sample Code**

```screen
// 定义标签变更事件处理器，可访问事件字段和属性
Action<EntityDestroyedEvent> entityDestroyed = (evt) =>
{
    var changeType = evt.ChangeType;
    var id = evt.EntityId;
    var changeTags = evt.Tags;
    var world = evt.EcsWorld;
};
```

