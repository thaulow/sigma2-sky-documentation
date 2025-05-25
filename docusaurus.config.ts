import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Sigma2 Sky - Documentation',
  tagline: 'Your portal for academic infrastructure',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://thaulow.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/sigma2-sky-documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thaulow', // Usually your GitHub org/user name.
  projectName: 'sigma2-sky-documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'no'],
    localeConfigs: {
      en: {
        label: "English",
        direction: 'ltr',
      },
      'no': {
        label: "Norwegian",
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/thaulow/sigma2-sky-documentation/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'users',
      path: 'docs-users',
      routeBasePath: 'users',
      sidebarPath: require.resolve('./sidebars-users.ts'),
      includeCurrentVersion: true,
      lastVersion: 'current',
      versions: {
        current: {
          label: '1.0.0',
        },
      },
                editUrl:
            'https://github.com/thaulow/sigma2-sky-documentation/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'staff',
      path: 'docs-staff',
      routeBasePath: 'staff',
      sidebarPath: require.resolve('./sidebars-staff.ts'),
      includeCurrentVersion: true,
      lastVersion: 'current',
      versions: {
        current: {
          label: '1.0.0',
        },
      },
                editUrl:
            'https://github.com/thaulow/sigma2-sky-documentation/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'providers',
      path: 'docs-providers',
      routeBasePath: 'providers',
      sidebarPath: require.resolve('./sidebars-providers.ts'),
      includeCurrentVersion: true,
      lastVersion: 'current',
      versions: {
        current: {
          label: '1.0.0',
        },
      },
                editUrl:
            'https://github.com/thaulow/sigma2-sky-documentation/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'calls',
      path: 'docs-calls',
      routeBasePath: 'calls',
      sidebarPath: require.resolve('./sidebars-calls.ts'),
      includeCurrentVersion: true,
      lastVersion: 'current',
      versions: {
        current: {
          label: '1.0.0',
        },
      },
                editUrl:
            'https://github.com/thaulow/sigma2-sky-documentation/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
    },
  ],
  [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', 
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(0, 132, 153)',
          },
        ],
      },
    ],
],


  themeConfig: {
    docs: {
      versionPersistence: 'localStorage',
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
      
    },
    announcementBar: {
    id: 'announcement_bar', // A unique id for this bar
    content:
      'Under development. More information at <a target="_blank" rel="noopener noreferrer" href="https://sigma2.no">Sigma2 ↗</a>',
    backgroundColor: '#eee',
    textColor: '#000',  
    isCloseable: true, 
  },
  
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Sigma2 Logo',
        src: 'img/logo.svg',
      },
      
      items: [
        {
        type: 'doc',
        docId: 'intro',
        docsPluginId: 'users',
        label: 'General Users',
        position: 'left',
        
        },
        {
        type: 'doc',
        docId: 'intro',
        docsPluginId: 'providers',
        label: 'Service Providers',
        position: 'left',
        },
        {
        type: 'doc',
        docId: 'intro',
        docsPluginId: 'calls',
        label: 'Call Managers',
        position: 'left',
        },
                {
        type: 'doc',
        docId: 'intro',
        docsPluginId: 'staff',
        label: 'Staff',
        position: 'left',
        },

        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: 'https://sky.sigma2.no',
          label: 'Access Sky',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },

      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'Sigma2',
        src: 'img/logo.png',
        href: 'https://sigma2.no',
        width: 160,
        height: 38,
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'General Users',
              to: '/users/',
            },
            {
              label: 'Service Providers',
              to: '/providers/',
            },
            {
              label: 'Call Managers',
              to: '/calls/',
            },
            {
              label: 'Staff',
              to: '/staff/',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Sigma2 Sky Login',
              href: 'https://sky.sigma2.no/',
            },
          ],
        },
        {
          title: 'Sigma2',
          items: [
            {
              label: 'Website',
              to: 'https://sky.sigma2.no/',
            },
            {
              label: 'contact@sigma2.no',
              href: 'mailto:contact@sigma2.no',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sigma2 AS.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
