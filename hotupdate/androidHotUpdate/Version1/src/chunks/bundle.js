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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9yZWR1eC1hY3QvbGliL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9yZWR1eC1hY3QvbGliL2FzRXJyb3IuanMiLCIuLi9maWxlOi9Vc2Vycy9mZWxpeC9zaXRlcy9rYi9jb2Nvcy9jb2Nvcy1ydW1teTM4OC9ub2RlX21vZHVsZXMvcmVkdXgtYWN0L2xpYi9maWxlOi9Vc2Vycy9mZWxpeC9zaXRlcy9rYi9jb2Nvcy9jb2Nvcy1ydW1teTM4OC9ub2RlX21vZHVsZXMvcmVkdXgtYWN0L2xpYi9hc3NpZ25BbGwuanMiLCIuLi9maWxlOi9Vc2Vycy9mZWxpeC9zaXRlcy9rYi9jb2Nvcy9jb2Nvcy1ydW1teTM4OC9ub2RlX21vZHVsZXMvcmVkdXgtYWN0L2xpYi9maWxlOi9Vc2Vycy9mZWxpeC9zaXRlcy9rYi9jb2Nvcy9jb2Nvcy1ydW1teTM4OC9ub2RlX21vZHVsZXMvcmVkdXgtYWN0L2xpYi9iYXRjaC5qcyIsIi4uL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9yZWR1eC1hY3QvbGliL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9yZWR1eC1hY3QvbGliL2JpbmRBbGwuanMiLCIuLi9jY2U6L2ludGVybmFsL21sL2NjZTovaW50ZXJuYWwvbWwvY2pzLWxvYWRlci5tanMiLCIuLi9maWxlOi9Vc2Vycy9mZWxpeC9zaXRlcy9rYi9jb2Nvcy9jb2Nvcy1ydW1teTM4OC9ub2RlX21vZHVsZXMvcmVkdXgtYWN0L2xpYi9maWxlOi9Vc2Vycy9mZWxpeC9zaXRlcy9rYi9jb2Nvcy9jb2Nvcy1ydW1teTM4OC9ub2RlX21vZHVsZXMvcmVkdXgtYWN0L2xpYi9jcmVhdGVBY3Rpb24uanMiLCIuLi9maWxlOi9Vc2Vycy9mZWxpeC9zaXRlcy9rYi9jb2Nvcy9jb2Nvcy1ydW1teTM4OC9ub2RlX21vZHVsZXMvcmVkdXgtYWN0L2xpYi9maWxlOi9Vc2Vycy9mZWxpeC9zaXRlcy9rYi9jb2Nvcy9jb2Nvcy1ydW1teTM4OC9ub2RlX21vZHVsZXMvcmVkdXgtYWN0L2xpYi9jcmVhdGVSZWR1Y2VyLmpzIiwiLi4vZmlsZTovVXNlcnMvZmVsaXgvc2l0ZXMva2IvY29jb3MvY29jb3MtcnVtbXkzODgvbm9kZV9tb2R1bGVzL3JlZHV4LWFjdC9saWIvZmlsZTovVXNlcnMvZmVsaXgvc2l0ZXMva2IvY29jb3MvY29jb3MtcnVtbXkzODgvbm9kZV9tb2R1bGVzL3JlZHV4LWFjdC9saWIvZGlzYmF0Y2guanMiLCIuLi92aXJ0dWFsOi9jYy92aXJ0dWFsOi9jYy9lbnYiLCIuLi9maWxlOi9Vc2Vycy9mZWxpeC9zaXRlcy9rYi9jb2Nvcy9jb2Nvcy1ydW1teTM4OC9ub2RlX21vZHVsZXMvZmluZ2VycHJpbnRqczIvZmlsZTovVXNlcnMvZmVsaXgvc2l0ZXMva2IvY29jb3MvY29jb3MtcnVtbXkzODgvbm9kZV9tb2R1bGVzL2ZpbmdlcnByaW50anMyL2ZpbmdlcnByaW50Mi5qcyIsIi4uL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9maW5nZXJwcmludGpzMi9maWxlOi9Vc2Vycy9mZWxpeC9zaXRlcy9rYi9jb2Nvcy9jb2Nvcy1ydW1teTM4OC9ub2RlX21vZHVsZXMvZmluZ2VycHJpbnRqczIvZmluZ2VycHJpbnQyLm1qcz9janM9Jm9yaWdpbmFsPS5qcyIsIi4uL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9yZWR1eC1hY3QvbGliL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9yZWR1eC1hY3QvbGliL2luZGV4LmpzIiwiLi4vZmlsZTovVXNlcnMvZmVsaXgvc2l0ZXMva2IvY29jb3MvY29jb3MtcnVtbXkzODgvbm9kZV9tb2R1bGVzL3JlZHV4LWFjdC9saWIvZmlsZTovVXNlcnMvZmVsaXgvc2l0ZXMva2IvY29jb3MvY29jb3MtcnVtbXkzODgvbm9kZV9tb2R1bGVzL3JlZHV4LWFjdC9saWIvaW5kZXgubWpzP2Nqcz0mb3JpZ2luYWw9LmpzIiwiLi4vZmlsZTovVXNlcnMvZmVsaXgvc2l0ZXMva2IvY29jb3MvY29jb3MtcnVtbXkzODgvbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9maWxlOi9Vc2Vycy9mZWxpeC9zaXRlcy9rYi9jb2Nvcy9jb2Nvcy1ydW1teTM4OC9ub2RlX21vZHVsZXMvZmFzdC1kZWVwLWVxdWFsL2luZGV4Lm1qcz9janM9Jm9yaWdpbmFsPS5qcyIsIi4uL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9mYXN0LWRlZXAtZXF1YWwvZmlsZTovVXNlcnMvZmVsaXgvc2l0ZXMva2IvY29jb3MvY29jb3MtcnVtbXkzODgvbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9pbmRleC5qcyIsIi4uL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9yZWR1eC1hY3QvbGliL2xvZ2dlcnMvZmlsZTovVXNlcnMvZmVsaXgvc2l0ZXMva2IvY29jb3MvY29jb3MtcnVtbXkzODgvbm9kZV9tb2R1bGVzL3JlZHV4LWFjdC9saWIvbG9nZ2Vycy9pbmRleC5qcyIsIi4uL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9xcmNvZGUtZ2VuZXJhdG9yL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9xcmNvZGUtZ2VuZXJhdG9yL3FyY29kZS5qcyIsIi4uL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9xcmNvZGUtZ2VuZXJhdG9yL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9xcmNvZGUtZ2VuZXJhdG9yL3FyY29kZS5tanM/Y2pzPSZvcmlnaW5hbD0uanMiLCIuLi9maWxlOi9Vc2Vycy9mZWxpeC9zaXRlcy9rYi9jb2Nvcy9jb2Nvcy1ydW1teTM4OC9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9yZWR1eC9saWIvcmVkdXguanMiLCIuLi9maWxlOi9Vc2Vycy9mZWxpeC9zaXRlcy9rYi9jb2Nvcy9jb2Nvcy1ydW1teTM4OC9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2ZpbGU6L1VzZXJzL2ZlbGl4L3NpdGVzL2tiL2NvY29zL2NvY29zLXJ1bW15Mzg4L25vZGVfbW9kdWxlcy9yZWR1eC9saWIvcmVkdXgubWpzP2Nqcz0mb3JpZ2luYWw9LmpzIiwiLi4vZmlsZTovVXNlcnMvZmVsaXgvc2l0ZXMva2IvY29jb3MvY29jb3MtcnVtbXkzODgvbm9kZV9tb2R1bGVzL3JlZHV4LWFjdC9saWIvbG9nZ2Vycy9maWxlOi9Vc2Vycy9mZWxpeC9zaXRlcy9rYi9jb2Nvcy9jb2Nvcy1ydW1teTM4OC9ub2RlX21vZHVsZXMvcmVkdXgtYWN0L2xpYi9sb2dnZXJzL3JlZHV4TG9nZ2VyLmpzIiwiLi4vY2NlOi9pbnRlcm5hbC9jY2U6L2ludGVybmFsL3JvbGx1cFBsdWdpbk1vZExvQmFiZWxIZWxwZXJzLmpzIiwiLi4vZmlsZTovVXNlcnMvZmVsaXgvc2l0ZXMva2IvY29jb3MvY29jb3MtcnVtbXkzODgvbm9kZV9tb2R1bGVzL3JlZHV4LWFjdC9saWIvZmlsZTovVXNlcnMvZmVsaXgvc2l0ZXMva2IvY29jb3MvY29jb3MtcnVtbXkzODgvbm9kZV9tb2R1bGVzL3JlZHV4LWFjdC9saWIvdHlwZXMuanMiXSwibmFtZXMiOlsiX19janNNZXRhVVJMIiwiaW1wb3J0IiwiZGVmaW5lIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJtb2R1bGUiLCJfX2ZpbGVuYW1lIiwiX19kaXJuYW1lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImFzRXJyb3IiLCJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImFjdGlvbiIsImVycm9yIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJhc3NpZ25BbGwiLCJfZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfZXh0ZW5kcyIsImFzc2lnbiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImFjdGlvbnMiLCJzdG9yZXMiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJhc3NpZ25UbyIsImtleXMiLCJyZWR1Y2UiLCJhc3NpZ25zIiwiX2NyZWF0ZUFjdGlvbiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZGVmYXVsdCIsIl9sZW4iLCJfa2V5IiwiX3JlcSIsImJpbmRBbGwiLCJiaW5kVG8iLCJiaW5kcyIsIkNqc0xvYWRlciIsIl9yZWdpc3RyeSIsIl9tb2R1bGVDYWNoZSIsImlkIiwiZmFjdG9yeSIsInJlc29sdmVNYXAiLCJfcmVxdWlyZSIsInRocm93SW52YWxpZFdyYXBwZXIiLCJyZXF1ZXN0VGFyZ2V0IiwiZnJvbSIsIkVycm9yIiwicGFyZW50IiwiY2FjaGVkTW9kdWxlIiwiX3RyeU1vZHVsZUxvYWQiLCJfcmVzb2x2ZSIsInNwZWNpZmllciIsIl9yZXNvbHZlRnJvbUluZm9zIiwiX3Rocm93VW5yZXNvbHZlZCIsIl9janNJbmZvcyRwYXJlbnQiLCJjanNJbmZvcyIsInJlc29sdmVDYWNoZSIsInVuZGVmaW5lZCIsInRocmV3IiwiX2xvYWQiLCJfbG9hZFdyYXBwZXIiLCJ2ZW5kb3JSZXF1aXJlIiwiX2NyZWF0ZVJlcXVpcmUiLCJfY3JlYXRlUmVxdWlyZVdpdGhSZXNvbHZlTWFwIiwiX2xvYWRIb3N0UHJvdmlkZWRNb2R1bGVzIiwiX2V4cG9ydHMiLCJlcnIiLCJjYXVzZSIsInJlcXVpcmVNYXAiLCJvcmlnaW5hbFJlcXVpcmUiLCJyZXNvbHZlZCIsInBhcmVudFVybCIsImNyZWF0ZUFjdGlvbiIsIl90eXBlcyIsImlkZW50aXR5IiwiYXJnIiwibm9ybWFsaXplIiwiZGlzcGF0Y2hPclN0b3JlIiwiZGlzcGF0Y2giLCJub3JtYWxpemVBbGwiLCJkaXNwYXRjaE9yU3RvcmVzIiwiZGVzY3JpcHRpb24iLCJwYXlsb2FkUmVkdWNlciIsIm1ldGFSZWR1Y2VyIiwiaXNTZXJpYWxpemFibGUiLCJ0ZXN0IiwiY2hlY2siLCJhZGQiLCJ0eXBlIiwiY29uY2F0IiwiZGlzcGF0Y2hGdW5jdGlvbnMiLCJtYWtlQWN0aW9uIiwicGF5bG9hZCIsIm1ldGEiLCJtYWtlQW5kRGlzcGF0Y2giLCJkaXNwYXRjaHMiLCJpc0Vycm9yIiwicGF5bG9hZGVkQWN0aW9uIiwiYWN0aW9uQ3JlYXRvciIsImdldFR5cGUiLCJ0b1N0cmluZyIsInJhdyIsImFzc2lnbmVkIiwiYm91bmQiLCJkaXNwYXRjaGVkIiwiYm91bmRBY3Rpb25DcmVhdG9yIiwiY3JlYXRlUmVkdWNlciIsIl9iYXRjaCIsIm5vcm1hbGl6ZVR5cGUiLCJ0eXBlT3JBY3Rpb25DcmVhdG9yIiwiaGFuZGxlcnMiLCJkZWZhdWx0U3RhdGUiLCJvcHRzIiwiZmFsbGJhY2siLCJyZWR1Y2VyIiwiaGFzIiwib24iLCJvZmYiLCJvcHRpb25zIiwiaGFuZGxlciIsImZvckVhY2giLCJuZXdPcHRzIiwibmFtZSIsInN0YXRlIiwic3RhcnRzV2l0aCIsImRpc2JhdGNoIiwic3RvcmUiLCJUeXBlRXJyb3IiLCJiaW5kIiwiTkFUSVZFIiwiREVWIiwiX2Nqc0V4cG9ydHMiLCJjb250ZXh0IiwiZGVmaW5pdGlvbiIsIndpbmRvdyIsImFtZCIsIng2NEFkZCIsIm0iLCJuIiwibyIsIng2NE11bHRpcGx5IiwieDY0Um90bCIsIng2NExlZnRTaGlmdCIsIng2NFhvciIsIng2NEZtaXgiLCJoIiwieDY0aGFzaDEyOCIsInNlZWQiLCJyZW1haW5kZXIiLCJieXRlcyIsImgxIiwiaDIiLCJrMSIsImsyIiwiYzEiLCJjMiIsImNoYXJDb2RlQXQiLCJzbGljZSIsImRlZmF1bHRPcHRpb25zIiwicHJlcHJvY2Vzc29yIiwiYXVkaW8iLCJ0aW1lb3V0IiwiZXhjbHVkZUlPUzExIiwiZm9udHMiLCJzd2ZDb250YWluZXJJZCIsInN3ZlBhdGgiLCJ1c2VyRGVmaW5lZEZvbnRzIiwiZXh0ZW5kZWRKc0ZvbnRzIiwic2NyZWVuIiwiZGV0ZWN0U2NyZWVuT3JpZW50YXRpb24iLCJwbHVnaW5zIiwic29ydFBsdWdpbnNGb3IiLCJleGNsdWRlSUUiLCJleHRyYUNvbXBvbmVudHMiLCJleGNsdWRlcyIsIk5PVF9BVkFJTEFCTEUiLCJFUlJPUiIsIkVYQ0xVREVEIiwiZWFjaCIsImwiLCJyZXN1bHRzIiwiaW5kZXgiLCJsaXN0IiwicHVzaCIsImV4dGVuZFNvZnQiLCJlbnVtZXJhdGVEZXZpY2VzS2V5IiwiZG9uZSIsImlzRW51bWVyYXRlRGV2aWNlc1N1cHBvcnRlZCIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJ0aGVuIiwiZGV2aWNlcyIsImRldmljZSIsImRldmljZUlkIiwiZ3JvdXBJZCIsImtpbmQiLCJsYWJlbCIsImNhdGNoIiwiYXVkaW9LZXkiLCJhdWRpb09wdGlvbnMiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsIkF1ZGlvQ29udGV4dCIsIk9mZmxpbmVBdWRpb0NvbnRleHQiLCJ3ZWJraXRPZmZsaW5lQXVkaW9Db250ZXh0Iiwib3NjaWxsYXRvciIsImNyZWF0ZU9zY2lsbGF0b3IiLCJmcmVxdWVuY3kiLCJzZXRWYWx1ZUF0VGltZSIsImN1cnJlbnRUaW1lIiwiY29tcHJlc3NvciIsImNyZWF0ZUR5bmFtaWNzQ29tcHJlc3NvciIsIml0ZW0iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJzdGFydCIsInN0YXJ0UmVuZGVyaW5nIiwiYXVkaW9UaW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsIndhcm4iLCJvbmNvbXBsZXRlIiwiZXZlbnQiLCJmaW5nZXJwcmludCIsImNsZWFyVGltZW91dCIsInJlbmRlcmVkQnVmZmVyIiwiZ2V0Q2hhbm5lbERhdGEiLCJhY2MiLCJ2YWwiLCJNYXRoIiwiYWJzIiwiZGlzY29ubmVjdCIsIlVzZXJBZ2VudCIsIndlYmRyaXZlciIsImxhbmd1YWdlS2V5IiwibGFuZ3VhZ2UiLCJ1c2VyTGFuZ3VhZ2UiLCJicm93c2VyTGFuZ3VhZ2UiLCJzeXN0ZW1MYW5ndWFnZSIsImNvbG9yRGVwdGhLZXkiLCJjb2xvckRlcHRoIiwiZGV2aWNlTWVtb3J5S2V5IiwiZGV2aWNlTWVtb3J5IiwicGl4ZWxSYXRpb0tleSIsImRldmljZVBpeGVsUmF0aW8iLCJzY3JlZW5SZXNvbHV0aW9uS2V5IiwiZ2V0U2NyZWVuUmVzb2x1dGlvbiIsInJlc29sdXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInNvcnQiLCJyZXZlcnNlIiwiYXZhaWxhYmxlU2NyZWVuUmVzb2x1dGlvbktleSIsImdldEF2YWlsYWJsZVNjcmVlblJlc29sdXRpb24iLCJhdmFpbFdpZHRoIiwiYXZhaWxIZWlnaHQiLCJhdmFpbGFibGUiLCJ0aW1lem9uZU9mZnNldCIsIkRhdGUiLCJnZXRUaW1lem9uZU9mZnNldCIsInRpbWV6b25lIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicmVzb2x2ZWRPcHRpb25zIiwidGltZVpvbmUiLCJzZXNzaW9uU3RvcmFnZUtleSIsImhhc1Nlc3Npb25TdG9yYWdlIiwibG9jYWxTdG9yYWdlS2V5IiwiaGFzTG9jYWxTdG9yYWdlIiwiaW5kZXhlZERiS2V5IiwiaGFzSW5kZXhlZERCIiwiYWRkQmVoYXZpb3JLZXkiLCJIVE1MRWxlbWVudCIsImFkZEJlaGF2aW9yIiwib3BlbkRhdGFiYXNlS2V5Iiwib3BlbkRhdGFiYXNlIiwiY3B1Q2xhc3NLZXkiLCJnZXROYXZpZ2F0b3JDcHVDbGFzcyIsInBsYXRmb3JtS2V5IiwiZ2V0TmF2aWdhdG9yUGxhdGZvcm0iLCJkb05vdFRyYWNrS2V5IiwiZ2V0RG9Ob3RUcmFjayIsImNhbnZhc0tleSIsImlzQ2FudmFzU3VwcG9ydGVkIiwiZ2V0Q2FudmFzRnAiLCJ3ZWJnbEtleSIsImlzV2ViR2xTdXBwb3J0ZWQiLCJnZXRXZWJnbEZwIiwid2ViZ2xWZW5kb3JBbmRSZW5kZXJlcktleSIsImdldFdlYmdsVmVuZG9yQW5kUmVuZGVyZXIiLCJhZEJsb2NrS2V5IiwiZ2V0QWRCbG9jayIsImhhc0xpZWRMYW5ndWFnZXNLZXkiLCJnZXRIYXNMaWVkTGFuZ3VhZ2VzIiwiaGFzTGllZFJlc29sdXRpb25LZXkiLCJnZXRIYXNMaWVkUmVzb2x1dGlvbiIsImhhc0xpZWRPc0tleSIsImdldEhhc0xpZWRPcyIsImhhc0xpZWRCcm93c2VyS2V5IiwiZ2V0SGFzTGllZEJyb3dzZXIiLCJmbGFzaEZvbnRzS2V5IiwiaGFzU3dmT2JqZWN0TG9hZGVkIiwiaGFzTWluRmxhc2hJbnN0YWxsZWQiLCJsb2FkU3dmQW5kRGV0ZWN0Rm9udHMiLCJqc0ZvbnRzS2V5IiwiYmFzZUZvbnRzIiwiZm9udExpc3QiLCJleHRlbmRlZEZvbnRMaXN0IiwiZmlsdGVyIiwiZm9udCIsInBvc2l0aW9uIiwiaW5kZXhPZiIsInRlc3RTdHJpbmciLCJ0ZXN0U2l6ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJiYXNlRm9udHNEaXYiLCJjcmVhdGVFbGVtZW50IiwiZm9udHNEaXYiLCJkZWZhdWx0V2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwiY3JlYXRlU3BhbiIsInMiLCJzdHlsZSIsImxlZnQiLCJmb250U2l6ZSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwibGluZUJyZWFrIiwibGluZUhlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJ0ZXh0QWxpZ24iLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRTaGFkb3ciLCJ3aGl0ZVNwYWNlIiwid29yZEJyZWFrIiwid29yZFNwYWNpbmciLCJpbm5lckhUTUwiLCJjcmVhdGVTcGFuV2l0aEZvbnRzIiwiZm9udFRvRGV0ZWN0IiwiYmFzZUZvbnQiLCJmb250RmFtaWx5IiwiaW5pdGlhbGl6ZUJhc2VGb250c1NwYW5zIiwic3BhbnMiLCJhcHBlbmRDaGlsZCIsImluaXRpYWxpemVGb250c1NwYW5zIiwiZm9udFNwYW5zIiwiaiIsIm51bURlZmF1bHRGb250cyIsImlzRm9udEF2YWlsYWJsZSIsImRldGVjdGVkIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJiYXNlRm9udHNTcGFucyIsImZvbnRzU3BhbnMiLCJyZW1vdmVDaGlsZCIsInBsdWdpbnNDb21wb25lbnQiLCJpc0lFIiwiZ2V0SUVQbHVnaW5zIiwiZ2V0UmVndWxhclBsdWdpbnMiLCJwbHVnaW5zU2hvdWxkQmVTb3J0ZWQiLCJhIiwiYiIsInAiLCJtaW1lVHlwZXMiLCJtdCIsInN1ZmZpeGVzIiwicmVzdWx0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwibmFtZXMiLCJBY3RpdmVYT2JqZWN0IiwiZSIsInNob3VsZCIsInJlIiwidG91Y2hTdXBwb3J0S2V5IiwiZ2V0VG91Y2hTdXBwb3J0IiwiaGFyZHdhcmVDb25jdXJyZW5jeUtleSIsImdldEhhcmR3YXJlQ29uY3VycmVuY3kiLCJzZXNzaW9uU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImlzSUVPck9sZEVkZ2UiLCJpbmRleGVkREIiLCJoYXJkd2FyZUNvbmN1cnJlbmN5IiwiY3B1Q2xhc3MiLCJwbGF0Zm9ybSIsImRvTm90VHJhY2siLCJtc0RvTm90VHJhY2siLCJtYXhUb3VjaFBvaW50cyIsInRvdWNoRXZlbnQiLCJtc01heFRvdWNoUG9pbnRzIiwiY3JlYXRlRXZlbnQiLCJfIiwidG91Y2hTdGFydCIsImNhbnZhcyIsImRpc3BsYXkiLCJjdHgiLCJnZXRDb250ZXh0IiwicmVjdCIsImlzUG9pbnRJblBhdGgiLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRvbnRVc2VGYWtlRm9udEluQ2FudmFzIiwiZmlsbFRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImNsb3NlUGF0aCIsImZpbGwiLCJ0b0RhdGFVUkwiLCJnbCIsImZhMnMiLCJmYSIsImNsZWFyQ29sb3IiLCJlbmFibGUiLCJERVBUSF9URVNUIiwiZGVwdGhGdW5jIiwiTEVRVUFMIiwiY2xlYXIiLCJDT0xPUl9CVUZGRVJfQklUIiwiREVQVEhfQlVGRkVSX0JJVCIsIm1heEFuaXNvdHJvcHkiLCJleHQiLCJnZXRFeHRlbnNpb24iLCJhbmlzb3Ryb3B5IiwiZ2V0UGFyYW1ldGVyIiwiTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUIiwiZ2V0V2ViZ2xDYW52YXMiLCJ2U2hhZGVyVGVtcGxhdGUiLCJmU2hhZGVyVGVtcGxhdGUiLCJ2ZXJ0ZXhQb3NCdWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwidmVydGljZXMiLCJGbG9hdDMyQXJyYXkiLCJidWZmZXJEYXRhIiwiU1RBVElDX0RSQVciLCJpdGVtU2l6ZSIsIm51bUl0ZW1zIiwicHJvZ3JhbSIsImNyZWF0ZVByb2dyYW0iLCJ2c2hhZGVyIiwiY3JlYXRlU2hhZGVyIiwiVkVSVEVYX1NIQURFUiIsInNoYWRlclNvdXJjZSIsImNvbXBpbGVTaGFkZXIiLCJmc2hhZGVyIiwiRlJBR01FTlRfU0hBREVSIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJ1c2VQcm9ncmFtIiwidmVydGV4UG9zQXR0cmliIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJvZmZzZXRVbmlmb3JtIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJ2ZXJ0ZXhQb3NBcnJheSIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJGTE9BVCIsInVuaWZvcm0yZiIsImRyYXdBcnJheXMiLCJUUklBTkdMRV9TVFJJUCIsImdldFN1cHBvcnRlZEV4dGVuc2lvbnMiLCJqb2luIiwiQUxJQVNFRF9MSU5FX1dJRFRIX1JBTkdFIiwiQUxJQVNFRF9QT0lOVF9TSVpFX1JBTkdFIiwiQUxQSEFfQklUUyIsImdldENvbnRleHRBdHRyaWJ1dGVzIiwiYW50aWFsaWFzIiwiQkxVRV9CSVRTIiwiREVQVEhfQklUUyIsIkdSRUVOX0JJVFMiLCJNQVhfQ09NQklORURfVEVYVFVSRV9JTUFHRV9VTklUUyIsIk1BWF9DVUJFX01BUF9URVhUVVJFX1NJWkUiLCJNQVhfRlJBR01FTlRfVU5JRk9STV9WRUNUT1JTIiwiTUFYX1JFTkRFUkJVRkZFUl9TSVpFIiwiTUFYX1RFWFRVUkVfSU1BR0VfVU5JVFMiLCJNQVhfVEVYVFVSRV9TSVpFIiwiTUFYX1ZBUllJTkdfVkVDVE9SUyIsIk1BWF9WRVJURVhfQVRUUklCUyIsIk1BWF9WRVJURVhfVEVYVFVSRV9JTUFHRV9VTklUUyIsIk1BWF9WRVJURVhfVU5JRk9STV9WRUNUT1JTIiwiTUFYX1ZJRVdQT1JUX0RJTVMiLCJSRURfQklUUyIsIlJFTkRFUkVSIiwiU0hBRElOR19MQU5HVUFHRV9WRVJTSU9OIiwiU1RFTkNJTF9CSVRTIiwiVkVORE9SIiwiVkVSU0lPTiIsImV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvIiwiVU5NQVNLRURfVkVORE9SX1dFQkdMIiwiVU5NQVNLRURfUkVOREVSRVJfV0VCR0wiLCJnZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQiLCJsb3NlV2ViZ2xDb250ZXh0IiwibnVtVHlwZSIsInNoYWRlciIsIm51bVNpemUiLCJmb3JtYXQiLCJsaW5lIiwidG9Mb3dlckNhc2UiLCJnbENvbnRleHQiLCJwYXJhbXMiLCJhZHMiLCJjbGFzc05hbWUiLCJib2R5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxhbmd1YWdlcyIsImZpcnN0TGFuZ3VhZ2VzIiwic3Vic3RyIiwib3NjcHUiLCJvcyIsIm1vYmlsZURldmljZSIsInBsYXRmb3JtSXNPdGhlciIsInByb2R1Y3RTdWIiLCJicm93c2VyIiwidGVtcFJlcyIsImV2YWwiLCJlcnJGaXJlZm94IiwidG9Tb3VyY2UiLCJlcnJPZkVyciIsImVsZW0iLCJpc1N1cHBvcnRlZCIsIldlYkdMUmVuZGVyaW5nQ29udGV4dCIsImFwcE5hbWUiLCJzd2ZvYmplY3QiLCJoYXNGbGFzaFBsYXllclZlcnNpb24iLCJhZGRGbGFzaERpdk5vZGUiLCJub2RlIiwic2V0QXR0cmlidXRlIiwiaGlkZGVuQ2FsbGJhY2siLCJmbGFzaHZhcnMiLCJvblJlYWR5IiwiZmxhc2hwYXJhbXMiLCJhbGxvd1NjcmlwdEFjY2VzcyIsIm1lbnUiLCJlbWJlZFNXRiIsImxvc2VDb250ZXh0RXh0ZW5zaW9uIiwibG9zZUNvbnRleHQiLCJjb21wb25lbnRzIiwiZ2V0RGF0YSIsInBhdXNlQmVmb3JlIiwiRmluZ2VycHJpbnQyIiwiZ2V0IiwiY2FsbGJhY2siLCJkYXRhIiwiYWRkUHJlcHJvY2Vzc2VkQ29tcG9uZW50IiwiY2hhaW5Db21wb25lbnRzIiwiYWxyZWFkeVdhaXRlZCIsImNvbXBvbmVudCIsIlN0cmluZyIsImdldFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldFYxOCIsIm5ld0NvbXBvbmVudHMiLCJtdXJtdXIiLCJyZXEiLCJsb2FkZXIiLCJfY3JlYXRlUmVkdWNlciIsIl9hc3NpZ25BbGwiLCJfYmluZEFsbCIsIl9kaXNiYXRjaCIsIl9sb2dnZXJzIiwiX2FzRXJyb3IiLCJ0eXBlcyIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZGVzYyIsInNldCIsImJhdGNoIiwibG9nZ2VycyIsIl9yZXEwIiwiX3JlcTEiLCJfcmVxMiIsIl9yZXEzIiwiX3JlcTQiLCJfcmVxNSIsIl9yZXE2IiwiX3JlcTciLCJlcXVhbCIsIlJlZ0V4cCIsImZsYWdzIiwidmFsdWVPZiIsInJlZHV4TG9nZ2VyIiwicXJjb2RlIiwidHlwZU51bWJlciIsImVycm9yQ29ycmVjdGlvbkxldmVsIiwiUEFEMCIsIlBBRDEiLCJfdHlwZU51bWJlciIsIl9lcnJvckNvcnJlY3Rpb25MZXZlbCIsIlFSRXJyb3JDb3JyZWN0aW9uTGV2ZWwiLCJfbW9kdWxlcyIsIl9tb2R1bGVDb3VudCIsIl9kYXRhQ2FjaGUiLCJfZGF0YUxpc3QiLCJfdGhpcyIsIm1ha2VJbXBsIiwibWFza1BhdHRlcm4iLCJtb2R1bGVDb3VudCIsIm1vZHVsZXMiLCJyb3ciLCJjb2wiLCJzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuIiwic2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4iLCJzZXR1cFRpbWluZ1BhdHRlcm4iLCJzZXR1cFR5cGVJbmZvIiwic2V0dXBUeXBlTnVtYmVyIiwiY3JlYXRlRGF0YSIsIm1hcERhdGEiLCJyIiwiYyIsImdldEJlc3RNYXNrUGF0dGVybiIsIm1pbkxvc3RQb2ludCIsInBhdHRlcm4iLCJsb3N0UG9pbnQiLCJRUlV0aWwiLCJnZXRMb3N0UG9pbnQiLCJwb3MiLCJnZXRQYXR0ZXJuUG9zaXRpb24iLCJiaXRzIiwiZ2V0QkNIVHlwZU51bWJlciIsIm1vZCIsImZsb29yIiwiZ2V0QkNIVHlwZUluZm8iLCJpbmMiLCJiaXRJbmRleCIsImJ5dGVJbmRleCIsIm1hc2tGdW5jIiwiZ2V0TWFza0Z1bmN0aW9uIiwiZGFyayIsIm1hc2siLCJjcmVhdGVCeXRlcyIsImJ1ZmZlciIsInJzQmxvY2tzIiwib2Zmc2V0IiwibWF4RGNDb3VudCIsIm1heEVjQ291bnQiLCJkY2RhdGEiLCJlY2RhdGEiLCJkY0NvdW50IiwiZGF0YUNvdW50IiwiZWNDb3VudCIsInRvdGFsQ291bnQiLCJtYXgiLCJnZXRCdWZmZXIiLCJyc1BvbHkiLCJnZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsIiwicmF3UG9seSIsInFyUG9seW5vbWlhbCIsImdldExlbmd0aCIsIm1vZFBvbHkiLCJtb2RJbmRleCIsImdldEF0IiwidG90YWxDb2RlQ291bnQiLCJkYXRhTGlzdCIsIlFSUlNCbG9jayIsImdldFJTQmxvY2tzIiwicXJCaXRCdWZmZXIiLCJwdXQiLCJnZXRNb2RlIiwiZ2V0TGVuZ3RoSW5CaXRzIiwid3JpdGUiLCJ0b3RhbERhdGFDb3VudCIsInB1dEJpdCIsImFkZERhdGEiLCJtb2RlIiwibmV3RGF0YSIsInFyTnVtYmVyIiwicXJBbHBoYU51bSIsInFyOEJpdEJ5dGUiLCJxckthbmppIiwiaXNEYXJrIiwiZ2V0TW9kdWxlQ291bnQiLCJtYWtlIiwiY3JlYXRlVGFibGVUYWciLCJjZWxsU2l6ZSIsIm1hcmdpbiIsInFySHRtbCIsImNyZWF0ZVN2Z1RhZyIsImFsdCIsInRpdGxlIiwidGV4dCIsInNpemUiLCJtYyIsIm1yIiwicXJTdmciLCJzY2FsYWJsZSIsImVzY2FwZVhtbCIsInRyaW0iLCJjcmVhdGVEYXRhVVJMIiwibWluIiwieCIsInkiLCJjcmVhdGVJbWdUYWciLCJpbWciLCJlc2NhcGVkIiwiY2hhckF0IiwiX2NyZWF0ZUhhbGZBU0NJSSIsInIxIiwicjIiLCJibG9ja3MiLCJibG9ja3NMYXN0TGluZU5vTWFyZ2luIiwiYXNjaWkiLCJzdWJzdHJpbmciLCJjcmVhdGVBU0NJSSIsIndoaXRlIiwiYmxhY2siLCJyZW5kZXJUbzJkQ29udGV4dCIsInN0cmluZ1RvQnl0ZXNGdW5jcyIsInN0cmluZ1RvQnl0ZXMiLCJjcmVhdGVTdHJpbmdUb0J5dGVzIiwidW5pY29kZURhdGEiLCJudW1DaGFycyIsInVuaWNvZGVNYXAiLCJiaW4iLCJiYXNlNjREZWNvZGVJbnB1dFN0cmVhbSIsInJlYWQiLCJjb3VudCIsImIwIiwiYjEiLCJiMiIsImIzIiwiayIsImZyb21DaGFyQ29kZSIsInYiLCJ1bmtub3duQ2hhciIsIlFSTW9kZSIsIk1PREVfTlVNQkVSIiwiTU9ERV9BTFBIQV9OVU0iLCJNT0RFXzhCSVRfQllURSIsIk1PREVfS0FOSkkiLCJMIiwiTSIsIlEiLCJIIiwiUVJNYXNrUGF0dGVybiIsIlBBVFRFUk4wMDAiLCJQQVRURVJOMDAxIiwiUEFUVEVSTjAxMCIsIlBBVFRFUk4wMTEiLCJQQVRURVJOMTAwIiwiUEFUVEVSTjEwMSIsIlBBVFRFUk4xMTAiLCJQQVRURVJOMTExIiwiUEFUVEVSTl9QT1NJVElPTl9UQUJMRSIsIkcxNSIsIkcxOCIsIkcxNV9NQVNLIiwiZ2V0QkNIRGlnaXQiLCJkaWdpdCIsImQiLCJlcnJvckNvcnJlY3RMZW5ndGgiLCJtdWx0aXBseSIsIlFSTWF0aCIsImdleHAiLCJzYW1lQ291bnQiLCJkYXJrQ291bnQiLCJyYXRpbyIsIkVYUF9UQUJMRSIsIkxPR19UQUJMRSIsImdsb2ciLCJudW0iLCJzaGlmdCIsIl9udW0iLCJSU19CTE9DS19UQUJMRSIsInFyUlNCbG9jayIsImdldFJzQmxvY2tUYWJsZSIsInJzQmxvY2siLCJfYnVmZmVyIiwiX2xlbmd0aCIsImJ1ZkluZGV4IiwiYml0IiwiX21vZGUiLCJfZGF0YSIsInN0clRvTnVtIiwiY2hhdFRvTnVtIiwiZ2V0Q29kZSIsIl9ieXRlcyIsImNvZGUiLCJieXRlQXJyYXlPdXRwdXRTdHJlYW0iLCJ3cml0ZUJ5dGUiLCJ3cml0ZVNob3J0Iiwid3JpdGVCeXRlcyIsImxlbiIsIndyaXRlU3RyaW5nIiwidG9CeXRlQXJyYXkiLCJiYXNlNjRFbmNvZGVPdXRwdXRTdHJlYW0iLCJfYnVmbGVuIiwiX2Jhc2U2NCIsIndyaXRlRW5jb2RlZCIsImVuY29kZSIsImZsdXNoIiwicGFkbGVuIiwic3RyIiwiX3N0ciIsIl9wb3MiLCJkZWNvZGUiLCJnaWZJbWFnZSIsIl93aWR0aCIsIl9oZWlnaHQiLCJzZXRQaXhlbCIsInBpeGVsIiwib3V0IiwibHp3TWluQ29kZVNpemUiLCJyYXN0ZXIiLCJnZXRMWldSYXN0ZXIiLCJiaXRPdXRwdXRTdHJlYW0iLCJfb3V0IiwiX2JpdExlbmd0aCIsIl9iaXRCdWZmZXIiLCJjbGVhckNvZGUiLCJlbmRDb2RlIiwiYml0TGVuZ3RoIiwidGFibGUiLCJsendUYWJsZSIsImJ5dGVPdXQiLCJiaXRPdXQiLCJkYXRhSW5kZXgiLCJjb250YWlucyIsIl9tYXAiLCJfc2l6ZSIsImdldFBpeGVsIiwiZ2lmIiwiYmFzZTY0IiwidG9VVEY4QXJyYXkiLCJ1dGY4IiwiY2hhcmNvZGUiLCIkJG9ic2VydmFibGUiLCJvYnNlcnZhYmxlIiwicmFuZG9tU3RyaW5nIiwicmFuZG9tIiwic3BsaXQiLCJBY3Rpb25UeXBlcyIsIklOSVQiLCJSRVBMQUNFIiwiUFJPQkVfVU5LTk9XTl9BQ1RJT04iLCJpc1BsYWluT2JqZWN0IiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIm1pbmlLaW5kT2YiLCJpc0RhdGUiLCJjb25zdHJ1Y3Rvck5hbWUiLCJjdG9yTmFtZSIsInJlcGxhY2UiLCJtZXNzYWdlIiwic3RhY2tUcmFjZUxpbWl0IiwidG9EYXRlU3RyaW5nIiwiZ2V0RGF0ZSIsInNldERhdGUiLCJraW5kT2YiLCJ0eXBlT2ZWYWwiLCJjcmVhdGVTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiZW5oYW5jZXIiLCJfcmVmMiIsImN1cnJlbnRSZWR1Y2VyIiwiY3VycmVudFN0YXRlIiwiY3VycmVudExpc3RlbmVycyIsIm5leHRMaXN0ZW5lcnMiLCJpc0Rpc3BhdGNoaW5nIiwiZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycyIsImdldFN0YXRlIiwic3Vic2NyaWJlIiwibGlzdGVuZXIiLCJpc1N1YnNjcmliZWQiLCJ1bnN1YnNjcmliZSIsInNwbGljZSIsImxpc3RlbmVycyIsInJlcGxhY2VSZWR1Y2VyIiwibmV4dFJlZHVjZXIiLCJfcmVmIiwib3V0ZXJTdWJzY3JpYmUiLCJvYnNlcnZlciIsIm9ic2VydmVTdGF0ZSIsIm5leHQiLCJsZWdhY3lfY3JlYXRlU3RvcmUiLCJhc3NlcnRSZWR1Y2VyU2hhcGUiLCJyZWR1Y2VycyIsImluaXRpYWxTdGF0ZSIsImNvbWJpbmVSZWR1Y2VycyIsInJlZHVjZXJLZXlzIiwiZmluYWxSZWR1Y2VycyIsImZpbmFsUmVkdWNlcktleXMiLCJzaGFwZUFzc2VydGlvbkVycm9yIiwiY29tYmluYXRpb24iLCJoYXNDaGFuZ2VkIiwibmV4dFN0YXRlIiwiX2kiLCJwcmV2aW91c1N0YXRlRm9yS2V5IiwibmV4dFN0YXRlRm9yS2V5IiwiYWN0aW9uVHlwZSIsImJpbmRBY3Rpb25DcmVhdG9yIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiYWN0aW9uQ3JlYXRvcnMiLCJib3VuZEFjdGlvbkNyZWF0b3JzIiwiY29tcG9zZSIsImZ1bmNzIiwiYXBwbHlNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJfZGlzcGF0Y2giLCJtaWRkbGV3YXJlQVBJIiwiY2hhaW4iLCJtaWRkbGV3YXJlIiwiX19ET19OT1RfVVNFX19BY3Rpb25UeXBlcyIsImFjdGlvblRyYW5zZm9ybWVyIiwibG9nZ2VyIiwiYmF0Y2hUeXBlIiwiX2xvb3AiLCJsZXZlbCIsImxldmVsRm4iLCJhcmdzIiwibGFzdEFyZyIsInBvcCIsIl9pbml0aWFsaXplckRlZmluZVByb3BlcnR5IiwicHJvcGVydHkiLCJkZXNjcmlwdG9yIiwiaW5pdGlhbGl6ZXIiLCJfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yIiwiZGVjb3JhdG9ycyIsImRlY29yYXRvciIsInJlbW92ZSIsImFsbCIsImVuYWJsZUNoZWNraW5nIiwiZGlzYWJsZUNoZWNraW5nIiwiY29uZmlnIiwiY2hlY2tFeGlzdGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7WUFJTUEsWUFBWSwyQkFBR0M7WUFDWCxDQUFDQyxNQUFNLENBQUNGLFlBQVksRUFBRSxVQUFVRyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRTtRQU0xRkMsTUFBTSxDQUFDQyxjQUFjLENBQUNOLE9BQU8sRUFBRSxZQUFZLEVBQUU7VUFDM0NPLEtBQUssRUFBRTtTQUNSLENBQUM7UUFDRlAsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHUSxPQUFPO1FBRTVCLFNBQVNDLE9BQU9BLENBQUNDLEdBQUcsRUFBRTtVQUFFLHlCQUF5Qjs7VUFBRSxJQUFJLE9BQU9DLE1BQU0sS0FBSyxVQUFVLElBQUksT0FBT0EsTUFBTSxDQUFDQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQUVILE9BQU8sR0FBRyxTQUFTQSxPQUFPQSxDQUFDQyxHQUFHLEVBQUU7Y0FBRSxPQUFPLE9BQU9BLEdBQUc7YUFBRztXQUFHLE1BQU07WUFBRUQsT0FBTyxHQUFHLFNBQVNBLE9BQU9BLENBQUNDLEdBQUcsRUFBRTtjQUFFLE9BQU9BLEdBQUcsSUFBSSxPQUFPQyxNQUFNLEtBQUssVUFBVSxJQUFJRCxHQUFHLENBQUNHLFdBQVcsS0FBS0YsTUFBTSxJQUFJRCxHQUFHLEtBQUtDLE1BQU0sQ0FBQ0csU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPSixHQUFHO2FBQUc7O1VBQUksT0FBT0QsT0FBTyxDQUFDQyxHQUFHLENBQUM7O1FBRXZYLFNBQVNGLE9BQU9BLENBQUNPLE1BQU0sRUFBRTtVQUN2QixJQUFJTixPQUFPLENBQUNNLE1BQU0sQ0FBQyxLQUFLLFFBQVEsSUFBSUEsTUFBTSxLQUFLLElBQUksRUFBRTtZQUNuREEsTUFBTSxDQUFDQyxLQUFLLEdBQUcsSUFBSTs7VUFHckIsT0FBT0QsTUFBTTs7Ozs7UUFPRmIsTUFBTSxDQUFDRixPQUFPO1FBQ2RFLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDaUIsVUFBVTtRQUM1QmYsTUFBTSxDQUFDRixPQUFPLENBQUNrQixPQUFPO01BRWpDLENBQUMsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztZQzlCQXJCLFlBQVksMkJBQUdDO1lBQ1gsQ0FBQ0MsTUFBTSxDQUFDRixZQUFZLEVBQUUsVUFBVUcsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUU7UUFNMUZDLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFO1VBQzNDTyxLQUFLLEVBQUU7U0FDUixDQUFDO1FBQ0ZQLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBR21CLFNBQVM7UUFFOUIsU0FBU0MsZUFBZUEsQ0FBQ1YsR0FBRyxFQUFFVyxHQUFHLEVBQUVkLEtBQUssRUFBRTtVQUFFLElBQUljLEdBQUcsSUFBSVgsR0FBRyxFQUFFO1lBQUVMLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDSSxHQUFHLEVBQUVXLEdBQUcsRUFBRTtjQUFFZCxLQUFLLEVBQUVBLEtBQUs7Y0FBRWUsVUFBVSxFQUFFLElBQUk7Y0FBRUMsWUFBWSxFQUFFLElBQUk7Y0FBRUMsUUFBUSxFQUFFO2FBQU0sQ0FBQztXQUFHLE1BQU07WUFBRWQsR0FBRyxDQUFDVyxHQUFHLENBQUMsR0FBR2QsS0FBSzs7VUFBSSxPQUFPRyxHQUFHOztRQUU5TSxTQUFTZSxRQUFRQSxDQUFBQSxFQUFHO1VBQUVBLFFBQVEsR0FBR3BCLE1BQU0sQ0FBQ3FCLE1BQU0sSUFBSSxVQUFVQyxNQUFNLEVBQUU7WUFBRSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLEVBQUVGLENBQUMsRUFBRSxFQUFFO2NBQUUsSUFBSUcsTUFBTSxHQUFHRixTQUFTLENBQUNELENBQUMsQ0FBQztjQUFFLEtBQUssSUFBSVAsR0FBRyxJQUFJVSxNQUFNLEVBQUU7Z0JBQUUsSUFBSTFCLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDa0IsY0FBYyxDQUFDQyxJQUFJLENBQUNGLE1BQU0sRUFBRVYsR0FBRyxDQUFDLEVBQUU7a0JBQUVNLE1BQU0sQ0FBQ04sR0FBRyxDQUFDLEdBQUdVLE1BQU0sQ0FBQ1YsR0FBRyxDQUFDOzs7O1lBQVEsT0FBT00sTUFBTTtXQUFHO1VBQUUsT0FBT0YsUUFBUSxDQUFDUyxLQUFLLENBQUMsSUFBSSxFQUFFTCxTQUFTLENBQUM7O1FBRTFULFNBQVNWLFNBQVNBLENBQUNnQixPQUFPLEVBQUVDLE1BQU0sRUFBRTtVQUNsQyxJQUFJQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0gsT0FBTyxDQUFDLEVBQUU7WUFDMUIsT0FBT0EsT0FBTyxDQUFDSSxHQUFHLENBQUMsVUFBVXhCLE1BQU0sRUFBRTtjQUNuQyxPQUFPQSxNQUFNLENBQUN5QixRQUFRLENBQUNKLE1BQU0sQ0FBQzthQUMvQixDQUFDOztVQUdKLE9BQU8vQixNQUFNLENBQUNvQyxJQUFJLENBQUNOLE9BQU8sQ0FBQyxDQUFDTyxNQUFNLENBQUMsVUFBVUMsT0FBTyxFQUFFNUIsTUFBTSxFQUFFO1lBQzVELE9BQU9VLFFBQVEsQ0FBQ2tCLE9BQU8sRUFBRXZCLGVBQWUsQ0FBQyxFQUFFLEVBQUVMLE1BQU0sRUFBRW9CLE9BQU8sQ0FBQ3BCLE1BQU0sQ0FBQyxDQUFDeUIsUUFBUSxDQUFDSixNQUFNLENBQUMsQ0FBQyxDQUFDO1dBQ3hGLEVBQUUsRUFBRSxDQUFDOzs7OztRQU9LbEMsTUFBTSxDQUFDRixPQUFPO1FBQ2RFLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDaUIsVUFBVTtRQUM1QmYsTUFBTSxDQUFDRixPQUFPLENBQUNrQixPQUFPO01BRWpDLENBQUMsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7O1lDbkNBckIsWUFBWSwyQkFBR0M7WUFDWCxDQUFDQyxNQUFNLENBQUNGLFlBQVksRUFBRSxVQUFVRyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRTtRQU0xRkMsTUFBTSxDQUFDQyxjQUFjLENBQUNOLE9BQU8sRUFBRSxZQUFZLEVBQUU7VUFDM0NPLEtBQUssRUFBRTtTQUNSLENBQUM7UUFDRlAsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUUzQixJQUFJNEMsYUFBYSxHQUFHQyxzQkFBc0IsQ0FBQzVDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXJFLFNBQVM0QyxzQkFBc0JBLENBQUNuQyxHQUFHLEVBQUU7VUFBRSxPQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ08sVUFBVSxHQUFHUCxHQUFHLEdBQUc7WUFBRSxTQUFTLEVBQUVBO1dBQUs7O1FBRTlGLElBQUlvQyxRQUFRLEdBQUcsSUFBSUYsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZO1VBQ2hFLEtBQUssSUFBSUcsSUFBSSxHQUFHbEIsU0FBUyxDQUFDQyxNQUFNLEVBQUVLLE9BQU8sR0FBRyxJQUFJRSxLQUFLLENBQUNVLElBQUksQ0FBQyxFQUFFQyxJQUFJLEdBQUcsQ0FBQyxFQUFFQSxJQUFJLEdBQUdELElBQUksRUFBRUMsSUFBSSxFQUFFLEVBQUU7WUFDMUZiLE9BQU8sQ0FBQ2EsSUFBSSxDQUFDLEdBQUduQixTQUFTLENBQUNtQixJQUFJLENBQUM7O1VBR2pDLElBQUliLE9BQU8sQ0FBQ0wsTUFBTSxLQUFLLENBQUMsSUFBSU8sS0FBSyxDQUFDQyxPQUFPLENBQUNILE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JELE9BQU9BLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1VBR25CLE9BQU9BLE9BQU87U0FDZixDQUFDO1FBRUZuQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUc4QyxRQUFROzs7O1FBSWhCNUMsTUFBTSxDQUFDRixPQUFPO1FBQ2RFLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDaUIsVUFBVTtRQUMzQmYsTUFBTSxDQUFDRixPQUFPLENBQUNrQixPQUFPO01BRWxDLENBQUMsRUFBRSxPQUFPO1FBQ1IsZ0JBQWdCLEVBQUUrQjtNQUNwQixDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O1lDdkNHcEQsWUFBWSwyQkFBR0M7WUFDWCxDQUFDQyxNQUFNLENBQUNGLFlBQVksRUFBRSxVQUFVRyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRTtRQU0xRkMsTUFBTSxDQUFDQyxjQUFjLENBQUNOLE9BQU8sRUFBRSxZQUFZLEVBQUU7VUFDM0NPLEtBQUssRUFBRTtTQUNSLENBQUM7UUFDRlAsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHa0QsT0FBTztRQUU1QixTQUFTOUIsZUFBZUEsQ0FBQ1YsR0FBRyxFQUFFVyxHQUFHLEVBQUVkLEtBQUssRUFBRTtVQUFFLElBQUljLEdBQUcsSUFBSVgsR0FBRyxFQUFFO1lBQUVMLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDSSxHQUFHLEVBQUVXLEdBQUcsRUFBRTtjQUFFZCxLQUFLLEVBQUVBLEtBQUs7Y0FBRWUsVUFBVSxFQUFFLElBQUk7Y0FBRUMsWUFBWSxFQUFFLElBQUk7Y0FBRUMsUUFBUSxFQUFFO2FBQU0sQ0FBQztXQUFHLE1BQU07WUFBRWQsR0FBRyxDQUFDVyxHQUFHLENBQUMsR0FBR2QsS0FBSzs7VUFBSSxPQUFPRyxHQUFHOztRQUU5TSxTQUFTZSxRQUFRQSxDQUFBQSxFQUFHO1VBQUVBLFFBQVEsR0FBR3BCLE1BQU0sQ0FBQ3FCLE1BQU0sSUFBSSxVQUFVQyxNQUFNLEVBQUU7WUFBRSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLEVBQUVGLENBQUMsRUFBRSxFQUFFO2NBQUUsSUFBSUcsTUFBTSxHQUFHRixTQUFTLENBQUNELENBQUMsQ0FBQztjQUFFLEtBQUssSUFBSVAsR0FBRyxJQUFJVSxNQUFNLEVBQUU7Z0JBQUUsSUFBSTFCLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDa0IsY0FBYyxDQUFDQyxJQUFJLENBQUNGLE1BQU0sRUFBRVYsR0FBRyxDQUFDLEVBQUU7a0JBQUVNLE1BQU0sQ0FBQ04sR0FBRyxDQUFDLEdBQUdVLE1BQU0sQ0FBQ1YsR0FBRyxDQUFDOzs7O1lBQVEsT0FBT00sTUFBTTtXQUFHO1VBQUUsT0FBT0YsUUFBUSxDQUFDUyxLQUFLLENBQUMsSUFBSSxFQUFFTCxTQUFTLENBQUM7O1FBRTFULFNBQVNxQixPQUFPQSxDQUFDZixPQUFPLEVBQUVDLE1BQU0sRUFBRTtVQUNoQyxJQUFJQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0gsT0FBTyxDQUFDLEVBQUU7WUFDMUIsT0FBT0EsT0FBTyxDQUFDSSxHQUFHLENBQUMsVUFBVXhCLE1BQU0sRUFBRTtjQUNuQyxPQUFPQSxNQUFNLENBQUNvQyxNQUFNLENBQUNmLE1BQU0sQ0FBQzthQUM3QixDQUFDOztVQUdKLE9BQU8vQixNQUFNLENBQUNvQyxJQUFJLENBQUNOLE9BQU8sQ0FBQyxDQUFDTyxNQUFNLENBQUMsVUFBVVUsS0FBSyxFQUFFckMsTUFBTSxFQUFFO1lBQzFELE9BQU9VLFFBQVEsQ0FBQzJCLEtBQUssRUFBRWhDLGVBQWUsQ0FBQyxFQUFFLEVBQUVMLE1BQU0sRUFBRW9CLE9BQU8sQ0FBQ3BCLE1BQU0sQ0FBQyxDQUFDb0MsTUFBTSxDQUFDZixNQUFNLENBQUMsQ0FBQyxDQUFDO1dBQ3BGLEVBQUUsRUFBRSxDQUFDOzs7OztRQU9LbEMsTUFBTSxDQUFDRixPQUFPO1FBQ2RFLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDaUIsVUFBVTtRQUM1QmYsTUFBTSxDQUFDRixPQUFPLENBQUNrQixPQUFPO01BRWpDLENBQUMsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7O01DeENOLE1BQU1tQyxTQUFTLENBQUM7UUFDWnhDLFdBQVdBLENBQUFBLEVBQUc7VUFDVixJQUFJLENBQUN5QyxTQUFTLEdBQUcsRUFBRTtVQUNuQixJQUFJLENBQUNDLFlBQVksR0FBRyxFQUFFOzs7Ozs7Ozs7O1FBVTFCeEQsTUFBTUEsQ0FBQ3lELEVBQUUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7VUFDNUIsSUFBSSxDQUFDSixTQUFTLENBQUNFLEVBQUUsQ0FBQyxHQUFHO1lBQ2pCQyxPQUFPO1lBQ1BDO1dBQ0g7Ozs7Ozs7O1FBUUx6RCxPQUFPQSxDQUFDdUQsRUFBRSxFQUFFO1VBQ1IsT0FBTyxJQUFJLENBQUNHLFFBQVEsQ0FBQ0gsRUFBRSxDQUFDOztRQUc1QkksbUJBQW1CQSxDQUFDQyxhQUFhLEVBQUVDLElBQUksRUFBRTtVQUNyQyxNQUFNLElBQUlDLEtBQUssWUFBWUYsaUNBQWlDQyxxRUFBcUUsQ0FBQzs7UUFHdElILFFBQVFBLENBQUNILEVBQUUsRUFBRVEsTUFBTSxFQUFFO1VBQ2pCLE1BQU1DLFlBQVksR0FBRyxJQUFJLENBQUNWLFlBQVksQ0FBQ0MsRUFBRSxDQUFDO1VBQzFDLElBQUlTLFlBQVksRUFBRTtZQUNkLE9BQU9BLFlBQVksQ0FBQ2pFLE9BQU87O1VBRy9CLE1BQU1FLE1BQU0sR0FBRztZQUFFc0QsRUFBRTtZQUFFeEQsT0FBTyxFQUFFO1dBQUk7VUFDbEMsSUFBSSxDQUFDdUQsWUFBWSxDQUFDQyxFQUFFLENBQUMsR0FBR3RELE1BQU07VUFDOUIsSUFBSSxDQUFDZ0UsY0FBYyxDQUFDaEUsTUFBTSxFQUFFc0QsRUFBRSxDQUFDO1VBQy9CLE9BQU90RCxNQUFNLENBQUNGLE9BQU87O1FBR3pCbUUsUUFBUUEsQ0FBQ0MsU0FBUyxFQUFFSixNQUFNLEVBQUU7VUFDeEIsT0FBTyxJQUFJLENBQUNLLGlCQUFpQixDQUFDRCxTQUFTLEVBQUVKLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQ00sZ0JBQWdCLENBQUNGLFNBQVMsRUFBRUosTUFBTSxDQUFDOztRQUdoR0ssaUJBQWlCQSxDQUFDRCxTQUFTLEVBQUVKLE1BQU0sRUFBRTtVQUFBLElBQUFPLGdCQUFBO1VBQ2pDLElBQUlILFNBQVMsSUFBSUksUUFBUSxFQUFFO1lBQ3ZCLE9BQU9KLFNBQVM7O1VBRXBCLElBQUksQ0FBQ0osTUFBTSxFQUFFO1lBQ1Q7O1VBRUosT0FBTyxFQUFBTyxnQkFBQSxHQUFBQyxRQUFRLENBQUNSLE1BQU0sQ0FBQyxxQkFBaEJPLGdCQUFBLENBQWtCRSxZQUFZLENBQUNMLFNBQVMsQ0FBQyxLQUFJTSxTQUFTOztRQUdqRVIsY0FBY0EsQ0FBQ2hFLE1BQU0sRUFBRXNELEVBQUUsRUFBRTtVQUN2QixJQUFJbUIsS0FBSyxHQUFHLElBQUk7VUFDaEIsSUFBSTtZQUNBLElBQUksQ0FBQ0MsS0FBSyxDQUFDMUUsTUFBTSxFQUFFc0QsRUFBRSxDQUFDO1lBQ3RCbUIsS0FBSyxHQUFHLEtBQUs7V0FDaEIsU0FBUztZQUNOLElBQUlBLEtBQUssRUFBRTtjQUNQLE9BQU8sSUFBSSxDQUFDcEIsWUFBWSxDQUFDQyxFQUFFLENBQUM7Ozs7UUFLeENvQixLQUFLQSxDQUFDMUUsTUFBTSxFQUFFc0QsRUFBRSxFQUFFO1VBQ2QsTUFBTTtZQUFFQyxPQUFPO1lBQUVDO1dBQVksR0FBRyxJQUFJLENBQUNtQixZQUFZLENBQUNyQixFQUFFLENBQUM7VUFDckQsTUFBTXNCLGFBQWEsR0FBRyxJQUFJLENBQUNDLGNBQWMsQ0FBQzdFLE1BQU0sQ0FBQztVQUNqRCxNQUFNRCxPQUFPLEdBQUd5RCxVQUFVLEdBQ3BCLElBQUksQ0FBQ3NCLDRCQUE0QixDQUFDLE9BQU90QixVQUFVLEtBQUssVUFBVSxHQUFHQSxVQUFVLEVBQUUsR0FBR0EsVUFBVSxFQUFFb0IsYUFBYSxDQUFDLEdBQzlHQSxhQUFhO1VBQ25CckIsT0FBTyxDQUFDdkQsTUFBTSxDQUFDRixPQUFPLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxDQUFDOztRQUc1QzJFLFlBQVlBLENBQUNyQixFQUFFLEVBQUU7VUFDYixJQUFJQSxFQUFFLElBQUksSUFBSSxDQUFDRixTQUFTLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUNBLFNBQVMsQ0FBQ0UsRUFBRSxDQUFDO1dBQzVCLE1BQU07WUFDSCxPQUFPLElBQUksQ0FBQ3lCLHdCQUF3QixDQUFDekIsRUFBRSxDQUFDOzs7UUFJaER5Qix3QkFBd0JBLENBQUN6QixFQUFFLEVBQUU7VUFDekIsT0FBTztZQUNIQyxPQUFPLEVBQUVBLENBQUN5QixRQUFRLEVBQUV2QixRQUFRLEVBQUV6RCxNQUFNLEtBQUs7Y0FDckMsSUFBSSxPQUFPRCxPQUFPLEtBQUssV0FBVyxFQUFFO2dCQUNoQyxNQUFNLElBQUk4RCxLQUFLLG9FQUFvRVAsTUFBTSxDQUFDOztjQUU5RixJQUFJO2dCQUNBdEQsTUFBTSxDQUFDRixPQUFPLEdBQUdDLE9BQU8sQ0FBQ3VELEVBQUUsQ0FBQztlQUMvQixDQUFDLE9BQU8yQixHQUFHLEVBQUU7Z0JBQ1YsTUFBTSxJQUFJcEIsS0FBSyx3REFBd0RQLE9BQU8sRUFBRTtrQkFBRTRCLEtBQUssRUFBRUQ7aUJBQUssQ0FBQzs7O1dBRzFHOztRQUdMSixjQUFjQSxDQUFDN0UsTUFBTSxFQUFFO1VBQ25CLE9BQVFrRSxTQUFTLElBQUssSUFBSSxDQUFDVCxRQUFRLENBQUNTLFNBQVMsRUFBRWxFLE1BQU0sQ0FBQzs7UUFHMUQ4RSw0QkFBNEJBLENBQUNLLFVBQVUsRUFBRUMsZUFBZSxFQUFFO1VBQ3RELE9BQVFsQixTQUFTLElBQUs7WUFDbEIsTUFBTW1CLFFBQVEsR0FBR0YsVUFBVSxDQUFDakIsU0FBUyxDQUFDO1lBQ3RDLElBQUltQixRQUFRLEVBQUU7Y0FDVixPQUFPRCxlQUFlLENBQUNDLFFBQVEsQ0FBQzthQUNuQyxNQUFNO2NBQ0gsTUFBTSxJQUFJeEIsS0FBSyxDQUFDLHVCQUF1QixHQUFHSyxTQUFTLENBQUM7O1dBRTNEOztRQUdMRSxnQkFBZ0JBLENBQUNGLFNBQVMsRUFBRW9CLFNBQVMsRUFBRTtVQUNuQyxNQUFNLElBQUl6QixLQUFLLHNCQUFzQkssa0JBQWtCSixTQUFTLENBQUM7O01BRXpFO3NDQUVlLElBQUlYLFNBQVMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7WUN0SHhCeEQsWUFBWSwyQkFBR0M7WUFDWCxDQUFDQyxNQUFNLENBQUNGLFlBQVksRUFBRSxVQUFVRyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRTtRQU0xRkMsTUFBTSxDQUFDQyxjQUFjLENBQUNOLE9BQU8sRUFBRSxZQUFZLEVBQUU7VUFDM0NPLEtBQUssRUFBRTtTQUNSLENBQUM7UUFDRlAsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHeUYsWUFBWTtRQUVqQyxJQUFJQyxNQUFNLEdBQUd6RixPQUFPLENBQUMsU0FBUyxDQUFDO1FBRS9CLElBQUl1RCxFQUFFLEdBQUcsQ0FBQztRQUVWLElBQUltQyxRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQ0MsR0FBRyxFQUFFO1VBQ3BDLE9BQU9BLEdBQUc7U0FDWDtRQUVELElBQUlDLFNBQVMsR0FBRyxTQUFTQSxTQUFTQSxDQUFDQyxlQUFlLEVBQUU7VUFDbEQsSUFBSUEsZUFBZSxJQUFJLE9BQU9BLGVBQWUsQ0FBQ0MsUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUNyRSxPQUFPRCxlQUFlLENBQUNDLFFBQVE7V0FDaEMsTUFBTTtZQUNMLE9BQU9ELGVBQWU7O1NBRXpCO1FBRUQsSUFBSUUsWUFBWSxHQUFHLFNBQVNBLFlBQVlBLENBQUNDLGdCQUFnQixFQUFFO1VBQ3pELElBQUk1RCxLQUFLLENBQUNDLE9BQU8sQ0FBQzJELGdCQUFnQixDQUFDLEVBQUU7WUFDbkMsT0FBT0EsZ0JBQWdCLENBQUMxRCxHQUFHLENBQUNzRCxTQUFTLENBQUM7V0FDdkMsTUFBTTtZQUNMLE9BQU9BLFNBQVMsQ0FBQ0ksZ0JBQWdCLENBQUM7O1NBRXJDO1FBRUQsU0FBU1IsWUFBWUEsQ0FBQ1MsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLFdBQVcsRUFBRTtVQUM5RCxJQUFJLE9BQU9GLFdBQVcsS0FBSyxVQUFVLEVBQUU7WUFDckNFLFdBQVcsR0FBR0QsY0FBYztZQUM1QkEsY0FBYyxHQUFHRCxXQUFXO1lBQzVCQSxXQUFXLEdBQUd4QixTQUFTOztVQUd6QixJQUFJLE9BQU95QixjQUFjLEtBQUssVUFBVSxFQUFFO1lBQ3hDQSxjQUFjLEdBQUdSLFFBQVE7O1VBRzNCLElBQUksT0FBT1MsV0FBVyxLQUFLLFVBQVUsRUFBRTtZQUNyQ0EsV0FBVyxHQUFHMUIsU0FBUzs7VUFHekIsSUFBSTJCLGNBQWMsR0FBRyxPQUFPSCxXQUFXLEtBQUssUUFBUSxJQUFJLGNBQWMsQ0FBQ0ksSUFBSSxDQUFDSixXQUFXLENBQUM7VUFFeEYsSUFBSUcsY0FBYyxFQUFFO1lBQ2xCLElBQUlYLE1BQU0sQ0FBQ2EsS0FBSyxFQUFFTCxXQUFXLENBQUM7WUFDOUIsSUFBSVIsTUFBTSxDQUFDYyxHQUFHLEVBQUVOLFdBQVcsQ0FBQztXQUM3QixNQUFNO1lBQ0wsRUFBRTFDLEVBQUU7O1VBR04sSUFBSWlELElBQUksR0FBR0osY0FBYyxHQUFHSCxXQUFXLEdBQUcsR0FBRyxDQUFDUSxNQUFNLENBQUNsRCxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUNrRCxNQUFNLENBQUNSLFdBQVcsR0FBRyxHQUFHLEdBQUdBLFdBQVcsR0FBRyxFQUFFLENBQUM7VUFDMUcsSUFBSVMsaUJBQWlCLEdBQUdqQyxTQUFTO1VBRWpDLFNBQVNrQyxVQUFVQSxDQUFBQSxFQUFHO1lBQ3BCLElBQUlDLE9BQU8sR0FBR1YsY0FBYyxDQUFDakUsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFTCxTQUFTLENBQUM7WUFFckQsSUFBSXVFLFdBQVcsRUFBRTtjQUNmLE9BQU87Z0JBQ0xLLElBQUksRUFBRUEsSUFBSTtnQkFDVkksT0FBTyxFQUFFQSxPQUFPO2dCQUNoQjdGLEtBQUssRUFBRTZGLE9BQU8sWUFBWTlDLEtBQUs7Z0JBQy9CK0MsSUFBSSxFQUFFVixXQUFXLENBQUNsRSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUVMLFNBQVM7ZUFDMUM7O1lBR0gsT0FBTztjQUNMNEUsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZJLE9BQU8sRUFBRUEsT0FBTztjQUNoQjdGLEtBQUssRUFBRTZGLE9BQU8sWUFBWTlDO2FBQzNCOztVQUdILElBQUlnRCxlQUFlLEdBQUcsU0FBU0EsZUFBZUEsQ0FBQ0MsU0FBUyxFQUFFQyxPQUFPLEVBQUU7WUFDakUsT0FBTyxZQUFZO2NBQ2pCLElBQUlDLGVBQWUsR0FBR04sVUFBVSxDQUFDMUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFTCxTQUFTLENBQUM7Y0FFekQsSUFBSSxDQUFDcUYsZUFBZSxDQUFDbEcsS0FBSyxFQUFFO2dCQUMxQmtHLGVBQWUsQ0FBQ2xHLEtBQUssR0FBR2lHLE9BQU87O2NBR2pDLElBQUk1RSxLQUFLLENBQUNDLE9BQU8sQ0FBQzBFLFNBQVMsQ0FBQyxFQUFFO2dCQUM1QixPQUFPQSxTQUFTLENBQUN6RSxHQUFHLENBQUMsVUFBVXdELFFBQVEsRUFBRTtrQkFDdkMsT0FBT0EsUUFBUSxDQUFDbUIsZUFBZSxDQUFDO2lCQUNqQyxDQUFDO2VBQ0gsTUFBTSxJQUFJRixTQUFTLEVBQUU7Z0JBQ3BCLE9BQU9BLFNBQVMsQ0FBQ0UsZUFBZSxDQUFDO2VBQ2xDLE1BQU07Z0JBQ0wsT0FBT0EsZUFBZTs7YUFFekI7V0FDRjtVQUVELFNBQVNDLGFBQWFBLENBQUFBLEVBQUc7WUFDdkIsT0FBT0osZUFBZSxDQUFDSixpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQ3pFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRUwsU0FBUyxDQUFDOztVQUczRXNGLGFBQWEsQ0FBQzNHLE9BQU8sR0FBRyxZQUFZO1lBQ2xDLE9BQU91RyxlQUFlLENBQUNKLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDekUsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFTCxTQUFTLENBQUM7V0FDekU7VUFFRHNGLGFBQWEsQ0FBQ0MsT0FBTyxHQUFHLFlBQVk7WUFDbEMsT0FBT1gsSUFBSTtXQUNaO1VBRURVLGFBQWEsQ0FBQ0UsUUFBUSxHQUFHLFlBQVk7WUFDbkMsT0FBT1osSUFBSTtXQUNaO1VBRURVLGFBQWEsQ0FBQ0csR0FBRyxHQUFHVixVQUFVO1VBRTlCTyxhQUFhLENBQUMzRSxRQUFRLEdBQUcsVUFBVXlELGdCQUFnQixFQUFFO1lBQ25EVSxpQkFBaUIsR0FBR1gsWUFBWSxDQUFDQyxnQkFBZ0IsQ0FBQztZQUNsRCxPQUFPa0IsYUFBYTtXQUNyQjtVQUVEQSxhQUFhLENBQUNJLFFBQVEsR0FBRyxZQUFZO1lBQ25DLE9BQU8sQ0FBQyxDQUFDWixpQkFBaUI7V0FDM0I7VUFFRFEsYUFBYSxDQUFDSyxLQUFLLEdBQUcsWUFBWTtZQUNoQyxPQUFPLEtBQUs7V0FDYjtVQUVETCxhQUFhLENBQUNNLFVBQVUsR0FBR04sYUFBYSxDQUFDSSxRQUFRO1VBRWpESixhQUFhLENBQUNoRSxNQUFNLEdBQUcsVUFBVThDLGdCQUFnQixFQUFFO1lBQ2pELElBQUl5QixrQkFBa0IsR0FBR1gsZUFBZSxDQUFDZixZQUFZLENBQUNDLGdCQUF1QixDQUFDLENBQUM7WUFDL0V5QixrQkFBa0IsQ0FBQ2xILE9BQU8sR0FBR3VHLGVBQWUsQ0FBQ2YsWUFBWSxDQUFDQyxnQkFBc0IsQ0FBQyxDQUFDO1lBQ2xGeUIsa0JBQWtCLENBQUNKLEdBQUcsR0FBR1YsVUFBVTtZQUNuQ2Msa0JBQWtCLENBQUNOLE9BQU8sR0FBR0QsYUFBYSxDQUFDQyxPQUFPO1lBQ2xETSxrQkFBa0IsQ0FBQ0wsUUFBUSxHQUFHRixhQUFhLENBQUNFLFFBQVE7WUFFcERLLGtCQUFrQixDQUFDbEYsUUFBUSxHQUFHLFlBQVk7Y0FDeEMsT0FBT2tGLGtCQUFrQjthQUMxQjtZQUVEQSxrQkFBa0IsQ0FBQ3ZFLE1BQU0sR0FBRyxZQUFZO2NBQ3RDLE9BQU91RSxrQkFBa0I7YUFDMUI7WUFFREEsa0JBQWtCLENBQUNILFFBQVEsR0FBRyxZQUFZO2NBQ3hDLE9BQU8sS0FBSzthQUNiO1lBRURHLGtCQUFrQixDQUFDRixLQUFLLEdBQUcsWUFBWTtjQUNyQyxPQUFPLElBQUk7YUFDWjtZQUVERSxrQkFBa0IsQ0FBQ0QsVUFBVSxHQUFHQyxrQkFBa0IsQ0FBQ0YsS0FBSztZQUN4RCxPQUFPRSxrQkFBa0I7V0FDMUI7VUFFRCxPQUFPUCxhQUFhOzs7OztRQU9UakgsTUFBTSxDQUFDRixPQUFPO1FBQ2RFLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDaUIsVUFBVTtRQUM1QmYsTUFBTSxDQUFDRixPQUFPLENBQUNrQixPQUFPO01BRWpDLENBQUMsRUFBRSxPQUFPO1FBQ1IsU0FBUyxFQUFFK0I7TUFDYixDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7WUMvS0dwRCxZQUFZLDJCQUFHQztZQUNYLENBQUNDLE1BQU0sQ0FBQ0YsWUFBWSxFQUFFLFVBQVVHLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFO1FBTTFGQyxNQUFNLENBQUNDLGNBQWMsQ0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRTtVQUMzQ08sS0FBSyxFQUFFO1NBQ1IsQ0FBQztRQUNGUCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcySCxhQUFhO1FBRWxDLElBQUlDLE1BQU0sR0FBRy9FLHNCQUFzQixDQUFDNUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXZELFNBQVM0QyxzQkFBc0JBLENBQUNuQyxHQUFHLEVBQUU7VUFBRSxPQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ08sVUFBVSxHQUFHUCxHQUFHLEdBQUc7WUFBRSxTQUFTLEVBQUVBO1dBQUs7O1FBRTlGLFNBQVNlLFFBQVFBLENBQUFBLEVBQUc7VUFBRUEsUUFBUSxHQUFHcEIsTUFBTSxDQUFDcUIsTUFBTSxJQUFJLFVBQVVDLE1BQU0sRUFBRTtZQUFFLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQU0sRUFBRUYsQ0FBQyxFQUFFLEVBQUU7Y0FBRSxJQUFJRyxNQUFNLEdBQUdGLFNBQVMsQ0FBQ0QsQ0FBQyxDQUFDO2NBQUUsS0FBSyxJQUFJUCxHQUFHLElBQUlVLE1BQU0sRUFBRTtnQkFBRSxJQUFJMUIsTUFBTSxDQUFDUyxTQUFTLENBQUNrQixjQUFjLENBQUNDLElBQUksQ0FBQ0YsTUFBTSxFQUFFVixHQUFHLENBQUMsRUFBRTtrQkFBRU0sTUFBTSxDQUFDTixHQUFHLENBQUMsR0FBR1UsTUFBTSxDQUFDVixHQUFHLENBQUM7Ozs7WUFBUSxPQUFPTSxNQUFNO1dBQUc7VUFBRSxPQUFPRixRQUFRLENBQUNTLEtBQUssQ0FBQyxJQUFJLEVBQUVMLFNBQVMsQ0FBQzs7UUFFMVQsU0FBU2dHLGFBQWFBLENBQUNDLG1CQUFtQixFQUFFO1VBQzFDLElBQUlBLG1CQUFtQixJQUFJQSxtQkFBbUIsQ0FBQ1YsT0FBTyxFQUFFO1lBQ3RELE9BQU9VLG1CQUFtQixDQUFDVCxRQUFRLEVBQUU7O1VBR3ZDLE9BQU9TLG1CQUFtQjs7UUFHNUIsU0FBU0gsYUFBYUEsQ0FBQUEsRUFBRztVQUN2QixJQUFJSSxRQUFRLEdBQUdsRyxTQUFTLENBQUNDLE1BQU0sR0FBRyxDQUFDLElBQUlELFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSzZDLFNBQVMsR0FBRzdDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO1VBQ3JGLElBQUltRyxZQUFZLEdBQUduRyxTQUFTLENBQUNDLE1BQU0sR0FBRyxDQUFDLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRzZDLFNBQVM7VUFDbEUsSUFBSXVELElBQUksR0FBRztZQUNUcEIsT0FBTyxFQUFFLElBQUk7WUFDYnFCLFFBQVEsRUFBRTtXQUNYO1VBRUQsSUFBSUMsT0FBTyxHQUFHMUcsUUFBUSxDQUFDaUIsTUFBTSxFQUFFO1lBQzdCMEYsR0FBRyxFQUFFQSxHQUFHO1lBQ1JDLEVBQUUsRUFBRUEsRUFBRTtZQUNOQyxHQUFHLEVBQUVBLEdBQUc7WUFDUkMsT0FBTyxFQUFFQTtXQUNWLENBQUM7VUFFRixTQUFTSCxHQUFHQSxDQUFDTixtQkFBbUIsRUFBRTtZQUNoQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDRixhQUFhLENBQUNDLG1CQUFtQixDQUFDLENBQUM7O1VBR3ZELFNBQVNPLEVBQUVBLENBQUNQLG1CQUFtQixFQUFFVSxPQUFPLEVBQUU7WUFDeEMsSUFBSW5HLEtBQUssQ0FBQ0MsT0FBTyxDQUFDd0YsbUJBQW1CLENBQUMsRUFBRTtjQUN0Q0EsbUJBQW1CLENBQUNXLE9BQU8sQ0FBQyxVQUFVMUgsTUFBTSxFQUFFO2dCQUM1Q3NILEVBQUUsQ0FBQ3RILE1BQU0sRUFBRXlILE9BQU8sQ0FBQztlQUNwQixDQUFDO2FBQ0gsTUFBTTtjQUNMVCxRQUFRLENBQUNGLGFBQWEsQ0FBQ0MsbUJBQW1CLENBQUMsQ0FBQyxHQUFHVSxPQUFPOztZQUd4RCxPQUFPTCxPQUFPOztVQUdoQixTQUFTRyxHQUFHQSxDQUFDUixtQkFBbUIsRUFBRTtZQUNoQyxJQUFJekYsS0FBSyxDQUFDQyxPQUFPLENBQUN3RixtQkFBbUIsQ0FBQyxFQUFFO2NBQ3RDQSxtQkFBbUIsQ0FBQ1csT0FBTyxDQUFDSCxHQUFHLENBQUM7YUFDakMsTUFBTTtjQUNMLE9BQU9QLFFBQVEsQ0FBQ0YsYUFBYSxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDOztZQUdyRCxPQUFPSyxPQUFPOztVQUdoQixTQUFTSSxPQUFPQSxDQUFDRyxPQUFPLEVBQUU7WUFDeEJySSxNQUFNLENBQUNvQyxJQUFJLENBQUNpRyxPQUFPLENBQUMsQ0FBQ0QsT0FBTyxDQUFDLFVBQVVFLElBQUksRUFBRTtjQUMzQyxPQUFPVixJQUFJLENBQUNVLElBQUksQ0FBQyxHQUFHRCxPQUFPLENBQUNDLElBQUksQ0FBQzthQUNsQyxDQUFDO1lBQ0YsT0FBT1IsT0FBTzs7VUFHaEIsSUFBSSxPQUFPSixRQUFRLEtBQUssVUFBVSxFQUFFO1lBQ2xDLElBQUl0RSxPQUFPLEdBQUdzRSxRQUFRO1lBQ3RCQSxRQUFRLEdBQUcsRUFBRTtZQUNidEUsT0FBTyxDQUFDNEUsRUFBRSxFQUFFQyxHQUFHLENBQUM7O1VBR2xCLElBQUksQ0FBQ0YsR0FBRyxDQUFDUixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRTtZQUMzQlMsRUFBRSxDQUFDVCxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVWdCLEtBQUssRUFBRS9CLE9BQU8sRUFBRTtjQUM5QyxJQUFJb0IsSUFBSSxDQUFDcEIsT0FBTyxFQUFFO2dCQUNoQixPQUFPQSxPQUFPLENBQUNuRSxNQUFNLENBQUNBLE1BQU0sRUFBRWtHLEtBQUssQ0FBQztlQUNyQyxNQUFNO2dCQUNMLE9BQU8vQixPQUFPLENBQUNBLE9BQU8sQ0FBQ25FLE1BQU0sQ0FBQ0EsTUFBTSxFQUFFa0csS0FBSyxDQUFDOzthQUUvQyxDQUFDOztVQUdKLFNBQVNsRyxNQUFNQSxDQUFBQSxFQUFHO1lBQ2hCLElBQUlrRyxLQUFLLEdBQUcvRyxTQUFTLENBQUNDLE1BQU0sR0FBRyxDQUFDLElBQUlELFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSzZDLFNBQVMsR0FBRzdDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBR21HLFlBQVk7WUFDNUYsSUFBSWpILE1BQU0sR0FBR2MsU0FBUyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxHQUFHRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUc2QyxTQUFTO1lBRTVELElBQUksQ0FBQzNELE1BQU0sSUFBSSxPQUFPQSxNQUFNLENBQUMwRixJQUFJLEtBQUssUUFBUSxFQUFFO2NBQzlDLE9BQU9tQyxLQUFLOztZQUdkLElBQUk3SCxNQUFNLENBQUMwRixJQUFJLENBQUNvQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7Y0FDdEMsT0FBT0QsS0FBSzs7WUFHZCxJQUFJSixPQUFPLEdBQUdULFFBQVEsQ0FBQ2hILE1BQU0sQ0FBQzBGLElBQUksQ0FBQyxJQUFJd0IsSUFBSSxDQUFDQyxRQUFRO1lBRXBELElBQUlNLE9BQU8sRUFBRTtjQUNYLElBQUlQLElBQUksQ0FBQ3BCLE9BQU8sRUFBRTtnQkFDaEIsT0FBTzJCLE9BQU8sQ0FBQ0ksS0FBSyxFQUFFN0gsTUFBTSxDQUFDOEYsT0FBTyxFQUFFOUYsTUFBTSxDQUFDK0YsSUFBSSxDQUFDO2VBQ25ELE1BQU07Z0JBQ0wsT0FBTzBCLE9BQU8sQ0FBQ0ksS0FBSyxFQUFFN0gsTUFBTSxDQUFDOzs7WUFJakMsT0FBTzZILEtBQUs7O1VBSWQsT0FBT1QsT0FBTzs7Ozs7UUFPSGpJLE1BQU0sQ0FBQ0YsT0FBTztRQUNkRSxNQUFNLENBQUNGLE9BQU8sQ0FBQ2lCLFVBQVU7UUFDNUJmLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDa0IsT0FBTztNQUVqQyxDQUFDLEVBQUUsT0FBTztRQUNSLFNBQVMsRUFBRStCO01BQ2IsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7O1lDaklHcEQsWUFBWSwyQkFBR0M7WUFDWCxDQUFDQyxNQUFNLENBQUNGLFlBQVksRUFBRSxVQUFVRyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRTtRQU0xRkMsTUFBTSxDQUFDQyxjQUFjLENBQUNOLE9BQU8sRUFBRSxZQUFZLEVBQUU7VUFDM0NPLEtBQUssRUFBRTtTQUNSLENBQUM7UUFDRlAsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHOEksUUFBUTtRQUU3QixJQUFJbEIsTUFBTSxHQUFHL0Usc0JBQXNCLENBQUM1QyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdkQsU0FBUzRDLHNCQUFzQkEsQ0FBQ25DLEdBQUcsRUFBRTtVQUFFLE9BQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDTyxVQUFVLEdBQUdQLEdBQUcsR0FBRztZQUFFLFNBQVMsRUFBRUE7V0FBSzs7UUFFOUYsU0FBU2UsUUFBUUEsQ0FBQUEsRUFBRztVQUFFQSxRQUFRLEdBQUdwQixNQUFNLENBQUNxQixNQUFNLElBQUksVUFBVUMsTUFBTSxFQUFFO1lBQUUsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtjQUFFLElBQUlHLE1BQU0sR0FBR0YsU0FBUyxDQUFDRCxDQUFDLENBQUM7Y0FBRSxLQUFLLElBQUlQLEdBQUcsSUFBSVUsTUFBTSxFQUFFO2dCQUFFLElBQUkxQixNQUFNLENBQUNTLFNBQVMsQ0FBQ2tCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixNQUFNLEVBQUVWLEdBQUcsQ0FBQyxFQUFFO2tCQUFFTSxNQUFNLENBQUNOLEdBQUcsQ0FBQyxHQUFHVSxNQUFNLENBQUNWLEdBQUcsQ0FBQzs7OztZQUFRLE9BQU9NLE1BQU07V0FBRztVQUFFLE9BQU9GLFFBQVEsQ0FBQ1MsS0FBSyxDQUFDLElBQUksRUFBRUwsU0FBUyxDQUFDOztRQUUxVCxTQUFTaUgsUUFBUUEsQ0FBQ0MsS0FBSyxFQUFFO1VBQ3ZCLEtBQUssSUFBSWhHLElBQUksR0FBR2xCLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFSyxPQUFPLEdBQUcsSUFBSUUsS0FBSyxDQUFDVSxJQUFJLEdBQUcsQ0FBQyxHQUFHQSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFQyxJQUFJLEdBQUcsQ0FBQyxFQUFFQSxJQUFJLEdBQUdELElBQUksRUFBRUMsSUFBSSxFQUFFLEVBQUU7WUFDN0diLE9BQU8sQ0FBQ2EsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHbkIsU0FBUyxDQUFDbUIsSUFBSSxDQUFDOztVQUdyQyxJQUFJYixPQUFPLElBQUlBLE9BQU8sQ0FBQ0wsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUNpSCxLQUFLLElBQUksT0FBT0EsS0FBSyxLQUFLLFVBQVUsSUFBSSxPQUFPQSxLQUFLLENBQUNoRCxRQUFRLEtBQUssVUFBVSxFQUFFO2NBQ2pGLE1BQU0sSUFBSWlELFNBQVMsQ0FBQyx5RkFBeUYsQ0FBQzs7WUFHaEgsSUFBSSxPQUFPRCxLQUFLLENBQUNoRCxRQUFRLEtBQUssVUFBVSxFQUFFO2NBQ3hDZ0QsS0FBSyxHQUFHQSxLQUFLLENBQUNoRCxRQUFRO2FBQ3ZCOztZQUdELE9BQU9nRCxLQUFLLENBQUNuQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMxRixLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUVDLE9BQU8sQ0FBQyxDQUFDO1dBQ3ZELE1BQU07WUFDTCxJQUFJLENBQUM0RyxLQUFLLElBQUksT0FBT0EsS0FBSyxDQUFDaEQsUUFBUSxLQUFLLFVBQVUsRUFBRTtjQUNsRCxNQUFNLElBQUlpRCxTQUFTLENBQUMsb0ZBQW9GLENBQUM7O1lBRzNHLE9BQU92SCxRQUFRLENBQUNzSCxLQUFLLEVBQUU7Y0FDckJELFFBQVEsRUFBRUEsUUFBUSxDQUFDRyxJQUFJLENBQUN2RSxTQUFTLEVBQUVxRSxLQUFLO2FBQ3pDLENBQUM7Ozs7OztRQU1PN0ksTUFBTSxDQUFDRixPQUFPO1FBQ2RFLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDaUIsVUFBVTtRQUM1QmYsTUFBTSxDQUFDRixPQUFPLENBQUNrQixPQUFPO01BRWpDLENBQUMsRUFBRSxPQUFPO1FBQ1IsU0FBUyxFQUFFK0I7TUFDYixDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7WUN6RFVpRyxNQUFNLHFCQUFHO1lBMkJUQyxHQUFHLGtCQUFHOzs7Ozs7Ozs7Ozs7O1VDM0JmQztZQUNFdkosWUFBWSwyQkFBR0M7WUFDWCxDQUFDQyxNQUFNLENBQUNGLFlBQVksRUFBRSxVQUFVRyxTQUFPLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUEyQjFGLENBQUMsVUFBVXVJLElBQUksRUFBRVUsT0FBTyxFQUFFQyxVQUFVLEVBQUU7VUFFcEMsSUFBSSxPQUFPQyxNQUFNLEtBQUssV0FBVyxJQUFJLE9BQU94SixNQUFNLEtBQUssVUFBVSxJQUFJQSxNQUFNLENBQUN5SixHQUFHLEVBQUU7WUFBRXpKLE1BQU0sQ0FBQ3VKLFVBQVUsQ0FBQztXQUFFLE1BQU0sSUFBSSxPQUFPcEosTUFBTSxLQUFLLFdBQVcsSUFBSUEsTUFBTSxDQUFDRixPQUFPLEVBQUU7WUFBRUUsTUFBTSxDQUFDRixPQUFPLEdBQUdzSixVQUFVLEVBQUU7V0FBRSxNQUFNLElBQUlELE9BQU8sQ0FBQ3JKLE9BQU8sRUFBRTtZQUFFcUosT0FBTyxDQUFDckosT0FBTyxHQUFHc0osVUFBVSxFQUFFO1dBQUUsTUFBTTtZQUFFRCxPQUFPLENBQUNWLElBQUksQ0FBQyxHQUFHVyxVQUFVLEVBQUU7O1NBQ3JTLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxZQUFZOzs7VUFLbkMsSUFBSSxPQUFPakgsS0FBSyxDQUFDQyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ3hDRCxLQUFLLENBQUNDLE9BQU8sR0FBRyxVQUFVNUIsR0FBRyxFQUFFO2NBQzdCLE9BQU9MLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDdUcsUUFBUSxDQUFDcEYsSUFBSSxDQUFDdkIsR0FBRyxDQUFDLEtBQUssZ0JBQWdCO2FBQ2hFOzs7Ozs7Ozs7VUFTSCxJQUFJK0ksTUFBTSxHQUFHLFNBQUFBLENBQVVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO1lBQzNCRCxDQUFDLEdBQUcsQ0FBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUM1REMsQ0FBQyxHQUFHLENBQUNBLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDNUQsSUFBSUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BCQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUlGLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNuQkEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU07WUFDZEEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJRixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkJDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDbkJBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNO1lBQ2RBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSUYsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUlBLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ25CQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTTtZQUNkQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUlGLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU07WUFDZCxPQUFPLENBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUlBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBSUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1dBQ2xEOzs7Ozs7VUFNRCxJQUFJQyxXQUFXLEdBQUcsU0FBQUEsQ0FBVUgsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7WUFDaENELENBQUMsR0FBRyxDQUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQzVEQyxDQUFDLEdBQUcsQ0FBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUM1RCxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEJBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSUYsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUlBLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ25CQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTTtZQUNkQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUlGLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNuQkEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU07WUFDZEEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJRixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkJDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDbkJBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNO1lBQ2RBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSUYsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUlBLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ25CQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTTtZQUNkQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUlGLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNuQkEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU07WUFDZEEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJRixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkJDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDbkJBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNO1lBQ2RBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBS0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUtELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0MsQ0FBQyxDQUFDLENBQUMsQ0FBRSxHQUFJRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUMsQ0FBQyxDQUFDLENBQUUsR0FBSUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFFO1lBQ3JFQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTTtZ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QUNqSixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUcsRUFBSVAsR0FBRyxDQUFDd0osVUFBVSxDQUFDakosQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFNLENBQUNQLEdBQUcsQ0FBQ3dKLFVBQVUsQ0FBQ2pKLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBRSxHQUFJLENBQUNQLEdBQUcsQ0FBQ3dKLFVBQVUsQ0FBQ2pKLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRyxHQUFJLENBQUNQLEdBQUcsQ0FBQ3dKLFVBQVUsQ0FBQ2pKLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRyxDQUFDO2NBQ3pUOEksRUFBRSxHQUFHLENBQUdySixHQUFHLENBQUN3SixVQUFVLENBQUNqSixDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFNLENBQUNQLEdBQUcsQ0FBQ3dKLFVBQVUsQ0FBQ2pKLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBRSxHQUFJLENBQUNQLEdBQUcsQ0FBQ3dKLFVBQVUsQ0FBQ2pKLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRyxHQUFJLENBQUNQLEdBQUcsQ0FBQ3dKLFVBQVUsQ0FBQ2pKLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRyxFQUFJUCxHQUFHLENBQUN3SixVQUFVLENBQUNqSixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFNLENBQUNQLEdBQUcsQ0FBQ3dKLFVBQVUsQ0FBQ2pKLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBRSxHQUFJLENBQUNQLEdBQUcsQ0FBQ3dKLFVBQVUsQ0FBQ2pKLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRyxHQUFJLENBQUNQLEdBQUcsQ0FBQ3dKLFVBQVUsQ0FBQ2pKLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJ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QUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFDUCxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFDUCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDZixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNmLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ2YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDZixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNmLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ2YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDZixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDbkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ25CLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUNwQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFDcEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQ3BCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUNwQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFDcEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUN4QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3pCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDekIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUN6QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3pCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDekIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUN6QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUM5QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUM5QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUs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WCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQ1osQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztZQUdWLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDYixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOztZQUd0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOztZQUdYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOztZQUd0QixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQ1osQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3RCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDYixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7WUFHdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7WUFHdEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUNaLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOztZQUd0QixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOztZQUd0QixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ2IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3ZCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3ZCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3ZCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3ZCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3ZCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3ZCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3ZCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3hCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNaLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7WUFHdkIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMxQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1osQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOztZQUdaLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3hCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3ZCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3hCLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDM0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3ZCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3hCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDM0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3hCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3hCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDM0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3hCLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDM0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O1lBR3hCLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDZCxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7WUFHeEIsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7WUFHeEIsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7WUFHdkIsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7WUFHeEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7WUFHdkIsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7WUFHeEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7WUFHeEIsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7WUFHeEIsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUs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Q0FBQ0YsT0FBTztRQUNkRSxNQUFNLENBQUNGLE9BQU8sQ0FBQ2lCLFVBQVU7UUFDaENmLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDd0csR0FBRztRQUNmdEcsTUFBTSxDQUFDRixPQUFPLENBQUNtN0IsTUFBTTtRQUN4Qmo3QixNQUFNLENBQUNGLE9BQU8sQ0FBQ29JLEdBQUc7UUFDaEJsSSxNQUFNLENBQUNGLE9BQU8sQ0FBQ3VHLEtBQUs7UUFDdEJyRyxNQUFNLENBQUNGLE9BQU8sQ0FBQ283QixHQUFHO1FBQ2hCbDdCLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDc2IsS0FBSztRQUNYcGIsTUFBTSxDQUFDRixPQUFPLENBQUNxN0IsY0FBYztRQUM1Qm43QixNQUFNLENBQUNGLE9BQU8sQ0FBQ3M3QixlQUFlO01BRWpELENBQUMsRUFBRSxFQUFFLENBQUMiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9janNMb2FkZXIgZnJvbSAnY2NlOi9pbnRlcm5hbC9tbC9janMtbG9hZGVyLm1qcyc7XG5sZXQgX2Nqc0V4cG9ydHM7XG5sZXQgX19fZXNNb2R1bGU7XG5sZXQgX2RlZmF1bHQ7XG5jb25zdCBfX2Nqc01ldGFVUkwgPSBpbXBvcnQubWV0YS51cmw7XG5fY2pzTG9hZGVyLmRlZmluZShfX2Nqc01ldGFVUkwsIGZ1bmN0aW9uIChleHBvcnRzLCByZXF1aXJlLCBtb2R1bGUsIF9fZmlsZW5hbWUsIF9fZGlybmFtZSkge1xuLy8gI3JlZ2lvbiBPUklHSU5BTCBDT0RFXG5cblxuIFwidXNlIHN0cmljdFwiO1xuXG4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICB2YWx1ZTogdHJ1ZVxuIH0pO1xuIGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gYXNFcnJvcjtcblxuIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuIGZ1bmN0aW9uIGFzRXJyb3IoYWN0aW9uKSB7XG4gICBpZiAoX3R5cGVvZihhY3Rpb24pID09PSAnb2JqZWN0JyAmJiBhY3Rpb24gIT09IG51bGwpIHtcbiAgICAgYWN0aW9uLmVycm9yID0gdHJ1ZTtcbiAgIH1cblxuICAgcmV0dXJuIGFjdGlvbjtcbiB9XG5cbiA7XG5cbi8vICNlbmRyZWdpb24gT1JJR0lOQUwgQ09ERVxuXG5fY2pzRXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuX19fZXNNb2R1bGUgPSBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlO1xuX2RlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0O1xuXG59LCB7fSk7XG5leHBvcnQgeyBfY2pzRXhwb3J0cyBhcyBkZWZhdWx0IH07XG5leHBvcnQgeyBfX2Nqc01ldGFVUkwgfVxuIiwiaW1wb3J0IF9janNMb2FkZXIgZnJvbSAnY2NlOi9pbnRlcm5hbC9tbC9janMtbG9hZGVyLm1qcyc7XG5sZXQgX2Nqc0V4cG9ydHM7XG5sZXQgX19fZXNNb2R1bGU7XG5sZXQgX2RlZmF1bHQ7XG5jb25zdCBfX2Nqc01ldGFVUkwgPSBpbXBvcnQubWV0YS51cmw7XG5fY2pzTG9hZGVyLmRlZmluZShfX2Nqc01ldGFVUkwsIGZ1bmN0aW9uIChleHBvcnRzLCByZXF1aXJlLCBtb2R1bGUsIF9fZmlsZW5hbWUsIF9fZGlybmFtZSkge1xuLy8gI3JlZ2lvbiBPUklHSU5BTCBDT0RFXG5cblxuIFwidXNlIHN0cmljdFwiO1xuXG4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICB2YWx1ZTogdHJ1ZVxuIH0pO1xuIGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gYXNzaWduQWxsO1xuXG4gZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuIGZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbiBmdW5jdGlvbiBhc3NpZ25BbGwoYWN0aW9ucywgc3RvcmVzKSB7XG4gICBpZiAoQXJyYXkuaXNBcnJheShhY3Rpb25zKSkge1xuICAgICByZXR1cm4gYWN0aW9ucy5tYXAoZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgIHJldHVybiBhY3Rpb24uYXNzaWduVG8oc3RvcmVzKTtcbiAgICAgfSk7XG4gICB9XG5cbiAgIHJldHVybiBPYmplY3Qua2V5cyhhY3Rpb25zKS5yZWR1Y2UoZnVuY3Rpb24gKGFzc2lnbnMsIGFjdGlvbikge1xuICAgICByZXR1cm4gX2V4dGVuZHMoYXNzaWducywgX2RlZmluZVByb3BlcnR5KHt9LCBhY3Rpb24sIGFjdGlvbnNbYWN0aW9uXS5hc3NpZ25UbyhzdG9yZXMpKSk7XG4gICB9LCB7fSk7XG4gfVxuXG4gO1xuXG4vLyAjZW5kcmVnaW9uIE9SSUdJTkFMIENPREVcblxuX2Nqc0V4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcbl9fX2VzTW9kdWxlID0gbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZTtcbl9kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdDtcblxufSwge30pO1xuZXhwb3J0IHsgX2Nqc0V4cG9ydHMgYXMgZGVmYXVsdCB9O1xuZXhwb3J0IHsgX19janNNZXRhVVJMIH1cbiIsImltcG9ydCBfY2pzTG9hZGVyIGZyb20gJ2NjZTovaW50ZXJuYWwvbWwvY2pzLWxvYWRlci5tanMnO1xuaW1wb3J0IHsgX19janNNZXRhVVJMIGFzIF9yZXF9IGZyb20gJy4vY3JlYXRlQWN0aW9uJztcbmxldCBfY2pzRXhwb3J0cztcbmxldCBfX19lc01vZHVsZTtcbmxldCBfZGVmYXVsdDA7XG5jb25zdCBfX2Nqc01ldGFVUkwgPSBpbXBvcnQubWV0YS51cmw7XG5fY2pzTG9hZGVyLmRlZmluZShfX2Nqc01ldGFVUkwsIGZ1bmN0aW9uIChleHBvcnRzLCByZXF1aXJlLCBtb2R1bGUsIF9fZmlsZW5hbWUsIF9fZGlybmFtZSkge1xuLy8gI3JlZ2lvbiBPUklHSU5BTCBDT0RFXG5cblxuIFwidXNlIHN0cmljdFwiO1xuXG4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICB2YWx1ZTogdHJ1ZVxuIH0pO1xuIGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG4gdmFyIF9jcmVhdGVBY3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NyZWF0ZUFjdGlvblwiKSk7XG5cbiBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuIHZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlQWN0aW9uW1wiZGVmYXVsdFwiXSkoJ0JhdGNoJywgZnVuY3Rpb24gKCkge1xuICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFjdGlvbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgIGFjdGlvbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICB9XG5cbiAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGFjdGlvbnNbMF0pKSB7XG4gICAgIHJldHVybiBhY3Rpb25zWzBdO1xuICAgfVxuXG4gICByZXR1cm4gYWN0aW9ucztcbiB9KTtcblxuIGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbi8vICNlbmRyZWdpb24gT1JJR0lOQUwgQ09ERVxuXG5fY2pzRXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuX19fZXNNb2R1bGUgPSBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlO1xuX2RlZmF1bHQwID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdDtcblxufSwgKCkgPT4gKHtcbiAgJy4vY3JlYXRlQWN0aW9uJzogX3JlcSxcbn0pKTtcbmV4cG9ydCB7IF9janNFeHBvcnRzIGFzIGRlZmF1bHQgfTtcbmV4cG9ydCB7IF9fY2pzTWV0YVVSTCB9XG4iLCJpbXBvcnQgX2Nqc0xvYWRlciBmcm9tICdjY2U6L2ludGVybmFsL21sL2Nqcy1sb2FkZXIubWpzJztcbmxldCBfY2pzRXhwb3J0cztcbmxldCBfX19lc01vZHVsZTtcbmxldCBfZGVmYXVsdDtcbmNvbnN0IF9fY2pzTWV0YVVSTCA9IGltcG9ydC5tZXRhLnVybDtcbl9janNMb2FkZXIuZGVmaW5lKF9fY2pzTWV0YVVSTCwgZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7XG4vLyAjcmVnaW9uIE9SSUdJTkFMIENPREVcblxuXG4gXCJ1c2Ugc3RyaWN0XCI7XG5cbiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgIHZhbHVlOiB0cnVlXG4gfSk7XG4gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBiaW5kQWxsO1xuXG4gZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuIGZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbiBmdW5jdGlvbiBiaW5kQWxsKGFjdGlvbnMsIHN0b3Jlcykge1xuICAgaWYgKEFycmF5LmlzQXJyYXkoYWN0aW9ucykpIHtcbiAgICAgcmV0dXJuIGFjdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICByZXR1cm4gYWN0aW9uLmJpbmRUbyhzdG9yZXMpO1xuICAgICB9KTtcbiAgIH1cblxuICAgcmV0dXJuIE9iamVjdC5rZXlzKGFjdGlvbnMpLnJlZHVjZShmdW5jdGlvbiAoYmluZHMsIGFjdGlvbikge1xuICAgICByZXR1cm4gX2V4dGVuZHMoYmluZHMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYWN0aW9uLCBhY3Rpb25zW2FjdGlvbl0uYmluZFRvKHN0b3JlcykpKTtcbiAgIH0sIHt9KTtcbiB9XG5cbiA7XG5cbi8vICNlbmRyZWdpb24gT1JJR0lOQUwgQ09ERVxuXG5fY2pzRXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuX19fZXNNb2R1bGUgPSBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlO1xuX2RlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0O1xuXG59LCB7fSk7XG5leHBvcnQgeyBfY2pzRXhwb3J0cyBhcyBkZWZhdWx0IH07XG5leHBvcnQgeyBfX2Nqc01ldGFVUkwgfVxuIiwiY2xhc3MgQ2pzTG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0cnkgPSB7fTtcbiAgICAgICAgdGhpcy5fbW9kdWxlQ2FjaGUgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgQ29tbW9uSlMgbW9kdWxlLlxuICAgICAqIEBwYXJhbSBpZCBNb2R1bGUgSUQuXG4gICAgICogQHBhcmFtIGZhY3RvcnkgVGhlIGZhY3RvcnkuXG4gICAgICogQHBhcmFtIHJlc29sdmVNYXAgQW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24gcmV0dXJuaW5nIG9iamVjdCB3aGljaCByZWNvcmRzIHRoZSBtb2R1bGUgc3BlY2lmaWVyIHJlc29sdmUgcmVzdWx0LlxuICAgICAqIFRoZSBsYXRlciBpcyBjYWxsZWQgYXMgXCJkZWZlcnJlZCByZXNvbHZlIG1hcFwiIGFuZCB3b3VsZCBiZSBpbnZvY2F0ZWQgcmlnaHQgYmVmb3JlIENvbW1vbkpTIGNvZGUgZXhlY3V0aW9uLlxuICAgICAqL1xuICAgIGRlZmluZShpZCwgZmFjdG9yeSwgcmVzb2x2ZU1hcCkge1xuICAgICAgICB0aGlzLl9yZWdpc3RyeVtpZF0gPSB7XG4gICAgICAgICAgICBmYWN0b3J5LFxuICAgICAgICAgICAgcmVzb2x2ZU1hcCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXF1aXJlcyBhIENvbW1vbkpTIG1vZHVsZS5cbiAgICAgKiBAcGFyYW0gaWQgTW9kdWxlIElELlxuICAgICAqIEByZXR1cm5zIFRoZSBtb2R1bGUncyBgbW9kdWxlLmV4cG9ydHNgLlxuICAgICAqL1xuICAgIHJlcXVpcmUoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVpcmUoaWQpO1xuICAgIH1cblxuICAgIHRocm93SW52YWxpZFdyYXBwZXIocmVxdWVzdFRhcmdldCwgZnJvbSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1vZHVsZSAnJHtyZXF1ZXN0VGFyZ2V0fScgaW1wb3J0ZWQgZnJvbSAnJHtmcm9tfScgaXMgZXhwZWN0ZWQgYmUgYW4gRVNNLXdyYXBwZWQgQ29tbW9uSlMgbW9kdWxlIGJ1dCBpdCBkb2Vzbid0LmApO1xuICAgIH1cblxuICAgIF9yZXF1aXJlKGlkLCBwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkTW9kdWxlID0gdGhpcy5fbW9kdWxlQ2FjaGVbaWRdO1xuICAgICAgICBpZiAoY2FjaGVkTW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2R1bGUgPSB7IGlkLCBleHBvcnRzOiB7fSB9O1xuICAgICAgICB0aGlzLl9tb2R1bGVDYWNoZVtpZF0gPSBtb2R1bGU7XG4gICAgICAgIHRoaXMuX3RyeU1vZHVsZUxvYWQobW9kdWxlLCBpZCk7XG4gICAgICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiAgICB9XG5cbiAgICBfcmVzb2x2ZShzcGVjaWZpZXIsIHBhcmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZUZyb21JbmZvcyhzcGVjaWZpZXIsIHBhcmVudCkgfHwgdGhpcy5fdGhyb3dVbnJlc29sdmVkKHNwZWNpZmllciwgcGFyZW50KTtcbiAgICB9XG5cbiAgICBfcmVzb2x2ZUZyb21JbmZvcyhzcGVjaWZpZXIsIHBhcmVudCkge1xuICAgICAgICBpZiAoc3BlY2lmaWVyIGluIGNqc0luZm9zKSB7XG4gICAgICAgICAgICByZXR1cm4gc3BlY2lmaWVyO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNqc0luZm9zW3BhcmVudF0/LnJlc29sdmVDYWNoZVtzcGVjaWZpZXJdID8/IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBfdHJ5TW9kdWxlTG9hZChtb2R1bGUsIGlkKSB7XG4gICAgICAgIGxldCB0aHJldyA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkKG1vZHVsZSwgaWQpO1xuICAgICAgICAgICAgdGhyZXcgPSBmYWxzZTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmICh0aHJldykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9tb2R1bGVDYWNoZVtpZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9hZChtb2R1bGUsIGlkKSB7XG4gICAgICAgIGNvbnN0IHsgZmFjdG9yeSwgcmVzb2x2ZU1hcCB9ID0gdGhpcy5fbG9hZFdyYXBwZXIoaWQpO1xuICAgICAgICBjb25zdCB2ZW5kb3JSZXF1aXJlID0gdGhpcy5fY3JlYXRlUmVxdWlyZShtb2R1bGUpO1xuICAgICAgICBjb25zdCByZXF1aXJlID0gcmVzb2x2ZU1hcFxuICAgICAgICAgICAgPyB0aGlzLl9jcmVhdGVSZXF1aXJlV2l0aFJlc29sdmVNYXAodHlwZW9mIHJlc29sdmVNYXAgPT09ICdmdW5jdGlvbicgPyByZXNvbHZlTWFwKCkgOiByZXNvbHZlTWFwLCB2ZW5kb3JSZXF1aXJlKVxuICAgICAgICAgICAgOiB2ZW5kb3JSZXF1aXJlO1xuICAgICAgICBmYWN0b3J5KG1vZHVsZS5leHBvcnRzLCByZXF1aXJlLCBtb2R1bGUpO1xuICAgIH1cblxuICAgIF9sb2FkV3JhcHBlcihpZCkge1xuICAgICAgICBpZiAoaWQgaW4gdGhpcy5fcmVnaXN0cnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyeVtpZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEhvc3RQcm92aWRlZE1vZHVsZXMoaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2xvYWRIb3N0UHJvdmlkZWRNb2R1bGVzKGlkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmYWN0b3J5OiAoX2V4cG9ydHMsIF9yZXF1aXJlLCBtb2R1bGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ3VycmVudCBlbnZpcm9ubWVudCBkb2VzIG5vdCBwcm92aWRlIGEgcmVxdWlyZSgpIGZvciByZXF1aXJpbmcgJyR7aWR9Jy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKGlkKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeGNlcHRpb24gdGhyb3duIHdoZW4gY2FsbGluZyBob3N0IGRlZmluZWQgcmVxdWlyZSgnJHtpZH0nKS5gLCB7IGNhdXNlOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfY3JlYXRlUmVxdWlyZShtb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIChzcGVjaWZpZXIpID0+IHRoaXMuX3JlcXVpcmUoc3BlY2lmaWVyLCBtb2R1bGUpO1xuICAgIH1cblxuICAgIF9jcmVhdGVSZXF1aXJlV2l0aFJlc29sdmVNYXAocmVxdWlyZU1hcCwgb3JpZ2luYWxSZXF1aXJlKSB7XG4gICAgICAgIHJldHVybiAoc3BlY2lmaWVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZCA9IHJlcXVpcmVNYXBbc3BlY2lmaWVyXTtcbiAgICAgICAgICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbFJlcXVpcmUocmVzb2x2ZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VucmVzb2x2ZWQgc3BlY2lmaWVyICcgKyBzcGVjaWZpZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF90aHJvd1VucmVzb2x2ZWQoc3BlY2lmaWVyLCBwYXJlbnRVcmwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gcmVzb2x2ZSAke3NwZWNpZmllcn0gZnJvbSAke3BhcmVudH0uYCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2pzTG9hZGVyKCk7XG4iLCJpbXBvcnQgX2Nqc0xvYWRlciBmcm9tICdjY2U6L2ludGVybmFsL21sL2Nqcy1sb2FkZXIubWpzJztcbmltcG9ydCB7IF9fY2pzTWV0YVVSTCBhcyBfcmVxfSBmcm9tICcuL3R5cGVzJztcbmxldCBfY2pzRXhwb3J0cztcbmxldCBfX19lc01vZHVsZTtcbmxldCBfZGVmYXVsdDtcbmNvbnN0IF9fY2pzTWV0YVVSTCA9IGltcG9ydC5tZXRhLnVybDtcbl9janNMb2FkZXIuZGVmaW5lKF9fY2pzTWV0YVVSTCwgZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7XG4vLyAjcmVnaW9uIE9SSUdJTkFMIENPREVcblxuXG4gXCJ1c2Ugc3RyaWN0XCI7XG5cbiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgIHZhbHVlOiB0cnVlXG4gfSk7XG4gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjcmVhdGVBY3Rpb247XG5cbiB2YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5cbiB2YXIgaWQgPSAwO1xuXG4gdmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gaWRlbnRpdHkoYXJnKSB7XG4gICByZXR1cm4gYXJnO1xuIH07XG5cbiB2YXIgbm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKGRpc3BhdGNoT3JTdG9yZSkge1xuICAgaWYgKGRpc3BhdGNoT3JTdG9yZSAmJiB0eXBlb2YgZGlzcGF0Y2hPclN0b3JlLmRpc3BhdGNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgIHJldHVybiBkaXNwYXRjaE9yU3RvcmUuZGlzcGF0Y2g7XG4gICB9IGVsc2Uge1xuICAgICByZXR1cm4gZGlzcGF0Y2hPclN0b3JlO1xuICAgfVxuIH07XG5cbiB2YXIgbm9ybWFsaXplQWxsID0gZnVuY3Rpb24gbm9ybWFsaXplQWxsKGRpc3BhdGNoT3JTdG9yZXMpIHtcbiAgIGlmIChBcnJheS5pc0FycmF5KGRpc3BhdGNoT3JTdG9yZXMpKSB7XG4gICAgIHJldHVybiBkaXNwYXRjaE9yU3RvcmVzLm1hcChub3JtYWxpemUpO1xuICAgfSBlbHNlIHtcbiAgICAgcmV0dXJuIG5vcm1hbGl6ZShkaXNwYXRjaE9yU3RvcmVzKTtcbiAgIH1cbiB9O1xuXG4gZnVuY3Rpb24gY3JlYXRlQWN0aW9uKGRlc2NyaXB0aW9uLCBwYXlsb2FkUmVkdWNlciwgbWV0YVJlZHVjZXIpIHtcbiAgIGlmICh0eXBlb2YgZGVzY3JpcHRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgbWV0YVJlZHVjZXIgPSBwYXlsb2FkUmVkdWNlcjtcbiAgICAgcGF5bG9hZFJlZHVjZXIgPSBkZXNjcmlwdGlvbjtcbiAgICAgZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICB9XG5cbiAgIGlmICh0eXBlb2YgcGF5bG9hZFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgcGF5bG9hZFJlZHVjZXIgPSBpZGVudGl0eTtcbiAgIH1cblxuICAgaWYgKHR5cGVvZiBtZXRhUmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICBtZXRhUmVkdWNlciA9IHVuZGVmaW5lZDtcbiAgIH1cblxuICAgdmFyIGlzU2VyaWFsaXphYmxlID0gdHlwZW9mIGRlc2NyaXB0aW9uID09PSAnc3RyaW5nJyAmJiAvXlswLTlBLVpfXSskLy50ZXN0KGRlc2NyaXB0aW9uKTtcblxuICAgaWYgKGlzU2VyaWFsaXphYmxlKSB7XG4gICAgICgwLCBfdHlwZXMuY2hlY2spKGRlc2NyaXB0aW9uKTtcbiAgICAgKDAsIF90eXBlcy5hZGQpKGRlc2NyaXB0aW9uKTtcbiAgIH0gZWxzZSB7XG4gICAgICsraWQ7XG4gICB9XG5cbiAgIHZhciB0eXBlID0gaXNTZXJpYWxpemFibGUgPyBkZXNjcmlwdGlvbiA6IFwiW1wiLmNvbmNhdChpZCwgXCJdXCIpLmNvbmNhdChkZXNjcmlwdGlvbiA/ICcgJyArIGRlc2NyaXB0aW9uIDogJycpO1xuICAgdmFyIGRpc3BhdGNoRnVuY3Rpb25zID0gdW5kZWZpbmVkO1xuXG4gICBmdW5jdGlvbiBtYWtlQWN0aW9uKCkge1xuICAgICB2YXIgcGF5bG9hZCA9IHBheWxvYWRSZWR1Y2VyLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcblxuICAgICBpZiAobWV0YVJlZHVjZXIpIHtcbiAgICAgICByZXR1cm4ge1xuICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgICBlcnJvcjogcGF5bG9hZCBpbnN0YW5jZW9mIEVycm9yLFxuICAgICAgICAgbWV0YTogbWV0YVJlZHVjZXIuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpXG4gICAgICAgfTtcbiAgICAgfVxuXG4gICAgIHJldHVybiB7XG4gICAgICAgdHlwZTogdHlwZSxcbiAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgIGVycm9yOiBwYXlsb2FkIGluc3RhbmNlb2YgRXJyb3JcbiAgICAgfTtcbiAgIH1cblxuICAgdmFyIG1ha2VBbmREaXNwYXRjaCA9IGZ1bmN0aW9uIG1ha2VBbmREaXNwYXRjaChkaXNwYXRjaHMsIGlzRXJyb3IpIHtcbiAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICB2YXIgcGF5bG9hZGVkQWN0aW9uID0gbWFrZUFjdGlvbi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG5cbiAgICAgICBpZiAoIXBheWxvYWRlZEFjdGlvbi5lcnJvcikge1xuICAgICAgICAgcGF5bG9hZGVkQWN0aW9uLmVycm9yID0gaXNFcnJvcjtcbiAgICAgICB9XG5cbiAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkaXNwYXRjaHMpKSB7XG4gICAgICAgICByZXR1cm4gZGlzcGF0Y2hzLm1hcChmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHBheWxvYWRlZEFjdGlvbik7XG4gICAgICAgICB9KTtcbiAgICAgICB9IGVsc2UgaWYgKGRpc3BhdGNocykge1xuICAgICAgICAgcmV0dXJuIGRpc3BhdGNocyhwYXlsb2FkZWRBY3Rpb24pO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gcGF5bG9hZGVkQWN0aW9uO1xuICAgICAgIH1cbiAgICAgfTtcbiAgIH07XG5cbiAgIGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3IoKSB7XG4gICAgIHJldHVybiBtYWtlQW5kRGlzcGF0Y2goZGlzcGF0Y2hGdW5jdGlvbnMsIGZhbHNlKS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICB9XG5cbiAgIGFjdGlvbkNyZWF0b3IuYXNFcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgcmV0dXJuIG1ha2VBbmREaXNwYXRjaChkaXNwYXRjaEZ1bmN0aW9ucywgdHJ1ZSkuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgfTtcblxuICAgYWN0aW9uQ3JlYXRvci5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICByZXR1cm4gdHlwZTtcbiAgIH07XG5cbiAgIGFjdGlvbkNyZWF0b3IudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgIHJldHVybiB0eXBlO1xuICAgfTtcblxuICAgYWN0aW9uQ3JlYXRvci5yYXcgPSBtYWtlQWN0aW9uO1xuXG4gICBhY3Rpb25DcmVhdG9yLmFzc2lnblRvID0gZnVuY3Rpb24gKGRpc3BhdGNoT3JTdG9yZXMpIHtcbiAgICAgZGlzcGF0Y2hGdW5jdGlvbnMgPSBub3JtYWxpemVBbGwoZGlzcGF0Y2hPclN0b3Jlcyk7XG4gICAgIHJldHVybiBhY3Rpb25DcmVhdG9yO1xuICAgfTtcblxuICAgYWN0aW9uQ3JlYXRvci5hc3NpZ25lZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgcmV0dXJuICEhZGlzcGF0Y2hGdW5jdGlvbnM7XG4gICB9O1xuXG4gICBhY3Rpb25DcmVhdG9yLmJvdW5kID0gZnVuY3Rpb24gKCkge1xuICAgICByZXR1cm4gZmFsc2U7XG4gICB9O1xuXG4gICBhY3Rpb25DcmVhdG9yLmRpc3BhdGNoZWQgPSBhY3Rpb25DcmVhdG9yLmFzc2lnbmVkO1xuXG4gICBhY3Rpb25DcmVhdG9yLmJpbmRUbyA9IGZ1bmN0aW9uIChkaXNwYXRjaE9yU3RvcmVzKSB7XG4gICAgIHZhciBib3VuZEFjdGlvbkNyZWF0b3IgPSBtYWtlQW5kRGlzcGF0Y2gobm9ybWFsaXplQWxsKGRpc3BhdGNoT3JTdG9yZXMsIGZhbHNlKSk7XG4gICAgIGJvdW5kQWN0aW9uQ3JlYXRvci5hc0Vycm9yID0gbWFrZUFuZERpc3BhdGNoKG5vcm1hbGl6ZUFsbChkaXNwYXRjaE9yU3RvcmVzLCB0cnVlKSk7XG4gICAgIGJvdW5kQWN0aW9uQ3JlYXRvci5yYXcgPSBtYWtlQWN0aW9uO1xuICAgICBib3VuZEFjdGlvbkNyZWF0b3IuZ2V0VHlwZSA9IGFjdGlvbkNyZWF0b3IuZ2V0VHlwZTtcbiAgICAgYm91bmRBY3Rpb25DcmVhdG9yLnRvU3RyaW5nID0gYWN0aW9uQ3JlYXRvci50b1N0cmluZztcblxuICAgICBib3VuZEFjdGlvbkNyZWF0b3IuYXNzaWduVG8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcjtcbiAgICAgfTtcblxuICAgICBib3VuZEFjdGlvbkNyZWF0b3IuYmluZFRvID0gZnVuY3Rpb24gKCkge1xuICAgICAgIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3I7XG4gICAgIH07XG5cbiAgICAgYm91bmRBY3Rpb25DcmVhdG9yLmFzc2lnbmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgfTtcblxuICAgICBib3VuZEFjdGlvbkNyZWF0b3IuYm91bmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgcmV0dXJuIHRydWU7XG4gICAgIH07XG5cbiAgICAgYm91bmRBY3Rpb25DcmVhdG9yLmRpc3BhdGNoZWQgPSBib3VuZEFjdGlvbkNyZWF0b3IuYm91bmQ7XG4gICAgIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3I7XG4gICB9O1xuXG4gICByZXR1cm4gYWN0aW9uQ3JlYXRvcjtcbiB9XG5cbiA7XG5cbi8vICNlbmRyZWdpb24gT1JJR0lOQUwgQ09ERVxuXG5fY2pzRXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuX19fZXNNb2R1bGUgPSBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlO1xuX2RlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0O1xuXG59LCAoKSA9PiAoe1xuICAnLi90eXBlcyc6IF9yZXEsXG59KSk7XG5leHBvcnQgeyBfY2pzRXhwb3J0cyBhcyBkZWZhdWx0IH07XG5leHBvcnQgeyBfX2Nqc01ldGFVUkwgfVxuIiwiaW1wb3J0IF9janNMb2FkZXIgZnJvbSAnY2NlOi9pbnRlcm5hbC9tbC9janMtbG9hZGVyLm1qcyc7XG5pbXBvcnQgeyBfX2Nqc01ldGFVUkwgYXMgX3JlcX0gZnJvbSAnLi9iYXRjaCc7XG5sZXQgX2Nqc0V4cG9ydHM7XG5sZXQgX19fZXNNb2R1bGU7XG5sZXQgX2RlZmF1bHQ7XG5jb25zdCBfX2Nqc01ldGFVUkwgPSBpbXBvcnQubWV0YS51cmw7XG5fY2pzTG9hZGVyLmRlZmluZShfX2Nqc01ldGFVUkwsIGZ1bmN0aW9uIChleHBvcnRzLCByZXF1aXJlLCBtb2R1bGUsIF9fZmlsZW5hbWUsIF9fZGlybmFtZSkge1xuLy8gI3JlZ2lvbiBPUklHSU5BTCBDT0RFXG5cblxuIFwidXNlIHN0cmljdFwiO1xuXG4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICB2YWx1ZTogdHJ1ZVxuIH0pO1xuIGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3JlYXRlUmVkdWNlcjtcblxuIHZhciBfYmF0Y2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2JhdGNoXCIpKTtcblxuIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4gZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuIGZ1bmN0aW9uIG5vcm1hbGl6ZVR5cGUodHlwZU9yQWN0aW9uQ3JlYXRvcikge1xuICAgaWYgKHR5cGVPckFjdGlvbkNyZWF0b3IgJiYgdHlwZU9yQWN0aW9uQ3JlYXRvci5nZXRUeXBlKSB7XG4gICAgIHJldHVybiB0eXBlT3JBY3Rpb25DcmVhdG9yLnRvU3RyaW5nKCk7XG4gICB9XG5cbiAgIHJldHVybiB0eXBlT3JBY3Rpb25DcmVhdG9yO1xuIH1cblxuIGZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXIoKSB7XG4gICB2YXIgaGFuZGxlcnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgdmFyIGRlZmF1bHRTdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgdmFyIG9wdHMgPSB7XG4gICAgIHBheWxvYWQ6IHRydWUsXG4gICAgIGZhbGxiYWNrOiBudWxsXG4gICB9O1xuXG4gICB2YXIgcmVkdWNlciA9IF9leHRlbmRzKHJlZHVjZSwge1xuICAgICBoYXM6IGhhcyxcbiAgICAgb246IG9uLFxuICAgICBvZmY6IG9mZixcbiAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgfSk7XG5cbiAgIGZ1bmN0aW9uIGhhcyh0eXBlT3JBY3Rpb25DcmVhdG9yKSB7XG4gICAgIHJldHVybiAhIWhhbmRsZXJzW25vcm1hbGl6ZVR5cGUodHlwZU9yQWN0aW9uQ3JlYXRvcildO1xuICAgfVxuXG4gICBmdW5jdGlvbiBvbih0eXBlT3JBY3Rpb25DcmVhdG9yLCBoYW5kbGVyKSB7XG4gICAgIGlmIChBcnJheS5pc0FycmF5KHR5cGVPckFjdGlvbkNyZWF0b3IpKSB7XG4gICAgICAgdHlwZU9yQWN0aW9uQ3JlYXRvci5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgIG9uKGFjdGlvbiwgaGFuZGxlcik7XG4gICAgICAgfSk7XG4gICAgIH0gZWxzZSB7XG4gICAgICAgaGFuZGxlcnNbbm9ybWFsaXplVHlwZSh0eXBlT3JBY3Rpb25DcmVhdG9yKV0gPSBoYW5kbGVyO1xuICAgICB9XG5cbiAgICAgcmV0dXJuIHJlZHVjZXI7XG4gICB9XG5cbiAgIGZ1bmN0aW9uIG9mZih0eXBlT3JBY3Rpb25DcmVhdG9yKSB7XG4gICAgIGlmIChBcnJheS5pc0FycmF5KHR5cGVPckFjdGlvbkNyZWF0b3IpKSB7XG4gICAgICAgdHlwZU9yQWN0aW9uQ3JlYXRvci5mb3JFYWNoKG9mZik7XG4gICAgIH0gZWxzZSB7XG4gICAgICAgZGVsZXRlIGhhbmRsZXJzW25vcm1hbGl6ZVR5cGUodHlwZU9yQWN0aW9uQ3JlYXRvcildO1xuICAgICB9XG5cbiAgICAgcmV0dXJuIHJlZHVjZXI7XG4gICB9XG5cbiAgIGZ1bmN0aW9uIG9wdGlvbnMobmV3T3B0cykge1xuICAgICBPYmplY3Qua2V5cyhuZXdPcHRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgcmV0dXJuIG9wdHNbbmFtZV0gPSBuZXdPcHRzW25hbWVdO1xuICAgICB9KTtcbiAgICAgcmV0dXJuIHJlZHVjZXI7XG4gICB9XG5cbiAgIGlmICh0eXBlb2YgaGFuZGxlcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgdmFyIGZhY3RvcnkgPSBoYW5kbGVycztcbiAgICAgaGFuZGxlcnMgPSB7fTtcbiAgICAgZmFjdG9yeShvbiwgb2ZmKTtcbiAgIH1cblxuICAgaWYgKCFoYXMoX2JhdGNoW1wiZGVmYXVsdFwiXSkpIHtcbiAgICAgb24oX2JhdGNoW1wiZGVmYXVsdFwiXSwgZnVuY3Rpb24gKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgICAgaWYgKG9wdHMucGF5bG9hZCkge1xuICAgICAgICAgcmV0dXJuIHBheWxvYWQucmVkdWNlKHJlZHVjZSwgc3RhdGUpO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gcGF5bG9hZC5wYXlsb2FkLnJlZHVjZShyZWR1Y2UsIHN0YXRlKTtcbiAgICAgICB9XG4gICAgIH0pO1xuICAgfVxuXG4gICBmdW5jdGlvbiByZWR1Y2UoKSB7XG4gICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZGVmYXVsdFN0YXRlO1xuICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgICAgaWYgKCFhY3Rpb24gfHwgdHlwZW9mIGFjdGlvbi50eXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgfVxuXG4gICAgIGlmIChhY3Rpb24udHlwZS5zdGFydHNXaXRoKCdAQHJlZHV4LycpKSB7XG4gICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICB9XG5cbiAgICAgdmFyIGhhbmRsZXIgPSBoYW5kbGVyc1thY3Rpb24udHlwZV0gfHwgb3B0cy5mYWxsYmFjaztcblxuICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgIGlmIChvcHRzLnBheWxvYWQpIHtcbiAgICAgICAgIHJldHVybiBoYW5kbGVyKHN0YXRlLCBhY3Rpb24ucGF5bG9hZCwgYWN0aW9uLm1ldGEpO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gaGFuZGxlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgICB9XG4gICAgIH1cblxuICAgICByZXR1cm4gc3RhdGU7XG4gICB9XG5cbiAgIDtcbiAgIHJldHVybiByZWR1Y2VyO1xuIH1cblxuIDtcblxuLy8gI2VuZHJlZ2lvbiBPUklHSU5BTCBDT0RFXG5cbl9janNFeHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5fX19lc01vZHVsZSA9IG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGU7XG5fZGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQ7XG5cbn0sICgpID0+ICh7XG4gICcuL2JhdGNoJzogX3JlcSxcbn0pKTtcbmV4cG9ydCB7IF9janNFeHBvcnRzIGFzIGRlZmF1bHQgfTtcbmV4cG9ydCB7IF9fY2pzTWV0YVVSTCB9XG4iLCJpbXBvcnQgX2Nqc0xvYWRlciBmcm9tICdjY2U6L2ludGVybmFsL21sL2Nqcy1sb2FkZXIubWpzJztcbmltcG9ydCB7IF9fY2pzTWV0YVVSTCBhcyBfcmVxfSBmcm9tICcuL2JhdGNoJztcbmxldCBfY2pzRXhwb3J0cztcbmxldCBfX19lc01vZHVsZTtcbmxldCBfZGVmYXVsdDtcbmNvbnN0IF9fY2pzTWV0YVVSTCA9IGltcG9ydC5tZXRhLnVybDtcbl9janNMb2FkZXIuZGVmaW5lKF9fY2pzTWV0YVVSTCwgZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7XG4vLyAjcmVnaW9uIE9SSUdJTkFMIENPREVcblxuXG4gXCJ1c2Ugc3RyaWN0XCI7XG5cbiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgIHZhbHVlOiB0cnVlXG4gfSk7XG4gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBkaXNiYXRjaDtcblxuIHZhciBfYmF0Y2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2JhdGNoXCIpKTtcblxuIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4gZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuIGZ1bmN0aW9uIGRpc2JhdGNoKHN0b3JlKSB7XG4gICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYWN0aW9ucyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgIGFjdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgfVxuXG4gICBpZiAoYWN0aW9ucyAmJiBhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgaWYgKCFzdG9yZSB8fCB0eXBlb2Ygc3RvcmUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHN0b3JlLmRpc3BhdGNoICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGlzYmF0Y2ggbXVzdCB0YWtlIGVpdGhlciBhIHZhbGlkIFJlZHV4IHN0b3JlIG9yIGEgZGlzcGF0Y2ggZnVuY3Rpb24gYXMgZmlyc3QgcGFyYW1ldGVyJyk7XG4gICAgIH1cblxuICAgICBpZiAodHlwZW9mIHN0b3JlLmRpc3BhdGNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgc3RvcmUgPSBzdG9yZS5kaXNwYXRjaDtcbiAgICAgfSAvLyBzdG9yZSBpcyBhY3R1YWxseSB0aGUgZGlzcGF0Y2ggZnVuY3Rpb24gaGVyZVxuXG5cbiAgICAgcmV0dXJuIHN0b3JlKF9iYXRjaFtcImRlZmF1bHRcIl0uYXBwbHkodm9pZCAwLCBhY3Rpb25zKSk7XG4gICB9IGVsc2Uge1xuICAgICBpZiAoIXN0b3JlIHx8IHR5cGVvZiBzdG9yZS5kaXNwYXRjaCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Rpc2JhdGNoIG11c3QgdGFrZSBhIHZhbGlkIFJlZHV4IHN0b3JlIHdpdGggYSBkaXNwYXRjaCBmdW5jdGlvbiBhcyBmaXJzdCBwYXJhbWV0ZXInKTtcbiAgICAgfVxuXG4gICAgIHJldHVybiBfZXh0ZW5kcyhzdG9yZSwge1xuICAgICAgIGRpc2JhdGNoOiBkaXNiYXRjaC5iaW5kKHVuZGVmaW5lZCwgc3RvcmUpXG4gICAgIH0pO1xuICAgfVxuIH1cblxuLy8gI2VuZHJlZ2lvbiBPUklHSU5BTCBDT0RFXG5cbl9janNFeHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5fX19lc01vZHVsZSA9IG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGU7XG5fZGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQ7XG5cbn0sICgpID0+ICh7XG4gICcuL2JhdGNoJzogX3JlcSxcbn0pKTtcbmV4cG9ydCB7IF9janNFeHBvcnRzIGFzIGRlZmF1bHQgfTtcbmV4cG9ydCB7IF9fY2pzTWV0YVVSTCB9XG4iLCJleHBvcnQgY29uc3QgSFRNTDUgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBOQVRJVkUgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IEFORFJPSUQgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IElPUyA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IE1BQyA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IFdJTkRPV1MgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBMSU5VWCA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IE9IT1MgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBPUEVOX0hBUk1PTlkgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBXRUNIQVQgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBXRUNIQVRfTUlOSV9QUk9HUkFNID0gZmFsc2U7XG5leHBvcnQgY29uc3QgWElBT01JID0gZmFsc2U7XG5leHBvcnQgY29uc3QgQUxJUEFZID0gZmFsc2U7XG5leHBvcnQgY29uc3QgVEFPQkFPID0gZmFsc2U7XG5leHBvcnQgY29uc3QgVEFPQkFPX01JTklHQU1FID0gZmFsc2U7XG5leHBvcnQgY29uc3QgQllURURBTkNFID0gZmFsc2U7XG5leHBvcnQgY29uc3QgT1BQTyA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IFZJVk8gPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBIVUFXRUkgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBNSUdVID0gZmFsc2U7XG5leHBvcnQgY29uc3QgSE9OT1IgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBDT0NPU19SVU5USU1FID0gZmFsc2U7XG5leHBvcnQgY29uc3QgRURJVE9SID0gZmFsc2U7XG5leHBvcnQgY29uc3QgRURJVE9SX05PVF9JTl9QUkVWSUVXID0gZmFsc2U7XG5leHBvcnQgY29uc3QgUFJFVklFVyA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IEJVSUxEID0gdHJ1ZTtcbmV4cG9ydCBjb25zdCBURVNUID0gZmFsc2U7XG5leHBvcnQgY29uc3QgREVCVUcgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IERFViA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IE1JTklHQU1FID0gZmFsc2U7XG5leHBvcnQgY29uc3QgUlVOVElNRV9CQVNFRCA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IFNVUFBPUlRfSklUID0gdHJ1ZTtcbmV4cG9ydCBjb25zdCBKU0IgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IE5FVF9NT0RFID0gMDsiLCJpbXBvcnQgX2Nqc0xvYWRlciBmcm9tICdjY2U6L2ludGVybmFsL21sL2Nqcy1sb2FkZXIubWpzJztcbmxldCBfY2pzRXhwb3J0cztcbmNvbnN0IF9fY2pzTWV0YVVSTCA9IGltcG9ydC5tZXRhLnVybDtcbl9janNMb2FkZXIuZGVmaW5lKF9fY2pzTWV0YVVSTCwgZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7XG4vLyAjcmVnaW9uIE9SSUdJTkFMIENPREVcblxuXG4gLypcbiAqIEZpbmdlcnByaW50anMyIDIuMS40IC0gTW9kZXJuICYgZmxleGlibGUgYnJvd3NlciBmaW5nZXJwcmludCBsaWJyYXJ5IHYyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmluZ2VycHJpbnRqcy9maW5nZXJwcmludGpzXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVmFsZW50aW4gVmFzaWx5ZXYgKHZhbGVudGluQGZpbmdlcnByaW50anMuY29tKVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApIGxpY2Vuc2UuXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiAqIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiAqIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4gKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVkFMRU5USU4gVkFTSUxZRVYgQkUgTElBQkxFIEZPUiBBTllcbiAqIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTXG4gKiAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7XG4gKiBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkRcbiAqIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4gKiAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0ZcbiAqIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbiAvKlxuICogVGhpcyBzb2Z0d2FyZSBjb250YWlucyBjb2RlIGZyb20gb3Blbi1zb3VyY2UgcHJvamVjdHM6XG4gKiBNdXJtdXJIYXNoMyBieSBLYXJhbiBMeW9ucyAoaHR0cHM6Ly9naXRodWIuY29tL2thcmFubHlvbnMvbXVybXVySGFzaDMuanMpXG4gKi9cblxuIC8qIGdsb2JhbCBkZWZpbmUgKi9cbiAoZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQsIGRlZmluaXRpb24pIHtcbiAgICd1c2Ugc3RyaWN0J1xuICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgeyBkZWZpbmUoZGVmaW5pdGlvbikgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgeyBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKSB9IGVsc2UgaWYgKGNvbnRleHQuZXhwb3J0cykgeyBjb250ZXh0LmV4cG9ydHMgPSBkZWZpbml0aW9uKCkgfSBlbHNlIHsgY29udGV4dFtuYW1lXSA9IGRlZmluaXRpb24oKSB9XG4gfSkoJ0ZpbmdlcnByaW50MicsIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICd1c2Ugc3RyaWN0J1xuXG4gICAvLyBkZXRlY3QgaWYgb2JqZWN0IGlzIGFycmF5XG4gICAvLyBvbmx5IGltcGxlbWVudCBpZiBubyBuYXRpdmUgaW1wbGVtZW50YXRpb24gaXMgYXZhaWxhYmxlXG4gICBpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nXG4gICAgIH1cbiAgIH07XG5cbiAgIC8vLyBNdXJtdXJIYXNoMyByZWxhdGVkIGZ1bmN0aW9uc1xuXG4gICAvL1xuICAgLy8gR2l2ZW4gdHdvIDY0Yml0IGludHMgKGFzIGFuIGFycmF5IG9mIHR3byAzMmJpdCBpbnRzKSByZXR1cm5zIHRoZSB0d29cbiAgIC8vIGFkZGVkIHRvZ2V0aGVyIGFzIGEgNjRiaXQgaW50IChhcyBhbiBhcnJheSBvZiB0d28gMzJiaXQgaW50cykuXG4gICAvL1xuICAgdmFyIHg2NEFkZCA9IGZ1bmN0aW9uIChtLCBuKSB7XG4gICAgIG0gPSBbbVswXSA+Pj4gMTYsIG1bMF0gJiAweGZmZmYsIG1bMV0gPj4+IDE2LCBtWzFdICYgMHhmZmZmXVxuICAgICBuID0gW25bMF0gPj4+IDE2LCBuWzBdICYgMHhmZmZmLCBuWzFdID4+PiAxNiwgblsxXSAmIDB4ZmZmZl1cbiAgICAgdmFyIG8gPSBbMCwgMCwgMCwgMF1cbiAgICAgb1szXSArPSBtWzNdICsgblszXVxuICAgICBvWzJdICs9IG9bM10gPj4+IDE2XG4gICAgIG9bM10gJj0gMHhmZmZmXG4gICAgIG9bMl0gKz0gbVsyXSArIG5bMl1cbiAgICAgb1sxXSArPSBvWzJdID4+PiAxNlxuICAgICBvWzJdICY9IDB4ZmZmZlxuICAgICBvWzFdICs9IG1bMV0gKyBuWzFdXG4gICAgIG9bMF0gKz0gb1sxXSA+Pj4gMTZcbiAgICAgb1sxXSAmPSAweGZmZmZcbiAgICAgb1swXSArPSBtWzBdICsgblswXVxuICAgICBvWzBdICY9IDB4ZmZmZlxuICAgICByZXR1cm4gWyhvWzBdIDw8IDE2KSB8IG9bMV0sIChvWzJdIDw8IDE2KSB8IG9bM11dXG4gICB9XG5cbiAgIC8vXG4gICAvLyBHaXZlbiB0d28gNjRiaXQgaW50cyAoYXMgYW4gYXJyYXkgb2YgdHdvIDMyYml0IGludHMpIHJldHVybnMgdGhlIHR3b1xuICAgLy8gbXVsdGlwbGllZCB0b2dldGhlciBhcyBhIDY0Yml0IGludCAoYXMgYW4gYXJyYXkgb2YgdHdvIDMyYml0IGludHMpLlxuICAgLy9cbiAgIHZhciB4NjRNdWx0aXBseSA9IGZ1bmN0aW9uIChtLCBuKSB7XG4gICAgIG0gPSBbbVswXSA+Pj4gMTYsIG1bMF0gJiAweGZmZmYsIG1bMV0gPj4+IDE2LCBtWzFdICYgMHhmZmZmXVxuICAgICBuID0gW25bMF0gPj4+IDE2LCBuWzBdICYgMHhmZmZmLCBuWzFdID4+PiAxNiwgblsxXSAmIDB4ZmZmZl1cbiAgICAgdmFyIG8gPSBbMCwgMCwgMCwgMF1cbiAgICAgb1szXSArPSBtWzNdICogblszXVxuICAgICBvWzJdICs9IG9bM10gPj4+IDE2XG4gICAgIG9bM10gJj0gMHhmZmZmXG4gICAgIG9bMl0gKz0gbVsyXSAqIG5bM11cbiAgICAgb1sxXSArPSBvWzJdID4+PiAxNlxuICAgICBvWzJdICY9IDB4ZmZmZlxuICAgICBvWzJdICs9IG1bM10gKiBuWzJdXG4gICAgIG9bMV0gKz0gb1syXSA+Pj4gMTZcbiAgICAgb1syXSAmPSAweGZmZmZcbiAgICAgb1sxXSArPSBtWzFdICogblszXVxuICAgICBvWzBdICs9IG9bMV0gPj4+IDE2XG4gICAgIG9bMV0gJj0gMHhmZmZmXG4gICAgIG9bMV0gKz0gbVsyXSAqIG5bMl1cbiAgICAgb1swXSArPSBvWzFdID4+PiAxNlxuICAgICBvWzFdICY9IDB4ZmZmZlxuICAgICBvWzFdICs9IG1bM10gKiBuWzFdXG4gICAgIG9bMF0gKz0gb1sxXSA+Pj4gMTZcbiAgICAgb1sxXSAmPSAweGZmZmZcbiAgICAgb1swXSArPSAobVswXSAqIG5bM10pICsgKG1bMV0gKiBuWzJdKSArIChtWzJdICogblsxXSkgKyAobVszXSAqIG5bMF0pXG4gICAgIG9bMF0gJj0gMHhmZmZmXG4gICAgIHJldHVybiBbKG9bMF0gPDwgMTYpIHwgb1sxXSwgKG9bMl0gPDwgMTYpIHwgb1szXV1cbiAgIH1cbiAgIC8vXG4gICAvLyBHaXZlbiBhIDY0Yml0IGludCAoYXMgYW4gYXJyYXkgb2YgdHdvIDMyYml0IGludHMpIGFuZCBhbiBpbnRcbiAgIC8vIHJlcHJlc2VudGluZyBhIG51bWJlciBvZiBiaXQgcG9zaXRpb25zLCByZXR1cm5zIHRoZSA2NGJpdCBpbnQgKGFzIGFuXG4gICAvLyBhcnJheSBvZiB0d28gMzJiaXQgaW50cykgcm90YXRlZCBsZWZ0IGJ5IHRoYXQgbnVtYmVyIG9mIHBvc2l0aW9ucy5cbiAgIC8vXG4gICB2YXIgeDY0Um90bCA9IGZ1bmN0aW9uIChtLCBuKSB7XG4gICAgIG4gJT0gNjRcbiAgICAgaWYgKG4gPT09IDMyKSB7XG4gICAgICAgcmV0dXJuIFttWzFdLCBtWzBdXVxuICAgICB9IGVsc2UgaWYgKG4gPCAzMikge1xuICAgICAgIHJldHVybiBbKG1bMF0gPDwgbikgfCAobVsxXSA+Pj4gKDMyIC0gbikpLCAobVsxXSA8PCBuKSB8IChtWzBdID4+PiAoMzIgLSBuKSldXG4gICAgIH0gZWxzZSB7XG4gICAgICAgbiAtPSAzMlxuICAgICAgIHJldHVybiBbKG1bMV0gPDwgbikgfCAobVswXSA+Pj4gKDMyIC0gbikpLCAobVswXSA8PCBuKSB8IChtWzFdID4+PiAoMzIgLSBuKSldXG4gICAgIH1cbiAgIH1cbiAgIC8vXG4gICAvLyBHaXZlbiBhIDY0Yml0IGludCAoYXMgYW4gYXJyYXkgb2YgdHdvIDMyYml0IGludHMpIGFuZCBhbiBpbnRcbiAgIC8vIHJlcHJlc2VudGluZyBhIG51bWJlciBvZiBiaXQgcG9zaXRpb25zLCByZXR1cm5zIHRoZSA2NGJpdCBpbnQgKGFzIGFuXG4gICAvLyBhcnJheSBvZiB0d28gMzJiaXQgaW50cykgc2hpZnRlZCBsZWZ0IGJ5IHRoYXQgbnVtYmVyIG9mIHBvc2l0aW9ucy5cbiAgIC8vXG4gICB2YXIgeDY0TGVmdFNoaWZ0ID0gZnVuY3Rpb24gKG0sIG4pIHtcbiAgICAgbiAlPSA2NFxuICAgICBpZiAobiA9PT0gMCkge1xuICAgICAgIHJldHVybiBtXG4gICAgIH0gZWxzZSBpZiAobiA8IDMyKSB7XG4gICAgICAgcmV0dXJuIFsobVswXSA8PCBuKSB8IChtWzFdID4+PiAoMzIgLSBuKSksIG1bMV0gPDwgbl1cbiAgICAgfSBlbHNlIHtcbiAgICAgICByZXR1cm4gW21bMV0gPDwgKG4gLSAzMiksIDBdXG4gICAgIH1cbiAgIH1cbiAgIC8vXG4gICAvLyBHaXZlbiB0d28gNjRiaXQgaW50cyAoYXMgYW4gYXJyYXkgb2YgdHdvIDMyYml0IGludHMpIHJldHVybnMgdGhlIHR3b1xuICAgLy8geG9yZWQgdG9nZXRoZXIgYXMgYSA2NGJpdCBpbnQgKGFzIGFuIGFycmF5IG9mIHR3byAzMmJpdCBpbnRzKS5cbiAgIC8vXG4gICB2YXIgeDY0WG9yID0gZnVuY3Rpb24gKG0sIG4pIHtcbiAgICAgcmV0dXJuIFttWzBdIF4gblswXSwgbVsxXSBeIG5bMV1dXG4gICB9XG4gICAvL1xuICAgLy8gR2l2ZW4gYSBibG9jaywgcmV0dXJucyBtdXJtdXJIYXNoMydzIGZpbmFsIHg2NCBtaXggb2YgdGhhdCBibG9jay5cbiAgIC8vIChgWzAsIGhbMF0gPj4+IDFdYCBpcyBhIDMzIGJpdCB1bnNpZ25lZCByaWdodCBzaGlmdC4gVGhpcyBpcyB0aGVcbiAgIC8vIG9ubHkgcGxhY2Ugd2hlcmUgd2UgbmVlZCB0byByaWdodCBzaGlmdCA2NGJpdCBpbnRzLilcbiAgIC8vXG4gICB2YXIgeDY0Rm1peCA9IGZ1bmN0aW9uIChoKSB7XG4gICAgIGggPSB4NjRYb3IoaCwgWzAsIGhbMF0gPj4+IDFdKVxuICAgICBoID0geDY0TXVsdGlwbHkoaCwgWzB4ZmY1MWFmZDcsIDB4ZWQ1NThjY2RdKVxuICAgICBoID0geDY0WG9yKGgsIFswLCBoWzBdID4+PiAxXSlcbiAgICAgaCA9IHg2NE11bHRpcGx5KGgsIFsweGM0Y2ViOWZlLCAweDFhODVlYzUzXSlcbiAgICAgaCA9IHg2NFhvcihoLCBbMCwgaFswXSA+Pj4gMV0pXG4gICAgIHJldHVybiBoXG4gICB9XG5cbiAgIC8vXG4gICAvLyBHaXZlbiBhIHN0cmluZyBhbmQgYW4gb3B0aW9uYWwgc2VlZCBhcyBhbiBpbnQsIHJldHVybnMgYSAxMjggYml0XG4gICAvLyBoYXNoIHVzaW5nIHRoZSB4NjQgZmxhdm9yIG9mIE11cm11ckhhc2gzLCBhcyBhbiB1bnNpZ25lZCBoZXguXG4gICAvL1xuICAgdmFyIHg2NGhhc2gxMjggPSBmdW5jdGlvbiAoa2V5LCBzZWVkKSB7XG4gICAgIGtleSA9IGtleSB8fCAnJ1xuICAgICBzZWVkID0gc2VlZCB8fCAwXG4gICAgIHZhciByZW1haW5kZXIgPSBrZXkubGVuZ3RoICUgMTZcbiAgICAgdmFyIGJ5dGVzID0ga2V5Lmxlbmd0aCAtIHJlbWFpbmRlclxuICAgICB2YXIgaDEgPSBbMCwgc2VlZF1cbiAgICAgdmFyIGgyID0gWzAsIHNlZWRdXG4gICAgIHZhciBrMSA9IFswLCAwXVxuICAgICB2YXIgazIgPSBbMCwgMF1cbiAgICAgdmFyIGMxID0gWzB4ODdjMzdiOTEsIDB4MTE0MjUzZDVdXG4gICAgIHZhciBjMiA9IFsweDRjZjVhZDQzLCAweDI3NDU5MzdmXVxuICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzOyBpID0gaSArIDE2KSB7XG4gICAgICAgazEgPSBbKChrZXkuY2hhckNvZGVBdChpICsgNCkgJiAweGZmKSkgfCAoKGtleS5jaGFyQ29kZUF0KGkgKyA1KSAmIDB4ZmYpIDw8IDgpIHwgKChrZXkuY2hhckNvZGVBdChpICsgNikgJiAweGZmKSA8PCAxNikgfCAoKGtleS5jaGFyQ29kZUF0KGkgKyA3KSAmIDB4ZmYpIDw8IDI0KSwgKChrZXkuY2hhckNvZGVBdChpKSAmIDB4ZmYpKSB8ICgoa2V5LmNoYXJDb2RlQXQoaSArIDEpICYgMHhmZikgPDwgOCkgfCAoKGtleS5jaGFyQ29kZUF0KGkgKyAyKSAmIDB4ZmYpIDw8IDE2KSB8ICgoa2V5LmNoYXJDb2RlQXQoaSArIDMpICYgMHhmZikgPDwgMjQpXVxuICAgICAgIGsyID0gWygoa2V5LmNoYXJDb2RlQXQoaSArIDEyKSAmIDB4ZmYpKSB8ICgoa2V5LmNoYXJDb2RlQXQoaSArIDEzKSAmIDB4ZmYpIDw8IDgpIHwgKChrZXkuY2hhckNvZGVBdChpICsgMTQpICYgMHhmZikgPDwgMTYpIHwgKChrZXkuY2hhckNvZGVBdChpICsgMTUpICYgMHhmZikgPDwgMjQpLCAoKGtleS5jaGFyQ29kZUF0KGkgKyA4KSAmIDB4ZmYpKSB8ICgoa2V5LmNoYXJDb2RlQXQoaSArIDkpICYgMHhmZikgPDwgOCkgfCAoKGtleS5jaGFyQ29kZUF0KGkgKyAxMCkgJiAweGZmKSA8PCAxNikgfCAoKGtleS5jaGFyQ29kZUF0KGkgKyAxMSkgJiAweGZmKSA8PCAyNCldXG4gICAgICAgazEgPSB4NjRNdWx0aXBseShrMSwgYzEpXG4gICAgICAgazEgPSB4NjRSb3RsKGsxLCAzMSlcbiAgICAgICBrMSA9IHg2NE11bHRpcGx5KGsxLCBjMilcbiAgICAgICBoMSA9IHg2NFhvcihoMSwgazEpXG4gICAgICAgaDEgPSB4NjRSb3RsKGgxLCAyNylcbiAgICAgICBoMSA9IHg2NEFkZChoMSwgaDIpXG4gICAgICAgaDEgPSB4NjRBZGQoeDY0TXVsdGlwbHkoaDEsIFswLCA1XSksIFswLCAweDUyZGNlNzI5XSlcbiAgICAgICBrMiA9IHg2NE11bHRpcGx5KGsyLCBjMilcbiAgICAgICBrMiA9IHg2NFJvdGwoazIsIDMzKVxuICAgICAgIGsyID0geDY0TXVsdGlwbHkoazIsIGMxKVxuICAgICAgIGgyID0geDY0WG9yKGgyLCBrMilcbiAgICAgICBoMiA9IHg2NFJvdGwoaDIsIDMxKVxuICAgICAgIGgyID0geDY0QWRkKGgyLCBoMSlcbiAgICAgICBoMiA9IHg2NEFkZCh4NjRNdWx0aXBseShoMiwgWzAsIDVdKSwgWzAsIDB4Mzg0OTVhYjVdKVxuICAgICB9XG4gICAgIGsxID0gWzAsIDBdXG4gICAgIGsyID0gWzAsIDBdXG4gICAgIHN3aXRjaCAocmVtYWluZGVyKSB7XG4gICAgICAgY2FzZSAxNTpcbiAgICAgICAgIGsyID0geDY0WG9yKGsyLCB4NjRMZWZ0U2hpZnQoWzAsIGtleS5jaGFyQ29kZUF0KGkgKyAxNCldLCA0OCkpXG4gICAgICAgLy8gZmFsbHRocm91Z2hcbiAgICAgICBjYXNlIDE0OlxuICAgICAgICAgazIgPSB4NjRYb3IoazIsIHg2NExlZnRTaGlmdChbMCwga2V5LmNoYXJDb2RlQXQoaSArIDEzKV0sIDQwKSlcbiAgICAgICAvLyBmYWxsdGhyb3VnaFxuICAgICAgIGNhc2UgMTM6XG4gICAgICAgICBrMiA9IHg2NFhvcihrMiwgeDY0TGVmdFNoaWZ0KFswLCBrZXkuY2hhckNvZGVBdChpICsgMTIpXSwgMzIpKVxuICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgY2FzZSAxMjpcbiAgICAgICAgIGsyID0geDY0WG9yKGsyLCB4NjRMZWZ0U2hpZnQoWzAsIGtleS5jaGFyQ29kZUF0KGkgKyAxMSldLCAyNCkpXG4gICAgICAgLy8gZmFsbHRocm91Z2hcbiAgICAgICBjYXNlIDExOlxuICAgICAgICAgazIgPSB4NjRYb3IoazIsIHg2NExlZnRTaGlmdChbMCwga2V5LmNoYXJDb2RlQXQoaSArIDEwKV0sIDE2KSlcbiAgICAgICAvLyBmYWxsdGhyb3VnaFxuICAgICAgIGNhc2UgMTA6XG4gICAgICAgICBrMiA9IHg2NFhvcihrMiwgeDY0TGVmdFNoaWZ0KFswLCBrZXkuY2hhckNvZGVBdChpICsgOSldLCA4KSlcbiAgICAgICAvLyBmYWxsdGhyb3VnaFxuICAgICAgIGNhc2UgOTpcbiAgICAgICAgIGsyID0geDY0WG9yKGsyLCBbMCwga2V5LmNoYXJDb2RlQXQoaSArIDgpXSlcbiAgICAgICAgIGsyID0geDY0TXVsdGlwbHkoazIsIGMyKVxuICAgICAgICAgazIgPSB4NjRSb3RsKGsyLCAzMylcbiAgICAgICAgIGsyID0geDY0TXVsdGlwbHkoazIsIGMxKVxuICAgICAgICAgaDIgPSB4NjRYb3IoaDIsIGsyKVxuICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgY2FzZSA4OlxuICAgICAgICAgazEgPSB4NjRYb3IoazEsIHg2NExlZnRTaGlmdChbMCwga2V5LmNoYXJDb2RlQXQoaSArIDcpXSwgNTYpKVxuICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgY2FzZSA3OlxuICAgICAgICAgazEgPSB4NjRYb3IoazEsIHg2NExlZnRTaGlmdChbMCwga2V5LmNoYXJDb2RlQXQoaSArIDYpXSwgNDgpKVxuICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgY2FzZSA2OlxuICAgICAgICAgazEgPSB4NjRYb3IoazEsIHg2NExlZnRTaGlmdChbMCwga2V5LmNoYXJDb2RlQXQoaSArIDUpXSwgNDApKVxuICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgY2FzZSA1OlxuICAgICAgICAgazEgPSB4NjRYb3IoazEsIHg2NExlZnRTaGlmdChbMCwga2V5LmNoYXJDb2RlQXQoaSArIDQpXSwgMzIpKVxuICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgY2FzZSA0OlxuICAgICAgICAgazEgPSB4NjRYb3IoazEsIHg2NExlZnRTaGlmdChbMCwga2V5LmNoYXJDb2RlQXQoaSArIDMpXSwgMjQpKVxuICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgY2FzZSAzOlxuICAgICAgICAgazEgPSB4NjRYb3IoazEsIHg2NExlZnRTaGlmdChbMCwga2V5LmNoYXJDb2RlQXQoaSArIDIpXSwgMTYpKVxuICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgY2FzZSAyOlxuICAgICAgICAgazEgPSB4NjRYb3IoazEsIHg2NExlZnRTaGlmdChbMCwga2V5LmNoYXJDb2RlQXQoaSArIDEpXSwgOCkpXG4gICAgICAgLy8gZmFsbHRocm91Z2hcbiAgICAgICBjYXNlIDE6XG4gICAgICAgICBrMSA9IHg2NFhvcihrMSwgWzAsIGtleS5jaGFyQ29kZUF0KGkpXSlcbiAgICAgICAgIGsxID0geDY0TXVsdGlwbHkoazEsIGMxKVxuICAgICAgICAgazEgPSB4NjRSb3RsKGsxLCAzMSlcbiAgICAgICAgIGsxID0geDY0TXVsdGlwbHkoazEsIGMyKVxuICAgICAgICAgaDEgPSB4NjRYb3IoaDEsIGsxKVxuICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgIH1cbiAgICAgaDEgPSB4NjRYb3IoaDEsIFswLCBrZXkubGVuZ3RoXSlcbiAgICAgaDIgPSB4NjRYb3IoaDIsIFswLCBrZXkubGVuZ3RoXSlcbiAgICAgaDEgPSB4NjRBZGQoaDEsIGgyKVxuICAgICBoMiA9IHg2NEFkZChoMiwgaDEpXG4gICAgIGgxID0geDY0Rm1peChoMSlcbiAgICAgaDIgPSB4NjRGbWl4KGgyKVxuICAgICBoMSA9IHg2NEFkZChoMSwgaDIpXG4gICAgIGgyID0geDY0QWRkKGgyLCBoMSlcbiAgICAgcmV0dXJuICgnMDAwMDAwMDAnICsgKGgxWzBdID4+PiAwKS50b1N0cmluZygxNikpLnNsaWNlKC04KSArICgnMDAwMDAwMDAnICsgKGgxWzFdID4+PiAwKS50b1N0cmluZygxNikpLnNsaWNlKC04KSArICgnMDAwMDAwMDAnICsgKGgyWzBdID4+PiAwKS50b1N0cmluZygxNikpLnNsaWNlKC04KSArICgnMDAwMDAwMDAnICsgKGgyWzFdID4+PiAwKS50b1N0cmluZygxNikpLnNsaWNlKC04KVxuICAgfVxuXG4gICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgIHByZXByb2Nlc3NvcjogbnVsbCxcbiAgICAgYXVkaW86IHtcbiAgICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgIC8vIE9uIGlPUyAxMSwgYXVkaW8gY29udGV4dCBjYW4gb25seSBiZSB1c2VkIGluIHJlc3BvbnNlIHRvIHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICAgLy8gV2UgcmVxdWlyZSB1c2VycyB0byBleHBsaWNpdGx5IGVuYWJsZSBhdWRpbyBmaW5nZXJwcmludGluZyBvbiBpT1MgMTEuXG4gICAgICAgLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ2MzYzMDQ4L29uYXVkaW9wcm9jZXNzLW5vdC1jYWxsZWQtb24taW9zMTEjNDY1MzQwODhcbiAgICAgICBleGNsdWRlSU9TMTE6IHRydWVcbiAgICAgfSxcbiAgICAgZm9udHM6IHtcbiAgICAgICBzd2ZDb250YWluZXJJZDogJ2ZpbmdlcnByaW50anMyJyxcbiAgICAgICBzd2ZQYXRoOiAnZmxhc2gvY29tcGlsZWQvRm9udExpc3Quc3dmJyxcbiAgICAgICB1c2VyRGVmaW5lZEZvbnRzOiBbXSxcbiAgICAgICBleHRlbmRlZEpzRm9udHM6IGZhbHNlXG4gICAgIH0sXG4gICAgIHNjcmVlbjoge1xuICAgICAgIC8vIFRvIGVuc3VyZSBjb25zaXN0ZW50IGZpbmdlcnByaW50cyB3aGVuIHVzZXJzIHJvdGF0ZSB0aGVpciBtb2JpbGUgZGV2aWNlc1xuICAgICAgIGRldGVjdFNjcmVlbk9yaWVudGF0aW9uOiB0cnVlXG4gICAgIH0sXG4gICAgIHBsdWdpbnM6IHtcbiAgICAgICBzb3J0UGx1Z2luc0ZvcjogWy9wYWxlbW9vbi9pXSxcbiAgICAgICBleGNsdWRlSUU6IGZhbHNlXG4gICAgIH0sXG4gICAgIGV4dHJhQ29tcG9uZW50czogW10sXG4gICAgIGV4Y2x1ZGVzOiB7XG4gICAgICAgLy8gVW5yZWxpYWJsZSBvbiBXaW5kb3dzLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZpbmdlcnByaW50anMvZmluZ2VycHJpbnRqcy9pc3N1ZXMvMzc1XG4gICAgICAgJ2VudW1lcmF0ZURldmljZXMnOiB0cnVlLFxuICAgICAgIC8vIGRldmljZVBpeGVsUmF0aW8gZGVwZW5kcyBvbiBicm93c2VyIHpvb20sIGFuZCBpdCdzIGltcG9zc2libGUgdG8gZGV0ZWN0IGJyb3dzZXIgem9vbVxuICAgICAgICdwaXhlbFJhdGlvJzogdHJ1ZSxcbiAgICAgICAvLyBETlQgZGVwZW5kcyBvbiBpbmNvZ25pdG8gbW9kZSBmb3Igc29tZSBicm93c2VycyAoQ2hyb21lKSBhbmQgaXQncyBpbXBvc3NpYmxlIHRvIGRldGVjdCBpbmNvZ25pdG8gbW9kZVxuICAgICAgICdkb05vdFRyYWNrJzogdHJ1ZSxcbiAgICAgICAvLyB1c2VzIGpzIGZvbnRzIGFscmVhZHlcbiAgICAgICAnZm9udHNGbGFzaCc6IHRydWUsXG4gICAgICAgLy8gRXh0ZW5zaW9ucyAoaW5jbHVkaW5nIEFkQmxvY2spIGFyZSBkaXNhYmxlZCBieSBkZWZhdWx0IGluIEluY29nbml0byBtb2Qgb2YgQ2hyb21lIGFuZCBGaXJlZm94XG4gICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9maW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMvaXNzdWVzLzQwNVxuICAgICAgICdhZEJsb2NrJzogdHJ1ZVxuICAgICB9LFxuICAgICBOT1RfQVZBSUxBQkxFOiAnbm90IGF2YWlsYWJsZScsXG4gICAgIEVSUk9SOiAnZXJyb3InLFxuICAgICBFWENMVURFRDogJ2V4Y2x1ZGVkJ1xuICAgfVxuXG4gICB2YXIgZWFjaCA9IGZ1bmN0aW9uIChvYmosIGl0ZXJhdG9yKSB7XG4gICAgIGlmIChBcnJheS5wcm90b3R5cGUuZm9yRWFjaCAmJiBvYmouZm9yRWFjaCA9PT0gQXJyYXkucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICAgICBvYmouZm9yRWFjaChpdGVyYXRvcilcbiAgICAgfSBlbHNlIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkge1xuICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgaXRlcmF0b3Iob2JqW2ldLCBpLCBvYmopXG4gICAgICAgfVxuICAgICB9IGVsc2Uge1xuICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICBpdGVyYXRvcihvYmpba2V5XSwga2V5LCBvYmopXG4gICAgICAgICB9XG4gICAgICAgfVxuICAgICB9XG4gICB9XG5cbiAgIHZhciBtYXAgPSBmdW5jdGlvbiAob2JqLCBpdGVyYXRvcikge1xuICAgICB2YXIgcmVzdWx0cyA9IFtdXG4gICAgIC8vIE5vdCB1c2luZyBzdHJpY3QgZXF1YWxpdHkgc28gdGhhdCB0aGlzIGFjdHMgYXMgYVxuICAgICAvLyBzaG9ydGN1dCB0byBjaGVja2luZyBmb3IgYG51bGxgIGFuZCBgdW5kZWZpbmVkYC5cbiAgICAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICAgcmV0dXJuIHJlc3VsdHNcbiAgICAgfVxuICAgICBpZiAoQXJyYXkucHJvdG90eXBlLm1hcCAmJiBvYmoubWFwID09PSBBcnJheS5wcm90b3R5cGUubWFwKSB7IHJldHVybiBvYmoubWFwKGl0ZXJhdG9yKSB9XG4gICAgIGVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgcmVzdWx0cy5wdXNoKGl0ZXJhdG9yKHZhbHVlLCBpbmRleCwgbGlzdCkpXG4gICAgIH0pXG4gICAgIHJldHVybiByZXN1bHRzXG4gICB9XG5cbiAgIHZhciBleHRlbmRTb2Z0ID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgeyByZXR1cm4gdGFyZ2V0IH1cbiAgICAgdmFyIHZhbHVlXG4gICAgIHZhciBrZXlcbiAgICAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgICAgdmFsdWUgPSBzb3VyY2Vba2V5XVxuICAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICEoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSkpIHtcbiAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWVcbiAgICAgICB9XG4gICAgIH1cbiAgICAgcmV0dXJuIHRhcmdldFxuICAgfVxuXG4gICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTWVkaWFEZXZpY2VzL2VudW1lcmF0ZURldmljZXNcbiAgIHZhciBlbnVtZXJhdGVEZXZpY2VzS2V5ID0gZnVuY3Rpb24gKGRvbmUsIG9wdGlvbnMpIHtcbiAgICAgaWYgKCFpc0VudW1lcmF0ZURldmljZXNTdXBwb3J0ZWQoKSkge1xuICAgICAgIHJldHVybiBkb25lKG9wdGlvbnMuTk9UX0FWQUlMQUJMRSlcbiAgICAgfVxuICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKS50aGVuKGZ1bmN0aW9uIChkZXZpY2VzKSB7XG4gICAgICAgZG9uZShkZXZpY2VzLm1hcChmdW5jdGlvbiAoZGV2aWNlKSB7XG4gICAgICAgICByZXR1cm4gJ2lkPScgKyBkZXZpY2UuZGV2aWNlSWQgKyAnO2dpZD0nICsgZGV2aWNlLmdyb3VwSWQgKyAnOycgKyBkZXZpY2Uua2luZCArICc7JyArIGRldmljZS5sYWJlbFxuICAgICAgIH0pKVxuICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICBkb25lKGVycm9yKVxuICAgICB9KVxuICAgfVxuXG4gICB2YXIgaXNFbnVtZXJhdGVEZXZpY2VzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICByZXR1cm4gKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKVxuICAgfVxuICAgLy8gSW5zcGlyZWQgYnkgYW5kIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3p5bGlmZS9hdWRpby1maW5nZXJwcmludFxuICAgdmFyIGF1ZGlvS2V5ID0gZnVuY3Rpb24gKGRvbmUsIG9wdGlvbnMpIHtcbiAgICAgdmFyIGF1ZGlvT3B0aW9ucyA9IG9wdGlvbnMuYXVkaW9cbiAgICAgaWYgKGF1ZGlvT3B0aW9ucy5leGNsdWRlSU9TMTEgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT1MgMTEuK1ZlcnNpb25cXC8xMS4rU2FmYXJpLykpIHtcbiAgICAgICAvLyBTZWUgY29tbWVudCBmb3IgZXhjbHVkZVVzZXJBZ2VudCBhbmQgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDYzNjMwNDgvb25hdWRpb3Byb2Nlc3Mtbm90LWNhbGxlZC1vbi1pb3MxMSM0NjUzNDA4OFxuICAgICAgIHJldHVybiBkb25lKG9wdGlvbnMuRVhDTFVERUQpXG4gICAgIH1cblxuICAgICB2YXIgQXVkaW9Db250ZXh0ID0gd2luZG93Lk9mZmxpbmVBdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdE9mZmxpbmVBdWRpb0NvbnRleHRcblxuICAgICBpZiAoQXVkaW9Db250ZXh0ID09IG51bGwpIHtcbiAgICAgICByZXR1cm4gZG9uZShvcHRpb25zLk5PVF9BVkFJTEFCTEUpXG4gICAgIH1cblxuICAgICB2YXIgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoMSwgNDQxMDAsIDQ0MTAwKVxuXG4gICAgIHZhciBvc2NpbGxhdG9yID0gY29udGV4dC5jcmVhdGVPc2NpbGxhdG9yKClcbiAgICAgb3NjaWxsYXRvci50eXBlID0gJ3RyaWFuZ2xlJ1xuICAgICBvc2NpbGxhdG9yLmZyZXF1ZW5jeS5zZXRWYWx1ZUF0VGltZSgxMDAwMCwgY29udGV4dC5jdXJyZW50VGltZSlcblxuICAgICB2YXIgY29tcHJlc3NvciA9IGNvbnRleHQuY3JlYXRlRHluYW1pY3NDb21wcmVzc29yKClcbiAgICAgZWFjaChbXG4gICAgICAgWyd0aHJlc2hvbGQnLCAtNTBdLFxuICAgICAgIFsna25lZScsIDQwXSxcbiAgICAgICBbJ3JhdGlvJywgMTJdLFxuICAgICAgIFsncmVkdWN0aW9uJywgLTIwXSxcbiAgICAgICBbJ2F0dGFjaycsIDBdLFxuICAgICAgIFsncmVsZWFzZScsIDAuMjVdXG4gICAgIF0sIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgaWYgKGNvbXByZXNzb3JbaXRlbVswXV0gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgY29tcHJlc3NvcltpdGVtWzBdXS5zZXRWYWx1ZUF0VGltZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgY29tcHJlc3NvcltpdGVtWzBdXS5zZXRWYWx1ZUF0VGltZShpdGVtWzFdLCBjb250ZXh0LmN1cnJlbnRUaW1lKVxuICAgICAgIH1cbiAgICAgfSlcblxuICAgICBvc2NpbGxhdG9yLmNvbm5lY3QoY29tcHJlc3NvcilcbiAgICAgY29tcHJlc3Nvci5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pXG4gICAgIG9zY2lsbGF0b3Iuc3RhcnQoMClcbiAgICAgY29udGV4dC5zdGFydFJlbmRlcmluZygpXG5cbiAgICAgdmFyIGF1ZGlvVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgY29uc29sZS53YXJuKCdBdWRpbyBmaW5nZXJwcmludCB0aW1lZCBvdXQuIFBsZWFzZSByZXBvcnQgYnVnIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9maW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMgd2l0aCB5b3VyIHVzZXIgYWdlbnQ6IFwiJyArIG5hdmlnYXRvci51c2VyQWdlbnQgKyAnXCIuJylcbiAgICAgICBjb250ZXh0Lm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7IH1cbiAgICAgICBjb250ZXh0ID0gbnVsbFxuICAgICAgIHJldHVybiBkb25lKCdhdWRpb1RpbWVvdXQnKVxuICAgICB9LCBhdWRpb09wdGlvbnMudGltZW91dClcblxuICAgICBjb250ZXh0Lm9uY29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICB2YXIgZmluZ2VycHJpbnRcbiAgICAgICB0cnkge1xuICAgICAgICAgY2xlYXJUaW1lb3V0KGF1ZGlvVGltZW91dElkKVxuICAgICAgICAgZmluZ2VycHJpbnQgPSBldmVudC5yZW5kZXJlZEJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKVxuICAgICAgICAgICAuc2xpY2UoNDUwMCwgNTAwMClcbiAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2YWwpIHsgcmV0dXJuIGFjYyArIE1hdGguYWJzKHZhbCkgfSwgMClcbiAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgIG9zY2lsbGF0b3IuZGlzY29ubmVjdCgpXG4gICAgICAgICBjb21wcmVzc29yLmRpc2Nvbm5lY3QoKVxuICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICBkb25lKGVycm9yKVxuICAgICAgICAgcmV0dXJuXG4gICAgICAgfVxuICAgICAgIGRvbmUoZmluZ2VycHJpbnQpXG4gICAgIH1cbiAgIH1cbiAgIHZhciBVc2VyQWdlbnQgPSBmdW5jdGlvbiAoZG9uZSkge1xuICAgICBkb25lKG5hdmlnYXRvci51c2VyQWdlbnQpXG4gICB9XG4gICB2YXIgd2ViZHJpdmVyID0gZnVuY3Rpb24gKGRvbmUsIG9wdGlvbnMpIHtcbiAgICAgZG9uZShuYXZpZ2F0b3Iud2ViZHJpdmVyID09IG51bGwgPyBvcHRpb25zLk5PVF9BVkFJTEFCTEUgOiBuYXZpZ2F0b3Iud2ViZHJpdmVyKVxuICAgfVxuICAgdmFyIGxhbmd1YWdlS2V5ID0gZnVuY3Rpb24gKGRvbmUsIG9wdGlvbnMpIHtcbiAgICAgZG9uZShuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLnVzZXJMYW5ndWFnZSB8fCBuYXZpZ2F0b3IuYnJvd3Nlckxhbmd1YWdlIHx8IG5hdmlnYXRvci5zeXN0ZW1MYW5ndWFnZSB8fCBvcHRpb25zLk5PVF9BVkFJTEFCTEUpXG4gICB9XG4gICB2YXIgY29sb3JEZXB0aEtleSA9IGZ1bmN0aW9uIChkb25lLCBvcHRpb25zKSB7XG4gICAgIGRvbmUod2luZG93LnNjcmVlbi5jb2xvckRlcHRoIHx8IG9wdGlvbnMuTk9UX0FWQUlMQUJMRSlcbiAgIH1cbiAgIHZhciBkZXZpY2VNZW1vcnlLZXkgPSBmdW5jdGlvbiAoZG9uZSwgb3B0aW9ucykge1xuICAgICBkb25lKG5hdmlnYXRvci5kZXZpY2VNZW1vcnkgfHwgb3B0aW9ucy5OT1RfQVZBSUxBQkxFKVxuICAgfVxuICAgdmFyIHBpeGVsUmF0aW9LZXkgPSBmdW5jdGlvbiAoZG9uZSwgb3B0aW9ucykge1xuICAgICBkb25lKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IG9wdGlvbnMuTk9UX0FWQUlMQUJMRSlcbiAgIH1cbiAgIHZhciBzY3JlZW5SZXNvbHV0aW9uS2V5ID0gZnVuY3Rpb24gKGRvbmUsIG9wdGlvbnMpIHtcbiAgICAgZG9uZShnZXRTY3JlZW5SZXNvbHV0aW9uKG9wdGlvbnMpKVxuICAgfVxuICAgdmFyIGdldFNjcmVlblJlc29sdXRpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICB2YXIgcmVzb2x1dGlvbiA9IFt3aW5kb3cuc2NyZWVuLndpZHRoLCB3aW5kb3cuc2NyZWVuLmhlaWdodF1cbiAgICAgaWYgKG9wdGlvbnMuc2NyZWVuLmRldGVjdFNjcmVlbk9yaWVudGF0aW9uKSB7XG4gICAgICAgcmVzb2x1dGlvbi5zb3J0KCkucmV2ZXJzZSgpXG4gICAgIH1cbiAgICAgcmV0dXJuIHJlc29sdXRpb25cbiAgIH1cbiAgIHZhciBhdmFpbGFibGVTY3JlZW5SZXNvbHV0aW9uS2V5ID0gZnVuY3Rpb24gKGRvbmUsIG9wdGlvbnMpIHtcbiAgICAgZG9uZShnZXRBdmFpbGFibGVTY3JlZW5SZXNvbHV0aW9uKG9wdGlvbnMpKVxuICAgfVxuICAgdmFyIGdldEF2YWlsYWJsZVNjcmVlblJlc29sdXRpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICBpZiAod2luZG93LnNjcmVlbi5hdmFpbFdpZHRoICYmIHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQpIHtcbiAgICAgICB2YXIgYXZhaWxhYmxlID0gW3dpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQsIHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aF1cbiAgICAgICBpZiAob3B0aW9ucy5zY3JlZW4uZGV0ZWN0U2NyZWVuT3JpZW50YXRpb24pIHtcbiAgICAgICAgIGF2YWlsYWJsZS5zb3J0KCkucmV2ZXJzZSgpXG4gICAgICAgfVxuICAgICAgIHJldHVybiBhdmFpbGFibGVcbiAgICAgfVxuICAgICAvLyBoZWFkbGVzcyBicm93c2Vyc1xuICAgICByZXR1cm4gb3B0aW9ucy5OT1RfQVZBSUxBQkxFXG4gICB9XG4gICB2YXIgdGltZXpvbmVPZmZzZXQgPSBmdW5jdGlvbiAoZG9uZSkge1xuICAgICBkb25lKG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSlcbiAgIH1cbiAgIHZhciB0aW1lem9uZSA9IGZ1bmN0aW9uIChkb25lLCBvcHRpb25zKSB7XG4gICAgIGlmICh3aW5kb3cuSW50bCAmJiB3aW5kb3cuSW50bC5EYXRlVGltZUZvcm1hdCkge1xuICAgICAgIGRvbmUobmV3IHdpbmRvdy5JbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmUgfHwgb3B0aW9ucy5OT1RfQVZBSUxBQkxFKVxuICAgICAgIHJldHVyblxuICAgICB9XG4gICAgIGRvbmUob3B0aW9ucy5OT1RfQVZBSUxBQkxFKVxuICAgfVxuICAgdmFyIHNlc3Npb25TdG9yYWdlS2V5ID0gZnVuY3Rpb24gKGRvbmUsIG9wdGlvbnMpIHtcbiAgICAgZG9uZShoYXNTZXNzaW9uU3RvcmFnZShvcHRpb25zKSlcbiAgIH1cbiAgIHZhciBsb2NhbFN0b3JhZ2VLZXkgPSBmdW5jdGlvbiAoZG9uZSwgb3B0aW9ucykge1xuICAgICBkb25lKGhhc0xvY2FsU3RvcmFnZShvcHRpb25zKSlcbiAgIH1cbiAgIHZhciBpbmRleGVkRGJLZXkgPSBmdW5jdGlvbiAoZG9uZSwgb3B0aW9ucykge1xuICAgICBkb25lKGhhc0luZGV4ZWREQihvcHRpb25zKSlcbiAgIH1cbiAgIHZhciBhZGRCZWhhdmlvcktleSA9IGZ1bmN0aW9uIChkb25lKSB7XG4gICAgIGRvbmUoISF3aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLmFkZEJlaGF2aW9yKVxuICAgfVxuICAgdmFyIG9wZW5EYXRhYmFzZUtleSA9IGZ1bmN0aW9uIChkb25lKSB7XG4gICAgIGRvbmUoISF3aW5kb3cub3BlbkRhdGFiYXNlKVxuICAgfVxuICAgdmFyIGNwdUNsYXNzS2V5ID0gZnVuY3Rpb24gKGRvbmUsIG9wdGlvbnMpIHtcbiAgICAgZG9uZShnZXROYXZpZ2F0b3JDcHVDbGFzcyhvcHRpb25zKSlcbiAgIH1cbiAgIHZhciBwbGF0Zm9ybUtleSA9IGZ1bmN0aW9uIChkb25lLCBvcHRpb25zKSB7XG4gICAgIGRvbmUoZ2V0TmF2aWdhdG9yUGxhdGZvcm0ob3B0aW9ucykpXG4gICB9XG4gICB2YXIgZG9Ob3RUcmFja0tleSA9IGZ1bmN0aW9uIChkb25lLCBvcHRpb25zKSB7XG4gICAgIGRvbmUoZ2V0RG9Ob3RUcmFjayhvcHRpb25zKSlcbiAgIH1cbiAgIHZhciBjYW52YXNLZXkgPSBmdW5jdGlvbiAoZG9uZSwgb3B0aW9ucykge1xuICAgICBpZiAoaXNDYW52YXNTdXBwb3J0ZWQoKSkge1xuICAgICAgIGRvbmUoZ2V0Q2FudmFzRnAob3B0aW9ucykpXG4gICAgICAgcmV0dXJuXG4gICAgIH1cbiAgICAgZG9uZShvcHRpb25zLk5PVF9BVkFJTEFCTEUpXG4gICB9XG4gICB2YXIgd2ViZ2xLZXkgPSBmdW5jdGlvbiAoZG9uZSwgb3B0aW9ucykge1xuICAgICBpZiAoaXNXZWJHbFN1cHBvcnRlZCgpKSB7XG4gICAgICAgZG9uZShnZXRXZWJnbEZwKCkpXG4gICAgICAgcmV0dXJuXG4gICAgIH1cbiAgICAgZG9uZShvcHRpb25zLk5PVF9BVkFJTEFCTEUpXG4gICB9XG4gICB2YXIgd2ViZ2xWZW5kb3JBbmRSZW5kZXJlcktleSA9IGZ1bmN0aW9uIChkb25lKSB7XG4gICAgIGlmIChpc1dlYkdsU3VwcG9ydGVkKCkpIHtcbiAgICAgICBkb25lKGdldFdlYmdsVmVuZG9yQW5kUmVuZGVyZXIoKSlcbiAgICAgICByZXR1cm5cbiAgICAgfVxuICAgICBkb25lKClcbiAgIH1cbiAgIHZhciBhZEJsb2NrS2V5ID0gZnVuY3Rpb24gKGRvbmUpIHtcbiAgICAgZG9uZShnZXRBZEJsb2NrKCkpXG4gICB9XG4gICB2YXIgaGFzTGllZExhbmd1YWdlc0tleSA9IGZ1bmN0aW9uIChkb25lKSB7XG4gICAgIGRvbmUoZ2V0SGFzTGllZExhbmd1YWdlcygpKVxuICAgfVxuICAgdmFyIGhhc0xpZWRSZXNvbHV0aW9uS2V5ID0gZnVuY3Rpb24gKGRvbmUpIHtcbiAgICAgZG9uZShnZXRIYXNMaWVkUmVzb2x1dGlvbigpKVxuICAgfVxuICAgdmFyIGhhc0xpZWRPc0tleSA9IGZ1bmN0aW9uIChkb25lKSB7XG4gICAgIGRvbmUoZ2V0SGFzTGllZE9zKCkpXG4gICB9XG4gICB2YXIgaGFzTGllZEJyb3dzZXJLZXkgPSBmdW5jdGlvbiAoZG9uZSkge1xuICAgICBkb25lKGdldEhhc0xpZWRCcm93c2VyKCkpXG4gICB9XG4gICAvLyBmbGFzaCBmb250cyAod2lsbCBpbmNyZWFzZSBmaW5nZXJwcmludGluZyB0aW1lIDIwWCB0byB+IDEzMC0xNTBtcylcbiAgIHZhciBmbGFzaEZvbnRzS2V5ID0gZnVuY3Rpb24gKGRvbmUsIG9wdGlvbnMpIHtcbiAgICAgLy8gd2UgZG8gZmxhc2ggaWYgc3dmb2JqZWN0IGlzIGxvYWRlZFxuICAgICBpZiAoIWhhc1N3Zk9iamVjdExvYWRlZCgpKSB7XG4gICAgICAgcmV0dXJuIGRvbmUoJ3N3ZiBvYmplY3Qgbm90IGxvYWRlZCcpXG4gICAgIH1cbiAgICAgaWYgKCFoYXNNaW5GbGFzaEluc3RhbGxlZCgpKSB7XG4gICAgICAgcmV0dXJuIGRvbmUoJ2ZsYXNoIG5vdCBpbnN0YWxsZWQnKVxuICAgICB9XG4gICAgIGlmICghb3B0aW9ucy5mb250cy5zd2ZQYXRoKSB7XG4gICAgICAgcmV0dXJuIGRvbmUoJ21pc3Npbmcgb3B0aW9ucy5mb250cy5zd2ZQYXRoJylcbiAgICAgfVxuICAgICBsb2FkU3dmQW5kRGV0ZWN0Rm9udHMoZnVuY3Rpb24gKGZvbnRzKSB7XG4gICAgICAgZG9uZShmb250cylcbiAgICAgfSwgb3B0aW9ucylcbiAgIH1cbiAgIC8vIGt1ZG9zIHRvIGh0dHA6Ly93d3cubGFsaXQub3JnL2xhYi9qYXZhc2NyaXB0LWNzcy1mb250LWRldGVjdC9cbiAgIHZhciBqc0ZvbnRzS2V5ID0gZnVuY3Rpb24gKGRvbmUsIG9wdGlvbnMpIHtcbiAgICAgLy8gYSBmb250IHdpbGwgYmUgY29tcGFyZWQgYWdhaW5zdCBhbGwgdGhlIHRocmVlIGRlZmF1bHQgZm9udHMuXG4gICAgIC8vIGFuZCBpZiBpdCBkb2Vzbid0IG1hdGNoIGFsbCAzIHRoZW4gdGhhdCBmb250IGlzIG5vdCBhdmFpbGFibGUuXG4gICAgIHZhciBiYXNlRm9udHMgPSBbJ21vbm9zcGFjZScsICdzYW5zLXNlcmlmJywgJ3NlcmlmJ11cblxuICAgICB2YXIgZm9udExpc3QgPSBbXG4gICAgICAgJ0FuZGFsZSBNb25vJywgJ0FyaWFsJywgJ0FyaWFsIEJsYWNrJywgJ0FyaWFsIEhlYnJldycsICdBcmlhbCBNVCcsICdBcmlhbCBOYXJyb3cnLCAnQXJpYWwgUm91bmRlZCBNVCBCb2xkJywgJ0FyaWFsIFVuaWNvZGUgTVMnLFxuICAgICAgICdCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8nLCAnQm9vayBBbnRpcXVhJywgJ0Jvb2ttYW4gT2xkIFN0eWxlJyxcbiAgICAgICAnQ2FsaWJyaScsICdDYW1icmlhJywgJ0NhbWJyaWEgTWF0aCcsICdDZW50dXJ5JywgJ0NlbnR1cnkgR290aGljJywgJ0NlbnR1cnkgU2Nob29sYm9vaycsICdDb21pYyBTYW5zJywgJ0NvbWljIFNhbnMgTVMnLCAnQ29uc29sYXMnLCAnQ291cmllcicsICdDb3VyaWVyIE5ldycsXG4gICAgICAgJ0dlbmV2YScsICdHZW9yZ2lhJyxcbiAgICAgICAnSGVsdmV0aWNhJywgJ0hlbHZldGljYSBOZXVlJyxcbiAgICAgICAnSW1wYWN0JyxcbiAgICAgICAnTHVjaWRhIEJyaWdodCcsICdMdWNpZGEgQ2FsbGlncmFwaHknLCAnTHVjaWRhIENvbnNvbGUnLCAnTHVjaWRhIEZheCcsICdMVUNJREEgR1JBTkRFJywgJ0x1Y2lkYSBIYW5kd3JpdGluZycsICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBUeXBld3JpdGVyJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLFxuICAgICAgICdNaWNyb3NvZnQgU2FucyBTZXJpZicsICdNb25hY28nLCAnTW9ub3R5cGUgQ29yc2l2YScsICdNUyBHb3RoaWMnLCAnTVMgT3V0bG9vaycsICdNUyBQR290aGljJywgJ01TIFJlZmVyZW5jZSBTYW5zIFNlcmlmJywgJ01TIFNhbnMgU2VyaWYnLCAnTVMgU2VyaWYnLCAnTVlSSUFEJywgJ01ZUklBRCBQUk8nLFxuICAgICAgICdQYWxhdGlubycsICdQYWxhdGlubyBMaW5vdHlwZScsXG4gICAgICAgJ1NlZ29lIFByaW50JywgJ1NlZ29lIFNjcmlwdCcsICdTZWdvZSBVSScsICdTZWdvZSBVSSBMaWdodCcsICdTZWdvZSBVSSBTZW1pYm9sZCcsICdTZWdvZSBVSSBTeW1ib2wnLFxuICAgICAgICdUYWhvbWEnLCAnVGltZXMnLCAnVGltZXMgTmV3IFJvbWFuJywgJ1RpbWVzIE5ldyBSb21hbiBQUycsICdUcmVidWNoZXQgTVMnLFxuICAgICAgICdWZXJkYW5hJywgJ1dpbmdkaW5ncycsICdXaW5nZGluZ3MgMicsICdXaW5nZGluZ3MgMydcbiAgICAgXVxuXG4gICAgIGlmIChvcHRpb25zLmZvbnRzLmV4dGVuZGVkSnNGb250cykge1xuICAgICAgIHZhciBleHRlbmRlZEZvbnRMaXN0ID0gW1xuICAgICAgICAgJ0FiYWRpIE1UIENvbmRlbnNlZCBMaWdodCcsICdBY2FkZW15IEVuZ3JhdmVkIExFVCcsICdBRE9CRSBDQVNMT04gUFJPJywgJ0Fkb2JlIEdhcmFtb25kJywgJ0FET0JFIEdBUkFNT05EIFBSTycsICdBZ2VuY3kgRkInLCAnQWhhcm9uaScsICdBbGJlcnR1cyBFeHRyYSBCb2xkJywgJ0FsYmVydHVzIE1lZGl1bScsICdBbGdlcmlhbicsICdBbWF6b25lIEJUJywgJ0FtZXJpY2FuIFR5cGV3cml0ZXInLFxuICAgICAgICAgJ0FtZXJpY2FuIFR5cGV3cml0ZXIgQ29uZGVuc2VkJywgJ0FtZXJUeXBlIE1kIEJUJywgJ0FuZGFsdXMnLCAnQW5nc2FuYSBOZXcnLCAnQW5nc2FuYVVQQycsICdBbnRpcXVlIE9saXZlJywgJ0FwYXJhaml0YScsICdBcHBsZSBDaGFuY2VyeScsICdBcHBsZSBDb2xvciBFbW9qaScsICdBcHBsZSBTRCBHb3RoaWMgTmVvJywgJ0FyYWJpYyBUeXBlc2V0dGluZycsICdBUkNIRVInLFxuICAgICAgICAgJ0FSTk8gUFJPJywgJ0FycnVzIEJUJywgJ0F1cm9yYSBDbiBCVCcsICdBdmFudEdhcmRlIEJrIEJUJywgJ0F2YW50R2FyZGUgTWQgQlQnLCAnQVZFTklSJywgJ0F5dXRoYXlhJywgJ0JhbmR5JywgJ0JhbmdsYSBTYW5nYW0gTU4nLCAnQmFuayBHb3RoaWMnLCAnQmFua0dvdGhpYyBNZCBCVCcsICdCYXNrZXJ2aWxsZScsXG4gICAgICAgICAnQmFza2VydmlsbGUgT2xkIEZhY2UnLCAnQmF0YW5nJywgJ0JhdGFuZ0NoZScsICdCYXVlciBCb2RvbmknLCAnQmF1aGF1cyA5MycsICdCYXpvb2thJywgJ0JlbGwgTVQnLCAnQmVtYm8nLCAnQmVuZ3VpYXQgQmsgQlQnLCAnQmVybGluIFNhbnMgRkInLCAnQmVybGluIFNhbnMgRkIgRGVtaScsICdCZXJuYXJkIE1UIENvbmRlbnNlZCcsICdCZXJuaGFyZEZhc2hpb24gQlQnLCAnQmVybmhhcmRNb2QgQlQnLCAnQmlnIENhc2xvbicsICdCaW5uZXJEJyxcbiAgICAgICAgICdCbGFja2FkZGVyIElUQycsICdCbGFpck1kSVRDIFRUJywgJ0JvZG9uaSA3MicsICdCb2RvbmkgNzIgT2xkc3R5bGUnLCAnQm9kb25pIDcyIFNtYWxsY2FwcycsICdCb2RvbmkgTVQnLCAnQm9kb25pIE1UIEJsYWNrJywgJ0JvZG9uaSBNVCBDb25kZW5zZWQnLCAnQm9kb25pIE1UIFBvc3RlciBDb21wcmVzc2VkJyxcbiAgICAgICAgICdCb29rc2hlbGYgU3ltYm9sIDcnLCAnQm91bGRlcicsICdCcmFkbGV5IEhhbmQnLCAnQnJhZGxleSBIYW5kIElUQycsICdCcmVtZW4gQmQgQlQnLCAnQnJpdGFubmljIEJvbGQnLCAnQnJvYWR3YXknLCAnQnJvd2FsbGlhIE5ldycsICdCcm93YWxsaWFVUEMnLCAnQnJ1c2ggU2NyaXB0IE1UJywgJ0NhbGlmb3JuaWFuIEZCJywgJ0NhbGlzdG8gTVQnLCAnQ2FsbGlncmFwaGVyJywgJ0NhbmRhcmEnLFxuICAgICAgICAgJ0Nhc2xvbk9wbmZhY2UgQlQnLCAnQ2FzdGVsbGFyJywgJ0NlbnRhdXInLCAnQ2V6YW5uZScsICdDRyBPbWVnYScsICdDRyBUaW1lcycsICdDaGFsa2JvYXJkJywgJ0NoYWxrYm9hcmQgU0UnLCAnQ2hhbGtkdXN0ZXInLCAnQ2hhcmxlc3dvcnRoJywgJ0NoYXJ0ZXIgQmQgQlQnLCAnQ2hhcnRlciBCVCcsICdDaGF1Y2VyJyxcbiAgICAgICAgICdDaGVsdGhtSVRDIEJrIEJUJywgJ0NoaWxsZXInLCAnQ2xhcmVuZG9uJywgJ0NsYXJlbmRvbiBDb25kZW5zZWQnLCAnQ2xvaXN0ZXJCbGFjayBCVCcsICdDb2NoaW4nLCAnQ29sb25uYSBNVCcsICdDb25zdGFudGlhJywgJ0Nvb3BlciBCbGFjaycsICdDb3BwZXJwbGF0ZScsICdDb3BwZXJwbGF0ZSBHb3RoaWMnLCAnQ29wcGVycGxhdGUgR290aGljIEJvbGQnLFxuICAgICAgICAgJ0NvcHBlcnBsYXRlIEdvdGhpYyBMaWdodCcsICdDb3BwZXJwbEdvdGggQmQgQlQnLCAnQ29yYmVsJywgJ0NvcmRpYSBOZXcnLCAnQ29yZGlhVVBDJywgJ0Nvcm5lcnN0b25lJywgJ0Nvcm9uZXQnLCAnQ3Vja29vJywgJ0N1cmx6IE1UJywgJ0RhdW5QZW5oJywgJ0RhdXBoaW4nLCAnRGF2aWQnLCAnREIgTENEIFRlbXAnLCAnREVMSUNJT1VTJywgJ0Rlbm1hcmsnLFxuICAgICAgICAgJ0RGS2FpLVNCJywgJ0RpZG90JywgJ0RpbGxlbmlhVVBDJywgJ0RJTicsICdEb2tDaGFtcGEnLCAnRG90dW0nLCAnRG90dW1DaGUnLCAnRWJyaW1hJywgJ0Vkd2FyZGlhbiBTY3JpcHQgSVRDJywgJ0VsZXBoYW50JywgJ0VuZ2xpc2ggMTExIFZpdmFjZSBCVCcsICdFbmdyYXZlcnMgTVQnLCAnRW5ncmF2ZXJzR290aGljIEJUJywgJ0VyYXMgQm9sZCBJVEMnLCAnRXJhcyBEZW1pIElUQycsICdFcmFzIExpZ2h0IElUQycsICdFcmFzIE1lZGl1bSBJVEMnLFxuICAgICAgICAgJ0V1Y3Jvc2lhVVBDJywgJ0V1cGhlbWlhJywgJ0V1cGhlbWlhIFVDQVMnLCAnRVVST1NUSUxFJywgJ0V4b3RjMzUwIEJkIEJUJywgJ0ZhbmdTb25nJywgJ0ZlbGl4IFRpdGxpbmcnLCAnRml4ZWRzeXMnLCAnRk9OVElOJywgJ0Zvb3RsaWdodCBNVCBMaWdodCcsICdGb3J0ZScsXG4gICAgICAgICAnRnJhbmtSdWVobCcsICdGcmFuc2lzY2FuJywgJ0ZyZWVmcm03MjEgQmxrIEJUJywgJ0ZyZWVzaWFVUEMnLCAnRnJlZXN0eWxlIFNjcmlwdCcsICdGcmVuY2ggU2NyaXB0IE1UJywgJ0ZybmtHb3RoSVRDIEJrIEJUJywgJ0ZydWl0Z2VyJywgJ0ZSVVRJR0VSJyxcbiAgICAgICAgICdGdXR1cmEnLCAnRnV0dXJhIEJrIEJUJywgJ0Z1dHVyYSBMdCBCVCcsICdGdXR1cmEgTWQgQlQnLCAnRnV0dXJhIFpCbGsgQlQnLCAnRnV0dXJhQmxhY2sgQlQnLCAnR2FicmlvbGEnLCAnR2FsbGlhcmQgQlQnLCAnR2F1dGFtaScsICdHZWV6YSBQcm8nLCAnR2VvbWV0cjIzMSBCVCcsICdHZW9tZXRyMjMxIEh2IEJUJywgJ0dlb21ldHIyMzEgTHQgQlQnLCAnR2VvU2xhYiA3MDMgTHQgQlQnLFxuICAgICAgICAgJ0dlb1NsYWIgNzAzIFhCZCBCVCcsICdHaWdpJywgJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCAnR2lsbCBTYW5zIE1UIENvbmRlbnNlZCcsICdHaWxsIFNhbnMgTVQgRXh0IENvbmRlbnNlZCBCb2xkJywgJ0dpbGwgU2FucyBVbHRyYSBCb2xkJywgJ0dpbGwgU2FucyBVbHRyYSBCb2xkIENvbmRlbnNlZCcsICdHaXNoYScsICdHbG91Y2VzdGVyIE1UIEV4dHJhIENvbmRlbnNlZCcsICdHT1RIQU0nLCAnR09USEFNIEJPTEQnLFxuICAgICAgICAgJ0dvdWR5IE9sZCBTdHlsZScsICdHb3VkeSBTdG91dCcsICdHb3VkeUhhbmR0b29sZWQgQlQnLCAnR291ZHlPTFN0IEJUJywgJ0d1amFyYXRpIFNhbmdhbSBNTicsICdHdWxpbScsICdHdWxpbUNoZScsICdHdW5nc3VoJywgJ0d1bmdzdWhDaGUnLCAnR3VybXVraGkgTU4nLCAnSGFldHRlbnNjaHdlaWxlcicsICdIYXJsb3cgU29saWQgSXRhbGljJywgJ0hhcnJpbmd0b24nLCAnSGVhdGhlcicsICdIZWl0aSBTQycsICdIZWl0aSBUQycsICdIRUxWJyxcbiAgICAgICAgICdIZXJhbGQnLCAnSGlnaCBUb3dlciBUZXh0JywgJ0hpcmFnaW5vIEtha3UgR290aGljIFByb04nLCAnSGlyYWdpbm8gTWluY2hvIFByb04nLCAnSG9lZmxlciBUZXh0JywgJ0h1bWFuc3QgNTIxIENuIEJUJywgJ0h1bWFuc3Q1MjEgQlQnLCAnSHVtYW5zdDUyMSBMdCBCVCcsICdJbXByaW50IE1UIFNoYWRvdycsICdJbmNpc2VkOTAxIEJkIEJUJywgJ0luY2lzZWQ5MDEgQlQnLFxuICAgICAgICAgJ0luY2lzZWQ5MDEgTHQgQlQnLCAnSU5DT05TT0xBVEEnLCAnSW5mb3JtYWwgUm9tYW4nLCAnSW5mb3JtYWwwMTEgQlQnLCAnSU5URVJTVEFURScsICdJcmlzVVBDJywgJ0lza29vbGEgUG90YScsICdKYXNtaW5lVVBDJywgJ0phenogTEVUJywgJ0plbnNvbicsICdKZXN0ZXInLCAnSm9rZXJtYW4nLCAnSnVpY2UgSVRDJywgJ0thYmVsIEJrIEJUJywgJ0thYmVsIFVsdCBCVCcsICdLYWlsYXNhJywgJ0thaVRpJywgJ0thbGluZ2EnLCAnS2FubmFkYSBTYW5nYW0gTU4nLFxuICAgICAgICAgJ0thcnRpa2EnLCAnS2F1Zm1hbm4gQmQgQlQnLCAnS2F1Zm1hbm4gQlQnLCAnS2htZXIgVUknLCAnS29kY2hpYW5nVVBDJywgJ0tva2lsYScsICdLb3Jpbm5hIEJUJywgJ0tyaXN0ZW4gSVRDJywgJ0tydW5ndGhlcCcsICdLdW5zdGxlciBTY3JpcHQnLCAnTGFvIFVJJywgJ0xhdGhhJywgJ0xlZWxhd2FkZWUnLCAnTGV0dGVyIEdvdGhpYycsICdMZXZlbmltIE1UJywgJ0xpbHlVUEMnLCAnTGl0aG9ncmFwaCcsICdMaXRob2dyYXBoIExpZ2h0JywgJ0xvbmcgSXNsYW5kJyxcbiAgICAgICAgICdMeWRpYW4gQlQnLCAnTWFnbmV0bycsICdNYWlhbmRyYSBHRCcsICdNYWxheWFsYW0gU2FuZ2FtIE1OJywgJ01hbGd1biBHb3RoaWMnLFxuICAgICAgICAgJ01hbmdhbCcsICdNYXJpZ29sZCcsICdNYXJpb24nLCAnTWFya2VyIEZlbHQnLCAnTWFya2V0JywgJ01hcmxldHQnLCAnTWF0aXNzZSBJVEMnLCAnTWF0dXJhIE1UIFNjcmlwdCBDYXBpdGFscycsICdNZWlyeW8nLCAnTWVpcnlvIFVJJywgJ01pY3Jvc29mdCBIaW1hbGF5YScsICdNaWNyb3NvZnQgSmhlbmdIZWknLCAnTWljcm9zb2Z0IE5ldyBUYWkgTHVlJywgJ01pY3Jvc29mdCBQaGFnc1BhJywgJ01pY3Jvc29mdCBUYWkgTGUnLFxuICAgICAgICAgJ01pY3Jvc29mdCBVaWdodXInLCAnTWljcm9zb2Z0IFlhSGVpJywgJ01pY3Jvc29mdCBZaSBCYWl0aScsICdNaW5nTGlVJywgJ01pbmdMaVVfSEtTQ1MnLCAnTWluZ0xpVV9IS1NDUy1FeHRCJywgJ01pbmdMaVUtRXh0QicsICdNaW5pb24nLCAnTWluaW9uIFBybycsICdNaXJpYW0nLCAnTWlyaWFtIEZpeGVkJywgJ01pc3RyYWwnLCAnTW9kZXJuJywgJ01vZGVybiBOby4gMjAnLCAnTW9uYSBMaXNhIFNvbGlkIElUQyBUVCcsICdNb25nb2xpYW4gQmFpdGknLFxuICAgICAgICAgJ01PTk8nLCAnTW9vbEJvcmFuJywgJ01ycyBFYXZlcycsICdNUyBMaW5lRHJhdycsICdNUyBNaW5jaG8nLCAnTVMgUE1pbmNobycsICdNUyBSZWZlcmVuY2UgU3BlY2lhbHR5JywgJ01TIFVJIEdvdGhpYycsICdNVCBFeHRyYScsICdNVVNFTycsICdNViBCb2xpJyxcbiAgICAgICAgICdOYWRlZW0nLCAnTmFya2lzaW0nLCAnTkVWSVMnLCAnTmV3cyBHb3RoaWMnLCAnTmV3cyBHb3RoaWNNVCcsICdOZXdzR290aCBCVCcsICdOaWFnYXJhIEVuZ3JhdmVkJywgJ05pYWdhcmEgU29saWQnLCAnTm90ZXdvcnRoeScsICdOU2ltU3VuJywgJ055YWxhJywgJ09DUiBBIEV4dGVuZGVkJywgJ09sZCBDZW50dXJ5JywgJ09sZCBFbmdsaXNoIFRleHQgTVQnLCAnT255eCcsICdPbnl4IEJUJywgJ09QVElNQScsICdPcml5YSBTYW5nYW0gTU4nLFxuICAgICAgICAgJ09TQUtBJywgJ096SGFuZGljcmFmdCBCVCcsICdQYWxhY2UgU2NyaXB0IE1UJywgJ1BhcHlydXMnLCAnUGFyY2htZW50JywgJ1BhcnR5IExFVCcsICdQZWdhc3VzJywgJ1BlcnBldHVhJywgJ1BlcnBldHVhIFRpdGxpbmcgTVQnLCAnUGV0aXRhQm9sZCcsICdQaWNrd2ljaycsICdQbGFudGFnZW5ldCBDaGVyb2tlZScsICdQbGF5YmlsbCcsICdQTWluZ0xpVScsICdQTWluZ0xpVS1FeHRCJyxcbiAgICAgICAgICdQb29yIFJpY2hhcmQnLCAnUG9zdGVyJywgJ1Bvc3RlckJvZG9uaSBCVCcsICdQUklOQ0VUT1dOIExFVCcsICdQcmlzdGluYScsICdQVEJhcm51bSBCVCcsICdQeXRoYWdvcmFzJywgJ1JhYXZpJywgJ1JhZ2UgSXRhbGljJywgJ1JhdmllJywgJ1JpYmJvbjEzMSBCZCBCVCcsICdSb2Nrd2VsbCcsICdSb2Nrd2VsbCBDb25kZW5zZWQnLCAnUm9ja3dlbGwgRXh0cmEgQm9sZCcsICdSb2QnLCAnUm9tYW4nLCAnU2Fra2FsIE1hamFsbGEnLFxuICAgICAgICAgJ1NhbnRhIEZlIExFVCcsICdTYXZveWUgTEVUJywgJ1NjZXB0cmUnLCAnU2NyaXB0JywgJ1NjcmlwdCBNVCBCb2xkJywgJ1NDUklQVElOQScsICdTZXJpZmEnLCAnU2VyaWZhIEJUJywgJ1NlcmlmYSBUaCBCVCcsICdTaGVsbGV5Vm9sYW50ZSBCVCcsICdTaGVyd29vZCcsXG4gICAgICAgICAnU2hvbmFyIEJhbmdsYScsICdTaG93Y2FyZCBHb3RoaWMnLCAnU2hydXRpJywgJ1NpZ25ib2FyZCcsICdTSUxLU0NSRUVOJywgJ1NpbUhlaScsICdTaW1wbGlmaWVkIEFyYWJpYycsICdTaW1wbGlmaWVkIEFyYWJpYyBGaXhlZCcsICdTaW1TdW4nLCAnU2ltU3VuLUV4dEInLCAnU2luaGFsYSBTYW5nYW0gTU4nLCAnU2tldGNoIFJvY2t3ZWxsJywgJ1NraWEnLCAnU21hbGwgRm9udHMnLCAnU25hcCBJVEMnLCAnU25lbGwgUm91bmRoYW5kJywgJ1NvY2tldCcsXG4gICAgICAgICAnU291dmVuaXIgTHQgQlQnLCAnU3RhY2NhdG8yMjIgQlQnLCAnU3RlYW1lcicsICdTdGVuY2lsJywgJ1N0b3J5Ym9vaycsICdTdHlsbG8nLCAnU3Vid2F5JywgJ1N3aXM3MjEgQmxrRXggQlQnLCAnU3dpc3M5MTEgWENtIEJUJywgJ1N5bGZhZW4nLCAnU3luY2hybyBMRVQnLCAnU3lzdGVtJywgJ1RhbWlsIFNhbmdhbSBNTicsICdUZWNobmljYWwnLCAnVGVsZXR5cGUnLCAnVGVsdWd1IFNhbmdhbSBNTicsICdUZW1wdXMgU2FucyBJVEMnLFxuICAgICAgICAgJ1Rlcm1pbmFsJywgJ1Rob25idXJpJywgJ1RyYWRpdGlvbmFsIEFyYWJpYycsICdUcmFqYW4nLCAnVFJBSkFOIFBSTycsICdUcmlzdGFuJywgJ1R1YnVsYXInLCAnVHVuZ2EnLCAnVHcgQ2VuIE1UJywgJ1R3IENlbiBNVCBDb25kZW5zZWQnLCAnVHcgQ2VuIE1UIENvbmRlbnNlZCBFeHRyYSBCb2xkJyxcbiAgICAgICAgICdUeXBvVXByaWdodCBCVCcsICdVbmljb3JuJywgJ1VuaXZlcnMnLCAnVW5pdmVycyBDRSA1NSBNZWRpdW0nLCAnVW5pdmVycyBDb25kZW5zZWQnLCAnVXRzYWFoJywgJ1ZhZ2Fib25kJywgJ1ZhbmknLCAnVmlqYXlhJywgJ1ZpbmVyIEhhbmQgSVRDJywgJ1Zpc3VhbFVJJywgJ1ZpdmFsZGknLCAnVmxhZGltaXIgU2NyaXB0JywgJ1ZyaW5kYScsICdXZXN0bWluc3RlcicsICdXSElUTkVZJywgJ1dpZGUgTGF0aW4nLFxuICAgICAgICAgJ1phcGZFbGxpcHQgQlQnLCAnWmFwZkh1bW5zdCBCVCcsICdaYXBmSHVtbnN0IERtIEJUJywgJ1phcGZpbm8nLCAnWnVyaWNoIEJsa0V4IEJUJywgJ1p1cmljaCBFeCBCVCcsICdaV0Fkb2JlRiddXG4gICAgICAgZm9udExpc3QgPSBmb250TGlzdC5jb25jYXQoZXh0ZW5kZWRGb250TGlzdClcbiAgICAgfVxuXG4gICAgIGZvbnRMaXN0ID0gZm9udExpc3QuY29uY2F0KG9wdGlvbnMuZm9udHMudXNlckRlZmluZWRGb250cylcblxuICAgICAvLyByZW1vdmUgZHVwbGljYXRlIGZvbnRzXG4gICAgIGZvbnRMaXN0ID0gZm9udExpc3QuZmlsdGVyKGZ1bmN0aW9uIChmb250LCBwb3NpdGlvbikge1xuICAgICAgIHJldHVybiBmb250TGlzdC5pbmRleE9mKGZvbnQpID09PSBwb3NpdGlvblxuICAgICB9KVxuXG4gICAgIC8vIHdlIHVzZSBtIG9yIHcgYmVjYXVzZSB0aGVzZSB0d28gY2hhcmFjdGVycyB0YWtlIHVwIHRoZSBtYXhpbXVtIHdpZHRoLlxuICAgICAvLyBBbmQgd2UgdXNlIGEgTExpIHNvIHRoYXQgdGhlIHNhbWUgbWF0Y2hpbmcgZm9udHMgY2FuIGdldCBzZXBhcmF0ZWRcbiAgICAgdmFyIHRlc3RTdHJpbmcgPSAnbW1tbW1tbW1tbWxsaSdcblxuICAgICAvLyB3ZSB0ZXN0IHVzaW5nIDcycHggZm9udCBzaXplLCB3ZSBtYXkgdXNlIGFueSBzaXplLiBJIGd1ZXNzIGxhcmdlciB0aGUgYmV0dGVyLlxuICAgICB2YXIgdGVzdFNpemUgPSAnNzJweCdcblxuICAgICB2YXIgaCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF1cblxuICAgICAvLyBkaXYgdG8gbG9hZCBzcGFucyBmb3IgdGhlIGJhc2UgZm9udHNcbiAgICAgdmFyIGJhc2VGb250c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgLy8gZGl2IHRvIGxvYWQgc3BhbnMgZm9yIHRoZSBmb250cyB0byBkZXRlY3RcbiAgICAgdmFyIGZvbnRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICB2YXIgZGVmYXVsdFdpZHRoID0ge31cbiAgICAgdmFyIGRlZmF1bHRIZWlnaHQgPSB7fVxuXG4gICAgIC8vIGNyZWF0ZXMgYSBzcGFuIHdoZXJlIHRoZSBmb250cyB3aWxsIGJlIGxvYWRlZFxuICAgICB2YXIgY3JlYXRlU3BhbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgIC8qXG4gICAgICAgICogV2UgbmVlZCB0aGlzIGNzcyBhcyBpbiBzb21lIHdlaXJkIGJyb3dzZXIgdGhpc1xuICAgICAgICAqIHNwYW4gZWxlbWVudHMgc2hvd3MgdXAgZm9yIGEgbWljcm9TZWMgd2hpY2ggY3JlYXRlcyBhXG4gICAgICAgICogYmFkIHVzZXIgZXhwZXJpZW5jZVxuICAgICAgICAqL1xuICAgICAgIHMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgICAgcy5zdHlsZS5sZWZ0ID0gJy05OTk5cHgnXG4gICAgICAgcy5zdHlsZS5mb250U2l6ZSA9IHRlc3RTaXplXG5cbiAgICAgICAvLyBjc3MgZm9udCByZXNldCB0byByZXNldCBleHRlcm5hbCBzdHlsZXNcbiAgICAgICBzLnN0eWxlLmZvbnRTdHlsZSA9ICdub3JtYWwnXG4gICAgICAgcy5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCdcbiAgICAgICBzLnN0eWxlLmxldHRlclNwYWNpbmcgPSAnbm9ybWFsJ1xuICAgICAgIHMuc3R5bGUubGluZUJyZWFrID0gJ2F1dG8nXG4gICAgICAgcy5zdHlsZS5saW5lSGVpZ2h0ID0gJ25vcm1hbCdcbiAgICAgICBzLnN0eWxlLnRleHRUcmFuc2Zvcm0gPSAnbm9uZSdcbiAgICAgICBzLnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0J1xuICAgICAgIHMuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSdcbiAgICAgICBzLnN0eWxlLnRleHRTaGFkb3cgPSAnbm9uZSdcbiAgICAgICBzLnN0eWxlLndoaXRlU3BhY2UgPSAnbm9ybWFsJ1xuICAgICAgIHMuc3R5bGUud29yZEJyZWFrID0gJ25vcm1hbCdcbiAgICAgICBzLnN0eWxlLndvcmRTcGFjaW5nID0gJ25vcm1hbCdcblxuICAgICAgIHMuaW5uZXJIVE1MID0gdGVzdFN0cmluZ1xuICAgICAgIHJldHVybiBzXG4gICAgIH1cblxuICAgICAvLyBjcmVhdGVzIGEgc3BhbiBhbmQgbG9hZCB0aGUgZm9udCB0byBkZXRlY3QgYW5kIGEgYmFzZSBmb250IGZvciBmYWxsYmFja1xuICAgICB2YXIgY3JlYXRlU3BhbldpdGhGb250cyA9IGZ1bmN0aW9uIChmb250VG9EZXRlY3QsIGJhc2VGb250KSB7XG4gICAgICAgdmFyIHMgPSBjcmVhdGVTcGFuKClcbiAgICAgICBzLnN0eWxlLmZvbnRGYW1pbHkgPSBcIidcIiArIGZvbnRUb0RldGVjdCArIFwiJyxcIiArIGJhc2VGb250XG4gICAgICAgcmV0dXJuIHNcbiAgICAgfVxuXG4gICAgIC8vIGNyZWF0ZXMgc3BhbnMgZm9yIHRoZSBiYXNlIGZvbnRzIGFuZCBhZGRzIHRoZW0gdG8gYmFzZUZvbnRzRGl2XG4gICAgIHZhciBpbml0aWFsaXplQmFzZUZvbnRzU3BhbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgdmFyIHNwYW5zID0gW11cbiAgICAgICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aCA9IGJhc2VGb250cy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICB2YXIgcyA9IGNyZWF0ZVNwYW4oKVxuICAgICAgICAgcy5zdHlsZS5mb250RmFtaWx5ID0gYmFzZUZvbnRzW2luZGV4XVxuICAgICAgICAgYmFzZUZvbnRzRGl2LmFwcGVuZENoaWxkKHMpXG4gICAgICAgICBzcGFucy5wdXNoKHMpXG4gICAgICAgfVxuICAgICAgIHJldHVybiBzcGFuc1xuICAgICB9XG5cbiAgICAgLy8gY3JlYXRlcyBzcGFucyBmb3IgdGhlIGZvbnRzIHRvIGRldGVjdCBhbmQgYWRkcyB0aGVtIHRvIGZvbnRzRGl2XG4gICAgIHZhciBpbml0aWFsaXplRm9udHNTcGFucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICB2YXIgc3BhbnMgPSB7fVxuICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZm9udExpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICB2YXIgZm9udFNwYW5zID0gW11cbiAgICAgICAgIGZvciAodmFyIGogPSAwLCBudW1EZWZhdWx0Rm9udHMgPSBiYXNlRm9udHMubGVuZ3RoOyBqIDwgbnVtRGVmYXVsdEZvbnRzOyBqKyspIHtcbiAgICAgICAgICAgdmFyIHMgPSBjcmVhdGVTcGFuV2l0aEZvbnRzKGZvbnRMaXN0W2ldLCBiYXNlRm9udHNbal0pXG4gICAgICAgICAgIGZvbnRzRGl2LmFwcGVuZENoaWxkKHMpXG4gICAgICAgICAgIGZvbnRTcGFucy5wdXNoKHMpXG4gICAgICAgICB9XG4gICAgICAgICBzcGFuc1tmb250TGlzdFtpXV0gPSBmb250U3BhbnMgLy8gU3RvcmVzIHtmb250TmFtZSA6IFtzcGFucyBmb3IgdGhhdCBmb250XX1cbiAgICAgICB9XG4gICAgICAgcmV0dXJuIHNwYW5zXG4gICAgIH1cblxuICAgICAvLyBjaGVja3MgaWYgYSBmb250IGlzIGF2YWlsYWJsZVxuICAgICB2YXIgaXNGb250QXZhaWxhYmxlID0gZnVuY3Rpb24gKGZvbnRTcGFucykge1xuICAgICAgIHZhciBkZXRlY3RlZCA9IGZhbHNlXG4gICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiYXNlRm9udHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGRldGVjdGVkID0gKGZvbnRTcGFuc1tpXS5vZmZzZXRXaWR0aCAhPT0gZGVmYXVsdFdpZHRoW2Jhc2VGb250c1tpXV0gfHwgZm9udFNwYW5zW2ldLm9mZnNldEhlaWdodCAhPT0gZGVmYXVsdEhlaWdodFtiYXNlRm9udHNbaV1dKVxuICAgICAgICAgaWYgKGRldGVjdGVkKSB7XG4gICAgICAgICAgIHJldHVybiBkZXRlY3RlZFxuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICByZXR1cm4gZGV0ZWN0ZWRcbiAgICAgfVxuXG4gICAgIC8vIGNyZWF0ZSBzcGFucyBmb3IgYmFzZSBmb250c1xuICAgICB2YXIgYmFzZUZvbnRzU3BhbnMgPSBpbml0aWFsaXplQmFzZUZvbnRzU3BhbnMoKVxuXG4gICAgIC8vIGFkZCB0aGUgc3BhbnMgdG8gdGhlIERPTVxuICAgICBoLmFwcGVuZENoaWxkKGJhc2VGb250c0RpdilcblxuICAgICAvLyBnZXQgdGhlIGRlZmF1bHQgd2lkdGggZm9yIHRoZSB0aHJlZSBiYXNlIGZvbnRzXG4gICAgIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoID0gYmFzZUZvbnRzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICBkZWZhdWx0V2lkdGhbYmFzZUZvbnRzW2luZGV4XV0gPSBiYXNlRm9udHNTcGFuc1tpbmRleF0ub2Zmc2V0V2lkdGggLy8gd2lkdGggZm9yIHRoZSBkZWZhdWx0IGZvbnRcbiAgICAgICBkZWZhdWx0SGVpZ2h0W2Jhc2VGb250c1tpbmRleF1dID0gYmFzZUZvbnRzU3BhbnNbaW5kZXhdLm9mZnNldEhlaWdodCAvLyBoZWlnaHQgZm9yIHRoZSBkZWZhdWx0IGZvbnRcbiAgICAgfVxuXG4gICAgIC8vIGNyZWF0ZSBzcGFucyBmb3IgZm9udHMgdG8gZGV0ZWN0XG4gICAgIHZhciBmb250c1NwYW5zID0gaW5pdGlhbGl6ZUZvbnRzU3BhbnMoKVxuXG4gICAgIC8vIGFkZCBhbGwgdGhlIHNwYW5zIHRvIHRoZSBET01cbiAgICAgaC5hcHBlbmRDaGlsZChmb250c0RpdilcblxuICAgICAvLyBjaGVjayBhdmFpbGFibGUgZm9udHNcbiAgICAgdmFyIGF2YWlsYWJsZSA9IFtdXG4gICAgIGZvciAodmFyIGkgPSAwLCBsID0gZm9udExpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgaWYgKGlzRm9udEF2YWlsYWJsZShmb250c1NwYW5zW2ZvbnRMaXN0W2ldXSkpIHtcbiAgICAgICAgIGF2YWlsYWJsZS5wdXNoKGZvbnRMaXN0W2ldKVxuICAgICAgIH1cbiAgICAgfVxuXG4gICAgIC8vIHJlbW92ZSBzcGFucyBmcm9tIERPTVxuICAgICBoLnJlbW92ZUNoaWxkKGZvbnRzRGl2KVxuICAgICBoLnJlbW92ZUNoaWxkKGJhc2VGb250c0RpdilcbiAgICAgZG9uZShhdmFpbGFibGUpXG4gICB9XG4gICB2YXIgcGx1Z2luc0NvbXBvbmVudCA9IGZ1bmN0aW9uIChkb25lLCBvcHRpb25zKSB7XG4gICAgIGlmIChpc0lFKCkpIHtcbiAgICAgICBpZiAoIW9wdGlvbnMucGx1Z2lucy5leGNsdWRlSUUpIHtcbiAgICAgICAgIGRvbmUoZ2V0SUVQbHVnaW5zKG9wdGlvbnMpKVxuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICBkb25lKG9wdGlvbnMuRVhDTFVERUQpXG4gICAgICAgfVxuICAgICB9IGVsc2Uge1xuICAgICAgIGRvbmUoZ2V0UmVndWxhclBsdWdpbnMob3B0aW9ucykpXG4gICAgIH1cbiAgIH1cbiAgIHZhciBnZXRSZWd1bGFyUGx1Z2lucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgIGlmIChuYXZpZ2F0b3IucGx1Z2lucyA9PSBudWxsKSB7XG4gICAgICAgcmV0dXJuIG9wdGlvbnMuTk9UX0FWQUlMQUJMRVxuICAgICB9XG5cbiAgICAgdmFyIHBsdWdpbnMgPSBbXVxuICAgICAvLyBwbHVnaW5zIGlzbid0IGRlZmluZWQgaW4gTm9kZSBlbnZzLlxuICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG5hdmlnYXRvci5wbHVnaW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgIGlmIChuYXZpZ2F0b3IucGx1Z2luc1tpXSkgeyBwbHVnaW5zLnB1c2gobmF2aWdhdG9yLnBsdWdpbnNbaV0pIH1cbiAgICAgfVxuXG4gICAgIC8vIHNvcnRpbmcgcGx1Z2lucyBvbmx5IGZvciB0aG9zZSB1c2VyIGFnZW50cywgdGhhdCB3ZSBrbm93IHJhbmRvbWl6ZSB0aGUgcGx1Z2luc1xuICAgICAvLyBldmVyeSB0aW1lIHdlIHRyeSB0byBlbnVtZXJhdGUgdGhlbVxuICAgICBpZiAocGx1Z2luc1Nob3VsZEJlU29ydGVkKG9wdGlvbnMpKSB7XG4gICAgICAgcGx1Z2lucyA9IHBsdWdpbnMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgaWYgKGEubmFtZSA+IGIubmFtZSkgeyByZXR1cm4gMSB9XG4gICAgICAgICBpZiAoYS5uYW1lIDwgYi5uYW1lKSB7IHJldHVybiAtMSB9XG4gICAgICAgICByZXR1cm4gMFxuICAgICAgIH0pXG4gICAgIH1cbiAgICAgcmV0dXJuIG1hcChwbHVnaW5zLCBmdW5jdGlvbiAocCkge1xuICAgICAgIHZhciBtaW1lVHlwZXMgPSBtYXAocCwgZnVuY3Rpb24gKG10KSB7XG4gICAgICAgICByZXR1cm4gW210LnR5cGUsIG10LnN1ZmZpeGVzXVxuICAgICAgIH0pXG4gICAgICAgcmV0dXJuIFtwLm5hbWUsIHAuZGVzY3JpcHRpb24sIG1pbWVUeXBlc11cbiAgICAgfSlcbiAgIH1cbiAgIHZhciBnZXRJRVBsdWdpbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICB2YXIgcmVzdWx0ID0gW11cbiAgICAgaWYgKChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LCAnQWN0aXZlWE9iamVjdCcpKSB8fCAoJ0FjdGl2ZVhPYmplY3QnIGluIHdpbmRvdykpIHtcbiAgICAgICB2YXIgbmFtZXMgPSBbXG4gICAgICAgICAnQWNyb1BERi5QREYnLCAvLyBBZG9iZSBQREYgcmVhZGVyIDcrXG4gICAgICAgICAnQWRvZGIuU3RyZWFtJyxcbiAgICAgICAgICdBZ0NvbnRyb2wuQWdDb250cm9sJywgLy8gU2lsdmVybGlnaHRcbiAgICAgICAgICdEZXZhbFZSWEN0cmwuRGV2YWxWUlhDdHJsLjEnLFxuICAgICAgICAgJ01hY3JvbWVkaWFGbGFzaFBhcGVyLk1hY3JvbWVkaWFGbGFzaFBhcGVyJyxcbiAgICAgICAgICdNc3htbDIuRE9NRG9jdW1lbnQnLFxuICAgICAgICAgJ01zeG1sMi5YTUxIVFRQJyxcbiAgICAgICAgICdQREYuUGRmQ3RybCcsIC8vIEFkb2JlIFBERiByZWFkZXIgNiBhbmQgZWFybGllciwgYnJyclxuICAgICAgICAgJ1F1aWNrVGltZS5RdWlja1RpbWUnLCAvLyBRdWlja1RpbWVcbiAgICAgICAgICdRdWlja1RpbWVDaGVja09iamVjdC5RdWlja1RpbWVDaGVjay4xJyxcbiAgICAgICAgICdSZWFsUGxheWVyJyxcbiAgICAgICAgICdSZWFsUGxheWVyLlJlYWxQbGF5ZXIodG0pIEFjdGl2ZVggQ29udHJvbCAoMzItYml0KScsXG4gICAgICAgICAnUmVhbFZpZGVvLlJlYWxWaWRlbyh0bSkgQWN0aXZlWCBDb250cm9sICgzMi1iaXQpJyxcbiAgICAgICAgICdTY3JpcHRpbmcuRGljdGlvbmFyeScsXG4gICAgICAgICAnU1dDdGwuU1dDdGwnLCAvLyBTaG9ja1dhdmUgcGxheWVyXG4gICAgICAgICAnU2hlbGwuVUlIZWxwZXInLFxuICAgICAgICAgJ1Nob2Nrd2F2ZUZsYXNoLlNob2Nrd2F2ZUZsYXNoJywgLy8gZmxhc2ggcGx1Z2luXG4gICAgICAgICAnU2t5cGUuRGV0ZWN0aW9uJyxcbiAgICAgICAgICdURENDdGwuVERDQ3RsJyxcbiAgICAgICAgICdXTVBsYXllci5PQ1gnLCAvLyBXaW5kb3dzIG1lZGlhIHBsYXllclxuICAgICAgICAgJ3Jtb2N4LlJlYWxQbGF5ZXIgRzIgQ29udHJvbCcsXG4gICAgICAgICAncm1vY3guUmVhbFBsYXllciBHMiBDb250cm9sLjEnXG4gICAgICAgXVxuICAgICAgIC8vIHN0YXJ0aW5nIHRvIGRldGVjdCBwbHVnaW5zIGluIElFXG4gICAgICAgcmVzdWx0ID0gbWFwKG5hbWVzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgICAgICAgICBuZXcgd2luZG93LkFjdGl2ZVhPYmplY3QobmFtZSlcbiAgICAgICAgICAgcmV0dXJuIG5hbWVcbiAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuRVJST1JcbiAgICAgICAgIH1cbiAgICAgICB9KVxuICAgICB9IGVsc2Uge1xuICAgICAgIHJlc3VsdC5wdXNoKG9wdGlvbnMuTk9UX0FWQUlMQUJMRSlcbiAgICAgfVxuICAgICBpZiAobmF2aWdhdG9yLnBsdWdpbnMpIHtcbiAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGdldFJlZ3VsYXJQbHVnaW5zKG9wdGlvbnMpKVxuICAgICB9XG4gICAgIHJldHVybiByZXN1bHRcbiAgIH1cbiAgIHZhciBwbHVnaW5zU2hvdWxkQmVTb3J0ZWQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICB2YXIgc2hvdWxkID0gZmFsc2VcbiAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvcHRpb25zLnBsdWdpbnMuc29ydFBsdWdpbnNGb3IubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgdmFyIHJlID0gb3B0aW9ucy5wbHVnaW5zLnNvcnRQbHVnaW5zRm9yW2ldXG4gICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gocmUpKSB7XG4gICAgICAgICBzaG91bGQgPSB0cnVlXG4gICAgICAgICBicmVha1xuICAgICAgIH1cbiAgICAgfVxuICAgICByZXR1cm4gc2hvdWxkXG4gICB9XG4gICB2YXIgdG91Y2hTdXBwb3J0S2V5ID0gZnVuY3Rpb24gKGRvbmUpIHtcbiAgICAgZG9uZShnZXRUb3VjaFN1cHBvcnQoKSlcbiAgIH1cbiAgIHZhciBoYXJkd2FyZUNvbmN1cnJlbmN5S2V5ID0gZnVuY3Rpb24gKGRvbmUsIG9wdGlvbnMpIHtcbiAgICAgZG9uZShnZXRIYXJkd2FyZUNvbmN1cnJlbmN5KG9wdGlvbnMpKVxuICAgfVxuICAgdmFyIGhhc1Nlc3Npb25TdG9yYWdlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgdHJ5IHtcbiAgICAgICByZXR1cm4gISF3aW5kb3cuc2Vzc2lvblN0b3JhZ2VcbiAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgIHJldHVybiBvcHRpb25zLkVSUk9SIC8vIFNlY3VyaXR5RXJyb3Igd2hlbiByZWZlcmVuY2luZyBpdCBtZWFucyBpdCBleGlzdHNcbiAgICAgfVxuICAgfVxuXG4gICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03ODE0NDdcbiAgIHZhciBoYXNMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICB0cnkge1xuICAgICAgIHJldHVybiAhIXdpbmRvdy5sb2NhbFN0b3JhZ2VcbiAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgIHJldHVybiBvcHRpb25zLkVSUk9SIC8vIFNlY3VyaXR5RXJyb3Igd2hlbiByZWZlcmVuY2luZyBpdCBtZWFucyBpdCBleGlzdHNcbiAgICAgfVxuICAgfVxuICAgdmFyIGhhc0luZGV4ZWREQiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgIC8vIElFIGFuZCBFZGdlIGRvbid0IGFsbG93IGFjY2Vzc2luZyBpbmRleGVkREIgaW4gcHJpdmF0ZSBtb2RlLCB0aGVyZWZvcmUgSUUgYW5kIEVkZ2Ugd2lsbCBoYXZlIGRpZmZlcmVudFxuICAgICAvLyBmaW5nZXJwcmludHMgaW4gbm9ybWFsIGFuZCBwcml2YXRlIG1vZGVzLlxuICAgICBpZiAoaXNJRU9yT2xkRWRnZSgpKSB7XG4gICAgICAgcmV0dXJuIG9wdGlvbnMuRVhDTFVERURcbiAgICAgfVxuICAgICB0cnkge1xuICAgICAgIHJldHVybiAhIXdpbmRvdy5pbmRleGVkREJcbiAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgIHJldHVybiBvcHRpb25zLkVSUk9SIC8vIFNlY3VyaXR5RXJyb3Igd2hlbiByZWZlcmVuY2luZyBpdCBtZWFucyBpdCBleGlzdHNcbiAgICAgfVxuICAgfVxuICAgdmFyIGdldEhhcmR3YXJlQ29uY3VycmVuY3kgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICBpZiAobmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3kpIHtcbiAgICAgICByZXR1cm4gbmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3lcbiAgICAgfVxuICAgICByZXR1cm4gb3B0aW9ucy5OT1RfQVZBSUxBQkxFXG4gICB9XG4gICB2YXIgZ2V0TmF2aWdhdG9yQ3B1Q2xhc3MgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICByZXR1cm4gbmF2aWdhdG9yLmNwdUNsYXNzIHx8IG9wdGlvbnMuTk9UX0FWQUlMQUJMRVxuICAgfVxuICAgdmFyIGdldE5hdmlnYXRvclBsYXRmb3JtID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgaWYgKG5hdmlnYXRvci5wbGF0Zm9ybSkge1xuICAgICAgIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm1cbiAgICAgfSBlbHNlIHtcbiAgICAgICByZXR1cm4gb3B0aW9ucy5OT1RfQVZBSUxBQkxFXG4gICAgIH1cbiAgIH1cbiAgIHZhciBnZXREb05vdFRyYWNrID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgaWYgKG5hdmlnYXRvci5kb05vdFRyYWNrKSB7XG4gICAgICAgcmV0dXJuIG5hdmlnYXRvci5kb05vdFRyYWNrXG4gICAgIH0gZWxzZSBpZiAobmF2aWdhdG9yLm1zRG9Ob3RUcmFjaykge1xuICAgICAgIHJldHVybiBuYXZpZ2F0b3IubXNEb05vdFRyYWNrXG4gICAgIH0gZWxzZSBpZiAod2luZG93LmRvTm90VHJhY2spIHtcbiAgICAgICByZXR1cm4gd2luZG93LmRvTm90VHJhY2tcbiAgICAgfSBlbHNlIHtcbiAgICAgICByZXR1cm4gb3B0aW9ucy5OT1RfQVZBSUxBQkxFXG4gICAgIH1cbiAgIH1cbiAgIC8vIFRoaXMgaXMgYSBjcnVkZSBhbmQgcHJpbWl0aXZlIHRvdWNoIHNjcmVlbiBkZXRlY3Rpb24uXG4gICAvLyBJdCdzIG5vdCBwb3NzaWJsZSB0byBjdXJyZW50bHkgcmVsaWFibHkgZGV0ZWN0IHRoZSAgYXZhaWxhYmlsaXR5IG9mIGEgdG91Y2ggc2NyZWVuXG4gICAvLyB3aXRoIGEgSlMsIHdpdGhvdXQgYWN0dWFsbHkgc3Vic2NyaWJpbmcgdG8gYSB0b3VjaCBldmVudC5cbiAgIC8vIGh0dHA6Ly93d3cuc3R1Y294LmNvbS9ibG9nL3lvdS1jYW50LWRldGVjdC1hLXRvdWNoc2NyZWVuL1xuICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvaXNzdWVzLzU0OFxuICAgLy8gbWV0aG9kIHJldHVybnMgYW4gYXJyYXkgb2YgMyB2YWx1ZXM6XG4gICAvLyBtYXhUb3VjaFBvaW50cywgdGhlIHN1Y2Nlc3Mgb3IgZmFpbHVyZSBvZiBjcmVhdGluZyBhIFRvdWNoRXZlbnQsXG4gICAvLyBhbmQgdGhlIGF2YWlsYWJpbGl0eSBvZiB0aGUgJ29udG91Y2hzdGFydCcgcHJvcGVydHlcblxuICAgdmFyIGdldFRvdWNoU3VwcG9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgdmFyIG1heFRvdWNoUG9pbnRzID0gMFxuICAgICB2YXIgdG91Y2hFdmVudFxuICAgICBpZiAodHlwZW9mIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICBtYXhUb3VjaFBvaW50cyA9IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50c1xuICAgICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICBtYXhUb3VjaFBvaW50cyA9IG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzXG4gICAgIH1cbiAgICAgdHJ5IHtcbiAgICAgICBkb2N1bWVudC5jcmVhdGVFdmVudCgnVG91Y2hFdmVudCcpXG4gICAgICAgdG91Y2hFdmVudCA9IHRydWVcbiAgICAgfSBjYXRjaCAoXykge1xuICAgICAgIHRvdWNoRXZlbnQgPSBmYWxzZVxuICAgICB9XG4gICAgIHZhciB0b3VjaFN0YXJ0ID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG4gICAgIHJldHVybiBbbWF4VG91Y2hQb2ludHMsIHRvdWNoRXZlbnQsIHRvdWNoU3RhcnRdXG4gICB9XG4gICAvLyBodHRwczovL3d3dy5icm93c2VybGVha3MuY29tL2NhbnZhcyNob3ctZG9lcy1pdC13b3JrXG5cbiAgIHZhciBnZXRDYW52YXNGcCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgIHZhciByZXN1bHQgPSBbXVxuICAgICAvLyBWZXJ5IHNpbXBsZSBub3csIG5lZWQgdG8gbWFrZSBpdCBtb3JlIGNvbXBsZXggKGdlbyBzaGFwZXMgZXRjKVxuICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgY2FudmFzLndpZHRoID0gMjAwMFxuICAgICBjYW52YXMuaGVpZ2h0ID0gMjAwXG4gICAgIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgIC8vIGRldGVjdCBicm93c2VyIHN1cHBvcnQgb2YgY2FudmFzIHdpbmRpbmdcbiAgICAgLy8gaHR0cDovL2Jsb2dzLmFkb2JlLmNvbS93ZWJwbGF0Zm9ybS8yMDEzLzAxLzMwL3dpbmRpbmctcnVsZXMtaW4tY2FudmFzL1xuICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvY2FudmFzL3dpbmRpbmcuanNcbiAgICAgY3R4LnJlY3QoMCwgMCwgMTAsIDEwKVxuICAgICBjdHgucmVjdCgyLCAyLCA2LCA2KVxuICAgICByZXN1bHQucHVzaCgnY2FudmFzIHdpbmRpbmc6JyArICgoY3R4LmlzUG9pbnRJblBhdGgoNSwgNSwgJ2V2ZW5vZGQnKSA9PT0gZmFsc2UpID8gJ3llcycgOiAnbm8nKSlcblxuICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ2FscGhhYmV0aWMnXG4gICAgIGN0eC5maWxsU3R5bGUgPSAnI2Y2MCdcbiAgICAgY3R4LmZpbGxSZWN0KDEyNSwgMSwgNjIsIDIwKVxuICAgICBjdHguZmlsbFN0eWxlID0gJyMwNjknXG4gICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9maW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMvaXNzdWVzLzY2XG4gICAgIGlmIChvcHRpb25zLmRvbnRVc2VGYWtlRm9udEluQ2FudmFzKSB7XG4gICAgICAgY3R4LmZvbnQgPSAnMTFwdCBBcmlhbCdcbiAgICAgfSBlbHNlIHtcbiAgICAgICBjdHguZm9udCA9ICcxMXB0IG5vLXJlYWwtZm9udC0xMjMnXG4gICAgIH1cbiAgICAgY3R4LmZpbGxUZXh0KCdDd20gZmpvcmRiYW5rIGdseXBocyB2ZXh0IHF1aXosIFxcdWQ4M2RcXHVkZTAzJywgMiwgMTUpXG4gICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgxMDIsIDIwNCwgMCwgMC4yKSdcbiAgICAgY3R4LmZvbnQgPSAnMThwdCBBcmlhbCdcbiAgICAgY3R4LmZpbGxUZXh0KCdDd20gZmpvcmRiYW5rIGdseXBocyB2ZXh0IHF1aXosIFxcdWQ4M2RcXHVkZTAzJywgNCwgNDUpXG5cbiAgICAgLy8gY2FudmFzIGJsZW5kaW5nXG4gICAgIC8vIGh0dHA6Ly9ibG9ncy5hZG9iZS5jb20vd2VicGxhdGZvcm0vMjAxMy8wMS8yOC9ibGVuZGluZy1mZWF0dXJlcy1pbi1jYW52YXMvXG4gICAgIC8vIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvTkRZVjgvMTYvXG4gICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknXG4gICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDI1NSknXG4gICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICBjdHguYXJjKDUwLCA1MCwgNTAsIDAsIE1hdGguUEkgKiAyLCB0cnVlKVxuICAgICBjdHguY2xvc2VQYXRoKClcbiAgICAgY3R4LmZpbGwoKVxuICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigwLDI1NSwyNTUpJ1xuICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgY3R4LmFyYygxMDAsIDUwLCA1MCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpXG4gICAgIGN0eC5jbG9zZVBhdGgoKVxuICAgICBjdHguZmlsbCgpXG4gICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwyNTUsMCknXG4gICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICBjdHguYXJjKDc1LCAxMDAsIDUwLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSlcbiAgICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgIGN0eC5maWxsKClcbiAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMjU1KSdcbiAgICAgLy8gY2FudmFzIHdpbmRpbmdcbiAgICAgLy8gaHR0cDovL2Jsb2dzLmFkb2JlLmNvbS93ZWJwbGF0Zm9ybS8yMDEzLzAxLzMwL3dpbmRpbmctcnVsZXMtaW4tY2FudmFzL1xuICAgICAvLyBodHRwOi8vanNmaWRkbGUubmV0L05EWVY4LzE5L1xuICAgICBjdHguYXJjKDc1LCA3NSwgNzUsIDAsIE1hdGguUEkgKiAyLCB0cnVlKVxuICAgICBjdHguYXJjKDc1LCA3NSwgMjUsIDAsIE1hdGguUEkgKiAyLCB0cnVlKVxuICAgICBjdHguZmlsbCgnZXZlbm9kZCcpXG5cbiAgICAgaWYgKGNhbnZhcy50b0RhdGFVUkwpIHsgcmVzdWx0LnB1c2goJ2NhbnZhcyBmcDonICsgY2FudmFzLnRvRGF0YVVSTCgpKSB9XG4gICAgIHJldHVybiByZXN1bHRcbiAgIH1cbiAgIHZhciBnZXRXZWJnbEZwID0gZnVuY3Rpb24gKCkge1xuICAgICB2YXIgZ2xcbiAgICAgdmFyIGZhMnMgPSBmdW5jdGlvbiAoZmEpIHtcbiAgICAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMClcbiAgICAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVClcbiAgICAgICBnbC5kZXB0aEZ1bmMoZ2wuTEVRVUFMKVxuICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKVxuICAgICAgIHJldHVybiAnWycgKyBmYVswXSArICcsICcgKyBmYVsxXSArICddJ1xuICAgICB9XG4gICAgIHZhciBtYXhBbmlzb3Ryb3B5ID0gZnVuY3Rpb24gKGdsKSB7XG4gICAgICAgdmFyIGV4dCA9IGdsLmdldEV4dGVuc2lvbignRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljJykgfHwgZ2wuZ2V0RXh0ZW5zaW9uKCdXRUJLSVRfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljJykgfHwgZ2wuZ2V0RXh0ZW5zaW9uKCdNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljJylcbiAgICAgICBpZiAoZXh0KSB7XG4gICAgICAgICB2YXIgYW5pc290cm9weSA9IGdsLmdldFBhcmFtZXRlcihleHQuTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUKVxuICAgICAgICAgaWYgKGFuaXNvdHJvcHkgPT09IDApIHtcbiAgICAgICAgICAgYW5pc290cm9weSA9IDJcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBhbmlzb3Ryb3B5XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgfVxuICAgICB9XG5cbiAgICAgZ2wgPSBnZXRXZWJnbENhbnZhcygpXG4gICAgIGlmICghZ2wpIHsgcmV0dXJuIG51bGwgfVxuICAgICAvLyBXZWJHTCBmaW5nZXJwcmludGluZyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRlY2huaXF1ZXMsIGZvdW5kIGluIE1heE1pbmQgYW50aWZyYXVkIHNjcmlwdCAmIEF1Z3VyIGZpbmdlcnByaW50aW5nLlxuICAgICAvLyBGaXJzdCBpdCBkcmF3cyBhIGdyYWRpZW50IG9iamVjdCB3aXRoIHNoYWRlcnMgYW5kIGNvbnZlcnMgdGhlIGltYWdlIHRvIHRoZSBCYXNlNjQgc3RyaW5nLlxuICAgICAvLyBUaGVuIGl0IGVudW1lcmF0ZXMgYWxsIFdlYkdMIGV4dGVuc2lvbnMgJiBjYXBhYmlsaXRpZXMgYW5kIGFwcGVuZHMgdGhlbSB0byB0aGUgQmFzZTY0IHN0cmluZywgcmVzdWx0aW5nIGluIGEgaHVnZSBXZWJHTCBzdHJpbmcsIHBvdGVudGlhbGx5IHZlcnkgdW5pcXVlIG9uIGVhY2ggZGV2aWNlXG4gICAgIC8vIFNpbmNlIGlPUyBzdXBwb3J0cyB3ZWJnbCBzdGFydGluZyBmcm9tIHZlcnNpb24gOC4xIGFuZCA4LjEgcnVucyBvbiBzZXZlcmFsIGdyYXBoaWNzIGNoaXBzLCB0aGUgcmVzdWx0cyBtYXkgYmUgZGlmZmVyZW50IGFjcm9zcyBpb3MgZGV2aWNlcywgYnV0IHdlIG5lZWQgdG8gdmVyaWZ5IGl0LlxuICAgICB2YXIgcmVzdWx0ID0gW11cbiAgICAgdmFyIHZTaGFkZXJUZW1wbGF0ZSA9ICdhdHRyaWJ1dGUgdmVjMiBhdHRyVmVydGV4O3ZhcnlpbmcgdmVjMiB2YXJ5aW5UZXhDb29yZGluYXRlO3VuaWZvcm0gdmVjMiB1bmlmb3JtT2Zmc2V0O3ZvaWQgbWFpbigpe3ZhcnlpblRleENvb3JkaW5hdGU9YXR0clZlcnRleCt1bmlmb3JtT2Zmc2V0O2dsX1Bvc2l0aW9uPXZlYzQoYXR0clZlcnRleCwwLDEpO30nXG4gICAgIHZhciBmU2hhZGVyVGVtcGxhdGUgPSAncHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7dmFyeWluZyB2ZWMyIHZhcnlpblRleENvb3JkaW5hdGU7dm9pZCBtYWluKCkge2dsX0ZyYWdDb2xvcj12ZWM0KHZhcnlpblRleENvb3JkaW5hdGUsMCwxKTt9J1xuICAgICB2YXIgdmVydGV4UG9zQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKClcbiAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZlcnRleFBvc0J1ZmZlcilcbiAgICAgdmFyIHZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShbLTAuMiwgLTAuOSwgMCwgMC40LCAtMC4yNiwgMCwgMCwgMC43MzIxMzQ0NDQsIDBdKVxuICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdmVydGljZXMsIGdsLlNUQVRJQ19EUkFXKVxuICAgICB2ZXJ0ZXhQb3NCdWZmZXIuaXRlbVNpemUgPSAzXG4gICAgIHZlcnRleFBvc0J1ZmZlci5udW1JdGVtcyA9IDNcbiAgICAgdmFyIHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKClcbiAgICAgdmFyIHZzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUilcbiAgICAgZ2wuc2hhZGVyU291cmNlKHZzaGFkZXIsIHZTaGFkZXJUZW1wbGF0ZSlcbiAgICAgZ2wuY29tcGlsZVNoYWRlcih2c2hhZGVyKVxuICAgICB2YXIgZnNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpXG4gICAgIGdsLnNoYWRlclNvdXJjZShmc2hhZGVyLCBmU2hhZGVyVGVtcGxhdGUpXG4gICAgIGdsLmNvbXBpbGVTaGFkZXIoZnNoYWRlcilcbiAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZzaGFkZXIpXG4gICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmc2hhZGVyKVxuICAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKVxuICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pXG4gICAgIHByb2dyYW0udmVydGV4UG9zQXR0cmliID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2F0dHJWZXJ0ZXgnKVxuICAgICBwcm9ncmFtLm9mZnNldFVuaWZvcm0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VuaWZvcm1PZmZzZXQnKVxuICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwcm9ncmFtLnZlcnRleFBvc0FycmF5KVxuICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHByb2dyYW0udmVydGV4UG9zQXR0cmliLCB2ZXJ0ZXhQb3NCdWZmZXIuaXRlbVNpemUsIGdsLkZMT0FULCAhMSwgMCwgMClcbiAgICAgZ2wudW5pZm9ybTJmKHByb2dyYW0ub2Zmc2V0VW5pZm9ybSwgMSwgMSlcbiAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgdmVydGV4UG9zQnVmZmVyLm51bUl0ZW1zKVxuICAgICB0cnkge1xuICAgICAgIHJlc3VsdC5wdXNoKGdsLmNhbnZhcy50b0RhdGFVUkwoKSlcbiAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgIC8qIC50b0RhdGFVUkwgbWF5IGJlIGFic2VudCBvciBicm9rZW4gKGJsb2NrZWQgYnkgZXh0ZW5zaW9uKSAqL1xuICAgICB9XG4gICAgIHJlc3VsdC5wdXNoKCdleHRlbnNpb25zOicgKyAoZ2wuZ2V0U3VwcG9ydGVkRXh0ZW5zaW9ucygpIHx8IFtdKS5qb2luKCc7JykpXG4gICAgIHJlc3VsdC5wdXNoKCd3ZWJnbCBhbGlhc2VkIGxpbmUgd2lkdGggcmFuZ2U6JyArIGZhMnMoZ2wuZ2V0UGFyYW1ldGVyKGdsLkFMSUFTRURfTElORV9XSURUSF9SQU5HRSkpKVxuICAgICByZXN1bHQucHVzaCgnd2ViZ2wgYWxpYXNlZCBwb2ludCBzaXplIHJhbmdlOicgKyBmYTJzKGdsLmdldFBhcmFtZXRlcihnbC5BTElBU0VEX1BPSU5UX1NJWkVfUkFOR0UpKSlcbiAgICAgcmVzdWx0LnB1c2goJ3dlYmdsIGFscGhhIGJpdHM6JyArIGdsLmdldFBhcmFtZXRlcihnbC5BTFBIQV9CSVRTKSlcbiAgICAgcmVzdWx0LnB1c2goJ3dlYmdsIGFudGlhbGlhc2luZzonICsgKGdsLmdldENvbnRleHRBdHRyaWJ1dGVzKCkuYW50aWFsaWFzID8gJ3llcycgOiAnbm8nKSlcbiAgICAgcmVzdWx0LnB1c2goJ3dlYmdsIGJsdWUgYml0czonICsgZ2wuZ2V0UGFyYW1ldGVyKGdsLkJMVUVfQklUUykpXG4gICAgIHJlc3VsdC5wdXNoKCd3ZWJnbCBkZXB0aCBiaXRzOicgKyBnbC5nZXRQYXJhbWV0ZXIoZ2wuREVQVEhfQklUUykpXG4gICAgIHJlc3VsdC5wdXNoKCd3ZWJnbCBncmVlbiBiaXRzOicgKyBnbC5nZXRQYXJhbWV0ZXIoZ2wuR1JFRU5fQklUUykpXG4gICAgIHJlc3VsdC5wdXNoKCd3ZWJnbCBtYXggYW5pc290cm9weTonICsgbWF4QW5pc290cm9weShnbCkpXG4gICAgIHJlc3VsdC5wdXNoKCd3ZWJnbCBtYXggY29tYmluZWQgdGV4dHVyZSBpbWFnZSB1bml0czonICsgZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9DT01CSU5FRF9URVhUVVJFX0lNQUdFX1VOSVRTKSlcbiAgICAgcmVzdWx0LnB1c2goJ3dlYmdsIG1heCBjdWJlIG1hcCB0ZXh0dXJlIHNpemU6JyArIGdsLmdldFBhcmFtZXRlcihnbC5NQVhfQ1VCRV9NQVBfVEVYVFVSRV9TSVpFKSlcbiAgICAgcmVzdWx0LnB1c2goJ3dlYmdsIG1heCBmcmFnbWVudCB1bmlmb3JtIHZlY3RvcnM6JyArIGdsLmdldFBhcmFtZXRlcihnbC5NQVhfRlJBR01FTlRfVU5JRk9STV9WRUNUT1JTKSlcbiAgICAgcmVzdWx0LnB1c2goJ3dlYmdsIG1heCByZW5kZXIgYnVmZmVyIHNpemU6JyArIGdsLmdldFBhcmFtZXRlcihnbC5NQVhfUkVOREVSQlVGRkVSX1NJWkUpKVxuICAgICByZXN1bHQucHVzaCgnd2ViZ2wgbWF4IHRleHR1cmUgaW1hZ2UgdW5pdHM6JyArIGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9JTUFHRV9VTklUUykpXG4gICAgIHJlc3VsdC5wdXNoKCd3ZWJnbCBtYXggdGV4dHVyZSBzaXplOicgKyBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfU0laRSkpXG4gICAgIHJlc3VsdC5wdXNoKCd3ZWJnbCBtYXggdmFyeWluZyB2ZWN0b3JzOicgKyBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZBUllJTkdfVkVDVE9SUykpXG4gICAgIHJlc3VsdC5wdXNoKCd3ZWJnbCBtYXggdmVydGV4IGF0dHJpYnM6JyArIGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVkVSVEVYX0FUVFJJQlMpKVxuICAgICByZXN1bHQucHVzaCgnd2ViZ2wgbWF4IHZlcnRleCB0ZXh0dXJlIGltYWdlIHVuaXRzOicgKyBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9URVhUVVJFX0lNQUdFX1VOSVRTKSlcbiAgICAgcmVzdWx0LnB1c2goJ3dlYmdsIG1heCB2ZXJ0ZXggdW5pZm9ybSB2ZWN0b3JzOicgKyBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9VTklGT1JNX1ZFQ1RPUlMpKVxuICAgICByZXN1bHQucHVzaCgnd2ViZ2wgbWF4IHZpZXdwb3J0IGRpbXM6JyArIGZhMnMoZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WSUVXUE9SVF9ESU1TKSkpXG4gICAgIHJlc3VsdC5wdXNoKCd3ZWJnbCByZWQgYml0czonICsgZ2wuZ2V0UGFyYW1ldGVyKGdsLlJFRF9CSVRTKSlcbiAgICAgcmVzdWx0LnB1c2goJ3dlYmdsIHJlbmRlcmVyOicgKyBnbC5nZXRQYXJhbWV0ZXIoZ2wuUkVOREVSRVIpKVxuICAgICByZXN1bHQucHVzaCgnd2ViZ2wgc2hhZGluZyBsYW5ndWFnZSB2ZXJzaW9uOicgKyBnbC5nZXRQYXJhbWV0ZXIoZ2wuU0hBRElOR19MQU5HVUFHRV9WRVJTSU9OKSlcbiAgICAgcmVzdWx0LnB1c2goJ3dlYmdsIHN0ZW5jaWwgYml0czonICsgZ2wuZ2V0UGFyYW1ldGVyKGdsLlNURU5DSUxfQklUUykpXG4gICAgIHJlc3VsdC5wdXNoKCd3ZWJnbCB2ZW5kb3I6JyArIGdsLmdldFBhcmFtZXRlcihnbC5WRU5ET1IpKVxuICAgICByZXN1bHQucHVzaCgnd2ViZ2wgdmVyc2lvbjonICsgZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pKVxuXG4gICAgIHRyeSB7XG4gICAgICAgLy8gQWRkIHRoZSB1bm1hc2tlZCB2ZW5kb3IgYW5kIHVubWFza2VkIHJlbmRlcmVyIGlmIHRoZSBkZWJ1Z19yZW5kZXJlcl9pbmZvIGV4dGVuc2lvbiBpcyBhdmFpbGFibGVcbiAgICAgICB2YXIgZXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8gPSBnbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2RlYnVnX3JlbmRlcmVyX2luZm8nKVxuICAgICAgIGlmIChleHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mbykge1xuICAgICAgICAgcmVzdWx0LnB1c2goJ3dlYmdsIHVubWFza2VkIHZlbmRvcjonICsgZ2wuZ2V0UGFyYW1ldGVyKGV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvLlVOTUFTS0VEX1ZFTkRPUl9XRUJHTCkpXG4gICAgICAgICByZXN1bHQucHVzaCgnd2ViZ2wgdW5tYXNrZWQgcmVuZGVyZXI6JyArIGdsLmdldFBhcmFtZXRlcihleHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mby5VTk1BU0tFRF9SRU5ERVJFUl9XRUJHTCkpXG4gICAgICAgfVxuICAgICB9IGNhdGNoIChlKSB7IC8qIHNxdWVsY2ggKi8gfVxuXG4gICAgIGlmICghZ2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KSB7XG4gICAgICAgbG9zZVdlYmdsQ29udGV4dChnbClcbiAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgIH1cblxuICAgICBlYWNoKFsnRkxPQVQnLCAnSU5UJ10sIGZ1bmN0aW9uIChudW1UeXBlKSB7XG4gICAgICAgZWFjaChbJ1ZFUlRFWCcsICdGUkFHTUVOVCddLCBmdW5jdGlvbiAoc2hhZGVyKSB7XG4gICAgICAgICBlYWNoKFsnSElHSCcsICdNRURJVU0nLCAnTE9XJ10sIGZ1bmN0aW9uIChudW1TaXplKSB7XG4gICAgICAgICAgIGVhY2goWydwcmVjaXNpb24nLCAncmFuZ2VNaW4nLCAncmFuZ2VNYXgnXSwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgIHZhciBmb3JtYXQgPSBnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2xbc2hhZGVyICsgJ19TSEFERVInXSwgZ2xbbnVtU2l6ZSArICdfJyArIG51bVR5cGVdKVtrZXldXG4gICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3ByZWNpc2lvbicpIHtcbiAgICAgICAgICAgICAgIGtleSA9ICdwcmVjaXNpb24gJyArIGtleVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB2YXIgbGluZSA9IFsnd2ViZ2wgJywgc2hhZGVyLnRvTG93ZXJDYXNlKCksICcgc2hhZGVyICcsIG51bVNpemUudG9Mb3dlckNhc2UoKSwgJyAnLCBudW1UeXBlLnRvTG93ZXJDYXNlKCksICcgJywga2V5LCAnOicsIGZvcm1hdF0uam9pbignJylcbiAgICAgICAgICAgICByZXN1bHQucHVzaChsaW5lKVxuICAgICAgICAgICB9KVxuICAgICAgICAgfSlcbiAgICAgICB9KVxuICAgICB9KVxuICAgICBsb3NlV2ViZ2xDb250ZXh0KGdsKVxuICAgICByZXR1cm4gcmVzdWx0XG4gICB9XG4gICB2YXIgZ2V0V2ViZ2xWZW5kb3JBbmRSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgLyogVGhpcyBhIHN1YnNldCBvZiB0aGUgV2ViR0wgZmluZ2VycHJpbnQgd2l0aCBhIGxvdCBvZiBlbnRyb3B5LCB3aGlsZSBiZWluZyByZWFzb25hYmx5IGJyb3dzZXItaW5kZXBlbmRlbnQgKi9cbiAgICAgdHJ5IHtcbiAgICAgICB2YXIgZ2xDb250ZXh0ID0gZ2V0V2ViZ2xDYW52YXMoKVxuICAgICAgIHZhciBleHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mbyA9IGdsQ29udGV4dC5nZXRFeHRlbnNpb24oJ1dFQkdMX2RlYnVnX3JlbmRlcmVyX2luZm8nKVxuICAgICAgIHZhciBwYXJhbXMgPSBnbENvbnRleHQuZ2V0UGFyYW1ldGVyKGV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvLlVOTUFTS0VEX1ZFTkRPUl9XRUJHTCkgKyAnficgKyBnbENvbnRleHQuZ2V0UGFyYW1ldGVyKGV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvLlVOTUFTS0VEX1JFTkRFUkVSX1dFQkdMKVxuICAgICAgIGxvc2VXZWJnbENvbnRleHQoZ2xDb250ZXh0KVxuICAgICAgIHJldHVybiBwYXJhbXNcbiAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgIHJldHVybiBudWxsXG4gICAgIH1cbiAgIH1cbiAgIHZhciBnZXRBZEJsb2NrID0gZnVuY3Rpb24gKCkge1xuICAgICB2YXIgYWRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgYWRzLmlubmVySFRNTCA9ICcmbmJzcDsnXG4gICAgIGFkcy5jbGFzc05hbWUgPSAnYWRzYm94J1xuICAgICB2YXIgcmVzdWx0ID0gZmFsc2VcbiAgICAgdHJ5IHtcbiAgICAgICAvLyBib2R5IG1heSBub3QgZXhpc3QsIHRoYXQncyB3aHkgd2UgbmVlZCB0cnkvY2F0Y2hcbiAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkcylcbiAgICAgICByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZHNib3gnKVswXS5vZmZzZXRIZWlnaHQgPT09IDBcbiAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGFkcylcbiAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgIHJlc3VsdCA9IGZhbHNlXG4gICAgIH1cbiAgICAgcmV0dXJuIHJlc3VsdFxuICAgfVxuICAgdmFyIGdldEhhc0xpZWRMYW5ndWFnZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgIC8vIFdlIGNoZWNrIGlmIG5hdmlnYXRvci5sYW5ndWFnZSBpcyBlcXVhbCB0byB0aGUgZmlyc3QgbGFuZ3VhZ2Ugb2YgbmF2aWdhdG9yLmxhbmd1YWdlc1xuICAgICAvLyBuYXZpZ2F0b3IubGFuZ3VhZ2VzIGlzIHVuZGVmaW5lZCBvbiBJRTExIChhbmQgcG90ZW50aWFsbHkgb2xkZXIgSUVzKVxuICAgICBpZiAodHlwZW9mIG5hdmlnYXRvci5sYW5ndWFnZXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgdHJ5IHtcbiAgICAgICAgIHZhciBmaXJzdExhbmd1YWdlcyA9IG5hdmlnYXRvci5sYW5ndWFnZXNbMF0uc3Vic3RyKDAsIDIpXG4gICAgICAgICBpZiAoZmlyc3RMYW5ndWFnZXMgIT09IG5hdmlnYXRvci5sYW5ndWFnZS5zdWJzdHIoMCwgMikpIHtcbiAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgIH1cbiAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgfVxuICAgICB9XG4gICAgIHJldHVybiBmYWxzZVxuICAgfVxuICAgdmFyIGdldEhhc0xpZWRSZXNvbHV0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICByZXR1cm4gd2luZG93LnNjcmVlbi53aWR0aCA8IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCB8fCB3aW5kb3cuc2NyZWVuLmhlaWdodCA8IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHRcbiAgIH1cbiAgIHZhciBnZXRIYXNMaWVkT3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcbiAgICAgdmFyIG9zY3B1ID0gbmF2aWdhdG9yLm9zY3B1XG4gICAgIHZhciBwbGF0Zm9ybSA9IG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpXG4gICAgIHZhciBvc1xuICAgICAvLyBXZSBleHRyYWN0IHRoZSBPUyBmcm9tIHRoZSB1c2VyIGFnZW50IChyZXNwZWN0IHRoZSBvcmRlciBvZiB0aGUgaWYgZWxzZSBpZiBzdGF0ZW1lbnQpXG4gICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignd2luZG93cyBwaG9uZScpID49IDApIHtcbiAgICAgICBvcyA9ICdXaW5kb3dzIFBob25lJ1xuICAgICB9IGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCd3aW5kb3dzJykgPj0gMCB8fCB1c2VyQWdlbnQuaW5kZXhPZignd2luMTYnKSA+PSAwIHx8IHVzZXJBZ2VudC5pbmRleE9mKCd3aW4zMicpID49IDAgfHwgdXNlckFnZW50LmluZGV4T2YoJ3dpbjY0JykgPj0gMCB8fCB1c2VyQWdlbnQuaW5kZXhPZignd2luOTUnKSA+PSAwIHx8IHVzZXJBZ2VudC5pbmRleE9mKCd3aW45OCcpID49IDAgfHwgdXNlckFnZW50LmluZGV4T2YoJ3dpbm50JykgPj0gMCB8fCB1c2VyQWdlbnQuaW5kZXhPZignd293NjQnKSA+PSAwKSB7XG4gICAgICAgb3MgPSAnV2luZG93cydcbiAgICAgfSBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpID49IDApIHtcbiAgICAgICBvcyA9ICdBbmRyb2lkJ1xuICAgICB9IGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdsaW51eCcpID49IDAgfHwgdXNlckFnZW50LmluZGV4T2YoJ2Nyb3MnKSA+PSAwIHx8IHVzZXJBZ2VudC5pbmRleE9mKCd4MTEnKSA+PSAwKSB7XG4gICAgICAgb3MgPSAnTGludXgnXG4gICAgIH0gZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoJ2lwaG9uZScpID49IDAgfHwgdXNlckFnZW50LmluZGV4T2YoJ2lwYWQnKSA+PSAwIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdpcG9kJykgPj0gMCB8fCB1c2VyQWdlbnQuaW5kZXhPZignY3Jpb3MnKSA+PSAwIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdmeGlvcycpID49IDApIHtcbiAgICAgICBvcyA9ICdpT1MnXG4gICAgIH0gZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoJ21hY2ludG9zaCcpID49IDAgfHwgdXNlckFnZW50LmluZGV4T2YoJ21hY19wb3dlcnBjKScpID49IDApIHtcbiAgICAgICBvcyA9ICdNYWMnXG4gICAgIH0gZWxzZSB7XG4gICAgICAgb3MgPSAnT3RoZXInXG4gICAgIH1cbiAgICAgLy8gV2UgZGV0ZWN0IGlmIHRoZSBwZXJzb24gdXNlcyBhIHRvdWNoIGRldmljZVxuICAgICB2YXIgbW9iaWxlRGV2aWNlID0gKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8XG4gICAgICAgKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDApIHx8XG4gICAgICAgKG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMCkpXG5cbiAgICAgaWYgKG1vYmlsZURldmljZSAmJiBvcyAhPT0gJ1dpbmRvd3MnICYmIG9zICE9PSAnV2luZG93cyBQaG9uZScgJiYgb3MgIT09ICdBbmRyb2lkJyAmJiBvcyAhPT0gJ2lPUycgJiYgb3MgIT09ICdPdGhlcicgJiYgdXNlckFnZW50LmluZGV4T2YoJ2Nyb3MnKSA9PT0gLTEpIHtcbiAgICAgICByZXR1cm4gdHJ1ZVxuICAgICB9XG5cbiAgICAgLy8gV2UgY29tcGFyZSBvc2NwdSB3aXRoIHRoZSBPUyBleHRyYWN0ZWQgZnJvbSB0aGUgVUFcbiAgICAgaWYgKHR5cGVvZiBvc2NwdSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICBvc2NwdSA9IG9zY3B1LnRvTG93ZXJDYXNlKClcbiAgICAgICBpZiAob3NjcHUuaW5kZXhPZignd2luJykgPj0gMCAmJiBvcyAhPT0gJ1dpbmRvd3MnICYmIG9zICE9PSAnV2luZG93cyBQaG9uZScpIHtcbiAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgfSBlbHNlIGlmIChvc2NwdS5pbmRleE9mKCdsaW51eCcpID49IDAgJiYgb3MgIT09ICdMaW51eCcgJiYgb3MgIT09ICdBbmRyb2lkJykge1xuICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICB9IGVsc2UgaWYgKG9zY3B1LmluZGV4T2YoJ21hYycpID49IDAgJiYgb3MgIT09ICdNYWMnICYmIG9zICE9PSAnaU9TJykge1xuICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICB9IGVsc2UgaWYgKChvc2NwdS5pbmRleE9mKCd3aW4nKSA9PT0gLTEgJiYgb3NjcHUuaW5kZXhPZignbGludXgnKSA9PT0gLTEgJiYgb3NjcHUuaW5kZXhPZignbWFjJykgPT09IC0xKSAhPT0gKG9zID09PSAnT3RoZXInKSkge1xuICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICB9XG4gICAgIH1cblxuICAgICAvLyBXZSBjb21wYXJlIHBsYXRmb3JtIHdpdGggdGhlIE9TIGV4dHJhY3RlZCBmcm9tIHRoZSBVQVxuICAgICBpZiAocGxhdGZvcm0uaW5kZXhPZignd2luJykgPj0gMCAmJiBvcyAhPT0gJ1dpbmRvd3MnICYmIG9zICE9PSAnV2luZG93cyBQaG9uZScpIHtcbiAgICAgICByZXR1cm4gdHJ1ZVxuICAgICB9IGVsc2UgaWYgKChwbGF0Zm9ybS5pbmRleE9mKCdsaW51eCcpID49IDAgfHwgcGxhdGZvcm0uaW5kZXhPZignYW5kcm9pZCcpID49IDAgfHwgcGxhdGZvcm0uaW5kZXhPZigncGlrZScpID49IDApICYmIG9zICE9PSAnTGludXgnICYmIG9zICE9PSAnQW5kcm9pZCcpIHtcbiAgICAgICByZXR1cm4gdHJ1ZVxuICAgICB9IGVsc2UgaWYgKChwbGF0Zm9ybS5pbmRleE9mKCdtYWMnKSA+PSAwIHx8IHBsYXRmb3JtLmluZGV4T2YoJ2lwYWQnKSA+PSAwIHx8IHBsYXRmb3JtLmluZGV4T2YoJ2lwb2QnKSA+PSAwIHx8IHBsYXRmb3JtLmluZGV4T2YoJ2lwaG9uZScpID49IDApICYmIG9zICE9PSAnTWFjJyAmJiBvcyAhPT0gJ2lPUycpIHtcbiAgICAgICByZXR1cm4gdHJ1ZVxuICAgICB9IGVsc2UgaWYgKHBsYXRmb3JtLmluZGV4T2YoJ2FybScpID49IDAgJiYgb3MgPT09ICdXaW5kb3dzIFBob25lJykge1xuICAgICAgIHJldHVybiBmYWxzZVxuICAgICB9IGVsc2UgaWYgKHBsYXRmb3JtLmluZGV4T2YoJ3Bpa2UnKSA+PSAwICYmIHVzZXJBZ2VudC5pbmRleE9mKCdvcGVyYSBtaW5pJykgPj0gMCkge1xuICAgICAgIHJldHVybiBmYWxzZVxuICAgICB9IGVsc2Uge1xuICAgICAgIHZhciBwbGF0Zm9ybUlzT3RoZXIgPSBwbGF0Zm9ybS5pbmRleE9mKCd3aW4nKSA8IDAgJiZcbiAgICAgICAgIHBsYXRmb3JtLmluZGV4T2YoJ2xpbnV4JykgPCAwICYmXG4gICAgICAgICBwbGF0Zm9ybS5pbmRleE9mKCdtYWMnKSA8IDAgJiZcbiAgICAgICAgIHBsYXRmb3JtLmluZGV4T2YoJ2lwaG9uZScpIDwgMCAmJlxuICAgICAgICAgcGxhdGZvcm0uaW5kZXhPZignaXBhZCcpIDwgMCAmJlxuICAgICAgICAgcGxhdGZvcm0uaW5kZXhPZignaXBvZCcpIDwgMFxuICAgICAgIGlmIChwbGF0Zm9ybUlzT3RoZXIgIT09IChvcyA9PT0gJ090aGVyJykpIHtcbiAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgfVxuICAgICB9XG5cbiAgICAgcmV0dXJuIHR5cGVvZiBuYXZpZ2F0b3IucGx1Z2lucyA9PT0gJ3VuZGVmaW5lZCcgJiYgb3MgIT09ICdXaW5kb3dzJyAmJiBvcyAhPT0gJ1dpbmRvd3MgUGhvbmUnXG4gICB9XG4gICB2YXIgZ2V0SGFzTGllZEJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcbiAgICAgdmFyIHByb2R1Y3RTdWIgPSBuYXZpZ2F0b3IucHJvZHVjdFN1YlxuXG4gICAgIC8vIHdlIGV4dHJhY3QgdGhlIGJyb3dzZXIgZnJvbSB0aGUgdXNlciBhZ2VudCAocmVzcGVjdCB0aGUgb3JkZXIgb2YgdGhlIHRlc3RzKVxuICAgICB2YXIgYnJvd3NlclxuICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2VkZ2UvJykgPj0gMCB8fCB1c2VyQWdlbnQuaW5kZXhPZignaWVtb2JpbGUvJykgPj0gMCkge1xuICAgICAgIC8vIFVucmVsaWFibGUsIGRpZmZlcmVudCB2ZXJzaW9ucyB1c2UgRWRnZUhUTUwsIFdlYmtpdCwgQmxpbmssIGV0Yy5cbiAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgfSBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZignb3BlcmEgbWluaScpID49IDApIHtcbiAgICAgICAvLyBVbnJlbGlhYmxlLCBkaWZmZXJlbnQgbW9kZXMgdXNlIFByZXN0bywgV2ViVmlldywgV2Via2l0LCBldGMuXG4gICAgICAgcmV0dXJuIGZhbHNlXG4gICAgIH0gZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoJ2ZpcmVmb3gvJykgPj0gMCkge1xuICAgICAgIGJyb3dzZXIgPSAnRmlyZWZveCdcbiAgICAgfSBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZignb3BlcmEvJykgPj0gMCB8fCB1c2VyQWdlbnQuaW5kZXhPZignIG9wci8nKSA+PSAwKSB7XG4gICAgICAgYnJvd3NlciA9ICdPcGVyYSdcbiAgICAgfSBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZignY2hyb21lLycpID49IDApIHtcbiAgICAgICBicm93c2VyID0gJ0Nocm9tZSdcbiAgICAgfSBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZignc2FmYXJpLycpID49IDApIHtcbiAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQgMS4nKSA+PSAwIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkIDIuJykgPj0gMCB8fCB1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCAzLicpID49IDAgfHwgdXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQgNC4nKSA+PSAwKSB7XG4gICAgICAgICBicm93c2VyID0gJ0FPU1AnXG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGJyb3dzZXIgPSAnU2FmYXJpJ1xuICAgICAgIH1cbiAgICAgfSBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZigndHJpZGVudC8nKSA+PSAwKSB7XG4gICAgICAgYnJvd3NlciA9ICdJbnRlcm5ldCBFeHBsb3JlcidcbiAgICAgfSBlbHNlIHtcbiAgICAgICBicm93c2VyID0gJ090aGVyJ1xuICAgICB9XG5cbiAgICAgaWYgKChicm93c2VyID09PSAnQ2hyb21lJyB8fCBicm93c2VyID09PSAnU2FmYXJpJyB8fCBicm93c2VyID09PSAnT3BlcmEnKSAmJiBwcm9kdWN0U3ViICE9PSAnMjAwMzAxMDcnKSB7XG4gICAgICAgcmV0dXJuIHRydWVcbiAgICAgfVxuXG4gICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXG4gICAgIHZhciB0ZW1wUmVzID0gZXZhbC50b1N0cmluZygpLmxlbmd0aFxuICAgICBpZiAodGVtcFJlcyA9PT0gMzcgJiYgYnJvd3NlciAhPT0gJ1NhZmFyaScgJiYgYnJvd3NlciAhPT0gJ0ZpcmVmb3gnICYmIGJyb3dzZXIgIT09ICdPdGhlcicpIHtcbiAgICAgICByZXR1cm4gdHJ1ZVxuICAgICB9IGVsc2UgaWYgKHRlbXBSZXMgPT09IDM5ICYmIGJyb3dzZXIgIT09ICdJbnRlcm5ldCBFeHBsb3JlcicgJiYgYnJvd3NlciAhPT0gJ090aGVyJykge1xuICAgICAgIHJldHVybiB0cnVlXG4gICAgIH0gZWxzZSBpZiAodGVtcFJlcyA9PT0gMzMgJiYgYnJvd3NlciAhPT0gJ0Nocm9tZScgJiYgYnJvd3NlciAhPT0gJ0FPU1AnICYmIGJyb3dzZXIgIT09ICdPcGVyYScgJiYgYnJvd3NlciAhPT0gJ090aGVyJykge1xuICAgICAgIHJldHVybiB0cnVlXG4gICAgIH1cblxuICAgICAvLyBXZSBjcmVhdGUgYW4gZXJyb3IgdG8gc2VlIGhvdyBpdCBpcyBoYW5kbGVkXG4gICAgIHZhciBlcnJGaXJlZm94XG4gICAgIHRyeSB7XG4gICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICAgICB0aHJvdyAnYSdcbiAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgdHJ5IHtcbiAgICAgICAgIGVyci50b1NvdXJjZSgpXG4gICAgICAgICBlcnJGaXJlZm94ID0gdHJ1ZVxuICAgICAgIH0gY2F0Y2ggKGVyck9mRXJyKSB7XG4gICAgICAgICBlcnJGaXJlZm94ID0gZmFsc2VcbiAgICAgICB9XG4gICAgIH1cbiAgICAgcmV0dXJuIGVyckZpcmVmb3ggJiYgYnJvd3NlciAhPT0gJ0ZpcmVmb3gnICYmIGJyb3dzZXIgIT09ICdPdGhlcidcbiAgIH1cbiAgIHZhciBpc0NhbnZhc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICByZXR1cm4gISEoZWxlbS5nZXRDb250ZXh0ICYmIGVsZW0uZ2V0Q29udGV4dCgnMmQnKSlcbiAgIH1cbiAgIHZhciBpc1dlYkdsU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAvLyBjb2RlIHRha2VuIGZyb20gTW9kZXJuaXpyXG4gICAgIGlmICghaXNDYW52YXNTdXBwb3J0ZWQoKSkge1xuICAgICAgIHJldHVybiBmYWxzZVxuICAgICB9XG5cbiAgICAgdmFyIGdsQ29udGV4dCA9IGdldFdlYmdsQ2FudmFzKClcbiAgICAgdmFyIGlzU3VwcG9ydGVkID0gISF3aW5kb3cuV2ViR0xSZW5kZXJpbmdDb250ZXh0ICYmICEhZ2xDb250ZXh0XG4gICAgIGxvc2VXZWJnbENvbnRleHQoZ2xDb250ZXh0KVxuICAgICByZXR1cm4gaXNTdXBwb3J0ZWRcbiAgIH1cbiAgIHZhciBpc0lFID0gZnVuY3Rpb24gKCkge1xuICAgICBpZiAobmF2aWdhdG9yLmFwcE5hbWUgPT09ICdNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXInKSB7XG4gICAgICAgcmV0dXJuIHRydWVcbiAgICAgfSBlbHNlIGlmIChuYXZpZ2F0b3IuYXBwTmFtZSA9PT0gJ05ldHNjYXBlJyAmJiAvVHJpZGVudC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkgeyAvLyBJRSAxMVxuICAgICAgIHJldHVybiB0cnVlXG4gICAgIH1cbiAgICAgcmV0dXJuIGZhbHNlXG4gICB9XG4gICB2YXIgaXNJRU9yT2xkRWRnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgLy8gVGhlIHByb3BlcnRpZXMgYXJlIGNoZWNrZWQgdG8gYmUgaW4gSUUgMTAsIElFIDExIGFuZCBFZGdlIDE4IGFuZCBub3QgdG8gYmUgaW4gb3RoZXIgYnJvd3NlcnNcbiAgICAgcmV0dXJuICgnbXNXcml0ZVByb2ZpbGVyTWFyaycgaW4gd2luZG93KSArICgnbXNMYXVuY2hVcmknIGluIG5hdmlnYXRvcikgKyAoJ21zU2F2ZUJsb2InIGluIG5hdmlnYXRvcikgPj0gMlxuICAgfVxuICAgdmFyIGhhc1N3Zk9iamVjdExvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cuc3dmb2JqZWN0ICE9PSAndW5kZWZpbmVkJ1xuICAgfVxuICAgdmFyIGhhc01pbkZsYXNoSW5zdGFsbGVkID0gZnVuY3Rpb24gKCkge1xuICAgICByZXR1cm4gd2luZG93LnN3Zm9iamVjdC5oYXNGbGFzaFBsYXllclZlcnNpb24oJzkuMC4wJylcbiAgIH1cbiAgIHZhciBhZGRGbGFzaERpdk5vZGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgIG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIG9wdGlvbnMuZm9udHMuc3dmQ29udGFpbmVySWQpXG4gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSlcbiAgIH1cbiAgIHZhciBsb2FkU3dmQW5kRGV0ZWN0Rm9udHMgPSBmdW5jdGlvbiAoZG9uZSwgb3B0aW9ucykge1xuICAgICB2YXIgaGlkZGVuQ2FsbGJhY2sgPSAnX19fZnBfc3dmX2xvYWRlZCdcbiAgICAgd2luZG93W2hpZGRlbkNhbGxiYWNrXSA9IGZ1bmN0aW9uIChmb250cykge1xuICAgICAgIGRvbmUoZm9udHMpXG4gICAgIH1cbiAgICAgdmFyIGlkID0gb3B0aW9ucy5mb250cy5zd2ZDb250YWluZXJJZFxuICAgICBhZGRGbGFzaERpdk5vZGUoKVxuICAgICB2YXIgZmxhc2h2YXJzID0geyBvblJlYWR5OiBoaWRkZW5DYWxsYmFjayB9XG4gICAgIHZhciBmbGFzaHBhcmFtcyA9IHsgYWxsb3dTY3JpcHRBY2Nlc3M6ICdhbHdheXMnLCBtZW51OiAnZmFsc2UnIH1cbiAgICAgd2luZG93LnN3Zm9iamVjdC5lbWJlZFNXRihvcHRpb25zLmZvbnRzLnN3ZlBhdGgsIGlkLCAnMScsICcxJywgJzkuMC4wJywgZmFsc2UsIGZsYXNodmFycywgZmxhc2hwYXJhbXMsIHt9KVxuICAgfVxuICAgdmFyIGdldFdlYmdsQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgdmFyIGdsID0gbnVsbFxuICAgICB0cnkge1xuICAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpXG4gICAgIH0gY2F0Y2ggKGUpIHsgLyogc3F1ZWxjaCAqLyB9XG4gICAgIGlmICghZ2wpIHsgZ2wgPSBudWxsIH1cbiAgICAgcmV0dXJuIGdsXG4gICB9XG4gICB2YXIgbG9zZVdlYmdsQ29udGV4dCA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgIHZhciBsb3NlQ29udGV4dEV4dGVuc2lvbiA9IGNvbnRleHQuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9sb3NlX2NvbnRleHQnKVxuICAgICBpZiAobG9zZUNvbnRleHRFeHRlbnNpb24gIT0gbnVsbCkge1xuICAgICAgIGxvc2VDb250ZXh0RXh0ZW5zaW9uLmxvc2VDb250ZXh0KClcbiAgICAgfVxuICAgfVxuXG4gICB2YXIgY29tcG9uZW50cyA9IFtcbiAgICAgeyBrZXk6ICd1c2VyQWdlbnQnLCBnZXREYXRhOiBVc2VyQWdlbnQgfSxcbiAgICAgeyBrZXk6ICd3ZWJkcml2ZXInLCBnZXREYXRhOiB3ZWJkcml2ZXIgfSxcbiAgICAgeyBrZXk6ICdsYW5ndWFnZScsIGdldERhdGE6IGxhbmd1YWdlS2V5IH0sXG4gICAgIHsga2V5OiAnY29sb3JEZXB0aCcsIGdldERhdGE6IGNvbG9yRGVwdGhLZXkgfSxcbiAgICAgeyBrZXk6ICdkZXZpY2VNZW1vcnknLCBnZXREYXRhOiBkZXZpY2VNZW1vcnlLZXkgfSxcbiAgICAgeyBrZXk6ICdwaXhlbFJhdGlvJywgZ2V0RGF0YTogcGl4ZWxSYXRpb0tleSB9LFxuICAgICB7IGtleTogJ2hhcmR3YXJlQ29uY3VycmVuY3knLCBnZXREYXRhOiBoYXJkd2FyZUNvbmN1cnJlbmN5S2V5IH0sXG4gICAgIHsga2V5OiAnc2NyZWVuUmVzb2x1dGlvbicsIGdldERhdGE6IHNjcmVlblJlc29sdXRpb25LZXkgfSxcbiAgICAgeyBrZXk6ICdhdmFpbGFibGVTY3JlZW5SZXNvbHV0aW9uJywgZ2V0RGF0YTogYXZhaWxhYmxlU2NyZWVuUmVzb2x1dGlvbktleSB9LFxuICAgICB7IGtleTogJ3RpbWV6b25lT2Zmc2V0JywgZ2V0RGF0YTogdGltZXpvbmVPZmZzZXQgfSxcbiAgICAgeyBrZXk6ICd0aW1lem9uZScsIGdldERhdGE6IHRpbWV6b25lIH0sXG4gICAgIHsga2V5OiAnc2Vzc2lvblN0b3JhZ2UnLCBnZXREYXRhOiBzZXNzaW9uU3RvcmFnZUtleSB9LFxuICAgICB7IGtleTogJ2xvY2FsU3RvcmFnZScsIGdldERhdGE6IGxvY2FsU3RvcmFnZUtleSB9LFxuICAgICB7IGtleTogJ2luZGV4ZWREYicsIGdldERhdGE6IGluZGV4ZWREYktleSB9LFxuICAgICB7IGtleTogJ2FkZEJlaGF2aW9yJywgZ2V0RGF0YTogYWRkQmVoYXZpb3JLZXkgfSxcbiAgICAgeyBrZXk6ICdvcGVuRGF0YWJhc2UnLCBnZXREYXRhOiBvcGVuRGF0YWJhc2VLZXkgfSxcbiAgICAgeyBrZXk6ICdjcHVDbGFzcycsIGdldERhdGE6IGNwdUNsYXNzS2V5IH0sXG4gICAgIHsga2V5OiAncGxhdGZvcm0nLCBnZXREYXRhOiBwbGF0Zm9ybUtleSB9LFxuICAgICB7IGtleTogJ2RvTm90VHJhY2snLCBnZXREYXRhOiBkb05vdFRyYWNrS2V5IH0sXG4gICAgIHsga2V5OiAncGx1Z2lucycsIGdldERhdGE6IHBsdWdpbnNDb21wb25lbnQgfSxcbiAgICAgeyBrZXk6ICdjYW52YXMnLCBnZXREYXRhOiBjYW52YXNLZXkgfSxcbiAgICAgeyBrZXk6ICd3ZWJnbCcsIGdldERhdGE6IHdlYmdsS2V5IH0sXG4gICAgIHsga2V5OiAnd2ViZ2xWZW5kb3JBbmRSZW5kZXJlcicsIGdldERhdGE6IHdlYmdsVmVuZG9yQW5kUmVuZGVyZXJLZXkgfSxcbiAgICAgeyBrZXk6ICdhZEJsb2NrJywgZ2V0RGF0YTogYWRCbG9ja0tleSB9LFxuICAgICB7IGtleTogJ2hhc0xpZWRMYW5ndWFnZXMnLCBnZXREYXRhOiBoYXNMaWVkTGFuZ3VhZ2VzS2V5IH0sXG4gICAgIHsga2V5OiAnaGFzTGllZFJlc29sdXRpb24nLCBnZXREYXRhOiBoYXNMaWVkUmVzb2x1dGlvbktleSB9LFxuICAgICB7IGtleTogJ2hhc0xpZWRPcycsIGdldERhdGE6IGhhc0xpZWRPc0tleSB9LFxuICAgICB7IGtleTogJ2hhc0xpZWRCcm93c2VyJywgZ2V0RGF0YTogaGFzTGllZEJyb3dzZXJLZXkgfSxcbiAgICAgeyBrZXk6ICd0b3VjaFN1cHBvcnQnLCBnZXREYXRhOiB0b3VjaFN1cHBvcnRLZXkgfSxcbiAgICAgeyBrZXk6ICdmb250cycsIGdldERhdGE6IGpzRm9udHNLZXksIHBhdXNlQmVmb3JlOiB0cnVlIH0sXG4gICAgIHsga2V5OiAnZm9udHNGbGFzaCcsIGdldERhdGE6IGZsYXNoRm9udHNLZXksIHBhdXNlQmVmb3JlOiB0cnVlIH0sXG4gICAgIHsga2V5OiAnYXVkaW8nLCBnZXREYXRhOiBhdWRpb0tleSB9LFxuICAgICB7IGtleTogJ2VudW1lcmF0ZURldmljZXMnLCBnZXREYXRhOiBlbnVtZXJhdGVEZXZpY2VzS2V5IH1cbiAgIF1cblxuICAgdmFyIEZpbmdlcnByaW50MiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgIHRocm93IG5ldyBFcnJvcihcIiduZXcgRmluZ2VycHJpbnQoKScgaXMgZGVwcmVjYXRlZCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9maW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMjdXBncmFkZS1ndWlkZS1mcm9tLTE4Mi10by0yMDBcIilcbiAgIH1cblxuICAgRmluZ2VycHJpbnQyLmdldCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgY2FsbGJhY2sgPSBvcHRpb25zXG4gICAgICAgb3B0aW9ucyA9IHt9XG4gICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICBvcHRpb25zID0ge31cbiAgICAgfVxuICAgICBleHRlbmRTb2Z0KG9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKVxuICAgICBvcHRpb25zLmNvbXBvbmVudHMgPSBvcHRpb25zLmV4dHJhQ29tcG9uZW50cy5jb25jYXQoY29tcG9uZW50cylcblxuICAgICB2YXIga2V5cyA9IHtcbiAgICAgICBkYXRhOiBbXSxcbiAgICAgICBhZGRQcmVwcm9jZXNzZWRDb21wb25lbnQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMucHJlcHJvY2Vzc29yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgIHZhbHVlID0gb3B0aW9ucy5wcmVwcm9jZXNzb3Ioa2V5LCB2YWx1ZSlcbiAgICAgICAgIH1cbiAgICAgICAgIGtleXMuZGF0YS5wdXNoKHsga2V5OiBrZXksIHZhbHVlOiB2YWx1ZSB9KVxuICAgICAgIH1cbiAgICAgfVxuXG4gICAgIHZhciBpID0gLTFcbiAgICAgdmFyIGNoYWluQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChhbHJlYWR5V2FpdGVkKSB7XG4gICAgICAgaSArPSAxXG4gICAgICAgaWYgKGkgPj0gb3B0aW9ucy5jb21wb25lbnRzLmxlbmd0aCkgeyAvLyBvbiBmaW5pc2hcbiAgICAgICAgIGNhbGxiYWNrKGtleXMuZGF0YSlcbiAgICAgICAgIHJldHVyblxuICAgICAgIH1cbiAgICAgICB2YXIgY29tcG9uZW50ID0gb3B0aW9ucy5jb21wb25lbnRzW2ldXG5cbiAgICAgICBpZiAob3B0aW9ucy5leGNsdWRlc1tjb21wb25lbnQua2V5XSkge1xuICAgICAgICAgY2hhaW5Db21wb25lbnRzKGZhbHNlKSAvLyBza2lwXG4gICAgICAgICByZXR1cm5cbiAgICAgICB9XG5cbiAgICAgICBpZiAoIWFscmVhZHlXYWl0ZWQgJiYgY29tcG9uZW50LnBhdXNlQmVmb3JlKSB7XG4gICAgICAgICBpIC09IDFcbiAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICBjaGFpbkNvbXBvbmVudHModHJ1ZSlcbiAgICAgICAgIH0sIDEpXG4gICAgICAgICByZXR1cm5cbiAgICAgICB9XG5cbiAgICAgICB0cnkge1xuICAgICAgICAgY29tcG9uZW50LmdldERhdGEoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgIGtleXMuYWRkUHJlcHJvY2Vzc2VkQ29tcG9uZW50KGNvbXBvbmVudC5rZXksIHZhbHVlKVxuICAgICAgICAgICBjaGFpbkNvbXBvbmVudHMoZmFsc2UpXG4gICAgICAgICB9LCBvcHRpb25zKVxuICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAvLyBtYWluIGJvZHkgZXJyb3JcbiAgICAgICAgIGtleXMuYWRkUHJlcHJvY2Vzc2VkQ29tcG9uZW50KGNvbXBvbmVudC5rZXksIFN0cmluZyhlcnJvcikpXG4gICAgICAgICBjaGFpbkNvbXBvbmVudHMoZmFsc2UpXG4gICAgICAgfVxuICAgICB9XG5cbiAgICAgY2hhaW5Db21wb25lbnRzKGZhbHNlKVxuICAgfVxuXG4gICBGaW5nZXJwcmludDIuZ2V0UHJvbWlzZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgRmluZ2VycHJpbnQyLmdldChvcHRpb25zLCByZXNvbHZlKVxuICAgICB9KVxuICAgfVxuXG4gICBGaW5nZXJwcmludDIuZ2V0VjE4ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgIGlmIChjYWxsYmFjayA9PSBudWxsKSB7XG4gICAgICAgY2FsbGJhY2sgPSBvcHRpb25zXG4gICAgICAgb3B0aW9ucyA9IHt9XG4gICAgIH1cbiAgICAgcmV0dXJuIEZpbmdlcnByaW50Mi5nZXQob3B0aW9ucywgZnVuY3Rpb24gKGNvbXBvbmVudHMpIHtcbiAgICAgICB2YXIgbmV3Q29tcG9uZW50cyA9IFtdXG4gICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb25lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICB2YXIgY29tcG9uZW50ID0gY29tcG9uZW50c1tpXVxuICAgICAgICAgaWYgKGNvbXBvbmVudC52YWx1ZSA9PT0gKG9wdGlvbnMuTk9UX0FWQUlMQUJMRSB8fCAnbm90IGF2YWlsYWJsZScpKSB7XG4gICAgICAgICAgIG5ld0NvbXBvbmVudHMucHVzaCh7IGtleTogY29tcG9uZW50LmtleSwgdmFsdWU6ICd1bmtub3duJyB9KVxuICAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnQua2V5ID09PSAncGx1Z2lucycpIHtcbiAgICAgICAgICAgbmV3Q29tcG9uZW50cy5wdXNoKHtcbiAgICAgICAgICAgICBrZXk6ICdwbHVnaW5zJyxcbiAgICAgICAgICAgICB2YWx1ZTogbWFwKGNvbXBvbmVudC52YWx1ZSwgZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgIHZhciBtaW1lVHlwZXMgPSBtYXAocFsyXSwgZnVuY3Rpb24gKG10KSB7XG4gICAgICAgICAgICAgICAgIGlmIChtdC5qb2luKSB7IHJldHVybiBtdC5qb2luKCd+JykgfVxuICAgICAgICAgICAgICAgICByZXR1cm4gbXRcbiAgICAgICAgICAgICAgIH0pLmpvaW4oJywnKVxuICAgICAgICAgICAgICAgcmV0dXJuIFtwWzBdLCBwWzFdLCBtaW1lVHlwZXNdLmpvaW4oJzo6JylcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICB9KVxuICAgICAgICAgfSBlbHNlIGlmIChbJ2NhbnZhcycsICd3ZWJnbCddLmluZGV4T2YoY29tcG9uZW50LmtleSkgIT09IC0xICYmIEFycmF5LmlzQXJyYXkoY29tcG9uZW50LnZhbHVlKSkge1xuICAgICAgICAgICAvLyBzb21ldGltZXMgV2ViR0wgcmV0dXJucyBlcnJvciBpbiBoZWFkbGVzcyBicm93c2VycyAoZHVyaW5nIENJIHRlc3RpbmcgZm9yIGV4YW1wbGUpXG4gICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gam9pbiBvbmx5IGlmIHRoZSB2YWx1ZXMgYXJlIGFycmF5XG4gICAgICAgICAgIG5ld0NvbXBvbmVudHMucHVzaCh7IGtleTogY29tcG9uZW50LmtleSwgdmFsdWU6IGNvbXBvbmVudC52YWx1ZS5qb2luKCd+JykgfSlcbiAgICAgICAgIH0gZWxzZSBpZiAoWydzZXNzaW9uU3RvcmFnZScsICdsb2NhbFN0b3JhZ2UnLCAnaW5kZXhlZERiJywgJ2FkZEJlaGF2aW9yJywgJ29wZW5EYXRhYmFzZSddLmluZGV4T2YoY29tcG9uZW50LmtleSkgIT09IC0xKSB7XG4gICAgICAgICAgIGlmIChjb21wb25lbnQudmFsdWUpIHtcbiAgICAgICAgICAgICBuZXdDb21wb25lbnRzLnB1c2goeyBrZXk6IGNvbXBvbmVudC5rZXksIHZhbHVlOiAxIH0pXG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy8gc2tpcFxuICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgIH1cbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIGlmIChjb21wb25lbnQudmFsdWUpIHtcbiAgICAgICAgICAgICBuZXdDb21wb25lbnRzLnB1c2goY29tcG9uZW50LnZhbHVlLmpvaW4gPyB7IGtleTogY29tcG9uZW50LmtleSwgdmFsdWU6IGNvbXBvbmVudC52YWx1ZS5qb2luKCc7JykgfSA6IGNvbXBvbmVudClcbiAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICBuZXdDb21wb25lbnRzLnB1c2goeyBrZXk6IGNvbXBvbmVudC5rZXksIHZhbHVlOiBjb21wb25lbnQudmFsdWUgfSlcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICB2YXIgbXVybXVyID0geDY0aGFzaDEyOChtYXAobmV3Q29tcG9uZW50cywgZnVuY3Rpb24gKGNvbXBvbmVudCkgeyByZXR1cm4gY29tcG9uZW50LnZhbHVlIH0pLmpvaW4oJ35+ficpLCAzMSlcbiAgICAgICBjYWxsYmFjayhtdXJtdXIsIG5ld0NvbXBvbmVudHMpXG4gICAgIH0pXG4gICB9XG5cbiAgIEZpbmdlcnByaW50Mi54NjRoYXNoMTI4ID0geDY0aGFzaDEyOFxuICAgRmluZ2VycHJpbnQyLlZFUlNJT04gPSAnMi4xLjQnXG4gICByZXR1cm4gRmluZ2VycHJpbnQyXG4gfSlcblxuXG4vLyAjZW5kcmVnaW9uIE9SSUdJTkFMIENPREVcblxuX2Nqc0V4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblxuXG59LCB7fSk7XG5leHBvcnQgeyBfY2pzRXhwb3J0cyBhcyBkZWZhdWx0IH07XG5leHBvcnQgeyBfX2Nqc01ldGFVUkwgfVxuIiwiLy8gSSBhbSB0aGUgZmFjYWRlIG1vZHVsZSB3aG8gcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBDb21tb25KUyBtb2R1bGUgJy4vZmluZ2VycHJpbnQyLmpzJ35cbmltcG9ydCB7IF9fY2pzTWV0YVVSTCBhcyByZXEgfSBmcm9tICcuL2ZpbmdlcnByaW50Mi5qcyc7XG5pbXBvcnQgbG9hZGVyIGZyb20gJ2NjZTovaW50ZXJuYWwvbWwvY2pzLWxvYWRlci5tanMnO1xuaWYgKCFyZXEpIHtcbiAgICBsb2FkZXIudGhyb3dJbnZhbGlkV3JhcHBlcignLi9maW5nZXJwcmludDIuanMnLCBpbXBvcnQubWV0YS51cmwpO1xufVxubG9hZGVyLnJlcXVpcmUocmVxKTtcbmV4cG9ydCAqIGZyb20gJy4vZmluZ2VycHJpbnQyLmpzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZCB9IGZyb20gJy4vZmluZ2VycHJpbnQyLmpzJ1xuZXhwb3J0IHsgZCBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF9janNMb2FkZXIgZnJvbSAnY2NlOi9pbnRlcm5hbC9tbC9janMtbG9hZGVyLm1qcyc7XG5pbXBvcnQgeyBfX2Nqc01ldGFVUkwgYXMgX3JlcX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBfX2Nqc01ldGFVUkwgYXMgX3JlcTB9IGZyb20gJy4vY3JlYXRlQWN0aW9uJztcbmltcG9ydCB7IF9fY2pzTWV0YVVSTCBhcyBfcmVxMX0gZnJvbSAnLi9jcmVhdGVSZWR1Y2VyJztcbmltcG9ydCB7IF9fY2pzTWV0YVVSTCBhcyBfcmVxMn0gZnJvbSAnLi9hc3NpZ25BbGwnO1xuaW1wb3J0IHsgX19janNNZXRhVVJMIGFzIF9yZXEzfSBmcm9tICcuL2JpbmRBbGwnO1xuaW1wb3J0IHsgX19janNNZXRhVVJMIGFzIF9yZXE0fSBmcm9tICcuL2JhdGNoJztcbmltcG9ydCB7IF9fY2pzTWV0YVVSTCBhcyBfcmVxNX0gZnJvbSAnLi9kaXNiYXRjaCc7XG5pbXBvcnQgeyBfX2Nqc01ldGFVUkwgYXMgX3JlcTZ9IGZyb20gJy4vbG9nZ2Vycyc7XG5pbXBvcnQgeyBfX2Nqc01ldGFVUkwgYXMgX3JlcTd9IGZyb20gJy4vYXNFcnJvcic7XG5sZXQgX2Nqc0V4cG9ydHM7XG5sZXQgX19fZXNNb2R1bGU7XG5sZXQgX2NyZWF0ZUFjdGlvbjA7XG5sZXQgX2NyZWF0ZVJlZHVjZXIwO1xubGV0IF9hc3NpZ25BbGwwO1xubGV0IF9iaW5kQWxsMDtcbmxldCBfYmF0Y2gwO1xubGV0IF9kaXNiYXRjaDA7XG5sZXQgX2xvZ2dlcnMwO1xubGV0IF9hc0Vycm9yMDtcbmxldCBfdHlwZXMwO1xuY29uc3QgX19janNNZXRhVVJMID0gaW1wb3J0Lm1ldGEudXJsO1xuX2Nqc0xvYWRlci5kZWZpbmUoX19janNNZXRhVVJMLCBmdW5jdGlvbiAoZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlLCBfX2ZpbGVuYW1lLCBfX2Rpcm5hbWUpIHtcbi8vICNyZWdpb24gT1JJR0lOQUwgQ09ERVxuXG5cbiBcInVzZSBzdHJpY3RcIjtcblxuIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgdmFsdWU6IHRydWVcbiB9KTtcbiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjcmVhdGVBY3Rpb25cIiwge1xuICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICByZXR1cm4gX2NyZWF0ZUFjdGlvbltcImRlZmF1bHRcIl07XG4gICB9XG4gfSk7XG4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlUmVkdWNlclwiLCB7XG4gICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgIHJldHVybiBfY3JlYXRlUmVkdWNlcltcImRlZmF1bHRcIl07XG4gICB9XG4gfSk7XG4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYXNzaWduQWxsXCIsIHtcbiAgIGVudW1lcmFibGU6IHRydWUsXG4gICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgcmV0dXJuIF9hc3NpZ25BbGxbXCJkZWZhdWx0XCJdO1xuICAgfVxuIH0pO1xuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImJpbmRBbGxcIiwge1xuICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICByZXR1cm4gX2JpbmRBbGxbXCJkZWZhdWx0XCJdO1xuICAgfVxuIH0pO1xuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImJhdGNoXCIsIHtcbiAgIGVudW1lcmFibGU6IHRydWUsXG4gICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgcmV0dXJuIF9iYXRjaFtcImRlZmF1bHRcIl07XG4gICB9XG4gfSk7XG4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGlzYmF0Y2hcIiwge1xuICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICByZXR1cm4gX2Rpc2JhdGNoW1wiZGVmYXVsdFwiXTtcbiAgIH1cbiB9KTtcbiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJsb2dnZXJzXCIsIHtcbiAgIGVudW1lcmFibGU6IHRydWUsXG4gICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgcmV0dXJuIF9sb2dnZXJzW1wiZGVmYXVsdFwiXTtcbiAgIH1cbiB9KTtcbiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhc0Vycm9yXCIsIHtcbiAgIGVudW1lcmFibGU6IHRydWUsXG4gICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgcmV0dXJuIF9hc0Vycm9yW1wiZGVmYXVsdFwiXTtcbiAgIH1cbiB9KTtcbiBleHBvcnRzLnR5cGVzID0gdm9pZCAwO1xuXG4gdmFyIF90eXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3R5cGVzXCIpKTtcblxuIHZhciBfY3JlYXRlQWN0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVBY3Rpb25cIikpO1xuXG4gdmFyIF9jcmVhdGVSZWR1Y2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVSZWR1Y2VyXCIpKTtcblxuIHZhciBfYXNzaWduQWxsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hc3NpZ25BbGxcIikpO1xuXG4gdmFyIF9iaW5kQWxsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iaW5kQWxsXCIpKTtcblxuIHZhciBfYmF0Y2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2JhdGNoXCIpKTtcblxuIHZhciBfZGlzYmF0Y2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2Rpc2JhdGNoXCIpKTtcblxuIHZhciBfbG9nZ2VycyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9nZ2Vyc1wiKSk7XG5cbiB2YXIgX2FzRXJyb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FzRXJyb3JcIikpO1xuXG4gZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbiBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG4gZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuIHZhciB0eXBlcyA9IF90eXBlcztcbiBleHBvcnRzLnR5cGVzID0gdHlwZXM7XG5cbi8vICNlbmRyZWdpb24gT1JJR0lOQUwgQ09ERVxuXG5fY2pzRXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuX19fZXNNb2R1bGUgPSBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlO1xuX2NyZWF0ZUFjdGlvbjAgPSBtb2R1bGUuZXhwb3J0cy5jcmVhdGVBY3Rpb247XG5fY3JlYXRlUmVkdWNlcjAgPSBtb2R1bGUuZXhwb3J0cy5jcmVhdGVSZWR1Y2VyO1xuX2Fzc2lnbkFsbDAgPSBtb2R1bGUuZXhwb3J0cy5hc3NpZ25BbGw7XG5fYmluZEFsbDAgPSBtb2R1bGUuZXhwb3J0cy5iaW5kQWxsO1xuX2JhdGNoMCA9IG1vZHVsZS5leHBvcnRzLmJhdGNoO1xuX2Rpc2JhdGNoMCA9IG1vZHVsZS5leHBvcnRzLmRpc2JhdGNoO1xuX2xvZ2dlcnMwID0gbW9kdWxlLmV4cG9ydHMubG9nZ2Vycztcbl9hc0Vycm9yMCA9IG1vZHVsZS5leHBvcnRzLmFzRXJyb3I7XG5fdHlwZXMwID0gbW9kdWxlLmV4cG9ydHMudHlwZXM7XG5cbn0sICgpID0+ICh7XG4gICcuL3R5cGVzJzogX3JlcSxcbiAgJy4vY3JlYXRlQWN0aW9uJzogX3JlcTAsXG4gICcuL2NyZWF0ZVJlZHVjZXInOiBfcmVxMSxcbiAgJy4vYXNzaWduQWxsJzogX3JlcTIsXG4gICcuL2JpbmRBbGwnOiBfcmVxMyxcbiAgJy4vYmF0Y2gnOiBfcmVxNCxcbiAgJy4vZGlzYmF0Y2gnOiBfcmVxNSxcbiAgJy4vbG9nZ2Vycyc6IF9yZXE2LFxuICAnLi9hc0Vycm9yJzogX3JlcTcsXG59KSk7XG5leHBvcnQgeyBfY2pzRXhwb3J0cyBhcyBkZWZhdWx0IH07XG5leHBvcnQgeyBfX2Nqc01ldGFVUkwgfVxuIiwiLy8gSSBhbSB0aGUgZmFjYWRlIG1vZHVsZSB3aG8gcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBDb21tb25KUyBtb2R1bGUgJy4vaW5kZXguanMnflxuaW1wb3J0IHsgX19janNNZXRhVVJMIGFzIHJlcSB9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IGxvYWRlciBmcm9tICdjY2U6L2ludGVybmFsL21sL2Nqcy1sb2FkZXIubWpzJztcbmlmICghcmVxKSB7XG4gICAgbG9hZGVyLnRocm93SW52YWxpZFdyYXBwZXIoJy4vaW5kZXguanMnLCBpbXBvcnQubWV0YS51cmwpO1xufVxubG9hZGVyLnJlcXVpcmUocmVxKTtcbmV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBkIH0gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCB7IGQgYXMgZGVmYXVsdCB9OyIsIi8vIEkgYW0gdGhlIGZhY2FkZSBtb2R1bGUgd2hvIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgQ29tbW9uSlMgbW9kdWxlICcuL2luZGV4LmpzJ35cbmltcG9ydCB7IF9fY2pzTWV0YVVSTCBhcyByZXEgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnY2NlOi9pbnRlcm5hbC9tbC9janMtbG9hZGVyLm1qcyc7XG5pZiAoIXJlcSkge1xuICAgIGxvYWRlci50aHJvd0ludmFsaWRXcmFwcGVyKCcuL2luZGV4LmpzJywgaW1wb3J0Lm1ldGEudXJsKTtcbn1cbmxvYWRlci5yZXF1aXJlKHJlcSk7XG5leHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZCB9IGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgeyBkIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX2Nqc0xvYWRlciBmcm9tICdjY2U6L2ludGVybmFsL21sL2Nqcy1sb2FkZXIubWpzJztcbmxldCBfY2pzRXhwb3J0cztcbmNvbnN0IF9fY2pzTWV0YVVSTCA9IGltcG9ydC5tZXRhLnVybDtcbl9janNMb2FkZXIuZGVmaW5lKF9fY2pzTWV0YVVSTCwgZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7XG4vLyAjcmVnaW9uIE9SSUdJTkFMIENPREVcblxuXG4gJ3VzZSBzdHJpY3QnO1xuXG4gLy8gZG8gbm90IGVkaXQgLmpzIGZpbGVzIGRpcmVjdGx5IC0gZWRpdCBzcmMvaW5kZXguanN0XG5cblxuXG4gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlcXVhbChhLCBiKSB7XG4gICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICAgaWYgKGEuY29uc3RydWN0b3IgIT09IGIuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZTtcblxuICAgICB2YXIgbGVuZ3RoLCBpLCBrZXlzO1xuICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICAgcmV0dXJuIHRydWU7XG4gICAgIH1cblxuXG5cbiAgICAgaWYgKGEuY29uc3RydWN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGEuc291cmNlID09PSBiLnNvdXJjZSAmJiBhLmZsYWdzID09PSBiLmZsYWdzO1xuICAgICBpZiAoYS52YWx1ZU9mICE9PSBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YpIHJldHVybiBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCk7XG4gICAgIGlmIChhLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG5cbiAgICAga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICAgaWYgKGxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgICB9XG5cbiAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIC8vIHRydWUgaWYgYm90aCBOYU4sIGZhbHNlIG90aGVyd2lzZVxuICAgcmV0dXJuIGEhPT1hICYmIGIhPT1iO1xuIH07XG5cblxuLy8gI2VuZHJlZ2lvbiBPUklHSU5BTCBDT0RFXG5cbl9janNFeHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cblxufSwge30pO1xuZXhwb3J0IHsgX2Nqc0V4cG9ydHMgYXMgZGVmYXVsdCB9O1xuZXhwb3J0IHsgX19janNNZXRhVVJMIH1cbiIsImltcG9ydCBfY2pzTG9hZGVyIGZyb20gJ2NjZTovaW50ZXJuYWwvbWwvY2pzLWxvYWRlci5tanMnO1xuaW1wb3J0IHsgX19janNNZXRhVVJMIGFzIF9yZXF9IGZyb20gJy4vcmVkdXhMb2dnZXInO1xubGV0IF9janNFeHBvcnRzO1xubGV0IF9fX2VzTW9kdWxlO1xubGV0IF9kZWZhdWx0MDtcbmNvbnN0IF9fY2pzTWV0YVVSTCA9IGltcG9ydC5tZXRhLnVybDtcbl9janNMb2FkZXIuZGVmaW5lKF9fY2pzTWV0YVVSTCwgZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7XG4vLyAjcmVnaW9uIE9SSUdJTkFMIENPREVcblxuXG4gXCJ1c2Ugc3RyaWN0XCI7XG5cbiBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgIHZhbHVlOiB0cnVlXG4gfSk7XG4gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbiB2YXIgcmVkdXhMb2dnZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9yZWR1eExvZ2dlclwiKSk7XG5cbiBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG4gZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuIHZhciBfZGVmYXVsdCA9IHtcbiAgIHJlZHV4TG9nZ2VyOiByZWR1eExvZ2dlclxuIH07XG4gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxuLy8gI2VuZHJlZ2lvbiBPUklHSU5BTCBDT0RFXG5cbl9janNFeHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5fX19lc01vZHVsZSA9IG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGU7XG5fZGVmYXVsdDAgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0O1xuXG59LCAoKSA9PiAoe1xuICAnLi9yZWR1eExvZ2dlcic6IF9yZXEsXG59KSk7XG5leHBvcnQgeyBfY2pzRXhwb3J0cyBhcyBkZWZhdWx0IH07XG5leHBvcnQgeyBfX2Nqc01ldGFVUkwgfVxuIiwiaW1wb3J0IF9janNMb2FkZXIgZnJvbSAnY2NlOi9pbnRlcm5hbC9tbC9janMtbG9hZGVyLm1qcyc7XG5sZXQgX2Nqc0V4cG9ydHM7XG5jb25zdCBfX2Nqc01ldGFVUkwgPSBpbXBvcnQubWV0YS51cmw7XG5fY2pzTG9hZGVyLmRlZmluZShfX2Nqc01ldGFVUkwsIGZ1bmN0aW9uIChleHBvcnRzLCByZXF1aXJlLCBtb2R1bGUsIF9fZmlsZW5hbWUsIF9fZGlybmFtZSkge1xuLy8gI3JlZ2lvbiBPUklHSU5BTCBDT0RFXG5cblxuIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gLy9cbiAvLyBRUiBDb2RlIEdlbmVyYXRvciBmb3IgSmF2YVNjcmlwdFxuIC8vXG4gLy8gQ29weXJpZ2h0IChjKSAyMDA5IEthenVoaWtvIEFyYXNlXG4gLy9cbiAvLyBVUkw6IGh0dHA6Ly93d3cuZC1wcm9qZWN0LmNvbS9cbiAvL1xuIC8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAvLyAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAvL1xuIC8vIFRoZSB3b3JkICdRUiBDb2RlJyBpcyByZWdpc3RlcmVkIHRyYWRlbWFyayBvZlxuIC8vIERFTlNPIFdBVkUgSU5DT1JQT1JBVEVEXG4gLy8gIGh0dHA6Ly93d3cuZGVuc28td2F2ZS5jb20vcXJjb2RlL2ZhcXBhdGVudC1lLmh0bWxcbiAvL1xuIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiB2YXIgcXJjb2RlID0gZnVuY3Rpb24oKSB7XG5cbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAvLyBxcmNvZGVcbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgIC8qKlxuICAgICogcXJjb2RlXG4gICAgKiBAcGFyYW0gdHlwZU51bWJlciAxIHRvIDQwXG4gICAgKiBAcGFyYW0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgJ0wnLCdNJywnUScsJ0gnXG4gICAgKi9cbiAgIHZhciBxcmNvZGUgPSBmdW5jdGlvbih0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuXG4gICAgIHZhciBQQUQwID0gMHhFQztcbiAgICAgdmFyIFBBRDEgPSAweDExO1xuXG4gICAgIHZhciBfdHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XG4gICAgIHZhciBfZXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSBRUkVycm9yQ29ycmVjdGlvbkxldmVsW2Vycm9yQ29ycmVjdGlvbkxldmVsXTtcbiAgICAgdmFyIF9tb2R1bGVzID0gbnVsbDtcbiAgICAgdmFyIF9tb2R1bGVDb3VudCA9IDA7XG4gICAgIHZhciBfZGF0YUNhY2hlID0gbnVsbDtcbiAgICAgdmFyIF9kYXRhTGlzdCA9IFtdO1xuXG4gICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgIHZhciBtYWtlSW1wbCA9IGZ1bmN0aW9uKHRlc3QsIG1hc2tQYXR0ZXJuKSB7XG5cbiAgICAgICBfbW9kdWxlQ291bnQgPSBfdHlwZU51bWJlciAqIDQgKyAxNztcbiAgICAgICBfbW9kdWxlcyA9IGZ1bmN0aW9uKG1vZHVsZUNvdW50KSB7XG4gICAgICAgICB2YXIgbW9kdWxlcyA9IG5ldyBBcnJheShtb2R1bGVDb3VudCk7XG4gICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgbW9kdWxlc1tyb3ddID0gbmV3IEFycmF5KG1vZHVsZUNvdW50KTtcbiAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCArPSAxKSB7XG4gICAgICAgICAgICAgbW9kdWxlc1tyb3ddW2NvbF0gPSBudWxsO1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gbW9kdWxlcztcbiAgICAgICB9KF9tb2R1bGVDb3VudCk7XG5cbiAgICAgICBzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsIDApO1xuICAgICAgIHNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oX21vZHVsZUNvdW50IC0gNywgMCk7XG4gICAgICAgc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLCBfbW9kdWxlQ291bnQgLSA3KTtcbiAgICAgICBzZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybigpO1xuICAgICAgIHNldHVwVGltaW5nUGF0dGVybigpO1xuICAgICAgIHNldHVwVHlwZUluZm8odGVzdCwgbWFza1BhdHRlcm4pO1xuXG4gICAgICAgaWYgKF90eXBlTnVtYmVyID49IDcpIHtcbiAgICAgICAgIHNldHVwVHlwZU51bWJlcih0ZXN0KTtcbiAgICAgICB9XG5cbiAgICAgICBpZiAoX2RhdGFDYWNoZSA9PSBudWxsKSB7XG4gICAgICAgICBfZGF0YUNhY2hlID0gY3JlYXRlRGF0YShfdHlwZU51bWJlciwgX2Vycm9yQ29ycmVjdGlvbkxldmVsLCBfZGF0YUxpc3QpO1xuICAgICAgIH1cblxuICAgICAgIG1hcERhdGEoX2RhdGFDYWNoZSwgbWFza1BhdHRlcm4pO1xuICAgICB9O1xuXG4gICAgIHZhciBzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuID0gZnVuY3Rpb24ocm93LCBjb2wpIHtcblxuICAgICAgIGZvciAodmFyIHIgPSAtMTsgciA8PSA3OyByICs9IDEpIHtcblxuICAgICAgICAgaWYgKHJvdyArIHIgPD0gLTEgfHwgX21vZHVsZUNvdW50IDw9IHJvdyArIHIpIGNvbnRpbnVlO1xuXG4gICAgICAgICBmb3IgKHZhciBjID0gLTE7IGMgPD0gNzsgYyArPSAxKSB7XG5cbiAgICAgICAgICAgaWYgKGNvbCArIGMgPD0gLTEgfHwgX21vZHVsZUNvdW50IDw9IGNvbCArIGMpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgIGlmICggKDAgPD0gciAmJiByIDw9IDYgJiYgKGMgPT0gMCB8fCBjID09IDYpIClcbiAgICAgICAgICAgICAgIHx8ICgwIDw9IGMgJiYgYyA8PSA2ICYmIChyID09IDAgfHwgciA9PSA2KSApXG4gICAgICAgICAgICAgICB8fCAoMiA8PSByICYmIHIgPD0gNCAmJiAyIDw9IGMgJiYgYyA8PSA0KSApIHtcbiAgICAgICAgICAgICBfbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IHRydWU7XG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgX21vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSBmYWxzZTtcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgfTtcblxuICAgICB2YXIgZ2V0QmVzdE1hc2tQYXR0ZXJuID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICB2YXIgbWluTG9zdFBvaW50ID0gMDtcbiAgICAgICB2YXIgcGF0dGVybiA9IDA7XG5cbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkgKz0gMSkge1xuXG4gICAgICAgICBtYWtlSW1wbCh0cnVlLCBpKTtcblxuICAgICAgICAgdmFyIGxvc3RQb2ludCA9IFFSVXRpbC5nZXRMb3N0UG9pbnQoX3RoaXMpO1xuXG4gICAgICAgICBpZiAoaSA9PSAwIHx8IG1pbkxvc3RQb2ludCA+IGxvc3RQb2ludCkge1xuICAgICAgICAgICBtaW5Mb3N0UG9pbnQgPSBsb3N0UG9pbnQ7XG4gICAgICAgICAgIHBhdHRlcm4gPSBpO1xuICAgICAgICAgfVxuICAgICAgIH1cblxuICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICB9O1xuXG4gICAgIHZhciBzZXR1cFRpbWluZ1BhdHRlcm4gPSBmdW5jdGlvbigpIHtcblxuICAgICAgIGZvciAodmFyIHIgPSA4OyByIDwgX21vZHVsZUNvdW50IC0gODsgciArPSAxKSB7XG4gICAgICAgICBpZiAoX21vZHVsZXNbcl1bNl0gIT0gbnVsbCkge1xuICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgIH1cbiAgICAgICAgIF9tb2R1bGVzW3JdWzZdID0gKHIgJSAyID09IDApO1xuICAgICAgIH1cblxuICAgICAgIGZvciAodmFyIGMgPSA4OyBjIDwgX21vZHVsZUNvdW50IC0gODsgYyArPSAxKSB7XG4gICAgICAgICBpZiAoX21vZHVsZXNbNl1bY10gIT0gbnVsbCkge1xuICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgIH1cbiAgICAgICAgIF9tb2R1bGVzWzZdW2NdID0gKGMgJSAyID09IDApO1xuICAgICAgIH1cbiAgICAgfTtcblxuICAgICB2YXIgc2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4gPSBmdW5jdGlvbigpIHtcblxuICAgICAgIHZhciBwb3MgPSBRUlV0aWwuZ2V0UGF0dGVyblBvc2l0aW9uKF90eXBlTnVtYmVyKTtcblxuICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zLmxlbmd0aDsgaSArPSAxKSB7XG5cbiAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9zLmxlbmd0aDsgaiArPSAxKSB7XG5cbiAgICAgICAgICAgdmFyIHJvdyA9IHBvc1tpXTtcbiAgICAgICAgICAgdmFyIGNvbCA9IHBvc1tqXTtcblxuICAgICAgICAgICBpZiAoX21vZHVsZXNbcm93XVtjb2xdICE9IG51bGwpIHtcbiAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgIGZvciAodmFyIHIgPSAtMjsgciA8PSAyOyByICs9IDEpIHtcblxuICAgICAgICAgICAgIGZvciAodmFyIGMgPSAtMjsgYyA8PSAyOyBjICs9IDEpIHtcblxuICAgICAgICAgICAgICAgaWYgKHIgPT0gLTIgfHwgciA9PSAyIHx8IGMgPT0gLTIgfHwgYyA9PSAyXG4gICAgICAgICAgICAgICAgICAgfHwgKHIgPT0gMCAmJiBjID09IDApICkge1xuICAgICAgICAgICAgICAgICBfbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IHRydWU7XG4gICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICBfbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgfTtcblxuICAgICB2YXIgc2V0dXBUeXBlTnVtYmVyID0gZnVuY3Rpb24odGVzdCkge1xuXG4gICAgICAgdmFyIGJpdHMgPSBRUlV0aWwuZ2V0QkNIVHlwZU51bWJlcihfdHlwZU51bWJlcik7XG5cbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE4OyBpICs9IDEpIHtcbiAgICAgICAgIHZhciBtb2QgPSAoIXRlc3QgJiYgKCAoYml0cyA+PiBpKSAmIDEpID09IDEpO1xuICAgICAgICAgX21vZHVsZXNbTWF0aC5mbG9vcihpIC8gMyldW2kgJSAzICsgX21vZHVsZUNvdW50IC0gOCAtIDNdID0gbW9kO1xuICAgICAgIH1cblxuICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTg7IGkgKz0gMSkge1xuICAgICAgICAgdmFyIG1vZCA9ICghdGVzdCAmJiAoIChiaXRzID4+IGkpICYgMSkgPT0gMSk7XG4gICAgICAgICBfbW9kdWxlc1tpICUgMyArIF9tb2R1bGVDb3VudCAtIDggLSAzXVtNYXRoLmZsb29yKGkgLyAzKV0gPSBtb2Q7XG4gICAgICAgfVxuICAgICB9O1xuXG4gICAgIHZhciBzZXR1cFR5cGVJbmZvID0gZnVuY3Rpb24odGVzdCwgbWFza1BhdHRlcm4pIHtcblxuICAgICAgIHZhciBkYXRhID0gKF9lcnJvckNvcnJlY3Rpb25MZXZlbCA8PCAzKSB8IG1hc2tQYXR0ZXJuO1xuICAgICAgIHZhciBiaXRzID0gUVJVdGlsLmdldEJDSFR5cGVJbmZvKGRhdGEpO1xuXG4gICAgICAgLy8gdmVydGljYWxcbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE1OyBpICs9IDEpIHtcblxuICAgICAgICAgdmFyIG1vZCA9ICghdGVzdCAmJiAoIChiaXRzID4+IGkpICYgMSkgPT0gMSk7XG5cbiAgICAgICAgIGlmIChpIDwgNikge1xuICAgICAgICAgICBfbW9kdWxlc1tpXVs4XSA9IG1vZDtcbiAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDgpIHtcbiAgICAgICAgICAgX21vZHVsZXNbaSArIDFdWzhdID0gbW9kO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgX21vZHVsZXNbX21vZHVsZUNvdW50IC0gMTUgKyBpXVs4XSA9IG1vZDtcbiAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICAvLyBob3Jpem9udGFsXG4gICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSArPSAxKSB7XG5cbiAgICAgICAgIHZhciBtb2QgPSAoIXRlc3QgJiYgKCAoYml0cyA+PiBpKSAmIDEpID09IDEpO1xuXG4gICAgICAgICBpZiAoaSA8IDgpIHtcbiAgICAgICAgICAgX21vZHVsZXNbOF1bX21vZHVsZUNvdW50IC0gaSAtIDFdID0gbW9kO1xuICAgICAgICAgfSBlbHNlIGlmIChpIDwgOSkge1xuICAgICAgICAgICBfbW9kdWxlc1s4XVsxNSAtIGkgLSAxICsgMV0gPSBtb2Q7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBfbW9kdWxlc1s4XVsxNSAtIGkgLSAxXSA9IG1vZDtcbiAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICAvLyBmaXhlZCBtb2R1bGVcbiAgICAgICBfbW9kdWxlc1tfbW9kdWxlQ291bnQgLSA4XVs4XSA9ICghdGVzdCk7XG4gICAgIH07XG5cbiAgICAgdmFyIG1hcERhdGEgPSBmdW5jdGlvbihkYXRhLCBtYXNrUGF0dGVybikge1xuXG4gICAgICAgdmFyIGluYyA9IC0xO1xuICAgICAgIHZhciByb3cgPSBfbW9kdWxlQ291bnQgLSAxO1xuICAgICAgIHZhciBiaXRJbmRleCA9IDc7XG4gICAgICAgdmFyIGJ5dGVJbmRleCA9IDA7XG4gICAgICAgdmFyIG1hc2tGdW5jID0gUVJVdGlsLmdldE1hc2tGdW5jdGlvbihtYXNrUGF0dGVybik7XG5cbiAgICAgICBmb3IgKHZhciBjb2wgPSBfbW9kdWxlQ291bnQgLSAxOyBjb2wgPiAwOyBjb2wgLT0gMikge1xuXG4gICAgICAgICBpZiAoY29sID09IDYpIGNvbCAtPSAxO1xuXG4gICAgICAgICB3aGlsZSAodHJ1ZSkge1xuXG4gICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgMjsgYyArPSAxKSB7XG5cbiAgICAgICAgICAgICBpZiAoX21vZHVsZXNbcm93XVtjb2wgLSBjXSA9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgIHZhciBkYXJrID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgIGlmIChieXRlSW5kZXggPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICBkYXJrID0gKCAoIChkYXRhW2J5dGVJbmRleF0gPj4+IGJpdEluZGV4KSAmIDEpID09IDEpO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICB2YXIgbWFzayA9IG1hc2tGdW5jKHJvdywgY29sIC0gYyk7XG5cbiAgICAgICAgICAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgICAgICAgICAgIGRhcmsgPSAhZGFyaztcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgX21vZHVsZXNbcm93XVtjb2wgLSBjXSA9IGRhcms7XG4gICAgICAgICAgICAgICBiaXRJbmRleCAtPSAxO1xuXG4gICAgICAgICAgICAgICBpZiAoYml0SW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgYnl0ZUluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgIGJpdEluZGV4ID0gNztcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cblxuICAgICAgICAgICByb3cgKz0gaW5jO1xuXG4gICAgICAgICAgIGlmIChyb3cgPCAwIHx8IF9tb2R1bGVDb3VudCA8PSByb3cpIHtcbiAgICAgICAgICAgICByb3cgLT0gaW5jO1xuICAgICAgICAgICAgIGluYyA9IC1pbmM7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICB9XG4gICAgIH07XG5cbiAgICAgdmFyIGNyZWF0ZUJ5dGVzID0gZnVuY3Rpb24oYnVmZmVyLCByc0Jsb2Nrcykge1xuXG4gICAgICAgdmFyIG9mZnNldCA9IDA7XG5cbiAgICAgICB2YXIgbWF4RGNDb3VudCA9IDA7XG4gICAgICAgdmFyIG1heEVjQ291bnQgPSAwO1xuXG4gICAgICAgdmFyIGRjZGF0YSA9IG5ldyBBcnJheShyc0Jsb2Nrcy5sZW5ndGgpO1xuICAgICAgIHZhciBlY2RhdGEgPSBuZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTtcblxuICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByICs9IDEpIHtcblxuICAgICAgICAgdmFyIGRjQ291bnQgPSByc0Jsb2Nrc1tyXS5kYXRhQ291bnQ7XG4gICAgICAgICB2YXIgZWNDb3VudCA9IHJzQmxvY2tzW3JdLnRvdGFsQ291bnQgLSBkY0NvdW50O1xuXG4gICAgICAgICBtYXhEY0NvdW50ID0gTWF0aC5tYXgobWF4RGNDb3VudCwgZGNDb3VudCk7XG4gICAgICAgICBtYXhFY0NvdW50ID0gTWF0aC5tYXgobWF4RWNDb3VudCwgZWNDb3VudCk7XG5cbiAgICAgICAgIGRjZGF0YVtyXSA9IG5ldyBBcnJheShkY0NvdW50KTtcblxuICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkY2RhdGFbcl0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgZGNkYXRhW3JdW2ldID0gMHhmZiAmIGJ1ZmZlci5nZXRCdWZmZXIoKVtpICsgb2Zmc2V0XTtcbiAgICAgICAgIH1cbiAgICAgICAgIG9mZnNldCArPSBkY0NvdW50O1xuXG4gICAgICAgICB2YXIgcnNQb2x5ID0gUVJVdGlsLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZWNDb3VudCk7XG4gICAgICAgICB2YXIgcmF3UG9seSA9IHFyUG9seW5vbWlhbChkY2RhdGFbcl0sIHJzUG9seS5nZXRMZW5ndGgoKSAtIDEpO1xuXG4gICAgICAgICB2YXIgbW9kUG9seSA9IHJhd1BvbHkubW9kKHJzUG9seSk7XG4gICAgICAgICBlY2RhdGFbcl0gPSBuZXcgQXJyYXkocnNQb2x5LmdldExlbmd0aCgpIC0gMSk7XG4gICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVjZGF0YVtyXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICB2YXIgbW9kSW5kZXggPSBpICsgbW9kUG9seS5nZXRMZW5ndGgoKSAtIGVjZGF0YVtyXS5sZW5ndGg7XG4gICAgICAgICAgIGVjZGF0YVtyXVtpXSA9IChtb2RJbmRleCA+PSAwKT8gbW9kUG9seS5nZXRBdChtb2RJbmRleCkgOiAwO1xuICAgICAgICAgfVxuICAgICAgIH1cblxuICAgICAgIHZhciB0b3RhbENvZGVDb3VudCA9IDA7XG4gICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByc0Jsb2Nrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgdG90YWxDb2RlQ291bnQgKz0gcnNCbG9ja3NbaV0udG90YWxDb3VudDtcbiAgICAgICB9XG5cbiAgICAgICB2YXIgZGF0YSA9IG5ldyBBcnJheSh0b3RhbENvZGVDb3VudCk7XG4gICAgICAgdmFyIGluZGV4ID0gMDtcblxuICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF4RGNDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgciArPSAxKSB7XG4gICAgICAgICAgIGlmIChpIDwgZGNkYXRhW3JdLmxlbmd0aCkge1xuICAgICAgICAgICAgIGRhdGFbaW5kZXhdID0gZGNkYXRhW3JdW2ldO1xuICAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heEVjQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIgKz0gMSkge1xuICAgICAgICAgICBpZiAoaSA8IGVjZGF0YVtyXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICBkYXRhW2luZGV4XSA9IGVjZGF0YVtyXVtpXTtcbiAgICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgfVxuXG4gICAgICAgcmV0dXJuIGRhdGE7XG4gICAgIH07XG5cbiAgICAgdmFyIGNyZWF0ZURhdGEgPSBmdW5jdGlvbih0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgZGF0YUxpc3QpIHtcblxuICAgICAgIHZhciByc0Jsb2NrcyA9IFFSUlNCbG9jay5nZXRSU0Jsb2Nrcyh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3Rpb25MZXZlbCk7XG5cbiAgICAgICB2YXIgYnVmZmVyID0gcXJCaXRCdWZmZXIoKTtcblxuICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YUxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgIHZhciBkYXRhID0gZGF0YUxpc3RbaV07XG4gICAgICAgICBidWZmZXIucHV0KGRhdGEuZ2V0TW9kZSgpLCA0KTtcbiAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSwgUVJVdGlsLmdldExlbmd0aEluQml0cyhkYXRhLmdldE1vZGUoKSwgdHlwZU51bWJlcikgKTtcbiAgICAgICAgIGRhdGEud3JpdGUoYnVmZmVyKTtcbiAgICAgICB9XG5cbiAgICAgICAvLyBjYWxjIG51bSBtYXggZGF0YS5cbiAgICAgICB2YXIgdG90YWxEYXRhQ291bnQgPSAwO1xuICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgIHRvdGFsRGF0YUNvdW50ICs9IHJzQmxvY2tzW2ldLmRhdGFDb3VudDtcbiAgICAgICB9XG5cbiAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID4gdG90YWxEYXRhQ291bnQgKiA4KSB7XG4gICAgICAgICB0aHJvdyAnY29kZSBsZW5ndGggb3ZlcmZsb3cuICgnXG4gICAgICAgICAgICsgYnVmZmVyLmdldExlbmd0aEluQml0cygpXG4gICAgICAgICAgICsgJz4nXG4gICAgICAgICAgICsgdG90YWxEYXRhQ291bnQgKiA4XG4gICAgICAgICAgICsgJyknO1xuICAgICAgIH1cblxuICAgICAgIC8vIGVuZCBjb2RlXG4gICAgICAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSArIDQgPD0gdG90YWxEYXRhQ291bnQgKiA4KSB7XG4gICAgICAgICBidWZmZXIucHV0KDAsIDQpO1xuICAgICAgIH1cblxuICAgICAgIC8vIHBhZGRpbmdcbiAgICAgICB3aGlsZSAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICUgOCAhPSAwKSB7XG4gICAgICAgICBidWZmZXIucHV0Qml0KGZhbHNlKTtcbiAgICAgICB9XG5cbiAgICAgICAvLyBwYWRkaW5nXG4gICAgICAgd2hpbGUgKHRydWUpIHtcblxuICAgICAgICAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA+PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICB9XG4gICAgICAgICBidWZmZXIucHV0KFBBRDAsIDgpO1xuXG4gICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIH1cbiAgICAgICAgIGJ1ZmZlci5wdXQoUEFEMSwgOCk7XG4gICAgICAgfVxuXG4gICAgICAgcmV0dXJuIGNyZWF0ZUJ5dGVzKGJ1ZmZlciwgcnNCbG9ja3MpO1xuICAgICB9O1xuXG4gICAgIF90aGlzLmFkZERhdGEgPSBmdW5jdGlvbihkYXRhLCBtb2RlKSB7XG5cbiAgICAgICBtb2RlID0gbW9kZSB8fCAnQnl0ZSc7XG5cbiAgICAgICB2YXIgbmV3RGF0YSA9IG51bGw7XG5cbiAgICAgICBzd2l0Y2gobW9kZSkge1xuICAgICAgIGNhc2UgJ051bWVyaWMnIDpcbiAgICAgICAgIG5ld0RhdGEgPSBxck51bWJlcihkYXRhKTtcbiAgICAgICAgIGJyZWFrO1xuICAgICAgIGNhc2UgJ0FscGhhbnVtZXJpYycgOlxuICAgICAgICAgbmV3RGF0YSA9IHFyQWxwaGFOdW0oZGF0YSk7XG4gICAgICAgICBicmVhaztcbiAgICAgICBjYXNlICdCeXRlJyA6XG4gICAgICAgICBuZXdEYXRhID0gcXI4Qml0Qnl0ZShkYXRhKTtcbiAgICAgICAgIGJyZWFrO1xuICAgICAgIGNhc2UgJ0thbmppJyA6XG4gICAgICAgICBuZXdEYXRhID0gcXJLYW5qaShkYXRhKTtcbiAgICAgICAgIGJyZWFrO1xuICAgICAgIGRlZmF1bHQgOlxuICAgICAgICAgdGhyb3cgJ21vZGU6JyArIG1vZGU7XG4gICAgICAgfVxuXG4gICAgICAgX2RhdGFMaXN0LnB1c2gobmV3RGF0YSk7XG4gICAgICAgX2RhdGFDYWNoZSA9IG51bGw7XG4gICAgIH07XG5cbiAgICAgX3RoaXMuaXNEYXJrID0gZnVuY3Rpb24ocm93LCBjb2wpIHtcbiAgICAgICBpZiAocm93IDwgMCB8fCBfbW9kdWxlQ291bnQgPD0gcm93IHx8IGNvbCA8IDAgfHwgX21vZHVsZUNvdW50IDw9IGNvbCkge1xuICAgICAgICAgdGhyb3cgcm93ICsgJywnICsgY29sO1xuICAgICAgIH1cbiAgICAgICByZXR1cm4gX21vZHVsZXNbcm93XVtjb2xdO1xuICAgICB9O1xuXG4gICAgIF90aGlzLmdldE1vZHVsZUNvdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgcmV0dXJuIF9tb2R1bGVDb3VudDtcbiAgICAgfTtcblxuICAgICBfdGhpcy5tYWtlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgaWYgKF90eXBlTnVtYmVyIDwgMSkge1xuICAgICAgICAgdmFyIHR5cGVOdW1iZXIgPSAxO1xuXG4gICAgICAgICBmb3IgKDsgdHlwZU51bWJlciA8IDQwOyB0eXBlTnVtYmVyKyspIHtcbiAgICAgICAgICAgdmFyIHJzQmxvY2tzID0gUVJSU0Jsb2NrLmdldFJTQmxvY2tzKHR5cGVOdW1iZXIsIF9lcnJvckNvcnJlY3Rpb25MZXZlbCk7XG4gICAgICAgICAgIHZhciBidWZmZXIgPSBxckJpdEJ1ZmZlcigpO1xuXG4gICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX2RhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgdmFyIGRhdGEgPSBfZGF0YUxpc3RbaV07XG4gICAgICAgICAgICAgYnVmZmVyLnB1dChkYXRhLmdldE1vZGUoKSwgNCk7XG4gICAgICAgICAgICAgYnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBRUlV0aWwuZ2V0TGVuZ3RoSW5CaXRzKGRhdGEuZ2V0TW9kZSgpLCB0eXBlTnVtYmVyKSApO1xuICAgICAgICAgICAgIGRhdGEud3JpdGUoYnVmZmVyKTtcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgIHZhciB0b3RhbERhdGFDb3VudCA9IDA7XG4gICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICB0b3RhbERhdGFDb3VudCArPSByc0Jsb2Nrc1tpXS5kYXRhQ291bnQ7XG4gICAgICAgICAgIH1cblxuICAgICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpIDw9IHRvdGFsRGF0YUNvdW50ICogOCkge1xuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG5cbiAgICAgICAgIF90eXBlTnVtYmVyID0gdHlwZU51bWJlcjtcbiAgICAgICB9XG5cbiAgICAgICBtYWtlSW1wbChmYWxzZSwgZ2V0QmVzdE1hc2tQYXR0ZXJuKCkgKTtcbiAgICAgfTtcblxuICAgICBfdGhpcy5jcmVhdGVUYWJsZVRhZyA9IGZ1bmN0aW9uKGNlbGxTaXplLCBtYXJnaW4pIHtcblxuICAgICAgIGNlbGxTaXplID0gY2VsbFNpemUgfHwgMjtcbiAgICAgICBtYXJnaW4gPSAodHlwZW9mIG1hcmdpbiA9PSAndW5kZWZpbmVkJyk/IGNlbGxTaXplICogNCA6IG1hcmdpbjtcblxuICAgICAgIHZhciBxckh0bWwgPSAnJztcblxuICAgICAgIHFySHRtbCArPSAnPHRhYmxlIHN0eWxlPVwiJztcbiAgICAgICBxckh0bWwgKz0gJyBib3JkZXItd2lkdGg6IDBweDsgYm9yZGVyLXN0eWxlOiBub25lOyc7XG4gICAgICAgcXJIdG1sICs9ICcgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsnO1xuICAgICAgIHFySHRtbCArPSAnIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAnICsgbWFyZ2luICsgJ3B4Oyc7XG4gICAgICAgcXJIdG1sICs9ICdcIj4nO1xuICAgICAgIHFySHRtbCArPSAnPHRib2R5Pic7XG5cbiAgICAgICBmb3IgKHZhciByID0gMDsgciA8IF90aGlzLmdldE1vZHVsZUNvdW50KCk7IHIgKz0gMSkge1xuXG4gICAgICAgICBxckh0bWwgKz0gJzx0cj4nO1xuXG4gICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IF90aGlzLmdldE1vZHVsZUNvdW50KCk7IGMgKz0gMSkge1xuICAgICAgICAgICBxckh0bWwgKz0gJzx0ZCBzdHlsZT1cIic7XG4gICAgICAgICAgIHFySHRtbCArPSAnIGJvcmRlci13aWR0aDogMHB4OyBib3JkZXItc3R5bGU6IG5vbmU7JztcbiAgICAgICAgICAgcXJIdG1sICs9ICcgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsnO1xuICAgICAgICAgICBxckh0bWwgKz0gJyBwYWRkaW5nOiAwcHg7IG1hcmdpbjogMHB4Oyc7XG4gICAgICAgICAgIHFySHRtbCArPSAnIHdpZHRoOiAnICsgY2VsbFNpemUgKyAncHg7JztcbiAgICAgICAgICAgcXJIdG1sICs9ICcgaGVpZ2h0OiAnICsgY2VsbFNpemUgKyAncHg7JztcbiAgICAgICAgICAgcXJIdG1sICs9ICcgYmFja2dyb3VuZC1jb2xvcjogJztcbiAgICAgICAgICAgcXJIdG1sICs9IF90aGlzLmlzRGFyayhyLCBjKT8gJyMwMDAwMDAnIDogJyNmZmZmZmYnO1xuICAgICAgICAgICBxckh0bWwgKz0gJzsnO1xuICAgICAgICAgICBxckh0bWwgKz0gJ1wiLz4nO1xuICAgICAgICAgfVxuXG4gICAgICAgICBxckh0bWwgKz0gJzwvdHI+JztcbiAgICAgICB9XG5cbiAgICAgICBxckh0bWwgKz0gJzwvdGJvZHk+JztcbiAgICAgICBxckh0bWwgKz0gJzwvdGFibGU+JztcblxuICAgICAgIHJldHVybiBxckh0bWw7XG4gICAgIH07XG5cbiAgICAgX3RoaXMuY3JlYXRlU3ZnVGFnID0gZnVuY3Rpb24oY2VsbFNpemUsIG1hcmdpbiwgYWx0LCB0aXRsZSkge1xuXG4gICAgICAgdmFyIG9wdHMgPSB7fTtcbiAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgLy8gQ2FsbGVkIGJ5IG9wdGlvbnMuXG4gICAgICAgICBvcHRzID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgLy8gb3ZlcndyaXRlIGNlbGxTaXplIGFuZCBtYXJnaW4uXG4gICAgICAgICBjZWxsU2l6ZSA9IG9wdHMuY2VsbFNpemU7XG4gICAgICAgICBtYXJnaW4gPSBvcHRzLm1hcmdpbjtcbiAgICAgICAgIGFsdCA9IG9wdHMuYWx0O1xuICAgICAgICAgdGl0bGUgPSBvcHRzLnRpdGxlO1xuICAgICAgIH1cblxuICAgICAgIGNlbGxTaXplID0gY2VsbFNpemUgfHwgMjtcbiAgICAgICBtYXJnaW4gPSAodHlwZW9mIG1hcmdpbiA9PSAndW5kZWZpbmVkJyk/IGNlbGxTaXplICogNCA6IG1hcmdpbjtcblxuICAgICAgIC8vIENvbXBvc2UgYWx0IHByb3BlcnR5IHN1cnJvZ2F0ZVxuICAgICAgIGFsdCA9ICh0eXBlb2YgYWx0ID09PSAnc3RyaW5nJykgPyB7dGV4dDogYWx0fSA6IGFsdCB8fCB7fTtcbiAgICAgICBhbHQudGV4dCA9IGFsdC50ZXh0IHx8IG51bGw7XG4gICAgICAgYWx0LmlkID0gKGFsdC50ZXh0KSA/IGFsdC5pZCB8fCAncXJjb2RlLWRlc2NyaXB0aW9uJyA6IG51bGw7XG5cbiAgICAgICAvLyBDb21wb3NlIHRpdGxlIHByb3BlcnR5IHN1cnJvZ2F0ZVxuICAgICAgIHRpdGxlID0gKHR5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycpID8ge3RleHQ6IHRpdGxlfSA6IHRpdGxlIHx8IHt9O1xuICAgICAgIHRpdGxlLnRleHQgPSB0aXRsZS50ZXh0IHx8IG51bGw7XG4gICAgICAgdGl0bGUuaWQgPSAodGl0bGUudGV4dCkgPyB0aXRsZS5pZCB8fCAncXJjb2RlLXRpdGxlJyA6IG51bGw7XG5cbiAgICAgICB2YXIgc2l6ZSA9IF90aGlzLmdldE1vZHVsZUNvdW50KCkgKiBjZWxsU2l6ZSArIG1hcmdpbiAqIDI7XG4gICAgICAgdmFyIGMsIG1jLCByLCBtciwgcXJTdmc9JycsIHJlY3Q7XG5cbiAgICAgICByZWN0ID0gJ2wnICsgY2VsbFNpemUgKyAnLDAgMCwnICsgY2VsbFNpemUgK1xuICAgICAgICAgJyAtJyArIGNlbGxTaXplICsgJywwIDAsLScgKyBjZWxsU2l6ZSArICd6ICc7XG5cbiAgICAgICBxclN2ZyArPSAnPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiJztcbiAgICAgICBxclN2ZyArPSAhb3B0cy5zY2FsYWJsZSA/ICcgd2lkdGg9XCInICsgc2l6ZSArICdweFwiIGhlaWdodD1cIicgKyBzaXplICsgJ3B4XCInIDogJyc7XG4gICAgICAgcXJTdmcgKz0gJyB2aWV3Qm94PVwiMCAwICcgKyBzaXplICsgJyAnICsgc2l6ZSArICdcIiAnO1xuICAgICAgIHFyU3ZnICs9ICcgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaW5ZTWluIG1lZXRcIic7XG4gICAgICAgcXJTdmcgKz0gKHRpdGxlLnRleHQgfHwgYWx0LnRleHQpID8gJyByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiJyArXG4gICAgICAgICAgIGVzY2FwZVhtbChbdGl0bGUuaWQsIGFsdC5pZF0uam9pbignICcpLnRyaW0oKSApICsgJ1wiJyA6ICcnO1xuICAgICAgIHFyU3ZnICs9ICc+JztcbiAgICAgICBxclN2ZyArPSAodGl0bGUudGV4dCkgPyAnPHRpdGxlIGlkPVwiJyArIGVzY2FwZVhtbCh0aXRsZS5pZCkgKyAnXCI+JyArXG4gICAgICAgICAgIGVzY2FwZVhtbCh0aXRsZS50ZXh0KSArICc8L3RpdGxlPicgOiAnJztcbiAgICAgICBxclN2ZyArPSAoYWx0LnRleHQpID8gJzxkZXNjcmlwdGlvbiBpZD1cIicgKyBlc2NhcGVYbWwoYWx0LmlkKSArICdcIj4nICtcbiAgICAgICAgICAgZXNjYXBlWG1sKGFsdC50ZXh0KSArICc8L2Rlc2NyaXB0aW9uPicgOiAnJztcbiAgICAgICBxclN2ZyArPSAnPHJlY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiIGN4PVwiMFwiIGN5PVwiMFwiLz4nO1xuICAgICAgIHFyU3ZnICs9ICc8cGF0aCBkPVwiJztcblxuICAgICAgIGZvciAociA9IDA7IHIgPCBfdGhpcy5nZXRNb2R1bGVDb3VudCgpOyByICs9IDEpIHtcbiAgICAgICAgIG1yID0gciAqIGNlbGxTaXplICsgbWFyZ2luO1xuICAgICAgICAgZm9yIChjID0gMDsgYyA8IF90aGlzLmdldE1vZHVsZUNvdW50KCk7IGMgKz0gMSkge1xuICAgICAgICAgICBpZiAoX3RoaXMuaXNEYXJrKHIsIGMpICkge1xuICAgICAgICAgICAgIG1jID0gYypjZWxsU2l6ZSttYXJnaW47XG4gICAgICAgICAgICAgcXJTdmcgKz0gJ00nICsgbWMgKyAnLCcgKyBtciArIHJlY3Q7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICBxclN2ZyArPSAnXCIgc3Ryb2tlPVwidHJhbnNwYXJlbnRcIiBmaWxsPVwiYmxhY2tcIi8+JztcbiAgICAgICBxclN2ZyArPSAnPC9zdmc+JztcblxuICAgICAgIHJldHVybiBxclN2ZztcbiAgICAgfTtcblxuICAgICBfdGhpcy5jcmVhdGVEYXRhVVJMID0gZnVuY3Rpb24oY2VsbFNpemUsIG1hcmdpbikge1xuXG4gICAgICAgY2VsbFNpemUgPSBjZWxsU2l6ZSB8fCAyO1xuICAgICAgIG1hcmdpbiA9ICh0eXBlb2YgbWFyZ2luID09ICd1bmRlZmluZWQnKT8gY2VsbFNpemUgKiA0IDogbWFyZ2luO1xuXG4gICAgICAgdmFyIHNpemUgPSBfdGhpcy5nZXRNb2R1bGVDb3VudCgpICogY2VsbFNpemUgKyBtYXJnaW4gKiAyO1xuICAgICAgIHZhciBtaW4gPSBtYXJnaW47XG4gICAgICAgdmFyIG1heCA9IHNpemUgLSBtYXJnaW47XG5cbiAgICAgICByZXR1cm4gY3JlYXRlRGF0YVVSTChzaXplLCBzaXplLCBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgICBpZiAobWluIDw9IHggJiYgeCA8IG1heCAmJiBtaW4gPD0geSAmJiB5IDwgbWF4KSB7XG4gICAgICAgICAgIHZhciBjID0gTWF0aC5mbG9vciggKHggLSBtaW4pIC8gY2VsbFNpemUpO1xuICAgICAgICAgICB2YXIgciA9IE1hdGguZmxvb3IoICh5IC0gbWluKSAvIGNlbGxTaXplKTtcbiAgICAgICAgICAgcmV0dXJuIF90aGlzLmlzRGFyayhyLCBjKT8gMCA6IDE7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgIH1cbiAgICAgICB9ICk7XG4gICAgIH07XG5cbiAgICAgX3RoaXMuY3JlYXRlSW1nVGFnID0gZnVuY3Rpb24oY2VsbFNpemUsIG1hcmdpbiwgYWx0KSB7XG5cbiAgICAgICBjZWxsU2l6ZSA9IGNlbGxTaXplIHx8IDI7XG4gICAgICAgbWFyZ2luID0gKHR5cGVvZiBtYXJnaW4gPT0gJ3VuZGVmaW5lZCcpPyBjZWxsU2l6ZSAqIDQgOiBtYXJnaW47XG5cbiAgICAgICB2YXIgc2l6ZSA9IF90aGlzLmdldE1vZHVsZUNvdW50KCkgKiBjZWxsU2l6ZSArIG1hcmdpbiAqIDI7XG5cbiAgICAgICB2YXIgaW1nID0gJyc7XG4gICAgICAgaW1nICs9ICc8aW1nJztcbiAgICAgICBpbWcgKz0gJ1xcdTAwMjBzcmM9XCInO1xuICAgICAgIGltZyArPSBfdGhpcy5jcmVhdGVEYXRhVVJMKGNlbGxTaXplLCBtYXJnaW4pO1xuICAgICAgIGltZyArPSAnXCInO1xuICAgICAgIGltZyArPSAnXFx1MDAyMHdpZHRoPVwiJztcbiAgICAgICBpbWcgKz0gc2l6ZTtcbiAgICAgICBpbWcgKz0gJ1wiJztcbiAgICAgICBpbWcgKz0gJ1xcdTAwMjBoZWlnaHQ9XCInO1xuICAgICAgIGltZyArPSBzaXplO1xuICAgICAgIGltZyArPSAnXCInO1xuICAgICAgIGlmIChhbHQpIHtcbiAgICAgICAgIGltZyArPSAnXFx1MDAyMGFsdD1cIic7XG4gICAgICAgICBpbWcgKz0gZXNjYXBlWG1sKGFsdCk7XG4gICAgICAgICBpbWcgKz0gJ1wiJztcbiAgICAgICB9XG4gICAgICAgaW1nICs9ICcvPic7XG5cbiAgICAgICByZXR1cm4gaW1nO1xuICAgICB9O1xuXG4gICAgIHZhciBlc2NhcGVYbWwgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgdmFyIGVzY2FwZWQgPSAnJztcbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgIHZhciBjID0gcy5jaGFyQXQoaSk7XG4gICAgICAgICBzd2l0Y2goYykge1xuICAgICAgICAgY2FzZSAnPCc6IGVzY2FwZWQgKz0gJyZsdDsnOyBicmVhaztcbiAgICAgICAgIGNhc2UgJz4nOiBlc2NhcGVkICs9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICAgICBjYXNlICcmJzogZXNjYXBlZCArPSAnJmFtcDsnOyBicmVhaztcbiAgICAgICAgIGNhc2UgJ1wiJzogZXNjYXBlZCArPSAnJnF1b3Q7JzsgYnJlYWs7XG4gICAgICAgICBkZWZhdWx0IDogZXNjYXBlZCArPSBjOyBicmVhaztcbiAgICAgICAgIH1cbiAgICAgICB9XG4gICAgICAgcmV0dXJuIGVzY2FwZWQ7XG4gICAgIH07XG5cbiAgICAgdmFyIF9jcmVhdGVIYWxmQVNDSUkgPSBmdW5jdGlvbihtYXJnaW4pIHtcbiAgICAgICB2YXIgY2VsbFNpemUgPSAxO1xuICAgICAgIG1hcmdpbiA9ICh0eXBlb2YgbWFyZ2luID09ICd1bmRlZmluZWQnKT8gY2VsbFNpemUgKiAyIDogbWFyZ2luO1xuXG4gICAgICAgdmFyIHNpemUgPSBfdGhpcy5nZXRNb2R1bGVDb3VudCgpICogY2VsbFNpemUgKyBtYXJnaW4gKiAyO1xuICAgICAgIHZhciBtaW4gPSBtYXJnaW47XG4gICAgICAgdmFyIG1heCA9IHNpemUgLSBtYXJnaW47XG5cbiAgICAgICB2YXIgeSwgeCwgcjEsIHIyLCBwO1xuXG4gICAgICAgdmFyIGJsb2NrcyA9IHtcbiAgICAgICAgICfilojilognOiAn4paIJyxcbiAgICAgICAgICfiloggJzogJ+KWgCcsXG4gICAgICAgICAnIOKWiCc6ICfiloQnLFxuICAgICAgICAgJyAgJzogJyAnXG4gICAgICAgfTtcblxuICAgICAgIHZhciBibG9ja3NMYXN0TGluZU5vTWFyZ2luID0ge1xuICAgICAgICAgJ+KWiOKWiCc6ICfiloAnLFxuICAgICAgICAgJ+KWiCAnOiAn4paAJyxcbiAgICAgICAgICcg4paIJzogJyAnLFxuICAgICAgICAgJyAgJzogJyAnXG4gICAgICAgfTtcblxuICAgICAgIHZhciBhc2NpaSA9ICcnO1xuICAgICAgIGZvciAoeSA9IDA7IHkgPCBzaXplOyB5ICs9IDIpIHtcbiAgICAgICAgIHIxID0gTWF0aC5mbG9vcigoeSAtIG1pbikgLyBjZWxsU2l6ZSk7XG4gICAgICAgICByMiA9IE1hdGguZmxvb3IoKHkgKyAxIC0gbWluKSAvIGNlbGxTaXplKTtcbiAgICAgICAgIGZvciAoeCA9IDA7IHggPCBzaXplOyB4ICs9IDEpIHtcbiAgICAgICAgICAgcCA9ICfilognO1xuXG4gICAgICAgICAgIGlmIChtaW4gPD0geCAmJiB4IDwgbWF4ICYmIG1pbiA8PSB5ICYmIHkgPCBtYXggJiYgX3RoaXMuaXNEYXJrKHIxLCBNYXRoLmZsb29yKCh4IC0gbWluKSAvIGNlbGxTaXplKSkpIHtcbiAgICAgICAgICAgICBwID0gJyAnO1xuICAgICAgICAgICB9XG5cbiAgICAgICAgICAgaWYgKG1pbiA8PSB4ICYmIHggPCBtYXggJiYgbWluIDw9IHkrMSAmJiB5KzEgPCBtYXggJiYgX3RoaXMuaXNEYXJrKHIyLCBNYXRoLmZsb29yKCh4IC0gbWluKSAvIGNlbGxTaXplKSkpIHtcbiAgICAgICAgICAgICBwICs9ICcgJztcbiAgICAgICAgICAgfVxuICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICBwICs9ICfilognO1xuICAgICAgICAgICB9XG5cbiAgICAgICAgICAgLy8gT3V0cHV0IDIgY2hhcmFjdGVycyBwZXIgcGl4ZWwsIHRvIGNyZWF0ZSBmdWxsIHNxdWFyZS4gMSBjaGFyYWN0ZXIgcGVyIHBpeGVscyBnaXZlcyBvbmx5IGhhbGYgd2lkdGggb2Ygc3F1YXJlLlxuICAgICAgICAgICBhc2NpaSArPSAobWFyZ2luIDwgMSAmJiB5KzEgPj0gbWF4KSA/IGJsb2Nrc0xhc3RMaW5lTm9NYXJnaW5bcF0gOiBibG9ja3NbcF07XG4gICAgICAgICB9XG5cbiAgICAgICAgIGFzY2lpICs9ICdcXG4nO1xuICAgICAgIH1cblxuICAgICAgIGlmIChzaXplICUgMiAmJiBtYXJnaW4gPiAwKSB7XG4gICAgICAgICByZXR1cm4gYXNjaWkuc3Vic3RyaW5nKDAsIGFzY2lpLmxlbmd0aCAtIHNpemUgLSAxKSArIEFycmF5KHNpemUrMSkuam9pbign4paAJyk7XG4gICAgICAgfVxuXG4gICAgICAgcmV0dXJuIGFzY2lpLnN1YnN0cmluZygwLCBhc2NpaS5sZW5ndGgtMSk7XG4gICAgIH07XG5cbiAgICAgX3RoaXMuY3JlYXRlQVNDSUkgPSBmdW5jdGlvbihjZWxsU2l6ZSwgbWFyZ2luKSB7XG4gICAgICAgY2VsbFNpemUgPSBjZWxsU2l6ZSB8fCAxO1xuXG4gICAgICAgaWYgKGNlbGxTaXplIDwgMikge1xuICAgICAgICAgcmV0dXJuIF9jcmVhdGVIYWxmQVNDSUkobWFyZ2luKTtcbiAgICAgICB9XG5cbiAgICAgICBjZWxsU2l6ZSAtPSAxO1xuICAgICAgIG1hcmdpbiA9ICh0eXBlb2YgbWFyZ2luID09ICd1bmRlZmluZWQnKT8gY2VsbFNpemUgKiAyIDogbWFyZ2luO1xuXG4gICAgICAgdmFyIHNpemUgPSBfdGhpcy5nZXRNb2R1bGVDb3VudCgpICogY2VsbFNpemUgKyBtYXJnaW4gKiAyO1xuICAgICAgIHZhciBtaW4gPSBtYXJnaW47XG4gICAgICAgdmFyIG1heCA9IHNpemUgLSBtYXJnaW47XG5cbiAgICAgICB2YXIgeSwgeCwgciwgcDtcblxuICAgICAgIHZhciB3aGl0ZSA9IEFycmF5KGNlbGxTaXplKzEpLmpvaW4oJ+KWiOKWiCcpO1xuICAgICAgIHZhciBibGFjayA9IEFycmF5KGNlbGxTaXplKzEpLmpvaW4oJyAgJyk7XG5cbiAgICAgICB2YXIgYXNjaWkgPSAnJztcbiAgICAgICB2YXIgbGluZSA9ICcnO1xuICAgICAgIGZvciAoeSA9IDA7IHkgPCBzaXplOyB5ICs9IDEpIHtcbiAgICAgICAgIHIgPSBNYXRoLmZsb29yKCAoeSAtIG1pbikgLyBjZWxsU2l6ZSk7XG4gICAgICAgICBsaW5lID0gJyc7XG4gICAgICAgICBmb3IgKHggPSAwOyB4IDwgc2l6ZTsgeCArPSAxKSB7XG4gICAgICAgICAgIHAgPSAxO1xuXG4gICAgICAgICAgIGlmIChtaW4gPD0geCAmJiB4IDwgbWF4ICYmIG1pbiA8PSB5ICYmIHkgPCBtYXggJiYgX3RoaXMuaXNEYXJrKHIsIE1hdGguZmxvb3IoKHggLSBtaW4pIC8gY2VsbFNpemUpKSkge1xuICAgICAgICAgICAgIHAgPSAwO1xuICAgICAgICAgICB9XG5cbiAgICAgICAgICAgLy8gT3V0cHV0IDIgY2hhcmFjdGVycyBwZXIgcGl4ZWwsIHRvIGNyZWF0ZSBmdWxsIHNxdWFyZS4gMSBjaGFyYWN0ZXIgcGVyIHBpeGVscyBnaXZlcyBvbmx5IGhhbGYgd2lkdGggb2Ygc3F1YXJlLlxuICAgICAgICAgICBsaW5lICs9IHAgPyB3aGl0ZSA6IGJsYWNrO1xuICAgICAgICAgfVxuXG4gICAgICAgICBmb3IgKHIgPSAwOyByIDwgY2VsbFNpemU7IHIgKz0gMSkge1xuICAgICAgICAgICBhc2NpaSArPSBsaW5lICsgJ1xcbic7XG4gICAgICAgICB9XG4gICAgICAgfVxuXG4gICAgICAgcmV0dXJuIGFzY2lpLnN1YnN0cmluZygwLCBhc2NpaS5sZW5ndGgtMSk7XG4gICAgIH07XG5cbiAgICAgX3RoaXMucmVuZGVyVG8yZENvbnRleHQgPSBmdW5jdGlvbihjb250ZXh0LCBjZWxsU2l6ZSkge1xuICAgICAgIGNlbGxTaXplID0gY2VsbFNpemUgfHwgMjtcbiAgICAgICB2YXIgbGVuZ3RoID0gX3RoaXMuZ2V0TW9kdWxlQ291bnQoKTtcbiAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBsZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBsZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gX3RoaXMuaXNEYXJrKHJvdywgY29sKSA/ICdibGFjaycgOiAnd2hpdGUnO1xuICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHJvdyAqIGNlbGxTaXplLCBjb2wgKiBjZWxsU2l6ZSwgY2VsbFNpemUsIGNlbGxTaXplKTtcbiAgICAgICAgIH1cbiAgICAgICB9XG4gICAgIH1cblxuICAgICByZXR1cm4gX3RoaXM7XG4gICB9O1xuXG4gICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgLy8gcXJjb2RlLnN0cmluZ1RvQnl0ZXNcbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgIHFyY29kZS5zdHJpbmdUb0J5dGVzRnVuY3MgPSB7XG4gICAgICdkZWZhdWx0JyA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgIHZhciBjID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgYnl0ZXMucHVzaChjICYgMHhmZik7XG4gICAgICAgfVxuICAgICAgIHJldHVybiBieXRlcztcbiAgICAgfVxuICAgfTtcblxuICAgcXJjb2RlLnN0cmluZ1RvQnl0ZXMgPSBxcmNvZGUuc3RyaW5nVG9CeXRlc0Z1bmNzWydkZWZhdWx0J107XG5cbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAvLyBxcmNvZGUuY3JlYXRlU3RyaW5nVG9CeXRlc1xuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgLyoqXG4gICAgKiBAcGFyYW0gdW5pY29kZURhdGEgYmFzZTY0IHN0cmluZyBvZiBieXRlIGFycmF5LlxuICAgICogWzE2Yml0IFVuaWNvZGVdLFsxNmJpdCBCeXRlc10sIC4uLlxuICAgICogQHBhcmFtIG51bUNoYXJzXG4gICAgKi9cbiAgIHFyY29kZS5jcmVhdGVTdHJpbmdUb0J5dGVzID0gZnVuY3Rpb24odW5pY29kZURhdGEsIG51bUNoYXJzKSB7XG5cbiAgICAgLy8gY3JlYXRlIGNvbnZlcnNpb24gbWFwLlxuXG4gICAgIHZhciB1bmljb2RlTWFwID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICB2YXIgYmluID0gYmFzZTY0RGVjb2RlSW5wdXRTdHJlYW0odW5pY29kZURhdGEpO1xuICAgICAgIHZhciByZWFkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICB2YXIgYiA9IGJpbi5yZWFkKCk7XG4gICAgICAgICBpZiAoYiA9PSAtMSkgdGhyb3cgJ2VvZic7XG4gICAgICAgICByZXR1cm4gYjtcbiAgICAgICB9O1xuXG4gICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICB2YXIgdW5pY29kZU1hcCA9IHt9O1xuICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICB2YXIgYjAgPSBiaW4ucmVhZCgpO1xuICAgICAgICAgaWYgKGIwID09IC0xKSBicmVhaztcbiAgICAgICAgIHZhciBiMSA9IHJlYWQoKTtcbiAgICAgICAgIHZhciBiMiA9IHJlYWQoKTtcbiAgICAgICAgIHZhciBiMyA9IHJlYWQoKTtcbiAgICAgICAgIHZhciBrID0gU3RyaW5nLmZyb21DaGFyQ29kZSggKGIwIDw8IDgpIHwgYjEpO1xuICAgICAgICAgdmFyIHYgPSAoYjIgPDwgOCkgfCBiMztcbiAgICAgICAgIHVuaWNvZGVNYXBba10gPSB2O1xuICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICB9XG4gICAgICAgaWYgKGNvdW50ICE9IG51bUNoYXJzKSB7XG4gICAgICAgICB0aHJvdyBjb3VudCArICcgIT0gJyArIG51bUNoYXJzO1xuICAgICAgIH1cblxuICAgICAgIHJldHVybiB1bmljb2RlTWFwO1xuICAgICB9KCk7XG5cbiAgICAgdmFyIHVua25vd25DaGFyID0gJz8nLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAgcmV0dXJuIGZ1bmN0aW9uKHMpIHtcbiAgICAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgIHZhciBjID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgICAgICAgYnl0ZXMucHVzaChjKTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHZhciBiID0gdW5pY29kZU1hcFtzLmNoYXJBdChpKV07XG4gICAgICAgICAgIGlmICh0eXBlb2YgYiA9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgIGlmICggKGIgJiAweGZmKSA9PSBiKSB7XG4gICAgICAgICAgICAgICAvLyAxYnl0ZVxuICAgICAgICAgICAgICAgYnl0ZXMucHVzaChiKTtcbiAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgLy8gMmJ5dGVzXG4gICAgICAgICAgICAgICBieXRlcy5wdXNoKGIgPj4+IDgpO1xuICAgICAgICAgICAgICAgYnl0ZXMucHVzaChiICYgMHhmZik7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgIGJ5dGVzLnB1c2godW5rbm93bkNoYXIpO1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgfVxuICAgICAgIHJldHVybiBieXRlcztcbiAgICAgfTtcbiAgIH07XG5cbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAvLyBRUk1vZGVcbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgIHZhciBRUk1vZGUgPSB7XG4gICAgIE1PREVfTlVNQkVSIDogICAgMSA8PCAwLFxuICAgICBNT0RFX0FMUEhBX05VTSA6IDEgPDwgMSxcbiAgICAgTU9ERV84QklUX0JZVEUgOiAxIDw8IDIsXG4gICAgIE1PREVfS0FOSkkgOiAgICAgMSA8PCAzXG4gICB9O1xuXG4gICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgLy8gUVJFcnJvckNvcnJlY3Rpb25MZXZlbFxuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgdmFyIFFSRXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSB7XG4gICAgIEwgOiAxLFxuICAgICBNIDogMCxcbiAgICAgUSA6IDMsXG4gICAgIEggOiAyXG4gICB9O1xuXG4gICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgLy8gUVJNYXNrUGF0dGVyblxuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgdmFyIFFSTWFza1BhdHRlcm4gPSB7XG4gICAgIFBBVFRFUk4wMDAgOiAwLFxuICAgICBQQVRURVJOMDAxIDogMSxcbiAgICAgUEFUVEVSTjAxMCA6IDIsXG4gICAgIFBBVFRFUk4wMTEgOiAzLFxuICAgICBQQVRURVJOMTAwIDogNCxcbiAgICAgUEFUVEVSTjEwMSA6IDUsXG4gICAgIFBBVFRFUk4xMTAgOiA2LFxuICAgICBQQVRURVJOMTExIDogN1xuICAgfTtcblxuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIC8vIFFSVXRpbFxuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgdmFyIFFSVXRpbCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgIHZhciBQQVRURVJOX1BPU0lUSU9OX1RBQkxFID0gW1xuICAgICAgIFtdLFxuICAgICAgIFs2LCAxOF0sXG4gICAgICAgWzYsIDIyXSxcbiAgICAgICBbNiwgMjZdLFxuICAgICAgIFs2LCAzMF0sXG4gICAgICAgWzYsIDM0XSxcbiAgICAgICBbNiwgMjIsIDM4XSxcbiAgICAgICBbNiwgMjQsIDQyXSxcbiAgICAgICBbNiwgMjYsIDQ2XSxcbiAgICAgICBbNiwgMjgsIDUwXSxcbiAgICAgICBbNiwgMzAsIDU0XSxcbiAgICAgICBbNiwgMzIsIDU4XSxcbiAgICAgICBbNiwgMzQsIDYyXSxcbiAgICAgICBbNiwgMjYsIDQ2LCA2Nl0sXG4gICAgICAgWzYsIDI2LCA0OCwgNzBdLFxuICAgICAgIFs2LCAyNiwgNTAsIDc0XSxcbiAgICAgICBbNiwgMzAsIDU0LCA3OF0sXG4gICAgICAgWzYsIDMwLCA1NiwgODJdLFxuICAgICAgIFs2LCAzMCwgNTgsIDg2XSxcbiAgICAgICBbNiwgMzQsIDYyLCA5MF0sXG4gICAgICAgWzYsIDI4LCA1MCwgNzIsIDk0XSxcbiAgICAgICBbNiwgMjYsIDUwLCA3NCwgOThdLFxuICAgICAgIFs2LCAzMCwgNTQsIDc4LCAxMDJdLFxuICAgICAgIFs2LCAyOCwgNTQsIDgwLCAxMDZdLFxuICAgICAgIFs2LCAzMiwgNTgsIDg0LCAxMTBdLFxuICAgICAgIFs2LCAzMCwgNTgsIDg2LCAxMTRdLFxuICAgICAgIFs2LCAzNCwgNjIsIDkwLCAxMThdLFxuICAgICAgIFs2LCAyNiwgNTAsIDc0LCA5OCwgMTIyXSxcbiAgICAgICBbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjZdLFxuICAgICAgIFs2LCAyNiwgNTIsIDc4LCAxMDQsIDEzMF0sXG4gICAgICAgWzYsIDMwLCA1NiwgODIsIDEwOCwgMTM0XSxcbiAgICAgICBbNiwgMzQsIDYwLCA4NiwgMTEyLCAxMzhdLFxuICAgICAgIFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0Ml0sXG4gICAgICAgWzYsIDM0LCA2MiwgOTAsIDExOCwgMTQ2XSxcbiAgICAgICBbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjYsIDE1MF0sXG4gICAgICAgWzYsIDI0LCA1MCwgNzYsIDEwMiwgMTI4LCAxNTRdLFxuICAgICAgIFs2LCAyOCwgNTQsIDgwLCAxMDYsIDEzMiwgMTU4XSxcbiAgICAgICBbNiwgMzIsIDU4LCA4NCwgMTEwLCAxMzYsIDE2Ml0sXG4gICAgICAgWzYsIDI2LCA1NCwgODIsIDExMCwgMTM4LCAxNjZdLFxuICAgICAgIFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0MiwgMTcwXVxuICAgICBdO1xuICAgICB2YXIgRzE1ID0gKDEgPDwgMTApIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDQpIHwgKDEgPDwgMikgfCAoMSA8PCAxKSB8ICgxIDw8IDApO1xuICAgICB2YXIgRzE4ID0gKDEgPDwgMTIpIHwgKDEgPDwgMTEpIHwgKDEgPDwgMTApIHwgKDEgPDwgOSkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgMikgfCAoMSA8PCAwKTtcbiAgICAgdmFyIEcxNV9NQVNLID0gKDEgPDwgMTQpIHwgKDEgPDwgMTIpIHwgKDEgPDwgMTApIHwgKDEgPDwgNCkgfCAoMSA8PCAxKTtcblxuICAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgICB2YXIgZ2V0QkNIRGlnaXQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgdmFyIGRpZ2l0ID0gMDtcbiAgICAgICB3aGlsZSAoZGF0YSAhPSAwKSB7XG4gICAgICAgICBkaWdpdCArPSAxO1xuICAgICAgICAgZGF0YSA+Pj49IDE7XG4gICAgICAgfVxuICAgICAgIHJldHVybiBkaWdpdDtcbiAgICAgfTtcblxuICAgICBfdGhpcy5nZXRCQ0hUeXBlSW5mbyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICB2YXIgZCA9IGRhdGEgPDwgMTA7XG4gICAgICAgd2hpbGUgKGdldEJDSERpZ2l0KGQpIC0gZ2V0QkNIRGlnaXQoRzE1KSA+PSAwKSB7XG4gICAgICAgICBkIF49IChHMTUgPDwgKGdldEJDSERpZ2l0KGQpIC0gZ2V0QkNIRGlnaXQoRzE1KSApICk7XG4gICAgICAgfVxuICAgICAgIHJldHVybiAoIChkYXRhIDw8IDEwKSB8IGQpIF4gRzE1X01BU0s7XG4gICAgIH07XG5cbiAgICAgX3RoaXMuZ2V0QkNIVHlwZU51bWJlciA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICB2YXIgZCA9IGRhdGEgPDwgMTI7XG4gICAgICAgd2hpbGUgKGdldEJDSERpZ2l0KGQpIC0gZ2V0QkNIRGlnaXQoRzE4KSA+PSAwKSB7XG4gICAgICAgICBkIF49IChHMTggPDwgKGdldEJDSERpZ2l0KGQpIC0gZ2V0QkNIRGlnaXQoRzE4KSApICk7XG4gICAgICAgfVxuICAgICAgIHJldHVybiAoZGF0YSA8PCAxMikgfCBkO1xuICAgICB9O1xuXG4gICAgIF90aGlzLmdldFBhdHRlcm5Qb3NpdGlvbiA9IGZ1bmN0aW9uKHR5cGVOdW1iZXIpIHtcbiAgICAgICByZXR1cm4gUEFUVEVSTl9QT1NJVElPTl9UQUJMRVt0eXBlTnVtYmVyIC0gMV07XG4gICAgIH07XG5cbiAgICAgX3RoaXMuZ2V0TWFza0Z1bmN0aW9uID0gZnVuY3Rpb24obWFza1BhdHRlcm4pIHtcblxuICAgICAgIHN3aXRjaCAobWFza1BhdHRlcm4pIHtcblxuICAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDAwIDpcbiAgICAgICAgIHJldHVybiBmdW5jdGlvbihpLCBqKSB7IHJldHVybiAoaSArIGopICUgMiA9PSAwOyB9O1xuICAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDAxIDpcbiAgICAgICAgIHJldHVybiBmdW5jdGlvbihpLCBqKSB7IHJldHVybiBpICUgMiA9PSAwOyB9O1xuICAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDEwIDpcbiAgICAgICAgIHJldHVybiBmdW5jdGlvbihpLCBqKSB7IHJldHVybiBqICUgMyA9PSAwOyB9O1xuICAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDExIDpcbiAgICAgICAgIHJldHVybiBmdW5jdGlvbihpLCBqKSB7IHJldHVybiAoaSArIGopICUgMyA9PSAwOyB9O1xuICAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTAwIDpcbiAgICAgICAgIHJldHVybiBmdW5jdGlvbihpLCBqKSB7IHJldHVybiAoTWF0aC5mbG9vcihpIC8gMikgKyBNYXRoLmZsb29yKGogLyAzKSApICUgMiA9PSAwOyB9O1xuICAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTAxIDpcbiAgICAgICAgIHJldHVybiBmdW5jdGlvbihpLCBqKSB7IHJldHVybiAoaSAqIGopICUgMiArIChpICogaikgJSAzID09IDA7IH07XG4gICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTAgOlxuICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGksIGopIHsgcmV0dXJuICggKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMykgJSAyID09IDA7IH07XG4gICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTEgOlxuICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGksIGopIHsgcmV0dXJuICggKGkgKiBqKSAlIDMgKyAoaSArIGopICUgMikgJSAyID09IDA7IH07XG5cbiAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgIHRocm93ICdiYWQgbWFza1BhdHRlcm46JyArIG1hc2tQYXR0ZXJuO1xuICAgICAgIH1cbiAgICAgfTtcblxuICAgICBfdGhpcy5nZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsID0gZnVuY3Rpb24oZXJyb3JDb3JyZWN0TGVuZ3RoKSB7XG4gICAgICAgdmFyIGEgPSBxclBvbHlub21pYWwoWzFdLCAwKTtcbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVycm9yQ29ycmVjdExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICBhID0gYS5tdWx0aXBseShxclBvbHlub21pYWwoWzEsIFFSTWF0aC5nZXhwKGkpXSwgMCkgKTtcbiAgICAgICB9XG4gICAgICAgcmV0dXJuIGE7XG4gICAgIH07XG5cbiAgICAgX3RoaXMuZ2V0TGVuZ3RoSW5CaXRzID0gZnVuY3Rpb24obW9kZSwgdHlwZSkge1xuXG4gICAgICAgaWYgKDEgPD0gdHlwZSAmJiB0eXBlIDwgMTApIHtcblxuICAgICAgICAgLy8gMSAtIDlcblxuICAgICAgICAgc3dpdGNoKG1vZGUpIHtcbiAgICAgICAgIGNhc2UgUVJNb2RlLk1PREVfTlVNQkVSICAgIDogcmV0dXJuIDEwO1xuICAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV9BTFBIQV9OVU0gOiByZXR1cm4gOTtcbiAgICAgICAgIGNhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFIDogcmV0dXJuIDg7XG4gICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX0tBTkpJICAgICA6IHJldHVybiA4O1xuICAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgIHRocm93ICdtb2RlOicgKyBtb2RlO1xuICAgICAgICAgfVxuXG4gICAgICAgfSBlbHNlIGlmICh0eXBlIDwgMjcpIHtcblxuICAgICAgICAgLy8gMTAgLSAyNlxuXG4gICAgICAgICBzd2l0Y2gobW9kZSkge1xuICAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV9OVU1CRVIgICAgOiByZXR1cm4gMTI7XG4gICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX0FMUEhBX05VTSA6IHJldHVybiAxMTtcbiAgICAgICAgIGNhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFIDogcmV0dXJuIDE2O1xuICAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV9LQU5KSSAgICAgOiByZXR1cm4gMTA7XG4gICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICAgdGhyb3cgJ21vZGU6JyArIG1vZGU7XG4gICAgICAgICB9XG5cbiAgICAgICB9IGVsc2UgaWYgKHR5cGUgPCA0MSkge1xuXG4gICAgICAgICAvLyAyNyAtIDQwXG5cbiAgICAgICAgIHN3aXRjaChtb2RlKSB7XG4gICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX05VTUJFUiAgICA6IHJldHVybiAxNDtcbiAgICAgICAgIGNhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNIDogcmV0dXJuIDEzO1xuICAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV84QklUX0JZVEUgOiByZXR1cm4gMTY7XG4gICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX0tBTkpJICAgICA6IHJldHVybiAxMjtcbiAgICAgICAgIGRlZmF1bHQgOlxuICAgICAgICAgICB0aHJvdyAnbW9kZTonICsgbW9kZTtcbiAgICAgICAgIH1cblxuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aHJvdyAndHlwZTonICsgdHlwZTtcbiAgICAgICB9XG4gICAgIH07XG5cbiAgICAgX3RoaXMuZ2V0TG9zdFBvaW50ID0gZnVuY3Rpb24ocXJjb2RlKSB7XG5cbiAgICAgICB2YXIgbW9kdWxlQ291bnQgPSBxcmNvZGUuZ2V0TW9kdWxlQ291bnQoKTtcblxuICAgICAgIHZhciBsb3N0UG9pbnQgPSAwO1xuXG4gICAgICAgLy8gTEVWRUwxXG5cbiAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93ICs9IDEpIHtcbiAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wgKz0gMSkge1xuXG4gICAgICAgICAgIHZhciBzYW1lQ291bnQgPSAwO1xuICAgICAgICAgICB2YXIgZGFyayA9IHFyY29kZS5pc0Rhcmsocm93LCBjb2wpO1xuXG4gICAgICAgICAgIGZvciAodmFyIHIgPSAtMTsgciA8PSAxOyByICs9IDEpIHtcblxuICAgICAgICAgICAgIGlmIChyb3cgKyByIDwgMCB8fCBtb2R1bGVDb3VudCA8PSByb3cgKyByKSB7XG4gICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICBmb3IgKHZhciBjID0gLTE7IGMgPD0gMTsgYyArPSAxKSB7XG5cbiAgICAgICAgICAgICAgIGlmIChjb2wgKyBjIDwgMCB8fCBtb2R1bGVDb3VudCA8PSBjb2wgKyBjKSB7XG4gICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAociA9PSAwICYmIGMgPT0gMCkge1xuICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKGRhcmsgPT0gcXJjb2RlLmlzRGFyayhyb3cgKyByLCBjb2wgKyBjKSApIHtcbiAgICAgICAgICAgICAgICAgc2FtZUNvdW50ICs9IDE7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG5cbiAgICAgICAgICAgaWYgKHNhbWVDb3VudCA+IDUpIHtcbiAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gKDMgKyBzYW1lQ291bnQgLSA1KTtcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgIH07XG5cbiAgICAgICAvLyBMRVZFTDJcblxuICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50IC0gMTsgcm93ICs9IDEpIHtcbiAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50IC0gMTsgY29sICs9IDEpIHtcbiAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgICAgaWYgKHFyY29kZS5pc0Rhcmsocm93LCBjb2wpICkgY291bnQgKz0gMTtcbiAgICAgICAgICAgaWYgKHFyY29kZS5pc0Rhcmsocm93ICsgMSwgY29sKSApIGNvdW50ICs9IDE7XG4gICAgICAgICAgIGlmIChxcmNvZGUuaXNEYXJrKHJvdywgY29sICsgMSkgKSBjb3VudCArPSAxO1xuICAgICAgICAgICBpZiAocXJjb2RlLmlzRGFyayhyb3cgKyAxLCBjb2wgKyAxKSApIGNvdW50ICs9IDE7XG4gICAgICAgICAgIGlmIChjb3VudCA9PSAwIHx8IGNvdW50ID09IDQpIHtcbiAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gMztcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgIH1cblxuICAgICAgIC8vIExFVkVMM1xuXG4gICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdyArPSAxKSB7XG4gICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudCAtIDY7IGNvbCArPSAxKSB7XG4gICAgICAgICAgIGlmIChxcmNvZGUuaXNEYXJrKHJvdywgY29sKVxuICAgICAgICAgICAgICAgJiYgIXFyY29kZS5pc0Rhcmsocm93LCBjb2wgKyAxKVxuICAgICAgICAgICAgICAgJiYgIHFyY29kZS5pc0Rhcmsocm93LCBjb2wgKyAyKVxuICAgICAgICAgICAgICAgJiYgIHFyY29kZS5pc0Rhcmsocm93LCBjb2wgKyAzKVxuICAgICAgICAgICAgICAgJiYgIHFyY29kZS5pc0Rhcmsocm93LCBjb2wgKyA0KVxuICAgICAgICAgICAgICAgJiYgIXFyY29kZS5pc0Rhcmsocm93LCBjb2wgKyA1KVxuICAgICAgICAgICAgICAgJiYgIHFyY29kZS5pc0Rhcmsocm93LCBjb2wgKyA2KSApIHtcbiAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gNDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sICs9IDEpIHtcbiAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50IC0gNjsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgaWYgKHFyY29kZS5pc0Rhcmsocm93LCBjb2wpXG4gICAgICAgICAgICAgICAmJiAhcXJjb2RlLmlzRGFyayhyb3cgKyAxLCBjb2wpXG4gICAgICAgICAgICAgICAmJiAgcXJjb2RlLmlzRGFyayhyb3cgKyAyLCBjb2wpXG4gICAgICAgICAgICAgICAmJiAgcXJjb2RlLmlzRGFyayhyb3cgKyAzLCBjb2wpXG4gICAgICAgICAgICAgICAmJiAgcXJjb2RlLmlzRGFyayhyb3cgKyA0LCBjb2wpXG4gICAgICAgICAgICAgICAmJiAhcXJjb2RlLmlzRGFyayhyb3cgKyA1LCBjb2wpXG4gICAgICAgICAgICAgICAmJiAgcXJjb2RlLmlzRGFyayhyb3cgKyA2LCBjb2wpICkge1xuICAgICAgICAgICAgIGxvc3RQb2ludCArPSA0MDtcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgIH1cblxuICAgICAgIC8vIExFVkVMNFxuXG4gICAgICAgdmFyIGRhcmtDb3VudCA9IDA7XG5cbiAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sICs9IDEpIHtcbiAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3cgKz0gMSkge1xuICAgICAgICAgICBpZiAocXJjb2RlLmlzRGFyayhyb3csIGNvbCkgKSB7XG4gICAgICAgICAgICAgZGFya0NvdW50ICs9IDE7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICB2YXIgcmF0aW8gPSBNYXRoLmFicygxMDAgKiBkYXJrQ291bnQgLyBtb2R1bGVDb3VudCAvIG1vZHVsZUNvdW50IC0gNTApIC8gNTtcbiAgICAgICBsb3N0UG9pbnQgKz0gcmF0aW8gKiAxMDtcblxuICAgICAgIHJldHVybiBsb3N0UG9pbnQ7XG4gICAgIH07XG5cbiAgICAgcmV0dXJuIF90aGlzO1xuICAgfSgpO1xuXG4gICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgLy8gUVJNYXRoXG4gICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICB2YXIgUVJNYXRoID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgdmFyIEVYUF9UQUJMRSA9IG5ldyBBcnJheSgyNTYpO1xuICAgICB2YXIgTE9HX1RBQkxFID0gbmV3IEFycmF5KDI1Nik7XG5cbiAgICAgLy8gaW5pdGlhbGl6ZSB0YWJsZXNcbiAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpICs9IDEpIHtcbiAgICAgICBFWFBfVEFCTEVbaV0gPSAxIDw8IGk7XG4gICAgIH1cbiAgICAgZm9yICh2YXIgaSA9IDg7IGkgPCAyNTY7IGkgKz0gMSkge1xuICAgICAgIEVYUF9UQUJMRVtpXSA9IEVYUF9UQUJMRVtpIC0gNF1cbiAgICAgICAgIF4gRVhQX1RBQkxFW2kgLSA1XVxuICAgICAgICAgXiBFWFBfVEFCTEVbaSAtIDZdXG4gICAgICAgICBeIEVYUF9UQUJMRVtpIC0gOF07XG4gICAgIH1cbiAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTU7IGkgKz0gMSkge1xuICAgICAgIExPR19UQUJMRVtFWFBfVEFCTEVbaV0gXSA9IGk7XG4gICAgIH1cblxuICAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgICBfdGhpcy5nbG9nID0gZnVuY3Rpb24obikge1xuXG4gICAgICAgaWYgKG4gPCAxKSB7XG4gICAgICAgICB0aHJvdyAnZ2xvZygnICsgbiArICcpJztcbiAgICAgICB9XG5cbiAgICAgICByZXR1cm4gTE9HX1RBQkxFW25dO1xuICAgICB9O1xuXG4gICAgIF90aGlzLmdleHAgPSBmdW5jdGlvbihuKSB7XG5cbiAgICAgICB3aGlsZSAobiA8IDApIHtcbiAgICAgICAgIG4gKz0gMjU1O1xuICAgICAgIH1cblxuICAgICAgIHdoaWxlIChuID49IDI1Nikge1xuICAgICAgICAgbiAtPSAyNTU7XG4gICAgICAgfVxuXG4gICAgICAgcmV0dXJuIEVYUF9UQUJMRVtuXTtcbiAgICAgfTtcblxuICAgICByZXR1cm4gX3RoaXM7XG4gICB9KCk7XG5cbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAvLyBxclBvbHlub21pYWxcbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgIGZ1bmN0aW9uIHFyUG9seW5vbWlhbChudW0sIHNoaWZ0KSB7XG5cbiAgICAgaWYgKHR5cGVvZiBudW0ubGVuZ3RoID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgdGhyb3cgbnVtLmxlbmd0aCArICcvJyArIHNoaWZ0O1xuICAgICB9XG5cbiAgICAgdmFyIF9udW0gPSBmdW5jdGlvbigpIHtcbiAgICAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICAgICB3aGlsZSAob2Zmc2V0IDwgbnVtLmxlbmd0aCAmJiBudW1bb2Zmc2V0XSA9PSAwKSB7XG4gICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICB9XG4gICAgICAgdmFyIF9udW0gPSBuZXcgQXJyYXkobnVtLmxlbmd0aCAtIG9mZnNldCArIHNoaWZ0KTtcbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bS5sZW5ndGggLSBvZmZzZXQ7IGkgKz0gMSkge1xuICAgICAgICAgX251bVtpXSA9IG51bVtpICsgb2Zmc2V0XTtcbiAgICAgICB9XG4gICAgICAgcmV0dXJuIF9udW07XG4gICAgIH0oKTtcblxuICAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgICBfdGhpcy5nZXRBdCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgcmV0dXJuIF9udW1baW5kZXhdO1xuICAgICB9O1xuXG4gICAgIF90aGlzLmdldExlbmd0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgIHJldHVybiBfbnVtLmxlbmd0aDtcbiAgICAgfTtcblxuICAgICBfdGhpcy5tdWx0aXBseSA9IGZ1bmN0aW9uKGUpIHtcblxuICAgICAgIHZhciBudW0gPSBuZXcgQXJyYXkoX3RoaXMuZ2V0TGVuZ3RoKCkgKyBlLmdldExlbmd0aCgpIC0gMSk7XG5cbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90aGlzLmdldExlbmd0aCgpOyBpICs9IDEpIHtcbiAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZS5nZXRMZW5ndGgoKTsgaiArPSAxKSB7XG4gICAgICAgICAgIG51bVtpICsgal0gXj0gUVJNYXRoLmdleHAoUVJNYXRoLmdsb2coX3RoaXMuZ2V0QXQoaSkgKSArIFFSTWF0aC5nbG9nKGUuZ2V0QXQoaikgKSApO1xuICAgICAgICAgfVxuICAgICAgIH1cblxuICAgICAgIHJldHVybiBxclBvbHlub21pYWwobnVtLCAwKTtcbiAgICAgfTtcblxuICAgICBfdGhpcy5tb2QgPSBmdW5jdGlvbihlKSB7XG5cbiAgICAgICBpZiAoX3RoaXMuZ2V0TGVuZ3RoKCkgLSBlLmdldExlbmd0aCgpIDwgMCkge1xuICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgIH1cblxuICAgICAgIHZhciByYXRpbyA9IFFSTWF0aC5nbG9nKF90aGlzLmdldEF0KDApICkgLSBRUk1hdGguZ2xvZyhlLmdldEF0KDApICk7XG5cbiAgICAgICB2YXIgbnVtID0gbmV3IEFycmF5KF90aGlzLmdldExlbmd0aCgpICk7XG4gICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGhpcy5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XG4gICAgICAgICBudW1baV0gPSBfdGhpcy5nZXRBdChpKTtcbiAgICAgICB9XG5cbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xuICAgICAgICAgbnVtW2ldIF49IFFSTWF0aC5nZXhwKFFSTWF0aC5nbG9nKGUuZ2V0QXQoaSkgKSArIHJhdGlvKTtcbiAgICAgICB9XG5cbiAgICAgICAvLyByZWN1cnNpdmUgY2FsbFxuICAgICAgIHJldHVybiBxclBvbHlub21pYWwobnVtLCAwKS5tb2QoZSk7XG4gICAgIH07XG5cbiAgICAgcmV0dXJuIF90aGlzO1xuICAgfTtcblxuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIC8vIFFSUlNCbG9ja1xuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgdmFyIFFSUlNCbG9jayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgIHZhciBSU19CTE9DS19UQUJMRSA9IFtcblxuICAgICAgIC8vIExcbiAgICAgICAvLyBNXG4gICAgICAgLy8gUVxuICAgICAgIC8vIEhcblxuICAgICAgIC8vIDFcbiAgICAgICBbMSwgMjYsIDE5XSxcbiAgICAgICBbMSwgMjYsIDE2XSxcbiAgICAgICBbMSwgMjYsIDEzXSxcbiAgICAgICBbMSwgMjYsIDldLFxuXG4gICAgICAgLy8gMlxuICAgICAgIFsxLCA0NCwgMzRdLFxuICAgICAgIFsxLCA0NCwgMjhdLFxuICAgICAgIFsxLCA0NCwgMjJdLFxuICAgICAgIFsxLCA0NCwgMTZdLFxuXG4gICAgICAgLy8gM1xuICAgICAgIFsxLCA3MCwgNTVdLFxuICAgICAgIFsxLCA3MCwgNDRdLFxuICAgICAgIFsyLCAzNSwgMTddLFxuICAgICAgIFsyLCAzNSwgMTNdLFxuXG4gICAgICAgLy8gNFxuICAgICAgIFsxLCAxMDAsIDgwXSxcbiAgICAgICBbMiwgNTAsIDMyXSxcbiAgICAgICBbMiwgNTAsIDI0XSxcbiAgICAgICBbNCwgMjUsIDldLFxuXG4gICAgICAgLy8gNVxuICAgICAgIFsxLCAxMzQsIDEwOF0sXG4gICAgICAgWzIsIDY3LCA0M10sXG4gICAgICAgWzIsIDMzLCAxNSwgMiwgMzQsIDE2XSxcbiAgICAgICBbMiwgMzMsIDExLCAyLCAzNCwgMTJdLFxuXG4gICAgICAgLy8gNlxuICAgICAgIFsyLCA4NiwgNjhdLFxuICAgICAgIFs0LCA0MywgMjddLFxuICAgICAgIFs0LCA0MywgMTldLFxuICAgICAgIFs0LCA0MywgMTVdLFxuXG4gICAgICAgLy8gN1xuICAgICAgIFsyLCA5OCwgNzhdLFxuICAgICAgIFs0LCA0OSwgMzFdLFxuICAgICAgIFsyLCAzMiwgMTQsIDQsIDMzLCAxNV0sXG4gICAgICAgWzQsIDM5LCAxMywgMSwgNDAsIDE0XSxcblxuICAgICAgIC8vIDhcbiAgICAgICBbMiwgMTIxLCA5N10sXG4gICAgICAgWzIsIDYwLCAzOCwgMiwgNjEsIDM5XSxcbiAgICAgICBbNCwgNDAsIDE4LCAyLCA0MSwgMTldLFxuICAgICAgIFs0LCA0MCwgMTQsIDIsIDQxLCAxNV0sXG5cbiAgICAgICAvLyA5XG4gICAgICAgWzIsIDE0NiwgMTE2XSxcbiAgICAgICBbMywgNTgsIDM2LCAyLCA1OSwgMzddLFxuICAgICAgIFs0LCAzNiwgMTYsIDQsIDM3LCAxN10sXG4gICAgICAgWzQsIDM2LCAxMiwgNCwgMzcsIDEzXSxcblxuICAgICAgIC8vIDEwXG4gICAgICAgWzIsIDg2LCA2OCwgMiwgODcsIDY5XSxcbiAgICAgICBbNCwgNjksIDQzLCAxLCA3MCwgNDRdLFxuICAgICAgIFs2LCA0MywgMTksIDIsIDQ0LCAyMF0sXG4gICAgICAgWzYsIDQzLCAxNSwgMiwgNDQsIDE2XSxcblxuICAgICAgIC8vIDExXG4gICAgICAgWzQsIDEwMSwgODFdLFxuICAgICAgIFsxLCA4MCwgNTAsIDQsIDgxLCA1MV0sXG4gICAgICAgWzQsIDUwLCAyMiwgNCwgNTEsIDIzXSxcbiAgICAgICBbMywgMzYsIDEyLCA4LCAzNywgMTNdLFxuXG4gICAgICAgLy8gMTJcbiAgICAgICBbMiwgMTE2LCA5MiwgMiwgMTE3LCA5M10sXG4gICAgICAgWzYsIDU4LCAzNiwgMiwgNTksIDM3XSxcbiAgICAgICBbNCwgNDYsIDIwLCA2LCA0NywgMjFdLFxuICAgICAgIFs3LCA0MiwgMTQsIDQsIDQzLCAxNV0sXG5cbiAgICAgICAvLyAxM1xuICAgICAgIFs0LCAxMzMsIDEwN10sXG4gICAgICAgWzgsIDU5LCAzNywgMSwgNjAsIDM4XSxcbiAgICAgICBbOCwgNDQsIDIwLCA0LCA0NSwgMjFdLFxuICAgICAgIFsxMiwgMzMsIDExLCA0LCAzNCwgMTJdLFxuXG4gICAgICAgLy8gMTRcbiAgICAgICBbMywgMTQ1LCAxMTUsIDEsIDE0NiwgMTE2XSxcbiAgICAgICBbNCwgNjQsIDQwLCA1LCA2NSwgNDFdLFxuICAgICAgIFsxMSwgMzYsIDE2LCA1LCAzNywgMTddLFxuICAgICAgIFsxMSwgMzYsIDEyLCA1LCAzNywgMTNdLFxuXG4gICAgICAgLy8gMTVcbiAgICAgICBbNSwgMTA5LCA4NywgMSwgMTEwLCA4OF0sXG4gICAgICAgWzUsIDY1LCA0MSwgNSwgNjYsIDQyXSxcbiAgICAgICBbNSwgNTQsIDI0LCA3LCA1NSwgMjVdLFxuICAgICAgIFsxMSwgMzYsIDEyLCA3LCAzNywgMTNdLFxuXG4gICAgICAgLy8gMTZcbiAgICAgICBbNSwgMTIyLCA5OCwgMSwgMTIzLCA5OV0sXG4gICAgICAgWzcsIDczLCA0NSwgMywgNzQsIDQ2XSxcbiAgICAgICBbMTUsIDQzLCAxOSwgMiwgNDQsIDIwXSxcbiAgICAgICBbMywgNDUsIDE1LCAxMywgNDYsIDE2XSxcblxuICAgICAgIC8vIDE3XG4gICAgICAgWzEsIDEzNSwgMTA3LCA1LCAxMzYsIDEwOF0sXG4gICAgICAgWzEwLCA3NCwgNDYsIDEsIDc1LCA0N10sXG4gICAgICAgWzEsIDUwLCAyMiwgMTUsIDUxLCAyM10sXG4gICAgICAgWzIsIDQyLCAxNCwgMTcsIDQzLCAxNV0sXG5cbiAgICAgICAvLyAxOFxuICAgICAgIFs1LCAxNTAsIDEyMCwgMSwgMTUxLCAxMjFdLFxuICAgICAgIFs5LCA2OSwgNDMsIDQsIDcwLCA0NF0sXG4gICAgICAgWzE3LCA1MCwgMjIsIDEsIDUxLCAyM10sXG4gICAgICAgWzIsIDQyLCAxNCwgMTksIDQzLCAxNV0sXG5cbiAgICAgICAvLyAxOVxuICAgICAgIFszLCAxNDEsIDExMywgNCwgMTQyLCAxMTRdLFxuICAgICAgIFszLCA3MCwgNDQsIDExLCA3MSwgNDVdLFxuICAgICAgIFsxNywgNDcsIDIxLCA0LCA0OCwgMjJdLFxuICAgICAgIFs5LCAzOSwgMTMsIDE2LCA0MCwgMTRdLFxuXG4gICAgICAgLy8gMjBcbiAgICAgICBbMywgMTM1LCAxMDcsIDUsIDEzNiwgMTA4XSxcbiAgICAgICBbMywgNjcsIDQxLCAxMywgNjgsIDQyXSxcbiAgICAgICBbMTUsIDU0LCAyNCwgNSwgNTUsIDI1XSxcbiAgICAgICBbMTUsIDQzLCAxNSwgMTAsIDQ0LCAxNl0sXG5cbiAgICAgICAvLyAyMVxuICAgICAgIFs0LCAxNDQsIDExNiwgNCwgMTQ1LCAxMTddLFxuICAgICAgIFsxNywgNjgsIDQyXSxcbiAgICAgICBbMTcsIDUwLCAyMiwgNiwgNTEsIDIzXSxcbiAgICAgICBbMTksIDQ2LCAxNiwgNiwgNDcsIDE3XSxcblxuICAgICAgIC8vIDIyXG4gICAgICAgWzIsIDEzOSwgMTExLCA3LCAxNDAsIDExMl0sXG4gICAgICAgWzE3LCA3NCwgNDZdLFxuICAgICAgIFs3LCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxuICAgICAgIFszNCwgMzcsIDEzXSxcblxuICAgICAgIC8vIDIzXG4gICAgICAgWzQsIDE1MSwgMTIxLCA1LCAxNTIsIDEyMl0sXG4gICAgICAgWzQsIDc1LCA0NywgMTQsIDc2LCA0OF0sXG4gICAgICAgWzExLCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxuICAgICAgIFsxNiwgNDUsIDE1LCAxNCwgNDYsIDE2XSxcblxuICAgICAgIC8vIDI0XG4gICAgICAgWzYsIDE0NywgMTE3LCA0LCAxNDgsIDExOF0sXG4gICAgICAgWzYsIDczLCA0NSwgMTQsIDc0LCA0Nl0sXG4gICAgICAgWzExLCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxuICAgICAgIFszMCwgNDYsIDE2LCAyLCA0NywgMTddLFxuXG4gICAgICAgLy8gMjVcbiAgICAgICBbOCwgMTMyLCAxMDYsIDQsIDEzMywgMTA3XSxcbiAgICAgICBbOCwgNzUsIDQ3LCAxMywgNzYsIDQ4XSxcbiAgICAgICBbNywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcbiAgICAgICBbMjIsIDQ1LCAxNSwgMTMsIDQ2LCAxNl0sXG5cbiAgICAgICAvLyAyNlxuICAgICAgIFsxMCwgMTQyLCAxMTQsIDIsIDE0MywgMTE1XSxcbiAgICAgICBbMTksIDc0LCA0NiwgNCwgNzUsIDQ3XSxcbiAgICAgICBbMjgsIDUwLCAyMiwgNiwgNTEsIDIzXSxcbiAgICAgICBbMzMsIDQ2LCAxNiwgNCwgNDcsIDE3XSxcblxuICAgICAgIC8vIDI3XG4gICAgICAgWzgsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXG4gICAgICAgWzIyLCA3MywgNDUsIDMsIDc0LCA0Nl0sXG4gICAgICAgWzgsIDUzLCAyMywgMjYsIDU0LCAyNF0sXG4gICAgICAgWzEyLCA0NSwgMTUsIDI4LCA0NiwgMTZdLFxuXG4gICAgICAgLy8gMjhcbiAgICAgICBbMywgMTQ3LCAxMTcsIDEwLCAxNDgsIDExOF0sXG4gICAgICAgWzMsIDczLCA0NSwgMjMsIDc0LCA0Nl0sXG4gICAgICAgWzQsIDU0LCAyNCwgMzEsIDU1LCAyNV0sXG4gICAgICAgWzExLCA0NSwgMTUsIDMxLCA0NiwgMTZdLFxuXG4gICAgICAgLy8gMjlcbiAgICAgICBbNywgMTQ2LCAxMTYsIDcsIDE0NywgMTE3XSxcbiAgICAgICBbMjEsIDczLCA0NSwgNywgNzQsIDQ2XSxcbiAgICAgICBbMSwgNTMsIDIzLCAzNywgNTQsIDI0XSxcbiAgICAgICBbMTksIDQ1LCAxNSwgMjYsIDQ2LCAxNl0sXG5cbiAgICAgICAvLyAzMFxuICAgICAgIFs1LCAxNDUsIDExNSwgMTAsIDE0NiwgMTE2XSxcbiAgICAgICBbMTksIDc1LCA0NywgMTAsIDc2LCA0OF0sXG4gICAgICAgWzE1LCA1NCwgMjQsIDI1LCA1NSwgMjVdLFxuICAgICAgIFsyMywgNDUsIDE1LCAyNSwgNDYsIDE2XSxcblxuICAgICAgIC8vIDMxXG4gICAgICAgWzEzLCAxNDUsIDExNSwgMywgMTQ2LCAxMTZdLFxuICAgICAgIFsyLCA3NCwgNDYsIDI5LCA3NSwgNDddLFxuICAgICAgIFs0MiwgNTQsIDI0LCAxLCA1NSwgMjVdLFxuICAgICAgIFsyMywgNDUsIDE1LCAyOCwgNDYsIDE2XSxcblxuICAgICAgIC8vIDMyXG4gICAgICAgWzE3LCAxNDUsIDExNV0sXG4gICAgICAgWzEwLCA3NCwgNDYsIDIzLCA3NSwgNDddLFxuICAgICAgIFsxMCwgNTQsIDI0LCAzNSwgNTUsIDI1XSxcbiAgICAgICBbMTksIDQ1LCAxNSwgMzUsIDQ2LCAxNl0sXG5cbiAgICAgICAvLyAzM1xuICAgICAgIFsxNywgMTQ1LCAxMTUsIDEsIDE0NiwgMTE2XSxcbiAgICAgICBbMTQsIDc0LCA0NiwgMjEsIDc1LCA0N10sXG4gICAgICAgWzI5LCA1NCwgMjQsIDE5LCA1NSwgMjVdLFxuICAgICAgIFsxMSwgNDUsIDE1LCA0NiwgNDYsIDE2XSxcblxuICAgICAgIC8vIDM0XG4gICAgICAgWzEzLCAxNDUsIDExNSwgNiwgMTQ2LCAxMTZdLFxuICAgICAgIFsxNCwgNzQsIDQ2LCAyMywgNzUsIDQ3XSxcbiAgICAgICBbNDQsIDU0LCAyNCwgNywgNTUsIDI1XSxcbiAgICAgICBbNTksIDQ2LCAxNiwgMSwgNDcsIDE3XSxcblxuICAgICAgIC8vIDM1XG4gICAgICAgWzEyLCAxNTEsIDEyMSwgNywgMTUyLCAxMjJdLFxuICAgICAgIFsxMiwgNzUsIDQ3LCAyNiwgNzYsIDQ4XSxcbiAgICAgICBbMzksIDU0LCAyNCwgMTQsIDU1LCAyNV0sXG4gICAgICAgWzIyLCA0NSwgMTUsIDQxLCA0NiwgMTZdLFxuXG4gICAgICAgLy8gMzZcbiAgICAgICBbNiwgMTUxLCAxMjEsIDE0LCAxNTIsIDEyMl0sXG4gICAgICAgWzYsIDc1LCA0NywgMzQsIDc2LCA0OF0sXG4gICAgICAgWzQ2LCA1NCwgMjQsIDEwLCA1NSwgMjVdLFxuICAgICAgIFsyLCA0NSwgMTUsIDY0LCA0NiwgMTZdLFxuXG4gICAgICAgLy8gMzdcbiAgICAgICBbMTcsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXG4gICAgICAgWzI5LCA3NCwgNDYsIDE0LCA3NSwgNDddLFxuICAgICAgIFs0OSwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcbiAgICAgICBbMjQsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXG5cbiAgICAgICAvLyAzOFxuICAgICAgIFs0LCAxNTIsIDEyMiwgMTgsIDE1MywgMTIzXSxcbiAgICAgICBbMTMsIDc0LCA0NiwgMzIsIDc1LCA0N10sXG4gICAgICAgWzQ4LCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxuICAgICAgIFs0MiwgNDUsIDE1LCAzMiwgNDYsIDE2XSxcblxuICAgICAgIC8vIDM5XG4gICAgICAgWzIwLCAxNDcsIDExNywgNCwgMTQ4LCAxMThdLFxuICAgICAgIFs0MCwgNzUsIDQ3LCA3LCA3NiwgNDhdLFxuICAgICAgIFs0MywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcbiAgICAgICBbMTAsIDQ1LCAxNSwgNjcsIDQ2LCAxNl0sXG5cbiAgICAgICAvLyA0MFxuICAgICAgIFsxOSwgMTQ4LCAxMTgsIDYsIDE0OSwgMTE5XSxcbiAgICAgICBbMTgsIDc1LCA0NywgMzEsIDc2LCA0OF0sXG4gICAgICAgWzM0LCA1NCwgMjQsIDM0LCA1NSwgMjVdLFxuICAgICAgIFsyMCwgNDUsIDE1LCA2MSwgNDYsIDE2XVxuICAgICBdO1xuXG4gICAgIHZhciBxclJTQmxvY2sgPSBmdW5jdGlvbih0b3RhbENvdW50LCBkYXRhQ291bnQpIHtcbiAgICAgICB2YXIgX3RoaXMgPSB7fTtcbiAgICAgICBfdGhpcy50b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgICAgICBfdGhpcy5kYXRhQ291bnQgPSBkYXRhQ291bnQ7XG4gICAgICAgcmV0dXJuIF90aGlzO1xuICAgICB9O1xuXG4gICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgIHZhciBnZXRSc0Jsb2NrVGFibGUgPSBmdW5jdGlvbih0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuXG4gICAgICAgc3dpdGNoKGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XG4gICAgICAgY2FzZSBRUkVycm9yQ29ycmVjdGlvbkxldmVsLkwgOlxuICAgICAgICAgcmV0dXJuIFJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMF07XG4gICAgICAgY2FzZSBRUkVycm9yQ29ycmVjdGlvbkxldmVsLk0gOlxuICAgICAgICAgcmV0dXJuIFJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMV07XG4gICAgICAgY2FzZSBRUkVycm9yQ29ycmVjdGlvbkxldmVsLlEgOlxuICAgICAgICAgcmV0dXJuIFJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMl07XG4gICAgICAgY2FzZSBRUkVycm9yQ29ycmVjdGlvbkxldmVsLkggOlxuICAgICAgICAgcmV0dXJuIFJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgM107XG4gICAgICAgZGVmYXVsdCA6XG4gICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgIH1cbiAgICAgfTtcblxuICAgICBfdGhpcy5nZXRSU0Jsb2NrcyA9IGZ1bmN0aW9uKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XG5cbiAgICAgICB2YXIgcnNCbG9jayA9IGdldFJzQmxvY2tUYWJsZSh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3Rpb25MZXZlbCk7XG5cbiAgICAgICBpZiAodHlwZW9mIHJzQmxvY2sgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgIHRocm93ICdiYWQgcnMgYmxvY2sgQCB0eXBlTnVtYmVyOicgKyB0eXBlTnVtYmVyICtcbiAgICAgICAgICAgICAnL2Vycm9yQ29ycmVjdGlvbkxldmVsOicgKyBlcnJvckNvcnJlY3Rpb25MZXZlbDtcbiAgICAgICB9XG5cbiAgICAgICB2YXIgbGVuZ3RoID0gcnNCbG9jay5sZW5ndGggLyAzO1xuXG4gICAgICAgdmFyIGxpc3QgPSBbXTtcblxuICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcblxuICAgICAgICAgdmFyIGNvdW50ID0gcnNCbG9ja1tpICogMyArIDBdO1xuICAgICAgICAgdmFyIHRvdGFsQ291bnQgPSByc0Jsb2NrW2kgKiAzICsgMV07XG4gICAgICAgICB2YXIgZGF0YUNvdW50ID0gcnNCbG9ja1tpICogMyArIDJdO1xuXG4gICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvdW50OyBqICs9IDEpIHtcbiAgICAgICAgICAgbGlzdC5wdXNoKHFyUlNCbG9jayh0b3RhbENvdW50LCBkYXRhQ291bnQpICk7XG4gICAgICAgICB9XG4gICAgICAgfVxuXG4gICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgIH07XG5cbiAgICAgcmV0dXJuIF90aGlzO1xuICAgfSgpO1xuXG4gICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgLy8gcXJCaXRCdWZmZXJcbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgIHZhciBxckJpdEJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgIHZhciBfYnVmZmVyID0gW107XG4gICAgIHZhciBfbGVuZ3RoID0gMDtcblxuICAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgICBfdGhpcy5nZXRCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICByZXR1cm4gX2J1ZmZlcjtcbiAgICAgfTtcblxuICAgICBfdGhpcy5nZXRBdCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgdmFyIGJ1ZkluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIDgpO1xuICAgICAgIHJldHVybiAoIChfYnVmZmVyW2J1ZkluZGV4XSA+Pj4gKDcgLSBpbmRleCAlIDgpICkgJiAxKSA9PSAxO1xuICAgICB9O1xuXG4gICAgIF90aGlzLnB1dCA9IGZ1bmN0aW9uKG51bSwgbGVuZ3RoKSB7XG4gICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgX3RoaXMucHV0Qml0KCAoIChudW0gPj4+IChsZW5ndGggLSBpIC0gMSkgKSAmIDEpID09IDEpO1xuICAgICAgIH1cbiAgICAgfTtcblxuICAgICBfdGhpcy5nZXRMZW5ndGhJbkJpdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICByZXR1cm4gX2xlbmd0aDtcbiAgICAgfTtcblxuICAgICBfdGhpcy5wdXRCaXQgPSBmdW5jdGlvbihiaXQpIHtcblxuICAgICAgIHZhciBidWZJbmRleCA9IE1hdGguZmxvb3IoX2xlbmd0aCAvIDgpO1xuICAgICAgIGlmIChfYnVmZmVyLmxlbmd0aCA8PSBidWZJbmRleCkge1xuICAgICAgICAgX2J1ZmZlci5wdXNoKDApO1xuICAgICAgIH1cblxuICAgICAgIGlmIChiaXQpIHtcbiAgICAgICAgIF9idWZmZXJbYnVmSW5kZXhdIHw9ICgweDgwID4+PiAoX2xlbmd0aCAlIDgpICk7XG4gICAgICAgfVxuXG4gICAgICAgX2xlbmd0aCArPSAxO1xuICAgICB9O1xuXG4gICAgIHJldHVybiBfdGhpcztcbiAgIH07XG5cbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAvLyBxck51bWJlclxuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgdmFyIHFyTnVtYmVyID0gZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgIHZhciBfbW9kZSA9IFFSTW9kZS5NT0RFX05VTUJFUjtcbiAgICAgdmFyIF9kYXRhID0gZGF0YTtcblxuICAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgICBfdGhpcy5nZXRNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgcmV0dXJuIF9tb2RlO1xuICAgICB9O1xuXG4gICAgIF90aGlzLmdldExlbmd0aCA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAgICAgIHJldHVybiBfZGF0YS5sZW5ndGg7XG4gICAgIH07XG5cbiAgICAgX3RoaXMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIpIHtcblxuICAgICAgIHZhciBkYXRhID0gX2RhdGE7XG5cbiAgICAgICB2YXIgaSA9IDA7XG5cbiAgICAgICB3aGlsZSAoaSArIDIgPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgYnVmZmVyLnB1dChzdHJUb051bShkYXRhLnN1YnN0cmluZyhpLCBpICsgMykgKSwgMTApO1xuICAgICAgICAgaSArPSAzO1xuICAgICAgIH1cblxuICAgICAgIGlmIChpIDwgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgIGlmIChkYXRhLmxlbmd0aCAtIGkgPT0gMSkge1xuICAgICAgICAgICBidWZmZXIucHV0KHN0clRvTnVtKGRhdGEuc3Vic3RyaW5nKGksIGkgKyAxKSApLCA0KTtcbiAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5sZW5ndGggLSBpID09IDIpIHtcbiAgICAgICAgICAgYnVmZmVyLnB1dChzdHJUb051bShkYXRhLnN1YnN0cmluZyhpLCBpICsgMikgKSwgNyk7XG4gICAgICAgICB9XG4gICAgICAgfVxuICAgICB9O1xuXG4gICAgIHZhciBzdHJUb051bSA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICB2YXIgbnVtID0gMDtcbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgIG51bSA9IG51bSAqIDEwICsgY2hhdFRvTnVtKHMuY2hhckF0KGkpICk7XG4gICAgICAgfVxuICAgICAgIHJldHVybiBudW07XG4gICAgIH07XG5cbiAgICAgdmFyIGNoYXRUb051bSA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICBpZiAoJzAnIDw9IGMgJiYgYyA8PSAnOScpIHtcbiAgICAgICAgIHJldHVybiBjLmNoYXJDb2RlQXQoMCkgLSAnMCcuY2hhckNvZGVBdCgwKTtcbiAgICAgICB9XG4gICAgICAgdGhyb3cgJ2lsbGVnYWwgY2hhciA6JyArIGM7XG4gICAgIH07XG5cbiAgICAgcmV0dXJuIF90aGlzO1xuICAgfTtcblxuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIC8vIHFyQWxwaGFOdW1cbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgIHZhciBxckFscGhhTnVtID0gZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgIHZhciBfbW9kZSA9IFFSTW9kZS5NT0RFX0FMUEhBX05VTTtcbiAgICAgdmFyIF9kYXRhID0gZGF0YTtcblxuICAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgICBfdGhpcy5nZXRNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgcmV0dXJuIF9tb2RlO1xuICAgICB9O1xuXG4gICAgIF90aGlzLmdldExlbmd0aCA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAgICAgIHJldHVybiBfZGF0YS5sZW5ndGg7XG4gICAgIH07XG5cbiAgICAgX3RoaXMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIpIHtcblxuICAgICAgIHZhciBzID0gX2RhdGE7XG5cbiAgICAgICB2YXIgaSA9IDA7XG5cbiAgICAgICB3aGlsZSAoaSArIDEgPCBzLmxlbmd0aCkge1xuICAgICAgICAgYnVmZmVyLnB1dChcbiAgICAgICAgICAgZ2V0Q29kZShzLmNoYXJBdChpKSApICogNDUgK1xuICAgICAgICAgICBnZXRDb2RlKHMuY2hhckF0KGkgKyAxKSApLCAxMSk7XG4gICAgICAgICBpICs9IDI7XG4gICAgICAgfVxuXG4gICAgICAgaWYgKGkgPCBzLmxlbmd0aCkge1xuICAgICAgICAgYnVmZmVyLnB1dChnZXRDb2RlKHMuY2hhckF0KGkpICksIDYpO1xuICAgICAgIH1cbiAgICAgfTtcblxuICAgICB2YXIgZ2V0Q29kZSA9IGZ1bmN0aW9uKGMpIHtcblxuICAgICAgIGlmICgnMCcgPD0gYyAmJiBjIDw9ICc5Jykge1xuICAgICAgICAgcmV0dXJuIGMuY2hhckNvZGVBdCgwKSAtICcwJy5jaGFyQ29kZUF0KDApO1xuICAgICAgIH0gZWxzZSBpZiAoJ0EnIDw9IGMgJiYgYyA8PSAnWicpIHtcbiAgICAgICAgIHJldHVybiBjLmNoYXJDb2RlQXQoMCkgLSAnQScuY2hhckNvZGVBdCgwKSArIDEwO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgIGNhc2UgJyAnIDogcmV0dXJuIDM2O1xuICAgICAgICAgY2FzZSAnJCcgOiByZXR1cm4gMzc7XG4gICAgICAgICBjYXNlICclJyA6IHJldHVybiAzODtcbiAgICAgICAgIGNhc2UgJyonIDogcmV0dXJuIDM5O1xuICAgICAgICAgY2FzZSAnKycgOiByZXR1cm4gNDA7XG4gICAgICAgICBjYXNlICctJyA6IHJldHVybiA0MTtcbiAgICAgICAgIGNhc2UgJy4nIDogcmV0dXJuIDQyO1xuICAgICAgICAgY2FzZSAnLycgOiByZXR1cm4gNDM7XG4gICAgICAgICBjYXNlICc6JyA6IHJldHVybiA0NDtcbiAgICAgICAgIGRlZmF1bHQgOlxuICAgICAgICAgICB0aHJvdyAnaWxsZWdhbCBjaGFyIDonICsgYztcbiAgICAgICAgIH1cbiAgICAgICB9XG4gICAgIH07XG5cbiAgICAgcmV0dXJuIF90aGlzO1xuICAgfTtcblxuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIC8vIHFyOEJpdEJ5dGVcbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgIHZhciBxcjhCaXRCeXRlID0gZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgIHZhciBfbW9kZSA9IFFSTW9kZS5NT0RFXzhCSVRfQllURTtcbiAgICAgdmFyIF9kYXRhID0gZGF0YTtcbiAgICAgdmFyIF9ieXRlcyA9IHFyY29kZS5zdHJpbmdUb0J5dGVzKGRhdGEpO1xuXG4gICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgIF90aGlzLmdldE1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICByZXR1cm4gX21vZGU7XG4gICAgIH07XG5cbiAgICAgX3RoaXMuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICAgcmV0dXJuIF9ieXRlcy5sZW5ndGg7XG4gICAgIH07XG5cbiAgICAgX3RoaXMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9ieXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgYnVmZmVyLnB1dChfYnl0ZXNbaV0sIDgpO1xuICAgICAgIH1cbiAgICAgfTtcblxuICAgICByZXR1cm4gX3RoaXM7XG4gICB9O1xuXG4gICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgLy8gcXJLYW5qaVxuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgdmFyIHFyS2FuamkgPSBmdW5jdGlvbihkYXRhKSB7XG5cbiAgICAgdmFyIF9tb2RlID0gUVJNb2RlLk1PREVfS0FOSkk7XG4gICAgIHZhciBfZGF0YSA9IGRhdGE7XG5cbiAgICAgdmFyIHN0cmluZ1RvQnl0ZXMgPSBxcmNvZGUuc3RyaW5nVG9CeXRlc0Z1bmNzWydTSklTJ107XG4gICAgIGlmICghc3RyaW5nVG9CeXRlcykge1xuICAgICAgIHRocm93ICdzamlzIG5vdCBzdXBwb3J0ZWQuJztcbiAgICAgfVxuICAgICAhZnVuY3Rpb24oYywgY29kZSkge1xuICAgICAgIC8vIHNlbGYgdGVzdCBmb3Igc2ppcyBzdXBwb3J0LlxuICAgICAgIHZhciB0ZXN0ID0gc3RyaW5nVG9CeXRlcyhjKTtcbiAgICAgICBpZiAodGVzdC5sZW5ndGggIT0gMiB8fCAoICh0ZXN0WzBdIDw8IDgpIHwgdGVzdFsxXSkgIT0gY29kZSkge1xuICAgICAgICAgdGhyb3cgJ3NqaXMgbm90IHN1cHBvcnRlZC4nO1xuICAgICAgIH1cbiAgICAgfSgnXFx1NTNjYicsIDB4OTc0Nik7XG5cbiAgICAgdmFyIF9ieXRlcyA9IHN0cmluZ1RvQnl0ZXMoZGF0YSk7XG5cbiAgICAgdmFyIF90aGlzID0ge307XG5cbiAgICAgX3RoaXMuZ2V0TW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgIHJldHVybiBfbW9kZTtcbiAgICAgfTtcblxuICAgICBfdGhpcy5nZXRMZW5ndGggPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgICByZXR1cm4gfn4oX2J5dGVzLmxlbmd0aCAvIDIpO1xuICAgICB9O1xuXG4gICAgIF90aGlzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyKSB7XG5cbiAgICAgICB2YXIgZGF0YSA9IF9ieXRlcztcblxuICAgICAgIHZhciBpID0gMDtcblxuICAgICAgIHdoaWxlIChpICsgMSA8IGRhdGEubGVuZ3RoKSB7XG5cbiAgICAgICAgIHZhciBjID0gKCAoMHhmZiAmIGRhdGFbaV0pIDw8IDgpIHwgKDB4ZmYgJiBkYXRhW2kgKyAxXSk7XG5cbiAgICAgICAgIGlmICgweDgxNDAgPD0gYyAmJiBjIDw9IDB4OUZGQykge1xuICAgICAgICAgICBjIC09IDB4ODE0MDtcbiAgICAgICAgIH0gZWxzZSBpZiAoMHhFMDQwIDw9IGMgJiYgYyA8PSAweEVCQkYpIHtcbiAgICAgICAgICAgYyAtPSAweEMxNDA7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0aHJvdyAnaWxsZWdhbCBjaGFyIGF0ICcgKyAoaSArIDEpICsgJy8nICsgYztcbiAgICAgICAgIH1cblxuICAgICAgICAgYyA9ICggKGMgPj4+IDgpICYgMHhmZikgKiAweEMwICsgKGMgJiAweGZmKTtcblxuICAgICAgICAgYnVmZmVyLnB1dChjLCAxMyk7XG5cbiAgICAgICAgIGkgKz0gMjtcbiAgICAgICB9XG5cbiAgICAgICBpZiAoaSA8IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICB0aHJvdyAnaWxsZWdhbCBjaGFyIGF0ICcgKyAoaSArIDEpO1xuICAgICAgIH1cbiAgICAgfTtcblxuICAgICByZXR1cm4gX3RoaXM7XG4gICB9O1xuXG4gICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgLy8gR0lGIFN1cHBvcnQgZXRjLlxuICAgLy9cblxuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIC8vIGJ5dGVBcnJheU91dHB1dFN0cmVhbVxuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgdmFyIGJ5dGVBcnJheU91dHB1dFN0cmVhbSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgIHZhciBfYnl0ZXMgPSBbXTtcblxuICAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgICBfdGhpcy53cml0ZUJ5dGUgPSBmdW5jdGlvbihiKSB7XG4gICAgICAgX2J5dGVzLnB1c2goYiAmIDB4ZmYpO1xuICAgICB9O1xuXG4gICAgIF90aGlzLndyaXRlU2hvcnQgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgX3RoaXMud3JpdGVCeXRlKGkpO1xuICAgICAgIF90aGlzLndyaXRlQnl0ZShpID4+PiA4KTtcbiAgICAgfTtcblxuICAgICBfdGhpcy53cml0ZUJ5dGVzID0gZnVuY3Rpb24oYiwgb2ZmLCBsZW4pIHtcbiAgICAgICBvZmYgPSBvZmYgfHwgMDtcbiAgICAgICBsZW4gPSBsZW4gfHwgYi5sZW5ndGg7XG4gICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgX3RoaXMud3JpdGVCeXRlKGJbaSArIG9mZl0pO1xuICAgICAgIH1cbiAgICAgfTtcblxuICAgICBfdGhpcy53cml0ZVN0cmluZyA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgIF90aGlzLndyaXRlQnl0ZShzLmNoYXJDb2RlQXQoaSkgKTtcbiAgICAgICB9XG4gICAgIH07XG5cbiAgICAgX3RoaXMudG9CeXRlQXJyYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICByZXR1cm4gX2J5dGVzO1xuICAgICB9O1xuXG4gICAgIF90aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgdmFyIHMgPSAnJztcbiAgICAgICBzICs9ICdbJztcbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9ieXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgIHMgKz0gJywnO1xuICAgICAgICAgfVxuICAgICAgICAgcyArPSBfYnl0ZXNbaV07XG4gICAgICAgfVxuICAgICAgIHMgKz0gJ10nO1xuICAgICAgIHJldHVybiBzO1xuICAgICB9O1xuXG4gICAgIHJldHVybiBfdGhpcztcbiAgIH07XG5cbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAvLyBiYXNlNjRFbmNvZGVPdXRwdXRTdHJlYW1cbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgIHZhciBiYXNlNjRFbmNvZGVPdXRwdXRTdHJlYW0gPSBmdW5jdGlvbigpIHtcblxuICAgICB2YXIgX2J1ZmZlciA9IDA7XG4gICAgIHZhciBfYnVmbGVuID0gMDtcbiAgICAgdmFyIF9sZW5ndGggPSAwO1xuICAgICB2YXIgX2Jhc2U2NCA9ICcnO1xuXG4gICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgIHZhciB3cml0ZUVuY29kZWQgPSBmdW5jdGlvbihiKSB7XG4gICAgICAgX2Jhc2U2NCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGVuY29kZShiICYgMHgzZikgKTtcbiAgICAgfTtcblxuICAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24obikge1xuICAgICAgIGlmIChuIDwgMCkge1xuICAgICAgICAgLy8gZXJyb3IuXG4gICAgICAgfSBlbHNlIGlmIChuIDwgMjYpIHtcbiAgICAgICAgIHJldHVybiAweDQxICsgbjtcbiAgICAgICB9IGVsc2UgaWYgKG4gPCA1Mikge1xuICAgICAgICAgcmV0dXJuIDB4NjEgKyAobiAtIDI2KTtcbiAgICAgICB9IGVsc2UgaWYgKG4gPCA2Mikge1xuICAgICAgICAgcmV0dXJuIDB4MzAgKyAobiAtIDUyKTtcbiAgICAgICB9IGVsc2UgaWYgKG4gPT0gNjIpIHtcbiAgICAgICAgIHJldHVybiAweDJiO1xuICAgICAgIH0gZWxzZSBpZiAobiA9PSA2Mykge1xuICAgICAgICAgcmV0dXJuIDB4MmY7XG4gICAgICAgfVxuICAgICAgIHRocm93ICduOicgKyBuO1xuICAgICB9O1xuXG4gICAgIF90aGlzLndyaXRlQnl0ZSA9IGZ1bmN0aW9uKG4pIHtcblxuICAgICAgIF9idWZmZXIgPSAoX2J1ZmZlciA8PCA4KSB8IChuICYgMHhmZik7XG4gICAgICAgX2J1ZmxlbiArPSA4O1xuICAgICAgIF9sZW5ndGggKz0gMTtcblxuICAgICAgIHdoaWxlIChfYnVmbGVuID49IDYpIHtcbiAgICAgICAgIHdyaXRlRW5jb2RlZChfYnVmZmVyID4+PiAoX2J1ZmxlbiAtIDYpICk7XG4gICAgICAgICBfYnVmbGVuIC09IDY7XG4gICAgICAgfVxuICAgICB9O1xuXG4gICAgIF90aGlzLmZsdXNoID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICBpZiAoX2J1ZmxlbiA+IDApIHtcbiAgICAgICAgIHdyaXRlRW5jb2RlZChfYnVmZmVyIDw8ICg2IC0gX2J1ZmxlbikgKTtcbiAgICAgICAgIF9idWZmZXIgPSAwO1xuICAgICAgICAgX2J1ZmxlbiA9IDA7XG4gICAgICAgfVxuXG4gICAgICAgaWYgKF9sZW5ndGggJSAzICE9IDApIHtcbiAgICAgICAgIC8vIHBhZGRpbmdcbiAgICAgICAgIHZhciBwYWRsZW4gPSAzIC0gX2xlbmd0aCAlIDM7XG4gICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgIF9iYXNlNjQgKz0gJz0nO1xuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgfTtcblxuICAgICBfdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgIHJldHVybiBfYmFzZTY0O1xuICAgICB9O1xuXG4gICAgIHJldHVybiBfdGhpcztcbiAgIH07XG5cbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAvLyBiYXNlNjREZWNvZGVJbnB1dFN0cmVhbVxuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgdmFyIGJhc2U2NERlY29kZUlucHV0U3RyZWFtID0gZnVuY3Rpb24oc3RyKSB7XG5cbiAgICAgdmFyIF9zdHIgPSBzdHI7XG4gICAgIHZhciBfcG9zID0gMDtcbiAgICAgdmFyIF9idWZmZXIgPSAwO1xuICAgICB2YXIgX2J1ZmxlbiA9IDA7XG5cbiAgICAgdmFyIF90aGlzID0ge307XG5cbiAgICAgX3RoaXMucmVhZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgd2hpbGUgKF9idWZsZW4gPCA4KSB7XG5cbiAgICAgICAgIGlmIChfcG9zID49IF9zdHIubGVuZ3RoKSB7XG4gICAgICAgICAgIGlmIChfYnVmbGVuID09IDApIHtcbiAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgdGhyb3cgJ3VuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuLycgKyBfYnVmbGVuO1xuICAgICAgICAgfVxuXG4gICAgICAgICB2YXIgYyA9IF9zdHIuY2hhckF0KF9wb3MpO1xuICAgICAgICAgX3BvcyArPSAxO1xuXG4gICAgICAgICBpZiAoYyA9PSAnPScpIHtcbiAgICAgICAgICAgX2J1ZmxlbiA9IDA7XG4gICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgIH0gZWxzZSBpZiAoYy5tYXRjaCgvXlxccyQvKSApIHtcbiAgICAgICAgICAgLy8gaWdub3JlIGlmIHdoaXRlc3BhY2UuXG4gICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgfVxuXG4gICAgICAgICBfYnVmZmVyID0gKF9idWZmZXIgPDwgNikgfCBkZWNvZGUoYy5jaGFyQ29kZUF0KDApICk7XG4gICAgICAgICBfYnVmbGVuICs9IDY7XG4gICAgICAgfVxuXG4gICAgICAgdmFyIG4gPSAoX2J1ZmZlciA+Pj4gKF9idWZsZW4gLSA4KSApICYgMHhmZjtcbiAgICAgICBfYnVmbGVuIC09IDg7XG4gICAgICAgcmV0dXJuIG47XG4gICAgIH07XG5cbiAgICAgdmFyIGRlY29kZSA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICBpZiAoMHg0MSA8PSBjICYmIGMgPD0gMHg1YSkge1xuICAgICAgICAgcmV0dXJuIGMgLSAweDQxO1xuICAgICAgIH0gZWxzZSBpZiAoMHg2MSA8PSBjICYmIGMgPD0gMHg3YSkge1xuICAgICAgICAgcmV0dXJuIGMgLSAweDYxICsgMjY7XG4gICAgICAgfSBlbHNlIGlmICgweDMwIDw9IGMgJiYgYyA8PSAweDM5KSB7XG4gICAgICAgICByZXR1cm4gYyAtIDB4MzAgKyA1MjtcbiAgICAgICB9IGVsc2UgaWYgKGMgPT0gMHgyYikge1xuICAgICAgICAgcmV0dXJuIDYyO1xuICAgICAgIH0gZWxzZSBpZiAoYyA9PSAweDJmKSB7XG4gICAgICAgICByZXR1cm4gNjM7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRocm93ICdjOicgKyBjO1xuICAgICAgIH1cbiAgICAgfTtcblxuICAgICByZXR1cm4gX3RoaXM7XG4gICB9O1xuXG4gICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgLy8gZ2lmSW1hZ2UgKEIvVylcbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgIHZhciBnaWZJbWFnZSA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcblxuICAgICB2YXIgX3dpZHRoID0gd2lkdGg7XG4gICAgIHZhciBfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICB2YXIgX2RhdGEgPSBuZXcgQXJyYXkod2lkdGggKiBoZWlnaHQpO1xuXG4gICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgIF90aGlzLnNldFBpeGVsID0gZnVuY3Rpb24oeCwgeSwgcGl4ZWwpIHtcbiAgICAgICBfZGF0YVt5ICogX3dpZHRoICsgeF0gPSBwaXhlbDtcbiAgICAgfTtcblxuICAgICBfdGhpcy53cml0ZSA9IGZ1bmN0aW9uKG91dCkge1xuXG4gICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAvLyBHSUYgU2lnbmF0dXJlXG5cbiAgICAgICBvdXQud3JpdGVTdHJpbmcoJ0dJRjg3YScpO1xuXG4gICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAvLyBTY3JlZW4gRGVzY3JpcHRvclxuXG4gICAgICAgb3V0LndyaXRlU2hvcnQoX3dpZHRoKTtcbiAgICAgICBvdXQud3JpdGVTaG9ydChfaGVpZ2h0KTtcblxuICAgICAgIG91dC53cml0ZUJ5dGUoMHg4MCk7IC8vIDJiaXRcbiAgICAgICBvdXQud3JpdGVCeXRlKDApO1xuICAgICAgIG91dC53cml0ZUJ5dGUoMCk7XG5cbiAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgIC8vIEdsb2JhbCBDb2xvciBNYXBcblxuICAgICAgIC8vIGJsYWNrXG4gICAgICAgb3V0LndyaXRlQnl0ZSgweDAwKTtcbiAgICAgICBvdXQud3JpdGVCeXRlKDB4MDApO1xuICAgICAgIG91dC53cml0ZUJ5dGUoMHgwMCk7XG5cbiAgICAgICAvLyB3aGl0ZVxuICAgICAgIG91dC53cml0ZUJ5dGUoMHhmZik7XG4gICAgICAgb3V0LndyaXRlQnl0ZSgweGZmKTtcbiAgICAgICBvdXQud3JpdGVCeXRlKDB4ZmYpO1xuXG4gICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAvLyBJbWFnZSBEZXNjcmlwdG9yXG5cbiAgICAgICBvdXQud3JpdGVTdHJpbmcoJywnKTtcbiAgICAgICBvdXQud3JpdGVTaG9ydCgwKTtcbiAgICAgICBvdXQud3JpdGVTaG9ydCgwKTtcbiAgICAgICBvdXQud3JpdGVTaG9ydChfd2lkdGgpO1xuICAgICAgIG91dC53cml0ZVNob3J0KF9oZWlnaHQpO1xuICAgICAgIG91dC53cml0ZUJ5dGUoMCk7XG5cbiAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgIC8vIExvY2FsIENvbG9yIE1hcFxuXG4gICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAvLyBSYXN0ZXIgRGF0YVxuXG4gICAgICAgdmFyIGx6d01pbkNvZGVTaXplID0gMjtcbiAgICAgICB2YXIgcmFzdGVyID0gZ2V0TFpXUmFzdGVyKGx6d01pbkNvZGVTaXplKTtcblxuICAgICAgIG91dC53cml0ZUJ5dGUobHp3TWluQ29kZVNpemUpO1xuXG4gICAgICAgdmFyIG9mZnNldCA9IDA7XG5cbiAgICAgICB3aGlsZSAocmFzdGVyLmxlbmd0aCAtIG9mZnNldCA+IDI1NSkge1xuICAgICAgICAgb3V0LndyaXRlQnl0ZSgyNTUpO1xuICAgICAgICAgb3V0LndyaXRlQnl0ZXMocmFzdGVyLCBvZmZzZXQsIDI1NSk7XG4gICAgICAgICBvZmZzZXQgKz0gMjU1O1xuICAgICAgIH1cblxuICAgICAgIG91dC53cml0ZUJ5dGUocmFzdGVyLmxlbmd0aCAtIG9mZnNldCk7XG4gICAgICAgb3V0LndyaXRlQnl0ZXMocmFzdGVyLCBvZmZzZXQsIHJhc3Rlci5sZW5ndGggLSBvZmZzZXQpO1xuICAgICAgIG91dC53cml0ZUJ5dGUoMHgwMCk7XG5cbiAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgIC8vIEdJRiBUZXJtaW5hdG9yXG4gICAgICAgb3V0LndyaXRlU3RyaW5nKCc7Jyk7XG4gICAgIH07XG5cbiAgICAgdmFyIGJpdE91dHB1dFN0cmVhbSA9IGZ1bmN0aW9uKG91dCkge1xuXG4gICAgICAgdmFyIF9vdXQgPSBvdXQ7XG4gICAgICAgdmFyIF9iaXRMZW5ndGggPSAwO1xuICAgICAgIHZhciBfYml0QnVmZmVyID0gMDtcblxuICAgICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgICAgX3RoaXMud3JpdGUgPSBmdW5jdGlvbihkYXRhLCBsZW5ndGgpIHtcblxuICAgICAgICAgaWYgKCAoZGF0YSA+Pj4gbGVuZ3RoKSAhPSAwKSB7XG4gICAgICAgICAgIHRocm93ICdsZW5ndGggb3Zlcic7XG4gICAgICAgICB9XG5cbiAgICAgICAgIHdoaWxlIChfYml0TGVuZ3RoICsgbGVuZ3RoID49IDgpIHtcbiAgICAgICAgICAgX291dC53cml0ZUJ5dGUoMHhmZiAmICggKGRhdGEgPDwgX2JpdExlbmd0aCkgfCBfYml0QnVmZmVyKSApO1xuICAgICAgICAgICBsZW5ndGggLT0gKDggLSBfYml0TGVuZ3RoKTtcbiAgICAgICAgICAgZGF0YSA+Pj49ICg4IC0gX2JpdExlbmd0aCk7XG4gICAgICAgICAgIF9iaXRCdWZmZXIgPSAwO1xuICAgICAgICAgICBfYml0TGVuZ3RoID0gMDtcbiAgICAgICAgIH1cblxuICAgICAgICAgX2JpdEJ1ZmZlciA9IChkYXRhIDw8IF9iaXRMZW5ndGgpIHwgX2JpdEJ1ZmZlcjtcbiAgICAgICAgIF9iaXRMZW5ndGggPSBfYml0TGVuZ3RoICsgbGVuZ3RoO1xuICAgICAgIH07XG5cbiAgICAgICBfdGhpcy5mbHVzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgaWYgKF9iaXRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgIF9vdXQud3JpdGVCeXRlKF9iaXRCdWZmZXIpO1xuICAgICAgICAgfVxuICAgICAgIH07XG5cbiAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgIH07XG5cbiAgICAgdmFyIGdldExaV1Jhc3RlciA9IGZ1bmN0aW9uKGx6d01pbkNvZGVTaXplKSB7XG5cbiAgICAgICB2YXIgY2xlYXJDb2RlID0gMSA8PCBsendNaW5Db2RlU2l6ZTtcbiAgICAgICB2YXIgZW5kQ29kZSA9ICgxIDw8IGx6d01pbkNvZGVTaXplKSArIDE7XG4gICAgICAgdmFyIGJpdExlbmd0aCA9IGx6d01pbkNvZGVTaXplICsgMTtcblxuICAgICAgIC8vIFNldHVwIExaV1RhYmxlXG4gICAgICAgdmFyIHRhYmxlID0gbHp3VGFibGUoKTtcblxuICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xlYXJDb2RlOyBpICs9IDEpIHtcbiAgICAgICAgIHRhYmxlLmFkZChTdHJpbmcuZnJvbUNoYXJDb2RlKGkpICk7XG4gICAgICAgfVxuICAgICAgIHRhYmxlLmFkZChTdHJpbmcuZnJvbUNoYXJDb2RlKGNsZWFyQ29kZSkgKTtcbiAgICAgICB0YWJsZS5hZGQoU3RyaW5nLmZyb21DaGFyQ29kZShlbmRDb2RlKSApO1xuXG4gICAgICAgdmFyIGJ5dGVPdXQgPSBieXRlQXJyYXlPdXRwdXRTdHJlYW0oKTtcbiAgICAgICB2YXIgYml0T3V0ID0gYml0T3V0cHV0U3RyZWFtKGJ5dGVPdXQpO1xuXG4gICAgICAgLy8gY2xlYXIgY29kZVxuICAgICAgIGJpdE91dC53cml0ZShjbGVhckNvZGUsIGJpdExlbmd0aCk7XG5cbiAgICAgICB2YXIgZGF0YUluZGV4ID0gMDtcblxuICAgICAgIHZhciBzID0gU3RyaW5nLmZyb21DaGFyQ29kZShfZGF0YVtkYXRhSW5kZXhdKTtcbiAgICAgICBkYXRhSW5kZXggKz0gMTtcblxuICAgICAgIHdoaWxlIChkYXRhSW5kZXggPCBfZGF0YS5sZW5ndGgpIHtcblxuICAgICAgICAgdmFyIGMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKF9kYXRhW2RhdGFJbmRleF0pO1xuICAgICAgICAgZGF0YUluZGV4ICs9IDE7XG5cbiAgICAgICAgIGlmICh0YWJsZS5jb250YWlucyhzICsgYykgKSB7XG5cbiAgICAgICAgICAgcyA9IHMgKyBjO1xuXG4gICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgIGJpdE91dC53cml0ZSh0YWJsZS5pbmRleE9mKHMpLCBiaXRMZW5ndGgpO1xuXG4gICAgICAgICAgIGlmICh0YWJsZS5zaXplKCkgPCAweGZmZikge1xuXG4gICAgICAgICAgICAgaWYgKHRhYmxlLnNpemUoKSA9PSAoMSA8PCBiaXRMZW5ndGgpICkge1xuICAgICAgICAgICAgICAgYml0TGVuZ3RoICs9IDE7XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgdGFibGUuYWRkKHMgKyBjKTtcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgIHMgPSBjO1xuICAgICAgICAgfVxuICAgICAgIH1cblxuICAgICAgIGJpdE91dC53cml0ZSh0YWJsZS5pbmRleE9mKHMpLCBiaXRMZW5ndGgpO1xuXG4gICAgICAgLy8gZW5kIGNvZGVcbiAgICAgICBiaXRPdXQud3JpdGUoZW5kQ29kZSwgYml0TGVuZ3RoKTtcblxuICAgICAgIGJpdE91dC5mbHVzaCgpO1xuXG4gICAgICAgcmV0dXJuIGJ5dGVPdXQudG9CeXRlQXJyYXkoKTtcbiAgICAgfTtcblxuICAgICB2YXIgbHp3VGFibGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgIHZhciBfbWFwID0ge307XG4gICAgICAgdmFyIF9zaXplID0gMDtcblxuICAgICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgICAgX3RoaXMuYWRkID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICBpZiAoX3RoaXMuY29udGFpbnMoa2V5KSApIHtcbiAgICAgICAgICAgdGhyb3cgJ2R1cCBrZXk6JyArIGtleTtcbiAgICAgICAgIH1cbiAgICAgICAgIF9tYXBba2V5XSA9IF9zaXplO1xuICAgICAgICAgX3NpemUgKz0gMTtcbiAgICAgICB9O1xuXG4gICAgICAgX3RoaXMuc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgcmV0dXJuIF9zaXplO1xuICAgICAgIH07XG5cbiAgICAgICBfdGhpcy5pbmRleE9mID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICByZXR1cm4gX21hcFtrZXldO1xuICAgICAgIH07XG5cbiAgICAgICBfdGhpcy5jb250YWlucyA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgcmV0dXJuIHR5cGVvZiBfbWFwW2tleV0gIT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgfTtcblxuICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgfTtcblxuICAgICByZXR1cm4gX3RoaXM7XG4gICB9O1xuXG4gICB2YXIgY3JlYXRlRGF0YVVSTCA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIGdldFBpeGVsKSB7XG4gICAgIHZhciBnaWYgPSBnaWZJbWFnZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBoZWlnaHQ7IHkgKz0gMSkge1xuICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgd2lkdGg7IHggKz0gMSkge1xuICAgICAgICAgZ2lmLnNldFBpeGVsKHgsIHksIGdldFBpeGVsKHgsIHkpICk7XG4gICAgICAgfVxuICAgICB9XG5cbiAgICAgdmFyIGIgPSBieXRlQXJyYXlPdXRwdXRTdHJlYW0oKTtcbiAgICAgZ2lmLndyaXRlKGIpO1xuXG4gICAgIHZhciBiYXNlNjQgPSBiYXNlNjRFbmNvZGVPdXRwdXRTdHJlYW0oKTtcbiAgICAgdmFyIGJ5dGVzID0gYi50b0J5dGVBcnJheSgpO1xuICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgYmFzZTY0LndyaXRlQnl0ZShieXRlc1tpXSk7XG4gICAgIH1cbiAgICAgYmFzZTY0LmZsdXNoKCk7XG5cbiAgICAgcmV0dXJuICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsJyArIGJhc2U2NDtcbiAgIH07XG5cbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAvLyByZXR1cm5zIHFyY29kZSBmdW5jdGlvbi5cblxuICAgcmV0dXJuIHFyY29kZTtcbiB9KCk7XG5cbiAvLyBtdWx0aWJ5dGUgc3VwcG9ydFxuICFmdW5jdGlvbigpIHtcblxuICAgcXJjb2RlLnN0cmluZ1RvQnl0ZXNGdW5jc1snVVRGLTgnXSA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xODcyOTQwNS9ob3ctdG8tY29udmVydC11dGY4LXN0cmluZy10by1ieXRlLWFycmF5XG4gICAgIGZ1bmN0aW9uIHRvVVRGOEFycmF5KHN0cikge1xuICAgICAgIHZhciB1dGY4ID0gW107XG4gICAgICAgZm9yICh2YXIgaT0wOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICB2YXIgY2hhcmNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgIGlmIChjaGFyY29kZSA8IDB4ODApIHV0ZjgucHVzaChjaGFyY29kZSk7XG4gICAgICAgICBlbHNlIGlmIChjaGFyY29kZSA8IDB4ODAwKSB7XG4gICAgICAgICAgIHV0ZjgucHVzaCgweGMwIHwgKGNoYXJjb2RlID4+IDYpLFxuICAgICAgICAgICAgICAgMHg4MCB8IChjaGFyY29kZSAmIDB4M2YpKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGVsc2UgaWYgKGNoYXJjb2RlIDwgMHhkODAwIHx8IGNoYXJjb2RlID49IDB4ZTAwMCkge1xuICAgICAgICAgICB1dGY4LnB1c2goMHhlMCB8IChjaGFyY29kZSA+PiAxMiksXG4gICAgICAgICAgICAgICAweDgwIHwgKChjaGFyY29kZT4+NikgJiAweDNmKSxcbiAgICAgICAgICAgICAgIDB4ODAgfCAoY2hhcmNvZGUgJiAweDNmKSk7XG4gICAgICAgICB9XG4gICAgICAgICAvLyBzdXJyb2dhdGUgcGFpclxuICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgIGkrKztcbiAgICAgICAgICAgLy8gVVRGLTE2IGVuY29kZXMgMHgxMDAwMC0weDEwRkZGRiBieVxuICAgICAgICAgICAvLyBzdWJ0cmFjdGluZyAweDEwMDAwIGFuZCBzcGxpdHRpbmcgdGhlXG4gICAgICAgICAgIC8vIDIwIGJpdHMgb2YgMHgwLTB4RkZGRkYgaW50byB0d28gaGFsdmVzXG4gICAgICAgICAgIGNoYXJjb2RlID0gMHgxMDAwMCArICgoKGNoYXJjb2RlICYgMHgzZmYpPDwxMClcbiAgICAgICAgICAgICB8IChzdHIuY2hhckNvZGVBdChpKSAmIDB4M2ZmKSk7XG4gICAgICAgICAgIHV0ZjgucHVzaCgweGYwIHwgKGNoYXJjb2RlID4+MTgpLFxuICAgICAgICAgICAgICAgMHg4MCB8ICgoY2hhcmNvZGU+PjEyKSAmIDB4M2YpLFxuICAgICAgICAgICAgICAgMHg4MCB8ICgoY2hhcmNvZGU+PjYpICYgMHgzZiksXG4gICAgICAgICAgICAgICAweDgwIHwgKGNoYXJjb2RlICYgMHgzZikpO1xuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICByZXR1cm4gdXRmODtcbiAgICAgfVxuICAgICByZXR1cm4gdG9VVEY4QXJyYXkocyk7XG4gICB9O1xuXG4gfSgpO1xuXG4gKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICB9XG4gfShmdW5jdGlvbiAoKSB7XG4gICAgIHJldHVybiBxcmNvZGU7XG4gfSkpO1xuXG5cbi8vICNlbmRyZWdpb24gT1JJR0lOQUwgQ09ERVxuXG5fY2pzRXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXG5cbn0sIHt9KTtcbmV4cG9ydCB7IF9janNFeHBvcnRzIGFzIGRlZmF1bHQgfTtcbmV4cG9ydCB7IF9fY2pzTWV0YVVSTCB9XG4iLCIvLyBJIGFtIHRoZSBmYWNhZGUgbW9kdWxlIHdobyBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIENvbW1vbkpTIG1vZHVsZSAnLi9xcmNvZGUuanMnflxuaW1wb3J0IHsgX19janNNZXRhVVJMIGFzIHJlcSB9IGZyb20gJy4vcXJjb2RlLmpzJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnY2NlOi9pbnRlcm5hbC9tbC9janMtbG9hZGVyLm1qcyc7XG5pZiAoIXJlcSkge1xuICAgIGxvYWRlci50aHJvd0ludmFsaWRXcmFwcGVyKCcuL3FyY29kZS5qcycsIGltcG9ydC5tZXRhLnVybCk7XG59XG5sb2FkZXIucmVxdWlyZShyZXEpO1xuZXhwb3J0ICogZnJvbSAnLi9xcmNvZGUuanMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBkIH0gZnJvbSAnLi9xcmNvZGUuanMnXG5leHBvcnQgeyBkIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX2Nqc0xvYWRlciBmcm9tICdjY2U6L2ludGVybmFsL21sL2Nqcy1sb2FkZXIubWpzJztcbmxldCBfY2pzRXhwb3J0cztcbmxldCBfX19lc01vZHVsZTtcbmxldCBfX19ET19OT1RfVVNFX19BY3Rpb25UeXBlcztcbmxldCBfYXBwbHlNaWRkbGV3YXJlO1xubGV0IF9iaW5kQWN0aW9uQ3JlYXRvcnM7XG5sZXQgX2NvbWJpbmVSZWR1Y2VycztcbmxldCBfY29tcG9zZTtcbmxldCBfY3JlYXRlU3RvcmU7XG5sZXQgX2xlZ2FjeV9jcmVhdGVTdG9yZTtcbmNvbnN0IF9fY2pzTWV0YVVSTCA9IGltcG9ydC5tZXRhLnVybDtcbl9janNMb2FkZXIuZGVmaW5lKF9fY2pzTWV0YVVSTCwgZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7XG4vLyAjcmVnaW9uIE9SSUdJTkFMIENPREVcblxuXG4gJ3VzZSBzdHJpY3QnO1xuXG4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuIC8vIHZhciBfb2JqZWN0U3ByZWFkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XG5cbiAvLyBmdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxuIC8vIHZhciBfb2JqZWN0U3ByZWFkX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShfb2JqZWN0U3ByZWFkKTtcblxuIC8qKlxuICAqIEFkYXB0ZWQgZnJvbSBSZWFjdDogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvbWFzdGVyL3BhY2thZ2VzL3NoYXJlZC9mb3JtYXRQcm9kRXJyb3JNZXNzYWdlLmpzXG4gICpcbiAgKiBEbyBub3QgcmVxdWlyZSB0aGlzIG1vZHVsZSBkaXJlY3RseSEgVXNlIG5vcm1hbCB0aHJvdyBlcnJvciBjYWxscy4gVGhlc2UgbWVzc2FnZXMgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGVycm9yIGNvZGVzXG4gICogZHVyaW5nIGJ1aWxkLlxuICAqIEBwYXJhbSB7bnVtYmVyfSBjb2RlXG4gICovXG4gZnVuY3Rpb24gZm9ybWF0UHJvZEVycm9yTWVzc2FnZShjb2RlKSB7XG4gICByZXR1cm4gXCJNaW5pZmllZCBSZWR1eCBlcnJvciAjXCIgKyBjb2RlICsgXCI7IHZpc2l0IGh0dHBzOi8vcmVkdXguanMub3JnL0Vycm9ycz9jb2RlPVwiICsgY29kZSArIFwiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIFwiICsgJ3VzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMuICc7XG4gfVxuXG4gLy8gSW5saW5lZCB2ZXJzaW9uIG9mIHRoZSBgc3ltYm9sLW9ic2VydmFibGVgIHBvbHlmaWxsXG4gdmFyICQkb2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSB8fCAnQEBvYnNlcnZhYmxlJztcbiB9KSgpO1xuXG4gLyoqXG4gICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICAqL1xuIHZhciByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiByYW5kb21TdHJpbmcoKSB7XG4gICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG4gfTtcblxuIHZhciBBY3Rpb25UeXBlcyA9IHtcbiAgIElOSVQ6IFwiQEByZWR1eC9JTklUXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgIFJFUExBQ0U6IFwiQEByZWR1eC9SRVBMQUNFXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgIFBST0JFX1VOS05PV05fQUNUSU9OOiBmdW5jdGlvbiBQUk9CRV9VTktOT1dOX0FDVElPTigpIHtcbiAgICAgcmV0dXJuIFwiQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTlwiICsgcmFuZG9tU3RyaW5nKCk7XG4gICB9XG4gfTtcblxuIC8qKlxuICAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxuICAqL1xuIGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICB2YXIgcHJvdG8gPSBvYmo7XG5cbiAgIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XG4gICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgIH1cblxuICAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09PSBwcm90bztcbiB9XG5cbiAvLyBJbmxpbmVkIC8gc2hvcnRlbmVkIHZlcnNpb24gb2YgYGtpbmRPZmAgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9raW5kLW9mXG4gZnVuY3Rpb24gbWluaUtpbmRPZih2YWwpIHtcbiAgIGlmICh2YWwgPT09IHZvaWQgMCkgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgaWYgKHZhbCA9PT0gbnVsbCkgcmV0dXJuICdudWxsJztcbiAgIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcblxuICAgc3dpdGNoICh0eXBlKSB7XG4gICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICBjYXNlICdzdHJpbmcnOlxuICAgICBjYXNlICdudW1iZXInOlxuICAgICBjYXNlICdzeW1ib2wnOlxuICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAge1xuICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgfVxuICAgfVxuXG4gICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSByZXR1cm4gJ2FycmF5JztcbiAgIGlmIChpc0RhdGUodmFsKSkgcmV0dXJuICdkYXRlJztcbiAgIGlmIChpc0Vycm9yKHZhbCkpIHJldHVybiAnZXJyb3InO1xuICAgdmFyIGNvbnN0cnVjdG9yTmFtZSA9IGN0b3JOYW1lKHZhbCk7XG5cbiAgIHN3aXRjaCAoY29uc3RydWN0b3JOYW1lKSB7XG4gICAgIGNhc2UgJ1N5bWJvbCc6XG4gICAgIGNhc2UgJ1Byb21pc2UnOlxuICAgICBjYXNlICdXZWFrTWFwJzpcbiAgICAgY2FzZSAnV2Vha1NldCc6XG4gICAgIGNhc2UgJ01hcCc6XG4gICAgIGNhc2UgJ1NldCc6XG4gICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yTmFtZTtcbiAgIH0gLy8gb3RoZXJcblxuXG4gICByZXR1cm4gdHlwZS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgJycpO1xuIH1cblxuIGZ1bmN0aW9uIGN0b3JOYW1lKHZhbCkge1xuICAgcmV0dXJuIHR5cGVvZiB2YWwuY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgPyB2YWwuY29uc3RydWN0b3IubmFtZSA6IG51bGw7XG4gfVxuXG4gZnVuY3Rpb24gaXNFcnJvcih2YWwpIHtcbiAgIHJldHVybiB2YWwgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgdmFsLm1lc3NhZ2UgPT09ICdzdHJpbmcnICYmIHZhbC5jb25zdHJ1Y3RvciAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLnN0YWNrVHJhY2VMaW1pdCA9PT0gJ251bWJlcic7XG4gfVxuXG4gZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHJldHVybiB0cnVlO1xuICAgcmV0dXJuIHR5cGVvZiB2YWwudG9EYXRlU3RyaW5nID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWwuZ2V0RGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsLnNldERhdGUgPT09ICdmdW5jdGlvbic7XG4gfVxuXG4gZnVuY3Rpb24ga2luZE9mKHZhbCkge1xuICAgdmFyIHR5cGVPZlZhbCA9IHR5cGVvZiB2YWw7XG4gICB0eXBlT2ZWYWwgPSBtaW5pS2luZE9mKHZhbCk7XG4gICByZXR1cm4gdHlwZU9mVmFsO1xuIH1cblxuIC8qKlxuICAqIEBkZXByZWNhdGVkXG4gICpcbiAgKiAqKldlIHJlY29tbWVuZCB1c2luZyB0aGUgYGNvbmZpZ3VyZVN0b3JlYCBtZXRob2RcbiAgKiBvZiB0aGUgYEByZWR1eGpzL3Rvb2xraXRgIHBhY2thZ2UqKiwgd2hpY2ggcmVwbGFjZXMgYGNyZWF0ZVN0b3JlYC5cbiAgKlxuICAqIFJlZHV4IFRvb2xraXQgaXMgb3VyIHJlY29tbWVuZGVkIGFwcHJvYWNoIGZvciB3cml0aW5nIFJlZHV4IGxvZ2ljIHRvZGF5LFxuICAqIGluY2x1ZGluZyBzdG9yZSBzZXR1cCwgcmVkdWNlcnMsIGRhdGEgZmV0Y2hpbmcsIGFuZCBtb3JlLlxuICAqXG4gICogKipGb3IgbW9yZSBkZXRhaWxzLCBwbGVhc2UgcmVhZCB0aGlzIFJlZHV4IGRvY3MgcGFnZToqKlxuICAqICoqaHR0cHM6Ly9yZWR1eC5qcy5vcmcvaW50cm9kdWN0aW9uL3doeS1ydGstaXMtcmVkdXgtdG9kYXkqKlxuICAqXG4gICogYGNvbmZpZ3VyZVN0b3JlYCBmcm9tIFJlZHV4IFRvb2xraXQgaXMgYW4gaW1wcm92ZWQgdmVyc2lvbiBvZiBgY3JlYXRlU3RvcmVgIHRoYXRcbiAgKiBzaW1wbGlmaWVzIHNldHVwIGFuZCBoZWxwcyBhdm9pZCBjb21tb24gYnVncy5cbiAgKlxuICAqIFlvdSBzaG91bGQgbm90IGJlIHVzaW5nIHRoZSBgcmVkdXhgIGNvcmUgcGFja2FnZSBieSBpdHNlbGYgdG9kYXksIGV4Y2VwdCBmb3IgbGVhcm5pbmcgcHVycG9zZXMuXG4gICogVGhlIGBjcmVhdGVTdG9yZWAgbWV0aG9kIGZyb20gdGhlIGNvcmUgYHJlZHV4YCBwYWNrYWdlIHdpbGwgbm90IGJlIHJlbW92ZWQsIGJ1dCB3ZSBlbmNvdXJhZ2VcbiAgKiBhbGwgdXNlcnMgdG8gbWlncmF0ZSB0byB1c2luZyBSZWR1eCBUb29sa2l0IGZvciBhbGwgUmVkdXggY29kZS5cbiAgKlxuICAqIElmIHlvdSB3YW50IHRvIHVzZSBgY3JlYXRlU3RvcmVgIHdpdGhvdXQgdGhpcyB2aXN1YWwgZGVwcmVjYXRpb24gd2FybmluZywgdXNlXG4gICogdGhlIGBsZWdhY3lfY3JlYXRlU3RvcmVgIGltcG9ydCBpbnN0ZWFkOlxuICAqXG4gICogYGltcG9ydCB7IGxlZ2FjeV9jcmVhdGVTdG9yZSBhcyBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnYFxuICAqXG4gICovXG5cbiBmdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgIHZhciBfcmVmMjtcblxuICAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBhcmd1bWVudHNbM10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgdGhyb3cgbmV3IEVycm9yKCdJdCBsb29rcyBsaWtlIHlvdSBhcmUgcGFzc2luZyBzZXZlcmFsIHN0b3JlIGVuaGFuY2VycyB0byAnICsgJ2NyZWF0ZVN0b3JlKCkuIFRoaXMgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCwgY29tcG9zZSB0aGVtICcgKyAndG9nZXRoZXIgdG8gYSBzaW5nbGUgZnVuY3Rpb24uIFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNC1zdG9yZSNjcmVhdGluZy1hLXN0b3JlLXdpdGgtZW5oYW5jZXJzIGZvciBhbiBleGFtcGxlLicpO1xuICAgfVxuXG4gICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQ7XG4gICB9XG5cbiAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihlbmhhbmNlcikgKyBcIidcIik7XG4gICAgIH1cblxuICAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgIH1cblxuICAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHRoZSByb290IHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihyZWR1Y2VyKSArIFwiJ1wiKTtcbiAgIH1cblxuICAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgIHZhciBjdXJyZW50TGlzdGVuZXJzID0gW107XG4gICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgLyoqXG4gICAgKiBUaGlzIG1ha2VzIGEgc2hhbGxvdyBjb3B5IG9mIGN1cnJlbnRMaXN0ZW5lcnMgc28gd2UgY2FuIHVzZVxuICAgICogbmV4dExpc3RlbmVycyBhcyBhIHRlbXBvcmFyeSBsaXN0IHdoaWxlIGRpc3BhdGNoaW5nLlxuICAgICpcbiAgICAqIFRoaXMgcHJldmVudHMgYW55IGJ1Z3MgYXJvdW5kIGNvbnN1bWVycyBjYWxsaW5nXG4gICAgKiBzdWJzY3JpYmUvdW5zdWJzY3JpYmUgaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLlxuICAgICovXG5cbiAgIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICAgfVxuICAgfVxuICAgLyoqXG4gICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICAqXG4gICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAgKi9cblxuXG4gICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuZ2V0U3RhdGUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnVGhlIHJlZHVjZXIgaGFzIGFscmVhZHkgcmVjZWl2ZWQgdGhlIHN0YXRlIGFzIGFuIGFyZ3VtZW50LiAnICsgJ1Bhc3MgaXQgZG93biBmcm9tIHRoZSB0b3AgcmVkdWNlciBpbnN0ZWFkIG9mIHJlYWRpbmcgaXQgZnJvbSB0aGUgc3RvcmUuJyk7XG4gICAgIH1cblxuICAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICAgfVxuICAgLyoqXG4gICAgKiBBZGRzIGEgY2hhbmdlIGxpc3RlbmVyLiBJdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCxcbiAgICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICAqXG4gICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgICogY2F2ZWF0czpcbiAgICAqXG4gICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICAqIHdpbGwgbm90IGhhdmUgYW55IGVmZmVjdCBvbiB0aGUgYGRpc3BhdGNoKClgIHRoYXQgaXMgY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgICpcbiAgICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICAqIHRoZSBsaXN0ZW5lciBpcyBjYWxsZWQuIEl0IGlzLCBob3dldmVyLCBndWFyYW50ZWVkIHRoYXQgYWxsIHN1YnNjcmliZXJzXG4gICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICAqXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgICovXG5cblxuICAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihsaXN0ZW5lcikgKyBcIidcIik7XG4gICAgIH1cblxuICAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgY2FsbCBzdG9yZS5zdWJzY3JpYmUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnSWYgeW91IHdvdWxkIGxpa2UgdG8gYmUgbm90aWZpZWQgYWZ0ZXIgdGhlIHN0b3JlIGhhcyBiZWVuIHVwZGF0ZWQsIHN1YnNjcmliZSBmcm9tIGEgJyArICdjb21wb25lbnQgYW5kIGludm9rZSBzdG9yZS5nZXRTdGF0ZSgpIGluIHRoZSBjYWxsYmFjayB0byBhY2Nlc3MgdGhlIGxhdGVzdCBzdGF0ZS4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgIH1cblxuICAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgICB9XG5cbiAgICAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCB1bnN1YnNjcmliZSBmcm9tIGEgc3RvcmUgbGlzdGVuZXIgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGkvc3RvcmUjc3Vic2NyaWJlbGlzdGVuZXIgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICAgICB9XG5cbiAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgY3VycmVudExpc3RlbmVycyA9IG51bGw7XG4gICAgIH07XG4gICB9XG4gICAvKipcbiAgICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICAqXG4gICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgICpcbiAgICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICAqXG4gICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgICpcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICAqXG4gICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAgKi9cblxuXG4gICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gSW5zdGVhZCwgdGhlIGFjdHVhbCB0eXBlIHdhczogJ1wiICsga2luZE9mKGFjdGlvbikgKyBcIicuIFlvdSBtYXkgbmVlZCB0byBhZGQgbWlkZGxld2FyZSB0byB5b3VyIHN0b3JlIHNldHVwIHRvIGhhbmRsZSBkaXNwYXRjaGluZyBvdGhlciB2YWx1ZXMsIHN1Y2ggYXMgJ3JlZHV4LXRodW5rJyB0byBoYW5kbGUgZGlzcGF0Y2hpbmcgZnVuY3Rpb25zLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjbWlkZGxld2FyZSBhbmQgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTYtYXN5bmMtbG9naWMjdXNpbmctdGhlLXJlZHV4LXRodW5rLW1pZGRsZXdhcmUgZm9yIGV4YW1wbGVzLlwiKTtcbiAgICAgfVxuXG4gICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuIFlvdSBtYXkgaGF2ZSBtaXNzcGVsbGVkIGFuIGFjdGlvbiB0eXBlIHN0cmluZyBjb25zdGFudC4nKTtcbiAgICAgfVxuXG4gICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgIH1cblxuICAgICB0cnkge1xuICAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICAgfSBmaW5hbGx5IHtcbiAgICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgIH1cblxuICAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG5cbiAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICAgbGlzdGVuZXIoKTtcbiAgICAgfVxuXG4gICAgIHJldHVybiBhY3Rpb247XG4gICB9XG4gICAvKipcbiAgICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgICpcbiAgICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICAqXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgKi9cblxuXG4gICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnXCIgKyBraW5kT2YobmV4dFJlZHVjZXIpKTtcbiAgICAgfVxuXG4gICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7IC8vIFRoaXMgYWN0aW9uIGhhcyBhIHNpbWlsaWFyIGVmZmVjdCB0byBBY3Rpb25UeXBlcy5JTklULlxuICAgICAvLyBBbnkgcmVkdWNlcnMgdGhhdCBleGlzdGVkIGluIGJvdGggdGhlIG5ldyBhbmQgb2xkIHJvb3RSZWR1Y2VyXG4gICAgIC8vIHdpbGwgcmVjZWl2ZSB0aGUgcHJldmlvdXMgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gICAgIC8vIHRoZSBuZXcgc3RhdGUgdHJlZSB3aXRoIGFueSByZWxldmFudCBkYXRhIGZyb20gdGhlIG9sZCBvbmUuXG5cbiAgICAgZGlzcGF0Y2goe1xuICAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFUExBQ0VcbiAgICAgfSk7XG4gICB9XG4gICAvKipcbiAgICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgICovXG5cblxuICAgZnVuY3Rpb24gb2JzZXJ2YWJsZSgpIHtcbiAgICAgdmFyIF9yZWY7XG5cbiAgICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgICByZXR1cm4gX3JlZiA9IHtcbiAgICAgICAvKipcbiAgICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAgKi9cbiAgICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcgfHwgb2JzZXJ2ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihvYnNlcnZlcikgKyBcIidcIik7XG4gICAgICAgICB9XG5cbiAgICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG5cbiAgICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZVxuICAgICAgICAgfTtcbiAgICAgICB9XG4gICAgIH0sIF9yZWZbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICByZXR1cm4gdGhpcztcbiAgICAgfSwgX3JlZjtcbiAgIH0gLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAgLy8gdGhlIGluaXRpYWwgc3RhdGUgdHJlZS5cblxuXG4gICBkaXNwYXRjaCh7XG4gICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgIH0pO1xuICAgcmV0dXJuIF9yZWYyID0ge1xuICAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICAgfSwgX3JlZjJbJCRvYnNlcnZhYmxlXSA9IG9ic2VydmFibGUsIF9yZWYyO1xuIH1cbiAvKipcbiAgKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAgKlxuICAqICoqV2UgcmVjb21tZW5kIHVzaW5nIGBjb25maWd1cmVTdG9yZWAgZnJvbSB0aGVcbiAgKiBgQHJlZHV4anMvdG9vbGtpdGAgcGFja2FnZSoqLCB3aGljaCByZXBsYWNlcyBgY3JlYXRlU3RvcmVgOlxuICAqICoqaHR0cHM6Ly9yZWR1eC5qcy5vcmcvaW50cm9kdWN0aW9uL3doeS1ydGstaXMtcmVkdXgtdG9kYXkqKlxuICAqXG4gICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gICpcbiAgKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAgKlxuICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAgKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAgKlxuICAqIEBwYXJhbSB7YW55fSBbcHJlbG9hZGVkU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAgKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAgKlxuICAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbmhhbmNlcl0gVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAgKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAgKlxuICAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICAqL1xuXG4gdmFyIGxlZ2FjeV9jcmVhdGVTdG9yZSA9IGNyZWF0ZVN0b3JlO1xuXG4gLyoqXG4gICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICAqIEByZXR1cm5zIHt2b2lkfVxuICAqL1xuIGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgfVxuICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cblxuICAgdHJ5IHtcbiAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG5cbiB9XG5cbiBmdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuSU5JVCA/ICdwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICAgfVxuXG4gICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICAgcmV0dXJuIFwiVGhlIFwiICsgYXJndW1lbnROYW1lICsgXCIgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcXFwiXCIgKyBraW5kT2YoaW5wdXRTdGF0ZSkgKyBcIlxcXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgXCIgKyAoXCJrZXlzOiBcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIlwiKTtcbiAgIH1cblxuICAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTtcbiAgIH0pO1xuICAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgIH0pO1xuICAgaWYgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuUkVQTEFDRSkgcmV0dXJuO1xuXG4gICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgICByZXR1cm4gXCJVbmV4cGVjdGVkIFwiICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyBcIiBcIiArIChcIlxcXCJcIiArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiIGZvdW5kIGluIFwiICsgYXJndW1lbnROYW1lICsgXCIuIFwiKSArIFwiRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiBcIiArIChcIlxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLlwiKTtcbiAgIH1cbiB9XG5cbiBmdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgdmFyIHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuICAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gICAgIH0pO1xuXG4gICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uIFwiICsgXCJJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgXCIgKyBcImV4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgXCIgKyBcIm5vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb24ndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsIFwiICsgXCJ5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiKTtcbiAgICAgfVxuXG4gICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgICB0eXBlOiBBY3Rpb25UeXBlcy5QUk9CRV9VTktOT1dOX0FDVElPTigpXG4gICAgIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuIFwiICsgKFwiRG9uJ3QgdHJ5IHRvIGhhbmRsZSAnXCIgKyBBY3Rpb25UeXBlcy5JTklUICsgXCInIG9yIG90aGVyIGFjdGlvbnMgaW4gXFxcInJlZHV4LypcXFwiIFwiKSArIFwibmFtZXNwYWNlLiBUaGV5IGFyZSBjb25zaWRlcmVkIHByaXZhdGUuIEluc3RlYWQsIHlvdSBtdXN0IHJldHVybiB0aGUgXCIgKyBcImN1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsIFwiICsgXCJpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgXCIgKyBcImFjdGlvbiB0eXBlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgbm90IGJlIHVuZGVmaW5lZCwgYnV0IGNhbiBiZSBudWxsLlwiKTtcbiAgICAgfVxuICAgfSk7XG4gfVxuIC8qKlxuICAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAgKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAgKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gICpcbiAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICAqL1xuXG5cbiBmdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG5cbiAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xuICAgICB9XG4gICB9XG5cbiAgIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7IC8vIFRoaXMgaXMgdXNlZCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Qgd2FybiBhYm91dCB0aGUgc2FtZVxuICAgLy8ga2V5cyBtdWx0aXBsZSB0aW1lcy5cblxuICAgdmFyIHVuZXhwZWN0ZWRLZXlDYWNoZTtcblxuICAgdmFyIHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG5cbiAgIHRyeSB7XG4gICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcbiAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgc2hhcGVBc3NlcnRpb25FcnJvciA9IGU7XG4gICB9XG5cbiAgIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgc3RhdGUgPSB7fTtcbiAgICAgfVxuXG4gICAgIGlmIChzaGFwZUFzc2VydGlvbkVycm9yKSB7XG4gICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICAgfVxuXG4gICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcblxuICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICB2YXIgX2tleSA9IGZpbmFsUmVkdWNlcktleXNbX2ldO1xuICAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1tfa2V5XTtcbiAgICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG5cbiAgICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2hlbiBjYWxsZWQgd2l0aCBhbiBhY3Rpb24gb2YgdHlwZSBcIiArIChhY3Rpb25UeXBlID8gXCJcXFwiXCIgKyBTdHJpbmcoYWN0aW9uVHlwZSkgKyBcIlxcXCJcIiA6ICcodW5rbm93biB0eXBlKScpICsgXCIsIHRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXFxcIlwiICsgX2tleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQuIFwiICsgXCJUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuIFwiICsgXCJJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIik7XG4gICAgICAgfVxuXG4gICAgICAgbmV4dFN0YXRlW19rZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICAgfVxuXG4gICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhzdGF0ZSkubGVuZ3RoO1xuICAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICAgfTtcbiB9XG5cbiBmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICB9O1xuIH1cbiAvKipcbiAgKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gICogc2FtZSBrZXlzLCBidXQgd2l0aCBldmVyeSBmdW5jdGlvbiB3cmFwcGVkIGludG8gYSBgZGlzcGF0Y2hgIGNhbGwgc28gdGhleVxuICAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gICpcbiAgKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGFuIGFjdGlvbiBjcmVhdG9yIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAgKiBhbmQgZ2V0IGEgZGlzcGF0Y2ggd3JhcHBlZCBmdW5jdGlvbiBpbiByZXR1cm4uXG4gICpcbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gICpcbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICAqIHN0b3JlLlxuICAqXG4gICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAgKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAgKiBmdW5jdGlvbi5cbiAgKi9cblxuXG4gZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgIH1cblxuICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBidXQgaW5zdGVhZCByZWNlaXZlZDogJ1wiICsga2luZE9mKGFjdGlvbkNyZWF0b3JzKSArIFwiJy4gXCIgKyBcIkRpZCB5b3Ugd3JpdGUgXFxcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIiBpbnN0ZWFkIG9mIFxcXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIj9cIik7XG4gICB9XG5cbiAgIHZhciBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG5cbiAgIGZvciAodmFyIGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xuICAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG5cbiAgICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgICB9XG4gICB9XG5cbiAgIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xuIH1cblxuIC8qKlxuICAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gICpcbiAgKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAgKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAgKi9cbiBmdW5jdGlvbiBjb21wb3NlKCkge1xuICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgIH1cblxuICAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgIHJldHVybiBhcmc7XG4gICAgIH07XG4gICB9XG5cbiAgIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICAgcmV0dXJuIGZ1bmNzWzBdO1xuICAgfVxuXG4gICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgcmV0dXJuIGEoYi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykpO1xuICAgICB9O1xuICAgfSk7XG4gfVxuXG4gLyoqXG4gICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAgKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAgKlxuICAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAgKlxuICAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAgKlxuICAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAgKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gICpcbiAgKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAgKi9cblxuIGZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSgpIHtcbiAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICB9XG5cbiAgIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG5cbiAgICAgICB2YXIgX2Rpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rpc3BhdGNoaW5nIHdoaWxlIGNvbnN0cnVjdGluZyB5b3VyIG1pZGRsZXdhcmUgaXMgbm90IGFsbG93ZWQuICcgKyAnT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLicpO1xuICAgICAgIH07XG5cbiAgICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgICB9XG4gICAgICAgfTtcbiAgICAgICB2YXIgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgIH0pO1xuICAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodm9pZCAwLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdG9yZSwge1xuICAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgIH0pO1xuICAgICB9O1xuICAgfTtcbiB9XG5cbiBleHBvcnRzLl9fRE9fTk9UX1VTRV9fQWN0aW9uVHlwZXMgPSBBY3Rpb25UeXBlcztcbiBleHBvcnRzLmFwcGx5TWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZTtcbiBleHBvcnRzLmJpbmRBY3Rpb25DcmVhdG9ycyA9IGJpbmRBY3Rpb25DcmVhdG9ycztcbiBleHBvcnRzLmNvbWJpbmVSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2VycztcbiBleHBvcnRzLmNvbXBvc2UgPSBjb21wb3NlO1xuIGV4cG9ydHMuY3JlYXRlU3RvcmUgPSBjcmVhdGVTdG9yZTtcbiBleHBvcnRzLmxlZ2FjeV9jcmVhdGVTdG9yZSA9IGxlZ2FjeV9jcmVhdGVTdG9yZTtcblxuXG4vLyAjZW5kcmVnaW9uIE9SSUdJTkFMIENPREVcblxuX2Nqc0V4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcbl9fX2VzTW9kdWxlID0gbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZTtcbl9fX0RPX05PVF9VU0VfX0FjdGlvblR5cGVzID0gbW9kdWxlLmV4cG9ydHMuX19ET19OT1RfVVNFX19BY3Rpb25UeXBlcztcbl9hcHBseU1pZGRsZXdhcmUgPSBtb2R1bGUuZXhwb3J0cy5hcHBseU1pZGRsZXdhcmU7XG5fYmluZEFjdGlvbkNyZWF0b3JzID0gbW9kdWxlLmV4cG9ydHMuYmluZEFjdGlvbkNyZWF0b3JzO1xuX2NvbWJpbmVSZWR1Y2VycyA9IG1vZHVsZS5leHBvcnRzLmNvbWJpbmVSZWR1Y2Vycztcbl9jb21wb3NlID0gbW9kdWxlLmV4cG9ydHMuY29tcG9zZTtcbl9jcmVhdGVTdG9yZSA9IG1vZHVsZS5leHBvcnRzLmNyZWF0ZVN0b3JlO1xuX2xlZ2FjeV9jcmVhdGVTdG9yZSA9IG1vZHVsZS5leHBvcnRzLmxlZ2FjeV9jcmVhdGVTdG9yZTtcblxufSwge30pO1xuZXhwb3J0IHsgX2Nqc0V4cG9ydHMgYXMgZGVmYXVsdCB9O1xuZXhwb3J0IHsgX19janNNZXRhVVJMIH1cbiIsIi8vIEkgYW0gdGhlIGZhY2FkZSBtb2R1bGUgd2hvIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgQ29tbW9uSlMgbW9kdWxlICcuL3JlZHV4LmpzJ35cbmltcG9ydCB7IF9fY2pzTWV0YVVSTCBhcyByZXEgfSBmcm9tICcuL3JlZHV4LmpzJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnY2NlOi9pbnRlcm5hbC9tbC9janMtbG9hZGVyLm1qcyc7XG5pZiAoIXJlcSkge1xuICAgIGxvYWRlci50aHJvd0ludmFsaWRXcmFwcGVyKCcuL3JlZHV4LmpzJywgaW1wb3J0Lm1ldGEudXJsKTtcbn1cbmxvYWRlci5yZXF1aXJlKHJlcSk7XG5leHBvcnQgKiBmcm9tICcuL3JlZHV4LmpzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZCB9IGZyb20gJy4vcmVkdXguanMnXG5leHBvcnQgeyBkIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX2Nqc0xvYWRlciBmcm9tICdjY2U6L2ludGVybmFsL21sL2Nqcy1sb2FkZXIubWpzJztcbmltcG9ydCB7IF9fY2pzTWV0YVVSTCBhcyBfcmVxfSBmcm9tICcuLi9iYXRjaCc7XG5sZXQgX2Nqc0V4cG9ydHM7XG5sZXQgX19fZXNNb2R1bGU7XG5sZXQgX2FjdGlvblRyYW5zZm9ybWVyO1xubGV0IF9sb2dnZXI7XG5jb25zdCBfX2Nqc01ldGFVUkwgPSBpbXBvcnQubWV0YS51cmw7XG5fY2pzTG9hZGVyLmRlZmluZShfX2Nqc01ldGFVUkwsIGZ1bmN0aW9uIChleHBvcnRzLCByZXF1aXJlLCBtb2R1bGUsIF9fZmlsZW5hbWUsIF9fZGlybmFtZSkge1xuLy8gI3JlZ2lvbiBPUklHSU5BTCBDT0RFXG5cblxuIFwidXNlIHN0cmljdFwiO1xuXG4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICB2YWx1ZTogdHJ1ZVxuIH0pO1xuIGV4cG9ydHMuYWN0aW9uVHJhbnNmb3JtZXIgPSBhY3Rpb25UcmFuc2Zvcm1lcjtcbiBleHBvcnRzLmxvZ2dlciA9IHZvaWQgMDtcblxuIHZhciBfYmF0Y2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9iYXRjaFwiKSk7XG5cbiBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuIHZhciBiYXRjaFR5cGUgPSBfYmF0Y2hbXCJkZWZhdWx0XCJdLmdldFR5cGUoKTtcblxuIGZ1bmN0aW9uIGFjdGlvblRyYW5zZm9ybWVyKGFjdGlvbikge1xuICAgaWYgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gYmF0Y2hUeXBlKSB7XG4gICAgIGFjdGlvbi5wYXlsb2FkLnR5cGUgPSBiYXRjaFR5cGU7XG4gICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgIH1cblxuICAgcmV0dXJuIGFjdGlvbjtcbiB9XG5cbiB2YXIgbG9nZ2VyID0ge307XG4gZXhwb3J0cy5sb2dnZXIgPSBsb2dnZXI7XG5cbiB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChsZXZlbCkge1xuICAgaWYgKHR5cGVvZiBjb25zb2xlW2xldmVsXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICBsb2dnZXJbbGV2ZWxdID0gZnVuY3Rpb24gbGV2ZWxGbigpIHtcbiAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgfVxuXG4gICAgICAgdmFyIGxhc3RBcmcgPSBhcmdzLnBvcCgpO1xuXG4gICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGFzdEFyZykgJiYgbGFzdEFyZy50eXBlID09PSBiYXRjaFR5cGUpIHtcbiAgICAgICAgIGxhc3RBcmcuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgIGNvbnNvbGVbbGV2ZWxdLmFwcGx5KGNvbnNvbGUsIFtdLmNvbmNhdChhcmdzLCBbYWN0aW9uXSkpO1xuICAgICAgICAgfSk7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGFyZ3MucHVzaChsYXN0QXJnKTtcbiAgICAgICAgIGNvbnNvbGVbbGV2ZWxdLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgICAgIH1cbiAgICAgfTtcbiAgIH1cbiB9O1xuXG4gZm9yICh2YXIgbGV2ZWwgaW4gY29uc29sZSkge1xuICAgX2xvb3AobGV2ZWwpO1xuIH1cblxuLy8gI2VuZHJlZ2lvbiBPUklHSU5BTCBDT0RFXG5cbl9janNFeHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5fX19lc01vZHVsZSA9IG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGU7XG5fYWN0aW9uVHJhbnNmb3JtZXIgPSBtb2R1bGUuZXhwb3J0cy5hY3Rpb25UcmFuc2Zvcm1lcjtcbl9sb2dnZXIgPSBtb2R1bGUuZXhwb3J0cy5sb2dnZXI7XG5cbn0sICgpID0+ICh7XG4gICcuLi9iYXRjaCc6IF9yZXEsXG59KSk7XG5leHBvcnQgeyBfY2pzRXhwb3J0cyBhcyBkZWZhdWx0IH07XG5leHBvcnQgeyBfX2Nqc01ldGFVUkwgfVxuIiwiZXhwb3J0IHsgX0FzeW5jR2VuZXJhdG9yIGFzIEFzeW5jR2VuZXJhdG9yLCBfT3ZlcmxvYWRZaWVsZCBhcyBPdmVybG9hZFlpZWxkLCBfYXBwbHlEZWNzIGFzIGFwcGx5RGVjcywgX2FwcGx5RGVjczIyMDMgYXMgYXBwbHlEZWNzMjIwMywgX2FwcGx5RGVjczIyMDNSIGFzIGFwcGx5RGVjczIyMDNSLCBfYXBwbHlEZWNzMjMwMSBhcyBhcHBseURlY3MyMzAxLCBfYXBwbHlEZWNzMjMwNSBhcyBhcHBseURlY3MyMzA1LCBfYXN5bmNHZW5lcmF0b3JEZWxlZ2F0ZSBhcyBhc3luY0dlbmVyYXRvckRlbGVnYXRlLCBfYXN5bmNJdGVyYXRvciBhcyBhc3luY0l0ZXJhdG9yLCBfYXdhaXRBc3luY0dlbmVyYXRvciBhcyBhd2FpdEFzeW5jR2VuZXJhdG9yLCBfY2hlY2tJblJIUyBhcyBjaGVja0luUkhTLCBfZGVmaW5lQWNjZXNzb3IgYXMgZGVmaW5lQWNjZXNzb3IsIF9kaXNwb3NlIGFzIGRpc3Bvc2UsIF9pdGVyYWJsZVRvQXJyYXlMaW1pdCBhcyBpdGVyYWJsZVRvQXJyYXlMaW1pdCwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0TG9vc2UgYXMgaXRlcmFibGVUb0FycmF5TGltaXRMb29zZSwgX2pzeCBhcyBqc3gsIF9vYmplY3RTcHJlYWQyIGFzIG9iamVjdFNwcmVhZDIsIF9yZWdlbmVyYXRvclJ1bnRpbWUgYXMgcmVnZW5lcmF0b3JSdW50aW1lLCBfdHlwZW9mIGFzIHR5cGVvZiwgX3VzaW5nIGFzIHVzaW5nLCBfd3JhcFJlZ0V4cCBhcyB3cmFwUmVnRXhwLCBfQXdhaXRWYWx1ZSBhcyBBd2FpdFZhbHVlLCBfd3JhcEFzeW5jR2VuZXJhdG9yIGFzIHdyYXBBc3luY0dlbmVyYXRvciwgX2FzeW5jVG9HZW5lcmF0b3IgYXMgYXN5bmNUb0dlbmVyYXRvciwgX2NsYXNzQ2FsbENoZWNrIGFzIGNsYXNzQ2FsbENoZWNrLCBfY3JlYXRlQ2xhc3MgYXMgY3JlYXRlQ2xhc3MsIF9kZWZpbmVFbnVtZXJhYmxlUHJvcGVydGllcyBhcyBkZWZpbmVFbnVtZXJhYmxlUHJvcGVydGllcywgX2RlZmF1bHRzIGFzIGRlZmF1bHRzLCBfZGVmaW5lUHJvcGVydHkgYXMgZGVmaW5lUHJvcGVydHksIF9leHRlbmRzIGFzIGV4dGVuZHMsIF9vYmplY3RTcHJlYWQgYXMgb2JqZWN0U3ByZWFkLCBfaW5oZXJpdHMgYXMgaW5oZXJpdHMsIF9pbmhlcml0c0xvb3NlIGFzIGluaGVyaXRzTG9vc2UsIF9nZXRQcm90b3R5cGVPZiBhcyBnZXRQcm90b3R5cGVPZiwgX3NldFByb3RvdHlwZU9mIGFzIHNldFByb3RvdHlwZU9mLCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IGFzIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCwgX2NvbnN0cnVjdCBhcyBjb25zdHJ1Y3QsIF9pc05hdGl2ZUZ1bmN0aW9uIGFzIGlzTmF0aXZlRnVuY3Rpb24sIF93cmFwTmF0aXZlU3VwZXIgYXMgd3JhcE5hdGl2ZVN1cGVyLCBfaW5zdGFuY2VvZiBhcyBpbnN0YW5jZW9mLCBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IGFzIGludGVyb3BSZXF1aXJlRGVmYXVsdCwgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgYXMgaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCwgX25ld0Fycm93Q2hlY2sgYXMgbmV3QXJyb3dDaGVjaywgX29iamVjdERlc3RydWN0dXJpbmdFbXB0eSBhcyBvYmplY3REZXN0cnVjdHVyaW5nRW1wdHksIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGFzIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UsIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBhcyBvYmplY3RXaXRob3V0UHJvcGVydGllcywgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBhcyBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGFzIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIF9jcmVhdGVTdXBlciBhcyBjcmVhdGVTdXBlciwgX3N1cGVyUHJvcEJhc2UgYXMgc3VwZXJQcm9wQmFzZSwgX2dldCBhcyBnZXQsIF9zZXQgYXMgc2V0LCBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIGFzIHRhZ2dlZFRlbXBsYXRlTGl0ZXJhbCwgX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlIGFzIHRhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlLCBfcmVhZE9ubHlFcnJvciBhcyByZWFkT25seUVycm9yLCBfd3JpdGVPbmx5RXJyb3IgYXMgd3JpdGVPbmx5RXJyb3IsIF9jbGFzc05hbWVURFpFcnJvciBhcyBjbGFzc05hbWVURFpFcnJvciwgX3RlbXBvcmFsVW5kZWZpbmVkIGFzIHRlbXBvcmFsVW5kZWZpbmVkLCBfdGR6IGFzIHRkeiwgX3RlbXBvcmFsUmVmIGFzIHRlbXBvcmFsUmVmLCBfc2xpY2VkVG9BcnJheSBhcyBzbGljZWRUb0FycmF5LCBfc2xpY2VkVG9BcnJheUxvb3NlIGFzIHNsaWNlZFRvQXJyYXlMb29zZSwgX3RvQXJyYXkgYXMgdG9BcnJheSwgX3RvQ29uc3VtYWJsZUFycmF5IGFzIHRvQ29uc3VtYWJsZUFycmF5LCBfYXJyYXlXaXRob3V0SG9sZXMgYXMgYXJyYXlXaXRob3V0SG9sZXMsIF9hcnJheVdpdGhIb2xlcyBhcyBhcnJheVdpdGhIb2xlcywgX21heWJlQXJyYXlMaWtlIGFzIG1heWJlQXJyYXlMaWtlLCBfaXRlcmFibGVUb0FycmF5IGFzIGl0ZXJhYmxlVG9BcnJheSwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGFzIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBfYXJyYXlMaWtlVG9BcnJheSBhcyBhcnJheUxpa2VUb0FycmF5LCBfbm9uSXRlcmFibGVTcHJlYWQgYXMgbm9uSXRlcmFibGVTcHJlYWQsIF9ub25JdGVyYWJsZVJlc3QgYXMgbm9uSXRlcmFibGVSZXN0LCBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciBhcyBjcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyLCBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIGFzIGNyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSwgX3NraXBGaXJzdEdlbmVyYXRvck5leHQgYXMgc2tpcEZpcnN0R2VuZXJhdG9yTmV4dCwgX3RvUHJpbWl0aXZlIGFzIHRvUHJpbWl0aXZlLCBfdG9Qcm9wZXJ0eUtleSBhcyB0b1Byb3BlcnR5S2V5LCBfaW5pdGlhbGl6ZXJXYXJuaW5nSGVscGVyIGFzIGluaXRpYWxpemVyV2FybmluZ0hlbHBlciwgX2luaXRpYWxpemVyRGVmaW5lUHJvcGVydHkgYXMgaW5pdGlhbGl6ZXJEZWZpbmVQcm9wZXJ0eSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvciBhcyBhcHBseURlY29yYXRlZERlc2NyaXB0b3IsIF9jbGFzc1ByaXZhdGVGaWVsZExvb3NlS2V5IGFzIGNsYXNzUHJpdmF0ZUZpZWxkTG9vc2VLZXksIF9jbGFzc1ByaXZhdGVGaWVsZExvb3NlQmFzZSBhcyBjbGFzc1ByaXZhdGVGaWVsZExvb3NlQmFzZSwgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IGFzIGNsYXNzUHJpdmF0ZUZpZWxkR2V0LCBfY2xhc3NQcml2YXRlRmllbGRTZXQgYXMgY2xhc3NQcml2YXRlRmllbGRTZXQsIF9jbGFzc1ByaXZhdGVGaWVsZERlc3RydWN0dXJlU2V0IGFzIGNsYXNzUHJpdmF0ZUZpZWxkRGVzdHJ1Y3R1cmVTZXQsIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IgYXMgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLCBfY2xhc3NTdGF0aWNQcml2YXRlRmllbGRTcGVjR2V0IGFzIGNsYXNzU3RhdGljUHJpdmF0ZUZpZWxkU3BlY0dldCwgX2NsYXNzU3RhdGljUHJpdmF0ZUZpZWxkU3BlY1NldCBhcyBjbGFzc1N0YXRpY1ByaXZhdGVGaWVsZFNwZWNTZXQsIF9jbGFzc1N0YXRpY1ByaXZhdGVNZXRob2RHZXQgYXMgY2xhc3NTdGF0aWNQcml2YXRlTWV0aG9kR2V0LCBfY2xhc3NTdGF0aWNQcml2YXRlTWV0aG9kU2V0IGFzIGNsYXNzU3RhdGljUHJpdmF0ZU1ldGhvZFNldCwgX2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0IGFzIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LCBfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQgYXMgY2xhc3NBcHBseURlc2NyaXB0b3JTZXQsIF9jbGFzc0FwcGx5RGVzY3JpcHRvckRlc3RydWN0dXJlU2V0IGFzIGNsYXNzQXBwbHlEZXNjcmlwdG9yRGVzdHJ1Y3R1cmVTZXQsIF9jbGFzc1N0YXRpY1ByaXZhdGVGaWVsZERlc3RydWN0dXJlU2V0IGFzIGNsYXNzU3RhdGljUHJpdmF0ZUZpZWxkRGVzdHJ1Y3R1cmVTZXQsIF9jbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0FjY2VzcyBhcyBjbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0FjY2VzcywgX2NsYXNzQ2hlY2tQcml2YXRlU3RhdGljRmllbGREZXNjcmlwdG9yIGFzIGNsYXNzQ2hlY2tQcml2YXRlU3RhdGljRmllbGREZXNjcmlwdG9yLCBfZGVjb3JhdGUgYXMgZGVjb3JhdGUsIF9jbGFzc1ByaXZhdGVNZXRob2RHZXQgYXMgY2xhc3NQcml2YXRlTWV0aG9kR2V0LCBfY2hlY2tQcml2YXRlUmVkZWNsYXJhdGlvbiBhcyBjaGVja1ByaXZhdGVSZWRlY2xhcmF0aW9uLCBfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyBhcyBjbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjLCBfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMgYXMgY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMsIF9jbGFzc1ByaXZhdGVNZXRob2RTZXQgYXMgY2xhc3NQcml2YXRlTWV0aG9kU2V0LCBfaWRlbnRpdHkgYXMgaWRlbnRpdHkgfTtcbmZ1bmN0aW9uIF9Bc3luY0dlbmVyYXRvcihlKSB7XG4gIHZhciByLCB0O1xuICBmdW5jdGlvbiByZXN1bWUociwgdCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbiA9IGVbcl0odCksXG4gICAgICAgIG8gPSBuLnZhbHVlLFxuICAgICAgICB1ID0gbyBpbnN0YW5jZW9mIF9PdmVybG9hZFlpZWxkO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHUgPyBvLnYgOiBvKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh1KSB7XG4gICAgICAgICAgdmFyIGkgPSBcInJldHVyblwiID09PSByID8gXCJyZXR1cm5cIiA6IFwibmV4dFwiO1xuICAgICAgICAgIGlmICghby5rIHx8IHQuZG9uZSkgcmV0dXJuIHJlc3VtZShpLCB0KTtcbiAgICAgICAgICB0ID0gZVtpXSh0KS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZXR0bGUobi5kb25lID8gXCJyZXR1cm5cIiA6IFwibm9ybWFsXCIsIHQpO1xuICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgZSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2V0dGxlKGUsIG4pIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJyZXR1cm5cIjpcbiAgICAgICAgci5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogbixcbiAgICAgICAgICBkb25lOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwidGhyb3dcIjpcbiAgICAgICAgci5yZWplY3Qobik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgci5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogbixcbiAgICAgICAgICBkb25lOiAhMVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgKHIgPSByLm5leHQpID8gcmVzdW1lKHIua2V5LCByLmFyZykgOiB0ID0gbnVsbDtcbiAgfVxuICB0aGlzLl9pbnZva2UgPSBmdW5jdGlvbiAoZSwgbikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAobywgdSkge1xuICAgICAgdmFyIGkgPSB7XG4gICAgICAgIGtleTogZSxcbiAgICAgICAgYXJnOiBuLFxuICAgICAgICByZXNvbHZlOiBvLFxuICAgICAgICByZWplY3Q6IHUsXG4gICAgICAgIG5leHQ6IG51bGxcbiAgICAgIH07XG4gICAgICB0ID8gdCA9IHQubmV4dCA9IGkgOiAociA9IHQgPSBpLCByZXN1bWUoZSwgbikpO1xuICAgIH0pO1xuICB9LCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUucmV0dXJuICYmICh0aGlzLnJldHVybiA9IHZvaWQgMCk7XG59XG5fQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1wiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCJdID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn0sIF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGUpO1xufSwgX0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBlKTtcbn0sIF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBlKTtcbn07XG5mdW5jdGlvbiBfT3ZlcmxvYWRZaWVsZCh0LCBlKSB7XG4gIHRoaXMudiA9IHQsIHRoaXMuayA9IGU7XG59XG5mdW5jdGlvbiBvbGRfY3JlYXRlTWV0YWRhdGFNZXRob2RzRm9yUHJvcGVydHkoZSwgdCwgYSwgcikge1xuICByZXR1cm4ge1xuICAgIGdldE1ldGFkYXRhOiBmdW5jdGlvbiAobykge1xuICAgICAgb2xkX2Fzc2VydE5vdEZpbmlzaGVkKHIsIFwiZ2V0TWV0YWRhdGFcIiksIG9sZF9hc3NlcnRNZXRhZGF0YUtleShvKTtcbiAgICAgIHZhciBpID0gZVtvXTtcbiAgICAgIGlmICh2b2lkIDAgIT09IGkpIGlmICgxID09PSB0KSB7XG4gICAgICAgIHZhciBuID0gaS5wdWJsaWM7XG4gICAgICAgIGlmICh2b2lkIDAgIT09IG4pIHJldHVybiBuW2FdO1xuICAgICAgfSBlbHNlIGlmICgyID09PSB0KSB7XG4gICAgICAgIHZhciBsID0gaS5wcml2YXRlO1xuICAgICAgICBpZiAodm9pZCAwICE9PSBsKSByZXR1cm4gbC5nZXQoYSk7XG4gICAgICB9IGVsc2UgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGksIFwiY29uc3RydWN0b3JcIikpIHJldHVybiBpLmNvbnN0cnVjdG9yO1xuICAgIH0sXG4gICAgc2V0TWV0YWRhdGE6IGZ1bmN0aW9uIChvLCBpKSB7XG4gICAgICBvbGRfYXNzZXJ0Tm90RmluaXNoZWQociwgXCJzZXRNZXRhZGF0YVwiKSwgb2xkX2Fzc2VydE1ldGFkYXRhS2V5KG8pO1xuICAgICAgdmFyIG4gPSBlW29dO1xuICAgICAgaWYgKHZvaWQgMCA9PT0gbiAmJiAobiA9IGVbb10gPSB7fSksIDEgPT09IHQpIHtcbiAgICAgICAgdmFyIGwgPSBuLnB1YmxpYztcbiAgICAgICAgdm9pZCAwID09PSBsICYmIChsID0gbi5wdWJsaWMgPSB7fSksIGxbYV0gPSBpO1xuICAgICAgfSBlbHNlIGlmICgyID09PSB0KSB7XG4gICAgICAgIHZhciBzID0gbi5wcml2O1xuICAgICAgICB2b2lkIDAgPT09IHMgJiYgKHMgPSBuLnByaXZhdGUgPSBuZXcgTWFwKCkpLCBzLnNldChhLCBpKTtcbiAgICAgIH0gZWxzZSBuLmNvbnN0cnVjdG9yID0gaTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBvbGRfY29udmVydE1ldGFkYXRhTWFwVG9GaW5hbChlLCB0KSB7XG4gIHZhciBhID0gZVtTeW1ib2wubWV0YWRhdGEgfHwgU3ltYm9sLmZvcihcIlN5bWJvbC5tZXRhZGF0YVwiKV0sXG4gICAgciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7XG4gIGlmICgwICE9PSByLmxlbmd0aCkge1xuICAgIGZvciAodmFyIG8gPSAwOyBvIDwgci5sZW5ndGg7IG8rKykge1xuICAgICAgdmFyIGkgPSByW29dLFxuICAgICAgICBuID0gdFtpXSxcbiAgICAgICAgbCA9IGEgPyBhW2ldIDogbnVsbCxcbiAgICAgICAgcyA9IG4ucHVibGljLFxuICAgICAgICBjID0gbCA/IGwucHVibGljIDogbnVsbDtcbiAgICAgIHMgJiYgYyAmJiBPYmplY3Quc2V0UHJvdG90eXBlT2YocywgYyk7XG4gICAgICB2YXIgZCA9IG4ucHJpdmF0ZTtcbiAgICAgIGlmIChkKSB7XG4gICAgICAgIHZhciB1ID0gQXJyYXkuZnJvbShkLnZhbHVlcygpKSxcbiAgICAgICAgICBmID0gbCA/IGwucHJpdmF0ZSA6IG51bGw7XG4gICAgICAgIGYgJiYgKHUgPSB1LmNvbmNhdChmKSksIG4ucHJpdmF0ZSA9IHU7XG4gICAgICB9XG4gICAgICBsICYmIE9iamVjdC5zZXRQcm90b3R5cGVPZihuLCBsKTtcbiAgICB9XG4gICAgYSAmJiBPYmplY3Quc2V0UHJvdG90eXBlT2YodCwgYSksIGVbU3ltYm9sLm1ldGFkYXRhIHx8IFN5bWJvbC5mb3IoXCJTeW1ib2wubWV0YWRhdGFcIildID0gdDtcbiAgfVxufVxuZnVuY3Rpb24gb2xkX2NyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKGUsIHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgb2xkX2Fzc2VydE5vdEZpbmlzaGVkKHQsIFwiYWRkSW5pdGlhbGl6ZXJcIiksIG9sZF9hc3NlcnRDYWxsYWJsZShhLCBcIkFuIGluaXRpYWxpemVyXCIpLCBlLnB1c2goYSk7XG4gIH07XG59XG5mdW5jdGlvbiBvbGRfbWVtYmVyRGVjKGUsIHQsIGEsIHIsIG8sIGksIG4sIGwsIHMpIHtcbiAgdmFyIGM7XG4gIHN3aXRjaCAoaSkge1xuICAgIGNhc2UgMTpcbiAgICAgIGMgPSBcImFjY2Vzc29yXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBjID0gXCJtZXRob2RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGMgPSBcImdldHRlclwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgYyA9IFwic2V0dGVyXCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYyA9IFwiZmllbGRcIjtcbiAgfVxuICB2YXIgZCxcbiAgICB1LFxuICAgIGYgPSB7XG4gICAgICBraW5kOiBjLFxuICAgICAgbmFtZTogbCA/IFwiI1wiICsgdCA6IHQsXG4gICAgICBpc1N0YXRpYzogbixcbiAgICAgIGlzUHJpdmF0ZTogbFxuICAgIH0sXG4gICAgcCA9IHtcbiAgICAgIHY6ICExXG4gICAgfTtcbiAgaWYgKDAgIT09IGkgJiYgKGYuYWRkSW5pdGlhbGl6ZXIgPSBvbGRfY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QobywgcCkpLCBsKSB7XG4gICAgZCA9IDIsIHUgPSBTeW1ib2wodCk7XG4gICAgdmFyIHYgPSB7fTtcbiAgICAwID09PSBpID8gKHYuZ2V0ID0gYS5nZXQsIHYuc2V0ID0gYS5zZXQpIDogMiA9PT0gaSA/IHYuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEudmFsdWU7XG4gICAgfSA6ICgxICE9PSBpICYmIDMgIT09IGkgfHwgKHYuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEuZ2V0LmNhbGwodGhpcyk7XG4gICAgfSksIDEgIT09IGkgJiYgNCAhPT0gaSB8fCAodi5zZXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgYS5zZXQuY2FsbCh0aGlzLCBlKTtcbiAgICB9KSksIGYuYWNjZXNzID0gdjtcbiAgfSBlbHNlIGQgPSAxLCB1ID0gdDtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZShzLCBPYmplY3QuYXNzaWduKGYsIG9sZF9jcmVhdGVNZXRhZGF0YU1ldGhvZHNGb3JQcm9wZXJ0eShyLCBkLCB1LCBwKSkpO1xuICB9IGZpbmFsbHkge1xuICAgIHAudiA9ICEwO1xuICB9XG59XG5mdW5jdGlvbiBvbGRfYXNzZXJ0Tm90RmluaXNoZWQoZSwgdCkge1xuICBpZiAoZS52KSB0aHJvdyBuZXcgRXJyb3IoXCJhdHRlbXB0ZWQgdG8gY2FsbCBcIiArIHQgKyBcIiBhZnRlciBkZWNvcmF0aW9uIHdhcyBmaW5pc2hlZFwiKTtcbn1cbmZ1bmN0aW9uIG9sZF9hc3NlcnRNZXRhZGF0YUtleShlKSB7XG4gIGlmIChcInN5bWJvbFwiICE9IHR5cGVvZiBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWV0YWRhdGEga2V5cyBtdXN0IGJlIHN5bWJvbHMsIHJlY2VpdmVkOiBcIiArIGUpO1xufVxuZnVuY3Rpb24gb2xkX2Fzc2VydENhbGxhYmxlKGUsIHQpIHtcbiAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZSkgdGhyb3cgbmV3IFR5cGVFcnJvcih0ICsgXCIgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xufVxuZnVuY3Rpb24gb2xkX2Fzc2VydFZhbGlkUmV0dXJuVmFsdWUoZSwgdCkge1xuICB2YXIgYSA9IHR5cGVvZiB0O1xuICBpZiAoMSA9PT0gZSkge1xuICAgIGlmIChcIm9iamVjdFwiICE9PSBhIHx8IG51bGwgPT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhY2Nlc3NvciBkZWNvcmF0b3JzIG11c3QgcmV0dXJuIGFuIG9iamVjdCB3aXRoIGdldCwgc2V0LCBvciBpbml0IHByb3BlcnRpZXMgb3Igdm9pZCAwXCIpO1xuICAgIHZvaWQgMCAhPT0gdC5nZXQgJiYgb2xkX2Fzc2VydENhbGxhYmxlKHQuZ2V0LCBcImFjY2Vzc29yLmdldFwiKSwgdm9pZCAwICE9PSB0LnNldCAmJiBvbGRfYXNzZXJ0Q2FsbGFibGUodC5zZXQsIFwiYWNjZXNzb3Iuc2V0XCIpLCB2b2lkIDAgIT09IHQuaW5pdCAmJiBvbGRfYXNzZXJ0Q2FsbGFibGUodC5pbml0LCBcImFjY2Vzc29yLmluaXRcIiksIHZvaWQgMCAhPT0gdC5pbml0aWFsaXplciAmJiBvbGRfYXNzZXJ0Q2FsbGFibGUodC5pbml0aWFsaXplciwgXCJhY2Nlc3Nvci5pbml0aWFsaXplclwiKTtcbiAgfSBlbHNlIGlmIChcImZ1bmN0aW9uXCIgIT09IGEpIHtcbiAgICB2YXIgcjtcbiAgICB0aHJvdyByID0gMCA9PT0gZSA/IFwiZmllbGRcIiA6IDEwID09PSBlID8gXCJjbGFzc1wiIDogXCJtZXRob2RcIiwgbmV3IFR5cGVFcnJvcihyICsgXCIgZGVjb3JhdG9ycyBtdXN0IHJldHVybiBhIGZ1bmN0aW9uIG9yIHZvaWQgMFwiKTtcbiAgfVxufVxuZnVuY3Rpb24gb2xkX2dldEluaXQoZSkge1xuICB2YXIgdDtcbiAgcmV0dXJuIG51bGwgPT0gKHQgPSBlLmluaXQpICYmICh0ID0gZS5pbml0aWFsaXplcikgJiYgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlLndhcm4oXCIuaW5pdGlhbGl6ZXIgaGFzIGJlZW4gcmVuYW1lZCB0byAuaW5pdCBhcyBvZiBNYXJjaCAyMDIyXCIpLCB0O1xufVxuZnVuY3Rpb24gb2xkX2FwcGx5TWVtYmVyRGVjKGUsIHQsIGEsIHIsIG8sIGksIG4sIGwsIHMpIHtcbiAgdmFyIGMsXG4gICAgZCxcbiAgICB1LFxuICAgIGYsXG4gICAgcCxcbiAgICB2LFxuICAgIGggPSBhWzBdO1xuICBpZiAobiA/IGMgPSAwID09PSBvIHx8IDEgPT09IG8gPyB7XG4gICAgZ2V0OiBhWzNdLFxuICAgIHNldDogYVs0XVxuICB9IDogMyA9PT0gbyA/IHtcbiAgICBnZXQ6IGFbM11cbiAgfSA6IDQgPT09IG8gPyB7XG4gICAgc2V0OiBhWzNdXG4gIH0gOiB7XG4gICAgdmFsdWU6IGFbM11cbiAgfSA6IDAgIT09IG8gJiYgKGMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKSwgMSA9PT0gbyA/IHUgPSB7XG4gICAgZ2V0OiBjLmdldCxcbiAgICBzZXQ6IGMuc2V0XG4gIH0gOiAyID09PSBvID8gdSA9IGMudmFsdWUgOiAzID09PSBvID8gdSA9IGMuZ2V0IDogNCA9PT0gbyAmJiAodSA9IGMuc2V0KSwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBoKSB2b2lkIDAgIT09IChmID0gb2xkX21lbWJlckRlYyhoLCByLCBjLCBsLCBzLCBvLCBpLCBuLCB1KSkgJiYgKG9sZF9hc3NlcnRWYWxpZFJldHVyblZhbHVlKG8sIGYpLCAwID09PSBvID8gZCA9IGYgOiAxID09PSBvID8gKGQgPSBvbGRfZ2V0SW5pdChmKSwgcCA9IGYuZ2V0IHx8IHUuZ2V0LCB2ID0gZi5zZXQgfHwgdS5zZXQsIHUgPSB7XG4gICAgZ2V0OiBwLFxuICAgIHNldDogdlxuICB9KSA6IHUgPSBmKTtlbHNlIGZvciAodmFyIHkgPSBoLmxlbmd0aCAtIDE7IHkgPj0gMDsgeS0tKSB7XG4gICAgdmFyIGI7XG4gICAgaWYgKHZvaWQgMCAhPT0gKGYgPSBvbGRfbWVtYmVyRGVjKGhbeV0sIHIsIGMsIGwsIHMsIG8sIGksIG4sIHUpKSkgb2xkX2Fzc2VydFZhbGlkUmV0dXJuVmFsdWUobywgZiksIDAgPT09IG8gPyBiID0gZiA6IDEgPT09IG8gPyAoYiA9IG9sZF9nZXRJbml0KGYpLCBwID0gZi5nZXQgfHwgdS5nZXQsIHYgPSBmLnNldCB8fCB1LnNldCwgdSA9IHtcbiAgICAgIGdldDogcCxcbiAgICAgIHNldDogdlxuICAgIH0pIDogdSA9IGYsIHZvaWQgMCAhPT0gYiAmJiAodm9pZCAwID09PSBkID8gZCA9IGIgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGQgPyBkID0gW2QsIGJdIDogZC5wdXNoKGIpKTtcbiAgfVxuICBpZiAoMCA9PT0gbyB8fCAxID09PSBvKSB7XG4gICAgaWYgKHZvaWQgMCA9PT0gZCkgZCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gdDtcbiAgICB9O2Vsc2UgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZCkge1xuICAgICAgdmFyIGcgPSBkO1xuICAgICAgZCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIGZvciAodmFyIGEgPSB0LCByID0gMDsgciA8IGcubGVuZ3RoOyByKyspIGEgPSBnW3JdLmNhbGwoZSwgYSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG0gPSBkO1xuICAgICAgZCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiBtLmNhbGwoZSwgdCk7XG4gICAgICB9O1xuICAgIH1cbiAgICBlLnB1c2goZCk7XG4gIH1cbiAgMCAhPT0gbyAmJiAoMSA9PT0gbyA/IChjLmdldCA9IHUuZ2V0LCBjLnNldCA9IHUuc2V0KSA6IDIgPT09IG8gPyBjLnZhbHVlID0gdSA6IDMgPT09IG8gPyBjLmdldCA9IHUgOiA0ID09PSBvICYmIChjLnNldCA9IHUpLCBuID8gMSA9PT0gbyA/IChlLnB1c2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICByZXR1cm4gdS5nZXQuY2FsbChlLCB0KTtcbiAgfSksIGUucHVzaChmdW5jdGlvbiAoZSwgdCkge1xuICAgIHJldHVybiB1LnNldC5jYWxsKGUsIHQpO1xuICB9KSkgOiAyID09PSBvID8gZS5wdXNoKHUpIDogZS5wdXNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgcmV0dXJuIHUuY2FsbChlLCB0KTtcbiAgfSkgOiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgciwgYykpO1xufVxuZnVuY3Rpb24gb2xkX2FwcGx5TWVtYmVyRGVjcyhlLCB0LCBhLCByLCBvKSB7XG4gIGZvciAodmFyIGksIG4sIGwgPSBuZXcgTWFwKCksIHMgPSBuZXcgTWFwKCksIGMgPSAwOyBjIDwgby5sZW5ndGg7IGMrKykge1xuICAgIHZhciBkID0gb1tjXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkKSkge1xuICAgICAgdmFyIHUsXG4gICAgICAgIGYsXG4gICAgICAgIHAsXG4gICAgICAgIHYgPSBkWzFdLFxuICAgICAgICBoID0gZFsyXSxcbiAgICAgICAgeSA9IGQubGVuZ3RoID4gMyxcbiAgICAgICAgYiA9IHYgPj0gNTtcbiAgICAgIGlmIChiID8gKHUgPSB0LCBmID0gciwgMCAhPT0gKHYgLT0gNSkgJiYgKHAgPSBuID0gbiB8fCBbXSkpIDogKHUgPSB0LnByb3RvdHlwZSwgZiA9IGEsIDAgIT09IHYgJiYgKHAgPSBpID0gaSB8fCBbXSkpLCAwICE9PSB2ICYmICF5KSB7XG4gICAgICAgIHZhciBnID0gYiA/IHMgOiBsLFxuICAgICAgICAgIG0gPSBnLmdldChoKSB8fCAwO1xuICAgICAgICBpZiAoITAgPT09IG0gfHwgMyA9PT0gbSAmJiA0ICE9PSB2IHx8IDQgPT09IG0gJiYgMyAhPT0gdikgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdGVkIHRvIGRlY29yYXRlIGEgcHVibGljIG1ldGhvZC9hY2Nlc3NvciB0aGF0IGhhcyB0aGUgc2FtZSBuYW1lIGFzIGEgcHJldmlvdXNseSBkZWNvcmF0ZWQgcHVibGljIG1ldGhvZC9hY2Nlc3Nvci4gVGhpcyBpcyBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBieSB0aGUgZGVjb3JhdG9ycyBwbHVnaW4uIFByb3BlcnR5IG5hbWUgd2FzOiBcIiArIGgpO1xuICAgICAgICAhbSAmJiB2ID4gMiA/IGcuc2V0KGgsIHYpIDogZy5zZXQoaCwgITApO1xuICAgICAgfVxuICAgICAgb2xkX2FwcGx5TWVtYmVyRGVjKGUsIHUsIGQsIGgsIHYsIGIsIHksIGYsIHApO1xuICAgIH1cbiAgfVxuICBvbGRfcHVzaEluaXRpYWxpemVycyhlLCBpKSwgb2xkX3B1c2hJbml0aWFsaXplcnMoZSwgbik7XG59XG5mdW5jdGlvbiBvbGRfcHVzaEluaXRpYWxpemVycyhlLCB0KSB7XG4gIHQgJiYgZS5wdXNoKGZ1bmN0aW9uIChlKSB7XG4gICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0Lmxlbmd0aDsgYSsrKSB0W2FdLmNhbGwoZSk7XG4gICAgcmV0dXJuIGU7XG4gIH0pO1xufVxuZnVuY3Rpb24gb2xkX2FwcGx5Q2xhc3NEZWNzKGUsIHQsIGEsIHIpIHtcbiAgaWYgKHIubGVuZ3RoID4gMCkge1xuICAgIGZvciAodmFyIG8gPSBbXSwgaSA9IHQsIG4gPSB0Lm5hbWUsIGwgPSByLmxlbmd0aCAtIDE7IGwgPj0gMDsgbC0tKSB7XG4gICAgICB2YXIgcyA9IHtcbiAgICAgICAgdjogITFcbiAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgYyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAga2luZDogXCJjbGFzc1wiLFxuICAgICAgICAgICAgbmFtZTogbixcbiAgICAgICAgICAgIGFkZEluaXRpYWxpemVyOiBvbGRfY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QobywgcylcbiAgICAgICAgICB9LCBvbGRfY3JlYXRlTWV0YWRhdGFNZXRob2RzRm9yUHJvcGVydHkoYSwgMCwgbiwgcykpLFxuICAgICAgICAgIGQgPSByW2xdKGksIGMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgcy52ID0gITA7XG4gICAgICB9XG4gICAgICB2b2lkIDAgIT09IGQgJiYgKG9sZF9hc3NlcnRWYWxpZFJldHVyblZhbHVlKDEwLCBkKSwgaSA9IGQpO1xuICAgIH1cbiAgICBlLnB1c2goaSwgZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCBvLmxlbmd0aDsgZSsrKSBvW2VdLmNhbGwoaSk7XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9hcHBseURlY3MoZSwgdCwgYSkge1xuICB2YXIgciA9IFtdLFxuICAgIG8gPSB7fSxcbiAgICBpID0ge307XG4gIHJldHVybiBvbGRfYXBwbHlNZW1iZXJEZWNzKHIsIGUsIGksIG8sIHQpLCBvbGRfY29udmVydE1ldGFkYXRhTWFwVG9GaW5hbChlLnByb3RvdHlwZSwgaSksIG9sZF9hcHBseUNsYXNzRGVjcyhyLCBlLCBvLCBhKSwgb2xkX2NvbnZlcnRNZXRhZGF0YU1hcFRvRmluYWwoZSwgbyksIHI7XG59XG5mdW5jdGlvbiBhcHBseURlY3MyMjAzRmFjdG9yeSgpIHtcbiAgZnVuY3Rpb24gY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QoZSwgdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocikge1xuICAgICAgIWZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIGlmIChlLnYpIHRocm93IG5ldyBFcnJvcihcImF0dGVtcHRlZCB0byBjYWxsIFwiICsgdCArIFwiIGFmdGVyIGRlY29yYXRpb24gd2FzIGZpbmlzaGVkXCIpO1xuICAgICAgfSh0LCBcImFkZEluaXRpYWxpemVyXCIpLCBhc3NlcnRDYWxsYWJsZShyLCBcIkFuIGluaXRpYWxpemVyXCIpLCBlLnB1c2gocik7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtZW1iZXJEZWMoZSwgdCwgciwgYSwgbiwgaSwgcywgbykge1xuICAgIHZhciBjO1xuICAgIHN3aXRjaCAobikge1xuICAgICAgY2FzZSAxOlxuICAgICAgICBjID0gXCJhY2Nlc3NvclwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgYyA9IFwibWV0aG9kXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBjID0gXCJnZXR0ZXJcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGMgPSBcInNldHRlclwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGMgPSBcImZpZWxkXCI7XG4gICAgfVxuICAgIHZhciBsLFxuICAgICAgdSxcbiAgICAgIGYgPSB7XG4gICAgICAgIGtpbmQ6IGMsXG4gICAgICAgIG5hbWU6IHMgPyBcIiNcIiArIHQgOiB0LFxuICAgICAgICBzdGF0aWM6IGksXG4gICAgICAgIHByaXZhdGU6IHNcbiAgICAgIH0sXG4gICAgICBwID0ge1xuICAgICAgICB2OiAhMVxuICAgICAgfTtcbiAgICAwICE9PSBuICYmIChmLmFkZEluaXRpYWxpemVyID0gY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QoYSwgcCkpLCAwID09PSBuID8gcyA/IChsID0gci5nZXQsIHUgPSByLnNldCkgOiAobCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzW3RdO1xuICAgIH0sIHUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpc1t0XSA9IGU7XG4gICAgfSkgOiAyID09PSBuID8gbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByLnZhbHVlO1xuICAgIH0gOiAoMSAhPT0gbiAmJiAzICE9PSBuIHx8IChsID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHIuZ2V0LmNhbGwodGhpcyk7XG4gICAgfSksIDEgIT09IG4gJiYgNCAhPT0gbiB8fCAodSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICByLnNldC5jYWxsKHRoaXMsIGUpO1xuICAgIH0pKSwgZi5hY2Nlc3MgPSBsICYmIHUgPyB7XG4gICAgICBnZXQ6IGwsXG4gICAgICBzZXQ6IHVcbiAgICB9IDogbCA/IHtcbiAgICAgIGdldDogbFxuICAgIH0gOiB7XG4gICAgICBzZXQ6IHVcbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZShvLCBmKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgcC52ID0gITA7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGFzc2VydENhbGxhYmxlKGUsIHQpIHtcbiAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKHQgKyBcIiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgZnVuY3Rpb24gYXNzZXJ0VmFsaWRSZXR1cm5WYWx1ZShlLCB0KSB7XG4gICAgdmFyIHIgPSB0eXBlb2YgdDtcbiAgICBpZiAoMSA9PT0gZSkge1xuICAgICAgaWYgKFwib2JqZWN0XCIgIT09IHIgfHwgbnVsbCA9PT0gdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcImFjY2Vzc29yIGRlY29yYXRvcnMgbXVzdCByZXR1cm4gYW4gb2JqZWN0IHdpdGggZ2V0LCBzZXQsIG9yIGluaXQgcHJvcGVydGllcyBvciB2b2lkIDBcIik7XG4gICAgICB2b2lkIDAgIT09IHQuZ2V0ICYmIGFzc2VydENhbGxhYmxlKHQuZ2V0LCBcImFjY2Vzc29yLmdldFwiKSwgdm9pZCAwICE9PSB0LnNldCAmJiBhc3NlcnRDYWxsYWJsZSh0LnNldCwgXCJhY2Nlc3Nvci5zZXRcIiksIHZvaWQgMCAhPT0gdC5pbml0ICYmIGFzc2VydENhbGxhYmxlKHQuaW5pdCwgXCJhY2Nlc3Nvci5pbml0XCIpO1xuICAgIH0gZWxzZSBpZiAoXCJmdW5jdGlvblwiICE9PSByKSB7XG4gICAgICB2YXIgYTtcbiAgICAgIHRocm93IGEgPSAwID09PSBlID8gXCJmaWVsZFwiIDogMTAgPT09IGUgPyBcImNsYXNzXCIgOiBcIm1ldGhvZFwiLCBuZXcgVHlwZUVycm9yKGEgKyBcIiBkZWNvcmF0b3JzIG11c3QgcmV0dXJuIGEgZnVuY3Rpb24gb3Igdm9pZCAwXCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhcHBseU1lbWJlckRlYyhlLCB0LCByLCBhLCBuLCBpLCBzLCBvKSB7XG4gICAgdmFyIGMsXG4gICAgICBsLFxuICAgICAgdSxcbiAgICAgIGYsXG4gICAgICBwLFxuICAgICAgZCxcbiAgICAgIGggPSByWzBdO1xuICAgIGlmIChzID8gYyA9IDAgPT09IG4gfHwgMSA9PT0gbiA/IHtcbiAgICAgIGdldDogclszXSxcbiAgICAgIHNldDogcls0XVxuICAgIH0gOiAzID09PSBuID8ge1xuICAgICAgZ2V0OiByWzNdXG4gICAgfSA6IDQgPT09IG4gPyB7XG4gICAgICBzZXQ6IHJbM11cbiAgICB9IDoge1xuICAgICAgdmFsdWU6IHJbM11cbiAgICB9IDogMCAhPT0gbiAmJiAoYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgYSkpLCAxID09PSBuID8gdSA9IHtcbiAgICAgIGdldDogYy5nZXQsXG4gICAgICBzZXQ6IGMuc2V0XG4gICAgfSA6IDIgPT09IG4gPyB1ID0gYy52YWx1ZSA6IDMgPT09IG4gPyB1ID0gYy5nZXQgOiA0ID09PSBuICYmICh1ID0gYy5zZXQpLCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGgpIHZvaWQgMCAhPT0gKGYgPSBtZW1iZXJEZWMoaCwgYSwgYywgbywgbiwgaSwgcywgdSkpICYmIChhc3NlcnRWYWxpZFJldHVyblZhbHVlKG4sIGYpLCAwID09PSBuID8gbCA9IGYgOiAxID09PSBuID8gKGwgPSBmLmluaXQsIHAgPSBmLmdldCB8fCB1LmdldCwgZCA9IGYuc2V0IHx8IHUuc2V0LCB1ID0ge1xuICAgICAgZ2V0OiBwLFxuICAgICAgc2V0OiBkXG4gICAgfSkgOiB1ID0gZik7ZWxzZSBmb3IgKHZhciB2ID0gaC5sZW5ndGggLSAxOyB2ID49IDA7IHYtLSkge1xuICAgICAgdmFyIGc7XG4gICAgICBpZiAodm9pZCAwICE9PSAoZiA9IG1lbWJlckRlYyhoW3ZdLCBhLCBjLCBvLCBuLCBpLCBzLCB1KSkpIGFzc2VydFZhbGlkUmV0dXJuVmFsdWUobiwgZiksIDAgPT09IG4gPyBnID0gZiA6IDEgPT09IG4gPyAoZyA9IGYuaW5pdCwgcCA9IGYuZ2V0IHx8IHUuZ2V0LCBkID0gZi5zZXQgfHwgdS5zZXQsIHUgPSB7XG4gICAgICAgIGdldDogcCxcbiAgICAgICAgc2V0OiBkXG4gICAgICB9KSA6IHUgPSBmLCB2b2lkIDAgIT09IGcgJiYgKHZvaWQgMCA9PT0gbCA/IGwgPSBnIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBsID8gbCA9IFtsLCBnXSA6IGwucHVzaChnKSk7XG4gICAgfVxuICAgIGlmICgwID09PSBuIHx8IDEgPT09IG4pIHtcbiAgICAgIGlmICh2b2lkIDAgPT09IGwpIGwgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH07ZWxzZSBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBsKSB7XG4gICAgICAgIHZhciB5ID0gbDtcbiAgICAgICAgbCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgZm9yICh2YXIgciA9IHQsIGEgPSAwOyBhIDwgeS5sZW5ndGg7IGErKykgciA9IHlbYV0uY2FsbChlLCByKTtcbiAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtID0gbDtcbiAgICAgICAgbCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgcmV0dXJuIG0uY2FsbChlLCB0KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGUucHVzaChsKTtcbiAgICB9XG4gICAgMCAhPT0gbiAmJiAoMSA9PT0gbiA/IChjLmdldCA9IHUuZ2V0LCBjLnNldCA9IHUuc2V0KSA6IDIgPT09IG4gPyBjLnZhbHVlID0gdSA6IDMgPT09IG4gPyBjLmdldCA9IHUgOiA0ID09PSBuICYmIChjLnNldCA9IHUpLCBzID8gMSA9PT0gbiA/IChlLnB1c2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiB1LmdldC5jYWxsKGUsIHQpO1xuICAgIH0pLCBlLnB1c2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiB1LnNldC5jYWxsKGUsIHQpO1xuICAgIH0pKSA6IDIgPT09IG4gPyBlLnB1c2godSkgOiBlLnB1c2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiB1LmNhbGwoZSwgdCk7XG4gICAgfSkgOiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgYSwgYykpO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hJbml0aWFsaXplcnMoZSwgdCkge1xuICAgIHQgJiYgZS5wdXNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBmb3IgKHZhciByID0gMDsgciA8IHQubGVuZ3RoOyByKyspIHRbcl0uY2FsbChlKTtcbiAgICAgIHJldHVybiBlO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoZSwgdCwgcikge1xuICAgIHZhciBhID0gW107XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlLCB0LCByKSB7XG4gICAgICBmb3IgKHZhciBhLCBuLCBpID0gbmV3IE1hcCgpLCBzID0gbmV3IE1hcCgpLCBvID0gMDsgbyA8IHIubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgdmFyIGMgPSByW29dO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgICAgIHZhciBsLFxuICAgICAgICAgICAgdSxcbiAgICAgICAgICAgIGYgPSBjWzFdLFxuICAgICAgICAgICAgcCA9IGNbMl0sXG4gICAgICAgICAgICBkID0gYy5sZW5ndGggPiAzLFxuICAgICAgICAgICAgaCA9IGYgPj0gNTtcbiAgICAgICAgICBpZiAoaCA/IChsID0gdCwgMCAhPSAoZiAtPSA1KSAmJiAodSA9IG4gPSBuIHx8IFtdKSkgOiAobCA9IHQucHJvdG90eXBlLCAwICE9PSBmICYmICh1ID0gYSA9IGEgfHwgW10pKSwgMCAhPT0gZiAmJiAhZCkge1xuICAgICAgICAgICAgdmFyIHYgPSBoID8gcyA6IGksXG4gICAgICAgICAgICAgIGcgPSB2LmdldChwKSB8fCAwO1xuICAgICAgICAgICAgaWYgKCEwID09PSBnIHx8IDMgPT09IGcgJiYgNCAhPT0gZiB8fCA0ID09PSBnICYmIDMgIT09IGYpIHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHRlZCB0byBkZWNvcmF0ZSBhIHB1YmxpYyBtZXRob2QvYWNjZXNzb3IgdGhhdCBoYXMgdGhlIHNhbWUgbmFtZSBhcyBhIHByZXZpb3VzbHkgZGVjb3JhdGVkIHB1YmxpYyBtZXRob2QvYWNjZXNzb3IuIFRoaXMgaXMgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgdGhlIGRlY29yYXRvcnMgcGx1Z2luLiBQcm9wZXJ0eSBuYW1lIHdhczogXCIgKyBwKTtcbiAgICAgICAgICAgICFnICYmIGYgPiAyID8gdi5zZXQocCwgZikgOiB2LnNldChwLCAhMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFwcGx5TWVtYmVyRGVjKGUsIGwsIGMsIHAsIGYsIGgsIGQsIHUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwdXNoSW5pdGlhbGl6ZXJzKGUsIGEpLCBwdXNoSW5pdGlhbGl6ZXJzKGUsIG4pO1xuICAgIH0oYSwgZSwgdCksIGZ1bmN0aW9uIChlLCB0LCByKSB7XG4gICAgICBpZiAoci5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGEgPSBbXSwgbiA9IHQsIGkgPSB0Lm5hbWUsIHMgPSByLmxlbmd0aCAtIDE7IHMgPj0gMDsgcy0tKSB7XG4gICAgICAgICAgdmFyIG8gPSB7XG4gICAgICAgICAgICB2OiAhMVxuICAgICAgICAgIH07XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjID0gcltzXShuLCB7XG4gICAgICAgICAgICAgIGtpbmQ6IFwiY2xhc3NcIixcbiAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgYWRkSW5pdGlhbGl6ZXI6IGNyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKGEsIG8pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgby52ID0gITA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZvaWQgMCAhPT0gYyAmJiAoYXNzZXJ0VmFsaWRSZXR1cm5WYWx1ZSgxMCwgYyksIG4gPSBjKTtcbiAgICAgICAgfVxuICAgICAgICBlLnB1c2gobiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgYS5sZW5ndGg7IGUrKykgYVtlXS5jYWxsKG4pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KGEsIGUsIHIpLCBhO1xuICB9O1xufVxudmFyIGFwcGx5RGVjczIyMDNJbXBsO1xuZnVuY3Rpb24gX2FwcGx5RGVjczIyMDMoZSwgdCwgcikge1xuICByZXR1cm4gKGFwcGx5RGVjczIyMDNJbXBsID0gYXBwbHlEZWNzMjIwM0ltcGwgfHwgYXBwbHlEZWNzMjIwM0ZhY3RvcnkoKSkoZSwgdCwgcik7XG59XG5mdW5jdGlvbiBhcHBseURlY3MyMjAzUkZhY3RvcnkoKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKGUsIHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHIpIHtcbiAgICAgICFmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICBpZiAoZS52KSB0aHJvdyBuZXcgRXJyb3IoXCJhdHRlbXB0ZWQgdG8gY2FsbCBcIiArIHQgKyBcIiBhZnRlciBkZWNvcmF0aW9uIHdhcyBmaW5pc2hlZFwiKTtcbiAgICAgIH0odCwgXCJhZGRJbml0aWFsaXplclwiKSwgYXNzZXJ0Q2FsbGFibGUociwgXCJBbiBpbml0aWFsaXplclwiKSwgZS5wdXNoKHIpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWVtYmVyRGVjKGUsIHQsIHIsIG4sIGEsIGksIHMsIG8pIHtcbiAgICB2YXIgYztcbiAgICBzd2l0Y2ggKGEpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgYyA9IFwiYWNjZXNzb3JcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGMgPSBcIm1ldGhvZFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgYyA9IFwiZ2V0dGVyXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBjID0gXCJzZXR0ZXJcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjID0gXCJmaWVsZFwiO1xuICAgIH1cbiAgICB2YXIgbCxcbiAgICAgIHUsXG4gICAgICBmID0ge1xuICAgICAgICBraW5kOiBjLFxuICAgICAgICBuYW1lOiBzID8gXCIjXCIgKyB0IDogdCxcbiAgICAgICAgc3RhdGljOiBpLFxuICAgICAgICBwcml2YXRlOiBzXG4gICAgICB9LFxuICAgICAgcCA9IHtcbiAgICAgICAgdjogITFcbiAgICAgIH07XG4gICAgMCAhPT0gYSAmJiAoZi5hZGRJbml0aWFsaXplciA9IGNyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKG4sIHApKSwgMCA9PT0gYSA/IHMgPyAobCA9IHIuZ2V0LCB1ID0gci5zZXQpIDogKGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpc1t0XTtcbiAgICB9LCB1ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXNbdF0gPSBlO1xuICAgIH0pIDogMiA9PT0gYSA/IGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gci52YWx1ZTtcbiAgICB9IDogKDEgIT09IGEgJiYgMyAhPT0gYSB8fCAobCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByLmdldC5jYWxsKHRoaXMpO1xuICAgIH0pLCAxICE9PSBhICYmIDQgIT09IGEgfHwgKHUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgci5zZXQuY2FsbCh0aGlzLCBlKTtcbiAgICB9KSksIGYuYWNjZXNzID0gbCAmJiB1ID8ge1xuICAgICAgZ2V0OiBsLFxuICAgICAgc2V0OiB1XG4gICAgfSA6IGwgPyB7XG4gICAgICBnZXQ6IGxcbiAgICB9IDoge1xuICAgICAgc2V0OiB1XG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGUobywgZik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHAudiA9ICEwO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhc3NlcnRDYWxsYWJsZShlLCB0KSB7XG4gICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZSkgdGhyb3cgbmV3IFR5cGVFcnJvcih0ICsgXCIgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIGZ1bmN0aW9uIGFzc2VydFZhbGlkUmV0dXJuVmFsdWUoZSwgdCkge1xuICAgIHZhciByID0gdHlwZW9mIHQ7XG4gICAgaWYgKDEgPT09IGUpIHtcbiAgICAgIGlmIChcIm9iamVjdFwiICE9PSByIHx8IG51bGwgPT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhY2Nlc3NvciBkZWNvcmF0b3JzIG11c3QgcmV0dXJuIGFuIG9iamVjdCB3aXRoIGdldCwgc2V0LCBvciBpbml0IHByb3BlcnRpZXMgb3Igdm9pZCAwXCIpO1xuICAgICAgdm9pZCAwICE9PSB0LmdldCAmJiBhc3NlcnRDYWxsYWJsZSh0LmdldCwgXCJhY2Nlc3Nvci5nZXRcIiksIHZvaWQgMCAhPT0gdC5zZXQgJiYgYXNzZXJ0Q2FsbGFibGUodC5zZXQsIFwiYWNjZXNzb3Iuc2V0XCIpLCB2b2lkIDAgIT09IHQuaW5pdCAmJiBhc3NlcnRDYWxsYWJsZSh0LmluaXQsIFwiYWNjZXNzb3IuaW5pdFwiKTtcbiAgICB9IGVsc2UgaWYgKFwiZnVuY3Rpb25cIiAhPT0gcikge1xuICAgICAgdmFyIG47XG4gICAgICB0aHJvdyBuID0gMCA9PT0gZSA/IFwiZmllbGRcIiA6IDEwID09PSBlID8gXCJjbGFzc1wiIDogXCJtZXRob2RcIiwgbmV3IFR5cGVFcnJvcihuICsgXCIgZGVjb3JhdG9ycyBtdXN0IHJldHVybiBhIGZ1bmN0aW9uIG9yIHZvaWQgMFwiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYXBwbHlNZW1iZXJEZWMoZSwgdCwgciwgbiwgYSwgaSwgcywgbykge1xuICAgIHZhciBjLFxuICAgICAgbCxcbiAgICAgIHUsXG4gICAgICBmLFxuICAgICAgcCxcbiAgICAgIGQsXG4gICAgICBoID0gclswXTtcbiAgICBpZiAocyA/IGMgPSAwID09PSBhIHx8IDEgPT09IGEgPyB7XG4gICAgICBnZXQ6IHJbM10sXG4gICAgICBzZXQ6IHJbNF1cbiAgICB9IDogMyA9PT0gYSA/IHtcbiAgICAgIGdldDogclszXVxuICAgIH0gOiA0ID09PSBhID8ge1xuICAgICAgc2V0OiByWzNdXG4gICAgfSA6IHtcbiAgICAgIHZhbHVlOiByWzNdXG4gICAgfSA6IDAgIT09IGEgJiYgKGMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIG4pKSwgMSA9PT0gYSA/IHUgPSB7XG4gICAgICBnZXQ6IGMuZ2V0LFxuICAgICAgc2V0OiBjLnNldFxuICAgIH0gOiAyID09PSBhID8gdSA9IGMudmFsdWUgOiAzID09PSBhID8gdSA9IGMuZ2V0IDogNCA9PT0gYSAmJiAodSA9IGMuc2V0KSwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBoKSB2b2lkIDAgIT09IChmID0gbWVtYmVyRGVjKGgsIG4sIGMsIG8sIGEsIGksIHMsIHUpKSAmJiAoYXNzZXJ0VmFsaWRSZXR1cm5WYWx1ZShhLCBmKSwgMCA9PT0gYSA/IGwgPSBmIDogMSA9PT0gYSA/IChsID0gZi5pbml0LCBwID0gZi5nZXQgfHwgdS5nZXQsIGQgPSBmLnNldCB8fCB1LnNldCwgdSA9IHtcbiAgICAgIGdldDogcCxcbiAgICAgIHNldDogZFxuICAgIH0pIDogdSA9IGYpO2Vsc2UgZm9yICh2YXIgdiA9IGgubGVuZ3RoIC0gMTsgdiA+PSAwOyB2LS0pIHtcbiAgICAgIHZhciBnO1xuICAgICAgaWYgKHZvaWQgMCAhPT0gKGYgPSBtZW1iZXJEZWMoaFt2XSwgbiwgYywgbywgYSwgaSwgcywgdSkpKSBhc3NlcnRWYWxpZFJldHVyblZhbHVlKGEsIGYpLCAwID09PSBhID8gZyA9IGYgOiAxID09PSBhID8gKGcgPSBmLmluaXQsIHAgPSBmLmdldCB8fCB1LmdldCwgZCA9IGYuc2V0IHx8IHUuc2V0LCB1ID0ge1xuICAgICAgICBnZXQ6IHAsXG4gICAgICAgIHNldDogZFxuICAgICAgfSkgOiB1ID0gZiwgdm9pZCAwICE9PSBnICYmICh2b2lkIDAgPT09IGwgPyBsID0gZyA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgbCA/IGwgPSBbbCwgZ10gOiBsLnB1c2goZykpO1xuICAgIH1cbiAgICBpZiAoMCA9PT0gYSB8fCAxID09PSBhKSB7XG4gICAgICBpZiAodm9pZCAwID09PSBsKSBsID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9O2Vsc2UgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgbCkge1xuICAgICAgICB2YXIgeSA9IGw7XG4gICAgICAgIGwgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIGZvciAodmFyIHIgPSB0LCBuID0gMDsgbiA8IHkubGVuZ3RoOyBuKyspIHIgPSB5W25dLmNhbGwoZSwgcik7XG4gICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbSA9IGw7XG4gICAgICAgIGwgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHJldHVybiBtLmNhbGwoZSwgdCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBlLnB1c2gobCk7XG4gICAgfVxuICAgIDAgIT09IGEgJiYgKDEgPT09IGEgPyAoYy5nZXQgPSB1LmdldCwgYy5zZXQgPSB1LnNldCkgOiAyID09PSBhID8gYy52YWx1ZSA9IHUgOiAzID09PSBhID8gYy5nZXQgPSB1IDogNCA9PT0gYSAmJiAoYy5zZXQgPSB1KSwgcyA/IDEgPT09IGEgPyAoZS5wdXNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gdS5nZXQuY2FsbChlLCB0KTtcbiAgICB9KSwgZS5wdXNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gdS5zZXQuY2FsbChlLCB0KTtcbiAgICB9KSkgOiAyID09PSBhID8gZS5wdXNoKHUpIDogZS5wdXNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gdS5jYWxsKGUsIHQpO1xuICAgIH0pIDogT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIG4sIGMpKTtcbiAgfVxuICBmdW5jdGlvbiBhcHBseU1lbWJlckRlY3MoZSwgdCkge1xuICAgIGZvciAodmFyIHIsIG4sIGEgPSBbXSwgaSA9IG5ldyBNYXAoKSwgcyA9IG5ldyBNYXAoKSwgbyA9IDA7IG8gPCB0Lmxlbmd0aDsgbysrKSB7XG4gICAgICB2YXIgYyA9IHRbb107XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgICB2YXIgbCxcbiAgICAgICAgICB1LFxuICAgICAgICAgIGYgPSBjWzFdLFxuICAgICAgICAgIHAgPSBjWzJdLFxuICAgICAgICAgIGQgPSBjLmxlbmd0aCA+IDMsXG4gICAgICAgICAgaCA9IGYgPj0gNTtcbiAgICAgICAgaWYgKGggPyAobCA9IGUsIDAgIT09IChmIC09IDUpICYmICh1ID0gbiA9IG4gfHwgW10pKSA6IChsID0gZS5wcm90b3R5cGUsIDAgIT09IGYgJiYgKHUgPSByID0gciB8fCBbXSkpLCAwICE9PSBmICYmICFkKSB7XG4gICAgICAgICAgdmFyIHYgPSBoID8gcyA6IGksXG4gICAgICAgICAgICBnID0gdi5nZXQocCkgfHwgMDtcbiAgICAgICAgICBpZiAoITAgPT09IGcgfHwgMyA9PT0gZyAmJiA0ICE9PSBmIHx8IDQgPT09IGcgJiYgMyAhPT0gZikgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdGVkIHRvIGRlY29yYXRlIGEgcHVibGljIG1ldGhvZC9hY2Nlc3NvciB0aGF0IGhhcyB0aGUgc2FtZSBuYW1lIGFzIGEgcHJldmlvdXNseSBkZWNvcmF0ZWQgcHVibGljIG1ldGhvZC9hY2Nlc3Nvci4gVGhpcyBpcyBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBieSB0aGUgZGVjb3JhdG9ycyBwbHVnaW4uIFByb3BlcnR5IG5hbWUgd2FzOiBcIiArIHApO1xuICAgICAgICAgICFnICYmIGYgPiAyID8gdi5zZXQocCwgZikgOiB2LnNldChwLCAhMCk7XG4gICAgICAgIH1cbiAgICAgICAgYXBwbHlNZW1iZXJEZWMoYSwgbCwgYywgcCwgZiwgaCwgZCwgdSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwdXNoSW5pdGlhbGl6ZXJzKGEsIHIpLCBwdXNoSW5pdGlhbGl6ZXJzKGEsIG4pLCBhO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hJbml0aWFsaXplcnMoZSwgdCkge1xuICAgIHQgJiYgZS5wdXNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBmb3IgKHZhciByID0gMDsgciA8IHQubGVuZ3RoOyByKyspIHRbcl0uY2FsbChlKTtcbiAgICAgIHJldHVybiBlO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoZSwgdCwgcikge1xuICAgIHJldHVybiB7XG4gICAgICBlOiBhcHBseU1lbWJlckRlY3MoZSwgdCksXG4gICAgICBnZXQgYygpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgaWYgKHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgciA9IFtdLCBuID0gZSwgYSA9IGUubmFtZSwgaSA9IHQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgdmFyIHMgPSB7XG4gICAgICAgICAgICAgICAgdjogITFcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHRbaV0obiwge1xuICAgICAgICAgICAgICAgICAga2luZDogXCJjbGFzc1wiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogYSxcbiAgICAgICAgICAgICAgICAgIGFkZEluaXRpYWxpemVyOiBjcmVhdGVBZGRJbml0aWFsaXplck1ldGhvZChyLCBzKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHMudiA9ICEwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZvaWQgMCAhPT0gbyAmJiAoYXNzZXJ0VmFsaWRSZXR1cm5WYWx1ZSgxMCwgbyksIG4gPSBvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHIubGVuZ3RoOyBlKyspIHJbZV0uY2FsbChuKTtcbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfShlLCByKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gX2FwcGx5RGVjczIyMDNSKGUsIHQsIHIpIHtcbiAgcmV0dXJuIChfYXBwbHlEZWNzMjIwM1IgPSBhcHBseURlY3MyMjAzUkZhY3RvcnkoKSkoZSwgdCwgcik7XG59XG5mdW5jdGlvbiBhcHBseURlY3MyMzAxRmFjdG9yeSgpIHtcbiAgZnVuY3Rpb24gY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QoZSwgdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocikge1xuICAgICAgIWZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIGlmIChlLnYpIHRocm93IG5ldyBFcnJvcihcImF0dGVtcHRlZCB0byBjYWxsIFwiICsgdCArIFwiIGFmdGVyIGRlY29yYXRpb24gd2FzIGZpbmlzaGVkXCIpO1xuICAgICAgfSh0LCBcImFkZEluaXRpYWxpemVyXCIpLCBhc3NlcnRDYWxsYWJsZShyLCBcIkFuIGluaXRpYWxpemVyXCIpLCBlLnB1c2gocik7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBhc3NlcnRJbnN0YW5jZUlmUHJpdmF0ZShlLCB0KSB7XG4gICAgaWYgKCFlKHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXR0ZW1wdGVkIHRvIGFjY2VzcyBwcml2YXRlIGVsZW1lbnQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG4gIGZ1bmN0aW9uIG1lbWJlckRlYyhlLCB0LCByLCBuLCBhLCBpLCBzLCBvLCBjKSB7XG4gICAgdmFyIHU7XG4gICAgc3dpdGNoIChhKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHUgPSBcImFjY2Vzc29yXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB1ID0gXCJtZXRob2RcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHUgPSBcImdldHRlclwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdSA9IFwic2V0dGVyXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdSA9IFwiZmllbGRcIjtcbiAgICB9XG4gICAgdmFyIGwsXG4gICAgICBmLFxuICAgICAgcCA9IHtcbiAgICAgICAga2luZDogdSxcbiAgICAgICAgbmFtZTogcyA/IFwiI1wiICsgdCA6IHQsXG4gICAgICAgIHN0YXRpYzogaSxcbiAgICAgICAgcHJpdmF0ZTogc1xuICAgICAgfSxcbiAgICAgIGQgPSB7XG4gICAgICAgIHY6ICExXG4gICAgICB9O1xuICAgIGlmICgwICE9PSBhICYmIChwLmFkZEluaXRpYWxpemVyID0gY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QobiwgZCkpLCBzIHx8IDAgIT09IGEgJiYgMiAhPT0gYSkge1xuICAgICAgaWYgKDIgPT09IGEpIGwgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gYXNzZXJ0SW5zdGFuY2VJZlByaXZhdGUoYywgZSksIHIudmFsdWU7XG4gICAgICB9O2Vsc2Uge1xuICAgICAgICB2YXIgaCA9IDAgPT09IGEgfHwgMSA9PT0gYTtcbiAgICAgICAgKGggfHwgMyA9PT0gYSkgJiYgKGwgPSBzID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gYXNzZXJ0SW5zdGFuY2VJZlByaXZhdGUoYywgZSksIHIuZ2V0LmNhbGwoZSk7XG4gICAgICAgIH0gOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiByLmdldC5jYWxsKGUpO1xuICAgICAgICB9KSwgKGggfHwgNCA9PT0gYSkgJiYgKGYgPSBzID8gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBhc3NlcnRJbnN0YW5jZUlmUHJpdmF0ZShjLCBlKSwgci5zZXQuY2FsbChlLCB0KTtcbiAgICAgICAgfSA6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgci5zZXQuY2FsbChlLCB0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGwgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGVbdF07XG4gICAgfSwgMCA9PT0gYSAmJiAoZiA9IGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICBlW3RdID0gcjtcbiAgICB9KTtcbiAgICB2YXIgdiA9IHMgPyBjLmJpbmQoKSA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gdCBpbiBlO1xuICAgIH07XG4gICAgcC5hY2Nlc3MgPSBsICYmIGYgPyB7XG4gICAgICBnZXQ6IGwsXG4gICAgICBzZXQ6IGYsXG4gICAgICBoYXM6IHZcbiAgICB9IDogbCA/IHtcbiAgICAgIGdldDogbCxcbiAgICAgIGhhczogdlxuICAgIH0gOiB7XG4gICAgICBzZXQ6IGYsXG4gICAgICBoYXM6IHZcbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZShvLCBwKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZC52ID0gITA7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGFzc2VydENhbGxhYmxlKGUsIHQpIHtcbiAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKHQgKyBcIiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgZnVuY3Rpb24gYXNzZXJ0VmFsaWRSZXR1cm5WYWx1ZShlLCB0KSB7XG4gICAgdmFyIHIgPSB0eXBlb2YgdDtcbiAgICBpZiAoMSA9PT0gZSkge1xuICAgICAgaWYgKFwib2JqZWN0XCIgIT09IHIgfHwgbnVsbCA9PT0gdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcImFjY2Vzc29yIGRlY29yYXRvcnMgbXVzdCByZXR1cm4gYW4gb2JqZWN0IHdpdGggZ2V0LCBzZXQsIG9yIGluaXQgcHJvcGVydGllcyBvciB2b2lkIDBcIik7XG4gICAgICB2b2lkIDAgIT09IHQuZ2V0ICYmIGFzc2VydENhbGxhYmxlKHQuZ2V0LCBcImFjY2Vzc29yLmdldFwiKSwgdm9pZCAwICE9PSB0LnNldCAmJiBhc3NlcnRDYWxsYWJsZSh0LnNldCwgXCJhY2Nlc3Nvci5zZXRcIiksIHZvaWQgMCAhPT0gdC5pbml0ICYmIGFzc2VydENhbGxhYmxlKHQuaW5pdCwgXCJhY2Nlc3Nvci5pbml0XCIpO1xuICAgIH0gZWxzZSBpZiAoXCJmdW5jdGlvblwiICE9PSByKSB7XG4gICAgICB2YXIgbjtcbiAgICAgIHRocm93IG4gPSAwID09PSBlID8gXCJmaWVsZFwiIDogMTAgPT09IGUgPyBcImNsYXNzXCIgOiBcIm1ldGhvZFwiLCBuZXcgVHlwZUVycm9yKG4gKyBcIiBkZWNvcmF0b3JzIG11c3QgcmV0dXJuIGEgZnVuY3Rpb24gb3Igdm9pZCAwXCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjdXJyeVRoaXMyKGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgIGUodGhpcywgdCk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBhcHBseU1lbWJlckRlYyhlLCB0LCByLCBuLCBhLCBpLCBzLCBvLCBjKSB7XG4gICAgdmFyIHUsXG4gICAgICBsLFxuICAgICAgZixcbiAgICAgIHAsXG4gICAgICBkLFxuICAgICAgaCxcbiAgICAgIHYsXG4gICAgICBnID0gclswXTtcbiAgICBpZiAocyA/IHUgPSAwID09PSBhIHx8IDEgPT09IGEgPyB7XG4gICAgICBnZXQ6IChwID0gclszXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcCh0aGlzKTtcbiAgICAgIH0pLFxuICAgICAgc2V0OiBjdXJyeVRoaXMyKHJbNF0pXG4gICAgfSA6IDMgPT09IGEgPyB7XG4gICAgICBnZXQ6IHJbM11cbiAgICB9IDogNCA9PT0gYSA/IHtcbiAgICAgIHNldDogclszXVxuICAgIH0gOiB7XG4gICAgICB2YWx1ZTogclszXVxuICAgIH0gOiAwICE9PSBhICYmICh1ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCBuKSksIDEgPT09IGEgPyBmID0ge1xuICAgICAgZ2V0OiB1LmdldCxcbiAgICAgIHNldDogdS5zZXRcbiAgICB9IDogMiA9PT0gYSA/IGYgPSB1LnZhbHVlIDogMyA9PT0gYSA/IGYgPSB1LmdldCA6IDQgPT09IGEgJiYgKGYgPSB1LnNldCksIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZykgdm9pZCAwICE9PSAoZCA9IG1lbWJlckRlYyhnLCBuLCB1LCBvLCBhLCBpLCBzLCBmLCBjKSkgJiYgKGFzc2VydFZhbGlkUmV0dXJuVmFsdWUoYSwgZCksIDAgPT09IGEgPyBsID0gZCA6IDEgPT09IGEgPyAobCA9IGQuaW5pdCwgaCA9IGQuZ2V0IHx8IGYuZ2V0LCB2ID0gZC5zZXQgfHwgZi5zZXQsIGYgPSB7XG4gICAgICBnZXQ6IGgsXG4gICAgICBzZXQ6IHZcbiAgICB9KSA6IGYgPSBkKTtlbHNlIGZvciAodmFyIHkgPSBnLmxlbmd0aCAtIDE7IHkgPj0gMDsgeS0tKSB7XG4gICAgICB2YXIgbTtcbiAgICAgIGlmICh2b2lkIDAgIT09IChkID0gbWVtYmVyRGVjKGdbeV0sIG4sIHUsIG8sIGEsIGksIHMsIGYsIGMpKSkgYXNzZXJ0VmFsaWRSZXR1cm5WYWx1ZShhLCBkKSwgMCA9PT0gYSA/IG0gPSBkIDogMSA9PT0gYSA/IChtID0gZC5pbml0LCBoID0gZC5nZXQgfHwgZi5nZXQsIHYgPSBkLnNldCB8fCBmLnNldCwgZiA9IHtcbiAgICAgICAgZ2V0OiBoLFxuICAgICAgICBzZXQ6IHZcbiAgICAgIH0pIDogZiA9IGQsIHZvaWQgMCAhPT0gbSAmJiAodm9pZCAwID09PSBsID8gbCA9IG0gOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGwgPyBsID0gW2wsIG1dIDogbC5wdXNoKG0pKTtcbiAgICB9XG4gICAgaWYgKDAgPT09IGEgfHwgMSA9PT0gYSkge1xuICAgICAgaWYgKHZvaWQgMCA9PT0gbCkgbCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfTtlbHNlIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGwpIHtcbiAgICAgICAgdmFyIGIgPSBsO1xuICAgICAgICBsID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciByID0gdCwgbiA9IDA7IG4gPCBiLmxlbmd0aDsgbisrKSByID0gYltuXS5jYWxsKGUsIHIpO1xuICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIEkgPSBsO1xuICAgICAgICBsID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICByZXR1cm4gSS5jYWxsKGUsIHQpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZS5wdXNoKGwpO1xuICAgIH1cbiAgICAwICE9PSBhICYmICgxID09PSBhID8gKHUuZ2V0ID0gZi5nZXQsIHUuc2V0ID0gZi5zZXQpIDogMiA9PT0gYSA/IHUudmFsdWUgPSBmIDogMyA9PT0gYSA/IHUuZ2V0ID0gZiA6IDQgPT09IGEgJiYgKHUuc2V0ID0gZiksIHMgPyAxID09PSBhID8gKGUucHVzaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIGYuZ2V0LmNhbGwoZSwgdCk7XG4gICAgfSksIGUucHVzaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIGYuc2V0LmNhbGwoZSwgdCk7XG4gICAgfSkpIDogMiA9PT0gYSA/IGUucHVzaChmKSA6IGUucHVzaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIGYuY2FsbChlLCB0KTtcbiAgICB9KSA6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBuLCB1KSk7XG4gIH1cbiAgZnVuY3Rpb24gYXBwbHlNZW1iZXJEZWNzKGUsIHQsIHIpIHtcbiAgICBmb3IgKHZhciBuLCBhLCBpLCBzID0gW10sIG8gPSBuZXcgTWFwKCksIGMgPSBuZXcgTWFwKCksIHUgPSAwOyB1IDwgdC5sZW5ndGg7IHUrKykge1xuICAgICAgdmFyIGwgPSB0W3VdO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobCkpIHtcbiAgICAgICAgdmFyIGYsXG4gICAgICAgICAgcCxcbiAgICAgICAgICBkID0gbFsxXSxcbiAgICAgICAgICBoID0gbFsyXSxcbiAgICAgICAgICB2ID0gbC5sZW5ndGggPiAzLFxuICAgICAgICAgIGcgPSBkID49IDUsXG4gICAgICAgICAgeSA9IHI7XG4gICAgICAgIGlmIChnID8gKGYgPSBlLCAwICE9PSAoZCAtPSA1KSAmJiAocCA9IGEgPSBhIHx8IFtdKSwgdiAmJiAhaSAmJiAoaSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIF9jaGVja0luUkhTKHQpID09PSBlO1xuICAgICAgICB9KSwgeSA9IGkpIDogKGYgPSBlLnByb3RvdHlwZSwgMCAhPT0gZCAmJiAocCA9IG4gPSBuIHx8IFtdKSksIDAgIT09IGQgJiYgIXYpIHtcbiAgICAgICAgICB2YXIgbSA9IGcgPyBjIDogbyxcbiAgICAgICAgICAgIGIgPSBtLmdldChoKSB8fCAwO1xuICAgICAgICAgIGlmICghMCA9PT0gYiB8fCAzID09PSBiICYmIDQgIT09IGQgfHwgNCA9PT0gYiAmJiAzICE9PSBkKSB0aHJvdyBuZXcgRXJyb3IoXCJBdHRlbXB0ZWQgdG8gZGVjb3JhdGUgYSBwdWJsaWMgbWV0aG9kL2FjY2Vzc29yIHRoYXQgaGFzIHRoZSBzYW1lIG5hbWUgYXMgYSBwcmV2aW91c2x5IGRlY29yYXRlZCBwdWJsaWMgbWV0aG9kL2FjY2Vzc29yLiBUaGlzIGlzIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkIGJ5IHRoZSBkZWNvcmF0b3JzIHBsdWdpbi4gUHJvcGVydHkgbmFtZSB3YXM6IFwiICsgaCk7XG4gICAgICAgICAgIWIgJiYgZCA+IDIgPyBtLnNldChoLCBkKSA6IG0uc2V0KGgsICEwKTtcbiAgICAgICAgfVxuICAgICAgICBhcHBseU1lbWJlckRlYyhzLCBmLCBsLCBoLCBkLCBnLCB2LCBwLCB5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHB1c2hJbml0aWFsaXplcnMocywgbiksIHB1c2hJbml0aWFsaXplcnMocywgYSksIHM7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaEluaXRpYWxpemVycyhlLCB0KSB7XG4gICAgdCAmJiBlLnB1c2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgdC5sZW5ndGg7IHIrKykgdFtyXS5jYWxsKGUpO1xuICAgICAgcmV0dXJuIGU7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIChlLCB0LCByLCBuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGU6IGFwcGx5TWVtYmVyRGVjcyhlLCB0LCBuKSxcbiAgICAgIGdldCBjKCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBpZiAodC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciByID0gW10sIG4gPSBlLCBhID0gZS5uYW1lLCBpID0gdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICB2YXIgcyA9IHtcbiAgICAgICAgICAgICAgICB2OiAhMVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gdFtpXShuLCB7XG4gICAgICAgICAgICAgICAgICBraW5kOiBcImNsYXNzXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBhLFxuICAgICAgICAgICAgICAgICAgYWRkSW5pdGlhbGl6ZXI6IGNyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKHIsIHMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgcy52ID0gITA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdm9pZCAwICE9PSBvICYmIChhc3NlcnRWYWxpZFJldHVyblZhbHVlKDEwLCBvKSwgbiA9IG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtuLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgci5sZW5ndGg7IGUrKykgcltlXS5jYWxsKG4pO1xuICAgICAgICAgICAgfV07XG4gICAgICAgICAgfVxuICAgICAgICB9KGUsIHIpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBfYXBwbHlEZWNzMjMwMShlLCB0LCByLCBuKSB7XG4gIHJldHVybiAoX2FwcGx5RGVjczIzMDEgPSBhcHBseURlY3MyMzAxRmFjdG9yeSgpKShlLCB0LCByLCBuKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKGUsIHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChyKSB7XG4gICAgYXNzZXJ0Tm90RmluaXNoZWQodCwgXCJhZGRJbml0aWFsaXplclwiKSwgYXNzZXJ0Q2FsbGFibGUociwgXCJBbiBpbml0aWFsaXplclwiKSwgZS5wdXNoKHIpO1xuICB9O1xufVxuZnVuY3Rpb24gYXNzZXJ0SW5zdGFuY2VJZlByaXZhdGUoZSwgdCkge1xuICBpZiAoIWUodCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBdHRlbXB0ZWQgdG8gYWNjZXNzIHByaXZhdGUgZWxlbWVudCBvbiBub24taW5zdGFuY2VcIik7XG59XG5mdW5jdGlvbiBtZW1iZXJEZWMoZSwgdCwgciwgbiwgYSwgaSwgcywgbywgYywgbCkge1xuICB2YXIgdTtcbiAgc3dpdGNoIChpKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdSA9IFwiYWNjZXNzb3JcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHUgPSBcIm1ldGhvZFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdSA9IFwiZ2V0dGVyXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICB1ID0gXCJzZXR0ZXJcIjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB1ID0gXCJmaWVsZFwiO1xuICB9XG4gIHZhciBmLFxuICAgIGQsXG4gICAgcCA9IHtcbiAgICAgIGtpbmQ6IHUsXG4gICAgICBuYW1lOiBvID8gXCIjXCIgKyByIDogcixcbiAgICAgIHN0YXRpYzogcyxcbiAgICAgIHByaXZhdGU6IG9cbiAgICB9LFxuICAgIGggPSB7XG4gICAgICB2OiAhMVxuICAgIH07XG4gIGlmICgwICE9PSBpICYmIChwLmFkZEluaXRpYWxpemVyID0gY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QoYSwgaCkpLCBvIHx8IDAgIT09IGkgJiYgMiAhPT0gaSkge1xuICAgIGlmICgyID09PSBpKSBmID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBhc3NlcnRJbnN0YW5jZUlmUHJpdmF0ZShsLCBlKSwgbi52YWx1ZTtcbiAgICB9O2Vsc2Uge1xuICAgICAgdmFyIHYgPSAwID09PSBpIHx8IDEgPT09IGk7XG4gICAgICAodiB8fCAzID09PSBpKSAmJiAoZiA9IG8gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gYXNzZXJ0SW5zdGFuY2VJZlByaXZhdGUobCwgZSksIG4uZ2V0LmNhbGwoZSk7XG4gICAgICB9IDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIG4uZ2V0LmNhbGwoZSk7XG4gICAgICB9KSwgKHYgfHwgNCA9PT0gaSkgJiYgKGQgPSBvID8gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgYXNzZXJ0SW5zdGFuY2VJZlByaXZhdGUobCwgZSksIG4uc2V0LmNhbGwoZSwgdCk7XG4gICAgICB9IDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgbi5zZXQuY2FsbChlLCB0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGYgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlW3JdO1xuICB9LCAwID09PSBpICYmIChkID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICBlW3JdID0gdDtcbiAgfSk7XG4gIHZhciB5ID0gbyA/IGwuYmluZCgpIDogZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gciBpbiBlO1xuICB9O1xuICBwLmFjY2VzcyA9IGYgJiYgZCA/IHtcbiAgICBnZXQ6IGYsXG4gICAgc2V0OiBkLFxuICAgIGhhczogeVxuICB9IDogZiA/IHtcbiAgICBnZXQ6IGYsXG4gICAgaGFzOiB5XG4gIH0gOiB7XG4gICAgc2V0OiBkLFxuICAgIGhhczogeVxuICB9O1xuICB0cnkge1xuICAgIHJldHVybiBlLmNhbGwodCwgYywgcCk7XG4gIH0gZmluYWxseSB7XG4gICAgaC52ID0gITA7XG4gIH1cbn1cbmZ1bmN0aW9uIGFzc2VydE5vdEZpbmlzaGVkKGUsIHQpIHtcbiAgaWYgKGUudikgdGhyb3cgbmV3IEVycm9yKFwiYXR0ZW1wdGVkIHRvIGNhbGwgXCIgKyB0ICsgXCIgYWZ0ZXIgZGVjb3JhdGlvbiB3YXMgZmluaXNoZWRcIik7XG59XG5mdW5jdGlvbiBhc3NlcnRDYWxsYWJsZShlLCB0KSB7XG4gIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUpIHRocm93IG5ldyBUeXBlRXJyb3IodCArIFwiIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbn1cbmZ1bmN0aW9uIGFzc2VydFZhbGlkUmV0dXJuVmFsdWUoZSwgdCkge1xuICB2YXIgciA9IHR5cGVvZiB0O1xuICBpZiAoMSA9PT0gZSkge1xuICAgIGlmIChcIm9iamVjdFwiICE9PSByIHx8IG51bGwgPT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhY2Nlc3NvciBkZWNvcmF0b3JzIG11c3QgcmV0dXJuIGFuIG9iamVjdCB3aXRoIGdldCwgc2V0LCBvciBpbml0IHByb3BlcnRpZXMgb3Igdm9pZCAwXCIpO1xuICAgIHZvaWQgMCAhPT0gdC5nZXQgJiYgYXNzZXJ0Q2FsbGFibGUodC5nZXQsIFwiYWNjZXNzb3IuZ2V0XCIpLCB2b2lkIDAgIT09IHQuc2V0ICYmIGFzc2VydENhbGxhYmxlKHQuc2V0LCBcImFjY2Vzc29yLnNldFwiKSwgdm9pZCAwICE9PSB0LmluaXQgJiYgYXNzZXJ0Q2FsbGFibGUodC5pbml0LCBcImFjY2Vzc29yLmluaXRcIik7XG4gIH0gZWxzZSBpZiAoXCJmdW5jdGlvblwiICE9PSByKSB7XG4gICAgdmFyIG47XG4gICAgdGhyb3cgbiA9IDAgPT09IGUgPyBcImZpZWxkXCIgOiA1ID09PSBlID8gXCJjbGFzc1wiIDogXCJtZXRob2RcIiwgbmV3IFR5cGVFcnJvcihuICsgXCIgZGVjb3JhdG9ycyBtdXN0IHJldHVybiBhIGZ1bmN0aW9uIG9yIHZvaWQgMFwiKTtcbiAgfVxufVxuZnVuY3Rpb24gY3VycnlUaGlzMShlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGUodGhpcyk7XG4gIH07XG59XG5mdW5jdGlvbiBjdXJyeVRoaXMyKGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgZSh0aGlzLCB0KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGFwcGx5TWVtYmVyRGVjKGUsIHQsIHIsIG4sIGEsIGksIHMsIG8sIGMsIGwpIHtcbiAgdmFyIHUsXG4gICAgZixcbiAgICBkLFxuICAgIHAsXG4gICAgaCxcbiAgICB2LFxuICAgIHkgPSByWzBdO1xuICBuIHx8IEFycmF5LmlzQXJyYXkoeSkgfHwgKHkgPSBbeV0pLCBvID8gdSA9IDAgPT09IGkgfHwgMSA9PT0gaSA/IHtcbiAgICBnZXQ6IGN1cnJ5VGhpczEoclszXSksXG4gICAgc2V0OiBjdXJyeVRoaXMyKHJbNF0pXG4gIH0gOiAzID09PSBpID8ge1xuICAgIGdldDogclszXVxuICB9IDogNCA9PT0gaSA/IHtcbiAgICBzZXQ6IHJbM11cbiAgfSA6IHtcbiAgICB2YWx1ZTogclszXVxuICB9IDogMCAhPT0gaSAmJiAodSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgYSkpLCAxID09PSBpID8gZCA9IHtcbiAgICBnZXQ6IHUuZ2V0LFxuICAgIHNldDogdS5zZXRcbiAgfSA6IDIgPT09IGkgPyBkID0gdS52YWx1ZSA6IDMgPT09IGkgPyBkID0gdS5nZXQgOiA0ID09PSBpICYmIChkID0gdS5zZXQpO1xuICBmb3IgKHZhciBnID0gbiA/IDIgOiAxLCBtID0geS5sZW5ndGggLSAxOyBtID49IDA7IG0gLT0gZykge1xuICAgIHZhciBiO1xuICAgIGlmICh2b2lkIDAgIT09IChwID0gbWVtYmVyRGVjKHlbbV0sIG4gPyB5W20gLSAxXSA6IHZvaWQgMCwgYSwgdSwgYywgaSwgcywgbywgZCwgbCkpKSBhc3NlcnRWYWxpZFJldHVyblZhbHVlKGksIHApLCAwID09PSBpID8gYiA9IHAgOiAxID09PSBpID8gKGIgPSBwLmluaXQsIGggPSBwLmdldCB8fCBkLmdldCwgdiA9IHAuc2V0IHx8IGQuc2V0LCBkID0ge1xuICAgICAgZ2V0OiBoLFxuICAgICAgc2V0OiB2XG4gICAgfSkgOiBkID0gcCwgdm9pZCAwICE9PSBiICYmICh2b2lkIDAgPT09IGYgPyBmID0gYiA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZiA/IGYgPSBbZiwgYl0gOiBmLnB1c2goYikpO1xuICB9XG4gIGlmICgwID09PSBpIHx8IDEgPT09IGkpIHtcbiAgICBpZiAodm9pZCAwID09PSBmKSBmID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiB0O1xuICAgIH07ZWxzZSBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBmKSB7XG4gICAgICB2YXIgSSA9IGY7XG4gICAgICBmID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgZm9yICh2YXIgciA9IHQsIG4gPSBJLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSByID0gSVtuXS5jYWxsKGUsIHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB3ID0gZjtcbiAgICAgIGYgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gdy5jYWxsKGUsIHQpO1xuICAgICAgfTtcbiAgICB9XG4gICAgZS5wdXNoKGYpO1xuICB9XG4gIDAgIT09IGkgJiYgKDEgPT09IGkgPyAodS5nZXQgPSBkLmdldCwgdS5zZXQgPSBkLnNldCkgOiAyID09PSBpID8gdS52YWx1ZSA9IGQgOiAzID09PSBpID8gdS5nZXQgPSBkIDogNCA9PT0gaSAmJiAodS5zZXQgPSBkKSwgbyA/IDEgPT09IGkgPyAoZS5wdXNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgcmV0dXJuIGQuZ2V0LmNhbGwoZSwgdCk7XG4gIH0pLCBlLnB1c2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICByZXR1cm4gZC5zZXQuY2FsbChlLCB0KTtcbiAgfSkpIDogMiA9PT0gaSA/IGUucHVzaChkKSA6IGUucHVzaChmdW5jdGlvbiAoZSwgdCkge1xuICAgIHJldHVybiBkLmNhbGwoZSwgdCk7XG4gIH0pIDogT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIGEsIHUpKTtcbn1cbmZ1bmN0aW9uIGFwcGx5TWVtYmVyRGVjcyhlLCB0LCByKSB7XG4gIGZvciAodmFyIG4sIGEsIGksIHMgPSBbXSwgbyA9IG5ldyBNYXAoKSwgYyA9IG5ldyBNYXAoKSwgbCA9IDA7IGwgPCB0Lmxlbmd0aDsgbCsrKSB7XG4gICAgdmFyIHUgPSB0W2xdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHUpKSB7XG4gICAgICB2YXIgZixcbiAgICAgICAgZCxcbiAgICAgICAgcCA9IHVbMV0sXG4gICAgICAgIGggPSB1WzJdLFxuICAgICAgICB2ID0gdS5sZW5ndGggPiAzLFxuICAgICAgICB5ID0gMTYgJiBwLFxuICAgICAgICBnID0gISEoOCAmIHApLFxuICAgICAgICBtID0gcjtcbiAgICAgIGlmIChwICY9IDcsIGcgPyAoZiA9IGUsIDAgIT09IHAgJiYgKGQgPSBhID0gYSB8fCBbXSksIHYgJiYgIWkgJiYgKGkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gX2NoZWNrSW5SSFModCkgPT09IGU7XG4gICAgICB9KSwgbSA9IGkpIDogKGYgPSBlLnByb3RvdHlwZSwgMCAhPT0gcCAmJiAoZCA9IG4gPSBuIHx8IFtdKSksIDAgIT09IHAgJiYgIXYpIHtcbiAgICAgICAgdmFyIGIgPSBnID8gYyA6IG8sXG4gICAgICAgICAgSSA9IGIuZ2V0KGgpIHx8IDA7XG4gICAgICAgIGlmICghMCA9PT0gSSB8fCAzID09PSBJICYmIDQgIT09IHAgfHwgNCA9PT0gSSAmJiAzICE9PSBwKSB0aHJvdyBuZXcgRXJyb3IoXCJBdHRlbXB0ZWQgdG8gZGVjb3JhdGUgYSBwdWJsaWMgbWV0aG9kL2FjY2Vzc29yIHRoYXQgaGFzIHRoZSBzYW1lIG5hbWUgYXMgYSBwcmV2aW91c2x5IGRlY29yYXRlZCBwdWJsaWMgbWV0aG9kL2FjY2Vzc29yLiBUaGlzIGlzIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkIGJ5IHRoZSBkZWNvcmF0b3JzIHBsdWdpbi4gUHJvcGVydHkgbmFtZSB3YXM6IFwiICsgaCk7XG4gICAgICAgIGIuc2V0KGgsICEoIUkgJiYgcCA+IDIpIHx8IHApO1xuICAgICAgfVxuICAgICAgYXBwbHlNZW1iZXJEZWMocywgZiwgdSwgeSwgaCwgcCwgZywgdiwgZCwgbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwdXNoSW5pdGlhbGl6ZXJzKHMsIG4pLCBwdXNoSW5pdGlhbGl6ZXJzKHMsIGEpLCBzO1xufVxuZnVuY3Rpb24gcHVzaEluaXRpYWxpemVycyhlLCB0KSB7XG4gIHQgJiYgZS5wdXNoKGZ1bmN0aW9uIChlKSB7XG4gICAgZm9yICh2YXIgciA9IDA7IHIgPCB0Lmxlbmd0aDsgcisrKSB0W3JdLmNhbGwoZSk7XG4gICAgcmV0dXJuIGU7XG4gIH0pO1xufVxuZnVuY3Rpb24gYXBwbHlDbGFzc0RlY3MoZSwgdCwgcikge1xuICBpZiAodC5sZW5ndGgpIHtcbiAgICBmb3IgKHZhciBuID0gW10sIGEgPSBlLCBpID0gZS5uYW1lLCBzID0gciA/IDIgOiAxLCBvID0gdC5sZW5ndGggLSAxOyBvID49IDA7IG8gLT0gcykge1xuICAgICAgdmFyIGMgPSB7XG4gICAgICAgIHY6ICExXG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIGwgPSB0W29dLmNhbGwociA/IHRbbyAtIDFdIDogdm9pZCAwLCBhLCB7XG4gICAgICAgICAga2luZDogXCJjbGFzc1wiLFxuICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgYWRkSW5pdGlhbGl6ZXI6IGNyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKG4sIGMpXG4gICAgICAgIH0pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYy52ID0gITA7XG4gICAgICB9XG4gICAgICB2b2lkIDAgIT09IGwgJiYgKGFzc2VydFZhbGlkUmV0dXJuVmFsdWUoNSwgbCksIGEgPSBsKTtcbiAgICB9XG4gICAgcmV0dXJuIFthLCBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBlID0gMDsgZSA8IG4ubGVuZ3RoOyBlKyspIG5bZV0uY2FsbChhKTtcbiAgICB9XTtcbiAgfVxufVxuZnVuY3Rpb24gX2FwcGx5RGVjczIzMDUoZSwgdCwgciwgbiwgYSkge1xuICByZXR1cm4ge1xuICAgIGU6IGFwcGx5TWVtYmVyRGVjcyhlLCB0LCBhKSxcbiAgICBnZXQgYygpIHtcbiAgICAgIHJldHVybiBhcHBseUNsYXNzRGVjcyhlLCByLCBuKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBfYXN5bmNHZW5lcmF0b3JEZWxlZ2F0ZSh0KSB7XG4gIHZhciBlID0ge30sXG4gICAgbiA9ICExO1xuICBmdW5jdGlvbiBwdW1wKGUsIHIpIHtcbiAgICByZXR1cm4gbiA9ICEwLCByID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKG4pIHtcbiAgICAgIG4odFtlXShyKSk7XG4gICAgfSksIHtcbiAgICAgIGRvbmU6ICExLFxuICAgICAgdmFsdWU6IG5ldyBfT3ZlcmxvYWRZaWVsZChyLCAxKVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGVbXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sIGUubmV4dCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIG4gPyAobiA9ICExLCB0KSA6IHB1bXAoXCJuZXh0XCIsIHQpO1xuICB9LCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQudGhyb3cgJiYgKGUudGhyb3cgPSBmdW5jdGlvbiAodCkge1xuICAgIGlmIChuKSB0aHJvdyBuID0gITEsIHQ7XG4gICAgcmV0dXJuIHB1bXAoXCJ0aHJvd1wiLCB0KTtcbiAgfSksIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5yZXR1cm4gJiYgKGUucmV0dXJuID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gbiA/IChuID0gITEsIHQpIDogcHVtcChcInJldHVyblwiLCB0KTtcbiAgfSksIGU7XG59XG5mdW5jdGlvbiBfYXN5bmNJdGVyYXRvcihyKSB7XG4gIHZhciBuLFxuICAgIHQsXG4gICAgbyxcbiAgICBlID0gMjtcbiAgZm9yIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgKHQgPSBTeW1ib2wuYXN5bmNJdGVyYXRvciwgbyA9IFN5bWJvbC5pdGVyYXRvcik7IGUtLTspIHtcbiAgICBpZiAodCAmJiBudWxsICE9IChuID0gclt0XSkpIHJldHVybiBuLmNhbGwocik7XG4gICAgaWYgKG8gJiYgbnVsbCAhPSAobiA9IHJbb10pKSByZXR1cm4gbmV3IEFzeW5jRnJvbVN5bmNJdGVyYXRvcihuLmNhbGwocikpO1xuICAgIHQgPSBcIkBAYXN5bmNJdGVyYXRvclwiLCBvID0gXCJAQGl0ZXJhdG9yXCI7XG4gIH1cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBpcyBub3QgYXN5bmMgaXRlcmFibGVcIik7XG59XG5mdW5jdGlvbiBBc3luY0Zyb21TeW5jSXRlcmF0b3Iocikge1xuICBmdW5jdGlvbiBBc3luY0Zyb21TeW5jSXRlcmF0b3JDb250aW51YXRpb24ocikge1xuICAgIGlmIChPYmplY3QocikgIT09IHIpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKHIgKyBcIiBpcyBub3QgYW4gb2JqZWN0LlwiKSk7XG4gICAgdmFyIG4gPSByLmRvbmU7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyLnZhbHVlKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogcixcbiAgICAgICAgZG9uZTogblxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gQXN5bmNGcm9tU3luY0l0ZXJhdG9yID0gZnVuY3Rpb24gKHIpIHtcbiAgICB0aGlzLnMgPSByLCB0aGlzLm4gPSByLm5leHQ7XG4gIH0sIEFzeW5jRnJvbVN5bmNJdGVyYXRvci5wcm90b3R5cGUgPSB7XG4gICAgczogbnVsbCxcbiAgICBuOiBudWxsLFxuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBBc3luY0Zyb21TeW5jSXRlcmF0b3JDb250aW51YXRpb24odGhpcy5uLmFwcGx5KHRoaXMucywgYXJndW1lbnRzKSk7XG4gICAgfSxcbiAgICByZXR1cm46IGZ1bmN0aW9uIChyKSB7XG4gICAgICB2YXIgbiA9IHRoaXMucy5yZXR1cm47XG4gICAgICByZXR1cm4gdm9pZCAwID09PSBuID8gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgdmFsdWU6IHIsXG4gICAgICAgIGRvbmU6ICEwXG4gICAgICB9KSA6IEFzeW5jRnJvbVN5bmNJdGVyYXRvckNvbnRpbnVhdGlvbihuLmFwcGx5KHRoaXMucywgYXJndW1lbnRzKSk7XG4gICAgfSxcbiAgICB0aHJvdzogZnVuY3Rpb24gKHIpIHtcbiAgICAgIHZhciBuID0gdGhpcy5zLnJldHVybjtcbiAgICAgIHJldHVybiB2b2lkIDAgPT09IG4gPyBQcm9taXNlLnJlamVjdChyKSA6IEFzeW5jRnJvbVN5bmNJdGVyYXRvckNvbnRpbnVhdGlvbihuLmFwcGx5KHRoaXMucywgYXJndW1lbnRzKSk7XG4gICAgfVxuICB9LCBuZXcgQXN5bmNGcm9tU3luY0l0ZXJhdG9yKHIpO1xufVxuZnVuY3Rpb24gX2F3YWl0QXN5bmNHZW5lcmF0b3IoZSkge1xuICByZXR1cm4gbmV3IF9PdmVybG9hZFlpZWxkKGUsIDApO1xufVxuZnVuY3Rpb24gX2NoZWNrSW5SSFMoZSkge1xuICBpZiAoT2JqZWN0KGUpICE9PSBlKSB0aHJvdyBUeXBlRXJyb3IoXCJyaWdodC1oYW5kIHNpZGUgb2YgJ2luJyBzaG91bGQgYmUgYW4gb2JqZWN0LCBnb3QgXCIgKyAobnVsbCAhPT0gZSA/IHR5cGVvZiBlIDogXCJudWxsXCIpKTtcbiAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBfZGVmaW5lQWNjZXNzb3IoZSwgciwgbiwgdCkge1xuICB2YXIgYyA9IHtcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIGVudW1lcmFibGU6ICEwXG4gIH07XG4gIHJldHVybiBjW2VdID0gdCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsIG4sIGMpO1xufVxuZnVuY3Rpb24gZGlzcG9zZV9TdXBwcmVzc2VkRXJyb3IociwgZSkge1xuICByZXR1cm4gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID8gZGlzcG9zZV9TdXBwcmVzc2VkRXJyb3IgPSBTdXBwcmVzc2VkRXJyb3IgOiAoZGlzcG9zZV9TdXBwcmVzc2VkRXJyb3IgPSBmdW5jdGlvbiAociwgZSkge1xuICAgIHRoaXMuc3VwcHJlc3NlZCA9IHIsIHRoaXMuZXJyb3IgPSBlLCB0aGlzLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gIH0sIGRpc3Bvc2VfU3VwcHJlc3NlZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBkaXNwb3NlX1N1cHByZXNzZWRFcnJvcixcbiAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICB9XG4gIH0pKSwgbmV3IGRpc3Bvc2VfU3VwcHJlc3NlZEVycm9yKHIsIGUpO1xufVxuZnVuY3Rpb24gX2Rpc3Bvc2UociwgZSwgcykge1xuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGZvciAoOyByLmxlbmd0aCA+IDA7KSB0cnkge1xuICAgICAgdmFyIG8gPSByLnBvcCgpLFxuICAgICAgICBwID0gby5kLmNhbGwoby52KTtcbiAgICAgIGlmIChvLmEpIHJldHVybiBQcm9taXNlLnJlc29sdmUocCkudGhlbihuZXh0LCBlcnIpO1xuICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgIHJldHVybiBlcnIocik7XG4gICAgfVxuICAgIGlmIChzKSB0aHJvdyBlO1xuICB9XG4gIGZ1bmN0aW9uIGVycihyKSB7XG4gICAgcmV0dXJuIGUgPSBzID8gbmV3IGRpc3Bvc2VfU3VwcHJlc3NlZEVycm9yKHIsIGUpIDogciwgcyA9ICEwLCBuZXh0KCk7XG4gIH1cbiAgcmV0dXJuIG5leHQoKTtcbn1cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChyLCBsKSB7XG4gIHZhciB0ID0gbnVsbCA9PSByID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiByW1N5bWJvbC5pdGVyYXRvcl0gfHwgcltcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChudWxsICE9IHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgdSxcbiAgICAgIGEgPSBbXSxcbiAgICAgIGYgPSAhMCxcbiAgICAgIG8gPSAhMTtcbiAgICB0cnkge1xuICAgICAgaWYgKGkgPSAodCA9IHQuY2FsbChyKSkubmV4dCwgMCA9PT0gbCkge1xuICAgICAgICBpZiAoT2JqZWN0KHQpICE9PSB0KSByZXR1cm47XG4gICAgICAgIGYgPSAhMTtcbiAgICAgIH0gZWxzZSBmb3IgKDsgIShmID0gKGUgPSBpLmNhbGwodCkpLmRvbmUpICYmIChhLnB1c2goZS52YWx1ZSksIGEubGVuZ3RoICE9PSBsKTsgZiA9ICEwKTtcbiAgICB9IGNhdGNoIChyKSB7XG4gICAgICBvID0gITAsIG4gPSByO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIWYgJiYgbnVsbCAhPSB0LnJldHVybiAmJiAodSA9IHQucmV0dXJuKCksIE9iamVjdCh1KSAhPT0gdSkpIHJldHVybjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxufVxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0TG9vc2UoZSwgcikge1xuICB2YXIgdCA9IGUgJiYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBlW1N5bWJvbC5pdGVyYXRvcl0gfHwgZVtcIkBAaXRlcmF0b3JcIl0pO1xuICBpZiAobnVsbCAhPSB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBsID0gW107XG4gICAgZm9yICh0ID0gdC5jYWxsKGUpOyBlLmxlbmd0aCA8IHIgJiYgIShvID0gdC5uZXh0KCkpLmRvbmU7KSBsLnB1c2goby52YWx1ZSk7XG4gICAgcmV0dXJuIGw7XG4gIH1cbn1cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEU7XG5mdW5jdGlvbiBfanN4KGUsIHIsIEUsIGwpIHtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFIHx8IChSRUFDVF9FTEVNRU5UX1RZUEUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wuZm9yICYmIFN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpIHx8IDYwMTAzKTtcbiAgdmFyIG8gPSBlICYmIGUuZGVmYXVsdFByb3BzLFxuICAgIG4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMztcbiAgaWYgKHIgfHwgMCA9PT0gbiB8fCAociA9IHtcbiAgICBjaGlsZHJlbjogdm9pZCAwXG4gIH0pLCAxID09PSBuKSByLmNoaWxkcmVuID0gbDtlbHNlIGlmIChuID4gMSkge1xuICAgIGZvciAodmFyIHQgPSBuZXcgQXJyYXkobiksIGYgPSAwOyBmIDwgbjsgZisrKSB0W2ZdID0gYXJndW1lbnRzW2YgKyAzXTtcbiAgICByLmNoaWxkcmVuID0gdDtcbiAgfVxuICBpZiAociAmJiBvKSBmb3IgKHZhciBpIGluIG8pIHZvaWQgMCA9PT0gcltpXSAmJiAocltpXSA9IG9baV0pO2Vsc2UgciB8fCAociA9IG8gfHwge30pO1xuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgdHlwZTogZSxcbiAgICBrZXk6IHZvaWQgMCA9PT0gRSA/IG51bGwgOiBcIlwiICsgRSxcbiAgICByZWY6IG51bGwsXG4gICAgcHJvcHM6IHIsXG4gICAgX293bmVyOiBudWxsXG4gIH07XG59XG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHtcbiAgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7XG4gICAgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlO1xuICAgIH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pO1xuICB9XG4gIHJldHVybiB0O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIoZSkge1xuICBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykge1xuICAgIHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTtcbiAgICByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlO1xufVxuZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8qISByZWdlbmVyYXRvci1ydW50aW1lIC0tIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiAtLSBsaWNlbnNlIChNSVQpOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL0xJQ0VOU0UgKi9cbiAgX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZTtcbiAgfTtcbiAgdmFyIHQsXG4gICAgZSA9IHt9LFxuICAgIHIgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIG4gPSByLmhhc093blByb3BlcnR5LFxuICAgIG8gPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKHQsIGUsIHIpIHtcbiAgICAgIHRbZV0gPSByLnZhbHVlO1xuICAgIH0sXG4gICAgaSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgYSA9IGkuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgYyA9IGkuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLFxuICAgIHUgPSBpLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgZSwge1xuICAgICAgdmFsdWU6IHIsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgdFtlXTtcbiAgfVxuICB0cnkge1xuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKHQpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiAodCwgZSwgcikge1xuICAgICAgcmV0dXJuIHRbZV0gPSByO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gd3JhcCh0LCBlLCByLCBuKSB7XG4gICAgdmFyIGkgPSBlICYmIGUucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gZSA6IEdlbmVyYXRvcixcbiAgICAgIGEgPSBPYmplY3QuY3JlYXRlKGkucHJvdG90eXBlKSxcbiAgICAgIGMgPSBuZXcgQ29udGV4dChuIHx8IFtdKTtcbiAgICByZXR1cm4gbyhhLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QodCwgciwgYylcbiAgICB9KSwgYTtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaCh0LCBlLCByKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogdC5jYWxsKGUsIHIpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiB0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBlLndyYXAgPSB3cmFwO1xuICB2YXIgaCA9IFwic3VzcGVuZGVkU3RhcnRcIixcbiAgICBsID0gXCJzdXNwZW5kZWRZaWVsZFwiLFxuICAgIGYgPSBcImV4ZWN1dGluZ1wiLFxuICAgIHMgPSBcImNvbXBsZXRlZFwiLFxuICAgIHkgPSB7fTtcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG4gIHZhciBwID0ge307XG4gIGRlZmluZShwLCBhLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICB2YXIgZCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICB2ID0gZCAmJiBkKGQodmFsdWVzKFtdKSkpO1xuICB2ICYmIHYgIT09IHIgJiYgbi5jYWxsKHYsIGEpICYmIChwID0gdik7XG4gIHZhciBnID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocCk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyh0KSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlZmluZSh0LCBlLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKGUsIHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcih0LCBlKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKHIsIG8sIGksIGEpIHtcbiAgICAgIHZhciBjID0gdHJ5Q2F0Y2godFtyXSwgdCwgbyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSBjLnR5cGUpIHtcbiAgICAgICAgdmFyIHUgPSBjLmFyZyxcbiAgICAgICAgICBoID0gdS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGggJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgaCAmJiBuLmNhbGwoaCwgXCJfX2F3YWl0XCIpID8gZS5yZXNvbHZlKGguX19hd2FpdCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdCwgaSwgYSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgdCwgaSwgYSk7XG4gICAgICAgIH0pIDogZS5yZXNvbHZlKGgpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB1LnZhbHVlID0gdCwgaSh1KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgdCwgaSwgYSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYShjLmFyZyk7XG4gICAgfVxuICAgIHZhciByO1xuICAgIG8odGhpcywgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IGUoZnVuY3Rpb24gKGUsIHIpIHtcbiAgICAgICAgICAgIGludm9rZSh0LCBuLCBlLCByKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gciA9IHIgPyByLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChlLCByLCBuKSB7XG4gICAgdmFyIG8gPSBoO1xuICAgIHJldHVybiBmdW5jdGlvbiAoaSwgYSkge1xuICAgICAgaWYgKG8gPT09IGYpIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICBpZiAobyA9PT0gcykge1xuICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBpKSB0aHJvdyBhO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB0LFxuICAgICAgICAgIGRvbmU6ICEwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBmb3IgKG4ubWV0aG9kID0gaSwgbi5hcmcgPSBhOzspIHtcbiAgICAgICAgdmFyIGMgPSBuLmRlbGVnYXRlO1xuICAgICAgICBpZiAoYykge1xuICAgICAgICAgIHZhciB1ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShjLCBuKTtcbiAgICAgICAgICBpZiAodSkge1xuICAgICAgICAgICAgaWYgKHUgPT09IHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIHU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChcIm5leHRcIiA9PT0gbi5tZXRob2QpIG4uc2VudCA9IG4uX3NlbnQgPSBuLmFyZztlbHNlIGlmIChcInRocm93XCIgPT09IG4ubWV0aG9kKSB7XG4gICAgICAgICAgaWYgKG8gPT09IGgpIHRocm93IG8gPSBzLCBuLmFyZztcbiAgICAgICAgICBuLmRpc3BhdGNoRXhjZXB0aW9uKG4uYXJnKTtcbiAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IG4ubWV0aG9kICYmIG4uYWJydXB0KFwicmV0dXJuXCIsIG4uYXJnKTtcbiAgICAgICAgbyA9IGY7XG4gICAgICAgIHZhciBwID0gdHJ5Q2F0Y2goZSwgciwgbik7XG4gICAgICAgIGlmIChcIm5vcm1hbFwiID09PSBwLnR5cGUpIHtcbiAgICAgICAgICBpZiAobyA9IG4uZG9uZSA/IHMgOiBsLCBwLmFyZyA9PT0geSkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IG4uZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXCJ0aHJvd1wiID09PSBwLnR5cGUgJiYgKG8gPSBzLCBuLm1ldGhvZCA9IFwidGhyb3dcIiwgbi5hcmcgPSBwLmFyZyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGUsIHIpIHtcbiAgICB2YXIgbiA9IHIubWV0aG9kLFxuICAgICAgbyA9IGUuaXRlcmF0b3Jbbl07XG4gICAgaWYgKG8gPT09IHQpIHJldHVybiByLmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBuICYmIGUuaXRlcmF0b3IucmV0dXJuICYmIChyLm1ldGhvZCA9IFwicmV0dXJuXCIsIHIuYXJnID0gdCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShlLCByKSwgXCJ0aHJvd1wiID09PSByLm1ldGhvZCkgfHwgXCJyZXR1cm5cIiAhPT0gbiAmJiAoci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbiArIFwiJyBtZXRob2RcIikpLCB5O1xuICAgIHZhciBpID0gdHJ5Q2F0Y2gobywgZS5pdGVyYXRvciwgci5hcmcpO1xuICAgIGlmIChcInRocm93XCIgPT09IGkudHlwZSkgcmV0dXJuIHIubWV0aG9kID0gXCJ0aHJvd1wiLCByLmFyZyA9IGkuYXJnLCByLmRlbGVnYXRlID0gbnVsbCwgeTtcbiAgICB2YXIgYSA9IGkuYXJnO1xuICAgIHJldHVybiBhID8gYS5kb25lID8gKHJbZS5yZXN1bHROYW1lXSA9IGEudmFsdWUsIHIubmV4dCA9IGUubmV4dExvYywgXCJyZXR1cm5cIiAhPT0gci5tZXRob2QgJiYgKHIubWV0aG9kID0gXCJuZXh0XCIsIHIuYXJnID0gdCksIHIuZGVsZWdhdGUgPSBudWxsLCB5KSA6IGEgOiAoci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCByLmRlbGVnYXRlID0gbnVsbCwgeSk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KHQpIHtcbiAgICB2YXIgZSA9IHtcbiAgICAgIHRyeUxvYzogdFswXVxuICAgIH07XG4gICAgMSBpbiB0ICYmIChlLmNhdGNoTG9jID0gdFsxXSksIDIgaW4gdCAmJiAoZS5maW5hbGx5TG9jID0gdFsyXSwgZS5hZnRlckxvYyA9IHRbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlKTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KHQpIHtcbiAgICB2YXIgZSA9IHQuY29tcGxldGlvbiB8fCB7fTtcbiAgICBlLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgZS5hcmcsIHQuY29tcGxldGlvbiA9IGU7XG4gIH1cbiAgZnVuY3Rpb24gQ29udGV4dCh0KSB7XG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XSwgdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApO1xuICB9XG4gIGZ1bmN0aW9uIHZhbHVlcyhlKSB7XG4gICAgaWYgKGUgfHwgXCJcIiA9PT0gZSkge1xuICAgICAgdmFyIHIgPSBlW2FdO1xuICAgICAgaWYgKHIpIHJldHVybiByLmNhbGwoZSk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLm5leHQpIHJldHVybiBlO1xuICAgICAgaWYgKCFpc05hTihlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIG8gPSAtMSxcbiAgICAgICAgICBpID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGZvciAoOyArK28gPCBlLmxlbmd0aDspIGlmIChuLmNhbGwoZSwgbykpIHJldHVybiBuZXh0LnZhbHVlID0gZVtvXSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHQsIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBpLm5leHQgPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHR5cGVvZiBlICsgXCIgaXMgbm90IGl0ZXJhYmxlXCIpO1xuICB9XG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgbyhnLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgbyhHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB1LCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBlLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiB0ICYmIHQuY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhZSAmJiAoZSA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoZS5kaXNwbGF5TmFtZSB8fCBlLm5hbWUpKTtcbiAgfSwgZS5tYXJrID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHQsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSA6ICh0Ll9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUodCwgdSwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShnKSwgdDtcbiAgfSwgZS5hd3JhcCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9fYXdhaXQ6IHRcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGMsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGUuYXN5bmMgPSBmdW5jdGlvbiAodCwgciwgbiwgbywgaSkge1xuICAgIHZvaWQgMCA9PT0gaSAmJiAoaSA9IFByb21pc2UpO1xuICAgIHZhciBhID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcCh0LCByLCBuLCBvKSwgaSk7XG4gICAgcmV0dXJuIGUuaXNHZW5lcmF0b3JGdW5jdGlvbihyKSA/IGEgOiBhLm5leHQoKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5kb25lID8gdC52YWx1ZSA6IGEubmV4dCgpO1xuICAgIH0pO1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoZyksIGRlZmluZShnLCB1LCBcIkdlbmVyYXRvclwiKSwgZGVmaW5lKGcsIGEsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGRlZmluZShnLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSksIGUua2V5cyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSBPYmplY3QodCksXG4gICAgICByID0gW107XG4gICAgZm9yICh2YXIgbiBpbiBlKSByLnB1c2gobik7XG4gICAgcmV0dXJuIHIucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IHIubGVuZ3RoOykge1xuICAgICAgICB2YXIgdCA9IHIucG9wKCk7XG4gICAgICAgIGlmICh0IGluIGUpIHJldHVybiBuZXh0LnZhbHVlID0gdCwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgfTtcbiAgfSwgZS52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgIHJlc2V0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB0LCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFlKSBmb3IgKHZhciByIGluIHRoaXMpIFwidFwiID09PSByLmNoYXJBdCgwKSAmJiBuLmNhbGwodGhpcywgcikgJiYgIWlzTmFOKCtyLnNsaWNlKDEpKSAmJiAodGhpc1tyXSA9IHQpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kb25lID0gITA7XG4gICAgICB2YXIgdCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uO1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gdC50eXBlKSB0aHJvdyB0LmFyZztcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGU7XG4gICAgICB2YXIgciA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobiwgbykge1xuICAgICAgICByZXR1cm4gYS50eXBlID0gXCJ0aHJvd1wiLCBhLmFyZyA9IGUsIHIubmV4dCA9IG4sIG8gJiYgKHIubWV0aG9kID0gXCJuZXh0XCIsIHIuYXJnID0gdCksICEhbztcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIG8gPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgbyA+PSAwOyAtLW8pIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnRyeUVudHJpZXNbb10sXG4gICAgICAgICAgYSA9IGkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBpLnRyeUxvYykgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgaWYgKGkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBjID0gbi5jYWxsKGksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICB1ID0gbi5jYWxsKGksIFwiZmluYWxseUxvY1wiKTtcbiAgICAgICAgICBpZiAoYyAmJiB1KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdSkgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICBmb3IgKHZhciByID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IHIgPj0gMDsgLS1yKSB7XG4gICAgICAgIHZhciBvID0gdGhpcy50cnlFbnRyaWVzW3JdO1xuICAgICAgICBpZiAoby50cnlMb2MgPD0gdGhpcy5wcmV2ICYmIG4uY2FsbChvLCBcImZpbmFsbHlMb2NcIikgJiYgdGhpcy5wcmV2IDwgby5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGkgPSBvO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpICYmIChcImJyZWFrXCIgPT09IHQgfHwgXCJjb250aW51ZVwiID09PSB0KSAmJiBpLnRyeUxvYyA8PSBlICYmIGUgPD0gaS5maW5hbGx5TG9jICYmIChpID0gbnVsbCk7XG4gICAgICB2YXIgYSA9IGkgPyBpLmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJldHVybiBhLnR5cGUgPSB0LCBhLmFyZyA9IGUsIGkgPyAodGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5uZXh0ID0gaS5maW5hbGx5TG9jLCB5KSA6IHRoaXMuY29tcGxldGUoYSk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHQudHlwZSkgdGhyb3cgdC5hcmc7XG4gICAgICByZXR1cm4gXCJicmVha1wiID09PSB0LnR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0LnR5cGUgPyB0aGlzLm5leHQgPSB0LmFyZyA6IFwicmV0dXJuXCIgPT09IHQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gdC50eXBlICYmIGUgJiYgKHRoaXMubmV4dCA9IGUpLCB5O1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiAodCkge1xuICAgICAgZm9yICh2YXIgZSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBlID49IDA7IC0tZSkge1xuICAgICAgICB2YXIgciA9IHRoaXMudHJ5RW50cmllc1tlXTtcbiAgICAgICAgaWYgKHIuZmluYWxseUxvYyA9PT0gdCkgcmV0dXJuIHRoaXMuY29tcGxldGUoci5jb21wbGV0aW9uLCByLmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShyKSwgeTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhdGNoOiBmdW5jdGlvbiAodCkge1xuICAgICAgZm9yICh2YXIgZSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBlID49IDA7IC0tZSkge1xuICAgICAgICB2YXIgciA9IHRoaXMudHJ5RW50cmllc1tlXTtcbiAgICAgICAgaWYgKHIudHJ5TG9jID09PSB0KSB7XG4gICAgICAgICAgdmFyIG4gPSByLmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gbi50eXBlKSB7XG4gICAgICAgICAgICB2YXIgbyA9IG4uYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIChlLCByLCBuKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcixcbiAgICAgICAgbmV4dExvYzogblxuICAgICAgfSwgXCJuZXh0XCIgPT09IHRoaXMubWV0aG9kICYmICh0aGlzLmFyZyA9IHQpLCB5O1xuICAgIH1cbiAgfSwgZTtcbn1cbmZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5mdW5jdGlvbiBfdXNpbmcobywgZSwgbikge1xuICBpZiAobnVsbCA9PSBlKSByZXR1cm4gZTtcbiAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIGUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ1c2luZyBkZWNsYXJhdGlvbnMgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIG9iamVjdHMsIG51bGwsIG9yIHVuZGVmaW5lZC5cIik7XG4gIGlmIChuKSB2YXIgciA9IGVbU3ltYm9sLmFzeW5jRGlzcG9zZSB8fCBTeW1ib2wuZm9yKFwiU3ltYm9sLmFzeW5jRGlzcG9zZVwiKV07XG4gIGlmIChudWxsID09IHIgJiYgKHIgPSBlW1N5bWJvbC5kaXNwb3NlIHx8IFN5bWJvbC5mb3IoXCJTeW1ib2wuZGlzcG9zZVwiKV0pLCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9wZXJ0eSBbU3ltYm9sLmRpc3Bvc2VdIGlzIG5vdCBhIGZ1bmN0aW9uLlwiKTtcbiAgcmV0dXJuIG8ucHVzaCh7XG4gICAgdjogZSxcbiAgICBkOiByLFxuICAgIGE6IG5cbiAgfSksIGU7XG59XG5mdW5jdGlvbiBfd3JhcFJlZ0V4cCgpIHtcbiAgX3dyYXBSZWdFeHAgPSBmdW5jdGlvbiAoZSwgcikge1xuICAgIHJldHVybiBuZXcgQmFiZWxSZWdFeHAoZSwgdm9pZCAwLCByKTtcbiAgfTtcbiAgdmFyIGUgPSBSZWdFeHAucHJvdG90eXBlLFxuICAgIHIgPSBuZXcgV2Vha01hcCgpO1xuICBmdW5jdGlvbiBCYWJlbFJlZ0V4cChlLCB0LCBwKSB7XG4gICAgdmFyIG8gPSBuZXcgUmVnRXhwKGUsIHQpO1xuICAgIHJldHVybiByLnNldChvLCBwIHx8IHIuZ2V0KGUpKSwgX3NldFByb3RvdHlwZU9mKG8sIEJhYmVsUmVnRXhwLnByb3RvdHlwZSk7XG4gIH1cbiAgZnVuY3Rpb24gYnVpbGRHcm91cHMoZSwgdCkge1xuICAgIHZhciBwID0gci5nZXQodCk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHApLnJlZHVjZShmdW5jdGlvbiAociwgdCkge1xuICAgICAgdmFyIG8gPSBwW3RdO1xuICAgICAgaWYgKFwibnVtYmVyXCIgPT0gdHlwZW9mIG8pIHJbdF0gPSBlW29dO2Vsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgdm9pZCAwID09PSBlW29baV1dICYmIGkgKyAxIDwgby5sZW5ndGg7KSBpKys7XG4gICAgICAgIHJbdF0gPSBlW29baV1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gIH1cbiAgcmV0dXJuIF9pbmhlcml0cyhCYWJlbFJlZ0V4cCwgUmVnRXhwKSwgQmFiZWxSZWdFeHAucHJvdG90eXBlLmV4ZWMgPSBmdW5jdGlvbiAocikge1xuICAgIHZhciB0ID0gZS5leGVjLmNhbGwodGhpcywgcik7XG4gICAgaWYgKHQpIHtcbiAgICAgIHQuZ3JvdXBzID0gYnVpbGRHcm91cHModCwgdGhpcyk7XG4gICAgICB2YXIgcCA9IHQuaW5kaWNlcztcbiAgICAgIHAgJiYgKHAuZ3JvdXBzID0gYnVpbGRHcm91cHMocCwgdGhpcykpO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfSwgQmFiZWxSZWdFeHAucHJvdG90eXBlW1N5bWJvbC5yZXBsYWNlXSA9IGZ1bmN0aW9uICh0LCBwKSB7XG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHApIHtcbiAgICAgIHZhciBvID0gci5nZXQodGhpcyk7XG4gICAgICByZXR1cm4gZVtTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCB0LCBwLnJlcGxhY2UoL1xcJDwoW14+XSspPi9nLCBmdW5jdGlvbiAoZSwgcikge1xuICAgICAgICB2YXIgdCA9IG9bcl07XG4gICAgICAgIHJldHVybiBcIiRcIiArIChBcnJheS5pc0FycmF5KHQpID8gdC5qb2luKFwiJFwiKSA6IHQpO1xuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBwKSB7XG4gICAgICB2YXIgaSA9IHRoaXM7XG4gICAgICByZXR1cm4gZVtTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCB0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gXCJvYmplY3RcIiAhPSB0eXBlb2YgZVtlLmxlbmd0aCAtIDFdICYmIChlID0gW10uc2xpY2UuY2FsbChlKSkucHVzaChidWlsZEdyb3VwcyhlLCBpKSksIHAuYXBwbHkodGhpcywgZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGVbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgdCwgcCk7XG4gIH0sIF93cmFwUmVnRXhwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICB0aGlzLndyYXBwZWQgPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIF93cmFwQXN5bmNHZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IF9Bc3luY0dlbmVyYXRvcihmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5mdW5jdGlvbiBfZGVmaW5lRW51bWVyYWJsZVByb3BlcnRpZXMob2JqLCBkZXNjcykge1xuICBmb3IgKHZhciBrZXkgaW4gZGVzY3MpIHtcbiAgICB2YXIgZGVzYyA9IGRlc2NzW2tleV07XG4gICAgZGVzYy5jb25maWd1cmFibGUgPSBkZXNjLmVudW1lcmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzYykgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCBkZXNjKTtcbiAgfVxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBvYmplY3RTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhkZXNjcyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3ltID0gb2JqZWN0U3ltYm9sc1tpXTtcbiAgICAgIHZhciBkZXNjID0gZGVzY3Nbc3ltXTtcbiAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gZGVzYy5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzYykgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBzeW0sIGRlc2MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHtcbiAgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBPYmplY3QoYXJndW1lbnRzW2ldKSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMucHVzaC5hcHBseShvd25LZXlzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdC5iaW5kKCk7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG59XG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG4gIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcbiAgICBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgIH1cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcbiAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xufVxuZnVuY3Rpb24gX2luc3RhbmNlb2YobGVmdCwgcmlnaHQpIHtcbiAgaWYgKHJpZ2h0ICE9IG51bGwgJiYgdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiByaWdodFtTeW1ib2wuaGFzSW5zdGFuY2VdKSB7XG4gICAgcmV0dXJuICEhcmlnaHRbU3ltYm9sLmhhc0luc3RhbmNlXShsZWZ0KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGVmdCBpbnN0YW5jZW9mIHJpZ2h0O1xuICB9XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpO1xuICByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIChub2RlSW50ZXJvcCkge1xuICAgIHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDtcbiAgfSkobm9kZUludGVyb3ApO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkge1xuICBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7XG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbmV3T2JqLmRlZmF1bHQgPSBvYmo7XG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cbiAgcmV0dXJuIG5ld09iajtcbn1cbmZ1bmN0aW9uIF9uZXdBcnJvd0NoZWNrKGlubmVyVGhpcywgYm91bmRUaGlzKSB7XG4gIGlmIChpbm5lclRoaXMgIT09IGJvdW5kVGhpcykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgaW5zdGFudGlhdGUgYW4gYXJyb3cgZnVuY3Rpb25cIik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9vYmplY3REZXN0cnVjdHVyaW5nRW1wdHkob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBkZXN0cnVjdHVyZSBcIiArIG9iaik7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgIHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgIHJlc3VsdDtcbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcbiAgICAgIHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICB9O1xufVxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpO1xuICB9IGVsc2Uge1xuICAgIF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5zZXQpIHtcbiAgICBzZXQgPSBSZWZsZWN0LnNldDtcbiAgfSBlbHNlIHtcbiAgICBzZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgdmFyIGRlc2M7XG4gICAgICBpZiAoYmFzZSkge1xuICAgICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG4gICAgICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgICAgIGRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocmVjZWl2ZXIsIHByb3BlcnR5KTtcbiAgICAgIGlmIChkZXNjKSB7XG4gICAgICAgIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBkZXNjLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcik7XG59XG5mdW5jdGlvbiBfc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciwgaXNTdHJpY3QpIHtcbiAgdmFyIHMgPSBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyIHx8IHRhcmdldCk7XG4gIGlmICghcyAmJiBpc1N0cmljdCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ZhaWxlZCB0byBzZXQgcHJvcGVydHknKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufVxuZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cbiAgc3RyaW5ncy5yYXcgPSByYXc7XG4gIHJldHVybiBzdHJpbmdzO1xufVxuZnVuY3Rpb24gX3JlYWRPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7XG59XG5mdW5jdGlvbiBfd3JpdGVPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyB3cml0ZS1vbmx5XCIpO1xufVxuZnVuY3Rpb24gX2NsYXNzTmFtZVREWkVycm9yKG5hbWUpIHtcbiAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwiQ2xhc3MgXFxcIlwiICsgbmFtZSArIFwiXFxcIiBjYW5ub3QgYmUgcmVmZXJlbmNlZCBpbiBjb21wdXRlZCBwcm9wZXJ0eSBrZXlzLlwiKTtcbn1cbmZ1bmN0aW9uIF90ZW1wb3JhbFVuZGVmaW5lZCgpIHt9XG5mdW5jdGlvbiBfdGR6KG5hbWUpIHtcbiAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKG5hbWUgKyBcIiBpcyBub3QgZGVmaW5lZCAtIHRlbXBvcmFsIGRlYWQgem9uZVwiKTtcbn1cbmZ1bmN0aW9uIF90ZW1wb3JhbFJlZih2YWwsIG5hbWUpIHtcbiAgcmV0dXJuIHZhbCA9PT0gX3RlbXBvcmFsVW5kZWZpbmVkID8gX3RkeihuYW1lKSA6IHZhbDtcbn1cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXlMb29zZShhcnIsIGkpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdExvb3NlKGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuZnVuY3Rpb24gX3RvQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cbmZ1bmN0aW9uIF9tYXliZUFycmF5TGlrZShuZXh0LCBhcnIsIGkpIHtcbiAgaWYgKGFyciAmJiAhQXJyYXkuaXNBcnJheShhcnIpICYmIHR5cGVvZiBhcnIubGVuZ3RoID09PSBcIm51bWJlclwiKSB7XG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFyciwgaSAhPT0gdm9pZCAwICYmIGkgPCBsZW4gPyBpIDogbGVuKTtcbiAgfVxuICByZXR1cm4gbmV4dChhcnIsIGkpO1xufVxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59XG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7XG4gIHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdIHx8IG9bXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAoIWl0KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgaWYgKGl0KSBvID0gaXQ7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgczogRixcbiAgICAgICAgbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IG9baSsrXVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSxcbiAgICAgICAgZjogRlxuICAgICAgfTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICB9XG4gIHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSxcbiAgICBkaWRFcnIgPSBmYWxzZSxcbiAgICBlcnI7XG4gIHJldHVybiB7XG4gICAgczogZnVuY3Rpb24gKCkge1xuICAgICAgaXQgPSBpdC5jYWxsKG8pO1xuICAgIH0sXG4gICAgbjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7XG4gICAgICBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lO1xuICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgfSxcbiAgICBlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgZGlkRXJyID0gdHJ1ZTtcbiAgICAgIGVyciA9IGU7XG4gICAgfSxcbiAgICBmOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGRpZEVycikgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UobywgYWxsb3dBcnJheUxpa2UpIHtcbiAgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChpdCkgcmV0dXJuIChpdCA9IGl0LmNhbGwobykpLm5leHQuYmluZChpdCk7XG4gIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICBpZiAoaXQpIG8gPSBpdDtcbiAgICB2YXIgaSA9IDA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICBkb25lOiB0cnVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBvW2krK11cbiAgICAgIH07XG4gICAgfTtcbiAgfVxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5mdW5jdGlvbiBfc2tpcEZpcnN0R2VuZXJhdG9yTmV4dChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpdCA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaXQubmV4dCgpO1xuICAgIHJldHVybiBpdDtcbiAgfTtcbn1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5mdW5jdGlvbiBfaW5pdGlhbGl6ZXJXYXJuaW5nSGVscGVyKGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdEZWNvcmF0aW5nIGNsYXNzIHByb3BlcnR5IGZhaWxlZC4gUGxlYXNlIGVuc3VyZSB0aGF0ICcgKyAndHJhbnNmb3JtLWNsYXNzLXByb3BlcnRpZXMgaXMgZW5hYmxlZCBhbmQgcnVucyBhZnRlciB0aGUgZGVjb3JhdG9ycyB0cmFuc2Zvcm0uJyk7XG59XG5mdW5jdGlvbiBfaW5pdGlhbGl6ZXJEZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIGlmICghZGVzY3JpcHRvcikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwge1xuICAgIGVudW1lcmFibGU6IGRlc2NyaXB0b3IuZW51bWVyYWJsZSxcbiAgICBjb25maWd1cmFibGU6IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlLFxuICAgIHdyaXRhYmxlOiBkZXNjcmlwdG9yLndyaXRhYmxlLFxuICAgIHZhbHVlOiBkZXNjcmlwdG9yLmluaXRpYWxpemVyID8gZGVzY3JpcHRvci5pbml0aWFsaXplci5jYWxsKGNvbnRleHQpIDogdm9pZCAwXG4gIH0pO1xufVxuZnVuY3Rpb24gX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5LCBkZWNvcmF0b3JzLCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIHZhciBkZXNjID0ge307XG4gIE9iamVjdC5rZXlzKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG4gIGlmICgndmFsdWUnIGluIGRlc2MgfHwgZGVzYy5pbml0aWFsaXplcikge1xuICAgIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICB9XG4gIGRlc2MgPSBkZWNvcmF0b3JzLnNsaWNlKCkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoZGVzYywgZGVjb3JhdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCBkZXNjKSB8fCBkZXNjO1xuICB9LCBkZXNjKTtcbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoZGVzYy5pbml0aWFsaXplciA9PT0gdm9pZCAwKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIGRlc2MpO1xuICAgIGRlc2MgPSBudWxsO1xuICB9XG4gIHJldHVybiBkZXNjO1xufVxudmFyIGlkID0gMDtcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZExvb3NlS2V5KG5hbWUpIHtcbiAgcmV0dXJuIFwiX19wcml2YXRlX1wiICsgaWQrKyArIFwiX1wiICsgbmFtZTtcbn1cbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZExvb3NlQmFzZShyZWNlaXZlciwgcHJpdmF0ZUtleSkge1xuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZWNlaXZlciwgcHJpdmF0ZUtleSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHVzZSBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuICByZXR1cm4gcmVjZWl2ZXI7XG59XG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcImdldFwiKTtcbiAgcmV0dXJuIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcik7XG59XG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJzZXRcIik7XG4gIF9jbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGREZXN0cnVjdHVyZVNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICB2YXIgZGVzY3JpcHRvciA9IF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwic2V0XCIpO1xuICByZXR1cm4gX2NsYXNzQXBwbHlEZXNjcmlwdG9yRGVzdHJ1Y3R1cmVTZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpO1xufVxuZnVuY3Rpb24gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgYWN0aW9uKSB7XG4gIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBcIiArIGFjdGlvbiArIFwiIHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG4gIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG59XG5mdW5jdGlvbiBfY2xhc3NTdGF0aWNQcml2YXRlRmllbGRTcGVjR2V0KHJlY2VpdmVyLCBjbGFzc0NvbnN0cnVjdG9yLCBkZXNjcmlwdG9yKSB7XG4gIF9jbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0FjY2VzcyhyZWNlaXZlciwgY2xhc3NDb25zdHJ1Y3Rvcik7XG4gIF9jbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0ZpZWxkRGVzY3JpcHRvcihkZXNjcmlwdG9yLCBcImdldFwiKTtcbiAgcmV0dXJuIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcik7XG59XG5mdW5jdGlvbiBfY2xhc3NTdGF0aWNQcml2YXRlRmllbGRTcGVjU2V0KHJlY2VpdmVyLCBjbGFzc0NvbnN0cnVjdG9yLCBkZXNjcmlwdG9yLCB2YWx1ZSkge1xuICBfY2xhc3NDaGVja1ByaXZhdGVTdGF0aWNBY2Nlc3MocmVjZWl2ZXIsIGNsYXNzQ29uc3RydWN0b3IpO1xuICBfY2xhc3NDaGVja1ByaXZhdGVTdGF0aWNGaWVsZERlc2NyaXB0b3IoZGVzY3JpcHRvciwgXCJzZXRcIik7XG4gIF9jbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBfY2xhc3NTdGF0aWNQcml2YXRlTWV0aG9kR2V0KHJlY2VpdmVyLCBjbGFzc0NvbnN0cnVjdG9yLCBtZXRob2QpIHtcbiAgX2NsYXNzQ2hlY2tQcml2YXRlU3RhdGljQWNjZXNzKHJlY2VpdmVyLCBjbGFzc0NvbnN0cnVjdG9yKTtcbiAgcmV0dXJuIG1ldGhvZDtcbn1cbmZ1bmN0aW9uIF9jbGFzc1N0YXRpY1ByaXZhdGVNZXRob2RTZXQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBzdGF0aWMgcHJpdmF0ZSBmaWVsZFwiKTtcbn1cbmZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7XG4gIH1cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59XG5mdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IsIHZhbHVlKSB7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpO1xuICAgIH1cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvckRlc3RydWN0dXJlU2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKSB7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGlmICghKFwiX19kZXN0ck9ialwiIGluIGRlc2NyaXB0b3IpKSB7XG4gICAgICBkZXNjcmlwdG9yLl9fZGVzdHJPYmogPSB7XG4gICAgICAgIHNldCB2YWx1ZSh2KSB7XG4gICAgICAgICAgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9yLl9fZGVzdHJPYmo7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jbGFzc1N0YXRpY1ByaXZhdGVGaWVsZERlc3RydWN0dXJlU2V0KHJlY2VpdmVyLCBjbGFzc0NvbnN0cnVjdG9yLCBkZXNjcmlwdG9yKSB7XG4gIF9jbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0FjY2VzcyhyZWNlaXZlciwgY2xhc3NDb25zdHJ1Y3Rvcik7XG4gIF9jbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0ZpZWxkRGVzY3JpcHRvcihkZXNjcmlwdG9yLCBcInNldFwiKTtcbiAgcmV0dXJuIF9jbGFzc0FwcGx5RGVzY3JpcHRvckRlc3RydWN0dXJlU2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKTtcbn1cbmZ1bmN0aW9uIF9jbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0FjY2VzcyhyZWNlaXZlciwgY2xhc3NDb25zdHJ1Y3Rvcikge1xuICBpZiAocmVjZWl2ZXIgIT09IGNsYXNzQ29uc3RydWN0b3IpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBzdGF0aWMgYWNjZXNzIG9mIHdyb25nIHByb3ZlbmFuY2VcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0ZpZWxkRGVzY3JpcHRvcihkZXNjcmlwdG9yLCBhY3Rpb24pIHtcbiAgaWYgKGRlc2NyaXB0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIHN0YXRpYyBmaWVsZCBiZWZvcmUgaXRzIGRlY2xhcmF0aW9uXCIpO1xuICB9XG59XG5mdW5jdGlvbiBfZGVjb3JhdGUoZGVjb3JhdG9ycywgZmFjdG9yeSwgc3VwZXJDbGFzcywgbWl4aW5zKSB7XG4gIHZhciBhcGkgPSBfZ2V0RGVjb3JhdG9yc0FwaSgpO1xuICBpZiAobWl4aW5zKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtaXhpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFwaSA9IG1peGluc1tpXShhcGkpO1xuICAgIH1cbiAgfVxuICB2YXIgciA9IGZhY3RvcnkoZnVuY3Rpb24gaW5pdGlhbGl6ZShPKSB7XG4gICAgYXBpLmluaXRpYWxpemVJbnN0YW5jZUVsZW1lbnRzKE8sIGRlY29yYXRlZC5lbGVtZW50cyk7XG4gIH0sIHN1cGVyQ2xhc3MpO1xuICB2YXIgZGVjb3JhdGVkID0gYXBpLmRlY29yYXRlQ2xhc3MoX2NvYWxlc2NlQ2xhc3NFbGVtZW50cyhyLmQubWFwKF9jcmVhdGVFbGVtZW50RGVzY3JpcHRvcikpLCBkZWNvcmF0b3JzKTtcbiAgYXBpLmluaXRpYWxpemVDbGFzc0VsZW1lbnRzKHIuRiwgZGVjb3JhdGVkLmVsZW1lbnRzKTtcbiAgcmV0dXJuIGFwaS5ydW5DbGFzc0ZpbmlzaGVycyhyLkYsIGRlY29yYXRlZC5maW5pc2hlcnMpO1xufVxuZnVuY3Rpb24gX2dldERlY29yYXRvcnNBcGkoKSB7XG4gIF9nZXREZWNvcmF0b3JzQXBpID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcGk7XG4gIH07XG4gIHZhciBhcGkgPSB7XG4gICAgZWxlbWVudHNEZWZpbml0aW9uT3JkZXI6IFtbXCJtZXRob2RcIl0sIFtcImZpZWxkXCJdXSxcbiAgICBpbml0aWFsaXplSW5zdGFuY2VFbGVtZW50czogZnVuY3Rpb24gKE8sIGVsZW1lbnRzKSB7XG4gICAgICBbXCJtZXRob2RcIiwgXCJmaWVsZFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChraW5kKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5raW5kID09PSBraW5kICYmIGVsZW1lbnQucGxhY2VtZW50ID09PSBcIm93blwiKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmluZUNsYXNzRWxlbWVudChPLCBlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSxcbiAgICBpbml0aWFsaXplQ2xhc3NFbGVtZW50czogZnVuY3Rpb24gKEYsIGVsZW1lbnRzKSB7XG4gICAgICB2YXIgcHJvdG8gPSBGLnByb3RvdHlwZTtcbiAgICAgIFtcIm1ldGhvZFwiLCBcImZpZWxkXCJdLmZvckVhY2goZnVuY3Rpb24gKGtpbmQpIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgIHZhciBwbGFjZW1lbnQgPSBlbGVtZW50LnBsYWNlbWVudDtcbiAgICAgICAgICBpZiAoZWxlbWVudC5raW5kID09PSBraW5kICYmIChwbGFjZW1lbnQgPT09IFwic3RhdGljXCIgfHwgcGxhY2VtZW50ID09PSBcInByb3RvdHlwZVwiKSkge1xuICAgICAgICAgICAgdmFyIHJlY2VpdmVyID0gcGxhY2VtZW50ID09PSBcInN0YXRpY1wiID8gRiA6IHByb3RvO1xuICAgICAgICAgICAgdGhpcy5kZWZpbmVDbGFzc0VsZW1lbnQocmVjZWl2ZXIsIGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9LFxuICAgIGRlZmluZUNsYXNzRWxlbWVudDogZnVuY3Rpb24gKHJlY2VpdmVyLCBlbGVtZW50KSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IGVsZW1lbnQuZGVzY3JpcHRvcjtcbiAgICAgIGlmIChlbGVtZW50LmtpbmQgPT09IFwiZmllbGRcIikge1xuICAgICAgICB2YXIgaW5pdGlhbGl6ZXIgPSBlbGVtZW50LmluaXRpYWxpemVyO1xuICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgIGVudW1lcmFibGU6IGRlc2NyaXB0b3IuZW51bWVyYWJsZSxcbiAgICAgICAgICB3cml0YWJsZTogZGVzY3JpcHRvci53cml0YWJsZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlLFxuICAgICAgICAgIHZhbHVlOiBpbml0aWFsaXplciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5pdGlhbGl6ZXIuY2FsbChyZWNlaXZlcilcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgZWxlbWVudC5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH0sXG4gICAgZGVjb3JhdGVDbGFzczogZnVuY3Rpb24gKGVsZW1lbnRzLCBkZWNvcmF0b3JzKSB7XG4gICAgICB2YXIgbmV3RWxlbWVudHMgPSBbXTtcbiAgICAgIHZhciBmaW5pc2hlcnMgPSBbXTtcbiAgICAgIHZhciBwbGFjZW1lbnRzID0ge1xuICAgICAgICBzdGF0aWM6IFtdLFxuICAgICAgICBwcm90b3R5cGU6IFtdLFxuICAgICAgICBvd246IFtdXG4gICAgICB9O1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRQbGFjZW1lbnQoZWxlbWVudCwgcGxhY2VtZW50cyk7XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFfaGFzRGVjb3JhdG9ycyhlbGVtZW50KSkgcmV0dXJuIG5ld0VsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICAgIHZhciBlbGVtZW50RmluaXNoZXJzRXh0cmFzID0gdGhpcy5kZWNvcmF0ZUVsZW1lbnQoZWxlbWVudCwgcGxhY2VtZW50cyk7XG4gICAgICAgIG5ld0VsZW1lbnRzLnB1c2goZWxlbWVudEZpbmlzaGVyc0V4dHJhcy5lbGVtZW50KTtcbiAgICAgICAgbmV3RWxlbWVudHMucHVzaC5hcHBseShuZXdFbGVtZW50cywgZWxlbWVudEZpbmlzaGVyc0V4dHJhcy5leHRyYXMpO1xuICAgICAgICBmaW5pc2hlcnMucHVzaC5hcHBseShmaW5pc2hlcnMsIGVsZW1lbnRGaW5pc2hlcnNFeHRyYXMuZmluaXNoZXJzKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgICAgaWYgKCFkZWNvcmF0b3JzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZWxlbWVudHM6IG5ld0VsZW1lbnRzLFxuICAgICAgICAgIGZpbmlzaGVyczogZmluaXNoZXJzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5kZWNvcmF0ZUNvbnN0cnVjdG9yKG5ld0VsZW1lbnRzLCBkZWNvcmF0b3JzKTtcbiAgICAgIGZpbmlzaGVycy5wdXNoLmFwcGx5KGZpbmlzaGVycywgcmVzdWx0LmZpbmlzaGVycyk7XG4gICAgICByZXN1bHQuZmluaXNoZXJzID0gZmluaXNoZXJzO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGFkZEVsZW1lbnRQbGFjZW1lbnQ6IGZ1bmN0aW9uIChlbGVtZW50LCBwbGFjZW1lbnRzLCBzaWxlbnQpIHtcbiAgICAgIHZhciBrZXlzID0gcGxhY2VtZW50c1tlbGVtZW50LnBsYWNlbWVudF07XG4gICAgICBpZiAoIXNpbGVudCAmJiBrZXlzLmluZGV4T2YoZWxlbWVudC5rZXkpICE9PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRHVwbGljYXRlZCBlbGVtZW50IChcIiArIGVsZW1lbnQua2V5ICsgXCIpXCIpO1xuICAgICAgfVxuICAgICAga2V5cy5wdXNoKGVsZW1lbnQua2V5KTtcbiAgICB9LFxuICAgIGRlY29yYXRlRWxlbWVudDogZnVuY3Rpb24gKGVsZW1lbnQsIHBsYWNlbWVudHMpIHtcbiAgICAgIHZhciBleHRyYXMgPSBbXTtcbiAgICAgIHZhciBmaW5pc2hlcnMgPSBbXTtcbiAgICAgIGZvciAodmFyIGRlY29yYXRvcnMgPSBlbGVtZW50LmRlY29yYXRvcnMsIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBrZXlzID0gcGxhY2VtZW50c1tlbGVtZW50LnBsYWNlbWVudF07XG4gICAgICAgIGtleXMuc3BsaWNlKGtleXMuaW5kZXhPZihlbGVtZW50LmtleSksIDEpO1xuICAgICAgICB2YXIgZWxlbWVudE9iamVjdCA9IHRoaXMuZnJvbUVsZW1lbnREZXNjcmlwdG9yKGVsZW1lbnQpO1xuICAgICAgICB2YXIgZWxlbWVudEZpbmlzaGVyRXh0cmFzID0gdGhpcy50b0VsZW1lbnRGaW5pc2hlckV4dHJhcygoMCwgZGVjb3JhdG9yc1tpXSkoZWxlbWVudE9iamVjdCkgfHwgZWxlbWVudE9iamVjdCk7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RmluaXNoZXJFeHRyYXMuZWxlbWVudDtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50UGxhY2VtZW50KGVsZW1lbnQsIHBsYWNlbWVudHMpO1xuICAgICAgICBpZiAoZWxlbWVudEZpbmlzaGVyRXh0cmFzLmZpbmlzaGVyKSB7XG4gICAgICAgICAgZmluaXNoZXJzLnB1c2goZWxlbWVudEZpbmlzaGVyRXh0cmFzLmZpbmlzaGVyKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3RXh0cmFzID0gZWxlbWVudEZpbmlzaGVyRXh0cmFzLmV4dHJhcztcbiAgICAgICAgaWYgKG5ld0V4dHJhcykge1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbmV3RXh0cmFzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnRQbGFjZW1lbnQobmV3RXh0cmFzW2pdLCBwbGFjZW1lbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXh0cmFzLnB1c2guYXBwbHkoZXh0cmFzLCBuZXdFeHRyYXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICBmaW5pc2hlcnM6IGZpbmlzaGVycyxcbiAgICAgICAgZXh0cmFzOiBleHRyYXNcbiAgICAgIH07XG4gICAgfSxcbiAgICBkZWNvcmF0ZUNvbnN0cnVjdG9yOiBmdW5jdGlvbiAoZWxlbWVudHMsIGRlY29yYXRvcnMpIHtcbiAgICAgIHZhciBmaW5pc2hlcnMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmZyb21DbGFzc0Rlc2NyaXB0b3IoZWxlbWVudHMpO1xuICAgICAgICB2YXIgZWxlbWVudHNBbmRGaW5pc2hlciA9IHRoaXMudG9DbGFzc0Rlc2NyaXB0b3IoKDAsIGRlY29yYXRvcnNbaV0pKG9iaikgfHwgb2JqKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzQW5kRmluaXNoZXIuZmluaXNoZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZpbmlzaGVycy5wdXNoKGVsZW1lbnRzQW5kRmluaXNoZXIuZmluaXNoZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50c0FuZEZpbmlzaGVyLmVsZW1lbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlbGVtZW50cyA9IGVsZW1lbnRzQW5kRmluaXNoZXIuZWxlbWVudHM7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlbGVtZW50cy5sZW5ndGggLSAxOyBqKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGsgPSBqICsgMTsgayA8IGVsZW1lbnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgIGlmIChlbGVtZW50c1tqXS5rZXkgPT09IGVsZW1lbnRzW2tdLmtleSAmJiBlbGVtZW50c1tqXS5wbGFjZW1lbnQgPT09IGVsZW1lbnRzW2tdLnBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEdXBsaWNhdGVkIGVsZW1lbnQgKFwiICsgZWxlbWVudHNbal0ua2V5ICsgXCIpXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50czogZWxlbWVudHMsXG4gICAgICAgIGZpbmlzaGVyczogZmluaXNoZXJzXG4gICAgICB9O1xuICAgIH0sXG4gICAgZnJvbUVsZW1lbnREZXNjcmlwdG9yOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAga2luZDogZWxlbWVudC5raW5kLFxuICAgICAgICBrZXk6IGVsZW1lbnQua2V5LFxuICAgICAgICBwbGFjZW1lbnQ6IGVsZW1lbnQucGxhY2VtZW50LFxuICAgICAgICBkZXNjcmlwdG9yOiBlbGVtZW50LmRlc2NyaXB0b3JcbiAgICAgIH07XG4gICAgICB2YXIgZGVzYyA9IHtcbiAgICAgICAgdmFsdWU6IFwiRGVzY3JpcHRvclwiLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH07XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBTeW1ib2wudG9TdHJpbmdUYWcsIGRlc2MpO1xuICAgICAgaWYgKGVsZW1lbnQua2luZCA9PT0gXCJmaWVsZFwiKSBvYmouaW5pdGlhbGl6ZXIgPSBlbGVtZW50LmluaXRpYWxpemVyO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuICAgIHRvRWxlbWVudERlc2NyaXB0b3JzOiBmdW5jdGlvbiAoZWxlbWVudE9iamVjdHMpIHtcbiAgICAgIGlmIChlbGVtZW50T2JqZWN0cyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICByZXR1cm4gX3RvQXJyYXkoZWxlbWVudE9iamVjdHMpLm1hcChmdW5jdGlvbiAoZWxlbWVudE9iamVjdCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMudG9FbGVtZW50RGVzY3JpcHRvcihlbGVtZW50T2JqZWN0KTtcbiAgICAgICAgdGhpcy5kaXNhbGxvd1Byb3BlcnR5KGVsZW1lbnRPYmplY3QsIFwiZmluaXNoZXJcIiwgXCJBbiBlbGVtZW50IGRlc2NyaXB0b3JcIik7XG4gICAgICAgIHRoaXMuZGlzYWxsb3dQcm9wZXJ0eShlbGVtZW50T2JqZWN0LCBcImV4dHJhc1wiLCBcIkFuIGVsZW1lbnQgZGVzY3JpcHRvclwiKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9LFxuICAgIHRvRWxlbWVudERlc2NyaXB0b3I6IGZ1bmN0aW9uIChlbGVtZW50T2JqZWN0KSB7XG4gICAgICB2YXIga2luZCA9IFN0cmluZyhlbGVtZW50T2JqZWN0LmtpbmQpO1xuICAgICAgaWYgKGtpbmQgIT09IFwibWV0aG9kXCIgJiYga2luZCAhPT0gXCJmaWVsZFwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FuIGVsZW1lbnQgZGVzY3JpcHRvclxcJ3MgLmtpbmQgcHJvcGVydHkgbXVzdCBiZSBlaXRoZXIgXCJtZXRob2RcIiBvcicgKyAnIFwiZmllbGRcIiwgYnV0IGEgZGVjb3JhdG9yIGNyZWF0ZWQgYW4gZWxlbWVudCBkZXNjcmlwdG9yIHdpdGgnICsgJyAua2luZCBcIicgKyBraW5kICsgJ1wiJyk7XG4gICAgICB9XG4gICAgICB2YXIga2V5ID0gX3RvUHJvcGVydHlLZXkoZWxlbWVudE9iamVjdC5rZXkpO1xuICAgICAgdmFyIHBsYWNlbWVudCA9IFN0cmluZyhlbGVtZW50T2JqZWN0LnBsYWNlbWVudCk7XG4gICAgICBpZiAocGxhY2VtZW50ICE9PSBcInN0YXRpY1wiICYmIHBsYWNlbWVudCAhPT0gXCJwcm90b3R5cGVcIiAmJiBwbGFjZW1lbnQgIT09IFwib3duXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQW4gZWxlbWVudCBkZXNjcmlwdG9yXFwncyAucGxhY2VtZW50IHByb3BlcnR5IG11c3QgYmUgb25lIG9mIFwic3RhdGljXCIsJyArICcgXCJwcm90b3R5cGVcIiBvciBcIm93blwiLCBidXQgYSBkZWNvcmF0b3IgY3JlYXRlZCBhbiBlbGVtZW50IGRlc2NyaXB0b3InICsgJyB3aXRoIC5wbGFjZW1lbnQgXCInICsgcGxhY2VtZW50ICsgJ1wiJyk7XG4gICAgICB9XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IGVsZW1lbnRPYmplY3QuZGVzY3JpcHRvcjtcbiAgICAgIHRoaXMuZGlzYWxsb3dQcm9wZXJ0eShlbGVtZW50T2JqZWN0LCBcImVsZW1lbnRzXCIsIFwiQW4gZWxlbWVudCBkZXNjcmlwdG9yXCIpO1xuICAgICAgdmFyIGVsZW1lbnQgPSB7XG4gICAgICAgIGtpbmQ6IGtpbmQsXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgZGVzY3JpcHRvcjogT2JqZWN0LmFzc2lnbih7fSwgZGVzY3JpcHRvcilcbiAgICAgIH07XG4gICAgICBpZiAoa2luZCAhPT0gXCJmaWVsZFwiKSB7XG4gICAgICAgIHRoaXMuZGlzYWxsb3dQcm9wZXJ0eShlbGVtZW50T2JqZWN0LCBcImluaXRpYWxpemVyXCIsIFwiQSBtZXRob2QgZGVzY3JpcHRvclwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzYWxsb3dQcm9wZXJ0eShkZXNjcmlwdG9yLCBcImdldFwiLCBcIlRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIG9mIGEgZmllbGQgZGVzY3JpcHRvclwiKTtcbiAgICAgICAgdGhpcy5kaXNhbGxvd1Byb3BlcnR5KGRlc2NyaXB0b3IsIFwic2V0XCIsIFwiVGhlIHByb3BlcnR5IGRlc2NyaXB0b3Igb2YgYSBmaWVsZCBkZXNjcmlwdG9yXCIpO1xuICAgICAgICB0aGlzLmRpc2FsbG93UHJvcGVydHkoZGVzY3JpcHRvciwgXCJ2YWx1ZVwiLCBcIlRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIG9mIGEgZmllbGQgZGVzY3JpcHRvclwiKTtcbiAgICAgICAgZWxlbWVudC5pbml0aWFsaXplciA9IGVsZW1lbnRPYmplY3QuaW5pdGlhbGl6ZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9LFxuICAgIHRvRWxlbWVudEZpbmlzaGVyRXh0cmFzOiBmdW5jdGlvbiAoZWxlbWVudE9iamVjdCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnRvRWxlbWVudERlc2NyaXB0b3IoZWxlbWVudE9iamVjdCk7XG4gICAgICB2YXIgZmluaXNoZXIgPSBfb3B0aW9uYWxDYWxsYWJsZVByb3BlcnR5KGVsZW1lbnRPYmplY3QsIFwiZmluaXNoZXJcIik7XG4gICAgICB2YXIgZXh0cmFzID0gdGhpcy50b0VsZW1lbnREZXNjcmlwdG9ycyhlbGVtZW50T2JqZWN0LmV4dHJhcyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICBmaW5pc2hlcjogZmluaXNoZXIsXG4gICAgICAgIGV4dHJhczogZXh0cmFzXG4gICAgICB9O1xuICAgIH0sXG4gICAgZnJvbUNsYXNzRGVzY3JpcHRvcjogZnVuY3Rpb24gKGVsZW1lbnRzKSB7XG4gICAgICB2YXIgb2JqID0ge1xuICAgICAgICBraW5kOiBcImNsYXNzXCIsXG4gICAgICAgIGVsZW1lbnRzOiBlbGVtZW50cy5tYXAodGhpcy5mcm9tRWxlbWVudERlc2NyaXB0b3IsIHRoaXMpXG4gICAgICB9O1xuICAgICAgdmFyIGRlc2MgPSB7XG4gICAgICAgIHZhbHVlOiBcIkRlc2NyaXB0b3JcIixcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9O1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgU3ltYm9sLnRvU3RyaW5nVGFnLCBkZXNjKTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICB0b0NsYXNzRGVzY3JpcHRvcjogZnVuY3Rpb24gKG9iaikge1xuICAgICAgdmFyIGtpbmQgPSBTdHJpbmcob2JqLmtpbmQpO1xuICAgICAgaWYgKGtpbmQgIT09IFwiY2xhc3NcIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIGNsYXNzIGRlc2NyaXB0b3JcXCdzIC5raW5kIHByb3BlcnR5IG11c3QgYmUgXCJjbGFzc1wiLCBidXQgYSBkZWNvcmF0b3InICsgJyBjcmVhdGVkIGEgY2xhc3MgZGVzY3JpcHRvciB3aXRoIC5raW5kIFwiJyArIGtpbmQgKyAnXCInKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzYWxsb3dQcm9wZXJ0eShvYmosIFwia2V5XCIsIFwiQSBjbGFzcyBkZXNjcmlwdG9yXCIpO1xuICAgICAgdGhpcy5kaXNhbGxvd1Byb3BlcnR5KG9iaiwgXCJwbGFjZW1lbnRcIiwgXCJBIGNsYXNzIGRlc2NyaXB0b3JcIik7XG4gICAgICB0aGlzLmRpc2FsbG93UHJvcGVydHkob2JqLCBcImRlc2NyaXB0b3JcIiwgXCJBIGNsYXNzIGRlc2NyaXB0b3JcIik7XG4gICAgICB0aGlzLmRpc2FsbG93UHJvcGVydHkob2JqLCBcImluaXRpYWxpemVyXCIsIFwiQSBjbGFzcyBkZXNjcmlwdG9yXCIpO1xuICAgICAgdGhpcy5kaXNhbGxvd1Byb3BlcnR5KG9iaiwgXCJleHRyYXNcIiwgXCJBIGNsYXNzIGRlc2NyaXB0b3JcIik7XG4gICAgICB2YXIgZmluaXNoZXIgPSBfb3B0aW9uYWxDYWxsYWJsZVByb3BlcnR5KG9iaiwgXCJmaW5pc2hlclwiKTtcbiAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMudG9FbGVtZW50RGVzY3JpcHRvcnMob2JqLmVsZW1lbnRzKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzOiBlbGVtZW50cyxcbiAgICAgICAgZmluaXNoZXI6IGZpbmlzaGVyXG4gICAgICB9O1xuICAgIH0sXG4gICAgcnVuQ2xhc3NGaW5pc2hlcnM6IGZ1bmN0aW9uIChjb25zdHJ1Y3RvciwgZmluaXNoZXJzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmlzaGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmV3Q29uc3RydWN0b3IgPSAoMCwgZmluaXNoZXJzW2ldKShjb25zdHJ1Y3Rvcik7XG4gICAgICAgIGlmIChuZXdDb25zdHJ1Y3RvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBuZXdDb25zdHJ1Y3RvciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmluaXNoZXJzIG11c3QgcmV0dXJuIGEgY29uc3RydWN0b3IuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ld0NvbnN0cnVjdG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgfSxcbiAgICBkaXNhbGxvd1Byb3BlcnR5OiBmdW5jdGlvbiAob2JqLCBuYW1lLCBvYmplY3RUeXBlKSB7XG4gICAgICBpZiAob2JqW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihvYmplY3RUeXBlICsgXCIgY2FuJ3QgaGF2ZSBhIC5cIiArIG5hbWUgKyBcIiBwcm9wZXJ0eS5cIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4gYXBpO1xufVxuZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnREZXNjcmlwdG9yKGRlZikge1xuICB2YXIga2V5ID0gX3RvUHJvcGVydHlLZXkoZGVmLmtleSk7XG4gIHZhciBkZXNjcmlwdG9yO1xuICBpZiAoZGVmLmtpbmQgPT09IFwibWV0aG9kXCIpIHtcbiAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgdmFsdWU6IGRlZi52YWx1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9O1xuICB9IGVsc2UgaWYgKGRlZi5raW5kID09PSBcImdldFwiKSB7XG4gICAgZGVzY3JpcHRvciA9IHtcbiAgICAgIGdldDogZGVmLnZhbHVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9O1xuICB9IGVsc2UgaWYgKGRlZi5raW5kID09PSBcInNldFwiKSB7XG4gICAgZGVzY3JpcHRvciA9IHtcbiAgICAgIHNldDogZGVmLnZhbHVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9O1xuICB9IGVsc2UgaWYgKGRlZi5raW5kID09PSBcImZpZWxkXCIpIHtcbiAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfTtcbiAgfVxuICB2YXIgZWxlbWVudCA9IHtcbiAgICBraW5kOiBkZWYua2luZCA9PT0gXCJmaWVsZFwiID8gXCJmaWVsZFwiIDogXCJtZXRob2RcIixcbiAgICBrZXk6IGtleSxcbiAgICBwbGFjZW1lbnQ6IGRlZi5zdGF0aWMgPyBcInN0YXRpY1wiIDogZGVmLmtpbmQgPT09IFwiZmllbGRcIiA/IFwib3duXCIgOiBcInByb3RvdHlwZVwiLFxuICAgIGRlc2NyaXB0b3I6IGRlc2NyaXB0b3JcbiAgfTtcbiAgaWYgKGRlZi5kZWNvcmF0b3JzKSBlbGVtZW50LmRlY29yYXRvcnMgPSBkZWYuZGVjb3JhdG9ycztcbiAgaWYgKGRlZi5raW5kID09PSBcImZpZWxkXCIpIGVsZW1lbnQuaW5pdGlhbGl6ZXIgPSBkZWYudmFsdWU7XG4gIHJldHVybiBlbGVtZW50O1xufVxuZnVuY3Rpb24gX2NvYWxlc2NlR2V0dGVyU2V0dGVyKGVsZW1lbnQsIG90aGVyKSB7XG4gIGlmIChlbGVtZW50LmRlc2NyaXB0b3IuZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBvdGhlci5kZXNjcmlwdG9yLmdldCA9IGVsZW1lbnQuZGVzY3JpcHRvci5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgb3RoZXIuZGVzY3JpcHRvci5zZXQgPSBlbGVtZW50LmRlc2NyaXB0b3Iuc2V0O1xuICB9XG59XG5mdW5jdGlvbiBfY29hbGVzY2VDbGFzc0VsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIHZhciBuZXdFbGVtZW50cyA9IFtdO1xuICB2YXIgaXNTYW1lRWxlbWVudCA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIHJldHVybiBvdGhlci5raW5kID09PSBcIm1ldGhvZFwiICYmIG90aGVyLmtleSA9PT0gZWxlbWVudC5rZXkgJiYgb3RoZXIucGxhY2VtZW50ID09PSBlbGVtZW50LnBsYWNlbWVudDtcbiAgfTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgdmFyIG90aGVyO1xuICAgIGlmIChlbGVtZW50LmtpbmQgPT09IFwibWV0aG9kXCIgJiYgKG90aGVyID0gbmV3RWxlbWVudHMuZmluZChpc1NhbWVFbGVtZW50KSkpIHtcbiAgICAgIGlmIChfaXNEYXRhRGVzY3JpcHRvcihlbGVtZW50LmRlc2NyaXB0b3IpIHx8IF9pc0RhdGFEZXNjcmlwdG9yKG90aGVyLmRlc2NyaXB0b3IpKSB7XG4gICAgICAgIGlmIChfaGFzRGVjb3JhdG9ycyhlbGVtZW50KSB8fCBfaGFzRGVjb3JhdG9ycyhvdGhlcikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJEdXBsaWNhdGVkIG1ldGhvZHMgKFwiICsgZWxlbWVudC5rZXkgKyBcIikgY2FuJ3QgYmUgZGVjb3JhdGVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBvdGhlci5kZXNjcmlwdG9yID0gZWxlbWVudC5kZXNjcmlwdG9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF9oYXNEZWNvcmF0b3JzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgaWYgKF9oYXNEZWNvcmF0b3JzKG90aGVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwiRGVjb3JhdG9ycyBjYW4ndCBiZSBwbGFjZWQgb24gZGlmZmVyZW50IGFjY2Vzc29ycyB3aXRoIGZvciBcIiArIFwidGhlIHNhbWUgcHJvcGVydHkgKFwiICsgZWxlbWVudC5rZXkgKyBcIikuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvdGhlci5kZWNvcmF0b3JzID0gZWxlbWVudC5kZWNvcmF0b3JzO1xuICAgICAgICB9XG4gICAgICAgIF9jb2FsZXNjZUdldHRlclNldHRlcihlbGVtZW50LCBvdGhlcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0VsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdFbGVtZW50cztcbn1cbmZ1bmN0aW9uIF9oYXNEZWNvcmF0b3JzKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuZGVjb3JhdG9ycyAmJiBlbGVtZW50LmRlY29yYXRvcnMubGVuZ3RoO1xufVxuZnVuY3Rpb24gX2lzRGF0YURlc2NyaXB0b3IoZGVzYykge1xuICByZXR1cm4gZGVzYyAhPT0gdW5kZWZpbmVkICYmICEoZGVzYy52YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGRlc2Mud3JpdGFibGUgPT09IHVuZGVmaW5lZCk7XG59XG5mdW5jdGlvbiBfb3B0aW9uYWxDYWxsYWJsZVByb3BlcnR5KG9iaiwgbmFtZSkge1xuICB2YXIgdmFsdWUgPSBvYmpbbmFtZV07XG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkICdcIiArIG5hbWUgKyBcIicgdG8gYmUgYSBmdW5jdGlvblwiKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlTWV0aG9kR2V0KHJlY2VpdmVyLCBwcml2YXRlU2V0LCBmbikge1xuICBpZiAoIXByaXZhdGVTZXQuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG4gIHJldHVybiBmbjtcbn1cbmZ1bmN0aW9uIF9jaGVja1ByaXZhdGVSZWRlY2xhcmF0aW9uKG9iaiwgcHJpdmF0ZUNvbGxlY3Rpb24pIHtcbiAgaWYgKHByaXZhdGVDb2xsZWN0aW9uLmhhcyhvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBpbml0aWFsaXplIHRoZSBzYW1lIHByaXZhdGUgZWxlbWVudHMgdHdpY2Ugb24gYW4gb2JqZWN0XCIpO1xuICB9XG59XG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyhvYmosIHByaXZhdGVNYXAsIHZhbHVlKSB7XG4gIF9jaGVja1ByaXZhdGVSZWRlY2xhcmF0aW9uKG9iaiwgcHJpdmF0ZU1hcCk7XG4gIHByaXZhdGVNYXAuc2V0KG9iaiwgdmFsdWUpO1xufVxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjKG9iaiwgcHJpdmF0ZVNldCkge1xuICBfY2hlY2tQcml2YXRlUmVkZWNsYXJhdGlvbihvYmosIHByaXZhdGVTZXQpO1xuICBwcml2YXRlU2V0LmFkZChvYmopO1xufVxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZU1ldGhvZFNldCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byByZWFzc2lnbiBwcml2YXRlIG1ldGhvZFwiKTtcbn1cbmZ1bmN0aW9uIF9pZGVudGl0eSh4KSB7XG4gIHJldHVybiB4O1xufSIsImltcG9ydCBfY2pzTG9hZGVyIGZyb20gJ2NjZTovaW50ZXJuYWwvbWwvY2pzLWxvYWRlci5tanMnO1xubGV0IF9janNFeHBvcnRzO1xubGV0IF9fX2VzTW9kdWxlO1xubGV0IF9hZGQ7XG5sZXQgX3JlbW92ZTtcbmxldCBfaGFzO1xubGV0IF9jaGVjaztcbmxldCBfYWxsO1xubGV0IF9jbGVhcjtcbmxldCBfZW5hYmxlQ2hlY2tpbmc7XG5sZXQgX2Rpc2FibGVDaGVja2luZztcbmNvbnN0IF9fY2pzTWV0YVVSTCA9IGltcG9ydC5tZXRhLnVybDtcbl9janNMb2FkZXIuZGVmaW5lKF9fY2pzTWV0YVVSTCwgZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7XG4vLyAjcmVnaW9uIE9SSUdJTkFMIENPREVcblxuXG4gXCJ1c2Ugc3RyaWN0XCI7XG5cbiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgIHZhbHVlOiB0cnVlXG4gfSk7XG4gZXhwb3J0cy5hZGQgPSBhZGQ7XG4gZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG4gZXhwb3J0cy5oYXMgPSBoYXM7XG4gZXhwb3J0cy5jaGVjayA9IGNoZWNrO1xuIGV4cG9ydHMuYWxsID0gYWxsO1xuIGV4cG9ydHMuY2xlYXIgPSBjbGVhcjtcbiBleHBvcnRzLmVuYWJsZUNoZWNraW5nID0gZW5hYmxlQ2hlY2tpbmc7XG4gZXhwb3J0cy5kaXNhYmxlQ2hlY2tpbmcgPSBkaXNhYmxlQ2hlY2tpbmc7XG4gdmFyIHR5cGVzID0ge307XG4gdmFyIGNvbmZpZyA9IHtcbiAgIGNoZWNrRXhpc3Rpbmc6IHRydWVcbiB9O1xuXG4gZnVuY3Rpb24gYWRkKG5hbWUpIHtcbiAgIHR5cGVzW25hbWVdID0gdHJ1ZTtcbiB9XG5cbiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgdHlwZXNbbmFtZV0gPSBmYWxzZTtcbiB9XG5cbiBmdW5jdGlvbiBoYXMobmFtZSkge1xuICAgcmV0dXJuICEhdHlwZXNbbmFtZV07XG4gfVxuXG4gZnVuY3Rpb24gY2hlY2sobmFtZSkge1xuICAgaWYgKGNvbmZpZy5jaGVja0V4aXN0aW5nICYmIGhhcyhuYW1lKSkge1xuICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRHVwbGljYXRlIGFjdGlvbiB0eXBlOiBcIi5jb25jYXQobmFtZSkpO1xuICAgfVxuIH1cblxuIGZ1bmN0aW9uIGFsbCgpIHtcbiAgIHJldHVybiBPYmplY3Qua2V5cyh0eXBlcykuZmlsdGVyKGhhcyk7XG4gfVxuXG4gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICBhbGwoKS5mb3JFYWNoKHJlbW92ZSk7XG4gfVxuXG4gZnVuY3Rpb24gZW5hYmxlQ2hlY2tpbmcoKSB7XG4gICBjb25maWcuY2hlY2tFeGlzdGluZyA9IHRydWU7XG4gfVxuXG4gZnVuY3Rpb24gZGlzYWJsZUNoZWNraW5nKCkge1xuICAgY29uZmlnLmNoZWNrRXhpc3RpbmcgPSBmYWxzZTtcbiB9XG5cbi8vICNlbmRyZWdpb24gT1JJR0lOQUwgQ09ERVxuXG5fY2pzRXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuX19fZXNNb2R1bGUgPSBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlO1xuX2FkZCA9IG1vZHVsZS5leHBvcnRzLmFkZDtcbl9yZW1vdmUgPSBtb2R1bGUuZXhwb3J0cy5yZW1vdmU7XG5faGFzID0gbW9kdWxlLmV4cG9ydHMuaGFzO1xuX2NoZWNrID0gbW9kdWxlLmV4cG9ydHMuY2hlY2s7XG5fYWxsID0gbW9kdWxlLmV4cG9ydHMuYWxsO1xuX2NsZWFyID0gbW9kdWxlLmV4cG9ydHMuY2xlYXI7XG5fZW5hYmxlQ2hlY2tpbmcgPSBtb2R1bGUuZXhwb3J0cy5lbmFibGVDaGVja2luZztcbl9kaXNhYmxlQ2hlY2tpbmcgPSBtb2R1bGUuZXhwb3J0cy5kaXNhYmxlQ2hlY2tpbmc7XG5cbn0sIHt9KTtcbmV4cG9ydCB7IF9janNFeHBvcnRzIGFzIGRlZmF1bHQgfTtcbmV4cG9ydCB7IF9fY2pzTWV0YVVSTCB9XG4iXX0=