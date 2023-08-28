import amr0 from "../../assets/images/amr0.jpg";import amr00 from "../../assets/images/amr00.jpg";

import amr1 from "../../assets/images/amr1.jpg";

import amr2 from "../../assets/images/amr2.jpg";
import amr22 from "../../assets/images/amr22.jpg";

import amr3 from "../../assets/images/amr3.jpg";
import amr33 from "../../assets/images/amr33.jpg";

import amr4 from "../../assets/images/amr4.jpg";
import amr44 from "../../assets/images/amr44.jpg";

import amr5 from "../../assets/images/amr5.jpg";

import amr6 from "../../assets/images/amr6.jpg";
import amr66 from "../../assets/images/amr66.jpg";

import amr7 from "../../assets/images/amr7.jpg";

import amr8 from "../../assets/images/fylo1.jpg";
import amr88 from "../../assets/images/fylo.jpg";

import amr9 from "../../assets/images/topics1.jpg";
import amr99 from "../../assets/images/topics.jpg";

import amr10 from "../../assets/images/nike1.jpg";
import amr1010 from "../../assets/images/nike.jpg";

const menu = [
  {
    id: 1,
    src: amr0,
    src2: amr00,
    alt: "it's a photo",
    title: "imdb clone",
    category: "react",
    description:
      "A mini IMDB clone app in which we can search movies based on OMDB API, with search suggestions. Clicking on a particular movie card opens a new page for more info. On clicking on the favorite button, we can add a movie to the favorite list, also you can add a movie to watched movies list using local storage to store movies.",
    activeObject: null,
    live: "https://amr-abd-alhameed.github.io/IMDB-CLONE/",
    demo: "https://github.com/amr-abd-alhameed/IMDB-CLONE",
    tech: [
      "html",
      "css",
      "js",
      "react",
      "react-redux",
      "redux Toolkit",
      "hooks",
      "react Skeleton",
      "react Router",
      "react moment",
      "react Icons",
    ],
  },
  {
    id: 2,
    src: amr1,
    alt: "it's a photo",
    title: "to do app",
    category: "react",
    description:
      "ToDo app showing best practices using React , Features  is a task management app to help you stay organized and manage your day-to-day,adding tasks,removing tasks and done tasks is under-lined ",
    activeObject: null,
    live: "https://amr-abd-alhameed.github.io/ToDoApp/",
    demo: "https://github.com/amr-abd-alhameed/ToDoApp",
    tech: ["html", "css", "js", "react", "hooks", "react Router"],
  },
  {
    id: 3,
    src: amr2,
    src2: amr22,
    alt: "it's a photo",
    title: "ecommerce app",
    category: "js react",
    description:
      " this app allows users to shop online, browse product catalogs, create wish lists, add items to a cart, and complete purchases.",
    activeObject: null,
    live: "https://amr-abd-alhameed.github.io/e-commerce-app/",
    demo: "https://github.com/amr-abd-alhameed/e-commerce-app",
    tech: [
      "html",
      "css",
      "scss",
      "bootstrap",
      "js",
      "react helmet",
      "react",
      "redux",
      "react-redux",
      "redux Toolkit",
      "hooks",
      "carousel",
      "react Router",
      "marquee",
      "react Icons",
      "react Image Zoom",
    ],
  },
  {
    id: 4,
    src: amr3,
    src2: amr33,
    alt: "it's a photo",
    title: "amazing portfolio",
    category: "js react",
    description:
      " incredible personal website with many features , based on React Used many libraries ,Modern ui/ux design , and premium style Component base ",
    activeObject: null,
    live: "https://amr-abd-alhameed.github.io/portfolio1/",
    demo: "https://github.com/amr-abd-alhameed/portfolio1",
    tech: [
      "html",
      "css",
      "scss",
      "bootstrap",
      "js",
      "react",
      "framer Motion",
      "hooks",
      "react Icons",
      "styled Component",
    ],
  },
  {
    id: 5,
    src: amr4,
    src2: amr44,
    alt: "it's a photo",
    title: "dashboard",
    category: "react",
    description:
      "advanced react admin dashboard application, features fully mobile responsive , customizable with many themes, dark mode and light mode, many pages, four apps and seven functional charts",
    activeObject: null,
    live: "https://amr-abd-alhameed.github.io/dashBoard/",
    demo: "https://github.com/amr-abd-alhameed/dashBoard",
    tech: [
      "html",
      "css",
      "tailwind",
      "js",
      "react",
      "hooks",
      "react Router",
      "react Icons",
      "syncfusion",
    ],
  },

  {
    id: 6,
    src: amr5,
    alt: "it's a photo",
    title: "agency website",
    category: "js",
    description:
      "landing page based on javascript , Features automatically changing wallpaper , save data in local storage, customize your theme ,responsive with all screens",
    activeObject: null,
    live: "https://amr-abd-alhameed.github.io/dashBoard/",
    demo: "https://github.com/amr-abd-alhameed/dashBoard",
    tech: [
      "html",
      "css",
      "scss",
      "javascript",
      "local storage",
      "responsive design",
    ],
  },
  {
    id: 7,
    src: amr6,
    src2: amr66,
    alt: "it's a photo",
    title: "leon",
    category: "all",
    description:
      "the project based on html5 and css3, Features simple design ,responsive with all screens",
    activeObject: null,
    live: "https://amr-abd-alhameed.github.io/Leon-Templet/",
    demo: "https://github.com/amr-abd-alhameed/Leon-Templet/settings/pages",
    tech: ["html", "css", "responsive design"],
  },
  {
    id: 8,
    src: amr7,
    alt: "it's a photo",
    title: "quiz app",
    category: "js",
    description:
      "the project based on javascript using Ajax , Features is  calculating the number of correct answers of all questions then giving your result, timer sor every question, smart design",
    activeObject: null,
    live: "https://amr-abd-alhameed.github.io/QuizApp/",
    demo: "https://github.com/amr-abd-alhameed/QuizApp",
    tech: [
      "html",
      "css",
      "responsive web design",
      "javascript",
      "Ajax",
      "json",
    ],
  },
  {
    id: 8,
    src: amr8,
    src2: amr88,
    alt: "it's a landing page",
    title: "fylo",
    category: "next",
    description:
      " this app allows users to discover the page, browse services, create contracts,meeting the team.",
    activeObject: null,
    live: "https://fylo-delta-ebon.vercel.app/",
    demo: "https://github.com/amr-abd-alhameed/fylo",
    tech: [
      "html",
      "css",
      "tailwindCss",
      "javaScript",
      "hooks",
      "postcss",
      "react icons",
      "next.js",
    ],
  },
  {
    id: 9,
    src: amr9,
    src2: amr99,
    alt: "it's a landing page",
    title: "topic",
    category: "next",
    description:
      " this app allows users to discover three pages, browse services and sections, modern design,get in touch with all team.",
    activeObject: null,
    live: "https://fylo-delta-ebon.vercel.app/",
    demo: "https://github.com/amr-abd-alhameed/Topic",
    tech: [
      "html",
      "css",
      "tailwindCss",
      "javaScript",
      "hooks",
      "postcss",
      "react icons",
      "next.js",
    ],
  },
  {
    id: 10,
    src: amr10,
    src2: amr1010,
    alt: "it's a landing page",
    title: "nike",
    category: "react",
    description:
      "advanced react Nike website, features fully mobile responsive ,  with complex hero section, many sections",
    activeObject: null,
    live: "https://amr-abd-alhameed.github.io/Nike/",
    demo: "https://github.com/amr-abd-alhameed/Nike",
    tech: [
      "html",
      "css",
      "tailwind",
      "js",
      "react",
      "hooks",
      "react Router",
      "react Icons",
    ],
  },
];
export default menu;
