import { $creationWindow, projects } from './creationWindow.js'
import { displayProjects } from './displayProjects.js';
import { displayTasks } from './displayTasks.js';

export const $content = document.querySelector('.content');
export const $sidebar = document.querySelector('.sidebar');
export const $sidebarItems = $sidebar.querySelector('.sidebar__items');
export const tasks = [];

const $btnNew = document.querySelector('.btn-new');

displayProjects();
displayTasks();

$btnNew.addEventListener('click', () => {
    // Display creation window
    $content.appendChild($creationWindow);
})

$sidebarItems.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('sidebar__project-button')) {
        displayTasks(target.textContent);
    }
})