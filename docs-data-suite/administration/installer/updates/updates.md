---
title: "Update Methods"
date: 2025-11-11
---

# Update Methods

Rev 1
Nov 11, 2025

## Introduction

The APARAVI application supports two methods for updating to a higher version. Each to be outlined in the sections to follow. With a newer version product released, an update will be available for an application running an earlier version.

## Method 1: Opt-In and Automatic Updates

This type of update will occur when the user is running a Platform installed locally and clicks the Update button or has opted for automatic updates. The update will apply to any connected modules applications, whether installed locally or on another machine. The effect is to replace all files in the "app" folder directly below the folder where the application is installed. The process is as follows:

- An update is started by clicking update or via an auto update policy.
- The new application version file starts downloading until complete.
- The application monitoring process is notified to stop the running application and continue the update process.
- The current 'app' folder is renamed and moved, then the downloaded application file is extracted to replace the 'app' folder.
- On success, the previous 'app' folder is deleted, then the application monitoring process restarts the application with the new files in place to run the new updated program version.

This is the standard method for updating the APARAVI Data Suite application installed on the user's computer.

Note that when you start your computer as well as when the installation has completed, the installed APARAVI application service controls the start of the application.

**Windows:**

The service Log On credentials default to Local System Account, as is the case with most if not all other services. However, in some cases where certain file access permissions are required for the application, this credential may be changed. If such is the case, an application update will not reset the credentials but continue using whatever is in place prior to the update.

**Linux / macOS:**

Generally, credentials will not need to be changed for the APARAVI application service, but in case this is done, the same rule applies as for Windows. An application update will not reset the credentials but continue using whatever is in place prior to the update.

## Method 2: Manual Updates

The type of update method happens by starting an installation program version which is higher than an application currently installed. It was initially provided as a convenience for application developers and QA processes. However, in some installed application formats where the above Method 1 does not apply, this method serves as an alternate solution. One example of a different application format could be the "All-In-One" installation model used for the APARAVI Data Toolchain product.

In order to use this manual update method, you would need to be provided an installation program, or "installer" in other words, usually from a download link provided from APARAVI.

This is the process when running the newer versioned installer as an update:

- When the installer starts, a dialog appears showing what version is installed and what version is available as an update. The next steps assume the offer is accepted.
- An uninstallation of the current process starts, preserving all database and application settings.
- An installation of the new version begins which inherits all preserved settings.
- When the installation is complete you are ready to continue its use as the new installed version.

This is not the standard method for updating the APARAVI Data Suite applications but provided as a convenience or "workaround" for exceptional cases.

Note that when you start your computer as well as when the installation has completed, the installed APARAVI application service controls the start of the application.

**Windows:**

The service Log On credentials default to Local System Account, as is the case with most if not all other services. However, in some cases where certain file access permissions are required for the application, this credential may be changed. If such is the case, an application update will also uninstall and reinstall the APARAVI application service using default settings. Therefore, any altered service settings from the previous installation will not be retained after the update is completed.

**Linux / macOS:**

Generally, credentials will not need to be changed for the APARAVI application service, but in case this is done, the same rule applies as for Windows. An application update will also uninstall and reinstall the APARAVI application service using default settings. Therefore, any altered service settings from the previous installation will not be retained after the update is completed.

## Uninstallation

Uninstallation is available using the standard operating system as standard program removal methods, with the exception of macOS where an uninstall command is provided with the installed product. The main requirement is to identify what product you wish to uninstall, especially in cases where more than one is installed, such as a Platform and Aggregator-Collector installed on the same computer.

### Windows

Open the Apps and Features screen, available from your Settings menu. Locate the APARAVI installed product entry. For Windows 10, just clicking on it will pop up an uninstall button. For Windows 11, you need to select the "three dot" menu icon to select uninstall from the menu.

### Linux

Open a prompt as administrator, or "sudo run" the uninstall command.

For the Debian/Ubuntu OS type, use:
```bash
dpkg -r <productName>-<moduleName>
```

For the Centos/Redhat OS type, use:
```bash
rpm -e <productName>-<moduleName>
```

where:

**&lt;productName&gt;** can be one of:
- aparavi-data-suite
- aparavi-data-toolchain

**&lt;moduleName&gt;** can be one of:
- platform
- aggregator
- collector
- aggregator-collector
- worker

**APARAVI Data Suite Platform example:**
```bash
dpkg -r aparavi-data-suite-platform
```

**APARAVI Data Toolchain Aggregator-Collector example:**
```bash
dpkg -r aparavi-data-toolchain-aggregator-collector
```

### macOS

Open a prompt as administrator, or "sudo run" this uninstall command:
```bash
/opt/<productName>/<moduleName>/app/uninstall
```

where:

**&lt;productName&gt;** can be one of:
- aparavi-data-suite
- aparavi-data-toolchain

**&lt;moduleName&gt;** can be one of:
- platform
- aggregator
- collector
- aggregator-collector
- worker

**APARAVI Data Suite Platform example:**
```bash
/opt/aparavi-data-suite/platform/app/uninstall
```

**APARAVI Data Toolchain Aggregator-Collector example:**
```bash
/opt/aparavi-data-toolchain/platform/app/uninstall
```