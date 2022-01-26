/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleaderboard_api_project"] = self["webpackChunkleaderboard_api_project"] || []).push([["api"],{

/***/ "./src/api-module.js":
/*!***************************!*\
  !*** ./src/api-module.js ***!
  \***************************/
/***/ (() => {

eval("const gameName = {\n  name: 'Dhaivy',\n};\n\nconst leaderboardAPIAddress = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';\n\nfetch(leaderboardAPIAddress, {\n  method: 'POST',\n  body: JSON.stringify(gameName),\n  headers: {\n    'Content-type': 'application/json; charset=UTF-8',\n  },\n})\n  .then((response) => {\n    console.log('e:', response);\n    return response.json();\n  })\n  .then((json) => console.log(json));\n\n\n//# sourceURL=webpack://leaderboard-api-project/./src/api-module.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/api-module.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);