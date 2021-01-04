/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `jmh6hxgbu7jv`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: `l_XQu6xqZDe2qPgy-XlG0UUSd3BE3wWMxf0l7XbCoYQ`,
    },
  },`gatsby-plugin-react-helmet`,`gatsby-plugin-smoothscroll`,`gatsby-plugin-styled-components`,`gatsby-plugin-svgr-svgo`,`gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },{
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Montserrat`,
       
      ],
      display: 'swap'
    }
  }],
}
