import { $sidebar } from "./index.js";
import { projects } from "./creationWindow.js";

export function displayProjects(tab = 'Home') {
    const $projectsSidebar = $sidebar.querySelector('.sidebar__projects');
    const $projectsList = $projectsSidebar.querySelector('ul');
    $projectsList.innerHTML = '';
    for (let i = 0; i < projects.length; i++) {
        const $item = document.createElement('li');
        $item.classList.add('sidebar__project-item');
        let checked = '';
        if(projects[i] === tab) checked = 'checked';
        $item.innerHTML = `
            <input type="radio" name="projects__radio" id="projects__${projects[i]}" class="sidebar__project-checkbox" ${checked}>
            <button><label for="projects__${projects[i]}" class="sidebar__project-button">${projects[i]}</label></button>
        `
        $projectsList.appendChild($item);
    }
}