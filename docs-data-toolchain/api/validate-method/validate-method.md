---
title: "Validate Method"
date: 2025-07-29
---

<head>
  <title>Validate Method - RocketRide Documentation</title>
</head>

- [Overview](#overview)
- [Method Signature](#method-signature)
- [Parameters](#parameters)
- [Returns](#returns)
- [Throws](#throws)
- [Usage Examples](#usage-examples)
- [Pipeline Configuration Structure](#pipeline-configuration-structure)
- [Response Format](#response-format)
- [Error Handling](#error-handling)
- [Performance Considerations](#performance-considerations)
- [Security Notes](#security-notes)
- [Related Methods](#related-methods)
- [API Endpoint](#api-endpoint)

## **Overview**

The `validate` method allows you to validate pipeline configurations against the RocketRide API before executing them. This is an essential step in ensuring your data transfer tasks will run successfully.

## **Method Signature**

validate(pipelineJson)

## **Parameters**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `pipelineJson` | `object` | Yes | The pipeline configuration object to validate |

## **Returns**

- **Type**: `Promise<object>`
- **Description**: API response containing validation results

## **Throws**

- `Error`: If validation fails or network error occurs

## **Usage Examples**

### **Basic Validation**

```
const AparaviDTC = require('aparavi-dtc-node-sdk');

const client = new AparaviDTC('your-api-key');

async function validatePipeline() {
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
    const result = await client.validate(pipeline);
    console.log('Validation successful:', result);
  } catch (error) {
    console.error('Validation failed:', error.message);
  }
}

validatePipeline();
```

## **Pipeline Configuration Structure**

The `pipelineJson` parameter should follow this structure:

```
{
  pipeline: {
    components: [
      {
        name: string,           // Component name
        provider: string,       // Provider type (e.g., 'file', 'webhook')
        config: object          // Provider-specific configuration
      }
    ]
  }
}
```

### **Common Provider Types**

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

## **Response Format**

### **Successful Validation**

```
{
  status: 'valid',
  message: 'Pipeline configuration is valid',
  timestamp: '2024-01-15T10:30:00Z'
}
```

### **Failed Validation**

```
{
  status: 'invalid',
  errors: [
    {
      component: 'source',
      field: 'path',
      message: 'Path does not exist or is not accessible'
    }
  ],
  timestamp: '2024-01-15T10:30:00Z'
}
```

## **Error Handling**

### **Common Validation Errors**

#### **Invalid Component Configuration**

**Error:** Component 'source' has invalid configuration `Error: Error validating pipeline: Invalid component configuration`

#### **Missing Required Fields**

**Error:** Missing required field 'path' in component 'source' `Error: Error validating pipeline: Missing required field 'path'`

#### **Network Errors**

**Error:** Unable to reach validation service `Error: Error validating pipeline: Network timeout`

## **Performance Considerations**

- **Validation Time**: Validation typically completes within 1-3 seconds
- **Network Dependency**: Requires internet connection to reach RocketRide API
- **Caching**: Consider caching validation results for repeated configurations
- **Batch Validation**: Validate multiple pipelines sequentially, not in parallel

## **Security Notes**

- **API Key**: Your API key is sent with each validation request
- **HTTPS**: All validation requests use HTTPS encryption
- **No Data Transfer**: Validation does not transfer any actual data
- **Read-Only**: Validation is a read-only operation

## **Related Methods**

- [`startTask()`](../starttask-method/starttask-method.md) - Start a validated pipeline
- [`getTask()`](../gettask-method/gettask-method.md) - Check task status after starting
- [`deleteTask()`](../deletetask-method/deletetask-method.md) - Clean up tasks

## **API Endpoint**

This method calls the RocketRide API endpoint:

- **URL**: `POST /pipe/validate`
- **Headers**: `Authorization: your-api-key`, `Content-Type: application/json`
- **Body**: Pipeline configuration object

## **Next Steps**

**Next:** Learn how to [start tasks](../starttask-method/starttask-method.md) after successful validation.

© 2025 RocketRide. All rights reserved.
