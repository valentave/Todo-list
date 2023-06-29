import { displayCreation } from "./displayCreation.js";

const $content = document.querySelector('.content');
const $btnNew = document.querySelector('.btn-new');
const creationWindow = document.createElement('div');
creationWindow.classList.add('creation-background');


$btnNew.addEventListener('click', () => {
    //Display creation window
    creationWindow.appendChild(displayCreation());
    $content.appendChild(creationWindow);
})