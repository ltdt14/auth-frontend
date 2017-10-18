webpackJsonp([18941895928265],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	/* todo: I want this to actually be an array of Function | string but that causes errors */
	if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_StyleSheet", {
	  value: __webpack_require__(1).shape({
	    create: __webpack_require__(1).func.isRequired
	  })
	});
	
	/* eslint-disable no-undef */

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(48);
	var isBuffer = __webpack_require__(140);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.clones = exports.CONTEXT_KEY = exports.LOCAL_ATTR = exports.SC_ATTR = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BrowserStyleSheet = __webpack_require__(171);
	
	var _BrowserStyleSheet2 = _interopRequireDefault(_BrowserStyleSheet);
	
	var _ServerStyleSheet = __webpack_require__(62);
	
	var _ServerStyleSheet2 = _interopRequireDefault(_ServerStyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SC_ATTR = exports.SC_ATTR = 'data-styled-components';
	var LOCAL_ATTR = exports.LOCAL_ATTR = 'data-styled-components-is-local';
	var CONTEXT_KEY = exports.CONTEXT_KEY = '__styled-components-stylesheet__';
	
	var instance = null;
	// eslint-disable-next-line no-use-before-define
	var clones = exports.clones = [];
	
	var StyleSheet = function () {
	  function StyleSheet(tagConstructor) {
	    var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	    var names = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    _classCallCheck(this, StyleSheet);
	
	    this.hashes = {};
	    this.deferredInjections = {};
	    this.stylesCacheable = typeof document !== 'undefined';
	
	    this.tagConstructor = tagConstructor;
	    this.tags = tags;
	    this.names = names;
	    this.constructComponentTagMap();
	  }
	  // helper for `ComponentStyle` to know when it cache static styles.
	  // staticly styled-component can not safely cache styles on the server
	  // without all `ComponentStyle` instances saving a reference to the
	  // the styleSheet instance they last rendered with,
	  // or listening to creation / reset events. otherwise you might create
	  // a component with one stylesheet and render it another api response
	  // with another, losing styles on from your server-side render.
	
	
	  StyleSheet.prototype.constructComponentTagMap = function constructComponentTagMap() {
	    var _this = this;
	
	    this.componentTags = {};
	
	    this.tags.forEach(function (tag) {
	      Object.keys(tag.components).forEach(function (componentId) {
	        _this.componentTags[componentId] = tag;
	      });
	    });
	  };
	
	  /* Best level of caching—get the name from the hash straight away. */
	
	
	  StyleSheet.prototype.getName = function getName(hash) {
	    return this.hashes[hash.toString()];
	  };
	
	  /* Second level of caching—if the name is already in the dom, don't
	   * inject anything and record the hash for getName next time. */
	
	
	  StyleSheet.prototype.alreadyInjected = function alreadyInjected(hash, name) {
	    if (!this.names[name]) return false;
	
	    this.hashes[hash.toString()] = name;
	    return true;
	  };
	
	  /* Third type of caching—don't inject components' componentId twice. */
	
	
	  StyleSheet.prototype.hasInjectedComponent = function hasInjectedComponent(componentId) {
	    return !!this.componentTags[componentId];
	  };
	
	  StyleSheet.prototype.deferredInject = function deferredInject(componentId, isLocal, css) {
	    if (this === instance) {
	      clones.forEach(function (clone) {
	        clone.deferredInject(componentId, isLocal, css);
	      });
	    }
	
	    this.getOrCreateTag(componentId, isLocal);
	    this.deferredInjections[componentId] = css;
	  };
	
	  StyleSheet.prototype.inject = function inject(componentId, isLocal, css, hash, name) {
	    if (this === instance) {
	      clones.forEach(function (clone) {
	        clone.inject(componentId, isLocal, css);
	      });
	    }
	
	    var tag = this.getOrCreateTag(componentId, isLocal);
	
	    var deferredInjection = this.deferredInjections[componentId];
	    if (deferredInjection) {
	      tag.inject(componentId, deferredInjection);
	      delete this.deferredInjections[componentId];
	    }
	
	    tag.inject(componentId, css, name);
	
	    if (hash && name) {
	      this.hashes[hash.toString()] = name;
	    }
	  };
	
	  StyleSheet.prototype.toHTML = function toHTML() {
	    return this.tags.map(function (tag) {
	      return tag.toHTML();
	    }).join('');
	  };
	
	  StyleSheet.prototype.toReactElements = function toReactElements() {
	    return this.tags.map(function (tag, i) {
	      return tag.toReactElement('sc-' + i);
	    });
	  };
	
	  StyleSheet.prototype.getOrCreateTag = function getOrCreateTag(componentId, isLocal) {
	    var existingTag = this.componentTags[componentId];
	    if (existingTag) {
	      return existingTag;
	    }
	
	    var lastTag = this.tags[this.tags.length - 1];
	    var componentTag = !lastTag || lastTag.isFull() || lastTag.isLocal !== isLocal ? this.createNewTag(isLocal) : lastTag;
	    this.componentTags[componentId] = componentTag;
	    componentTag.addComponent(componentId);
	    return componentTag;
	  };
	
	  StyleSheet.prototype.createNewTag = function createNewTag(isLocal) {
	    var newTag = this.tagConstructor(isLocal);
	    this.tags.push(newTag);
	    return newTag;
	  };
	
	  StyleSheet.reset = function reset(isServer) {
	    instance = StyleSheet.create(isServer);
	  };
	
	  /* We can make isServer totally implicit once Jest 20 drops and we
	   * can change environment on a per-test basis. */
	
	
	  StyleSheet.create = function create() {
	    var isServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof document === 'undefined';
	
	    return (isServer ? _ServerStyleSheet2.default : _BrowserStyleSheet2.default).create();
	  };
	
	  StyleSheet.clone = function clone(oldSheet) {
	    var newSheet = new StyleSheet(oldSheet.tagConstructor, oldSheet.tags.map(function (tag) {
	      return tag.clone();
	    }), _extends({}, oldSheet.names));
	
	    newSheet.hashes = _extends({}, oldSheet.hashes);
	    newSheet.deferredInjections = _extends({}, oldSheet.deferredInjections);
	    clones.push(newSheet);
	
	    return newSheet;
	  };
	
	  _createClass(StyleSheet, null, [{
	    key: 'instance',
	    get: function get() {
	      return instance || (instance = StyleSheet.create());
	    }
	  }]);
	
	  return StyleSheet;
	}();
	
	exports.default = StyleSheet;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.CONTEXT_CHANNEL_SHAPE = exports.CHANNEL_NEXT = exports.CHANNEL = undefined;
	
	var _ThemeProvider$childC, _ThemeProvider$contex;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isFunction = __webpack_require__(141);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isPlainObject = __webpack_require__(54);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _createBroadcast = __webpack_require__(64);
	
	var _createBroadcast2 = _interopRequireDefault(_createBroadcast);
	
	var _once = __webpack_require__(181);
	
	var _once2 = _interopRequireDefault(_once);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	/* globals React$Element */
	
	
	var babelPluginFlowReactPropTypes_proptype_Broadcast = __webpack_require__(64).babelPluginFlowReactPropTypes_proptype_Broadcast || __webpack_require__(1).any;
	
	// NOTE: DO NOT CHANGE, changing this is a semver major change!
	var CHANNEL = exports.CHANNEL = '__styled-components__';
	var CHANNEL_NEXT = exports.CHANNEL_NEXT = CHANNEL + 'next__';
	
	var CONTEXT_CHANNEL_SHAPE = exports.CONTEXT_CHANNEL_SHAPE = _propTypes2.default.shape({
	  getTheme: _propTypes2.default.func,
	  subscribe: _propTypes2.default.func,
	  unsubscribe: _propTypes2.default.func
	});
	
	if (true) Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Theme', {
	  value: __webpack_require__(1).shape({})
	});
	
	
	var warnChannelDeprecated = (0, _once2.default)(function () {
	  // eslint-disable-next-line no-console
	  console.error('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
	});
	/**
	 * Provide a theme to an entire react component tree via context and event listeners (have to do
	 * both context and event emitter as pure components block context updates)
	 */
	
	var ThemeProvider = function (_Component) {
	  _inherits(ThemeProvider, _Component);
	
	  function ThemeProvider() {
	    _classCallCheck(this, ThemeProvider);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this));
	
	    _this.unsubscribeToOuterId = -1;
	
	    _this.getTheme = _this.getTheme.bind(_this);
	    return _this;
	  }
	
	  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;
	
	    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
	    // with the outer theme
	    var outerContext = this.context[CHANNEL_NEXT];
	    if (outerContext !== undefined) {
	      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
	        _this2.outerTheme = theme;
	      });
	    }
	    this.broadcast = (0, _createBroadcast2.default)(this.getTheme());
	  };
	
	  ThemeProvider.prototype.getChildContext = function getChildContext() {
	    var _this3 = this,
	        _extends2;
	
	    return _extends({}, this.context, (_extends2 = {}, _extends2[CHANNEL_NEXT] = {
	      getTheme: this.getTheme,
	      subscribe: this.broadcast.subscribe,
	      unsubscribe: this.broadcast.unsubscribe
	    }, _extends2[CHANNEL] = function (subscriber) {
	      warnChannelDeprecated();
	
	      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
	      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
	      return function () {
	        return _this3.broadcast.unsubscribe(unsubscribeId);
	      };
	    }, _extends2));
	  };
	
	  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.theme !== nextProps.theme) this.broadcast.publish(this.getTheme(nextProps.theme));
	  };
	
	  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.unsubscribeToOuterId !== -1) {
	      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
	    }
	  };
	
	  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
	
	
	  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
	    var theme = passedTheme || this.props.theme;
	    if ((0, _isFunction2.default)(theme)) {
	      var mergedTheme = theme(this.outerTheme);
	      if (!(0, _isPlainObject2.default)(mergedTheme)) {
	        throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
	      }
	      return mergedTheme;
	    }
	    if (!(0, _isPlainObject2.default)(theme)) {
	      throw new Error('[ThemeProvider] Please make your theme prop a plain object');
	    }
	    return _extends({}, this.outerTheme, theme);
	  };
	
	  ThemeProvider.prototype.render = function render() {
	    if (!this.props.children) {
	      return null;
	    }
	    return _react2.default.Children.only(this.props.children);
	  };
	
	  return ThemeProvider;
	}(_react.Component);
	
	ThemeProvider.propTypes = {
	  children: __webpack_require__(1).any,
	  theme: __webpack_require__(1).oneOfType([__webpack_require__(1).shape({}), __webpack_require__(1).func]).isRequired
	};
	
	
	ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = _propTypes2.default.func, _ThemeProvider$childC[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$childC);
	ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);
	
	exports.default = ThemeProvider;

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(7);
	var normalizeHeaderName = __webpack_require__(104);
	
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(44);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(44);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = isStyledComponent;
	
	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(1).any;
	
	function isStyledComponent(target) /* : %checks */{
	  return typeof target === 'function' && typeof target.styledComponentId === 'string';
	}
	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = doHash;
	// murmurhash2 via https://gist.github.com/raycmorgan/588423
	
	function doHash(str, seed) {
	  var m = 0x5bd1e995;
	  var r = 24;
	  var h = seed ^ str.length;
	  var length = str.length;
	  var currentIndex = 0;
	
	  while (length >= 4) {
	    var k = UInt32(str, currentIndex);
	
	    k = Umul32(k, m);
	    k ^= k >>> r;
	    k = Umul32(k, m);
	
	    h = Umul32(h, m);
	    h ^= k;
	
	    currentIndex += 4;
	    length -= 4;
	  }
	
	  switch (length) {
	    case 3:
	      h ^= UInt16(str, currentIndex);
	      h ^= str.charCodeAt(currentIndex + 2) << 16;
	      h = Umul32(h, m);
	      break;
	
	    case 2:
	      h ^= UInt16(str, currentIndex);
	      h = Umul32(h, m);
	      break;
	
	    case 1:
	      h ^= str.charCodeAt(currentIndex);
	      h = Umul32(h, m);
	      break;
	  }
	
	  h ^= h >>> 13;
	  h = Umul32(h, m);
	  h ^= h >>> 15;
	
	  return h >>> 0;
	}
	
	function UInt32(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
	}
	
	function UInt16(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
	}
	
	function Umul32(n, m) {
	  n = n | 0;
	  m = m | 0;
	  var nlo = n & 0xffff;
	  var nhi = n >>> 16;
	  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
	  return res;
	}
	module.exports = exports["default"];

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	var settle = __webpack_require__(96);
	var buildURL = __webpack_require__(99);
	var parseHeaders = __webpack_require__(105);
	var isURLSameOrigin = __webpack_require__(103);
	var createError = __webpack_require__(47);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(98);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (("production") !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(101);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(95);
	
	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(142);
	
	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}
	
	module.exports = function isPlainObject(o) {
	  var ctor,prot;
	
	  if (isObjectObject(o) === false) return false;
	
	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;
	
	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;
	
	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }
	
	  // Most likely a plain Object
	  return true;
	};


/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, exports) {

	exports.__esModule = true;
	var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
	    BODY: "bodyAttributes",
	    HTML: "htmlAttributes",
	    TITLE: "titleAttributes"
	};
	
	var TAG_NAMES = exports.TAG_NAMES = {
	    BASE: "base",
	    BODY: "body",
	    HEAD: "head",
	    HTML: "html",
	    LINK: "link",
	    META: "meta",
	    NOSCRIPT: "noscript",
	    SCRIPT: "script",
	    STYLE: "style",
	    TITLE: "title"
	};
	
	var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
	    return TAG_NAMES[name];
	});
	
	var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
	    CHARSET: "charset",
	    CSS_TEXT: "cssText",
	    HREF: "href",
	    HTTPEQUIV: "http-equiv",
	    INNER_HTML: "innerHTML",
	    ITEM_PROP: "itemprop",
	    NAME: "name",
	    PROPERTY: "property",
	    REL: "rel",
	    SRC: "src"
	};
	
	var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
	    accesskey: "accessKey",
	    charset: "charSet",
	    class: "className",
	    contenteditable: "contentEditable",
	    contextmenu: "contextMenu",
	    "http-equiv": "httpEquiv",
	    itemprop: "itemProp",
	    tabindex: "tabIndex"
	};
	
	var HELMET_PROPS = exports.HELMET_PROPS = {
	    DEFAULT_TITLE: "defaultTitle",
	    DEFER: "defer",
	    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
	    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
	    TITLE_TEMPLATE: "titleTemplate"
	};
	
	var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
	    obj[REACT_TAG_MAP[key]] = key;
	    return obj;
	}, {});
	
	var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
	
	var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _StyleSheet = __webpack_require__(10);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	var _StyleSheetManager = __webpack_require__(63);
	
	var _StyleSheetManager2 = _interopRequireDefault(_StyleSheetManager);
	
	var _nonce = __webpack_require__(66);
	
	var _nonce2 = _interopRequireDefault(_nonce);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	/* eslint-disable no-underscore-dangle */
	
	
	var babelPluginFlowReactPropTypes_proptype_Tag = __webpack_require__(10).babelPluginFlowReactPropTypes_proptype_Tag || __webpack_require__(1).any;
	
	var ServerTag = function () {
	  function ServerTag(isLocal) {
	    _classCallCheck(this, ServerTag);
	
	    this.isLocal = isLocal;
	    this.components = {};
	    this.size = 0;
	    this.names = [];
	  }
	
	  ServerTag.prototype.isFull = function isFull() {
	    return false;
	  };
	
	  ServerTag.prototype.addComponent = function addComponent(componentId) {
	    if (this.components[componentId]) throw new Error('Trying to add Component \'' + componentId + '\' twice!');
	    this.components[componentId] = { componentId: componentId, css: '' };
	    this.size += 1;
	  };
	
	  ServerTag.prototype.concatenateCSS = function concatenateCSS() {
	    var _this = this;
	
	    return Object.keys(this.components).reduce(function (styles, k) {
	      return styles + _this.components[k].css;
	    }, '');
	  };
	
	  ServerTag.prototype.inject = function inject(componentId, css, name) {
	    var comp = this.components[componentId];
	
	    if (!comp) throw new Error('Must add a new component before you can inject css into it');
	    if (comp.css === '') comp.css = '/* sc-component-id: ' + componentId + ' */\n';
	
	    comp.css += css.replace(/\n*$/, '\n');
	
	    if (name) this.names.push(name);
	  };
	
	  ServerTag.prototype.toHTML = function toHTML() {
	    var attrs = ['type="text/css"', _StyleSheet.SC_ATTR + '="' + this.names.join(' ') + '"', _StyleSheet.LOCAL_ATTR + '="' + (this.isLocal ? 'true' : 'false') + '"'];
	
	    var nonce = (0, _nonce2.default)();
	
	    if (nonce) {
	      attrs.push('nonce="' + nonce + '"');
	    }
	
	    return '<style ' + attrs.join(' ') + '>' + this.concatenateCSS() + '</style>';
	  };
	
	  ServerTag.prototype.toReactElement = function toReactElement(key) {
	    var _attrs;
	
	    var attrs = (_attrs = {}, _attrs[_StyleSheet.SC_ATTR] = this.names.join(' '), _attrs[_StyleSheet.LOCAL_ATTR] = this.isLocal.toString(), _attrs);
	
	    var nonce = (0, _nonce2.default)();
	
	    if (nonce) {
	      attrs.nonce = nonce;
	    }
	
	    return _react2.default.createElement('style', _extends({
	      key: key, type: 'text/css' }, attrs, {
	      dangerouslySetInnerHTML: { __html: this.concatenateCSS() }
	    }));
	  };
	
	  ServerTag.prototype.clone = function clone() {
	    var _this2 = this;
	
	    var copy = new ServerTag(this.isLocal);
	    copy.names = [].concat(this.names);
	    copy.size = this.size;
	    copy.components = Object.keys(this.components).reduce(function (acc, key) {
	      acc[key] = _extends({}, _this2.components[key]); // eslint-disable-line no-param-reassign
	      return acc;
	    }, {});
	
	    return copy;
	  };
	
	  return ServerTag;
	}();
	
	var ServerStyleSheet = function () {
	  function ServerStyleSheet() {
	    _classCallCheck(this, ServerStyleSheet);
	
	    this.instance = _StyleSheet2.default.clone(_StyleSheet2.default.instance);
	  }
	
	  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
	    if (this.closed) throw new Error("Can't collect styles once you've called getStyleTags!");
	    return _react2.default.createElement(
	      _StyleSheetManager2.default,
	      { sheet: this.instance },
	      children
	    );
	  };
	
	  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
	    if (!this.closed) {
	      _StyleSheet.clones.splice(_StyleSheet.clones.indexOf(this.instance), 1);
	      this.closed = true;
	    }
	
	    return this.instance.toHTML();
	  };
	
	  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
	    if (!this.closed) {
	      _StyleSheet.clones.splice(_StyleSheet.clones.indexOf(this.instance), 1);
	      this.closed = true;
	    }
	
	    return this.instance.toReactElements();
	  };
	
	  ServerStyleSheet.create = function create() {
	    return new _StyleSheet2.default(function (isLocal) {
	      return new ServerTag(isLocal);
	    });
	  };
	
	  return ServerStyleSheet;
	}();
	
	exports.default = ServerStyleSheet;
	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _StyleSheetManager$ch;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _StyleSheet = __webpack_require__(10);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StyleSheetManager = function (_Component) {
	  _inherits(StyleSheetManager, _Component);
	
	  function StyleSheetManager() {
	    _classCallCheck(this, StyleSheetManager);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  StyleSheetManager.prototype.getChildContext = function getChildContext() {
	    var _ref;
	
	    return _ref = {}, _ref[_StyleSheet.CONTEXT_KEY] = this.props.sheet, _ref;
	  };
	
	  StyleSheetManager.prototype.render = function render() {
	    /* eslint-disable react/prop-types */
	    // Flow v0.43.1 will report an error accessing the `children` property,
	    // but v0.47.0 will not. It is necessary to use a type cast instead of
	    // a "fixme" comment to satisfy both Flow versions.
	    return _react2.default.Children.only(this.props.children);
	  };
	
	  return StyleSheetManager;
	}(_react.Component);
	
	StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[_StyleSheet.CONTEXT_KEY] = _propTypes2.default.instanceOf(_StyleSheet2.default).isRequired, _StyleSheetManager$ch);
	
	StyleSheetManager.propTypes = {
	  sheet: _propTypes2.default.instanceOf(_StyleSheet2.default).isRequired
	};
	
	exports.default = StyleSheetManager;
	module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_Broadcast", {
	  value: __webpack_require__(1).shape({
	    publish: __webpack_require__(1).func.isRequired,
	    subscribe: __webpack_require__(1).func.isRequired,
	    unsubscribe: __webpack_require__(1).func.isRequired
	  })
	});
	/**
	 * Creates a broadcast that can be listened to, i.e. simple event emitter
	 *
	 * @see https://github.com/ReactTraining/react-broadcast
	 */
	
	var createBroadcast = function createBroadcast(initialState) {
	  var listeners = {};
	  var id = 0;
	  var state = initialState;
	
	  function publish(nextState) {
	    state = nextState;
	
	    // eslint-disable-next-line guard-for-in, no-restricted-syntax
	    for (var key in listeners) {
	      var _listener = listeners[key];
	      if (_listener === undefined) {
	        // eslint-disable-next-line no-continue
	        continue;
	      }
	
	      _listener(state);
	    }
	  }
	
	  function subscribe(listener) {
	    var currentId = id;
	    listeners[currentId] = listener;
	    id += 1;
	    listener(state);
	    return currentId;
	  }
	
	  function unsubscribe(unsubID) {
	    listeners[unsubID] = undefined;
	  }
	
	  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
	};
	
	exports.default = createBroadcast;
	module.exports = exports["default"];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.objToCss = undefined;
	
	var _hyphenateStyleName = __webpack_require__(134);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _isPlainObject = __webpack_require__(54);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(1).any;
	
	var objToCss = exports.objToCss = function objToCss(obj, prevKey) {
	  var css = Object.keys(obj).filter(function (key) {
	    var chunk = obj[key];
	    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
	  }).map(function (key) {
	    if ((0, _isPlainObject2.default)(obj[key])) return objToCss(obj[key], key);
	    return (0, _hyphenateStyleName2.default)(key) + ': ' + obj[key] + ';';
	  }).join(' ');
	  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
	};
	
	var flatten = function flatten(chunks, executionContext) {
	  return chunks.reduce(function (ruleSet, chunk) {
	    /* Remove falsey values */
	    if (chunk === undefined || chunk === null || chunk === false || chunk === '') return ruleSet;
	    /* Flatten ruleSet */
	    if (Array.isArray(chunk)) return [].concat(ruleSet, flatten(chunk, executionContext));
	
	    /* Handle other components */
	    // $FlowFixMe not sure how to make this pass
	    if (chunk.hasOwnProperty('styledComponentId')) return [].concat(ruleSet, ['.' + chunk.styledComponentId]);
	
	    /* Either execute or defer the function */
	    if (typeof chunk === 'function') {
	      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
	    }
	
	    /* Handle objects */
	    // $FlowFixMe have to add %checks somehow to isPlainObject
	    return ruleSet.concat((0, _isPlainObject2.default)(chunk) ? objToCss(chunk) : chunk.toString());
	  }, []);
	};
	
	exports.default = flatten;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports.default = function () {
	  return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
	};
	/* eslint-disable camelcase, no-undef */
	
	module.exports = exports['default'];

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.Helmet = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSideEffect = __webpack_require__(163);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _deepEqual = __webpack_require__(129);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _HelmetUtils = __webpack_require__(160);
	
	var _HelmetConstants = __webpack_require__(59);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Helmet = function Helmet(Component) {
	    var _class, _temp;
	
	    return _temp = _class = function (_React$Component) {
	        _inherits(HelmetWrapper, _React$Component);
	
	        function HelmetWrapper() {
	            _classCallCheck(this, HelmetWrapper);
	
	            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	        }
	
	        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	            return !(0, _deepEqual2.default)(this.props, nextProps);
	        };
	
	        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
	            if (!nestedChildren) {
	                return null;
	            }
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.SCRIPT:
	                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    return {
	                        innerHTML: nestedChildren
	                    };
	
	                case _HelmetConstants.TAG_NAMES.STYLE:
	                    return {
	                        cssText: nestedChildren
	                    };
	            }
	
	            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
	        };
	
	        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
	            var _extends2;
	
	            var child = _ref.child,
	                arrayTypeChildren = _ref.arrayTypeChildren,
	                newChildProps = _ref.newChildProps,
	                nestedChildren = _ref.nestedChildren;
	
	            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
	        };
	
	        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
	            var _extends3, _extends4;
	
	            var child = _ref2.child,
	                newProps = _ref2.newProps,
	                newChildProps = _ref2.newChildProps,
	                nestedChildren = _ref2.nestedChildren;
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.TITLE:
	                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));
	
	                case _HelmetConstants.TAG_NAMES.BODY:
	                    return _extends({}, newProps, {
	                        bodyAttributes: _extends({}, newChildProps)
	                    });
	
	                case _HelmetConstants.TAG_NAMES.HTML:
	                    return _extends({}, newProps, {
	                        htmlAttributes: _extends({}, newChildProps)
	                    });
	            }
	
	            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
	        };
	
	        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
	            var newFlattenedProps = _extends({}, newProps);
	
	            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
	                var _extends5;
	
	                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
	            });
	
	            return newFlattenedProps;
	        };
	
	        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
	            if (false) {
	                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
	                    return child.type === name;
	                })) {
	                    if (typeof child.type === "function") {
	                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
	                    }
	
	                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
	                }
	
	                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
	                    return typeof nestedChild !== "string";
	                }))) {
	                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
	                }
	            }
	
	            return true;
	        };
	
	        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
	            var _this2 = this;
	
	            var arrayTypeChildren = {};
	
	            _react2.default.Children.forEach(children, function (child) {
	                if (!child || !child.props) {
	                    return;
	                }
	
	                var _child$props = child.props,
	                    nestedChildren = _child$props.children,
	                    childProps = _objectWithoutProperties(_child$props, ["children"]);
	
	                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);
	
	                _this2.warnOnInvalidChildren(child, nestedChildren);
	
	                switch (child.type) {
	                    case _HelmetConstants.TAG_NAMES.LINK:
	                    case _HelmetConstants.TAG_NAMES.META:
	                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    case _HelmetConstants.TAG_NAMES.SCRIPT:
	                    case _HelmetConstants.TAG_NAMES.STYLE:
	                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
	                            child: child,
	                            arrayTypeChildren: arrayTypeChildren,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	
	                    default:
	                        newProps = _this2.mapObjectTypeChildren({
	                            child: child,
	                            newProps: newProps,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	                }
	            });
	
	            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
	            return newProps;
	        };
	
	        HelmetWrapper.prototype.render = function render() {
	            var _props = this.props,
	                children = _props.children,
	                props = _objectWithoutProperties(_props, ["children"]);
	
	            var newProps = _extends({}, props);
	
	            if (children) {
	                newProps = this.mapChildrenToProps(children, newProps);
	            }
	
	            return _react2.default.createElement(Component, newProps);
	        };
	
	        _createClass(HelmetWrapper, null, [{
	            key: "canUseDOM",
	
	
	            // Component.peek comes from react-side-effect:
	            // For testing, you may use a static peek() method available on the returned component.
	            // It lets you get the current state without resetting the mounted instance stack.
	            // Don’t use it for anything other than testing.
	
	            /**
	            * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
	            * @param {Object} bodyAttributes: {"className": "root"}
	            * @param {String} defaultTitle: "Default Title"
	            * @param {Boolean} defer: true
	            * @param {Boolean} encodeSpecialCharacters: true
	            * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
	            * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
	            * @param {Array} meta: [{"name": "description", "content": "Test description"}]
	            * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
	            * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
	            * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
	            * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
	            * @param {String} title: "Title"
	            * @param {Object} titleAttributes: {"itemprop": "name"}
	            * @param {String} titleTemplate: "MySite.com - %s"
	            */
	            set: function set(canUseDOM) {
	                Component.canUseDOM = canUseDOM;
	            }
	        }]);
	
	        return HelmetWrapper;
	    }(_react2.default.Component), _class.propTypes = {
	        base: _propTypes2.default.object,
	        bodyAttributes: _propTypes2.default.object,
	        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
	        defaultTitle: _propTypes2.default.string,
	        defer: _propTypes2.default.bool,
	        encodeSpecialCharacters: _propTypes2.default.bool,
	        htmlAttributes: _propTypes2.default.object,
	        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        onChangeClientState: _propTypes2.default.func,
	        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        title: _propTypes2.default.string,
	        titleAttributes: _propTypes2.default.object,
	        titleTemplate: _propTypes2.default.string
	    }, _class.defaultProps = {
	        defer: true,
	        encodeSpecialCharacters: true
	    }, _class.peek = Component.peek, _class.rewind = function () {
	        var mappedState = Component.rewind();
	        if (!mappedState) {
	            // provide fallback if mappedState is undefined
	            mappedState = (0, _HelmetUtils.mapStateOnServer)({
	                baseTag: [],
	                bodyAttributes: {},
	                encodeSpecialCharacters: true,
	                htmlAttributes: {},
	                linkTags: [],
	                metaTags: [],
	                noscriptTags: [],
	                scriptTags: [],
	                styleTags: [],
	                title: "",
	                titleAttributes: {}
	            });
	        }
	
	        return mappedState;
	    }, _temp;
	};
	
	var NullComponent = function NullComponent() {
	    return null;
	};
	
	var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
	
	var HelmetExport = Helmet(HelmetSideEffects);
	HelmetExport.renderStatic = HelmetExport.rewind;
	
	exports.Helmet = HelmetExport;
	exports.default = HelmetExport;

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.StyleSheetManager = exports.ServerStyleSheet = exports.withTheme = exports.ThemeProvider = exports.injectGlobal = exports.keyframes = exports.css = undefined;
	
	var _flatten = __webpack_require__(65);
	
	var _flatten2 = _interopRequireDefault(_flatten);
	
	var _stringifyRules = __webpack_require__(182);
	
	var _stringifyRules2 = _interopRequireDefault(_stringifyRules);
	
	var _generateAlphabeticName = __webpack_require__(177);
	
	var _generateAlphabeticName2 = _interopRequireDefault(_generateAlphabeticName);
	
	var _css = __webpack_require__(166);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _ServerStyleSheet = __webpack_require__(62);
	
	var _ServerStyleSheet2 = _interopRequireDefault(_ServerStyleSheet);
	
	var _StyleSheetManager = __webpack_require__(63);
	
	var _StyleSheetManager2 = _interopRequireDefault(_StyleSheetManager);
	
	var _StyledComponent2 = __webpack_require__(173);
	
	var _StyledComponent3 = _interopRequireDefault(_StyledComponent2);
	
	var _ComponentStyle2 = __webpack_require__(172);
	
	var _ComponentStyle3 = _interopRequireDefault(_ComponentStyle2);
	
	var _styled2 = __webpack_require__(169);
	
	var _styled3 = _interopRequireDefault(_styled2);
	
	var _keyframes2 = __webpack_require__(168);
	
	var _keyframes3 = _interopRequireDefault(_keyframes2);
	
	var _injectGlobal2 = __webpack_require__(167);
	
	var _injectGlobal3 = _interopRequireDefault(_injectGlobal2);
	
	var _constructWithOptions2 = __webpack_require__(165);
	
	var _constructWithOptions3 = _interopRequireDefault(_constructWithOptions2);
	
	var _ThemeProvider = __webpack_require__(22);
	
	var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);
	
	var _withTheme = __webpack_require__(170);
	
	var _withTheme2 = _interopRequireDefault(_withTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* Instantiate singletons */
	
	
	/* Import components */
	
	
	/* Import singleton constructors */
	
	
	/* Import singletons */
	var ComponentStyle = (0, _ComponentStyle3.default)(_generateAlphabeticName2.default, _flatten2.default, _stringifyRules2.default);
	
	/* Import Higher Order Components */
	
	var constructWithOptions = (0, _constructWithOptions3.default)(_css2.default);
	var StyledComponent = (0, _StyledComponent3.default)(ComponentStyle, constructWithOptions);
	
	/* Instantiate exported singletons */
	var keyframes = (0, _keyframes3.default)(_generateAlphabeticName2.default, _stringifyRules2.default, _css2.default);
	var injectGlobal = (0, _injectGlobal3.default)(_stringifyRules2.default, _css2.default);
	var styled = (0, _styled3.default)(StyledComponent, constructWithOptions);
	
	/* Export everything */
	exports.default = styled;
	exports.css = _css2.default;
	exports.keyframes = keyframes;
	exports.injectGlobal = injectGlobal;
	exports.ThemeProvider = _ThemeProvider2.default;
	exports.withTheme = _withTheme2.default;
	exports.ServerStyleSheet = _ServerStyleSheet2.default;
	exports.StyleSheetManager = _StyleSheetManager2.default;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(90);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	var bind = __webpack_require__(48);
	var Axios = __webpack_require__(92);
	var defaults = __webpack_require__(25);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(45);
	axios.CancelToken = __webpack_require__(91);
	axios.isCancel = __webpack_require__(46);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(106);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(45);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(25);
	var utils = __webpack_require__(7);
	var InterceptorManager = __webpack_require__(93);
	var dispatchRequest = __webpack_require__(94);
	var isAbsoluteURL = __webpack_require__(102);
	var combineURLs = __webpack_require__(100);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	  config.method = config.method.toLowerCase();
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	var transformData = __webpack_require__(97);
	var isCancel = __webpack_require__(46);
	var defaults = __webpack_require__(25);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  return error;
	};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(47);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ }),
/* 98 */
/***/ (function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ }),
/* 100 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ }),
/* 102 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });
	
	  return parsed;
	};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Wrapper = undefined;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n    .uk-section-primary {\n        background: #92b4a7;\n    }\n    \n    .uk-tile-primary {\n        background: #92b4a7;\n    }\n\n    .uk-section {\n        padding-top: 200px;\n    }\n\n    .uk-button-primary {\n        background-color: #92b4a7;\n        color: #fff;\n        border: 1px solid transparent;\n    }\n\n    .uk-button-primary:hover,\n    .uk-button-primary:focus {\n        background-color: #8cada0;\n        color: #fff;\n    }\n\n    .uk-input,\n    .uk-select,\n    .uk-textarea {\n        border: 1px solid #333;\n    }\n'], ['\n    .uk-section-primary {\n        background: #92b4a7;\n    }\n    \n    .uk-tile-primary {\n        background: #92b4a7;\n    }\n\n    .uk-section {\n        padding-top: 200px;\n    }\n\n    .uk-button-primary {\n        background-color: #92b4a7;\n        color: #fff;\n        border: 1px solid transparent;\n    }\n\n    .uk-button-primary:hover,\n    .uk-button-primary:focus {\n        background-color: #8cada0;\n        color: #fff;\n    }\n\n    .uk-input,\n    .uk-select,\n    .uk-textarea {\n        border: 1px solid #333;\n    }\n']);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _uikit = __webpack_require__(76);
	
	var _uikit2 = _interopRequireDefault(_uikit);
	
	var _styledComponents = __webpack_require__(88);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _themeVariables = __webpack_require__(110);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Wrapper = exports.Wrapper = _styledComponents2.default.div(_templateObject);
	
	var StylingOverrides = function (_Component) {
	    _inherits(StylingOverrides, _Component);
	
	    function StylingOverrides() {
	        _classCallCheck(this, StylingOverrides);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    StylingOverrides.prototype.render = function render() {
	        return _react2.default.createElement(
	            _styledComponents.ThemeProvider,
	            { theme: _themeVariables.themeVariables },
	            _react2.default.createElement(
	                Wrapper,
	                null,
	                this.props.children
	            )
	        );
	    };
	
	    return StylingOverrides;
	}(_react.Component);
	
	exports.default = StylingOverrides;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var apiBaseURL = exports.apiBaseURL = 'https://authexample.lassetodt.de';

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var storageAvailable = exports.storageAvailable = function storageAvailable(type) {
	    try {
	        var storage = window[type];
	        var x = '__storage_test__';
	        storage.setItem(x, x);
	        storage.removeItem(x);
	        return true;
	    } catch (e) {
	        return false;
	    }
	};

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var themeVariables = exports.themeVariables = {
	    screenMdMax: '1199px',
	    screenSmMax: '991px',
	    screenXsMax: '767px',
	    screenXxsMax: '479px',
	
	    containerLg: '930px',
	    containerMd: '930px',
	    containerSm: '700px',
	    containerXs: '460px',
	    containerXxs: '320px',
	
	    paddingBaseVertical: '6px',
	    paddingBaseHorizontal: '12px',
	    fontSizeBase: '14px',
	    lineHeightBase: '1.228571429',
	    borderRadiusBase: '3px',
	
	    paddingLargeVertical: '10px',
	    paddingLargeHorizontal: '16px',
	    fontSizeLarge: '20px',
	    lineHeightLarge: '1.3333333',
	    borderRadiusLarge: '3px',
	
	    primaryButtonColor: '#fff',
	    primaryButtonBg: 'transparent',
	    primaryButtonBorder: '#000',
	    primaryButtonFhaColor: '#fff',
	    primaryButtonFhaBg: '#000',
	    primaryButtonFhaBorder: '#000',
	
	    noborderButtonColor: '#fff',
	    noborderButtonBg: 'transparent',
	    noborderButtonBorder: 'transparent',
	    noborderButtonFhaColor: '#bbb',
	    noborderButtonFhaBg: 'transparent',
	    noborderButtonFhaBorder: 'transparent',
	
	    headerNavHeight: '55px',
	    headerNavBg: '#111111',
	    headerNavHeightClosed: '55px',
	    headerNavHeightOpen: '390px',
	    headerBreakpoint: '1199px',
	    headerListItem: '#ffffff',
	    headerListItemFhaBg: '#ffffff',
	    headerListItemFha: '#000000',
	
	    jumbotronFontSize: '20px',
	
	    //SectionHeader
	    sectionHeader: '#fff',
	    sectionHeaderHr: '#fff'
	};

/***/ }),
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(131);
	var isArguments = __webpack_require__(130);
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ }),
/* 130 */
/***/ (function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ }),
/* 131 */
/***/ (function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ }),
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ }),
/* 140 */
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ }),
/* 141 */
/***/ (function(module, exports) {

	module.exports = isFunction
	
	var toString = Object.prototype.toString
	
	function isFunction (fn) {
	  var string = toString.call(fn)
	  return string === '[object Function]' ||
	    (typeof fn === 'function' && string !== '[object RegExp]') ||
	    (typeof window !== 'undefined' &&
	     // IE8 and below
	     (fn === window.setTimeout ||
	      fn === window.alert ||
	      fn === window.confirm ||
	      fn === window.prompt))
	};


/***/ }),
/* 142 */
/***/ (function(module, exports) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object' && Array.isArray(val) === false;
	};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.2.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2017-03-20T18:59Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	
	
		function DOMEval( code, doc ) {
			doc = doc || document;
	
			var script = doc.createElement( "script" );
	
			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	
	
	
	var
		version = "3.2.1",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
	
			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}
	
			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = Array.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && Array.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
	
			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;
	
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
	
		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {
	
				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {
	
					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}
	
					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||
	
						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}
	
				return elem.disabled === disabled;
	
			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}
	
			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
	
			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );
	
					if ( elem ) {
	
						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
	
						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}
	
					return [];
				}
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	
	
	function nodeName( elem, name ) {
	
	  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	
	};
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}
	
		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}
	
		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}
	
		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}
	
		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}
	
		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
	        if ( nodeName( elem, "iframe" ) ) {
	            return elem.contentDocument;
	        }
	
	        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
	        // Treat the template element as a regular one in browsers that
	        // don't support it.
	        if ( nodeName( elem, "template" ) ) {
	            elem = elem.content || elem;
	        }
	
	        return jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = locked || options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject, noValue ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply( undefined, [ value ].slice( noValue ) );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply( undefined, [ value ] );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
					!remaining );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList
			.then( fn )
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		if ( chainable ) {
			return elems;
		}
	
		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}
	
		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( Array.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}
	
		if ( data === "false" ) {
			return false;
		}
	
		if ( data === "null" ) {
			return null;
		}
	
		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}
	
		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}
	
		return data;
	}
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || Array.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;
	
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );
	
		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );
	
		} else {
			ret = [];
		}
	
		if ( tag === undefined || tag && nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}
	
		return ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			if ( delegateCount &&
	
				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&
	
				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}
	
				if ( button & 2 ) {
					return 3;
				}
	
				if ( button & 4 ) {
					return 2;
				}
	
				return 0;
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return jQuery( ">tbody", elem )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
	
			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rcustomProp = /^--/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	// Return a property mapped along what jQuery.cssProps suggests or to
	// a vendor prefixed property.
	function finalPropName( name ) {
		var ret = jQuery.cssProps[ name ];
		if ( !ret ) {
			ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
		}
		return ret;
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;
	
		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;
	
		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with computed style
		var valueIsBorderBox,
			styles = getStyles( elem ),
			val = curCSS( elem, name, styles ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}
	
		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );
	
		// Fall back to offsetWidth/Height when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		if ( val === "auto" ) {
			val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
		}
	
		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				isCustomProp = rcustomProp.test( name ),
				style = elem.style;
	
			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					if ( isCustomProp ) {
						style.setProperty( name, value );
					} else {
						style[ name ] = value;
					}
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name ),
				isCustomProp = rcustomProp.test( name );
	
			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
	
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( Array.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, inProgress,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function schedule() {
		if ( inProgress ) {
			if ( document.hidden === false && window.requestAnimationFrame ) {
				window.requestAnimationFrame( schedule );
			} else {
				window.setTimeout( schedule, jQuery.fx.interval );
			}
	
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* eslint-disable no-loop-func */
	
				anim.done( function() {
	
				/* eslint-enable no-loop-func */
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( Array.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				// If there's more to do, yield
				if ( percent < 1 && length ) {
					return remaining;
				}
	
				// If this was an empty animation, synthesize a final progress notification
				if ( !length ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
				}
	
				// Resolve the animation and report its conclusion
				deferred.resolveWith( elem, [ animation ] );
				return false;
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		// Attach callbacks from options
		animation
			.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		return animation;
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off
		if ( jQuery.fx.off ) {
			opt.duration = 0;
	
		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];
	
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Run the timer and safely remove it when done (allowing for external removal)
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		jQuery.fx.start();
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( inProgress ) {
			return;
		}
	
		inProgress = true;
		schedule();
	};
	
	jQuery.fx.stop = function() {
		inProgress = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
	
				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}
	
					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}
	
					return -1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}
	
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}
	
					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( Array.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;
	
					if ( index < 0 ) {
						i = max;
	
					} else {
						i = one ? index : 0;
					}
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						/* eslint-disable no-cond-assign */
	
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
	
						/* eslint-enable no-cond-assign */
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( Array.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( Array.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				if ( val == null ) {
					return null;
				}
	
				if ( Array.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}
	
				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var doc, docElem, rect, win,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			rect = elem.getBoundingClientRect();
	
			doc = elem.ownerDocument;
			docElem = doc.documentElement;
			win = doc.defaultView;
	
			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
	
				// Coalesce documents and windows
				var win;
				if ( jQuery.isWindow( elem ) ) {
					win = elem;
				} else if ( elem.nodeType === 9 ) {
					win = elem.defaultView;
				}
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	jQuery.holdReady = function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	return jQuery;
	} );


/***/ }),
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
	exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(8);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _HelmetConstants = __webpack_require__(59);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
	    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (encode === false) {
	        return String(str);
	    }
	
	    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};
	
	var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
	    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
	    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);
	
	    if (innermostTemplate && innermostTitle) {
	        // use function arg to avoid need to escape $ characters
	        return innermostTemplate.replace(/%s/g, function () {
	            return innermostTitle;
	        });
	    }
	
	    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
	
	    return innermostTitle || innermostDefaultTitle || undefined;
	};
	
	var getOnChangeClientState = function getOnChangeClientState(propsList) {
	    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
	};
	
	var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[tagType] !== "undefined";
	    }).map(function (props) {
	        return props[tagType];
	    }).reduce(function (tagAttrs, current) {
	        return _extends({}, tagAttrs, current);
	    }, {});
	};
	
	var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstants.TAG_NAMES.BASE];
	    }).reverse().reduce(function (innermostBaseTag, tag) {
	        if (!innermostBaseTag.length) {
	            var keys = Object.keys(tag);
	
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
	                    return innermostBaseTag.concat(tag);
	                }
	            }
	        }
	
	        return innermostBaseTag;
	    }, []);
	};
	
	var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
	    // Calculate list of tags, giving priority innermost component (end of the propslist)
	    var approvedSeenTags = {};
	
	    return propsList.filter(function (props) {
	        if (Array.isArray(props[tagName])) {
	            return true;
	        }
	        if (typeof props[tagName] !== "undefined") {
	            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
	        }
	        return false;
	    }).map(function (props) {
	        return props[tagName];
	    }).reverse().reduce(function (approvedTags, instanceTags) {
	        var instanceSeenTags = {};
	
	        instanceTags.filter(function (tag) {
	            var primaryAttributeKey = void 0;
	            var keys = Object.keys(tag);
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
	                    primaryAttributeKey = lowerCaseAttributeKey;
	                }
	                // Special case for innerHTML which doesn't work lowercased
	                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
	                    primaryAttributeKey = attributeKey;
	                }
	            }
	
	            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
	                return false;
	            }
	
	            var value = tag[primaryAttributeKey].toLowerCase();
	
	            if (!approvedSeenTags[primaryAttributeKey]) {
	                approvedSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!instanceSeenTags[primaryAttributeKey]) {
	                instanceSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!approvedSeenTags[primaryAttributeKey][value]) {
	                instanceSeenTags[primaryAttributeKey][value] = true;
	                return true;
	            }
	
	            return false;
	        }).reverse().forEach(function (tag) {
	            return approvedTags.push(tag);
	        });
	
	        // Update seen tags with tags from this instance
	        var keys = Object.keys(instanceSeenTags);
	        for (var i = 0; i < keys.length; i++) {
	            var attributeKey = keys[i];
	            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
	
	            approvedSeenTags[attributeKey] = tagUnion;
	        }
	
	        return approvedTags;
	    }, []).reverse();
	};
	
	var getInnermostProperty = function getInnermostProperty(propsList, property) {
	    for (var i = propsList.length - 1; i >= 0; i--) {
	        var props = propsList[i];
	
	        if (props.hasOwnProperty(property)) {
	            return props[property];
	        }
	    }
	
	    return null;
	};
	
	var reducePropsToState = function reducePropsToState(propsList) {
	    return {
	        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
	        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
	        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
	        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
	        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
	        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        onChangeClientState: getOnChangeClientState(propsList),
	        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
	        title: getTitleFromPropsList(propsList),
	        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
	    };
	};
	
	var rafPolyfill = function () {
	    var clock = Date.now();
	
	    return function (callback) {
	        var currentTime = Date.now();
	
	        if (currentTime - clock > 16) {
	            clock = currentTime;
	            callback(currentTime);
	        } else {
	            setTimeout(function () {
	                rafPolyfill(callback);
	            }, 0);
	        }
	    };
	}();
	
	var cafPolyfill = function cafPolyfill(id) {
	    return clearTimeout(id);
	};
	
	var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
	
	var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;
	
	var warn = function warn(msg) {
	    return console && typeof console.warn === "function" && console.warn(msg);
	};
	
	var _helmetCallback = null;
	
	var handleClientStateChange = function handleClientStateChange(newState) {
	    if (_helmetCallback) {
	        cancelAnimationFrame(_helmetCallback);
	    }
	
	    if (newState.defer) {
	        _helmetCallback = requestAnimationFrame(function () {
	            commitTagChanges(newState, function () {
	                _helmetCallback = null;
	            });
	        });
	    } else {
	        commitTagChanges(newState);
	        _helmetCallback = null;
	    }
	};
	
	var commitTagChanges = function commitTagChanges(newState, cb) {
	    var baseTag = newState.baseTag,
	        bodyAttributes = newState.bodyAttributes,
	        htmlAttributes = newState.htmlAttributes,
	        linkTags = newState.linkTags,
	        metaTags = newState.metaTags,
	        noscriptTags = newState.noscriptTags,
	        onChangeClientState = newState.onChangeClientState,
	        scriptTags = newState.scriptTags,
	        styleTags = newState.styleTags,
	        title = newState.title,
	        titleAttributes = newState.titleAttributes;
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
	    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
	
	    updateTitle(title, titleAttributes);
	
	    var tagUpdates = {
	        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
	        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
	        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
	        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
	        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
	        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
	    };
	
	    var addedTags = {};
	    var removedTags = {};
	
	    Object.keys(tagUpdates).forEach(function (tagType) {
	        var _tagUpdates$tagType = tagUpdates[tagType],
	            newTags = _tagUpdates$tagType.newTags,
	            oldTags = _tagUpdates$tagType.oldTags;
	
	
	        if (newTags.length) {
	            addedTags[tagType] = newTags;
	        }
	        if (oldTags.length) {
	            removedTags[tagType] = tagUpdates[tagType].oldTags;
	        }
	    });
	
	    cb && cb();
	
	    onChangeClientState(newState, addedTags, removedTags);
	};
	
	var flattenArray = function flattenArray(possibleArray) {
	    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
	};
	
	var updateTitle = function updateTitle(title, attributes) {
	    if (typeof title !== "undefined" && document.title !== title) {
	        document.title = flattenArray(title);
	    }
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
	};
	
	var updateAttributes = function updateAttributes(tagName, attributes) {
	    var elementTag = document.getElementsByTagName(tagName)[0];
	
	    if (!elementTag) {
	        return;
	    }
	
	    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	    var attributesToRemove = [].concat(helmetAttributes);
	    var attributeKeys = Object.keys(attributes);
	
	    for (var i = 0; i < attributeKeys.length; i++) {
	        var attribute = attributeKeys[i];
	        var value = attributes[attribute] || "";
	
	        if (elementTag.getAttribute(attribute) !== value) {
	            elementTag.setAttribute(attribute, value);
	        }
	
	        if (helmetAttributes.indexOf(attribute) === -1) {
	            helmetAttributes.push(attribute);
	        }
	
	        var indexToSave = attributesToRemove.indexOf(attribute);
	        if (indexToSave !== -1) {
	            attributesToRemove.splice(indexToSave, 1);
	        }
	    }
	
	    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
	        elementTag.removeAttribute(attributesToRemove[_i]);
	    }
	
	    if (helmetAttributes.length === attributesToRemove.length) {
	        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
	        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
	    }
	};
	
	var updateTags = function updateTags(type, tags) {
	    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
	    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
	    var oldTags = Array.prototype.slice.call(tagNodes);
	    var newTags = [];
	    var indexToDelete = void 0;
	
	    if (tags && tags.length) {
	        tags.forEach(function (tag) {
	            var newElement = document.createElement(type);
	
	            for (var attribute in tag) {
	                if (tag.hasOwnProperty(attribute)) {
	                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
	                        newElement.innerHTML = tag.innerHTML;
	                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                        if (newElement.styleSheet) {
	                            newElement.styleSheet.cssText = tag.cssText;
	                        } else {
	                            newElement.appendChild(document.createTextNode(tag.cssText));
	                        }
	                    } else {
	                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
	                        newElement.setAttribute(attribute, value);
	                    }
	                }
	            }
	
	            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");
	
	            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	            if (oldTags.some(function (existingTag, index) {
	                indexToDelete = index;
	                return newElement.isEqualNode(existingTag);
	            })) {
	                oldTags.splice(indexToDelete, 1);
	            } else {
	                newTags.push(newElement);
	            }
	        });
	    }
	
	    oldTags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	    });
	    newTags.forEach(function (tag) {
	        return headElement.appendChild(tag);
	    });
	
	    return {
	        oldTags: oldTags,
	        newTags: newTags
	    };
	};
	
	var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
	    return Object.keys(attributes).reduce(function (str, key) {
	        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
	        return str ? str + " " + attr : attr;
	    }, "");
	};
	
	var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
	    var attributeString = generateElementAttributesAsString(attributes);
	    var flattenedTitle = flattenArray(title);
	    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
	};
	
	var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
	    return tags.reduce(function (str, tag) {
	        var attributeHtml = Object.keys(tag).filter(function (attribute) {
	            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
	        }).reduce(function (string, attribute) {
	            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
	            return string ? string + " " + attr : attr;
	        }, "");
	
	        var tagContent = tag.innerHTML || tag.cssText || "";
	
	        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
	
	        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
	    }, "");
	};
	
	var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
	    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(attributes).reduce(function (obj, key) {
	        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
	        return obj;
	    }, initProps);
	};
	
	var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
	    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(props).reduce(function (obj, key) {
	        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
	        return obj;
	    }, initAttributes);
	};
	
	var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
	    var _initProps;
	
	    // assigning into an array to define toString function on it
	    var initProps = (_initProps = {
	        key: title
	    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
	    var props = convertElementAttributestoReactProps(attributes, initProps);
	
	    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
	};
	
	var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
	    return tags.map(function (tag, i) {
	        var _mappedTag;
	
	        var mappedTag = (_mappedTag = {
	            key: i
	        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
	
	        Object.keys(tag).forEach(function (attribute) {
	            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;
	
	            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                var content = tag.innerHTML || tag.cssText;
	                mappedTag.dangerouslySetInnerHTML = { __html: content };
	            } else {
	                mappedTag[mappedAttribute] = tag[attribute];
	            }
	        });
	
	        return _react2.default.createElement(type, mappedTag);
	    });
	};
	
	var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
	    switch (type) {
	        case _HelmetConstants.TAG_NAMES.TITLE:
	            return {
	                toComponent: function toComponent() {
	                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
	                },
	                toString: function toString() {
	                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
	                }
	            };
	        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
	        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
	            return {
	                toComponent: function toComponent() {
	                    return convertElementAttributestoReactProps(tags);
	                },
	                toString: function toString() {
	                    return generateElementAttributesAsString(tags);
	                }
	            };
	        default:
	            return {
	                toComponent: function toComponent() {
	                    return generateTagsAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTagsAsString(type, tags, encode);
	                }
	            };
	    }
	};
	
	var mapStateOnServer = function mapStateOnServer(_ref) {
	    var baseTag = _ref.baseTag,
	        bodyAttributes = _ref.bodyAttributes,
	        encode = _ref.encode,
	        htmlAttributes = _ref.htmlAttributes,
	        linkTags = _ref.linkTags,
	        metaTags = _ref.metaTags,
	        noscriptTags = _ref.noscriptTags,
	        scriptTags = _ref.scriptTags,
	        styleTags = _ref.styleTags,
	        _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        titleAttributes = _ref.titleAttributes;
	    return {
	        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
	        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
	        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
	        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
	        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
	        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
	        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
	        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
	        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
	    };
	};
	
	exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
	exports.handleClientStateChange = handleClientStateChange;
	exports.mapStateOnServer = mapStateOnServer;
	exports.reducePropsToState = reducePropsToState;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.warn = warn;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 161 */,
/* 162 */,
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _exenv = __webpack_require__(133);
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var _shallowequal = __webpack_require__(164);
	
	var _shallowequal2 = _interopRequireDefault(_shallowequal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }
	
	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }
	
	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }
	
	    var mountedInstances = [];
	    var state = void 0;
	
	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));
	
	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }
	
	    var SideEffect = function (_Component) {
	      _inherits(SideEffect, _Component);
	
	      function SideEffect() {
	        _classCallCheck(this, SideEffect);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      // Try to use displayName of wrapped component
	      SideEffect.peek = function peek() {
	        return state;
	      };
	
	      // Expose canUseDOM so tests can monkeypatch it
	
	
	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
	        }
	
	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };
	
	      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !(0, _shallowequal2.default)(nextProps, this.props);
	      };
	
	      SideEffect.prototype.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };
	
	      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };
	
	      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };
	
	      SideEffect.prototype.render = function render() {
	        return _react2.default.createElement(WrappedComponent, this.props);
	      };
	
	      return SideEffect;
	    }(_react.Component);
	
	    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
	    SideEffect.canUseDOM = _exenv2.default.canUseDOM;
	
	
	    return SideEffect;
	  };
	};

/***/ }),
/* 164 */
/***/ (function(module, exports) {

	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	
	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	    if(ret !== void 0) {
	        return !!ret;
	    }
	
	    if(objA === objB) {
	        return true;
	    }
	
	    if(typeof objA !== 'object' || !objA ||
	       typeof objB !== 'object' || !objB) {
	        return false;
	    }
	
	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);
	
	    if(keysA.length !== keysB.length) {
	        return false;
	    }
	
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	
	    // Test for A's keys different from B.
	    for(var idx = 0; idx < keysA.length; idx++) {
	
	        var key = keysA[idx];
	
	        if(!bHasOwnProperty(key)) {
	            return false;
	        }
	
	        var valueA = objA[key];
	        var valueB = objB[key];
	
	        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	
	        if(ret === false ||
	           ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	
	    }
	
	    return true;
	
	};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(1).any;
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(1).any;
	
	exports.default = function (css) {
	  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    if (typeof tag !== 'string' && typeof tag !== 'function') {
	      // $FlowInvalidInputTest
	      throw new Error('Cannot create styled-component for component: ' + tag);
	    }
	
	    /* This is callable directly as a template function */
	    var templateFunction = function templateFunction(strings) {
	      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        interpolations[_key - 1] = arguments[_key];
	      }
	
	      return componentConstructor(tag, options, css.apply(undefined, [strings].concat(interpolations)));
	    };
	
	    /* If config methods are called, wrap up a new template function and merge options */
	    templateFunction.withConfig = function (config) {
	      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
	    };
	    templateFunction.attrs = function (attrs) {
	      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
	        attrs: _extends({}, options.attrs || {}, attrs) }));
	    };
	
	    return templateFunction;
	  };
	
	  return constructWithOptions;
	};
	
	module.exports = exports['default'];

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _interleave = __webpack_require__(179);
	
	var _interleave2 = _interopRequireDefault(_interleave);
	
	var _flatten = __webpack_require__(65);
	
	var _flatten2 = _interopRequireDefault(_flatten);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__(1).any;
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(1).any;
	
	exports.default = function (strings) {
	  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }
	
	  return (0, _flatten2.default)((0, _interleave2.default)(strings, interpolations));
	};
	
	module.exports = exports['default'];

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _hash = __webpack_require__(30);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	var _StyleSheet = __webpack_require__(10);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_Stringifier = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Stringifier || __webpack_require__(1).any;
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(1).any;
	
	exports.default = function (stringifyRules, css) {
	  var injectGlobal = function injectGlobal(strings) {
	    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      interpolations[_key - 1] = arguments[_key];
	    }
	
	    var rules = css.apply(undefined, [strings].concat(interpolations));
	    var hash = (0, _hash2.default)(JSON.stringify(rules));
	
	    var componentId = 'sc-global-' + hash;
	    if (_StyleSheet2.default.instance.hasInjectedComponent(componentId)) return;
	
	    _StyleSheet2.default.instance.inject(componentId, false, stringifyRules(rules));
	  };
	
	  return injectGlobal;
	};
	
	module.exports = exports['default'];

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _hash = __webpack_require__(30);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	var _StyleSheet = __webpack_require__(10);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_Stringifier = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Stringifier || __webpack_require__(1).any;
	
	var babelPluginFlowReactPropTypes_proptype_NameGenerator = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_NameGenerator || __webpack_require__(1).any;
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(1).any;
	
	var replaceWhitespace = function replaceWhitespace(str) {
	  return str.replace(/\s|\\n/g, '');
	};
	
	exports.default = function (nameGenerator, stringifyRules, css) {
	  return function (strings) {
	    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      interpolations[_key - 1] = arguments[_key];
	    }
	
	    var rules = css.apply(undefined, [strings].concat(interpolations));
	    var hash = (0, _hash2.default)(replaceWhitespace(JSON.stringify(rules)));
	
	    var existingName = _StyleSheet2.default.instance.getName(hash);
	    if (existingName) return existingName;
	
	    var name = nameGenerator(hash);
	    if (_StyleSheet2.default.instance.alreadyInjected(hash, name)) return name;
	
	    var generatedCSS = stringifyRules(rules, name, '@keyframes');
	    _StyleSheet2.default.instance.inject('sc-keyframes-' + name, true, generatedCSS, hash, name);
	    return name;
	  };
	};
	
	module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _domElements = __webpack_require__(175);
	
	var _domElements2 = _interopRequireDefault(_domElements);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(1).any;
	
	exports.default = function (styledComponent, constructWithOptions) {
	  var styled = function styled(tag) {
	    return constructWithOptions(styledComponent, tag);
	  };
	
	  // Shorthands for all valid HTML Elements
	  _domElements2.default.forEach(function (domElement) {
	    styled[domElement] = styled(domElement);
	  });
	
	  return styled;
	};
	
	module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _hoistNonReactStatics = __webpack_require__(139);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _ThemeProvider = __webpack_require__(22);
	
	var _isStyledComponent2 = __webpack_require__(29);
	
	var _isStyledComponent3 = _interopRequireDefault(_isStyledComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	/* globals ReactClass */
	
	var wrapWithTheme = function wrapWithTheme(Component) {
	  var _WithTheme$contextTyp;
	
	  var componentName = Component.displayName || Component.name || 'Component';
	
	  var isStyledComponent = (0, _isStyledComponent3.default)(Component);
	
	  var WithTheme = function (_React$Component) {
	    _inherits(WithTheme, _React$Component);
	
	    function WithTheme() {
	      var _temp, _this, _ret;
	
	      _classCallCheck(this, WithTheme);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.unsubscribeId = -1, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping
	
	
	    WithTheme.prototype.componentWillMount = function componentWillMount() {
	      var _this2 = this;
	
	      var styledContext = this.context[_ThemeProvider.CHANNEL_NEXT];
	      if (styledContext === undefined) {
	        // eslint-disable-next-line no-console
	        console.error('[withTheme] Please use ThemeProvider to be able to use withTheme');
	        return;
	      }
	
	      var subscribe = styledContext.subscribe;
	
	      this.unsubscribeId = subscribe(function (theme) {
	        _this2.setState({ theme: theme });
	      });
	    };
	
	    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (this.unsubscribeId !== -1) {
	        this.context[_ThemeProvider.CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
	      }
	    };
	
	    WithTheme.prototype.render = function render() {
	      // eslint-disable-next-line react/prop-types
	      var innerRef = this.props.innerRef;
	      var theme = this.state.theme;
	
	
	      return _react2.default.createElement(Component, _extends({
	        theme: theme
	      }, this.props, {
	        innerRef: isStyledComponent ? innerRef : undefined,
	        ref: isStyledComponent ? undefined : innerRef
	      }));
	    };
	
	    return WithTheme;
	  }(_react2.default.Component);
	
	  WithTheme.displayName = 'WithTheme(' + componentName + ')';
	  WithTheme.styledComponentId = 'withTheme';
	  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[_ThemeProvider.CHANNEL] = _propTypes2.default.func, _WithTheme$contextTyp[_ThemeProvider.CHANNEL_NEXT] = _ThemeProvider.CONTEXT_CHANNEL_SHAPE, _WithTheme$contextTyp);
	
	
	  return (0, _hoistNonReactStatics2.default)(WithTheme, Component);
	};
	
	exports.default = wrapWithTheme;
	module.exports = exports['default'];

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.COMPONENTS_PER_TAG = undefined;
	
	var _extractCompsFromCSS = __webpack_require__(176);
	
	var _extractCompsFromCSS2 = _interopRequireDefault(_extractCompsFromCSS);
	
	var _nonce = __webpack_require__(66);
	
	var _nonce2 = _interopRequireDefault(_nonce);
	
	var _StyleSheet = __webpack_require__(10);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	/* eslint-disable no-underscore-dangle */
	/*
	 * Browser Style Sheet with Rehydration
	 *
	 * <style data-styled-components="x y z"
	 *        data-styled-components-is-local="true">
	 *   /· sc-component-id: a ·/
	 *   .sc-a { ... }
	 *   .x { ... }
	 *   /· sc-component-id: b ·/
	 *   .sc-b { ... }
	 *   .y { ... }
	 *   .z { ... }
	 * </style>
	 *
	 * Note: replace · with * in the above snippet.
	 * */
	
	
	var babelPluginFlowReactPropTypes_proptype_Tag = __webpack_require__(10).babelPluginFlowReactPropTypes_proptype_Tag || __webpack_require__(1).any;
	
	var COMPONENTS_PER_TAG = exports.COMPONENTS_PER_TAG = 40;
	
	var BrowserTag = function () {
	  function BrowserTag(el, isLocal) {
	    var existingSource = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	
	    _classCallCheck(this, BrowserTag);
	
	    this.el = el;
	    this.isLocal = isLocal;
	    this.ready = false;
	
	    var extractedComps = (0, _extractCompsFromCSS2.default)(existingSource);
	
	    this.size = extractedComps.length;
	    this.components = extractedComps.reduce(function (acc, obj) {
	      acc[obj.componentId] = obj; // eslint-disable-line no-param-reassign
	      return acc;
	    }, {});
	  }
	
	  BrowserTag.prototype.isFull = function isFull() {
	    return this.size >= COMPONENTS_PER_TAG;
	  };
	
	  BrowserTag.prototype.addComponent = function addComponent(componentId) {
	    if (!this.ready) this.replaceElement();
	    if (this.components[componentId]) throw new Error('Trying to add Component \'' + componentId + '\' twice!');
	
	    var comp = { componentId: componentId, textNode: document.createTextNode('') };
	    this.el.appendChild(comp.textNode);
	
	    this.size += 1;
	    this.components[componentId] = comp;
	  };
	
	  BrowserTag.prototype.inject = function inject(componentId, css, name) {
	    if (!this.ready) this.replaceElement();
	    var comp = this.components[componentId];
	
	    if (!comp) throw new Error('Must add a new component before you can inject css into it');
	    if (comp.textNode.data === '') comp.textNode.appendData('\n/* sc-component-id: ' + componentId + ' */\n');
	
	    comp.textNode.appendData(css);
	    if (name) {
	      var existingNames = this.el.getAttribute(_StyleSheet.SC_ATTR);
	      this.el.setAttribute(_StyleSheet.SC_ATTR, existingNames ? existingNames + ' ' + name : name);
	    }
	
	    var nonce = (0, _nonce2.default)();
	
	    if (nonce) {
	      this.el.setAttribute('nonce', nonce);
	    }
	  };
	
	  BrowserTag.prototype.toHTML = function toHTML() {
	    return this.el.outerHTML;
	  };
	
	  BrowserTag.prototype.toReactElement = function toReactElement() {
	    throw new Error('BrowserTag doesn\'t implement toReactElement!');
	  };
	
	  BrowserTag.prototype.clone = function clone() {
	    throw new Error('BrowserTag cannot be cloned!');
	  };
	
	  /* Because we care about source order, before we can inject anything we need to
	   * create a text node for each component and replace the existing CSS. */
	
	
	  BrowserTag.prototype.replaceElement = function replaceElement() {
	    var _this = this;
	
	    this.ready = true;
	    // We have nothing to inject. Use the current el.
	    if (this.size === 0) return;
	
	    // Build up our replacement style tag
	    var newEl = this.el.cloneNode();
	    newEl.appendChild(document.createTextNode('\n'));
	
	    Object.keys(this.components).forEach(function (key) {
	      var comp = _this.components[key];
	
	      // eslint-disable-next-line no-param-reassign
	      comp.textNode = document.createTextNode(comp.cssFromDOM);
	      newEl.appendChild(comp.textNode);
	    });
	
	    if (!this.el.parentNode) throw new Error("Trying to replace an element that wasn't mounted!");
	
	    // The ol' switcheroo
	    this.el.parentNode.replaceChild(newEl, this.el);
	    this.el = newEl;
	  };
	
	  return BrowserTag;
	}();
	
	/* Factory function to separate DOM operations from logical ones*/
	
	
	exports.default = {
	  create: function create() {
	    var tags = [];
	    var names = {};
	
	    /* Construct existing state from DOM */
	    var nodes = document.querySelectorAll('[' + _StyleSheet.SC_ATTR + ']');
	    var nodesLength = nodes.length;
	
	    for (var i = 0; i < nodesLength; i += 1) {
	      var el = nodes[i];
	
	      tags.push(new BrowserTag(el, el.getAttribute(_StyleSheet.LOCAL_ATTR) === 'true', el.innerHTML));
	
	      var attr = el.getAttribute(_StyleSheet.SC_ATTR);
	      if (attr) {
	        attr.trim().split(/\s+/).forEach(function (name) {
	          names[name] = true;
	        });
	      }
	    }
	
	    /* Factory for making more tags */
	    var tagConstructor = function tagConstructor(isLocal) {
	      var el = document.createElement('style');
	      el.type = 'text/css';
	      el.setAttribute(_StyleSheet.SC_ATTR, '');
	      el.setAttribute(_StyleSheet.LOCAL_ATTR, isLocal ? 'true' : 'false');
	      if (!document.head) throw new Error('Missing document <head>');
	      document.head.appendChild(el);
	      return new BrowserTag(el, isLocal);
	    };
	
	    return new _StyleSheet2.default(tagConstructor, tags, names);
	  }
	};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _hash = __webpack_require__(30);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	var _StyleSheet = __webpack_require__(10);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	var _isStyledComponent = __webpack_require__(29);
	
	var _isStyledComponent2 = _interopRequireDefault(_isStyledComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var babelPluginFlowReactPropTypes_proptype_Stringifier = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Stringifier || __webpack_require__(1).any;
	
	var babelPluginFlowReactPropTypes_proptype_Flattener = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Flattener || __webpack_require__(1).any;
	
	var babelPluginFlowReactPropTypes_proptype_NameGenerator = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_NameGenerator || __webpack_require__(1).any;
	
	var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__(1).any;
	
	var isStaticRules = function isStaticRules(rules) {
	  for (var i = 0; i < rules.length; i += 1) {
	    var rule = rules[i];
	
	    // recursive case
	    if (Array.isArray(rule) && !isStaticRules(rule)) {
	      return false;
	    } else if (typeof rule === 'function' && !(0, _isStyledComponent2.default)(rule)) {
	      // functions are allowed to be static if they're just being
	      // used to get the classname of a nested styled copmonent
	      return false;
	    }
	  }
	
	  return true;
	};
	
	/*
	 ComponentStyle is all the CSS-specific stuff, not
	 the React-specific stuff.
	 */
	
	exports.default = function (nameGenerator, flatten, stringifyRules) {
	  var ComponentStyle = function () {
	    function ComponentStyle(rules, componentId) {
	      _classCallCheck(this, ComponentStyle);
	
	      this.rules = rules;
	      this.isStatic = isStaticRules(rules);
	      this.componentId = componentId;
	      if (!_StyleSheet2.default.instance.hasInjectedComponent(this.componentId)) {
	        var placeholder =  false ? '.' + componentId + ' {}' : '';
	        _StyleSheet2.default.instance.deferredInject(componentId, true, placeholder);
	      }
	    }
	
	    /*
	     * Flattens a rule set into valid CSS
	     * Hashes it, wraps the whole chunk in a .hash1234 {}
	     * Returns the hash to be injected on render()
	     * */
	
	
	    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
	      var isStatic = this.isStatic,
	          lastClassName = this.lastClassName;
	
	      if (isStatic && lastClassName !== undefined) {
	        return lastClassName;
	      }
	
	      var flatCSS = flatten(this.rules, executionContext);
	      var hash = (0, _hash2.default)(this.componentId + flatCSS.join(''));
	
	      var existingName = styleSheet.getName(hash);
	      if (existingName !== undefined) {
	        if (styleSheet.stylesCacheable) {
	          this.lastClassName = existingName;
	        }
	        return existingName;
	      }
	
	      var name = nameGenerator(hash);
	      if (styleSheet.stylesCacheable) {
	        this.lastClassName = existingName;
	      }
	      if (styleSheet.alreadyInjected(hash, name)) {
	        return name;
	      }
	
	      var css = '\n' + stringifyRules(flatCSS, '.' + name);
	      // NOTE: this can only be set when we inject the class-name.
	      // For some reason, presumably due to how css is stringifyRules behaves in
	      // differently between client and server, styles break.
	      styleSheet.inject(this.componentId, true, css, hash, name);
	      return name;
	    };
	
	    ComponentStyle.generateName = function generateName(str) {
	      return nameGenerator((0, _hash2.default)(str));
	    };
	
	    return ComponentStyle;
	  }();
	
	  return ComponentStyle;
	};
	
	module.exports = exports['default'];

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createWarnTooManyClasses = __webpack_require__(174);
	
	var _createWarnTooManyClasses2 = _interopRequireDefault(_createWarnTooManyClasses);
	
	var _validAttr = __webpack_require__(183);
	
	var _validAttr2 = _interopRequireDefault(_validAttr);
	
	var _isTag = __webpack_require__(180);
	
	var _isTag2 = _interopRequireDefault(_isTag);
	
	var _isStyledComponent = __webpack_require__(29);
	
	var _isStyledComponent2 = _interopRequireDefault(_isStyledComponent);
	
	var _getComponentName = __webpack_require__(178);
	
	var _getComponentName2 = _interopRequireDefault(_getComponentName);
	
	var _ThemeProvider = __webpack_require__(22);
	
	var _StyleSheet = __webpack_require__(10);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var babelPluginFlowReactPropTypes_proptype_Theme = __webpack_require__(22).babelPluginFlowReactPropTypes_proptype_Theme || __webpack_require__(1).any;
	
	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(1).any;
	
	var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__(1).any;
	
	var escapeRegex = /[[\].#*$><+~=|^:(),"'`]/g;
	var multiDashRegex = /--+/g;
	
	// HACK for generating all static styles without needing to allocate
	// an empty execution context every single time...
	var STATIC_EXECUTION_CONTEXT = {};
	
	exports.default = function (ComponentStyle, constructWithOptions) {
	  /* We depend on components having unique IDs */
	  var identifiers = {};
	  var generateId = function generateId(_displayName, parentComponentId) {
	    var displayName = typeof _displayName !== 'string' ? 'sc' : _displayName.replace(escapeRegex, '-') // Replace all possible CSS selectors
	    .replace(multiDashRegex, '-'); // Replace multiple -- with single -
	
	    var nr = (identifiers[displayName] || 0) + 1;
	    identifiers[displayName] = nr;
	
	    var hash = ComponentStyle.generateName(displayName + nr);
	    var componentId = displayName + '-' + hash;
	    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
	  };
	
	  var BaseStyledComponent = function (_Component) {
	    _inherits(BaseStyledComponent, _Component);
	
	    function BaseStyledComponent() {
	      var _temp, _this, _ret;
	
	      _classCallCheck(this, BaseStyledComponent);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
	        theme: null,
	        generatedClassName: ''
	      }, _this.unsubscribeId = -1, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
	      if (this.unsubscribeId !== -1) {
	        this.context[_ThemeProvider.CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
	      }
	    };
	
	    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
	      var attrs = this.constructor.attrs;
	
	      var context = _extends({}, props, { theme: theme });
	      if (attrs === undefined) {
	        return context;
	      }
	
	      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
	        var attr = attrs[key];
	        // eslint-disable-next-line no-param-reassign
	        acc[key] = typeof attr === 'function' ? attr(context) : attr;
	        return acc;
	      }, {});
	
	      return _extends({}, context, this.attrs);
	    };
	
	    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
	      var _constructor = this.constructor,
	          attrs = _constructor.attrs,
	          componentStyle = _constructor.componentStyle,
	          warnTooManyClasses = _constructor.warnTooManyClasses;
	
	      var styleSheet = this.context[_StyleSheet.CONTEXT_KEY] || _StyleSheet2.default.instance;
	
	      // staticaly styled-components don't need to build an execution context object,
	      // and shouldn't be increasing the number of class names
	      if (componentStyle.isStatic && attrs === undefined) {
	        return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
	      } else {
	        var executionContext = this.buildExecutionContext(theme, props);
	        var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);
	
	        if (warnTooManyClasses !== undefined) warnTooManyClasses(className);
	
	        return className;
	      }
	    };
	
	    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
	      var _this2 = this;
	
	      var componentStyle = this.constructor.componentStyle;
	
	      var styledContext = this.context[_ThemeProvider.CHANNEL_NEXT];
	
	      // If this is a staticaly-styled component, we don't need to the theme
	      // to generate or build styles.
	      if (componentStyle.isStatic) {
	        var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
	        this.setState({ generatedClassName: generatedClassName });
	        // If there is a theme in the context, subscribe to the event emitter. This
	        // is necessary due to pure components blocking context updates, this circumvents
	        // that by updating when an event is emitted
	      } else if (styledContext !== undefined) {
	        var subscribe = styledContext.subscribe;
	
	        this.unsubscribeId = subscribe(function (nextTheme) {
	          // This will be called once immediately
	
	          // Props should take precedence over ThemeProvider, which should take precedence over
	          // defaultProps, but React automatically puts defaultProps on props.
	          var defaultProps = _this2.constructor.defaultProps;
	          /* eslint-disable react/prop-types */
	
	          var isDefaultTheme = defaultProps && _this2.props.theme === defaultProps.theme;
	          var theme = _this2.props.theme && !isDefaultTheme ? _this2.props.theme : nextTheme;
	          /* eslint-enable */
	          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);
	          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
	        });
	      } else {
	        // eslint-disable-next-line react/prop-types
	        var _theme = this.props.theme || {};
	        var _generatedClassName = this.generateAndInjectStyles(_theme, this.props);
	        this.setState({ theme: _theme, generatedClassName: _generatedClassName });
	      }
	    };
	
	    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var _this3 = this;
	
	      // If this is a staticaly-styled component, we don't need to listen to
	      // props changes to update styles
	      var componentStyle = this.constructor.componentStyle;
	
	      if (componentStyle.isStatic) {
	        return;
	      }
	
	      this.setState(function (oldState) {
	        // Props should take precedence over ThemeProvider, which should take precedence over
	        // defaultProps, but React automatically puts defaultProps on props.
	        var defaultProps = _this3.constructor.defaultProps;
	        /* eslint-disable react/prop-types */
	
	        var isDefaultTheme = defaultProps && nextProps.theme === defaultProps.theme;
	        var theme = nextProps.theme && !isDefaultTheme ? nextProps.theme : oldState.theme;
	        /* eslint-enable */
	        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);
	
	        return { theme: theme, generatedClassName: generatedClassName };
	      });
	    };
	
	    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.unsubscribeFromContext();
	    };
	
	    BaseStyledComponent.prototype.render = function render() {
	      var _this4 = this;
	
	      // eslint-disable-next-line react/prop-types
	      var innerRef = this.props.innerRef;
	      var generatedClassName = this.state.generatedClassName;
	      var _constructor2 = this.constructor,
	          styledComponentId = _constructor2.styledComponentId,
	          target = _constructor2.target;
	
	
	      var isTargetTag = (0, _isTag2.default)(target);
	
	      var className = [
	      // eslint-disable-next-line react/prop-types
	      this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');
	
	      var baseProps = _extends({}, this.attrs, {
	        className: className
	      });
	
	      if ((0, _isStyledComponent2.default)(target)) {
	        baseProps.innerRef = innerRef;
	      } else {
	        baseProps.ref = innerRef;
	      }
	
	      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
	        // Don't pass through non HTML tags through to HTML elements
	        // always omit innerRef
	        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || (0, _validAttr2.default)(propName))) {
	          // eslint-disable-next-line no-param-reassign
	          acc[propName] = _this4.props[propName];
	        }
	
	        return acc;
	      }, baseProps);
	
	      return (0, _react.createElement)(target, propsForElement);
	    };
	
	    return BaseStyledComponent;
	  }(_react.Component);
	
	  var createStyledComponent = function createStyledComponent(target, options, rules) {
	    var _StyledComponent$cont;
	
	    var _options$displayName = options.displayName,
	        displayName = _options$displayName === undefined ? (0, _isTag2.default)(target) ? 'styled.' + target : 'Styled(' + (0, _getComponentName2.default)(target) + ')' : _options$displayName,
	        _options$componentId = options.componentId,
	        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
	        _options$ParentCompon = options.ParentComponent,
	        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
	        extendingRules = options.rules,
	        attrs = options.attrs;
	
	
	    var styledComponentId = options.displayName && options.componentId ? options.displayName + '-' + options.componentId : componentId;
	
	    var warnTooManyClasses = void 0;
	    if (false) {
	      warnTooManyClasses = (0, _createWarnTooManyClasses2.default)(displayName);
	    }
	
	    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), styledComponentId);
	
	    var StyledComponent = function (_ParentComponent) {
	      _inherits(StyledComponent, _ParentComponent);
	
	      function StyledComponent() {
	        _classCallCheck(this, StyledComponent);
	
	        return _possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
	      }
	
	      StyledComponent.withComponent = function withComponent(tag) {
	        var previousComponentId = options.componentId,
	            optionsToCopy = _objectWithoutProperties(options, ['componentId']);
	
	        var newComponentId = previousComponentId && previousComponentId + '-' + ((0, _isTag2.default)(tag) ? tag : (0, _getComponentName2.default)(tag));
	
	        var newOptions = _extends({}, optionsToCopy, {
	          componentId: newComponentId,
	          ParentComponent: StyledComponent
	        });
	
	        return createStyledComponent(tag, newOptions, rules);
	      };
	
	      _createClass(StyledComponent, null, [{
	        key: 'extend',
	        get: function get() {
	          var rulesFromOptions = options.rules,
	              parentComponentId = options.componentId,
	              optionsToCopy = _objectWithoutProperties(options, ['rules', 'componentId']);
	
	          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);
	
	          var newOptions = _extends({}, optionsToCopy, {
	            rules: newRules,
	            parentComponentId: parentComponentId,
	            ParentComponent: StyledComponent
	          });
	
	          return constructWithOptions(createStyledComponent, target, newOptions);
	        }
	      }]);
	
	      return StyledComponent;
	    }(ParentComponent);
	
	    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[_ThemeProvider.CHANNEL] = _propTypes2.default.func, _StyledComponent$cont[_ThemeProvider.CHANNEL_NEXT] = _ThemeProvider.CONTEXT_CHANNEL_SHAPE, _StyledComponent$cont[_StyleSheet.CONTEXT_KEY] = _propTypes2.default.instanceOf(_StyleSheet2.default), _StyledComponent$cont);
	    StyledComponent.displayName = displayName;
	    StyledComponent.styledComponentId = styledComponentId;
	    StyledComponent.attrs = attrs;
	    StyledComponent.componentStyle = componentStyle;
	    StyledComponent.warnTooManyClasses = warnTooManyClasses;
	    StyledComponent.target = target;
	
	
	    return StyledComponent;
	  };
	
	  return createStyledComponent;
	};
	
	module.exports = exports['default'];

/***/ }),
/* 174 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var LIMIT = 200;
	
	exports.default = function (displayName) {
	  var generatedClasses = {};
	  var warningSeen = false;
	
	  return function (className) {
	    if (!warningSeen) {
	      generatedClasses[className] = true;
	      if (Object.keys(generatedClasses).length >= LIMIT) {
	        // Unable to find latestRule in test environment.
	        /* eslint-disable no-console, prefer-template */
	        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. ' + 'Consider using style property for frequently changed styles.\n' + 'Example:\n' + '  const StyledComp = styled.div`width: 100%;`\n' + '  <StyledComp style={{ background: background }} />');
	        warningSeen = true;
	        generatedClasses = {};
	      }
	    }
	  };
	};
	
	module.exports = exports['default'];

/***/ }),
/* 175 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	// Thanks to ReactDOMFactories for this handy list!
	
	exports.default = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',
	
	// SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
	module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s+(\S+)\s+\*\//mg;
	
	exports.default = function (maybeCSS) {
	  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
	  var existingComponents = [];
	  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
	    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
	    return match;
	  });
	  return existingComponents.map(function (_ref, i) {
	    var componentId = _ref.componentId,
	        matchIndex = _ref.matchIndex;
	
	    var nextComp = existingComponents[i + 1];
	    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
	    return { componentId: componentId, cssFromDOM: cssFromDOM };
	  });
	};
	
	module.exports = exports['default'];

/***/ }),
/* 177 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	var charsLength = chars.length;
	
	/* Some high number, usually 9-digit base-10. Map it to base-😎 */
	var generateAlphabeticName = function generateAlphabeticName(code) {
	  var name = '';
	  var x = void 0;
	
	  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
	    name = chars[x % charsLength] + name;
	  }
	
	  return chars[x % charsLength] + name;
	};
	
	exports.default = generateAlphabeticName;
	module.exports = exports['default'];

/***/ }),
/* 178 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = getComponentName;
	
	
	/* eslint-disable no-undef */
	function getComponentName(target) {
	  return target.displayName || target.name || 'Component';
	}
	module.exports = exports['default'];

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(1).any;
	
	exports.default = function (strings, interpolations) {
	  return interpolations.reduce(function (array, interp, i) {
	    return array.concat(interp, strings[i + 1]);
	  }, [strings[0]]);
	};
	
	module.exports = exports['default'];

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = isTag;
	
	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(1).any;
	
	function isTag(target) /* : %checks */{
	  return typeof target === 'string';
	}
	module.exports = exports['default'];

/***/ }),
/* 181 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	// Helper to call a given function, only once
	exports.default = function (cb) {
	  var called = false;
	
	  return function () {
	    if (!called) {
	      called = true;
	      cb();
	    }
	  };
	};
	
	module.exports = exports["default"];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _stylis = __webpack_require__(184);
	
	var _stylis2 = _interopRequireDefault(_stylis);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(3).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(1).any;
	
	var stylis = new _stylis2.default({
	  global: false,
	  cascade: true,
	  keyframe: false,
	  prefix: true,
	  compress: false,
	  semicolon: true
	});
	
	var stringifyRules = function stringifyRules(rules, selector, prefix) {
	  var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments
	
	  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;
	
	  return stylis(prefix || !selector ? '' : selector, cssStr);
	};
	
	exports.default = stringifyRules;
	module.exports = exports['default'];

/***/ }),
/* 183 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	/* Trying to avoid the unknown-prop errors on styled components
	 by filtering by React's attribute whitelist.
	 */
	
	/* Logic copied from ReactDOMUnknownPropertyHook */
	var reactProps = {
	  children: true,
	  dangerouslySetInnerHTML: true,
	  key: true,
	  ref: true,
	  autoFocus: true,
	  defaultValue: true,
	  valueLink: true,
	  defaultChecked: true,
	  checkedLink: true,
	  innerHTML: true,
	  suppressContentEditableWarning: true,
	  onFocusIn: true,
	  onFocusOut: true,
	  className: true,
	
	  /* List copied from https://facebook.github.io/react/docs/events.html */
	  onCopy: true,
	  onCut: true,
	  onPaste: true,
	  onCompositionEnd: true,
	  onCompositionStart: true,
	  onCompositionUpdate: true,
	  onKeyDown: true,
	  onKeyPress: true,
	  onKeyUp: true,
	  onFocus: true,
	  onBlur: true,
	  onChange: true,
	  onInput: true,
	  onSubmit: true,
	  onClick: true,
	  onContextMenu: true,
	  onDoubleClick: true,
	  onDrag: true,
	  onDragEnd: true,
	  onDragEnter: true,
	  onDragExit: true,
	  onDragLeave: true,
	  onDragOver: true,
	  onDragStart: true,
	  onDrop: true,
	  onMouseDown: true,
	  onMouseEnter: true,
	  onMouseLeave: true,
	  onMouseMove: true,
	  onMouseOut: true,
	  onMouseOver: true,
	  onMouseUp: true,
	  onSelect: true,
	  onTouchCancel: true,
	  onTouchEnd: true,
	  onTouchMove: true,
	  onTouchStart: true,
	  onScroll: true,
	  onWheel: true,
	  onAbort: true,
	  onCanPlay: true,
	  onCanPlayThrough: true,
	  onDurationChange: true,
	  onEmptied: true,
	  onEncrypted: true,
	  onEnded: true,
	  onError: true,
	  onLoadedData: true,
	  onLoadedMetadata: true,
	  onLoadStart: true,
	  onPause: true,
	  onPlay: true,
	  onPlaying: true,
	  onProgress: true,
	  onRateChange: true,
	  onSeeked: true,
	  onSeeking: true,
	  onStalled: true,
	  onSuspend: true,
	  onTimeUpdate: true,
	  onVolumeChange: true,
	  onWaiting: true,
	  onLoad: true,
	  onAnimationStart: true,
	  onAnimationEnd: true,
	  onAnimationIteration: true,
	  onTransitionEnd: true,
	
	  onCopyCapture: true,
	  onCutCapture: true,
	  onPasteCapture: true,
	  onCompositionEndCapture: true,
	  onCompositionStartCapture: true,
	  onCompositionUpdateCapture: true,
	  onKeyDownCapture: true,
	  onKeyPressCapture: true,
	  onKeyUpCapture: true,
	  onFocusCapture: true,
	  onBlurCapture: true,
	  onChangeCapture: true,
	  onInputCapture: true,
	  onSubmitCapture: true,
	  onClickCapture: true,
	  onContextMenuCapture: true,
	  onDoubleClickCapture: true,
	  onDragCapture: true,
	  onDragEndCapture: true,
	  onDragEnterCapture: true,
	  onDragExitCapture: true,
	  onDragLeaveCapture: true,
	  onDragOverCapture: true,
	  onDragStartCapture: true,
	  onDropCapture: true,
	  onMouseDownCapture: true,
	  onMouseEnterCapture: true,
	  onMouseLeaveCapture: true,
	  onMouseMoveCapture: true,
	  onMouseOutCapture: true,
	  onMouseOverCapture: true,
	  onMouseUpCapture: true,
	  onSelectCapture: true,
	  onTouchCancelCapture: true,
	  onTouchEndCapture: true,
	  onTouchMoveCapture: true,
	  onTouchStartCapture: true,
	  onScrollCapture: true,
	  onWheelCapture: true,
	  onAbortCapture: true,
	  onCanPlayCapture: true,
	  onCanPlayThroughCapture: true,
	  onDurationChangeCapture: true,
	  onEmptiedCapture: true,
	  onEncryptedCapture: true,
	  onEndedCapture: true,
	  onErrorCapture: true,
	  onLoadedDataCapture: true,
	  onLoadedMetadataCapture: true,
	  onLoadStartCapture: true,
	  onPauseCapture: true,
	  onPlayCapture: true,
	  onPlayingCapture: true,
	  onProgressCapture: true,
	  onRateChangeCapture: true,
	  onSeekedCapture: true,
	  onSeekingCapture: true,
	  onStalledCapture: true,
	  onSuspendCapture: true,
	  onTimeUpdateCapture: true,
	  onVolumeChangeCapture: true,
	  onWaitingCapture: true,
	  onLoadCapture: true,
	  onAnimationStartCapture: true,
	  onAnimationEndCapture: true,
	  onAnimationIterationCapture: true,
	  onTransitionEndCapture: true
	};
	
	/* From HTMLDOMPropertyConfig */
	var htmlProps = {
	  /**
	   * Standard Properties
	   */
	  accept: true,
	  acceptCharset: true,
	  accessKey: true,
	  action: true,
	  allowFullScreen: true,
	  allowTransparency: true,
	  alt: true,
	  // specifies target context for links with `preload` type
	  as: true,
	  async: true,
	  autoComplete: true,
	  // autoFocus is polyfilled/normalized by AutoFocusUtils
	  // autoFocus: true,
	  autoPlay: true,
	  capture: true,
	  cellPadding: true,
	  cellSpacing: true,
	  charSet: true,
	  challenge: true,
	  checked: true,
	  cite: true,
	  classID: true,
	  className: true,
	  cols: true,
	  colSpan: true,
	  content: true,
	  contentEditable: true,
	  contextMenu: true,
	  controls: true,
	  coords: true,
	  crossOrigin: true,
	  data: true, // For `<object />` acts as `src`.
	  dateTime: true,
	  default: true,
	  defer: true,
	  dir: true,
	  disabled: true,
	  download: true,
	  draggable: true,
	  encType: true,
	  form: true,
	  formAction: true,
	  formEncType: true,
	  formMethod: true,
	  formNoValidate: true,
	  formTarget: true,
	  frameBorder: true,
	  headers: true,
	  height: true,
	  hidden: true,
	  high: true,
	  href: true,
	  hrefLang: true,
	  htmlFor: true,
	  httpEquiv: true,
	  icon: true,
	  id: true,
	  inputMode: true,
	  integrity: true,
	  is: true,
	  keyParams: true,
	  keyType: true,
	  kind: true,
	  label: true,
	  lang: true,
	  list: true,
	  loop: true,
	  low: true,
	  manifest: true,
	  marginHeight: true,
	  marginWidth: true,
	  max: true,
	  maxLength: true,
	  media: true,
	  mediaGroup: true,
	  method: true,
	  min: true,
	  minLength: true,
	  // Caution; `option.selected` is not updated if `select.multiple` is
	  // disabled with `removeAttribute`.
	  multiple: true,
	  muted: true,
	  name: true,
	  nonce: true,
	  noValidate: true,
	  open: true,
	  optimum: true,
	  pattern: true,
	  placeholder: true,
	  playsInline: true,
	  poster: true,
	  preload: true,
	  profile: true,
	  radioGroup: true,
	  readOnly: true,
	  referrerPolicy: true,
	  rel: true,
	  required: true,
	  reversed: true,
	  role: true,
	  rows: true,
	  rowSpan: true,
	  sandbox: true,
	  scope: true,
	  scoped: true,
	  scrolling: true,
	  seamless: true,
	  selected: true,
	  shape: true,
	  size: true,
	  sizes: true,
	  span: true,
	  spellCheck: true,
	  src: true,
	  srcDoc: true,
	  srcLang: true,
	  srcSet: true,
	  start: true,
	  step: true,
	  style: true,
	  summary: true,
	  tabIndex: true,
	  target: true,
	  title: true,
	  // Setting .type throws on non-<input> tags
	  type: true,
	  useMap: true,
	  value: true,
	  width: true,
	  wmode: true,
	  wrap: true,
	
	  /**
	   * RDFa Properties
	   */
	  about: true,
	  datatype: true,
	  inlist: true,
	  prefix: true,
	  // property is also supported for OpenGraph in meta tags.
	  property: true,
	  resource: true,
	  typeof: true,
	  vocab: true,
	
	  /**
	   * Non-standard Properties
	   */
	  // autoCapitalize and autoCorrect are supported in Mobile Safari for
	  // keyboard hints.
	  autoCapitalize: true,
	  autoCorrect: true,
	  // autoSave allows WebKit/Blink to persist values of input fields on page reloads
	  autoSave: true,
	  // color is for Safari mask-icon link
	  color: true,
	  // itemProp, itemScope, itemType are for
	  // Microdata support. See http://schema.org/docs/gs.html
	  itemProp: true,
	  itemScope: true,
	  itemType: true,
	  // itemID and itemRef are for Microdata support as well but
	  // only specified in the WHATWG spec document. See
	  // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	  itemID: true,
	  itemRef: true,
	  // results show looking glass icon and recent searches on input
	  // search fields in WebKit/Blink
	  results: true,
	  // IE-only attribute that specifies security restrictions on an iframe
	  // as an alternative to the sandbox attribute on IE<10
	  security: true,
	  // IE-only attribute that controls focus behavior
	  unselectable: 0
	};
	
	var svgProps = {
	  accentHeight: true,
	  accumulate: true,
	  additive: true,
	  alignmentBaseline: true,
	  allowReorder: true,
	  alphabetic: true,
	  amplitude: true,
	  arabicForm: true,
	  ascent: true,
	  attributeName: true,
	  attributeType: true,
	  autoReverse: true,
	  azimuth: true,
	  baseFrequency: true,
	  baseProfile: true,
	  baselineShift: true,
	  bbox: true,
	  begin: true,
	  bias: true,
	  by: true,
	  calcMode: true,
	  capHeight: true,
	  clip: true,
	  clipPath: true,
	  clipRule: true,
	  clipPathUnits: true,
	  colorInterpolation: true,
	  colorInterpolationFilters: true,
	  colorProfile: true,
	  colorRendering: true,
	  contentScriptType: true,
	  contentStyleType: true,
	  cursor: true,
	  cx: true,
	  cy: true,
	  d: true,
	  decelerate: true,
	  descent: true,
	  diffuseConstant: true,
	  direction: true,
	  display: true,
	  divisor: true,
	  dominantBaseline: true,
	  dur: true,
	  dx: true,
	  dy: true,
	  edgeMode: true,
	  elevation: true,
	  enableBackground: true,
	  end: true,
	  exponent: true,
	  externalResourcesRequired: true,
	  fill: true,
	  fillOpacity: true,
	  fillRule: true,
	  filter: true,
	  filterRes: true,
	  filterUnits: true,
	  floodColor: true,
	  floodOpacity: true,
	  focusable: true,
	  fontFamily: true,
	  fontSize: true,
	  fontSizeAdjust: true,
	  fontStretch: true,
	  fontStyle: true,
	  fontVariant: true,
	  fontWeight: true,
	  format: true,
	  from: true,
	  fx: true,
	  fy: true,
	  g1: true,
	  g2: true,
	  glyphName: true,
	  glyphOrientationHorizontal: true,
	  glyphOrientationVertical: true,
	  glyphRef: true,
	  gradientTransform: true,
	  gradientUnits: true,
	  hanging: true,
	  horizAdvX: true,
	  horizOriginX: true,
	  ideographic: true,
	  imageRendering: true,
	  in: true,
	  in2: true,
	  intercept: true,
	  k: true,
	  k1: true,
	  k2: true,
	  k3: true,
	  k4: true,
	  kernelMatrix: true,
	  kernelUnitLength: true,
	  kerning: true,
	  keyPoints: true,
	  keySplines: true,
	  keyTimes: true,
	  lengthAdjust: true,
	  letterSpacing: true,
	  lightingColor: true,
	  limitingConeAngle: true,
	  local: true,
	  markerEnd: true,
	  markerMid: true,
	  markerStart: true,
	  markerHeight: true,
	  markerUnits: true,
	  markerWidth: true,
	  mask: true,
	  maskContentUnits: true,
	  maskUnits: true,
	  mathematical: true,
	  mode: true,
	  numOctaves: true,
	  offset: true,
	  opacity: true,
	  operator: true,
	  order: true,
	  orient: true,
	  orientation: true,
	  origin: true,
	  overflow: true,
	  overlinePosition: true,
	  overlineThickness: true,
	  paintOrder: true,
	  panose1: true,
	  pathLength: true,
	  patternContentUnits: true,
	  patternTransform: true,
	  patternUnits: true,
	  pointerEvents: true,
	  points: true,
	  pointsAtX: true,
	  pointsAtY: true,
	  pointsAtZ: true,
	  preserveAlpha: true,
	  preserveAspectRatio: true,
	  primitiveUnits: true,
	  r: true,
	  radius: true,
	  refX: true,
	  refY: true,
	  renderingIntent: true,
	  repeatCount: true,
	  repeatDur: true,
	  requiredExtensions: true,
	  requiredFeatures: true,
	  restart: true,
	  result: true,
	  rotate: true,
	  rx: true,
	  ry: true,
	  scale: true,
	  seed: true,
	  shapeRendering: true,
	  slope: true,
	  spacing: true,
	  specularConstant: true,
	  specularExponent: true,
	  speed: true,
	  spreadMethod: true,
	  startOffset: true,
	  stdDeviation: true,
	  stemh: true,
	  stemv: true,
	  stitchTiles: true,
	  stopColor: true,
	  stopOpacity: true,
	  strikethroughPosition: true,
	  strikethroughThickness: true,
	  string: true,
	  stroke: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeLinecap: true,
	  strokeLinejoin: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true,
	  surfaceScale: true,
	  systemLanguage: true,
	  tableValues: true,
	  targetX: true,
	  targetY: true,
	  textAnchor: true,
	  textDecoration: true,
	  textRendering: true,
	  textLength: true,
	  to: true,
	  transform: true,
	  u1: true,
	  u2: true,
	  underlinePosition: true,
	  underlineThickness: true,
	  unicode: true,
	  unicodeBidi: true,
	  unicodeRange: true,
	  unitsPerEm: true,
	  vAlphabetic: true,
	  vHanging: true,
	  vIdeographic: true,
	  vMathematical: true,
	  values: true,
	  vectorEffect: true,
	  version: true,
	  vertAdvY: true,
	  vertOriginX: true,
	  vertOriginY: true,
	  viewBox: true,
	  viewTarget: true,
	  visibility: true,
	  widths: true,
	  wordSpacing: true,
	  writingMode: true,
	  x: true,
	  xHeight: true,
	  x1: true,
	  x2: true,
	  xChannelSelector: true,
	  xlinkActuate: true,
	  xlinkArcrole: true,
	  xlinkHref: true,
	  xlinkRole: true,
	  xlinkShow: true,
	  xlinkTitle: true,
	  xlinkType: true,
	  xmlBase: true,
	  xmlns: true,
	  xmlnsXlink: true,
	  xmlLang: true,
	  xmlSpace: true,
	  y: true,
	  y1: true,
	  y2: true,
	  yChannelSelector: true,
	  z: true,
	  zoomAndPan: true
	};
	
	/* From DOMProperty */
	var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
	var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
	
	var hasOwnProperty = {}.hasOwnProperty;
	
	exports.default = function (name) {
	  return hasOwnProperty.call(htmlProps, name) || hasOwnProperty.call(svgProps, name) || isCustomAttribute(name.toLowerCase()) || hasOwnProperty.call(reactProps, name);
	};
	
	module.exports = exports['default'];

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*
	 *          __        ___
	 *    _____/ /___  __/ (_)____
	 *   / ___/ __/ / / / / / ___/
	 *  (__  ) /_/ /_/ / / (__  )
	 * /____/\__/\__, /_/_/____/
	 *          /____/
	 *
	 * light - weight css preprocessor @licence MIT
	 */
	(function (factory) {/* eslint-disable */
		 true ? (module['exports'] = factory(null)) :
			typeof define === 'function' && define['amd'] ? define(factory(null)) :
				(window['stylis'] = factory(null))
	}(/** @param {*=} options */function factory (options) {/* eslint-disable */
	
		'use strict'
	
		/**
		 * Notes
		 *
		 * The ['<method name>'] pattern is used to support closure compiler
		 * the jsdoc signatures are also used to the same effect
		 *
		 * ----
		 *
		 * int + int + int === n4 [faster]
		 *
		 * vs
		 *
		 * int === n1 && int === n2 && int === n3
		 *
		 * ----
		 *
		 * switch (int) { case ints...} [faster]
		 *
		 * vs
		 *
		 * if (int == 1 && int === 2 ...)
		 *
		 * ----
		 *
		 * The (first*n1 + second*n2 + third*n3) format used in the property parser
		 * is a simple way to hash the sequence of characters
		 * taking into account the index they occur in
		 * since any number of 3 character sequences could produce duplicates.
		 *
		 * On the other hand sequences that are directly tied to the index of the character
		 * resolve a far more accurate measure, it's also faster
		 * to evaluate one condition in a switch statement
		 * than three in an if statement regardless of the added math.
		 *
		 * This allows the vendor prefixer to be both small and fast.
		 */
	
		var nullptn = /^\0+/g /* matches leading null characters */
		var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
		var colonptn = /: */g /* splits animation rules */
		var cursorptn = /zoo|gra/ /* assert cursor varient */
		var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
		var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
		var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
		var elementptn = / *[\0] */g /* selector elements */
		var selectorptn = /,\r+?/g /* splits selectors */
		var andptn = /([\t\r\n ])*\f?&/g /* match & */
		var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
		var invalidptn = /\W+/g /* removes invalid characters from keyframes */
		var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
		var plcholdrptn = /::(place)/g /* match ::placeholder varient */
		var readonlyptn = /:(read-only)/g /* match :read-only varient */
		var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
		var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
		var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
		var whiteptn = /\s{2,}/g /* matches repeating whitespace */
		var pseudoptn = /([^\(])(:+) */g /* pseudo element */
		var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
		var gradientptn = /([\w-]+t\()/g /* match *gradient property */
		var supportsptn = /\(\s*([^]*?)\s*\)/g /* match supports (groups) */
		var propertyptn = /([^]*?);/g /* match properties leading semicolon */
		var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
	
		/* vendors */
		var webkit = '-webkit-'
		var moz = '-moz-'
		var ms = '-ms-'
	
		/* character codes */
		var SEMICOLON = 59 /* ; */
		var CLOSEBRACES = 125 /* } */
		var OPENBRACES = 123 /* { */
		var OPENPARENTHESES = 40 /* ( */
		var CLOSEPARENTHESES = 41 /* ) */
		var OPENBRACKET = 91 /* [ */
		var CLOSEBRACKET = 93 /* ] */
		var NEWLINE = 10 /* \n */
		var CARRIAGE = 13 /* \r */
		var TAB = 9 /* \t */
		var AT = 64 /* @ */
		var SPACE = 32 /*   */
		var AND = 38 /* & */
		var DASH = 45 /* - */
		var UNDERSCORE = 95 /* _ */
		var STAR = 42 /* * */
		var COMMA = 44 /* , */
		var COLON = 58 /* : */
		var SINGLEQUOTE = 39 /* ' */
		var DOUBLEQUOTE = 34 /* " */
		var FOWARDSLASH = 47 /* / */
		var GREATERTHAN = 62 /* > */
		var PLUS = 43 /* + */
		var TILDE = 126 /* ~ */
		var NULL = 0 /* \0 */
		var FORMFEED = 12 /* \f */
		var VERTICALTAB = 11 /* \v */
	
		/* special identifiers */
		var KEYFRAME = 107 /* k */
		var MEDIA = 109 /* m */
		var SUPPORTS = 115 /* s */
		var PLACEHOLDER = 112 /* p */
		var READONLY = 111 /* o */
		var IMPORT = 169 /* <at>i */
		var CHARSET = 163 /* <at>c */
		var DOCUMENT = 100 /* <at>d */
	
		var column = 1 /* current column */
		var line = 1 /* current line numebr */
		var pattern = 0 /* :pattern */
	
		var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
		var vendor = 1 /* vendor prefix */
		var escape = 1 /* escape :global() pattern */
		var compress = 0 /* compress output */
		var semicolon = 0 /* no/semicolon option */
		var preserve = 0 /* preserve empty selectors */
	
		/* empty reference */
		var array = []
	
		/* plugins */
		var plugins = []
		var plugged = 0
	
		/* plugin context */
		var POSTS = -2
		var PREPS = -1
		var UNKWN = 0
		var PROPS = 1
		var BLCKS = 2
		var ATRUL = 3
	
		/* plugin newline context */
		var unkwn = 0
	
		/* keyframe animation */
		var keyed = 1
		var key = ''
	
		/* selector namespace */
		var nscopealt = ''
		var nscope = ''
	
		/**
		 * Compile
		 *
		 * @param {Array<string>} parent
		 * @param {Array<string>} current
		 * @param {string} body
		 * @param {number} id
		 * @param {number} depth
		 * @return {string}
		 */
		function compile (parent, current, body, id, depth) {
			var bracket = 0 /* brackets [] */
			var comment = 0 /* comments /* // or /* */
			var parentheses = 0 /* functions () */
			var quote = 0 /* quotes '', "" */
	
			var first = 0 /* first character code */
			var second = 0 /* second character code */
			var code = 0 /* current character code */
			var tail = 0 /* previous character code */
			var trail = 0 /* character before previous code */
			var peak = 0 /* previous non-whitespace code */
	
			var counter = 0 /* count sequence termination */
			var context = 0 /* track current context */
			var atrule = 0 /* track @at-rule context */
			var pseudo = 0 /* track pseudo token index */
			var caret = 0 /* current character index */
			var format = 0 /* control character formating context */
			var insert = 0 /* auto semicolon insertion */
			var invert = 0 /* inverted selector pattern */
			var length = 0 /* generic length address */
			var eof = body.length /* end of file(length) */
			var eol = eof - 1 /* end of file(characters) */
	
			var char = '' /* current character */
			var chars = '' /* current buffer of characters */
			var child = '' /* next buffer of characters */
			var out = '' /* compiled body */
			var children = '' /* compiled children */
			var flat = '' /* compiled leafs */
			var selector /* generic selector address */
			var result /* generic address */
	
			// ...build body
			while (caret < eof) {
				code = body.charCodeAt(caret)
	
				if (comment + quote + parentheses + bracket === 0) {
					// eof varient
					if (caret === eol) {
						if (format > 0) {
							chars = chars.replace(formatptn, '')
						}
	
						if (chars.trim().length > 0) {
							switch (code) {
								case SPACE:
								case TAB:
								case SEMICOLON:
								case CARRIAGE:
								case NEWLINE: {
									break
								}
								default: {
									chars += body.charAt(caret)
								}
							}
	
							code = SEMICOLON
						}
					}
	
					// auto semicolon insertion
					if (insert === 1) {
						switch (code) {
							// false flags
							case OPENBRACES:
							case COMMA: {
								insert = 0
								break
							}
							// ignore
							case TAB:
							case CARRIAGE:
							case NEWLINE:
							case SPACE: {
								break
							}
							// valid
							default: {
								caret--
								code = SEMICOLON
							}
						}
					}
	
					// token varient
					switch (code) {
						case OPENBRACES: {
							chars = chars.trim()
							first = chars.charCodeAt(0)
							counter = 1
							length = ++caret
	
							while (caret < eof) {
								code = body.charCodeAt(caret)
	
								switch (code) {
									case OPENBRACES: {
										counter++
										break
									}
									case CLOSEBRACES: {
										counter--
										break
									}
								}
	
								if (counter === 0) {
									break
								}
	
								caret++
							}
	
							child = body.substring(length, caret)
	
							if (first === NULL) {
								first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
							}
	
							switch (first) {
								// @at-rule
								case AT: {
									if (format > 0) {
										chars = chars.replace(formatptn, '')
									}
	
									second = chars.charCodeAt(1)
	
									switch (second) {
										case DOCUMENT:
										case MEDIA:
										case SUPPORTS: {
											selector = current
											break
										}
										default: {
											selector = array
										}
									}
	
									child = compile(current, selector, child, second, depth+1)
									length = child.length
	
									// preserve empty @at-rule
									if (preserve > 0 && length === 0) {
										length = chars.length
									}
	
									// execute plugins, @at-rule context
									if (plugged > 0) {
										selector = select(array, chars, invert)
										result = proxy(ATRUL, child, selector, current, line, column, length, second, depth)
										chars = selector.join('')
	
										if (result !== void 0) {
											if ((length = (child = result.trim()).length) === 0) {
												second = 0
												child = ''
											}
										}
									}
	
									if (length > 0) {
										switch (second) {
											case SUPPORTS: {
												chars = chars.replace(supportsptn, supports)
											}
											case DOCUMENT:
											case MEDIA: {
												child = chars + '{' + child + '}'
												break
											}
											case KEYFRAME: {
												chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
												child = chars + '{' + child + '}'
												child = '@' + (vendor > 0 ? webkit + child + '@' + child : child)
												break
											}
											default: {
												child = chars + child
											}
										}
									} else {
										child = ''
									}
	
									break
								}
								// selector
								default: {
									child = compile(current, select(current, chars, invert), child, id, depth+1)
								}
							}
	
							children += child
	
							// reset
							context = 0
							insert = 0
							pseudo = 0
							format = 0
							invert = 0
							atrule = 0
							chars = ''
							child = ''
							code = body.charCodeAt(++caret)
							break
						}
						case CLOSEBRACES:
						case SEMICOLON: {
							chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()
	
							if ((length = chars.length) > 1) {
								// monkey-patch missing colon
								if (pseudo === 0) {
									first = chars.charCodeAt(0)
	
									// first character is a letter or dash, buffer has a space character
									if ((first === DASH || first > 96 && first < 123)) {
										length = (chars = chars.replace(' ', ':')).length
									}
								}
	
								// execute plugins, property context
								if (plugged > 0) {
									if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth)) !== void 0) {
										if ((length = (chars = result.trim()).length) === 0) {
											chars = '\0\0'
										}
									}
								}
	
								first = chars.charCodeAt(0)
								second = chars.charCodeAt(1)
	
								switch (first + second) {
									case NULL: {
										break
									}
									case IMPORT:
									case CHARSET: {
										flat += chars + body.charAt(caret)
										break
									}
									default: {
										if (chars.charCodeAt(length-1) === COLON)
											break
	
										out += property(chars, first, second, chars.charCodeAt(2))
									}
								}
							}
	
							// reset
							context = 0
							insert = 0
							pseudo = 0
							format = 0
							invert = 0
							chars = ''
							code = body.charCodeAt(++caret)
							break
						}
					}
				}
	
				// parse characters
				switch (code) {
					case CARRIAGE:
					case NEWLINE: {
						// auto insert semicolon
						if (comment + quote + parentheses + bracket + semicolon === 0) {
							// valid non-whitespace characters that
							// may precede a newline
							switch (peak) {
								case CLOSEPARENTHESES:
								case SINGLEQUOTE:
								case DOUBLEQUOTE:
								case AT:
								case TILDE:
								case GREATERTHAN:
								case STAR:
								case PLUS:
								case FOWARDSLASH:
								case DASH:
								case COLON:
								case COMMA:
								case SEMICOLON:
								case OPENBRACES:
								case CLOSEBRACES: {
									break
								}
								default: {
									// current buffer has a colon
									if (pseudo > 0) {
										insert = 1
									}
								}
							}
						}
	
						// terminate line comment
						if (comment === FOWARDSLASH) {
							comment = 0
						}
	
						// execute plugins, newline context
						if (plugged * unkwn > 0) {
							proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth)
						}
	
						// next line, reset column position
						column = 1
						line++
						break
					}
					case SEMICOLON:
					case CLOSEBRACES: {
						if (comment + quote + parentheses + bracket === 0) {
							column++
							break
						}
					}
					default: {
						// increment column position
						column++
	
						// current character
						char = body.charAt(caret)
	
						// remove comments, escape functions, strings, attributes and prepare selectors
						switch (code) {
							case TAB:
							case SPACE: {
								if (quote + bracket === 0) {
									switch (tail) {
										case COMMA:
										case COLON:
										case TAB:
										case SPACE: {
											char = ''
											break
										}
										default: {
											if (code !== SPACE) {
												char = ' '
											}
										}
									}
								}
								break
							}
							// escape breaking control characters
							case NULL: {
								char = '\\0'
								break
							}
							case FORMFEED: {
								char = '\\f'
								break
							}
							case VERTICALTAB: {
								char = '\\v'
								break
							}
							// &
							case AND: {
								// inverted selector pattern i.e html &
								if (quote + comment + bracket === 0 && cascade > 0) {
									invert = 1
									format = 1
									char = '\f' + char
								}
								break
							}
							// ::p<l>aceholder, l
							// :read-on<l>y, l
							case 108: {
								if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
									switch (caret - pseudo) {
										// ::placeholder
										case 2: {
											if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
												pattern = tail
											}
										}
										// :read-only
										case 8: {
											if (trail === READONLY) {
												pattern = trail
											}
										}
									}
								}
								break
							}
							// :<pattern>
							case COLON: {
								if (quote + comment + bracket === 0) {
									pseudo = caret
								}
								break
							}
							// selectors
							case COMMA: {
								if (comment + parentheses + quote + bracket === 0) {
									format = 1
									char += '\r'
								}
								break
							}
							// quotes
							case DOUBLEQUOTE: {
								if (comment === 0) {
									quote = quote === code ? 0 : (quote === 0 ? code : quote)
									// " last character, add synthetic padding
									if (caret === eol) {
										eol++
										eof++
									}
								}
								break
							}
							case SINGLEQUOTE: {
								if (comment === 0) {
									quote = quote === code ? 0 : (quote === 0 ? code : quote)
									// ' last character, add synthetic padding
									if (caret === eol) {
										eol++
										eof++
									}
								}
								break
							}
							// attributes
							case OPENBRACKET: {
								if (quote + comment + parentheses === 0) {
									bracket++
								}
								break
							}
							case CLOSEBRACKET: {
								if (quote + comment + parentheses === 0) {
									bracket--
								}
								break
							}
							// functions
							case CLOSEPARENTHESES: {
								if (quote + comment + bracket === 0) {
									// ) last character, add synthetic padding
									if (caret === eol) {
										eol++
										eof++
									}
	
									parentheses--
								}
								break
							}
							case OPENPARENTHESES: {
								if (quote + comment + bracket === 0) {
									if (context === 0) {
										switch (tail*2 + trail*3) {
											// :matches
											case 533: {
												break
											}
											// :global, :not, :nth-child etc...
											default: {
												counter = 0
												context = 1
											}
										}
									}
	
									parentheses++
								}
								break
							}
							case AT: {
								if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
									atrule = 1
								}
								break
							}
							// block/line comments
							case STAR:
							case FOWARDSLASH: {
								if (quote + bracket + parentheses > 0) {
									break
								}
	
								switch (comment) {
									// initialize line/block comment context
									case 0: {
										switch (code*2 + body.charCodeAt(caret+1)*3) {
											// //
											case 235: {
												comment = FOWARDSLASH
												break
											}
											// /*
											case 220: {
												comment = STAR
												break
											}
										}
										break
									}
									// end block comment context
									case STAR: {
										if (code === FOWARDSLASH && tail === STAR) {
											char = ''
											comment = 0
										}
									}
								}
							}
						}
	
						// ignore comment blocks
						if (comment === 0) {
							// aggressive isolation mode, divide each individual selector
							// including selectors in :not function but excluding selectors in :global function
							if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
								switch (code) {
									case COMMA:
									case TILDE:
									case GREATERTHAN:
									case PLUS:
									case CLOSEPARENTHESES:
									case OPENPARENTHESES: {
										if (context === 0) {
											// outside of an isolated context i.e nth-child(<...>)
											switch (tail) {
												case TAB:
												case SPACE:
												case NEWLINE:
												case CARRIAGE: {
													char = char + '\0'
													break
												}
												default: {
													char = '\0' + char + (code === COMMA ? '' : '\0')
												}
											}
											format = 1
										} else {
											// within an isolated context, sleep untill it's terminated
											switch (code) {
												case OPENPARENTHESES: {
													context = ++counter
													break
												}
												case CLOSEPARENTHESES: {
													if ((context = --counter) === 0) {
														format = 1
														char += '\0'
													}
													break
												}
											}
										}
										break
									}
									case SPACE: {
										switch (tail) {
											case NULL:
											case OPENBRACES:
											case CLOSEBRACES:
											case SEMICOLON:
											case COMMA:
											case FORMFEED:
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												break
											}
											default: {
												// ignore in isolated contexts
												if (context === 0) {
													format = 1
													char += '\0'
												}
											}
										}
									}
								}
							}
	
							// concat buffer of characters
							chars += char
	
							// previous non-whitespace character code
							if (code !== SPACE) {
								peak = code
							}
						}
					}
				}
	
				// tail character codes
				trail = tail
				tail = code
	
				// visit every character
				caret++
			}
	
			length = out.length
	
			// preserve empty selector
	 		if (preserve > 0) {
	 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
	 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
						length = current.join(',').length + 2
	 				}
	 			}
			}
	
			if (length > 0) {
				// cascade isolation mode?
				selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current
	
				// execute plugins, block context
				if (plugged > 0) {
					result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth)
	
					if (result !== void 0 && (out = result).length === 0) {
						return flat + out + children
					}
				}
	
				out = selector.join(',') + '{' + out + '}'
	
				if (vendor*pattern > 0) {
					switch (pattern) {
						// ::read-only
						case READONLY: {
							out = out.replace(readonlyptn, ':'+moz+'$1')+out
							break
						}
						// ::placeholder
						case PLACEHOLDER: {
							out = (
								out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
								out.replace(plcholdrptn, '::' + moz + '$1') +
								out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
							)
							break
						}
					}
					pattern = 0
				}
			}
	
			return flat + out + children
		}
	
		/**
		 * Select
		 *
		 * @param {Array<string>} parent
		 * @param {string} current
		 * @param {number} invert
		 * @return {Array<string>}
		 */
		function select (parent, current, invert) {
			var selectors = current.trim().split(selectorptn)
			var out = selectors
	
			var length = selectors.length
			var l = parent.length
	
			switch (l) {
				// 0-1 parent selectors
				case 0:
				case 1: {
					for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
						out[i] = scope(selector, out[i], invert, l).trim()
					}
					break
				}
				// >2 parent selectors, nested
				default: {
					for (var i = 0, j = 0, out = []; i < length; ++i) {
						for (var k = 0; k < l; ++k) {
							out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
						}
					}
				}
			}
	
			return out
		}
	
		/**
		 * Scope
		 *
		 * @param {string} parent
		 * @param {string} current
		 * @param {number} invert
		 * @param {number} level
		 * @return {string}
		 */
		function scope (parent, current, invert, level) {
			var selector = current
			var code = selector.charCodeAt(0)
	
			// trim leading whitespace
			if (code < 33) {
				code = (selector = selector.trim()).charCodeAt(0)
			}
	
			switch (code) {
				// &
				case AND: {
					switch (cascade + level) {
						case 0:
						case 1: {
							if (parent.trim().length === 0) {
								break
							}
						}
						default: {
							return selector.replace(andptn, '$1'+parent.trim())
						}
					}
					break
				}
				// :
				case COLON: {
					switch (selector.charCodeAt(1)) {
						// g in :global
						case 103: {
							if (escape > 0 && cascade > 0) {
								return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
							}
							break
						}
						default: {
							// :hover
							return parent.trim() + selector
						}
					}
				}
				default: {
					// html &
					if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
						return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
					}
				}
			}
	
			return parent + selector
		}
	
		/**
		 * Property
		 *
		 * @param {string} input
		 * @param {number} first
		 * @param {number} second
		 * @param {number} third
		 * @return {string}
		 */
		function property (input, first, second, third) {
			var index = 0
			var out = input + ';'
			var hash = (first*2) + (second*3) + (third*4)
			var cache
	
			// animation: a, n, i characters
			if (hash === 944) {
				out = animation(out)
			} else if (vendor > 0) {
				// vendor prefix
				switch (hash) {
					// text-decoration/text-size-adjust: t, e, x
					case 1015: {
						// text-size-adjust, -
						return out.charCodeAt(9) === DASH ? webkit + out + out : out
					}
					// filter/fill f, i, l
					case 951: {
						// filter, t
						return out.charCodeAt(3) === 116 ? webkit + out + out : out
					}
					// color/column, c, o, l
					case 963: {
						// column, n
						return out.charCodeAt(5) === 110 ? webkit + out + out : out
					}
					// mask, m, a, s
					// clip-path, c, l, i
					case 969:
					case 942: {
						return webkit + out + out
					}
					// appearance: a, p, p
					case 978: {
						return webkit + out + moz + out + out
					}
					// hyphens: h, y, p
					// user-select: u, s, e
					case 1019:
					case 983: {
						return webkit + out + moz + out + ms + out + out
					}
					// background/backface-visibility, b, a, c
					case 883: {
						// backface-visibility, -
						return out.charCodeAt(8) === DASH ? webkit + out + out : out
					}
					// flex: f, l, e
					case 932: {
						return webkit + out + ms + out + out
					}
					// order: o, r, d
					case 964: {
						return webkit + out + ms + 'flex' + '-' + out + out
					}
					// justify-content, j, u, s
					case 1023: {
						cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')
						return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
					}
					// cursor, c, u, r
					case 1005: {
						return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out
					}
					// writing-mode, w, r, i
					case 1000: {
						cache = out.substring(13).trim()
						index = cache.indexOf('-') + 1
	
						switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
							// vertical-lr
							case 226: {
								cache = out.replace(writingptn, 'tb')
								break
							}
							// vertical-rl
							case 232: {
								cache = out.replace(writingptn, 'tb-rl')
								break
							}
							// horizontal-tb
							case 220: {
								cache = out.replace(writingptn, 'lr')
								break
							}
							default: {
								return out
							}
						}
	
						return webkit + out + ms + cache + out
					}
					// position: sticky
					case 1017: {
						if (out.indexOf('sticky', 9) === -1) {
							return out
						}
					}
					// display(flex/inline-flex/inline-box): d, i, s
					case 975: {
						index = (out = input).length - 10
						cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim()
	
						switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
							// inline-
							case 203: {
								// inline-box
								if (cache.charCodeAt(8) < 111) {
									break
								}
							}
							// inline-box/sticky
							case 115: {
								out = out.replace(cache, webkit+cache)+';'+out
								break
							}
							// inline-flex
							// flex
							case 207:
							case 102: {
								out = (
									out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
									out.replace(cache, webkit+cache)+';'+
									out.replace(cache, ms+cache+'box')+';'+
									out
								)
							}
						}
	
						return out + ';'
					}
					// align-items, align-center, align-self: a, l, i, -
					case 938: {
						if (out.charCodeAt(5) === DASH) {
							switch (out.charCodeAt(6)) {
								// align-items, i
								case 105: {
									cache = out.replace('-items', '')
									return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
								}
								// align-self, s
								case 115: {
									return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out
								}
								// align-content
								default: {
									return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '') + out
								}
							}
						}
						break
					}
					// width: min-content / width: max-content
					case 953: {
						if ((index = out.indexOf('-content', 9)) > 0) {
							// width: min-content / width: max-content
							if (out.charCodeAt(index - 3) === 109 && out.charCodeAt(index - 4) !== 45) {
								cache = out.substring(index - 3)
								return 'width:' + webkit + cache + 'width:' + moz + cache + 'width:' + cache
							}
						}
						break
					}
					// transform, transition: t, r, a
					case 962: {
						out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out
	
						// transitions
						if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
							return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
						}
	
						break
					}
				}
			}
	
			return out
		}
	
		/**
		 * @param {string} match
		 * @param {string} group
		 * @return {string}
		 */
		function supports (match, group) {
			var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2))
	
			return out !== group+';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '('+group+')'
		}
	
		/**
		 * Animation
		 *
		 * @param {string} input
		 * @return {string}
		 */
		function animation (input) {
			var length = input.length
			var index = input.indexOf(':', 9) + 1
			var declare = input.substring(0, index).trim()
			var body = input.substring(index, length-1).trim()
			var out = ''
	
			// shorthand
			if (input.charCodeAt(9) !== DASH) {
				// split in case of multiple animations
				var list = body.split(animationptn)
	
				for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
					var value = list[i]
					var items = value.split(propertiesptn)
	
					while (value = items[index]) {
						var peak = value.charCodeAt(0)
	
						if (keyed === 1 && (
							// letters
							(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
							// dash but not in sequence i.e --
							(peak === DASH && value.charCodeAt(1) !== DASH)
						)) {
							// not a number/function
							switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
								case 1: {
									switch (value) {
										// not a valid reserved keyword
										case 'infinite': case 'alternate': case 'backwards': case 'running':
										case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
										case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
										case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
										case 'initial': case 'unset': case 'step-start': case 'step-end': {
											break
										}
										default: {
											value += key
										}
									}
								}
							}
						}
	
						items[index++] = value
					}
	
					out += (i === 0 ? '' : ',') + items.join(' ')
				}
			} else {
				// animation-name, n
				out += input.charCodeAt(10) === 110 ? body + (keyed === 1 ? key : '') : body
			}
	
			out = declare + out + ';'
	
			return vendor > 0 ? webkit + out + out : out
		}
	
		/**
		 * Isolate
		 *
		 * @param {Array<string>} current
		 */
		function isolate (current) {
			for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
				// split individual elements in a selector i.e h1 h2 === [h1, h2]
				var elements = current[i].split(elementptn)
				var out = ''
	
				for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
					// empty element
					if ((size = (element = elements[j]).length) === 0 && l > 1) {
						continue
					}
	
					tail = out.charCodeAt(out.length-1)
					code = element.charCodeAt(0)
					padding = ''
	
					if (j !== 0) {
						// determine if we need padding
						switch (tail) {
							case STAR:
							case TILDE:
							case GREATERTHAN:
							case PLUS:
							case SPACE:
							case OPENPARENTHESES:  {
								break
							}
							default: {
								padding = ' '
							}
						}
					}
	
					switch (code) {
						case AND: {
							element = padding + nscopealt
						}
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case CLOSEPARENTHESES:
						case OPENPARENTHESES: {
							break
						}
						case OPENBRACKET: {
							element = padding + element + nscopealt
							break
						}
						case COLON: {
							switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
								// :global
								case 530: {
									if (escape > 0) {
										element = padding + element.substring(8, size - 1)
										break
									}
								}
								// :hover, :nth-child(), ...
								default: {
									if (j < 1 || elements[j-1].length < 1) {
										element = padding + nscopealt + element
									}
								}
							}
							break
						}
						case COMMA: {
							padding = ''
						}
						default: {
							if (size > 1 && element.indexOf(':') > 0) {
								element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
							} else {
								element = padding + element + nscopealt
							}
						}
					}
	
					out += element
				}
	
				selector[i] = out.replace(formatptn, '').trim()
			}
	
			return selector
		}
	
		/**
		 * Proxy
		 *
		 * @param {number} context
		 * @param {string} content
		 * @param {Array<string>} selectors
		 * @param {Array<string>} parents
		 * @param {number} line
		 * @param {number} column
		 * @param {number} length
		 * @param {number} id
		 * @param {number} depth
		 * @return {(string|void|*)}
		 */
		function proxy (context, content, selectors, parents, line, column, length, id, depth) {
			for (var i = 0, out = content, next; i < plugged; ++i) {
				switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth)) {
					case void 0:
					case false:
					case true:
					case null: {
						break
					}
					default: {
						out = next
					}
				}
			}
	
			switch (out) {
				case void 0:
				case false:
				case true:
				case null:
				case content: {
					break
				}
				default: {
					return out
				}
			}
		}
	
		/**
		 * Minify
		 *
		 * @param {(string|*)} output
		 * @return {string}
		 */
		function minify (output) {
			return output
				.replace(formatptn, '')
				.replace(beforeptn, '')
				.replace(afterptn, '$1')
				.replace(tailptn, '$1')
				.replace(whiteptn, ' ')
		}
	
		/**
		 * Use
		 *
		 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
		 */
		function use (plugin) {
			switch (plugin) {
				case void 0:
				case null: {
					plugged = plugins.length = 0
					break
				}
				default: {
					switch (plugin.constructor) {
						case Array: {
							for (var i = 0, length = plugin.length; i < length; ++i) {
								use(plugin[i])
							}
							break
						}
						case Function: {
							plugins[plugged++] = plugin
							break
						}
						case Boolean: {
							unkwn = !!plugin|0
						}
					}
				}
	 		}
	
	 		return use
		}
	
		/**
		 * Set
		 *
		 * @param {*} options
		 */
		function set (options) {
			for (var name in options) {
				var value = options[name]
				switch (name) {
					case 'keyframe': keyed = value|0; break
					case 'global': escape = value|0; break
					case 'cascade': cascade = value|0; break
					case 'compress': compress = value|0; break
					case 'prefix': vendor = value|0; break
					case 'semicolon': semicolon = value|0; break
					case 'preserve': preserve = value|0; break
				}
			}
	
			return set
		}
	
		/**
		 * Stylis
		 *
		 * @param {string} selector
		 * @param {string} input
		 * @return {*}
		 */
		function stylis (selector, input) {
			if (this !== void 0 && this.constructor === stylis) {
				return factory(selector)
			}
	
			// setup
			var ns = selector
			var code = ns.charCodeAt(0)
	
			// trim leading whitespace
			if (code < 33) {
				code = (ns = ns.trim()).charCodeAt(0)
			}
	
			// keyframe/animation namespace
			if (keyed > 0) {
				key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
			}
	
			// reset, used to assert if a plugin is moneky-patching the return value
			code = 1
	
			// cascade/isolate
			if (cascade === 1) {
				nscope = ns
			} else {
				nscopealt = ns
			}
	
			var selectors = [nscope]
			var result
	
			// execute plugins, pre-process context
			if (plugged > 0) {
				result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0)
	
				if (result !== void 0 && typeof result === 'string') {
					input = result
				}
			}
	
			// build
			var output = compile(array, selectors, input, 0, 0)
	
			// execute plugins, post-process context
			if (plugged > 0) {
				result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0)
	
				// bypass minification
				if (result !== void 0 && typeof(output = result) !== 'string') {
					code = 0
				}
			}
	
			// reset
			key = ''
			nscope = ''
			nscopealt = ''
			pattern = 0
			line = 1
			column = 1
	
			return compress*code === 0 ? output : minify(output)
		}
	
		stylis['use'] = use
		stylis['set'] = set
	
		if (options !== void 0) {
			set(options)
		}
	
		return stylis
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(187)(module)))

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	/*! UIkit 3.0.0-beta.30 | http://www.getuikit.com | (c) 2014 - 2017 YOOtheme | MIT License */
	
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define('uikiticons', factory) :
		(global.UIkitIcons = factory());
	}(this, (function () { 'use strict';
	
	var album = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"5\" y=\"2\" width=\"10\" height=\"1\"></rect> <rect x=\"3\" y=\"4\" width=\"14\" height=\"1\"></rect> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"6.5\" width=\"17\" height=\"11\"></rect></svg>";
	var ban = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"></circle> <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"4\" y1=\"3.5\" x2=\"16\" y2=\"16.5\"></line></svg>";
	var behance = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z\"></path> <path d=\"M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z\"></path> <rect x=\"13\" y=\"4\" width=\"5\" height=\"1.4\"></rect></svg>";
	var bell = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z\"></path> <path fill=\"none\" stroke=\"#000\" d=\"M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16\"></path></svg>";
	var bold = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z\"></path></svg>";
	var bolt = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z\"></path></svg>";
	var bookmark = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5\"></polygon></svg>";
	var calendar = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z\"></path> <rect width=\"1\" height=\"3\" x=\"6\" y=\"2\"></rect> <rect width=\"1\" height=\"3\" x=\"13\" y=\"2\"></rect></svg>";
	var camera = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10.8\" r=\"3.8\"></circle> <path fill=\"none\" stroke=\"#000\" d=\"M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z\"></path></svg>";
	var cart = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\"></circle> <circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\"></circle> <polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\"></polyline></svg>";
	var check = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"4,10 8,15 17,4\"></polyline></svg>";
	var clock = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"></circle> <rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"></rect> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\"></path></svg>";
	var close = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,16 L4,4\"></path> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,4 L4,16\"></path></svg>";
	var code = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"13,4 19,10 13,16\"></polyline> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"7,4 1,10 7,16\"></polyline></svg>";
	var cog = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" cx=\"9.997\" cy=\"10\" r=\"3.31\"></circle> <path fill=\"none\" stroke=\"#000\" d=\"M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z\"></path></svg>";
	var comment = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z\"></path></svg>";
	var commenting = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5\"></polygon> <circle cx=\"10\" cy=\"8\" r=\"1\"></circle> <circle cx=\"6\" cy=\"8\" r=\"1\"></circle> <circle cx=\"14\" cy=\"8\" r=\"1\"></circle></svg>";
	var comments = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"2 0.5 19.5 0.5 19.5 13\"></polyline> <path d=\"M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z\"></path></svg>";
	var copy = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\"></rect> <polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\"></polyline></svg>";
	var database = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <ellipse fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"4.64\" rx=\"7.5\" ry=\"3.14\"></ellipse> <path fill=\"none\" stroke=\"#000\" d=\"M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11\"></path> <path fill=\"none\" stroke=\"#000\" d=\"M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25\"></path> <path fill=\"none\" stroke=\"#000\" d=\"M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64\"></path></svg>";
	var desktop = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"8\" y=\"15\" width=\"1\" height=\"2\"></rect> <rect x=\"11\" y=\"15\" width=\"1\" height=\"2\"></rect> <rect x=\"5\" y=\"16\" width=\"10\" height=\"1\"></rect> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"3.5\" width=\"17\" height=\"11\"></rect></svg>";
	var download = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"14,10 9.5,14.5 5,10\"></polyline> <rect x=\"3\" y=\"17\" width=\"13\" height=\"1\"></rect> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"13.91\" x2=\"9.5\" y2=\"3\"></line></svg>";
	var dribbble = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5\"></path> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6\"></path> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4\"></path> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" cx=\"10\" cy=\"10\" r=\"9\"></circle></svg>";
	var expand = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"13 2 18 2 18 7 17 7 17 3 13 3\"></polygon> <polygon points=\"2 13 3 13 3 17 7 17 7 18 2 18\"></polygon> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11,9 L17,3\"></path> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M3,17 L9,11\"></path></svg>";
	var facebook = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z\"></path></svg>";
	var file = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"1.5\" width=\"13\" height=\"17\"></rect></svg>";
	var flickr = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"5.5\" cy=\"9.5\" r=\"3.5\"></circle> <circle cx=\"14.5\" cy=\"9.5\" r=\"3.5\"></circle></svg>";
	var folder = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5\"></polygon></svg>";
	var forward = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z\"></path></svg>";
	var foursquare = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z\"></path></svg>";
	var future = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline points=\"19 2 18 2 18 6 14 6 14 7 19 7 19 2\"></polyline> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10\"></path> <rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"></rect> <path d=\"M13.018,14.197 L9.445,10.625\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\"></path></svg>";
	var github = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z\"></path></svg>";
	var gitter = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"3.5\" y=\"1\" width=\"1.531\" height=\"11.471\"></rect> <rect x=\"7.324\" y=\"4.059\" width=\"1.529\" height=\"15.294\"></rect> <rect x=\"11.148\" y=\"4.059\" width=\"1.527\" height=\"15.294\"></rect> <rect x=\"14.971\" y=\"4.059\" width=\"1.529\" height=\"8.412\"></rect></svg>";
	var google = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z\"></path></svg>";
	var grid = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"2\" y=\"2\" width=\"3\" height=\"3\"></rect> <rect x=\"8\" y=\"2\" width=\"3\" height=\"3\"></rect> <rect x=\"14\" y=\"2\" width=\"3\" height=\"3\"></rect> <rect x=\"2\" y=\"8\" width=\"3\" height=\"3\"></rect> <rect x=\"8\" y=\"8\" width=\"3\" height=\"3\"></rect> <rect x=\"14\" y=\"8\" width=\"3\" height=\"3\"></rect> <rect x=\"2\" y=\"14\" width=\"3\" height=\"3\"></rect> <rect x=\"8\" y=\"14\" width=\"3\" height=\"3\"></rect> <rect x=\"14\" y=\"14\" width=\"3\" height=\"3\"></rect></svg>";
	var happy = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"13\" cy=\"7\" r=\"1\"></circle> <circle cx=\"7\" cy=\"7\" r=\"1\"></circle> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"8.5\"></circle> <path fill=\"none\" stroke=\"#000\" d=\"M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4\"></path></svg>";
	var hashtag = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z\"></path></svg>";
	var heart = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\"></path></svg>";
	var history = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"#000\" points=\"1 2 2 2 2 6 6 6 6 7 1 7 1 2\"></polyline> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10\"></path> <rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"></rect> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\" id=\"Shape\"></path></svg>";
	var home = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65\"></polygon> <polygon points=\"15 4 18 4 18 7 17 7 17 5 15 5\"></polygon> <polygon points=\"3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19\"></polygon></svg>";
	var image = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"16.1\" cy=\"6.1\" r=\"1.1\"></circle> <rect fill=\"none\" stroke=\"#000\" x=\"0.5\" y=\"2.5\" width=\"19\" height=\"15\"></rect> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"4,13 8,9 13,14\"></polyline> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"11,12 12.5,10.5 16,14\"></polyline></svg>";
	var info = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z\"></path> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"></circle></svg>";
	var instagram = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z\"></path> <circle cx=\"14.87\" cy=\"5.26\" r=\"1.09\"></circle> <path d=\"M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z\"></path></svg>";
	var italic = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z\"></path></svg>";
	var joomla = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z\"></path> <path d=\"M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8\"></path> <path d=\"M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8\"></path> <path d=\"M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7\"></path></svg>";
	var laptop = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect y=\"16\" width=\"20\" height=\"1\"></rect> <rect fill=\"none\" stroke=\"#000\" x=\"2.5\" y=\"4.5\" width=\"15\" height=\"10\"></rect></svg>";
	var lifesaver = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z\"></path></svg>";
	var link = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375\"></path> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375\"></path> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M7.925,11.875 L11.925,7.975\"></path></svg>";
	var linkedin = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z\"></path> <path d=\"M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z\"></path></svg>";
	var list = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"6\" y=\"4\" width=\"12\" height=\"1\"></rect> <rect x=\"6\" y=\"9\" width=\"12\" height=\"1\"></rect> <rect x=\"6\" y=\"14\" width=\"12\" height=\"1\"></rect> <rect x=\"2\" y=\"4\" width=\"2\" height=\"1\"></rect> <rect x=\"2\" y=\"9\" width=\"2\" height=\"1\"></rect> <rect x=\"2\" y=\"14\" width=\"2\" height=\"1\"></rect></svg>";
	var location = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z\"></path> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"6.8\" r=\"2.3\"></circle></svg>";
	var lock = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" height=\"10\" width=\"13\" y=\"8.5\" x=\"3.5\"></rect> <path fill=\"none\" stroke=\"#000\" d=\"M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8\"></path></svg>";
	var mail = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"1.4,6.5 10,11 18.6,6.5\"></polyline> <path d=\"M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z\"></path></svg>";
	var menu = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"2\" y=\"4\" width=\"16\" height=\"1\"></rect> <rect x=\"2\" y=\"9\" width=\"16\" height=\"1\"></rect> <rect x=\"2\" y=\"14\" width=\"16\" height=\"1\"></rect></svg>";
	var minus = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect height=\"1\" width=\"18\" y=\"9\" x=\"1\"></rect></svg>";
	var more = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"3\" cy=\"10\" r=\"2\"></circle> <circle cx=\"10\" cy=\"10\" r=\"2\"></circle> <circle cx=\"17\" cy=\"10\" r=\"2\"></circle></svg>";
	var move = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"4,5 1,5 1,9 2,9 2,6 4,6 \"></polygon> <polygon points=\"1,16 2,16 2,18 4,18 4,19 1,19 \"></polygon> <polygon points=\"14,16 14,19 11,19 11,18 13,18 13,16 \"></polygon> <rect fill=\"none\" stroke=\"#000\" x=\"5.5\" y=\"1.5\" width=\"13\" height=\"13\"></rect> <rect x=\"1\" y=\"11\" width=\"1\" height=\"3\"></rect> <rect x=\"6\" y=\"18\" width=\"3\" height=\"1\"></rect></svg>";
	var nut = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3\"></polygon> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"3.5\"></circle></svg>";
	var pagekit = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19 \"></polygon></svg>";
	var pencil = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z\"></path> <path fill=\"none\" stroke=\"#000\" d=\"M15.98,7.268 L13.851,5.148\"></path></svg>";
	var phone = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z\"></path> <circle cx=\"10.5\" cy=\"16.5\" r=\"0.8\"></circle></svg>";
	var pinterest = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1\"></path></svg>";
	var play = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"6.5,5 14.5,10 6.5,15\"></polygon></svg>";
	var plus = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"9\" y=\"1\" width=\"1\" height=\"17\"></rect> <rect x=\"1\" y=\"9\" width=\"17\" height=\"1\"></rect></svg>";
	var pull = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7\"></polygon> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"11\" x2=\"9.5\" y2=\"2\"></line> <polyline fill=\"none\" stroke=\"#000\" points=\"6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5\"></polyline></svg>";
	var push = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3\"></polygon> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"10\" x2=\"9.5\" y2=\"1\"></line> <polyline fill=\"none\" stroke=\"#000\" points=\"6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5\"></polyline></svg>";
	var question = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"></circle> <circle cx=\"10.44\" cy=\"14.42\" r=\"1.05\"></circle> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" d=\"M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75\"></path></svg>";
	var receiver = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611\"></path></svg>";
	var refresh = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5\"></path> <polyline fill=\"none\" stroke=\"#000\" points=\"9.9 2 12.79 4.89 9.79 7.9\"></polyline></svg>";
	var reply = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z\"></path></svg>";
	var rss = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"3.12\" cy=\"16.8\" r=\"1.85\"></circle> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5\"></path> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5\"></path></svg>";
	var search = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"></circle> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"></path></svg>";
	var server = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"3\" y=\"3\" width=\"1\" height=\"2\"></rect> <rect x=\"5\" y=\"3\" width=\"1\" height=\"2\"></rect> <rect x=\"7\" y=\"3\" width=\"1\" height=\"2\"></rect> <rect x=\"16\" y=\"3\" width=\"1\" height=\"1\"></rect> <rect x=\"16\" y=\"10\" width=\"1\" height=\"1\"></rect> <circle fill=\"none\" stroke=\"#000\" cx=\"9.9\" cy=\"17.4\" r=\"1.4\"></circle> <rect x=\"3\" y=\"10\" width=\"1\" height=\"2\"></rect> <rect x=\"5\" y=\"10\" width=\"1\" height=\"2\"></rect> <rect x=\"9.5\" y=\"14\" width=\"1\" height=\"2\"></rect> <rect x=\"3\" y=\"17\" width=\"6\" height=\"1\"></rect> <rect x=\"11\" y=\"17\" width=\"6\" height=\"1\"></rect> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"1.5\" width=\"17\" height=\"5\"></rect> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"8.5\" width=\"17\" height=\"5\"></rect></svg>";
	var settings = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"3.55\" rx=\"2.11\" ry=\"2.15\"></ellipse> <ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"15.55\" rx=\"2.11\" ry=\"2.15\"></ellipse> <circle fill=\"none\" stroke=\"#000\" cx=\"13.15\" cy=\"9.55\" r=\"2.15\"></circle> <rect x=\"1\" y=\"3\" width=\"3\" height=\"1\"></rect> <rect x=\"10\" y=\"3\" width=\"8\" height=\"1\"></rect> <rect x=\"1\" y=\"9\" width=\"8\" height=\"1\"></rect> <rect x=\"15\" y=\"9\" width=\"3\" height=\"1\"></rect> <rect x=\"1\" y=\"15\" width=\"3\" height=\"1\"></rect> <rect x=\"10\" y=\"15\" width=\"8\" height=\"1\"></rect></svg>";
	var shrink = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"11 4 12 4 12 8 16 8 16 9 11 9\"></polygon> <polygon points=\"4 11 9 11 9 16 8 16 8 12 4 12\"></polygon> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M12,8 L18,2\"></path> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2,18 L8,12\"></path></svg>";
	var social = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.4\" y1=\"14\" x2=\"6.3\" y2=\"10.7\"></line> <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.5\" y1=\"5.5\" x2=\"6.5\" y2=\"8.8\"></line> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"4.6\" r=\"2.3\"></circle> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"14.8\" r=\"2.3\"></circle> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"4.5\" cy=\"9.8\" r=\"2.3\"></circle></svg>";
	var soundcloud = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z\"></path> <rect x=\"6\" y=\"6.5\" width=\"1.5\" height=\"8.5\"></rect> <rect x=\"3\" y=\"8\" width=\"1.5\" height=\"7\"></rect> <rect y=\"10\" width=\"1.5\" height=\"5\"></rect></svg>";
	var star = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27\"></polygon></svg>";
	var strikethrough = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z\"></path> <rect x=\"3\" y=\"10\" width=\"15\" height=\"1\"></rect></svg>";
	var table = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"1\" y=\"3\" width=\"18\" height=\"1\"></rect> <rect x=\"1\" y=\"7\" width=\"18\" height=\"1\"></rect> <rect x=\"1\" y=\"11\" width=\"18\" height=\"1\"></rect> <rect x=\"1\" y=\"15\" width=\"18\" height=\"1\"></rect></svg>";
	var tablet = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z\"></path> <circle cx=\"10.5\" cy=\"16.3\" r=\"0.8\"></circle></svg>";
	var tag = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z\"></path> <circle cx=\"14\" cy=\"6\" r=\"1\"></circle></svg>";
	var thumbnails = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"3.5\" width=\"5\" height=\"5\"></rect> <rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"3.5\" width=\"5\" height=\"5\"></rect> <rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"11.5\" width=\"5\" height=\"5\"></rect> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"11.5\" width=\"5\" height=\"5\"></rect></svg>";
	var trash = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"6.5 3 6.5 1.5 13.5 1.5 13.5 3\"></polyline> <polyline fill=\"none\" stroke=\"#000\" points=\"4.5 4 4.5 18.5 15.5 18.5 15.5 4\"></polyline> <rect x=\"8\" y=\"7\" width=\"1\" height=\"9\"></rect> <rect x=\"11\" y=\"7\" width=\"1\" height=\"9\"></rect> <rect x=\"2\" y=\"3\" width=\"16\" height=\"1\"></rect></svg>";
	var tripadvisor = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z\"></path></svg>";
	var tumblr = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z\"></path></svg>";
	var tv = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"7\" y=\"16\" width=\"6\" height=\"1\"></rect> <rect fill=\"none\" stroke=\"#000\" x=\"0.5\" y=\"3.5\" width=\"19\" height=\"11\"></rect></svg>";
	var twitter = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74\"></path></svg>";
	var uikit = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3\"></polygon> <polygon points=\"9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3\"></polygon></svg>";
	var unlock = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"8.5\" width=\"13\" height=\"10\"></rect> <path fill=\"none\" stroke=\"#000\" d=\"M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9\"></path></svg>";
	var upload = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"5 8 9.5 3.5 14 8 \"></polyline> <rect x=\"3\" y=\"17\" width=\"13\" height=\"1\"></rect> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"15\" x2=\"9.5\" y2=\"4\"></line></svg>";
	var user = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.9\" cy=\"6.4\" r=\"4.4\"></circle> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2\"></path></svg>";
	var users = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"7.7\" cy=\"8.6\" r=\"3.5\"></circle> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3\"></path> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1\"></path></svg>";
	var vimeo = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z\"></path></svg>";
	var warning = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"10\" cy=\"14\" r=\"1\"></circle> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"></circle> <path d=\"M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z\"></path></svg>";
	var whatsapp = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9\"></path></svg>";
	var wordpress = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z\"></path></svg>";
	var world = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M1,10.5 L19,10.5\"></path> <path fill=\"none\" stroke=\"#000\" d=\"M2.35,15.5 L17.65,15.5\"></path> <path fill=\"none\" stroke=\"#000\" d=\"M2.35,5.5 L17.523,5.5\"></path> <path fill=\"none\" stroke=\"#000\" d=\"M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z\"></path> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10.5\" r=\"9\"></circle></svg>";
	var xing = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z\"></path> <path d=\"M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z\"></path></svg>";
	var yelp = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z\"></path></svg>";
	var youtube = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z\"></path></svg>";
	var Icons = {
		album: album,
		ban: ban,
		behance: behance,
		bell: bell,
		bold: bold,
		bolt: bolt,
		bookmark: bookmark,
		calendar: calendar,
		camera: camera,
		cart: cart,
		check: check,
		clock: clock,
		close: close,
		code: code,
		cog: cog,
		comment: comment,
		commenting: commenting,
		comments: comments,
		copy: copy,
		database: database,
		desktop: desktop,
		download: download,
		dribbble: dribbble,
		expand: expand,
		facebook: facebook,
		file: file,
		flickr: flickr,
		folder: folder,
		forward: forward,
		foursquare: foursquare,
		future: future,
		github: github,
		gitter: gitter,
		google: google,
		grid: grid,
		happy: happy,
		hashtag: hashtag,
		heart: heart,
		history: history,
		home: home,
		image: image,
		info: info,
		instagram: instagram,
		italic: italic,
		joomla: joomla,
		laptop: laptop,
		lifesaver: lifesaver,
		link: link,
		linkedin: linkedin,
		list: list,
		location: location,
		lock: lock,
		mail: mail,
		menu: menu,
		minus: minus,
		more: more,
		move: move,
		nut: nut,
		pagekit: pagekit,
		pencil: pencil,
		phone: phone,
		pinterest: pinterest,
		play: play,
		plus: plus,
		pull: pull,
		push: push,
		question: question,
		receiver: receiver,
		refresh: refresh,
		reply: reply,
		rss: rss,
		search: search,
		server: server,
		settings: settings,
		shrink: shrink,
		social: social,
		soundcloud: soundcloud,
		star: star,
		strikethrough: strikethrough,
		table: table,
		tablet: tablet,
		tag: tag,
		thumbnails: thumbnails,
		trash: trash,
		tripadvisor: tripadvisor,
		tumblr: tumblr,
		tv: tv,
		twitter: twitter,
		uikit: uikit,
		unlock: unlock,
		upload: upload,
		user: user,
		users: users,
		vimeo: vimeo,
		warning: warning,
		whatsapp: whatsapp,
		wordpress: wordpress,
		world: world,
		xing: xing,
		yelp: yelp,
		youtube: youtube,
		"500px": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719\t\tc0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449\t\tc-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045\t\tc-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z\"></path> <path d=\"M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066\t\tc0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564\t\tc0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271\t\tc0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z\"></path> <path d=\"M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521\t\tc-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53\t\tc-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203\t\tc-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604\t\tc0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645\t\tc1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z\"></path> <path d=\"M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461\t\tc0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882\t\tc0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881\t\tc-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461\t\tc-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915\t\tC5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0\t\tc0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408\t\tc0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406\t\tc-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799\t\tc0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468\t\tc-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607\t\tc0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038\t\tc-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113\t\tc-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z\"></path></svg>",
		"arrow-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66\"></polygon> <line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"4\" x2=\"10.5\" y2=\"15\"></line></svg>",
		"arrow-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"10 14 5 9.5 10 5\"></polyline> <line fill=\"none\" stroke=\"#000\" x1=\"16\" y1=\"9.5\" x2=\"5\" y2=\"9.52\"></line></svg>",
		"arrow-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"10 5 15 9.5 10 14\"></polyline> <line fill=\"none\" stroke=\"#000\" x1=\"4\" y1=\"9.5\" x2=\"15\" y2=\"9.5\"></line></svg>",
		"arrow-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4\"></polygon> <line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"16\" x2=\"10.5\" y2=\"5\"></line></svg>",
		"chevron-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"16 7 10 13 4 7\"></polyline></svg>",
		"chevron-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"13 16 7 10 13 4\"></polyline></svg>",
		"chevron-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"7 4 13 10 7 16\"></polyline></svg>",
		"chevron-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"4 13 10 7 16 13\"></polyline></svg>",
		"cloud-download": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\"></path> <polyline fill=\"none\" stroke=\"#000\" points=\"11.75 16 9.5 18.25 7.25 16\"></polyline> <path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\"></path></svg>",
		"cloud-upload": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\"></path> <polyline fill=\"none\" stroke=\"#000\" points=\"7.25 11.75 9.5 9.5 11.75 11.75\"></polyline> <path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\"></path></svg>",
		"credit-card": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"4.5\" width=\"17\" height=\"12\"></rect> <rect x=\"1\" y=\"7\" width=\"18\" height=\"3\"></rect></svg>",
		"file-edit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z\"></path> <polyline fill=\"none\" stroke=\"#000\" points=\"16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5\"></polyline></svg>",
		"git-branch": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"3\" r=\"2\"></circle> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14\" cy=\"6\" r=\"2\"></circle> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"17\" r=\"2\"></circle> <path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5\"></path></svg>",
		"git-fork": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"5.79\" cy=\"2.79\" r=\"1.79\"></circle> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14.19\" cy=\"2.79\" r=\"1.79\"></circle> <ellipse fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"10.03\" cy=\"16.79\" rx=\"1.79\" ry=\"1.79\"></ellipse> <path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57\"></path></svg>",
		"github-alt": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z\"></path></svg>",
		"google-plus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z\"></path> <polygon points=\"20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9 \"></polygon></svg>",
		"minus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\"></circle> <line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\"></line></svg>",
		"more-vertical": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"10\" cy=\"3\" r=\"2\"></circle> <circle cx=\"10\" cy=\"10\" r=\"2\"></circle> <circle cx=\"10\" cy=\"17\" r=\"2\"></circle></svg>",
		"paint-bucket": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z\"></path> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.42,2.33 L11.7,7.61\"></path> <path d=\"M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z\"></path></svg>",
		"phone-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z\"></path> <circle cx=\"3.8\" cy=\"10.5\" r=\"0.8\"></circle></svg>",
		"play-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"8.5 7 13.5 10 8.5 13\"></polygon> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"></circle></svg>",
		"plus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\"></circle> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"5\" x2=\"9.5\" y2=\"14\"></line> <line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\"></line></svg>",
		"quote-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z\"></path> <path d=\"M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z\"></path></svg>",
		"sign-in": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3\"></polygon> <polygon points=\"9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5\"></polygon></svg>",
		"sign-out": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5\"></polygon> <polygon points=\"13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3\"></polygon></svg>",
		"tablet-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z\"></path> <circle cx=\"3.7\" cy=\"10.5\" r=\"0.8\"></circle></svg>",
		"triangle-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"5 7 15 7 10 12\"></polygon></svg>",
		"triangle-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"12 5 7 10 12 15\"></polygon></svg>",
		"triangle-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"8 5 13 10 8 15\"></polygon></svg>",
		"triangle-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"5 13 10 8 15 13\"></polygon></svg>",
		"video-camera": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"18,6 18,14 12,10 \"></polygon> <rect x=\"2\" y=\"5\" width=\"12\" height=\"10\"></rect></svg>"
	};
	
	function plugin(UIkit) {
	
	    if (plugin.installed) {
	        return;
	    }
	
	    UIkit.icon.add(Icons);
	
	}
	
	if (typeof window !== 'undefined' && window.UIkit) {
	    window.UIkit.use(plugin);
	}
	
	return plugin;
	
	})));


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	/*! UIkit 3.0.0-beta.30 | http://www.getuikit.com | (c) 2014 - 2017 YOOtheme | MIT License */
	
	(function (global, factory) {
		 true ? module.exports = factory(__webpack_require__(143)) :
		typeof define === 'function' && define.amd ? define('uikit', ['jquery'], factory) :
		(global.UIkit = factory(global.jQuery));
	}(this, (function ($) { 'use strict';
	
	var $__default = 'default' in $ ? $['default'] : $;
	
	var docEl = document.documentElement;
	var win = $__default(window);
	var doc = $__default(document);
	var docElement = $__default(docEl);
	
	var isRtl = docEl.getAttribute('dir') === 'rtl';
	
	function isReady() {
	    return document.readyState === 'complete' || document.readyState !== 'loading' && !docEl.doScroll;
	}
	
	function ready(fn) {
	
	    var handle = function () {
	        off(document, 'DOMContentLoaded', handle);
	        off(window, 'load', handle);
	        fn();
	    };
	
	    if (isReady()) {
	        fn();
	    } else {
	        on(document, 'DOMContentLoaded', handle);
	        on(window, 'load', handle);
	    }
	
	}
	
	function on(el, type, listener, useCapture) {
	    if ( useCapture === void 0 ) useCapture = false;
	
	    type.split(' ').forEach(function (type) { return toNode(el).addEventListener(type, listener, useCapture); });
	}
	
	function off(el, type, listener, useCapture) {
	    if ( useCapture === void 0 ) useCapture = false;
	
	    type.split(' ').forEach(function (type) { return toNode(el).removeEventListener(type, listener, useCapture); });
	}
	
	function one(el, type, listener, useCapture, condition) {
	
	    var handler = function (e) {
	        var result = !condition || condition(e);
	        if (result) {
	            off(el, type, handler, useCapture);
	            listener(e, result);
	        }
	    };
	
	    on(el, type, handler, useCapture);
	}
	
	function trigger(element, event) {
	    var e = createEvent(event);
	    toNode(element).dispatchEvent(e);
	    return e;
	}
	
	function $trigger(element, event, data, local) {
	    if ( local === void 0 ) local = false;
	
	    var e = event instanceof $.Event ? event : $.Event(event);
	    $__default(element)[local ? 'triggerHandler' : 'trigger'](e, data);
	    return e;
	}
	
	var transitioncancel = 'transitioncancel';
	function transition(element, props, duration, transition) {
	    if ( duration === void 0 ) duration = 400;
	    if ( transition === void 0 ) transition = 'linear';
	
	
	    return promise(function (resolve, reject) {
	
	        element = $__default(element);
	
	        for (var name in props) {
	            element.css(name, element.css(name));
	        }
	
	        var timer = setTimeout(function () { return element.trigger(transitionend); }, duration);
	
	        one(element, (transitionend + " " + transitioncancel), function (ref) {
	            var type = ref.type;
	
	            clearTimeout(timer);
	            element.removeClass('uk-transition').css('transition', '');
	            type === transitioncancel ? reject() : resolve();
	        }, false, function (ref) {
	            var target = ref.target;
	
	            return element.is(target);
	        });
	
	        element
	            .addClass('uk-transition')
	            .css('transition', ("all " + duration + "ms " + transition))
	            .css(props);
	
	    });
	
	}
	
	var Transition = {
	
	    start: transition,
	
	    stop: function stop(element) {
	        trigger(element, transitionend);
	        return promise.resolve();
	    },
	
	    cancel: function cancel(element) {
	        trigger(element, transitioncancel);
	        return promise.resolve();
	    },
	
	    inProgress: function inProgress(element) {
	        return $__default(element).hasClass('uk-transition');
	    }
	
	};
	
	var animationcancel = 'animationcancel';
	var animationprefix = 'uk-animation-';
	var clsCancelAnimation = 'uk-cancel-animation';
	function animate(element, animation, duration, origin, out) {
	    var arguments$1 = arguments;
	    if ( duration === void 0 ) duration = 200;
	
	
	    return promise(function (resolve, reject) {
	
	        element = $__default(element);
	
	        if (element.hasClass(clsCancelAnimation)) {
	            requestAnimationFrame(function () { return promise.resolve().then(function () { return animate.apply(null, arguments$1).then(resolve, reject); }
	                ); }
	            );
	            return;
	        }
	
	        var cls = animation + " " + animationprefix + (out ? 'leave' : 'enter');
	
	        if (animation.lastIndexOf(animationprefix, 0) === 0) {
	
	            if (origin) {
	                cls += " " + animationprefix + origin;
	            }
	
	            if (out) {
	                cls += " " + animationprefix + "reverse";
	            }
	
	        }
	
	        reset();
	
	        one(element, ((animationend || 'animationend') + " " + animationcancel), function (ref) {
	            var type = ref.type;
	
	
	            var hasReset = false;
	
	            type === animationcancel ? reject() : resolve();
	
	            requestAnimationFrame(function () {
	                if (!hasReset) {
	                    element.addClass(clsCancelAnimation);
	
	                    requestAnimationFrame(function () { return element.removeClass(clsCancelAnimation); });
	                }
	            });
	
	            promise.resolve().then(function () {
	                hasReset = true;
	                reset();
	            });
	
	        }, false, function (ref) {
	            var target = ref.target;
	
	            return element.is(target);
	        });
	
	        element
	            .css('animation-duration', (duration + "ms"))
	            .addClass(cls);
	
	        if (!animationend) {
	            requestAnimationFrame(function () { return Animation.cancel(element); });
	        }
	
	        function reset() {
	            element.css('animation-duration', '');
	            removeClass(element, (animationprefix + "\\S*"));
	        }
	
	    });
	
	}
	
	var inProgress = new RegExp((animationprefix + "(enter|leave)"));
	var Animation = {
	
	    in: function in$1(element, animation, duration, origin) {
	        return animate(element, animation, duration, origin, false);
	    },
	
	    out: function out(element, animation, duration, origin) {
	        return animate(element, animation, duration, origin, true);
	    },
	
	    inProgress: function inProgress$1(element) {
	        return inProgress.test($__default(element).attr('class'));
	    },
	
	    cancel: function cancel(element) {
	        trigger(element, animationcancel);
	        return promise.resolve();
	    }
	
	};
	
	function isJQuery(obj) {
	    return obj instanceof $__default;
	}
	
	function isWithin(element, selector) {
	    element = $__default(element);
	    return element.is(selector)
	        ? true
	        : isString(selector)
	            ? element.parents(selector).length
	            : toNode(selector).contains(element[0]);
	}
	
	function attrFilter(element, attr, pattern, replacement) {
	    element = $__default(element);
	    return element.attr(attr, function (i, value) { return value ? value.replace(pattern, replacement) : value; });
	}
	
	function removeClass(element, cls) {
	    return attrFilter(element, 'class', new RegExp(("(^|\\s)" + cls + "(?!\\S)"), 'g'), '');
	}
	
	function createEvent(e, bubbles, cancelable, data) {
	    if ( bubbles === void 0 ) bubbles = true;
	    if ( cancelable === void 0 ) cancelable = false;
	    if ( data === void 0 ) data = false;
	
	    if (isString(e)) {
	        var event = document.createEvent('Event');
	        event.initEvent(e, bubbles, cancelable);
	        e = event;
	    }
	
	    if (data) {
	        assign(e, data);
	    }
	
	    return e;
	}
	
	function isInView(element, offsetTop, offsetLeft) {
	    if ( offsetTop === void 0 ) offsetTop = 0;
	    if ( offsetLeft === void 0 ) offsetLeft = 0;
	
	
	    var rect = toNode(element).getBoundingClientRect();
	
	    return rect.bottom >= -1 * offsetTop
	        && rect.right >= -1 * offsetLeft
	        && rect.top <= window.innerHeight + offsetTop
	        && rect.left <= window.innerWidth + offsetLeft;
	}
	
	function scrolledOver(element) {
	
	    element = toNode(element);
	
	    var height = element.offsetHeight,
	        top = positionTop(element),
	        vp = window.innerHeight,
	        vh = vp + Math.min(0, top - vp),
	        diff = Math.max(0, vp - (docHeight() - (top + height)));
	
	    return clamp(((vh + window.pageYOffset - top) / ((vh + (height - (diff < vp ? diff : 0)) ) / 100)) / 100);
	}
	
	function positionTop(element) {
	    var top = 0;
	
	    do {
	
	        top += element.offsetTop;
	
	    } while (element = element.offsetParent);
	
	    return top;
	}
	
	function docHeight() {
	    return Math.max(docEl.offsetHeight, docEl.scrollHeight);
	}
	
	function getIndex(index, elements, current) {
	    if ( current === void 0 ) current = 0;
	
	
	    elements = $__default(elements);
	
	    var length = $__default(elements).length;
	
	    index = (isNumber(index)
	        ? index
	        : index === 'next'
	            ? current + 1
	            : index === 'previous'
	                ? current - 1
	                : isString(index)
	                    ? parseInt(index, 10)
	                    : elements.index(index)
	    ) % length;
	
	    return index < 0 ? index + length : index;
	}
	
	var voidElements = {
	    area: true,
	    base: true,
	    br: true,
	    col: true,
	    embed: true,
	    hr: true,
	    img: true,
	    input: true,
	    keygen: true,
	    link: true,
	    menuitem: true,
	    meta: true,
	    param: true,
	    source: true,
	    track: true,
	    wbr: true
	};
	function isVoidElement(element) {
	    return voidElements[toNode(element).tagName.toLowerCase()];
	}
	
	var Dimensions = {
	
	    ratio: function ratio(dimensions, prop, value) {
	
	        var aProp = prop === 'width' ? 'height' : 'width';
	
	        return ( obj = {}, obj[aProp] = Math.round(value * dimensions[aProp] / dimensions[prop]), obj[prop] = value, obj );
	        var obj;
	    },
	
	    contain: function contain(dimensions, maxDimensions) {
	        var this$1 = this;
	
	        dimensions = assign({}, dimensions);
	
	        $.each(dimensions, function (prop) { return dimensions = dimensions[prop] > maxDimensions[prop] ? this$1.ratio(dimensions, prop, maxDimensions[prop]) : dimensions; });
	
	        return dimensions;
	    },
	
	    cover: function cover(dimensions, maxDimensions) {
	        var this$1 = this;
	
	        dimensions = this.contain(dimensions, maxDimensions);
	
	        $.each(dimensions, function (prop) { return dimensions = dimensions[prop] < maxDimensions[prop] ? this$1.ratio(dimensions, prop, maxDimensions[prop]) : dimensions; });
	
	        return dimensions;
	    }
	
	};
	
	function query(selector, context) {
	    var selectors = getContextSelectors(selector);
	    return selectors ? selectors.reduce(function (context, selector) { return toJQuery(selector, context); }, context) : toJQuery(selector);
	}
	
	function preventClick() {
	
	    var timer = setTimeout(function () { return trigger(doc, 'click'); }, 0);
	
	    one(doc, 'click', function (e) {
	        e.preventDefault();
	        e.stopImmediatePropagation();
	
	        clearTimeout(timer);
	    }, true);
	
	}
	
	function getData(el, attribute) {
	    el = toNode(el);
	    for (var i = 0, attrs = [attribute, ("data-" + attribute)]; i < attrs.length; i++) {
	        if (el.hasAttribute(attrs[i])) {
	            return el.getAttribute(attrs[i]);
	        }
	    }
	}
	
	function bind(fn, context) {
	    return function (a) {
	        var l = arguments.length;
	        return l ? l > 1 ? fn.apply(context, arguments) : fn.call(context, a) : fn.call(context);
	    };
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(obj, key) {
	    return hasOwnProperty.call(obj, key);
	}
	
	function promise(executor) {
	
	    if (hasPromise) {
	        return new Promise(executor);
	    }
	
	    var def = $__default.Deferred();
	
	    executor(def.resolve, def.reject);
	
	    return def;
	}
	
	promise.resolve = function (value) {
	    return promise(function (resolve) {
	        resolve(value);
	    });
	};
	
	promise.reject = function (value) {
	    return promise(function (_, reject) {
	        reject(value);
	    });
	};
	
	promise.all = function (iterable) {
	    return hasPromise
	        ? Promise.all(iterable)
	        : $__default.when.apply($__default, iterable);
	};
	
	function classify(str) {
	    return str.replace(/(?:^|[-_\/])(\w)/g, function (_, c) { return c ? c.toUpperCase() : ''; });
	}
	
	function hyphenate(str) {
	    return str
	        .replace(/([a-z\d])([A-Z])/g, '$1-$2')
	        .toLowerCase()
	}
	
	var camelizeRE = /-(\w)/g;
	function camelize(str) {
	    return str.replace(camelizeRE, toUpper)
	}
	
	function toUpper(_, c) {
	    return c ? c.toUpperCase() : ''
	}
	
	var isArray = Array.isArray;
	
	function isFunction(obj) {
	    return typeof obj === 'function';
	}
	
	function isObject(obj) {
	    return obj !== null && typeof obj === 'object';
	}
	
	function isPlainObject(obj) {
	    return isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype;
	}
	
	function isBoolean(value) {
	    return typeof value === 'boolean';
	}
	
	function isString(value) {
	    return typeof value === 'string';
	}
	
	function isNumber(value) {
	    return typeof value === 'number';
	}
	
	function isUndefined(value) {
	    return value === undefined;
	}
	
	function isContextSelector(selector) {
	    return isString(selector) && selector.match(/^[!>+-]/);
	}
	
	function getContextSelectors(selector) {
	    return isContextSelector(selector) && selector.split(/(?=\s[!>+-])/g).map(function (value) { return value.trim(); });
	}
	
	var contextSelectors = {'!': 'closest', '+': 'nextAll', '-': 'prevAll'};
	function toJQuery(element, context) {
	
	    if (element === true) {
	        return null;
	    }
	
	    try {
	
	        if (context && isContextSelector(element) && element[0] !== '>') {
	
	            var fn = contextSelectors[element[0]], selector = element.substr(1);
	
	            context = $__default(context);
	
	            if (fn === 'closest') {
	                context = context.parent();
	                selector = selector || '*';
	            }
	
	            element = context[fn](selector);
	
	        } else {
	            element = $__default(element, context);
	        }
	
	    } catch (e) {
	        return null;
	    }
	
	    return element.length ? element : null;
	}
	
	function toNode(element) {
	    return element && (isJQuery(element) ? element[0] : element);
	}
	
	function toBoolean(value) {
	    return isBoolean(value)
	        ? value
	        : value === 'true' || value === '1' || value === ''
	            ? true
	            : value === 'false' || value === '0'
	                ? false
	                : value;
	}
	
	function toNumber(value) {
	    var number = Number(value);
	    return !isNaN(number) ? number : false;
	}
	
	function toList(value) {
	    return isArray(value)
	        ? value
	        : isString(value)
	            ? value.split(',').map(function (value) { return $.isNumeric(value)
	                ? toNumber(value)
	                : toBoolean(value.trim()); })
	            : [value];
	}
	
	var vars = {};
	function toMedia(value) {
	
	    if (isString(value)) {
	        if (value[0] === '@') {
	            var name = "media-" + (value.substr(1));
	            value = vars[name] || (vars[name] = parseFloat(getCssVar(name)));
	        } else if (isNaN(value)) {
	            return value;
	        }
	    }
	
	    return value && !isNaN(value) ? ("(min-width: " + value + "px)") : false;
	}
	
	function coerce(type, value, context) {
	
	    if (type === Boolean) {
	        return toBoolean(value);
	    } else if (type === Number) {
	        return toNumber(value);
	    } else if (type === 'jQuery') {
	        return query(value, context);
	    } else if (type === 'list') {
	        return toList(value);
	    } else if (type === 'media') {
	        return toMedia(value);
	    }
	
	    return type ? type(value) : value;
	}
	
	function toMs(time) {
	    return !time
	        ? 0
	        : time.substr(-2) === 'ms'
	            ? parseFloat(time)
	            : parseFloat(time) * 1000;
	}
	
	function swap(value, a, b) {
	    return value.replace(new RegExp((a + "|" + b), 'mg'), function (match) {
	        return match === a ? b : a
	    });
	}
	
	var assign = Object.assign || function (target) {
	    var args = [], len = arguments.length - 1;
	    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
	
	    target = Object(target);
	    for (var i = 0; i < args.length; i++) {
	        var source = args[i];
	        if (source !== null) {
	            for (var key in source) {
	                if (hasOwn(source, key)) {
	                    target[key] = source[key];
	                }
	            }
	        }
	    }
	    return target;
	};
	
	function clamp(number, min, max) {
	    if ( min === void 0 ) min = 0;
	    if ( max === void 0 ) max = 1;
	
	    return Math.min(Math.max(number, min), max);
	}
	
	function noop() {}
	
	var Observer = window.MutationObserver || window.WebKitMutationObserver;
	var requestAnimationFrame = window.requestAnimationFrame || function (fn) { return setTimeout(fn, 1000 / 60); };
	
	var hasTouchEvents = 'ontouchstart' in window;
	var hasPointerEvents = window.PointerEvent;
	var hasPromise = 'Promise' in window;
	var hasTouch = 'ontouchstart' in window
	    || window.DocumentTouch && document instanceof DocumentTouch
	    || navigator.msPointerEnabled && navigator.msMaxTouchPoints // IE 10
	    || navigator.pointerEnabled && navigator.maxTouchPoints; // IE >=11
	
	var pointerDown = !hasTouch ? 'mousedown' : ("mousedown " + (hasTouchEvents ? 'touchstart' : 'pointerdown'));
	var pointerMove = !hasTouch ? 'mousemove' : ("mousemove " + (hasTouchEvents ? 'touchmove' : 'pointermove'));
	var pointerUp = !hasTouch ? 'mouseup' :  ("mouseup " + (hasTouchEvents ? 'touchend' : 'pointerup'));
	var pointerEnter = hasTouch && hasPointerEvents ? 'pointerenter' : 'mouseenter';
	var pointerLeave = hasTouch && hasPointerEvents ? 'pointerleave' : 'mouseleave';
	
	var transitionend = prefix('transition', 'transition-end');
	var animationstart = prefix('animation', 'animation-start');
	var animationend = prefix('animation', 'animation-end');
	
	function getStyle(element, property, pseudoElt) {
	    return (window.getComputedStyle(toNode(element), pseudoElt) || {})[property];
	}
	
	function getCssVar(name) {
	
	    /* usage in css:  .var-name:before { content:"xyz" } */
	
	    var val, doc = document.documentElement,
	        element = doc.appendChild(document.createElement('div'));
	
	    element.classList.add(("var-" + name));
	
	    try {
	
	        val = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');
	        val = JSON.parse(val);
	
	    } catch (e) {}
	
	    doc.removeChild(element);
	
	    return val || undefined;
	}
	
	function getImage(src) {
	
	    return promise(function (resolve, reject) {
	        var img = new Image();
	
	        img.onerror = reject;
	        img.onload = function () { return resolve(img); };
	
	        img.src = src;
	    });
	
	}
	
	function prefix(name, event) {
	
	    var ucase = classify(name),
	        lowered = classify(event).toLowerCase(),
	        classified = classify(event),
	        element = document.body || document.documentElement,
	        names = ( obj = {}, obj[name] = lowered, obj[("Webkit" + ucase)] = ("webkit" + classified), obj[("Moz" + ucase)] = lowered, obj[("o" + ucase)] = ("o" + classified + " o" + lowered), obj );
	    var obj;
	
	    for (name in names) {
	        if (element.style[name] !== undefined) {
	            return names[name];
	        }
	    }
	}
	
	/*
	    Based on:
	    Copyright (c) 2016 Wilson Page wilsonpage@me.com
	    https://github.com/wilsonpage/fastdom
	*/
	
	var fastdom = {
	
	    reads: [],
	    writes: [],
	
	    measure: function measure(task) {
	        this.reads.push(task);
	        scheduleFlush();
	        return task;
	    },
	
	    mutate: function mutate(task) {
	        this.writes.push(task);
	        scheduleFlush();
	        return task;
	    },
	
	    clear: function clear(task) {
	        return remove(this.reads, task) || remove(this.writes, task);
	    },
	
	    flush: function flush() {
	
	        runTasks(this.reads);
	        runTasks(this.writes.splice(0, this.writes.length));
	
	        this.scheduled = false;
	
	        if (this.reads.length || this.writes.length) {
	            scheduleFlush();
	        }
	
	    }
	
	};
	
	function scheduleFlush() {
	    if (!fastdom.scheduled) {
	        fastdom.scheduled = true;
	        requestAnimationFrame(fastdom.flush.bind(fastdom));
	    }
	}
	
	function runTasks(tasks) {
	    var task;
	    while (task = tasks.shift()) {
	        task();
	    }
	}
	
	function remove(array, item) {
	    var index = array.indexOf(item);
	    return !!~index && !!array.splice(index, 1);
	}
	
	function MouseTracker() {}
	
	MouseTracker.prototype = {
	
	    positions: [],
	    position: null,
	
	    init: function init() {
	        var this$1 = this;
	
	
	        this.positions = [];
	        this.position = null;
	
	        var ticking = false;
	        this.handler = function (e) {
	
	            if (!ticking) {
	                setTimeout(function () {
	
	                    var time = Date.now(), length = this$1.positions.length;
	                    if (length && (time - this$1.positions[length - 1].time > 100)) {
	                        this$1.positions.splice(0, length);
	                    }
	
	                    this$1.positions.push({time: time, x: e.pageX, y: e.pageY});
	
	                    if (this$1.positions.length > 5) {
	                        this$1.positions.shift();
	                    }
	
	                    ticking = false;
	                }, 5);
	            }
	
	            ticking = true;
	        };
	
	        doc.on('mousemove', this.handler);
	
	    },
	
	    cancel: function cancel() {
	        if (this.handler) {
	            doc.off('mousemove', this.handler);
	        }
	    },
	
	    movesTo: function movesTo(target) {
	
	        if (this.positions.length < 2) {
	            return false;
	        }
	
	        var p = getDimensions(target),
	            position = this.positions[this.positions.length - 1],
	            prevPos = this.positions[0];
	
	        if (p.left <= position.x && position.x <= p.right && p.top <= position.y && position.y <= p.bottom) {
	            return false;
	        }
	
	        var points = [
	            [{x: p.left, y: p.top}, {x: p.right, y: p.bottom}],
	            [{x: p.right, y: p.top}, {x: p.left, y: p.bottom}]
	        ];
	
	        if (p.right <= position.x) {
	
	        } else if (p.left >= position.x) {
	            points[0].reverse();
	            points[1].reverse();
	        } else if (p.bottom <= position.y) {
	            points[0].reverse();
	        } else if (p.top >= position.y) {
	            points[1].reverse();
	        }
	
	        return !!points.reduce(function (result, point) {
	            return result + (slope(prevPos, point[0]) < slope(position, point[0]) && slope(prevPos, point[1]) > slope(position, point[1]));
	        }, 0);
	    }
	
	};
	
	function slope(a, b) {
	    return (b.y - a.y) / (b.x - a.x);
	}
	
	var strats = {};
	
	// concat strategy
	strats.args =
	strats.created =
	strats.events =
	strats.init =
	strats.ready =
	strats.connected =
	strats.disconnected =
	strats.destroy = function (parentVal, childVal) {
	
	    parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;
	
	    return childVal
	        ? parentVal
	            ? parentVal.concat(childVal)
	            : isArray(childVal)
	                ? childVal
	                : [childVal]
	        : parentVal;
	};
	
	// update strategy
	strats.update = function (parentVal, childVal) {
	    return strats.args(parentVal, isFunction(childVal) ? {read: childVal} : childVal);
	};
	
	// property strategy
	strats.props = function (parentVal, childVal) {
	
	    if (isArray(childVal)) {
	        childVal = childVal.reduce(function (value, key) {
	            value[key] = String;
	            return value;
	        }, {});
	    }
	
	    return strats.methods(parentVal, childVal);
	};
	
	// extend strategy
	strats.computed =
	strats.defaults =
	strats.methods = function (parentVal, childVal) {
	    return childVal
	        ? parentVal
	            ? assign({}, parentVal, childVal)
	            : childVal
	        : parentVal;
	};
	
	// default strategy
	var defaultStrat = function (parentVal, childVal) {
	    return isUndefined(childVal) ? parentVal : childVal;
	};
	
	function mergeOptions(parent, child) {
	
	    var options = {}, key;
	
	    if (child.mixins) {
	        for (var i = 0, l = child.mixins.length; i < l; i++) {
	            parent = mergeOptions(parent, child.mixins[i]);
	        }
	    }
	
	    for (key in parent) {
	        mergeKey(key);
	    }
	
	    for (key in child) {
	        if (!hasOwn(parent, key)) {
	            mergeKey(key);
	        }
	    }
	
	    function mergeKey(key) {
	        options[key] = (strats[key] || defaultStrat)(parent[key], child[key]);
	    }
	
	    return options;
	}
	
	var id = 0;
	
	var Player = function Player(el) {
	    this.id = ++id;
	    this.el = toNode(el);
	};
	
	Player.prototype.isVideo = function isVideo () {
	    return this.isYoutube() || this.isVimeo() || this.isHTML5();
	};
	
	Player.prototype.isHTML5 = function isHTML5 () {
	    return this.el.tagName === 'VIDEO';
	};
	
	Player.prototype.isIFrame = function isIFrame () {
	    return this.el.tagName === 'IFRAME';
	};
	
	Player.prototype.isYoutube = function isYoutube () {
	    return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
	};
	
	Player.prototype.isVimeo = function isVimeo () {
	    return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/);
	};
	
	Player.prototype.enableApi = function enableApi () {
	        var this$1 = this;
	
	
	    if (this.ready) {
	        return this.ready;
	    }
	
	    var youtube = this.isYoutube(), vimeo = this.isVimeo(), poller;
	
	    if (youtube || vimeo) {
	
	        return this.ready = promise(function (resolve) {
	
	            one(this$1.el, 'load', function () {
	                if (youtube) {
	                    var listener = function () { return post(this$1.el, {event: 'listening', id: this$1.id}); };
	                    poller = setInterval(listener, 100);
	                    listener();
	                }
	            });
	
	            listen(function (data) { return youtube && data.id === this$1.id && data.event === 'onReady' || vimeo && Number(data.player_id) === this$1.id; })
	                .then(function () {
	                    resolve();
	                    poller && clearInterval(poller);
	                });
	
	            this$1.el.setAttribute('src', ("" + (this$1.el.src) + (~this$1.el.src.indexOf('?') ? '&' : '?') + (youtube ? 'enablejsapi=1' : ("api=1&player_id=" + id))));
	
	        });
	
	    }
	
	    return promise.resolve();
	
	};
	
	Player.prototype.play = function play () {
	        var this$1 = this;
	
	
	    if (!this.isVideo()) {
	        return;
	    }
	
	    if (this.isIFrame()) {
	        this.enableApi().then(function () { return post(this$1.el, {func: 'playVideo', method: 'play'}); });
	    } else if (this.isHTML5()) {
	        this.el.play();
	    }
	};
	
	Player.prototype.pause = function pause () {
	        var this$1 = this;
	
	
	    if (!this.isVideo()) {
	        return;
	    }
	
	    if (this.isIFrame()) {
	        this.enableApi().then(function () { return post(this$1.el, {func: 'pauseVideo', method: 'pause'}); });
	    } else if (this.isHTML5()) {
	        this.el.pause();
	    }
	};
	
	Player.prototype.mute = function mute () {
	        var this$1 = this;
	
	
	    if (!this.isVideo()) {
	        return;
	    }
	
	    if (this.isIFrame()) {
	        this.enableApi().then(function () { return post(this$1.el, {func: 'mute', method: 'setVolume', value: 0}); });
	    } else if (this.isHTML5()) {
	        this.el.muted = true;
	        this.el.setAttribute('muted', '');
	    }
	
	};
	
	function post(el, cmd) {
	    try {
	        el.contentWindow.postMessage(JSON.stringify(assign({event: 'command'}, cmd)), '*');
	    } catch (e) {}
	}
	
	function listen(cb) {
	
	    return promise(function (resolve) {
	
	        one(window, 'message', function (_, data) { return resolve(data); }, false, function (ref) {
	            var data = ref.data;
	
	
	            if (!data || !isString(data)) {
	                return;
	            }
	
	            try {
	                data = JSON.parse(data);
	            } catch(err) {
	                return;
	            }
	
	            return data && cb(data);
	
	        });
	
	    });
	
	}
	
	var dirs = {
	        x: ['width', 'left', 'right'],
	        y: ['height', 'top', 'bottom']
	    };
	var docEl$1 = document.documentElement;
	
	function position(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {
	
	    elAttach = getPos(elAttach);
	    targetAttach = getPos(targetAttach);
	
	    var flipped = {element: elAttach, target: targetAttach};
	
	    if (!element) {
	        return flipped;
	    }
	
	    var dim = getDimensions(element),
	        targetDim = getDimensions(target),
	        position = targetDim;
	
	    moveTo(position, elAttach, dim, -1);
	    moveTo(position, targetAttach, targetDim, 1);
	
	    elOffset = getOffsets(elOffset, dim.width, dim.height);
	    targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);
	
	    elOffset['x'] += targetOffset['x'];
	    elOffset['y'] += targetOffset['y'];
	
	    position.left += elOffset['x'];
	    position.top += elOffset['y'];
	
	    boundary = getDimensions(boundary || window);
	
	    if (flip) {
	        $.each(dirs, function (dir, ref) {
	            var prop = ref[0];
	            var align = ref[1];
	            var alignFlip = ref[2];
	
	
	            if (!(flip === true || ~flip.indexOf(dir))) {
	                return;
	            }
	
	            var elemOffset = elAttach[dir] === align
	                    ? -dim[prop]
	                    : elAttach[dir] === alignFlip
	                        ? dim[prop]
	                        : 0,
	                targetOffset = targetAttach[dir] === align
	                    ? targetDim[prop]
	                    : targetAttach[dir] === alignFlip
	                        ? -targetDim[prop]
	                        : 0;
	
	            if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {
	
	                var centerOffset = dim[prop] / 2,
	                    centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;
	
	                elAttach[dir] === 'center' && (
	                    apply(centerOffset, centerTargetOffset)
	                    || apply(-centerOffset, -centerTargetOffset)
	                ) || apply(elemOffset, targetOffset);
	
	            }
	
	            function apply(elemOffset, targetOffset) {
	
	                var newVal = position[align] + elemOffset + targetOffset - elOffset[dir] * 2;
	
	                if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
	                    position[align] = newVal;
	
	                    ['element', 'target'].forEach(function (el) {
	                        flipped[el][dir] = !elemOffset
	                            ? flipped[el][dir]
	                            : flipped[el][dir] === dirs[dir][1]
	                                ? dirs[dir][2]
	                                : dirs[dir][1];
	                    });
	
	                    return true;
	                }
	
	            }
	
	        });
	    }
	
	    offset(element, position);
	
	    return flipped;
	}
	
	function getDimensions(element) {
	
	    element = toNode(element);
	
	    var window = getWindow(element), top = window.pageYOffset, left = window.pageXOffset;
	
	    if (!element.ownerDocument) {
	        return {
	            top: top,
	            left: left,
	            height: window.innerHeight,
	            width: window.innerWidth,
	            bottom: top + window.innerHeight,
	            right: left + window.innerWidth,
	        }
	    }
	
	    var display = false;
	    if (!element.offsetHeight) {
	        display = element.style.display;
	        element.style.display = 'block';
	    }
	
	    var rect = element.getBoundingClientRect();
	
	    if (display !== false) {
	        element.style.display = display;
	    }
	
	    return {
	        height: rect.height,
	        width: rect.width,
	        top: rect.top + top,
	        left: rect.left + left,
	        bottom: rect.bottom + top,
	        right: rect.right + left,
	    }
	}
	
	function offset(element, ref) {
	    var left = ref.left;
	    var top = ref.top;
	
	    $__default(element).offset({left: left - docEl$1.clientLeft, top: top - docEl$1.clientTop});
	}
	
	function offsetTop(element) {
	    element = toNode(element);
	    return element.getBoundingClientRect().top + getWindow(element).pageYOffset;
	}
	
	function getWindow(element) {
	    return element && element.ownerDocument ? element.ownerDocument.defaultView : window;
	}
	
	function moveTo(position, attach, dim, factor) {
	    $.each(dirs, function (dir, ref) {
	        var prop = ref[0];
	        var align = ref[1];
	        var alignFlip = ref[2];
	
	        if (attach[dir] === alignFlip) {
	            position[align] += dim[prop] * factor;
	        } else if (attach[dir] === 'center') {
	            position[align] += dim[prop] * factor / 2;
	        }
	    });
	}
	
	function getPos(pos) {
	
	    var x = /left|center|right/, y = /top|center|bottom/;
	
	    pos = (pos || '').split(' ');
	
	    if (pos.length === 1) {
	        pos = x.test(pos[0])
	            ? pos.concat(['center'])
	            : y.test(pos[0])
	                ? ['center'].concat(pos)
	                : ['center', 'center'];
	    }
	
	    return {
	        x: x.test(pos[0]) ? pos[0] : 'center',
	        y: y.test(pos[1]) ? pos[1] : 'center'
	    };
	}
	
	function getOffsets(offsets, width, height) {
	
	    offsets = (offsets || '').split(' ');
	
	    return {
	        x: offsets[0] ? parseFloat(offsets[0]) * (offsets[0][offsets[0].length - 1] === '%' ? width / 100 : 1) : 0,
	        y: offsets[1] ? parseFloat(offsets[1]) * (offsets[1][offsets[1].length - 1] === '%' ? height / 100 : 1) : 0
	    };
	}
	
	function flipPosition(pos) {
	    switch (pos) {
	        case 'left':
	            return 'right';
	        case 'right':
	            return 'left';
	        case 'top':
	            return 'bottom';
	        case 'bottom':
	            return 'top';
	        default:
	            return pos;
	    }
	}
	
	/*
	    Based on:
	    Copyright (c) 2010-2016 Thomas Fuchs
	    http://zeptojs.com/
	*/
	
	var touch = {};
	var clickTimeout;
	var swipeTimeout;
	var tapTimeout;
	var clicked;
	
	function swipeDirection(ref) {
	    var x1 = ref.x1;
	    var x2 = ref.x2;
	    var y1 = ref.y1;
	    var y2 = ref.y2;
	
	    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
	}
	
	function cancelAll() {
	    clickTimeout && clearTimeout(clickTimeout);
	    swipeTimeout && clearTimeout(swipeTimeout);
	    tapTimeout && clearTimeout(tapTimeout);
	    clickTimeout = swipeTimeout = tapTimeout = null;
	    touch = {};
	}
	
	ready(function () {
	
	    on(document, 'click', function () { return clicked = true; }, true);
	
	    on(document, pointerDown, function (e) {
	
	        var ref = e.touches ? e.touches[0] : e;
	        var target = ref.target;
	        var pageX = ref.pageX;
	        var pageY = ref.pageY;
	        var now = Date.now();
	
	        touch.el = 'tagName' in target ? target : target.parentNode;
	
	        clickTimeout && clearTimeout(clickTimeout);
	
	        touch.x1 = pageX;
	        touch.y1 = pageY;
	
	        if (touch.last && now - touch.last <= 250) {
	            touch = {};
	        }
	
	        touch.last = now;
	
	        clicked = e.button > 0;
	
	    });
	
	    on(document, pointerMove, function (e) {
	
	        var ref = e.touches ? e.touches[0] : e;
	        var pageX = ref.pageX;
	        var pageY = ref.pageY;
	
	        touch.x2 = pageX;
	        touch.y2 = pageY;
	    });
	
	    on(document, pointerUp, function (ref) {
	        var target = ref.target;
	
	
	        // swipe
	        if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) {
	
	            swipeTimeout = setTimeout(function () {
	                if (touch.el) {
	                    trigger(touch.el, 'swipe');
	                    trigger(touch.el, ("swipe" + (swipeDirection(touch))));
	                }
	                touch = {};
	            });
	
	        // normal tap
	        } else if ('last' in touch) {
	
	            tapTimeout = setTimeout(function () { return touch.el && trigger(touch.el, 'tap'); });
	
	            // trigger single click after 350ms of inactivity
	            if (touch.el && isWithin(target, touch.el)) {
	                clickTimeout = setTimeout(function () {
	                    clickTimeout = null;
	                    if (touch.el && !clicked) {
	                        trigger(touch.el, 'click');
	                    }
	                    touch = {};
	                }, 350);
	            }
	
	        } else {
	            touch = {};
	        }
	    });
	
	    on(document, 'touchcancel', cancelAll);
	    on(window, 'scroll', cancelAll);
	});
	
	var touching = false;
	on(document, 'touchstart', function () { return touching = true; }, true);
	on(document, 'click', function () {touching = false;});
	on(document, 'touchcancel', function () { return touching = false; }, true);
	
	function isTouch(e) {
	    return touching || (e.originalEvent || e).pointerType === 'touch';
	}
	
	
	
	var util = Object.freeze({
		win: win,
		doc: doc,
		docElement: docElement,
		isRtl: isRtl,
		isReady: isReady,
		ready: ready,
		on: on,
		off: off,
		one: one,
		trigger: trigger,
		$trigger: $trigger,
		transition: transition,
		Transition: Transition,
		animate: animate,
		Animation: Animation,
		isJQuery: isJQuery,
		isWithin: isWithin,
		attrFilter: attrFilter,
		removeClass: removeClass,
		createEvent: createEvent,
		isInView: isInView,
		scrolledOver: scrolledOver,
		docHeight: docHeight,
		getIndex: getIndex,
		isVoidElement: isVoidElement,
		Dimensions: Dimensions,
		query: query,
		preventClick: preventClick,
		getData: getData,
		Observer: Observer,
		requestAnimationFrame: requestAnimationFrame,
		hasPromise: hasPromise,
		hasTouch: hasTouch,
		pointerDown: pointerDown,
		pointerMove: pointerMove,
		pointerUp: pointerUp,
		pointerEnter: pointerEnter,
		pointerLeave: pointerLeave,
		transitionend: transitionend,
		animationstart: animationstart,
		animationend: animationend,
		getStyle: getStyle,
		getCssVar: getCssVar,
		getImage: getImage,
		fastdom: fastdom,
		$: $__default,
		bind: bind,
		hasOwn: hasOwn,
		promise: promise,
		classify: classify,
		hyphenate: hyphenate,
		camelize: camelize,
		isArray: isArray,
		isFunction: isFunction,
		isObject: isObject,
		isPlainObject: isPlainObject,
		isBoolean: isBoolean,
		isString: isString,
		isNumber: isNumber,
		isUndefined: isUndefined,
		isContextSelector: isContextSelector,
		getContextSelectors: getContextSelectors,
		toJQuery: toJQuery,
		toNode: toNode,
		toBoolean: toBoolean,
		toNumber: toNumber,
		toList: toList,
		toMedia: toMedia,
		coerce: coerce,
		toMs: toMs,
		swap: swap,
		assign: assign,
		clamp: clamp,
		noop: noop,
		ajax: $.ajax,
		each: $.each,
		Event: $.Event,
		isNumeric: $.isNumeric,
		MouseTracker: MouseTracker,
		mergeOptions: mergeOptions,
		Player: Player,
		position: position,
		getDimensions: getDimensions,
		offset: offset,
		offsetTop: offsetTop,
		flipPosition: flipPosition,
		isTouch: isTouch
	});
	
	var boot = function (UIkit) {
	
	    var doc = document.documentElement;
	    var connect = UIkit.connect;
	    var disconnect = UIkit.disconnect;
	
	    if (Observer) {
	
	        if (document.body) {
	
	            init();
	
	        } else {
	
	            (new Observer(function () {
	
	                if (document.body) {
	                    this.disconnect();
	                    init();
	                }
	
	            })).observe(doc, {childList: true, subtree: true});
	
	        }
	
	    } else {
	
	        ready(function () {
	            apply(document.body, connect);
	            on(doc, 'DOMNodeInserted', function (e) { return apply(e.target, connect); });
	            on(doc, 'DOMNodeRemoved', function (e) { return apply(e.target, disconnect); });
	        });
	
	    }
	
	    function init() {
	
	        apply(document.body, connect);
	
	        fastdom.flush();
	
	        (new Observer(function (mutations) { return mutations.forEach(function (ref) {
	                var addedNodes = ref.addedNodes;
	                var removedNodes = ref.removedNodes;
	                var target = ref.target;
	
	
	                for (var i = 0; i < addedNodes.length; i++) {
	                    apply(addedNodes[i], connect);
	                }
	
	                for (i = 0; i < removedNodes.length; i++) {
	                    apply(removedNodes[i], disconnect);
	                }
	
	                UIkit.update('update', target, true);
	
	            }); }
	        )).observe(doc, {childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['href']});
	
	        UIkit._initialized = true;
	    }
	
	    function apply(node, fn) {
	
	        if (node.nodeType !== Node.ELEMENT_NODE || node.hasAttribute('uk-no-boot')) {
	            return;
	        }
	
	        fn(node);
	        node = node.firstChild;
	        while (node) {
	            var next = node.nextSibling;
	            apply(node, fn);
	            node = next;
	        }
	    }
	
	};
	
	var globalAPI = function (UIkit) {
	
	    var DATA = UIkit.data;
	
	    UIkit.use = function (plugin) {
	
	        if (plugin.installed) {
	            return;
	        }
	
	        plugin.call(null, this);
	        plugin.installed = true;
	
	        return this;
	    };
	
	    UIkit.mixin = function (mixin, component) {
	        component = (isString(component) ? UIkit.components[component] : component) || this;
	        mixin = mergeOptions({}, mixin);
	        mixin.mixins = component.options.mixins;
	        delete component.options.mixins;
	        component.options = mergeOptions(mixin, component.options);
	    };
	
	    UIkit.extend = function (options) {
	
	        options = options || {};
	
	        var Super = this, name = options.name || Super.options.name;
	        var Sub = createClass(name || 'UIkitComponent');
	
	        Sub.prototype = Object.create(Super.prototype);
	        Sub.prototype.constructor = Sub;
	        Sub.options = mergeOptions(Super.options, options);
	
	        Sub['super'] = Super;
	        Sub.extend = Super.extend;
	
	        return Sub;
	    };
	
	    UIkit.update = function (e, element, parents) {
	        if ( parents === void 0 ) parents = false;
	
	
	        e = createEvent(e || 'update');
	
	        if (!element) {
	
	            update(UIkit.instances, e);
	            return;
	
	        }
	
	        element = toNode(element);
	
	        if (parents) {
	
	            do {
	
	                update(element[DATA], e);
	                element = element.parentNode;
	
	            } while (element)
	
	        } else {
	
	            apply(element, function (element) { return update(element[DATA], e); });
	
	        }
	
	    };
	
	    var container;
	    Object.defineProperty(UIkit, 'container', {
	
	        get: function get() {
	            return container || document.body;
	        },
	
	        set: function set(element) {
	            container = element;
	        }
	
	    });
	
	    function createClass(name) {
	        return new Function(("return function " + (classify(name)) + " (options) { this._init(options); }"))();
	    }
	
	    function apply(node, fn) {
	
	        if (node.nodeType !== Node.ELEMENT_NODE) {
	            return;
	        }
	
	        fn(node);
	        node = node.firstChild;
	        while (node) {
	            apply(node, fn);
	            node = node.nextSibling;
	        }
	    }
	
	    function update(data, e) {
	
	        if (!data) {
	            return;
	        }
	
	        for (var name in data) {
	            if (data[name]._isReady) {
	                data[name]._callUpdate(e);
	            }
	        }
	
	    }
	
	};
	
	var hooksAPI = function (UIkit) {
	
	    UIkit.prototype._callHook = function (hook) {
	        var this$1 = this;
	
	
	        var handlers = this.$options[hook];
	
	        if (handlers) {
	            handlers.forEach(function (handler) { return handler.call(this$1); });
	        }
	    };
	
	    UIkit.prototype._callReady = function () {
	
	        if (this._isReady) {
	            return;
	        }
	
	        this._isReady = true;
	        this._callHook('ready');
	        this._callUpdate();
	    };
	
	    UIkit.prototype._callConnected = function () {
	        var this$1 = this;
	
	
	        if (this._connected) {
	            return;
	        }
	
	        if (!~UIkit.elements.indexOf(this.$options.el)) {
	            UIkit.elements.push(this.$options.el);
	        }
	
	        UIkit.instances[this._uid] = this;
	
	        this._initEvents();
	
	        this._callHook('connected');
	        this._connected = true;
	
	        this._initObserver();
	
	        if (!this._isReady) {
	            ready(function () { return this$1._callReady(); });
	        }
	
	        this._callUpdate();
	    };
	
	    UIkit.prototype._callDisconnected = function () {
	
	        if (!this._connected) {
	            return;
	        }
	
	        if (this._observer) {
	            this._observer.disconnect();
	            this._observer = null;
	        }
	
	        var index = UIkit.elements.indexOf(this.$options.el);
	
	        if (~index) {
	            UIkit.elements.splice(index, 1);
	        }
	
	        delete UIkit.instances[this._uid];
	
	        this._initEvents(true);
	        this._callHook('disconnected');
	
	        this._connected = false;
	
	    };
	
	    UIkit.prototype._callUpdate = function (e) {
	        var this$1 = this;
	
	
	        e = createEvent(e || 'update');
	
	        if (e.type === 'update') {
	            this._computeds = {};
	        }
	
	        var updates = this.$options.update;
	
	        if (!updates) {
	            return;
	        }
	
	        updates.forEach(function (update, i) {
	
	            if (e.type !== 'update' && (!update.events || !~update.events.indexOf(e.type))) {
	                return;
	            }
	
	            if (update.read && !~fastdom.reads.indexOf(this$1._frames.reads[i])) {
	                this$1._frames.reads[i] = fastdom.measure(function () {
	                    update.read.call(this$1, e);
	                    delete this$1._frames.reads[i];
	                });
	            }
	
	            if (update.write && !~fastdom.writes.indexOf(this$1._frames.writes[i])) {
	                this$1._frames.writes[i] = fastdom.mutate(function () {
	                    update.write.call(this$1, e);
	                    delete this$1._frames.writes[i];
	                });
	            }
	
	        });
	
	    };
	
	};
	
	var stateAPI = function (UIkit) {
	
	    var uid = 0;
	
	    UIkit.prototype.props = {};
	
	    UIkit.prototype._init = function (options) {
	
	        options = options || {};
	        options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	        this.$el = null;
	        this.$name = UIkit.prefix + hyphenate(this.$options.name);
	        this.$props = {};
	
	        this._frames = {reads: {}, writes: {}};
	
	        this._uid = uid++;
	        this._initData();
	        this._initMethods();
	        this._initComputeds();
	        this._callHook('created');
	
	        if (options.el) {
	            this.$mount(options.el);
	        }
	    };
	
	    UIkit.prototype._initData = function () {
	        var this$1 = this;
	
	
	        var ref = this.$options;
	        var defaults = ref.defaults;
	        var data = ref.data; if ( data === void 0 ) data = {};
	        var args = ref.args; if ( args === void 0 ) args = [];
	        var props = ref.props; if ( props === void 0 ) props = {};
	        var el = ref.el;
	
	        if (args.length && isArray(data)) {
	            data = data.slice(0, args.length).reduce(function (data, value, index) {
	                if (isPlainObject(value)) {
	                    assign(data, value);
	                } else {
	                    data[args[index]] = value;
	                }
	                return data;
	            }, {});
	        }
	
	        for (var key in defaults) {
	            this$1.$props[key] = this$1[key] = hasOwn(data, key) && !isUndefined(data[key])
	                ? coerce(props[key], data[key], el)
	                : isArray(defaults[key])
	                    ? defaults[key].concat()
	                    : defaults[key];
	        }
	    };
	
	    UIkit.prototype._initMethods = function () {
	        var this$1 = this;
	
	
	        var methods = this.$options.methods;
	
	        if (methods) {
	            for (var key in methods) {
	                this$1[key] = bind(methods[key], this$1);
	            }
	        }
	    };
	
	    UIkit.prototype._initComputeds = function () {
	        var this$1 = this;
	
	
	        var computed = this.$options.computed;
	
	        this._computeds = {};
	
	        if (computed) {
	            for (var key in computed) {
	                registerComputed(this$1, key, computed[key]);
	            }
	        }
	    };
	
	    UIkit.prototype._initProps = function (props) {
	        var this$1 = this;
	
	
	        this._computeds = {};
	        assign(this.$props, props || getProps(this.$options, this.$name));
	
	        var exclude = [this.$options.computed, this.$options.methods];
	        for (var key in this$1.$props) {
	            if (notIn(exclude, key)) {
	                this$1[key] = this$1.$props[key];
	            }
	        }
	    };
	
	    UIkit.prototype._initEvents = function (unbind) {
	        var this$1 = this;
	
	
	        var events = this.$options.events;
	
	        if (events) {
	
	            events.forEach(function (event) {
	
	                if (!hasOwn(event, 'handler')) {
	                    for (var key in event) {
	                        registerEvent(this$1, unbind, event[key], key);
	                    }
	                } else {
	                    registerEvent(this$1, unbind, event);
	                }
	
	            });
	        }
	    };
	
	    UIkit.prototype._initObserver = function () {
	        var this$1 = this;
	
	
	        var ref = this.$options;
	        var attrs = ref.attrs;
	        var props = ref.props;
	        var el = ref.el;
	        if (this._observer || !props || !attrs || !Observer) {
	            return;
	        }
	
	        attrs = isArray(attrs) ? attrs : Object.keys(props).map(function (key) { return hyphenate(key); });
	
	        this._observer = new Observer(function () {
	
	            var data = getProps(this$1.$options, this$1.$name);
	            if (attrs.some(function (key) { return !equals(data[key], this$1.$props[key]); })) {
	                this$1.$reset(data);
	            }
	
	        });
	
	        this._observer.observe(el, {attributes: true, attributeFilter: attrs.concat([this.$name, ("data-" + (this.$name))])});
	    };
	
	    function getProps(opts, name) {
	
	        var data = {};
	        var args = opts.args; if ( args === void 0 ) args = [];
	        var props = opts.props; if ( props === void 0 ) props = {};
	        var el = opts.el;
	        var key, prop;
	
	        if (!props) {
	            return data;
	        }
	
	        for (key in props) {
	            prop = hyphenate(key);
	            if (el.hasAttribute(prop)) {
	
	                var value = coerce(props[key], el.getAttribute(prop), el);
	
	                if (prop === 'target' && (!value || value.lastIndexOf('_', 0) === 0)) {
	                    continue;
	                }
	
	                data[key] = value;
	            }
	        }
	
	        var options = parseOptions(getData(el, name), args);
	
	        for (key in options) {
	            prop = camelize(key);
	            if (props[prop] !== undefined) {
	                data[prop] = coerce(props[prop], options[key], el);
	            }
	        }
	
	        return data;
	    }
	
	    function parseOptions(options, args) {
	        if ( args === void 0 ) args = [];
	
	
	        try {
	
	            return !options
	                ? {}
	                : options[0] === '{'
	                    ? JSON.parse(options)
	                    : args.length && !~options.indexOf(':')
	                        ? (( obj = {}, obj[args[0]] = options, obj ))
	                        : options.split(';').reduce(function (options, option) {
	                            var ref = option.split(/:(.+)/);
	                            var key = ref[0];
	                            var value = ref[1];
	                            if (key && value) {
	                                options[key.trim()] = value.trim();
	                            }
	                            return options;
	                        }, {});
	            var obj;
	
	        } catch (e) {
	            return {};
	        }
	
	    }
	
	    function registerComputed(component, key, cb) {
	        Object.defineProperty(component, key, {
	
	            enumerable: true,
	
	            get: function get() {
	
	                if (!hasOwn(component._computeds, key)) {
	                    component._computeds[key] = cb.call(component);
	                }
	
	                return component._computeds[key];
	            },
	
	            set: function set(value) {
	                component._computeds[key] = value;
	            }
	
	        });
	    }
	
	    function registerEvent(component, unbind, event, key) {
	
	        if (!isPlainObject(event)) {
	            event = ({name: key, handler: event});
	        }
	
	        var name = event.name;
	        var el = event.el;
	        var delegate = event.delegate;
	        var self = event.self;
	        var filter = event.filter;
	        var handler = event.handler;
	        var namespace = "." + (component.$options.name) + "." + (component._uid);
	
	        el = el && el.call(component) || component.$el;
	
	        name = name.split(' ').map(function (name) { return (name + "." + namespace); }).join(' ');
	
	        if (unbind) {
	
	            el.off(name);
	
	        } else {
	
	            if (filter && !filter.call(component)) {
	                return;
	            }
	
	            handler = isString(handler) ? component[handler] : bind(handler, component);
	
	            if (self) {
	                handler = selfFilter(handler, component);
	            }
	
	            if (delegate) {
	                el.on(name, isString(delegate) ? delegate : delegate.call(component), handler);
	            } else {
	                el.on(name, handler);
	            }
	        }
	
	    }
	
	    function selfFilter(handler, context) {
	        return function selfHandler(e) {
	            if (e.target === e.currentTarget) {
	                return handler.call(context, e)
	            }
	        }
	    }
	
	    function notIn(options, key) {
	        return options.every(function (arr) { return !arr || !hasOwn(arr, key); });
	    }
	
	    function equals(a, b) {
	        return isUndefined(a) || a === b || isJQuery(a) && isJQuery(b) && a.is(b);
	    }
	
	};
	
	var instanceAPI = function (UIkit) {
	
	    var DATA = UIkit.data;
	
	    UIkit.prototype.$mount = function (el) {
	
	        var name = this.$options.name;
	
	        if (!el[DATA]) {
	            el[DATA] = {};
	        }
	
	        if (el[DATA][name]) {
	            return;
	        }
	
	        el[DATA][name] = this;
	
	        this.$options.el = this.$options.el || el;
	        this.$el = $__default(el);
	
	        this._initProps();
	
	        this._callHook('init');
	
	        if (document.documentElement.contains(el)) {
	            this._callConnected();
	        }
	    };
	
	    UIkit.prototype.$emit = function (e) {
	        this._callUpdate(e);
	    };
	
	    UIkit.prototype.$update = function (e, parents) {
	        UIkit.update(e, this.$options.el, parents);
	    };
	
	    UIkit.prototype.$reset = function (data) {
	        this._callDisconnected();
	        this._initProps(data);
	        this._callConnected();
	    };
	
	    UIkit.prototype.$destroy = function (remove) {
	        if ( remove === void 0 ) remove = false;
	
	
	        var ref = this.$options;
	        var el = ref.el;
	        var name = ref.name;
	
	        if (el) {
	            this._callDisconnected();
	        }
	
	        this._callHook('destroy');
	
	        if (!el || !el[DATA]) {
	            return;
	        }
	
	        delete el[DATA][name];
	
	        if (!Object.keys(el[DATA]).length) {
	            delete el[DATA];
	        }
	
	        if (remove) {
	            this.$el.remove();
	        }
	    };
	
	};
	
	var componentAPI = function (UIkit) {
	
	    var DATA = UIkit.data;
	
	    UIkit.components = {};
	
	    UIkit.component = function (id, options) {
	
	        var name = camelize(id);
	
	        if (isPlainObject(options)) {
	            options.name = name;
	            options = UIkit.extend(options);
	        } else if (isUndefined(options)) {
	            return UIkit.components[name]
	        } else {
	            options.options.name = name;
	        }
	
	        UIkit.components[name] = options;
	
	        UIkit[name] = function (element, data) {
	            var i = arguments.length, argsArray = Array(i);
	            while ( i-- ) argsArray[i] = arguments[i];
	
	
	            if (isPlainObject(element)) {
	                return new UIkit.components[name]({data: element});
	            }
	
	            if (UIkit.components[name].options.functional) {
	                return new UIkit.components[name]({data: [].concat( argsArray )});
	            }
	
	            return element && element.nodeType ? init(element) : $__default(element).toArray().map(init)[0];
	
	            function init(element) {
	                return UIkit.getComponent(element, name) || new UIkit.components[name]({el: element, data: data || {}});
	            }
	
	        };
	
	        if (UIkit._initialized && !options.options.functional) {
	            fastdom.measure(function () { return UIkit[name](("[uk-" + id + "],[data-uk-" + id + "]")); });
	        }
	
	        return UIkit.components[name];
	    };
	
	    UIkit.getComponents = function (element) { return element && (element = isJQuery(element) ? element[0] : element) && element[DATA] || {}; };
	    UIkit.getComponent = function (element, name) { return UIkit.getComponents(element)[name]; };
	
	    UIkit.connect = function (node) {
	
	        var name;
	
	        if (node[DATA]) {
	            for (name in node[DATA]) {
	                node[DATA][name]._callConnected();
	            }
	        }
	
	        for (var i = 0; i < node.attributes.length; i++) {
	
	            name = node.attributes[i].name;
	
	            if (name.lastIndexOf('uk-', 0) === 0 || name.lastIndexOf('data-uk-', 0) === 0) {
	
	                name = camelize(name.replace('data-uk-', '').replace('uk-', ''));
	
	                if (UIkit[name]) {
	                    UIkit[name](node);
	                }
	            }
	        }
	
	    };
	
	    UIkit.disconnect = function (node) {
	        for (var name in node[DATA]) {
	            node[DATA][name]._callDisconnected();
	        }
	    };
	
	};
	
	var supportsMultiple;
	var supportsForce;
	
	var classAPI = function (UIkit) {
	
	    UIkit.prototype.$addClass = function () {
	        var args = [], len = arguments.length;
	        while ( len-- ) args[ len ] = arguments[ len ];
	
	        apply(this.$options.el, args, 'add');
	    };
	
	    UIkit.prototype.$removeClass = function () {
	        var args = [], len = arguments.length;
	        while ( len-- ) args[ len ] = arguments[ len ];
	
	        apply(this.$options.el, args, 'remove');
	    };
	
	    UIkit.prototype.$hasClass = function () {
	        var args = [], len = arguments.length;
	        while ( len-- ) args[ len ] = arguments[ len ];
	
	        return (args = getArgs(args, this.$options.el)) && args[0].contains(args[1]);
	    };
	
	    UIkit.prototype.$toggleClass = function () {
	        var args = [], len = arguments.length;
	        while ( len-- ) args[ len ] = arguments[ len ];
	
	        args = getArgs(args, this.$options.el);
	
	        var force = args && !isString(args[args.length - 1]) ? args.pop() : undefined;
	
	        for (var i = 1; i < (args && args.length); i++) {
	            args[0] && supportsForce
	                ? args[0].toggle(args[i], force)
	                : (args[0][(!isUndefined(force) ? force : !args[0].contains(args[i])) ? 'add' : 'remove'](args[i]));
	        }
	    };
	
	    function apply(el, args, fn) {
	        (args = getArgs(args, el)) && (supportsMultiple
	            ? args[0][fn].apply(args[0], args.slice(1))
	            : args.slice(1).forEach(function (cls) { return args[0][fn](cls); }));
	    }
	
	    function getArgs(args, el) {
	
	        isString(args[0]) && args.unshift(el);
	        args[0] = (toNode(args[0]) || {}).classList;
	
	        args.forEach(function (arg, i) { return i > 0 && isString(arg) && ~arg.indexOf(' ') && Array.prototype.splice.apply(args, [i, 1].concat(args[i].split(' '))); }
	        );
	
	        return args[0] && args[1] && args.length > 1 && args;
	    }
	
	};
	
	(function() {
	
	    var list = document.createElement('_').classList;
	    if (list) {
	        list.add('a', 'b');
	        list.toggle('c', false);
	        supportsMultiple = list.contains('b');
	        supportsForce = !list.contains('c');
	    }
	    list = null;
	
	})();
	
	var UIkit$2 = function (options) {
	    this._init(options);
	};
	
	UIkit$2.util = util;
	UIkit$2.data = '__uikit__';
	UIkit$2.prefix = 'uk-';
	UIkit$2.options = {};
	UIkit$2.instances = {};
	UIkit$2.elements = [];
	
	globalAPI(UIkit$2);
	hooksAPI(UIkit$2);
	stateAPI(UIkit$2);
	instanceAPI(UIkit$2);
	componentAPI(UIkit$2);
	classAPI(UIkit$2);
	
	var Class = {
	
	    init: function init() {
	        this.$addClass(this.$name);
	    }
	
	};
	
	var Togglable = {
	
	    props: {
	        cls: Boolean,
	        animation: 'list',
	        duration: Number,
	        origin: String,
	        transition: String,
	        queued: Boolean
	    },
	
	    defaults: {
	        cls: false,
	        animation: [false],
	        duration: 200,
	        origin: false,
	        transition: 'linear',
	        queued: false,
	
	        initProps: {
	            overflow: '',
	            height: '',
	            paddingTop: '',
	            paddingBottom: '',
	            marginTop: '',
	            marginBottom: ''
	        },
	
	        hideProps: {
	            overflow: 'hidden',
	            height: 0,
	            paddingTop: 0,
	            paddingBottom: 0,
	            marginTop: 0,
	            marginBottom: 0
	        }
	
	    },
	
	    computed: {
	
	        hasAnimation: function hasAnimation() {
	            return !!this.animation[0];
	        },
	
	        hasTransition: function hasTransition() {
	            return this.hasAnimation && this.animation[0] === true;
	        }
	
	    },
	
	    methods: {
	
	        toggleElement: function toggleElement(targets, show, animate) {
	            var this$1 = this;
	
	            return promise(function (resolve) {
	
	                targets = $__default(targets).toArray();
	
	                var all = function (targets) { return promise.all(targets.map(function (el) { return this$1._toggleElement(el, show, animate); })); },
	                    toggled = targets.filter(function (el) { return this$1.isToggled(el); }),
	                    untoggled = targets.filter(function (el) { return !~toggled.indexOf(el); }),
	                    p;
	
	                if (!this$1.queued || !isUndefined(animate) || !isUndefined(show) || !this$1.hasAnimation || targets.length < 2) {
	
	                    p = all(untoggled.concat(toggled));
	
	                } else {
	
	                    var body = document.body,
	                        scroll = body.scrollTop,
	                        el = toggled[0],
	                        inProgress = Animation.inProgress(el) && this$1.$hasClass(el, 'uk-animation-leave')
	                            || Transition.inProgress(el) && el.style.height === '0px';
	
	                    p = all(toggled);
	
	                    if (!inProgress) {
	                        p = p.then(function () {
	                            var p = all(untoggled);
	                            body.scrollTop = scroll;
	                            return p;
	                        });
	                    }
	
	                }
	
	                p.then(resolve, noop);
	
	            });
	        },
	
	        toggleNow: function toggleNow(targets, show) {
	            var this$1 = this;
	
	            return promise(function (resolve) { return promise.all($__default(targets).toArray().map(function (el) { return this$1._toggleElement(el, show, false); })).then(resolve, noop); });
	        },
	
	        isToggled: function isToggled(el) {
	            el = el && $__default(el) || this.$el;
	            return this.cls ? el.hasClass(this.cls.split(' ')[0]) : !el.attr('hidden');
	        },
	
	        updateAria: function updateAria(el) {
	            if (this.cls === false) {
	                el.attr('aria-hidden', !this.isToggled(el));
	            }
	        },
	
	        _toggleElement: function _toggleElement(el, show, animate) {
	            var this$1 = this;
	
	
	            el = $__default(el);
	
	            show = isBoolean(show)
	                ? show
	                : Animation.inProgress(el)
	                    ? this.$hasClass(el, 'uk-animation-leave')
	                    : Transition.inProgress(el)
	                        ? el[0].style.height === '0px'
	                        : !this.isToggled(el);
	
	            if ($trigger(el, ("before" + (show ? 'show' : 'hide')), [this]).result === false) {
	                return promise.reject();
	            }
	
	            var def = (animate === false || !this.hasAnimation
	                ? this._toggleImmediate
	                : this.hasTransition
	                    ? this._toggleHeight
	                    : this._toggleAnimation
	            )(el, show);
	
	            var e = $.Event(show ? 'show' : 'hide');
	            e.preventDefault(); // workaround for Prototype and MooTools: it keeps jQuery from calling show or hide on the Element itself
	            $trigger(el, e, [this]);
	
	            return def.then(function () {
	                $trigger(el, show ? 'shown' : 'hidden', [this$1]);
	                UIkit$2.update(null, el);
	            });
	        },
	
	        _toggle: function _toggle(el, toggled) {
	
	            el = $__default(el);
	
	            if (this.cls) {
	                el.toggleClass(this.cls, ~this.cls.indexOf(' ') ? undefined : toggled);
	            } else {
	                el.attr('hidden', !toggled);
	            }
	
	            el.find('[autofocus]:visible').focus();
	
	            this.updateAria(el);
	            UIkit$2.update(null, el);
	        },
	
	        _toggleImmediate: function _toggleImmediate(el, show) {
	            this._toggle(el, show);
	            return promise.resolve();
	        },
	
	        _toggleHeight: function _toggleHeight(el, show) {
	            var this$1 = this;
	
	
	            var children = el.children(),
	                inProgress = Transition.inProgress(el),
	                inner = children.length ? parseFloat(children.first().css('margin-top')) + parseFloat(children.last().css('margin-bottom')) : 0,
	                height = el[0].offsetHeight ? el.height() + (inProgress ? 0 : inner) : 0,
	                endHeight;
	
	            Transition.cancel(el);
	
	            if (!this.isToggled(el)) {
	                this._toggle(el, true);
	            }
	
	            el.height('');
	
	            // Update child components first
	            fastdom.flush();
	
	            endHeight = el.height() + (inProgress ? 0 : inner);
	            el.height(height);
	
	            return (show
	                ? Transition.start(el, assign({}, this.initProps, {overflow: 'hidden', height: endHeight}), Math.round(this.duration * (1 - height / endHeight)), this.transition)
	                : Transition.start(el, this.hideProps, Math.round(this.duration * (height / endHeight)), this.transition).then(function () { return this$1._toggle(el, false); })
	            ).then(function () { return el.css(this$1.initProps); });
	
	        },
	
	        _toggleAnimation: function _toggleAnimation(el, show) {
	            var this$1 = this;
	
	
	            if (Animation.inProgress(el)) {
	                return Animation.cancel(el).then(function () {
	
	                    if (Animation.inProgress(el)) {
	                        return promise.resolve().then(function () { return this$1._toggleAnimation(el, show); });
	                    }
	
	                    return this$1._toggleAnimation(el, show);
	                });
	            }
	
	            if (show) {
	                this._toggle(el, true);
	                return Animation.in(el, this.animation[0], this.duration, this.origin);
	            }
	
	            return Animation.out(el, this.animation[1] || this.animation[0], this.duration, this.origin).then(function () { return this$1._toggle(el, false); });
	        }
	
	    }
	
	};
	
	var active;
	
	var Modal = {
	
	    mixins: [Class, Togglable],
	
	    props: {
	        clsPanel: String,
	        selClose: String,
	        escClose: Boolean,
	        bgClose: Boolean,
	        stack: Boolean,
	        container: Boolean
	    },
	
	    defaults: {
	        cls: 'uk-open',
	        escClose: true,
	        bgClose: true,
	        overlay: true,
	        stack: false,
	        container: true
	    },
	
	    computed: {
	
	        body: function body() {
	            return $__default(document.body);
	        },
	
	        panel: function panel() {
	            return this.$el.find(("." + (this.clsPanel)));
	        },
	
	        container: function container() {
	            return toNode(this.$props.container === true && UIkit$2.container || this.$props.container && toJQuery(this.$props.container));
	        },
	
	        transitionElement: function transitionElement() {
	            return this.panel;
	        },
	
	        transitionDuration: function transitionDuration() {
	            return toMs(this.transitionElement.css('transition-duration'));
	        },
	
	        component: function component() {
	            return UIkit$2[this.$options.name];
	        }
	
	    },
	
	    events: [
	
	        {
	
	            name: 'click',
	
	            delegate: function delegate() {
	                return this.selClose;
	            },
	
	            handler: function handler(e) {
	                e.preventDefault();
	                this.hide();
	            }
	
	        },
	
	        {
	
	            name: 'toggle',
	
	            handler: function handler(e) {
	                e.preventDefault();
	                this.toggle();
	            }
	
	        },
	
	        {
	
	            name: 'show',
	
	            self: true,
	
	            handler: function handler() {
	
	                if (!docElement.hasClass(this.clsPage)) {
	                    this.scrollbarWidth = window.innerWidth - docElement[0].offsetWidth;
	                    this.body.css('overflow-y', this.scrollbarWidth && this.overlay ? 'scroll' : '');
	                }
	
	                docElement.addClass(this.clsPage);
	
	            }
	
	        },
	
	        {
	
	            name: 'hidden',
	
	            self: true,
	
	            handler: function handler() {
	                if (this.component.active === this) {
	                    docElement.removeClass(this.clsPage);
	                    this.body.css('overflow-y', '');
	                    this.component.active = null;
	                }
	            }
	
	        }
	
	    ],
	
	    methods: {
	
	        toggle: function toggle() {
	            return this.isToggled() ? this.hide() : this.show();
	        },
	
	        show: function show() {
	            var this$1 = this;
	
	
	            if (this.isToggled()) {
	                return;
	            }
	
	            if (this.container && !this.$el.parent().is(this.container)) {
	                this.container.appendChild(this.$el[0]);
	                return promise(function (resolve) { return requestAnimationFrame(function () { return resolve(this$1.show()); }
	                    ); }
	                )
	            }
	
	            var prev = active && active !== this && active;
	
	            active = this;
	            this.component.active = this;
	
	            if (prev) {
	                if (this.stack) {
	                    this.prev = prev;
	                } else {
	                    prev.hide().then(this.show);
	                    return;
	                }
	            } else {
	                requestAnimationFrame(function () { return register(this$1.$options.name); }); // TODO improve
	            }
	
	            return this.toggleNow(this.$el, true);
	        },
	
	        hide: function hide() {
	
	            if (!this.isToggled()) {
	                return;
	            }
	
	            active = active && active !== this && active || this.prev;
	
	            if (!active) {
	                deregister(this.$options.name);
	            }
	
	            return this.toggleNow(this.$el, false);
	        },
	
	        getActive: function getActive() {
	            return active;
	        },
	
	        _toggleImmediate: function _toggleImmediate(el, show) {
	            var this$1 = this;
	
	
	            requestAnimationFrame(function () { return this$1._toggle(el, show); });
	
	            return this.transitionDuration ? promise(function (resolve, reject) {
	
	                if (this$1._transition) {
	                    this$1.transitionElement.off(transitionend, this$1._transition.handler);
	                    this$1._transition.reject();
	                }
	
	                this$1._transition = {
	                    reject: reject,
	                    handler: function () {
	                        resolve();
	                        this$1._transition = null;
	                    }
	                };
	
	                this$1.transitionElement.one(transitionend, this$1._transition.handler);
	
	            }) : promise.resolve();
	
	        },
	    }
	
	};
	
	function register(name) {
	    doc.on(( obj = {}, obj[("click." + name)] = function (e) {
	            if (active && active.bgClose && !e.isDefaultPrevented() && !isWithin(e.target, active.panel)) {
	                active.hide();
	            }
	        }, obj[("keydown." + name)] = function (e) {
	            if (e.keyCode === 27 && active && active.escClose) {
	                e.preventDefault();
	                active.hide();
	            }
	        }, obj ));
	    var obj;
	}
	
	function deregister(name) {
	    doc.off(("click." + name)).off(("keydown." + name));
	}
	
	var Position = {
	
	    props: {
	        pos: String,
	        offset: null,
	        flip: Boolean,
	        clsPos: String
	    },
	
	    defaults: {
	        pos: !isRtl ? 'bottom-left' : 'bottom-right',
	        flip: true,
	        offset: false,
	        clsPos: ''
	    },
	
	    computed: {
	
	        pos: function pos() {
	            return (this.$props.pos + (!~this.$props.pos.indexOf('-') ? '-center' : '')).split('-');
	        },
	
	        dir: function dir() {
	            return this.pos[0];
	        },
	
	        align: function align() {
	            return this.pos[1];
	        }
	
	    },
	
	    methods: {
	
	        positionAt: function positionAt(element, target, boundary) {
	
	            removeClass(element, ((this.clsPos) + "-(top|bottom|left|right)(-[a-z]+)?")).css({top: '', left: ''});
	
	            var offset = toNumber(this.offset) || 0,
	                axis = this.getAxis(),
	                flipped = position(
	                    element,
	                    target,
	                    axis === 'x' ? ((flipPosition(this.dir)) + " " + (this.align)) : ((this.align) + " " + (flipPosition(this.dir))),
	                    axis === 'x' ? ((this.dir) + " " + (this.align)) : ((this.align) + " " + (this.dir)),
	                    axis === 'x' ? ("" + (this.dir === 'left' ? -1 * offset : offset)) : (" " + (this.dir === 'top' ? -1 * offset : offset)),
	                    null,
	                    this.flip,
	                    boundary
	                );
	
	            this.dir = axis === 'x' ? flipped.target.x : flipped.target.y;
	            this.align = axis === 'x' ? flipped.target.y : flipped.target.x;
	
	            element.toggleClass(((this.clsPos) + "-" + (this.dir) + "-" + (this.align)), this.offset === false);
	
	        },
	
	        getAxis: function getAxis() {
	            return this.dir === 'top' || this.dir === 'bottom' ? 'y' : 'x';
	        }
	
	    }
	
	};
	
	var mixin = function (UIkit) {
	
	    UIkit.mixin.class = Class;
	    UIkit.mixin.modal = Modal;
	    UIkit.mixin.position = Position;
	    UIkit.mixin.togglable = Togglable;
	
	};
	
	var Accordion = function (UIkit) {
	
	    UIkit.component('accordion', {
	
	        mixins: [Class, Togglable],
	
	        props: {
	            targets: String,
	            active: null,
	            collapsible: Boolean,
	            multiple: Boolean,
	            toggle: String,
	            content: String,
	            transition: String
	        },
	
	        defaults: {
	            targets: '> *',
	            active: false,
	            animation: [true],
	            collapsible: true,
	            multiple: false,
	            clsOpen: 'uk-open',
	            toggle: '> .uk-accordion-title',
	            content: '> .uk-accordion-content',
	            transition: 'ease'
	        },
	
	        computed: {
	
	            items: function items() {
	                var this$1 = this;
	
	                var items = $__default(this.targets, this.$el);
	                this._changed = !this._items
	                    || items.length !== this._items.length
	                    || items.toArray().some(function (el, i) { return el !== this$1._items.get(i); });
	                return this._items = items;
	            }
	
	        },
	
	        events: [
	
	            {
	
	                name: 'click',
	
	                delegate: function delegate() {
	                    return ((this.targets) + " " + (this.$props.toggle));
	                },
	
	                handler: function handler(e) {
	                    e.preventDefault();
	                    this.toggle(this.items.find(this.$props.toggle).index(e.currentTarget));
	                }
	
	            }
	
	        ],
	
	        update: function update() {
	            var this$1 = this;
	
	
	            if (!this.items.length || !this._changed) {
	                return;
	            }
	
	            this.items.each(function (i, el) {
	                el = $__default(el);
	                this$1.toggleNow(el.find(this$1.content), el.hasClass(this$1.clsOpen));
	            });
	
	            var active = this.active !== false && toJQuery(this.items.eq(Number(this.active))) || !this.collapsible && toJQuery(this.items.eq(0));
	            if (active && !active.hasClass(this.clsOpen)) {
	                this.toggle(active, false);
	            }
	
	        },
	
	        methods: {
	
	            toggle: function toggle(item, animate) {
	                var this$1 = this;
	
	
	                var index = getIndex(item, this.items),
	                    active = this.items.filter(("." + (this.clsOpen)));
	
	                item = this.items.eq(index);
	
	                item.add(!this.multiple && active).each(function (i, el) {
	
	                    el = $__default(el);
	
	                    var isItem = el.is(item), state = isItem && !el.hasClass(this$1.clsOpen);
	
	                    if (!state && isItem && !this$1.collapsible && active.length < 2) {
	                        return;
	                    }
	
	                    el.toggleClass(this$1.clsOpen, state);
	
	                    var content = el[0]._wrapper ? el[0]._wrapper.children().first() : el.find(this$1.content);
	
	                    if (!el[0]._wrapper) {
	                        el[0]._wrapper = content.wrap('<div>').parent().attr('hidden', state);
	                    }
	
	                    this$1._toggleImmediate(content, true);
	                    this$1.toggleElement(el[0]._wrapper, state, animate).then(function () {
	                        if (el.hasClass(this$1.clsOpen) === state) {
	
	                            if (!state) {
	                                this$1._toggleImmediate(content, false);
	                            }
	
	                            el[0]._wrapper = null;
	                            content.unwrap();
	                        }
	                    });
	
	                });
	            }
	
	        }
	
	    });
	
	};
	
	var Alert = function (UIkit) {
	
	    UIkit.component('alert', {
	
	        attrs: true,
	
	        mixins: [Class, Togglable],
	
	        args: 'animation',
	
	        props: {
	            close: String
	        },
	
	        defaults: {
	            animation: [true],
	            selClose: '.uk-alert-close',
	            duration: 150,
	            hideProps: assign({opacity: 0}, Togglable.defaults.hideProps)
	        },
	
	        events: [
	
	            {
	
	                name: 'click',
	
	                delegate: function delegate() {
	                    return this.selClose;
	                },
	
	                handler: function handler(e) {
	                    e.preventDefault();
	                    this.close();
	                }
	
	            }
	
	        ],
	
	        methods: {
	
	            close: function close() {
	                var this$1 = this;
	
	                this.toggleElement(this.$el).then(function () { return this$1.$destroy(true); });
	            }
	
	        }
	
	    });
	
	};
	
	var Cover = function (UIkit) {
	
	    UIkit.component('cover', {
	
	        mixins: [Class],
	
	        props: {
	            width: Number,
	            height: Number
	        },
	
	        computed: {
	
	            el: function el() {
	                return this.$el[0];
	            },
	
	            parent: function parent() {
	                return this.el.parentNode;
	            }
	
	        },
	
	        ready: function ready() {
	
	            if (this.$el.is('iframe')) {
	                this.$el.css('pointerEvents', 'none');
	            }
	
	            var player = new Player(this.$el);
	
	            if (player.isVideo()) {
	                player.mute();
	            }
	
	        },
	
	        update: {
	
	            write: function write() {
	
	                if (this.el.offsetHeight === 0) {
	                    return;
	                }
	
	                this.$el
	                    .css({width: '', height: ''})
	                    .css(Dimensions.cover(
	                        {width: this.width || this.el.clientWidth, height: this.height || this.el.clientHeight},
	                        {width: this.parent.offsetWidth, height: this.parent.offsetHeight}
	                    ));
	
	            },
	
	            events: ['load', 'resize']
	
	        },
	
	        events: {
	
	            loadedmetadata: function loadedmetadata() {
	                this.$emit();
	            }
	
	        }
	
	    });
	
	};
	
	var Drop = function (UIkit) {
	
	    var active;
	
	    UIkit.component('drop', {
	
	        mixins: [Position, Togglable],
	
	        args: 'pos',
	
	        props: {
	            mode: 'list',
	            toggle: Boolean,
	            boundary: 'jQuery',
	            boundaryAlign: Boolean,
	            delayShow: Number,
	            delayHide: Number,
	            clsDrop: String
	        },
	
	        defaults: {
	            mode: ['click', 'hover'],
	            toggle: '- :first',
	            boundary: window,
	            boundaryAlign: false,
	            delayShow: 0,
	            delayHide: 800,
	            clsDrop: false,
	            hoverIdle: 200,
	            animation: ['uk-animation-fade'],
	            cls: 'uk-open'
	        },
	
	        init: function init() {
	            this.tracker = new MouseTracker();
	            this.clsDrop = this.clsDrop || ("uk-" + (this.$options.name));
	            this.clsPos = this.clsDrop;
	
	            this.$addClass(this.clsDrop);
	        },
	
	        ready: function ready() {
	
	            this.updateAria(this.$el);
	
	            if (this.toggle) {
	                this.toggle = UIkit.toggle(query(this.toggle, this.$el), {target: this.$el, mode: this.mode});
	            }
	
	        },
	
	        events: [
	
	            {
	
	                name: 'click',
	
	                delegate: function delegate() {
	                    return ("." + (this.clsDrop) + "-close");
	                },
	
	                handler: function handler(e) {
	                    e.preventDefault();
	                    this.hide(false);
	                }
	
	            },
	
	            {
	
	                name: 'click',
	
	                delegate: function delegate() {
	                    return 'a[href^="#"]';
	                },
	
	                handler: function handler(e) {
	
	                    if (e.isDefaultPrevented()) {
	                        return;
	                    }
	
	                    var id = e.target.hash;
	
	                    if (!id) {
	                        e.preventDefault();
	                    }
	
	                    if (!id || !isWithin(id, this.$el)) {
	                        this.hide(false);
	                    }
	                }
	
	            },
	
	            {
	
	                name: 'beforescroll',
	
	                handler: function handler() {
	                    this.hide(false);
	                }
	
	            },
	
	            {
	
	                name: 'toggle',
	
	                handler: function handler(e, toggle) {
	
	                    if (toggle && !this.$el.is(toggle.target)) {
	                        return;
	                    }
	
	                    e.preventDefault();
	
	                    if (this.isToggled()) {
	                        this.hide(false);
	                    } else {
	                        this.show(toggle, false);
	                    }
	                }
	
	            },
	
	            {
	
	                name: pointerEnter,
	
	                filter: function filter() {
	                    return ~this.mode.indexOf('hover');
	                },
	
	                handler: function handler(e) {
	
	                    if (isTouch(e)) {
	                        return;
	                    }
	
	                    if (active
	                        && active !== this
	                        && active.toggle
	                        && ~active.toggle.mode.indexOf('hover')
	                        && !isWithin(e.target, active.$el)
	                        && !isWithin(e.target, active.toggle.$el)
	                    ) {
	                        active.hide(false);
	                    }
	
	                    e.preventDefault();
	                    this.show(this.toggle);
	                }
	
	            },
	
	            {
	
	                name: 'toggleshow',
	
	                handler: function handler(e, toggle) {
	
	                    if (toggle && !this.$el.is(toggle.target)) {
	                        return;
	                    }
	
	                    e.preventDefault();
	                    this.show(toggle || this.toggle);
	                }
	
	            },
	
	            {
	
	                name: ("togglehide " + pointerLeave),
	
	                handler: function handler(e, toggle) {
	
	                    if (isTouch(e) || toggle && !this.$el.is(toggle.target)) {
	                        return;
	                    }
	
	                    e.preventDefault();
	
	                    if (this.toggle && ~this.toggle.mode.indexOf('hover')) {
	                        this.hide();
	                    }
	                }
	
	            },
	
	            {
	
	                name: 'beforeshow',
	
	                self: true,
	
	                handler: function handler() {
	                    this.clearTimers();
	                }
	
	            },
	
	            {
	
	                name: 'show',
	
	                self: true,
	
	                handler: function handler() {
	                    this.tracker.init();
	                    this.toggle.$el.addClass(this.cls).attr('aria-expanded', 'true');
	                    registerEvent();
	                }
	
	            },
	
	            {
	
	                name: 'beforehide',
	
	                self: true,
	
	                handler: function handler() {
	                    this.clearTimers();
	                }
	
	            },
	
	            {
	
	                name: 'hide',
	
	                handler: function handler(ref) {
	                    var target = ref.target;
	
	
	                    if (!this.$el.is(target)) {
	                        active = active === null && isWithin(target, this.$el) && this.isToggled() ? this : active;
	                        return;
	                    }
	
	                    active = this.isActive() ? null : active;
	                    this.toggle.$el.removeClass(this.cls).attr('aria-expanded', 'false').blur().find('a, button').blur();
	                    this.tracker.cancel();
	                }
	
	            }
	
	        ],
	
	        update: {
	
	            write: function write() {
	
	                if (this.isToggled() && !Animation.inProgress(this.$el)) {
	                    this.position();
	                }
	
	            },
	
	            events: ['resize']
	
	        },
	
	        methods: {
	
	            show: function show(toggle, delay) {
	                var this$1 = this;
	                if ( delay === void 0 ) delay = true;
	
	
	                var show = function () {
	                        if (!this$1.isToggled()) {
	                            this$1.position();
	                            this$1.toggleElement(this$1.$el, true);
	                        }
	                    },
	                    tryShow = function () {
	
	                        this$1.toggle = toggle || this$1.toggle;
	
	                        this$1.clearTimers();
	
	                        if (this$1.isActive()) {
	                            return;
	                        } else if (delay && active && active !== this$1 && active.isDelaying) {
	                            this$1.showTimer = setTimeout(this$1.show, 10);
	                            return;
	                        } else if (this$1.isParentOf(active)) {
	
	                            if (active.hideTimer) {
	                                active.hide(false);
	                            } else {
	                                return;
	                            }
	
	                        } else if (active && !this$1.isChildOf(active) && !this$1.isParentOf(active)) {
	
	                            var prev;
	                            while (active && active !== prev && !this$1.isChildOf(active)) {
	                                prev = active;
	                                active.hide(false);
	                            }
	
	                        }
	
	                        if (delay && this$1.delayShow) {
	                            this$1.showTimer = setTimeout(show, this$1.delayShow);
	                        } else {
	                            show();
	                        }
	
	                        active = this$1;
	                    };
	
	                if (toggle && this.toggle && !this.toggle.$el.is(toggle.$el)) {
	
	                    this.$el.one('hide', tryShow);
	                    this.hide(false);
	
	                } else {
	                    tryShow();
	                }
	            },
	
	            hide: function hide(delay) {
	                var this$1 = this;
	                if ( delay === void 0 ) delay = true;
	
	
	                var hide = function () { return this$1.toggleNow(this$1.$el, false); };
	
	                this.clearTimers();
	
	                this.isDelaying = this.tracker.movesTo(this.$el);
	
	                if (delay && this.isDelaying) {
	                    this.hideTimer = setTimeout(this.hide, this.hoverIdle);
	                } else if (delay && this.delayHide) {
	                    this.hideTimer = setTimeout(hide, this.delayHide);
	                } else {
	                    hide();
	                }
	            },
	
	            clearTimers: function clearTimers() {
	                clearTimeout(this.showTimer);
	                clearTimeout(this.hideTimer);
	                this.showTimer = null;
	                this.hideTimer = null;
	                this.isDelaying = false;
	            },
	
	            isActive: function isActive() {
	                return active === this;
	            },
	
	            isChildOf: function isChildOf(drop) {
	                return drop && drop !== this && isWithin(this.$el, drop.$el);
	            },
	
	            isParentOf: function isParentOf(drop) {
	                return drop && drop !== this && isWithin(drop.$el, this.$el);
	            },
	
	            position: function position() {
	
	                removeClass(this.$el, ((this.clsDrop) + "-(stack|boundary)")).css({top: '', left: ''});
	
	                this.$el.show().toggleClass(((this.clsDrop) + "-boundary"), this.boundaryAlign);
	
	                var boundary = getDimensions(this.boundary), alignTo = this.boundaryAlign ? boundary : getDimensions(this.toggle.$el);
	
	                if (this.align === 'justify') {
	                    var prop = this.getAxis() === 'y' ? 'width' : 'height';
	                    this.$el.css(prop, alignTo[prop]);
	                } else if (this.$el.outerWidth() > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
	                    this.$addClass(((this.clsDrop) + "-stack"));
	                    this.$el.trigger('stack', [this]);
	                }
	
	                this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);
	
	                this.$el[0].style.display = '';
	
	            }
	
	        }
	
	    });
	
	    UIkit.drop.getActive = function () { return active; };
	
	    var registered;
	    function registerEvent() {
	
	        if (registered) {
	            return;
	        }
	
	        registered = true;
	        doc.on('click', function (e) {
	            var prev;
	
	            if (e.isDefaultPrevented()) {
	                return;
	            }
	
	            while (active && active !== prev && !isWithin(e.target, active.$el) && !(active.toggle && isWithin(e.target, active.toggle.$el))) {
	                prev = active;
	                active.hide(false);
	            }
	        });
	    }
	
	};
	
	var Dropdown = function (UIkit) {
	
	    UIkit.component('dropdown', UIkit.components.drop.extend({name: 'dropdown'}));
	
	};
	
	var FormCustom = function (UIkit) {
	
	    UIkit.component('form-custom', {
	
	        mixins: [Class],
	
	        args: 'target',
	
	        props: {
	            target: Boolean
	        },
	
	        defaults: {
	            target: false
	        },
	
	        computed: {
	
	            input: function input() {
	                return this.$el.find(':input:first');
	            },
	
	            state: function state() {
	                return this.input.next();
	            },
	
	            target: function target() {
	                return this.$props.target && query(this.$props.target === true ? '> :input:first + :first' : this.$props.target, this.$el)
	            }
	
	        },
	
	        connected: function connected() {
	            this.input.trigger('change');
	        },
	
	        events: [
	
	            {
	
	                name: 'focusin focusout mouseenter mouseleave',
	
	                delegate: ':input:first',
	
	                handler: function handler(ref) {
	                    var type = ref.type;
	
	                    this.state.toggleClass(("uk-" + (~type.indexOf('focus') ? 'focus' : 'hover')), ~['focusin', 'mouseenter'].indexOf(type));
	                }
	
	            },
	
	            {
	
	                name: 'change',
	
	                handler: function handler() {
	                    this.target && this.target[this.target.is(':input') ? 'val' : 'text'](
	                        this.input[0].files && this.input[0].files[0]
	                            ? this.input[0].files[0].name
	                            : this.input.is('select')
	                                ? this.input.find('option:selected').text()
	                                : this.input.val()
	                    );
	                }
	
	            }
	
	        ]
	
	    });
	
	};
	
	var Gif = function (UIkit) {
	
	    UIkit.component('gif', {
	
	        update: {
	
	            read: function read() {
	
	                var inview = isInView(this.$el);
	
	                if (!this.isInView && inview) {
	                    this.$el[0].src = this.$el[0].src;
	                }
	
	                this.isInView = inview;
	            },
	
	            events: ['scroll', 'load', 'resize']
	        }
	
	    });
	
	};
	
	var Grid = function (UIkit) {
	
	    UIkit.component('grid', UIkit.components.margin.extend({
	
	        mixins: [Class],
	
	        name: 'grid',
	
	        defaults: {
	            margin: 'uk-grid-margin',
	            clsStack: 'uk-grid-stack'
	        },
	
	        update: {
	
	            write: function write() {
	
	                this.$toggleClass(this.clsStack, this.stacks);
	
	            },
	
	            events: ['load', 'resize']
	
	        }
	
	    }));
	
	};
	
	var HeightMatch = function (UIkit) {
	
	    UIkit.component('height-match', {
	
	        args: 'target',
	
	        props: {
	            target: String,
	            row: Boolean
	        },
	
	        defaults: {
	            target: '> *',
	            row: true
	        },
	
	        computed: {
	
	            elements: function elements() {
	                return $__default(this.target, this.$el);
	            }
	
	        },
	
	        update: {
	
	            read: function read() {
	                var this$1 = this;
	
	
	                var lastOffset = false;
	
	                this.elements.css('minHeight', '');
	
	                this.rows = !this.row
	                    ? [this.match(this.elements)]
	                    : this.elements.toArray().reduce(function (rows, el) {
	
	                        if (lastOffset !== el.offsetTop) {
	                            rows.push([el]);
	                        } else {
	                            rows[rows.length - 1].push(el);
	                        }
	
	                        lastOffset = el.offsetTop;
	
	                        return rows;
	
	                    }, []).map(function (elements) { return this$1.match($__default(elements)); });
	            },
	
	            write: function write() {
	
	                this.rows.forEach(function (ref) {
	                        var height = ref.height;
	                        var elements = ref.elements;
	
	                        return elements && elements.each(function (_, el) { return el.style.minHeight = height + "px"; }
	                    );
	                }
	                );
	
	            },
	
	            events: ['load', 'resize']
	
	        },
	
	        methods: {
	
	            match: function match(elements) {
	
	                if (elements.length < 2) {
	                    return {};
	                }
	
	                var max = 0, heights = [];
	
	                elements = elements
	                    .each(function (_, el) {
	
	                        var $el, style, hidden;
	
	                        if (el.offsetHeight === 0) {
	                            $el = $__default(el);
	                            style = $el.attr('style') || null;
	                            hidden = $el.attr('hidden') || null;
	
	                            $el.attr({
	                                style: (style + ";display:block !important;"),
	                                hidden: null
	                            });
	                        }
	
	                        max = Math.max(max, el.offsetHeight);
	                        heights.push(el.offsetHeight);
	
	                        if ($el) {
	                            $el.attr({style: style, hidden: hidden});
	                        }
	
	                    })
	                    .filter(function (i) { return heights[i] < max; });
	
	                return {height: max, elements: elements};
	            }
	        }
	
	    });
	
	};
	
	var HeightViewport = function (UIkit) {
	
	    UIkit.component('height-viewport', {
	
	        props: {
	            expand: Boolean,
	            offsetTop: Boolean,
	            offsetBottom: Boolean
	        },
	
	        defaults: {
	            expand: false,
	            offsetTop: false,
	            offsetBottom: false
	        },
	
	        update: {
	
	            write: function write() {
	
	                this.$el.css('boxSizing', 'border-box');
	
	                var viewport = window.innerHeight, height, offset = 0;
	
	                if (this.expand) {
	
	                    this.$el.css({height: '', minHeight: ''});
	
	                    var diff = viewport - document.documentElement.offsetHeight;
	
	                    if (diff > 0) {
	                        this.$el.css('min-height', height = this.$el.outerHeight() + diff);
	                    }
	
	                } else {
	
	                    var top = offsetTop(this.$el);
	
	                    if (top < viewport / 2 && this.offsetTop) {
	                        offset += top;
	                    }
	
	                    if (this.offsetBottom === true) {
	
	                        offset += this.$el.next().outerHeight() || 0;
	
	                    } else if ($.isNumeric(this.offsetBottom)) {
	
	                        offset += (viewport / 100) * this.offsetBottom;
	
	                    } else if (this.offsetBottom && this.offsetBottom.substr(-2) === 'px') {
	
	                        offset += parseFloat(this.offsetBottom);
	
	                    } else if (isString(this.offsetBottom)) {
	
	                        var el = query(this.offsetBottom, this.$el);
	                        offset += el && el.outerHeight() || 0;
	
	                    }
	
	                    this.$el.css('min-height', height = offset ? ("calc(100vh - " + offset + "px)") : '100vh');
	
	                }
	
	                // IE 10-11 fix (min-height on a flex container won't apply to its flex items)
	                this.$el.height('');
	                if (height && viewport - offset >= this.$el.outerHeight()) {
	                    this.$el.css('height', height);
	                }
	
	            },
	
	            events: ['load', 'resize']
	
	        }
	
	    });
	
	};
	
	var Hover = function (UIkit) {
	
	    ready(function () {
	
	        if (!hasTouch) {
	            return;
	        }
	
	        var cls = 'uk-hover';
	
	        docElement.on('tap', function (ref) {
	            var target = ref.target;
	
	            return $__default(("." + cls)).filter(function (_, el) { return !isWithin(target, el); }).removeClass(cls);
	        });
	
	        Object.defineProperty(UIkit, 'hoverSelector', {
	
	            set: function set(selector) {
	                docElement.on('tap', selector, function (ref) {
	                    var currentTarget = ref.currentTarget;
	
	                    return currentTarget.classList.add(cls);
	                });
	            }
	
	        });
	
	        UIkit.hoverSelector = '.uk-animation-toggle, .uk-transition-toggle, [uk-hover]';
	
	    });
	
	};
	
	var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"></line><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"></line></svg>";
	
	var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"></line><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"></line></svg>";
	
	var marker = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"4\" width=\"1\" height=\"11\"></rect><rect x=\"4\" y=\"9\" width=\"11\" height=\"1\"></rect></svg>";
	
	var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"9\" width=\"20\" height=\"2\"></rect><rect y=\"3\" width=\"20\" height=\"2\"></rect><rect y=\"15\" width=\"20\" height=\"2\"></rect></svg>";
	
	var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"></rect><rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"></rect></svg>";
	
	var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"></polyline></svg>";
	
	var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"></polyline></svg>";
	
	var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"></circle><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"></path></svg>";
	
	var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"></circle><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"></line></svg>";
	
	var searchNavbar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";
	
	var slidenavNext = "<svg width=\"11\" height=\"20\" viewBox=\"0 0 11 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 10 10 1 19\"></polyline></svg>";
	
	var slidenavNextLarge = "<svg width=\"18\" height=\"34\" viewBox=\"0 0 18 34\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1 1 17 17 1 33\"></polyline></svg>";
	
	var slidenavPrevious = "<svg width=\"11\" height=\"20\" viewBox=\"0 0 11 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"10 1 1 10 10 19\"></polyline></svg>";
	
	var slidenavPreviousLarge = "<svg width=\"18\" height=\"34\" viewBox=\"0 0 18 34\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"17 1 1 17 17 33\"></polyline></svg>";
	
	var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"></circle></svg>";
	
	var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"></polyline></svg>";
	
	var Icon = function (UIkit) {
	
	    var parsed = {},
	        icons = {
	            spinner: spinner,
	            totop: totop,
	            marker: marker,
	            'close-icon': closeIcon,
	            'close-large': closeLarge,
	            'navbar-toggle-icon': navbarToggleIcon,
	            'overlay-icon': overlayIcon,
	            'pagination-next': paginationNext,
	            'pagination-previous': paginationPrevious,
	            'search-icon': searchIcon,
	            'search-large': searchLarge,
	            'search-navbar': searchNavbar,
	            'slidenav-next': slidenavNext,
	            'slidenav-next-large': slidenavNextLarge,
	            'slidenav-previous': slidenavPrevious,
	            'slidenav-previous-large': slidenavPreviousLarge
	        };
	
	    UIkit.component('icon', UIkit.components.svg.extend({
	
	        attrs: ['icon', 'ratio'],
	
	        mixins: [Class],
	
	        name: 'icon',
	
	        args: 'icon',
	
	        props: ['icon'],
	
	        defaults: {exclude: ['id', 'style', 'class', 'src', 'icon']},
	
	        init: function init() {
	            this.$addClass('uk-icon');
	
	            if (isRtl) {
	                this.icon = swap(swap(this.icon, 'left', 'right'), 'previous', 'next');
	            }
	        },
	
	        disconnected: function disconnected() {
	            delete this.delay;
	        },
	
	        update: {
	
	            read: function read() {
	
	                if (this.delay) {
	                    var icon = this.getIcon();
	
	                    if (icon) {
	                        this.delay(icon);
	                        delete this.delay;
	                    }
	                }
	            },
	
	            events: ['load']
	
	        },
	
	        methods: {
	
	            getSvg: function getSvg() {
	                var this$1 = this;
	
	
	                var icon = this.getIcon();
	
	                if (!icon) {
	
	                    if (document.readyState !== 'complete') {
	                        return promise(function (resolve) {
	                            this$1.delay = resolve;
	                        });
	                    }
	
	                    return promise.reject('Icon not found.');
	
	                }
	
	                return promise.resolve(icon);
	            },
	
	            getIcon: function getIcon() {
	
	                if (!icons[this.icon]) {
	                    return null;
	                }
	
	                if (!parsed[this.icon]) {
	                    parsed[this.icon] = this.parse(icons[this.icon]);
	                }
	
	                return parsed[this.icon];
	            }
	
	        }
	
	    }));
	
	    [
	        'marker',
	        'navbar-toggle-icon',
	        'overlay-icon',
	        'pagination-previous',
	        'pagination-next',
	        'totop'
	    ].forEach(function (name) { return registerComponent(name); });
	
	    [
	        'slidenav-previous',
	        'slidenav-next'
	    ].forEach(function (name) { return registerComponent(name, {
	
	        init: function init() {
	            this.$addClass('uk-slidenav');
	
	            if (this.$hasClass('uk-slidenav-large')) {
	                this.icon += '-large';
	            }
	        }
	
	    }); });
	
	    registerComponent('search-icon', {
	
	        init: function init() {
	            if (this.$hasClass('uk-search-icon') && this.$el.parents('.uk-search-large').length) {
	                this.icon = 'search-large';
	            } else if (this.$el.parents('.uk-search-navbar').length) {
	                this.icon = 'search-navbar';
	            }
	        }
	
	    });
	
	    registerComponent('close', {
	
	        init: function init() {
	            this.icon = "close-" + (this.$hasClass('uk-close-large') ? 'large' : 'icon');
	        }
	
	    });
	
	    registerComponent('spinner', {
	
	        connected: function connected() {
	            var this$1 = this;
	
	            this.svg.then(function (svg) { return this$1.ratio !== 1 && $__default(svg).find('circle').css('stroke-width', 1 / this$1.ratio); }, noop);
	        }
	
	    });
	
	    UIkit.icon.add = function (added) {
	        assign(icons, added);
	        Object.keys(added).forEach(function (name) { return delete parsed[name]; });
	
	        if (UIkit._initialized) {
	            $.each(UIkit.instances, function (_, component) {
	                if (component.$options.name === 'icon') {
	                    component.$reset();
	                }
	            });
	        }
	    };
	
	    function registerComponent(name, mixin$$1) {
	
	        UIkit.component(name, UIkit.components.icon.extend({
	
	            name: name,
	
	            mixins: mixin$$1 ? [mixin$$1] : [],
	
	            defaults: {
	                icon: name
	            }
	
	        }));
	    }
	
	};
	
	var Margin = function (UIkit) {
	
	    UIkit.component('margin', {
	
	        props: {
	            margin: String,
	            firstColumn: Boolean
	        },
	
	        defaults: {
	            margin: 'uk-margin-small-top',
	            firstColumn: 'uk-first-column'
	        },
	
	        computed: {
	
	            items: function items() {
	                return this.$el[0].children;
	            }
	
	        },
	
	        update: {
	
	            read: function read() {
	                var this$1 = this;
	
	
	                if (!this.items.length || this.$el[0].offsetHeight === 0) {
	                    this.rows = false;
	                    return;
	                }
	
	                this.stacks = true;
	
	                var rows = [[]];
	
	                for (var i = 0; i < this.items.length; i++) {
	
	                    var el = this$1.items[i],
	                        dim = el.getBoundingClientRect();
	
	                    if (!dim.height) {
	                        continue;
	                    }
	
	                    for (var j = rows.length - 1; j >= 0; j--) {
	
	                        var row = rows[j];
	
	                        if (!row[0]) {
	                            row.push(el);
	                            break;
	                        }
	
	                        var leftDim = row[0].getBoundingClientRect();
	
	                        if (dim.top >= Math.floor(leftDim.bottom)) {
	                            rows.push([el]);
	                            break;
	                        }
	
	                        if (Math.floor(dim.bottom) > leftDim.top) {
	
	                            this$1.stacks = false;
	
	                            if (dim.left < leftDim.left && !isRtl) {
	                                row.unshift(el);
	                                break;
	                            }
	
	                            row.push(el);
	                            break;
	                        }
	
	                        if (j === 0) {
	                            rows.unshift([el]);
	                            break;
	                        }
	
	                    }
	
	                }
	
	                this.rows = rows;
	
	            },
	
	            write: function write() {
	                var this$1 = this;
	
	
	                this.rows && this.rows.forEach(function (row, i) { return row.forEach(function (el, j) {
	                        this$1.$toggleClass(el, this$1.margin, i !== 0);
	                        this$1.$toggleClass(el, this$1.firstColumn, j === 0);
	                    }); }
	                );
	
	            },
	
	            events: ['load', 'resize']
	
	        }
	
	    });
	
	};
	
	var Modal$1 = function (UIkit) {
	
	    UIkit.component('modal', {
	
	        mixins: [Modal],
	
	        defaults: {
	            clsPage: 'uk-modal-page',
	            clsPanel: 'uk-modal-dialog',
	            selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
	        },
	
	        events: [
	
	            {
	                name: 'show',
	
	                self: true,
	
	                handler: function handler() {
	
	                    if (this.panel.hasClass('uk-margin-auto-vertical')) {
	                        this.$el.addClass('uk-flex');
	                    } else {
	                        this.$el.css('display', 'block');
	                    }
	
	                    this.$el.height(); // force reflow
	                }
	            },
	
	            {
	                name: 'hidden',
	
	                self: true,
	
	                handler: function handler() {
	
	                    this.$el.css('display', '').removeClass('uk-flex');
	
	                }
	            }
	
	        ]
	
	    });
	
	    UIkit.component('overflow-auto', {
	
	        mixins: [Class],
	
	        computed: {
	
	            modal: function modal() {
	                return this.$el.closest('.uk-modal');
	            },
	
	            panel: function panel() {
	                return this.$el.closest('.uk-modal-dialog');
	            }
	
	        },
	
	        connected: function connected() {
	            this.$el.css('min-height', 150);
	        },
	
	        update: {
	
	            write: function write() {
	                var current = this.$el.css('max-height');
	
	                this.$el.css('max-height', 150).css('max-height', Math.max(150, 150 + this.modal.height() - this.panel.outerHeight(true)));
	                if (current !== this.$el.css('max-height')) {
	                    this.$el.trigger('resize');
	                }
	            },
	
	            events: ['load', 'resize']
	
	        }
	
	    });
	
	    UIkit.modal.dialog = function (content, options) {
	
	        var dialog = UIkit.modal((" <div class=\"uk-modal\"> <div class=\"uk-modal-dialog\">" + content + "</div> </div> "), options);
	
	        dialog.$el.on('hidden', function (e) {
	            if (e.target === e.currentTarget) {
	                dialog.$destroy(true);
	            }
	        });
	        dialog.show();
	
	        return dialog;
	    };
	
	    UIkit.modal.alert = function (message, options) {
	
	        options = assign({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);
	
	        return promise(
	            function (resolve) { return UIkit.modal.dialog((" <div class=\"uk-modal-body\">" + (isString(message) ? message : $__default(message).html()) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + (options.labels.ok) + "</button> </div> "), options).$el.on('hide', resolve); }
	        );
	    };
	
	    UIkit.modal.confirm = function (message, options) {
	
	        options = assign({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);
	
	        return promise(
	            function (resolve, reject) { return UIkit.modal.dialog((" <div class=\"uk-modal-body\">" + (isString(message) ? message : $__default(message).html()) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\">" + (options.labels.cancel) + "</button> <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + (options.labels.ok) + "</button> </div> "), options).$el.on('click', '.uk-modal-footer button', function (e) { return $__default(e.target).index() === 0 ? reject() : resolve(); }); }
	        );
	    };
	
	    UIkit.modal.prompt = function (message, value, options) {
	
	        options = assign({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);
	
	        return promise(function (resolve) {
	
	            var resolved = false,
	                prompt = UIkit.modal.dialog((" <form class=\"uk-form-stacked\"> <div class=\"uk-modal-body\"> <label>" + (isString(message) ? message : $__default(message).html()) + "</label> <input class=\"uk-input\" type=\"text\" autofocus> </div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (options.labels.cancel) + "</button> <button class=\"uk-button uk-button-primary\" type=\"submit\">" + (options.labels.ok) + "</button> </div> </form> "), options),
	                input = prompt.$el.find('input').val(value);
	
	            prompt.$el
	                .on('submit', 'form', function (e) {
	                    e.preventDefault();
	                    resolve(input.val());
	                    resolved = true;
	                    prompt.hide();
	                })
	                .on('hide', function () {
	                    if (!resolved) {
	                        resolve(null);
	                    }
	                });
	
	        });
	    };
	
	    UIkit.modal.labels = {
	        ok: 'Ok',
	        cancel: 'Cancel'
	    };
	
	};
	
	var Nav = function (UIkit) {
	
	    UIkit.component('nav', UIkit.components.accordion.extend({
	
	        name: 'nav',
	
	        defaults: {
	            targets: '> .uk-parent',
	            toggle: '> a',
	            content: 'ul:first'
	        }
	
	    }));
	
	};
	
	var Navbar = function (UIkit) {
	
	    UIkit.component('navbar', {
	
	        mixins: [Class],
	
	        props: {
	            dropdown: String,
	            mode: 'list',
	            align: String,
	            offset: Number,
	            boundary: Boolean,
	            boundaryAlign: Boolean,
	            clsDrop: String,
	            delayShow: Number,
	            delayHide: Number,
	            dropbar: Boolean,
	            dropbarMode: String,
	            dropbarAnchor: 'jQuery',
	            duration: Number
	        },
	
	        defaults: {
	            dropdown: '.uk-navbar-nav > li',
	            align: !isRtl ? 'left' : 'right',
	            clsDrop: 'uk-navbar-dropdown',
	            mode: undefined,
	            offset: undefined,
	            delayShow: undefined,
	            delayHide: undefined,
	            boundaryAlign: undefined,
	            flip: 'x',
	            boundary: true,
	            dropbar: false,
	            dropbarMode: 'slide',
	            dropbarAnchor: false,
	            duration: 200,
	        },
	
	        computed: {
	
	            boundary: function boundary() {
	                return (this.$props.boundary === true || this.boundaryAlign) ? this.$el : this.$props.boundary
	            },
	
	            pos: function pos() {
	                return ("bottom-" + (this.align));
	            }
	
	        },
	
	        ready: function ready() {
	
	            if (this.dropbar) {
	                UIkit.navbarDropbar(
	                    query(this.dropbar, this.$el) || $__default('<div></div>').insertAfter(this.dropbarAnchor || this.$el),
	                    {clsDrop: this.clsDrop, mode: this.dropbarMode, duration: this.duration, navbar: this}
	                );
	            }
	
	        },
	
	        update: function update() {
	
	            UIkit.drop(
	                $__default(((this.dropdown) + " ." + (this.clsDrop)), this.$el).filter(function (_, el) { return !UIkit.getComponent(el, 'dropdown'); }),
	                assign({}, this.$props, {boundary: this.boundary, pos: this.pos})
	            );
	
	        },
	
	        events: [
	
	            {
	                name: pointerEnter,
	
	                delegate: function delegate() {
	                    return this.dropdown;
	                },
	
	                handler: function handler(ref) {
	                    var currentTarget = ref.currentTarget;
	
	                    var active = this.getActive();
	                    if (active && active.toggle && !isWithin(active.toggle.$el, currentTarget) && !active.tracker.movesTo(active.$el)) {
	                        active.hide(false);
	                    }
	                }
	
	            }
	
	        ],
	
	        methods: {
	
	            getActive: function getActive() {
	                var active = UIkit.drop.getActive();
	                return active && !~active.mode.indexOf('click') && isWithin(active.toggle.$el, this.$el) && active;
	            }
	
	        }
	
	    });
	
	    UIkit.component('navbar-dropbar', {
	
	        mixins: [Class],
	
	        defaults: {
	            clsDrop: '',
	            mode: 'slide',
	            navbar: null,
	            duration: 200
	        },
	
	        init: function init() {
	
	            if (this.mode === 'slide') {
	                this.$addClass('uk-navbar-dropbar-slide');
	            }
	
	        },
	
	        events: [
	
	            {
	                name: 'beforeshow',
	
	                el: function el() {
	                    return this.navbar.$el;
	                },
	
	                handler: function handler(_, drop) {
	                    var $el = drop.$el;
	                    var dir = drop.dir;
	                    if (dir === 'bottom' && !isWithin($el, this.$el)) {
	                        $el.appendTo(this.$el);
	                        drop.show();
	                        return false;
	                    }
	                }
	            },
	
	            {
	                name: 'mouseleave',
	
	                handler: function handler() {
	                    var active = this.navbar.getActive();
	
	                    if (active && !this.$el.is(':hover')) {
	                        active.hide();
	                    }
	                }
	            },
	
	            {
	                name: 'beforeshow',
	
	                handler: function handler(e, ref) {
	                    var $el = ref.$el;
	
	                    this.clsDrop && $el.addClass(((this.clsDrop) + "-dropbar"));
	                    this.transitionTo($el.outerHeight(true));
	                }
	            },
	
	            {
	                name: 'beforehide',
	
	                handler: function handler(e, ref) {
	                    var $el = ref.$el;
	
	
	                    var active = this.navbar.getActive();
	
	                    if (this.$el.is(':hover') && active && active.$el.is($el)) {
	                        return false;
	                    }
	                }
	            },
	
	            {
	                name: 'hide',
	
	                handler: function handler(e, ref) {
	                    var $el = ref.$el;
	
	
	                    var active = this.navbar.getActive();
	
	                    if (!active || active && active.$el.is($el)) {
	                        this.transitionTo(0);
	                    }
	                }
	            }
	
	        ],
	
	        methods: {
	
	            transitionTo: function transitionTo(height) {
	                this.$el.height(this.$el[0].offsetHeight ? this.$el.height() : 0);
	                Transition.cancel(this.$el);
	                return Transition.start(this.$el, {height: height}, this.duration).then(null, noop);
	            }
	
	        }
	
	    });
	
	};
	
	var scroll;
	
	var Offcanvas = function (UIkit) {
	
	    UIkit.component('offcanvas', {
	
	        mixins: [Modal],
	
	        args: 'mode',
	
	        props: {
	            content: String,
	            mode: String,
	            flip: Boolean,
	            overlay: Boolean
	        },
	
	        defaults: {
	            content: '.uk-offcanvas-content:first',
	            mode: 'slide',
	            flip: false,
	            overlay: false,
	            clsPage: 'uk-offcanvas-page',
	            clsContainer: 'uk-offcanvas-container',
	            clsPanel: 'uk-offcanvas-bar',
	            clsFlip: 'uk-offcanvas-flip',
	            clsContent: 'uk-offcanvas-content',
	            clsContentAnimation: 'uk-offcanvas-content-animation',
	            clsSidebarAnimation: 'uk-offcanvas-bar-animation',
	            clsMode: 'uk-offcanvas',
	            clsOverlay: 'uk-offcanvas-overlay',
	            selClose: '.uk-offcanvas-close'
	        },
	
	        computed: {
	
	            content: function content() {
	                return $__default(query(this.$props.content, this.$el));
	            },
	
	            clsFlip: function clsFlip() {
	                return this.flip ? this.$props.clsFlip : '';
	            },
	
	            clsOverlay: function clsOverlay() {
	                return this.overlay ? this.$props.clsOverlay : '';
	            },
	
	            clsMode: function clsMode() {
	                return ((this.$props.clsMode) + "-" + (this.mode));
	            },
	
	            clsSidebarAnimation: function clsSidebarAnimation() {
	                return this.mode === 'none' || this.mode === 'reveal' ? '' : this.$props.clsSidebarAnimation;
	            },
	
	            clsContentAnimation: function clsContentAnimation() {
	                return this.mode !== 'push' && this.mode !== 'reveal' ? '' : this.$props.clsContentAnimation
	            },
	
	            transitionElement: function transitionElement() {
	                return this.mode === 'reveal' ? this.panel.parent() : this.panel;
	            }
	
	        },
	
	        update: {
	
	            write: function write() {
	
	                if (this.isToggled()) {
	
	                    if (this.overlay || this.clsContentAnimation) {
	                        this.content.width(window.innerWidth - this.scrollbarWidth);
	                    }
	
	                    if (this.overlay) {
	                        this.content.height(window.innerHeight);
	                        scroll && this.content.scrollTop(scroll.y);
	                    }
	
	                }
	
	            },
	
	            events: ['resize']
	
	        },
	
	        events: [
	
	            {
	
	                name: 'click',
	
	                delegate: function delegate() {
	                    return 'a[href^="#"]';
	                },
	
	                handler: function handler(ref) {
	                    var currentTarget = ref.currentTarget;
	
	                    if (currentTarget.hash && this.content.find(currentTarget.hash).length) {
	                        scroll = null;
	                        this.hide();
	                    }
	                }
	
	            },
	
	            {
	
	                name: 'beforescroll',
	
	                filter: function filter() {
	                    return this.overlay;
	                },
	
	                handler: function handler(_, scroll, target) {
	                    if (scroll && target && this.isToggled() && this.content.find(target).length) {
	                        this.$el.one('hidden', function () { return scroll.scrollTo(target); });
	                        return false;
	                    }
	                }
	
	            },
	
	            {
	                name: 'show',
	
	                self: true,
	
	                handler: function handler() {
	
	                    scroll = scroll || {x: window.pageXOffset, y: window.pageYOffset};
	
	                    if (this.mode === 'reveal' && !this.panel.parent().hasClass(this.clsMode)) {
	                        this.panel.wrap('<div>').parent().addClass(this.clsMode);
	                    }
	
	                    docElement.css('overflow-y', (!this.clsContentAnimation || this.flip) && this.scrollbarWidth && this.overlay ? 'scroll' : '');
	
	                    this.body.addClass(((this.clsContainer) + " " + (this.clsFlip) + " " + (this.clsOverlay))).height();
	                    this.content.addClass(this.clsContentAnimation);
	                    this.panel.addClass(((this.clsSidebarAnimation) + " " + (this.mode !== 'reveal' ? this.clsMode : '')));
	                    this.$el.addClass(this.clsOverlay).css('display', 'block').height();
	
	                }
	            },
	
	            {
	                name: 'hide',
	
	                self: true,
	
	                handler: function handler() {
	                    this.content.removeClass(this.clsContentAnimation);
	
	                    if (this.mode === 'none' || this.getActive() && this.getActive() !== this) {
	                        this.panel.trigger(transitionend);
	                    }
	                }
	            },
	
	            {
	                name: 'hidden',
	
	                self: true,
	
	                handler: function handler() {
	
	                    if (this.mode === 'reveal') {
	                        this.panel.unwrap();
	                    }
	
	                    if (!this.overlay) {
	                        scroll = {x: window.pageXOffset, y: window.pageYOffset};
	                    } else if (!scroll) {
	                        var ref = this.content[0];
	                        var x = ref.scrollLeft;
	                        var y = ref.scrollTop;
	                        scroll = {x: x, y: y};
	                    }
	
	                    this.panel.removeClass(((this.clsSidebarAnimation) + " " + (this.clsMode)));
	                    this.$el.removeClass(this.clsOverlay).css('display', '');
	                    this.body.removeClass(((this.clsContainer) + " " + (this.clsFlip) + " " + (this.clsOverlay))).scrollTop(scroll.y);
	
	                    docElement.css('overflow-y', '');
	                    this.content.width('').height('');
	
	                    window.scrollTo(scroll.x, scroll.y);
	
	                    scroll = null;
	
	                }
	            },
	
	            {
	                name: 'swipeLeft swipeRight',
	
	                handler: function handler(e) {
	
	                    if (this.isToggled() && isTouch(e) && (e.type === 'swipeLeft' && !this.flip || e.type === 'swipeRight' && this.flip)) {
	                        this.hide();
	                    }
	
	                }
	            }
	
	        ]
	
	    });
	
	};
	
	var Responsive = function (UIkit) {
	
	    UIkit.component('responsive', {
	
	        props: ['width', 'height'],
	
	        init: function init() {
	            this.$addClass('uk-responsive-width');
	        },
	
	        update: {
	
	            read: function read() {
	
	                this.dim = this.$el.is(':visible') && this.width && this.height
	                    ? {width: this.$el.parent().width(), height: this.height}
	                    : false;
	
	            },
	
	            write: function write() {
	
	                if (this.dim) {
	                    this.$el.height(Dimensions.contain({height: this.height, width: this.width}, this.dim).height);
	                }
	
	            },
	
	            events: ['load', 'resize']
	
	        }
	
	    });
	
	};
	
	var Scroll = function (UIkit) {
	
	    UIkit.component('scroll', {
	
	        props: {
	            duration: Number,
	            easing: String,
	            offset: Number
	        },
	
	        defaults: {
	            duration: 1000,
	            easing: 'easeOutExpo',
	            offset: 0
	        },
	
	        methods: {
	
	            scrollTo: function scrollTo(el) {
	                var this$1 = this;
	
	
	                var target = offsetTop($__default(el)) - this.offset,
	                    document = docHeight(),
	                    viewport = window.innerHeight;
	
	                if (target + viewport > document) {
	                    target = document - viewport;
	                }
	
	                if ($trigger(this.$el, 'beforescroll', [this, el]).result === false) {
	                    return;
	                }
	
	                $__default('html,body')
	                    .stop()
	                    .animate({scrollTop: Math.round(target)}, this.duration, this.easing)
	                    .promise()
	                    .then(function () { return this$1.$el.trigger('scrolled', [this$1, el]); });
	
	            }
	
	        },
	
	        events: {
	
	            click: function click(e) {
	
	                if (e.isDefaultPrevented()) {
	                    return;
	                }
	
	                e.preventDefault();
	                this.scrollTo($__default(this.$el[0].hash).length ? this.$el[0].hash : 'body');
	            }
	
	        }
	
	    });
	
	    $__default.easing.easeOutExpo = $__default.easing.easeOutExpo || function (x, t, b, c, d) {
	        return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	    };
	
	};
	
	var Scrollspy = function (UIkit) {
	
	    UIkit.component('scrollspy', {
	
	        args: 'cls',
	
	        props: {
	            cls: 'list',
	            target: String,
	            hidden: Boolean,
	            offsetTop: Number,
	            offsetLeft: Number,
	            repeat: Boolean,
	            delay: Number
	        },
	
	        defaults: {
	            cls: ['uk-scrollspy-inview'],
	            target: false,
	            hidden: true,
	            offsetTop: 0,
	            offsetLeft: 0,
	            repeat: false,
	            delay: 0,
	            inViewClass: 'uk-scrollspy-inview'
	        },
	
	        computed: {
	
	            elements: function elements() {
	                return this.target && $__default(this.target, this.$el) || this.$el;
	            }
	
	        },
	
	        update: [
	
	            {
	
	                write: function write() {
	                    if (this.hidden) {
	                        this.elements.filter((":not(." + (this.inViewClass) + ")")).css('visibility', 'hidden');
	                    }
	                }
	
	            },
	
	            {
	
	                read: function read() {
	                    var this$1 = this;
	
	                    this.elements.each(function (_, el) {
	
	                        if (!el._scrollspy) {
	                            var cls = $__default(el).attr('uk-scrollspy-class');
	                            el._scrollspy = {toggles: cls && cls.split(',') || this$1.cls};
	                        }
	
	                        el._scrollspy.show = isInView(el, this$1.offsetTop, this$1.offsetLeft);
	
	                    });
	                },
	
	                write: function write() {
	                    var this$1 = this;
	
	
	                    var index = this.elements.length === 1 ? 1 : 0;
	
	                    this.elements.each(function (i, el) {
	
	                        var $el = $__default(el), data = el._scrollspy, cls = data.toggles[i] || data.toggles[0];
	
	                        if (data.show) {
	
	                            if (!data.inview && !data.timer) {
	
	                                var show = function () {
	                                    $el.css('visibility', '')
	                                        .addClass(this$1.inViewClass)
	                                        .toggleClass(cls)
	                                        .trigger('inview');
	
	                                    this$1.$update();
	
	                                    data.inview = true;
	                                    delete data.timer;
	                                };
	
	                                if (this$1.delay && index) {
	                                    data.timer = setTimeout(show, this$1.delay * index);
	                                } else {
	                                    show();
	                                }
	
	                                index++;
	
	                            }
	
	                        } else {
	
	                            if (data.inview && this$1.repeat) {
	
	                                if (data.timer) {
	                                    clearTimeout(data.timer);
	                                    delete data.timer;
	                                }
	
	                                $el.removeClass(this$1.inViewClass)
	                                    .toggleClass(cls)
	                                    .css('visibility', this$1.hidden ? 'hidden' : '')
	                                    .trigger('outview');
	
	                                this$1.$update();
	
	                                data.inview = false;
	
	                            }
	
	                        }
	
	                    });
	
	                },
	
	                events: ['scroll', 'load', 'resize']
	
	            }
	
	        ]
	
	    });
	
	};
	
	var ScrollspyNav = function (UIkit) {
	
	    UIkit.component('scrollspy-nav', {
	
	        props: {
	            cls: String,
	            closest: String,
	            scroll: Boolean,
	            overflow: Boolean,
	            offset: Number
	        },
	
	        defaults: {
	            cls: 'uk-active',
	            closest: false,
	            scroll: false,
	            overflow: true,
	            offset: 0
	        },
	
	        computed: {
	
	            links: function links() {
	                return this.$el.find('a[href^="#"]').filter(function (i, el) { return el.hash; });
	            },
	
	            elements: function elements() {
	                return this.closest ? this.links.closest(this.closest) : this.links;
	            },
	
	            targets: function targets() {
	                return $__default(this.links.toArray().map(function (el) { return el.hash; }).join(','));
	            }
	
	        },
	
	        update: [
	
	            {
	
	                read: function read() {
	                    if (this.scroll) {
	                        UIkit.scroll(this.links, {offset: this.offset || 0});
	                    }
	                }
	
	            },
	
	            {
	
	                read: function read() {
	                    var this$1 = this;
	
	
	                    var scroll = window.pageYOffset + this.offset + 1, max = docHeight() - window.innerHeight + this.offset;
	
	                    this.active = false;
	
	                    this.targets.each(function (i, el) {
	
	                        var top = offsetTop(el), last = i + 1 === this$1.targets.length;
	                        if (!this$1.overflow && (i === 0 && top > scroll || last && top + el.offsetTop < scroll)) {
	                            return false;
	                        }
	
	                        if (!last && offsetTop(this$1.targets.eq(i + 1)) <= scroll) {
	                            return;
	                        }
	
	                        if (scroll >= max) {
	                            for (var j = this$1.targets.length - 1; j > i; j--) {
	                                if (isInView(this$1.targets[j])) {
	                                    el = this$1.targets[j];
	                                    break;
	                                }
	                            }
	                        }
	
	                        return !(this$1.active = toJQuery(this$1.links.filter(("[href=\"#" + (el.id) + "\"]"))));
	
	                    });
	
	                },
	
	                write: function write() {
	
	                    this.links.blur();
	                    this.elements.removeClass(this.cls);
	
	                    if (this.active) {
	                        this.$el.trigger('active', [
	                            this.active,
	                            (this.closest ? this.active.closest(this.closest) : this.active).addClass(this.cls)
	                        ]);
	                    }
	
	                },
	
	                events: ['scroll', 'load', 'resize']
	
	            }
	
	        ]
	
	    });
	
	};
	
	var Sticky = function (UIkit) {
	
	    UIkit.component('sticky', {
	
	        mixins: [Class],
	
	        attrs: true,
	
	        props: {
	            top: null,
	            bottom: Boolean,
	            offset: Number,
	            animation: String,
	            clsActive: String,
	            clsInactive: String,
	            clsFixed: String,
	            clsBelow: String,
	            selTarget: String,
	            widthElement: 'jQuery',
	            showOnUp: Boolean,
	            media: 'media',
	            target: Number
	        },
	
	        defaults: {
	            top: 0,
	            bottom: false,
	            offset: 0,
	            animation: '',
	            clsActive: 'uk-active',
	            clsInactive: '',
	            clsFixed: 'uk-sticky-fixed',
	            clsBelow: 'uk-sticky-below',
	            selTarget: '',
	            widthElement: false,
	            showOnUp: false,
	            media: false,
	            target: false
	        },
	
	        computed: {
	
	            selTarget: function selTarget() {
	                return this.$props.selTarget && toJQuery(this.$props.selTarget, this.$el) || this.$el;
	            }
	
	        },
	
	        connected: function connected() {
	
	            this.placeholder = $__default('<div class="uk-sticky-placeholder"></div>');
	            this.widthElement = this.$props.widthElement || this.placeholder;
	
	            if (!this.isActive) {
	                this.hide();
	            }
	        },
	
	        disconnected: function disconnected() {
	
	            if (this.isActive) {
	                this.isActive = false;
	                this.hide();
	                this.$removeClass(this.clsInactive);
	            }
	
	            this.placeholder.remove();
	            this.placeholder = null;
	            this.widthElement = null;
	        },
	
	        ready: function ready() {
	            var this$1 = this;
	
	
	            if (!(this.target && location.hash && window.pageYOffset > 0)) {
	                return;
	            }
	
	            var target = query(location.hash);
	
	            if (target) {
	                requestAnimationFrame(function () {
	
	                    var top = offsetTop(target),
	                        elTop = offsetTop(this$1.$el),
	                        elHeight = this$1.$el[0].offsetHeight;
	
	                    if (elTop + elHeight >= top && elTop <= top + target[0].offsetHeight) {
	                        window.scrollTo(0, top - elHeight - this$1.target - this$1.offset);
	                    }
	
	                });
	            }
	
	        },
	
	        events: [
	
	            {
	                name: 'active',
	
	                handler: function handler() {
	                    this.$addClass(this.selTarget, this.clsActive);
	                    this.$removeClass(this.selTarget, this.clsInactive);
	                }
	
	            },
	
	            {
	                name: 'inactive',
	
	                handler: function handler() {
	                    this.$addClass(this.selTarget, this.clsInactive);
	                    this.$removeClass(this.selTarget, this.clsActive);
	                }
	
	            }
	
	        ],
	
	        update: [
	
	            {
	
	                write: function write() {
	                    var this$1 = this;
	
	
	                    var outerHeight = (this.isActive ? this.placeholder : this.$el)[0].offsetHeight, el;
	
	                    this.placeholder
	                        .css('height', this.$el.css('position') !== 'absolute' ? outerHeight : '')
	                        .css(this.$el.css(['marginTop', 'marginBottom', 'marginLeft', 'marginRight']));
	
	                    if (!document.documentElement.contains(this.placeholder[0])) {
	                        this.placeholder.insertAfter(this.$el).attr('hidden', true);
	                    }
	
	                    this.width = this.widthElement.attr('hidden', null)[0].offsetWidth;
	                    this.widthElement.attr('hidden', !this.isActive);
	
	                    this.topOffset = offsetTop(this.isActive ? this.placeholder : this.$el);
	                    this.bottomOffset = this.topOffset + outerHeight;
	
	                    ['top', 'bottom'].forEach(function (prop) {
	
	                        this$1[prop] = this$1.$props[prop];
	
	                        if (!this$1[prop]) {
	                            return;
	                        }
	
	                        if ($.isNumeric(this$1[prop])) {
	
	                            this$1[prop] = this$1[(prop + "Offset")] + parseFloat(this$1[prop]);
	
	                        } else {
	
	                            if (isString(this$1[prop]) && this$1[prop].match(/^-?\d+vh$/)) {
	                                this$1[prop] = window.innerHeight * parseFloat(this$1[prop]) / 100;
	                            } else {
	
	                                el = this$1[prop] === true ? this$1.$el.parent() : query(this$1[prop], this$1.$el);
	
	                                if (el) {
	                                    this$1[prop] = offsetTop(el) + el[0].offsetHeight;
	                                }
	
	                            }
	
	                        }
	
	                    });
	
	                    this.top = Math.max(parseFloat(this.top), this.topOffset) - this.offset;
	                    this.bottom = this.bottom && this.bottom - outerHeight;
	                    this.inactive = this.media && !window.matchMedia(this.media).matches;
	
	                    if (this.isActive) {
	                        this.update();
	                    }
	                },
	
	                events: ['load', 'resize']
	
	            },
	
	            {
	
	                read: function read() {
	                    this.offsetTop = offsetTop(this.$el);
	                    this.scroll = window.pageYOffset;
	                    this.visible = this.$el.is(':visible');
	                },
	
	                write: function write(ref) {
	                    var this$1 = this;
	                    if ( ref === void 0 ) ref = {};
	                    var dir = ref.dir;
	
	
	                    var scroll = this.scroll;
	
	                    if (scroll < 0 || !this.visible || this.disabled || this.showOnUp && !dir) {
	                        return;
	                    }
	
	                    if (this.inactive
	                        || scroll < this.top
	                        || this.showOnUp && (scroll <= this.top || dir ==='down' || dir === 'up' && !this.isActive && scroll <= this.bottomOffset)
	                    ) {
	
	                        if (!this.isActive) {
	                            return;
	                        }
	
	                        this.isActive = false;
	
	                        if (this.animation && scroll > this.topOffset) {
	                            Animation.cancel(this.$el).then(function () { return Animation.out(this$1.$el, this$1.animation).then(function () { return this$1.hide(); }, noop); });
	                        } else {
	                            this.hide();
	                        }
	
	                    } else if (this.isActive) {
	
	                        this.update();
	
	                    } else if (this.animation) {
	
	                        Animation.cancel(this.$el).then(function () {
	                            this$1.show();
	                            Animation.in(this$1.$el, this$1.animation).then(null, noop);
	                        });
	
	                    } else {
	                        this.show();
	                    }
	
	                },
	
	                events: ['scroll']
	
	            } ],
	
	        methods: {
	
	            show: function show() {
	
	                this.isActive = true;
	                this.update();
	                this.placeholder.attr('hidden', null);
	
	            },
	
	            hide: function hide() {
	
	                if (!this.isActive || this.$hasClass(this.selTarget, this.clsActive)) {
	                    this.$el.trigger('inactive');
	                }
	
	                this.$removeClass(this.clsFixed, this.clsBelow);
	                this.$el.css({position: '', top: '', width: ''});
	                this.placeholder.attr('hidden', true);
	
	            },
	
	            update: function update() {
	                var this$1 = this;
	
	
	                var top = Math.max(0, this.offset), active = this.scroll > this.top;
	
	                if (this.bottom && this.scroll > this.bottom - this.offset) {
	                    top = this.bottom - this.scroll;
	                }
	
	                this.$el.css({
	                    position: 'fixed',
	                    top: (top + "px"),
	                    width: this.width
	                });
	
	                if (this.$hasClass(this.selTarget, this.clsActive)) {
	
	                    if (!active) {
	                        this.$el.trigger('inactive');
	                    }
	
	                } else {
	
	                    if (active) {
	                        this.$el.trigger('active');
	                    }
	                }
	
	                this.$toggleClass(this.clsBelow, this.scroll > this.bottomOffset);
	
	                if (this.showOnUp) {
	                    requestAnimationFrame(function () { return this$1.$addClass(this$1.clsFixed); });
	                } else {
	                    this.$addClass(this.clsFixed);
	                }
	            }
	
	        }
	
	    });
	
	};
	
	var svgs = {};
	var parser = new DOMParser();
	
	var Svg = function (UIkit) {
	
	    UIkit.component('svg', {
	
	        attrs: true,
	
	        props: {
	            id: String,
	            icon: String,
	            src: String,
	            style: String,
	            width: Number,
	            height: Number,
	            ratio: Number,
	            'class': String
	        },
	
	        defaults: {
	            ratio: 1,
	            id: false,
	            exclude: ['src'],
	            'class': ''
	        },
	
	        init: function init() {
	            this.class += ' uk-svg';
	        },
	
	        connected: function connected() {
	            var this$1 = this;
	
	
	            if (!this.icon && this.src && ~this.src.indexOf('#')) {
	
	                var parts = this.src.split('#');
	
	                if (parts.length > 1) {
	                    this.src = parts[0];
	                    this.icon = parts[1];
	                }
	            }
	
	            this.width = this.$props.width;
	            this.height = this.$props.height;
	
	            this.svg = this.getSvg().then(function (doc) { return promise(function (resolve, reject) {
	
	                var svg, el;
	
	                if (!doc) {
	                    reject('SVG not found.');
	                    return;
	                }
	
	                if (!this$1.icon) {
	                    el = doc.documentElement.cloneNode(true);
	                } else {
	                    svg = doc.getElementById(this$1.icon);
	
	                    if (!svg) {
	
	                        // fallback if SVG has no symbols
	                        if (!doc.querySelector('symbol')) {
	                            el = doc.documentElement.cloneNode(true);
	                        }
	
	                    } else {
	
	                        var html = svg.outerHTML;
	
	                        // IE workaround
	                        if (!html) {
	                            var div = document.createElement('div');
	                            div.appendChild(svg.cloneNode(true));
	                            html = div.innerHTML;
	                        }
	
	                        html = html
	                            .replace(/<symbol/g, ("<svg" + (!~html.indexOf('xmlns') ? ' xmlns="http://www.w3.org/2000/svg"' : '')))
	                            .replace(/symbol>/g, 'svg>');
	
	                        el = parser.parseFromString(html, 'image/svg+xml').documentElement;
	                    }
	
	                }
	
	                if (!el) {
	                    reject('SVG not found.');
	                    return;
	                }
	
	                var dimensions = el.getAttribute('viewBox'); // jQuery workaround, el.attr('viewBox')
	
	                if (dimensions) {
	                    dimensions = dimensions.split(' ');
	                    this$1.width = this$1.width || dimensions[2];
	                    this$1.height = this$1.height || dimensions[3];
	                }
	
	                this$1.width *= this$1.ratio;
	                this$1.height *= this$1.ratio;
	
	                for (var prop in this$1.$options.props) {
	                    if (this$1[prop] && !~this$1.exclude.indexOf(prop)) {
	                        el.setAttribute(prop, this$1[prop]);
	                    }
	                }
	
	                if (!this$1.id) {
	                    el.removeAttribute('id');
	                }
	
	                if (this$1.width && !this$1.height) {
	                    el.removeAttribute('height');
	                }
	
	                if (this$1.height && !this$1.width) {
	                    el.removeAttribute('width');
	                }
	
	                var root = this$1.$el[0];
	                if (isVoidElement(root) || root.tagName === 'CANVAS') {
	
	                    this$1.$el.attr({hidden: true, id: null});
	
	                    if (root.nextSibling) {
	
	                        if (el.isEqualNode(root.nextSibling)) {
	                            el = root.nextSibling;
	                        } else {
	                            root.parentNode.insertBefore(el, root.nextSibling);
	                        }
	
	                    } else {
	                        root.parentNode.appendChild(el);
	                    }
	                } else {
	
	                    if (root.lastChild && el.isEqualNode(root.lastChild)) {
	                        el = root.lastChild;
	                    } else {
	                        root.appendChild(el);
	                    }
	
	                }
	
	                resolve(el);
	
	            }); });
	
	        },
	
	        disconnected: function disconnected() {
	
	            if (isVoidElement(this.$el)) {
	                this.$el.attr({hidden: null, id: this.id || null});
	            }
	
	            if (this.svg) {
	                this.svg.then(function (svg) { return svg.parentNode && svg.parentNode.removeChild(svg); }, noop);
	                this.svg = null;
	            }
	        },
	
	        methods: {
	
	            getSvg: function getSvg() {
	                var this$1 = this;
	
	
	                if (!this.src) {
	                    return promise.reject();
	                }
	
	                if (svgs[this.src]) {
	                    return svgs[this.src];
	                }
	
	                svgs[this.src] = promise(function (resolve, reject) {
	
	                    if (this$1.src.lastIndexOf('data:', 0) === 0) {
	                        resolve(this$1.parse(decodeURIComponent(this$1.src.split(',')[1])));
	                    } else {
	
	                        $.ajax(this$1.src, {dataType: 'html'}).then(function (doc) {
	                            resolve(this$1.parse(doc));
	                        }, function () {
	                            reject('SVG not found.');
	                        });
	
	                    }
	
	                });
	
	                return svgs[this.src];
	
	            },
	
	            parse: function parse(doc) {
	                var parsed = parser.parseFromString(doc, 'image/svg+xml');
	                return parsed.documentElement && parsed.documentElement.nodeName === 'svg' ? parsed : null;
	            }
	
	        }
	
	    });
	
	};
	
	var Switcher = function (UIkit) {
	
	    UIkit.component('switcher', {
	
	        mixins: [Togglable],
	
	        args: 'connect',
	
	        props: {
	            connect: String,
	            toggle: String,
	            active: Number,
	            swiping: Boolean
	        },
	
	        defaults: {
	            connect: false,
	            toggle: ' > *',
	            active: 0,
	            swiping: true,
	            cls: 'uk-active',
	            clsContainer: 'uk-switcher',
	            attrItem: 'uk-switcher-item',
	            queued: true
	        },
	
	        computed: {
	
	            connects: function connects() {
	                return query(this.connect, this.$el) || $__default(this.$el.next(("." + (this.clsContainer))));
	            },
	
	            toggles: function toggles() {
	                return $__default(this.toggle, this.$el);
	            }
	
	        },
	
	        events: [
	
	            {
	
	                name: 'click',
	
	                delegate: function delegate() {
	                    return ((this.toggle) + ":not(.uk-disabled)");
	                },
	
	                handler: function handler(e) {
	                    e.preventDefault();
	                    this.show(e.currentTarget);
	                }
	
	            },
	
	            {
	                name: 'click',
	
	                el: function el() {
	                    return this.connects;
	                },
	
	                delegate: function delegate() {
	                    return ("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]");
	                },
	
	                handler: function handler(e) {
	                    e.preventDefault();
	                    this.show($__default(e.currentTarget)[e.currentTarget.hasAttribute(this.attrItem) ? 'attr' : 'data'](this.attrItem));
	                }
	            },
	
	            {
	                name: 'swipeRight swipeLeft',
	
	                filter: function filter() {
	                    return this.swiping;
	                },
	
	                el: function el() {
	                    return this.connects;
	                },
	
	                handler: function handler(e) {
	                    if (!isTouch(e)) {
	                        return;
	                    }
	
	                    e.preventDefault();
	                    if (!window.getSelection().toString()) {
	                        this.show(e.type === 'swipeLeft' ? 'next' : 'previous');
	                    }
	                }
	            }
	
	        ],
	
	        update: function update() {
	
	            this.updateAria(this.connects.children());
	            this.show(toJQuery(this.toggles.filter(("." + (this.cls) + ":first"))) || toJQuery(this.toggles.eq(this.active)) || this.toggles.first());
	
	        },
	
	        methods: {
	
	            show: function show(item) {
	                var this$1 = this;
	
	
	                var length = this.toggles.length,
	                    prev = this.connects.children(("." + (this.cls))).index(),
	                    hasPrev = prev >= 0,
	                    index = getIndex(item, this.toggles, prev),
	                    dir = item === 'previous' ? -1 : 1,
	                    toggle;
	
	                for (var i = 0; i < length; i++, index = (index + dir + length) % length) {
	                    if (!this$1.toggles.eq(index).is('.uk-disabled, [disabled]')) {
	                        toggle = this$1.toggles.eq(index);
	                        break;
	                    }
	                }
	
	                if (!toggle || prev >= 0 && toggle.hasClass(this.cls) || prev === index) {
	                    return;
	                }
	
	                this.toggles.removeClass(this.cls).attr('aria-expanded', false);
	                toggle.addClass(this.cls).attr('aria-expanded', true);
	
	                if (!hasPrev) {
	                    this.toggleNow(this.connects.children((":nth-child(" + (index + 1) + ")")));
	                } else {
	                    this.toggleElement(this.connects.children((":nth-child(" + (prev + 1) + "),:nth-child(" + (index + 1) + ")")));
	                }
	            }
	
	        }
	
	    });
	
	};
	
	var Tab = function (UIkit) {
	
	    UIkit.component('tab', UIkit.components.switcher.extend({
	
	        mixins: [Class],
	
	        name: 'tab',
	
	        props: {
	            media: 'media'
	        },
	
	        defaults: {
	            media: 960,
	            attrItem: 'uk-tab-item'
	        },
	
	        init: function init() {
	
	            var cls = this.$hasClass('uk-tab-left') && 'uk-tab-left' || this.$hasClass('uk-tab-right') && 'uk-tab-right';
	
	            if (cls) {
	                UIkit.toggle(this.$el, {cls: cls, mode: 'media', media: this.media});
	            }
	        }
	
	    }));
	
	};
	
	var Toggle = function (UIkit) {
	
	    UIkit.component('toggle', {
	
	        mixins: [UIkit.mixin.togglable],
	
	        args: 'target',
	
	        props: {
	            href: String,
	            target: null,
	            mode: 'list',
	            media: 'media'
	        },
	
	        defaults: {
	            href: false,
	            target: false,
	            mode: 'click',
	            queued: true,
	            media: false
	        },
	
	        computed: {
	
	            target: function target() {
	                return query(this.$props.target || this.href, this.$el) || this.$el;
	            }
	
	        },
	
	        events: [
	
	            {
	
	                name: (pointerEnter + " " + pointerLeave),
	
	                filter: function filter() {
	                    return ~this.mode.indexOf('hover');
	                },
	
	                handler: function handler(e) {
	                    if (!isTouch(e)) {
	                        this.toggle(("toggle" + (e.type === pointerEnter ? 'show' : 'hide')));
	                    }
	                }
	
	            },
	
	            {
	
	                name: 'click',
	
	                filter: function filter() {
	                    return ~this.mode.indexOf('click') || hasTouch;
	                },
	
	                handler: function handler(e) {
	
	                    if (!isTouch(e) && !~this.mode.indexOf('click')) {
	                        return;
	                    }
	
	                    // TODO better isToggled handling
	                    var link = $__default(e.target).closest('a[href]')[0];
	                    if ($__default(e.target).closest('a[href="#"], button').length
	                        || link && (
	                            this.cls
	                            || !this.target.is(':visible')
	                            || link.hash && this.target.is(link.hash)
	                        )
	                    ) {
	                        e.preventDefault();
	                    }
	
	                    this.toggle();
	                }
	
	            }
	        ],
	
	        update: {
	
	            write: function write() {
	
	                if (!~this.mode.indexOf('media') || !this.media) {
	                    return;
	                }
	
	                var toggled = this.isToggled(this.target);
	                if (window.matchMedia(this.media).matches ? !toggled : toggled) {
	                    this.toggle();
	                }
	
	            },
	
	            events: ['load', 'resize']
	
	        },
	
	        methods: {
	
	            toggle: function toggle(type) {
	                if (!$trigger(this.target, type || 'toggle', [this], true).isDefaultPrevented()) {
	                    this.toggleElement(this.target);
	                }
	            }
	
	        }
	
	    });
	
	};
	
	var Leader = function (UIkit) {
	
	    UIkit.component('leader', {
	
	        mixins: [Class],
	
	        props: {
	            fill: String,
	            media: 'media'
	        },
	
	        defaults: {
	            fill: '',
	            media: false,
	            clsWrapper: 'uk-leader-fill',
	            clsHide: 'uk-leader-hide',
	            attrFill: 'data-fill'
	        },
	
	        computed: {
	
	            fill: function fill() {
	                return this.$props.fill || getCssVar('leader-fill');
	            }
	
	        },
	
	        connected: function connected() {
	            this.wrapper = this.$el.wrapInner(("<span class=\"" + (this.clsWrapper) + "\">")).children().first();
	        },
	
	        disconnected: function disconnected() {
	            this.wrapper.contents().unwrap();
	        },
	
	        update: [
	
	            {
	
	                read: function read() {
	                    var prev = this._width;
	                    this._width = Math.floor(this.$el[0].offsetWidth / 2);
	                    this._changed = prev !== this._width;
	                    this._hide = this.media && !window.matchMedia(this.media).matches;
	                },
	
	                write: function write() {
	
	                    this.wrapper.toggleClass(this.clsHide, this._hide);
	
	                    if (this._changed) {
	                        this.wrapper.attr(this.attrFill, new Array(this._width).join(this.fill));
	                    }
	
	               },
	
	                events: ['load', 'resize']
	
	            }
	        ]
	    });
	
	};
	
	var Video = function (UIkit) {
	
	    UIkit.component('video', {
	
	        props: {
	            automute: Boolean,
	            autoplay: Boolean,
	        },
	
	        defaults: {automute: false, autoplay: true},
	
	        computed: {
	
	            el: function el() {
	                return this.$el[0];
	            }
	
	        },
	
	        ready: function ready() {
	            this.player = new Player(this.el);
	
	            if (this.automute) {
	                this.player.mute();
	            }
	
	        },
	
	        update: {
	
	            write: function write() {
	
	                if (!this.player || !this.autoplay) {
	                    return;
	                }
	
	                if (this.el.offsetHeight === 0 || this.$el.css('visibility') === 'hidden') {
	                    this.player.pause();
	                } else {
	                    this.player.play();
	                }
	
	            },
	
	            events: ['load']
	
	        },
	
	    });
	
	};
	
	var core = function (UIkit) {
	
	    var scroll = 0, started = 0;
	
	    on(window, 'load resize', UIkit.update);
	    on(window, 'scroll', function (e) {
	        e.dir = scroll < window.pageYOffset ? 'down' : 'up';
	        scroll = window.pageYOffset;
	        UIkit.update(e);
	        fastdom.flush();
	    });
	
	    animationstart && on(document, animationstart, function (ref) {
	        var target = ref.target;
	
	        if ((getStyle(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {
	            started++;
	            document.body.style.overflowX = 'hidden';
	            setTimeout(function () {
	                if (!--started) {
	                    document.body.style.overflowX = '';
	                }
	            }, toMs(getStyle(target, 'animationDuration')) + 100);
	        }
	    }, true);
	
	    // core components
	    UIkit.use(Toggle);
	    UIkit.use(Accordion);
	    UIkit.use(Alert);
	    UIkit.use(Video);
	    UIkit.use(Cover);
	    UIkit.use(Drop);
	    UIkit.use(Dropdown);
	    UIkit.use(FormCustom);
	    UIkit.use(HeightMatch);
	    UIkit.use(HeightViewport);
	    UIkit.use(Hover);
	    UIkit.use(Margin);
	    UIkit.use(Gif);
	    UIkit.use(Grid);
	    UIkit.use(Leader);
	    UIkit.use(Modal$1);
	    UIkit.use(Nav);
	    UIkit.use(Navbar);
	    UIkit.use(Offcanvas);
	    UIkit.use(Responsive);
	    UIkit.use(Scroll);
	    UIkit.use(Scrollspy);
	    UIkit.use(ScrollspyNav);
	    UIkit.use(Sticky);
	    UIkit.use(Svg);
	    UIkit.use(Icon);
	    UIkit.use(Switcher);
	    UIkit.use(Tab);
	
	};
	
	UIkit$2.version = '3.0.0-beta.30';
	
	mixin(UIkit$2);
	core(UIkit$2);
	
	function plugin(UIkit) {
	
	    if (plugin.installed) {
	        return;
	    }
	
	    UIkit.component('countdown', {
	
	        mixins: [UIkit.mixin.class],
	
	        attrs: true,
	
	        props: {
	            date: String,
	            clsWrapper: String
	        },
	
	        defaults: {
	            date: '',
	            clsWrapper: '.uk-countdown-%unit%'
	        },
	
	        computed: {
	
	            date: function date() {
	                return Date.parse(this.$props.date);
	            },
	
	            days: function days() {
	                return this.$el.find(this.clsWrapper.replace('%unit%', 'days'));
	            },
	
	            hours: function hours() {
	                return this.$el.find(this.clsWrapper.replace('%unit%', 'hours'));
	            },
	
	            minutes: function minutes() {
	                return this.$el.find(this.clsWrapper.replace('%unit%', 'minutes'));
	            },
	
	            seconds: function seconds() {
	                return this.$el.find(this.clsWrapper.replace('%unit%', 'seconds'));
	            },
	
	            units: function units() {
	                var this$1 = this;
	
	                return ['days', 'hours', 'minutes', 'seconds'].filter(function (unit) { return this$1[unit].length; });
	            }
	
	        },
	
	        connected: function connected() {
	            this.start();
	        },
	
	        disconnected: function disconnected() {
	            var this$1 = this;
	
	            this.stop();
	            this.units.forEach(function (unit) { return this$1[unit].empty(); });
	        },
	
	        update: {
	
	            write: function write() {
	                var this$1 = this;
	
	
	                var timespan = getTimeSpan(this.date);
	
	                if (timespan.total <= 0) {
	
	                    this.stop();
	
	                    timespan.days
	                        = timespan.hours
	                        = timespan.minutes
	                        = timespan.seconds
	                        = 0;
	                }
	
	                this.units.forEach(function (unit) {
	
	                    var digits = String(Math.floor(timespan[unit]));
	
	                    digits = digits.length < 2 ? ("0" + digits) : digits;
	
	                    if (this$1[unit].text() !== digits) {
	                        var el = this$1[unit];
	                        digits = digits.split('');
	
	                        if (digits.length !== el.children().length) {
	                            el.empty().append(digits.map(function () { return '<span></span>'; }).join(''));
	                        }
	
	                        digits.forEach(function (digit, i) { return el[0].childNodes[i].innerText = digit; });
	                    }
	
	                });
	
	            }
	
	        },
	
	        methods: {
	
	            start: function start() {
	                var this$1 = this;
	
	
	                this.stop();
	
	                if (this.date && this.units.length) {
	                    this.$emit();
	                    this.timer = setInterval(function () { return this$1.$emit(); }, 1000);
	                }
	
	            },
	
	            stop: function stop() {
	
	                if (this.timer) {
	                    clearInterval(this.timer);
	                    this.timer = null;
	                }
	
	            }
	
	        }
	
	    });
	
	    function getTimeSpan(date) {
	
	        var total = date - Date.now();
	
	        return {
	            total: total,
	            seconds: total / 1000 % 60,
	            minutes: total / 1000 / 60 % 60,
	            hours: total / 1000 / 60 / 60 % 24,
	            days: total / 1000 / 60 / 60 / 24
	        };
	    }
	
	}
	
	if (false) {
	    window.UIkit.use(plugin);
	}
	
	function plugin$2(UIkit) {
	
	    if (plugin$2.installed) {
	        return;
	    }
	
	    var ref = UIkit.util;
	    var $$$1 = ref.$;
	    var doc = ref.doc;
	    var fastdom = ref.fastdom;
	    var getIndex = ref.getIndex;
	    var noop = ref.noop;
	    var on = ref.on;
	    var off = ref.off;
	    var pointerDown = ref.pointerDown;
	    var pointerMove = ref.pointerMove;
	    var pointerUp = ref.pointerUp;
	    var preventClick = ref.preventClick;
	    var promise = ref.promise;
	    var requestAnimationFrame = ref.requestAnimationFrame;
	    var Transition = ref.Transition;
	
	    UIkit.mixin.slideshow = {
	
	        attrs: true,
	
	        props: {
	            autoplay: Number,
	            animation: String,
	            transition: String,
	            duration: Number
	        },
	
	        defaults: {
	            autoplay: 0,
	            animation: 'slide',
	            transition: 'linear',
	            duration: 400,
	            index: 0,
	            stack: [],
	            threshold: 10,
	            percent: 0,
	            clsActive: 'uk-active'
	        },
	
	        computed: {
	
	            slides: function slides() {
	                return this.list.children(("." + (this.clsItem)));
	            },
	
	            forwardDuration: function forwardDuration() {
	                return this.duration / 4;
	            }
	
	        },
	
	        init: function init() {
	            var this$1 = this;
	
	            ['start', 'move', 'end'].forEach(function (key) {
	                var fn = this$1[key];
	                this$1[key] = function (e) {
	
	                    e = e.originalEvent || e;
	
	                    this$1.prevPos = this$1.pos;
	                    this$1.pos = (e.touches && e.touches[0] || e).pageX;
	
	                    fn(e);
	                };
	            });
	        },
	
	        connected: function connected() {
	            this.startAutoplay();
	        },
	
	        events: [
	
	            {
	
	                name: 'click',
	
	                delegate: function delegate() {
	                    return ("[" + (this.attrItem) + "]");
	                },
	
	                handler: function handler(e) {
	                    e.preventDefault();
	                    this.show($$$1(e.currentTarget).blur().attr(this.attrItem));
	                }
	
	            },
	
	            {
	
	                name: pointerDown,
	
	                delegate: function delegate() {
	                    return ("." + (this.clsItem));
	                },
	
	                handler: 'start'
	            },
	
	            {
	
	                name: pointerDown,
	                handler: 'stopAutoplay'
	            },
	
	            {
	                name: 'mouseenter',
	
	                filter: function filter() {
	                    return this.autoplay;
	                },
	
	                handler: function handler() {
	                    this.isHovering = true;
	                }
	            },
	
	            {
	                name: 'mouseleave',
	
	                filter: function filter() {
	                    return this.autoplay;
	                },
	
	                handler: function handler() {
	                    this.isHovering = false;
	                }
	            } ],
	
	        methods: {
	
	            start: function start(e) {
	
	                if (e.button && e.button !== 0 || this.slides.length < 2) {
	                    return;
	                }
	
	                e.preventDefault();
	
	                var percent = 0;
	                if (this.stack.length) {
	
	                    this.percent = this._animation.percent();
	
	                    var dir = this._animation.dir;
	                    percent = this.percent * dir;
	
	                    this.stack.splice(0, this.stack.length);
	
	                    this._animation.cancel();
	                    this._animation.translate(Math.abs(percent));
	
	                    this.index = this.getIndex(this.index - dir);
	                    this.touching = true;
	                }
	
	                on(doc, pointerMove, this.move, true);
	                on(doc, pointerUp, this.end, true);
	
	                var el = this.slides.eq(this.index);
	
	                this.touch = {
	                    el: el,
	                    start: this.pos + (percent ? el.outerWidth() * percent : 0)
	                };
	
	            },
	
	            move: function move(e) {
	                var this$1 = this;
	
	
	                e.preventDefault();
	
	                var ref = this.touch;
	                var start = ref.start;
	                var el = ref.el;
	
	                if (this.pos === this.prevPos || (!this.touching && Math.abs(start - this.pos) < this.threshold)) {
	                    return;
	                }
	
	                this.touching = true;
	
	                var percent = (this.pos - start) / el.outerWidth();
	
	                if (this.percent === percent) {
	                    return;
	                }
	
	                var changed = trunc(this.percent) !== trunc(percent),
	                    index = this.getIndex(this.index - trunc(percent)),
	                    current = this.slides.eq(index),
	                    dir = percent < 0 ? 1 : -1,
	                    nextIndex = getIndex(percent < 0 ? 'next' : 'previous', this.slides, index),
	                    next = this.slides.eq(nextIndex);
	
	                this.slides.each(function (i, el) { return this$1.$toggleClass(el, this$1.clsActive, i === index || i === nextIndex); });
	
	                if (changed && this._animation) {
	                    this._animation.reset();
	                }
	
	                this._animation = new Transitioner(this.animation, this.transition, current, next, dir, noop);
	                this._animation.translate(Math.abs(percent % 1));
	
	                this.percent = percent;
	
	                UIkit.update(null, current);
	                UIkit.update(null, next);
	            },
	
	            end: function end(e) {
	
	                e.preventDefault();
	
	                off(doc, pointerMove, this.move, true);
	                off(doc, pointerUp, this.end, true);
	
	                if (this.touching) {
	
	                    var percent = this.percent;
	
	                    this.percent = Math.abs(this.percent) % 1;
	                    this.index = this.getIndex(this.index - trunc(percent));
	
	                    if (this.percent < 0.2) {
	                        this.index = this.getIndex(percent > 0 ? 'previous' : 'next');
	                        this.percent = 1 - this.percent;
	                        percent *= -1;
	                    }
	
	                    this.show(percent > 0 ? 'previous': 'next', true);
	
	                    preventClick();
	
	                }
	
	                this.pos
	                    = this.prevPos
	                    = this.touch
	                    = this.touching
	                    = this.percent
	                    = null;
	
	            },
	
	            show: function show(index, force) {
	                var this$1 = this;
	                if ( force === void 0 ) force = false;
	
	
	                if (!force && this.touch) {
	                    return;
	                }
	
	                this.stack[force ? 'unshift' : 'push'](index);
	
	                if (!force && this.stack.length > 1) {
	
	                    if (this.stack.length === 2) {
	                        this._animation.forward(this.forwardDuration);
	                    }
	
	                    return;
	                }
	
	                var hasPrev = this.slides.hasClass('uk-active'),
	                    dir = index === 'next'
	                            ? 1
	                            : index === 'previous'
	                                ? -1
	                                : index < this.index
	                                    ? -1
	                                    : 1;
	
	                index = this.getIndex(index);
	
	                if (hasPrev && index === this.index) {
	                    this.stack[force ? 'shift' : 'pop']();
	                    return;
	                }
	
	                var prev = hasPrev && this.slides.eq(this.index),
	                    next = this.slides.eq(index);
	
	                this.$el.trigger('beforeitemshow', [this, next]);
	                prev && this.$el.trigger('beforeitemhide', [this, prev]);
	
	                this.index = index;
	
	                this.$addClass(next, this.clsActive);
	
	                this._animation = new Transitioner(!prev ? 'scale' : this.animation, this.transition, prev || next, next, dir, function () {
	
	                    prev && this$1.$removeClass(prev, this$1.clsActive);
	
	                    this$1.stack.shift();
	                    if (this$1.stack.length) {
	                        requestAnimationFrame(function () { return this$1.show(this$1.stack.shift(), true); });
	                    } else {
	                        this$1._animation = null;
	                    }
	
	                    this$1.$el.trigger('itemshown', [this$1, next]);
	                    UIkit.update(null, next);
	
	                    if (prev) {
	                        this$1.$el.trigger('itemhidden', [this$1, prev]);
	                        UIkit.update(null, prev);
	                    }
	
	                });
	
	                this._animation.show(this.stack.length > 1 ? this.forwardDuration : this.duration, this.percent);
	
	                this.$el.trigger('itemshow', [this, next]);
	
	                if (prev) {
	                    this.$el.trigger('itemhide', [this, prev]);
	                    UIkit.update(null, prev);
	                }
	
	                UIkit.update(null, next);
	                fastdom.flush(); // iOS 10+ will honor the video.play only if called from a gesture handler
	            },
	
	            getIndex: function getIndex$1(index) {
	                if ( index === void 0 ) index = this.index;
	
	                return getIndex(index, this.slides, this.index);
	            },
	
	            startAutoplay: function startAutoplay() {
	                var this$1 = this;
	
	
	                this.stopAutoplay();
	
	                if (this.autoplay) {
	                    this.interval = setInterval(function () {!this$1.isHovering && this$1.show('next');}, this.autoplay);
	                }
	
	            },
	
	            stopAutoplay: function stopAutoplay() {
	                if (this.interval) {
	                    clearInterval(this.interval);
	                }
	            }
	
	        }
	
	    };
	
	    var diff = 0.2;
	    var Animations = {
	
	        fade: {
	
	            show: function show() {
	                return [
	                    {opacity: 0},
	                    {opacity: 1}
	                ];
	            },
	
	            percent: function percent(current) {
	                return 1 - current.css('opacity');
	            },
	
	            translate: function translate(percent) {
	                return [
	                    {opacity: 1 - percent},
	                    {opacity: percent}
	                ];
	            }
	
	        },
	
	        slide: {
	
	            show: function show(dir) {
	                return [
	                    {transform: ("translate3d(" + (dir * -100) + "%, 0, 0)")},
	                    {transform: 'translate3d(0, 0, 0)'}
	                ];
	            },
	
	            percent: function percent(current) {
	                return Math.abs(current.css('transform').split(',')[4] / current.outerWidth());
	            },
	
	            translate: function translate(percent, dir) {
	                return [
	                    {transform: ("translate3d(" + (dir * -100 * percent) + "%, 0, 0)")},
	                    {transform: ("translate3d(" + (dir * 100 * (1 - percent)) + "%, 0, 0)")}
	                ];
	            }
	
	        },
	
	        scale: {
	
	            show: function show() {
	                return [
	                    {opacity: 0, transform: ("scale3d(" + (1 - diff) + ", " + (1 - diff) + ", 1)")},
	                    {opacity: 1, transform: 'scale3d(1, 1, 1)'}
	                ];
	            },
	
	            percent: function percent(current) {
	                return 1 - current.css('opacity');
	            },
	
	            translate: function translate(percent) {
	                var scale1 = 1 - diff * percent,
	                    scale2 = 1 - diff + diff * percent;
	
	                return [
	                    {opacity: 1 - percent, transform: ("scale3d(" + scale1 + ", " + scale1 + ", 1)")},
	                    {opacity: percent, transform: ("scale3d(" + scale2 + ", " + scale2 + ", 1)")}
	                ];
	            }
	
	        },
	
	        swipe: {
	
	            show: function show(dir) {
	
	                if (dir < 0) {
	                    return [
	                        {opacity: 1, transform: "translate3d(100%, 0, 0)", zIndex: 0},
	                        {opacity: 1, transform: "scale3d(1, 1, 1) translate3d(0, 0, 0)", zIndex: -1} ];
	                } else {
	                    return [
	                        {opacity: 0.3, transform: ("scale3d(" + (1 - diff) + ", " + (1 - diff) + ", 1) translate3d(-20%, 0, 0)"), zIndex: -1},
	                        {opacity: 1, transform: 'translate3d(0, 0, 0)', zIndex: 0}
	                    ];
	                }
	
	
	            },
	
	            percent: function percent(current, next, dir) {
	
	                var el = dir < 0 ? current : next,
	                    percent = Math.abs(el.css('transform').split(',')[4] / el.outerWidth());
	
	                return dir < 0 ? percent : 1 - percent;
	            },
	
	            translate: function translate(percent, dir) {
	                var scale;
	
	                if (dir < 0) {
	                    scale = 1 - diff * (1 - percent);
	                    return [
	                        {opacity: 1, transform: ("translate3d(" + (100 * percent) + "%, 0, 0)"), zIndex: 0},
	                        {opacity: 0.3 + 0.7 * percent, transform: ("scale3d(" + scale + ", " + scale + ", 1) translate3d(" + (-20 * (1 - percent)) + "%, 0, 0)"), zIndex: -1} ];
	                } else {
	                    scale = 1 - diff * percent;
	                    return [
	                        {opacity: 1 - 0.7 * percent, transform: ("scale3d(" + scale + ", " + scale + ", 1) translate3d(" + (-20 * percent) + "%, 0, 0)"), zIndex: -1},
	                        {opacity: 1, transform: ("translate3d(" + (100 * (1 - percent)) + "%, 0, 0)"), zIndex: 0}
	                    ];
	                }
	
	            }
	
	        },
	
	    };
	
	    function Transitioner (animation, transition, current, next, dir, cb) {
	
	        animation = animation in Animations ? Animations[animation] : Animations.slide;
	
	        var props = animation.show(dir);
	
	        return {
	
	            dir: dir,
	            current: current,
	            next: next,
	
	            show: function show(duration, percent) {
	                var this$1 = this;
	                if ( percent === void 0 ) percent = 0;
	
	
	                duration -= Math.round(duration * percent);
	
	                this.translate(percent);
	
	                return promise.all([
	                    Transition.start(current, props[0], duration, transition),
	                    Transition.start(next, props[1], duration, transition)
	                ]).then(function () {
	                    this$1.reset();
	                    cb();
	                }, noop);
	            },
	
	            stop: function stop() {
	                return promise.all([
	                    Transition.stop(next),
	                    Transition.stop(current)
	                ]);
	            },
	
	            cancel: function cancel() {
	                return promise.all([
	                    Transition.cancel(next),
	                    Transition.cancel(current)
	                ]);
	            },
	
	            reset: function reset() {
	                for (var prop in props[0]) {
	                    $$$1([next[0], current[0]]).css(prop, '');
	                }
	            },
	
	            forward: function forward(duration) {
	                var this$1 = this;
	
	
	                var percent = this.percent();
	
	                return promise.all([
	                    Transition.cancel(next),
	                    Transition.cancel(current)
	                ]).then(function () { return this$1.show(duration, percent); });
	
	            },
	
	            translate: function translate(percent) {
	
	                var props = animation.translate(percent, dir);
	                current.css(props[0]);
	                next.css(props[1]);
	
	            },
	
	            percent: function percent() {
	                return animation.percent(current, next, dir);
	            }
	
	        }
	
	    }
	
	    // polyfill for Math.trunc (IE)
	    function trunc(x) {
	        return ~~x;
	    }
	
	}
	
	function plugin$1(UIkit) {
	
	    if (plugin$1.installed) {
	        return;
	    }
	
	    UIkit.use(plugin$2);
	
	    var mixin = UIkit.mixin;
	    var util = UIkit.util;
	    var $$$1 = util.$;
	    var $trigger = util.$trigger;
	    var Animation = util.Animation;
	    var ajax$$1 = util.ajax;
	    var assign = util.assign;
	    var doc = util.doc;
	    var docElement = util.docElement;
	    var getData = util.getData;
	    var getImage = util.getImage;
	    var pointerDown = util.pointerDown;
	    var pointerMove = util.pointerMove;
	    var Transition = util.Transition;
	
	    UIkit.component('lightbox', {
	
	        attrs: true,
	
	        props: {
	            animation: String,
	            toggle: String
	        },
	
	        defaults: {
	            animation: undefined,
	            toggle: 'a'
	        },
	
	        computed: {
	
	            toggles: function toggles() {
	                var this$1 = this;
	
	                var toggles = $$$1(this.toggle, this.$el);
	
	                this._changed = !this._toggles
	                    || toggles.length !== this._toggles.length
	                    || toggles.toArray().some(function (el, i) { return el !== this$1._toggles.get(i); });
	
	                return this._toggles = toggles;
	            }
	
	        },
	
	        disconnected: function disconnected() {
	
	            if (this.panel) {
	                this.panel.$destroy(true);
	                this.panel = null;
	            }
	
	        },
	
	        events: [
	
	            {
	
	                name: 'click',
	
	                delegate: function delegate() {
	                    return ((this.toggle) + ":not(.uk-disabled)");
	                },
	
	                handler: function handler(e) {
	                    e.preventDefault();
	                    this.show(this.toggles.index($$$1(e.currentTarget).blur()));
	                }
	
	            }
	
	        ],
	
	        update: function update() {
	
	            if (this.panel && this.animation) {
	                this.panel.$props.animation = this.animation;
	                this.panel.$emit();
	            }
	
	            if (!this.toggles.length || !this._changed || !this.panel) {
	                return;
	            }
	
	            this.panel.$destroy(true);
	            this._init();
	
	        },
	
	        methods: {
	
	            _init: function _init() {
	                return this.panel = this.panel || UIkit.lightboxPanel({
	                        animation: this.animation,
	                        items: this.toggles.toArray().reduce(function (items, el) {
	                            items.push(['href', 'caption', 'type'].reduce(function (obj, attr) {
	                                obj[attr === 'href' ? 'source' : attr] = getData(el, attr);
	                                return obj;
	                            }, {}));
	                            return items;
	                        }, [])
	                    });
	            },
	
	            show: function show(index) {
	
	                if (!this.panel) {
	                    this._init();
	                }
	
	                return this.panel.show(index);
	
	            },
	
	            hide: function hide() {
	
	                return this.panel && this.panel.hide();
	
	            }
	
	        }
	
	    });
	
	    UIkit.component('lightbox-panel', {
	
	        mixins: [mixin.togglable, mixin.slideshow],
	
	        functional: true,
	
	        defaults: {
	            preload: 1,
	            delayControls: 3000,
	            items: [],
	            cls: 'uk-open',
	            clsPage: 'uk-lightbox-page',
	            clsItem: 'uk-lightbox-item',
	            attrItem: 'uk-lightbox-item',
	            template: " <div class=\"uk-lightbox uk-overflow-hidden\"> <ul class=\"uk-lightbox-items\"></ul> <div class=\"uk-lightbox-toolbar uk-position-top uk-text-right\"> <button class=\"uk-lightbox-toolbar-icon uk-close-large\" type=\"button\" uk-close uk-toggle=\"!.uk-lightbox\"></button> </div> <a class=\"uk-lightbox-button uk-position-center-left uk-position-medium\" href=\"#\" uk-slidenav-previous uk-lightbox-item=\"previous\"></a> <a class=\"uk-lightbox-button uk-position-center-right uk-position-medium\" href=\"#\" uk-slidenav-next uk-lightbox-item=\"next\"></a> <div class=\"uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center\"></div> </div>"
	        },
	
	        computed: {
	
	            container: function container() {
	                return $$$1(this.$props.container === true && UIkit.container || this.$props.container || UIkit.container);
	            }
	
	        },
	
	        created: function created() {
	            var this$1 = this;
	
	
	            this.$mount($$$1(this.template).appendTo(this.container)[0]);
	
	            this.list = this.$el.find('.uk-lightbox-items');
	            this.toolbars = this.$el.find('.uk-lightbox-toolbar');
	            this.nav = this.$el.find('a[uk-lightbox-item]');
	            this.caption = this.$el.find('.uk-lightbox-caption');
	
	            this.items.forEach(function (el, i) { return this$1.list.append(("<li class=\"" + (this$1.clsItem) + " item-" + i + "\"></li>")); });
	
	        },
	
	        events: [
	
	            {
	
	                name: (pointerMove + " " + pointerDown + " keydown"),
	
	                handler: 'showControls'
	
	            },
	
	            {
	
	                name: 'click',
	
	                self: true,
	
	                handler: function handler(e) {
	                    e.preventDefault();
	                    this.hide();
	                }
	
	            },
	
	            {
	
	                name: 'click',
	
	                self: true,
	
	                delegate: function delegate() {
	                    return ("." + (this.clsItem));
	                },
	
	                handler: function handler(e) {
	                    e.preventDefault();
	                    this.hide();
	                }
	
	            },
	
	            {
	
	                name: 'show',
	
	                self: true,
	
	                handler: function handler() {
	
	                    this.$addClass(docElement, this.clsPage);
	
	                }
	            },
	
	            {
	
	                name: 'shown',
	
	                self: true,
	
	                handler: function handler() {
	
	                    this.$addClass(this.caption, 'uk-animation-slide-bottom');
	                    this.toolbars.attr('hidden', true);
	                    this.nav.attr('hidden', true);
	                    this.showControls();
	
	                }
	            },
	
	            {
	
	                name: 'hide',
	
	                self: true,
	
	                handler: function handler() {
	
	                    this.$removeClass(this.caption, 'uk-animation-slide-bottom');
	                    this.toolbars.attr('hidden', true);
	                    this.nav.attr('hidden', true);
	
	                }
	            },
	
	            {
	
	                name: 'hidden',
	
	                self: true,
	
	                handler: function handler() {
	
	                    this.$removeClass(docElement, this.clsPage);
	
	                }
	            },
	
	            {
	
	                name: 'keydown',
	
	                el: function el() {
	                    return doc;
	                },
	
	                handler: function handler(e) {
	
	                    if (!this.isToggled(this.$el)) {
	                        return;
	                    }
	
	                    switch (e.keyCode) {
	                        case 27:
	                            this.hide();
	                            break;
	                        case 37:
	                            this.show('previous');
	                            break;
	                        case 39:
	                            this.show('next');
	                            break;
	                    }
	                }
	            },
	
	            {
	
	                name: 'toggle',
	
	                handler: function handler(e) {
	                    e.preventDefault();
	                    this.toggle();
	                }
	
	            },
	
	            {
	
	                name: 'beforeitemshow',
	
	                self: true,
	
	                handler: function handler() {
	                    if (!this.isToggled()) {
	                        this.toggleNow(this.$el, true);
	                    }
	                }
	
	            },
	
	            {
	
	                name: 'itemshow',
	
	                self: true,
	
	                handler: function handler() {
	                    var this$1 = this;
	
	
	                    var caption = this.getItem().caption;
	                    this.caption.toggle(!!caption).html(caption);
	
	                    for (var i = 0; i <= this.preload; i++) {
	                        this$1.loadItem(this$1.getIndex(this$1.index + i));
	                        this$1.loadItem(this$1.getIndex(this$1.index - i));
	                    }
	
	                }
	
	            },
	
	            {
	
	                name: 'itemload',
	
	                handler: function handler(_, item) {
	                    var this$1 = this;
	
	
	                    var source = item.source;
	                    var type = item.type;
	                    var matches;
	
	                    this.setItem(item, '<span uk-spinner></span>');
	
	                    if (!source) {
	                        return;
	                    }
	
	                    // Image
	                    if (type === 'image' || source.match(/\.(jp(e)?g|png|gif|svg)$/i)) {
	
	                        getImage(source).then(
	                            function (img) { return this$1.setItem(item, ("<img width=\"" + (img.width) + "\" height=\"" + (img.height) + "\" src=\"" + source + "\">")); },
	                            function () { return this$1.setError(item); }
	                        );
	
	                    // Video
	                    } else if (type === 'video' || source.match(/\.(mp4|webm|ogv)$/i)) {
	
	                        var video = $$$1('<video controls playsinline uk-video></video>')
	                            .on('loadedmetadata', function () { return this$1.setItem(item, video.attr({width: video[0].videoWidth, height: video[0].videoHeight})); })
	                            .on('error', function () { return this$1.setError(item); })
	                            .attr('src', source);
	
	                    // Iframe
	                    } else if (type === 'iframe') {
	
	                        this.setItem(item, ("<iframe class=\"uk-lightbox-iframe\" src=\"" + source + "\" frameborder=\"0\" allowfullscreen></iframe>"));
	
	                    // Youtube
	                    } else if (matches = source.match(/\/\/.*?youtube\.[a-z]+\/watch\?v=([^&\s]+)/) || source.match(/youtu\.be\/(.*)/)) {
	
	                        var id = matches[1],
	                            setIframe = function (width, height) {
	                                if ( width === void 0 ) width = 640;
	                                if ( height === void 0 ) height = 450;
	
	                                return this$1.setItem(item, getIframe(("//www.youtube.com/embed/" + id), width, height));
	                        };
	
	                        getImage(("//img.youtube.com/vi/" + id + "/maxresdefault.jpg")).then(
	                            function (img) {
	                                //youtube default 404 thumb, fall back to lowres
	                                if (img.width === 120 && img.height === 90) {
	                                    getImage(("//img.youtube.com/vi/" + id + "/0.jpg")).then(
	                                        function (img) { return setIframe(img.width, img.height); },
	                                        setIframe
	                                    );
	                                } else {
	                                    setIframe(img.width, img.height);
	                                }
	                            },
	                            setIframe
	                        );
	
	                    // Vimeo
	                    } else if (matches = source.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) {
	
	                        ajax$$1({type: 'GET', url: ("//vimeo.com/api/oembed.json?url=" + (encodeURI(source))), jsonp: 'callback', dataType: 'jsonp'})
	                            .then(function (ref) {
	                                var height = ref.height;
	                                var width = ref.width;
	
	                                return this$1.setItem(item, getIframe(("//player.vimeo.com/video/" + (matches[2])), width, height));
	                        });
	
	                    } else {
	
	                        return;
	
	                    }
	
	                    return true;
	
	                }
	
	            }
	
	        ],
	
	        methods: {
	
	            toggle: function toggle() {
	                return this.isToggled() ? this.hide() : this.show();
	            },
	
	            hide: function hide() {
	
	                if (this.isToggled()) {
	                    this.toggleNow(this.$el, false);
	                }
	
	                this.slides
	                    .removeClass(this.clsActive)
	                    .each(function (_, el) { return Transition.stop(el); });
	
	                delete this.index;
	                delete this.percent;
	                delete this._animation;
	
	            },
	
	            loadItem: function loadItem(index) {
	                if ( index === void 0 ) index = this.index;
	
	
	                var item = this.getItem(index);
	
	                if (item.content) {
	                    return;
	                }
	
	                if (!$trigger(this.$el, 'itemload', [item], true).result) {
	                    this.setError(item);
	                }
	            },
	
	            getItem: function getItem(index) {
	                if ( index === void 0 ) index = this.index;
	
	                return this.items[index] || {};
	            },
	
	            setItem: function setItem(item, content) {
	                assign(item, {content: content});
	                var el = this.slides.eq(this.items.indexOf(item)).html(content);
	                this.$el.trigger('itemloaded', [this, el]);
	                UIkit.update(null, el);
	            },
	
	            setError: function setError(item) {
	                this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
	            },
	
	            showControls: function showControls() {
	
	                clearTimeout(this.controlsTimer);
	                this.controlsTimer = setTimeout(this.hideControls, this.delayControls);
	
	                if (!this.toolbars.attr('hidden')) {
	                    return;
	                }
	
	                animate(this.toolbars.eq(0), 'uk-animation-slide-top');
	                animate(this.toolbars.eq(1), 'uk-animation-slide-bottom');
	
	                this.nav.attr('hidden', this.items.length <= 1);
	
	                if (this.items.length > 1) {
	                    animate(this.nav, 'uk-animation-fade');
	                }
	
	            },
	
	            hideControls: function hideControls() {
	
	                if (this.toolbars.attr('hidden')) {
	                    return;
	                }
	
	                animate(this.toolbars.eq(0), 'uk-animation-slide-top', 'out');
	                animate(this.toolbars.eq(1), 'uk-animation-slide-bottom', 'out');
	
	                if (this.items.length > 1) {
	                    animate(this.nav, 'uk-animation-fade', 'out');
	                }
	
	            }
	
	        }
	
	    });
	
	    function animate(el, animation, dir) {
	        if ( dir === void 0 ) dir = 'in';
	
	        el.each(function (i) { return Animation[dir](el.eq(i).attr('hidden', false), animation).then(function () { dir === 'out' && el.eq(i).attr('hidden', true);}); });
	    }
	
	    function getIframe(src, width, height) {
	        return ("<iframe src=\"" + src + "\" width=\"" + width + "\" height=\"" + height + "\" style=\"max-width: 100%; box-sizing: border-box;\" uk-video uk-responsive></iframe>");
	    }
	
	}
	
	if (false) {
	    window.UIkit.use(plugin$1);
	}
	
	function plugin$3(UIkit) {
	
	    if (plugin$3.installed) {
	        return;
	    }
	
	    var ref = UIkit.util;
	    var $$$1 = ref.$;
	    var each$$1 = ref.each;
	    var pointerEnter = ref.pointerEnter;
	    var pointerLeave = ref.pointerLeave;
	    var Transition = ref.Transition;
	    var containers = {};
	
	    UIkit.component('notification', {
	
	        functional: true,
	
	        args: ['message', 'status'],
	
	        defaults: {
	            message: '',
	            status: '',
	            timeout: 5000,
	            group: null,
	            pos: 'top-center',
	            onClose: null,
	            clsClose: 'uk-notification-close',
	            clsMsg: 'uk-notification-message'
	        },
	
	        created: function created() {
	
	            if (!containers[this.pos]) {
	                containers[this.pos] = $$$1(("<div class=\"uk-notification uk-notification-" + (this.pos) + "\"></div>")).appendTo(UIkit.container);
	            }
	
	            this.$mount($$$1(
	                ("<div class=\"" + (this.clsMsg) + (this.status ? (" " + (this.clsMsg) + "-" + (this.status)) : '') + "\"> <a href=\"#\" class=\"" + (this.clsClose) + "\" data-uk-close></a> <div>" + (this.message) + "</div> </div>")
	            ).appendTo(containers[this.pos].show())[0]);
	
	        },
	
	        ready: function ready() {
	            var this$1 = this;
	
	
	            var marginBottom = parseInt(this.$el.css('margin-bottom'), 10);
	
	            Transition.start(
	                this.$el.css({opacity: 0, marginTop: -1 * this.$el.outerHeight(), marginBottom: 0}),
	                {opacity: 1, marginTop: 0, marginBottom: marginBottom}
	            ).then(function () {
	                if (this$1.timeout) {
	                    this$1.timer = setTimeout(this$1.close, this$1.timeout);
	                }
	            });
	
	        },
	
	        events: ( obj = {
	
	            click: function click(e) {
	                if ($$$1(e.target).closest('a[href="#"]').length) {
	                    e.preventDefault();
	                }
	                this.close();
	            }
	
	        }, obj[pointerEnter] = function () {
	                if (this.timer) {
	                    clearTimeout(this.timer);
	                }
	            }, obj[pointerLeave] = function () {
	                if (this.timeout) {
	                    this.timer = setTimeout(this.close, this.timeout);
	                }
	            }, obj ),
	
	        methods: {
	
	            close: function close(immediate) {
	                var this$1 = this;
	
	
	                var remove = function () {
	
	                    this$1.onClose && this$1.onClose();
	                    this$1.$el.trigger('close', [this$1]).remove();
	
	                    if (!containers[this$1.pos].children().length) {
	                        containers[this$1.pos].hide();
	                    }
	
	                };
	
	                if (this.timer) {
	                    clearTimeout(this.timer);
	                }
	
	                if (immediate) {
	                    remove();
	                } else {
	                    Transition.start(this.$el, {opacity: 0, marginTop: -1 * this.$el.outerHeight(), marginBottom: 0}).then(remove);
	                }
	            }
	
	        }
	
	    });
	    var obj;
	
	    UIkit.notification.closeAll = function (group, immediate) {
	        each$$1(UIkit.instances, function (_, component) {
	            if (component.$options.name === 'notification' && (!group || group === component.group)) {
	                component.close(immediate);
	            }
	        });
	    };
	
	}
	
	if (false) {
	    window.UIkit.use(plugin$3);
	}
	
	function plugin$4(UIkit) {
	
	    if (plugin$4.installed) {
	        return;
	    }
	
	    var mixin = UIkit.mixin;
	    var util = UIkit.util;
	    var $$$1 = util.$;
	    var assign = util.assign;
	    var doc = util.docElement;
	    var docHeight = util.docHeight;
	    var fastdom = util.fastdom;
	    var getDimensions = util.getDimensions;
	    var isWithin = util.isWithin;
	    var offset = util.offset;
	    var offsetTop = util.offsetTop;
	    var pointerDown = util.pointerDown;
	    var pointerMove = util.pointerMove;
	    var pointerUp = util.pointerUp;
	    var preventClick = util.preventClick;
	    var promise = util.promise;
	    var win = util.win;
	
	    UIkit.component('sortable', {
	
	        mixins: [mixin.class],
	
	        props: {
	            group: String,
	            animation: Number,
	            threshold: Number,
	            clsItem: String,
	            clsPlaceholder: String,
	            clsDrag: String,
	            clsDragState: String,
	            clsBase: String,
	            clsNoDrag: String,
	            clsEmpty: String,
	            clsCustom: String,
	            handle: String
	        },
	
	        defaults: {
	            group: false,
	            animation: 150,
	            threshold: 5,
	            clsItem: 'uk-sortable-item',
	            clsPlaceholder: 'uk-sortable-placeholder',
	            clsDrag: 'uk-sortable-drag',
	            clsDragState: 'uk-drag',
	            clsBase: 'uk-sortable',
	            clsNoDrag: 'uk-sortable-nodrag',
	            clsEmpty: 'uk-sortable-empty',
	            clsCustom: '',
	            handle: false
	        },
	
	        init: function init() {
	            var this$1 = this;
	
	            ['init', 'start', 'move', 'end'].forEach(function (key) {
	                var fn = this$1[key];
	                this$1[key] = function (e) {
	                    e = e.originalEvent || e;
	                    this$1.scrollY = window.scrollY;
	                    var ref = e.touches && e.touches[0] || e;
	                    var x = ref.pageX;
	                    var y = ref.pageY;
	                    this$1.pos = {x: x, y: y};
	
	                    fn(e);
	                };
	            });
	        },
	
	        events: ( obj = {}, obj[pointerDown] = 'init', obj ),
	
	        update: {
	
	            write: function write() {
	                var this$1 = this;
	
	
	                if (this.clsEmpty) {
	                    this.$toggleClass(this.clsEmpty, !this.$el.children().length);
	                }
	
	                if (!this.drag) {
	                    return;
	                }
	
	                offset(this.drag, {top: this.pos.y + this.origin.top, left: this.pos.x + this.origin.left});
	
	                var top = offsetTop(this.drag), bottom = top + this.drag[0].offsetHeight;
	
	                if (top > 0 && top < this.scrollY) {
	                    setTimeout(function () { return win.scrollTop(this$1.scrollY - 5); }, 5);
	                } else if (bottom < docHeight() && bottom > window.innerHeight + this.scrollY) {
	                    setTimeout(function () { return win.scrollTop(this$1.scrollY + 5); }, 5);
	                }
	
	            }
	
	        },
	
	        methods: {
	
	            init: function init(e) {
	
	                var target = $$$1(e.target), placeholder = this.$el.children().filter(function (i, el) { return isWithin(e.target, el); });
	
	                if (!placeholder.length
	                    || target.is(':input')
	                    || this.handle && !isWithin(target, this.handle)
	                    || e.button && e.button !== 0
	                    || isWithin(target, ("." + (this.clsNoDrag)))
	                    || e.defaultPrevented
	                ) {
	                    return;
	                }
	
	                e.preventDefault();
	
	                this.touched = [this];
	                this.placeholder = placeholder;
	                this.origin = assign({target: target, index: this.placeholder.index()}, this.pos);
	
	                doc.on(pointerMove, this.move);
	                doc.on(pointerUp, this.end);
	                win.on('scroll', this.scroll);
	
	                if (!this.threshold) {
	                    this.start(e);
	                }
	
	            },
	
	            start: function start(e) {
	
	                this.drag = $$$1(this.placeholder[0].outerHTML.replace(/^<li/i, '<div').replace(/li>$/i, 'div>'))
	                    .attr('uk-no-boot', '')
	                    .addClass(((this.clsDrag) + " " + (this.clsCustom)))
	                    .css({
	                        boxSizing: 'border-box',
	                        width: this.placeholder.outerWidth(),
	                        height: this.placeholder.outerHeight()
	                    })
	                    .css(this.placeholder.css(['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom']))
	                    .appendTo(UIkit.container);
	
	                this.drag.children().first().height(this.placeholder.children().height());
	
	                var ref = getDimensions(this.placeholder);
	                var left = ref.left;
	                var top = ref.top;
	                assign(this.origin, {left: left - this.pos.x, top: top - this.pos.y});
	
	                this.placeholder.addClass(this.clsPlaceholder);
	                this.$el.children().addClass(this.clsItem);
	                doc.addClass(this.clsDragState);
	
	                this.$el.trigger('start', [this, this.placeholder, this.drag]);
	
	                this.move(e);
	            },
	
	            move: function move(e) {
	
	                if (!this.drag) {
	
	                    if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
	                        this.start(e);
	                    }
	
	                    return;
	                }
	
	                this.$emit();
	
	                var target = e.type === 'mousemove' ? e.target : document.elementFromPoint(this.pos.x - document.body.scrollLeft, this.pos.y - document.body.scrollTop),
	                    sortable = getSortable(target),
	                    previous = getSortable(this.placeholder[0]),
	                    move = sortable !== previous;
	
	                if (!sortable || isWithin(target, this.placeholder) || move && (!sortable.group || sortable.group !== previous.group)) {
	                    return;
	                }
	
	                target = sortable.$el.is(target.parentNode) && $$$1(target) || sortable.$el.children().has(target);
	
	                if (move) {
	                    previous.remove(this.placeholder);
	                } else if (!target.length) {
	                    return;
	                }
	
	                sortable.insert(this.placeholder, target);
	
	                if (!~this.touched.indexOf(sortable)) {
	                    this.touched.push(sortable);
	                }
	
	            },
	
	            scroll: function scroll() {
	                var scroll = window.scrollY;
	                if (scroll !== this.scrollY) {
	                    this.pos.y += scroll - this.scrollY;
	                    this.scrollY = scroll;
	                    this.$emit();
	                }
	            },
	
	            end: function end(e) {
	
	                doc.off(pointerMove, this.move);
	                doc.off(pointerUp, this.end);
	                win.off('scroll', this.scroll);
	
	                if (!this.drag) {
	
	                    if (e.type !== 'mouseup' && isWithin(e.target, 'a[href]')) {
	                        location.href = $$$1(e.target).closest('a[href]').attr('href');
	                    }
	
	                    return;
	                }
	
	                preventClick();
	
	                var sortable = getSortable(this.placeholder[0]);
	
	                if (this === sortable) {
	                    if (this.origin.index !== this.placeholder.index()) {
	                        this.$el.trigger('change', [this, this.placeholder, 'moved']);
	                    }
	                } else {
	                    sortable.$el.trigger('change', [sortable, this.placeholder, 'added']);
	                    this.$el.trigger('change', [this, this.placeholder, 'removed']);
	                }
	
	                this.$el.trigger('stop', [this]);
	
	                this.drag.remove();
	                this.drag = null;
	
	                var classes = this.touched.map(function (sortable) { return ((sortable.clsPlaceholder) + " " + (sortable.clsItem)); }).join(' ');
	                this.touched.forEach(function (sortable) { return sortable.$el.children().removeClass(classes); });
	
	                doc.removeClass(this.clsDragState);
	
	            },
	
	            insert: function insert(element, target) {
	                var this$1 = this;
	
	
	                this.$el.children().addClass(this.clsItem);
	
	                var insert = function () {
	
	                    if (target.length) {
	
	                        if (!this$1.$el.has(element).length || element.prevAll().filter(target).length) {
	                            element.insertBefore(target);
	                        } else {
	                            element.insertAfter(target);
	                        }
	
	                    } else {
	                        this$1.$el.append(element);
	                    }
	
	                };
	
	                if (this.animation) {
	                    this.animate(insert);
	                } else {
	                    insert();
	                }
	
	            },
	
	            remove: function remove(element) {
	
	                if (!this.$el.has(element).length) {
	                    return;
	                }
	
	                if (this.animation) {
	                    this.animate(function () { return element.detach(); });
	                } else {
	                    element.detach();
	                }
	
	            },
	
	            animate: function animate(action) {
	                var this$1 = this;
	
	
	                var props = [],
	                    children = this.$el.children().toArray().map(function (el) {
	                        el = $$$1(el);
	                        props.push(assign({
	                            position: 'absolute',
	                            pointerEvents: 'none',
	                            width: el.outerWidth(),
	                            height: el.outerHeight()
	                        }, el.position()));
	                        return el;
	                    }),
	                    reset = {position: '', width: '', height: '', pointerEvents: '', top: '', left: ''};
	
	                action();
	
	                children.forEach(function (el) { return el.stop(); });
	                this.$el.children().css(reset);
	                this.$update('update', true);
	                fastdom.flush();
	
	                this.$el.css('min-height', this.$el.height());
	
	                var positions = children.map(function (el) { return el.position(); });
	                promise.all(children.map(function (el, i) { return el.css(props[i]).animate(positions[i], this$1.animation).promise(); }))
	                    .then(function () {
	                        this$1.$el.css('min-height', '').children().css(reset);
	                        this$1.$update('update', true);
	                        fastdom.flush();
	                    });
	
	            }
	
	        }
	
	    });
	    var obj;
	
	    function getSortable(element) {
	        return UIkit.getComponent(element, 'sortable') || element.parentNode && getSortable(element.parentNode);
	    }
	
	}
	
	if (false) {
	    window.UIkit.use(plugin$4);
	}
	
	function plugin$5(UIkit) {
	
	    if (plugin$5.installed) {
	        return;
	    }
	
	    var util = UIkit.util;
	    var mixin = UIkit.mixin;
	    var $$$1 = util.$;
	    var doc = util.doc;
	    var fastdom = util.fastdom;
	    var flipPosition = util.flipPosition;
	    var isTouch = util.isTouch;
	    var isWithin = util.isWithin;
	    var pointerDown = util.pointerDown;
	    var pointerEnter = util.pointerEnter;
	    var pointerLeave = util.pointerLeave;
	
	    var actives = [];
	
	    UIkit.component('tooltip', {
	
	        attrs: true,
	
	        mixins: [mixin.togglable, mixin.position],
	
	        props: {
	            delay: Number,
	            container: Boolean,
	            title: String
	        },
	
	        defaults: {
	            pos: 'top',
	            title: '',
	            delay: 0,
	            animation: ['uk-animation-scale-up'],
	            duration: 100,
	            cls: 'uk-active',
	            clsPos: 'uk-tooltip',
	            container: true,
	        },
	
	        computed: {
	
	            container: function container() {
	                return $$$1(this.$props.container === true && UIkit.container || this.$props.container || UIkit.container);
	            }
	
	        },
	
	        connected: function connected() {
	            var this$1 = this;
	
	            fastdom.mutate(function () { return this$1.$el.removeAttr('title').attr('aria-expanded', false); });
	        },
	
	        disconnected: function disconnected() {
	            this.hide();
	        },
	
	        methods: {
	
	            show: function show() {
	                var this$1 = this;
	
	
	                if (~actives.indexOf(this)) {
	                    return;
	                }
	
	                actives.forEach(function (active) { return active.hide(); });
	                actives.push(this);
	
	                doc.on(("click." + (this.$options.name)), function (e) {
	                    if (!isWithin(e.target, this$1.$el)) {
	                        this$1.hide();
	                    }
	                });
	
	                clearTimeout(this.showTimer);
	
	                this.tooltip = $$$1(("<div class=\"" + (this.clsPos) + "\" aria-hidden=\"true\"><div class=\"" + (this.clsPos) + "-inner\">" + (this.title) + "</div></div>")).appendTo(this.container);
	
	                this.$el.attr('aria-expanded', true);
	
	                this.positionAt(this.tooltip, this.$el);
	                this.origin = this.getAxis() === 'y' ? ((flipPosition(this.dir)) + "-" + (this.align)) : ((this.align) + "-" + (flipPosition(this.dir)));
	
	                this.showTimer = setTimeout(function () {
	                    this$1.toggleElement(this$1.tooltip, true);
	
	                    this$1.hideTimer = setInterval(function () {
	                        if (!this$1.$el.is(':visible')) {
	                            this$1.hide();
	                        }
	                    }, 150);
	
	                }, this.delay);
	            },
	
	            hide: function hide() {
	
	                var index = actives.indexOf(this);
	
	                if (!~index || this.$el.is('input') && this.$el[0] === document.activeElement) {
	                    return;
	                }
	
	                actives.splice(index, 1);
	
	                clearTimeout(this.showTimer);
	                clearInterval(this.hideTimer);
	                this.$el.attr('aria-expanded', false);
	                this.toggleElement(this.tooltip, false);
	                this.tooltip && this.tooltip.remove();
	                this.tooltip = false;
	                doc.off(("click." + (this.$options.name)));
	
	            }
	
	        },
	
	        events: ( obj = {
	
	            'blur': 'hide'
	
	        }, obj[("focus " + pointerEnter + " " + pointerDown)] = function (e) {
	                if (e.type !== pointerDown || !isTouch(e)) {
	                    this.show();
	                }
	            }, obj[pointerLeave] = function (e) {
	                if (!isTouch(e)) {
	                    this.hide();
	                }
	            }, obj )
	
	    });
	    var obj;
	
	}
	
	if (false) {
	    window.UIkit.use(plugin$5);
	}
	
	function plugin$6(UIkit) {
	
	    if (plugin$6.installed) {
	        return;
	    }
	
	    var ref = UIkit.util;
	    var $$$1 = ref.$;
	    var ajax$$1 = ref.ajax;
	    var on = ref.on;
	
	    UIkit.component('upload', {
	
	        props: {
	            allow: String,
	            clsDragover: String,
	            concurrent: Number,
	            dataType: String,
	            mime: String,
	            msgInvalidMime: String,
	            msgInvalidName: String,
	            multiple: Boolean,
	            name: String,
	            params: Object,
	            type: String,
	            url: String
	        },
	
	        defaults: {
	            allow: false,
	            clsDragover: 'uk-dragover',
	            concurrent: 1,
	            dataType: undefined,
	            mime: false,
	            msgInvalidMime: 'Invalid File Type: %s',
	            msgInvalidName: 'Invalid File Name: %s',
	            multiple: false,
	            name: 'files[]',
	            params: {},
	            type: 'POST',
	            url: '',
	            abort: null,
	            beforeAll: null,
	            beforeSend: null,
	            complete: null,
	            completeAll: null,
	            error: null,
	            fail: function fail(msg) {
	                alert(msg);
	            },
	            load: null,
	            loadEnd: null,
	            loadStart: null,
	            progress: null
	        },
	
	        events: {
	
	            change: function change(e) {
	
	                if (!$$$1(e.target).is('input[type="file"]')) {
	                    return;
	                }
	
	                e.preventDefault();
	
	                if (e.target.files) {
	                    this.upload(e.target.files);
	                }
	
	                e.target.value = '';
	            },
	
	            drop: function drop(e) {
	                e.preventDefault();
	                e.stopPropagation();
	
	                var transfer = e.originalEvent.dataTransfer;
	
	                if (!transfer || !transfer.files) {
	                    return;
	                }
	
	                this.$removeClass(this.clsDragover);
	
	                this.upload(transfer.files);
	            },
	
	            dragenter: function dragenter(e) {
	                e.preventDefault();
	                e.stopPropagation();
	            },
	
	            dragover: function dragover(e) {
	                e.preventDefault();
	                e.stopPropagation();
	                this.$addClass(this.clsDragover);
	            },
	
	            dragleave: function dragleave(e) {
	                e.preventDefault();
	                e.stopPropagation();
	                this.$removeClass(this.clsDragover);
	            }
	
	        },
	
	        methods: {
	
	            upload: function upload(files) {
	                var this$1 = this;
	
	
	                if (!files.length) {
	                    return;
	                }
	
	                this.$el.trigger('upload', [files]);
	
	                for (var i = 0; i < files.length; i++) {
	
	                    if (this$1.allow) {
	                        if (!match(this$1.allow, files[i].name)) {
	                            this$1.fail(this$1.msgInvalidName.replace(/%s/, this$1.allow));
	                            return;
	                        }
	                    }
	
	                    if (this$1.mime) {
	                        if (!match(this$1.mime, files[i].type)) {
	                            this$1.fail(this$1.msgInvalidMime.replace(/%s/, this$1.mime));
	                            return;
	                        }
	                    }
	
	                }
	
	                if (!this.multiple) {
	                    files = [files[0]];
	                }
	
	                this.beforeAll && this.beforeAll(this, files);
	
	                var chunks = chunk(files, this.concurrent),
	                    upload = function (files) {
	
	                        var data = new FormData();
	
	                        files.forEach(function (file) { return data.append(this$1.name, file); });
	
	                        for (var key in this$1.params) {
	                            data.append(key, this$1.params[key]);
	                        }
	
	                        ajax$$1({
	                            data: data,
	                            url: this$1.url,
	                            type: this$1.type,
	                            dataType: this$1.dataType,
	                            beforeSend: this$1.beforeSend,
	                            complete: [this$1.complete, function (xhr, status) {
	                                if (chunks.length) {
	                                    upload(chunks.shift());
	                                } else {
	                                    this$1.completeAll && this$1.completeAll(xhr);
	                                }
	
	                                if (status === 'abort') {
	                                    this$1.abort && this$1.abort(xhr);
	                                }
	                            }],
	                            cache: false,
	                            contentType: false,
	                            processData: false,
	                            xhr: function () {
	                                var xhr = $$$1.ajaxSettings.xhr();
	                                xhr.upload && this$1.progress && on(xhr.upload, 'progress', this$1.progress);
	                                ['loadStart', 'load', 'loadEnd', 'error', 'abort'].forEach(function (type) { return this$1[type] && on(xhr, type.toLowerCase(), this$1[type]); });
	                                return xhr;
	                            }
	                        });
	
	                    };
	
	                upload(chunks.shift());
	
	            }
	
	        }
	
	    });
	
	    function match(pattern, path) {
	        return path.match(new RegExp(("^" + (pattern.replace(/\//g, '\\/').replace(/\*\*/g, '(\\/[^\\/]+)*').replace(/\*/g, '[^\\/]+').replace(/((?!\\))\?/g, '$1.')) + "$"), 'i'));
	    }
	
	    function chunk(files, size) {
	        var chunks = [];
	        for (var i = 0; i < files.length; i += size) {
	            var chunk = [];
	            for (var j = 0; j < size; j++) {
	                chunk.push(files[i+j]);
	            }
	            chunks.push(chunk);
	        }
	        return chunks;
	    }
	
	}
	
	if (false) {
	    window.UIkit.use(plugin$6);
	}
	
	function plugin$7(UIkit) {
	
	    if (plugin$7.installed) {
	        return;
	    }
	
	    var ref = UIkit.util;
	    var scrolledOver = ref.scrolledOver;
	
	    UIkit.component('grid-parallax', UIkit.components.grid.extend({
	
	        props: {
	            target: String,
	            translate: Number
	        },
	
	        defaults: {
	            target: false,
	            translate: 150
	        },
	
	        init: function init() {
	            this.$addClass('uk-grid');
	        },
	
	        disconnected: function disconnected() {
	            this.reset();
	            this.$el.css('margin-bottom', '');
	        },
	
	        computed: {
	
	            translate: function translate() {
	                return Math.abs(this.$props.translate);
	            },
	
	            items: function items() {
	                return (this.target ? this.$el.find(this.target) : this.$el.children()).toArray();
	            }
	
	        },
	
	        update: [
	
	            {
	
	                read: function read() {
	                    this.columns = this.rows && this.rows[0] && this.rows[0].length || 0;
	                    this.rows = this.rows && this.rows.map(function (elements) { return sortBy(elements, 'offsetLeft'); });
	                },
	
	                write: function write() {
	                    this.$el
	                        .css('margin-bottom', '')
	                        .css('margin-bottom', this.columns > 1 ? this.translate + parseFloat(this.$el.css('margin-bottom')) : '');
	                },
	
	                events: ['load', 'resize']
	            },
	
	            {
	
	                read: function read() {
	
	                    this.scrolled = scrolledOver(this.$el) * this.translate;
	
	                },
	
	                write: function write() {
	                    var this$1 = this;
	
	
	                    if (!this.rows || this.columns === 1 || !this.scrolled) {
	                        return this.reset();
	                    }
	
	                    this.rows.forEach(function (row) { return row.forEach(function (el, i) { return el.style.transform = "translateY(" + (i % 2 ? this$1.scrolled : this$1.scrolled / 8) + "px)"; }
	                        ); }
	                    );
	
	                },
	
	                events: ['scroll', 'load', 'resize']
	            }
	        ],
	
	        methods: {
	
	            reset: function reset() {
	                this.items.forEach(function (item) { return item.style.transform = ''; });
	            }
	
	        }
	
	    }));
	
	    UIkit.component('grid-parallax').options.update.unshift({
	
	        read: function read() {
	            this.reset();
	        },
	
	        events: ['load', 'resize']
	
	    });
	
	    function sortBy(collection, prop) {
	        return collection.sort(function (a,b) { return a[prop] > b[prop]
	                ? 1
	                : b[prop] > a[prop]
	                    ? -1
	                    : 0; }
	        )
	    }
	
	}
	
	
	
	if (false) {
	    window.UIkit.use(plugin$7);
	}
	
	function plugin$8(UIkit) {
	
	    if (plugin$8.installed) {
	        return;
	    }
	
	    var mixin = UIkit.mixin;
	    var util = UIkit.util;
	    var assign = util.assign;
	    var clamp = util.clamp;
	    var Dimensions = util.Dimensions;
	    var getImage = util.getImage;
	    var isUndefined = util.isUndefined;
	    var scrolledOver = util.scrolledOver;
	    var query = util.query;
	
	    var props = ['x', 'y', 'bgx', 'bgy', 'rotate', 'scale', 'color', 'backgroundColor', 'borderColor', 'opacity', 'blur', 'hue', 'grayscale', 'invert', 'saturate', 'sepia', 'fopacity'];
	
	    mixin.parallax = {
	
	        props: props.reduce(function (props, prop) {
	            props[prop] = 'list';
	            return props;
	        }, {
	            easing: Number,
	            media: 'media'
	        }),
	
	        defaults: props.reduce(function (defaults, prop) {
	            defaults[prop] = undefined;
	            return defaults;
	        }, {
	            easing: 1,
	            media: false
	        }),
	
	        computed: {
	
	            props: function props$1() {
	                var this$1 = this;
	
	
	                return props.reduce(function (props, prop) {
	
	                    if (isUndefined(this$1.$props[prop])) {
	                        return props;
	                    }
	
	                    var isColor = prop.match(/color/i),
	                        isCssProp = isColor || prop === 'opacity',
	                        values = this$1.$props[prop];
	
	                    if (isCssProp) {
	                        this$1.$el.css(prop, '');
	                    }
	
	                    var start = (!isUndefined(values[1])
	                            ? values[0]
	                            : prop === 'scale'
	                                ? 1
	                                : isCssProp
	                                    ? this$1.$el.css(prop)
	                                    : 0) || 0,
	                        end = isUndefined(values[1]) ? values[0] : values[1],
	                        unit = ~values.join('').indexOf('%') ? '%' : 'px',
	                        diff;
	
	                    if (isColor) {
	
	                        var color = this$1.$el[0].style.color;
	                        this$1.$el[0].style.color = start;
	                        start = parseColor(this$1.$el.css('color'));
	                        this$1.$el[0].style.color = end;
	                        end = parseColor(this$1.$el.css('color'));
	                        this$1.$el[0].style.color = color;
	
	                    } else {
	
	                        start = parseFloat(start);
	                        end = parseFloat(end);
	                        diff = Math.abs(start - end);
	
	                    }
	
	                    props[prop] = {start: start, end: end, diff: diff, unit: unit};
	
	                    if (prop.match(/^bg/)) {
	
	                        var attr = "background-position-" + (prop[2]);
	                        props[prop].pos = this$1.$el.css(attr, '').css('background-position').split(' ')[prop[2] === 'x' ? 0 : 1]; // IE 11 can't read background-position-[x|y]
	
	                        if (this$1.covers) {
	                            assign(props[prop], {start: 0, end: start <= end ? diff : -diff});
	                        }
	                    }
	
	                    return props;
	
	                }, {});
	
	            },
	
	            bgProps: function bgProps() {
	                var this$1 = this;
	
	                return ['bgx', 'bgy'].filter(function (bg) { return bg in this$1.props; });
	            },
	
	            covers: function covers() {
	                return this.$el.css('backgroundSize', '').css('backgroundSize') === 'cover';
	            }
	
	        },
	
	        disconnected: function disconnected() {
	            delete this._image;
	        },
	
	        update: [
	
	            {
	
	                read: function read() {
	                    var this$1 = this;
	
	
	                    delete this._computeds.props;
	
	                    this._active = !this.media || window.matchMedia(this.media).matches;
	
	                    if (this._image) {
	                        this._image.dimEl = {
	                            width: this.$el[0].offsetWidth,
	                            height: this.$el[0].offsetHeight
	                        };
	                    }
	
	                    if (!isUndefined(this._image) || !this.covers || !this.bgProps.length) {
	                        return;
	                    }
	
	                    var src = this.$el.css('backgroundImage').replace(/^none|url\(["']?(.+?)["']?\)$/, '$1');
	
	                    if (!src) {
	                        return;
	                    }
	
	                    this._image = false;
	
	                    getImage(src).then(function (img) {
	                        this$1._image = {
	                            width: img.naturalWidth,
	                            height: img.naturalHeight
	                        };
	
	                        this$1.$emit();
	                    });
	
	                },
	
	                write: function write() {
	                    var this$1 = this;
	
	
	                    if (!this._image) {
	                        return;
	                    }
	
	                    if (!this._active) {
	                        this.$el.css({backgroundSize: '', backgroundRepeat: ''});
	                        return;
	                    }
	
	                    var image = this._image,
	                        dimEl = image.dimEl,
	                        dim = Dimensions.cover(image, dimEl);
	
	                    this.bgProps.forEach(function (prop) {
	
	                        var ref = this$1.props[prop];
	                        var start = ref.start;
	                        var end = ref.end;
	                        var pos = ref.pos;
	                        var diff = ref.diff;
	                        var attr = prop === 'bgy' ? 'height' : 'width',
	                            span = dim[attr] - dimEl[attr];
	
	                        if (!pos.match(/%$/)) {
	                            return;
	                        }
	
	                        if (start >= end) {
	
	                            if (span < diff) {
	                                dimEl[attr] = dim[attr] + diff - span;
	                                this$1.props[prop].pos = '0px';
	                            } else {
	                                pos = -1 * span / 100 * parseFloat(pos);
	                                pos = clamp(pos, diff - span, 0);
	                                this$1.props[prop].pos = pos + "px";
	                            }
	
	                        } else {
	
	                            if (span < diff) {
	                                dimEl[attr] = dim[attr] + diff - span;
	                            } else if ((span / 100 * parseFloat(pos)) > diff) {
	                                return;
	                            }
	
	                            this$1.props[prop].pos = "-" + diff + "px";
	
	                        }
	
	                        dim = Dimensions.cover(image, dimEl);
	                    });
	
	                    this.$el.css({
	                        backgroundSize: ((dim.width) + "px " + (dim.height) + "px"),
	                        backgroundRepeat: 'no-repeat'
	                    });
	
	                },
	
	                events: ['load', 'resize']
	
	            }
	
	        ],
	
	        methods: {
	
	            reset: function reset() {
	                var this$1 = this;
	
	                Object.keys(this.getCss(0)).forEach(function (prop) { return this$1.$el.css(prop, ''); });
	            },
	
	            getCss: function getCss(percent) {
	
	                var translated = false, props = this.props;
	                return Object.keys(props).reduce(function (css, prop) {
	
	                    var values = props[prop],
	                        value = getValue(values, percent);
	
	                    switch (prop) {
	
	                        // transforms
	                        case 'x':
	                        case 'y':
	
	                            if (translated) {
	                                break;
	                            }
	
	                            var ref = ['x', 'y'].map(function (dir) { return prop === dir
	                                ? value + values.unit
	                                : props[dir]
	                                    ? getValue(props[dir], percent) + props[dir].unit
	                                    : 0; }
	                            );
	                    var x = ref[0];
	                    var y = ref[1];
	
	                            translated = css.transform += " translate3d(" + x + ", " + y + ", 0)";
	                            break;
	                        case 'rotate':
	                            css.transform += " rotate(" + value + "deg)";
	                            break;
	                        case 'scale':
	                            css.transform += " scale(" + value + ")";
	                            break;
	
	                        // bg image
	                        case 'bgy':
	                        case 'bgx':
	                            css[("background-position-" + (prop[2]))] = "calc(" + (values.pos) + " + " + (value + values.unit) + ")";
	                            break;
	
	                        // color
	                        case 'color':
	                        case 'backgroundColor':
	                        case 'borderColor':
	                            css[prop] = "rgba(" + (values.start.map(function (value, i) {
	                                    value = value + percent * (values.end[i] - value);
	                                    return i === 3 ? parseFloat(value) : parseInt(value, 10);
	                                }).join(',')) + ")";
	                            break;
	
	                        // CSS Filter
	                        case 'blur':
	                            css.filter += " blur(" + value + "px)";
	                            break;
	                        case 'hue':
	                            css.filter += " hue-rotate(" + value + "deg)";
	                            break;
	                        case 'fopacity':
	                            css.filter += " opacity(" + value + "%)";
	                            break;
	                        case 'grayscale':
	                        case 'invert':
	                        case 'saturate':
	                        case 'sepia':
	                            css.filter += " " + prop + "(" + value + "%)";
	                            break;
	
	                        default:
	                            css[prop] = value;
	                    }
	
	                    return css;
	
	                }, {transform: '', filter: ''});
	
	            }
	
	        }
	
	    };
	
	    UIkit.component('parallax', {
	
	        mixins: [mixin.parallax],
	
	        props: {
	            target: String,
	            viewport: Number
	        },
	
	        defaults: {
	            target: false,
	            viewport: 1
	        },
	
	        computed: {
	
	            target: function target() {
	                return this.$props.target && query(this.$props.target, this.$el) || this.$el;
	            }
	
	        },
	
	        disconnected: function disconnected() {
	            delete this._prev;
	        },
	
	        update: [
	
	            {
	
	                read: function read() {
	                    delete this._prev;
	                }
	
	            },
	
	            {
	
	                read: function read() {
	
	                    var percent = scrolledOver(this.target) / (this.viewport || 1);
	                    this._percent = clamp(percent * (1 - (this.easing - this.easing * percent)));
	
	                },
	
	                write: function write() {
	
	                    if (!this._active) {
	                        this.reset();
	                        return;
	                    }
	
	                    if (this._prev !== this._percent) {
	                        this.$el.css(this.getCss(this._percent));
	                        this._prev = this._percent;
	                    }
	
	                },
	
	                events: ['scroll', 'load', 'resize']
	            }
	
	        ]
	
	    });
	
	    function parseColor(color) {
	        return color.split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(function (n) { return parseFloat(n); });
	    }
	
	    function getValue(prop, percent) {
	        return +(!isUndefined(prop.diff)
	            ? prop.start + prop.diff * percent * (prop.start < prop.end ? 1 : -1)
	            : +prop.end).toFixed(2);
	    }
	
	}
	
	if (false) {
	    window.UIkit.use(plugin$8);
	}
	
	UIkit$2.use(plugin);
	UIkit$2.use(plugin$1);
	UIkit$2.use(plugin$3);
	UIkit$2.use(plugin$4);
	UIkit$2.use(plugin$5);
	UIkit$2.use(plugin$6);
	UIkit$2.use(plugin$7);
	UIkit$2.use(plugin$8);
	
	{
	    boot(UIkit$2);
	}
	
	return UIkit$2;
	
	})));


/***/ }),
/* 187 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NewItemForm = __webpack_require__(263);
	
	var _NewItemForm2 = _interopRequireDefault(_NewItemForm);
	
	var _ListBody = __webpack_require__(261);
	
	var _ListBody2 = _interopRequireDefault(_ListBody);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var List = function (_Component) {
	    _inherits(List, _Component);
	
	    function List(props) {
	        _classCallCheck(this, List);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.state = {
	            lists: []
	        };
	
	        _this.renderLists = _this.renderLists.bind(_this);
	        _this.onDeleteItem = _this.onDeleteItem.bind(_this);
	        _this.onDeleteList = _this.onDeleteList.bind(_this);
	        _this.handleOnSubmitNewItemChange = _this.handleOnSubmitNewItemChange.bind(_this);
	        return _this;
	    }
	
	    List.prototype.handleOnSubmitNewItemChange = function handleOnSubmitNewItemChange(itemname, listid) {
	        this.props.onSubmitNewItem({ itemname: itemname, listid: listid });
	    };
	
	    List.prototype.renderLists = function renderLists(list) {
	        var _this2 = this;
	
	        return _react2.default.createElement(
	            'div',
	            { className: 'uk-width-1-2@s' },
	            _react2.default.createElement(
	                'div',
	                { className: 'uk-tile uk-tile-default uk-padding-medium uk-box-shadow-medium' },
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    list.name
	                ),
	                _react2.default.createElement(_NewItemForm2.default, {
	                    onSubmitNewItem: function onSubmitNewItem(itemname) {
	                        return _this2.handleOnSubmitNewItemChange(itemname, list['_id']);
	                    }
	                }),
	                _react2.default.createElement(
	                    'table',
	                    {
	                        key: list.name,
	                        className: 'uk-table uk-table-middle uk-table-divider' },
	                    _react2.default.createElement(_ListBody2.default, {
	                        items: list.items,
	                        onDeleteItem: function onDeleteItem(itemid) {
	                            return _this2.onDeleteItem(list['_id'], itemid);
	                        }
	                    })
	                ),
	                _react2.default.createElement(
	                    'button',
	                    {
	                        className: 'uk-float-right uk-button uk-button-danger',
	                        type: 'button',
	                        onClick: function onClick() {
	                            _this2.onDeleteList(list['_id']);
	                        } },
	                    'Delete'
	                )
	            )
	        );
	    };
	
	    List.prototype.onDeleteList = function onDeleteList(listid) {
	        this.props.onDeleteList(listid);
	    };
	
	    List.prototype.onDeleteItem = function onDeleteItem(listid, itemid) {
	        this.props.onDeleteItem({ itemid: itemid, listid: listid });
	    };
	
	    List.prototype.render = function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'uk-grid-small', 'data-uk-grid': true },
	            this.props.lists.map(this.renderLists)
	        );
	    };
	
	    return List;
	}(_react.Component);
	
	exports.default = List;
	module.exports = exports['default'];

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ListBody = function (_Component) {
	    _inherits(ListBody, _Component);
	
	    function ListBody(props) {
	        _classCallCheck(this, ListBody);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.renderItem = _this.renderItem.bind(_this);
	        _this.onDeleteItem = _this.onDeleteItem.bind(_this);
	        return _this;
	    }
	
	    ListBody.prototype.renderItem = function renderItem(listitem) {
	        var _this2 = this;
	
	        return _react2.default.createElement(
	            'tr',
	            { key: listitem['_id'] },
	            _react2.default.createElement(
	                'td',
	                null,
	                listitem.name
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                _react2.default.createElement('button', {
	                    className: 'uk-float-right',
	                    type: 'button',
	                    'data-uk-icon': 'icon: trash',
	                    onClick: function onClick() {
	                        _this2.onDeleteItem(listitem['_id']);
	                    }
	                })
	            )
	        );
	    };
	
	    ListBody.prototype.onDeleteItem = function onDeleteItem(itemid) {
	        this.props.onDeleteItem(itemid);
	    };
	
	    ListBody.prototype.render = function render() {
	        return _react2.default.createElement(
	            'tbody',
	            null,
	            this.props.items.map(this.renderItem)
	        );
	    };
	
	    return ListBody;
	}(_react.Component);
	
	exports.default = ListBody;
	module.exports = exports['default'];

/***/ }),
/* 262 */,
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NewItemForm = function (_Component) {
	    _inherits(NewItemForm, _Component);
	
	    function NewItemForm(props) {
	        _classCallCheck(this, NewItemForm);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.state = {
	            itemname: ''
	        };
	
	        _this.handleChange = _this.handleChange.bind(_this);
	        _this.handleSubmit = _this.handleSubmit.bind(_this);
	        return _this;
	    }
	
	    NewItemForm.prototype.handleChange = function handleChange(event) {
	        var _setState;
	
	        var target = event.target;
	        var name = target.name;
	        this.setState((_setState = {}, _setState[name] = event.target.value, _setState));
	    };
	
	    NewItemForm.prototype.handleSubmit = function handleSubmit(event) {
	        event.preventDefault();
	        this.props.onSubmitNewItem(this.state.itemname);
	    };
	
	    NewItemForm.prototype.render = function render() {
	        return _react2.default.createElement(
	            'form',
	            {
	                className: 'uk-grid-small',
	                'data-uk-grid': true,
	                method: 'post',
	                onSubmit: this.handleSubmit },
	            _react2.default.createElement(
	                'div',
	                { className: 'uk-width-3-4@s' },
	                _react2.default.createElement('input', {
	                    className: 'uk-input',
	                    value: this.state.itemname,
	                    onChange: this.handleChange,
	                    name: 'itemname',
	                    placeholder: 'Item name',
	                    type: 'text'
	                })
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'uk-width-1-4@s' },
	                _react2.default.createElement('button', {
	                    'data-uk-icon': 'icon: plus',
	                    className: 'uk-button uk-button-primary uk-width-1-1',
	                    type: 'submit'
	                })
	            )
	        );
	    };
	
	    return NewItemForm;
	}(_react.Component);
	
	exports.default = NewItemForm;
	module.exports = exports['default'];

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NewListForm = function (_Component) {
	    _inherits(NewListForm, _Component);
	
	    function NewListForm(props) {
	        _classCallCheck(this, NewListForm);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.state = {
	            listname: ''
	        };
	
	        _this.handleChange = _this.handleChange.bind(_this);
	        _this.handleSubmit = _this.handleSubmit.bind(_this);
	        return _this;
	    }
	
	    NewListForm.prototype.handleChange = function handleChange(event) {
	        var _setState;
	
	        var target = event.target;
	        var name = target.name;
	        this.setState((_setState = {}, _setState[name] = event.target.value, _setState));
	    };
	
	    NewListForm.prototype.handleSubmit = function handleSubmit(event) {
	        event.preventDefault();
	        this.props.onSubmitNewList(this.state.listname);
	    };
	
	    NewListForm.prototype.render = function render() {
	        return _react2.default.createElement(
	            'form',
	            { method: 'post', className: 'uk-grid-small', 'data-uk-grid': true, onSubmit: this.handleSubmit },
	            _react2.default.createElement(
	                'div',
	                { className: 'uk-width-3-4@s' },
	                _react2.default.createElement('input', {
	                    className: 'uk-input',
	                    value: this.state.listname,
	                    onChange: this.handleChange,
	                    name: 'listname',
	                    placeholder: 'Listname',
	                    type: 'text'
	                })
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'uk-width-1-4@s' },
	                _react2.default.createElement('button', {
	                    'data-uk-icon': 'icon: plus',
	                    className: 'uk-button uk-button-primary uk-width-1-1',
	                    type: 'submit' })
	            )
	        );
	    };
	
	    return NewListForm;
	}(_react.Component);
	
	exports.default = NewListForm;
	module.exports = exports['default'];

/***/ }),
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(60);
	
	var _gatsbyLink = __webpack_require__(136);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _reactHelmet = __webpack_require__(84);
	
	var _axios = __webpack_require__(89);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _uikit = __webpack_require__(186);
	
	var _uikit2 = _interopRequireDefault(_uikit);
	
	var _uikitIcons = __webpack_require__(185);
	
	var _uikitIcons2 = _interopRequireDefault(_uikitIcons);
	
	var _storage = __webpack_require__(109);
	
	var _config = __webpack_require__(108);
	
	var _NewListForm = __webpack_require__(264);
	
	var _NewListForm2 = _interopRequireDefault(_NewListForm);
	
	var _List = __webpack_require__(260);
	
	var _List2 = _interopRequireDefault(_List);
	
	var _StylingOverrides = __webpack_require__(107);
	
	var _StylingOverrides2 = _interopRequireDefault(_StylingOverrides);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// local imports
	
	
	// local components
	
	
	// UIKit is undefined in static build
	if (typeof _uikit2.default.use === 'function') _uikit2.default.use(_uikitIcons2.default);
	
	// define request actions to prevent typos
	var actions = {
	    deleteListItem: 'deleteListItem',
	    deleteList: 'deleteList',
	    lists: 'lists',
	    createList: 'createList',
	    createItem: 'createItem'
	};
	
	var User = function (_Component) {
	    _inherits(User, _Component);
	
	    function User(props) {
	        _classCallCheck(this, User);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.state = {
	            lists: [],
	            listname: '',
	            token: '',
	            msg: ''
	        };
	
	        _this.request = _this.request.bind(_this);
	        _this.logout = _this.logout.bind(_this);
	        return _this;
	    }
	
	    User.prototype.componentWillMount = function componentWillMount() {
	        this.request({ action: actions.lists });
	    };
	
	    User.prototype.request = function request(options, data) {
	        var _this2 = this;
	
	        var authHeader = typeof window !== 'undefined' ? {
	            headers: {
	                Authorization: getToken()
	            }
	        } : {};
	
	        function getToken() {
	            return (0, _storage.storageAvailable)('sessionStorage') ? /*window.document.cookie*/window.sessionStorage.getItem('token') : window.document.cookie;
	        }
	
	        _asyncToGenerator(function* () {
	            var res = void 0;
	
	            switch (options.action) {
	                case actions.lists:
	                    try {
	                        res = yield _axios2.default.get(_config.apiBaseURL + '/lists', authHeader);
	                    } catch (err) {
	                        (0, _gatsbyLink.navigateTo)('/401');
	                    }
	                    _this2.setState({ lists: res.data });
	                    break;
	                case actions.createList:
	                    try {
	                        res = yield _axios2.default.post(_config.apiBaseURL + '/createlist', { name: data }, authHeader);
	                    } catch (err) {
	                        console.log(err);
	                    }
	                    if (res.data.success) _this2.request({ action: actions.lists });else uikit.notification({
	                        message: res.data.msg,
	                        status: 'danger',
	                        pos: 'top-center',
	                        timeout: 3000
	                    });
	                    break;
	                case actions.deleteListItem:
	                    try {
	                        res = yield _axios2.default.post(_config.apiBaseURL + '/deletelistitem', data, authHeader);
	                    } catch (err) {
	                        console.log(err);
	                    }
	                    _this2.request({ action: actions.lists });
	                    break;
	                case actions.deleteList:
	                    try {
	                        res = yield _axios2.default.post(_config.apiBaseURL + '/deletelist', { listid: data }, authHeader);
	                    } catch (err) {}
	                    _this2.request({ action: actions.lists });
	                    break;
	                case actions.createItem:
	                    try {
	                        res = yield _axios2.default.post(_config.apiBaseURL + '/createlistitem', data, authHeader);
	                    } catch (err) {
	                        _uikit2.default.notification(err.message);
	                    }
	                    if (res.data.success) _this2.request({ action: actions.lists });else _uikit2.default.notification({
	                        message: res.data.msg,
	                        status: 'danger',
	                        pos: 'top-center',
	                        timeout: 3000
	                    });
	            }
	        })();
	    };
	
	    User.prototype.logout = function logout() {
	        localStorage.setItem('token', '');
	        (0, _gatsbyLink.navigateTo)('/');
	    };
	
	    User.prototype.render = function render() {
	        var _this3 = this;
	
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                _StylingOverrides2.default,
	                null,
	                _react2.default.createElement(
	                    'div',
	                    {
	                        className: 'uk-sticky uk-tile uk-tile-primary uk-padding-small uk-box-shadow-medium',
	                        'data-uk-sticky': 'bottom: 0' },
	                    _react2.default.createElement(
	                        'button',
	                        {
	                            className: 'uk-button uk-button-default uk-float-right',
	                            onClick: this.logout },
	                        'Logout'
	                    )
	                ),
	                _react2.default.createElement(
	                    'section',
	                    {
	                        className: 'uk-section uk-section-muted uk-preserve-color uk-cover-container',
	                        'data-uk-height-viewport': 'offset-bottom: 0' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'uk-container uk-container-small' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'uk-tile uk-tile-default uk-padding-medium uk-box-shadow-medium uk-margin-bottom' },
	                            _react2.default.createElement(_NewListForm2.default, {
	                                onSubmitNewList: function onSubmitNewList(data) {
	                                    return _this3.request({
	                                        action: actions.createList
	                                    }, data);
	                                }
	                            })
	                        ),
	                        _react2.default.createElement(_List2.default, {
	                            lists: this.state.lists,
	                            onDeleteList: function onDeleteList(listid) {
	                                return _this3.request({ action: actions.deleteList }, listid);
	                            },
	                            onDeleteItem: function onDeleteItem(data) {
	                                return _this3.request({ action: actions.deleteListItem }, data);
	                            },
	                            onSubmitNewItem: function onSubmitNewItem(data) {
	                                return _this3.request({ action: actions.createItem }, data);
	                            }
	                        })
	                    )
	                )
	            )
	        );
	    };
	
	    return User;
	}(_react.Component);
	
	exports.default = User;
	module.exports = exports['default'];

/***/ })
]);
//# sourceMappingURL=component---src-pages-user-js-b398669aad9cb6cb09d8.js.map