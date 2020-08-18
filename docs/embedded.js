(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('mapbox-gl')) :
  typeof define === 'function' && define.amd ? define(['exports', 'mapbox-gl'], factory) :
  (global = global || self, factory(global.bundle = {}, global.mapboxgl));
}(this, (function (exports, mapboxgl) { 'use strict';

  mapboxgl = mapboxgl && Object.prototype.hasOwnProperty.call(mapboxgl, 'default') ? mapboxgl['default'] : mapboxgl;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function createReducer(handlers) {
    return function (state, action) {
      if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action);
      }

      return state;
    };
  }
  function combineReducers(reducers) {
    return function (state, action) {
      var hasChanged = false;
      var nextState = {};

      for (var key in reducers) {
        nextState[key] = reducers[key](state[key], action);
        hasChanged = hasChanged || nextState[key] !== state[key];
      }

      return hasChanged ? nextState : state;
    };
  }
  function createActions(handlers) {
    var actions = {};

    var _loop = function _loop(actionType) {
      actions[actionType] = function (actionInfo) {
        return _objectSpread2(_objectSpread2({}, actionInfo), {}, {
          type: actionType
        });
      };
    };

    for (var actionType in handlers) {
      _loop(actionType);
    }

    return actions;
  }
  function isString(x) {
    return typeof x === "string" || x instanceof String;
  } // Copied from stackoverflow https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

  function dec2hex(dec) {
    return ("0" + dec.toString(16)).substr(-2);
  }
  function generateId(len) {
    var arr = new Uint8Array((len || 40) / 2);
    var crypto = window.crypto ? window.crypto : window.msCrypto;
    crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join("");
  }
  function bindAll(keys, obj) {
    keys.forEach(function (key) {
      obj[key] = obj[key].bind(obj);
    });
  }

  var handlers = {
    selectTool: function selectTool(state, action) {
      return _objectSpread2(_objectSpread2({}, state), {}, {
        activeTool: action.id
      });
    },
    openDropdownMenu: function openDropdownMenu(state) {
      return _objectSpread2(_objectSpread2({}, state), {}, {
        dropdownMenuOpen: true
      });
    },
    closeDropdownMenu: function closeDropdownMenu(state) {
      return _objectSpread2(_objectSpread2({}, state), {}, {
        dropdownMenuOpen: false
      });
    }
  };
  var actions = createActions(handlers);
  var toolbarReducer = createReducer(handlers);

  var reducer = combineReducers({
    toolbar: toolbarReducer
  });

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var directives = new WeakMap();
  /**
   * Brands a function as a directive factory function so that lit-html will call
   * the function during template rendering, rather than passing as a value.
   *
   * A _directive_ is a function that takes a Part as an argument. It has the
   * signature: `(part: Part) => void`.
   *
   * A directive _factory_ is a function that takes arguments for data and
   * configuration and returns a directive. Users of directive usually refer to
   * the directive factory as the directive. For example, "The repeat directive".
   *
   * Usually a template author will invoke a directive factory in their template
   * with relevant arguments, which will then return a directive function.
   *
   * Here's an example of using the `repeat()` directive factory that takes an
   * array and a function to render an item:
   *
   * ```js
   * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
   * ```
   *
   * When `repeat` is invoked, it returns a directive function that closes over
   * `items` and the template function. When the outer template is rendered, the
   * return directive function is called with the Part for the expression.
   * `repeat` then performs it's custom logic to render multiple items.
   *
   * @param f The directive factory function. Must be a function that returns a
   * function of the signature `(part: Part) => void`. The returned function will
   * be called with the part object.
   *
   * @example
   *
   * import {directive, html} from 'lit-html';
   *
   * const immutable = directive((v) => (part) => {
   *   if (part.value !== v) {
   *     part.setValue(v)
   *   }
   * });
   */

  var directive = function directive(f) {
    return function () {
      var d = f.apply(void 0, arguments);
      directives.set(d, true);
      return d;
    };
  };
  var isDirective = function isDirective(o) {
    return typeof o === 'function' && directives.has(o);
  };

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * True if the custom elements polyfill is in use.
   */
  var isCEPolyfill = typeof window !== 'undefined' && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
  /**
   * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
   * into another container (could be the same container), before `before`. If
   * `before` is null, it appends the nodes to the container.
   */

  var reparentNodes = function reparentNodes(container, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    while (start !== end) {
      var n = start.nextSibling;
      container.insertBefore(start, before);
      start = n;
    }
  };
  /**
   * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
   * `container`.
   */

  var removeNodes = function removeNodes(container, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    while (start !== end) {
      var n = start.nextSibling;
      container.removeChild(start);
      start = n;
    }
  };

  /**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * A sentinel value that signals that a value was handled by a directive and
   * should not be written to the DOM.
   */
  var noChange = {};
  /**
   * A sentinel value that signals a NodePart to fully clear its content.
   */

  var nothing = {};

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * An expression marker with embedded unique key to avoid collision with
   * possible text in templates.
   */
  var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
  /**
   * An expression marker used text-positions, multi-binding attributes, and
   * attributes with markup-like text values.
   */

  var nodeMarker = "<!--".concat(marker, "-->");
  var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
  /**
   * Suffix appended to all bound attribute names.
   */

  var boundAttributeSuffix = '$lit$';
  /**
   * An updatable Template that tracks the location of dynamic parts.
   */

  var Template = function Template(result, element) {
    _classCallCheck(this, Template);

    this.parts = [];
    this.element = element;
    var nodesToRemove = [];
    var stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    var walker = document.createTreeWalker(element.content, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false); // Keeps track of the last index associated with a part. We try to delete
    // unnecessary nodes, but we never want to associate two different parts
    // to the same index. They must have a constant node between.

    var lastPartIndex = 0;
    var index = -1;
    var partIndex = 0;
    var strings = result.strings,
        length = result.values.length;

    while (partIndex < length) {
      var node = walker.nextNode();

      if (node === null) {
        // We've exhausted the content inside a nested template element.
        // Because we still have parts (the outer for-loop), we know:
        // - There is a template in the stack
        // - The walker will find a nextNode outside the template
        walker.currentNode = stack.pop();
        continue;
      }

      index++;

      if (node.nodeType === 1
      /* Node.ELEMENT_NODE */
      ) {
          if (node.hasAttributes()) {
            var attributes = node.attributes;
            var _length = attributes.length; // Per
            // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
            // attributes are not guaranteed to be returned in document order.
            // In particular, Edge/IE can return them out of order, so we cannot
            // assume a correspondence between part index and attribute index.

            var count = 0;

            for (var i = 0; i < _length; i++) {
              if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                count++;
              }
            }

            while (count-- > 0) {
              // Get the template literal section leading up to the first
              // expression in this attribute
              var stringForPart = strings[partIndex]; // Find the attribute name

              var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
              // All bound attributes have had a suffix added in
              // TemplateResult#getHTML to opt out of special attribute
              // handling. To look up the attribute value we also need to add
              // the suffix.

              var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              var attributeValue = node.getAttribute(attributeLookupName);
              node.removeAttribute(attributeLookupName);
              var statics = attributeValue.split(markerRegex);
              this.parts.push({
                type: 'attribute',
                index: index,
                name: name,
                strings: statics
              });
              partIndex += statics.length - 1;
            }
          }

          if (node.tagName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }
        } else if (node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          var data = node.data;

          if (data.indexOf(marker) >= 0) {
            var parent = node.parentNode;

            var _strings = data.split(markerRegex);

            var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts

            for (var _i = 0; _i < lastIndex; _i++) {
              var insert = void 0;
              var s = _strings[_i];

              if (s === '') {
                insert = createMarker();
              } else {
                var match = lastAttributeNameRegex.exec(s);

                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                  s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                }

                insert = document.createTextNode(s);
              }

              parent.insertBefore(insert, node);
              this.parts.push({
                type: 'node',
                index: ++index
              });
            } // If there's no text, we must insert a comment to mark our place.
            // Else, we can trust it will stick around after cloning.


            if (_strings[lastIndex] === '') {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = _strings[lastIndex];
            } // We have a part for each match found


            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8
      /* Node.COMMENT_NODE */
      ) {
          if (node.data === marker) {
            var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
            // the following are true:
            //  * We don't have a previousSibling
            //  * The previousSibling is already the start of a previous part

            if (node.previousSibling === null || index === lastPartIndex) {
              index++;

              _parent.insertBefore(createMarker(), node);
            }

            lastPartIndex = index;
            this.parts.push({
              type: 'node',
              index: index
            }); // If we don't have a nextSibling, keep this node so we have an end.
            // Else, we can remove it to save future costs.

            if (node.nextSibling === null) {
              node.data = '';
            } else {
              nodesToRemove.push(node);
              index--;
            }

            partIndex++;
          } else {
            var _i2 = -1;

            while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
              // Comment node has a binding marker inside, make an inactive part
              // The binding won't work, but subsequent bindings will
              // TODO (justinfagnani): consider whether it's even worth it to
              // make bindings in comments work
              this.parts.push({
                type: 'node',
                index: -1
              });
              partIndex++;
            }
          }
        }
    } // Remove text binding nodes after the walk to not disturb the TreeWalker


    for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
      var n = _nodesToRemove[_i3];
      n.parentNode.removeChild(n);
    }
  };

  var endsWith = function endsWith(str, suffix) {
    var index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
  };

  var isTemplatePartActive = function isTemplatePartActive(part) {
    return part.index !== -1;
  }; // Allows `document.createComment('')` to be renamed for a
  // small manual size-savings.

  var createMarker = function createMarker() {
    return document.createComment('');
  };
  /**
   * This regex extracts the attribute name preceding an attribute-position
   * expression. It does this by matching the syntax allowed for attributes
   * against the string literal directly preceding the expression, assuming that
   * the expression is in an attribute-value position.
   *
   * See attributes in the HTML spec:
   * https://www.w3.org/TR/html5/syntax.html#elements-attributes
   *
   * " \x09\x0a\x0c\x0d" are HTML space characters:
   * https://www.w3.org/TR/html5/infrastructure.html#space-characters
   *
   * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
   * space character except " ".
   *
   * So an attribute is:
   *  * The name: any character except a control character, space character, ('),
   *    ("), ">", "=", or "/"
   *  * Followed by zero or more space characters
   *  * Followed by "="
   *  * Followed by zero or more space characters
   *  * Followed by:
   *    * Any character except space, ('), ("), "<", ">", "=", (`), or
   *    * (") then any non-("), or
   *    * (') then any non-(')
   */

  var lastAttributeNameRegex = // eslint-disable-next-line no-control-regex
  /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

  /**
   * An instance of a `Template` that can be attached to the DOM and updated
   * with new values.
   */

  var TemplateInstance = /*#__PURE__*/function () {
    function TemplateInstance(template, processor, options) {
      _classCallCheck(this, TemplateInstance);

      this.__parts = [];
      this.template = template;
      this.processor = processor;
      this.options = options;
    }

    _createClass(TemplateInstance, [{
      key: "update",
      value: function update(values) {
        var i = 0;

        var _iterator = _createForOfIteratorHelper(this.__parts),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var part = _step.value;

            if (part !== undefined) {
              part.setValue(values[i]);
            }

            i++;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper(this.__parts),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _part = _step2.value;

            if (_part !== undefined) {
              _part.commit();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }, {
      key: "_clone",
      value: function _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari does not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        var fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
        var stack = [];
        var parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

        var walker = document.createTreeWalker(fragment, 133
        /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
        , null, false);
        var partIndex = 0;
        var nodeIndex = 0;
        var part;
        var node = walker.nextNode(); // Loop through all the nodes and parts of a template

        while (partIndex < parts.length) {
          part = parts[partIndex];

          if (!isTemplatePartActive(part)) {
            this.__parts.push(undefined);

            partIndex++;
            continue;
          } // Progress the tree walker until we find our next part's node.
          // Note that multiple parts may share the same node (attribute parts
          // on a single element), so this loop may not run at all.


          while (nodeIndex < part.index) {
            nodeIndex++;

            if (node.nodeName === 'TEMPLATE') {
              stack.push(node);
              walker.currentNode = node.content;
            }

            if ((node = walker.nextNode()) === null) {
              // We've exhausted the content inside a nested template element.
              // Because we still have parts (the outer for-loop), we know:
              // - There is a template in the stack
              // - The walker will find a nextNode outside the template
              walker.currentNode = stack.pop();
              node = walker.nextNode();
            }
          } // We've arrived at our part's node.


          if (part.type === 'node') {
            var _part2 = this.processor.handleTextExpression(this.options);

            _part2.insertAfterNode(node.previousSibling);

            this.__parts.push(_part2);
          } else {
            var _this$__parts;

            (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options)));
          }

          partIndex++;
        }

        if (isCEPolyfill) {
          document.adoptNode(fragment);
          customElements.upgrade(fragment);
        }

        return fragment;
      }
    }]);

    return TemplateInstance;
  }();

  var commentMarker = " ".concat(marker, " ");
  /**
   * The return type of `html`, which holds a Template and the values from
   * interpolated expressions.
   */

  var TemplateResult = /*#__PURE__*/function () {
    function TemplateResult(strings, values, type, processor) {
      _classCallCheck(this, TemplateResult);

      this.strings = strings;
      this.values = values;
      this.type = type;
      this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */


    _createClass(TemplateResult, [{
      key: "getHTML",
      value: function getHTML() {
        var l = this.strings.length - 1;
        var html = '';
        var isCommentBinding = false;

        for (var i = 0; i < l; i++) {
          var s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
          // into the template source before it's parsed by the browser's HTML
          // parser. The marker type is based on whether the expression is in an
          // attribute, text, or comment position.
          //   * For node-position bindings we insert a comment with the marker
          //     sentinel as its text content, like <!--{{lit-guid}}-->.
          //   * For attribute bindings we insert just the marker sentinel for the
          //     first binding, so that we support unquoted attribute bindings.
          //     Subsequent bindings can use a comment marker because multi-binding
          //     attributes must be quoted.
          //   * For comment bindings we insert just the marker sentinel so we don't
          //     close the comment.
          //
          // The following code scans the template source, but is *not* an HTML
          // parser. We don't need to track the tree structure of the HTML, only
          // whether a binding is inside a comment, and if not, if it appears to be
          // the first binding in an attribute.

          var commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
          // comment close. Because <-- can appear in an attribute value there can
          // be false positives.

          isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceding the
          // expression. This can match "name=value" like structures in text,
          // comments, and attribute values, so there can be false-positives.

          var attributeMatch = lastAttributeNameRegex.exec(s);

          if (attributeMatch === null) {
            // We're only in this branch if we don't have a attribute-like
            // preceding sequence. For comments, this guards against unusual
            // attribute values like <div foo="<!--${'bar'}">. Cases like
            // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
            // below.
            html += s + (isCommentBinding ? commentMarker : nodeMarker);
          } else {
            // For attributes we use just a marker sentinel, and also append a
            // $lit$ suffix to the name to opt-out of attribute-specific parsing
            // that IE and Edge do for style and certain SVG attributes.
            html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
          }
        }

        html += this.strings[l];
        return html;
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
      }
    }]);

    return TemplateResult;
  }();

  var isPrimitive = function isPrimitive(value) {
    return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
  };
  var isIterable = function isIterable(value) {
    return Array.isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !!(value && value[Symbol.iterator]);
  };
  /**
   * Writes attribute values to the DOM for a group of AttributeParts bound to a
   * single attribute. The value is only set once even if there are multiple parts
   * for an attribute.
   */

  var AttributeCommitter = /*#__PURE__*/function () {
    function AttributeCommitter(element, name, strings) {
      _classCallCheck(this, AttributeCommitter);

      this.dirty = true;
      this.element = element;
      this.name = name;
      this.strings = strings;
      this.parts = [];

      for (var i = 0; i < strings.length - 1; i++) {
        this.parts[i] = this._createPart();
      }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */


    _createClass(AttributeCommitter, [{
      key: "_createPart",
      value: function _createPart() {
        return new AttributePart(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        var strings = this.strings;
        var l = strings.length - 1;
        var text = '';

        for (var i = 0; i < l; i++) {
          text += strings[i];
          var part = this.parts[i];

          if (part !== undefined) {
            var v = part.value;

            if (isPrimitive(v) || !isIterable(v)) {
              text += typeof v === 'string' ? v : String(v);
            } else {
              var _iterator = _createForOfIteratorHelper(v),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var t = _step.value;
                  text += typeof t === 'string' ? t : String(t);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }

        text += strings[l];
        return text;
      }
    }, {
      key: "commit",
      value: function commit() {
        if (this.dirty) {
          this.dirty = false;
          this.element.setAttribute(this.name, this._getValue());
        }
      }
    }]);

    return AttributeCommitter;
  }();
  /**
   * A Part that controls all or part of an attribute value.
   */

  var AttributePart = /*#__PURE__*/function () {
    function AttributePart(committer) {
      _classCallCheck(this, AttributePart);

      this.value = undefined;
      this.committer = committer;
    }

    _createClass(AttributePart, [{
      key: "setValue",
      value: function setValue(value) {
        if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
          this.value = value; // If the value is a not a directive, dirty the committer so that it'll
          // call setAttribute. If the value is a directive, it'll dirty the
          // committer if it calls setValue().

          if (!isDirective(value)) {
            this.committer.dirty = true;
          }
        }
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this.value)) {
          var directive = this.value;
          this.value = noChange;
          directive(this);
        }

        if (this.value === noChange) {
          return;
        }

        this.committer.commit();
      }
    }]);

    return AttributePart;
  }();
  /**
   * A Part that controls a location within a Node tree. Like a Range, NodePart
   * has start and end locations and can set and update the Nodes between those
   * locations.
   *
   * NodeParts support several value types: primitives, Nodes, TemplateResults,
   * as well as arrays and iterables of those types.
   */

  var NodePart = /*#__PURE__*/function () {
    function NodePart(options) {
      _classCallCheck(this, NodePart);

      this.value = undefined;
      this.__pendingValue = undefined;
      this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */


    _createClass(NodePart, [{
      key: "appendInto",
      value: function appendInto(container) {
        this.startNode = container.appendChild(createMarker());
        this.endNode = container.appendChild(createMarker());
      }
      /**
       * Inserts this part after the `ref` node (between `ref` and `ref`'s next
       * sibling). Both `ref` and its next sibling must be static, unchanging nodes
       * such as those that appear in a literal section of a template.
       *
       * This part must be empty, as its contents are not automatically moved.
       */

    }, {
      key: "insertAfterNode",
      value: function insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
      }
      /**
       * Appends this part into a parent part.
       *
       * This part must be empty, as its contents are not automatically moved.
       */

    }, {
      key: "appendIntoPart",
      value: function appendIntoPart(part) {
        part.__insert(this.startNode = createMarker());

        part.__insert(this.endNode = createMarker());
      }
      /**
       * Inserts this part after the `ref` part.
       *
       * This part must be empty, as its contents are not automatically moved.
       */

    }, {
      key: "insertAfterPart",
      value: function insertAfterPart(ref) {
        ref.__insert(this.startNode = createMarker());

        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
      }
    }, {
      key: "setValue",
      value: function setValue(value) {
        this.__pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        if (this.startNode.parentNode === null) {
          return;
        }

        while (isDirective(this.__pendingValue)) {
          var directive = this.__pendingValue;
          this.__pendingValue = noChange;
          directive(this);
        }

        var value = this.__pendingValue;

        if (value === noChange) {
          return;
        }

        if (isPrimitive(value)) {
          if (value !== this.value) {
            this.__commitText(value);
          }
        } else if (value instanceof TemplateResult) {
          this.__commitTemplateResult(value);
        } else if (value instanceof Node) {
          this.__commitNode(value);
        } else if (isIterable(value)) {
          this.__commitIterable(value);
        } else if (value === nothing) {
          this.value = nothing;
          this.clear();
        } else {
          // Fallback, will render the string representation
          this.__commitText(value);
        }
      }
    }, {
      key: "__insert",
      value: function __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
      }
    }, {
      key: "__commitNode",
      value: function __commitNode(value) {
        if (this.value === value) {
          return;
        }

        this.clear();

        this.__insert(value);

        this.value = value;
      }
    }, {
      key: "__commitText",
      value: function __commitText(value) {
        var node = this.startNode.nextSibling;
        value = value == null ? '' : value; // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.

        var valueAsString = typeof value === 'string' ? value : String(value);

        if (node === this.endNode.previousSibling && node.nodeType === 3
        /* Node.TEXT_NODE */
        ) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
          } else {
          this.__commitNode(document.createTextNode(valueAsString));
        }

        this.value = value;
      }
    }, {
      key: "__commitTemplateResult",
      value: function __commitTemplateResult(value) {
        var template = this.options.templateFactory(value);

        if (this.value instanceof TemplateInstance && this.value.template === template) {
          this.value.update(value.values);
        } else {
          // Make sure we propagate the template processor from the TemplateResult
          // so that we use its syntax extension, etc. The template factory comes
          // from the render function options so that it can control template
          // caching and preprocessing.
          var instance = new TemplateInstance(template, value.processor, this.options);

          var fragment = instance._clone();

          instance.update(value.values);

          this.__commitNode(fragment);

          this.value = instance;
        }
      }
    }, {
      key: "__commitIterable",
      value: function __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
          this.value = [];
          this.clear();
        } // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render


        var itemParts = this.value;
        var partIndex = 0;
        var itemPart;

        var _iterator2 = _createForOfIteratorHelper(value),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            // Try to reuse an existing part
            itemPart = itemParts[partIndex]; // If no existing part, create a new one

            if (itemPart === undefined) {
              itemPart = new NodePart(this.options);
              itemParts.push(itemPart);

              if (partIndex === 0) {
                itemPart.appendIntoPart(this);
              } else {
                itemPart.insertAfterPart(itemParts[partIndex - 1]);
              }
            }

            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (partIndex < itemParts.length) {
          // Truncate the parts array so _value reflects the current state
          itemParts.length = partIndex;
          this.clear(itemPart && itemPart.endNode);
        }
      }
    }, {
      key: "clear",
      value: function clear() {
        var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
      }
    }]);

    return NodePart;
  }();
  /**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */

  var BooleanAttributePart = /*#__PURE__*/function () {
    function BooleanAttributePart(element, name, strings) {
      _classCallCheck(this, BooleanAttributePart);

      this.value = undefined;
      this.__pendingValue = undefined;

      if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
        throw new Error('Boolean attributes can only contain a single expression');
      }

      this.element = element;
      this.name = name;
      this.strings = strings;
    }

    _createClass(BooleanAttributePart, [{
      key: "setValue",
      value: function setValue(value) {
        this.__pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this.__pendingValue)) {
          var directive = this.__pendingValue;
          this.__pendingValue = noChange;
          directive(this);
        }

        if (this.__pendingValue === noChange) {
          return;
        }

        var value = !!this.__pendingValue;

        if (this.value !== value) {
          if (value) {
            this.element.setAttribute(this.name, '');
          } else {
            this.element.removeAttribute(this.name);
          }

          this.value = value;
        }

        this.__pendingValue = noChange;
      }
    }]);

    return BooleanAttributePart;
  }();
  /**
   * Sets attribute values for PropertyParts, so that the value is only set once
   * even if there are multiple parts for a property.
   *
   * If an expression controls the whole property value, then the value is simply
   * assigned to the property under control. If there are string literals or
   * multiple expressions, then the strings are expressions are interpolated into
   * a string first.
   */

  var PropertyCommitter = /*#__PURE__*/function (_AttributeCommitter) {
    _inherits(PropertyCommitter, _AttributeCommitter);

    var _super = _createSuper(PropertyCommitter);

    function PropertyCommitter(element, name, strings) {
      var _this;

      _classCallCheck(this, PropertyCommitter);

      _this = _super.call(this, element, name, strings);
      _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
      return _this;
    }

    _createClass(PropertyCommitter, [{
      key: "_createPart",
      value: function _createPart() {
        return new PropertyPart(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        if (this.single) {
          return this.parts[0].value;
        }

        return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
      }
    }, {
      key: "commit",
      value: function commit() {
        if (this.dirty) {
          this.dirty = false; // eslint-disable-next-line @typescript-eslint/no-explicit-any

          this.element[this.name] = this._getValue();
        }
      }
    }]);

    return PropertyCommitter;
  }(AttributeCommitter);
  var PropertyPart = /*#__PURE__*/function (_AttributePart) {
    _inherits(PropertyPart, _AttributePart);

    var _super2 = _createSuper(PropertyPart);

    function PropertyPart() {
      _classCallCheck(this, PropertyPart);

      return _super2.apply(this, arguments);
    }

    return PropertyPart;
  }(AttributePart); // Detect event listener options support. If the `capture` property is read
  // from the options object, then options are supported. If not, then the third
  // argument to add/removeEventListener is interpreted as the boolean capture
  // value so we should only pass the `capture` property.

  var eventOptionsSupported = false; // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
  // blocks right into the body of a module

  (function () {
    try {
      var options = {
        get capture() {
          eventOptionsSupported = true;
          return false;
        }

      }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      window.addEventListener('test', options, options); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      window.removeEventListener('test', options, options);
    } catch (_e) {// event options not supported
    }
  })();

  var EventPart = /*#__PURE__*/function () {
    function EventPart(element, eventName, eventContext) {
      var _this2 = this;

      _classCallCheck(this, EventPart);

      this.value = undefined;
      this.__pendingValue = undefined;
      this.element = element;
      this.eventName = eventName;
      this.eventContext = eventContext;

      this.__boundHandleEvent = function (e) {
        return _this2.handleEvent(e);
      };
    }

    _createClass(EventPart, [{
      key: "setValue",
      value: function setValue(value) {
        this.__pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this.__pendingValue)) {
          var directive = this.__pendingValue;
          this.__pendingValue = noChange;
          directive(this);
        }

        if (this.__pendingValue === noChange) {
          return;
        }

        var newListener = this.__pendingValue;
        var oldListener = this.value;
        var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
        var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

        if (shouldRemoveListener) {
          this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }

        if (shouldAddListener) {
          this.__options = getOptions(newListener);
          this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }

        this.value = newListener;
        this.__pendingValue = noChange;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(event) {
        if (typeof this.value === 'function') {
          this.value.call(this.eventContext || this.element, event);
        } else {
          this.value.handleEvent(event);
        }
      }
    }]);

    return EventPart;
  }(); // We copy options because of the inconsistent behavior of browsers when reading
  // the third argument of add/removeEventListener. IE11 doesn't support options
  // at all. Chrome 41 only reads `capture` if the argument is an object.

  var getOptions = function getOptions(o) {
    return o && (eventOptionsSupported ? {
      capture: o.capture,
      passive: o.passive,
      once: o.once
    } : o.capture);
  };

  /**
   * Creates Parts when a template is instantiated.
   */

  var DefaultTemplateProcessor = /*#__PURE__*/function () {
    function DefaultTemplateProcessor() {
      _classCallCheck(this, DefaultTemplateProcessor);
    }

    _createClass(DefaultTemplateProcessor, [{
      key: "handleAttributeExpressions",

      /**
       * Create parts for an attribute-position binding, given the event, attribute
       * name, and string literals.
       *
       * @param element The element containing the binding
       * @param name  The attribute name
       * @param strings The string literals. There are always at least two strings,
       *   event for fully-controlled bindings with a single expression.
       */
      value: function handleAttributeExpressions(element, name, strings, options) {
        var prefix = name[0];

        if (prefix === '.') {
          var _committer = new PropertyCommitter(element, name.slice(1), strings);

          return _committer.parts;
        }

        if (prefix === '@') {
          return [new EventPart(element, name.slice(1), options.eventContext)];
        }

        if (prefix === '?') {
          return [new BooleanAttributePart(element, name.slice(1), strings)];
        }

        var committer = new AttributeCommitter(element, name, strings);
        return committer.parts;
      }
      /**
       * Create parts for a text-position binding.
       * @param templateFactory
       */

    }, {
      key: "handleTextExpression",
      value: function handleTextExpression(options) {
        return new NodePart(options);
      }
    }]);

    return DefaultTemplateProcessor;
  }();
  var defaultTemplateProcessor = new DefaultTemplateProcessor();

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  /**
   * The default TemplateFactory which caches Templates keyed on
   * result.type and result.strings.
   */

  function templateFactory(result) {
    var templateCache = templateCaches.get(result.type);

    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      templateCaches.set(result.type, templateCache);
    }

    var template = templateCache.stringsArray.get(result.strings);

    if (template !== undefined) {
      return template;
    } // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content


    var key = result.strings.join(marker); // Check if we already have a Template for this key

    template = templateCache.keyString.get(key);

    if (template === undefined) {
      // If we have not seen this key before, create a new Template
      template = new Template(result, result.getTemplateElement()); // Cache the Template for this key

      templateCache.keyString.set(key, template);
    } // Cache all future queries for this TemplateStringsArray


    templateCache.stringsArray.set(result.strings, template);
    return template;
  }
  var templateCaches = new Map();

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var parts = new WeakMap();
  /**
   * Renders a template result or other value to a container.
   *
   * To update a container with new values, reevaluate the template literal and
   * call `render` with the new result.
   *
   * @param result Any value renderable by NodePart - typically a TemplateResult
   *     created by evaluating a template tag like `html` or `svg`.
   * @param container A DOM parent to render to. The entire contents are either
   *     replaced, or efficiently updated if the same result type was previous
   *     rendered there.
   * @param options RenderOptions for the entire render tree rendered to this
   *     container. Render options must *not* change between renders to the same
   *     container, as those changes will not effect previously rendered DOM.
   */

  var render = function render(result, container, options) {
    var part = parts.get(container);

    if (part === undefined) {
      removeNodes(container, container.firstChild);
      parts.set(container, part = new NodePart(Object.assign({
        templateFactory: templateFactory
      }, options)));
      part.appendInto(container);
    }

    part.setValue(result);
    part.commit();
  };

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  // This line will be used in regexes to search for lit-html usage.
  // TODO(justinfagnani): inject version number at build time

  if (typeof window !== 'undefined') {
    (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.2.1');
  }
  /**
   * Interprets a template literal as an HTML template that can efficiently
   * render to and update a container.
   */


  var html = function html(strings) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    return new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
  };

  // while addBelowSymbols gives the right look on the "light" basemap.

  /**
   * Add the layer to the map below the first label layer (e.g. street names).
   * @param {mapboxgl.Map} map
   * @param {Layer} layer
   */

  function addBelowLabels(map, layer) {
    var layers = map.getStyle().layers;
    var firstSymbolId = getFirstLabelId(layers);
    map.addLayer(layer, firstSymbolId);
  }
  /**
   * @param {Object[]} layers list of layers from the Mapbox map's style
   * @returns {string} id of the first id with "label" in the name
   */

  function getFirstLabelId(layers) {
    for (var i = 0; i < layers.length; i++) {
      if (layers[i].id.includes("label")) {
        return layers[i].id;
      }
    }
  }
  /** A layer on a Mapbox map. */


  var Layer = /*#__PURE__*/function () {
    /**
     * @param {mapboxgl.Map} map to add the layer to
     * @param {Object} layer a Layer object obeying the Mapbox style specification
     * @param {function} [adder] a function (map, layer) -> void that adds the layer
     *  to the map.
     */
    function Layer(map, layer, adder) {
      _classCallCheck(this, Layer);

      this.map = map;
      this.id = layer.id;
      this.sourceId = isString(layer.source) ? layer.source : layer.id;
      this.type = layer.type;
      this.sourceLayer = layer["source-layer"];

      if (adder) {
        adder(map, layer);
      } else {
        map.addLayer(layer);
      }

      this.getFeature = this.getFeature.bind(this);
    }

    _createClass(Layer, [{
      key: "setOpacity",
      value: function setOpacity(opacity) {
        this.setPaintProperty("".concat(this.type, "-opacity"), opacity);
      }
    }, {
      key: "setColor",
      value: function setColor(color) {
        this.setPaintProperty("".concat(this.type, "-color"), color);
      }
    }, {
      key: "getColor",
      value: function getColor() {
        return this.getPaintProperty("".concat(this.type, "-color"));
      }
    }, {
      key: "setPaintProperties",
      value: function setPaintProperties(properties) {
        for (var name in properties) {
          this.setPaintProperty(name, properties[name]);
        }
      }
    }, {
      key: "setFeatureState",
      value: function setFeatureState(featureId, state) {
        this.map.setFeatureState({
          source: this.sourceId,
          sourceLayer: this.sourceLayer,
          id: featureId
        }, state);
      }
    }, {
      key: "setPaintProperty",
      value: function setPaintProperty(name, value) {
        this.map.setPaintProperty(this.id, name, value);
      }
    }, {
      key: "getPaintProperty",
      value: function getPaintProperty(name) {
        return this.map.getPaintProperty(this.id, name);
      }
    }, {
      key: "getFeatureState",
      value: function getFeatureState(featureId) {
        return this.map.getFeatureState({
          source: this.sourceId,
          sourceLayer: this.sourceLayer,
          id: featureId
        });
      }
    }, {
      key: "getFeature",
      value: function getFeature(featureId) {
        var features = this.map.querySourceFeatures(this.sourceId, {
          sourceLayer: this.sourceLayer,
          filter: ["==", ["id"], featureId]
        });
        return features[0];
      }
    }, {
      key: "queryRenderedFeatures",
      value: function queryRenderedFeatures() {
        return this.map.queryRenderedFeatures(null, {
          layers: [this.id]
        });
      }
    }, {
      key: "querySourceFeatures",
      value: function querySourceFeatures() {
        return this.map.querySourceFeatures(this.sourceId, {
          sourceLayer: this.sourceLayer
        });
      }
    }, {
      key: "getAssignment",
      value: function getAssignment(featureId) {
        return this.getFeatureState(featureId).color;
      }
    }, {
      key: "setAssignment",
      value: function setAssignment(feature, part) {
        this.setFeatureState(feature.id, _objectSpread2(_objectSpread2({}, feature.state), {}, {
          color: part
        }));
      }
    }, {
      key: "on",
      value: function on(type) {
        var _this$map;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        (_this$map = this.map).on.apply(_this$map, [type, this.id].concat(args));
      }
    }, {
      key: "off",
      value: function off(type) {
        var _this$map2;

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        (_this$map2 = this.map).off.apply(_this$map2, [type, this.id].concat(args));
      }
    }, {
      key: "untilSourceLoaded",
      value: function untilSourceLoaded(callback) {
        var _this = this;

        if (this.map.isSourceLoaded(this.sourceId)) {
          return callback();
        }

        var handler = function handler() {
          return callback(function () {
            return _this.map.off("sourcedata", handler);
          });
        };

        this.map.on("sourcedata", handler);
      }
    }]);

    return Layer;
  }();

  var MapState = function MapState(mapContainer, options, mapStyle) {
    _classCallCheck(this, MapState);

    this.map = new mapboxgl.Map(_objectSpread2({
      container: mapContainer,
      style: mapStyle,
      attributionControl: false,
      minZoom: 10,
      pitchWithRotate: false,
      dragPan: true,
      touchZoomRotate: true
    }, options));
    this.nav = new mapboxgl.NavigationControl();
    this.map.addControl(this.nav, "top-left");
    this.mapboxgl = mapboxgl;
  };

  function addUnits(map, tileset, layerAdder) {
    //const block_color = "#0099cd";
    var block_color = "#202f24";
    var block_color_hover = "#000000";
    var gen_color_hover = "#777777";
    var units = new Layer(map, {
      id: tileset.sourceLayer,
      source: tileset.sourceLayer,
      "source-layer": tileset.sourceLayer,
      type: "fill",
      paint: {
        "fill-color": ["case", ["boolean", ["feature-state", "hover"], false], ["match", ["feature-state", "color"], 0, block_color_hover, gen_color_hover], ["match", ["feature-state", "color"], 0, block_color, "rgba(0, 0, 0, 0)"]],
        "fill-opacity": 0.55
      }
    }, layerAdder);
    var unitsBorders = new Layer(map, {
      id: "units-borders",
      type: "line",
      source: tileset.sourceLayer,
      "source-layer": tileset.sourceLayer,
      paint: {
        "line-color": "#444444",
        "line-width": ["interpolate", ["linear"], ["zoom"], 9.5, 0, 17, 2],
        "line-opacity": 0.2
      }
    }, layerAdder);
    return {
      units: units,
      unitsBorders: unitsBorders
    };
  }

  function addOverlay(map, tileset, layerAdder, overlayRule) {
    return new Layer(map, {
      id: "ovrlay",
      source: tileset.sourceLayer,
      "source-layer": tileset.sourceLayer,
      type: "fill",
      paint: overlayRule
    }, layerAdder);
  }

  function addLayers(map, tileset, layerAdder) {
    var showOverlay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var overlayRule = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    map.addSource(tileset.sourceLayer, tileset.source);
    var overlay = showOverlay ? addOverlay(map, tileset, layerAdder, overlayRule) : null;

    var _addUnits = addUnits(map, tileset, layerAdder),
        units = _addUnits.units,
        unitsBorders = _addUnits.unitsBorders;

    return {
      units: units,
      unitsBorders: unitsBorders,
      overlay: overlay
    };
  }

  var IdColumn = /*#__PURE__*/function () {
    function IdColumn(_ref) {
      var key = _ref.key,
          name = _ref.name;

      _classCallCheck(this, IdColumn);

      this.key = key;
      this.name = name;
    }

    _createClass(IdColumn, [{
      key: "getValue",
      value: function getValue(feature) {
        if (feature.properties === undefined) {
          return undefined;
        }

        return feature.properties[this.key];
      }
    }]);

    return IdColumn;
  }();

  var DistrictingPlan = /*#__PURE__*/function () {
    function DistrictingPlan(_ref) {
      var id = _ref.id,
          idColumn = _ref.idColumn;

      _classCallCheck(this, DistrictingPlan);

      if (id) {
        this.id = id;
      } else {
        this.id = generateId(8);
      }

      this.assignment = {};
      this.idColumn = idColumn;
    }

    _createClass(DistrictingPlan, [{
      key: "update",
      value: function update(feature, assignment) {
        this.assignment[this.idColumn.getValue(feature)] = assignment;
      }
    }]);

    return DistrictingPlan;
  }();

  /**
   * Holds all of the state that needs to be updated after
   * each brush stroke. (Mainly the Plan assignment and the
   * population tally.)
   */

  var State = /*#__PURE__*/function () {
    function State(map, _ref) {
      var id = _ref.id,
          units = _ref.units,
          showOverlay = _ref.showOverlay,
          overlayRule = _ref.overlayRule,
          args = _objectWithoutProperties(_ref, ["id", "units", "showOverlay", "overlayRule"]);

      _classCallCheck(this, State);

      this.unitsRecord = units;
      this.idColumn = new IdColumn(units.idColumn);
      this.plan = new DistrictingPlan(_objectSpread2(_objectSpread2({
        id: id
      }, args), {}, {
        idColumn: this.idColumn
      }));
      this.initializeMapState(map, units, addBelowLabels, showOverlay, overlayRule);
      this.subscribers = [];
      this.update = this.update.bind(this);
      this.render = this.render.bind(this);
    }

    _createClass(State, [{
      key: "initializeMapState",
      value: function initializeMapState(map, unitsRecord, layerAdder, showOverlay, overlayRule) {
        unitsRecord.tileset.source.promoteId = {};
        unitsRecord.tileset.source.promoteId[unitsRecord.tileset.sourceLayer] = unitsRecord.idColumn.key;

        var _addLayers = addLayers(map, unitsRecord.tileset, layerAdder, showOverlay, overlayRule),
            units = _addLayers.units,
            unitsBorders = _addLayers.unitsBorders,
            overlay = _addLayers.overlay;

        this.units = units;
        this.unitsBorders = unitsBorders;
        this.layers = [units, overlay];
        this.map = map;
      }
    }, {
      key: "update",
      value: function update(feature, part) {
        this.plan.update(feature, part);
      }
    }, {
      key: "subscribe",
      value: function subscribe(f) {
        this.subscribers.push(f);
        this.render();
      }
    }, {
      key: "render",
      value: function render() {
        var _iterator = _createForOfIteratorHelper(this.subscribers),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var f = _step.value;
            f();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "hasExpectedData",
      value: function hasExpectedData(feature) {
        if (feature === undefined || feature.properties === undefined) {
          return false;
        }

        var _iterator2 = _createForOfIteratorHelper(this.columns),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var column = _step2.value;

            if (feature.properties[column.key] === undefined) {
              return false;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return true;
      }
    }]);

    return State;
  }();

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n    <div class=\"ui-option\">\n        <legend class=\"ui-label ui-label--row\">\n            ", "\n        </legend>\n        <div class=\"slider-container\">\n            <input\n                class=\"slider\"\n                type=\"range\"\n                value=\"", "\"\n                min=\"1\"\n                max=\"40\"\n                @change=", "\n            />\n            <input\n                class=\"slider-value\"\n                type=\"number\"\n                value=\"", "\"\n                min=\"1\"\n                max=\"40\"\n                @change=", "\n            />\n        </div>\n    </div>\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  var BrushSlider = (function (radius, onChange, options) {
    return html(_templateObject(), options ? options.title : "Brush Size", radius, onChange, radius, onChange);
  });

  function _templateObject$1() {
    var data = _taggedTemplateLiteral(["\n            <div class=\"icon-list__item\" title=\"", "\">\n                <label>", "</label>\n                <input\n                    type=\"radio\"\n                    id=\"tool-", "\"\n                    name=\"tool\"\n                    value=\"", "\"\n                    @change=", "\n                    ?checked=", "\n                />\n                <div class=\"icon-list__item__radio\"></div>\n                ", "\n            </div>\n        "]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }

  var Tool = /*#__PURE__*/function () {
    function Tool(id, name, icon) {
      _classCallCheck(this, Tool);

      this.id = id;
      this.name = name;
      this.icon = icon;
      this.active = false;
    }

    _createClass(Tool, [{
      key: "activate",
      value: function activate() {
        this.active = true;
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this.active = false;
      }
    }, {
      key: "render",
      value: function render(selectTool) {
        var _this = this;

        return html(_templateObject$1(), this.name, this.name, this.id, this.id, function () {
          return selectTool(_this.id);
        }, this.active, this.icon);
      }
    }]);

    return Tool;
  }();

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["", ""]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$2() {
    var data = _taggedTemplateLiteral(["<img src=\"", "\" alt=\"Brush\" \n            style=\"display: inline-block; height: 26px !important; z-index: 100;\"></img>"]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }

  var BrushTool = /*#__PURE__*/function (_Tool) {
    _inherits(BrushTool, _Tool);

    var _super = _createSuper(BrushTool);

    function BrushTool(brush) {
      var _this;

      _classCallCheck(this, BrushTool);

      var img_data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABXUlEQVR4Ae3ZEXT" + "DYBiF4UGhUBgMCoNBoVAYDmrDQGFQrNNwfgrDwnBQKASCxcEgEJxTITAMFAPfXgj1bH/W5Kev957z+Dmv3itN0zRN0zRNu6QNsUSBPR" + "JozUbIYSc2OJ3ihCMpTjiS4oQjKU5Yojhhe8UJKxQnbKk4f8swgJMpjuIojuIojuIojuIojuIojuIojuIojuIojuI43afihPeEOlocRQ" + "rHUaRwHEUKx1EkV3EesEGBQyPHGrMOkdzEmeAD1iLFuD2SrzhzVLB/KjFtiZR6iTPFEXamEmO4XwHrKIXrJbCeZnC7HaynNdyuhPWUw+0" + "sggNc7hYWQQmXe4RFUMDl3mERZHC3e9SwCFZwtTm+YRHUuPEQZYQ5UlhEb3CxDBZZhbEumt/VSOBqA+xgETzD7VaoYB0csYD7XeP1zFBb" + "3OGiNsQCW3yhhjVK5HjBBJqmaZqmaZrmcz/pIiIIU7ugBgAAAABJRU5ErkJggg==";
      var icon = html(_templateObject$2(), img_data);
      _this = _super.call(this, "brush", "Draw", icon);
      _this.brush = brush;
      _this.options = new BrushToolOptions(brush);
      return _this;
    }

    _createClass(BrushTool, [{
      key: "activate",
      value: function activate() {
        _get(_getPrototypeOf(BrushTool.prototype), "activate", this).call(this);

        this.brush.activate();
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        _get(_getPrototypeOf(BrushTool.prototype), "deactivate", this).call(this);

        this.brush.deactivate();
      }
    }]);

    return BrushTool;
  }(Tool);

  var BrushToolOptions = /*#__PURE__*/function () {
    function BrushToolOptions(brush, renderToolbar) {
      _classCallCheck(this, BrushToolOptions);

      this.brush = brush;
      this.renderToolbar = renderToolbar;
      this.changeRadius = this.changeRadius.bind(this);
    }

    _createClass(BrushToolOptions, [{
      key: "changeRadius",
      value: function changeRadius(e) {
        e.stopPropagation();
        var value = parseInt(e.target.value);

        if (this.brush.radius != value) {
          this.brush.radius = value;
        }

        this.renderToolbar();
      }
    }, {
      key: "render",
      value: function render() {
        return html(_templateObject2(), BrushSlider(this.brush.radius, this.changeRadius));
      }
    }]);

    return BrushToolOptions;
  }();

  function _templateObject2$1() {
    var data = _taggedTemplateLiteral(["\n            ", "\n        "]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$3() {
    var data = _taggedTemplateLiteral(["<img src=\"", "\" alt=\"Erase\" \n            style=\"display: inline-block; height: 26px !important; z-index: 100;\"></img>"]);

    _templateObject$3 = function _templateObject() {
      return data;
    };

    return data;
  }

  var EraserTool = /*#__PURE__*/function (_Tool) {
    _inherits(EraserTool, _Tool);

    var _super = _createSuper(EraserTool);

    function EraserTool(brush) {
      var _this;

      _classCallCheck(this, EraserTool);

      var img_data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/" + "xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/" + "AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABBElEQVRo3u3Yuw7BYBiH8WdmcLorXIxuRjtuSWKjTiM3YBWjSQ3yJY00aL9TX94n+UbJ7y/" + "apkDTNO2fagJz4ARcgSUwjI36tjaQAtnLuQNJbNynWsC6AJ8/49hIG3xtR5TB125EFXxtRtjgo49wgY82wiU++Agf+GAj2sDGE94cbw+" + "7EHjzxB5IxZuzkozPgJtkfAacJeMzYCoZnwING7zP+/ynswe6ile84uXgezb4JsX/HoQ4W6BjgweYScYDHCPgD1j+bPJdAuN" + "3rr5500IyHqDP8+UhBN7qVvmuRDLeNPKEL7pgJyU+H3WELb70AJcjXOArDXAxwhW+8gBN0zTtN3sAFI5CX1O33XwAAAAldEVYdGRhdG" + "U6Y3JlYXRlADIwMjAtMDgtMDRUMDI6NDg6NDkrMDA6MDADjPrkAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA4LTA0VDAyOjQ4O" + "jQ5KzAwOjAwctFCWAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=";
      var icon = html(_templateObject$3(), img_data);
      _this = _super.call(this, "eraser", "Erase", icon);
      _this.brush = brush;
      _this.options = new EraserToolOptions(brush);
      return _this;
    }

    _createClass(EraserTool, [{
      key: "activate",
      value: function activate() {
        _get(_getPrototypeOf(EraserTool.prototype), "activate", this).call(this);

        this.brush.activate();
        this.brush.startErasing();
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        _get(_getPrototypeOf(EraserTool.prototype), "deactivate", this).call(this);

        this.brush.deactivate();
        this.brush.stopErasing();
      }
    }]);

    return EraserTool;
  }(Tool);

  var EraserToolOptions = /*#__PURE__*/function () {
    function EraserToolOptions(brush, renderToolbar) {
      _classCallCheck(this, EraserToolOptions);

      this.brush = brush;
      this.renderToolbar = renderToolbar;
      this.changeRadius = this.changeRadius.bind(this);
    }

    _createClass(EraserToolOptions, [{
      key: "changeRadius",
      value: function changeRadius(e) {
        e.stopPropagation();
        var value = parseInt(e.target.value);

        if (this.brush.radius != value) {
          this.brush.radius = value;
        }

        this.renderToolbar();
      }
    }, {
      key: "render",
      value: function render() {
        return html(_templateObject2$1(), BrushSlider(this.brush.radius, this.changeRadius, {
          title: "Eraser Size"
        }));
      }
    }]);

    return EraserToolOptions;
  }();

  function _templateObject$4() {
    var data = _taggedTemplateLiteral(["<img src=\"", "\" alt=\"Pan\" \n            style=\"display: inline-block; height: 24px !important; z-index: 100;\"></img>"]);

    _templateObject$4 = function _templateObject() {
      return data;
    };

    return data;
  }

  var PanTool = /*#__PURE__*/function (_Tool) {
    _inherits(PanTool, _Tool);

    var _super = _createSuper(PanTool);

    function PanTool() {
      _classCallCheck(this, PanTool);

      var img_data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABtElEQVR4Aez" + "WAWYDURSF4SIIsoCgiwiCIgAUUGQBs4QACugyggK6hCAoAgigKIKiyAIGRTC4/QGlcR6PiTH3HL4N/OOOdzfQTbDBO76xQwPmTXBA" + "XPGG9HtBCA1S7xMh7LKfZBS02U8ySrKfZJTVnOTwN8MKDZaY1gaqOMnB7xFnxB8nLPsPhIFvgU583fvs" + "gfYIYZs9UIsQPrIHirLbBtIPSwfSD0sHKj8skwcqPyyzB4qC1oEKHMiBHMiBHMiBHMiBHKiHOZADOZAD" + "OZADOZADDUCSQA7kQA7kQA40caD/m2GLFhfs8QQHYnOcEFccsEgSSMcROrxiniSQjiO0eMY0S6AjosIX" + "1hkCPeAHUemAxdj/QauKSOL/NJ5A9ZHE/2kkgXSkhPQcSc+RCnMkOR3p4kB6a3QO5Eh6jqTnSMU5kp4j" + "6TlST2tGEueM3rYZQaDj7/B7cTSQVoM8MRpIpG+oGw0kaEUjgttLo4HUj9sro4H0HnfqGQ2k3+DjMwYY" + "VA/iwMlmGCQgfDCNTELd4s0wyIAKEK8fBKlmPvhglUEMdIC4Gdpy/UynLsRh6FydCrGOBABk1k0h3bUP" + "JgAAAABJRU5ErkJggg==";
      var icon = html(_templateObject$4(), img_data);
      return _super.call(this, "pan", "Pan", icon);
    }

    return PanTool;
  }(Tool);

  var Hover = /*#__PURE__*/function () {
    function Hover(layer) {
      _classCallCheck(this, Hover);

      this.layer = layer;
      this.hoveredFeature = null;
      this.onMouseMove = this.onMouseMove.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.hoverOff = this.hoverOff.bind(this);
    }

    _createClass(Hover, [{
      key: "hoverOff",
      value: function hoverOff() {
        if (this.hoveredFeature !== null) {
          this.layer.setFeatureState(this.hoveredFeature.id, _objectSpread2(_objectSpread2({}, this.hoveredFeature.state), {}, {
            hover: false
          }));
          this.hoveredFeature = null;
        }
      }
    }, {
      key: "hoverOn",
      value: function hoverOn(feature) {
        this.hoveredFeature = feature;
        this.layer.setFeatureState(feature.id, _objectSpread2(_objectSpread2({}, feature.state), {}, {
          hover: true
        }));
      }
    }, {
      key: "onMouseMove",
      value: function onMouseMove(e) {
        if (e.features.length > 0) {
          this.hoverOff();
          this.hoverOn(e.features[0]);
        }
      }
    }, {
      key: "onMouseLeave",
      value: function onMouseLeave() {
        this.hoverOff();
      }
    }, {
      key: "activate",
      value: function activate() {
        this.layer.on("mousemove", this.onMouseMove);
        this.layer.on("mouseleave", this.onMouseLeave);
        this.layer.on("touchmove", this.onMouseMove, {
          passive: false
        });
        this.layer.on("touchend", this.onMouseLeave);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this.layer.off("mousemove", this.onMouseMove);
        this.layer.off("mouseleave", this.onMouseLeave);
        this.layer.off("touchmove", this.onMouseMove);
        this.layer.off("touchend", this.onMouseLeave);
      }
    }]);

    return Hover;
  }();
  var HoverWithRadius = /*#__PURE__*/function (_Hover) {
    _inherits(HoverWithRadius, _Hover);

    var _super = _createSuper(HoverWithRadius);

    function HoverWithRadius(layer, radius) {
      var _this;

      _classCallCheck(this, HoverWithRadius);

      _this = _super.call(this, layer);
      _this.radius = radius;
      _this.hoveredFeatures = [];
      return _this;
    }

    _createClass(HoverWithRadius, [{
      key: "hoverOff",
      value: function hoverOff() {
        var _this2 = this;

        this.hoveredFeatures.forEach(function (feature) {
          _this2.layer.setFeatureState(feature.id, _objectSpread2(_objectSpread2({}, feature.state), {}, {
            hover: false
          }));
        });
        this.hoveredFeatures = [];
      }
    }, {
      key: "hoverOn",
      value: function hoverOn(features) {
        var _this3 = this;

        this.hoveredFeatures = features;
        this.hoveredFeatures.forEach(function (feature) {
          _this3.layer.setFeatureState(feature.id, _objectSpread2(_objectSpread2({}, feature.state), {}, {
            hover: true
          }));
        });
      }
    }, {
      key: "onMouseMove",
      value: function onMouseMove(e) {
        var box = boxAround(e.point, this.radius);
        var features = this.layer.map.queryRenderedFeatures(box, {
          layers: [this.layer.id]
        });

        if (features.length > 0) {
          this.hoverOff();
          this.hoverOn(features);
        }
      }
    }]);

    return HoverWithRadius;
  }(Hover);

  function boxAround(point, radius) {
    var southwest = [point.x + radius, point.y + radius];
    var northeast = [point.x - radius, point.y - radius];
    return [northeast, southwest];
  }

  var Brush = /*#__PURE__*/function (_HoverWithRadius) {
    _inherits(Brush, _HoverWithRadius);

    var _super = _createSuper(Brush);

    function Brush(layer, radius, color) {
      var _this;

      _classCallCheck(this, Brush);

      _this = _super.call(this, layer, radius);
      _this.color = color;
      _this.coloring = false;
      _this.locked = false;
      _this.listeners = {
        colorend: [],
        colorfeature: [],
        mouseup: []
      };
      bindAll(["onMouseDown", "onMouseUp", "onClick", "onTouchStart"], _assertThisInitialized(_this));
      return _this;
    }

    _createClass(Brush, [{
      key: "setColor",
      value: function setColor(color) {
        this.color = parseInt(color);
      }
    }, {
      key: "startErasing",
      value: function startErasing() {
        this._previousColor = this.color;
        this.color = null;
        this.erasing = true;
      }
    }, {
      key: "stopErasing",
      value: function stopErasing() {
        this.color = this._previousColor;
        this.erasing = false;
      }
    }, {
      key: "hoverOn",
      value: function hoverOn(features) {
        this.hoveredFeatures = features;

        if (this.coloring === true) {
          this.colorFeatures();
        } else {
          _get(_getPrototypeOf(Brush.prototype), "hoverOn", this).call(this, features);
        }
      }
    }, {
      key: "colorFeatures",
      value: function colorFeatures() {
        var _this2 = this;

        if (this.locked && !this.erasing) {
          this._colorFeatures(function (feature) {
            return feature.state.color === null || feature.state.color === undefined;
          });
        } else {
          this._colorFeatures(function (feature) {
            return feature.state.color !== _this2.color;
          });
        }
      }
    }, {
      key: "_colorFeatures",
      value: function _colorFeatures(filter) {
        var seenFeatures = new Set();

        var _iterator = _createForOfIteratorHelper(this.hoveredFeatures),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var feature = _step.value;

            if (filter(feature) && !feature.state.home) {
              if (!seenFeatures.has(feature.id)) {
                seenFeatures.add(feature.id);

                var _iterator3 = _createForOfIteratorHelper(this.listeners.colorfeature),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var listener = _step3.value;
                    listener(feature, this.color);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }

              this.layer.setFeatureState(feature.id, _objectSpread2(_objectSpread2({}, feature.state), {}, {
                color: this.color,
                hover: true
              }));
              feature.state.color = this.color;
            } else {
              this.layer.setFeatureState(feature.id, _objectSpread2(_objectSpread2({}, feature.state), {}, {
                hover: true
              }));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper(this.listeners.colorend),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _listener = _step2.value;

            _listener();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }, {
      key: "onClick",
      value: function onClick() {
        this.colorFeatures();
      }
    }, {
      key: "onMouseDown",
      value: function onMouseDown(e) {
        e.preventDefault(); //e.originalEvent.preventDefault();

        this.coloring = true;
        window.addEventListener("mouseup", this.onMouseUp);
        window.addEventListener("touchend", this.onMouseUp);
        window.addEventListener("touchcancel", this.onMouseUp);
        document.body.classList.add("stop-scrolling");
      }
    }, {
      key: "onMouseUp",
      value: function onMouseUp() {
        this.coloring = false;
        window.removeEventListener("mouseup", this.onMouseUp);
        window.removeEventListener("touchend", this.onMouseUp);
        window.removeEventListener("touchcancel", this.onMouseUp);
        setTimeout(function () {
          document.body.classList.remove("stop-scrolling");
        }, 60);

        var _iterator4 = _createForOfIteratorHelper(this.listeners.mouseup),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var listener = _step4.value;
            listener();
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }, {
      key: "onTouchStart",
      value: function onTouchStart(e) {
        if (e.points && e.points.length <= 1) {
          this.onMouseDown(e);
        }
      }
    }, {
      key: "activate",
      value: function activate() {
        this.layer.map.getCanvas().classList.add("brush-tool");

        _get(_getPrototypeOf(Brush.prototype), "activate", this).call(this);

        this.layer.map.dragPan.disable();
        this.layer.map.touchZoomRotate.disable();
        this.layer.map.doubleClickZoom.disable();
        this.layer.on("click", this.onClick);
        this.layer.map.on("touchstart", this.onTouchStart); //, {capture: true, passive: false});

        this.layer.map.on("mousedown", this.onMouseDown); //, {capture: true, passive: false});
        //this.layer.map._canvas.addEventListener("touchmove", this.onTouchMove, {capture: true, passive: false});
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this.layer.map.getCanvas().classList.remove("brush-tool");

        _get(_getPrototypeOf(Brush.prototype), "deactivate", this).call(this);

        this.layer.map.dragPan.enable();
        this.layer.map.doubleClickZoom.enable();
        this.layer.map.touchZoomRotate.enable();
        this.layer.off("click", this.onClick);
        this.layer.map.off("touchstart", this.onTouchStart);
        this.layer.map.off("mousedown", this.onMouseDown);
      }
    }, {
      key: "on",
      value: function on(event, listener) {
        this.listeners[event].push(listener);
      }
    }]);

    return Brush;
  }(HoverWithRadius);

  function ToolsPlugin(editor) {
    var state = editor.state,
        toolbar = editor.toolbar;
    var brush = new Brush(state.units, 10, 0);
    brush.on("colorfeature", state.update);
    brush.on("colorend", state.render);
    var tools = [new PanTool(), new BrushTool(brush), new EraserTool(brush)];

    for (var _i = 0, _tools = tools; _i < _tools.length; _i++) {
      var tool = _tools[_i];
      toolbar.addTool(tool);
    }

    toolbar.selectTool("brush");
  }

  var UIStateStore = /*#__PURE__*/function () {
    function UIStateStore(reducer, initialState) {
      _classCallCheck(this, UIStateStore);

      this.reducer = reducer;
      this.state = initialState;
      this.subscribers = [];
      bindAll(["dispatch", "subscribe"], this);
    }

    _createClass(UIStateStore, [{
      key: "dispatch",
      value: function dispatch(action) {
        var _this = this;

        var nextState = this.reducer(this.state, action);

        if (nextState !== this.state) {
          this.state = nextState;
          this.subscribers.forEach(function (subscriber) {
            return subscriber(_this.state, _this.dispatch);
          });
        }
      }
    }, {
      key: "subscribe",
      value: function subscribe(subscriber) {
        this.subscribers.push(subscriber);
      }
    }]);

    return UIStateStore;
  }();

  // TODO(kschaaf): Refactor into Part API?

  var createAndInsertPart = function createAndInsertPart(containerPart, beforePart) {
    var container = containerPart.startNode.parentNode;
    var beforeNode = beforePart === undefined ? containerPart.endNode : beforePart.startNode;
    var startNode = container.insertBefore(createMarker(), beforeNode);
    container.insertBefore(createMarker(), beforeNode);
    var newPart = new NodePart(containerPart.options);
    newPart.insertAfterNode(startNode);
    return newPart;
  };

  var updatePart = function updatePart(part, value) {
    part.setValue(value);
    part.commit();
    return part;
  };

  var insertPartBefore = function insertPartBefore(containerPart, part, ref) {
    var container = containerPart.startNode.parentNode;
    var beforeNode = ref ? ref.startNode : containerPart.endNode;
    var endNode = part.endNode.nextSibling;

    if (endNode !== beforeNode) {
      reparentNodes(container, part.startNode, endNode, beforeNode);
    }
  };

  var removePart = function removePart(part) {
    removeNodes(part.startNode.parentNode, part.startNode, part.endNode.nextSibling);
  }; // Helper for generating a map of array item to its index over a subset
  // of an array (used to lazily generate `newKeyToIndexMap` and
  // `oldKeyToIndexMap`)


  var generateMap = function generateMap(list, start, end) {
    var map = new Map();

    for (var i = start; i <= end; i++) {
      map.set(list[i], i);
    }

    return map;
  }; // Stores previous ordered list of parts and map of key to index


  var partListCache = new WeakMap();
  var keyListCache = new WeakMap();
  /**
   * A directive that repeats a series of values (usually `TemplateResults`)
   * generated from an iterable, and updates those items efficiently when the
   * iterable changes based on user-provided `keys` associated with each item.
   *
   * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
   * meaning previous DOM for a given key is moved into the new position if
   * needed, and DOM will never be reused with values for different keys (new DOM
   * will always be created for new keys). This is generally the most efficient
   * way to use `repeat` since it performs minimum unnecessary work for insertions
   * and removals.
   *
   * IMPORTANT: If providing a `keyFn`, keys *must* be unique for all items in a
   * given call to `repeat`. The behavior when two or more items have the same key
   * is undefined.
   *
   * If no `keyFn` is provided, this directive will perform similar to mapping
   * items to values, and DOM will be reused against potentially different items.
   */

  var repeat = directive(function (items, keyFnOrTemplate, template) {
    var keyFn;

    if (template === undefined) {
      template = keyFnOrTemplate;
    } else if (keyFnOrTemplate !== undefined) {
      keyFn = keyFnOrTemplate;
    }

    return function (containerPart) {
      if (!(containerPart instanceof NodePart)) {
        throw new Error('repeat can only be used in text bindings');
      } // Old part & key lists are retrieved from the last update
      // (associated with the part for this instance of the directive)


      var oldParts = partListCache.get(containerPart) || [];
      var oldKeys = keyListCache.get(containerPart) || []; // New part list will be built up as we go (either reused from
      // old parts or created for new keys in this update). This is
      // saved in the above cache at the end of the update.

      var newParts = []; // New value list is eagerly generated from items along with a
      // parallel array indicating its key.

      var newValues = [];
      var newKeys = [];
      var index = 0;

      var _iterator = _createForOfIteratorHelper(items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          newKeys[index] = keyFn ? keyFn(item, index) : index;
          newValues[index] = template(item, index);
          index++;
        } // Maps from key to index for current and previous update; these
        // are generated lazily only when needed as a performance
        // optimization, since they are only required for multiple
        // non-contiguous changes in the list, which are less common.

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var newKeyToIndexMap;
      var oldKeyToIndexMap; // Head and tail pointers to old parts and new values

      var oldHead = 0;
      var oldTail = oldParts.length - 1;
      var newHead = 0;
      var newTail = newValues.length - 1; // Overview of O(n) reconciliation algorithm (general approach
      // based on ideas found in ivi, vue, snabbdom, etc.):
      //
      // * We start with the list of old parts and new values (and
      //   arrays of their respective keys), head/tail pointers into
      //   each, and we build up the new list of parts by updating
      //   (and when needed, moving) old parts or creating new ones.
      //   The initial scenario might look like this (for brevity of
      //   the diagrams, the numbers in the array reflect keys
      //   associated with the old parts or new values, although keys
      //   and parts/values are actually stored in parallel arrays
      //   indexed using the same head/tail pointers):
      //
      //      oldHead v                 v oldTail
      //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
      //   newParts: [ ,  ,  ,  ,  ,  ,  ]
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
      //                                      item order
      //      newHead ^                 ^ newTail
      //
      // * Iterate old & new lists from both sides, updating,
      //   swapping, or removing parts at the head/tail locations
      //   until neither head nor tail can move.
      //
      // * Example below: keys at head pointers match, so update old
      //   part 0 in-place (no need to move it) and record part 0 in
      //   the `newParts` list. The last thing we do is advance the
      //   `oldHead` and `newHead` pointers (will be reflected in the
      //   next diagram).
      //
      //      oldHead v                 v oldTail
      //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
      //   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
      //                                      & newHead
      //      newHead ^                 ^ newTail
      //
      // * Example below: head pointers don't match, but tail
      //   pointers do, so update part 6 in place (no need to move
      //   it), and record part 6 in the `newParts` list. Last,
      //   advance the `oldTail` and `oldHead` pointers.
      //
      //         oldHead v              v oldTail
      //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
      //   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldTail
      //                                      & newTail
      //         newHead ^              ^ newTail
      //
      // * If neither head nor tail match; next check if one of the
      //   old head/tail items was removed. We first need to generate
      //   the reverse map of new keys to index (`newKeyToIndexMap`),
      //   which is done once lazily as a performance optimization,
      //   since we only hit this case if multiple non-contiguous
      //   changes were made. Note that for contiguous removal
      //   anywhere in the list, the head and tails would advance
      //   from either end and pass each other before we get to this
      //   case and removals would be handled in the final while loop
      //   without needing to generate the map.
      //
      // * Example below: The key at `oldTail` was removed (no longer
      //   in the `newKeyToIndexMap`), so remove that part from the
      //   DOM and advance just the `oldTail` pointer.
      //
      //         oldHead v           v oldTail
      //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
      //   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map: remove
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    5 and advance oldTail
      //         newHead ^           ^ newTail
      //
      // * Once head and tail cannot move, any mismatches are due to
      //   either new or moved items; if a new key is in the previous
      //   "old key to old index" map, move the old part to the new
      //   location, otherwise create and insert a new part. Note
      //   that when moving an old part we null its position in the
      //   oldParts array if it lies between the head and tail so we
      //   know to skip it when the pointers get there.
      //
      // * Example below: neither head nor tail match, and neither
      //   were removed; so find the `newHead` key in the
      //   `oldKeyToIndexMap`, and move that old part's DOM into the
      //   next head position (before `oldParts[oldHead]`). Last,
      //   null the part in the `oldPart` array since it was
      //   somewhere in the remaining oldParts still to be scanned
      //   (between the head and tail pointers) so that we know to
      //   skip that old part on future iterations.
      //
      //         oldHead v        v oldTail
      //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
      //   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck: update & move 2
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    into place and advance
      //                                      newHead
      //         newHead ^           ^ newTail
      //
      // * Note that for moves/insertions like the one above, a part
      //   inserted at the head pointer is inserted before the
      //   current `oldParts[oldHead]`, and a part inserted at the
      //   tail pointer is inserted before `newParts[newTail+1]`. The
      //   seeming asymmetry lies in the fact that new parts are
      //   moved into place outside in, so to the right of the head
      //   pointer are old parts, and to the right of the tail
      //   pointer are new parts.
      //
      // * We always restart back from the top of the algorithm,
      //   allowing matching and simple updates in place to
      //   continue...
      //
      // * Example below: the head pointers once again match, so
      //   simply update part 1 and record it in the `newParts`
      //   array.  Last, advance both head pointers.
      //
      //         oldHead v        v oldTail
      //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
      //   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched: update 1
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
      //                                      & newHead
      //            newHead ^        ^ newTail
      //
      // * As mentioned above, items that were moved as a result of
      //   being stuck (the final else clause in the code below) are
      //   marked with null, so we always advance old pointers over
      //   these so we're comparing the next actual old value on
      //   either end.
      //
      // * Example below: `oldHead` is null (already placed in
      //   newParts), so advance `oldHead`.
      //
      //            oldHead v     v oldTail
      //   oldKeys:  [0, 1, -, 3, 4, 5, 6] <- old head already used:
      //   newParts: [0, 2, 1,  ,  ,  , 6]    advance oldHead
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
      //               newHead ^     ^ newTail
      //
      // * Note it's not critical to mark old parts as null when they
      //   are moved from head to tail or tail to head, since they
      //   will be outside the pointer range and never visited again.
      //
      // * Example below: Here the old tail key matches the new head
      //   key, so the part at the `oldTail` position and move its
      //   DOM to the new head position (before `oldParts[oldHead]`).
      //   Last, advance `oldTail` and `newHead` pointers.
      //
      //               oldHead v  v oldTail
      //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
      //   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]   head: update & move 4,
      //                                     advance oldTail & newHead
      //               newHead ^     ^ newTail
      //
      // * Example below: Old and new head keys match, so update the
      //   old head part in place, and advance the `oldHead` and
      //   `newHead` pointers.
      //
      //               oldHead v oldTail
      //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
      //   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance oldHead &
      //                                      newHead
      //                  newHead ^  ^ newTail
      //
      // * Once the new or old pointers move past each other then all
      //   we have left is additions (if old list exhausted) or
      //   removals (if new list exhausted). Those are handled in the
      //   final while loops at the end.
      //
      // * Example below: `oldHead` exceeded `oldTail`, so we're done
      //   with the main loop.  Create the remaining part and insert
      //   it at the new head position, and the update is complete.
      //
      //                   (oldHead > oldTail)
      //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
      //   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
      //                     newHead ^ newTail
      //
      // * Note that the order of the if/else clauses is not
      //   important to the algorithm, as long as the null checks
      //   come first (to ensure we're always working on valid old
      //   parts) and that the final else clause comes last (since
      //   that's where the expensive moves occur). The order of
      //   remaining clauses is is just a simple guess at which cases
      //   will be most common.
      //
      // * TODO(kschaaf) Note, we could calculate the longest
      //   increasing subsequence (LIS) of old items in new position,
      //   and only move those not in the LIS set. However that costs
      //   O(nlogn) time and adds a bit more code, and only helps
      //   make rare types of mutations require fewer moves. The
      //   above handles removes, adds, reversal, swaps, and single
      //   moves of contiguous items in linear time, in the minimum
      //   number of moves. As the number of multiple moves where LIS
      //   might help approaches a random shuffle, the LIS
      //   optimization becomes less helpful, so it seems not worth
      //   the code at this point. Could reconsider if a compelling
      //   case arises.

      while (oldHead <= oldTail && newHead <= newTail) {
        if (oldParts[oldHead] === null) {
          // `null` means old part at head has already been used
          // below; skip
          oldHead++;
        } else if (oldParts[oldTail] === null) {
          // `null` means old part at tail has already been used
          // below; skip
          oldTail--;
        } else if (oldKeys[oldHead] === newKeys[newHead]) {
          // Old head matches new head; update in place
          newParts[newHead] = updatePart(oldParts[oldHead], newValues[newHead]);
          oldHead++;
          newHead++;
        } else if (oldKeys[oldTail] === newKeys[newTail]) {
          // Old tail matches new tail; update in place
          newParts[newTail] = updatePart(oldParts[oldTail], newValues[newTail]);
          oldTail--;
          newTail--;
        } else if (oldKeys[oldHead] === newKeys[newTail]) {
          // Old head matches new tail; update and move to new tail
          newParts[newTail] = updatePart(oldParts[oldHead], newValues[newTail]);
          insertPartBefore(containerPart, oldParts[oldHead], newParts[newTail + 1]);
          oldHead++;
          newTail--;
        } else if (oldKeys[oldTail] === newKeys[newHead]) {
          // Old tail matches new head; update and move to new head
          newParts[newHead] = updatePart(oldParts[oldTail], newValues[newHead]);
          insertPartBefore(containerPart, oldParts[oldTail], oldParts[oldHead]);
          oldTail--;
          newHead++;
        } else {
          if (newKeyToIndexMap === undefined) {
            // Lazily generate key-to-index maps, used for removals &
            // moves below
            newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
            oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
          }

          if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
            // Old head is no longer in new list; remove
            removePart(oldParts[oldHead]);
            oldHead++;
          } else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
            // Old tail is no longer in new list; remove
            removePart(oldParts[oldTail]);
            oldTail--;
          } else {
            // Any mismatches at this point are due to additions or
            // moves; see if we have an old part we can reuse and move
            // into place
            var oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
            var oldPart = oldIndex !== undefined ? oldParts[oldIndex] : null;

            if (oldPart === null) {
              // No old part for this value; create a new one and
              // insert it
              var newPart = createAndInsertPart(containerPart, oldParts[oldHead]);
              updatePart(newPart, newValues[newHead]);
              newParts[newHead] = newPart;
            } else {
              // Reuse old part
              newParts[newHead] = updatePart(oldPart, newValues[newHead]);
              insertPartBefore(containerPart, oldPart, oldParts[oldHead]); // This marks the old part as having been used, so that
              // it will be skipped in the first two checks above

              oldParts[oldIndex] = null;
            }

            newHead++;
          }
        }
      } // Add parts for any remaining new values


      while (newHead <= newTail) {
        // For all remaining additions, we insert before last new
        // tail, since old pointers are no longer valid
        var _newPart = createAndInsertPart(containerPart, newParts[newTail + 1]);

        updatePart(_newPart, newValues[newHead]);
        newParts[newHead++] = _newPart;
      } // Remove any remaining unused old parts


      while (oldHead <= oldTail) {
        var _oldPart = oldParts[oldHead++];

        if (_oldPart !== null) {
          removePart(_oldPart);
        }
      } // Save order of new parts for next round


      partListCache.set(containerPart, newParts);
      keyListCache.set(containerPart, newKeys);
    };
  });

  function _templateObject$5() {
    var data = _taggedTemplateLiteral(["\n    <section\n        class=\"tool-options ", "\"\n    >\n        ", "\n    </section>\n"]);

    _templateObject$5 = function _templateObject() {
      return data;
    };

    return data;
  }
  var OptionsContainer = (function (activeTool) {
    return html(_templateObject$5(), activeTool.options !== undefined ? "active" : "", activeTool.options !== undefined ? activeTool.options.render() : "");
  });

  function _templateObject$6() {
    var data = _taggedTemplateLiteral(["\n        <div class=\"districtr__mini-toolbar\">\n            <nav>\n                <div class=\"districtr__mini-toolbar-top\">\n                    <div class=\"icon-list\">\n                        ", "\n                    </div>\n                </div>\n            </nav>\n            ", "\n            </div>\n        </div>\n        "]);

    _templateObject$6 = function _templateObject() {
      return data;
    };

    return data;
  }

  var MiniToolbar = /*#__PURE__*/function () {
    function MiniToolbar(store, editor) {
      _classCallCheck(this, MiniToolbar);

      this.tools = [];
      this.toolsById = {};
      this.menuItems = [];
      this.renderCallback = editor.render;
      this.render = this.render.bind(this);
      this.selectTool = this.selectTool.bind(this);
      this.addTool = this.addTool.bind(this);
      this.store = store;
    }

    _createClass(MiniToolbar, [{
      key: "selectTool",
      value: function selectTool(toolId) {
        if (this.activeTool) {
          this.activeTool.deactivate();
        }

        this.toolsById[toolId].activate();
        this.store.dispatch(actions.selectTool({
          id: toolId
        }));
      }
    }, {
      key: "addTool",
      value: function addTool(tool) {
        if (tool.options !== undefined) {
          tool.options.renderToolbar = this.renderCallback;
        }

        this.toolsById[tool.id] = tool;
        this.tools.push(tool);
      }
    }, {
      key: "setMenuItems",
      value: function setMenuItems(menuItems) {
        this.menuItems = menuItems;
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        return html(_templateObject$6(), repeat(this.tools, function (tool) {
          return tool.id;
        }, function (tool) {
          return tool.render(_this.selectTool);
        }), OptionsContainer(this.activeTool));
      }
    }, {
      key: "activeTool",
      get: function get() {
        return this.toolsById[this.store.state.toolbar.activeTool];
      }
    }]);

    return MiniToolbar;
  }();

  function _templateObject$7() {
    var data = _taggedTemplateLiteral(["<h4>An error occurred.</h4>"]);

    _templateObject$7 = function _templateObject() {
      return data;
    };

    return data;
  }
  var plugins = [ToolsPlugin];
  var EmbeddedDistrictr = /*#__PURE__*/function () {
    function EmbeddedDistrictr(target, module, options) {
      var _this = this;

      _classCallCheck(this, EmbeddedDistrictr);

      this.render = this.render.bind(this);
      mapboxgl.accessToken = module.token;
      options = _objectSpread2({
        style: "mapbox://styles/mapbox/outdoors-v11"
      }, options);
      var targetElement = document.querySelector(target);
      targetElement.classList.add("districtr__embed-container");
      var mapContainer = document.createElement("div");
      var mapContainerId = generateId(8);
      mapContainer.setAttribute("id", mapContainerId);
      mapContainer.style = "height: 100%; width: 100%";
      targetElement.appendChild(mapContainer);
      this.toolbarTarget = document.createElement("div");
      targetElement.appendChild(this.toolbarTarget);
      this.addressMarker = null;
      this.graph = null;
      this.showError = module.errors;
      this.allowProceed = module.allowProceed;
      fetch(module.graph).then(function (r) {
        return r.json();
      }).then(function (g) {
        _this.graph = g;
      });
      fetch(module.url).then(function (r) {
        return r.json();
      }).then(function (context) {
        _this.bounds = context.units.bounds;
        _this.zoomTo = module.zoomTo || context.units.zoomTo || 14;
        _this.mapState = new MapState(mapContainerId, {
          bounds: context.units.bounds,
          fitBoundsOptions: {
            padding: {
              top: 50,
              right: 50,
              left: 50,
              bottom: 50
            }
          }
        }, options.style);

        _this.mapState.map.on("load", function () {
          //this.mapState.map.setMaxBounds(
          //    this.mapState.map.getBounds()
          //);
          context.showOverlay = module.showOverlay;
          context.overlayRule = module.overlayRule;
          _this.state = new State(_this.mapState.map, context, function () {
            return null;
          }); // delayed enabling

          _this.enableMap = function () {
            if (this.enabled) return;else this.enabled = true;
            this.store = new UIStateStore(reducer, {
              toolbar: {}
            });
            this.toolbar = new MiniToolbar(this.store, this);

            var _iterator = _createForOfIteratorHelper(plugins),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var plugin = _step.value;
                plugin(this);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.store.subscribe(this.render);
            this.state.subscribe(this.render); // contiguity check

            var msg_box = document.createElement("div");
            msg_box.id = "ns__msg-draw";
            msg_box.className = "ns__msg";
            msg_box.style.margin = "0";
            msg_box.style.borderRadius = "0";
            msg_box.hidden = true;
            this.toolbarTarget.prepend(msg_box);
            var timeout_id = -1;
            var cb = this.checkConnected.bind(this, msg_box);
            this.toolbar.toolsById.brush.brush.on("mouseup", function () {
              window.clearTimeout(timeout_id);
              timeout_id = window.setTimeout(cb, 50);
            });
          };

          _this.enabled = false;
        });
      }).catch(function (e) {
        console.error(e);

        render(html(_templateObject$7()), targetElement);
      });
    }

    _createClass(EmbeddedDistrictr, [{
      key: "render",
      value: function render$1() {
        if (!this.toolbarTarget || !this.toolbar) {
          return;
        }

        render(this.toolbar.render(), this.toolbarTarget);
      }
    }, {
      key: "checkConnected",
      value: function checkConnected(msg_box) {
        var graph = this.graph;
        if (!graph) return null;
        var assignment = this.state.plan.assignment;
        var visited = {};
        var total = 0;

        for (var id in assignment) {
          if (assignment[id] !== 0) continue;
          visited[id] = false;
          total++;
        }

        var walkNeighborhood = function walkNeighborhood(visited, node) {
          var desc = 1;
          visited[node] = true;

          var _iterator2 = _createForOfIteratorHelper(graph[node]),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var nbor = _step2.value;

              if (visited[nbor] === false) {
                desc += walkNeighborhood(visited, nbor);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return desc;
        };

        var root = this.homeBlock.id;
        var found = walkNeighborhood(visited, root);
        var ok = found === total;

        if (ok) {
          msg_box.hidden = true;
          msg_box.innerHTML = null;
        } else {
          msg_box.hidden = false;
          msg_box.innerHTML = "Your neighborhood must be in one piece only.";
        }

        this.allowProceed(ok);
        return ok;
      }
    }, {
      key: "loadAddress",
      value: function loadAddress(str) {
        var _this2 = this;

        var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(encodeURIComponent(str), ".json") + "?autocomplete=false&limit=1&bbox=" + this.bounds[0][0] + "," + this.bounds[0][1] + "," + this.bounds[1][0] + "," + this.bounds[1][1] + "&access_token=".concat(mapboxgl.accessToken);
        fetch(url).then(function (x) {
          return x.json();
        }).then(function (d) {
          if (d.features.length == 0) {
            _this2.showError("Address not found.");

            return;
          } else {
            _this2.showError(null);

            _this2.enableMap();
          }

          var center = d.features[0].center; // put down marker

          if (!!_this2.addressMarker) _this2.addressMarker.remove();
          _this2.addressMarker = new mapboxgl.Marker({
            color: "#ff4f49"
          }).setLngLat(center).addTo(_this2.map); // color block once zoomed

          var colorBlock = function () {
            var block = this.map.queryRenderedFeatures(this.map.project(center), {
              layers: [this.state.units.id],
              validate: false
            })[0];
            block.state.home = true;

            if (!!this.homeBlock) {
              this.map.setFeatureState(this.homeBlock, _objectSpread2(_objectSpread2({}, this.homeBlock.state), {}, {
                home: false
              }));
              this.state.units.setAssignment(this.homeBlock, null);
              this.state.plan.assignment[this.homeBlock.id] = null;
            }

            this.state.units.setAssignment(block, 0);
            this.state.plan.assignment[block.id] = 0;
            this.homeBlock = block;
          }.bind(_this2);

          _this2.state.layers[0].untilSourceLoaded(colorBlock); // zoom to


          _this2.map.easeTo({
            center: center,
            zoom: _this2.zoomTo
          });
        });
      }
    }, {
      key: "getNeighborhood",
      value: function getNeighborhood() {
        var assignment = this.state.plan.assignment;
        return Object.keys(assignment).filter(function (b) {
          return assignment[b] === 0;
        }).join(",");
      }
    }, {
      key: "map",
      get: function get() {
        return this.mapState.map;
      }
    }]);

    return EmbeddedDistrictr;
  }();

  window.MapDraw = function (target, module, options) {
    return new EmbeddedDistrictr(target, module, options);
  };

  window.showError = function (msg) {
    var sel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#ns__msg-search";
    var msg_box = document.querySelector(sel);

    if (msg !== null) {
      msg_box.hidden = false;
      msg_box.innerHTML = msg;
    } else {
      msg_box.hidden = true;
      msg_box.innerHTML = "&nbsp;";
    }
  };
  /*
   * Overlay styles
   */


  window.BivariateOverlay = function (opts) {
    return {
      "fill-color": ["interpolate-hcl", ["linear"], ["case", ["==", opts.denominator || ["get", "pop"], 0], opts.midpt || 0.5, ["/", opts.numerator || ["get", "dem"], opts.denominator || ["get", "pop"]] // value
      ], 0, opts.colorLow || "rgb(30, 60, 210)", opts.midpt || 0.5, "rgba(255, 255, 255, 0)", 1, opts.colorHigh || "rgb(210, 30, 20)"],
      "fill-opacity": opts.opacity || 0.375
    };
  };

  window.UnivariateOverlay = function (opts) {
    return {
      "fill-color": ["interpolate-hcl", ["linear"], ["case", ["==", opts.denominator || ["get", "pop"], 0], 0, ["/", opts.numerator || ["get", "dem"], opts.denominator || ["get", "pop"]] // value
      ], 0, "rgba(255, 255, 255, 0)", 1, opts.color || "#c0cc10"],
      "fill-opacity": opts.opacity || 0.375
    };
  };

  exports.EmbeddedDistrictr = EmbeddedDistrictr;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
