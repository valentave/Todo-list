import { $creationWindow, projects } from './creationWindow.js'
import { displayProjects } from './displayProjects.js';
import { displayTasks } from './displayTasks.js';

export const $content = document.querySelector('.content');
export const $sidebar = document.querySelector('.sidebar')
export const tasks = [];

const $btnNew = document.querySelector('.btn-new');

displayProjects();
displayTasks();

$btnNew.addEventListener('click', () => {
    // Display creation window
    $content.appendChild($creationWindow);
})