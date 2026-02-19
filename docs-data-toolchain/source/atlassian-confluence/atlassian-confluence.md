---
title: "Atlassian Confluence"
date: 2025-05-18
---

<head>
  <title>Atlassian Confluence - Aparavi Data Toolchain Documentation</title>
</head>

### General

The Atlassian Confluence node is a source node in the Data Toolchain for AI. It connects to Confluence Cloud and allows users to extract page and blogpost content from defined paths.

This node requires valid authentication and clearly defined path rules for inclusion and exclusion of content.


### Required Configuration

#### Atlassian Cloud Credentials

- Atlassian URL - The base URL of your Confluence Cloud instance.
    - Example - https://yourcompany.atlassian.net/wiki
- User email - The email address associated with the Atlassian account.
- Token - A personal API token.
- Note - You can obtain a token at https://id.atlassian.com/manage-profile/security/api-tokens

#### Data Path Configuration

- Include Paths - Specify which content paths to include.
    - Accepted formats
        - \[space\_name\]/\[content\_type\]/\*
        - \[space\_name\]/\*
    - Where content\_type is either -
        - Pages
        - Blogposts
    - Use the input field labeled “Include path” to add one or more inclusion rules.
    - Click Add Another Folder to include multiple paths.
- Exclude Paths - Use this section to define paths you want to exclude from the import.
    - Accepted formats (same as the Include Paths)
        - \[space\_name\]/\[content\_type\]/\*
        - \[space\_name\]/\*
    - Click Add Another Folder to exclude additional folders.
