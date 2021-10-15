import React from 'react'
import cx from 'classnames'

import * as styles from  './styles.module.scss'

export const BorderStrap = ({ side = 'left', className }) => (
  <svg
    className={cx(
      styles.borderStrap,
      { [styles.isRightSide]: side === 'right' },
      className
    )}
    viewBox="0 0 8 11"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 .058L8.012 0v10.997H0c2.529-1.145 3.793-2.13 3.793-2.958 0-.827-1.264-1.654-3.793-2.481 2.529-.084 3.793-.723 3.793-1.917S2.53 1.252 0 .058z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)
