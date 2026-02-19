import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  dataSuiteSidebar: [
    {
      type: 'category',
      label: 'Overview',
      link: { type: 'doc', id: 'overview/overview' },
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          link: { type: 'doc', id: 'overview/getting-started/getting-started' },
          items: [
            'overview/getting-started/log-into-the-aparavi-platform/log-into-the-aparavi-platform',
            'overview/getting-started/profile-and-support-options/profile-and-support-options',
          ],
        },
        {
          type: 'category',
          label: 'Dashboards',
          link: { type: 'doc', id: 'overview/dashboards/overview/dashboards-overview' },
          items: [
            'overview/dashboards/subtabs/dashboards-subtabs',            
            'overview/dashboards/default-subtabs/dashboards-default-subtabs',
            'overview/dashboards/widgets/dashboards-widgets',
            'overview/dashboards/widget-types/dashboards-widget-types',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Discover',
      items: [
        {
          type: 'category',
          label: 'Search',
          link: { type: 'doc', id: 'discover/search/overview/search-overview' },
          items: [
            'discover/search/searching-and-reporting-on-tags-2/search-searching-and-reporting-on-tags-2',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Policies',
      link: { type: 'doc', id: 'policies/overview/overview' },
      items: [
        {
          type: 'category',
          label: 'Actions',
          link: { type: 'doc', id: 'policies/actions/overview/overview' },
          items: [
            'policies/actions/configuration/configuration',
            'policies/actions/inheritance/inheritance',
          ],
        },
        {
          type: 'category',
          label: 'Classifications',
          link: { type: 'doc', id: 'policies/classifications/overview/overview' },
          items: [
            'policies/classifications/custom-classification-rules/custom-classification-rules',
            'policies/classifications/inheritance/inheritance',
            'policies/classifications/predefined-classification-rules/predefined-classification-rules',
            'policies/classifications/testing/testing',
          ],
        },
        {
          type: 'category',
          label: 'Sources',
          link: { type: 'doc', id: 'policies/sources/overview-2/overview-2' },
          items: [
            'policies/sources/scans/scans',
          ],
        },
        {
          type: 'category',
          label: 'Targets',
          link: { type: 'doc', id: 'policies/targets/overview-3/overview-3' },
          items: [
            'policies/targets/exporting/exporting',
            'policies/targets/inheritance-2/inheritance-2',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        { type: 'doc', id: 'administration/activate/activate-activate-a-node/activate-activate-a-node', label: 'Activate'},
        {
          type: 'category',
          label: 'Configuration',
          link: { type: 'doc', id: 'administration/configuration/overview/configuration-overview' },
          items: [ 'administration/configuration/tab-settings/configuration-tab-settings' ]
        },
        { type: 'doc', id: 'administration/encryption/encryption-overview/encryption-overview', label: 'Encryption' },
        {
          type: 'category',
          label: 'Installer',
          link: { type: 'doc', id: 'administration/installer/installer-overview/installer-overview' },
          items: [
            'administration/installer/updates/updates',
          ]
        },
        { type: 'doc', id: 'administration/licensing/licensing-overview/licensing-overview', label: 'Licensing' },
        { type: 'doc', id: 'administration/permissions/permissions-overview/permissions-overview', label: 'Permissions' },
        { type: 'doc', id: 'administration/roles/roles-overview/roles-overview', label: 'Roles' },
        { type: 'doc', id: 'administration/tags/tags-overview/tags-overview', label: 'Tags' },
        { type: 'doc', id: 'administration/users/users-manage-users/users-manage-users', label: 'Users' },
      ]
    },
    {
      type: 'category',
      label: 'Reports',
      items: [
        {
          type: 'category',
          label: 'Reports',
          link: { type: 'doc', id: 'reports/reports/overview-5/overview-5' },
          items: [
            'reports/reports/available-columns/available-columns',
            'reports/reports/create-a-new-report/create-a-new-report',
            'reports/reports/customizing-reports/customizing-reports',
            'reports/reports/open-in-microsoft-excel/open-in-microsoft-excel',
            'reports/reports/report-libraries/report-libraries',
            'reports/reports/report-output/report-output',
            'reports/reports/report-recipe-and-variations/report-recipe-and-variations',
          ]
        },
        {
          type: 'category',
          label: 'Sample Reports',
          items: [
            'reports/sample-reports/create-a-report-by-modify-date/create-a-report-by-modify-date',
            'reports/sample-reports/create-a-report-by-service/create-a-report-by-service',
            'reports/sample-reports/create-a-report-of-deleted-files/create-a-report-of-deleted-files',
            'reports/sample-reports/create-a-report-on-classification-hits/create-a-report-on-classification-hits',
            'reports/sample-reports/create-audit-log-query-report/create-audit-log-query-report',
            'reports/sample-reports/create-duplicate-files-report/create-duplicate-files-report',
          ]
        },
        {
          type: 'category',
          label: 'Aparavi Query Language',
          link: { type: 'doc', id: 'reports/aparavi-query-language/overview-4/overview-4' },
          items: [
            'reports/aparavi-query-language/helper-functions/helper-functions',
            'reports/aparavi-query-language/samples/samples',
            'reports/aparavi-query-language/select-statement/select-statement',
            'reports/aparavi-query-language/variables/variables',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Technical Documentation',
      items: [
        {
          type: 'category',
          label: 'Architecture',
          link: { type: 'doc', id: 'technical-documentation/architecture/overview-6/overview-6' },
          items: ['technical-documentation/architecture/aparavi-data-storage/aparavi-data-storage']
        },
        { type: 'doc', id: 'technical-documentation/configuration/clients/clients', label: 'Configuration'},
        {
          type: 'category',
          label: 'Installation',
          items: [
            'technical-documentation/installation/all-in-one-windows/all-in-one-windows',
            'technical-documentation/installation/distributed-windows/distributed-windows',
            'technical-documentation/installation/hardware-requirements/hardware-requirements',
            'technical-documentation/installation/removing-nodes/removing-nodes',
          ]
        },
        {
          type: 'category',
          label: 'Integrations',
          items: [
            'technical-documentation/integrations/google-workspace-subscription/google-workspace-subscription',
            'technical-documentation/integrations/macos-systems/macos-systems',
            'technical-documentation/integrations/microsoft-office-connectors/microsoft-office-connectors',
            'technical-documentation/integrations/ollama/ollama',
            'technical-documentation/integrations/openai/openai',
            'technical-documentation/integrations/sso-login-google/sso-login-google',
            'technical-documentation/integrations/sso-login-microsoft/sso-login-microsoft',
          ]
        },
        {
          type: 'category',
          label: 'Prerequisites',
          items: [
            'technical-documentation/prerequisites/ai-module/ai-module',
            'technical-documentation/prerequisites/analytics-service/analytics-service',
            'technical-documentation/prerequisites/azure-vm-linux/azure-vm-linux',
            'technical-documentation/prerequisites/azure-vm-windows/azure-vm-windows',
            'technical-documentation/prerequisites/firewall-rules/firewall-rules',
            'technical-documentation/prerequisites/mysql-server-linux/mysql-server-linux',
            'technical-documentation/prerequisites/mysql-server-windows/mysql-server-windows',
          ]
        },
        {
          type: 'category',
          label: 'Sources',
          link: { type: 'doc', id: 'technical-documentation/sources/overview-7/overview-7' },
          items: [
            'technical-documentation/sources/aws-s3/aws-s3',
            'technical-documentation/sources/azure-blobs/azure-blobs',
            'technical-documentation/sources/file-system/file-system',
            'technical-documentation/sources/google-drive-enterprise/google-drive-enterprise',
            'technical-documentation/sources/google-personal-account/google-personal-account',
            'technical-documentation/sources/microsoft-sharepoint-sources/microsoft-sharepoint-sources',
            'technical-documentation/sources/order-of-precedence-for-folder-paths/order-of-precedence-for-folder-paths',
            'technical-documentation/sources/samba-smb/samba-smb',
            'technical-documentation/sources/source-microsoft-onedrive/source-microsoft-onedrive',
            'technical-documentation/sources/source-microsoft-outlook/source-microsoft-outlook',
          ]
        },
        {
          type: 'category',
          label: 'Targets',
          items: [
            'technical-documentation/targets/aws-s3-2/aws-s3-2',
            'technical-documentation/targets/azure-blobs-2/azure-blobs-2',
            'technical-documentation/targets/microsoft-sharepoint-targets/microsoft-sharepoint-targets',
            'technical-documentation/targets/samba-smb-2/samba-smb-2',
            'technical-documentation/targets/target-microsoft-onedrive/target-microsoft-onedrive',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'release-notes/aparavi-core-version-2-11-0/aparavi-core-version-2-11-0',
        'release-notes/aparavi-core-version-2-12-0/aparavi-core-version-2-12-0',
        'release-notes/aparavi-core-version-2-12-4/aparavi-core-version-2-12-4',
        'release-notes/aparavi-core-version-2-13-0/aparavi-core-version-2-13-0',
        'release-notes/aparavi-core-version-2-13-2/aparavi-core-version-2-13-2',
        'release-notes/aparavi-core-version-2-16-0/aparavi-core-version-2-16-0',
        'release-notes/aparavi-core-version-2-17-0/aparavi-core-version-2-17-0',
        'release-notes/aparavi-core-version-2-18-0/aparavi-core-version-2-18-0',
        'release-notes/aparavi-core-version-2-19-1/aparavi-core-version-2-19-1',
        'release-notes/aparavi-core-version-2-22-0/aparavi-core-version-2-22-0',
        'release-notes/aparavi-data-suite-2-21-0/aparavi-data-suite-2-21-0',
        'release-notes/aparavi-data-suite-2-23-2/aparavi-data-suite-2-23-2',
        'release-notes/aparavi-data-suite-2-30-0/aparavi-data-suite-2-30-0',
        'release-notes/data-toolchain-dtc-for-ai-v1-1/data-toolchain-dtc-for-ai-v1-1',
        'release-notes/data-toolchain-for-ai-v1-0/data-toolchain-for-ai-v1-0',
      ]
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/check-ports-in-the-server-directory/check-ports-in-the-server-directory',
        'troubleshooting/log-files/log-files',
        'troubleshooting/cannot-access-smb-shares-with-provided-credentials/cannot-access-smb-shares-with-provided-credentials',
        'troubleshooting/check-the-database-connection-advanced-options-mysql/check-the-database-connection-advanced-options-mysql',
        'troubleshooting/node-connectivity-check/node-connectivity-check',
      ]
    },
    {
      type: 'category',
      label: 'Use Cases',
      items: [
        {
          type: 'category',
          label: 'Custom Classifications',
          items: [
            'use-cases/custom-classifications/custom-rules/custom-rules',
            'use-cases/custom-classifications/regex/regex',
            'use-cases/custom-classifications/when-to-use/when-to-use',
          ]
        },
        {
          type: 'category',
          label: 'Tagging Use Case',
          items: [
            'use-cases/tagging-use-case/department-data-types/department-data-types',
            'use-cases/tagging-use-case/geographical-location/geographical-location',
            'use-cases/tagging-use-case/tagging-use-cases-ma/tagging-use-cases-ma',
          ]
        },
        {
          type: 'category',
          label: "What's Next",
          items: [
            'use-cases/whats-next/file-search/file-search',
            'use-cases/whats-next/get-link-to-results-for-files-search/get-link-to-results-for-files-search',
            'use-cases/whats-next/how-to-configure-microsoft-excel-with-aparavi-credentials/how-to-configure-microsoft-excel-with-aparavi-credentials',
            'use-cases/whats-next/how-to-customize-file-search-fields-displayed/how-to-customize-file-search-fields-displayed',
            'use-cases/whats-next/how-to-export-file-search-results/how-to-export-file-search-results',
            'use-cases/whats-next/how-to-export-file-search-results-to-pdf-or-microsoft-excel/how-to-export-file-search-results-to-pdf-or-microsoft-excel',
            'use-cases/whats-next/how-to-search-audit-log-files/how-to-search-audit-log-files',
            'use-cases/whats-next/how-to-search-for-duplicate-files/how-to-search-for-duplicate-files',
            'use-cases/whats-next/manage-view-types/manage-view-types',
            'use-cases/whats-next/manual-deletion-of-files/manual-deletion-of-files',
            'use-cases/whats-next/manually-download-files/manually-download-files',
            'use-cases/whats-next/manually-export-files-by-query/manually-export-files-by-query',
            'use-cases/whats-next/manually-export-files-by-select/manually-export-files-by-select',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/aparavi-rest-api/aparavi-rest-api',
      ],
    },
  ],
};

export default sidebars;

