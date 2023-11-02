import { NoteIcon } from "@/app/components/Icons/svg";
import { MuiIconType } from "@/app/types";

export const BACKGROUND_COLORS = [
  "#8A87D2",
  "#A791BF",
  "#F7C18E",
  "#758EB7",
  "#FBA276",
  "#85CBB3",
  "#EFBBCC",
  "#FFBCD9",
  "#B6ADD8",
  "#A0D084",
  "#9CB2E3",
  "#8DDC86",
  "#FFAFCC",
  "#F3B4BB",
  "#FFA69E",
  "#E88870",
  "#CB997E",
  "#FFCB69",
  "#F6C050",
  "#F8961E",
  "#A8DADC",
  "#A2D2FF",
  "#1F9DFF",
  "#5390D9",
  "#6878B1",
];

export const SECTION_HEADER_AND_DESC_ITEMS: {
  id: string;
  name: string;
  headerText: string;
  description: string[];
}[] = [
  {
    id: "about",
    name: "ABOUT ME",
    headerText: "WHO AM I",
    description: [
      "<b>Hi, I&apos;m Yola Liang.</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    ],
  },
  {
    id: "skills",
    name: "MY SKILLS",
    headerText: "TECH STACKS I'M GOOD AT",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    ],
  },
  {
    id: "experience",
    name: "WORK",
    headerText: "CAREER EXPERIENCE",
    description: [
      "Lorem ipsum dolor sscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    ],
  },
  {
    id: "project",
    name: "PROJECTS",
    headerText: "SOME OF MY RECENT WORK",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    ],
  },
  {
    id: "blog",
    name: "BLOG",
    headerText: "RECENT BLOGS",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    ],
  },
  {
    id: "education",
    name: "EDUCATION",
    headerText: "EDUCATION AND COURSES",
    description: [],
  },
  {
    id: "fun_points",
    name: "FUN POINTS",
    headerText: "OTHER ASPECTS OF ME",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    ],
  },
  {
    id: "contact",
    name: "CONTACT",
    headerText: "WELCOME TO CONTACT ME",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    ],
  },
];

export const PERSONALITIES: {
  id: string;
  name: string;
  desc: string;
  icon: MuiIconType;
}[] = [
  {
    id: "highly_motivated",
    name: "Highly Motivated",
    desc: "Lorem ipsum dolor sit amet consectetur adipi elit. adipisicing elit.",
    icon: NoteIcon,
  },
  {
    id: "result_oriented",
    name: "Result Oriented",
    desc: "Lorem ipsum dolor sit amet consectetur adipi elit. adipisicing elit.",
    icon: NoteIcon,
  },
  {
    id: "fast_learner",
    name: "Fast Learner",
    desc: "Lorem ipsum dolor sit amet consectetur adipi elit. adipisicing elit.",
    icon: NoteIcon,
  },
  {
    id: "attention_to_details",
    name: "Attention to Details",
    desc: "Lorem ipsum dolor sit amet consectetur adipi elit. adipisicing elit.",
    icon: NoteIcon,
  },
];

export const TECH_STACKS: {
  id: string;
  name: string;
  icon: MuiIconType;
  stacks: string[];
}[] = [
  {
    id: "framework",
    name: "FRAMEWORK",
    icon: NoteIcon,
    stacks: ["React", "Next.js", "Redux", "TailwindCSS"],
  },
  {
    id: "frontend",
    name: "FRONTEND",
    icon: NoteIcon,
    stacks: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    id: "database",
    name: "DATABASE",
    icon: NoteIcon,
    stacks: ["MongoDB", "GraphQL", "MySQL"],
  },
  {
    id: "others",
    name: "OTHERS",
    icon: NoteIcon,
    stacks: ["Git", "Node.js"],
  },
];

