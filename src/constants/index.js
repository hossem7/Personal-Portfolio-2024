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
  csharp
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
    title: "QA/Automation",
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
    name: "C#",
    icon: csharp,
  },
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
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Dayforce",
    icon: web,
    iconBg: "#000000",
    date: "Jan 2024 - Present",
    points: [
      "Led and managed comprehensive redesign initiative for approximately 40% of Career Profile section’s user interface within the Dayforce application, overseeing all aspects of the modernization process to enhance visual appeal and user experience",
      "Designed key pages and optimized backend queries and enhancements for the Career Explorer Mentorship project, enabling users to connect with peer mentors of higher proficiency in shared skills for enhanced learning and knowledge sharing",
      "Increased unit test coverage for the Career Explorer project by 80% improving overall code quality and reliability, while utilizing SonarQube to ensure continuous code analysis, adherence to coding standards, and reduction of technical debt",
      "Automated 50% of controller and UI test cases using BDD and TDD principles in multiple projects, while collaborating with QA teams to write, refine, and optimize test cases, ensuring comprehensive coverage and improved clarity in test execution",
      "Leveraged Knowledge in React, TypeScript, C#, Microservices, SQL Server, Jest, Playwright, Cypress, Jira, GitHub, SonarQube"
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
      "Automated 80% of test cases, utilizing Selenium WebDriver for UI testing and Java Rest Assured for API testing, which significantly improved test efficiency, reduced manual effort, and enhanced overall test coverage",
      "Created, executed and documented detailed test cases in Jira and JTMF, ensuring effective tracking and execution",
      "Performed manual API testing with Postman and SOATest to validate endpoint responses and ensure seamless integration",
      "Implemented automated test execution through continuous integration platforms like Jenkins, BitBucket, and Git, streamlining the testing process and enabling faster feedback loops",
      "Leveraged Knowledge in Jira, Java, RestAssured, Postman, Selenium WebDriver, BDD, Jenkins, Bitbucket, Cucumber"
    ],
  },
];

const projects = [
  {
    name: "Name 1",
    description:
      "Description 1",
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
];

export { services, technologies, experiences, projects };
