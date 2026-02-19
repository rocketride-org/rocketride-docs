---
sidebar_position: 2
id: node-sdk
title: Node SDK
---

<head>
  <title>Node SDK - RocketRide Documentation</title>
</head>

# RocketRide Client SDK (Node)

A comprehensive TypeScript/JavaScript client library for the RocketRide data processing and AI platform. This package provides both a programmatic API and a command-line interface for managing RocketRide pipelines, uploading files, and processing data.

## Features

- **Pipeline Management**: Start, monitor, and control RocketRide data processing pipelines
- **File Upload**: Upload files with progress tracking and parallel processing
- **AI Chat**: Interact with RocketRide's AI capabilities
- **Real-time Monitoring**: Monitor pipeline status and metrics in real-time
- **Auto-reconnection**: Automatic reconnection with persistence support
- **Dual Module Support**: Works with both CommonJS and ES modules
- **TypeScript Support**: Full TypeScript definitions included
- **CLI Tool**: Command-line interface for easy pipeline management

## Installation

```bash
npm install aparavi-client
```

Or install globally for CLI access:

```bash
npm install -g aparavi-client
```

## Quick Start

### Using the CLI

The CLI automatically connects to the RocketRide cloud service at `eaas.aparavi.com:443` by default.

```bash
# Start a pipeline (automatically uses eaas.aparavi.com)
aparavi start --pipeline ./my-pipeline.json --apikey YOUR_API_KEY

# Upload files
aparavi upload *.pdf --pipeline ./my-pipeline.json --apikey YOUR_API_KEY

# Monitor status
aparavi status --token TASK_TOKEN --apikey YOUR_API_KEY

# Use a different server
aparavi start --pipeline ./my-pipeline.json --apikey YOUR_API_KEY --host custom.server.com --port 443
```

### Using the Library

```javascript
import { AparaviClient } from 'aparavi-client';

const client = new AparaviClient({
  auth: 'your-api-key',
  uri: 'wss://eaas.aparavi.com:443'  // optional, this is the default
});

await client.connect();

// Start a pipeline
const result = await client.use({
  filepath: './my-pipeline.json'
});

// Send data
const response = await client.send(result.token, "Hello, Aparavi!");

await client.disconnect();
```

## Configuration

### Environment Variables

Create a `.env` file in your project:

```bash
APARAVI_APIKEY=your-api-key-here
APARAVI_URI=wss://eaas.aparavi.com:443
APARAVI_PIPELINE=./my-pipeline.json
APARAVI_TOKEN=existing-task-token
```

### Client Configuration

```javascript
const client = new AparaviClient({
  auth: 'your-api-key',                    // Required: API key
  uri: 'wss://eaas.aparavi.com:443',      // Optional: Server URI (default: eaas.aparavi.com:443)
  persist: true,                          // Optional: Auto-reconnect
  reconnectDelay: 1000,                   // Optional: Reconnect delay (ms)
  onEvent: (event) => console.log(event), // Optional: Event handler
  onConnected: () => console.log('Connected!'),
  onDisconnected: (reason) => console.log('Disconnected:', reason),
  env: {                                 // Optional: Custom environment
    APARAVI_PROJECT_ID: 'my-project'
  }
});
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
```

#### Pipeline Execution

```javascript
// Start pipeline from file
const result = await client.use({
  filepath: './pipeline.json',
  threads: 4,
  token: 'custom-token',  // optional
  args: ['--verbose']     // optional
});

// Start pipeline from object
const result = await client.use({
  pipeline: {
    source: "source_1",
    components: [...]
  }
});

// Get pipeline status
const status = await client.getTaskStatus(result.token);

// Terminate pipeline
await client.terminate(result.token);
```

#### Data Operations

```javascript
// Send string data
const response = await client.send(token, "Hello, World!");

// Send binary data
const buffer = new TextEncoder().encode("Binary data");
const response = await client.send(token, buffer, {
  filename: "data.txt",
  size: buffer.length
});

// Upload multiple files
const files = [
  { file: fileObject1, mimetype: 'application/pdf' },
  { file: fileObject2, objinfo: { custom: 'metadata' } }
];
const results = await client.sendFiles(files, token, 5); // max 5 concurrent

// Create data pipe for streaming
const pipe = await client.pipe(token, { filename: 'stream.txt' });
await pipe.open();
await pipe.write(new TextEncoder().encode("Chunk 1"));
await pipe.write(new TextEncoder().encode("Chunk 2"));
const result = await pipe.close();
```

