---
title: "MCP Server"
date: 2025-10-20
---

<head>
  <title>RocketRide MCP Server - RocketRide Documentation</title>
</head>

# RocketRide MCP Server

A Python [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that integrates with the RocketRide Platform. It exposes RocketRide data processing tools to LLMs, allowing them to stream local files directly to RocketRide for advanced processing (OCR, classification, PII detection, etc.).

## **Overview**

The RocketRide MCP server provides two types of capabilities:

1. **Built-in Tools**: Ready-to-use tools that require no pipeline setup (e.g., `RocketRide_Document_Processor`)
2. **Dynamic Pipeline Tools**: Any running tasks/pipelines in your RocketRide account are automatically discovered and exposed as MCP tools

This enables Language Models to leverage the full power of RocketRide's data processing capabilities directly from your AI client (Claude Desktop, Cursor, etc.).

## **Features**

- Built-in document processing tool (`RocketRide_Document_Processor`)
- Dynamic tool discovery from running pipeline tasks
- Retry logic with exponential backoff (5 attempts) for convenience pipelines
- Async processing support via the `rocketride` Python SDK
- MCP-compliant stdio interface
- Works with Claude Desktop, Cursor, and any MCP-compatible client

## **Installation**

### **Option 1: Using pipx (Recommended)**

Isolate the server environment:

```bash
pipx install rocketride-mcp
```

### **Option 2: Using pip**

Install into your current environment:

```bash
pip install rocketride-mcp
```

**Requirements:** Python 3.10+, `rocketride-client>=1.1.0`

## **Configuration**

Add the server to your MCP host configuration (e.g., `mcp.json` for Cursor, `claude_desktop_config.json` for Claude Desktop).

You will need your RocketRide API key and server URI.

```json
{
  "mcpServers": {
    "rocketride": {
      "command": "rocketride-mcp",
      "args": [],
      "env": {
        "ROCKETRIDE_URI": "https://cloud.rocketride.ai",
        "ROCKETRIDE_AUTH": "your-api-key-here"
      }
    }
  }
}
```

### **Environment Variables**

| Variable | Required | Description |
| --- | --- | --- |
| `ROCKETRIDE_URI` | Yes | RocketRide server URI (e.g., `https://cloud.rocketride.ai`) |
| `ROCKETRIDE_AUTH` or `ROCKETRIDE_APIKEY` | Yes | API key for authentication (either variable name works) |

For a local RocketRide server, use `http://localhost:5565` as the URI.

## **Getting Your API Key**

To obtain your API key for authentication, visit your RocketRide account settings or contact your RocketRide administrator.

## **Usage**

Once configured, the following tools are available to your LLM:

### **1. RocketRide Document Processor**

A built-in convenience tool that processes a file using a standard document processing pipeline. The pipeline is started on-the-fly when the tool is invoked.

- **Tool name**: `RocketRide_Document_Processor`
- **Input**: `filepath` — absolute path to the local file
- **Output**: Extracted text and metadata

The tool includes retry logic with exponential backoff (up to 5 attempts) for reliability when the pipeline is starting up.

### **2. Dynamic Pipeline Tools**

Any running tasks/pipelines in your RocketRide account are automatically discovered and exposed as MCP tools. Each pipeline tool accepts a `filepath` input and sends the file's contents to the corresponding running pipeline.

To use a custom pipeline as an MCP tool:

1. Configure your pipeline with a **webhook source** node
2. Optionally end with a **response** node if you need output returned to the client
3. Start the pipeline (via SDK, CLI, or the RocketRide UI)
4. The pipeline will automatically appear as an available MCP tool

## **Pipeline Requirements**

### **Webhook Start**

Your pipeline must start with a **webhook source node** so the MCP server can send file data to it.

### **Response End (for client output)**

If you need output returned to your MCP client, your pipeline must end with a **response node**.

### **Response Exception**

Pipeline output to your client is not always necessary. For example, a pipeline that sends data to a **vector store** won't need a response node, as it stores data rather than returning it.

### **Example Pipeline Flow**

**For client output:**

`Webhook → [Your Processing Nodes] → Response`

**For storage:**

`Webhook → [Your Processing Nodes] → Vector Store`

Once your pipeline is configured with a webhook source and started, it will automatically become available as a tool in your MCP client.
