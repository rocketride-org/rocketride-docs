---
title: MiniMax
date: 2026-06-03
sidebar_position: 1
---

<head>
  <title>MiniMax - RocketRide Documentation</title>
</head>

## What it does

Connects [MiniMax](https://www.minimax.io/) models to your pipeline — either via the MiniMax cloud API or locally through an OpenAI-compatible server (vLLM, SGLang, MLX, or Ollama). Used primarily as an `llm` invoke connection by agents and other nodes that need an LLM. Can also be used directly via lanes.

The MiniMax API is OpenAI-compatible, so this node uses the OpenAI SDK pointed at the configured base URL.

**Lanes:**

| Lane in     | Lane out  | Description                                          |
| ----------- | --------- | ---------------------------------------------------- |
| `questions` | `answers` | Send a question directly, receive a generated answer |

## Configuration

| Field           | Description                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------- |
| Model           | MiniMax model to use (see profiles below)                                                        |
| API Key         | MiniMax API key (cloud profiles only — local profiles don't require one)                         |
| Server base URL | OpenAI-compatible endpoint URL (Custom and Local profiles only, default `https://api.minimax.io/v1`) |

## Profiles

**Cloud**

| Profile                | Model                    | Context     |
| ---------------------- | ------------------------ | ----------- |
| MiniMax M3             | `MiniMax-M3`             | 1M tokens   |
| MiniMax M2 _(default)_ | `MiniMax-M2`             | 200K tokens |
| MiniMax M2.1           | `MiniMax-M2.1`           | 200K tokens |
| MiniMax M2.1 Highspeed | `MiniMax-M2.1-highspeed` | 200K tokens |
| MiniMax M2.5           | `MiniMax-M2.5`           | 200K tokens |
| MiniMax M2.5 Highspeed | `MiniMax-M2.5-highspeed` | 200K tokens |
| MiniMax M2.7           | `MiniMax-M2.7`           | 200K tokens |
| MiniMax M2.7 Highspeed | `MiniMax-M2.7-highspeed` | 200K tokens |
| Custom Model           | _(user-specified)_       | 200K tokens |

The `-highspeed` variants are MiniMax's faster/cheaper tier of the same generation. For the China endpoint, set the Server base URL to `https://api.minimaxi.com/v1`.

**MiniMax M3** is MiniMax's frontier multimodal coding model — 5× the M2-family context (1M tokens) with a 128K-token recommended output limit (max 512K). M3 is multimodal at the API level (text + image + video), though this node only exposes the text path.

**Local deploy**

Defaults target vLLM / SGLang on `http://localhost:8000/v1` with the HuggingFace model path.

| Profile              | Model (HF path)          | Server base URL (default)  | Context     |
| -------------------- | ------------------------ | -------------------------- | ----------- |
| MiniMax M2 (Local)   | `MiniMaxAI/MiniMax-M2`   | `http://localhost:8000/v1` | 200K tokens |
| MiniMax M2.5 (Local) | `MiniMaxAI/MiniMax-M2.5` | `http://localhost:8000/v1` | 200K tokens |
| MiniMax M2.7 (Local) | `MiniMaxAI/MiniMax-M2.7` | `http://localhost:8000/v1` | 200K tokens |

MiniMax open-weight models are MIT-licensed but large (230B-parameter MoE, ~10B active per token) and need a multi-GPU server or ≥96 GB unified memory. To use MLX on Apple Silicon, set the Server base URL to `http://localhost:8080/v1` and the model to a quantized build (e.g. `mlx-community/MiniMax-M2.7-4bit`). To use Ollama, set the Server base URL to `http://localhost:11434/v1` and the model to the tag you pulled.

## Upstream docs

- [MiniMax API overview](https://platform.minimax.io/docs/api-reference/api-overview)
- [MiniMax Chat Completions API (OpenAI-compatible)](https://platform.minimax.io/docs/api-reference/text-chat-openai)
- [MiniMax local deployment guide](https://platform.minimax.io/docs/guides/local-deploy)
