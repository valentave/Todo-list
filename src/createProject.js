import { projects } from "./creationWindow";
import { displayProjects } from "./displayProjects";

export function createProject(title) {
    projects.push(title);
    displayProjects();
}