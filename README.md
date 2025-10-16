# 🎓 LearnHub - Premium Learning Management System

A modern, production-ready LMS frontend built with React + Vite, designed for CI/CD pipeline integration (Jenkins/GitLab CI/Terraform/ELK Stack).

![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.20-646cff?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.5-38bdf8?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0.0-ff69b4)

## ✨ Features

### 🎨 Premium UI/UX
- **Modern Design** - Inspired by Coursera, Udemy, and Google Classroom
- **Dark/Light Theme** - Toggle with localStorage persistence
- **Smooth Animations** - Framer Motion for delightful interactions
- **Responsive Layout** - Mobile-first design, works on all devices
- **Skeleton Loaders** - Perceived performance improvements

### 📚 Core Functionality
- **Course Catalog** - Browse, search, and filter 6+ courses
- **Course Details** - Tabs for overview, curriculum, quiz, and reviews
- **Dashboard** - Progress tracking, enrolled courses, stats
- **Quiz System** - Interactive quizzes with styled radio buttons
- **Feedback System** - Star ratings and category-based feedback
- **Authentication** - Mock login/signup with validation

### 🛠 Technical Features
- **Mock API** - JSON structured logs for ELK Stack
- **Private Routes** - Auth-protected dashboard
- **Form Validation** - Real-time error handling
- **Loading States** - Skeleton screens and spinners
- **SEO Ready** - Semantic HTML structure

## 🚀 Quick Start

### Prerequisites
- Node.js 20.12.2 or higher
- npm 10.8.1 or higher

### Installation

```powershell
# Clone the repository
git clone https://github.com/Saravanank2005/LMS_DevOps.git
cd lms-frontend

# Install dependencies (with legacy peer deps for React 19)
npm install --legacy-peer-deps
```

### Development

```powershell
# Start dev server (runs on http://localhost:5173)
npm run dev
```

### Production Build

```powershell
# Build for production
npm run build

# Preview production build
npm run preview

# Or serve with static server
npx serve -s dist
```

### Docker Deployment

```powershell
# Build Docker image
docker build -t lms-frontend:latest .

# Run container
docker run -p 8080:80 lms-frontend:latest

# Access at http://localhost:8080
```

## 📁 Project Structure

