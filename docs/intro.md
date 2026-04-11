---
slug: /
sidebar_position: 1
sidebar_label: Overview
---

<head>
  <title>Overview - RocketRide Documentation</title>
</head>

# Overview

RocketRide is an open-source data pipeline builder and runtime built for AI and ML workloads. With 50+ pipeline nodes spanning 13 LLM providers, 8 vector databases, OCR, NER, and more — pipelines are defined as portable JSON, built visually in VS Code, and executed by a multithreaded C++ runtime. From real-time data processing to multimodal AI search, RocketRide runs entirely on your own infrastructure.

## Key Capabilities

- **High-performance C++ runtime** — Native multithreading purpose-built for the throughput demands of AI and data workloads. No bottlenecks, no compromises for production scale.
- **Visual pipeline builder** — Drag, connect, and configure nodes in VS Code — no boilerplate. Real-time observability tracks token usage, LLM calls, latency, and execution.
- **50+ pipeline nodes** — 13 LLM providers, 8 vector databases, OCR, NER, PII anonymization, and more.
- **Multi-agent workflows** — Orchestrate and scale agents with built-in support for CrewAI and LangChain.
- **TypeScript, Python & MCP SDKs** — Integrate pipelines into native apps, expose them as callable tools for AI assistants, or build programmatic workflows into your existing codebase.
- **Zero dependency headaches** — Python environments, C++ toolchains, and all node dependencies managed automatically. Clone, build, run — no manual setup.
- **One-click deploy** — Run on Docker, on-prem, or RocketRide Cloud.

## Core Concepts

### Pipelines

A pipeline is a directed graph of **nodes** that processes data from input to output. Pipelines are defined as `.pipe` files (JSON format) and rendered visually in the IDE extension. You can run, monitor, and debug pipelines directly from the canvas.

### Nodes

Nodes are the building blocks of every pipeline. Each node performs a specific operation — calling an LLM, embedding text, querying a vector store, transforming data, and more. Nodes are organized into categories by function:

| Category | Nodes | Description |
|---|---|---|
| **Source** | 15 | Where data enters the pipeline (webhook, chat, dropper) |
| **LLM** | 13 | Language model providers (OpenAI, Anthropic, Google, and more) |
| **Store** | 9 | Vector database integrations (Pinecone, Qdrant, Weaviate, and more) |
| **Text** | 7 | Text analysis and transformation (NER, PII, sentiment, and more) |
| **Agents** | 4 | Agent framework orchestration (CrewAI, LangChain) |
| **Embedding** | 3 | Generate vector representations |
| **Image** | 3 | Image processing and OCR |
| **Preprocessor** | 2 | Chunking and code processing |
| **Audio** | 2 | Transcription and playback |
| **Data** | 4 | Document parsing |
| **Memory** | 1 | Persistent agent memory |
| **Search** | 1 | Web and semantic search |
| **Tool** | 7 | External integrations (HTTP, Python, GitHub, and more) |
| **Infrastructure** | 1 | Output and export |
| **Video** | 1 | Frame extraction |
| **Database** | 1 | Direct database access |

For a full breakdown, see the [Nodes Overview](./nodes-overview.md).

### Lanes

Lanes are the connections between nodes. Each node has typed **input lanes** and **output lanes** that define what data it accepts and produces. You wire nodes together by connecting an output lane of one node to a compatible input lane of another. Some nodes (like agents or LLMs) can also be invoked as **tools** by a parent node.

### Source Types

Every pipeline begins with a **source node** that defines how data enters:
- **Webhook** — Receives data via HTTP requests
- **Chat** — Interactive conversational interface
- **Dropper** — File-based input via drag-and-drop

## Where to Go Next

- **[Quickstart](./quickstart.md)** — Go from zero to a running pipeline in minutes.
- **[Nodes Overview](./nodes-overview.md)** — Browse all available nodes by category.
