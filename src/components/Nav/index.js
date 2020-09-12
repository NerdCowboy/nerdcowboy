/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { Link } from 'gatsby'
import VisuallyHidden from '@reach/visually-hidden'
import cx from 'classnames'

import LogoEmblem from '../LogoEmblem'
import LogoText from '../LogoText'
import styles from './styles.module.scss'
import { BorderStrap } from '../svgs/BorderStrap'
import { IconGithub, IconTwitter, IconLinkedIn } from '../Icons'
import { BorderRounded } from '../svgs/BorderRounded'
import { PhoneLink } from '../PhoneLink'

const Nav = () => (
  <div className={styles.navContainer}>
    {/* Top Header */}
    <div className={styles.header}>
      <div className={styles.topRow}>
        <PhoneLink className={cx(styles.socialLink)} />

        <ul className={styles.social}>
          <li className={styles.item}>
            <a
              className={styles.socialLink}
              href="https://twitter.com/NerdCowboy"
              title="Twitter"
            >
              <VisuallyHidden>Twitter</VisuallyHidden>
              <IconTwitter className={styles.socialIcon} />
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.socialLink}
              href="https://github.com/NerdCowboy"
              title="Github"
            >
              <VisuallyHidden>Github</VisuallyHidden>
              <IconGithub className={styles.socialIcon} />
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.socialLink}
              href="https://www.linkedin.com/in/nerdcowboy/"
              title="LinkedIn"
            >
              <VisuallyHidden>LinkedIn</VisuallyHidden>
              <IconLinkedIn className={styles.socialIcon} />
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Nav */}
    <nav>
      <ul className={styles.nav}>
        <li className={styles.logoContainer}>
          {/* Hacky Logo placeholder for flexbox */}
          <LogoEmblem className={styles.logoPlaceholder} />
          {/* Top Border */}
          <div className={styles.topBorderWrapper}>
            <div className={styles.topBorder}>
              <BorderStrap className={cx(styles.borderStrap, styles.isLeft)} />
              <BorderRounded
                className={cx(styles.borderRounded, styles.isRight)}
              />
              <BorderStrap
                className={cx(styles.borderStrap, styles.isRight)}
                side="right"
              />
            </div>
            <Link
              to="/"
              className={styles.logoLink}
              activeClassName={styles.isActive}
            >
              <LogoEmblem className={styles.logo} />
              <VisuallyHidden>Home</VisuallyHidden>
            </Link>
            <div className={cx(styles.topBorder, styles.topBorderRight)}>
              <BorderRounded
                className={cx(styles.borderRounded, styles.isLeft)}
                side="right"
              />
              <BorderStrap
                side="right"
                className={cx(styles.borderStrap, styles.isRight)}
              />
            </div>
          </div>
        </li>
        <li>
          <Link
            className={styles.navLink}
            to="/about/"
            activeClassName={styles.isActive}
          >
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link
            className={styles.navLink}
            to="/blog/"
            activeClassName={styles.isActive}
          >
            <span>Blog</span>
          </Link>
        </li>

        <li>
          <Link
            className={styles.navLink}
            to="/uses/"
            activeClassName={styles.isActive}
          >
            <span>Uses</span>
          </Link>
        </li>
        <li>
          <Link
            className={styles.navLink}
            to="/contact/"
            activeClassName={styles.isActive}
          >
            <span>Contact</span>
          </Link>
        </li>
      </ul>

      <div className={styles.bottomBorderWrapper}>
        <div className={styles.bottomBorder} />
        {/* Remove from tabindex since we already have it in the ul */}
        <Link to="/" tabIndex="-1" className={styles.logoTextLink}>
          <LogoText className={styles.logoText} />
        </Link>
        <div className={cx(styles.bottomBorder, styles.isRight)} />
      </div>
    </nav>
  </div>
)

export default Nav
