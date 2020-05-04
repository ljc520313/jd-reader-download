/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/jdreader/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/store */ \"./src/services/store.js\");\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"App\",\n  data: function data() {\n    return {\n      shared: _services_store__WEBPACK_IMPORTED_MODULE_0__[\"SharedInfo\"]\n    };\n  },\n  mounted: function mounted() {}\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/BookItem.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./src/components/BookItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    book: {\n      required: true\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/BookItem.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/ChapterContent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./src/components/ChapterContent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n/* harmony import */ var _ContentItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentItem */ \"./src/components/ContentItem.vue\");\n/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/store */ \"./src/services/store.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {},\n  data: function data() {\n    return {\n      data: {\n        contents: []\n      },\n      shared: _services_store__WEBPACK_IMPORTED_MODULE_4__[\"SharedInfo\"]\n    };\n  },\n  methods: {\n    loadContent: function loadContent(prevChapter, nextChapter) {\n      var _this = this;\n\n      if (!nextChapter.chapterUrl) {\n        return;\n      }\n\n      Object(_services_api__WEBPACK_IMPORTED_MODULE_2__[\"getChapterContent\"])(this.shared.book.id, nextChapter.chapterUrl).then(function (response) {\n        _this.data.contents = [response];\n\n        _this.$nextTick(function () {\n          setTimeout(function () {\n            document.scrollingElement.scrollTop = 0;\n          }, 200);\n        });\n      }).catch(function (err) {\n        _this.data.contents = [\"\\u7AE0\\u8282( \".concat(nextChapter.name, \" )\\u6570\\u636E\\u83B7\\u53D6\\u5931\\u8D25: \").concat(err.message)];\n      });\n    }\n  },\n  watch: {\n    \"shared.category.selected\": {\n      handler: function handler(newVal, oldVal) {\n        if (newVal) {\n          this.loadContent(oldVal || {}, newVal);\n        }\n      },\n      immediate: true,\n      deep: true\n    }\n  },\n  components: {\n    \"content-item\": _ContentItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/components/ChapterContent.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/ContentItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./src/components/ContentItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n\n\n\n\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    content: {\n      required: true,\n      type: String\n    },\n    bookId: {\n      required: true\n    }\n  },\n  data: function data() {\n    return {\n      booksRootDir: _services_api__WEBPACK_IMPORTED_MODULE_4__[\"BOOKS_ROOT_DIR\"]\n    };\n  },\n  computed: {\n    htmlContent: function htmlContent() {\n      var startIndex = this.content.toLowerCase().indexOf(\"<body>\"),\n          endIndex = this.content.toLowerCase().indexOf(\"</body>\");\n      console.log(\"start index: \", startIndex, \", end index: \", endIndex);\n\n      if (startIndex === -1 || endIndex === -1) {\n        console.log(\"not found <body> tag\");\n        return this.content;\n      }\n\n      var html = this.content.substring(startIndex + \"<body>\".length, endIndex).replace(/https?:\\/\\/img30\\.360buyimg\\.com\\//g, \"\".concat(_services_api__WEBPACK_IMPORTED_MODULE_4__[\"BOOKS_ROOT_DIR\"], \"/\").concat(this.bookId, \"/res/\"));\n      return html;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/ContentItem.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/TableContents.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./src/components/TableContents.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/store */ \"./src/services/store.js\");\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"table-contents\",\n  props: {\n    category: {\n      required: true\n    }\n  },\n  data: function data() {\n    return {\n      shared: _services_store__WEBPACK_IMPORTED_MODULE_0__[\"SharedInfo\"]\n    };\n  },\n  methods: {\n    onSelectCategory: function onSelectCategory(category) {\n      this.shared.category.selected = category;\n    }\n  },\n  computed: {\n    clsNames: function clsNames() {\n      var names = {\n        selected: this.shared.category.selected.id === this.category.id\n      };\n      return names;\n    },\n    styles: function styles() {\n      return {\n        \"text-indent\": this.category.level + \"em\"\n      };\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/TableContents.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/views/Book.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./src/views/Book.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n/* harmony import */ var _components_TableContents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TableContents */ \"./src/components/TableContents.vue\");\n/* harmony import */ var _components_ChapterContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ChapterContent */ \"./src/components/ChapterContent.vue\");\n/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/store */ \"./src/services/store.js\");\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvar ConsoleColor = \"color: #666\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      bookId: this.$route.params.id,\n      data: {\n        categories: []\n      },\n      styles: {\n        winHeight: window.innerHeight\n      },\n      shared: _services_store__WEBPACK_IMPORTED_MODULE_10__[\"SharedInfo\"]\n    };\n  },\n  mounted: function mounted() {\n    this.loadCategoryTree();\n    this.initBookInfo();\n  },\n  methods: {\n    initBookInfo: function initBookInfo() {\n      this.shared.book = Object(_services_api__WEBPACK_IMPORTED_MODULE_7__[\"getLocalBookInfo\"])(this.bookId) || {\n        id: this.bookId\n      };\n    },\n    loadCategoryTree: function loadCategoryTree() {\n      var _this = this;\n\n      Object(_services_api__WEBPACK_IMPORTED_MODULE_7__[\"getBookCategoryTree\"])(this.bookId).then(function (response) {\n        var categories = response.catalogList.map(function (item) {\n          return {\n            id: item.catalogId,\n            name: item.catalogName,\n            bookId: item.bookId,\n            catalogFid: item.catalogFid,\n            chapterUrl: item.chapterUrl,\n            endPage: item.endPage,\n            isFree: item.isFree,\n            level: item.level,\n            sort: item.sort,\n            startPage: item.startPage\n          };\n        });\n        _this.data.categories = categories;\n\n        _this.initReadProgress();\n      });\n    },\n    setHeight: function setHeight() {\n      var _this2 = this;\n\n      window.addEventListener(\"resize\", function () {\n        _this2.styles.winHeight = window.innerHeight - 10;\n      });\n    },\n    toggleToC: function toggleToC(val) {\n      if (typeof val === \"boolean\") {\n        this.shared.category.showToC = val;\n      } else {\n        this.shared.category.showToC = !this.shared.category.showToC;\n      }\n    },\n    goToChapter: function goToChapter(direct, fromChapter) {\n      if (!fromChapter) {\n        fromChapter = this.shared.category.selected;\n      }\n\n      var isPrev = direct === \"prev\"; // const isNext = !isPrev;\n\n      var cnDirect = isPrev ? \"上\" : \"下\";\n      console.log(\"\\u5F53\\u524D\\u7AE0\\u8282\\u4E3A %c\".concat(JSON.stringify(fromChapter), \"%c, \\u5F00\\u59CB\\u8BA1\\u7B97\").concat(cnDirect, \"\\u4E00\\u7AE0\\u8282\"), ConsoleColor);\n      var index = this.data.categories.indexOf(fromChapter);\n\n      if (index === -1) {\n        console.warn(\"从章节列表没有找到当前章节\");\n        return;\n      }\n\n      var otherChapter = this.data.categories[isPrev ? index - 1 : index + 1];\n\n      if (fromChapter.chapterUrl === otherChapter.chapterUrl) {\n        console.log(\"\\u5F53\\u524D\\u7AE0\\u8282\\u548C\".concat(cnDirect, \"\\u4E00\\u7AE0\\u8282\\u5185\\u5BB9\\u76F8\\u540C, \\u8DF3\\u8FC7\\u4E00\\u4E2A\\u7AE0\\u8282\"));\n        otherChapter = this.data.categories[isPrev ? index - 2 : index + 2];\n      }\n\n      if (!otherChapter) {\n        console.warn(\"没有更多章节\");\n        return;\n      }\n\n      var fromChapterUrl = (fromChapter.chapterUrl || \"\").split(\"#\"),\n          otherChapterUrl = (otherChapter.chapterUrl || \"\").split(\"#\");\n\n      if (fromChapterUrl[0] === otherChapterUrl[0]) {\n        console.log(\"\\u5F85\\u8FDB\\u5165\\u7684\".concat(cnDirect, \"\\u4E00\\u7AE0\\u8282\\u5185\\u5BB9\\u5728\\u5F53\\u524D\\u7AE0\\u8282\\u9875\\u9762\\u5DF2\\u7ECF\\u5B58\\u5728, \\u8DF3\\u8FC7\").concat(cnDirect, \"\\u4E00\\u7AE0\\u8282: %c\").concat(JSON.stringify(otherChapter), \"%c \\u91CD\\u65B0\\u5F00\\u59CB\\u8BA1\\u7B97\").concat(cnDirect, \"\\u4E00\\u7AE0\\u8282.\"), ConsoleColor);\n        this.goToChapter(direct, otherChapter);\n        return;\n      }\n\n      this.shared.category.selected = otherChapter;\n      console.log(\"\\u5C06\\u8981\\u8FDB\\u5165\".concat(cnDirect, \"\\u4E00\\u7AE0\\u8282\\u662F: %c\").concat(JSON.stringify(this.shared.category.selected), \"%c\"), ConsoleColor);\n      this.saveReadProgress(this.shared.category.selected);\n    },\n    goPrevChapter: function goPrevChapter() {\n      this.goToChapter(\"prev\");\n    },\n    goNextChapter: function goNextChapter() {\n      this.goToChapter(\"next\");\n    },\n    initReadProgress: function initReadProgress() {\n      var _this3 = this;\n\n      var localData = Object(_services_api__WEBPACK_IMPORTED_MODULE_7__[\"getBooksProgress\"])().filter(function (item) {\n        return item.id === _this3.bookId;\n      })[0];\n\n      if (!localData || !localData.chapterId) {\n        this.shared.category.selected = this.data.categories[0];\n        return;\n      }\n\n      var matchChapter = this.data.categories.filter(function (c) {\n        return c.id === localData.chapterId;\n      })[0];\n\n      if (matchChapter) {\n        this.shared.category.selected = matchChapter;\n      }\n    },\n    saveReadProgress: function saveReadProgress(chapter) {\n      var currentProgress = {\n        id: this.bookId,\n        name: this.shared.book.name,\n        chapterId: chapter.id,\n        chapterName: chapter.name,\n        chapterUrl: chapter.chapterUrl,\n        date: Date.now(),\n        bookInfo: this.shared.book.bookInfo\n      };\n      var progress = Object(_services_api__WEBPACK_IMPORTED_MODULE_7__[\"getBooksProgress\"])();\n      var hasFound = false;\n\n      for (var index = 0; index < progress.length; index++) {\n        var item = progress[index];\n\n        if (item.id === currentProgress.id) {\n          progress[index] = currentProgress;\n          hasFound = true;\n          break;\n        }\n      }\n\n      if (!hasFound) {\n        progress.push(currentProgress);\n      }\n\n      Object(_services_api__WEBPACK_IMPORTED_MODULE_7__[\"updateBooksProgress\"])(progress);\n    }\n  },\n  computed: {\n    docTitle: function docTitle() {\n      var title = \"\".concat(this.shared.category.selected.name, \" - \").concat(this.shared.book.name);\n      document.title = title;\n      return title;\n    }\n  },\n  components: {\n    \"table-contents\": _components_TableContents__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    \"chapter-content\": _components_ChapterContent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Book.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/views/Books.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./src/views/Books.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n/* harmony import */ var _components_BookItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BookItem */ \"./src/components/BookItem.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      books: {\n        data: [],\n        recent: []\n      },\n      vm: {\n        recentBooksCount: localStorage.getItem(\"/books/recent-count\") || 5\n      }\n    };\n  },\n  mounted: function mounted() {\n    this.loadBooks();\n  },\n  methods: {\n    loadBooks: function loadBooks() {\n      var _this = this;\n\n      Object(_services_api__WEBPACK_IMPORTED_MODULE_0__[\"getBooksDir\"])().then(function (books) {\n        return _this.books.data = books;\n      });\n    },\n    loadRecentBooks: function loadRecentBooks() {\n      var _this2 = this;\n\n      Object(_services_api__WEBPACK_IMPORTED_MODULE_0__[\"getRecentBooks\"])(this.vm.recentBooksCount).then(function (data) {\n        return _this2.books.recent = data;\n      });\n    }\n  },\n  watch: {\n    \"vm.recentBooksCount\": {\n      handler: function handler() {\n        this.loadRecentBooks();\n        localStorage.setItem(\"/books/recent-count\", this.vm.recentBooksCount);\n      },\n      immediate: true\n    }\n  },\n  components: {\n    \"book-item\": _components_BookItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Books.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c02a620c-vue-loader-template\"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c02a620c-vue-loader-template"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"app\" } }, [_c(\"router-view\")], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22c02a620c-vue-loader-template%22%7D!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c02a620c-vue-loader-template\"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/BookItem.vue?vue&type=template&id=51110068&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c02a620c-vue-loader-template"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./src/components/BookItem.vue?vue&type=template&id=51110068& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"router-link\", { attrs: { to: \"/book/\" + _vm.book.id } }, [\n    _vm._v(_vm._s(_vm.book.name || _vm.book.id) + \" \"),\n    _vm.book.bookInfo\n      ? _c(\"span\", [\n          _vm._v(\n            \"[ 作者: \" +\n              _vm._s(_vm.book.bookInfo.author) +\n              \", 总共 \" +\n              _vm._s(_vm.book.bookInfo.totalPage) +\n              \" 页 ]\"\n          )\n        ])\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/BookItem.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22c02a620c-vue-loader-template%22%7D!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c02a620c-vue-loader-template\"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/ChapterContent.vue?vue&type=template&id=2832479c&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c02a620c-vue-loader-template"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./src/components/ChapterContent.vue?vue&type=template&id=2832479c& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    _vm._l(_vm.data.contents, function(content, index) {\n      return _c(\"content-item\", {\n        key: index,\n        attrs: { \"book-id\": _vm.shared.book.id, content: content }\n      })\n    }),\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/ChapterContent.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22c02a620c-vue-loader-template%22%7D!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c02a620c-vue-loader-template\"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/ContentItem.vue?vue&type=template&id=6e35f1a8&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c02a620c-vue-loader-template"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./src/components/ContentItem.vue?vue&type=template&id=6e35f1a8& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { domProps: { innerHTML: _vm._s(_vm.htmlContent) } })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/ContentItem.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22c02a620c-vue-loader-template%22%7D!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c02a620c-vue-loader-template\"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/TableContents.vue?vue&type=template&id=a996e5f0&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c02a620c-vue-loader-template"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./src/components/TableContents.vue?vue&type=template&id=a996e5f0& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"li\",\n    {\n      class: _vm.clsNames,\n      style: _vm.styles,\n      attrs: { \"data-index\": _vm.category.index, title: _vm.category.name }\n    },\n    [\n      _c(\n        \"div\",\n        {\n          on: {\n            click: function($event) {\n              return _vm.onSelectCategory(_vm.category)\n            }\n          }\n        },\n        [_vm._v(_vm._s(_vm.category.name))]\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/TableContents.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22c02a620c-vue-loader-template%22%7D!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c02a620c-vue-loader-template\"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/views/Book.vue?vue&type=template&id=170451a3&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c02a620c-vue-loader-template"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./src/views/Book.vue?vue&type=template&id=170451a3& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"ol\", { staticClass: \"breadcrumb\", attrs: { title: _vm.docTitle } }, [\n      _c(\n        \"li\",\n        [\n          _c(\n            \"router-link\",\n            { attrs: { to: \"/\" }, on: { click: _vm.toggleToC } },\n            [_vm._v(\"首页\")]\n          )\n        ],\n        1\n      ),\n      _c(\"li\", [\n        _c(\n          \"a\",\n          {\n            attrs: { href: \"javascript:void(0)\" },\n            on: {\n              click: function($event) {\n                _vm.shared.category.showToC = !_vm.shared.category.showToC\n              }\n            }\n          },\n          [_vm._v(_vm._s(_vm.shared.book.name))]\n        )\n      ]),\n      _c(\"li\", { staticClass: \"active\" }, [\n        _vm._v(_vm._s(_vm.shared.category.selected.name))\n      ])\n    ]),\n    _c(\"div\", { staticClass: \"functions\" }, [\n      _c(\"ul\", [\n        _c(\n          \"li\",\n          [\n            _c(\n              \"router-link\",\n              {\n                staticClass: \"btn btn-xs btn-primary\",\n                attrs: { to: \"/\" },\n                on: { click: _vm.toggleToC }\n              },\n              [_vm._v(\"首页\")]\n            )\n          ],\n          1\n        ),\n        _c(\"li\", [\n          _c(\n            \"button\",\n            {\n              staticClass: \"btn btn-xs btn-primary\",\n              on: { click: _vm.toggleToC }\n            },\n            [_vm._v(\"目录\")]\n          )\n        ]),\n        _c(\"li\", [\n          _c(\n            \"button\",\n            {\n              staticClass: \"btn btn-xs btn-primary\",\n              on: {\n                click: function($event) {\n                  return _vm.goPrevChapter()\n                }\n              }\n            },\n            [_vm._v(\"上一节\")]\n          )\n        ]),\n        _c(\"li\", [\n          _c(\n            \"button\",\n            {\n              staticClass: \"btn btn-xs btn-primary\",\n              on: {\n                click: function($event) {\n                  return _vm.goNextChapter()\n                }\n              }\n            },\n            [_vm._v(\"下一节\")]\n          )\n        ])\n      ])\n    ]),\n    _c(\n      \"div\",\n      {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.shared.category.showToC,\n            expression: \"shared.category.showToC\"\n          }\n        ],\n        staticClass: \"table-of-contencts overscroll\",\n        style: \"max-height: \" + (_vm.styles.winHeight - 30) + \"px\"\n      },\n      [\n        _c(\n          \"ul\",\n          { staticClass: \"book-category\" },\n          _vm._l(_vm.data.categories, function(category) {\n            return _c(\"table-contents\", {\n              key: category.id,\n              attrs: { category: category }\n            })\n          }),\n          1\n        )\n      ]\n    ),\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-sm-12 chapter-content\",\n        on: {\n          click: function($event) {\n            return _vm.toggleToC(false)\n          }\n        }\n      },\n      [_c(\"chapter-content\")],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/Book.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22c02a620c-vue-loader-template%22%7D!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c02a620c-vue-loader-template\"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/views/Books.vue?vue&type=template&id=659cf840&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c02a620c-vue-loader-template"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./src/views/Books.vue?vue&type=template&id=659cf840& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"books-list\" },\n    [\n      _vm.books.recent.length\n        ? [\n            _c(\"h3\", [_vm._v(\"最近阅读\")]),\n            _c(\n              \"div\",\n              {\n                staticClass: \"input-group input-group-sm\",\n                staticStyle: { width: \"120px\", \"margin-left\": \"1em\" }\n              },\n              [\n                _c(\"div\", { staticClass: \"input-group-addon\" }, [\n                  _vm._v(\"显示数量\")\n                ]),\n                _c(\"input\", {\n                  directives: [\n                    {\n                      name: \"model\",\n                      rawName: \"v-model\",\n                      value: _vm.vm.recentBooksCount,\n                      expression: \"vm.recentBooksCount\"\n                    }\n                  ],\n                  staticClass: \"form-control\",\n                  attrs: { type: \"number\", placeholder: \"数量\" },\n                  domProps: { value: _vm.vm.recentBooksCount },\n                  on: {\n                    input: function($event) {\n                      if ($event.target.composing) {\n                        return\n                      }\n                      _vm.$set(_vm.vm, \"recentBooksCount\", $event.target.value)\n                    }\n                  }\n                })\n              ]\n            ),\n            _c(\n              \"ol\",\n              _vm._l(_vm.books.recent, function(book) {\n                return _c(\n                  \"li\",\n                  { key: book.bookId },\n                  [\n                    _c(\"book-item\", { attrs: { book: book } }),\n                    _vm._v(\" ( \" + _vm._s(book.chapterName) + \" ) \")\n                  ],\n                  1\n                )\n              }),\n              0\n            )\n          ]\n        : _vm._e(),\n      _c(\"h3\", [_vm._v(\"书籍列表\")]),\n      _c(\n        \"ol\",\n        _vm._l(_vm.books.data, function(book) {\n          return _c(\n            \"li\",\n            { key: book.id },\n            [_c(\"book-item\", { attrs: { book: book } })],\n            1\n          )\n        }),\n        0\n      )\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/Books.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22c02a620c-vue-loader-template%22%7D!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ \"./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_9_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../node_modules/_babel-loader@8.1.0@babel-loader/lib!../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c02a620c-vue-loader-template\"}!../node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"c02a620c-vue-loader-template\\\"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/components/BookItem.vue":
/*!*************************************!*\
  !*** ./src/components/BookItem.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BookItem_vue_vue_type_template_id_51110068___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookItem.vue?vue&type=template&id=51110068& */ \"./src/components/BookItem.vue?vue&type=template&id=51110068&\");\n/* harmony import */ var _BookItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookItem.vue?vue&type=script&lang=js& */ \"./src/components/BookItem.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_9_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _BookItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _BookItem_vue_vue_type_template_id_51110068___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _BookItem_vue_vue_type_template_id_51110068___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/BookItem.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/BookItem.vue?");

/***/ }),

