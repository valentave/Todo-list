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
        const formatedDate = formatDate(newTasks[i].date);
        task.classList.add('task');
        let taskChecked = '';
        if (newTasks[i].checked) taskChecked = 'checked' 

        task.innerHTML = `
            <div class="task-${newTasks[i].priority}"></div>
            <input type="checkbox" name="task-check" class="task-check" ${taskChecked}>
            <p class="task-title">${newTasks[i].title}</p>
            <button class="task-details-btn">Details</button>
            <p class="task-title">${formatedDate}</p>
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

function formatDate(timestamp) {
    let date = new Date(timestamp);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let monthString = '';

    switch (month) {
        case 0:
            monthString = 'January';
            break;
        case 1:
            monthString = 'February';
            break;
        case 2:
            monthString = 'March';
            break;
        case 3:
            monthString = 'April';
            break;
        case 4:
            monthString = 'May';
            break;
        case 5:
            monthString = 'June';
            break;
        case 6:
            monthString = 'July';
            break;
        case 7:
            monthString = 'August';
            break;
        case 8:
            monthString = 'September';
            break;
        case 9:
            monthString = 'October';
            break;
        case 10:
            monthString = 'November';
            break;
        case 11:
            monthString = 'December';
            break;
    }

    let dateString = monthString + ' ' + day + ', ' + year;
    return dateString
}