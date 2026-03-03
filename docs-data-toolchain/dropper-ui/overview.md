---
title: Overview
date: 2026-03-02
sidebar_position: 1
---

<head>
  <title>Dropper UI - RocketRide Documentation</title>
</head>

The **Dropper UI** is a file upload and processing interface for RocketRide pipelines. Users drag and drop files into the interface, and the pipeline processes them — extracting text, tables, images, and other structured data. Results are displayed in an organized tabbed view. Like the Chat UI, it works as a standalone web application or as an embedded VS Code webview.

## Key Features

- **Drag-and-drop upload** — Upload files by dragging them into the drop zone or clicking to select.
- **Real-time progress** — Individual progress bars for each file showing upload bytes and percentage.
- **Multi-format results** — Results organized into tabs: text, documents, tables, images, questions, answers, and raw JSON.
- **Comparison mode** — Side-by-side viewing of results from multiple files.
- **File management** — Remove individual files or clear all uploaded files.
- **Connection resilience** — Automatic reconnection with retry logic.

## How It Works

1. The Dropper UI connects to a running RocketRide pipeline via WebSocket.
2. Users drag files into the drop zone (or click to select files).
3. Files are uploaded to the pipeline with real-time progress tracking.
4. The pipeline processes each file through its configured nodes (parsing, OCR, embedding, etc.).
5. Results are returned as a `PIPELINE_RESULT` and organized by content type.
6. Users browse results in the tabbed interface.

## Processing Workflow

| Stage | Status | Description |
|-------|--------|-------------|
| File added | `pending` | File is queued for upload |
| Upload started | `processing` | File bytes are being sent to the pipeline |
| Upload complete | `processing` | Pipeline is processing the file |
| Results received | `completed` | Results are parsed and displayed |
| Error | `error` | Upload or processing failed |

## Result Types

| Tab | Content |
|-----|---------|
| **Text** | Extracted text content from documents |
| **Documents** | Document structure objects |
| **Tables** | Markdown-formatted tables extracted from documents |
| **Images** | Images extracted from documents (displayed in a carousel) |
| **Questions** | Questions extracted via Q&A pipelines |
| **Answers** | Answers extracted via Q&A pipelines |
| **JSON** | Raw JSON response for debugging |

Results are grouped by source filename. The interface auto-selects the first non-empty tab.

## Deployment Modes

| Mode | Description |
|------|-------------|
| **Standalone** | Served as a web application, accessed via browser |
| **VS Code** | Embedded as a webview panel inside the VS Code extension |

## Requirements

- A running RocketRide pipeline configured for file processing (e.g., with source, preprocessor, and output nodes).
- A valid API key for authentication.
- Network access to the RocketRide server.
