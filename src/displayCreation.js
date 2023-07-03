import { projects } from './creationWindow.js';

export function displayCreation() {
    const $container = document.createElement('div');
    $container.classList.add('creation-container');

    const $header = document.createElement('header');
    $header.classList.add('creation__header');
    $header.innerHTML = `
        <h2 class="creation__title">Create a new...</h2>
        <button class="creation__button btn-close">X</button>
    `
    $container.appendChild($header);

    const $main = document.createElement('main');
    $main.classList.add('creation__main');

    const $sidebar = document.createElement('section');
    $sidebar.classList.add('creation__sidebar');
    $sidebar.innerHTML = `
        <ul>
            <li>
                <input type="radio" name="creation__radio" id="creation__task" class="creation__task" checked>
                <button><label for="creation__task" class="creation__task">Task</label></button>
            </li>
            <li>
                <input type="radio" name="creation__radio" id="creation__project" class="creation__project">
                <button><label for="creation__project" class="creation__project">Project</label></button>
            </li>
        </ul>
    `
    $main.appendChild($sidebar);
    $container.appendChild($main);
    
    return $container;
}

export function displayCreateTask(mode = 'create', title = '', details = '', date = '', priolow = 'checked', priomedium = '', priohigh = '', project = 'Home') {
    const $content = document.createElement('section');
    $content.classList.add('creation__form-container');
    $content.classList.add('form-task');
    const $form = document.createElement('form');
    $form.classList.add('creation__form');
    $form.innerHTML = `
        <div class="create-title"> 
            <label for="form-title">Title:</label>
            <input type="text" name="title" id="form-title" required value="${title}">
            <p class="error-message" style="opacity: 0">Add a title that is not repeated!</p>
        </div>
        <div class="create-details"> 
            <label for="form-details">Details:</label>
            <textarea type="text" name="details" id="form-details" value="${details}">${details}</textarea>
        </div>
        <div class="create-date"> 
            <label for="form-date">Due date:</label>
            <input type="date" name="date" id="form-date" required value=${date}>
            <p class="error-message" style="opacity: 0">Due date is required!</p>
        </div>
        <div class="create-prio"> 
            <p class="creation__radio-label">Priority:</p>
            <input type="radio" name="priority" id="prio-low" required ${priolow}>
            <label for="prio-low">Low</label>
            <input type="radio" name="priority" id="prio-medium" ${priomedium}>
            <label for="prio-medium">Medium</label>
            <input type="radio" name="priority" id="prio-high" ${priohigh}>
            <label for="prio-high">High</label>
        </div>
    `

    const $divSelect = document.createElement('div');
    $divSelect.classList.add('create-select');
    $form.appendChild($divSelect);

    const $selectLabel = document.createElement('label');
    $selectLabel.setAttribute('for','form-project-list');
    $selectLabel.textContent = 'Select a project:';
    $divSelect.appendChild($selectLabel);

    const $datalist = document.createElement('select');
    $datalist.classList.add('project-selector');
    $datalist.id = 'form-project-list';

    const $defaultOption = document.createElement('option');
    $defaultOption.value = 'Home';
    $defaultOption.textContent = '--Default--';
    $datalist.appendChild($defaultOption);

    for (let i = 0; i < projects.length; i++) {
        const $option = document.createElement('option');
        $option.value = projects[i];
        $option.textContent = projects[i];
        $datalist.appendChild($option);
    }

    $datalist.value = project;
    $divSelect.appendChild($datalist)
    $content.appendChild($form);

    const $createButtonContainer = document.createElement('div');
    $createButtonContainer.classList.add('creation__addButton');
    let textButton = '';
    if (mode === 'edit') textButton = 'Edit task';
    else textButton = 'Add task'
    $createButtonContainer.innerHTML = `
        <button class="btn-addTask btn-add">${textButton}</button>
    `
    $content.appendChild($createButtonContainer);

    return $content
}

export function displayCreateProject(mode = 'create', title = '') {
    const $content = document.createElement('section');
    $content.classList.add('creation__form-container')
    $content.classList.add('form-project');
    const $form = document.createElement('form');
    $form.classList.add('creation__form');
    $form.innerHTML = `
        <div class="create-title-project">
            <label for="form-title">Title:</label>
            <input type="text" name="title" id="form-title" required value=${title}>
            <p class="error-message" style="opacity: 0">Add a title that is not repeated!</p>
        </div>
    `
    $content.appendChild($form);

    const $createButtonContainer = document.createElement('div');
    $createButtonContainer.classList.add('creation__addButton');
    let buttonText = 'Add project'
    if (mode === 'edit') {
        buttonText = 'Edit project'
    }
    $createButtonContainer.innerHTML = `
        <button class="btn-addTask btn-add">${buttonText}</button>
    `
    $content.appendChild($createButtonContainer);

    return $content
}