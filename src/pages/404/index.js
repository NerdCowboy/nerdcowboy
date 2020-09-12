import React from 'react'

import styles from './styles.module.scss'

import tumbleweed from './images/404-tumbleweed.svg'
import SEO from '../../components/seo'
import Button from '../../components/library/Button'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not Found" />
    <div className="textWidth tac">
      <header className="pageHeader">
        <h1 className="pageTitle">This page is a goner</h1>
      </header>
      <img
        src={tumbleweed}
        alt="Tumbleeweed with 404 in the middle"
        className={styles.tumbleweed}
      />
      <p>
        Real sorry, but there's nothing to see in these parts. The page you
        tried to visit was moved or deleted.
      </p>
      <p>You can use the top navigation to try to find it.</p>
      <p>Or if you know a page should be here, please report it.</p>
      <Button variant="primary" to="/contact/">
        Report broken page
      </Button>
    </div>
  </>
)

export default NotFoundPage
