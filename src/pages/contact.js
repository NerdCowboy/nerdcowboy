// JS
import React, { Component } from 'react'

import Button from '../components/common/Button'
import Email from '../components/common/Email'

// Styles
import u from '../global-styles/utilities.module.scss'
import btn from '../components/common/c-button.module.scss'
import forms from '../components/common/forms.module.scss'

// Images
import brent from '../../static/images/brent.jpg'

class ContactPage extends Component {
  state = {
    name: '',
    message: '',
    isValid: {
      name: false,
      message: false,
      email: false,
    },
  }

  handleEmailChange = isEmailValid => {
    this.setState({
      isValid: Object.assign(this.state.isValid, { email: isEmailValid }),
    })
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value })
    const isLongEnough = this.state.name.length > 2
    this.setState({
      isValid: Object.assign(this.state.isValid, { name: isLongEnough }),
    })
  }

  handleMessageChange = event => {
    this.setState({ message: event.target.value })
    const isLongEnough = this.state.message.length > 2
    this.setState({
      isValid: Object.assign(this.state.isValid, { message: isLongEnough }),
    })
  }

  render() {
    return (
      <div styleName="u.page-wrapper u.reading-width">
        <h1 styleName="u.mbs u.mtxl">Contact</h1>

        <p>
          Have an interesting project you'd like to hire me for or just want to
          say howdy? Fill in your information down yonder and I'll do my best to
          get back to you.
        </p>

        <form action="https://formspree.io/taulars@gmail.com" method="POST">
          <div styleName="u.mbl">
            <label styleName="forms.label" htmlFor="name">
              Name
              <input
                styleName="forms.input"
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={event => {
                  this.handleNameChange(event)
                }}
              />
            </label>
          </div>

          <Email handleChange={this.handleEmailChange} />

          <div styleName="u.mbl">
            <label styleName="forms.label" htmlFor="message">
              Message
              <textarea
                onChange={this.handleMessageChange}
                value={this.state.message}
                styleName="forms.input"
                rows="10"
                name="message"
                id="message"
              />
            </label>
          </div>

          <input
            type="hidden"
            name="_subject"
            value="New message from NerdCowboy.com"
          />
          <input type="text" name="_gotcha" style={{ display: 'none' }} />

          <input
            styleName="btn.button btn.button--primary"
            type="submit"
            value="Send"
            disabled={!this.state.isValid.email || !this.state.isValid.name}
          />
        </form>
      </div>
    )
  }
}

export default ContactPage
