import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  mongodb,
  git,
  figma,
  docker,
  evaltric,
  arecasort,
  cartiq,
  heartattack,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI / ML Engineer",
    icon: web,
  },
  {
    title: "Generative AI & LLMs",
    icon: creator,
  },
  {
    title: "Computer Vision & Edge AI",
    icon: mobile,
  },
  {
    title: "Data Science & Backend APIs",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Machine Learning & Deep Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NLP",
      "Transformers",
      "Feature Engineering",
      "Model Training & Evaluation",
      "Data Preprocessing",
    ],
  },
  {
    category: "Generative AI & LLMs",
    skills: [
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "OpenAI API",
      "Gemini API",
      "Embeddings",
      "Vector Databases",
      "AI Agents",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    category: "Computer Vision & Edge AI",
    skills: [
      "OpenCV",
      "YOLOv8",
      "Object Detection",
      "Image Classification",
      "Real-time Inference",
      "Edge AI",
      "TensorRT",
      "CUDA",
      "Raspberry Pi",
      "Sensor Integration",
    ],
  },
  {
    category: "Data Science & Analytics",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "EDA",
      "Statistical Analysis",
      "Predictive Modeling",
      "A/B Testing",
      "Tableau",
      "Power BI",
      "Excel",
    ],
  },
  {
    category: "Backend, Cloud & Tools",
    skills: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "MySQL",
      "SQLite",
      "MongoDB",
      "Docker",
      "AWS",
      "Git & GitHub",
      "Streamlit",
      "Jupyter",
      "Figma",
    ],
  },
];

