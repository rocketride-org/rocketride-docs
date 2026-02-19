---
title: "Log Files"
date: 2025-02-08
---

<head>
  <title>Log Files - Aparavi Data Suite Documentation</title>
</head>

## Log types and descriptions

Note that both monitor.log and server.log are present for both Aggregators and Collectors, whereas the job logs are specific to Aggregators only. For the purposes of this document, the running Aggregator or Collector application is referred to as a **service**. Each case shown for an Aggregator may also be applied to an Aggregator-Collector, which is in fact an Aggregator with the extended capability of a Collector.

**monitor.log**

\[Aggregator, Collector\] This log captures information related to the service, including service initialization, statistics, and updates. It is created when the service is started and is sequenced and rotated every 256KB. By default, the service will retain the latest 10 monitor.log files, such as monitor.log, monitor.log.1, monitor.log.2, up to monitor.log.9. This is the best place to look if there was an error starting the server.

**server.log**

\[Aggregator, Collector\] This log captures server log messages related to the running server processes, including INFO, WARN and/or ERROR. The server.log will be sequenced and rotated every 1MB, and the service will retain the latest 10 log files. This is the best place to look if there was an error after the server has started.

**Job Logs**

\[Aggregator\] Job logs contain detailed information for every phase of a running job. They also provide the source for information seen when clicking on the job status view in the Aparavi dashboard. Listing all job logs may be preferable to find information about a specific step of a job without having to locate its position in the job status tree shown in the UI, or if the UI is not accessible from the running service location.

## Default log locations

For the locations below, the values for **apptype** will be either **aggregator**, **collector** or **aggregator-collector**, depending on which service is installed on the server.

### Windows log locations

```
C:\Program Files\aparavi-data-ia\{apptype}\monitor.log[.1-9]
C:\ProgramData\aparavi-data-ia\{apptype}\logs\server.log[.1-9]
C:\ProgramData\aparavi-data-ia\{apptype}\logs\task.*
```

### Linux log locations

```
/opt/aparavi-data-ia/{apptype}/monitor.log[.1-9]
/var/log/aparavi-data-ia/{apptype}/server.log[.1-9]
/var/log/aparavi-data-ia/{apptype}/task.*
```
