import React from 'react'

import u from '../../global-styles/utilities.module.scss'
import btn from '../../components/common/c-button.module.scss'
import four04 from './404.module.scss'

import tumbleweed from './images/404-tumbleweed.svg'

const NotFoundPage = () => (
  <div styleName="u.page-wrapper u.reading-width">
    <h1 styleName="u.mtxl">This page is a goner</h1>
    <img
      src={tumbleweed}
      alt="Tumbleeweed with 404 in the middle"
      styleName="four04.tumbleweed"
    />
    <p>
      Real sorry, but there's nothing to see in these parts. The page you tried
      to visit was moved or deleted.
    </p>
    <p>You can use the top navigation to try to find it.</p>
    <p>Or if you know a page should be here, report it.</p>
    <a styleName="btn.button btn.button--primary" href="/contact">
      Report broken page
    </a>
  </div>
)

export default NotFoundPage
