/* import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos"; */
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Anılcan Boğa",
  initials: "AB",
  location: "Istanbul",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  about:
    "Detail-oriented Frontend Software Engineer dedicated to building high-quality products.",
  summary:
    "I graduated from Beykent University Software Engineering(EN) department in 2020, and then I graduated from Yıldız Technical University Computer Engineering department in 2022. My education life provided me with the infrastructure required by my profession. I have always been very keen when it comes to being effective and quick in a work environment and have always taken all the responsibilities required by the position with curiosity and enthusiasm. During my education, I improved myself in terms of research, self-motivation, entrepreneurship and acquiring different skills. I am trying to improve myself in my business life by learning new technologies through training and individual research.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4D03AQG_E3hNVZeT8A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699284296661?e=1731542400&v=beta&t=Vu_s5PIn3krgZYE7yv79Il3PiRHm0wA5jlxhXrLsX84",
  // personalWebsiteUrl: "",
  contact: {
    // email: "",
    // tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/anilcanboga",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anilcanboga/",
        icon: LinkedInIcon,
      },
      /*       {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      }, */
    ],
  },
  education: [
    {
      school: "Yildiz technical University",
      degree: "Master's degree, Computer Engineering",
      start: "2021",
      end: "2022",
    },
    {
      school: "Istanbul Beykent University",
      degree: "Bachelor's degree, Software Engineering",
      start: "2015",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Getmobil",
      link: "https://getmobil.com/",
      badges: ["Hybrid"],
      title: "Frontend Software Engineer",
      // logo: ConsultlyLogo,
      start: "Sep 2023",
      end: null,
      description: `(Next.js - React.js)
        Managing software development processes to create secure, fast and scalable e-commerce platforms that
        meet customers' needs.
        To make optimizations and improvements in coding and technical infrastructure, to take strategic
        measures to ensure that the website is SEO compatible.
        Establishing a Design System in Storybook for CRM and Home Page, coding reusable, testable components with Typescript.`,
    },
    {
      company: "Wingie Enuygun Group",
      link: "https://www.enuygun.com/",
      badges: ["Hybrid"],
      title: "Frontend Software Engineer",
      // logo: ParabolLogo,
      start: "Aug 2022",
      end: "Sep 2023",
      description: `(React.js - Next.js - TypeScript - Jest)
        Web and mobile responsive application front-end development with NextJS, TypeScript, RestAPI, and CSS Modules or Styled components.
        Optimization and improvements based on Google Lighthouse score. Writing testing of components using Jest and the React Testing Library. Creating reusable, testable components with Storybook / Design System. Enuygun Homepage - Next.js, styled-components, Endesign
        Transfer - React.js, Next.js, styled-components, CSS Modules, Sentry
        SuperApp - Vite.js, React.js, TypeScript, Jest *** Wingie / Enuygun Blog/Bilgi - Next.js, TypeScript`,
    },
    {
      company: "Kodzilla",
      link: "https://www.kodzillaistanbul.com/",
      badges: ["Hybrid"],
      title: "Software Engineer",
      // logo: ClevertechLogo,
      start: "Mar 2022",
      end: "Aug 2022",
      description:
        "I was in the team where Virtual Meetings were held with React technology and supported the team in architectural matters and also developed projects with Laravel.",
    },
    {
      company: "FCB Health Reaktor",
      link: "https://fcbhealthreaktor.com/",
      badges: ["Office", "Hybrid"],
      title: "Software Engineer",
      // logo: JojoMobileLogo,
      start: "Apr 2021",
      end: "May 2022",
      description: `Developed projects with Laravel, jQuery, Vue.js or React.js Converting design into pixel-perfect code on Mobile/Web.
        - All In Blockchain Turkey Project - Evenity/Amgen Project - Gilead Project - Delta Launch Meeting, Roche Diagnostics Turkey - Ekmud Webinar & Tahud Webinar - BP Vm`,
    },
    {
      company: "Assista Bilgi İşlem Danışmanlık Hizmetleri A.Ş.",
      link: "https://assista.com.tr/",
      badges: [],
      title: "Software Engineer Trainee",
      // logo: NSNLogo,
      start: "Aug 2020",
      end: "Sep 2020",
      description: `During the internship, I gained mastery of basic web technologies such as responsive web design, semantic HTML and SCSS usage. I also gained experience in developing dynamic components with React, version control with Git and working with agile methodologies.`,
    },
    {
      company: "İdea Teknoloji Çözümleri",
      link: "https://www.ideateknoloji.com.tr/",
      badges: ["Office"],
      title: "Software Engineer Trainee",
      // logo: NSNLogo,
      start: "Sep 2019",
      end: "Oct 2019",
      description: `Interface revisions of the company's applications, programs and websites, design of new products and Front-End Software (Vue.js)`,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Jest",
    "Agile Methodologies/Scrum",
    "GraphQL",
    "SEO",
    "Unit Testing",
    "Css modules/Styled component",
    "Front-end Development",
  ],
  projects: [
    {
      title: "react-kanca",
      techStack: ["React.js", "Javascript", "npm", "storybook", "esbuild"],
      description:
        "React-hook is a npm package that includes hooks that reduce complexity, making your projects more readable, manageable, and reusable.",
      // logo: ParabolLogo,
      link: {
        label: "https://www.npmjs.com/package/react-kanca",
        href: "https://www.npmjs.com/package/react-kanca",
      },
    },
    {
      title: "Cemevi",
      techStack: ["React.js", "React-Bootstrap", "React-Map-GL", "Vercel"],
      description:
        "Mobile application where users can see the nearest Cemevi according to their location.",
      // logo: EvercastLogo,
      link: {
        label: "https://www.cemevi.io/download",
        href: "https://www.cemevi.io/download",
      },
    },
    {
      title: "Enuygun Homepage",
      techStack: [
        "Next.js",
        "GraphQL",
        "styled-components",
        "Endesign Design System",
      ],
      description:
        "Enuygun is a platform that helps you find the most suitable options by comparing prices for flight tickets, hotel reservations, car rentals and other services.",
      // logo: ConsultlyLogo,
      link: {
        label: "https://www.enuygun.com/",
        href: "https://www.enuygun.com/",
      },
    },
    {
      title: "Getmobil Pandora",
      techStack: ["Next.js", "React.js", "Mantine", "SCSS"],
      description:
        "The e-commerce site that trades refurbished devices offers reliable and affordable electronic products. Customers can easily buy and sell tested devices.",
      // logo: MonitoLogo,
      link: {
        label: "https://getmobil.com/",
        href: "https://getmobil.com/",
      },
    },
    {
      title: "Transfer",
      techStack: [
        "React.js",
        "Next.js",
        "TypeScript",
        "styled-components",
        "CSS Modules",
        "Sentry",
      ],
      description:
        "We make airport transfers comfortable and fast with reservations made through Enuygun. We ensure that you complete your journey stress-free with private vehicles.",
      // logo: JarockiMeLogo,
      link: {
        label: "https://www.enuygun.com/transfer/",
        href: "https://www.enuygun.com/transfer/",
      },
    },
    {
      title: "CRM Odin",
      techStack: ["React.js", "MUI", "SCSS"],
      description:
        "CRM (Customer Relationship Management) software helps businesses manage customer interactions, collect and analyse customer data. This makes it easier to develop strategies to increase sales, improve customer satisfaction and strengthen customer relationships.",
      // logo: Minimal,
      link: {
        label: "https://crm.getmobil.com/",
        href: "https://crm.getmobil.com/",
      },
    },
    {
      title: "SuperApp",
      techStack: ["Vite.js", "React.js", "TypeScript", "Jest"],
      description:
        "Superapp offers various services such as messaging, social media, finance and shopping on a single platform. Users can meet all their needs through this application without switching between different applications.",
      // logo: BarepapersLogo,
      /* link: {
        label: "",
        href: "",
      }, */
    },
    {
      title: "Wingie - Enuygun Blog/Bilgi",
      techStack: ["React.js", "Next.js", "TypeScript"],
      description:
        "A blog site where trending and most popular travel articles and lists are published.",
      // logo: YearProgressLogo,
      link: {
        label: "https://www.enuygun.com/bilgi/",
        href: "https://www.enuygun.com/bilgi/",
      },
    },
    {
      title: "Endesign",
      techStack: ["React.js", "TypeScript", "Jest", "webpack"],
      description:
        "This project aims to develop a comprehensive Design System to create consistent and user-friendly interfaces across all platforms. It aims to speed up the design and development processes by setting standards such as color palettes, typography and UI components.",
      // logo: YearProgressLogo,
      /*      link: {
        label: "",
        href: "",
      }, */
    },
    {
      title: "Gilead Project",
      techStack: ["Laravel", "Vue.js", "HTML5", "CSS3", "Bootstrap4", "Docker"],
      description: "VM",
      // logo: MobileVikingsLogo,
      /* link: {
        label: "",
        href: "",
      }, */
    },
    {
      title: "Evenity/Amgen project",
      techStack: ["Laravel", "HTML5", "CSS3", "Bootstrap4", "jQuery", "Docker"],
      description: "VM",
      // logo: Howdy,
      /*       link: {
        label: "",
        href: "",
      }, */
    },
    {
      title: "All in blockchain Turkey project",
      techStack: ["Laravel", "HTML5", "CSS3", "Bootstrap4", "jQuery", "Docker"],
      description:
        "It is a project that will take place simultaneously in two separate virtual halls, with all questions in mind about blockchain technology and cryptocurrencies interactively. Blockchain and Cryptocurrency conference.",
      // logo: TastyCloudLogo,
      /* link: {
        label: "",
        href: "",
      }, */
    },
  ],
  certifications: [
    "Hepsiburada JSKonf2024",

    "Next.js Conf 2023",

    "React & Redux - Sololearn",

    "React.js - Coderspace",

    "Java 101 - 201 - 301 - Turkcell Geleceği Yazanlar",

    "Big Data Academy - GTech",

    "Web Programming 101 - 201 - 301 - 302 - Turkcell Geleceği Yazanlar",

    "Programming Education - Istanbul Business Institute",

    "Digital Marketing School - Blockchain and Coding Education -TEB",

    "Yükselen Teknoloji 19",

    "E-Commerce Expertise Program - IdeaSoft",
  ],
} as const;