/***/ "./src/components/BookItem.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/BookItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_BookItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../node_modules/_babel-loader@8.1.0@babel-loader/lib!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./BookItem.vue?vue&type=script&lang=js& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/BookItem.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_BookItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/BookItem.vue?");

/***/ }),

/***/ "./src/components/BookItem.vue?vue&type=template&id=51110068&":
/*!********************************************************************!*\
  !*** ./src/components/BookItem.vue?vue&type=template&id=51110068& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_BookItem_vue_vue_type_template_id_51110068___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c02a620c-vue-loader-template\"}!../../node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./BookItem.vue?vue&type=template&id=51110068& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"c02a620c-vue-loader-template\\\"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/BookItem.vue?vue&type=template&id=51110068&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_BookItem_vue_vue_type_template_id_51110068___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_BookItem_vue_vue_type_template_id_51110068___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/BookItem.vue?");

/***/ }),

/***/ "./src/components/ChapterContent.vue":
/*!*******************************************!*\
  !*** ./src/components/ChapterContent.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ChapterContent_vue_vue_type_template_id_2832479c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChapterContent.vue?vue&type=template&id=2832479c& */ \"./src/components/ChapterContent.vue?vue&type=template&id=2832479c&\");\n/* harmony import */ var _ChapterContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChapterContent.vue?vue&type=script&lang=js& */ \"./src/components/ChapterContent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_9_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _ChapterContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ChapterContent_vue_vue_type_template_id_2832479c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ChapterContent_vue_vue_type_template_id_2832479c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/ChapterContent.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/ChapterContent.vue?");

/***/ }),

/***/ "./src/components/ChapterContent.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/components/ChapterContent.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_ChapterContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../node_modules/_babel-loader@8.1.0@babel-loader/lib!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./ChapterContent.vue?vue&type=script&lang=js& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/ChapterContent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_ChapterContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/ChapterContent.vue?");

/***/ }),

/***/ "./src/components/ChapterContent.vue?vue&type=template&id=2832479c&":
/*!**************************************************************************!*\
  !*** ./src/components/ChapterContent.vue?vue&type=template&id=2832479c& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_ChapterContent_vue_vue_type_template_id_2832479c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c02a620c-vue-loader-template\"}!../../node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./ChapterContent.vue?vue&type=template&id=2832479c& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"c02a620c-vue-loader-template\\\"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/ChapterContent.vue?vue&type=template&id=2832479c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_ChapterContent_vue_vue_type_template_id_2832479c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_ChapterContent_vue_vue_type_template_id_2832479c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/ChapterContent.vue?");

/***/ }),

/***/ "./src/components/ContentItem.vue":
/*!****************************************!*\
  !*** ./src/components/ContentItem.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ContentItem_vue_vue_type_template_id_6e35f1a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentItem.vue?vue&type=template&id=6e35f1a8& */ \"./src/components/ContentItem.vue?vue&type=template&id=6e35f1a8&\");\n/* harmony import */ var _ContentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentItem.vue?vue&type=script&lang=js& */ \"./src/components/ContentItem.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_9_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _ContentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ContentItem_vue_vue_type_template_id_6e35f1a8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ContentItem_vue_vue_type_template_id_6e35f1a8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/ContentItem.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/ContentItem.vue?");

