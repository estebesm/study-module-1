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

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project/./src/styles/main.css?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.js */ \"./src/js/theme.js\");\n/* harmony import */ var _sale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale.js */ \"./src/js/sale.js\");\n/* harmony import */ var _modal_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/modal.js */ \"./src/js/modal/modal.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.js */ \"./src/js/header.js\");\n/* harmony import */ var _setDataFromConfig_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setDataFromConfig.js */ \"./src/js/setDataFromConfig.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/main.css */ \"./src/styles/main.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst app = () => {\r\n    (0,_setDataFromConfig_js__WEBPACK_IMPORTED_MODULE_4__.setDataFromConfig)();\r\n    (0,_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.runModalWindow)();\r\n    (0,_header_js__WEBPACK_IMPORTED_MODULE_3__.header)();\r\n    (0,_theme_js__WEBPACK_IMPORTED_MODULE_0__.theme)();\r\n    (0,_sale_js__WEBPACK_IMPORTED_MODULE_1__.saleTimeCounter)();\r\n};\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", app);\n\n//# sourceURL=webpack://project/./src/js/app.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst burgerButton = document.querySelector('.header__burger');\r\nconst closeButton = document.querySelector('.header__close-button');\r\n\r\nconst listElement = document.querySelector(\".header__list\");\r\nconst listElementItems = listElement.childNodes;\r\n\r\nconst headerNav = document.querySelector('.header__nav');\r\n\r\nconst logoButton = document.querySelector('header .logo');\r\nconst getAppButton = document.querySelector('header .app-store-button');\r\n\r\nconst closeHeaderMenu = () => {\r\n    headerNav.classList.remove('opened');\r\n}\r\nconst openHeaderMenu = () => {\r\n    headerNav.classList.add('opened');\r\n}\r\n\r\nconst header = () => {\r\n    burgerButton.addEventListener('click', openHeaderMenu);\r\n    closeButton.addEventListener('click', closeHeaderMenu);\r\n\r\n    logoButton.addEventListener('click', closeHeaderMenu);\r\n    listElementItems.forEach(item => {\r\n        item.addEventListener('click', closeHeaderMenu);\r\n    })\r\n    getAppButton.addEventListener('click', closeHeaderMenu);\r\n}\n\n//# sourceURL=webpack://project/./src/js/header.js?");

/***/ }),

