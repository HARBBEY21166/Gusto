🍽️ Gusto Restaurant - Frontend
A modern, responsive restaurant website built with React and TypeScript, featuring beautiful gradients, smooth animations, and seamless user authentication.

https://img.shields.io/badge/React-TypeScript-blue
https://img.shields.io/badge/Deployed-Vercel-black
https://img.shields.io/badge/Design-Responsive-green

🚀 Live Website
Live URL: https://gusto-lime.vercel.app

✨ Features
🎨 Modern UI Design - Beautiful gradients and animations

📱 Fully Responsive - Mobile-first design approach

🔐 User Authentication - Login and signup functionality

🎯 Smooth Animations - Enhanced user experience

🌙 Dark Mode - Toggle between light and dark themes

⚡ Fast Performance - Optimized loading and rendering

🔄 Real-time API Integration - Seamless backend communication

🛠️ Tech Stack
React 18 - Frontend framework

TypeScript - Type safety and better development experience

CSS3 - Custom gradients and animations

Vercel - Deployment platform

REST API - Backend communication

📁 Project Structure
text
gusto-restaurant-frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/          # React components
│   │   ├── Auth/
│   │   │   ├── Login.tsx
│   │   │   └── Signup.tsx
│   │   ├── Common/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── Layout/
│   │       └── Dashboard.tsx
│   ├── services/
│   │   └── api.ts          # API service functions
│   ├── styles/
│   │   └── globals.css     # Global styles and gradients
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vercel.json
🚀 Installation & Setup
bash
# Clone the repository
git clone <your-repo-url>
cd gusto-restaurant-frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
🎨 Design System
Color Palette
Primary Gradient: #667eea to #764ba2 (Calm blue to sophisticated purple)

Secondary Gradient: #f093fb to #f5576c (Warm pink to coral)

Neutral Background: #f9f9f9 (Light off-white)

Surface Color: #ffffff (Pure white for cards)

Text Colors:

Primary: #333333 (Almost black)

Secondary: #666666 (Medium gray)

Typography
Headings: Playfair Display (Serif)

Body Text: Lato (Sans-serif)

UI Elements
Border Radius: 8px for buttons and cards

Shadows: Subtle 0 4px 12px rgba(0, 0, 0, 0.1)

Animations: Smooth transitions and hover effects

📱 Pages & Components
Core Pages
Homepage - Hero section, featured dishes, testimonials

Menu - Interactive menu with categories

About - Restaurant story and team

Contact - Location and contact form

Authentication - Login and signup forms

Key Components
Navigation Bar - Fixed header with auth buttons

Hero Sections - Full-viewport banners with gradients

Card Components - Consistent card design for dishes and testimonials

Auth Forms - Login and registration with validation

Footer - Comprehensive site links and information

🔌 API Integration
Configuration
Update the API base URL in src/services/api.ts:

typescript
const API_BASE_URL = 'https://create-yours-on.up.railway.app/api';
Available Methods
typescript
// Authentication
authAPI.signup(userData)
authAPI.login(email, password)
authAPI.getProfile()

// Utility functions
saveAuthData(user, token)
removeAuthData()
isLoggedIn()
getCurrentUser()
🎯 Key Features Implementation
User Authentication
JWT token storage in localStorage

Protected routes

Automatic token inclusion in API requests

Login state persistence

Responsive Design
Mobile-first CSS approach

Flexible grid layouts

Responsive typography

Touch-friendly interfaces

Animation & UX
Smooth page transitions

Hover effects on interactive elements

Loading states for API calls

Error handling with user feedback

🚀 Deployment
Deploy to Vercel
Push code to GitHub

Connect repository to Vercel

Configure build settings:

Build Command: npm run build

Output Directory: dist

Automatic deployments on every push to main branch

Environment Variables
Create .env file for local development:

env
VITE_API_BASE_URL=https://gusto-restaurant-backend-production.up.railway.app/api
🔧 Development Scripts
bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check
📱 Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

Mobile browsers (iOS Safari, Chrome Mobile)

🛠️ Customization
Adding New Pages
Create component in src/components/

Add route in App.tsx

Update navigation if needed

Styling Changes
Modify src/styles/globals.css for global styles

Use CSS variables for consistent theming

Follow the established design system

API Integration
Extend src/services/api.ts for new endpoints

Add TypeScript interfaces in src/types/

Implement error handling in components

📝 License
This project is licensed under the MIT License.

👤 Author
Abiodun (Abbey) Aina

GitHub: @HARBBEY21166

<div align="center">
Built with ❤️ using React, TypeScript, and modern CSS

</div>