/***/ }),

/***/ "./src/components/ContentItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/ContentItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_ContentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../node_modules/_babel-loader@8.1.0@babel-loader/lib!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./ContentItem.vue?vue&type=script&lang=js& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/ContentItem.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_ContentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/ContentItem.vue?");

/***/ }),

/***/ "./src/components/ContentItem.vue?vue&type=template&id=6e35f1a8&":
/*!***********************************************************************!*\
  !*** ./src/components/ContentItem.vue?vue&type=template&id=6e35f1a8& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_ContentItem_vue_vue_type_template_id_6e35f1a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c02a620c-vue-loader-template\"}!../../node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./ContentItem.vue?vue&type=template&id=6e35f1a8& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"c02a620c-vue-loader-template\\\"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/ContentItem.vue?vue&type=template&id=6e35f1a8&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_ContentItem_vue_vue_type_template_id_6e35f1a8___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_ContentItem_vue_vue_type_template_id_6e35f1a8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/ContentItem.vue?");

/***/ }),

/***/ "./src/components/TableContents.vue":
/*!******************************************!*\
  !*** ./src/components/TableContents.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TableContents_vue_vue_type_template_id_a996e5f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableContents.vue?vue&type=template&id=a996e5f0& */ \"./src/components/TableContents.vue?vue&type=template&id=a996e5f0&\");\n/* harmony import */ var _TableContents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableContents.vue?vue&type=script&lang=js& */ \"./src/components/TableContents.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_9_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _TableContents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _TableContents_vue_vue_type_template_id_a996e5f0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _TableContents_vue_vue_type_template_id_a996e5f0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/TableContents.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/TableContents.vue?");

