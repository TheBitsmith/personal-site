import { InlineCode } from "@/once-ui/components";
import { title } from "process";

const person = {
  firstName: "Jacob",
  lastName: "Ogle",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.png",
  location: "America/Detroit", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/TheBitsmith",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jakeogle/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:jacobogle@proton.me",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Welcome to my personal site</>,
  subline: (
    <>
      My name is Jacob, a Software Engineer at <InlineCode>Magna International</InlineCode> specializing in building scalable and efficient data platforms. I work with Python, AWS, SQL, and a variety of data technologies to design, develop, and optimize data infrastructure that supports business intelligence and analytics.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        My name is Jacob, a Software Engineer currently specializing in building scalable and efficient data platforms. I work with Python, Rust, AWS, SQL, and a variety of data technologies to design, develop, and optimize data infrastructure that supports business intelligence and analytics.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Magna International",
        timeframe: "Jan 2022 - Present",
        role: "Software Engineer",
        achievements: [
          <>Designed, developed, and maintained ETL pipelines using Python and Microsoft SQL Server to clean, process, and integrate datasets from multiple sources.</>,
          <>Leveraged Azure SQL to store and model data in both on-premise and cloud environments, optimizing for scalability and performance.</>,
          <>Automated data workflows to ensure the timely and accurate processing of data, reducing manual intervention and improving operational efficiency by an estimated 20%.</>,
          <>Collaborated with cross-functional teams to gather requirements and transform raw data into actionable insights for Power BI dashboards, enhancing business intelligence and decision-making processes.</>,
          <>Monitored and optimized data pipelines for reliability, speed, and cost efficiency, proactively troubleshooting and resolving issues in real-time.</>,
          <>Implemented data quality checks and validation processes to ensure the accuracy and integrity of business-critical data.</>,
          <>Designed and implemented data storage solutions in cloud-based and on-premise SQL instances, improving accessibility and data security.</>
        ],
        images: [],
      },
      {
        company: "Bosch North America",
        timeframe: "July 2022 – Dec 2022",
        role: "Software Engineer Intern",
        achievements: [
          <>Led the automation of software builds for a MISRA-compliant C codebase, ensuring high-quality, secure, and standards-compliant code delivery for automotive applications.</>,
          <>Utilized Jenkins to develop and optimize CI/CD pipelines, automating the build, testing, and deployment process to ensure consistent, efficient software integration.</>,
          <>Collaborated with cross-functional teams across the United States, Australia, and Mexico to integrate CI/CD pipelines, enhancing the global development workflow and increasing release velocity.</>,
          <>Contributed to software quality assurance by implementing rigorous checks and validations to maintain MISRA compliance throughout the development lifecycle.</>,

        ],
        images: [],
      },
      {
        company: "Ford Motor Company",
        timeframe: "May 2022 – July 2022",
        role: "Software Engineer Intern",
        achievements: [
          <>Contributed to the development of next-generation vehicle architecture, focusing on the integration of vehicle diagnostics data from on-board systems to the cloud using Google Cloud Platform (GCP).</>,
          <>Utilized Google Cloud SQL to retrieve and store customer diagnostic data, enabling further analysis to drive the evolution of the vehicle architecture.</>,
          <>Documented key technical aspects of the architecture, including system requirements, design specifications, and troubleshooting procedures, to support future development and scaling.</>,
          <>Worked closely with engineers and product managers to refine technical requirements, document processes, and ensure the project aligned with long-term development goals.</>,

        ],
        images: [],
      },
      {
        company: "Bosch North America",
        timeframe: "May 2021 - May 2022",
        role: "Software Engineer Intern",
        achievements: [
          <>Developed and maintained MISRA C code for over-the-air (OTA) updates, enabling remote software management and updates within a central control gateway for automotive systems.</>,
          <>Assisted in troubleshooting and debugging C code within the OTA update framework, ensuring seamless software delivery and compatibility across automotive platforms.</>,
          <>Enhanced the software development lifecycle (SDLC) by optimizing workflows and fostering continuous integration practices within a team of engineers.</>,

        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Michigan - Ann Arbor",
        description: <>BSc - Chemistry</>,
      },
      {
        name: "Oregon State University - Post Baccalaureate Program",
        description: <>BSc - Computer Science</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>Python has been my go-to language for 5+ years. Skills range from data manipulation using Pandas, Numpy, SQLAlchemy to backend services using Flask and FastAPI.</>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "Rust",
        description: <>With an increased focus on performance and security in the software word I have been recently picking up Python. Currently my experince is focused on small utlity tools inclugind CLIs and worker jobs. I also contribute to open source Rust projects like Apache Datafusion and RobustMQ.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "SQL",
        description: <>I have been writing SQL the last few years in my current role at Magna and at Ford Motor Co. I have experience from the basics to complex quries using CTE's, partitions, etc and also have experince with query performance tuning.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Cloud Platforms",
        description: <>Experience range from utilizng Microsoft Azure for data processing and storage and AWS for personal learning.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "",
        description: <>Other Tools<hr /></>,
        images: [],
      },
      {
        title: "Java",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "JavaScript",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };
