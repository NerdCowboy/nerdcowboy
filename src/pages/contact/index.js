import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { useMailCheck } from '@qb/use-mailcheck'
import { navigate } from 'gatsby'
import { motion } from 'framer-motion'

import Button from '../../components/library/Button'
import * as styles from  './styles.module.scss'
import { PhoneLink } from '../../components/PhoneLink'
import SEO from '../../components/seo'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [isNameDirty, setIsNameDirty] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isMessageDirty, setIsMessageDirty] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState()
  const [isDoneTypingEmail, setIsDoneTypingEmail] = useState(false)
  const emailSuggestion = useMailCheck({ email })

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
    setIsNameDirty(true)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
    setIsMessageDirty(true)
  }

  const validateEmail = () => {
    // verifies there's a "@"" and a "." and that
    // there's at least 1 character before
    // and after each
    setIsDoneTypingEmail(true)
    const validation = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    const hasValidated = validation.test(email)
    setIsEmailValid(hasValidated)
  }

  useEffect(() => {
    if (email) {
      const validateTimer = setTimeout(validateEmail, 2000)
      setIsDoneTypingEmail(false)
      return () => clearTimeout(validateTimer)
    }
  }, [email])

  const animateSuggestion = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const animateInputError = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target

    if (!name || !message || !email) {
      setIsNameDirty(true)
      setIsMessageDirty(true)
      setIsDoneTypingEmail(true)
      return
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        name,
        email,
        message,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <>
      <SEO title="Contact" />
      <header className="pageHeader">
        <h1 className="pageTitle">Contact</h1>
        <p className="pageSubTitle">
          Have a project you'd like to hire me for or just want to say howdy?
          <br />
          Fill in your info down yonder and I'll get back to you right quick.
        </p>
      </header>

      <div className="textWidth">
        <form
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label htmlFor="bot-field">
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <div className="mbl">
            <label className={styles.label} htmlFor="name">
              Name
              <input
                className={styles.input}
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(event) => {
                  handleNameChange(event)
                }}
              />
            </label>
            {isNameDirty && !name && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={animateInputError}
                className={styles.error}
              >
                <h4 className="mbn mts">You got a name there, pardner?</h4>
                <p>I'd like to know who I'm talking to.</p>
              </motion.div>
            )}
          </div>

          <div className="mbl">
            <label className={styles.label} htmlFor="email">
              <div>
                <span>Email</span>
                {isDoneTypingEmail && isEmailValid && emailSuggestion && (
                  <motion.div
                    className={styles.emailSuggestion}
                    initial="hidden"
                    animate="visible"
                    variants={animateSuggestion}
                  >
                    <button
                      type="button"
                      className={styles.suggestionButton}
                      onClick={() => setEmail(emailSuggestion.full)}
                    >
                      Did you mean {emailSuggestion.full}?
                    </button>
                  </motion.div>
                )}
              </div>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                className={styles.input}
                onChange={(event) => {
                  handleEmailChange(event)
                }}
                onBlur={validateEmail}
              />
            </label>
            {isDoneTypingEmail && !isEmailValid && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={animateInputError}
                className={styles.error}
              >
                <h4 className="mbn mts">Slow down there, pardner!</h4>
                <p>You need a valid email address so I can email you back.</p>
              </motion.div>
            )}
          </div>

          <div className="mbl">
            <label className={styles.label} htmlFor="message">
              Message
              <textarea
                onChange={handleMessageChange}
                value={message}
                className={styles.input}
                rows="10"
                name="message"
                id="message"
              />
            </label>
            {isMessageDirty && !message && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={animateInputError}
                className={styles.error}
              >
                <h4 className="mbn mts">Got something to say?</h4>
                <p>If you want to send me a message, you need to write one.</p>
              </motion.div>
            )}
          </div>

          <input
            type="hidden"
            name="_subject"
            value="New message from NerdCowboy.com"
          />
          <input type="text" name="_gotcha" style={{ display: 'none' }} />

          <Button
            style={{ display: 'flex', margin: 'auto' }}
            variant="primary"
            type="submit"
          >
            Send Message
          </Button>
        </form>

        <p className={styles.phoneCTA}>
          Or text/call me <PhoneLink className={styles.footerPhoneLink} />
        </p>
      </div>
    </>
  )
}

export default ContactPage
