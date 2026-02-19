---
title: "GetTask Method"
date: 2025-07-29
---

<head>
  <title>GetTask Method - Aparavi Data Toolchain Documentation</title>
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
- [Performance Considerations](#performance-considerations)
- [Security Notes](#security-notes)
- [Related Methods](#related-methods)
- [API Endpoint](#api-endpoint)

## **Overview**

The `getTask` method retrieves the current status and details of a running task. This method is essential for monitoring task progress, checking completion status, and gathering task metadata.

## **Method Signature**

getTask()

## **Parameters**

**None** - uses the task token and type stored in the client instance from a previous `startTask()` call.

## **Returns**

- **Type**: `Promise<object>`
- **Description**: API response containing task status and details

## **Throws**

- `Error`: If no task is running or network error occurs

## **Prerequisites**

#### **Required Setup**

- Must call `startTask()` before calling `getTask()`
- Client instance must have valid `token` and `type` properties

## **Usage Examples**

### **Basic Task Status Check**

```
const AparaviDTC = require('aparavi-dtc-node-sdk');

const client = new AparaviDTC('your-api-key');

async function checkTaskStatus() {
  try {
    // First start a task
    const pipeline = {
      pipeline: {
        components: [
          {
            name: 'source',
            provider: 'file',
            config: { path: '/data/source' }
          }
        ]
      }
    };
    
    await client.startTask(pipeline);
    console.log('Task started with token:', client.token);
    
    // Now check the status
    const status = await client.getTask();
    console.log('Task status:', status.data.status);
    console.log('Task details:', status.data);
    
  } catch (error) {
    console.error('Error checking task status:', error.message);
  }
}

checkTaskStatus();
```

## **Response Format**

### **Successful Task Status Response**

```
{
  data: {
    id: 'task_1234567890abcdef',
    status: 'Running',
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-15T10:35:00Z',
    progress: 45,
    files_processed: 150,
    total_files: 300,
    error: null,
    metadata: {
      source_path: '/data/source',
      destination_url: 'https://webhook.com/upload'
    }
  },
  message: 'Task status retrieved successfully'
}
```

### **Task Status Values**

| Status | Description |
| --- | --- |
| `Created` | Task has been created and is initializing |
| `Running` | Task is actively processing data |
| `Completed` | Task has finished successfully |
| `Failed` | Task encountered an error and stopped |
| `Cancelled` | Task was manually cancelled |
| `Paused` | Task is temporarily paused |

### **Failed Response**

```
{
  error: 'Task not found',
  message: 'The specified task does not exist or has been deleted'
}
```

## **Error Handling**

### **Common Task Status Errors**

#### **No Active Task**

**Error:** No task has been started `Error: Token and type are not available. Please run startTask first.`

#### **Task Not Found**

**Error:** Task has been deleted or expired `Error: Error getting task status: Task not found`

#### **Authentication Errors**

**Error:** Invalid API key `Error: Error getting task status: Unauthorized`

## **Performance Considerations**

- **Polling Frequency**: Don't poll too frequently
- **Rate Limiting**: Be mindful of API rate limits
- **Timeout Handling**: Always implement timeouts for long-running tasks
- **Error Recovery**: Implement retry logic for transient errors

## **Security Notes**

- **API Key**: Your API key is sent with each request
- **HTTPS**: All requests use HTTPS encryption
- **Token Security**: Task tokens are sensitive - don't log them in production
- **Access Control**: Only the task creator can access task status

## **Related Methods**

- [`startTask()`](../starttask-method/starttask-method.md) - Start a task before checking status
- [`deleteTask()`](../deletetask-method/deletetask-method.md) - Clean up completed tasks
- [`sendToWebhook()`](../sendtowebhook-method/sendtowebhook-method.md) - Upload files to webhook tasks

## **API Endpoint**

This method calls the Aparavi API endpoint:

- **URL**: `GET /task`
- **Headers**: `Authorization: your-api-key`
- **Query Parameters**: `token={client.token}&type={client.type}`

## **Next Steps**

**Next:** Learn how to [delete tasks](../deletetask-method/deletetask-method.md) when they're no longer needed.

© 2025 Aparavi. All rights reserved.
