import { $content } from "./index.js"

export function displayDetails(task) {
    const $detailsWindow = document.createElement('div');
    $detailsWindow.classList.add('task-details-window')
    $detailsWindow.innerHTML = `
        <div class="task-details-container">
            <header class="task-details-header">
                <h2 class="task-title">${task.title}</h2>
                <button class="creation__button btn-close-details   ">X</button>
            </header>
            <main class="task-details-main">
                <p class="task-details">${task.details}</p>
            </main>
        </div>
    `
    $content.appendChild($detailsWindow);
}

