---
title: Overview
date: 2026-03-02
sidebar_position: 1
---

<head>
  <title>VS Code Extension - RocketRide Documentation</title>
</head>

The **RocketRide VS Code Extension** is the primary development interface for building, running, and monitoring AI/data processing pipelines. It provides a visual pipeline editor, real-time execution monitoring, debugging tools, and cloud deployment — all within VS Code.

## Key Features

- **Visual Pipeline Editor** — Drag-and-drop canvas for building pipelines from reusable components. Opens automatically for `.pipe` files.
- **Pipeline Execution** — Run, debug, or attach to pipelines with real-time status monitoring.
- **Server Connection Management** — Connect to cloud, on-premises, or local RocketRide servers.
- **Real-time Monitoring** — Component status, data flow visualization, and execution metrics with charts.
- **Pipeline Debugging** — Set breakpoints, inspect variables, and step through pipeline execution.
- **IDE Integrations** — GitHub Copilot and Cursor IDE support for AI-assisted pipeline development.
- **Cloud Deployment** — Deploy pipelines to RocketRide.ai cloud directly from the editor.

## Connection Modes

| Mode | Description |
|------|-------------|
| **Cloud** | Connect to RocketRide.ai cloud infrastructure |
| **On-premises** | Connect to a self-hosted RocketRide server |
| **Local** | Run a local RocketRide engine instance |

## Extension Views

The extension adds several views to the VS Code interface:

### Sidebar

- **Files** — Tree view of `.pipe` files in your workspace. Right-click for run, debug, attach, and deploy options.
- **Connection** — Shows connection status to the RocketRide server.

### Pages (Webviews)

- **Connection** — Server URL, API key, and connection mode configuration.
- **Editor** — Visual drag-and-drop pipeline editor for `.pipe` files.
- **Settings** — Extension settings including connections, environment variables, and integrations.
- **Status** — Real-time pipeline execution monitoring with component status and metrics.
- **Deploy** — Cloud deployment interface.
- **Welcome** — First-run onboarding flow.

### Status Bar

- Shows connection state (connected / disconnected / error).
- Click to toggle the sidebar.
- Shows reconnection progress during connection issues.
