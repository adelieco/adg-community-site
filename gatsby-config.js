module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // In your gatsby-transformer-remark plugin array
        plugins: [{
          resolve: 'gatsby-remark-emojis',
          options: {
            // Deactivate the plugin globally (default: true)
            active : true,
            // Add a custom css class
            class  : 'emoji-icon',
            // Select the size (available size: 16, 24, 32, 64)
            size   : 64,
            // Add custom styles
            styles : {
              display      : 'inline',
              margin       : '0',
              'margin-top' : '1px',
              position     : 'relative',
              top          : '5px',
              width        : '25px'
            }
          }
        }]
      }
    },
    'gatsby-plugin-glamor',
    'gatsby-plugin-sass',
  ],
}
