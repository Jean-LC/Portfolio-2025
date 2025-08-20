import type { IResourcesData } from "../interfaces/resourcesData";

export const resources: IResourcesData = {
  en: {
    presentation: {
      title: "Hi, I'm Jeanette!",
      description:
        "I build websites focused on user experience, responsive design, and clean, efficient code.",
      extraText: "Let's work together!",
    },
    aboutMe: {
      aboutText:
        "I am a front-end developer with a degree in Graphic Communication Design. I enjoy expanding my knowledge and refining my skills to grow both professionally and personally.",
      education: {
        title: "Education",
        academicHistory: [
          {
            school: "Universidad Autonoma Metropolitana (UAM)",
            years: "2017-2021",
            degree: "Bachelor in Graphic Communication Design",
          },
          {
            school: "Laboratoria",
            years: "2022",
            degree: "Web Development Bootcamp",
          },
        ],
      },
      languages: {
        title: "Languages",
        languageSkills: [
          {
            name: "Spanish",
            level: "Native",
          },
          {
            name: "English",
            level: "Advanced - B2",
          },
        ],
      },
    },
    workHistory: {
      skills: {
        title: "Skills",
        skillsData: [
          "ReactJS",
          "JavaScript ES6",
          "HTML 5",
          "CSS",
          "Git",
          "Github",
          "Gitlab",
          "AWS Services",
          "Node.js",
          "Firebase",
          "Jest",
          "Scrum",
          "Typescript",
          "API Rest",
          "Mantine UI",
          "Supabase",
          "GraphQL",
          "Zustand",
          "Vite",
          "Figma",
        ],
      },
      jobHistory: {
        title: "Work History",
        jobData: [
          {
            company: "Grupo PROMASS",
            position: "Front-end Developer",
            years: "February 2024 - Present",
            description:
              "I work on several projects for the company, with a strong focus on a platform dedicated to insurance management and payments. I use technologies such as React, Vite, and TypeScript, integrating services through the consumption of RESTful APIs, implementing a global state architecture using Zustand, and using GitLab for version control.",
            skills: ["Mantine UI", "Supabase", "GraphQL", "Vite", "GitLab"],
          },
          {
            company: "Laboratorios LICON S.A.",
            position: "Technology Solutions Developer",
            years: "February 2023 - January 2024",
            description:
              "I developed different projects for the company, primarily focusing on front-end development as well as UX/UI design to create prototypes using Figma and Adobe XD. For each project, I focused on meeting the requirements and took the opportunity to learn new skills such as TypeScript and SQL.",
            skills: [
              "ReactJS",
              "AWS Services",
              "Typescript",
              "API Rest",
              "Zustand",
              "Figma",
            ],
          },
          {
            company: "Laboratoria",
            position: "Front-End Developer Student",
            years: "July 2022-December - 2022",
            description:
              "I rapidly learned the fundamentals of JavaScript and React. I applied them in several projects, including a command-line tool and a restaurant interface that performs CRUD operations through HTTP requests.",
            skills: [
              "ReactJs",
              "JavaScript ES6",
              "HTML 5",
              "CSS",
              "Firebase",
              "Github",
              "Jest",
            ],
          },
        ],
      },
    },
  },
  es: {
    presentation: {
      title: "¡Hola, soy Jeanette!",
      description:
        "Construyo páginas web centradas en la experiencia del usuario, responsivas y con código eficiente",
      extraText: "¿Trabajamos juntos?",
    },
    aboutMe: {
      aboutText:
        "Soy desarrolladora front-end, egresada en Diseño de la Comunicación Gráfica. Me gusta expandir mis conocimientos y perfeccionar mis habilidades para crecer profesional y personalmente.",
      education: {
        title: "Educación",
        academicHistory: [
          {
            school: "Universidad Autónoma Metropolitana (UAM)",
            years: "2017-2021",
            degree: "Lic. Diseño de la Comunicación Gráfica",
          },
          {
            school: "Laboratoria",
            years: "2022",
            degree: "Bootcamp Desarrollo Web",
          },
        ],
      },
      languages: {
        title: "Idiomas",
        languageSkills: [
          {
            name: "Español",
            level: "Nativo",
          },
          {
            name: "Inglés",
            level: "Avanzado - B2",
          },
        ],
      },
    },
    workHistory: {
      skills: {
        title: "Habilidades",
        skillsData: [
          "ReactJS",
          "JavaScript ES6",
          "HTML 5",
          "CSS",
          "Git",
          "Github",
          "Gitlab",
          "AWS Services",
          "Node.js",
          "Firebase",
          "Jest",
          "Scrum",
          "Typescript",
          "API Rest",
          "Mantine UI",
          "Supabase",
          "GraphQL",
          "Zustand",
          "Vite",
          "Figma",
        ],
      },
      jobHistory: {
        title: "Experiencia",
        jobData: [
          {
            company: "Grupo PROMASS",
            position: "Desarrollador Front-End",
            years: "Febrero 2024 - Actual",
            description:
              "Trabajo en varios proyectos para la empresa, destacando una plataforma orientada a la gestión y pago de seguros. Utilizo tecnologías como React, Vite y TypeScript, integro servicios a través del consumo de API RESTful, implemento una arquitectura de estado global con Zustand y uso GitLab para el control de versiones del código.",
            skills: ["Mantine UI", "Supabase", "GraphQL", "Vite", "GitLab"],
          },
          {
            company: "Laboratorios LICON S.A.",
            position: "Desarrollador de Soluciones Tecnológicas",
            years: "Febrero 2023 - Enero 2024",
            description:
              "Desarrollé diferentes aplicaciones para la empresa, donde me pude enfocar en el front-end principalmente, así como el diseño UX/ UI para crear prototipos con Figma y Adobe XD. Para cada proyecto busco enfocarme en los requisitos y así aprender nuevas habilidades como Typescript y SQL.",
            skills: [
              "ReactJS",
              "AWS Services",
              "Typescript",
              "API Rest",
              "Zustand",
              "Figma",
            ],
          },
          {
            company: "Laboratoria",
            position: "Estudiante Desarrollo Web",
            years: "Julio 2022 - Diciembre - 2022",
            description:
              "Aprendí las bases de JavaScript y React en poco tiempo. Las apliqué en varios proyectos, entre ellos una herramienta de línea de comandos y una interfaz para un restaurante que realiza operaciones CRUD mediante solicitudes HTTP.",
            skills: [
              "ReactJs",
              "JavaScript ES6",
              "HTML 5",
              "CSS",
              "Firebase",
              "Github",
              "Jest",
            ],
          },
        ],
      },
    },
  },
};
