import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import SEO from '../components/seo'

const PageTemplate = ({ data }) => {
  const page = data.mdx

  return (
    <>
      <SEO
        title={page.frontmatter.title}
        description={page.frontmatter.description || page.excerpt}
      />
      <header className="pageHeader">
        <h1 className="pageTitle">{page.frontmatter.title}</h1>
        <p className="pageSubTitle">{page.frontmatter.subtitle}</p>
      </header>
      <div className="textWidth">
        <MDXRenderer>{page.body}</MDXRenderer>
      </div>
    </>
  )
}

export default PageTemplate

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
      frontmatter {
        title
        subtitle
        description
        tags
      }
      body
    }
  }
`