/***/ "./src/js/modal/modal.js":
/*!*******************************!*\
  !*** ./src/js/modal/modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"runModalWindow\": () => (/* binding */ runModalWindow)\n/* harmony export */ });\n/* harmony import */ var _validateTextInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateTextInput.js */ \"./src/js/modal/validateTextInput.js\");\n\r\n\r\nconst openModalWindowButtons = document.querySelectorAll('.buy-now');\r\nconst closeModalWindowButton = document.querySelector('.modal__close-button');\r\nconst submitButton = document.querySelector('.modal__submit');\r\nconst modalForm = document.querySelector('.modal form');\r\nconst loadingBlock = document.querySelector('.modal__loading');\r\nconst socialNetworksElement = document.querySelector('.modal__social-networks-field');\r\n\r\nconst modalWindow = document.querySelector('.dialog');\r\nconst htmlBody = document.querySelector('body');\r\n\r\nconst checkTypeOfPlan = (elem) => {\r\n    if(elem.classList.contains('pricing__premium')){\r\n        return 'premium';\r\n    }\r\n    if(elem.classList.contains('pricing__standard')){\r\n        return 'standard';\r\n    }\r\n    return 'lifetime'\r\n\r\n}\r\nconst checkSocialNetworks = () => {\r\n    if(getSelectedSocialNetworks().length===0){\r\n        socialNetworksElement.classList.add('error');\r\n        return false;\r\n    }\r\n    else {\r\n        socialNetworksElement.classList.remove('error');\r\n        return true;\r\n    }\r\n}\r\n\r\nconst openModalWindow = (classList) => {\r\n    const selectedPlanInput = document.getElementById(`modal__${checkTypeOfPlan(classList)}`);\r\n    selectedPlanInput.checked = true;\r\n    modalWindow.style.display = 'block';\r\n    htmlBody.style.overflow = 'hidden';\r\n}\r\nconst closeModalWindow = () => {\r\n    modalWindow.style.display = 'none';\r\n    htmlBody.style.overflow = null;\r\n}\r\n\r\nconst getSelectedPlan = () => {\r\n    let plan = null;\r\n    document.querySelectorAll('.modal__plan input').forEach(item => {\r\n        if(item.checked){\r\n            plan = item.value;\r\n        }\r\n    })\r\n    return plan;\r\n}\r\nconst getSelectedSocialNetworks = () => {\r\n    let socialNetworks = []\r\n    document.querySelectorAll('.modal__social-networks-field input').forEach(item => {\r\n        if(item.checked){\r\n            socialNetworks.push(item.value);\r\n        }\r\n    })\r\n    return socialNetworks;\r\n}\r\n\r\nconst getDataFromDocument = () => {\r\n    return {\r\n        name: (0,_validateTextInput_js__WEBPACK_IMPORTED_MODULE_0__.getName)(),\r\n        email: (0,_validateTextInput_js__WEBPACK_IMPORTED_MODULE_0__.getEmail)(),\r\n        plan: getSelectedPlan(),\r\n        socialNetworks: getSelectedSocialNetworks()\r\n    }\r\n}\r\nconst sendDataToServer = () => {\r\n    setStylesBeforeSendingData();\r\n    setTimeout(() => {\r\n        setStylesAfterSendingData();\r\n        console.log(getDataFromDocument());\r\n        closeModalWindow();\r\n        (0,_validateTextInput_js__WEBPACK_IMPORTED_MODULE_0__.clearTextInputs)();\r\n        document.querySelectorAll('.modal__social-networks-field input').forEach(item => {\r\n            item.checked = false;\r\n        });\r\n\r\n    }, 3000);\r\n}\r\n\r\nconst setStylesBeforeSendingData = () => {\r\n    loadingBlock.style.display = 'flex';\r\n    submitButton.disabled = true;\r\n}\r\nconst setStylesAfterSendingData = () => {\r\n    loadingBlock.style.display = 'none';\r\n    submitButton.disabled = false;\r\n}\r\n\r\nconst runModalWindow = () => {\r\n    modalForm.addEventListener('submit', e => {\r\n        e.preventDefault();\r\n    });\r\n    let addedEventListenerForTextInput = false;\r\n\r\n    submitButton.addEventListener('click', () => {\r\n        if(!addedEventListenerForTextInput)\r\n            (0,_validateTextInput_js__WEBPACK_IMPORTED_MODULE_0__.validateTextInput)();\r\n        addedEventListenerForTextInput = true\r\n        document.querySelectorAll('.modal__social-networks__item input').forEach(item => {\r\n            item.addEventListener('click', () => {\r\n                checkSocialNetworks();\r\n            })\r\n        })\r\n        if(checkSocialNetworks() && (0,_validateTextInput_js__WEBPACK_IMPORTED_MODULE_0__.isValidatedTextInput)()){\r\n            sendDataToServer();\r\n        }\r\n    });\r\n\r\n    openModalWindowButtons.forEach(button => {\r\n        button.addEventListener('click', () => openModalWindow(button));\r\n    })\r\n    closeModalWindowButton.addEventListener('click', closeModalWindow);\r\n    document.querySelector('.modal-wrapper').addEventListener('click', closeModalWindow);\r\n    document.querySelector('.modal').addEventListener('click', e => {\r\n        e.stopPropagation()\r\n    })\r\n}\n\n//# sourceURL=webpack://project/./src/js/modal/modal.js?");

/***/ }),

