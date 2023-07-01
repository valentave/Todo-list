/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-list/./src/style/style.css?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n    constructor(title, details, date, priority, project = 'Home') {\r\n        this._title = title;\r\n        this._details = details;\r\n        this._date = date;\r\n        this._priority = priority; \r\n        this._project = project;\r\n    }\r\n\r\n    set title(ttl) {\r\n        this._title = ttl;\r\n    }\r\n    get title() {\r\n        return this._title;\r\n    }\r\n\r\n    set details(dtls) {\r\n        this._details = dtls;\r\n    }\r\n    get details() {\r\n        return this._details\r\n    }\r\n\r\n    set date(dt) {\r\n        this._date = dt;\r\n    }\r\n    get date() {\r\n        return this._date\r\n    }\r\n\r\n    set priority(prio) {\r\n        this._priority = prio;\r\n    }\r\n    get priority() {\r\n        return this._priority\r\n    }\r\n\r\n    set project(pjct) {\r\n        this._project = pjct;\r\n    }\r\n    get project() {\r\n        return this._project\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Task.js?");

/***/ }),

/***/ "./src/closeWindow.js":
/*!****************************!*\
  !*** ./src/closeWindow.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeWindow: () => (/* binding */ closeWindow)\n/* harmony export */ });\nfunction closeWindow(parentNode,childNode) {\r\n    parentNode.removeChild(childNode);\r\n}\n\n//# sourceURL=webpack://todo-list/./src/closeWindow.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _creationWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creationWindow */ \"./src/creationWindow.js\");\n/* harmony import */ var _displayProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProjects */ \"./src/displayProjects.js\");\n\r\n\r\n\r\nfunction createProject(title) {\r\n    _creationWindow__WEBPACK_IMPORTED_MODULE_0__.projects.push(title);\r\n    (0,_displayProjects__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();\r\n}\n\n//# sourceURL=webpack://todo-list/./src/createProject.js?");

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask)\n/* harmony export */ });\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./src/Task.js\");\n/* harmony import */ var _displayProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProjects.js */ \"./src/displayProjects.js\");\n/* harmony import */ var _displayTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTasks.js */ \"./src/displayTasks.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createTask(title, details, date, priolow, priomedium, priohigh, project) {\r\n    let prio = '';\r\n    if (priolow) prio = 'Low';\r\n    else if (priomedium) prio = 'Medium';\r\n    else if(priohigh) prio = 'High';\r\n\r\n    let dateString = date.split('-');\r\n    let year = parseInt(dateString[0]);\r\n    let month = parseInt(dateString[1]) - 1;\r\n    let day = parseInt(dateString[2]);\r\n\r\n    let newDate = new Date(year, month, day);\r\n\r\n    let timestamp = newDate.getTime();\r\n\r\n    const task = new _Task_js__WEBPACK_IMPORTED_MODULE_0__.Task(title, details, timestamp, prio, project);\r\n    _index_js__WEBPACK_IMPORTED_MODULE_3__.tasks.push(task);\r\n    (0,_displayTasks_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks)();\r\n    (0,_displayProjects_js__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();\r\n}\n\n//# sourceURL=webpack://todo-list/./src/createTask.js?");

/***/ }),

