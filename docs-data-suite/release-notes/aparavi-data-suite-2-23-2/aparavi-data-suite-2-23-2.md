---
title: "Aparavi Core Version 2.23.2"
date: 2025-11-11
---

## Improvements
- Enhanced performance for OneDrive/SharePoint scans.
- Reports now run as background tasks with cached results for faster access.
- Optimized query performance for metadata object fields.
- Improved performance of file categories queries at scale.
- Added better control over InnoDB buffer pool size.

## Bug Fixes
- Fixed issue where editing Confluence credentials in policy caused scans to fail.
- Resolved problem preventing adding or changing policies.
- Fixed installation error with unknown cipher during platform install.
- Corrected issue where semantic search was not working.
- Resolved excessive warnings from Confluence data actions.
- Fixed SMB package compatibility issues with Ubuntu 24.04.
- Addressed error setting new version string in registry after update.
- Fixed warnings on fetch permissions.
- Corrected false error messages for AWS source in the engine.
- Improved FileLookup modal (Trivial data) performance to reduce slow loading.