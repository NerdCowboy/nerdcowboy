import React from 'react'
import { Link } from 'gatsby'

import { IconGun, IconBullet } from '../Icons'
import purtyWood from '../../media/images/purty-wood-horizontal.jpg'
import * as styles from  './styles.module.scss'

const ArticleCard = ({ article }) => (
  <>
    <Link to={article.node.fields.slug} className={styles.card}>
      <svg
        className={styles.cardBg}
        viewBox="0 0 648 413"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            patternUnits="userSpaceOnUse"
            id="woodBg"
            x="10"
            y="10"
            width="400"
            height="400"
          >
            <image width="400" height="400" xlinkHref={purtyWood} />
          </pattern>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path
            d="M3 52.81v306.17c7.53 1.497 17.109 8.573 29.164 21.132 11.944 12.444 18.711 21.979 20.26 29.078h541.548c1.36-7.188 8.36-16.723 20.92-29.134 12.569-12.422 22.096-19.457 29.108-21.086V53.186c-9.192-3.398-18.889-10.379-29.148-20.902-10.201-10.463-16.776-20.137-19.677-29.094H52.636c-3.573 9.29-10.42 18.981-20.51 29.116C22.033 42.446 12.338 49.292 3 52.81z"
            stroke="#897B70"
            strokeWidth="6"
            fill="#E3DFDC"
          />
          <path
            d="M12 62.76v286.502c7.247.822 17.022 7.804 29.582 20.89 12.493 13.014 19.196 22.765 20.085 29.538h523.106c.622-6.831 7.53-16.579 20.673-29.567 13.151-12.997 22.896-19.971 29.554-20.912V63.128c-9.24-3.162-19.086-10.134-29.574-20.891-10.456-10.725-17.013-20.56-19.644-29.547H62.095c-3.376 9.36-10.226 19.205-20.532 29.558C31.255 52.603 21.41 59.448 12 62.76z"
            stroke="#AD8359"
            strokeWidth="3"
            fill="url(#woodBg)"
          />
        </g>
      </svg>
      <div className={styles.cardContent}>
        <header>
          <h3 className={styles.title}>{article.node.frontmatter.title}</h3>
          <p className={styles.subtitle}>{article.node.frontmatter.subtitle}</p>
        </header>
        <p className={styles.lead}>
          {article.node.frontmatter.description || article.node.excerpt}
        </p>
        <div className={styles.fauxLink}>
          Continue Reading
          <IconGun className={styles.gun} />
          <IconBullet className={styles.bullet} />
        </div>
      </div>
    </Link>
  </>
)

export default ArticleCard
