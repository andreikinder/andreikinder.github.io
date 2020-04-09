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
/******/ 		"main": 0
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
/******/ 	__webpack_require__.p = "/";
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
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _node_modules_lightslider_dist_js_lightslider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/lightslider/dist/js/lightslider.js */ "./node_modules/lightslider/dist/js/lightslider.js");
/* harmony import */ var _node_modules_lightslider_dist_js_lightslider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_lightslider_dist_js_lightslider_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_lightgallery_dist_js_lightgallery_all_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/lightgallery/dist/js/lightgallery-all.js */ "./node_modules/lightgallery/dist/js/lightgallery-all.js");
/* harmony import */ var _node_modules_lightgallery_dist_js_lightgallery_all_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_lightgallery_dist_js_lightgallery_all_js__WEBPACK_IMPORTED_MODULE_3__);




jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var slider = jQuery(".slider_home");
  slider.lightSlider({
    item: 1,
    autoWidth: false,
    slideMove: 1,
    // slidemove will be 1 if loop is true
    slideMargin: 10,
    addClass: 'slider_home_wrapper',
    mode: "slide",
    useCSS: true,
    cssEasing: 'ease',
    //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: 'linear',
    //'for jquery animation',////
    speed: 400,
    //ms'
    auto: false,
    loop: false,
    slideEndAnimation: true,
    pause: 2000,
    keyPress: false,
    controls: true,
    prevHtml: '<svg class="arrow"><use xlink:href="../img/sprites/sprite.svg#arrow_left"></use></svg>',
    nextHtml: '<svg class="arrow"><use xlink:href="../img/sprites/sprite.svg#arrow_right"></use></svg>',
    rtl: false,
    adaptiveHeight: true,
    vertical: false,
    verticalHeight: 500,
    vThumbWidth: 100,
    thumbItem: 10,
    pager: false,
    gallery: false,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: 'middle',
    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,
    responsive: [],
    onBeforeStart: function onBeforeStart(el) {},
    onSliderLoad: function onSliderLoad(el) {},
    onBeforeSlide: function onBeforeSlide(el) {},
    onAfterSlide: function onAfterSlide(el) {},
    onBeforeNextSlide: function onBeforeNextSlide(el) {},
    onBeforePrevSlide: function onBeforePrevSlide(el) {}
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var $imageGallery = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#imageGallery');
  var imageGallery_responsive = [{
    breakpoint: 769,
    settings: {
      thumbItem: 4,
      thumbMargin: 10
    }
  }, {
    breakpoint: 577,
    settings: {
      thumbItem: 3
    }
  }, {
    breakpoint: 426,
    settings: {
      thumbItem: 2
    }
  }];
  var imageGallery_options = {
    gallery: true,
    item: 1,
    loop: true,
    thumbItem: 9,
    slideMargin: 0,
    enableDrag: false,
    currentPagerPosition: 'left',
    addClass: 'imageGallery_wrapper',
    controls: false,
    thumbMargin: 10,
    prevHtml: '<svg class="arrow"><use xlink:href="../img/sprites/sprite.svg#arrow_left"></use></svg>',
    nextHtml: '<svg class="arrow"><use xlink:href="../img/sprites/sprite.svg#arrow_right"></use></svg>',
    responsive: imageGallery_responsive,
    onSliderLoad: function onSliderLoad(el) {
      el.lightGallery({
        selector: '#imageGallery .lslide'
      });
    }
  };
  $imageGallery.lightSlider(imageGallery_options);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#galleryControll__prev').click(function () {
    $imageGallery.goToPrevSlide();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#galleryControll__next').click(function () {
    $imageGallery.goToNextSlide();
  }); // $('.imageGallery_wrapper .lSPager.lSGallery').wrap('<div class="container container_thumbs"> </div>');   
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  function tooLogic(event) {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var $name = $this.data("name") || 'Cтол 4';
    var $src = $this.data("img_src") || 'img/source/hallLayout/table_4.jpg';
    var $toolip = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tooltip');
    var $toolip__title = $toolip.find('.tooltip__title');
    var $toolip__img = $toolip.find('.tooltip__img');

    if ($toolip__title.html() == $name && $toolip.hasClass('tooltip_active')) {
      $toolip.removeClass('tooltip_active');
      return;
    }

    if ($toolip.hasClass('tooltip_active')) {
      $toolip.removeClass('tooltip_active');
    }

    setTimeout(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() >= 992) {
        var coordinates = {
          'left': event.pageX - 40,
          'top': event.pageY - 250
        };
        $toolip.css(coordinates);
      }

      $toolip__title.text($name);
      $toolip__img.attr('src', $src);
      $toolip.addClass('tooltip_active');
    }, 300);
  }

  var $places = jquery__WEBPACK_IMPORTED_MODULE_0___default()('svg .red');

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() < 992) {
    tooLogic($places[4]);
  }

  $places.click(tooLogic);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map