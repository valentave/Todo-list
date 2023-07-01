import { $creationWindow } from './creationWindow.js'

export const $content = document.querySelector('.content');
export const projects = [];
export const tasks = [];

const $btnNew = document.querySelector('.btn-new');

$btnNew.addEventListener('click', () => {
    // Display creation window
    $content.appendChild($creationWindow);
})