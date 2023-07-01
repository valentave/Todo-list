import { Task } from "./Task.js";
import { displayProjects } from "./displayProjects.js";
import { displayTasks } from "./displayTasks.js";
import { tasks } from "./index.js";

export function createTask(title, details, date, priolow, priomedium, priohigh, project) {
    let prio = '';
    if (priolow) prio = 'Low';
    else if (priomedium) prio = 'Medium';
    else if(priohigh) prio = 'High';

    let dateString = date.split('-');
    let year = parseInt(dateString[0]);
    let month = parseInt(dateString[1]) - 1;
    let day = parseInt(dateString[2]);

    let newDate = new Date(year, month, day);

    let timestamp = newDate.getTime();

    const task = new Task(title, details, timestamp, prio, project);
    tasks.push(task);
    displayTasks();
    displayProjects();
}