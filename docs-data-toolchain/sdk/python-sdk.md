---
id: python-sdk
title: Python
---

<head>
  <title>Python SDK - RocketRide Documentation</title>
</head>

# RocketRide Client SDK (Python)

A Python SDK for executing RocketRide pipelines using the Debug Adapter Protocol (DAP). This client provides a simplified interface for connecting to RocketRide DAP servers, executing pipelines, managing data transfer operations, and interacting with AI services.

## Features

- **DAP-based communication** for reliable pipeline execution
- **Async/await** with full typing support
- **Pipeline execution** from JSON files or Python configuration objects
- **Streaming data pipes** with context manager support
- **Parallel file uploads** with progress events
- **AI chat** with structured JSON responses
- **Event monitoring** for real-time pipeline status
- **Automatic reconnection** with configurable persistence
- **Environment variable substitution** in pipeline configs
- **Command-line interface** for pipeline management

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [CLI Basics](#cli-basics)
- [API Reference](#api-reference)
- [Common Patterns](#common-patterns)
- [Troubleshooting](#troubleshooting)

## Installation

```bash
pip install rocketride
```

The package includes both the SDK library and a `rocketride` CLI tool.

## Quick Start

### Basic Pipeline Execution

```python
from rocketride import RocketRideClient

async with RocketRideClient(uri='https://cloud.rocketride.ai', auth='your-api-key') as client:
    # Start a pipeline from a JSON config file
    result = await client.use(filepath='pipeline.json')
    token = result['token']

    # Send data for processing
    response = await client.send(token, 'Process this text')
    print(response)

    # Terminate when done
    await client.terminate(token)
```

### Send Your First Request

Create a `.env` file:

```env
ROCKETRIDE_APIKEY=your-api-key-here
ROCKETRIDE_URI=https://cloud.rocketride.ai
```

Create `quick_start.py`:

```python
import asyncio
from rocketride import RocketRideClient

async def main():
    async with RocketRideClient() as client:
        # Start a pipeline
        result = await client.use(filepath='pipeline.json')
        token = result['token']
        print(f'Pipeline started with token: {token}')

        # Send data
        response = await client.send(token, 'Hello, RocketRide!')
        print(f'Response: {response}')

        # Clean up
        await client.terminate(token)

asyncio.run(main())
```

Run it:

```bash
python quick_start.py
```

## Configuration

### Environment Variables

Configure the client using environment variables or a `.env` file:

```env
ROCKETRIDE_APIKEY=your-api-key-here
ROCKETRIDE_URI=https://cloud.rocketride.ai
```

The client automatically reads `.env` if present. Priority order:

1. **Constructor parameters** (highest priority)
2. **`.env` file values**
3. **Default values** (`https://cloud.rocketride.ai`)

You can also pass configuration directly:

```python
client = RocketRideClient(
    uri='https://cloud.rocketride.ai',
    auth='your-api-key',
)
```

Or use `http://localhost:5565` for a local RocketRide server.

### Environment Variable Substitution in Pipelines

The SDK automatically substitutes `${ROCKETRIDE_*}` patterns in pipeline configurations with values from your `.env` file.

**Example `.env` file:**
```env
ROCKETRIDE_APIKEY=your-api-key
ROCKETRIDE_URI=https://cloud.rocketride.ai
ROCKETRIDE_PROJECT_ID=project-123
```

**Example pipeline configuration:**
```json
{
  "project_id": "${ROCKETRIDE_PROJECT_ID}",
  "components": [
    {
      "id": "data-processor",
      "provider": "transform",
      "config": {
        "apiKey": "${ROCKETRIDE_APIKEY}"
      }
    }
  ]
}
```

```python
# Variables are automatically substituted when the pipeline starts
result = await client.use(filepath='pipeline.json')
```

- Only variables starting with `ROCKETRIDE_` are substituted
- Unknown variables are left unchanged
- Works with nested objects and arrays
- Preserves the original pipeline configuration object

## CLI Basics

The package includes a `rocketride` command-line tool.

### CLI Commands

**Start a pipeline:**
```bash
rocketride start my-pipeline.json --apikey YOUR_KEY
```

**Upload files:**
```bash
rocketride upload files/*.csv --pipeline ./pipeline.json --apikey YOUR_KEY
# or with existing task token
rocketride upload files/*.csv --token TASK_TOKEN --apikey YOUR_KEY
```

**Monitor pipeline status:**
```bash
rocketride status --token TASK_TOKEN --apikey YOUR_KEY
```

**Monitor pipeline events:**
```bash
rocketride events DETAIL,SUMMARY --token TASK_TOKEN --apikey YOUR_KEY
```

**Stop a pipeline:**
```bash
rocketride stop --token TASK_TOKEN --apikey YOUR_KEY
```

## API Reference

### RocketRideClient

#### Constructor

```python
RocketRideClient(uri='', auth='', **kwargs)
```

**Parameters:**
- `uri` (str): Server URI (default: `https://cloud.rocketride.ai` or `ROCKETRIDE_URI` from env)
- `auth` (str): API key for authentication (or `ROCKETRIDE_APIKEY` from env)
- `env` (dict, optional): Dictionary of environment variables (instead of reading `.env`)
- `module` (str, optional): Custom module name for client identification
- `request_timeout` (int, optional): Default timeout in ms for individual requests
- `max_retry_time` (int, optional): Max total time in ms to keep retrying connections
- `persist` (bool, optional): Enable automatic reconnection (default: `False`)
- `on_event` (callable, optional): Event handler for server events
- `on_connected` (callable, optional): Connection established callback
- `on_disconnected` (callable, optional): Connection lost callback
- `on_connect_error` (callable, optional): Connection error callback

#### Connection Methods

**`async connect() -> None`**
Establish connection to the RocketRide server.

**`async disconnect() -> None`**
Close connection and stop automatic reconnection.

**Context manager (recommended):**
```python
async with RocketRideClient(auth='your-api-key') as client:
    # client is automatically connected
    pass
# automatically disconnected here
```

#### Execution Methods

**`async use(**kwargs) -> Dict[str, Any]`**
Start a RocketRide pipeline for processing data.

Parameters:
- `pipeline` (dict, optional): Pipeline configuration dictionary
- `filepath` (str, optional): Path to JSON/JSON5 pipeline config file
- `token` (str, optional): Custom token (auto-generated if not provided)
- `source` (str, optional): Override pipeline source component
- `threads` (int, optional): Number of processing threads
- `use_existing` (bool, optional): Reuse existing pipeline with same token
- `args` (list[str], optional): Command-line arguments to pass to pipeline
- `ttl` (int, optional): Time-to-live in seconds for idle pipelines
- `pipelineTraceLevel` (str, optional): Trace level (`'none'`, `'metadata'`, `'summary'`, `'full'`)

Returns: Dictionary containing the task `token` and other metadata.

**`async terminate(token: str) -> None`**
Terminate a running pipeline.

**`async get_task_status(token: str) -> TASK_STATUS`**
Get the current status of a running pipeline. Returns comprehensive status including `state`, `completed`, `totalCount`, `completedCount`, `failedCount`, `errors`, `warnings`, `metrics`, `tokens`, and `pipeflow`.

#### Data Methods

**`async send(token: str, data: Union[str, bytes], objinfo: Dict = None, mimetype: str = None) -> PIPELINE_RESULT`**
Send data to a running pipeline. Use with pipelines that have `webhook`, `filesys`, or `dropper` as the source. For chat/Q&A, use `chat()` instead.

**`async send_files(files: List, token: str) -> UPLOAD_RESULT`**
Upload multiple files in parallel.

Parameters:
- `files` (list): File paths or tuples `(filepath, objinfo)` or `(filepath, objinfo, mimetype)`
- `token` (str): Task token

**`async pipe(token: str, objinfo: Dict = None, mime_type: str = None, provider: str = None) -> DataPipe`**
Create a streaming data pipe.

#### Chat Methods

**`async chat(token: str, question: Question) -> PIPELINE_RESULT`**
Ask a question to RocketRide's AI. Use with pipelines that have `chat` as the source.

```python
from rocketride import Question

question = Question()
question.addQuestion('What are the key findings?')
response = await client.chat(token=token, question=question)
```

#### Validation Methods

**`async validate(pipeline: dict, source: str = None) -> Dict[str, Any]`**
Validate a pipeline configuration. Authentication is not required.

#### Event Methods

**`async set_events(token: str, event_types: List[str]) -> None`**
Subscribe to specific event types from the server.

### DataPipe

Created via `client.pipe()`. Provides a stream-like interface for uploading data.

**`async open() -> DataPipe`** — Open the pipe for writing.
**`async write(buffer: bytes) -> None`** — Write data (can be called multiple times).
**`async close() -> PIPELINE_RESULT`** — Close the pipe and get results.

Supports `async with` context manager:

```python
async with await client.pipe(token, mime_type='text/csv') as pipe:
    await pipe.write(csv_data.encode())
    result = await pipe.close()
```

### Question

Question builder for AI chat operations.

```python
from rocketride import Question

question = Question(expectJson=True)
question.addQuestion('Extract email addresses')
question.addInstruction('Format', 'Return as a JSON array')
question.addExample('Find contacts', {'emails': ['john@company.com']})
question.addContext('Contact us at john@company.com or 555-1234')
```

**Methods:** `addQuestion()`, `addInstruction()`, `addExample()`, `addContext()`, `addHistory()`, `addDocument()`, `addFilter()`

## Common Patterns

### Persistent Connection with Auto-Reconnect

```python
from rocketride import RocketRideClient

async def on_connected(info):
    print(f'Connected: {info}')

async def on_disconnected(reason, has_error):
    if has_error:
        print(f'Connection lost: {reason}')

client = RocketRideClient(
    auth='your-api-key',
    persist=True,
    on_connected=on_connected,
    on_disconnected=on_disconnected,
)

await client.connect()
# Client will automatically reconnect if connection is lost
```

### Data Transfer with Pipes

```python
import json

async with await client.pipe(token=token, mime_type='application/json') as pipe:
    for item in data_items:
        await pipe.write(json.dumps(item).encode())
    results = await pipe.close()
```

### Bulk File Upload with Progress

```python
from rocketride import RocketRideClient

async def handle_events(event):
    if event['event'] == 'apaevt_status_upload':
        body = event['body']
        if body['action'] == 'write':
            pct = (body['bytes_sent'] / body['file_size']) * 100
            print(f"{body['filepath']}: {pct:.1f}%")

client = RocketRideClient(auth='your-api-key', on_event=handle_events)
await client.connect()

result = await client.use(filepath='pipeline.json')
token = result['token']

files = ['doc1.pdf', 'data.csv', 'report.docx']
results = await client.send_files(files, token)

await client.disconnect()
```

### AI Chat with Structured JSON Responses

```python
from rocketride import RocketRideClient, Question

async with RocketRideClient(auth='your-api-key') as client:
    result = await client.use(filepath='chat_pipeline.json')
    token = result['token']

    question = Question(expectJson=True)
    question.addQuestion('Extract email addresses and phone numbers')
    question.addExample(
        'Find contacts',
        {'emails': ['john@company.com'], 'phones': ['555-1234']},
    )
    question.addContext('Contact us at john@company.com or 555-1234')

    response = await client.chat(token=token, question=question)
```

### Event Monitoring

```python
from rocketride import RocketRideClient
import asyncio

async def handle_events(event):
    event_type = event['event']
    body = event['body']
    if event_type == 'apaevt_status_upload':
        if body['action'] == 'write':
            progress = (body['bytes_sent'] / body['file_size']) * 100
            print(f'Upload progress: {progress:.1f}%')

client = RocketRideClient(auth='your-api-key', on_event=handle_events)
await client.connect()

result = await client.use(filepath='pipeline.json')
await client.set_events(result['token'], ['apaevt_status_upload'])

while True:
    status = await client.get_task_status(result['token'])
    if status['completed']:
        break
    await asyncio.sleep(1)
```

## Troubleshooting

### Error Handling

```python
from rocketride import RocketRideClient, RocketRideException

try:
    async with RocketRideClient(auth='your-api-key') as client:
        result = await client.use(filepath='pipeline.json')
        print(f'Pipeline started: {result["token"]}')
except RocketRideException as e:
    print(f'RocketRide Error: {e}')
except ConnectionError as e:
    print(f'Connection Error: {e}')
except Exception as e:
    print(f'Error: {e}')
```

### Common Issues

**Connection Failed**:
- Verify your `ROCKETRIDE_URI` is correct
- For local servers: `http://localhost:5565`
- For cloud: `https://cloud.rocketride.ai`
- Check your network connection and firewall settings

**403 Forbidden Error**:
- Your API key is invalid, expired, or lacks permissions
- Get a new API key from your RocketRide account settings

**Pipeline Not Found**:
- Verify the pipeline file path and JSON format
- Use absolute paths if relative paths don't work

**Upload Errors**:
- Ensure files are accessible and not too large
- Check file permissions

## Requirements

- Python 3.8 or higher
- Valid API key for authentication

## License

MIT
