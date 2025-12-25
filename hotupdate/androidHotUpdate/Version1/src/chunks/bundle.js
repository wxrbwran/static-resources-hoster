System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/asError.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = asError;
        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }
          return _typeof(obj);
        }
        function asError(action) {
          if (_typeof(action) === 'object' && action !== null) {
            action.error = true;
          }
          return action;
        }

        // #endregion ORIGINAL CODE

        module.exports;
        module.exports.__esModule;
        module.exports.default;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/assignAll.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = assignAll;
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
        function _extends() {
          _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function assignAll(actions, stores) {
          if (Array.isArray(actions)) {
            return actions.map(function (action) {
              return action.assignTo(stores);
            });
          }
          return Object.keys(actions).reduce(function (assigns, action) {
            return _extends(assigns, _defineProperty({}, action, actions[action].assignTo(stores)));
          }, {});
        }

        // #endregion ORIGINAL CODE

        module.exports;
        module.exports.__esModule;
        module.exports.default;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/batch.js", ['./cjs-loader.mjs', './createAction.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;
        var _createAction = _interopRequireDefault(require("./createAction"));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }
        var _default = (0, _createAction["default"])('Batch', function () {
          for (var _len = arguments.length, actions = new Array(_len), _key = 0; _key < _len; _key++) {
            actions[_key] = arguments[_key];
          }
          if (actions.length === 1 && Array.isArray(actions[0])) {
            return actions[0];
          }
          return actions;
        });
        exports["default"] = _default;

        // #endregion ORIGINAL CODE

        module.exports;
        module.exports.__esModule;
        module.exports.default;
      }, () => ({
        './createAction': __cjsMetaURL$1
      }));
    }
  };
});

System.register("chunks:///_virtual/bindAll.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = bindAll;
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
        function _extends() {
          _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function bindAll(actions, stores) {
          if (Array.isArray(actions)) {
            return actions.map(function (action) {
              return action.bindTo(stores);
            });
          }
          return Object.keys(actions).reduce(function (binds, action) {
            return _extends(binds, _defineProperty({}, action, actions[action].bindTo(stores)));
          }, {});
        }

        // #endregion ORIGINAL CODE

        module.exports;
        module.exports.__esModule;
        module.exports.default;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/cjs-loader.mjs", [], function (exports) {
  return {
    execute: function () {
      class CjsLoader {
        constructor() {
          this._registry = {};
          this._moduleCache = {};
        }

        /**
         * Defines a CommonJS module.
         * @param id Module ID.
         * @param factory The factory.
         * @param resolveMap An object or a function returning object which records the module specifier resolve result.
         * The later is called as "deferred resolve map" and would be invocated right before CommonJS code execution.
         */
        define(id, factory, resolveMap) {
          this._registry[id] = {
            factory,
            resolveMap
          };
        }

        /**
         * Requires a CommonJS module.
         * @param id Module ID.
         * @returns The module's `module.exports`.
         */
        require(id) {
          return this._require(id);
        }
        throwInvalidWrapper(requestTarget, from) {
          throw new Error(`Module '${requestTarget}' imported from '${from}' is expected be an ESM-wrapped CommonJS module but it doesn't.`);
        }
        _require(id, parent) {
          const cachedModule = this._moduleCache[id];
          if (cachedModule) {
            return cachedModule.exports;
          }
          const module = {
            id,
            exports: {}
          };
          this._moduleCache[id] = module;
          this._tryModuleLoad(module, id);
          return module.exports;
        }
        _resolve(specifier, parent) {
          return this._resolveFromInfos(specifier, parent) || this._throwUnresolved(specifier, parent);
        }
        _resolveFromInfos(specifier, parent) {
          var _cjsInfos$parent;
          if (specifier in cjsInfos) {
            return specifier;
          }
          if (!parent) {
            return;
          }
          return ((_cjsInfos$parent = cjsInfos[parent]) == null ? void 0 : _cjsInfos$parent.resolveCache[specifier]) ?? undefined;
        }
        _tryModuleLoad(module, id) {
          let threw = true;
          try {
            this._load(module, id);
            threw = false;
          } finally {
            if (threw) {
              delete this._moduleCache[id];
            }
          }
        }
        _load(module, id) {
          const {
            factory,
            resolveMap
          } = this._loadWrapper(id);
          const vendorRequire = this._createRequire(module);
          const require = resolveMap ? this._createRequireWithResolveMap(typeof resolveMap === 'function' ? resolveMap() : resolveMap, vendorRequire) : vendorRequire;
          factory(module.exports, require, module);
        }
        _loadWrapper(id) {
          if (id in this._registry) {
            return this._registry[id];
          } else {
            return this._loadHostProvidedModules(id);
          }
        }
        _loadHostProvidedModules(id) {
          return {
            factory: (_exports, _require, module) => {
              if (typeof require === 'undefined') {
                throw new Error(`Current environment does not provide a require() for requiring '${id}'.`);
              }
              try {
                module.exports = require(id);
              } catch (err) {
                throw new Error(`Exception thrown when calling host defined require('${id}').`, {
                  cause: err
                });
              }
            }
          };
        }
        _createRequire(module) {
          return specifier => this._require(specifier, module);
        }
        _createRequireWithResolveMap(requireMap, originalRequire) {
          return specifier => {
            const resolved = requireMap[specifier];
            if (resolved) {
              return originalRequire(resolved);
            } else {
              throw new Error('Unresolved specifier ' + specifier);
            }
          };
        }
        _throwUnresolved(specifier, parentUrl) {
          throw new Error(`Unable to resolve ${specifier} from ${parent}.`);
        }
      }
      var loader = exports('default', new CjsLoader());
    }
  };
});

System.register("chunks:///_virtual/createAction.js", ['./cjs-loader.mjs', './types.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = createAction;
        var _types = require("./types");
        var id = 0;
        var identity = function identity(arg) {
          return arg;
        };
        var normalize = function normalize(dispatchOrStore) {
          if (dispatchOrStore && typeof dispatchOrStore.dispatch === 'function') {
            return dispatchOrStore.dispatch;
          } else {
            return dispatchOrStore;
          }
        };
        var normalizeAll = function normalizeAll(dispatchOrStores) {
          if (Array.isArray(dispatchOrStores)) {
            return dispatchOrStores.map(normalize);
          } else {
            return normalize(dispatchOrStores);
          }
        };
        function createAction(description, payloadReducer, metaReducer) {
          if (typeof description === 'function') {
            metaReducer = payloadReducer;
            payloadReducer = description;
            description = undefined;
          }
          if (typeof payloadReducer !== 'function') {
            payloadReducer = identity;
          }
          if (typeof metaReducer !== 'function') {
            metaReducer = undefined;
          }
          var isSerializable = typeof description === 'string' && /^[0-9A-Z_]+$/.test(description);
          if (isSerializable) {
            (0, _types.check)(description);
            (0, _types.add)(description);
          } else {
            ++id;
          }
          var type = isSerializable ? description : "[".concat(id, "]").concat(description ? ' ' + description : '');
          var dispatchFunctions = undefined;
          function makeAction() {
            var payload = payloadReducer.apply(void 0, arguments);
            if (metaReducer) {
              return {
                type: type,
                payload: payload,
                error: payload instanceof Error,
                meta: metaReducer.apply(void 0, arguments)
              };
            }
            return {
              type: type,
              payload: payload,
              error: payload instanceof Error
            };
          }
          var makeAndDispatch = function makeAndDispatch(dispatchs, isError) {
            return function () {
              var payloadedAction = makeAction.apply(void 0, arguments);
              if (!payloadedAction.error) {
                payloadedAction.error = isError;
              }
              if (Array.isArray(dispatchs)) {
                return dispatchs.map(function (dispatch) {
                  return dispatch(payloadedAction);
                });
              } else if (dispatchs) {
                return dispatchs(payloadedAction);
              } else {
                return payloadedAction;
              }
            };
          };
          function actionCreator() {
            return makeAndDispatch(dispatchFunctions, false).apply(void 0, arguments);
          }
          actionCreator.asError = function () {
            return makeAndDispatch(dispatchFunctions, true).apply(void 0, arguments);
          };
          actionCreator.getType = function () {
            return type;
          };
          actionCreator.toString = function () {
            return type;
          };
          actionCreator.raw = makeAction;
          actionCreator.assignTo = function (dispatchOrStores) {
            dispatchFunctions = normalizeAll(dispatchOrStores);
            return actionCreator;
          };
          actionCreator.assigned = function () {
            return !!dispatchFunctions;
          };
          actionCreator.bound = function () {
            return false;
          };
          actionCreator.dispatched = actionCreator.assigned;
          actionCreator.bindTo = function (dispatchOrStores) {
            var boundActionCreator = makeAndDispatch(normalizeAll(dispatchOrStores));
            boundActionCreator.asError = makeAndDispatch(normalizeAll(dispatchOrStores));
            boundActionCreator.raw = makeAction;
            boundActionCreator.getType = actionCreator.getType;
            boundActionCreator.toString = actionCreator.toString;
            boundActionCreator.assignTo = function () {
              return boundActionCreator;
            };
            boundActionCreator.bindTo = function () {
              return boundActionCreator;
            };
            boundActionCreator.assigned = function () {
              return false;
            };
            boundActionCreator.bound = function () {
              return true;
            };
            boundActionCreator.dispatched = boundActionCreator.bound;
            return boundActionCreator;
          };
          return actionCreator;
        }

        // #endregion ORIGINAL CODE

        module.exports;
        module.exports.__esModule;
        module.exports.default;
      }, () => ({
        './types': __cjsMetaURL$1
      }));
    }
  };
});

System.register("chunks:///_virtual/createReducer.js", ['./cjs-loader.mjs', './batch.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = createReducer;
        var _batch = _interopRequireDefault(require("./batch"));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }
        function _extends() {
          _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function normalizeType(typeOrActionCreator) {
          if (typeOrActionCreator && typeOrActionCreator.getType) {
            return typeOrActionCreator.toString();
          }
          return typeOrActionCreator;
        }
        function createReducer() {
          var handlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var defaultState = arguments.length > 1 ? arguments[1] : undefined;
          var opts = {
            payload: true,
            fallback: null
          };
          var reducer = _extends(reduce, {
            has: has,
            on: on,
            off: off,
            options: options
          });
          function has(typeOrActionCreator) {
            return !!handlers[normalizeType(typeOrActionCreator)];
          }
          function on(typeOrActionCreator, handler) {
            if (Array.isArray(typeOrActionCreator)) {
              typeOrActionCreator.forEach(function (action) {
                on(action, handler);
              });
            } else {
              handlers[normalizeType(typeOrActionCreator)] = handler;
            }
            return reducer;
          }
          function off(typeOrActionCreator) {
            if (Array.isArray(typeOrActionCreator)) {
              typeOrActionCreator.forEach(off);
            } else {
              delete handlers[normalizeType(typeOrActionCreator)];
            }
            return reducer;
          }
          function options(newOpts) {
            Object.keys(newOpts).forEach(function (name) {
              return opts[name] = newOpts[name];
            });
            return reducer;
          }
          if (typeof handlers === 'function') {
            var factory = handlers;
            handlers = {};
            factory(on, off);
          }
          if (!has(_batch["default"])) {
            on(_batch["default"], function (state, payload) {
              if (opts.payload) {
                return payload.reduce(reduce, state);
              } else {
                return payload.payload.reduce(reduce, state);
              }
            });
          }
          function reduce() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
            var action = arguments.length > 1 ? arguments[1] : undefined;
            if (!action || typeof action.type !== 'string') {
              return state;
            }
            if (action.type.startsWith('@@redux/')) {
              return state;
            }
            var handler = handlers[action.type] || opts.fallback;
            if (handler) {
              if (opts.payload) {
                return handler(state, action.payload, action.meta);
              } else {
                return handler(state, action);
              }
            }
            return state;
          }
          return reducer;
        }

        // #endregion ORIGINAL CODE

        module.exports;
        module.exports.__esModule;
        module.exports.default;
      }, () => ({
        './batch': __cjsMetaURL$1
      }));
    }
  };
});

System.register("chunks:///_virtual/disbatch.js", ['./cjs-loader.mjs', './batch.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = disbatch;
        var _batch = _interopRequireDefault(require("./batch"));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }
        function _extends() {
          _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function disbatch(store) {
          for (var _len = arguments.length, actions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            actions[_key - 1] = arguments[_key];
          }
          if (actions && actions.length > 0) {
            if (!store || typeof store !== 'function' && typeof store.dispatch !== 'function') {
              throw new TypeError('disbatch must take either a valid Redux store or a dispatch function as first parameter');
            }
            if (typeof store.dispatch === 'function') {
              store = store.dispatch;
            } // store is actually the dispatch function here

            return store(_batch["default"].apply(void 0, actions));
          } else {
            if (!store || typeof store.dispatch !== 'function') {
              throw new TypeError('disbatch must take a valid Redux store with a dispatch function as first parameter');
            }
            return _extends(store, {
              disbatch: disbatch.bind(undefined, store)
            });
          }
        }

        // #endregion ORIGINAL CODE

        module.exports;
        module.exports.__esModule;
        module.exports.default;
      }, () => ({
        './batch': __cjsMetaURL$1
      }));
    }
  };
});

System.register("chunks:///_virtual/env", [], function (exports) {
  return {
    execute: function () {
      const NATIVE = exports('NATIVE', true);
      const DEV = exports('DEV', false);
    }
  };
});

