---
title: "Variables"
date: 2025-02-08
---

## Variables

Variables are used to define values and expressions that can be utilized within the `SELECT` statement or by other variables. Declarations are set prior to the `SELECT` statement.

Variables are complete expressions, using functions, physical columns and aliases. A variable name must begin with `@` . Variables beginning with `@@` are system variables reserved to set options or settings for the query.

> Since each `SET` statement is an independent command within the _AQL_ statement, each statement should end with a semi-colon ( ; )
> 
> `SET @USER = 'JOHN.SMITH';`

### EXAMPLE

```
SET @USER = 'JOHN.SMITH';
SET @@LEFT_JOIN=false;
 
SELECT
    osOwner as Owner,
    path as Location,
    classification as Classification
WHERE
    osPermission like CONCAT('%/',@USER,'%') AND
    classification like 'U.S.%';

```

- Defines a variable @USER to JOHN.SMITH
- Sets the System variable LEFT\_JOIN to FALSE (will return only rows with an osPermission and Classification value - similar to an INNER JOIN)
- Returns Owner, Path, and Classification for rows that have a Classification starting with U.S. and whose osPermission is \*/JOHN.SMITH\*

#### SYSTEM VARIABLES

 
| **System Variable** | **Description** |
| --- | --- |
| @@ADD\_DEFAULT\_COLUMNS | When _TRUE_, all columns specified by `@@DEFAULT_COLUMS` are added to the column `SELECT` list. If `@@DEFAULT_COLUMNS` is not specified, the system default columns will be used.  `SET @@ADD_DEFAULT_COLUMNS=true;` |
| @@DEFAULT\_COLUMNS | List of columns that will be added to the column `SELECT` list if `@ADD_DEFAULT_COLUMS` is set to _TRUE_.  `SET @@DEFAULT_COLUMNE=Name,ParentPath;` |
| @@DISABLE\_AGGREGATION | Disables aggregation expressions. If a query resolves to an aggregation, an error will be thrown.  `SET @@DISABLE_AGGREGATION=true;` |
| @@LEFT\_JOIN | Defaults is `TRUE` . This setting defines if the query should operate like a _LEFT JOIN_ or an _INNER JOIN_. When _LEFT JOIN_ is true, it will return all rows where the column is NULL/missing even when it is contained in the _WHERE_ clause. When _LEFT JOIN_ is _FALSE_, those rows will be skipped.  `SET @@LEFT_JOIN=true;` |
| @@CONTEXTWORDS | Sets the number of words to retrieve for the context columns for search or classification hits. For example, setting this value to 25 will return 25 words for the `searchHitWordsBefore` column.  `SET @@CONTEXTWORDS=25;` |
| @@CONTEXTCOUNT | Sets the maximum number of hits for search and classification hits to return. A document may have hundreds of hits but by using the value, the number of hits can be set.  `SET @@CONTEXTCOUNT=25;` |
