---
title: "Python SDK Quickstart"
date: 2025-07-29
---

<head>
  <title>Python SDK Quickstart - RocketRide Documentation</title>
</head>

**What you'll learn**

- How to call RocketRide APIs
- How to manage third-party dependencies using npm
- How to install the latest RocketRide DTC Python SDK
- How to send your first SDK request

* * *

## Key Benefits

- - **Simplified Integration** - Streamlined API calls with built-in error handling
    - **Pipeline Validation** - Catch configuration errors before execution
    - **Real-time Monitoring** - Track pipeline status and progress
    - **Automated Workflows** - Build robust data processing automation
    - **Flexible Data Input** - Support for webhook-based file submission
    - **Resource Management** - Proper cleanup and teardown capabilities

* * *

## **Initial setup**

First, create an RocketRide account or sign in to get your API credentials.

### **Install the TestPyPI package**

Check your Node.js version:

```
pip install -i https://test.pypi.org/simple/ aparavi-dtc-sdkpip install -i
```

* * *

## **Run your first SDK request**

Now that you have the SDK installed, you can validate a pipeline configuration and start a data transfer task with a couple API requests.

### **Create a .env file**

Linux/macOS

```
touch .env
```

Windows:

```
type nul > .env
```

This is what you should have in your .env file:

```
APARAVI_API_KEY=aparavi-dtc-api-key 
APARAVI_BASE_URL=https://eaas-dev.aparavi.com
```

**Note:** This sample uses your API key for your sandbox environment. Only you can see these values.

### **quick\_start.py:**

```
import os

from dotenv import load_dotenv
from aparavi_dtc_sdk import AparaviClient

load_dotenv()

client = AparaviClient(
    base_url=os.getenv("APARAVI_BASE_URL"),
    api_key=os.getenv("APARAVI_API_KEY")
)

result = client.execute_pipeline_workflow(
    pipeline="./pipeline_config.json",
    file_glob="./*.png"
)

print(result)
```

Save the file as quick\_start.py. This will run your pipeline. Navigate to your directory and run:

```
python quick_start.py
```

* * *

## Core Functions

| Function | Purpose | Description |
| --- | --- | --- |
| `validate_pipeline` | Pipeline Validation | Validates a pipeline structure against RocketRide's backend to ensure it is correctly formed before execution, helping catch configuration errors early in the development process. |
| `execute_pipeline` | Pipeline Execution | Submits a pipeline for execution on the RocketRide platform, enabling automated processing of your data workflows with proper error handling and status tracking. |
| `execute_pipeline_workflow` | End-to-End Workflow Execution | Performs a full end-to-end execution lifecycle for a pipeline, combining multiple operations into a single streamlined call for simplified automation. |
| `get_pipeline_status` | Status Monitoring | Fetches the current execution status of a pipeline task, allowing you to monitor progress, check for completion, and handle any execution issues that may arise. |
| `teardown_pipeline` | Pipeline Management | Gracefully ends a running pipeline task, ensuring proper cleanup of resources and allowing for controlled termination of long-running processes. |
| `send_payload_to_webhook` | Data Submission | Sends file(s) to a running webhook-based pipeline, enabling real-time data processing and integration with external systems and applications. |
| `get_version` | Version Management | Fetches the current version of the RocketRide API/backend, ensuring compatibility and helping maintain proper version control in your applications. |

* * *

## **Pre-Built Pipelines**

Available pre-built pipeline configurations:

- `AUDIO_AND_SUMMARY`: Processes audio content and produces both a transcription and a concise summary.
- `SIMPLE_AUDIO_TRANSCRIBE`: Processes audio files and returns transcriptions of spoken content.
- `SIMPLE_PARSER`: Extracts and processes metadata and content from uploaded documents.

```
import os

from dotenv import load_dotenv
from aparavi_dtc_sdk import AparaviClient, PredefinedPipeline # Import PredefinedPipeline enum

load_dotenv()

client = AparaviClient(
    base_url=os.getenv("APARAVI_BASE_URL"),
    api_key=os.getenv("APARAVI_API_KEY")
)

result = client.execute_pipeline_workflow(
    pipeline=PredefinedPipeline.SIMPLE_AUDIO_TRANSCRIBE, # Specify PredefinedPipeline
    file_glob="./audio/*.mp3"
)

print(result)
```

* * *

### **Power User Quick Start**

If you are comfortable with more control over running your pipeline, consider the following:

```
import json
import os

from dotenv import load_dotenv
from aparavi_dtc_sdk import AparaviClient

load_dotenv()

client = AparaviClient(
    base_url=os.getenv("APARAVI_BASE_URL"),
    api_key=os.getenv("APARAVI_API_KEY")
)

try:
    validation_result = client.validate_pipeline("pipeline_config.json")
except Exception as e:
    print(f"Validation failed: {e}")

try:
    start_result = client.execute_pipeline(pipeline_config, name="my-task")
    if start_result.status == "OK":
        token = start_result.data["token"]
        task_type = start_result.data["type"]

        status_result = client.get_pipeline_status(token=token, task_type=task_type)

        end_result = client.teardown_pipeline(token=token, task_type=task_type)

except Exception as e:
    print(f"Task operation failed: {e}")
```

* * *

## **Next steps**

**Next steps:** Explore the [full API reference](./) to learn about all available methods and features.

© 2025 RocketRide. All rights reserved.
