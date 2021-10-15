import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import cx from 'classnames'

import WalmartLogo from '../media/svgs/walmart-logo.svg'
import CvsLogo from '../media/svgs/cvs-health-logo.svg'
import TivityLogo from '../media/svgs/tivity-health-logo.svg'
// Can't start filename with a number due to svgr
import Twenty47Logo from '../media/svgs/twenty47-logo.svg'
import ArticlesPreview from '../components/ArticlesPreview'
import { IconCircleRightArrow } from '../components/Icons'

import * as styles from  './styles.module.scss'
import Button from '../components/library/Button'
import SEO from '../components/seo'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "images/headshot-square.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 240, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      # Testimonials
      jared: file(relativePath: { eq: "images/recommendation-jared.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      bas: file(relativePath: { eq: "images/recommendation-bas.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      roland: file(relativePath: { eq: "images/recommendation-roland.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      # Blog
      allMdx(
        limit: 2
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
              description
              tags
            }
            id
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO description="Brent Larson wrangles code and pixels at Tivity Health as a Sr. UI/UX developer" />
      <div>
        {/* Intro */}
        <div className={styles.intro}>
          <div className={styles.headshotWrapper}>
            <Img
              className={cx(styles.borderCircleImg, styles.headshotImg)}
              fluid={data.headshot.childImageSharp.fluid}
              alt="Headshot of me looking dapper"
            />
          </div>
          <div className={styles.introCopy}>
            <h1>Howdy! I’m Brent Larson</h1>
            <p>
              I wrangle code and pixels at{' '}
              <a href="https://tivityhealth.com">Tivity Health</a> as a Sr.
              UI/UX Developer
            </p>
          </div>
        </div>

        {/* Worked With */}
        <div className={styles.workedWith}>
          <h2 className={cx(styles.capsTitle, styles.workedWithTitle)}>
            I’ve Worked With
          </h2>
          <div className={styles.logos}>
            <WalmartLogo  />
            <div className={styles.border} />
            <TivityLogo />
            <div className={styles.border} />
            <Twenty47Logo className={styles.twenty47Logo} />
            <div className={styles.border} />
            <CvsLogo />
          </div>
        </div>

        {/* Testimonials */}
        <div className={styles.quotes}>
          {/* Jared */}
          <blockquote className={styles.quote}>
            <p>
              Brent has an incredible talent for arranging a complex set of
              pieces into an intuitive product.
            </p>
            <footer>
              <cite>
                <a
                  href="https://linkedin.com/in/nerdcowboy#recommendations"
                  title="View on LinkedIn"
                  className={styles.quoteLink}
                >
                  <div className={styles.quoteImgWrapper}>
                    <Img
                      fluid={data.jared.childImageSharp.fluid}
                      className={styles.borderCircleImg}
                      alt="Jared Ray"
                    />
                  </div>
                  <span>
                    <span className={cx(styles.quoteAuthorName)}>
                      Jared Ray
                    </span>
                    <span className={styles.quoteAuthorTitle}>
                      Fmr. Manager of Marketing & Client Services at SyCara
                      Local
                    </span>
                  </span>
                </a>
              </cite>
            </footer>
          </blockquote>

          {/* Bas */}
          <blockquote className={styles.quote}>
            <p>
              Working with Brent feels like working with a team of 2 to 3
              people.
            </p>
            <footer>
              <cite>
                <a
                  href="https://linkedin.com/in/nerdcowboy#recommendations"
                  title="View on LinkedIn"
                  className={styles.quoteLink}
                >
                  <div className={styles.quoteImgWrapper}>
                    <Img
                      fluid={data.bas.childImageSharp.fluid}
                      className={styles.borderCircleImg}
                      alt="Bas Van Helvoort"
                    />
                  </div>
                  <span>
                    <span className={cx(styles.quoteAuthorName)}>
                      Bas Van Helvoort
                    </span>
                    <span className={styles.quoteAuthorTitle}>
                      Fmr. Product Manager at [24]7.ai
                    </span>
                  </span>
                </a>
              </cite>
            </footer>
          </blockquote>

          {/* Roland */}
          <blockquote className={styles.quote}>
            <p>
              Brent is an amazing colleague to work with, and expertly comes up
              with new solutions to complex problems.
            </p>
            <footer>
              <cite>
                <a
                  href="https://linkedin.com/in/nerdcowboy#recommendations"
                  title="View on LinkedIn"
                  className={styles.quoteLink}
                >
                  <div className={styles.quoteImgWrapper}>
                    <Img
                      fluid={data.roland.childImageSharp.fluid}
                      className={styles.borderCircleImg}
                      alt="Roland Coops"
                    />
                  </div>
                  <span>
                    <span className={cx(styles.quoteAuthorName)}>
                      Roland Coops
                    </span>
                    <span className={styles.quoteAuthorTitle}>
                      Fmr. Frontend Developer at [24]7.ai
                    </span>
                  </span>
                </a>
              </cite>
            </footer>
          </blockquote>
        </div>

        <div className={styles.ctaSection}>
          <p>Interested in working with me?</p>
          <Button variant="primary" as={Link} to="/contact/">
            Get in Touch
          </Button>
        </div>

        <div className={styles.blogPreview}>
          <header className={styles.blogHeader}>
            <h2 className={cx(styles.capsTitle, styles.blogTitle)}>
              Nerd Posts
            </h2>
            <Link to="blog" className={styles.viewAllLink}>
              View All <IconCircleRightArrow />
            </Link>
          </header>
          <ArticlesPreview articles={data.allMdx.edges} />
        </div>
      </div>
    </>
  )
}

export default IndexPage
