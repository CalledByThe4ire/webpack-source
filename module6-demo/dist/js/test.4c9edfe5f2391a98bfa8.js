/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./assets/pexels-christian-heitz-842711.jpg
const pexels_christian_heitz_842711_namespaceObject = __webpack_require__.p + "assets/img/pexels-christian-heitz-842711a76089b34a38fcd09f5b.jpg";
;// CONCATENATED MODULE: ./assets/pexels-irina-iriser-1379636.jpg
const pexels_irina_iriser_1379636_namespaceObject = __webpack_require__.p + "assets/img/pexels-irina-iriser-13796360b41c028f207ff624263.jpg";
;// CONCATENATED MODULE: ./pages/test.js


var addImg = function addImg() {
  var wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  var imgOne = document.createElement('img');
  imgOne.src = pexels_christian_heitz_842711_namespaceObject;
  var imgTwo = document.createElement('img');
  imgTwo.src = pexels_irina_iriser_1379636_namespaceObject;
  var arr = [imgOne, imgTwo];
  arr.forEach(function (i) {
    return wrapper.appendChild(i);
  });
  document.body.append(wrapper);
};
addImg();
/******/ })()
;
//# sourceMappingURL=test.4c9edfe5f2391a98bfa8.js.map