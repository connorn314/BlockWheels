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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Car; }\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Car extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(game) {\n    super(game);\n    this.velocityX = CONSTANTS.VEL_X;\n    this.velocityY = CONSTANTS.VEL_Y;\n    this.jumpPower = 0; // this.hitBounds = this.isBoundBy();\n  }\n\n  animate() {\n    this.drawCar();\n    this.move();\n  }\n\n  move() {\n    this.positionY += this.velocityY;\n    this.velocityY += CONSTANTS.GRAVITY;\n  }\n\n  preJump() {\n    if (this.jumpPower < 1.5) {\n      this.jumpPower += .5;\n    }\n  }\n\n  jump() {\n    this.velocityY = -12 * this.jumpPower;\n    this.jumpPower = 0;\n  }\n\n  drawCar() {\n    this.game.ctx.fillStyle = 'orangered';\n    this.game.ctx.fillRect(this.positionX, this.positionY, CONSTANTS.CAR_WIDTH, CONSTANTS.CAR_HEIGHT);\n  }\n\n  isBoundBy() {\n    return boundsObject = {\n      bottomLeft: [this.positionX, this.positionY + CONSTANTS.CAR_HEIGHT],\n      bottomRight: [this.positionX + CONSTANTS.CAR_WIDTH, this.positionY + CONSTANTS.CAR_HEIGHT]\n    };\n  }\n\n}\nconst CONSTANTS = {\n  GRAVITY: 0.3,\n  TERMINAL_VEL: 10,\n  CAR_WIDTH: 80,\n  CAR_HEIGHT: 50,\n  VEL_X: 0,\n  VEL_Y: 0\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2FyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxNQUFNQyxHQUFOLFNBQWtCRCxzREFBbEIsQ0FBK0I7RUFDMUNFLFdBQVcsQ0FBQ0MsSUFBRCxFQUFNO0lBQ2IsTUFBTUEsSUFBTjtJQUNBLEtBQUtDLFNBQUwsR0FBaUJDLFNBQVMsQ0FBQ0MsS0FBM0I7SUFDQSxLQUFLQyxTQUFMLEdBQWlCRixTQUFTLENBQUNHLEtBQTNCO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixDQUFqQixDQUphLENBS2I7RUFDSDs7RUFFREMsT0FBTyxHQUFFO0lBQ0wsS0FBS0MsT0FBTDtJQUNBLEtBQUtDLElBQUw7RUFDSDs7RUFFREEsSUFBSSxHQUFFO0lBQ0YsS0FBS0MsU0FBTCxJQUFrQixLQUFLTixTQUF2QjtJQUNBLEtBQUtBLFNBQUwsSUFBa0JGLFNBQVMsQ0FBQ1MsT0FBNUI7RUFDSDs7RUFFREMsT0FBTyxHQUFFO0lBQ0wsSUFBSSxLQUFLTixTQUFMLEdBQWlCLEdBQXJCLEVBQXlCO01BQ3JCLEtBQUtBLFNBQUwsSUFBa0IsRUFBbEI7SUFDSDtFQUNKOztFQUVETyxJQUFJLEdBQUU7SUFDRixLQUFLVCxTQUFMLEdBQWlCLENBQUMsRUFBRCxHQUFNLEtBQUtFLFNBQTVCO0lBQ0EsS0FBS0EsU0FBTCxHQUFpQixDQUFqQjtFQUNIOztFQUdERSxPQUFPLEdBQUU7SUFDTCxLQUFLUixJQUFMLENBQVVjLEdBQVYsQ0FBY0MsU0FBZCxHQUEwQixXQUExQjtJQUNBLEtBQUtmLElBQUwsQ0FBVWMsR0FBVixDQUFjRSxRQUFkLENBQXVCLEtBQUtDLFNBQTVCLEVBQXVDLEtBQUtQLFNBQTVDLEVBQXVEUixTQUFTLENBQUNnQixTQUFqRSxFQUE0RWhCLFNBQVMsQ0FBQ2lCLFVBQXRGO0VBQ0g7O0VBRURDLFNBQVMsR0FBRTtJQUNQLE9BQU9DLFlBQVksR0FBRztNQUNsQkMsVUFBVSxFQUFFLENBQUMsS0FBS0wsU0FBTixFQUFpQixLQUFLUCxTQUFMLEdBQWlCUixTQUFTLENBQUNpQixVQUE1QyxDQURNO01BRWxCSSxXQUFXLEVBQUUsQ0FBQyxLQUFLTixTQUFMLEdBQWlCZixTQUFTLENBQUNnQixTQUE1QixFQUF1QyxLQUFLUixTQUFMLEdBQWlCUixTQUFTLENBQUNpQixVQUFsRTtJQUZLLENBQXRCO0VBSUg7O0FBekN5QztBQStDOUMsTUFBTWpCLFNBQVMsR0FBRztFQUNkUyxPQUFPLEVBQUUsR0FESztFQUVkYSxZQUFZLEVBQUUsRUFGQTtFQUdkTixTQUFTLEVBQUUsRUFIRztFQUlkQyxVQUFVLEVBQUUsRUFKRTtFQUtkaEIsS0FBSyxFQUFFLENBTE87RUFNZEUsS0FBSyxFQUFFO0FBTk8sQ0FBbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3R3aGVlbHMvLi9zcmMvY2FyLmpzP2UyZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhciBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XG4gICAgICAgIHN1cGVyKGdhbWUpO1xuICAgICAgICB0aGlzLnZlbG9jaXR5WCA9IENPTlNUQU5UUy5WRUxfWDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eVkgPSBDT05TVEFOVFMuVkVMX1k7XG4gICAgICAgIHRoaXMuanVtcFBvd2VyID0gMDtcbiAgICAgICAgLy8gdGhpcy5oaXRCb3VuZHMgPSB0aGlzLmlzQm91bmRCeSgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKXtcbiAgICAgICAgdGhpcy5kcmF3Q2FyKCk7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgIH1cblxuICAgIG1vdmUoKXtcbiAgICAgICAgdGhpcy5wb3NpdGlvblkgKz0gdGhpcy52ZWxvY2l0eVk7XG4gICAgICAgIHRoaXMudmVsb2NpdHlZICs9IENPTlNUQU5UUy5HUkFWSVRZO1xuICAgIH1cblxuICAgIHByZUp1bXAoKXtcbiAgICAgICAgaWYgKHRoaXMuanVtcFBvd2VyIDwgMS41KXtcbiAgICAgICAgICAgIHRoaXMuanVtcFBvd2VyICs9IC41IDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGp1bXAoKXtcbiAgICAgICAgdGhpcy52ZWxvY2l0eVkgPSAtMTIgKiB0aGlzLmp1bXBQb3dlcjtcbiAgICAgICAgdGhpcy5qdW1wUG93ZXIgPSAwO1xuICAgIH1cblxuXG4gICAgZHJhd0Nhcigpe1xuICAgICAgICB0aGlzLmdhbWUuY3R4LmZpbGxTdHlsZSA9ICdvcmFuZ2VyZWQnO1xuICAgICAgICB0aGlzLmdhbWUuY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb25YLCB0aGlzLnBvc2l0aW9uWSwgQ09OU1RBTlRTLkNBUl9XSURUSCwgQ09OU1RBTlRTLkNBUl9IRUlHSFQpO1xuICAgIH1cblxuICAgIGlzQm91bmRCeSgpe1xuICAgICAgICByZXR1cm4gYm91bmRzT2JqZWN0ID0ge1xuICAgICAgICAgICAgYm90dG9tTGVmdDogW3RoaXMucG9zaXRpb25YLCB0aGlzLnBvc2l0aW9uWSArIENPTlNUQU5UUy5DQVJfSEVJR0hUXSxcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiBbdGhpcy5wb3NpdGlvblggKyBDT05TVEFOVFMuQ0FSX1dJRFRILCB0aGlzLnBvc2l0aW9uWSArIENPTlNUQU5UUy5DQVJfSEVJR0hUXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbn1cblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuMyxcbiAgICBURVJNSU5BTF9WRUw6IDEwLFxuICAgIENBUl9XSURUSDogODAsXG4gICAgQ0FSX0hFSUdIVDogNTAsXG4gICAgVkVMX1g6IDAsXG4gICAgVkVMX1k6IDBcbn0iXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiQ2FyIiwiY29uc3RydWN0b3IiLCJnYW1lIiwidmVsb2NpdHlYIiwiQ09OU1RBTlRTIiwiVkVMX1giLCJ2ZWxvY2l0eVkiLCJWRUxfWSIsImp1bXBQb3dlciIsImFuaW1hdGUiLCJkcmF3Q2FyIiwibW92ZSIsInBvc2l0aW9uWSIsIkdSQVZJVFkiLCJwcmVKdW1wIiwianVtcCIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicG9zaXRpb25YIiwiQ0FSX1dJRFRIIiwiQ0FSX0hFSUdIVCIsImlzQm91bmRCeSIsImJvdW5kc09iamVjdCIsImJvdHRvbUxlZnQiLCJib3R0b21SaWdodCIsIlRFUk1JTkFMX1ZFTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/car.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BotWheels; }\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track */ \"./src/track.js\");\n\n\n\nclass BotWheels {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    document.addEventListener('keydown', this.spaceDown.bind(this));\n    document.addEventListener('keyup', this.spaceUp.bind(this));\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  animate() {\n    this.drawBackground(this.ctx);\n    this.tracks.animate();\n    this.car.animate();\n\n    if (this.running === true) {\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n\n  restart() {\n    this.tracks = new _track__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    this.car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.running = false;\n    this.play();\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  spaceDown(e) {\n    if (e.code === \"Space\" && this.running === true) {\n      this.car.preJump();\n    }\n  }\n\n  spaceUp(e) {\n    if (e.code === \"Space\" && this.running === true) {\n      this.car.jump();\n    }\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsTUFBTUcsU0FBTixDQUFnQjtFQUMzQkMsV0FBVyxDQUFDQyxNQUFELEVBQVE7SUFDZixLQUFLQyxHQUFMLEdBQVdELE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQixJQUFsQixDQUFYO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQjtNQUNkQyxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0ksS0FEQTtNQUVkQyxNQUFNLEVBQUVMLE1BQU0sQ0FBQ0s7SUFGRCxDQUFsQjtJQUtBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUFyQztJQUNBSCxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtHLE9BQUwsQ0FBYUQsSUFBYixDQUFrQixJQUFsQixDQUFuQztFQUVIOztFQUVERSxjQUFjLENBQUNWLEdBQUQsRUFBTTtJQUNoQkEsR0FBRyxDQUFDVyxTQUFKLEdBQWdCLFNBQWhCO0lBQ0FYLEdBQUcsQ0FBQ1ksUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsS0FBS1YsVUFBTCxDQUFnQkMsS0FBbkMsRUFBMEMsS0FBS0QsVUFBTCxDQUFnQkUsTUFBMUQ7RUFDSDs7RUFFRFMsT0FBTyxHQUFHO0lBQ04sS0FBS0gsY0FBTCxDQUFvQixLQUFLVixHQUF6QjtJQUNBLEtBQUtjLE1BQUwsQ0FBWUQsT0FBWjtJQUNBLEtBQUtFLEdBQUwsQ0FBU0YsT0FBVDs7SUFDQSxJQUFJLEtBQUtHLE9BQUwsS0FBaUIsSUFBckIsRUFBMEI7TUFDdEJDLHFCQUFxQixDQUFDLEtBQUtKLE9BQUwsQ0FBYUwsSUFBYixDQUFrQixJQUFsQixDQUFELENBQXJCO0lBQ0g7RUFDSjs7RUFFRFUsT0FBTyxHQUFHO0lBQ04sS0FBS0osTUFBTCxHQUFjLElBQUlsQiw4Q0FBSixDQUFVLElBQVYsQ0FBZDtJQUNBLEtBQUttQixHQUFMLEdBQVcsSUFBSXJCLDRDQUFKLENBQVEsSUFBUixDQUFYO0lBQ0EsS0FBS3NCLE9BQUwsR0FBZSxLQUFmO0lBQ0EsS0FBS0csSUFBTDtFQUNIOztFQUVEQSxJQUFJLEdBQUc7SUFDSCxLQUFLSCxPQUFMLEdBQWUsSUFBZjtJQUNBLEtBQUtILE9BQUw7RUFDSDs7RUFFRE4sU0FBUyxDQUFDYSxDQUFELEVBQUc7SUFDUixJQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFYLElBQXNCLEtBQUtMLE9BQUwsS0FBaUIsSUFBM0MsRUFBZ0Q7TUFDNUMsS0FBS0QsR0FBTCxDQUFTTyxPQUFUO0lBQ0g7RUFDSjs7RUFFRGIsT0FBTyxDQUFDVyxDQUFELEVBQUc7SUFDTixJQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFYLElBQXNCLEtBQUtMLE9BQUwsS0FBaUIsSUFBM0MsRUFBZ0Q7TUFDNUMsS0FBS0QsR0FBTCxDQUFTUSxJQUFUO0lBQ0g7RUFDSjs7QUFqRDBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm90d2hlZWxzLy4vc3JjL2dhbWUuanM/N2RlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyIGZyb20gXCIuL2NhclwiO1xuaW1wb3J0IExldmVsIGZyb20gXCIuL2xldmVsXCI7XG5pbXBvcnQgVHJhY2sgZnJvbSBcIi4vdHJhY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90V2hlZWxzIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpe1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBjYW52YXMud2lkdGgsIFxuICAgICAgICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zcGFjZURvd24uYmluZCh0aGlzKSkgIDtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLnNwYWNlVXAuYmluZCh0aGlzKSk7XG5cbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwic2t5Ymx1ZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy50cmFja3MuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLmNhci5hbmltYXRlKCk7XG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcgPT09IHRydWUpe1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudHJhY2tzID0gbmV3IFRyYWNrKHRoaXMpO1xuICAgICAgICB0aGlzLmNhciA9IG5ldyBDYXIodGhpcyk7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBzcGFjZURvd24oZSl7ICAgXG4gICAgICAgIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIiAmJiB0aGlzLnJ1bm5pbmcgPT09IHRydWUpe1xuICAgICAgICAgICAgdGhpcy5jYXIucHJlSnVtcCgpO1xuICAgICAgICB9ICAgXG4gICAgfVxuXG4gICAgc3BhY2VVcChlKXtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiICYmIHRoaXMucnVubmluZyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICB0aGlzLmNhci5qdW1wKCk7XG4gICAgICAgIH0gIFxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbIkNhciIsIkxldmVsIiwiVHJhY2siLCJCb3RXaGVlbHMiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzcGFjZURvd24iLCJiaW5kIiwic3BhY2VVcCIsImRyYXdCYWNrZ3JvdW5kIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJhbmltYXRlIiwidHJhY2tzIiwiY2FyIiwicnVubmluZyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlc3RhcnQiLCJwbGF5IiwiZSIsImNvZGUiLCJwcmVKdW1wIiwianVtcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Level; }\n/* harmony export */ });\n/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track */ \"./src/track.js\");\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGV2ZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLE1BQU1DLEtBQU4sQ0FBWTtFQUN2QkMsV0FBVyxDQUFDQyxVQUFELEVBQVk7SUFDbkIsS0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7RUFDSDs7QUFIc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3R3aGVlbHMvLi9zcmMvbGV2ZWwuanM/NmM5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhY2sgZnJvbSBcIi4vdHJhY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpe1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgIH1cblxuICAgIFxuXG4gICAgXG5cblxufVxuXG4iXSwibmFtZXMiOlsiVHJhY2siLCJMZXZlbCIsImNvbnN0cnVjdG9yIiwiZGltZW5zaW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/level.js\n");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovingObject; }\n/* harmony export */ });\nclass MovingObject {\n  constructor(game) {\n    this.velocityX = 0;\n    this.velocityY = 0;\n    this.dimensions = game.dimensions;\n    this.positionX = this.dimensions.width / 4;\n    this.positionY = this.dimensions.height / 2;\n    this.game = game;\n  }\n\n  isCollidedWith(boundsObject) {// this will eventually expect an array of items to potentially collide with\n  }\n\n  unknown() {\n    console.log(this.velocity);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW92aW5nX29iamVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ2UsTUFBTUEsWUFBTixDQUFtQjtFQUM5QkMsV0FBVyxDQUFDQyxJQUFELEVBQU07SUFDYixLQUFLQyxTQUFMLEdBQWlCLENBQWpCO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixDQUFqQjtJQUNBLEtBQUtDLFVBQUwsR0FBa0JILElBQUksQ0FBQ0csVUFBdkI7SUFDQSxLQUFLQyxTQUFMLEdBQWlCLEtBQUtELFVBQUwsQ0FBZ0JFLEtBQWhCLEdBQXNCLENBQXZDO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixLQUFLSCxVQUFMLENBQWdCSSxNQUFoQixHQUF1QixDQUF4QztJQUNBLEtBQUtQLElBQUwsR0FBWUEsSUFBWjtFQUNIOztFQUVEUSxjQUFjLENBQUNDLFlBQUQsRUFBYyxDQUFFO0VBRTdCOztFQUlEQyxPQUFPLEdBQUU7SUFDTEMsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsUUFBakI7RUFDSDs7QUFsQjZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm90d2hlZWxzLy4vc3JjL21vdmluZ19vYmplY3QuanM/MjExMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XG4gICAgICAgIHRoaXMudmVsb2NpdHlYID0gMDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eVkgPSAwO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBnYW1lLmRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMucG9zaXRpb25YID0gdGhpcy5kaW1lbnNpb25zLndpZHRoLzQ7XG4gICAgICAgIHRoaXMucG9zaXRpb25ZID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodC8yO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIH1cblxuICAgIGlzQ29sbGlkZWRXaXRoKGJvdW5kc09iamVjdCl7IC8vIHRoaXMgd2lsbCBldmVudHVhbGx5IGV4cGVjdCBhbiBhcnJheSBvZiBpdGVtcyB0byBwb3RlbnRpYWxseSBjb2xsaWRlIHdpdGhcbiAgICBcbiAgICB9XG5cbiAgICBcblxuICAgIHVua25vd24oKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy52ZWxvY2l0eSlcbiAgICB9XG59Il0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsImNvbnN0cnVjdG9yIiwiZ2FtZSIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsImRpbWVuc2lvbnMiLCJwb3NpdGlvblgiLCJ3aWR0aCIsInBvc2l0aW9uWSIsImhlaWdodCIsImlzQ29sbGlkZWRXaXRoIiwiYm91bmRzT2JqZWN0IiwidW5rbm93biIsImNvbnNvbGUiLCJsb2ciLCJ2ZWxvY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/moving_object.js\n");

/***/ }),

