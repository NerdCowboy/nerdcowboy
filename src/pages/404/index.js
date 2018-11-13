import React from 'react'
import cx from 'classnames'

import Layout from '../../components/common/Layout'

import u from '../../global-styles/utilities.module.scss'
import btn from '../../components/common/Button/c-button.module.scss'
import four04 from './404.module.scss'

import tumbleweed from './images/404-tumbleweed.svg'

const NotFoundPage = () => (
  <Layout>
    <div className={cx(u.pageWrapper, u.readingWidth)}>
      <h1 className={u.mtxl}>This page is a goner</h1>
      <img
        src={tumbleweed}
        alt="Tumbleeweed with 404 in the middle"
        className={four04.tumbleweed}
      />
      <p>
        Real sorry, but there's nothing to see in these parts. The page you
        tried to visit was moved or deleted.
      </p>
      <p>You can use the top navigation to try to find it.</p>
      <p>Or if you know a page should be here, report it.</p>
      <a className={btn.buttonPrimary} href="/contact">
        Report broken page
      </a>
    </div>
  </Layout>
)

export default NotFoundPage
