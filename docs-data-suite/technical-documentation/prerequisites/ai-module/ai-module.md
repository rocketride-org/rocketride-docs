---
title: "AI Module"
date: 2025-02-08
---

<head>
  <title>AI Module - Aparavi Data Suite Documentation</title>
</head>

To ensure optimal performance with the AI module, the following prerequisites must be met. These requirements cover hardware, software, network dependencies.

- Hardware Requirements
    - Processor
        - Minimum :16 @ 2,4 GHz vCPUs Intel Xeon E5-2686 v4 (Broadwell micro-architecture)
    - Memory (RAM)
        - Minimum : 64 GB RAM
    - Storage
        - Minimum: 32 gp3 GB SSD
- Software Requirements
    - Operating System
        - Supported OS:
            - Windows
            - Linux
- Network Requirements
    - Connectivity:
        - High Network Performance
    - Security
    - Firewall
        - Configure to allow communication for required ports and applications
    - Antivirus Software:
        - Locate and open your antivirus program. This can usually be found in the system tray or via the Start menu.
            - Navigate to Exclusions:
                - Within the settings menu, look for an option related to exclusions, exceptions, or similar terms. This might be found under advanced settings or security settings.
            - Add an Exclusion:
                - When prompted, enter the __**full path**__ of Qdrant.exe that you want to exclude. You may be able to browse for the directory using a file explorer window.
                    - For Windows: _C:\\Program Files\\aparavi-data-ia\\aggregator-collector\\vector\\windows\\qdrant.exe_
                    - For Linux: _/opt/aparavi-data-ia/aggregator/app/vector/linux/qdrant_

- - - - Save Changes:
                - Confirm and save your changes. Ensure the exclusion is listed in the exclusions section.
            - Verify Exclusion:
                - To ensure the exclusion is working, try accessing or running a scan in the excluded directory. The antivirus should not scan or flag any files within the specified path.