/***/ "./src/track.js":
/*!**********************!*\
  !*** ./src/track.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Track; }\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Track extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(game) {\n    super(game);\n    this.velocityX = 1;\n    this.positionY = game.dimensions.height / 3 * 2;\n  }\n\n  animate() {\n    this.drawFlat();\n    this.moveTrack();\n  }\n\n  drawFlat() {\n    this.game.ctx.fillStyle = \"orangered\";\n    this.game.ctx.fillRect(this.positionX, this.positionY, T_CONSTANTS.TRACK_L, T_CONSTANTS.TRACK_H);\n  }\n\n  drawCurve() {}\n\n  moveTrack() {\n    this.positionX -= this.velocityX; // make dynamic later\n  }\n\n  boundBy() {\n    // we'll just focus on the top line of the track at the moment\n    return bounds = {\n      topLeft: [this.positionX, this.positionY],\n      topRight: [this.positionX + T_CONSTANTS.TRACK_L, this.positionY]\n    };\n  } // we'll use this later\n\n\n  getRandomY(min, max) {\n    return Math.random() * (max - min) + min;\n  }\n\n}\nconst T_CONSTANTS = {\n  TRACK_H: 20,\n  TRACK_L: 900 // SPEED: 5\n\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJhY2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUdlLE1BQU1DLEtBQU4sU0FBb0JELHNEQUFwQixDQUFpQztFQUM1Q0UsV0FBVyxDQUFDQyxJQUFELEVBQU07SUFDYixNQUFNQSxJQUFOO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixDQUFqQjtJQUNBLEtBQUtDLFNBQUwsR0FBa0JGLElBQUksQ0FBQ0csVUFBTCxDQUFnQkMsTUFBaEIsR0FBeUIsQ0FBMUIsR0FBK0IsQ0FBaEQ7RUFDSDs7RUFFREMsT0FBTyxHQUFFO0lBQ0wsS0FBS0MsUUFBTDtJQUNBLEtBQUtDLFNBQUw7RUFDSDs7RUFFREQsUUFBUSxHQUFFO0lBQ04sS0FBS04sSUFBTCxDQUFVUSxHQUFWLENBQWNDLFNBQWQsR0FBMEIsV0FBMUI7SUFDQSxLQUFLVCxJQUFMLENBQVVRLEdBQVYsQ0FBY0UsUUFBZCxDQUF1QixLQUFLQyxTQUE1QixFQUF1QyxLQUFLVCxTQUE1QyxFQUF1RFUsV0FBVyxDQUFDQyxPQUFuRSxFQUE0RUQsV0FBVyxDQUFDRSxPQUF4RjtFQUNIOztFQUVEQyxTQUFTLEdBQUUsQ0FFVjs7RUFFRFIsU0FBUyxHQUFFO0lBQ1AsS0FBS0ksU0FBTCxJQUFrQixLQUFLVixTQUF2QixDQURPLENBQzBCO0VBQ3BDOztFQUVEZSxPQUFPLEdBQUU7SUFBRTtJQUNQLE9BQU9DLE1BQU0sR0FBRztNQUNaQyxPQUFPLEVBQUUsQ0FBQyxLQUFLUCxTQUFOLEVBQWlCLEtBQUtULFNBQXRCLENBREc7TUFFWmlCLFFBQVEsRUFBRSxDQUFDLEtBQUtSLFNBQUwsR0FBaUJDLFdBQVcsQ0FBQ0MsT0FBOUIsRUFBdUMsS0FBS1gsU0FBNUM7SUFGRSxDQUFoQjtFQUlILENBOUIyQyxDQWdDNUM7OztFQUNBa0IsVUFBVSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBVTtJQUNoQixPQUFPQyxJQUFJLENBQUNDLE1BQUwsTUFBaUJGLEdBQUcsR0FBR0QsR0FBdkIsSUFBOEJBLEdBQXJDO0VBQ0g7O0FBbkMyQztBQXNDaEQsTUFBTVQsV0FBVyxHQUFHO0VBQ2hCRSxPQUFPLEVBQUUsRUFETztFQUVoQkQsT0FBTyxFQUFFLEdBRk8sQ0FHaEI7O0FBSGdCLENBQXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm90d2hlZWxzLy4vc3JjL3RyYWNrLmpzP2UyMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xuICAgICAgICBzdXBlcihnYW1lKVxuICAgICAgICB0aGlzLnZlbG9jaXR5WCA9IDFcbiAgICAgICAgdGhpcy5wb3NpdGlvblkgPSAoZ2FtZS5kaW1lbnNpb25zLmhlaWdodCAvIDMpICogMlxuICAgIH1cblxuICAgIGFuaW1hdGUoKXtcbiAgICAgICAgdGhpcy5kcmF3RmxhdCgpXG4gICAgICAgIHRoaXMubW92ZVRyYWNrKClcbiAgICB9XG5cbiAgICBkcmF3RmxhdCgpe1xuICAgICAgICB0aGlzLmdhbWUuY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlcmVkXCJcbiAgICAgICAgdGhpcy5nYW1lLmN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uWCwgdGhpcy5wb3NpdGlvblksIFRfQ09OU1RBTlRTLlRSQUNLX0wsIFRfQ09OU1RBTlRTLlRSQUNLX0gpXG4gICAgfVxuXG4gICAgZHJhd0N1cnZlKCl7XG5cbiAgICB9XG5cbiAgICBtb3ZlVHJhY2soKXtcbiAgICAgICAgdGhpcy5wb3NpdGlvblggLT0gdGhpcy52ZWxvY2l0eVggLy8gbWFrZSBkeW5hbWljIGxhdGVyXG4gICAgfVxuXG4gICAgYm91bmRCeSgpeyAvLyB3ZSdsbCBqdXN0IGZvY3VzIG9uIHRoZSB0b3AgbGluZSBvZiB0aGUgdHJhY2sgYXQgdGhlIG1vbWVudFxuICAgICAgICByZXR1cm4gYm91bmRzID0ge1xuICAgICAgICAgICAgdG9wTGVmdDogW3RoaXMucG9zaXRpb25YLCB0aGlzLnBvc2l0aW9uWV0sXG4gICAgICAgICAgICB0b3BSaWdodDogW3RoaXMucG9zaXRpb25YICsgVF9DT05TVEFOVFMuVFJBQ0tfTCwgdGhpcy5wb3NpdGlvblldXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB3ZSdsbCB1c2UgdGhpcyBsYXRlclxuICAgIGdldFJhbmRvbVkobWluLCBtYXgpe1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH1cbn1cblxuY29uc3QgVF9DT05TVEFOVFMgPSB7XG4gICAgVFJBQ0tfSDogMjAsXG4gICAgVFJBQ0tfTDogOTAwXG4gICAgLy8gU1BFRUQ6IDVcbn0iXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiVHJhY2siLCJjb25zdHJ1Y3RvciIsImdhbWUiLCJ2ZWxvY2l0eVgiLCJwb3NpdGlvblkiLCJkaW1lbnNpb25zIiwiaGVpZ2h0IiwiYW5pbWF0ZSIsImRyYXdGbGF0IiwibW92ZVRyYWNrIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJwb3NpdGlvblgiLCJUX0NPTlNUQU5UUyIsIlRSQUNLX0wiLCJUUkFDS19IIiwiZHJhd0N1cnZlIiwiYm91bmRCeSIsImJvdW5kcyIsInRvcExlZnQiLCJ0b3BSaWdodCIsImdldFJhbmRvbVkiLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/track.js\n");

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