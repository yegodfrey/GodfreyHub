---
name: document/cn/AppGallery-connect-Guides/agcapi-prop-advice-0000002355900877
title: Java中对接口参数的处理建议
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-prop-advice-0000002355900877
---

# Java中对接口参数的处理建议

本接口采用的是application/x-www-form-urlencoded格式，会在http层进行编码，同时接收端会自动解码。建议通过如下方法获得get参数串（即我们发送的原始信息），原始信息是没有urlencode的，验签也是需要使用原始内容参与的。而使用request. getParameter()会隐含进行urldecode，在部分情况下可能无法正确获取原始参数信息，比如参数取值中如果包含"%"、"+"、"\&"等特殊符号。

如下为代码示例：

```
String line = null;
        StringBuffer sb = new StringBuffer();
        try{
            request.setCharacterEncoding("UTF-8");
            InputStream stream=request.getInputStream();
            InputStreamReader isr=new InputStreamReader(stream);
            BufferedReader br=new BufferedReader(isr);
        while ((line = br.readLine()) != null) {
            if (sb.length() > 0)
            {
                sb.append("\r\n");
            }
            sb.append(line);
        }
            System.out.println("The original data is : " + sb.toString());
            br.close();
        }catch(Exception e){
            e.printStackTrace();
        } catch (Throwable e) {
            e.printStackTrace();
        }
        
        String str = sb.toString();
        Map<String, Object> valueMap = new HashMap<String, Object>();
        if(null == str || "".equals(str)) {
            return valueMap;
        }
        
        String[]  valueKey = str.split("&");
        for(String temp : valueKey) {
            String[] single = temp.split("=");
            valueMap.put(single[0], single[1]);
        }
        System.out.println("The parameters in map are : " + valueMap);
        
        //接口中，如下参数sign是URLEncode的，所以需要decode，其他参数直接是原始信息发送，不需要decode，其他在接口描述中明确为编码后发送的参数，均需要解码后使用。
        try {
            String sign = (String) valueMap.get("sign");            
            if (null != sign) {
                sign = URLDecoder.decode(sign, "utf-8");
                valueMap.put("sign", sign);
            }
        } catch(Exception e){
            e.printStackTrace();
        }
        
        return valueMap;
```

采用如上方法获取参数时，对于sign和其他接口定义中明确编码后发送的参数需要进行urldecode处理，其余参数不需要处理。  
