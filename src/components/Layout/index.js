import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

import Nav from '../Nav'
import * as styles from  './styles.module.scss'
// import './styles/resources'
import { IconGithub } from '../Icons'

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <SkipNavLink />
    <Nav />
    <div className={styles.container}>
      <SkipNavContent>
        <main>{children}</main>
      </SkipNavContent>
    </div>
    <footer className={styles.footer}>
      <span>
        Built in <span className={styles.builtIcon} /> AZ
      </span>
      <span>{new Date().getFullYear()} © Nerd Cowboy, LLC</span>
      <a
        className={styles.footerSourceLink}
        href="https://github.com/NerdCowboy/nerdcowboy"
      >
        <IconGithub className={cx(styles.footerIcon, 'mrs')} />
        <span className={styles.footerSourceText}>View Source</span>
      </a>
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
