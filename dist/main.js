/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/common.css":
/*!*******************************!*\
  !*** ./src/styles/common.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/header.css":
/*!*******************************!*\
  !*** ./src/styles/header.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/header.css */ "./src/styles/header.css");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png");



function createCheckBox(id, cl) {
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", id);
  checkBox.classList.add(cl);

  return checkBox;
}

function createNav() {
  const nav = document.createElement("nav");
  const uList = createUList();
  nav.appendChild(uList);

  return nav;
}

function createUList() {
  const uList = document.createElement("ul");
  const aboutItem = createListItem("About", "#");
  const contactItem = createListItem("Contact", "#");

  aboutItem.classList.add("about-link");
  contactItem.classList.add("contact-link");

  uList.appendChild(aboutItem);
  uList.appendChild(contactItem);

  return uList;
}

function createListItem(aText, aHref) {
  const listItem = document.createElement("li");
  const link = createLink(aText, aHref);
  listItem.appendChild(link);

  return listItem;
}

function createLink(text, href, cl) {
  const link = document.createElement("a");
  link.setAttribute("href", href);
  link.textContent = text;

  return link;
}

function createLabel(forAttr, cl) {
  const label = document.createElement("label");
  const span = document.createElement("span");
  label.setAttribute("for", forAttr);
  label.classList.add(cl);

  label.appendChild(span);

  return label;
}

function loadHeader() {
  const content = document.querySelector("#content");

  // Header elements
  const header = document.createElement("header");
  const mainMenuLink = createLink("", "#");
  const checkBox = createCheckBox("nav-toggle", "nav-toggle");
  const label = createLabel("nav-toggle", "nav-toggle-label");

  // Logo image
  const myLogo = new Image();
  myLogo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;

  mainMenuLink.classList.add("logo-link");
  mainMenuLink.appendChild(myLogo);

  // Nav
  const nav = document.createElement("nav");
  const uList = createUList();
  nav.appendChild(uList);

  // Header children
  header.appendChild(mainMenuLink);
  header.appendChild(checkBox);
  header.append(label);
  header.appendChild(nav);

  content.appendChild(header);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/home.css */ "./src/styles/home.css");
/* harmony import */ var _images_goldenApple_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/goldenApple.gif */ "./src/images/goldenApple.gif");



function loadHome() {
  const content = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  const para = document.createElement("p");
  const myIcon = new Image();

  myIcon.src = _images_goldenApple_gif__WEBPACK_IMPORTED_MODULE_1__;
  para.textContent = "MENU";

  menuContainer.classList.add("menu-container");

  menuContainer.appendChild(para);
  menuContainer.appendChild(myIcon);

  content.appendChild(menuContainer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/menu.css */ "./src/styles/menu.css");


function loadMenu() {
  console.log("menu");
  const content = document.querySelector("#content");
  const para = document.createElement("p");
  para.classList.add("menu-p");
  para.textContent = "FIOSFSDJKMOFISDIGFMJSDOIFGSDOFOIDSFIODSFOISDJ";
  content.appendChild(para);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/modules/reset.js":
/*!******************************!*\
  !*** ./src/modules/reset.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reset = () => {
  const content = document.querySelector("#content");
  content.style = "";

  let lastChild = content.lastElementChild;
  // While the last child is not the header remove the child
  while (lastChild != content.children[0]) {
    content.removeChild(lastChild);
    lastChild = content.lastElementChild;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reset);


/***/ }),

/***/ "./src/images/goldenApple.gif":
/*!************************************!*\
  !*** ./src/images/goldenApple.gif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e5f1b16c8b985b8ded86.gif";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "952b95e4d20bd753a61e.png";

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/common.css */ "./src/styles/common.css");
/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ "./src/modules/home.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/about.js */ "./src/modules/about.js");
/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_about_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact.js */ "./src/modules/contact.js");
/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_contact_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_reset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/reset.js */ "./src/modules/reset.js");
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/header.js */ "./src/modules/header.js");









// Initial page load

