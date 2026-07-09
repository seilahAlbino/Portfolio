import { renderContent } from "./renderer.js";
import { initTerminalSequence } from "./boot.js";
import { initCommandBar } from "./terminal.js";
import { initNav } from "./nav.js";

document.addEventListener("DOMContentLoaded", () => {
    renderContent();
    initNav();
    initCommandBar();
    initTerminalSequence();
});