System.register("chunks:///_virtual/fingerprint2.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      exports('default', void 0);
      let _cjsExports;
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports$1, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /*
        * Fingerprintjs2 2.1.4 - Modern & flexible browser fingerprint library v2
        * https://github.com/fingerprintjs/fingerprintjs
        * Copyright (c) 2020 Valentin Vasilyev (valentin@fingerprintjs.com)
        * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
        *
        * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
        * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
        * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
        * ARE DISCLAIMED. IN NO EVENT SHALL VALENTIN VASILYEV BE LIABLE FOR ANY
        * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
        * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
        * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
        * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
        * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
        * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        */
        /*
        * This software contains code from open-source projects:
        * MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)
        */

        /* global define */
        (function (name, context, definition) {
          if (typeof window !== 'undefined' && typeof define === 'function' && define.amd) {
            define(definition);
          } else if (typeof module !== 'undefined' && module.exports) {
            module.exports = definition();
          } else if (context.exports) {
            context.exports = definition();
          } else {
            context[name] = definition();
          }
        })('Fingerprint2', this, function () {
          // detect if object is array
          // only implement if no native implementation is available
          if (typeof Array.isArray === 'undefined') {
            Array.isArray = function (obj) {
              return Object.prototype.toString.call(obj) === '[object Array]';
            };
          }

          /// MurmurHash3 related functions

          //
          // Given two 64bit ints (as an array of two 32bit ints) returns the two
          // added together as a 64bit int (as an array of two 32bit ints).
          //
          var x64Add = function (m, n) {
            m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
            n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
            var o = [0, 0, 0, 0];
            o[3] += m[3] + n[3];
            o[2] += o[3] >>> 16;
            o[3] &= 0xffff;
            o[2] += m[2] + n[2];
            o[1] += o[2] >>> 16;
            o[2] &= 0xffff;
            o[1] += m[1] + n[1];
            o[0] += o[1] >>> 16;
            o[1] &= 0xffff;
            o[0] += m[0] + n[0];
            o[0] &= 0xffff;
            return [o[0] << 16 | o[1], o[2] << 16 | o[3]];
          };

          //
          // Given two 64bit ints (as an array of two 32bit ints) returns the two
          // multiplied together as a 64bit int (as an array of two 32bit ints).
          //
          var x64Multiply = function (m, n) {
            m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
            n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
            var o = [0, 0, 0, 0];
            o[3] += m[3] * n[3];
            o[2] += o[3] >>> 16;
            o[3] &= 0xffff;
            o[2] += m[2] * n[3];
            o[1] += o[2] >>> 16;
            o[2] &= 0xffff;
            o[2] += m[3] * n[2];
            o[1] += o[2] >>> 16;
            o[2] &= 0xffff;
            o[1] += m[1] * n[3];
            o[0] += o[1] >>> 16;
            o[1] &= 0xffff;
            o[1] += m[2] * n[2];
            o[0] += o[1] >>> 16;
            o[1] &= 0xffff;
            o[1] += m[3] * n[1];
            o[0] += o[1] >>> 16;
            o[1] &= 0xffff;
            o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];
            o[0] &= 0xffff;
            return [o[0] << 16 | o[1], o[2] << 16 | o[3]];
          };
          //
          // Given a 64bit int (as an array of two 32bit ints) and an int
          // representing a number of bit positions, returns the 64bit int (as an
          // array of two 32bit ints) rotated left by that number of positions.
          //
          var x64Rotl = function (m, n) {
            n %= 64;
            if (n === 32) {
              return [m[1], m[0]];
            } else if (n < 32) {
              return [m[0] << n | m[1] >>> 32 - n, m[1] << n | m[0] >>> 32 - n];
            } else {
              n -= 32;
              return [m[1] << n | m[0] >>> 32 - n, m[0] << n | m[1] >>> 32 - n];
            }
          };
          //
          // Given a 64bit int (as an array of two 32bit ints) and an int
          // representing a number of bit positions, returns the 64bit int (as an
          // array of two 32bit ints) shifted left by that number of positions.
          //
          var x64LeftShift = function (m, n) {
            n %= 64;
            if (n === 0) {
              return m;
            } else if (n < 32) {
              return [m[0] << n | m[1] >>> 32 - n, m[1] << n];
            } else {
              return [m[1] << n - 32, 0];
            }
          };
          //
          // Given two 64bit ints (as an array of two 32bit ints) returns the two
          // xored together as a 64bit int (as an array of two 32bit ints).
          //
          var x64Xor = function (m, n) {
            return [m[0] ^ n[0], m[1] ^ n[1]];
          };
          //
          // Given a block, returns murmurHash3's final x64 mix of that block.
          // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
          // only place where we need to right shift 64bit ints.)
          //
          var x64Fmix = function (h) {
            h = x64Xor(h, [0, h[0] >>> 1]);
            h = x64Multiply(h, [0xff51afd7, 0xed558ccd]);
            h = x64Xor(h, [0, h[0] >>> 1]);
            h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
            h = x64Xor(h, [0, h[0] >>> 1]);
            return h;
          };

          //
          // Given a string and an optional seed as an int, returns a 128 bit
          // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
          //
          var x64hash128 = function (key, seed) {
            key = key || '';
            seed = seed || 0;
            var remainder = key.length % 16;
            var bytes = key.length - remainder;
            var h1 = [0, seed];
            var h2 = [0, seed];
            var k1 = [0, 0];
            var k2 = [0, 0];
            var c1 = [0x87c37b91, 0x114253d5];
            var c2 = [0x4cf5ad43, 0x2745937f];
            for (var i = 0; i < bytes; i = i + 16) {
              k1 = [key.charCodeAt(i + 4) & 0xff | (key.charCodeAt(i + 5) & 0xff) << 8 | (key.charCodeAt(i + 6) & 0xff) << 16 | (key.charCodeAt(i + 7) & 0xff) << 24, key.charCodeAt(i) & 0xff | (key.charCodeAt(i + 1) & 0xff) << 8 | (key.charCodeAt(i + 2) & 0xff) << 16 | (key.charCodeAt(i + 3) & 0xff) << 24];
              k2 = [key.charCodeAt(i + 12) & 0xff | (key.charCodeAt(i + 13) & 0xff) << 8 | (key.charCodeAt(i + 14) & 0xff) << 16 | (key.charCodeAt(i + 15) & 0xff) << 24, key.charCodeAt(i + 8) & 0xff | (key.charCodeAt(i + 9) & 0xff) << 8 | (key.charCodeAt(i + 10) & 0xff) << 16 | (key.charCodeAt(i + 11) & 0xff) << 24];
              k1 = x64Multiply(k1, c1);
              k1 = x64Rotl(k1, 31);
              k1 = x64Multiply(k1, c2);
              h1 = x64Xor(h1, k1);
              h1 = x64Rotl(h1, 27);
              h1 = x64Add(h1, h2);
              h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
              k2 = x64Multiply(k2, c2);
              k2 = x64Rotl(k2, 33);
              k2 = x64Multiply(k2, c1);
              h2 = x64Xor(h2, k2);
              h2 = x64Rotl(h2, 31);
              h2 = x64Add(h2, h1);
              h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
            }
            k1 = [0, 0];
            k2 = [0, 0];
            switch (remainder) {
              case 15:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48));
              // fallthrough
              case 14:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40));
              // fallthrough
              case 13:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32));
              // fallthrough
              case 12:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24));
              // fallthrough
              case 11:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16));
              // fallthrough
              case 10:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8));
              // fallthrough
              case 9:
                k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)]);
                k2 = x64Multiply(k2, c2);
                k2 = x64Rotl(k2, 33);
                k2 = x64Multiply(k2, c1);
                h2 = x64Xor(h2, k2);
              // fallthrough
              case 8:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56));
              // fallthrough
              case 7:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48));
              // fallthrough
              case 6:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40));
              // fallthrough
              case 5:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32));
              // fallthrough
              case 4:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24));
              // fallthrough
              case 3:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16));
              // fallthrough
              case 2:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8));
              // fallthrough
              case 1:
                k1 = x64Xor(k1, [0, key.charCodeAt(i)]);
                k1 = x64Multiply(k1, c1);
                k1 = x64Rotl(k1, 31);
                k1 = x64Multiply(k1, c2);
                h1 = x64Xor(h1, k1);
              // fallthrough
            }

            h1 = x64Xor(h1, [0, key.length]);
            h2 = x64Xor(h2, [0, key.length]);
            h1 = x64Add(h1, h2);
            h2 = x64Add(h2, h1);
            h1 = x64Fmix(h1);
            h2 = x64Fmix(h2);
            h1 = x64Add(h1, h2);
            h2 = x64Add(h2, h1);
            return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8);
          };
          var defaultOptions = {
            preprocessor: null,
            audio: {
              timeout: 1000,
              // On iOS 11, audio context can only be used in response to user interaction.
              // We require users to explicitly enable audio fingerprinting on iOS 11.
              // See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
              excludeIOS11: true
            },
            fonts: {
              swfContainerId: 'fingerprintjs2',
              swfPath: 'flash/compiled/FontList.swf',
              userDefinedFonts: [],
              extendedJsFonts: false
            },
            screen: {
              // To ensure consistent fingerprints when users rotate their mobile devices
              detectScreenOrientation: true
            },
            plugins: {
              sortPluginsFor: [/palemoon/i],
              excludeIE: false
            },
            extraComponents: [],
            excludes: {
              // Unreliable on Windows, see https://github.com/fingerprintjs/fingerprintjs/issues/375
              'enumerateDevices': true,
              // devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
              'pixelRatio': true,
              // DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
              'doNotTrack': true,
              // uses js fonts already
              'fontsFlash': true,
              // Extensions (including AdBlock) are disabled by default in Incognito mod of Chrome and Firefox
              // See https://github.com/fingerprintjs/fingerprintjs/issues/405
              'adBlock': true
            },
            NOT_AVAILABLE: 'not available',
            ERROR: 'error',
            EXCLUDED: 'excluded'
          };
          var each = function (obj, iterator) {
            if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
              obj.forEach(iterator);
            } else if (obj.length === +obj.length) {
              for (var i = 0, l = obj.length; i < l; i++) {
                iterator(obj[i], i, obj);
              }
            } else {
              for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                  iterator(obj[key], key, obj);
                }
              }
            }
          };
          var map = function (obj, iterator) {
            var results = [];
            // Not using strict equality so that this acts as a
            // shortcut to checking for `null` and `undefined`.
            if (obj == null) {
              return results;
            }
            if (Array.prototype.map && obj.map === Array.prototype.map) {
              return obj.map(iterator);
            }
            each(obj, function (value, index, list) {
              results.push(iterator(value, index, list));
            });
            return results;
          };
          var extendSoft = function (target, source) {
            if (source == null) {
              return target;
            }
            var value;
            var key;
            for (key in source) {
              value = source[key];
              if (value != null && !Object.prototype.hasOwnProperty.call(target, key)) {
                target[key] = value;
              }
            }
            return target;
          };

          // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
          var enumerateDevicesKey = function (done, options) {
            if (!isEnumerateDevicesSupported()) {
              return done(options.NOT_AVAILABLE);
            }
            navigator.mediaDevices.enumerateDevices().then(function (devices) {
              done(devices.map(function (device) {
                return 'id=' + device.deviceId + ';gid=' + device.groupId + ';' + device.kind + ';' + device.label;
              }));
            }).catch(function (error) {
              done(error);
            });
          };
          var isEnumerateDevicesSupported = function () {
            return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices;
          };
          // Inspired by and based on https://github.com/cozylife/audio-fingerprint
          var audioKey = function (done, options) {
            var audioOptions = options.audio;
            if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
              // See comment for excludeUserAgent and https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
              return done(options.EXCLUDED);
            }
            var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
            if (AudioContext == null) {
              return done(options.NOT_AVAILABLE);
            }
            var context = new AudioContext(1, 44100, 44100);
            var oscillator = context.createOscillator();
            oscillator.type = 'triangle';
            oscillator.frequency.setValueAtTime(10000, context.currentTime);
            var compressor = context.createDynamicsCompressor();
            each([['threshold', -50], ['knee', 40], ['ratio', 12], ['reduction', -20], ['attack', 0], ['release', 0.25]], function (item) {
              if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
                compressor[item[0]].setValueAtTime(item[1], context.currentTime);
              }
            });
            oscillator.connect(compressor);
            compressor.connect(context.destination);
            oscillator.start(0);
            context.startRendering();
            var audioTimeoutId = setTimeout(function () {
              console.warn('Audio fingerprint timed out. Please report bug at https://github.com/fingerprintjs/fingerprintjs with your user agent: "' + navigator.userAgent + '".');
              context.oncomplete = function () {};
              context = null;
              return done('audioTimeout');
            }, audioOptions.timeout);
            context.oncomplete = function (event) {
              var fingerprint;
              try {
                clearTimeout(audioTimeoutId);
                fingerprint = event.renderedBuffer.getChannelData(0).slice(4500, 5000).reduce(function (acc, val) {
                  return acc + Math.abs(val);
                }, 0).toString();
                oscillator.disconnect();
                compressor.disconnect();
              } catch (error) {
                done(error);
                return;
              }
              done(fingerprint);
            };
          };
          var UserAgent = function (done) {
            done(navigator.userAgent);
          };
          var webdriver = function (done, options) {
            done(navigator.webdriver == null ? options.NOT_AVAILABLE : navigator.webdriver);
          };
          var languageKey = function (done, options) {
            done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE);
          };
          var colorDepthKey = function (done, options) {
            done(window.screen.colorDepth || options.NOT_AVAILABLE);
          };
          var deviceMemoryKey = function (done, options) {
            done(navigator.deviceMemory || options.NOT_AVAILABLE);
          };
          var pixelRatioKey = function (done, options) {
            done(window.devicePixelRatio || options.NOT_AVAILABLE);
          };
          var screenResolutionKey = function (done, options) {
            done(getScreenResolution(options));
          };
          var getScreenResolution = function (options) {
            var resolution = [window.screen.width, window.screen.height];
            if (options.screen.detectScreenOrientation) {
              resolution.sort().reverse();
            }
            return resolution;
          };
          var availableScreenResolutionKey = function (done, options) {
            done(getAvailableScreenResolution(options));
          };
          var getAvailableScreenResolution = function (options) {
            if (window.screen.availWidth && window.screen.availHeight) {
              var available = [window.screen.availHeight, window.screen.availWidth];
              if (options.screen.detectScreenOrientation) {
                available.sort().reverse();
              }
              return available;
            }
            // headless browsers
            return options.NOT_AVAILABLE;
          };
          var timezoneOffset = function (done) {
            done(new Date().getTimezoneOffset());
          };
          var timezone = function (done, options) {
            if (window.Intl && window.Intl.DateTimeFormat) {
              done(new window.Intl.DateTimeFormat().resolvedOptions().timeZone || options.NOT_AVAILABLE);
              return;
            }
            done(options.NOT_AVAILABLE);
          };
          var sessionStorageKey = function (done, options) {
            done(hasSessionStorage(options));
          };
          var localStorageKey = function (done, options) {
            done(hasLocalStorage(options));
          };
          var indexedDbKey = function (done, options) {
            done(hasIndexedDB(options));
          };
          var addBehaviorKey = function (done) {
            done(!!window.HTMLElement.prototype.addBehavior);
          };
          var openDatabaseKey = function (done) {
            done(!!window.openDatabase);
          };
          var cpuClassKey = function (done, options) {
            done(getNavigatorCpuClass(options));
          };
          var platformKey = function (done, options) {
            done(getNavigatorPlatform(options));
          };
          var doNotTrackKey = function (done, options) {
            done(getDoNotTrack(options));
          };
          var canvasKey = function (done, options) {
            if (isCanvasSupported()) {
              done(getCanvasFp(options));
              return;
            }
            done(options.NOT_AVAILABLE);
          };
          var webglKey = function (done, options) {
            if (isWebGlSupported()) {
              done(getWebglFp());
              return;
            }
            done(options.NOT_AVAILABLE);
          };
          var webglVendorAndRendererKey = function (done) {
            if (isWebGlSupported()) {
              done(getWebglVendorAndRenderer());
              return;
            }
            done();
          };
          var adBlockKey = function (done) {
            done(getAdBlock());
          };
          var hasLiedLanguagesKey = function (done) {
            done(getHasLiedLanguages());
          };
          var hasLiedResolutionKey = function (done) {
            done(getHasLiedResolution());
          };
          var hasLiedOsKey = function (done) {
            done(getHasLiedOs());
          };
          var hasLiedBrowserKey = function (done) {
            done(getHasLiedBrowser());
          };
          // flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
          var flashFontsKey = function (done, options) {
            // we do flash if swfobject is loaded
            if (!hasSwfObjectLoaded()) {
              return done('swf object not loaded');
            }
            if (!hasMinFlashInstalled()) {
              return done('flash not installed');
            }
            if (!options.fonts.swfPath) {
              return done('missing options.fonts.swfPath');
            }
            loadSwfAndDetectFonts(function (fonts) {
              done(fonts);
            }, options);
          };
          // kudos to http://www.lalit.org/lab/javascript-css-font-detect/
          var jsFontsKey = function (done, options) {
            // a font will be compared against all the three default fonts.
            // and if it doesn't match all 3 then that font is not available.
            var baseFonts = ['monospace', 'sans-serif', 'serif'];
            var fontList = ['Andale Mono', 'Arial', 'Arial Black', 'Arial Hebrew', 'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS', 'Bitstream Vera Sans Mono', 'Book Antiqua', 'Bookman Old Style', 'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic', 'Century Schoolbook', 'Comic Sans', 'Comic Sans MS', 'Consolas', 'Courier', 'Courier New', 'Geneva', 'Georgia', 'Helvetica', 'Helvetica Neue', 'Impact', 'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax', 'LUCIDA GRANDE', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode', 'Microsoft Sans Serif', 'Monaco', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic', 'MS Reference Sans Serif', 'MS Sans Serif', 'MS Serif', 'MYRIAD', 'MYRIAD PRO', 'Palatino', 'Palatino Linotype', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol', 'Tahoma', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS', 'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3'];
            if (options.fonts.extendedJsFonts) {
              var extendedFontList = ['Abadi MT Condensed Light', 'Academy Engraved LET', 'ADOBE CASLON PRO', 'Adobe Garamond', 'ADOBE GARAMOND PRO', 'Agency FB', 'Aharoni', 'Albertus Extra Bold', 'Albertus Medium', 'Algerian', 'Amazone BT', 'American Typewriter', 'American Typewriter Condensed', 'AmerType Md BT', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Antique Olive', 'Aparajita', 'Apple Chancery', 'Apple Color Emoji', 'Apple SD Gothic Neo', 'Arabic Typesetting', 'ARCHER', 'ARNO PRO', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'AVENIR', 'Ayuthaya', 'Bandy', 'Bangla Sangam MN', 'Bank Gothic', 'BankGothic Md BT', 'Baskerville', 'Baskerville Old Face', 'Batang', 'BatangChe', 'Bauer Bodoni', 'Bauhaus 93', 'Bazooka', 'Bell MT', 'Bembo', 'Benguiat Bk BT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'BernhardFashion BT', 'BernhardMod BT', 'Big Caslon', 'BinnerD', 'Blackadder ITC', 'BlairMdITC TT', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Condensed', 'Bodoni MT Poster Compressed', 'Bookshelf Symbol 7', 'Boulder', 'Bradley Hand', 'Bradley Hand ITC', 'Bremen Bd BT', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Californian FB', 'Calisto MT', 'Calligrapher', 'Candara', 'CaslonOpnface BT', 'Castellar', 'Centaur', 'Cezanne', 'CG Omega', 'CG Times', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charlesworth', 'Charter Bd BT', 'Charter BT', 'Chaucer', 'ChelthmITC Bk BT', 'Chiller', 'Clarendon', 'Clarendon Condensed', 'CloisterBlack BT', 'Cochin', 'Colonna MT', 'Constantia', 'Cooper Black', 'Copperplate', 'Copperplate Gothic', 'Copperplate Gothic Bold', 'Copperplate Gothic Light', 'CopperplGoth Bd BT', 'Corbel', 'Cordia New', 'CordiaUPC', 'Cornerstone', 'Coronet', 'Cuckoo', 'Curlz MT', 'DaunPenh', 'Dauphin', 'David', 'DB LCD Temp', 'DELICIOUS', 'Denmark', 'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'English 111 Vivace BT', 'Engravers MT', 'EngraversGothic BT', 'Eras Bold ITC', 'Eras Demi ITC', 'Eras Light ITC', 'Eras Medium ITC', 'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS', 'EUROSTILE', 'Exotc350 Bd BT', 'FangSong', 'Felix Titling', 'Fixedsys', 'FONTIN', 'Footlight MT Light', 'Forte', 'FrankRuehl', 'Fransiscan', 'Freefrm721 Blk BT', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'FrnkGothITC Bk BT', 'Fruitger', 'FRUTIGER', 'Futura', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Gabriola', 'Galliard BT', 'Gautami', 'Geeza Pro', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT', 'GeoSlab 703 XBd BT', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Gloucester MT Extra Condensed', 'GOTHAM', 'GOTHAM BOLD', 'Goudy Old Style', 'Goudy Stout', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Gujarati Sangam MN', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Gurmukhi MN', 'Haettenschweiler', 'Harlow Solid Italic', 'Harrington', 'Heather', 'Heiti SC', 'Heiti TC', 'HELV', 'Herald', 'High Tower Text', 'Hiragino Kaku Gothic ProN', 'Hiragino Mincho ProN', 'Hoefler Text', 'Humanst 521 Cn BT', 'Humanst521 BT', 'Humanst521 Lt BT', 'Imprint MT Shadow', 'Incised901 Bd BT', 'Incised901 BT', 'Incised901 Lt BT', 'INCONSOLATA', 'Informal Roman', 'Informal011 BT', 'INTERSTATE', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Jazz LET', 'Jenson', 'Jester', 'Jokerman', 'Juice ITC', 'Kabel Bk BT', 'Kabel Ult BT', 'Kailasa', 'KaiTi', 'Kalinga', 'Kannada Sangam MN', 'Kartika', 'Kaufmann Bd BT', 'Kaufmann BT', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Korinna BT', 'Kristen ITC', 'Krungthep', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'LilyUPC', 'Lithograph', 'Lithograph Light', 'Long Island', 'Lydian BT', 'Magneto', 'Maiandra GD', 'Malayalam Sangam MN', 'Malgun Gothic', 'Mangal', 'Marigold', 'Marion', 'Marker Felt', 'Market', 'Marlett', 'Matisse ITC', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le', 'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Minion', 'Minion Pro', 'Miriam', 'Miriam Fixed', 'Mistral', 'Modern', 'Modern No. 20', 'Mona Lisa Solid ITC TT', 'Mongolian Baiti', 'MONO', 'MoolBoran', 'Mrs Eaves', 'MS LineDraw', 'MS Mincho', 'MS PMincho', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MUSEO', 'MV Boli', 'Nadeem', 'Narkisim', 'NEVIS', 'News Gothic', 'News GothicMT', 'NewsGoth BT', 'Niagara Engraved', 'Niagara Solid', 'Noteworthy', 'NSimSun', 'Nyala', 'OCR A Extended', 'Old Century', 'Old English Text MT', 'Onyx', 'Onyx BT', 'OPTIMA', 'Oriya Sangam MN', 'OSAKA', 'OzHandicraft BT', 'Palace Script MT', 'Papyrus', 'Parchment', 'Party LET', 'Pegasus', 'Perpetua', 'Perpetua Titling MT', 'PetitaBold', 'Pickwick', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB', 'Poor Richard', 'Poster', 'PosterBodoni BT', 'PRINCETOWN LET', 'Pristina', 'PTBarnum BT', 'Pythagoras', 'Raavi', 'Rage Italic', 'Ravie', 'Ribbon131 Bd BT', 'Rockwell', 'Rockwell Condensed', 'Rockwell Extra Bold', 'Rod', 'Roman', 'Sakkal Majalla', 'Santa Fe LET', 'Savoye LET', 'Sceptre', 'Script', 'Script MT Bold', 'SCRIPTINA', 'Serifa', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Sherwood', 'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'Signboard', 'SILKSCREEN', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Sinhala Sangam MN', 'Sketch Rockwell', 'Skia', 'Small Fonts', 'Snap ITC', 'Snell Roundhand', 'Socket', 'Souvenir Lt BT', 'Staccato222 BT', 'Steamer', 'Stencil', 'Storybook', 'Styllo', 'Subway', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'Sylfaen', 'Synchro LET', 'System', 'Tamil Sangam MN', 'Technical', 'Teletype', 'Telugu Sangam MN', 'Tempus Sans ITC', 'Terminal', 'Thonburi', 'Traditional Arabic', 'Trajan', 'TRAJAN PRO', 'Tristan', 'Tubular', 'Tunga', 'Tw Cen MT', 'Tw Cen MT Condensed', 'Tw Cen MT Condensed Extra Bold', 'TypoUpright BT', 'Unicorn', 'Univers', 'Univers CE 55 Medium', 'Univers Condensed', 'Utsaah', 'Vagabond', 'Vani', 'Vijaya', 'Viner Hand ITC', 'VisualUI', 'Vivaldi', 'Vladimir Script', 'Vrinda', 'Westminster', 'WHITNEY', 'Wide Latin', 'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zapfino', 'Zurich BlkEx BT', 'Zurich Ex BT', 'ZWAdobeF'];
              fontList = fontList.concat(extendedFontList);
            }
            fontList = fontList.concat(options.fonts.userDefinedFonts);

            // remove duplicate fonts
            fontList = fontList.filter(function (font, position) {
              return fontList.indexOf(font) === position;
            });

            // we use m or w because these two characters take up the maximum width.
            // And we use a LLi so that the same matching fonts can get separated
            var testString = 'mmmmmmmmmmlli';

            // we test using 72px font size, we may use any size. I guess larger the better.
            var testSize = '72px';
            var h = document.getElementsByTagName('body')[0];

            // div to load spans for the base fonts
            var baseFontsDiv = document.createElement('div');

            // div to load spans for the fonts to detect
            var fontsDiv = document.createElement('div');
            var defaultWidth = {};
            var defaultHeight = {};

            // creates a span where the fonts will be loaded
            var createSpan = function () {
              var s = document.createElement('span');
              /*
               * We need this css as in some weird browser this
               * span elements shows up for a microSec which creates a
               * bad user experience
               */
              s.style.position = 'absolute';
              s.style.left = '-9999px';
              s.style.fontSize = testSize;

              // css font reset to reset external styles
              s.style.fontStyle = 'normal';
              s.style.fontWeight = 'normal';
              s.style.letterSpacing = 'normal';
              s.style.lineBreak = 'auto';
              s.style.lineHeight = 'normal';
              s.style.textTransform = 'none';
              s.style.textAlign = 'left';
              s.style.textDecoration = 'none';
              s.style.textShadow = 'none';
              s.style.whiteSpace = 'normal';
              s.style.wordBreak = 'normal';
              s.style.wordSpacing = 'normal';
              s.innerHTML = testString;
              return s;
            };

            // creates a span and load the font to detect and a base font for fallback
            var createSpanWithFonts = function (fontToDetect, baseFont) {
              var s = createSpan();
              s.style.fontFamily = "'" + fontToDetect + "'," + baseFont;
              return s;
            };

            // creates spans for the base fonts and adds them to baseFontsDiv
            var initializeBaseFontsSpans = function () {
              var spans = [];
              for (var index = 0, length = baseFonts.length; index < length; index++) {
                var s = createSpan();
                s.style.fontFamily = baseFonts[index];
                baseFontsDiv.appendChild(s);
                spans.push(s);
              }
              return spans;
            };

            // creates spans for the fonts to detect and adds them to fontsDiv
            var initializeFontsSpans = function () {
              var spans = {};
              for (var i = 0, l = fontList.length; i < l; i++) {
                var fontSpans = [];
                for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
                  var s = createSpanWithFonts(fontList[i], baseFonts[j]);
                  fontsDiv.appendChild(s);
                  fontSpans.push(s);
                }
                spans[fontList[i]] = fontSpans; // Stores {fontName : [spans for that font]}
              }

              return spans;
            };

            // checks if a font is available
            var isFontAvailable = function (fontSpans) {
              var detected = false;
              for (var i = 0; i < baseFonts.length; i++) {
                detected = fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]];
                if (detected) {
                  return detected;
                }
              }
              return detected;
            };

            // create spans for base fonts
            var baseFontsSpans = initializeBaseFontsSpans();

            // add the spans to the DOM
            h.appendChild(baseFontsDiv);

            // get the default width for the three base fonts
            for (var index = 0, length = baseFonts.length; index < length; index++) {
              defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth; // width for the default font
              defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight; // height for the default font
            }

            // create spans for fonts to detect
            var fontsSpans = initializeFontsSpans();

            // add all the spans to the DOM
            h.appendChild(fontsDiv);

            // check available fonts
            var available = [];
            for (var i = 0, l = fontList.length; i < l; i++) {
              if (isFontAvailable(fontsSpans[fontList[i]])) {
                available.push(fontList[i]);
              }
            }

            // remove spans from DOM
            h.removeChild(fontsDiv);
            h.removeChild(baseFontsDiv);
            done(available);
          };
          var pluginsComponent = function (done, options) {
            if (isIE()) {
              if (!options.plugins.excludeIE) {
                done(getIEPlugins(options));
              } else {
                done(options.EXCLUDED);
              }
            } else {
              done(getRegularPlugins(options));
            }
          };
          var getRegularPlugins = function (options) {
            if (navigator.plugins == null) {
              return options.NOT_AVAILABLE;
            }
            var plugins = [];
            // plugins isn't defined in Node envs.
            for (var i = 0, l = navigator.plugins.length; i < l; i++) {
              if (navigator.plugins[i]) {
                plugins.push(navigator.plugins[i]);
              }
            }

            // sorting plugins only for those user agents, that we know randomize the plugins
            // every time we try to enumerate them
            if (pluginsShouldBeSorted(options)) {
              plugins = plugins.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              });
            }
            return map(plugins, function (p) {
              var mimeTypes = map(p, function (mt) {
                return [mt.type, mt.suffixes];
              });
              return [p.name, p.description, mimeTypes];
            });
          };
          var getIEPlugins = function (options) {
            var result = [];
            if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, 'ActiveXObject') || 'ActiveXObject' in window) {
              var names = ['AcroPDF.PDF',
              // Adobe PDF reader 7+
              'Adodb.Stream', 'AgControl.AgControl',
              // Silverlight
              'DevalVRXCtrl.DevalVRXCtrl.1', 'MacromediaFlashPaper.MacromediaFlashPaper', 'Msxml2.DOMDocument', 'Msxml2.XMLHTTP', 'PDF.PdfCtrl',
              // Adobe PDF reader 6 and earlier, brrr
              'QuickTime.QuickTime',
              // QuickTime
              'QuickTimeCheckObject.QuickTimeCheck.1', 'RealPlayer', 'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)', 'RealVideo.RealVideo(tm) ActiveX Control (32-bit)', 'Scripting.Dictionary', 'SWCtl.SWCtl',
              // ShockWave player
              'Shell.UIHelper', 'ShockwaveFlash.ShockwaveFlash',
              // flash plugin
              'Skype.Detection', 'TDCCtl.TDCCtl', 'WMPlayer.OCX',
              // Windows media player
              'rmocx.RealPlayer G2 Control', 'rmocx.RealPlayer G2 Control.1'];
              // starting to detect plugins in IE
              result = map(names, function (name) {
                try {
                  // eslint-disable-next-line no-new
                  new window.ActiveXObject(name);
                  return name;
                } catch (e) {
                  return options.ERROR;
                }
              });
            } else {
              result.push(options.NOT_AVAILABLE);
            }
            if (navigator.plugins) {
              result = result.concat(getRegularPlugins(options));
            }
            return result;
          };
          var pluginsShouldBeSorted = function (options) {
            var should = false;
            for (var i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
              var re = options.plugins.sortPluginsFor[i];
              if (navigator.userAgent.match(re)) {
                should = true;
                break;
              }
            }
            return should;
          };
          var touchSupportKey = function (done) {
            done(getTouchSupport());
          };
          var hardwareConcurrencyKey = function (done, options) {
            done(getHardwareConcurrency(options));
          };
          var hasSessionStorage = function (options) {
            try {
              return !!window.sessionStorage;
            } catch (e) {
              return options.ERROR; // SecurityError when referencing it means it exists
            }
          };

          // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
          var hasLocalStorage = function (options) {
            try {
              return !!window.localStorage;
            } catch (e) {
              return options.ERROR; // SecurityError when referencing it means it exists
            }
          };

          var hasIndexedDB = function (options) {
            // IE and Edge don't allow accessing indexedDB in private mode, therefore IE and Edge will have different
            // fingerprints in normal and private modes.
            if (isIEOrOldEdge()) {
              return options.EXCLUDED;
            }
            try {
              return !!window.indexedDB;
            } catch (e) {
              return options.ERROR; // SecurityError when referencing it means it exists
            }
          };

          var getHardwareConcurrency = function (options) {
            if (navigator.hardwareConcurrency) {
              return navigator.hardwareConcurrency;
            }
            return options.NOT_AVAILABLE;
          };
          var getNavigatorCpuClass = function (options) {
            return navigator.cpuClass || options.NOT_AVAILABLE;
          };
          var getNavigatorPlatform = function (options) {
            if (navigator.platform) {
              return navigator.platform;
            } else {
              return options.NOT_AVAILABLE;
            }
          };
          var getDoNotTrack = function (options) {
            if (navigator.doNotTrack) {
              return navigator.doNotTrack;
            } else if (navigator.msDoNotTrack) {
              return navigator.msDoNotTrack;
            } else if (window.doNotTrack) {
              return window.doNotTrack;
            } else {
              return options.NOT_AVAILABLE;
            }
          };
          // This is a crude and primitive touch screen detection.
          // It's not possible to currently reliably detect the  availability of a touch screen
          // with a JS, without actually subscribing to a touch event.
          // http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
          // https://github.com/Modernizr/Modernizr/issues/548
          // method returns an array of 3 values:
          // maxTouchPoints, the success or failure of creating a TouchEvent,
          // and the availability of the 'ontouchstart' property

          var getTouchSupport = function () {
            var maxTouchPoints = 0;
            var touchEvent;
            if (typeof navigator.maxTouchPoints !== 'undefined') {
              maxTouchPoints = navigator.maxTouchPoints;
            } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
              maxTouchPoints = navigator.msMaxTouchPoints;
            }
            try {
              document.createEvent('TouchEvent');
              touchEvent = true;
            } catch (_) {
              touchEvent = false;
            }
            var touchStart = ('ontouchstart' in window);
            return [maxTouchPoints, touchEvent, touchStart];
          };
          // https://www.browserleaks.com/canvas#how-does-it-work

          var getCanvasFp = function (options) {
            var result = [];
            // Very simple now, need to make it more complex (geo shapes etc)
            var canvas = document.createElement('canvas');
            canvas.width = 2000;
            canvas.height = 200;
            canvas.style.display = 'inline';
            var ctx = canvas.getContext('2d');
            // detect browser support of canvas winding
            // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
            // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
            ctx.rect(0, 0, 10, 10);
            ctx.rect(2, 2, 6, 6);
            result.push('canvas winding:' + (ctx.isPointInPath(5, 5, 'evenodd') === false ? 'yes' : 'no'));
            ctx.textBaseline = 'alphabetic';
            ctx.fillStyle = '#f60';
            ctx.fillRect(125, 1, 62, 20);
            ctx.fillStyle = '#069';
            // https://github.com/fingerprintjs/fingerprintjs/issues/66
            if (options.dontUseFakeFontInCanvas) {
              ctx.font = '11pt Arial';
            } else {
              ctx.font = '11pt no-real-font-123';
            }
            ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15);
            ctx.fillStyle = 'rgba(102, 204, 0, 0.2)';
            ctx.font = '18pt Arial';
            ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45);

            // canvas blending
            // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
            // http://jsfiddle.net/NDYV8/16/
            ctx.globalCompositeOperation = 'multiply';
            ctx.fillStyle = 'rgb(255,0,255)';
            ctx.beginPath();
            ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = 'rgb(0,255,255)';
            ctx.beginPath();
            ctx.arc(100, 50, 50, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = 'rgb(255,255,0)';
            ctx.beginPath();
            ctx.arc(75, 100, 50, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = 'rgb(255,0,255)';
            // canvas winding
            // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
            // http://jsfiddle.net/NDYV8/19/
            ctx.arc(75, 75, 75, 0, Math.PI * 2, true);
            ctx.arc(75, 75, 25, 0, Math.PI * 2, true);
            ctx.fill('evenodd');
            if (canvas.toDataURL) {
              result.push('canvas fp:' + canvas.toDataURL());
            }
            return result;
          };
          var getWebglFp = function () {
            var gl;
            var fa2s = function (fa) {
              gl.clearColor(0.0, 0.0, 0.0, 1.0);
              gl.enable(gl.DEPTH_TEST);
              gl.depthFunc(gl.LEQUAL);
              gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
              return '[' + fa[0] + ', ' + fa[1] + ']';
            };
            var maxAnisotropy = function (gl) {
              var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic');
              if (ext) {
                var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                if (anisotropy === 0) {
                  anisotropy = 2;
                }
                return anisotropy;
              } else {
                return null;
              }
            };
            gl = getWebglCanvas();
            if (!gl) {
              return null;
            }
            // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
            // First it draws a gradient object with shaders and convers the image to the Base64 string.
            // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
            // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
            var result = [];
            var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}';
            var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}';
            var vertexPosBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
            var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
            vertexPosBuffer.itemSize = 3;
            vertexPosBuffer.numItems = 3;
            var program = gl.createProgram();
            var vshader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vshader, vShaderTemplate);
            gl.compileShader(vshader);
            var fshader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fshader, fShaderTemplate);
            gl.compileShader(fshader);
            gl.attachShader(program, vshader);
            gl.attachShader(program, fshader);
            gl.linkProgram(program);
            gl.useProgram(program);
            program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex');
            program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset');
            gl.enableVertexAttribArray(program.vertexPosArray);
            gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0);
            gl.uniform2f(program.offsetUniform, 1, 1);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
            try {
              result.push(gl.canvas.toDataURL());
            } catch (e) {
              /* .toDataURL may be absent or broken (blocked by extension) */
            }
            result.push('extensions:' + (gl.getSupportedExtensions() || []).join(';'));
            result.push('webgl aliased line width range:' + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)));
            result.push('webgl aliased point size range:' + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)));
            result.push('webgl alpha bits:' + gl.getParameter(gl.ALPHA_BITS));
            result.push('webgl antialiasing:' + (gl.getContextAttributes().antialias ? 'yes' : 'no'));
            result.push('webgl blue bits:' + gl.getParameter(gl.BLUE_BITS));
            result.push('webgl depth bits:' + gl.getParameter(gl.DEPTH_BITS));
            result.push('webgl green bits:' + gl.getParameter(gl.GREEN_BITS));
            result.push('webgl max anisotropy:' + maxAnisotropy(gl));
            result.push('webgl max combined texture image units:' + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
            result.push('webgl max cube map texture size:' + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE));
            result.push('webgl max fragment uniform vectors:' + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS));
            result.push('webgl max render buffer size:' + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));
            result.push('webgl max texture image units:' + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
            result.push('webgl max texture size:' + gl.getParameter(gl.MAX_TEXTURE_SIZE));
            result.push('webgl max varying vectors:' + gl.getParameter(gl.MAX_VARYING_VECTORS));
            result.push('webgl max vertex attribs:' + gl.getParameter(gl.MAX_VERTEX_ATTRIBS));
            result.push('webgl max vertex texture image units:' + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
            result.push('webgl max vertex uniform vectors:' + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS));
            result.push('webgl max viewport dims:' + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)));
            result.push('webgl red bits:' + gl.getParameter(gl.RED_BITS));
            result.push('webgl renderer:' + gl.getParameter(gl.RENDERER));
            result.push('webgl shading language version:' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
            result.push('webgl stencil bits:' + gl.getParameter(gl.STENCIL_BITS));
            result.push('webgl vendor:' + gl.getParameter(gl.VENDOR));
            result.push('webgl version:' + gl.getParameter(gl.VERSION));
            try {
              // Add the unmasked vendor and unmasked renderer if the debug_renderer_info extension is available
              var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');
              if (extensionDebugRendererInfo) {
                result.push('webgl unmasked vendor:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL));
                result.push('webgl unmasked renderer:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL));
              }
            } catch (e) {/* squelch */}
            if (!gl.getShaderPrecisionFormat) {
              loseWebglContext(gl);
              return result;
            }
            each(['FLOAT', 'INT'], function (numType) {
              each(['VERTEX', 'FRAGMENT'], function (shader) {
                each(['HIGH', 'MEDIUM', 'LOW'], function (numSize) {
                  each(['precision', 'rangeMin', 'rangeMax'], function (key) {
                    var format = gl.getShaderPrecisionFormat(gl[shader + '_SHADER'], gl[numSize + '_' + numType])[key];
                    if (key !== 'precision') {
                      key = 'precision ' + key;
                    }
                    var line = ['webgl ', shader.toLowerCase(), ' shader ', numSize.toLowerCase(), ' ', numType.toLowerCase(), ' ', key, ':', format].join('');
                    result.push(line);
                  });
                });
              });
            });
            loseWebglContext(gl);
            return result;
          };
          var getWebglVendorAndRenderer = function () {
            /* This a subset of the WebGL fingerprint with a lot of entropy, while being reasonably browser-independent */
            try {
              var glContext = getWebglCanvas();
              var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info');
              var params = glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL);
              loseWebglContext(glContext);
              return params;
            } catch (e) {
              return null;
            }
          };
          var getAdBlock = function () {
            var ads = document.createElement('div');
            ads.innerHTML = '&nbsp;';
            ads.className = 'adsbox';
            var result = false;
            try {
              // body may not exist, that's why we need try/catch
              document.body.appendChild(ads);
              result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0;
              document.body.removeChild(ads);
            } catch (e) {
              result = false;
            }
            return result;
          };
          var getHasLiedLanguages = function () {
            // We check if navigator.language is equal to the first language of navigator.languages
            // navigator.languages is undefined on IE11 (and potentially older IEs)
            if (typeof navigator.languages !== 'undefined') {
              try {
                var firstLanguages = navigator.languages[0].substr(0, 2);
                if (firstLanguages !== navigator.language.substr(0, 2)) {
                  return true;
                }
              } catch (err) {
                return true;
              }
            }
            return false;
          };
          var getHasLiedResolution = function () {
            return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight;
          };
          var getHasLiedOs = function () {
            var userAgent = navigator.userAgent.toLowerCase();
            var oscpu = navigator.oscpu;
            var platform = navigator.platform.toLowerCase();
            var os;
            // We extract the OS from the user agent (respect the order of the if else if statement)
            if (userAgent.indexOf('windows phone') >= 0) {
              os = 'Windows Phone';
            } else if (userAgent.indexOf('windows') >= 0 || userAgent.indexOf('win16') >= 0 || userAgent.indexOf('win32') >= 0 || userAgent.indexOf('win64') >= 0 || userAgent.indexOf('win95') >= 0 || userAgent.indexOf('win98') >= 0 || userAgent.indexOf('winnt') >= 0 || userAgent.indexOf('wow64') >= 0) {
              os = 'Windows';
            } else if (userAgent.indexOf('android') >= 0) {
              os = 'Android';
            } else if (userAgent.indexOf('linux') >= 0 || userAgent.indexOf('cros') >= 0 || userAgent.indexOf('x11') >= 0) {
              os = 'Linux';
            } else if (userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0 || userAgent.indexOf('ipod') >= 0 || userAgent.indexOf('crios') >= 0 || userAgent.indexOf('fxios') >= 0) {
              os = 'iOS';
            } else if (userAgent.indexOf('macintosh') >= 0 || userAgent.indexOf('mac_powerpc)') >= 0) {
              os = 'Mac';
            } else {
              os = 'Other';
            }
            // We detect if the person uses a touch device
            var mobileDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
            if (mobileDevice && os !== 'Windows' && os !== 'Windows Phone' && os !== 'Android' && os !== 'iOS' && os !== 'Other' && userAgent.indexOf('cros') === -1) {
              return true;
            }

            // We compare oscpu with the OS extracted from the UA
            if (typeof oscpu !== 'undefined') {
              oscpu = oscpu.toLowerCase();
              if (oscpu.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
                return true;
              } else if (oscpu.indexOf('linux') >= 0 && os !== 'Linux' && os !== 'Android') {
                return true;
              } else if (oscpu.indexOf('mac') >= 0 && os !== 'Mac' && os !== 'iOS') {
                return true;
              } else if ((oscpu.indexOf('win') === -1 && oscpu.indexOf('linux') === -1 && oscpu.indexOf('mac') === -1) !== (os === 'Other')) {
                return true;
              }
            }

            // We compare platform with the OS extracted from the UA
            if (platform.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
              return true;
            } else if ((platform.indexOf('linux') >= 0 || platform.indexOf('android') >= 0 || platform.indexOf('pike') >= 0) && os !== 'Linux' && os !== 'Android') {
              return true;
            } else if ((platform.indexOf('mac') >= 0 || platform.indexOf('ipad') >= 0 || platform.indexOf('ipod') >= 0 || platform.indexOf('iphone') >= 0) && os !== 'Mac' && os !== 'iOS') {
              return true;
            } else if (platform.indexOf('arm') >= 0 && os === 'Windows Phone') {
              return false;
            } else if (platform.indexOf('pike') >= 0 && userAgent.indexOf('opera mini') >= 0) {
              return false;
            } else {
              var platformIsOther = platform.indexOf('win') < 0 && platform.indexOf('linux') < 0 && platform.indexOf('mac') < 0 && platform.indexOf('iphone') < 0 && platform.indexOf('ipad') < 0 && platform.indexOf('ipod') < 0;
              if (platformIsOther !== (os === 'Other')) {
                return true;
              }
            }
            return typeof navigator.plugins === 'undefined' && os !== 'Windows' && os !== 'Windows Phone';
          };
          var getHasLiedBrowser = function () {
            var userAgent = navigator.userAgent.toLowerCase();
            var productSub = navigator.productSub;

            // we extract the browser from the user agent (respect the order of the tests)
            var browser;
            if (userAgent.indexOf('edge/') >= 0 || userAgent.indexOf('iemobile/') >= 0) {
              // Unreliable, different versions use EdgeHTML, Webkit, Blink, etc.
              return false;
            } else if (userAgent.indexOf('opera mini') >= 0) {
              // Unreliable, different modes use Presto, WebView, Webkit, etc.
              return false;
            } else if (userAgent.indexOf('firefox/') >= 0) {
              browser = 'Firefox';
            } else if (userAgent.indexOf('opera/') >= 0 || userAgent.indexOf(' opr/') >= 0) {
              browser = 'Opera';
            } else if (userAgent.indexOf('chrome/') >= 0) {
              browser = 'Chrome';
            } else if (userAgent.indexOf('safari/') >= 0) {
              if (userAgent.indexOf('android 1.') >= 0 || userAgent.indexOf('android 2.') >= 0 || userAgent.indexOf('android 3.') >= 0 || userAgent.indexOf('android 4.') >= 0) {
                browser = 'AOSP';
              } else {
                browser = 'Safari';
              }
            } else if (userAgent.indexOf('trident/') >= 0) {
              browser = 'Internet Explorer';
            } else {
              browser = 'Other';
            }
            if ((browser === 'Chrome' || browser === 'Safari' || browser === 'Opera') && productSub !== '20030107') {
              return true;
            }

            // eslint-disable-next-line no-eval
            var tempRes = eval.toString().length;
            if (tempRes === 37 && browser !== 'Safari' && browser !== 'Firefox' && browser !== 'Other') {
              return true;
            } else if (tempRes === 39 && browser !== 'Internet Explorer' && browser !== 'Other') {
              return true;
            } else if (tempRes === 33 && browser !== 'Chrome' && browser !== 'AOSP' && browser !== 'Opera' && browser !== 'Other') {
              return true;
            }

            // We create an error to see how it is handled
            var errFirefox;
            try {
              // eslint-disable-next-line no-throw-literal
              throw 'a';
            } catch (err) {
              try {
                err.toSource();
                errFirefox = true;
              } catch (errOfErr) {
                errFirefox = false;
              }
            }
            return errFirefox && browser !== 'Firefox' && browser !== 'Other';
          };
          var isCanvasSupported = function () {
            var elem = document.createElement('canvas');
            return !!(elem.getContext && elem.getContext('2d'));
          };
          var isWebGlSupported = function () {
            // code taken from Modernizr
            if (!isCanvasSupported()) {
              return false;
            }
            var glContext = getWebglCanvas();
            var isSupported = !!window.WebGLRenderingContext && !!glContext;
            loseWebglContext(glContext);
            return isSupported;
          };
          var isIE = function () {
            if (navigator.appName === 'Microsoft Internet Explorer') {
              return true;
            } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) {
              // IE 11
              return true;
            }
            return false;
          };
          var isIEOrOldEdge = function () {
            // The properties are checked to be in IE 10, IE 11 and Edge 18 and not to be in other browsers
            return ('msWriteProfilerMark' in window) + ('msLaunchUri' in navigator) + ('msSaveBlob' in navigator) >= 2;
          };
          var hasSwfObjectLoaded = function () {
            return typeof window.swfobject !== 'undefined';
          };
          var hasMinFlashInstalled = function () {
            return window.swfobject.hasFlashPlayerVersion('9.0.0');
          };
          var addFlashDivNode = function (options) {
            var node = document.createElement('div');
            node.setAttribute('id', options.fonts.swfContainerId);
            document.body.appendChild(node);
          };
          var loadSwfAndDetectFonts = function (done, options) {
            var hiddenCallback = '___fp_swf_loaded';
            window[hiddenCallback] = function (fonts) {
              done(fonts);
            };
            var id = options.fonts.swfContainerId;
            addFlashDivNode();
            var flashvars = {
              onReady: hiddenCallback
            };
            var flashparams = {
              allowScriptAccess: 'always',
              menu: 'false'
            };
            window.swfobject.embedSWF(options.fonts.swfPath, id, '1', '1', '9.0.0', false, flashvars, flashparams, {});
          };
          var getWebglCanvas = function () {
            var canvas = document.createElement('canvas');
            var gl = null;
            try {
              gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            } catch (e) {/* squelch */}
            if (!gl) {
              gl = null;
            }
            return gl;
          };
          var loseWebglContext = function (context) {
            var loseContextExtension = context.getExtension('WEBGL_lose_context');
            if (loseContextExtension != null) {
              loseContextExtension.loseContext();
            }
          };
          var components = [{
            key: 'userAgent',
            getData: UserAgent
          }, {
            key: 'webdriver',
            getData: webdriver
          }, {
            key: 'language',
            getData: languageKey
          }, {
            key: 'colorDepth',
            getData: colorDepthKey
          }, {
            key: 'deviceMemory',
            getData: deviceMemoryKey
          }, {
            key: 'pixelRatio',
            getData: pixelRatioKey
          }, {
            key: 'hardwareConcurrency',
            getData: hardwareConcurrencyKey
          }, {
            key: 'screenResolution',
            getData: screenResolutionKey
          }, {
            key: 'availableScreenResolution',
            getData: availableScreenResolutionKey
          }, {
            key: 'timezoneOffset',
            getData: timezoneOffset
          }, {
            key: 'timezone',
            getData: timezone
          }, {
            key: 'sessionStorage',
            getData: sessionStorageKey
          }, {
            key: 'localStorage',
            getData: localStorageKey
          }, {
            key: 'indexedDb',
            getData: indexedDbKey
          }, {
            key: 'addBehavior',
            getData: addBehaviorKey
          }, {
            key: 'openDatabase',
            getData: openDatabaseKey
          }, {
            key: 'cpuClass',
            getData: cpuClassKey
          }, {
            key: 'platform',
            getData: platformKey
          }, {
            key: 'doNotTrack',
            getData: doNotTrackKey
          }, {
            key: 'plugins',
            getData: pluginsComponent
          }, {
            key: 'canvas',
            getData: canvasKey
          }, {
            key: 'webgl',
            getData: webglKey
          }, {
            key: 'webglVendorAndRenderer',
            getData: webglVendorAndRendererKey
          }, {
            key: 'adBlock',
            getData: adBlockKey
          }, {
            key: 'hasLiedLanguages',
            getData: hasLiedLanguagesKey
          }, {
            key: 'hasLiedResolution',
            getData: hasLiedResolutionKey
          }, {
            key: 'hasLiedOs',
            getData: hasLiedOsKey
          }, {
            key: 'hasLiedBrowser',
            getData: hasLiedBrowserKey
          }, {
            key: 'touchSupport',
            getData: touchSupportKey
          }, {
            key: 'fonts',
            getData: jsFontsKey,
            pauseBefore: true
          }, {
            key: 'fontsFlash',
            getData: flashFontsKey,
            pauseBefore: true
          }, {
            key: 'audio',
            getData: audioKey
          }, {
            key: 'enumerateDevices',
            getData: enumerateDevicesKey
          }];
          var Fingerprint2 = function (options) {
            throw new Error("'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200");
          };
          Fingerprint2.get = function (options, callback) {
            if (!callback) {
              callback = options;
              options = {};
            } else if (!options) {
              options = {};
            }
            extendSoft(options, defaultOptions);
            options.components = options.extraComponents.concat(components);
            var keys = {
              data: [],
              addPreprocessedComponent: function (key, value) {
                if (typeof options.preprocessor === 'function') {
                  value = options.preprocessor(key, value);
                }
                keys.data.push({
                  key: key,
                  value: value
                });
              }
            };
            var i = -1;
            var chainComponents = function (alreadyWaited) {
              i += 1;
              if (i >= options.components.length) {
                // on finish
                callback(keys.data);
                return;
              }
              var component = options.components[i];
              if (options.excludes[component.key]) {
                chainComponents(false); // skip
                return;
              }
              if (!alreadyWaited && component.pauseBefore) {
                i -= 1;
                setTimeout(function () {
                  chainComponents(true);
                }, 1);
                return;
              }
              try {
                component.getData(function (value) {
                  keys.addPreprocessedComponent(component.key, value);
                  chainComponents(false);
                }, options);
              } catch (error) {
                // main body error
                keys.addPreprocessedComponent(component.key, String(error));
                chainComponents(false);
              }
            };
            chainComponents(false);
          };
          Fingerprint2.getPromise = function (options) {
            return new Promise(function (resolve, reject) {
              Fingerprint2.get(options, resolve);
            });
          };
          Fingerprint2.getV18 = function (options, callback) {
            if (callback == null) {
              callback = options;
              options = {};
            }
            return Fingerprint2.get(options, function (components) {
              var newComponents = [];
              for (var i = 0; i < components.length; i++) {
                var component = components[i];
                if (component.value === (options.NOT_AVAILABLE || 'not available')) {
                  newComponents.push({
                    key: component.key,
                    value: 'unknown'
                  });
                } else if (component.key === 'plugins') {
                  newComponents.push({
                    key: 'plugins',
                    value: map(component.value, function (p) {
                      var mimeTypes = map(p[2], function (mt) {
                        if (mt.join) {
                          return mt.join('~');
                        }
                        return mt;
                      }).join(',');
                      return [p[0], p[1], mimeTypes].join('::');
                    })
                  });
                } else if (['canvas', 'webgl'].indexOf(component.key) !== -1 && Array.isArray(component.value)) {
                  // sometimes WebGL returns error in headless browsers (during CI testing for example)
                  // so we need to join only if the values are array
                  newComponents.push({
                    key: component.key,
                    value: component.value.join('~')
                  });
                } else if (['sessionStorage', 'localStorage', 'indexedDb', 'addBehavior', 'openDatabase'].indexOf(component.key) !== -1) {
                  if (component.value) {
                    newComponents.push({
                      key: component.key,
                      value: 1
                    });
                  } else {
                    // skip
                    continue;
                  }
                } else {
                  if (component.value) {
                    newComponents.push(component.value.join ? {
                      key: component.key,
                      value: component.value.join(';')
                    } : component);
                  } else {
                    newComponents.push({
                      key: component.key,
                      value: component.value
                    });
                  }
                }
              }
              var murmur = x64hash128(map(newComponents, function (component) {
                return component.value;
              }).join('~~~'), 31);
              callback(murmur, newComponents);
            });
          };
          Fingerprint2.x64hash128 = x64hash128;
          Fingerprint2.VERSION = '2.1.4';
          return Fingerprint2;
        });

        // #endregion ORIGINAL CODE

        _cjsExports = exports('default', module.exports);
      }, {});
    }
  };
});

