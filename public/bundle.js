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

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n    constructor(title, details, date, priority) {\r\n        this._title = title;\r\n        this._details = details;\r\n        this._date = date;\r\n        this._priority = priority; \r\n    }\r\n\r\n    set title(ttl) {\r\n        this._title = ttl;\r\n    }\r\n    get title() {\r\n        return this._title;\r\n    }\r\n\r\n    set details(dtls) {\r\n        this._details = dtls;\r\n    }\r\n    get details() {\r\n        return this._details\r\n    }\r\n\r\n    set date(dt) {\r\n        this._date = dt;\r\n    }\r\n    get date() {\r\n        return this._date\r\n    }\r\n\r\n    set priority(prio) {\r\n        this._priority = prio;\r\n    }\r\n    get priority() {\r\n        return this._priority\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Task.js?");

/***/ }),

/***/ "./src/closeWindow.js":
/*!****************************!*\
  !*** ./src/closeWindow.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeWindow: () => (/* binding */ closeWindow)\n/* harmony export */ });\nfunction closeWindow(parentNode,childNode) {\r\n    parentNode.removeChild(childNode);\r\n}\n\n//# sourceURL=webpack://todo-list/./src/closeWindow.js?");

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask)\n/* harmony export */ });\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./src/Task.js\");\n/* harmony import */ var _displayTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTasks.js */ \"./src/displayTasks.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\n\r\n\r\nfunction createTask(title, details, date, priolow, priomedium, priohigh) {\r\n    let prio = '';\r\n    if (priolow) prio = 'Low';\r\n    else if (priomedium) prio = 'Medium';\r\n    else if(priohigh) prio = 'High';\r\n\r\n    const task = new _Task_js__WEBPACK_IMPORTED_MODULE_0__.Task(title, details, date, prio);\r\n    _index_js__WEBPACK_IMPORTED_MODULE_2__.tasks.push(task);\r\n    (0,_displayTasks_js__WEBPACK_IMPORTED_MODULE_1__.displayTasks)();\r\n}\n\n//# sourceURL=webpack://todo-list/./src/createTask.js?");

/***/ }),

