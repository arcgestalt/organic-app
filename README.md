# Organic App (Frontend Gateway)

An industry-standard, high-performance web application starter built with **Astro**, **React**, and **TypeScript**, fully optimized for edge hosting on **Cloudflare Pages**. 

This repository is designed as a highly scalable, generic frontend architecture. It is built to support any type of application—whether it's an e-commerce platform, a database-driven dashboard, a serverless SaaS app, or a simple high-fidelity static website.

---

## 🛠️ Tech Stack & Tooling

- **Core Framework:** [Astro v7.0](https://astro.build/) (Static Site Generator & Server-Side Renderer optimized for the Edge)
- **UI Runtime:** [React 19](https://react.dev/) (For advanced interactive components)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (The utility-first CSS framework, compiled via Vite)
- **Code Quality & Speed:** [Biome v2.5](https://biomejs.dev/) (Ultra-fast, unified linter and formatter)
- **Type Safety:** [TypeScript](https://www.typescriptlang.org/) (Strict compilation configurations)
- **Deployment Platform:** [Cloudflare Pages](https://pages.cloudflare.com/) (Edge-native CDN static and SSR deployments)

---

## 🚀 Environment Configuration

The application communicates with its serverless backend API via environment variables. To manage configurations securely and cleanly across environments:

- **`.env.example`** (Committed): Defines the schema and placeholders for required keys.
- **`.env`** (Ignored): Used for local-only secrets and overrides.

### Key Variables
- **`PUBLIC_API_URL`**: Points the frontend to the backend endpoint. 
  - **Local Dev:** `http://localhost:8787` (Default Hono Worker port)
  - **Staging:** `https://organic-api-service-staging.<subdomain>.workers.dev`
  - **Production:** `https://organic-api-service.<subdomain>.workers.dev` (or your custom API domain)

*Note: In Astro, only variables prefixed with `PUBLIC_` are exposed to client-side React code.*

---

## 🌲 Multi-Environment Git & Deployment Flow

This project utilizes a robust, automated staging-to-production deployment pipeline integrated with GitHub and Cloudflare Pages.

### **1. Environment Architecture**
We use two fully isolated Cloudflare Pages projects connected to the same GitHub repository:
- **Production (`organic-app`):** Automatically deploys when code is pushed/merged to the **`main`** branch.
- **Staging (`organic-app-staging`):** Automatically deploys when code is pushed/merged to the **`staging`** branch.

### **2. Dynamic Wrangler Configuration**
To deploy a single repository to multiple distinct Cloudflare projects without hardcoding names or maintaining separate configurations, we utilize Wrangler environment overrides in `wrangler.jsonc`:

```json
{
  "$schema": "./node_modules/wrangler/config-schema.json",
  "compatibility_date": "2026-07-16",
  "compatibility_flags": ["global_fetch_strictly_public"],
  "main": "@astrojs/cloudflare/entrypoints/server",
  "assets": {
    "directory": "./dist",
    "binding": "ASSETS"
  },
  "observability": {
    "enabled": true
  }
}
```
*By omitting the default `name` field from the root of `wrangler.jsonc`, Cloudflare Pages builds both the staging and production sites seamlessly out-of-the-box, matching the respective Cloudflare dashboard project names without any static-assets or environment variable conflicts.*

---

## 💻 Local Development Workflow

All commands are run using `pnpm` from the root of the project directory.

### **1. Set up your Local Environment**
Duplicate `.env.example` to create your local `.env`:
```bash
cp .env.example .env
```

### **2. Install Dependencies**
```bash
pnpm install
```

### **3. Spin up the Dev Server**
```bash
pnpm run dev
```
- Your local site will be running on **`http://localhost:4321`**.
- It will automatically attempt to fetch from your backend API running locally on **`http://localhost:8787`**.

---

## 💎 Industry-Standard Code Quality

We enforce strict pre-commit hooks and CI/CD validation checks to ensure no broken or unformatted code makes it to staging or production.

### **Branch Protection**
Both `main` and `staging` branches on GitHub are protected. Code cannot be merged unless:
1. A Pull Request is opened.
2. The GitHub Action **`validate`** job succeeds (Runs formatting checks, lints, and TypeScript type-checking).

### **Local Commands**
- **Linting & Formatting:** 
  ```bash
  pnpm run format  # Fast-formats all files
  pnpm run lint    # Lints and applies safe auto-fixes
  ```
- **Type-checking:**
  ```bash
  pnpm run typecheck
  ```
