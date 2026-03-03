---
title: Overview
date: 2026-03-02
sidebar_position: 1
---

<head>
  <title>Chat UI - RocketRide Documentation</title>
</head>

The **Chat UI** is a conversational interface for interacting with RocketRide pipelines. It connects to a running pipeline via WebSocket and presents a chat-style interface where users can ask questions and receive AI-powered responses. It works as a standalone web application or as an embedded VS Code webview.

## Key Features

- **Conversational interface** — Send messages and receive AI responses in a familiar chat layout.
- **Markdown support** — Responses are rendered with full markdown formatting including code blocks with syntax highlighting.
- **Conversation context** — Automatically includes the last 6 messages for context-aware responses.
- **Real-time streaming** — WebSocket connection for low-latency communication with the pipeline.
- **Theme support** — Dark and light themes with automatic VS Code theme integration.
- **Connection resilience** — Automatic reconnection with exponential backoff.

## How It Works

1. The Chat UI establishes a WebSocket connection to a running RocketRide pipeline.
2. When a user sends a message, it is wrapped as a `Question` object and sent to the pipeline.
3. The pipeline processes the question through its configured nodes (e.g., agent → LLM → tools).
4. The pipeline returns a `PIPELINE_RESULT` containing the response text.
5. The response is parsed and displayed as a formatted message in the chat.

## Deployment Modes

| Mode | Description |
|------|-------------|
| **Standalone** | Served as a web application, accessed via browser |
| **VS Code** | Embedded as a webview panel inside the VS Code extension |

## Requirements

- A running RocketRide pipeline with a `chat` source node.
- A valid API key for authentication.
- Network access to the RocketRide server.
