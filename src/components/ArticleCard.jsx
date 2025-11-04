import { Link } from 'react-router-dom'
import './ArticleCard.css'

const ArticleCard = ({ article }) => {
  return (
    <article className="article-card">
      <Link to={`/post/${article.slug}`} className="article-link">
        <div className="article-image">
          {article.image && (
            <img src={article.image} alt={article.title} />
          )}
          <div className="article-overlay"></div>
        </div>
        <div className="article-content">
          <div className="article-meta">
            <span className="article-category">{article.category}</span>
            <span className="article-date">{article.date}</span>
          </div>
          <h2 className="article-title">{article.title}</h2>
          <p className="article-excerpt">{article.excerpt}</p>
          <div className="article-footer">
            <span className="article-author">By {article.author}</span>
            <span className="article-read-time">{article.readTime}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ArticleCard

