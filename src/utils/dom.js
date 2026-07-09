/**
 * Shortcut for document.querySelector.
 * @param {string} sel - The CSS selector to find.
 * @returns {Element|null} The first matching element, or null.
 */
export const $ = (sel) => document.querySelector(sel);

/**
 * Shortcut for document.querySelectorAll.
 * @param {string} sel - The CSS selector to find.
 * @returns {Element[]} An array of matching elements.
 */
export const $$ = (sel) => Array.from(document.querySelectorAll(sel));