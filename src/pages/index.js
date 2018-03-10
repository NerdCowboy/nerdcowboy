// JS
import React from 'react'
import Link from 'gatsby-link'

// Styles
import oMedia from '../components/common/style-objects/media.module.scss'
import cButton from '../components/common/c-button.module.scss'
import u from '../global-styles/utilities.module.scss'
import home from './index.module.scss'

// Images
import small247 from '../../static/images/projects/247/247@0.5x.jpg'
import medium247 from '../../static/images/projects/247/247@1x.jpg'
import large247 from '../../static/images/projects/247/247@2x.jpg'

const IndexPage = () => (
  <div styleName="u.page-wrapper u.center">
    <div styleName="oMedia.media home.howdy">
      <svg
        styleName="oMedia.figure home.logo-emblem"
        data-name="Nerd Cowboy"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 293.7 324.58"
      >
        <title>
          Emblem of a cowboy wearing a cowboy hat, nerd glasses, and a bowtie
          while chewing on a blade of wheat.
        </title>
        <path d="M146.91 120.17zM147.4 77.57a510.53 510.53 0 0 0 75.22-5.79c-4.22-13.17-8.31-28.41-9.71-35.43C210.28 23.06 189.12 0 177.6 0s-20.25 9.57-29.72 9.57h-2C136.35 9.57 127.62 0 116.1 0S83.41 23.06 80.77 36.35c-1.39 7-5.49 22.26-9.7 35.43a519.71 519.71 0 0 0 76.33 5.79z" />
        <path d="M257.56 68C245 84.54 236.84 97.08 232.37 94.78c-1.3-.67-3.25-4.75-5.45-10.53-7.33 1.14-44.1 6.62-80.08 6.63-36 0-72.75-5.49-80.08-6.63-2.19 5.78-4.15 9.86-5.45 10.53-4.45 2.3-12.66-10.24-25.17-26.78s-38-11.9-36 14.24c1.22 16.65 31.69 27.47 72 33.13a141.67 141.67 0 0 0-4.14 16.8c-5.57.18-14.28.88-14.24 3 0 0-.12 8.16 0 9.88s4.62 3.59 6.22 5.59c.79 1 3.14 7.12 5.72 13.53-.11 2.74-.23 5.49-.35 8.2-.61 13.46-1.2 26.18.89 34.44 2.33 9.22 25.62 31.87 48.08 52.8 2.75 2.57 4.75 4.42 5.64 5.32 4.84 4.84 14.31 5.47 22.66 6 1.68.11 3.27.22 4.73.36h.46c1.46-.14 3-.24 4.73-.36 8.35-.56 17.81-1.19 22.65-6 .9-.9 2.88-2.74 5.63-5.3 19.2-17.89 39-37 45.8-48l40.43-11.82-.42-.4-39.18 10.91a15.23 15.23 0 0 0 1.5-3.49c2.09-8.26 1.51-21 .89-34.44-.14-3.11-.28-6.27-.4-9.42 2.38-5.95 4.48-11.37 5.22-12.3 1.59-2 6.1-3.87 6.22-5.59s0-9.88 0-9.88c0-2.09-8.1-2.82-13.67-3a140.32 140.32 0 0 0-4.15-17c39.58-5.71 69.36-16.46 70.56-32.92 1.89-26.16-23.55-30.77-36.06-14.28zm-40.32 52.71c1.78.75 3.45 4.91 4.95 10.74-2.34-.9-8.32-2.49-21.89-2.82-23.55-.69-34.59 3.56-34.59 3.56-1.55 0-16.57-.14-18.4 1.19-1.83-1.32-16.85-1.19-18.4-1.19 0 0-11-4.25-34.59-3.56-12.76.31-18.81 1.73-21.43 2.65a37.26 37.26 0 0 1 3.71-9.2c3.72.65 5.39-2.05 6.49-5.33a577.35 577.35 0 0 0 63.76 3.38 579.85 579.85 0 0 0 62.56-3.25c2.53 4.12 5.12 6.57 7.83 3.86zm8.91 31.56v.11c0 2.48.05 5 .13 7.55-1.62 9.24-5.09 17.46-8.1 19.38-5.86 6.09-25.85 8.73-41.94.92-10.46-6.43-17.81-29-15.17-36.08 5-14.38 50.85-13.58 62.63-5.8.92 4.39 1.73 9.18 2.45 13.95zM69 152.41c0-.83 0-1.73.05-2.7.64-4 1.35-7.87 2.15-11.52 12.23-7.6 57.34-8.28 62.33 6 2.64 7.13-4.71 29.65-15.17 36.08-16.09 7.81-36.08 5.17-41.94-.92-2.75-1.75-5.87-8.74-7.63-17 .09-3.35.21-6.67.21-9.94zm6.48-36.55c-.32.61-.64 1.23-1 1.88q.29-1 .59-1.93zm-15 24.88c-2 0-3.56-.44-3.56-1s1.6-1 3.56-1 3.56.44 3.56 1-1.65.99-3.62.99zm166.39 31.81c.6 13.24 1.18 25.74-.8 33.57a19.08 19.08 0 0 1-2.84 5.41l-55 15.31a6 6 0 0 0-4.84-2.07l-33.08 4.49c-.67 0-.67.19-.67.28s.25.22.72.22l33 3c3 0 5.5-1.72 5.5-4v-.18L222.11 213c-9.5 12.93-33.27 35.08-43.34 44.46-2.77 2.58-4.77 4.45-5.71 5.38-4 4-13.3 4.66-20.73 5.16-1.68.11-3.28.22-4.76.36-1.48-.14-3.08-.24-4.76-.36-7.43-.5-16.69-1.11-20.73-5.16-.93-.93-2.94-2.8-5.72-5.39-12.25-11.45-44.79-41.73-47.22-51.34-2-7.83-1.41-20.33-.8-33.57 0-.57.05-1.14.08-1.71 1.71 4 3.32 7.4 4.42 8.73 3.33 4 6.73 8.73 25.28 8.73 33.94 0 37-26.81 40.05-32.19 3.22-5.66 4.83-9.5 9.14-9.62 4.32.13 5.93 4 9.14 9.62 3.05 5.38 6.12 32.19 40.05 32.19 18.55 0 21.95-4.71 25.28-8.73 1.21-1.46 3-5.38 4.91-9.89l.12 2.87zm7.38-33.77c2 0 3.56.44 3.56 1s-1.6 1-3.56 1-3.56-.44-3.56-1 1.53-1 3.5-1zm-13.7-21.66q-.37-.75-.76-1.46h.3c.1.46.25.96.4 1.46zM146.8 9.53z" />
        <path d="M158.6 284.29a10.73 10.73 0 0 0-6.28-1.73l-5.5.1a16.73 16.73 0 0 0-6 1.34c-9.35-8.89-17.63-14.33-42.27-20.71-9.27 23.81-7.44 33.62-.47 60 11.14-.15 29.6-11 42.83-14.76h.14a17.37 17.37 0 0 0 6.44 1.22l5.43-.1a11 11 0 0 0 4.55-1c13.26 3.39 24.66 9.25 41.44 16 8.55-15 11.5-37.92 2.36-60.27-9.92 2.93-30.88 6.94-42.67 19.91zM260.88 202.34a11.35 11.35 0 0 0-3.84.82 11.3 11.3 0 0 0 3.48 1.83c1.26.17 2.36-.28 2.46-1s-.84-1.48-2.1-1.65zM247.81 206.08a11.38 11.38 0 0 0-3.81.92 11.29 11.29 0 0 0 3.53 1.74c1.26.14 2.35-.35 2.44-1.07s-.9-1.46-2.16-1.59zM265.27 201a11.37 11.37 0 0 0-3.82.93 11.34 11.34 0 0 0 3.52 1.74c1.26.14 2.35-.35 2.44-1.07s-.87-1.45-2.14-1.6zM252.31 204.89a11.37 11.37 0 0 0-3.85.82 11.33 11.33 0 0 0 3.48 1.83c1.26.17 2.36-.28 2.46-1s-.83-1.48-2.09-1.65zM256.39 203.53a11.33 11.33 0 0 0-3.82.93 11.34 11.34 0 0 0 3.53 1.74c1.26.14 2.35-.35 2.44-1.07s-.89-1.46-2.15-1.6zM267.64 196.38c-.45-.57-1.64-.41-2.63.38a11.34 11.34 0 0 0-2.07 3.34 11.36 11.36 0 0 0 3.73-1.24c.99-.79 1.42-1.86.97-2.48zM247.5 201.69a11.36 11.36 0 0 0-2.07 3.34 11.38 11.38 0 0 0 3.73-1.24c1-.78 1.44-1.9 1-2.48s-1.66-.41-2.66.38zM269.17 199.79a10 10 0 0 0-3.36.81 10 10 0 0 0 3.1 1.53c1.11.12 2.07-.3 2.14-.95s-.77-1.27-1.88-1.39zM258.76 198.94c-.45-.57-1.64-.41-2.63.38a11.34 11.34 0 0 0-2.07 3.34 11.36 11.36 0 0 0 3.73-1.24c.99-.78 1.43-1.9.97-2.48zM254.51 199.92c-.47-.56-1.65-.37-2.62.45a11.31 11.31 0 0 0-2 3.39 11.37 11.37 0 0 0 3.7-1.33c.99-.81 1.41-1.94.92-2.51zM270 198.92c1-.54 1.53-1.46 1.21-2s-1.37-.59-2.36 0a9.84 9.84 0 0 0-2.28 2.61 9.8 9.8 0 0 0 3.43-.61zM263.14 197.55c-.47-.56-1.65-.37-2.62.45a11.31 11.31 0 0 0-2 3.39 11.37 11.37 0 0 0 3.7-1.33c.99-.82 1.39-1.94.92-2.51zM115.22 217.56c-.14 0-3.57 1.25-5.26 5.9a10.47 10.47 0 0 0 .05 8l1.78-.92a8.51 8.51 0 0 1 0-6.43c1.35-3.7 3.92-4.65 4-4.69l-.33-.95zM154.59 199.9c-3.26.58-10.66 2.35-13.19-.2-2.06-2.07-.69-7.85-.43-10.4.91-9 2.68-17.77 4-26.67.11-.72-1.83-.38-1.93.25-1.58 10.64-4.11 21.32-4.39 32.11-.08 3.06-.19 5.48 3.11 6.41 3.85 1.08 8.69.21 12.55-.48.9-.15 1.61-1.26.28-1.02z" />
      </svg>
      <div styleName="oMedia.body u.reading-width">
        <h1 styleName="u.mbs">Howdy! I'm Brent Larson</h1>
        <p styleName="u.font-size-1-25">
          I’m a problem solver that designs & develops clean and easy-to-use
          websites that are as slick as a whistle.
        </p>
        <p>
          Based out of Tucson, Arizona, I’ve been in the industry for over a
          decade, specializing in UI/UX design and front-end development.
        </p>
        <p styleName="u.pbm">
          I'm currently looking for remote or Tucson-based positions. If you
          reckon you’d you like to work with me, let’s have a chat.
        </p>
        <Link styleName="cButton.button cButton.button--primary" to="/contact/">
          Get in touch
        </Link>
      </div>
    </div>

    <div styleName="home.latest-project-wrapper">
      <h1 styleName="u.mbm u.mtl">
        <span styleName="home.star">★</span> Latest Project
      </h1>

      <div styleName="oMedia.media home.latest-project">
        <img
          styleName="oMedia.figure home.project-img"
          alt="Screenshot of [24]7 Predictive Search Bidding"
          src={`${small247}`}
          srcSet={`
            ${medium247} 321w,
            ${large247} 600w
          `}
          sizes="18.75rem, 37.5rem"
        />
        <div styleName="oMedia.body u.reading-width home.latest-project-body">
          <h2 styleName="u.mbs">[24]7 Predictive Search Bidding</h2>

          <h3 styleName="u.mbn">Objective</h3>
          <p>
            Build a responsive dashboard application for account managers and
            clients that allows them to manage the automated bidding process for
            search ads, do simple campaign management tasks, and create
            performance reports.
          </p>

          <h3 styleName="u.mbn">Role</h3>
          <p>
            UI/UX Design, Front-end Development, User Research, User Testing
          </p>

          <h3 styleName="u.mbn">Process</h3>
          <p>
            I discussed a problem or proposed feature with stakeholders and
            proceeded to create the initial mockups. I shared the mockups with
            stakeholders and account managers to gather feedback and updated
            them accordingly.
          </p>
          <p>
            If it was a more complicated feature, I would try to do a user test
            using a clickable prototype with some of our account managers to
            make sure it was still easy to use. Unfortunately, we didn’t have a
            lot of access to our users. As a substitute, I used the service
            FullStory to watch users sessions, which was extremely helpful in
            guring out issues or user patterns that we could streamline.
          </p>
          <p>
            Then, depending on where I and the other front-end developers were
            at, I’d either code out a skeleton in JSX and Sass, or I’d have them
            get the logic working and I would come in behind them and esh out
            the styles. As I progressed in my Javascript/React skills, I started
            building out UI components with some logic, which greatly helped
            speed up development velocity and allowed me to fix other UX issues
            that were a bit too advanced for me when I started.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
