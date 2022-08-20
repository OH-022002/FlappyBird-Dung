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

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FLAP_VELOCITY\": () => (/* binding */ FLAP_VELOCITY),\n/* harmony export */   \"FPS\": () => (/* binding */ FPS),\n/* harmony export */   \"GAME_GRAVITY\": () => (/* binding */ GAME_GRAVITY),\n/* harmony export */   \"GAME_HEIGHT\": () => (/* binding */ GAME_HEIGHT),\n/* harmony export */   \"GAME_SPEED\": () => (/* binding */ GAME_SPEED),\n/* harmony export */   \"GAME_WIDTH\": () => (/* binding */ GAME_WIDTH),\n/* harmony export */   \"GRAVITY\": () => (/* binding */ GRAVITY),\n/* harmony export */   \"PIPE_DISTANCE\": () => (/* binding */ PIPE_DISTANCE)\n/* harmony export */ });\nconst GAME_WIDTH = 288;\r\nconst GAME_HEIGHT = 512;\r\nconst GRAVITY = 0.2;\r\nconst FPS = 60;\r\nconst GAME_SPEED = 1;\r\nconst GAME_GRAVITY = 0.2;\r\nconst FLAP_VELOCITY = 10;\r\nconst PIPE_DISTANCE = 180;\r\n\r\n\n\n//# sourceURL=webpack:///./src/config/config.ts?");

/***/ }),

/***/ "./src/game/game.ts":
/*!**************************!*\
  !*** ./src/game/game.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.ts\");\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\r\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\r\n};\r\nvar _Game_instances, _Game_updateFrame, _Game_checkCollosion, _Game_updatePoint;\r\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor(id) {\r\n        _Game_instances.add(this);\r\n        this.isCollision = false;\r\n        this.countFrame = 0;\r\n        this.countPoint = 0;\r\n        const canvas = document.getElementById(id);\r\n        this.context = canvas.getContext(\"2d\");\r\n        canvas.width = _config_config__WEBPACK_IMPORTED_MODULE_0__.GAME_WIDTH;\r\n        canvas.height = _config_config__WEBPACK_IMPORTED_MODULE_0__.GAME_HEIGHT;\r\n        canvas.addEventListener(\"click\", () => {\r\n            if (!this.isCollision) {\r\n                this.bird.flap();\r\n            }\r\n        });\r\n    }\r\n    setBird(bird) {\r\n        this.bird = bird;\r\n    }\r\n    setBase(base) {\r\n        this.base = base;\r\n    }\r\n    setBackground(background) {\r\n        this.background = background;\r\n    }\r\n    setPipe(pipe) {\r\n        this.pipe = pipe;\r\n    }\r\n    setPoint(point) {\r\n        this.point = point;\r\n    }\r\n    start() {\r\n        __classPrivateFieldGet(this, _Game_instances, \"m\", _Game_updateFrame).call(this);\r\n    }\r\n}\r\n_Game_instances = new WeakSet(), _Game_updateFrame = function _Game_updateFrame() {\r\n    __classPrivateFieldGet(this, _Game_instances, \"m\", _Game_checkCollosion).call(this);\r\n    __classPrivateFieldGet(this, _Game_instances, \"m\", _Game_updatePoint).call(this);\r\n    this.countFrame++;\r\n    this.context.clearRect(0, 0, _config_config__WEBPACK_IMPORTED_MODULE_0__.GAME_WIDTH, _config_config__WEBPACK_IMPORTED_MODULE_0__.GAME_HEIGHT);\r\n    this.background.update();\r\n    this.pipe.update();\r\n    this.base.update();\r\n    this.bird.update();\r\n    this.point.update();\r\n    setTimeout(() => __classPrivateFieldGet(this, _Game_instances, \"m\", _Game_updateFrame).call(this), 1000 / _config_config__WEBPACK_IMPORTED_MODULE_0__.FPS);\r\n}, _Game_checkCollosion = function _Game_checkCollosion() {\r\n    if ((this.bird.position.x + 34 > this.pipe.position.x) && this.bird.position.x < this.pipe.position.x + 52) {\r\n        if (!((this.bird.position.y > (-this.pipe.position.y)) && ((this.bird.position.y + 24) < (-this.pipe.position.y) + _config_config__WEBPACK_IMPORTED_MODULE_0__.PIPE_DISTANCE))) {\r\n            this.isCollision = true;\r\n        }\r\n    }\r\n    if (this.bird.position.y < 0 || this.bird.position.y + 24 > 400) {\r\n        this.isCollision = true;\r\n    }\r\n}, _Game_updatePoint = function _Game_updatePoint() {\r\n    if (this.pipe.position.x === (100 - 52)) {\r\n        this.countPoint++;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/game/game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game */ \"./src/game/game.ts\");\n/* harmony import */ var _object_game_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object-game/background */ \"./src/object-game/background.ts\");\n/* harmony import */ var _object_game_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object-game/base */ \"./src/object-game/base.ts\");\n/* harmony import */ var _object_game_bird__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object-game/bird */ \"./src/object-game/bird.ts\");\n/* harmony import */ var _object_game_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object-game/pipe */ \"./src/object-game/pipe.ts\");\n/* harmony import */ var _object_game_point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object-game/point */ \"./src/object-game/point.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction main() {\r\n    const game = new _game_game__WEBPACK_IMPORTED_MODULE_0__.Game(\"game\");\r\n    const bird = new _object_game_bird__WEBPACK_IMPORTED_MODULE_3__.Bird(game, \"./assets/img/redbird-upflap.png\", \"./assets/img/redbird-midflap.png\", \"./assets/img/redbird-downflap.png\");\r\n    const background = new _object_game_background__WEBPACK_IMPORTED_MODULE_1__.Backgroud(game, \"./assets/img/background-day.png\");\r\n    const base = new _object_game_base__WEBPACK_IMPORTED_MODULE_2__.Base(game, \"./assets/img/base.png\");\r\n    const pipe = new _object_game_pipe__WEBPACK_IMPORTED_MODULE_4__.Pipe(game, \"./assets/img/pipe-green.png\");\r\n    const point = new _object_game_point__WEBPACK_IMPORTED_MODULE_5__.Point(game, \"./assets/img/0.png\");\r\n    game.setBackground(background);\r\n    game.setBird(bird);\r\n    game.setBase(base);\r\n    game.setPipe(pipe);\r\n    game.setPoint(point);\r\n    game.start();\r\n}\r\nmain();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/object-game/background.ts":
