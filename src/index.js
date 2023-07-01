import { closeWindow } from './closeWindow.js';
import { $creationWindow, projects } from './creationWindow.js'
import { displayDetails } from './displayDetails.js';
import { displayProjects } from './displayProjects.js';
import { displayTasks } from './displayTasks.js';
import './style/style.css';

export const $content = document.querySelector('.content');
export const $sidebar = document.querySelector('.sidebar');
export const $sidebarItems = $sidebar.querySelector('.sidebar__items');
export const $tasks = document.querySelectorAll('task');
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

$content.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('task-delete-btn')) {
        // deleteTask(title)
    }

    if (target.classList.contains('task-edit-btn')) {
        //editTask(taskNode)
    }

    if (target.classList.contains('task-details-btn')) {
        const taskTitle = target.parentNode.querySelector('.task-title').textContent;
        const $selectedTask = tasks.find(element => element.title === taskTitle)
        displayDetails($selectedTask);
    }

    if(target.classList.contains('btn-close-details')) {
        const $taskWindow = $content.querySelector('.task-details-window');
        closeWindow($content, $taskWindow);
    }
})