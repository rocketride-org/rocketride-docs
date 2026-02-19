---
title: "Node.js SDK Quickstart"
date: 2025-07-29
---

<head>
  <title>Node.js SDK Quickstart - RocketRide Documentation</title>
</head>

**What you'll learn**

- How to call RocketRide APIs without writing a line of code
- How to manage third-party dependencies using npm
- How to install the latest RocketRide DTC Node.js SDK
- How to send your first SDK request

## **Initial setup**

First, create an RocketRide account or sign in to get your API credentials.

### **Install the Node.js server-side SDK**

The latest version of the RocketRide DTC Node.js SDK supports Node.js versions 12.0.0+.

Check your Node.js version:

```
node --version
```

**Install the library**

Install the library from npm:

```
npm install
```

## **Run your first SDK request**

Now that you have the Node.js SDK installed, you can validate a pipeline configuration and start a data transfer task with a couple API requests.

**Note:** This sample uses your API key for your sandbox environment. Only you can see these values.

**create\_task.js:**

```
const AparaviDTC = require('aparavi-dtc-node-sdk');

const apiKey = 'YOUR_API_KEY';
const client = new AparaviDTC(apiKey);

const pipelineJson = {
  // Your pipeline JSON here
};

// Validate a pipeline
client.validate(pipelineJson)
  .then(response => {
    console.log('Validation successful:', response);
  })
  .catch(error => {
    console.error('Validation failed:', error.message);
  });

// Start a task
client.startTask(pipelineJson)
  .then(response => {
    console.log('Task started successfully:', response);
    // The token and type are now stored in the client instance
    console.log('Token:', client.token);
    console.log('Type:', client.type);
  })
  .catch(error => {
    console.error('Error starting task:', error.message);
  });
```

Save the file as `create_task.js`. From the command line, navigate to the directory containing the file and run:

```
node create_task.js
```

If everything worked, the command line shows a response similar to this:

Validating pipeline... Pipeline validation successful: `{ status: 'valid' }` ...

## **Next steps**

**Next steps:** Explore the [full API reference](./) to learn about all available methods and features.

© 2025 RocketRide. All rights reserved.
