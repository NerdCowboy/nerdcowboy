import React, { Component } from 'react'
import MailCheck from 'react-mailcheck'
import classnames from 'classnames'

import u from '../../../global-styles/utilities.module.scss'
import forms from '../forms.module.scss'
import alerts from '../alerts.module.scss'
import button from '../c-button.module.scss'

class Email extends Component {
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
    this.hasStartedTyping()
    this.isDoneTyping = window.setTimeout(this.validateEmail, 2000)
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
  }

  useSuggestedEmail = suggestion => {
    this.setState({ inputText: suggestion.full })
    this.clearTypingTimer()
    this.validateEmail()
  }

  renderError = () => {
    const errorClasses = classnames(
      'forms.slide-in',
      'alerts.alert',
      'alerts.warning-text',
      {
        'forms.slide-in--is-active':
          !this.state.hasValidEmail && this.isDoneTyping,
      }
    )
    return (
      <div styleName={`${errorClasses}`}>
        <h4 styleName="u.mbn u.mts">Slow down there partner!</h4>
        <p>You need a valid email address so I can email you back.</p>
      </div>
    )
  }

  renderSuggestion = suggestion => {
    const classes = classnames(
      'u.font-size-0-75',
      'u.font-weight-normal',
      'button.link'
    )

    const fadeClasses = classnames('u.fade-in', {
      'u.fade-in--active': suggestion && this.isDoneTyping,
    })
    if (suggestion) {
      return (
        <span styleName={`${fadeClasses}`}>
          {this.isDoneTyping && (
            <button
              styleName={`${classes}`}
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
          <div styleName="u.mbl">
            <label styleName="forms.label" htmlFor="email">
              Email
              {this.renderSuggestion(suggestion)}
              <input
                type="email"
                name="email"
                id="email"
                value={this.state.inputText}
                styleName="forms.input"
                onKeyDown={this.hasStartedTyping}
                onKeyUp={this.hasStoppedTyping}
                onChange={event => {
                  this.handleChange(event)
                }}
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
