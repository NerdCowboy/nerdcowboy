import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import cx from 'classnames'

import WalmartLogo from '../media/svgs/walmart-logo.svg'
import CvsLogo from '../media/svgs/cvs-health-logo.svg'
import TivityLogo from '../media/svgs/tivity-health-logo.svg'
// Can't start filename with a number due to svgr
import Twenty47Logo from '../media/svgs/twenty47-logo.svg'
import Layout from '../components/Layout'
import ArticlesPreview from '../components/ArticlesPreview'
import { IconCircleRightArrow } from '../components/Icons'

import styles from './styles.module.scss'
import Button from '../components/library/Button'

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
            <h1 className={styles.introTitle}>Howdy! I’m Brent Larson</h1>
            <p>
              I wrangle code and pixels at{' '}
              <a href="https://tivityhealth.com">Tivity Health</a> as a Sr.
              UI/UX Developer, and I'm an organizer for{' '}
              <a href="https://www.meetup.com/IXDA-Phoenix/">
                <abbr title="Interaction Design Association">IxDA</abbr> Phoenix
              </a>
            </p>
          </div>
        </div>

        {/* Worked With */}
        <div className={styles.workedWith}>
          <h2 className={cx(styles.capsTitle, styles.workedWithTitle)}>
            I’ve Worked With
          </h2>
          <div className={styles.logos}>
            {/* <div className={styles.logoWrapper}> */}
            <WalmartLogo className={styles.walmartLogo} />
            {/* </div> */}
            <div className={styles.border} />
            {/* <div className={styles.logoWrapper}> */}
            <TivityLogo className={styles.tivityLogo} />
            {/* </div> */}
            <div className={styles.border} />
            {/* <div className={styles.logoWrapper}> */}
            <Twenty47Logo className={styles.twenty47Logo} />
            {/* </div> */}
            <div className={styles.border} />
            {/* <div className={styles.logoWrapper}> */}
            <CvsLogo />
            {/* </div> */}
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
            <footer className={styles.quoteAuthor}>
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
            <footer className={styles.quoteAuthor}>
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
            <footer className={styles.quoteAuthor}>
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
