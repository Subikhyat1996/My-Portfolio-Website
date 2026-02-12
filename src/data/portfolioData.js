import { link } from "framer-motion/client";

export const portfolioData = {
  name: "Subikhyat Sourav",
  cv: "2026JANSUBIKHYAT.docx", // Place your CV DOCX in the public folder
  tagline: "Crafting Digital Experiences with Precision and Passion",
  bio: "I'm a full-stack developer with a keen eye for design and a passion for building intuitive, high-performance web applications. With expertise in modern JavaScript frameworks, backend technologies, and cloud platforms, I transform complex ideas into elegant, scalable solutions. My goal is to create impactful digital products that not only look stunning but also deliver exceptional user experiences.",
  skills: [
    { name: "React.js", icon: "https://img.icons8.com/color/48/react-native.png" },
    { name: "Next.js", icon: "https://img.icons8.com/color/48/nextjs.png" },
    { name: "Node.js", icon: "https://img.icons8.com/color/48/nodejs.png" },
    { name: "TypeScript", icon: "https://img.icons8.com/color/48/typescript.png" },
    { name: "Tailwind CSS", icon: "https://img.icons8.com/color/48/tailwind_css.png" },
    { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/postgreesql.png" },
    { name: "AWS", icon: "https://img.icons8.com/color/48/amazon-web-services.png" },
    { name: "Docker", icon: "https://img.icons8.com/color/48/docker.png" },
    { name: "Figma", icon: "https://img.icons8.com/color/48/figma.png" },
    { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
    {name:"AI/ML", icon:"https://img.icons8.com/color/48/artificial-intelligence.png"},
    {name:"Supabase", icon:"https://img.icons8.com/color/48/supabase.png"},
    {name:"Vercel", icon:"https://img.icons8.com/color/48/vercel.png"},
    {name:"Expo", icon:"https://img.icons8.com/color/48/expo.png"},
    {name:"python", icon:"https://img.icons8.com/color/48/python--v1.png"},
  ],
  projects: [
    {
      id: 1,
      title: "Appointment-booking Web Application",
      description: "A modern, mobile-first doctor booking application built with React Native (Expo), Node.js, and MongoDB. Features include real-time appointment scheduling, secure user authentication, and seamless payment integration with Stripe.",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "UX/UI"],
      liveLink: "Email me for live demo",
      githubLink: "#",//Private repo, link will be provided upon request
    },
    {
      id: 2,
      title: "AdminApp",
      description: "Developed a comprehensive admin dashboard for managing appointments and user data in the doctor booking application. Built with React, Node.js, and integrated with MongoDB for data persistence.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
      liveLink: "email me for live demo",
      githubLink: "#",//Private repo, link will be provided upon request
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "A production-ready, mobile-first Progressive Web Application (PWA) built with React, Vite, and offline support. The app is ready for APK conversion using Bubblewrap or Capacitor. It features real-time updates with Supabase and state management using Zustand, providing a seamless user experience for task organization and productivity.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Zustand", "Supabase", "Realtime"],
      liveLink: "Email me for live demo",
      githubLink: "#",//Private repo, link will be provided upon request
    },
    {
      id: 4,
      title: " OTT Platform Dashboard",
      description: "A dynamic dashboard for an OTT platform, built with React and D3.js for interactive data visualization. The dashboard provides insights into user engagement, content performance, and subscription trends through visually appealing charts and graphs.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "D3.js", "Data Viz", "API Integration"],
      liveLink: "Email me for live demo",
      githubLink: "#",//Private repo, link will be provided upon request
    },
    {
      id: 5,
      title: "Dreamanaliser - AI-Powered Dream Analysis Platform",
      description: "A progressive web application (PWA) designed for users to analyze and interpret their dreams using AI. Features include dream journaling, AI-powered insights, and offline support for seamless user experience.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["PWA", "React", "Service Workers", "Firebase"],
      liveLink: "Email me for live demo",
      githubLink: "#",  //Private repo, link will be provided upon request
    },
  ],
  contact: {
    email: "codersubi@gmail.com",
    phone: "+91 9653440643",
    linkedin: "https://www.linkedin.com/in/subikhyat-sourav-379203201",
    github: "https://github.com/Subikhyat1996?tab=repositories",
    twitter: "codersubi",
  }
};
