import {
  BlogData,
  MuiIconType,
  PersonalInfoItem,
  SectionContentItem,
} from "@/app/types";
import { blocks01, blocks02, blocks03 } from "./(core)/blog/data";

// Import smaller components
import ContactMeView from "./(core)/contact/contact";
import BlogsView from "./(core)/portfolio/sectionViews/blogs";
import CareerExperienceView from "./(core)/portfolio/sectionViews/careerExperience";
import EducationView from "./(core)/portfolio/sectionViews/education";
import FunFactView from "./(core)/portfolio/sectionViews/funFacts";
import PersonalityView from "./(core)/portfolio/sectionViews/personality";
import ProjectsView from "./(core)/portfolio/sectionViews/projects";
import TechStacksView from "./(core)/portfolio/sectionViews/techStacks";

// Import icons
import {
  InsightsOutlined,
  EmojiEventsOutlined,
  LightbulbOutlined,
  LeaderboardOutlined,
  AssessmentOutlined,
  AdsClickOutlined,
  AllInclusiveOutlined,
  ScatterPlotOutlined,
  AlternateEmailOutlined,
  PhoneOutlined,
  LocationOnOutlined,
  ArrowBackOutlined,
  LinkedIn,
  AttachFileOutlined,
  PersonOutlineOutlined,
  ArchitectureOutlined,
  ScienceOutlined,
  AccountTreeOutlined,
  EmojiObjectsOutlined,
  SchoolOutlined,
  InterestsOutlined,
  CallOutlined,
} from "@mui/icons-material";

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

export const SIDE_MENU_ITEMS: {
  id: string;
  name: string;
  path: string;
  icon: MuiIconType;
}[] = [
  {
    id: "about",
    name: "about",
    path: "#about",
    icon: PersonOutlineOutlined,
  },
  {
    id: "skill",
    name: "skill",
    path: "#skill",
    icon: ArchitectureOutlined,
  },
  {
    id: "experience",
    name: "experience",
    path: "#experience",
    icon: ScienceOutlined,
  },
  {
    id: "project",
    name: "project",
    path: "#project",
    icon: AccountTreeOutlined,
  },
  { id: "blog", name: "blog", path: "#blog", icon: EmojiObjectsOutlined },
  {
    id: "education",
    name: "education",
    path: "#education",
    icon: SchoolOutlined,
  },
  {
    id: "fun_points",
    name: "fun points",
    path: "#fun_points",
    icon: InterestsOutlined,
  },
  { id: "contact", name: "contact", path: "#contact", icon: CallOutlined },
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
    icon: InsightsOutlined,
  },
  {
    id: "result_oriented",
    name: "Result Oriented",
    desc: "Always striving for the best outcomes",
    icon: EmojiEventsOutlined,
  },
  {
    id: "fast_learner",
    name: "Fast Learner",
    desc: "Continuously seeking growth in the ever-evolving field of front-end development.",
    icon: LightbulbOutlined,
  },
  {
    id: "open_to_challenges",
    name: "Open to Challenges",
    desc: "Eager to taking on challenging projects that expand expertise and skill set.",
    icon: LeaderboardOutlined,
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
    icon: AssessmentOutlined,
    stacks: ["React", "Next.js", "Redux", "TailwindCSS"],
  },
  {
    id: "frontend",
    name: "FRONTEND",
    icon: AdsClickOutlined,
    stacks: ["HTML", "CSS", "JavaScript", "TypeScript", "EJS"],
  },
  {
    id: "database",
    name: "DATABASE",
    icon: AllInclusiveOutlined,
    stacks: ["MongoDB", "GraphQL", "MySQL"],
  },
  {
    id: "others",
    name: "OTHERS",
    icon: ScatterPlotOutlined,
    stacks: ["Git", "CI/CD", "Docker", "Node.js", "CMS-Drupal"],
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
  coverUrl: string;
  linkRef: string;
}[] = [
  {
    id: "yelpcamp",
    title: "YELPCAMP",
    tech_stacks: ["Node.js", "Express", "MongoDB", "BootStrap", "EJS"],
    tech_stacks_desc: "Node.js, Express, MongoDB, BootStrap, and EJS templates",
    desc: "A full-stack website project where users can create and review campgrounds.",
    detailed_desc:
      "A full-stack website project where users can create and review campgrounds using Node.js, Express, MongoDB, BootStrap, and EJS templates. Also implemented user authentication and authorization for secure user registration and login here. Developed a data visualization feature using Google Maps API to display campground locations and enable user interactions.",
    coverUrl: "/images/projects/yelpCamp.jpg",
    linkRef: "http://www.yelpcamp.com.au/",
  },
  {
    id: "newsfeed",
    title: "Newsfeed",
    tech_stacks: ["React", "Next.js", "TailwindCSS", "TypeScript", "GraphQL"],
    tech_stacks_desc: "React, Next.js, TailwindCSS, TypeScript and GraphQL",
    desc: "A fully functional newsfeed feature allowing users to create, share, and interact with posts.",
    detailed_desc:
      "This is what I have done in my previous internship. I engineered a fully functional news feed feature from scratch allowing users to create, share, and interact with textual and multimedia posts. Also collaborated with the development team to seamlessly integrate GraphQL and RESTful APIs, enabling real-time updates within the news feed.",
    coverUrl: "/images/projects/newsFeed.jpg",
    linkRef: "",
  },
  {
    id: "portfolio",
    title: "Yola's World",
    tech_stacks: ["Next.js", "React", "TailwindCSS", "TypeScript", "Node.js"],
    tech_stacks_desc: "React, Next.js, TailwindCSS, TypeScript and Node.js",
    desc: "A dynamic and responsive personal portfolio website.",
    detailed_desc: `This is the website that you are currently watching. I conceptualized, designed, and developed this dynamic and responsive personal portfolio website using cutting-edge technologies like React, Next.js, TailwindCSS, and TypeScript. Also enhanced user experience and accessibility with the implementation of a Dark Mode feature.`,
    coverUrl: "/images/projects/portfolio-dark.jpg",
    linkRef: "/",
  },
];

