# 🎮 Potulky - Urban Adventure Games

A modern, responsive static website for **Potulky**, a platform for urban adventure games that combine riddles, local history, and city exploration.

## 🌟 Overview

Potulky offers playful city tours that transform urban exploration into engaging mystery-solving adventures. This website showcases the platform with a clean, modern design that captures the adventurous spirit of urban exploration games.

## ✨ Features

### 🎨 Design & User Experience
- **Modern, clean design** with warm, adventurous color palette
- **Fully responsive** - works perfectly on mobile, tablet, and desktop
- **Smooth animations** and interactive elements
- **Accessible design** with proper focus states and keyboard navigation
- **Mobile-first approach** with hamburger menu for mobile devices

### 🏗️ Technical Features
- **No frameworks** - Pure HTML, CSS, and JavaScript
- **Optimized performance** with efficient CSS and JavaScript
- **Cross-browser compatible** 
- **SEO-friendly** with proper meta tags and semantic HTML
- **Google Fonts integration** (Poppins font family)

## 📁 Project Structure

```
ErmaStranka/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS stylesheet
├── script.js           # Interactive JavaScript functionality
└── README.md           # This documentation file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For local development, you can use a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have it installed)
   npx serve .
   
   # Or simply open index.html directly in your browser
   ```

## 🎯 Website Sections

### 1. **Hero Section**
- Large headline: "Discover your city through adventure!"
- Compelling subheadline and call-to-action button
- Full-width background with gradient overlay
- Responsive design with mobile-optimized layout

### 2. **How It Works**
Three-step process with icons:
- Choose your adventure
- Solve riddles and explore  
- Unlock hidden stories

### 3. **Featured Games**
Grid of 6 sample adventure games:
- Secrets of the Old Town
- The Lost Key of the Monastery
- Mystery of the Castle Gate
- Ghosts of the Market Square
- The Artist's Last Masterpiece
- Underground Network

### 4. **Why Potulky?**
Highlights the platform's benefits:
- Educational & Fun
- Perfect for friends or families
- Explore local landmarks

### 5. **Testimonials**
Social proof with player reviews and ratings

### 6. **Footer**
Complete footer with branding, links, and contact information

## 🎨 Design System

### Color Palette
- **Primary Green**: `#2d5016` (Headings, accents)
- **Warm Brown**: `#8b4513` (Primary brand color)
- **Orange Accent**: `#d2691e` (Buttons, highlights)
- **Neutral Tones**: `#5a4a3a`, `#f4f1eb`, `#e8dcc0`
- **Background**: `#fafafa`, white

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive scaling** for different screen sizes

### Interactive Elements
- **Rounded buttons** with gradient backgrounds
- **Smooth hover effects** and transitions
- **Card-based layouts** with subtle shadows
- **Mobile-friendly navigation** with hamburger menu

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## ⚡ JavaScript Features

### Core Functionality
- **Smooth scrolling** between sections
- **Mobile navigation toggle** with hamburger menu
- **Active navigation highlighting** based on scroll position
- **Intersection Observer** for scroll animations
- **Interactive button effects** with ripple animations

### Performance Optimizations
- **Throttled scroll events** for better performance
- **Efficient event handling** with proper cleanup
- **Lazy loading simulation** for images
- **Error handling** for graceful degradation

### Accessibility Features
- **Keyboard navigation** support
- **Focus management** for mobile menu
- **ARIA-compliant** markup
- **High contrast mode** support

## 🛠️ Customization Guide

### Changing Colors
Edit the CSS custom properties in `styles.css`:
```css
/* Main brand colors */
:root {
    --primary-green: #2d5016;
    --warm-brown: #8b4513;
    --orange-accent: #d2691e;
    --neutral-dark: #5a4a3a;
}
```

### Adding New Games
Add new game cards in the `#games` section of `index.html`:
```html
<div class="game-card">
    <div class="game-image">
        <div class="game-placeholder"></div>
    </div>
    <div class="game-content">
        <h3>Your Game Title</h3>
        <p>Game description here...</p>
        <a href="#" class="game-button">Learn more</a>
    </div>
</div>
```

### Modifying Content
- **Hero section**: Edit the `.hero-content` in `index.html`
- **Steps**: Update the `.steps-grid` section
- **Testimonials**: Modify the `.testimonials-grid` section
- **Footer**: Update contact information and links

## 🔧 Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 📈 Performance

- **Fast loading** with optimized CSS and JavaScript
- **Minimal HTTP requests** (only Google Fonts)
- **Efficient animations** using CSS transforms
- **Responsive images** with proper sizing
- **Clean, semantic HTML** for better SEO

## 🚀 Deployment

### Static Hosting Options
- **GitHub Pages**: Simply push to a GitHub repository
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repository
- **AWS S3**: Upload files to an S3 bucket
- **Any web server**: Upload all files to your server

### Domain Setup
1. Point your domain to your hosting provider
2. Update the contact email in the footer if needed
3. Add any analytics tracking codes if desired

## 🎯 Future Enhancements

### Potential Additions
- **Contact form** with form validation
- **Game booking system** integration
- **User testimonials** submission form
- **Blog section** for adventure stories
- **Multi-language support**
- **Dark mode toggle**
- **Progressive Web App** features

### Technical Improvements
- **Image optimization** with WebP format
- **Service worker** for offline functionality
- **Advanced animations** with CSS keyframes
- **Form validation** with JavaScript
- **API integration** for dynamic content

## 📞 Support & Contact

- **Email**: info@potulky.com
- **Website**: [Your domain here]
- **Issues**: Report bugs or feature requests

## 📄 License

This project is created for Potulky urban adventure games. All rights reserved.

---

**Built with ❤️ for urban explorers and adventure seekers!**

*Ready to discover your city through adventure? Start exploring with Potulky!* 🏙️✨
