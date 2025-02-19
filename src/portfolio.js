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
  username: "Itumeleng Malemela",
  title: "Hi all, I'm Itumeleng",
  subTitle: emoji(
"A passionate Software Engineer 🚀 with experience in developing scalable Web applications, Microservices, and integrating APIs. Skilled in JavaScript, React.js, Node.js, and other cool modern technologies to build high-performance systems."  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/itumeleng96",
  linkedin: "https://www.linkedin.com/in/itumeleng-47b0a1157/",
  gmail: "ijmalemela01@gmail.com",
  medium: "https://medium.com/@ijmalemela01",
  stackoverflow: "https://stackoverflow.com/users/15381458/itumeleng-malemela",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ADHD-Fueled Full-Stack Developer | Chasing Tech Stacks & Mastering Deployments",
  skills: [
    emoji(
      "⚡ Develop Front end and Back end interfaces for web applications"
    ),
    emoji("⚡ API integrations, Microservices, Databases and Testing Pipelines"),
    emoji("⚡ Developing Health Applications and API's using FHIR standard"),
    emoji("⚡ Digital Signal Processing with Matlab for Radar Engineering"),

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "postgresql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "FHIR Standard",
      "fontAwesomeClassname": "fas fa-file-medical"
    },
    {
      skillName: "Digital Signal Processing",
      "fontAwesomeClassname": "fas fa-wave-square"
    },
    {
      skillName: "MATLAB",
      "fontAwesomeClassname": "fas fa-square-root-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Univeristy of Cape Town",
      logo: require("./assets/images/UCT.jpg"),
      subHeader: "Master of Science in Engineering (Electrical and Computer Eng)",
      duration: " February 2021 - February 2025",
      desc: "Design and Implementation of Tracking filters for a Passive Radar System",
      descBullets: [
        "Development of Tracking Filters in Matlab",
        "Dissertation on the Design and Implementation of Tracking filters for PR system"
      ]
    },
    {
      schoolName: "University of Cape Town",
      logo: require("./assets/images/UCT.jpg"),
      subHeader: "Bachelor of Science in Engineering (Electrical and Computer Eng)",
      duration: "January 2016 - December 2020",
      desc: "Graduated with Honours with a GPA of 73,5. Took courses about Software Engineering, Machine Learning, Embedded Systems, Electronics ...",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Electrical Engineering",
      progressPercentage: "60%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Council for Scientific and Industrial Research",
      companylogo: require("./assets/images/csir.jpeg"),
      date: "Feb 2023 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Junior Software Engineer",
      company: "Council for Scientific and Industrial Research",
      companylogo: require("./assets/images/csir.jpeg"),
      date: "Mar 2021 – Feb 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Vacation Work Student",
      company: "Council for Scientific and Industrial Research",
      companylogo: require("./assets/images/csir.jpeg"),
      date: "Dec 2018 – Jan 2019",
      desc: "Software design and development of a Peer Review System Using React JS, NODE JS and Postgresql Database. Development of software for Smart Truck Pilot project for providing information and analyzing Smart Trucks Data using Python Django Framework and Postgresql Database."
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
  title: "Projects",
  subtitle: "Some of the projects that I have worked on.",
  projects: [
    {
      image: require("./assets/images/smartFarmHub.png"),
      projectName: "Low Cost Smart Farm Hub",
      projectDesc: "A Python Library for a Smart Farm Gateway used for implementing a Zigbee Wireless Network.The Repository also contains Cloud Based Docker images for server applications for the smart farm hub.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://https://lowcostsmartfarmhub.readthedocs.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/PR3.jpg"),
      projectName: "Tracking Filters for a FM PR system",
      projectDesc: "Design and Implementation of Tracking filter algorithms for a FM Passive Radar System",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/itumeleng96/FM-PR-TrackingFilters/"
        }
      ]
    },
    {
      image: require("./assets/images/HPRS.jpg"),
      projectName: "Health Patient Record System",
      projectDesc: "Involved in design and development of a HPRS system that is used to record patient data accross SA Health Facilities",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/itumeleng96/FM-PR-TrackingFilters/"
        }
      ]
    },
    {
      image: require("./assets/images/evds.png"),
      projectName: "Electronic Vaccination Data System",
      projectDesc: "Involved in the development of EVDS, which was an initiative of the NDOH and the CSIR and responsible for capturing over a million vaccinations per day",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/itumeleng96/FM-PR-TrackingFilters/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+27-0000000000",
  email_address: "ijmalemela01@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
