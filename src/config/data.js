export const CONFIG = {
    name: "Joaquim Pereira",
    handle: "joaquim.dev",

    email: "pereirajoaquim312@gmail.com",
    github: "https://github.com/joaquimpr",
    linkedin: "https://www.linkedin.com/in/joaquim-pereira-0b0536148/",

    // Linhas do "boot" inicial. type: "cmd" (é escrita letra a letra)
    // ou "out" (aparece como resultado, mais rápido).
    bootLines: [
        { type: "cmd", text: "whoami" },
        { type: "out", text: "joaquim - web developer full-stack" },
        { type: "cmd", text: "cat sobre.txt" },
        {
            type: "out",
            text: "Construo interfaces rápidas e experiências para a web.",
        },
        { type: "cmd", text: "./iniciar_portfolio.sh" },
        { type: "progress", label: "a compilar" },
    ],

    skills: [
        {
            group: "frontend",
            items: [
                { name: "javascript", version: "es2024" },
                { name: "react", version: "18.3.1" },
                { name: "typescript", version: "5.5.4" },
                { name: "tailwindcss", version: "3.4.x" },
                { name: "gsap", version: "3.12.5" },
                { name: "three.js", version: "0.166.1" },
            ],
        },
        {
            group: "backend",
            items: [
                { name: "node.js", version: "20-lts" },
                { name: "express", version: "4.19" },
                { name: "postgresql", version: "16" },
                { name: "firebase", version: "10.x" },
                { name: "mysql", version: "8.x" },
            ],
        },
        {
            group: "ferramentas",
            items: [
                { name: "git", version: "2.45.x" },
                { name: "docker", version: "27.x" },
                { name: "npm", version: "10.x" },
                { name: "cloudinary", version: "latest" },
            ],
        },
    ],

    projects: [
        {
            name: "especialidades-cne",
            perm: "-rwxr-xr-x",
            size: "3.1K",
            date: "2025",
            desc: "Aplicação desenvolvida para escuteiros descobrirem as especialidades com que mais se identificam. Através de uma interface simples e intuitiva, os utilizadores respondem a questões que os ajudam a descobrir quais as especialidades que melhor correspondem aos seus interesses e aptidões.",
            tags: ["React"],
            live: "https://especialidades-cne.vercel.app/",
            repo: "#",
        },
        {
            name: "three-shop",
            perm: "-rwxr-xr-x",
            size: "6.8K",
            date: "2024",
            desc: "Este projeto é uma aplicação que permite explorar e interagir com um modelo 3D (uma cama). Utilizando <b>Three.js</b>, a aplicação permite ao utilizador mudar o material e a cor de diferentes partes da mesma de forma simples e intuitiva.",
            tags: ["Javascript", "Three.js"],
            live: "https://threeshop.netlify.app/",
            repo: "https://github.com/seilahAlbino/Three.JS-Shop-Example",
        },
        {
            name: "caparte",
            perm: "-rwxr-xr-x",
            size: "4.2K",
            date: "2023",
            desc: "Caparte é uma aplicação interativa que usa <b>Fabric.js</b> para criar capas personalizadas. Oferece experiência de design intuitiva e em tempo real, permitindo ajustar textos, imagens e elementos gráficos com facilidade.",
            tags: ["React", ".js", "Mysql"],
            live: "https://caparte.vercel.app/",
            repo: "#",
        },
    ],
};
