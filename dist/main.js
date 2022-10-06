/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Car; }\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Car extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(dimensions) {\n    super(dimensions);\n    this.jumpNum = 0;\n    this.positionx = this.dimensions.width / 4;\n    this.positiony = this.dimensions.height / 2;\n    this.velocityX = CONSTANTS.VEL_X;\n    this.velocityY = CONSTANTS.VEL_Y;\n  }\n\n  animate(ctx) {\n    this.drawCar(ctx);\n    this.move();\n  }\n\n  move() {\n    this.positiony += this.velocityY;\n    this.velocityY += CONSTANTS.GRAVITY;\n  }\n\n  preJump() {\n    if (this.jumpNum < 1.5) {\n      this.jumpNum += .5;\n    }\n  }\n\n  jump() {\n    this.velocityY = -12 * this.jumpNum;\n    this.jumpNum = 0;\n  }\n\n  drawCar(ctx) {\n    ctx.fillStyle = 'orangered';\n    ctx.fillRect(this.positionx, this.positiony, CONSTANTS.CAR_WIDTH, CONSTANTS.CAR_HEIGHT);\n  }\n\n}\nconst CONSTANTS = {\n  GRAVITY: 0.3,\n  TERMINAL_VEL: 10,\n  CAR_WIDTH: 80,\n  CAR_HEIGHT: 50,\n  VEL_X: 0,\n  VEL_Y: 0\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2FyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxNQUFNQyxHQUFOLFNBQWtCRCxzREFBbEIsQ0FBK0I7RUFDMUNFLFdBQVcsQ0FBQ0MsVUFBRCxFQUFZO0lBQ25CLE1BQU1BLFVBQU47SUFDQSxLQUFLQyxPQUFMLEdBQWUsQ0FBZjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsS0FBS0YsVUFBTCxDQUFnQkcsS0FBaEIsR0FBc0IsQ0FBdkM7SUFDQSxLQUFLQyxTQUFMLEdBQWlCLEtBQUtKLFVBQUwsQ0FBZ0JLLE1BQWhCLEdBQXVCLENBQXhDO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQkMsU0FBUyxDQUFDQyxLQUEzQjtJQUNBLEtBQUtDLFNBQUwsR0FBaUJGLFNBQVMsQ0FBQ0csS0FBM0I7RUFDSDs7RUFFREMsT0FBTyxDQUFDQyxHQUFELEVBQUs7SUFDUixLQUFLQyxPQUFMLENBQWFELEdBQWI7SUFDQSxLQUFLRSxJQUFMO0VBQ0g7O0VBRURBLElBQUksR0FBRTtJQUNGLEtBQUtWLFNBQUwsSUFBa0IsS0FBS0ssU0FBdkI7SUFDQSxLQUFLQSxTQUFMLElBQWtCRixTQUFTLENBQUNRLE9BQTVCO0VBQ0g7O0VBRURDLE9BQU8sR0FBRTtJQUNMLElBQUksS0FBS2YsT0FBTCxHQUFlLEdBQW5CLEVBQXVCO01BQ25CLEtBQUtBLE9BQUwsSUFBZ0IsRUFBaEI7SUFDSDtFQUNKOztFQUVEZ0IsSUFBSSxHQUFFO0lBQ0YsS0FBS1IsU0FBTCxHQUFpQixDQUFDLEVBQUQsR0FBTSxLQUFLUixPQUE1QjtJQUNBLEtBQUtBLE9BQUwsR0FBZSxDQUFmO0VBQ0g7O0VBR0RZLE9BQU8sQ0FBQ0QsR0FBRCxFQUFLO0lBQ1JBLEdBQUcsQ0FBQ00sU0FBSixHQUFnQixXQUFoQjtJQUNBTixHQUFHLENBQUNPLFFBQUosQ0FBYSxLQUFLakIsU0FBbEIsRUFBNkIsS0FBS0UsU0FBbEMsRUFBNkNHLFNBQVMsQ0FBQ2EsU0FBdkQsRUFBa0ViLFNBQVMsQ0FBQ2MsVUFBNUU7RUFDSDs7QUFuQ3lDO0FBeUM5QyxNQUFNZCxTQUFTLEdBQUc7RUFDZFEsT0FBTyxFQUFFLEdBREs7RUFFZE8sWUFBWSxFQUFFLEVBRkE7RUFHZEYsU0FBUyxFQUFFLEVBSEc7RUFJZEMsVUFBVSxFQUFFLEVBSkU7RUFLZGIsS0FBSyxFQUFFLENBTE87RUFNZEUsS0FBSyxFQUFFO0FBTk8sQ0FBbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3R3aGVlbHMvLi9zcmMvY2FyLmpzP2UyZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhciBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucyl7XG4gICAgICAgIHN1cGVyKGRpbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLmp1bXBOdW0gPSAwXG4gICAgICAgIHRoaXMucG9zaXRpb254ID0gdGhpcy5kaW1lbnNpb25zLndpZHRoLzQ7XG4gICAgICAgIHRoaXMucG9zaXRpb255ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodC8yO1xuICAgICAgICB0aGlzLnZlbG9jaXR5WCA9IENPTlNUQU5UUy5WRUxfWFxuICAgICAgICB0aGlzLnZlbG9jaXR5WSA9IENPTlNUQU5UUy5WRUxfWVxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KXtcbiAgICAgICAgdGhpcy5kcmF3Q2FyKGN0eClcbiAgICAgICAgdGhpcy5tb3ZlKClcbiAgICB9XG5cbiAgICBtb3ZlKCl7XG4gICAgICAgIHRoaXMucG9zaXRpb255ICs9IHRoaXMudmVsb2NpdHlZXG4gICAgICAgIHRoaXMudmVsb2NpdHlZICs9IENPTlNUQU5UUy5HUkFWSVRZXG4gICAgfVxuXG4gICAgcHJlSnVtcCgpe1xuICAgICAgICBpZiAodGhpcy5qdW1wTnVtIDwgMS41KXtcbiAgICAgICAgICAgIHRoaXMuanVtcE51bSArPSAuNSBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGp1bXAoKXtcbiAgICAgICAgdGhpcy52ZWxvY2l0eVkgPSAtMTIgKiB0aGlzLmp1bXBOdW1cbiAgICAgICAgdGhpcy5qdW1wTnVtID0gMFxuICAgIH1cblxuXG4gICAgZHJhd0NhcihjdHgpe1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ29yYW5nZXJlZCc7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9ueCwgdGhpcy5wb3NpdGlvbnksIENPTlNUQU5UUy5DQVJfV0lEVEgsIENPTlNUQU5UUy5DQVJfSEVJR0hUKVxuICAgIH1cblxuICAgIFxuXG59XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBHUkFWSVRZOiAwLjMsXG4gICAgVEVSTUlOQUxfVkVMOiAxMCxcbiAgICBDQVJfV0lEVEg6IDgwLFxuICAgIENBUl9IRUlHSFQ6IDUwLFxuICAgIFZFTF9YOiAwLFxuICAgIFZFTF9ZOiAwXG59Il0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIkNhciIsImNvbnN0cnVjdG9yIiwiZGltZW5zaW9ucyIsImp1bXBOdW0iLCJwb3NpdGlvbngiLCJ3aWR0aCIsInBvc2l0aW9ueSIsImhlaWdodCIsInZlbG9jaXR5WCIsIkNPTlNUQU5UUyIsIlZFTF9YIiwidmVsb2NpdHlZIiwiVkVMX1kiLCJhbmltYXRlIiwiY3R4IiwiZHJhd0NhciIsIm1vdmUiLCJHUkFWSVRZIiwicHJlSnVtcCIsImp1bXAiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIkNBUl9XSURUSCIsIkNBUl9IRUlHSFQiLCJURVJNSU5BTF9WRUwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/car.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BotWheels; }\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n\n\nclass BotWheels {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.demensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.jump = 0;\n    document.addEventListener('keydown', this.spaceDown.bind(this));\n    document.addEventListener('keyup', this.spaceUp.bind(this));\n  }\n\n  animate() {\n    this.level.animate(this.ctx);\n    this.car.animate(this.ctx);\n\n    if (this.running === true) {\n      requestAnimationFrame(this.animate.bind(this, this.ctx));\n    }\n  }\n\n  restart() {\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.demensions);\n    this.car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.demensions);\n    this.running = false;\n    this.play();\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  spaceDown(e) {\n    if (e.code === \"Space\" && this.running === true) {\n      this.car.preJump();\n    }\n  }\n\n  spaceUp(e) {\n    if (e.code === \"Space\" && this.running === true) {\n      this.car.jump();\n    }\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBRWUsTUFBTUUsU0FBTixDQUFnQjtFQUMzQkMsV0FBVyxDQUFDQyxNQUFELEVBQVE7SUFDZixLQUFLQyxHQUFMLEdBQVdELE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQixJQUFsQixDQUFYO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQjtNQUNkQyxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0ksS0FEQTtNQUVkQyxNQUFNLEVBQUVMLE1BQU0sQ0FBQ0s7SUFGRCxDQUFsQjtJQUlBLEtBQUtDLElBQUwsR0FBWSxDQUFaO0lBQ0FDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQXJDO0lBQ0FILFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBS0csT0FBTCxDQUFhRCxJQUFiLENBQWtCLElBQWxCLENBQW5DO0VBRUg7O0VBRURFLE9BQU8sR0FBRztJQUNOLEtBQUtDLEtBQUwsQ0FBV0QsT0FBWCxDQUFtQixLQUFLWCxHQUF4QjtJQUNBLEtBQUthLEdBQUwsQ0FBU0YsT0FBVCxDQUFpQixLQUFLWCxHQUF0Qjs7SUFFQSxJQUFJLEtBQUtjLE9BQUwsS0FBaUIsSUFBckIsRUFBMEI7TUFDdEJDLHFCQUFxQixDQUFDLEtBQUtKLE9BQUwsQ0FBYUYsSUFBYixDQUFrQixJQUFsQixFQUF3QixLQUFLVCxHQUE3QixDQUFELENBQXJCO0lBQ0g7RUFDSjs7RUFFRGdCLE9BQU8sR0FBRztJQUNOLEtBQUtKLEtBQUwsR0FBYSxJQUFJaEIsOENBQUosQ0FBVSxLQUFLTSxVQUFmLENBQWI7SUFDQSxLQUFLVyxHQUFMLEdBQVcsSUFBSWxCLDRDQUFKLENBQVEsS0FBS08sVUFBYixDQUFYO0lBQ0EsS0FBS1ksT0FBTCxHQUFlLEtBQWY7SUFDQSxLQUFLRyxJQUFMO0VBQ0g7O0VBRURBLElBQUksR0FBRztJQUNILEtBQUtILE9BQUwsR0FBZSxJQUFmO0lBQ0EsS0FBS0gsT0FBTDtFQUNIOztFQUVESCxTQUFTLENBQUNVLENBQUQsRUFBRztJQUNSLElBQUlBLENBQUMsQ0FBQ0MsSUFBRixLQUFXLE9BQVgsSUFBc0IsS0FBS0wsT0FBTCxLQUFpQixJQUEzQyxFQUFnRDtNQUM1QyxLQUFLRCxHQUFMLENBQVNPLE9BQVQ7SUFDSDtFQUNKOztFQUVEVixPQUFPLENBQUNRLENBQUQsRUFBRztJQUNOLElBQUlBLENBQUMsQ0FBQ0MsSUFBRixLQUFXLE9BQVgsSUFBc0IsS0FBS0wsT0FBTCxLQUFpQixJQUEzQyxFQUFnRDtNQUM1QyxLQUFLRCxHQUFMLENBQVNSLElBQVQ7SUFDSDtFQUNKOztBQTVDMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3R3aGVlbHMvLi9zcmMvZ2FtZS5qcz83ZGUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXIgZnJvbSBcIi4vY2FyXCI7XG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vbGV2ZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90V2hlZWxzIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpe1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGVtZW5zaW9ucyA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBjYW52YXMud2lkdGgsIFxuICAgICAgICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuanVtcCA9IDBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3BhY2VEb3duLmJpbmQodGhpcykpICA7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5zcGFjZVVwLmJpbmQodGhpcykpO1xuXG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5jYXIuYW5pbWF0ZSh0aGlzLmN0eClcblxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nID09PSB0cnVlKXtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzLCB0aGlzLmN0eCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmxldmVsID0gbmV3IExldmVsKHRoaXMuZGVtZW5zaW9ucyk7XG4gICAgICAgIHRoaXMuY2FyID0gbmV3IENhcih0aGlzLmRlbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltYXRlKClcbiAgICB9XG5cbiAgICBzcGFjZURvd24oZSl7ICAgXG4gICAgICAgIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIiAmJiB0aGlzLnJ1bm5pbmcgPT09IHRydWUpe1xuICAgICAgICAgICAgdGhpcy5jYXIucHJlSnVtcCgpO1xuICAgICAgICB9ICAgXG4gICAgfVxuXG4gICAgc3BhY2VVcChlKXtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiICYmIHRoaXMucnVubmluZyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICB0aGlzLmNhci5qdW1wKCk7XG4gICAgICAgIH0gIFxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbIkNhciIsIkxldmVsIiwiQm90V2hlZWxzIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZGVtZW5zaW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwianVtcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNwYWNlRG93biIsImJpbmQiLCJzcGFjZVVwIiwiYW5pbWF0ZSIsImxldmVsIiwiY2FyIiwicnVubmluZyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlc3RhcnQiLCJwbGF5IiwiZSIsImNvZGUiLCJwcmVKdW1wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  canvas.width = 900;\n  canvas.height = 600;\n  const botWheels1 = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  botWheels1.restart();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxNQUFNO0VBQzlDLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7RUFDQUYsTUFBTSxDQUFDRyxLQUFQLEdBQWUsR0FBZjtFQUNBSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsR0FBaEI7RUFDQSxNQUFNQyxVQUFVLEdBQUcsSUFBSVIsNkNBQUosQ0FBY0csTUFBZCxDQUFuQjtFQUNBSyxVQUFVLENBQUNDLE9BQVg7QUFDSCxDQU5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm90d2hlZWxzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvdFdoZWVscyBmcm9tIFwiLi9nYW1lXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gOTAwXG4gICAgY2FudmFzLmhlaWdodCA9IDYwMFxuICAgIGNvbnN0IGJvdFdoZWVsczEgPSBuZXcgQm90V2hlZWxzKGNhbnZhcyk7XG4gICAgYm90V2hlZWxzMS5yZXN0YXJ0KClcbn0pOyJdLCJuYW1lcyI6WyJCb3RXaGVlbHMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiYm90V2hlZWxzMSIsInJlc3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Level; }\n/* harmony export */ });\n/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track */ \"./src/track.js\");\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.track = new _track__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  animate(ctx) {\n    this.drawBackground(ctx);\n    this.track.animate(ctx);\n    this.moveTrack(this.track);\n  }\n\n  moveTrack(track) {\n    track.positionx -= 1; // make dynamic later\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGV2ZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLE1BQU1DLEtBQU4sQ0FBWTtFQUN2QkMsV0FBVyxDQUFDQyxVQUFELEVBQVk7SUFDbkIsS0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7SUFDQSxLQUFLQyxLQUFMLEdBQWEsSUFBSUosOENBQUosQ0FBVSxLQUFLRyxVQUFmLENBQWI7RUFDSDs7RUFFREUsY0FBYyxDQUFDQyxHQUFELEVBQU07SUFDaEJBLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixTQUFoQjtJQUNBRCxHQUFHLENBQUNFLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEtBQUtMLFVBQUwsQ0FBZ0JNLEtBQW5DLEVBQTBDLEtBQUtOLFVBQUwsQ0FBZ0JPLE1BQTFEO0VBQ0g7O0VBRURDLE9BQU8sQ0FBQ0wsR0FBRCxFQUFLO0lBQ1IsS0FBS0QsY0FBTCxDQUFvQkMsR0FBcEI7SUFDQSxLQUFLRixLQUFMLENBQVdPLE9BQVgsQ0FBbUJMLEdBQW5CO0lBQ0EsS0FBS00sU0FBTCxDQUFlLEtBQUtSLEtBQXBCO0VBQ0g7O0VBRURRLFNBQVMsQ0FBQ1IsS0FBRCxFQUFPO0lBQ1pBLEtBQUssQ0FBQ1MsU0FBTixJQUFtQixDQUFuQixDQURZLENBQ1M7RUFDeEI7O0FBbkJzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JvdHdoZWVscy8uL3NyYy9sZXZlbC5qcz82YzlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFjayBmcm9tIFwiLi90cmFja1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucyl7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMudHJhY2sgPSBuZXcgVHJhY2sodGhpcy5kaW1lbnNpb25zKVxuICAgIH1cblxuICAgIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJza3libHVlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KXtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgICAgICB0aGlzLnRyYWNrLmFuaW1hdGUoY3R4KVxuICAgICAgICB0aGlzLm1vdmVUcmFjayh0aGlzLnRyYWNrKVxuICAgIH1cblxuICAgIG1vdmVUcmFjayh0cmFjayl7XG4gICAgICAgIHRyYWNrLnBvc2l0aW9ueCAtPSAxIC8vIG1ha2UgZHluYW1pYyBsYXRlclxuICAgIH1cblxuXG59XG5cbiJdLCJuYW1lcyI6WyJUcmFjayIsIkxldmVsIiwiY29uc3RydWN0b3IiLCJkaW1lbnNpb25zIiwidHJhY2siLCJkcmF3QmFja2dyb3VuZCIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJhbmltYXRlIiwibW92ZVRyYWNrIiwicG9zaXRpb254Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/level.js\n");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovingObject; }\n/* harmony export */ });\nclass MovingObject {\n  constructor(dimensions) {\n    this.velocity = 0;\n    this.dimensions = dimensions;\n  }\n\n  unknown() {\n    console.log(this.velocity);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW92aW5nX29iamVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ2UsTUFBTUEsWUFBTixDQUFtQjtFQUM5QkMsV0FBVyxDQUFDQyxVQUFELEVBQVk7SUFDbkIsS0FBS0MsUUFBTCxHQUFnQixDQUFoQjtJQUNBLEtBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0VBQ0g7O0VBR0RFLE9BQU8sR0FBRTtJQUNMQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLSCxRQUFqQjtFQUNIOztBQVQ2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JvdHdoZWVscy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzPzIxMTMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpe1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICB9XG5cbiAgICBcbiAgICB1bmtub3duKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmVsb2NpdHkpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJjb25zdHJ1Y3RvciIsImRpbWVuc2lvbnMiLCJ2ZWxvY2l0eSIsInVua25vd24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/moving_object.js\n");

/***/ }),

