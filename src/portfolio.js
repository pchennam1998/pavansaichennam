/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pavan Sai's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Pavan Sai Chennam Portfolio",
    type: "website",
    url: "http://pavansaichennam.com/",
  },
};

//Home Page
const greeting = {
  title: "Pavan Sai Chennam",
  logo_name: "PavanSai",
  nickname: "Pavan Sai",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1JiBtAq_gjfgxK7Q_xAlNDRljUH76km8o/view?usp=sharing",
  portfolio_repository: "https://github.com/pchennam1998",
  githubProfile: "https://github.com/pchennam1998",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/pchennam1998",
  // linkedin: "https://www.linkedin.com/in/pavan-sai-c-223b15148/",
  // gmail: "pavansaichennam@gmail.com",
  // twitter: "https://twitter.com/pchennam1998"

  {
    name: "Github",
    link: "https://github.com/pchennam1998",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pavan-sai-c-223b15148/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:pavansaichennam@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/envelopes-bulk?f=sharp&s=solid
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/pchennam1998",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Leetcode",
    link: "https://leetcode.com/pchennam1998",
    fontAwesomeIcon: "fa-codepen", // Reference https://fontawesome.com/icons/code?style=brands
    backgroundColor: "#FCB905", // Reference https://simpleicons.org/?q=leetcode
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in the MERN Stack, adept at full-stack development, from front-end React to back-end Node.js",
        "⚡ Experienced in designing and managing database systems and deploying cloud-based solutions for scalable applications",
        "⚡ Versatile developer with experience in building web and mobile applications using a range of technologies",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:stripe",
          style: {
            color: "#FF6550",
          },
        },
        {
          skillName: "PLSQL",
          fontAwesomeClassname: "simple-icons:precommit",
          style: {
            color: "#E6000F",
          },
        },
      ],
    },
    {
      title: "Cloud & Database Mastery",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms and databases",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Expertise in optimizing cloud resources for cost efficiency, resulting in significant revenue growth",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Oracle",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#F80000",
          },
        },
      ],
    },
    {
      title: "Project Management",
      fileName: "DesignImg",
      skills: [
        "⚡ Efficient in designing solutions, ensuring a structured software development lifecycle and proficient in agile methodologies",
        "⚡ Proficient in ERP solutions, enhancing HR processes",
        "⚡ Utilized tools for effective code management and team collaboration, maintaining organized repositories",
      ],
      softwareSkills: [
        {
          skillName: "UML",
          fontAwesomeClassname: "simple-icons:uml",
          style: {
            color: "#FABD14",
          },
        },
        {
          skillName: "ER Diagrams",
          fontAwesomeClassname: "simple-icons:diagramsdotnet",
          style: {
            color: "#F08705",
          },
        },
        {
          skillName: "Oracle",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#F80000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/pchennam1998/",
    },
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.github.com/pchennam1998/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/chennampavan007",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "Vallurupalli Nageshwar Rao Institute of Engineering and Technology",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "vnr_logo.png",
      alt_name: "VNR VJIET Hyderabad",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ Delved into the basics of software engineering, including topics like data structures, algorithms, databases, operating systems, object-oriented design, and compiler design.",
        "⚡ In addition, I've taken courses in Python, Cloud Computing, and Website Development, and applied these skills in various tech projects for practical experience.",
        "⚡ Hosted a technical event Crazathon, interned for the department's MTP website, and taught high school students HTML and coding.",
      ],
      website_link: "https://vnrvjiet.ac.in/",
    },
    {
      title: "San Jose State University",
      subtitle: "M.S. in Computer Software Engineering",
      logo_path: "sjsu_logo.png",
      alt_name: "SJSU",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Enrolled in courses covering Full Stack Development, Cloud Computing, Software Systems, and Data Mining, broadening my technical knowledge.",
        "⚡ Actively engaged in competitive coding on platforms like LeetCode and GitHub while also working on creating Machine Learning models.",
        "⚡ During my University time, I relished my time with a hiking group and gardening club, where I hiked often and harvested from gardens weekly.",
      ],
      website_link: "https://www.sjsu.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python",
      subtitle: "- Hacker Rank",
      logo_path: "hackerrank-logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/62866600e6b1",
      alt_name: "Hacker Rank",
      color_code: "#FFFFFF",
    },
    {
      title: "DSA Coding Course",
      subtitle: "- Being Zero",
      logo_path: "beingzero_logo.png",
      certificate_link: "https://beingzero.in/",
      alt_name: "Being Zero Coding Course",
      color_code: "#FFFFFF",
    },
    {
      title: "Python",
      subtitle: "- VNR VJIET",
      logo_path: "vnr_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/62866600e6b1",
      alt_name: "Hacker Rank",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As a Software Engineer, I implemented functionalities, addressed customer fixes, and delivered documentation, resulting in a 50% reduction in resolution time and a 15% boost in customer retention. In my role as an Application Consultant, I collaborated on Core HR solutions, gathering requirements, implementing patches, and configuring HR Portals, all while adhering to Agile practices. During my internship, I optimized product functionality and enhanced system performance, achieving a remarkable 20% efficiency improvement.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer l",
          company: "Applaud Solutions India Private Limited",
          company_url: "https://www.applaudhr.com/",
          logo_path: "applaud_logo.png",
          duration: "Mar 2021 - July 2022",
          location: "Hyderabad, Telangana",
          description: (
            <div>
              <b>Clients: </b>Experian (Phase 2), Kuwait National Petroleum Co.,
              West Virginia University<br></br>
              Incorporated and implemented functionalities, configuration
              patches and delivered documentation. Designed Functional and
              Technical BR.030 documentation to assist clients. Collaborated
              cross-functionally with engineering and customer success teams to
              swiftly address customer fixes resulting in a 50% reduction in
              average resolution time and improved customer retention by 15%.
              Proactive issue resolution, technical support and thorough root
              cause analysis led to a 15% revenue increase.
            </div>
          ),
          color: "#0879bf",
        },
        {
          title: "Applications Consultant",
          company: "Applaud Solutions India Private Limited",
          company_url: "https://www.applaudhr.com/",
          logo_path: "applaud_logo.png",
          duration: "June 2019 - Feb 2021",
          location: "Hyderabad, Telangana",
          description: (
            <div>
              <b>Clients: </b>Experian (Phase 1), Two Sigma<br></br>
              Cooperated in Core HR, Employee and Manager Self-Service, SSHR,
              Absence, and Oracle Time & Labor (OTL). Gathered client functional
              requirements, implemented Scrum-based patches, and performed MD120
              documentation. Engaged with the Core Technical team for demos,
              issue resolution, and adherence to Agile practices. Configured HR
              Portal including Pay slip, P60 and P11D with custom templates
              using the Applaud Cloud.
            </div>
          ),
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Intern",
          company: "Applaud Solutions India Private Limited",
          company_url: "https://www.applaudhr.com/",
          logo_path: "applaud_logo.png",
          duration: "Jan 2019 - Apr 2019",
          location: "Hyderabad, Telangana",
          description: (
            <div>
              Led exploration of Applaud HR features, leveraging REST APIs, fast
              formulas, triggers, packages, XML, and database objects to enhance
              product functionality and optimize data handling. Boosted system
              performance, resulting in a remarkable 20% improvement in
              efficiency.
            </div>
          ),
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Being Zero - Coding Training Program",
          company: "Being Zero",
          company_url: "https://beingzero.in/",
          logo_path: "beingzero_logo.png",
          duration: "Jul 2018 - Dec 2018",
          location: "Hyderabad, Telangana",
          description:
            "In college, I had the opportunity to join Being Zero, a coding training program led by a Microsoft employee. It focused on Data Structures and Algorithms, greatly improving my coding skills and allowing me to take part in weekly coding competitions.",
          color: "#4285F4",
        },
        {
          title: "Crazathon",
          company: "VNR VJIET",
          company_url: "https://vnrvjiet.ac.in/",
          logo_path: "vnr_logo.png",
          duration: "Feb 2018",
          location: "Hyderabad, Telangana",
          description:
            "Crazathon is a technical event that combines knowledge and coding challenges, drawing participants from various colleges. I took on the role of organizing and orchestrating this event, leading a team of four individuals. Notably, our event garnered the highest number of participants for that particular year.",
          color: "#D83B01",
        },
        {
          title: "Development of Mentor Training and Placement",
          company: "VNR VJIET",
          company_url: "https://vnrvjiet.ac.in/",
          logo_path: "vnr_campus.png",
          duration: "Apr 2018 - July 2018",
          location: "Hyderabad, Telangana",
          description:
            "During my summer internship at VNR VJIET, I played a key role in the development of the front-end for the MTP website in the Information Technology department. I had the responsibility of leading a dedicated team that focused on the front-end aspect of the project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create MERN stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profilepic.png",
    description:
      "You can reach me on most social platforms, and I'll respond within a day. I'm here to assist with MERN, Python, Oracle, and open-source development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Almaden Quicksilver Trail: Unearthing the Treasures of Nature's Playground",
    link: "https://intothewildtrekking.blogspot.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "808 West San Carlos, San Jose, California - 95126",
    locality: "Santa Clara",
    country: "US",
    region: "California",
    postalCode: "95126",
    streetAddress: "808 West San Carlos",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/4Gdv2gSzyvRHJbKr6",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+1 (408) 690-9230",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
