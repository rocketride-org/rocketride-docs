---
title: "StartTask Method"
date: 2025-07-29
---

<head>
  <title>StartTask Method - Aparavi Data Toolchain Documentation</title>
</head>

- [Overview](#overview)
- [Method Signature](#method-signature)
- [Parameters](#parameters)
- [Returns](#returns)
- [Throws](#throws)
- [Side Effects](#side-effects)
- [Usage Examples](#usage-examples)
- [Pipeline Configuration Structure](#pipeline-configuration-structure)
- [Response Format](#response-format)
- [Error Handling](#error-handling)
- [Task Lifecycle](#task-lifecycle)
- [Performance Considerations](#performance-considerations)
- [Security Notes](#security-notes)
- [Related Methods](#related-methods)
- [API Endpoint](#api-endpoint)

## **Overview**

The `startTask` method initiates a new data transfer task using the provided pipeline configuration. This method validates the pipeline internally and creates a task that can be monitored and managed throughout its lifecycle.

## **Method Signature**

startTask(pipelineJson)

## **Parameters**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `pipelineJson` | `object` | Yes | The pipeline configuration object to execute |

## **Returns**

- **Type**: `Promise<object>`
- **Description**: API response containing task details including token and type

## **Throws**

- `Error`: If task creation fails or network error occurs

## **Side Effects**

#### **Client State Changes**

After successful execution, the client instance stores:

- `client.token` - Task token for subsequent operations
- `client.type` - Task type for subsequent operations
- `client.isWebhook` - Boolean indicating if webhook is configured

## **Usage Examples**

### **Basic Task Creation**

```
const AparaviDTC = require('aparavi-dtc-node-sdk');

const client = new AparaviDTC('your-api-key');

async function startBasicTask() {
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

  try {
    const result = await client.startTask(pipeline);
    console.log('Task started successfully:', result.data);
    console.log('Task token:', client.token);
    console.log('Task type:', client.type);
  } catch (error) {
    console.error('Failed to start task:', error.message);
  }
}

startBasicTask();
```

## **Pipeline Configuration Structure**

The `pipelineJson` parameter should follow this structure:

```
{
  pipeline: {
    components: [
      {
        name: string,           // Component name
        provider: string,       // Provider type
        config: object          // Provider-specific configuration
      }
    ]
  }
}
```

### **Supported Provider Types**

#### **File Provider**

```
{
  name: 'source',
  provider: 'file',
  config: {
    path: '/path/to/files'
  }
}
```

#### **Webhook Provider**

```
{
  name: 'destination',
  provider: 'webhook',
  config: {
    url: 'https://your-webhook.com/endpoint'
  }
}
```

#### **Database Provider**

```
{
  name: 'database',
  provider: 'database',
  config: {
    connection: 'postgresql://user:pass@host:port/db',
    query: 'SELECT * FROM table'
  }
}
```

## **Response Format**

### **Successful Task Creation**

```
{
  data: {
    id: 'task_1234567890abcdef',
    token: 'tok_abcdef1234567890',
    type: 'data_transfer',
    status: 'created',
    created_at: '2024-01-15T10:30:00Z'
  },
  message: 'Task created successfully'
}
```

### **Failed Task Creation**

```
{
  error: 'Invalid pipeline configuration',
  details: [
    {
      component: 'source',
      field: 'path',
      message: 'Path does not exist'
    }
  ]
}
```

## **Error Handling**

### **Common Task Creation Errors**

#### **Invalid Pipeline Configuration**

**Error:** Pipeline validation failed `Error: Error starting task: Invalid pipeline configuration`

#### **Authentication Errors**

**Error:** Invalid API key `Error: Error starting task: Unauthorized`

#### **Resource Errors**

**Error:** Insufficient resources `Error: Error starting task: Resource limit exceeded`

## **Task Lifecycle**

### **Task States**

1. **Created** - Task has been created and is initializing
2. **Running** - Task is actively processing data
3. **Completed** - Task has finished successfully
4. **Failed** - Task encountered an error and stopped
5. **Cancelled** - Task was manually cancelled

## **Performance Considerations**

- **Task Creation Time**: Typically 2-5 seconds
- **Resource Usage**: Tasks consume API rate limits
- **Concurrent Tasks**: Limit concurrent task creation to avoid rate limiting
- **Task Cleanup**: Always clean up completed tasks to free resources

## **Security Notes**

- **API Key**: Your API key is sent with each request
- **HTTPS**: All requests use HTTPS encryption
- **Token Security**: Task tokens are sensitive - don't log them in production
- **Resource Limits**: Be mindful of API rate limits and resource quotas

## **Related Methods**

- [`validate()`](../validate-method/validate-method.md) - Validate pipeline before starting
- [`getTask()`](../gettask-method/gettask-method.md) - Check task status
- [`deleteTask()`](../deletetask-method/deletetask-method.md) - Clean up tasks
- [`sendToWebhook()`](../sendtowebhook-method/sendtowebhook-method.md) - Upload files to webhook tasks

## **API Endpoint**

This method calls the Aparavi API endpoint:

- **URL**: `PUT /task`
- **Headers**: `Authorization: your-api-key`, `Content-Type: application/json`
- **Body**: Pipeline configuration object

## **Next Steps**

**Next:** Learn how to [monitor task status](../gettask-method/gettask-method.md) after starting a task.

© 2025 Aparavi. All rights reserved.
