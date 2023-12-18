/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abdeldjalil",
  title: "Hi all, I'm Jalil",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building centralized and blockchain web applications with ReactJS, Django, and Solidity and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12c6-dAxzMghQRW8TIdB4_OG-rVTUGtEG/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jalilbm",
  linkedin: "https://www.linkedin.com/in/jalilbm/",
  gmail: "abdeldjalil.benharkat@gmail.com",
  facebook: "https://www.facebook.com/jalilbm10/",
  medium: "https://medium.com/@jalilbm",
  stackoverflow: "https://stackoverflow.com/users/11465017/jalil",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER WHO IS VERY PASSIONATE ABOUT DJANGO & REACT AND BLOCKCHAIN DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Build robust backend solutions with Django, enhancing web app functionality and scalability"
    ),
    emoji(
      "⚡ Develop Smart Contracts and implement blockchain technology to secure and decentralize data transactions"
    ),
    emoji(
      "⚡ Automate and streamline web processes through advanced web scraping techniques"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "solidity",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "blockchain",
      fontAwesomeClassname: "fab fa-hive"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "heroku",
      fontAwesomeClassname: "fab fa-hire-a-helper"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Higher School of Computer Science",
      logo: require("./assets/images/esi_sba.png"),
      subHeader: "2 years of Computer Science",
      duration: "September 2015 - June 2017",
      desc: "Studied the fundamentals of Mathematics, Programming and Algorithms, Electronics"
    },
    {
      schoolName: "HSE Moscow",
      logo: require("./assets/images/hse.png"),
      subHeader: "2 years of Software Engineering",
      duration: "September 2017 - June 2019",
      desc: "Got free scholarship. Took courses about Software Engineering, Web Development, Operating Systems, ..."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development (React: JS, TS)", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development (Django: Python)",
      progressPercentage: "100%"
    },
    {
      Stack:
        "Blockchain and Smart Contract Development (Ethers.js, Web3.py, Solidity)",
      progressPercentage: "80%"
    },
    {
      Stack:
        "Web Scraping & Web Automation (Python, Scrapy, Selenium, Proxies...etc)",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Blockchain Developer",
      company: "The Rare Age",
      companylogo: require("./assets/images/therareage_logo.png"),
      date: "December 2021 – Present",
      desc: "At The Rare Age, I've been diving deep into Django, ReactJS, and blockchain development. Here are three unique projects I took charge of:",
      descBullets: [
        "Innovative NFT Fractionalization Platform (The Rare Bits)",
        "Crypto Crowdfunding Solution (Rare FND)",
        "Art Auctioning Platform (The Rare Antiquities)"
      ]
    },
    {
      role: "Front-End Developer",
      company: "TAOQ Researches",
      companylogo: require("./assets/images/TAOQ.jpeg"),
      date: "August 2021 – December 2021",
      desc: "I worked as Data Engineer at TAOQ Researches, in which I was in charge of the data engineering and the coordination with the web development team, and I built:",
      descBullets: [
        "NewsWebsite Scraping System (the system scraps 1000s of new websites daily)",
        "Free Translation System (API free translation system)"
      ]
    },
    {
      role: "Freelancer",
      company: "Freelancer",
      companylogo: require("./assets/images/freelancer_logo.png"),
      date: "Apr 2019 – Present",
      desc: "Proudly ranked within the TOP 2% of Python Developers on the world's leading freelance platform, Freelancer.com, where I delivered 10s of projects all with 5 stars reviews"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Contributor in most used Django/React boilerplate project",
      subtitle:
        "Contributed to a Django/React boilerplate project repository that is used by 1000s of developers",
      image: require("./assets/images/github_logo.png"),
      imageAlt: "Github contributors",
      footerLink: [
        {
          name: "Contributors List",
          url: "https://github.com/vintasoftware/django-react-boilerplate/graphs/contributors"
        }
      ]
    },
    {
      title: "Top 2% Python Developers on Freelancer Platform",
      subtitle:
        "I'm ranked in Top 2% Python developers in Freelancer platform where I delivered multiple projects",
      image: require("./assets/images/freelancer_logo.png"),
      imageAlt: "Freelancer Profile",
      footerLink: [
        {
          name: "Freelancer Profile",
          url: "https://www.freelancer.com/u/jalilbm"
        }
      ]
    },

    {
      title: "Blockchain Specialization",
      subtitle:
        "Completed an in-depth specialization, comprising multiple courses, that delves into the intricacies of blockchain technology.",
      image: require("./assets/images/coursera_logo.png"),
      imageAlt: "coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/TCTAHNMSX84B"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