/***/ "./src/js/modal/validateTextInput.js":
/*!*******************************************!*\
  !*** ./src/js/modal/validateTextInput.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearTextInputs\": () => (/* binding */ clearTextInputs),\n/* harmony export */   \"getEmail\": () => (/* binding */ getEmail),\n/* harmony export */   \"getName\": () => (/* binding */ getName),\n/* harmony export */   \"isValidatedTextInput\": () => (/* binding */ isValidatedTextInput),\n/* harmony export */   \"validateTextInput\": () => (/* binding */ validateTextInput)\n/* harmony export */ });\nconst modalInputName = document.getElementById('modal__name');\r\nconst modalInputEmail = document.getElementById('modal__email');\r\n\r\nconst errorMessage = (value) => {\r\n    if(value.length === 0) return 'required field*'\r\n    if(value.length < 4) return 'should be more then 3 symbols*'\r\n    return ''\r\n}\r\n\r\nconst setCorrectStyles = (element) => {\r\n    element.classList.remove('error');\r\n    element.nextElementSibling.textContent = ''\r\n    element.nextElementSibling.style.display = 'none'\r\n}\r\nconst setErrorStyles = (element) => {\r\n    element.classList.add(errorMessage(element.value) && 'error');\r\n    element.nextElementSibling.textContent = errorMessage(element.value);\r\n    element.nextElementSibling.style.display = 'block';\r\n}\r\n\r\nconst isValidatedTextInput = () => {\r\n    return (errorMessage(modalInputName.value) === '') && (errorMessage(modalInputEmail.value) === '');\r\n}\r\n\r\nconst getName = () => {\r\n    return modalInputName.value;\r\n}\r\n\r\nconst getEmail = () => {\r\n    return modalInputEmail.value;\r\n}\r\n\r\nconst clearTextInputs = () => {\r\n    modalInputName.value = '';\r\n    modalInputEmail.value = '';\r\n}\r\n\r\nconst validateTextInput = () => {\r\n        [modalInputName, modalInputEmail].forEach(element => {\r\n            if (errorMessage(element.value)) {\r\n                setErrorStyles(element)\r\n            }\r\n            element.addEventListener('input', e => {\r\n                if(errorMessage(e.target.value))\r\n                    setErrorStyles(element)\r\n                else setCorrectStyles(element)\r\n            })\r\n            element.addEventListener('blur', () => {\r\n                if (errorMessage(element.value)) setErrorStyles(element)\r\n            })\r\n        })\r\n}\r\n\n\n//# sourceURL=webpack://project/./src/js/modal/validateTextInput.js?");

/***/ }),

/***/ "./src/js/sale.js":
/*!************************!*\
  !*** ./src/js/sale.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saleTimeCounter\": () => (/* binding */ saleTimeCounter)\n/* harmony export */ });\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.json */ \"./src/config.json\");\n\r\n\r\nconst parseDate = (date) => {\r\n    const endDate = date.split(/\\W/)\r\n    const [endDay, endMonth, endYear, endHour, endMinute] = endDate\r\n    return new Date(+endYear, +endMonth - 1 , +endDay, +endHour, +endMinute).getTime()\r\n}\r\n\r\nconst getDistance = () => {\r\n    const now = new Date().getTime();\r\n    return parseDate(_config_json__WEBPACK_IMPORTED_MODULE_0__.timerEndDate) - now\r\n}\r\n\r\nconst getTimerItem = (type) => {\r\n    const distance = getDistance();\r\n    const formulas = {\r\n        days: distance / (1000 * 60 * 60 * 24),\r\n        hours: (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),\r\n        minutes: (distance % (1000 * 60 * 60)) / (1000 * 60),\r\n        seconds: (distance % (1000 * 60)) / 1000\r\n    }\r\n    return Math.floor(formulas[type]).toString().padStart(2, \"0\");\r\n}\r\n\r\nconst isTimePassed = () => getDistance() < 0\r\n\r\nconst saleTimeCounter = () => {\r\n    const saleSection = document.querySelector('section.sale');\r\n    const timerTypes = ['days', 'hours', 'minutes', 'seconds']\r\n\r\n    let timerItems = []\r\n    timerTypes.forEach(type => {\r\n        timerItems.push({\r\n            element: document.getElementById(`timer__${type}`),\r\n            type\r\n        })\r\n    })\r\n\r\n    if(!isTimePassed()) {\r\n        saleSection.classList.add('opened');\r\n        const interval = setInterval(() => {\r\n            if (isTimePassed()) {\r\n                clearInterval(interval)\r\n                document.querySelector('.sale').remove()\r\n            }\r\n            timerItems.forEach(item => {\r\n                item.element.textContent = getTimerItem(item.type)\r\n            })\r\n\r\n        }, 1000)\r\n    }\r\n}\n\n//# sourceURL=webpack://project/./src/js/sale.js?");

