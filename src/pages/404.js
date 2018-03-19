import React from 'react'
import u from '../global-styles/utilities.module.scss'
import btn from '../components/common/c-button.module.scss'

const NotFoundPage = () => (
  <div styleName="u.page-wrapper u.reading-width">
    <h1 styleName="u.mtxl">This page is a goner</h1>
    <p>Real sorry, but there's nothing to see in these parts.</p>
    <p>The page you tried to visit may have been moved or deleted.</p>
    <p>
      You can use the top navigation to try to find what you were looking for.
    </p>
    <p>
      Or if you know the page you're trying to visit should be here, let me
      know.
    </p>
    <a styleName="btn.button btn.button--primary" href="/contact">
      Report broken page
    </a>
  </div>
)

export default NotFoundPage
