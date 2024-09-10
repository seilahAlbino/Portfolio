import React, { useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import About from '../Components/About/About';
import Introduction from '../Components/Introduction/Introduction';
import ProjectsSection from '../Components/ProjectsSection/ProjectsSection';
import Contact from '../Components/Contact/Contact';
import ScrollToTopButton from '../Components/ScrollToTop/ScrollToTopButton';

function Home() {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        const options = {
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                }
            });
        }, options);

        const aboutElement = aboutRef.current;
        const projectsElement = projectsRef.current;
        const contactElement = contactRef.current;

        if (aboutElement) observer.observe(aboutElement);
        if (projectsElement) observer.observe(projectsElement);
        if (contactElement) observer.observe(contactElement);

        return () => {
            if (aboutElement) observer.unobserve(aboutElement);
            if (projectsElement) observer.unobserve(projectsElement);
            if (contactElement) observer.unobserve(contactElement);
        };
    }, []);

    return (
        <div className="App bg-lightbackground dark:bg-darkbackground text-lighttext dark:text-darktext">
            <header>
                <Navbar />
                <Introduction />
            </header>
            <main>
                <div ref={aboutRef} id="about" className="opacity-0">
                    <About />
                </div>

                <div ref={projectsRef} id="projects" className="opacity-0">
                    <ProjectsSection />
                </div>

                <div ref={contactRef} id="contact" className="opacity-0">
                    <Contact />
                </div>

                <ScrollToTopButton/>
            </main>
        </div>
    );
}

export default Home;
