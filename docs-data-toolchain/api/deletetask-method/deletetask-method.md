---
title: "DeleteTask Method"
date: 2025-07-29
---

<head>
  <title>DeleteTask Method - RocketRide Documentation</title>
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

The `deleteTask` method terminates and cleans up a running task. This method is essential for resource management, stopping long-running tasks, and cleaning up completed tasks to free up system resources.

## **Method Signature**

deleteTask()

## **Parameters**

**None** - uses the task token and type stored in the client instance from a previous `startTask()` call.

## **Returns**

- **Type**: `Promise<object>`
- **Description**: API response confirming task deletion

## **Throws**

- `Error`: If no task is running or network error occurs

## **Prerequisites**

#### **Required Setup**

- Must call `startTask()` before calling `deleteTask()`
- Client instance must have valid `token` and `type` properties

## **Usage Examples**

### **Basic Task Deletion**

```
const AparaviDTC = require('aparavi-dtc-node-sdk');

const client = new AparaviDTC('your-api-key');

async function deleteBasicTask() {
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
    
    // Now delete the task
    const result = await client.deleteTask();
    console.log('Task deleted successfully:', result);
    
  } catch (error) {
    console.error('Error deleting task:', error.message);
  }
}

deleteBasicTask();
```

## **Response Format**

### **Successful Task Deletion**

```
{
  data: {
    id: 'task_1234567890abcdef',
    status: 'deleted',
    deleted_at: '2024-01-15T10:45:00Z',
    message: 'Task deleted successfully'
  },
  message: 'Task deletion completed'
}
```

### **Failed Task Deletion**

```
{
  error: 'Task not found',
  message: 'The specified task does not exist or has already been deleted'
}
```

## **Error Handling**

### **Common Task Deletion Errors**

#### **No Active Task**

**Error:** No task has been started `Error: Token and type are not available. Please run startTask first.`

#### **Task Not Found**

**Error:** Task has already been deleted `Error: Error deleting task: Task not found`

#### **Task Already Completed**

**Error:** Cannot delete completed task `Error: Error deleting task: Cannot delete completed task`

#### **Authentication Errors**

**Error:** Invalid API key `Error: Error deleting task: Unauthorized`

## **Performance Considerations**

- **Immediate Deletion**: Deleting tasks immediately frees up resources
- **Batch Deletion**: Consider deleting multiple tasks in sequence
- **Rate Limiting**: Be mindful of API rate limits when deleting many tasks
- **Resource Cleanup**: Always clean up tasks to prevent resource leaks

## **Security Notes**

- **API Key**: Your API key is sent with each request
- **HTTPS**: All requests use HTTPS encryption
- **Access Control**: Only the task creator can delete their tasks
- **Audit Trail**: Consider keeping completed tasks for audit purposes

## **Related Methods**

- [`startTask()`](../starttask-method/starttask-method.md) - Start a task before deleting
- [`getTask()`](../gettask-method/gettask-method.md) - Check task status before deletion

## **API Endpoint**

This method calls the RocketRide API endpoint:

- **URL**: `DELETE /task`
- **Headers**: `Authorization: your-api-key`
- **Query Parameters**: `token={client.token}&type={client.type}`

## **Next Steps**

**Next:** Learn how to [monitor task status](../gettask-method/gettask-method.md) after deletion.

© 2025 RocketRide. All rights reserved.