/***/ "./src/track.js":
/*!**********************!*\
  !*** ./src/track.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Track; }\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Track extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(dimensions) {\n    super(dimensions);\n    this.positionx = this.dimensions.width / 4;\n    this.positiony = this.dimensions.height / 3 * 2;\n  }\n\n  animate(ctx) {\n    this.drawFlat(ctx);\n  }\n\n  drawFlat(ctx) {\n    ctx.fillStyle = \"orangered\";\n    ctx.fillRect(this.positionx, this.positiony, T_CONSTANTS.TRACK_L, T_CONSTANTS.TRACK_H);\n  }\n\n  drawCurve(ctx) {} // we'll use this later\n\n\n  getRandomY(min, max) {\n    return Math.random() * (max - min) + min;\n  }\n\n}\nconst T_CONSTANTS = {\n  TRACK_H: 20,\n  TRACK_L: 900 // SPEED: 5\n\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJhY2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUdlLE1BQU1DLEtBQU4sU0FBb0JELHNEQUFwQixDQUFpQztFQUM1Q0UsV0FBVyxDQUFDQyxVQUFELEVBQVk7SUFDbkIsTUFBTUEsVUFBTjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsS0FBS0QsVUFBTCxDQUFnQkUsS0FBaEIsR0FBd0IsQ0FBekM7SUFDQSxLQUFLQyxTQUFMLEdBQWtCLEtBQUtILFVBQUwsQ0FBZ0JJLE1BQWhCLEdBQXlCLENBQTFCLEdBQStCLENBQWhEO0VBQ0g7O0VBRURDLE9BQU8sQ0FBQ0MsR0FBRCxFQUFLO0lBQ1IsS0FBS0MsUUFBTCxDQUFjRCxHQUFkO0VBQ0g7O0VBRURDLFFBQVEsQ0FBQ0QsR0FBRCxFQUFLO0lBQ1RBLEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixXQUFoQjtJQUNBRixHQUFHLENBQUNHLFFBQUosQ0FBYSxLQUFLUixTQUFsQixFQUE2QixLQUFLRSxTQUFsQyxFQUE2Q08sV0FBVyxDQUFDQyxPQUF6RCxFQUFrRUQsV0FBVyxDQUFDRSxPQUE5RTtFQUNIOztFQUVEQyxTQUFTLENBQUNQLEdBQUQsRUFBSyxDQUViLENBbEIyQyxDQXNCNUM7OztFQUNBUSxVQUFVLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFVO0lBQ2hCLE9BQU9DLElBQUksQ0FBQ0MsTUFBTCxNQUFpQkYsR0FBRyxHQUFHRCxHQUF2QixJQUE4QkEsR0FBckM7RUFDSDs7QUF6QjJDO0FBNEJoRCxNQUFNTCxXQUFXLEdBQUc7RUFDaEJFLE9BQU8sRUFBRSxFQURPO0VBRWhCRCxPQUFPLEVBQUUsR0FGTyxDQUdoQjs7QUFIZ0IsQ0FBcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3R3aGVlbHMvLi9zcmMvdHJhY2suanM/ZTIwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucyl7XG4gICAgICAgIHN1cGVyKGRpbWVuc2lvbnMpXG4gICAgICAgIHRoaXMucG9zaXRpb254ID0gdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gNFxuICAgICAgICB0aGlzLnBvc2l0aW9ueSA9ICh0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMykgKiAyXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpe1xuICAgICAgICB0aGlzLmRyYXdGbGF0KGN0eClcbiAgICB9XG5cbiAgICBkcmF3RmxhdChjdHgpe1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJvcmFuZ2VyZWRcIlxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbngsIHRoaXMucG9zaXRpb255LCBUX0NPTlNUQU5UUy5UUkFDS19MLCBUX0NPTlNUQU5UUy5UUkFDS19IKVxuICAgIH1cblxuICAgIGRyYXdDdXJ2ZShjdHgpe1xuXG4gICAgfVxuXG5cblxuICAgIC8vIHdlJ2xsIHVzZSB0aGlzIGxhdGVyXG4gICAgZ2V0UmFuZG9tWShtaW4sIG1heCl7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgfVxufVxuXG5jb25zdCBUX0NPTlNUQU5UUyA9IHtcbiAgICBUUkFDS19IOiAyMCxcbiAgICBUUkFDS19MOiA5MDBcbiAgICAvLyBTUEVFRDogNVxufSJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJUcmFjayIsImNvbnN0cnVjdG9yIiwiZGltZW5zaW9ucyIsInBvc2l0aW9ueCIsIndpZHRoIiwicG9zaXRpb255IiwiaGVpZ2h0IiwiYW5pbWF0ZSIsImN0eCIsImRyYXdGbGF0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJUX0NPTlNUQU5UUyIsIlRSQUNLX0wiLCJUUkFDS19IIiwiZHJhd0N1cnZlIiwiZ2V0UmFuZG9tWSIsIm1pbiIsIm1heCIsIk1hdGgiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/track.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3R3aGVlbHMvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;