// JS
import React from 'react'
import Link from 'gatsby-link'

// Styles
import u from '../../global-styles/utilities.module.scss'

// Images
import brent from './images/brent.jpg'

const AboutPage = () => (
  <div styleName="u.page-wrapper u.reading-width">
    <h1 styleName="u.mbs u.mtxl">About</h1>

    <img
      src={brent}
      alt="Brent Larson in a nice, gray suit looking all fancy."
    />

    <p>
      I started out my career as a web designer, back when that meant you did
      just about everything. I now definitely fall more on the design side of
      things skills-wise, but I'm continuing to learn more development and will
      hopefully be one of those fabled, 🦄{' '}
      <a href="https://uxdesign.cc/the-spectrum-of-digital-design-roles-in-2018-3286390a9966">
        "unicorn" designers
      </a>{' '}
      soon.
    </p>

    <p>
      I love designing because I love solving problems. Creating a good design
      requires that you actually understand the purpose of a design and the way
      you're users will use it. This is why user research and interviews are so
      critical to a successful website. You can make a pretty website, but if it
      doesn't solve a need for a user or is too difficult to use, the design is
      ultimately a failure. 👀 looking at you iTunes… 👀
    </p>

    <h3>Why Nerd Cowboy? </h3>
    <p>Well, I'm a nerd, I grew up on a farm, and I live in Arizona.</p>

    <p>
      I'm not much of a cowboy, though, if we're being honest. I was a pretty
      terrible farmer, but I was always good with computers.
    </p>

    <h3>Getting Personal</h3>
    <p>
      I grew up on a small, dairy farm 🐮 &nbsp;in Osakis, Minnesota. I
      graduated from Moorhead State University Moorhead (MSUM) with a degree in
      Graphic Communications and migrated to Arizona shortly thereafter. I'm
      currently living in Mesa, Arizona with my beautiful wife, Kimberly, and
      our handsome dog, Chauncey.
    </p>

    <h4>Stuff I like</h4>
    <ul>
      <li>
        ☕ &nbsp;Coffee —
        <a href="https://www.arbucklecoffee.com/collections/top-sellers/products/mexicali">
          Mexicali is awesome
        </a>
      </li>
      <li>🍳 &nbsp;Cooking — I'm taken, ladies 😉</li>
      <li>🏈 &nbsp;Sports — Mainly basketball & football</li>
      <li>⛰ &nbsp;Hiking — Check out Camelback in Scottsdale</li>
      <li>🍺 &nbsp;Beer — Loving sours right now</li>
      <li>🍸 &nbsp;Mixology — Love most anything with tequila</li>
    </ul>
  </div>
)

export default AboutPage
