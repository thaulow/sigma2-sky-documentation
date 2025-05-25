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
          label: '1. Register account',
          link: {
            type: 'generated-index',
            title: 'Register account',
            description: 'This section describes how to register as an academic, SME or public sector user',
            slug: '/registration/',
            keywords: ['registration'],
            image: '/img/logo.png',
          },
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'get-started/myaccessid',
              label: '1A. Academic User',
            },
            {
              type: 'doc',
              id: 'get-started/bankid',
              label: '1B. SME/Public Sector',
            },
          ],
        },
                {
        type: 'doc',
        id: 'get-started/affiliation',
        label: '2. Affiliation',
        },

      ],
    },
  ],
};