/***/ }),

/***/ "./src/js/setDataFromConfig.js":
/*!*************************************!*\
  !*** ./src/js/setDataFromConfig.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setDataFromConfig\": () => (/* binding */ setDataFromConfig)\n/* harmony export */ });\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.json */ \"./src/config.json\");\n\r\n\r\nconst setPlans = (plans) => {\r\n    plans.forEach(plan => {\r\n        const priceElement = document.querySelector(`.price.pricing__${plan.name}`);\r\n        priceElement.textContent = `$${plan.price}`;\r\n    })\r\n}\r\n\r\nconst setTestimonials = (testimonials) => {\r\n    const testimonialsNameElements = document.querySelectorAll(\".testimonials__name\");\r\n    const testimonialsJobElements = document.querySelectorAll(\".testimonials__job\");\r\n    const testimonialsTextElements = document.querySelectorAll(\".testimonials__text\");\r\n\r\n    testimonials.forEach((testimonial, index) => {\r\n        testimonialsNameElements[index].textContent = testimonial.name;\r\n        testimonialsJobElements[index].textContent = testimonial.job;\r\n        testimonialsTextElements[index].textContent = testimonial.text;\r\n    })\r\n}\r\n\r\nconst setAppStoreLink = (link) => {\r\n    const appStoreButtons = document.querySelectorAll(\".app-store-button\");\r\n    appStoreButtons.forEach(btn => btn.href = link);\r\n}\r\n\r\nconst setDataFromConfig = () => {\r\n    setPlans(_config_json__WEBPACK_IMPORTED_MODULE_0__.plans);\r\n    setTestimonials(_config_json__WEBPACK_IMPORTED_MODULE_0__.testimonials);\r\n    setAppStoreLink(_config_json__WEBPACK_IMPORTED_MODULE_0__.appStoreLink);\r\n}\n\n//# sourceURL=webpack://project/./src/js/setDataFromConfig.js?");

/***/ }),

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\nconst themingSection = document.querySelector('.theming')\r\nconst lightModeButton = document.querySelector('.theming__button.light')\r\nconst darkModeButton = document.querySelector('.theming__button.dark')\r\n\r\nconst markedSpan = document.querySelector('.theming__marked')\r\nconst title = document.querySelector('.theming .title')\r\n\r\nconst theme = () => {\r\n    lightModeButton.addEventListener('click', () => {\r\n        themingSection.classList.add('light');\r\n        markedSpan.textContent = 'light';\r\n        title.textContent = 'light mode';\r\n    })\r\n    darkModeButton.addEventListener('click', () => {\r\n        themingSection.classList.remove('light');\r\n        markedSpan.textContent = 'dark';\r\n        title.textContent = 'dark mode';\r\n    })\r\n}\n\n//# sourceURL=webpack://project/./src/js/theme.js?");

/***/ }),

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"plans\":[{\"name\":\"standard\",\"price\":9},{\"name\":\"premium\",\"price\":99},{\"name\":\"lifetime\",\"price\":149}],\"timerEndDate\":\"31.05.2022 14:14\",\"testimonials\":[{\"name\":\"Pam Beesly\",\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus.\",\"job\":\"Top Manager Happy Co\"},{\"name\":\"Max Henry\",\"text\":\"Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam. Aenean porta neque eget consequat fringilla.\",\"job\":\"Top Manager Happy Co\"},{\"name\":\"Ann Schrute\",\"text\":\"Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus.\",\"job\":\"CEO and CoFounder\"}],\"appStoreLink\":\"https://example.com\"}');\n\n//# sourceURL=webpack://project/./src/config.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;