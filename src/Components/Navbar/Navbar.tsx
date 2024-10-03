import React, { useEffect, useState } from "react";

const options = [
    { title: "Introdução", to: "#introduction" },
    { title: "Sobre", to: "#about" },
    { title: "Projetos", to: "#projects" },
    { title: "Contato", to: "#contact" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string>(options[0].to);
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleScroll = () => {
        const sections = options.map(option => document.querySelector(option.to) as HTMLElement);
        let currentSection = "";

        sections.forEach((section, index) => {
            if (section) {
                const rect = section.getBoundingClientRect();
                if (index === sections.length - 1) {
                    if (rect.top <= window.innerHeight / 2) {
                        currentSection = section.getAttribute("id") || "";
                    }
                } else {
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        currentSection = section.getAttribute("id") || "";
                    }
                }
            }
        });

        setActiveLink(`#${currentSection}`);
    };

    useEffect(() => {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(prefersDarkMode);
        document.body.classList.toggle('dark', prefersDarkMode);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getLinkClass = (link: string): string => activeLink === link ? "text-primary" : "";
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark', !darkMode);
    };

    const mobileMenu = () => (
        <div className={`fixed h-full top-0 left-0 w-full p-4 font-bold z-50 ${menuOpen ? 'backdrop-blur-sm' : ''}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-md">Joaquim Pereira<span className="text-primary">.</span></div>
                <div className="flex items-center space-x-2">
                    <button
                        className="px-3 py-2 relative flex items-center"
                        onClick={toggleDarkMode}
                    >
                        <i
                            className={`text-sm bi bi-moon-fill absolute transition-transform duration-300 ease-in-out ${darkMode ? 'translate-y-0' : '-translate-y-12'}`}
                        />
                        <i
                            className={`text-sm bi bi-brightness-high-fill absolute transition-transform duration-300 ease-in-out ${darkMode ? '-translate-y-12' : 'translate-y-0'}`}
                        />
                    </button>
                    <button
                        className="px-3 py-2 text-primary"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? <i className="text-lg bi bi-x-lg"></i> : <i className="text-lg bi bi-list"></i>}
                    </button>
                </div>
            </div>
            <div className={`flex flex-col items-center justify-center lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                {options.map(option =>
                    <a href={option.to} key={option.to} className={`w-min block px-4 py-2 text-center ${getLinkClass(option.to)}`} onClick={() => setMenuOpen(false)}>{option.title}</a>
                )}
            </div>
        </div>
    );

    const desktopMenu = () => (
        <nav className="fixed top-0 left-0 w-full p-4 font-bold z-50">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-md">Joaquim Pereira<span className="text-primary">.</span></div>
                <div className="flex items-center space-x-4">
                    {options.map(option =>
                        <a href={option.to} key={option.to} className={`px-4 py-2 text-center duration-300 ease-in-out hover:text-primary ${getLinkClass(option.to)}`}>{option.title}</a>
                    )}
                    <button
                        className="ml-4 px-3 py-2 relative flex items-center duration-300 ease-in-out hover:text-primary"
                        onClick={toggleDarkMode}
                    >
                        <i
                            className={`bi bi-moon-fill absolute transition-transform ${darkMode ? 'translate-y-0' : '-translate-y-12'}`}
                        />
                        <i
                            className={`bi bi-brightness-high-fill absolute transition-transform ${darkMode ? '-translate-y-12' : 'translate-y-0'}`}
                        />
                    </button>
                </div>
            </div>
        </nav>
    );

    return <>
        <div className="lg:hidden">{mobileMenu()}</div>
        <div className="hidden lg:block">{desktopMenu()}</div>
    </>;
}

export default Navbar;