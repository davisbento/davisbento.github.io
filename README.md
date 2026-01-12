# Davi Bento - Personal Website

A modern, responsive personal website built with Next.js 15, featuring a blog and showcasing my work as a Software Engineer.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: GitHub Pages (Static Export)

## 🌟 Features

- ⚡ Static site generation for optimal performance
- 📱 Fully responsive design
- 🌙 Dark mode support
- 📝 Blog with multiple articles
- 🎨 Modern UI with gradient effects
- ♿ Accessible and SEO-friendly

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/davisbento/davisbento.dev.git
cd davisbento.dev

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production and export static files
- \`npm run start\` - Start production server (after build)
- \`npm run lint\` - Run ESLint

## 📦 Building for Production

To create a static export for GitHub Pages:

\`\`\`bash
npm run build
\`\`\`

This will generate a static site in the \`out\` directory.

## 🚀 Deployment to GitHub Pages

### Automated Deployment (Recommended)

The repository includes a GitHub Actions workflow for automatic deployment:

1. Push your code to the \`main\` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at \`https://yourusername.github.io/davisbento.dev\`

### Manual Deployment

1. Build the project:
   \`\`\`bash
   npm run build
   \`\`\`

2. The \`out\` folder contains your static site

3. Deploy the \`out\` folder to GitHub Pages:
   \`\`\`bash
   # Install gh-pages if you haven't
   npm install -g gh-pages
   
   # Deploy
   gh-pages -d out
   \`\`\`

### GitHub Pages Configuration

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "gh-pages" branch
4. Your site will be published at \`https://yourusername.github.io/davisbento.dev\`

## 📝 Customization

### Update Personal Information

1. Edit content in \`app/page.tsx\` for the home page
2. Update \`app/about/page.tsx\` for the about page
3. Modify \`app/layout.tsx\` for site metadata

### Add Blog Posts

Blog posts are stored in \`app/blog/[slug]/page.tsx\`. To add a new post:

1. Add a new entry to the \`blogPosts\` object with a unique slug
2. Include title, date, readTime, and content
3. Update the blog listing in \`app/blog/page.tsx\` and \`app/page.tsx\`

### Styling

- Global styles: \`app/globals.css\`
- Tailwind config: \`tailwind.config.ts\`
- Color scheme: Defined in CSS variables in \`globals.css\`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Davi Bento**
- Website: [davisbento.dev](https://davisbento.dev)
- GitHub: [@davisbento](https://github.com/davisbento)
- LinkedIn: [davisbento](https://linkedin.com/in/davisbento)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js