/***/ "./src/creationWindow.js":
/*!*******************************!*\
  !*** ./src/creationWindow.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   $creationWindow: () => (/* binding */ $creationWindow),\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _displayCreation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayCreation.js */ \"./src/displayCreation.js\");\n/* harmony import */ var _closeWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeWindow.js */ \"./src/closeWindow.js\");\n/* harmony import */ var _errorMessages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorMessages.js */ \"./src/errorMessages.js\");\n/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTask.js */ \"./src/createTask.js\");\n/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createProject.js */ \"./src/createProject.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst projects = ['study','sports'];\r\n\r\nconst $creationWindow = document.createElement('div');\r\n$creationWindow.classList.add('creation-window');  \r\n$creationWindow.appendChild((0,_displayCreation_js__WEBPACK_IMPORTED_MODULE_0__.displayCreation)());\r\n$creationWindow.firstChild.lastChild.appendChild((0,_displayCreation_js__WEBPACK_IMPORTED_MODULE_0__.displayCreateTask)());\r\n\r\n$creationWindow.addEventListener('click', function(event) {\r\n    const target = event.target;\r\n    // Close creation window\r\n    if (target.classList.contains('btn-close')) {\r\n        (0,_closeWindow_js__WEBPACK_IMPORTED_MODULE_1__.closeWindow)(_index_js__WEBPACK_IMPORTED_MODULE_5__.$content, $creationWindow);\r\n    }\r\n    // Create a task or project\r\n    if (target.classList.contains('btn-add')) {\r\n        const $radioTask = $creationWindow.querySelector('#creation__task');\r\n        const $radioProject = $creationWindow.querySelector('#creation__project');\r\n        const $formTitle = $creationWindow.querySelector('#form-title');\r\n        // Close the creation window and create a task \r\n        if($radioTask.checked) {\r\n            const $formDate = $creationWindow.querySelector('#form-date');\r\n            const isTitleValid = $formTitle.checkValidity();\r\n            const isDateValid = $formDate.checkValidity();\r\n            if (isTitleValid && isDateValid) {\r\n                const $formDetails = $creationWindow.querySelector('#form-details');\r\n                const $formProjectSelect = $creationWindow.querySelector('#form-project-list');\r\n                const $prioLow = $creationWindow.querySelector('#prio-low');\r\n                const $prioMedium = $creationWindow.querySelector('#prio-medium');\r\n                const $prioHigh = $creationWindow.querySelector('#prio-high');\r\n                (0,_errorMessages_js__WEBPACK_IMPORTED_MODULE_2__.hideErrorMessage)($formTitle);\r\n                (0,_errorMessages_js__WEBPACK_IMPORTED_MODULE_2__.hideErrorMessage)($formDate);\r\n\r\n                // Create and display the task\r\n                if (_index_js__WEBPACK_IMPORTED_MODULE_5__.tasks.some(element => element.title === $formTitle.value)) {\r\n                    (0,_errorMessages_js__WEBPACK_IMPORTED_MODULE_2__.showErrorMessage)($formTitle);\r\n                } else {\r\n                    (0,_createTask_js__WEBPACK_IMPORTED_MODULE_3__.createTask)($formTitle.value, $formDetails.value, $formDate.value, $prioLow.checked, $prioMedium.checked, $prioHigh.checked, $formProjectSelect.value);\r\n                    const form = $creationWindow.querySelector('.creation__form');\r\n                    form.reset();\r\n                }\r\n            } \r\n            if(!isTitleValid) {\r\n                (0,_errorMessages_js__WEBPACK_IMPORTED_MODULE_2__.showErrorMessage)($formTitle);\r\n            }\r\n            if (!isDateValid) {\r\n                (0,_errorMessages_js__WEBPACK_IMPORTED_MODULE_2__.showErrorMessage)($formDate);\r\n            }\r\n        }\r\n        // Close the creation window and create a project \r\n        if($radioProject.checked) {\r\n            const isTitleValid = $formTitle.checkValidity();\r\n            if (isTitleValid) {\r\n                (0,_closeWindow_js__WEBPACK_IMPORTED_MODULE_1__.closeWindow)(_index_js__WEBPACK_IMPORTED_MODULE_5__.$content, $creationWindow);\r\n                (0,_errorMessages_js__WEBPACK_IMPORTED_MODULE_2__.hideErrorMessage)($formTitle);\r\n\r\n                // Create and display the project\r\n                if(projects.includes($formTitle.value)){\r\n                    (0,_errorMessages_js__WEBPACK_IMPORTED_MODULE_2__.showErrorMessage)($formTitle);\r\n                } else {\r\n                    (0,_createProject_js__WEBPACK_IMPORTED_MODULE_4__.createProject)($formTitle.value);\r\n                    const form = $creationWindow.querySelector('.creation__form');\r\n                    form.reset();\r\n                }\r\n            } else {\r\n                (0,_errorMessages_js__WEBPACK_IMPORTED_MODULE_2__.showErrorMessage)($formTitle);\r\n            }\r\n        }\r\n    }\r\n    // Change to create task tab\r\n    if (target.classList.contains('creation__task')) {\r\n        const $formContainer = $creationWindow.firstChild.lastChild.lastChild;\r\n        if ($formContainer.classList.contains('form-project')) {\r\n            $formContainer.parentNode.removeChild($formContainer);\r\n            $creationWindow.firstChild.lastChild.appendChild((0,_displayCreation_js__WEBPACK_IMPORTED_MODULE_0__.displayCreateTask)());\r\n        }\r\n    }\r\n    // Change to create project tab\r\n    if (target.classList.contains('creation__project')) {\r\n        const $formContainer = $creationWindow.firstChild.lastChild.lastChild;\r\n        if ($formContainer.classList.contains('form-task')) {\r\n            $formContainer.parentNode.removeChild($formContainer);\r\n            $creationWindow.firstChild.lastChild.appendChild((0,_displayCreation_js__WEBPACK_IMPORTED_MODULE_0__.displayCreateProject)());\r\n        }\r\n    }\r\n})\n\n//# sourceURL=webpack://todo-list/./src/creationWindow.js?");

