System.register("chunks:///_virtual/Config", ['./GlobalConfig.ts', './GlobalEvent.ts'], function () {
  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/GlobalConfig.ts", ['cc'], function (exports) {
  var cclegacy, size, Layout, game;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      size = module.size;
      Layout = module.Layout;
      game = module.game;
    }],
    execute: function () {
      cclegacy._RF.push({}, "121f2LtRCdIdopt1hGvh3+p", "GlobalConfig", undefined);

      /**
       * 全局配置
       * @internal
       */
      var GlobalConfig;
      (function (_GlobalConfig) {
        var Constant;
        (function (_Constant) {
          var versionStr = _Constant.versionStr = "1.0.0";
          var isShowDebugInfo = _Constant.isShowDebugInfo = false;
        })(Constant || (Constant = _GlobalConfig.Constant || (_GlobalConfig.Constant = {})));
        var Audio;
        (function (_Audio) {
          var Type = /*#__PURE__*/function (Type) {
            Type[Type["Effect"] = -99] = "Effect";
            Type[Type["Music"] = -98] = "Music";
            return Type;
          }({});
          _Audio.Type = Type;
        })(Audio || (Audio = _GlobalConfig.Audio || (_GlobalConfig.Audio = {})));
        var Asset;
        (function (_Asset) {
          /** bundle 键 */

          /** bundle 键 */
          var bundle = _Asset.bundle = new Proxy(Object.create(null), {
            get: function get(target, key) {
              return key;
            }
          });
          var config = _Asset.config = new ( /*#__PURE__*/function () {
            function _class2() {
              /** 缓存生命时长（毫秒，资源未使用时经过多久释放） */
              this.cacheLifetimeMsNum = 1000;
              /** 加载失败重试次数 */
              this.retryCountOnLoadFailureNum = 0;
            }
            return _class2;
          }())();
        })(Asset || (Asset = _GlobalConfig.Asset || (_GlobalConfig.Asset = {})));
        var View;
        (function (_View) {
          var LayerType = /*#__PURE__*/function (LayerType) {
            LayerType[LayerType["\u5185\u5BB9"] = 0] = "\u5185\u5BB9";
            LayerType[LayerType["\u7A97\u53E3"] = 1] = "\u7A97\u53E3";
            LayerType[LayerType["\u63D0\u793A"] = 2] = "\u63D0\u793A";
            LayerType[LayerType["\u5F15\u5BFC"] = 3] = "\u5F15\u5BFC";
            LayerType[LayerType["\u8B66\u544A"] = 4] = "\u8B66\u544A";
            LayerType[LayerType["\u52A0\u8F7D"] = 5] = "\u52A0\u8F7D";
            LayerType[LayerType["\u9519\u8BEF"] = 6] = "\u9519\u8BEF";
            return LayerType;
          }({});
          _View.LayerType = LayerType;
          var AdaptationMode = /*#__PURE__*/function (AdaptationMode) {
            AdaptationMode[AdaptationMode["None"] = 0] = "None";
            AdaptationMode[AdaptationMode["Adaptive"] = 1] = "Adaptive";
            AdaptationMode[AdaptationMode["FixedSize"] = 2] = "FixedSize";
            return AdaptationMode;
          }({});
          _View.AdaptationMode = AdaptationMode;
          var adaptationType = _View.adaptationType = AdaptationMode.Adaptive;
          var originalDesignSize = _View.originalDesignSize = size();
          var blockingWarningTimeMsNum = _View.blockingWarningTimeMsNum = 0;
          var maskDataTab = _View.maskDataTab = {
            nodeNameStr: "遮罩",
            prefabPathStr: "db://assets/resources/Module/@Common/Mask/ResourcesCommonMask.prefab"
          };
          var config = _View.config = new ( /*#__PURE__*/function () {
            function _class4() {
              /** 层间隔 */
              this.layerSpacingNum = 100;
              /** 渲染层级刷新间隔 */
              this.layerRefreshIntervalMsNum = game.frameTime;
              /** 窗口打开动画 */
              this.windowAnimationTab = {
                open: {
                  无: null
                },
                close: {
                  无: null
                }
              };
            }
            return _class4;
          }())();
        })(View || (View = _GlobalConfig.View || (_GlobalConfig.View = {})));
        var Language;
        (function (_Language) {
          /** 语种表 */
          var privateTypeTab = {
            /** 中文(中华人民共和国) */
            zhCn: {
              dire: Layout.HorizontalDirection.LEFT_TO_RIGHT,
              supportStrList: ["zh", "zh-tw"]
            },
            /** 英语(美国) */
            enUs: {
              dire: Layout.HorizontalDirection.LEFT_TO_RIGHT,
              supportStrList: ["en"]
            }
          };

          /** 语种信息 */

          /** 语种表 */
          var typeTab = _Language.typeTab = privateTypeTab;
          var types = _Language.types = new Proxy({}, {
            get: function get(target, key) {
              return key;
            }
          });
          var defaultTypeStr = _Language.defaultTypeStr = "auto";
          var argsHeadStr = _Language.argsHeadStr = "{";
          var argsTailStr = _Language.argsTailStr = "}";
        })(Language || (Language = _GlobalConfig.Language || (_GlobalConfig.Language = {})));
        var Log;
        (function (_Log) {
          var Level = /*#__PURE__*/function (Level) {
            Level[Level["None"] = 0] = "None";
            Level[Level["Debug"] = 1] = "Debug";
            Level[Level["Log"] = 2] = "Log";
            Level[Level["Warn"] = 4] = "Warn";
            Level[Level["Error"] = 8] = "Error";
            Level[Level["DebugUp"] = 15] = "DebugUp";
            Level[Level["LogUp"] = 14] = "LogUp";
            Level[Level["WarnUp"] = 12] = "WarnUp";
            return Level;
          }({});
          _Log.Level = Level;
          var LogObjectType = /*#__PURE__*/function (LogObjectType) {
            LogObjectType[LogObjectType["MK"] = 0] = "MK";
            LogObjectType[LogObjectType["Console"] = 1] = "Console";
            LogObjectType[LogObjectType["CC"] = 2] = "CC";
            return LogObjectType;
          }({});
          _Log.LogObjectType = LogObjectType;
          var config = _Log.config = new ( /*#__PURE__*/function () {
            function _class6() {
              /** 日志缓存行数 */
              this.cacheRowNum = 100;
              /** 报错日志上传地址 */
              this.errorUploadAddrStr = "";
              /** 日志等级 */
              this.levelNum = Level.LogUp;
              /** 打印对象类型 */
              this.logObjectType = LogObjectType.Console;
              /** 错误处理函数 */
              this.errorHandlingFunc = void 0;
            }
            return _class6;
          }())();
        })(Log || (Log = _GlobalConfig.Log || (_GlobalConfig.Log = {})));
        var Network;
        (function (_Network) {
          /** 消息头
           * @remarks
           * 收/发时网络消息类型时，必须包含的属性
           */
          // eslint-disable-next-line @typescript-eslint/no-empty-interface

          /** 消息头键 */
          var protoHeadKeyTab = _Network.protoHeadKeyTab = new Proxy(Object.create(null), {
            get: function get(target, key) {
              return key;
            }
          });
        })(Network || (Network = _GlobalConfig.Network || (_GlobalConfig.Network = {})));
      })(GlobalConfig || (GlobalConfig = {}));
      {
        window["GlobalConfig"] = GlobalConfig;
      }
      var GlobalConfig$1 = exports('default', GlobalConfig);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalEvent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, EventTarget;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f8c37Ev7a5B86yXhi5W8Etk", "GlobalEvent", undefined);
      var Event = /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(Event, _EventTarget);
        function Event() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _EventTarget.call.apply(_EventTarget, [this].concat(args)) || this;
          _this.key = new Proxy(Object.create(null), {
            get: function get(target, key) {
              return key;
            }
          });
          return _this;
        }
        var _proto = Event.prototype;
        // @ts-ignore
        _proto.on = function on(type_, callback_, this_, isOnce_) {
          var _this2 = this;
          if (Array.isArray(type_)) {
            type_.forEach(function (v) {
              _EventTarget.prototype.on.call(_this2, v, callback_, this_, isOnce_);
            });
            return null;
          } else {
            return _EventTarget.prototype.on.call(this, type_, callback_, this_, isOnce_);
          }
        }

        // @ts-ignore
        ;

        _proto.once = function once(type_, callback_, this_) {
          var _this3 = this;
          if (Array.isArray(type_)) {
            type_.forEach(function (v) {
              _EventTarget.prototype.once.call(_this3, v, callback_, this_);
            });
            return null;
          } else {
            return _EventTarget.prototype.once.call(this, type_, callback_, this_);
          }
        }

        // @ts-ignore
        ;

        _proto.off = function off(type_, callback_, this_) {
          var _this4 = this;
          if (Array.isArray(type_)) {
            type_.forEach(function (v) {
              _EventTarget.prototype.off.call(_this4, v, callback_, this_);
            });
          } else {
            _EventTarget.prototype.off.call(this, type_, callback_, this_);
          }
        }

        // @ts-ignore
        ;

        _proto.emit = function emit(type_) {
          var _this5 = this;
          for (var _len2 = arguments.length, args_ = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args_[_key2 - 1] = arguments[_key2];
          }
          if (Array.isArray(type_)) {
            type_.forEach(function (v) {
              var _EventTarget$prototyp;
              (_EventTarget$prototyp = _EventTarget.prototype.emit).call.apply(_EventTarget$prototyp, [_this5, v].concat(args_));
            });
          } else {
            var _EventTarget$prototyp2;
            (_EventTarget$prototyp2 = _EventTarget.prototype.emit).call.apply(_EventTarget$prototyp2, [this, type_].concat(args_));
          }
        }

        // @ts-ignore
        ;

        _proto.has = function has(type_, callback_, target_) {
          return _EventTarget.prototype.hasEventListener.call(this, type_, callback_, target_);
        };
        /** 请求（等待返回） */
        // @ts-ignore
        _proto.request = function request(type_) {
          var _this6 = this;
          for (var _len3 = arguments.length, args_ = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args_[_key3 - 1] = arguments[_key3];
          }
          if (Array.isArray(type_)) {
            var resultTaskList = [];
            type_.forEach(function (v) {
              resultTaskList.push.apply(resultTaskList, _this6._requestSingle.apply(_this6, [v].concat(args_)));
            });
            return resultTaskList;
          } else {
            return this._requestSingle.apply(this, [type_].concat(args_));
          }
        }

        /** 请求单个事件 */
        // @ts-ignore
        ;

        _proto._requestSingle = function _requestSingle(type_) {
          var _this$_callbackTable$;
          /** 返回值 */
          var resultTaskList = [];
          /** 回调列表 */
          var callbackFuncList = (_this$_callbackTable$ = this["_callbackTable"][type_]) == null ? void 0 : _this$_callbackTable$.callbackInfos;
          if (!callbackFuncList) {
            return resultTaskList;
          }
          callbackFuncList.forEach(function (v) {
            var oldCallbackFunc = v.callback;
            var target = v.target;
            v.callback = function () {
              for (var _len5 = arguments.length, argsList = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                argsList[_key5] = arguments[_key5];
              }
              resultTaskList.push(oldCallbackFunc.call.apply(oldCallbackFunc, [target].concat(argsList)));
              v.callback = oldCallbackFunc;
            };
          });
          for (var _len4 = arguments.length, args_ = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args_[_key4 - 1] = arguments[_key4];
          }
          this.emit.apply(this, [type_].concat(args_));
          return resultTaskList;
        };
        return Event;
      }(EventTarget);
      var globalEvent = exports('default', new Event());
      {
        window["globalEvent"] = globalEvent;
      }
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Config', 'chunks:///_virtual/Config'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});