import React from 'react'
import cx from 'classnames'

import styles from './styles.module.scss'
import SEO from '../../components/seo'

const ContactThanksPage = () => (
  <>
    <SEO title="Contact" />
    <header className={cx('pageHeader', styles.aboutHeader)}>
      <h1 className="pageTitle">Boy, Howdy!</h1>
      <p className="pageSubTitle">Your message has been sent!</p>
    </header>
    <div>
      <p className="textWidth tac">
        Once the pony express figures out how to deliver your electronic mail,
        I'll get back to you faster than a sneeze through a screen door!
      </p>
    </div>
  </>
)

export default ContactThanksPage
