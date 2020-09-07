import React from 'react'
import { graphql } from 'gatsby'
import cx from 'classnames'

import ArticlesPreview from '../../components/ArticlesPreview'
import styles from './styles.module.scss'
import SEO from '../../components/seo'

const Blog = ({ data }) => {
  const posts = data.allMdx.edges
  const previewArticles = posts.slice(0, 2)
  // const restOfArticles = posts.slice(2)
  const pageDescription =
    'My thoughts, tips, and tricks on front-end development and UI/UX Design'
  return (
    <>
      <SEO
        title="Blog"
        keywords={[`blog`, `gatsby`, `javascript`, `react`, `UI/UX`, `design`]}
        description={pageDescription}
      />

      <header className="pageHeader">
        <h1 className="pageTitle">Blog</h1>
        <p className="pageSubTitle">{pageDescription}</p>
      </header>
      <ArticlesPreview articles={previewArticles} />

      <div className={cx(styles.archive, 'textWidth')}>
        {/* <h2 className={styles.archiveTitle}>More Nerd Posts</h2> */}
        {/* {restOfArticles.map((article) => (
          <Link
            to={article.node.fields.slug}
            className={styles.articleLink}
            key={article.node.id}
          >
            <div className={styles.articleContent}>
              <header>
                <h3 className={styles.articleTitle}>
                  {article.node.frontmatter.title}
                </h3>
                <p className={styles.subtitle}>
                  {article.node.frontmatter.subtitle}
                </p>
              </header>
              {article.node.frontmatter.lead || article.node.excerpt}
            </div>
          </Link>
        ))} */}
      </div>
    </>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fields: { contentType: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            contentType
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            subtitle
            lead
            tags
          }
          id
        }
      }
    }
  }
`
