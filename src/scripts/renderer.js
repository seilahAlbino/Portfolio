import { CONFIG } from "../config/data.js";
import { $, $$ } from "../utils/dom.js";

/**
 * Injects configuration data into the DOM.
 */
export function renderContent() {
    renderHero();
    renderSkills();
    renderProjects();
    renderContact();
}

function renderHero() {
    const container = $("#heroName");
    if (container) heroName.textContent = CONFIG.name;
}

function renderSkills() {
    const container = $("#skillsGrid");
    if (!container) return;

    container.innerHTML = CONFIG.skills.map((group) => `
        <div class="skill-group">
            <p class="skill-group__title">${group.group}</p>
            ${group.items.map((it) => `
                <div class="skill-item">
                    <span class="skill-item__name">${it.name}</span>
                    <span class="skill-item__version">${it.version}</span>
                </div>
            `).join("")}
        </div>
    `).join("");
}

function renderProjects() {
    const container = $("#projectsList");
    if (!container) return;

    container.innerHTML = CONFIG.projects.map((p, i) => `
        <div class="project-row" data-index="${i}">
            <button class="project-row__head" aria-expanded="false">
                <span class="project-row__perm">${p.perm}</span>
                <span class="project-row__size">${p.size}</span>
                <span class="project-row__name">${p.name}</span>
                <span class="project-row__date">${p.date}</span>
                <span class="project-row__caret">›</span>
            </button>
            <div class="project-row__panel">
                <div class="project-row__inner">
                    <p class="project-row__desc">${p.desc}</p>
                    <div class="project-row__tags">
                        ${p.tags.map((t) => `<span class="project-row__tag">${t}</span>`).join("")}
                    </div>
                    <div class="project-row__links">
                        <a href="${p.live}" target="_blank" rel="noopener">ver live →</a>
                        <a href="${p.repo}" target="_blank" rel="noopener">código fonte →</a>
                    </div>
                </div>
            </div>
        </div>
    `).join("");

    // Initialize project toggles
    $$(".project-row__head").forEach((btn) => {
        btn.addEventListener("click", () => {
            const row = btn.closest(".project-row");
            const isOpen = row.classList.contains("is-open");

            // Close all other projects
            $$(".project-row").forEach((r) => {
                r.classList.remove("is-open");
                r.querySelector(".project-row__head").setAttribute("aria-expanded", "false");
            });

            if (!isOpen) {
                row.classList.add("is-open");
                btn.setAttribute("aria-expanded", "true");
            }
        });
    });
}

function renderContact() {
    const container = $("#contactLinks");
    if (!container) return;

    container.innerHTML = [
        { label: "email", val: CONFIG.email, href: `mailto:${CONFIG.email}` },
        { label: "github", val: CONFIG.github.replace("https://", ""), href: CONFIG.github },
        { label: "linkedin", val: CONFIG.linkedin.replace("https://", ""), href: CONFIG.linkedin }
    ].map(link => `
        <a class="contact-link" href="${link.href}" target="_blank" rel="noopener">
            <span class="contact-link__prefix">${link.label}</span>
            <span class="contact-link__val">${link.val}</span>
        </a>
    `).join("");
}