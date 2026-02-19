---
title: "Order of Precedence for Folder Paths"
date: 2025-03-16
---

<head>
  <title>Order of Precedence for Folder Paths - Aparavi Data Suite Documentation</title>
</head>

The system prioritizes the folder path listed first in the include and exclude paths sections. In cases where multiple paths share the same root directory, the system scans the initial occurrence of the subfolder and ignores any subsequent instances. It's important to note that, following the hierarchical structure, any subfolders should be listed above the root path.

### Example:

- User wants to scan and index the \[Expense Reports\] subfolder.
- However user does not want to index the files on the C: drive.
- As a result, the \[Expense Reports\] subfolder should appear above the C:\\ drive.
- The system will scan and index the \[Expense Reports\] subfolder, since it is listed **before** the folder path that **contains** the same subfolder.

1. **Index On:** C:\\Users\\New York Office\\Expense Reports
2. **Index Off:** C:\\

![](images/file-We570PoLxL.png)

![](images/image-7-1024x440.png)

> If the subfolder path is not the first listed in the Include Paths section, so the system will only scan the subfolder using the root directory entry. The system will then skip the subfolder instance for all subsequent scans.

1. **Index Off:** C:\\
2. **Index On:** C:\\Users\\New York Office\\Expense Reports

![](images/image-9-1024x427.png)
