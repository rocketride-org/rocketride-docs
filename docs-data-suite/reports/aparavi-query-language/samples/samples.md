---
title: "Samples"
date: 2025-02-08
---

**1\. Files by Creation Time**:

Groups files by the year and month of creation and returns size and count.

```
SELECT
    YEAR(createTime) AS yr,
    MONTH(createTime) AS mo,
    SUM(size) AS totalSize,
    COUNT(size) AS totalCount
GROUP BY
    yr, mo
HAVING
    totalCount > 0
ORDER BY
    yr, mo;

```

**2\. Total Sub Directory Size**

Total up the size and count of files in all sub directories.

```
SELECT
    COMPONENTS(parentPath, 4) AS root,
    SUM(size),
    COUNT(name)
GROUP BY
    root
ORDER BY root;

```

**3\. Count Classified files by Owner**

Count the number of files in each classification category by owner.

```
SELECT
    SUBSTR(classification, 1, 15) AS class,
    osOwner,
    COUNT(classification),
    SUM(size)
GROUP BY
    class, osOwner;

```

**4.** **Top 10 Docs WhereWord**

Get the largest 10 documents containing a word.

```
SET @@DEFAULT_COLUMNS=searchHit;
SELECT
  name,
  size,
  createTime,
  modifyTime,
  searchHit
WHICH CONTAIN ANY ('quido');

```

**5\. Top 10 Biggest Docs with Words**

Get the largest 10 documents with two words near each.

```
SELECT
    localPath,
    size,
    context(1,3)
CONTAINING
    NEAR('guido', 'issue')
ORDER BY
    size DESC
LIMIT 10;'

```

**6.** **ClassificationDistribution**:

This statement will summarize the classifications used are their total sizefor each classification. Note that files that are classified multiple ways willappear in both classification sets so if you total the columns, they will notadd up to the total data set size.

```
-- Turn off containers
SET @@LEFT_JOIN=false;
 
-- Issue the select statement
SELECT
    classification AS Class,
    COUNT(osOwner) as Files,
    SUM(size) as "Size" ,
    SUM(storageCost) as "Total_Storage"
GROUP BY 
    Class;

```

**7\. Classification Status**:

This statement will determine why a file is not indexed/classified.

```
-- Turn off containers
SET @@LEFT_JOIN=false;
 
-- Issue the select statement
SELECT
    path,
    CASE
        WHEN size = 0 THEN 'Zero Size'
        WHEN INSTR(metadata, 'IsEncrypted') > 0 THEN 'Encrypted File'
        WHEN !isIndexed THEN 'Not indexed'
        WHEN classification = 'Unclassified' THEN 'No classifications'
        ELSE 'Unknown'
    END AS classificationState
FROM STORE('/')
WHERE
    isObject AND
    classification = 'Unclassified' AND
    (
         LENGTH(metadata) < 100 AND 
         metadata LIKE '%IsEncrypted%' OR
         !isIndexed
    );

```

**8.** **Owners with Accessto U.S. PII**:

This statement will summarize the data that is owned by all users which havebeen classified with any classification starting with U.S.\*

```
-- Turn off containers
SET @@LEFT_JOIN=false;
 
-- Issue the select statement
SELECT 
   osOwner as Owner,
   classification as "Classification",
   COUNT(name) as "Total_Count",
   SUM(size) as "Total_File_Size"
WHERE
   classification like 'U.S.%'
GROUP BY
   Owner,
   Classification;

```

**9.** **Owners withClassifications**:

This statement will summarize the data that is owned by all users and theirclassifications.

```
-- Turn off containers
SET @@LEFT_JOIN=false;
 
-- Issue the select statement
 
SELECT 
   osOwner as Owner,
   classification as "Classification",
   COUNT(name) as "Total_Count",
   SUM(size) as "Total_File_Size"
GROUP BY
   Owner,
   Classification;

```

**11.** **Top 10 Data Hogs**:

This statement will find the top 10 consumers of data and the cost to storethe data.

```
-- Turn off containers
SET @@LEFT_JOIN=false;
 
-- Issue the select statement
SELECT
    osOwner,
    COUNT(name) AS "File_Count",
    SUM(size) AS "File_Size",
    SUM(storageCost) AS "Total_Storage_Cost"
GROUP BY
    Owner
ORDER BY
    "File_Size" DESC
LIMIT
    10;

```

**12\. T****op 10 DirectoriesBased on Size**:

This statement will find the top 10 data directories.

```
-- Turn off containers
SET @@LEFT_JOIN=false;
 
-- Issue the select statement
SELECT
    parentPath AS "Root_Path",
    COUNT(name) AS "File_Count",
    SUM(size) AS "File_Size",
    SUM(storageCost) as "Total_Storage_Cost"
GROUP BY
    "Root_Path"
ORDER BY
    "File_Size" DESC
LIMIT
    10;

```

**13\. User Access to Protected Data**:

This statement will give you all objects that the given user has permissionsto which contain sensitive data.

```
-- Set the user we are looking for
SET @USER = 'USERNAME';
 
-- Turn off containers
SET @@LEFT_JOIN=false;
 
-- Issue the select statement
SELECT
    osOwner as "Owner",
    path as "Location",
    classification as "Classification"
WHERE
    osPermission like CONCAT('%/', @USER, '%') AND
    classification like 'U.S.%';
```
