# RocketRide Data Catalog

<head>
  <title>RocketRide Data Catalog - RocketRide Documentation</title>
</head>

The RocketRide Data Catalog connector streams curated, processed data from RocketRide into your processing pipelines, providing metadata-rich datasets that eliminate the need for raw file processing.


## Key capabilities

* **Intelligent Data Streaming**: Receives pre-processed data with comprehensive metadata, file signatures, and duplicate detection from RocketRide
* **Historical Preservation**: Maintains static snapshots of data state for trend analysis and compliance reporting
* **OCR Integration**: Automatically includes extracted text content from documents and images when enabled in ADS
* **Permission-Aware Processing**: Streams data with ownership information and access permissions from source systems

## Configuration

### Basic Configuration

* **Catalog Name**: Select the catalog to use for data streaming. This parameter uses the `apa_catalog` widget to choose from available RocketRide catalogs. The catalog must be configured in ADS with a webhook URL pointing to your connector instance.
* **Webhook Setup**: Configure the webhook endpoint URL in RocketRide's data transport settings. This URL receives processed data from ADS and forwards it to the connector.
* **Data Transport**: Create a data transport endpoint in ADS and set up filtering criteria to control which data flows through the connector.

## Inputs and Outputs

### Input Channels

* **_source → tags**: Accepts data from RocketRide webhooks. Input includes documents with metadata, file signatures, permissions, OCR-extracted text, and custom classification tags. Size limits depend on ADS configuration and webhook payload settings.

### Output Channels

* **Documents**: Outputs structured data ready for parsing. Format includes document content, comprehensive metadata, file signatures and duplicate information, permission and ownership data, extracted text content (if OCR enabled), and custom tags. Each output document is formatted for downstream processing components.

## Supported Model Variants

| Model Variant | Description | Max Tokens | Optimized for |
|--------------|-------------|------------|---------------|
| N/A | This connector does not use model variants | N/A | Data streaming from ADS |

## Data Flow Process

* **ADS Processing**: RocketRide scans source data, extracts metadata, applies intelligence (duplicate detection, OCR, permissions analysis), and filters based on configured criteria.
* **Webhook Transmission**: Processed data is sent through the configured webhook URL with authentication handled by ADS security framework.
* **Connector Reception**: The ADS Catalog connector receives webhook data, validates and formats it according to the catalog configuration.
* **Output Streaming**: Formatted documents are streamed to downstream pipeline components through the output channel, ready for further processing or storage.

## Common Use Cases

* **Data Analytics**: Wire the ADS Catalog connector as a source, then connect to analysis nodes to process curated datasets for business intelligence and compliance reporting.
* **Content Management**: Stream processed documents directly into content management systems by connecting the output to document storage or indexing components.
* **AI Training Data**: Connect the connector output to ML preprocessing nodes to provide clean, metadata-rich training datasets for natural language processing and content-based AI applications.
* **Data Governance**: Wire the output to monitoring and audit components to track data lineage, access patterns, and ensure policy compliance.

## Frequently Asked Questions

### Authentication Errors

* Connection to ADS fails → Verify webhook URL configuration in RocketRide data transport settings and ensure proper authentication is configured
* Permission errors → Ensure proper authentication between ADS and connector through the RocketRide security framework

### Input Limitations

* No data received → Check catalog configuration in ADS and verify data selection criteria are not filtering out all content
* Missing metadata → Confirm ADS processing pipeline includes metadata extraction and OCR if text content is required

### Response Issues

* Data format issues → Verify catalog configuration matches expected output format and check data filtering settings in ADS
* Incomplete data → Ensure webhook payload sizes are optimized and data streaming is properly configured for large datasets

## Additional Resources

* <a href="https://docs.aparavi.com/data-suite/overview" target="_blank" rel="noopener">RocketRide Documentation</a>