/*!***************************************!*\
  !*** ./src/object-game/background.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Backgroud\": () => (/* binding */ Backgroud)\n/* harmony export */ });\n/* harmony import */ var _object_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-game */ \"./src/object-game/object-game.ts\");\n\r\nclass Backgroud extends _object_game__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(game, imagePath) {\r\n        super(game, imagePath);\r\n        this.position = {\r\n            x: 0,\r\n            y: 0\r\n        };\r\n    }\r\n    update() {\r\n        this.game.context.drawImage(this.image, this.position.x, this.position.y);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/object-game/background.ts?");

/***/ }),

/***/ "./src/object-game/base.ts":
/*!*********************************!*\
  !*** ./src/object-game/base.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Base\": () => (/* binding */ Base)\n/* harmony export */ });\n/* harmony import */ var _object_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-game */ \"./src/object-game/object-game.ts\");\n\r\nclass Base extends _object_game__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(game, imagePath) {\r\n        super(game, imagePath);\r\n        this.position = {\r\n            x: 0,\r\n            y: 400\r\n        };\r\n    }\r\n    update() {\r\n        this.game.context.drawImage(this.image, this.position.x, this.position.y);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/object-game/base.ts?");

/***/ }),

/***/ "./src/object-game/bird.ts":
/*!*********************************!*\
  !*** ./src/object-game/bird.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bird\": () => (/* binding */ Bird)\n/* harmony export */ });\n/* harmony import */ var _object_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-game */ \"./src/object-game/object-game.ts\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.ts\");\n\r\n\r\n\r\nclass Bird extends _object_game__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(game, imageUp, imageMid, imageDown) {\r\n        super(game, imageUp);\r\n        this.velocity = 1;\r\n        this.images = [];\r\n        this.flapIndexImage = 0;\r\n        const imageMidElement = new Image();\r\n        imageMidElement.src = imageMid;\r\n        const imageDownElement = new Image();\r\n        imageDownElement.src = imageDown;\r\n        this.images = [this.image, imageMidElement, imageDownElement];\r\n        this.position = {\r\n            x: 100,\r\n            y: 100,\r\n        };\r\n    }\r\n    flap() {\r\n        this.velocity -= _config_config__WEBPACK_IMPORTED_MODULE_1__.FLAP_VELOCITY;\r\n    }\r\n    update() {\r\n        this.velocity += _config_config__WEBPACK_IMPORTED_MODULE_1__.GAME_GRAVITY;\r\n        this.position.y += this.velocity;\r\n        let drawImage = this.images[this.flapIndexImage];\r\n        if (this.position.y + 24 > 400) {\r\n            this.position.y = 400;\r\n        }\r\n        if (this.game.countFrame % (_config_config__WEBPACK_IMPORTED_MODULE_1__.FPS / 3) === 0) {\r\n            this.flapIndexImage++;\r\n            if (this.flapIndexImage === 3) {\r\n                this.flapIndexImage = 0;\r\n            }\r\n        }\r\n        if (this.game.isCollision) {\r\n            drawImage = this.images[0];\r\n        }\r\n        this.game.context.drawImage(drawImage, this.position.x, this.position.y);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/object-game/bird.ts?");

