export default {
  usersSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Register account',
        link: {
        type: 'generated-index',
        title: 'Register account',
        description: 'Get started fast',
        slug: '/registration/',
        keywords: ['registration'],
        image: '/img/logo.png',
      },
      collapsed: false, // or true if you want it collapsed by default
      items: [
        'registration/register',
      ],
    },
  ],
};