System.register("chunks:///_virtual/fingerprint2.mjs_cjs=&original=.js", ['./fingerprint2.js', './cjs-loader.mjs'], function (exports, module) {
  var __cjsMetaURL, loader;
  return {
    setters: [function (module) {
      __cjsMetaURL = module.__cjsMetaURL;
      var _setter = {};
      _setter.__cjsMetaURL = module.__cjsMetaURL;
      _setter.default = module.default;
      exports(_setter);
    }, function (module) {
      loader = module.default;
    }],
    execute: function () {
      // I am the facade module who provides access to the CommonJS module './fingerprint2.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./fingerprint2.js', module.meta.url);
      }
      loader.require(__cjsMetaURL);
    }
  };
});

System.register("chunks:///_virtual/index.js", ['./cjs-loader.mjs', './types.js', './createAction.js', './createReducer.js', './assignAll.js', './bindAll.js', './batch.js', './disbatch.js', './index3.js', './asError.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2, __cjsMetaURL$3, __cjsMetaURL$4, __cjsMetaURL$5, __cjsMetaURL$6, __cjsMetaURL$7, __cjsMetaURL$8, __cjsMetaURL$9;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$3 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$4 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$5 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$6 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$7 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$8 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$9 = module.__cjsMetaURL;
    }],
    execute: function () {
      exports('default', void 0);
      let _cjsExports;
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports$1, require, module, __filename, __dirname) {
        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }
          return _typeof(obj);
        }
        Object.defineProperty(exports$1, "__esModule", {
          value: true
        });
        Object.defineProperty(exports$1, "createAction", {
          enumerable: true,
          get: function get() {
            return _createAction["default"];
          }
        });
        Object.defineProperty(exports$1, "createReducer", {
          enumerable: true,
          get: function get() {
            return _createReducer["default"];
          }
        });
        Object.defineProperty(exports$1, "assignAll", {
          enumerable: true,
          get: function get() {
            return _assignAll["default"];
          }
        });
        Object.defineProperty(exports$1, "bindAll", {
          enumerable: true,
          get: function get() {
            return _bindAll["default"];
          }
        });
        Object.defineProperty(exports$1, "batch", {
          enumerable: true,
          get: function get() {
            return _batch["default"];
          }
        });
        Object.defineProperty(exports$1, "disbatch", {
          enumerable: true,
          get: function get() {
            return _disbatch["default"];
          }
        });
        Object.defineProperty(exports$1, "loggers", {
          enumerable: true,
          get: function get() {
            return _loggers["default"];
          }
        });
        Object.defineProperty(exports$1, "asError", {
          enumerable: true,
          get: function get() {
            return _asError["default"];
          }
        });
        exports$1.types = void 0;
        var _types = _interopRequireWildcard(require("./types"));
        var _createAction = _interopRequireDefault(require("./createAction"));
        var _createReducer = _interopRequireDefault(require("./createReducer"));
        var _assignAll = _interopRequireDefault(require("./assignAll"));
        var _bindAll = _interopRequireDefault(require("./bindAll"));
        var _batch = _interopRequireDefault(require("./batch"));
        var _disbatch = _interopRequireDefault(require("./disbatch"));
        var _loggers = _interopRequireDefault(require("./loggers"));
        var _asError = _interopRequireDefault(require("./asError"));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }
        function _getRequireWildcardCache() {
          if (typeof WeakMap !== "function") return null;
          var cache = new WeakMap();
          _getRequireWildcardCache = function _getRequireWildcardCache() {
            return cache;
          };
          return cache;
        }
        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          }
          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              "default": obj
            };
          }
          var cache = _getRequireWildcardCache();
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj["default"] = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }
        var types = _types;
        exports$1.types = types;

        // #endregion ORIGINAL CODE

        _cjsExports = exports('default', module.exports);
        module.exports.__esModule;
        module.exports.createAction;
        module.exports.createReducer;
        module.exports.assignAll;
        module.exports.bindAll;
        module.exports.batch;
        module.exports.disbatch;
        module.exports.loggers;
        module.exports.asError;
        module.exports.types;
      }, () => ({
        './types': __cjsMetaURL$1,
        './createAction': __cjsMetaURL$2,
        './createReducer': __cjsMetaURL$3,
        './assignAll': __cjsMetaURL$4,
        './bindAll': __cjsMetaURL$5,
        './batch': __cjsMetaURL$6,
        './disbatch': __cjsMetaURL$7,
        './loggers': __cjsMetaURL$8,
        './asError': __cjsMetaURL$9
      }));
    }
  };
});

