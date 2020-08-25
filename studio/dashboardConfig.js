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
                  buildHookId: '5f44f8ea82dc02bea7a7ae90',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kdc85ib6',
                  apiId: 'ebbd1b71-74a0-46dd-a9e0-8b631ea15cdc'
                },
                {
                  buildHookId: '5f44f8eacc29f938de91b78c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-525ukhcn',
                  apiId: '39960091-4757-468a-a66f-bb3ec82428bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danielspronk/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-525ukhcn.netlify.app', category: 'apps'}
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
