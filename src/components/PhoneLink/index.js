import React, { useRef, useState } from 'react'
import cx from 'classnames'

import { IconCowbell } from '../Icons'
import moreCowbellSrc from '../../media/audio/gotta-have-more-cowbell-loud.m4a'
import * as styles from  './styles.module.scss'

export const PhoneLink = ({ className, ...props }) => {
  const [hoverCount, setHoverCount] = useState(0)
  const moreCowbellRef = useRef()
  const gottaHaveMoreCowbell = () => {
    setHoverCount(hoverCount + 1)
    if (hoverCount > 1) {
      moreCowbellRef.current.play()
    }
  }
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={moreCowbellRef}>
        <source src={moreCowbellSrc} type="audio/mp4" />
      </audio>
      <a
        href="tel:1-480-268-2355"
        className={cx(styles.phoneLink, className)}
        onClick={gottaHaveMoreCowbell}
        onMouseEnter={gottaHaveMoreCowbell}
        {...props}
      >
        <IconCowbell />
        <span className={styles.phoneNumber}>480-COWBELL</span>
      </a>
    </>
  )
}
