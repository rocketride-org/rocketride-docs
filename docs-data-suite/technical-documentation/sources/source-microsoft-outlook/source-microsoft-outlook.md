---
title: "Microsoft Outlook"
date: 2025-02-08
---

<head>
  <title>Microsoft Outlook - Aparavi Data Suite Documentation</title>
</head>

## Overview

Aparavi allows business users to automate data actions by linking Outlook sources and targets, no code or command line necessary. Before you start working with Outlook, you will need to add and configure the application in the Microsoft Entra admin center. You can find instructions on how to do this here

- [Integrations - Microsoft Office Connectors](../../integrations/microsoft-office-connectors/microsoft-office-connectors.md)

> The system needs at least one source and one include path to complete a file scan. Multiple include path scan be customized as well, but the path entries follow an order of precedence that must be adhered to.

1. Click on the Policies tab. By default, the system will navigate to the Sources subtab.

![](images/file-8Dz4rO6VZy.png)

2. Click on the Add Source button, located in the upper right-hand corner of the screen.

![](images/file-h6UB5uybs7.png)

3. Select Outlook from the drop-down.

![](images/file-E1HTAa9KMV.png)

4. Provide the necessary information in the fields to set up and configure the Outlook source:

- **Source Type:** This field will auto-populate with the selected Outlook source. This field cannot be altered.
- **Service Name:** Enter any name for the Outlook source.
- **Include Paths:** Click on the Include Paths section and include at least one path. Although multiple include paths can be entered, the system has an order of precedence for the paths that must be followed.

Examples:

- - **\*** - scanning of all users on an account.
    - **aparavitest@microsoft.com/\*** - scanning a specific user.
    - **aparavitest@microsoft.com/Folder/\*** - scanning a particular folder.
    - **aparavitest@microsoft.com/Email\*** - scanning using wild cards in the file path. This will include all emails and folders starting with the word _Email_ (f.e aparavitest@microsoft.com/Email1, aparavitest@microsoft.com/Email123.eml).
- **Exclude Paths:** In addition to configuring include paths, an optional step is to enter an exclude path within the section below. When entered, the system will skip the path and not scan the folders and files within it.

Examples:

- - **aparavitest@microsoft.com** - excluding a specific user from a scan.
    - **aparavitest@microsoft.com/Folder** - excluding a particular folder.
    - **aparavitest@microsoft.com/Email\*** - excluding using wild cards in the file path. This will exclude all emails and folders starting with the word _Email_ (f.e aparavitest@microsoft.com/Email1, aparavitest@microsoft.com/Email123.eml).
    - **aparavitest@microsoft.com/email.eml** - excluding a particular email _email.eml_.
- **Configure Parameters:**
    - **Tenant Id**: It is a unique identifier different to your organization name or domain (configuration in Microsoft Entra).
    - **Client Id:** The Client Id created for your application (configuration in Microsoft Entra).
    - **Client Secret:** The Client Secret for your application (configuration in Microsoft Entra).
- **Configure the Estimations Section**:
    - **Access Rate:** Time required to recall a file in MB per second.
    - **Access Delay:** Elapsed time before access to a file starts.
    - **Access Cost:** The egress cost per MB to recall a file.
    - **Storage Cost:** The cost per MB to store a file per month.

![](images/file-5BcTxhqXJ5.png)

5. After completing all sections within the Add source pop-up box, select the Validate button. If the validation was successful, click OK. If the OK button does not activate, this indicates that the credentials are throwing an error and need to be revised before the configuration can progress.
6. Once the Outlook settings have been validated, click OK.

![](images/file-F2Z0YDPzk3.png)

7. Click on the Save All Changes button.

![](images/file-ZWnD0vkSRL.png)

8. Click OK.

![](images/image-5.png)

9. Once the source has been configured, the system will display an alert message and begin scanning from the Outlook source.

![](images/file-Rw6i3qRyZT.png)

> If you are experiencing errors during the scan, they may be caused by incorrect application permissions settings. Check the list of minimum required rights on this page "How to configure an application in the Microsoft Entra admin center configuration for Cloud Connectors".
