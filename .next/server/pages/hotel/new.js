module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/hotel/new.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/hotel/new.js":
/*!****************************!*\
  !*** ./pages/hotel/new.js ***!
  \****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/seanmodd/Dev/AuthFiles/036_reset_password_functionality/client/pages/hotel/new.js\";\n\n\n\nconst NewBooking = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Post a new hotel for booking\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"lead\",\n      children: \"This is protected page for logged in user only\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getServerSideProps(context) {\n  try {\n    const cookies = Object(nookies__WEBPACK_IMPORTED_MODULE_1__[\"parseCookies\"])(context); //   console.log(\"NOOKIES SENDING TOKEN\", cookies);\n\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${\"http://localhost:8000/api\"}/private-route`, {\n      headers: {\n        token: cookies.token\n      }\n    });\n    if (data.ok) return {\n      props: {}\n    };\n  } catch (err) {\n    return {\n      redirect: {\n        permanent: false,\n        destination: \"/login\"\n      },\n      props: {}\n    };\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewBooking);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob3RlbC9uZXcuanM/ZDE3ZCJdLCJuYW1lcyI6WyJOZXdCb29raW5nIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImNvb2tpZXMiLCJwYXJzZUNvb2tpZXMiLCJkYXRhIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwiaGVhZGVycyIsInRva2VuIiwib2siLCJwcm9wcyIsImVyciIsInJlZGlyZWN0IiwicGVybWFuZW50IiwiZGVzdGluYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUcsZUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFNRCxDQVBEOztBQVNPLGVBQWVDLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztBQUNoRCxNQUFJO0FBQ0YsVUFBTUMsT0FBTyxHQUFHQyw0REFBWSxDQUFDRixPQUFELENBQTVCLENBREUsQ0FFRjs7QUFDQSxVQUFNO0FBQUVHO0FBQUYsUUFBVyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVcsR0FBRUMsMkJBQWdCLGdCQUE3QixFQUE4QztBQUNuRUMsYUFBTyxFQUFFO0FBQ1BDLGFBQUssRUFBRVAsT0FBTyxDQUFDTztBQURSO0FBRDBELEtBQTlDLENBQXZCO0FBS0EsUUFBSUwsSUFBSSxDQUFDTSxFQUFULEVBQWEsT0FBTztBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFQO0FBQ2QsR0FURCxDQVNFLE9BQU9DLEdBQVAsRUFBWTtBQUNaLFdBQU87QUFDTEMsY0FBUSxFQUFFO0FBQ1JDLGlCQUFTLEVBQUUsS0FESDtBQUVSQyxtQkFBVyxFQUFFO0FBRkwsT0FETDtBQUtMSixXQUFLLEVBQUU7QUFMRixLQUFQO0FBT0Q7QUFDRjtBQUVjWix5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2hvdGVsL25ldy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IE5ld0Jvb2tpbmcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMj5Qb3N0IGEgbmV3IGhvdGVsIGZvciBib29raW5nPC9oMj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5UaGlzIGlzIHByb3RlY3RlZCBwYWdlIGZvciBsb2dnZWQgaW4gdXNlciBvbmx5PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhjb250ZXh0KTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiTk9PS0lFUyBTRU5ESU5HIFRPS0VOXCIsIGNvb2tpZXMpO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LmFwaX0vcHJpdmF0ZS1yb3V0ZWAsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgdG9rZW46IGNvb2tpZXMudG9rZW4sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGlmIChkYXRhLm9rKSByZXR1cm4geyBwcm9wczoge30gfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9sb2dpblwiLFxuICAgICAgfSxcbiAgICAgIHByb3BzOiB7fSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0Jvb2tpbmc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/hotel/new.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nookies\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub29raWVzXCI/ZDk3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub29raWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nookies\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });