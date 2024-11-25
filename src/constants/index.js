import projects1 from "../assets/DEVAK.jpg";
import projects2 from "../assets/PELOBICHO.jpg";
import projects3 from "../assets/FESTTROPICAL.jpg";
// import projects4 from "../assets/projects4.webp";
// import projects5 from "../assets/projects5.webp";
// import projects6 from "../assets/projects6.webp";


export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Ícaro Cruz, a beginner frontend developer, dedicated to delivering innovative solutions and exceptional user experiences.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "Devak",
    description: "Landing page for a development company",
    image: projects1,
    link: "https://github.com/Icarocruzz/Devak",
  },
  {
    name: "Pelo Bicho",
    description: "Website for a dog walking company",
    image: projects2,
    link: "https://github.com/Icarocruzz/Pelo-Bicho",
  },
  {
    name: "Fest Tropical Açai",
    description: "Delivery website for a Açai Restaurant",
    image: projects3,
    link: "https://github.com/Icarocruzz/Fest-Tropical-Acai",
  },

];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a passionate frontend developer with several months of dedicated study and hands-on experience creating modern and responsive web applications. My focus is on building functional and visually appealing interfaces that provide excellent user experiences.",
    "I specialize in React.js, HTML, Tailwind CSS, and JavaScript, leveraging these technologies to develop clean, maintainable, and scalable code. While I may be new to the industry, my commitment to continuous learning and staying updated with the latest web development trends ensures that I am well-prepared to contribute effectively to any project.",
  ],
};

export const EXPERIENCES = [
  {
    description: [
      "Developing practical solutions in freelance projects, showcasing strong problem-solving skills and self-taught expertise.",
      "Continuously expanding my knowledge base, currently focusing on mastering Angular to enhance my skill set.",
      "Demonstrating initiative and adaptability by learning new technologies and applying them effectively to real-world challenges.",
    ],
  },
  {
    description: [
      "Demonstrated strong programming logic and a keen eye for design, ensuring visually appealing and functional applications.",
      "Developed problem-solving skills through self-taught programming, effectively addressing challenges independently.",
      "Cultivated the ability to analyze and resolve complex issues, leveraging a hands-on, autodidactic learning approach.",
      "Balanced technical proficiency with design sensibility to create user-centric, responsive web solutions.",
    ],
  },

];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "icarocrz1@gmail.com",
  socialLinks: [
    {
      platform: "WhatsApp",
      url: "https://w.app/Icarocruz",
      ariaLabel: "Get in touch on WhatsApp",
      icon: "RiWhatsappLine",
    },
    {
      platform: "GitHub",
      url: "https://github.com/Icarocruzz",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/%C3%ADcaro-cruz-437ab6336/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Icaro Cruz. All rights reserved.`,
};
