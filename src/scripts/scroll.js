import { $$ } from "../utils/dom.js";
import { reduceMotion } from "../utils/media.js";

/**
 * Sets up scroll animations for all sections.
 */
export function initScrollReveals() {
    // If user prefers no motion or GSAP is missing, stop here
    if (reduceMotion || !window.ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    $$(".section").forEach((section) => {
        const targets = section.querySelectorAll(
            ".section__eyebrow, .section__title, .about__text p, .meta-row, .skill-group, .project-row, .contact__lead, .contact-link",
        );

        gsap.from(targets, {
            y: 26,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.06,
            scrollTrigger: {
                trigger: section,
                start: "top 78%",
            },
        });
    });
}
