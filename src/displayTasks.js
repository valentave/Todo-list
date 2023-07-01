import { $content } from "./index.js";
import { tasks } from "./index.js";

export function displayTasks(tab = 'Home') {
    $content.innerHTML = "";
    const container = document.createElement('div');
    container.classList.add('task-container');

    let newTasks = [];
    
    if (tab === 'Today') {
        newTasks = tasks.filter(compareDates);
    }
    else if (tab === 'This Week') {
        newTasks = tasks.filter(compareWeeks);
    }
    else if (tab === 'This Month') {
        newTasks = tasks.filter(compareMonths);
    }
    else if (tab !== 'Home') {
        newTasks = tasks.filter(task => task.project === tab);
    }
    else {
        newTasks = [...tasks];
    }

    newTasks.sort(function(a,b) {
        return a.date - b.date
    })

    for (let i = 0; i < newTasks.length; i++) {
        const task = document.createElement('div');
        task.classList.add('task');

        task.innerHTML = `
            <div class="task-${newTasks[i].prio}"></div>
            <input type="checkbox" name="task-check" class="task-check">
            <p class="task-title">${newTasks[i].title}</p>
            <button class="task-details-btn">Details</button>
            <p class="task-title">${newTasks[i].date}</p>
            <button class="task-edit-btn">Edit</button>
            <button class="task-delete-btn">Delete</button>
        `
        container.appendChild(task);
    }

    $content.appendChild(container);
}

function compareDates (task) {
    let taskTimestamp = task.date;
    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    let todayReset = new Date(year, month, day);
    let timestamp = todayReset.getTime();
    return taskTimestamp == timestamp;
}

function calculateWeek(date) {
    let startDate = new Date(date.getFullYear(), 0, 1);
    let days = Math.floor((date - startDate) /
        (24 * 60 * 60 * 1000));
    
    let weekNumber = Math.ceil(days / 7);
    
    return weekNumber
}

function compareWeeks(task) {
    let today = new Date();
    let todayWeek = calculateWeek(today);

    let taskDate = new Date(task.date);
    let taskWeek = calculateWeek(taskDate);
    
    return todayWeek === taskWeek
}

function compareMonths(task) {
    let today = new Date();
    let todayMonth = today.getMonth();

    let taskDate = new Date(task.date);
    let taskMonth = taskDate.getMonth();

    return todayMonth === taskMonth
}

function compareProjects() {

}