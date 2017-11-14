const rootDir = './'

const offlineOptions = {
  staticFileGlobs: [
    `${rootDir}**/*.{js,woff2}`,
    `${rootDir}index.html`,
    `${rootDir}favicons/manifest.json`,
    `${rootDir}offline-plugin-app-shell-fallback/index.html`,
  ],
  stripPrefix: rootDir,
  navigateFallback: `/offline-plugin-app-shell-fallback/index.html`,
  // Only match URLs without extensions.
  // So example.com/about/ will pass but
  // example.com/cheeseburger.jpg will not.
  // We only want the service worker to handle our "clean"
  // URLs and not any files hosted on the site.
  navigateFallbackWhitelist: [/^.*(?!\.\w?$)/],
  cacheId: `gatsby-plugin-offline`,
  // Do cache bust JS URLs until can figure out how to make Webpack's
  // URLs truely content-addressed.
  dontCacheBustUrlsMatching: /(.\w{8}.woff2)/, // |-\w{20}.js)/,
  runtimeCaching: [
    {
      // Add runtime caching of images.
      urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif|tiff)$/,
      handler: `fastest`,
    },
  ],
  skipWaiting: false,
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
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
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
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
        ],
      },
    },
    `gatsby-plugin-offline`, // needs to be after manifest
  ],
}
