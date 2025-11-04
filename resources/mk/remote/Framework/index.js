System.register("chunks:///_virtual/Framework", ['./MKAdaptationCanvas.ts', './MKAdaptationNode.ts', './MKPolygonMask.ts', './MKNodes.ts', './MKToolEnum.ts', './MKToolFunc.ts', './MKToolObject.ts', './MKToolString.ts', './MKAudioBase.ts', './MKAudioExport.ts', './MKAudioCommon.ts', './MKAudioWX.ts', './MKGuideManage.ts', './MKGuideStepBase.ts', './MKLanguageBase.ts', './MKLanguageLabel.ts', './MKLanguageNode.ts', './MKLanguageTexture.ts', './MKLanguage.ts', './MKLanguageExport.ts', './MKLanguageManage.ts', './MKCodecBase.ts', './MKDataSharer.ts', './MKDynamicModule.ts', './MKEventTarget.ts', './MKExport.ts', './MKGame.ts', './MKInit.ts', './MKInstanceBase.ts', './MKLogger.ts', './MKMonitor.ts', './MKObjectPool.ts', './MKStorage.ts', './MKUIManage.ts', './MKLayer.ts', './MKLifeCycle.ts', './MKSceneDrive.ts', './MKStaticViewBase.ts', './MKViewBase.ts', './MVCControlBase.ts', './MVCModelBase.ts', './MVCViewBase.ts', './MKHttp.ts', './MKNetwork.ts', './MKNetworkBase.ts', './MKNetworkExport.ts', './MKWebsocket.ts', './MKWebsocketWX.ts', './MKAsset.ts', './MKBundle.ts', './MKFollowNodeRelease.ts', './MKRelease.ts', './MKStatusTask.ts', './MKTask.ts', './MKTaskExport.ts', './MKTaskPipeline.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MKAdaptationCanvas.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalConfig.ts', './GlobalEvent.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, director, Director, game, Component, Canvas, view, ResolutionPolicy, screen, GlobalConfig, globalEvent;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Director = module.Director;
      game = module.game;
      Component = module.Component;
      Canvas = module.Canvas;
      view = module.view;
      ResolutionPolicy = module.ResolutionPolicy;
      screen = module.screen;
    }, function (module) {
      GlobalConfig = module.default;
    }, function (module) {
      globalEvent = module.default;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "06912t54RpO14gyAol/gaaE", "MKAdaptationCanvas", undefined);
      var ccclass = _decorator.ccclass,
        disallowMultiple = _decorator.disallowMultiple;

      /**
       * canvas 适配
       * @noInheritDoc
       */
      var MKAdaptationCanvas = exports('default', ccclass(_class = disallowMultiple(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MKAdaptationCanvas, _Component);
        function MKAdaptationCanvas() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = MKAdaptationCanvas.prototype;
        /* ------------------------------- 生命周期 ------------------------------- */
        _proto.onLoad = function onLoad() {
          // 事件监听
          globalEvent.on(globalEvent.key.resize, this.adaptation, this);
        };
        _proto.onEnable = function onEnable() {
          // 初始化视图
          this.adaptation();
        };
        _proto.onDestroy = function onDestroy() {
          globalEvent.targetOff(this);
        }

        /* ------------------------------- 功能 ------------------------------- */
        /** 适配 */;
        _proto.adaptation = /*#__PURE__*/
        function () {
          var _adaptation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _director$getScene2;
            var canvas, frameSize, _GlobalConfig$View, adaptationType, originalDesignSize, isHigher;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  canvas = (_director$getScene2 = director.getScene()) == null ? void 0 : _director$getScene2.getComponentInChildren(Canvas); // 安检
                  if (canvas) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return");
                case 3:
                  /** 真实尺寸 */
                  frameSize = screen.windowSize;
                  _GlobalConfig$View = GlobalConfig.View, adaptationType = _GlobalConfig$View.adaptationType, originalDesignSize = _GlobalConfig$View.originalDesignSize; // 固定尺寸
                  if (!(adaptationType === GlobalConfig.View.AdaptationMode.FixedSize)) {
                    _context.next = 7;
                    break;
                  }
                  return _context.abrupt("return", view.setDesignResolutionSize(frameSize.width, frameSize.height, ResolutionPolicy.UNKNOWN));
                case 7:
                  /** 真实尺寸比设计尺寸高 */
                  isHigher = frameSize.height / frameSize.width > originalDesignSize.height / originalDesignSize.width; // 自适应模式
                  view.setDesignResolutionSize(isHigher ? originalDesignSize.width : frameSize.width * (originalDesignSize.height / frameSize.height), isHigher ? frameSize.height * (originalDesignSize.width / frameSize.width) : originalDesignSize.height, isHigher ? ResolutionPolicy.FIXED_WIDTH : ResolutionPolicy.FIXED_HEIGHT);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function adaptation() {
            return _adaptation.apply(this, arguments);
          }
          return adaptation;
        }();
        return MKAdaptationCanvas;
      }(Component)) || _class) || _class);
      if (GlobalConfig.View.adaptationType !== GlobalConfig.View.AdaptationMode.None) {
        var addToSceneNodeFunc = function addToSceneNodeFunc() {
          var _director$getScene;
          var canvasNode = (_director$getScene = director.getScene()) == null || (_director$getScene = _director$getScene.getComponentInChildren(Canvas)) == null ? void 0 : _director$getScene.node;
          if (canvasNode && !canvasNode.getComponent(MKAdaptationCanvas)) {
            canvasNode.addComponent(MKAdaptationCanvas);
          }
        };

        // 防止编辑器预览报错，编辑器预览会触发两次 EVENT_AFTER_SCENE_LAUNCH 导致首次调用 setDesignResolutionSize 引擎内部报错
        director.once(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
          setTimeout(function () {
            addToSceneNodeFunc();
            director.on(Director.EVENT_AFTER_SCENE_LAUNCH, addToSceneNodeFunc);
          }, game.frameTime);
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKAdaptationNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalEvent.ts', './MKLogger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, Vec3, Node, Sprite, v2, UITransform, director, Canvas, Component, size, v3, globalEvent, mkLog;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Vec3 = module.Vec3;
      Node = module.Node;
      Sprite = module.Sprite;
      v2 = module.v2;
      UITransform = module.UITransform;
      director = module.director;
      Canvas = module.Canvas;
      Component = module.Component;
      size = module.size;
      v3 = module.v3;
    }, function (module) {
      globalEvent = module.default;
    }, function (module) {
      mkLog = module.mkLog;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "3b56avlizRETZq+oleQ1QXA", "MKAdaptationNode", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var _MKAdaptationNode;
      (function (_MKAdaptationNode2) {
        var Type = /*#__PURE__*/function (Type) {
          Type[Type["\u9ED8\u8BA4"] = 0] = "\u9ED8\u8BA4";
          Type[Type["\u7F29\u653E"] = 1] = "\u7F29\u653E";
          Type[Type["\u81EA\u9002\u5E94_\u5C55\u793A\u5B8C"] = 2] = "\u81EA\u9002\u5E94_\u5C55\u793A\u5B8C";
          Type[Type["\u81EA\u9002\u5E94_\u586B\u5145\u6EE1"] = 3] = "\u81EA\u9002\u5E94_\u586B\u5145\u6EE1";
          Type[Type["\u586B\u5145\u5BBD"] = 4] = "\u586B\u5145\u5BBD";
          Type[Type["\u586B\u5145\u9AD8"] = 5] = "\u586B\u5145\u9AD8";
          return Type;
        }({});
        _MKAdaptationNode2.Type = Type;
        var Mode = /*#__PURE__*/function (Mode) {
          Mode[Mode["Scale"] = 0] = "Scale";
          Mode[Mode["Size"] = 1] = "Size";
          return Mode;
        }({});
        _MKAdaptationNode2.Mode = Mode;
        var Source = /*#__PURE__*/function (Source) {
          Source[Source["Canvas"] = 0] = "Canvas";
          Source[Source["Parent"] = 1] = "Parent";
          Source[Source["Customize"] = 2] = "Customize";
          return Source;
        }({});
        _MKAdaptationNode2.Source = Source;
      })(_MKAdaptationNode || (_MKAdaptationNode = {}));
      /**
       * 节点适配
       * @noInheritDoc
       */
      var MKAdaptationNode = exports('default', (_dec = property({
        displayName: "编辑器预览"
      }), _dec2 = property({
        displayName: "适配模式",
        type: Enum(_MKAdaptationNode.Mode)
      }), _dec3 = property({
        displayName: "适配来源",
        type: Enum(_MKAdaptationNode.Source)
      }), _dec4 = property({
        displayName: "原始大小",
        visible: function visible() {
          return this.adaptationMode === _MKAdaptationNode.Mode.Size;
        }
      }), _dec5 = property({
        displayName: "自定义适配大小",
        visible: function visible() {
          return this.adaptationSource === _MKAdaptationNode.Source.Customize;
        }
      }), _dec6 = property({
        displayName: "适配类型",
        type: Enum(_MKAdaptationNode.Type)
      }), _dec7 = property({
        displayName: "限制最大缩放",
        visible: function visible() {
          return this.adaptationMode === _MKAdaptationNode.Mode.Scale;
        }
      }), _dec8 = property({
        displayName: "限制最小缩放",
        visible: function visible() {
          return this.adaptationMode === _MKAdaptationNode.Mode.Scale;
        }
      }), _dec9 = property({
        displayName: "最大缩放",
        type: Vec3,
        visible: function visible() {
          return this.isLimitMaxScale;
        }
      }), _dec10 = property({
        displayName: "最小缩放",
        type: Vec3,
        visible: function visible() {
          return this.isLimitMinScale;
        }
      }), ccclass(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MKAdaptationNode, _Component);
        function MKAdaptationNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** 适配模式 */
          _initializerDefineProperty(_this, "adaptationMode", _descriptor, _assertThisInitialized(_this));
          /** 适配来源 */
          _initializerDefineProperty(_this, "adaptationSource", _descriptor2, _assertThisInitialized(_this));
          /** 原始大小 */
          _initializerDefineProperty(_this, "originalSize", _descriptor3, _assertThisInitialized(_this));
          /** 自定义适配大小 */
          _initializerDefineProperty(_this, "customAdaptSize", _descriptor4, _assertThisInitialized(_this));
          /* --------------- private --------------- */
          /** 适配类型 */
          _initializerDefineProperty(_this, "_type", _descriptor5, _assertThisInitialized(_this));
          /** 限制最大缩放 */
          _initializerDefineProperty(_this, "_isLimitMaxScale", _descriptor6, _assertThisInitialized(_this));
          /** 限制最小缩放 */
          _initializerDefineProperty(_this, "_isLimitMinScale", _descriptor7, _assertThisInitialized(_this));
          /** 最大缩放 */
          _initializerDefineProperty(_this, "_maxScaleV3", _descriptor8, _assertThisInitialized(_this));
          /** 最小缩放 */
          _initializerDefineProperty(_this, "_minScaleV3", _descriptor9, _assertThisInitialized(_this));
          /** 编辑器预览 */
          _this._isEditorPreview = false;
          return _this;
        }
        var _proto = MKAdaptationNode.prototype;
        /* ------------------------------- 生命周期 ------------------------------- */
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.updateAdaptation();
          if (this.adaptationSource === _MKAdaptationNode.Source.Canvas) {
            globalEvent.on(globalEvent.key.resize, this._onGlobalResize, this);
          } else if (this.adaptationSource === _MKAdaptationNode.Source.Parent) {
            var _this$node$parent;
            (_this$node$parent = this.node.parent) == null || _this$node$parent.on(Node.EventType.SIZE_CHANGED, this._onNodeSizeChanged, this);
          }
          if (this.node.getComponent(Sprite)) {
            this.node.on(Sprite.EventType.SPRITE_FRAME_CHANGED, this._onNodeSpriteFrameChanged, this);
          }
          this.node.on(Node.EventType.SIZE_CHANGED, this._onNodeSizeChanged, this);
        };
        _proto.onDisable = function onDisable() {
          if (this.adaptationSource === _MKAdaptationNode.Source.Canvas) {
            globalEvent.off(globalEvent.key.resize, this._onGlobalResize, this);
          } else if (this.adaptationSource === _MKAdaptationNode.Source.Parent) {
            var _this$node$parent2;
            (_this$node$parent2 = this.node.parent) == null || _this$node$parent2.off(Node.EventType.SIZE_CHANGED, this._onNodeSizeChanged, this);
          }
          this.node.off(Sprite.EventType.SPRITE_FRAME_CHANGED, this._onNodeSpriteFrameChanged, this);
          this.node.off(Node.EventType.SIZE_CHANGED, this._onNodeSizeChanged, this);
        }

        /* ------------------------------- 功能函数 ------------------------------- */
        /** 延迟更新适配 */;
        _proto._delayedUpdateAdaptation = function _delayedUpdateAdaptation(timeMsNum_) {
          var _this2 = this;
          if (timeMsNum_ === void 0) {
            timeMsNum_ = 50;
          }
          this.scheduleOnce(function () {
            _this2.updateAdaptation();
          }, timeMsNum_ * 0.001);
        }

        /** 自适应-展示完 */;
        _proto._adaptiveShowAll = function _adaptiveShowAll(designSize_, frameSize_) {
          var scaleV2 = v2(designSize_.width / frameSize_.width, designSize_.height / frameSize_.height);
          if (scaleV2.x < scaleV2.y) {
            scaleV2.y = scaleV2.x;
          } else {
            scaleV2.x = scaleV2.y;
          }
          if (this.adaptationMode === _MKAdaptationNode.Mode.Scale) {
            this.node.setScale(scaleV2.x, scaleV2.y);
          } else {
            this.node.getComponent(UITransform).setContentSize(this.originalSize.width * scaleV2.x, this.originalSize.height * scaleV2.y);
          }
        }

        /** 自适应-填充满 */;
        _proto._adaptiveFillUp = function _adaptiveFillUp(designSize_, frameSize_) {
          var scaleV2 = v2(designSize_.width / frameSize_.width, designSize_.height / frameSize_.height);
          if (scaleV2.x < scaleV2.y) {
            scaleV2.x = scaleV2.y;
          } else {
            scaleV2.y = scaleV2.x;
          }
          if (this.adaptationMode === _MKAdaptationNode.Mode.Scale) {
            this.node.setScale(scaleV2.x, scaleV2.y);
          } else {
            this.node.getComponent(UITransform).setContentSize(this.originalSize.width * scaleV2.x, this.originalSize.height * scaleV2.y);
          }
        }

        /** 填充宽 */;
        _proto._fillWidth = function _fillWidth(designSize_, frameSize_) {
          var scaleNum = designSize_.width / frameSize_.width;
          var scaleV2 = v2(scaleNum, scaleNum);
          if (this.isLimitMaxScale) {
            scaleV2.x = Math.min(scaleV2.x, this.maxScaleV3.x);
            scaleV2.y = Math.min(scaleV2.y, this.maxScaleV3.y);
          }
          if (this.isLimitMinScale) {
            scaleV2.x = Math.max(scaleV2.x, this.minScaleV3.x);
            scaleV2.y = Math.max(scaleV2.y, this.minScaleV3.y);
          }
          if (this.adaptationMode === _MKAdaptationNode.Mode.Scale) {
            this.node.setScale(scaleV2.x, scaleV2.y);
          } else {
            this.node.getComponent(UITransform).setContentSize(this.originalSize.width * scaleV2.x, this.originalSize.height * scaleV2.y);
          }
        }

        /** 填充高 */;
        _proto._fillHeight = function _fillHeight(designSize_, frameSize_) {
          var scaleNum = designSize_.height / frameSize_.height;
          var scaleV2 = v2(scaleNum, scaleNum);
          if (this.isLimitMaxScale) {
            scaleV2.x = Math.min(scaleV2.x, this.maxScaleV3.x);
            scaleV2.y = Math.min(scaleV2.y, this.maxScaleV3.y);
          }
          if (this.isLimitMinScale) {
            scaleV2.x = Math.max(scaleV2.x, this.minScaleV3.x);
            scaleV2.y = Math.max(scaleV2.y, this.minScaleV3.y);
          }
          if (this.adaptationMode === _MKAdaptationNode.Mode.Scale) {
            this.node.setScale(scaleV2.x, scaleV2.y);
          } else {
            this.node.getComponent(UITransform).setContentSize(this.originalSize.width * scaleV2.x, this.originalSize.height * scaleV2.y);
          }
        }

        /** 默认 */;
        _proto._default = function _default(designSize_, frameSize_) {
          if (this.adaptationMode === _MKAdaptationNode.Mode.Scale) {
            this.node.setScale(1, 1);
          } else {
            this.node.getComponent(UITransform).setContentSize(this.originalSize.width, this.originalSize.height);
          }
        }

        /** 缩放 */;
        _proto._scale = function _scale(designSize_, frameSize_) {
          var scaleV2 = v2(designSize_.width / frameSize_.width, designSize_.height / frameSize_.height);
          if (this.isLimitMaxScale) {
            scaleV2.x = Math.min(scaleV2.x, this.maxScaleV3.x);
            scaleV2.y = Math.min(scaleV2.y, this.maxScaleV3.y);
          }
          if (this.isLimitMinScale) {
            scaleV2.x = Math.max(scaleV2.x, this.minScaleV3.x);
            scaleV2.y = Math.max(scaleV2.y, this.minScaleV3.y);
          }
          if (this.adaptationMode === _MKAdaptationNode.Mode.Scale) {
            this.node.setScale(scaleV2.x, scaleV2.y);
          } else {
            this.node.getComponent(UITransform).setContentSize(this.originalSize.width * scaleV2.x, this.originalSize.height * scaleV2.x);
          }
        }

        /** 更新适配 */;
        _proto.updateAdaptation = function updateAdaptation() {
          try {
            /** 设计尺寸 */
            var designSize;
            /** 真实尺寸 */
            var frameSize;
            /** 容器节点 */
            var layoutNode = null;
            switch (this.adaptationMode) {
              case _MKAdaptationNode.Mode.Scale:
                {
                  frameSize = this.node.getComponent(UITransform).contentSize.clone();
                  break;
                }
              case _MKAdaptationNode.Mode.Size:
                {
                  frameSize = this.originalSize;
                  break;
                }
            }
            switch (this.adaptationSource) {
              case _MKAdaptationNode.Source.Canvas:
                {
                  layoutNode = director.getScene().getComponentInChildren(Canvas).node;
                  designSize = layoutNode.getComponent(UITransform).contentSize.clone();
                  break;
                }
              case _MKAdaptationNode.Source.Parent:
                {
                  layoutNode = this.node.parent;
                  designSize = layoutNode.getComponent(UITransform).contentSize.clone();
                  break;
                }
              case _MKAdaptationNode.Source.Customize:
                {
                  designSize = this.customAdaptSize;
                  break;
                }
            }
            switch (this.type) {
              case _MKAdaptationNode.Type.缩放:
                this._scale(designSize, frameSize);
                break;
              case _MKAdaptationNode.Type.自适应_展示完:
                this._adaptiveShowAll(designSize, frameSize);
                break;
              case _MKAdaptationNode.Type.自适应_填充满:
                this._adaptiveFillUp(designSize, frameSize);
                break;
              case _MKAdaptationNode.Type.填充宽:
                this._fillWidth(designSize, frameSize);
                break;
              case _MKAdaptationNode.Type.填充高:
                this._fillHeight(designSize, frameSize);
                break;
              case _MKAdaptationNode.Type.默认:
                this._default(designSize, frameSize);
                break;
            }
          } catch (error) {
            mkLog.error(error);
          }
        }

        /* ------------------------------- 全局事件 ------------------------------- */;
        _proto._onGlobalResize = function _onGlobalResize() {
          // 防止部分手机旋转后未适配
          for (var kNum = 0, lenNum = 6; kNum < lenNum; ++kNum) {
            this._delayedUpdateAdaptation(1000 * kNum);
          }
        }

        /* ------------------------------- 节点事件 ------------------------------- */;
        _proto._onNodeSizeChanged = function _onNodeSizeChanged() {
          this._delayedUpdateAdaptation();
        };
        _proto._onNodeSpriteFrameChanged = function _onNodeSpriteFrameChanged() {
          // 更新原始节点大小
          if (this.adaptationMode === _MKAdaptationNode.Mode.Size) {
            this.originalSize = this.getComponent(UITransform).contentSize.clone();
          }

          // 适配节点
          this._delayedUpdateAdaptation(0);
        };
        _createClass(MKAdaptationNode, [{
          key: "isEditorPreview",
          get: /* --------------- 属性 --------------- */
          /** 编辑器预览 */
          function get() {
            return this._isEditorPreview;
          },
          set: function set(value_) {
            this._isEditorPreview = value_;
            if (value_) {
              this.updateAdaptation();
            }
          }
        }, {
          key: "type",
          get: /** 适配类型 */
          function get() {
            return this._type;
          },
          set: function set(value_) {
            this._type = value_;
            if (this.isEditorPreview) {
              this.updateAdaptation();
            }
          }

          /** 限制最大缩放 */
        }, {
          key: "isLimitMaxScale",
          get: function get() {
            return this._isLimitMaxScale;
          },
          set: function set(value_) {
            this._isLimitMaxScale = value_;
            if (this.type === _MKAdaptationNode.Type.填充宽 || this.type === _MKAdaptationNode.Type.填充高) {
              this.updateAdaptation();
            }
          }

          /** 限制最小缩放 */
        }, {
          key: "isLimitMinScale",
          get: function get() {
            return this._isLimitMinScale;
          },
          set: function set(value_) {
            this._isLimitMinScale = value_;
            if (this.type === _MKAdaptationNode.Type.填充宽 || this.type === _MKAdaptationNode.Type.填充高) {
              this.updateAdaptation();
            }
          }

          /** 最大缩放 */
        }, {
          key: "maxScaleV3",
          get: function get() {
            return this._maxScaleV3;
          },
          set: function set(valueV3_) {
            this._maxScaleV3 = valueV3_;
            if (this.type === _MKAdaptationNode.Type.填充宽 || this.type === _MKAdaptationNode.Type.填充高) {
              this.updateAdaptation();
            }
          }

          /** 最小缩放 */
        }, {
          key: "minScaleV3",
          get: function get() {
            return this._minScaleV3;
          },
          set: function set(valueV3_) {
            this._minScaleV3 = valueV3_;
            if (this.type === _MKAdaptationNode.Type.填充宽 || this.type === _MKAdaptationNode.Type.填充高) {
              this.updateAdaptation();
            }
          }
        }]);
        return MKAdaptationNode;
      }(Component), (_applyDecoratedDescriptor(_class2.prototype, "isEditorPreview", [_dec], Object.getOwnPropertyDescriptor(_class2.prototype, "isEditorPreview"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "adaptationMode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return _MKAdaptationNode.Mode.Scale;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "adaptationSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return _MKAdaptationNode.Source.Canvas;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "originalSize", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return size();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "customAdaptSize", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return size();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "type", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "type"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isLimitMaxScale", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "isLimitMaxScale"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isLimitMinScale", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "isLimitMinScale"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxScaleV3", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "maxScaleV3"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "minScaleV3", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "minScaleV3"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_type", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return _MKAdaptationNode.Type.默认;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_isLimitMaxScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_isLimitMinScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_maxScaleV3", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3(1, 1, 1);
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_minScaleV3", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3(1, 1, 1);
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKAsset.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalEvent.ts', './MKInstanceBase.ts', './MKLogger.ts', './MKBundle.ts', './MKGame.ts', './GlobalConfig.ts', './MKRelease.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, _assertThisInitialized, _extends, cclegacy, SpriteFrame, Texture2D, DynamicAtlasManager, assetManager, Asset, globalEvent, MKInstanceBase, MKLogger, mkBundle, mkGame, GlobalConfig, MKRelease;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      SpriteFrame = module.SpriteFrame;
      Texture2D = module.Texture2D;
      DynamicAtlasManager = module.DynamicAtlasManager;
      assetManager = module.assetManager;
      Asset = module.Asset;
    }, function (module) {
      globalEvent = module.default;
    }, function (module) {
      MKInstanceBase = module.default;
    }, function (module) {
      MKLogger = module.default;
    }, function (module) {
      mkBundle = module.default;
    }, function (module) {
      mkGame = module.default;
    }, function (module) {
      GlobalConfig = module.default;
    }, function (module) {
      MKRelease = module.default;
    }],
    execute: function () {
      exports('MKAsset_', void 0);
      cclegacy._RF.push({}, "642682zykRMZoH7Ikthp4GG", "MKAsset", undefined);
      var _MKAsset;
      (function (_MKAsset2) {
        /** loadRemote 配置类型 */
        /** loadAny 配置类型 */
        /** 释放信息 */
        var ReleaseInfo = function ReleaseInfo(init_) {
          /** 添加时间 */
          this.joinTimeMsNum = Date.now();
          /** 资源 */
          this.asset = void 0;
          Object.assign(this, init_);
        };
        _MKAsset2.ReleaseInfo = ReleaseInfo;
      })(_MKAsset || (_MKAsset = {}));
      /**
       * 资源管理器
       * @noInheritDoc
       * @remarks
       *
       * - 统一加载接口为 get、getDir
       *
       * - 支持 EDITOR 环境加载资源
       *
       * - 加载图片无需后缀，通过类型自动添加
       *
       * - 加载路径扩展，例：db://xxx.prefab
       *
       * - 资源默认引用为 2，引用为 1 时将在 GlobalConfig.Resources.cacheLifetimeMsNum 时间后自动释放
       *
       * - 增加强制性资源跟随释放对象
       *
       * - （3.8.6 引擎已修复）修复了释放后立即加载同一资源导致加载的资源是已释放后的问题
       *
       * - （3.8.6 引擎已修复）修复同时加载同一资源多次导致返回的资源对象不一致（对象不一致会导致引用计数不一致）
       */
      var MKAsset = exports('MKAsset', /*#__PURE__*/function (_MKInstanceBase) {
        _inheritsLoose(MKAsset, _MKInstanceBase);
        function MKAsset() {
          var _this;
          _this = _MKInstanceBase.call(this) || this;
          /* --------------- private --------------- */
          /** 日志 */
          _this._log = new MKLogger("MKAsset");
          /** 管理表 */
          _this._joinTimeMsN = new Map();
          /** 释放表 */
          _this._assetReleaseMap = new Map();
          /** 释放定时器 */
          _this._releaseTimer = void 0;

          // 重载 decRef 函数
          {
            /** 当前对象 */
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var self = _assertThisInitialized(_this);
            /** decRef 原函数 */
            var originFunc = Asset.prototype.decRef;
            Asset.prototype.decRef = function () {
              var _this2 = this;
              for (var _len = arguments.length, argsList = new Array(_len), _key = 0; _key < _len; _key++) {
                argsList[_key] = arguments[_key];
              }
              var result = originFunc.call.apply(originFunc, [this].concat(argsList));

              // 跳过未纳入管理资源
              if (!self._joinTimeMsN.has(this.nativeUrl || this.uuid)) {
                return result;
              }

              // 重启期间直接销毁
              if (mkGame.isRestarting) {
                // 等待场景关闭后释放资源
                Promise.all(globalEvent.request(globalEvent.key.waitCloseScene)).then(function (v) {
                  MKAsset.instance().release(_this2);
                });
                return result;
              }

              // 引用为 1 时自动释放
              if (this.refCount === 1) {
                self._assetReleaseMap.set(this.nativeUrl || this.uuid, new _MKAsset.ReleaseInfo({
                  asset: this
                }));

                // 缓存生命时长为 0 立即释放
                if (GlobalConfig.Asset.config.cacheLifetimeMsNum === 0) {
                  self._autoReleaseAsset();
                }
              }
              return result;
            };
          }

          // 定时自动释放资源
          if (MKAsset._config.cacheLifetimeMsNum !== 0) {
            _this._releaseTimer = setInterval(_this._autoReleaseAsset.bind(_assertThisInitialized(_this)), MKAsset._config.cacheLifetimeMsNum);
          }

          // 事件监听
          setTimeout(function () {
            globalEvent.once(globalEvent.key.restart, _this._onRestart, MKAsset.instance());
          }, 0);
          return _this;
        }

        /* --------------- static --------------- */
        /** 全局配置 */
        var _proto = MKAsset.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /**
         * 获取资源
         * @param pathStr_ 资源路径
         * @param type_ 资源类型
         * @param target_ 跟随释放对象
         * @param config_ 获取配置
         * @returns
         */
        _proto.get = function get(pathStr_, type_, target_, config_) {
          var _getConfig$retryNum,
            _this3 = this;
          /** 获取配置 */
          var getConfig = config_ != null ? config_ : {};
          /** 远程资源 */
          var isRemote = Boolean(getConfig.remoteOption);

          // 参数补齐
          getConfig.retryNum = (_getConfig$retryNum = getConfig.retryNum) != null ? _getConfig$retryNum : GlobalConfig.Asset.config.retryCountOnLoadFailureNum;

          // 参数转换
          {
            // 去除无用信息
            if (pathStr_.startsWith("db://assets/")) {
              pathStr_ = pathStr_.slice(12);

              // 裁剪 pathStr_, 补齐 bundle 名
              if (pathStr_.includes("/")) {
                var dirStr = pathStr_.slice(0, pathStr_.indexOf("/"));
                pathStr_ = pathStr_.slice(dirStr.length + 1);
                getConfig.bundleStr = getConfig.bundleStr || dirStr;
              }
            }

            // 删除路径后缀
            if (!isRemote) {
              var indexNum = pathStr_.lastIndexOf(".");
              if (indexNum !== -1) {
                pathStr_ = pathStr_.slice(0, indexNum);
              }
            }

            // 图片类型后缀
            if (!isRemote) {
              var assetType = type_;
              if (assetType === SpriteFrame && !pathStr_.endsWith("/spriteFrame")) {
                pathStr_ += "/spriteFrame";
              } else if (assetType === Texture2D && !pathStr_.endsWith("/texture")) {
                pathStr_ += "/texture";
              }
            }
          }

          // 填充 bundle 名
          {
            getConfig.bundleStr = getConfig.bundleStr || (mkBundle.bundleStr !== "main" ? mkBundle.bundleStr : "resources");
          }
          return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolveFunc) {
            var completedFunc, _getConfig$remoteOpti, assetConfig, uuidStr, bundleAsset, _asset;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (pathStr_) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return", null);
                case 2:
                  /** 完成回调 */
                  completedFunc = /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(error, asset) {
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            if (error) {
                              _this3._log.error("get " + pathStr_ + " \u9519\u8BEF", error);
                            } else {
                              _this3._log.debug("get " + pathStr_ + " \u5B8C\u6210");
                            }
                            {
                              _context.next = 5;
                              break;
                            }
                          case 5:
                            if (!error) {
                              _context.next = 19;
                              break;
                            }
                            if (!(getConfig.retryNum <= 0)) {
                              _context.next = 11;
                              break;
                            }
                            getConfig.completedFunc == null || getConfig.completedFunc(error, asset);
                            resolveFunc(asset);
                            _context.next = 18;
                            break;
                          case 11:
                            _this3._log.warn("\u91CD\u65B0\u52A0\u8F7D get " + pathStr_ + " \u9519\u8BEF\uFF0C\u5269\u4F59\u91CD\u8BD5\u6B21\u6570 " + getConfig.retryNum);
                            getConfig.retryNum--;
                            _context.t0 = resolveFunc;
                            _context.next = 16;
                            return _this3.get(pathStr_, type_, target_, getConfig);
                          case 16:
                            _context.t1 = _context.sent;
                            (0, _context.t0)(_context.t1);
                          case 18:
                            return _context.abrupt("return");
                          case 19:
                            // 资源初始化
                            asset = _this3._assetInit(asset);
                            // 执行回调
                            getConfig.completedFunc == null || getConfig.completedFunc(error, asset);
                            // 跟随释放
                            MKRelease.followRelease(target_, asset);
                            resolveFunc(asset);
                          case 23:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    }));
                    return function completedFunc(_x2, _x3) {
                      return _ref2.apply(this, arguments);
                    };
                  }(); // 远程
                  if (!isRemote) {
                    _context2.next = 7;
                    break;
                  }
                  assetManager.loadRemote(pathStr_, _extends({
                    onFileProgress: getConfig.progressFunc
                  }, (_getConfig$remoteOpti = getConfig.remoteOption) != null ? _getConfig$remoteOpti : {}), completedFunc);
                  _context2.next = 36;
                  break;
                case 7:
                  {
                    _context2.next = 26;
                    break;
                  }
                case 15:
                  uuidStr = _context2.sent;
                  if (uuidStr) {
                    _context2.next = 21;
                    break;
                  }
                  _this3._log.error("获取 uuid 失败", pathStr_);
                  getConfig.completedFunc == null || getConfig.completedFunc(new Error("获取 uuid 失败，" + pathStr_), null);
                  resolveFunc(null);
                  return _context2.abrupt("return");
                case 21:
                  // 如果是 spriteFrame 添加后缀
                  if (type_ === SpriteFrame) {
                    uuidStr += "@f9941";
                  }
                  assetConfig.uuid = uuidStr;
                  if (getConfig.progressFunc) {
                    assetManager.loadAny(assetConfig, getConfig.progressFunc, completedFunc);
                  } else {
                    assetManager.loadAny(assetConfig, completedFunc);
                  }
                  _context2.next = 36;
                  break;
                case 26:
                  _context2.next = 28;
                  return mkBundle.load(getConfig.bundleStr);
                case 28:
                  bundleAsset = _context2.sent;
                  if (bundleAsset) {
                    _context2.next = 34;
                    break;
                  }
                  _this3._log.error("未获取到 bundle 信息");
                  getConfig.completedFunc == null || getConfig.completedFunc(new Error("未获取到 bundle 信息，" + getConfig.bundleStr), null);
                  resolveFunc(null);
                  return _context2.abrupt("return");
                case 34:
                  // 获取资源
                  _asset = bundleAsset.get(pathStr_, type_); // 已加载资源
                  if (_asset) {
                    // 模拟回调
                    getConfig.progressFunc == null || getConfig.progressFunc(1, 1);
                    completedFunc(null, _asset);
                  }
                  // 加载资源
                  else {
                    if (getConfig.progressFunc) {
                      bundleAsset.load(pathStr_, type_, getConfig.progressFunc, completedFunc);
                    } else {
                      bundleAsset.load(pathStr_, type_, completedFunc);
                    }
                  }
                case 36:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })));
        }

        /**
         * 获取文件夹资源
         * @param pathStr_ 资源路径
         * @param type_ 资源类型
         * @param target_ 跟随释放对象
         * @param config_ 获取配置
         * @returns
         */;
        _proto.getDir = function getDir(pathStr_, type_, target_, config_) {
          var _getConfig$retryNum2,
            _this4 = this;
          /** 获取配置 */
          var getConfig = config_ != null ? config_ : {};
          /** 资源配置 */
          var assetConfig;

          // 参数补齐
          getConfig.retryNum = (_getConfig$retryNum2 = getConfig.retryNum) != null ? _getConfig$retryNum2 : GlobalConfig.Asset.config.retryCountOnLoadFailureNum;

          // 参数转换
          {
            // 去除无用信息
            if (pathStr_.startsWith("db://assets/")) {
              pathStr_ = pathStr_.slice(12);

              // 裁剪 pathStr_, 补齐 bundle 名
              {
                var dirStr = pathStr_.slice(0, pathStr_.indexOf("/"));
                pathStr_ = pathStr_.slice(dirStr.length + 1);
                getConfig.bundleStr = getConfig.bundleStr || dirStr;
              }
            }

            // 补全加载配置
            {
              if (!getConfig.remoteOption) {
                getConfig.remoteOption = {};
              }
              assetConfig = getConfig.remoteOption;
              assetConfig.bundle = getConfig.bundleStr || (mkBundle.bundleStr !== "main" ? mkBundle.bundleStr : "resources");
              assetConfig.type = type_;
              assetConfig.dir = pathStr_;
            }
          }
          return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolveFunc) {
            var dirAssetList, completedFunc, bundleAsset, assetInfoList, errorList, _loop, _iterator, _step;
            return _regeneratorRuntime().wrap(function _callee4$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  /** 文件夹资源列表 */
                  dirAssetList = [];
                  if (pathStr_) {
                    _context5.next = 3;
                    break;
                  }
                  return _context5.abrupt("return", dirAssetList);
                case 3:
                  /** 完成回调 */
                  completedFunc = function completedFunc(errorList) {
                    // 资源初始化
                    dirAssetList.forEach(function (v, kNum) {
                      dirAssetList[kNum] = _this4._assetInit(v);
                    });

                    // 执行回调
                    getConfig.completedFunc == null || getConfig.completedFunc(errorList, dirAssetList);

                    // 跟随释放
                    if (target_) {
                      dirAssetList.forEach(function (v) {
                        MKRelease.followRelease(target_, v);
                      });
                    }
                    resolveFunc(dirAssetList);
                  }; // 编辑器
                  {
                    _context5.next = 10;
                    break;
                  }
                case 10:
                  _context5.next = 12;
                  return mkBundle.load(assetConfig.bundle);
                case 12:
                  bundleAsset = _context5.sent;
                  if (bundleAsset) {
                    _context5.next = 18;
                    break;
                  }
                  _this4._log.error("未获取到 bundle 信息");
                  getConfig.completedFunc == null || getConfig.completedFunc([new Error("未获取到 bundle 信息，" + assetConfig.bundle)], null);
                  resolveFunc(null);
                  return _context5.abrupt("return");
                case 18:
                  /** 资源信息列表 */
                  assetInfoList = bundleAsset.getDirWithPath(pathStr_, type_);
                  /** 错误列表 */
                  errorList = []; // 加载资源
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var _step$value, kNum, v, asset, loadFunc;
                    return _regeneratorRuntime().wrap(function _loop$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          _step$value = _step.value, kNum = _step$value[0], v = _step$value[1];
                          asset = bundleAsset.get(v.path, type_); // 已加载资源
                          if (!asset) {
                            _context4.next = 6;
                            break;
                          }
                          dirAssetList.push(asset);
                          _context4.next = 9;
                          break;
                        case 6:
                          loadFunc = function loadFunc(retryNum) {
                            if (retryNum === void 0) {
                              retryNum = getConfig.retryNum;
                            }
                            return new Promise(function (resolveFunc) {
                              bundleAsset.load(v.path, type_, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(error, asset) {
                                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                                  while (1) switch (_context3.prev = _context3.next) {
                                    case 0:
                                      if (!error) {
                                        _context3.next = 14;
                                        break;
                                      }
                                      _this4._log.error("get " + v.path + " \u9519\u8BEF", error);
                                      // 加载失败
                                      if (!(retryNum === 0)) {
                                        _context3.next = 7;
                                        break;
                                      }
                                      errorList.push(error);
                                      resolveFunc(false);
                                      _context3.next = 13;
                                      break;
                                    case 7:
                                      _this4._log.warn("\u91CD\u65B0\u52A0\u8F7D get " + v.path + " \u9519\u8BEF\uFF0C\u5269\u4F59\u91CD\u8BD5\u6B21\u6570 " + retryNum);
                                      _context3.t0 = resolveFunc;
                                      _context3.next = 11;
                                      return loadFunc(retryNum - 1);
                                    case 11:
                                      _context3.t1 = _context3.sent;
                                      (0, _context3.t0)(_context3.t1);
                                    case 13:
                                      return _context3.abrupt("return");
                                    case 14:
                                      dirAssetList.push(asset);
                                      resolveFunc(true);
                                    case 16:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }, _callee3);
                              })));
                            });
                          }; // 加载资源
                          _context4.next = 9;
                          return loadFunc();
                        case 9:
                          // 模拟回调
                          getConfig.progressFunc == null || getConfig.progressFunc(kNum + 1, assetInfoList.length);
                        case 10:
                        case "end":
                          return _context4.stop();
                      }
                    }, _loop);
                  });
                  _iterator = _createForOfIteratorHelperLoose(assetInfoList.entries());
                case 22:
                  if ((_step = _iterator()).done) {
                    _context5.next = 26;
                    break;
                  }
                  return _context5.delegateYield(_loop(), "t0", 24);
                case 24:
                  _context5.next = 22;
                  break;
                case 26:
                  completedFunc(!errorList.length ? null : errorList);
                case 27:
                case "end":
                  return _context5.stop();
              }
            }, _callee4);
          })));
        }

        /**
         * 释放资源
         * @param asset_ 释放的资源
         */;
        _proto.release = function release(asset_) {
          var _this5 = this;
          var assetList = Array.isArray(asset_) ? asset_ : [asset_];
          assetList.forEach(function (v) {
            var _DynamicAtlasManager$;
            if (!v.isValid) {
              return;
            }

            // 释放动态图集中的资源
            if (DynamicAtlasManager != null && (_DynamicAtlasManager$ = DynamicAtlasManager.instance) != null && _DynamicAtlasManager$.enabled) {
              if (v instanceof SpriteFrame) {
                DynamicAtlasManager.instance.deleteAtlasSpriteFrame(v);
              } else if (v instanceof Texture2D) {
                DynamicAtlasManager.instance.deleteAtlasTexture(v);
              }
            }

            // 更新引用计数
            for (var kNum = 0; kNum < v.refCount; kNum++) {
              v.decRef(false);
            }

            // 释放资源，禁止自动释放，否则会出现释放后立即加载当前资源导致加载返回资源是已释放后的
            assetManager.releaseAsset(v);
            // 更新资源管理表
            _this5._joinTimeMsN["delete"](v.nativeUrl || v.uuid);
            _this5._log.debug("释放资源", v.name, v.nativeUrl, v.uuid);
          });
        }

        /** 资源初始化 */;
        _proto._assetInit = function _assetInit(asset_) {
          /** 已加载资源 */
          var loadedAsset = this._joinTimeMsN.get(asset_.nativeUrl || asset_.uuid);

          // 如果资源已经加载，则返回的资源是一个新资源，此时引用计数和前一个对象不一致，需要替换
          // 如果资源无效，则加载的资源绕过了框架释放，例如使用 bundle.releaseAll
          if (loadedAsset != null && loadedAsset.isValid) {
            // 引用计数更新
            loadedAsset.addRef();
            return loadedAsset;
          } else {
            // 引用计数更新
            asset_.addRef();
            asset_.addRef();
            this._joinTimeMsN.set(asset_.nativeUrl || asset_.uuid, asset_);
            return asset_;
          }
        }

        /**
         * 自动释放资源
         * @param isForce_ 强制
         * @returns
         */;
        _proto._autoReleaseAsset = function _autoReleaseAsset(isForce_) {
          if (isForce_ === void 0) {
            isForce_ = false;
          }
          /** 当前时间 */
          var currentTimeMsNum = Date.now();
          if (isForce_) {
            var assetsList = [];
            this._assetReleaseMap.forEach(function (v) {
              // 已经被释放或增加了引用计数
              if (!v.asset.isValid || v.asset.refCount !== 1) {
                return;
              }
              assetsList.push(v.asset);
            });

            // 清理释放表
            this._assetReleaseMap.clear();
            // 释放资源
            this.release(assetsList);
          } else {
            for (var _iterator2 = _createForOfIteratorHelperLoose(this._assetReleaseMap.entries()), _step2; !(_step2 = _iterator2()).done;) {
              var _step2$value = _step2.value,
                kStr = _step2$value[0],
                _v = _step2$value[1];
              // 当前及之后的资源没超过生命时长
              if (currentTimeMsNum - _v.joinTimeMsNum < MKAsset._config.cacheLifetimeMsNum) {
                break;
              }
              this._assetReleaseMap["delete"](kStr);

              // 已经被释放或增加了引用计数
              if (!_v.asset.isValid || _v.asset.refCount !== 1) {
                return;
              }

              // 释放资源
              this.release(_v.asset);
            }
          }
        }

        /* ------------------------------- 全局事件 ------------------------------- */;
        _proto._onRestart = /*#__PURE__*/
        function () {
          var _onRestart2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            return _regeneratorRuntime().wrap(function _callee5$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return Promise.all(globalEvent.request(globalEvent.key.waitCloseScene));
                case 2:
                  // 立即释放资源
                  this._autoReleaseAsset(true);
                  // 清理定时器
                  clearInterval(this._releaseTimer);
                  // 释放 bundle 资源
                  assetManager.bundles.forEach(function (v) {
                    v.releaseAll();
                  });
                case 5:
                case "end":
                  return _context6.stop();
              }
            }, _callee5, this);
          }));
          function _onRestart() {
            return _onRestart2.apply(this, arguments);
          }
          return _onRestart;
        }();
        return MKAsset;
      }(MKInstanceBase));
      MKAsset._config = GlobalConfig.Asset.config;
      var MKAsset_;
      var mkAsset = exports('default', MKAsset.instance());

      // ...需要增加远程图片释放时释放对应的合图
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKAudioBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKAsset.ts', './MKEventTarget.ts', './GlobalEvent.ts', './GlobalConfig.ts', './MKRelease.ts', './MKToolObject.ts'], function (exports) {
  var _applyDecoratedDescriptor, _createClass, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, _initializerDefineProperty, cclegacy, _decorator, AudioClip, Enum, mkAsset, MKEventTarget, globalEvent, GlobalConfig, MKRelease, mkToolObject;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      Enum = module.Enum;
    }, function (module) {
      mkAsset = module.default;
    }, function (module) {
      MKEventTarget = module.default;
    }, function (module) {
      globalEvent = module.default;
    }, function (module) {
      GlobalConfig = module.default;
    }, function (module) {
      MKRelease = module.default;
    }, function (module) {
      mkToolObject = module.default;
    }],
    execute: function () {
      exports('MKAudioBase_', void 0);
      cclegacy._RF.push({}, "c15edvoyF1PXpHkXfZjT/ld", "MKAudioBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 音频基类
       * @noInheritDoc
       */
      var MKAudioBase = exports('default', /*#__PURE__*/function () {
        function MKAudioBase() {
          /** 音频组 */
          this._groupMap = new Map();
          globalEvent.on(globalEvent.key.restart, this._eventRestart, this);
        }

        /* --------------- protected --------------- */
        /** 日志 */
        var _proto = MKAudioBase.prototype;
        /**
         * 获取音频组
         * @param groupNum_ 组类型
         * @returns
         */
        _proto.getGroup = function getGroup(groupNum_) {
          var result = this._groupMap.get(groupNum_);
          if (!result) {
            this._groupMap.set(groupNum_, result = new MKAudioBase_.Group(this, groupNum_));
          }
          return result;
        }

        /**
         * 添加音频单元
         * @param url_ 音频资源路径 | 音频资源路径列表
         * @param target_ 跟随释放对象
         * @param config_ 添加配置
         */;
        _proto.add = /*#__PURE__*/
        function () {
          var _add2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url_, target_, config_) {
            var _this = this;
            var urlStrList, audioList, result, _iterator, _step, vStr, assetList, _iterator2, _step2, _config_$type2, _vStr, asset, audio;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  {
                    _context.next = 2;
                    break;
                  }
                case 2:
                  // 参数转换
                  if (typeof url_ === "string") {
                    urlStrList = [url_];
                  } else {
                    urlStrList = url_;
                  }
                  audioList = [];
                  if (!(config_ != null && config_.isDir)) {
                    _context.next = 17;
                    break;
                  }
                  _iterator = _createForOfIteratorHelperLoose(urlStrList);
                case 6:
                  if ((_step = _iterator()).done) {
                    _context.next = 14;
                    break;
                  }
                  vStr = _step.value;
                  _context.next = 10;
                  return mkAsset.getDir(vStr, AudioClip, null, config_.loadConfig);
                case 10:
                  assetList = _context.sent;
                  assetList == null || assetList.forEach(function (v2) {
                    var _config_$type;
                    var audio = _this._getAudioUnit({
                      clip: v2
                    });
                    audio.type = (_config_$type = config_.type) != null ? _config_$type : audio.type;
                    audioList.push(audio);
                  });
                case 12:
                  _context.next = 6;
                  break;
                case 14:
                  result = audioList;
                  _context.next = 32;
                  break;
                case 17:
                  _iterator2 = _createForOfIteratorHelperLoose(urlStrList);
                case 18:
                  if ((_step2 = _iterator2()).done) {
                    _context.next = 31;
                    break;
                  }
                  _vStr = _step2.value;
                  _context.next = 22;
                  return mkAsset.get(_vStr, AudioClip, null, config_ == null ? void 0 : config_.loadConfig);
                case 22:
                  asset = _context.sent;
                  if (asset) {
                    _context.next = 26;
                    break;
                  }
                  audioList.push(null);
                  return _context.abrupt("continue", 29);
                case 26:
                  audio = this._getAudioUnit({
                    clip: asset
                  });
                  audio.type = (_config_$type2 = config_ == null ? void 0 : config_.type) != null ? _config_$type2 : audio.type;
                  audioList.push(audio);
                case 29:
                  _context.next = 18;
                  break;
                case 31:
                  result = !Array.isArray(url_) ? audioList[0] : audioList;
                case 32:
                  // 添加音频
                  audioList.forEach(function (v) {
                    if (!v) {
                      return;
                    }
                    _this._add(v, config_ == null ? void 0 : config_.groupIdNumList);
                  });
                  MKRelease.followRelease(target_, function () {
                    audioList.forEach(function (v) {
                      if (!v) {
                        return;
                      }
                      v.release();
                    });
                  });
                  return _context.abrupt("return", result);
                case 35:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function add(_x, _x2, _x3) {
            return _add2.apply(this, arguments);
          }
          return add;
        }()
        /**
         * 播放音效
         * @param audio_ 音频单元
         * @param config_ 播放配置
         * @returns
         * @remarks
         * 使用通用音频系统时，当播放数量超过 AudioSource.maxAudioChannel 时会导致播放失败
         */;

        _proto.play = function play(audio_, config_) {
          var _this2 = this;
          var audio = audio_;

          // 参数安检
          if (!(audio_ != null && audio_.clip)) {
            return false;
          }

          // 初始化音频
          {
            // 更新配置
            if (config_) {
              Object.assign(audio, config_);
            }

            // 添加音频
            this._add(audio, audio.groupIdNumList);
          }
          if (audio.groupIdNumList.some(function (vNum) {
            return _this2.getGroup(vNum).isStop;
          })) {
            return false;
          }
          return true;
        }

        /** 暂停所有音频 */;
        _proto.pauseAll = function pauseAll() {
          var _this3 = this;
          this._groupMap.forEach(function (v) {
            v.audioUnitList.forEach(function (v2) {
              _this3.pause(v2);
            });
          });
        }

        /** 恢复所有音频 */;
        _proto.resumeAll = function resumeAll() {
          var _this4 = this;
          this._groupMap.forEach(function (v) {
            v.audioUnitList.forEach(function (v2) {
              if (v2.state === MKAudioBase_.State.Pause) {
                _this4.play(v2);
              }
            });
          });
        }

        /** 停止所有音频 */;
        _proto.stopAll = function stopAll() {
          var _this5 = this;
          this._groupMap.forEach(function (v) {
            v.audioUnitList.forEach(function (v2) {
              _this5.stop(v2);
            });
          });
        }

        /**
         * 添加音频单元
         * @param audio_ 音频单元
         * @param groupIdNumList_ 音频组
         * @returns 成功状态
         * @internal
         */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ;

        _proto._add = function _add(audio_, groupIdNumList_) {
          var _groupIdNumList_$redu,
            _this6 = this;
          // 参数安检
          if (!audio_ || audio_.isInit || !audio_.clip) {
            return false;
          }

          /** 包含类型数量 */
          var numTypesIncludedNum = (_groupIdNumList_$redu = groupIdNumList_ == null ? void 0 : groupIdNumList_.reduce(function (pre, curr) {
            return pre + (curr < 0 ? 1 : 0);
          }, 0)) != null ? _groupIdNumList_$redu : 0;

          // 检查分组数据
          if (numTypesIncludedNum > 0) {
            this._log.error("\u6DFB\u52A0\u97F3\u9891\u5355\u5143 " + audio_.clip.name + " \u5931\u8D25\uFF0C\u4E0D\u80FD\u5305\u542B\u97F3\u9891\u7C7B\u578B");
            return false;
          }

          // 添加分组音频
          [audio_.type].concat(groupIdNumList_ != null ? groupIdNumList_ : []).forEach(function (vNum) {
            /** 组音频列表 */
            var audioGroup = _this6._groupMap.get(vNum);

            // 添加到音频列表
            if (!audioGroup) {
              _this6._groupMap.set(vNum, audioGroup = new MKAudioBase_.Group(_this6, vNum));
            }
            audioGroup.addAudio(audio_);
          });
          return true;
        }

        /* ------------------------------- 全局事件 ------------------------------- */;
        _proto._eventRestart = function _eventRestart() {
          // 停止所有音频
          this.stopAll();

          // 重置数据，音频资源释放应该由模块管理
          mkToolObject.reset(this, true);
        };
        return MKAudioBase;
      }());
      var MKAudioBase_;
      (function (_MKAudioBase_, _dec, _dec2, _dec3, _class2, _class3, _descriptor, _descriptor2) {
        var State = /*#__PURE__*/function (State) {
          State[State["Stop"] = 1] = "Stop";
          State[State["Pause"] = 2] = "Pause";
          State[State["Play"] = 4] = "Play";
          return State;
        }({});
        _MKAudioBase_.State = State;
        /** 安全音频单元 */
        /** add 配置 */
        /** play 配置 */
        /** 事件协议 */
        /**
         * 音频单元
         * @internal
         */
        var PrivateUnit = (_dec = ccclass("MKAudioBase/Unit"), _dec2 = property({
          displayName: "音频资源",
          type: AudioClip != null ? AudioClip : null
        }), _dec3 = property({
          displayName: "音频类型",
          type: Enum(GlobalConfig.Audio.Type)
        }), _dec(_class2 = (_class3 = /*#__PURE__*/function () {
          function PrivateUnit(init_) {
            /* --------------- 属性 --------------- */
            /** 音频资源 */
            _initializerDefineProperty(this, "clip", _descriptor, this);
            /** 音频类型 */
            _initializerDefineProperty(this, "type", _descriptor2, this);
            /* --------------- public --------------- */
            /** 事件对象 */
            // eslint-disable-next-line @typescript-eslint/naming-convention
            this._event = void 0;
            /** 分组 */
            this.groupIdNumList = [];
            /** 播放状态 */
            this.state = State.Stop;
            /**
             * 等待播放次数
             * @remarks
             * -1：关闭，0-n：等待播放次数
             */
            this.waitPlayNum = -1;
            /** 真实音量 */
            this.realVolumeNum = 0;
            /* --------------- protected --------------- */
            /** 初始化状态 */
            this._isInit = false;
            Object.assign(this, init_);
          }
          var _proto2 = PrivateUnit.prototype;
          _proto2.clone = function clone(valueNum_) {
            if (valueNum_ === undefined) {
              return this._clone();
            }
            var audioList = [];

            // 克隆数组
            for (var kNum = 0, lenNum = valueNum_; kNum < lenNum; ++kNum) {
              audioList.push(this._clone());
            }
            return audioList;
          };
          _proto2.release = function release() {
            throw "子类实现";
          };
          _createClass(PrivateUnit, [{
            key: "isInit",
            get: /** 初始化状态 */
            function get() {
              return this._isInit;
            },
            set: function set(value_) {
              this._isInit = value_;
            }

            /** 音量 */
          }, {
            key: "volumeNum",
            get: function get() {
              return 0;
            },
            set: function set(valueNum_) {
              throw "子类实现";
            }

            /** 循环 */
          }, {
            key: "isLoop",
            get: function get() {
              return false;
            },
            set: function set(value_) {
              throw "子类实现";
            }

            /** 总时长（秒） */
          }, {
            key: "totalTimeSNum",
            get: function get() {
              return 0;
            }

            /** 当前时间（秒） */
          }, {
            key: "currentTimeSNum",
            get: function get() {
              return 0;
            },
            set: function set(valueNum_) {
              throw "子类实现";
            }

            /** 事件对象 */
          }, {
            key: "event",
            get: function get() {
              var _this$_event;
              return (_this$_event = this._event) != null ? _this$_event : this._event = new MKEventTarget();
            }

            /** 等待播放开关 */
          }, {
            key: "isWaitPlay",
            get: function get() {
              return this.waitPlayNum !== -1;
            },
            set: function set(value_) {
              this.waitPlayNum = value_ ? 0 : -1;
            }

            /**
             * 音频组件
             * @remarks
             * 通用音频系统使用
             */
          }, {
            key: "audioSource",
            get: function get() {
              return null;
            },
            set: function set(value_) {
              throw "子类实现";
            }
          }]);
          return PrivateUnit;
        }(), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "clip", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "type", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return GlobalConfig.Audio.Type.Effect;
          }
        })), _class3)) || _class2);
        _MKAudioBase_.PrivateUnit = PrivateUnit;
        var Group = /*#__PURE__*/function () {
          function Group(init_, idNum_) {
            /* --------------- public --------------- */
            /** 分组 ID */
            this.idNum = void 0;
            /** 音频列表 */
            this.audioUnitList = [];
            /* --------------- private --------------- */
            /** 音频管理器 */
            this._audioManage = void 0;
            /** 音量 */
            this._volumeNum = 1;
            /** 播放状态 */
            this._isPlay = true;
            /** 停止状态 */
            this._isStop = false;
            this._audioManage = init_;
            this.idNum = idNum_;
          }
          var _proto3 = Group.prototype;
          /* ------------------------------- 功能 ------------------------------- */
          /**
           * 播放
           * @param containsStateNum_ 包含状态，处于这些状态中的音频将被播放，例：`mk.Audio_.State.Pause | mk.Audio_.State.Stop`
           * @defaultValue `State.Pause | State.Stop`
           */
          _proto3.play = function play(containsStateNum_) {
            var _this7 = this;
            if (containsStateNum_ === void 0) {
              containsStateNum_ = State.Pause | State.Stop;
            }
            // 停止状态没有暂停的音乐
            if (this._isStop) {
              containsStateNum_ &= ~State.Pause;
            }

            // 没有包含状态
            if (!containsStateNum_) {
              return;
            }
            this._isPlay = true;
            this._isStop = false;
            this.audioUnitList.forEach(function (v) {
              if (!(v.state & containsStateNum_)) {
                return;
              }

              // 播放音频
              _this7._audioManage.play(v);
            });
          }

          /** 暂停 */;
          _proto3.pause = function pause() {
            var _this8 = this;
            this._isPlay = false;
            this.audioUnitList.forEach(function (v) {
              _this8._audioManage.pause(v);
            });
          }

          /**
           * 停止
           * @param isStop_
           * 默认为 true，true: 停止当前并阻止后续音频播放；false: 恢复播放能力
           * @remarks
           * - 停止后续播放音频将不会执行播放逻辑
           */;
          _proto3.stop = function stop(isStop_) {
            var _this9 = this;
            if (isStop_ === void 0) {
              isStop_ = true;
            }
            this._isPlay = !isStop_;
            this._isStop = isStop_;
            if (isStop_) {
              this.audioUnitList.forEach(function (v) {
                _this9._audioManage.stop(v);
              });
            }
          }

          /** 添加音频 */;
          _proto3.addAudio = function addAudio(audio_) {
            var _this10 = this;
            var audioUnitList;

            // 参数转换
            if (Array.isArray(audio_)) {
              audioUnitList = audio_;
            } else {
              audioUnitList = [audio_];
            }
            audioUnitList.forEach(function (v) {
              if (
              // 不能重复添加
              _this10.audioUnitList.includes(v) ||
              // 已存在当前分组
              v.groupIdNumList.includes(_this10.idNum)) {
                return;
              }

              // 添加到音频列表
              _this10.audioUnitList.push(v);
              // 添加到音频分组
              v.groupIdNumList.push(_this10.idNum);
            });
          }

          /** 删除音频 */;
          _proto3.delAudio = function delAudio(audio_) {
            var _this11 = this;
            var selfAudioUnitList = this.audioUnitList;
            var audioUnitList;

            // 参数转换
            if (Array.isArray(audio_)) {
              audioUnitList = audio_;
            } else {
              audioUnitList = [audio_];
            }
            audioUnitList.forEach(function (v) {
              // 从音频列表移除
              {
                var indexNum = selfAudioUnitList.indexOf(v);
                if (indexNum !== -1) {
                  selfAudioUnitList.splice(indexNum, 1);
                }
              }

              // 删除分组
              {
                var _indexNum = v.groupIdNumList.indexOf(_this11.idNum);
                if (_indexNum !== -1) {
                  v.groupIdNumList.splice(_indexNum, 1);
                }
              }
            });
          }

          /** 清理所有音频 */;
          _proto3.clear = function clear() {
            var _this12 = this;
            var selfAudioUnitList = this.audioUnitList;
            selfAudioUnitList.forEach(function (v) {
              // 删除分组
              {
                var indexNum = v.groupIdNumList.indexOf(_this12.idNum);
                if (indexNum !== -1) {
                  v.groupIdNumList.splice(indexNum, 1);
                }
              }
            });
            return selfAudioUnitList.splice(0, selfAudioUnitList.length);
          };
          _createClass(Group, [{
            key: "isPlay",
            get: /** 播放状态 */
            function get() {
              return this._isPlay;
            }

            /** 停止状态 */
          }, {
            key: "isStop",
            get: function get() {
              return this._isStop;
            }

            /** 音量 */
          }, {
            key: "volumeNum",
            get: function get() {
              return this._volumeNum;
            },
            set: function set(valueNum_) {
              // 参数安检
              {
                if (valueNum_ > 1) {
                  valueNum_ = 1;
                }
                if (valueNum_ < 0) {
                  valueNum_ = 0;
                }
              }

              // 设置音量
              {
                this._volumeNum = valueNum_;
                this.audioUnitList.forEach(function (v) {
                  // eslint-disable-next-line no-self-assign
                  v.updateVolume();
                });
              }
            }
          }]);
          return Group;
        }();
        _MKAudioBase_.Group = Group;
        var Unit = _MKAudioBase_.Unit = PrivateUnit;
      })(MKAudioBase_ || (MKAudioBase_ = exports('MKAudioBase_', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKAudioCommon.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKLogger.ts', './MKAudioBase.ts', './MKObjectPool.ts', './MKRelease.ts'], function (exports) {
  var _inheritsLoose, _createClass, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, AudioSource, Node, director, Director, MKLogger, MKAudioBase_, MKAudioBase, MKObjectPool, MKRelease;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Node = module.Node;
      director = module.director;
      Director = module.Director;
    }, function (module) {
      MKLogger = module.default;
    }, function (module) {
      MKAudioBase_ = module.MKAudioBase_;
      MKAudioBase = module.default;
    }, function (module) {
      MKObjectPool = module.default;
    }, function (module) {
      MKRelease = module.default;
    }],
    execute: function () {
      exports('MKAudioCommon_', void 0);
      cclegacy._RF.push({}, "ac443Y+7dlBdYnjBrHXyrOe", "MKAudioCommon", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * 通用音频
       * @noInheritDoc
       * @remarks
       *
       * - 引擎 bug：3.7.2 以下版本不能同时播放两个以上的音频 -> https://github.com/cocos/cocos-engine/issues/14175
       *
       * - 引擎 bug：3.7.2 以下版本使用 @property 资源调用 play 只会有一个音频生效 -> https://github.com/cocos/cocos-engine/issues/14175
       */
      var MKAudioCommon = exports('default', /*#__PURE__*/function (_MKAudioBase) {
        _inheritsLoose(MKAudioCommon, _MKAudioBase);
        function MKAudioCommon() {
          var _this;
          _this = _MKAudioBase.call(this) || this;
          /* --------------- protected --------------- */
          /** 日志 */
          _this._log = new MKLogger("MKAudioCommon");
          /* --------------- private --------------- */
          /** 音频常驻节点 */
          _this._audioNode = void 0;
          /** 音频 uuid 索引表 */
          _this._audioUnitMap = new Map();
          /** 当前播放数量 */
          _this._currentPlayNum = 0;
          /** AudioSource 对象池 */
          _this._audioSourcePool = void 0;
          /** 倒计时集合 */
          _this._timerSet = new Set();
          MKAudioCommon._instance = _assertThisInitialized(_this);
          _this._constructor();
          return _this;
        }

        /* --------------- static --------------- */
        /** @internal */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        var _proto = MKAudioCommon.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        _proto.play = function play(audio_, config_) {
          var audio = audio_;

          // 安检
          if (!_MKAudioBase.prototype.play.call(this, audio, config_)) {
            return false;
          }
          if (audio.state === MKAudioBase_.State.Play) {
            // 等待播放
            if (audio.waitPlayNum !== -1) {
              ++audio.waitPlayNum;
              return true;
            }

            // 正常播放
            this._play(audio);
          } else {
            this._play(audio);
          }
          return true;
        };
        _proto.pause = function pause(audio_) {
          var _audio_$_event, _audio_$_event2;
          if (!audio_.isInit || audio_.state === MKAudioBase_.State.Pause || audio_.state === MKAudioBase_.State.Stop) {
            return;
          }
          audio_.audioSource.pause();
          audio_.state = MKAudioBase_.State.Pause;
          (_audio_$_event = audio_._event) == null || _audio_$_event.emit((_audio_$_event2 = audio_._event) == null ? void 0 : _audio_$_event2.key.pause);
        };
        _proto.stop = function stop(audio_) {
          var _audio_$_event3, _audio_$_event4;
          if (!audio_.isInit || audio_.state === MKAudioBase_.State.Stop) {
            return;
          }
          --this._currentPlayNum;
          this._log.debug("当前播放数量", this._currentPlayNum, "结束");
          audio_.state = MKAudioBase_.State.Stop;
          audio_.audioSource.stop();
          (_audio_$_event3 = audio_._event) == null || _audio_$_event3.emit((_audio_$_event4 = audio_._event) == null ? void 0 : _audio_$_event4.key.stop);
          // 回收 AudioSource
          this._audioSourcePool.put(audio_.audioSource);
          audio_.audioSource = null;
          // 重置进度
          audio_.currentTimeSNum = 0;
        }

        // eslint-disable-next-line @typescript-eslint/naming-convention
        ;

        _proto._add = function _add(audio_, groupIdNumList_) {
          if (!_MKAudioBase.prototype._add.call(this, audio_, groupIdNumList_)) {
            return false;
          }

          // 初始化完成
          audio_.isInit = true;
          return true;
        };
        _proto._getAudioUnit = function _getAudioUnit(init_) {
          return new MKAudioCommon_.PrivateUnit(init_);
        };
        _proto._play = function _play(audio_) {
          /** 上次状态 */
          var lastState = audio_.state;

          // 恢复播放
          if (audio_.state === MKAudioBase_.State.Pause) {
            var _audio_$_event5, _audio_$_event6;
            (_audio_$_event5 = audio_._event) == null || _audio_$_event5.emit((_audio_$_event6 = audio_._event) == null ? void 0 : _audio_$_event6.key.resume);
          }

          // 更新状态
          audio_.state = MKAudioBase_.State.Play;

          // 更新播放计数
          if (lastState === MKAudioBase_.State.Stop) {
            ++this._currentPlayNum;

            // 请求 AudioSource
            audio_.audioSource = this._audioSourcePool.get();
            audio_.audioSource.clip = audio_.clip;

            // 添加音频 uuid 索引表
            this._audioUnitMap.set(audio_.audioSource.uuid, audio_);
          }

          // 若超出 maxAudioChannel 继续播放则会停止之前播放的音频，故退出
          if (lastState === MKAudioBase_.State.Stop && this._currentPlayNum > AudioSource.maxAudioChannel) {
            this._log.warn("音频数量超出 maxAudioChannel, 停止当前音频播放");
            this.stop(audio_);
            return;
          }

          // 播放音频
          audio_.audioSource.play();
          if (lastState === MKAudioBase_.State.Stop) {
            this._log.debug("当前播放数量", this._currentPlayNum, "播放", audio_.clip.name);
          }
        }

        /** 构造 */;
        _proto._constructor = /*#__PURE__*/
        function () {
          var _constructor2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this$_audioSourcePoo,
              _this2 = this;
            var _this$_audioNode, scene;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  {
                    _context.next = 2;
                    break;
                  }
                case 2:
                  scene = director.getScene();
                  if (scene) {
                    _context.next = 7;
                    break;
                  }
                  _context.next = 6;
                  return new Promise(function (resolveFunc) {
                    director.once(Director.EVENT_AFTER_SCENE_LAUNCH, resolveFunc);
                  });
                case 6:
                  scene = director.getScene();
                case 7:
                  (_this$_audioNode = this._audioNode) == null || _this$_audioNode.destroy();
                  this._audioNode = new Node("audio");
                  scene.addChild(this._audioNode);
                  director.addPersistRootNode(this._audioNode);
                  // 节点池
                  (_this$_audioSourcePoo = this._audioSourcePool) == null || _this$_audioSourcePoo.clear();
                  this._audioSourcePool = new MKObjectPool.Sync({
                    clearFunc: function clearFunc(value) {
                      value.forEach(function (v) {
                        v.destroy();
                      });
                    },
                    createFunc: function createFunc() {
                      var audioSource = new AudioSource();
                      audioSource.node = _this2._audioNode;
                      return audioSource;
                    },
                    resetFunc: function resetFunc(value) {
                      // 自动播放
                      value.playOnAwake = false;
                      // 更新音频 uuid 索引表
                      _this2._audioUnitMap["delete"](value.uuid);
                      return value;
                    },
                    initFillNum: Math.floor(AudioSource.maxAudioChannel * 0.5),
                    maxHoldNum: AudioSource.maxAudioChannel
                  });

                  // 添加回调

                  this._audioNode.on(AudioSource.EventType.STARTED, function (audioComp) {
                    var audio = _this2._audioUnitMap.get(audioComp.uuid);
                    if (audio) {
                      _this2._nodeAudioStarted(audio);
                    }
                  }, this);
                  this._audioNode.on(AudioSource.EventType.ENDED, function (audioComp) {
                    var audio = _this2._audioUnitMap.get(audioComp.uuid);
                    if (audio) {
                      _this2._nodeAudioEnded(audio);
                    }
                  }, this);
                case 15:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function _constructor() {
            return _constructor2.apply(this, arguments);
          }
          return _constructor;
        }()
        /* ------------------------------- 节点事件 ------------------------------- */
        /** 播放开始回调 */;

        _proto._nodeAudioStarted = function _nodeAudioStarted(audio_) {
          var _audio_$_event7, _audio_$_event8;
          if (!audio_) {
            return;
          }
          (_audio_$_event7 = audio_._event) == null || _audio_$_event7.emit((_audio_$_event8 = audio_._event) == null ? void 0 : _audio_$_event8.key.play);
        }

        /** 播放结束回调 */;
        _proto._nodeAudioEnded = function _nodeAudioEnded(audio_) {
          if (!audio_) {
            return;
          }

          // 若为 stop 状态则表明已经手动停止
          if (audio_.state !== MKAudioBase_.State.Stop) {
            var _audio_$_event9, _audio_$_event10;
            --this._currentPlayNum;
            this._log.debug("当前播放数量", this._currentPlayNum, "结束");
            // 更新播放数据
            audio_.state = MKAudioBase_.State.Stop;
            (_audio_$_event9 = audio_._event) == null || _audio_$_event9.emit((_audio_$_event10 = audio_._event) == null ? void 0 : _audio_$_event10.key.end);
            // 回收 AudioSource
            this._audioSourcePool.put(audio_.audioSource);
            audio_.audioSource = null;
            // 重置进度
            audio_.currentTimeSNum = 0;
          }

          // 继续播放
          if (audio_.waitPlayNum > 0) {
            this.play(audio_);
            --audio_.waitPlayNum;
          }
        }

        /* ------------------------------- 全局事件 ------------------------------- */;
        _proto._eventRestart = function _eventRestart() {
          _MKAudioBase.prototype._eventRestart.call(this);
          this._timerSet.forEach(function (v) {
            return clearTimeout(v);
          });
          this._timerSet.clear();
        };
        return MKAudioCommon;
      }(MKAudioBase));
      MKAudioCommon._instance = void 0;
      var MKAudioCommon_;
      (function (_MKAudioCommon_, _dec, _class2) {
        var PrivateUnit = (_dec = ccclass("MKAudioCommon/Unit"), _dec(_class2 = /*#__PURE__*/function (_MKAudioBase_$Private) {
          _inheritsLoose(PrivateUnit, _MKAudioBase_$Private);
          function PrivateUnit(init_) {
            var _this3;
            _this3 = _MKAudioBase_$Private.call(this, init_) || this;
            /* --------------- private --------------- */
            /** 音量 */
            _this3._volumeNum = 1;
            /** 循环 */
            _this3._isLoop = false;
            /** 当前时间 */
            _this3._currentTimeSNum = 0;
            /** 音频组件 */
            _this3._audioSource = null;
            Object.assign(_assertThisInitialized(_this3), init_);
            return _this3;
          }

          /* --------------- public --------------- */
          /** 初始化状态 */
          var _proto2 = PrivateUnit.prototype;
          /* ------------------------------- 功能 ------------------------------- */
          /** 更新音量 */
          _proto2.updateVolume = function updateVolume() {
            // 更新音量
            this.volumeNum = this._volumeNum;
          };
          _proto2.release = function release() {
            var _this4 = this;
            // 删除音频组内的音频单元
            {
              MKAudioCommon._instance.getGroup(this.type).delAudio(this);
              this.groupIdNumList.forEach(function (v2Num) {
                MKAudioCommon._instance.getGroup(v2Num).delAudio(_this4);
              });
            }

            // 清理音频资源
            if (this.clip) {
              MKRelease.release(this.clip);
            }
          }

          /** 克隆 */;
          _proto2._clone = function _clone() {
            var newAudio = new PrivateUnit();
            newAudio.clip = this.clip;
            newAudio.type = this.type;
            newAudio._volumeNum = this._volumeNum;
            newAudio._isLoop = this._isLoop;
            newAudio._isInit = this._isInit;
            this.groupIdNumList.forEach(function (vNum) {
              MKAudioCommon._instance.getGroup(vNum).addAudio(newAudio);
            });
            return newAudio;
          }

          /* ------------------------------- get/set ------------------------------- */;
          _proto2._setIsInit = function _setIsInit(value_) {
            this._isInit = value_;

            // 初始化完成
            if (value_) {
              var _this$_event;
              (_this$_event = this._event) == null || _this$_event.emit(this._event.key.init);
            }
          };
          _proto2._setVolumeNum = function _setVolumeNum(value_) {
            // 参数安检
            if (value_ < 0) {
              value_ = 0;
            }
            this._volumeNum = value_;

            // 初始化检查
            if (!this.isInit) {
              return;
            }

            // 更新真实音量
            this.realVolumeNum = this.groupIdNumList.reduce(function (preNum, currNum) {
              return preNum * MKAudioCommon._instance.getGroup(currNum).volumeNum;
            }, this._volumeNum);

            // 设置音量
            if (this.audioSource) {
              this.audioSource.volume = this.realVolumeNum;
            }
          };
          _proto2._setIsLoop = function _setIsLoop(value_) {
            this._isLoop = value_;
            if (!this.audioSource) {
              return;
            }
            this.audioSource.loop = value_;
          };
          _proto2._getTotalTimeSNum = function _getTotalTimeSNum() {
            if (!this.audioSource) {
              return 0;
            }
            return this.audioSource.duration;
          };
          _proto2._getCurrTimeSNum = function _getCurrTimeSNum() {
            if (this.audioSource) {
              this._currentTimeSNum = this.audioSource.currentTime;
            }
            return this._currentTimeSNum;
          };
          _proto2._setCurrTimeSNum = function _setCurrTimeSNum(valueNum_) {
            this._currentTimeSNum = valueNum_;
            if (!this.audioSource) {
              return;
            }
            this.audioSource.currentTime = this._currentTimeSNum;
          };
          _proto2._setAudioSource = function _setAudioSource(value_) {
            this._audioSource = value_;

            // 更新组件数据
            if (value_) {
              this.volumeNum = this._volumeNum;
              this.isLoop = this._isLoop;
              this.currentTimeSNum = this._currentTimeSNum;
            }
          };
          _createClass(PrivateUnit, [{
            key: "isInit",
            get: function get() {
              return this._isInit;
            },
            set: function set(value_) {
              this._setIsInit(value_);
            }
          }, {
            key: "volumeNum",
            get: function get() {
              return this._volumeNum;
            },
            set: function set(valueNum_) {
              this._setVolumeNum(valueNum_);
            }
          }, {
            key: "isLoop",
            get: function get() {
              return this._isLoop;
            },
            set: function set(value_) {
              this._setIsLoop(value_);
            }
          }, {
            key: "totalTimeSNum",
            get: function get() {
              return this._getTotalTimeSNum();
            }
          }, {
            key: "currentTimeSNum",
            get: function get() {
              return this._getCurrTimeSNum();
            },
            set: function set(value_) {
              this._setCurrTimeSNum(value_);
            }
          }, {
            key: "audioSource",
            get: function get() {
              return this._audioSource;
            },
            set: function set(value_) {
              this._setAudioSource(value_);
            }
          }]);
          return PrivateUnit;
        }(MKAudioBase_.PrivateUnit)) || _class2);
        _MKAudioCommon_.PrivateUnit = PrivateUnit;
        var Unit = _MKAudioCommon_.Unit = PrivateUnit;
      })(MKAudioCommon_ || (MKAudioCommon_ = exports('MKAudioCommon_', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKAudioExport.ts", ['cc', './MKAudioBase.ts', './MKAudioCommon.ts', './MKAudioWX.ts'], function (exports) {
  var cclegacy, MKAudioBase_, MKAudioCommon_, MKAudioCommon, MKAudioWX_, MKAudioWX;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MKAudioBase_ = module.MKAudioBase_;
      var _setter = {};
      _setter.MKAudio_ = module.MKAudioBase_;
      _setter.audio = module.default;
      exports(_setter);
    }, function (module) {
      MKAudioCommon_ = module.MKAudioCommon_;
      MKAudioCommon = module.default;
    }, function (module) {
      MKAudioWX_ = module.MKAudioWX_;
      MKAudioWX = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b5873xPJDlKB5fAJtif23uq", "MKAudioExport", undefined);

      // 重定义 audio_，保持类型不变
      Object.assign(MKAudioBase_, window.wx ? MKAudioWX_ : MKAudioCommon_);

      /**
       * 音频管理器
       * @remarks
       *
       * - 音频分组，支持对不同类型的音频批量控制
       *
       * - 支持(动态/静态)音频
       *
       * - (通用/微信)版本
       *
       * - 增加对 playOnShot 接口的事件支持
       *
       * - 通用版本超出播放数量限制后停止当前音频而不是之前的
       */
      var mkAudio = exports('mkAudio', window.wx ? new MKAudioWX() : new MKAudioCommon());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKAudioWX.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKLogger.ts', './MKAudioBase.ts', './MKRelease.ts'], function (exports) {
  var _inheritsLoose, _createClass, _assertThisInitialized, cclegacy, _decorator, MKLogger, MKAudioBase_, MKAudioBase, MKRelease;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      MKLogger = module.default;
    }, function (module) {
      MKAudioBase_ = module.MKAudioBase_;
      MKAudioBase = module.default;
    }, function (module) {
      MKRelease = module.default;
    }],
    execute: function () {
      exports('MKAudioWX_', void 0);
      cclegacy._RF.push({}, "9c4f6pao4dEbaliBkIKAhfj", "MKAudioWX", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * 微信音频
       * @noInheritDoc
       */
      var MKAudioWX = exports('default', /*#__PURE__*/function (_MKAudioBase) {
        _inheritsLoose(MKAudioWX, _MKAudioBase);
        function MKAudioWX() {
          var _this;
          _this = _MKAudioBase.call(this) || this;
          /* --------------- protected --------------- */
          /** 日志 */
          _this._log = new MKLogger("MKAudioWX");
          MKAudioWX._instance = _assertThisInitialized(_this);
          return _this;
        }

        /* --------------- static --------------- */
        /** @internal */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        var _proto = MKAudioWX.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        _proto.play = function play(audio_, config_) {
          // 安检
          if (!_MKAudioBase.prototype.play.call(this, audio_, config_) || !audio_.clip) {
            return false;
          }
          if (audio_.state === MKAudioBase_.State.Play) {
            // 等待播放
            if (audio_.waitPlayNum !== -1) {
              ++audio_.waitPlayNum;
              return true;
            }
            audio_.context.play();
          }
          // 恢复播放
          else if (audio_.state === MKAudioBase_.State.Pause) {
            var _audio_$_event, _audio_$_event2;
            audio_.context.play();
            (_audio_$_event = audio_._event) == null || _audio_$_event.emit((_audio_$_event2 = audio_._event) == null ? void 0 : _audio_$_event2.key.resume);
          }
          // 播放
          else {
            var _audio_$_event3, _audio_$_event4;
            audio_.context.src = audio_.clip.nativeUrl;
            audio_.playFinishFunc = this._onAudioEnded.bind(this, audio_);
            audio_.context.onEnded(audio_.playFinishFunc);
            audio_.context.play();
            (_audio_$_event3 = audio_._event) == null || _audio_$_event3.emit((_audio_$_event4 = audio_._event) == null ? void 0 : _audio_$_event4.key.play);
          }

          // 更新状态
          audio_.state = MKAudioBase_.State.Play;
          return true;
        };
        _proto.pause = function pause(audio_) {
          var _audio_$_event5, _audio_$_event6;
          if (audio_.state === MKAudioBase_.State.Pause || audio_.state === MKAudioBase_.State.Stop) {
            return;
          }
          var pauseTimeNum = audio_.context.currentTime;
          audio_.context.pause();
          audio_.context.seek(pauseTimeNum);
          audio_.state = MKAudioBase_.State.Pause;
          (_audio_$_event5 = audio_._event) == null || _audio_$_event5.emit((_audio_$_event6 = audio_._event) == null ? void 0 : _audio_$_event6.key.pause);
        };
        _proto.stop = function stop(audio_) {
          var _audio_$_event7, _audio_$_event8;
          if (audio_.state === MKAudioBase_.State.Stop) {
            return;
          }
          audio_.context.pause();
          audio_.state = MKAudioBase_.State.Stop;
          (_audio_$_event7 = audio_._event) == null || _audio_$_event7.emit((_audio_$_event8 = audio_._event) == null ? void 0 : _audio_$_event8.key.stop);
        }

        // eslint-disable-next-line @typescript-eslint/naming-convention
        ;

        _proto._add = function _add(audio_, groupIdNumList_) {
          var isResult = _MKAudioBase.prototype._add.call(this, audio_, groupIdNumList_);

          // 初始化完成
          audio_.isInit = true;
          return isResult;
        };
        _proto._getAudioUnit = function _getAudioUnit(init_) {
          return new MKAudioWX_.PrivateUnit(init_);
        }

        /* ------------------------------- 自定义事件 ------------------------------- */
        /** 播放完成 */;
        _proto._onAudioEnded = function _onAudioEnded(audio_) {
          var _audio_$_event9, _audio_$_event10;
          // 更新状态
          audio_.state = MKAudioBase_.State.Stop;
          audio_.playFinishFunc = null;

          // 事件通知
          (_audio_$_event9 = audio_._event) == null || _audio_$_event9.emit((_audio_$_event10 = audio_._event) == null ? void 0 : _audio_$_event10.key.end);

          // 继续播放
          if (audio_.waitPlayNum > 0) {
            this.play(audio_);
            --audio_.waitPlayNum;
          }
        };
        return MKAudioWX;
      }(MKAudioBase));
      MKAudioWX._instance = void 0;
      var MKAudioWX_;
      (function (_MKAudioWX_, _dec, _class2) {
        var PrivateUnit = (_dec = ccclass("MKAudioWX/Unit"), _dec(_class2 = /*#__PURE__*/function (_MKAudioBase_$Private) {
          _inheritsLoose(PrivateUnit, _MKAudioBase_$Private);
          function PrivateUnit(init_) {
            var _this2;
            _this2 = _MKAudioBase_$Private.call(this, init_) || this;
            /* --------------- public --------------- */
            /** 音频上下文 */
            _this2.context = wx.createInnerAudioContext();
            /** 播放完成回调 */
            _this2.playFinishFunc = void 0;
            /* --------------- private --------------- */
            /** 音量 */
            _this2._volumeNum = 1;
            /** 循环 */
            _this2._isLoop = false;
            Object.assign(_assertThisInitialized(_this2), init_);
            return _this2;
          }
          var _proto2 = PrivateUnit.prototype;
          /* ------------------------------- 功能 ------------------------------- */
          /** 更新音量 */
          _proto2.updateVolume = function updateVolume() {
            // 更新音量
            this.volumeNum = this._volumeNum;
          };
          _proto2.release = function release() {
            var _this3 = this;
            // 删除音频组内的音频单元
            {
              MKAudioWX._instance.getGroup(this.type).delAudio(this);
              this.groupIdNumList.forEach(function (v2Num) {
                MKAudioWX._instance.getGroup(v2Num).delAudio(_this3);
              });
            }

            // 清理音频资源
            if (this.clip) {
              MKRelease.release(this.clip);
            }
          }

          /** 克隆 */;
          _proto2._clone = function _clone() {
            var newAudio = new PrivateUnit();
            newAudio.clip = this.clip;
            newAudio.type = this.type;
            newAudio._volumeNum = this._volumeNum;
            newAudio._isLoop = this._isLoop;
            newAudio._isInit = this._isInit;
            this.groupIdNumList.forEach(function (vNum) {
              MKAudioWX._instance.getGroup(vNum).addAudio(newAudio);
            });
            return newAudio;
          }

          /* ------------------------------- get/set ------------------------------- */;
          _proto2._setIsInit = function _setIsInit(value_) {
            this._isInit = value_;
            this.volumeNum = this._volumeNum;
            this.isLoop = this._isLoop;
            // 初始化完成
            if (value_) {
              var _this$_event;
              (_this$_event = this._event) == null || _this$_event.emit(this._event.key.init);
            }
          };
          _proto2._setVolumeNum = function _setVolumeNum(valueNum_) {
            // 参数安检
            {
              if (valueNum_ > 1) {
                valueNum_ = 1;
              }
              if (valueNum_ < 0) {
                valueNum_ = 0;
              }
            }

            // 设置音量
            {
              this._volumeNum = valueNum_;

              // 初始化检查
              if (!this.isInit) {
                return;
              }

              // 更新真实音量
              this.realVolumeNum = this.groupIdNumList.reduce(function (preNum, currNum) {
                return preNum * MKAudioWX._instance.getGroup(currNum).volumeNum;
              }, this._volumeNum);

              // 更新音量
              this.context.volume = this.realVolumeNum;
            }
          };
          _createClass(PrivateUnit, [{
            key: "isInit",
            get: /** 初始化状态 */
            function get() {
              return this._isInit;
            },
            set: function set(value_) {
              this._setIsInit(value_);
            }
          }, {
            key: "volumeNum",
            get: function get() {
              return this._volumeNum;
            },
            set: function set(valueNum_) {
              this._setVolumeNum(valueNum_);
            }
          }, {
            key: "isLoop",
            get: function get() {
              return this._isLoop;
            },
            set: function set(value_) {
              this.context.loop = this._isLoop = value_;
            }
          }, {
            key: "totalTimeSNum",
            get: function get() {
              return this.context.duration;
            }
          }, {
            key: "currentTimeSNum",
            get: function get() {
              return this.context.currentTime;
            },
            set: function set(valueNum_) {
              this.context.currentTime = valueNum_;
            }
          }]);
          return PrivateUnit;
        }(MKAudioBase_.PrivateUnit)) || _class2);
        _MKAudioWX_.PrivateUnit = PrivateUnit;
        var Unit = _MKAudioWX_.Unit = PrivateUnit;
      })(MKAudioWX_ || (MKAudioWX_ = exports('MKAudioWX_', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKBundle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKInstanceBase.ts', './MKLogger.ts', './MKEventTarget.ts', './MKStatusTask.ts', './MKToolFunc.ts', './MKRelease.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, _assertThisInitialized, cclegacy, game, Game, director, Director, assetManager, js, Component, NodePool, MKInstanceBase, MKLogger, mkLog, MKEventTarget, MKStatusTask, mkToolFunc, MKRelease;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
      Game = module.Game;
      director = module.director;
      Director = module.Director;
      assetManager = module.assetManager;
      js = module.js;
      Component = module.Component;
      NodePool = module.NodePool;
    }, function (module) {
      MKInstanceBase = module.default;
    }, function (module) {
      MKLogger = module.default;
      mkLog = module.mkLog;
    }, function (module) {
      MKEventTarget = module.default;
    }, function (module) {
      MKStatusTask = module.default;
    }, function (module) {
      mkToolFunc = module.default;
    }, function (module) {
      MKRelease = module.default;
    }],
    execute: function () {
      exports('MKBundle_', void 0);
      cclegacy._RF.push({}, "a067fMwBVdL5YcjBygaeb5s", "MKBundle", undefined);
      /**
       * Bundle 管理器
       * @noInheritDoc
       * @remarks
       *
       * - 封装(加载/预加载)场景为 loadScene
       *
       * - 支持(远程/本地) bundle
       *
       * - 支持 bundle 热更
       *
       * - 封装(bundle/scene)切换事件
       *
       * - 支持 bundle 管理器，用于子游戏管理
       */
      var MKBundle = exports('MKBundle', /*#__PURE__*/function (_MKInstanceBase) {
        _inheritsLoose(MKBundle, _MKInstanceBase);
        function MKBundle() {
          var _this;
          _this = _MKInstanceBase.call(this) || this;
          /* --------------- public --------------- */
          /** 事件 */
          _this.event = new MKEventTarget();
          /** bundle列表 */
          _this.bundleMap = new Map();
          /* --------------- private --------------- */
          /** 初始化任务 */
          _this._initTask = new MKStatusTask(false);
          /** 引擎初始化任务 */
          _this._engineInitTask = new MKStatusTask(false);
          /** 日志 */
          _this._log = new MKLogger("MKBundle");
          /** 当前场景bundle */
          _this._bundleStr = void 0;
          /** 当前场景名 */
          _this._sceneStr = void 0;
          /** 上个场景bundle */
          _this._preBundleStr = void 0;
          /** 上个场景名 */
          _this._preSceneStr = void 0;
          /** 切换场景状态 */
          _this._isSwitchScene = false;

          // 引擎初始化事件
          game.once(Game.EVENT_GAME_INITED, function () {
            _this._engineInitTask.finish(true);
          });

          // 模块初始化事件
          director.once(Director.EVENT_BEFORE_SCENE_LAUNCH, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(scene) {
            var _this$bundleMap$get, _scene$name;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!window["cc"].GAME_VIEW) {
                    _context.next = 3;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolveFunc) {
                    director.once(Director.EVENT_BEFORE_SCENE_LAUNCH, resolveFunc);
                  });
                case 3:
                  _context.next = 5;
                  return (_this$bundleMap$get = _this.bundleMap.get("main")) == null || (_this$bundleMap$get = _this$bundleMap$get.manage) == null || _this$bundleMap$get.init == null ? void 0 : _this$bundleMap$get.init();
                case 5:
                  // open
                  _this._setBundleStr("main");
                  _this._sceneStr = (_scene$name = scene.name) != null ? _scene$name : "";
                  _this._initTask.finish(true);
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })), _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MKBundle.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /**
         * 设置 bundle 数据
         * @param bundleInfo_ bundle 信息
         */
        _proto.set = function set(bundleInfo_) {
          var bundleData = this.bundleMap.get(bundleInfo_.bundleStr);

          // 更新旧数据
          if (bundleData) {
            Object.assign(bundleData, bundleInfo_);
          }
          // 添加新数据
          else {
            this.bundleMap.set(bundleInfo_.bundleStr, bundleData = new MKBundle_.BundleData(bundleInfo_));
          }
        }

        /**
         * 加载 bundle
         * @param args_ bundle 名 | 加载配置
         * @returns
         */;
        _proto.load = /*#__PURE__*/
        function () {
          var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(args_) {
            var _this$bundleMap$get2,
              _this2 = this;
            var loadConfig, bundleInfo, bundle;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  /** 加载配置 */
                  loadConfig = typeof args_ === "string" ? new MKBundle_.LoadConfig({
                    bundleStr: args_
                  }) : args_;
                  if (loadConfig != null && loadConfig.bundleStr) {
                    _context2.next = 4;
                    break;
                  }
                  this._log.error("不存在 bundle 名");
                  return _context2.abrupt("return", null);
                case 4:
                  /** bundle 信息 */
                  bundleInfo = (_this$bundleMap$get2 = this.bundleMap.get(loadConfig.bundleStr)) != null ? _this$bundleMap$get2 : new MKBundle_.BundleInfo(loadConfig);
                  _context2.next = 7;
                  return this._engineInitTask.task;
                case 7:
                  /** bundle 资源 */
                  bundle = assetManager.getBundle(bundleInfo.bundleStr);
                  if (!bundle) {
                    _context2.next = 11;
                    break;
                  }
                  loadConfig.progressCallbackFunc == null || loadConfig.progressCallbackFunc(1, 1);
                  return _context2.abrupt("return", bundle);
                case 11:
                  return _context2.abrupt("return", new Promise(function (resolveFunc) {
                    var _bundleInfo$originStr;
                    if (!bundleInfo) {
                      return;
                    }
                    assetManager.loadBundle((_bundleInfo$originStr = bundleInfo.originStr) != null ? _bundleInfo$originStr : bundleInfo.bundleStr, {
                      version: bundleInfo.versionStr,
                      onFileProgress: loadConfig.progressCallbackFunc
                    }, function (error, bundle) {
                      if (error) {
                        _this2._log.error("bundle加载失败", error);
                        resolveFunc(null);
                        return;
                      }

                      // 非远程 bundle 需要模拟进度回调
                      if (!bundleInfo.originStr) {
                        loadConfig.progressCallbackFunc == null || loadConfig.progressCallbackFunc(1, 1);
                      }

                      // 添加bundle信息
                      if (!_this2.bundleMap.has(bundleInfo.bundleStr)) {
                        _this2.bundleMap.set(bundleInfo.bundleStr, bundleInfo);
                      }
                      resolveFunc(bundle);
                    });
                  }));
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function load(_x2) {
            return _load.apply(this, arguments);
          }
          return load;
        }()
        /**
         * 切换场景
         * @param sceneStr_ 场景名
         * @param config_ 切换配置
         * @returns
         */;

        _proto.loadScene = /*#__PURE__*/
        function () {
          var _loadScene = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(sceneStr_, config_) {
            var _this$bundleMap$get3,
              _this3 = this;
            var config, bundleInfo, bundle, isPreload, _progressCallbackFunc;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (sceneStr_) {
                    _context4.next = 3;
                    break;
                  }
                  this._log.error("场景名错误", sceneStr_);
                  return _context4.abrupt("return", false);
                case 3:
                  _context4.next = 5;
                  return this._initTask.task;
                case 5:
                  config = new MKBundle_.SwitchSceneConfig(config_);
                  bundleInfo = (_this$bundleMap$get3 = this.bundleMap.get(config.bundleStr)) != null ? _this$bundleMap$get3 : new MKBundle_.BundleInfo({
                    bundleStr: config.bundleStr
                  });
                  if (!(config.bundleStr !== this._bundleStr && !config.isPreload)) {
                    _context4.next = 10;
                    break;
                  }
                  _context4.next = 10;
                  return Promise.all(this.event.request(this.event.key.bundleReadySwitch, {
                    currBundleStr: this._bundleStr,
                    nextBundleStr: config.bundleStr
                  }));
                case 10:
                  _context4.next = 12;
                  return this.load(bundleInfo);
                case 12:
                  bundle = _context4.sent;
                  if (bundle) {
                    _context4.next = 15;
                    break;
                  }
                  return _context4.abrupt("return", false);
                case 15:
                  /** 预加载状态 */
                  isPreload = false; // 预加载
                  if (!config.progressCallbackFunc) {
                    _context4.next = 23;
                    break;
                  }
                  _progressCallbackFunc = config.progressCallbackFunc;
                  _context4.next = 20;
                  return new Promise(function (resolveFunc) {
                    bundle == null || bundle.preloadScene(sceneStr_, _progressCallbackFunc, function (error) {
                      if (error) {
                        _this3._log.error(error);
                      }
                      resolveFunc(!error);
                    });
                  });
                case 20:
                  isPreload = _context4.sent;
                  _context4.next = 26;
                  break;
                case 23:
                  _context4.next = 25;
                  return new Promise(function (resolveFunc) {
                    bundle == null || bundle.preloadScene(sceneStr_, function (error) {
                      if (error) {
                        _this3._log.error(error);
                      }
                      resolveFunc(!error);
                    });
                  });
                case 25:
                  isPreload = _context4.sent;
                case 26:
                  if (!(config.isPreload || !isPreload)) {
                    _context4.next = 28;
                    break;
                  }
                  return _context4.abrupt("return", isPreload);
                case 28:
                  if (config.isPreload) {
                    _context4.next = 36;
                    break;
                  }
                  this._isSwitchScene = true;
                  // 切换 bundle 事件
                  if (!(bundle.name !== this._bundleStr)) {
                    _context4.next = 33;
                    break;
                  }
                  _context4.next = 33;
                  return Promise.all(this.event.request(this.event.key.beforeBundleSwitch, {
                    currBundleStr: this._bundleStr,
                    nextBundleStr: config.bundleStr
                  }));
                case 33:
                  _context4.next = 35;
                  return Promise.all(this.event.request(this.event.key.beforeSceneSwitch, {
                    currSceneStr: this._sceneStr,
                    nextSceneStr: sceneStr_
                  }));
                case 35:
                  return _context4.abrupt("return", new Promise(function (resolveFunc) {
                    bundle == null || bundle.loadScene(sceneStr_, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(error, sceneAsset) {
                      var _this3$bundleMap$get;
                      var manage;
                      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                        while (1) switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!error) {
                              _context3.next = 4;
                              break;
                            }
                            resolveFunc(false);
                            _this3._log.error(error);
                            return _context3.abrupt("return");
                          case 4:
                            /** 管理器 */
                            manage = (_this3$bundleMap$get = _this3.bundleMap.get(bundle.name)) == null ? void 0 : _this3$bundleMap$get.manage; // 初始化
                            if (!manage) {
                              _context3.next = 8;
                              break;
                            }
                            _context3.next = 8;
                            return manage.init == null ? void 0 : manage.init();
                          case 8:
                            // 运行场景
                            director.runScene(sceneAsset, config == null ? void 0 : config.beforeLoadCallbackFunc, function (error, scene) {
                              // 更新数据
                              if (!error) {
                                _this3._setBundleStr(bundle.name);
                                _this3._preSceneStr = _this3.sceneStr;
                                _this3._setSceneStr(sceneStr_);
                              } else if (manage) {
                                manage.close();
                              }
                              config.unloadedCallbackFunc == null || config.unloadedCallbackFunc();
                              config.launchedCallbackFunc == null || config.launchedCallbackFunc(error, scene);
                              resolveFunc(!error);
                            });
                          case 9:
                          case "end":
                            return _context3.stop();
                        }
                      }, _callee3);
                    })));
                  }).then(function (isSuccess) {
                    _this3._isSwitchScene = false;
                    return isSuccess;
                  }));
                case 36:
                  return _context4.abrupt("return", false);
                case 37:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function loadScene(_x3, _x4) {
            return _loadScene.apply(this, arguments);
          }
          return loadScene;
        }()
        /**
         * 重新加载 bundle
         * @param bundleInfo_ bundle 信息
         * @returns
         */;

        _proto.reload = /*#__PURE__*/
        function () {
          var _reload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(bundleInfo_) {
            var _this4 = this,
              _bundleScriptTab$bund;
            var bundleScriptTab, systemJs, scriptCacheTab, bundleRoot, _bundleInfo_$ccclassR, reg, bundle;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  {
                    _context5.next = 3;
                    break;
                  }
                case 3:
                  if (bundleInfo_.versionStr) {
                    _context5.next = 6;
                    break;
                  }
                  this._log.error("不存在版本号");
                  return _context5.abrupt("return", null);
                case 6:
                  _context5.next = 8;
                  return this._engineInitTask.task;
                case 8:
                  if (!(this.bundleStr === bundleInfo_.bundleStr)) {
                    _context5.next = 13;
                    break;
                  }
                  _context5.next = 11;
                  return new Promise(function (resolveFunc) {
                    _this4.event.once(_this4.event.key.bundleReadySwitch, function () {
                      return resolveFunc();
                    }, _this4);
                  });
                case 11:
                  director.getScene().destroyAllChildren();
                  director.getScene().removeAllChildren();
                case 13:
                  /** bundle 脚本表 */
                  bundleScriptTab = {};
                  /** js 系统 */
                  systemJs = window["System"];
                  /** 脚本缓存表 */
                  scriptCacheTab = systemJs[Reflect.ownKeys(systemJs).find(function (v) {
                    return typeof v === "symbol";
                  })]; // 更新 bundle 信息
                  this.set(bundleInfo_);

                  // 初始化 bundle 脚本表
                  Object.keys(scriptCacheTab).forEach(function (vStr) {
                    var current = scriptCacheTab[vStr];
                    var parent = scriptCacheTab[vStr].p;
                    if (!(parent != null && parent.d) || current.id !== parent.id) {
                      return;
                    }
                    var nameStr = parent.id.slice(parent.id.lastIndexOf("/") + 1);
                    bundleScriptTab[nameStr] = parent;
                  });
                  bundleRoot = (_bundleScriptTab$bund = bundleScriptTab[bundleInfo_.bundleStr]) == null ? void 0 : _bundleScriptTab$bund.d[0]; // 清理脚本缓存
                  if (scriptCacheTab["virtual:///prerequisite-imports/" + bundleInfo_.bundleStr]) {
                    systemJs["delete"](scriptCacheTab["virtual:///prerequisite-imports/" + bundleInfo_.bundleStr].id);
                    delete scriptCacheTab["virtual:///prerequisite-imports/" + bundleInfo_.bundleStr];
                  }
                  if (bundleRoot) {
                    bundleRoot.d.forEach(function (v) {
                      systemJs["delete"](v.id);
                    });
                    systemJs["delete"](bundleRoot.id);
                    systemJs["delete"](bundleRoot.p.id);
                  }
                  // 清理导出的 ccclass
                  if (bundleRoot) {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    bundleRoot.d.forEach(function (v) {
                      if (!v.C) {
                        return;
                      }
                      for (var k2Str in v.C) {
                        if (js.isChildClassOf(v.C[k2Str], Component)) {
                          js.unregisterClass(v.C[k2Str]);
                        }
                      }
                    });
                  }

                  // 清理名称匹配的 ccclass
                  reg = (_bundleInfo_$ccclassR = bundleInfo_.ccclassRegexp) != null ? _bundleInfo_$ccclassR : new RegExp(bundleInfo_.bundleStr + "(_|/)");
                  Object.keys(js._registeredClassNames || js._nameToClass).filter(function (vStr) {
                    return vStr.match(reg) !== null;
                  }).forEach(function (vStr) {
                    js.unregisterClass(js.getClassByName(vStr));
                  });
                  bundle = assetManager.getBundle(bundleInfo_.bundleStr); // 清理 bundle 资源
                  if (bundle) {
                    if (bundleInfo_.bundleStr !== "main") {
                      bundle.releaseAll();
                    }
                    assetManager.removeBundle(bundle);
                  }

                  // 更新版本号

                  if (!assetManager.downloader.bundleVers) {
                    assetManager.downloader.bundleVers = {};
                  }
                  assetManager.downloader.bundleVers[bundleInfo_.bundleStr] = bundleInfo_.versionStr;
                  return _context5.abrupt("return", this.load(bundleInfo_));
                case 29:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function reload(_x7) {
            return _reload.apply(this, arguments);
          }
          return reload;
        }() /* ------------------------------- get/set ------------------------------- */;
        _proto._setBundleStr = /*#__PURE__*/
        function () {
          var _setBundleStr2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(valueStr_) {
            var _preBundleInfo$manage, preBundleInfo, bundleInfo;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  this._preBundleStr = this._bundleStr;
                  this._bundleStr = valueStr_;

                  // bundle 切换事件通知
                  if (!(this._bundleStr !== this._preBundleStr)) {
                    _context6.next = 10;
                    break;
                  }
                  /** 上个 bundle */
                  preBundleInfo = this.bundleMap.get(this._preBundleStr);
                  /** 当前 bundle */
                  bundleInfo = this.bundleMap.get(this._bundleStr); // 销毁上个 bundle
                  preBundleInfo == null || (_preBundleInfo$manage = preBundleInfo.manage) == null || _preBundleInfo$manage.close();
                  // 加载当前 bundle
                  if (!(bundleInfo != null && bundleInfo.manage)) {
                    _context6.next = 9;
                    break;
                  }
                  _context6.next = 9;
                  return bundleInfo.manage.open();
                case 9:
                  this.event.emit(this.event.key.afterBundleSwitch, {
                    currBundleStr: this._bundleStr,
                    preBundleStr: this._preBundleStr
                  });
                case 10:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function _setBundleStr(_x8) {
            return _setBundleStr2.apply(this, arguments);
          }
          return _setBundleStr;
        }();
        _proto._setSceneStr = function _setSceneStr(valueStr_) {
          this._preSceneStr = this._sceneStr;
          this._sceneStr = valueStr_;

          // 场景切换事件通知
          if (this._sceneStr !== this._preSceneStr) {
            this.event.emit(this.event.key.afterSceneSwitch, {
              currSceneStr: this._sceneStr,
              preSceneStr: this._preSceneStr
            });
          }
        };
        _createClass(MKBundle, [{
          key: "preBundleStr",
          get: /** 当前场景bundle */
          function get() {
            return this._preBundleStr;
          }

          /** 当前场景名 */
        }, {
          key: "preSceneStr",
          get: function get() {
            return this._preSceneStr;
          }

          /** 切换场景状态 */
        }, {
          key: "isSwitchScene",
          get: function get() {
            return this._isSwitchScene;
          }

          /** 当前场景bundle */
        }, {
          key: "bundleStr",
          get: function get() {
            return this._bundleStr;
          }

          /** 当前场景名 */
        }, {
          key: "sceneStr",
          get: function get() {
            return this._sceneStr;
          }
        }]);
        return MKBundle;
      }(MKInstanceBase));
      var MKBundle_;
      (function (_MKBundle_) {
        var BundleInfo = function BundleInfo(init_) {
          /**
           * bundle名
           * @remarks
           * getBundle 时使用
           */
          this.bundleStr = void 0;
          /** 版本 */
          this.versionStr = void 0;
          /**
           * 资源路径
           * @defaultValue
           * this.bundleStr
           * @remarks
           * loadBundle 时使用，不存在时将使用 bundleStr 进行 loadBundle
           */
          this.originStr = void 0;
          Object.assign(this, init_);
        };
        _MKBundle_.BundleInfo = BundleInfo;
        var BundleData = /*#__PURE__*/function (_BundleInfo) {
          _inheritsLoose(BundleData, _BundleInfo);
          function BundleData(init_) {
            var _this5;
            _this5 = _BundleInfo.call(this, init_) || this;
            /** bundle 管理器 */
            _this5.manage = void 0;
            Object.assign(_assertThisInitialized(_this5), init_);
            return _this5;
          }
          return BundleData;
        }(BundleInfo);
        _MKBundle_.BundleData = BundleData;
        var LoadConfig = /*#__PURE__*/function (_BundleInfo2) {
          _inheritsLoose(LoadConfig, _BundleInfo2);
          function LoadConfig(init_) {
            var _this6;
            _this6 = _BundleInfo2.call(this, init_) || this;
            /** 加载回调 */
            _this6.progressCallbackFunc = void 0;
            Object.assign(_assertThisInitialized(_this6), init_);
            return _this6;
          }
          return LoadConfig;
        }(BundleInfo);
        _MKBundle_.LoadConfig = LoadConfig;
        var ReloadBundleInfo = /*#__PURE__*/function (_LoadConfig) {
          _inheritsLoose(ReloadBundleInfo, _LoadConfig);
          function ReloadBundleInfo(init_) {
            var _this7;
            _this7 = _LoadConfig.call(this, init_) || this;
            /** 匹配 ccclass 名称正则表达式 */
            _this7.ccclassRegexp = void 0;
            Object.assign(_assertThisInitialized(_this7), init_);
            return _this7;
          }
          return ReloadBundleInfo;
        }(LoadConfig);
        _MKBundle_.ReloadBundleInfo = ReloadBundleInfo;
        var SwitchSceneConfig = function SwitchSceneConfig(init_) {
          /**
           * bundle名
           * @remarks
           * getBundle 时使用
           */
          this.bundleStr = void 0;
          /** 预加载 */
          this.isPreload = void 0;
          /** 加载前调用的函数 */
          this.beforeLoadCallbackFunc = void 0;
          /** 启动后调用的函数 */
          this.launchedCallbackFunc = void 0;
          /** 场景卸载后回调 */
          this.unloadedCallbackFunc = void 0;
          Object.assign(this, init_);
        };
        _MKBundle_.SwitchSceneConfig = SwitchSceneConfig;
        var BundleManageBase = /*#__PURE__*/function () {
          function BundleManageBase() {
            var _this8 = this;
            /** 管理器有效状态 */
            this.isValid = false;
            /** 节点池表 */
            this.nodePoolTab = void 0;
            /** 事件对象 */
            this.event = void 0;
            /** 数据共享器 */
            // @weak-start-include-MKDataSharer
            this.data = void 0;
            // @weak-end
            /**
             * 事件对象列表
             * @internal
             */
            this.eventTargetList = [];
            /* --------------- protected --------------- */
            /** 释放管理器 */
            this._releaseManage = new MKRelease();
            // 添加至 bundle 数据
            setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    {
                      _context7.next = 4;
                      break;
                    }
                  case 3:
                    _this8.open();
                  case 4:
                    MKBundle.instance().set({
                      bundleStr: _this8.nameStr,
                      manage: _this8
                    });
                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            })), 0);

            // 对象池
            this.nodePoolTab = new Proxy(js.createMap(true), {
              get: function get(target_, key_) {
                if (!target_[key_]) {
                  target_[key_] = new NodePool(key_);
                }
                return target_[key_];
              }
            });

            // 自动执行生命周期
            mkToolFunc.runParentFunc(this, ["init", "open", "close"]);
          }

          /* --------------- public --------------- */
          /** bundle 名 */
          var _proto2 = BundleManageBase.prototype;
          /* ------------------------------- 生命周期 ------------------------------- */
          /**
           * 初始化
           * @remarks
           * 从其他 bundle 的场景切换到此 bundle 的场景之前调用
           */
          _proto2.init = function init() {
            if (
            // 编辑器模式下只能运行 main bundle 的生命周期

            // bundle 已经加载
            this.isValid) {
              throw "中断";
            }
            this.isValid = true;
          }

          /**
           * 打开回调
           * @remarks
           * 从其他 bundle 的场景切换到此 bundle 的场景时调用
           */;
          _proto2.open = function open() {}

          /**
           * 关闭回调
           * @remarks
           * 从此 bundle 的场景切换到其他 bundle 的场景时调用
           */;
          _proto2.close = function close() {
            var _this$event,
              _this9 = this,
              _this$data;
            if (!this.isValid) {
              mkLog.error("bundle 已经卸载");
              throw "中断";
            }
            if (this.nameStr === "main") {
              throw "中断";
            }
            this.isValid = false;

            // 清理事件
            (_this$event = this.event) == null || _this$event.clear();
            this.eventTargetList.splice(0, this.eventTargetList.length).forEach(function (v) {
              v.targetOff == null || v.targetOff(_this9);
            });

            // 清理数据
            // @weak-start-include-MKDataSharer
            (_this$data = this.data) == null || _this$data.reset();
            // @weak-end

            // 清理对象池
            for (var kStr in this.nodePoolTab) {
              if (Object.prototype.hasOwnProperty.call(this.nodePoolTab, kStr)) {
                this.nodePoolTab[kStr].clear();
                delete this.nodePoolTab[kStr];
              }
            }

            // 释放对象
            this._releaseManage.releaseAll();
          }

          /* ------------------------------- 功能 ------------------------------- */;
          _proto2.followRelease = function followRelease(object_) {
            if (!object_) {
              return object_;
            }

            // 添加释放对象
            this._releaseManage.add(object_);

            // 如果管理器已经关闭则直接释放
            if (!this.isValid) {
              this._releaseManage.releaseAll();
            }
            return object_;
          };
          _proto2.cancelRelease = function cancelRelease(object_) {
            if (!object_) {
              return;
            }

            // 添加释放对象
            this._releaseManage["delete"](object_);
            return;
          };
          return BundleManageBase;
        }();
        _MKBundle_.BundleManageBase = BundleManageBase;
      })(MKBundle_ || (MKBundle_ = exports('MKBundle_', {})));
      var mkBundle = exports('default', MKBundle.instance());

      // ...需要在 main bundle reload 时执行 MainBundleManage.close
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKCodecBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKLogger.ts'], function (exports) {
  var _createClass, cclegacy, js, MKLogger;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }, function (module) {
      MKLogger = module.default;
    }],
    execute: function () {
      exports('MKCodecBase_', void 0);
      cclegacy._RF.push({}, "e4db8lDiM5P3ZMdJAumc4f6", "MKCodecBase", undefined);

      /** 编解码器基类 */
      var MKCodecBase = exports('default', /*#__PURE__*/function () {
        function MKCodecBase(option_) {
          /* --------------- protected --------------- */
          /** 配置信息 */
          this._config = void 0;
          /* --------------- private --------------- */
          /** 日志 */
          this._log2 = void 0;
          if (option_) {
            this._config = option_;
          }
        }
        var _proto = MKCodecBase.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /** 编码 */
        _proto.encode = function encode() {
          for (var _len = arguments.length, argsList_ = new Array(_len), _key = 0; _key < _len; _key++) {
            argsList_[_key] = arguments[_key];
          }
          return argsList_.length === 1 ? argsList_[0] : argsList_;
        }

        /** 解码 */;
        _proto.decode = function decode() {
          for (var _len2 = arguments.length, argsList_ = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            argsList_[_key2] = arguments[_key2];
          }
          return argsList_.length === 1 ? argsList_[0] : argsList_;
        };
        _createClass(MKCodecBase, [{
          key: "_log",
          get: /** 日志 */
          function get() {
            var _this$_log;
            return (_this$_log = this._log2) != null ? _this$_log : this._log2 = new MKLogger(js.getClassName(this));
          }
        }]);
        return MKCodecBase;
      }());
      var MKCodecBase_;
      (function (_MKCodecBase_) {
        var Config = function Config() {
          /** 加密函数 */
          this.encryptionFunc = void 0;
          /** 解密函数 */
          this.decryptFunc = void 0;
        };
        _MKCodecBase_.Config = Config;
      })(MKCodecBase_ || (MKCodecBase_ = exports('MKCodecBase_', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKDataSharer.ts", ['cc', './MKStatusTask.ts'], function (exports) {
  var cclegacy, MKStatusTask;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MKStatusTask = module.default;
    }],
    execute: function () {
      exports({
        MKDataSharer_: void 0,
        default: mkDataSharer
      });
      cclegacy._RF.push({}, "6b039j73i5GC6DCDhtekX+x", "MKDataSharer", undefined);

      /**
       * 返回一个增加 MKDataSharer_.api 接口的数据
       * @param class_ 数据类型
       * @returns 数据源为 new class_ 的 Proxy
       * @remarks
       * 如果需要监听数据修改，请使用 returns.source
       */
      function mkDataSharer(class_) {
        var data;
        /** 请求表 */
        var requestMap = new Map();
        var requestFunc = function requestFunc(key) {
          if (data[key] !== undefined) {
            return data[key];
          }
          var request = requestMap.get(key);

          // 新的请求
          if (!request) {
            requestMap.set(key, request = new MKStatusTask(false));
            return request.task;
          }

          // 多次请求
          if (request && !request.isFinish) {
            return request.task;
          }
        };
        var resetFunc = function resetFunc() {
          requestMap.forEach(function (v) {
            return v.finish(true, null);
          });
          requestMap.clear();
          data = new class_();
          data["request"] = requestFunc;
          data["reset"] = resetFunc;
          data["source"] = data;
          data["key"] = new Proxy(Object.create(null), {
            get: function get(target, key) {
              return key;
            }
          });
        };
        resetFunc();
        return new Proxy({}, {
          get: function get(target, key) {
            return data[key];
          },
          set: function set(target, key, newValue) {
            var request = requestMap.get(key);
            data[key] = newValue;

            // 处理请求
            if (request) {
              request.finish(true, newValue);
              requestMap["delete"](key);
            }
            return true;
          }
        });
      }
      var MKDataSharer_;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKDynamicModule.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKInstanceBase.ts', './MKLogger.ts'], function (exports) {
  var _inheritsLoose, cclegacy, MKInstanceBase, mkLog;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MKInstanceBase = module.default;
    }, function (module) {
      mkLog = module.mkLog;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4405ePEpUJHnoWv3nvLsVsx", "MKDynamicModule", undefined);

      /**
       * 动态模块
       * @noInheritDoc
       * @remarks
       * 更优雅的使用动态模块，不必每次 await import(...)
       */
      var MKDynamicModule = exports('MKDynamicModule', /*#__PURE__*/function (_MKInstanceBase) {
        _inheritsLoose(MKDynamicModule, _MKInstanceBase);
        function MKDynamicModule() {
          return _MKInstanceBase.apply(this, arguments) || this;
        }
        var _proto = MKDynamicModule.prototype;
        /**
         * 获取模块默认导出
         * @param module_ 动态模块
         * @returns
         */
        // @ts-ignore
        _proto["default"] = function _default(module_) {
          /** 模块导出表 */
          var moduleExportTab;
          module_.then(function (v) {
            moduleExportTab = v;
          });
          return new Proxy(Object.create(null), {
            get: function get(target, key) {
              if (moduleExportTab) {
                return moduleExportTab["default"][key];
              }
              mkLog.error("模块未加载完成");
              return null;
            },
            set: function set(target, key, value) {
              if (moduleExportTab) {
                moduleExportTab["default"][key] = value;
                return true;
              }
              mkLog.error("模块未加载完成");
              return false;
            }
          });
        }

        /**
         * 获取模块所有导出
         * @param module_ 动态模块
         * @returns
         */
        // @ts-ignore
        ;

        _proto.all = function all(module_) {
          /** 模块导出表 */
          var moduleExportTab;
          module_.then(function (v) {
            moduleExportTab = v;
          });
          return new Proxy(Object.create(null), {
            get: function get(target, key) {
              if (!moduleExportTab[key]) {
                mkLog.error("模块未加载完成");
                return null;
              }
              return moduleExportTab[key];
            }
          });
        };
        return MKDynamicModule;
      }(MKInstanceBase));
      var mkDynamicModule = exports('default', MKDynamicModule.instance());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKEventTarget.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, EventTarget;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5695fXH2NpJOKta5m7Bhc/L", "MKEventTarget", undefined);

      /**
       * 事件对象（类型安全）
       * @noInheritDoc
       * @remarks
       * 获取事件键使用 EventTarget.key.xxx
       */
      var MKEventTarget = exports('default', /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(MKEventTarget, _EventTarget);
        function MKEventTarget() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _EventTarget.call.apply(_EventTarget, [this].concat(args)) || this;
          /** 事件键 */
          _this.key = new Proxy(Object.create(null), {
            get: function get(target, key) {
              return key;
            }
          });
          return _this;
        }
        var _proto = MKEventTarget.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /**
         * 监听事件
         * @param type_ 事件类型
         * @param callback_ 触发回调
         * @param target_ 事件目标对象
         * @param isOnce_ 是否触发单次
         * @returns 触发回调
         */
        // @ts-ignore
        _proto.on = function on(type_, callback_, target_, isOnce_) {
          var _this2 = this;
          if (Array.isArray(type_)) {
            type_.forEach(function (v) {
              _EventTarget.prototype.on.call(_this2, v, callback_, target_, isOnce_);
            });
            return null;
          } else {
            var _target_$eventTargetL;
            // 录入事件对象
            target_ == null || (_target_$eventTargetL = target_.eventTargetList) == null || _target_$eventTargetL.push(this);
            return _EventTarget.prototype.on.call(this, type_, callback_, target_, isOnce_);
          }
        }

        /**
         * 监听单次事件
         * @param type_ 事件类型
         * @param callback_ 触发回调
         * @param target_ 事件目标对象
         * @returns 触发回调
         */
        // @ts-ignore
        ;

        _proto.once = function once(type_, callback_, target_) {
          var _this3 = this;
          if (Array.isArray(type_)) {
            type_.forEach(function (v) {
              _EventTarget.prototype.once.call(_this3, v, callback_, target_);
            });
            return null;
          } else {
            var _target_$eventTargetL2;
            // 录入事件对象
            target_ == null || (_target_$eventTargetL2 = target_.eventTargetList) == null || _target_$eventTargetL2.push(this);
            return _EventTarget.prototype.once.call(this, type_, callback_, target_);
          }
        }

        /**
         * 取消监听事件
         * @param type_ 事件类型
         * @param callback_ 触发回调
         * @param target_ 事件目标对象
         * @returns 触发回调
         */
        // @ts-ignore
        ;

        _proto.off = function off(type_, callback_, target_) {
          var _this4 = this;
          if (Array.isArray(type_)) {
            type_.forEach(function (v) {
              _EventTarget.prototype.off.call(_this4, v, callback_, target_);
            });
          } else {
            _EventTarget.prototype.off.call(this, type_, callback_, target_);
          }
        }

        /**
         * 派发事件
         * @param type_ 事件类型
         * @param argsList_ 事件参数
         */
        // @ts-ignore
        ;

        _proto.emit = function emit(type_) {
          var _this5 = this;
          for (var _len2 = arguments.length, argsList_ = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            argsList_[_key2 - 1] = arguments[_key2];
          }
          if (Array.isArray(type_)) {
            type_.forEach(function (v) {
              var _EventTarget$prototyp;
              (_EventTarget$prototyp = _EventTarget.prototype.emit).call.apply(_EventTarget$prototyp, [_this5, v].concat(argsList_));
            });
          } else {
            var _EventTarget$prototyp2;
            (_EventTarget$prototyp2 = _EventTarget.prototype.emit).call.apply(_EventTarget$prototyp2, [this, type_].concat(argsList_));
          }
        }

        /**
         * 是否存在事件
         * @param type_ 事件类型
         * @param callback_ 触发回调
         * @param target_ 事件目标对象
         * @returns
         */
        // @ts-ignore
        ;

        _proto.has = function has(type_, callback_, target_) {
          return _EventTarget.prototype.hasEventListener.call(this, type_, callback_, target_);
        }

        /** 清空所有事件 */;
        /**
         * 请求事件
         * @param type_ 事件类型
         * @param args_ 事件参数
         * @remarks
         * 等待请求事件返回
         */
        // @ts-ignore
        _proto.request = function request(type_) {
          var _this6 = this;
          for (var _len3 = arguments.length, args_ = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args_[_key3 - 1] = arguments[_key3];
          }
          if (Array.isArray(type_)) {
            var resultList = [];
            type_.forEach(function (v) {
              resultList.push.apply(resultList, _this6._requestSingle.apply(_this6, [v].concat(args_)));
            });
            return resultList;
          } else {
            return this._requestSingle.apply(this, [type_].concat(args_));
          }
        }

        /**
         * 请求单个事件
         * @param type_ 事件类型
         * @param argsList_ 事件参数
         * @returns
         */
        // @ts-ignore
        ;

        _proto._requestSingle = function _requestSingle(type_) {
          var _this$_callbackTable$;
          /** 返回值 */
          var resultList = [];
          /** 回调列表 */
          var callbackList = (_this$_callbackTable$ = this["_callbackTable"][type_]) == null ? void 0 : _this$_callbackTable$.callbackInfos;
          if (!callbackList) {
            return resultList;
          }
          callbackList.forEach(function (v) {
            var oldCallbackFunc = v.callback;
            var target = v.target;
            v.callback = function () {
              for (var _len5 = arguments.length, argsList = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                argsList[_key5] = arguments[_key5];
              }
              resultList.push(oldCallbackFunc.call.apply(oldCallbackFunc, [target].concat(argsList)));
              v.callback = oldCallbackFunc;
            };
          });
          for (var _len4 = arguments.length, argsList_ = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            argsList_[_key4 - 1] = arguments[_key4];
          }
          this.emit.apply(this, [type_].concat(argsList_));
          return resultList;
        };
        return MKEventTarget;
      }(EventTarget));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKExport.ts", ['cc', './MKLogger.ts', './MKUIManage.ts', './MKLayer.ts', './MKLifeCycle.ts', './MKSceneDrive.ts', './MKViewBase.ts', './MKStaticViewBase.ts', './MVCModelBase.ts', './MVCViewBase.ts', './MVCControlBase.ts', './MKGuideManage.ts', './MKGuideStepBase.ts', './MKPolygonMask.ts', './MKAdaptationCanvas.ts', './MKAdaptationNode.ts', './MKBundle.ts', './MKAsset.ts', './MKRelease.ts', './MKDataSharer.ts', './MKMonitor.ts', './MKCodecBase.ts', './MKAudioExport.ts', './MKLanguage.ts', './MKNetwork.ts', './MKTask.ts', './MKEventTarget.ts', './MKInstanceBase.ts', './MKObjectPool.ts', './MKStorage.ts', './MKDynamicModule.ts', './MKGame.ts', './MKNodes.ts', './MKLanguageManage.ts', './MKAudioBase.ts', './MKLanguageExport.ts', './MKNetworkExport.ts', './MKTaskExport.ts'], function (exports) {
  var cclegacy, mkLog;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      mkLog = module.mkLog;
      exports('Logger', module.default);
    }, function (module) {
      var _setter = {};
      _setter.UIManage_ = module.MKUIManage_;
      _setter.uiManage = module.default;
      exports(_setter);
    }, function (module) {
      exports('Layer', module.default);
    }, function (module) {
      exports('LifeCycle', module.MKLifeCycle);
    }, function (module) {
      exports('SceneDrive', module.default);
    }, function (module) {
      exports('ViewBase', module.MKViewBase);
    }, function (module) {
      exports('StaticViewBase', module.MKStaticViewBase);
    }, function (module) {
      exports('MVCModelBase', module.default);
    }, function (module) {
      exports('MVCViewBase', module.default);
    }, function (module) {
      exports('MVCControlBase', module.default);
    }, function (module) {
      exports('GuideManage', module.default);
    }, function (module) {
      exports('GuideStepBase', module.default);
    }, function (module) {
      exports('PolygonMask', module.MKPolygonMask);
    }, function (module) {
      exports('AdaptationCanvas', module.default);
    }, function (module) {
      exports('AdaptationNode', module.default);
    }, function (module) {
      var _setter = {};
      _setter.Bundle_ = module.MKBundle_;
      _setter.bundle = module.default;
      exports(_setter);
    }, function (module) {
      exports('asset', module.default);
    }, function (module) {
      exports('Release', module.default);
    }, function (module) {
      exports('dataSharer', module.default);
    }, function (module) {
      exports('monitor', module.default);
    }, function (module) {
      var _setter = {};
      _setter.CodecBase = module.default;
      _setter.CodecBase_ = module.MKCodecBase_;
      exports(_setter);
    }, function (module) {
      exports('audio', module.mkAudio);
    }, null, null, null, function (module) {
      exports('EventTarget', module.default);
    }, function (module) {
      exports('InstanceBase', module.default);
    }, function (module) {
      exports('ObjectPool', module.default);
    }, function (module) {
      exports('Storage', module.default);
    }, function (module) {
      exports('dynamicModule', module.default);
    }, function (module) {
      exports('game', module.default);
    }, function (module) {
      exports('N', module.default);
    }, function (module) {
      var _setter = {};
      _setter.Language_ = module.MKLanguageManage_;
      _setter.languageManage = module.default;
      exports(_setter);
    }, function (module) {
      exports('Audio_', module.MKAudioBase_);
    }, function (module) {
      exports('language', module);
    }, function (module) {
      exports('network', module);
    }, function (module) {
      exports('task', module);
    }],
    execute: function () {
      cclegacy._RF.push({}, "f901eKcXVpOqJ1TG4+DW3ZU", "MKExport", undefined);
      var log = exports('log', mkLog.log.bind(mkLog));
      var warn = exports('warn', mkLog.warn.bind(mkLog));
      var error = exports('error', mkLog.error.bind(mkLog));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKFollowNodeRelease.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKDynamicModule.ts'], function (exports, module) {
  var _inheritsLoose, cclegacy, _decorator, Node, Component, mkDynamicModule;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      mkDynamicModule = module.default;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "f07c4XFwtRKeJ+aqMGHOgHn", "MKFollowNodeRelease", undefined);
      var mkReleaseExport = mkDynamicModule.all(module.import('./MKRelease.ts'));
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** 跟随节点释放 */
      var MKFollowNodeRelease = exports('default', ccclass(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MKFollowNodeRelease, _Component);
        function MKFollowNodeRelease() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** 初始化状态 */
          _this._isInit = false;
          /** 释放管理器 */
          _this._releaseManage = void 0;
          return _this;
        }
        var _proto = MKFollowNodeRelease.prototype;
        _proto.followRelease = function followRelease(object_) {
          if (!this._isInit) {
            this._isInit = true;
            this._releaseManage = new mkReleaseExport["default"]();
            this.node.once(Node.EventType.NODE_DESTROYED, this._onDestroy, this);
          }
          if (!object_) {
            return;
          }

          // 如果节点无效则直接释放
          if (!this.isValid) {
            mkReleaseExport["default"].release(object_);
          } else {
            this._releaseManage.add(object_);
          }
        };
        _proto.cancelRelease = function cancelRelease(object_) {
          if (!object_) {
            return;
          }

          // 删除释放对象
          this._releaseManage["delete"](object_);
          return;
        };
        _proto._onDestroy = function _onDestroy() {
          this._releaseManage.releaseAll();
        };
        return MKFollowNodeRelease;
      }(Component)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalEvent.ts', './MKInstanceBase.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, dragonBones, sp, director, Animation, TweenSystem, game, globalEvent, MKInstanceBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      dragonBones = module.dragonBones;
      sp = module.sp;
      director = module.director;
      Animation = module.Animation;
      TweenSystem = module.TweenSystem;
      game = module.game;
    }, function (module) {
      globalEvent = module.default;
    }, function (module) {
      MKInstanceBase = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "548d0q8dItCcLX/Xu10kw7K", "MKGame", undefined);
      /**
       * 游戏全局功能
       * @noInheritDoc
       */
      var MKGame = exports('MKGame', /*#__PURE__*/function (_MKInstanceBase) {
        _inheritsLoose(MKGame, _MKInstanceBase);
        function MKGame() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MKInstanceBase.call.apply(_MKInstanceBase, [this].concat(args)) || this;
          /* --------------- private --------------- */
          /** 重启中 */
          _this._isRestarting = false;
          /** 暂停数据 */
          _this._pauseDataMap = new Map();
          return _this;
        }
        var _proto = MKGame.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /**
         * 重启游戏
         * @remarks
         * 请不要使用 game.restart()，因为这会影响框架内的数据清理以及生命周期
         */
        _proto.restart = /*#__PURE__*/
        function () {
          var _restart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this._isRestarting = true;
                  _context.next = 3;
                  return Promise.all(globalEvent.request(globalEvent.key.restart));
                case 3:
                  _context.next = 5;
                  return Promise.all(globalEvent.request(globalEvent.key.waitCloseScene));
                case 5:
                  game.restart();
                  this._isRestarting = false;
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function restart() {
            return _restart.apply(this, arguments);
          }
          return restart;
        }()
        /**
         * 暂停节点
         * @param node_ 目标节点
         * @param isRecursion_ 是否递归子节点
         */;

        _proto.pause = function pause(node_, isRecursion_) {
          var _node_$getComponent,
            _this2 = this;
          if (isRecursion_ === void 0) {
            isRecursion_ = false;
          }
          /** 龙骨 */
          var dragonBonesComp = !dragonBones ? null : node_.getComponent(dragonBones.ArmatureDisplay);
          /** spine */
          var spineComp = !sp ? null : node_.getComponent(sp.Skeleton);
          /** 暂停数据 */
          var pauseData = this._pauseDataMap.get(node_);
          if (!pauseData) {
            this._pauseDataMap.set(node_, pauseData = {});
          }

          // 定时器
          director.getScheduler().pauseTarget(node_);
          // 动画
          (_node_$getComponent = node_.getComponent(Animation)) == null || _node_$getComponent.pause();
          // 缓动
          TweenSystem.instance.ActionManager.pauseTarget(node_);

          // 龙骨
          if (dragonBonesComp) {
            pauseData.dragonBonesTimeScaleNum = dragonBonesComp.timeScale;
            dragonBonesComp.timeScale = 0;
          }

          // spine
          if (spineComp) {
            pauseData.spineTimeScaleNum = spineComp.timeScale;
            spineComp.timeScale = 0;
          }

          // 递归
          if (isRecursion_) {
            node_.children.forEach(function (v) {
              _this2.pause(v, isRecursion_);
            });
          }
        }

        /**
         * 恢复节点
         * @param node_ 目标节点
         * @param isRecursion_ 是否递归子节点
         */;
        _proto.resume = function resume(node_, isRecursion_) {
          var _node_$getComponent2,
            _this3 = this;
          if (isRecursion_ === void 0) {
            isRecursion_ = false;
          }
          /** 龙骨 */
          var dragonBonesComp = !dragonBones ? null : node_.getComponent(dragonBones.ArmatureDisplay);
          /** spine */
          var spineComp = !sp ? null : node_.getComponent(sp.Skeleton);
          /** 暂停数据 */
          var pauseData = this._pauseDataMap.get(node_);

          // 定时器
          director.getScheduler().resumeTarget(node_);
          // 动画
          (_node_$getComponent2 = node_.getComponent(Animation)) == null || _node_$getComponent2.resume();
          // 缓动
          TweenSystem.instance.ActionManager.resumeTarget(node_);

          // 龙骨
          if (dragonBonesComp) {
            var _pauseData$dragonBone;
            dragonBonesComp.timeScale = (_pauseData$dragonBone = pauseData == null ? void 0 : pauseData.dragonBonesTimeScaleNum) != null ? _pauseData$dragonBone : 1;
          }

          // spine
          if (spineComp) {
            var _pauseData$spineTimeS;
            spineComp.timeScale = (_pauseData$spineTimeS = pauseData == null ? void 0 : pauseData.spineTimeScaleNum) != null ? _pauseData$spineTimeS : 1;
          }

          // 递归
          if (isRecursion_) {
            node_.children.forEach(function (v) {
              _this3.resume(v, isRecursion_);
            });
          }
        };
        _createClass(MKGame, [{
          key: "isRestarting",
          get: /* --------------- public --------------- */
          /** 重启中 */
          function get() {
            return this._isRestarting;
          }
        }]);
        return MKGame;
      }(MKInstanceBase));
      var mkGame = exports('default', MKGame.instance());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKGuideManage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKEventTarget.ts', './MKLogger.ts', './MKTaskPipeline.ts', './MKBundle.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, _createClass, cclegacy, MKEventTarget, MKLogger, MKTaskPipeline, mkBundle;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MKEventTarget = module.default;
    }, function (module) {
      MKLogger = module.default;
    }, function (module) {
      MKTaskPipeline = module.default;
    }, function (module) {
      mkBundle = module.default;
    }],
    execute: function () {
      exports('MKGuideManage_', void 0);
      cclegacy._RF.push({}, "65336rS/9xHE5Marf9Ccy7F", "MKGuideManage", undefined);

      /**
       * 引导管理器
       * @noInheritDoc
       * @remarks
       *
       * - 支持多实例
       *
       * - 支持任意步骤的(插入/删除)
       *
       * - 支持(暂停/完成)引导
       *
       * - 支持任意步骤跳转后的状态还原(操作单元)
       *
       * - 引导步骤脚本分离，支持组件式挂载
       */
      var MKGuideManage = exports('default', /*#__PURE__*/function () {
        function MKGuideManage(init_) {
          var _init_$nameStr;
          /* --------------- public --------------- */
          /** 事件 */
          this.event = new MKEventTarget();
          /** 步骤表 */
          this.stepMap = new Map();
          /* --------------- private --------------- */
          /** 日志 */
          this._log = void 0;
          /** 初始化配置 */
          this._initConfig = void 0;
          /** 暂停状态 */
          this._isPause = false;
          /** 上次步骤序号 */
          this._preStepNum = void 0;
          /** 当前步骤序号 */
          this._stepNum = void 0;
          /** 任务管线 */
          this._taskPipeline = new MKTaskPipeline();
          /** 步骤预加载任务表 */
          this._stepPreloadMap = new Map();
          // 初始化数据
          this._log = new MKLogger((_init_$nameStr = init_.nameStr) != null ? _init_$nameStr : "MKGuideManage");
          this._initConfig = init_;
          if (this._initConfig.currentStepNum !== undefined) {
            this._stepNum = this._initConfig.currentStepNum;
          }
        }
        var _proto = MKGuideManage.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /**
         * 注册步骤
         * @param step_ 步骤实例
         */
        _proto.regis = function regis(step_) {
          var _this = this;
          if (Array.isArray(step_)) {
            step_.forEach(function (v) {
              v.guideManage = _this;
              _this.stepMap.set(v.stepNum, v);
            });
          } else {
            step_.guideManage = this;
            this.stepMap.set(step_.stepNum, step_);
          }
        }

        /**
         * 运行引导
         * @remarks
         * 自动取消暂停状态，且更新当前步骤视图
         */;
        _proto.run = function run() {
          var _this2 = this;
          return this._taskPipeline.add( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _preStep$nextStepNumL, _currentStep$describe, _currentStep$sceneStr;
            var preStep, currentStep, isJump, nextStepList, bundleStr, sceneStr, _preStep$operateStrLi, currentOperateStrList, preOperateStrList, _iterator, _step, vStr, _this2$_initConfig$op, _this2$_initConfig$op2, _this2$_initConfig$op3, _this2$_initConfig$op4, _iterator2, _step2, _vStr, _this2$_stepPreloadMa;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(_this2._preStepNum === _this2._stepNum)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  /** 上次引导步骤 */
                  preStep = _this2._preStepNum === undefined ? null : _this2.stepMap.get(_this2._preStepNum);
                  /** 当前引导步骤 */
                  currentStep = _this2.stepMap.get(_this2._stepNum);
                  /** 跳转状态 */
                  isJump = !(preStep != null && (_preStep$nextStepNumL = preStep.nextStepNumList) != null && _preStep$nextStepNumL.includes(_this2._stepNum)); // 步骤未注册
                  if (currentStep) {
                    _context.next = 9;
                    break;
                  }
                  _this2._log.error("\u6B65\u9AA4 " + _this2._stepNum + " \u672A\u6CE8\u518C");
                  _this2.isPause = true;
                  return _context.abrupt("return");
                case 9:
                  if (!(_this2._preStepNum === undefined && !currentStep.stepUpdateData && !_this2._updateStepData())) {
                    _context.next = 11;
                    break;
                  }
                  return _context.abrupt("return");
                case 11:
                  /** 下次引导步骤 */
                  nextStepList = !currentStep.nextStepNumList || currentStep.nextStepNumList.length > 1 ? null : currentStep.nextStepNumList.map(function (vNum) {
                    return _this2.stepMap.get(vNum);
                  }); // 恢复暂停
                  _this2.isPause = false;

                  // 加载步骤事件
                  _this2._log.log("执行步骤", currentStep.stepNum, (_currentStep$describe = currentStep.describeStr) != null ? _currentStep$describe : "");
                  _context.next = 16;
                  return Promise.all(_this2.event.request(_this2.event.key.loadingStep));
                case 16:
                  // 执行下步预加载
                  nextStepList == null || nextStepList.forEach(function (v) {
                    var _v$preLoad;
                    if (!(v != null && v.preLoad)) {
                      return;
                    }
                    _this2._stepPreloadMap.set(v.stepNum, (_v$preLoad = v.preLoad()) != null ? _v$preLoad : null);
                  });

                  // 加载场景
                  if (!((_currentStep$sceneStr = currentStep.sceneStr) != null && _currentStep$sceneStr.includes("."))) {
                    _context.next = 23;
                    break;
                  }
                  bundleStr = currentStep.sceneStr.split(".")[0];
                  sceneStr = currentStep.sceneStr.split(".")[1];
                  if (!(mkBundle.bundleStr !== bundleStr || mkBundle.sceneStr !== sceneStr)) {
                    _context.next = 23;
                    break;
                  }
                  _context.next = 23;
                  return mkBundle.loadScene(sceneStr, {
                    bundleStr: bundleStr
                  });
                case 23:
                  if (!_this2._initConfig.operateTab) {
                    _context.next = 47;
                    break;
                  }
                  /** 当前步骤操作 */
                  currentOperateStrList = currentStep.operateStrList;
                  /** 上次步骤操作 */
                  preOperateStrList = (_preStep$operateStrLi = preStep == null ? void 0 : preStep.operateStrList) != null ? _preStep$operateStrLi : [];
                  _iterator = _createForOfIteratorHelperLoose(preOperateStrList);
                case 27:
                  if ((_step = _iterator()).done) {
                    _context.next = 39;
                    break;
                  }
                  vStr = _step.value;
                  if (!currentOperateStrList.includes(vStr)) {
                    _context.next = 35;
                    break;
                  }
                  _context.next = 32;
                  return (_this2$_initConfig$op = (_this2$_initConfig$op2 = _this2._initConfig.operateTab[vStr]).reset) == null ? void 0 : _this2$_initConfig$op.call(_this2$_initConfig$op2);
                case 32:
                  currentStep.operateTab[vStr] = preStep == null ? void 0 : preStep.operateTab[vStr];
                  _context.next = 37;
                  break;
                case 35:
                  _context.next = 37;
                  return (_this2$_initConfig$op3 = (_this2$_initConfig$op4 = _this2._initConfig.operateTab[vStr]).unload) == null ? void 0 : _this2$_initConfig$op3.call(_this2$_initConfig$op4);
                case 37:
                  _context.next = 27;
                  break;
                case 39:
                  _iterator2 = _createForOfIteratorHelperLoose(currentOperateStrList.filter(function (v) {
                    return !preOperateStrList.includes(v);
                  }));
                case 40:
                  if ((_step2 = _iterator2()).done) {
                    _context.next = 47;
                    break;
                  }
                  _vStr = _step2.value;
                  _context.next = 44;
                  return _this2._initConfig.operateTab[_vStr].load();
                case 44:
                  currentStep.operateTab[_vStr] = _context.sent;
                case 45:
                  _context.next = 40;
                  break;
                case 47:
                  _context.next = 49;
                  return (_this2$_stepPreloadMa = _this2._stepPreloadMap.get(currentStep.stepNum)) != null ? _this2$_stepPreloadMa : null;
                case 49:
                  _this2._stepPreloadMap["delete"](currentStep.stepNum);
                  if (!preStep) {
                    _context.next = 55;
                    break;
                  }
                  _context.next = 53;
                  return preStep.unload == null ? void 0 : preStep.unload();
                case 53:
                  _context.next = 55;
                  return Promise.all(_this2.event.request(_this2.event.key.afterUnloadStep, preStep));
                case 55:
                  // 更新上个步骤
                  _this2._preStepNum = currentStep.stepNum;
                  // 执行步骤 load
                  _context.next = 58;
                  return currentStep.load(isJump);
                case 58:
                  _context.next = 60;
                  return Promise.all(_this2.event.request(_this2.event.key.loadingStepComplete));
                case 60:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        }

        /**
         * 设置当前步骤
         * @param stepNum_ 步骤
         * @param initData_ 初始化数据
         * @remarks
         *
         * - 暂停状态：更新步骤数据
         *
         * - 正常状态：更新步骤数据，执行步骤生命周期
         */;
        _proto.setStep = function setStep(stepNum_, initData_) {
          var _this3 = this;
          return this._taskPipeline.add( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _currentStep$describe2;
            var currentStep;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(_this3._stepNum === stepNum_)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  _context2.next = 4;
                  return Promise.all(_this3.event.request(_this3.event.key.beforeSwitch, stepNum_));
                case 4:
                  // 更新步骤
                  _this3._stepNum = stepNum_;

                  /** 当前引导步骤 */
                  currentStep = _this3.stepMap.get(_this3._stepNum); // 更新初始化数据
                  if (currentStep) {
                    currentStep.initData = initData_;
                  }
                  _this3._log.log("切换到步骤", _this3._stepNum, (_currentStep$describe2 = currentStep == null ? void 0 : currentStep.describeStr) != null ? _currentStep$describe2 : "");

                  // 更新步骤数据
                  if (!(!_this3._updateStepData() && _this3._stepNum !== _this3._initConfig.endStepNum)) {
                    _context2.next = 10;
                    break;
                  }
                  return _context2.abrupt("return");
                case 10:
                  if (!(_this3._stepNum === _this3._initConfig.endStepNum)) {
                    _context2.next = 13;
                    break;
                  }
                  _this3.finish();
                  return _context2.abrupt("return");
                case 13:
                  // 运行
                  if (!_this3.isPause) {
                    _this3.run();
                  }
                case 14:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })));
        }

        /** 获取步骤 */;
        _proto.getStep = function getStep() {
          return this._stepNum;
        }

        /** 完成引导 */;
        _proto.finish = function finish() {
          this._log.log("引导完成");
          this.isPause = true;
          this.event.emit(this.event.key.finish);
        }

        /** 更新步骤数据 */;
        _proto._updateStepData = function _updateStepData() {
          /** 当前引导步骤 */
          var currentStep = this.stepMap.get(this._stepNum);
          /** 步骤数据 */
          var stepData = !this._initConfig.stepUpdateCallbackFunc ? true : this._initConfig.stepUpdateCallbackFunc(this._stepNum);

          // 引导中断
          if ((stepData != null ? stepData : null) === null) {
            this._isPause = true;
            this.event.emit(this.event.key["break"]);
            this._log.warn("\u5F53\u524D\u6B65\u9AA4 " + this._stepNum + " \u6570\u636E\u9519\u8BEF\uFF0C\u5F15\u5BFC\u4E2D\u65AD");
            return false;
          }

          // 更新步骤数据
          if (currentStep) {
            currentStep.stepUpdateData = stepData;
          } else {
            this._isPause = true;
            this.event.emit(this.event.key["break"]);
            if (this._stepNum !== this._initConfig.endStepNum) {
              this._log.warn("\u5F53\u524D\u6B65\u9AA4 " + this._stepNum + " \u672A\u6CE8\u518C\uFF0C\u5F15\u5BFC\u4E2D\u65AD");
            }
            return false;
          }
          return true;
        }

        /* ------------------------------- get/set ------------------------------- */;
        _proto._setIsPause = function _setIsPause(value_) {
          if (this._isPause === value_) {
            return;
          }
          this._isPause = value_;

          // (暂停/恢复)事件
          this.event.emit(this._isPause ? this.event.key.pause : this.event.key.resume);
        };
        _createClass(MKGuideManage, [{
          key: "isPause",
          get: /** 暂停状态 */
          function get() {
            return this._isPause;
          },
          set: function set(value_) {
            this._setIsPause(value_);
          }

          /** 完成状态 */
        }, {
          key: "isFinish",
          get: function get() {
            return this._stepNum === this._initConfig.endStepNum;
          }

          /** 结束步骤 */
        }, {
          key: "endStepNum",
          get: function get() {
            var _this$_initConfig$end;
            return (_this$_initConfig$end = this._initConfig.endStepNum) != null ? _this$_initConfig$end : 0;
          }
        }]);
        return MKGuideManage;
      }());
      var MKGuideManage_;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKGuideStepBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKLogger.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, mkLog;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      mkLog = module.mkLog;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "5d72atOr8pFCJvVNw+2rv+u", "MKGuideStepBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 引导步骤基类
       * @noInheritDoc
       */
      var MKGuideStepBase = exports('default', (_dec = ccclass("MkGuideStepBase"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MKGuideStepBase, _Component);
        function MKGuideStepBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** 步骤序号 */
          /**
           * 所属场景
           * @remarks
           * 格式：bundle.scene
           */
          _this.sceneStr = void 0;
          /** 引导管理器 */
          _this.guideManage = void 0;
          /** 操作键列表 */
          _this.operateStrList = [];
          /** 操作表返回值 */
          _this.operateTab = {};
          /** 初始化数据 */
          _this.initData = void 0;
          /** 步骤更新返回数据 */
          _this.stepUpdateData = void 0;
          /**
           * 步骤描述
           * @remarks
           * 用于日志打印
           */
          _this.describeStr = void 0;
          /**
           * 下个步骤
           * @remarks
           *
           * - length == 1：预加载及 this._next 跳转
           *
           * - length > 1：预加载
           */
          _this.nextStepNumList = void 0;
          return _this;
        }
        var _proto = MKGuideStepBase.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /**
         * 跳转到下个步骤
         * @param initData_ 下个步骤初始化数据
         * @returns
         */
        _proto._next = function _next(initData_) {
          if (this.nextStepNumList === undefined) {
            mkLog.error("下个步骤序号为空");
            return;
          }
          if (this.nextStepNumList.length > 1) {
            return;
          }
          this.guideManage.setStep(this.nextStepNumList[0], initData_);
        };
        return MKGuideStepBase;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKHttp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKInstanceBase.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, sys, MKInstanceBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      MKInstanceBase = module.default;
    }],
    execute: function () {
      exports('MKHttp_', void 0);
      cclegacy._RF.push({}, "9a78fX3TgJL1ZElLT2aNZeW", "MKHttp", undefined);

      /**
       * http 模块
       * @noInheritDoc
       * @remarks
       *
       * - post/get 支持
       *
       * - 支持任意类型的返回数据解析
       *
       * - 支持自定义编解码器
       */
      var MKHttp = exports('MKHttp', /*#__PURE__*/function (_MKInstanceBase) {
        _inheritsLoose(MKHttp, _MKInstanceBase);
        function MKHttp() {
          return _MKInstanceBase.apply(this, arguments) || this;
        }
        var _proto = MKHttp.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /** GET */
        _proto.get = /*#__PURE__*/
        function () {
          var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(urlStr_, config_) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._open("GET", urlStr_, config_);
                case 2:
                  return _context.abrupt("return", _context.sent);
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function get(_x, _x2) {
            return _get.apply(this, arguments);
          }
          return get;
        }() /** POST */;
        _proto.post = /*#__PURE__*/
        function () {
          var _post = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(urlStr_, config_) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this._open("POST", urlStr_, config_);
                case 2:
                  return _context2.abrupt("return", _context2.sent);
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function post(_x3, _x4) {
            return _post.apply(this, arguments);
          }
          return post;
        }() /** 通用方法 */;
        _proto._open = /*#__PURE__*/
        function () {
          var _open2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(typeStr_, urlStr_, config_) {
            var xmlHttp, config;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  xmlHttp = new XMLHttpRequest();
                  config = new MKHttp_.Config(config_); // 初始化数据
                  config = Object.assign(new MKHttp_.Config(), config);
                  xmlHttp.timeout = config.timeoutNum;
                  if (config.returnType) {
                    xmlHttp.responseType = config.returnType;
                  }
                  _context4.next = 7;
                  return new Promise(function (resolveFunc) {
                    /** 超时定时器 */
                    var timeoutTimer = setTimeout(function () {
                      resolveFunc(null);
                    }, config.timeoutNum);
                    xmlHttp.onreadystatechange = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                      var result, buffer, data, kNum;
                      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                        while (1) switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!(xmlHttp.readyState === 4 && xmlHttp.status >= 200 && xmlHttp.status < 400)) {
                              _context3.next = 21;
                              break;
                            }
                            _context3.t0 = xmlHttp.responseType;
                            _context3.next = _context3.t0 === "" ? 4 : _context3.t0 === "text" ? 4 : _context3.t0 === "arraybuffer" ? 6 : _context3.t0 === "blob" ? 11 : _context3.t0 === "document" ? 15 : _context3.t0 === "json" ? 17 : 19;
                            break;
                          case 4:
                            result = xmlHttp.response;
                            return _context3.abrupt("break", 19);
                          case 6:
                            buffer = new Uint8Array(xmlHttp.response);
                            data = "";
                            for (kNum = 0; kNum < buffer.byteLength; kNum++) {
                              data += String.fromCharCode(buffer[kNum]);
                            }
                            result = "data:image/png;base64," + window.btoa(data);
                            return _context3.abrupt("break", 19);
                          case 11:
                            _context3.next = 13;
                            return new Promise(function (resolve2Func) {
                              var read = new FileReader();
                              read.onload = function () {
                                resolve2Func(result);
                              };
                              read.readAsDataURL(xmlHttp.response);
                            });
                          case 13:
                            result = _context3.sent;
                            return _context3.abrupt("break", 19);
                          case 15:
                            result = xmlHttp.response;
                            return _context3.abrupt("break", 19);
                          case 17:
                            result = xmlHttp.response;
                            return _context3.abrupt("break", 19);
                          case 19:
                            clearTimeout(timeoutTimer);
                            resolveFunc(!config.codec ? result : config.codec.decode(result));
                          case 21:
                          case "end":
                            return _context3.stop();
                        }
                      }, _callee3);
                    }));
                    xmlHttp.open(typeStr_, urlStr_, true);
                    // 设置标头
                    {
                      if (sys.isNative) {
                        xmlHttp.setRequestHeader("Accept-Encoding", "gzip,deflate");
                      }
                      if (config.header) {
                        for (var kStr in config.header) {
                          xmlHttp.setRequestHeader(kStr, config.header[kStr]);
                        }
                      }
                    }

                    // open 回调
                    if (config.openCallbackFunc) {
                      config.openCallbackFunc(xmlHttp);
                    }
                    xmlHttp.send(!config.codec ? config.body : config.codec.encode(config.body));
                  });
                case 7:
                  return _context4.abrupt("return", _context4.sent);
                case 8:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function _open(_x5, _x6, _x7) {
            return _open2.apply(this, arguments);
          }
          return _open;
        }();
        return MKHttp;
      }(MKInstanceBase));
      var MKHttp_;
      (function (_MKHttp_) {
        var Config = function Config(init_) {
          /** 超时时间(ms) */
          this.timeoutNum = 5000;
          /** 返回数据类型 */
          this.returnType = void 0;
          /** 编解码器 */
          this.codec = void 0;
          /** 内容 */
          this.body = void 0;
          /** 标头 */
          this.header = void 0;
          /**
           * open 后回调
           * @remarks
           * 可在函数内注册回调，设置请求数据
           */
          this.openCallbackFunc = void 0;
          Object.assign(this, init_);
        };
        _MKHttp_.Config = Config;
      })(MKHttp_ || (MKHttp_ = exports('MKHttp_', {})));
      var mkHttp = exports('default', MKHttp.instance());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKInit.ts", ['cc', './MKExport.ts', './GlobalConfig.ts', './GlobalEvent.ts'], function (exports) {
  var cclegacy, director, Director, view, profiler, screen, MKExport, GlobalConfig, globalEvent;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
      view = module.view;
      profiler = module.profiler;
      screen = module.screen;
    }, function (module) {
      MKExport = module;
    }, function (module) {
      GlobalConfig = module.default;
    }, function (module) {
      globalEvent = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ed805ASHS5GILSbS8/5jY/r", "MKInit", undefined);

      // 初始化逻辑
      {
        // 保存初始设计分辨率
        director.once(Director.EVENT_BEFORE_SCENE_LAUNCH, function () {
          GlobalConfig.View.originalDesignSize.set(view.getDesignResolutionSize());
        });

        // 显示调试信息
        director.once(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
          if (GlobalConfig.Constant.isShowDebugInfo) {
            profiler == null || profiler.showStats();
          } else {
            profiler == null || profiler.hideStats();
          }
        });

        // 屏幕大小改变事件分发
        screen.on("window-resize", function () {
          globalEvent.emit(globalEvent.key.resize);
        });
      }

      // 注册到全局
      {
        window["mk"] = MKExport;
      }

      // 防止编辑器增加 mk 提示
      var mk = exports('default', MKExport);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKInstanceBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _construct, cclegacy;
  return {
    setters: [function (module) {
      _construct = module.construct;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0a4d7YWhvtKiLc0j2Asnngs", "MKInstanceBase", undefined);
      /** 继承单例（类型安全） */
      var MKInstanceBase = exports('default', /*#__PURE__*/function () {
        function MKInstanceBase() {}
        /** 单例方法 */
        MKInstanceBase.instance = function instance() {
          var self = this;
          if (!self._instance) {
            for (var _len = arguments.length, argsList_ = new Array(_len), _key = 0; _key < _len; _key++) {
              argsList_[_key] = arguments[_key];
            }
            self._instance = _construct(self, argsList_);
          }
          return self._instance;
        };
        return MKInstanceBase;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKLanguage.ts", ['cc', './MKLanguageExport.ts', './MKLanguageManage.ts'], function (exports) {
  var cclegacy, MKLanguageExport;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MKLanguageExport = module;
      exports('default', module);
    }, function (module) {
      var _setter = {};
      _setter.LanguageManage = module.MKLanguageManage;
      _setter.LanguageManage_ = module.MKLanguageManage_;
      _setter.languageManage = module.default;
      exports(_setter);
    }],
    execute: function () {
      cclegacy._RF.push({}, "76829DYISRFUabJVYjbRyNS", "MKLanguage", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKLanguageBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKLanguageManage.ts', './MKLogger.ts', './MKToolString.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, js, Component, mkLanguageManage, MKLogger;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      js = module.js;
      Component = module.Component;
    }, function (module) {
      mkLanguageManage = module.default;
    }, function (module) {
      MKLogger = module.default;
    }, null],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "46c12bBjAFFW4e23OobP9YI", "MKLanguageBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;

      /**
       * 多语言组件基类
       * @noInheritDoc
       */
      var MKLanguageBase = exports('default', (_dec = property({
        displayName: "模糊匹配",
        serializable: false,
        group: {
          name: "类型",
          id: "0"
        }
      }), _dec2 = property({
        displayName: "键",
        group: {
          name: "类型",
          id: "0"
        },
        visible: function visible() {
          return this.isFuzzyMatchType;
        }
      }), _dec3 = property({
        displayName: "键",
        type: Enum({
          未初始化: 0
        }),
        group: {
          name: "类型",
          id: "0"
        },
        visible: function visible() {
          return !this.isFuzzyMatchType;
        }
      }), _dec4 = property({
        displayName: "模糊匹配",
        serializable: false,
        group: {
          name: "语言标识",
          id: "1"
        }
      }), _dec5 = property({
        displayName: "键",
        group: {
          name: "语言标识",
          id: "1"
        },
        visible: function visible() {
          return this.isFuzzyMatchMark;
        }
      }), _dec6 = property({
        displayName: "键",
        type: Enum({}),
        group: {
          name: "语言标识",
          id: "1"
        },
        visible: function visible() {
          return !this.isFuzzyMatchMark;
        }
      }), ccclass(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MKLanguageBase, _Component);
        function MKLanguageBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /* --------------- 属性 --------------- */
          /** 模糊匹配类型 */
          _initializerDefineProperty(_this, "isFuzzyMatchType", _descriptor, _assertThisInitialized(_this));
          /** 模糊匹配语言标识 */
          _initializerDefineProperty(_this, "isFuzzyMatchMark", _descriptor2, _assertThisInitialized(_this));
          /* --------------- protected --------------- */
          /** 类型 */
          _initializerDefineProperty(_this, "_typeStr", _descriptor3, _assertThisInitialized(_this));
          /** 语言标识 */
          _initializerDefineProperty(_this, "_markStr", _descriptor4, _assertThisInitialized(_this));
          _this._isUseLayer = false;
          /** 当前类型数据 */
          _this._data = void 0;
          /** 标记枚举数据 */
          _this._markEnum = void 0;
          /** 日志 */
          _this._log = new MKLogger(js.getClassName(_assertThisInitialized(_this)));
          return _this;
        }
        var _proto = MKLanguageBase.prototype;
        /* ------------------------------- 生命周期 ------------------------------- */
        _proto.onLoad = function onLoad() {
          // 初始化数据
          this._initData();
        };
        _proto.onEnable = function onEnable() {
          {
            this._onSwitchLanguage();
            this._initEvent(true);
          }
        };
        _proto.onDisable = function onDisable() {
          {
            this._initEvent(false);
          }
        }

        /* ------------------------------- 功能 ------------------------------- */
        /** 初始化数据 */;
        _proto._initData = function _initData() {
          this._resetData();
        }

        /** 初始化事件 */;
        _proto._initEvent = function _initEvent(isInit_) {
          if (isInit_) {
            mkLanguageManage.event.on(mkLanguageManage.event.key.switchLanguage, this._onSwitchLanguage, this);
          } else {
            mkLanguageManage.event.off(mkLanguageManage.event.key.switchLanguage, this._onSwitchLanguage, this);
          }
        }

        /** 设置标识 */;
        _proto._setMark = function _setMark(valueStr_) {
          if (!this._data) {
            return;
          }
          if (this._markStr === valueStr_) {
            return;
          }

          // 更新标记
          this._markStr = valueStr_;
          this._updateMark();

          // 刷新编辑器
          if (!this.isFuzzyMatchMark) {
            this.isFuzzyMatchMark = !this.isFuzzyMatchMark;
            this.isFuzzyMatchMark = !this.isFuzzyMatchMark;
          }
        }

        /* ------------------------------- get/set ------------------------------- */;
        _proto._setMarkStr = function _setMarkStr(valueStr_) {
          {
            this._setMark(valueStr_);
          }
        }

        /* ------------------------------- 自定义事件 ------------------------------- */;
        _proto._onSwitchLanguage = function _onSwitchLanguage() {
          this._updateContent();
        };
        _createClass(MKLanguageBase, [{
          key: "typeStr",
          get: /** 类型 */
          function get() {
            return this._typeStr;
          },
          set: function set(valueStr_) {
            this._setTypeStr(valueStr_);
          }

          /** 类型 */
        }, {
          key: "type",
          get: function get() {
            return 0;
          },
          set: function set(value_) {
            this._setType(value_);
          }
        }, {
          key: "markStr",
          get: /** 语言标识 */
          function get() {
            return this._markStr;
          },
          set: function set(valueStr_) {
            this._setMarkStr(valueStr_);
          }

          /** 语言标识枚举 */
        }, {
          key: "markEnum",
          get: function get() {
            var _this$_markEnum$this$, _this$_markEnum;
            return (_this$_markEnum$this$ = (_this$_markEnum = this._markEnum) == null ? void 0 : _this$_markEnum[this._markStr]) != null ? _this$_markEnum$this$ : 0;
          },
          set: function set(value_) {
            var _this$_markEnum2;
            this._setMark((_this$_markEnum2 = this._markEnum) == null ? void 0 : _this$_markEnum2[value_]);
          }
        }]);
        return MKLanguageBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isFuzzyMatchType", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "typeStr", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "typeStr"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "type", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "type"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isFuzzyMatchMark", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "markStr", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "markStr"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "markEnum", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "markEnum"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_typeStr", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_markStr", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKLanguageExport.ts", ['cc', './MKLanguageLabel.ts', './MKLanguageTexture.ts', './MKLanguageNode.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('Label', module.default);
    }, function (module) {
      exports('Texture', module.default);
    }, function (module) {
      exports('Node', module.default);
    }],
    execute: function () {
      cclegacy._RF.push({}, "13ca4+O3jBPlougA2fXcOmv", "MKLanguageExport", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKLanguageLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKLanguageManage.ts', './MKLanguageBase.ts', './MKToolEnum.ts', './MKToolString.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, CCString, Label, RichText, Layout, HorizontalTextAlignment, mkLanguageManage, MKLanguageBase, mkToolEnum;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCString = module.CCString;
      Label = module.Label;
      RichText = module.RichText;
      Layout = module.Layout;
      HorizontalTextAlignment = module.HorizontalTextAlignment;
    }, function (module) {
      mkLanguageManage = module.default;
    }, function (module) {
      MKLanguageBase = module.default;
    }, function (module) {
      mkToolEnum = module.default;
    }, null],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "544f8/fXYxIvIVONDCHCU0S", "MKLanguageLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;

      /**
       * 多语言文本
       * @noInheritDoc
       */
      var MKLanguageLabel = exports('default', (_dec = property({
        displayName: "水平对齐适配",
        tooltip: "根据语言配置设置 Label 的水平对齐方式 Horizontal Align"
      }), _dec2 = property({
        displayName: "参数",
        type: [CCString]
      }), _dec3 = property({
        override: true
      }), _dec4 = property([CCString]), ccclass(_class = executeInEditMode(_class = (_class2 = (_class3 = /*#__PURE__*/function (_MKLanguageBase) {
        _inheritsLoose(MKLanguageLabel, _MKLanguageBase);
        function MKLanguageLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MKLanguageBase.call.apply(_MKLanguageBase, [this].concat(args)) || this;
          /* --------------- 属性 --------------- */
          /** label 适配 */
          _initializerDefineProperty(_this, "isDirectionAdaptation", _descriptor, _assertThisInitialized(_this));
          /* --------------- protected --------------- */
          _initializerDefineProperty(_this, "_typeStr", _descriptor2, _assertThisInitialized(_this));
          /* --------------- private --------------- */
          _initializerDefineProperty(_this, "_argsStrList", _descriptor3, _assertThisInitialized(_this));
          /** label组件 */
          _this._label = void 0;
          return _this;
        }
        var _proto = MKLanguageLabel.prototype;
        /* ------------------------------- 生命周期 ------------------------------- */
        _proto.onEnable = function onEnable() {
          _MKLanguageBase.prototype.onEnable.call(this);
        };
        _proto.onDisable = function onDisable() {
          _MKLanguageBase.prototype.onDisable.call(this);
        }

        /* ------------------------------- 功能 ------------------------------- */
        /** 重置数据 */;
        _proto._resetData = function _resetData() {
          // 更新类型数据
          this._data = mkLanguageManage.labelDataTab[this._typeStr];

          // 方向适配
          this._directionAdaptation();
          // 更新内容
          this._updateContent();
          // 更新编辑器
          this._updateEditor();
        };
        _proto._updateContent = function _updateContent() {
          if (this._label) {
            var _mkLanguageManage$get;
            var markStr = this._markStr.slice(this._markStr[0] === "\u200B" ? 1 : 0);
            this._label.string = (_mkLanguageManage$get = mkLanguageManage.getLabel(this._typeStr, markStr, {
              argsStrList: this._argsStrList
            })) != null ? _mkLanguageManage$get : "";
          }
        };
        _proto._updateMark = function _updateMark() {
          this.argsStrList = [];
        };
        _proto._setType = function _setType(value_) {
          this._typeStr = MKLanguageLabel._typeEnum[value_];
          this._resetData();
        };
        _proto._setTypeStr = function _setTypeStr(valueStr_) {
          {
            this._setType(MKLanguageLabel._typeEnum[valueStr_]);
          }
        };
        _proto._initData = function _initData() {
          var _this$node$getCompone;
          this._label = (_this$node$getCompone = this.node.getComponent(Label)) != null ? _this$node$getCompone : this.node.getComponent(RichText);
          if (!this._label) {
            this._log.error("节点不存在 Label | RichText 组件");
            return;
          }

          // 初始化类型
          if (!this._typeStr) {
            {
              this._log.error("当前节点缺少多语言类型", this.node[" INFO "]);
              this._typeStr = MKLanguageLabel._typeStrList[0];
            }
          }
          _MKLanguageBase.prototype._initData.call(this);
        }

        /** 方向适配 */;
        _proto._directionAdaptation = function _directionAdaptation() {
          if (!this.isDirectionAdaptation || !this._label) {
            return;
          }
          this._label.horizontalAlign = mkLanguageManage.data.dire === Layout.HorizontalDirection.LEFT_TO_RIGHT ? HorizontalTextAlignment.LEFT : HorizontalTextAlignment.RIGHT;
        }

        /** 初始化组件 */;
        _proto._initComponent = function _initComponent() {
          // 注册类型
          MKLanguageLabel._typeEnum = mkToolEnum.objToEnum(mkLanguageManage.labelDataTab);
          {
            return;
          }
        }

        /** 更新编辑器 */;
        _proto._updateEditor = function _updateEditor() {
          {
            return;
          }
        }

        /* ------------------------------- get/set ------------------------------- */;
        _proto._setArgsStrList = function _setArgsStrList(valueStrList_) {
          if (!this._label || !this._data) {
            return;
          }
          this._argsStrList = valueStrList_;
          // 更新文本
          this._updateContent();
        }

        /* ------------------------------- 自定义事件 ------------------------------- */;
        _proto._onSwitchLanguage = function _onSwitchLanguage() {
          this._directionAdaptation();
          _MKLanguageBase.prototype._onSwitchLanguage.call(this);
        };
        _proto._onLabelDataChange = function _onLabelDataChange() {
          this.unschedule(this._initComponent);
          this.scheduleOnce(this._initComponent);
        };
        _createClass(MKLanguageLabel, [{
          key: "type",
          get: function get() {
            return MKLanguageLabel._typeEnum[this._typeStr];
          },
          set: function set(value_) {
            this._setType(value_);
          }

          /** 参数 */
        }, {
          key: "argsStrList",
          get: function get() {
            return this._argsStrList;
          },
          set: function set(valueStrList_) {
            this._setArgsStrList(valueStrList_);
          }
        }]);
        return MKLanguageLabel;
      }(MKLanguageBase), _class3._typeStrList = Object.keys(mkLanguageManage.labelDataTab), _class3._typeEnum = mkToolEnum.objToEnum(mkLanguageManage.labelDataTab), _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isDirectionAdaptation", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "argsStrList", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "argsStrList"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_typeStr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_argsStrList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKLanguageManage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalConfig.ts', './MKEventTarget.ts', './MKInstanceBase.ts', './MKLogger.ts', './MKAsset.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, sys, SpriteFrame, GlobalConfig, MKEventTarget, MKInstanceBase, MKLogger, mkAsset;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      GlobalConfig = module.default;
    }, function (module) {
      MKEventTarget = module.default;
    }, function (module) {
      MKInstanceBase = module.default;
    }, function (module) {
      MKLogger = module.default;
    }, function (module) {
      mkAsset = module.default;
    }],
    execute: function () {
      exports('MKLanguageManage_', void 0);
      cclegacy._RF.push({}, "96c3fqtej5BLbTcOatTT96p", "MKLanguageManage", undefined);
      /**
       * 多语言管理器
       * @noInheritDoc
       * @remarks
       *
       * - 多语言资源单位为模块，防止无用多语言资源堆积
       *
       * - 支持多语言(文本/图片/节点)，三种方式满足任何需求
       *
       * - 支持编辑器预览
       */
      var MKLanguageManage = exports('MKLanguageManage', /*#__PURE__*/function (_MKInstanceBase) {
        _inheritsLoose(MKLanguageManage, _MKInstanceBase);
        function MKLanguageManage() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MKInstanceBase.call.apply(_MKInstanceBase, [this].concat(args)) || this;
          /* --------------- public --------------- */
          /** 事件 */
          _this.event = new MKEventTarget();
          /** 文本数据 */
          _this.labelDataTab = Object.create(null);
          /** 纹理数据 */
          _this.textureDataTab = Object.create(null);
          /* --------------- private --------------- */
          /** 日志 */
          _this._log = new MKLogger("MKLanguage");
          /** 当前语言类型 */
          _this._languageStr = null;
          return _this;
        }
        var _proto = MKLanguageManage.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /**
         * 获取文本
         * @param type_ 类型
         * @param markStr_ 标识
         * @param config_ 配置
         * @returns
         */
        _proto.getLabel = function getLabel(type_, markStr_, config_) {
          var _this$labelDataTab$ty, _config$argsStrList;
          var config = new MKLanguageManage_.LabelConfig(config_);
          var resultStr = (_this$labelDataTab$ty = this.labelDataTab[type_]) == null || (_this$labelDataTab$ty = _this$labelDataTab$ty[markStr_]) == null ? void 0 : _this$labelDataTab$ty[GlobalConfig.Language.types[config.language]];

          // 不存在配置
          if (!resultStr) {
            if (markStr_) {
              this._log.warn(type_ + "." + markStr_ + "." + GlobalConfig.Language.types[config.language] + "\u4E0B\u7684\u6587\u672C\u672A\u914D\u7F6E\uFF01");
            }
            return markStr_;
          }

          // 替换参数
          (_config$argsStrList = config.argsStrList) == null || _config$argsStrList.forEach(function (vStr, kNum) {
            resultStr = resultStr.replace("" + GlobalConfig.Language.argsHeadStr + kNum + GlobalConfig.Language.argsTailStr, vStr);
          });
          return resultStr;
        }

        /**
         * 获取纹理
         * @param type_ 类型
         * @param markStr_ 标记
         * @param target_ 跟随释放对象
         * @param language_ 语言
         * @returns
         */;
        _proto.getTexture = /*#__PURE__*/
        function () {
          var _getTexture = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(type_, markStr_, target_, language_) {
            var _this$textureDataTab$;
            var pathStr, asset, _asset;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (language_ === void 0) {
                    language_ = this._languageStr;
                  }
                  pathStr = (_this$textureDataTab$ = this.textureDataTab[type_]) == null || (_this$textureDataTab$ = _this$textureDataTab$[markStr_]) == null ? void 0 : _this$textureDataTab$[GlobalConfig.Language.types[language_]];
                  if (pathStr) {
                    _context.next = 5;
                    break;
                  }
                  this._log.error(type_ + "." + markStr_ + "." + GlobalConfig.Language.types[language_] + "\u4E0B\u7684\u7EB9\u7406\u672A\u914D\u7F6E\uFF01");
                  return _context.abrupt("return", null);
                case 5:
                  {
                    _context.next = 13;
                    break;
                  }
                case 8:
                  asset = _context.sent;
                  if (!asset) {
                    _context.next = 11;
                    break;
                  }
                  return _context.abrupt("return", SpriteFrame.createWithImage(asset));
                case 11:
                  _context.next = 18;
                  break;
                case 13:
                  _context.next = 15;
                  return mkAsset.get(pathStr, SpriteFrame, target_);
                case 15:
                  _asset = _context.sent;
                  if (!_asset) {
                    _context.next = 18;
                    break;
                  }
                  return _context.abrupt("return", _asset);
                case 18:
                  return _context.abrupt("return", null);
                case 19:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function getTexture(_x, _x2, _x3, _x4) {
            return _getTexture.apply(this, arguments);
          }
          return getTexture;
        }()
        /**
         * 添加文本数据
         * @param type_ 类型
         * @param data_ 数据
         */;

        _proto.addLabel = function addLabel(type_, data_) {
          this.labelDataTab[type_] = data_;

          // 事件通知
          this.event.emit(this.event.key.labelDataChange);
        }

        /**
         * 添加纹理数据
         * @param type_ 类型
         * @param data_ 数据
         */;
        _proto.addTexture = function addTexture(type_, data_) {
          this.textureDataTab[type_] = data_;

          // 事件通知
          this.event.emit(this.event.key.textureDataChange);
        }

        /* ------------------------------- get/set ------------------------------- */;
        _proto._getTypeStr = function _getTypeStr() {
          if (this._languageStr === null) {
            if (GlobalConfig.Language.defaultTypeStr !== "auto") {
              this._languageStr = GlobalConfig.Language.defaultTypeStr;
            }
            // 根据地区设置默认语言
            else {
              var keyStrList = Object.keys(GlobalConfig.Language.typeTab);
              var targetIndexNum = keyStrList.findIndex(function (vStr) {
                var _supportStrList;
                return (_supportStrList = GlobalConfig.Language.typeTab[vStr].supportStrList) == null ? void 0 : _supportStrList.includes(sys.languageCode);
              });
              if (targetIndexNum === -1 && sys.languageCode.includes("-")) {
                var languageStr = sys.languageCode.split("-")[0];
                targetIndexNum = keyStrList.findIndex(function (vStr) {
                  var _supportStrList2;
                  return (_supportStrList2 = GlobalConfig.Language.typeTab[vStr].supportStrList) == null ? void 0 : _supportStrList2.includes(languageStr);
                });
              }
              if (targetIndexNum === -1) {
                this._log.warn("\u6CA1\u6709\u548C sys.languageCode \u5339\u914D\u7684\u8BED\u79CD\uFF0C\u8BBE\u7F6E\u9ED8\u8BA4\u8BED\u8A00\u4E3A " + keyStrList[0]);
                this._languageStr = keyStrList[0];
              } else {
                this._languageStr = keyStrList[targetIndexNum];
              }
            }
          }
          return this._languageStr;
        };
        _proto._setTypeStr = function _setTypeStr(value_) {
          if (this._languageStr === value_) {
            return;
          }
          this._languageStr = value_;

          // 事件通知
          this.event.emit(this.event.key.switchLanguage);
        };
        _createClass(MKLanguageManage, [{
          key: "typeStr",
          get: /** 当前语言类型 */
          function get() {
            return this._getTypeStr();
          },
          set: function set(value_) {
            this._setTypeStr(value_);
          }

          /** 获取语言数据 */
        }, {
          key: "data",
          get: function get() {
            return GlobalConfig.Language.typeTab[this._languageStr];
          }
        }]);
        return MKLanguageManage;
      }(MKInstanceBase));
      var MKLanguageManage_;
      (function (_MKLanguageManage_) {
        /** 多语言数据结构 */
        /** 获取文本配置 */
        var LabelConfig = function LabelConfig(init_) {
          /** 语言类型 */
          this.language = MKLanguageManage.instance().typeStr;
          /** 参数 */
          this.argsStrList = void 0;
          Object.assign(this, init_);
        };
        _MKLanguageManage_.LabelConfig = LabelConfig;
        var BaseData = function BaseData(init_) {
          /** 多语言键 */
          this.key = new Proxy(Object.create(null), {
            get: function get(target, key) {
              return key;
            }
          });
          /** 多语言数据 */
          this.data = void 0;
          this.data = init_;
        };
        _MKLanguageManage_.BaseData = BaseData;
        var TextureData = /*#__PURE__*/function (_BaseData) {
          _inheritsLoose(TextureData, _BaseData);
          function TextureData(type_, init_) {
            var _this2;
            _this2 = _BaseData.call(this, init_) || this;
            MKLanguageManage.instance().addTexture(type_, init_);
            return _this2;
          }
          return TextureData;
        }(BaseData);
        _MKLanguageManage_.TextureData = TextureData;
        var LabelData = /*#__PURE__*/function (_BaseData2) {
          _inheritsLoose(LabelData, _BaseData2);
          function LabelData(type_, init_) {
            var _this3;
            _this3 = _BaseData2.call(this, init_) || this;
            MKLanguageManage.instance().addLabel(type_, init_);
            return _this3;
          }
          return LabelData;
        }(BaseData);
        _MKLanguageManage_.LabelData = LabelData;
      })(MKLanguageManage_ || (MKLanguageManage_ = exports('MKLanguageManage_', {})));
      var mkLanguageManage = exports('default', MKLanguageManage.instance());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKLanguageNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalConfig.ts', './MKLanguageManage.ts', './MKToolEnum.ts'], function (exports) {
  var _applyDecoratedDescriptor, _createClass, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Node, Layout, Component, GlobalConfig, mkLanguageManage, mkToolEnum;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Node = module.Node;
      Layout = module.Layout;
      Component = module.Component;
    }, function (module) {
      GlobalConfig = module.default;
    }, function (module) {
      mkLanguageManage = module.default;
    }, function (module) {
      mkToolEnum = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "4abbf+mlmhLXLVf6TzwUNOm", "MKLanguageNode", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var _MKLanguageNode;
      (function (_MKLanguageNode2, _dec6, _dec7, _dec8, _dec9, _class4, _class5, _descriptor4, _descriptor5) {
        var languageTypeEnum = _MKLanguageNode2.languageTypeEnum = mkToolEnum.objToEnum(GlobalConfig.Language.typeTab);
        var LNode = (_dec6 = ccclass("MKLanguageNode/Node"), _dec7 = property({
          displayName: "语言",
          type: Enum(languageTypeEnum)
        }), _dec8 = property({
          visible: false
        }), _dec9 = property({
          displayName: "节点",
          type: Node
        }), _dec6(_class4 = (_class5 = /*#__PURE__*/function () {
          function LNode(init_) {
            /** 语言 */
            _initializerDefineProperty(this, "languageStr", _descriptor4, this);
            /** 节点 */
            _initializerDefineProperty(this, "node", _descriptor5, this);
            Object.assign(this, init_);
          }

          /* --------------- 属性 --------------- */
          /** 语言 */
          _createClass(LNode, [{
            key: "language",
            get: function get() {
              return languageTypeEnum[this.languageStr];
            },
            set: function set(valueNum_) {
              this.languageStr = GlobalConfig.Language.types[valueNum_];
            }
          }]);
          return LNode;
        }(), (_applyDecoratedDescriptor(_class5.prototype, "language", [_dec7], Object.getOwnPropertyDescriptor(_class5.prototype, "language"), _class5.prototype), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "languageStr", [_dec8], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return Object.keys(GlobalConfig.Language.typeTab)[0];
          }
        }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "node", [_dec9], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        })), _class5)) || _class4);
        _MKLanguageNode2.LNode = LNode;
      })(_MKLanguageNode || (_MKLanguageNode = {}));
      /**
       * 多语言节点
       * @noInheritDoc
       */
      var MKLanguageNode = exports('default', (_dec = property({
        visible: false
      }), _dec2 = property({
        displayName: "语言",
        type: Enum(_MKLanguageNode.languageTypeEnum)
      }), _dec3 = property({
        displayName: "当前语言节点",
        type: Node,
        visible: true
      }), _dec4 = property({
        displayName: "语言节点列表",
        type: [_MKLanguageNode.LNode],
        visible: false
      }), _dec5 = property({
        displayName: "layout 适配",
        tooltip: "根据语言配置从左到右或从右到左"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MKLanguageNode, _Component);
        function MKLanguageNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /* --------------- 属性 --------------- */
          /** 语言 */
          _initializerDefineProperty(_this, "languageStr", _descriptor, _assertThisInitialized(_this));
          /** 语言节点列表 */
          _initializerDefineProperty(_this, "nodeList", _descriptor2, _assertThisInitialized(_this));
          /** layout 适配 */
          _initializerDefineProperty(_this, "isLayoutAdaptation", _descriptor3, _assertThisInitialized(_this));
          /* --------------- private --------------- */
          _this._layout = null;
          return _this;
        }
        var _proto = MKLanguageNode.prototype;
        /* ------------------------------- 生命周期 ------------------------------- */
        _proto.onLoad = function onLoad() {
          this._layout = this.getComponent(Layout);
        };
        _proto.onEnable = function onEnable() {
          this._onSwitchLanguage();
          this._initEvent(true);
        };
        _proto.onDisable = function onDisable() {
          this._initEvent(false);
        }

        /** 初始化事件 */;
        _proto._initEvent = function _initEvent(isInit_) {
          if (isInit_) {
            mkLanguageManage.event.on(mkLanguageManage.event.key.switchLanguage, this._onSwitchLanguage, this);
          } else {
            mkLanguageManage.event.off(mkLanguageManage.event.key.switchLanguage, this._onSwitchLanguage, this);
          }
        }
        /* ------------------------------- 功能 ------------------------------- */
        /** 更新节点展示 */;
        _proto._updateView = function _updateView() {
          {
            var _this$_layout;
            // 节点显示隐藏
            this.nodeList.forEach(function (v) {
              v.node.active = v.languageStr === mkLanguageManage.typeStr;
            });

            // layout 适配
            if (this.isLayoutAdaptation && (_this$_layout = this._layout) != null && _this$_layout.alignHorizontal) {
              this._layout.horizontalDirection = mkLanguageManage.data.dire;
            }
          }
        }

        /* ------------------------------- 框架事件 ------------------------------- */;
        _proto._onSwitchLanguage = function _onSwitchLanguage() {
          this._updateView();
        };
        _createClass(MKLanguageNode, [{
          key: "language",
          get: /** 语言 */
          function get() {
            return _MKLanguageNode.languageTypeEnum[this.languageStr];
          },
          set: function set(valueNum_) {
            this.languageStr = _MKLanguageNode.languageTypeEnum[valueNum_];
            this._updateView();
          }

          /** 当前语言节点 */
        }, {
          key: "_node",
          get: function get() {
            var _this$nodeList$find$n,
              _this$nodeList$find,
              _this3 = this;
            return (_this$nodeList$find$n = (_this$nodeList$find = this.nodeList.find(function (v) {
              return v instanceof _MKLanguageNode.LNode && v.languageStr === _this3.languageStr;
            })) == null ? void 0 : _this$nodeList$find.node) != null ? _this$nodeList$find$n : null;
          },
          set: function set(value_) {
            var _this4 = this;
            var node = this.nodeList.find(function (v) {
              return v instanceof _MKLanguageNode.LNode && v.languageStr === _this4.languageStr;
            });
            if (node) {
              node.node = value_;
            } else {
              this.nodeList.push(new _MKLanguageNode.LNode({
                languageStr: this.languageStr,
                node: value_
              }));
            }
          }
        }, {
          key: "currentNode",
          get: /* --------------- public --------------- */
          /** 当前语言节点 */
          function get() {
            var _this$nodeList$find$n2, _this$nodeList$find2;
            return (_this$nodeList$find$n2 = (_this$nodeList$find2 = this.nodeList.find(function (v) {
              return v.languageStr === GlobalConfig.Language.types[mkLanguageManage.typeStr];
            })) == null ? void 0 : _this$nodeList$find2.node) != null ? _this$nodeList$find$n2 : null;
          }
        }]);
        return MKLanguageNode;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "languageStr", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Object.keys(GlobalConfig.Language.typeTab)[0];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "language", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "language"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_node", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "_node"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isLayoutAdaptation", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKLanguageTexture.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalConfig.ts', './MKLanguageManage.ts', './MKAsset.ts', './MKLanguageBase.ts', './MKToolEnum.ts', './MKToolString.ts', './MKTaskPipeline.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, error, SpriteFrame, GlobalConfig, mkLanguageManage, mkAsset, MKLanguageBase, mkToolEnum, MKTaskPipeline;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      error = module.error;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      GlobalConfig = module.default;
    }, function (module) {
      mkLanguageManage = module.default;
    }, function (module) {
      mkAsset = module.default;
    }, function (module) {
      MKLanguageBase = module.default;
    }, function (module) {
      mkToolEnum = module.default;
    }, null, function (module) {
      MKTaskPipeline = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "e834avlAlRMeqP0/vKzffdo", "MKLanguageTexture", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode,
        requireComponent = _decorator.requireComponent;

      /**
       * 多语言图片
       * @noInheritDoc
       */
      var MKLanguageTexture = exports('default', (_dec = requireComponent(Sprite), _dec2 = property({
        override: true
      }), ccclass(_class = _dec(_class = executeInEditMode(_class = (_class2 = (_class3 = /*#__PURE__*/function (_MKLanguageBase) {
        _inheritsLoose(MKLanguageTexture, _MKLanguageBase);
        function MKLanguageTexture() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MKLanguageBase.call.apply(_MKLanguageBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_typeStr", _descriptor, _assertThisInitialized(_this));
          /* --------------- private --------------- */
          /** sprite组件 */
          _this._sprite = void 0;
          /** 上个纹理 */
          _this._previousSpriteFrame = null;
          /** 任务管线 */
          _this._taskPipeline = new MKTaskPipeline();
          return _this;
        }
        var _proto = MKLanguageTexture.prototype;
        /* ------------------------------- 生命周期 ------------------------------- */
        _proto.onEnable = function onEnable() {
          _MKLanguageBase.prototype.onEnable.call(this);
        };
        _proto.onDisable = function onDisable() {
          _MKLanguageBase.prototype.onDisable.call(this);
        };
        _proto.onDestroy = function onDestroy() {
          var _this$_previousSprite;
          // 释放上个资源
          (_this$_previousSprite = this._previousSpriteFrame) == null || _this$_previousSprite.decRef();
        }

        /* ------------------------------- 功能 ------------------------------- */
        /** 重置数据 */;
        _proto._resetData = function _resetData() {
          // 更新类型数据
          this._data = mkLanguageManage.textureDataTab[this._typeStr];

          // 更新内容
          this._updateContent();
        };
        _proto._updateContent = /*#__PURE__*/function () {
          var _updateContent2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _language$textureData,
              _this2 = this;
            var markStr, pathStr, asset;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (this._sprite) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  markStr = this._markStr.slice(this._markStr[0] === "\u200B" ? 1 : 0);
                  pathStr = (_language$textureData = mkLanguageManage.textureDataTab[this._typeStr]) == null || (_language$textureData = _language$textureData[markStr]) == null ? void 0 : _language$textureData[GlobalConfig.Language.types[mkLanguageManage.typeStr]];
                  if (pathStr) {
                    _context2.next = 6;
                    break;
                  }
                  return _context2.abrupt("return");
                case 6:
                  {
                    _context2.next = 21;
                    break;
                  }
                case 10:
                  asset = _context2.sent;
                  this._previousSpriteFrame = asset;
                  if (asset != null && asset.uuid) {
                    _context2.next = 14;
                    break;
                  }
                  return _context2.abrupt("return");
                case 14:
                  _context2.next = 16;
                  return Editor.Message.request("scene", "query-node", this.node.uuid);
                case 16:
                  if (_context2.sent) {
                    _context2.next = 18;
                    break;
                  }
                  return _context2.abrupt("return");
                case 18:
                  Editor.Message.request("scene", "set-property", {
                    uuid: this.node.uuid,
                    path: "__comps__." + this.node.components.indexOf(this._sprite) + ".spriteFrame",
                    dump: {
                      type: "cc.SpriteFrame",
                      value: {
                        uuid: asset.uuid + "@f9941"
                      }
                    }
                  });
                  _context2.next = 23;
                  break;
                case 21:
                  this._taskPipeline.clear(true);
                  this._taskPipeline.add( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    var _this2$_previousSprit;
                    var asset;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          // 释放上个纹理资源
                          (_this2$_previousSprit = _this2._previousSpriteFrame) == null || _this2$_previousSprit.decRef();
                          _context.next = 3;
                          return mkAsset.get(pathStr, SpriteFrame, null);
                        case 3:
                          asset = _context.sent;
                          _this2._previousSpriteFrame = _this2._sprite.spriteFrame = asset;
                          if (asset) {
                            _context.next = 7;
                            break;
                          }
                          return _context.abrupt("return");
                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  })));
                case 23:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function _updateContent() {
            return _updateContent2.apply(this, arguments);
          }
          return _updateContent;
        }();
        _proto._updateMark = function _updateMark() {
          this._updateContent();
        };
        _proto._setType = function _setType(value_) {
          this._typeStr = MKLanguageTexture._typeEnum[value_];
          this._resetData();
        };
        _proto._setTypeStr = function _setTypeStr(valueStr_) {
          {
            this._setType(MKLanguageTexture._typeEnum[valueStr_]);
          }
        };
        _proto._initData = function _initData() {
          this._sprite = this.node.getComponent(Sprite);
          if (!this._sprite) {
            error("节点不存在 Sprite 组件");
            return;
          }
          _MKLanguageBase.prototype._initData.call(this);
        }

        /** 初始化组件 */;
        _proto._initComponent = function _initComponent() {
          /** 注册类型 */
          MKLanguageTexture._typeEnum = mkToolEnum.objToEnum(mkLanguageManage.textureDataTab);
          {
            return;
          }
        }

        /* ------------------------------- get/set ------------------------------- */
        /* ------------------------------- 自定义事件 ------------------------------- */;
        _proto._onTextureDataChange = function _onTextureDataChange() {
          this.unschedule(this._initComponent);
          this.scheduleOnce(this._initComponent);
        };
        _createClass(MKLanguageTexture, [{
          key: "type",
          get: /* --------------- 属性 --------------- */
          function get() {
            return MKLanguageTexture._typeEnum[this._typeStr];
          },
          set: function set(valueNum_) {
            this._setType(valueNum_);
          }
        }]);
        return MKLanguageTexture;
      }(MKLanguageBase), _class3._typeStrList = Object.keys(mkLanguageManage.textureDataTab), _class3._typeEnum = mkToolEnum.objToEnum(mkLanguageManage.textureDataTab), _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_typeStr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          var _MKLanguageTexture$_t;
          return (_MKLanguageTexture$_t = MKLanguageTexture._typeStrList[0]) != null ? _MKLanguageTexture$_t : "";
        }
      }), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalConfig.ts', './MKNodes.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, Component, GlobalConfig, MKN;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Component = module.Component;
    }, function (module) {
      GlobalConfig = module.default;
    }, function (module) {
      MKN = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "32387Bcu3VD16dJ7cGJPiR0", "MKLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;

      /**
       * 层级管理
       * @noInheritDoc
       * @remarks
       *
       * - 动态多类型层级划分
       *
       * - 支持类型层级细粒度划分
       */
      var MKLayer = exports('default', (_dec = property({
        visible: false
      }), _dec2 = property({
        displayName: "层类型",
        type: Enum({
          未初始化: 0
        }),
        group: {
          name: "视图配置",
          id: "1"
        },
        visible: function visible() {
          return this._isUseLayer;
        }
      }), _dec3 = property({
        displayName: "层级",
        tooltip: "注意：仅同级节点下生效",
        group: {
          name: "视图配置",
          id: "1"
        },
        min: 0,
        step: 1,
        visible: function visible() {
          return this._isUseLayer;
        }
      }), ccclass(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MKLayer, _Component);
        function MKLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** 层类型 */
          _initializerDefineProperty(_this, "layerTypeNum", _descriptor, _assertThisInitialized(_this));
          /* --------------- protected --------------- */
          /**
           * 使用 layer
           * @defaultValue
           * true
           * @remarks
           * false：关闭 layer 功能
           */
          _this._isUseLayer = true;
          /* --------------- private --------------- */
          /** 层级 */
          _initializerDefineProperty(_this, "_childLayerNum", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MKLayer.prototype;
        /* ------------------------------- 生命周期 ------------------------------- */
        _proto.onEnable = function onEnable() {
          if (!this._isUseLayer) {
            return;
          }
          this._updateLayer();
        }

        /* ------------------------------- 功能 ------------------------------- */
        /** 初始化编辑器 */;
        _proto._initEditor = function _initEditor() {
          if (!this._isUseLayer) {
            return;
          }
        }

        /** 更新渲染顺序 */;
        _proto._updateLayer = function _updateLayer() {
          if (!this._isUseLayer || !this.node.parent) {
            return;
          }

          /** 当前层 */
          var layerNum = this.layerTypeNum * MKLayer._config.layerSpacingNum + this._childLayerNum;

          // 更新渲染顺序
          MKN(this.node).orderNum = layerNum;
        };
        _createClass(MKLayer, [{
          key: "initEditor",
          get: /* --------------- 属性 --------------- */
          /** 初始化编辑器 */
          function get() {
            this._initEditor();
            return;
          }
        }, {
          key: "childLayerNum",
          get: /** 层级 */
          function get() {
            return this._childLayerNum;
          },
          set: function set(valueNum_) {
            this._childLayerNum = valueNum_;
            this._updateLayer();
          }
        }]);
        return MKLayer;
      }(Component), _class3._config = GlobalConfig.View.config, _class3), (_applyDecoratedDescriptor(_class2.prototype, "initEditor", [_dec], Object.getOwnPropertyDescriptor(_class2.prototype, "initEditor"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "layerTypeNum", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "childLayerNum", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "childLayerNum"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_childLayerNum", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKLifeCycle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKDynamicModule.ts', './MKLogger.ts', './MKMonitor.ts', './MKStatusTask.ts', './MKLayer.ts', './MKAudioExport.ts', './MKRelease.ts', './GlobalConfig.ts', './MKToolFunc.ts', './MKToolObject.ts', './MKAudioBase.ts'], function (exports, module) {
  var _inheritsLoose, _createClass, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, _extends, cclegacy, _decorator, js, CCClass, isValid, mkDynamicModule, MKLogger, mkMonitor, MKStatusTask, MKLayer, mkAudio, MKRelease, GlobalConfig, mkToolFunc, mkToolObject, MKAudioBase_;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      js = module.js;
      CCClass = module.CCClass;
      isValid = module.isValid;
    }, function (module) {
      mkDynamicModule = module.default;
    }, function (module) {
      MKLogger = module.default;
    }, function (module) {
      mkMonitor = module.default;
    }, function (module) {
      MKStatusTask = module.default;
    }, function (module) {
      MKLayer = module.default;
    }, function (module) {
      mkAudio = module.mkAudio;
    }, function (module) {
      MKRelease = module.default;
    }, function (module) {
      GlobalConfig = module.default;
    }, function (module) {
      mkToolFunc = module.default;
    }, function (module) {
      mkToolObject = module.default;
    }, function (module) {
      MKAudioBase_ = module.MKAudioBase_;
    }],
    execute: function () {
      exports('_MKLifeCycle', void 0);
      var _class;
      cclegacy._RF.push({}, "552b80+HehF6ZJH5w11Ljth", "MKLifeCycle", undefined);
      // @weak-start-include-MKUIManage
      var uiManage = mkDynamicModule["default"](module.import('./MKUIManage.ts'));
      // @weak-end
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var _MKLifeCycle;
      (function (_MKLifeCycle2) {
        var RunState = /*#__PURE__*/function (RunState) {
          RunState[RunState["WaitOpen"] = 1] = "WaitOpen";
          RunState[RunState["Opening"] = 2] = "Opening";
          RunState[RunState["Open"] = 4] = "Open";
          RunState[RunState["Closing"] = 8] = "Closing";
          RunState[RunState["Close"] = 16] = "Close";
          return RunState;
        }({});
        _MKLifeCycle2.RunState = RunState;
        /** 递归 open 配置 */
        /** 递归 close 配置 */
        /** create 配置 */
        /** open 配置 */
        /** close 配置 */
      })(_MKLifeCycle || (_MKLifeCycle = exports('_MKLifeCycle', {})));
      /**
       * 生命周期
       * @noInheritDoc
       * @remarks
       * 用于模块生命周期控制，注意所有生命周期函数 onLoad、open ... 等都会自动执行父类函数再执行子类函数，不必手动 super.xxx 调用
       */
      var MKLifeCycle = function (v) {
        return exports({
          MKLifeCycle: v,
          default: v
        }), v;
      }(ccclass(_class = /*#__PURE__*/function (_MKLayer) {
        _inheritsLoose(MKLifeCycle, _MKLayer);
        function MKLifeCycle() {
          var _this;
          for (var _len = arguments.length, argsList = new Array(_len), _key = 0; _key < _len; _key++) {
            argsList[_key] = arguments[_key];
          }
          // @ts-ignore
          _this = _MKLayer.call.apply(_MKLayer, [this].concat(argsList)) || this;
          /* --------------- public --------------- */
          /** 初始化数据 */
          _this.initData = void 0;
          /**
           * 视图数据
           * @remarks
           * 如果是 class 类型数据会在 close 后自动重置，根据 this._isResetData 控制
           */
          _this.data = void 0;
          /**
           * 事件对象列表
           * @readonly
           * @remarks
           * 模块关闭后自动清理事件
           */
          _this.eventTargetList = [];
          /* --------------- protected --------------- */
          /** 静态模块 */
          _this._isStatic = true;
          /** onLoad 任务 */
          _this._onLoadTask = new MKStatusTask(false);
          /** create 任务 */
          _this._createTask = new MKStatusTask(false);
          /** open 任务 */
          _this._openTask = new MKStatusTask(false);
          /** 运行状态 */
          _this._state = _MKLifeCycle.RunState.Close;
          /**
           * 释放管理器
           * @internal
           */
          _this._releaseManage = new MKRelease();
          /**
           * 重置 data
           * @remarks
           * close 后重置 this.data，data 必须为 class 类型
           */
          _this._isResetData = true;
          /* --------------- private --------------- */
          /** 日志 */
          _this._log2 = void 0;
          /** 初始化计数（防止 onLoad 前多次初始化调用多次 init） */
          _this._waitInitNum = 0;

          // 设置父类自启函数
          mkToolFunc.runParentFunc(_assertThisInitialized(_this), ["onLoad", "start", "update", "lateUpdate", "onEnable", "onDisable", "onDestroy", "create", "init", "open", "close", "lateClose"]);

          // 设置函数超时警告
          mkToolFunc.timeoutWarning(GlobalConfig.View.blockingWarningTimeMsNum, _assertThisInitialized(_this), ["_open", "_close", "create", "init", "open", "close", "lateClose"]);
          return _this;
        }
        var _proto = MKLifeCycle.prototype;
        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var attrTab, attrKeyStrList;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this._onLoadTask.finish(true);

                  /** 参数表 */
                  attrTab = CCClass.Attr.getClassAttrs(this["__proto__"].constructor);
                  /** 参数键列表 */
                  attrKeyStrList = Object.keys(attrTab); // @weak-start-include-MKAudioExport
                  // 初始化音频单元
                  attrKeyStrList.forEach(function (vStr) {
                    if (!vStr.endsWith("$_$ctor")) {
                      return;
                    }

                    /** 属性名 */
                    var nameStr = vStr.slice(0, -7);

                    // 初始化音频单元
                    if (_this2[nameStr] instanceof MKAudioBase_.PrivateUnit) {
                      mkAudio._add(_this2[nameStr]);
                    }
                  });
                  // @weak-end

                  // 静态模块 create
                  if (!this.isStatic) {
                    _context.next = 10;
                    break;
                  }
                  // 状态更新
                  if (this._state !== _MKLifeCycle.RunState.Opening) {
                    this._state = _MKLifeCycle.RunState.WaitOpen;
                  }

                  // 生命周期
                  if (!this.create) {
                    _context.next = 9;
                    break;
                  }
                  _context.next = 9;
                  return this.create();
                case 9:
                  this._createTask.finish(true);
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onLoad() {
            return _onLoad.apply(this, arguments);
          }
          return onLoad;
        }()
        /* ------------------------------- 自定义生命周期 ------------------------------- */
        /**
         * 创建
         * @param config_ 创建配置
         * @remarks
         * 可在此处初始化视图状态
         *
         * - 静态模块：onLoad 时调用
         *
         * - 动态模块：addChild 后调用
         */;

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data_) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this._waitInitNum++;
                  if (this._onLoadTask.isFinish) {
                    _context2.next = 4;
                    break;
                  }
                  _context2.next = 4;
                  return this._onLoadTask.task;
                case 4:
                  if (!(--this._waitInitNum !== 0)) {
                    _context2.next = 6;
                    break;
                  }
                  throw "中断";
                case 6:
                  this.initData = data_;
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function init(_x) {
            return _init.apply(this, arguments);
          }
          return init;
        }()
        /**
         * 打开
         * @protected
         * @remarks
         * onLoad，init 后执行，在此处执行无需 initData 支持的模块初始化操作
         *
         * open 顺序: 子 -> 父
         */;

        _proto.open = /*#__PURE__*/function () {
          var _open2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (this._onLoadTask.isFinish) {
                    _context3.next = 3;
                    break;
                  }
                  _context3.next = 3;
                  return this._onLoadTask.task;
                case 3:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function open() {
            return _open2.apply(this, arguments);
          }
          return open;
        }()
        /**
         * 关闭
         * @remarks
         * 模块关闭前调用，可被外部调用（回收模块）
         *
         *  close 顺序: 父 -> 子
         */;

        _proto.lateClose = /*#__PURE__*/function () {
          var _lateClose = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _this3 = this;
            var attrTab, attrKeyStrList, task;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  /** 参数表 */
                  attrTab = CCClass.Attr.getClassAttrs(this["__proto__"].constructor);
                  /** 参数键列表 */
                  attrKeyStrList = Object.keys(attrTab); // @weak-start-include-MKAudioExport
                  // 删除音频单元
                  attrKeyStrList.forEach(function (vStr) {
                    if (!vStr.endsWith("$_$ctor")) {
                      return;
                    }

                    /** 属性名 */
                    var nameStr = vStr.slice(0, -7);

                    // 清理音频组内的音频单元
                    if (_this3[nameStr] instanceof MKAudioBase_.PrivateUnit) {
                      mkAudio.getGroup(_this3[nameStr].type).delAudio(_this3[nameStr]);
                      _this3[nameStr].groupIdNumList.forEach(function (v2Num) {
                        mkAudio.getGroup(v2Num).delAudio(_this3[nameStr]);
                      });
                    }
                  });
                  // @weak-end

                  // 清理事件
                  this.eventTargetList.splice(0, this.eventTargetList.length).forEach(function (v) {
                    v.targetOff == null || v.targetOff(_this3);
                  });

                  // 取消所有定时器
                  this.unscheduleAllCallbacks();
                  // @weak-start-include-MKMonitor
                  // 取消数据监听事件
                  task = mkMonitor.clear(this);
                  if (!task) {
                    _context4.next = 9;
                    break;
                  }
                  _context4.next = 9;
                  return task;
                case 9:
                  _context4.next = 11;
                  return this._releaseManage.releaseAll();
                case 11:
                  // 重置数据
                  if (this.data && this._isResetData) {
                    mkToolObject.reset(this.data, true);
                  }
                case 12:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function lateClose() {
            return _lateClose.apply(this, arguments);
          }
          return lateClose;
        }()
        /* ------------------------------- 功能 ------------------------------- */
        /** 驱动生命周期运行（用于动态添加的组件） */;

        _proto.drive = /*#__PURE__*/
        function () {
          var _drive = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(initData_) {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  return _context5.abrupt("return", this._open({
                    isFirst: true,
                    init: initData_
                  }));
                case 1:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function drive(_x2) {
            return _drive.apply(this, arguments);
          }
          return drive;
        }();
        _proto.followRelease = function followRelease(object_) {
          if (!object_) {
            return;
          }
          if (this.node && !this.node.active) {
            this._log.warn("节点已隐藏，资源可能不会跟随释放");
            return;
          }

          // 如果模块已经关闭则直接释放
          if (this._state === _MKLifeCycle.RunState.Close) {
            this._log.debug("在模块关闭后跟随释放资源会被立即释放");
            MKRelease.release(object_);
          } else {
            // 添加释放对象
            this._releaseManage.add(object_);
          }
        };
        _proto.cancelRelease = function cancelRelease(object_) {
          if (!object_) {
            return;
          }

          // 删除释放对象
          this._releaseManage["delete"](object_);
          return;
        }

        /**
         * 打开模块
         * @param config_ 关闭配置
         * @returns
         * @internal
         */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ;

        _proto._open = /*#__PURE__*/
        function () {
          var _open3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(config_) {
            var config;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (!(this._state & (_MKLifeCycle.RunState.Opening | _MKLifeCycle.RunState.Open))) {
                    _context6.next = 2;
                    break;
                  }
                  return _context6.abrupt("return");
                case 2:
                  // 状态更新
                  this._state = _MKLifeCycle.RunState.Opening;

                  // create
                  if (!this.isStatic) {
                    _context6.next = 8;
                    break;
                  }
                  _context6.next = 6;
                  return this._createTask.task;
                case 6:
                  _context6.next = 12;
                  break;
                case 8:
                  if (!this.create) {
                    _context6.next = 11;
                    break;
                  }
                  _context6.next = 11;
                  return this.create();
                case 11:
                  this._createTask.finish(true);
                case 12:
                  if (!(!this.isValid || this._state !== _MKLifeCycle.RunState.Opening)) {
                    _context6.next = 14;
                    break;
                  }
                  return _context6.abrupt("return");
                case 14:
                  /** 配置 */
                  config = config_ != null ? config_ : Object.create(null); // 生命周期
                  if (!config.isFirst) {
                    _context6.next = 20;
                    break;
                  }
                  _context6.next = 18;
                  return this._recursiveOpen({
                    target: this.node,
                    isActive: this.node.active
                  });
                case 18:
                  if (!(!this.isValid || this._state !== _MKLifeCycle.RunState.Opening)) {
                    _context6.next = 20;
                    break;
                  }
                  return _context6.abrupt("return");
                case 20:
                  if (!(config.init !== undefined)) {
                    _context6.next = 25;
                    break;
                  }
                  _context6.next = 23;
                  return this.init(config.init);
                case 23:
                  if (!(!this.isValid || this._state !== _MKLifeCycle.RunState.Opening)) {
                    _context6.next = 25;
                    break;
                  }
                  return _context6.abrupt("return");
                case 25:
                  if (!this.open) {
                    _context6.next = 30;
                    break;
                  }
                  _context6.next = 28;
                  return this.open();
                case 28:
                  if (!(!this.isValid || this._state !== _MKLifeCycle.RunState.Opening)) {
                    _context6.next = 30;
                    break;
                  }
                  return _context6.abrupt("return");
                case 30:
                  // 状态更新
                  this._state = _MKLifeCycle.RunState.Open;
                  this._openTask.finish(true);
                case 32:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function _open(_x3) {
            return _open3.apply(this, arguments);
          }
          return _open;
        }()
        /**
         * 关闭模块
         * @param config_ 关闭配置
         * @returns
         * @internal
         */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ;

        _proto._close = /*#__PURE__*/
        function () {
          var _close2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(config_) {
            var _this$_openTask;
            var config;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  if (!(
                  // 允许隐藏的模块执行 close
                  this._onLoadTask.isFinish &&
                  // 不在 close 中
                  this._state & (_MKLifeCycle.RunState.Closing | _MKLifeCycle.RunState.Close))) {
                    _context7.next = 2;
                    break;
                  }
                  return _context7.abrupt("return");
                case 2:
                  /** 配置参数 */
                  config = config_ != null ? config_ : Object.create(null); // 等待模块 open 完成
                  if (!(!config.isForce && !this._openTask.isFinish)) {
                    _context7.next = 6;
                    break;
                  }
                  _context7.next = 6;
                  return this._openTask.task;
                case 6:
                  if (this.isValid) {
                    _context7.next = 8;
                    break;
                  }
                  return _context7.abrupt("return");
                case 8:
                  // 状态更新
                  this._state = _MKLifeCycle.RunState.Closing;

                  // 生命周期
                  if (!this.close) {
                    _context7.next = 14;
                    break;
                  }
                  _context7.next = 12;
                  return this.close();
                case 12:
                  if (this.isValid) {
                    _context7.next = 14;
                    break;
                  }
                  return _context7.abrupt("return");
                case 14:
                  if (!config.isFirst) {
                    _context7.next = 19;
                    break;
                  }
                  _context7.next = 17;
                  return this._recursiveClose({
                    target: this.node,
                    isActive: this.node.active,
                    parentConfig: config
                  });
                case 17:
                  if (this.isValid) {
                    _context7.next = 19;
                    break;
                  }
                  return _context7.abrupt("return");
                case 19:
                  if (!this.lateClose) {
                    _context7.next = 24;
                    break;
                  }
                  _context7.next = 22;
                  return this.lateClose();
                case 22:
                  if (this.isValid) {
                    _context7.next = 24;
                    break;
                  }
                  return _context7.abrupt("return");
                case 24:
                  // 状态更新
                  this._state = _MKLifeCycle.RunState.Close;

                  // 销毁自己
                  if (!(!this.isStatic && !config.isFirst)) {
                    _context7.next = 32;
                    break;
                  }
                  if (!config.isDestroyChildren) {
                    _context7.next = 30;
                    break;
                  }
                  this.node.destroy();
                  _context7.next = 32;
                  break;
                case 30:
                  // @weak-start-include-MKUIManage
                  uiManage.close(this.node);
                  // @weak-end
                  return _context7.abrupt("return");
                case 32:
                  // 重置状态
                  (_this$_openTask = this._openTask) == null || _this$_openTask.finish(false);
                case 33:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function _close(_x4) {
            return _close2.apply(this, arguments);
          }
          return _close;
        }() /** 递归 open */;
        _proto._recursiveOpen = /*#__PURE__*/
        function () {
          var _recursiveOpen2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(config_) {
            var _config_$target, _config_$target2;
            var isActive, _iterator, _step, v, openConfig, staticCompList, _iterator2, _step2, _v;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if ((_config_$target = config_.target) != null && _config_$target.isValid) {
                    _context8.next = 2;
                    break;
                  }
                  return _context8.abrupt("return");
                case 2:
                  isActive = config_.target.active;
                  _iterator = _createForOfIteratorHelperLoose(config_.target.children);
                case 4:
                  if ((_step = _iterator()).done) {
                    _context8.next = 10;
                    break;
                  }
                  v = _step.value;
                  _context8.next = 8;
                  return this._recursiveOpen({
                    target: v,
                    isActive: config_.isActive && isActive
                  });
                case 8:
                  _context8.next = 4;
                  break;
                case 10:
                  if ((_config_$target2 = config_.target) != null && _config_$target2.isValid) {
                    _context8.next = 12;
                    break;
                  }
                  return _context8.abrupt("return");
                case 12:
                  /** 配置数据 */
                  openConfig = Object.create(null);
                  /** 静态组件 */
                  staticCompList = config_.target.getComponents(MKLifeCycle).filter(function (v) {
                    return v.isStatic;
                  });
                  _iterator2 = _createForOfIteratorHelperLoose(staticCompList);
                case 15:
                  if ((_step2 = _iterator2()).done) {
                    _context8.next = 26;
                    break;
                  }
                  _v = _step2.value;
                  if (!(_v.enabled && _v.uuid !== this.uuid && isValid(_v, true))) {
                    _context8.next = 24;
                    break;
                  }
                  if (!(isActive && config_.isActive)) {
                    _context8.next = 23;
                    break;
                  }
                  _context8.next = 21;
                  return _v._open(openConfig);
                case 21:
                  _context8.next = 24;
                  break;
                case 23:
                  _v._open(openConfig);
                case 24:
                  _context8.next = 15;
                  break;
                case 26:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function _recursiveOpen(_x5) {
            return _recursiveOpen2.apply(this, arguments);
          }
          return _recursiveOpen;
        }() /** 递归 close */;
        _proto._recursiveClose = /*#__PURE__*/
        function () {
          var _recursiveClose2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(config_) {
            var _config_$target3;
            var closeConfig, isActive, compList, _iterator3, _step3, v, _iterator4, _step4, _v2;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  if ((_config_$target3 = config_.target) != null && _config_$target3.isValid) {
                    _context9.next = 2;
                    break;
                  }
                  return _context9.abrupt("return");
                case 2:
                  /** 配置数据 */
                  closeConfig = _extends({}, config_.parentConfig, {
                    isFirst: false
                  });
                  /** 上级激活状态 */
                  isActive = config_.target.active;
                  /** 模块列表 */
                  compList = config_.target.getComponents(MKLifeCycle);
                  _iterator3 = _createForOfIteratorHelperLoose(compList);
                case 6:
                  if ((_step3 = _iterator3()).done) {
                    _context9.next = 17;
                    break;
                  }
                  v = _step3.value;
                  if (!(v.enabled && v.uuid !== this.uuid && isValid(v, true))) {
                    _context9.next = 15;
                    break;
                  }
                  if (!(isActive && config_.isActive)) {
                    _context9.next = 14;
                    break;
                  }
                  _context9.next = 12;
                  return v._close(closeConfig);
                case 12:
                  _context9.next = 15;
                  break;
                case 14:
                  v._close(closeConfig);
                case 15:
                  _context9.next = 6;
                  break;
                case 17:
                  _iterator4 = _createForOfIteratorHelperLoose(config_.target.children.slice(0));
                case 18:
                  if ((_step4 = _iterator4()).done) {
                    _context9.next = 24;
                    break;
                  }
                  _v2 = _step4.value;
                  _context9.next = 22;
                  return this._recursiveClose({
                    target: _v2,
                    isActive: config_.isActive && isActive,
                    parentConfig: closeConfig
                  });
                case 22:
                  _context9.next = 18;
                  break;
                case 24:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));
          function _recursiveClose(_x6) {
            return _recursiveClose2.apply(this, arguments);
          }
          return _recursiveClose;
        }();
        _createClass(MKLifeCycle, [{
          key: "valid",
          get:
          /**
           * 有效状态
           * @remarks
           * 表示模块未在(关闭/关闭中)状态
           */
          function get() {
            return this.isValid && (this._state & (_MKLifeCycle.RunState.WaitOpen | _MKLifeCycle.RunState.Opening | _MKLifeCycle.RunState.Open)) !== 0;
          }

          /** 静态模块 */
        }, {
          key: "isStatic",
          get: function get() {
            return this._isStatic;
          }

          /** 设置模块配置 */
        }, {
          key: "config",
          set: function set(config_) {
            if (config_.isStatic !== undefined) {
              this._isStatic = config_.isStatic;
            }
          }
        }, {
          key: "_log",
          get: /** 日志 */
          function get() {
            var _this$_log;
            return (_this$_log = this._log2) != null ? _this$_log : this._log2 = new MKLogger(js.getClassName(this));
          }
        }]);
        return MKLifeCycle;
      }(MKLayer)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKLogger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKInstanceBase.ts', './MKHttp.ts', './GlobalConfig.ts'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, cclegacy, debug, log, warn, error, sys, MKInstanceBase, mkHttp, GlobalConfig;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      debug = module.debug;
      log = module.log;
      warn = module.warn;
      error = module.error;
      sys = module.sys;
    }, function (module) {
      MKInstanceBase = module.default;
    }, function (module) {
      mkHttp = module.default;
    }, function (module) {
      GlobalConfig = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5b302apjWNOfbw0To2ey+78", "MKLogger", undefined);
      /**
       * 日志打印器
       * @noInheritDoc
       * @remarks
       * 单例对象打印名为 default
       *
       * - 支持多实例
       *
       * - 打印等级控制
       *
       * - 打印屏蔽控制
       *
       * - 报错日志 http 上传
       */
      var MKLogger = exports('default', /*#__PURE__*/function (_MKInstanceBase) {
        _inheritsLoose(MKLogger, _MKInstanceBase);
        function MKLogger(nameStr_) {
          var _this$_logFuncTab;
          var _this;
          _this = _MKInstanceBase.call(this) || this;

          // 初始化数据
          /* --------------- private --------------- */
          /** 日志模块名 */
          _this._nameStr = void 0;
          /** 日志函数表 */
          _this._logFuncTab = (_this$_logFuncTab = {}, _this$_logFuncTab[GlobalConfig.Log.LogObjectType.MK] = {
            target: console,
            debug: console.debug,
            log: console.log,
            warn: console.warn,
            error: console.error
          }, _this$_logFuncTab[GlobalConfig.Log.LogObjectType.Console] = {
            target: console,
            debug: console.debug,
            log: console.log,
            warn: console.warn,
            error: console.error
          }, _this$_logFuncTab[GlobalConfig.Log.LogObjectType.CC] = {
            target: cc,
            debug: debug,
            log: log,
            warn: warn,
            error: error
          }, _this$_logFuncTab);
          /** 计时信息 */
          _this._timeMap = new Map();
          _this._nameStr = nameStr_;
          MKLogger._logMap.set(nameStr_, _assertThisInitialized(_this));

          // 替换日志函数
          if (MKLogger._config.logObjectType === GlobalConfig.Log.LogObjectType.Console) {
            _this.debug = MKLogger._config.levelNum & GlobalConfig.Log.Level.Debug ? _this._logFuncTab[MKLogger._config.logObjectType].debug : function () {
              return null;
            };
            _this.log = MKLogger._config.levelNum & GlobalConfig.Log.Level.Log ? _this._logFuncTab[MKLogger._config.logObjectType].log : function () {
              return null;
            };
            _this.warn = MKLogger._config.levelNum & GlobalConfig.Log.Level.Warn ? _this._logFuncTab[MKLogger._config.logObjectType].warn : function () {
              return null;
            };
            _this.error = MKLogger._config.levelNum & GlobalConfig.Log.Level.Error ? _this._logFuncTab[MKLogger._config.logObjectType].error : function () {
              return null;
            };
          }

          // 错误监听
          if (!MKLogger._isInit) {
            MKLogger._isInit = true;
            var uploadFunc = function uploadFunc() {
              var _MKLogger$_config;
              for (var _len = arguments.length, argsList = new Array(_len), _key = 0; _key < _len; _key++) {
                argsList[_key] = arguments[_key];
              }
              // 添加日志缓存
              MKLogger._addLogCache(GlobalConfig.Log.Level.Error, mkLog._getLogHead(GlobalConfig.Log.Level.Error, true), argsList);

              // 上传错误日志
              if (MKLogger._config.errorUploadAddrStr) {
                mkHttp.post(MKLogger._config.errorUploadAddrStr, {
                  body: JSON.stringify(MKLogger._cacheStrList)
                });

                // 清空日志缓存
                MKLogger._cacheStrList.splice(0, MKLogger._cacheStrList.length);
              }

              // 错误处理
              MKLogger._config.errorHandlingFunc == null || (_MKLogger$_config = MKLogger._config).errorHandlingFunc.apply(_MKLogger$_config, argsList);
            };
            if (sys.isBrowser) {
              var oldHandler;
              if (window.onerror) {
                oldHandler = window.onerror;
              }
              window.onerror = function () {
                uploadFunc.apply(void 0, arguments);
                if (oldHandler) {
                  oldHandler.apply(void 0, arguments);
                }
              };
            } else if (sys.isNative) {
              var _oldHandler;
              if (window["jsb"]) {
                jsb["onError"](function () {
                  uploadFunc.apply(void 0, arguments);
                });
              } else {
                if (window["__errorHandler"]) {
                  _oldHandler = window["__errorHandler"];
                }
                window["__errorHandler"] = function () {
                  uploadFunc.apply(void 0, arguments);
                  if (_oldHandler) {
                    _oldHandler.apply(void 0, arguments);
                  }
                };
              }
            }
          }
          return _this;
        }

        /* --------------- static --------------- */
        /** 全局配置 */
        /* ------------------------------- static ------------------------------- */
        /**
         * 只限模块打印
         * @param moduleStrList_ 模块名列表
         * @remarks
         * 调用时会覆盖 {@link MKLogger.limit} 的规则
         */
        MKLogger.only = function only(moduleStrList_) {
          MKLogger._logOnlyModuleStrList = moduleStrList_;
          MKLogger._limitLogModuleStrList = [];
        }

        /**
         * 限制模块打印
         * @param moduleStrList_ 模块名列表
         * @remarks
         * 调用时会覆盖 {@link MKLogger.only} 的规则
         */;
        MKLogger.limit = function limit(moduleStrList_) {
          MKLogger._logOnlyModuleStrList = [];
          MKLogger._limitLogModuleStrList = moduleStrList_;
        }

        /**
         * 添加日志缓存
         * @param level_ 等级
         * @param headStr_ 日志头
         * @param argsList_ 参数
         * @returns
         */;
        MKLogger._addLogCache = function _addLogCache(level_, headStr_) {
          for (var _len2 = arguments.length, argsList_ = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            argsList_[_key2 - 2] = arguments[_key2];
          }
          if (!(argsList_ != null && argsList_.length) || MKLogger._config.cacheRowNum <= 0) {
            return;
          }

          /** 缓存内容 */
          var contentStr = headStr_;

          // 填充参数内容
          {
            if (level_ === GlobalConfig.Log.Level.Error) {
              argsList_.forEach(function (v) {
                var jsonStr = "";
                try {
                  jsonStr = JSON.stringify(v);
                } catch (e) {
                  jsonStr = "";
                }
                if (jsonStr) {
                  contentStr += ", " + jsonStr;
                }
              });
            }
            // 非错误日志跳过对象和函数类型的打印
            else {
              argsList_.forEach(function (v) {
                if (!["object", "function"].includes(typeof v)) {
                  contentStr += ", " + v;
                }
              });
            }
          }

          // 更新缓存数据
          MKLogger._cacheStrList.push(contentStr);

          // 超出缓存删除顶部日志
          if (MKLogger._cacheStrList.length > MKLogger._config.cacheRowNum) {
            MKLogger._cacheStrList.splice(0, 1);
          }
        }

        /* ------------------------------- 功能 ------------------------------- */;
        var _proto = MKLogger.prototype;
        _proto.debug = function debug() {
          for (var _len3 = arguments.length, argsList_ = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            argsList_[_key3] = arguments[_key3];
          }
          this._log.apply(this, [GlobalConfig.Log.Level.Debug].concat(argsList_));
        };
        _proto.log = function log() {
          for (var _len4 = arguments.length, argsList_ = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            argsList_[_key4] = arguments[_key4];
          }
          this._log.apply(this, [GlobalConfig.Log.Level.Log].concat(argsList_));
        };
        _proto.warn = function warn() {
          for (var _len5 = arguments.length, argsList_ = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            argsList_[_key5] = arguments[_key5];
          }
          this._log.apply(this, [GlobalConfig.Log.Level.Warn].concat(argsList_));
        };
        _proto.error = function error() {
          for (var _len6 = arguments.length, argsList_ = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            argsList_[_key6] = arguments[_key6];
          }
          this._log.apply(this, [GlobalConfig.Log.Level.Error].concat(argsList_));
        }

        /** 计时开始 */;
        _proto.timeStart = function timeStart(nameStr_) {
          if (!nameStr_) {
            this.error("参数错误");
            return;
          }
          var timeLog = Object.create(null);
          timeLog.startTimeMsNum = timeLog.lastTimeMsNum = Date.now();
          this._timeMap.set(nameStr_, timeLog);
          for (var _len7 = arguments.length, argsList_ = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
            argsList_[_key7 - 1] = arguments[_key7];
          }
          if (argsList_ != null && argsList_.length) {
            this._log.apply(this, [GlobalConfig.Log.Level.Log, nameStr_].concat(argsList_));
          }
        }

        /** 打印耗时 */;
        _proto.timeLog = function timeLog(nameStr_) {
          var timeLog = this._timeMap.get(nameStr_);
          if (!timeLog) {
            this.error("参数错误");
            return;
          }
          var currTimeMsNum = Date.now();
          for (var _len8 = arguments.length, argsList_ = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
            argsList_[_key8 - 1] = arguments[_key8];
          }
          if (argsList_ != null && argsList_.length) {
            this._log.apply(this, [GlobalConfig.Log.Level.Log, nameStr_].concat(argsList_, ["\u8017\u65F6\uFF1A" + (currTimeMsNum - timeLog.lastTimeMsNum) / 1000 + "s"]));
          }
          timeLog.lastTimeMsNum = currTimeMsNum;
        }

        /** 总耗时 */;
        _proto.timeEnd = function timeEnd(nameStr_) {
          var timeLog = this._timeMap.get(nameStr_);
          if (!timeLog) {
            this.error("参数错误");
            return;
          }
          for (var _len9 = arguments.length, argsList_ = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
            argsList_[_key9 - 1] = arguments[_key9];
          }
          this._log.apply(this, [GlobalConfig.Log.Level.Log, nameStr_].concat(argsList_, ["\u603B\u8017\u65F6\uFF1A" + (Date.now() - timeLog.startTimeMsNum) / 1000 + "s"]));
          this._timeMap["delete"](nameStr_);
        }

        /** 日志头 */;
        _proto._getLogHead = function _getLogHead(level_, isAddTime_) {
          if (isAddTime_ === void 0) {
            isAddTime_ = true;
          }
          var date = new Date();
          if (isAddTime_) {
            /** 当前日期时间 */
            var timeStr = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds();
            return this._nameStr + " <" + GlobalConfig.Log.Level[level_] + "> [" + timeStr + "]\uFF1A";
          } else {
            return this._nameStr + " <" + GlobalConfig.Log.Level[level_] + ">\uFF1A";
          }
        };
        _proto._log = function _log(level_) {
          var _logger$GlobalConfig$;
          // 打印等级限制
          if (!(MKLogger._config.levelNum & level_)) {
            return;
          }

          // 打印模块限制
          if (MKLogger._logOnlyModuleStrList.length) {
            if (!MKLogger._logOnlyModuleStrList.includes(this._nameStr)) {
              return;
            }
          } else {
            if (MKLogger._limitLogModuleStrList.includes(this._nameStr)) {
              return;
            }
          }

          /** 日志头 */
          var headStr = this._getLogHead(level_);
          var logger = this._logFuncTab[MKLogger._config.logObjectType];

          // 更新缓存
          for (var _len10 = arguments.length, argsList_ = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
            argsList_[_key10 - 1] = arguments[_key10];
          }
          MKLogger._addLogCache.apply(MKLogger, [level_, headStr].concat(argsList_));
          // 打印日志
          (_logger$GlobalConfig$ = logger[GlobalConfig.Log.Level[level_]]).call.apply(_logger$GlobalConfig$, [logger.target, headStr].concat(argsList_));
        };
        return MKLogger;
      }(MKInstanceBase));
      MKLogger._config = GlobalConfig.Log.config;
      /** 初始化状态 */
      MKLogger._isInit = false;
      /** 所有 log 对象 */
      MKLogger._logMap = new Map();
      /** 日志缓存 */
      MKLogger._cacheStrList = [];
      /** 唯一日志模块 */
      MKLogger._logOnlyModuleStrList = [];
      /** 限制日志模块 */
      MKLogger._limitLogModuleStrList = [];
      var mkLog = exports('mkLog', MKLogger.instance("default"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKMonitor.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKToolObject.ts', './MKInstanceBase.ts', './MKLogger.ts', './MKStatusTask.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, mkToolObject, MKInstanceBase, MKLogger, MKStatusTask;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      mkToolObject = module.default;
    }, function (module) {
      MKInstanceBase = module.default;
    }, function (module) {
      MKLogger = module.default;
    }, function (module) {
      MKStatusTask = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "685adaV3iRCOor3yfJx/bKl", "MKMonitor", undefined);
      /**
       * 数据监听器（类型安全）
       * @noInheritDoc
       * @remarks
       * 可以用以 mvvm 搭建及使用，注意：监听回调仅在下一帧被调用
       */
      var MKMonitor = exports('MKMonitor', /*#__PURE__*/function (_MKInstanceBase) {
        _inheritsLoose(MKMonitor, _MKInstanceBase);
        function MKMonitor() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MKInstanceBase.call.apply(_MKInstanceBase, [this].concat(args)) || this;
          /** 日志管理 */
          _this._log = new MKLogger("MKMonitor");
          /** 绑定数据图 */
          _this._bindDataMap = new Map();
          /** 对象绑定数据图 */
          _this._targetBindData = new Map();
          return _this;
        }
        var _proto = MKMonitor.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /**
         * 监听 value_ 数据修改同步到 value2_
         * @param value_ 对象
         * @param key_ 键
         * @param value2_ 对象2
         * @param key2_ 键2
         * @param target_ 绑定对象
         * @returns 监听回调
         */
        _proto.sync = function sync(value_, key_, value2_, key2_, target_) {
          var callbackFunc = function callbackFunc(value) {
            value2_[key2_] = value;
          };
          value2_[key2_] = value_[key_];
          return this.on(value_, key_, callbackFunc, target_);
        }

        /**
         * 等待监听回调执行完成
         * @param value_ 对象
         * @param key_ 键
         * @returns
         */;
        _proto.wait = /*#__PURE__*/
        function () {
          var _wait = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value_, key_) {
            var bindData;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  bindData = this._getBindData(value_, key_, false);
                  if (bindData != null && bindData.task) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return");
                case 3:
                  if (!(bindData.recursiveCountNum > 1)) {
                    _context.next = 6;
                    break;
                  }
                  this._log.error("递归，不能在当前对象回调内等待当前对象回调执行完成");
                  return _context.abrupt("return");
                case 6:
                  _context.next = 8;
                  return bindData.task.task;
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function wait(_x, _x2) {
            return _wait.apply(this, arguments);
          }
          return wait;
        }()
        /**
         * 递归监听数据更新
         * @param value_ 监听对象
         * @param onCallbackFunc_ on 触发回调
         * @param target_ 绑定对象
         */;

        _proto.onRecursion = function onRecursion(value_, onCallbackFunc_, args3_, target_) {
          var _this2 = this;
          var target = target_ != null ? target_ : typeof args3_ === "object" ? args3_ : undefined;
          var offCallbackFunc = typeof args3_ === "function" ? args3_ : undefined;
          mkToolObject.traverse(value_, function (value, keyStr, pathStr) {
            if (!["string", "number", "boolean", "symbol"].includes(typeof value)) {
              return;
            }
            var parent = value_;

            // 更新父级对象
            if (pathStr.length !== 0) {
              pathStr.split("/").forEach(function (vStr) {
                parent = parent[vStr];
              });
            }
            _this2._on(parent, keyStr, {
              pathStr: "" + (pathStr ? pathStr + "/" : "") + keyStr,
              onCallbackFunc: onCallbackFunc_,
              offCallbackFunc: offCallbackFunc,
              target: target
            });
          });
        }

        /**
         * 监听数据更新
         * @param value_ 监听对象
         * @param key_ 监听键
         * @param onCallbackFunc_ on 触发回调
         * @param target_ 绑定对象
         */;
        _proto.on = function on(value_, key_, onCallbackFunc_, args4_, target_) {
          var offCallbackFunc = typeof args4_ === "function" ? args4_ : undefined;
          var target = target_ != null ? target_ : typeof args4_ === "object" ? args4_ : undefined;
          return this._on(value_, key_, {
            onCallbackFunc: onCallbackFunc_,
            offCallbackFunc: offCallbackFunc,
            target: target
          });
        }

        /**
         * 监听单次数据更新
         * @param value_ 监听对象
         * @param key_ 监听键
         * @param onCallbackFunc_ on 触发回调
         * @param target_ 绑定对象
         */;
        _proto.once = function once(value_, key_, onCallbackFunc_, offCallbackFunc_, target_) {
          var offCallbackFunc = typeof offCallbackFunc_ === "function" ? offCallbackFunc_ : undefined;
          var target = target_ || (offCallbackFunc ? null : offCallbackFunc_);
          return this._on(value_, key_, {
            onCallbackFunc: onCallbackFunc_,
            offCallbackFunc: offCallbackFunc,
            target: target,
            isOnce: true
          });
        }

        /**
         * 递归取消监听数据更新
         * @param value_ 监听对象
         * @param target_ 绑定目标
         */;
        _proto.offRecursion = function offRecursion(value_, args2_, target_) {
          var _this3 = this;
          var onCallbackFunc = typeof args2_ === "function" ? args2_ : undefined;
          var target = target_ != null ? target_ : typeof args2_ === "object" ? args2_ : undefined;
          var taskList = [];
          mkToolObject.traverse(value_, function (value, keyStr, pathStr) {
            var typeStr = typeof value;
            if (!["string", "number", "boolean", "symbol"].includes(typeStr)) {
              return;
            }
            var parent = value_;

            // 更新父级对象
            if (pathStr.length !== 0) {
              pathStr.split("/").forEach(function (vStr) {
                parent = parent[vStr];
              });
            }
            taskList.push.apply(taskList, _this3._off(parent, keyStr, {
              pathStr: "" + (pathStr ? pathStr + "/" : "") + keyStr,
              onCallbackFunc: onCallbackFunc,
              target: target
            }));
          });
          return Promise.all(taskList);
        }

        /**
         * 取消监听数据更新
         * @param value_ 监听对象
         * @param key_ 监听键
         * @param target_ 绑定目标
         */;
        _proto.off = function off(value_, key_, args3_, target_) {
          var onCallbackFunc = typeof args3_ === "function" ? args3_ : undefined;
          var target = target_ != null ? target_ : typeof args3_ === "object" ? args3_ : undefined;
          return Promise.all(this._off(value_, key_, {
            onCallbackFunc: onCallbackFunc,
            target: target
          }));
        }

        /**
         * 清理对象绑定的数据
         * @param target_ 绑定对象
         * @returns
         */;
        _proto.clear = function clear(target_) {
          /** 对象绑定数据 */
          var targetBindData = this._targetBindData.get(target_);

          // 安检
          if (!target_ || !targetBindData) {
            return null;
          }
          var taskList = [];

          // 清理监听数据
          if (targetBindData.monitorList) {
            /** 清理当前监听的所有事件 */
            var monitorList = targetBindData.monitorList.slice(0);
            for (var _iterator = _createForOfIteratorHelperLoose(monitorList), _step; !(_step = _iterator()).done;) {
              var v = _step.value;
              taskList.push.apply(taskList, this._off(v.target, v.key, {
                onCallbackFunc: v.monitor.onCallbackFunc,
                target: v.monitor.target,
                pathStr: v.monitor.pathStr
              }));
            }
          }
          return Promise.all(taskList);
        }

        /**
         * 启用 on 事件
         * @param target_ 绑定对象
         */;
        _proto.enable = function enable(args_, key_, args3_, target_) {
          this._setListenerState(true, args_, key_, args3_, target_);
        }

        /**
         * 禁用 on 事件
         * @param target_ 绑定对象
         */;
        _proto.disable = function disable(args_, key_, args3_, target_) {
          this._setListenerState(false, args_, key_, args3_, target_);
        }

        /**
         * 获取绑定数据
         * @param value_ 数据
         * @param key_ 键
         * @param isCreate_ 不存在则创建
         * @returns
         */;
        _proto._getBindData = function _getBindData(value_, key_, isCreate_) {
          var _this4 = this;
          /** 绑定数据表 */
          var bindDataMap = this._bindDataMap.get(value_);
          if (!bindDataMap) {
            this._bindDataMap.set(value_, bindDataMap = new Map());
          }

          /** 绑定数据 */
          var bindData = bindDataMap.get(key_);
          if (bindData) {
            return bindData;
          }
          if (!isCreate_) {
            return null;
          }

          // 添加数据
          {
            var descriptor = Object.getOwnPropertyDescriptor(value_, key_);
            if (!descriptor) {
              return null;
            }
            bindDataMap.set(key_, bindData = Object.create({
              descriptor: descriptor,
              recursiveCountNum: 0
            }));
          }

          /** 值 */
          var value = value_[key_];
          /** 可更新 */
          var isCanUpdate = false;
          /** 更新定时器 */
          var updateTimer;
          /** 更新前的值 */
          var valueBeforeUpdate;

          // 监听数据
          Object.defineProperty(value_, key_, {
            get: function get() {
              return bindData.descriptor.get ? bindData.descriptor.get.call(value_) : value;
            },
            set: function set(newValue) {
              // 安检
              {
                if (!bindData) {
                  return;
                }

                // 更新数据
                if (bindData.descriptor.get) {
                  value = bindData.descriptor.get.call(value_);
                }

                // 数据相同
                if (!isCanUpdate && value === newValue && typeof value !== "object" && typeof value !== "function") {
                  // this._log.debug("更新值，数据相同跳过", key_, newValue, value_);

                  return;
                }
              }

              /** 旧数据 */
              var oldValue = value;

              // 更新值
              {
                var _bindData$descriptor$;
                _this4._log.debug("更新值", key_, newValue, value_);
                (_bindData$descriptor$ = bindData.descriptor.set) == null || _bindData$descriptor$.call(value_, newValue);
                value = newValue;
              }

              // 如果禁用状态或者无监听则退出
              if (bindData.isDisabled || !bindData.monitorList) {
                // 更新可更新状态
                if (bindData.isDisabled) {
                  isCanUpdate = true;
                }
                return;
              }
              if (updateTimer) {
                // 更新后的值和更新前一致则还原
                if (typeof value !== "object" && typeof value !== "function" && value === valueBeforeUpdate) {
                  // 清理定时器
                  // clearTimeout(updateTimer);
                  // cc.director.off(cc.Director.EVENT_END_FRAME, updateTimer, this);
                  updateTimer = null;

                  // 更新 set 计数
                  --bindData.recursiveCountNum;
                  // 更新任务状态
                  bindData.task.finish(true);
                }
                return;
              }
              if (!bindData.task) {
                bindData.task = new MKStatusTask(false);
              }
              // 防止回调内赋值导致任务状态被覆盖
              else if (bindData.recursiveCountNum === 0) {
                bindData.task.finish(false);
              }

              // 更新 set 计数
              ++bindData.recursiveCountNum;
              // 记录更新前的值
              valueBeforeUpdate = oldValue;

              // 下一帧回调
              var updateFunc = function updateFunc() {
                var _bindData;
                updateTimer = null;
                if (!((_bindData = bindData) != null && _bindData.monitorList)) {
                  return;
                }

                /** 任务返回 */
                var onResultList = [];

                // 更新可更新状态
                isCanUpdate = false;

                // 执行监听事件
                for (var kNum = 0, v; kNum < bindData.monitorList.length; ++kNum) {
                  v = bindData.monitorList[kNum];
                  var targetBindData = !v.target ? undefined : _this4._targetBindData.get(v.target);

                  // 安检，禁用状态
                  if (v.isDisabled || targetBindData != null && targetBindData.isDisabled) {
                    continue;
                  }
                  onResultList.push(v.onCallbackFunc.call(v.target, value, oldValue, v.pathStr));

                  // 单次执行
                  if (v.isOnce) {
                    bindData.monitorList.splice(kNum--, 1);
                    // 删除对象绑定数据
                    if (v.target) {
                      _this4._delTargetBindData(v.target, {
                        monitor: v,
                        target: value_,
                        key: key_
                      });
                    }
                  }
                }

                // 等待任务完成
                Promise.all(onResultList).then(function () {
                  // 更新 set 计数，更新任务状态
                  if (--bindData.recursiveCountNum === 0) {
                    bindData.task.finish(true);
                  }
                });
              };
              updateFunc();
              // cc.director.once(cc.Director.EVENT_END_FRAME, (updateTimer = updateFunc), this);
              // updateTimer = setTimeout(updateFunc, 0);
            }
          });

          return bindData;
        };
        _proto._off = function _off(value_, key_, _ref) {
          var onCallbackFunc_ = _ref.onCallbackFunc,
            target_ = _ref.target,
            pathStr_ = _ref.pathStr;
          /** 绑定数据 */
          var bindData = this._getBindData(value_, key_, false);
          /** 任务列表 */
          var taskList = [];
          if (!(bindData != null && bindData.monitorList)) {
            return taskList;
          }

          // 取消监听
          {
            var indexNum;
            var deleteList;
            var findFunc;
            if (target_ && onCallbackFunc_) {
              findFunc = function findFunc(v) {
                return v.onCallbackFunc === onCallbackFunc_ && v.target === target_ && v.pathStr === pathStr_;
              };
            } else if (target_) {
              findFunc = function findFunc(v) {
                return v.target === target_ && v.pathStr === pathStr_;
              };
            } else if (onCallbackFunc_) {
              findFunc = function findFunc(v) {
                return v.onCallbackFunc === onCallbackFunc_ && v.pathStr === pathStr_;
              };
            } else {
              findFunc = function findFunc(v) {
                return v.pathStr === pathStr_;
              };
            }
            if (findFunc) {
              var _bindData$monitorList;
              /** 当前的监听数据 */
              var monitorList = bindData.monitorList.splice(0, bindData.monitorList.length);

              // eslint-disable-next-line no-constant-condition
              while (true) {
                indexNum = monitorList.findIndex(findFunc);
                if (indexNum === -1) {
                  break;
                }
                deleteList = monitorList.splice(indexNum, 1);

                // 删除对象绑定数据
                var callBackFunc = this._delTargetBindData(target_, {
                  monitor: deleteList[0],
                  target: value_,
                  key: key_
                });
                if (callBackFunc) {
                  taskList.push(callBackFunc);
                }
              }
              (_bindData$monitorList = bindData.monitorList).unshift.apply(_bindData$monitorList, monitorList);
            }
          }

          // 数据还原
          if (!bindData.monitorList.length) {
            taskList.push.apply(taskList, this._delBindData(value_, key_));
          }
          return taskList;
        }

        /** 删除绑定数据 */;
        _proto._delBindData = function _delBindData(value_, key_) {
          /** 绑定数据表 */
          var bindDataMap = this._bindDataMap.get(value_);
          /** 任务列表 */
          var taskList = [];
          if (!bindDataMap) {
            return taskList;
          }

          /** 绑定数据 */
          var bindData = bindDataMap.get(key_);
          if (bindData) {
            // 删除对象绑定数据列表
            if (bindData.monitorList) {
              while (bindData.monitorList.length) {
                var monitor = bindData.monitorList.pop();

                // 删除对象绑定数据
                var callBackFunc = this._delTargetBindData(monitor.target, {
                  monitor: monitor,
                  target: value_,
                  key: key_
                });
                if (callBackFunc) {
                  taskList.push(callBackFunc);
                }
              }
            }

            // 还原值
            if (!bindData.descriptor.set) {
              bindData.descriptor.value = value_[key_];
            }

            // 重置描述符
            Object.defineProperty(value_, key_, bindData.descriptor);
            // 删除 bindData
            bindDataMap["delete"](key_);
          }

          // 删除 bindDataMap
          if (!bindDataMap.size) {
            this._bindDataMap["delete"](value_);
          }
          return taskList;
        }

        /** 添加对象绑定数据 */;
        _proto._addTargetBindData = function _addTargetBindData(target_, bindData_) {
          // 安检
          if (!target_ || !bindData_) {
            return;
          }

          /** 对象绑定数据 */
          var targetBindData = this._targetBindData.get(target_);
          if (!targetBindData) {
            this._targetBindData.set(target_, targetBindData = Object.create(null));
          }

          // 添加绑定监听
          if (bindData_.monitor) {
            if (!targetBindData.monitorList) {
              targetBindData.monitorList = [bindData_];
            } else {
              targetBindData.monitorList.push(bindData_);
            }
          }
        }

        /** 删除对象绑定数据 */;
        _proto._delTargetBindData = function _delTargetBindData(target_, bindData_) {
          // 安检
          if (!target_ || !bindData_) {
            return null;
          }

          /** 对象绑定数据 */
          var targetBindData = this._targetBindData.get(target_);
          if (!targetBindData) {
            return null;
          }

          // 删除绑定监听
          if (bindData_.monitor && targetBindData.monitorList) {
            var indexNum = targetBindData.monitorList.findIndex(function (v) {
              return v.target === bindData_.target && v.key === bindData_.key && v.monitor === bindData_.monitor;
            });
            if (indexNum !== -1) {
              var _splice$0$monitor;
              return (_splice$0$monitor = targetBindData.monitorList.splice(indexNum, 1)[0].monitor) == null || _splice$0$monitor.offCallbackFunc == null ? void 0 : _splice$0$monitor.offCallbackFunc();
            }
          }
          return null;
        }

        /** 监听数据更新 */;
        _proto._on = function _on(value_, key_, data_) {
          /** 绑定数据 */
          var bindData = this._getBindData(value_, key_, true);
          if (!bindData) {
            this._log.error("获取绑定数据错误");
            return null;
          }

          // 添加回调
          {
            var _bindData$monitorList2;
            if (!bindData.monitorList) {
              bindData.monitorList = [];
            }
            (_bindData$monitorList2 = bindData.monitorList) == null || _bindData$monitorList2.push(data_);
          }

          // 添加对象绑定数据
          if (data_.target) {
            this._addTargetBindData(data_.target, {
              monitor: data_,
              target: value_,
              key: key_
            });
          }
          return data_.onCallbackFunc;
        }

        /** 启用监听事件 */;
        _proto._setListenerState = function _setListenerState(isListener_, args_, key_, args3_, target_) {
          var target = target_;
          var value;
          var callbackFunc;

          // 参数转换
          {
            // target
            if (target === undefined) {
              if (key_ === undefined) {
                target = args_;
              } else if (typeof args3_ !== "function") {
                target = args3_;
              }
            }

            // value
            if (key_ !== undefined) {
              value = args_;
            }

            // callbackFunc_
            if (typeof args3_ === "function") {
              callbackFunc = args3_;
            }
          }
          if (value) {
            var bindData = this._getBindData(value, key_, false);
            if (!bindData) {
              return;
            }

            // 更新指定回调
            if (callbackFunc) {
              if (!bindData.monitorList) {
                return;
              }
              var indexNum;
              if (target) {
                indexNum = bindData.monitorList.findIndex(function (v) {
                  return v.target === target && v.onCallbackFunc === callbackFunc;
                });
              } else {
                indexNum = bindData.monitorList.findIndex(function (v) {
                  return v.onCallbackFunc === callbackFunc;
                });
              }
              if (indexNum !== -1) {
                bindData.monitorList[indexNum].isDisabled = !isListener_;
              }
            }
            // 更新指定对象
            else if (target) {
              if (!bindData.monitorList) {
                return;
              }
              bindData.monitorList.forEach(function (v) {
                if (v.target === target) {
                  v.isDisabled = !isListener_;
                }
              });
            }
            // 更新所有回调
            else {
              bindData.isDisabled = !isListener_;
            }
          } else if (target_) {
            var targetBindData = this._targetBindData.get(target_);
            if (!targetBindData) {
              return;
            }
            targetBindData.isDisabled = !isListener_;
          }
        };
        return MKMonitor;
      }(MKInstanceBase));
      var mkMonitor = exports('default', MKMonitor.instance());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKNetwork.ts", ['cc', './MKNetworkExport.ts'], function (exports) {
  var cclegacy, MKNetworkExport;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MKNetworkExport = module;
      exports('default', module);
    }],
    execute: function () {
      cclegacy._RF.push({}, "96124uRyqFMPr+0m4ld4MPy", "MKNetwork", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKNetworkBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalEvent.ts', './MKEventTarget.ts', './MKInstanceBase.ts', './MKLogger.ts', './MKStatusTask.ts'], function (exports) {
  var _inheritsLoose, _createClass, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, js, EventTarget, globalEvent, MKEventTarget, MKInstanceBase, MKLogger, MKStatusTask;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
      EventTarget = module.EventTarget;
    }, function (module) {
      globalEvent = module.default;
    }, function (module) {
      MKEventTarget = module.default;
    }, function (module) {
      MKInstanceBase = module.default;
    }, function (module) {
      MKLogger = module.default;
    }, function (module) {
      MKStatusTask = module.default;
    }],
    execute: function () {
      exports('MKNetworkBase_', void 0);
      cclegacy._RF.push({}, "b3328ptwSBBKJ/zj6YikNgh", "MKNetworkBase", undefined);
      var _MKNetworkBase;
      (function (_MKNetworkBase2) {
        /** 从 T 中排除 null, undefined, void */
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        /** 消息协议 */
        /** 消息事件 */
        var MessageEvent = /*#__PURE__*/function (_EventTarget) {
          _inheritsLoose(MessageEvent, _EventTarget);
          function MessageEvent(network_) {
            var _this5;
            _this5 = _EventTarget.call(this) || this;
            /* --------------- private --------------- */
            /** 网络实例 */
            _this5._network = void 0;
            /** 日志 */
            _this5._log = new MKLogger(js.getClassName(_assertThisInitialized(_this5)));
            _this5._network = network_;
            return _this5;
          }
          var _proto2 = MessageEvent.prototype;
          /* ------------------------------- 功能 ------------------------------- */
          // @ts-ignore
          _proto2.on = function on(type_, callback_, target_, isOnce_) {
            if (typeof type_ === "function") {
              var messageId = this._network.config.parseMessageIdFunc(type_.prototype);
              if (messageId !== undefined) {
                var _target_$eventTargetL;
                // 录入事件对象
                target_ == null || (_target_$eventTargetL = target_.eventTargetList) == null || _target_$eventTargetL.push(this);
                return _EventTarget.prototype.on.call(this, messageId, callback_, target_, isOnce_);
              }
            } else {
              var _target_$eventTargetL2;
              // 录入事件对象
              target_ == null || (_target_$eventTargetL2 = target_.eventTargetList) == null || _target_$eventTargetL2.push(this);
              return _EventTarget.prototype.on.call(this, type_, callback_, target_, isOnce_);
            }
            return null;
          }

          // @ts-ignore
          ;

          _proto2.once = function once(type_, callback_, this_) {
            return this.on(type_, callback_, this_, true);
          }

          // @ts-ignore
          ;

          _proto2.off = function off(type_, callback_, this_) {
            if (typeof type_ === "function") {
              var messageId = this._network.config.parseMessageIdFunc(type_.prototype);
              if (messageId !== undefined) {
                _EventTarget.prototype.off.call(this, messageId, callback_, this_);
                return;
              }
            } else {
              _EventTarget.prototype.off.call(this, type_, callback_, this_);
            }
          }

          /**
           * 派发事件
           * @param data_ 消息数据
           * @remarks
           * 接收消息后派发，可用此接口模拟数据
           */;
          _proto2.emit = function emit(args_, data_) {
            var type_;

            // 参数转换
            if (typeof args_ === "object") {
              data_ = args_;
            } else {
              type_ = args_;
            }
            if (type_ !== undefined) {
              _EventTarget.prototype.emit.call(this, type_, data_);
              // 触发等待消息
              this._network._triggerWaitTask(data_);
            } else {
              var messageId = this._network.config.parseMessageIdFunc(args_);
              if (messageId === undefined) {
                this._log.error("消息 id 解析错误");
                return;
              }
              _EventTarget.prototype.emit.call(this, messageId, args_);
              // 触发等待消息
              this._network._triggerWaitTask(args_);
            }
          }

          /**
           * 发送
           * @param data_ 发送数据
           * @returns
           */;
          _proto2.send = function send(data_) {
            this._network._send(data_);
          }

          /**
           * 请求
           * @param data_ 发送数据
           * @param timeoutMsNum_ 超时时间，-1:无超时时间；0-n:等待时间(毫秒)；不填则为构造配置中的 waitTimeoutMsNum
           * @returns
           * @remarks
           * 等待事件回调返回
           */;
          _proto2.request = function request(data_, timeoutMsNum_) {
            this._network._send(data_);
            return this._network._wait(data_, timeoutMsNum_);
          }

          // @ts-ignore
          ;

          _proto2.has = function has(type_, callback_, target_) {
            if (typeof type_ === "function") {
              var messageId = this._network.config.parseMessageIdFunc(type_.prototype);
              if (messageId !== undefined) {
                return _EventTarget.prototype.hasEventListener.call(this, messageId, callback_, target_);
              }
            } else {
              return _EventTarget.prototype.hasEventListener.call(this, type_, callback_, target_);
            }
            return false;
          };
          _proto2.clear = function clear() {
            return _EventTarget.prototype["clear"].call(this);
          };
          return MessageEvent;
        }(EventTarget);
        _MKNetworkBase2.MessageEvent = MessageEvent;
      })(_MKNetworkBase || (_MKNetworkBase = {}));
      /**
       * 网络系统基类
       * @noInheritDoc
       * @remarks
       *
       * - 支持多实例
       *
       * - (心跳/断线重连)支持
       *
       * - 网络消息接口事件化
       *
       * - 支持消息潮
       *
       * - 网络消息模拟
       */
      var MKNetworkBase = exports('default', /*#__PURE__*/function (_MKInstanceBase) {
        _inheritsLoose(MKNetworkBase, _MKInstanceBase);
        function MKNetworkBase(init_) {
          var _this;
          _this = _MKInstanceBase.call(this) || this;
          /* --------------- public --------------- */
          /** 网络事件 */
          _this.event = new MKEventTarget();
          /** 消息事件 */
          _this.message = new _MKNetworkBase.MessageEvent(_assertThisInitialized(_this));
          /** 配置信息 */
          _this.config = void 0;
          /** 日志 */
          _this._log = new MKLogger(js.getClassName(_assertThisInitialized(_this)));
          /** socket 状态 */
          _this._state = MKNetworkBase_.Status.Closed;
          /** 地址 */
          _this._addrStr = void 0;
          /**
           * 写入睡眠状态
           * @internal
           */
          _this._isWriteSleep2 = true;
          /** 写入队列 */
          _this._writeList = [];
          /* --------------- private --------------- */
          /** 重连计数 */
          _this._reconnectCountNum = 0;
          /** 重连定时器 */
          _this._reconnectTimer = null;
          /** 发送定时器 */
          _this._sendTimer = null;
          /** 等待任务表 */
          _this._waitTaskMap = new Map();
          _this.config = new MKNetworkBase_.InitConfig(init_);

          // 启动心跳
          _this._startHeartbeat();

          // 事件监听
          globalEvent.on(globalEvent.key.restart, _this._onRestart, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MKNetworkBase.prototype;
        /** 连接 */
        _proto.connect = function connect(addrStr_) {
          var _this2 = this;
          this._state = MKNetworkBase_.Status.Connecting;
          this._addrStr = addrStr_;
          this._resetSocket();
          return new Promise(function (resolveFunc) {
            _this2.event.once(_this2.event.key.open, resolveFunc);
          });
        }

        /** 断开 */;
        _proto.close = function close() {
          var _this$_socket;
          this._state = MKNetworkBase_.Status.Closing;
          (_this$_socket = this._socket) == null || _this$_socket.close();
        }

        /**
         * 发送
         * @param data_ 发送数据
         * @returns
         * @internal
         */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ;

        _proto._send = function _send(data_) {
          this._writeList.push(data_);

          // 更新状态
          if (this._isWriteSleep) {
            this._isWriteSleep = false;
          }
        }

        /**
         * 等待消息
         * @param key_ 消息键
         * @param timeoutMsNum_ 超时时间
         * @returns
         * @internal
         */
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ;

        _proto._wait = function _wait(key_, timeoutMsNum_
        // @ts-ignore
        ) {
          if (timeoutMsNum_ === void 0) {
            timeoutMsNum_ = this.config.waitTimeoutMsNum;
          }
          /** 消息序列号 */
          var messageSequence = this.config.parseMessageSequenceFunc(key_);
          if (messageSequence === undefined) {
            this._log.error("消息序列号解析错误");
            return null;
          }

          /** 指定标记的等待数据 */
          var waitTask = this._waitTaskMap.get(messageSequence);
          if (waitTask) {
            return waitTask.task;
          } else {
            this._waitTaskMap.set(messageSequence, waitTask = new MKStatusTask(false, {
              timeoutMsNum: timeoutMsNum_
            }));
          }
          return waitTask.task;
        }

        /**
         * 触发等待任务
         * @param data_ 收到的消息
         * @returns
         * @internal
         */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ;

        _proto._triggerWaitTask = function _triggerWaitTask(data_) {
          /** 消息 id */
          var messageId = this.config.parseMessageIdFunc(data_);
          /** 消息序列号 */
          var messageSequence = this.config.parseMessageSequenceFunc(data_);
          if (messageId === undefined) {
            this._log.error("消息 id 解析错误");
            return;
          }

          // 触发等待任务
          if (messageSequence !== undefined) {
            var waitTask = this._waitTaskMap.get(messageSequence);
            if (!waitTask) {
              return;
            }
            this._waitTaskMap["delete"](messageSequence);
            waitTask.finish(true, data_);
          }
        }

        /** socket 准备完成 */;
        _proto._open = function _open(event_) {
          this._state = MKNetworkBase_.Status.Open;
          this._log.debug("socket 准备完成", event_);
          if (this._writeList.length) {
            this._isWriteSleep = false;
          }

          // 取消重连
          this._cancelReconnect(true);

          // 事件通知
          this.event.emit(this.event.key.open);
        }

        /** socket 消息 */;
        _proto._message = /*#__PURE__*/
        function () {
          var _message2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event_) {
            var data, messageId;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.config.codec) {
                    _context.next = 6;
                    break;
                  }
                  _context.next = 3;
                  return this.config.codec.decode(event_.data);
                case 3:
                  _context.t0 = _context.sent;
                  _context.next = 7;
                  break;
                case 6:
                  _context.t0 = event_.data;
                case 7:
                  data = _context.t0;
                  if (!(data === undefined)) {
                    _context.next = 10;
                    break;
                  }
                  return _context.abrupt("return");
                case 10:
                  this._log.debug("收到消息", data);

                  // 事件通知
                  this.event.emit(this.event.key.recv, data);

                  /** 消息 id */
                  messageId = this.config.parseMessageIdFunc(data);
                  if (messageId !== undefined) {
                    // 指定事件通知
                    this.message.emit(messageId, data);

                    // 触发等待消息
                    this._triggerWaitTask(data);
                  }
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function _message(_x) {
            return _message2.apply(this, arguments);
          }
          return _message;
        }() /** socket 错误 */;
        _proto._error = function _error(event_) {
          if (this._state === MKNetworkBase_.Status.Open) {
            this._log.error("socket 错误", event_);
          }
        }

        /** socket 关闭 */;
        _proto._close = function _close(event_) {
          var lastStatus = this._state;
          this._state = MKNetworkBase_.Status.Closed;
          if (lastStatus !== MKNetworkBase_.Status.Closed) {
            this._log.warn("socket 关闭", event_);
            this.event.emit(this.event.key.close, event_);
          }

          // 超出最大重连次数
          if (this._reconnectTimer !== null) {
            if (++this._reconnectCountNum > this.config.maxReconnectNum) {
              this._cancelReconnect(false);
              return;
            }
            this._log.warn("socket 重连计数", this._reconnectCountNum);
          }

          // 准备重连
          if (lastStatus === MKNetworkBase_.Status.Open && this._reconnectTimer === null) {
            this._log.warn("socket 开始重连");
            this._isWriteSleep = true;
            this._reconnectTimer = setInterval(this._timerReconnect.bind(this), this.config.reconnectIntervalMsNum);
          }
        }

        /** 定时发送 */;
        _proto._timerSend = /*#__PURE__*/
        function () {
          var _timerSend2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this$_socket2,
              _this3 = this;
            var dataList, _iterator, _step, v;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(((_this$_socket2 = this._socket) == null ? void 0 : _this$_socket2.readyState) !== WebSocket.OPEN)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  if (!(this._writeList.length === 0)) {
                    _context2.next = 5;
                    break;
                  }
                  this._isWriteSleep = true;
                  return _context2.abrupt("return");
                case 5:
                  dataList = this._writeList.splice(0, this._writeList.length);
                  if (!this.config.codec) {
                    _context2.next = 10;
                    break;
                  }
                  _context2.next = 9;
                  return Promise.all(dataList.map(function (v) {
                    return _this3.config.codec.encode(v);
                  }));
                case 9:
                  dataList = _context2.sent;
                case 10:
                  for (_iterator = _createForOfIteratorHelperLoose(dataList); !(_step = _iterator()).done;) {
                    v = _step.value;
                    if ((v != null ? v : null) !== null) {
                      this._socket.send(v);
                    }
                  }
                case 11:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function _timerSend() {
            return _timerSend2.apply(this, arguments);
          }
          return _timerSend;
        }() /** 定时重连 */;
        _proto._timerReconnect = function _timerReconnect() {
          if (this._socket.readyState !== WebSocket.OPEN) {
            this._resetSocket();
          }
          // 重连成功
          else if (this._reconnectTimer !== null) {
            this._cancelReconnect(true);
          }
        }

        /**
         * 取消重连
         * @param isStatus_ 成功 | 失败
         * @returns
         */;
        _proto._cancelReconnect = function _cancelReconnect(isStatus_) {
          if (this._reconnectTimer === null) {
            return;
          }
          this._log.warn("socket 重连" + (isStatus_ ? "成功" : "失败"));

          // 事件通知
          this.event.emit(isStatus_ ? this.event.key.reconnectSuccess : this.event.key.reconnectFail);

          // 清理重连数据
          {
            clearInterval(this._reconnectTimer);
            this._reconnectTimer = null;
            this._reconnectCountNum = 0;
          }
        }

        /** 初始化心跳 */;
        _proto._startHeartbeat = function _startHeartbeat() {
          var _this4 = this;
          if (!this.config.heartbeatConfig) {
            return;
          }

          /** 心跳超时定时器 */
          var timeoutTimer;

          /** 接收心跳回调 */
          var recvFunc = function recvFunc() {
            if (timeoutTimer) {
              clearTimeout(timeoutTimer);
            }

            // 超时检测
            timeoutTimer = setTimeout(function () {
              // 心跳超时
              if (_this4.state !== MKNetworkBase_.Status.Open) {
                _this4.event.emit(_this4.event.key.heartbeatTimeout);
              }
            }, _this4.config.heartbeatConfig.timeoutMsN);
          };

          /** 心跳数据获取函数 */
          var getSendDataFunc = this.config.heartbeatConfig.initFunc(recvFunc);

          // 服务端到客户端，清理心跳超时定时器，防止心跳期间重连导致误超时
          this.event.on(this.event.key.close, function () {
            clearTimeout(timeoutTimer);
            timeoutTimer = null;
          }, this);

          // 客户端到服务端
          if (getSendDataFunc) {
            /** 心跳定时器 */
            var timer;

            // 启动心跳
            this.event.on(this.event.key.open, function () {
              timer = setInterval(function () {
                _this4._socket.send(getSendDataFunc());
              }, _this4.config.heartbeatConfig.intervalMsN);
            }, this);

            // 关闭心跳
            this.event.on(this.event.key.close, function () {
              clearInterval(timer);
              timer = null;
            }, this);
          }
        }

        /* ------------------------------- get/set ------------------------------- */;
        _proto._setIsWriteSleep = function _setIsWriteSleep(value_) {
          if (this._isWriteSleep2 === value_) {
            return;
          }
          if (value_) {
            if (this._sendTimer !== null) {
              clearInterval(this._sendTimer);
              this._sendTimer = null;
            }
          } else {
            this._sendTimer = setInterval(this._timerSend.bind(this), this.config.sendIntervalMsNum);
          }
          this._isWriteSleep2 = value_;
        }

        /* ------------------------------- 全局事件 ------------------------------- */;
        _proto._onRestart = function _onRestart() {
          // 写睡眠
          this._isWriteSleep = true;
          // 关闭网络事件
          this.event.emit(this.event.key.close, null);
          // 清理事件
          this.event.clear();
          this.message.clear();
          // 清理发送消息
          this._writeList.splice(0, this._writeList.length);

          // 清理等待消息
          {
            this._waitTaskMap.forEach(function (v) {
              v.finish(true, null);
            });
            this._waitTaskMap.clear();
          }

          // 取消重连
          this._cancelReconnect(false);
          // 关闭网络
          this.close();
        };
        _createClass(MKNetworkBase, [{
          key: "state",
          get: /** socket 状态 */
          function get() {
            return this._state;
          }

          /** 编解码器 */
        }, {
          key: "codec",
          get: function get() {
            return this.config.codec;
          },
          set: function set(value_) {
            this.config.codec = value_;
          }

          /* --------------- protected --------------- */
          /** socket */
        }, {
          key: "_isWriteSleep",
          get: /** 写睡眠状态 */
          function get() {
            return this._isWriteSleep2;
          },
          set: function set(value_) {
            this._setIsWriteSleep(value_);
          }

          /* ------------------------------- 功能 ------------------------------- */
          /** 重置 socket */
        }]);

        return MKNetworkBase;
      }(MKInstanceBase));
      var MKNetworkBase_;
      (function (_MKNetworkBase_) {
        var Status = /*#__PURE__*/function (Status) {
          Status[Status["Connecting"] = 0] = "Connecting";
          Status[Status["Open"] = 1] = "Open";
          Status[Status["Closing"] = 2] = "Closing";
          Status[Status["Closed"] = 3] = "Closed";
          return Status;
        }({});
        _MKNetworkBase_.Status = Status;
        var InitConfig = /*#__PURE__*/function () {
          function InitConfig(init_) {
            /** 编解码器 */
            this.codec = void 0;
            /**
             * 发送间隔（毫秒）
             * @defaultValue 0
             */
            this.sendIntervalMsNum = 0;
            /** 重连间隔（毫秒）
             * @defaultValue 1000
             */
            this.reconnectIntervalMsNum = 1000;
            /** 最大重连次数
             * @defaultValue 5
             */
            this.maxReconnectNum = 5;
            /** 等待消息超时时间（毫秒）
             * @defaultValue 5000
             */
            this.waitTimeoutMsNum = 5000;
            /** 心跳配置 */
            this.heartbeatConfig = void 0;
            Object.assign(this, init_);
          }
          var _proto3 = InitConfig.prototype;
          /**
           * 解析消息 id
           * @param data 接收的消息
           * @returns 消息号
           */
          _proto3.parseMessageIdFunc = function parseMessageIdFunc(data) {
            return undefined;
          }

          /**
           * 解析消息序列号
           * @param data 接收的消息
           * @returns 消息序列号
           */;
          _proto3.parseMessageSequenceFunc = function parseMessageSequenceFunc(data) {
            return;
          };
          return InitConfig;
        }();
        _MKNetworkBase_.InitConfig = InitConfig;
        var SendTide = /*#__PURE__*/function () {
          /**
           * @param network_ 网络实例
           * @param intervalMsN_ 发送间隔
           *
           * - -1：手动触发
           *
           * - 0-n：自动发送间隔毫秒
           */
          function SendTide(network_, intervalMsN_) {
            /** 网络节点 */
            this._network = void 0;
            /**
             * 发送间隔
             * @remarks
             *
             * - -1：手动触发
             *
             * - \>0：自动发送间隔毫秒
             */
            this._sendIntervalMsNum = void 0;
            /** 消息列表 */
            this._messList = [];
            /** 发送倒计时 */
            this._sendTimer = null;
            this._network = network_;
            this._sendIntervalMsNum = intervalMsN_;

            // 事件监听
            globalEvent.on(globalEvent.key.restart, this._onRestart, this);
          }
          var _proto4 = SendTide.prototype;
          /* ------------------------------- 功能 ------------------------------- */
          /** 发送 */
          _proto4.send = function send(data_) {
            var _this6 = this;
            if (this._sendIntervalMsNum === 0) {
              this._network._send(data_);
              return;
            } else {
              this._messList.push(data_);
            }

            // 发送定时器
            if (this._sendIntervalMsNum > 0 && !this._sendTimer) {
              this._sendTimer = setInterval(function () {
                // 没有消息取消定时任务
                if (!_this6._messList.length) {
                  clearInterval(_this6._sendTimer);
                  _this6._sendTimer = null;
                  return;
                }
                while (_this6._messList.length) {
                  _this6._network._send(_this6._messList.shift());
                }
              }, this._sendIntervalMsNum);
            }
          }

          /** 触发发送 */;
          _proto4.trigger = function trigger() {
            if (this._sendIntervalMsNum !== -1) {
              return;
            }
            while (this._messList.length) {
              this._network._send(this._messList.shift());
            }
          }

          /** 清理所有未发送消息 */;
          _proto4.clear = function clear() {
            this._messList.splice(0, this._messList.length);
          }

          /* ------------------------------- 全局事件 ------------------------------- */;
          _proto4._onRestart = function _onRestart() {
            clearInterval(this._sendTimer);
            this._sendTimer = null;
          };
          return SendTide;
        }();
        _MKNetworkBase_.SendTide = SendTide;
      })(MKNetworkBase_ || (MKNetworkBase_ = exports('MKNetworkBase_', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKNetworkExport.ts", ['cc', './MKWebsocket.ts', './MKWebsocketWX.ts', './MKHttp.ts', './MKNetworkBase.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      var _setter = {};
      _setter.Websocket = module.default;
      _setter.Websocket_ = module.MKWebsocket_;
      exports(_setter);
    }, function (module) {
      exports('WebsocketWX', module.default);
    }, function (module) {
      var _setter = {};
      _setter.Http_ = module.MKHttp_;
      _setter.http = module.default;
      exports(_setter);
    }, function (module) {
      var _setter = {};
      _setter.Base = module.default;
      _setter.Base_ = module.MKNetworkBase_;
      exports(_setter);
    }],
    execute: function () {
      cclegacy._RF.push({}, "a9d42BHe2ZE66tWHPeoDUif", "MKNetworkExport", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKNodes.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalConfig.ts', './GlobalEvent.ts'], function (exports) {
  var _createClass, cclegacy, director, Director, Node, Label, Sprite, UIOpacity, UITransform, EditBox, RichText, Layout, ProgressBar, Slider, Toggle, GlobalConfig, globalEvent;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
      Node = module.Node;
      Label = module.Label;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      EditBox = module.EditBox;
      RichText = module.RichText;
      Layout = module.Layout;
      ProgressBar = module.ProgressBar;
      Slider = module.Slider;
      Toggle = module.Toggle;
    }, function (module) {
      GlobalConfig = module.default;
    }, function (module) {
      globalEvent = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "86140y3p3NMdpVu2mJesV9o", "MKNodes", undefined);
      var NodeExtends = /*#__PURE__*/function () {
        function NodeExtends(node_) {
          var _this = this;
          /* --------------- public --------------- */
          this.label = void 0;
          this.sprite = void 0;
          this.transform = void 0;
          this.animation = void 0;
          this.editBox = void 0;
          this.richText = void 0;
          this.layout = void 0;
          this.progressBar = void 0;
          this.slider = void 0;
          this.toggle = void 0;
          /* --------------- private --------------- */
          /** 持有节点 */
          this._node = void 0;
          /** 节点渲染次序 */
          this._orderNum = NaN;
          /** 节点渲染次序更新时间 */
          this._orderTimestampNum = 0;
          /** 透明度组件 */
          this._uiOpacity = void 0;
          this._node = node_;
          this._node.components.forEach(function (v) {
            if (v instanceof Label) {
              _this.label = v;
            } else if (v instanceof Sprite) {
              _this.sprite = v;
            } else if (v instanceof UIOpacity) {
              _this._uiOpacity = v;
            } else if (v instanceof UITransform) {
              _this.transform = v;
            } else if (Animation && v instanceof Animation) {
              _this.animation = v;
            } else if (v instanceof EditBox) {
              _this.editBox = v;
            } else if (v instanceof RichText) {
              _this.richText = v;
            } else if (v instanceof Layout) {
              _this.layout = v;
            } else if (v instanceof ProgressBar) {
              _this.progressBar = v;
            } else if (v instanceof Slider) {
              _this.slider = v;
            } else if (v instanceof Toggle) {
              _this.toggle = v;
            }
          });
          node_.on(Node.EventType.PARENT_CHANGED, this._onNodeParentChanged, this);
          this._onNodeParentChanged();
        }

        /* --------------- static --------------- */
        /** 节点扩展数据 */
        var _proto = NodeExtends.prototype;
        /* ------------------------------- 节点事件 ------------------------------- */
        _proto._onNodeParentChanged = function _onNodeParentChanged() {
          var _this$_node$parent,
            _this2 = this;
          if (!((_this$_node$parent = this._node.parent) != null && _this$_node$parent.isValid)) {
            return;
          }

          // 避免 children 数据未更新
          if (!this._node.parent.children.includes(this._node)) {
            this._node.parent.once(Node.EventType.CHILD_ADDED, function () {
              _this2._setOrderNum(_this2._orderNum, true);
            }, this);
          } else {
            this._setOrderNum(this._orderNum, true);
          }
        }

        /* ------------------------------- get/set ------------------------------- */;
        _proto._setOrderNum = function _setOrderNum(valueNum_, isForce_) {
          var _this3 = this;
          if (isForce_ === void 0) {
            isForce_ = false;
          }
          if (
          // 节点失效
          !this._node.isValid ||
          // 未改变渲染顺序
          this._orderNum === valueNum_ &&
          // 强制更新
          !isForce_) {
            return;
          }

          // 更新渲染顺序
          this._orderNum = valueNum_;
          this._orderTimestampNum = Date.now();
          var parent = MKN(this._node.parent);

          // 父节点不存在
          if (!parent) {
            return;
          }

          /** 距离上次更新的时间 */
          var timeSinceLastUpdateNum = Date.now() - NodeExtends._orderUpdateTimeNum;

          // 添加任务
          NodeExtends._orderUpdateTaskFuncList.push(function () {
            // (节点/父节点)失效
            if (!_this3._node.isValid || !parent._node.isValid || _this3._node.parent !== parent._node) {
              return;
            }

            /** 同级节点 */
            var nodeList = [].concat(parent._node.children).sort(function (va, vb) {
              var _vaInfo$_orderNum, _vbInfo$_orderNum;
              var vaInfo = MKN(va, false);
              var vbInfo = MKN(vb, false);
              var vaOrder = (_vaInfo$_orderNum = vaInfo == null ? void 0 : vaInfo._orderNum) != null ? _vaInfo$_orderNum : 0;
              var vbOrder = (_vbInfo$_orderNum = vbInfo == null ? void 0 : vbInfo._orderNum) != null ? _vbInfo$_orderNum : 0;
              if (vaOrder === vbOrder) {
                // 如果其中任一节点数据为空，则保持原本的节点下标
                if (!vaInfo || !vbInfo) {
                  return va.getSiblingIndex() - vb.getSiblingIndex();
                }
                return vaInfo._orderTimestampNum - vbInfo._orderTimestampNum;
              } else {
                return vaOrder - vbOrder;
              }
            });

            // 更新渲染顺序
            nodeList.forEach(function (v, kN) {
              v.setSiblingIndex(kN);
            });
          });

          // 已经准备更新
          if (NodeExtends.orderUpdateTimer !== null) {
            return;
          }

          // 小于间隔时间更新
          if (NodeExtends.orderUpdateTimer === null && timeSinceLastUpdateNum < NodeExtends._config.layerRefreshIntervalMsNum) {
            NodeExtends.orderUpdateTimer = setTimeout(function () {
              // 清理定时器数据
              NodeExtends.orderUpdateTimer = null;
              // 更新时间
              NodeExtends._orderUpdateTimeNum = Date.now();
              // 更新渲染顺序
              NodeExtends._orderUpdateTaskFuncList.splice(0, NodeExtends._orderUpdateTaskFuncList.length).forEach(function (vFunc) {
                return vFunc();
              });
            }, NodeExtends._config.layerRefreshIntervalMsNum - timeSinceLastUpdateNum);
            return;
          }

          // 更新时间
          NodeExtends._orderUpdateTimeNum = Date.now();
          // 更新渲染顺序
          NodeExtends._orderUpdateTaskFuncList.splice(0, NodeExtends._orderUpdateTaskFuncList.length).forEach(function (vFunc) {
            return vFunc();
          });
        };
        _createClass(NodeExtends, [{
          key: "orderNum",
          get: /** 节点渲染次序 */
          function get() {
            return this._orderNum;
          },
          set: function set(valueNum_) {
            this._setOrderNum(valueNum_);
          }

          /** 宽 */
        }, {
          key: "width",
          get: function get() {
            return this.transform.width;
          },
          set: function set(valueNum_) {
            this.transform.width = valueNum_;
          }

          /** 高 */
        }, {
          key: "height",
          get: function get() {
            return this.transform.height;
          },
          set: function set(valueNum_) {
            this.transform.height = valueNum_;
          }

          /** 透明度 */
        }, {
          key: "opacity",
          get: function get() {
            return this._uiOpacity.opacity;
          },
          set: function set(valueNum_) {
            this._uiOpacity.opacity = valueNum_;
          }

          /** 锚点 */
        }, {
          key: "anchor",
          get: function get() {
            return this.transform.anchorPoint;
          },
          set: function set(valueV2_) {
            this.transform.anchorPoint = valueV2_;
          }
        }]);
        return NodeExtends;
      }(); // eslint-disable-next-line @typescript-eslint/naming-convention
      NodeExtends.nodeExtendsMap = new Map();
      /** 渲染顺序更新倒计时 */
      NodeExtends.orderUpdateTimer = null;
      /** 全局配置 */
      NodeExtends._config = GlobalConfig.View.config;
      /** 渲染顺序更新时间 */
      NodeExtends._orderUpdateTimeNum = 0;
      /** 更新任务 */
      NodeExtends._orderUpdateTaskFuncList = [];
      function MKN(node_, isForce_) {
        var _NodeExtends$nodeExte;
        if (isForce_ === void 0) {
          isForce_ = true;
        }
        if (!(node_ != null && node_.isValid)) {
          return null;
        }
        var nodeExtend = (_NodeExtends$nodeExte = NodeExtends.nodeExtendsMap.get(node_)) != null ? _NodeExtends$nodeExte : null;
        if (!nodeExtend && isForce_) {
          nodeExtend = new NodeExtends(node_);
          NodeExtends.nodeExtendsMap.set(node_, nodeExtend);
        }
        return nodeExtend;
      }
      (function (_MKN) {
        function clear() {
          // 清理定时器
          if (NodeExtends.orderUpdateTimer) {
            clearTimeout(NodeExtends.orderUpdateTimer);
            NodeExtends.orderUpdateTimer = null;
          }

          // 清理节点数据
          NodeExtends.nodeExtendsMap.clear();
        }
        _MKN.clear = clear;
      })(MKN || (MKN = {})); // 切换场景后自动清理
      director.on(Director.EVENT_BEFORE_SCENE_LAUNCH, MKN.clear, undefined);
      // 重启时自动清理
      globalEvent.on(globalEvent.key.restart, MKN.clear, undefined);
      var MKN$1 = exports('default', MKN);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKObjectPool.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKLogger.ts', './MKStatusTask.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, mkLog, MKStatusTask;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      mkLog = module.mkLog;
    }, function (module) {
      MKStatusTask = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5b001DsC+NFmowA3TYkm0Iw", "MKObjectPool", undefined);
      var _MKObjectPool;
      (function (_MKObjectPool2) {
        var Config = function Config(init_) {
          /** 返回新对象 */
          this.createFunc = void 0;
          /**
           * 重置对象
           * @remarks
           * 在 createFunc 后以及 put 时调用
           */
          this.resetFunc = void 0;
          /** 释放回调 */
          this.clearFunc = void 0;
          /** 销毁回调 */
          this.destroyFunc = void 0;
          /**
           * 最小保留数量
           * @remarks
           * 池内对象小于此数量时扩充
           */
          this.minHoldNum = 1;
          /**
           * 最大保留数量
           * @remarks
           * 可节省内存占用，-1为不启用
           * @defaultValue
           * -1
           */
          this.maxHoldNum = -1;
          /**
           * 初始化扩充数量
           * @defaultValue
           * 0
           */
          this.initFillNum = 0;
          Object.assign(this, init_);
        };
        _MKObjectPool2.Config = Config;
        var Sync;
        (function (_Sync) {
          var Config = function Config(init_) {
            /** 返回新对象 */
            this.createFunc = void 0;
            /**
             * 重置对象
             * @remarks
             * 在 createFunc 后以及 put 时调用
             */
            this.resetFunc = void 0;
            /** 释放回调 */
            this.clearFunc = void 0;
            /** 销毁回调 */
            this.destroyFunc = void 0;
            /**
             * 最小保留数量
             * @remarks
             * 池内对象小于此数量时扩充
             */
            this.minHoldNum = 1;
            /**
             * 最大保留数量
             * @remarks
             * 可节省内存占用，-1为不启用
             * @defaultValue
             * -1
             */
            this.maxHoldNum = -1;
            /**
             * 初始化扩充数量
             * @defaultValue
             * 0
             */
            this.initFillNum = 0;
            Object.assign(this, init_);
          };
          _Sync.Config = Config;
        })(Sync || (Sync = _MKObjectPool2.Sync || (_MKObjectPool2.Sync = {})));
      })(_MKObjectPool || (_MKObjectPool = {}));
      /** 异步对象池 */
      var MKObjectPool = /*#__PURE__*/function () {
        function MKObjectPool(init_) {
          var _this = this;
          /* --------------- public --------------- */
          /** 初始化数据 */
          this.config = void 0;
          /** 初始化任务 */
          this.initTask = new MKStatusTask(false);
          /* --------------- private --------------- */
          /** 有效状态 */
          this._isValid = true;
          /** 对象存储列表 */
          this._objectList = [];
          this.config = new _MKObjectPool.Config(init_);
          if (this.config.initFillNum > 0) {
            this._add(this.config.initFillNum).then(function () {
              _this.initTask.finish(true);
            });
          }
        }
        var _proto = MKObjectPool.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /**
         * 导入对象
         * @param object_ 添加对象
         * @returns
         */
        _proto.put = /*#__PURE__*/
        function () {
          var _put = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(object_) {
            var _this$config$clearFun, _this$config;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this._isValid) {
                    _context.next = 4;
                    break;
                  }
                  mkLog.warn("对象池失效");
                  (_this$config$clearFun = (_this$config = this.config).clearFunc) == null || _this$config$clearFun.call(_this$config, [object_]);
                  return _context.abrupt("return");
                case 4:
                  if (object_) {
                    _context.next = 6;
                    break;
                  }
                  return _context.abrupt("return");
                case 6:
                  _context.t0 = this._objectList;
                  if (!this.config.resetFunc) {
                    _context.next = 13;
                    break;
                  }
                  _context.next = 10;
                  return this.config.resetFunc(object_, false);
                case 10:
                  _context.t1 = _context.sent;
                  _context.next = 14;
                  break;
                case 13:
                  _context.t1 = object_;
                case 14:
                  _context.t2 = _context.t1;
                  _context.t0.push.call(_context.t0, _context.t2);
                  // 检查保留数量
                  if (this.config.maxHoldNum !== -1 && this._objectList.length > this.config.maxHoldNum) {
                    this._del(0, this._objectList.length - this.config.maxHoldNum);
                  }

                  // 失效直接销毁
                  if (this._isValid) {
                    _context.next = 20;
                    break;
                  }
                  _context.next = 20;
                  return this.clear();
                case 20:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function put(_x) {
            return _put.apply(this, arguments);
          }
          return put;
        }() /** 同步获取对象 */;
        _proto.getSync = function getSync() {
          if (!this._isValid) {
            mkLog.warn("对象池失效");
            return null;
          }

          // 扩充
          if (this._objectList.length - 1 < this.config.minHoldNum) {
            this._add(this.config.minHoldNum - this._objectList.length + 1);
          }

          // 检查容量
          if (!this._objectList.length) {
            return null;
          }
          return this._objectList.pop();
        }

        /** 获取对象 */;
        _proto.get = /*#__PURE__*/
        function () {
          var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (this._isValid) {
                    _context2.next = 3;
                    break;
                  }
                  mkLog.warn("对象池失效");
                  return _context2.abrupt("return", null);
                case 3:
                  if (!(this._objectList.length - 1 < this.config.minHoldNum)) {
                    _context2.next = 6;
                    break;
                  }
                  _context2.next = 6;
                  return this._add(this.config.minHoldNum - this._objectList.length + 1);
                case 6:
                  if (this._isValid) {
                    _context2.next = 10;
                    break;
                  }
                  mkLog.warn("对象池失效");
                  this.clear();
                  return _context2.abrupt("return", null);
                case 10:
                  return _context2.abrupt("return", this._objectList.pop());
                case 11:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function get() {
            return _get.apply(this, arguments);
          }
          return get;
        }() /** 清空数据 */;
        _proto.clear = /*#__PURE__*/
        function () {
          var _clear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var objectList, _this$config$clearFun2, _this$config2;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  objectList = this._objectList.splice(0, this._objectList.length);
                  if (!objectList.length) {
                    _context3.next = 4;
                    break;
                  }
                  _context3.next = 4;
                  return (_this$config$clearFun2 = (_this$config2 = this.config).clearFunc) == null ? void 0 : _this$config$clearFun2.call(_this$config2, objectList);
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function clear() {
            return _clear.apply(this, arguments);
          }
          return clear;
        }()
        /**
         * 销毁对象池
         * @remarks
         * 销毁后将无法 get/put
         */;

        _proto.destroy = /*#__PURE__*/
        function () {
          var _destroy = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _this$config$destroyF, _this$config3;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  this._isValid = false;
                  _context4.next = 3;
                  return this.clear();
                case 3:
                  _context4.next = 5;
                  return (_this$config$destroyF = (_this$config3 = this.config).destroyFunc) == null ? void 0 : _this$config$destroyF.call(_this$config3);
                case 5:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function destroy() {
            return _destroy.apply(this, arguments);
          }
          return destroy;
        }() /** 添加对象 */;
        _proto._add = /*#__PURE__*/
        function () {
          var _add2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(fillNum_) {
            var kNum, _kNum;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (fillNum_ === void 0) {
                    fillNum_ = this.config.minHoldNum - this._objectList.length;
                  }
                  if (!this.config.resetFunc) {
                    _context5.next = 18;
                    break;
                  }
                  kNum = 0;
                case 3:
                  if (!(kNum < fillNum_)) {
                    _context5.next = 16;
                    break;
                  }
                  _context5.t0 = this._objectList;
                  _context5.t1 = this.config;
                  _context5.next = 8;
                  return this.config.createFunc();
                case 8:
                  _context5.t2 = _context5.sent;
                  _context5.next = 11;
                  return _context5.t1.resetFunc.call(_context5.t1, _context5.t2, true);
                case 11:
                  _context5.t3 = _context5.sent;
                  _context5.t0.push.call(_context5.t0, _context5.t3);
                case 13:
                  ++kNum;
                  _context5.next = 3;
                  break;
                case 16:
                  _context5.next = 28;
                  break;
                case 18:
                  _kNum = 0;
                case 19:
                  if (!(_kNum < fillNum_)) {
                    _context5.next = 28;
                    break;
                  }
                  _context5.t4 = this._objectList;
                  _context5.next = 23;
                  return this.config.createFunc();
                case 23:
                  _context5.t5 = _context5.sent;
                  _context5.t4.push.call(_context5.t4, _context5.t5);
                case 25:
                  ++_kNum;
                  _context5.next = 19;
                  break;
                case 28:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function _add(_x2) {
            return _add2.apply(this, arguments);
          }
          return _add;
        }() /** 删除对象 */;
        _proto._del = function _del(startNum_, endNum_) {
          var objectList = this._objectList.splice(startNum_, endNum_ - startNum_);
          if (objectList.length) {
            var _this$config$clearFun3, _this$config4;
            (_this$config$clearFun3 = (_this$config4 = this.config).clearFunc) == null || _this$config$clearFun3.call(_this$config4, objectList);
          }
        };
        _createClass(MKObjectPool, [{
          key: "isValid",
          get: /** 有效状态 */
          function get() {
            return this._isValid;
          }
        }]);
        return MKObjectPool;
      }();
      (function (_MKObjectPool3) {
        var Sync = /*#__PURE__*/function () {
          function Sync(init_) {
            /* --------------- public --------------- */
            /** 初始化数据 */
            this.config = void 0;
            /* --------------- private --------------- */
            /** 有效状态 */
            this._isValid = true;
            /** 对象存储列表 */
            this._objectList = [];
            this.config = new _MKObjectPool.Sync.Config(init_);
            if (this.config.initFillNum > 0) {
              this._add(this.config.initFillNum);
            }
          }
          var _proto2 = Sync.prototype;
          /* ------------------------------- 功能 ------------------------------- */
          /** 导入对象 */
          _proto2.put = function put(object_) {
            if (!this._isValid) {
              var _this$config$clearFun4, _this$config5;
              mkLog.warn("对象池失效");
              (_this$config$clearFun4 = (_this$config5 = this.config).clearFunc) == null || _this$config$clearFun4.call(_this$config5, [object_]);
              return;
            }
            if (!object_) {
              return;
            }
            this._objectList.push(this.config.resetFunc ? this.config.resetFunc(object_, false) : object_);
            // 检查保留数量
            if (this.config.maxHoldNum !== -1 && this._objectList.length > this.config.maxHoldNum) {
              this._del(0, this._objectList.length - this.config.maxHoldNum);
            }
          }

          /** 获取对象 */;
          _proto2.get = function get() {
            if (!this._isValid) {
              mkLog.warn("对象池失效");
              return null;
            }

            // 扩充
            if (this._objectList.length - 1 < this.config.minHoldNum) {
              this._add(this.config.minHoldNum - this._objectList.length + 1);
            }

            // 检查容量
            if (!this._objectList.length) {
              this._add(1);
            }
            return this._objectList.pop();
          }

          /** 清空数据 */;
          _proto2.clear = function clear() {
            var objectList = this._objectList.splice(0, this._objectList.length);
            if (objectList.length) {
              var _this$config$clearFun5, _this$config6;
              (_this$config$clearFun5 = (_this$config6 = this.config).clearFunc) == null || _this$config$clearFun5.call(_this$config6, objectList);
            }
          }

          /**
           * 销毁对象池
           * @remarks
           * 销毁后将无法 get/put
           */;
          _proto2.destroy = function destroy() {
            var _this$config$destroyF2, _this$config7;
            this._isValid = false;
            this.clear();
            (_this$config$destroyF2 = (_this$config7 = this.config).destroyFunc) == null || _this$config$destroyF2.call(_this$config7);
          }

          /** 添加对象 */;
          _proto2._add = function _add(fillNum_) {
            if (fillNum_ === void 0) {
              fillNum_ = this.config.minHoldNum - this._objectList.length;
            }
            if (this.config.resetFunc) {
              for (var kNum = 0; kNum < fillNum_; ++kNum) {
                this._objectList.push(this.config.resetFunc(this.config.createFunc(), true));
              }
            } else {
              for (var _kNum2 = 0; _kNum2 < fillNum_; ++_kNum2) {
                this._objectList.push(this.config.createFunc());
              }
            }
          }

          /** 删除对象 */;
          _proto2._del = function _del(startNum_, endNum_) {
            var objectList = this._objectList.splice(startNum_, endNum_ - startNum_);
            if (objectList.length) {
              var _this$config$clearFun6, _this$config8;
              (_this$config$clearFun6 = (_this$config8 = this.config).clearFunc) == null || _this$config$clearFun6.call(_this$config8, objectList);
            }
          };
          _createClass(Sync, [{
            key: "isValid",
            get: /** 有效状态 */
            function get() {
              return this._isValid;
            }
          }]);
          return Sync;
        }();
        _MKObjectPool3.Sync = Sync;
      })(MKObjectPool || (MKObjectPool = {}));
      var MKObjectPool$1 = exports('default', MKObjectPool);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKPolygonMask.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalEvent.ts', './GlobalConfig.ts', './MKLogger.ts', './MKMonitor.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, PolygonCollider2D, Mask, Node, size, v3, v2, view, Graphics, UITransform, color, Component, globalEvent, GlobalConfig, mkLog, mkMonitor;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      PolygonCollider2D = module.PolygonCollider2D;
      Mask = module.Mask;
      Node = module.Node;
      size = module.size;
      v3 = module.v3;
      v2 = module.v2;
      view = module.view;
      Graphics = module.Graphics;
      UITransform = module.UITransform;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      globalEvent = module.default;
    }, function (module) {
      GlobalConfig = module.default;
    }, function (module) {
      mkLog = module.mkLog;
    }, function (module) {
      mkMonitor = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "b4c69mXArxNYIbh3YaPooh6", "MKPolygonMask", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent,
        executeInEditMode = _decorator.executeInEditMode;

      /**
       * 多边形遮罩
       * @noInheritDoc
       * @remarks
       *
       * - 多边形图片遮罩
       *
       * - 多边形触摸屏蔽
       */
      var MKPolygonMask = exports('MKPolygonMask', (_dec = requireComponent([PolygonCollider2D]), _dec2 = property({
        displayName: "遮罩组件",
        type: Mask
      }), _dec3 = property({
        displayName: "屏蔽触摸",
        tooltip: "屏蔽展示区域外的触摸事件"
      }), _dec4 = property({
        displayName: "跟踪节点",
        type: Node,
        tooltip: "遮罩对应的节点"
      }), _dec5 = property(Node), ccclass(_class = executeInEditMode(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MKPolygonMask, _Component);
        function MKPolygonMask() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /* --------------- 属性 --------------- */
          /** 遮罩组件 */
          _initializerDefineProperty(_this, "mask", _descriptor, _assertThisInitialized(_this));
          /** 屏蔽触摸 */
          _initializerDefineProperty(_this, "isShieldTouch", _descriptor2, _assertThisInitialized(_this));
          /* --------------- private --------------- */
          /** 跟踪节点 */
          _initializerDefineProperty(_this, "_trackNode", _descriptor3, _assertThisInitialized(_this));
          /** 跟踪节点初始坐标 */
          _initializerDefineProperty(_this, "_trackNodeStartPosV3", _descriptor4, _assertThisInitialized(_this));
          /** 调试模式 */
          _this._isDebug = false;
          /** 调试绘图组件 */
          _this._graphics = void 0;
          /** 初始设计尺寸 */
          _this._initialDesignSize = size();
          /** 偏移坐标 */
          _this._offsetV3 = v3();
          /** 多边形本地点 */
          _this._polygonLocalPointV2List = void 0;
          /** 当前多边形本地点 */
          _this._currentPolygonLocalPointV2List = void 0;
          /** 多边形世界点 */
          _this._polygonWorldPointV2List = void 0;
          /** 当前多边形世界点 */
          _this._currentPolygonWorldPointV2List = void 0;
          /** 跟踪节点世界坐标 */
          _this._trackNodeWorldPosV3 = v3();
          /** 输入事件 */
          _this._inputEventList = [Node.EventType.TOUCH_START, Node.EventType.TOUCH_END, Node.EventType.TOUCH_MOVE, Node.EventType.MOUSE_DOWN, Node.EventType.MOUSE_MOVE, Node.EventType.MOUSE_UP, Node.EventType.MOUSE_ENTER, Node.EventType.MOUSE_LEAVE, Node.EventType.MOUSE_WHEEL];
          /** 临时变量 */
          _this._tempTab = {
            v2: v2(),
            v3: v3()
          };
          return _this;
        }
        var _proto = MKPolygonMask.prototype;
        /* ------------------------------- 生命周期 ------------------------------- */
        _proto.onLoad = function onLoad() {
          var _this$_trackNode;
          if (this.getComponent(Mask)) {
            mkLog.error("不能在 mask 组件的节点上添加组件");
            this.destroy();
            return;
          }

          /** 多边形组件 */
          var polygonComp = this.getComponent(PolygonCollider2D);

          // 更新初始设计尺寸
          this._initialDesignSize = view.getDesignResolutionSize();
          // 初始化跟踪节点世界坐标
          (_this$_trackNode = this._trackNode) == null || _this$_trackNode.getWorldPosition(this._trackNodeWorldPosV3);

          // 更新数据
          this.isDebug = this._isDebug;
          this._currentPolygonLocalPointV2List = this._polygonLocalPointV2List = polygonComp.points.map(function (vV2) {
            return vV2.clone().add(polygonComp.offset);
          });
          this._currentPolygonWorldPointV2List = this._polygonWorldPointV2List = polygonComp.worldPoints.map(function (vV2) {
            return vV2.clone().add(polygonComp.offset);
          });

          // 更新视图
          {
            this.updateMask();
            polygonComp.destroy();
          }

          // 全局事件
          globalEvent.on(globalEvent.key.resize, this._onGlobalResize, this);
        };
        _proto.start = function start() {
          this.updateMask();
        };
        _proto.onEnable = function onEnable() {
          // 跟踪节点失效
          if (this._trackNode && !this._trackNode.isValid) {
            this._trackNode = null;
          }

          // 屏蔽触摸
          if (this.isShieldTouch) {
            for (var _iterator = _createForOfIteratorHelperLoose(this._inputEventList), _step; !(_step = _iterator()).done;) {
              var v = _step.value;
              this.node.on(v, this._onNodeInput, this);
            }
          }
          this.updateMask();
        };
        _proto.onDisable = function onDisable() {
          // 取消屏蔽触摸
          if (this.isShieldTouch) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(this._inputEventList), _step2; !(_step2 = _iterator2()).done;) {
              var v = _step2.value;
              this.node.off(v, this._onNodeInput, this);
            }
          }
        };
        _proto.update = function update(dtNum_) {
          var _this$_trackNode2;
          // 跟踪节点失效
          if (this._trackNode && !this._trackNode.isValid) {
            this._trackNode = null;
          }

          // 原生上的 worldPosition 数据已经转到 C++ 内，所以不能监听数据
          if (!((_this$_trackNode2 = this._trackNode) != null && _this$_trackNode2.worldPosition.equals(this._trackNodeWorldPosV3))) {
            this._trackNode.getWorldPosition(this._trackNodeWorldPosV3);
            this.updateMask();
          }
        };
        _proto.onDestroy = function onDestroy() {
          // @weak-start-include-MKMonitor
          mkMonitor.clear(this);
          // @weak-end
          globalEvent.targetOff(this);
        }

        /* ------------------------------- 功能 ------------------------------- */
        /** 更新遮罩 */;
        _proto.updateMask = function updateMask() {
          var _this3 = this;
          // 依赖数据不存在
          if (!this._polygonLocalPointV2List || !this._polygonWorldPointV2List) {
            return;
          }

          // 编辑器更新初始坐标
          {
            /** 当前显示尺寸 */
            var currentVisibleSize = view.getVisibleSize();
            /** 当前设计尺寸 */
            var currentDesignSize = view.getDesignResolutionSize();
            /** 节点偏移坐标 */
            var nodeOffsetV3 = !this._trackNode ? v3() : this._trackNode.worldPosition.clone().subtract(this._trackNodeStartPosV3);

            /** 显示偏移坐标 */
            var visibleOffsetV3 = v3((currentVisibleSize.width - GlobalConfig.View.originalDesignSize.width) * -0.5, (currentVisibleSize.height - GlobalConfig.View.originalDesignSize.height) * -0.5);

            /** 设计偏移坐标 */
            var designOffset2V3 = v3((this._initialDesignSize.width - currentDesignSize.width) * -0.5, (this._initialDesignSize.height - currentDesignSize.height) * -0.5);
            this._currentPolygonLocalPointV2List = this._polygonLocalPointV2List.map(function (vV2) {
              return vV2.clone().add2f(nodeOffsetV3.x, nodeOffsetV3.y).add2f(visibleOffsetV3.x, visibleOffsetV3.y).add2f(_this3._offsetV3.x, _this3._offsetV3.y);
            });
            this._currentPolygonWorldPointV2List = this._polygonWorldPointV2List.map(function (vV2) {
              return vV2.clone().add2f(nodeOffsetV3.x, nodeOffsetV3.y).add2f(visibleOffsetV3.x, visibleOffsetV3.y).add2f(designOffset2V3.x, designOffset2V3.y).add2f(_this3._offsetV3.x, _this3._offsetV3.y);
            });
            this._updateGraphics();
          }
          this._updateMask();
        }

        /** 更新遮罩 */;
        _proto._updateMask = function _updateMask() {
          var _this$mask;
          if (
          // 编辑器且节点隐藏

          // 遮罩类型不一致
          ((_this$mask = this.mask) == null ? void 0 : _this$mask.type) !== Mask.Type.GRAPHICS_STENCIL ||
          // 依赖数据不存在
          !this._currentPolygonLocalPointV2List) {
            return;
          }

          /** 绘图组件 */
          var graphicsComp = this.mask.node.getComponent(Graphics);
          /** 多边形坐标 */
          var pointV2List = this._currentPolygonLocalPointV2List;

          // 绘制遮罩
          if ((pointV2List == null ? void 0 : pointV2List.length) > 1) {
            graphicsComp.clear();
            graphicsComp.moveTo(pointV2List[0].x, pointV2List[0].y);
            for (var _iterator3 = _createForOfIteratorHelperLoose(pointV2List), _step3; !(_step3 = _iterator3()).done;) {
              var vV2 = _step3.value;
              graphicsComp.lineTo(vV2.x, vV2.y);
            }
            graphicsComp.close();
            graphicsComp.stroke();
            graphicsComp.fill();
          }
        }

        /** 更新调试绘制 */;
        _proto._updateGraphics = function _updateGraphics() {
          var _this4 = this;
          if (!this._isDebug || !this._graphics || !this._currentPolygonLocalPointV2List) {
            return;
          }
          var uiTransform = this._graphics.getComponent(UITransform);
          this._graphics.clear();
          this._currentPolygonLocalPointV2List.forEach(function (vV2) {
            uiTransform.convertToNodeSpaceAR(_this4._tempTab.v3.set(vV2.x, vV2.y), _this4._tempTab.v3);
            _this4._graphics.circle(_this4._tempTab.v3.x, _this4._tempTab.v3.y, 5);
            _this4._graphics.stroke();
          });
        }

        /**
         * @en Test whether the point is in the polygon
         * @zh 测试一个点是否在一个多边形中
         */;
        _proto._pointInPolygon = function _pointInPolygon(pointV2List_, polygonV2List_) {
          var isInside = false;
          var x = pointV2List_.x;
          var y = pointV2List_.y;
          // use some raycasting to test hits
          // https://github.com/substack/point-in-polygon/blob/master/index.js
          var length = polygonV2List_.length;
          for (var kNum = 0, k2Num = length - 1; kNum < length; k2Num = kNum++) {
            var xNum = polygonV2List_[kNum].x;
            var yNum = polygonV2List_[kNum].y;
            var x2Num = polygonV2List_[k2Num].x;
            var y2Num = polygonV2List_[k2Num].y;
            var isIntersect = yNum > y !== y2Num > y && x < (x2Num - xNum) * (y - yNum) / (y2Num - yNum) + xNum;
            if (isIntersect) {
              isInside = !isInside;
            }
          }
          return isInside;
        }
        /* ------------------------------- get/set ------------------------------- */;
        _proto._setIsDebug = function _setIsDebug(value_) {
          this._isDebug = value_;
          if (this._isDebug && !this._graphics) {
            this._graphics = this.node.addComponent(Graphics);
            this._graphics.lineWidth = 6;
            this._graphics.strokeColor = color(0, 0, 255, 255);
            this._updateGraphics();
          } else {
            var _this$_graphics;
            (_this$_graphics = this._graphics) == null || _this$_graphics.clear();
          }
        };
        _proto._setOffsetV3 = function _setOffsetV3(valueV3_) {
          this._offsetV3.set(valueV3_);
          this.updateMask();
        };
        _proto._setTrackNode = function _setTrackNode(value_) {
          var _this$_trackNode3;
          this._trackNode = value_;
          (_this$_trackNode3 = this._trackNode) == null || _this$_trackNode3.getWorldPosition(this._trackNodeWorldPosV3);
          this.updateMask();
        }
        /* ------------------------------- 节点事件 ------------------------------- */;
        _proto._onNodeInput = function _onNodeInput(event_) {
          /** 碰撞状态 */
          var isCollision = this._pointInPolygon(event_.getUILocation(this._tempTab.v2), this._currentPolygonWorldPointV2List);

          // 更新碰撞状态
          isCollision = !this.mask || this.mask.inverted ? isCollision : !isCollision;
          // 触摸穿透
          event_.preventSwallow = isCollision;
          // 拦截事件
          event_.propagationStopped = !isCollision;
        }

        /* ------------------------------- 全局事件 ------------------------------- */;
        _proto._onGlobalResize = function _onGlobalResize() {
          this.unschedule(this.updateMask);
          this.scheduleOnce(this.updateMask);
        };
        _createClass(MKPolygonMask, [{
          key: "trackNode",
          get: /** 跟踪节点 */
          function get() {
            return this._trackNode;
          },
          set: function set(value_) {
            this._setTrackNode(value_);
          }

          /* --------------- public --------------- */
          /** 偏移坐标 */
        }, {
          key: "offsetV3",
          get: function get() {
            return this._offsetV3;
          },
          set: function set(valueV3_) {
            this._setOffsetV3(valueV3_);
          }

          /** 调式模式 */
        }, {
          key: "isDebug",
          get: function get() {
            return this._isDebug;
          },
          set: function set(value_) {
            this._setIsDebug(value_);
          }
        }]);
        return MKPolygonMask;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isShieldTouch", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "trackNode", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "trackNode"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_trackNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_trackNodeStartPosV3", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3();
        }
      })), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKRelease.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKLogger.ts', './MKFollowNodeRelease.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Node, Asset, mkLog, MKFollowNodeRelease;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Asset = module.Asset;
    }, function (module) {
      mkLog = module.mkLog;
    }, function (module) {
      MKFollowNodeRelease = module.default;
    }],
    execute: function () {
      exports('MKRelease_', void 0);
      cclegacy._RF.push({}, "c9926wz5oZMWZylbDjd8IoG", "MKRelease", undefined);

      /**
       * 对象释放器
       * @remarks
       *
       * - 统一 (Node/Asset) 资源的释放逻辑
       *
       * - 可以通过 function 或继承添加自定义释放逻辑
       */
      var MKRelease = exports('default', /*#__PURE__*/function () {
        function MKRelease() {
          /** 节点集合 */
          this._nodeSet = new Set();
          /** 资源集合 */
          this._assetSet = new Set();
          /** 对象集合 */
          this._objectSet = new Set();
          /** 回调集合 */
          this._callbackSet = new Set();
        }
        /* ------------------------------- 功能 ------------------------------- */
        /**
         * 释放对象
         * @param object_ 指定对象
         */
        MKRelease.release = /*#__PURE__*/
        function () {
          var _release = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(object_) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(object_ instanceof Node)) {
                    _context.next = 4;
                    break;
                  }
                  if (object_.isValid) {
                    object_.removeFromParent();
                    object_.destroy();
                  }
                  _context.next = 16;
                  break;
                case 4:
                  if (!(object_ instanceof Asset)) {
                    _context.next = 8;
                    break;
                  }
                  if (object_.isValid) {
                    object_.decRef();
                  }
                  _context.next = 16;
                  break;
                case 8:
                  if (!(typeof object_ === "function")) {
                    _context.next = 13;
                    break;
                  }
                  _context.next = 11;
                  return object_();
                case 11:
                  _context.next = 16;
                  break;
                case 13:
                  if (!object_) {
                    _context.next = 16;
                    break;
                  }
                  _context.next = 16;
                  return object_.release();
                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function release(_x) {
            return _release.apply(this, arguments);
          }
          return release;
        }()
        /**
         * 跟随释放
         * @param object_ 跟随释放对象
         * @param releaseObject_ 释放对象
         */;

        MKRelease.followRelease = function followRelease(object_, releaseObject_) {
          if (!object_ || !releaseObject_) {
            return;
          }
          if (object_ instanceof Node) {
            if (!object_.isValid) {
              this.release(releaseObject_);
            } else {
              (object_.getComponent(MKFollowNodeRelease) || object_.addComponent(MKFollowNodeRelease)).followRelease(releaseObject_);
            }
          } else {
            object_.followRelease(releaseObject_);
          }
        }

        /**
         * 取消跟随释放
         * @param object_ 跟随释放对象
         * @param releaseObject_ 释放对象
         */;
        MKRelease.cancelRelease = function cancelRelease(object_, releaseObject_) {
          if (!object_ || !releaseObject_) {
            return;
          }
          if (object_ instanceof Node) {
            if (object_.isValid) {
              (object_.getComponent(MKFollowNodeRelease) || object_.addComponent(MKFollowNodeRelease)).cancelRelease(releaseObject_);
            }
          } else {
            object_.cancelRelease(releaseObject_);
          }
        }

        /**
         * 添加释放对象
         * @param object_ 要跟随模块释放的对象或列表
         */;
        var _proto = MKRelease.prototype;
        _proto.add = function add(object_) {
          if (!object_) {
            mkLog.error("添加释放对象错误", object_);
            return object_;
          }

          // 添加引用数据
          if (object_ instanceof Node) {
            if (object_.isValid) {
              this._nodeSet.add(object_);
            }
          } else if (object_ instanceof Asset) {
            if (object_.isValid) {
              this._assetSet.add(object_);
            }
          } else if (typeof object_ === "function") {
            this._callbackSet.add(object_);
          } else {
            this._objectSet.add(object_);
          }
          return object_;
        }

        /**
         * 删除释放对象
         * @param object_ 删除跟随模块释放的对象或列表
         */;
        _proto["delete"] = function _delete(object_) {
          if (!object_) {
            mkLog.error("删除释放对象错误", object_);
            return;
          }

          // 添加引用数据
          if (object_ instanceof Node) {
            this._nodeSet["delete"](object_);
          } else if (object_ instanceof Asset) {
            this._assetSet["delete"](object_);
          } else if (typeof object_ === "function") {
            this._callbackSet["delete"](object_);
          } else {
            this._objectSet["delete"](object_);
          }
          return;
        }

        /**
         * 释放对象
         * @param object_ 指定对象
         */;
        _proto.release = /*#__PURE__*/
        function () {
          var _release2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(object_) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(object_ instanceof Node)) {
                    _context2.next = 4;
                    break;
                  }
                  if (this._nodeSet["delete"](object_) && object_.isValid) {
                    object_.removeFromParent();
                    object_.destroy();
                  }
                  _context2.next = 17;
                  break;
                case 4:
                  if (!(object_ instanceof Asset)) {
                    _context2.next = 8;
                    break;
                  }
                  if (this._assetSet["delete"](object_) && object_.isValid) {
                    object_.decRef();
                  }
                  _context2.next = 17;
                  break;
                case 8:
                  if (!(typeof object_ === "function")) {
                    _context2.next = 14;
                    break;
                  }
                  if (!this._callbackSet["delete"](object_)) {
                    _context2.next = 12;
                    break;
                  }
                  _context2.next = 12;
                  return object_();
                case 12:
                  _context2.next = 17;
                  break;
                case 14:
                  if (!this._objectSet["delete"](object_)) {
                    _context2.next = 17;
                    break;
                  }
                  _context2.next = 17;
                  return object_.release();
                case 17:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function release(_x2) {
            return _release2.apply(this, arguments);
          }
          return release;
        }() /** 释放所有对象 */;
        _proto.releaseAll = /*#__PURE__*/
        function () {
          var _releaseAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _iterator, _step, v, _iterator2, _step2, vFunc;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this._assetSet.forEach(function (v) {
                    if (v.isValid) {
                      v.decRef();
                    }
                  });
                  this._nodeSet.forEach(function (v) {
                    if (v.isValid) {
                      v.removeFromParent();
                      v.destroy();
                    }
                  });
                  _iterator = _createForOfIteratorHelperLoose(this._objectSet);
                case 3:
                  if ((_step = _iterator()).done) {
                    _context3.next = 9;
                    break;
                  }
                  v = _step.value;
                  _context3.next = 7;
                  return v.release();
                case 7:
                  _context3.next = 3;
                  break;
                case 9:
                  _iterator2 = _createForOfIteratorHelperLoose(this._callbackSet);
                case 10:
                  if ((_step2 = _iterator2()).done) {
                    _context3.next = 16;
                    break;
                  }
                  vFunc = _step2.value;
                  _context3.next = 14;
                  return vFunc();
                case 14:
                  _context3.next = 10;
                  break;
                case 16:
                  this._assetSet.clear();
                  this._nodeSet.clear();
                  this._objectSet.clear();
                  this._callbackSet.clear();
                case 20:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function releaseAll() {
            return _releaseAll.apply(this, arguments);
          }
          return releaseAll;
        }();
        return MKRelease;
      }());
      var MKRelease_;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKSceneDrive.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKLifeCycle.ts', './MKBundle.ts', './GlobalEvent.ts', './MKStatusTask.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, director, Director, Node, MKLifeCycle, mkBundle, globalEvent, MKStatusTask;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Director = module.Director;
      Node = module.Node;
    }, function (module) {
      MKLifeCycle = module.MKLifeCycle;
    }, function (module) {
      mkBundle = module.default;
    }, function (module) {
      globalEvent = module.default;
    }, function (module) {
      MKStatusTask = module.default;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "d1c56IIYj9MUrcl2xpuE1xB", "MKSceneDrive", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 场景驱动
       * @noInheritDoc
       * @remarks
       * 场景加载完成后自动执行生命周期函数，驱动模块系统
       */
      var MKSceneDrive = exports('default', ccclass(_class = /*#__PURE__*/function (_MKLifeCycle) {
        _inheritsLoose(MKSceneDrive, _MKLifeCycle);
        function MKSceneDrive() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MKLifeCycle.call.apply(_MKLifeCycle, [this].concat(args)) || this;
          /* --------------- private --------------- */
          _this._closeTask = new MKStatusTask(false);
          return _this;
        }
        var _proto = MKSceneDrive.prototype;
        /* ------------------------------- 生命周期 ------------------------------- */
        _proto.onLoad = /*#__PURE__*/
        function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // 递归 open
                  this._open({
                    isFirst: true
                  });

                  // 事件监听

                  // 全局事件
                  globalEvent.on(globalEvent.key.restart, this._onRestart, this);
                  globalEvent.on(globalEvent.key.waitCloseScene, this._onWaitCloseScene, this);
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onLoad() {
            return _onLoad.apply(this, arguments);
          }
          return onLoad;
        }();
        _proto.onDestroy = function onDestroy() {
          globalEvent.targetOff(this);
          mkBundle.event.targetOff(this);
        }
        /* ------------------------------- segmentation ------------------------------- */;
        _proto.onBeforeSceneSwitch = /*#__PURE__*/
        function () {
          var _onBeforeSceneSwitch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!director.isPersistRootNode(this.node)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  _context2.next = 4;
                  return this._close({
                    isFirst: true,
                    isForce: true
                  });
                case 4:
                  this._closeTask.finish(true);
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onBeforeSceneSwitch() {
            return _onBeforeSceneSwitch.apply(this, arguments);
          }
          return onBeforeSceneSwitch;
        }() /* ------------------------------- 全局事件 ------------------------------- */;
        _proto._onRestart = /*#__PURE__*/
        function () {
          var _onRestart2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this._close({
                    isFirst: true,
                    isDestroyChildren: true
                  });
                case 2:
                  this._closeTask.finish(true);
                case 3:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function _onRestart() {
            return _onRestart2.apply(this, arguments);
          }
          return _onRestart;
        }();
        _proto._onWaitCloseScene = /*#__PURE__*/function () {
          var _onWaitCloseScene2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (!director.isPersistRootNode(this.node)) {
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return");
                case 2:
                  _context4.next = 4;
                  return this._closeTask.task;
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function _onWaitCloseScene() {
            return _onWaitCloseScene2.apply(this, arguments);
          }
          return _onWaitCloseScene;
        }();
        return MKSceneDrive;
      }(MKLifeCycle)) || _class); // 自动添加至场景节点
      {
        director.on(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
          var scene = director.getScene();
          var updateChildCompFunc = function updateChildCompFunc() {
            scene.children.forEach(function (v) {
              if (!v.getComponent(MKSceneDrive)) {
                v.addComponent(MKSceneDrive);
              }
            });
          };
          updateChildCompFunc();
          scene.on(Node.EventType.CHILD_ADDED, function () {
            updateChildCompFunc();
          });
        }, MKSceneDrive);
        mkBundle.event.on(mkBundle.event.key.beforeSceneSwitch, function () {
          var scene = director.getScene();
          scene.children.forEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(v) {
            var _v$getComponent;
            var sceneDrive;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  sceneDrive = (_v$getComponent = v.getComponent(MKSceneDrive)) != null ? _v$getComponent : v.addComponent(MKSceneDrive);
                  sceneDrive.onBeforeSceneSwitch();
                case 2:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          })));
        }, undefined);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKStaticViewBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKLifeCycle.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, MKLifeCycle;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      MKLifeCycle = module.MKLifeCycle;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "6d5dbBVNplGbqpO/ARRs/7F", "MKStaticViewBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 静态视图基类
       * @remarks
       * 继承于 MKLifeCycle，屏蔽了多余 inspector 展示
       */
      var MKStaticViewBase = function (v) {
        return exports({
          MKStaticViewBase: v,
          default: v
        }), v;
      }(ccclass(_class = /*#__PURE__*/function (_MKLifeCycle) {
        _inheritsLoose(MKStaticViewBase, _MKLifeCycle);
        function MKStaticViewBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MKLifeCycle.call.apply(_MKLifeCycle, [this].concat(args)) || this;
          _this._isUseLayer = false;
          return _this;
        }
        return MKStaticViewBase;
      }(MKLifeCycle)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKStatusTask.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('MKStatusTask_', void 0);
      cclegacy._RF.push({}, "25c2fXbvc5KSqHasYedP1gi", "MKStatusTask", undefined);
      /**
       * 状态任务（类型安全）
       * @remarks
       * 封装 promise，防止重复调用 resolve 函数报错以及添加超时功能，可重复使用
       */
      // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
      var MKStatusTask = exports('default', /*#__PURE__*/function () {
        /**
         * @param isFinish_ 完成状态
         * @param initConfig_ 初始化配置
         */
        function MKStatusTask(isFinish_, initConfig_) {
          /* --------------- public --------------- */
          /** 异步任务 */
          this.task = void 0;
          /* --------------- private --------------- */
          /** 完成状态 */
          this._isFinish = false;
          /** 完成回调 */
          this._finishFunc = null;
          /** 初始化配置 */
          this._initConfig = void 0;
          /** 超时倒计时 */
          this._timeoutTimer = void 0;
          this._isFinish = isFinish_;
          this._initConfig = initConfig_;
          if (this._isFinish) {
            this.task = new Promise(function (resolveFunc) {
              resolveFunc();
            });
          } else {
            this._reset();
          }
        }
        var _proto = MKStatusTask.prototype;
        _proto.finish = function finish(isFinish_, data_) {
          if (this._isFinish === isFinish_) {
            return;
          }
          if (isFinish_) {
            var _this$_finishFunc;
            (_this$_finishFunc = this._finishFunc) == null || _this$_finishFunc.call(this, data_);
          } else {
            this._reset();
          }
        }

        /** 重置 */;
        _proto._reset = function _reset() {
          var _this = this,
            _this$_initConfig;
          this._isFinish = false;
          this.task = new Promise(function (resolveFunc) {
            _this._finishFunc = function (data) {
              resolveFunc(data);
              _this._isFinish = true;
              _this._finishFunc = null;

              // 清理定时器
              if (_this._timeoutTimer) {
                clearTimeout(_this._timeoutTimer);
                _this._timeoutTimer = null;
              }
            };
          });

          // 超时定时器
          if (((_this$_initConfig = this._initConfig) == null ? void 0 : _this$_initConfig.timeoutMsNum) !== undefined && this._initConfig.timeoutMsNum > 0) {
            this._timeoutTimer = setTimeout(function () {
              _this._timeoutTimer = null;
              _this.finish(true, _this._initConfig.timeoutReturn);
            }, this._initConfig.timeoutMsNum);
          }
        };
        _createClass(MKStatusTask, [{
          key: "isFinish",
          get:
          /**
           * 完成状态
           * @remarks
           *
           * - true：任务结束
           *
           * - false：任务进行中
           */
          function get() {
            return this._isFinish;
          }
        }]);
        return MKStatusTask;
      }());
      var MKStatusTask_;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKStorage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKTaskPipeline.ts'], function (exports) {
  var _createClass, cclegacy, sys, MKTaskPipeline;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      MKTaskPipeline = module.default;
    }],
    execute: function () {
      exports('MKStorage_', void 0);
      cclegacy._RF.push({}, "9a9faVLu2pHuKuNKz1IayAM", "MKStorage", undefined);

      /**
       * 存储器（类型安全）
       * @noInheritDoc
       * @remarks
       * 注意：在未设置 nameStr(存储器名) 之前，存储数据将不会被存储在硬盘，而是在内存中
       */
      var MKStorage = exports('default', /*#__PURE__*/function () {
        function MKStorage(init_) {
          /* --------------- public --------------- */
          /** 存储数据键 */
          this.key = new Proxy(Object.create(null), {
            get: function get(target, key) {
              return key;
            }
          });
          /* --------------- private --------------- */
          /** 初始化配置 */
          this._initConfig = void 0;
          /** 缓存数据 */
          this._cache = Object.create(null);
          /** 写入任务 */
          this._writePipeline = new MKTaskPipeline();
          this._initConfig = init_;
          if (typeof init_.writeIntervalMsNum === "number") {
            this._writePipeline.intervalMsNum = init_.writeIntervalMsNum;
          }
        }
        /* ------------------------------- 功能 ------------------------------- */
        /** 清空所有存储器数据 */
        MKStorage.clear = function clear() {
          sys.localStorage.clear();
        }

        /**
         * 设置存储数据
         * @param key_ 存储键
         * @param data_ 存储数据
         * @returns 成功状态
         */;
        var _proto = MKStorage.prototype;
        _proto.set = function set(key_, data_) {
          var keyStr = String(key_);
          try {
            /** 存储数据 */
            var storageDataStr = JSON.stringify(data_);

            // 与本地数据一致
            if (this._cache[keyStr] === storageDataStr) {
              return true;
            }

            // 录入缓存
            this._cache[keyStr] = storageDataStr;
            // 写入本地
            this._write(keyStr, storageDataStr);
          } catch (error) {
            return false;
          }
          return true;
        }

        /**
         * 获取数据
         * @param key_ 存储键
         * @returns
         */;
        _proto.get = function get(key_) {
          var keyStr = String(key_);

          // 读取缓存数据
          if (this._cache[keyStr] !== undefined) {
            return JSON.parse(this._cache[keyStr]);
          }

          /** 存储数据 */
          var storageStr = !this._initConfig.nameStr ? null : sys.localStorage.getItem(this._initConfig.nameStr + "-" + String(keyStr));

          // 不存在则创建新数据
          if (storageStr === null) {
            if (this._initConfig.data[key_] === undefined) {
              return null;
            }
            this.set(key_, this._initConfig.data[key_]);
            return JSON.parse(this._cache[keyStr]);
          }

          // 解码
          if (this._initConfig.codec) {
            storageStr = this._initConfig.codec.decode(storageStr);
          }
          return JSON.parse(storageStr);
        }

        /**
         * 删除数据
         * @param key_ 存储键
         */;
        _proto.del = function del(key_) {
          var keyStr = String(key_);
          this._cache[keyStr] = undefined;
          if (!this._initConfig.nameStr) {
            return;
          }

          // 更新 key
          keyStr = this._initConfig.nameStr + "-" + String(keyStr);
          // 删除数据
          this._writePipeline.add(function () {
            sys.localStorage.removeItem(keyStr);
          });
        }

        /** 清空当前存储器数据 */;
        _proto.clear = function clear() {
          var _this = this;
          for (var kStr in this._cache) {
            this._cache[kStr] = undefined;
          }
          if (!this._initConfig.nameStr) {
            return;
          }
          Object.keys(this._initConfig.data).forEach(function (vStr) {
            var keyStr = _this._initConfig.nameStr + "-" + String(vStr);
            _this._writePipeline.add(function () {
              sys.localStorage.removeItem(keyStr);
            });
          });
        }

        /**
         * 写入数据到磁盘
         * @param keyStr_ 数据键
         * @param dataStr_ 写入数据
         * @returns
         */;
        _proto._write = function _write(keyStr_, dataStr_) {
          // 无存储器名不存储到本地
          if (!this._initConfig.nameStr) {
            return;
          }

          // 编码
          if (this._initConfig.codec) {
            dataStr_ = this._initConfig.codec.encode(dataStr_);
          }

          /** 存储 key */
          var keyStr = this._initConfig.nameStr + "-" + String(keyStr_);

          // 写入数据
          this._writePipeline.add(function () {
            sys.localStorage.setItem(keyStr, dataStr_);
          });
        }
        /* ------------------------------- get/set ------------------------------- */;
        _proto._setNameStr = function _setNameStr(valueStr_) {
          var _this2 = this;
          // 迁移缓存到本地
          if (!this._initConfig.nameStr) {
            this._initConfig.nameStr = valueStr_;
            for (var kStr in this._cache) {
              // 已被删除
              if (this._cache[kStr] === undefined) {
                this.del(kStr);
              }
              // 写入
              else {
                this._write(kStr, this._cache[kStr]);
              }
            }
            return;
          }
          // 迁移本地到本地
          else {
            Object.keys(this._initConfig.data).forEach(function (vStr) {
              var dataStr = sys.localStorage.getItem(_this2._initConfig.nameStr + "-" + String(vStr));
              if (dataStr === null) {
                return;
              }
              var newKeyStr = valueStr_ + "-" + String(vStr);
              var oldKeyStr = _this2._initConfig.nameStr + "-" + String(vStr);
              _this2._writePipeline.add(function () {
                sys.localStorage.setItem(newKeyStr, dataStr);
                sys.localStorage.removeItem(oldKeyStr);
              });
            });
            this._initConfig.nameStr = valueStr_;
          }
        };
        _createClass(MKStorage, [{
          key: "nameStr",
          get: /** 存储器名 */
          function get() {
            var _this$_initConfig$nam;
            return (_this$_initConfig$nam = this._initConfig.nameStr) != null ? _this$_initConfig$nam : "";
          },
          set: function set(valueStr_) {
            this._setNameStr(valueStr_);
          }

          /** 写入间隔（毫秒） */
        }, {
          key: "writeIntervalMsNum",
          get: function get() {
            return this._writePipeline.intervalMsNum;
          },
          set: function set(valueNum_) {
            this._writePipeline.intervalMsNum = valueNum_;
          }
        }]);
        return MKStorage;
      }());
      var MKStorage_;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKTask.ts", ['cc', './MKTaskExport.ts'], function (exports) {
  var cclegacy, MKTaskExport;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MKTaskExport = module;
      exports('default', module);
    }],
    execute: function () {
      cclegacy._RF.push({}, "54be0dFj3NJfp81tQ9o4Mex", "MKTask", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKTaskExport.ts", ['cc', './MKStatusTask.ts', './MKTaskPipeline.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('Status', module.default);
    }, function (module) {
      exports('Pipeline', module.default);
    }],
    execute: function () {
      cclegacy._RF.push({}, "c852f5bNypJ4LB/qS1zhRSH", "MKTaskExport", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKTaskPipeline.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKEventTarget.ts', './MKLogger.ts', './MKStatusTask.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, MKEventTarget, mkLog, MKStatusTask;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MKEventTarget = module.default;
    }, function (module) {
      mkLog = module.mkLog;
    }, function (module) {
      MKStatusTask = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "76bd4p4N5pNZZs34aWGpvj9", "MKTaskPipeline", undefined);
      /**
       * 任务管线
       * @remarks
       * 顺序执行任务
       */
      var MKTaskPipeline = exports('default', /*#__PURE__*/function () {
        function MKTaskPipeline() {
          /* --------------- public --------------- */
          /** 事件 */
          this.event = new MKEventTarget();
          /** 执行间隔（毫秒） */
          this.intervalMsNum = 0;
          /* --------------- private --------------- */
          /** 执行状态 */
          this._isRun = false;
          /** 暂停状态 */
          this._isPause = false;
          /** 任务列表 */
          this._taskList = [];
        }
        var _proto = MKTaskPipeline.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /**
         * 添加任务
         * @param taskFunc_ 任务函数
         * @returns 当前任务 Promise
         */
        _proto.add = /*#__PURE__*/
        function () {
          var _add = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(taskFunc_) {
            var task;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  /** 任务 */
                  task = new MKStatusTask(false); // 添加到任务列表
                  this._taskList.push({
                    taskFunc: taskFunc_,
                    task: task
                  });

                  // 执行任务
                  if (!this.isPause && !this._isRun) {
                    this._run();
                  }
                  return _context.abrupt("return", task.task);
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function add(_x) {
            return _add.apply(this, arguments);
          }
          return add;
        }()
        /**
         * 清空任务
         * @param isFinish_ 完成所清空的任务
         */;

        _proto.clear = function clear(isFinish_) {
          var taskList = this._taskList.splice(0, this._taskList.length);
          if (isFinish_) {
            taskList.forEach(function (v) {
              v.task.finish(true);
            });
          }
        }

        /** 执行任务 */;
        _proto._run = /*#__PURE__*/
        function () {
          var _run2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this = this;
            var _loop;
            return _regeneratorRuntime().wrap(function _callee2$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this._isRun = true;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var task, taskResult, currentTimeMsNum, finishTimeMsNum;
                    return _regeneratorRuntime().wrap(function _loop$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          /** 当前任务 */
                          task = _this._taskList.shift();
                          /** 任务返回 */
                          /** 当前时间 */
                          currentTimeMsNum = Date.now();
                          /** 完成时间 */
                          finishTimeMsNum = currentTimeMsNum; // 完成任务
                          _context2.prev = 3;
                          taskResult = task.taskFunc();

                          // Promise 类型等待返回，防止异步任务
                          if (!(taskResult instanceof Promise)) {
                            _context2.next = 9;
                            break;
                          }
                          _context2.next = 8;
                          return taskResult;
                        case 8:
                          taskResult = _context2.sent;
                        case 9:
                          finishTimeMsNum = Date.now();
                          _context2.next = 16;
                          break;
                        case 12:
                          _context2.prev = 12;
                          _context2.t0 = _context2["catch"](3);
                          finishTimeMsNum = currentTimeMsNum;
                          mkLog.error("任务执行失败，跳过", _context2.t0, task.taskFunc);
                        case 16:
                          task.task.finish(true, taskResult);

                          // 等待指定时间
                          if (!(_this.intervalMsNum && finishTimeMsNum - currentTimeMsNum < _this.intervalMsNum)) {
                            _context2.next = 20;
                            break;
                          }
                          _context2.next = 20;
                          return new Promise(function (resolveFunc) {
                            return setTimeout(resolveFunc, _this.intervalMsNum - (finishTimeMsNum - currentTimeMsNum));
                          });
                        case 20:
                          if (!_this._isPause) {
                            _context2.next = 22;
                            break;
                          }
                          return _context2.abrupt("return", 1);
                        case 22:
                        case "end":
                          return _context2.stop();
                      }
                    }, _loop, null, [[3, 12]]);
                  });
                case 2:
                  if (!this._taskList.length) {
                    _context3.next = 8;
                    break;
                  }
                  return _context3.delegateYield(_loop(), "t0", 4);
                case 4:
                  if (!_context3.t0) {
                    _context3.next = 6;
                    break;
                  }
                  return _context3.abrupt("break", 8);
                case 6:
                  _context3.next = 2;
                  break;
                case 8:
                  this._isRun = false;
                  this.event.emit(this.event.key.completed);
                case 10:
                case "end":
                  return _context3.stop();
              }
            }, _callee2, this);
          }));
          function _run() {
            return _run2.apply(this, arguments);
          }
          return _run;
        }();
        _createClass(MKTaskPipeline, [{
          key: "isPause",
          get: /** 暂停状态 */
          function get() {
            return this._isPause;
          },
          set: function set(value_) {
            this._isPause = value_;

            // 执行任务
            if (!value_ && !this._isRun) {
              this._run();
            }
          }
        }]);
        return MKTaskPipeline;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKToolEnum.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKInstanceBase.ts'], function (exports) {
  var _inheritsLoose, cclegacy, MKInstanceBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MKInstanceBase = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c63e0AFs79L0KWjGFzhcYoj", "MKToolEnum", undefined);

      /** 枚举扩展 */
      var MKToolEnum = /*#__PURE__*/function (_MKInstanceBase) {
        _inheritsLoose(MKToolEnum, _MKInstanceBase);
        function MKToolEnum() {
          return _MKInstanceBase.apply(this, arguments) || this;
        }
        var _proto = MKToolEnum.prototype;
        /** 转换对象为枚举 */
        _proto.objToEnum = function objToEnum(value_) {
          var result = {};
          if (!value_) {
            return result;
          }
          if (typeof value_ === "object") {
            Object.keys(value_).forEach(function (vStr, kNum) {
              if (!isNaN(Number(vStr))) {
                vStr = "\u200B" + vStr;
              }
              result[kNum] = vStr;
              result[vStr] = kNum;
            });
          }
          return result;
        };
        return MKToolEnum;
      }(MKInstanceBase);
      var mkToolEnum = exports('default', new MKToolEnum());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKToolFunc.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKLogger.ts', './MKInstanceBase.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, js, mkLog, MKInstanceBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }, function (module) {
      mkLog = module.mkLog;
    }, function (module) {
      MKInstanceBase = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3b516iFBRFJyJI/al+5+wKX", "MKToolFunc", undefined);

      /** 函数扩展 */
      var MKToolFunc = /*#__PURE__*/function (_MKInstanceBase) {
        _inheritsLoose(MKToolFunc, _MKInstanceBase);
        function MKToolFunc() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MKInstanceBase.call.apply(_MKInstanceBase, [this].concat(args)) || this;
          _this._runParentFuncMarkMap = new Map();
          _this._timeoutWarningMarkMap = new Map();
          return _this;
        }
        var _proto = MKToolFunc.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /** 自动执行父类函数 */
        _proto.runParentFunc = function runParentFunc(target_, key_) {
          var _this2 = this;
          var keyList = [];

          // 参数分类
          {
            if (Array.isArray(key_)) {
              var _keyList;
              (_keyList = keyList).push.apply(_keyList, key_);
            } else {
              keyList.push(key_);
            }
            keyList = keyList.filter(function (v) {
              return target_[v] && typeof target_[v] === "function";
            });
          }

          /** 修改标记 */
          var markTab = this._runParentFuncMarkMap.get(target_);
          if (!markTab) {
            this._runParentFuncMarkMap.set(target_, markTab = Object.create(null));
          }
          keyList.forEach(function (v) {
            // 跳过已修改函数
            if (markTab[v]) {
              return;
            }

            /** 当前类及父类函数 */
            var funcList = _this2._getParentFunc(target_.constructor, v);

            // 标记重载
            markTab[v] = true;

            // 重载当前函数
            target_[v] = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var result,
                _len2,
                argsList,
                _key2,
                k2Num,
                _funcList$k2Num,
                _funcList,
                _args = arguments;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    for (_len2 = _args.length, argsList = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      argsList[_key2] = _args[_key2];
                    }
                    k2Num = 0;
                  case 3:
                    if (!(k2Num < funcList.length - 1)) {
                      _context.next = 11;
                      break;
                    }
                    result = (_funcList$k2Num = funcList[k2Num]).call.apply(_funcList$k2Num, [target_].concat(argsList));
                    if (!(result instanceof Promise)) {
                      _context.next = 8;
                      break;
                    }
                    _context.next = 8;
                    return result;
                  case 8:
                    k2Num++;
                    _context.next = 3;
                    break;
                  case 11:
                    if (!funcList.length) {
                      _context.next = 17;
                      break;
                    }
                    result = (_funcList = funcList[funcList.length - 1]).call.apply(_funcList, [target_].concat(argsList));
                    if (!(result instanceof Promise)) {
                      _context.next = 17;
                      break;
                    }
                    _context.next = 16;
                    return result;
                  case 16:
                    result = _context.sent;
                  case 17:
                    _context.next = 24;
                    break;
                  case 19:
                    _context.prev = 19;
                    _context.t0 = _context["catch"](0);
                    if (!(_context.t0 === "中断")) {
                      _context.next = 23;
                      break;
                    }
                    return _context.abrupt("return");
                  case 23:
                    mkLog.error(_context.t0);
                  case 24:
                    return _context.abrupt("return", result);
                  case 25:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 19]]);
            }));
          });
        }

        /**
         * 超时警告
         * @param timeMsN_ 最大执行时间
         */;
        _proto.timeoutWarning = function timeoutWarning(timeMsN_, target_, key_) {
          if (!timeMsN_) {
            return;
          }
          var keyList = [];

          // 参数分类
          {
            if (Array.isArray(key_)) {
              var _keyList2;
              (_keyList2 = keyList).push.apply(_keyList2, key_);
            } else {
              keyList.push(key_);
            }
            keyList = keyList.filter(function (v) {
              return target_[v] && typeof target_[v] === "function";
            });
          }

          /** 修改标记 */
          var markTab = this._timeoutWarningMarkMap.get(target_);
          if (!markTab) {
            this._timeoutWarningMarkMap.set(target_, markTab = Object.create(null));
          }
          keyList.forEach(function (keyStr_) {
            // 不存在或者已修改则退出
            if (!target_[keyStr_] || markTab[keyStr_]) {
              return;
            }
            markTab[keyStr_] = true;
            var oldFunc = target_[keyStr_];
            target_[keyStr_] = function () {
              /** 定时器 */
              var timer = setTimeout(function () {
                mkLog.error(js.getClassName(target_) + ":" + keyStr_ + " \u6267\u884C\u8D85\u65F6", target_);
              }, timeMsN_);
              for (var _len3 = arguments.length, argsList = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                argsList[_key3] = arguments[_key3];
              }
              var result = oldFunc.call.apply(oldFunc, [target_].concat(argsList));

              // 取消定时器
              if (result instanceof Promise) {
                result.then(function () {
                  clearTimeout(timer);
                });
              } else {
                clearTimeout(timer);
              }
              return result;
            };
          });
        }

        /** 获取当前类及父类函数 */;
        _proto._getParentFunc = function _getParentFunc(target_, key_, oldTarget_, funcList_) {
          if (funcList_ === void 0) {
            funcList_ = [];
          }
          if (!target_ || target_ === Object) {
            return funcList_;
          }
          this._getParentFunc(js.getSuper(target_), key_, target_, funcList_);
          if (target_.prototype[key_] && (oldTarget_ ? target_.prototype[key_] !== oldTarget_.prototype[key_] : true)) {
            funcList_.push(target_.prototype[key_]);
          }
          return funcList_;
        };
        return MKToolFunc;
      }(MKInstanceBase);
      var mkToolFunc = exports('default', MKToolFunc.instance());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKToolObject.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKInstanceBase.ts', './MKLogger.ts'], function (exports) {
  var _inheritsLoose, cclegacy, MKInstanceBase, mkLog;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MKInstanceBase = module.default;
    }, function (module) {
      mkLog = module.mkLog;
    }],
    execute: function () {
      cclegacy._RF.push({}, "90c07XkOKZGW4DA1atXAiuM", "MKToolObject", undefined);
      var MKToolObject = /*#__PURE__*/function (_MKInstanceBase) {
        _inheritsLoose(MKToolObject, _MKInstanceBase);
        function MKToolObject() {
          return _MKInstanceBase.apply(this, arguments) || this;
        }
        var _proto = MKToolObject.prototype;
        /**
         * 重置数据
         * @param data_ class 类型数据
         * @param isAssign_ 使用新对象覆盖属性
         * @returns
         * @remarks
         * 注意构造内的 this 对象不是 data_
         */
        _proto.reset = function reset(data_, isAssign_) {
          if (!(data_ != null && data_.constructor)) {
            mkLog.error("数据类型错误");
            return null;
          }
          if (isAssign_) {
            Object.assign(data_, new data_.constructor());
            return null;
          } else {
            return new data_.constructor();
          }
        }

        /**
         * 遍历对象
         * @param target_ 对象
         * @param callbackFunc_ 回调函数
         * @returns
         */;
        _proto.traverse = function traverse(target_, callbackFunc_) {
          return this._traverse(target_, callbackFunc_);
        }

        /** 遍历对象 */;
        _proto._traverse = function _traverse(target_, callbackFunc_, pathStr_, recordSet) {
          var _this = this;
          if (pathStr_ === void 0) {
            pathStr_ = "";
          }
          if (recordSet === void 0) {
            recordSet = new Set();
          }
          switch (typeof target_) {
            case "object":
              {
                // 数组：遍历
                if (Array.isArray(target_)) {
                  if (recordSet.has(target_)) {
                    return;
                  }
                  recordSet.add(target_);
                  target_.forEach(function (v, kNum) {
                    // 递归数组中的每一项
                    callbackFunc_(target_[kNum], kNum + "", pathStr_);
                    _this._traverse(target_[kNum], callbackFunc_, pathStr_ ? pathStr_ + "/" + kNum : kNum + "", recordSet);
                  });
                }
                // 普通对象：循环递归赋值对象的所有值
                else {
                  if (recordSet.has(target_)) {
                    return;
                  }
                  recordSet.add(target_);
                  for (var kStr in target_) {
                    callbackFunc_(target_[kStr], kStr, pathStr_);
                    this._traverse(target_[kStr], callbackFunc_, pathStr_ ? pathStr_ + "/" + kStr : kStr, recordSet);
                  }
                }
                break;
              }
          }
        };
        return MKToolObject;
      }(MKInstanceBase);
      var mkToolObject = exports('default', MKToolObject.instance());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKToolString.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKInstanceBase.ts'], function (exports) {
  var _inheritsLoose, cclegacy, MKInstanceBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MKInstanceBase = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fe45aUKVhhKG6FWP4xGW8zl", "MKToolString", undefined);
      var MKToolString = /*#__PURE__*/function (_MKInstanceBase) {
        _inheritsLoose(MKToolString, _MKInstanceBase);
        function MKToolString() {
          return _MKInstanceBase.apply(this, arguments) || this;
        }
        var _proto = MKToolString.prototype;
        /**
         * 字符串相似度
         * @param vStr_ 字符集
         * @param v2Str_ 对比字符
         * @returns 0-1
         * @remarks
         * 编辑距离算法
         */
        _proto.similarityEditDist = function similarityEditDist(vStr_, v2Str_) {
          {
            return 0;
          }
        }

        /**
         * 模糊匹配
         * @param args_ 字符集
         * @param keyStr_ 对比字符
         * @param minSimileNum_ 最小相似度
         * @returns
         * @remarks
         * 多个源字符串时返回相似度最高的字符串
         */;
        _proto.fuzzyMatch = function fuzzyMatch(args_, keyStr_, minSimileNum_) {
          {
            return null;
          }
        };
        return MKToolString;
      }(MKInstanceBase);
      var mkToolString = exports('default', MKToolString.instance());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKUIManage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalEvent.ts', './MKInstanceBase.ts', './MKLogger.ts', './MKViewBase.ts', './MKObjectPool.ts', './MKAsset.ts', './MKStatusTask.ts', './MKRelease.ts', './MKEventTarget.ts', './MKToolObject.ts'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _extends, _createForOfIteratorHelperLoose, cclegacy, director, Canvas, Node, js, isValid, Prefab, Scene, instantiate, globalEvent, MKInstanceBase, MKLogger, MKViewBase, MKObjectPool, mkAsset, MKStatusTask, MKRelease, MKEventTarget, mkToolObject;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Canvas = module.Canvas;
      Node = module.Node;
      js = module.js;
      isValid = module.isValid;
      Prefab = module.Prefab;
      Scene = module.Scene;
      instantiate = module.instantiate;
    }, function (module) {
      globalEvent = module.default;
    }, function (module) {
      MKInstanceBase = module.default;
    }, function (module) {
      MKLogger = module.default;
    }, function (module) {
      MKViewBase = module.MKViewBase;
    }, function (module) {
      MKObjectPool = module.default;
    }, function (module) {
      mkAsset = module.default;
    }, function (module) {
      MKStatusTask = module.default;
    }, function (module) {
      MKRelease = module.default;
    }, function (module) {
      MKEventTarget = module.default;
    }, function (module) {
      mkToolObject = module.default;
    }],
    execute: function () {
      exports('MKUIManage_', void 0);
      cclegacy._RF.push({}, "ecaebq4mFZJSoDPvu+kIV7w", "MKUIManage", undefined);
      /**
       * 模块管理器
       * @noInheritDoc
       * @remarks
       *
       * - 支持模块(注册/打开/获取/关闭/取消注册)
       *
       * - 内置模块对象池
       *
       * - 模块栈
       *
       * - 全屏 UI 展示优化
       */
      var MKUIManage = exports('MKUIManage', /*#__PURE__*/function (_MKInstanceBase) {
        _inheritsLoose(MKUIManage, _MKInstanceBase);
        function MKUIManage() {
          var _this;
          _this = _MKInstanceBase.call(this) || this;

          // 事件监听
          /* --------------- public --------------- */
          /** 事件 */
          _this.event = new MKEventTarget();
          /**
           * 获取模块注册数据
           * @remarks
           * open 未注册模块时会使用此函数获取注册数据自动注册
           */
          _this.getRegisDataFunc = void 0;
          /* --------------- private --------------- */
          /** 日志 */
          _this._log = new MKLogger("MKUIManage");
          /** 模块注册表 */
          _this._uiRegisMap = new Map();
          /**
           * 模块注册任务表
           * @remarks
           * 用于 open 时等待注册
           */
          _this._uiRegisTaskMap = new Map();
          /**
           * 模块加载表
           * @remarks
           * 用于检测重复加载
           */
          _this._uiLoadMap = new Map();
          /** 模块对象池 */
          _this._uiPoolMap = new Map();
          /** 隐藏模块列表长度 */
          _this._uiHiddenLengthN = 0;
          /** 模块隐藏集合 */
          _this._uiHiddenSet = new Set();
          /** 当前展示模块列表 */
          _this._uiShowList = [];
          /** 当前模块表 */
          _this._uiMap = new Map();
          globalEvent.on(globalEvent.key.restart, _this._eventRestart, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MKUIManage.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /**
         * 注册模块
         * @param key_ 模块键
         * @param source_ 模块来源
         * @param target_ 跟随释放对象
         * @param config_ 模块配置
         * @returns
         */
        _proto.regis = /*#__PURE__*/
        function () {
          var _regis = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(key_, source_, target_, config_) {
            var _this2 = this;
            var uiRegisTask, regisData, objectPoolMap, exitCallbackFunc, sourceTab, sourceInvalidCountNum, _loop, _ret, kStr;
            return _regeneratorRuntime().wrap(function _callee5$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  /** 模块注册任务 */
                  uiRegisTask = this._uiRegisTaskMap.get(key_); // 等待模块注册
                  if (!uiRegisTask) {
                    _context6.next = 3;
                    break;
                  }
                  return _context6.abrupt("return", uiRegisTask.task);
                case 3:
                  if (!this._uiRegisMap.has(key_)) {
                    _context6.next = 5;
                    break;
                  }
                  return _context6.abrupt("return");
                case 5:
                  // 跟随对象释放
                  MKRelease.followRelease(target_, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _this2.unregis(key_);
                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  })));

                  /** 注册数据 */
                  regisData = new MKUIManage_.RegisData(_extends({}, config_, {
                    source: source_
                  }));
                  uiRegisTask = new MKStatusTask(false);
                  // 添加注册任务
                  this._uiRegisTaskMap.set(key_, uiRegisTask);
                  // 更新注册配置
                  this._uiRegisMap.set(key_, regisData);

                  /** 节点池 */
                  objectPoolMap = new Map();
                  /** 退出回调 */
                  exitCallbackFunc = /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(isSuccess) {
                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            if (isSuccess) {
                              _context2.next = 3;
                              break;
                            }
                            _context2.next = 3;
                            return _this2.unregis(key_);
                          case 3:
                            // 删除注册任务
                            _this2._uiRegisTaskMap["delete"](key_);
                            // 完成注册任务
                            uiRegisTask.finish(true);
                          case 5:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2);
                    }));
                    return function exitCallbackFunc(_x5) {
                      return _ref2.apply(this, arguments);
                    };
                  }();
                  /** 来源表 */
                  sourceTab = Object.create(null);
                  /** 来源失效计数 */
                  sourceInvalidCountNum = 0; // 初始化来源表
                  // 资源路径/节点
                  if (typeof source_ !== "object" || source_ instanceof Node) {
                    sourceTab["default"] = source_;
                  }
                  // 资源表
                  else {
                    Object.assign(sourceTab, source_);
                  }
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(kStr) {
                    var _source;
                    var source, v, objectPool;
                    return _regeneratorRuntime().wrap(function _loop$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          source = null;
                          v = sourceTab[kStr];
                          if (v) {
                            _context5.next = 4;
                            break;
                          }
                          return _context5.abrupt("return", 0);
                        case 4:
                          if (!(typeof v === "string" && regisData.poolInitFillNum > 0)) {
                            _context5.next = 8;
                            break;
                          }
                          _context5.next = 7;
                          return mkAsset.get(v, Prefab, null, regisData.loadConfig);
                        case 7:
                          source = _context5.sent;
                        case 8:
                          // 预制体/节点
                          if (typeof v !== "string" && v != null && v.isValid) {
                            source = v;
                          }
                          if (!(!((_source = source) != null && _source.isValid) && !(typeof v === "string" && regisData.poolInitFillNum === 0))) {
                            _context5.next = 13;
                            break;
                          }
                          _this2._log.error(kStr + " \u7C7B\u578B\u8D44\u6E90\u5931\u6548", v);
                          sourceInvalidCountNum++;
                          return _context5.abrupt("return", 0);
                        case 13:
                          /** 对象池 */
                          objectPool = new MKObjectPool({
                            createFunc: function () {
                              var _createFunc = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                                var _source2;
                                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                                  while (1) switch (_context3.prev = _context3.next) {
                                    case 0:
                                      if (!(!source && typeof v === "string")) {
                                        _context3.next = 4;
                                        break;
                                      }
                                      _context3.next = 3;
                                      return mkAsset.get(v, Prefab, null, regisData.loadConfig);
                                    case 3:
                                      source = _context3.sent;
                                    case 4:
                                      if ((_source2 = source) != null && _source2.isValid) {
                                        _context3.next = 7;
                                        break;
                                      }
                                      _this2._log.error(kStr + " \u7C7B\u578B\u8D44\u6E90\u5931\u6548", v);
                                      return _context3.abrupt("return", null);
                                    case 7:
                                      return _context3.abrupt("return", instantiate(source));
                                    case 8:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }, _callee3);
                              }));
                              function createFunc() {
                                return _createFunc.apply(this, arguments);
                              }
                              return createFunc;
                            }(),
                            clearFunc: function () {
                              var _clearFunc = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(objectList) {
                                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                                  while (1) switch (_context4.prev = _context4.next) {
                                    case 0:
                                      objectList.forEach(function (v) {
                                        v.destroy();
                                      });
                                    case 1:
                                    case "end":
                                      return _context4.stop();
                                  }
                                }, _callee4);
                              }));
                              function clearFunc(_x6) {
                                return _clearFunc.apply(this, arguments);
                              }
                              return clearFunc;
                            }(),
                            destroyFunc: function destroyFunc() {
                              var _source3;
                              // 动态加载的资源手动销毁
                              if (typeof v === "string" && (_source3 = source) != null && _source3.isValid) {
                                source.decRef();
                              }
                            },
                            maxHoldNum: regisData.poolMaxHoldNum,
                            minHoldNum: regisData.poolMinHoldNum,
                            initFillNum: regisData.poolInitFillNum
                          }); // 初始化对象池
                          _context5.next = 16;
                          return objectPool.initTask.task;
                        case 16:
                          objectPoolMap.set(kStr, objectPool);
                        case 17:
                        case "end":
                          return _context5.stop();
                      }
                    }, _loop);
                  });
                  _context6.t0 = _regeneratorRuntime().keys(sourceTab);
                case 17:
                  if ((_context6.t1 = _context6.t0()).done) {
                    _context6.next = 25;
                    break;
                  }
                  kStr = _context6.t1.value;
                  return _context6.delegateYield(_loop(kStr), "t2", 20);
                case 20:
                  _ret = _context6.t2;
                  if (!(_ret === 0)) {
                    _context6.next = 23;
                    break;
                  }
                  return _context6.abrupt("continue", 17);
                case 23:
                  _context6.next = 17;
                  break;
                case 25:
                  if (!(sourceInvalidCountNum !== 0 && sourceInvalidCountNum === Object.keys(sourceTab).length)) {
                    _context6.next = 29;
                    break;
                  }
                  _context6.next = 28;
                  return exitCallbackFunc(false);
                case 28:
                  return _context6.abrupt("return", _context6.sent);
                case 29:
                  // 设置模块池
                  this._uiPoolMap.set(key_, objectPoolMap);
                  _context6.next = 32;
                  return exitCallbackFunc(true);
                case 32:
                  return _context6.abrupt("return", _context6.sent);
                case 33:
                case "end":
                  return _context6.stop();
              }
            }, _callee5, this);
          }));
          function regis(_x, _x2, _x3, _x4) {
            return _regis.apply(this, arguments);
          }
          return regis;
        }()
        /**
         * 取消注册模块
         * @remarks
         * 注意如果你如果在注册时 target_ 参数不为 null，那么模块资源将跟随 target_ 对象释放，
         * 除非你想提前释放，否则不用手动调用此接口
         * @param key_ 模块键
         * @returns
         */;

        _proto.unregis = /*#__PURE__*/
        function () {
          var _unregis = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(key_) {
            var uiRegisTask, pool, _iterator, _step, _step$value, v;
            return _regeneratorRuntime().wrap(function _callee6$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  /** 模块注册任务 */
                  uiRegisTask = this._uiRegisTaskMap.get(key_); // 等待模块注册
                  if (!uiRegisTask) {
                    _context7.next = 4;
                    break;
                  }
                  _context7.next = 4;
                  return uiRegisTask.task;
                case 4:
                  if (this._uiRegisMap.has(key_)) {
                    _context7.next = 6;
                    break;
                  }
                  return _context7.abrupt("return");
                case 6:
                  _context7.next = 8;
                  return this.close(key_, {
                    isAll: true,
                    isDestroy: true
                  });
                case 8:
                  // 清理当前模块表
                  this._uiMap["delete"](key_);
                  // 清理模块加载表
                  this._uiLoadMap["delete"](key_);
                  // 清理注册表
                  this._uiRegisMap["delete"](key_);
                  // 清理节点池
                  pool = this._uiPoolMap.get(key_);
                  if (!pool) {
                    _context7.next = 21;
                    break;
                  }
                  _iterator = _createForOfIteratorHelperLoose(pool);
                case 14:
                  if ((_step = _iterator()).done) {
                    _context7.next = 20;
                    break;
                  }
                  _step$value = _step.value, _step$value[0], v = _step$value[1];
                  _context7.next = 18;
                  return v.destroy();
                case 18:
                  _context7.next = 14;
                  break;
                case 20:
                  this._uiPoolMap["delete"](key_);
                case 21:
                case "end":
                  return _context7.stop();
              }
            }, _callee6, this);
          }));
          function unregis(_x7) {
            return _unregis.apply(this, arguments);
          }
          return unregis;
        }() /** 获取所有模块 */;
        _proto.get = function get(key_, type_) {
          // 获取所有模块
          if (!key_) {
            return this._uiShowList.filter(function (v) {
              return v.valid;
            });
          }
          // 获取 指定模块 | 指定模块列表
          else {
            var _this$_uiMap$get;
            var uiList = (_this$_uiMap$get = this._uiMap.get(Array.isArray(key_) ? key_[0] : key_)) == null ? void 0 : _this$_uiMap$get.filter(function (v) {
              return v.valid;
            });

            // 筛选类型
            if (type_ && uiList) {
              uiList = uiList.filter(function (v) {
                return v.typeStr === type_;
              });
            }

            // 获取模块列表
            if (Array.isArray(key_)) {
              var _uiList;
              return (_uiList = uiList) != null ? _uiList : [];
            }
            // 获取模块
            else {
              var _uiList2;
              return (_uiList2 = uiList) != null && _uiList2.length ? uiList[uiList.length - 1] : null;
            }
          }
        }

        /**
         * 打开模块
         * @param key_ 模块键，必须经过 {@link regis} 接口注册过
         * @param config_ 打开配置
         * @returns
         */;
        _proto.open = /*#__PURE__*/
        function () {
          var _open = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(key_, config_) {
            var _ref3,
              _this3 = this;
            var uiRegisTask, regisData, parentData, parent, task, exitCallbackFunc, regisTask, viewComp, _node$getComponent, uiPool, nodePool, node, comp, uiList, _parent, openTask, isParentActiveFunc;
            return _regeneratorRuntime().wrap(function _callee7$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (key_) {
                    _context8.next = 3;
                    break;
                  }
                  this._log.error("参数错误");
                  return _context8.abrupt("return", null);
                case 3:
                  /** 模块注册任务 */
                  uiRegisTask = this._uiRegisTaskMap.get(key_); // 等待模块注册
                  if (!uiRegisTask) {
                    _context8.next = 7;
                    break;
                  }
                  _context8.next = 7;
                  return uiRegisTask.task;
                case 7:
                  /** 注册数据 */
                  regisData = this._uiRegisMap.get(key_); // 自动注册
                  if (!(!regisData && this.getRegisDataFunc)) {
                    _context8.next = 15;
                    break;
                  }
                  _context8.next = 11;
                  return this.getRegisDataFunc(key_);
                case 11:
                  regisData = _context8.sent;
                  if (!regisData) {
                    _context8.next = 15;
                    break;
                  }
                  _context8.next = 15;
                  return this.regis(key_, regisData.source, regisData.target, regisData);
                case 15:
                  if (regisData) {
                    _context8.next = 18;
                    break;
                  }
                  this._log.error(js.getClassName(key_), "模块未注册");
                  return _context8.abrupt("return", null);
                case 18:
                  config_ = new MKUIManage_.OpenConfig(config_);

                  /** 父节点 */
                  parentData = config_.parent !== undefined ? config_.parent : regisData.parent;
                  parent = (_ref3 = parentData instanceof Function ? parentData() : parentData) != null ? _ref3 : null;
                  if (parent && !parent.isValid) {
                    parent = null;
                    this._log.warn("父节点无效", key_, parent);
                  }

                  // 检测重复加载
                  task = this._uiLoadMap.get(key_); // 首次加载
                  if (task) {
                    _context8.next = 27;
                    break;
                  }
                  this._uiLoadMap.set(key_, task = new MKStatusTask(false));
                  _context8.next = 31;
                  break;
                case 27:
                  if (!(
                  // 禁止重复加载
                  !regisData.isRepeat && (
                  // 存在打开的模块
                  this.get([key_]).length !== 0 ||
                  // 正在打开中
                  !task.isFinish))) {
                    _context8.next = 30;
                    break;
                  }
                  this._log.debug("模块重复加载");
                  return _context8.abrupt("return", null);
                case 30:
                  task.finish(false);
                case 31:
                  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                  /** 退出回调 */
                  exitCallbackFunc = function exitCallbackFunc(isSuccess) {
                    var _this3$_uiLoadMap$get;
                    // 更新加载状态
                    (_this3$_uiLoadMap$get = _this3._uiLoadMap.get(key_)) == null || _this3$_uiLoadMap$get.finish(true);
                    return isSuccess ? viewComp : null;
                  };
                  /** 注册任务 */
                  regisTask = this._uiRegisTaskMap.get(key_);
                  /** 视图组件 */
                  if (!(regisTask && !regisTask.isFinish)) {
                    _context8.next = 36;
                    break;
                  }
                  _context8.next = 36;
                  return regisTask.task;
                case 36:
                  /** 模块池 */
                  uiPool = this._uiPoolMap.get(key_);
                  /** 节点池 */
                  nodePool = uiPool.get(config_.type);
                  if (nodePool) {
                    _context8.next = 41;
                    break;
                  }
                  this._log.error("模块类型错误");
                  return _context8.abrupt("return", exitCallbackFunc(false));
                case 41:
                  _context8.next = 43;
                  return nodePool.get();
                case 43:
                  node = _context8.sent;
                  if (node) {
                    _context8.next = 47;
                    break;
                  }
                  this._log.warn("对象池资源为空");
                  return _context8.abrupt("return", exitCallbackFunc(false));
                case 47:
                  comp = (_node$getComponent = node.getComponent(key_)) != null ? _node$getComponent : node.addComponent(key_);
                  if (comp) {
                    _context8.next = 52;
                    break;
                  }
                  this._log.error("节点未挂载视图组件");
                  node.destroy();
                  return _context8.abrupt("return", exitCallbackFunc(false));
                case 52:
                  if (this._uiRegisMap.has(key_)) {
                    _context8.next = 56;
                    break;
                  }
                  this._log.warn("已取消注册");
                  node.destroy();
                  return _context8.abrupt("return", exitCallbackFunc(false));
                case 56:
                  node.active = true;
                  viewComp = comp;
                  // 更新单独展示
                  if (viewComp.isShowAlone) {
                    this._uiShowList.slice(this._uiHiddenLengthN, this._uiShowList.length).forEach(function (v) {
                      if (v.valid && v.node.active) {
                        _this3._uiHiddenSet.add(v);
                        v.node.active = false;
                      }
                    });
                    this._uiHiddenLengthN = this._uiShowList.length;
                  }

                  // 更新管理器数据

                  this._uiShowList.push(viewComp);
                  uiList = this._uiMap.get(key_);
                  if (!uiList) {
                    this._uiMap.set(key_, uiList = []);
                  }
                  uiList.push(viewComp);
                  // 模块配置
                  viewComp.config = {
                    isStatic: false,
                    typeStr: config_.type
                  };

                  // 加入父节点
                  if ((_parent = parent) != null && _parent.isValid) {
                    parent.addChild(viewComp.node);
                  }

                  // 生命周期
                  openTask = viewComp._open({
                    init: config_.init,
                    isFirst: true
                  });
                  isParentActiveFunc = function isParentActiveFunc(node) {
                    if (node instanceof Scene) {
                      return true;
                    }
                    if (!(node != null && node.isValid) || !node.active) {
                      return false;
                    }
                    return isParentActiveFunc(node.parent);
                  };
                  if (!isParentActiveFunc(parent)) {
                    _context8.next = 70;
                    break;
                  }
                  _context8.next = 70;
                  return openTask;
                case 70:
                  if (viewComp.valid) {
                    _context8.next = 73;
                    break;
                  }
                  this._log.warn("\u6A21\u5757 " + js.getClassName(viewComp) + " \u5728 open \u5185\u88AB\u5173\u95ED");
                  return _context8.abrupt("return", exitCallbackFunc(false));
                case 73:
                  if (this._uiRegisMap.has(key_)) {
                    _context8.next = 79;
                    break;
                  }
                  this._log.warn("已取消注册");
                  exitCallbackFunc(false);
                  _context8.next = 78;
                  return this.close(viewComp, {
                    isAll: true,
                    isDestroy: true
                  });
                case 78:
                  return _context8.abrupt("return", null);
                case 79:
                  // 事件通知
                  this.event.emit(this.event.key.open, key_, viewComp);
                  return _context8.abrupt("return", exitCallbackFunc(true));
                case 81:
                case "end":
                  return _context8.stop();
              }
            }, _callee7, this);
          }));
          function open(_x8, _x9) {
            return _open.apply(this, arguments);
          }
          return open;
        }()
        /**
         * 关闭模块
         * @param args_ 节点/模块键/模块实例
         * @param config_ 关闭配置
         * @returns
         */;

        _proto.close = /*#__PURE__*/
        function () {
          var _close = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(args_, config_) {
            var _this4 = this;
            var config, key_, node_, view_, closeUIList, uiList, kNum, _node_, _iterator2, _step2, v;
            return _regeneratorRuntime().wrap(function _callee8$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  if (args_) {
                    _context9.next = 3;
                    break;
                  }
                  this._log.error("参数错误");
                  return _context9.abrupt("return", false);
                case 3:
                  config = new MKUIManage_.CloseConfig(config_);
                  if (args_ instanceof Node) {
                    node_ = args_;
                  } else if (args_ instanceof MKViewBase) {
                    view_ = args_;
                  } else {
                    key_ = args_;
                  }
                  if (!node_) {
                    _context9.next = 9;
                    break;
                  }
                  closeUIList = [node_.getComponent(MKViewBase)].filter(function (v) {
                    return v;
                  });
                  _context9.next = 32;
                  break;
                case 9:
                  if (!view_) {
                    _context9.next = 13;
                    break;
                  }
                  closeUIList = [view_];
                  _context9.next = 32;
                  break;
                case 13:
                  uiList = this._uiMap.get(key_);
                  if (uiList != null && uiList.length) {
                    _context9.next = 16;
                    break;
                  }
                  return _context9.abrupt("return", false);
                case 16:
                  closeUIList = uiList.slice(0);
                  if (!config.type) {
                    _context9.next = 31;
                    break;
                  }
                  if (!config.isAll) {
                    _context9.next = 22;
                    break;
                  }
                  closeUIList = closeUIList.filter(function (v) {
                    return v.typeStr === config.type;
                  });
                  _context9.next = 29;
                  break;
                case 22:
                  kNum = closeUIList.length;
                case 23:
                  if (!kNum--) {
                    _context9.next = 29;
                    break;
                  }
                  if (!(closeUIList[kNum].typeStr === config.type)) {
                    _context9.next = 27;
                    break;
                  }
                  closeUIList = [closeUIList[kNum]];
                  return _context9.abrupt("break", 29);
                case 27:
                  _context9.next = 23;
                  break;
                case 29:
                  if (closeUIList.length) {
                    _context9.next = 31;
                    break;
                  }
                  return _context9.abrupt("return", false);
                case 31:
                  // 非关闭所有则关闭最后模块
                  if (closeUIList.length > 1 && !config.isAll) {
                    closeUIList = [closeUIList[closeUIList.length - 1]];
                  }
                case 32:
                  if (closeUIList.length) {
                    _context9.next = 35;
                    break;
                  }
                  // 关闭节点直接销毁
                  if ((_node_ = node_) != null && _node_.isValid && !node_.getComponent(MKViewBase)) {
                    node_.removeFromParent();
                    node_.destroy();
                  }
                  return _context9.abrupt("return", false);
                case 35:
                  // 动态模块(视图/数据)更新
                  closeUIList.forEach(function (v) {
                    if (v.isStatic) {
                      return;
                    }

                    // 更新单独展示
                    {
                      /** 模块列表下标 */
                      var uiIndexNum = _this4._uiShowList.lastIndexOf(v);

                      // 恢复隐藏的模块
                      if (uiIndexNum === _this4._uiHiddenLengthN) {
                        /** 模块隐藏列表 */
                        var uiHiddenList = _this4._uiShowList.slice(0, _this4._uiHiddenLengthN);
                        /** 新的隐藏模块下标 */
                        var newHiddenIndexNum = 0;

                        // 查找新的隐藏模块下标
                        for (var _kNum = uiHiddenList.length; _kNum--;) {
                          if (uiHiddenList[_kNum].isShowAlone) {
                            newHiddenIndexNum = _kNum;
                            break;
                          }
                        }

                        // 重新展示已经隐藏的模块
                        {
                          // 激活模块
                          _this4._uiShowList.slice(newHiddenIndexNum, _this4._uiHiddenLengthN).forEach(function (v) {
                            // 避免原本 active 为 false 的模块被激活
                            if (_this4._uiHiddenSet.has(v)) {
                              v.node.active = true;
                              _this4._uiHiddenSet["delete"](v);
                            }
                          });

                          // 更新隐藏模块列表长度
                          _this4._uiHiddenLengthN = newHiddenIndexNum;
                        }
                      }
                      // 关闭了隐藏的模块，更新隐藏模块下标
                      else if (uiIndexNum !== -1 && uiIndexNum < _this4._uiHiddenLengthN) {
                        v.node.active = true;
                        --_this4._uiHiddenLengthN;
                      }
                    }

                    // 删除模块数据
                    {
                      // 删除模块列表数据
                      {
                        var indexNum = _this4._uiShowList.indexOf(v);
                        if (indexNum !== -1) {
                          // 从模块列表移除
                          _this4._uiShowList.splice(indexNum, 1);
                        }
                      }

                      // 删除模块表数据
                      {
                        var _uiList3 = _this4._uiMap.get(v.constructor);

                        // 未纳入管理的模块
                        if (!_uiList3) {
                          return;
                        }
                        var _indexNum = _uiList3.indexOf(v);
                        if (_indexNum !== -1) {
                          // 从模块列表移除
                          _uiList3.splice(_indexNum, 1);
                        }
                      }
                    }
                  });

                  // 生命周期
                  _iterator2 = _createForOfIteratorHelperLoose(closeUIList);
                case 37:
                  if ((_step2 = _iterator2()).done) {
                    _context9.next = 51;
                    break;
                  }
                  v = _step2.value;
                  if (v.isValid) {
                    _context9.next = 41;
                    break;
                  }
                  return _context9.abrupt("continue", 49);
                case 41:
                  if (director.isPersistRootNode(v.node)) {
                    this._log.warn("关闭常驻节点", v);
                    director.removePersistRootNode(v.node);
                  }
                  _context9.next = 44;
                  return v._close == null ? void 0 : v._close({
                    isFirst: true,
                    isDestroyChildren: config.isDestroyChildren
                  });
                case 44:
                  if (isValid(v.node, true)) {
                    _context9.next = 46;
                    break;
                  }
                  return _context9.abrupt("continue", 49);
                case 46:
                  // 移除父节点
                  v.node.removeFromParent();
                  // 事件通知
                  this.event.emit(this.event.key.close, v.constructor, v);

                  // 销毁
                  if (config.isDestroy || v.isStatic || !this._uiPoolMap.has(v.constructor)) {
                    v.node.destroy();
                  }
                  // 回收模块
                  else {
                    this._uiPoolMap.get(v.constructor).get(v.typeStr).put(v.node);
                  }
                case 49:
                  _context9.next = 37;
                  break;
                case 51:
                  return _context9.abrupt("return", true);
                case 52:
                case "end":
                  return _context9.stop();
              }
            }, _callee8, this);
          }));
          function close(_x10, _x11) {
            return _close.apply(this, arguments);
          }
          return close;
        }() /* ------------------------------- 全局事件 ------------------------------- */;
        _proto._eventRestart = /*#__PURE__*/
        function () {
          var _eventRestart2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            return _regeneratorRuntime().wrap(function _callee9$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return Promise.all(globalEvent.request(globalEvent.key.waitCloseScene));
                case 2:
                  // 释放对象池
                  this._uiPoolMap.forEach(function (v) {
                    v.forEach(function (v2) {
                      v2.destroy();
                    });
                  });

                  // 重置数据
                  mkToolObject.reset(this, true);
                case 4:
                case "end":
                  return _context10.stop();
              }
            }, _callee9, this);
          }));
          function _eventRestart() {
            return _eventRestart2.apply(this, arguments);
          }
          return _eventRestart;
        }();
        return MKUIManage;
      }(MKInstanceBase));
      var MKUIManage_;
      (function (_MKUIManage_) {
        /** 模块打开键类型 */
        /** 关闭ui配置 */
        var CloseConfig = function CloseConfig(init_) {
          /** 类型 */
          this.type = void 0;
          /** 关闭全部指定类型的模块 */
          this.isAll = void 0;
          /** 销毁节点 */
          this.isDestroy = void 0;
          /**
           * 销毁动态子节点
           * @remarks
           * 动态子节点是动态添加到当前模块节点下的其他 MKLifeCycle 组件节点
           * @defaultValue
           * isDestroy
           */
          this.isDestroyChildren = void 0;
          Object.assign(this, init_);
          if (this.isDestroy && this.isDestroyChildren === undefined) {
            this.isDestroyChildren = true;
          }
        };
        _MKUIManage_.CloseConfig = CloseConfig;
        var OpenConfig = function OpenConfig(init_) {
          /** 初始化数据 */
          this.init = void 0;
          /** 类型 */
          this.type = "default";
          /** 父节点 */
          this.parent = void 0;
          Object.assign(this, init_);
        };
        _MKUIManage_.OpenConfig = OpenConfig;
        var RegisConfig = function RegisConfig(init_) {
          /**
           * 可重复打开状态
           * @defaultValue
           * false
           */
          this.isRepeat = false;
          /**
           * 默认父节点
           * @defaultValue
           * Canvas 节点
           */
          this.parent = function () {
            var _director$getScene$ge, _director$getScene;
            return (_director$getScene$ge = (_director$getScene = director.getScene()) == null || (_director$getScene = _director$getScene.getComponentInChildren(Canvas)) == null ? void 0 : _director$getScene.node) != null ? _director$getScene$ge : null;
          };
          /** 加载配置 */
          this.loadConfig = void 0;
          /**
           * 对象池数量不足时扩充数量
           * @defaultValue
           * this.isRepeat ? 8 : 1
           */
          this.poolMinHoldNum = void 0;
          /**
           * 对象池最大保留数量
           * @defaultValue
           * -1: 不启用
           */
          this.poolMaxHoldNum = -1;
          /**
           * 对象池初始化扩充数量
           * @defaultValue
           * 1
           */
          this.poolInitFillNum = 1;
          if (!init_) {
            return;
          }
          Object.assign(this, init_);
          if (this.poolMinHoldNum === undefined) {
            this.poolMinHoldNum = this.isRepeat ? 8 : 1;
          }
        };
        _MKUIManage_.RegisConfig = RegisConfig;
        var RegisData = /*#__PURE__*/function (_RegisConfig) {
          _inheritsLoose(RegisData, _RegisConfig);
          function RegisData(init_) {
            var _this5;
            _this5 = _RegisConfig.call(this, init_) || this;
            /** 来源 */
            _this5.source = void 0;
            /** 跟随释放对象 */
            _this5.target = void 0;
            Object.assign(_assertThisInitialized(_this5), init_);
            return _this5;
          }
          return RegisData;
        }(RegisConfig);
        _MKUIManage_.RegisData = RegisData;
      })(MKUIManage_ || (MKUIManage_ = exports('MKUIManage_', {})));
      var mkUIManage = exports('default', MKUIManage.instance());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKViewBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKLifeCycle.ts', './MKDynamicModule.ts', './MKAsset.ts', './MKGame.ts', './GlobalConfig.ts', './MKBundle.ts', './MKToolEnum.ts'], function (exports, module) {
  var _applyDecoratedDescriptor, _createClass, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Enum, Widget, BlockInputEvents, instantiate, Prefab, MKLifeCycle, _MKLifeCycle, mkDynamicModule, mkAsset, mkGame, GlobalConfig, mkBundle, mkToolEnum;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Widget = module.Widget;
      BlockInputEvents = module.BlockInputEvents;
      instantiate = module.instantiate;
      Prefab = module.Prefab;
    }, function (module) {
      MKLifeCycle = module.MKLifeCycle;
      _MKLifeCycle = module._MKLifeCycle;
    }, function (module) {
      mkDynamicModule = module.default;
    }, function (module) {
      mkAsset = module.default;
    }, function (module) {
      mkGame = module.default;
    }, function (module) {
      GlobalConfig = module.default;
    }, function (module) {
      mkBundle = module.default;
    }, function (module) {
      mkToolEnum = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "22745lx4oVBGI/KLOME5CHi", "MKViewBase", undefined);

      // @weak-start-include-MKUIManage
      var mkUIManage = mkDynamicModule["default"](module.import('./MKUIManage.ts'));
      // @weak-end
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var _MKViewBase;
      (function (_MKViewBase2, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class4, _class5, _descriptor3, _descriptor4, _descriptor5, _class6) {
        /** create 配置 */
        /** 动画配置 */
        var AnimationConfig = (_dec6 = ccclass("MKViewBase/AnimationConfig"), _dec7 = property({
          displayName: "打开动画",
          type: Enum({
            未初始化: 0
          })
        }), _dec8 = property({
          displayName: "关闭动画",
          type: Enum({
            未初始化: 0
          })
        }), _dec9 = property({
          displayName: "等待动画执行完成",
          tooltip: "是否等待动画执行完成再执行生命周期 open"
        }), _dec10 = property({
          visible: false
        }), _dec11 = property({
          visible: false
        }), _dec6(_class4 = (_class5 = (_class6 = /*#__PURE__*/function () {
          function AnimationConfig() {
            /* --------------- public --------------- */
            /** 关闭动画 */
            _initializerDefineProperty(this, "isWaitAnimationComplete", _descriptor3, this);
            /** 打开动画 */
            _initializerDefineProperty(this, "openAnimationStr", _descriptor4, this);
            /** 关闭动画 */
            _initializerDefineProperty(this, "closeAnimationStr", _descriptor5, this);
          }
          _createClass(AnimationConfig, [{
            key: "openAnimationNum",
            get: /* --------------- 属性 --------------- */
            /**
             * @internal
             */
            function get() {
              var _ref;
              return (_ref = AnimationConfig.animationEnumTab.open[this.openAnimationStr]) != null ? _ref : 0;
            }

            /**
             * @internal
             */,
            set: function set(valueNum_) {
              this.openAnimationStr = AnimationConfig.animationEnumTab.open[valueNum_];
            }

            /**
             * @internal
             */
          }, {
            key: "closeAnimationNum",
            get: function get() {
              var _ref2;
              return (_ref2 = AnimationConfig.animationEnumTab.close[this.closeAnimationStr]) != null ? _ref2 : 0;
            }

            /**
             * @internal
             */,
            set: function set(valueNum_) {
              this.closeAnimationStr = AnimationConfig.animationEnumTab.close[valueNum_];
            }
          }]);
          return AnimationConfig;
        }(), _class6.animationEnumTab = {
          open: {},
          close: {}
        }, _class6), (_applyDecoratedDescriptor(_class5.prototype, "openAnimationNum", [_dec7], Object.getOwnPropertyDescriptor(_class5.prototype, "openAnimationNum"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "closeAnimationNum", [_dec8], Object.getOwnPropertyDescriptor(_class5.prototype, "closeAnimationNum"), _class5.prototype), _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "isWaitAnimationComplete", [_dec9], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return true;
          }
        }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "openAnimationStr", [_dec10], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return "";
          }
        }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "closeAnimationStr", [_dec11], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return "";
          }
        })), _class5)) || _class4);
        _MKViewBase2.AnimationConfig = AnimationConfig;
      })(_MKViewBase || (_MKViewBase = {}));
      /**
       * 视图基类
       * @noInheritDoc
       * @remarks
       *
       * - 添加编辑器快捷操作
       *
       * - 添加弹窗动画配置
       *
       * - 独立展示配置
       */
      var MKViewBase = function (v) {
        return exports({
          MKViewBase: v,
          default: v
        }), v;
      }((_dec = property({
        displayName: "单独展示",
        tooltip: "勾选后打开此视图将隐藏所有下级视图，关闭此视图则还原展示",
        group: {
          name: "视图配置",
          id: "1"
        }
      }), _dec2 = property({
        displayName: "动画配置",
        type: _MKViewBase.AnimationConfig,
        group: {
          name: "视图配置",
          id: "1"
        }
      }), _dec3 = property({
        displayName: "添加遮罩",
        tooltip: "添加遮罩到根节点下",
        group: {
          name: "快捷操作",
          id: "1"
        }
      }), _dec4 = property({
        displayName: "0 边距 widget",
        tooltip: "在节点上添加 0 边距 widget",
        group: {
          name: "快捷操作",
          id: "1"
        }
      }), _dec5 = property({
        displayName: "BlockInputEvents",
        tooltip: "在节点上添加 BlockInputEvents 组件",
        group: {
          name: "快捷操作",
          id: "1"
        }
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_MKLifeCycle2) {
        _inheritsLoose(MKViewBase, _MKLifeCycle2);
        function MKViewBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MKLifeCycle2.call.apply(_MKLifeCycle2, [this].concat(args)) || this;
          /* --------------- 属性 --------------- */
          _initializerDefineProperty(_this, "isShowAlone", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "animationConfig", _descriptor2, _assertThisInitialized(_this));
          /* --------------- public --------------- */
          /**
           * 模块类型
           * @readonly
           */
          _this.typeStr = "default";
          return _this;
        }
        var _proto = MKViewBase.prototype;
        _proto.open = /*#__PURE__*/function () {
          var _open = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _MKViewBase$_config$w, _this$animationConfig;
            var openAnimationFunc;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  /** 打开动画函数 */
                  openAnimationFunc = (_MKViewBase$_config$w = MKViewBase._config.windowAnimationTab) == null || (_MKViewBase$_config$w = _MKViewBase$_config$w.open) == null ? void 0 : _MKViewBase$_config$w[(_this$animationConfig = this.animationConfig) == null ? void 0 : _this$animationConfig.openAnimationStr]; // 打开动画
                  if (!openAnimationFunc) {
                    _context.next = 8;
                    break;
                  }
                  if (!this.animationConfig.isWaitAnimationComplete) {
                    _context.next = 7;
                    break;
                  }
                  _context.next = 5;
                  return openAnimationFunc(this.node);
                case 5:
                  _context.next = 8;
                  break;
                case 7:
                  openAnimationFunc(this.node);
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function open() {
            return _open.apply(this, arguments);
          }
          return open;
        }()
        /**
         * 关闭
         * @param config_ 关闭配置
         */
        // @weak-start-content-MKUIManage
        // @position:/(?<=close\()/g
        // @import:config_?: Omit<MKUIManage_.CloseConfig<any>, "type" | "isAll">
        ;

        _proto.close = /*#__PURE__*/function () {
          var _close = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(config_) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (this._state & (_MKLifeCycle.RunState.Closing | _MKLifeCycle.RunState.Close)) {
                    _context2.next = 4;
                    break;
                  }
                  _context2.next = 3;
                  return mkUIManage.close(this, config_);
                case 3:
                  throw "中断";
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function close(_x) {
            return _close.apply(this, arguments);
          }
          return close;
        }();
        _proto.lateClose = /*#__PURE__*/function () {
          var _lateClose = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _MKViewBase$_config$w2, _this$animationConfig2;
            var closeAnimationFunc;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  /** 关闭动画函数 */
                  closeAnimationFunc = (_MKViewBase$_config$w2 = MKViewBase._config.windowAnimationTab) == null || (_MKViewBase$_config$w2 = _MKViewBase$_config$w2.close) == null ? void 0 : _MKViewBase$_config$w2[(_this$animationConfig2 = this.animationConfig) == null ? void 0 : _this$animationConfig2.closeAnimationStr]; // 关闭动画
                  if (!(
                  // 非重启中
                  !mkGame.isRestarting &&
                  // 非切换场景
                  !mkBundle.isSwitchScene && closeAnimationFunc)) {
                    _context3.next = 4;
                    break;
                  }
                  _context3.next = 4;
                  return closeAnimationFunc(this.node);
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function lateClose() {
            return _lateClose.apply(this, arguments);
          }
          return lateClose;
        }()
        /* ------------------------------- 功能 ------------------------------- */
        /** 初始化编辑器 */;

        _proto._initEditor = function _initEditor() {
          _MKLifeCycle2.prototype._initEditor.call(this);

          // 窗口动画枚举
          {
            // 打开
            {
              _MKViewBase.AnimationConfig.animationEnumTab.open = Enum(mkToolEnum.objToEnum(MKViewBase._config.windowAnimationTab.open));
              if (this.animationConfig && !this.animationConfig.openAnimationStr) {
                this.animationConfig.openAnimationStr = Object.keys(_MKViewBase.AnimationConfig.animationEnumTab.open)[0];
              }
            }

            // 关闭
            {
              _MKViewBase.AnimationConfig.animationEnumTab.close = Enum(mkToolEnum.objToEnum(MKViewBase._config.windowAnimationTab.close));
              if (this.animationConfig && !this.animationConfig.closeAnimationStr) {
                this.animationConfig.closeAnimationStr = Object.keys(_MKViewBase.AnimationConfig.animationEnumTab.close)[0];
              }
            }
          }
        }

        /* ------------------------------- get/set ------------------------------- */;
        _proto._getIsAutoMask = function _getIsAutoMask() {
          return false;
        };
        _proto._setIsAutoMask = /*#__PURE__*/function () {
          var _setIsAutoMask2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(value_) {
            var prefab, node;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  {
                    _context4.next = 16;
                    break;
                  }
                case 4:
                  _context4.next = 6;
                  return mkAsset.get(GlobalConfig.View.maskDataTab.prefabPathStr, Prefab, this);
                case 6:
                  prefab = _context4.sent;
                  if (prefab) {
                    _context4.next = 9;
                    break;
                  }
                  return _context4.abrupt("return");
                case 9:
                  node = instantiate(prefab); // 设置节点名
                  if (GlobalConfig.View.maskDataTab.nodeNameStr) {
                    node.name = GlobalConfig.View.maskDataTab.nodeNameStr;
                  }

                  // 添加到父节点
                  this.node.addChild(node);
                  // 更新层级
                  node.setSiblingIndex(0);
                  _context4.next = 16;
                  break;
                case 15:
                  if (this._getIsAutoMask()) {
                    this.node.children[0].destroy();
                  }
                case 16:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function _setIsAutoMask(_x2) {
            return _setIsAutoMask2.apply(this, arguments);
          }
          return _setIsAutoMask;
        }();
        _proto._setIsAutoWidget = function _setIsAutoWidget(value_) {};
        _proto._setIsAutoBlockInput = function _setIsAutoBlockInput(value_) {};
        _createClass(MKViewBase, [{
          key: "isAutoMask",
          get: /** @internal */
          function get() {
            return this._getIsAutoMask();
          },
          set: function set(value_) {
            this._setIsAutoMask(value_);
          }

          /** @internal */
        }, {
          key: "isAutoWidget",
          get: function get() {
            return Boolean(this.getComponent(Widget));
          },
          set: function set(value_) {
            this._setIsAutoWidget(value_);
          }

          /** @internal */
        }, {
          key: "isAutoBlockInput",
          get: function get() {
            return Boolean(this.getComponent(BlockInputEvents));
          },
          set: function set(value_) {
            this._setIsAutoBlockInput(value_);
          }
        }, {
          key: "config",
          set: /** 模块配置 */
          function set(config_) {
            var _config_$typeStr;
            if (config_.isStatic !== undefined) {
              this._isStatic = config_.isStatic;
            }
            this.typeStr = (_config_$typeStr = config_.typeStr) != null ? _config_$typeStr : "default";
          }

          /* --------------- protected --------------- */
          /* --------------- private --------------- */
          /* ------------------------------- 生命周期 ------------------------------- */
        }]);

        return MKViewBase;
      }(MKLifeCycle), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isShowAlone", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animationConfig", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "isAutoMask", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "isAutoMask"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAutoWidget", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "isAutoWidget"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAutoBlockInput", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "isAutoBlockInput"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKWebsocket.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKNetworkBase.ts'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, cclegacy, MKNetworkBase_, MKNetworkBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MKNetworkBase_ = module.MKNetworkBase_;
      MKNetworkBase = module.default;
    }],
    execute: function () {
      exports('MKWebsocket_', void 0);
      cclegacy._RF.push({}, "7c3fd2QBRdMuLVFCTwpYNWJ", "MKWebsocket", undefined);

      /**
       * 通用 websocket
       * @noInheritDoc
       */
      var MKWebsocket = exports('default', /*#__PURE__*/function (_MKNetworkBase) {
        _inheritsLoose(MKWebsocket, _MKNetworkBase);
        function MKWebsocket(config_) {
          var _this;
          _this = _MKNetworkBase.call(this, config_) || this;
          /* --------------- public --------------- */
          _this.config = void 0;
          /* --------------- private --------------- */
          _this._socket = void 0;
          _this.config = new MKWebsocket_.InitConfig(config_);
          return _this;
        }
        var _proto = MKWebsocket.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /** 重置socket */
        _proto._resetSocket = function _resetSocket() {
          var _this2 = this;
          if (this._socket) {
            ["onopen", "onmessage", "onerror", "onclose"].forEach(function (vStr, kNum) {
              _this2._socket[vStr] = null;
            });
            this._socket.close();
          }
          this._socket = new WebSocket(this._addrStr, this.config.protocolStrList);
          this._socket.binaryType = this.config.binaryType;
          var funcNameStrList = ["_open", "_message", "_error", "_close"];
          ["onopen", "onmessage", "onerror", "onclose"].forEach(function (vStr, kNum) {
            _this2._socket[vStr] = _this2[funcNameStrList[kNum]].bind(_this2);
          });
        };
        return MKWebsocket;
      }(MKNetworkBase));
      var MKWebsocket_;
      (function (_MKWebsocket_) {
        var InitConfig = /*#__PURE__*/function (_MKNetworkBase_$InitC) {
          _inheritsLoose(InitConfig, _MKNetworkBase_$InitC);
          function InitConfig(init_) {
            var _this3;
            _this3 = _MKNetworkBase_$InitC.call(this, init_) || this;
            /** 通信类型 */
            _this3.binaryType = "arraybuffer";
            /** 协议 */
            _this3.protocolStrList = [];
            Object.assign(_assertThisInitialized(_this3), init_);
            return _this3;
          }
          return InitConfig;
        }(MKNetworkBase_.InitConfig);
        _MKWebsocket_.InitConfig = InitConfig;
      })(MKWebsocket_ || (MKWebsocket_ = exports('MKWebsocket_', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MKWebsocketWX.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKNetworkBase.ts'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, cclegacy, MKNetworkBase_, MKNetworkBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MKNetworkBase_ = module.MKNetworkBase_;
      MKNetworkBase = module.default;
    }],
    execute: function () {
      exports('MKWebsocketWX_', void 0);
      cclegacy._RF.push({}, "cc768k+QAlLw5Kyx6oi3qoK", "MKWebsocketWX", undefined);

      /**
       * 微信 websocket
       * @noInheritDoc
       */
      var MKWebsocketWX = exports('default', /*#__PURE__*/function (_MKNetworkBase) {
        _inheritsLoose(MKWebsocketWX, _MKNetworkBase);
        function MKWebsocketWX(config_) {
          var _this;
          _this = _MKNetworkBase.call(this, config_) || this;
          /* --------------- public --------------- */
          _this.config = void 0;
          /* --------------- public --------------- */
          _this._socket = void 0;
          _this.config = new MKWebsocketWX_.InitConfig(config_);
          return _this;
        }
        var _proto = MKWebsocketWX.prototype;
        /* ------------------------------- 功能 ------------------------------- */
        /** 重置socket */
        _proto._resetSocket = function _resetSocket() {
          var _this2 = this;
          if (this._socket) {
            ["onOpen", "onMessage", "onError", "onClose"].forEach(function (vStr, kNum) {
              _this2._socket[vStr] = null;
            });
            this._socket.close({});
          }
          this._socket = wx.connectSocket({
            url: this._addrStr,
            protocols: this.config.protocolStrList
          });
          var funcNameStrList = ["_open", "_message", "_error", "_close"];
          ["onOpen", "onMessage", "onError", "onClose"].forEach(function (vStr, kNum) {
            _this2._socket[vStr] = _this2[funcNameStrList[kNum]].bind(_this2);
          });
        };
        return MKWebsocketWX;
      }(MKNetworkBase));
      var MKWebsocketWX_;
      (function (_MKWebsocketWX_) {
        var InitConfig = /*#__PURE__*/function (_MKNetworkBase_$InitC) {
          _inheritsLoose(InitConfig, _MKNetworkBase_$InitC);
          function InitConfig(init_) {
            var _this3;
            _this3 = _MKNetworkBase_$InitC.call(this, init_) || this;
            /** 协议 */
            _this3.protocolStrList = [];
            Object.assign(_assertThisInitialized(_this3), init_);
            return _this3;
          }
          return InitConfig;
        }(MKNetworkBase_.InitConfig);
        _MKWebsocketWX_.InitConfig = InitConfig;
      })(MKWebsocketWX_ || (MKWebsocketWX_ = exports('MKWebsocketWX_', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MVCControlBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKToolFunc.ts', './MKMonitor.ts', './MKUIManage.ts', './MKStatusTask.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, mkToolFunc, mkMonitor, mkUIManage, MKStatusTask;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      mkToolFunc = module.default;
    }, function (module) {
      mkMonitor = module.default;
    }, function (module) {
      mkUIManage = module.default;
    }, function (module) {
      MKStatusTask = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "07797cDiuVM8Ktn/XQtRadr", "MVCControlBase", undefined);
      var MVCControlBase = exports('default', /*#__PURE__*/function () {
        // @ts-ignore
        function MVCControlBase() {
          var _this = this;
          /* --------------- protected --------------- */
          this._model = void 0;
          this._view = void 0;
          /* --------------- private --------------- */
          this._openTask = new MKStatusTask(false);
          this._closeTask = new MKStatusTask(true);
          mkToolFunc.runParentFunc(this, ["open", "close"]);
          // 等待初始化属性完成
          setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this._closeTask.task;
                case 2:
                  if (!_this.open) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 5;
                  return _this.open();
                case 5:
                  _this._openTask.finish(true);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })), 0);
        }
        /* --------------- public --------------- */
        var _proto = MVCControlBase.prototype;
        _proto.close = /*#__PURE__*/function () {
          var _close = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(isExternalCall_) {
            var _this$_model;
            var task;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (isExternalCall_ === void 0) {
                    isExternalCall_ = true;
                  }
                  _context2.next = 3;
                  return this._openTask.task;
                case 3:
                  this._closeTask.finish(false);
                  if (!isExternalCall_) {
                    _context2.next = 10;
                    break;
                  }
                  _context2.next = 7;
                  return this.close(false);
                case 7:
                  _context2.next = 9;
                  return this._lastClose();
                case 9:
                  throw "中断";
                case 10:
                  if (!((_this$_model = this._model) != null && _this$_model.close)) {
                    _context2.next = 13;
                    break;
                  }
                  _context2.next = 13;
                  return this._model.close();
                case 13:
                  if (!this._view) {
                    _context2.next = 16;
                    break;
                  }
                  _context2.next = 16;
                  return mkUIManage.close(this._view);
                case 16:
                  task = mkMonitor.clear(this);
                  if (!task) {
                    _context2.next = 20;
                    break;
                  }
                  _context2.next = 20;
                  return task;
                case 20:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function close(_x) {
            return _close.apply(this, arguments);
          }
          return close;
        }()
        /** 打开回调
         * @remarks
         * 构造后下帧执行，自动执行父类函数，无须执行 super.open
         */;

        _proto._lastClose = /*#__PURE__*/function () {
          var _lastClose2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this._openTask.finish(false);
                  this._closeTask.finish(true);
                case 2:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function _lastClose() {
            return _lastClose2.apply(this, arguments);
          }
          return _lastClose;
        }();
        _createClass(MVCControlBase, [{
          key: "model",
          get: function get() {
            return this._model;
          }
        }]);
        return MVCControlBase;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MVCModelBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKToolFunc.ts', './MKToolObject.ts', './MKMonitor.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, _construct, cclegacy, mkToolFunc, mkToolObject, mkMonitor;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _construct = module.construct;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      mkToolFunc = module.default;
    }, function (module) {
      mkToolObject = module.default;
    }, function (module) {
      mkMonitor = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4d5de4OLA1E8aTC1ZnyFBnB", "MVCModelBase", undefined);
      var MVCModelBase = exports('default', /*#__PURE__*/function () {
        function MVCModelBase() {
          /**
           * 重置 data
           * @remarks
           * close 后重置 this.data，data 必须为 class 类型
           */
          this._isResetData = true;
          // 父类自启函数
          mkToolFunc.runParentFunc(this, ["open", "close"]);
        }
        /* ------------------------------- segmentation ------------------------------- */
        /** 创建模型实例 */
        MVCModelBase["new"] = /*#__PURE__*/
        function () {
          var _new2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var self,
              _len,
              argsList_,
              _key,
              model,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  self = this;
                  for (_len = _args.length, argsList_ = new Array(_len), _key = 0; _key < _len; _key++) {
                    argsList_[_key] = _args[_key];
                  }
                  model = _construct(self, argsList_);
                  if (!model.open) {
                    _context.next = 6;
                    break;
                  }
                  _context.next = 6;
                  return model.open == null ? void 0 : model.open();
                case 6:
                  return _context.abrupt("return", model);
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function _new() {
            return _new2.apply(this, arguments);
          }
          return _new;
        }()
        /** 打开回调
         * @remarks
         * 执行当前类静态函数 new 时调用
         */;

        var _proto = MVCModelBase.prototype;
        _proto.close = /*#__PURE__*/function () {
          var _close = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var task;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  task = mkMonitor.clear(this);
                  if (!task) {
                    _context2.next = 4;
                    break;
                  }
                  _context2.next = 4;
                  return task;
                case 4:
                  // @weak-end

                  // 重置数据
                  if (this._isResetData) {
                    mkToolObject.reset(this, true);
                  }
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function close() {
            return _close.apply(this, arguments);
          }
          return close;
        }();
        return MVCModelBase;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MVCViewBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKViewBase.ts', './MKEventTarget.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, MKViewBase, MKEventTarget;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      MKViewBase = module.MKViewBase;
    }, function (module) {
      MKEventTarget = module.default;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "5a070K+0INID4MAHYM9NsCn", "MVCViewBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MVCViewBase = exports('default', ccclass(_class = /*#__PURE__*/function (_MKViewBase) {
        _inheritsLoose(MVCViewBase, _MKViewBase);
        function MVCViewBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MKViewBase.call.apply(_MKViewBase, [this].concat(args)) || this;
          /** 视图事件 */
          _this.event = new MKEventTarget();
          /** 数据访问器 */
          _this._model = void 0;
          return _this;
        }
        return MVCViewBase;
      }(MKViewBase)) || _class);
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Framework', 'chunks:///_virtual/Framework'); 
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