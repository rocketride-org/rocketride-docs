---
title: "Aparavi Core Version 2.11.0"
date: 2025-01-23
---

This release delivers significant business benefits to our customers by incorporating Analytics Service features, introducing Licensing capabilities for On-premise users, enhancing security measures, and tackling various technical debts.

 
### Licensing for Connected Platforms

This feature enables a greater number of customers to seamlessly use the Aparavi platform within their firewall. It entails synchronizing licenses specifically for the On-premise platform while tracking data utilization on the Aparavi Cloud Platform.

- Upon successfully activating the customer's On-premise platform, the licensing details for that specific customer are configured on the Aparavi Cloud Platform.
- By default, this licensing information is synchronized with the On-premise platform every 2 minutes. However, this synchronization frequency can be customized according to the customer's requirements. Once the licensing information is transmitted, data utilization is reciprocally sent back to the Cloud Platform, updating the shadow platform’s dashboard statistics.

 
### Introducing Analytics Service: Amplifying Discovery and Reporting Capabilities by 100 Times

The introduction of the Analytics service is a note-worthy evolution, significantly enhancing its capacity to deliver amplifying e-discovery and reporting functionalities to customers by 100 times. This service encompasses various aspects of the service, including its performance, efficiency, and overall user experience. At the heart of this new service lies the integration with Aparavi Query Language (AQL). This dynamic language enables users to effortlessly create both familiar and innovative queries, witnessing results materialize in mere seconds.

#### **Optimized Infrastructure for Peak Performance**

It's important to note that this service thrives on substantial memory resources from your infrastructure. To maximize the potential of the Analytics service, consider these examples as guidelines for enabling its full capabilities.

Memory Resources: Allocate ample memory to ensure smooth and swift query processing.

Details on the additional Infrastructure could be found here: [https://aparavi-software.helpscoutdocs.com/article/370-additional-configuration-analytics-service](https://aparavi-software.helpscoutdocs.com/article/370-additional-configuration-analytics-service)

 
### Security update

In this release, we have gone a step further by addressing and resolving security issues identified through PEN test results. This proactive measure enhances the overall security and resilience of our platform, ensuring that it remains a secure and robust solution for our users.
