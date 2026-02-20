---
title: "SendToWebhook Method"
date: 2025-07-29
---

<head>
  <title>SendToWebhook Method - RocketRide Documentation</title>
</head>

- [Overview](#overview)
- [Method Signature](#method-signature)
- [Parameters](#parameters)
- [Returns](#returns)
- [Throws](#throws)
- [Prerequisites](#prerequisites)
- [Usage Examples](#usage-examples)
- [Response Format](#response-format)
- [Error Handling](#error-handling)
- [File Upload Patterns](#file-upload-patterns)
- [Performance Considerations](#performance-considerations)
- [Security Notes](#security-notes)
- [Related Methods](#related-methods)
- [API Endpoint](#api-endpoint)

## **Overview**

The `sendToWebhook` method uploads files to a webhook endpoint that was created during task initialization. This method is only available if the pipeline configuration includes a webhook component.

## **Method Signature**

sendToWebhook(fileGlob)

## **Parameters**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `fileGlob` | `string` | Yes | Glob pattern to match files for upload (e.g., './data/\*.csv') |

## **Returns**

- **Type**: `Promise<object>`
- **Description**: API response confirming file upload

## **Throws**

- `Error`: If no webhook is configured, no files match the pattern, or upload fails

## **Prerequisites**

#### **Required Setup**

- Must call `startTask()` with a pipeline that includes a webhook component
- Files matching the glob pattern must exist
- Webhook task must be in 'Running' status

## **Usage Examples**

### **Basic File Upload**

```
const AparaviDTC = require('aparavi-dtc-node-sdk');

const client = new AparaviDTC('your-api-key');

async function uploadFilesToWebhook() {
  try {
    // Start a task with webhook component
    const pipeline = {
      pipeline: {
        components: [
          {
            name: 'source',
            provider: 'file',
            config: { path: '/data/source' }
          },
          {
            name: 'destination',
            provider: 'webhook',
            config: { url: 'https://your-webhook.com/upload' }
          }
        ]
      }
    };
    
    await client.startTask(pipeline);
    console.log('Task started with webhook');
    
    // Upload all CSV files in the data directory
    const result = await client.sendToWebhook('./data/*.csv');
    console.log('Files uploaded successfully:', result);
    
  } catch (error) {
    console.error('Error uploading files:', error.message);
  }
}

uploadFilesToWebhook();
```

## **Response Format**

### **Successful File Upload**

```
{
  data: {
    files_uploaded: 5,
    total_size: 1024000,
    upload_time: '2024-01-15T10:30:00Z',
    webhook_url: 'https://your-webhook.com/upload',
    status: 'completed'
  },
  message: 'Files uploaded successfully'
}
```

### **Failed File Upload**

```
{
  error: 'No files found matching pattern',
  message: 'No files found matching glob pattern: ./nonexistent/*.txt'
}
```

## **Error Handling**

### **Common File Upload Errors**

#### **No Webhook Configured**

**Error:** Pipeline doesn't include webhook component `Error: No webhook was created for this task.`

#### **No Files Found**

**Error:** Glob pattern doesn't match any files `Error: No files found matching glob pattern: ./nonexistent/*.txt`

#### **Upload Failed**

**Error:** Network or server error during upload `Error: Webhook failed: Server responded with status 500`

## **File Upload Patterns**

### **Single File Upload**

```
// Upload a specific file
await client.sendToWebhook('./data/export.csv');
```

### **Multiple File Types**

```
// Upload files that end in the extensions csv, json, or xml
await client.sendToWebhook('./data/*.{csv,json,xml}');
```

### **Recursive Directory Upload**

```
// Upload all files in directory and subdirectories
await client.sendToWebhook('./data/**/*');
```

### **Pattern-Based Upload**

```
// Upload files with specific naming pattern
await client.sendToWebhook('./data/export_*.csv');
```

## **Performance Considerations**

- **File Size**: Large files may timeout - consider chunking
- **Network Speed**: Upload speed depends on network connection
- **Batch Size**: Multiple files are uploaded in a single request
- **Memory Usage**: Files are loaded into memory during upload

## **Security Notes**

- **File Validation**: Validate file types before upload
- **HTTPS Only**: Webhook URLs should use HTTPS
- **Access Control**: Ensure webhook endpoint is secure
- **File Permissions**: Check file accessibility before upload

## **Related Methods**

- [`startTask()`](../starttask-method/starttask-method.md) - Start a task with webhook component
- [`getTask()`](../gettask-method/gettask-method.md) - Check webhook task status
- [`deleteTask()`](../deletetask-method/deletetask-method.md) - Clean up webhook tasks

## **API Endpoint**

This method calls the RocketRide API endpoint:

- **URL**: `PUT /webhook`
- **Headers**: `Authorization: your-api-key`, `Content-Type: multipart/form-data`
- **Query Parameters**: `token={client.token}&type={client.type}`
- **Body**: Multipart form data containing files

## **Next Steps**

**Next:** Learn how to [clean up tasks](../deletetask-method/deletetask-method.md) after file uploads are complete.

© 2025 RocketRide. All rights reserved.