/***/ }),

/***/ "./src/components/TableContents.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/TableContents.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_TableContents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../node_modules/_babel-loader@8.1.0@babel-loader/lib!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./TableContents.vue?vue&type=script&lang=js& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/TableContents.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_TableContents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/TableContents.vue?");

/***/ }),

/***/ "./src/components/TableContents.vue?vue&type=template&id=a996e5f0&":
/*!*************************************************************************!*\
  !*** ./src/components/TableContents.vue?vue&type=template&id=a996e5f0& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_TableContents_vue_vue_type_template_id_a996e5f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c02a620c-vue-loader-template\"}!../../node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./TableContents.vue?vue&type=template&id=a996e5f0& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"c02a620c-vue-loader-template\\\"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/components/TableContents.vue?vue&type=template&id=a996e5f0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_TableContents_vue_vue_type_template_id_a996e5f0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_TableContents_vue_vue_type_template_id_a996e5f0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/TableContents.vue?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_projects_jd_reader_download_reader_node_modules_core_js_3_6_5_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/_core-js@3.6.5@core-js/modules/es.array.iterator.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _data_projects_jd_reader_download_reader_node_modules_core_js_3_6_5_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_projects_jd_reader_download_reader_node_modules_core_js_3_6_5_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_projects_jd_reader_download_reader_node_modules_core_js_3_6_5_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_core-js@3.6.5@core-js/modules/es.promise.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.promise.js\");\n/* harmony import */ var _data_projects_jd_reader_download_reader_node_modules_core_js_3_6_5_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_projects_jd_reader_download_reader_node_modules_core_js_3_6_5_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_projects_jd_reader_download_reader_node_modules_core_js_3_6_5_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/_core-js@3.6.5@core-js/modules/es.object.assign.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.assign.js\");\n/* harmony import */ var _data_projects_jd_reader_download_reader_node_modules_core_js_3_6_5_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_projects_jd_reader_download_reader_node_modules_core_js_3_6_5_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_projects_jd_reader_download_reader_node_modules_core_js_3_6_5_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/_core-js@3.6.5@core-js/modules/es.promise.finally.js */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _data_projects_jd_reader_download_reader_node_modules_core_js_3_6_5_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_projects_jd_reader_download_reader_node_modules_core_js_3_6_5_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/_vue@2.6.11@vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config.productionTip = false;\nnew vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  router: _router__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  }\n}).$mount('#app');\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/_vue@2.6.11@vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/_vue-router@3.1.6@vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _views_Books__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/Books */ \"./src/views/Books.vue\");\n/* harmony import */ var _views_Book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/Book */ \"./src/views/Book.vue\");\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar routes = [{\n  path: '/',\n  name: 'Books',\n  component: _views_Books__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  path: \"/book/:id\",\n  name: \"Book\",\n  component: _views_Book__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}];\nvar router = new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  mode: 'history',\n  base: '/jdreader',\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/*! exports provided: BASE_DIR, BOOKS_ROOT_DIR, getBooksDir, getLocalBookInfo, getBookCategoryTree, getChapterContent, iterableTree, getRecentBooks, getBooksProgress, updateBooksProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BASE_DIR\", function() { return BASE_DIR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BOOKS_ROOT_DIR\", function() { return BOOKS_ROOT_DIR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBooksDir\", function() { return getBooksDir; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocalBookInfo\", function() { return getLocalBookInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBookCategoryTree\", function() { return getBookCategoryTree; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getChapterContent\", function() { return getChapterContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iterableTree\", function() { return iterableTree; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRecentBooks\", function() { return getRecentBooks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBooksProgress\", function() { return getBooksProgress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateBooksProgress\", function() { return updateBooksProgress; });\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar BASE_DIR = \"/jdreader\";\nvar BOOKS_ROOT_DIR = \"\".concat(BASE_DIR, \"/books/\");\n\nfunction getJSON(url) {\n  return fetch(url, {\n    method: \"GET\"\n  }).then(function (data) {\n    return data.json();\n  });\n}\n\nfunction getBooksDir() {\n  var key = \"\".concat(BASE_DIR, \"/books/list\");\n  var promise = null;\n\n  try {\n    var data = JSON.parse(localStorage.getItem(key) || \"[]\");\n\n    if (data && data.length) {\n      promise = Promise.resolve(data);\n    }\n  } catch (ex) {\n    console.warn(\"getBooksDir: \", ex);\n  }\n\n  if (!promise) {\n    promise = getJSON(\"\".concat(BASE_DIR, \"/api/books\"));\n  }\n\n  getJSON(\"\".concat(BASE_DIR, \"/api/books\")).then(function (res) {\n    localStorage.setItem(key, JSON.stringify(res));\n  });\n  return promise;\n}\n/**\n * \n * @param {string} id 书籍id\n * @returns {{\"bookInfo\": {\"author\": string,\"bookId\": number,\"bookName\": string,\"bookType\": number,\"bookUrl\": string,\"readType\": number,\"readTypeMeaning\": string,\"totalPage\": number},\"id\": string,\"name\": string}}\n */\n\nfunction getLocalBookInfo(id) {\n  var books = JSON.parse(localStorage.getItem(\"\".concat(BASE_DIR, \"/books/list\")) || \"[]\");\n  return books.filter(function (b) {\n    return b.id === id;\n  })[0];\n}\nfunction getBookCategoryTree(bookId) {\n  return getJSON(\"\".concat(BOOKS_ROOT_DIR).concat(bookId, \"/raw/categories.json\"));\n}\nfunction getChapterContent(bookId, chapterUrl) {\n  return fetch(\"\".concat(BOOKS_ROOT_DIR).concat(bookId, \"/html/\").concat(chapterUrl)).then(function (response) {\n    if (response.status === 404) {\n      throw new Error(response.statusText);\n    }\n\n    return response.text();\n  });\n}\nfunction iterableTree(tree, callback) {\n  if (!tree.children) {\n    tree.children = [];\n  }\n\n  callback(tree);\n\n  if (tree.children.length) {\n    tree.children.forEach(function (t) {\n      return iterableTree(t, callback);\n    });\n  }\n}\nfunction getRecentBooks(count) {\n  count = parseInt(count);\n\n  if (isNaN(count) || count <= 0) {\n    count = 5;\n  }\n\n  return Promise.resolve(getBooksProgress().sort(function (prev, next) {\n    return next.date - prev.date;\n  }).slice(0, count));\n}\n/**\n * 获取读书进度\n * @returns {[{}]}\n */\n\nfunction getBooksProgress() {\n  try {\n    return JSON.parse(localStorage.getItem(\"\".concat(BASE_DIR, \"/books/progress\")) || \"[]\");\n  } catch (ex) {\n    console.warn(\"getBooksProgress: \", ex);\n    return [];\n  }\n}\n/**\n * 设置读书进度\n * @param {[]} progressData 进度数据\n * @returns {void}\n */\n\nfunction updateBooksProgress(progressData) {\n  localStorage.setItem(\"\".concat(BASE_DIR, \"/books/progress\"), JSON.stringify(progressData));\n}\n\n//# sourceURL=webpack:///./src/services/api.js?");

