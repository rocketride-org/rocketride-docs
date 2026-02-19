---
title: "Aparavi Core Version 2.22.0"
date: 2025-01-14
---

This release introduces enhanced granularity to the license module to fully support the Aparavi Data Suite (ADS) tiers — **Baseline**, **Advanced**, and **Ultimate**. With this update, export and transform pipelines can now be controlled via distinct licensing toggles, allowing specific features to be enabled based on the selected tier.

In addition, the release includes new capabilities for importing and exporting classifications. This empowers partners to reuse and replicate custom classification sets across multiple customers with similar use cases, significantly improving deployment efficiency and accelerating customer onboarding.

 
## Import / Export Classification

This feature makes it easy for partners to reuse custom classifications they’ve already created. Instead of starting from scratch every time, partners can export the full set of custom classification policies— including all the logic they’ve built — and import them into another customer’s environment.

This helps save time, ensures consistency, and allows faster setup for customers with similar needs.

The user experience is designed to be simple. With just a few clicks, users can export or import classifications without needing to manually recreate anything. This makes the process quick, repeatable, and user-friendly for both partners and customers.

- Only custom classifications can be exported and imported — pre-defined classifications are not supported for this feature.
- When a pre-defined classification is edited, it is always now saved as a custom classification, which can then be exported or imported.
- If a classification with the same name already exists, the imported one will be renamed with a (2) to avoid data loss.
- The Export option is only enabled when there are custom classifications available — it stays disabled otherwise.

