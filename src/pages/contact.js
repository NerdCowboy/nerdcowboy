// JS
import React, { Component } from 'react'
import cx from 'classnames'

import Layout from '../components/common/Layout'
import Button from '../components/common/Button'
import Email from '../components/common/Email'

// Styles
import u from '../global-styles/utilities.module.scss'
import type from '../global-styles/typography.module.scss'
import btn from '../components/common/Button/c-button.module.scss'
import forms from '../components/common/forms.module.scss'

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
      <Layout>
        <div className={cx(u.pageWrapper, u.readingWidth)}>
          <h1 className={cx(type.pageHeader)}>Contact</h1>

          <p>
            Have an interesting project you'd like to hire me for or just want
            to say howdy? Fill in your information down yonder and I'll do my
            best to get back to you.
          </p>

          <form action="https://formspree.io/taulars@gmail.com" method="POST">
            <div className={u.mbl}>
              <label className={forms.label} htmlFor="name">
                Name
                <input
                  className={forms.input}
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

            <div className={u.mbl}>
              <label className={forms.label} htmlFor="message">
                Message
                <textarea
                  onChange={this.handleMessageChange}
                  value={this.state.message}
                  className={forms.input}
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
              className={btn.buttonPrimary}
              type="submit"
              value="Send"
              disabled={!this.state.isValid.email || !this.state.isValid.name}
            />
          </form>
        </div>
      </Layout>
    )
  }
}

export default ContactPage
