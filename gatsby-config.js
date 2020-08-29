module.exports = {
  siteMetadata: {
    title: 'Nerd Cowboy',
    description:
      'UI/UX Designer & Front-end Developer Brent Larson is a problem solver that designs & develops clean and easy-to-use websites that are as slick as a whistle.',
    author: 'Brent Larson',
    siteUrl: 'https://nerdcowboy.com',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: `./src/styles/resources.scss`,
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
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.frontmatter.lead || edge.node.excerpt,
                data: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              })),

            /* if you want to filter for only published posts, you can do
             * something like this:
             * filter: { frontmatter: { published: { ne: false } } }
             * just make sure to add a published frontmatter field to all posts,
             * otherwise gatsby will complain
             * */
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                    html
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: 'Gatsby RSS feed',
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
