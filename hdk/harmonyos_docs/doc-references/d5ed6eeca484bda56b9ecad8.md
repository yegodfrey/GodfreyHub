---
name: document/cn/doc-references/resultsetmetadata-0000001054439841
title: ResultSetMetaData
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/resultsetmetadata-0000001054439841
source: portal
---

ResultSetMetaData
    
    public interface ResultSetMetaData
    extends [Wrapper](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrapper-0000001054358544)  
  
---  
An object that can be used to get information about the types and properties of the columns in a ResultSet object. The following code fragment creates the ResultSet object rs, creates the ResultSetMetaData object rsmd, and uses rsmd to find out how many columns rs has and whether the first column in rs can be used in a WHERE clause. 
    
    ResultSet rs = stmt.executeQuery("SELECT a, b, c FROM TABLE2");
         ResultSetMetaData rsmd = rs.getMetaData();
         int numberOfColumns = rsmd.getColumnCount();
         boolean b = rsmd.isSearchable(1);
    
     

Field Summary Modifier and Type | Field | Description  
---|---|---  
static int | [columnNoNulls](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__columnNoNulls) |  The constant indicating that a column does not allow NULL values.   
static int | [columnNullable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__columnNullable) |  The constant indicating that a column allows NULL values.   
static int | [columnNullableUnknown](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__columnNullableUnknown) |  The constant indicating that the nullability of a column's values is unknown.   
Method Summary Modifier and Type | Method | Description  
---|---|---  
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getCatalogName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__getCatalogName-int-)​(int column) |  Gets the designated column's table's catalog name.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getColumnClassName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__getColumnClassName-int-)​(int column) |  Returns the fully-qualified name of the Java class whose instances are manufactured if the method ResultSet.getObject is called to retrieve a value from the column.   
int | [getColumnCount](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__getColumnCount--)​() |  Returns the number of columns in this ResultSet object.   
int | [getColumnDisplaySize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__getColumnDisplaySize-int-)​(int column) |  Indicates the designated column's normal maximum width in characters.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getColumnLabel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__getColumnLabel-int-)​(int column) |  Gets the designated column's suggested title for use in printouts and displays.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getColumnName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__getColumnName-int-)​(int column) |  Get the designated column's name.   
int | [getColumnType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__getColumnType-int-)​(int column) |  Retrieves the designated column's SQL type.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getColumnTypeName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__getColumnTypeName-int-)​(int column) |  Retrieves the designated column's database-specific type name.   
int | [getPrecision](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__getPrecision-int-)​(int column) |  Get the designated column's specified column size.   
int | [getScale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__getScale-int-)​(int column) |  Gets the designated column's number of digits to right of the decimal point.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getSchemaName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__getSchemaName-int-)​(int column) |  Get the designated column's table's schema.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getTableName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__getTableName-int-)​(int column) |  Gets the designated column's table name.   
boolean | [isAutoIncrement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__isAutoIncrement-int-)​(int column) |  Indicates whether the designated column is automatically numbered.   
boolean | [isCaseSensitive](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__isCaseSensitive-int-)​(int column) |  Indicates whether a column's case matters.   
boolean | [isCurrency](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__isCurrency-int-)​(int column) |  Indicates whether the designated column is a cash value.   
boolean | [isDefinitelyWritable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__isDefinitelyWritable-int-)​(int column) |  Indicates whether a write on the designated column will definitely succeed.   
int | [isNullable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__isNullable-int-)​(int column) |  Indicates the nullability of values in the designated column.   
boolean | [isReadOnly](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__isReadOnly-int-)​(int column) |  Indicates whether the designated column is definitely not writable.   
boolean | [isSearchable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__isSearchable-int-)​(int column) |  Indicates whether the designated column can be used in a where clause.   
boolean | [isSigned](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__isSigned-int-)​(int column) |  Indicates whether values in the designated column are signed numbers.   
boolean | [isWritable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resultsetmetadata-0000001054439841#ZH-CN_TOPIC_0000001054439841__isWritable-int-)​(int column) |  Indicates whether it is possible for a write on the designated column to succeed.   
Methods inherited from interface java.sql.[Wrapper](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrapper-0000001054358544)  
---  
[isWrapperFor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrapper-0000001054358544#ZH-CN_TOPIC_0000001054358544__isWrapperFor-java_lang_Class-), [unwrap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrapper-0000001054358544#ZH-CN_TOPIC_0000001054358544__unwrap-java_lang_Class-)  
Field Detail [h2]columnNoNulls static final int columnNoNulls The constant indicating that a column does not allow NULL values. **See Also:** [Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_sql_ResultSetMetaData_columnNoNulls) [h2]columnNullable static final int columnNullable The constant indicating that a column allows NULL values. **See Also:** [Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_sql_ResultSetMetaData_columnNullable) [h2]columnNullableUnknown static final int columnNullableUnknown The constant indicating that the nullability of a column's values is unknown. **See Also:** [Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_sql_ResultSetMetaData_columnNullableUnknown) Method Detail [h2]getColumnCount int getColumnCount​() throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Returns the number of columns in this ResultSet object. **Returns:** the number of columns **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]isAutoIncrement boolean isAutoIncrement​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Indicates whether the designated column is automatically numbered. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** true if so; false otherwise **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]isCaseSensitive boolean isCaseSensitive​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Indicates whether a column's case matters. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** true if so; false otherwise **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]isSearchable boolean isSearchable​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Indicates whether the designated column can be used in a where clause. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** true if so; false otherwise **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]isCurrency boolean isCurrency​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Indicates whether the designated column is a cash value. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** true if so; false otherwise **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]isNullable int isNullable​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Indicates the nullability of values in the designated column. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** the nullability status of the given column; one of columnNoNulls, columnNullable or columnNullableUnknown **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]isSigned boolean isSigned​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Indicates whether values in the designated column are signed numbers. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** true if so; false otherwise **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]getColumnDisplaySize int getColumnDisplaySize​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Indicates the designated column's normal maximum width in characters. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** the normal maximum number of characters allowed as the width of the designated column **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]getColumnLabel [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getColumnLabel​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Gets the designated column's suggested title for use in printouts and displays. The suggested title is usually specified by the SQL AS clause. If a SQL AS is not specified, the value returned from getColumnLabel will be the same as the value returned by the getColumnName method. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** the suggested column title **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]getColumnName [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getColumnName​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Get the designated column's name. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** column name **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]getSchemaName [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getSchemaName​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Get the designated column's table's schema. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** schema name or "" if not applicable **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]getPrecision int getPrecision​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Get the designated column's specified column size. For numeric data, this is the maximum precision. For character data, this is the length in characters. For datetime datatypes, this is the length in characters of the String representation (assuming the maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes. For the ROWID datatype, this is the length in bytes. 0 is returned for data types where the column size is not applicable. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** precision **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]getScale int getScale​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Gets the designated column's number of digits to right of the decimal point. 0 is returned for data types where the scale is not applicable. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** scale **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]getTableName [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getTableName​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Gets the designated column's table name. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** table name or "" if not applicable **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]getCatalogName [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getCatalogName​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Gets the designated column's table's catalog name. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** the name of the catalog for the table in which the given column appears or "" if not applicable **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]getColumnType int getColumnType​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Retrieves the designated column's SQL type. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** SQL type from java.sql.Types **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
**See Also:** [Types](https://developer.harmonyos.com/cn/docs/documentation/doc-references/types-0000001054558559) [h2]getColumnTypeName [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getColumnTypeName​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Retrieves the designated column's database-specific type name. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** type name used by the database. If the column type is a user-defined type, then a fully-qualified type name is returned. **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]isReadOnly boolean isReadOnly​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Indicates whether the designated column is definitely not writable. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** true if so; false otherwise **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]isWritable boolean isWritable​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Indicates whether it is possible for a write on the designated column to succeed. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** true if so; false otherwise **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]isDefinitelyWritable boolean isDefinitelyWritable​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Indicates whether a write on the designated column will definitely succeed. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** true if so; false otherwise **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
[h2]getColumnClassName [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getColumnClassName​(int column) throws [SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) Returns the fully-qualified name of the Java class whose instances are manufactured if the method ResultSet.getObject is called to retrieve a value from the column. ResultSet.getObject may return a subclass of the class returned by this method. **Parameters:** Parameter Name | Parameter Description  
---|---  
column  |  the first column is 1, the second is 2, ...  
**Returns:** the fully-qualified name of the class in the Java programming language that would be used by the method ResultSet.getObject to retrieve the value in the specified column. This is the class name used for custom mapping. **Throws:** Throw Name | Throw Description  
---|---  
[SQLException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sqlexception-0000001054518572) |  if a database access error occurs  
**Since:** 1.2
