import React from 'react'
import cx from 'classnames'

import * as styles from  './styles.module.scss'
import SEO from '../../components/seo'

const ContactThanksPage = () => (
  <>
    <SEO title="Contact" />
    <header className="pageHeader">
      <h1 className="pageTitle">Boy, Howdy!</h1>
      <p className="pageSubTitle">Your message has been sent</p>
    </header>
    <div className="textWidth">
      <p className="tac">
        The digital pony express is riding nonstop to deliver your message to my
        mailbox.
      </p>
      <p className="tac">
        Rest assured, I'll get back to you faster than a sneeze through a screen
        door!
      </p>
    </div>
  </>
)

export default ContactThanksPage
