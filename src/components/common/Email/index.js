import React, { Component } from 'react'
import MailCheck from 'react-mailcheck'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'

import u from '../../../global-styles/utilities.module.scss'
import forms from '../forms.module.scss'
import alerts from '../alerts.module.scss'
import button from '../Button/c-button.module.scss'

class Email extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
  }

  state = {
    inputText: '',
    hasValidEmail: true,
  }

  componentWillUnmount() {
    this.clearTypingTimer()
  }

  handleChange = event => {
    this.setState({ inputText: event.target.value })
  }

  hasStartedTyping = () => {
    this.clearTypingTimer()
  }

  hasStoppedTyping = () => {
    this.clearTypingTimer()
    this.isDoneTyping = window.setTimeout(this.validateEmail, 2000)
  }

  hasBlurred = () => {
    this.isDoneTyping = true
    this.validateEmail()
  }

  clearTypingTimer = () => {
    window.clearTimeout(this.isDoneTyping)
    this.isDoneTyping = null
  }

  validateEmail = () => {
    // verifies there's a "@"" and a "." and that
    // there's at least 1 character before
    // and after each
    const validation = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    const emailTest = validation.test(this.state.inputText)
    this.setState({ hasValidEmail: emailTest })
    this.props.handleChange(emailTest)
  }

  useSuggestedEmail = suggestion => {
    this.setState({ inputText: suggestion.full })
    this.clearTypingTimer()
    this.validateEmail()
  }

  renderError = () => {
    let cxForms = cx.bind(forms)
    const errorClasses = cx(
      forms.slideIn,
      alerts.alert,
      alerts.warningText,
      cxForms({
        slideInIsActive: !this.state.hasValidEmail && this.isDoneTyping,
      })
    )
    return (
      <div className={errorClasses}>
        <h4 className={cx(u.mbn, u.mts)}>Slow down there partner!</h4>
        <p>You need a valid email address so I can email you back.</p>
      </div>
    )
  }

  renderSuggestion = suggestion => {
    const classes = cx(u.fontSize075, u.fontWeightNormal, button.link)
    let cxU = cx.bind(u)
    const fadeClasses = cx(
      u.fadeIn,
      cxU({
        fadeInIsActive: suggestion && this.isDoneTyping,
      })
    )

    if (suggestion) {
      return (
        <span className={`${fadeClasses}`}>
          {this.isDoneTyping && (
            <button
              className={`${classes}`}
              onClick={() => this.useSuggestedEmail(suggestion)}
            >
              Did you mean {suggestion.full}?
            </button>
          )}
        </span>
      )
    }
  }

  render() {
    return (
      <MailCheck email={this.state.inputText}>
        {suggestion => (
          <div className={u.mbl}>
            <label className={forms.label} htmlFor="email">
              Email
              {this.renderSuggestion(suggestion)}
              <input
                type="email"
                name="email"
                id="email"
                value={this.state.inputText}
                className={forms.input}
                onKeyDown={this.hasStartedTyping}
                onKeyUp={this.hasStoppedTyping}
                onChange={event => {
                  this.handleChange(event)
                }}
                onBlur={this.hasBlurred}
              />
            </label>
            {this.renderError()}
          </div>
        )}
      </MailCheck>
    )
  }
}

export default Email
