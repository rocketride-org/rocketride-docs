---
title: "Data Toolchain for AI v1.0"
date: 2025-01-28
---

We are excited to announce a significant milestone for APARAVI with the launch of our new product: **APARAVI Data Toolchain for AI v1.0**. This innovative product is designed with the developer community in mind, enabling users to efficiently prepare their data for AI projects. With the Data Toolchain, developers can build customized workflows to ingest, curate, and embed data into Vector Databases.

The Data Toolchain mainly helps users to become transparent and more understanding to what kind of data they have, helps them organize this data, and brings more structure to help them create data structures to find the best value from that unstructured data. This product is being launched for both Windows and macOS.

## Core Functionalities

 
There are 3 major steps in the first release that allow AI developers to ease their data preparation process using the APARAVI Data Toolchain for AI. Let’s take a deeper look at these steps:

**Data Ingestion**

With the APARAVI Data Toolchain, users can seamlessly connect to a wide range of supported data sources. The guided workflows simplify the process of connecting, ingesting, and exploring data while offering various scan types to uncover insights. The data sources supported are AWS S3, Google Drive, Gmail, Outlook, SharePoint, OneDrive, SMB, File System, and Azure Blob. The simple steps to connect the data to these sources in very easy steps will enable you to discover your data insights with ease.

After connecting to data sources and initiating scans, the **Overview Page** of the Data Toolchain now provides key insights such as **Total Size**, **Total Files**, **Data Connections**, **Toolchains**, and **LoadCount**.

- **Total Size**: The total volume of data scanned from the connected data sources.
- **Total Files**: The total number of files scanned from the connected data sources.
- **Data Connections**: The number of data sources that were successfully connected.
- **Toolchains**: The total number of toolchains that have been created.
- **LoadCount**: The number of times the toolchains have been executed.

 
Types of Scan during Data Ingestion

The scanning process occurs in multiple steps, each serving a specific purpose:

1. **Core Scan**
    
    Provides a quick overview by listing all files along with their sizes and counts. This scan helps users get a comprehensive view of their data inventory efficiently.
2. **Signature Scan**
    
    Generates a hash value for each file based on its content, enabling users to identify and eliminate duplicate files across various sources. This step is vital for reducing data redundancy, as unstructured data often contains multiple copies of the same document scattered across different storage locations.
3. **Indexing Scan**
    
    Parses the contents of files and stores the extracted words in the Word Database, enabling fast and accurate keyword searches. It also retrieves and saves metadata such as the original creation date, MIME type, and last modified date. This step allows users to locate documents effortlessly based on their content and metadata.
4. **OCR (Optical Character Recognition) Scan**
    
    Crucial for processing document types like images and scanned PDFs, this scan extracts text from these files and stores it in the Word DB. This capability ensures content from non-text files can also be retrieved and searched efficiently.
5. **Classifications**

The Classification scan pipeline builds upon the content extracted during the Indexing scan. It utilizes APARAVI’s powerful Classification Engine to categorize data according to various compliance standards, including GDPR, HIPAA, and others. This process helps identify and classify sensitive or confidential information, enabling users to filter such data effectively. Classified data includes rules that meet specific criteria (Eg: Personal Data) and can be excluded from further processing, ensuring enhanced security and compliance.

**Basic Clean Up**

With the data ingestion phase complete, the next step is **Data Preparation**, referred to as "Basic Cleanup." This phase focuses on helping users minimize their data footprint by offering advanced search filters. These filters enable users to drill down to the exact set of documents they want to embed into a Vector Database. The Data Toolchain for AI includes robust filtering options based on **metadata**, **file categories**, **sizes**, and **classifications**, ensuring swift navigation through datasets to identify and extract the required data efficiently.

**Embed into Vector DB**

After the data has been filtered, it is ready for embedding into a Vector Database tailored to the user's specific needs. The APARAVI Data Toolchain for AI currently supports leading Vector DB options, including **Milvus, Qdrant, Weaviate, and Weaviate Cloud**. Users can select the database that best aligns with their requirements.

Looking ahead, future releases will introduce support for additional Vector Databases such as MongoDB, Elasticsearch, Pinecone, and more, further expanding the toolchain's versatility and integration capabilities.

## Platforms Supported

 
The APARAVI Data Toolchain for AI Community Edition is now supported on both **MacOS** and **Windows**, enabling developers on these platforms to explore and utilize its features extensively while providing us with valuable feedback.

- **MacOS Compatibility**
    - The product is designed with a native build for Intel chipsets, delivering optimal performance and seamless operation on **Intel-based** systems. Additionally, it supports **ARM-based systems** by leveraging Rosetta, Apple's translation layer, enabling users with ARM devices to run the product effectively. While a native ARM build is not yet available, this compatibility ensures that both Intel and ARM users can fully utilize the product's capabilities without limitations
    - Ensures seamless usability across MacOS versions, including Sonoma, and Sequoia.

This expanded support allows a broader developer community to leverage the toolchain effortlessly, fostering innovation and collaboration.

## Community Edition Limits

The Community Edition allows users to explore and fully experience the product without feature restrictions. However, usage is limited to a maximum of **5 GB of data or 5,000 files** to ensure optimal trial conditions.

## Required System Specifications

Supported Mac Versions

| **MacOS Version** | **RAM** | **Cores** | **Storage** |
| --- | --- | --- | --- |
| MAC Sonoma - Version 14 | 32 GB | 12 | 512 GB |
| MAC Sequoia - Version 15 | 32 GB | 12 | 512 GB |

Any old version that is not maintained or supported by Apple ([macOS version history](https://en.wikipedia.org/wiki/MacOS_version_history) ) will _**not**_ be supported by APARAVI.

 
### Supported Windows Versions

| **Windows Version** | **RAM** | **Cores** | **GPU Required** | **Storage** |
| --- | --- | --- | --- | --- |
| Windows 11 or higher | 32 GB | 12 | Yes | 512 GB |

## SMB on Mac

 
To connect an **SMB data source** on a Mac machine, users need the **Samba library.** Here's the command to install Samba via **Homebrew**, a package manager commonly used on macOS:

 
Intel-based machines:

```
brew install samba

```

ARM-based machines (M-series):

1. arch -x86\_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
2. arch -x86\_64 /usr/local/bin/brew install samba
