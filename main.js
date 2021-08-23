/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const todoList = document.querySelector(\".item\");\r\nconst todo = [\r\n  {\r\n    description: \"Todo list one\",\r\n    completed: false,\r\n    index: 1,\r\n  },\r\n  {\r\n    description: \"Todo list two\",\r\n    completed: false,\r\n    index: 2,\r\n  },\r\n  {\r\n    description: \"Todo list three\",\r\n    completed: false,\r\n    index: 3,\r\n  },\r\n];\r\n\r\nconst displayList = () => {\r\n  for (let i = 0; i < todo.length; i++) {\r\n    todoList.innerHTML += `<li class=\"list-group-item\"><input type=\"checkbox\"><p>${todo[i].description}</p><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></li>`;\r\n  }\r\n  return todoList;\r\n};\r\n\r\ndisplayList();\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;