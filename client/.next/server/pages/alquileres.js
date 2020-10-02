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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/alquileres.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/alquileres.js":
/*!*****************************!*\
  !*** ./pages/alquileres.js ***!
  \*****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/usr/app/pages/alquileres.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n// posts will be populated at build time by getStaticProps()\nfunction Alquileres({\n  posts\n}) {\n  return __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }\n  }, posts.data.map((post, key) => __jsx(\"li\", {\n    key: post._id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }\n  }, post.title)));\n} // This function gets called at build time on server-side.\n// It won't be called on client-side, so you can even do\n// direct database queries. See the \"Technical details\" section.\n\n\nasync function getStaticProps() {\n  // Call an external API endpoint to get posts.\n  // You can use any data fetching library\n  const res = await fetch('http://server:8080/posts');\n  const posts = await res.json(); // By returning { props: posts }, the Blog component\n  // will receive `posts` as a prop at build time\n\n  return {\n    props: {\n      posts\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Alquileres);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hbHF1aWxlcmVzLmpzP2YyMjYiXSwibmFtZXMiOlsiQWxxdWlsZXJlcyIsInBvc3RzIiwiZGF0YSIsIm1hcCIsInBvc3QiLCJrZXkiLCJfaWQiLCJ0aXRsZSIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxTQUFTQSxVQUFULENBQW9CO0FBQUVDO0FBQUYsQ0FBcEIsRUFBK0I7QUFDM0IsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxHQUFYLENBQWUsQ0FBQ0MsSUFBRCxFQUFPQyxHQUFQLEtBQ1o7QUFBSSxPQUFHLEVBQUVELElBQUksQ0FBQ0UsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9CRixJQUFJLENBQUNHLEtBQXpCLENBREgsQ0FESCxDQURGO0FBT0QsQyxDQUVEO0FBQ0E7QUFDQTs7O0FBQ08sZUFBZUMsY0FBZixHQUFnQztBQUNyQztBQUNBO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQywwQkFBRCxDQUF2QjtBQUNBLFFBQU1ULEtBQUssR0FBRyxNQUFNUSxHQUFHLENBQUNFLElBQUosRUFBcEIsQ0FKcUMsQ0FLckM7QUFDQTs7QUFDQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMWDtBQURLO0FBREYsR0FBUDtBQUtEO0FBRWNELHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWxxdWlsZXJlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBvc3RzIHdpbGwgYmUgcG9wdWxhdGVkIGF0IGJ1aWxkIHRpbWUgYnkgZ2V0U3RhdGljUHJvcHMoKVxuZnVuY3Rpb24gQWxxdWlsZXJlcyh7IHBvc3RzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICB7cG9zdHMuZGF0YS5tYXAoKHBvc3QsIGtleSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cG9zdC5faWR9Pntwb3N0LnRpdGxlfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICApXG4gIH1cbiAgXG4gIC8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZSBvbiBzZXJ2ZXItc2lkZS5cbiAgLy8gSXQgd29uJ3QgYmUgY2FsbGVkIG9uIGNsaWVudC1zaWRlLCBzbyB5b3UgY2FuIGV2ZW4gZG9cbiAgLy8gZGlyZWN0IGRhdGFiYXNlIHF1ZXJpZXMuIFNlZSB0aGUgXCJUZWNobmljYWwgZGV0YWlsc1wiIHNlY3Rpb24uXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHMuXG4gICAgLy8gWW91IGNhbiB1c2UgYW55IGRhdGEgZmV0Y2hpbmcgbGlicmFyeVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vc2VydmVyOjgwODAvcG9zdHMnKVxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIC8vIEJ5IHJldHVybmluZyB7IHByb3BzOiBwb3N0cyB9LCB0aGUgQmxvZyBjb21wb25lbnRcbiAgICAvLyB3aWxsIHJlY2VpdmUgYHBvc3RzYCBhcyBhIHByb3AgYXQgYnVpbGQgdGltZVxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwb3N0cyxcbiAgICAgIH0sXG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBBbHF1aWxlcmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/alquileres.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });