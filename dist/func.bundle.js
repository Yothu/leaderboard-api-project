"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleaderboard_api_project"] = self["webpackChunkleaderboard_api_project"] || []).push([["func"],{

/***/ "./src/func-module.js":
/*!****************************!*\
  !*** ./src/func-module.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleanForms\": () => (/* binding */ cleanForms),\n/* harmony export */   \"appendElementToLeaderboard\": () => (/* binding */ appendElementToLeaderboard),\n/* harmony export */   \"createLeaderboardListElement\": () => (/* binding */ createLeaderboardListElement),\n/* harmony export */   \"createLeaderboardFromAPIResult\": () => (/* binding */ createLeaderboardFromAPIResult),\n/* harmony export */   \"inputsAreAcceptable\": () => (/* binding */ inputsAreAcceptable)\n/* harmony export */ });\nconst createLeaderboardListElement = (newName, newScore) => {\n  const scoreContainer = document.createElement('li');\n  scoreContainer.classList.add('ps-3', 'py-1');\n\n  const scoreText = document.createElement('p');\n  scoreText.classList.add('name', 'm-0', 'font-inter', 'font-20px');\n\n  scoreText.innerHTML = `<b>${newName}</b>: ${newScore}`;\n\n  scoreContainer.appendChild(scoreText);\n\n  return scoreContainer;\n};\n\nconst appendElementToLeaderboard = (elem) => {\n  const leaderboard = document.querySelector('.score-list');\n  leaderboard.appendChild(elem);\n};\n\nconst deleteAllScoresFromLeaderboard = () => {\n  const leaderboard = document.querySelector('.score-list');\n  for (let i = leaderboard.childElementCount - 1; i >= 0; i -= 1) {\n    leaderboard.children[i].remove();\n  }\n};\n\nconst createLeaderboardFromAPIResult = (scoresArray) => {\n  deleteAllScoresFromLeaderboard();\n  for (let i = 0; i < scoresArray.length; i += 1) {\n    const scoreElement = createLeaderboardListElement(scoresArray[i].user, scoresArray[i].score);\n\n    appendElementToLeaderboard(scoreElement);\n  }\n};\n\nconst inputsAreAcceptable = (newName, newScore) => {\n  if (/^[a-zA-Z]/.test(newName) && /^\\d+$/.test(newScore)) {\n    return true;\n  }\n  return false;\n};\n\nconst cleanForms = () => {\n  document.getElementById('name-form').value = '';\n  document.getElementById('score-form').value = '';\n};\n\n\n\n\n//# sourceURL=webpack://leaderboard-api-project/./src/func-module.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/func-module.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);