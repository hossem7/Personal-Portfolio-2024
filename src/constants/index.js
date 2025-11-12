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
    title: "Junior App Developer",
    company_name: "Method CRM",
    icon: web,
    iconBg: "#000000",
    date: "Jul 2025 - Present",
    points: [
      "Implemented a real-time Timeline component in the CRM’s App Ribbon using an Event-Driven Architecture (EDA) integrated with Change Data Capture (CDC) events, enabling dynamic contact activity updates without backend polling",
      "Developed dynamic Health Score feature updated via a SQL cron job across 6,000+ accounts, visualizing historical trends and category-level insights to help users identify engagement, financial, sales, and support factors driving contact performance",
      "Enhanced platform extensibility by optimizing API compression using Base64 encoding with validation and fallback logic, refining no-code app templates, and supporting customers with tailored business solutions aligned with operational needs",
      "Managed end-to-end CRM operations including log monitoring with Logstash, Kibana, and Datadog, database migrations (ETL), Playwright test automation, and release management, while debugging RabbitMQ queues to ensure stable and reliable deployments",
      "Optimized SQL Server queries, stored procedures, and data models to improve reporting, reduce query execution times",
      "Leveraged Knowledge in React, JavaScript, C#, ASP.NET, Kafka, AWS, SQL Server, MongoDB, Elasticsearch, Redis, Kibana, Logstash, Datadog, Grafana, RabbitMQ, TFS, Jest, Playwright, Microservices, Node, Bash, PowerShell, Jira, GitHub",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Dayforce",
    icon: mobile,
    iconBg: "#000000",
    date: "Jan 2023 - Apr 2025",
    points: [
      "Spearheaded a large-scale redesign initiative covering nearly 40% of the Career Profile user interface, modernizing outdated components, refining navigation flows, and significantly enhancing usability, accessibility, and user satisfaction",
      "Designed, implemented, and optimized backend queries along with microservice-level enhancements for mentorship and career insights features, enabling seamless peer-to-peer connections, enriched access to job data, and improved responsiveness",
      "Increased unit test coverage by 80% through structured BDD/TDD adoption, while collaborating closely with QA teams to automate over half of controller and UI test cases, reducing regression risks and manual testing overhead",
      "Enhanced observability, scalability, and fault tolerance in distributed microservices by integrating .NET’s logging API with multiple third-party providers, ensuring proactive system monitoring, seamless debugging, and faster resolution of production issues",
      "Leveraged Knowledge in React, TypeScript, C#, .NET Core, Microservices, SQL Server, Jest, Playwright, Cypress, Jira, GitHub",
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