/***/ "./src/creationWindow.js":
/*!*******************************!*\
  !*** ./src/creationWindow.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   $creationWindow: () => (/* binding */ $creationWindow)\n/* harmony export */ });\n/* harmony import */ var _displayCreation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayCreation.js */ \"./src/displayCreation.js\");\n/* harmony import */ var _closeWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeWindow.js */ \"./src/closeWindow.js\");\n/* harmony import */ var _errorMessages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorMessages.js */ \"./src/errorMessages.js\");\n/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTask.js */ \"./src/createTask.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst $creationWindow = document.createElement('div');\r\n$creationWindow.classList.add('creation-window');\r\n$creationWindow.appendChild((0,_displayCreation_js__WEBPACK_IMPORTED_MODULE_0__.displayCreation)());\r\n$creationWindow.firstChild.lastChild.appendChild((0,_displayCreation_js__WEBPACK_IMPORTED_MODULE_0__.displayCreateTask)());\r\n\r\n$creationWindow.addEventListener('click', function(event) {\r\n    const target = event.target;\r\n    // Close creation window\r\n    if (target.classList.contains('btn-close')) {\r\n        (0,_closeWindow_js__WEBPACK_IMPORTED_MODULE_1__.closeWindow)(_index_js__WEBPACK_IMPORTED_MODULE_4__.$content, $creationWindow);\r\n    }\r\n    // Create a task or project\r\n    if (target.classList.contains('btn-add')) {\r\n        const $radioTask = $creationWindow.querySelector('#creation__task');\r\n        const $radioProject = $creationWindow.querySelector('#creation__project');\r\n        const $formTitle = $creationWindow.querySelector('#form-title');\r\n        // Close the creation window and create a task \r\n        if($radioTask.checked) {\r\n            const $formDate = $creationWindow.querySelector('#form-date');\r\n            const isTitleValid = $formTitle.checkValidity();\r\n            const isDateValid = $formDate.checkValidity();\r\n            if (isTitleValid && isDateValid) {\r\n                const $formDetails = $creationWindow.querySelector('#form-details');\r\n                const $prioLow = $creationWindow.querySelector('#prio-low');\r\n                const $prioMedium = $creationWindow.querySelector('#prio-medium');\r\n                const $prioHigh = $creationWindow.querySelector('#prio-high');\r\n                (0,_errorMessages_js__WEBPACK_IMPORTED_MODULE_2__.hideErrorMessage)($formTitle);\r\n                (0,_errorMessages_js__WEBPACK_IMPORTED_MODULE_2__.hideErrorMessage)($formDate);\r\n                // Create the task\r\n                (0,_createTask_js__WEBPACK_IMPORTED_MODULE_3__.createTask)($formTitle.value, $formDetails.value, $formDate.value, $prioLow.checked, $prioMedium.checked, $prioHigh.checked);\r\n\r\n                const form = $creationWindow.querySelector('.creation__form');\r\n                form.reset();\r\n            } \r\n            if(!isTitleValid) {\r\n                (0,_errorMessages_js__WEBPACK_IMPORTED_MODULE_2__.showErrorMessage)($formTitle);\r\n            }\r\n            if (!isDateValid) {\r\n                (0,_errorMessages_js__WEBPACK_IMPORTED_MODULE_2__.showErrorMessage)($formDate);\r\n            }\r\n        }\r\n        // Close the creation window and create a project \r\n        if($radioProject.checked) {\r\n            const isTitleValid = $formTitle.checkValidity();\r\n            if (isTitleValid) {\r\n                (0,_closeWindow_js__WEBPACK_IMPORTED_MODULE_1__.closeWindow)(_index_js__WEBPACK_IMPORTED_MODULE_4__.$content, $creationWindow);\r\n                (0,_errorMessages_js__WEBPACK_IMPORTED_MODULE_2__.hideErrorMessage)($formTitle);\r\n                const form = $creationWindow.querySelector('.creation__form');\r\n                form.reset();\r\n                // CREAR PROJECT\r\n\r\n            } else {\r\n                (0,_errorMessages_js__WEBPACK_IMPORTED_MODULE_2__.showErrorMessage)($formTitle);\r\n            }\r\n        }\r\n    }\r\n    // Change to create task tab\r\n    if (target.classList.contains('creation__task')) {\r\n        const $formContainer = $creationWindow.firstChild.lastChild.lastChild;\r\n        if ($formContainer.classList.contains('form-project')) {\r\n            $formContainer.parentNode.removeChild($formContainer);\r\n            $creationWindow.firstChild.lastChild.appendChild((0,_displayCreation_js__WEBPACK_IMPORTED_MODULE_0__.displayCreateTask)());\r\n        }\r\n    }\r\n    // Change to create project tab\r\n    if (target.classList.contains('creation__project')) {\r\n        const $formContainer = $creationWindow.firstChild.lastChild.lastChild;\r\n        if ($formContainer.classList.contains('form-task')) {\r\n            $formContainer.parentNode.removeChild($formContainer);\r\n            $creationWindow.firstChild.lastChild.appendChild((0,_displayCreation_js__WEBPACK_IMPORTED_MODULE_0__.displayCreateProject)());\r\n        }\r\n    }\r\n})\n\n//# sourceURL=webpack://todo-list/./src/creationWindow.js?");

/***/ }),

