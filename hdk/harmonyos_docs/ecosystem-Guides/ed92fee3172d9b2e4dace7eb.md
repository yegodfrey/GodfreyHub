---
name: document/cn/ecosystem-Guides/04_05_02_01_aggregation-0000001077755302
title: 分组聚合
uri: https://developer.huawei.com/consumer/cn/doc/ecosystem-Guides/04_05_02_01_aggregation-0000001077755302
---

# 分组聚合

样例代码：查询数据表t_0ee43ca9_nvblz8ww中 province等于字符串江苏省的所有数据的每个不同的city对应的age的最大值。

```codeblock
import com.google.common.collect.Lists;
import com.huawei.hiresearch.client.model.table.AggregationInfo;
import com.huawei.hiresearch.client.model.table.AggregationOperation;
import com.huawei.hiresearch.client.model.table.FilterCondition;
import com.huawei.hiresearch.client.model.table.SearchTableDataRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
public class AggregationQuery {
    public static void main(String[] args) throws IOException {
// 获取鉴权
        HiResearchAuth hiResearchDemo = new HiResearchAuth();
        // 获取最新accesstoken
        String accessToken = hiResearchDemo.getAccessToken();
        List<Map<String, Object>> resultRows = Lists.newArrayList();
        // 构造过滤条件
        List<FilterCondition> filterConditions = new ArrayList<>();
        // 单个过滤条件: province = "江苏省"。聚合查询可以与过滤条件一起使用，在过滤条件命中的范围中进行聚合。
        FilterCondition simpleCondition = new FilterCondition(FilterCondition.LOGIC_TYPE_AND,
                FilterCondition.OPERATOR_TYPE_EQUALS, "province", "江苏省");
        filterConditions.add(simpleCondition);
        // 聚合查询：按照city分组求取age最大值
        AggregationOperation aggregationOperation = new AggregationOperation();
        aggregationOperation.setField("age");
        aggregationOperation.setType(AggregationOperation.TypeEnum.MAX);
        // 支持一次性进行多个聚合操作
        List<AggregationOperation> aggregationOperations = Lists.newArrayList();
        aggregationOperations.add(aggregationOperation);
        // 支持一次指定多个分组字段
        List<String> groupByFields = Lists.newArrayList();
        groupByFields.add("city");
        AggregationInfo aggregationInfo = new AggregationInfo();
        aggregationInfo.setAggregations(aggregationOperations);
        aggregationInfo.setGroupByFields(groupByFields);
        // 构造查询请求
        String tableID = "t_0ee43ca9_nvblz8";
        SearchTableDataRequest searchTableDataRequest = new SearchTableDataRequest(
                accessToken,
                tableID,
                filterConditions,
                aggregationInfo);
        // 查询并打印结果集    
hiResearchDemo.getClient().getResearchDataProvider().queryTableData(searchTableDataRequest,
                (rowsOfCurrentPage, totalCnt) -> {
                    // 忽略totalCnt，该参数在聚合查询时无意义
                    resultRows.addAll(rowsOfCurrentPage);
                    System.out.printf("当页返回%d条，数据为：%s /n", rowsOfCurrentPage.size(), rowsOfCurrentPage);
                });
    }
}
```

