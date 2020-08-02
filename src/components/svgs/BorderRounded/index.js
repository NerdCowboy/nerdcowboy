import React from 'react'
import cx from 'classnames'

import styles from './styles.module.scss'

export const BorderRounded = ({ side = 'left', className }) => (
  <svg
    className={cx(
      styles.borderRounded,
      { [styles.isRightSide]: side === 'right' },
      className
    )}
    viewBox="0 0 6 11"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.573 0a25.236 25.236 0 00.19 11.03H.007V.008L5.573.001z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)
