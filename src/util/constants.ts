import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import reactImage from "../assets/tech/react.png";
import tailwind from "../assets/tech/tailwind.png";
import nodeImage from "../assets/tech/node.png";
import remix from "../assets/tech/remix.png";
import tsImage from "../assets/tech/ts.png";
import firebase from "../assets/tech/firebase.png";
import gc from "../assets/tech/gc.png";
import mysql from "../assets/tech/mysql.png";
import php from "../assets/tech/php.png";
import krumbeinImmobilien from "../assets/work/krumbein_immobilien.png";
import familyApp from "../assets/work/family_application.png";
import ingoKrumbein from "../assets/work/ingo_krumbein.png";
import widthHint from "../assets/work/width_hint.png";

type NavLink = {
  id: number;
  link: string;
  name: string;
};

type Technology = {
  id: number;
  src: string;
  title: string;
  style: string;
};

type Framework = {
  id: number;
  src: string;
  title: string;
  style: string;
};

type Work = {
  id: number;
  name: string;
  src: string;
  sourceCode?: string;
  link?: string;
};

export const links: NavLink[] = [
  {
    id: 1,
    link: "",
    name: "Home",
  },
  {
    id: 2,
    link: "about",
    name: "About",
  },
  {
    id: 3,
    link: "work",
    name: "Work",
  },
  {
    id: 4,
    link: "technologies",
    name: "Technologies",
  },
  {
    id: 5,
    link: "contact",
    name: "Contact",
  },
];

export const technologies: Technology[] = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: php,
    title: "PHP",
    style: "shadow-[#797CB1]",
  },
  {
    id: 4,
    src: mysql,
    title: "MySQL",
    style: "shadow-[#32738C]",
  },
  {
    id: 5,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 6,
    src: nodeImage,
    title: "NodeJs",
    style: "shadow-[#94BA51]",
  },
  {
    id: 7,
    src: tsImage,
    title: "Typescript",
    style: "shadow-blue-600",
  },
  {
    id: 8,
    src: firebase,
    title: "Firebase",
    style: "shadow-[#D7B245]",
  },
  {
    id: 9,
    src: gc,
    title: "Google Cloud",
    style: "shadow-[#D85140]",
  },
];

export const frameworks: Framework[] = [
  {
    id: 6,
    src: reactImage,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    id: 7,
    src: remix,
    title: "Remix",
    style: "shadow-[#82AFF4]",
  },
  {
    id: 8,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
];

export const works: Work[] = [
  {
    id: 1,
    name: "Krumbein-Immobilien",
    src: krumbeinImmobilien,
    link: "https://krumbein-immobilien.de",
  },
  {
    id: 2,
    name: "Family App",
    src: familyApp,
  },
  {
    id: 3,
    name: "Portfolio",
    src: ingoKrumbein,
    sourceCode: "https://github.com/Jings/portfolio",
    link: "https://ingo-krumbein.de",
  },
  {
    id: 4,
    name: "CSS Width Hint",
    src: widthHint,
    sourceCode: "https://github.com/Jings/css3-width-hint",
  },
];
