System.register("chunks:///_virtual/AnimationUtils.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, Node, Layers, UIOpacity, Sprite, assetManager, SpriteFrame, v3, tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Layers = module.Layers;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      v3 = module.v3;
      tween = module.tween;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "14eccGvK+pDd40mf1YiHSFj", "AnimationUtils", undefined);
      var ccclass = _decorator.ccclass;
      var AnimationUtils = exports('AnimationUtils', (_dec = ccclass('AnimationUtils'), _dec(_class = /*#__PURE__*/function () {
        function AnimationUtils() {}
        /**
         * Play image flying animation with Bezier curve
         * @param bundleName Bundle name
         * @param fromNode Start node
         * @param toNode End node
         * @param parentNode Parent node for the flying effect
         * @param completeCallback Callback when animation completes
         * @param curveType Curve type: 'up' or 'down'
         */
        AnimationUtils.playImage = function playImage(bundleName, fromNode, toNode, parentNode, completeCallback, curveType) {
          var _this = this;
          if (curveType === void 0) {
            curveType = 'up';
          }
          console.log("[AnimationUtils] playImage called with: fromNode=" + fromNode.name + ", toNode=" + toNode.name + ", parentNode=" + parentNode.name + ", curveType=" + curveType);
          var imageNode = new Node('FlyEffectNode');
          imageNode.layer = Layers.Enum.UI_2D;
          var opacity = imageNode.addComponent(UIOpacity);
          var sprite = imageNode.addComponent(Sprite);
          var bundle = assetManager.getBundle(bundleName);
          if (!bundle) {
            console.error("[AnimationUtils] Bundle " + bundleName + " not found");
            return;
          }

          // Always load asynchronously to ensure asset availability
          var path = 'cocos_lizi/fly/sybres_eft_str_02/spriteFrame';
          bundle.load(path, SpriteFrame, function (err, loadedSpriteFrame) {
            if (err) {
              console.error("[AnimationUtils] Failed to load spriteFrame: " + path, err);
              return;
            }
            sprite.spriteFrame = loadedSpriteFrame;
            _this._startAnimation(imageNode, sprite, opacity, fromNode, toNode, parentNode, bundle, completeCallback, curveType);
          });
        };
        AnimationUtils._startAnimation = function _startAnimation(imageNode, sprite, opacity, fromNode, toNode, parentNode, bundle, completeCallback, curveType) {
          if (curveType === void 0) {
            curveType = 'up';
          }
          imageNode.active = true;
          parentNode.addChild(imageNode);
          var fromPosition = fromNode.getWorldPosition();
          var toPosition = toNode.getWorldPosition();

          // Calculate control point
          var controlPosition;
          if (curveType === 'down') {
            var offsetX = (toPosition.x - fromPosition.x) * 0.3;
            var offsetY = -200;
            controlPosition = v3(fromPosition.x + offsetX, fromPosition.y + offsetY, fromPosition.z);
          } else {
            controlPosition = v3(fromPosition.x, fromPosition.y + 500, fromPosition.z);
          }

          // Convert world positions to local positions relative to parentNode
          // Note: The tween updates worldPosition directly in the old code, which is fine if we use worldPosition in update.
          // But setting worldPosition on a node requires it to be in the tree.

          imageNode.setWorldPosition(fromPosition);
          imageNode.setScale(2, 2, 1);
          tween(imageNode).to(1, {
            worldPosition: toPosition
          }, {
            onUpdate: function onUpdate(target, ratio) {
              var t = ratio;
              var p0 = fromPosition;
              var p1 = controlPosition;
              var p2 = toPosition;
              var x = (1 - t) * (1 - t) * p0.x + 2 * t * (1 - t) * p1.x + t * t * p2.x;
              var y = (1 - t) * (1 - t) * p0.y + 2 * t * (1 - t) * p1.y + t * t * p2.y;
              // z is usually 0 for UI
              imageNode.setWorldPosition(v3(x, y, 0));
            }
          }).call(function () {
            // Explosion effect
            var explosionPath = 'cocos_lizi/fly/sybres_eft_exp_04/spriteFrame';
            bundle.load(explosionPath, SpriteFrame, function (err, explosionSpriteFrame) {
              if (err) {
                console.error('[AnimationUtils] Failed to load explosion sprite', err);
                imageNode.destroy();
                if (completeCallback) completeCallback();
                return;
              }
              sprite.spriteFrame = explosionSpriteFrame;
              tween(imageNode).to(0.3, {
                scale: v3(8, 8, 1)
              }).start();
              tween(opacity).to(0.1, {
                opacity: 0
              }).call(function () {
                imageNode.destroy();
                if (completeCallback) completeCallback();
              }).start();
            });
          }).start();
        };
        return AnimationUtils;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AnimationViewModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewModel.ts', './index80.ts', './index83.ts', './soundDefine21.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, UITransform, Graphics, Color, sp, assetManager, StoreInject, ViewModel, getStore, moneyComing_Audio, SoundPathDefine;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Graphics = module.Graphics;
      Color = module.Color;
      sp = module.sp;
      assetManager = module.assetManager;
    }, function (module) {
      StoreInject = module.StoreInject;
      ViewModel = module.default;
    }, function (module) {
      getStore = module.getStore;
    }, function (module) {
      moneyComing_Audio = module.moneyComing_Audio;
    }, function (module) {
      SoundPathDefine = module.SoundPathDefine;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "c8234RwiX9BV79sxen4RPgp", "AnimationViewModel", undefined);
      var ccclass = _decorator.ccclass;
      var AnimationViewModel = exports('AnimationViewModel', (_dec = StoreInject(getStore()), _dec2 = ccclass('AnimationViewModel'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ViewModel) {
        _inheritsLoose(AnimationViewModel, _ViewModel);
        function AnimationViewModel() {
          var _this;
          _this = _ViewModel.call(this, 'MoneyComing_GameMain') || this;
          _this.previousBet = 10;
          // Initial bet is 10
          _this.isInitialized = false;
          return _this;
        }
        var _proto = AnimationViewModel.prototype;
        _proto.begin = function begin() {
          // Initialize previousBet from current state
          var state = getStore().getState();
          this.previousBet = state.betAmount;
        };
        _proto.connect = function connect(initProps) {
          var _this2 = this;
          // 1. Handle Initial State immediately
          var state = this.store.getState();
          console.log('[AnimationViewModel] connect: initial state', state);
          if (state) {
            this.onStateUpdate(state);
          }

          // 2. Subscribe to store updates
          this.store.subscribe(function () {
            var newState = _this2.store.getState();
            _this2.onStateUpdate(newState);
          });
        };
        _proto.onStateUpdate = function onStateUpdate(state) {
          var betAmount = state.betAmount;

          // Check if betAmount actually changed or if it's initialization
          if (!this.isInitialized) {
            console.log("[AnimationViewModel] onStateUpdate: Initializing with betAmount=" + betAmount);
            this.isInitialized = true;
            this.setInitialLockState(betAmount);
            this.previousBet = betAmount;
          } else if (betAmount !== this.previousBet) {
            console.log("[AnimationViewModel] onStateUpdate: Bet changed from " + this.previousBet + " to " + betAmount);
            this.handleBetChange(betAmount);
          }
        };
        _proto.setInitialLockState = function setInitialLockState(betAmount) {
          console.log("[AnimationViewModel] setInitialLockState: betAmount=" + betAmount);
          // If initial bet is 1, we need to show the locks (stand state)
          if (betAmount === 1) {
            var wheel3LockNode = this.comp.wheel3LockNode;
            if (wheel3LockNode) {
              this.showWheel3ShadowMask();
              this.playSpineAnimation(wheel3LockNode, 'spine/lock/wheel_lock', 'stand', true);
            } else {
              console.warn('[AnimationViewModel] setInitialLockState: wheel3LockNode is missing');
            }
            var luckyWheelLockNode = this.comp.luckyWheelLockNode;
            if (luckyWheelLockNode) {
              // Lucky Wheel lock stand animation
              this.playSpineAnimation(luckyWheelLockNode, 'spine/lock/unlock', 'stand', true);
            } else {
              console.warn('[AnimationViewModel] setInitialLockState: luckyWheelLockNode is missing');
            }
          } else {
            // Ensure they are hidden (already default false, but safe to enforce)
            if (this.comp.wheel3LockNode) this.comp.wheel3LockNode.active = false;
            if (this.comp.luckyWheelLockNode) this.comp.luckyWheelLockNode.active = false;
            this.hideWheel3ShadowMask();
          }
        };
        _proto.handleBetChange = function handleBetChange(newBet) {
          var previousBet = this.previousBet;
          console.log("[AnimationViewModel] handleBetChange: previous=" + previousBet + ", new=" + newBet);

          // 1. Play Sound
          if (newBet > previousBet) {
            if (moneyComing_Audio) {
              moneyComing_Audio.playOneShot(SoundPathDefine.activeFeature);
            }
          }

          // 2. Handle Lock/Unlock Animations
          if (previousBet !== 1 && newBet === 1) {
            // Switch TO Bet 1 -> LOCK
            console.log('[AnimationViewModel] Switching to Bet 1 -> LOCK');
            this.playWheel3LockAnimation();
            this.playLuckyWheelLockAnimation();
          } else if (previousBet === 1 && newBet !== 1) {
            // Switch FROM Bet 1 -> UNLOCK
            console.log('[AnimationViewModel] Switching from Bet 1 -> UNLOCK');
            this.playWheel3UnlockAnimation();
            this.playLuckyWheelUnlockAnimation();
          }
          this.previousBet = newBet;
        }

        // --- Wheel 3 Animations ---
        ;

        _proto.playWheel3LockAnimation = function playWheel3LockAnimation() {
          var _this3 = this;
          var lockNode = this.comp.wheel3LockNode;
          console.log('[AnimationViewModel] playWheel3LockAnimation: lockNode exists?', !!lockNode);
          if (!lockNode) return;

          // Show Shadow Mask
          this.showWheel3ShadowMask();

          // Play lock sound
          if (moneyComing_Audio) {
            moneyComing_Audio.playOneShot(SoundPathDefine.wheelLock);
          }
          this.playSpineAnimation(lockNode, 'spine/lock/wheel_lock', 'lock', false, function () {
            _this3.playSpineAnimation(lockNode, 'spine/lock/wheel_lock', 'stand', true);
          });
        };
        _proto.playWheel3UnlockAnimation = function playWheel3UnlockAnimation() {
          var lockNode = this.comp.wheel3LockNode;
          if (!lockNode) return;

          // Hide Shadow Mask
          this.hideWheel3ShadowMask();
          this.playSpineAnimation(lockNode, 'spine/lock/wheel_lock', 'unlock', false, function () {
            lockNode.active = false;
          });
        };
        _proto.showWheel3ShadowMask = function showWheel3ShadowMask() {
          // Create or get shadow mask node
          var wheel3 = this.comp.wheels[2];
          if (!wheel3 || !wheel3.node) return;
          var shadowMask = wheel3.node.getChildByName('wheel_shadow_mask');
          if (!shadowMask) {
            shadowMask = new Node('wheel_shadow_mask');
            wheel3.node.addChild(shadowMask);
            shadowMask.setPosition(-7, 0, 0); // Offset from old project
            shadowMask.setScale(1.25, 1, 1);
            var uiTransform = shadowMask.addComponent(UITransform);
            uiTransform.setContentSize(200, 400); // Approximate size

            // Add Graphics for black overlay
            var graphics = shadowMask.addComponent(Graphics);
            graphics.clear();
            graphics.fillColor = new Color(0, 0, 0, 128); // 50% opacity black
            graphics.rect(-100, -200, 200, 400);
            graphics.fill();
          }
          shadowMask.active = true;
          // Ensure it's behind the lock animation but above the wheel
          var lockNode = this.comp.wheel3LockNode;
          if (lockNode) {
            shadowMask.setSiblingIndex(Math.max(0, lockNode.getSiblingIndex() - 1));
          } else {
            shadowMask.setSiblingIndex(wheel3.node.children.length - 1);
          }
        };
        _proto.hideWheel3ShadowMask = function hideWheel3ShadowMask() {
          var wheel3 = this.comp.wheels[2];
          if (!wheel3 || !wheel3.node) return;
          var shadowMask = wheel3.node.getChildByName('wheel_shadow_mask');
          if (shadowMask) {
            shadowMask.active = false;
          }
        }

        // --- Lucky Wheel Animations ---
        ;

        _proto.playLuckyWheelLockAnimation = function playLuckyWheelLockAnimation() {
          var _this4 = this;
          var lockNode = this.comp.luckyWheelLockNode;
          if (!lockNode) return;

          // Note: Lucky Wheel uses 'spine/lock/unlock' resource for lock animation
          // Animations: start (lock), end (unlock), stand
          this.playSpineAnimation(lockNode, 'spine/lock/unlock', 'start', false, function () {
            _this4.playSpineAnimation(lockNode, 'spine/lock/unlock', 'stand', true);
          });
        };
        _proto.playLuckyWheelUnlockAnimation = function playLuckyWheelUnlockAnimation() {
          var lockNode = this.comp.luckyWheelLockNode;
          if (!lockNode) return;
          this.playSpineAnimation(lockNode, 'spine/lock/unlock', 'end', false, function () {
            lockNode.active = false;
          });
        }

        // --- Symbol Animations ---
        ;

        _proto.playSymbolAnimation = function playSymbolAnimation(node, animName, loop) {
          if (loop === void 0) {
            loop = false;
          }
          if (!node) return;

          // Check if node has a spine component or if we need to add one to a child
          // Usually symbols are Sprites. To play a spine animation "on top" or "replacing" it, 
          // we might need a dedicated animation node.
          // In the old project, SymbolAnimator.playAnimationAt created a new node or used an existing one.

          var animNode = node.getChildByName('symbol_anim');
          if (!animNode) {
            animNode = new Node('symbol_anim');
            node.addChild(animNode);
            animNode.setPosition(0, 0, 0);
          }

          // Ensure scale is correct (sometimes symbols are scaled)
          animNode.setScale(1, 1, 1);
          // Actually old project used: MoneyComingConfig.constants.bundleName (moneyComing)
          // And path? SymbolAnimator.ts would be useful to see the path construction.
          // But assuming 'spine/symbol/all_respin/all_respin' is a safe bet for now or 'spine/all_respin/all_respin'.
          // Let's try 'spine/symbol/${animName}/${animName}' first, or check file list if possible.
          // Given I can't check file list easily without search, I'll use a generic path and log error if fail.
          // Wait, old project RespinManager used: MoneyComingConfig.constants.featureAllRespinKeyword ('feature_all_respin')
          // And SymbolAnimator.playAnimationAt(..., 'feature_all_respin', ...)
          // So animName is 'feature_all_respin'.
          // Path might be `spine/feature_all_respin/feature_all_respin`?
          // Let's try `spine/${animName}/${animName}`.

          this.playSpineAnimation(animNode, "spine/" + animName + "/" + animName, 'animation', loop);
        }

        // --- Helper ---
        ;

        _proto.playSpineAnimation = function playSpineAnimation(node, path, animName, loop, onComplete) {
          if (!node) {
            console.warn('[AnimationViewModel] playSpineAnimation: node is null');
            return;
          }
          console.log("[AnimationViewModel] playSpineAnimation: path=" + path + ", anim=" + animName + ", node=" + node.name + ", active=" + node.active);
          node.active = true;
          var skeleton = node.getComponent(sp.Skeleton);
          if (!skeleton) {
            skeleton = node.addComponent(sp.Skeleton);
            console.log('[AnimationViewModel] Added sp.Skeleton component');
          }
          var bundle = assetManager.getBundle('moneyComing');
          if (!bundle) {
            console.error('[AnimationViewModel] Failed to get bundle: moneyComing');
            return;
          }
          bundle.load(path, sp.SkeletonData, function (err, skeletonData) {
            if (err || !skeleton) {
              console.error("[AnimationViewModel] Failed to load spine: " + path, err);
              return;
            }
            console.log("[AnimationViewModel] Spine loaded successfully: " + path);
            skeleton.skeletonData = skeletonData;
            skeleton.premultipliedAlpha = true;

            // Ensure UITransform matches parent if needed, but usually node size is 0 and spine handles it.
            // If specific sizing is needed, it should be done in init.

            var trackEntry = skeleton.setAnimation(0, animName, loop);
            console.log("[AnimationViewModel] Animation set: " + animName + ", trackEntry=" + !!trackEntry);
            if (trackEntry && !loop && onComplete) {
              skeleton.setCompleteListener(function () {
                skeleton.setCompleteListener(null);
                onComplete();
              });
            }
          });
        };
        return AnimationViewModel;
      }(ViewModel)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BetSelection.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "12345Z4AAAAAAAAAAAAAAAA", "BetSelection", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BetSelection = exports('BetSelection', (_dec = ccclass('BetSelection'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BetSelection, _Component);
        function BetSelection() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = BetSelection.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return BetSelection;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/config20.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "18850r0KmRN6qlyxOsoJpRt", "config", undefined);
      var config = exports('default', {
        sktCode: "MoneyComing",
        name: "MoneyComing",
        gameId: 14007,
        // MCP 游戏 ID
        isTest: false,
        seatNumber: 1,
        isReconnect: false,
        memberId: '',
        testConfig: {
          wsUrl: "",
          token: "",
          uid: ''
        },
        // API 配置
        api: {
          useMCP: true,
          // 是否使用 MCP 服务器
          gameId: 14007,
          // MCP 游戏 ID
          variantId: 'standard' // 游戏变体 ID
        },

        gameConfig: {
          /**
           * @description 自动旋转相关配置
           */
          autoSpin: {
            totalSpins: 50,
            intervals: {
              normal: 1.0,
              turbo: 0.5,
              superTurbo: 0.2
            }
          },
          /**
           * @description 依次停止动画
           */
          sequentialStop: {
            initialStopDelay: 4.5,
            wheelStopInterval: 0.2
          },
          /**
           * @description 同时停止动画
           */
          simultaneousStop: {
            normal: {
              scrollDuration: 3,
              stopDuration: 0.1
            },
            turbo: {
              scrollDuration: 2,
              stopDuration: 0.1
            },
            superTurbo: {
              scrollDuration: 1,
              stopDuration: 0.1
            }
          },
          /**
           * @description 幸运轮盘奖金
           */
          luckyWheelPrizes: {
            5: [1000, 250, 50, 150, 75, 500, 25, 100],
            10: [2000, 500, 100, 300, 150, 1000, 50, 200],
            50: [50000, 10000, 1000, 5000, 1500, 25000, 500, 2500],
            100: [100000, 20000, 2000, 10000, 3000, 50000, 1000, 5000]
          },
          /**
           * @description 幸运轮盘动画
           */
          luckyWheel: {
            spinDuration: 6.0,
            accelerationDuration: 0.5,
            decelerationDuration: 1.0,
            maxRotationSpeed: 720,
            easing: 'cubicOut',
            anglePerPrize: 45,
            startAngleOffset: 0
          },
          /**
           * @description 游戏玩法数值
           */
          gameplay: {
            winDisplayDuration: 0.1,
            symbolProbability: 0.8,
            bigWin: {
              big: 1500 * 100,
              mega: 3000 * 100,
              "super": 5000 * 100
            }
          },
          constants: {
            elementPrefix: 'element_',
            featureMultiplierPrefix: 'feature_x',
            featureScatterKeyword: 'feature_scatter',
            featureAllRespinKeyword: 'feature_all_respin',
            bundleName: 'moneyComing'
          }
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/game37.ts", ['cc', './index.mjs_cjs=&original=2.js', './index2.js'], function (exports) {
  var cclegacy, _cjsExports;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4b354Q8P1pH4K0SMiEw2Kdu", "game", undefined);
      var updateBalance = exports('updateBalance', _cjsExports.createAction('UPDATE_BALANCE'));
      var updateBet = exports('updateBet', _cjsExports.createAction('UPDATE_BET'));
      var updateWin = exports('updateWin', _cjsExports.createAction('UPDATE_WIN'));
      var setSpinning = exports('setSpinning', _cjsExports.createAction('SET_SPINNING'));
      var setRespin = exports('setRespin', _cjsExports.createAction('SET_RESPIN'));
      var setSpinResults = exports('setSpinResults', _cjsExports.createAction('SET_SPIN_RESULTS'));
      var setTurboMode = exports('setTurboMode', _cjsExports.createAction('SET_TURBO_MODE'));
      var setAutoSpin = exports('setAutoSpin', _cjsExports.createAction('SET_AUTO_SPIN'));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameMainViewModel2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewModel.ts', './index61.ts', './index80.ts', './MoneyComing_GameMain.ts', './socketConnect20.ts', './index81.ts', './game37.ts', './config20.ts', './index83.ts', './soundDefine21.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, StoreInject, ViewModel, global, getStore, MoneyComing_GameMain, moneyComingWebSocketDriver, SKT_MAG_TYPE, bundlePkgName, setAutoSpin, setTurboMode, updateBet, updateWin, updateBalance, setSpinning, setSpinResults, setRespin, config, moneyComing_Audio, SoundPathDefine;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      StoreInject = module.StoreInject;
      ViewModel = module.default;
    }, function (module) {
      global = module.global;
    }, function (module) {
      getStore = module.getStore;
    }, function (module) {
      MoneyComing_GameMain = module.MoneyComing_GameMain;
    }, function (module) {
      moneyComingWebSocketDriver = module.moneyComingWebSocketDriver;
      SKT_MAG_TYPE = module.SKT_MAG_TYPE;
    }, function (module) {
      bundlePkgName = module.bundlePkgName;
    }, function (module) {
      setAutoSpin = module.setAutoSpin;
      setTurboMode = module.setTurboMode;
      updateBet = module.updateBet;
      updateWin = module.updateWin;
      updateBalance = module.updateBalance;
      setSpinning = module.setSpinning;
      setSpinResults = module.setSpinResults;
      setRespin = module.setRespin;
    }, function (module) {
      config = module.default;
    }, function (module) {
      moneyComing_Audio = module.moneyComing_Audio;
    }, function (module) {
      SoundPathDefine = module.SoundPathDefine;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "d5bd4ymCwtHVZf5COZPZI7Z", "GameMainViewModel", undefined);
      var ccclass = _decorator.ccclass;
      var GameMainViewModel = exports('GameMainViewModel', (_dec = StoreInject(getStore()), _dec2 = ccclass('GameMainViewModel'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ViewModel) {
        _inheritsLoose(GameMainViewModel, _ViewModel);
        function GameMainViewModel() {
          var _this;
          _this = _ViewModel.call(this, MoneyComing_GameMain) || this;
          // 保存最近一次 Spin 的 MCP 返回数据
          _this.lastSpinData = null;
          return _this;
        }
        var _proto = GameMainViewModel.prototype;
        _proto.begin = function begin() {
          this.listenServerMsg();
          // 播放背景音乐（参考 starlightV2 实现）
          this.playBgMusic();
        };
        _proto.connect = function connect(initProps) {
          var _this2 = this;
          this.inject(initProps, function (state) {
            console.log('[GameMainViewModel] inject selector 被调用, state.spinResults:', state.spinResults);
            return {
              balance: state.balance,
              betAmount: state.betAmount,
              winAmount: state.winAmount,
              spinResults: state.spinResults,
              isSpinning: state.isSpinning,
              isRespin: state.isRespin,
              // 添加 isRespin
              turboMode: state.turboMode,
              autoSpin: state.autoSpin
            };
          });
          this.setEvent({
            onSpin: function onSpin() {
              _this2.onSpin();
            },
            onAutoSpin: function onAutoSpin() {
              // 切换 autoSpin 状态
              var currentAutoSpin = _this2.comp.props.autoSpin;
              if (!currentAutoSpin) {
                // 开始 autoSpin
                console.log('[MoneyComing] 开始 AutoSpin');
                _this2.dispatch(setAutoSpin(true));
                _this2.onSpin(); // 立即执行第一次 spin
              } else {
                // 停止 autoSpin
                // 注意：不要取消所有回调，让当前的 spin 正常完成
                // 只需要设置 autoSpin = false，onSpinComplete 中会检查这个状态
                console.log('[MoneyComing] 停止 AutoSpin');
                _this2.dispatch(setAutoSpin(false));
              }
            },
            onTurbo: function onTurbo() {
              // 循环切换 turbo 模式：0 (normal) -> 1 (turbo) -> 2 (super turbo) -> 0
              var newMode = (_this2.comp.props.turboMode + 1) % 3;
              console.log('[MoneyComing] 切换 Turbo 模式:', newMode === 0 ? 'Normal' : newMode === 1 ? 'Turbo' : 'Super Turbo');
              _this2.dispatch(setTurboMode(newMode));
            },
            onBetChange: function onBetChange(amount) {
              var currentBet = _this2.comp.props.betAmount;
              if (amount > currentBet) {
                moneyComing_Audio.playOneShot(SoundPathDefine.activeFeature);
              }
              _this2.dispatch(updateBet(amount));
            },
            onSpinComplete: function onSpinComplete() {
              // 轮盘停止后，使用 MCP 返回的数据
              var results = _this2.comp.props.spinResults;

              // Check for All Respin Feature
              if (results[3] === 'feature_all_respin' && _this2.respinViewModel) {
                console.log('[MoneyComing] 触发 All Respin Feature');
                _this2.handleAllRespinFlow(results);
                return;
              }

              // Check for Scatter Feature
              if (results[3] && results[3].includes('scatter')) {
                console.log('[MoneyComing] 触发 Scatter Feature');
                _this2.handleScatterFlow(results);
                return;
              }

              // 使用 MCP 返回的中奖金额和余额
              var winAmount = _this2.lastSpinData ? _this2.lastSpinData.winAmount : 0;
              var newBalance = _this2.lastSpinData ? _this2.lastSpinData.balance : _this2.comp.props.balance;
              console.log('[MoneyComing] 轮盘停止完成，MCP 返回:');
              console.log('  - 中奖金额:', winAmount, '元');
              console.log('  - 新余额:', newBalance, '元');
              console.log('  - lastSpinData:', _this2.lastSpinData);

              // Play Win Animations
              _this2.comp.playWinAnimations(results);

              // Check for Big Win using shared method
              _this2.checkAndPlayBigWin(winAmount, function () {
                _this2.dispatch(updateWin(winAmount));
                _this2.dispatch(updateBalance(newBalance));
                _this2.dispatch(setSpinning(false));
                _this2.handleAutoSpin();
              });
            }
          });
          return this;
        };
        _proto.handleAutoSpin = function handleAutoSpin() {
          var _this3 = this;
          // 如果是 autoSpin 模式，调度下一次 spin
          if (this.comp.props.autoSpin) {
            var interval = this.getAutoSpinInterval();
            console.log("[MoneyComing] AutoSpin \u4E0B\u4E00\u6B21\u5EF6\u8FDF: " + interval + "\u79D2");
            this.comp.scheduleOnce(function () {
              if (_this3.comp.props.autoSpin) {
                // 再次检查，防止在延迟期间被停止
                _this3.onSpin();
              }
            }, interval);
          }
        };
        _proto.handleAllRespinFlow = /*#__PURE__*/function () {
          var _handleAllRespinFlow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(initialResults) {
            var _this4 = this;
            var initialBalance, initialWin, respinVM, betAmount;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  console.log('[MoneyComing] ========== All Respin Flow 开始 ==========');

                  // 从 lastSpinData 获取第一次 Spin 的数据
                  initialBalance = this.lastSpinData ? this.lastSpinData.balance : this.comp.props.balance;
                  initialWin = this.lastSpinData ? this.lastSpinData.winAmount : 0;
                  console.log('[MoneyComing] 第一次 Spin:');
                  console.log('  - 初始中奖:', initialWin, '元');
                  console.log('  - 当前余额:', initialBalance, '元');

                  // 显示初始中奖金额
                  this.dispatch(updateWin(initialWin));
                  this.dispatch(updateBalance(initialBalance));

                  // Delegate to RespinViewModel 播放动画
                  respinVM = this.respinViewModel;
                  betAmount = this.comp.props.betAmount;
                  _context2.next = 12;
                  return respinVM.handleAllRespin(initialResults,
                  // onComplete: 当 Respin 完成时调用
                  function (results) {
                    console.log('[MoneyComing] Respin 完成，最终结果:', results);

                    // 使用 lastSpinData 中存储的 API 返回数据
                    if (_this4.lastSpinData) {
                      var totalWin = _this4.lastSpinData.winAmount;
                      var newBalance = _this4.lastSpinData.balance;
                      console.log('[MoneyComing] 更新最终状态:');
                      console.log('  - 总中奖:', totalWin, '元');
                      console.log('  - 新余额:', newBalance, '元');
                      _this4.checkAndPlayBigWin(totalWin, function () {
                        _this4.dispatch(updateWin(totalWin));
                        _this4.dispatch(updateBalance(newBalance));
                        _this4.dispatch(setSpinning(false));
                        console.log('[MoneyComing] ========== All Respin Flow 完成 ==========');
                        _this4.handleAutoSpin();
                      });
                    } else {
                      console.error('[MoneyComing] lastSpinData 丢失，无法更新状态');
                      _this4.dispatch(setSpinning(false));
                    }
                  }, /*#__PURE__*/
                  // resultsGenerator: 生成 Respin 结果（调用 MCP API）
                  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    var respinData;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          console.log('[MoneyComing] 调用 MCP API 获取 Respin 结果...');
                          _context.prev = 1;
                          _context.next = 4;
                          return moneyComingWebSocketDriver.api.spin(betAmount);
                        case 4:
                          respinData = _context.sent;
                          console.log('[MoneyComing] Respin API 返回:');
                          console.log('  - Respin 中奖:', respinData.winAmount, '元（本次免费转）');
                          console.log('  - 总中奖:', respinData.totalWinAmount, '元（基础 + 免费转）');
                          console.log('  - 新余额:', respinData.balance, '元');
                          console.log('  - Respin 结果:', respinData.spinResults);

                          // 存储 API 返回数据，供 onComplete 使用
                          _this4.lastSpinData = {
                            winAmount: respinData.totalWinAmount,
                            // 使用总中奖金额
                            balance: respinData.balance
                          };

                          // 返回 Respin 结果
                          return _context.abrupt("return", respinData.spinResults);
                        case 14:
                          _context.prev = 14;
                          _context.t0 = _context["catch"](1);
                          console.error('[MoneyComing] Respin API 调用失败:', _context.t0);
                          global.hallDispatch({
                            type: 'ADD_TOAST',
                            payload: {
                              content: 'Respin 失败'
                            }
                          });
                          // 返回初始结果作为fallback
                          return _context.abrupt("return", initialResults);
                        case 19:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee, null, [[1, 14]]);
                  })));
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function handleAllRespinFlow(_x) {
            return _handleAllRespinFlow.apply(this, arguments);
          }
          return handleAllRespinFlow;
        }();
        _proto.handleScatterFlow = /*#__PURE__*/function () {
          var _handleScatterFlow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(results) {
            var _this5 = this;
            var betAmount, baseWin, initialBalance, initialWin;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  console.log('[MoneyComing] ========== Scatter Flow 开始 ==========');
                  betAmount = this.comp.props.betAmount;
                  baseWin = this.calculateWinAmount(results, betAmount);
                  console.log('[MoneyComing] 第一次 Spin - 基础中奖:', baseWin, '元');

                  // 获取初始余额和中奖金额
                  initialBalance = this.lastSpinData ? this.lastSpinData.balance : this.comp.props.balance;
                  initialWin = this.lastSpinData ? this.lastSpinData.winAmount : baseWin; // 显示初始中奖金额
                  this.dispatch(updateWin(initialWin));
                  this.dispatch(updateBalance(initialBalance));

                  // Show Feature Panel (Scatter)
                  this.comp.showFeaturePanel(baseWin, 'scatter', betAmount);

                  // Play Feature Symbol Animation
                  this.comp.playFeatureSymbolAnimation(results[3]);

                  // Play Fly Animation
                  this.comp.playScatterFlyAnimation(betAmount, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                    var wheelData, _prizeIndex, bonusWin, _wheelData$featureRes, mcpIndex, featureWin, prizeConfig, prizeIndex, finalIndex, luckyWheelVM, _prizeIndex2, _bonusWin;
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                        case 0:
                          console.log('[MoneyComing] Scatter Fly Complete, 调用 MCP API 获取 Lucky Wheel 结果...');
                          _context3.prev = 1;
                          _context3.next = 4;
                          return moneyComingWebSocketDriver.api.spin(betAmount);
                        case 4:
                          wheelData = _context3.sent;
                          console.log('[MoneyComing] Lucky Wheel API 返回:');
                          console.log('  - featureResult:', wheelData.featureResult);
                          console.log('  - 总中奖:', wheelData.totalWinAmount, '元（基础 + Lucky Wheel）');
                          console.log('  - 新余额:', wheelData.balance, '元');

                          // 检查是否有 featureResult
                          if (wheelData.featureResult) {
                            _context3.next = 15;
                            break;
                          }
                          console.error('[MoneyComing] API 返回缺少 featureResult，使用 Mock 数据');
                          // Fallback to mock
                          _prizeIndex = Math.floor(Math.random() * 8);
                          bonusWin = betAmount * (_prizeIndex + 1) * 5;
                          _this5.handleLuckyWheelSpin(_prizeIndex, bonusWin, baseWin, initialBalance);
                          return _context3.abrupt("return");
                        case 15:
                          _wheelData$featureRes = wheelData.featureResult, mcpIndex = _wheelData$featureRes.selectedIndex, featureWin = _wheelData$featureRes.winAmount;
                          console.log("[MoneyComing] MCP \u8FD4\u56DE: selectedIndex=" + mcpIndex + ", Feature \u4E2D\u5956: " + featureWin + " \u5143");

                          // 根据 winAmount 查找正确的 prizeIndex（因为 MCP 的 selectedIndex 和配置数组可能不匹配）
                          prizeConfig = config.gameConfig.luckyWheelPrizes[betAmount];
                          prizeIndex = prizeConfig ? prizeConfig.indexOf(featureWin) : -1;
                          if (prizeIndex === -1) {
                            console.warn("[MoneyComing] \u672A\u627E\u5230\u5339\u914D\u7684\u5956\u54C1\u91D1\u989D " + featureWin + "\uFF0C\u4F7F\u7528 MCP index " + mcpIndex);
                          }
                          finalIndex = prizeIndex !== -1 ? prizeIndex : mcpIndex;
                          console.log("[MoneyComing] Lucky Wheel \u5B9E\u9645\u505C\u6B62\u4F4D\u7F6E: " + finalIndex);

                          // Spin Lucky Wheel
                          luckyWheelVM = _this5.luckyWheelViewModel;
                          if (luckyWheelVM) {
                            luckyWheelVM.spin(finalIndex, function () {
                              console.log('[MoneyComing] Lucky Wheel Spin Complete');

                              // 更新 Feature Bonus 显示
                              _this5.comp.updateFeatureBonus(featureWin);
                              moneyComing_Audio.playOneShot(SoundPathDefine.scatterOver);
                              setTimeout(function () {
                                // 使用 API 返回的 totalWinAmount（基础 + Feature）
                                var totalWin = wheelData.totalWinAmount;

                                // 存储最新数据
                                _this5.lastSpinData = {
                                  winAmount: totalWin,
                                  balance: wheelData.balance
                                };
                                _this5.checkAndPlayBigWin(totalWin, function () {
                                  _this5.dispatch(updateWin(totalWin));
                                  _this5.dispatch(updateBalance(wheelData.balance));
                                  _this5.dispatch(setSpinning(false));
                                  _this5.comp.hideFeaturePanel();
                                  console.log('[MoneyComing] ========== Scatter Flow 完成 ==========');
                                  _this5.handleAutoSpin();
                                });
                              }, 2000);
                            });
                          } else {
                            console.error('[MoneyComing] LuckyWheelViewModel not found');
                            _this5.dispatch(setSpinning(false));
                            _this5.comp.hideFeaturePanel();
                          }
                          _context3.next = 32;
                          break;
                        case 26:
                          _context3.prev = 26;
                          _context3.t0 = _context3["catch"](1);
                          console.error('[MoneyComing] Lucky Wheel API 调用失败:', _context3.t0);
                          // Fallback to mock behavior
                          _prizeIndex2 = Math.floor(Math.random() * 8);
                          _bonusWin = betAmount * (_prizeIndex2 + 1) * 5;
                          _this5.handleLuckyWheelSpin(_prizeIndex2, _bonusWin, baseWin, initialBalance);
                        case 32:
                        case "end":
                          return _context3.stop();
                      }
                    }, _callee3, null, [[1, 26]]);
                  })));
                case 11:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function handleScatterFlow(_x2) {
            return _handleScatterFlow.apply(this, arguments);
          }
          return handleScatterFlow;
        }()
        /**
         * Fallback: 使用 Mock 数据处理 Lucky Wheel（当 API 失败时）
         */;

        _proto.handleLuckyWheelSpin = function handleLuckyWheelSpin(prizeIndex, bonusWin, baseWin, balance) {
          var _this6 = this;
          var luckyWheelVM = this.luckyWheelViewModel;
          if (luckyWheelVM) {
            luckyWheelVM.spin(prizeIndex, function () {
              _this6.comp.updateFeatureBonus(bonusWin);
              moneyComing_Audio.playOneShot(SoundPathDefine.scatterOver);
              setTimeout(function () {
                var totalWin = baseWin + bonusWin;
                _this6.checkAndPlayBigWin(totalWin, function () {
                  _this6.dispatch(updateWin(totalWin));
                  _this6.dispatch(updateBalance(balance - _this6.comp.props.betAmount + totalWin));
                  _this6.dispatch(setSpinning(false));
                  _this6.comp.hideFeaturePanel();
                  _this6.handleAutoSpin();
                });
              }, 2000);
            });
          } else {
            console.error('[MoneyComing] LuckyWheelViewModel not found');
            this.dispatch(setSpinning(false));
            this.comp.hideFeaturePanel();
          }
        }

        /**
         * 崩溃恢复：继续未完成的 All Respin 流程
         * 用于进入游戏时检测到 roundCompleted=false 且 triggeredFeature.type='freeSpin'
         */;
        _proto.recoverAllRespin = /*#__PURE__*/
        function () {
          var _recoverAllRespin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var _this7 = this;
            var currentResults, betAmount, wheels, i, wheel, respinVM;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  console.log('[GameMainViewModel] ========== 开始 All Respin 崩溃恢复 ==========');

                  // 第一次 spin 的结果已经显示（通过 initialReels），现在直接播放 respin 动画并调用第二次 spin API
                  currentResults = this.comp.props.spinResults || [];
                  betAmount = this.comp.props.betAmount;
                  console.log('[GameMainViewModel] 当前显示结果:', currentResults);
                  console.log('[GameMainViewModel] 投注金额:', betAmount, '元');

                  // ⚠️ 关键：在设置任何 Redux 状态之前，先锁定所有轮子，防止 useProps 触发转动
                  console.log('[GameMainViewModel] 提前锁定所有轮子，防止任何转动');
                  wheels = this.comp.wheels;
                  if (wheels && wheels.length >= 4) {
                    for (i = 0; i < 4; i++) {
                      wheel = wheels[i];
                      if (wheel) {
                        wheel.lock();
                        wheel._isSpinning = false;
                        wheel._spinState = 0;
                        if (currentResults[i]) {
                          wheel.showResult(currentResults[i], false);
                        }
                        console.log("[GameMainViewModel] \u8F6E\u5B50 " + i + " \u5DF2\u63D0\u524D\u9501\u5B9A:", currentResults[i]);
                      }
                    }
                  }

                  // 标记正在 spinning 和 respin 模式（防止用户干扰，防止 useProps 自动调用 stopSpin）
                  // ⚠️ 重要：必须先设置 isRespin=true，再设置 isSpinning=true
                  // 因为 setSpinning(true) 会触发 useProps，useProps 会检查 isRespin 来决定是否自动启动转动
                  this.dispatch(setRespin(true));
                  console.log('[GameMainViewModel] 恢复流程：已设置 isRespin=true');

                  // 延迟 50ms 确保 isRespin 更新到组件 props
                  _context6.next = 12;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 50);
                  });
                case 12:
                  this.dispatch(setSpinning(true));
                  console.log('[GameMainViewModel] 恢复流程：已设置 isSpinning=true');

                  // Delegate to RespinViewModel 播放 respin 动画
                  respinVM = this.respinViewModel;
                  if (respinVM) {
                    _context6.next = 19;
                    break;
                  }
                  console.error('[GameMainViewModel] RespinViewModel 未找到，无法恢复');
                  this.dispatch(setSpinning(false));
                  return _context6.abrupt("return");
                case 19:
                  _context6.next = 21;
                  return respinVM.handleAllRespin(currentResults,
                  // onComplete: 当 Respin 完成时调用
                  function (results) {
                    console.log('[GameMainViewModel] 恢复的 Respin 完成，最终结果:', results);

                    // 使用 lastSpinData 中存储的 API 返回数据
                    if (_this7.lastSpinData) {
                      var totalWin = _this7.lastSpinData.winAmount;
                      var newBalance = _this7.lastSpinData.balance;
                      console.log('[GameMainViewModel] 恢复完成，更新最终状态:');
                      console.log('  - 总中奖:', totalWin, '元');
                      console.log('  - 新余额:', newBalance, '元');
                      _this7.checkAndPlayBigWin(totalWin, function () {
                        _this7.dispatch(updateWin(totalWin));
                        _this7.dispatch(updateBalance(newBalance));
                        _this7.dispatch(setSpinning(false));
                        console.log('[GameMainViewModel] ========== All Respin 崩溃恢复完成 ==========');
                      });
                    } else {
                      console.error('[GameMainViewModel] lastSpinData 丢失，无法更新状态');
                      _this7.dispatch(setSpinning(false));
                    }
                  }, /*#__PURE__*/
                  // resultsGenerator: 生成 Respin 结果（调用 MCP API）
                  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                    var respinData;
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          console.log('[GameMainViewModel] 调用 MCP API 获取恢复的 Respin 结果...');
                          _context5.prev = 1;
                          _context5.next = 4;
                          return moneyComingWebSocketDriver.api.spin(betAmount);
                        case 4:
                          respinData = _context5.sent;
                          console.log('[GameMainViewModel] 恢复的 Respin API 返回:');
                          console.log('  - Respin 中奖:', respinData.winAmount, '元（本次免费转）');
                          console.log('  - 总中奖:', respinData.totalWinAmount, '元（基础 + 免费转）');
                          console.log('  - 新余额:', respinData.balance, '元');
                          console.log('  - Respin 结果:', respinData.spinResults);

                          // 存储 API 返回数据，供 onComplete 使用
                          _this7.lastSpinData = {
                            winAmount: respinData.totalWinAmount,
                            // 使用总中奖金额
                            balance: respinData.balance
                          };

                          // 返回 Respin 结果
                          return _context5.abrupt("return", respinData.spinResults);
                        case 14:
                          _context5.prev = 14;
                          _context5.t0 = _context5["catch"](1);
                          console.error('[GameMainViewModel] 恢复的 Respin API 调用失败:', _context5.t0);
                          global.hallDispatch({
                            type: 'ADD_TOAST',
                            payload: {
                              content: 'Respin 恢复失败'
                            }
                          });
                          _this7.dispatch(setSpinning(false));
                          // 返回当前结果作为 fallback
                          return _context5.abrupt("return", currentResults);
                        case 20:
                        case "end":
                          return _context5.stop();
                      }
                    }, _callee5, null, [[1, 14]]);
                  })), true // isRecovery = true，跳过 feature 符号动画和面板显示
                  );

                case 21:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function recoverAllRespin() {
            return _recoverAllRespin.apply(this, arguments);
          }
          return recoverAllRespin;
        }()
        /**
         * 崩溃恢复：继续未完成的 Scatter 流程
         * 用于进入游戏时检测到 roundCompleted=false 且 triggeredFeature.type='simpleWheel'
         */;

        _proto.recoverScatter = /*#__PURE__*/
        function () {
          var _recoverScatter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var _this8 = this;
            var currentResults, betAmount, baseWin, wheels, i, wheel, wheelData, _wheels, _i, _wheelData$featureRes2, mcpIndex, featureWin, prizeConfig, prizeIndex, finalIndex, luckyWheelVM, _wheels2, _i2, _wheels3, _i4;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  console.log('[GameMainViewModel] ========== 开始 Scatter 崩溃恢复 ==========');

                  // 第一次 spin 的结果已经显示（通过 initialReels），现在直接播放轮盘动画并调用 API
                  currentResults = this.comp.props.spinResults || [];
                  betAmount = this.comp.props.betAmount;
                  console.log('[GameMainViewModel] 当前显示结果:', currentResults);
                  console.log('[GameMainViewModel] 投注金额:', betAmount, '元');

                  // 计算第一次 spin 的基础中奖（不包含轮盘倍数）
                  baseWin = this.calculateWinAmount(currentResults, betAmount);
                  console.log('[GameMainViewModel] 第一次 Spin 基础中奖:', baseWin, '元');

                  // Scatter 恢复时，直接锁定所有轮子（防止任何转动）
                  console.log('[GameMainViewModel] 锁定所有轮子，防止转动');
                  wheels = this.comp.wheels;
                  if (wheels && wheels.length >= 4) {
                    for (i = 0; i < 4; i++) {
                      wheel = wheels[i];
                      if (wheel) {
                        wheel.lock();
                        wheel._isSpinning = false;
                        wheel._spinState = 0;
                        if (currentResults[i]) {
                          wheel.showResult(currentResults[i], false);
                        }
                        console.log("[GameMainViewModel] \u8F6E\u5B50 " + i + " \u5DF2\u9501\u5B9A:", currentResults[i]);
                      }
                    }
                  }

                  // 标记正在 feature 中（防止用户干扰）
                  // ⚠️ 重要：必须先设置 isRespin=true，再设置 isSpinning=true
                  // 因为 setSpinning(true) 会触发 useProps，useProps 会检查 isRespin 来决定是否自动启动转动
                  this.dispatch(setRespin(true));
                  console.log('[GameMainViewModel] 恢复流程：已设置 isRespin=true');

                  // 延迟 50ms 确保 isRespin 更新到组件 props
                  _context7.next = 14;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 50);
                  });
                case 14:
                  this.dispatch(setSpinning(true));
                  console.log('[GameMainViewModel] 恢复流程：已设置 isSpinning=true（禁用按钮）');

                  // 显示 Feature Panel (跳过符号动画，直接显示)
                  this.comp.showFeaturePanel(baseWin, 'scatter', betAmount);

                  // 播放 scatter 飞向 lucky wheel 的飞行动画
                  console.log('[GameMainViewModel] 播放 scatter 飞行动画...');
                  _context7.next = 20;
                  return new Promise(function (resolve) {
                    _this8.comp.playScatterFlyAnimation(betAmount, function () {
                      console.log('[GameMainViewModel] Scatter 飞行动画完成');
                      resolve();
                    });
                  });
                case 20:
                  console.log('[GameMainViewModel] 调用 MCP API 获取 Lucky Wheel 结果...');
                  _context7.prev = 21;
                  _context7.next = 24;
                  return moneyComingWebSocketDriver.api.spin(betAmount);
                case 24:
                  wheelData = _context7.sent;
                  console.log('[GameMainViewModel] Lucky Wheel API 返回:');
                  console.log('  - featureResult:', wheelData.featureResult);
                  console.log('  - 总中奖:', wheelData.totalWinAmount, '元（基础 + Lucky Wheel）');
                  console.log('  - 新余额:', wheelData.balance, '元');

                  // 检查是否有 featureResult
                  if (wheelData.featureResult) {
                    _context7.next = 38;
                    break;
                  }
                  console.error('[GameMainViewModel] API 返回缺少 featureResult');
                  global.hallDispatch({
                    type: 'ADD_TOAST',
                    payload: {
                      content: 'Lucky Wheel 恢复失败'
                    }
                  });
                  this.dispatch(setRespin(false)); // 清除 respin 标志
                  this.dispatch(setSpinning(false));
                  this.comp.hideFeaturePanel();

                  // 解锁所有轮子
                  _wheels = this.comp.wheels;
                  if (_wheels) {
                    for (_i = 0; _i < 4; _i++) {
                      if (_wheels[_i]) _wheels[_i].unlock();
                    }
                  }
                  return _context7.abrupt("return");
                case 38:
                  _wheelData$featureRes2 = wheelData.featureResult, mcpIndex = _wheelData$featureRes2.selectedIndex, featureWin = _wheelData$featureRes2.winAmount;
                  console.log("[GameMainViewModel] MCP \u8FD4\u56DE: selectedIndex=" + mcpIndex + ", Feature \u4E2D\u5956: " + featureWin + " \u5143");

                  // 根据 winAmount 查找正确的 prizeIndex
                  prizeConfig = config.gameConfig.luckyWheelPrizes[betAmount];
                  prizeIndex = prizeConfig ? prizeConfig.indexOf(featureWin) : -1;
                  if (prizeIndex === -1) {
                    console.warn("[GameMainViewModel] \u672A\u627E\u5230\u5339\u914D\u7684\u5956\u54C1\u91D1\u989D " + featureWin + "\uFF0C\u4F7F\u7528 MCP index " + mcpIndex);
                  }
                  finalIndex = prizeIndex !== -1 ? prizeIndex : mcpIndex;
                  console.log("[GameMainViewModel] Lucky Wheel \u5B9E\u9645\u505C\u6B62\u4F4D\u7F6E: " + finalIndex);

                  // 播放幸运轮盘转动动画
                  luckyWheelVM = this.luckyWheelViewModel;
                  if (luckyWheelVM) {
                    _context7.next = 54;
                    break;
                  }
                  console.error('[GameMainViewModel] LuckyWheelViewModel 未找到');
                  this.dispatch(setRespin(false)); // 清除 respin 标志
                  this.dispatch(setSpinning(false));
                  this.comp.hideFeaturePanel();

                  // 解锁所有轮子
                  _wheels2 = this.comp.wheels;
                  if (_wheels2) {
                    for (_i2 = 0; _i2 < 4; _i2++) {
                      if (_wheels2[_i2]) _wheels2[_i2].unlock();
                    }
                  }
                  return _context7.abrupt("return");
                case 54:
                  luckyWheelVM.spin(finalIndex, function () {
                    console.log('[GameMainViewModel] Lucky Wheel Spin Complete');

                    // 更新 Feature Bonus 显示
                    _this8.comp.updateFeatureBonus(featureWin);
                    moneyComing_Audio.playOneShot(SoundPathDefine.scatterOver);
                    setTimeout(function () {
                      // 使用 API 返回的 totalWinAmount（基础 + Feature）
                      var totalWin = wheelData.totalWinAmount;

                      // 存储最新数据
                      _this8.lastSpinData = {
                        winAmount: totalWin,
                        balance: wheelData.balance
                      };
                      _this8.checkAndPlayBigWin(totalWin, function () {
                        _this8.dispatch(updateWin(totalWin));
                        _this8.dispatch(updateBalance(wheelData.balance));
                        _this8.dispatch(setRespin(false)); // 清除 respin 标志
                        _this8.dispatch(setSpinning(false));
                        _this8.comp.hideFeaturePanel();

                        // 解锁所有轮子
                        console.log('[GameMainViewModel] 解锁所有轮子');
                        var wheels = _this8.comp.wheels;
                        if (wheels && wheels.length >= 4) {
                          for (var _i3 = 0; _i3 < 4; _i3++) {
                            if (wheels[_i3]) {
                              wheels[_i3].unlock();
                              console.log("[GameMainViewModel] \u8F6E\u5B50 " + _i3 + " \u5DF2\u89E3\u9501");
                            }
                          }
                        }
                        console.log('[GameMainViewModel] ========== Scatter 崩溃恢复完成 ==========');
                      });
                    }, 2000);
                  });
                  _context7.next = 66;
                  break;
                case 57:
                  _context7.prev = 57;
                  _context7.t0 = _context7["catch"](21);
                  console.error('[GameMainViewModel] Lucky Wheel API 调用失败:', _context7.t0);
                  global.hallDispatch({
                    type: 'ADD_TOAST',
                    payload: {
                      content: 'Lucky Wheel 恢复失败'
                    }
                  });
                  this.dispatch(setRespin(false)); // 清除 respin 标志
                  this.dispatch(setSpinning(false));
                  this.comp.hideFeaturePanel();

                  // 解锁所有轮子
                  _wheels3 = this.comp.wheels;
                  if (_wheels3) {
                    for (_i4 = 0; _i4 < 4; _i4++) {
                      if (_wheels3[_i4]) _wheels3[_i4].unlock();
                    }
                  }
                case 66:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this, [[21, 57]]);
          }));
          function recoverScatter() {
            return _recoverScatter.apply(this, arguments);
          }
          return recoverScatter;
        }()
        /**
         * Check for Big Win and play animation if needed
         */;

        _proto.checkAndPlayBigWin = function checkAndPlayBigWin(winAmount, onComplete) {
          var betAmount = this.comp.props.betAmount;
          var winMultiplier = winAmount / betAmount;
          var winType = '';
          if (winMultiplier >= 20) {
            winType = 'super';
          } else if (winMultiplier >= 10) {
            winType = 'mega';
          } else if (winMultiplier >= 5) {
            winType = 'big';
          }
          if (winType) {
            console.log("[MoneyComing] Trigger Big Win: " + winType + ", amount: " + winAmount);
            this.comp.playBigWinEffect(winType, winAmount, onComplete);
          } else {
            onComplete();
          }
        }

        /**
         * 根据 turbo 模式获取 autoSpin 间隔时间
         */;
        _proto.getAutoSpinInterval = function getAutoSpinInterval() {
          var turboMode = this.comp.props.turboMode;
          if (turboMode === 1) {
            return config.gameConfig.autoSpin.intervals.turbo;
          } else if (turboMode === 2) {
            return config.gameConfig.autoSpin.intervals.superTurbo;
          }
          return config.gameConfig.autoSpin.intervals.normal;
        }
        /**
         * 生成随机 spin 结果
         * 参考旧实现的逻辑，根据投注金额生成不同的结果
         */;
        _proto.generateSpinResults = function generateSpinResults() {
          var coinElements = ['element_0', 'element_00', 'element_1', 'element_5', 'element_10'];
          var betAmount = this.comp.props.betAmount;
          var results = [];
          var symbolProbability = 0.8; // 80% 概率出现符号

          // 生成3个coin轮结果
          for (var i = 0; i < 3; i++) {
            // Bet 1: 第3个轮子 (index 2) 必须为空
            if (betAmount === 1 && i === 2) {
              results.push('');
              continue;
            }
            if (Math.random() < symbolProbability) {
              results.push(coinElements[Math.floor(Math.random() * coinElements.length)]);
            } else {
              results.push(''); // 空结果
            }
          }

          // 获取当前 bet 可用的 feature 元素
          var availableFeatures = ['feature_x2', 'feature_x5', 'feature_all_respin'];
          if (betAmount === 5) {
            availableFeatures.push('feature_scatter');
          } else if (betAmount === 10) {
            availableFeatures.push('feature_x10', 'feature_scatter');
          } else if (betAmount === 50 || betAmount === 100) {
            availableFeatures.push('feature_x10', 'feature_scatter_50_100');
          }

          // 生成1个feature轮结果
          if (Math.random() < symbolProbability) {
            results.push(availableFeatures[Math.floor(Math.random() * availableFeatures.length)]);
          } else {
            results.push('');
          }
          return results;
        }

        /**
         * 计算中奖金额
         * 参考旧实现的逻辑：
         * 1. 从前3个coin轮提取数字，拼接成完整数字（例如："5" + "10" = 510）
         * 2. 如果有倍数feature（x2/x5/x10），则乘以对应倍数
         */;
        _proto.calculateWinAmount = function calculateWinAmount(results, betAmount) {
          if (results.length < 4) {
            return 0;
          }

          // 使用3个coin轮的结果
          var coinResults = results.slice(0, 3);
          var feature = results[3];

          // 拼接数字字符串
          var numberStr = '';
          for (var _iterator = _createForOfIteratorHelperLoose(coinResults), _step; !(_step = _iterator()).done;) {
            var res = _step.value;
            if (res && res.startsWith('element_')) {
              numberStr += res.replace('element_', '');
            }
          }
          if (numberStr === '') {
            return 0;
          }

          // 转换为数字
          var baseValue = parseInt(numberStr, 10);
          if (isNaN(baseValue) || baseValue === 0) {
            return 0;
          }

          // 检查倍数feature
          var multiplier = 1;
          if (feature === 'feature_x2') {
            multiplier = 2;
          } else if (feature === 'feature_x5') {
            multiplier = 5;
          } else if (feature === 'feature_x10') {
            multiplier = 10;
          }
          return baseValue * multiplier;
        };
        _proto.onSpin = function onSpin(debugOptions) {
          var _this9 = this;
          if (debugOptions === void 0) {
            debugOptions = null;
          }
          if (this.comp.props.isSpinning) return;
          // console.log('[MoneyComing] Spin 开始');

          // 清空上次的 spinResults，确保本次 dispatch 一定会触发变化
          // 避免两次结果相同导致 Component 的 useProps 不触发（equalValue 判断内容相同）
          this.dispatch(setSpinResults([]));

          // 设置为转动状态
          this.dispatch(setSpinning(true));

          // 记录转动开始时间
          var spinStartTime = Date.now();

          // 调用 MCP API 执行 Spin
          var betAmount = this.comp.props.betAmount;
          if (!moneyComingWebSocketDriver || !moneyComingWebSocketDriver.api) {
            console.error('[MoneyComing] API not initialized');
            this.dispatch(setSpinning(false));
            global.hallDispatch({
              type: 'ADD_TOAST',
              payload: {
                content: 'API 未初始化'
              }
            });
            return;
          }
          var debug = debugOptions || {
            "clearState": false
            // "forceFeature": "fs_base"
          };

          moneyComingWebSocketDriver.api.spin(betAmount, debug).then(function (spinData) {
            console.log('[MoneyComing] Spin 成功，结果:', spinData);
            // 保存 MCP 返回的数据，供 onSpinComplete 使用
            _this9.lastSpinData = {
              winAmount: spinData.winAmount,
              balance: spinData.balance
            };

            // 计算已经转动的时间
            var elapsedTime = (Date.now() - spinStartTime) / 1000; // 转换为秒

            // 根据 turbo 模式获取最小转动时长
            var turboMode = _this9.comp.props.turboMode;
            var minScrollDuration = config.gameConfig.simultaneousStop.normal.scrollDuration;
            if (turboMode === 1) {
              minScrollDuration = config.gameConfig.simultaneousStop.turbo.scrollDuration;
            } else if (turboMode === 2) {
              minScrollDuration = config.gameConfig.simultaneousStop.superTurbo.scrollDuration;
            }

            // 计算剩余需要等待的时间
            var remainingTime = Math.max(0, minScrollDuration - elapsedTime);
            console.log("[MoneyComing] \u8F6C\u52A8\u65F6\u95F4\u63A7\u5236: \u5DF2\u8F6C\u52A8=" + elapsedTime.toFixed(2) + "\u79D2, \u6700\u5C0F\u65F6\u957F=" + minScrollDuration + "\u79D2, \u8FD8\u9700\u7B49\u5F85=" + remainingTime.toFixed(2) + "\u79D2");

            // 延迟到最小转动时长后再停止
            setTimeout(function () {
              // 设置轮盘结果，触发停止动画
              // 注意：不在这里更新余额，等轮盘停止动画完成后在 onSpinComplete 中更新
              console.log('[GameMainViewModel] 准备 dispatch setSpinResults:', spinData.spinResults);
              _this9.dispatch(setSpinResults(spinData.spinResults));
              console.log('[GameMainViewModel] dispatch setSpinResults 完成');
            }, remainingTime * 1000);
          })["catch"](function (error) {
            console.error('[MoneyComing] Spin 失败:', error);
            global.hallDispatch({
              type: 'ADD_TOAST',
              payload: {
                content: 'Spin 失败，请重试'
              }
            });
            _this9.dispatch(setSpinning(false));
          });
        };
        _proto.listenServerMsg = function listenServerMsg() {
          var _this10 = this;
          console.log('[MoneyComing] 设置 WebSocket 监听器...');
          moneyComingWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.SPIN, bundlePkgName, function (data) {
            console.log('[MoneyComing] 收到 SPIN 响应:', data);
            _this10.dispatch(setSpinResults(data.results));
          });
        }

        /**
         * 播放背景音乐
         * 参考 starlightV2 的实现
         */;
        _proto.playBgMusic = function playBgMusic() {
          var _this11 = this;
          this.comp.scheduleOnce(function () {
            moneyComing_Audio.stop();
            _this11.comp.scheduleOnce(function () {
              moneyComing_Audio.play(SoundPathDefine.bg, true);
            });
          });
        };
        _proto.unMountCallBack = function unMountCallBack() {
          moneyComingWebSocketDriver.sktMsgListener.remove(SKT_MAG_TYPE.SPIN, bundlePkgName);
        };
        return GameMainViewModel;
      }(ViewModel)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index80.ts", ['cc', './redux.mjs_cjs=&original=.js', './index82.ts', './redux.js'], function (exports) {
  var cclegacy, rootReducer, _cjsExports;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      rootReducer = module.rootReducer;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      exports('store', void 0);
      cclegacy._RF.push({}, "25c02KUwCBEBKpdOTVmCIxz", "index", undefined);
      var store;
      var configureStore = function configureStore(preloadedState) {
        if (!store) {
          var composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _cjsExports.compose;
          store = exports('store', _cjsExports.createStore(rootReducer, composeEnhancer(_cjsExports.applyMiddleware())));
        }
        return store;
      };
      var moneyComingStore = exports('default', {
        configureStore: configureStore
      });
      var getStore = exports('getStore', function getStore() {
        if (!store) {
          configureStore();
        }
        return store;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index81.ts", ['cc', './prefabDefine21.ts', './soundDefine21.ts'], function (exports) {
  var cclegacy, prefabDefine, soundDefine;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      prefabDefine = module.default;
    }, function (module) {
      soundDefine = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "668502f67VE45lcjAlGJjuA", "index", undefined);
      var bundlePkgName = exports('bundlePkgName', "moneyComing");
      var fileMap = exports('default', [].concat(prefabDefine(bundlePkgName), soundDefine(bundlePkgName)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index82.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.mjs_cjs=&original=2.js', './game37.ts', './index2.js'], function (exports) {
  var _extends, cclegacy, updateBalance, updateBet, updateWin, setSpinning, setRespin, setSpinResults, setTurboMode, setAutoSpin, _cjsExports;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      updateBalance = module.updateBalance;
      updateBet = module.updateBet;
      updateWin = module.updateWin;
      setSpinning = module.setSpinning;
      setRespin = module.setRespin;
      setSpinResults = module.setSpinResults;
      setTurboMode = module.setTurboMode;
      setAutoSpin = module.setAutoSpin;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      var _reduxAct$createReduc;
      cclegacy._RF.push({}, "6fb59NzZ7JMAbVTDMEx39UD", "index", undefined);
      var initialState = {
        balance: 20000,
        betAmount: 10,
        winAmount: 0,
        spinResults: [],
        isSpinning: false,
        isRespin: false,
        turboMode: 0,
        autoSpin: false
      };
      var gameReducer = _cjsExports.createReducer((_reduxAct$createReduc = {}, _reduxAct$createReduc[updateBalance.toString()] = function (state, payload) {
        console.log('[Reducer] updateBalance:', payload);
        return _extends({}, state, {
          balance: payload
        });
      }, _reduxAct$createReduc[updateBet.toString()] = function (state, payload) {
        console.log('[Reducer] updateBet:', payload);
        return _extends({}, state, {
          betAmount: payload
        });
      }, _reduxAct$createReduc[updateWin.toString()] = function (state, payload) {
        console.log('[Reducer] updateWin:', payload);
        return _extends({}, state, {
          winAmount: payload
        });
      }, _reduxAct$createReduc[setSpinning.toString()] = function (state, payload) {
        console.log('[Reducer] setSpinning:', payload);
        return _extends({}, state, {
          isSpinning: payload
        });
      }, _reduxAct$createReduc[setRespin.toString()] = function (state, payload) {
        console.log('[Reducer] setRespin:', payload);
        return _extends({}, state, {
          isRespin: payload
        });
      }, _reduxAct$createReduc[setSpinResults.toString()] = function (state, payload) {
        console.log('[Reducer] setSpinResults:', payload);
        var newState = _extends({}, state, {
          spinResults: payload
        });
        console.log('[Reducer] newState.spinResults:', newState.spinResults);
        return newState;
      }, _reduxAct$createReduc[setTurboMode.toString()] = function (state, payload) {
        console.log('[Reducer] setTurboMode:', payload);
        return _extends({}, state, {
          turboMode: payload
        });
      }, _reduxAct$createReduc[setAutoSpin.toString()] = function (state, payload) {
        console.log('[Reducer] setAutoSpin:', payload);
        return _extends({}, state, {
          autoSpin: payload
        });
      }, _reduxAct$createReduc), initialState);
      var rootReducer = exports('rootReducer', gameReducer);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index83.ts", ['cc', './LoaderPanelViewModel.ts', './AudioMgr.ts', './config20.ts', './socketConnect20.ts', './index81.ts', './prefabDefine21.ts', './index80.ts', './game37.ts', './baseBoard.ts', './hallType2.ts', './WebSocketStarter.ts', './GameMainViewModel2.ts', './AnimationViewModel.ts', './listenerFactoy.ts', './UseSetOption.ts'], function (exports, module) {
  var cclegacy, assetManager, Prefab, LoaderPanelViewModel, AudioMgr, config, socketConnect, removeInstance, bundlePkgName, fileMap, PrefabPathDefine, moneyComingStore, getStore, updateBalance, updateBet, setSpinResults, updateWin, setSpinning, addToastAction, SubGameRunState, WebSocketStarter, GameMainViewModel, AnimationViewModel, listenerFactoy, setActiveAudio;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      Prefab = module.Prefab;
    }, function (module) {
      LoaderPanelViewModel = module.default;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      config = module.default;
    }, function (module) {
      socketConnect = module.default;
      removeInstance = module.removeInstance;
    }, function (module) {
      bundlePkgName = module.bundlePkgName;
      fileMap = module.default;
    }, function (module) {
      PrefabPathDefine = module.PrefabPathDefine;
    }, function (module) {
      moneyComingStore = module.default;
      getStore = module.getStore;
    }, function (module) {
      updateBalance = module.updateBalance;
      updateBet = module.updateBet;
      setSpinResults = module.setSpinResults;
      updateWin = module.updateWin;
      setSpinning = module.setSpinning;
    }, function (module) {
      addToastAction = module.addToastAction;
    }, function (module) {
      SubGameRunState = module.SubGameRunState;
    }, function (module) {
      WebSocketStarter = module.default;
    }, function (module) {
      GameMainViewModel = module.GameMainViewModel;
    }, function (module) {
      AnimationViewModel = module.AnimationViewModel;
    }, function (module) {
      listenerFactoy = module.listenerFactoy;
    }, function (module) {
      setActiveAudio = module.setActiveAudio;
    }],
    execute: function () {
      exports({
        animationViewModel: void 0,
        gameMainViewModel: void 0,
        moneyComing_Audio: void 0
      });
      cclegacy._RF.push({}, "9168eZ7yHlO0IqoXiXqc0yH", "index", undefined);
      var sourceManageMap = [];
      var bundleMoneyComing = exports('bundleMoneyComing', null);
      var gameMainViewModel;
      var animationViewModel;
      var moneyComing_Audio;
      var loaderviweModel;
      var sourceManageSeletor = exports('sourceManageSeletor', function sourceManageSeletor(bundleName) {
        if (bundleName === void 0) {
          bundleName = bundlePkgName;
        }
        return sourceManageMap.find(function (i) {
          return i.bundle.name === bundleName;
        });
      });
      var NORMAL_MAG_TYPE = exports('NORMAL_MAG_TYPE', /*#__PURE__*/function (NORMAL_MAG_TYPE) {
        NORMAL_MAG_TYPE[NORMAL_MAG_TYPE["CHANGE_GAME"] = 0] = "CHANGE_GAME";
        return NORMAL_MAG_TYPE;
      }({}));
      var msgListener = exports('msgListener', listenerFactoy());
      var initTimeoutId = 0;
      var startUp = exports('startUp', function startUp(rootNode) {
        moneyComingStore.configureStore();
        assetManager.loadBundle(bundlePkgName, function (err, bundle) {
          bundleMoneyComing = exports('bundleMoneyComing', bundle);
          bundleMoneyComing.load(PrefabPathDefine.LOAING_PANEL, Prefab, function (progress, total) {
            // global.hallDispatch(setSubGameRunState(SubGameRunState.LOADING))
            // global.setSubGameGate(config.gameId, (progress / total))
          }, function (err, prefab) {
            if (!window.HALL_GLOBAL.isAllowOpenSubGame(config.gameId)) return;
            window.HALL_GLOBAL.setSubGameRunState(SubGameRunState.READY);
            loaderviweModel = new LoaderPanelViewModel().mountView(prefab).appendTo(rootNode).setProps({
              loadBarType: 1
            }).setEvent({
              onLoadDone: function onLoadDone(_sourceManageMap) {
                sourceManageMap = _sourceManageMap;
                moneyComing_Audio = exports('moneyComing_Audio', new AudioMgr(sourceManageSeletor()));
                setActiveAudio(moneyComing_Audio);
                // 默认给10秒进入游戏超时处理，有时候socket连接成功之后，服务器没有发送进入房间 消息，导致卡住
                initTimeoutId = window.setTimeout(function () {
                  window.HALL_GLOBAL.closeSubGame({
                    confirmContent: window.HALL_GLOBAL.lang.write(function (k) {
                      return k.InitGameModule.GameBoardInit;
                    }),
                    confirmDoneBeforeFn: function confirmDoneBeforeFn() {
                      return destoryGame(loaderviweModel, initTimeoutId);
                    }
                  });
                  window.HALL_GLOBAL.addToast(window.HALL_GLOBAL.lang.write(function (k) {
                    return k.InitGameModule.GameBoardInit;
                  }, {}, {
                    placeStr: "game init failed"
                  }));
                  // egyptv2_Audio.playOneShot(SoundPathDefine.ding)
                }, 10000);

                // 卸载游戏方法
                var destoryGame = function destoryGame(loaderviweModel, timeId) {
                  loaderviweModel.unMount();
                  window.clearTimeout(timeId);
                };
                loaderviweModel.comp.setTipContent(window.HALL_GLOBAL.lang.write(function (k) {
                  return k.WebSocketModule.GameInit;
                }, {}, {
                  placeStr: "Game init..."
                }));
                window.HALL_GLOBAL.setSubGameRunState(SubGameRunState.RUN);
                console.log('[MoneyComing] 开始初始化 API 连接...');

                // 初始化 API 连接（替代 WebSocket）
                socketConnect().then(function (driver) {
                  console.log('[MoneyComing] API 连接初始化成功');

                  // 调用 enter 接口获取初始数据
                  loaderviweModel.comp.setTipContent(window.HALL_GLOBAL.lang.write(function (k) {
                    return k.WebSocketModule.GameInit;
                  }, {}, {
                    placeStr: "Entering game..."
                  }));
                  driver.api.enter().then(function (enterData) {
                    console.log('[MoneyComing] Enter 成功，数据:', enterData);
                    console.log('[MoneyComing] 当前 store:', getStore());
                    console.log('[MoneyComing] dispatch 前的 state:', getStore().getState());

                    // 更新 Redux 状态
                    getStore().dispatch(updateBalance(enterData.balance));
                    getStore().dispatch(updateBet(enterData.currentBet));
                    console.log('[MoneyComing] dispatch 后的 state:', getStore().getState());
                    console.log("[MoneyComing] \u521D\u59CB\u4F59\u989D: " + enterData.balance + " \u5143\uFF0C\u63A8\u8350\u6295\u6CE8: " + enterData.currentBet + " \u5143");

                    // 如果有初始轮盘状态，可以显示
                    if (enterData.initialReels && enterData.initialReels.length > 0) {
                      getStore().dispatch(setSpinResults(enterData.initialReels));
                      console.log('[MoneyComing] 初始轮盘状态:', enterData.initialReels);
                    }
                    // 初始化游戏状态
                    // getStore().dispatch(updateBalance(10000)); // 设置初始余额 (Can't use hall store directly. Rely on initial Sync or mock)
                    // console.log('[MoneyComing] 初始余额已设置为 10000');

                    // 获取游戏主界面 prefab
                    var gameMainPrefab = sourceManageSeletor().getFile(PrefabPathDefine.GAME_MAIN);
                    console.log('[MoneyComing] 获取 prefab:', gameMainPrefab ? '成功' : '失败', gameMainPrefab);
                    if (!gameMainPrefab || !gameMainPrefab.source) {
                      console.error('[MoneyComing] 游戏主界面 prefab 未找到或无效！');
                      window.HALL_GLOBAL.addToast('游戏资源加载失败');
                      window.HALL_GLOBAL.closeSubGame();
                      return;
                    }

                    // 创建游戏主界面（使用 moneyComing 本地 store）
                    console.log('[MoneyComing] 创建 GameMainViewModel...');
                    gameMainViewModel = exports('gameMainViewModel', new GameMainViewModel().mountView(gameMainPrefab.source).appendTo(rootNode).connect(getStore().getState()));
                    console.log('[MoneyComing] GameMainViewModel 创建完成，节点:', gameMainViewModel.viewNode);

                    // 创建动画 ViewModel (复用同一个 view 组件)
                    console.log('[MoneyComing] 创建 AnimationViewModel...');
                    animationViewModel = exports('animationViewModel', new AnimationViewModel());
                    // 手动注入 viewNode 和 comp，因为我们想复用同一个组件实例
                    animationViewModel.viewNode = gameMainViewModel.viewNode;
                    animationViewModel.comp = gameMainViewModel.comp;
                    // 手动调用 connect，因为 mountView 通常会做这件事，但我们跳过了 mountView
                    animationViewModel.connect(getStore().getState());
                    console.log('[MoneyComing] 根节点:', rootNode, '子节点数量:', rootNode.children.length);

                    // Mount LuckyWheelViewModel
                    var luckyWheelRoot = gameMainViewModel.viewNode.getChildByPath('lucky_wheel');
                    if (luckyWheelRoot) {
                      console.log('[MoneyComing] Found lucky_wheel node, attaching LuckyWheelViewModel');
                      module.import('./MoneyComing_LuckyWheel.ts').then(function (_ref) {
                        var MoneyComing_LuckyWheel = _ref.MoneyComing_LuckyWheel;
                        var comp = luckyWheelRoot.getComponent(MoneyComing_LuckyWheel);
                        if (!comp) comp = luckyWheelRoot.addComponent(MoneyComing_LuckyWheel);
                        module.import('./LuckyWheelViewModel.ts').then(function (_ref2) {
                          var LuckyWheelViewModel = _ref2.LuckyWheelViewModel;
                          var luckyWheelVM = new LuckyWheelViewModel();
                          luckyWheelVM.viewNode = luckyWheelRoot;
                          luckyWheelVM.comp = comp;
                          luckyWheelVM.connect();
                          gameMainViewModel.luckyWheelViewModel = luckyWheelVM;
                          console.log('[MoneyComing] LuckyWheelViewModel attached and connected');

                          // 崩溃恢复逻辑：检查是否需要恢复 scatter (simpleWheel)
                          if (enterData.needsRecovery && enterData.recoveryType === 'scatter') {
                            console.log('[MoneyComing] ========== 开始崩溃恢复流程 ==========');
                            console.log('[MoneyComing] 恢复类型: scatter (feature_scatter → simpleWheel)');
                            console.log('[MoneyComing] 第一次 spin 结果:', enterData.firstSpinResults);
                            console.log('[MoneyComing] 第一次 spin 中奖:', enterData.firstSpinWin, '元');
                            console.log('[MoneyComing] LuckyWheelViewModel.comp 是否存在:', !!luckyWheelVM.comp);

                            // 更新中奖金额（显示第一次 spin 的中奖）
                            if (enterData.firstSpinWin) {
                              getStore().dispatch(updateWin(enterData.firstSpinWin));
                            }

                            // 延迟触发 scatter 恢复，确保界面和 LuckyWheel 组件完全初始化
                            setTimeout(function () {
                              console.log('[MoneyComing] 触发恢复的 scatter 流程...');
                              console.log('[MoneyComing] 检查 LuckyWheelViewModel.comp:', luckyWheelVM.comp);

                              // 调用 GameMainViewModel 的 recoverScatter 方法
                              if (typeof gameMainViewModel.recoverScatter === 'function') {
                                gameMainViewModel.recoverScatter();
                              } else {
                                console.error('[MoneyComing] GameMainViewModel.recoverScatter 方法不存在');
                                getStore().dispatch(setSpinning(false));
                              }
                            }, 1000); // 延迟 1000ms 确保 LuckyWheel 组件完全初始化
                          }
                        });
                      });
                    } else {
                      console.error('[MoneyComing] Could not find lucky_wheel node');
                    }

                    // Mount RespinViewModel
                    // We attach it to the root node or a specific 'respin' node if it exists.
                    // Since it handles visual effects over the whole game, root or gameMain node is fine.
                    // Let's attach to gameMainViewModel.viewNode
                    module.import('./MoneyComing_Respin.ts').then(function (_ref3) {
                      var MoneyComing_Respin = _ref3.MoneyComing_Respin;
                      var comp = gameMainViewModel.viewNode.getComponent(MoneyComing_Respin);
                      if (!comp) comp = gameMainViewModel.viewNode.addComponent(MoneyComing_Respin);

                      // Setup propertyNode for Respin component (fly targets)
                      // We need to find the nodes: props_fly_start_pos, props_fly_target_1, etc.
                      // Assuming they exist in the prefab or we need to find them dynamically.
                      // For now, let's assume the component will find them or we set them here.
                      // Actually, BaseComponent auto-binds propertyNode if nodes are named correctly.
                      // But here we added the component dynamically, so we might need to help it or ensure nodes exist.

                      module.import('./RespinViewModel.ts').then(function (_ref4) {
                        var RespinViewModel = _ref4.RespinViewModel;
                        var respinVM = new RespinViewModel();
                        respinVM.viewNode = gameMainViewModel.viewNode;
                        respinVM.comp = comp;
                        respinVM.connect();
                        respinVM.setGameMain(gameMainViewModel.comp);

                        // Expose RespinViewModel to GameMainViewModel (via global or direct set)
                        // Since GameMainViewModel needs to call handleAllRespin.
                        // We can attach it to GameMainViewModel instance.
                        gameMainViewModel.respinViewModel = respinVM;
                        console.log('[MoneyComing] RespinViewModel attached and connected');

                        // 崩溃恢复逻辑：检查是否需要恢复 feature_all_respin
                        if (enterData.needsRecovery && enterData.recoveryType === 'freeSpin') {
                          console.log('[MoneyComing] ========== 开始崩溃恢复流程 ==========');
                          console.log('[MoneyComing] 恢复类型: freeSpin (feature_all_respin)');
                          console.log('[MoneyComing] 第一次 spin 结果:', enterData.firstSpinResults);
                          console.log('[MoneyComing] 第一次 spin 中奖:', enterData.firstSpinWin, '元');
                          console.log('[MoneyComing] RespinViewModel.comp 是否存在:', !!respinVM.comp);

                          // 更新中奖金额（显示第一次 spin 的中奖）
                          if (enterData.firstSpinWin) {
                            getStore().dispatch(updateWin(enterData.firstSpinWin));
                          }

                          // 延迟触发 respin，确保界面和 Respin 组件完全初始化
                          setTimeout(function () {
                            console.log('[MoneyComing] 触发恢复的 respin 流程...');
                            console.log('[MoneyComing] 检查 RespinViewModel.comp:', respinVM.comp);

                            // 调用 GameMainViewModel 的 recoverAllRespin 方法
                            if (typeof gameMainViewModel.recoverAllRespin === 'function') {
                              gameMainViewModel.recoverAllRespin();
                            } else {
                              console.error('[MoneyComing] GameMainViewModel.recoverAllRespin 方法不存在');
                              getStore().dispatch(setSpinning(false));
                            }
                          }, 1000); // 延迟 1000ms 确保 Respin 组件完全初始化
                        }
                      });
                    });

                    // 调整loader层级到最上层，让主界面初始化完成后才卸载
                    loaderviweModel.viewNode.isValid && loaderviweModel.viewNode.setSiblingIndex(loaderviweModel.viewNode.parent.children.length);

                    // 延迟卸载加载面板，确保主界面已经渲染
                    setTimeout(function () {
                      console.log('[MoneyComing] 卸载加载面板...');
                      destoryGame(loaderviweModel, initTimeoutId);
                      console.log('[MoneyComing] 游戏初始化完成！');
                    }, 100);
                  })["catch"](function (error) {
                    console.error('[MoneyComing] Enter 失败:', error);
                    loaderviweModel.comp.setTipContent(error && error.message || 'Enter game failed');
                    window.HALL_GLOBAL.hallDispatch(addToastAction({
                      content: '进入游戏失败，请重试'
                    }));
                    // 可选：自动关闭游戏
                    // setTimeout(() => global.closeSubGame(), 2000);
                  });
                })["catch"](function (e) {
                  console.error('[MoneyComing] API 连接初始化失败:', e);
                  loaderviweModel.comp.setTipContent(e || 'API connection error');
                  window.HALL_GLOBAL.hallDispatch(addToastAction({
                    content: 'API 连接失败'
                  }));
                  console.error('[MoneyComing] WebSocket 初始化失败:', e);
                  loaderviweModel.comp.setTipContent(e || 'WebSocket connection error');
                  window.HALL_GLOBAL.addToast('WebSocket 连接失败');
                });
              }
            }).setProps({
              versionStr: "md5: " + (window.HALL_GLOBAL.getGameConfig(config.gameId) ? window.HALL_GLOBAL.getGameConfig(config.gameId).md5 : '')
            });
            loaderviweModel.comp.startLoad([bundle], [].concat(fileMap));
          });
        });
      });
      var stopGame = exports('stopGame', function stopGame() {
        console.log('[MoneyComing] stopGame called');

        // 立即清空 activeSubGameInfo，避免快速重新进入时被拦截
        window.HALL_GLOBAL.hallDispatch({
          type: 'SET_ACTIVE_SUBGAME',
          payload: {
            subGameInfo: null
          }
        });

        // 隐藏loading并重置游戏状态（参考 starlightV2）
        window.HALL_GLOBAL.setLoading(false, bundlePkgName);
        console.log('[MoneyComing] setLoadingAction dispatched');
        initTimeoutId && window.clearTimeout(initTimeoutId);
        WebSocketStarter.Instance().eventListener.removeById(bundlePkgName);
        loaderviweModel && loaderviweModel.unMount();
        gameMainViewModel && gameMainViewModel.unMount();
        console.log('[MoneyComing] 游戏卸载完成！', moneyComing_Audio);
        // 停止所有音频（背景音乐和音效）
        if (moneyComing_Audio) {
          moneyComing_Audio.stop(); // 停止背景音乐
          moneyComing_Audio.longStop(); // 停止长音效
          moneyComing_Audio.remove(); // 销毁音频节点
          moneyComing_Audio = exports('moneyComing_Audio', null);
        }
        removeInstance();
        console.log('[MoneyComing] stopGame completed');
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LuckyWheelRotator.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "49b6bvzj2NO17Z1y2g/1Pi6", "LuckyWheelRotator", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * @description 幸运轮旋转组件
       * 负责幸运轮的持续旋转动画效果
       */
      var LuckyWheelRotator = exports('LuckyWheelRotator', (_dec = ccclass('LuckyWheelRotator'), _dec2 = property({
        tooltip: '旋转速度（度/秒）'
      }), _dec3 = property({
        tooltip: '是否自动开始旋转'
      }), _dec4 = property({
        type: Node,
        tooltip: '旋转的目标节点，默认为当前节点'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LuckyWheelRotator, _Component);
        function LuckyWheelRotator() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** 旋转速度（度/秒），默认30度/秒 */
          _initializerDefineProperty(_this, "rotationSpeed", _descriptor, _assertThisInitialized(_this));
          /** 是否自动开始旋转 */
          _initializerDefineProperty(_this, "autoStart", _descriptor2, _assertThisInitialized(_this));
          /** 旋转的目标节点（如果不设置，则旋转当前节点） */
          _initializerDefineProperty(_this, "targetNode", _descriptor3, _assertThisInitialized(_this));
          /** 是否正在旋转 */
          _this._isRotating = false;
          /** 当前旋转角度 */
          _this._currentRotation = 0;
          /** 当前下注额 */
          _this.betAmount = 0;
          return _this;
        }
        var _proto = LuckyWheelRotator.prototype;
        _proto.onLoad = function onLoad() {
          // 如果没有设置目标节点，使用当前节点
          if (!this.targetNode) {
            this.targetNode = this.node;
          }

          // 获取初始旋转角度
          this._currentRotation = this.targetNode.eulerAngles.z;
          if (this.autoStart) {
            this.startRotation();
          }
        };
        _proto.update = function update(deltaTime) {
          if (!this._isRotating || !this.targetNode || this.betAmount <= 1) {
            return;
          }

          // 计算这一帧的旋转角度
          var rotationDelta = this.rotationSpeed * deltaTime;
          this._currentRotation += rotationDelta;

          // 保持角度在 0-360 范围内
          if (this._currentRotation >= 360) {
            this._currentRotation -= 360;
          } else if (this._currentRotation < 0) {
            this._currentRotation += 360;
          }

          // 应用旋转
          this.targetNode.setRotationFromEuler(0, 0, this._currentRotation);
        }

        /**
         * 开始旋转
         */;
        _proto.startRotation = function startRotation() {
          this._isRotating = true;
        }

        /**
         * 停止旋转
         */;
        _proto.stopRotation = function stopRotation() {
          this._isRotating = false;
        }

        /**
         * 设置旋转速度
         * @param speed 旋转速度（度/秒）
         */;
        _proto.setRotationSpeed = function setRotationSpeed(speed) {
          this.rotationSpeed = speed;
        }

        /**
         * 切换旋转状态
         */;
        _proto.toggleRotation = function toggleRotation() {
          this._isRotating = !this._isRotating;
        }

        /**
         * 重置旋转角度
         */;
        _proto.resetRotation = function resetRotation() {
          this._currentRotation = 0;
          if (this.targetNode) {
            this.targetNode.setRotationFromEuler(0, 0, 0);
          }
        }

        /**
         * 设置当前旋转角度
         * @param angle 角度
         */;
        _proto.setCurrentRotation = function setCurrentRotation(angle) {
          this._currentRotation = angle;
          if (this.targetNode) {
            this.targetNode.setRotationFromEuler(0, 0, angle);
          }
        }

        /**
         * 旋转到指定角度
         * @param targetAngle 目标角度
         * @param duration 持续时间
         * @param onComplete 完成回调
         */;
        _proto.spinTo = function spinTo(targetAngle, duration, _onComplete) {
          var _this2 = this;
          this._isRotating = false; // Stop update loop

          var rounds = 5;

          // In MoneyComing_LuckyWheel.ts, speed is set to -10. So it's clockwise (negative angle).

          var obj = {
            angle: this._currentRotation
          };
          var finalAngle = 0;
          if (this.rotationSpeed < 0) {
            // Rotating clockwise (decreasing angle)
            var currentMod = this._currentRotation % 360;
            if (currentMod > 0) currentMod -= 360; // Make it -360 to 0

            // Target is positive 0-360 (input). Convert to negative equivalent 0 to -360.
            var targetMod = targetAngle;
            if (targetMod > 0) targetMod -= 360;
            var diff = targetMod - currentMod;
            if (diff > 0) diff -= 360; // Ensure we always go negative

            finalAngle = this._currentRotation + diff - 360 * rounds;
          } else {
            // Positive rotation (Counter-Clockwise)
            var _currentMod = this._currentRotation % 360;
            if (_currentMod < 0) _currentMod += 360;
            var _diff = targetAngle - _currentMod;
            if (_diff < 0) _diff += 360;
            finalAngle = this._currentRotation + _diff + 360 * rounds;
          }
          tween(obj).to(duration, {
            angle: finalAngle
          }, {
            easing: 'cubicOut',
            onUpdate: function onUpdate() {
              _this2.setCurrentRotation(obj.angle);
            },
            onComplete: function onComplete() {
              _this2._isRotating = false;
              if (_onComplete) _onComplete();
            }
          }).start();
        };
        return LuckyWheelRotator;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotationSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "autoStart", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LuckyWheelViewModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewModel.ts', './index80.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, StoreInject, ViewModel, getStore;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      StoreInject = module.StoreInject;
      ViewModel = module.default;
    }, function (module) {
      getStore = module.getStore;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "d868bL/mA1HU6Cbby25yYM5", "LuckyWheelViewModel", undefined);
      var ccclass = _decorator.ccclass;
      var LuckyWheelViewModel = exports('LuckyWheelViewModel', (_dec = StoreInject(getStore()), _dec2 = ccclass('LuckyWheelViewModel'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ViewModel) {
        _inheritsLoose(LuckyWheelViewModel, _ViewModel);
        function LuckyWheelViewModel() {
          return _ViewModel.call(this, 'MoneyComing_LuckyWheel') || this;
        }
        var _proto = LuckyWheelViewModel.prototype;
        _proto.begin = function begin() {};
        _proto.connect = function connect() {
          this.inject({}, function (state) {
            return {
              betAmount: state.betAmount
            };
          });
          return this;
        };
        _proto.spin = function spin(prizeIndex, onComplete) {
          if (this.comp) {
            this.comp.spin(prizeIndex, onComplete);
          } else {
            console.error('[LuckyWheelViewModel] Component not found');
            onComplete();
          }
        };
        return LuckyWheelViewModel;
      }(ViewModel)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoneyComing_GameMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseComponent.ts', './MoneyComing_Wheel.ts', './SymbolAnimator.ts', './AnimationUtils.ts', './index83.ts', './soundDefine21.ts', './LuckyWheelRotator.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, Button, Color, UITransform, sp, assetManager, SpriteFrame, Sprite, Label, tween, BaseComponent, MoneyComing_Wheel, SymbolAnimator, AnimationUtils, moneyComing_Audio, SoundPathDefine, LuckyWheelRotator;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Color = module.Color;
      UITransform = module.UITransform;
      sp = module.sp;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Label = module.Label;
      tween = module.tween;
    }, function (module) {
      BaseComponent = module.BaseComponent;
    }, function (module) {
      MoneyComing_Wheel = module.MoneyComing_Wheel;
    }, function (module) {
      SymbolAnimator = module.SymbolAnimator;
    }, function (module) {
      AnimationUtils = module.AnimationUtils;
    }, function (module) {
      moneyComing_Audio = module.moneyComing_Audio;
    }, function (module) {
      SoundPathDefine = module.SoundPathDefine;
    }, function (module) {
      LuckyWheelRotator = module.LuckyWheelRotator;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "93351gVVfJBKKOjeFsktmEg", "MoneyComing_GameMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MoneyComing_GameMain = exports('MoneyComing_GameMain', (_dec = ccclass('MoneyComing_GameMain'), _dec(_class = /*#__PURE__*/function (_BaseComponent) {
        _inheritsLoose(MoneyComing_GameMain, _BaseComponent);
        function MoneyComing_GameMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseComponent.call.apply(_BaseComponent, [this].concat(args)) || this;
          _this.wheels = [];
          _this.betSelectionNode = null;
          _this.propertyNode = {
            props_spin_btn: new Button(),
            props_bet_btn: new Button(),
            props_auto_btn: new Button(),
            props_turbo: new Button(),
            props_balance_label: new Label(),
            props_win_label: new Label(),
            props_bet_label: new Label(),
            // Unlock Nodes
            props_unlock_1: new Node(),
            props_unlock_5: new Node(),
            props_unlock_10: new Node(),
            props_unlock_50: new Node(),
            // Brand Text
            // props_brand_board: new Node(),
            // Feature Board
            props_brand_board: new Node(),
            // The normal board (MoneyComingView/lucky_wheel/brand/board)
            props_feature_board: new Node(),
            // The feature board (MoneyComingView/lucky_wheel/brand/board/feature)
            // Lucky Wheels
            props_lucky_wheel_1_5_10: new Node(),
            props_lucky_wheel_50_100: new Node(),
            props_lucky_wheels: new Node(),
            props_win_effect: new Node(),
            // Big Win Effect Node
            // Settings
            props_setting: new Node(),
            props_setting_selection: new Node(),
            props_setting_back: new Node()
          };
          _this.wheel3LockNode = null;
          _this.luckyWheelLockNode = null;
          _this.props = {
            balance: 20000,
            betAmount: 10,
            winAmount: 0,
            spinResults: [],
            isSpinning: false,
            turboMode: 0,
            autoSpin: false
          };
          _this.events = {
            onSpin: function onSpin() {},
            onAutoSpin: function onAutoSpin() {},
            onTurbo: function onTurbo() {},
            onBetChange: function onBetChange(amount) {},
            onSpinComplete: function onSpinComplete() {}
          };
          return _this;
        }
        var _proto = MoneyComing_GameMain.prototype;
        _proto.initState = function initState() {
          return {};
        };
        _proto.start = function start() {
          var _this2 = this;
          // console.log('[GameMain] start: current props.betAmount =', this.props.betAmount);
          console.log('[GameMain] start: initial spinResults:', this.props.spinResults);

          // 如果有初始盘面数据，立即设置
          if (this.props.spinResults && this.props.spinResults.length > 0) {
            console.log('[GameMain] start: setting initial wheel results:', this.props.spinResults);
            this.wheels.forEach(function (wheel, index) {
              var result = index < _this2.props.spinResults.length ? _this2.props.spinResults[index] : '';
              if (result) {
                wheel.showResult(result, false);
              }
            });
          }
          if (this.props.betAmount > 0) {
            // console.log('[GameMain] start: forcing UI update for betAmount:', this.props.betAmount);
            this.updateUnlockLevels(this.props.betAmount);
            this.highlightCurrentBet(this.props.betAmount);
            this.updateUnlockLevels(this.props.betAmount);
            this.highlightCurrentBet(this.props.betAmount);
            // this.updateRotatorsBet(this.props.betAmount); // Moved to LuckyWheelViewModel
            if (this.propertyNode.props_bet_label) {
              this.propertyNode.props_bet_label.string = this.props.betAmount.toFixed(2);
            }
          } else {
            console.warn('[GameMain] start: betAmount is 0, waiting for props update...');
          }
        };
        _proto.bindEvent = function bindEvent() {
          var _this3 = this;
          if (this.propertyNode.props_spin_btn) {
            this.propertyNode.props_spin_btn.node.on(Node.EventType.TOUCH_END, function () {
              _this3.hideBetSelection();
              _this3.hideSettingSelection();
              // Play Spin Sound Immediately
              moneyComing_Audio.playOneShot(SoundPathDefine.spin);
              _this3.events.onSpin();
            });
          }
          if (this.propertyNode.props_auto_btn) {
            this.propertyNode.props_auto_btn.node.on(Node.EventType.TOUCH_END, function () {
              _this3.hideBetSelection();
              _this3.events.onAutoSpin();
            });
          }
          if (this.propertyNode.props_turbo) {
            this.propertyNode.props_turbo.node.on(Node.EventType.TOUCH_END, function () {
              _this3.hideBetSelection();
              _this3.events.onTurbo();
            });
          }
          if (this.propertyNode.props_bet_btn) {
            this.propertyNode.props_bet_btn.node.on(Node.EventType.TOUCH_END, function () {
              return _this3.toggleBetSelection();
            });
          }
          if (this.propertyNode.props_setting) {
            this.propertyNode.props_setting.on(Node.EventType.TOUCH_END, function () {
              _this3.onSettingClick();
            });
          }
          if (this.propertyNode.props_setting_back) {
            this.propertyNode.props_setting_back.on(Node.EventType.TOUCH_END, function () {
              _this3.onBackToHallClick();
            });
          }
        };
        _proto.onSettingClick = function onSettingClick() {
          // Spin 状态中不允许打开设置面板
          if (this.props.isSpinning || this.props.autoSpin) {
            return;
          }
          if (this.propertyNode.props_setting_selection) {
            this.propertyNode.props_setting_selection.active = true;
          }
        };
        _proto.hideSettingSelection = function hideSettingSelection() {
          if (this.propertyNode.props_setting_selection) {
            this.propertyNode.props_setting_selection.active = false;
          }
        };
        _proto.onBackToHallClick = function onBackToHallClick() {
          if (window.HALL_GLOBAL && window.HALL_GLOBAL.closeSubGame) {
            window.HALL_GLOBAL.closeSubGame();
          } else {
            console.error('[GameMain] window.HALL_GLOBAL.closeSubGame is not available');
          }
        };
        _proto.hideBetSelection = function hideBetSelection() {
          if (this.betSelectionNode && this.betSelectionNode.active) {
            this.betSelectionNode.active = false;
          }
        }

        /**
         * 切换 bet selection 面板显示/隐藏
         */;
        _proto.toggleBetSelection = function toggleBetSelection() {
          if (!this.betSelectionNode) return;
          this.betSelectionNode.active = !this.betSelectionNode.active;
          // console.log('[GameMain] toggleBetSelection:', this.betSelectionNode.active);

          // 如果显示了面板，高亮当前投注金额
          if (this.betSelectionNode.active) {
            this.highlightCurrentBet();
          }
        }

        /**
         * 高亮当前投注金额的按钮
         */;
        _proto.highlightCurrentBet = function highlightCurrentBet(amount) {
          if (amount === void 0) {
            amount = this.props.betAmount;
          }
          if (!this.betSelectionNode) return;
          var amounts = [1, 5, 10, 50, 100];
          for (var _i = 0, _amounts = amounts; _i < _amounts.length; _i++) {
            var a = _amounts[_i];
            var btnNode = this.betSelectionNode.getChildByPath("hLayout / betOptionLayout / betOption" + a + " ");
            if (btnNode) {
              var button = btnNode.getComponentInChildren(Button);
              if (button) {
                // 假设选中状态通过颜色区分，或者有特定的选中态节点
                // 这里参考老代码，修改 normalColor
                if (a === amount) {
                  button.normalColor = new Color(150, 150, 150, 255);
                } else {
                  button.normalColor = new Color(50, 50, 50, 255);
                }
              }
            }
          }
        }

        /**
         * 更新解锁等级显示
         */;
        _proto.updateUnlockLevels = function updateUnlockLevels(betAmount) {
          // 1. Update Unlock Nodes FIRST (so we can find the active one for animation layering)
          var unlockNodes = {
            1: this.propertyNode.props_unlock_1,
            5: this.propertyNode.props_unlock_5,
            10: this.propertyNode.props_unlock_10,
            50: this.propertyNode.props_unlock_50
          };

          // Reset all unlock nodes
          Object.keys(unlockNodes).forEach(function (key) {
            var node = unlockNodes[key];
            if (node && node.isValid) node.active = false;
          });
          var setNodeActive = function setNodeActive(node, active, yOffset) {
            if (node && node.isValid) {
              node.active = active;
              node.setPosition(node.position.x, yOffset, node.position.z);
            }
          };

          // Set active nodes based on betAmount
          switch (betAmount) {
            case 1:
              setNodeActive(unlockNodes[1], true, -30);
              setNodeActive(unlockNodes[5], true, 30);
              break;
            case 5:
              setNodeActive(unlockNodes[5], true, -30);
              setNodeActive(unlockNodes[10], true, 30);
              break;
            case 10:
              setNodeActive(unlockNodes[10], true, -30);
              setNodeActive(unlockNodes[50], true, 30);
              break;
            case 50:
            case 100:
              setNodeActive(unlockNodes[10], true, -30);
              setNodeActive(unlockNodes[50], true, 30);
              break;
          }

          // 2. Play Brand Text Animation (now that active nodes are set)
          if ([1, 5, 10].indexOf(betAmount) !== -1) {
            this.playBrandTextAnimation('down_start', 'down_cycle');
          } else {
            this.playBrandTextAnimation('up_start', 'up_cycle');
          }

          // 3. Lucky Wheels are now handled by LuckyWheelViewModel
          // const wheel1_5_10 = this.propertyNode.props_lucky_wheel_1_5_10;
          // const wheel50_100 = this.propertyNode.props_lucky_wheel_50_100;
          // ... logic moved ...

          // 4. Update Feature Wheel (Wheel 4, index 3)
          this.updateFeatureWheel(betAmount);
        };
        _proto.updateFeatureWheel = function updateFeatureWheel(betAmount) {
          if (this.wheels.length < 4) return;
          var featureWheel = this.wheels[3];
          if (!featureWheel) return;
          var elements = this.getAvailableFeatureElements(betAmount);
          // console.log(`[GameMain] updateFeatureWheel: bet = ${betAmount}, elements = [${elements.join(', ')}]`);
          featureWheel.setVisibleElements(elements);
        };
        _proto.getAvailableFeatureElements = function getAvailableFeatureElements(betAmount) {
          // Based on old project BetManager.ts logic
          // element names must match node names in the wheel prefab
          var defaultElements = ['feature_x2', 'feature_x5', 'feature_all_respin'];
          if (betAmount === 1) {
            // bet1: x2, x5, all_respin
            return defaultElements;
          } else if (betAmount === 5) {
            // bet5: Add scatter
            return [].concat(defaultElements, ['feature_scatter']);
          } else if (betAmount === 10) {
            // bet10: Add x10, scatter
            return [].concat(defaultElements, ['feature_x10', 'feature_scatter']);
          } else if (betAmount === 50 || betAmount === 100) {
            // bet50/100: Add x10, scatter_50_100 (red scatter)
            return [].concat(defaultElements, ['feature_x10', 'feature_scatter_50_100']);
          }
          return defaultElements;
        };
        _proto.playBrandTextAnimation = function playBrandTextAnimation(startAnim, cycleAnim) {
          var _this4 = this;
          var brandTextNode = this.propertyNode.props_brand_board;
          if (!brandTextNode || !brandTextNode.isValid) return;

          // 查找或创建一个专门用于动画的子节点
          var animNode = brandTextNode.getChildByName('payboard_light_anim');
          if (!animNode) {
            animNode = new Node('payboard_light_anim');
            brandTextNode.addChild(animNode);
          }
          // Adjust Sibling Index: Place BEHIND the active text node but IN FRONT of the background (text_frame)
          // We want order: [text_frame, animNode, activeTextNode, ...]
          var targetIndex = 2; // Default to 1 (after text_frame which is usually 0)
          animNode.setSiblingIndex(targetIndex);
          animNode.layer = brandTextNode.layer;

          // Ensure UITransform matches parent
          var uiTransform = animNode.getComponent(UITransform);
          if (!uiTransform) uiTransform = animNode.addComponent(UITransform);
          var parentTransform = brandTextNode.getComponent(UITransform);
          if (parentTransform) {
            uiTransform.contentSize = parentTransform.contentSize;
          }
          var skeleton = animNode.getComponent(sp.Skeleton);
          if (!skeleton) skeleton = animNode.addComponent(sp.Skeleton);
          skeleton.premultipliedAlpha = true;
          var spinePath = 'spine/payboard_Light/payboard_Light';
          var bundle = assetManager.getBundle('moneyComing');
          if (!bundle) {
            console.error("[GameMain] Cannot find bundle: moneyComing");
            return;
          }

          // Check if skeletonData is already loaded to avoid reloading
          if (skeleton.skeletonData && skeleton.skeletonData.name === 'payboard_Light') {
            this.playSkeletonAnimation(skeleton, startAnim, cycleAnim);
            return;
          }
          bundle.load(spinePath, sp.SkeletonData, function (err, skeletonData) {
            if (err || !skeleton || !skeleton.isValid) {
              console.error("[GameMain] Failed to load skeleton data for " + spinePath, err);
              return;
            }
            skeleton.skeletonData = skeletonData;
            _this4.playSkeletonAnimation(skeleton, startAnim, cycleAnim);
          });
        };
        _proto.playSkeletonAnimation = function playSkeletonAnimation(skeleton, startAnim, cycleAnim) {
          // 检查当前动画是否已经是目标循环动画，如果是则不打断（优化）
          if (skeleton.animation === cycleAnim) return;
          var trackEntry = skeleton.setAnimation(0, startAnim, false);
          if (trackEntry) {
            skeleton.setCompleteListener(function () {
              skeleton.setAnimation(0, cycleAnim, true);
              skeleton.setCompleteListener(null);
            });
          } else {
            // Fallback
            skeleton.setAnimation(0, cycleAnim, true);
          }
        }

        /**
         * 处理投注金额选择
         */;
        _proto.onBetAmountSelected = function onBetAmountSelected(amount) {
          // console.log('[GameMain] onBetAmountSelected:', amount);
          this.events.onBetChange(amount);
          // 选择后隐藏面板
          if (this.betSelectionNode) {
            this.betSelectionNode.active = false;
          }
        }

        /**
         * 初始化 betSelection 面板，绑定按钮事件
         */;
        _proto.initBetSelection = function initBetSelection() {
          var _this5 = this;
          if (!this.betSelectionNode) return;
          // 投注金额选项
          var amounts = [1, 5, 10, 50, 100];
          var _loop = function _loop() {
            var amount = _amounts2[_i2];
            // 尝试不同的节点路径
            var path = "hLayout/betOptionLayout/betOption" + amount;
            var btnNode = null;
            btnNode = _this5.betSelectionNode.getChildByPath(path);
            if (btnNode) {
              // console.log(`[GameMain] 找到投注按钮节点: ${amount}, 路径: ${path} `);
              // Button 组件在子节点上，使用 getComponentInChildren
              var button = btnNode.getComponentInChildren(Button);
              if (button) {
                button.node.on(Node.EventType.TOUCH_END, function () {
                  // console.log(`[GameMain] 投注按钮被点击: ${amount} `);
                  _this5.onBetAmountSelected(amount);
                });
                // console.log(`[GameMain] ✅ 成功绑定投注按钮: ${amount} `);
              } else {
                console.warn("[GameMain] \u26A0\uFE0F \u8282\u70B9 " + path + " \u7684\u5B50\u8282\u70B9\u4E2D\u6CA1\u6709 Button \u7EC4\u4EF6");
              }
            } else {
              console.warn("[GameMain] \u274C \u672A\u627E\u5230\u6295\u6CE8\u6309\u94AE\u8282\u70B9: " + amount + "\uFF0C\u5C1D\u8BD5\u7684\u8DEF\u5F84: ", path);
            }
          };
          for (var _i2 = 0, _amounts2 = amounts; _i2 < _amounts2.length; _i2++) {
            _loop();
          }
        };
        _proto.useProps = function useProps(key, value) {
          var _this6 = this;
          if (key === 'balance') {
            if (this.propertyNode.props_balance_label && value.cur !== undefined && value.cur !== null) {
              this.propertyNode.props_balance_label.string = value.cur.toFixed(2);
            }
          }
          if (key === 'winAmount') {
            if (this.propertyNode.props_win_label && value.cur !== undefined && value.cur !== null) {
              this.propertyNode.props_win_label.string = value.cur.toFixed(2);
            }
          }
          if (key === 'betAmount') {
            // console.log('[GameMain] useProps: betAmount changed to:', value.cur);
            if (this.propertyNode.props_bet_label && value.cur !== undefined && value.cur !== null) {
              this.propertyNode.props_bet_label.string = value.cur.toFixed(2);
              // console.log('[GameMain] useProps: updated props_bet_label to:', this.propertyNode.props_bet_label.string);
              // console.log('[GameMain] useProps: updated props_bet_label to:', this.propertyNode.props_bet_label.string);
              // this.updateRotatorsBet(value.cur); // Moved to LuckyWheelViewModel
              this.updateUnlockLevels(value.cur);
              this.highlightCurrentBet(value.cur);

              // Cancel all animations on wheels when bet changes
              this.wheels.forEach(function (wheel, index) {
                SymbolAnimator.stopAllAnimations(wheel.node);
                _this6.stopExpectAnimation(index);
              });
            } else {
              console.warn('[GameMain] useProps: props_bet_label is missing or value is invalid');
            }
          }
          if (key === 'isSpinning') {
            // 更新所有按钮状态（除了 auto 按钮在 autoSpin 模式下特殊处理）
            var isSpinning = value.cur;
            var isAutoSpin = this.props.autoSpin;
            console.log("[GameMain] useProps: isSpinning changed to " + isSpinning + ", isAutoSpin = " + isAutoSpin + " ");
            if (this.propertyNode.props_spin_btn) {
              this.propertyNode.props_spin_btn.interactable = !isSpinning && !isAutoSpin;
              console.log("[GameMain] Updated spin_btn interactable: " + this.propertyNode.props_spin_btn.interactable + " ");
            }
            if (this.propertyNode.props_bet_btn) {
              this.propertyNode.props_bet_btn.interactable = !isSpinning && !isAutoSpin;
            }
            // Setting button - disabled during spin
            if (this.propertyNode.props_setting) {
              var settingButton = this.propertyNode.props_setting.getComponent(Button);
              if (settingButton) {
                settingButton.interactable = !isSpinning && !isAutoSpin;
              }
            }
            if (this.propertyNode.props_turbo) {
              this.propertyNode.props_turbo.interactable = !isSpinning && !isAutoSpin;
            }
            // auto 按钮：spinning 时禁用，autoSpin 模式下始终可用
            if (this.propertyNode.props_auto_btn) {
              this.propertyNode.props_auto_btn.interactable = isAutoSpin || !isSpinning;
            }
            if (isSpinning && !value.pre) {
              // Respin 模式下不自动启动转动（由 RespinViewModel 控制）
              if (!this.props.isRespin) {
                console.log('[GameMain] useProps: isSpinning 触发，启动普通转动');
                this.startSpin();
              } else {
                console.log('[GameMain] useProps: isSpinning 触发，但处于 Respin 模式，跳过自动启动');
              }
            }
          }
          if (key === 'spinResults') {
            console.log('[GameMain] spinResults 变化:', {
              cur: value.cur,
              length: value.cur ? value.cur.length : 0,
              isSpinning: this.props.isSpinning,
              isRespin: this.props.isRespin
            });
            if (value.cur && value.cur.length > 0) {
              if (this.props.isSpinning) {
                // 区分普通 spin 和 respin
                if (this.props.isRespin) {
                  console.log('[GameMain] Respin 模式，不自动调用 stop（由 RespinViewModel 控制）');
                  // Respin 流程由 RespinViewModel 控制，不在这里自动停止
                  // RespinViewModel 会直接调用 stopRespin 方法
                } else {
                  console.log('[GameMain] 普通 Spin，调用 stopSpin');
                  this.stopSpin(value.cur);
                }
              } else {
                console.log('[GameMain] 初始状态或非旋转状态，直接设置结果:', value.cur);
                this.wheels.forEach(function (wheel, index) {
                  var result = index < value.cur.length ? value.cur[index] : '';
                  if (result) {
                    wheel.showResult(result, false);
                  }
                });
              }
            } else {
              console.warn('[GameMain] 不满足 stopSpin 条件:', {
                hasCur: !!value.cur,
                lengthOk: value.cur && value.cur.length > 0,
                isSpinning: this.props.isSpinning
              });
            }
          }
          if (key === 'turboMode') {
            // turboMode 变化时更新按钮素材
            this.updateTurboButtonSprite(value.cur);
          }
          if (key === 'autoSpin') {
            // autoSpin 状态变化时，更新按钮状态
            var _isAutoSpin = value.cur;
            var _isSpinning = this.props.isSpinning;

            // 更新所有按钮状态
            if (this.propertyNode.props_spin_btn) {
              this.propertyNode.props_spin_btn.interactable = !_isSpinning && !_isAutoSpin;
            }
            if (this.propertyNode.props_bet_btn) {
              this.propertyNode.props_bet_btn.interactable = !_isSpinning && !_isAutoSpin;
            }
            // Setting button - disabled during spin
            if (this.propertyNode.props_setting) {
              var _settingButton = this.propertyNode.props_setting.getComponent(Button);
              if (_settingButton) {
                _settingButton.interactable = !_isSpinning && !_isAutoSpin;
              }
            }
            if (this.propertyNode.props_turbo) {
              this.propertyNode.props_turbo.interactable = !_isSpinning && !_isAutoSpin;
            }
            // auto 按钮：autoSpin 模式下始终可用
            if (this.propertyNode.props_auto_btn) {
              this.propertyNode.props_auto_btn.interactable = _isAutoSpin || !_isSpinning;
            }
          }
        }

        /**
         * 更新 Turbo 按钮的素材
         * @param turboMode 0=normal, 1=turbo, 2=super_turbo
         */;
        _proto.updateTurboButtonSprite = function updateTurboButtonSprite(turboMode) {
          var _this7 = this;
          if (!this.propertyNode.props_turbo) return;

          // 根据状态确定图片路径
          var imagePath = '';
          if (turboMode === 0) {
            imagePath = 'texture/ui/controls/normal';
          } else if (turboMode === 1) {
            imagePath = 'texture/ui/controls/turbo';
          } else if (turboMode === 2) {
            imagePath = 'texture/ui/controls/super_turbo';
          }
          if (!imagePath) return;

          // console.log('[GameMain] 切换 Turbo 按钮素材:', imagePath);

          // 从 moneyComing bundle 加载图片
          var bundle = assetManager.getBundle('moneyComing');
          if (!bundle) {
            console.error('[GameMain] Cannot find moneyComing bundle');
            return;
          }
          bundle.load(imagePath + "/spriteFrame", SpriteFrame, function (err, spriteFrame) {
            if (err || !spriteFrame) {
              console.error("[GameMain] Failed to load turbo button image: " + imagePath, err);
              return;
            }

            // 获取按钮上的 Sprite 组件并设置 spriteFrame
            var sprite = _this7.propertyNode.props_turbo.node.getComponent(Sprite);
            if (sprite) {
              sprite.spriteFrame = spriteFrame;
            } else {
              console.warn('[GameMain] Sprite component not found on turbo button');
            }
          });
        };
        _proto.bindUI = function bindUI() {
          var _this8 = this;
          // BaseComponent 已自动绑定 propertyNode 中的节点
          // 这里只需要获取组件引用和做初始化设置
          // console.log('[GameMain] bindUI: props_bet_label bound?', this.propertyNode.props_bet_label ? 'YES' : 'NO');
          if (this.propertyNode.props_bet_label) ;

          // 查找 betSelection 节点
          this.betSelectionNode = this.node.getChildByPath("control_panel/controls/betSelection");
          if (this.betSelectionNode) {
            this.betSelectionNode.active = false; // 初始隐藏
            this.initBetSelection();
          } else {
            console.warn('[GameMain] betSelection 节点未找到，请在 Cocos Creator prefab 中创建该节点，路径：control_panel/controls/betSelection');
          }

          // Initialize Wheels
          this.wheels = [];
          var wheelPaths = ["wheels_container/wheels_layout/wheel_frame/wheels/wheel1", "wheels_container/wheels_layout/wheel_frame/wheels/wheel2", "wheels_container/wheels_layout/wheel_frame/wheels/wheel3", "wheels_container/wheels_layout/wheel_frame/wheels/wheel_feature"];
          wheelPaths.forEach(function (path, index) {
            var node = _this8.node.getChildByPath(path);
            if (node) {
              var wheel = node.getComponent(MoneyComing_Wheel);
              if (!wheel) {
                console.log("[GameMain] \u52A8\u6001\u6DFB\u52A0 MoneyComing_Wheel \u7EC4\u4EF6\u5230 " + path);
                wheel = node.addComponent(MoneyComing_Wheel);
              } else {
                console.log("[GameMain] \u4F7F\u7528\u5DF2\u6709\u7684 MoneyComing_Wheel \u7EC4\u4EF6: " + path);
              }

              // Ensure symbol container is linked
              if (!wheel.symbolContainer) {
                wheel.symbolContainer = node.getChildByName('symbol_container');
              }
              wheel.wheelType = index < 3 ? 'coin' : 'feature';
              wheel.bundle = 'moneyComing';
              _this8.wheels.push(wheel);
            } else {
              console.warn("Wheel node not found: " + path);
            }
          });

          // Manual binding for lucky wheels parent
          // const luckyWheels = this.node.getChildByPath('lucky_wheel/wheels');
          // if (luckyWheels) {
          //     this.propertyNode.props_lucky_wheels = luckyWheels;
          // } else {
          //     console.error('[GameMain] bindUI: lucky_wheel/wheels not found!');
          // }

          // Manual binding for lucky wheels (nested deep)       // this.initLuckyWheels(); // Moved to LuckyWheelViewModel

          // Initialize Lock Nodes
          this.initLockNodes();

          // Manual binding for Settings Selection
          var settingSelection = this.node.getChildByPath("control_panel/controls/props_setting_selection");
          if (settingSelection) {
            this.propertyNode.props_setting_selection = settingSelection;
            settingSelection.active = false; // Initial hidden
            // console.log('[GameMain] props_setting_selection bound successfully');

            // Bind back button inside selection
            var backBtn = settingSelection.getChildByPath("OptionLayout/props_setting_back");
            if (backBtn) {
              this.propertyNode.props_setting_back = backBtn;
              // Re-bind event since node was just found
              backBtn.on(Node.EventType.TOUCH_END, function () {
                _this8.onBackToHallClick();
              });
              // console.log('[GameMain] props_setting_back bound successfully');
            }
          } else {
            console.warn('[GameMain] props_setting_selection node not found at control_panel/controls/props_setting_selection');
          }

          // Bind Feature Boards
          // Try to find brandBoard
          var brandBoard = this.node.getChildByPath("lucky_wheel/brand/board/props_brand_board");
          if (brandBoard) {
            this.propertyNode.props_brand_board = brandBoard;
            // console.log('[GameMain] props_brand_board bound successfully');
          }

          // Try to find featureBoard
          var featureBoard = this.node.getChildByPath("lucky_wheel/brand/board/props_feature_board");
          if (featureBoard) {
            this.propertyNode.props_feature_board = featureBoard;
            featureBoard.active = false; // Initial hidden
            // console.log('[GameMain] props_feature_board bound successfully');
          }
        };

        _proto.initLockNodes = function initLockNodes() {
          // Wheel 3 Lock Node
          var wheel3 = this.wheels[2]; // Index 2 is Wheel 3
          if (wheel3 && wheel3.node) {
            var lockNode = wheel3.node.getChildByName('wheel_lock_node');
            if (!lockNode) {
              lockNode = new Node('wheel_lock_node');
              wheel3.node.addChild(lockNode);
              lockNode.setPosition(0, 0, 0);
            }
            lockNode.layer = wheel3.node.layer; // Ensure same layer
            // Set high sibling index to be on top
            lockNode.setSiblingIndex(wheel3.node.children.length - 1);
            lockNode.active = false; // Default hidden
            this.wheel3LockNode = lockNode;
            // console.log('[GameMain] initLockNodes: Wheel 3 lock node created/found');
          } else {
            console.error('[GameMain] initLockNodes: Wheel 3 not found');
          }

          // Lucky Wheel Lock Node (on wheel1_5_10)
          var wheel1_5_10 = this.propertyNode.props_lucky_wheel_1_5_10;
          if (wheel1_5_10) {
            var _lockNode = wheel1_5_10.getChildByName('wheel_lock_node');
            if (!_lockNode) {
              _lockNode = new Node('wheel_lock_node');
              wheel1_5_10.addChild(_lockNode);
              _lockNode.setPosition(0, 0, 0);
            }
            _lockNode.layer = wheel1_5_10.layer; // Ensure same layer
            _lockNode.setSiblingIndex(wheel1_5_10.children.length - 1);
            _lockNode.active = false; // Default hidden
            this.luckyWheelLockNode = _lockNode;
            // console.log('[GameMain] initLockNodes: Lucky Wheel lock node created/found on', wheel1_5_10.name);
          } else {
            console.error('[GameMain] initLockNodes: props_lucky_wheel_1_5_10 not bound');
          }
        };
        _proto.startSpin = function startSpin() {
          var _this9 = this;
          // Stop all animations on wheels before starting new spin
          this.wheels.forEach(function (wheel) {
            SymbolAnimator.stopAllAnimations(wheel.node);
          });

          // Also hide feature panel and reset other UI states if needed
          this.hideFeaturePanel();

          // 停止 Lucky Wheel 的光效动画
          this.stopLuckyWheelVFX();

          // 设置 turbo 模式到所有转轮
          var turboMode = this.props.turboMode;
          console.log("[GameMain] startSpin: \u8BBE\u7F6E turboMode=" + turboMode);
          this.wheels.forEach(function (wheel, index) {
            // Bet 1: Wheel 3 (index 2) is locked and should not spin
            if (_this9.props.betAmount === 1 && index === 2) {
              return;
            }
            // 设置 turbo 模式
            wheel.setTurboMode(turboMode);
            wheel.startSpin();
          });
        }

        /**
         * 停止 Lucky Wheel 的光效动画（target_coin 和 scatter_end_anim）
         * 并恢复 Lucky Wheel 的慢速旋转
         */;
        _proto.stopLuckyWheelVFX = function stopLuckyWheelVFX() {
          var _this10 = this;
          var wheels = [this.propertyNode.props_lucky_wheel_1_5_10, this.propertyNode.props_lucky_wheel_50_100];
          wheels.forEach(function (wheelNode) {
            if (!wheelNode || !wheelNode.isValid) return;

            // 停止 target_coin
            var targetCoinNode = wheelNode.getChildByName('target_coin');
            if (targetCoinNode && targetCoinNode.active) {
              targetCoinNode.active = false;
              console.log('[GameMain] Stopped target_coin VFX');
            }

            // 停止 scatter_end_anim
            var scatterEndAnimNode = wheelNode.getChildByName('scatter_end_anim');
            if (scatterEndAnimNode && scatterEndAnimNode.active) {
              scatterEndAnimNode.active = false;
              console.log('[GameMain] Stopped scatter_end_anim VFX');
            }

            // 恢复 Lucky Wheel 的慢速持续旋转
            _this10.resumeLuckyWheelRotation(wheelNode);
          });
        }

        /**
         * 恢复 Lucky Wheel 的慢速持续旋转
         */;
        _proto.resumeLuckyWheelRotation = function resumeLuckyWheelRotation(wheelNode) {
          if (!wheelNode || !wheelNode.isValid) return;
          var parts = ['money', 'money_upgrade', 'money_bg'];
          parts.forEach(function (partName) {
            var part = wheelNode.getChildByName(partName);
            if (part && part.active) {
              var rotator = part.getComponent(LuckyWheelRotator);
              if (rotator) {
                rotator.startRotation();
                console.log("[GameMain] Resumed rotation for " + partName);
              }
            }
          });
        };
        _proto.stopSpin = function stopSpin(results) {
          var _this11 = this;
          console.log('[GameMain] stopSpin 开始, results:', results, 'wheels数量:', this.wheels.length, 'turboMode:', this.props.turboMode);
          var stoppedCount = 0;

          // 根据 turbo 模式决定停止方式
          var isTurbo = this.props.turboMode > 0; // turbo 或 superTurbo 模式
          var stopInterval = isTurbo ? 0 : 0.2; // turbo 模式：同时停止（间隔0），normal 模式：依次停止（间隔0.2秒）

          this.wheels.forEach(function (wheel, index) {
            // 获取结果，如果没有提供则使用空字符串（停在两个元素之间）
            var result = index < results.length ? results[index] : '';
            console.log("[GameMain] \u51C6\u5907\u505C\u6B62 wheel " + index + ", result: \"" + result + "\", delay: " + index * stopInterval + "\u79D2");

            // 根据 turbo 模式选择停止方式：同时停止或依次停止
            _this11.scheduleOnce(function () {
              // Play Stop Sound
              moneyComing_Audio.playOneShot(SoundPathDefine.spinOver);
              console.log("[GameMain] \u8C03\u7528 wheel.stop() for index " + index);
              wheel.stop(result, function () {
                stoppedCount++;
                console.log("[GameMain] wheel " + index + " \u505C\u6B62\u5B8C\u6210, stoppedCount: " + stoppedCount + "/" + _this11.wheels.length);
                if (stoppedCount === _this11.wheels.length) {
                  console.log('[GameMain] 所有 wheel 停止完成，触发 onSpinComplete');
                  _this11.events.onSpinComplete();
                }
              });
            }, index * stopInterval);
          });
        };
        _proto.startRespin = function startRespin() {
          var _this12 = this;
          console.log('[GameMain] startRespin 开始');
          // Stop animations on wheels that are about to spin (0, 1, 2)
          // Feature wheel (3) animation (all_respin) should stay
          for (var i = 0; i < 3; i++) {
            if (this.wheels[i]) {
              SymbolAnimator.stopAllAnimations(this.wheels[i].node);
            }
          }

          // 停止 Lucky Wheel 的光效动画
          this.stopLuckyWheelVFX();

          // 确保 feature 轮子（index 3）完全停止，不参与 respin
          if (this.wheels[3]) {
            var _this$props$spinResul;
            console.log('[GameMain] 确保 feature 轮子停止，当前结果:', (_this$props$spinResul = this.props.spinResults) == null ? void 0 : _this$props$spinResul[3]);
            // 强制停止 feature 轮子的任何转动状态
            var featureWheel = this.wheels[3];
            if (featureWheel.isSpinning) {
              console.warn('[GameMain] ⚠️ Feature 轮子正在转动，强制停止');
              // 直接设置轮子为非转动状态
              featureWheel._isSpinning = false;
              featureWheel._spinState = 0; // SpinState.IDLE
            }
            // 确保 feature 轮子保持当前显示的符号
            if (this.props.spinResults && this.props.spinResults[3]) {
              featureWheel.showResult(this.props.spinResults[3], false);
            }
          }

          // 设置 turbo 模式到所有转轮
          var turboMode = this.props.turboMode;
          console.log("[GameMain] startRespin: \u8BBE\u7F6E turboMode=" + turboMode);
          this.wheels.forEach(function (wheel, index) {
            // Feature wheel (index 3) does not spin during respin
            if (index === 3) {
              console.log('[GameMain] ✅ 跳过 feature 轮子 (index 3)');
              return;
            }
            // Bet 1: Wheel 3 (index 2) is locked
            if (_this12.props.betAmount === 1 && index === 2) {
              console.log('[GameMain] ✅ 跳过锁定的轮子 (index 2)');
              return;
            }
            console.log("[GameMain] \u542F\u52A8\u8F6E\u5B50 " + index + " \u7684 respin");
            // 设置 turbo 模式
            wheel.setTurboMode(turboMode);
            wheel.startSpin();
            // Play expect animation on spinning wheels during respin
            _this12.playExpectAnimation(index);
          });
        };
        _proto.stopRespin = function stopRespin(results, onComplete) {
          var _this13 = this;
          console.log('[GameMain] stopRespin 开始, results:', results, 'turboMode:', this.props.turboMode);
          var stoppedCount = 0;
          var activeWheels = [];

          // 根据 turbo 模式决定停止方式
          var isTurbo = this.props.turboMode > 0;
          var stopInterval = isTurbo ? 0 : 0.2;

          // 再次确保 feature 轮子固定（防止被其他逻辑影响）
          if (this.wheels[3] && this.props.spinResults && this.props.spinResults[3]) {
            console.log('[GameMain] stopRespin: 确保 feature 轮子保持固定:', this.props.spinResults[3]);
            this.wheels[3].showResult(this.props.spinResults[3], false);
          }
          this.wheels.forEach(function (wheel, index) {
            if (index === 3) {
              console.log('[GameMain] stopRespin: ✅ 跳过 feature 轮子 (index 3)');
              return;
            }
            if (_this13.props.betAmount === 1 && index === 2) {
              console.log('[GameMain] stopRespin: ✅ 跳过锁定的轮子 (index 2)');
              return;
            }
            activeWheels.push(wheel);
          });
          console.log('[GameMain] stopRespin: 需要停止的轮子数量:', activeWheels.length, 'stopInterval:', stopInterval);
          activeWheels.forEach(function (wheel, i) {
            // Find corresponding result index.
            // results array should match wheels array indices.
            // wheel index 0 -> results[0]
            // wheel index 1 -> results[1]
            // wheel index 2 -> results[2]
            var wheelIndex = _this13.wheels.indexOf(wheel);
            var result = results[wheelIndex] || '';
            console.log("[GameMain] stopRespin: \u505C\u6B62\u8F6E\u5B50 " + wheelIndex + ", result: \"" + result + "\", delay: " + i * stopInterval + "\u79D2");
            _this13.scheduleOnce(function () {
              wheel.stop(result, function () {
                _this13.stopExpectAnimation(wheelIndex); // Stop expect animation
                stoppedCount++;
                if (stoppedCount === activeWheels.length) {
                  // console.log('[GameMain] stopRespin complete');
                  onComplete();
                }
              });
            }, i * stopInterval);
          });
        };
        _proto.showFeaturePanel = function showFeaturePanel(baseWin, featureType, betAmount) {
          var _featureBoard$getChil, _featureBoard$getChil2;
          if (featureType === void 0) {
            featureType = 'all_respin';
          }
          if (betAmount === void 0) {
            betAmount = 1;
          }
          var brandBoard = this.propertyNode.props_brand_board;
          var featureBoard = this.propertyNode.props_feature_board;
          if (!brandBoard || !featureBoard) {
            console.warn('[GameMain] Brand or Feature board nodes missing');
            return;
          }

          // console.log(`[GameMain] showFeaturePanel: baseWin=${baseWin}, type=${featureType}`);

          // Fix: If featureBoard is a child of brandBoard, hiding brandBoard will hide featureBoard too!
          var isChild = featureBoard.parent === brandBoard;
          if (isChild) {
            // console.log('[GameMain] featureBoard is a child of brandBoard. Keeping brandBoard active.');
            brandBoard.active = true;
            // Optionally hide other siblings if needed? 
            // For now, just show featureBoard. It likely covers the normal board.
            // Or maybe we should hide specific siblings if we knew them.
            // Let's try to hide all other children that are NOT featureBoard?
            // brandBoard.children.forEach(child => {
            //     if (child !== featureBoard) child.active = false;
            // });
            // But this is risky if there's a background sprite on a child.
            // Let's just show featureBoard for now.
          } else {
            brandBoard.active = false;
          }
          featureBoard.active = true;

          // Update Feature Board Content
          var rightNode = featureBoard.getChildByPath('right');
          if (rightNode) {
            var allRespinNode = rightNode.getChildByName('all_respin');
            var scatterNode = rightNode.getChildByName('scatter');
            var scatter50100Node = rightNode.getChildByName('scatter_50_100');
            if (allRespinNode) allRespinNode.active = false;
            if (scatterNode) scatterNode.active = false;
            if (scatter50100Node) scatter50100Node.active = false;
            if (featureType === 'all_respin' && allRespinNode) {
              allRespinNode.active = true;
            } else if (featureType === 'scatter') {
              if ([50, 100].indexOf(betAmount) !== -1 && scatter50100Node) {
                scatter50100Node.active = true;
              } else if (scatterNode) {
                scatterNode.active = true;
              }
            }
          }
          var baseValueLabel = (_featureBoard$getChil = featureBoard.getChildByPath('base_value')) == null ? void 0 : _featureBoard$getChil.getComponent(Label);
          if (baseValueLabel) baseValueLabel.string = baseWin.toString();
          var bonusValueLabel = (_featureBoard$getChil2 = featureBoard.getChildByPath('bonus_value')) == null ? void 0 : _featureBoard$getChil2.getComponent(Label);
          if (bonusValueLabel) bonusValueLabel.string = '0';
        };
        _proto.updateFeatureBonus = function updateFeatureBonus(bonusWin) {
          var _featureBoard$getChil3;
          var featureBoard = this.propertyNode.props_feature_board;
          if (!featureBoard || !featureBoard.active) return;
          var bonusValueLabel = (_featureBoard$getChil3 = featureBoard.getChildByPath('bonus_value')) == null ? void 0 : _featureBoard$getChil3.getComponent(Label);
          if (bonusValueLabel) bonusValueLabel.string = bonusWin.toString();
        };
        _proto.playFeatureSymbolAnimation = function playFeatureSymbolAnimation(animName) {
          if (this.wheels.length < 4) return;
          var featureWheel = this.wheels[3];
          if (!featureWheel) return;
          var symbolNode = featureWheel.getDisplayedElement();
          if (symbolNode) {
            // console.log(`[GameMain] Playing feature symbol animation: ${animName} on ${symbolNode.name}`);
            var worldPos = symbolNode.getWorldPosition();
            SymbolAnimator.playAnimationAt(featureWheel.node, worldPos, animName, 'moneyComing', true);
          }
        };
        _proto.playWinAnimations = function playWinAnimations(results) {
          // console.log('[GameMain] playWinAnimations:', results);

          // Stop existing animations
          this.wheels.forEach(function (wheel) {
            SymbolAnimator.stopAllAnimations(wheel.node);
          });
          var betAmount = this.props.betAmount;
          var coinCount = betAmount === 1 ? 2 : 3;
          var feature = results[3];

          // 1. Check for Base Win
          var numberStr = '';
          for (var i = 0; i < coinCount; i++) {
            var res = results[i];
            if (res && res.startsWith('element_')) {
              numberStr += res.replace('element_', '');
            }
          }
          var baseValue = !numberStr ? 0 : parseInt(numberStr, 10);

          // 2. Play Coin Animations
          if (baseValue > 0) {
            // Find first significant digit
            var firstSignificantIndex = -1;
            for (var _i3 = 0; _i3 < coinCount; _i3++) {
              var _res = results[_i3];
              if (_res && _res.startsWith('element_')) {
                var val = _res.replace('element_', '');
                if (val !== '0' && val !== '00') {
                  firstSignificantIndex = _i3;
                  break;
                }
              }
            }
            if (firstSignificantIndex !== -1) {
              for (var _i4 = firstSignificantIndex; _i4 < coinCount; _i4++) {
                var _res2 = results[_i4];
                if (_res2 && _res2.startsWith('element_')) {
                  var wheel = this.wheels[_i4];
                  var elementNode = wheel.getDisplayedElement();
                  if (elementNode) {
                    var worldPos = elementNode.getWorldPosition();
                    SymbolAnimator.playAnimationAt(wheel.node, worldPos, _res2, 'moneyComing', true);
                  }
                }
              }
            }
          }

          // 3. Play Feature Animation
          if (feature) {
            var isMultiplier = feature.includes('x'); // x2, x5, x10
            var isScatter = feature.includes('scatter');
            var isAllRespin = feature === 'feature_all_respin';
            if (baseValue > 0 && isMultiplier || isScatter || isAllRespin) {
              var _wheel = this.wheels[3];
              var _elementNode = _wheel.getDisplayedElement();
              if (_elementNode) {
                var _worldPos = _elementNode.getWorldPosition();
                SymbolAnimator.playAnimationAt(_wheel.node, _worldPos, feature, 'moneyComing', true);
              }
            }
          }
        };
        _proto.playExpectAnimation = function playExpectAnimation(wheelIndex) {
          var _parentNode$getCompon;
          if (wheelIndex < 0 || wheelIndex >= this.wheels.length) return;
          var wheel = this.wheels[wheelIndex];
          if (!wheel || !wheel.node) return;

          // Use GameMain node as parent to ensure it's on top of everything in the wheel area
          var parentNode = this.node;
          var animNodeName = "expect_anim_" + wheelIndex;
          var animNode = parentNode.getChildByName(animNodeName);
          if (!animNode) {
            animNode = new Node(animNodeName);
            parentNode.addChild(animNode);
          }

          // Sync position with wheel
          var wheelWorldPos = wheel.node.getWorldPosition();
          var localPos = ((_parentNode$getCompon = parentNode.getComponent(UITransform)) == null ? void 0 : _parentNode$getCompon.convertToNodeSpaceAR(wheelWorldPos)) || wheelWorldPos;
          animNode.setPosition(localPos);

          // Scale (from old project)
          animNode.setScale(1, 0.95, 1);

          // Sibling index: Ensure it's on top
          animNode.setSiblingIndex(parentNode.children.length - 1);
          animNode.active = true;
          var skeleton = animNode.getComponent(sp.Skeleton);
          if (!skeleton) skeleton = animNode.addComponent(sp.Skeleton);
          skeleton.premultipliedAlpha = true;
          var path = 'spine/expect/expect';
          var bundle = assetManager.getBundle('moneyComing');
          if (bundle) {
            bundle.load(path, sp.SkeletonData, function (err, skeletonData) {
              if (err || !skeleton || !skeleton.isValid) {
                console.error("[GameMain] Failed to load expect spine: " + path, err);
                return;
              }
              skeleton.skeletonData = skeletonData;
              skeleton.setAnimation(0, 'light01', true);
            });
          }
        };
        _proto.stopExpectAnimation = function stopExpectAnimation(wheelIndex) {
          if (wheelIndex < 0 || wheelIndex >= this.wheels.length) return;
          var wheel = this.wheels[wheelIndex];
          if (!wheel || !wheel.node) return;
          var wheelsNode = wheel.node.parent;
          if (!wheelsNode) return;
          var wheelFrame = wheelsNode.parent;
          if (!wheelFrame) return;
          var animNodeName = "expect_anim_" + wheelIndex;
          var animNode = this.node.getChildByName(animNodeName);
          if (animNode) {
            animNode.destroy();
          }
        };
        _proto.playBigWinEffect = function playBigWinEffect(winType, amount, onComplete) {
          // console.log(`[GameMain] playBigWinEffect: type=${winType}, amount=${amount}`);

          // Play Big Win Sound
          moneyComing_Audio.playOneShot(SoundPathDefine.bigWin);
          var winEffectNode = this.propertyNode.props_win_effect;
          if (!winEffectNode) {
            console.error('[GameMain] props_win_effect node not found!');
            onComplete();
            return;
          }
          winEffectNode.active = true;

          // Animation names
          var startAnim = winType + "win_start";
          var loopAnim = winType + "win_cycle";

          // 1. Play 'point' animation (coins)
          // Point node usually has 'win_start' and 'win_cycle' regardless of win type?
          // Old project: this.playChildAnimation(this.winEffect, 'point', 'win_start', false);
          //              this.playChildAnimation(this.winEffect, 'point', 'win_cycle', true);
          var pointNode = winEffectNode.getChildByName('point');
          if (pointNode) {
            var skeleton = pointNode.getComponent(sp.Skeleton);
            if (skeleton) {
              skeleton.setAnimation(0, 'win_start', false);
              skeleton.addAnimation(0, 'win_cycle', true);
            }
            // Update label in point node if exists
            var label = pointNode.getComponentInChildren(Label);
            if (label) {
              // Rollup animation
              var obj = {
                value: 0
              };
              tween(obj).to(2.0, {
                value: amount
              }, {
                onUpdate: function onUpdate(target) {
                  label.string = target.value.toFixed(2);
                }
              }).start();
            }
          }

          // 2. Play 'win_back' and 'win_front'
          // Old project:
          // win_back: startAnimName (false) -> cycleAnimName (true) (Wait, old project logic was complex)
          // Let's stick to:
          // win_back: startAnim -> loopAnim
          // win_front: startAnim -> loopAnim

          var backNode = winEffectNode.getChildByName('win_back');
          if (backNode) {
            var _skeleton = backNode.getComponent(sp.Skeleton);
            if (_skeleton) {
              _skeleton.setAnimation(0, startAnim, false);
              _skeleton.addAnimation(0, loopAnim, true);
            }
          }
          var frontNode = winEffectNode.getChildByName('win_front');
          if (frontNode) {
            var _skeleton2 = frontNode.getComponent(sp.Skeleton);
            if (_skeleton2) {
              _skeleton2.setAnimation(0, startAnim, false);
              _skeleton2.addAnimation(0, loopAnim, true);
            }
          }

          // Schedule end
          this.scheduleOnce(function () {
            winEffectNode.active = false;
            onComplete();
          }, 5.0); // 5 seconds duration
        };

        _proto.playScatterFlyAnimation = function playScatterFlyAnimation(betAmount, onComplete) {
          // console.log(`[GameMain] playScatterFlyAnimation: betAmount=${betAmount}`);

          if (this.wheels.length < 4) {
            onComplete();
            return;
          }
          var featureWheel = this.wheels[3];
          var startNode = featureWheel.node; // Use wheel node as start, similar to old project

          // Determine target wheel path based on bet
          var targetWheelPath = '';
          if (betAmount === 1 || betAmount === 5 || betAmount === 10) {
            targetWheelPath = 'props_lucky_wheel_1_5_10/money_bg'; // Use money_bg as center reference
          } else if (betAmount === 50 || betAmount === 100) {
            targetWheelPath = 'props_lucky_wheel_50_100/money_bg';
          }
          var luckyWheelsNode = this.propertyNode.props_lucky_wheels;
          if (!luckyWheelsNode) {
            console.error('[GameMain] Lucky wheels node not found');
            onComplete();
            return;
          }
          var endNode = luckyWheelsNode.getChildByPath(targetWheelPath);
          if (!startNode || !endNode) {
            console.error("[GameMain] Start or End node not found. Start: " + (startNode == null ? void 0 : startNode.name) + ", End: " + (endNode == null ? void 0 : endNode.name));
            onComplete();
            return;
          }

          // Use AnimationUtils to play the flying animation
          // Parent node should be the game view root or canvas to ensure visibility
          var parentNode = this.node;

          // Play sound
          moneyComing_Audio.playOneShot(SoundPathDefine.allRespinScatter);
          AnimationUtils.playImage('moneyComing', startNode, endNode, parentNode, function () {
            // console.log('[GameMain] Scatter fly animation completed');
            onComplete();
          }, 'up' // Scatter uses 'up' curve (all_respin style)
          );
        };

        _proto.hideFeaturePanel = function hideFeaturePanel() {
          var brandBoard = this.propertyNode.props_brand_board;
          var featureBoard = this.propertyNode.props_feature_board;
          if (brandBoard && featureBoard && featureBoard.active) {
            // console.log('[GameMain] hideFeaturePanel');

            var isChild = featureBoard.parent === brandBoard;
            if (isChild) {
              // If child, just hide featureBoard. brandBoard should already be active.
              featureBoard.active = false;
              brandBoard.active = true; // Ensure it's active
              // If we hid siblings in showFeaturePanel, we would need to restore them here.
            } else {
              brandBoard.active = true;
              featureBoard.active = false;
            }
          }
        };
        return MoneyComing_GameMain;
      }(BaseComponent)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoneyComing_LuckyWheel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseComponent.ts', './LuckyWheelRotator.ts', './index83.ts', './soundDefine21.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, sp, Node, BaseComponent, LuckyWheelRotator, moneyComing_Audio, SoundPathDefine;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Node = module.Node;
    }, function (module) {
      BaseComponent = module.BaseComponent;
    }, function (module) {
      LuckyWheelRotator = module.LuckyWheelRotator;
    }, function (module) {
      moneyComing_Audio = module.moneyComing_Audio;
    }, function (module) {
      SoundPathDefine = module.SoundPathDefine;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "14404rPkqdIX447vdvVabHH", "MoneyComing_LuckyWheel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MoneyComing_LuckyWheel = exports('MoneyComing_LuckyWheel', (_dec = ccclass('MoneyComing_LuckyWheel'), _dec(_class = /*#__PURE__*/function (_BaseComponent) {
        _inheritsLoose(MoneyComing_LuckyWheel, _BaseComponent);
        function MoneyComing_LuckyWheel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseComponent.call.apply(_BaseComponent, [this].concat(args)) || this;
          _this.rotators = [];
          _this.propertyNode = {
            props_lucky_wheel_1_5_10: new Node(),
            props_lucky_wheel_50_100: new Node()
          };
          _this.props = {
            betAmount: 1
          };
          _this.events = {};
          return _this;
        }
        var _proto = MoneyComing_LuckyWheel.prototype;
        _proto.bindEvent = function bindEvent() {};
        _proto.initState = function initState() {
          return {};
        };
        _proto.bindUI = function bindUI() {
          this.initRotators();
          // 初始化时确保光效节点是未激活状态
          this.initVFXNodes();
          // Force initial update to ensure correct wheel is shown
          console.log('[LuckyWheel] bindUI: forcing initial update with betAmount=', this.props.betAmount);
          this.updateWheelState(this.props.betAmount);
        }

        /**
         * 初始化光效节点，确保默认未激活
         */;
        _proto.initVFXNodes = function initVFXNodes() {
          var wheels = [this.propertyNode.props_lucky_wheel_1_5_10, this.propertyNode.props_lucky_wheel_50_100];
          wheels.forEach(function (wheel) {
            if (wheel && wheel.isValid) {
              // 确保 target_coin 初始未激活
              var targetCoinNode = wheel.getChildByName('target_coin');
              if (targetCoinNode) {
                targetCoinNode.active = false;
                console.log('[LuckyWheel] Initialized target_coin as inactive');
              }

              // 确保 scatter_end_anim 初始未激活
              var scatterEndAnimNode = wheel.getChildByName('scatter_end_anim');
              if (scatterEndAnimNode) {
                scatterEndAnimNode.active = false;
                console.log('[LuckyWheel] Initialized scatter_end_anim as inactive');
              }
            }
          });
        };
        _proto.initRotators = function initRotators() {
          var _this2 = this;
          var wheels = [this.propertyNode.props_lucky_wheel_1_5_10, this.propertyNode.props_lucky_wheel_50_100];
          wheels.forEach(function (wheel) {
            if (wheel && wheel.isValid) {
              // Find rotating parts
              var rotatingParts = ['money', 'money_upgrade', 'money_bg'];
              rotatingParts.forEach(function (partName) {
                var part = wheel.getChildByName(partName);
                if (part) {
                  var rotator = part.getComponent(LuckyWheelRotator);
                  if (!rotator) rotator = part.addComponent(LuckyWheelRotator);
                  rotator.autoStart = true;
                  rotator.rotationSpeed = -10;
                  rotator.startRotation(); // Ensure it starts
                  _this2.rotators.push(rotator);
                }
              });
            }
          });
        };
        _proto.useProps = function useProps(key, value) {
          console.log("[LuckyWheel] useProps: key=" + key + ", pre=" + value.pre + ", cur=" + value.cur);
          if (key === 'betAmount') {
            this.updateWheelState(value.cur);
          }
        };
        _proto.updateWheelState = function updateWheelState(betAmount) {
          console.log("[LuckyWheel] updateWheelState: betAmount=" + betAmount);
          // Update Rotators
          this.rotators.forEach(function (r) {
            return r.betAmount = betAmount;
          });
          var wheel1_5_10 = this.propertyNode.props_lucky_wheel_1_5_10;
          var wheel50_100 = this.propertyNode.props_lucky_wheel_50_100;
          console.log("[LuckyWheel] Nodes: 1_5_10=" + (wheel1_5_10 == null ? void 0 : wheel1_5_10.name) + ", 50_100=" + (wheel50_100 == null ? void 0 : wheel50_100.name));

          // Update Visibility
          if (wheel1_5_10 && wheel50_100) {
            if ([1, 5, 10].indexOf(betAmount) !== -1) {
              console.log('[LuckyWheel] Showing 1_5_10');
              wheel1_5_10.active = true;
              wheel50_100.active = false;
              this.updateWheelContent(wheel1_5_10, betAmount);
            } else {
              console.log('[LuckyWheel] Showing 50_100');
              wheel1_5_10.active = false;
              wheel50_100.active = true;
              this.updateWheelContent(wheel50_100, betAmount);
            }
          }
        };
        _proto.updateWheelContent = function updateWheelContent(wheelNode, betAmount) {
          var money = wheelNode.getChildByName('money');
          var moneyUpgrade = wheelNode.getChildByName('money_upgrade');
          var moneyBg = wheelNode.getChildByName('money_bg');
          var showMoney = false;
          if (betAmount === 1 || betAmount === 5 || betAmount === 50) {
            showMoney = true;
          } else {
            showMoney = false;
          }

          // Sync rotation with money_bg if available
          var targetRotation = 0;
          if (moneyBg) {
            targetRotation = moneyBg.eulerAngles.z;
            // Or better, get it from the rotator if possible, but eulerAngles.z should be fine as they are all rotating nodes
          }

          if (money) {
            money.active = showMoney;
            if (showMoney && moneyBg) {
              // Sync rotation
              money.setRotationFromEuler(0, 0, targetRotation);
              var rotator = money.getComponent(LuckyWheelRotator);
              if (rotator) rotator.setCurrentRotation(targetRotation);
            }
          }
          if (moneyUpgrade) {
            moneyUpgrade.active = !showMoney;
            if (!showMoney && moneyBg) {
              // Sync rotation
              moneyUpgrade.setRotationFromEuler(0, 0, targetRotation);
              var _rotator = moneyUpgrade.getComponent(LuckyWheelRotator);
              if (_rotator) _rotator.setCurrentRotation(targetRotation);
            }
          }
        };
        _proto.spin = function spin(prizeIndex, onComplete) {
          var _this3 = this;
          console.log("[LuckyWheel] spin: prizeIndex=" + prizeIndex);

          // Play spin sound
          moneyComing_Audio.playOneShot(SoundPathDefine.luckyWheel);
          var activeWheel = this.propertyNode.props_lucky_wheel_1_5_10.active ? this.propertyNode.props_lucky_wheel_1_5_10 : this.propertyNode.props_lucky_wheel_50_100;

          // 停止之前的光效（如果有）
          this.stopWinVFX(this.propertyNode.props_lucky_wheel_1_5_10);
          this.stopWinVFX(this.propertyNode.props_lucky_wheel_50_100);
          if (activeWheel) {
            var wheelSpineNode = activeWheel.getChildByName('wheel');
            if (wheelSpineNode) {
              var skeleton = wheelSpineNode.getComponent(sp.Skeleton);
              if (skeleton) {
                skeleton.timeScale = 2.0;
                skeleton.setAnimation(0, 'common_run_start', false);
              }
            }
          }

          // Calculate target angle
          // Assuming index 0 is at 90 degrees (Top) and clockwise
          // Angle = 90 - (index * 45)
          var anglePerPrize = 45;
          var startAngle = 90;
          var targetAngle = startAngle - prizeIndex * anglePerPrize;

          // Normalize to 0-360
          if (targetAngle < 0) targetAngle += 360;

          // Find active rotator
          // We have two wheels: 1_5_10 and 50_100. Only one is active.
          // But we have rotators for money, money_upgrade, money_bg.
          // We should spin all of them? Or just the one that is visible?
          // Actually, updateWheelContent sets active state.
          // We should spin all rotators that belong to the active wheel.

          // activeWheel is already defined above

          if (!activeWheel) {
            console.error('[LuckyWheel] No active wheel found');
            onComplete();
            return;
          }
          var rotatorsToSpin = [];
          var parts = ['money', 'money_upgrade', 'money_bg'];
          parts.forEach(function (partName) {
            var part = activeWheel.getChildByName(partName);
            if (part && part.active) {
              var rotator = part.getComponent(LuckyWheelRotator);
              if (rotator) rotatorsToSpin.push(rotator);
            }
          });
          if (rotatorsToSpin.length === 0) {
            console.warn('[LuckyWheel] No active rotators found');
            onComplete();
            return;
          }
          var completedCount = 0;
          rotatorsToSpin.forEach(function (rotator) {
            // Spin duration 6s from config
            rotator.spinTo(targetAngle, 6.0, function () {
              completedCount++;
              if (completedCount === rotatorsToSpin.length) {
                // 播放中奖位置的光效动画
                _this3.playWinVFX(activeWheel);
                onComplete();
              }
            });
          });
        }

        /**
         * 播放 Lucky Wheel 中奖位置的光效
         * @param wheelNode 当前激活的轮盘节点
         */;
        _proto.playWinVFX = function playWinVFX(wheelNode) {
          if (!wheelNode) return;

          // 1. 激活 target_coin 节点（自动播放 Spine 默认动画）
          var targetCoinNode = wheelNode.getChildByName('target_coin');
          if (targetCoinNode) {
            targetCoinNode.active = true;
            console.log('[LuckyWheel] Activated target_coin VFX');
          } else {
            console.warn('[LuckyWheel] target_coin node not found');
          }

          // 2. 激活 scatter_end_anim 节点（自动播放 Spine 默认动画）
          var scatterEndAnimNode = wheelNode.getChildByName('scatter_end_anim');
          if (scatterEndAnimNode) {
            scatterEndAnimNode.active = true;
            console.log('[LuckyWheel] Activated scatter_end_anim');
          } else {
            console.warn('[LuckyWheel] scatter_end_anim node not found');
          }
        }

        /**
         * 停止 Lucky Wheel 的光效动画
         * @param wheelNode 轮盘节点
         */;
        _proto.stopWinVFX = function stopWinVFX(wheelNode) {
          if (!wheelNode || !wheelNode.isValid) {
            console.warn('[LuckyWheel] stopWinVFX: wheelNode is null or invalid');
            return;
          }
          console.log("[LuckyWheel] stopWinVFX called for: " + wheelNode.name + ", active: " + wheelNode.active);

          // 1. 取消激活 target_coin 节点
          var targetCoinNode = wheelNode.getChildByName('target_coin');
          if (targetCoinNode) {
            var wasActive = targetCoinNode.active;
            targetCoinNode.active = false;
            console.log("[LuckyWheel] Deactivated target_coin VFX (was " + (wasActive ? 'active' : 'inactive') + ")");
          } else {
            console.warn("[LuckyWheel] target_coin not found in " + wheelNode.name);
          }

          // 2. 取消激活 scatter_end_anim 节点
          var scatterEndAnimNode = wheelNode.getChildByName('scatter_end_anim');
          if (scatterEndAnimNode) {
            var _wasActive = scatterEndAnimNode.active;
            scatterEndAnimNode.active = false;
            console.log("[LuckyWheel] Deactivated scatter_end_anim (was " + (_wasActive ? 'active' : 'inactive') + ")");
          } else {
            console.warn("[LuckyWheel] scatter_end_anim not found in " + wheelNode.name);
          }
        };
        return MoneyComing_LuckyWheel;
      }(BaseComponent)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoneyComing_Respin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseComponent.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, assetManager, SpriteFrame, Node, Layers, UIOpacity, Sprite, UITransform, Vec3, v3, tween, BaseComponent;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      Layers = module.Layers;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      v3 = module.v3;
      tween = module.tween;
    }, function (module) {
      BaseComponent = module.BaseComponent;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a3599MIjJJN/bQKZ+9K2205", "MoneyComing_Respin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MoneyComing_Respin = exports('MoneyComing_Respin', (_dec = ccclass('MoneyComing_Respin'), _dec(_class = /*#__PURE__*/function (_BaseComponent) {
        _inheritsLoose(MoneyComing_Respin, _BaseComponent);
        function MoneyComing_Respin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseComponent.call.apply(_BaseComponent, [this].concat(args)) || this;
          // Removed manual property bindings
          _this.propertyNode = {};
          _this.props = {
            betAmount: 1
          };
          _this.events = {
            onFlyComplete: function onFlyComplete() {}
          };
          return _this;
        }
        var _proto = MoneyComing_Respin.prototype;
        _proto.initState = function initState() {
          return {};
        };
        _proto.bindEvent = function bindEvent() {};
        _proto.useProps = function useProps(key, value) {};
        _proto.bindUI = function bindUI() {};
        _proto.playFlyAnimation = function playFlyAnimation(betAmount) {
          var _this2 = this;
          console.log('[MoneyComing_Respin] playFlyAnimation 开始, betAmount:', betAmount);

          // 1. Find Start Node (Feature Wheel)
          var featureWheelNode = this.node.getChildByPath("wheels_container/wheels_layout/wheel_frame/wheels/wheel_feature");
          if (!featureWheelNode) {
            console.error('[MoneyComing_Respin] Feature wheel node not found');
            console.log('[MoneyComing_Respin] 调用 onFlyComplete (节点未找到)');
            this.events.onFlyComplete();
            return;
          }
          console.log('[MoneyComing_Respin] Feature wheel node 找到');

          // Find the 'all_respin' symbol on the feature wheel
          // Since we don't have easy access to the exact symbol node instance from here without querying the wheel component,
          // we can use the wheel's center or try to find the active symbol.
          // For simplicity, let's use the wheel center or a fixed offset.
          var startNode = featureWheelNode;

          // 2. Find Target Nodes (Coin Wheels)
          var targets = [];
          var wheelPaths = ["wheels_container/wheels_layout/wheel_frame/wheels/wheel1", "wheels_container/wheels_layout/wheel_frame/wheels/wheel2", "wheels_container/wheels_layout/wheel_frame/wheels/wheel3"];

          // Bet 1: 2 wheels. Bet > 1: 3 wheels.
          var activeCount = betAmount === 1 ? 2 : 3;
          for (var i = 0; i < activeCount; i++) {
            var wheelNode = this.node.getChildByPath(wheelPaths[i]);
            if (wheelNode) {
              targets.push(wheelNode);
            }
          }
          if (targets.length === 0) {
            console.warn('[MoneyComing_Respin] No target wheels found');
            console.log('[MoneyComing_Respin] 调用 onFlyComplete (无目标轮子)');
            this.events.onFlyComplete();
            return;
          }
          console.log('[MoneyComing_Respin] 找到', targets.length, '个目标轮子');
          var completedCount = 0;
          var total = targets.length;
          var bundleName = 'moneyComing';
          var imagePath = 'cocos_lizi/fly/sybres_eft_str_02/spriteFrame';
          var explosionPath = 'cocos_lizi/fly/sybres_eft_exp_04/spriteFrame';

          // Load assets dynamically
          var bundle = assetManager.getBundle(bundleName);
          if (!bundle) {
            console.error("[MoneyComing_Respin] Bundle " + bundleName + " not found");
            console.log('[MoneyComing_Respin] 调用 onFlyComplete (Bundle 未找到)');
            this.events.onFlyComplete();
            return;
          }
          console.log('[MoneyComing_Respin] 开始加载飞行资源...');
          bundle.load([imagePath, explosionPath], SpriteFrame, function (err, assets) {
            if (err) {
              console.error('[MoneyComing_Respin] Failed to load fly assets', err);
              console.log('[MoneyComing_Respin] 调用 onFlyComplete (资源加载失败)');
              _this2.events.onFlyComplete();
              return;
            }
            console.log('[MoneyComing_Respin] 飞行资源加载成功，开始播放', total, '个飞行动画');
            var flySpriteFrame = assets[0];
            var explosionSpriteFrame = assets[1];
            targets.forEach(function (target, index) {
              _this2.playSingleFly(startNode, target, flySpriteFrame, explosionSpriteFrame, function () {
                completedCount++;
                console.log("[MoneyComing_Respin] \u98DE\u884C\u52A8\u753B " + completedCount + "/" + total + " \u5B8C\u6210");
                if (completedCount === total) {
                  console.log('[MoneyComing_Respin] 🎉 所有飞行动画完成，调用 onFlyComplete');
                  _this2.events.onFlyComplete();
                }
              });
            });
          });
        };
        _proto.playSingleFly = function playSingleFly(fromNode, toNode, flySprite, explosionSprite, onComplete) {
          var _this$node$getCompone, _this$node$getCompone2;
          var imageNode = new Node('FlyEffectNode');
          imageNode.layer = Layers.Enum.UI_2D;
          var opacity = imageNode.addComponent(UIOpacity);
          var sprite = imageNode.addComponent(Sprite);
          sprite.spriteFrame = flySprite;

          // Add to parent (this.node is likely the GameMain view node)
          this.node.addChild(imageNode);
          var fromPosition = fromNode.getWorldPosition();
          var toPosition = toNode.getWorldPosition();

          // Convert world positions to local positions relative to this.node
          var localFrom = ((_this$node$getCompone = this.node.getComponent(UITransform)) == null ? void 0 : _this$node$getCompone.convertToNodeSpaceAR(fromPosition)) || new Vec3();
          var localTo = ((_this$node$getCompone2 = this.node.getComponent(UITransform)) == null ? void 0 : _this$node$getCompone2.convertToNodeSpaceAR(toPosition)) || new Vec3();

          // Control point for curve (upwards)
          var controlPosition = v3(localFrom.x, localFrom.y + 500, 0);
          imageNode.setPosition(localFrom);
          imageNode.setScale(2, 2, 1);
          tween(imageNode).to(1, {
            position: localTo
          }, {
            onUpdate: function onUpdate(target, ratio) {
              var t = ratio;
              var p0 = localFrom;
              var p1 = controlPosition;
              var p2 = localTo;
              var x = (1 - t) * (1 - t) * p0.x + 2 * t * (1 - t) * p1.x + t * t * p2.x;
              var y = (1 - t) * (1 - t) * p0.y + 2 * t * (1 - t) * p1.y + t * t * p2.y;
              imageNode.setPosition(x, y, 0);
            }
          }).call(function () {
            // Explosion effect
            sprite.spriteFrame = explosionSprite;
            // 缩放和淡出同时进行，持续 0.3 秒
            tween(imageNode).to(0.3, {
              scale: new Vec3(8, 8, 1)
            }).start();
            tween(opacity).to(0.3, {
              opacity: 0
            }).call(function () {
              imageNode.destroy();
              onComplete();
            }).start();
          }).start();
        };
        return MoneyComing_Respin;
      }(BaseComponent)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoneyComing_StartUp.ts", ['cc', './index83.ts'], function (exports) {
  var cclegacy, startUp, stopGame;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      startUp = module.startUp;
      stopGame = module.stopGame;
    }],
    execute: function () {
      cclegacy._RF.push({}, "684abfx4RNH163jlrqRZBFm", "MoneyComing_StartUp", undefined);
      var MoneyComing_StartUp = exports('default', function (boardNode) {
        startUp(boardNode);
        return function () {
          stopGame();
        };
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoneyComing_Wheel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SymbolAnimator.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Node, instantiate, Layout, UITransform, Vec3, tween, Component, SymbolAnimator;
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
      Node = module.Node;
      instantiate = module.instantiate;
      Layout = module.Layout;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      SymbolAnimator = module.SymbolAnimator;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "f96714hkFBGA73VXVIiag4T", "MoneyComing_Wheel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**
       * @description 滚轮动画状态
       */
      var SpinState = /*#__PURE__*/function (SpinState) {
        SpinState[SpinState["IDLE"] = 0] = "IDLE";
        SpinState[SpinState["SPINNING"] = 1] = "SPINNING";
        SpinState[SpinState["DECELERATING"] = 2] = "DECELERATING";
        SpinState[SpinState["BOUNCING"] = 3] = "BOUNCING";
        return SpinState;
      }(SpinState || {});
      /**
       * @description 滚轮组件
       * 负责单个滚轮的滚动动画和停止逻辑
       */
      var MoneyComing_Wheel = exports('MoneyComing_Wheel', (_dec = ccclass('MoneyComing_Wheel'), _dec2 = property(Node), _dec3 = property({
        group: 'Physics',
        tooltip: '最大速度（像素/秒）'
      }), _dec4 = property({
        group: 'Physics',
        tooltip: '加速度（像素/秒²）'
      }), _dec5 = property({
        group: 'Physics',
        tooltip: '减速时使用的缓动函数'
      }), _dec6 = property({
        group: 'Physics',
        tooltip: '减速到停止的总时长'
      }), _dec7 = property({
        group: 'Physics',
        tooltip: '回弹效果的缓动函数'
      }), _dec8 = property({
        group: 'Physics',
        tooltip: '回弹效果的时长'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MoneyComing_Wheel, _Component);
        function MoneyComing_Wheel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** 符号容器节点（包含所有符号元素的父节点） */
          _initializerDefineProperty(_this, "symbolContainer", _descriptor, _assertThisInitialized(_this));
          /** 单个符号的高度（用于计算滚动距离） */
          _initializerDefineProperty(_this, "symbolHeight", _descriptor2, _assertThisInitialized(_this));
          /** 滚轮类型：coin（金币滚轮）或 feature（功能滚轮） */
          _initializerDefineProperty(_this, "wheelType", _descriptor3, _assertThisInitialized(_this));
          /** 容器高度（用于计算显示区域） */
          _initializerDefineProperty(_this, "containerHeight", _descriptor4, _assertThisInitialized(_this));
          /** 元素间距（Layout SpacingY） */
          _initializerDefineProperty(_this, "elementSpacing", _descriptor5, _assertThisInitialized(_this));
          /** 资源包名称（用于加载 spine 动画） */
          _this.bundle = null;
          // --- 物理动画参数 ---
          _initializerDefineProperty(_this, "maxSpeed", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "acceleration", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "decelerationEasing", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "decelerationDuration", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bounceEasing", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bounceDuration", _descriptor11, _assertThisInitialized(_this));
          /** 是否正在滚动 */
          _this._isSpinning = false;
          /** 滚动完成回调 */
          _this._onSpinComplete = null;
          /** 目标元素名称 */
          _this._targetElementName = '';
          /** 符号总数 */
          _this._symbolCount = 0;
          /** 元素位置映射表（元素名称 -> 元素节点） */
          _this._elementMap = new Map();
          /** 原始符号数量 */
          _this._originalSymbolCount = 0;
          /** 当前可见元素列表（用于判断是否需要重建） */
          _this._currentVisibleElements = [];
          // --- 新的动画状态 ---
          _this._spinState = SpinState.IDLE;
          _this._currentSpeed = 0;
          _this._targetY = 0;
          _this._stopCallback = null;
          _this._loopHeight = 0;
          _this._startY = 0;
          /** 轮子是否被锁定（用于 respin 时锁定 feature 轮子） */
          _this._locked = false;
          /** Turbo 模式：0=normal, 1=turbo, 2=superTurbo */
          _this._turboMode = 0;
          /** 基础最大速度（未应用 turbo 倍速前） */
          _this._baseMaxSpeed = 4000;
          return _this;
        }
        var _proto = MoneyComing_Wheel.prototype;
        /**
         * 设置 turbo 模式
         * @param mode 0=normal, 1=turbo, 2=superTurbo
         */
        _proto.setTurboMode = function setTurboMode(mode) {
          this._turboMode = mode;
          // 根据 turbo 模式调整最大速度
          if (mode === 1) {
            // turbo 模式：速度提升到 1.5 倍
            this.maxSpeed = this._baseMaxSpeed * 1.5;
          } else if (mode === 2) {
            // superTurbo 模式：速度提升到 2.5 倍
            this.maxSpeed = this._baseMaxSpeed * 2.5;
          } else {
            // normal 模式：恢复基础速度
            this.maxSpeed = this._baseMaxSpeed;
          }
          console.log("[Wheel] setTurboMode: mode=" + mode + ", maxSpeed=" + this.maxSpeed);
        }

        /**
         * 锁定轮子，防止转动
         */;
        _proto.lock = function lock() {
          this._locked = true;
          this._isSpinning = false;
          this._spinState = SpinState.IDLE;
          console.log("[Wheel] \u8F6E\u5B50\u5DF2\u9501\u5B9A, wheelType=" + this.wheelType);
        }

        /**
         * 解锁轮子
         */;
        _proto.unlock = function unlock() {
          this._locked = false;
          console.log("[Wheel] \u8F6E\u5B50\u5DF2\u89E3\u9501, wheelType=" + this.wheelType);
        };
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          // 初始化符号容器
          if (!this.symbolContainer) {
            this.symbolContainer = this.node.getChildByName('symbol_container') || this.node;
          }
          if (this.symbolContainer) {
            var originalChildren = [].concat(this.symbolContainer.children);
            this._originalSymbolCount = originalChildren.length;

            // 保存原始节点的克隆副本到 _elementMap 作为模板
            this._elementMap.clear();
            originalChildren.forEach(function (child) {
              _this2._elementMap.set(child.name, instantiate(child));
            });
            if (this._originalSymbolCount > 1) {
              var cloneCount = Math.min(3, this._originalSymbolCount);
              for (var i = 0; i < cloneCount; i++) {
                var nodeToClone = originalChildren[this._originalSymbolCount - 1 - i];
                var clonedNode = instantiate(nodeToClone);
                this.symbolContainer.insertChild(clonedNode, 0);
              }
              for (var _i = 0; _i < cloneCount; _i++) {
                var _nodeToClone = originalChildren[_i];
                var _clonedNode = instantiate(_nodeToClone);
                this.symbolContainer.addChild(_clonedNode);
              }
            }
            var layout = this.symbolContainer.getComponent(Layout);
            if (layout) {
              layout.updateLayout();
              layout.enabled = false;
            }
            this._symbolCount = this.symbolContainer.children.length;
            // 预先计算循环高度
            if (this._originalSymbolCount > 0) {
              this._loopHeight = this.elementSpacing * (this._originalSymbolCount - 1) + this.symbolHeight;
            }
            // console.log(`[Wheel] 初始化完成，元素数量: ${this._symbolCount}, 原始元素数量: ${this._originalSymbolCount}, 模板数量: ${this._elementMap.size}`);
          }

          if (this.symbolHeight <= 0 && this.symbolContainer && this.symbolContainer.children.length > 0) {
            var firstChild = this.symbolContainer.children[0];
            var transform = firstChild.getComponent(UITransform);
            if (transform) {
              this.symbolHeight = transform.height;
            }
          }
          this.resetToInitialPosition();
        };
        _proto.resetToInitialPosition = function resetToInitialPosition() {
          if (!this.symbolContainer || this.symbolContainer.children.length === 0) {
            return;
          }
          var cloneCount = (this._symbolCount - this._originalSymbolCount) / 2;
          var firstOriginalElement = this.symbolContainer.children[cloneCount];
          if (!firstOriginalElement) {
            var firstElement = this.symbolContainer.children[0];
            var _firstElementY = firstElement.position.y;
            this.symbolContainer.position = new Vec3(this.symbolContainer.position.x, -_firstElementY, 0);
            // console.warn(`[Wheel] 无法找到第一个原始元素，已重置到第一个可用元素。`);
            return;
          }
          var firstElementY = firstOriginalElement.position.y;
          this._startY = -firstElementY;
          this.symbolContainer.position = new Vec3(this.symbolContainer.position.x, this._startY, 0);
        }
        /**
         * @description 开始无限滚动
         * @param onComplete 兼容旧代码的回调
         */;
        _proto.startSpin = function startSpin(targetElementName, duration, onComplete) {
          if (targetElementName === void 0) {
            targetElementName = '';
          }
          // 检查轮子是否被锁定（用于 respin 时锁定 feature 轮子）
          if (this._locked) {
            console.warn("[Wheel] \u8F6E\u5B50\u5DF2\u9501\u5B9A\uFF0C\u7981\u6B62\u8F6C\u52A8, wheelType=" + this.wheelType);
            return;
          }
          tween(this.symbolContainer).stop(); // 强制停止旧的 tween，防止冲突
          if (this._isSpinning) {
            return;
          }
          if (this._originalSymbolCount === 0) {
            // console.warn('[Wheel] 滚轮中没有元素，无法启动');
            if (onComplete) {
              onComplete('');
            }
            return;
          }
          // 修复：不要更新 _startY！它应该始终是 resetToInitialPosition() 设置的规范参考点
          // 不需要在这里归一化位置，因为 stop() 方法会确保停止位置在有效范围内
          // 如果强制归一化，反而会导致视觉跳跃（元素闪现）
          // update() 中的循环逻辑会自然处理边界情况
          this._isSpinning = true;
          this._spinState = SpinState.SPINNING;
          this._currentSpeed = this.maxSpeed; // 直接设置为最大速度，不要加速过程
          this._onSpinComplete = onComplete || null; // 保存旧的回调
          this._targetElementName = targetElementName; // 保存旧的目标
        }
        /**
         * @description 触发一个平滑的停止动画
         * @param targetElementName 目标元素
         * @param onComplete 停止完成回调
         */;
        _proto.stop = function stop(targetElementName, onComplete, fixedDuration) {
          console.log("[Wheel] stop called: targetElementName=\"" + targetElementName + "\", wheelType=" + this.wheelType + ", isSpinning=" + this._isSpinning + ", spinState=" + this._spinState);
          if (!this._isSpinning || this._spinState !== SpinState.SPINNING) {
            console.log("[Wheel] \u8F6E\u76D8\u672A\u5728\u6EDA\u52A8\uFF0C\u76F4\u63A5\u89E6\u53D1\u56DE\u8C03");
            if (onComplete) onComplete();
            return;
          }
          this._targetElementName = targetElementName;
          this._stopCallback = onComplete || null;
          var targetElement = null; // Declare targetElement here

          // 查找最佳目标元素
          var potentialTargets = [];
          var currentY = this.symbolContainer.position.y;

          // 有效的循环范围：(_startY - _loopHeight, _startY]
          // 为了避免停止位置太接近边界导致下次 spin 时闪现，留出安全距离
          // 安全距离设置为至少可以滚动 0.2 秒的距离（避免立即触发循环逻辑）
          var safetyBuffer = this.maxSpeed * 0.2; // 比如 4000 * 0.2 = 800 像素
          var minValidY = this._startY - this._loopHeight + safetyBuffer;
          var maxValidY = this._startY - safetyBuffer;
          for (var _iterator = _createForOfIteratorHelperLoose(this.symbolContainer.children), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            var baseName = child.name.replace(/-clone.*$/, '');
            if (baseName === targetElementName) {
              var targetY = -child.position.y;
              var distance = targetY - currentY;
              // 我们希望向下滚动，所以寻找正距离
              if (distance < 0) {
                // 如果目标在当前位置的上方，则通过增加一个循环高度来计算等效的下方位置
                distance += this._loopHeight;
              }
              potentialTargets.push({
                node: child,
                distance: distance,
                targetY: targetY
              });
            }
          }

          // 优先选择停止后位置在安全范围内的目标，避免下次 spin 时闪现
          if (potentialTargets.length > 0) {
            // 先筛选出停止位置在安全范围内的目标（远离边界）
            var safeTargets = potentialTargets.filter(function (t) {
              return t.targetY > minValidY && t.targetY < maxValidY;
            });
            if (safeTargets.length > 0) {
              // 如果有在安全范围内的目标，选择距离最近的
              safeTargets.sort(function (a, b) {
                return a.distance - b.distance;
              });
              targetElement = safeTargets[0].node;
              // console.log(`[Wheel] 选择安全范围内的目标: targetY=${safeTargets[0].targetY.toFixed(2)}, 安全范围: (${minValidY.toFixed(2)}, ${maxValidY.toFixed(2)})`);
            } else {
              // 如果没有在安全范围内的目标，选择距离最近的（可能会有轻微闪现，但总比不停要好）
              potentialTargets.sort(function (a, b) {
                return a.distance - b.distance;
              });
              targetElement = potentialTargets[0].node;
              // console.warn(`[Wheel] 警告：没有安全范围内的目标，选择最近的: targetY=${potentialTargets[0].targetY.toFixed(2)}`);
            }
          }

          // console.log(`[Wheel] stop: 从 symbolContainer.children 查找 "${targetElementName}": ${!!targetElement}`);

          if (targetElement) {
            this._targetY = -targetElement.position.y;
            // console.log(`[Wheel] stop: 找到最佳目标元素 "${targetElementName}" at y=${targetElement.position.y}`);
          } else {
            // 目标元素未找到，表示不中奖，停在两个元素之间
            var closestElement = this.getClosestElement();
            if (closestElement) {
              var elementY = closestElement.position.y;
              // 目标位置是让两个元素的缝隙对准中心
              this._targetY = -elementY + this.symbolHeight / 2 + this.elementSpacing / 2;
              // console.log(`[Wheel] stop: 目标元素 '${targetElementName}' 未找到，将停在元素之间, targetY=${this._targetY}`);
            } else {
              // Fallback, should not happen if there are elements
              this._targetY = this.symbolContainer.position.y;
              // console.warn(`[Wheel] stop: 无法找到任何元素，使用当前位置`);
            }
          }
          // 直接停止，不使用 tween 动画
          this._spinState = SpinState.IDLE;
          this.symbolContainer.position = new Vec3(this.symbolContainer.position.x, this._targetY, 0);

          // 立即调用完成回调
          this._onSpinFinished();
        };
        _proto.update = function update(dt) {
          if (this._spinState !== SpinState.SPINNING) {
            return;
          }
          // 加速到最大速度
          if (this._currentSpeed < this.maxSpeed) {
            this._currentSpeed += this.acceleration * dt;
            if (this._currentSpeed > this.maxSpeed) {
              this._currentSpeed = this.maxSpeed;
            }
          }
          // 根据速度更新位置
          var newY = this.symbolContainer.position.y - this._currentSpeed * dt;
          // 处理循环
          if (this._originalSymbolCount > 1 && this._loopHeight > 0) {
            var minY = this._startY - this._loopHeight;
            if (newY < minY) {
              newY += this._loopHeight;
            }
          }
          this.symbolContainer.position = new Vec3(this.symbolContainer.position.x, newY, 0);
        };
        _proto._onSpinFinished = function _onSpinFinished() {
          this._isSpinning = false;
          this._spinState = SpinState.IDLE;
          this.symbolContainer.position = new Vec3(this.symbolContainer.position.x, this._targetY, 0); // 确保精确位置

          console.log("[Wheel] _onSpinFinished: targetElementName=\"" + this._targetElementName + "\", wheelType=" + this.wheelType + ", finalY=" + this._targetY);

          // 检查实际居中的元素
          var displayedElement = this.getDisplayedElement();
          if (this._stopCallback) {
            console.log("[Wheel] \u89E6\u53D1 _stopCallback for wheelType=" + this.wheelType);
            this._stopCallback();
            this._stopCallback = null;
          } else {
            console.warn("[Wheel] \u8B66\u544A: _stopCallback \u4E3A null, wheelType=" + this.wheelType);
          }
          // 兼容旧代码
          if (this._onSpinComplete) {
            this._onSpinComplete(this._targetElementName);
            this._onSpinComplete = null;
          }
        }

        /**
         * 获取当前居中显示的元素节点
         */;
        _proto.getDisplayedElement = function getDisplayedElement() {
          if (this._targetElementName && this._targetElementName !== '') {
            return this.findDisplayedElement(this._targetElementName);
          }
          return null;
        }

        /**
         * 查找 symbolContainer 中当前显示的元素节点（基于名称匹配）
         */;
        _proto.findDisplayedElement = function findDisplayedElement(elementName) {
          if (!this.symbolContainer) {
            // console.warn(`[Wheel] symbolContainer 为空`);
            return null;
          }

          // console.log(`[Wheel] findDisplayedElement: 查找元素 "${elementName}", symbolContainer 子节点数: ${this.symbolContainer.children.length}`);

          // 先列出所有子节点
          var allChildren = [];
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.symbolContainer.children), _step2; !(_step2 = _iterator2()).done;) {
            var child = _step2.value;
            allChildren.push(child.name);
          }
          // console.log(`[Wheel] symbolContainer 所有子节点: [${allChildren.join(', ')}]`);

          var closestMatch = null;
          var minDistance = Infinity;

          // 在 symbolContainer 的子节点中查找匹配的元素
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.symbolContainer.children), _step3; !(_step3 = _iterator3()).done;) {
            var _child = _step3.value;
            var baseName = _child.name.replace(/-clone.*$/, '');
            if (baseName === elementName) {
              // 找到了匹配的元素，检查它是否在显示区域中心附近
              var elementY = _child.position.y;
              var containerY = this.symbolContainer.position.y;
              var distance = Math.abs(containerY + elementY);

              // console.log(`[Wheel] 找到匹配元素: ${child.name}, elementY=${elementY}, containerY=${containerY}, distance=${distance}`);

              // 记录距离最近的匹配元素
              if (distance < minDistance) {
                minDistance = distance;
                closestMatch = _child;
              }
            }
          }
          if (closestMatch) {
            // console.log(`[Wheel] 选择最近的元素: ${closestMatch.name}, distance=${minDistance}`);
            return closestMatch;
          }

          // console.warn(`[Wheel] 未找到名称为 "${elementName}" 的元素节点`);
          return null;
        }
        /**
         * @description 立即显示结果，用于Turbo模式
         * @param elementName 目标元素名称
         */;
        _proto.showResult = function showResult(elementName, playAnimation) {
          if (playAnimation === void 0) {
            playAnimation = true;
          }
          // 停止所有正在进行的动画和状态更新
          tween(this.symbolContainer).stop();
          this._isSpinning = false;
          this._spinState = SpinState.IDLE;
          this._currentSpeed = 0;
          var targetY = 0;
          var targetElement = null;

          // 修复：从 symbolContainer 的实际子节点中查找目标元素
          // _elementMap 存储的是模板节点，位置并不对应实际布局
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.symbolContainer.children), _step4; !(_step4 = _iterator4()).done;) {
            var child = _step4.value;
            var baseName = child.name.replace(/-clone.*$/, '');
            if (baseName === elementName) {
              targetElement = child;
              // 找到第一个匹配的即可。由于有克隆节点，可能存在多个，
              // 但对于直接设置结果来说，任意一个有效的都可以，
              // 通常第一个是在列表顶部的，或者我们可以优化为找最接近当前的（类似 stop 逻辑），
              // 但初始化时简单处理即可。
              break;
            }
          }
          console.log("[Wheel showResult] elementName=" + elementName + ", found=" + !!targetElement);
          if (targetElement) {
            // console.log(`[Wheel showResult] 找到 targetElement, position.y=${targetElement.position.y}`);
            targetY = -targetElement.position.y;
          } else {
            // 未中奖，停在两个元素之间
            var closestElement = this.getClosestElement();
            if (closestElement) {
              var elementY = closestElement.position.y;
              targetY = -elementY + this.symbolHeight / 2 + this.elementSpacing / 2;
            } else {
              targetY = this.symbolContainer.position.y; // Fallback
            }
          }
          // 立即设置位置
          this.symbolContainer.position = new Vec3(this.symbolContainer.position.x, targetY, 0);
          this._targetElementName = elementName;
          this._targetY = targetY;

          // Turbo 模式下也播放命中动画
          if (playAnimation && elementName && elementName !== '' && this.bundle) {
            var displayElement = this.findDisplayedElement(elementName);
            if (displayElement) {
              // console.log(`[Wheel] Turbo 模式播放动画 for ${elementName}`);
              var worldPos = displayElement.getWorldPosition();
              SymbolAnimator.playAnimationAt(this.node, worldPos, elementName, this.bundle);
            }
          }
        }
        /**
         * @description 检查是否正在滚动
         */;
        /**
         * @description 重置滚轮位置（显示第一个元素）
         */
        _proto.reset = function reset() {
          tween(this.symbolContainer).stop(); // 停止所有动画
          this._isSpinning = false;
          this._spinState = SpinState.IDLE;
          this.resetToInitialPosition();
        }
        /**
         * @description 获取当前显示的元素名称
         */;
        _proto.getCurrentElementName = function getCurrentElementName() {
          return this.getClosestElement().name;
        };
        _proto.getClosestElement = function getClosestElement() {
          var currentY = this.symbolContainer.position.y;
          var closestElement = null;
          var minDistance = Infinity;
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.symbolContainer.children), _step5; !(_step5 = _iterator5()).done;) {
            var child = _step5.value;
            var elementY = child.position.y;
            var distance = Math.abs(currentY + elementY);
            if (distance < minDistance) {
              minDistance = distance;
              closestElement = child;
            }
          }
          return closestElement;
        }

        /**
         * @description 设置可见元素（用于根据投注等级动态显示/隐藏元素）
         * @param visibleElements 应该显示的元素名称数组，传入空数组表示显示所有元素
         */;
        _proto.setVisibleElements = function setVisibleElements(visibleElements) {
          var _this3 = this;
          // console.log(`[Wheel setVisibleElements] 被调用. Wheel Type: ${this.wheelType}`);
          // console.log(`[Wheel setVisibleElements] 当前可见元素 (_currentVisibleElements): [${this._currentVisibleElements.join(', ')}]`);
          // console.log(`[Wheel setVisibleElements] 新的可见元素 (visibleElements): [${visibleElements.join(', ')}]`);

          if (!this.symbolContainer) {
            // console.warn('[Wheel] symbolContainer 未初始化');
            return;
          }

          // 如果 _elementMap 为空，说明还没初始化完成
          if (this._elementMap.size === 0) {
            // console.warn('[Wheel] _elementMap 为空，等待 onLoad 完成后再调用');
            return;
          }

          // 如果传入空数组，显示所有元素
          if (visibleElements.length === 0) {
            visibleElements = Array.from(this._elementMap.keys());
          }

          // 检查可见元素列表是否发生变化
          var isSameElements = this._currentVisibleElements.length === visibleElements.length && this._currentVisibleElements.every(function (elem, index) {
            return elem === visibleElements[index];
          });

          // console.log(`[Wheel setVisibleElements] 列表是否相同 (isSameElements): ${isSameElements}`);

          if (isSameElements) {
            // console.log('[Wheel] 可见元素列表未变化，跳过重建');
            return;
          }

          // 保存当前位置（尽量保留，即使处于 IDLE 状态）
          // 只有在正在旋转时才强制保留位置，IDLE 状态下也尽量保留以避免闪现重置
          var shouldPreservePosition = this._spinState !== SpinState.IDLE;
          var savedPosition = this.symbolContainer.position.clone();

          // 停止所有动画
          tween(this.symbolContainer).stop();
          this._isSpinning = false;
          this._spinState = SpinState.IDLE;

          // 暂时隐藏节点，避免重建过程中的视觉抖动
          var wasActive = this.symbolContainer.active;
          this.symbolContainer.active = false;

          // 清空 symbolContainer
          this.symbolContainer.removeAllChildren();

          // 根据 visibleElements 添加元素的克隆（不直接使用原始引用）
          visibleElements.forEach(function (elementName) {
            var element = _this3._elementMap.get(elementName);
            if (element) {
              var clonedElement = instantiate(element);
              _this3.symbolContainer.addChild(clonedElement);
            }
          });

          // 更新原始符号数量
          this._originalSymbolCount = this.symbolContainer.children.length;
          if (this._originalSymbolCount === 0) {
            // console.warn(`[Wheel] 设置可见元素后没有任何元素，visibleElements: [${visibleElements.join(', ')}]`);
            return;
          }

          // 重新克隆节点以实现无限滚动
          if (this._originalSymbolCount > 1) {
            var originalChildren = [].concat(this.symbolContainer.children);
            var cloneCount = Math.min(3, this._originalSymbolCount);

            // 在前面克隆最后几个元素
            for (var i = 0; i < cloneCount; i++) {
              var nodeToClone = originalChildren[this._originalSymbolCount - 1 - i];
              var clonedNode = instantiate(nodeToClone);
              this.symbolContainer.insertChild(clonedNode, 0);
            }

            // 在后面克隆前几个元素
            for (var _i2 = 0; _i2 < cloneCount; _i2++) {
              var _nodeToClone2 = originalChildren[_i2];
              var _clonedNode2 = instantiate(_nodeToClone2);
              this.symbolContainer.addChild(_clonedNode2);
            }
          }

          // 更新总符号数量
          this._symbolCount = this.symbolContainer.children.length;

          // 手动计算布局位置，避免 Layout 组件的延迟更新问题
          var layout = this.symbolContainer.getComponent(Layout);
          if (layout) {
            layout.enabled = false; // 完全禁用 Layout，防止自动更新
          }

          // 手动计算并设置子节点位置（垂直布局）
          this._manuallyLayoutChildren();

          // 立即执行位置重置（不需要延迟，因为已经手动布局）
          this._finalizePositionAfterRebuild(savedPosition, wasActive);

          // 重新计算循环高度
          if (this._originalSymbolCount > 0) {
            this._loopHeight = this.elementSpacing * (this._originalSymbolCount - 1) + this.symbolHeight;
          }

          // 保存当前可见元素列表
          this._currentVisibleElements = [].concat(visibleElements);

          // console.log(`[Wheel] 设置可见元素: [${visibleElements.join(', ')}]，总计 ${this._symbolCount} 个节点`);
        }

        /**
         * 手动计算并设置子节点位置（垂直布局）
         * 避免 Layout 组件的延迟更新问题
         */;
        _proto._manuallyLayoutChildren = function _manuallyLayoutChildren() {
          if (!this.symbolContainer || this.symbolContainer.children.length === 0) {
            return;
          }

          // 垂直布局：从上到下排列
          // 第一个元素在最上方（y 最大），后续元素依次向下
          var currentY = 0;
          for (var i = 0; i < this.symbolContainer.children.length; i++) {
            var child = this.symbolContainer.children[i];
            if (i === 0) {
              // 第一个元素的 y 坐标为 0（Layout 默认从 0 开始）
              currentY = 0;
            } else {
              // 后续元素向下偏移：symbolHeight + spacing
              currentY -= this.symbolHeight + this.elementSpacing;
            }

            // 设置子节点位置
            child.setPosition(0, currentY, 0);
          }

          // console.log(`[Wheel] 手动布局完成，共 ${this.symbolContainer.children.length} 个子节点`);
        }

        /**
         * 在重建元素后完成位置重置（确保布局已更新）
         */;
        _proto._finalizePositionAfterRebuild = function _finalizePositionAfterRebuild(savedPosition, wasActive) {
          if (wasActive === void 0) {
            wasActive = true;
          }
          // 尽量保留位置，避免闪现重置
          // 只有在确实需要重置时才重置（比如首次初始化）
          if (savedPosition && this._currentVisibleElements.length > 0) {
            // 如果之前有可见元素，说明不是首次初始化，尽量保留位置
            // 修复：必须重新计算规范的 _startY，而不是使用 savedPosition.y
            var cloneCount = (this._symbolCount - this._originalSymbolCount) / 2;
            var firstOriginalElement = this.symbolContainer.children[cloneCount];
            if (firstOriginalElement) {
              var firstElementY = firstOriginalElement.position.y;
              this._startY = -firstElementY; // 重新计算规范的 _startY
              // console.log(`[Wheel] 重建后重新计算 _startY = ${this._startY}`);

              // 修复 feature 轮抖动：在切换投注金额后直接重置到初始位置
              // 避免归一化导致的复杂性和潜在抖动问题
              // 延迟执行确保布局更新完成
              this.resetToInitialPosition();
              // console.log('[Wheel] 切换投注金额后重置到初始位置，确保不抖动');
            } else {
              this.resetToInitialPosition();
            }
          } else {
            // 首次初始化时才重置到初始位置
            this.resetToInitialPosition();
          }

          // 恢复节点显示（使用保存的激活状态）
          this.symbolContainer.active = wasActive;
        };
        _createClass(MoneyComing_Wheel, [{
          key: "isSpinning",
          get: function get() {
            return this._isSpinning;
          }
        }]);
        return MoneyComing_Wheel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "symbolContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "symbolHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 166;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wheelType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'coin';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "containerHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 316;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "elementSpacing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "maxSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4000;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "acceleration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3000;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "decelerationEasing", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'quadOut';
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "decelerationDuration", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bounceEasing", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'backOut';
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bounceDuration", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoneyComingAPI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './config20.ts', './symbolMapping.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, config, centsToYuan, REVERSE_BET_MAPPING, SYMBOL_MAPPING, BET_MAPPING;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      config = module.default;
    }, function (module) {
      centsToYuan = module.centsToYuan;
      REVERSE_BET_MAPPING = module.REVERSE_BET_MAPPING;
      SYMBOL_MAPPING = module.SYMBOL_MAPPING;
      BET_MAPPING = module.BET_MAPPING;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a1f018saABP3pyJIS9yzR1c", "MoneyComingAPI", undefined);

      /**
       * MoneyComing MCP API 适配器
       * 负责与 MCP Genius Game Server 通信，并转换数据格式
       */
      var MoneyComingAPI = exports('MoneyComingAPI', /*#__PURE__*/function () {
        function MoneyComingAPI(gameId) {
          if (gameId === void 0) {
            gameId = 14007;
          }
          this.gameId = void 0;
          this.apiBaseUrl = void 0;
          this.gameId = gameId;
          // 从全局配置获取 API 地址
          this.apiBaseUrl = window.HALL_GLOBAL && window.HALL_GLOBAL.config && window.HALL_GLOBAL.config.httpBaseUrl || '';
        }

        /**
         * 获取 fetcher 实例
         * 优先使用 HALL_GLOBAL.fetcher，如果不可用则抛出错误
         */
        var _proto = MoneyComingAPI.prototype;
        _proto.getFetcher = function getFetcher() {
          if (window.HALL_GLOBAL && window.HALL_GLOBAL.fetcher) {
            return window.HALL_GLOBAL.fetcher;
          }

          // 如果 fetcher 不可用，说明 hall 还没有初始化
          throw new Error('[MoneyComingAPI] Fetcher not available. Please ensure HALL_GLOBAL is initialized before using MoneyComingAPI.');
        }

        /**
         * 进入游戏（调用 slot/enter 接口）
         */;
        _proto.enter = /*#__PURE__*/
        function () {
          var _enter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var request, fetcher, response, responseData, data;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.log('[MoneyComingAPI] Calling slot/enter...');
                  request = {
                    gameId: this.gameId
                  };
                  _context.prev = 2;
                  fetcher = this.getFetcher();
                  _context.next = 6;
                  return fetcher.send('/api/genius-game-server/slot/enter', request, 'post', {}, {
                    isLoading: true,
                    dataVerify: 0 // DataVerify.OBJECT
                  });

                case 6:
                  response = _context.sent;
                  console.log('[MoneyComingAPI] Enter response:', response);

                  // 检查响应格式并提取 data
                  responseData = response.data ? response.data : response; // 转换数据格式
                  data = this.convertEnterData(responseData);
                  console.log('[MoneyComingAPI] Enter success:', data);
                  return _context.abrupt("return", data);
                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](2);
                  console.error('[MoneyComingAPI] Enter failed:', _context.t0);
                  throw _context.t0;
                case 18:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[2, 14]]);
          }));
          function enter() {
            return _enter.apply(this, arguments);
          }
          return enter;
        }()
        /**
         * 执行 Spin 动作（调用 slot/action 接口）
         * @param betAmount 投注金额（元）
         * @param debug 可选的调试参数
         */;

        _proto.spin = /*#__PURE__*/
        function () {
          var _spin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(betAmount, debug) {
            var betAmountInCents, request, fetcher, response, responseData, featureWinCents, data;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  console.log('[MoneyComingAPI] ========== 调用 SPIN 接口 ==========');
                  console.log('[MoneyComingAPI] 投注金额:', betAmount, '元');
                  // if (!respin) {
                  //   respin = true;
                  //   debug = {
                  //     clearState: true,
                  //     forceFeature: 'simpleWheel'
                  //   };
                  // }
                  if (debug) {
                    console.log('[MoneyComingAPI] Debug 参数:', debug);
                  }

                  // 转换投注金额：元 → 分
                  betAmountInCents = BET_MAPPING[betAmount];
                  if (betAmountInCents) {
                    _context2.next = 6;
                    break;
                  }
                  throw new Error("Invalid bet amount: " + betAmount + ". Valid options: " + Object.keys(BET_MAPPING).join(', '));
                case 6:
                  request = {
                    actionType: 'SPIN',
                    gameId: this.gameId,
                    payload: {
                      type: 'SPIN',
                      betAmount: betAmountInCents,
                      variantId: 'standard',
                      debug: debug ? {
                        clearState: debug.clearState !== undefined ? debug.clearState : false,
                        forceFeature: debug.forceFeature
                      } : undefined
                    }
                  };
                  _context2.prev = 7;
                  fetcher = this.getFetcher();
                  _context2.next = 11;
                  return fetcher.send('/api/genius-game-server/slot/action', request, 'post', {}, {
                    isLoading: false,
                    // Spin 不显示全局 loading
                    dataVerify: 0
                  });
                case 11:
                  response = _context2.sent;
                  console.log('[MoneyComingAPI] Spin response:', JSON.stringify(response));

                  // 检查响应格式并提取 data
                  responseData = response.data ? response.data : response; // 安全地打印响应结构
                  console.log('\n========== Spin 结果详情 ==========');
                  console.log('[MoneyComingAPI] 响应类型:', responseData.spinResult ? 'spinResult' : responseData.featureResult ? 'featureResult' : 'unknown');

                  // 安全地打印 spinResult
                  try {
                    if (responseData.spinResult && responseData.spinResult.reels) {
                      console.log('\n原始 Reels:', responseData.spinResult.reels);
                      console.log('符号映射:');
                      responseData.spinResult.reels.forEach(function (reel, index) {
                        var symbol = reel && reel.length > 0 ? reel.length === 1 ? reel[0] : reel[1] : null;
                        var mcpId = symbol && symbol.id ? symbol.id : 'undefined';
                        var mappedSymbol = SYMBOL_MAPPING[mcpId] || '未映射';
                        console.log("  Reel " + index + ": " + mcpId + " \u2192 " + mappedSymbol);
                      });
                      if (responseData.spinResult.winLines && responseData.spinResult.winLines.length > 0) {
                        console.log('中奖线:', responseData.spinResult.winLines.length, '条');
                      } else {
                        console.log('中奖线: 无');
                      }
                    }
                  } catch (e) {
                    console.error('[MoneyComingAPI] 打印 spinResult 时出错:', e);
                  }

                  // 安全地打印 featureResult
                  try {
                    if (responseData.featureResult) {
                      console.log('\nFeature 结果:');
                      console.log("  - \u7C7B\u578B: " + (responseData.featureResult.type || 'N/A'));
                      console.log("  - \u5B8C\u6210: " + !!responseData.featureResult.completed);
                      console.log("  - \u505C\u6B62\u4F4D\u7F6E: " + (responseData.featureResult.selectedIndex || 0));
                      featureWinCents = responseData.featureResult.winAmount || 0;
                      console.log("  - Feature \u4E2D\u5956: " + centsToYuan(featureWinCents) + " \u5143");
                    }
                  } catch (e) {
                    console.error('[MoneyComingAPI] 打印 featureResult 时出错:', e);
                  }

                  // 安全地打印金额信息
                  console.log('\n金额信息:');
                  console.log("  - totalWinAmount: " + centsToYuan(responseData.totalWinAmount || 0) + " \u5143");
                  console.log("  - balance: " + centsToYuan(responseData.balance || 0) + " \u5143");
                  console.log('=====================================\n');

                  // 转换数据格式
                  data = this.convertSpinData(responseData);
                  console.log('[MoneyComingAPI] Spin success:', data);
                  return _context2.abrupt("return", data);
                case 27:
                  _context2.prev = 27;
                  _context2.t0 = _context2["catch"](7);
                  console.error('[MoneyComingAPI] Spin failed:', _context2.t0);
                  throw _context2.t0;
                case 31:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[7, 27]]);
          }));
          function spin(_x, _x2) {
            return _spin.apply(this, arguments);
          }
          return spin;
        }()
        /**
         * 转换 Enter 响应数据
         */;

        _proto.convertEnterData = function convertEnterData(data) {
          console.log('[MoneyComingAPI] convertEnterData input:', data);

          // 转换余额：分 → 元
          var balance = centsToYuan(data.balance);
          console.log("[MoneyComingAPI] Balance: " + data.balance + " \u5206 \u2192 " + balance + " \u5143");

          // 转换投注选项：分 → 元
          var betOptions = data.betOptions.map(function (cents) {
            var yuan = REVERSE_BET_MAPPING[cents];
            if (yuan === undefined) {
              console.warn("[MoneyComingAPI] Unknown bet option: " + cents + " cents");
            }
            return yuan;
          }).filter(function (yuan) {
            return yuan !== undefined;
          });
          console.log('[MoneyComingAPI] Bet options:', data.betOptions, '→', betOptions);

          // 转换推荐投注：分 → 元
          var currentBet = REVERSE_BET_MAPPING[data.recommendedBetAmount];
          if (currentBet === undefined) {
            console.warn("[MoneyComingAPI] Unknown recommended bet: " + data.recommendedBetAmount + " cents, using default 10");
            currentBet = 10;
          }
          console.log("[MoneyComingAPI] Recommended bet: " + data.recommendedBetAmount + " \u5206 \u2192 " + currentBet + " \u5143");

          // 检测崩溃恢复场景
          var needsRecovery = false;
          var recoveryType = undefined;
          var firstSpinResults = undefined;
          var firstSpinWin = undefined;
          if (!data.roundCompleted && data.triggeredFeature && data.spinResult) {
            console.log('[MoneyComingAPI] ========== 检测到未完成的回合 ==========');
            console.log('[MoneyComingAPI] roundCompleted:', data.roundCompleted);
            console.log('[MoneyComingAPI] triggeredFeature:', data.triggeredFeature);
            if (data.triggeredFeature.type === 'freeSpin') {
              needsRecovery = true;
              recoveryType = 'freeSpin';
              currentBet = REVERSE_BET_MAPPING[data.betAmount];

              // 转换第一次 spin 的结果（传入 currentBet 用于动态调整符号）
              firstSpinResults = this.mapReelsToSpinResults(data.spinResult.reels, currentBet);
              firstSpinWin = centsToYuan(data.spinResult.winAmount);
              console.log('[MoneyComingAPI] 需要恢复 freeSpin (feature_all_respin)');
              console.log('[MoneyComingAPI] 第一次 spin 结果:', firstSpinResults);
              console.log('[MoneyComingAPI] 第一次 spin 中奖:', firstSpinWin, '元');
            } else if (data.triggeredFeature.type === 'simpleWheel') {
              needsRecovery = true;
              recoveryType = 'scatter';
              currentBet = REVERSE_BET_MAPPING[data.betAmount];

              // 转换第一次 spin 的结果（包含 scatter 符号，传入 currentBet 用于动态调整符号）
              firstSpinResults = this.mapReelsToSpinResults(data.spinResult.reels, currentBet);
              firstSpinWin = centsToYuan(data.spinResult.winAmount);
              console.log('[MoneyComingAPI] 需要恢复 scatter (feature_scatter → simpleWheel)');
              console.log('[MoneyComingAPI] 第一次 spin 结果:', firstSpinResults);
              console.log('[MoneyComingAPI] 第一次 spin 中奖:', firstSpinWin, '元');
            }
          }

          // 转换初始轮盘状态
          // 如果需要恢复，使用 firstSpinResults；否则生成初始空转轮（确保不中奖）
          var initialReels = needsRecovery && firstSpinResults ? firstSpinResults : this.generateIdleReels();
          console.log('[MoneyComingAPI] Initial reels:', initialReels);
          return {
            balance: balance,
            betOptions: betOptions,
            currentBet: currentBet,
            initialReels: initialReels,
            needsRecovery: needsRecovery,
            recoveryType: recoveryType,
            firstSpinResults: firstSpinResults,
            firstSpinWin: firstSpinWin
          };
        }

        /**
         * 转换 Spin 响应数据
         */;
        _proto.convertSpinData = function convertSpinData(data) {
          // 转换余额：分 → 元
          var balance = centsToYuan(data.balance);

          // 转换轮盘结果（如果有 spinResult）
          var spinResults = data.spinResult ? this.mapReelsToSpinResults(data.spinResult.reels) : [];

          // 转换中奖金额：分 → 元
          // 注意：data.winAmount 可能是增量，data.totalWinAmount 是本轮累计
          // 对于单次 spin，使用 totalWinAmount 作为本次中奖金额
          var winAmount = centsToYuan(data.totalWinAmount);
          var totalWinAmount = centsToYuan(data.totalWinAmount);

          // 转换 featureResult（如果有）
          var featureResult = data.featureResult ? {
            type: data.featureResult.type || 'unknown',
            completed: data.featureResult.completed || false,
            totalCount: data.featureResult.totalCount || 0,
            currentCount: data.featureResult.currentCount || 0,
            selectedIndex: data.featureResult.selectedIndex !== undefined ? data.featureResult.selectedIndex : 0,
            winAmount: centsToYuan(data.featureResult.winAmount || 0) // 分 → 元，默认0
          } : undefined;
          return {
            balance: balance,
            spinResults: spinResults,
            winAmount: winAmount,
            totalWinAmount: totalWinAmount,
            roundCompleted: data.roundCompleted,
            featureResult: featureResult
          };
        }

        /**
         * 生成初始转轮状态（确保没有中奖）
         *
         * 返回4个转轮的初始符号配置：
         * - wheel1, wheel2, wheel3: 使用0、00或空符号，避免形成连线
         * - wheel_feature: 空符号（不触发任何功能）
         */;
        _proto.generateIdleReels = function generateIdleReels() {
          return ['element_0',
          // wheel1: 0
          'element_00',
          // wheel2: 00
          '',
          // wheel3: 空（停在两个元素之间）
          '' // wheel_feature: 空（不触发任何功能）
          ];
        }

        /**
         * 映射 MCP reels 到 MoneyComing spinResults
         *
         * MCP reels 格式: 列×行（外层是列，内层是行）
         * MoneyComing spinResults: 一维数组，每个元素代表一个轮盘的符号
         * @param betAmount 投注金额（元），用于动态调整 scatter 符号名称
         */;
        _proto.mapReelsToSpinResults = function mapReelsToSpinResults(reels, betAmount) {
          return reels.map(function (reel, index) {
            // MoneyComing 每个轮盘只显示1个符号，所以取第一个元素
            // 如果返回多行，根据实际情况可能需要取中间行
            var symbol = reel.length === 1 ? reel[0] : reel[1];
            if (!symbol) {
              console.warn("[MoneyComingAPI] Reel " + index + " missing symbol, reel:", reel);
              return ''; // 没有符号时返回空字符串（停在两个元素之间）
            }

            // 映射符号 ID
            var mcpSymbolId = symbol.id;
            var moneyComingSymbol = SYMBOL_MAPPING[mcpSymbolId];

            // 动态调整 scatter 符号名称（根据 bet 金额）
            // E9801 原本映射为 'feature_scatter'（用于 bet 5, 10）
            // 但是当 bet >= 50 时，feature 轮子只有 'feature_scatter_50_100'，所以需要调整
            if (mcpSymbolId === 'E9801' && betAmount && betAmount >= 50) {
              console.log("[MoneyComingAPI] \u8C03\u6574 E9801 \u7B26\u53F7: bet=" + betAmount + "\u5143, 'feature_scatter' \u2192 'feature_scatter_50_100'");
              moneyComingSymbol = 'feature_scatter_50_100';
            }
            if (!moneyComingSymbol && mcpSymbolId !== 'E0001') {
              console.warn("[MoneyComingAPI] Unknown symbol: " + mcpSymbolId);
            }

            // E0001（空符号）映射为空字符串，表示停在两个元素之间（不显示任何符号）
            return moneyComingSymbol || '';
          });
        };
        return MoneyComingAPI;
      }());

      // 导出单例
      var MoneyComingAPI$1 = exports('default', new MoneyComingAPI(config.gameId));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/moneyComingScript", ['./MoneyComingStandalone.ts', './MoneyComing_StartUp.ts', './MoneyComingAPI.ts', './symbolMapping.ts', './types.ts', './BetSelection.ts', './LuckyWheelRotator.ts', './MoneyComing_GameMain.ts', './MoneyComing_LuckyWheel.ts', './MoneyComing_Respin.ts', './MoneyComing_Wheel.ts', './config20.ts', './index83.ts', './socketConnect20.ts', './index81.ts', './prefabDefine21.ts', './soundDefine21.ts', './game37.ts', './index80.ts', './index82.ts', './type19.ts', './AnimationUtils.ts', './SymbolAnimator.ts', './AnimationViewModel.ts', './GameMainViewModel2.ts', './LuckyWheelViewModel.ts', './RespinViewModel.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MoneyComingStandalone.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index83.ts', './StandAloneFetcher.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, startUp, StandAloneFetcher;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      startUp = module.startUp;
    }, function (module) {
      StandAloneFetcher = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "aaf01wTsydB14SNKO9+WU5e", "MoneyComingStandalone", undefined);
      var ccclass = _decorator.ccclass;
      var MoneyComingStandalone = exports('MoneyComingStandalone', (_dec = ccclass('MoneyComingStandalone'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MoneyComingStandalone, _Component);
        function MoneyComingStandalone() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = MoneyComingStandalone.prototype;
        _proto.start = function start() {
          // 1. Mock Window Global
          if (!window.HALL_GLOBAL) {
            console.log('[MoneyComingStandalone] Initializing HALL_GLOBAL for standalone mode...');

            // 使用 mock 配置中的 API 地址（与 mockData.ts 中的配置保持一致）
            var mockHttpBaseUrl = 'https://u3d-dev-web.kbtech.cc/dev';

            // 创建独立的 fetcher 实例（不依赖 hall store）
            var standAloneFetcher = new StandAloneFetcher(mockHttpBaseUrl);
            window.HALL_GLOBAL = {
              // hallDispatch 在 standalone 模式下只是 mock，不实际 dispatch
              // moneyComing 使用自己的 store (./store)
              hallDispatch: function hallDispatch(action) {
                return console.log('[Mock] Hall Dispatch:', action);
              },
              addToast: function addToast(content) {
                return console.log('[Mock] Toast:', content);
              },
              setLoading: function setLoading(show, flagId) {
                return console.log('[Mock] Loading:', show, flagId);
              },
              setSubGameRunState: function setSubGameRunState(state) {
                return console.log('[Mock] SubGameRunState:', state);
              },
              isAllowOpenSubGame: function isAllowOpenSubGame() {
                return true;
              },
              closeSubGame: function closeSubGame() {
                return console.log('[Mock] Close SubGame');
              },
              lang: {
                write: function write(_k, _v, _p) {
                  return "Mock String";
                }
              },
              getGameConfig: function getGameConfig(_id) {
                return {
                  md5: "DEV_VERSION"
                };
              },
              config: {
                httpBaseUrl: mockHttpBaseUrl
              },
              fetcher: standAloneFetcher,
              wsInstance: {
                // Mock socket instance if needed
              }
            }; // Cast to any to avoid implementing everything strictly for now

            console.log('[MoneyComingStandalone] HALL_GLOBAL initialized');
            console.log('[MoneyComingStandalone] StandAloneFetcher initialized with baseUrl:', mockHttpBaseUrl);

            // 3. Start Game
            console.log('[MoneyComingStandalone] Starting MoneyComing...');
            startUp(this.node);
          } else {
            // HALL_GLOBAL already exists, just start the game
            console.log('[MoneyComingStandalone] HALL_GLOBAL already exists, starting MoneyComing...');
            startUp(this.node);
          }
        };
        return MoneyComingStandalone;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/prefabDefine21.ts", ['cc', './SourceManage.ts'], function (exports) {
  var cclegacy, Prefab, loopFiles;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
    }, function (module) {
      loopFiles = module.loopFiles;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cdbe4QsFEVMwrlG434WG6Xp", "prefabDefine", undefined);
      var PrefabPathDefine = exports('PrefabPathDefine', /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefab_moneyComing_loading";
        PrefabPathDefine["GAME_MAIN"] = "prefabs/MoneyComingView";
        return PrefabPathDefine;
      }({})); // 控制面板按钮和标签
      // BALANCE_LABEL = "control_panel/controls/layout/balance/value",
      // BET_AMOUNT_LABEL = "control_panel/controls/layout/bet/value",
      // WIN_AMOUNT_LABEL = "control_panel/controls/layout/win/value",
      // SPIN_BTN = "control_panel/controls/layout/spin",
      // AUTO_BTN = "control_panel/controls/layout/auto",
      // FAST_BTN = "control_panel/controls/layout/turbo",
      // BET_BTN = "control_panel/controls/layout/bet/btn",
      // SETTING_BTN = "control_panel/controls/layout/setting",
      // // 返回按钮
      // GO_BACK_BTN = "back",
      // // 轮盘容器
      // WHEELS_CONTAINER = "wheelsContainer",
      // WHEEL1_NODE = "wheels_container/wheels_layout/wheel_frame/wheels/wheel1",
      // WHEEL2_NODE = "wheels_container/wheels_layout/wheel_frame/wheels/wheel2",
      // WHEEL3_NODE = "wheels_container/wheels_layout/wheel_frame/wheels/wheel3",
      // WHEEL_FEATURE_NODE = "wheels_container/wheels_layout/wheel_frame/wheels/wheel_feature",
      // // 下注选择
      // BET_SELECTION_NODE = "control_panel/controls/betSelection",
      // // 幸运轮盘
      // LUCKY_WHEELS = "lucky_wheel/wheels",
      // BET1_UNLOCK_NODE = "lucky_wheel/brand/board/text/bet1unlock",
      // BET5_UNLOCK_NODE = "lucky_wheel/brand/board/text/bet5unlock",
      // BET10_UNLOCK_NODE = "lucky_wheel/brand/board/text/bet10unlock",
      // BET50_UNLOCK_NODE = "lucky_wheel/brand/board/text/bet50unlock",
      // BRAND_TEXT_ANIM_NODE = "lucky_wheel/brand/board/text",
      // FEATURE_NODE = "lucky_wheel/brand/board/feature",
      // // 背景和特效
      // BG_SPRITE = "bg_sprite",
      // WIN_EFFECT = "win_effect",
      // WIN_BACK = "win_effect/win_back",
      // POINT = "win_effect/point",
      // WIN_FRONT = "win_effect/win_front",
      var prefabDefine = exports('default', function (bundlePkgName) {
        return loopFiles(bundlePkgName, Prefab, PrefabPathDefine);
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RespinViewModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewModel.ts', './index80.ts', './game37.ts', './index83.ts', './soundDefine21.ts', './config20.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, StoreInject, ViewModel, getStore, setRespin, moneyComing_Audio, SoundPathDefine, config;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      StoreInject = module.StoreInject;
      ViewModel = module.default;
    }, function (module) {
      getStore = module.getStore;
    }, function (module) {
      setRespin = module.setRespin;
    }, function (module) {
      moneyComing_Audio = module.moneyComing_Audio;
    }, function (module) {
      SoundPathDefine = module.SoundPathDefine;
    }, function (module) {
      config = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "f8dcdnlnTtEgYLs8Y177lIp", "RespinViewModel", undefined);
      var ccclass = _decorator.ccclass;
      var RespinViewModel = exports('RespinViewModel', (_dec = StoreInject(getStore()), _dec2 = ccclass('RespinViewModel'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_ViewModel) {
        _inheritsLoose(RespinViewModel, _ViewModel);
        function RespinViewModel() {
          var _this;
          _this = _ViewModel.call(this, 'MoneyComing_Respin') || this;
          _this.gameMainComp = null;
          return _this;
        }
        var _proto = RespinViewModel.prototype;
        _proto.begin = function begin() {};
        _proto.connect = function connect() {
          this.inject({}, function (state) {
            return {
              betAmount: state.betAmount
            };
          });
          return this;
        };
        _proto.setGameMain = function setGameMain(gameMain) {
          this.gameMainComp = gameMain;
        }

        /**
         * Handle the All Respin feature flow
         * @param initialResults Results of the initial spin
         * @param onComplete Callback when respin is complete, passing the new results
         * @param resultsGenerator Optional async function to generate respin results (for API integration)
         * @param isRecovery 是否为崩溃恢复模式（恢复模式下跳过某些动画）
         */;
        _proto.handleAllRespin = /*#__PURE__*/
        function () {
          var _handleAllRespin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(initialResults, onComplete, resultsGenerator, isRecovery) {
            var _this2 = this;
            var numberStr, coinCount, i, res, initialBaseWin, wheels, _coinCount, _i, featureResult, respinStartTime, respinResults, elapsedTime, turboMode, minScrollDuration, remainingTime, respinNumberStr, _i2, _res, respinWin, _wheels, featureWheel;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.log('[RespinViewModel] handleAllRespin started, isRecovery:', !!isRecovery);

                  // 设置 Respin 模式标志（防止 useProps 自动调用 stopSpin）
                  getStore().dispatch(setRespin(true));
                  console.log('[RespinViewModel] 已设置 isRespin=true');

                  // 1. Calculate Initial Win (Base Win)
                  // We need to parse the initial results to get the base win.
                  // Similar logic to GameMainViewModel.calculateWinAmount but without feature multiplier.
                  numberStr = '';
                  coinCount = this.comp.props.betAmount === 1 ? 2 : 3;
                  for (i = 0; i < coinCount; i++) {
                    res = initialResults[i];
                    if (res && res.startsWith('element_')) {
                      numberStr += res.replace('element_', '');
                    }
                  }
                  initialBaseWin = numberStr === '' || isNaN(parseInt(numberStr, 10)) ? 0 : parseInt(numberStr, 10); // 恢复模式下跳过符号动画（已经在第一次 spin 时播放过），但保留 Feature Panel
                  if (!isRecovery) {
                    // Show Feature Panel
                    if (this.gameMainComp) {
                      this.gameMainComp.showFeaturePanel(initialBaseWin, 'all_respin', this.comp.props.betAmount);
                      // Play Feature Sound
                      moneyComing_Audio.playOneShot(SoundPathDefine.activeFeature);
                    }

                    // Play All Respin Animation on Feature Wheel
                    if (this.gameMainComp) {
                      this.gameMainComp.playFeatureSymbolAnimation('feature_all_respin');
                    }

                    // Play All Respin Audio
                    moneyComing_Audio.playOneShot(SoundPathDefine.allRespin);
                    moneyComing_Audio.playOneShot(SoundPathDefine.allRespinScatter);
                  } else {
                    console.log('[RespinViewModel] 恢复模式：跳过符号动画，但显示 Feature Panel');
                    // 恢复模式下仍然需要显示 Feature Panel
                    if (this.gameMainComp) {
                      this.gameMainComp.showFeaturePanel(initialBaseWin, 'all_respin', this.comp.props.betAmount);
                    }
                  }

                  // 2. Play Fly Animation
                  console.log('[RespinViewModel] 准备播放飞行动画, this.comp 存在:', !!this.comp);
                  if (!this.comp) {
                    _context.next = 14;
                    break;
                  }
                  _context.next = 12;
                  return new Promise(function (resolve) {
                    var completed = false;
                    console.log('[RespinViewModel] 开始播放飞行动画');

                    // 设置超时保护（3秒后强制继续）
                    var timeout = setTimeout(function () {
                      if (!completed) {
                        console.warn('[RespinViewModel] ⚠️ 飞行动画超时，强制继续');
                        completed = true;
                        resolve();
                      }
                    }, 3000);

                    // 设置飞行动画完成回调
                    _this2.comp.events.onFlyComplete = function () {
                      if (!completed) {
                        console.log('[RespinViewModel] ✅ 飞行动画完成');
                        completed = true;
                        clearTimeout(timeout);
                        resolve();
                      }
                    };

                    // 播放飞行动画
                    console.log('[RespinViewModel] 调用 playFlyAnimation');
                    _this2.comp.playFlyAnimation(_this2.comp.props.betAmount);
                  });
                case 12:
                  _context.next = 17;
                  break;
                case 14:
                  console.error('[RespinViewModel] ⚠️ this.comp 不存在，跳过飞行动画，延迟 1.5 秒');
                  _context.next = 17;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 1500);
                  });
                case 17:
                  // 延迟 500ms 让飞行动画的视觉效果更明显，然后再启动 respin
                  console.log('[RespinViewModel] 飞行动画完成，延迟 500ms 后启动 respin');
                  _context.next = 20;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 500);
                  });
                case 20:
                  // 3. Start Respin (Spin Coin Wheels)
                  if (this.gameMainComp) {
                    // 在启动 respin 之前，锁定 feature 轮子（第4个）防止转动
                    console.log('[RespinViewModel] 准备启动 respin，锁定 feature 轮子，解锁前三个轮子');
                    wheels = this.gameMainComp.wheels;
                    if (wheels && wheels.length >= 4) {
                      // 解锁前三个轮子（准备转动）
                      _coinCount = this.comp.props.betAmount === 1 ? 2 : 3;
                      for (_i = 0; _i < _coinCount; _i++) {
                        if (wheels[_i]) {
                          wheels[_i].unlock();
                          console.log("[RespinViewModel] \u8F6E\u5B50 " + _i + " \u5DF2\u89E3\u9501");
                        }
                      }

                      // 锁定 feature 轮子（第4个）
                      featureResult = initialResults[3];
                      if (featureResult && wheels[3]) {
                        wheels[3].lock();
                        wheels[3]._isSpinning = false;
                        wheels[3]._spinState = 0;
                        wheels[3].showResult(featureResult, false);
                        console.log('[RespinViewModel] Feature 轮子已锁定并固定:', featureResult);
                      }
                    }

                    // Play Spin Sound
                    moneyComing_Audio.playOneShot(SoundPathDefine.spin);
                    this.gameMainComp.startRespin();
                  }

                  // 4. 记录 respin 启动时间
                  respinStartTime = Date.now(); // 5. Generate Respin Results (Mock or API)
                  if (!resultsGenerator) {
                    _context.next = 28;
                    break;
                  }
                  _context.next = 25;
                  return resultsGenerator();
                case 25:
                  _context.t0 = _context.sent;
                  _context.next = 29;
                  break;
                case 28:
                  _context.t0 = this.generateRespinResults(this.comp.props.betAmount);
                case 29:
                  respinResults = _context.t0;
                  // 计算已经转动的时间
                  elapsedTime = (Date.now() - respinStartTime) / 1000; // 转换为秒
                  // 根据 turbo 模式获取最小转动时长
                  turboMode = this.comp.props.turboMode;
                  minScrollDuration = config.gameConfig.simultaneousStop.normal.scrollDuration;
                  if (turboMode === 1) {
                    minScrollDuration = config.gameConfig.simultaneousStop.turbo.scrollDuration;
                  } else if (turboMode === 2) {
                    minScrollDuration = config.gameConfig.simultaneousStop.superTurbo.scrollDuration;
                  }

                  // 计算剩余需要等待的时间
                  remainingTime = Math.max(0, minScrollDuration - elapsedTime);
                  console.log("[RespinViewModel] Respin \u8F6C\u52A8\u65F6\u95F4\u63A7\u5236: \u5DF2\u8F6C\u52A8=" + elapsedTime.toFixed(2) + "\u79D2, \u6700\u5C0F\u65F6\u957F=" + minScrollDuration + "\u79D2, \u8FD8\u9700\u7B49\u5F85=" + remainingTime.toFixed(2) + "\u79D2");

                  // 等待到最小转动时长
                  _context.next = 38;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, remainingTime * 1000);
                  });
                case 38:
                  if (!this.gameMainComp) {
                    _context.next = 41;
                    break;
                  }
                  _context.next = 41;
                  return new Promise(function (resolve) {
                    _this2.gameMainComp.stopRespin(respinResults, resolve);
                  });
                case 41:
                  // 7. Calculate Final Win
                  // Calculate respin win
                  respinNumberStr = '';
                  for (_i2 = 0; _i2 < coinCount; _i2++) {
                    _res = respinResults[_i2];
                    if (_res && _res.startsWith('element_')) {
                      respinNumberStr += _res.replace('element_', '');
                    }
                  }
                  respinWin = respinNumberStr === '' || isNaN(parseInt(respinNumberStr, 10)) ? 0 : parseInt(respinNumberStr, 10); // Update Bonus on Panel
                  if (this.gameMainComp) {
                    this.gameMainComp.updateFeatureBonus(respinWin);
                  }

                  // Wait a bit to show the result
                  _context.next = 47;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 1000);
                  });
                case 47:
                  // Hide Feature Panel
                  if (this.gameMainComp) {
                    this.gameMainComp.hideFeaturePanel();
                  }
                  console.log('[RespinViewModel] handleAllRespin completed');

                  // 解锁 feature 轮子
                  if (this.gameMainComp) {
                    featureWheel = (_wheels = this.gameMainComp.wheels) == null ? void 0 : _wheels[3];
                    if (featureWheel) {
                      featureWheel.unlock();
                      console.log('[RespinViewModel] Feature 轮子已解锁');
                    }
                  }

                  // 清除 Respin 模式标志
                  getStore().dispatch(setRespin(false));
                  console.log('[RespinViewModel] 已清除 isRespin=false');
                  onComplete(respinResults);
                case 53:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function handleAllRespin(_x, _x2, _x3, _x4) {
            return _handleAllRespin.apply(this, arguments);
          }
          return handleAllRespin;
        }();
        _proto.generateRespinResults = function generateRespinResults(betAmount) {
          // Mock results: 3 random numbers + feature_all_respin (kept)
          // Valid elements: element_0, element_00, element_1, element_5, element_10
          var numbers = ['element_0', 'element_00', 'element_1', 'element_5', 'element_10'];
          var getRandom = function getRandom() {
            return numbers[Math.floor(Math.random() * numbers.length)];
          };
          var r1 = getRandom();
          var r2 = getRandom();
          var r3 = betAmount === 1 ? '' : getRandom(); // Bet 1 has empty 3rd reel

          return [r1, r2, r3, 'feature_all_respin'];
        };
        return RespinViewModel;
      }(ViewModel)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/socketConnect20.ts", ['cc', './MoneyComingAPI.ts'], function (exports) {
  var cclegacy, MoneyComingAPI;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MoneyComingAPI = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2f393RnampFrJaP9qGy4476", "socketConnect", undefined);
      var SKT_MAG_TYPE = exports('SKT_MAG_TYPE', /*#__PURE__*/function (SKT_MAG_TYPE) {
        SKT_MAG_TYPE["ENTER"] = "enter";
        SKT_MAG_TYPE["SPIN"] = "spin";
        SKT_MAG_TYPE["EXIT_GAME"] = "exit";
        return SKT_MAG_TYPE;
      }({}));

      /**
       * 模拟 WebSocketDriver 接口，但实际使用 HTTP API
       */
      var moneyComingWebSocketDriver = exports('moneyComingWebSocketDriver', null);
      var socketConnect = exports('default', function () {
        return new Promise(function (resolve, reject) {
          console.log('[MoneyComing] Initializing API connection...');

          // 创建一个适配器对象，模拟原有的 WebSocket 接口
          moneyComingWebSocketDriver = exports('moneyComingWebSocketDriver', {
            loginGame: function loginGame(msgType) {
              console.log('[MoneyComing] loginGame called (no-op for HTTP)');
              return {
                bindReceiveHandler: function bindReceiveHandler(callback) {
                  // HTTP 模式下，进入游戏逻辑在 index.ts 中调用 MoneyComingAPI.enter()
                  setTimeout(function () {
                    return callback({
                      data: {
                        success: true
                      }
                    });
                  }, 100);
                },
                bindTimeoutHandler: function bindTimeoutHandler(callback) {
                  return true;
                }
              };
            },
            logoutGame: function logoutGame(msgType) {
              console.log('[MoneyComing] logoutGame called (no-op for HTTP)');
            },
            filterData: function filterData(data, source) {
              return {
                data: data,
                error: undefined
              };
            },
            sktMsgListener: {
              add: function add(msgType, bundleName, callback) {
                console.log("[MoneyComing] sktMsgListener.add: " + msgType);
                // HTTP 模式下，监听器由 ViewModel 直接调用 API，这里不需要实际监听
              },

              remove: function remove(msgType, bundleName) {
                console.log("[MoneyComing] sktMsgListener.remove: " + msgType);
              }
            },
            // 暴露 API 实例
            api: MoneyComingAPI
          });
          resolve(moneyComingWebSocketDriver);
        });
      });
      var removeInstance = exports('removeInstance', function removeInstance() {
        console.log('[MoneyComing] Cleaning up API connection');
        moneyComingWebSocketDriver = exports('moneyComingWebSocketDriver', null);
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/soundDefine21.ts", ['cc', './SourceManage.ts'], function (exports) {
  var cclegacy, AudioClip, loopFiles;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      loopFiles = module.loopFiles;
    }],
    execute: function () {
      cclegacy._RF.push({}, "61a73HYA9FA5p8MDYZOD9uS", "soundDefine", undefined);
      var SoundPathDefine = exports('SoundPathDefine', /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["bg"] = "audio/music/bg";
        SoundPathDefine["luckyWheel"] = "audio/sound/lucky_wheel";
        SoundPathDefine["activeFeature"] = "audio/sound/active_feature";
        SoundPathDefine["wheelLock"] = "audio/sound/wheel_lock";
        SoundPathDefine["spinOver"] = "audio/sound/spin_over";
        SoundPathDefine["feature"] = "audio/sound/feature";
        SoundPathDefine["allRespin"] = "audio/sound/all_respin";
        SoundPathDefine["number"] = "audio/sound/number";
        SoundPathDefine["bigWin"] = "audio/sound/big_win";
        SoundPathDefine["scatterOver"] = "audio/sound/scatter_over";
        SoundPathDefine["allRespinScatter"] = "audio/sound/all_respin_scatter";
        SoundPathDefine["spin"] = "audio/sound/spin";
        return SoundPathDefine;
      }({}));
      var soundDefine = exports('default', function (bundlePkgName) {
        return loopFiles(bundlePkgName, AudioClip, SoundPathDefine);
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SymbolAnimator.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, assetManager, sp, Node, UITransform, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
      sp = module.sp;
      Node = module.Node;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "02413jRgrVEg7SfoDiim3WK", "SymbolAnimator", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * @description 符号动画播放器
       * 负责在滚轮命中时播放 spine 动画效果
       */
      var SymbolAnimator = exports('SymbolAnimator', (_dec = ccclass('SymbolAnimator'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SymbolAnimator, _Component);
        function SymbolAnimator() {
          return _Component.apply(this, arguments) || this;
        }
        /**
         * 在指定位置播放一个独立的Spine动画，动画播放完毕后自动销毁。
         * @param parentNode 动画节点的父节点
         * @param worldPosition 动画要显示在的世界坐标
         * @param elementName 元素名称，用于查找对应的Spine资源
         * @param bundleName 资源包名称
         * @param loop 是否循环
         * @param timeScale 动画播放速率
         */
        SymbolAnimator.playAnimationAt = function playAnimationAt(parentNode, worldPosition, elementName, bundleName, loop, timeScale) {
          if (loop === void 0) {
            loop = false;
          }
          if (timeScale === void 0) {
            timeScale = 1.0;
          }
          console.log("[SymbolAnimator] playAnimationAt for " + elementName);
          var spinePath = this.SPINE_PATH_MAP.get(elementName);
          if (!spinePath) {
            console.warn("[SymbolAnimator] \u5143\u7D20 " + elementName + " \u6CA1\u6709\u5BF9\u5E94\u7684 spine \u52A8\u753B");
            return;
          }
          var bundle = assetManager.getBundle(bundleName);
          if (!bundle) {
            console.error("[SymbolAnimator] \u65E0\u6CD5\u83B7\u53D6 bundle: " + bundleName);
            return;
          }
          bundle.load(spinePath, sp.SkeletonData, function (err, skeletonData) {
            if (err || !parentNode || !parentNode.isValid) {
              console.error("[SymbolAnimator] \u52A0\u8F7D spine \u8D44\u6E90\u5931\u8D25\u6216\u7236\u8282\u70B9\u5DF2\u9500\u6BC1: " + spinePath, err);
              return;
            }
            var spineNode = new Node("spine_anim_" + elementName + "_" + Date.now());
            parentNode.addChild(spineNode);
            // spineNode.setScale(1, 2);

            // 将世界坐标转换为父节点的本地坐标
            var localPos = parentNode.getComponent(UITransform).convertToNodeSpaceAR(worldPosition);
            spineNode.setPosition(localPos);
            spineNode.layer = parentNode.layer;
            var skeleton = spineNode.addComponent(sp.Skeleton);
            skeleton.skeletonData = skeletonData;
            skeleton.premultipliedAlpha = true;
            skeleton.timeScale = timeScale;
            var animationName = 'animation';
            if (skeleton.findAnimation(animationName)) {
              skeleton.setAnimation(0, animationName, loop);
              if (!loop) {
                skeleton.setCompleteListener(function () {
                  if (spineNode && spineNode.isValid) {
                    spineNode.destroy();
                  }
                });
              }
            } else {
              console.warn("[SymbolAnimator] spine \u8D44\u6E90 " + spinePath + " \u4E2D\u672A\u627E\u5230\u540D\u4E3A 'animation' \u7684\u52A8\u753B");
              spineNode.destroy();
            }
          });
        }

        /**
         * 停止并移除所有由 SymbolAnimator 创建的动画节点
         * @param parentNode 动画节点所在的父节点
         */;
        SymbolAnimator.stopAllAnimations = function stopAllAnimations(parentNode) {
          if (!parentNode || !parentNode.isValid) return;
          var children = [].concat(parentNode.children);
          for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            if (child.name.startsWith('spine_anim_')) {
              child.destroy();
            }
          }
          // console.log(`[SymbolAnimator] 停止并销毁了 ${parentNode.name} 下的所有符号动画节点`);
        };

        return SymbolAnimator;
      }(Component), _class2.SPINE_PATH_MAP = new Map([['element_0', 'spine/symbol/symbol_0'], ['element_00', 'spine/symbol/symbol_00'], ['element_1', 'spine/symbol/symbol_1'], ['element_5', 'spine/symbol/symbol_5'], ['element_10', 'spine/symbol/symbol_10'], ['feature_x2', 'spine/symbol/symbol_2x'], ['feature_x5', 'spine/symbol/symbol_5x'], ['feature_x10', 'spine/symbol/symbol_10x'], ['feature_all_respin', 'spine/symbol/symbol_all'], ['feature_scatter', 'spine/symbol/symbol_scatter'], ['feature_scatter_50_100', 'spine/symbol/symbol_scatter_red']]), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/symbolMapping.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "28b265MVj5MD6qXJXLldXVR", "symbolMapping", undefined);
      /**
       * MCP 符号 ID 映射到 MoneyComing 符号名称
       *
       * 符号类型格式: E + XX + YY
       *   E 01 01
       *   │  │  └── YY: 序号 (01-99)
       *   │  └───── XX: 类别码 (00=BLANK, 01=NORMAL, 96=MULTIPLIER, 97=BONUS, 98=SCATTER, 99=WILD)
       *   └──────── E: 固定前缀 (Element/Symbol)
       */
      var SYMBOL_MAPPING = exports('SYMBOL_MAPPING', {
        // ===== 普通转轴符号 (Reel 0-2) =====
        // NORMAL 类别 (01)
        'E0101': 'element_10',
        // 10
        'E0102': 'element_00',
        // 00
        'E0103': 'element_5',
        // 5
        'E0104': 'element_1',
        // 1
        'E0105': 'element_0',
        // 0

        // 额外符号（根据 MCP 实际返回数据）
        'E0106': 'element_10',
        // 可能是重复的10或其他数字，待确认
        'E0107': 'element_5',
        // 可能是重复的5或其他数字，待确认
        'E0108': 'element_1',
        // 可能是重复的1或其他数字，待确认
        'E0109': 'element_0',
        // 可能是重复的0或其他数字，待确认

        // BLANK 类别 (00)
        'E0001': '',
        // 空符号（Feature 轮没有 feature 时，停在两个元素之间）

        // ===== 特殊转轴符号 (Reel 3) =====
        // MULTIPLIER 类别 (96) - 倍数符号
        'E9601': 'feature_x10',
        // 10x WIN
        'E9602': 'feature_x5',
        // 5x WIN
        'E9603': 'feature_x2',
        // 2x WIN

        // SCATTER 类别 (98) - 散布符号
        'E9801': 'feature_scatter',
        // 绿色SCATTER (bet 5, 10)
        'E9802': 'feature_scatter_50_100',
        // 红色SCATTER (bet 50, 100)
        'E9803': 'feature_all_respin',
        // ALL RESPIN

        // WILD 类别 (99)
        'E9901': '',
        // Wild 符号（MoneyComing 可能不使用，或需要特殊处理）

        // 空符号（空字符串键用于 fallback）
        '': ''
      });

      /**
       * 反向映射：MoneyComing → MCP
       */
      var REVERSE_SYMBOL_MAPPING = exports('REVERSE_SYMBOL_MAPPING', function () {
        var reversed = {};
        for (var key in SYMBOL_MAPPING) {
          if (SYMBOL_MAPPING.hasOwnProperty(key)) {
            var value = SYMBOL_MAPPING[key];
            if (value) {
              // 跳过空字符串
              reversed[value] = key;
            }
          }
        }
        return reversed;
      }());

      /**
       * 投注金额映射（元 → 分）
       */
      var BET_MAPPING = exports('BET_MAPPING', {
        1: 100,
        // 1元 = 100分
        5: 500,
        10: 1000,
        50: 5000,
        100: 10000
      });

      /**
       * 反向映射（分 → 元）
       */
      var REVERSE_BET_MAPPING = exports('REVERSE_BET_MAPPING', function () {
        var reversed = {};
        for (var key in BET_MAPPING) {
          if (BET_MAPPING.hasOwnProperty(key)) {
            var yuan = Number(key);
            var cents = BET_MAPPING[yuan];
            reversed[cents] = yuan;
          }
        }
        return reversed;
      }());

      /**
       * 金额转换工具函数
       */
      var yuanToCents = exports('yuanToCents', function yuanToCents(yuan) {
        return Math.round(yuan * 100);
      });
      var centsToYuan = exports('centsToYuan', function centsToYuan(cents) {
        return cents / 100;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/type19.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4902aWhmWpM944EXJQ2Mzp8", "type", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/types.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d5779ubg4RBMYykHUp3t/R9", "types", undefined);
      /**
       * MCP Slot Enter 请求
       */
      /**
       * MCP Slot Enter 响应
       */
      /**
       * MCP Slot Action 请求
       */
      /**
       * MCP Slot Action 响应
       */
      /**
       * MoneyComing 游戏进入响应（内部格式）
       */
      /**
       * MoneyComing Spin 响应（内部格式）
       */
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/moneyComingScript', 'chunks:///_virtual/moneyComingScript'); 
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