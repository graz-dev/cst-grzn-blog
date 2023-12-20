import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://casto-graziano.me/", // replace this with your deployed domain
  author: "Graziano Casto",
  desc: "Technical Product Expert @ Mia-Platform</b> by day, aspiring stargazer by night. Wandering through the landscape of cloud-native technologies with the same hunger for knowledge as if it were the first day. From coding to product management, I'm all about <b>agile vibes, software craftsmanship, and the magic of cloud technologies. Beyond the screen, I'm an amateur photographer and a travel lover.",
  title: "Graziano Casto",
  ogImage: "/assets/casto-graziano.png",
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
