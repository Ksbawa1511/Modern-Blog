import { useParams, Link } from 'react-router-dom'
import { getArticleBySlug, getRelatedArticles } from '../data/articles'
import ArticleCard from '../components/ArticleCard'
import './BlogPost.css'

const BlogPost = () => {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)
  const relatedArticles = article ? getRelatedArticles(article.id, 3) : []

  if (!article) {
    return (
      <div className="blog-post-error">
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="blog-post">
      <article className="post-content">
        <div className="post-header">
          <span className="post-category">{article.category}</span>
          <h1 className="post-title">{article.title}</h1>
          <div className="post-meta">
            <span className="post-author">By {article.author}</span>
            <span className="post-date">{article.date}</span>
            <span className="post-read-time">{article.readTime}</span>
          </div>
        </div>

        {article.image && (
          <div className="post-image">
            <img src={article.image} alt={article.title} />
          </div>
        )}

        <div 
          className="post-body"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="post-footer">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="related-articles">
          <h2 className="related-title">Related Articles</h2>
          <div className="related-grid">
            {relatedArticles.map(relatedArticle => (
              <ArticleCard key={relatedArticle.id} article={relatedArticle} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default BlogPost