/***/ }),

/***/ "./src/displayCreation.js":
/*!********************************!*\
  !*** ./src/displayCreation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayCreateProject: () => (/* binding */ displayCreateProject),\n/* harmony export */   displayCreateTask: () => (/* binding */ displayCreateTask),\n/* harmony export */   displayCreation: () => (/* binding */ displayCreation)\n/* harmony export */ });\n/* harmony import */ var _creationWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creationWindow.js */ \"./src/creationWindow.js\");\n\r\n\r\nfunction displayCreation() {\r\n    const $container = document.createElement('div');\r\n    $container.classList.add('creation-container');\r\n\r\n    const $header = document.createElement('header');\r\n    $header.classList.add('creation__header');\r\n    $header.innerHTML = `\r\n        <h2 class=\"creation__title\">Create a new...</h2>\r\n        <button class=\"creation__button btn-close\">X</button>\r\n    `\r\n    $container.appendChild($header);\r\n\r\n    const $main = document.createElement('main');\r\n    $main.classList.add('creation__main');\r\n\r\n    const $sidebar = document.createElement('section');\r\n    $sidebar.classList.add('creation__sidebar');\r\n    $sidebar.innerHTML = `\r\n        <ul>\r\n            <li>\r\n                <input type=\"radio\" name=\"creation__radio\" id=\"creation__task\" class=\"creation__task\" checked>\r\n                <button><label for=\"creation__task\" class=\"creation__task\">Task</label></button>\r\n            </li>\r\n            <li>\r\n                <input type=\"radio\" name=\"creation__radio\" id=\"creation__project\" class=\"creation__project\">\r\n                <button><label for=\"creation__project\" class=\"creation__project\">Project</label></button>\r\n            </li>\r\n        </ul>\r\n    `\r\n    $main.appendChild($sidebar);\r\n    $container.appendChild($main);\r\n    \r\n    return $container;\r\n}\r\n\r\nfunction displayCreateTask() {\r\n    const $content = document.createElement('section');\r\n    $content.classList.add('creation__form-container');\r\n    $content.classList.add('form-task');\r\n    const $form = document.createElement('form');\r\n    $form.classList.add('creation__form');\r\n    $form.innerHTML = `\r\n        <label for=\"form-title\">Title:</label>\r\n        <input type=\"text\" name=\"title\" id=\"form-title\" required>\r\n        <p class=\"error-message\" style=\"opacity: 0\">Add a title that is not repeated!</p>\r\n        <label for=\"form-details\">Details:</label>\r\n        <textarea type=\"text\" name=\"details\" id=\"form-details\"></textarea>\r\n        <label for=\"form-date\">Due date:</label>\r\n        <input type=\"date\" name=\"date\" id=\"form-date\" required>\r\n        <p class=\"error-message\" style=\"opacity: 0\">Due date is required!</p>\r\n        <p class=\"creation__radio-label\">Priority:</p>\r\n        <input type=\"radio\" name=\"priority\" id=\"prio-low\" required checked>\r\n        <label for=\"prio-low\">Low</label>\r\n        <input type=\"radio\" name=\"priority\" id=\"prio-medium\">\r\n        <label for=\"prio-medium\">Medium</label>\r\n        <input type=\"radio\" name=\"priority\" id=\"prio-high\">\r\n        <label for=\"prio-high\">High</label>\r\n        <label for=\"form-project-list\">Select a project:</label>\r\n    `\r\n\r\n    const $datalist = document.createElement('select');\r\n    $datalist.classList.add('project-selector');\r\n    $datalist.id = 'form-project-list';\r\n\r\n    const $defaultOption = document.createElement('option');\r\n    $defaultOption.value = 'Default';\r\n    $defaultOption.textContent = '--Default--';\r\n    $datalist.appendChild($defaultOption);\r\n\r\n    for (let i = 0; i < _creationWindow_js__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {\r\n        const $option = document.createElement('option');\r\n        $option.value = _creationWindow_js__WEBPACK_IMPORTED_MODULE_0__.projects[i];\r\n        $option.textContent = _creationWindow_js__WEBPACK_IMPORTED_MODULE_0__.projects[i];\r\n        $datalist.appendChild($option);\r\n    }\r\n    $form.appendChild($datalist)\r\n    $content.appendChild($form);\r\n\r\n    const $createButtonContainer = document.createElement('div');\r\n    $createButtonContainer.classList.add('creation__addButton');\r\n    $createButtonContainer.innerHTML = `\r\n        <button class=\"btn-addTask btn-add\">Add task</button>\r\n    `\r\n    $content.appendChild($createButtonContainer);\r\n\r\n    return $content\r\n}\r\n\r\nfunction displayCreateProject() {\r\n    const $content = document.createElement('section');\r\n    $content.classList.add('creation__form-container')\r\n    $content.classList.add('form-project');\r\n    const $form = document.createElement('form');\r\n    $form.classList.add('creation__form');\r\n    $form.innerHTML = `\r\n        <label for=\"form-title\">Title:</label>\r\n        <input type=\"text\" name=\"title\" id=\"form-title\" required>\r\n        <p class=\"error-message\" style=\"opacity: 0\">Add a title that is not repeated!</p>\r\n    `\r\n    $content.appendChild($form);\r\n\r\n    const $createButtonContainer = document.createElement('div');\r\n    $createButtonContainer.classList.add('creation__addButton');\r\n    $createButtonContainer.innerHTML = `\r\n        <button class=\"btn-addTask btn-add\">Add project</button>\r\n    `\r\n    $content.appendChild($createButtonContainer);\r\n\r\n    return $content\r\n}\n\n//# sourceURL=webpack://todo-list/./src/displayCreation.js?");

