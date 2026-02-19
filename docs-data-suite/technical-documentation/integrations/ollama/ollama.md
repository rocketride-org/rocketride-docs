---
title: "Ollama"
date: 2025-02-08
---

<head>
  <title>Ollama - Aparavi Data Suite Documentation</title>
</head>

This README guides you through setting up Ollama, a tool that lets you run large language models (LLMs) like Llama 2, Mistral, and more, right on your own computer.

## Why Ollama?

- Locally Hosted: Your data stays on your machine.
- Free: You do not rely on off-site processing, no paying for usage.

## Installation

1. Install Ollama

- - Linux:
        - Download the latest release for your distribution from the [Ollama releases page](https://github.com/ollama/ollama/releases).
        - Make the downloaded file executable (e.g., chmod +x ollama\_linux\_amd64) and move it to a directory in your PATH (e.g., /usr/local/bin).
    - macOS:
        - Download the latest .dmg file from the [Ollama releases page](https://github.com/ollama/ollama/releases).
        - Open the .dmg file and drag the Ollama app to your Applications folder.
    - Windows (WSL2):
        - Install WSL2 by following the instructions [here](https://learn.microsoft.com/en-us/windows/wsl/install).
        - Within your WSL2 distribution, follow the Linux installation steps above.

2\. Verify Installation:

Open your terminal and run:

`ollama --version`

This should display the installed Ollama version.

## Running an LLM

1\. Pull a Model:

Ollama provides a curated library of LLMs. To download a model, use the ollama pull command. For example, to download Llama 2 7B:

`ollama pull llama2`

This will download and store the model locally.

 

2\. Run the Model:

Once the model is downloaded, you can start interacting with it:

Bash

`ollama run llama2`

 

Once Ollama is running, you can interact with it either in the terminal, or at [http://localhost:11434](http://localhost/)

 

3\. Change Models (Optional)

You can download/run a different model using the command `ollama run <modelname>;`

A full list of available models can be found here: [https://github.com/ollama/ollama?tab=readme-ov-file#model-library](https://github.com/ollama/ollama?tab=readme-ov-file#model-library)
