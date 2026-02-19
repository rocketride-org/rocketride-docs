---
title: "Helper Functions"
date: 2025-02-08
---

## Mathematical

### ABS

`ABS` returns the absolute value of a number.

```
SELECT ABS(numeric_value)

```

`SELECT ABS(-243.5)`

- **243.5**

### CEILING

`CEILING` returns the smallest integer that is greater than or equal to a number.

```
SELECT CEILING(numeric_value)

```

`SELECT CEILING(243.5)`

- **244**

### FLOOR

`FLOOR` returns the largest integer that is less than or equal to a number.

```
SELECT FLOOR(numeric_value)

```

`SELECT FLOOR(243.5)`

- **243**

### TRUNCATE

`TRUNCATE` returns a number cut at the specified number of decimal places. It does not "ROUND" the value.

```
SELECT TRUNCATE(numeric_value,decimal_length)

```

`SELECT TRUNCATE(-243.52745,2)`

- **243.52**

## Date

- _DATE_ represents a _DATETIME_. There is not a distinct _DATE_ vs _DATETIME_ datatype.
- _DATE_ values are shown here between # (hash) characters. This distinguishes them from a string in ' (single quote) characters. Generally when typing a _DATE_ into the AQL editor, you will use the single quote.
- _DATE_ strings should be entered as YYYY-MM-DD HH:MM:SS format
- The DATE entered will be parsed as GMT and then displayed in the local timezone.
    - `SELECT DATE('2024-12-31')` on a Eastern Time computer will return 12/30/2024, 7PM

### DATE

`DATE` returns a _DATE_ value from a _STRING_.

```
SELECT DATE(string_date)

```

`SELECT DATE('2024-12-31')`

- **#12/31/2024 12:00:00#**

`SELECT DATE('12/31/2024 11:59:00')`

- **#12/31/2024 11:59:00#**

### DAY

`DAY` returns the day portion of a date.

```
SELECT DAY(date_value)

```

`SELECT DAY(#12/31/2024#)`

- **31**

### DAYOFWEEK

`DAYOFWEEK` returns Day of the Week for the given date. The value returned is 0 to 6, Monday to Sunday.

```
SELECT DAYOFWEEK(date_value)

```

`SELECT DAYOFWEEK(#12/31/2024#)`

- **1** (Tuesday)

### DAYOFYEAR

`DAYOFYEAR` returns the Julian Number or the elapsed days since the start of the year.

```
SELECT DAYOFYEAR(date_value)

```

`SELECT DAYOFYEAR(#12/31/2024#)`

- **366**

### HOUR

`HOUR` returns the hour value of a _DATE_, 0=12AM to 23=11PM.

```
SELECT HOUR(date_value)

```

`SELECT HOUR(#12/31/2024 11:59:00#)`

- **0** (Dates have a default time of 12:00:00 AM)

### ISODATE

`ISODATE` returns the _DATE_ in the ISO format YYYY-MM-DDTHH:MM:SSZ format.

```
SELECT ISODATE(date_value)

```

`SELECT ISODATE(#12/31/2024 11:59PM#)`

- **2024-12-31T11:59:00Z**

### MINUTE

`MINUTE` returns the minute value of a _DATE_.

```
SELECT MINUTE(date_value)

```

`SELECT MINUTE(#12/31/2024 11:59PM#)`

- **59**

`SELECT MINUTE(#12/31/2024#)`

- **0** (Dates have a default time of 12:00:00 AM)

### MONTH

`MONTH` returns the month portion of a _DATE_.

```
SELECT MONTH(date_value)

```

`SELECT MONTH(#12/31/2024 11:58:34#)`

- **12**

### NOW

`NOW` returns the current _DATE_.

```
SELECT NOW()

```

`SELECT NOW()`

### TODAY

`TODAY` returns the current _DATE (with a "0" time of 12:00:00 AM)_.

```
SELECT TODAY()

```

`SELECT TODAY()`

### SECOND

`SECOND` returns the second portion of a _DATE_.

```
SELECT SECOND(date_value)

```

`SELECT SECOND(#12/31/2024 11:59:23PM#)`

- **23**

 

### WEEK

`WEEK` returns the week number of the year for a _DATE_.

```
SELECT WEEK(date_value)

```

`SELECT WEEK(#12/31/2024#)`

- **53**

### YEAR

`YEAR` returns the year portion of a _DATE_.

```
SELECT YEAR(date_value)

```

`SELECT YEAR(#12/31/2024#)`

- **2024**

## Type Conversion

### CAST

`CAST` returns a _DATE_, _NUMBER_, or _STRING_ from a _DATE_, _NUMBER_ or _STRING_ value. Many of the _CAST_s are handled dynamically as well.

```
SELECT CAST(value AS type)

```

