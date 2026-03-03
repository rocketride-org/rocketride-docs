---
title: Configuration
date: 2026-03-02
sidebar_position: 2
---

<head>
  <title>Configuration - Chat UI - RocketRide Documentation</title>
</head>

## Environment Variables

Create a `.env` file based on the provided `.env.template`:

| Variable | Required | Description |
|----------|----------|-------------|
| `ROCKETRIDE_URI` | Yes | RocketRide server URL (e.g. `http://localhost:5565`) |
| `ROCKETRIDE_APIKEY` | Yes | Your RocketRide API key for authentication |
| `ROCKETRIDE_OPENAI_KEY` | No | OpenAI API key (if your pipeline uses OpenAI nodes) |

Example `.env` file:

```
ROCKETRIDE_URI=http://localhost:5565
ROCKETRIDE_APIKEY=your-api-key-here
ROCKETRIDE_OPENAI_KEY=sk-your-openai-key
```

## Authentication

The Chat UI resolves authentication tokens in this order:

1. **VS Code webview context** — When running inside VS Code, the token is provided by the extension.
2. **Session storage** — For standalone browser sessions.
3. **Environment variables** — From the `.env` file in development mode.
4. **URL query parameter** — Pass `?auth=TOKEN` in the URL. The token is consumed and removed from the URL for security.

## Server URI Resolution

- **Development mode** — Uses the `ROCKETRIDE_URI` from the `.env` file.
- **Production mode** — Automatically uses the origin URL where the Chat UI is served from.
- **VS Code mode** — Uses the origin URL of the webview.

## Connection Behavior

- The Chat UI establishes a singleton WebSocket connection on startup.
- If the connection drops, it retries automatically with exponential backoff.
- After 5 consecutive failed connection attempts, an error panel is shown with troubleshooting steps.
- Connection state is displayed in the header (connected / disconnected).

## Troubleshooting

If you see a connection error:

1. **Make sure your pipeline is running** — The Chat UI needs an active pipeline with a `chat` source node.
2. **Check the server connection** — Verify the server URL is correct and the server is reachable.
3. **Verify your API key** — Ensure the API key is valid and has the correct permissions.
