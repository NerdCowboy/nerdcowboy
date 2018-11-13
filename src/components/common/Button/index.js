import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.renderAnchor = this.renderAnchor.bind(this)
  }

  static propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    onClick: PropTypes.func,
    // componentClass: elementType,
    to: PropTypes.string,
    /**
     * Defines HTML button type attribute
     * @defaultValue 'button'
     */
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
  }

  static defaultProps = {
    active: false,
    block: false,
    disabled: false,
  }

  renderAnchor() {
    return <Link to={to}>{children}</Link>
  }

  render() {
    return this.renderAnchor()
  }
}

export default Button
