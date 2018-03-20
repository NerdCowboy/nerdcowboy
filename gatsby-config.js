module.exports = {
  siteMetadata: {
    title: `Nerd Cowboy - UI/UX Designer & Frontend Developer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        filetypes: {
          '.scss': { syntax: `postcss-scss` },
        },
        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
      },
    },
    // Everything in /static will be copied to an equivalent
    // directory in /public during development and build, so
    // assuming your favicons are in /static/favicons,
    // you can reference them here
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nerd Cowboy - UI/UX Desinger & Frontend Developer`,
        short_name: `Nerd Cowboy`,
        description: `Home of UI/UX Designer & Frontend Developer Brent Larson`,
        lang: `en-US`,
        dir: `ltr`,
        start_url: `/index.html`,
        background_color: `#fafafa`,
        theme_color: `#fafafa`,
        display: `minimal-ui`,
        icons: [
          {
            src: `/favicons/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`, // needs to be after manifest
  ],
}
