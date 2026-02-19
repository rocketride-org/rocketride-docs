---
title: "Hardware Requirements"
date: 2025-02-08
---

<head>
  <title>Hardware Requirements - Aparavi Data Suite Documentation</title>
</head>

## Purpose

This article provides concise information on the supported operating systems and databases for installing the Aparavi Aggregator-Collector, Aggregator, and Collector. Additionally, it outlines the supported source types, target types, and browsers.

## Installation

### **Operating System Support**

The Aparavi software is supported on the following operating systems.

#### **Windows OS (x64 only)**

- Windows Server 2019
- Windows Server 2016
- Windows 101

1 _Supported for Collector installation. Not as an Aggregator_

#### **Linux OS (x64 only)**2

- Ubuntu 22.04
- Debian 11
- Suse Enterprise 15
- Red Hat (RHEL) 8.x

#### Resource Requirements

- Aggregator & Collector Server
    - CPU: 4-8 cores
    - Memory: 64 GB Minimum
    - Disk: minimum 25% of data source plus 64GB for Virtual Paging / Swap space

For further resources specifications please discuss with an Aparavi Data Expert.

### Database Support

For the Aggregator and Aggregator-Collector, a database is essential to store file metadata. The database can be installed on the same server as an Aggregator or on a separate server accessible by the Aggregator. Multiple Aggregators can access the same database. The supported database type is:

- MySQL 8.0.x

## Data Sources

Aparavi software provides access to file systems installed on the Aggregator-Collector or Collector. Additionally, it supports accessing files through the SMB file share protocol, with plans for expanding source types in the future.

Supported data sources include:

- Windows file systems
- Linux file systems
- SMB file share protocols – 2.x and 3.x

Note: To access Windows file shares from Linux servers, Aparavi automatically installs Samba client libraries (libsmbclient). For accessing Linux file shares from Windows servers, Samba server libraries must be installed and configured on the Linux server.

## Browsers

Aparavi functionality such as administration, reporting, and search capabilities are all accessed by logging into the Aparavi portal by using one of the following supported browsers.

| **Browser** | **Windows** | **Linux** | **MacOS** |
| --- | --- | --- | --- |
| Google Chrome | Yes | Yes | Yes |
| Microsoft Edge | Yes | No | No |
| Mozilla Firefox | Yes | Yes | Yes |
| Safari | No | No | Yes |