System.register("chunks:///_virtual/index.mjs_cjs=&original=.js", ['./index.js', './cjs-loader.mjs'], function (exports, module) {
  var __cjsMetaURL, loader;
  return {
    setters: [function (module) {
      __cjsMetaURL = module.__cjsMetaURL;
      var _setter = {};
      _setter.__cjsMetaURL = module.__cjsMetaURL;
      _setter.default = module.default;
      exports(_setter);
    }, function (module) {
      loader = module.default;
    }],
    execute: function () {
      // I am the facade module who provides access to the CommonJS module './index.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./index.js', module.meta.url);
      }
      loader.require(__cjsMetaURL);
    }
  };
});

System.register("chunks:///_virtual/index.mjs_cjs=&original=2.js", ['./index2.js', './cjs-loader.mjs'], function (exports, module) {
  var __cjsMetaURL, loader;
  return {
    setters: [function (module) {
      __cjsMetaURL = module.__cjsMetaURL;
      var _setter = {};
      _setter.__cjsMetaURL = module.__cjsMetaURL;
      _setter.default = module.default;
      exports(_setter);
    }, function (module) {
      loader = module.default;
    }],
    execute: function () {
      // I am the facade module who provides access to the CommonJS module './index.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./index.js', module.meta.url);
      }
      loader.require(__cjsMetaURL);
    }
  };
});

