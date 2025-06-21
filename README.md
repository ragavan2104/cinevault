<div align="center">

# 🎬 CineVault

### A Modern Movie Discovery & Watchlist Application

*Discover, explore, and organize your favorite movies with a beautiful, responsive interface*

🌐 **[Live Demo](https://cinevault-beta.vercel.app/)** | 📱 **Mobile Optimized** | ⚡ **Fast & Responsive**

---

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)

</div>

## 🌟 About CineVault

CineVault is a modern, responsive movie discovery application that allows users to explore the latest and greatest films. Built with cutting-edge web technologies, it provides an intuitive interface for browsing movies, filtering by genres, and maintaining a personalized watchlist.

### 🎯 Key Highlights

- **🔍 Smart Search** - Instantly search through thousands of movies
- **🎭 Genre Filtering** - Browse movies by your favorite genres
- **⭐ Personal Watchlist** - Save movies to watch later with persistent storage
- **📱 Responsive Design** - Seamless experience across all devices
- **⚡ Performance Optimized** - Fast loading with modern build tools
- **🎨 Modern UI/UX** - Beautiful, intuitive interface with smooth animations

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cinevault.git
   cd cinevault
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

🎉 **You're all set!** Start exploring movies right away.

### 🌐 Live Demo
Experience CineVault in action: **[https://cinevault-beta.vercel.app/](https://cinevault-beta.vercel.app/)**

## ✨ Features

### 🎬 Core Functionality
- **Movie Discovery** - Browse trending and popular movies
- **Advanced Search** - Find specific movies with real-time search
- **Genre Filtering** - Filter movies by Action, Comedy, Drama, Horror, and more
- **Detailed Movie Cards** - View ratings, release dates, and movie posters
- **Watchlist Management** - Add/remove movies from your personal watchlist
- **Persistent Storage** - Your watchlist is automatically saved locally

### 🎨 User Experience
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Engaging hover effects and transitions
- **Intuitive Navigation** - Easy-to-use interface with React Router
- **Fast Performance** - Optimized with Vite for lightning-fast loading
- **Modern UI** - Clean design with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend Framework
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- **React 19** - Latest React version with improved performance and features
- **React Hooks** - State management with useState, useContext, and useEffect
- **React Icons** - Beautiful icon library for enhanced UI

### Routing & Navigation
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- **React Router DOM v7** - Client-side routing for seamless navigation

### Styling & UI
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing for browser compatibility

### Build Tools & Development
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
- **Vite** - Next-generation frontend build tool with HMR
- **ESLint** - Code linting and formatting for maintainable code
- **ES Modules** - Modern JavaScript module system

### External APIs
![TMDB](https://img.shields.io/badge/TMDB-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)
- **The Movie Database (TMDB) API** - Comprehensive movie data and imagery

---

## 📁 Project Structure

```
cinevault/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── GenreFilter.jsx      # Genre filtering component
│   │   └── Moviecard.jsx        # Individual movie card component
│   ├── context/
│   │   └── WatchListContext.jsx # Global state for watchlist
│   ├── pages/
│   │   ├── Home.jsx             # Main movie discovery page
│   │   ├── Navbar.jsx           # Navigation component
│   │   └── WatchList.jsx        # User's saved movies page
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Global styles
│   ├── index.css                # Tailwind imports and base styles
│   └── main.jsx                 # Application entry point
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── vite.config.js               # Vite configuration
```

## �️ Screenshots

<div align="center">

### 🏠 Home Page
*Browse popular and trending movies with smooth animations*

![Home Page](https://via.placeholder.com/800x450/1f2937/ffffff?text=�+Movie+Discovery+Home+Page)

### 🔍 Search & Filter
*Find specific movies and filter by genres*

![Search Results](https://via.placeholder.com/800x450/3b82f6/ffffff?text=🔍+Search+%26+Genre+Filtering)

### ⭐ Personal Watchlist
*Manage your saved movies with persistent storage*

![Watchlist](https://via.placeholder.com/800x450/8b5cf6/ffffff?text=⭐+Personal+Watchlist+Management)

</div>

---

## 🎮 Usage Guide

### 🔍 Discovering Movies
1. **Browse Popular Movies** - Scroll through trending movies on the home page
2. **Search for Specific Films** - Use the search bar to find particular movies
3. **Filter by Genre** - Click on genre buttons to explore specific categories
4. **View Movie Details** - Each card shows ratings, release date, and synopsis

### ⭐ Managing Your Watchlist
1. **Adding Movies** - Click the heart icon (❤️) on any movie card
2. **Viewing Your List** - Navigate to the "Watchlist" page via the navbar
3. **Removing Movies** - Click the filled heart icon to remove from watchlist
4. **Persistent Storage** - Your watchlist automatically saves to local storage

### 📱 Mobile Experience
- **Responsive Design** - Optimized for all screen sizes
- **Touch-Friendly** - Large click targets for mobile users
- **Fast Loading** - Optimized images and lazy loading

---

## 🔧 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Run ESLint for code quality
npm run lint

# Preview production build locally
npm run preview
```

### 🛠️ Development Setup

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/cinevault.git
   ```
3. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Make your changes**
5. **Test your changes**
   ```bash
   npm run dev
   npm run lint
   ```
6. **Commit and push**
   ```bash
   git commit -m "Add amazing feature"
   git push origin feature/amazing-feature
   ```
7. **Create a Pull Request**

### 🔧 Configuration

#### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

#### Tailwind CSS Customization
Modify `tailwind.config.js` to customize the design system:
```javascript
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Add custom colors, fonts, etc.
    },
  },
  plugins: [],
}
```

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### 🚀 Quick Contribution Guide

1. **⭐ Star this repository** - Show your support!
2. **🍴 Fork the project** - Create your own copy
3. **🌟 Create a feature branch** - `git checkout -b feature/AmazingFeature`
4. **� Commit your changes** - `git commit -m 'Add some AmazingFeature'`
5. **📤 Push to the branch** - `git push origin feature/AmazingFeature`
6. **🔄 Open a Pull Request** - Submit your contribution

### 🐛 Bug Reports & Feature Requests

- **Found a bug?** [Open an issue](https://github.com/your-username/cinevault/issues)
- **Have an idea?** [Request a feature](https://github.com/your-username/cinevault/issues)
- **Want to discuss?** [Start a discussion](https://github.com/your-username/cinevault/discussions)

### 📋 Contribution Guidelines

- Follow the existing code style and conventions
- Add tests for new features when applicable
- Update documentation for any new functionality
- Ensure your code passes ESLint checks
- Test your changes thoroughly before submitting

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 CineVault

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

Special thanks to the amazing open-source community and the following projects:

- **[React](https://reactjs.org/)** - For the incredible UI library
- **[The Movie Database (TMDB)](https://www.themoviedb.org/)** - For providing comprehensive movie data
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - For the lightning-fast build tool
- **[React Icons](https://react-icons.github.io/react-icons/)** - For the beautiful icon library
- **[React Router](https://reactrouter.com/)** - For seamless client-side routing

---

<div align="center">

## 🎬 Ready to Start Your Movie Journey?

**[🚀 Get Started](#-quick-start)** • **[🌐 Live Demo](https://cinevault-beta.vercel.app/)** • **[🖼️ View Screenshots](#️-screenshots)** • **[🐛 Report Issues](https://github.com/your-username/cinevault/issues)** • **[⭐ Star on GitHub](https://github.com/your-username/cinevault)**

---

### 💡 *"Every great film deserves to be discovered"*

**Built with ❤️ by movie enthusiasts, for movie enthusiasts**

🌐 **Try it now:** [https://cinevault-beta.vercel.app/](https://cinevault-beta.vercel.app/)

[![GitHub stars](https://img.shields.io/github/stars/your-username/cinevault?style=social)](https://github.com/your-username/cinevault/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/your-username/cinevault?style=social)](https://github.com/your-username/cinevault/network/members)
[![GitHub issues](https://img.shields.io/github/issues/your-username/cinevault)](https://github.com/your-username/cinevault/issues)

**⭐ Don't forget to star this repository if you found it helpful! ⭐**

</div>
