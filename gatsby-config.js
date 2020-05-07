const process = require('process')

module.exports = {
  pathPrefix: `/gatsby-creative`,
  siteMetadata: {
    title: `EarSaver`,
    description: `EarSaver maakt het dragen van een mondkapje een stuk comfortabeler.`,
    author: `Daan van Hasselt`,
    siteUrl: `https://www.earsaver.nl`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    /*{
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) => allSitePage.edges
          .map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path, // https://sitemaps.com/page-path
              changefreq: 'daily',
              priority: 0.7,
              links: [
                // https://sitemaps.com/page-path
                { lang: 'nl', url: site.siteMetadata.siteUrl + edge.node.path },
                // https://sitemaps.com/en/page-path
                { lang: 'en', url: `${site.siteMetadata.siteUrl}/en${edge.node.path}` }
              ]
            };
          })
      }
    },*/
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1A79F9`,
        theme_color: `#1A79F9`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Merriweather:400,300,300italic,400italic,700,700italic', 'Merriweather+Sans:400,700']
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