const experiences = [
  {
    title: "Winter Intern, Technical Training Program",
    company_name: "India Space Lab",
    icon: web,
    iconBg: "#12151f",
    date: "Nov 2026 - Present",
    points: [
      "Selected for the 2026 Winter Internship covering AI, drone technology, CanSat and CubeSat, rocketry, remote sensing, GIS, and disaster management.",
      "Gaining hands-on exposure through expert-led training and project-based learning.",
    ],
  },
  {
    title: "Sales and User Acquisition Intern",
    company_name: "Rewyoo",
    icon: creator,
    iconBg: "#1e293b",
    date: "Oct 2026 - Present",
    points: [
      "Drive user acquisition through outreach to colleges, student communities, and professionals.",
      "Organize webinars, recruit campus ambassadors, and collect user feedback to improve adoption.",
    ],
  },
  {
    title: "Def Space Tech Intern",
    company_name: "Bharat Space Education Research Centre",
    icon: mobile,
    iconBg: "#12151f",
    date: "Jun 2026 - Aug 2026",
    points: [
      "Explored AI, cyber security, drone technology, robotics, rocketry, and defence applications through industry-oriented projects.",
      "Collaborated with innovators and professionals to build future-ready solutions.",
    ],
  },
  {
    title: "Data Science and Analytics Intern",
    company_name: "Zidio Development | Bengaluru, Karnataka",
    icon: backend,
    iconBg: "#1e293b",
    date: "May 2026 - Aug 2026",
    points: [
      "Cleaned and preprocessed data with Python and SQL, and built and validated ML models using feature engineering, EDA, and model evaluation.",
      "Created visualizations and automated dashboards with Matplotlib and Seaborn to support data-driven decisions.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Unified Mentor Private Limited",
    icon: web,
    iconBg: "#12151f",
    date: "Apr 2026 - Jul 2026",
    points: [
      "Developed ML and deep learning models in Python and Scikit-learn, from preprocessing to evaluation, to improve accuracy on production datasets.",
      "Documented and deployed ML models through REST APIs with cross-functional teams.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Bluestock",
    icon: backend,
    iconBg: "#1e293b",
    date: "Apr 2026 - Jun 2026",
    points: [
      "Performed EDA on business datasets with Python (Pandas, NumPy) and SQL, and built dashboards in Excel and Python.",
      "Ran A/B tests and built predictive models, delivering results through automated reporting.",
    ],
  },
  {
    title: "IoT Developer Intern",
    company_name: "CodeQuell | Kolhapur, Maharashtra",
    icon: mobile,
    iconBg: "#12151f",
    date: "Jan 2025 - Sep 2025",
    points: [
      "Deployed AI/ML-powered IoT systems on Raspberry Pi, using Python, OpenCV, and YOLOv8 for real-time object detection and anomaly classification at the edge.",
      "Optimized on-device inference with TensorRT for low-latency, cloud-free performance.",
    ],
  },
  {
    title: "Robotics Intern",
    company_name: "Kodacy",
    icon: creator,
    iconBg: "#1e293b",
    date: "Jan 2025",
    points: [
      "Gained hands-on experience in robotics systems, embedded AI, and intelligent automation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Top 10 Finalist, FundMyCrazy (Google Gemini x IIT Bombay): shortlisted from 29,349 student submissions across India for a Rs 1 Crore prize pool.",
    name: "Top 10 Finalist",
    designation: "FundMyCrazy",
    company: "Google Gemini x IIT Bombay",
    image: creator,
  },
  {
    testimonial:
      "2025 Hackcon Scholarship Award, Major League Hacking (MLH): recognized for initiative, guiding peers and supporting the hackathon community.",
    name: "2025 Hackcon Scholarship Award",
    designation: "Scholar",
    company: "Major League Hacking (MLH)",
    image: web,
  },
  {
    testimonial:
      "Best NSS (National Service Scheme) Volunteer Award.",
    name: "Best NSS Volunteer Award",
    designation: "National Service Scheme",
    company: "Sanjay Ghodawat University",
    image: mobile,
  },
];

const leadership = [
  {
    role: "President, AIML Student Association",
    organization: "Sanjay Ghodawat University",
    date: "Jul 2026 - Present",
    point:
      "Lead strategy, workshops, hackathons and industry sessions with faculty and industry professionals.",
  },
  {
    role: "GDG on Campus Organiser",
    organization: "GDG India",
    date: "Oct 2026 - Present",
    point: "Organize developer events and community programs on campus.",
  },
  {
    role: "Google Student Ambassador",
    organization: "Google",
    date: "Aug 2025 - Present",
    point:
      "Deliver generative AI workshops and live Gemini API demos for 500+ students; bridge campus and Google.",
  },
  {
    role: "Open Source Contributor and Campus Lead",
    organization: "Open Source Connect (OSCI'25, OSCG'26)",
    date: "Aug 2025 - Oct 2026",
    point:
      "Mentored fellow builders and promoted open collaboration on campus.",
  },
];

const projects = [
  {
    name: "Evaltric.AI",
    description:
      "Generative AI Question Generator built with NLP and transformer-based models that extracts key concepts from unstructured text and generates MCQs. Implemented the full ML pipeline and deployed via a Flask REST API.",
    tags: [
      {
        name: "generative-ai",
        color: "blue-text-gradient",
      },
      {
        name: "transformers-nlp",
        color: "green-text-gradient",
      },
      {
        name: "flask-api",
        color: "pink-text-gradient",
      },
    ],
    image: evaltric,
    source_code_link: "https://github.com/HarshAIverse/Evaltric.AI",
  },
  {
    name: "ArecaSort AI",
    description:
      "Automated areca nut quality grading system using OpenCV preprocessing and Scikit-learn models (Decision Tree with bagging and voting), reaching 0.89 test accuracy. Published an original grade 1/2/3 dataset on Kaggle and built a Streamlit app.",
    tags: [
      {
        name: "opencv",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: arecasort,
    source_code_link: "https://github.com/HarshAIverse/ArecaSort-AI",
  },
  {
    name: "Cart IQ",
    description:
      "Smart Shopping Cart System on Raspberry Pi using sensor integration and OpenCV object detection to identify items and compute totals in real time, running on-device inference to remove cloud latency for retail automation.",
    tags: [
      {
        name: "computer-vision",
        color: "blue-text-gradient",
      },
      {
        name: "raspberry-pi",
        color: "green-text-gradient",
      },
      {
        name: "edge-ai",
        color: "pink-text-gradient",
      },
    ],
    image: cartiq,
    source_code_link: "https://github.com/HarshAIverse/Cart-IQ",
  },
  {
    name: "Heart Attack Prediction & Analysis",
    description:
      "Machine learning-based healthcare analytics system that analyzes patient health indicators to predict potential heart disease risk. Implemented a Random Forest Classifier achieving 90.3% accuracy and 93% ROC-AUC score, with exploratory data analysis and interactive Power BI dashboards to identify key cardiovascular risk factors.",
    tags: [
      {
        name: "machine-learning",
        color: "blue-text-gradient",
      },
      {
        name: "healthcare-ai",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "power-bi",
        color: "blue-text-gradient",
      },
    ],
    image: heartattack,
    source_code_link: "https://github.com/HarshAIverse/Heart-Attack-Prediction-Analysis",
  },
];

const education = [
  {
    degree: "Bachelor of Technology (B.Tech), Artificial Intelligence and Machine Learning",
    institution: "Sanjay Ghodawat University | Kolhapur, Maharashtra",
    date: "Jul 2023 - Jun 2027",
  },
];

const certifications = [
  "Python (Certified)",
  "Data Visualization with Python",
  "Deloitte Australia Data Analytics Job Simulation",
  "Learn Figma: UI/UX Design Masterclass",
  "Open Source Connect India 2025 (Contributor)",
];

export {
  services,
  technologies,
  skillCategories,
  experiences,
  testimonials,
  leadership,
  projects,
  education,
  certifications,
};