export const CAREER_EXPERIENCES: {
  id: string;
  company: string;
  position_type: string;
  position: string;
  period: string;
  duties: string[];
}[] = [
  {
    id: "mochilabs",
    company: "MOCHI LABS, CANBERRA",
    position_type: "Internship",
    position: "Front-end Developer",
    period: "July 2023 - Oct 2023",
    duties: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Esse deserunt ad nemo natus quasi assumenda et? Repudiandae.",
      "Velit impedit obcaecati inventore doloremque consequuntur cumque atque maxime quas fugiat ducimus eveniet.",
      "Consequuntur cumque atque maxime quas fugiat ducimus eveniet.",
      "Atque maxime quas fugiat ducimus eveniet.",
    ],
  },
  {
    id: "yelpcamp",
    company: "YELPCAMP PROJECT",
    position_type: "Personal Project",
    position: "Full-stack Developer",
    period: "Sep 2022 - June 2023",
    duties: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Esse deserunt ad nemo natus quasi assumenda et? Repudiandae.",
      "Velit impedit obcaecati inventore doloremque consequuntur cumque atque maxime quas fugiat ducimus eveniet.",
      "Consequuntur cumque atque maxime quas fugiat ducimus eveniet.",
      "Atque maxime quas fugiat ducimus eveniet.",
    ],
  },
];

export const RECENT_WORK: {
  id: string;
  title: string;
  tech_stacks: string[];
  tech_stacks_desc: string;
  desc: string;
  detailed_desc: string;
}[] = [
  {
    id: "yelpcamp",
    title: "YELPCAMP",
    tech_stacks: ["React", "Node.js", "MongoDB", "Express"],
    tech_stacks_desc: "React, Node.js, MongoDB, Express (MERN)",
    desc: "A full-stack website project where users can create and review campgrounds.",
    detailed_desc:
      "A full-stack website project where users can create and review campgrounds.A full-stack website project where users can create and review campgrounds.A full-stack website project where users can create and review campgrounds.A full-stack website project where users can create and review campgrounds.",
  },
  {
    id: "newsfeed",
    title: "NEWSFEED",
    tech_stacks: ["React", "Node.js", "MongoDB", "Express"],
    tech_stacks_desc: "React, Node.js, MongoDB, Express (MERN)",
    desc: "A full-stack website project where users can create and review campgrounds.",
    detailed_desc:
      "A full-stack website project where users can create and review campgrounds.A full-stack website project where users can create and review campgrounds.A full-stack website project where users can create and review campgrounds.A full-stack website project where users can create and review campgrounds.",
  },
  {
    id: "zoombies",
    title: "ZOOMBIES",
    tech_stacks: ["React", "Node.js", "MongoDB", "Express"],
    tech_stacks_desc: "React, Node.js, MongoDB, Express (MERN)",
    desc: "A full-stack website project where users can create and review campgrounds.",
    detailed_desc:
      "A full-stack website project where users can create and review campgrounds.A full-stack website project where users can create and review campgrounds.A full-stack website project where users can create and review campgrounds.A full-stack website project where users can create and review campgrounds.",
  },
];

export const EDUCATION_DATA: { id: string; title: string; desc: string[] }[] = [
  {
    id: "bootcamp",
    title: "Bootcamp on Udemy",
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus tenetur unde officiis minima quos cupiditate mollitia quod sequi sint.",
      "Voluptatum eum, nulla illum dicta recusandae beatae nihil magnam rem!",
    ],
  },
  {
    id: "master",
    title: "master degree of accounting",
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus tenetur unde officiis minima quos cupiditate mollitia quod sequi sint.",
      "Voluptatum eum, nulla illum dicta recusandae beatae nihil magnam rem!",
    ],
  },
];

export const BLOGS: {
  id: string;
  title: string;
  headline: string;
  date: string;
  author: string;
  tag: string;
  quote: string;
  content: string[];
}[] = [
  {
    id: "01",
    title: "This is the title main title",
    headline:
      "This is the headline for the article, which is very simple but summarised.",
    date: "April 14, 2023",
    author: "Yola Liang",
    tag: "web design",
    quote:
      "Happiness is when what you think, what you say, and what you do are in harmony",
    content: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
    ],
  },
  {
    id: "02",
    title: "This is the title main title",
    headline:
      "This is the headline for the article, which is very simple but summarised.",
    date: "August 16, 2023",
    author: "Yola Liang",
    tag: "web design",
    quote:
      "Happiness is when what you think, what you say, and what you do are in harmony",
    content: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
    ],
  },
  {
    id: "03",
    title: "This is the title main title",
    headline:
      "This is the headline for the article, which is very simple but summarised.",
    date: "October 03, 2023",
    author: "Yola Liang",
    tag: "web design",
    quote:
      "Happiness is when what you think, what you say, and what you do are in harmony",
    content: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae voluptates labore facilis est aperiam repellat beatae voluptatem facere, itaque voluptas minus cum nulla nisi earum dicta, debitis ducimus impedit.",
    ],
  },
];
