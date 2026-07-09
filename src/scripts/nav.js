import { $, $$ } from "../utils/dom.js";
import { reduceMotion } from "../utils/media.js";
/* =========================================================
     NAV
  ========================================================= */
export function initNav() {
    const menuBtn = $("#menuBtn");
    const tabs = $("#navTabs");

    menuBtn.addEventListener("click", () => {
        const open = tabs.classList.toggle("is-open");
        menuBtn.setAttribute("aria-expanded", String(open));
    });

    $$("[data-goto]").forEach((el) => {
        el.addEventListener("click", () => {
            goTo(el.dataset.goto);
            tabs.classList.remove("is-open");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });

    const sections = ["hero", "about", "skills", "projects", "contact"]
        .map((id) => $("#" + id))
        .filter(Boolean);
    const navTabButtons = $$(".nav__tab");

    if ("IntersectionObserver" in window) {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        navTabButtons.forEach((b) =>
                            b.classList.toggle(
                                "is-active",
                                b.dataset.goto === entry.target.id,
                            ),
                        );
                    }
                });
            },
            { rootMargin: "-45% 0px -45% 0px" },
        );
        sections.forEach((s) => obs.observe(s));
    }
}

export function goTo(id) {
    const el = $("#" + id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: reduceMotion ? "auto" : "smooth" });
}
