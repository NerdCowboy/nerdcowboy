const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog-post.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)

  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
                contentType
              }
              frontmatter {
                title
              }
              body
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const allMdxPages = result.data.allMdx.edges
    const pagePosts = allMdxPages.filter(
      (post) => post.node.fields.contentType === 'page'
    )
    const blogPosts = allMdxPages.filter(
      (post) => post.node.fields.contentType === 'blog'
    )

    pagePosts.forEach((post) => {
      createPage({
        path: post.node.fields.slug,
        component: pageTemplate,
        context: {
          slug: post.node.fields.slug,
        },
      })
    })

    blogPosts.forEach((post, index) => {
      const previous =
        index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
      const next = index === 0 ? null : blogPosts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const nodeFieldPerType = (filePath, type, getNodePath) => {
      if (
        node.internal.type === 'Mdx' &&
        node.fileAbsolutePath.includes(filePath)
      ) {
        const value = createFilePath({ node, getNode })
        createNodeField({
          name: 'slug',
          node,
          value: getNodePath(value),
        })
        createNodeField({
          name: 'contentType',
          node,
          value: type,
        })
      }
    }

    nodeFieldPerType(`content/blog`, `blog`, (value) => `/blog${value}`)
    nodeFieldPerType(`content/pages`, `page`, (value) => value)
  }
}
