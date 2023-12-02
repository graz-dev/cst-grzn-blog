import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://casto-graziano.me/", // replace this with your deployed domain
  author: "Graziano Casto",
  desc: "My personal tech blog",
  title: "Graziano Casto",
  ogImage: "casto-graziano.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["it-IT"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/graz-dev",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/castograziano/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/cst_grzn",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:cst.grzn@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