export const BLOGS: BlogData[] = [
  {
    id: "the-art-of-motion",
    title: "The Art of Motion: Mastering Ease and Cubic-Bezier in CSS",
    headline:
      "In web design, the secret to animating websites with flair hinges on skillfully using timing functions to fine-tune the pace of CSS animations.",
    date: "Nov 10, 2023",
    author: "Yola Liang",
    tag: "css",
    cover: "/images/blogs/cover/cover03.jpg",
    quote: "",
    contents: blocks03,
  },
  {
    id: "the-power-of-map-and-reduce",
    title: "Harnessing the Power of map() and reduce() in JavaScript",
    headline:
      "JavaScript's array methods are not just tools but craftsman's essentials in data manipulation and transformation.",
    date: "Oct 30, 2023",
    author: "Yola Liang",
    tag: "javascript",
    cover: "/images/blogs/cover/cover02.jpg",
    quote: "",
    contents: blocks02,
  },
  {
    id: "mastering-scroll-client-and-offset",
    title: "Mastering Scroll, Client, and Offset in CSS: A Developer's Guide",
    headline:
      "Understanding the nuances of scroll, client, and offset properties in CSS can make a world of difference in the user experience.",
    date: "Oct 14, 2023",
    author: "Yola Liang",
    tag: "web design",
    cover: "/images/blogs/cover/cover01.jpg",
    quote: "",
    contents: blocks01,
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

export const FUN_FACTS: {
  id: string;
  keyword: string;
  description: string;
  bgUrl: string;
}[] = [
  {
    id: "cat",
    keyword: "Cat Whisperer",
    description: "Deciphering purrs, I'm the ultimate feline communicator.",
    bgUrl: "/images/funfacts/cat.jpg",
  },
  {
    id: "road",
    keyword: "Road Voyager",
    description: "Charting new paths with tunes and tales on every journey.",
    bgUrl: "/images/funfacts/roadtrip.jpg",
  },
  {
    id: "camping",
    keyword: "Star Gazer",
    description:
      "Seeking stars, I find magic in the night sky's sparkling dance.",
    bgUrl: "/images/funfacts/star.jpg",
  },
  {
    id: "sunset",
    keyword: "Sunset Chaser",
    description:
      "Chasing sunsets, I collect vibrant skylines as treasured dusk memories.",
    bgUrl: "/images/funfacts/sunset.jpg",
  },
];

export const PERSONAL_INFO_ITEMS: PersonalInfoItem[] = [
  {
    id: "email",
    name: "Email address",
    icon: AlternateEmailOutlined,
    details: "yola.liang.direct@gmail.com",
  },
  {
    id: "address",
    name: "address",
    icon: LocationOnOutlined,
    details: "BELCONNEN ACT 2617",
  },
  {
    id: "phone",
    name: "phone number",
    icon: PhoneOutlined,
    details: "+61 0473042891",
  },
];

export const ELSE_ITEMS: {
  id: string;
  icon: MuiIconType;
  path: string;
  info: string;
  isDownloadable: boolean;
}[] = [
  {
    id: "resume",
    icon: AttachFileOutlined,
    path: "/Resume_Yola Liang.pdf",
    info: "Download my resume",
    isDownloadable: true,
  },
  {
    id: "linkedin",
    icon: LinkedIn,
    path: "https://www.linkedin.com/in/yola-liang/",
    info: "View my portfolio on LinkedIn",
    isDownloadable: false,
  },
  {
    id: "back_home",
    icon: ArrowBackOutlined,
    path: "/",
    info: "Back to Home Page",
    isDownloadable: false,
  },
];

export const SECTION_CONTENTS: SectionContentItem[] = [
  {
    type: "section",
    id: "about",
    title: "ABOUT ME",
    headerText: "WHO AM I",
    description: [
      "<b>Hi, I&apos;m Yola Liang,</b> who is passionate about creating visually appealing and user-friendly web interfaces to enhance the digital experiences of users. I aspire to stay at the forefront of emerging web technologies and design trends, collaborating with cross-functional teams to build responsive, accessible, and innovative websites and applications that not only meet but exceed user expectations.",
      "By continually honing my skills, embracing new challenges, and delivering high-quality code, I aim to contribute to the success of projects and organisations while advancing my own professional growth in the dynamic field of web development.",
    ],
    relatedComponent: PersonalityView,
  },
  {
    type: "quote",
    id: "quote1",
    text: `I'm absolutely enthralled by the world of code - it's truly exhilarating!`,
    bgUrl: "/images/bg-1.jpg",
  },
  {
    type: "section",
    id: "skill",
    title: "MY SKILLS",
    headerText: "TECH STACKS I'M GOOD AT",
    description: [
      "Explore the tools and technologies that power my digital creations. From front-end to back-end, I bring together a versatile array of programming languages, frameworks, and tools to shape the web.",
    ],
    relatedComponent: TechStacksView,
  },
  {
    type: "section",
    id: "experience",
    title: "JOURNEY",
    headerText: "CAREER EXPERIENCE",
    description: [
      "Navigate through my professional journey, from past roles to current endeavors. Learn about the experiences that have shaped my career, the challenges I've tackled, and the achievements I've made in the dynamic world of web development.",
    ],
    relatedComponent: CareerExperienceView,
  },
  {
    type: "section",
    id: "project",
    title: "PROJECTS",
    headerText: "SOME OF MY RECENT WORK",
    description: [
      "Dive into a visual showcase of my work. Browse through a variety of projects I've undertaken, from web applications and websites to design concepts. ",
    ],
    relatedComponent: ProjectsView,
  },
  {
    type: "quote",
    id: "quote2",
    text: `Keep coding, keep reflecting. <br />
    The journey is as thrilling as the destination!`,
    bgUrl: "/images/bg-1.jpg",
  },
  {
    type: "section",
    id: "blog",
    title: "BLOG",
    headerText: "RECENT BLOGS",
    description: [
      "Discover my thoughts and insights on web development, design, and industry trends. In this section, I share knowledge, tips, and experiences. Join me in exploring the ever-evolving world of technology and design.",
    ],
    relatedComponent: BlogsView,
  },
  {
    type: "section",
    id: "education",
    title: "EDUCATION",
    headerText: "EDUCATION AND COURSES",
    description: [
      "Learn about my qualifications and academic journey that have honed my expertise in the field.",
    ],
    relatedComponent: EducationView,
  },
  {
    type: "section",
    id: "fun_points",
    title: "FUN POINTS",
    headerText: "OTHER ASPECTS OF ME",
    description: [
      "Get to know me behind the screen. Just a glimpse into my interests, hobbies, and other facets of my personality that make me a well-rounded and creative individual.",
    ],
    relatedComponent: FunFactView,
  },
  {
    type: "section",
    id: "contact",
    title: "CONTACT",
    headerText: "DROP ME A LINE",
    description: [
      "Connect with me and start a conversation to say hello or talk about opportunities.",
    ],
    relatedComponent: ContactMeView,
  },
];

export const CAROUSEL_CONTENTS: { url: string; description: string }[] = [
  {
    url: "/images/projects/news_feed_demo/01_text_post.gif",
    description: "Implements a streamlined posting feature in news feed.",
  },
  {
    url: "/images/projects/news_feed_demo/02_vote_and_edit.gif",
    description:
      "Incorporates an effective voting and content editing mechanism.",
  },
  {
    url: "/images/projects/news_feed_demo/03_hierarchical_structured_comments.gif",
    description: "Adopts a hierarchical structure for comments.",
  },
  {
    url: "/images/projects/news_feed_demo/04_comments_vote_edit_delete.gif",
    description: "Integrates comment options to vote, edit, and delete",
  },
  {
    url: "/images/projects/news_feed_demo/05_copy_link_to_share.gif",
    description: "Employs an easy-to-use link copying for sharing",
  },
  {
    url: "/images/projects/news_feed_demo/06_media_post.gif",
    description: "Enables intuitive media uploads with Base64.",
  },
  {
    url: "/images/projects/news_feed_demo/07_drag_and_drop.gif",
    description: "Introduces user-friendly drag-and-drop interfaces.",
  },
];
