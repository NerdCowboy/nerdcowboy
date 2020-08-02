import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { useMailCheck } from '@qb/use-mailcheck'
import { motion } from 'framer-motion'

import Button from '../../components/library/Button'
import styles from './styles.module.scss'
import { PhoneLink } from '../../components/PhoneLink'
import SEO from '../../components/seo'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isEmailValid, setIsEmailValid] = useState()
  const [isDoneTypingEmail, setIsDoneTypingEmail] = useState(false)
  const emailSuggestion = useMailCheck({ email })

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
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

  return (
    <>
      <SEO title="Contact" />
      <header className={cx('pageHeader', styles.aboutHeader)}>
        <h1 className="pageTitle">Contact</h1>
        <p className="pageSubTitle">
          Have a project you'd like to hire me for or just want to say howdy?
          <br />
          Fill in your info down yonder and I'll get back to you right quick.
        </p>
      </header>

      <div className="textWidth">
        <form action="https://formspree.io/taulars@gmail.com" method="POST">
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
                <h4 className="mbn mts">Slow down there partner!</h4>
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
