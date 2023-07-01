import { Task } from "./Task.js";
import { displayTasks } from "./displayTasks.js";
import { tasks } from "./index.js";

export function createTask(title, details, date, priolow, priomedium, priohigh) {
    let prio = '';
    if (priolow) prio = 'Low';
    else if (priomedium) prio = 'Medium';
    else if(priohigh) prio = 'High';

    const task = new Task(title, details, date, prio);
    tasks.push(task);
    displayTasks();
}