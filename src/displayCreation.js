export function displayCreation() {
    const container = document.createElement('div');
    container.classList.add('creation-container');

    const header = document.createElement('header');
    header.classList.add('creation__header');
    header.innerHTML = `
        <h2 class="creation__title">Create a new...</h2>
        <button class="creation__button btn-close">X</button>
    `
    container.appendChild(header);

    const main = document.createElement('main');
    main.classList.add('creation__main');

    const sidebar = document.createElement('section');
    sidebar.classList.add('creation__sidebar');
    sidebar.innerHTML = `
        <ul>
            <li><button class="creation__task btn-task">Task</button></li>
            <li><button class="creation__project btn-project">Project</button></li>
        </ul>
    `
    main.appendChild(sidebar);

    const content = document.createElement('section');
    content.classList.add('creation__form-container')
    const form = document.createElement('form');
    form.classList.add('creation__form');
    form.innerHTML = `
        <label for="form-title">Title:</label>
        <input type="text" name="title" id="form-title" required>
        <label for="form-details">Details:</label>
        <textarea type="text" name="details" id="form-details"></textarea>
        <label for="form-date">Due date:</label>
        <input type="date" name="date" id="form-date" required>
        <p class="creation__radio-label">Priority:</p>
        <input type="radio" name="priority" id="prio-low" required>
        <label for="prio-low">Low</label>
        <input type="radio" name="priority" id="prio-medium">
        <label for="prio-medium">Medium</label>
        <input type="radio" name="priority" id="prio-high">
        <label for="prio-high">High</label>
        <button type="submit">Add task</button>
    `
    content.appendChild(form);
    main.appendChild(content);
    container.appendChild(main);
    
    return container;
}