---
title: "Data Toolchain (DTC) for AI v1.1"
date: 2025-01-26
---

In this minor release, we've added new features that let users connect their Google and Microsoft personal drives or email accounts using Google or Microsoft OAuth authentication. This helps users better understand their unstructured data, find valuable information, and reduce costs by removing unnecessary data duplicates.

## DTC - Google and Microsoft Personal Account Connectivity

With this release, we’re introducing support for Google and Microsoft personal accounts using OAuth authentication, making it easier for users to connect their accounts to the APARAVI Data Toolchain for AI.

 
### Google

- Users upload their service account key obtained from their Google account. How to fetch the token file, please find the details [here](https://aparavi.atlassian.net/wiki/spaces/AP/pages/3622076419/How+to+Configure+Google+Drive+Source#How-to-generate-token-file).
- Once the key is uploaded, simply click the **Connect to Google** button, and APARAVI redirects the user to Google for OAuth authentication.
- After completing authentication, users are brought back to APARAVI, where their account is successfully connected.
- Users can then add the paths they want to scan, and they’re ready to start.

### Microsoft

- Users simply click the **Connect to Microsoft** button.
- They are redirected to complete the OAuth authentication process.
- After authentication, users can connect any paths in their Microsoft account to run scans using APARAVI.
- This process supports both OneDrive and Outlook.


## DTC - Support for Embedding model and chunk strategy

APARAVI is now supporting multiple hugging face embedding models. The user can select from a pre-selection of models which comes with a suggested chunk size for each model, such that the user has the perfect split-size depending in the embedding model dimensions. Furthermore, we are now also supporting custom chunking strategies from [langchain](https://js.langchain.com/v0.1/docs/modules/data_connection/document_transformers/). This enables user to split their documents into custom chunks based on different parameters provided.

## DTC - SMB support on Mac (ARM and Intel)

APARAVI is committed to supporting users across platforms and domains to connect their unstructured data sources seamlessly. With this release, we’ve addressed the gap from the initial launch by adding SMB support on Mac, now available for both Intel and ARM-based machines. Detailed instructions on connecting Mac with ARM-based machines can be found [here](https://aparavi-software.helpscoutdocs.com/article/502-pre-requisites-for-mac-os-all-in-one-installer?preview=6723606dd0576266aafb76cf).

## DTC - Default Licensing and Data Volume Limits for Community Edition

Each time you download and register to use the APARAVI DTC Community Edition on our website, your account on the EA portal will automatically be set up with default licenses, giving you immediate access to key features:

- Signature
- Indexing
- Classifications
- Permissions
- OCR
- Data Actions
- AI Embeddings

Additionally, the Community Edition will have default license limits on data volumes, with each user allowed up to **5 GB or 5,000 files**. The first parameter to reach its limit will apply.

 
## DTC - Install / Un-install Improvements

When uninstalling APARAVI DTC, any existing MySQL database schemas that previously interfered with subsequent installations are now automatically removed, ensuring a smoother installation process.