/***/ }),

/***/ "./src/displayDetails.js":
/*!*******************************!*\
  !*** ./src/displayDetails.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayDetails: () => (/* binding */ displayDetails)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\nfunction displayDetails(task) {\r\n    const $detailsWindow = document.createElement('div');\r\n    $detailsWindow.classList.add('task-details-window')\r\n    $detailsWindow.innerHTML = `\r\n        <div class=\"task-details-container\">\r\n            <header class=\"task-details-header\">\r\n                <h2 class=\"task-title\">${task.title}</h2>\r\n                <button class=\"creation__button btn-close-details\">X</button>\r\n            </header>\r\n            <main class=\"task-details-main\">\r\n                <p class=\"task-details\">${task.details}</p>\r\n            </main>\r\n        </div>\r\n    `\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($detailsWindow);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/displayDetails.js?");

/***/ }),

/***/ "./src/displayProjects.js":
/*!********************************!*\
  !*** ./src/displayProjects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProjects: () => (/* binding */ displayProjects)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _creationWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creationWindow.js */ \"./src/creationWindow.js\");\n\r\n\r\n\r\nfunction displayProjects() {\r\n    const $projectsSidebar = _index_js__WEBPACK_IMPORTED_MODULE_0__.$sidebar.querySelector('.sidebar__projects');\r\n    const $projectsList = $projectsSidebar.querySelector('ul');\r\n    $projectsList.innerHTML = '';\r\n    for (let i = 0; i < _creationWindow_js__WEBPACK_IMPORTED_MODULE_1__.projects.length; i++) {\r\n        const $item = document.createElement('li');\r\n        $item.classList.add('sidebar__project-item');\r\n        $item.innerHTML = `\r\n            <input type=\"radio\" name=\"projects__radio\" id=\"projects__${_creationWindow_js__WEBPACK_IMPORTED_MODULE_1__.projects[i]}\" class=\"sidebar__project-checkbox\">\r\n            <button><label for=\"projects__${_creationWindow_js__WEBPACK_IMPORTED_MODULE_1__.projects[i]}\" class=\"sidebar__project-button\">${_creationWindow_js__WEBPACK_IMPORTED_MODULE_1__.projects[i]}</label></button>\r\n        `\r\n        $projectsList.appendChild($item);\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/displayProjects.js?");

