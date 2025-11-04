import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1 className="about-title">About ModernBlog</h1>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            ModernBlog is dedicated to sharing knowledge, insights, and best practices 
            in web development, technology, and design. We believe in empowering developers 
            and designers with the tools and knowledge they need to build amazing digital experiences.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Cover</h2>
          <p>
            Our articles cover a wide range of topics including:
          </p>
          <ul>
            <li>Frontend development with React, Vue, and modern JavaScript</li>
            <li>CSS techniques and design patterns</li>
            <li>Web performance optimization</li>
            <li>Responsive design principles</li>
            <li>API design and backend development</li>
            <li>Developer tools and workflows</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <p>
            We believe in writing clear, practical content that helps developers solve 
            real-world problems. Every article is crafted with care to provide value 
            to our readers, whether you're a beginner or an experienced developer.
          </p>
        </section>

        <section className="about-section">
          <h2>Get in Touch</h2>
          <p>
            Have questions, suggestions, or want to contribute? We'd love to hear from you! 
            Feel free to reach out through our <a href="/contact">contact page</a>.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About

