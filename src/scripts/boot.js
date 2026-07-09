import { $ } from "../utils/dom.js";
import { CONFIG } from "../config/data.js";
import { initScrollReveals } from "./scroll.js";
import { reduceMotion } from "../utils/media.js";

/* =========================================================
     BOOT SEQUENCE (typing) -> REVEAL SITE
  ========================================================= */
function typeChars(el, text, speed) {
    return new Promise((resolve) => {
        let i = 0;
        const cursor = document.createElement("span");
        cursor.className = "boot__cursor";
        el.appendChild(document.createTextNode(""));
        const textNode = el.firstChild;
        el.appendChild(cursor);

        function step() {
            if (i <= text.length) {
                textNode.textContent = text.slice(0, i);
                i++;
                setTimeout(step, speed + Math.random() * 18);
            } else {
                cursor.remove();
                resolve();
            }
        }
        step();
    });
}

async function runBootSequence() {
    const body = $("#bootBody");

    for (const line of CONFIG.bootLines) {
        if (line.type === "cmd") {
            const p = document.createElement("p");
            p.className = "boot__line boot__line--cmd";
            body.appendChild(p);
            body.scrollTop = body.scrollHeight;
            await typeChars(p, line.text, reduceMotion ? 0 : 32);
            await wait(reduceMotion ? 0 : 180);
        } else if (line.type === "out") {
            const p = document.createElement("p");
            p.className = "boot__line boot__line--out";
            p.textContent = line.text;
            body.appendChild(p);
            body.scrollTop = body.scrollHeight;
            await wait(reduceMotion ? 0 : 260);
        } else if (line.type === "progress") {
            const p = document.createElement("p");
            p.className = "boot__line boot__line--out";
            const track = document.createElement("span");
            track.className = "boot__progress-track";
            const fill = document.createElement("span");
            fill.className = "boot__progress-fill";
            p.textContent = `${line.label} `;
            track.appendChild(fill);
            p.appendChild(track);
            body.appendChild(p);
            body.scrollTop = body.scrollHeight;
            await fillProgress(fill, reduceMotion ? 50 : 900);
            await wait(reduceMotion ? 0 : 250);
        }
    }
}

function fillProgress(el, duration) {
    return new Promise((resolve) => {
        const total = 24;
        const obj = { n: 0 };
        gsap.to(obj, {
            n: total,
            duration: duration / 1000,
            ease: "power1.inOut",
            onUpdate: () => {
                const filled = Math.round(obj.n);
                el.textContent =
                    "█".repeat(filled) +
                    "░".repeat(total - filled) +
                    `  ${Math.round((filled / total) * 100)}%`;
            },
            onComplete: resolve,
        });
    });
}

function wait(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

export async function initTerminalSequence() {
    document.body.classList.add("lock-scroll");
    const skipBtn = $("#skipIntro");
    let skipped = false;

    const skipPromise = new Promise((resolve) => {
        skipBtn.addEventListener(
            "click",
            () => {
                skipped = true;
                resolve();
            },
            { once: true },
        );
    });

    // Executa o boot e vai direto para o site
    await Promise.race([runBootSequence(), skipPromise]);
    finishIntro();
}

function finishIntro() {
    const boot = $("#boot");
    const site = $("#site");
    document.body.classList.remove("lock-scroll");
    site.removeAttribute("aria-hidden");

    gsap.timeline()
        .to(boot, { opacity: 0, duration: 0.5, ease: "power2.out" })
        .set(boot, { display: "none" })
        .to(site, { opacity: 1, duration: 0.6, ease: "power2.out" }, "<")
        .fromTo(
            "#nav",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            "<0.1",
        )
        .fromTo(
            ".hero__prompt, .hero__name, .hero__role, .hero__bio, .hero__cta, .hero__scroll",
            { y: 24, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out",
                stagger: 0.08,
            },
            "<0.15",
        );

    initScrollReveals();
}
