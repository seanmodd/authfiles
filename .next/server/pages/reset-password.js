module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/reset-password.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/*! exports provided: Context, Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Provider\", function() { return Provider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/seanmodd/Dev/AuthFiles/036_reset_password_functionality/client/context/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import\n // reducer\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case \"LOGIN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: action.payload\n      });\n\n    case \"LOGOUT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: null\n      });\n\n    default:\n      return state;\n  }\n}; // initial state\n\n\nconst intialState = {\n  user: null\n}; // create context\n\nconst Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({}); // context provider\n\nconst Provider = ({\n  children\n}) => {\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(reducer, intialState);\n  const value = {\n    state,\n    dispatch\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Context.Provider, {\n    value: value,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 10\n  }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L2luZGV4LmpzPzAyNjUiXSwibmFtZXMiOlsicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInVzZXIiLCJwYXlsb2FkIiwiaW50aWFsU3RhdGUiLCJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0EsTUFBTUEsT0FBTyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNqQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLE9BQUw7QUFDRSw2Q0FBWUYsS0FBWjtBQUFtQkcsWUFBSSxFQUFFRixNQUFNLENBQUNHO0FBQWhDOztBQUNGLFNBQUssUUFBTDtBQUNFLDZDQUFZSixLQUFaO0FBQW1CRyxZQUFJLEVBQUU7QUFBekI7O0FBQ0Y7QUFDRSxhQUFPSCxLQUFQO0FBTko7QUFRRCxDQVRELEMsQ0FXQTs7O0FBQ0EsTUFBTUssV0FBVyxHQUFHO0FBQ2xCRixNQUFJLEVBQUU7QUFEWSxDQUFwQixDLENBSUE7O0FBQ0EsTUFBTUcsT0FBTyxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQTdCLEMsQ0FFQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDakMsUUFBTTtBQUFBLE9BQUNULEtBQUQ7QUFBQSxPQUFRVTtBQUFSLE1BQW9CQyx3REFBVSxDQUFDWixPQUFELEVBQVVNLFdBQVYsQ0FBcEM7QUFDQSxRQUFNTyxLQUFLLEdBQUc7QUFBRVosU0FBRjtBQUFTVTtBQUFULEdBQWQ7QUFDQSxzQkFBTyxxRUFBQyxPQUFELENBQVMsUUFBVDtBQUFrQixTQUFLLEVBQUVFLEtBQXpCO0FBQUEsY0FBaUNIO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBSkQiLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIHJlZHVjZXJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkxPR0lOXCI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlIFwiTE9HT1VUXCI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogbnVsbCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbi8vIGluaXRpYWwgc3RhdGVcbmNvbnN0IGludGlhbFN0YXRlID0ge1xuICB1c2VyOiBudWxsLFxufTtcblxuLy8gY3JlYXRlIGNvbnRleHRcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuLy8gY29udGV4dCBwcm92aWRlclxuY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbnRpYWxTdGF0ZSk7XG4gIGNvbnN0IHZhbHVlID0geyBzdGF0ZSwgZGlzcGF0Y2ggfTtcbiAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj47XG59O1xuXG5leHBvcnQgeyBDb250ZXh0LCBQcm92aWRlciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n // Your web app's Firebase configuration\n\nvar firebaseConfig = {\n  apiKey: 'AIzaSyDY0SagVtpBg2o-4j5j9CvDd_9KG2r0bmc',\n  authDomain: 'dhungalseanmodd.firebaseapp.com',\n  projectId: 'dhungalseanmodd',\n  storageBucket: 'dhungalseanmodd.appspot.com',\n  messagingSenderId: '643008978274',\n  appId: '1:643008978274:web:90a1ce935c9c6f3d76203b'\n}; // Initialize Firebase\n\nif (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {\n  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS5qcz8yYWRjIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ0EsSUFBSUEsY0FBYyxHQUFHO0FBQ25CQyxRQUFNLEVBQUUseUNBRFc7QUFFbkJDLFlBQVUsRUFBRSxpQ0FGTztBQUduQkMsV0FBUyxFQUFFLGlCQUhRO0FBSW5CQyxlQUFhLEVBQUUsNkJBSkk7QUFLbkJDLG1CQUFpQixFQUFFLGNBTEE7QUFNbkJDLE9BQUssRUFBRTtBQU5ZLENBQXJCLEMsQ0FRQTs7QUFDQSxJQUFJLENBQUNDLG1EQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBbkIsRUFBMkI7QUFDekJGLHFEQUFRLENBQUNHLGFBQVQsQ0FBdUJWLGNBQXZCO0FBQ0Q7O0FBRWNPLGtIQUFmIiwiZmlsZSI6Ii4vZmlyZWJhc2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xuXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXG52YXIgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogJ0FJemFTeURZMFNhZ1Z0cEJnMm8tNGo1ajlDdkRkXzlLRzJyMGJtYycsXG4gIGF1dGhEb21haW46ICdkaHVuZ2Fsc2Vhbm1vZGQuZmlyZWJhc2VhcHAuY29tJyxcbiAgcHJvamVjdElkOiAnZGh1bmdhbHNlYW5tb2RkJyxcbiAgc3RvcmFnZUJ1Y2tldDogJ2RodW5nYWxzZWFubW9kZC5hcHBzcG90LmNvbScsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiAnNjQzMDA4OTc4Mjc0JyxcbiAgYXBwSWQ6ICcxOjY0MzAwODk3ODI3NDp3ZWI6OTBhMWNlOTM1YzljNmYzZDc2MjAzYicsXG59O1xuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/reset-password.js":
/*!*********************************!*\
  !*** ./pages/reset-password.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/seanmodd/Dev/AuthFiles/036_reset_password_functionality/client/pages/reset-password.js\";\n\n\n\n\n\n\nconst PasswordReset = () => {\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    state: {\n      user\n    }\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_4__[\"Context\"]);\n  let router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (user !== null) {\n      router.push(\"/\");\n    }\n  }, [user]);\n\n  const handleSubmit = async e => {\n    e.preventDefault();\n    setLoading(true);\n    const config = {\n      url: \"http://localhost:3000/login\",\n      handleCodeInApp: true\n    };\n    await _firebase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].auth().sendPasswordResetEmail(email, config).then(() => {\n      setEmail(\"\");\n      setLoading(false);\n      Object(react_toastify__WEBPACK_IMPORTED_MODULE_5__[\"toast\"])(\"Check your email for password reset link\");\n    }).catch(error => {\n      setLoading(false);\n      Object(react_toastify__WEBPACK_IMPORTED_MODULE_5__[\"toast\"])(error.message);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container col-md-6 offset-md-3 p-5\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Reset Password\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"lead\",\n      children: \"If you have already registered, you can enter your email address to receive a password reset link\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"email\",\n        className: \"form-control\",\n        value: email,\n        onChange: e => setEmail(e.target.value),\n        placeholder: \"Type your email\",\n        autoFocus: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"btn btn-primary\",\n        disabled: !email || loading,\n        children: loading ? \"Processing...\" : \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PasswordReset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXNldC1wYXNzd29yZC5qcz8xOWY1Il0sIm5hbWVzIjpbIlBhc3N3b3JkUmVzZXQiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0YXRlIiwidXNlciIsInVzZUNvbnRleHQiLCJDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbmZpZyIsInVybCIsInByb2Nlc3MiLCJoYW5kbGVDb2RlSW5BcHAiLCJmaXJlYmFzZSIsImF1dGgiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwidGhlbiIsInRvYXN0IiwiY2F0Y2giLCJlcnJvciIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBYSxHQUFHLE1BQU07QUFDMUIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUVBLFFBQU07QUFDSkcsU0FBSyxFQUFFO0FBQUVDO0FBQUY7QUFESCxNQUVGQyx3REFBVSxDQUFDQyxnREFBRCxDQUZkO0FBSUEsTUFBSUMsTUFBTSxHQUFHQyw2REFBUyxFQUF0QjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJTCxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQkcsWUFBTSxDQUFDRyxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNOLElBQUQsQ0FKTSxDQUFUOztBQU1BLFFBQU1PLFlBQVksR0FBRyxNQUFPQyxDQUFQLElBQWE7QUFDaENBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBWCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBRUEsVUFBTVksTUFBTSxHQUFHO0FBQ2JDLFNBQUcsRUFBRUMsNkJBRFE7QUFFYkMscUJBQWUsRUFBRTtBQUZKLEtBQWY7QUFLQSxVQUFNQyxpREFBUSxDQUNYQyxJQURHLEdBRUhDLHNCQUZHLENBRW9CdEIsS0FGcEIsRUFFMkJnQixNQUYzQixFQUdITyxJQUhHLENBR0UsTUFBTTtBQUNWdEIsY0FBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBRyxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBb0Isa0VBQUssQ0FBQywwQ0FBRCxDQUFMO0FBQ0QsS0FQRyxFQVFIQyxLQVJHLENBUUlDLEtBQUQsSUFBVztBQUNoQnRCLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FvQixrRUFBSyxDQUFDRSxLQUFLLENBQUNDLE9BQVAsQ0FBTDtBQUNELEtBWEcsQ0FBTjtBQVlELEdBckJEOztBQXVCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBRyxlQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQU9FO0FBQU0sY0FBUSxFQUFFZCxZQUFoQjtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxpQkFBUyxFQUFDLGNBRlo7QUFHRSxhQUFLLEVBQUViLEtBSFQ7QUFJRSxnQkFBUSxFQUFHYyxDQUFELElBQU9iLFFBQVEsQ0FBQ2EsQ0FBQyxDQUFDYyxNQUFGLENBQVNDLEtBQVYsQ0FKM0I7QUFLRSxtQkFBVyxFQUFDLGlCQUxkO0FBTUUsaUJBQVM7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQVVFO0FBQVEsaUJBQVMsRUFBQyxpQkFBbEI7QUFBb0MsZ0JBQVEsRUFBRSxDQUFDN0IsS0FBRCxJQUFVRyxPQUF4RDtBQUFBLGtCQUNHQSxPQUFPLEdBQUcsZUFBSCxHQUFxQjtBQUQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXdCRCxDQS9ERDs7QUFpRWVKLDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcmVzZXQtcGFzc3dvcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuY29uc3QgUGFzc3dvcmRSZXNldCA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHtcbiAgICBzdGF0ZTogeyB1c2VyIH0sXG4gIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyICE9PSBudWxsKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbdXNlcl0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICB1cmw6IHByb2Nlc3MuZW52LnBhc3N3b3JkUmVzZXRSZWRpcmVjdCxcbiAgICAgIGhhbmRsZUNvZGVJbkFwcDogdHJ1ZSxcbiAgICB9O1xuXG4gICAgYXdhaXQgZmlyZWJhc2VcbiAgICAgIC5hdXRoKClcbiAgICAgIC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsLCBjb25maWcpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgdG9hc3QoXCJDaGVjayB5b3VyIGVtYWlsIGZvciBwYXNzd29yZCByZXNldCBsaW5rXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHRvYXN0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2wtbWQtNiBvZmZzZXQtbWQtMyBwLTVcIj5cbiAgICAgIDxoMj5SZXNldCBQYXNzd29yZDwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XG4gICAgICAgIElmIHlvdSBoYXZlIGFscmVhZHkgcmVnaXN0ZXJlZCwgeW91IGNhbiBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MgdG9cbiAgICAgICAgcmVjZWl2ZSBhIHBhc3N3b3JkIHJlc2V0IGxpbmtcbiAgICAgIDwvcD5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgZW1haWxcIlxuICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZD17IWVtYWlsIHx8IGxvYWRpbmd9PlxuICAgICAgICAgIHtsb2FkaW5nID8gXCJQcm9jZXNzaW5nLi4uXCIgOiBcIlN1Ym1pdFwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkUmVzZXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/reset-password.js\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-toastify\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiP2FlOWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtdG9hc3RpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-toastify\n");

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