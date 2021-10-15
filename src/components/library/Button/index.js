/* eslint-disable react/destructuring-assignment */
// Need to disable eslint for button type as it doesn't support dynamic
// types values
// https://github.com/yannickcr/eslint-plugin-react/issues/1555
/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'gatsby'

import * as styles from  './styles.module.scss'

const Button = React.forwardRef(
  ({ children, className, variant, isLink, type, as, ...props }, ref) => {
    const classes = cx(
      styles.button,
      {
        // Variants
        [styles.primary]: !isLink && variant === 'primary',
      },
      className
    )

    let Component = 'button'
    if (props.href) Component = 'a'
    if (props.to) Component = Link
    if (as) Component = as

    // Make sure we pass the default button type
    // if not a link or custom component
    if (!as && !props.href && !props.to) {
      // eslint-disable-next-line no-param-reassign
      props.type = type
    }

    return (
      <Component className={styles.buttonContainer} {...props} ref={ref}>
        <div className={classes}>
          <span className={styles.contentWrapper}>{children}</span>
        </div>
      </Component>
    )
  }
)

Button.defaultProps = {
  size: 'medium',
  variant: 'default',
  type: 'button',
  isLink: false,
  href: null,
  to: null,
}

Button.propTypes = {
  /**
   * Actual size of the button
   */
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  /**
   * Visual style of the button
   */
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'primaryOutline',
    'secondary',
    'light',
    'dark',
    'success',
    'warning',
    'danger',
    'dangerOutline',
    'info',
  ]),
  /**
   * Only need to supply "submit" if using a submit button on a form.
   *
   * Don't ever use "reset" unless you have a really good reason.
   */
  type: PropTypes.string,
  /**
   * Automatically switches to use a <a> link
   */
  href: PropTypes.string,
  /**
   * Automatically switches to use a Gatsby Link
   */
  to: PropTypes.string,
  /**
   * Makes button/link visually appear as a link
   */
  isLink: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['inline'])]),
}

Button.displayName = 'Button'

export default Button
