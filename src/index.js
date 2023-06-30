import { displayCreation, displayCreateTask, displayCreateProject } from "./displayCreation.js";
import { closeWindow } from "./closeWindow.js";
import { showErrorMessage, hideErrorMessage } from "./errorMessages.js";

const $content = document.querySelector('.content');
const $btnNew = document.querySelector('.btn-new');

$btnNew.addEventListener('click', () => {
    //Display creation window
    const $creationWindow = document.createElement('div');
    $creationWindow.classList.add('creation-window');
    $creationWindow.appendChild(displayCreation());
    $creationWindow.firstChild.lastChild.appendChild(displayCreateTask());
    $content.appendChild($creationWindow);
    
    $creationWindow.addEventListener('click', function(event) {
        const target = event.target;

        if (target.classList.contains('btn-close')) {
            closeWindow($content, $creationWindow);
        }

        if (target.classList.contains('btn-addTask')) {
            const $radioTask = $creationWindow.querySelector('#creation__task');
            const $radioProject = $creationWindow.querySelector('#creation__project');
            if($radioTask.checked) {
                const $formTitle = $creationWindow.querySelector('#form-title');
                const $formDate = $creationWindow.querySelector('#form-date');
                const isTitleValid = $formTitle.checkValidity();
                const isDateValid = $formDate.checkValidity();
                if (isTitleValid && isDateValid) {
                    closeWindow($content, $creationWindow);
                    hideErrorMessage($formTitle);
                    hideErrorMessage($formDate);
                    // CREAR TASK
                } 
                if(!isTitleValid) {
                    showErrorMessage($formTitle);
                }
                if (!isDateValid) {
                    showErrorMessage($formDate);
                }
            }
            if($radioProject.checked) {
                const $formTitle = $creationWindow.querySelector('#form-title');

                const isTitleValid = $formTitle.checkValidity();
                if (isTitleValid) {
                    closeWindow($content, $creationWindow);
                    hideErrorMessage($formTitle);
                    hideErrorMessage($formDate);
                    // CREAR PROJECT
                } else {
                    showErrorMessage($formTitle);
                }
            }
        }

        if (target.classList.contains('creation__task')) {
            const $formContainer = $creationWindow.firstChild.lastChild.lastChild;
            if ($formContainer.classList.contains('form-project')) {
                $formContainer.parentNode.removeChild($formContainer);
                $creationWindow.firstChild.lastChild.appendChild(displayCreateTask());
            }
        }

        if (target.classList.contains('creation__project')) {
            const $formContainer = $creationWindow.firstChild.lastChild.lastChild;
            if ($formContainer.classList.contains('form-task')) {
                $formContainer.parentNode.removeChild($formContainer);
                $creationWindow.firstChild.lastChild.appendChild(displayCreateProject());
            }
        }
    })
})