---
title: "Object Storage (S3 compatible)"
date: 2025-05-18
---

<head>
  <title>Object Storage (S3 compatible) - RocketRide Documentation</title>
</head>

The Object Storage node connects to any S3-compatible service endpoint, allowing users to retrieve data from custom object storage systems. Configuration requires the service URL and access credentials. 


### Required Configuration

- URL - Enter the URL of the object storage service.
    - Example - https://\[dnsname\].com
    - This should be the base endpoint used to access the S3-compatible storage.
- Access Key - Provide the access key for the object storage service.
    - This key authorizes requests and is issued by the service provider.
- Secret Key - Provide the secret key that pairs with the access key.
    - This is required to authenticate access to the object storage.

### Data Path Configuration

- Path to Your Data - Specify which folders or buckets to include using the format
    - Accepted Formats
        - \[bucket\_name\]/\[folder\_name\]/\*
        - \[bucket\_name\]/\*
    - Use the field labeled Include path\* to define one or more include paths.
    - Click Add Another Folder to include multiple paths.
- Path to Exclude - Define folders or buckets to exclude using the same format
    - Accepted Formats (same as Include Paths)
        - \[bucket\_name\]/\[folder\_name\]/\*
        - \[bucket\_name\]/\*
    - Click Add Another Folder to define additional exclusions.