#### AI Chat

```javascript
import { Question } from 'aparavi-client-typescript';

const question = new Question({
  text: "What is the main topic of this document?",
  context: "Please analyze the uploaded content"
});

const response = await client.chat({
  token: pipelineToken,
  question: question
});
```

#### Event Handling

```javascript
// Subscribe to events
await client.setEvents(token, ['apaevt_status_update', 'apaevt_status_upload']);

// Handle events
client.onEvent = (event) => {
  console.log('Event received:', event.event, event.body);
};
```

### CLI Commands

#### Start Pipeline

```bash
aparavi start [options]

Options:
  --pipeline <file>     Pipeline configuration file
  --token <token>      Existing task token (optional)
  --threads <num>      Number of threads (default: 4)
  --args <args...>     Additional arguments
  --apikey <key>       API key
  --host <hostname>    Server hostname (default: eaas.aparavi.com)
  --port <port>        Server port (default: 443)
```

#### Upload Files

```bash
aparavi upload <files...> [options]

Arguments:
  <files...>           Files, wildcards, or directories to upload

Options:
  --pipeline <file>    Pipeline file to start new task
  --token <token>      Existing task token
  --max-concurrent <num>  Max concurrent uploads (default: 5)
  --threads <num>      Number of threads (default: 4)
  --apikey <key>       API key
  --host <hostname>    Server hostname (default: eaas.aparavi.com)
  --port <port>        Server port (default: 443)
```

#### Monitor Status

```bash
aparavi status [options]

Options:
  --token <token>      Task token to monitor
  --apikey <key>       API key
  --host <hostname>    Server hostname (default: eaas.aparavi.com)
  --port <port>        Server port (default: 443)
```

#### Stop Pipeline

```bash
aparavi stop [options]

Options:
  --token <token>      Task token to stop
  --apikey <key>       API key
  --host <hostname>    Server hostname (default: eaas.aparavi.com)
  --port <port>        Server port (default: 443)
```

## Pipeline Configuration

### Example Pipeline (LlamaParse)

```json
{
  "pipeline": {
    "source": "source_1",
    "components": [
      {
        "id": "source_1",
        "provider": "webhook",
        "config": {
          "key": "webhook://*",
          "mode": "Source",
          "parameters": {
            "endpoint": "/pipe/process",
            "port": 5566
          }
        }
      },
      {
        "id": "llamaparse_1",
        "provider": "llamaparse",
        "config": {
          "llamaparse.api_key": "your-llamaparse-key",
          "result_type": "markdown"
        },
        "input": [
          {
            "lane": "tags",
            "from": "source_1"
          }
        ]
      },
      {
        "id": "response_1",
        "provider": "response",
        "input": [
          {
            "lane": "text",
            "from": "source_1"
          },
          {
            "lane": "table",
            "from": "llamaparse_1"
          }
        ]
      }
    ]
  }
}
```

### Example Pipeline (OCR)

```json
{
  "pipeline": {
    "source": "source_1",
    "components": [
      {
        "id": "source_1",
        "provider": "filesys",
        "config": {
          "include": [
            {
              "path": "/path/to/files",
              "ocr": true,
              "classify": true,
              "vectorize": false
            }
          ]
        }
      },
      {
        "id": "agetocr_1",
        "provider": "agetocr",
        "config": {
          "api_key": "your-agetocr-key"
        },
        "input": [
          {
            "lane": "tags",
            "from": "source_1"
          }
        ]
      }
    ]
  }
}
```

## Complete Examples

### Document Processing Workflow

