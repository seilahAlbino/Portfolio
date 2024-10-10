import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimationOptions from "../Models/Animation/AnimationCustomOptions";

gsap.registerPlugin(ScrollTrigger);

export const setupSimpleAnimation = (
    selector: gsap.TweenTarget,
    initialProps: gsap.TweenVars,
    finalProps: gsap.TweenVars,
    trigger: gsap.DOMTarget,
    options: AnimationOptions = {}
) => {
    const {
        start = "top 500px",
        end = "bottom 600px",
        markers = false,
    } = options;

    return gsap.fromTo(selector, initialProps, {
        ...finalProps,
        scrollTrigger: {
            trigger: trigger,
            start: start,
            end: end,
            markers: markers,
            scrub: true,
        },
    });
};

export const setupTimelineAnimation = (
    projects: NodeListOf<HTMLElement>,
    initialProps: gsap.TweenVars,
    finalProps: gsap.TweenVars,
    trigger: gsap.DOMTarget,
    options: AnimationOptions = {}
) => {
    const {
        start = "top 500px",
        end = "bottom 600px",
        markers = false,
    } = options;
    
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            scrub: true,
            start: start,
            end: end,
            markers: markers
        },
    });

    projects.forEach((project) => {
        tl.fromTo(project, initialProps, finalProps);
    });
};