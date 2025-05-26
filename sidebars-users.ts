export default {
  usersSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Terminology',
    },
    {
      type: 'category',
      label: 'Getting Started',
        link: {
        type: 'generated-index',
        title: 'Getting Started',
        description: 'This section describes how first-time users can setup an account and configure affiliation',
        slug: '/get-started/',
        keywords: ['get-started'],
        image: '/img/logo.png',
      },
      collapsed: false, 
      items: [
        {
          type: 'category',
          label: '1. Account setup',
          link: {
            type: 'generated-index',
            title: 'Account registration',
            description: 'To register, you must sign in using either a national identity provider or an academic provider. If you are a student or researcher, in Norway or abroad, select 1a. Academic User. If you represent a company or public sector, select 1b. Business/Public Sector.',
            slug: '/registration/',
            keywords: ['registration'],
            image: '/img/logo.png',
          },
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'get-started/myaccessid',
              label: '1a - Academic User',
            },
            {
              type: 'doc',
              id: 'get-started/bankid',
              label: '1b - Business/Public Sector',
            },
          ],
        },
                {
          type: 'category',
          label: '2. Affiliation',
          link: {
            type: 'generated-index',
            title: 'Affiliation',
            description: 'Resources can only be purchased through organizations. This step explains how to join existing organizations or creating a new one',
            slug: '/affiliation/',
            keywords: ['affiliation'],
            image: '/img/logo.png',
          },
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'get-started/join-org',
              label: '2a - Join an organization',
            },
            {
              type: 'doc',
              id: 'get-started/create-org',
              label: '2b - Create an organization',
            },
          ],
        },


      ],
    },
  ],
};