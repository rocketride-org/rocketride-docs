---
title: "Remote‑to‑Local Tunnel (Ngrok)"
date: 2025-05-21
coverImage: "Remote‑to‑Local-Tunnel-Ngrok-4.png"
---

<head>
  <title>Remote‑to‑Local Tunnel (Ngrok) - RocketRide Documentation</title>
</head>

## Setting Up Ngrok to Local Services from RocketRide Cloud

This guide walks you through configuring Ngrok on your **local machine** to expose **Local Service as Mysql or Qdrant** to RocketRide Cloud, which runs remotely.

### Prerequisites

- You have **the local service** running.
    
- You can open terminal/command prompt.
    
- You can install third-party software (Ngrok).
    

### Create an Ngrok Account

1. Go to [ngrok | API Gateway, Kubernetes Ingress, Webhook Gateway](https://ngrok.com/)
    
2. Click **Sign up** and follow the steps.
    
3. Once signed in, navigate to the **"Your Authtoken"** page:
    
    - You’ll find your personal **API key/token** used to authenticate the CLI.
        

### Install Ngrok CLI

Install Ngrok on your local machine:

#### **Mac (Homebrew):**

```bash
brew install ngrok
```

#### **Linux (Snap):**

```bash
snap install ngrok 
```

#### **Windows (chocolatey):**

```bash
choco install ngrok
```

#### **Windows:**

Download the appropiate installer from official ngrok page [download page](https://ngrok.com/downloads/windows?tab=download "https://ngrok.com/downloads/windows?tab=download")


Other Systems can check the official [download page](https://ngrok.com/downloads/windows?tab=install "https://ngrok.com/downloads/windows?tab=install")

### Authenticate Ngrok CLI with Your Token

After the ngrok installation run the following command to link your Ngrok client with your account:

```bash
ngrok config add-authtoken 
```

Replace `<YOUR_AUTHTOKEN>` with your account token.

### Expose Local Ports

Run Ngrok tunnels for the local service.

```bash
ngrok tcp  --region=us
```

Below an examples for QDRANT:

Qdrant (Default port 6333):

```bash
ngrok tcp 6333 --region=us
```

This will output a `tcp://` forwarding address like:

```bash
tcp://1.tcp.ngrok.io:12345
```


## Provide Connection Info to RocketRide Cloud

Send your exposed connection info (host and port) to configure it in your dashboard. For example:

**Qdrant:**

- Host: `1.tcp.ngrok.io`
    
- Port: `54321`
    

Ngrok now securely tunnels your **local services** to DTC SaaS.

> ⚠️ **Note**: If you stop Ngrok and restart it later, for the free account, the **public address and port will change**. Be sure to update DTC SaaS with the new connection details if needed.
