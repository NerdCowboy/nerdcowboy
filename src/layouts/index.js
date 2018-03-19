// JS
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Header from './Header'

import u from '../global-styles/utilities.module.scss'
import layout from './layout.module.scss'

const TemplateWrapper = ({ children }) => (
  <div>
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

      {/* Favicons & Manifest */}
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
      <meta name="apple-mobile-web-app-title" content="Nerd Cowboy" />
      <meta name="application-name" content="Nerd Cowboy" />
      <meta name="theme-color" content="#fafafa" />
    </Helmet>
    <Header />
    <div>
      {children()}
      <div styleName="layout.footer">
        <span styleName="u.mrs">
          {new Date().getFullYear()} © Nerd Cowboy, LLC
        </span>
        •
        <a styleName="u.mls" href="https://github.com/NerdCowboy/nerdcowboy">
          View Source
        </a>
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
