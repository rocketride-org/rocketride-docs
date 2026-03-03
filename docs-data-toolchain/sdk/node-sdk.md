---
sidebar_position: 2
id: node-sdk
title: Node SDK
---

<head>
  <title>Node SDK - RocketRide Documentation</title>
</head>

# RocketRide Client SDK (Node)

A TypeScript/JavaScript client library for the RocketRide data processing and AI platform. This package provides both a programmatic API and a command-line interface for managing pipelines, uploading files, and processing data.

## Features

- **Pipeline Management**: Start, monitor, and control RocketRide data processing pipelines
- **File Upload**: Upload files with progress tracking and parallel processing
- **AI Chat**: Interact with RocketRide's AI capabilities
- **Real-time Monitoring**: Monitor pipeline status and metrics in real-time
- **Auto-reconnection**: Automatic reconnection with persistence support
- **Dual Module Support**: Works with both CommonJS and ES modules
- **TypeScript Support**: Full TypeScript definitions included
- **CLI Tool**: Command-line interface for pipeline management
- **Browser Support**: Works in both Node.js and browser environments

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [CLI Basics](#cli-basics)
- [API Reference](#api-reference)
- [Pipeline Configuration](#pipeline-configuration)
- [Complete Examples](#complete-examples)
- [Troubleshooting](#troubleshooting)

## Installation

```bash
npm install rocketride
```

Or install globally for CLI access:

```bash
npm install -g rocketride
```

## Quick Start

### Send Your First Request

Create a `.env` file:

```env
ROCKETRIDE_APIKEY=your-api-key-here
ROCKETRIDE_URI=https://cloud.rocketride.ai
```

Create `quick_start.js`:

```javascript
import { RocketRideClient } from 'rocketride';

const client = new RocketRideClient({
    auth: 'your-api-key',
});

await client.connect();

// Start a pipeline
const result = await client.use({
    filepath: './pipeline.json',
});
console.log(`Pipeline started: ${result.token}`);

// Send data
const response = await client.send(result.token, 'Hello, RocketRide!');
console.log('Response:', response);

// Clean up
await client.terminate(result.token);
await client.disconnect();
```

### Using the Library

```javascript
import { RocketRideClient } from 'rocketride';

const client = new RocketRideClient({
    auth: 'your-api-key',
    uri: 'https://cloud.rocketride.ai',
});

await client.connect();

const result = await client.use({ filepath: './my-pipeline.json' });
const response = await client.send(result.token, 'Process this data');

await client.disconnect();
```

### Using the CLI

```bash
# Start a pipeline
rocketride start --pipeline ./my-pipeline.json --apikey YOUR_API_KEY

# Upload files
rocketride upload *.pdf --pipeline ./my-pipeline.json --apikey YOUR_API_KEY

# Monitor status
rocketride status --token TASK_TOKEN --apikey YOUR_API_KEY

# Use a custom server
rocketride start --pipeline ./my-pipeline.json --apikey YOUR_API_KEY --host custom.server.com --port 5565
```

## Configuration

### Environment Variables

Create a `.env` file in your project:

```env
ROCKETRIDE_APIKEY=your-api-key-here
ROCKETRIDE_URI=https://cloud.rocketride.ai
```

The client automatically reads `.env` files in Node.js. Priority order:

1. **Constructor parameters** (highest priority)
2. **`.env` file values**
3. **Default values** (`https://cloud.rocketride.ai`)

### Client Configuration

```javascript
const client = new RocketRideClient({
    auth: 'your-api-key',                         // Required: API key
    uri: 'https://cloud.rocketride.ai',           // Optional: Server URI
    persist: true,                                 // Optional: Auto-reconnect
    maxRetryTime: 30000,                           // Optional: Max retry time (ms)
    requestTimeout: 60000,                         // Optional: Request timeout (ms)
    onEvent: (event) => console.log(event),        // Optional: Event handler
    onConnected: (info) => console.log('Connected:', info),
    onDisconnected: (reason) => console.log('Disconnected:', reason),
    onConnectError: (error) => console.log('Error:', error),
    module: 'my-app',                              // Optional: Client identifier
    env: {                                         // Optional: Custom environment
        ROCKETRIDE_PROJECT_ID: 'my-project',
    },
});
```

### Environment Variable Substitution

Pipeline configurations containing `${ROCKETRIDE_*}` patterns are automatically substituted with values from `.env` or the `env` config option:

```json
{
  "project_id": "${ROCKETRIDE_PROJECT_ID}",
  "components": [
    {
      "id": "processor",
      "provider": "transform",
      "config": {
        "apiKey": "${ROCKETRIDE_APIKEY}"
      }
    }
  ]
}
```

## CLI Basics

### Start Pipeline

```bash
rocketride start [options]

Options:
  --pipeline <file>     Pipeline configuration file
  --token <token>       Existing task token (optional)
  --threads <num>       Number of threads (default: 4)
  --args <args...>      Additional arguments
  --apikey <key>        API key
  --host <hostname>     Server hostname (default: cloud.rocketride.ai)
  --port <port>         Server port (default: 80)
```

### Upload Files

```bash
rocketride upload <files...> [options]

Arguments:
  <files...>            Files, wildcards, or directories to upload

Options:
  --pipeline <file>     Pipeline file to start new task
  --token <token>       Existing task token
  --apikey <key>        API key
  --host <hostname>     Server hostname
  --port <port>         Server port
```

### Monitor Status

```bash
rocketride status [options]

Options:
  --token <token>       Task token to monitor
  --apikey <key>        API key
```

### Stop Pipeline

```bash
rocketride stop [options]

Options:
  --token <token>       Task token to stop
  --apikey <key>        API key
```

## API Reference

### Core Methods

#### Connection Management

```javascript
// Connect to server
await client.connect();

// Check connection status
const isConnected = client.isConnected();

// Disconnect
await client.disconnect();

// Update connection params at runtime
await client.setConnectionParams({ uri: 'https://new-server.com', auth: 'new-key' });
```

#### Pipeline Execution

```javascript
// Start pipeline from file
const result = await client.use({
    filepath: './pipeline.json',
    threads: 4,
    token: 'custom-token',
    args: ['--verbose'],
    ttl: 300,
    pipelineTraceLevel: 'summary',
});

// Start pipeline from object
const result = await client.use({
    pipeline: {
        source: 'source_1',
        project_id: 'my-project',
        components: [...],
    },
});

// Get pipeline status
const status = await client.getTaskStatus(result.token);

// Terminate pipeline
await client.terminate(result.token);
```

#### Data Operations

```javascript
// Send string data
const response = await client.send(token, 'Hello, World!');

// Send binary data
const buffer = new TextEncoder().encode('Binary data');
const response = await client.send(token, buffer, { name: 'data.txt' });

// Upload multiple files (browser File objects)
const files = [
    { file: fileObject1, mimetype: 'application/pdf' },
    { file: fileObject2, objinfo: { custom: 'metadata' } },
];
const results = await client.sendFiles(files, token);

// Create data pipe for streaming
const pipe = await client.pipe(token, { name: 'stream.txt' }, 'text/plain');
await pipe.open();
await pipe.write(new TextEncoder().encode('Chunk 1'));
await pipe.write(new TextEncoder().encode('Chunk 2'));
const result = await pipe.close();
```

#### AI Chat

```javascript
import { RocketRideClient, Question } from 'rocketride';

const question = new Question();
question.addQuestion('What is the main topic of this document?');

const response = await client.chat({
    token: pipelineToken,
    question: question,
});
```

#### Validation

```javascript
// Validate a pipeline configuration (no auth required)
const result = await client.validate({
    pipeline: { components: [...], project_id: '123' },
    source: 'webhook_1',
});

if (result.errors?.length) {
    console.log('Validation errors:', result.errors);
}
```

#### Event Handling

```javascript
// Subscribe to events
await client.setEvents(token, ['apaevt_status_update', 'apaevt_status_upload']);
```

#### Services

```javascript
// Get all available service definitions
const services = await client.getServices();

// Get a specific service
const ocrService = await client.getService('ocr');
```

#### Server Connectivity

```javascript
// Ping the server
await client.ping();
```

## Pipeline Configuration

### Example Pipeline

```json
{
  "source": "source_1",
  "project_id": "my-project",
  "components": [
    {
      "id": "source_1",
      "provider": "webhook",
      "config": {
        "key": "webhook://*",
        "mode": "Source"
      }
    },
    {
      "id": "processor_1",
      "provider": "llamaparse",
      "config": {
        "llamaparse.api_key": "your-key",
        "result_type": "markdown"
      },
      "input": [{ "lane": "tags", "from": "source_1" }]
    },
    {
      "id": "response_1",
      "provider": "response",
      "input": [
        { "lane": "text", "from": "source_1" },
        { "lane": "table", "from": "processor_1" }
      ]
    }
  ]
}
```

## Complete Examples

### Document Processing Workflow

```javascript
import { RocketRideClient } from 'rocketride';

async function processDocuments() {
    const client = new RocketRideClient({
        auth: process.env.ROCKETRIDE_APIKEY,
        persist: true,
        onEvent: (event) => {
            if (event.event === 'apaevt_status_update') {
                console.log('Status:', event.body.state);
            }
        },
    });

    try {
        await client.connect();

        const result = await client.use({
            filepath: './document-pipeline.json',
            threads: 4,
        });

        console.log(`Pipeline started: ${result.token}`);

        // Upload files
        const files = [
            { file: document1, mimetype: 'application/pdf' },
            { file: document2, mimetype: 'application/pdf' },
        ];
        const uploadResults = await client.sendFiles(files, result.token);
        console.log('Upload results:', uploadResults);

        // Monitor until complete
        let status;
        do {
            status = await client.getTaskStatus(result.token);
            console.log(`Progress: ${status.completedCount}/${status.totalCount}`);
            await new Promise(resolve => setTimeout(resolve, 2000));
        } while (!status.completed);

        console.log('Processing complete!');
    } finally {
        await client.disconnect();
    }
}
```

### AI Chat Integration

```javascript
import { RocketRideClient, Question } from 'rocketride';

async function chatWithAI() {
    const client = new RocketRideClient({
        auth: process.env.ROCKETRIDE_APIKEY,
    });

    await client.connect();

    const result = await client.use({ filepath: './chat-pipeline.json' });

    const question = new Question();
    question.addQuestion('What are the key insights from the uploaded documents?');

    const response = await client.chat({
        token: result.token,
        question: question,
    });

    console.log('AI Response:', response);
    await client.disconnect();
}
```

### Static Factory Method

```typescript
// Automatic connection management
const result = await RocketRideClient.withConnection(
    { auth: 'your-api-key' },
    async (client) => {
        const pipeline = await client.use({ filepath: './pipeline.json' });
        return await client.send(pipeline.token, 'Hello!');
    }
);
```

## Error Handling

```javascript
try {
    const result = await client.use({ filepath: './pipeline.json' });
} catch (error) {
    if (error.message.includes('not found')) {
        console.error('Pipeline file not found');
    } else if (error.message.includes('authentication')) {
        console.error('Invalid API key');
    } else {
        console.error('Pipeline execution failed:', error.message);
    }
}
```

## TypeScript Support

```typescript
import { RocketRideClient, PipelineConfig, TASK_STATUS } from 'rocketride';

const client = new RocketRideClient({ auth: 'your-api-key' });
await client.connect();

const result = await client.use({ filepath: './pipeline.json' });
const status: TASK_STATUS = await client.getTaskStatus(result.token);
```

## Browser Support

The client works in both Node.js and browser environments:

```javascript
import { RocketRideClient } from 'rocketride';

const client = new RocketRideClient({
    auth: 'your-api-key',
    uri: 'https://cloud.rocketride.ai',
});

// File upload in browser
const fileInput = document.getElementById('fileInput');
const files = Array.from(fileInput.files).map(file => ({ file }));
const results = await client.sendFiles(files, token);
```

## Troubleshooting

### Connection Defaults

The client connects to the RocketRide cloud service by default:
- **Default URI**: `https://cloud.rocketride.ai`
- **Local server**: `http://localhost:5565`
- **Protocol**: `wss://` (secure WebSocket, auto-negotiated)

### Common Issues

1. **Connection Failed**:
   - Verify your `ROCKETRIDE_URI` is correct
   - Check your network connection and firewall settings

2. **403 Forbidden Error**:
   - Your API key is invalid, expired, or lacks permissions
   - Get a new API key from your RocketRide account settings

3. **Pipeline Not Found**:
   - Verify the pipeline file path and JSON format
   - Use absolute paths if relative paths don't work

4. **Upload Errors**:
   - Ensure files are accessible and not too large
   - Check file permissions

5. **Authentication Errors**:
   - Verify your API key is correct (`ROCKETRIDE_APIKEY`)
   - Ensure the key has the necessary permissions

## License

MIT
