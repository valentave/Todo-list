import { projects } from "./creationWindow";
import { $content, tasks } from "./index";
import { hideErrorMessage, showErrorMessage } from "./errorMessages";
import { displayCreateProject } from "./displayCreation";
import { displayTasks } from "./displayTasks";
import { displayProjects } from "./displayProjects";
import { closeWindow } from "./closeWindow"; 

export function editProject(projectName) {
    const projIndex = projects.findIndex(element => element === projectName);
    
    const $editProjectWindow = document.createElement('div');
    $editProjectWindow.classList.add('edit-window'); 

    
    const $container = document.createElement('div');
    $container.classList.add('edit-container');

    const $header = document.createElement('header');
    $header.classList.add('creation__header');
    $header.innerHTML = `
        <h2 class="creation__title">Editing the project</h2>
        <button class="creation__button btn-close">X</button>
    `
    $container.appendChild($header);

    
    const $form = displayCreateProject('edit', projectName);
    $container.appendChild($form);
    $editProjectWindow.appendChild($container);
    $content.appendChild($editProjectWindow);

    $editProjectWindow.addEventListener('click', function(event) {
        const target = event.target;

        if (target.classList.contains('btn-close')) {
            closeWindow($content, $editProjectWindow);
        }

        if (target.classList.contains('btn-add')) {
            const $formTitle = $editProjectWindow.querySelector('#form-title');
            const isTitleValid = $formTitle.checkValidity();
            
            // Close the edit window and edit the project
            if(isTitleValid) {
                hideErrorMessage($formTitle);

                if(projects.some(element => {
                    return (element === $formTitle.value)
                })) {
                    showErrorMessage($formTitle);
                } else {
                    projects[projIndex] = $formTitle.value;
                    tasks.map(element => {
                        if (element.project === projectName) {
                            element.project = $formTitle.value;
                        }
                        return element;
                    })
                    closeWindow($content, $editProjectWindow);
                    displayTasks(projects[projIndex]);
                    displayProjects(projects[projIndex]);
                }
            }
            if(!isTitleValid) {
                showErrorMessage($formTitle);
            }
        }
    })
}