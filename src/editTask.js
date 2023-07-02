import { closeWindow } from "./closeWindow";
import { displayCreateTask } from "./displayCreation";
import { displayTasks } from "./displayTasks";
import { $content, tasks } from "./index.js";
import { hideErrorMessage, showErrorMessage } from "./errorMessages";
import { displayProjects } from "./displayProjects";


export function editTask(task) {
    
    const $editWindow = document.createElement('div');
    $editWindow.classList.add('edit-window');  

    const $container = document.createElement('div');
    $container.classList.add('edit-container');

    const $header = document.createElement('header');
    $header.classList.add('creation__header');
    $header.innerHTML = `
        <h2 class="creation__title">Editing the task</h2>
        <button class="creation__button btn-close">X</button>
    `
    $container.appendChild($header);

    const date = new Date(task.date);
    const year = date.getFullYear();
    const month = '0' + date.getMonth();
    let tempDay = date.getDate(); 
    let day = '';
    if (tempDay < 10) day = '0' + tempDay;
    else day = tempDay;
    const joinedDate = year + '-' + month + '-' + day;

    let priolow = '', priomedium = '', priohigh = '';
    if (task.priority === 'Low') priolow = 'checked';
    else if (task.priority === 'Medium') priomedium = 'checked';
    else priohigh = 'checked';

    const $form = displayCreateTask('edit', task.title, task.details, joinedDate, priolow, priomedium, priohigh, task.project);
    $container.appendChild($form);
    $editWindow.appendChild($container);
    $content.appendChild($editWindow);

    $editWindow.addEventListener('click', function(event) {
        const target = event.target;
    
        if (target.classList.contains('btn-close')) {
            closeWindow($content, $editWindow);
        }
    
        if (target.classList.contains('btn-add')) {
            const $formTitle = $editWindow.querySelector('#form-title');
            const $formDate = $editWindow.querySelector('#form-date');
            const isTitleValid = $formTitle.checkValidity();
            const isDateValid = $formDate.checkValidity();
            // Close the edit window and edit the task 
            if (isTitleValid && isDateValid) {
                const $formDetails = $editWindow.querySelector('#form-details');
                const $formProjectSelect = $editWindow.querySelector('#form-project-list');
                const $prioLow = $editWindow.querySelector('#prio-low');
                const $prioMedium = $editWindow.querySelector('#prio-medium');
                const $prioHigh = $editWindow.querySelector('#prio-high');
                hideErrorMessage($formTitle);
                hideErrorMessage($formDate);
    
                // Create and display the task
                if (tasks.some(element => {
                    return (element.title === $formTitle.value && task.title !== element.title)
                })) {
                    showErrorMessage($formTitle);
                } else {
                    task.title = $formTitle.value;
                    task.date = $formDate.value;
                    task.details = $formDetails.value;
                    task.project = $formProjectSelect.value;
                    if ($prioLow.checked) task.priority = 'Low';
                    else if ($prioMedium.checked) task.priority = 'Medium';
                    else task.priority = 'High';
                    closeWindow($content, $editWindow);
                    displayTasks(task.project);
                    displayProjects(task.project);
                }
            } 
            if(!isTitleValid) {
                showErrorMessage($formTitle);
            }
            if (!isDateValid) {
                showErrorMessage($formDate);
            }
        }
    })
}