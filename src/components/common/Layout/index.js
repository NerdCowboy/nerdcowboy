// JS
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import cx from 'classnames'

import Header from './Header'

import u from '../../../global-styles/utilities.module.scss'
import layout from './layout.module.scss'
import { homedir } from 'os'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className={layout.mainWrapper}>
        <Helmet>
          {/* Need to add language to html tag for better accessibility */}
          <html lang="en" />
          <title>Nerd Cowboy - UI/UX Designer & Frontend Developer</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Home of UI/UX Designer & Frontend Developer Brent Larson"
          />
          <meta keywords="UI Designer, UX Designer, Frontend Developer, Brent Larson, Web Design" />

          {/* Make Mobile Friendly */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
          />

          {/* Turn on compatibility mode for IE 8-10 */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Patua+One"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Libre+Franklin:400,400i,700"
            rel="stylesheet"
          />

          {/* Favicons */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="./favicons/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="./favicons/safari-pinned-tab.svg"
            color="#ed5e27"
          />

          <script src="./fullstory.js" />

          <meta name="apple-mobile-web-app-title" content="Nerd Cowboy" />
          <meta name="application-name" content="Nerd Cowboy" />
          <meta name="theme-color" content="#fafafa" />
        </Helmet>

        <Header />

        <main>{children}</main>

        <footer className={layout.footer}>
          <span>
            Built in <span className={layout.builtIcon} /> AZ
          </span>
          <span className={u.mrs}>
            {new Date().getFullYear()} © Nerd Cowboy, LLC
          </span>
          <a
            className={cx(layout.footerSourceLink, u.actualLink)}
            href="https://github.com/NerdCowboy/nerdcowboy"
          >
            <svg
              className={layout.footerIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 28.99"
            >
              <title>Github</title>
              <g>
                <path d="M15 0a14.85 14.85 0 0 0-4.74 29c.75.14 1-.32 1-.71v-2.77c-4.17.9-5.05-1.75-5.05-1.75a3.94 3.94 0 0 0-1.67-2.17c-1.36-.92.1-.9.1-.9a3.15 3.15 0 0 1 2.3 1.53 3.21 3.21 0 0 0 4.37 1.24 3.15 3.15 0 0 1 1-2c-3.33-.38-6.83-1.65-6.83-7.35A5.72 5.72 0 0 1 7 10.1a5.3 5.3 0 0 1 .15-3.93s1.26-.4 4.13 1.52a14.36 14.36 0 0 1 7.51 0c2.86-1.92 4.12-1.52 4.12-1.52A5.29 5.29 0 0 1 23 10.1a5.72 5.72 0 0 1 1.54 4c0 5.71-3.51 7-6.85 7.33a3.53 3.53 0 0 1 1 2.75v4.08s.27.86 1 .71A14.85 14.85 0 0 0 15 0z" />
              </g>
            </svg>
            <span className={u.fauxLink}>View Source</span>
          </a>
        </footer>
      </div>
    )
  }
}

export default Template
