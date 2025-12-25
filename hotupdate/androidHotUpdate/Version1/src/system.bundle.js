(function () {
  'use strict';

  function errMsg(errCode, msg) {
    return (msg || "") + " (SystemJS Error#" + errCode + " " + "https://git.io/JvFET#" + errCode + ")";
  }

  var hasSymbol = typeof Symbol !== 'undefined';
  var hasSelf = typeof self !== 'undefined';
  var hasDocument = typeof document !== 'undefined';

  var envGlobal = hasSelf ? self : global;

  var baseUrl$1;

  if (hasDocument) {
    var baseEl = document.querySelector('base[href]');
    if (baseEl)
      baseUrl$1 = baseEl.href;
  }

  if (!baseUrl$1 && typeof location !== 'undefined') {
    baseUrl$1 = location.href.split('#')[0].split('?')[0];
    var lastSepIndex = baseUrl$1.lastIndexOf('/');
    if (lastSepIndex !== -1)
      baseUrl$1 = baseUrl$1.slice(0, lastSepIndex + 1);
  }

  if (!baseUrl$1 && typeof process !== 'undefined') {
    var cwd = process.cwd();
    // TODO: encoding edge cases
    baseUrl$1 = 'file://' + (cwd[0] === '/' ? '' : '/') + cwd.replace(/\\/g, '/') + '/';
  }

  var backslashRegEx = /\\/g;
  function resolveIfNotPlainOrUrl (relUrl, parentUrl) {
    if (relUrl.indexOf('\\') !== -1)
      relUrl = relUrl.replace(backslashRegEx, '/');
    // protocol-relative
    if (relUrl[0] === '/' && relUrl[1] === '/') {
      return parentUrl.slice(0, parentUrl.indexOf(':') + 1) + relUrl;
    }
    // relative-url
    else if (relUrl[0] === '.' && (relUrl[1] === '/' || relUrl[1] === '.' && (relUrl[2] === '/' || relUrl.length === 2 && (relUrl += '/')) ||
        relUrl.length === 1  && (relUrl += '/')) ||
        relUrl[0] === '/') {
      var parentProtocol = parentUrl.slice(0, parentUrl.indexOf(':') + 1);
      // Disabled, but these cases will give inconsistent results for deep backtracking
      //if (parentUrl[parentProtocol.length] !== '/')
      //  throw Error('Cannot resolve');
      // read pathname from parent URL
      // pathname taken to be part after leading "/"
      var pathname;
      if (parentUrl[parentProtocol.length + 1] === '/') {
        // resolving to a :// so we need to read out the auth and host
        if (parentProtocol !== 'file:') {
          pathname = parentUrl.slice(parentProtocol.length + 2);
          pathname = pathname.slice(pathname.indexOf('/') + 1);
        }
        else {
          pathname = parentUrl.slice(8);
        }
      }
      else {
        // resolving to :/ so pathname is the /... part
        pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === '/'));
      }

      if (relUrl[0] === '/')
        return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl;

      // join together and split for removal of .. and . segments
      // looping the string instead of anything fancy for perf reasons
      // '../../../../../z' resolved to 'x/y' is just 'z'
      var segmented = pathname.slice(0, pathname.lastIndexOf('/') + 1) + relUrl;

      var output = [];
      var segmentIndex = -1;
      for (var i = 0; i < segmented.length; i++) {
        // busy reading a segment - only terminate on '/'
        if (segmentIndex !== -1) {
          if (segmented[i] === '/') {
            output.push(segmented.slice(segmentIndex, i + 1));
            segmentIndex = -1;
          }
        }

        // new segment - check if it is relative
        else if (segmented[i] === '.') {
          // ../ segment
          if (segmented[i + 1] === '.' && (segmented[i + 2] === '/' || i + 2 === segmented.length)) {
            output.pop();
            i += 2;
          }
          // ./ segment
          else if (segmented[i + 1] === '/' || i + 1 === segmented.length) {
            i += 1;
          }
          else {
            // the start of a new segment as below
            segmentIndex = i;
          }
        }
        // it is the start of a new segment
        else {
          segmentIndex = i;
        }
      }
      // finish reading out the last segment
      if (segmentIndex !== -1)
        output.push(segmented.slice(segmentIndex));
      return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join('');
    }
  }

  /*
   * Import maps implementation
   *
   * To make lookups fast we pre-resolve the entire import map
   * and then match based on backtracked hash lookups
   *
   */

  function resolveUrl (relUrl, parentUrl) {
    return resolveIfNotPlainOrUrl(relUrl, parentUrl) || (relUrl.indexOf(':') !== -1 ? relUrl : resolveIfNotPlainOrUrl('./' + relUrl, parentUrl));
  }

  function resolveAndComposePackages (packages, outPackages, baseUrl, parentMap, parentUrl) {
    for (var p in packages) {
      var resolvedLhs = resolveIfNotPlainOrUrl(p, baseUrl) || p;
      var rhs = packages[p];
      // package fallbacks not currently supported
      if (typeof rhs !== 'string')
        continue;
      var mapped = resolveImportMap(parentMap, resolveIfNotPlainOrUrl(rhs, baseUrl) || rhs, parentUrl);
      if (!mapped) {
        targetWarning('W1', p, rhs, 'bare specifier did not resolve');
      }
      else
        outPackages[resolvedLhs] = mapped;
    }
  }

  function resolveAndComposeImportMap (json, baseUrl, outMap) {
    if (json.imports)
      resolveAndComposePackages(json.imports, outMap.imports, baseUrl, outMap, null);

    var u;
    for (u in json.scopes || {}) {
      var resolvedScope = resolveUrl(u, baseUrl);
      resolveAndComposePackages(json.scopes[u], outMap.scopes[resolvedScope] || (outMap.scopes[resolvedScope] = {}), baseUrl, outMap, resolvedScope);
    }

    for (u in json.depcache || {})
      outMap.depcache[resolveUrl(u, baseUrl)] = json.depcache[u];
    
    for (u in json.integrity || {})
      outMap.integrity[resolveUrl(u, baseUrl)] = json.integrity[u];
  }

  function getMatch (path, matchObj) {
    if (matchObj[path])
      return path;
    var sepIndex = path.length;
    do {
      var segment = path.slice(0, sepIndex + 1);
      if (segment in matchObj)
        return segment;
    } while ((sepIndex = path.lastIndexOf('/', sepIndex - 1)) !== -1)
  }

  function applyPackages (id, packages) {
    var pkgName = getMatch(id, packages);
    if (pkgName) {
      var pkg = packages[pkgName];
      if (pkg === null) return;
      if (id.length > pkgName.length && pkg[pkg.length - 1] !== '/') {
        targetWarning('W2', pkgName, pkg, "should have a trailing '/'");
      }
      else
        return pkg + id.slice(pkgName.length);
    }
  }

  function targetWarning (code, match, target, msg) {
    console.warn(errMsg(code, "Package target " + msg + ", resolving target '" + target + "' for " + match));
  }

  function resolveImportMap (importMap, resolvedOrPlain, parentUrl) {
    var scopes = importMap.scopes;
    var scopeUrl = parentUrl && getMatch(parentUrl, scopes);
    while (scopeUrl) {
      var packageResolution = applyPackages(resolvedOrPlain, scopes[scopeUrl]);
      if (packageResolution)
        return packageResolution;
      scopeUrl = getMatch(scopeUrl.slice(0, scopeUrl.lastIndexOf('/')), scopes);
    }
    return applyPackages(resolvedOrPlain, importMap.imports) || resolvedOrPlain.indexOf(':') !== -1 && resolvedOrPlain;
  }

  /*
   * SystemJS Core
   * 
   * Provides
   * - System.import
   * - System.register support for
   *     live bindings, function hoisting through circular references,
   *     reexports, dynamic import, import.meta.url, top-level await
   * - System.getRegister to get the registration
   * - Symbol.toStringTag support in Module objects
   * - Hookable System.createContext to customize import.meta
   * - System.onload(err, id, deps) handler for tracing / hot-reloading
   * 
   * Core comes with no System.prototype.resolve or
   * System.prototype.instantiate implementations
   */

  var toStringTag$1 = hasSymbol && Symbol.toStringTag;
  var REGISTRY = hasSymbol ? Symbol() : '@';

  function SystemJS () {
    this[REGISTRY] = {};
  }

  var systemJSPrototype$1 = SystemJS.prototype;

  systemJSPrototype$1.import = function (id, parentUrl) {
    var loader = this;
    return Promise.resolve(loader.prepareImport())
    .then(function() {
      return loader.resolve(id, parentUrl);
    })
    .then(function (id) {
      var load = getOrCreateLoad(loader, id);
      return load.C || topLevelLoad(loader, load);
    });
  };

  // Hookable createContext function -> allowing eg custom import meta
  systemJSPrototype$1.createContext = function (parentId) {
    var loader = this;
    return {
      url: parentId,
      resolve: function (id, parentUrl) {
        return Promise.resolve(loader.resolve(id, parentUrl || parentId));
      }
    };
  };

  // onLoad(err, id, deps) provided for tracing / hot-reloading
  systemJSPrototype$1.onload = function () {};
  function loadToId (load) {
    return load.id;
  }
  function triggerOnload (loader, load, err, isErrSource) {
    loader.onload(err, load.id, load.d && load.d.map(loadToId), !!isErrSource);
    if (err)
      throw err;
  }

  var lastRegister;
  systemJSPrototype$1.register = function (deps, declare) {
    lastRegister = [deps, declare];
  };

  /*
   * getRegister provides the last anonymous System.register call
   */
  systemJSPrototype$1.getRegister = function () {
    var _lastRegister = lastRegister;
    lastRegister = undefined;
    return _lastRegister;
  };

  function getOrCreateLoad (loader, id, firstParentUrl) {
    var load = loader[REGISTRY][id];
    if (load)
      return load;

    var importerSetters = [];
    var ns = Object.create(null);
    if (toStringTag$1)
      Object.defineProperty(ns, toStringTag$1, { value: 'Module' });
    
    var instantiatePromise = Promise.resolve()
    .then(function () {
      return loader.instantiate(id, firstParentUrl);
    })
    .then(function (registration) {
      if (!registration)
        throw Error(errMsg(2, 'Module ' + id + ' did not instantiate'));
      function _export (name, value) {
        // note if we have hoisted exports (including reexports)
        load.h = true;
        var changed = false;
        if (typeof name === 'string') {
          if (!(name in ns) || ns[name] !== value) {
            ns[name] = value;
            changed = true;
          }
        }
        else {
          for (var p in name) {
            var value = name[p];
            if (!(p in ns) || ns[p] !== value) {
              ns[p] = value;
              changed = true;
            }
          }

          if (name.__esModule) {
            ns.__esModule = name.__esModule;
          }
        }
        if (changed)
          for (var i = 0; i < importerSetters.length; i++) {
            var setter = importerSetters[i];
            if (setter) setter(ns);
          }
        return value;
      }
      var declared = registration[1](_export, registration[1].length === 2 ? {
        import: function (importId) {
          return loader.import(importId, id);
        },
        meta: loader.createContext(id)
      } : undefined);
      load.e = declared.execute || function () {};
      return [registration[0], declared.setters || []];
    }, function (err) {
      load.e = null;
      load.er = err;
      triggerOnload(loader, load, err, true);
      throw err;
    });

    var linkPromise = instantiatePromise
    .then(function (instantiation) {
      return Promise.all(instantiation[0].map(function (dep, i) {
        var setter = instantiation[1][i];
        return Promise.resolve(loader.resolve(dep, id))
        .then(function (depId) {
          var depLoad = getOrCreateLoad(loader, depId, id);
          // depLoad.I may be undefined for already-evaluated
          return Promise.resolve(depLoad.I)
          .then(function () {
            if (setter) {
              depLoad.i.push(setter);
              // only run early setters when there are hoisted exports of that module
              // the timing works here as pending hoisted export calls will trigger through importerSetters
              if (depLoad.h || !depLoad.I)
                setter(depLoad.n);
            }
            return depLoad;
          });
        });
      }))
      .then(function (depLoads) {
        load.d = depLoads;
      });
    });
    linkPromise.catch(function () {});

    // Capital letter = a promise function
    return load = loader[REGISTRY][id] = {
      id: id,
      // importerSetters, the setters functions registered to this dependency
      // we retain this to add more later
      i: importerSetters,
      // module namespace object
      n: ns,

      // instantiate
      I: instantiatePromise,
      // link
      L: linkPromise,
      // whether it has hoisted exports
      h: false,

      // On instantiate completion we have populated:
      // dependency load records
      d: undefined,
      // execution function
      e: undefined,

      // On execution we have populated:
      // the execution error if any
      er: undefined,
      // in the case of TLA, the execution promise
      E: undefined,

      // On execution, L, I, E cleared

      // Promise for top-level completion
      C: undefined,

      // parent instantiator / executor
      p: undefined
    };
  }

  function instantiateAll (loader, load, parent, loaded) {
    if (!loaded[load.id]) {
      loaded[load.id] = true;
      // load.L may be undefined for already-instantiated
      return Promise.resolve(load.L)
      .then(function () {
        if (!load.p || load.p.e === null)
          load.p = parent;
        return Promise.all(load.d.map(function (dep) {
          return instantiateAll(loader, dep, parent, loaded);
        }));
      })
      .catch(function (err) {
        if (load.er)
          throw err;
        load.e = null;
        triggerOnload(loader, load, err, false);
        throw err;
      });
    }
  }

  function topLevelLoad (loader, load) {
    return load.C = instantiateAll(loader, load, load, {})
    .then(function () {
      return postOrderExec(loader, load, {});
    })
    .then(function () {
      return load.n;
    });
  }

  // the closest we can get to call(undefined)
  var nullContext = Object.freeze(Object.create(null));

  // Equivalent to `Promise.prototype.finally`
  // https://gist.github.com/developit/d970bac18430943e4b3392b029a2a96c
  var promisePrototypeFinally = Promise.prototype.finally || function (callback) {
      if (typeof callback !== 'function') {
          return this.then(callback, callback);
      }
      const P = this.constructor || Promise;
      return this.then(
          value => P.resolve(callback()).then(() => value),
          err => P.resolve(callback()).then(() => { throw err; }),
      );
  };

  // returns a promise if and only if a top-level await subgraph
  // throws on sync errors
  function postOrderExec (loader, load, seen) {
    if (seen[load.id]) {
      return load.E;
    }
    seen[load.id] = true;

    if (!load.e) {
      if (load.er)
        throw load.er;
      if (load.E)
        return load.E;
      return;
    }

    // From here we're about to execute the load.
    // Because the execution may be async, we pop the `load.e` first.
    // So `load.e === null` always means the load has been executed or is executing.
    // To inspect the state:
    // - If `load.er` is truthy, the execution has threw or has been rejected;
    // - otherwise, either the `load.E` is a promise, means it's under async execution, or
    // - the `load.E` is null, means the load has completed the execution or has been async resolved.
    const exec = load.e;
    load.e = null;

    // deps execute first, unless circular
    var depLoadPromises;
    load.d.forEach(function (depLoad) {
      try {
        var depLoadPromise = postOrderExec(loader, depLoad, seen);
        if (depLoadPromise) 
          (depLoadPromises = depLoadPromises || []).push(depLoadPromise);
      }
      catch (err) {
        load.er = err;
        triggerOnload(loader, load, err, false);
        throw err;
      }
    });
    if (depLoadPromises)
      return load.E = promisePrototypeFinally.call(Promise.all(depLoadPromises).then(doExec), function() {
          load.E = null;
      });

    var execPromise = doExec();
    if (execPromise) {
      return load.E = promisePrototypeFinally.call(execPromise, function() {
          load.E = null;
      });
    }

    function doExec () {
      try {
        var execPromise = exec.call(nullContext);
        if (execPromise) {
          execPromise = execPromise.then(function () {
            load.C = load.n;
            if (!false) triggerOnload(loader, load, null, true);
          }, function (err) {
            load.er = err;
            if (!false) triggerOnload(loader, load, err, true);
            throw err;
          });
          return execPromise;
        }
        // (should be a promise, but a minify optimization to leave out Promise.resolve)
        load.C = load.n;
        load.L = load.I = undefined;
      }
      catch (err) {
        load.er = err;
        throw err;
      }
      finally {
        triggerOnload(loader, load, load.er, true);
      }
    }
  }

  envGlobal.System = new SystemJS();

  const globalObj = (function getGlobalObj() {
      if (typeof $global !== 'undefined') {
          return $global;
      }
      else if (typeof getApp === 'function') {
          return getApp().GameGlobal;
      }
  })();
  const systemGlobal = (typeof globalObj !== 'undefined' ? globalObj.System : System);
  const systemJSPrototype = systemGlobal.constructor.prototype;

  systemJSPrototype.instantiate = function (url, firstParentUrl) {
      throw new Error(`Unable to instantiate ${url} from ${firstParentUrl}`);
  };

  var toStringTag = typeof Symbol !== 'undefined' && Symbol.toStringTag;

  systemJSPrototype$1.get = function (id) {
    var load = this[REGISTRY][id];
    if (load && load.e === null && !load.E) {
      if (load.er)
        return null;
      return load.n;
    }
  };

  systemJSPrototype$1.set = function (id, module) {
    {
      try {
        // No page-relative URLs allowed
        new URL(id);
      } catch (err) {
        console.warn(Error(errMsg('W3', '"' + id + '" is not a valid URL to set in the module registry')));
      }
    }
    var ns;
    if (toStringTag && module[toStringTag] === 'Module') {
      ns = module;
    }
    else {
      ns = Object.assign(Object.create(null), module);
      if (toStringTag)
        Object.defineProperty(ns, toStringTag, { value: 'Module' });
    }

    var done = Promise.resolve(ns);

    var load = this[REGISTRY][id] || (this[REGISTRY][id] = {
      id: id,
      i: [],
      h: false,
      d: [],
      e: null,
      er: undefined,
      E: undefined
    });

    if (load.e || load.E)
      return false;
    
    Object.assign(load, {
      n: ns,
      I: undefined,
      L: undefined,
      C: done
    });
    return ns;
  };

  systemJSPrototype$1.has = function (id) {
    var load = this[REGISTRY][id];
    return !!load;
  };

  // Delete function provided for hot-reloading use cases
  systemJSPrototype$1.delete = function (id) {
    var registry = this[REGISTRY];
    var load = registry[id];
    // in future we can support load.E case by failing load first
    // but that will require TLA callbacks to be implemented
    if (!load || (load.p && load.p.e !== null) || load.E)
      return false;

    var importerSetters = load.i;
    // remove from importerSetters
    // (release for gc)
    if (load.d)
      load.d.forEach(function (depLoad) {
        var importerIndex = depLoad.i.indexOf(load);
        if (importerIndex !== -1)
          depLoad.i.splice(importerIndex, 1);
      });
    delete registry[id];
    return function () {
      var load = registry[id];
      if (!load || !importerSetters || load.e !== null || load.E)
        return false;
      // add back the old setters
      importerSetters.forEach(function (setter) {
        load.i.push(setter);
        setter(load.n);
      });
      importerSetters = null;
    };
  };

  var iterator = typeof Symbol !== 'undefined' && Symbol.iterator;

  systemJSPrototype$1.entries = function () {
    var loader = this, keys = Object.keys(loader[REGISTRY]);
    var index = 0, ns, key;
    var result = {
      next: function () {
        while (
          (key = keys[index++]) !== undefined && 
          (ns = loader.get(key)) === undefined
        );
        return {
          done: key === undefined,
          value: key !== undefined && [key, ns]
        };
      }
    };

    result[iterator] = function() { return this };

    return result;
  };

  // @ts-ignore
  let baseUrl = baseUrl$1;
  function setBaseUrl(url) {
      baseUrl = url;
  }

  // @ts-ignore
  const importMap = { imports: {}, scopes: {} };
  function setImportMap(json, location) {
      resolveAndComposeImportMap(json, location || baseUrl, importMap);
  }
  function extendsImportMap(json, location) {
      const importMapUrl = resolveIfNotPlainOrUrl(location, baseUrl);
      resolveAndComposeImportMap(json, importMapUrl || location, importMap);
  }
  function throwUnresolved(id, parentUrl) {
      throw new Error(`Unresolved id: ${id} from parentUrl: ${parentUrl}`);
  }
  systemJSPrototype.resolve = function (id, parentUrl) {
      parentUrl = parentUrl || baseUrl;
      return resolveImportMap(importMap, resolveIfNotPlainOrUrl(id, parentUrl) || id, parentUrl) || throwUnresolved(id, parentUrl);
  };

  function warmup ({ pathname = '/', importMap, importMapUrl, importMapList, defaultHandler, handlers, }) {
      const baseUrlSchema = 'no-schema:';
      setBaseUrl(`${baseUrlSchema}${pathname}`);
      if (importMapUrl && importMap) {
          setImportMap(importMap, `${baseUrlSchema}/${importMapUrl}`);
      }
      if (Array.isArray(importMapList)) {
          for (const e of importMapList) {
              extendsImportMap(e.map, e.location);
          }
      }
      if (defaultHandler) {
          hookInstantiationOverSchema(baseUrlSchema, wrapHandler(defaultHandler));
      }
      if (handlers) {
          for (const protocol of Object.keys(handlers)) {
              hookInstantiationOverSchema(protocol, wrapHandler(handlers[protocol]));
          }
      }
  }
  function isThenable(value) {
      // https://stackoverflow.com/a/53955664/10602525
      return Boolean(value && typeof value.then === 'function');
  }
  function foundKeyByValueInImportMap(value) {
      const imports = importMap.imports;
      for (const k in imports) {
          const v = imports[k];
          if (v && (value === v || `no-schema:/${value}` === v)) {
              return k;
          }
      }
      return null;
  }
  function tryGetRegister(context, urlNoSchema) {
      let ret;
      let registerKey = urlNoSchema;
      if (registerKey.startsWith('/')) {
          registerKey = registerKey.slice(1);
      }
      const key = foundKeyByValueInImportMap(registerKey);
      if (key) {
          registerKey = key;
      }
      if (context.registerRegistry && (ret = context.registerRegistry[registerKey])) {
          context.registerRegistry[registerKey] = null;
      }
      return ret;
  }
  /**
   * Returns a SystemJS instantiation hook which calls `handler` and get the register.
   */
  function wrapHandler(handler) {
      return function (urlNoSchema) {
          // @ts-ignore
          const context = this;
          const register = tryGetRegister(context, urlNoSchema);
          if (register) {
              return register;
          }
          let retVal;
          try {
              retVal = handler(urlNoSchema);
          }
          catch (err) {
              return Promise.reject(err);
          }
          if (!isThenable(retVal)) {
              return context.getRegister();
          }
          else {
              // We can not directly `return Promise.resolve(retVal)`
              // since once we get the returns, the `System.register()` should have been called.
              // If it's synchronized, `Promise.resolve()` defers the `this.getRegister()`
              // which means other `System.register()` may happen before we resolved the promise.
              return new Promise((resolve) => {
                  return retVal.then(() => {
                      resolve(context.getRegister());
                  });
              });
          }
      };
  }
  function hookInstantiationOverSchema(schema, hook) {
      const venderInstantiate = systemJSPrototype.instantiate;
      systemJSPrototype.instantiate = function (url, firstParentUrl) {
          const schemaErased = url.substr(0, schema.length) === schema ?
              url.substr(schema.length) : null;
          return schemaErased === null ?
              venderInstantiate.call(this, url, firstParentUrl) :
              hook.call(this, schemaErased, firstParentUrl);
      };
  }

  systemJSPrototype.prepareImport = function () { return Promise.resolve(); };
  // @ts-ignore this should be a private interface
  systemJSPrototype.warmup = warmup;

  /*
   * SystemJS named register extension
   * Supports System.register('name', [..deps..], function (_export, _context) { ... })
   * 
   * Names are written to the registry as-is
   * System.register('x', ...) can be imported as System.import('x')
   */
  (function (global) {
    var System = global.System;
    setRegisterRegistry(System);
    var systemJSPrototype = System.constructor.prototype;
    var constructor = System.constructor;
    var SystemJS = function () {
      constructor.call(this);
      setRegisterRegistry(this);
    };
    SystemJS.prototype = systemJSPrototype;
    System.constructor = SystemJS;

    var firstNamedDefine;

    function setRegisterRegistry(systemInstance) {
      systemInstance.registerRegistry = Object.create(null);
    }

    var register = systemJSPrototype.register;
    systemJSPrototype.register = function (name, deps, declare) {
      if (typeof name !== 'string')
        return register.apply(this, arguments);
      var define = [deps, declare];
      this.registerRegistry[name] = define;
      if (!firstNamedDefine) {
        firstNamedDefine = define;
        Promise.resolve().then(function () {
          firstNamedDefine = null;
        });
      }
      return register.apply(this, arguments);
    };

    var resolve = systemJSPrototype.resolve;
    systemJSPrototype.resolve = function (id, parentURL) {
      try {
        // Prefer import map (or other existing) resolution over the registerRegistry
        return resolve.call(this, id, parentURL);
      } catch (err) {
        if (id in this.registerRegistry) {
          return id;
        }
        throw err;
      }
    };

    var instantiate = systemJSPrototype.instantiate;
    systemJSPrototype.instantiate = function (url, firstParentUrl) {
      var result = this.registerRegistry[url];
      if (result) {
        this.registerRegistry[url] = null;
        return result;
      } else {
        return instantiate.call(this, url, firstParentUrl);
      }
    };

    var getRegister = systemJSPrototype.getRegister;
    systemJSPrototype.getRegister = function () {
      // Calling getRegister() because other extras need to know it was called so they can perform side effects
      var register = getRegister.call(this);

      var result = firstNamedDefine || register;
      firstNamedDefine = null;
      return result;
    };
  })(typeof self !== 'undefined' ? self : global);

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLmJ1bmRsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0NvY29zL0NyZWF0b3IvMy44LjgvQ29jb3NDcmVhdG9yLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL0Bjb2Nvcy9tb2R1bGUtc3lzdGVtL3N5c3RlbWpzL3NyYy9lcnItbXNnLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0NvY29zL0NyZWF0b3IvMy44LjgvQ29jb3NDcmVhdG9yLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL0Bjb2Nvcy9tb2R1bGUtc3lzdGVtL3N5c3RlbWpzL3NyYy9jb21tb24uanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvQ29jb3MvQ3JlYXRvci8zLjguOC9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvQGNvY29zL21vZHVsZS1zeXN0ZW0vc3lzdGVtanMvc3JjL3N5c3RlbS1jb3JlLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0NvY29zL0NyZWF0b3IvMy44LjgvQ29jb3NDcmVhdG9yLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL0Bjb2Nvcy9tb2R1bGUtc3lzdGVtL2xpYi9nbG9iYWxzLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0NvY29zL0NyZWF0b3IvMy44LjgvQ29jb3NDcmVhdG9yLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL0Bjb2Nvcy9tb2R1bGUtc3lzdGVtL2xpYi90aHJvdy11bmluc3RhbnRpYXRlZC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvcy9DcmVhdG9yLzMuOC44L0NvY29zQ3JlYXRvci5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9AY29jb3MvbW9kdWxlLXN5c3RlbS9zeXN0ZW1qcy9zcmMvZmVhdHVyZXMvcmVnaXN0cnkuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvQ29jb3MvQ3JlYXRvci8zLjguOC9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvQGNvY29zL21vZHVsZS1zeXN0ZW0vbGliL3dhcm11cC9iYXNlLXVybC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvcy9DcmVhdG9yLzMuOC44L0NvY29zQ3JlYXRvci5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9AY29jb3MvbW9kdWxlLXN5c3RlbS9saWIvd2FybXVwL2ltcG9ydC1tYXAudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvQ29jb3MvQ3JlYXRvci8zLjguOC9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvQGNvY29zL21vZHVsZS1zeXN0ZW0vbGliL3dhcm11cC93YXJtdXAtY29tbW9uanMtbGlrZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvcy9DcmVhdG9yLzMuOC44L0NvY29zQ3JlYXRvci5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9AY29jb3MvbW9kdWxlLXN5c3RlbS9saWIvd2FybXVwL2luZGV4LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0NvY29zL0NyZWF0b3IvMy44LjgvQ29jb3NDcmVhdG9yLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL0Bjb2Nvcy9tb2R1bGUtc3lzdGVtL3N5c3RlbWpzL3NyYy9leHRyYXMvbmFtZWQtcmVnaXN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGVyck1zZyhlcnJDb2RlLCBtc2cpIHtcbiAgaWYgKHByb2Nlc3MuZW52LlNZU1RFTV9QUk9EVUNUSU9OKVxuICAgIHJldHVybiAobXNnIHx8IFwiXCIpICsgXCIgKFN5c3RlbUpTIGh0dHBzOi8vZ2l0LmlvL0p2RkVUI1wiICsgZXJyQ29kZSArIFwiKVwiO1xuICBlbHNlXG4gICAgcmV0dXJuIChtc2cgfHwgXCJcIikgKyBcIiAoU3lzdGVtSlMgRXJyb3IjXCIgKyBlcnJDb2RlICsgXCIgXCIgKyBcImh0dHBzOi8vZ2l0LmlvL0p2RkVUI1wiICsgZXJyQ29kZSArIFwiKVwiO1xufSIsImltcG9ydCB7IGVyck1zZyB9IGZyb20gJy4vZXJyLW1zZy5qcyc7XG5cbmV4cG9ydCB2YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnQgdmFyIGhhc1NlbGYgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnQgdmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxudmFyIGVudkdsb2JhbCA9IGhhc1NlbGYgPyBzZWxmIDogZ2xvYmFsO1xuZXhwb3J0IHsgZW52R2xvYmFsIGFzIGdsb2JhbCB9O1xuXG4vLyBMb2FkZXItc2NvcGVkIGJhc2VVcmwgYW5kIGltcG9ydCBtYXAgc3VwcG9ydGVkIGluIE5vZGUuanMgb25seVxuZXhwb3J0IHZhciBCQVNFX1VSTCA9IGhhc1N5bWJvbCA/IFN5bWJvbCgpIDogJ18nO1xuZXhwb3J0IHZhciBJTVBPUlRfTUFQID0gaGFzU3ltYm9sID8gU3ltYm9sKCkgOiAnIyc7XG5cbmV4cG9ydCB2YXIgYmFzZVVybDtcblxuaWYgKGhhc0RvY3VtZW50KSB7XG4gIHZhciBiYXNlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlW2hyZWZdJyk7XG4gIGlmIChiYXNlRWwpXG4gICAgYmFzZVVybCA9IGJhc2VFbC5ocmVmO1xufVxuXG5pZiAoIWJhc2VVcmwgJiYgdHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBiYXNlVXJsID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdLnNwbGl0KCc/JylbMF07XG4gIHZhciBsYXN0U2VwSW5kZXggPSBiYXNlVXJsLmxhc3RJbmRleE9mKCcvJyk7XG4gIGlmIChsYXN0U2VwSW5kZXggIT09IC0xKVxuICAgIGJhc2VVcmwgPSBiYXNlVXJsLnNsaWNlKDAsIGxhc3RTZXBJbmRleCArIDEpO1xufVxuXG5pZiAoIXByb2Nlc3MuZW52LlNZU1RFTV9CUk9XU0VSICYmICFiYXNlVXJsICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgY3dkID0gcHJvY2Vzcy5jd2QoKTtcbiAgLy8gVE9ETzogZW5jb2RpbmcgZWRnZSBjYXNlc1xuICBiYXNlVXJsID0gJ2ZpbGU6Ly8nICsgKGN3ZFswXSA9PT0gJy8nID8gJycgOiAnLycpICsgY3dkLnJlcGxhY2UoL1xcXFwvZywgJy8nKSArICcvJztcbn1cblxudmFyIGJhY2tzbGFzaFJlZ0V4ID0gL1xcXFwvZztcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSWZOb3RQbGFpbk9yVXJsIChyZWxVcmwsIHBhcmVudFVybCkge1xuICBpZiAocmVsVXJsLmluZGV4T2YoJ1xcXFwnKSAhPT0gLTEpXG4gICAgcmVsVXJsID0gcmVsVXJsLnJlcGxhY2UoYmFja3NsYXNoUmVnRXgsICcvJyk7XG4gIC8vIHByb3RvY29sLXJlbGF0aXZlXG4gIGlmIChyZWxVcmxbMF0gPT09ICcvJyAmJiByZWxVcmxbMV0gPT09ICcvJykge1xuICAgIHJldHVybiBwYXJlbnRVcmwuc2xpY2UoMCwgcGFyZW50VXJsLmluZGV4T2YoJzonKSArIDEpICsgcmVsVXJsO1xuICB9XG4gIC8vIHJlbGF0aXZlLXVybFxuICBlbHNlIGlmIChyZWxVcmxbMF0gPT09ICcuJyAmJiAocmVsVXJsWzFdID09PSAnLycgfHwgcmVsVXJsWzFdID09PSAnLicgJiYgKHJlbFVybFsyXSA9PT0gJy8nIHx8IHJlbFVybC5sZW5ndGggPT09IDIgJiYgKHJlbFVybCArPSAnLycpKSB8fFxuICAgICAgcmVsVXJsLmxlbmd0aCA9PT0gMSAgJiYgKHJlbFVybCArPSAnLycpKSB8fFxuICAgICAgcmVsVXJsWzBdID09PSAnLycpIHtcbiAgICB2YXIgcGFyZW50UHJvdG9jb2wgPSBwYXJlbnRVcmwuc2xpY2UoMCwgcGFyZW50VXJsLmluZGV4T2YoJzonKSArIDEpO1xuICAgIC8vIERpc2FibGVkLCBidXQgdGhlc2UgY2FzZXMgd2lsbCBnaXZlIGluY29uc2lzdGVudCByZXN1bHRzIGZvciBkZWVwIGJhY2t0cmFja2luZ1xuICAgIC8vaWYgKHBhcmVudFVybFtwYXJlbnRQcm90b2NvbC5sZW5ndGhdICE9PSAnLycpXG4gICAgLy8gIHRocm93IEVycm9yKCdDYW5ub3QgcmVzb2x2ZScpO1xuICAgIC8vIHJlYWQgcGF0aG5hbWUgZnJvbSBwYXJlbnQgVVJMXG4gICAgLy8gcGF0aG5hbWUgdGFrZW4gdG8gYmUgcGFydCBhZnRlciBsZWFkaW5nIFwiL1wiXG4gICAgdmFyIHBhdGhuYW1lO1xuICAgIGlmIChwYXJlbnRVcmxbcGFyZW50UHJvdG9jb2wubGVuZ3RoICsgMV0gPT09ICcvJykge1xuICAgICAgLy8gcmVzb2x2aW5nIHRvIGEgOi8vIHNvIHdlIG5lZWQgdG8gcmVhZCBvdXQgdGhlIGF1dGggYW5kIGhvc3RcbiAgICAgIGlmIChwYXJlbnRQcm90b2NvbCAhPT0gJ2ZpbGU6Jykge1xuICAgICAgICBwYXRobmFtZSA9IHBhcmVudFVybC5zbGljZShwYXJlbnRQcm90b2NvbC5sZW5ndGggKyAyKTtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zbGljZShwYXRobmFtZS5pbmRleE9mKCcvJykgKyAxKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBwYXRobmFtZSA9IHBhcmVudFVybC5zbGljZSg4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyByZXNvbHZpbmcgdG8gOi8gc28gcGF0aG5hbWUgaXMgdGhlIC8uLi4gcGFydFxuICAgICAgcGF0aG5hbWUgPSBwYXJlbnRVcmwuc2xpY2UocGFyZW50UHJvdG9jb2wubGVuZ3RoICsgKHBhcmVudFVybFtwYXJlbnRQcm90b2NvbC5sZW5ndGhdID09PSAnLycpKTtcbiAgICB9XG5cbiAgICBpZiAocmVsVXJsWzBdID09PSAnLycpXG4gICAgICByZXR1cm4gcGFyZW50VXJsLnNsaWNlKDAsIHBhcmVudFVybC5sZW5ndGggLSBwYXRobmFtZS5sZW5ndGggLSAxKSArIHJlbFVybDtcblxuICAgIC8vIGpvaW4gdG9nZXRoZXIgYW5kIHNwbGl0IGZvciByZW1vdmFsIG9mIC4uIGFuZCAuIHNlZ21lbnRzXG4gICAgLy8gbG9vcGluZyB0aGUgc3RyaW5nIGluc3RlYWQgb2YgYW55dGhpbmcgZmFuY3kgZm9yIHBlcmYgcmVhc29uc1xuICAgIC8vICcuLi8uLi8uLi8uLi8uLi96JyByZXNvbHZlZCB0byAneC95JyBpcyBqdXN0ICd6J1xuICAgIHZhciBzZWdtZW50ZWQgPSBwYXRobmFtZS5zbGljZSgwLCBwYXRobmFtZS5sYXN0SW5kZXhPZignLycpICsgMSkgKyByZWxVcmw7XG5cbiAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgdmFyIHNlZ21lbnRJbmRleCA9IC0xO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBidXN5IHJlYWRpbmcgYSBzZWdtZW50IC0gb25seSB0ZXJtaW5hdGUgb24gJy8nXG4gICAgICBpZiAoc2VnbWVudEluZGV4ICE9PSAtMSkge1xuICAgICAgICBpZiAoc2VnbWVudGVkW2ldID09PSAnLycpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzZWdtZW50ZWQuc2xpY2Uoc2VnbWVudEluZGV4LCBpICsgMSkpO1xuICAgICAgICAgIHNlZ21lbnRJbmRleCA9IC0xO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIG5ldyBzZWdtZW50IC0gY2hlY2sgaWYgaXQgaXMgcmVsYXRpdmVcbiAgICAgIGVsc2UgaWYgKHNlZ21lbnRlZFtpXSA9PT0gJy4nKSB7XG4gICAgICAgIC8vIC4uLyBzZWdtZW50XG4gICAgICAgIGlmIChzZWdtZW50ZWRbaSArIDFdID09PSAnLicgJiYgKHNlZ21lbnRlZFtpICsgMl0gPT09ICcvJyB8fCBpICsgMiA9PT0gc2VnbWVudGVkLmxlbmd0aCkpIHtcbiAgICAgICAgICBvdXRwdXQucG9wKCk7XG4gICAgICAgICAgaSArPSAyO1xuICAgICAgICB9XG4gICAgICAgIC8vIC4vIHNlZ21lbnRcbiAgICAgICAgZWxzZSBpZiAoc2VnbWVudGVkW2kgKyAxXSA9PT0gJy8nIHx8IGkgKyAxID09PSBzZWdtZW50ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIHRoZSBzdGFydCBvZiBhIG5ldyBzZWdtZW50IGFzIGJlbG93XG4gICAgICAgICAgc2VnbWVudEluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gaXQgaXMgdGhlIHN0YXJ0IG9mIGEgbmV3IHNlZ21lbnRcbiAgICAgIGVsc2Uge1xuICAgICAgICBzZWdtZW50SW5kZXggPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBmaW5pc2ggcmVhZGluZyBvdXQgdGhlIGxhc3Qgc2VnbWVudFxuICAgIGlmIChzZWdtZW50SW5kZXggIT09IC0xKVxuICAgICAgb3V0cHV0LnB1c2goc2VnbWVudGVkLnNsaWNlKHNlZ21lbnRJbmRleCkpO1xuICAgIHJldHVybiBwYXJlbnRVcmwuc2xpY2UoMCwgcGFyZW50VXJsLmxlbmd0aCAtIHBhdGhuYW1lLmxlbmd0aCkgKyBvdXRwdXQuam9pbignJyk7XG4gIH1cbn1cblxuLypcbiAqIEltcG9ydCBtYXBzIGltcGxlbWVudGF0aW9uXG4gKlxuICogVG8gbWFrZSBsb29rdXBzIGZhc3Qgd2UgcHJlLXJlc29sdmUgdGhlIGVudGlyZSBpbXBvcnQgbWFwXG4gKiBhbmQgdGhlbiBtYXRjaCBiYXNlZCBvbiBiYWNrdHJhY2tlZCBoYXNoIGxvb2t1cHNcbiAqXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVVcmwgKHJlbFVybCwgcGFyZW50VXJsKSB7XG4gIHJldHVybiByZXNvbHZlSWZOb3RQbGFpbk9yVXJsKHJlbFVybCwgcGFyZW50VXJsKSB8fCAocmVsVXJsLmluZGV4T2YoJzonKSAhPT0gLTEgPyByZWxVcmwgOiByZXNvbHZlSWZOb3RQbGFpbk9yVXJsKCcuLycgKyByZWxVcmwsIHBhcmVudFVybCkpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlQW5kQ29tcG9zZVBhY2thZ2VzIChwYWNrYWdlcywgb3V0UGFja2FnZXMsIGJhc2VVcmwsIHBhcmVudE1hcCwgcGFyZW50VXJsKSB7XG4gIGZvciAodmFyIHAgaW4gcGFja2FnZXMpIHtcbiAgICB2YXIgcmVzb2x2ZWRMaHMgPSByZXNvbHZlSWZOb3RQbGFpbk9yVXJsKHAsIGJhc2VVcmwpIHx8IHA7XG4gICAgdmFyIHJocyA9IHBhY2thZ2VzW3BdO1xuICAgIC8vIHBhY2thZ2UgZmFsbGJhY2tzIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkXG4gICAgaWYgKHR5cGVvZiByaHMgIT09ICdzdHJpbmcnKVxuICAgICAgY29udGludWU7XG4gICAgdmFyIG1hcHBlZCA9IHJlc29sdmVJbXBvcnRNYXAocGFyZW50TWFwLCByZXNvbHZlSWZOb3RQbGFpbk9yVXJsKHJocywgYmFzZVVybCkgfHwgcmhzLCBwYXJlbnRVcmwpO1xuICAgIGlmICghbWFwcGVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuU1lTVEVNX1BST0RVQ1RJT04pXG4gICAgICAgIHRhcmdldFdhcm5pbmcoJ1cxJywgcCwgcmhzKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGFyZ2V0V2FybmluZygnVzEnLCBwLCByaHMsICdiYXJlIHNwZWNpZmllciBkaWQgbm90IHJlc29sdmUnKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgb3V0UGFja2FnZXNbcmVzb2x2ZWRMaHNdID0gbWFwcGVkO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQW5kQ29tcG9zZUltcG9ydE1hcCAoanNvbiwgYmFzZVVybCwgb3V0TWFwKSB7XG4gIGlmIChqc29uLmltcG9ydHMpXG4gICAgcmVzb2x2ZUFuZENvbXBvc2VQYWNrYWdlcyhqc29uLmltcG9ydHMsIG91dE1hcC5pbXBvcnRzLCBiYXNlVXJsLCBvdXRNYXAsIG51bGwpO1xuXG4gIHZhciB1O1xuICBmb3IgKHUgaW4ganNvbi5zY29wZXMgfHwge30pIHtcbiAgICB2YXIgcmVzb2x2ZWRTY29wZSA9IHJlc29sdmVVcmwodSwgYmFzZVVybCk7XG4gICAgcmVzb2x2ZUFuZENvbXBvc2VQYWNrYWdlcyhqc29uLnNjb3Blc1t1XSwgb3V0TWFwLnNjb3Blc1tyZXNvbHZlZFNjb3BlXSB8fCAob3V0TWFwLnNjb3Blc1tyZXNvbHZlZFNjb3BlXSA9IHt9KSwgYmFzZVVybCwgb3V0TWFwLCByZXNvbHZlZFNjb3BlKTtcbiAgfVxuXG4gIGZvciAodSBpbiBqc29uLmRlcGNhY2hlIHx8IHt9KVxuICAgIG91dE1hcC5kZXBjYWNoZVtyZXNvbHZlVXJsKHUsIGJhc2VVcmwpXSA9IGpzb24uZGVwY2FjaGVbdV07XG4gIFxuICBmb3IgKHUgaW4ganNvbi5pbnRlZ3JpdHkgfHwge30pXG4gICAgb3V0TWFwLmludGVncml0eVtyZXNvbHZlVXJsKHUsIGJhc2VVcmwpXSA9IGpzb24uaW50ZWdyaXR5W3VdO1xufVxuXG5mdW5jdGlvbiBnZXRNYXRjaCAocGF0aCwgbWF0Y2hPYmopIHtcbiAgaWYgKG1hdGNoT2JqW3BhdGhdKVxuICAgIHJldHVybiBwYXRoO1xuICB2YXIgc2VwSW5kZXggPSBwYXRoLmxlbmd0aDtcbiAgZG8ge1xuICAgIHZhciBzZWdtZW50ID0gcGF0aC5zbGljZSgwLCBzZXBJbmRleCArIDEpO1xuICAgIGlmIChzZWdtZW50IGluIG1hdGNoT2JqKVxuICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gIH0gd2hpbGUgKChzZXBJbmRleCA9IHBhdGgubGFzdEluZGV4T2YoJy8nLCBzZXBJbmRleCAtIDEpKSAhPT0gLTEpXG59XG5cbmZ1bmN0aW9uIGFwcGx5UGFja2FnZXMgKGlkLCBwYWNrYWdlcykge1xuICB2YXIgcGtnTmFtZSA9IGdldE1hdGNoKGlkLCBwYWNrYWdlcyk7XG4gIGlmIChwa2dOYW1lKSB7XG4gICAgdmFyIHBrZyA9IHBhY2thZ2VzW3BrZ05hbWVdO1xuICAgIGlmIChwa2cgPT09IG51bGwpIHJldHVybjtcbiAgICBpZiAoaWQubGVuZ3RoID4gcGtnTmFtZS5sZW5ndGggJiYgcGtnW3BrZy5sZW5ndGggLSAxXSAhPT0gJy8nKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuU1lTVEVNX1BST0RVQ1RJT04pXG4gICAgICAgIHRhcmdldFdhcm5pbmcoJ1cyJywgcGtnTmFtZSwgcGtnKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGFyZ2V0V2FybmluZygnVzInLCBwa2dOYW1lLCBwa2csIFwic2hvdWxkIGhhdmUgYSB0cmFpbGluZyAnLydcIik7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgIHJldHVybiBwa2cgKyBpZC5zbGljZShwa2dOYW1lLmxlbmd0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFyZ2V0V2FybmluZyAoY29kZSwgbWF0Y2gsIHRhcmdldCwgbXNnKSB7XG4gIGNvbnNvbGUud2FybihlcnJNc2coY29kZSwgcHJvY2Vzcy5lbnYuU1lTVEVNX1BST0RVQ1RJT04gPyBbdGFyZ2V0LCBtYXRjaF0uam9pbignLCAnKSA6IFwiUGFja2FnZSB0YXJnZXQgXCIgKyBtc2cgKyBcIiwgcmVzb2x2aW5nIHRhcmdldCAnXCIgKyB0YXJnZXQgKyBcIicgZm9yIFwiICsgbWF0Y2gpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVJbXBvcnRNYXAgKGltcG9ydE1hcCwgcmVzb2x2ZWRPclBsYWluLCBwYXJlbnRVcmwpIHtcbiAgdmFyIHNjb3BlcyA9IGltcG9ydE1hcC5zY29wZXM7XG4gIHZhciBzY29wZVVybCA9IHBhcmVudFVybCAmJiBnZXRNYXRjaChwYXJlbnRVcmwsIHNjb3Blcyk7XG4gIHdoaWxlIChzY29wZVVybCkge1xuICAgIHZhciBwYWNrYWdlUmVzb2x1dGlvbiA9IGFwcGx5UGFja2FnZXMocmVzb2x2ZWRPclBsYWluLCBzY29wZXNbc2NvcGVVcmxdKTtcbiAgICBpZiAocGFja2FnZVJlc29sdXRpb24pXG4gICAgICByZXR1cm4gcGFja2FnZVJlc29sdXRpb247XG4gICAgc2NvcGVVcmwgPSBnZXRNYXRjaChzY29wZVVybC5zbGljZSgwLCBzY29wZVVybC5sYXN0SW5kZXhPZignLycpKSwgc2NvcGVzKTtcbiAgfVxuICByZXR1cm4gYXBwbHlQYWNrYWdlcyhyZXNvbHZlZE9yUGxhaW4sIGltcG9ydE1hcC5pbXBvcnRzKSB8fCByZXNvbHZlZE9yUGxhaW4uaW5kZXhPZignOicpICE9PSAtMSAmJiByZXNvbHZlZE9yUGxhaW47XG59XG4iLCIvKlxuICogU3lzdGVtSlMgQ29yZVxuICogXG4gKiBQcm92aWRlc1xuICogLSBTeXN0ZW0uaW1wb3J0XG4gKiAtIFN5c3RlbS5yZWdpc3RlciBzdXBwb3J0IGZvclxuICogICAgIGxpdmUgYmluZGluZ3MsIGZ1bmN0aW9uIGhvaXN0aW5nIHRocm91Z2ggY2lyY3VsYXIgcmVmZXJlbmNlcyxcbiAqICAgICByZWV4cG9ydHMsIGR5bmFtaWMgaW1wb3J0LCBpbXBvcnQubWV0YS51cmwsIHRvcC1sZXZlbCBhd2FpdFxuICogLSBTeXN0ZW0uZ2V0UmVnaXN0ZXIgdG8gZ2V0IHRoZSByZWdpc3RyYXRpb25cbiAqIC0gU3ltYm9sLnRvU3RyaW5nVGFnIHN1cHBvcnQgaW4gTW9kdWxlIG9iamVjdHNcbiAqIC0gSG9va2FibGUgU3lzdGVtLmNyZWF0ZUNvbnRleHQgdG8gY3VzdG9taXplIGltcG9ydC5tZXRhXG4gKiAtIFN5c3RlbS5vbmxvYWQoZXJyLCBpZCwgZGVwcykgaGFuZGxlciBmb3IgdHJhY2luZyAvIGhvdC1yZWxvYWRpbmdcbiAqIFxuICogQ29yZSBjb21lcyB3aXRoIG5vIFN5c3RlbS5wcm90b3R5cGUucmVzb2x2ZSBvclxuICogU3lzdGVtLnByb3RvdHlwZS5pbnN0YW50aWF0ZSBpbXBsZW1lbnRhdGlvbnNcbiAqL1xuaW1wb3J0IHsgZ2xvYmFsLCBoYXNTeW1ib2wgfSBmcm9tICcuL2NvbW1vbi5qcyc7XG5pbXBvcnQgeyBlcnJNc2cgfSBmcm9tICcuL2Vyci1tc2cuanMnO1xuZXhwb3J0IHsgc3lzdGVtSlNQcm90b3R5cGUsIFJFR0lTVFJZIH1cblxudmFyIHRvU3RyaW5nVGFnID0gaGFzU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbnZhciBSRUdJU1RSWSA9IGhhc1N5bWJvbCA/IFN5bWJvbCgpIDogJ0AnO1xuXG5mdW5jdGlvbiBTeXN0ZW1KUyAoKSB7XG4gIHRoaXNbUkVHSVNUUlldID0ge307XG59XG5cbnZhciBzeXN0ZW1KU1Byb3RvdHlwZSA9IFN5c3RlbUpTLnByb3RvdHlwZTtcblxuc3lzdGVtSlNQcm90b3R5cGUuaW1wb3J0ID0gZnVuY3Rpb24gKGlkLCBwYXJlbnRVcmwpIHtcbiAgdmFyIGxvYWRlciA9IHRoaXM7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZGVyLnByZXBhcmVJbXBvcnQoKSlcbiAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxvYWRlci5yZXNvbHZlKGlkLCBwYXJlbnRVcmwpO1xuICB9KVxuICAudGhlbihmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgbG9hZCA9IGdldE9yQ3JlYXRlTG9hZChsb2FkZXIsIGlkKTtcbiAgICByZXR1cm4gbG9hZC5DIHx8IHRvcExldmVsTG9hZChsb2FkZXIsIGxvYWQpO1xuICB9KTtcbn07XG5cbi8vIEhvb2thYmxlIGNyZWF0ZUNvbnRleHQgZnVuY3Rpb24gLT4gYWxsb3dpbmcgZWcgY3VzdG9tIGltcG9ydCBtZXRhXG5zeXN0ZW1KU1Byb3RvdHlwZS5jcmVhdGVDb250ZXh0ID0gZnVuY3Rpb24gKHBhcmVudElkKSB7XG4gIHZhciBsb2FkZXIgPSB0aGlzO1xuICByZXR1cm4ge1xuICAgIHVybDogcGFyZW50SWQsXG4gICAgcmVzb2x2ZTogZnVuY3Rpb24gKGlkLCBwYXJlbnRVcmwpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZGVyLnJlc29sdmUoaWQsIHBhcmVudFVybCB8fCBwYXJlbnRJZCkpO1xuICAgIH1cbiAgfTtcbn07XG5cbi8vIG9uTG9hZChlcnIsIGlkLCBkZXBzKSBwcm92aWRlZCBmb3IgdHJhY2luZyAvIGhvdC1yZWxvYWRpbmdcbmlmICghcHJvY2Vzcy5lbnYuU1lTVEVNX1BST0RVQ1RJT04pXG4gIHN5c3RlbUpTUHJvdG90eXBlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHt9O1xuZnVuY3Rpb24gbG9hZFRvSWQgKGxvYWQpIHtcbiAgcmV0dXJuIGxvYWQuaWQ7XG59XG5mdW5jdGlvbiB0cmlnZ2VyT25sb2FkIChsb2FkZXIsIGxvYWQsIGVyciwgaXNFcnJTb3VyY2UpIHtcbiAgbG9hZGVyLm9ubG9hZChlcnIsIGxvYWQuaWQsIGxvYWQuZCAmJiBsb2FkLmQubWFwKGxvYWRUb0lkKSwgISFpc0VyclNvdXJjZSk7XG4gIGlmIChlcnIpXG4gICAgdGhyb3cgZXJyO1xufVxuXG52YXIgbGFzdFJlZ2lzdGVyO1xuc3lzdGVtSlNQcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoZGVwcywgZGVjbGFyZSkge1xuICBsYXN0UmVnaXN0ZXIgPSBbZGVwcywgZGVjbGFyZV07XG59O1xuXG4vKlxuICogZ2V0UmVnaXN0ZXIgcHJvdmlkZXMgdGhlIGxhc3QgYW5vbnltb3VzIFN5c3RlbS5yZWdpc3RlciBjYWxsXG4gKi9cbnN5c3RlbUpTUHJvdG90eXBlLmdldFJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX2xhc3RSZWdpc3RlciA9IGxhc3RSZWdpc3RlcjtcbiAgbGFzdFJlZ2lzdGVyID0gdW5kZWZpbmVkO1xuICByZXR1cm4gX2xhc3RSZWdpc3Rlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPckNyZWF0ZUxvYWQgKGxvYWRlciwgaWQsIGZpcnN0UGFyZW50VXJsKSB7XG4gIHZhciBsb2FkID0gbG9hZGVyW1JFR0lTVFJZXVtpZF07XG4gIGlmIChsb2FkKVxuICAgIHJldHVybiBsb2FkO1xuXG4gIHZhciBpbXBvcnRlclNldHRlcnMgPSBbXTtcbiAgdmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKHRvU3RyaW5nVGFnKVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgdG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuICBcbiAgdmFyIGluc3RhbnRpYXRlUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpXG4gIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbG9hZGVyLmluc3RhbnRpYXRlKGlkLCBmaXJzdFBhcmVudFVybCk7XG4gIH0pXG4gIC50aGVuKGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcbiAgICBpZiAoIXJlZ2lzdHJhdGlvbilcbiAgICAgIHRocm93IEVycm9yKGVyck1zZygyLCBwcm9jZXNzLmVudi5TWVNURU1fUFJPRFVDVElPTiA/IGlkIDogJ01vZHVsZSAnICsgaWQgKyAnIGRpZCBub3QgaW5zdGFudGlhdGUnKSk7XG4gICAgZnVuY3Rpb24gX2V4cG9ydCAobmFtZSwgdmFsdWUpIHtcbiAgICAgIC8vIG5vdGUgaWYgd2UgaGF2ZSBob2lzdGVkIGV4cG9ydHMgKGluY2x1ZGluZyByZWV4cG9ydHMpXG4gICAgICBsb2FkLmggPSB0cnVlO1xuICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKCEobmFtZSBpbiBucykgfHwgbnNbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgbnNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbmFtZSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG5hbWVbcF07XG4gICAgICAgICAgaWYgKCEocCBpbiBucykgfHwgbnNbcF0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBuc1twXSA9IHZhbHVlO1xuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWUuX19lc01vZHVsZSkge1xuICAgICAgICAgIG5zLl9fZXNNb2R1bGUgPSBuYW1lLl9fZXNNb2R1bGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkKVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltcG9ydGVyU2V0dGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBzZXR0ZXIgPSBpbXBvcnRlclNldHRlcnNbaV07XG4gICAgICAgICAgaWYgKHNldHRlcikgc2V0dGVyKG5zKTtcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB2YXIgZGVjbGFyZWQgPSByZWdpc3RyYXRpb25bMV0oX2V4cG9ydCwgcmVnaXN0cmF0aW9uWzFdLmxlbmd0aCA9PT0gMiA/IHtcbiAgICAgIGltcG9ydDogZnVuY3Rpb24gKGltcG9ydElkKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIuaW1wb3J0KGltcG9ydElkLCBpZCk7XG4gICAgICB9LFxuICAgICAgbWV0YTogbG9hZGVyLmNyZWF0ZUNvbnRleHQoaWQpXG4gICAgfSA6IHVuZGVmaW5lZCk7XG4gICAgbG9hZC5lID0gZGVjbGFyZWQuZXhlY3V0ZSB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICByZXR1cm4gW3JlZ2lzdHJhdGlvblswXSwgZGVjbGFyZWQuc2V0dGVycyB8fCBbXV07XG4gIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBsb2FkLmUgPSBudWxsO1xuICAgIGxvYWQuZXIgPSBlcnI7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5TWVNURU1fUFJPRFVDVElPTikgdHJpZ2dlck9ubG9hZChsb2FkZXIsIGxvYWQsIGVyciwgdHJ1ZSk7XG4gICAgdGhyb3cgZXJyO1xuICB9KTtcblxuICB2YXIgbGlua1Byb21pc2UgPSBpbnN0YW50aWF0ZVByb21pc2VcbiAgLnRoZW4oZnVuY3Rpb24gKGluc3RhbnRpYXRpb24pIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoaW5zdGFudGlhdGlvblswXS5tYXAoZnVuY3Rpb24gKGRlcCwgaSkge1xuICAgICAgdmFyIHNldHRlciA9IGluc3RhbnRpYXRpb25bMV1baV07XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxvYWRlci5yZXNvbHZlKGRlcCwgaWQpKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGRlcElkKSB7XG4gICAgICAgIHZhciBkZXBMb2FkID0gZ2V0T3JDcmVhdGVMb2FkKGxvYWRlciwgZGVwSWQsIGlkKTtcbiAgICAgICAgLy8gZGVwTG9hZC5JIG1heSBiZSB1bmRlZmluZWQgZm9yIGFscmVhZHktZXZhbHVhdGVkXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGVwTG9hZC5JKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICAgICAgZGVwTG9hZC5pLnB1c2goc2V0dGVyKTtcbiAgICAgICAgICAgIC8vIG9ubHkgcnVuIGVhcmx5IHNldHRlcnMgd2hlbiB0aGVyZSBhcmUgaG9pc3RlZCBleHBvcnRzIG9mIHRoYXQgbW9kdWxlXG4gICAgICAgICAgICAvLyB0aGUgdGltaW5nIHdvcmtzIGhlcmUgYXMgcGVuZGluZyBob2lzdGVkIGV4cG9ydCBjYWxscyB3aWxsIHRyaWdnZXIgdGhyb3VnaCBpbXBvcnRlclNldHRlcnNcbiAgICAgICAgICAgIGlmIChkZXBMb2FkLmggfHwgIWRlcExvYWQuSSlcbiAgICAgICAgICAgICAgc2V0dGVyKGRlcExvYWQubik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZXBMb2FkO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pKVxuICAgIC50aGVuKGZ1bmN0aW9uIChkZXBMb2Fkcykge1xuICAgICAgbG9hZC5kID0gZGVwTG9hZHM7XG4gICAgfSk7XG4gIH0pO1xuICBpZiAoIXByb2Nlc3MuZW52LlNZU1RFTV9CUk9XU0VSKVxuICAgIGxpbmtQcm9taXNlLmNhdGNoKGZ1bmN0aW9uICgpIHt9KTtcblxuICAvLyBDYXBpdGFsIGxldHRlciA9IGEgcHJvbWlzZSBmdW5jdGlvblxuICByZXR1cm4gbG9hZCA9IGxvYWRlcltSRUdJU1RSWV1baWRdID0ge1xuICAgIGlkOiBpZCxcbiAgICAvLyBpbXBvcnRlclNldHRlcnMsIHRoZSBzZXR0ZXJzIGZ1bmN0aW9ucyByZWdpc3RlcmVkIHRvIHRoaXMgZGVwZW5kZW5jeVxuICAgIC8vIHdlIHJldGFpbiB0aGlzIHRvIGFkZCBtb3JlIGxhdGVyXG4gICAgaTogaW1wb3J0ZXJTZXR0ZXJzLFxuICAgIC8vIG1vZHVsZSBuYW1lc3BhY2Ugb2JqZWN0XG4gICAgbjogbnMsXG5cbiAgICAvLyBpbnN0YW50aWF0ZVxuICAgIEk6IGluc3RhbnRpYXRlUHJvbWlzZSxcbiAgICAvLyBsaW5rXG4gICAgTDogbGlua1Byb21pc2UsXG4gICAgLy8gd2hldGhlciBpdCBoYXMgaG9pc3RlZCBleHBvcnRzXG4gICAgaDogZmFsc2UsXG5cbiAgICAvLyBPbiBpbnN0YW50aWF0ZSBjb21wbGV0aW9uIHdlIGhhdmUgcG9wdWxhdGVkOlxuICAgIC8vIGRlcGVuZGVuY3kgbG9hZCByZWNvcmRzXG4gICAgZDogdW5kZWZpbmVkLFxuICAgIC8vIGV4ZWN1dGlvbiBmdW5jdGlvblxuICAgIGU6IHVuZGVmaW5lZCxcblxuICAgIC8vIE9uIGV4ZWN1dGlvbiB3ZSBoYXZlIHBvcHVsYXRlZDpcbiAgICAvLyB0aGUgZXhlY3V0aW9uIGVycm9yIGlmIGFueVxuICAgIGVyOiB1bmRlZmluZWQsXG4gICAgLy8gaW4gdGhlIGNhc2Ugb2YgVExBLCB0aGUgZXhlY3V0aW9uIHByb21pc2VcbiAgICBFOiB1bmRlZmluZWQsXG5cbiAgICAvLyBPbiBleGVjdXRpb24sIEwsIEksIEUgY2xlYXJlZFxuXG4gICAgLy8gUHJvbWlzZSBmb3IgdG9wLWxldmVsIGNvbXBsZXRpb25cbiAgICBDOiB1bmRlZmluZWQsXG5cbiAgICAvLyBwYXJlbnQgaW5zdGFudGlhdG9yIC8gZXhlY3V0b3JcbiAgICBwOiB1bmRlZmluZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5zdGFudGlhdGVBbGwgKGxvYWRlciwgbG9hZCwgcGFyZW50LCBsb2FkZWQpIHtcbiAgaWYgKCFsb2FkZWRbbG9hZC5pZF0pIHtcbiAgICBsb2FkZWRbbG9hZC5pZF0gPSB0cnVlO1xuICAgIC8vIGxvYWQuTCBtYXkgYmUgdW5kZWZpbmVkIGZvciBhbHJlYWR5LWluc3RhbnRpYXRlZFxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZC5MKVxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghbG9hZC5wIHx8IGxvYWQucC5lID09PSBudWxsKVxuICAgICAgICBsb2FkLnAgPSBwYXJlbnQ7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwobG9hZC5kLm1hcChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW50aWF0ZUFsbChsb2FkZXIsIGRlcCwgcGFyZW50LCBsb2FkZWQpO1xuICAgICAgfSkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmIChsb2FkLmVyKVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICBsb2FkLmUgPSBudWxsO1xuICAgICAgaWYgKCFwcm9jZXNzLmVudi5TWVNURU1fUFJPRFVDVElPTikgdHJpZ2dlck9ubG9hZChsb2FkZXIsIGxvYWQsIGVyciwgZmFsc2UpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvcExldmVsTG9hZCAobG9hZGVyLCBsb2FkKSB7XG4gIHJldHVybiBsb2FkLkMgPSBpbnN0YW50aWF0ZUFsbChsb2FkZXIsIGxvYWQsIGxvYWQsIHt9KVxuICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHBvc3RPcmRlckV4ZWMobG9hZGVyLCBsb2FkLCB7fSk7XG4gIH0pXG4gIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbG9hZC5uO1xuICB9KTtcbn1cblxuLy8gdGhlIGNsb3Nlc3Qgd2UgY2FuIGdldCB0byBjYWxsKHVuZGVmaW5lZClcbnZhciBudWxsQ29udGV4dCA9IE9iamVjdC5mcmVlemUoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG5cbi8vIEVxdWl2YWxlbnQgdG8gYFByb21pc2UucHJvdG90eXBlLmZpbmFsbHlgXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9kZXZlbG9waXQvZDk3MGJhYzE4NDMwOTQzZTRiMzM5MmIwMjlhMmE5NmNcbnZhciBwcm9taXNlUHJvdG90eXBlRmluYWxseSA9IFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgfHwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKGNhbGxiYWNrLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGNvbnN0IFAgPSB0aGlzLmNvbnN0cnVjdG9yIHx8IFByb21pc2U7XG4gICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgICAgdmFsdWUgPT4gUC5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4gdmFsdWUpLFxuICAgICAgICBlcnIgPT4gUC5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4geyB0aHJvdyBlcnI7IH0pLFxuICAgICk7XG59XG5cbi8vIHJldHVybnMgYSBwcm9taXNlIGlmIGFuZCBvbmx5IGlmIGEgdG9wLWxldmVsIGF3YWl0IHN1YmdyYXBoXG4vLyB0aHJvd3Mgb24gc3luYyBlcnJvcnNcbmZ1bmN0aW9uIHBvc3RPcmRlckV4ZWMgKGxvYWRlciwgbG9hZCwgc2Vlbikge1xuICBpZiAoc2Vlbltsb2FkLmlkXSkge1xuICAgIHJldHVybiBsb2FkLkU7XG4gIH1cbiAgc2Vlbltsb2FkLmlkXSA9IHRydWU7XG5cbiAgaWYgKCFsb2FkLmUpIHtcbiAgICBpZiAobG9hZC5lcilcbiAgICAgIHRocm93IGxvYWQuZXI7XG4gICAgaWYgKGxvYWQuRSlcbiAgICAgIHJldHVybiBsb2FkLkU7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRnJvbSBoZXJlIHdlJ3JlIGFib3V0IHRvIGV4ZWN1dGUgdGhlIGxvYWQuXG4gIC8vIEJlY2F1c2UgdGhlIGV4ZWN1dGlvbiBtYXkgYmUgYXN5bmMsIHdlIHBvcCB0aGUgYGxvYWQuZWAgZmlyc3QuXG4gIC8vIFNvIGBsb2FkLmUgPT09IG51bGxgIGFsd2F5cyBtZWFucyB0aGUgbG9hZCBoYXMgYmVlbiBleGVjdXRlZCBvciBpcyBleGVjdXRpbmcuXG4gIC8vIFRvIGluc3BlY3QgdGhlIHN0YXRlOlxuICAvLyAtIElmIGBsb2FkLmVyYCBpcyB0cnV0aHksIHRoZSBleGVjdXRpb24gaGFzIHRocmV3IG9yIGhhcyBiZWVuIHJlamVjdGVkO1xuICAvLyAtIG90aGVyd2lzZSwgZWl0aGVyIHRoZSBgbG9hZC5FYCBpcyBhIHByb21pc2UsIG1lYW5zIGl0J3MgdW5kZXIgYXN5bmMgZXhlY3V0aW9uLCBvclxuICAvLyAtIHRoZSBgbG9hZC5FYCBpcyBudWxsLCBtZWFucyB0aGUgbG9hZCBoYXMgY29tcGxldGVkIHRoZSBleGVjdXRpb24gb3IgaGFzIGJlZW4gYXN5bmMgcmVzb2x2ZWQuXG4gIGNvbnN0IGV4ZWMgPSBsb2FkLmU7XG4gIGxvYWQuZSA9IG51bGw7XG5cbiAgLy8gZGVwcyBleGVjdXRlIGZpcnN0LCB1bmxlc3MgY2lyY3VsYXJcbiAgdmFyIGRlcExvYWRQcm9taXNlcztcbiAgbG9hZC5kLmZvckVhY2goZnVuY3Rpb24gKGRlcExvYWQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGRlcExvYWRQcm9taXNlID0gcG9zdE9yZGVyRXhlYyhsb2FkZXIsIGRlcExvYWQsIHNlZW4pO1xuICAgICAgaWYgKGRlcExvYWRQcm9taXNlKSBcbiAgICAgICAgKGRlcExvYWRQcm9taXNlcyA9IGRlcExvYWRQcm9taXNlcyB8fCBbXSkucHVzaChkZXBMb2FkUHJvbWlzZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIGxvYWQuZXIgPSBlcnI7XG4gICAgICBpZiAoIXByb2Nlc3MuZW52LlNZU1RFTV9QUk9EVUNUSU9OKSB0cmlnZ2VyT25sb2FkKGxvYWRlciwgbG9hZCwgZXJyLCBmYWxzZSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9KTtcbiAgaWYgKGRlcExvYWRQcm9taXNlcylcbiAgICByZXR1cm4gbG9hZC5FID0gcHJvbWlzZVByb3RvdHlwZUZpbmFsbHkuY2FsbChQcm9taXNlLmFsbChkZXBMb2FkUHJvbWlzZXMpLnRoZW4oZG9FeGVjKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxvYWQuRSA9IG51bGw7XG4gICAgfSk7XG5cbiAgdmFyIGV4ZWNQcm9taXNlID0gZG9FeGVjKCk7XG4gIGlmIChleGVjUHJvbWlzZSkge1xuICAgIHJldHVybiBsb2FkLkUgPSBwcm9taXNlUHJvdG90eXBlRmluYWxseS5jYWxsKGV4ZWNQcm9taXNlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZC5FID0gbnVsbDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvRXhlYyAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBleGVjUHJvbWlzZSA9IGV4ZWMuY2FsbChudWxsQ29udGV4dCk7XG4gICAgICBpZiAoZXhlY1Byb21pc2UpIHtcbiAgICAgICAgZXhlY1Byb21pc2UgPSBleGVjUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsb2FkLkMgPSBsb2FkLm47XG4gICAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5TWVNURU1fUFJPRFVDVElPTikgdHJpZ2dlck9ubG9hZChsb2FkZXIsIGxvYWQsIG51bGwsIHRydWUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgbG9hZC5lciA9IGVycjtcbiAgICAgICAgICBpZiAoIXByb2Nlc3MuZW52LlNZU1RFTV9QUk9EVUNUSU9OKSB0cmlnZ2VyT25sb2FkKGxvYWRlciwgbG9hZCwgZXJyLCB0cnVlKTtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZXhlY1Byb21pc2U7XG4gICAgICB9XG4gICAgICAvLyAoc2hvdWxkIGJlIGEgcHJvbWlzZSwgYnV0IGEgbWluaWZ5IG9wdGltaXphdGlvbiB0byBsZWF2ZSBvdXQgUHJvbWlzZS5yZXNvbHZlKVxuICAgICAgbG9hZC5DID0gbG9hZC5uO1xuICAgICAgbG9hZC5MID0gbG9hZC5JID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2FkLmVyID0gZXJyO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgIGlmICghcHJvY2Vzcy5lbnYuU1lTVEVNX1BST0RVQ1RJT04pIHRyaWdnZXJPbmxvYWQobG9hZGVyLCBsb2FkLCBsb2FkLmVyLCB0cnVlKTtcbiAgICB9XG4gIH1cbn1cblxuZ2xvYmFsLlN5c3RlbSA9IG5ldyBTeXN0ZW1KUygpO1xuIiwiaW1wb3J0IHR5cGUgeyBIb3RTdGF0ZSB9IGZyb20gJy4vaG1yL2hvdCc7XG5pbXBvcnQgdHlwZSB7IE1vZHVsZVN5c3RlbSB9IGZyb20gJy4vbW9kdWxlLXN5c3RlbS9tb2R1bGUtc3lzdGVtJztcblxuXG5leHBvcnQgdHlwZSBNb2R1bGVJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIE1vZHVsZSA9IE9iamVjdDtcbmV4cG9ydCB0eXBlIE1vZHVsZU1hcCA9IFJlY29yZDxNb2R1bGVJZCwgTW9kdWxlPjtcblxuZXhwb3J0IHR5cGUgU3lzdGVtSlMgPSBTeXN0ZW1KU1Byb3RvdHlwZSAmIHtcbiAgICByZWFkb25seSBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICByZWFkb25seSBwcm90b3R5cGU6IFN5c3RlbUpTUHJvdG90eXBlO1xuICAgIH07XG59XG5cbnR5cGUgRGVwcyA9IHN0cmluZ1tdO1xudHlwZSBEZWNsYXJlID0gKF9leHBvcnQ/OiBzdHJpbmcsIF9jb250ZXh0PzogT2JqZWN0KSA9PiB7XG4gICAgc2V0dGVyczogKChuczogT2JqZWN0KSA9PiB2b2lkKVtdLFxuICAgIGV4ZWN1dG9yOiAoKSA9PiB2b2lkO1xufTtcbnR5cGUgUmVnaXN0ZXIgPSBbRGVwcywgRGVjbGFyZV07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0Q29udGV4dCB7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcmVzb2x2ZSAoc3BlY2lmaWVyOiBzdHJpbmcsIHBhcmVudD86IHN0cmluZyk6IHN0cmluZztcbiAgICBjY0hvdD86IEhvdFN0YXRlO1xuICAgIG1vZHVsZVN5c3RlbT86IE1vZHVsZVN5c3RlbTtcbiAgICAvKipcbiAgICAgKiBEZWNvcmF0b3IgdG8gc3VwcG9ydGVkIHRvIHJlZ2lzdGVyIHVwdmFsdWUgY2xhc3MgaW4gbW9kdWxlLlxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBjbGFzc1xuICAgICAqL1xuICAgIHVwdmFsdWU6IChuYW1lOiBzdHJpbmcpID0+IENsYXNzRGVjb3JhdG9yO1xufVxuXG50eXBlIEVudHJpZXMgPSBJdGVyYWJsZUl0ZXJhdG9yPFtpZDogc3RyaW5nLCBuczogT2JqZWN0LCB1cHZhbHVlTGlzdD86IFJlY29yZDxzdHJpbmcsIE9iamVjdD5dPjtcblxuaW50ZXJmYWNlIFN5c3RlbUpTUHJvdG90eXBlIHtcbiAgICBoYXMgKGlkOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gICAgZGVsZXRlIChpZDogc3RyaW5nKTogZmFsc2UgfCAoKCkgPT4gdm9pZCk7XG5cbiAgICBlbnRyaWVzICgpOiBFbnRyaWVzO1xuXG4gICAgb25sb2FkIChlcnI6IHVua25vd24gfCB1bmRlZmluZWQsIGlkOiBzdHJpbmcsIGRlcGVuZGVuY2llczogc3RyaW5nW10sIC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQ7XG5cbiAgICBwcmVwYXJlSW1wb3J0ICgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgY3JlYXRlQ29udGV4dCAoaWQ6IHN0cmluZyk6IEltcG9ydENvbnRleHQ7XG5cbiAgICByZXNvbHZlIChzcGVjaWZpZXI6IHN0cmluZywgcGFyZW50Pzogc3RyaW5nKTogc3RyaW5nO1xuXG4gICAgaW1wb3J0IChpZDogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPjtcblxuICAgIGluc3RhbnRpYXRlICh1cmw6IHN0cmluZywgZmlyc3RQYXJlbnRVcmw6IHN0cmluZyk6IFJlZ2lzdGVyO1xuXG4gICAgc2V0RGVmYXVsdEhvdFJlbG9hZGFibGUgKHZhbHVlOiBib29sZWFuKTogdm9pZDtcblxuICAgIGdldERlZmF1bHRIb3RSZWxvYWRhYmxlICgpOiBib29sZWFuO1xuXG4gICAgcmVsb2FkIChmaWxlczogc3RyaW5nW10pOiBQcm9taXNlPGJvb2xlYW4+O1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgbGV0IFN5c3RlbTogU3lzdGVtSlM7XG59XG5cbnR5cGUgSW1wb3J0cyA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0TWFwIHtcbiAgICBpbXBvcnRzOiBJbXBvcnRzLFxuICAgIHNjb3BlczogUmVjb3JkPHN0cmluZywgSW1wb3J0cz4sXG59XG5cbmRlY2xhcmUgbGV0ICRnbG9iYWw6IGFueTsgIC8vICAkZ2xvYmFsIGZvciBUQU9CQU9cbmRlY2xhcmUgbGV0IGdldEFwcDogYW55OyAgLy8gZ2V0QXBwIGZvciBXRUNIQVQgbWluaXByb2dyYW1cblxuY29uc3QgZ2xvYmFsT2JqID0gKGZ1bmN0aW9uIGdldEdsb2JhbE9iaiAoKSB7XG4gICAgaWYgKHR5cGVvZiAkZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gJGdsb2JhbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBnZXRBcHAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGdldEFwcCgpLkdhbWVHbG9iYWw7XG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGNvbnN0IHN5c3RlbUdsb2JhbCA9ICh0eXBlb2YgZ2xvYmFsT2JqICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbE9iai5TeXN0ZW0gOiBTeXN0ZW0pIGFzIFN5c3RlbUpTO1xuXG5leHBvcnQgY29uc3Qgc3lzdGVtSlNQcm90b3R5cGU6IFN5c3RlbUpTUHJvdG90eXBlID0gc3lzdGVtR2xvYmFsLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiIsImltcG9ydCB7IHN5c3RlbUpTUHJvdG90eXBlIH0gZnJvbSAnLi9nbG9iYWxzJztcblxuc3lzdGVtSlNQcm90b3R5cGUuaW5zdGFudGlhdGUgPSBmdW5jdGlvbih1cmw6IHN0cmluZywgZmlyc3RQYXJlbnRVcmw6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGluc3RhbnRpYXRlICR7dXJsfSBmcm9tICR7Zmlyc3RQYXJlbnRVcmx9YCk7XG59OyIsImltcG9ydCB7IHN5c3RlbUpTUHJvdG90eXBlLCBSRUdJU1RSWSB9IGZyb20gJy4uL3N5c3RlbS1jb3JlLmpzJztcbmltcG9ydCB7IGJhc2VVcmwsIHJlc29sdmVJZk5vdFBsYWluT3JVcmwgfSBmcm9tICcuLi9jb21tb24uanMnO1xuaW1wb3J0IHsgZXJyTXNnIH0gZnJvbSAnLi4vZXJyLW1zZy5qcyc7XG5cbnZhciB0b1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZztcblxuc3lzdGVtSlNQcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIHZhciBsb2FkID0gdGhpc1tSRUdJU1RSWV1baWRdO1xuICBpZiAobG9hZCAmJiBsb2FkLmUgPT09IG51bGwgJiYgIWxvYWQuRSkge1xuICAgIGlmIChsb2FkLmVyKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGxvYWQubjtcbiAgfVxufTtcblxuc3lzdGVtSlNQcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGlkLCBtb2R1bGUpIHtcbiAgaWYgKCFwcm9jZXNzLmVudi5TWVNURU1fUFJPRFVDVElPTikge1xuICAgIHRyeSB7XG4gICAgICAvLyBObyBwYWdlLXJlbGF0aXZlIFVSTHMgYWxsb3dlZFxuICAgICAgbmV3IFVSTChpZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLndhcm4oRXJyb3IoZXJyTXNnKCdXMycsICdcIicgKyBpZCArICdcIiBpcyBub3QgYSB2YWxpZCBVUkwgdG8gc2V0IGluIHRoZSBtb2R1bGUgcmVnaXN0cnknKSkpO1xuICAgIH1cbiAgfVxuICB2YXIgbnM7XG4gIGlmICh0b1N0cmluZ1RhZyAmJiBtb2R1bGVbdG9TdHJpbmdUYWddID09PSAnTW9kdWxlJykge1xuICAgIG5zID0gbW9kdWxlO1xuICB9XG4gIGVsc2Uge1xuICAgIG5zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCBtb2R1bGUpO1xuICAgIGlmICh0b1N0cmluZ1RhZylcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgdG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuICB9XG5cbiAgdmFyIGRvbmUgPSBQcm9taXNlLnJlc29sdmUobnMpO1xuXG4gIHZhciBsb2FkID0gdGhpc1tSRUdJU1RSWV1baWRdIHx8ICh0aGlzW1JFR0lTVFJZXVtpZF0gPSB7XG4gICAgaWQ6IGlkLFxuICAgIGk6IFtdLFxuICAgIGg6IGZhbHNlLFxuICAgIGQ6IFtdLFxuICAgIGU6IG51bGwsXG4gICAgZXI6IHVuZGVmaW5lZCxcbiAgICBFOiB1bmRlZmluZWRcbiAgfSk7XG5cbiAgaWYgKGxvYWQuZSB8fCBsb2FkLkUpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBcbiAgT2JqZWN0LmFzc2lnbihsb2FkLCB7XG4gICAgbjogbnMsXG4gICAgSTogdW5kZWZpbmVkLFxuICAgIEw6IHVuZGVmaW5lZCxcbiAgICBDOiBkb25lXG4gIH0pO1xuICByZXR1cm4gbnM7XG59O1xuXG5zeXN0ZW1KU1Byb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdmFyIGxvYWQgPSB0aGlzW1JFR0lTVFJZXVtpZF07XG4gIHJldHVybiAhIWxvYWQ7XG59O1xuXG4vLyBEZWxldGUgZnVuY3Rpb24gcHJvdmlkZWQgZm9yIGhvdC1yZWxvYWRpbmcgdXNlIGNhc2VzXG5zeXN0ZW1KU1Byb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdmFyIHJlZ2lzdHJ5ID0gdGhpc1tSRUdJU1RSWV07XG4gIHZhciBsb2FkID0gcmVnaXN0cnlbaWRdO1xuICAvLyBpbiBmdXR1cmUgd2UgY2FuIHN1cHBvcnQgbG9hZC5FIGNhc2UgYnkgZmFpbGluZyBsb2FkIGZpcnN0XG4gIC8vIGJ1dCB0aGF0IHdpbGwgcmVxdWlyZSBUTEEgY2FsbGJhY2tzIHRvIGJlIGltcGxlbWVudGVkXG4gIGlmICghbG9hZCB8fCAobG9hZC5wICYmIGxvYWQucC5lICE9PSBudWxsKSB8fCBsb2FkLkUpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBpbXBvcnRlclNldHRlcnMgPSBsb2FkLmk7XG4gIC8vIHJlbW92ZSBmcm9tIGltcG9ydGVyU2V0dGVyc1xuICAvLyAocmVsZWFzZSBmb3IgZ2MpXG4gIGlmIChsb2FkLmQpXG4gICAgbG9hZC5kLmZvckVhY2goZnVuY3Rpb24gKGRlcExvYWQpIHtcbiAgICAgIHZhciBpbXBvcnRlckluZGV4ID0gZGVwTG9hZC5pLmluZGV4T2YobG9hZCk7XG4gICAgICBpZiAoaW1wb3J0ZXJJbmRleCAhPT0gLTEpXG4gICAgICAgIGRlcExvYWQuaS5zcGxpY2UoaW1wb3J0ZXJJbmRleCwgMSk7XG4gICAgfSk7XG4gIGRlbGV0ZSByZWdpc3RyeVtpZF07XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxvYWQgPSByZWdpc3RyeVtpZF07XG4gICAgaWYgKCFsb2FkIHx8ICFpbXBvcnRlclNldHRlcnMgfHwgbG9hZC5lICE9PSBudWxsIHx8IGxvYWQuRSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgYmFjayB0aGUgb2xkIHNldHRlcnNcbiAgICBpbXBvcnRlclNldHRlcnMuZm9yRWFjaChmdW5jdGlvbiAoc2V0dGVyKSB7XG4gICAgICBsb2FkLmkucHVzaChzZXR0ZXIpO1xuICAgICAgc2V0dGVyKGxvYWQubik7XG4gICAgfSk7XG4gICAgaW1wb3J0ZXJTZXR0ZXJzID0gbnVsbDtcbiAgfTtcbn07XG5cbnZhciBpdGVyYXRvciA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5pdGVyYXRvcjtcblxuc3lzdGVtSlNQcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxvYWRlciA9IHRoaXMsIGtleXMgPSBPYmplY3Qua2V5cyhsb2FkZXJbUkVHSVNUUlldKTtcbiAgdmFyIGluZGV4ID0gMCwgbnMsIGtleTtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB3aGlsZSAoXG4gICAgICAgIChrZXkgPSBrZXlzW2luZGV4KytdKSAhPT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAobnMgPSBsb2FkZXIuZ2V0KGtleSkpID09PSB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkb25lOiBrZXkgPT09IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsdWU6IGtleSAhPT0gdW5kZWZpbmVkICYmIFtrZXksIG5zXVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgcmVzdWx0W2l0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9O1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgYmFzZVVybCBhcyBvcmlnaW5hbEJhc2VVcmwgfSBmcm9tICcuLi8uLi9zeXN0ZW1qcy9zcmMvY29tbW9uLmpzJztcblxuZXhwb3J0IGxldCBiYXNlVXJsID0gb3JpZ2luYWxCYXNlVXJsO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QmFzZVVybCh1cmw6IHN0cmluZykge1xuICAgIGJhc2VVcmwgPSB1cmw7XG59XG4iLCJcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IHJlc29sdmVJbXBvcnRNYXAsIHJlc29sdmVJZk5vdFBsYWluT3JVcmwsIHJlc29sdmVBbmRDb21wb3NlSW1wb3J0TWFwIH0gZnJvbSAnLi4vLi4vc3lzdGVtanMvc3JjL2NvbW1vbi5qcyc7XG5pbXBvcnQgeyBzeXN0ZW1KU1Byb3RvdHlwZSwgSW1wb3J0TWFwIH0gZnJvbSAnLi4vZ2xvYmFscyc7XG5pbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSAnLi9iYXNlLXVybCc7XG5cbmV4cG9ydCBjb25zdCBpbXBvcnRNYXAgPSB7IGltcG9ydHM6IHt9LCBzY29wZXM6IHt9IH07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbXBvcnRNYXAoanNvbjogSW1wb3J0TWFwLCBsb2NhdGlvbjogc3RyaW5nKSB7XG4gICAgcmVzb2x2ZUFuZENvbXBvc2VJbXBvcnRNYXAoanNvbiwgbG9jYXRpb24gfHwgYmFzZVVybCwgaW1wb3J0TWFwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZHNJbXBvcnRNYXAoanNvbjogSW1wb3J0TWFwLCBsb2NhdGlvbjogc3RyaW5nKSB7XG4gICAgY29uc3QgaW1wb3J0TWFwVXJsID0gcmVzb2x2ZUlmTm90UGxhaW5PclVybChsb2NhdGlvbiwgYmFzZVVybCk7XG4gICAgcmVzb2x2ZUFuZENvbXBvc2VJbXBvcnRNYXAoanNvbiwgaW1wb3J0TWFwVXJsIHx8IGxvY2F0aW9uLCBpbXBvcnRNYXApOyAgICBcbn1cblxuZnVuY3Rpb24gdGhyb3dVbnJlc29sdmVkKGlkOiBzdHJpbmcsIHBhcmVudFVybDogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlc29sdmVkIGlkOiAke2lkfSBmcm9tIHBhcmVudFVybDogJHtwYXJlbnRVcmx9YCk7XG59XG5cbnN5c3RlbUpTUHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbihpZDogc3RyaW5nLCBwYXJlbnRVcmw6IHN0cmluZykge1xuICAgIHBhcmVudFVybCA9IHBhcmVudFVybCB8fCBiYXNlVXJsO1xuICAgIHJldHVybiByZXNvbHZlSW1wb3J0TWFwKGltcG9ydE1hcCwgcmVzb2x2ZUlmTm90UGxhaW5PclVybChpZCwgcGFyZW50VXJsKSB8fCBpZCwgcGFyZW50VXJsKSB8fCB0aHJvd1VucmVzb2x2ZWQoaWQsIHBhcmVudFVybCk7XG59O1xuIiwiXG5pbXBvcnQgeyBzZXRCYXNlVXJsIH0gZnJvbSAnLi9iYXNlLXVybCc7XG5pbXBvcnQgeyBleHRlbmRzSW1wb3J0TWFwLCBzZXRJbXBvcnRNYXAsIGltcG9ydE1hcCB9IGZyb20gJy4vaW1wb3J0LW1hcCc7XG5pbXBvcnQgeyBzeXN0ZW1KU1Byb3RvdHlwZSwgSW1wb3J0TWFwIH0gZnJvbSAnLi4vZ2xvYmFscyc7XG5cbi8qKlxuICogQWRhcHRzIHRoZSBDb21tb25KUyBsaWtlIHBsYXRmb3JtcyBzdWNoIGFzIG1pbmktZ2FtZSBiYXNlZCBhbmQganNiLWJhc2VkIHBsYXRmb3Jtcy5cbiAqIFxuICogVGhlc2UgcGxhdGZvcm1zIGhhdmUgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJpc3RpY3M6XG4gKiAtIFRoZXkgZG8gbm90IGhhdmUgYSBcImJhc2VcIiBVUkwgdGhhdCBTeXN0ZW1KUyB1c2VkIHRvIGZvcm0gVVJMIG9mIHNjcmlwdHMgb3IgaW1wb3J0IG1hcHMuXG4gKiAtIExvYWRpbmcgc2NyaXB0cyBpcyBub3QgZmluaXNoZWQgdGhyb3VnaCBgPHNjcmlwdD5gIHRhZy5cbiAqIFxuICogVGhpcyBmdW5jdGlvbiBlbXVsYXRlcyBhIGJhc2UgVVJMIHdpdGggYW4gb3BhcXVlIHByb3RvY29sIGFuZCBzcGVjaWZpZWQgYCR7cGF0aG5hbWV9YC5cbiAqIEl0IGFjY2VwdHMgYSBoYW5kbGVyIHRvIGxvYWQgc2NyaXB0cyB1bmRlciBzdWNoIGEgYmFzZSBVUkwuXG4gKiBcbiAqIEZvciBleGFtcGxlLCBhbiBpbXBvcnQgbWFwIHdpdGggYGltcG9ydE1hcFVybGAgYmVlbiBzZXQgdG8gYGltcG9ydC1tYXAuanNvbmBcbiAqIHNob3VsZCBoYXZlIGFuIHNpbXVsYXRlZCBVUkw6IGA8cHJvdG9jb2wtdGhhdC15b3UtZG8tbm90LWNhcmU+Oi9pbXBvcnQtbWFwLmpzb25gLlxuICogXG4gKiBHaXZlbiB0aGF0IHRoZSBpbXBvcnQgbWFwIGhhcyBjb250ZW50IGxpa2UsIGZvciBleGFtcGxlLCBgeyBpbXBvcnRzOiB7IFwibVwiOiBcIi4vYS9iL2MuanNcIiB9IH1gLlxuICogVGhlIG1vZHVsZSBgJ20nYCB3aWxsIG1hcHBlZCB0byBhbiBzaW11bGF0ZWQgVVJMOiBgPHByb3RvY29sLXRoYXQteW91LWRvLW5vdC1jYXJlPjovYS9iL2MuanNgXG4gKiBUaGUgcHJvdG9jb2wtc3RyaXBwZWQgcG9ydGlvbiBvZiB0aGF0IFVSTChgL2EvYi9jLmpzYCkgd2lsbCBiZSBwYXNzZWQgdG8geW91ciBgZGVmYXVsdEhhbmRsZXJgIHRvXG4gKiBleGVjdXRlIHRoZSBzY3JpcHQuIEluIG1vc3QgY2FzZXMsIHRoZSBgZGVmYXVsdEhhbmRsZXJgIHdvdWxkIGJlIGAodXJsTm9TY2hlbWEpID0+IHJlcXVpcmUoJy4nICsgdXJsTm9TY2hlbWEpYC5cbiAqIFxuICogVGhpcyBmdW5jdGlvbiBhbHNvIGFsbG93IHlvdSB0byBjdXN0b21pemUgbG9hZGluZyBvZiBzY3JpcHRzIHdpdGggc3BlY2lmaWVkIHByb3RvY29sLlxuICogdGhyb3VnaCB0aGUgYGhhbmRsZXJzYCBwYXJhbWV0ZXIuXG4gKiBIYW5kbGVyIGxpa2VcbiAqIGBgYGpzXG4gKiB7IFwicGx1Z2luOlwiOiAodXJsTm9TY2hlbWEpID0+IHJlcXVpcmVQbHVnaW4odXJsTm9TY2hlbWEpIH1cbiAqIGBgYFxuICogd2lsbCBoYW5kbGUgdGhlIGxvYWRpbmcgb2Ygc2NyaXB0cyB3aXRoIFVSTCBgcGx1Z2luOi9hL2IvY2AuXG4gKiBUaGUgYHVybE5vU2NoZW1hYCBwYXNzZWQgdG8gaGFuZGxlciB3b3VsZCBleGFjdGx5IGJlIHRoZSBwcm90b2NvbC1zdHJpcHBlZCBwb3J0aW9uIG9mIHRoYXQgVVJMOiBgL2EvYi9jYC5cbiAqIFxuICogQHBhcmFtIHBhdGhuYW1lIFRoZSBwYXRobmFtZSBvZiB0aGUgb3BhY2l0eSBiYXNlIFVSTC4gRGVmYXVsdCB0byBgJy8nYC5cbiAqIEBwYXJhbSBpbXBvcnRNYXAgSW1wb3J0IG1hcC5cbiAqIEBwYXJhbSBpbXBvcnRNYXBVcmwgUmVsYXRpdmUgdXJsIHRvIGltcG9ydCBtYXAuXG4gKiBAcGFyYW0gZGVmYXVsdEhhbmRsZXIgTG9hZCB1cmxzIHdpdGggbm8gcHJvdG9jb2wgc3BlY2lmaWVkLiBDYW4gcmV0dXJucyBhIHByb21pc2UuXG4gKiBUaGUgYFN5c3RlbS5yZWdpc3RlcigpYCBtdXN0IGhhdmUgYmVlbiBjYWxsZWQ6XG4gKiAtIHdoZW4gdGhlIGhhbmRsZXIgcmV0dXJucyBpZiBpdCByZXR1cm5zIG5vbi1wcm9taXNlLCBvclxuICogLSAqKmF0IHRoZSB0aW1lKiogdGhlIHByb21pc2UgZ2V0IHJlc29sdmVkLCBpZiBpdCByZXR1cm5zIHByb21pc2UuXG4gKiBGb3IgZXhhbXBsZSwgZWl0aGVyOlxuICogLSBgcmVxdWlyZSh1cmxOb1NjaGVtYSlgOyByZXR1cm47XG4gKiAtIGByZXR1cm4gaW1wb3J0KHVybE5vU2NoZW1hKWA7XG4gKiAtIG9yIGByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUocmVxdWlyZSh1cmxOb1NjaGVtYSkpKTtgXG4gKiBBcyBhIGNvbXBhcmlzb24sIGBQcm9taXNlLnJlc29sdmUocmVxdWlyZSh1cmxOb1NjaGVtYSkpYCBtaWdodCBpbmNvcnJlY3Qgc2luY2VcbiAqIGJlZm9yZSB0aGUgcHJvbWlzZSBnZXQgcmVzb2x2ZWQsIGhhbmRsZXJzIHRoYXQgcHJvY2VzcyBvdGhlciBVUkxzIG1heSBiZSBpbnZva2VkLlxuICogQHBhcmFtIGhhbmRsZXJzIExvYWQgdXJscyB3aXRoIHNwZWNpZmllZCBwcm90b2NvbC5cbiAqL1xuXG50eXBlIFNjaGVtYUhhbmRsZXIgPSAodXJsTm9TY2hlbWE6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPiB8IGFueTtcblxuaW50ZXJmYWNlIFdhcm11cE9wdGlvbnMge1xuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgaW1wb3J0TWFwOiBJbXBvcnRNYXAsXG4gICAgaW1wb3J0TWFwVXJsOiBzdHJpbmcsXG4gICAgaW1wb3J0TWFwTGlzdDogQXJyYXk8IHsgbG9jYXRpb246IHN0cmluZywgbWFwOiBJbXBvcnRNYXAgfT4sXG4gICAgZGVmYXVsdEhhbmRsZXI6IFNjaGVtYUhhbmRsZXIsXG4gICAgaGFuZGxlcnM6IFJlY29yZDxzdHJpbmcsIFNjaGVtYUhhbmRsZXI+LFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih7XG4gICAgcGF0aG5hbWUgPSAnLycsXG4gICAgaW1wb3J0TWFwLFxuICAgIGltcG9ydE1hcFVybCxcbiAgICBpbXBvcnRNYXBMaXN0LFxuICAgIGRlZmF1bHRIYW5kbGVyLFxuICAgIGhhbmRsZXJzLFxufTogV2FybXVwT3B0aW9ucykge1xuICAgIGNvbnN0IGJhc2VVcmxTY2hlbWEgPSAnbm8tc2NoZW1hOic7XG4gICAgc2V0QmFzZVVybChgJHtiYXNlVXJsU2NoZW1hfSR7cGF0aG5hbWV9YCk7XG5cbiAgICBpZiAoaW1wb3J0TWFwVXJsICYmIGltcG9ydE1hcCkge1xuICAgICAgICBzZXRJbXBvcnRNYXAoaW1wb3J0TWFwLCBgJHtiYXNlVXJsU2NoZW1hfS8ke2ltcG9ydE1hcFVybH1gKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbXBvcnRNYXBMaXN0KSkge1xuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgaW1wb3J0TWFwTGlzdCkge1xuICAgICAgICAgICAgZXh0ZW5kc0ltcG9ydE1hcChlLm1hcCwgZS5sb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVmYXVsdEhhbmRsZXIpIHtcbiAgICAgICAgaG9va0luc3RhbnRpYXRpb25PdmVyU2NoZW1hKGJhc2VVcmxTY2hlbWEsIHdyYXBIYW5kbGVyKGRlZmF1bHRIYW5kbGVyKSk7XG4gICAgfVxuXG4gICAgaWYgKGhhbmRsZXJzKSB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvdG9jb2wgb2YgT2JqZWN0LmtleXMoaGFuZGxlcnMpKSB7XG4gICAgICAgICAgICBob29rSW5zdGFudGlhdGlvbk92ZXJTY2hlbWEocHJvdG9jb2wsIHdyYXBIYW5kbGVyKGhhbmRsZXJzW3Byb3RvY29sXSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1RoZW5hYmxlKHZhbHVlOiBhbnkpIHtcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTM5NTU2NjQvMTA2MDI1MjVcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmZ1bmN0aW9uIGZvdW5kS2V5QnlWYWx1ZUluSW1wb3J0TWFwKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpbXBvcnRzOiBhbnkgPSBpbXBvcnRNYXAuaW1wb3J0cztcbiAgICBmb3IgKGNvbnN0IGsgaW4gaW1wb3J0cykge1xuICAgICAgICBjb25zdCB2ID0gaW1wb3J0c1trXTtcbiAgICAgICAgaWYgKHYgJiYgKHZhbHVlID09PSB2IHx8IGBuby1zY2hlbWE6LyR7dmFsdWV9YCA9PT0gdikpIHtcbiAgICAgICAgICAgIHJldHVybiBrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiB0cnlHZXRSZWdpc3Rlcihjb250ZXh0OiBhbnksIHVybE5vU2NoZW1hOiBzdHJpbmcpIHtcbiAgICBsZXQgcmV0O1xuICAgIGxldCByZWdpc3RlcktleSA9IHVybE5vU2NoZW1hO1xuICAgIGlmIChyZWdpc3RlcktleS5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmVnaXN0ZXJLZXkgPSByZWdpc3RlcktleS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBmb3VuZEtleUJ5VmFsdWVJbkltcG9ydE1hcChyZWdpc3RlcktleSk7XG4gICAgaWYgKGtleSkge1xuICAgICAgICByZWdpc3RlcktleSA9IGtleTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5yZWdpc3RlclJlZ2lzdHJ5ICYmIChyZXQgPSBjb250ZXh0LnJlZ2lzdGVyUmVnaXN0cnlbcmVnaXN0ZXJLZXldKSkge1xuICAgICAgICBjb250ZXh0LnJlZ2lzdGVyUmVnaXN0cnlbcmVnaXN0ZXJLZXldID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgU3lzdGVtSlMgaW5zdGFudGlhdGlvbiBob29rIHdoaWNoIGNhbGxzIGBoYW5kbGVyYCBhbmQgZ2V0IHRoZSByZWdpc3Rlci5cbiAqL1xuZnVuY3Rpb24gd3JhcEhhbmRsZXIoaGFuZGxlcjogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odXJsTm9TY2hlbWE6IHN0cmluZykge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyID0gdHJ5R2V0UmVnaXN0ZXIoY29udGV4dCwgdXJsTm9TY2hlbWEpO1xuICAgICAgICBpZiAocmVnaXN0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWdpc3RlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXRWYWw6IGFueTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldFZhbCA9IGhhbmRsZXIodXJsTm9TY2hlbWEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNUaGVuYWJsZShyZXRWYWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5nZXRSZWdpc3RlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gV2UgY2FuIG5vdCBkaXJlY3RseSBgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXRWYWwpYFxuICAgICAgICAgICAgLy8gc2luY2Ugb25jZSB3ZSBnZXQgdGhlIHJldHVybnMsIHRoZSBgU3lzdGVtLnJlZ2lzdGVyKClgIHNob3VsZCBoYXZlIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgLy8gSWYgaXQncyBzeW5jaHJvbml6ZWQsIGBQcm9taXNlLnJlc29sdmUoKWAgZGVmZXJzIHRoZSBgdGhpcy5nZXRSZWdpc3RlcigpYFxuICAgICAgICAgICAgLy8gd2hpY2ggbWVhbnMgb3RoZXIgYFN5c3RlbS5yZWdpc3RlcigpYCBtYXkgaGFwcGVuIGJlZm9yZSB3ZSByZXNvbHZlZCB0aGUgcHJvbWlzZS5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXRWYWwudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29udGV4dC5nZXRSZWdpc3RlcigpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaG9va0luc3RhbnRpYXRpb25PdmVyU2NoZW1hKHNjaGVtYTogc3RyaW5nLCBob29rOiBGdW5jdGlvbikge1xuICAgIGNvbnN0IHZlbmRlckluc3RhbnRpYXRlID0gc3lzdGVtSlNQcm90b3R5cGUuaW5zdGFudGlhdGU7XG4gICAgc3lzdGVtSlNQcm90b3R5cGUuaW5zdGFudGlhdGUgPSBmdW5jdGlvbih1cmw6IHN0cmluZywgZmlyc3RQYXJlbnRVcmw6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzY2hlbWFFcmFzZWQgPSB1cmwuc3Vic3RyKDAsIHNjaGVtYS5sZW5ndGgpID09PSBzY2hlbWEgP1xuICAgICAgICAgICAgdXJsLnN1YnN0cihzY2hlbWEubGVuZ3RoKSA6IG51bGw7XG4gICAgICAgIHJldHVybiBzY2hlbWFFcmFzZWQgPT09IG51bGwgP1xuICAgICAgICAgICAgdmVuZGVySW5zdGFudGlhdGUuY2FsbCh0aGlzLCB1cmwsIGZpcnN0UGFyZW50VXJsKSA6XG4gICAgICAgICAgICBob29rLmNhbGwodGhpcywgc2NoZW1hRXJhc2VkLCBmaXJzdFBhcmVudFVybCk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB3YXJtdXAgZnJvbSAnLi93YXJtdXAtY29tbW9uanMtbGlrZSc7XG5pbXBvcnQgeyBzeXN0ZW1KU1Byb3RvdHlwZSB9IGZyb20gJy4uL2dsb2JhbHMnO1xuc3lzdGVtSlNQcm90b3R5cGUucHJlcGFyZUltcG9ydCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpOyB9XG5cbi8vIEB0cy1pZ25vcmUgdGhpcyBzaG91bGQgYmUgYSBwcml2YXRlIGludGVyZmFjZVxuc3lzdGVtSlNQcm90b3R5cGUud2FybXVwID0gd2FybXVwO1xuIiwiLypcbiAqIFN5c3RlbUpTIG5hbWVkIHJlZ2lzdGVyIGV4dGVuc2lvblxuICogU3VwcG9ydHMgU3lzdGVtLnJlZ2lzdGVyKCduYW1lJywgWy4uZGVwcy4uXSwgZnVuY3Rpb24gKF9leHBvcnQsIF9jb250ZXh0KSB7IC4uLiB9KVxuICogXG4gKiBOYW1lcyBhcmUgd3JpdHRlbiB0byB0aGUgcmVnaXN0cnkgYXMtaXNcbiAqIFN5c3RlbS5yZWdpc3RlcigneCcsIC4uLikgY2FuIGJlIGltcG9ydGVkIGFzIFN5c3RlbS5pbXBvcnQoJ3gnKVxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCkge1xuICB2YXIgU3lzdGVtID0gZ2xvYmFsLlN5c3RlbTtcbiAgc2V0UmVnaXN0ZXJSZWdpc3RyeShTeXN0ZW0pO1xuICB2YXIgc3lzdGVtSlNQcm90b3R5cGUgPSBTeXN0ZW0uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB2YXIgY29uc3RydWN0b3IgPSBTeXN0ZW0uY29uc3RydWN0b3I7XG4gIHZhciBTeXN0ZW1KUyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICAgIHNldFJlZ2lzdGVyUmVnaXN0cnkodGhpcyk7XG4gIH07XG4gIFN5c3RlbUpTLnByb3RvdHlwZSA9IHN5c3RlbUpTUHJvdG90eXBlO1xuICBTeXN0ZW0uY29uc3RydWN0b3IgPSBTeXN0ZW1KUztcblxuICB2YXIgZmlyc3ROYW1lZERlZmluZTtcblxuICBmdW5jdGlvbiBzZXRSZWdpc3RlclJlZ2lzdHJ5KHN5c3RlbUluc3RhbmNlKSB7XG4gICAgc3lzdGVtSW5zdGFuY2UucmVnaXN0ZXJSZWdpc3RyeSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIH1cblxuICB2YXIgcmVnaXN0ZXIgPSBzeXN0ZW1KU1Byb3RvdHlwZS5yZWdpc3RlcjtcbiAgc3lzdGVtSlNQcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAobmFtZSwgZGVwcywgZGVjbGFyZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpXG4gICAgICByZXR1cm4gcmVnaXN0ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB2YXIgZGVmaW5lID0gW2RlcHMsIGRlY2xhcmVdO1xuICAgIHRoaXMucmVnaXN0ZXJSZWdpc3RyeVtuYW1lXSA9IGRlZmluZTtcbiAgICBpZiAoIWZpcnN0TmFtZWREZWZpbmUpIHtcbiAgICAgIGZpcnN0TmFtZWREZWZpbmUgPSBkZWZpbmU7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmlyc3ROYW1lZERlZmluZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZ2lzdGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgdmFyIHJlc29sdmUgPSBzeXN0ZW1KU1Byb3RvdHlwZS5yZXNvbHZlO1xuICBzeXN0ZW1KU1Byb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gKGlkLCBwYXJlbnRVUkwpIHtcbiAgICB0cnkge1xuICAgICAgLy8gUHJlZmVyIGltcG9ydCBtYXAgKG9yIG90aGVyIGV4aXN0aW5nKSByZXNvbHV0aW9uIG92ZXIgdGhlIHJlZ2lzdGVyUmVnaXN0cnlcbiAgICAgIHJldHVybiByZXNvbHZlLmNhbGwodGhpcywgaWQsIHBhcmVudFVSTCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoaWQgaW4gdGhpcy5yZWdpc3RlclJlZ2lzdHJ5KSB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGluc3RhbnRpYXRlID0gc3lzdGVtSlNQcm90b3R5cGUuaW5zdGFudGlhdGU7XG4gIHN5c3RlbUpTUHJvdG90eXBlLmluc3RhbnRpYXRlID0gZnVuY3Rpb24gKHVybCwgZmlyc3RQYXJlbnRVcmwpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5yZWdpc3RlclJlZ2lzdHJ5W3VybF07XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5yZWdpc3RlclJlZ2lzdHJ5W3VybF0gPSBudWxsO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGluc3RhbnRpYXRlLmNhbGwodGhpcywgdXJsLCBmaXJzdFBhcmVudFVybCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRSZWdpc3RlciA9IHN5c3RlbUpTUHJvdG90eXBlLmdldFJlZ2lzdGVyO1xuICBzeXN0ZW1KU1Byb3RvdHlwZS5nZXRSZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDYWxsaW5nIGdldFJlZ2lzdGVyKCkgYmVjYXVzZSBvdGhlciBleHRyYXMgbmVlZCB0byBrbm93IGl0IHdhcyBjYWxsZWQgc28gdGhleSBjYW4gcGVyZm9ybSBzaWRlIGVmZmVjdHNcbiAgICB2YXIgcmVnaXN0ZXIgPSBnZXRSZWdpc3Rlci5jYWxsKHRoaXMpO1xuXG4gICAgdmFyIHJlc3VsdCA9IGZpcnN0TmFtZWREZWZpbmUgfHwgcmVnaXN0ZXI7XG4gICAgZmlyc3ROYW1lZERlZmluZSA9IG51bGw7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IGdsb2JhbCk7XG4iXSwibmFtZXMiOlsiYmFzZVVybCIsInRvU3RyaW5nVGFnIiwic3lzdGVtSlNQcm90b3R5cGUiLCJnbG9iYWwiLCJvcmlnaW5hbEJhc2VVcmwiXSwibWFwcGluZ3MiOiI7OztFQUFPLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7RUFDckMsRUFHSSxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsSUFBSSxtQkFBbUIsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLHVCQUF1QixHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7RUFDdkc7O0VDSE8sSUFBSSxTQUFTLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDO0VBQzlDLElBQUksT0FBTyxHQUFHLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQztFQUMxQyxJQUFJLFdBQVcsR0FBRyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUM7QUFDekQ7RUFDQSxJQUFJLFNBQVMsR0FBRyxPQUFPLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQztBQU14QztFQUNPLElBQUlBLFNBQU8sQ0FBQztBQUNuQjtFQUNBLElBQUksV0FBVyxFQUFFO0VBQ2pCLEVBQUUsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEs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