System.register("chunks:///_virtual/index2.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      exports('default', void 0);
      let _cjsExports;
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports$1, require, module, __filename, __dirname) {
        // do not edit .js files directly - edit src/index.jst
        module.exports = function equal(a, b) {
          if (a === b) return true;
          if (a && b && typeof a == 'object' && typeof b == 'object') {
            if (a.constructor !== b.constructor) return false;
            var length, i, keys;
            if (Array.isArray(a)) {
              length = a.length;
              if (length != b.length) return false;
              for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
              return true;
            }
            if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
            if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
            if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
            keys = Object.keys(a);
            length = keys.length;
            if (length !== Object.keys(b).length) return false;
            for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
            for (i = length; i-- !== 0;) {
              var key = keys[i];
              if (!equal(a[key], b[key])) return false;
            }
            return true;
          }

          // true if both NaN, false otherwise
          return a !== a && b !== b;
        };

        // #endregion ORIGINAL CODE

        _cjsExports = exports('default', module.exports);
      }, {});
    }
  };
});

System.register("chunks:///_virtual/index3.js", ['./cjs-loader.mjs', './reduxLogger.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }
          return _typeof(obj);
        }
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;
        var reduxLogger = _interopRequireWildcard(require("./reduxLogger"));
        function _getRequireWildcardCache() {
          if (typeof WeakMap !== "function") return null;
          var cache = new WeakMap();
          _getRequireWildcardCache = function _getRequireWildcardCache() {
            return cache;
          };
          return cache;
        }
        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          }
          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              "default": obj
            };
          }
          var cache = _getRequireWildcardCache();
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj["default"] = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }
        var _default = {
          reduxLogger: reduxLogger
        };
        exports["default"] = _default;

        // #endregion ORIGINAL CODE

        module.exports;
        module.exports.__esModule;
        module.exports.default;
      }, () => ({
        './reduxLogger': __cjsMetaURL$1
      }));
    }
  };
});