`SELECT CAST (12345 AS STRING)`

- **'12345'** (Quotes shown only for clarity as _STRING_)

`SELECT CAST ('4567.89' AS NUMBER)`

- **4567.89**

`SELECT CAST ('2024-12-31 11:45:58' AS DATE)`

- **#12/31/2024 11:45:58#** (This _CAST_ structure replicates the functionality of _DATE_)

### LOCALDATE

`LOCALDATE` returns a _STRING_ from a _DATE_ value in YYYY-MM-DD HH:MM:SSTZ format.

```
SELECT LOCALDATE(date_value)

```

`SELECT LOCALDATE(#12/31/2024 23:59:00#)`

- **2024-12-31 23:59:00-04**

### LOCALNUMBER

`LOCALNUMBER` returns a _STRING_ from a _NUMBER_ value in the local default format.

```
SELECT LOCALNUMBER(numeric_value)

```

`SELECT LOCALNUMBER(-1243.5)`

- **\-1,243.5000**

U.S. number format only

## String

### COALESCE

`COALESCE` returns the non null value passed to it.

```
SELECT COALESCE(value1,value2[,valueN])

```

`set A=NULL`

`set B=NULL`

`set C=23`

`SELECT COALESCE(A,B,C)`

- **23**

### CONCAT

`CONCAT` returns the combination of two or more _STRING_s.

```
SELECT CONCAT(string1,string2[,string3])

```

`SELECT CONCAT('Smith',', ','John')`

- **Smith, John**

### LEFT

`LEFT` returns the X leftmost characters.

```
SELECT LEFT(string_value,numeric_value)

```

`SELECT LEFT('ABCDEFG',3)`

- **ABC**

### RIGHT

`RIGHT` returns the X rightmost characters.

```
SELECT RIGHT(string_value,numeric_value)

```

`SELECT RIGHT('ABCDEFG',3)`

- **EFG**

### LENGTH

`LENGTH` returns the number of characters of a _STRING_.

```
SELECT LENGTH(string_value)

```

`SELECT LENGTH('ABCDEFG')`

- **7**

### INSTR / LOCATE

`INSTR` and `LOCATE` return position of a _STRING_ within another _STRING_.

```
SELECT INSTR(bigstring_value,findstring_value)
SELECT LOCATE(findstring_value,bigstring_value)

```

`SELECT INSTR('ABCDEFG','C')`

- **3**

`SELECT LOCATE('C','ABCDEFG')`

- **3**

### ISNULL

`ISNULL` returns the second value if the first is null.

```
SELECT ISNULL(value1,value2)

```

`set A=NULL`

`SELECT ISNULL(A,'ABCDEFG')`

- **ABCDEFG**

### LPAD

`LPAD` left pads a string to a fixed length.

```
SELECT LPAD(string_value,numeric_value,pad_string)

```

`SELECT LPAD('ABCDEFG',10,'*')`

- **\*\*\*ABCDEFG**

### RPAD

`RPAD` right pads a string to a fixed length.

```
SELECT RPAD(string_value,numeric_value,pad_string)

```

`SELECT RPAD('ABCDEFG',10,'*')`

- **ABCDEFG\*\*\***

### LTRIM

`LTRIM` removes leading spaces from a _STRING_.

```
SELECT LTRIM(string_value)

```

`SELECT LTRIM(' ABCDEFG')`

- **ABCDEFG**

### RTRIM

`LTRIM` removes trailing spaces from a _STRING_.

```
SELECT RTRIM(string_value)

```

`SELECT RTRIM('ABCDEFG ')`

- **ABCDEFG**

### SUBSTR

`SUBSTR` returns a portion of a _STRING_ defined by the start position and length.

```
SELECT SUBSTR(string_value,start_position,length)

```

`SELECT SUBSTR('ABCDEFG',2,5)`

- **BCDEF**

### TRIM

`TRIM` removes leading and trailing spaces from a _STRING_.

```
SELECT TRIM(string_value)

```

`SELECT TRIM(' ABCDEFG ')`

- **ABCDEFG**

### UPPER

`UPPER` returns a given _STRING_ in all capital letters.

```
SELECT UPPER(string_value)

```

`SELECT UPPER('AbcdEfg')`

- **ABCDEFG**

### LOWER

`LOWER` returns a given _STRING_ in all lowercase letters.

```
SELECT LOWER(string_value)

```

`SELECT LOWER('AbcdEfg')`

- **abcdefg**

# Aparavi Specific

### COMPONENTS

`COMPONENTS` returns the parent folder path to an object X levels deep from a directory path type string.

```
SELECT COMPONENTS(filepath_value,depth)

```

`SELECT COMPONENTS('c:\path\to\a\deep\deep\file.txt',6)`

- **c:\\path\\to\\a\\deep**
