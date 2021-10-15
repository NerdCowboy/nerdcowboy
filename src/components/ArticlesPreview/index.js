import React from 'react'
import ArticleCard from '../ArticleCard'

import * as styles from  './styles.module.scss'

const ArticlePreview = ({ articles }) => (
  <div className={styles.articlesWrapper}>
    {articles.map((article) => (
      <ArticleCard article={article} key={article.node.id} />
    ))}
  </div>
)

export default ArticlePreview