System.register("chunks:///_virtual/qrcode.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      exports('default', void 0);
      let _cjsExports;
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports$1, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        //---------------------------------------------------------------------
        //
        // QR Code Generator for JavaScript
        //
        // Copyright (c) 2009 Kazuhiko Arase
        //
        // URL: http://www.d-project.com/
        //
        // Licensed under the MIT license:
        //  http://www.opensource.org/licenses/mit-license.php
        //
        // The word 'QR Code' is registered trademark of
        // DENSO WAVE INCORPORATED
        //  http://www.denso-wave.com/qrcode/faqpatent-e.html
        //
        //---------------------------------------------------------------------

        var qrcode = function () {
          //---------------------------------------------------------------------
          // qrcode
          //---------------------------------------------------------------------

          /**
           * qrcode
           * @param typeNumber 1 to 40
           * @param errorCorrectionLevel 'L','M','Q','H'
           */
          var qrcode = function (typeNumber, errorCorrectionLevel) {
            var PAD0 = 0xEC;
            var PAD1 = 0x11;
            var _typeNumber = typeNumber;
            var _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
            var _modules = null;
            var _moduleCount = 0;
            var _dataCache = null;
            var _dataList = [];
            var _this = {};
            var makeImpl = function (test, maskPattern) {
              _moduleCount = _typeNumber * 4 + 17;
              _modules = function (moduleCount) {
                var modules = new Array(moduleCount);
                for (var row = 0; row < moduleCount; row += 1) {
                  modules[row] = new Array(moduleCount);
                  for (var col = 0; col < moduleCount; col += 1) {
                    modules[row][col] = null;
                  }
                }
                return modules;
              }(_moduleCount);
              setupPositionProbePattern(0, 0);
              setupPositionProbePattern(_moduleCount - 7, 0);
              setupPositionProbePattern(0, _moduleCount - 7);
              setupPositionAdjustPattern();
              setupTimingPattern();
              setupTypeInfo(test, maskPattern);
              if (_typeNumber >= 7) {
                setupTypeNumber(test);
              }
              if (_dataCache == null) {
                _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
              }
              mapData(_dataCache, maskPattern);
            };
            var setupPositionProbePattern = function (row, col) {
              for (var r = -1; r <= 7; r += 1) {
                if (row + r <= -1 || _moduleCount <= row + r) continue;
                for (var c = -1; c <= 7; c += 1) {
                  if (col + c <= -1 || _moduleCount <= col + c) continue;
                  if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
                    _modules[row + r][col + c] = true;
                  } else {
                    _modules[row + r][col + c] = false;
                  }
                }
              }
            };
            var getBestMaskPattern = function () {
              var minLostPoint = 0;
              var pattern = 0;
              for (var i = 0; i < 8; i += 1) {
                makeImpl(true, i);
                var lostPoint = QRUtil.getLostPoint(_this);
                if (i == 0 || minLostPoint > lostPoint) {
                  minLostPoint = lostPoint;
                  pattern = i;
                }
              }
              return pattern;
            };
            var setupTimingPattern = function () {
              for (var r = 8; r < _moduleCount - 8; r += 1) {
                if (_modules[r][6] != null) {
                  continue;
                }
                _modules[r][6] = r % 2 == 0;
              }
              for (var c = 8; c < _moduleCount - 8; c += 1) {
                if (_modules[6][c] != null) {
                  continue;
                }
                _modules[6][c] = c % 2 == 0;
              }
            };
            var setupPositionAdjustPattern = function () {
              var pos = QRUtil.getPatternPosition(_typeNumber);
              for (var i = 0; i < pos.length; i += 1) {
                for (var j = 0; j < pos.length; j += 1) {
                  var row = pos[i];
                  var col = pos[j];
                  if (_modules[row][col] != null) {
                    continue;
                  }
                  for (var r = -2; r <= 2; r += 1) {
                    for (var c = -2; c <= 2; c += 1) {
                      if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                        _modules[row + r][col + c] = true;
                      } else {
                        _modules[row + r][col + c] = false;
                      }
                    }
                  }
                }
              }
            };
            var setupTypeNumber = function (test) {
              var bits = QRUtil.getBCHTypeNumber(_typeNumber);
              for (var i = 0; i < 18; i += 1) {
                var mod = !test && (bits >> i & 1) == 1;
                _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
              }
              for (var i = 0; i < 18; i += 1) {
                var mod = !test && (bits >> i & 1) == 1;
                _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
              }
            };
            var setupTypeInfo = function (test, maskPattern) {
              var data = _errorCorrectionLevel << 3 | maskPattern;
              var bits = QRUtil.getBCHTypeInfo(data);

              // vertical
              for (var i = 0; i < 15; i += 1) {
                var mod = !test && (bits >> i & 1) == 1;
                if (i < 6) {
                  _modules[i][8] = mod;
                } else if (i < 8) {
                  _modules[i + 1][8] = mod;
                } else {
                  _modules[_moduleCount - 15 + i][8] = mod;
                }
              }

              // horizontal
              for (var i = 0; i < 15; i += 1) {
                var mod = !test && (bits >> i & 1) == 1;
                if (i < 8) {
                  _modules[8][_moduleCount - i - 1] = mod;
                } else if (i < 9) {
                  _modules[8][15 - i - 1 + 1] = mod;
                } else {
                  _modules[8][15 - i - 1] = mod;
                }
              }

              // fixed module
              _modules[_moduleCount - 8][8] = !test;
            };
            var mapData = function (data, maskPattern) {
              var inc = -1;
              var row = _moduleCount - 1;
              var bitIndex = 7;
              var byteIndex = 0;
              var maskFunc = QRUtil.getMaskFunction(maskPattern);
              for (var col = _moduleCount - 1; col > 0; col -= 2) {
                if (col == 6) col -= 1;
                while (true) {
                  for (var c = 0; c < 2; c += 1) {
                    if (_modules[row][col - c] == null) {
                      var dark = false;
                      if (byteIndex < data.length) {
                        dark = (data[byteIndex] >>> bitIndex & 1) == 1;
                      }
                      var mask = maskFunc(row, col - c);
                      if (mask) {
                        dark = !dark;
                      }
                      _modules[row][col - c] = dark;
                      bitIndex -= 1;
                      if (bitIndex == -1) {
                        byteIndex += 1;
                        bitIndex = 7;
                      }
                    }
                  }
                  row += inc;
                  if (row < 0 || _moduleCount <= row) {
                    row -= inc;
                    inc = -inc;
                    break;
                  }
                }
              }
            };
            var createBytes = function (buffer, rsBlocks) {
              var offset = 0;
              var maxDcCount = 0;
              var maxEcCount = 0;
              var dcdata = new Array(rsBlocks.length);
              var ecdata = new Array(rsBlocks.length);
              for (var r = 0; r < rsBlocks.length; r += 1) {
                var dcCount = rsBlocks[r].dataCount;
                var ecCount = rsBlocks[r].totalCount - dcCount;
                maxDcCount = Math.max(maxDcCount, dcCount);
                maxEcCount = Math.max(maxEcCount, ecCount);
                dcdata[r] = new Array(dcCount);
                for (var i = 0; i < dcdata[r].length; i += 1) {
                  dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
                }
                offset += dcCount;
                var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
                var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);
                var modPoly = rawPoly.mod(rsPoly);
                ecdata[r] = new Array(rsPoly.getLength() - 1);
                for (var i = 0; i < ecdata[r].length; i += 1) {
                  var modIndex = i + modPoly.getLength() - ecdata[r].length;
                  ecdata[r][i] = modIndex >= 0 ? modPoly.getAt(modIndex) : 0;
                }
              }
              var totalCodeCount = 0;
              for (var i = 0; i < rsBlocks.length; i += 1) {
                totalCodeCount += rsBlocks[i].totalCount;
              }
              var data = new Array(totalCodeCount);
              var index = 0;
              for (var i = 0; i < maxDcCount; i += 1) {
                for (var r = 0; r < rsBlocks.length; r += 1) {
                  if (i < dcdata[r].length) {
                    data[index] = dcdata[r][i];
                    index += 1;
                  }
                }
              }
              for (var i = 0; i < maxEcCount; i += 1) {
                for (var r = 0; r < rsBlocks.length; r += 1) {
                  if (i < ecdata[r].length) {
                    data[index] = ecdata[r][i];
                    index += 1;
                  }
                }
              }
              return data;
            };
            var createData = function (typeNumber, errorCorrectionLevel, dataList) {
              var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectionLevel);
              var buffer = qrBitBuffer();
              for (var i = 0; i < dataList.length; i += 1) {
                var data = dataList[i];
                buffer.put(data.getMode(), 4);
                buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber));
                data.write(buffer);
              }

              // calc num max data.
              var totalDataCount = 0;
              for (var i = 0; i < rsBlocks.length; i += 1) {
                totalDataCount += rsBlocks[i].dataCount;
              }
              if (buffer.getLengthInBits() > totalDataCount * 8) {
                throw 'code length overflow. (' + buffer.getLengthInBits() + '>' + totalDataCount * 8 + ')';
              }

              // end code
              if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
                buffer.put(0, 4);
              }

              // padding
              while (buffer.getLengthInBits() % 8 != 0) {
                buffer.putBit(false);
              }

              // padding
              while (true) {
                if (buffer.getLengthInBits() >= totalDataCount * 8) {
                  break;
                }
                buffer.put(PAD0, 8);
                if (buffer.getLengthInBits() >= totalDataCount * 8) {
                  break;
                }
                buffer.put(PAD1, 8);
              }
              return createBytes(buffer, rsBlocks);
            };
            _this.addData = function (data, mode) {
              mode = mode || 'Byte';
              var newData = null;
              switch (mode) {
                case 'Numeric':
                  newData = qrNumber(data);
                  break;
                case 'Alphanumeric':
                  newData = qrAlphaNum(data);
                  break;
                case 'Byte':
                  newData = qr8BitByte(data);
                  break;
                case 'Kanji':
                  newData = qrKanji(data);
                  break;
                default:
                  throw 'mode:' + mode;
              }
              _dataList.push(newData);
              _dataCache = null;
            };
            _this.isDark = function (row, col) {
              if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
                throw row + ',' + col;
              }
              return _modules[row][col];
            };
            _this.getModuleCount = function () {
              return _moduleCount;
            };
            _this.make = function () {
              if (_typeNumber < 1) {
                var typeNumber = 1;
                for (; typeNumber < 40; typeNumber++) {
                  var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, _errorCorrectionLevel);
                  var buffer = qrBitBuffer();
                  for (var i = 0; i < _dataList.length; i++) {
                    var data = _dataList[i];
                    buffer.put(data.getMode(), 4);
                    buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber));
                    data.write(buffer);
                  }
                  var totalDataCount = 0;
                  for (var i = 0; i < rsBlocks.length; i++) {
                    totalDataCount += rsBlocks[i].dataCount;
                  }
                  if (buffer.getLengthInBits() <= totalDataCount * 8) {
                    break;
                  }
                }
                _typeNumber = typeNumber;
              }
              makeImpl(false, getBestMaskPattern());
            };
            _this.createTableTag = function (cellSize, margin) {
              cellSize = cellSize || 2;
              margin = typeof margin == 'undefined' ? cellSize * 4 : margin;
              var qrHtml = '';
              qrHtml += '<table style="';
              qrHtml += ' border-width: 0px; border-style: none;';
              qrHtml += ' border-collapse: collapse;';
              qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
              qrHtml += '">';
              qrHtml += '<tbody>';
              for (var r = 0; r < _this.getModuleCount(); r += 1) {
                qrHtml += '<tr>';
                for (var c = 0; c < _this.getModuleCount(); c += 1) {
                  qrHtml += '<td style="';
                  qrHtml += ' border-width: 0px; border-style: none;';
                  qrHtml += ' border-collapse: collapse;';
                  qrHtml += ' padding: 0px; margin: 0px;';
                  qrHtml += ' width: ' + cellSize + 'px;';
                  qrHtml += ' height: ' + cellSize + 'px;';
                  qrHtml += ' background-color: ';
                  qrHtml += _this.isDark(r, c) ? '#000000' : '#ffffff';
                  qrHtml += ';';
                  qrHtml += '"/>';
                }
                qrHtml += '</tr>';
              }
              qrHtml += '</tbody>';
              qrHtml += '</table>';
              return qrHtml;
            };
            _this.createSvgTag = function (cellSize, margin, alt, title) {
              var opts = {};
              if (typeof arguments[0] == 'object') {
                // Called by options.
                opts = arguments[0];
                // overwrite cellSize and margin.
                cellSize = opts.cellSize;
                margin = opts.margin;
                alt = opts.alt;
                title = opts.title;
              }
              cellSize = cellSize || 2;
              margin = typeof margin == 'undefined' ? cellSize * 4 : margin;

              // Compose alt property surrogate
              alt = typeof alt === 'string' ? {
                text: alt
              } : alt || {};
              alt.text = alt.text || null;
              alt.id = alt.text ? alt.id || 'qrcode-description' : null;

              // Compose title property surrogate
              title = typeof title === 'string' ? {
                text: title
              } : title || {};
              title.text = title.text || null;
              title.id = title.text ? title.id || 'qrcode-title' : null;
              var size = _this.getModuleCount() * cellSize + margin * 2;
              var c,
                mc,
                r,
                mr,
                qrSvg = '',
                rect;
              rect = 'l' + cellSize + ',0 0,' + cellSize + ' -' + cellSize + ',0 0,-' + cellSize + 'z ';
              qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
              qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : '';
              qrSvg += ' viewBox="0 0 ' + size + ' ' + size + '" ';
              qrSvg += ' preserveAspectRatio="xMinYMin meet"';
              qrSvg += title.text || alt.text ? ' role="img" aria-labelledby="' + escapeXml([title.id, alt.id].join(' ').trim()) + '"' : '';
              qrSvg += '>';
              qrSvg += title.text ? '<title id="' + escapeXml(title.id) + '">' + escapeXml(title.text) + '</title>' : '';
              qrSvg += alt.text ? '<description id="' + escapeXml(alt.id) + '">' + escapeXml(alt.text) + '</description>' : '';
              qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
              qrSvg += '<path d="';
              for (r = 0; r < _this.getModuleCount(); r += 1) {
                mr = r * cellSize + margin;
                for (c = 0; c < _this.getModuleCount(); c += 1) {
                  if (_this.isDark(r, c)) {
                    mc = c * cellSize + margin;
                    qrSvg += 'M' + mc + ',' + mr + rect;
                  }
                }
              }
              qrSvg += '" stroke="transparent" fill="black"/>';
              qrSvg += '</svg>';
              return qrSvg;
            };
            _this.createDataURL = function (cellSize, margin) {
              cellSize = cellSize || 2;
              margin = typeof margin == 'undefined' ? cellSize * 4 : margin;
              var size = _this.getModuleCount() * cellSize + margin * 2;
              var min = margin;
              var max = size - margin;
              return createDataURL(size, size, function (x, y) {
                if (min <= x && x < max && min <= y && y < max) {
                  var c = Math.floor((x - min) / cellSize);
                  var r = Math.floor((y - min) / cellSize);
                  return _this.isDark(r, c) ? 0 : 1;
                } else {
                  return 1;
                }
              });
            };
            _this.createImgTag = function (cellSize, margin, alt) {
              cellSize = cellSize || 2;
              margin = typeof margin == 'undefined' ? cellSize * 4 : margin;
              var size = _this.getModuleCount() * cellSize + margin * 2;
              var img = '';
              img += '<img';
              img += '\u0020src="';
              img += _this.createDataURL(cellSize, margin);
              img += '"';
              img += '\u0020width="';
              img += size;
              img += '"';
              img += '\u0020height="';
              img += size;
              img += '"';
              if (alt) {
                img += '\u0020alt="';
                img += escapeXml(alt);
                img += '"';
              }
              img += '/>';
              return img;
            };
            var escapeXml = function (s) {
              var escaped = '';
              for (var i = 0; i < s.length; i += 1) {
                var c = s.charAt(i);
                switch (c) {
                  case '<':
                    escaped += '&lt;';
                    break;
                  case '>':
                    escaped += '&gt;';
                    break;
                  case '&':
                    escaped += '&amp;';
                    break;
                  case '"':
                    escaped += '&quot;';
                    break;
                  default:
                    escaped += c;
                    break;
                }
              }
              return escaped;
            };
            var _createHalfASCII = function (margin) {
              var cellSize = 1;
              margin = typeof margin == 'undefined' ? cellSize * 2 : margin;
              var size = _this.getModuleCount() * cellSize + margin * 2;
              var min = margin;
              var max = size - margin;
              var y, x, r1, r2, p;
              var blocks = {
                '██': '█',
                '█ ': '▀',
                ' █': '▄',
                '  ': ' '
              };
              var blocksLastLineNoMargin = {
                '██': '▀',
                '█ ': '▀',
                ' █': ' ',
                '  ': ' '
              };
              var ascii = '';
              for (y = 0; y < size; y += 2) {
                r1 = Math.floor((y - min) / cellSize);
                r2 = Math.floor((y + 1 - min) / cellSize);
                for (x = 0; x < size; x += 1) {
                  p = '█';
                  if (min <= x && x < max && min <= y && y < max && _this.isDark(r1, Math.floor((x - min) / cellSize))) {
                    p = ' ';
                  }
                  if (min <= x && x < max && min <= y + 1 && y + 1 < max && _this.isDark(r2, Math.floor((x - min) / cellSize))) {
                    p += ' ';
                  } else {
                    p += '█';
                  }

                  // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
                  ascii += margin < 1 && y + 1 >= max ? blocksLastLineNoMargin[p] : blocks[p];
                }
                ascii += '\n';
              }
              if (size % 2 && margin > 0) {
                return ascii.substring(0, ascii.length - size - 1) + Array(size + 1).join('▀');
              }
              return ascii.substring(0, ascii.length - 1);
            };
            _this.createASCII = function (cellSize, margin) {
              cellSize = cellSize || 1;
              if (cellSize < 2) {
                return _createHalfASCII(margin);
              }
              cellSize -= 1;
              margin = typeof margin == 'undefined' ? cellSize * 2 : margin;
              var size = _this.getModuleCount() * cellSize + margin * 2;
              var min = margin;
              var max = size - margin;
              var y, x, r, p;
              var white = Array(cellSize + 1).join('██');
              var black = Array(cellSize + 1).join('  ');
              var ascii = '';
              var line = '';
              for (y = 0; y < size; y += 1) {
                r = Math.floor((y - min) / cellSize);
                line = '';
                for (x = 0; x < size; x += 1) {
                  p = 1;
                  if (min <= x && x < max && min <= y && y < max && _this.isDark(r, Math.floor((x - min) / cellSize))) {
                    p = 0;
                  }

                  // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
                  line += p ? white : black;
                }
                for (r = 0; r < cellSize; r += 1) {
                  ascii += line + '\n';
                }
              }
              return ascii.substring(0, ascii.length - 1);
            };
            _this.renderTo2dContext = function (context, cellSize) {
              cellSize = cellSize || 2;
              var length = _this.getModuleCount();
              for (var row = 0; row < length; row++) {
                for (var col = 0; col < length; col++) {
                  context.fillStyle = _this.isDark(row, col) ? 'black' : 'white';
                  context.fillRect(row * cellSize, col * cellSize, cellSize, cellSize);
                }
              }
            };
            return _this;
          };

          //---------------------------------------------------------------------
          // qrcode.stringToBytes
          //---------------------------------------------------------------------

          qrcode.stringToBytesFuncs = {
            'default': function (s) {
              var bytes = [];
              for (var i = 0; i < s.length; i += 1) {
                var c = s.charCodeAt(i);
                bytes.push(c & 0xff);
              }
              return bytes;
            }
          };
          qrcode.stringToBytes = qrcode.stringToBytesFuncs['default'];

          //---------------------------------------------------------------------
          // qrcode.createStringToBytes
          //---------------------------------------------------------------------

          /**
           * @param unicodeData base64 string of byte array.
           * [16bit Unicode],[16bit Bytes], ...
           * @param numChars
           */
          qrcode.createStringToBytes = function (unicodeData, numChars) {
            // create conversion map.

            var unicodeMap = function () {
              var bin = base64DecodeInputStream(unicodeData);
              var read = function () {
                var b = bin.read();
                if (b == -1) throw 'eof';
                return b;
              };
              var count = 0;
              var unicodeMap = {};
              while (true) {
                var b0 = bin.read();
                if (b0 == -1) break;
                var b1 = read();
                var b2 = read();
                var b3 = read();
                var k = String.fromCharCode(b0 << 8 | b1);
                var v = b2 << 8 | b3;
                unicodeMap[k] = v;
                count += 1;
              }
              if (count != numChars) {
                throw count + ' != ' + numChars;
              }
              return unicodeMap;
            }();
            var unknownChar = '?'.charCodeAt(0);
            return function (s) {
              var bytes = [];
              for (var i = 0; i < s.length; i += 1) {
                var c = s.charCodeAt(i);
                if (c < 128) {
                  bytes.push(c);
                } else {
                  var b = unicodeMap[s.charAt(i)];
                  if (typeof b == 'number') {
                    if ((b & 0xff) == b) {
                      // 1byte
                      bytes.push(b);
                    } else {
                      // 2bytes
                      bytes.push(b >>> 8);
                      bytes.push(b & 0xff);
                    }
                  } else {
                    bytes.push(unknownChar);
                  }
                }
              }
              return bytes;
            };
          };

          //---------------------------------------------------------------------
          // QRMode
          //---------------------------------------------------------------------

          var QRMode = {
            MODE_NUMBER: 1 << 0,
            MODE_ALPHA_NUM: 1 << 1,
            MODE_8BIT_BYTE: 1 << 2,
            MODE_KANJI: 1 << 3
          };

          //---------------------------------------------------------------------
          // QRErrorCorrectionLevel
          //---------------------------------------------------------------------

          var QRErrorCorrectionLevel = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
          };

          //---------------------------------------------------------------------
          // QRMaskPattern
          //---------------------------------------------------------------------

          var QRMaskPattern = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
          };

          //---------------------------------------------------------------------
          // QRUtil
          //---------------------------------------------------------------------

          var QRUtil = function () {
            var PATTERN_POSITION_TABLE = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]];
            var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
            var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
            var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
            var _this = {};
            var getBCHDigit = function (data) {
              var digit = 0;
              while (data != 0) {
                digit += 1;
                data >>>= 1;
              }
              return digit;
            };
            _this.getBCHTypeInfo = function (data) {
              var d = data << 10;
              while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
                d ^= G15 << getBCHDigit(d) - getBCHDigit(G15);
              }
              return (data << 10 | d) ^ G15_MASK;
            };
            _this.getBCHTypeNumber = function (data) {
              var d = data << 12;
              while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
                d ^= G18 << getBCHDigit(d) - getBCHDigit(G18);
              }
              return data << 12 | d;
            };
            _this.getPatternPosition = function (typeNumber) {
              return PATTERN_POSITION_TABLE[typeNumber - 1];
            };
            _this.getMaskFunction = function (maskPattern) {
              switch (maskPattern) {
                case QRMaskPattern.PATTERN000:
                  return function (i, j) {
                    return (i + j) % 2 == 0;
                  };
                case QRMaskPattern.PATTERN001:
                  return function (i, j) {
                    return i % 2 == 0;
                  };
                case QRMaskPattern.PATTERN010:
                  return function (i, j) {
                    return j % 3 == 0;
                  };
                case QRMaskPattern.PATTERN011:
                  return function (i, j) {
                    return (i + j) % 3 == 0;
                  };
                case QRMaskPattern.PATTERN100:
                  return function (i, j) {
                    return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
                  };
                case QRMaskPattern.PATTERN101:
                  return function (i, j) {
                    return i * j % 2 + i * j % 3 == 0;
                  };
                case QRMaskPattern.PATTERN110:
                  return function (i, j) {
                    return (i * j % 2 + i * j % 3) % 2 == 0;
                  };
                case QRMaskPattern.PATTERN111:
                  return function (i, j) {
                    return (i * j % 3 + (i + j) % 2) % 2 == 0;
                  };
                default:
                  throw 'bad maskPattern:' + maskPattern;
              }
            };
            _this.getErrorCorrectPolynomial = function (errorCorrectLength) {
              var a = qrPolynomial([1], 0);
              for (var i = 0; i < errorCorrectLength; i += 1) {
                a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0));
              }
              return a;
            };
            _this.getLengthInBits = function (mode, type) {
              if (1 <= type && type < 10) {
                // 1 - 9

                switch (mode) {
                  case QRMode.MODE_NUMBER:
                    return 10;
                  case QRMode.MODE_ALPHA_NUM:
                    return 9;
                  case QRMode.MODE_8BIT_BYTE:
                    return 8;
                  case QRMode.MODE_KANJI:
                    return 8;
                  default:
                    throw 'mode:' + mode;
                }
              } else if (type < 27) {
                // 10 - 26

                switch (mode) {
                  case QRMode.MODE_NUMBER:
                    return 12;
                  case QRMode.MODE_ALPHA_NUM:
                    return 11;
                  case QRMode.MODE_8BIT_BYTE:
                    return 16;
                  case QRMode.MODE_KANJI:
                    return 10;
                  default:
                    throw 'mode:' + mode;
                }
              } else if (type < 41) {
                // 27 - 40

                switch (mode) {
                  case QRMode.MODE_NUMBER:
                    return 14;
                  case QRMode.MODE_ALPHA_NUM:
                    return 13;
                  case QRMode.MODE_8BIT_BYTE:
                    return 16;
                  case QRMode.MODE_KANJI:
                    return 12;
                  default:
                    throw 'mode:' + mode;
                }
              } else {
                throw 'type:' + type;
              }
            };
            _this.getLostPoint = function (qrcode) {
              var moduleCount = qrcode.getModuleCount();
              var lostPoint = 0;

              // LEVEL1

              for (var row = 0; row < moduleCount; row += 1) {
                for (var col = 0; col < moduleCount; col += 1) {
                  var sameCount = 0;
                  var dark = qrcode.isDark(row, col);
                  for (var r = -1; r <= 1; r += 1) {
                    if (row + r < 0 || moduleCount <= row + r) {
                      continue;
                    }
                    for (var c = -1; c <= 1; c += 1) {
                      if (col + c < 0 || moduleCount <= col + c) {
                        continue;
                      }
                      if (r == 0 && c == 0) {
                        continue;
                      }
                      if (dark == qrcode.isDark(row + r, col + c)) {
                        sameCount += 1;
                      }
                    }
                  }
                  if (sameCount > 5) {
                    lostPoint += 3 + sameCount - 5;
                  }
                }
              }

              // LEVEL2

              for (var row = 0; row < moduleCount - 1; row += 1) {
                for (var col = 0; col < moduleCount - 1; col += 1) {
                  var count = 0;
                  if (qrcode.isDark(row, col)) count += 1;
                  if (qrcode.isDark(row + 1, col)) count += 1;
                  if (qrcode.isDark(row, col + 1)) count += 1;
                  if (qrcode.isDark(row + 1, col + 1)) count += 1;
                  if (count == 0 || count == 4) {
                    lostPoint += 3;
                  }
                }
              }

              // LEVEL3

              for (var row = 0; row < moduleCount; row += 1) {
                for (var col = 0; col < moduleCount - 6; col += 1) {
                  if (qrcode.isDark(row, col) && !qrcode.isDark(row, col + 1) && qrcode.isDark(row, col + 2) && qrcode.isDark(row, col + 3) && qrcode.isDark(row, col + 4) && !qrcode.isDark(row, col + 5) && qrcode.isDark(row, col + 6)) {
                    lostPoint += 40;
                  }
                }
              }
              for (var col = 0; col < moduleCount; col += 1) {
                for (var row = 0; row < moduleCount - 6; row += 1) {
                  if (qrcode.isDark(row, col) && !qrcode.isDark(row + 1, col) && qrcode.isDark(row + 2, col) && qrcode.isDark(row + 3, col) && qrcode.isDark(row + 4, col) && !qrcode.isDark(row + 5, col) && qrcode.isDark(row + 6, col)) {
                    lostPoint += 40;
                  }
                }
              }

              // LEVEL4

              var darkCount = 0;
              for (var col = 0; col < moduleCount; col += 1) {
                for (var row = 0; row < moduleCount; row += 1) {
                  if (qrcode.isDark(row, col)) {
                    darkCount += 1;
                  }
                }
              }
              var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
              lostPoint += ratio * 10;
              return lostPoint;
            };
            return _this;
          }();

          //---------------------------------------------------------------------
          // QRMath
          //---------------------------------------------------------------------

          var QRMath = function () {
            var EXP_TABLE = new Array(256);
            var LOG_TABLE = new Array(256);

            // initialize tables
            for (var i = 0; i < 8; i += 1) {
              EXP_TABLE[i] = 1 << i;
            }
            for (var i = 8; i < 256; i += 1) {
              EXP_TABLE[i] = EXP_TABLE[i - 4] ^ EXP_TABLE[i - 5] ^ EXP_TABLE[i - 6] ^ EXP_TABLE[i - 8];
            }
            for (var i = 0; i < 255; i += 1) {
              LOG_TABLE[EXP_TABLE[i]] = i;
            }
            var _this = {};
            _this.glog = function (n) {
              if (n < 1) {
                throw 'glog(' + n + ')';
              }
              return LOG_TABLE[n];
            };
            _this.gexp = function (n) {
              while (n < 0) {
                n += 255;
              }
              while (n >= 256) {
                n -= 255;
              }
              return EXP_TABLE[n];
            };
            return _this;
          }();

          //---------------------------------------------------------------------
          // qrPolynomial
          //---------------------------------------------------------------------

          function qrPolynomial(num, shift) {
            if (typeof num.length == 'undefined') {
              throw num.length + '/' + shift;
            }
            var _num = function () {
              var offset = 0;
              while (offset < num.length && num[offset] == 0) {
                offset += 1;
              }
              var _num = new Array(num.length - offset + shift);
              for (var i = 0; i < num.length - offset; i += 1) {
                _num[i] = num[i + offset];
              }
              return _num;
            }();
            var _this = {};
            _this.getAt = function (index) {
              return _num[index];
            };
            _this.getLength = function () {
              return _num.length;
            };
            _this.multiply = function (e) {
              var num = new Array(_this.getLength() + e.getLength() - 1);
              for (var i = 0; i < _this.getLength(); i += 1) {
                for (var j = 0; j < e.getLength(); j += 1) {
                  num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i)) + QRMath.glog(e.getAt(j)));
                }
              }
              return qrPolynomial(num, 0);
            };
            _this.mod = function (e) {
              if (_this.getLength() - e.getLength() < 0) {
                return _this;
              }
              var ratio = QRMath.glog(_this.getAt(0)) - QRMath.glog(e.getAt(0));
              var num = new Array(_this.getLength());
              for (var i = 0; i < _this.getLength(); i += 1) {
                num[i] = _this.getAt(i);
              }
              for (var i = 0; i < e.getLength(); i += 1) {
                num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i)) + ratio);
              }

              // recursive call
              return qrPolynomial(num, 0).mod(e);
            };
            return _this;
          }

          //---------------------------------------------------------------------
          // QRRSBlock
          //---------------------------------------------------------------------

          var QRRSBlock = function () {
            var RS_BLOCK_TABLE = [
            // L
            // M
            // Q
            // H

            // 1
            [1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9],
            // 2
            [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16],
            // 3
            [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13],
            // 4
            [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9],
            // 5
            [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12],
            // 6
            [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15],
            // 7
            [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14],
            // 8
            [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15],
            // 9
            [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13],
            // 10
            [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16],
            // 11
            [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13],
            // 12
            [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15],
            // 13
            [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12],
            // 14
            [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13],
            // 15
            [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13],
            // 16
            [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16],
            // 17
            [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15],
            // 18
            [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15],
            // 19
            [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14],
            // 20
            [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16],
            // 21
            [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17],
            // 22
            [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13],
            // 23
            [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16],
            // 24
            [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17],
            // 25
            [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16],
            // 26
            [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17],
            // 27
            [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16],
            // 28
            [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16],
            // 29
            [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16],
            // 30
            [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16],
            // 31
            [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16],
            // 32
            [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16],
            // 33
            [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16],
            // 34
            [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17],
            // 35
            [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16],
            // 36
            [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16],
            // 37
            [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16],
            // 38
            [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16],
            // 39
            [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16],
            // 40
            [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
            var qrRSBlock = function (totalCount, dataCount) {
              var _this = {};
              _this.totalCount = totalCount;
              _this.dataCount = dataCount;
              return _this;
            };
            var _this = {};
            var getRsBlockTable = function (typeNumber, errorCorrectionLevel) {
              switch (errorCorrectionLevel) {
                case QRErrorCorrectionLevel.L:
                  return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
                case QRErrorCorrectionLevel.M:
                  return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
                case QRErrorCorrectionLevel.Q:
                  return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
                case QRErrorCorrectionLevel.H:
                  return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
                default:
                  return undefined;
              }
            };
            _this.getRSBlocks = function (typeNumber, errorCorrectionLevel) {
              var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);
              if (typeof rsBlock == 'undefined') {
                throw 'bad rs block @ typeNumber:' + typeNumber + '/errorCorrectionLevel:' + errorCorrectionLevel;
              }
              var length = rsBlock.length / 3;
              var list = [];
              for (var i = 0; i < length; i += 1) {
                var count = rsBlock[i * 3 + 0];
                var totalCount = rsBlock[i * 3 + 1];
                var dataCount = rsBlock[i * 3 + 2];
                for (var j = 0; j < count; j += 1) {
                  list.push(qrRSBlock(totalCount, dataCount));
                }
              }
              return list;
            };
            return _this;
          }();

          //---------------------------------------------------------------------
          // qrBitBuffer
          //---------------------------------------------------------------------

          var qrBitBuffer = function () {
            var _buffer = [];
            var _length = 0;
            var _this = {};
            _this.getBuffer = function () {
              return _buffer;
            };
            _this.getAt = function (index) {
              var bufIndex = Math.floor(index / 8);
              return (_buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
            };
            _this.put = function (num, length) {
              for (var i = 0; i < length; i += 1) {
                _this.putBit((num >>> length - i - 1 & 1) == 1);
              }
            };
            _this.getLengthInBits = function () {
              return _length;
            };
            _this.putBit = function (bit) {
              var bufIndex = Math.floor(_length / 8);
              if (_buffer.length <= bufIndex) {
                _buffer.push(0);
              }
              if (bit) {
                _buffer[bufIndex] |= 0x80 >>> _length % 8;
              }
              _length += 1;
            };
            return _this;
          };

          //---------------------------------------------------------------------
          // qrNumber
          //---------------------------------------------------------------------

          var qrNumber = function (data) {
            var _mode = QRMode.MODE_NUMBER;
            var _data = data;
            var _this = {};
            _this.getMode = function () {
              return _mode;
            };
            _this.getLength = function (buffer) {
              return _data.length;
            };
            _this.write = function (buffer) {
              var data = _data;
              var i = 0;
              while (i + 2 < data.length) {
                buffer.put(strToNum(data.substring(i, i + 3)), 10);
                i += 3;
              }
              if (i < data.length) {
                if (data.length - i == 1) {
                  buffer.put(strToNum(data.substring(i, i + 1)), 4);
                } else if (data.length - i == 2) {
                  buffer.put(strToNum(data.substring(i, i + 2)), 7);
                }
              }
            };
            var strToNum = function (s) {
              var num = 0;
              for (var i = 0; i < s.length; i += 1) {
                num = num * 10 + chatToNum(s.charAt(i));
              }
              return num;
            };
            var chatToNum = function (c) {
              if ('0' <= c && c <= '9') {
                return c.charCodeAt(0) - '0'.charCodeAt(0);
              }
              throw 'illegal char :' + c;
            };
            return _this;
          };

          //---------------------------------------------------------------------
          // qrAlphaNum
          //---------------------------------------------------------------------

          var qrAlphaNum = function (data) {
            var _mode = QRMode.MODE_ALPHA_NUM;
            var _data = data;
            var _this = {};
            _this.getMode = function () {
              return _mode;
            };
            _this.getLength = function (buffer) {
              return _data.length;
            };
            _this.write = function (buffer) {
              var s = _data;
              var i = 0;
              while (i + 1 < s.length) {
                buffer.put(getCode(s.charAt(i)) * 45 + getCode(s.charAt(i + 1)), 11);
                i += 2;
              }
              if (i < s.length) {
                buffer.put(getCode(s.charAt(i)), 6);
              }
            };
            var getCode = function (c) {
              if ('0' <= c && c <= '9') {
                return c.charCodeAt(0) - '0'.charCodeAt(0);
              } else if ('A' <= c && c <= 'Z') {
                return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
              } else {
                switch (c) {
                  case ' ':
                    return 36;
                  case '$':
                    return 37;
                  case '%':
                    return 38;
                  case '*':
                    return 39;
                  case '+':
                    return 40;
                  case '-':
                    return 41;
                  case '.':
                    return 42;
                  case '/':
                    return 43;
                  case ':':
                    return 44;
                  default:
                    throw 'illegal char :' + c;
                }
              }
            };
            return _this;
          };

          //---------------------------------------------------------------------
          // qr8BitByte
          //---------------------------------------------------------------------

          var qr8BitByte = function (data) {
            var _mode = QRMode.MODE_8BIT_BYTE;
            var _bytes = qrcode.stringToBytes(data);
            var _this = {};
            _this.getMode = function () {
              return _mode;
            };
            _this.getLength = function (buffer) {
              return _bytes.length;
            };
            _this.write = function (buffer) {
              for (var i = 0; i < _bytes.length; i += 1) {
                buffer.put(_bytes[i], 8);
              }
            };
            return _this;
          };

          //---------------------------------------------------------------------
          // qrKanji
          //---------------------------------------------------------------------

          var qrKanji = function (data) {
            var _mode = QRMode.MODE_KANJI;
            var stringToBytes = qrcode.stringToBytesFuncs['SJIS'];
            if (!stringToBytes) {
              throw 'sjis not supported.';
            }
            !function (c, code) {
              // self test for sjis support.
              var test = stringToBytes(c);
              if (test.length != 2 || (test[0] << 8 | test[1]) != code) {
                throw 'sjis not supported.';
              }
            }('\u53cb', 0x9746);
            var _bytes = stringToBytes(data);
            var _this = {};
            _this.getMode = function () {
              return _mode;
            };
            _this.getLength = function (buffer) {
              return ~~(_bytes.length / 2);
            };
            _this.write = function (buffer) {
              var data = _bytes;
              var i = 0;
              while (i + 1 < data.length) {
                var c = (0xff & data[i]) << 8 | 0xff & data[i + 1];
                if (0x8140 <= c && c <= 0x9FFC) {
                  c -= 0x8140;
                } else if (0xE040 <= c && c <= 0xEBBF) {
                  c -= 0xC140;
                } else {
                  throw 'illegal char at ' + (i + 1) + '/' + c;
                }
                c = (c >>> 8 & 0xff) * 0xC0 + (c & 0xff);
                buffer.put(c, 13);
                i += 2;
              }
              if (i < data.length) {
                throw 'illegal char at ' + (i + 1);
              }
            };
            return _this;
          };

          //=====================================================================
          // GIF Support etc.
          //

          //---------------------------------------------------------------------
          // byteArrayOutputStream
          //---------------------------------------------------------------------

          var byteArrayOutputStream = function () {
            var _bytes = [];
            var _this = {};
            _this.writeByte = function (b) {
              _bytes.push(b & 0xff);
            };
            _this.writeShort = function (i) {
              _this.writeByte(i);
              _this.writeByte(i >>> 8);
            };
            _this.writeBytes = function (b, off, len) {
              off = off || 0;
              len = len || b.length;
              for (var i = 0; i < len; i += 1) {
                _this.writeByte(b[i + off]);
              }
            };
            _this.writeString = function (s) {
              for (var i = 0; i < s.length; i += 1) {
                _this.writeByte(s.charCodeAt(i));
              }
            };
            _this.toByteArray = function () {
              return _bytes;
            };
            _this.toString = function () {
              var s = '';
              s += '[';
              for (var i = 0; i < _bytes.length; i += 1) {
                if (i > 0) {
                  s += ',';
                }
                s += _bytes[i];
              }
              s += ']';
              return s;
            };
            return _this;
          };

          //---------------------------------------------------------------------
          // base64EncodeOutputStream
          //---------------------------------------------------------------------

          var base64EncodeOutputStream = function () {
            var _buffer = 0;
            var _buflen = 0;
            var _length = 0;
            var _base64 = '';
            var _this = {};
            var writeEncoded = function (b) {
              _base64 += String.fromCharCode(encode(b & 0x3f));
            };
            var encode = function (n) {
              if (n < 0) ;else if (n < 26) {
                return 0x41 + n;
              } else if (n < 52) {
                return 0x61 + (n - 26);
              } else if (n < 62) {
                return 0x30 + (n - 52);
              } else if (n == 62) {
                return 0x2b;
              } else if (n == 63) {
                return 0x2f;
              }
              throw 'n:' + n;
            };
            _this.writeByte = function (n) {
              _buffer = _buffer << 8 | n & 0xff;
              _buflen += 8;
              _length += 1;
              while (_buflen >= 6) {
                writeEncoded(_buffer >>> _buflen - 6);
                _buflen -= 6;
              }
            };
            _this.flush = function () {
              if (_buflen > 0) {
                writeEncoded(_buffer << 6 - _buflen);
                _buffer = 0;
                _buflen = 0;
              }
              if (_length % 3 != 0) {
                // padding
                var padlen = 3 - _length % 3;
                for (var i = 0; i < padlen; i += 1) {
                  _base64 += '=';
                }
              }
            };
            _this.toString = function () {
              return _base64;
            };
            return _this;
          };

          //---------------------------------------------------------------------
          // base64DecodeInputStream
          //---------------------------------------------------------------------

          var base64DecodeInputStream = function (str) {
            var _str = str;
            var _pos = 0;
            var _buffer = 0;
            var _buflen = 0;
            var _this = {};
            _this.read = function () {
              while (_buflen < 8) {
                if (_pos >= _str.length) {
                  if (_buflen == 0) {
                    return -1;
                  }
                  throw 'unexpected end of file./' + _buflen;
                }
                var c = _str.charAt(_pos);
                _pos += 1;
                if (c == '=') {
                  _buflen = 0;
                  return -1;
                } else if (c.match(/^\s$/)) {
                  // ignore if whitespace.
                  continue;
                }
                _buffer = _buffer << 6 | decode(c.charCodeAt(0));
                _buflen += 6;
              }
              var n = _buffer >>> _buflen - 8 & 0xff;
              _buflen -= 8;
              return n;
            };
            var decode = function (c) {
              if (0x41 <= c && c <= 0x5a) {
                return c - 0x41;
              } else if (0x61 <= c && c <= 0x7a) {
                return c - 0x61 + 26;
              } else if (0x30 <= c && c <= 0x39) {
                return c - 0x30 + 52;
              } else if (c == 0x2b) {
                return 62;
              } else if (c == 0x2f) {
                return 63;
              } else {
                throw 'c:' + c;
              }
            };
            return _this;
          };

          //---------------------------------------------------------------------
          // gifImage (B/W)
          //---------------------------------------------------------------------

          var gifImage = function (width, height) {
            var _width = width;
            var _height = height;
            var _data = new Array(width * height);
            var _this = {};
            _this.setPixel = function (x, y, pixel) {
              _data[y * _width + x] = pixel;
            };
            _this.write = function (out) {
              //---------------------------------
              // GIF Signature

              out.writeString('GIF87a');

              //---------------------------------
              // Screen Descriptor

              out.writeShort(_width);
              out.writeShort(_height);
              out.writeByte(0x80); // 2bit
              out.writeByte(0);
              out.writeByte(0);

              //---------------------------------
              // Global Color Map

              // black
              out.writeByte(0x00);
              out.writeByte(0x00);
              out.writeByte(0x00);

              // white
              out.writeByte(0xff);
              out.writeByte(0xff);
              out.writeByte(0xff);

              //---------------------------------
              // Image Descriptor

              out.writeString(',');
              out.writeShort(0);
              out.writeShort(0);
              out.writeShort(_width);
              out.writeShort(_height);
              out.writeByte(0);

              //---------------------------------
              // Local Color Map

              //---------------------------------
              // Raster Data

              var lzwMinCodeSize = 2;
              var raster = getLZWRaster(lzwMinCodeSize);
              out.writeByte(lzwMinCodeSize);
              var offset = 0;
              while (raster.length - offset > 255) {
                out.writeByte(255);
                out.writeBytes(raster, offset, 255);
                offset += 255;
              }
              out.writeByte(raster.length - offset);
              out.writeBytes(raster, offset, raster.length - offset);
              out.writeByte(0x00);

              //---------------------------------
              // GIF Terminator
              out.writeString(';');
            };
            var bitOutputStream = function (out) {
              var _out = out;
              var _bitLength = 0;
              var _bitBuffer = 0;
              var _this = {};
              _this.write = function (data, length) {
                if (data >>> length != 0) {
                  throw 'length over';
                }
                while (_bitLength + length >= 8) {
                  _out.writeByte(0xff & (data << _bitLength | _bitBuffer));
                  length -= 8 - _bitLength;
                  data >>>= 8 - _bitLength;
                  _bitBuffer = 0;
                  _bitLength = 0;
                }
                _bitBuffer = data << _bitLength | _bitBuffer;
                _bitLength = _bitLength + length;
              };
              _this.flush = function () {
                if (_bitLength > 0) {
                  _out.writeByte(_bitBuffer);
                }
              };
              return _this;
            };
            var getLZWRaster = function (lzwMinCodeSize) {
              var clearCode = 1 << lzwMinCodeSize;
              var endCode = (1 << lzwMinCodeSize) + 1;
              var bitLength = lzwMinCodeSize + 1;

              // Setup LZWTable
              var table = lzwTable();
              for (var i = 0; i < clearCode; i += 1) {
                table.add(String.fromCharCode(i));
              }
              table.add(String.fromCharCode(clearCode));
              table.add(String.fromCharCode(endCode));
              var byteOut = byteArrayOutputStream();
              var bitOut = bitOutputStream(byteOut);

              // clear code
              bitOut.write(clearCode, bitLength);
              var dataIndex = 0;
              var s = String.fromCharCode(_data[dataIndex]);
              dataIndex += 1;
              while (dataIndex < _data.length) {
                var c = String.fromCharCode(_data[dataIndex]);
                dataIndex += 1;
                if (table.contains(s + c)) {
                  s = s + c;
                } else {
                  bitOut.write(table.indexOf(s), bitLength);
                  if (table.size() < 0xfff) {
                    if (table.size() == 1 << bitLength) {
                      bitLength += 1;
                    }
                    table.add(s + c);
                  }
                  s = c;
                }
              }
              bitOut.write(table.indexOf(s), bitLength);

              // end code
              bitOut.write(endCode, bitLength);
              bitOut.flush();
              return byteOut.toByteArray();
            };
            var lzwTable = function () {
              var _map = {};
              var _size = 0;
              var _this = {};
              _this.add = function (key) {
                if (_this.contains(key)) {
                  throw 'dup key:' + key;
                }
                _map[key] = _size;
                _size += 1;
              };
              _this.size = function () {
                return _size;
              };
              _this.indexOf = function (key) {
                return _map[key];
              };
              _this.contains = function (key) {
                return typeof _map[key] != 'undefined';
              };
              return _this;
            };
            return _this;
          };
          var createDataURL = function (width, height, getPixel) {
            var gif = gifImage(width, height);
            for (var y = 0; y < height; y += 1) {
              for (var x = 0; x < width; x += 1) {
                gif.setPixel(x, y, getPixel(x, y));
              }
            }
            var b = byteArrayOutputStream();
            gif.write(b);
            var base64 = base64EncodeOutputStream();
            var bytes = b.toByteArray();
            for (var i = 0; i < bytes.length; i += 1) {
              base64.writeByte(bytes[i]);
            }
            base64.flush();
            return 'data:image/gif;base64,' + base64;
          };

          //---------------------------------------------------------------------
          // returns qrcode function.

          return qrcode;
        }();

        // multibyte support
        !function () {
          qrcode.stringToBytesFuncs['UTF-8'] = function (s) {
            // http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
            function toUTF8Array(str) {
              var utf8 = [];
              for (var i = 0; i < str.length; i++) {
                var charcode = str.charCodeAt(i);
                if (charcode < 0x80) utf8.push(charcode);else if (charcode < 0x800) {
                  utf8.push(0xc0 | charcode >> 6, 0x80 | charcode & 0x3f);
                } else if (charcode < 0xd800 || charcode >= 0xe000) {
                  utf8.push(0xe0 | charcode >> 12, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
                }
                // surrogate pair
                else {
                  i++;
                  // UTF-16 encodes 0x10000-0x10FFFF by
                  // subtracting 0x10000 and splitting the
                  // 20 bits of 0x0-0xFFFFF into two halves
                  charcode = 0x10000 + ((charcode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
                  utf8.push(0xf0 | charcode >> 18, 0x80 | charcode >> 12 & 0x3f, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
                }
              }
              return utf8;
            }
            return toUTF8Array(s);
          };
        }();
        (function (factory) {
          if (typeof define === 'function' && define.amd) {
            define([], factory);
          } else if (typeof exports$1 === 'object') {
            module.exports = factory();
          }
        })(function () {
          return qrcode;
        });

        // #endregion ORIGINAL CODE

        _cjsExports = exports('default', module.exports);
      }, {});
    }
  };
});

