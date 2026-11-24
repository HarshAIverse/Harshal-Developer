<div align="center">
  <h1>Harshal Suryavanshi — 3D AI/ML Engineer Portfolio</h1>
  <p>
    <strong>AI/ML Engineer specializing in Generative AI, LLMs, Computer Vision & Edge AI</strong>
  </p>

  <div>
    <img src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </div>

  <br />

  <p>
    <a href="https://linkedin.com/in/harshalsuryavanshi-developer" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" />
    </a>
    <a href="https://github.com/HarshAIverse" target="_blank">
      <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
    </a>
    <a href="mailto:harshalsuryavanshi1106@gmail.com">
      <img src="https://img.shields.io/badge/Email-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
    </a>
  </p>
</div>

---

## 📌 Overview

An interactive 3D developer portfolio built with **React**, **Three.js** (`@react-three/fiber` & `@react-three/drei`), **Framer Motion**, and **Tailwind CSS**. It showcases my work, internships, technical skills, projects, and achievements as an **AI/ML Engineer** and final-year B.Tech (Artificial Intelligence and Machine Learning) student at Sanjay Ghodawat University, Kolhapur.

---

## ✨ Key Features

- **Interactive 3D Hero Section**: Custom 3D desktop workstation rendered with React Three Fiber.
- **Ambient Animated Background & 3D Starfield**: Dynamic glowing orbs and procedural 3D stars across the entire site.
- **Experience Timeline**: Interactive vertical timeline detailing internships across Space Tech, Data Science, Machine Learning, Edge AI / IoT, and Robotics.
- **Categorized Technical Skills & 3D Tech Balls**: Covers Machine Learning, Deep Learning, Generative AI & LLMs, Computer Vision & Edge AI, Data Science, and Backend/Cloud tools.
- **Featured AI/ML Projects**: Tilt-animated project cards with tags and direct GitHub repository links:
  - **Evaltric.AI** — Generative AI Question Generator using Transformers, NLP, and Flask REST API.
  - **ArecaSort AI** — Automated quality grading system with OpenCV, Scikit-learn, and Streamlit.
  - **Cart IQ** — Smart Shopping Cart System on Raspberry Pi with real-time Edge AI object detection.
  - **Heart Attack Prediction & Analysis** — Healthcare analytics ML pipeline with Random Forest (90.3% accuracy) & Power BI.
- **Achievements, Leadership & Certifications**: Highlights including Top 10 Finalist in *FundMyCrazy (Google Gemini x IIT Bombay)*, *2025 MLH Hackcon Scholar*, *Google Student Ambassador*, and *GDG on Campus Organiser*.
- **3D Earth Contact Section**: Interactive 3D Earth model paired with a dual-mode contact form (EmailJS + FormSubmit fallback + mailto backup).
- **Responsive Design**: Optimized across desktop, tablet, and mobile viewports.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18, React Router v6, Vite |
| **3D Graphics & WebGL** | Three.js, `@react-three/fiber`, `@react-three/drei`, `maath` |
| **Styling & UI** | Tailwind CSS, PostCSS, `react-tilt`, `react-vertical-timeline-component` |
| **Animations** | Framer Motion |
| **Contact Integration** | EmailJS (`@emailjs/browser`), FormSubmit AJAX API |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HarshAIverse/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional)**
   By default, the contact form sends messages via FormSubmit. To use **EmailJS** instead, create a `.env` file in the `Portfolio` root directory:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📂 Project Structure

```text
Portfolio/
├── public/                 # Static assets & 3D glTF models (desktop_pc, planet)
├── src/
│   ├── assets/             # Icons, company logos, and project thumbnails
│   ├── components/         # React UI components & 3D Canvas scenes
│   │   └── canvas/         # Three.js canvases (Computers, Earth, Ball, Stars)
│   ├── constants/          # Portfolio data (skills, experiences, projects, leadership)
│   ├── hoc/                # Higher-Order Components (SectionWrapper)
│   ├── utils/              # Framer Motion animation variants
│   ├── App.jsx             # Root application layout
│   ├── index.css           # Tailwind directives & custom animations
│   └── main.jsx            # Application entry point
├── index.html
├── package.json
├── tailwind.config.cjs
└── vite.config.js
```

---

## 📬 Contact

- **Name**: Harshal Suryavanshi
- **Location**: Kolhapur, Maharashtra, India
- **Email**: [harshalsuryavanshi1106@gmail.com](mailto:harshalsuryavanshi1106@gmail.com)
- **LinkedIn**: [linkedin.com/in/harshalsuryavanshi-developer](https://linkedin.com/in/harshalsuryavanshi-developer)
- **GitHub**: [github.com/HarshAIverse](https://github.com/HarshAIverse)
