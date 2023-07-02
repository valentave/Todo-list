import { displayCreation, displayCreateTask, displayCreateProject } from "./displayCreation.js";
import { closeWindow } from "./closeWindow.js";
import { showErrorMessage, hideErrorMessage } from "./errorMessages.js";
import { createTask } from "./createTask.js";
import { createProject } from "./createProject.js";
import { $content, tasks } from "./index.js";

export const projects = ['Study','Sports'];

export const $creationWindow = document.createElement('div');
$creationWindow.classList.add('creation-window');  
$creationWindow.appendChild(displayCreation());
$creationWindow.firstChild.lastChild.appendChild(displayCreateTask());

$creationWindow.addEventListener('click', function(event) {
    const target = event.target;
    // Close creation window
    if (target.classList.contains('btn-close')) {
        closeWindow($content, $creationWindow);
    }
    // Create a task or project
    if (target.classList.contains('btn-add')) {
        const $radioTask = $creationWindow.querySelector('#creation__task');
        const $radioProject = $creationWindow.querySelector('#creation__project');
        const $formTitle = $creationWindow.querySelector('#form-title');
        // Close the creation window and create a task 
        if($radioTask.checked) {
            const $formDate = $creationWindow.querySelector('#form-date');
            const isTitleValid = $formTitle.checkValidity();
            const isDateValid = $formDate.checkValidity();
            if (isTitleValid && isDateValid) {
                const $formDetails = $creationWindow.querySelector('#form-details');
                const $formProjectSelect = $creationWindow.querySelector('#form-project-list');
                const $prioLow = $creationWindow.querySelector('#prio-low');
                const $prioMedium = $creationWindow.querySelector('#prio-medium');
                const $prioHigh = $creationWindow.querySelector('#prio-high');
                hideErrorMessage($formTitle);
                hideErrorMessage($formDate);

                // Create and display the task
                if (tasks.some(element => element.title === $formTitle.value)) {
                    showErrorMessage($formTitle);
                } else {
                    createTask($formTitle.value, $formDetails.value, $formDate.value, $prioLow.checked, $prioMedium.checked, $prioHigh.checked, $formProjectSelect.value);
                    const form = $creationWindow.querySelector('.creation__form');
                    form.reset();
                }
            } 
            if(!isTitleValid) {
                showErrorMessage($formTitle);
            }
            if (!isDateValid) {
                showErrorMessage($formDate);
            }
        }
        // Close the creation window and create a project 
        if($radioProject.checked) {
            const isTitleValid = $formTitle.checkValidity();
            if (isTitleValid) {
                closeWindow($content, $creationWindow);
                hideErrorMessage($formTitle);

                // Create and display the project
                if(projects.includes($formTitle.value)){
                    showErrorMessage($formTitle);
                } else {
                    createProject($formTitle.value);
                    const form = $creationWindow.querySelector('.creation__form');
                    form.reset();
                }
            } else {
                showErrorMessage($formTitle);
            }
        }
    }
    // Change to create task tab
    if (target.classList.contains('creation__task')) {
        const $formContainer = $creationWindow.firstChild.lastChild.lastChild;
        if ($formContainer.classList.contains('form-project')) {
            $formContainer.parentNode.removeChild($formContainer);
            $creationWindow.firstChild.lastChild.appendChild(displayCreateTask());
        }
    }
    // Change to create project tab
    if (target.classList.contains('creation__project')) {
        const $formContainer = $creationWindow.firstChild.lastChild.lastChild;
        if ($formContainer.classList.contains('form-task')) {
            $formContainer.parentNode.removeChild($formContainer);
            $creationWindow.firstChild.lastChild.appendChild(displayCreateProject());
        }
    }
})