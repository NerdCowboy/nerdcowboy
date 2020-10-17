import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import cx from 'classnames'

import styles from './styles.module.scss'
import SEO from '../../components/seo'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "images/headshot-wide.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 16000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO
        title="About"
        description="Brent Larson wrangles code and pixels at Tivity Health as a Sr. UI/UX developer, and is an organizer for IXDA."
      />
      <header className={cx('pageHeader', styles.aboutHeader)}>
        <h1 className="pageTitle">About Me</h1>
        <p className="pageSubTitle">
          I wrangle code and pixels at{' '}
          <a href="https://tivityhealth.com">Tivity Health</a> as a Sr. UI/UX
          Developer, and I'm an organizer for{' '}
          <a href="https://www.meetup.com/IXDA-Phoenix/">
            <abbr title="Interaction Design Association">IxDA</abbr> Phoenix
          </a>
        </p>
      </header>

      <div className={styles.headshotWrapper}>
        <Img
          className={styles.headshot}
          fluid={data.headshot.childImageSharp.fluid}
          alt="Headshot of me looking dapper"
        />
      </div>

      <div className="textWidth">
        <h2>What I Do</h2>
        <p>
          While earning a degree in Graphic Communications from Minnesota State
          University Moorhead, I discovered I didn’t have to choose between
          design or development.
        </p>
        <p>
          Designing and coding for over 12 years has allowed me to acquire a
          wide breadth of skills that help me bring ideas to life quickly and to
          think of creative solutions to complex problems.
        </p>
        <h3>How I Work</h3>
        <p>
          Many designers get stuck in the trap of creating design artificats
          that get them no closer to a solution. When I create mockups, I refer
          to them as "conversation pieces."{' '}
          {/* TODO: add back link when article is finished */}
          {/* <Link to="/blog/design-artifacts/">“conversation pieces.”</Link>{' '} */}
          They’re meant to be iterated on and adjusted to meet deadlines.
        </p>
        <p>I do my best to never waste time.</p>
        <p>
          I loosely follow a{' '}
          <a
            href="https://www.scaledagileframework.com/lean-ux/"
            rel="noopener noreferrer"
          >
            Lean UX model
          </a>
          , by creating a prototype (clickable or coded) and regularly test it
          to ensure no time is wasted going too far down the wrong path.
        </p>
        <p>
          Through research-led UI/UX design decisions, I’m able to design clean,
          accessible, intuitive, and professionally polished user interfaces
        </p>
        <p>
          <Link to="/my-design-process">Read more about my design process</Link>
        </p>
        <p>
          I primarily develop in Javascript using{' '}
          <a href="https://reactjs.org/" rel="noopener noreferrer">
            React
          </a>{' '}
          and frameworks like{' '}
          <a href="https://www.gatsbyjs.org/" rel="noopener noreferrer">
            Gatsby
          </a>{' '}
          (used to build this site). Since I’m also a designer, I naturally fell
          into specializing in CSS, which also makes me masochist 🙃. I also
          care about accessibilty and do my best to make sure my HTML is
          semantic with proper aria labels and I use colors with good contrast.
          Since I hate wasting time, creating well-organized, maintainable, and
          extensible code is also very important to me.
        </p>
        <p>
          I’m comfortable in any agile workflow, contributing to teams that
          followed Scrum, Kanban, and{' '}
          <abbr title="eXtreme Programming">XP</abbr>. I’ve helped transform
          teams to become more agile, instituting retrospectives on multiple
          teams that didn’t already follow the practice to ensure continual
          improvement.
        </p>
        <p>
          I’m an active advocate for the local UX community, serving as an event
          organizer and website designer/developer for{' '}
          <abbr title="Interaction Design Association">IxDA</abbr> Phoenix and I
          frequently offer mentorship to colleagues and those looking to get
          into the industry.
        </p>

        <h3>Getting Personal</h3>
        <p>
          I grew up on a small, dairy farm in Minnesota. Farming was never
          really my thing, so when my dad bought a Windows 3.1 computer to help
          with his accounting, it opened up a whole world for me.
        </p>
        <p>
          I'm currently living in Mesa, Arizona with my beautiful wife,
          Kimberly, and our handsome dog, Chauncey.
        </p>
        <p>
          When I’m not learning more about design and development, I like to
          work out, hike, play/watch sports, cook, make cocktails, garden, and
          study languages.
        </p>
      </div>
    </>
  )
}

export default AboutPage
