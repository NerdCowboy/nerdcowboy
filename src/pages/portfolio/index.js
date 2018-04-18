// JS
import React from 'react'
import Link from 'gatsby-link'

// Styles
import u from '../../global-styles/utilities.module.scss'
import oMedia from '../../components/common/style-objects/media.module.scss'
import project from '../../components/common/Project/project.module.scss'

// Images
import small247 from '../../media/images/projects/247/247@0.5x.jpg'
import medium247 from '../../media/images/projects/247/247@1x.jpg'
import large247 from '../../media/images/projects/247/247@2x.jpg'

import smallRss from '../../media/images/projects/rss/rss@0.5x.jpg'
import mediumRss from '../../media/images/projects/rss/rss@1x.jpg'
import largeRss from '../../media/images/projects/rss/rss@2x.jpg'

import smallRehabPlus from '../../media/images/projects/rehab-plus/rehab-plus@0.5x.jpg'
import mediumRehabPlus from '../../media/images/projects/rehab-plus/rehab-plus@1x.jpg'
import largeRehabPlus from '../../media/images/projects/rehab-plus/rehab-plus@2x.jpg'

import smallSyCara from '../../media/images/projects/sycara-local/sycara-local@0.5x.jpg'
import mediumSyCara from '../../media/images/projects/sycara-local/sycara-local@1x.jpg'
import largeSyCara from '../../media/images/projects/sycara-local/sycara-local@2x.jpg'

const PortfolioPage = () => (
  <div styleName="u.page-wrapper">
    <h1 styleName="u.mbs u.mtxl">Portfolio</h1>

    {/* [24]7 */}
    <div styleName="oMedia.media project.item">
      <img
        styleName="oMedia.figure project.img"
        alt="Screenshot of [24]7 Predictive Search Bidding"
        src={`${small247}`}
        srcSet={`
            ${medium247} 321w,
            ${large247} 600w
          `}
        sizes="18.75rem, 37.5rem"
      />
      <div styleName="oMedia.body u.reading-width project.body">
        <h2 styleName="project.title">[24]7 Predictive Search Bidding</h2>

        <h3 styleName="u.mbn">Objective</h3>
        <p>
          Build a responsive dashboard application for account managers and
          clients that allows them to manage the automated bidding process for
          search ads, do simple campaign management tasks, and create
          performance reports.
        </p>

        <h3 styleName="u.mbn">Role</h3>
        <p>UI/UX Design, Front-end Development, User Research, User Testing</p>

        <h3 styleName="u.mbn">Process</h3>
        <p>
          I discussed a problem or proposed feature with stakeholders and
          proceeded to create initial mockups. Mockups were shared with
          stakeholders and account managers for feedback and updated
          accordingly.
        </p>
        <p>
          For more complicated features, I’d run a user test using a clickable
          prototype with some of our account managers. Unfortunately, we didn’t
          have a lot of access to our users, so we weren’t able to do many user
          tests with them. As a substitute, I used the service FullStory to
          watch users sessions, which was extremely helpful in figuring out
          issues or user patterns that could be streamlined.
        </p>
        <p>
          Depending on where I and the other front-end developers were at, I
          would either code out a skeleton in JSX and Sass, or I would have them
          get the logic working and come in behind them and flesh out styles. As
          I progressed in my Javascript/React skills, I started building out UI
          components with some logic, which greatly helped to speed up the
          development process and allowed me to fix other UX issues that were a
          bit too advanced for me when I started.
        </p>
      </div>
    </div>

    {/* RSS.com */}
    <div styleName="oMedia.media oMedia.media--right project.item">
      <div styleName="oMedia.body u.reading-width project.body">
        <h2 styleName="project.title">RSS.com</h2>

        <h3 styleName="u.mbn">Objective</h3>
        <p>
          Design and build a landing and signup page for an A/B test to see if
          the company could sell their product from a shopping angle.
        </p>

        <h3 styleName="u.mbn">Role</h3>
        <p>UI/UX Design, Front-end Development</p>

        <h3 styleName="u.mbn">Process</h3>
        <p>
          I discussed the goal for the landing page and what type of aesthetic
          the company was looking for. I then created a style tile to make sure
          we were aligned on the aesthetics. Once approved, mockups were
          designed for the landing and signup page. I also coded out a skeleton
          of both pages in HTML/Sass.
        </p>
      </div>
      <img
        styleName="oMedia.figure project.img"
        alt="Screenshot of RSS.com Marketing Test"
        src={`${smallRss}`}
        srcSet={`
            ${mediumRss} 321w,
            ${largeRss} 600w
          `}
        sizes="18.75rem, 37.5rem"
      />
    </div>

    {/* Rehab Plus & Fitness */}
    <div styleName="oMedia.media project.item">
      <img
        styleName="oMedia.figure project.img"
        alt="Screenshot of Rehab Plus & Fitness Marketing Website"
        src={`${smallRehabPlus}`}
        srcSet={`
            ${mediumRehabPlus} 321w,
            ${largeRehabPlus} 600w
          `}
        sizes="18.75rem, 37.5rem"
      />
      <div styleName="oMedia.body u.reading-width project.body">
        <h2 styleName="project.title">Rehab Plus & Fitness</h2>

        <h3 styleName="u.mbn">Objective</h3>
        <p>
          Design and build a responsive Wordpress website to help advertise
          physical therapy clinics, provide information about classes, and
          display contact information.
        </p>

        <h3 styleName="u.mbn">Role</h3>
        <p>UI/UX Design, Front-end Development</p>

        <h3 styleName="u.mbn">Process</h3>
        <p>
          The goal and aesthetic for the landing page was discussed, and then I
          created a style tile to ensure agreement on both ends. Once approved,
          I created mockups, reviewed the mockups with the company, and made
          appropriate updates based on feedback. Finally, I created a custom
          Wordpress theme and trained their administrative assistant on how to
          update the webpage.
        </p>
      </div>
    </div>

    {/* SyCara Local */}
    <div styleName="oMedia.media oMedia.media--right project.item">
      <div styleName="oMedia.body u.reading-width project.body">
        <h2 styleName="project.title">SyCara Local</h2>

        <h3 styleName="u.mbn">Objective</h3>
        <p>
          Build a responsive dashboard application for clients that allows them
          to manage their local SEO keywords and listings data, in order to
          create a responsive marketing website.
        </p>

        <h3 styleName="u.mbn">Role</h3>
        <p>UI/UX Design, Front-end Development, User Research, User Testing</p>

        <h3 styleName="u.mbn">Process</h3>
        <p>
          I gathered input from stakeholders and proceeded to create the initial
          mockups. Mockups were subsequently shared with stakeholders to gather
          more feedback for revision. User tests were performed on more complex
          features, using a clickable prototype with clients and employees of a
          sister company that worked in SEO. I also was able to do some general
          user testing with users to make sure our work ows ran smoothly. Then,
          I would either code out a skeleton in HTML and Sass, or I would have
          the other developers get the logic working and I'd come in behind them
          and flesh out the styles. I collaborated heavily with our head of
          marketing, and we developed the style, messaging, and workflows
          together for the marketing website. We reviewed the mockups with other
          stakeholders and made changes accordingly. I then created a custom
          Wordpress theme and launched it, with the help of the other
          developers.
        </p>
      </div>
      <img
        styleName="oMedia.figure project.img"
        alt="Screenshot of SyCara Local marketing website and web app"
        src={`${smallSyCara}`}
        srcSet={`
            ${mediumSyCara} 321w,
            ${largeSyCara} 600w
          `}
        sizes="18.75rem, 37.5rem"
      />
    </div>
  </div>
)

export default PortfolioPage
