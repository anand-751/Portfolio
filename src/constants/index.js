// assets import
import {
  backend,
  creator,
  mobile,
  web,
  aibot,
  banking,
  shell,
  hp2,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  mysql,
  express,
  nextjs,
  mui,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
} from '../assets';

// separate import for tekisky
import Lumovate from "../assets/company/lumovate.png";

// nav links
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// services
const services = [
  { title: "Full-Stack Developer", icon: web },
  { title: "Generative AI Developer", icon: mobile },
  { title: "Agentic AI Developer", icon: creator },
];

// technologies
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Material UI", icon: mui },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: express },
  { name: "Next Js", icon: nextjs },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "Git", icon: git },
];

// experience
const experiences = [
  {
    title: "SDE Intern",
    company_name: "Lumovate Intelligence",
    icon: Lumovate,
    iconBg: "#383E56",
    link: "https://tinyurl.com/34bx9xfs", 
    date: "February 2025  -  May 2025",
    points: [
      "Led a team project to build a feature for e-commerce platforms and small businesses, enabling analysis of SEO parameters to enhance product search visibility.",
      "Built SEO-optimized components using Next.js with Server-Side Rendering (SSR), React.js, Node.js, and Express.js.",
      "Translated Figma designs into pixel-perfect, responsive UIs using Tailwind CSS and React, following modern UI/UX best practices.",
      "Integrated RESTful APIs with backend logic and MongoDB for data-driven dashboards and real-time analytics.",
      "Collaborated with cross-functional teams in an agile environment, participating in sprint planning, reviews, and daily standups.",
      "Gained hands-on experience working across the entire development lifecycle, from ideation to deployment and debugging.",
    ],

  },
];

// projects
const projects = [
  {
    name: "Banking Management System",
    description:
      "Designed and developed a secure full-stack banking platform allowing users to manage accounts, transfer funds, and access personalized dashboards.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "white-text-gradient" },
      { name: "node", color: "pink-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: banking,
    source_code_link: "https://github.com/yourusername/banking-management-system",
  },
  {
    name: "Custom Command-Line Shell (C++, System Calls)",
    description:
      "Developed a Unix-style shell in C++ with built-in support for process control, piping, I/O redirection, and signal handling using system calls.",
    tags: [
      { name: "c++", color: "blue-text-gradient" },
      { name: "system-calls", color: "green-text-gradient" },
      { name: "linux", color: "pink-text-gradient" },
    ],
    image: shell,
    source_code_link: "https://github.com/yourusername/custom-shell-cpp",
  },
  {
    name: "AI Chatbot (Gemini 1.5, Web Scraping, MERN)",
    description:
      "Built a full-stack AI chatbot using Gemini 1.5 API for context-aware response generation. Implemented web scraping from Google search to extract and summarize real-time data.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "express", color: "white-text-gradient" },
      { name: "node", color: "green-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: aibot,
    source_code_link: "https://github.com/yourusername/ai-chatbot-gemini",
  },
  {
    name: "Agentic AI Database Assistant (Electron, Gemini, MongoDB)",
    description:
      "Developed a cross-platform desktop app using ElectronJS and React for performing MongoDB CRUD operations via natural language queries powered by Gemini 1.5.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "electron", color: "white-text-gradient" },
      { name: "node", color: "green-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: hp2,
    source_code_link: "https://github.com/yourusername/agentic-db-assistant",
  },
];

export { services, technologies, experiences , projects };
