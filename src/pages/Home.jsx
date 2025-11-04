import { articles } from '../data/articles'
import ArticleCard from '../components/ArticleCard'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">ModernBlog</span>
          </h1>
          <p className="hero-description">
            Discover the latest insights on technology, design, and web development.
            Stay updated with tutorials, best practices, and industry trends.
          </p>
        </div>
      </section>

      <section className="articles-section">
        <div className="section-header">
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">Explore our collection of insightful articles</p>
        </div>
        
        <div className="articles-grid">
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
