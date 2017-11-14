// JS
import React from 'react'

import Button from '../components/common/Button'
import Email from '../components/common/Email'

// Styles
import u from '../global-styles/utilities.module.scss'
import btn from '../components/common/c-button.module.scss'
import forms from '../components/common/forms.module.scss'

// Images
import brent from '../../static/images/brent.jpg'

const AboutPage = () => (
  <div styleName="u.page-wrapper u.reading-width">
    <h1 styleName="u.mbs u.mtxl">Contact</h1>

    <p>
      Have an interesting project you'd like to hire me for or just want to say
      howdy? Fill in your information down yonder and I'll do my best to get
      back to you.
    </p>

    <form action="https://formspree.io/taulars@gmail.com" method="POST">
      <div styleName="u.mbl">
        <label styleName="forms.label" htmlFor="name">
          Name
          <input styleName="forms.input" type="text" name="name" id="name" />
        </label>
      </div>

      <Email />

      <div styleName="u.mbl">
        <label styleName="forms.label" htmlFor="message">
          Message
          <textarea
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
      />
    </form>
  </div>
)

export default AboutPage
