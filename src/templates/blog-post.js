import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import cx from 'classnames'

import SEO from '../components/seo'
import styles from './blog-post-styles.module.scss'

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.mdx
  const { previous, next } = pageContext

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <header className="pageHeader">
        <h1 className="pageTitle">{post.frontmatter.title}</h1>
        <p className="pageSubTitle">{post.frontmatter.subtitle}</p>
        <p className={styles.date}>{post.frontmatter.date}</p>
      </header>
      <div className="textWidth">
        <MDXRenderer className>{post.body}</MDXRenderer>
      </div>

      <ul className={cx('resetList', styles.articleNav)}>
        {previous && (
          <li>
            <div className={styles.prevNextLabel}>Prev Post:</div>
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
            {previous.frontmatter.description}
          </li>
        )}
        {next && (
          <li>
            <div className={styles.prevNextLabel}>Next Post:</div>
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
            {next.frontmatter.description}
          </li>
        )}
      </ul>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        subtitle
        description
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`
