# Mini LMS Frontend

Minimal React (Vite) frontend for demonstration and CI/CD pipeline experiments (Jenkins/GitLab CI/Terraform/ELK).

Features
- Mock authentication
- View courses, course details
- Submit simple quizzes
- JSON structured logs (console)
- Dockerfile + nginx for static deployment

Quick start

1. Install deps

```powershell
npm ci
```

2. Dev

```powershell
npm run dev
```

3. Build and run locally

```powershell
npm run build
npx serve -s dist
```

4. Build Docker image

```powershell
docker build -t lms-frontend:latest .
docker run -p 8080:80 lms-frontend:latest
```

Notes for CI/CD
- The Dockerfile performs a production build and serves with nginx. Use multi-stage build in pipelines.
- Logs are JSON lines to stdout for ingestion by ELK (Filebeat/Logstash).
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
