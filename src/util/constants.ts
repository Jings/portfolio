import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nodeImage from "../assets/node.png";
import remix from "../assets/remix.png";
import tsImage from "../assets/ts.png";
import firebase from "../assets/firebase.png";
import gc from "../assets/gc.png";
import mysql from "../assets/mysql.png";
import php from "../assets/php.png";

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

export const links: NavLink[] = [
  {
    id: 1,
    link: "home",
    name: "Home",
  },
  {
    id: 2,
    link: "about",
    name: "About",
  },
  {
    id: 3,
    link: "portfolio",
    name: "Portfolio",
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