/***/ }),

/***/ "./src/object-game/object-game.ts":
/*!****************************************!*\
  !*** ./src/object-game/object-game.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameObject\": () => (/* binding */ GameObject)\n/* harmony export */ });\nclass GameObject {\r\n    constructor(game, imagePath) {\r\n        this.game = game;\r\n        this.image = new Image();\r\n        this.image.src = imagePath;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/object-game/object-game.ts?");

/***/ }),

/***/ "./src/object-game/pipe.ts":
/*!*********************************!*\
  !*** ./src/object-game/pipe.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pipe\": () => (/* binding */ Pipe)\n/* harmony export */ });\n/* harmony import */ var _object_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-game */ \"./src/object-game/object-game.ts\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.ts\");\n\r\n\r\n\r\n\r\nclass Pipe extends _object_game__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(game, imagePath) {\r\n        super(game, imagePath);\r\n        this.position = {\r\n            x: _config_config__WEBPACK_IMPORTED_MODULE_1__.GAME_WIDTH,\r\n            y: -150,\r\n        };\r\n    }\r\n    update() {\r\n        if (!this.game.isCollision) {\r\n            this.position.x -= 1;\r\n        }\r\n        if (this.position.x === -52) {\r\n            this.position.x = _config_config__WEBPACK_IMPORTED_MODULE_1__.GAME_WIDTH;\r\n            this.position.y = -Math.floor(Math.random() * 240) + 20;\r\n        }\r\n        this.game.context.scale(1, -1);\r\n        this.game.context.drawImage(this.image, this.position.x, this.position.y);\r\n        this.game.context.scale(1, -1);\r\n        this.game.context.drawImage(this.image, this.position.x, -this.position.y + _config_config__WEBPACK_IMPORTED_MODULE_1__.PIPE_DISTANCE);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/object-game/pipe.ts?");

/***/ }),

/***/ "./src/object-game/point.ts":
/*!**********************************!*\
  !*** ./src/object-game/point.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Point\": () => (/* binding */ Point)\n/* harmony export */ });\n/* harmony import */ var _object_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-game */ \"./src/object-game/object-game.ts\");\n\r\n\r\nclass Point extends _object_game__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(game, imagePath) {\r\n        super(game, imagePath);\r\n        this.position = {\r\n            x: 144,\r\n            y: 100,\r\n        };\r\n    }\r\n    update() {\r\n        const pointStringType = this.game.countPoint.toString();\r\n        for (let i = 0; i < pointStringType.length; i++) {\r\n            this.image = new Image();\r\n            this.image.src = `./assets/img/${pointStringType.charAt(i)}.png`;\r\n            this.game.context.drawImage(this.image, ((this.position.x - 12 * pointStringType.length + 24 * i)), this.position.y);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/object-game/point.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;