```javascript
import { AparaviClient } from 'aparavi-client';

async function processDocuments() {
  const client = new AparaviClient({
    auth: process.env.APARAVI_APIKEY,
    persist: true,
    onEvent: (event) => {
      if (event.event === 'apaevt_status_update') {
        console.log('Status:', event.body.state);
      }
    }
  });

  try {
    await client.connect();
    
    // Start pipeline
    const result = await client.use({
      filepath: './llamaparse-pipeline.json',
      threads: 4
    });
    
    console.log(`Pipeline started: ${result.token}`);
    
    // Upload files
    const files = [
      { file: document1, mimetype: 'application/pdf' },
      { file: document2, mimetype: 'application/pdf' }
    ];
    
    const uploadResults = await client.sendFiles(files, result.token, 5);
    console.log('Upload results:', uploadResults);
    
    // Monitor until complete
    let status;
    do {
      status = await client.getTaskStatus(result.token);
      console.log(`Progress: ${status.completedCount}/${status.totalCount}`);
      await new Promise(resolve => setTimeout(resolve, 2000));
    } while (status.state < 5);
    
    console.log('Processing complete!');
    
  } finally {
    await client.disconnect();
  }
}

processDocuments();
```

### AI Chat Integration

```javascript
import { AparaviClient, Question } from 'aparavi-client';

async function chatWithAI() {
  const client = new AparaviClient({
    auth: process.env.APARAVI_APIKEY
  });

  await client.connect();
  
  // Start a chat-enabled pipeline
  const result = await client.use({
    filepath: './chat-pipeline.json'
  });
  
  // Ask questions
  const question = new Question({
    text: "What are the key insights from the uploaded documents?",
    context: "Please provide a summary of the main findings"
  });
  
  const response = await client.chat({
    token: result.token,
    question: question
  });
  
  console.log('AI Response:', response);
  
  await client.disconnect();
}
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

The package includes full TypeScript definitions:

```typescript
import { AparaviClient, PipelineConfig, TASK_STATUS } from 'aparavi-client';

const client: AparaviClient = new AparaviClient({
  auth: 'your-api-key'
});

const status: TASK_STATUS = await client.getTaskStatus(token);
```

## Browser Support

The client works in both Node.js and browser environments:

```javascript
// Browser usage
import { AparaviClient } from 'aparavi-client';

const client = new AparaviClient({
  auth: 'your-api-key',
  uri: 'wss://eaas.aparavi.com:443'
});

// File upload in browser
const fileInput = document.getElementById('fileInput');
const files = Array.from(fileInput.files).map(file => ({ file }));

const results = await client.sendFiles(files, token);
```

## Troubleshooting

### Connection Defaults

The client automatically connects to the RocketRide cloud service:
- **Default Host**: `eaas.aparavi.com`
- **Default Port**: `443`
- **Protocol**: `wss://` (secure WebSocket)

You don't need to specify these unless connecting to a custom server.

### Common Issues

1. **Connection Failed (ws:// instead of wss://)**: 
   - Ensure you're using the latest version: `npm install -g aparavi-client@latest`
   - Or install from local build: `npm install -g ./dist/aparavi-client-1.0.4.tgz`

2. **403 Forbidden Error**: 
   - Your API key is invalid, expired, or lacks permissions
   - Get a new API key from your RocketRide account settings

3. **301 Redirect Error**: 
   - You're using an old version of the package
   - Update to the latest version

4. **Pipeline Not Found**: 
   - Verify the pipeline file path and JSON format
   - Use absolute paths if relative paths don't work

5. **Upload Errors**: 
   - Ensure files are accessible and not too large
   - Check file permissions

6. **Authentication Errors**: 
   - Verify your API key is correct
   - Ensure the key has the necessary permissions

### Debug Mode

Enable debug logging:

```javascript
const client = new AparaviClient({
  auth: 'your-api-key',
  // Debug messages will be logged to console
});
```

## License

MIT License - see LICENSE file for details.

## Changelog

### v1.0.4
- Changed default server to `eaas.aparavi.com:443`
- Fixed WebSocket protocol handling (wss:// for secure connections)
- Improved URI construction and port handling
- Updated package name to `aparavi-client`

### v1.0.3
- Port parsing improvements
- Protocol detection fixes

### v1.0.2
- Initial public release with cloud defaults

### v1.0.1
- Initial release
- Full TypeScript support
- CLI interface
- Pipeline management
- File upload with progress tracking
- AI chat integration
- Real-time monitoring
