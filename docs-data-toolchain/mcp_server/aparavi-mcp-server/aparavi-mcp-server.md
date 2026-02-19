---
title: "Aparavi MCP Server"
date: 2025-10-20
---

<head>
  <title>Aparavi MCP Server - Aparavi Data Toolchain Documentation</title>
</head>

# Aparavi MCP Server

A Python [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that integrates with the Aparavi Platform. It exposes Aparavi data processing tools to LLMs, allowing them to stream local files directly to Aparavi EaaS for advanced processing (OCR, classification, PII detection, etc.).

## **Overview**

The Aparavi MCP server provides two types of capabilities:

1. **Custom Pipeline Tools**: Any running tasks/pipelines in your Aparavi account are dynamically exposed as MCP tools
2. **Built-in Tools**: Ready-to-use tools that require no setup in DTC

This enables Language Models to leverage the full power of Aparavi's data processing capabilities directly from your AI client.

## **Features**

- Full DTC capabilities accessible within your MCP client
- Custom pipeline tools created from your DTC workflows
- Built-in tools for immediate use (no DTC configuration required)
- Document processing and text extraction
- OCR capabilities for images and system diagrams
- Async processing support
- MCP-compliant interface

## **Installation**

### **Option 1: Using pipx (Recommended)**

Isolate the server environment:

```bash
pipx install aparavi-mcp
```

### **Option 2: Using pip**

Install into your current environment:

```bash
pip install aparavi-mcp
```

## **Configuration**

Add the server to your MCP host configuration (e.g., `mcp.json` for Cursor, `claude_desktop_config.json` for Claude Desktop).

You will need your Aparavi API key and URI.

```json
{
  "mcpServers": {
    "aparavi": {
      "command": "aparavi-mcp",
      "args": [],
      "env": {
        "APARAVI_URI": "https://eaas.aparavi.com",
        "APARAVI_AUTH": "your-api-key-here"
      }
    }
  }
}
```

> **Note:** For EU users, please use `https://eaas.aparavi.eu` for `APARAVI_URI`.

## **Getting Your API Key**

To obtain your API key for authentication, visit your Aparavi account settings or contact your Aparavi administrator.

## **Usage**

Once configured, the following tools will be available to your LLM:

### **1. Aparavi Document Processor**

A convenience tool that processes a file using a standard Aparavi document processing pipeline.

- **Input**: `filepath` (Absolute path to the local file)
- **Output**: Extracted text and metadata

### **2. Custom Pipelines**

Any running tasks/pipelines in your Aparavi account will also be dynamically exposed as tools.

## **Pipeline Requirements**

To use custom pipelines as tools, they must follow these configuration rules in DTC:

### **Webhook Start**

Your pipeline must start with a **webhook source node**.

### **HTTP Response End (for client output)**

If you need output returned to your MCP client, your pipeline must end with an **HTTP response node**.

### **HTTP Response Exception**

Pipeline output to your client may not always be necessary. For example, a pipeline that sends data to a **vector store node** won't require an HTTP response node, as it stores data rather than returns it to the client.

### **Example Pipeline Flow**

**For client output:**

`Webhook → [Your Processing Nodes] → HTTP Response`

**For vector storage:**

`Webhook → [Your Processing Nodes] → Vector Store`

Once your pipeline is configured in DTC with a webhook source, make sure to **start the pipeline**. It will automatically become available as a tool in your MCP client.

