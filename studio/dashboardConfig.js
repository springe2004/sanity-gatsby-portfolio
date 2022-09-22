export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '632c1cc00c0c396ca6480bf9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8w29n37m',
                  apiId: '145d9b9e-7916-49ac-84ec-4e0af79082dd'
                },
                {
                  buildHookId: '632c1cc1e3be7762d052f639',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6om3pid2',
                  apiId: '3a0db149-138c-4de7-a870-ec793bbde3f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/springe2004/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6om3pid2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
