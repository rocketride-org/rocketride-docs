---
title: Configuration
date: 2026-03-02
sidebar_position: 2
---

<head>
  <title>Configuration - Dropper UI - RocketRide Documentation</title>
</head>

## Environment Variables

Create a `.env` file based on the provided `.env.template`:

| Variable | Required | Description |
|----------|----------|-------------|
| `ROCKETRIDE_URI` | Yes | RocketRide server URL (e.g. `http://localhost:5565`) |
| `ROCKETRIDE_APIKEY` | Yes | Your RocketRide API key for authentication |

Example `.env` file:

```
ROCKETRIDE_URI=http://localhost:5565
ROCKETRIDE_APIKEY=your-api-key-here
```

## Authentication

The Dropper UI resolves authentication tokens in the same order as the Chat UI:

1. **VS Code webview context** — When running inside VS Code.
2. **Session storage** — For standalone browser sessions.
3. **Environment variables** — From the `.env` file in development mode.
4. **URL query parameter** — Pass `?auth=TOKEN` in the URL.

## Server URI Resolution

- **Development mode** — Uses the `ROCKETRIDE_URI` from the `.env` file.
- **Production mode** — Automatically uses the origin URL.
- **VS Code mode** — Uses the webview origin URL.

## Connection Behavior

- Singleton WebSocket connection established on startup.
- Automatic reconnection with exponential backoff on disconnection.
- Error panel shown after 5 consecutive failed connection attempts.

## Troubleshooting

If you see a connection error:

1. **Make sure your pipeline is running** — The Dropper UI needs an active pipeline configured for file processing.
2. **Check the server connection** — Verify the server URL is correct and reachable.
3. **Verify your API key** — Ensure the API key is valid.

If file uploads fail:

1. **Check file size** — Large files may exceed server limits.
2. **Check file format** — Ensure the pipeline supports the uploaded file types.
3. **Check pipeline status** — Verify the pipeline is running and not in an error state.
