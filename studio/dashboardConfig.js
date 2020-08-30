export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4be387302549ab81748741',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rz13j5nx',
                  apiId: '5759b0e0-d505-4f4b-a165-de9ab6970798'
                },
                {
                  buildHookId: '5f4be387cff5d0ed077c6101',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hmxcpmb2',
                  apiId: 'c483f00a-ae02-4694-b5c6-1043f0cd2d92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cristiancmello/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hmxcpmb2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
