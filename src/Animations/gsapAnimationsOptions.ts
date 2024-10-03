import AnimationSettings from "../Models/Animation/AnimationsSettings";

export const aboutAnimationSettings: Record<string, AnimationSettings> = {
    title: {
        initial: { y: -100, opacity: 0 },
        final: { y: 0, opacity: 1 },
        trigger: ".aboutTitle",
        customOptions: { end: "bottom 501px" },
    },
    tecnologias: {
        initial: { x: 150, opacity: 0 },
        final: { x: 0, opacity: 1 },
        trigger: "#about",
        customOptions: { end: "bottom 700px" },
    },
    aboutText: {
        initial: { x: -150, opacity: 0 },
        final: { x: 0, opacity: 1 },
        trigger: "#about",
        customOptions: { end: "bottom 700px" },
    },
};

export const projectAnimationSettings: Record<string, AnimationSettings> = {
    title: {
        initial: { y: -100, opacity: 0 },
        final: { y: 0, opacity: 1 },
        trigger: ".projectsTitle",
        customOptions: { end: "bottom 501px" },
    },
    projects: {
        initial: { y: 200, opacity: 0, filter: "blur(1.5px)" },
        final: { y: 0, opacity: 1, filter: "blur(0px)" },
        trigger: "#projects",
    },
};

export const contactAnimationSettings: Record<string, AnimationSettings> = {
    title: {
        initial: { y: -100, opacity: 0 },
        final: { y: 0, opacity: 1 },
        trigger: "#contact",
        customOptions: { end: "bottom bottom" },
    },
    contact: {
        initial: { y: 200, opacity: 0, filter: "blur(1.5px)" },
        final: { y: 0, opacity: 1, filter: "blur(0px)" },
        trigger: "#contact",
        customOptions: { end: "bottom bottom" },
    },
};