/***/ }),

/***/ "./src/services/store.js":
/*!*******************************!*\
  !*** ./src/services/store.js ***!
  \*******************************/
/*! exports provided: SharedInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SharedInfo\", function() { return SharedInfo; });\nvar SharedInfo = {\n  category: {\n    selected: {},\n    showToC: false // 是否显示目录 table of contents\n\n  },\n  book: {\n    id: undefined,\n    name: undefined\n  }\n};\n\n//# sourceURL=webpack:///./src/services/store.js?");

/***/ }),

/***/ "./src/views/Book.vue":
/*!****************************!*\
  !*** ./src/views/Book.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Book_vue_vue_type_template_id_170451a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book.vue?vue&type=template&id=170451a3& */ \"./src/views/Book.vue?vue&type=template&id=170451a3&\");\n/* harmony import */ var _Book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Book.vue?vue&type=script&lang=js& */ \"./src/views/Book.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_9_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Book_vue_vue_type_template_id_170451a3___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Book_vue_vue_type_template_id_170451a3___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/Book.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/Book.vue?");

/***/ }),

/***/ "./src/views/Book.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/views/Book.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../node_modules/_babel-loader@8.1.0@babel-loader/lib!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./Book.vue?vue&type=script&lang=js& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/views/Book.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/Book.vue?");

