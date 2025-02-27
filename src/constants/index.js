import projects1 from "../assets/DEVAK.jpg";
import projects2 from "../assets/PELOBICHO.jpg";
import projects3 from "../assets/FESTTROPICAL.jpg";
import projects4 from "../assets/AMANDATHEODORO.jpg";
// import projects4 from "../assets/projects4.webp";
// import projects5 from "../assets/projects5.webp";
// import projects6 from "../assets/projects6.webp";


export const LINKS = [
    {href: "#work", label: "Trabalhos"},
    {href: "#about", label: "Sobre"},
    {href: "#experience", label: "Experiencia"},
    {href: "#contact", label: "Contato"},
];

export const HERO_CONTENT = {
    greeting: "Olá! 🖐️",
    introduction:
        "Sou Ícaro Cruz, um desenvolvedor front-end, dedicado a entregar soluções inovadoras e experiências de usuário excepcionais.",
    description:
        "Atualmente, estou ajudando empresas a dar vida às suas visões por meio de soluções digitais interativas.",
    resumeLinkText: "Currículo",
    resumeLink: "/resume.pdf",
};

export const PROJECTS = [
    {
        name: "Psicóloga Amanda Theodoro",
        description: "Portfólio desenvolvido em Angular",
        image: projects4,
        link: "https://github.com/Icarocruzz/AmandaTheodoro",
    }, {
        name: "Devak",
        description: "Landing page para uma empresa de desenvolvimento",
        image: projects1,
        link: "https://github.com/Icarocruzz/Devak",
    },
    {
        name: "Pelo Bicho",
        description: "Website para uma empresa de passeio para cães",
        image: projects2,
        link: "https://github.com/Icarocruzz/Pelo-Bicho",
    },
    {
        name: "Fest Tropical Açai",
        description: "Site/menu para um restaurante de açaí",
        image: projects3,
        link: "https://github.com/Icarocruzz/Fest-Tropical-Acai",
    },

];

export const ABOUT_CONTENT = {
    paragraphs: [
        "Sou um desenvolvedor front-end apaixonado por tecnologia e inovação, com vasto estudo dedicado e experiência prática na criação de aplicações web modernas e responsivas. Meu foco é construir interfaces funcionais e visualmente atraentes que proporcionam excelentes experiências aos usuários.",
        "Sou especializado em Angular, React.js, HTML, CSS, avaScript e TypeScript, utilizando essas tecnologias para desenvolver um código limpo, sustentável e escalável. Meu compromisso com o aprendizado contínuo e a atualização constante sobre as tendências do desenvolvimento web garantem que estou bem preparado para contribuir de forma eficaz em qualquer projeto.",
    ],
};

export const EXPERIENCES = [
    {
        description: [
            "Desenvolvendo soluções práticas em projetos freelance, demonstrando fortes habilidades de resolução de problemas e expertise autodidata.",
            "Expandindo continuamente meus conhecimentos, atualmente focado em dominar Angular para aprimorar meu conjunto de habilidades.",
            "Demonstrando iniciativa e adaptabilidade ao aprender novas tecnologias e aplicá-las de forma eficaz em desafios do mundo real.",
        ],
    },
    {
        description: [
            "Demonstro forte lógica de programação e um olhar atento para o design, garantindo aplicações visualmente atraentes e funcionais.",
            "Desenvolvi habilidades de resolução de problemas através da programação autodidata, enfrentando desafios de forma eficaz e independente.",
            "Cultivei a habilidade de analisar e resolver questões, adotando uma abordagem prática e autodidata de aprendizado.",
            "Equilibrei proficiência técnica com senso de design para criar soluções web responsivas e centradas no usuário.",
        ],
    },

];

export const CONTACT_CONTENT = {
    headline: "VAMOS TRABALHAR EM ALGO INCRIVEL",
    description:
        "Estou animado para colaborar em projetos que ultrapassem limites e criam impacto significativos. Vamos construir algo inovador e exepcional juntos!",
    email: "icarocrz1@gmail.com",
    socialLinks: [
        {
            platform: "WhatsApp",
            url: "https://wa.me/5511970730874",
            ariaLabel: "Entre em contato comigo pelo WhatsApp",
            icon: "RiWhatsappLine",
        },
        {
            platform: "GitHub",
            url: "https://github.com/Icarocruzz",
            ariaLabel: "Veja meus projetos diretamente no GitHub",
            icon: "RiGithubFill",
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/%C3%ADcaro-cruz-437ab6336/",
            ariaLabel: "Faça uma conexão comigo pelo LinkedIn",
            icon: "RiLinkedinFill",
        },
    ],
    footerText: `© ${new Date().getFullYear()} Icaro Cruz. Todos os direitos reservados.`,
};