```
lms-frontend/
├── src/
│   ├── api/
│   │   └── api.js              # Mock API with JSON logging
│   ├── assets/                 # Static assets
│   ├── components/
│   │   ├── CourseCard.jsx      # Course card with animations
│   │   ├── Footer.jsx          # Site footer with links
│   │   ├── Navbar.jsx          # Navigation with theme toggle
│   │   ├── QuizForm.jsx        # Interactive quiz component
│   │   └── Skeleton.jsx        # Loading skeleton variants
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark/Light theme provider
│   ├── pages/
│   │   ├── CourseDetail.jsx    # Single course view
│   │   ├── Courses.jsx         # Course catalog with filters
│   │   ├── Dashboard.jsx       # User dashboard
│   │   ├── Feedback.jsx        # Feedback form
│   │   ├── Home.jsx            # Landing page
│   │   └── Login.jsx           # Auth page
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # App entry point
│   ├── index.css               # Tailwind + custom styles
│   └── App.css                 # Additional styles
├── public/                     # Public assets
├── Dockerfile                  # Multi-stage Docker build
├── nginx.conf                  # Nginx configuration
├── tailwind.config.js          # Tailwind customization
├── postcss.config.js           # PostCSS config
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary:** Blue (Tailwind blue-600: #2563eb)
- **Secondary:** Purple (Tailwind purple-600: #9333ea)
- **Success:** Green (#10b981)
- **Warning:** Orange (#f59e0b)
- **Danger:** Red (#ef4444)

### Typography
- **Headings:** Poppins (Google Fonts)
- **Body:** Inter (Google Fonts)

### Components
- Buttons: Primary, Secondary, Outline variants
- Cards: Shadow-lg with hover effects
- Inputs: Focus ring with primary color
- Skeletons: Animated loading placeholders

## 📦 Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | React 19.1.1 |
| **Build Tool** | Vite 5.4.20 |
| **Styling** | Tailwind CSS 3.3.5 |
| **Animations** | Framer Motion 11.0.0 |
| **Icons** | React Icons 5.0.0 |
| **Routing** | React Router 6.14.1 |
| **HTTP Client** | Axios 1.5.0 |
| **Web Server** | Nginx (Docker) |

## 🌐 Available Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, features, testimonials |
| `/courses` | Course catalog with search and filters |
| `/courses/:id` | Course detail with tabs (overview, curriculum, quiz, reviews) |
| `/login` | Login/Signup page with form validation |
| `/dashboard` | User dashboard (protected route) |
| `/feedback` | Feedback form with star ratings |

## 🔑 Demo Credentials

This app uses **mock authentication**. Enter any username to login (no password required).

Example usernames:
- `student1`
- `john_doe`
- `test_user`

## 🎯 Key Features

### 1. Theme System
- Toggle between dark and light modes
- Persists preference in localStorage
- Smooth transition animations

### 2. Course Catalog
- Search by title or description
- Filter by category (Development, Business, Design, Marketing)
- Filter by difficulty (Beginner, Intermediate, Advanced)
- Switch between grid and list views

### 3. Dashboard
- Sidebar navigation with profile
- Stats cards (courses enrolled, completed, streak, certificates)
- Progress bars for ongoing courses
- Quick actions and help section

### 4. Interactive Components
- **CourseCard:** Hover effects, star ratings, meta info
- **QuizForm:** Radio buttons with custom styling, success animation
- **Feedback:** Star rating picker, category selection, character counter

### 5. Loading States
- Skeleton loaders for cards, lists, text, avatars
- Spinning loaders for button actions
- Smooth transition from skeleton to content

## 🔧 Configuration

### Tailwind CSS
Customize colors, fonts, and animations in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: colors.blue,
      secondary: colors.purple,
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      display: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
}
```

### Vite
Configure dev server and build options in `vite.config.js`.

## 📊 CI/CD Integration

### Jenkins Pipeline
The app is designed for Jenkins CI/CD with:
- Multi-stage Docker builds
- JSON logs for ELK Stack monitoring
- Production-ready nginx configuration

### GitLab CI
Compatible with GitLab CI/CD using `.gitlab-ci.yml` (add as needed).

### Terraform
Infrastructure as Code ready for deployment on cloud platforms.

### ELK Stack
JSON structured logs in console for:
- Filebeat collection
- Logstash processing
- Elasticsearch indexing
- Kibana visualization

## 🐳 Docker

### Dockerfile Features
- Multi-stage build (Node.js build + Nginx serve)
- Optimized layer caching
- Production build with environment variables
- Nginx gzip compression
- Health check endpoint

### Nginx Configuration
- SPA fallback routing (serves `index.html` for all routes)
- Gzip compression for static assets
- Cache headers for optimal performance

## 🧪 Testing (Future)

```powershell
# Unit tests (to be added)
npm run test

# E2E tests (to be added)
npm run test:e2e

# Coverage report
npm run test:coverage
```

## 📝 Environment Variables

Create `.env` file for customization:

```env
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_NAME=LearnHub
VITE_ENABLE_MOCK_API=true
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration: Coursera, Udemy, Google Classroom
- Icons: Feather Icons (via React Icons)
- Fonts: Google Fonts (Inter, Poppins)
- Animations: Framer Motion
- Styling: Tailwind CSS

## 📧 Contact

**Repository:** [LMS_DevOps](https://github.com/Saravanank2005/LMS_DevOps)  
**Author:** Saravanan K

---

**Built with ❤️ for DevOps Pipeline Integration**

🚀 Ready for Jenkins + GitLab CI + Terraform + ELK Stack
