import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Electrical Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Dayforce",
    icon: web,
    iconBg: "#000000",
    date: "Jan 2024 - Present",
    points: [
      "Optimized the email notification query using SQL, enabling the option for users to select between business and personal email preferences, while also implementing an opt-out feature, thereby enhancing the flexibility and customization",
      "Utilizing a microfrontend architecture using React and TypeScript for the frontend development, while employing C# for both backend monolith and microservice code, ensuring a robust and scalable system",
      "Collaborating with a cross-functional team of developers, QAs, PMs, and designers to design and develop new UI features and backend enhancements while addressing bugs within the Dayforce application",
      "Leveraged Knowledge in Microservices, React, TypeScript, C#, GitHub, Playwright, SQL Server, Jira, Azure DevOps"
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Ceridian",
    icon: mobile,
    iconBg: "#000000",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Developed and implemented Community Insights’ backend logic under Career Explorer, showcasing peers with growth career plans, active development plans and skill enhancement plans, leveraging development plans microservice and a MongoDB cluster",
      "Integrated the Job Insights section within the Opportunity Details page, seamlessly showcasing Community Insights, pay grade data, hiring manager details, and salary information to provide users with a comprehensive and enriched job search experience",
      "Enhanced stack tracing in microservice code by leveraging .NET's versatile logging API, enabling seamless integration with an extensive array of native and third-party logging providers",
      "Leveraged Knowledge in React, TypeScript, Microservices, C#, SQL Server, MongoDB, Azure DevOps, PowerShell, Cypress",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Bentley Systems",
    icon: backend,
    iconBg: "#000000",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Collaborated with an Agile team to develop new features and address bugs in Bentley's APM Mobile Inspections application, leveraging a shared C# codebase through the cross-platform framework Xamarin.Forms on both Android and iOS platforms",
      "Achieved a 96% reduction in logout time by optimizing the app's authentication performance, eliminating recursive calls to DB",
      "mplemented a favoriting feature in response to client requests, resulting in a 20% month-over-month increase in app usage time",
      "Streamlined the release process by migrating the Android and iOS release pipeline to a release services pipeline by setting up artifact pre-requisites, ensuring completion of all stages before deploying to the Google Play and Apple App Store",
      "Leveraged Knowledge in Xamarin.Forms, C#, Azure DevOps, CI/CD Pipelines, VS App Center, PowerShell, SQL Server"
    ],
  },
  {
    title: "Quality Engineering Co-op",
    company_name: "TD Bank",
    icon: creator,
    iconBg: "#000000",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Automated 80% of test cases using Selenium and Java Rest Assured frameworks, increasing efficiency, and reducing manual effort",
      "Created, executed, and documented comprehensive test cases with precision using Test Management tools such as Jira/JTMF",
      "Conducted API testing utilizing tools like Postman and SOATest to validate endpoint responses and ensure seamless integration",
      "Implemented automated test execution through continuous integration platforms like Jenkins, BitBucket, and Git, streamlining the testing process and enabling faster feedback loops",
      "Leveraged Knowledge in Jira/JTMF, Java, Rest Assured, Postman, Selenium, SOATest, Jenkins, BitBucket, Cucumber"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
