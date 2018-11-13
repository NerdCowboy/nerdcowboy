// JS
import React from 'react'
import cx from 'classnames'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/common/Layout'

// Styles
import u from '../../global-styles/utilities.module.scss'
import type from '../../global-styles/typography.module.scss'
import cButton from '../../components/common/Button/c-button.module.scss'

// Images
import brent from './images/brent.jpg'

class AboutPage extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title={`About | ${siteTitle}`}
        />
        <article className={cx(u.pageWrapper, u.readingWidth)}>
          <h1 className={cx(type.pageHeader)}>About</h1>

          <div className={u.contentWrapper}>
            <img
              src={brent}
              alt="Brent Larson in a nice, gray suit looking all fancy."
            />

            <div className={u.mbxl}>
              <h3>The Skinny</h3>
              <p>
                I’ve been creating things on the web for over 10 years. I’m
                passionate about learning and growing as a designer and a
                developer, as a budding{' '}
                <a href="https://uxdesign.cc/the-spectrum-of-digital-design-roles-in-2018-3286390a9966">
                  "unicorn" designer.
                </a>
              </p>
              <p>
                I love designing because I love solving people’s problems.
                (Sometimes this gets me in trouble with my wife…)
              </p>
              <p>
                I love developing because I love being able to bring the vision
                I have for a design to life.
              </p>
              <p>
                I focus on making usable, performant, and accessible websites
                and apps as I believe those are the fundamental things every
                design should have.
              </p>
            </div>

            <div className={u.mbxl}>
              <h3>My Design Process</h3>
              <p className={u.mbs}>
                I tend to follow a Lean UX model so I can help deliver something
                of value quickly, but as always, it depends on the project.
              </p>
              <Link className={cButton.button} to="blog/2018/design-process/">
                Learn about my design process
              </Link>
            </div>

            <div className={u.mbxl}>
              <h3>Uses</h3>
              <p className={u.mbs}>
                Since some folks are curious, I wrote about what apps and
                services I use and my office setup.
              </p>
              <Link className={cButton.button} to="/blog/2018/uses/">
                Check out what I use
              </Link>
            </div>

            <div className={u.mbxl}>
              <h3>Why Nerd Cowboy</h3>
              <p>
                If you want to be memorable with a generic name like Brent
                Larson, you need something that’s unique and memorable to help
                make you stick out.
              </p>

              <p className={u.mbs}>
                Nerd = Because I am
                <br />
                Cowboy = I grew up on a dairy farm and I live in Arizona
              </p>
            </div>

            <div className={u.mbxl}>
              <h3>Getting Personal</h3>
              <p>
                I grew up on a small, dairy farm in Minnesota. I made a terrible
                farmer, but thankfully, I was good with computers. I graduated
                from Minnesota State University Moorhead (MSUM) with a degree in
                Graphic Communications and migrated to Arizona shortly
                thereafter. I'm currently living in Mesa, Arizona with my
                beautiful wife, Kimberly, and our handsome dog, Chauncey.
              </p>

              <p>
                When I’m not learning more about design and development, I love
                to exercise, hike, play/watch sports, cook, and make fancy
                cocktails.
              </p>
            </div>
          </div>
        </article>
      </Layout>
    )
  }
}

export default AboutPage
