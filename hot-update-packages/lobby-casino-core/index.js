System.register("chunks:///_virtual/BaseModel.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "33d25rj4jhCQbLeHyWaJTmo", "BaseModel", undefined);
      class BaseModel {
        constructor() {
          /**临时数据(不存储的数据) */
          this.td = void 0;
        }
        /**同步配置 */
        syncConfig(param) {}

        /**同步数据 */
        syncData(data) {
          for (let key in this) {
            let keyName = key.toString();
            if (keyName != "td" && typeof this[keyName] != "function" && data[keyName] != null) {
              this[keyName] = data[keyName];
            }
          }
          return true;
        }

        /**获取数据 */
        getData() {
          let data = new Object();
          for (let key in this) {
            let keyName = key.toString();
            if (keyName != "td" && typeof this[keyName] != "function") {
              data[keyName] = this[keyName];
            }
          }
          return data;
        }
      }
      exports('BaseModel', BaseModel);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Config.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dbda7RG7ktMgqrzpkCWeS3V", "Config", undefined);
      /**本地配置 */
      class ConfigLocal {
        constructor() {
          this.version = "1.0.0";
          /**屏幕最大宽度 */
          this.maxWidth = 1167;
          /**音量大小 */
          this.bgmVolume = 0.2;
        }
      }
      exports('ConfigLocal', ConfigLocal);

      /**服务器配置（由各业务模块扩展） */
      class ConfigServer {}
      exports('ConfigServer', ConfigServer);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CopSkeleton.ts", ['cc', './MAb.ts'], function (exports) {
  var cclegacy, Component, sp, _decorator, MAb;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      sp = module.sp;
      _decorator = module._decorator;
    }, function (module) {
      MAb = module.MAb;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "1ff2clUuu1PLoJgri+BNXbK", "CopSkeleton", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let CopSkeleton = exports('CopSkeleton', (_dec = ccclass('CopSkeleton'), _dec(_class = class CopSkeleton extends Component {
        init(param) {
          return new Promise(async resolve => {
            let skd = await MAb.asyncLoad({
              bundle: param.bundle,
              path: param.path,
              type: sp.SkeletonData
            });
            if (!this.isValid) return;
            let skt = this.getComponent(sp.Skeleton);
            if (skt != null && skt.isValid) {
              skt.skeletonData = skd;
              resolve(skt);
            }
          });
        }
        getSktleton() {
          return this.getComponent(sp.Skeleton);
        }
        clear() {
          var _this$getComponent;
          let skt = this == null || (_this$getComponent = this.getComponent) == null ? void 0 : _this$getComponent.call(this, sp.Skeleton);
          if (skt != null && skt.isValid && skt != null && skt.skeletonData) {
            skt.skeletonData = null;
          }
        }
      }) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CopSprite.ts", ['cc', './MAb.ts'], function (exports) {
  var cclegacy, Component, SpriteFrame, Sprite, _decorator, MAb;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      _decorator = module._decorator;
    }, function (module) {
      MAb = module.MAb;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d39bfO63J1OUoQwbu22GevF", "CopSprite", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let CopSprite = exports('CopSprite', (_dec = ccclass('CopSprite'), _dec(_class = class CopSprite extends Component {
        init(param) {
          return new Promise(async resolve => {
            let spf = await MAb.asyncLoad({
              bundle: param.bundle,
              path: param.path,
              type: SpriteFrame
            });
            if (!this.isValid) return;
            let spt = this.getComponent(Sprite);
            if (spt != null && spt.isValid) {
              spt.spriteFrame = spf;
              resolve();
            }
          });
        }
        setSpriteFrame(spf) {
          var _this$getComponent;
          let spt = this == null || (_this$getComponent = this.getComponent) == null ? void 0 : _this$getComponent.call(this, Sprite);
          if (spt != null && spt.isValid) {
            spt.spriteFrame = spf;
          }
        }
        clear() {
          var _this$getComponent2;
          let spt = this == null || (_this$getComponent2 = this.getComponent) == null ? void 0 : _this$getComponent2.call(this, Sprite);
          if (spt != null && spt.isValid && spt != null && spt.spriteFrame) {
            spt.spriteFrame = null;
          }
        }
      }) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Decorator.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('ButtonLock', ButtonLock);
      cclegacy._RF.push({}, "3a423gyInlJbZAl89NRz1rw", "Decorator", undefined);
      function ButtonLock(lockTime = 100, callBackFun) {
        return function (target, propertyKey, descriptor) {
          let oldFun = descriptor.value;
          let isLock = false;
          descriptor.value = function (...args) {
            if (isLock) {
              callBackFun == null || callBackFun();
              return;
            }
            isLock = true;
            setTimeout(() => {
              isLock = false;
            }, lockTime);
            oldFun.apply(this, args);
          };
          return descriptor;
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Enum.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "315abR+n9NPeZr6K6pYt09F", "Enum", undefined);
      /**
       * Core 通用枚举
       *
       * 仅包含 core Manager 依赖的通用枚举
       * 游戏专属枚举（EDiceColor、EFace、EChipLevel 等）留在游戏 bundle 中
       */

      /** Canvas 节点层级 */
      let ENode = exports('ENode', /*#__PURE__*/function (ENode) {
        ENode["Canvas"] = "Canvas";
        ENode["GameUI"] = "GameUI";
        return ENode;
      }({}));

      /** 开关状态 */
      let ESwitchStatus = exports('ESwitchStatus', /*#__PURE__*/function (ESwitchStatus) {
        ESwitchStatus[ESwitchStatus["Close"] = 0] = "Close";
        ESwitchStatus[ESwitchStatus["Open"] = 1] = "Open";
        return ESwitchStatus;
      }({}));

      /** 服务器环境类型 */
      let EServerType = exports('EServerType', /*#__PURE__*/function (EServerType) {
        EServerType[EServerType["Local"] = 0] = "Local";
        EServerType[EServerType["Test"] = 1] = "Test";
        EServerType[EServerType["Release"] = 2] = "Release";
        return EServerType;
      }({}));

      /** Toast 提示类型 */
      let EToast = exports('EToast', /*#__PURE__*/function (EToast) {
        EToast["ExceedBalance"] = "ExceedBalance";
        EToast["MiniBet"] = "MiniBet";
        EToast["NoBet"] = "NoBet";
        return EToast;
      }({}));

      /** 选中状态 */
      let ESelectStatus = exports('ESelectStatus', /*#__PURE__*/function (ESelectStatus) {
        ESelectStatus[ESelectStatus["Selected"] = 0] = "Selected";
        ESelectStatus[ESelectStatus["UnSelected"] = 1] = "UnSelected";
        return ESelectStatus;
      }({}));

      /** 方向 */
      let EDirection = exports('EDirection', /*#__PURE__*/function (EDirection) {
        EDirection[EDirection["Up"] = 0] = "Up";
        EDirection[EDirection["Down"] = 1] = "Down";
        EDirection[EDirection["Left"] = 2] = "Left";
        EDirection[EDirection["Right"] = 3] = "Right";
        return EDirection;
      }({}));

      /** 轴 */
      let EAxis = exports('EAxis', /*#__PURE__*/function (EAxis) {
        EAxis[EAxis["X"] = 0] = "X";
        EAxis[EAxis["Y"] = 1] = "Y";
        return EAxis;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IHttp.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0d203NCzZZKSovLCgWn7RHR", "IHttp", undefined);
      /** 网络请求过程中一些调试信息 */
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      /** 接口调用失败的回调函数 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InfiniteScroll.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enum.ts', './Tools.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, ScrollView, Node, Prefab, Enum, _decorator, Component, instantiate, UITransform, v3, EDirection, EAxis, Tools;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      ScrollView = module.ScrollView;
      Node = module.Node;
      Prefab = module.Prefab;
      Enum = module.Enum;
      _decorator = module._decorator;
      Component = module.Component;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      v3 = module.v3;
    }, function (module) {
      EDirection = module.EDirection;
      EAxis = module.EAxis;
    }, function (module) {
      Tools = module.Tools;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "81935tXutVMCZPxerD6+ugS", "InfiniteScroll", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let InfiniteScroll = exports('default', (_dec = ccclass('InfiniteScroll'), _dec2 = property(ScrollView), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property({
        type: Enum(EDirection)
      }), _dec(_class = (_class2 = class InfiniteScroll extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "scrollView", _descriptor, this);
          _initializerDefineProperty(this, "view", _descriptor2, this);
          _initializerDefineProperty(this, "content", _descriptor3, this);
          _initializerDefineProperty(this, "prefab", _descriptor4, this);
          _initializerDefineProperty(this, "itemComponent", _descriptor5, this);
          _initializerDefineProperty(this, "spacing", _descriptor6, this);
          _initializerDefineProperty(this, "paddingTop", _descriptor7, this);
          _initializerDefineProperty(this, "paddingBottom", _descriptor8, this);
          _initializerDefineProperty(this, "direction", _descriptor9, this);
          this.infos = [];
          this.items = [];
          this.limitMax = 0;
          this.limitMin = 0;
          this.lastPosition = null;
        }
        init(infos) {
          if (!infos) {
            return;
          }
          this.infos = infos;
          let rowItemCounts = Math.ceil(this.getNodeLen(this.view) / (this.getNodeLen(this.prefab.data) + this.spacing));
          for (let i = 0; i < rowItemCounts + 1; ++i) {
            if (typeof this.infos[i] == 'undefined') {
              break;
            }
            let item = this.items[i];
            if (!item) {
              item = instantiate(this.prefab);
              this.items.push(item);
              this.getItemParent().addChild(item);
            }
            item.active = true;
            this.items[i].__itemID = i;
            item.getComponent(this.itemComponent).init(this.infos[i]);
            item.setPosition(this.getPosition(i));
            if (this.getAxis() == EAxis.Y) {
              item.setSiblingIndex(Tools.limitRange(item.position.y, 0, 999999999));
            } else if (this.getAxis() == EAxis.X) {
              item.setSiblingIndex(Tools.limitRange(item.position.x, 0, 999999999));
            }
          }
          if (this.getAxis() == EAxis.Y) {
            this.content.getComponent(UITransform).height = this.paddingTop + this.paddingBottom + this.infos.length * this.getNodeLen(this.prefab.data) + (this.infos.length - 1) * this.spacing;
          } else if (this.getAxis() == EAxis.X) {
            this.content.getComponent(UITransform).width = this.paddingTop + this.paddingBottom + this.infos.length * this.getNodeLen(this.prefab.data) + (this.infos.length - 1) * this.spacing;
          }
          this.limitMax = this.getNodeLen(this.view) * (1 - this.getViewAnchor()) + this.getNodeLen(this.prefab.data) / 2 + this.spacing / 2;
          this.limitMin = -(this.getNodeLen(this.view) * this.getViewAnchor() + this.getNodeLen(this.prefab.data) / 2 + this.spacing / 2);
          this.lastPosition = this.content.getPosition();
        }
        update() {
          if (!this.lastPosition) return;
          if (!(this.scrollView.isScrolling() || this.scrollView.isAutoScrolling())) return;
          let isDown = this.content.position.y > this.lastPosition.y && this.getAxis() == EAxis.Y || this.content.position.x < this.lastPosition.x && this.getAxis() == EAxis.X;
          let countOfItems = this.items.length;
          let dataLen = this.infos.length;
          for (let i in this.items) {
            let item = this.items[i];
            if (!item) break;
            let itemPos = this.getItemParent().getComponent(UITransform).convertToWorldSpaceAR(item.position);
            itemPos = this.view.getComponent(UITransform).convertToNodeSpaceAR(itemPos);
            if (isDown) {
              if (itemPos.y > this.limitMax && this.getAxis() == EAxis.Y || itemPos.x < this.limitMin && this.getAxis() == EAxis.X) {
                if (this.getAxis() == EAxis.Y) {
                  let newId = item.__itemID - this.getDirectionNumber() * countOfItems;
                  if (this.getDirectionNumber() < 0) {
                    if (newId >= dataLen) return;
                  } else {
                    if (newId < 0) return;
                  }
                  item.__itemID = newId;
                  item.position = v3(item.position.x, item.position.y - countOfItems * this.getNodeLen(this.prefab.data) - countOfItems * this.spacing);
                  item.setSiblingIndex(Tools.limitRange(item.position.y, 0, 999999999));
                } else if (this.getAxis() == EAxis.X) {
                  let newId = item.__itemID + this.getDirectionNumber() * countOfItems;
                  if (this.getDirectionNumber() < 0) {
                    if (newId < 0) return;
                  } else {
                    if (newId >= dataLen) return;
                  }
                  item.__itemID = newId;
                  item.position = v3(item.position.x + countOfItems * this.getNodeLen(this.prefab.data) + countOfItems * this.spacing, item.position.y);
                  item.setSiblingIndex(Tools.limitRange(item.position.x, 0, 999999999));
                }
                item.getComponent(this.itemComponent).init(this.infos[item.__itemID]);
              }
            } else {
              if (itemPos.y < this.limitMin && this.getAxis() == EAxis.Y || itemPos.x > this.limitMax && this.getAxis() == EAxis.X) {
                if (this.getAxis() == EAxis.Y) {
                  let newId = item.__itemID + this.getDirectionNumber() * countOfItems;
                  if (this.getDirectionNumber() < 0) {
                    if (newId < 0) return;
                  } else {
                    if (newId >= dataLen) return;
                  }
                  item.__itemID = newId;
                  item.position = v3(item.position.x, item.position.y + countOfItems * this.getNodeLen(this.prefab.data) + countOfItems * this.spacing);
                  item.setSiblingIndex(Tools.limitRange(item.position.y, 0, 999999999));
                } else if (this.getAxis() == EAxis.X) {
                  let newId = item.__itemID - this.getDirectionNumber() * countOfItems;
                  if (this.getDirectionNumber() < 0) {
                    if (newId >= dataLen) return;
                  } else {
                    if (newId < 0) return;
                  }
                  item.__itemID = newId;
                  item.position = v3(item.position.x - countOfItems * this.getNodeLen(this.prefab.data) - countOfItems * this.spacing, item.position.y);
                  item.setSiblingIndex(Tools.limitRange(item.position.x, 0, 999999999));
                }
                item.getComponent(this.itemComponent).init(this.infos[item.__itemID]);
              }
            }
          }
          this.lastPosition = this.content.getPosition();
        }
        show() {
          this.node.active = true;
        }
        hide() {
          this.node.active = false;
        }
        reset() {
          this.scrollView.stopAutoScroll();
          this.setDefaultPosition();
          this.items.forEach(element => {
            element.active = false;
          });
        }
        setDefaultPosition() {
          if (this.direction == EDirection.Down) {
            this.content.position = v3(this.content.position.x, this.getNodeLen(this.view) * (1 - this.getViewAnchor()));
          } else if (this.direction == EDirection.Up) {
            this.content.position = v3(this.content.position.x, -this.getNodeLen(this.view) * this.getViewAnchor());
          } else if (this.direction == EDirection.Left) {
            this.content.position = v3(this.getNodeLen(this.view) * (1 - this.getViewAnchor()), this.content.position.y);
          } else if (this.direction == EDirection.Right) {
            this.content.position = v3(-this.getNodeLen(this.view) * this.getViewAnchor(), this.content.position.y);
          }
        }
        getDirectionNumber() {
          switch (this.direction) {
            case EDirection.Up:
            case EDirection.Right:
              return 1;
            case EDirection.Down:
            case EDirection.Left:
              return -1;
          }
        }
        getAxis() {
          switch (this.direction) {
            case EDirection.Up:
            case EDirection.Down:
              return EAxis.Y;
            case EDirection.Right:
            case EDirection.Left:
              return EAxis.X;
          }
        }
        getViewAnchor() {
          if (this.getAxis() == EAxis.X) {
            return this.view.getComponent(UITransform).anchorX;
          } else if (this.getAxis() == EAxis.Y) {
            return this.view.getComponent(UITransform).anchorY;
          }
        }
        getNodeLen(node) {
          if (this.getAxis() == EAxis.X) {
            return node.getComponent(UITransform).width;
          } else if (this.getAxis() == EAxis.Y) {
            return node.getComponent(UITransform).height;
          }
        }
        getSinglePosition(position) {
          if (this.getAxis() == EAxis.X) {
            return position.x;
          } else if (this.getAxis() == EAxis.Y) {
            return position.y;
          }
        }
        getPosition(index) {
          if (this.getAxis() == EAxis.Y) {
            return v3(0, this.getDirectionNumber() * (this.paddingTop + this.getNodeLen(this.prefab.data) / 2 + index * (this.getNodeLen(this.prefab.data) + this.spacing)));
          } else if (this.getAxis() == EAxis.X) {
            return v3(this.getDirectionNumber() * (this.paddingTop + this.getNodeLen(this.prefab.data) / 2 + index * (this.getNodeLen(this.prefab.data) + this.spacing)), 0);
          }
        }
        getInfos() {
          return this.infos;
        }
        getItemParent() {
          return this.content;
        }
        getSpacing() {
          return this.spacing;
        }
        getPaddingTop() {
          return this.paddingTop;
        }
        getPaddingBottom() {
          return this.paddingBottom;
        }
        getPrefab() {
          return this.prefab;
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "view", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemComponent", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spacing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "paddingTop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "paddingBottom", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return EDirection.Down;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Interface.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "23bb4zWQ1FPBaY6fdjniXts", "Interface", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lobby-casino-core", ['./Config.ts', './Enum.ts', './MApp.ts', './SubSystemManager.ts', './BaseModel.ts', './CopSkeleton.ts', './CopSprite.ts', './IHttp.ts', './Interface.ts', './MAb.ts', './MAudio.ts', './MConfig.ts', './MCopy.ts', './MDebug.ts', './MEvent.ts', './MHttp.ts', './MI18n.ts', './MModel.ts', './MNode.ts', './MPool.ts', './MSchedule.ts', './MSkeleton.ts', './MToast.ts', './MTween.ts', './MUi.ts', './MUrlParam.ts', './MWebSocket.ts', './PopupBtnCmp.ts', './PopupCloseBtnCmp.ts', './PopupLifeCmp.ts', './PopupManager.ts', './ModelSet.ts', './Decorator.ts', './InfiniteScroll.ts', './OnEnginLaunch.ts', './Tools.ts', './TouchClose.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MAb.ts", ['cc'], function (exports) {
  var cclegacy, assetManager, director, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      director = module.director;
      sys = module.sys;
    }],
    execute: function () {
      exports('MAb', void 0);
      cclegacy._RF.push({}, "47189wBlpdB37AcKw4LI7mr", "MAb", undefined);
      let EBundle = exports('EBundle', /*#__PURE__*/function (EBundle) {
        EBundle["resources"] = "resources";
        EBundle["Audio"] = "audio";
        EBundle["Game"] = "game";
        EBundle["Panel"] = "panel";
        EBundle["Dialog"] = "dialog";
        return EBundle;
      }({}));
      let EScene = exports('EScene', /*#__PURE__*/function (EScene) {
        EScene["LoadScene"] = "LoadScene";
        EScene["GameScene"] = "GameScene";
        EScene["Lobby"] = "Lobby";
        return EScene;
      }({}));
      let MAb;
      (function (_MAb) {
        /** 有效的 Bundle 列表（防止加载不存在的 bundle 导致 404） */
        const VALID_BUNDLES = ["lobby-casino-core", "lobby-casino", "lobby-casino-email"];

        /**
         * 解析 bundle 的加载 URL
         * 原生平台：优先使用热更目录（通过全局 __hotUpdate），fallback 到包名
         * Web：直接返回包名
         */
        function resolveBundleUrl(bundleName) {
          const hotUpdate = globalThis.__hotUpdate;
          if (sys.isNative && hotUpdate && typeof hotUpdate.getBundleUrl === 'function') {
            return hotUpdate.getBundleUrl(bundleName);
          }
          if (sys.isNative) {
            var _jsb$fileUtils, _jsb$fileUtils2;
            const jsb = globalThis.jsb;
            const writablePath = (jsb == null || (_jsb$fileUtils = jsb.fileUtils) == null ? void 0 : _jsb$fileUtils.getWritablePath()) || '/';
            const storagePath = `${writablePath}remote-asset/${bundleName}`;
            if (jsb != null && (_jsb$fileUtils2 = jsb.fileUtils) != null && _jsb$fileUtils2.isFileExist(`${storagePath}/project.manifest`)) {
              return storagePath;
            }
          }
          return bundleName;
        }

        /**获取bundle */
        function getBundle(bundleName, callback, onError) {
          let name = bundleName;
          // 兼容性处理：如果请求 core, resources, dialog, audio, panel，但在 VALID_BUNDLES 中找不到，尝试重定向
          if (!VALID_BUNDLES.includes(name)) {
            if (name === "core" || name === "lobby-casino-core") name = "lobby-casino-core";else if (name === "lobby" || name === "lobby-casino") name = "lobby-casino";else if (name === "resources" || name === "dialog" || name === "audio" || name === "panel") name = "lobby-casino";
          }
          if (!VALID_BUNDLES.includes(name)) {
            // 如果不是已知的 bundle，直接返回错误，避免产生 404 请求
            onError == null || onError(new Error(`Bundle ${name} is not in VALID_BUNDLES list`));
            return;
          }
          let bundle = assetManager.getBundle(name);
          if (bundle) {
            try {
              callback(bundle);
            } catch (error) {
              console.log(error);
              onError == null || onError(error);
            }
          } else {
            // 原生平台：优先从热更目录加载
            let bundleUrl = resolveBundleUrl(name);
            assetManager.loadBundle(bundleUrl, (e, bundle) => {
              if (e) {
                console.warn(`[MAb] Bundle ${bundleUrl} load failed:`, e.message);
                onError == null || onError(e);
                return;
              }
              try {
                callback(bundle);
              } catch (error) {
                console.log(error);
                onError == null || onError(error);
              }
            });
          }
        }
        _MAb.getBundle = getBundle;
        /**预加载单个资源 */
        function preload(param) {
          getBundle(param.bundle, bundle => {
            bundle.preload(param.path, param.type, param.onProgress, param.onComplete);
          });
        }
        function asyncPreload(param) {
          return new Promise(resolve => {
            preload({
              bundle: param.bundle,
              path: param.path,
              type: param.type,
              onProgress: param.onProgress,
              onComplete: () => {
                resolve();
              }
            });
          });
        }
        _MAb.asyncPreload = asyncPreload;
        /**预加载文件夹 */
        function preloadDir(param) {
          getBundle(param.bundle, bundle => {
            bundle.preloadDir(param.path, param.type, param.onProgress, param.onComplete);
          });
        }
        function asyncPreloadDir(param) {
          return new Promise(resolve => {
            preloadDir({
              bundle: param.bundle,
              path: param.path,
              type: param.type,
              onProgress: param.onProgress,
              onComplete: () => {
                resolve();
              }
            });
          });
        }
        _MAb.asyncPreloadDir = asyncPreloadDir;
        function preloadScene(param) {
          getBundle(param.bundle, bundle => {
            bundle.preloadScene(param.scene, param.onProgress, e => {
              if (e) {
                console.log(e);
                return;
              }
              try {
                param == null || param.onComplete == null || param.onComplete();
              } catch (error) {}
            });
          });
        }
        _MAb.preloadScene = preloadScene;
        /**加载单个文件 */
        function load(param) {
          let overtime = setTimeout(() => {
            param == null || param.onTimeOut == null || param.onTimeOut();
          }, 60000);
          getBundle(param.bundle, bundle => {
            let onComplete = (e, asset) => {
              if (e) {
                console.log("path:", param.path);
                console.log(e);
                param == null || param.onError == null || param.onError();
                return;
              }
              try {
                clearTimeout(overtime);
                param.onComplete(asset);
              } catch (error) {}
            };
            if (param.type) {
              bundle.load(param.path, param.type, param.onProgress, onComplete);
            } else {
              bundle.load(param.path, param.onProgress, onComplete);
            }
          }, () => {
            clearTimeout(overtime);
            param == null || param.onError == null || param.onError();
          });
        }
        function asyncLoad(param) {
          return new Promise((resolve, reject) => {
            let name = param.bundle;
            let overtime = setTimeout(() => {
              console.warn(`[MAb] Load ${param.path} from ${name} timeout`);
              param == null || param.onTimeOut == null || param.onTimeOut();
              reject(new Error("Timeout"));
            }, 10000); // 缩短超时时间以便快速失败

            load({
              bundle: param.bundle,
              path: param.path,
              type: param.type,
              onComplete: asset => {
                clearTimeout(overtime);
                resolve(asset);
              },
              onError: () => {
                clearTimeout(overtime);
                param == null || param.onError == null || param.onError();
                reject(new Error("Load failed"));
              },
              onTimeOut: () => {
                // load 内部已经有 setTimeout 了，但为了双重保险
              }
            });
          });
        }
        _MAb.asyncLoad = asyncLoad;
        /**加载文件夹 */
        function loadDir(param) {
          getBundle(param.bundle, bundle => {
            bundle.loadDir(param.path, param.type, param.onProgress, (e, assets) => {
              if (e) {
                console.log(e);
                return;
              }
              try {
                param.onComplete(assets);
              } catch (error) {}
            });
          });
        }
        function asyncLoadDir(param) {
          return new Promise(resolve => {
            loadDir({
              bundle: param.bundle,
              path: param.path,
              type: param.type,
              onComplete: asset => {
                resolve(asset);
              },
              onProgress: param.onProgress
            });
          });
        }
        _MAb.asyncLoadDir = asyncLoadDir;
        function loadScene(param) {
          getBundle(param.bundle, bundle => {
            bundle.loadScene(param.scene, param.onProgress, (e, sceneAsset) => {
              if (e) {
                console.log(e);
                return;
              }
              director.runScene(sceneAsset, param == null ? void 0 : param.onBeforeLoadScene, param == null ? void 0 : param.onLaunched);
            });
          });
        }
        _MAb.loadScene = loadScene;
      })(MAb || (MAb = exports('MAb', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MApp.ts", ['cc', './MAb.ts', './MUi.ts', './MEvent.ts', './MHttp.ts', './MWebSocket.ts', './MAudio.ts', './MModel.ts', './MConfig.ts', './MI18n.ts', './MSchedule.ts', './MTween.ts', './MSkeleton.ts', './MToast.ts', './MNode.ts', './MPool.ts', './MCopy.ts', './MDebug.ts', './MUrlParam.ts', './SubSystemManager.ts', './PopupManager.ts'], function (exports) {
  var cclegacy, MAb, MUi, MEvent, MHttp, MWebSocket, MAudio, MModel, MConfig, MI18n, MSchedule, MTween, MSkeleton, MToast, MNode, MPool, MCopy, MDebug, MUrlParam, MSubSystem, PopupManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MAb = module.MAb;
    }, function (module) {
      MUi = module.MUi;
    }, function (module) {
      MEvent = module.MEvent;
    }, function (module) {
      MHttp = module.MHttp;
    }, function (module) {
      MWebSocket = module.MWebSocket;
    }, function (module) {
      MAudio = module.MAudio;
    }, function (module) {
      MModel = module.MModel;
    }, function (module) {
      MConfig = module.MConfig;
    }, function (module) {
      MI18n = module.MI18n;
    }, function (module) {
      MSchedule = module.MSchedule;
    }, function (module) {
      MTween = module.MTween;
    }, function (module) {
      MSkeleton = module.MSkeleton;
    }, function (module) {
      MToast = module.MToast;
    }, function (module) {
      MNode = module.MNode;
    }, function (module) {
      MPool = module.MPool;
    }, function (module) {
      MCopy = module.MCopy;
    }, function (module) {
      MDebug = module.MDebug;
    }, function (module) {
      MUrlParam = module.MUrlParam;
    }, function (module) {
      MSubSystem = module.MSubSystem;
    }, function (module) {
      PopupManager = module.PopupManager;
    }],
    execute: function () {
      exports('MApp', void 0);
      cclegacy._RF.push({}, "92db8MajOhII78QAdQBFqdi", "MApp", undefined);

      /**
       * 核心框架入口
       *
       * 职责：
       * 1. 将所有 Manager 注册到 globalThis，供大厅和游戏通过 globalThis 访问
       * 2. 初始化各子系统
       * 3. 提供进入大厅的入口
       */
      let MApp;
      (function (_MApp) {
        let _initialized = false;

        /** 所有需要暴露到 globalThis 的管理器 */
        const _managers = {
          MAb,
          MUi,
          MEvent,
          MHttp,
          MWebSocket,
          MAudio,
          // MCrypto,
          MModel,
          MConfig,
          MI18n,
          MSchedule,
          MTween,
          MSkeleton,
          MToast,
          MNode,
          MPool,
          MCopy,
          MDebug,
          MUrlParam,
          MSubSystem,
          MApp: null,
          // MApp 自身在下方注册
          PopupManager
        };

        /**
         * 初始化核心框架
         * 由 main-shell 在加载 core bundle 后调用
         */
        async function init() {
          if (_initialized) {
            console.warn('[MApp] 已初始化，跳过');
            return;
          }
          console.log('[MApp] 初始化核心框架...');

          // 注册所有 Manager 到 globalThis
          _managers.MApp = MApp;
          for (const [name, mgr] of Object.entries(_managers)) {
            globalThis[name] = mgr;
          }

          // 初始化 PopupManager
          PopupManager.init();
          _initialized = true;
          console.log('[MApp] 核心框架初始化完成，已注册', Object.keys(_managers).length, '个管理器');
        }
        _MApp.init = init;
        async function enterLobby() {
          console.log('[MApp] 进入大厅');
          const lobbyCtrl = globalThis.__lobbyController;
          if (lobbyCtrl && typeof lobbyCtrl.enter === 'function') {
            await lobbyCtrl.enter();
          } else {
            console.log('[MApp] LobbyController 未注册，加载 Lobby 场景...');
            return new Promise(resolve => {
              MAb.loadScene({
                bundle: 'lobby-casino',
                scene: 'Lobby',
                onLaunched: () => {
                  const ctrl = globalThis.__lobbyController;
                  if (ctrl && typeof ctrl.enter === 'function') {
                    ctrl.enter();
                  }
                  resolve();
                }
              });
            });
          }
        }
        _MApp.enterLobby = enterLobby;
        function isInitialized() {
          return _initialized;
        }
        _MApp.isInitialized = isInitialized;
      })(MApp || (MApp = exports('MApp', {}))); // 立即注册到 globalThis（core bundle 加载时即可用）
      globalThis.MApp = MApp;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MAudio.ts", ['cc', './MAb.ts', './MModel.ts', './Enum.ts'], function (exports) {
  var cclegacy, Node, director, AudioSource, MAb, EBundle, MModel, ESwitchStatus;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      director = module.director;
      AudioSource = module.AudioSource;
    }, function (module) {
      MAb = module.MAb;
      EBundle = module.EBundle;
    }, function (module) {
      MModel = module.MModel;
    }, function (module) {
      ESwitchStatus = module.ESwitchStatus;
    }],
    execute: function () {
      exports('MAudio', void 0);
      cclegacy._RF.push({}, "5c14daYAqJNPo17ZoftvPwP", "MAudio", undefined);

      /**
       * 通用音频枚举
       *
       * 游戏特定音频在游戏 bundle 中定义：
       *   const GameAudio = { Win: 'Win', Turntable: 'Turntable' } as const;
       *   MAudio.playOneShot(GameAudio.Win as any);
       */
      let EAudio = exports('EAudio', /*#__PURE__*/function (EAudio) {
        EAudio["BGM"] = "BGM";
        EAudio["Click"] = "Click";
        EAudio["Close"] = "Close";
        return EAudio;
      }({}));
      let MAudio;
      (function (_MAudio) {
        let _audioClips = new Map();
        let _playClipTimes = [];
        let _audioSourceMap = new Map();
        function getAudioSource(audioName) {
          let audioMgrName = `__audioMgr__${audioName}`;
          if (!_audioSourceMap.has(audioMgrName)) {
            let audioMgr = new Node(audioMgrName);
            director.getScene().addChild(audioMgr);
            director.addPersistRootNode(audioMgr);
            _audioSourceMap.set(audioMgrName, audioMgr.addComponent(AudioSource));
          }
          return _audioSourceMap.get(audioMgrName);
        }
        async function getAudioClip(audioName) {
          let audioClip;
          if (_audioClips.has(audioName)) {
            audioClip = _audioClips.get(audioName);
          } else {
            try {
              audioClip = await MAb.asyncLoad({
                bundle: EBundle.Audio,
                path: audioName
              });
              _audioClips.set(audioName, audioClip);
            } catch (e) {
              // 如果加载失败，缓存 null 以避免重复尝试加载不存在的 bundle
              _audioClips.set(audioName, null);
              console.warn(`[MAudio] Failed to load audio: ${audioName}`);
              return null;
            }
          }
          return audioClip;
        }

        /**播放音乐 */
        async function play(audioName, loop = true, volume = 1) {
          let audioSource = getAudioSource(audioName);
          audioSource.stop();
          audioSource.loop = loop;
          let clip = await getAudioClip(audioName);
          if (!clip) return;
          audioSource.clip = clip;
          audioSource.volume = volume;
          audioSource.play();
        }
        function playBGM(audioName, loop = true, volume = 1) {
          if (MModel.Set.getBGMSwitch() == ESwitchStatus.Close) {
            return;
          }
          play(audioName, loop, volume);
        }
        _MAudio.playBGM = playBGM;
        function playOneShot(audioName, loop = false) {
          if (MModel.Set.getSFXSwitch() == ESwitchStatus.Close) {
            return;
          }
          let nowDate = new Date().getTime();
          if (_playClipTimes[audioName] && nowDate - _playClipTimes[audioName] <= 100) {
            _playClipTimes[audioName] = nowDate;
            return;
          }
          play(audioName, loop);
        }
        _MAudio.playOneShot = playOneShot;
        function isPlaying(audioName) {
          return getAudioSource(audioName).playing;
        }
        _MAudio.isPlaying = isPlaying;
        function stop(audioName) {
          getAudioSource(audioName).stop();
        }
        _MAudio.stop = stop;
        function pause(audioName) {
          getAudioSource(audioName).pause();
        }
        _MAudio.pause = pause;
        async function resume(audioName, loop = true, volume = 1) {
          let audioSource = getAudioSource(audioName);
          audioSource.loop = loop;
          audioSource.clip = await getAudioClip(audioName);
          audioSource.volume = volume;
          audioSource.play();
        }
        _MAudio.resume = resume;
        function stopExclude(excludes) {
          let newExcludes = [];
          excludes == null || excludes.forEach == null || excludes.forEach(element => {
            newExcludes.push(`__audioMgr__${element}`);
          });
          _audioSourceMap.forEach((value, key) => {
            if (!newExcludes.includes(`${key}`)) {
              value.stop();
            }
          });
        }
        _MAudio.stopExclude = stopExclude;
      })(MAudio || (MAudio = exports('MAudio', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MConfig.ts", ['cc', './Config.ts'], function (exports) {
  var cclegacy, ConfigLocal, ConfigServer;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ConfigLocal = module.ConfigLocal;
      ConfigServer = module.ConfigServer;
    }],
    execute: function () {
      exports('MConfig', void 0);
      cclegacy._RF.push({}, "ccb70qX7alDmZ/vUGl9rOMJ", "MConfig", undefined);
      let MConfig;
      (function (_MConfig) {
        const configLocal = _MConfig.configLocal = new ConfigLocal();
        const configServer = _MConfig.configServer = new ConfigServer();
      })(MConfig || (MConfig = exports('MConfig', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MCopy.ts", ['cc', './MToast.ts'], function (exports) {
  var cclegacy, MToast;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MToast = module.MToast;
    }],
    execute: function () {
      exports('MCopy', void 0);
      cclegacy._RF.push({}, "1c4d8430lRMTLjIAWpbz4FG", "MCopy", undefined);
      let MCopy;
      (function (_MCopy) {
        function copyToClipBoard(value) {
          const textarea = document.createElement("textarea");
          textarea.value = value ?? "test";
          textarea.style.position = "absolute";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
          MToast.showCopied();
        }
        _MCopy.copyToClipBoard = copyToClipBoard;
      })(MCopy || (MCopy = exports('MCopy', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MDebug.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('MDebug', void 0);
      cclegacy._RF.push({}, "a9d05LvQ+xFAK3wU8qc7Hce", "MDebug", undefined);
      let MDebug;
      (function (_MDebug) {
        let _debug = false;
        function setDebug(debug) {
          _debug = debug;
        }
        _MDebug.setDebug = setDebug;
        function isDebug() {
          return _debug;
        }
        _MDebug.isDebug = isDebug;
      })(MDebug || (MDebug = exports('MDebug', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MEvent.ts", ['cc'], function (exports) {
  var cclegacy, EventTarget;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      exports('MEvent', void 0);
      cclegacy._RF.push({}, "ae3d4h/oF9LnL2u4NDvTNfQ", "MEvent", undefined);
      const eventTarget = new EventTarget();

      /**
       * 通用事件系统
       *
       * 基于 Cocos EventTarget 封装，使用字符串事件名
       *
       * 原版通过 EventDefinitions 做编译时类型检查，但导致 MEvent 和游戏消息类型深度耦合。
       * core 版改为通用字符串事件，由各业务模块自定义事件常量：
       *
       *   // 大厅事件
       *   const LobbyMsg = { UpdateBalance: 'UpdateBalance', OpenGame: 'OpenGame' } as const;
       *   MEvent.on(LobbyMsg.UpdateBalance, (balance: number) => { });
       *
       *   // 游戏事件（在游戏 bundle 中定义）
       *   const GameMsg = { BET_STAGE: 'BET_STAGE', DRAW_PRIZE: 'DRAW_PRIZE' } as const;
       *   MEvent.on(GameMsg.BET_STAGE, (data: IBetStage) => { });
       */
      let MEvent;
      (function (_MEvent) {
        function on(key, callback, target) {
          eventTarget.on(key, callback, target);
        }
        _MEvent.on = on;
        function once(key, callback, target) {
          eventTarget.once(key, callback, target);
        }
        _MEvent.once = once;
        function off(key, callback, target) {
          eventTarget.off(key, callback, target);
        }
        _MEvent.off = off;
        function emit(key, ...args) {
          eventTarget.emit(key, ...args);
        }
        _MEvent.emit = emit;
        function hasEventListener(key, callback, target) {
          return eventTarget.hasEventListener(key, callback, target);
        }
        _MEvent.hasEventListener = hasEventListener;
        function targetOff(typeOrTarget) {
          eventTarget.targetOff(typeOrTarget);
        }
        _MEvent.targetOff = targetOff;
        function removeAll(typeOrTarget) {
          eventTarget.removeAll(typeOrTarget);
        }
        _MEvent.removeAll = removeAll;
      })(MEvent || (MEvent = exports('MEvent', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MHttp.ts", ['cc', './MUi.ts'], function (exports) {
  var cclegacy, warn, MUi, EDialog, EUiAction;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      warn = module.warn;
    }, function (module) {
      MUi = module.MUi;
      EDialog = module.EDialog;
      EUiAction = module.EUiAction;
    }],
    execute: function () {
      exports('MHttp', void 0);
      cclegacy._RF.push({}, "6ea36fFTIhBDbmpNqtOuygE", "MHttp", undefined);
      let MHttp;
      (function (_MHttp) {
        let _token = "";
        let _themeKey = "";
        function setToken(token) {
          _token = token;
        }
        _MHttp.setToken = setToken;
        function setThemekey(themeKey) {
          _themeKey = themeKey;
        }
        _MHttp.setThemekey = setThemekey;
        function request(option) {
          const success = res => {
            option == null || option.success == null || option.success(res);
          };
          const fail = err => {
            warn(`request fail with url : "${option.url}"`);
            option == null || option.fail == null || option.fail(err);
          };
          const complete = res => {
            option == null || option.complete == null || option.complete(res);
          };
          let modalOption;
          let xhr = new XMLHttpRequest();
          xhr.open(option.method, option.url, true);
          xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
          if (_themeKey) {
            xhr.setRequestHeader("themeKey", _themeKey);
          }
          if (_token) {
            xhr.setRequestHeader("token", _token);
          }
          for (let key in option.header) {
            xhr.setRequestHeader(key, option.header[key]);
          }
          // 设置超时
          xhr.timeout = (option == null ? void 0 : option.timeout) ?? 5000;
          //请求完成的时候会触发
          xhr.onload = () => {
            let response = xhr.responseText;
            let res = {
              data: "",
              statusCode: xhr.status,
              header: {},
              errMsg: ""
            };
            try {
              let rsp = JSON.parse(response);
              res.data = rsp;
            } catch {
              res.data = xhr.responseText;
            }
            if (xhr.status >= 200 && xhr.status < 300) {
              var _res$data;
              if (((_res$data = res.data) == null ? void 0 : _res$data.code) == "00000") {
                let headers = xhr.getAllResponseHeaders().replace(/\r/g, "").split("\n");
                headers.forEach(v => {
                  var _kv$;
                  let kv = v.split(": ");
                  if (((_kv$ = kv[0]) == null ? void 0 : _kv$.length) > 0) {
                    res.header[kv[0]] = kv[1];
                  }
                });
                success(res);
              } else {
                var _res$data2;
                modalOption = {
                  title: "Tip",
                  content: (_res$data2 = res.data) == null ? void 0 : _res$data2.msg,
                  confirmText: "OK ",
                  showCancel: true
                };
                if (!(option != null && option.forbidModal)) {
                  MUi.showDialog(EDialog.Modal, {
                    data: modalOption,
                    action: EUiAction.BackOut
                  });
                }
                fail(res);
              }
            } else {
              if (xhr.status == 408 || xhr.status == 429 || xhr.status >= 500 && xhr.status < 600) {
                modalOption = {
                  title: "Error",
                  content: `Error Code:${xhr.status}!`,
                  confirmText: "Try Again ",
                  showCancel: true,
                  success: res => {
                    if (res.confirm) {
                      request(option);
                    }
                  }
                };
              } else {
                modalOption = {
                  title: "Error",
                  content: `Error Code:${xhr.status}!`,
                  confirmText: "OK ",
                  showCancel: true
                };
              }
              if (!(option != null && option.forbidModal)) {
                MUi.showDialog(EDialog.Modal, {
                  data: modalOption,
                  action: EUiAction.BackOut
                });
              }
              fail(res);
            }
            complete(res);
          };
          // 处理错误
          xhr.onerror = () => {
            modalOption = {
              title: "Error",
              content: `Network request failed!`,
              confirmText: "Try Again ",
              showCancel: true,
              success: res => {
                if (res.confirm) {
                  request(option);
                }
              }
            };
            if (!(option != null && option.forbidModal)) {
              MUi.showDialog(EDialog.Modal, {
                data: modalOption,
                action: EUiAction.BackOut
              });
            }
            fail({
              errMsg: 'Network request failed'
            });
            complete({
              errMsg: 'Network request failed'
            });
          };
          // 处理超时
          xhr.ontimeout = () => {
            modalOption = {
              title: "Error",
              content: `Request timed out!`,
              confirmText: "Try Again ",
              showCancel: true,
              success: res => {
                if (res.confirm) {
                  request(option);
                }
              }
            };
            if (!(option != null && option.forbidModal)) {
              MUi.showDialog(EDialog.Modal, {
                data: modalOption,
                action: EUiAction.BackOut
              });
            }
            fail({
              errMsg: 'Request timed out'
            });
            complete({
              errMsg: 'Request timed out'
            });
          };
          if (typeof option.data == "undefined") {
            xhr.send();
          } else {
            xhr.send(JSON.stringify(option.data));
          }
        }
        _MHttp.request = request;
      })(MHttp || (MHttp = exports('MHttp', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MI18n.ts", ['cc'], function (exports) {
  var cclegacy, sys, native;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      native = module.native;
    }],
    execute: function () {
      exports('MI18n', void 0);
      cclegacy._RF.push({}, "6fb1fIdfk1F4pHKnnfV38mY", "MI18n", undefined);
      // import * as i18n from 'db://i18n/LanguageData';
      let MI18n;
      (function (_MI18n) {
        // 项目支持的语言列表
        const SUPPORTED_LANGS = ['en'];

        // 语言代码映射表（系统语言 -> 项目语言）
        const LANGUAGE_MAPPING = {
          'zh-cn': 'zh',
          // 简体中文
          'zh-tw': 'zh',
          // 繁体中文（如果项目未区分简繁体）
          'en-us': 'en',
          // 英语（美国）
          'en-gb': 'en' // 英语（英国）
        };

        // 获取最终语言代码
        function resolveSystemLanguage() {
          return new Promise(async resolve => {
            const systemLang = await getSystemLanguage(); // 例如："zh-CN"
            const baseLang = systemLang.split('-')[0]; // 提取主代码："zh"
            // 优先匹配完整代码，再匹配主代码
            resolve(LANGUAGE_MAPPING[systemLang] || LANGUAGE_MAPPING[baseLang] || (SUPPORTED_LANGS.includes(baseLang) ? baseLang : 'en'));
          });
        }
        function getLanguange() {
          return 'en';
        }
        _MI18n.getLanguange = getLanguange;
        function autoInit(customLang) {
          return new Promise(async resolve => {
            // if (i18n.ready) {
            //     resolve();
            //     return;
            // }
            // 步骤1：获取系统语言
            const systemLang = await resolveSystemLanguage();
            // 步骤3：初始化 i18next
            // i18n.init(customLang ?? targetLang);
            resolve();
          });
        }
        _MI18n.autoInit = autoInit;
        function t(key, params) {
          return 'en';
        }
        _MI18n.t = t;
        function updateSceneRenderers() {
          // i18n.updateSceneRenderers();
        }
        _MI18n.updateSceneRenderers = updateSceneRenderers;
        function getSystemLanguage() {
          return new Promise(resolve => {
            if (sys.platform == sys.Platform.ANDROID) {
              native.reflection.callStaticMethod("org/cocos2dx/javascript/SystemHelper", "getSystemLanguage", "()Ljava/lang/String;", lang => resolve(lang));
            } else if (sys.platform == sys.Platform.IOS) {
              // 调用 Objective-C 方法（需绑定）
              resolve(window['getIOSSystemLanguage']());
            } else {
              resolve((navigator.language ||
              // 浏览器
              navigator['userLanguage'] ||
              // 旧版 IE
              'en' // 默认值
              ).toLowerCase());
            }
          });
        }
      })(MI18n || (MI18n = exports('MI18n', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MModel.ts", ['cc', './ModelSet.ts'], function (exports) {
  var cclegacy, ModelSet;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ModelSet = module.ModelSet;
    }],
    execute: function () {
      exports('MModel', void 0);
      cclegacy._RF.push({}, "30eedctqzRJyrd2gZ+gdJyT", "MModel", undefined);
      let MModel;
      (function (_MModel) {
        const Set = _MModel.Set = new ModelSet();
        function getData() {
          const data = {};
          data['Set'] = Set.getData();
          return JSON.stringify(data);
        }
        _MModel.getData = getData;
        function clear() {
          Set.syncData({
            sfxSwitch: 1,
            bgmSwitch: 1
          });
        }
        _MModel.clear = clear;
      })(MModel || (MModel = exports('MModel', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MNode.ts", ['cc', './Enum.ts'], function (exports) {
  var cclegacy, Node, Layers, v3, UITransform, view, ENode;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Layers = module.Layers;
      v3 = module.v3;
      UITransform = module.UITransform;
      view = module.view;
    }, function (module) {
      ENode = module.ENode;
    }],
    execute: function () {
      exports('MNode', void 0);
      cclegacy._RF.push({}, "c894ca9ZsBOGY34pEZ0s7bW", "MNode", undefined);
      let MNode;
      (function (_MNode) {
        let _canvas = null;
        let _gameUI = null;
        let _dialogRoot = null;
        let _panelRoot = null;
        function setNodes(param) {
          _canvas = param.canvas;
          _gameUI = param.gameUI;
        }
        _MNode.setNodes = setNodes;
        function getNode(node) {
          switch (node) {
            case ENode.Canvas:
              return _canvas;
            case ENode.GameUI:
              return _gameUI;
          }
        }
        _MNode.getNode = getNode;
        function getDialogRoot() {
          let canvas = MNode.getNode(ENode.Canvas);
          _dialogRoot = canvas.getChildByName("dialogRoot");
          if (!_dialogRoot) {
            _dialogRoot = new Node("dialogRoot");
            _dialogRoot.layer = Layers.Enum.UI_2D;
            canvas.addChild(_dialogRoot);
            _dialogRoot.setPosition(v3());
            _dialogRoot.setSiblingIndex(999);
            _dialogRoot.addComponent(UITransform).setContentSize(view.getVisibleSize());
          }
          return _dialogRoot;
        }
        _MNode.getDialogRoot = getDialogRoot;
        function getPanelRoot() {
          let canvas = MNode.getNode(ENode.Canvas);
          _panelRoot = canvas.getChildByName("panelRoot");
          if (!_panelRoot) {
            _panelRoot = new Node("panelRoot");
            _panelRoot.layer = Layers.Enum.UI_2D;
            canvas.addChild(_panelRoot);
            _panelRoot.setPosition(v3());
            _panelRoot.setSiblingIndex(0);
            _panelRoot.addComponent(UITransform).setContentSize(view.getVisibleSize());
          }
          return _panelRoot;
        }
        _MNode.getPanelRoot = getPanelRoot;
      })(MNode || (MNode = exports('MNode', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ModelSet.ts", ['cc', './BaseModel.ts', './Enum.ts'], function (exports) {
  var cclegacy, BaseModel, ESwitchStatus;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseModel = module.BaseModel;
    }, function (module) {
      ESwitchStatus = module.ESwitchStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0465feSfoNAa5IlHiUPB7uS", "ModelSet", undefined);
      class ModelSet extends BaseModel {
        constructor(...args) {
          super(...args);
          this.sfxSwitch = ESwitchStatus.Open;
          this.bgmSwitch = ESwitchStatus.Open;
        }
        getSFXSwitch() {
          return this.sfxSwitch;
        }
        setSFXSwith(sfxSwitch) {
          this.sfxSwitch = sfxSwitch;
        }
        getBGMSwitch() {
          return this.bgmSwitch;
        }
        setBGMSwith(bgmSwitch) {
          this.bgmSwitch = bgmSwitch;
        }
      }
      exports('ModelSet', ModelSet);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MPool.ts", ['cc', './MAb.ts'], function (exports) {
  var cclegacy, Component, NodePool, instantiate, EBundle, MAb;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
    }, function (module) {
      EBundle = module.EBundle;
      MAb = module.MAb;
    }],
    execute: function () {
      exports('MPool', void 0);
      cclegacy._RF.push({}, "23d65u4GLpAK6Gw4AmCGU0y", "MPool", undefined);
      let MPool;
      (function (_MPool) {
        /**记录组件 */
        class RecordComponent extends Component {
          constructor(...args) {
            super(...args);
            this.path = "";
          }
        }
        let pools = new Map();
        async function load(param) {
          if (!pools.has(param.path)) {
            pools.set(param.path, new NodePool());
          }
          if (pools.get(param.path).size() > 0) {
            try {
              param.onComplete(pools.get(param.path).get());
            } catch {}
          } else {
            let asset = await MAb.asyncLoad({
              bundle: param.bundle,
              path: param.path,
              onError: param.onError
            });
            let node = instantiate(asset);
            node.addComponent(RecordComponent).path = param.path;
            param.onComplete(node);
          }
        }
        function asyncLoad(param) {
          return new Promise(resolve => {
            load({
              path: param.path,
              bundle: param.bundle,
              onComplete: asset => {
                resolve(asset);
              },
              onError: param.onError
            });
          });
        }
        _MPool.asyncLoad = asyncLoad;
        function recovery(node) {
          var _node$getComponent;
          let path = (_node$getComponent = node.getComponent(RecordComponent)) == null ? void 0 : _node$getComponent.path;
          if (path) {
            if (pools.has(path)) {
              pools.get(path).put(node);
            } else {
              node == null || node.destroy();
            }
          } else {
            node == null || node.destroy();
          }
        }
        _MPool.recovery = recovery;
        function createAvater() {
          return new Promise(resolve => {
            load({
              bundle: EBundle.resources,
              path: "res/prefab/avater",
              onComplete: asset => {
                resolve(asset);
              }
            });
          });
        }
        _MPool.createAvater = createAvater;
        function creatTouchClose() {
          return new Promise(resolve => {
            load({
              bundle: EBundle.resources,
              path: "res/prefab/touchClose",
              onComplete: asset => {
                resolve(asset);
              }
            });
          });
        }
        _MPool.creatTouchClose = creatTouchClose;
      })(MPool || (MPool = exports('MPool', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MSchedule.ts", ['cc', './Tools.ts'], function (exports) {
  var cclegacy, Tools;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Tools = module.Tools;
    }],
    execute: function () {
      exports('MSchedule', void 0);
      cclegacy._RF.push({}, "1777fC3ppVP67+nE4RySsB1", "MSchedule", undefined);
      let MSchedule;
      (function (_MSchedule) {
        let regulars = [];
        function update(dt) {
          for (let i = 0; i < regulars.length; i++) {
            let regular = regulars[i];
            if (regular.count >= regular.repeat) continue;
            regular.timer += dt * 1000;
            if (regular.count == 0) {
              if (regular.timer >= regular.delay) {
                regular.timer = 0;
                regular.count++;
                regular.callback();
              }
            } else {
              if (regular.timer >= regular.interval) {
                regular.timer = 0;
                regular.count++;
                regular.callback();
              }
            }
          }
        }
        _MSchedule.update = update;
        function repeat(callback, interval, repeat, delay, target) {
          let serialnum = Tools.genOrderSerialnumber();
          regulars.push({
            serialnum: serialnum,
            timer: 0,
            interval: interval,
            repeat: repeat,
            count: 0,
            delay: delay,
            callback: callback,
            target: target
          });
          return serialnum;
        }
        _MSchedule.repeat = repeat;
        function delay(callback, delayTime, target) {
          let serialnum = Tools.genOrderSerialnumber();
          regulars.push({
            serialnum: serialnum,
            timer: 0,
            interval: Infinity,
            repeat: 1,
            count: 0,
            delay: delayTime,
            callback: callback,
            target: target
          });
          return serialnum;
        }
        _MSchedule.delay = delay;
        function sleep(delayTime, target, outSerialnum) {
          return new Promise(resolve => {
            delay(() => {
              resolve();
            }, delayTime, target);
          });
        }
        _MSchedule.sleep = sleep;
        function targetOff(target) {
          for (let i = 0; i < regulars.length; i++) {
            var _regular$target;
            let regular = regulars[i];
            if ((regular == null || (_regular$target = regular.target) == null ? void 0 : _regular$target.uuid) == (target == null ? void 0 : target.uuid)) {
              regulars.splice(i, 1);
              i--;
            }
          }
        }
        _MSchedule.targetOff = targetOff;
        function unschedule(serialnum) {
          let index = regulars.findIndex(a => a.serialnum == serialnum);
          if (index > -1) {
            regulars.splice(index, 1);
          }
        }
        _MSchedule.unschedule = unschedule;
        function updateInterval(param) {
          let regular = regulars.find(a => a.serialnum == param.serialnum);
          if (regular) {
            regular.interval = param.interval;
          }
        }
        _MSchedule.updateInterval = updateInterval;
        function updateDelay(param) {
          let regular = regulars.find(a => a.serialnum == param.serialnum);
          if (regular) {
            if (param.floatAmount != undefined) {
              regular.delay += param.floatAmount;
            }
            if (param.fixAmount != undefined) {
              regular.delay = param.fixAmount;
            }
          }
        }
        _MSchedule.updateDelay = updateDelay;
        function clear() {
          regulars = [];
        }
        _MSchedule.clear = clear;
      })(MSchedule || (MSchedule = exports('MSchedule', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MSkeleton.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('MSkeleton', void 0);
      cclegacy._RF.push({}, "253e6Ys3ohHL5InhuL52crd", "MSkeleton", undefined);
      let MSkeleton;
      (function (_MSkeleton) {
        let nsSpeed = 1;
        let nsSkeletons = [];
        function pause(skt) {
          nsSkeletons.forEach(element => {
            var _element$skt;
            if ((element == null || (_element$skt = element.skt) == null ? void 0 : _element$skt.uuid) == skt.uuid) {
              element.skt.timeScale = 0;
            }
          });
        }
        _MSkeleton.pause = pause;
        function resume(skt) {
          nsSkeletons.forEach(element => {
            var _element$skt2;
            if ((element == null || (_element$skt2 = element.skt) == null ? void 0 : _element$skt2.uuid) == skt.uuid) {
              element.skt.timeScale = nsSpeed * element.timeScale;
            }
          });
        }
        _MSkeleton.resume = resume;
        function updateTotalSkeletonSpeed(speed) {
          nsSpeed = speed;
          nsSkeletons.forEach(element => {
            var _element$skt3;
            if (element != null && (_element$skt3 = element.skt) != null && (_element$skt3 = _element$skt3.node) != null && _element$skt3.isValid) {
              element.skt.timeScale = nsSpeed * element.timeScale;
            }
          });
        }
        _MSkeleton.updateTotalSkeletonSpeed = updateTotalSkeletonSpeed;
        function setAnimation(param) {
          param.skeleton.setCompleteListener(null);
          param.skeleton.setEventListener(null);
          param.skeleton.timeScale = nsSpeed * ((param == null ? void 0 : param.timeScale) ?? 1);
          let defaultSkin = (param == null ? void 0 : param.skin) ?? param.skeleton["defaultSkin"];
          if (!defaultSkin) {
            defaultSkin = "default";
          }
          param.skeleton.setSkin(defaultSkin);
          let TrackEntry = param.skeleton.setAnimation((param == null ? void 0 : param.trackIndex) ?? 0, param.name, !!(param != null && param.loop));
          nsSkeletons.push({
            skt: param.skeleton,
            target: param == null ? void 0 : param.target,
            timeScale: (param == null ? void 0 : param.timeScale) ?? 1
          });
          return TrackEntry;
        }
        _MSkeleton.setAnimation = setAnimation;
        function setCompleteListener(skeleton, completeListener) {
          skeleton.setCompleteListener(() => {
            skeleton.setCompleteListener(null);
            completeListener == null || completeListener();
          });
        }
        _MSkeleton.setCompleteListener = setCompleteListener;
        function setEventListener(skeleton, eventNames, eventListener) {
          skeleton.setEventListener((res1, res2) => {
            if (eventNames.indexOf(res2.data.name) > -1) {
              eventListener == null || eventListener();
            }
          });
        }
        _MSkeleton.setEventListener = setEventListener;
        function targetOff(target) {
          for (let i = 0; i < nsSkeletons.length; i++) {
            var _nsSkeletons$i, _nsSkeletons$i2, _nsSkeletons$i3;
            if (!((_nsSkeletons$i = nsSkeletons[i]) != null && (_nsSkeletons$i = _nsSkeletons$i.skt) != null && (_nsSkeletons$i = _nsSkeletons$i.node) != null && _nsSkeletons$i.uuid) || ((_nsSkeletons$i2 = nsSkeletons[i]) == null || (_nsSkeletons$i2 = _nsSkeletons$i2.skt) == null || (_nsSkeletons$i2 = _nsSkeletons$i2.node) == null ? void 0 : _nsSkeletons$i2.uuid) == target.node.uuid || ((_nsSkeletons$i3 = nsSkeletons[i]) == null || (_nsSkeletons$i3 = _nsSkeletons$i3.target) == null || (_nsSkeletons$i3 = _nsSkeletons$i3.node) == null ? void 0 : _nsSkeletons$i3.uuid) == target.node.uuid) {
              nsSkeletons[i].skt.setCompleteListener(null);
              nsSkeletons[i].skt.setEventListener(null);
              nsSkeletons.splice(i, 1);
              i--;
            }
          }
        }
        _MSkeleton.targetOff = targetOff;
        function clear() {
          nsSkeletons = [];
        }
        _MSkeleton.clear = clear;
      })(MSkeleton || (MSkeleton = exports('MSkeleton', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MToast.ts", ['cc', './MAb.ts', './MPool.ts', './MSchedule.ts', './MNode.ts', './Enum.ts'], function (exports) {
  var cclegacy, Label, v3, UIOpacity, tween, EBundle, MPool, MSchedule, MNode, ENode;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
    }, function (module) {
      EBundle = module.EBundle;
    }, function (module) {
      MPool = module.MPool;
    }, function (module) {
      MSchedule = module.MSchedule;
    }, function (module) {
      MNode = module.MNode;
    }, function (module) {
      ENode = module.ENode;
    }],
    execute: function () {
      exports('MToast', void 0);
      cclegacy._RF.push({}, "1c94d6BRvxF3IyBHAF+L7vC", "MToast", undefined);
      let MToast;
      (function (_MToast) {
        let stacks = [];
        let moveUping = false;
        let lastTitle = "";
        let showingCopied = false;
        async function showToast(param) {
          if (moveUping) {
            if (stacks.length > 0) {
              if (param.title != stacks[stacks.length - 1].title) {
                stacks.push(param);
              }
            } else {
              if (param.title != lastTitle) {
                stacks.push(param);
              }
            }
            return;
          }
          moveUping = true;
          let node = await MPool.asyncLoad({
            bundle: EBundle.resources,
            path: "res/prefab/toast"
          });
          lastTitle = param.title;
          node.getComponentInChildren(Label).string = param.title;
          let canvas = MNode.getNode(ENode.Canvas);
          canvas.addChild(node);
          node.setPosition(v3(0, 0));
          node.setSiblingIndex(9999);
          let uiOpacity = node.getComponent(UIOpacity);
          tween(node).parallel(tween().call(() => {
            node.setPosition(v3());
          }).to(0.3, {
            position: v3(0, 100, 0)
          }).delay(1.2).to(0.3, {
            position: v3(0, 200, 0)
          }), tween(uiOpacity).call(() => {
            uiOpacity.opacity = 0;
          }).to(0.3, {
            opacity: 255
          }).delay(1.2).to(0.3, {
            opacity: 0
          })).call(() => {
            moveUping = false;
            if (stacks.length > 0) {
              let item = stacks.shift();
              showToast(item);
            } else {
              MPool.recovery(node);
            }
          }).start();
        }
        _MToast.showToast = showToast;
        async function showCopied() {
          if (showingCopied) return;
          showingCopied = true;
          let canvas = MNode.getNode(ENode.Canvas);
          let ndCopied = canvas.getChildByName("copied");
          if (!ndCopied) {
            ndCopied = await MPool.asyncLoad({
              bundle: EBundle.resources,
              path: "res/prefab/copied"
            });
          }
          ndCopied.getComponent(UIOpacity).opacity = 255;
          canvas.addChild(ndCopied);
          ndCopied.setPosition(v3());
          MSchedule.delay(() => {
            ndCopied.getComponent(UIOpacity).opacity = 0;
            showingCopied = false;
          }, 1000);
        }
        _MToast.showCopied = showCopied;
      })(MToast || (MToast = exports('MToast', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MTween.ts", ['cc'], function (exports) {
  var cclegacy, Tween, tween, v3, UIOpacity;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
    }],
    execute: function () {
      exports('MTween', void 0);
      cclegacy._RF.push({}, "d01c6ZBt11EBIpUrj9B84sn", "MTween", undefined);
      let MTween;
      (function (_MTween) {
        function jelly(param) {
          Tween.stopAllByTarget(param.node);
          let startScale;
          if (param.startScale != null) {
            startScale = param.startScale;
          } else {
            startScale = param.node.scale;
          }
          tween(param.node).set({
            scale: startScale
          }).to(0.1, {
            scale: startScale.clone().add(v3(0.2, 0.2, 1))
          }).to(0.1, {
            scale: startScale
          }).to(0.1, {
            scale: startScale.clone().add(v3(0.1, 0.1, 1))
          }).to(0.1, {
            scale: startScale
          }).to(0.1, {
            scale: startScale.clone().add(v3(0.05, 0.05, 1))
          }).to(0.1, {
            scale: startScale
          }).delay((param.interval ?? 1000) / 1000).union().repeat(Math.min(999999999, param.repeat ?? 999999999)).start();
        }
        _MTween.jelly = jelly;
        function breath(node) {
          Tween.stopAllByTarget(node);
          tween(node).set({
            scale: v3(1, 1, 1)
          }).to(0.18, {
            scale: v3(1.05, 1.05, 1)
          }).to(0.18, {
            scale: v3(1, 1, 1)
          }).to(0.18, {
            scale: v3(0.95, 0.95, 1)
          }).to(0.18, {
            scale: v3(1, 1, 1)
          }).union().repeatForever().start();
        }
        _MTween.breath = breath;
        function swing(node) {
          Tween.stopAllByTarget(node);
          tween(node).set({
            angle: 0
          }).to(0.06, {
            angle: 10
          }).to(0.06, {
            angle: 0
          }).to(0.06, {
            angle: -10
          }).to(0.06, {
            angle: 0
          }).to(0.06, {
            angle: 10
          }).to(0.06, {
            angle: 0
          }).to(0.06, {
            angle: -10
          }).to(0.06, {
            angle: 0
          }).to(0.06, {
            angle: 10
          }).to(0.06, {
            angle: 0
          }).to(0.06, {
            angle: -10
          }).to(0.06, {
            angle: 0
          }).delay(1).union().repeatForever().start();
        }
        _MTween.swing = swing;
        function infiniteRotate(node) {
          Tween.stopAllByTarget(node);
          tween(node).set({
            angle: 0
          }).to(5, {
            angle: -359
          }).union().repeatForever().start();
        }
        _MTween.infiniteRotate = infiniteRotate;
        function twinkle(node) {
          Tween.stopAllByTarget(node);
          tween(node.getComponent(UIOpacity)).set({
            opacity: 255
          }).to(0.5, {
            opacity: 50
          }).to(0.5, {
            opacity: 255
          }).union().repeatForever().start();
        }
        _MTween.twinkle = twinkle;
      })(MTween || (MTween = exports('MTween', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MUi.ts", ['cc', './MAb.ts', './MAudio.ts', './MNode.ts', './Enum.ts', './MConfig.ts'], function (exports) {
  var cclegacy, Node, Layers, v3, UITransform, view, instantiate, BlockInputEvents, UIOpacity, Component, Sprite, Label, Color, tween, Tween, easing, MAb, EBundle, MAudio, EAudio, MNode, ENode, MConfig;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Layers = module.Layers;
      v3 = module.v3;
      UITransform = module.UITransform;
      view = module.view;
      instantiate = module.instantiate;
      BlockInputEvents = module.BlockInputEvents;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
      Sprite = module.Sprite;
      Label = module.Label;
      Color = module.Color;
      tween = module.tween;
      Tween = module.Tween;
      easing = module.easing;
    }, function (module) {
      MAb = module.MAb;
      EBundle = module.EBundle;
    }, function (module) {
      MAudio = module.MAudio;
      EAudio = module.EAudio;
    }, function (module) {
      MNode = module.MNode;
    }, function (module) {
      ENode = module.ENode;
    }, function (module) {
      MConfig = module.MConfig;
    }],
    execute: function () {
      exports('MUi', void 0);
      cclegacy._RF.push({}, "33984UnRsNNL5OJfxhQoVTG", "MUi", undefined);

      /**
       * 面板枚举（由各业务模块扩展）
       *
       * 游戏 bundle 中定义自己的面板：
       *   const GamePanel = { Main: 'Main/res/PanelMain' } as const;
       *   MUi.showPanel(GamePanel.Main as any);
       */
      let EPanel = exports('EPanel', /*#__PURE__*/function (EPanel) {
        EPanel["Temp"] = "";
        return EPanel;
      }({}));

      /**
       * 弹窗枚举（由各业务模块扩展）
       *
       * 核心弹窗在此定义，游戏特定弹窗在游戏 bundle 中定义：
       *   const GameDialog = { YouWin: 'YouWin/res/DialogYouWin' } as const;
       *   MUi.showDialog(GameDialog.YouWin as any);
       */
      let EDialog = exports('EDialog', /*#__PURE__*/function (EDialog) {
        EDialog["Loading"] = "Loading/res/DialogLoading";
        EDialog["Modal"] = "Modal/res/DialogModal";
        EDialog["Reconnect"] = "Reconnect/res/DialogReconnect";
        return EDialog;
      }({}));

      /**抽屉 */
      let EDrawer = exports('EDrawer', /*#__PURE__*/function (EDrawer) {
        return EDrawer;
      }({}));
      var EUiState = /*#__PURE__*/function (EUiState) {
        EUiState[EUiState["None"] = 0] = "None";
        EUiState[EUiState["Loading"] = 1] = "Loading";
        EUiState[EUiState["Loaded"] = 2] = "Loaded";
        return EUiState;
      }(EUiState || {});
      /**ui动画 */
      let EUiAction = exports('EUiAction', /*#__PURE__*/function (EUiAction) {
        EUiAction[EUiAction["None"] = 0] = "None";
        EUiAction[EUiAction["BackOut"] = 1] = "BackOut";
        return EUiAction;
      }({}));

      /**ui参数 */

      /**面板参数 */

      /**弹框参数 */
      let MUi;
      (function (_MUi) {
        /**弹窗名称 节点 */
        let nsDialogMap = new Map();
        /**面板名称 节点 */
        let nsPanelMap = new Map();
        let nsPanelSet = new Set();
        let nsUiStateMap = new Map();
        let nsCurrentPanel = null;
        let nsDialogParams = [];
        class BaseUI extends Component {
          constructor(...args) {
            super(...args);
            this.uiOption = void 0;
            this.covereState = "none";
          }
          onEnable() {}
          init() {}
          /**被最上层覆盖 */
          covered() {}
          /**被暴露在最顶层 */
          exposed() {}
          getCoverState() {
            return this.covereState;
          }
          setCoverState(state) {
            this.covereState = state;
          }
          onDisable() {
            var _this$uiOption;
            (_this$uiOption = this.uiOption) == null || _this$uiOption.onHide == null || _this$uiOption.onHide();
          }
        }
        class BaseDialog extends BaseUI {
          constructor(...args) {
            super(...args);
            this.dialogName = void 0;
          }
          init() {}
          setProperties(param) {
            this.uiOption = param == null ? void 0 : param.uiOption;
            this.dialogName = param.dialogName;
          }
          destroyDialog() {
            var _this$node;
            if (nsUiStateMap.has(this.dialogName)) {
              nsUiStateMap.delete(this.dialogName);
            }
            if (nsDialogMap.has(this.dialogName)) {
              nsDialogMap.delete(this.dialogName);
            }
            if (nsDialogMap.size == 0) {
              nsPanelMap.forEach(element => {
                let basePanel = element.getComponent(BasePanel);
                if (basePanel) {
                  if (basePanel.getCoverState() != "exposed") {
                    basePanel.setCoverState("exposed");
                    basePanel.exposed();
                  }
                }
              });
            } else {
              let exposedDialog = MNode.getDialogRoot().children[nsDialogMap.size - 1];
              if (exposedDialog) {
                let baseDialog = exposedDialog.getComponentInChildren(BaseDialog);
                if (baseDialog) {
                  if (baseDialog.getCoverState() != "covered") {
                    baseDialog.setCoverState("covered");
                    baseDialog.covered();
                  }
                }
              }
            }
            (_this$node = this.node) == null || (_this$node = _this$node.parent) == null || _this$node.destroy == null || _this$node.destroy();
          }
          onClickClose() {
            MAudio.playOneShot(EAudio.Close);
            this.destroyDialog();
          }
          attachClickClose() {
            let node = new Node();
            node.layer = Layers.Enum.UI_2D;
            node.setParent(this.node.parent);
            node.setPosition(v3());
            node.addComponent(UITransform).setContentSize(view.getVisibleSize());
            node.setSiblingIndex(9999);
            node.on(Node.EventType.TOUCH_END, () => {
              this.destroyDialog();
            }, this);
          }
          attachCustomClick(callback) {
            let node = new Node();
            node.layer = Layers.Enum.UI_2D;
            node.setParent(this.node.parent);
            node.setPosition(v3());
            node.addComponent(UITransform).setContentSize(view.getVisibleSize());
            node.setSiblingIndex(9999);
            node.on(Node.EventType.TOUCH_END, () => {
              callback();
            }, this);
          }
          onDisable() {
            super.onDisable();
          }
        }
        _MUi.BaseDialog = BaseDialog;
        class BasePanel extends BaseUI {
          constructor(...args) {
            super(...args);
            this.panelName = void 0;
          }
          setProperties(param) {
            this.uiOption = param == null ? void 0 : param.uiOption;
            this.panelName = param.panelName;
          }
          destroyPanel() {
            var _this$node2;
            (_this$node2 = this.node) == null || _this$node2.destroy == null || _this$node2.destroy();
            nsPanelMap.delete(this.panelName);
          }
          onClickClose() {
            MAudio.playOneShot(EAudio.Close);
            this.destroyPanel();
          }
          onDisable() {
            super.onDisable();
          }
        }
        _MUi.BasePanel = BasePanel;
        async function showDialog(dialogName, dialogOption) {
          let uiState = nsUiStateMap.get(dialogName);
          if (uiState == EUiState.Loading) return;
          nsUiStateMap.set(dialogName, EUiState.Loading);
          let handle = node => {
            nsUiStateMap.set(dialogName, EUiState.Loaded);
            let dialog = node.getComponent(BaseDialog);
            if (dialog) {
              dialog.setProperties({
                uiOption: dialogOption,
                dialogName: dialogName
              });
              dialog.init();
            } else {
              console.warn(`[MUi] Node for ${dialogName} does not have BaseDialog component.`);
            }
            dialogOption == null || dialogOption.onShow == null || dialogOption.onShow(node.parent);
            switch (dialogOption == null ? void 0 : dialogOption.action) {
              case EUiAction.BackOut:
                tween(node).set({
                  scale: v3(0.72, 0.72, 1)
                }).to(0.3, {
                  scale: v3(1, 1, 1)
                }, {
                  easing: easing.backOut
                }).start();
                break;
            }
            nsPanelMap.forEach(element => {
              let basePanel = element.getComponent(BasePanel);
              if (basePanel) {
                if (basePanel.getCoverState() != "covered") {
                  basePanel.setCoverState("covered");
                  basePanel.covered();
                }
              }
            });
            nsDialogMap.forEach((element, dialog) => {
              if (dialog != dialogName) {
                let baseDialog = element.getComponentInChildren(BaseDialog);
                if (baseDialog) {
                  if (baseDialog.getCoverState() != "covered") {
                    baseDialog.setCoverState("covered");
                    baseDialog.covered();
                  }
                }
              }
            });
          };
          let loadDialog = async loading => {
            try {
              let prf = await MAb.asyncLoad({
                bundle: (dialogOption == null ? void 0 : dialogOption.bundle) || EBundle.Dialog,
                path: dialogName,
                onTimeOut: () => {
                  console.warn("资源加载超时");
                }
              });
              let node = instantiate(prf);
              let width = Math.min(MConfig.configLocal.maxWidth, view.getVisibleSize().width);
              let height = view.getVisibleSize().height;
              node.scale = v3(width / 780, width / 780, 1);
              node.getComponent(UITransform).height = height / node.scale.y;
              let shell = await shellDialog({
                dialog: node,
                customBg: dialogOption == null ? void 0 : dialogOption.customBg,
                tapToClose: dialogOption == null ? void 0 : dialogOption.tapToClose,
                noCloseHit: dialogOption == null ? void 0 : dialogOption.noCloseHit
              });
              nsDialogMap.set(dialogName, shell);
              shell.setParent(MNode.getDialogRoot());
              shell.setPosition(v3());
              handle(node);
            } catch (e) {
              console.error(`[MUi] Failed to load dialog ${dialogName}:`, e);
              nsUiStateMap.delete(dialogName); // 允许重试
            } finally {
              if (loading) {
                Tween.stopAllByTarget(loading);
                loading.active = false;
              }
            }
          };
          let showLoading = loading => {
            if (!loading) return;
            loading.active = true;
            let uiOpacity = loading.getComponent(UIOpacity);
            if (!uiOpacity) {
              uiOpacity = loading.addComponent(UIOpacity);
            }
            tween(uiOpacity).set({
              opacity: 0
            }).to(0.2, {
              opacity: 255
            }).start();
          };
          let canvas = MNode.getNode(ENode.Canvas);
          let loading = canvas == null ? void 0 : canvas.getChildByName("DialogLoading");
          if (!loading && canvas) {
            try {
              let prf = await MAb.asyncLoad({
                bundle: EBundle.Dialog,
                path: EDialog.Loading
              });
              loading = instantiate(prf);
              canvas.addChild(loading);
              loading.setPosition(v3());
              loading.addComponent(UITransform).setContentSize(view.getVisibleSize());
            } catch (e) {
              // 如果 DialogLoading 加载失败，创建一个临时的遮罩层以阻塞输入
              loading = new Node("DialogLoading");
              loading.addComponent(BlockInputEvents);
              loading.addComponent(UITransform).setContentSize(view.getVisibleSize());
              canvas.addChild(loading);
              // 这里不再 warn，因为 MAb 已经处理了
            }
          }

          showLoading(loading);
          loadDialog(loading);
        }
        _MUi.showDialog = showDialog;
        function showPanel(panelName, panelOption) {
          nsCurrentPanel = panelName;
          let handle = node => {
            let panel = node.getComponent(BasePanel);
            panel.setProperties({
              uiOption: panelOption,
              panelName: panelName
            });
            panel.init();
            panelOption == null || panelOption.onShow == null || panelOption.onShow(node);
            switch (panelOption == null ? void 0 : panelOption.action) {
              case EUiAction.BackOut:
                tween(node).set({
                  scale: v3(0.72, 0.72, 1)
                }).to(0.3, {
                  scale: v3(1, 1, 1)
                }, {
                  easing: easing.backOut
                }).start();
                break;
            }
            let splits = nsCurrentPanel.split("/");
            if (splits[splits.length - 1] != node.name) {
              node.destroy();
            }
          };
          if (nsPanelMap.has(panelName)) {
            let panel = nsPanelMap.get(panelName);
            panel.position = v3(0, panel.position.y);
            let uiOpacity = panel.getComponent(UIOpacity);
            if (!uiOpacity) {
              uiOpacity = panel.addComponent(UIOpacity);
            }
            uiOpacity.opacity = 255;
            handle(panel);
            return;
          }
          if (nsPanelSet.has(panelName)) {
            return;
          }
          nsPanelSet.add(panelName);
          let loadPanel = async () => {
            let prf = await MAb.asyncLoad({
              bundle: EBundle.Panel,
              path: panelName,
              onTimeOut: () => {
                console.warn("资源加载超时");
              }
            });
            let node = instantiate(prf);
            node.addComponent(UITransform).setContentSize(view.getVisibleSize());
            nsPanelMap.set(panelName, node);
            node.setParent(MNode.getPanelRoot());
            node.setPosition(v3());
            handle(node);
          };
          loadPanel();
        }
        _MUi.showPanel = showPanel;
        function showDialogs(params) {
          nsDialogParams = params;
          let recursion = () => {
            if (params.length > 0) {
              var _dialog$option, _dialog$option2;
              let dialog = params.shift();
              showDialog(dialog.dialogName, {
                data: dialog == null || (_dialog$option = dialog.option) == null ? void 0 : _dialog$option.data,
                action: dialog == null || (_dialog$option2 = dialog.option) == null ? void 0 : _dialog$option2.action,
                onShow: () => {
                  var _dialog$option3;
                  dialog == null || (_dialog$option3 = dialog.option) == null || _dialog$option3.onShow == null || _dialog$option3.onShow();
                  if (dialog != null && dialog.onShowLoadAfter) {
                    recursion();
                  }
                },
                onHide: () => {
                  var _dialog$option4;
                  dialog == null || (_dialog$option4 = dialog.option) == null || _dialog$option4.onHide == null || _dialog$option4.onHide();
                  if (dialog != null && dialog.onHideLoadAfter) {
                    recursion();
                  }
                }
              });
            }
          };
          recursion();
        }
        _MUi.showDialogs = showDialogs;
        function unshiftShowDialog(dialogName, option) {
          if (nsDialogParams.length == 0) {
            showDialog(dialogName, option);
          } else {
            nsDialogParams.unshift({
              dialogName: dialogName,
              option: option
            });
          }
        }
        _MUi.unshiftShowDialog = unshiftShowDialog;
        function pushShowDialog(dialogName, option) {
          if (nsDialogParams.length == 0) {
            showDialog(dialogName, option);
          } else {
            nsDialogParams.push({
              dialogName: dialogName,
              option: option
            });
          }
        }
        _MUi.pushShowDialog = pushShowDialog;
        function destroyDialog(dialogName) {
          if (nsDialogMap.has(dialogName)) {
            if (nsDialogMap.get(dialogName).isValid) {
              var _nsDialogMap$get;
              (_nsDialogMap$get = nsDialogMap.get(dialogName)) == null || _nsDialogMap$get.destroy == null || _nsDialogMap$get.destroy();
              nsDialogMap.delete(dialogName);
              if (nsUiStateMap.has(dialogName)) {
                nsUiStateMap.delete(dialogName);
              }
            }
          }
        }
        _MUi.destroyDialog = destroyDialog;
        function destroyPanel(panelName) {
          if (nsPanelMap.has(panelName)) {
            if (nsPanelMap.get(panelName).isValid) {
              var _nsPanelMap$get;
              (_nsPanelMap$get = nsPanelMap.get(panelName)) == null || _nsPanelMap$get.destroy == null || _nsPanelMap$get.destroy();
              nsPanelMap.delete(panelName);
            }
          }
        }
        _MUi.destroyPanel = destroyPanel;
        function destroyAllDialog() {
          nsDialogMap.forEach(element => {
            element == null || element.destroy == null || element.destroy();
          });
          nsDialogMap.clear();
        }
        _MUi.destroyAllDialog = destroyAllDialog;
        function destroyAllPanel() {
          nsPanelMap.forEach(element => {
            element == null || element.destroy == null || element.destroy();
          });
          nsPanelMap.clear();
        }
        _MUi.destroyAllPanel = destroyAllPanel;
        function getCurrentPanel() {
          return nsCurrentPanel;
        }
        _MUi.getCurrentPanel = getCurrentPanel;
        function isDialogShown(dialogName) {
          return nsUiStateMap.has(dialogName);
        }
        _MUi.isDialogShown = isDialogShown;
        function shellDialog(param) {
          return new Promise(async resolve => {
            let shell = new Node("shell");
            shell.layer = Layers.Enum.UI_2D;
            shell.addComponent(UITransform).setContentSize(view.getVisibleSize());
            shell.addComponent(BlockInputEvents);
            if (param.customBg) {
              try {
                let spf = await MAb.asyncLoad({
                  bundle: EBundle.resources,
                  path: param.customBg
                });
                shell.addComponent(Sprite).spriteFrame = spf;
              } catch (e) {
                console.warn(`[MUi] Custom background load failed: ${param.customBg}`);
              }
            } else {
              let block = new Node("block");
              block.layer = Layers.Enum.UI_2D;
              block.setParent(shell);
              let uiOpacity = block.getComponent(UIOpacity);
              if (!uiOpacity) {
                uiOpacity = block.addComponent(UIOpacity);
              }
              uiOpacity.opacity = 186;
              block.addComponent(UITransform).setContentSize(view.getVisibleSize());
            }
            if (param.tapToClose) {
              shell.on(Node.EventType.TOUCH_END, () => {
                let dialog = param.dialog.getComponent(BaseDialog);
                if (dialog) {
                  dialog.onClickClose();
                } else {
                  shell.destroy();
                }
              }, this);
              if (!param.noCloseHit) {
                let tip = new Node("tap_close_tip");
                tip.layer = Layers.Enum.UI_2D;
                shell.addChild(tip);
                tip.setPosition(v3(0, -905, 0));
                let uiOpacity = tip.addComponent(UIOpacity);
                let label = tip.addComponent(Label);
                label.string = "- Tap to close -";
                label.fontSize = 36;
                label.lineHeight = 40;
                label.color = Color.WHITE;

                // Pulsing animation for the tip
                tween(uiOpacity).repeatForever(tween().to(1, {
                  opacity: 100
                }).to(1, {
                  opacity: 255
                })).start();
              }
            }
            param.dialog.setParent(shell);
            resolve(shell);
          });
        }
        function clear() {
          nsDialogMap.clear();
          nsPanelMap.clear();
          nsUiStateMap.clear();
          nsCurrentPanel = null;
          nsPanelSet = new Set();
          nsDialogParams = [];
        }
        _MUi.clear = clear;
      })(MUi || (MUi = exports('MUi', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MUrlParam.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('MUrlParam', void 0);
      cclegacy._RF.push({}, "7527cuoLKVOo5MPjV4cfl+u", "MUrlParam", undefined);
      // import { MCrypto } from "./MCrypto";
      let MUrlParam;
      (function (_MUrlParam) {
        function get(key) {
          let param = new URLSearchParams(window.location.search.split("params=")[1]);
          return param.get(key);
        }
        _MUrlParam.get = get;
      })(MUrlParam || (MUrlParam = exports('MUrlParam', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MWebSocket.ts", ['cc', './socket.io.mjs_cjs=&original=.js', './socket.io.js'], function (exports) {
  var cclegacy, game, Game, _cjsExports;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
      Game = module.Game;
    }, null, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      exports('MWebSocket', void 0);
      cclegacy._RF.push({}, "bc759dnavBHKJZeW3fn6LVk", "MWebSocket", undefined);
      // import { MCrypto } from './MCrypto';

      /**
       * 通用 WebSocket 管理器
       *
       * 仅提供 Socket.IO 连接、断连、消息收发能力。
       * 游戏特定的事件监听和业务逻辑由各游戏 bundle 自行处理：
       *
       *   MWebSocket.connect({ url: 'ws://...', onConnect, onDisconnect });
       *   MWebSocket.on('INIT_RESULT', (msg) => { ... });
       *   MWebSocket.send('INIT', { userId }, { encrypt: true });
       */
      let MWebSocket;
      (function (_MWebSocket) {
        let _ws;
        let _url = '';
        function connect(option) {
          _url = option.url;
          if (option.autoReconnectOnResume !== false) {
            game.on(Game.EVENT_PAUSE, () => {
              if (_ws && _ws.connected) {
                _ws.disconnect();
              }
            });
            game.on(Game.EVENT_RESUME, () => {
              if (_ws && _ws.disconnected) {
                _ws.connect();
              }
            });
          }
          _ws = _cjsExports(_url, {
            withCredentials: true,
            transports: ['websocket', 'polling', 'flashsocket']
          });
          _ws.on('connect', () => {
            console.warn('[MWebSocket] 已连接');
            option.onConnect == null || option.onConnect();
          });
          _ws.on('disconnect', () => {
            console.warn('[MWebSocket] 已断开');
            option.onDisconnect == null || option.onDisconnect();
          });
        }
        _MWebSocket.connect = connect;
        function on(event, callback) {
          if (_ws) {
            _ws.on(event, callback);
          }
        }
        _MWebSocket.on = on;
        function off(event, callback) {
          if (_ws) {
            _ws.off(event, callback);
          }
        }
        _MWebSocket.off = off;
        function send(event, data, option) {
          if (_ws) {
            let msg = JSON.stringify(data);
            // if (option?.encrypt) {
            //     msg = MCrypto.aesEncrypt(msg);
            // }
            _ws.emit(event, msg);
          }
        }
        _MWebSocket.send = send;
        function getSocket() {
          return _ws;
        }
        _MWebSocket.getSocket = getSocket;
        function isConnected() {
          var _ws2;
          return ((_ws2 = _ws) == null ? void 0 : _ws2.connected) ?? false;
        }
        _MWebSocket.isConnected = isConnected;
        function disconnect() {
          if (_ws && _ws.connected) {
            _ws.disconnect();
          }
        }
        _MWebSocket.disconnect = disconnect;
        function reconnect() {
          if (_ws && _ws.disconnected) {
            _ws.connect();
          }
        }
        _MWebSocket.reconnect = reconnect;
      })(MWebSocket || (MWebSocket = exports('MWebSocket', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OnEnginLaunch.ts", ['cc'], function () {
  var cclegacy, director, Director, macro;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
      macro = module.macro;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7e799jbwOFCoZF5ePA/zw7J", "OnEnginLaunch", undefined);
      director.on(Director.EVENT_AFTER_SCENE_LAUNCH, () => {
        macro.ENABLE_MULTI_TOUCH = false;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupBtnCmp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PopupManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Enum, Prefab, _decorator, Component, Button, find, UITransform, v3, PopupManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
      Prefab = module.Prefab;
      _decorator = module._decorator;
      Component = module.Component;
      Button = module.Button;
      find = module.find;
      UITransform = module.UITransform;
      v3 = module.v3;
    }, function (module) {
      PopupManager = module.PopupManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "83f8arxFC5MMrUesXfSKIK/", "PopupBtnCmp", undefined);
      const {
        ccclass,
        property,
        menu
      } = _decorator;
      let PopupType = exports('PopupType', /*#__PURE__*/function (PopupType) {
        PopupType[PopupType["Prefab"] = 1] = "Prefab";
        PopupType[PopupType["Path"] = 2] = "Path";
        return PopupType;
      }({}));
      let AnimType = exports('AnimType', /*#__PURE__*/function (AnimType) {
        AnimType[AnimType["None"] = 1] = "None";
        AnimType[AnimType["OpacityIn"] = 2] = "OpacityIn";
        AnimType[AnimType["ScaleIn"] = 3] = "ScaleIn";
        AnimType[AnimType["BottomIn"] = 4] = "BottomIn";
        AnimType[AnimType["RightIn"] = 5] = "RightIn";
        AnimType[AnimType["LeftIn"] = 6] = "LeftIn";
        return AnimType;
      }({}));
      let CloseAnimType = exports('CloseAnimType', /*#__PURE__*/function (CloseAnimType) {
        CloseAnimType[CloseAnimType["None"] = 1] = "None";
        CloseAnimType[CloseAnimType["ScaleOut"] = 2] = "ScaleOut";
        CloseAnimType[CloseAnimType["BottomOut"] = 4] = "BottomOut";
        CloseAnimType[CloseAnimType["RightOut"] = 5] = "RightOut";
        CloseAnimType[CloseAnimType["LeftOut"] = 6] = "LeftOut";
        return CloseAnimType;
      }({}));
      Enum(PopupType);
      Enum(AnimType);
      Enum(CloseAnimType);
      let PopupBtnCmp = exports('PopupBtnCmp', (_dec = ccclass('PopupBtnCmp'), _dec2 = menu('弹窗相关/弹窗入口'), _dec3 = property({
        type: PopupType
      }), _dec4 = property({
        visible: function () {
          return this.popupType === PopupType.Path;
        }
      }), _dec5 = property({
        type: Prefab,
        visible: function () {
          return this.popupType === PopupType.Prefab;
        }
      }), _dec6 = property({
        visible: function () {
          return this.setTabIndex;
        }
      }), _dec7 = property({
        visible: function () {
          return this.setTabIndex;
        }
      }), _dec8 = property({
        type: AnimType
      }), _dec9 = property({
        type: CloseAnimType
      }), _dec(_class = _dec2(_class = (_class2 = class PopupBtnCmp extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "popupType", _descriptor, this);
          _initializerDefineProperty(this, "path", _descriptor2, this);
          _initializerDefineProperty(this, "prefab", _descriptor3, this);
          _initializerDefineProperty(this, "setTabIndex", _descriptor4, this);
          _initializerDefineProperty(this, "nodePath", _descriptor5, this);
          _initializerDefineProperty(this, "index", _descriptor6, this);
          _initializerDefineProperty(this, "animType", _descriptor7, this);
          _initializerDefineProperty(this, "closeAnimType", _descriptor8, this);
          _initializerDefineProperty(this, "noCloseHit", _descriptor9, this);
          _initializerDefineProperty(this, "noMask", _descriptor10, this);
          _initializerDefineProperty(this, "noTouchClose", _descriptor11, this);
          this.initScale = null;
        }
        onLoad() {
          this.initScale = this.node.getScale().clone();
          let button = this.node.getComponent(Button);
          if (button) {
            this.node.on(Button.EventType.CLICK, this.onClick, this);
          }
        }
        onClick() {
          var _find;
          let tempPopup = null;
          if (this.popupType === PopupType.Path) {
            tempPopup = this.path;
          } else if (this.popupType === PopupType.Prefab) {
            tempPopup = this.prefab;
          }
          if (!tempPopup) return;
          let args = {
            noCloseHit: this.noCloseHit,
            noTouchClose: this.noTouchClose,
            noMask: this.noMask,
            onShow: node => {
              if (this.setTabIndex) {
                let tabbarNode = find(this.nodePath, node);
                if (tabbarNode) {
                  let tabbarCpt = tabbarNode.getComponent("Tabbar");
                  if (tabbarCpt) {
                    tabbarCpt.setPage(this.index);
                  }
                }
              }
            }
          };
          switch (this.animType) {
            case AnimType.OpacityIn:
              args.opacityIn = true;
              break;
            case AnimType.ScaleIn:
              args.scaleIn = true;
              break;
            case AnimType.BottomIn:
              args.bottomIn = true;
              break;
            case AnimType.RightIn:
              args.rightIn = true;
              break;
            case AnimType.LeftIn:
              args.leftIn = true;
              break;
          }
          switch (this.closeAnimType) {
            case CloseAnimType.ScaleOut:
              args.scaleOut = true;
              let uiTransform = this.node.getComponent(UITransform);
              let worldPos = (uiTransform == null ? void 0 : uiTransform.convertToWorldSpaceAR(v3(0, 0, 0))) || v3(0, 0, 0);
              let canvasTransform = (_find = find("Canvas")) == null ? void 0 : _find.getComponent(UITransform);
              let endPos = (canvasTransform == null ? void 0 : canvasTransform.convertToNodeSpaceAR(worldPos)) || v3(0, 0, 0);
              args.scaleOutParm = {
                toPos: v3(endPos.x, endPos.y, 0),
                node: this.node,
                scale: this.initScale
              };
              break;
            case CloseAnimType.BottomOut:
              args.bottomOut = true;
              break;
            case CloseAnimType.RightOut:
              args.rightOut = true;
              break;
            case CloseAnimType.LeftOut:
              args.leftOut = true;
              break;
          }
          PopupManager.addPopup(tempPopup, args);
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popupType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return PopupType.Prefab;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "path", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "setTabIndex", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodePath", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "index", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "animType", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return AnimType.None;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "closeAnimType", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return CloseAnimType.None;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "noCloseHit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "noMask", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "noTouchClose", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupCloseBtnCmp.ts", ['cc', './PopupManager.ts'], function (exports) {
  var cclegacy, Component, Button, _decorator, PopupManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      Button = module.Button;
      _decorator = module._decorator;
    }, function (module) {
      PopupManager = module.PopupManager;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "345a7jMDhVDCofQQxctQm1o", "PopupCloseBtnCmp", undefined);
      const {
        ccclass,
        property,
        menu
      } = _decorator;
      let PopupCloseBtnCmp = exports('PopupCloseBtnCmp', (_dec = ccclass('PopupCloseBtnCmp'), _dec2 = menu('弹窗相关/关闭按钮'), _dec(_class = _dec2(_class = class PopupCloseBtnCmp extends Component {
        onLoad() {
          let button = this.node.getComponent(Button);
          if (button) {
            this.node.on(Button.EventType.CLICK, () => {
              PopupManager.removeTop();
            }, this);
          }
        }
      }) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupLifeCmp.ts", ['cc'], function (exports) {
  var cclegacy, Component, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "6b82b2pjb1FGIjXyGVHHD0i", "PopupLifeCmp", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let PopupLifeCmp = exports('PopupLifeCmp', (_dec = ccclass('PopupLifeCmp'), _dec(_class = class PopupLifeCmp extends Component {
        constructor(...args) {
          super(...args);
          this.onPopupDestroy = null;
        }
        setOnDestroy(callback) {
          this.onPopupDestroy = callback;
        }
        onDestroy() {
          if (this.onPopupDestroy) {
            this.onPopupDestroy();
          }
        }
      }) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupManager.ts", ['cc', './MEvent.ts', './PopupLifeCmp.ts'], function (exports) {
  var cclegacy, director, Director, assetManager, sys, Prefab, instantiate, v3, find, tween, view, isValid, Node, UITransform, BlockInputEvents, Graphics, Color, Button, resources, MEvent, PopupLifeCmp;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
      assetManager = module.assetManager;
      sys = module.sys;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      v3 = module.v3;
      find = module.find;
      tween = module.tween;
      view = module.view;
      isValid = module.isValid;
      Node = module.Node;
      UITransform = module.UITransform;
      BlockInputEvents = module.BlockInputEvents;
      Graphics = module.Graphics;
      Color = module.Color;
      Button = module.Button;
      resources = module.resources;
    }, function (module) {
      MEvent = module.MEvent;
    }, function (module) {
      PopupLifeCmp = module.PopupLifeCmp;
    }],
    execute: function () {
      exports('PopupManager', void 0);
      cclegacy._RF.push({}, "09edcZqWI1Du4CR/L0187X3", "PopupManager", undefined);

      /**
       * 弹窗管理器 (TypeScript 命名空间版)
       * 移植自 PopupManager.js，适配 Cocos Creator 3.8
       */
      let PopupManager;
      (function (_PopupManager) {
        const baseZIndex = _PopupManager.baseZIndex = 50;
        let popupStack = [];
        let waitingQueue = [];
        let maskLayer = null;
        let touchLayer = null;
        let closeNode = null;
        function init() {
          popupStack = [];
          waitingQueue = [];
          director.on(Director.EVENT_BEFORE_SCENE_LAUNCH, () => {
            removeAll();
          });

          // 定时检测逻辑
          setInterval(checkPopupStack, 100);
        }
        _PopupManager.init = init;
        function checkPopupStack() {
          if (popupStack.length <= 0) {
            if (waitingQueue.length > 0) {
              let popupObj = waitingQueue.pop();
              createPopup(popupObj.path, popupObj.args);
            }
          }
        }
        function addPopup(path, args = {}) {
          if (!path) return;
          args.path = path;
          args.weight = args.weight || 1;
          args.multiple = args.multiple || false;
          if (args.isWait) {
            waitingQueue.push({
              path: path,
              args: args
            });
            waitingQueue.sort((o1, o2) => o1.args.weight - o2.args.weight);
          } else {
            createPopup(path, args);
          }
        }
        _PopupManager.addPopup = addPopup;
        function createPopup(path, args) {
          if (!args.multiple && checkIsAddedByPath(path)) {
            console.log("[PopupManager] Popup already added:", path);
            return;
          }
          popupStack.push(args);
          if (typeof path === "string") {
            let bundleName = args.bundle || "resources";
            let bundle = assetManager.getBundle(bundleName);
            let loadAsset = targetBundle => {
              targetBundle.load(path, Prefab, (err, prefab) => {
                if (err) {
                  console.error("[PopupManager] load error:", path, err);
                  let idx = popupStack.indexOf(args);
                  if (idx >= 0) popupStack.splice(idx, 1);
                  return;
                }
                if (args.parent && !isValid(args.parent, true)) return;
                if (popupStack.indexOf(args) >= 0) {
                  let node = instantiate(prefab);
                  handlePopup(node, args);
                }
              });
            };
            if (bundle) {
              loadAsset(bundle);
            } else {
              // 解析 bundle 的实际加载 URL（原生平台使用热更目录）
              let bundleUrl = bundleName;
              const hotUpdate = globalThis.__hotUpdate;
              if (sys.isNative && hotUpdate && typeof hotUpdate.getBundleUrl === 'function') {
                bundleUrl = hotUpdate.getBundleUrl(bundleName);
              }
              assetManager.loadBundle(bundleUrl, (err, loadedBundle) => {
                if (err) {
                  console.error("[PopupManager] loadBundle error:", bundleName, err);
                  // 降级尝试 resources
                  loadAsset(resources);
                  return;
                }
                console.log("[PopupManager] loadBundle success:", bundleName);
                loadAsset(loadedBundle);
              });
            }
          } else if (path instanceof Prefab) {
            let node = instantiate(path);
            if (node) handlePopup(node, args);
          } else {
            handlePopup(path, args);
          }
        }
        function handlePopup(node, args) {
          args.node = node;
          args.name = node.name;
          node["popupArgs"] = args;
          let endPos = args.pos || v3(0, 0, 0);
          let lifeCmp = node.addComponent(PopupLifeCmp);
          lifeCmp.setOnDestroy(() => {
            for (let i = 0; i < popupStack.length; i++) {
              if (popupStack[i].node == node) {
                popupStack.splice(i, 1);
                updateStack();
                break;
              }
            }
          });
          if (args.addBeforeCall) {
            args.addBeforeCall(node);
          }
          let canvas = find("Canvas");
          if (canvas) {
            node.parent = canvas;
          }
          if (!args.closeInSound) {
            MEvent.emit("EVENT_BTN_CLICK_2_SOUNDS");
          }
          updateStack();
          node.setPosition(args.pos || v3(0, 0, 0));
          if (args.onShow) {
            args.onShow(node);
          }

          // 动画逻辑
          if (args.scaleIn) {
            let orgScale = node.getScale();
            node.setScale(v3(0.4, 0.4, 1));
            let uiOpacity = node.getComponent('cc.UIOpacity') || node.addComponent('cc.UIOpacity');
            uiOpacity.opacity = 0;
            tween(node).to(args.animTime || 0.3, {
              scale: orgScale
            }, {
              easing: "backOut"
            }).start();
            tween(uiOpacity).to(args.animTime || 0.3, {
              opacity: 255
            }).call(() => {
              if (args.onShowEnd) args.onShowEnd(node);
            }).start();
            if (maskLayer) {
              let maskOpacity = maskLayer.getComponent('cc.UIOpacity') || maskLayer.addComponent('cc.UIOpacity');
              tween(maskOpacity).to(args.animTime || 0.3, {
                opacity: 255
              }).start();
            }
          } else if (args.opacityIn) {
            let uiOpacity = node.getComponent('cc.UIOpacity') || node.addComponent('cc.UIOpacity');
            uiOpacity.opacity = 0;
            tween(uiOpacity).to(args.animTime || 0.3, {
              opacity: 255
            }, {
              easing: "quadOut"
            }).call(() => {
              if (args.onShowEnd) args.onShowEnd(node);
            }).start();
            if (maskLayer) {
              let maskOpacity = maskLayer.getComponent('cc.UIOpacity') || maskLayer.addComponent('cc.UIOpacity');
              tween(maskOpacity).to(args.animTime || 0.3, {
                opacity: 255
              }).start();
            }
          } else if (args.bottomIn) {
            let startPos = endPos.clone().add(v3(0, -view.getVisibleSize().height, 0));
            node.setPosition(startPos);
            tween(node).to(args.animTime || 0.3, {
              position: endPos
            }, {
              easing: "quadOut"
            }).call(() => {
              if (args.onShowEnd) args.onShowEnd(node);
            }).start();
          } else {
            if (maskLayer) {
              let maskOpacity = maskLayer.getComponent('cc.UIOpacity') || maskLayer.addComponent('cc.UIOpacity');
              maskOpacity.opacity = 255;
            }
            if (args.onShowEnd) args.onShowEnd(node);
          }
        }
        function removeTop() {
          if (popupStack.length <= 0) return false;
          let top = popupStack[popupStack.length - 1];
          if (!top || !top.node) return false;
          removePopup(top.node);
          return true;
        }
        _PopupManager.removeTop = removeTop;
        function removePopup(node, force = false) {
          if (!node || !isValid(node)) return;
          for (let i = 0; i < popupStack.length; i++) {
            if (popupStack[i].node == node) {
              let popupObj = popupStack[i];
              if (!popupObj.closeOutSound) {
                MEvent.emit("EVENT_BTN_CLOSE_SOUNDS");
              }
              let remove = () => {
                if (popupObj.onClose) popupObj.onClose(popupObj.node);
                onClosePopup(popupObj);
                if (popupObj.node && isValid(popupObj.node, true)) {
                  popupObj.node.destroy();
                }
                let idx = popupStack.indexOf(popupObj);
                if (idx >= 0) popupStack.splice(idx, 1);
                updateStack();
              };
              if (!force && popupObj.onCloseBefore) {
                popupObj.onCloseBefore(popupObj.node, remove);
              } else {
                remove();
              }
              break;
            }
          }
          updateStack();
        }
        _PopupManager.removePopup = removePopup;
        function removeAll() {
          for (let i = 0; i < popupStack.length; i++) {
            let obj = popupStack[i];
            if (obj && obj.node && isValid(obj.node)) {
              if (obj.onClose) obj.onClose(obj.node);
              onClosePopup(obj);
              obj.node.destroy();
            }
          }
          popupStack = [];
          waitingQueue = [];
          if (touchLayer && isValid(touchLayer)) touchLayer.destroy();
          if (maskLayer && isValid(maskLayer)) maskLayer.destroy();
          maskLayer = null;
          touchLayer = null;
        }
        _PopupManager.removeAll = removeAll;
        function updateStack() {
          let canvas = find("Canvas");
          if (!canvas) return;
          if (!maskLayer || !isValid(maskLayer)) {
            maskLayer = new Node("MaskLayer");
            maskLayer.parent = canvas;
            let transform = maskLayer.addComponent(UITransform);
            transform.setContentSize(view.getVisibleSize().width * 3, view.getVisibleSize().height * 3);
            maskLayer.addComponent(BlockInputEvents);
            let graphics = maskLayer.addComponent(Graphics);
            graphics.fillColor = new Color(0, 0, 0, 200);
            graphics.rect(-transform.width / 2, -transform.height / 2, transform.width, transform.height);
            graphics.fill();
            maskLayer.addComponent('cc.UIOpacity');
          }
          let needMaskIdx = -1;
          for (let i = popupStack.length - 1; i >= 0; i--) {
            if (!popupStack[i].noMask) {
              needMaskIdx = i;
              break;
            }
          }
          if (needMaskIdx >= 0) {
            maskLayer.active = true;
            maskLayer.setSiblingIndex(baseZIndex + needMaskIdx * 3);
          } else {
            maskLayer.active = false;
          }
          if (!touchLayer || !isValid(touchLayer)) {
            touchLayer = new Node("TouchLayer");
            touchLayer.parent = canvas;
            let transform = touchLayer.addComponent(UITransform);
            transform.setContentSize(view.getVisibleSize().width * 3, view.getVisibleSize().height * 3);
            touchLayer.addComponent(Button);
            touchLayer.on(Button.EventType.CLICK, () => {
              let top = popupStack[popupStack.length - 1];
              if (top && !top.noTouchClose) {
                removeTop();
              }
            });
            resources.load("BalootClient/BaseRes/prefabs/popup_close", Prefab, (err, prefab) => {
              if (err) return;
              closeNode = instantiate(prefab);
              closeNode.parent = touchLayer;
              closeNode.setPosition(v3(0, -905, 0));
              closeNode.on(Button.EventType.CLICK, () => {
                removeTop();
              });
              updateCloseNodeVisibility();
            });
          }
          if (popupStack.length > 0) {
            let topIdx = popupStack.length - 1;
            let top = popupStack[topIdx];
            top.node.setSiblingIndex(baseZIndex + topIdx * 3 + 2);
            if (top.touchThrough) {
              touchLayer.active = false;
            } else {
              touchLayer.active = true;
              touchLayer.setSiblingIndex(baseZIndex + topIdx * 3 + 1);
            }
            updateCloseNodeVisibility();
          } else {
            touchLayer.active = false;
          }
        }
        function updateCloseNodeVisibility() {
          if (closeNode) {
            if (popupStack.length > 0) {
              closeNode.active = !popupStack[popupStack.length - 1].noCloseHit;
            } else {
              closeNode.active = false;
            }
          }
        }
        function checkIsAddedByPath(path) {
          for (let i = 0; i < popupStack.length; i++) {
            let itemPath = popupStack[i].path;
            if (typeof itemPath === "string") {
              if (path == itemPath) return true;
            } else if (itemPath instanceof Prefab) {
              if (path.name == itemPath.name) return true;
            }
          }
          return false;
        }
        function onClosePopup(args) {
          if (!args || !args.node) return;
        }
      })(PopupManager || (PopupManager = exports('PopupManager', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SubSystemManager.ts", ['cc'], function (exports) {
  var cclegacy, assetManager, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      sys = module.sys;
    }],
    execute: function () {
      exports('MSubSystem', void 0);
      cclegacy._RF.push({}, "64cdd892/1HdLF3pATtxC/5", "SubSystemManager", undefined);

      /**
       * 子系统管理器
       *
       * 负责子系统 Bundle 的按需加载、卸载和版本管理
       * 供大厅调用，实现点击时才下载子系统的流程
       */
      let MSubSystem;
      (function (_MSubSystem) {
        /** 子系统信息 */

        /** 已注册的子系统 */
        const _systems = new Map();

        /** 加载回调缓存 */

        /**
         * 注册子系统（由大厅初始化时调用）
         */
        function register(bundleName, displayName, entryComponent) {
          _systems.set(bundleName, {
            bundleName,
            displayName,
            loaded: false,
            entryComponent
          });
          console.log(`[MSubSystem] 注册子系统: ${bundleName} (${displayName})`);
        }
        _MSubSystem.register = register;
        async function load(bundleName) {
          const info = _systems.get(bundleName);
          if (!info) {
            throw new Error(`子系统未注册: ${bundleName}`);
          }

          // 已加载直接返回
          const existing = assetManager.getBundle(bundleName);
          if (existing) {
            info.loaded = true;
            console.log(`[MSubSystem] Bundle 已加载: ${bundleName}`);
            return;
          }

          // 确定 bundle URL
          let bundleUrl;
          const hotUpdate = globalThis.__hotUpdate;
          if (sys.isNative && hotUpdate && typeof hotUpdate.ensureBundleReady === 'function') {
            // 原生平台：先确保 bundle 已下载/更新，返回正确的加载路径
            console.log(`[MSubSystem] 确保 ${bundleName} 就绪...`);
            bundleUrl = await hotUpdate.ensureBundleReady(bundleName);
          } else if (sys.isNative) {
            var _jsb$fileUtils, _jsb$fileUtils2;
            // 原生平台但无 hotUpdate：尝试热更目录，fallback 到包名
            const jsb = globalThis.jsb;
            const writablePath = (jsb == null || (_jsb$fileUtils = jsb.fileUtils) == null ? void 0 : _jsb$fileUtils.getWritablePath()) || '/';
            const storagePath = `${writablePath}remote-asset/${bundleName}`;
            if (jsb != null && (_jsb$fileUtils2 = jsb.fileUtils) != null && _jsb$fileUtils2.isFileExist(`${storagePath}/project.manifest`)) {
              bundleUrl = storagePath;
            } else {
              bundleUrl = bundleName;
            }
          } else {
            // Web：从 CDN 或本地服务器加载
            const cdnBase = globalThis.__cdnBase || '';
            bundleUrl = cdnBase ? `${cdnBase}/${bundleName}` : bundleName;
          }
          console.log(`[MSubSystem] 加载 Bundle: ${bundleUrl}`);
          return new Promise((resolve, reject) => {
            assetManager.loadBundle(bundleUrl, error => {
              if (error) {
                console.error(`[MSubSystem] 加载失败: ${bundleName}`, error);
                reject(error);
                return;
              }
              info.loaded = true;
              console.log(`[MSubSystem] 加载成功: ${bundleName}`);
              resolve();
            });
          });
        }
        _MSubSystem.load = load;
        function unload(bundleName) {
          const info = _systems.get(bundleName);
          if (!info) return;
          const bundle = assetManager.getBundle(bundleName);
          if (bundle) {
            assetManager.removeBundle(bundle);
            info.loaded = false;
            console.log(`[MSubSystem] 已卸载: ${bundleName}`);
          }
        }
        _MSubSystem.unload = unload;
        function isLoaded(bundleName) {
          var _systems$get;
          return ((_systems$get = _systems.get(bundleName)) == null ? void 0 : _systems$get.loaded) || false;
        }
        _MSubSystem.isLoaded = isLoaded;
        function getAll() {
          return Array.from(_systems.values());
        }
        _MSubSystem.getAll = getAll;
        function getDisplayName(bundleName) {
          var _systems$get2;
          return ((_systems$get2 = _systems.get(bundleName)) == null ? void 0 : _systems$get2.displayName) || bundleName;
        }
        _MSubSystem.getDisplayName = getDisplayName;
      })(MSubSystem || (MSubSystem = exports('MSubSystem', {})));
      globalThis.MSubSystem = MSubSystem;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Tools.ts", ['cc'], function (exports) {
  var cclegacy, sys, Color, view, ResolutionPolicy, UIRenderer, Sprite, Label, Material, director, Canvas, Widget;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      Color = module.Color;
      view = module.view;
      ResolutionPolicy = module.ResolutionPolicy;
      UIRenderer = module.UIRenderer;
      Sprite = module.Sprite;
      Label = module.Label;
      Material = module.Material;
      director = module.director;
      Canvas = module.Canvas;
      Widget = module.Widget;
    }],
    execute: function () {
      exports('Tools', void 0);
      cclegacy._RF.push({}, "9a09dSGGIBBLpL470B3TULm", "Tools", undefined);
      let Tools;
      (function (_Tools) {
        const DURATION_MS = _Tools.DURATION_MS = 1;
        const DURATION_S = _Tools.DURATION_S = 1000 * DURATION_MS;
        const DURATION_M = _Tools.DURATION_M = 60 * DURATION_S;
        const DURATION_H = _Tools.DURATION_H = 60 * DURATION_M;
        const DURATION_D = _Tools.DURATION_D = 24 * DURATION_H;
        function getItem(key) {
          return sys.localStorage.getItem(key);
        }
        _Tools.getItem = getItem;
        function setItem(key, value) {
          sys.localStorage.setItem(key, value);
        }
        _Tools.setItem = setItem;
        function removeItem(key) {
          sys.localStorage.removeItem(key);
        }
        _Tools.removeItem = removeItem;
        function now() {
          return Date.now();
        }
        _Tools.now = now;
        function rgbToHex(r, g, b) {
          let hex = (r << 16 | g << 8 | b).toString(16);
          return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
        }
        _Tools.rgbToHex = rgbToHex;
        function hexToRgb(hex) {
          return new Color().fromHEX(hex);
        }
        _Tools.hexToRgb = hexToRgb;
        function dayStartTime(time) {
          return new Date(time).setHours(0, 0, 0, 0);
        }
        _Tools.dayStartTime = dayStartTime;
        function dayEndTime(time) {
          return new Date(time).setHours(23, 59, 59, 999);
        }
        _Tools.dayEndTime = dayEndTime;
        function weekStartTime(time) {
          let day = new Date(time).getDay();
          if (day == 0) {
            day = 7;
          }
          return new Date(new Date(time).setHours(0, 0, 0, 0) - (day - 1) * 24 * 60 * 60 * 1000).getTime();
        }
        _Tools.weekStartTime = weekStartTime;
        function weekEndTime(time) {
          let day = new Date(time).getDay();
          if (day == 0) {
            day = 7;
          }
          return new Date(new Date(time).setHours(23, 59, 59, 999) + (7 - day) * 24 * 60 * 60 * 1000).getTime();
        }
        _Tools.weekEndTime = weekEndTime;
        function inSameDay(time1, time2) {
          return dayStartTime(time1) == dayStartTime(time2);
        }
        _Tools.inSameDay = inSameDay;
        function inSameWeek(time1, time2) {
          return weekStartTime(time1) == weekStartTime(time2);
        }
        _Tools.inSameWeek = inSameWeek;
        function isToday(param) {
          let daytime = 1000 * 60 * 60 * 24;
          let timeOffest = 8 * 60 * 60 * 1000;
          if (Math.floor((param.currentTime + timeOffest) / daytime) == Math.floor((param.targetTime + timeOffest) / daytime)) {
            return true;
          } else {
            return false;
          }
        }
        _Tools.isToday = isToday;
        function offsetDay(param) {
          let dayTime = 24 * 60 * 60 * 1000;
          let timeOffest = 8 * 60 * 60 * 1000;
          let offset = Math.floor((param.endTime + timeOffest) / dayTime) - Math.floor((param.startTime + timeOffest) / dayTime);
          return offset;
        }
        _Tools.offsetDay = offsetDay;
        function fillZero(originNumber, zeroAmount) {
          return (Array(zeroAmount).join('0') + originNumber).slice(-zeroAmount);
        }
        _Tools.fillZero = fillZero;
        function copy(data) {
          if (typeof data != 'object') {
            return data;
          }
          if (Array.isArray(data)) {
            return copyArray(data);
          } else {
            return copyObject(data);
          }
        }
        _Tools.copy = copy;
        function copyArray(data) {
          let newdata = [];
          data.forEach(element => {
            if (typeof element == "object") {
              if (Array.isArray(element)) {
                newdata.push(copyArray(element));
              } else {
                newdata.push(copyObject(element));
              }
            } else {
              newdata.push(element);
            }
          });
          return newdata;
        }
        function copyObject(data) {
          if (data) {
            let newdata = new Object();
            for (var key in data) {
              if (typeof data[key] == "object") {
                if (Array.isArray(data[key])) {
                  newdata[key] = copyArray(data[key]);
                } else {
                  newdata[key] = copyObject(data[key]);
                }
              } else {
                newdata[key] = data[key];
              }
            }
            return newdata;
          } else {
            return null;
          }
        }
        function formatNumber(value, minDetailedDisplay = 1000, fractionDigits) {
          if (value < minDetailedDisplay) {
            return value.toFixed(fractionDigits ?? 0);
          } else if (value < 1000 * 1000) {
            return (value / 1000).toFixed(value % 1000 == 0 ? 0 : 2) + 'K';
          } else if (value < 1000 * 1000 * 1000) {
            return (value / 1000 / 1000).toFixed(value % 1000 == 0 ? 0 : 2) + 'M';
          } else if (value < 1000 * 1000 * 1000 * 1000) {
            return (value / 1000 / 1000 / 1000).toFixed(value % 1000 == 0 ? 0 : 2) + 'B';
          } else if (value < 1000 * 1000 * 1000 * 1000 * 1000) {
            return (value / 1000 / 1000 / 1000 / 1000).toFixed(value % 1000 == 0 ? 0 : 2) + 'T';
          } else {
            let strNumber = Math.round(value).toString();
            let pos = strNumber.indexOf('e+');
            if (pos > 0) {
              let len = strNumber.substr(pos + 2);
              let num = strNumber.substr(0, 4);
              return num + 'E' + len;
            } else {
              let len = Math.round(value).toString().length - 1;
              let num = value / Math.pow(10, len);
              return num.toFixed(value % 1000 == 0 ? 0 : 2) + 'E' + len;
            }
          }
        }
        _Tools.formatNumber = formatNumber;
        function scientificToNumber(x) {
          if (Math.abs(x) < 1.0) {
            var e = parseInt(x.toString().split('e-')[1]);
            if (e) {
              x *= Math.pow(10, e - 1);
              x = '0.' + new Array(e).join('0') + x.toString().substring(2);
            }
          } else {
            var e = parseInt(x.toString().split('+')[1]);
            if (e > 20) {
              e -= 20;
              x /= Math.pow(10, e);
              x += new Array(e + 1).join('0');
            }
          }
          return x;
        }
        _Tools.scientificToNumber = scientificToNumber;
        function genUid(param) {
          let tsoup = (param == null ? void 0 : param.soup) ?? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
          let tlUid = (param == null ? void 0 : param.lUid) ?? 30;
          let lSoup = tsoup.length;
          let id = [];
          for (let i = 0; i < tlUid; i++) {
            id[i] = tsoup.charAt(Math.random() * lSoup);
          }
          return id.join('');
        }
        _Tools.genUid = genUid;
        var serialnum = 0;
        /**有序的序列号 */
        function genOrderSerialnumber() {
          serialnum++;
          return serialnum;
        }
        _Tools.genOrderSerialnumber = genOrderSerialnumber;
        function screenSize() {
          let screenHeight = view.getVisibleSize().height;
          let screenWidth = view.getVisibleSize().width;
          if (screenHeight > screenWidth) {
            /**竖屏 */
            if (screenHeight / screenWidth >= 2) {
              return "l";
            } else if (screenHeight / screenWidth > 1.776) {
              return "m";
            } else {
              return "s";
            }
          } else {
            /**横屏 */
            if (screenWidth / screenHeight >= 2) {
              return "l";
            } else if (screenWidth / screenHeight >= 1.775) {
              return "m";
            } else {
              return "s";
            }
          }
        }
        _Tools.screenSize = screenSize;
        var chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
        var chnUnitSection = ["", "万", "亿", "万亿", "亿亿"];
        var tcChnUnitSection = ["", "萬", "億", "萬億", "億億"];
        var chnUnitChar = ["", "十", "百", "千"];

        /**数字转中文 */
        function numberToChinese(num) {
          let language = sys.languageCode;
          var unitPos = 0;
          var strIns = '',
            chnStr = '';
          var needZero = false;
          if (num === 0) {
            return chnNumChar[0];
          }
          while (num > 0) {
            var section = num % 10000;
            if (needZero) {
              chnStr = chnNumChar[0] + chnStr;
            }
            strIns = sectionToChinese(section);
            if (language.indexOf("zh-cn") != -1 || language.indexOf("zh_cn") != -1 || language == "zh") {
              strIns += section !== 0 ? chnUnitSection[unitPos] : chnUnitSection[0];
            } else {
              strIns += section !== 0 ? tcChnUnitSection[unitPos] : tcChnUnitSection[0];
            }
            chnStr = strIns + chnStr;
            needZero = section < 1000 && section > 0;
            num = Math.floor(num / 10000);
            unitPos++;
          }
          return chnStr;
        }
        _Tools.numberToChinese = numberToChinese;
        function numberToDay(num) {
          switch (num) {
            case 1:
              return "一";
            case 2:
              return "二";
            case 3:
              return "三";
            case 4:
              return "四";
            case 5:
              return "五";
            case 6:
              return "六";
            case 7:
              return "日";
          }
        }
        _Tools.numberToDay = numberToDay;
        function sectionToChinese(section) {
          var strIns = '',
            chnStr = '';
          var unitPos = 0;
          var zero = true;
          while (section > 0) {
            var v = section % 10;
            if (v === 0) {
              if (!zero) {
                zero = true;
                chnStr = chnNumChar[v] + chnStr;
              }
            } else {
              zero = false;
              strIns = chnNumChar[v];
              strIns += chnUnitChar[unitPos];
              chnStr = strIns + chnStr;
            }
            unitPos++;
            section = Math.floor(section / 10);
          }
          return chnStr;
        }

        /**数字转罗马数字 */
        function numberToRoman(num) {
          switch (num) {
            case 0:
              return "";
            case 1:
              return "Ⅰ";
            case 2:
              return "Ⅱ";
            case 3:
              return "Ⅲ";
            case 4:
              return "Ⅳ";
            case 5:
              return "Ⅴ";
            case 6:
              return "Ⅵ";
            case 7:
              return "Ⅶ";
            case 8:
              return "Ⅷ";
            case 9:
              return "Ⅸ";
            case 10:
              return "Ⅹ";
          }
        }
        _Tools.numberToRoman = numberToRoman;
        function intervalDay(time) {
          let daytime = 1000 * 60 * 60 * 24;
          return Math.floor(Date.now() / daytime) - Math.floor(time / daytime);
        }
        _Tools.intervalDay = intervalDay;
        function getChars(str, separator) {
          str = str.replace(/ /g, "");
          str = str.replace(/，/g, ",");
          let chars = str.split(separator);
          for (let i = 0; i < chars.length; i++) {
            if (chars[i] == "") {
              chars.splice(i, 1);
              i--;
            }
          }
          return chars;
        }
        _Tools.getChars = getChars;
        function getNumbers(str, separator) {
          let arr = [];
          let chars = getChars(str, separator);
          chars.forEach(element => {
            arr.push(parseInt(element));
          });
          return arr;
        }
        _Tools.getNumbers = getNumbers;
        function shuffle(arr) {
          var l = arr.length;
          var index, temp;
          while (l > 0) {
            index = Math.floor(Math.random() * l);
            temp = arr[l - 1];
            arr[l - 1] = arr[index];
            arr[index] = temp;
            l--;
          }
          return arr;
        }
        _Tools.shuffle = shuffle;
        function adapter() {
          let canvasSize = view.getVisibleSize();
          let designResolutionSize = view.getDesignResolutionSize();
          if (canvasSize.height / canvasSize.width < designResolutionSize.height / designResolutionSize.width) {
            view.setDesignResolutionSize(designResolutionSize.width, designResolutionSize.height, ResolutionPolicy.FIXED_HEIGHT);
          } else {
            view.setDesignResolutionSize(designResolutionSize.width, designResolutionSize.height, ResolutionPolicy.FIXED_WIDTH);
          }
        }
        _Tools.adapter = adapter;
        function checkProbable(probable, randSize = 100) {
          let randomNumber = Math.random() * randSize;
          return randomNumber <= probable;
        }
        _Tools.checkProbable = checkProbable;
        function setGray(node, loop) {
          let comp = node.getComponent(UIRenderer);
          if (comp instanceof Sprite || comp instanceof Label) {
            const material = new Material();
            material.initialize({
              effectName: 'builtin-unlit'
            });
            material.setProperty('mainColor', new Color(0.3, 0.59, 0.11, 1));
            comp.material = material;
          }
          if (loop) {
            if (node.children.length > 0) {
              node.children.forEach(element => {
                setGray(element, loop);
              });
            }
          }
        }
        _Tools.setGray = setGray;
        function setPrimaryColor(node, loop) {
          let comp = node.getComponent(UIRenderer);
          if (comp instanceof Sprite || comp instanceof Label) {
            const material = new Material();
            material.initialize({
              effectName: 'builtin-sprite'
            });
            comp.material = material;
          }
          if (loop) {
            if (node.children.length > 0) {
              node.children.forEach(element => {
                setPrimaryColor(element, loop);
              });
            }
          }
        }
        _Tools.setPrimaryColor = setPrimaryColor;
        function setColor(node, color, loop) {
          node.getComponent(UIRenderer).color = color;
          if (loop) {
            if (node.children.length > 0) {
              node.children.forEach(element => {
                setColor(element, color, loop);
              });
            }
          }
        }
        _Tools.setColor = setColor;
        function setNumberColor(desc, color = '#B1F520') {
          if (desc != null) {
            let outs = [];
            let temp = desc;
            desc.match(/(\+|\-)?\d+%?/g).forEach(v => {
              let temps = temp.split(v);
              outs.push(temps.shift());
              outs.push(`<color=${color}>${v}</c>`);
              temp = temps.join(v);
            });
            outs.push(temp);
            return outs.join('');
          } else {
            return null;
          }
        }
        _Tools.setNumberColor = setNumberColor;
        function cutStr(str, len, extralStr = "") {
          let str_length = 0;
          let str_len = 0;
          let str_cut = '';
          str_len = str.length;
          for (var i = 0; i < str_len; i++) {
            let a = str.charAt(i);
            let regExp = new RegExp('^[\u4E00-\u9FFF]+$');
            let regExp2 = new RegExp('^[A-Za-z0-9]+$');
            if (regExp.test(a)) {
              str_length += 2;
            } else if (regExp2.test(a)) {
              str_length += 1;
            } else {
              if (a != ' ') {
                str_length += 1.5;
              }
            }
            if (a != ' ') {
              str_cut = str_cut.concat(a);
            }
            if (str_length >= len) {
              return str_cut + extralStr;
            }
          }
          //如果给定字符串小于指定长度，则返回源字符串；  
          if (str_length <= len) {
            return str;
          }
        }
        _Tools.cutStr = cutStr;
        function numberToString(num, fixed) {
          num = parseFloat(num.toFixed(fixed ?? 0));
          let newstr = "";
          let arrs2 = [];
          if (num % 1 == 0) {
            arrs2 = num.toString().split("");
            if (fixed > 0) {
              newstr = ".";
              for (let i = 0; i < fixed; i++) {
                newstr += "0";
              }
            }
          } else {
            let arrs = num.toString().split(".");
            newstr = "." + arrs[1];
            if (fixed > 0 && arrs[1].length < fixed) {
              for (let i = 0; i < fixed - arrs[1].length; i++) {
                newstr += "0";
              }
            }
            arrs2 = arrs[0].split("");
          }
          let counter = 0;
          while (arrs2.length > 0) {
            counter++;
            newstr = arrs2.pop() + newstr;
            if (counter == 3) {
              if (arrs2.length > 0) {
                newstr = "," + newstr;
              }
              counter = 0;
            }
          }
          return newstr;
        }
        _Tools.numberToString = numberToString;
        function saveJSONToLocal(jsonData, fileName) {
          // 将JSON对象转换为字符串
          const jsonString = JSON.stringify(jsonData);

          // 创建一个Blob实例，类型为JSON文件类型
          const blob = new Blob([jsonString], {
            type: 'application/json'
          });

          // 创建一个链接元素
          const a = document.createElement('a');

          // 使用createObjectURL创建一个指向Blob的URL
          a.href = URL.createObjectURL(blob);

          // 设置下载文件名
          a.download = fileName || 'data.json';

          // 触发链接点击，开始下载
          document.body.appendChild(a);
          a.click();

          // 清理并移除元素和对象URL引用
          document.body.removeChild(a);
          URL.revokeObjectURL(a.href);
        }
        _Tools.saveJSONToLocal = saveJSONToLocal;
        function limitRange(current, rangeMin, rangeMax) {
          if (current <= rangeMin) {
            return rangeMin;
          }
          if (current >= rangeMax) {
            return rangeMax;
          }
          return Math.floor(current);
        }
        _Tools.limitRange = limitRange;
        function updateAlignment(node) {
          director.getScene().getComponentInChildren(Canvas).scheduleOnce(() => {
            node.children.forEach(element => {
              let widget = element.getComponent(Widget);
              if (widget) {
                widget.updateAlignment();
              }
              updateAlignment(element);
            });
          });
        }
        _Tools.updateAlignment = updateAlignment;
      })(Tools || (Tools = exports('Tools', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TouchClose.ts", ['cc', './MEvent.ts', './MPool.ts'], function (exports) {
  var cclegacy, Component, Node, v3, UITransform, view, UIOpacity, _decorator, MEvent, MPool;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      Node = module.Node;
      v3 = module.v3;
      UITransform = module.UITransform;
      view = module.view;
      UIOpacity = module.UIOpacity;
      _decorator = module._decorator;
    }, function (module) {
      MEvent = module.MEvent;
    }, function (module) {
      MPool = module.MPool;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "6053dnYqEFGZ679mE9crCWZ", "TouchClose", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let TouchClose = exports('default', (_dec = ccclass("TouchClose"), _dec(_class = class TouchClose extends Component {
        constructor(...args) {
          super(...args);
          this.callback = void 0;
        }
        onEnable() {
          this.node.on(Node.EventType.TOUCH_START, () => {
            var _this$callback;
            (_this$callback = this.callback) == null || _this$callback.call(this);
          }, this);
          MEvent.on('RecoveryTouchClose', () => {
            MPool.recovery(this.node);
          }, this);
        }
        init(param) {
          this.callback = param.callback;
          this.node.setParent(param.excludeNode.getParent());
          this.node.setPosition(v3());
          this.node.getComponent(UITransform).setContentSize(view.getVisibleSize());
          this.node.setSiblingIndex(param.excludeNode.getSiblingIndex());
          if (param.showBg) {
            this.node.getComponent(UIOpacity).opacity = 186;
          } else {
            this.node.getComponent(UIOpacity).opacity = 0;
          }
        }
        onDisable() {
          this.node.targetOff(this);
          MEvent.targetOff(this);
        }
      }) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/lobby-casino-core', 'chunks:///_virtual/lobby-casino-core'); 
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