/***/ }),

/***/ "./src/displayTasks.js":
/*!*****************************!*\
  !*** ./src/displayTasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\n\r\nfunction displayTasks(tab = 'Home') {\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.$content.innerHTML = \"\";\r\n    const container = document.createElement('div');\r\n    container.classList.add('task-container');\r\n\r\n    let newTasks = [];\r\n    \r\n    if (tab === 'Today') {\r\n        newTasks = _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.filter(compareDates);\r\n    }\r\n    else if (tab === 'This Week') {\r\n        newTasks = _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.filter(compareWeeks);\r\n    }\r\n    else if (tab === 'This Month') {\r\n        newTasks = _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.filter(compareMonths);\r\n    }\r\n    else if (tab !== 'Home') {\r\n        newTasks = _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.filter(task => task.project === tab);\r\n    }\r\n    else {\r\n        newTasks = [..._index_js__WEBPACK_IMPORTED_MODULE_0__.tasks];\r\n    }\r\n\r\n    newTasks.sort(function(a,b) {\r\n        return a.date - b.date\r\n    })\r\n\r\n    for (let i = 0; i < newTasks.length; i++) {\r\n        const task = document.createElement('div');\r\n        const formatedDate = formatDate(newTasks[i].date);\r\n        task.classList.add('task');\r\n\r\n        task.innerHTML = `\r\n            <div class=\"task-${newTasks[i].priority}\"></div>\r\n            <input type=\"checkbox\" name=\"task-check\" class=\"task-check\">\r\n            <p class=\"task-title\">${newTasks[i].title}</p>\r\n            <button class=\"task-details-btn\">Details</button>\r\n            <p class=\"task-title\">${formatedDate}</p>\r\n            <button class=\"task-edit-btn\">Edit</button>\r\n            <button class=\"task-delete-btn\">Delete</button>\r\n        `\r\n        container.appendChild(task);\r\n    }\r\n\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild(container);\r\n}\r\n\r\nfunction compareDates (task) {\r\n    let taskTimestamp = task.date;\r\n    let today = new Date();\r\n\r\n    let day = today.getDate();\r\n    let month = today.getMonth();\r\n    let year = today.getFullYear();\r\n\r\n    let todayReset = new Date(year, month, day);\r\n    let timestamp = todayReset.getTime();\r\n    return taskTimestamp == timestamp;\r\n}\r\n\r\nfunction calculateWeek(date) {\r\n    let startDate = new Date(date.getFullYear(), 0, 1);\r\n    let days = Math.floor((date - startDate) /\r\n        (24 * 60 * 60 * 1000));\r\n    \r\n    let weekNumber = Math.ceil(days / 7);\r\n    \r\n    return weekNumber\r\n}\r\n\r\nfunction compareWeeks(task) {\r\n    let today = new Date();\r\n    let todayWeek = calculateWeek(today);\r\n\r\n    let taskDate = new Date(task.date);\r\n    let taskWeek = calculateWeek(taskDate);\r\n    \r\n    return todayWeek === taskWeek\r\n}\r\n\r\nfunction compareMonths(task) {\r\n    let today = new Date();\r\n    let todayMonth = today.getMonth();\r\n\r\n    let taskDate = new Date(task.date);\r\n    let taskMonth = taskDate.getMonth();\r\n\r\n    return todayMonth === taskMonth\r\n}\r\n\r\nfunction formatDate(timestamp) {\r\n    let date = new Date(timestamp);\r\n    let day = date.getDate();\r\n    let month = date.getMonth();\r\n    let year = date.getFullYear();\r\n    let monthString = '';\r\n\r\n    switch (month) {\r\n        case 0:\r\n            monthString = 'January';\r\n            break;\r\n        case 1:\r\n            monthString = 'February';\r\n            break;\r\n        case 2:\r\n            monthString = 'March';\r\n            break;\r\n        case 3:\r\n            monthString = 'April';\r\n            break;\r\n        case 4:\r\n            monthString = 'May';\r\n            break;\r\n        case 5:\r\n            monthString = 'June';\r\n            break;\r\n        case 6:\r\n            monthString = 'July';\r\n            break;\r\n        case 7:\r\n            monthString = 'August';\r\n            break;\r\n        case 8:\r\n            monthString = 'September';\r\n            break;\r\n        case 9:\r\n            monthString = 'October';\r\n            break;\r\n        case 10:\r\n            monthString = 'November';\r\n            break;\r\n        case 11:\r\n            monthString = 'December';\r\n            break;\r\n    }\r\n\r\n    let dateString = monthString + ' ' + day + ', ' + year;\r\n    return dateString\r\n}\n\n//# sourceURL=webpack://todo-list/./src/displayTasks.js?");

/***/ }),

