---
title: "Aparavi Core Version 2.19.1"
date: 2025-01-15
---

In this minor release, we've added new features that let users connect their Google and Microsoft personal drives or email accounts using Google or Microsoft OAuth authentication. This helps users better understand their unstructured data, find valuable information, and reduce costs by removing unnecessary data duplicates. We’ve also introduced the ability to flatten nested folder paths, making data migration simpler and helping you access your files more quickly and efficiently.

## Flatten out on file path for Data Action - Exports

This feature simplifies long, nested file paths by converting them into a flat structure, making it easier for prospects or customers to find their documents in one folder after migration quickly.

For example, if your data was originally stored in **C:\\Test Data\\PII\\Text Files**, it can be moved to **C:\\Text Files** if that's the destination folder you choose for all your files.

We’ve introduced a new toggle called **“Flatten Folder Structure”** in the **Data Action - Export** feature. When enabled, all files are copied directly to the selected folder, without retaining any nested folder structure. This feature is available only for automated data actions and does not apply to manual exports.


## Better User Experience for Platform Activation Status

We’ve introduced automation to streamline the activation process for the platform and hybrid during installation. This allows users to set up APARAVI in just a few minutes without needing to worry about activation codes. The installation process automatically activates the platform and hybrid on their machine.

To confirm activation, you can now visit the **Activate** tab on the platform and hybrid, where you’ll find a clear indication of successful activation.

This process also applies to our traditional **On-Prem Connected Deployment**, where the platform, hybrid, and collectors are installed separately. In these cases, activation codes are received via email and can be entered into the product. Once the code is provided, users can check the **Activate** tab of the platform, hybrid, or collector to confirm that activation has been completed successfully.

