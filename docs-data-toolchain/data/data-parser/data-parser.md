---
title: "Data Parser"
date: 2025-05-18
---

<head>
  <title>Data Parser - Aparavi Data Toolchain Documentation</title>
</head>

The Data - Parser node processes unstructured input and automatically routes it into structured output types. It serves as a multipurpose entry point for raw data of unknown or mixed types and splits them into defined formats such as text, tables, audio, images, or video.


### Input

- Data - Accepts a wide range of file or content types including binary files, mixed media, or serialized formats. This is the only input for this node

### Outputs

- Audio - Outputs audio content if present in the input (example .mp3, .wav)
- Image - Outputs any image content (example .jpg, .png, base64)
- Table - Outputs structured tabular data (example .csv, .xlsx, HTML tables)
- Text - Outputs plain text or extracted textual content from documents
- Video - Outputs video content, including video-only or video-with-audio files (example .mp4, .mov)

### How to Use

1. Connect a data source to the Data input (example files from File System, emails, documents)
2. The parser will automatically detect content types embedded in the input
3. Use the appropriate output ports (Audio, Image, Table, Text, Video) to route the parsed results downstream
4. No manual configuration is required for format detection

### Notes

- This node acts as an auto-routing gateway for pipelines that require pre-processing of heterogeneous inputs
- If the file contains multiple data types (example a PDF with embedded images and text), multiple outputs may be activated simultaneously
- It is typically used at the early stage of pipelines for ingestion and content breakdown
