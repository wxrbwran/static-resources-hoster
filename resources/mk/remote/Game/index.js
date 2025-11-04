System.register("chunks:///_virtual/Game", ['./GameBundle.ts', './GameEvent.ts', './GameGame.ts', './GamePlayer.ts', './GameStar.ts'], function () {
  return {
    setters: [null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/GameBundle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKInit.ts', './GameGame.ts'], function (exports) {
  var _inheritsLoose, cclegacy, find, mk, GameGame;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
    }, function (module) {
      mk = module.default;
    }, function (module) {
      GameGame = module.GameGame;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ec936RyJRtAF5F7F2bXFlU6", "GameBundle", undefined);
      var GameBundle = /*#__PURE__*/function (_mk$Bundle_$BundleMan) {
        _inheritsLoose(GameBundle, _mk$Bundle_$BundleMan);
        function GameBundle() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _mk$Bundle_$BundleMan.call.apply(_mk$Bundle_$BundleMan, [this].concat(args)) || this;
          _this.nameStr = "Game";
          _this.event = new mk.EventTarget();
          return _this;
        }
        var _proto = GameBundle.prototype;
        _proto.open = function open() {
          find("Canvas").addComponent(GameGame).drive();
        };
        return GameBundle;
      }(mk.Bundle_.BundleManageBase);
      var GameBundle$1 = exports('default', new GameBundle());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameEvent.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4ebb6G3PiRO24B4cNyn0gkk", "GameEvent", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKInit.ts', './GamePlayer.ts', './GameStar.ts', './GameBundle.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, mk, GamePlayer, GameStar, GameBundle;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      mk = module.default;
    }, function (module) {
      GamePlayer = module.GamePlayer;
    }, function (module) {
      GameStar = module.GameStar;
    }, function (module) {
      GameBundle = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "9931eEiSQNJn76nfv3s89OJ", "GameGame", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameGame = function (v) {
        return exports({
          GameGame: v,
          default: v
        }), v;
      }((_dec = ccclass("GameGame"), _dec(_class = /*#__PURE__*/function (_mk$ViewBase) {
        _inheritsLoose(GameGame, _mk$ViewBase);
        function GameGame() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _mk$ViewBase.call.apply(_mk$ViewBase, [this].concat(args)) || this;
          _this.data = new ( /*#__PURE__*/function () {
            function _class4() {
              /** 分数 */
              this.scoreNum = 0;
            }
            return _class4;
          }())();
          return _this;
        }
        var _proto = GameGame.prototype;
        /* ------------------------------- segmentation ------------------------------- */
        _proto.open = function open() {
          var _mk$monitor$on,
            _this2 = this;
          mk.uiManage.regis(GamePlayer, "Module/Player/GamePlayer", this);
          mk.uiManage.regis(GameStar, "Module/Star/GameStar", this);
          mk.uiManage.open(GamePlayer);
          mk.uiManage.open(GameStar);
          (_mk$monitor$on = mk.monitor.on(this.data, "scoreNum", function (newValue) {
            mk.N(_this2.node.getChildByName("Label")).label.string = "\u5F97\u5206\uFF1A" + newValue;
          })) == null || _mk$monitor$on.call(this, this.data.scoreNum);
          GameBundle.event.on(GameBundle.event.key.generateStar, function () {
            _this2.data.scoreNum++;
            _this2.scheduleOnce(function () {
              mk.uiManage.open(GameStar);
            }, 2);
          }, this);
        };
        return GameGame;
      }(mk.ViewBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GamePlayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKInit.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, view, tween, input, Input, KeyCode, mk;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      tween = module.tween;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
    }, function (module) {
      mk = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "30685GKdK9BWqmtrCna4qBA", "GamePlayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GamePlayer = function (v) {
        return exports({
          GamePlayer: v,
          default: v
        }), v;
      }((_dec = ccclass("GamePlayer"), _dec(_class = /*#__PURE__*/function (_mk$ViewBase) {
        _inheritsLoose(GamePlayer, _mk$ViewBase);
        function GamePlayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _mk$ViewBase.call.apply(_mk$ViewBase, [this].concat(args)) || this;
          _this.data = new ( /*#__PURE__*/function () {
            function _class4() {
              this.jumpDurationNum = 0.3;
              this.jumpHeightNum = 200;
              this.isAccLeft = false;
              this.isAccRight = false;
              this.xSpeedNum = 0;
              this.maxMoveSpeedNum = 400;
              this.accelNum = 300;
              this.nodeXNum = 0;
              this.nodeYNum = 0;
            }
            return _class4;
          }())();
          return _this;
        }
        var _proto = GamePlayer.prototype;
        /* ------------------------------- segmentation ------------------------------- */
        _proto.open = /*#__PURE__*/
        function () {
          var _open = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var jumpUp, jumpDown, audio;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.data.nodeYNum = this.node.position.y;
                  // 跳跃上升
                  jumpUp = tween(this.data).by(this.data.jumpDurationNum, {
                    nodeYNum: this.data.jumpHeightNum
                  }, {
                    easing: "sineOut"
                  }); // 下落
                  jumpDown = tween(this.data).by(this.data.jumpDurationNum, {
                    nodeYNum: -this.data.jumpHeightNum
                  }, {
                    easing: "sineIn"
                  });
                  /** 音频 */
                  _context.next = 5;
                  return mk.audio.add("Module/Player/Audio/jump", this);
                case 5:
                  audio = _context.sent;
                  // 不断重复
                  tween(this.data).repeatForever(tween().sequence(jumpUp, jumpDown, tween().call(function () {
                    mk.audio.play(audio);
                  }))).start();
                  input.on(Input.EventType.KEY_DOWN, function (event) {
                    switch (event.keyCode) {
                      case KeyCode.KEY_A:
                        _this2.data.isAccLeft = true;
                        break;
                      case KeyCode.KEY_D:
                        _this2.data.isAccRight = true;
                        break;
                    }
                  }, this);
                  input.on(Input.EventType.KEY_UP, function (event) {
                    switch (event.keyCode) {
                      case KeyCode.KEY_A:
                        _this2.data.isAccLeft = false;
                        break;
                      case KeyCode.KEY_D:
                        _this2.data.isAccRight = false;
                        break;
                    }
                  }, this);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function open() {
            return _open.apply(this, arguments);
          }
          return open;
        }();
        _proto.update = function update(dtNum_) {
          // 根据当前加速度方向每帧更新速度
          if (this.data.isAccLeft) {
            this.data.xSpeedNum -= this.data.accelNum * dtNum_;
          } else if (this.data.isAccRight) {
            this.data.xSpeedNum += this.data.accelNum * dtNum_;
          }

          // 限制主角的速度不能超过最大值
          if (Math.abs(this.data.xSpeedNum) > this.data.maxMoveSpeedNum) {
            // if speed reach limit, use max speed with current direction
            this.data.xSpeedNum = this.data.maxMoveSpeedNum * this.data.xSpeedNum / Math.abs(this.data.xSpeedNum);
          }

          // 根据当前速度更新主角的位置
          this.data.nodeXNum += this.data.xSpeedNum * dtNum_;
          var viewSize = view.getVisibleSize();
          if (this.data.nodeXNum < -viewSize.width * 0.5 + 50) {
            this.data.nodeXNum = -viewSize.width * 0.5 + 50;
          } else if (this.data.nodeXNum > viewSize.width * 0.5 - 50) {
            this.data.nodeXNum = viewSize.width * 0.5 - 50;
          }
          this.node.setPosition(this.data.nodeXNum, this.data.nodeYNum);
        };
        return GamePlayer;
      }(mk.ViewBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameStar.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MKInit.ts', './GameBundle.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, view, v3, Collider2D, Contact2DType, mk, GameBundle;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      v3 = module.v3;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
    }, function (module) {
      mk = module.default;
    }, function (module) {
      GameBundle = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "78e1br4cMdFKYy8IJaIaJUH", "GameStar", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameStar = exports('GameStar', (_dec = ccclass("GameStar"), _dec(_class = /*#__PURE__*/function (_mk$ViewBase) {
        _inheritsLoose(GameStar, _mk$ViewBase);
        function GameStar() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _mk$ViewBase.call.apply(_mk$ViewBase, [this].concat(args)) || this;
          _this.data = new ( /*#__PURE__*/function () {
            function _class4() {
              this.audio = void 0;
            }
            return _class4;
          }())();
          return _this;
        }
        var _proto = GameStar.prototype;
        _proto.create = function create() {
          var viewSize = view.getVisibleSize();
          var positionV3 = v3(Math.random() * (viewSize.width - 100) + 50, 380 + Math.random() * 100 - 50);
          this.node.setWorldPosition(positionV3);
        }

        // 无数据初始化
        ;

        _proto.open = /*#__PURE__*/
        function () {
          var _open = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var collider;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return mk.audio.add("Module/Star/Audio/score", this);
                case 2:
                  this.data.audio = _context.sent;
                  // 注册单个碰撞体的回调函数
                  collider = this.getComponent(Collider2D);
                  if (collider) {
                    collider.on(Contact2DType.BEGIN_CONTACT, this._onBeginContact, this);
                  }
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function open() {
            return _open.apply(this, arguments);
          }
          return open;
        }() // 模块关闭
        ;

        _proto.close = function close() {
          GameBundle.event.emit(GameBundle.event.key.generateStar);
        };
        _proto._onBeginContact = function _onBeginContact(self_, other_, contact) {
          var _this2 = this;
          // 只在两个碰撞体开始接触时被调用一次
          console.log("onBeginContact");
          mk.audio.play(this.data.audio);
          this.scheduleOnce(function () {
            _this2.close();
          });
        };
        return GameStar;
      }(mk.ViewBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Game', 'chunks:///_virtual/Game'); 
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