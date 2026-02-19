---
title: "Aparavi Core Version 2.30.0"
date: 2025-11-11
---

## Release Highlights
This release delivers significant performance improvements, simplification of the user experience, and more control over application functions.

## Performance
Aparavi continues to invest in decreasing data ingestion time to enable the value of data insights faster.

- Optimized system queries, improved use of MySQL and Analytics Service and refactoring the way that MySQL replicates into the Analytics Service have improved scan performance by 30%.
- Pre-defined reports are run as part of the scan, as one of the final sub-tasks, making their results available nearly instantaneously.
- Custom report results are cached after the first execution and refreshed as part of every subsequent re-scan.
- UI page loading and operations response times are significantly faster.
 

Take note that in this release, during the initial scan, the Dashboard results will fluctuate, and Reports and Queries may return empty results until the scan completes.  In the next major release, we are refactoring the backend to support real-time statistics and query results during a scan, along with many other performance and usability improvements.

## Simplification
We’ve embarked on a journey to simplify our products, and Data Suite is getting some major UX enhancements. To prepare for this transition, we are clearing up the overlapping functionality between Data Suite and Aparavi Data Toolchain for AI while taking steps to make the Dashboards and Reports easier to understand.

- The AI Embeddings scan option in Source include paths has been removed. Streaming your data to a vector store can now be done with the Data Toolchain Runtime module, launching in Q4 2025.
- Semantic Search in the Discover tab has also been removed. A new natural language interface to your data through Data Suite will be launched in Q4 2025.

## Controls
Enhanced tunables and settings provide more fine-grained control over what, how and when Data Suite operates certain actions.

- Auto Vacuum – This background task performs database cleanup and statistic updates. There has been no control over when this executes, resulting in the task sometimes starting at inconvenient times (such as primary business hours). This tunable, disableAutoVacuum, located in the config.json file, can disable this task. In the future, it will be added to our task scheduler so administrators can limit the timing and frequency of this task. The default value is ‘true’ (disabled).
- Auto Scan – Data Suite is designed to keep your data intelligence up to date with data sources that are live and changing. While your data source settings can be configured with the scheduler, we’ve added this tunable, disableAutoScan, to enable administrators to turn off all auto scan activity, including those associated with a restart of the Data Suite service. It is also located in the config.json file, and the default is ‘false’ (enabled).
- Dynamic Workers – Depending on the type of data being scanned, when the setting is ‘Auto’ the number of dynamic workers can be triggered may overload the server and exhaust either CPU or memory, resulting in failed scans. Dynamic workers should be monitored and fine-tuned to achieve the optimal utilization of the given resources. To start off with a safer setting, especially when first trying out Data Suite, we’ve changed the default for Maximum Local Dynamic Workers from ‘Auto’ to ‘1’.
- File Size Limits – Indexing and/or classifying very large, complex documents consume a lot of memory capacity and increase the time for a scan to complete, which delays the time to consume intelligence and gain insights into your data. For the initial scans it is best to avoid these delays and see results quickly. Aparavi recommends identifying very large files (which can be done in the Discover->Browse tab or through a Report) and determining the best approach to scanning these files. This default setting for this tunable, Maximum File Size to Index and Classify, has been changed from 250 MB to 50 MB.

## Defect fixes
- Fixed issue where the browser would hang when saving reports containing multiple queries.
- Resolved an issue in the Subfolder Overview report where folders from Source include paths that were deleted were incorrectly being displayed.
- Fixed a crash when selecting custom reports (Files → By Duplicates), preventing application interruptions during reporting tasks.
- Addressed scan failures using a static worker.
- Optimized dashboard loading speed when using a static worker.