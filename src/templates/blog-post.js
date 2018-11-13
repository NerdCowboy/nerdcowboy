import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import cx from 'classnames'

import type from '../global-styles/typography.module.scss'
import u from '../global-styles/utilities.module.scss'
import btn from '../components/common/Button/c-button.module.scss'
import Layout from '../components/common/Layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <article className={cx(u.pageWrapper)}>
          <header>
            <h1 className={type.pageHeader}>{post.frontmatter.title}</h1>
            {post.frontmatter.subTitle && (
              <h2 className={type.pageSubHeader}>
                {post.frontmatter.subTitle}
              </h2>
            )}
          </header>
          <div className={u.contentWrapper}>
            {/* <p>{post.frontmatter.date}</p> */}
            <div
              className={u.readingWidth}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>

          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
              margin: '1rem 0',
            }}
          >
            <li>
              {previous && (
                <Link
                  className={btn.button}
                  to={previous.fields.slug}
                  rel="prev"
                >
                  <span className={btn.hoverLeft}>←</span>{' '}
                  {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link className={btn.button} to={next.fields.slug} rel="next">
                  {next.frontmatter.title}{' '}
                  <span className={btn.hoverRight}>→</span>
                </Link>
              )}
            </li>
          </ul>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        subTitle
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