/***/ }),

/***/ "./src/views/Book.vue?vue&type=template&id=170451a3&":
/*!***********************************************************!*\
  !*** ./src/views/Book.vue?vue&type=template&id=170451a3& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_template_id_170451a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c02a620c-vue-loader-template\"}!../../node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./Book.vue?vue&type=template&id=170451a3& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"c02a620c-vue-loader-template\\\"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/views/Book.vue?vue&type=template&id=170451a3&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_template_id_170451a3___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_template_id_170451a3___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Book.vue?");

/***/ }),

/***/ "./src/views/Books.vue":
/*!*****************************!*\
  !*** ./src/views/Books.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Books_vue_vue_type_template_id_659cf840___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Books.vue?vue&type=template&id=659cf840& */ \"./src/views/Books.vue?vue&type=template&id=659cf840&\");\n/* harmony import */ var _Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Books.vue?vue&type=script&lang=js& */ \"./src/views/Books.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_9_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Books_vue_vue_type_template_id_659cf840___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Books_vue_vue_type_template_id_659cf840___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/Books.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/Books.vue?");

/***/ }),

/***/ "./src/views/Books.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/views/Books.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../node_modules/_babel-loader@8.1.0@babel-loader/lib!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./Books.vue?vue&type=script&lang=js& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/views/Books.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/Books.vue?");

/***/ }),

/***/ "./src/views/Books.vue?vue&type=template&id=659cf840&":
/*!************************************************************!*\
  !*** ./src/views/Books.vue?vue&type=template&id=659cf840& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_659cf840___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"c02a620c-vue-loader-template\"}!../../node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./Books.vue?vue&type=template&id=659cf840& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"c02a620c-vue-loader-template\\\"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.2@vue-loader/lib/index.js?!./src/views/Books.vue?vue&type=template&id=659cf840&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_659cf840___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c02a620c_vue_loader_template_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_659cf840___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Books.vue?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });