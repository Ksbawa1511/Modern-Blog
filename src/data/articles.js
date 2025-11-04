export const articles = [
  {
    id: 1,
    slug: 'getting-started-with-react',
    title: 'Getting Started with React: A Complete Guide for Beginners',
    excerpt: 'Learn the fundamentals of React, from setting up your first project to understanding components, props, and state management.',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    content: `
      <p>React has become one of the most popular JavaScript libraries for building user interfaces. In this comprehensive guide, we'll walk you through everything you need to know to get started with React.</p>
      
      <h2>What is React?</h2>
      <p>React is a JavaScript library developed by Facebook for building interactive user interfaces. It allows you to create reusable UI components and manage application state efficiently.</p>
      
      <h2>Key Concepts</h2>
      <h3>Components</h3>
      <p>Components are the building blocks of React applications. They are reusable pieces of code that return JSX to describe what should appear on the screen.</p>
      
      <h3>Props</h3>
      <p>Props (short for properties) are how you pass data from parent components to child components. They are read-only and help make components reusable.</p>
      
      <h3>State</h3>
      <p>State allows components to create and manage their own data. When state changes, React automatically re-renders the component to reflect those changes.</p>
      
      <h2>Getting Started</h2>
      <p>To create a new React application, you can use Create React App or Vite. Both tools provide a great development experience with hot reloading and modern build tools.</p>
      
      <h2>Conclusion</h2>
      <p>React is a powerful tool for building modern web applications. With its component-based architecture and efficient rendering, it's an excellent choice for developers of all skill levels.</p>
    `
  },
  {
    id: 2,
    slug: 'modern-css-techniques',
    title: 'Modern CSS Techniques Every Developer Should Know',
    excerpt: 'Explore cutting-edge CSS features including Grid, Flexbox, Custom Properties, and CSS-in-JS solutions that will transform your styling workflow.',
    author: 'Michael Chen',
    date: 'March 12, 2024',
    readTime: '8 min read',
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    content: `
      <p>CSS has evolved significantly over the years, offering developers powerful new tools for creating beautiful, responsive layouts.</p>
      
      <h2>CSS Grid Layout</h2>
      <p>CSS Grid is a two-dimensional layout system that allows you to create complex layouts with ease. It's perfect for creating responsive designs that adapt to different screen sizes.</p>
      
      <h2>Flexbox</h2>
      <p>Flexbox is a one-dimensional layout method that makes it easy to align items and distribute space within a container. It's particularly useful for navigation bars and card layouts.</p>
      
      <h2>Custom Properties</h2>
      <p>CSS Custom Properties (CSS Variables) allow you to store values that can be reused throughout your stylesheet. This makes it easier to maintain consistent theming across your application.</p>
      
      <h2>Modern Animations</h2>
      <p>With CSS animations and transitions, you can create smooth, performant animations without JavaScript. The key is to use transform and opacity properties for the best performance.</p>
    `
  },
  {
    id: 3,
    slug: 'javascript-best-practices',
    title: 'JavaScript Best Practices: Writing Clean and Maintainable Code',
    excerpt: 'Discover essential JavaScript best practices, from naming conventions to async patterns, that will help you write better, more maintainable code.',
    author: 'Emily Rodriguez',
    date: 'March 10, 2024',
    readTime: '10 min read',
    category: 'JavaScript',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop',
    content: `
      <p>Writing clean, maintainable JavaScript is crucial for building scalable applications. Here are some best practices every developer should follow.</p>
      
      <h2>Naming Conventions</h2>
      <p>Use descriptive, meaningful names for variables, functions, and classes. Follow consistent naming conventions throughout your codebase.</p>
      
      <h2>Code Organization</h2>
      <p>Organize your code into logical modules and functions. Keep functions small and focused on a single responsibility.</p>
      
      <h2>Error Handling</h2>
      <p>Always handle errors appropriately. Use try-catch blocks for synchronous code and proper error handling in promises and async/await.</p>
      
      <h2>Async Patterns</h2>
      <p>Prefer async/await over promise chains for better readability. Use Promise.all() for concurrent operations when possible.</p>
      
      <h2>Performance</h2>
      <p>Avoid premature optimization, but be mindful of performance. Use tools like the Chrome DevTools to identify bottlenecks.</p>
    `
  },
  {
    id: 4,
    slug: 'web-performance-optimization',
    title: 'Web Performance Optimization: Speed Up Your Website',
    excerpt: 'Learn proven techniques to improve your website\'s performance, including image optimization, code splitting, and lazy loading strategies.',
    author: 'David Kim',
    date: 'March 8, 2024',
    readTime: '12 min read',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    content: `
      <p>Website performance is crucial for user experience and SEO. Here are key strategies to optimize your website's speed.</p>
      
      <h2>Image Optimization</h2>
      <p>Optimize images by using modern formats like WebP, compressing files, and implementing lazy loading. Consider using responsive images with srcset.</p>
      
      <h2>Code Splitting</h2>
      <p>Split your JavaScript bundles to load only what's needed. Use dynamic imports to load components on demand.</p>
      
      <h2>Caching Strategies</h2>
      <p>Implement proper caching headers for static assets. Use service workers for offline functionality and improved performance.</p>
      
      <h2>Minification</h2>
      <p>Minify and compress your CSS, JavaScript, and HTML files. Use tools like webpack or Vite to automate this process.</p>
      
      <h2>Monitoring</h2>
      <p>Regularly monitor your website's performance using tools like Lighthouse, WebPageTest, or Google Analytics.</p>
    `
  },
  {
    id: 5,
    slug: 'responsive-design-principles',
    title: 'Responsive Design Principles: Building for All Devices',
    excerpt: 'Master the art of responsive design with mobile-first approaches, flexible grids, and media queries that work across all screen sizes.',
    author: 'Lisa Wang',
    date: 'March 5, 2024',
    readTime: '7 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop',
    content: `
      <p>Responsive design ensures your website looks great on all devices, from mobile phones to desktop computers.</p>
      
      <h2>Mobile-First Approach</h2>
      <p>Start designing for mobile devices first, then progressively enhance for larger screens. This approach ensures a better experience on smaller devices.</p>
      
      <h2>Flexible Grids</h2>
      <p>Use CSS Grid and Flexbox to create flexible layouts that adapt to different screen sizes. Avoid fixed widths in favor of relative units.</p>
      
      <h2>Media Queries</h2>
      <p>Use media queries to apply different styles based on screen size. Common breakpoints include 768px (tablet) and 1024px (desktop).</p>
      
      <h2>Touch-Friendly Design</h2>
      <p>Ensure buttons and interactive elements are large enough for touch input. Provide adequate spacing between clickable elements.</p>
      
      <h2>Testing</h2>
      <p>Test your designs on real devices whenever possible. Use browser DevTools to simulate different screen sizes during development.</p>
    `
  },
  {
    id: 6,
    slug: 'api-design-best-practices',
    title: 'API Design Best Practices: Building RESTful Services',
    excerpt: 'Learn how to design clean, intuitive APIs that are easy to use, well-documented, and follow RESTful principles for optimal developer experience.',
    author: 'James Miller',
    date: 'March 3, 2024',
    readTime: '9 min read',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    content: `
      <p>Well-designed APIs are crucial for building scalable applications. Here are best practices for creating RESTful APIs.</p>
      
      <h2>RESTful Principles</h2>
      <p>Follow REST principles: use proper HTTP methods (GET, POST, PUT, DELETE), meaningful URLs, and appropriate status codes.</p>
      
      <h2>Versioning</h2>
      <p>Version your APIs to maintain backward compatibility. Use URL versioning or header-based versioning consistently.</p>
      
      <h2>Error Handling</h2>
      <p>Return clear, consistent error messages with appropriate HTTP status codes. Include helpful error details for debugging.</p>
      
      <h2>Documentation</h2>
      <p>Provide comprehensive API documentation. Use tools like OpenAPI/Swagger to generate interactive documentation.</p>
      
      <h2>Security</h2>
      <p>Implement proper authentication and authorization. Use HTTPS, validate input, and protect against common vulnerabilities.</p>
    `
  }
]

export const getArticleBySlug = (slug) => {
  return articles.find(article => article.slug === slug)
}

export const getRelatedArticles = (currentArticleId, count = 3) => {
  return articles
    .filter(article => article.id !== currentArticleId)
    .slice(0, count)
}

