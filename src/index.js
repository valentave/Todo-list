import { closeWindow } from './closeWindow.js';
import { $creationWindow, projects } from './creationWindow.js'
import { displayDetails } from './displayDetails.js';
import { displayProjects } from './displayProjects.js';
import { displayTasks } from './displayTasks.js';
import { editTask } from './editTask.js';
import { editProject } from './editProject.js';
import { Task } from './Task.js';
import './style/style.css';
import './style/container.css';
import './style/sidebar.css';
import './style/content.css';
import './style/creationWindow.css';
import './style/detailsWindow.css';

export const $content = document.querySelector('.content');
export const $sidebar = document.querySelector('.sidebar');
export const $sidebarItems = $sidebar.querySelector('.sidebar__items');
export const $tasks = document.querySelectorAll('task');
export let tasks = [];
tasks.push(new Task('Go for a run','Run through the park at night',1688353200000,'Medium','Sports',true))
tasks.push(new Task('Study Python', 'Take a python course',1688698800000,'High','Study',false))

const $btnNew = document.querySelector('.btn-new');

displayProjects();
displayTasks();

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
});

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

$sidebar.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('sidebar__project-edit-btn')) {
        const projectName = target.parentNode.parentNode.querySelector('label').textContent;
        editProject(projectName);
    }

    if (target.classList.contains('sidebar__project-delete-btn')) {
        const projectName = target.parentNode.parentNode.querySelector('label').textContent;
        const projIndex = projects.findIndex(element => element === projectName);
        projects.splice(projIndex, 1);
        tasks.map(element => {
            if (element.project === projectName) {
                element.project = 'Home';
            }
            return element
        })
        displayTasks('Home');
        displayProjects();
    }
})

$content.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('task-delete-btn')) {
        const taskTitle = target.parentNode.parentNode.querySelector('.task-title').textContent;
        const taskIndex = tasks.findIndex(element => element.title === taskTitle);
        const taskProject = tasks[taskIndex].project;
        tasks.splice(taskIndex, 1);
        displayTasks(taskProject);
    }

    if (target.classList.contains('task-edit-btn')) {
        const taskTitle = target.parentNode.parentNode.querySelector('.task-title').textContent;
        const taskIndex = tasks.findIndex(element => element.title === taskTitle);
        editTask(tasks[taskIndex]);
    }

    if (target.classList.contains('task-details-btn')) {
        const taskTitle = target.parentNode.querySelector('.task-title').textContent;
        const $selectedTask = tasks.find(element => element.title === taskTitle);
        displayDetails($selectedTask);
    }

    if(target.classList.contains('btn-close-details')) {
        const $taskWindow = $content.querySelector('.task-details-window');
        closeWindow($content, $taskWindow);
    }
})