System.register("chunks:///_virtual/qrcode.mjs_cjs=&original=.js", ['./qrcode.js', './cjs-loader.mjs'], function (exports, module) {
  var __cjsMetaURL, loader;
  return {
    setters: [function (module) {
      __cjsMetaURL = module.__cjsMetaURL;
      var _setter = {};
      _setter.__cjsMetaURL = module.__cjsMetaURL;
      _setter.default = module.default;
      exports(_setter);
    }, function (module) {
      loader = module.default;
    }],
    execute: function () {
      // I am the facade module who provides access to the CommonJS module './qrcode.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./qrcode.js', module.meta.url);
      }
      loader.require(__cjsMetaURL);
    }
  };
});

System.register("chunks:///_virtual/redux.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      exports('default', void 0);
      let _cjsExports;
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports$1, require, module, __filename, __dirname) {
        Object.defineProperty(exports$1, '__esModule', {
          value: true
        });

        // Inlined version of the `symbol-observable` polyfill
        var $$observable = function () {
          return typeof Symbol === 'function' && Symbol.observable || '@@observable';
        }();

        /**
         * These are private action types reserved by Redux.
         * For any unknown actions, you must return the current state.
         * If the current state is undefined, you must return the initial state.
         * Do not reference these action types directly in your code.
         */
        var randomString = function randomString() {
          return Math.random().toString(36).substring(7).split('').join('.');
        };
        var ActionTypes = {
          INIT: "@@redux/INIT" + randomString(),
          REPLACE: "@@redux/REPLACE" + randomString(),
          PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
            return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
          }
        };

        /**
         * @param {any} obj The object to inspect.
         * @returns {boolean} True if the argument appears to be a plain object.
         */
        function isPlainObject(obj) {
          if (typeof obj !== 'object' || obj === null) return false;
          var proto = obj;
          while (Object.getPrototypeOf(proto) !== null) {
            proto = Object.getPrototypeOf(proto);
          }
          return Object.getPrototypeOf(obj) === proto;
        }

        // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
        function miniKindOf(val) {
          if (val === void 0) return 'undefined';
          if (val === null) return 'null';
          var type = typeof val;
          switch (type) {
            case 'boolean':
            case 'string':
            case 'number':
            case 'symbol':
            case 'function':
              {
                return type;
              }
          }
          if (Array.isArray(val)) return 'array';
          if (isDate(val)) return 'date';
          if (isError(val)) return 'error';
          var constructorName = ctorName(val);
          switch (constructorName) {
            case 'Symbol':
            case 'Promise':
            case 'WeakMap':
            case 'WeakSet':
            case 'Map':
            case 'Set':
              return constructorName;
          } // other

          return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
        }
        function ctorName(val) {
          return typeof val.constructor === 'function' ? val.constructor.name : null;
        }
        function isError(val) {
          return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
        }
        function isDate(val) {
          if (val instanceof Date) return true;
          return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
        }
        function kindOf(val) {
          var typeOfVal = typeof val;
          typeOfVal = miniKindOf(val);
          return typeOfVal;
        }

        /**
         * @deprecated
         *
         * **We recommend using the `configureStore` method
         * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
         *
         * Redux Toolkit is our recommended approach for writing Redux logic today,
         * including store setup, reducers, data fetching, and more.
         *
         * **For more details, please read this Redux docs page:**
         * **https://redux.js.org/introduction/why-rtk-is-redux-today**
         *
         * `configureStore` from Redux Toolkit is an improved version of `createStore` that
         * simplifies setup and helps avoid common bugs.
         *
         * You should not be using the `redux` core package by itself today, except for learning purposes.
         * The `createStore` method from the core `redux` package will not be removed, but we encourage
         * all users to migrate to using Redux Toolkit for all Redux code.
         *
         * If you want to use `createStore` without this visual deprecation warning, use
         * the `legacy_createStore` import instead:
         *
         * `import { legacy_createStore as createStore} from 'redux'`
         *
         */

        function createStore(reducer, preloadedState, enhancer) {
          var _ref2;
          if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
            throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
          }
          if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
            enhancer = preloadedState;
            preloadedState = undefined;
          }
          if (typeof enhancer !== 'undefined') {
            if (typeof enhancer !== 'function') {
              throw new Error("Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
            }
            return enhancer(createStore)(reducer, preloadedState);
          }
          if (typeof reducer !== 'function') {
            throw new Error("Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
          }
          var currentReducer = reducer;
          var currentState = preloadedState;
          var currentListeners = [];
          var nextListeners = currentListeners;
          var isDispatching = false;
          /**
           * This makes a shallow copy of currentListeners so we can use
           * nextListeners as a temporary list while dispatching.
           *
           * This prevents any bugs around consumers calling
           * subscribe/unsubscribe in the middle of a dispatch.
           */

          function ensureCanMutateNextListeners() {
            if (nextListeners === currentListeners) {
              nextListeners = currentListeners.slice();
            }
          }
          /**
           * Reads the state tree managed by the store.
           *
           * @returns {any} The current state tree of your application.
           */

          function getState() {
            if (isDispatching) {
              throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
            }
            return currentState;
          }
          /**
           * Adds a change listener. It will be called any time an action is dispatched,
           * and some part of the state tree may potentially have changed. You may then
           * call `getState()` to read the current state tree inside the callback.
           *
           * You may call `dispatch()` from a change listener, with the following
           * caveats:
           *
           * 1. The subscriptions are snapshotted just before every `dispatch()` call.
           * If you subscribe or unsubscribe while the listeners are being invoked, this
           * will not have any effect on the `dispatch()` that is currently in progress.
           * However, the next `dispatch()` call, whether nested or not, will use a more
           * recent snapshot of the subscription list.
           *
           * 2. The listener should not expect to see all state changes, as the state
           * might have been updated multiple times during a nested `dispatch()` before
           * the listener is called. It is, however, guaranteed that all subscribers
           * registered before the `dispatch()` started will be called with the latest
           * state by the time it exits.
           *
           * @param {Function} listener A callback to be invoked on every dispatch.
           * @returns {Function} A function to remove this change listener.
           */

          function subscribe(listener) {
            if (typeof listener !== 'function') {
              throw new Error("Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
            }
            if (isDispatching) {
              throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
            }
            var isSubscribed = true;
            ensureCanMutateNextListeners();
            nextListeners.push(listener);
            return function unsubscribe() {
              if (!isSubscribed) {
                return;
              }
              if (isDispatching) {
                throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
              }
              isSubscribed = false;
              ensureCanMutateNextListeners();
              var index = nextListeners.indexOf(listener);
              nextListeners.splice(index, 1);
              currentListeners = null;
            };
          }
          /**
           * Dispatches an action. It is the only way to trigger a state change.
           *
           * The `reducer` function, used to create the store, will be called with the
           * current state tree and the given `action`. Its return value will
           * be considered the **next** state of the tree, and the change listeners
           * will be notified.
           *
           * The base implementation only supports plain object actions. If you want to
           * dispatch a Promise, an Observable, a thunk, or something else, you need to
           * wrap your store creating function into the corresponding middleware. For
           * example, see the documentation for the `redux-thunk` package. Even the
           * middleware will eventually dispatch plain object actions using this method.
           *
           * @param {Object} action A plain object representing “what changed”. It is
           * a good idea to keep actions serializable so you can record and replay user
           * sessions, or use the time travelling `redux-devtools`. An action must have
           * a `type` property which may not be `undefined`. It is a good idea to use
           * string constants for action types.
           *
           * @returns {Object} For convenience, the same action object you dispatched.
           *
           * Note that, if you use a custom middleware, it may wrap `dispatch()` to
           * return something else (for example, a Promise you can await).
           */

          function dispatch(action) {
            if (!isPlainObject(action)) {
              throw new Error("Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
            }
            if (typeof action.type === 'undefined') {
              throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
            }
            if (isDispatching) {
              throw new Error('Reducers may not dispatch actions.');
            }
            try {
              isDispatching = true;
              currentState = currentReducer(currentState, action);
            } finally {
              isDispatching = false;
            }
            var listeners = currentListeners = nextListeners;
            for (var i = 0; i < listeners.length; i++) {
              var listener = listeners[i];
              listener();
            }
            return action;
          }
          /**
           * Replaces the reducer currently used by the store to calculate the state.
           *
           * You might need this if your app implements code splitting and you want to
           * load some of the reducers dynamically. You might also need this if you
           * implement a hot reloading mechanism for Redux.
           *
           * @param {Function} nextReducer The reducer for the store to use instead.
           * @returns {void}
           */

          function replaceReducer(nextReducer) {
            if (typeof nextReducer !== 'function') {
              throw new Error("Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
            }
            currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
            // Any reducers that existed in both the new and old rootReducer
            // will receive the previous state. This effectively populates
            // the new state tree with any relevant data from the old one.

            dispatch({
              type: ActionTypes.REPLACE
            });
          }
          /**
           * Interoperability point for observable/reactive libraries.
           * @returns {observable} A minimal observable of state changes.
           * For more information, see the observable proposal:
           * https://github.com/tc39/proposal-observable
           */

          function observable() {
            var _ref;
            var outerSubscribe = subscribe;
            return _ref = {
              /**
               * The minimal observable subscription method.
               * @param {Object} observer Any object that can be used as an observer.
               * The observer object should have a `next` method.
               * @returns {subscription} An object with an `unsubscribe` method that can
               * be used to unsubscribe the observable from the store, and prevent further
               * emission of values from the observable.
               */
              subscribe: function subscribe(observer) {
                if (typeof observer !== 'object' || observer === null) {
                  throw new Error("Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
                }
                function observeState() {
                  if (observer.next) {
                    observer.next(getState());
                  }
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return {
                  unsubscribe: unsubscribe
                };
              }
            }, _ref[$$observable] = function () {
              return this;
            }, _ref;
          } // When a store is created, an "INIT" action is dispatched so that every
          // reducer returns their initial state. This effectively populates
          // the initial state tree.

          dispatch({
            type: ActionTypes.INIT
          });
          return _ref2 = {
            dispatch: dispatch,
            subscribe: subscribe,
            getState: getState,
            replaceReducer: replaceReducer
          }, _ref2[$$observable] = observable, _ref2;
        }
        /**
         * Creates a Redux store that holds the state tree.
         *
         * **We recommend using `configureStore` from the
         * `@reduxjs/toolkit` package**, which replaces `createStore`:
         * **https://redux.js.org/introduction/why-rtk-is-redux-today**
         *
         * The only way to change the data in the store is to call `dispatch()` on it.
         *
         * There should only be a single store in your app. To specify how different
         * parts of the state tree respond to actions, you may combine several reducers
         * into a single reducer function by using `combineReducers`.
         *
         * @param {Function} reducer A function that returns the next state tree, given
         * the current state tree and the action to handle.
         *
         * @param {any} [preloadedState] The initial state. You may optionally specify it
         * to hydrate the state from the server in universal apps, or to restore a
         * previously serialized user session.
         * If you use `combineReducers` to produce the root reducer function, this must be
         * an object with the same shape as `combineReducers` keys.
         *
         * @param {Function} [enhancer] The store enhancer. You may optionally specify it
         * to enhance the store with third-party capabilities such as middleware,
         * time travel, persistence, etc. The only store enhancer that ships with Redux
         * is `applyMiddleware()`.
         *
         * @returns {Store} A Redux store that lets you read the state, dispatch actions
         * and subscribe to changes.
         */

        var legacy_createStore = createStore;
        function assertReducerShape(reducers) {
          Object.keys(reducers).forEach(function (key) {
            var reducer = reducers[key];
            var initialState = reducer(undefined, {
              type: ActionTypes.INIT
            });
            if (typeof initialState === 'undefined') {
              throw new Error("The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
            }
            if (typeof reducer(undefined, {
              type: ActionTypes.PROBE_UNKNOWN_ACTION()
            }) === 'undefined') {
              throw new Error("The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
            }
          });
        }
        /**
         * Turns an object whose values are different reducer functions, into a single
         * reducer function. It will call every child reducer, and gather their results
         * into a single state object, whose keys correspond to the keys of the passed
         * reducer functions.
         *
         * @param {Object} reducers An object whose values correspond to different
         * reducer functions that need to be combined into one. One handy way to obtain
         * it is to use ES6 `import * as reducers` syntax. The reducers may never return
         * undefined for any action. Instead, they should return their initial state
         * if the state passed to them was undefined, and the current state for any
         * unrecognized action.
         *
         * @returns {Function} A reducer function that invokes every reducer inside the
         * passed object, and builds a state object with the same shape.
         */

        function combineReducers(reducers) {
          var reducerKeys = Object.keys(reducers);
          var finalReducers = {};
          for (var i = 0; i < reducerKeys.length; i++) {
            var key = reducerKeys[i];
            if (typeof reducers[key] === 'function') {
              finalReducers[key] = reducers[key];
            }
          }
          var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
          var shapeAssertionError;
          try {
            assertReducerShape(finalReducers);
          } catch (e) {
            shapeAssertionError = e;
          }
          return function combination(state, action) {
            if (state === void 0) {
              state = {};
            }
            if (shapeAssertionError) {
              throw shapeAssertionError;
            }
            var hasChanged = false;
            var nextState = {};
            for (var _i = 0; _i < finalReducerKeys.length; _i++) {
              var _key = finalReducerKeys[_i];
              var reducer = finalReducers[_key];
              var previousStateForKey = state[_key];
              var nextStateForKey = reducer(previousStateForKey, action);
              if (typeof nextStateForKey === 'undefined') {
                var actionType = action && action.type;
                throw new Error("When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
              }
              nextState[_key] = nextStateForKey;
              hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
            }
            hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
            return hasChanged ? nextState : state;
          };
        }
        function bindActionCreator(actionCreator, dispatch) {
          return function () {
            return dispatch(actionCreator.apply(this, arguments));
          };
        }
        /**
         * Turns an object whose values are action creators, into an object with the
         * same keys, but with every function wrapped into a `dispatch` call so they
         * may be invoked directly. This is just a convenience method, as you can call
         * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
         *
         * For convenience, you can also pass an action creator as the first argument,
         * and get a dispatch wrapped function in return.
         *
         * @param {Function|Object} actionCreators An object whose values are action
         * creator functions. One handy way to obtain it is to use ES6 `import * as`
         * syntax. You may also pass a single function.
         *
         * @param {Function} dispatch The `dispatch` function available on your Redux
         * store.
         *
         * @returns {Function|Object} The object mimicking the original object, but with
         * every action creator wrapped into the `dispatch` call. If you passed a
         * function as `actionCreators`, the return value will also be a single
         * function.
         */

        function bindActionCreators(actionCreators, dispatch) {
          if (typeof actionCreators === 'function') {
            return bindActionCreator(actionCreators, dispatch);
          }
          if (typeof actionCreators !== 'object' || actionCreators === null) {
            throw new Error("bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
          }
          var boundActionCreators = {};
          for (var key in actionCreators) {
            var actionCreator = actionCreators[key];
            if (typeof actionCreator === 'function') {
              boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
            }
          }
          return boundActionCreators;
        }

        /**
         * Composes single-argument functions from right to left. The rightmost
         * function can take multiple arguments as it provides the signature for
         * the resulting composite function.
         *
         * @param {...Function} funcs The functions to compose.
         * @returns {Function} A function obtained by composing the argument functions
         * from right to left. For example, compose(f, g, h) is identical to doing
         * (...args) => f(g(h(...args))).
         */
        function compose() {
          for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
            funcs[_key] = arguments[_key];
          }
          if (funcs.length === 0) {
            return function (arg) {
              return arg;
            };
          }
          if (funcs.length === 1) {
            return funcs[0];
          }
          return funcs.reduce(function (a, b) {
            return function () {
              return a(b.apply(void 0, arguments));
            };
          });
        }

        /**
         * Creates a store enhancer that applies middleware to the dispatch method
         * of the Redux store. This is handy for a variety of tasks, such as expressing
         * asynchronous actions in a concise manner, or logging every action payload.
         *
         * See `redux-thunk` package as an example of the Redux middleware.
         *
         * Because middleware is potentially asynchronous, this should be the first
         * store enhancer in the composition chain.
         *
         * Note that each middleware will be given the `dispatch` and `getState` functions
         * as named arguments.
         *
         * @param {...Function} middlewares The middleware chain to be applied.
         * @returns {Function} A store enhancer applying the middleware.
         */

        function applyMiddleware() {
          for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
            middlewares[_key] = arguments[_key];
          }
          return function (createStore) {
            return function () {
              var store = createStore.apply(void 0, arguments);
              var _dispatch = function dispatch() {
                throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
              };
              var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch() {
                  return _dispatch.apply(void 0, arguments);
                }
              };
              var chain = middlewares.map(function (middleware) {
                return middleware(middlewareAPI);
              });
              _dispatch = compose.apply(void 0, chain)(store.dispatch);
              return Object.assign({}, store, {
                dispatch: _dispatch
              });
            };
          };
        }
        exports$1.__DO_NOT_USE__ActionTypes = ActionTypes;
        exports$1.applyMiddleware = applyMiddleware;
        exports$1.bindActionCreators = bindActionCreators;
        exports$1.combineReducers = combineReducers;
        exports$1.compose = compose;
        exports$1.createStore = createStore;
        exports$1.legacy_createStore = legacy_createStore;

        // #endregion ORIGINAL CODE

        _cjsExports = exports('default', module.exports);
        module.exports.__esModule;
        module.exports.__DO_NOT_USE__ActionTypes;
        module.exports.applyMiddleware;
        module.exports.bindActionCreators;
        module.exports.combineReducers;
        module.exports.compose;
        module.exports.createStore;
        module.exports.legacy_createStore;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/redux.mjs_cjs=&original=.js", ['./redux.js', './cjs-loader.mjs'], function (exports, module) {
  var __cjsMetaURL, loader;
  return {
    setters: [function (module) {
      __cjsMetaURL = module.__cjsMetaURL;
      var _setter = {};
      _setter.__cjsMetaURL = module.__cjsMetaURL;
      _setter.default = module.default;
      exports(_setter);
    }, function (module) {
      loader = module.default;
    }],
    execute: function () {
      // I am the facade module who provides access to the CommonJS module './redux.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./redux.js', module.meta.url);
      }
      loader.require(__cjsMetaURL);
    }
  };
});

System.register("chunks:///_virtual/reduxLogger.js", ['./cjs-loader.mjs', './batch.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.actionTransformer = actionTransformer;
        exports.logger = void 0;
        var _batch = _interopRequireDefault(require("../batch"));
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }
        var batchType = _batch["default"].getType();
        function actionTransformer(action) {
          if (action && action.type === batchType) {
            action.payload.type = batchType;
            return action.payload;
          }
          return action;
        }
        var logger = {};
        exports.logger = logger;
        var _loop = function _loop(level) {
          if (typeof console[level] === 'function') {
            logger[level] = function levelFn() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              var lastArg = args.pop();
              if (Array.isArray(lastArg) && lastArg.type === batchType) {
                lastArg.forEach(function (action) {
                  console[level].apply(console, [].concat(args, [action]));
                });
              } else {
                args.push(lastArg);
                console[level].apply(console, args);
              }
            };
          }
        };
        for (var level in console) {
          _loop(level);
        }

        // #endregion ORIGINAL CODE

        module.exports;
        module.exports.__esModule;
        module.exports.actionTransformer;
        module.exports.logger;
      }, () => ({
        '../batch': __cjsMetaURL$1
      }));
    }
  };
});

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js", [], function (exports) {
  return {
    execute: function () {
      exports({
        applyDecoratedDescriptor: _applyDecoratedDescriptor,
        initializerDefineProperty: _initializerDefineProperty
      });
      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }
      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }
        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);
        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }
        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }
        return desc;
      }
    }
  };
});

System.register("chunks:///_virtual/types.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      const __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.add = add;
        exports.remove = remove;
        exports.has = has;
        exports.check = check;
        exports.all = all;
        exports.clear = clear;
        exports.enableChecking = enableChecking;
        exports.disableChecking = disableChecking;
        var types = {};
        var config = {
          checkExisting: true
        };
        function add(name) {
          types[name] = true;
        }
        function remove(name) {
          types[name] = false;
        }
        function has(name) {
          return !!types[name];
        }
        function check(name) {
          if (config.checkExisting && has(name)) {
            throw new TypeError("Duplicate action type: ".concat(name));
          }
        }
        function all() {
          return Object.keys(types).filter(has);
        }
        function clear() {
          all().forEach(remove);
        }
        function enableChecking() {
          config.checkExisting = true;
        }
        function disableChecking() {
          config.checkExisting = false;
        }

        // #endregion ORIGINAL CODE

        module.exports;
        module.exports.__esModule;
        module.exports.add;
        module.exports.remove;
        module.exports.has;
        module.exports.check;
        module.exports.all;
        module.exports.clear;
        module.exports.enableChecking;
        module.exports.disableChecking;
      }, {});
    }
  };
});

} }; });
//# sourceMappingURL=bundle.js.map