/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Advaita Saha",
  title: "Hi all, I'm Advaita",
  subTitle: emoji(
    "Blockchain Developer 👨‍💻 | Flutter Developer 🤖 | ML Enthusiast ✍️ "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1T2o-pz61EROzd_y9TpX8ZXa0e0c-b7cN/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/advaita-saha",
  linkedin: "https://www.linkedin.com/in/advaita-saha",
  gmail: "saha.advaita@gmail.com",
  //facebook: "https://www.facebook.com/bharat.kammakatla",
  twitter: "https://twitter.com/Advaita_Saha",
};

// Your Skills Section

const skillsSection = {
  title: "What i do ?",
  subTitle:
    "Building Products for the Metaverse | Bringing the power of blockchain in the palm of your hands",
  skills: [
    emoji(
      "⚡ Designing & Writing Smart-Contracts for blockchain networks along with extensive tests"
    ),
    emoji("⚡ End to End Smart-Contract Deployement and intereactive Dapps with them"),
    emoji(
      "⚡ Using Flutter to create cross platform mobile applications along with integration of blockchain networks"
    ),
    emoji(
      "⚡ Working on implementation of Machine Learning models in proper use-cases"
    ),
  ],

  softwareSkills: [
    {
      skillName: "python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Ethereum",
      classname: "logos:ethereum",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Solidity",
      classname: "logos:solidity",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "GitHub",
      classname: "simple-icons:github",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Flutter",
      classname: "logos:flutter",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "tensorflow",
      classname: "logos-tensorflow",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "keras",
      classname: "simple-icons:keras",
      style: {
        backgroundColor: "white",
        color: "#D00000",
      },
    },
    {
      skillName: "Django",
      classname: "simple-icons:django",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fellowship ( SDF 2 )",
      company: "StatesDAO",
      companylogo: require("./assets/images/sdlogo.jpeg"),
      date: "July 2022 – Present",
      desc:
        "I will be completing their fellowship program for 3-months, working on cutting edge DeFi, DID and NFT protocols for different blockchain networks.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ],
    },
    {
      role: "Blockchain Developer Intern",
      company: "Dwarf AI",
      companylogo: require("./assets/images/1628187592207.jpeg"),
      date: "May 2022 – Present",
      // desc:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developing the smart-contract in factory pattern for their fantasy gaming app",
        "Writing tests for their smart-contract",
        "Integrating smart-contract with their app",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "NFT Masterclass",
      subtitle: "- Udemy",
      logo_path: "nft.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-e9655db1-db67-4627-9cb1-3d72e8d7dc37/",
      alt_name: "NFT Masterclass",
      color_code: "#81ceff",
    },
    {
      title: "Solidity Masterclass",
      subtitle: "- Codedamn",
      logo_path: "solidity.png",
      certificate_link:
        "https://codedamn.com/certificate/verify/bb11160814399eba51a17d4ada95f1387c2adb82",
      alt_name: "Solidity Masterclass",
      color_code: "#F0FFDD",
    },
    {
      title: "Google Play Store Listing Certificate",
      subtitle: "- Google",
      logo_path: "play.png",
      certificate_link:
        "https://www.credential.net/e3c71c8c-28c1-4300-8183-8b8c7a06145c",
      alt_name: "Google Play Store Listing Certificate",
      color_code: "#FEF6E6",
    },
    {
      title: "Tensorflow Developer Specialization",
      subtitle: "- Deeplearning.AI",
      logo_path: "dl.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/8V3Z2WN3WA6G",
      alt_name: "Tensorflow Developer Specialization",
      color_code: "#FDE9EA",
    },
    {
      title: "Smart-Contracts Masterclass",
      subtitle: "- Udemy",
      logo_path: "udm.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-a3b55b6e-070f-4286-a56e-7a36b9d28f59/",
      alt_name: "Smart-Contracts Masterclass",
      color_code: "#E3F1FA",
    },
    {
      title: "Convolutional Neural Networks in Python",
      subtitle: "- YouAccel",
      logo_path: "ya.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6f952c10-f8da-42fc-9622-29f7b3e24653/",
      alt_name: "Convolutional Neural Networks in Python",
      color_code: "#FFFDDD",
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://advaitasaha.medium.com/git-github-basic-to-advanced-3a7f7813e750",
      title: "Git & Github : Basic to Advanced",
      description:
        "This will be a guide to learning Git and using Github. From using local git repo, to hosting your code in github",
    },
    {
      url:
        "https://www.linkedin.com/posts/advaita-saha_opensourcesoftware-blockchain-web3-activity-6920273603917668352-Lz6u/",
      title: "Innerve6.0 : Hackthon Experience",
      description:
        "Experience is the teacher of all things. My experince over my first offline hackthon in college life",
    },
    {
      url:
        "https://www.linkedin.com/posts/advaita-saha_blockchaindevelopment-blockchain-ethereum-activity-6945755694675443713-Yt-C?utm_source=linkedin_share&utm_medium=member_desktop_web",
      title: "Why Blockchain Development?",
      description:
        "Blockchain technology is still in the nascent phase and will grow rapidly, improving demand for the best ones out there.",
    },
    {
      url:
        "https://www.linkedin.com/posts/advaita-saha_developer-wellbeing-mentalhealth-activity-6951848404092100608-SJ9p?utm_source=linkedin_share&utm_medium=member_desktop_web",
      title: "Developer Burnout",
      description:
        "It seems that developers, programmers, and software engineers are at a higher risk of burning out than those working in some other industries",
    },
    {
      url:
        "https://www.linkedin.com/posts/advaita-saha_30daysofgooglecloud-web3-web3-activity-6939632464055136256-4Eu2?utm_source=linkedin_share&utm_medium=member_desktop_web",
      title: "1st Year of College Experience",
      description:
        "In short it was a hell of a roller-coaster ride, If I were to go back and make any changes to what I did, the only thing would have done is starting more early",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9073697597",
  email_address: "saha.advaita@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
