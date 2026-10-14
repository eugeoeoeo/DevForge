# 🌐 DevForge: Web Development Midterm Reviewer & Exam

> **Modern, mobile-first Web Development (HTML5, CSS3 & PHP) Midterm Reviewer and 60-Item Theoretical Examination WebApp.**  
> Built for students at the **Polytechnic University of the Philippines (PUP) - College of Computer and Information Sciences (CCIS)**.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/CSS3-Responsive-38B2AC?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![PHP](https://img.shields.io/badge/PHP-8.x_Fundamentals-777BB4?logo=php&logoColor=white)](https://www.php.net/)
[![Mobile-First](https://img.shields.io/badge/Mobile--First-100%25_Compatible-10B981?logo=apple&logoColor=white)](#-mobile-first-experience)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ⚡ Highlights & Features

### 📱 Mobile-First Experience
- **Engineered for Phones**: Clean, zero-overflow UI optimized for touch screens (iPhone, Android, Tablets).
- **Adaptive Navigation**: Sticky, touch-friendly bottom navigation bar with safe-area inset support on mobile devices.
- **Micro-Animations & Fast Load**: Instant page transitions, smooth progress rings, and celebratory canvas confetti.

### 📝 60-Item Master Theoretical Examination
- **Strict Format**: Exactly **50 Multiple Choice Questions (MCQ)** + **10 Identification Items** (Total: 60 Items).
- **108+ Dynamic Question Bank**: Shuffled randomly from a comprehensive question bank on every exam retake.
- **Smart Choice Shuffling**: Options (A, B, C, D) are scrambled with the Fisher-Yates algorithm to eliminate repetitive pattern bias.
- **Instant Per-Click Feedback**: Immediately marks answers in **emerald green (✓)** or **crimson red (✕)**, reveals the correct answer, and explains the rationale directly from the lesson curriculum.
- **Results Analysis & Mistake Review**: Post-exam filter tabs (`All [60]`, `✕ Wrong Answers`, and `✓ Correct Answers`) with full explanations for fast, targeted review.
- **Exam Progress Autosave**: Active exam sessions and high scores are preserved in `localStorage` until explicitly retaken.

### 📚 11 Bite-Sized Curriculum Lessons
- **PUP Midterm Syllabus Alignment**:
  - **Module 1**: HTML5 Architecture & Semantics (Core Structure, Landmarks, Media, Forms & Web Accessibility A11y).
  - **Module 2**: CSS3 & Responsive Design (Cascade & Specificity, Box Model, Flexbox, Media Queries & CSS Grid).
  - **Module 3**: Modern PHP Backend Foundations (Syntax, Control Loops & Code Traces, Superglobals `$_GET`/`$_POST`, OOP & Namespaces).
- **Bite-Sized Pagination**: Avoids wall-of-text fatigue with *"Part 1 of X"* stepper navigation and quick next/previous controls.
- **Interactive Lesson Quizzes**: Practice quizzes for every single lesson with instant score feedback.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Styling**: Modern Vanilla CSS + Tailwind-compatible design system tokens
- **Persistence**: LocalStorage with automatic device profiling

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer)
- npm, pnpm, or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/devforge-webdev.git
   cd devforge-webdev
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready assets will be compiled into the `dist/` directory.

---

## 🌐 Instant Deployment

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Click **Deploy**.

### Deploy to Netlify
1. Run `npm run build`.
2. Drag and drop the `dist` folder into [Netlify Drop](https://app.netlify.com/drop), or connect your GitHub repository with Build Command `npm run build` and Publish Directory `dist`.

### Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/<repo-name>/'`.
2. Add a deploy script to `package.json`:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run `npm run build && npm run deploy`.

---

## 📖 Curriculum Overview

| Module | Topics Covered | Key Concepts |
|---|---|---|
| **Unit 01: HTML5** | Anatomy, Semantics, Multimedia, Forms | `<!DOCTYPE html>`, `<picture>`, `<input type="...">`, Web Accessibility (A11y), Alt Text |
| **Unit 02: CSS3** | Cascade, Specificity, Box Model, Layouts | Specificity hierarchy, `box-sizing: border-box`, Flexbox axes, Grid 2D, `@media (min-width: ...)` |
| **Unit 03: PHP** | Core Syntax, Loops, Arrays, OOP Foundations | `<?php`, `echo`, `$_POST`, while loop traces (`16`, `88`), Associative Arrays, Namespaces, Exceptions |

---

## 📝 License

Distributed under the **MIT License**.

---

<p align="center">
  Made with ❤️ for PUPian IT Students • Academic Year 2024-2025
</p>