(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

const homeBtn = document.querySelector(".logo-link");
const aboutBtn = document.querySelector(".about-link");
const contactBtn = document.querySelector(".contact-link");
const menuBtn = document.querySelector(".menu-container");

homeBtn.addEventListener("click", () => {
  (0,_modules_reset_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

menuBtn.addEventListener("click", () => {
  (0,_modules_reset_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

aboutBtn.addEventListener("click", () => {
  (0,_modules_reset_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  _modules_about_js__WEBPACK_IMPORTED_MODULE_3___default()();
});

contactBtn.addEventListener("click", () => {
  (0,_modules_reset_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  _modules_contact_js__WEBPACK_IMPORTED_MODULE_4___default()();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2NvbW1vbi5jc3M/M2ZlYiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2hlYWRlci5jc3M/MWZkOCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2hvbWUuY3NzPzk2NTkiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9tZW51LmNzcz84ZjkyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9yZXNldC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIiLCIiLCJpbXBvcnQgXCIuLi9zdHlsZXMvaGVhZGVyLmNzc1wiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vaW1hZ2VzL2xvZ28ucG5nXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaGVja0JveChpZCwgY2wpIHtcclxuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xyXG4gIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoY2wpO1xyXG5cclxuICByZXR1cm4gY2hlY2tCb3g7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIGNvbnN0IHVMaXN0ID0gY3JlYXRlVUxpc3QoKTtcclxuICBuYXYuYXBwZW5kQ2hpbGQodUxpc3QpO1xyXG5cclxuICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVVTGlzdCgpIHtcclxuICBjb25zdCB1TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBjb25zdCBhYm91dEl0ZW0gPSBjcmVhdGVMaXN0SXRlbShcIkFib3V0XCIsIFwiI1wiKTtcclxuICBjb25zdCBjb250YWN0SXRlbSA9IGNyZWF0ZUxpc3RJdGVtKFwiQ29udGFjdFwiLCBcIiNcIik7XHJcblxyXG4gIGFib3V0SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbGlua1wiKTtcclxuICBjb250YWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1saW5rXCIpO1xyXG5cclxuICB1TGlzdC5hcHBlbmRDaGlsZChhYm91dEl0ZW0pO1xyXG4gIHVMaXN0LmFwcGVuZENoaWxkKGNvbnRhY3RJdGVtKTtcclxuXHJcbiAgcmV0dXJuIHVMaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaXN0SXRlbShhVGV4dCwgYUhyZWYpIHtcclxuICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb25zdCBsaW5rID0gY3JlYXRlTGluayhhVGV4dCwgYUhyZWYpO1xyXG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuICByZXR1cm4gbGlzdEl0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmsodGV4dCwgaHJlZiwgY2wpIHtcclxuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gIGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICByZXR1cm4gbGluaztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoZm9yQXR0ciwgY2wpIHtcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGZvckF0dHIpO1xyXG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoY2wpO1xyXG5cclxuICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgcmV0dXJuIGxhYmVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIC8vIEhlYWRlciBlbGVtZW50c1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgbWFpbk1lbnVMaW5rID0gY3JlYXRlTGluayhcIlwiLCBcIiNcIik7XHJcbiAgY29uc3QgY2hlY2tCb3ggPSBjcmVhdGVDaGVja0JveChcIm5hdi10b2dnbGVcIiwgXCJuYXYtdG9nZ2xlXCIpO1xyXG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwoXCJuYXYtdG9nZ2xlXCIsIFwibmF2LXRvZ2dsZS1sYWJlbFwiKTtcclxuXHJcbiAgLy8gTG9nbyBpbWFnZVxyXG4gIGNvbnN0IG15TG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gIG15TG9nby5zcmMgPSBsb2dvO1xyXG5cclxuICBtYWluTWVudUxpbmsuY2xhc3NMaXN0LmFkZChcImxvZ28tbGlua1wiKTtcclxuICBtYWluTWVudUxpbmsuYXBwZW5kQ2hpbGQobXlMb2dvKTtcclxuXHJcbiAgLy8gTmF2XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICBjb25zdCB1TGlzdCA9IGNyZWF0ZVVMaXN0KCk7XHJcbiAgbmF2LmFwcGVuZENoaWxkKHVMaXN0KTtcclxuXHJcbiAgLy8gSGVhZGVyIGNoaWxkcmVuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG1haW5NZW51TGluayk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcclxuICBoZWFkZXIuYXBwZW5kKGxhYmVsKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkSGVhZGVyO1xyXG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvaG9tZS5jc3NcIjtcclxuaW1wb3J0IG1lbnVJY29uIGZyb20gXCIuLi9pbWFnZXMvZ29sZGVuQXBwbGUuZ2lmXCI7XHJcblxyXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XHJcblxyXG4gIG15SWNvbi5zcmMgPSBtZW51SWNvbjtcclxuICBwYXJhLnRleHRDb250ZW50ID0gXCJNRU5VXCI7XHJcblxyXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobXlJY29uKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XHJcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9tZW51LmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XHJcbiAgY29uc29sZS5sb2coXCJtZW51XCIpO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBhcmEuY2xhc3NMaXN0LmFkZChcIm1lbnUtcFwiKTtcclxuICBwYXJhLnRleHRDb250ZW50ID0gXCJGSU9TRlNESktNT0ZJU0RJR0ZNSlNET0lGR1NET0ZPSURTRklPRFNGT0lTREpcIjtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcclxuIiwiY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBjb250ZW50LnN0eWxlID0gXCJcIjtcclxuXHJcbiAgbGV0IGxhc3RDaGlsZCA9IGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZDtcclxuICAvLyBXaGlsZSB0aGUgbGFzdCBjaGlsZCBpcyBub3QgdGhlIGhlYWRlciByZW1vdmUgdGhlIGNoaWxkXHJcbiAgd2hpbGUgKGxhc3RDaGlsZCAhPSBjb250ZW50LmNoaWxkcmVuWzBdKSB7XHJcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGxhc3RDaGlsZCk7XHJcbiAgICBsYXN0Q2hpbGQgPSBjb250ZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzZXQ7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZXMvY29tbW9uLmNzc1wiO1xyXG5cclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4vbW9kdWxlcy9ob21lLmpzXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21vZHVsZXMvbWVudS5qc1wiO1xyXG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vbW9kdWxlcy9hYm91dC5qc1wiO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3QuanNcIjtcclxuaW1wb3J0IHJlc2V0IGZyb20gXCIuL21vZHVsZXMvcmVzZXQuanNcIjtcclxuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9tb2R1bGVzL2hlYWRlci5qc1wiO1xyXG5cclxuLy8gSW5pdGlhbCBwYWdlIGxvYWRcclxuXHJcbmhlYWRlcigpO1xyXG5ob21lKCk7XHJcblxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvLWxpbmtcIik7XHJcbmNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dC1saW5rXCIpO1xyXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWxpbmtcIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xyXG5cclxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHJlc2V0KCk7XHJcbiAgaG9tZSgpO1xyXG59KTtcclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICByZXNldCgpO1xyXG4gIG1lbnUoKTtcclxufSk7XHJcblxyXG5hYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHJlc2V0KCk7XHJcbiAgYWJvdXQoKTtcclxufSk7XHJcblxyXG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcmVzZXQoKTtcclxuICBjb250YWN0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=