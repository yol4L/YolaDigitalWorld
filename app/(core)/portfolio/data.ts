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
      "<b>Hi, I&apos;m Yola Liang,</b> who is passionate about creating visually appealing and user-friendly web interfaces to enhance the digital experiences of users. I aspire to stay at the forefront of emerging web technologies and design trends, collaborating with cross-functional teams to build responsive, accessible, and innovative websites and applications that not only meet but exceed user expectations.",
      "By continually honing my skills, embracing new challenges, and delivering high-quality code, I aim to contribute to the success of projects and organisations while advancing my own professional growth in the dynamic field of web development.",
    ],
  },
  {
    id: "skill",
    name: "MY SKILLS",
    headerText: "TECH STACKS I'M GOOD AT",
    description: [
      "Explore the tools and technologies that power my digital creations. From front-end to back-end, I bring together a versatile array of programming languages, frameworks, and tools to shape the web.",
    ],
  },
  {
    id: "experience",
    name: "JOURNEY",
    headerText: "CAREER EXPERIENCE",
    description: [
      "Navigate through my professional journey, from past roles to current endeavors. Learn about the experiences that have shaped my career, the challenges I've tackled, and the achievements I've made in the dynamic world of web development.",
    ],
  },
  {
    id: "project",
    name: "PROJECTS",
    headerText: "SOME OF MY RECENT WORK",
    description: [
      "Dive into a visual showcase of my work. Browse through a variety of projects I've undertaken, from web applications and websites to design concepts. ",
    ],
  },
  {
    id: "blog",
    name: "BLOG",
    headerText: "RECENT BLOGS",
    description: [
      "Discover my thoughts and insights on web development, design, and industry trends. In this section, I share knowledge, tips, and experiences. Join me in exploring the ever-evolving world of technology and design.",
    ],
  },
  {
    id: "education",
    name: "EDUCATION",
    headerText: "EDUCATION AND COURSES",
    description: [
      "Learn about my qualifications and academic journey that have honed my expertise in the field.",
    ],
  },
  {
    id: "fun_points",
    name: "FUN POINTS",
    headerText: "OTHER ASPECTS OF ME",
    description: [
      "Get to know the person behind the screen. Just a glimpse into my interests, hobbies, and other facets of my personality that make me a well-rounded and creative individual.",
    ],
  },
  {
    id: "contact",
    name: "CONTACT",
    headerText: "DROP ME A LINE",
    description: [
      "Connect with me and start a conversation to say hello or talk about opportunities.",
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
    desc: "Adept at crafting interactive and visually appealing user interfaces.",
    icon: NoteIcon,
  },
  {
    id: "result_oriented",
    name: "Result Oriented",
    desc: "Always striving for the best outcomes",
    icon: NoteIcon,
  },
  {
    id: "fast_learner",
    name: "Fast Learner",
    desc: "Continuously seeking growth in the ever-evolving field of front-end development.",
    icon: NoteIcon,
  },
  {
    id: "open_to_challenges",
    name: "Open to Challenges",
    desc: "Eager to taking on challenging projects that expand expertise and skill set.",
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
    stacks: ["Git", "Node.js", "EJS"],
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
      "Engineered a fully functional news feed feature from scratch allowing users to create, share, and interact with textual and multimedia posts.",
      "Crafted responsive, dynamic, and interactive web components using React, Next.js, TailwindCSS, and Typescript, enabling fluid and smooth user interfaces.",
      "Collaborated with the development team to seamlessly integrate GraphQL and RESTful APIs, enabling real-time updates within the news feed.",
      "Participated in code reviews to maintain code quality, consistency, and best practices.",
      "Optimised web applications for performance, achieving faster load times and smoother interactions.",
      "Authored test cases using Playwright to enhance code quality and reduce production bugs.",
      "Actively participated in an Agile development environment that followed daily stand-ups and weekly iterations, ensuring rapid and incremental project progress.",
      "Received recognition for completing high-quality and feature-rich code within the three-month internship period, showcasing effective time management and efficient project delivery.",
    ],
  },
  {
    id: "yelpcamp",
    company: "YELPCAMP PROJECT",
    position_type: "Personal Project",
    position: "Full-stack Developer",
    period: "Sep 2022 - June 2023",
    duties: [
      "Developed a full-stack web application that allows users to create and review campgrounds, leveraging Node.js, Express, MongoDB, BootStrap, and EJS templates.",
      "Implemented robust user authentication and authorisation mechanisms to ensure secure user registration and login.",
      "Created a data visualisation feature using the Google Maps API to display campground locations and enable user interactions.",
      "Utilised RESTful routing to facilitate smooth navigation and deliver a seamless user experience.",
      "Deployed the project on Heroku for live demonstration.",
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
    tech_stacks: ["Node.js", "Express", "MongoDB", "BootStrap", "EJS"],
    tech_stacks_desc: "Node.js, Express, MongoDB, BootStrap, and EJS templates",
    desc: "A full-stack website project where users can create and review campgrounds.",
    detailed_desc:
      "A full-stack website project where users can create and review campgrounds.A full-stack website project where users can create and review campgrounds.A full-stack website project where users can create and review campgrounds.A full-stack website project where users can create and review campgrounds.",
  },
  {
    id: "newsfeed",
    title: "NEWSFEED",
    tech_stacks: ["React", "Next.js", "TailwindCSS", "GraphQL"],
    tech_stacks_desc: "xxxx",
    desc: "a description a description a description",
    detailed_desc: "Description lorem  lrvsdnklfjds,cdflmkk,d",
  },
  {
    id: "zoombies",
    title: "ZOOMBIES",
    tech_stacks: ["HTML", "CSS", "JavaScript"],
    tech_stacks_desc: "HTML, CSS, JavaScript",
    desc: "asdfdasdfadf",
    detailed_desc: "adadfdfsdgfgdfsgfds description description",
  },
];

export const EDUCATION_DATA: {
  id: string;
  title: string;
  period: string;
  desc: string[];
}[] = [
  {
    id: "bootcamp",
    title: "The Web Developer Bootcamp",
    period: "2022-2023",
    desc: [
      "A comprehensive web development course covering HTML, CSS, JavaScript, React, Redux, Node.js, MySQL, and other essential technologies.",
      "Developed practical skills in creating responsive web designs, building dynamic web applications, and managing databases.",
      "Gained hands-on experience in using industry-standard tools and frameworks for effective web development.",
    ],
  },
  {
    id: "master",
    title: "The University of New South Wales",
    period: "2019-2021",
    desc: [
      "Degree awarded with Excellence (WAM:83.8/100)",
      "This academic experience in accounting has honed my analytical and problem-solving skills.",
    ],
  },
];

export interface BlogData {
  id: string;
  title: string;
  headline: string;
  date: string;
  author: string;
  tag: string;
  quote: string;
  content: string[];
}

export const BLOGS: BlogData[] = [
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
