const getRssBody = (url, html) => {
  const mainBody = html.match(/<main>((.|\n)*)<\/main>/g)[0]
  const mainBodyWithStaticUrls = mainBody.replace(
    /(?<="|\s)\/static\//g,
    `${url}/static/`
  )

  return {
    custom_elements: [
      {
        'content:encoded': mainBodyWithStaticUrls,
      },
    ],
  }
}

module.exports = {
  siteMetadata: {
    title: 'Nerd Cowboy',
    description:
      'UI/UX Designer & Front-end Developer Brent Larson is a problem solver that designs & develops clean and easy-to-use websites that are as slick as a whistle.',
    author: 'Brent Larson',
    siteUrl: 'https://nerdcowboy.com',
    repo: {
      baseUrl: 'https://github.com/NerdCowboy/nerdcowboy/',
      contentPath: 'tree/master/content',
      viewContentPath: 'blob/master/content',
      editContentPath: 'edit/master/content',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
        ignore: [`${__dirname}/content/blog/drafts`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/src/media`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "${__dirname}/src/styles/resources";`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    `gatsby-plugin-mdx-embed`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        // plugins: [`gatsby-remark-videos`, `gatsby-remark-images`],
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          // {
          //   resolve: `gatsby-remark-videos`,
          //   options: {
          //     pipelines: [
          //       {
          //         name: 'vp9',
          //         transcode: (chain) =>
          //           chain
          //             .videoCodec('libvpx-vp9')
          //             .noAudio()
          //             .outputOptions(['-crf 20', '-b:v 0']),
          //         maxHeight: 480,
          //         maxWidth: 900,
          //         fileExtension: 'webm',
          //       },
          //       {
          //         name: 'h264',
          //         transcode: (chain) =>
          //           chain
          //             .videoCodec('libx264')
          //             .noAudio()
          //             .addOption('-profile:v', 'main')
          //             .addOption('-pix_fmt', 'yuv420p')
          //             .outputOptions(['-movflags faststart'])
          //             .videoBitrate('1000k'),
          //         maxHeight: 480,
          //         maxWidth: 900,
          //         fileExtension: 'mp4',
          //       },
          //     ],
          //   },
          // },
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: 'headerAnchorLink',
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
             site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.frontmatter.description,
                tags: edge.node.frontmatter.tags,
                date: edge.node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
                guid: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
                ...getRssBody(site.siteMetadata.siteUrl, edge.node.html),
              })),
            query: `
              {
                allMdx(
                  filter: { fields: { contentType: { eq: "blog" } } }
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                        contentType
                      }
                      frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        subtitle
                        description
                        tags
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Nerd Cowboy',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