/***/ "./src/displayCreation.js":
/*!********************************!*\
  !*** ./src/displayCreation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayCreateProject: () => (/* binding */ displayCreateProject),\n/* harmony export */   displayCreateTask: () => (/* binding */ displayCreateTask),\n/* harmony export */   displayCreation: () => (/* binding */ displayCreation)\n/* harmony export */ });\nfunction displayCreation() {\r\n    const $container = document.createElement('div');\r\n    $container.classList.add('creation-container');\r\n\r\n    const $header = document.createElement('header');\r\n    $header.classList.add('creation__header');\r\n    $header.innerHTML = `\r\n        <h2 class=\"creation__title\">Create a new...</h2>\r\n        <button class=\"creation__button btn-close\">X</button>\r\n    `\r\n    $container.appendChild($header);\r\n\r\n    const $main = document.createElement('main');\r\n    $main.classList.add('creation__main');\r\n\r\n    const $sidebar = document.createElement('section');\r\n    $sidebar.classList.add('creation__sidebar');\r\n    $sidebar.innerHTML = `\r\n        <ul>\r\n            <li>\r\n                <input type=\"radio\" name=\"creation__radio\" id=\"creation__task\" class=\"creation__task\" checked>\r\n                <button><label for=\"creation__task\" class=\"creation__task\">Task</label></button>\r\n            </li>\r\n            <li>\r\n                <input type=\"radio\" name=\"creation__radio\" id=\"creation__project\" class=\"creation__project\">\r\n                <button><label for=\"creation__project\" class=\"creation__project\">Project</label></button>\r\n            </li>\r\n        </ul>\r\n    `\r\n    $main.appendChild($sidebar);\r\n    $container.appendChild($main);\r\n    \r\n    return $container;\r\n}\r\n\r\nfunction displayCreateTask() {\r\n    const $content = document.createElement('section');\r\n    $content.classList.add('creation__form-container');\r\n    $content.classList.add('form-task');\r\n    const $form = document.createElement('form');\r\n    $form.classList.add('creation__form');\r\n    $form.innerHTML = `\r\n        <label for=\"form-title\">Title:</label>\r\n        <input type=\"text\" name=\"title\" id=\"form-title\" required>\r\n        <p class=\"error-message\" style=\"opacity: 0\">A title is required!</p>\r\n        <label for=\"form-details\">Details:</label>\r\n        <textarea type=\"text\" name=\"details\" id=\"form-details\"></textarea>\r\n        <label for=\"form-date\">Due date:</label>\r\n        <input type=\"date\" name=\"date\" id=\"form-date\" required>\r\n        <p class=\"error-message\" style=\"opacity: 0\">Due date is required!</p>\r\n        <p class=\"creation__radio-label\">Priority:</p>\r\n        <input type=\"radio\" name=\"priority\" id=\"prio-low\" required checked>\r\n        <label for=\"prio-low\">Low</label>\r\n        <input type=\"radio\" name=\"priority\" id=\"prio-medium\">\r\n        <label for=\"prio-medium\">Medium</label>\r\n        <input type=\"radio\" name=\"priority\" id=\"prio-high\">\r\n        <label for=\"prio-high\">High</label>\r\n    `\r\n    $content.appendChild($form);\r\n\r\n    const $createButtonContainer = document.createElement('div');\r\n    $createButtonContainer.classList.add('creation__addButton');\r\n    $createButtonContainer.innerHTML = `\r\n        <button class=\"btn-addTask btn-add\">Add task</button>\r\n    `\r\n    $content.appendChild($createButtonContainer);\r\n\r\n    return $content\r\n}\r\n\r\nfunction displayCreateProject() {\r\n    const $content = document.createElement('section');\r\n    $content.classList.add('creation__form-container')\r\n    $content.classList.add('form-project');\r\n    const $form = document.createElement('form');\r\n    $form.classList.add('creation__form');\r\n    $form.innerHTML = `\r\n        <label for=\"form-title\">Title:</label>\r\n        <input type=\"text\" name=\"title\" id=\"form-title\" required>\r\n        <p class=\"error-message\" style=\"opacity: 0\">A title is required!</p>\r\n    `\r\n    $content.appendChild($form);\r\n\r\n    const $createButtonContainer = document.createElement('div');\r\n    $createButtonContainer.classList.add('creation__addButton');\r\n    $createButtonContainer.innerHTML = `\r\n        <button class=\"btn-addTask btn-add\">Add project</button>\r\n    `\r\n    $content.appendChild($createButtonContainer);\r\n\r\n    return $content\r\n}\n\n//# sourceURL=webpack://todo-list/./src/displayCreation.js?");

/***/ }),

/***/ "./src/displayTasks.js":
/*!*****************************!*\
  !*** ./src/displayTasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\n\r\nfunction displayTasks() {\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.$content.innerHTML = \"\";\r\n    const container = document.createElement('div');\r\n    container.classList.add('task-container');\r\n    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i++) {\r\n        const task = document.createElement('div');\r\n        task.classList.add('task');\r\n\r\n        task.innerHTML = `\r\n            <div class=\"task-${_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].prio}\"></div>\r\n            <input type=\"checkbox\" name=\"task-check\" class=\"task-check\">\r\n            <p class=\"task-title\">${_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].title}</p>\r\n            <button class=\"task-details-btn\">Details</button>\r\n            <p class=\"task-title\">${_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].date}</p>\r\n            <button class=\"task-edit-btn\">Edit</button>\r\n            <button class=\"task-delete-btn\">Delete</button>\r\n        `\r\n        container.appendChild(task);\r\n    }\r\n\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild(container);\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/displayTasks.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   $content: () => (/* binding */ $content),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _creationWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creationWindow.js */ \"./src/creationWindow.js\");\n\r\n\r\nconst $content = document.querySelector('.content');\r\nconst projects = [];\r\nconst tasks = [];\r\n\r\nconst $btnNew = document.querySelector('.btn-new');\r\n\r\n$btnNew.addEventListener('click', () => {\r\n    // Display creation window\r\n    $content.appendChild(_creationWindow_js__WEBPACK_IMPORTED_MODULE_0__.$creationWindow);\r\n})\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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