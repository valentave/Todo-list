import { $content } from "./index.js";
import { tasks } from "./index.js";

export function displayTasks() {
    $content.innerHTML = "";
    const container = document.createElement('div');
    container.classList.add('task-container');
    for (let i = 0; i < tasks.length; i++) {
        const task = document.createElement('div');
        task.classList.add('task');

        task.innerHTML = `
            <div class="task-${tasks[i].prio}"></div>
            <input type="checkbox" name="task-check" class="task-check">
            <p class="task-title">${tasks[i].title}</p>
            <button class="task-details-btn">Details</button>
            <p class="task-title">${tasks[i].date}</p>
            <button class="task-edit-btn">Edit</button>
            <button class="task-delete-btn">Delete</button>
        `
        container.appendChild(task);
    }

    $content.appendChild(container);
}
