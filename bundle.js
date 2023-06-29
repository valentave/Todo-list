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

/***/ "./src/displayCreation.js":
/*!********************************!*\
  !*** ./src/displayCreation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayCreation: () => (/* binding */ displayCreation)\n/* harmony export */ });\nfunction displayCreation() {\r\n    const container = document.createElement('div');\r\n    container.classList.add('creation-container');\r\n\r\n    const header = document.createElement('header');\r\n    header.classList.add('creation__header');\r\n    header.innerHTML = `\r\n        <h2 class=\"creation__title\">Create a new...</h2>\r\n        <button class=\"creation__button btn-close\">X</button>\r\n    `\r\n    container.appendChild(header);\r\n\r\n    const main = document.createElement('main');\r\n    main.classList.add('creation__main');\r\n\r\n    const sidebar = document.createElement('section');\r\n    sidebar.classList.add('creation__sidebar');\r\n    sidebar.innerHTML = `\r\n        <ul>\r\n            <li><button class=\"creation__task btn-task\">Task</button></li>\r\n            <li><button class=\"creation__project btn-project\">Project</button></li>\r\n        </ul>\r\n    `\r\n    main.appendChild(sidebar);\r\n\r\n    const content = document.createElement('section');\r\n    content.classList.add('creation__form-container')\r\n    const form = document.createElement('form');\r\n    form.classList.add('creation__form');\r\n    form.innerHTML = `\r\n        <label for=\"form-title\">Title:</label>\r\n        <input type=\"text\" name=\"title\" id=\"form-title\" required>\r\n        <label for=\"form-details\">Details:</label>\r\n        <textarea type=\"text\" name=\"details\" id=\"form-details\"></textarea>\r\n        <label for=\"form-date\">Due date:</label>\r\n        <input type=\"date\" name=\"date\" id=\"form-date\" required>\r\n        <p class=\"creation__radio-label\">Priority:</p>\r\n        <input type=\"radio\" name=\"priority\" id=\"prio-low\" required>\r\n        <label for=\"prio-low\">Low</label>\r\n        <input type=\"radio\" name=\"priority\" id=\"prio-medium\">\r\n        <label for=\"prio-medium\">Medium</label>\r\n        <input type=\"radio\" name=\"priority\" id=\"prio-high\">\r\n        <label for=\"prio-high\">High</label>\r\n        <button type=\"submit\">Add task</button>\r\n    `\r\n    content.appendChild(form);\r\n    main.appendChild(content);\r\n    container.appendChild(main);\r\n    \r\n    return container;\r\n}\n\n//# sourceURL=webpack://todo-list/./src/displayCreation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayCreation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayCreation.js */ \"./src/displayCreation.js\");\n\r\n\r\nconst $content = document.querySelector('.content');\r\nconst $btnNew = document.querySelector('.btn-new');\r\nconst creationWindow = document.createElement('div');\r\ncreationWindow.classList.add('creation-background');\r\n\r\n\r\n$btnNew.addEventListener('click', () => {\r\n    //Display creation window\r\n    creationWindow.appendChild((0,_displayCreation_js__WEBPACK_IMPORTED_MODULE_0__.displayCreation)());\r\n    $content.appendChild(creationWindow);\r\n})\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;