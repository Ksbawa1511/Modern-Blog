# ModernBlog - Modern React Blog Website

A beautiful, modern blog website built with React, featuring a clean design, responsive layout, and smooth user experience.

## ✨ Features

- **Modern Design** - Clean, professional interface with gradient accents
- **Fully Responsive** - Works perfectly on all devices
- **Fast Performance** - Optimized with Vite
- **React Router** - Smooth client-side navigation
- **Article Management** - Easy to add and manage blog posts
- **Contact Form** - Built-in contact form with validation
- **SEO Friendly** - Semantic HTML and proper meta tags

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
# Create production build
npm run build
```

### Preview Production Build

```bash
# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx     # Navigation header
│   ├── Footer.jsx     # Site footer
│   └── ArticleCard.jsx # Article card component
├── pages/              # Page components
│   ├── Home.jsx       # Homepage
│   ├── BlogPost.jsx   # Individual blog post
│   ├── About.jsx      # About page
│   └── Contact.jsx    # Contact form page
├── data/               # Data files
│   └── articles.js    # Article data
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🛠️ Technologies

- **React 18** - UI library
- **React Router DOM** - Routing
- **Vite** - Build tool
- **CSS3** - Modern styling with CSS variables
- **HTML5** - Semantic markup

## 📝 Customization

### Adding Articles

Edit `src/data/articles.js` to add or modify articles. Each article should include:

- `id` - Unique identifier
- `slug` - URL-friendly identifier
- `title` - Article title
- `excerpt` - Short description
- `author` - Author name
- `date` - Publication date
- `readTime` - Estimated reading time
- `category` - Article category
- `image` - Image URL
- `content` - HTML content

### Styling

The project uses CSS variables for easy theming. Edit `src/index.css` to customize colors, fonts, and spacing.

## 📄 License

Copyright © 2024 ModernBlog. All rights reserved.