/***/ "./src/errorMessages.js":
/*!******************************!*\
  !*** ./src/errorMessages.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideErrorMessage: () => (/* binding */ hideErrorMessage),\n/* harmony export */   showErrorMessage: () => (/* binding */ showErrorMessage)\n/* harmony export */ });\nfunction showErrorMessage(input) {\r\n    input.nextElementSibling.style.opacity = '1';\r\n}\r\n\r\nfunction hideErrorMessage(input) {\r\n    input.nextElementSibling.style.opacity = '0';\r\n}\n\n//# sourceURL=webpack://todo-list/./src/errorMessages.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   $content: () => (/* binding */ $content),\n/* harmony export */   $sidebar: () => (/* binding */ $sidebar),\n/* harmony export */   $sidebarItems: () => (/* binding */ $sidebarItems),\n/* harmony export */   $tasks: () => (/* binding */ $tasks),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _closeWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closeWindow.js */ \"./src/closeWindow.js\");\n/* harmony import */ var _creationWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creationWindow.js */ \"./src/creationWindow.js\");\n/* harmony import */ var _displayDetails_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayDetails.js */ \"./src/displayDetails.js\");\n/* harmony import */ var _displayProjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayProjects.js */ \"./src/displayProjects.js\");\n/* harmony import */ var _displayTasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayTasks.js */ \"./src/displayTasks.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst $content = document.querySelector('.content');\r\nconst $sidebar = document.querySelector('.sidebar');\r\nconst $sidebarItems = $sidebar.querySelector('.sidebar__items');\r\nconst $tasks = document.querySelectorAll('task');\r\nconst tasks = [];\r\n\r\nconst $btnNew = document.querySelector('.btn-new');\r\n\r\n(0,_displayProjects_js__WEBPACK_IMPORTED_MODULE_3__.displayProjects)();\r\n(0,_displayTasks_js__WEBPACK_IMPORTED_MODULE_4__.displayTasks)();\r\n\r\n$btnNew.addEventListener('click', () => {\r\n    // Display creation window\r\n    $content.appendChild(_creationWindow_js__WEBPACK_IMPORTED_MODULE_1__.$creationWindow);\r\n})\r\n\r\n$sidebarItems.addEventListener('click', function(event) {\r\n    const target = event.target;\r\n    if (target.classList.contains('sidebar__project-button')) {\r\n        (0,_displayTasks_js__WEBPACK_IMPORTED_MODULE_4__.displayTasks)(target.textContent);\r\n    }\r\n})\r\n\r\n$content.addEventListener('click', function(event) {\r\n    const target = event.target;\r\n\r\n    if (target.classList.contains('task-delete-btn')) {\r\n        // deleteTask(title)\r\n    }\r\n\r\n    if (target.classList.contains('task-edit-btn')) {\r\n\r\n    }\r\n\r\n    if (target.classList.contains('task-details-btn')) {\r\n        const taskTitle = target.parentNode.querySelector('.task-title').textContent;\r\n        const $selectedTask = tasks.find(element => element.title === taskTitle)\r\n        ;(0,_displayDetails_js__WEBPACK_IMPORTED_MODULE_2__.displayDetails)($selectedTask);\r\n    }\r\n\r\n    if(target.classList.contains('btn-close-details')) {\r\n        const $taskWindow = $content.querySelector('.task-details-window');\r\n        (0,_closeWindow_js__WEBPACK_IMPORTED_MODULE_0__.closeWindow)($content, $taskWindow);\r\n    }\r\n})\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;