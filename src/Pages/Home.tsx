import React, { useRef, useLayoutEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About";
import Introduction from "../Components/Introduction/Introduction";
import ProjectsSection from "../Components/ProjectsSection/ProjectsSection";
import Contact from "../Components/Contact/Contact";
import ScrollToTopButton from "../Components/ScrollToTop/ScrollToTopButton";
import { gsap } from "gsap";
import {
    setupSimpleAnimation,
    setupTimelineAnimation,
} from "../Animations/gsapAnimations";
import {
    aboutAnimationSettings,
    contactAnimationSettings,
    projectAnimationSettings,
} from "../Animations/gsapAnimationsOptions";

function Home() {
    const el = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const animations = [
            { selector: `.aboutTitle`, settings: aboutAnimationSettings.title },
            { selector: `.aboutText`, settings: aboutAnimationSettings.aboutText },
            { selector: `.tecnologias`, settings: aboutAnimationSettings.tecnologias },
            { selector: `.projectsTitle`, settings: projectAnimationSettings.title },
            { selector: `.contactTitle`, settings: contactAnimationSettings.title },
            { selector: `.contactForm`, settings: contactAnimationSettings.contact },
        ];

        animations.forEach(({ selector, settings }) => {
            const { initial, final, trigger, customOptions } = settings;
            setupSimpleAnimation(
                selector,
                initial,
                final,
                trigger,
                customOptions
            );
        });

        const projects = el.current?.querySelectorAll<HTMLElement>(".project");
        
        if (projects) {
            setupTimelineAnimation(
                projects,
                projectAnimationSettings.projects.initial,
                projectAnimationSettings.projects.final,
                projectAnimationSettings.projects.trigger,
                projectAnimationSettings.projects.customOptions
            );
        }

        return () => {
            gsap.killTweensOf(".aboutTitle");
            gsap.killTweensOf(".aboutText");
            gsap.killTweensOf(".tecnologias");
            gsap.killTweensOf(".projectsTitle");
            gsap.killTweensOf(".project");
            gsap.killTweensOf(".contactTitle");
            gsap.killTweensOf(".contactForm");
        };
    }, []);

    return (
        <div className="App bg-lightbackground dark:bg-darkbackground text-lighttext dark:text-darktext overflow-hidden">
            <header>
                <Navbar />
                <Introduction />
            </header>
            <main>
                <div id="about">
                    <About />
                </div>

                <div ref={el} id="projects" className="mt-5">
                    <ProjectsSection />
                </div>

                <div id="contact" className="mt-5">
                    <Contact />
                </div>

                <ScrollToTopButton />
            </main>
        </div>
    );
}

export default Home;
