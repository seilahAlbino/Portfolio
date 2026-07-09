import { $ } from "../utils/dom.js";
import { CONFIG } from "../config/data.js";
import { goTo } from "./nav.js";

/**
 * Initialize the command line terminal interface.
 */
export function initCommandBar() {
    const input = $("#cmdInput");
    const output = $("#cmdOutput");
    const history = [];
    let historyIndex = -1;

    const commands = {
        help: () =>
            "Available commands: about, skills, projects, contact, whoami, email, github, linkedin, date, clear, sudo",
        about: () => {
            goTo("about");
            return "Navigating to about.txt...";
        },
        skills: () => {
            goTo("skills");
            return "Navigating to skills/...";
        },
        projects: () => {
            goTo("projects");
            return "Navigating to projects/...";
        },
        contact: () => {
            goTo("contact");
            return "Navigating to contact.sh...";
        },
        whoami: () => `${CONFIG.name} - Full-Stack Developer`,
        email: () => {
            window.location.href = `mailto:${CONFIG.email}`;
            return `Opening email to ${CONFIG.email}...`;
        },
        github: () => {
            window.open(CONFIG.github, "_blank");
            return "Opening GitHub...";
        },
        linkedin: () => {
            window.open(CONFIG.linkedin, "_blank");
            return "Opening LinkedIn...";
        },
        date: () => new Date().toLocaleString(),
        clear: () => {
            output.innerHTML = "";
            return null;
        },
        sudo: () =>
            "Permission denied: This terminal lacks root privileges. (But it has great taste!)",
    };

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") handleCommand(input.value.trim());
        else if (e.key === "ArrowUp") navigateHistory(-1);
        else if (e.key === "ArrowDown") navigateHistory(1);

        // Executes user commands.
        function handleCommand(cmd) {
            if (!cmd) return;

            history.push(cmd);
            historyIndex = history.length;

            printToOutput(`guest@portfolio:~$ ${cmd}`, "cmd-log__prompt");

            const handler = commands[cmd];
            const response = handler ? handler() : `Command not found: ${cmd}. Type 'help' for options.`;

            if (response) printToOutput(response, "cmd-log__resp");

            input.value = "";
            output.scrollTop = output.scrollHeight;
        }

        // Navigate through the command history with the arrow keys.
        function navigateHistory(direction) {
            historyIndex = Math.max(0, Math.min(history.length, historyIndex + direction));
            input.value = history[historyIndex] || "";
            e.preventDefault();
        }
    });

    function printToOutput(text, className) {
        const p = document.createElement("p");
        p.className = className;
        p.textContent = text;
        output.appendChild(p);
    }
}
