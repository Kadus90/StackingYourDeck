module.exports = {
  siteMetadata: {
    title      : `Stacking Your Deck`,
    description: `We are here to help you level up IRL through the use of technology, nerd-culture, philosophies, and intentionality so that you can win in the game of life.`,
    author     : `@kadus90`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name            : `gatsby-starter-default`,
        short_name      : `starter`,
        start_url       : `/`,
        background_color: `#663399`,
        theme_color     : `#663399`,
        display         : `minimal-ui`,
        icon            : `src/images/gatsby-icon.png`,   // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
