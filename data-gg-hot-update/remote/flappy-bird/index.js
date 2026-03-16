System.register("chunks:///_virtual/api.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      exports({
        fetchHighScore: fetchHighScore,
        uploadScore: uploadScore
      });
      cclegacy._RF.push({}, "0f20ctUgalNy53Vl9nK3lIn", "api", undefined);
      const HIGH_SCORE_KEY = 'FLAPPY_BIRD_HIGH_SCORE';

      // 上传分数
      async function uploadScore(score) {
        const highScore = await fetchHighScore();
        if (score > highScore) {
          sys.localStorage.setItem(HIGH_SCORE_KEY, score.toString());
        }
        return {
          success: true,
          value: score
        };
      }

      // 获取最高分
      async function fetchHighScore() {
        const highScore = sys.localStorage.getItem(HIGH_SCORE_KEY);
        return highScore ? parseInt(highScore) : 0;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioMgr.ts", ['cc'], function (exports) {
  var cclegacy, Node, director, AudioSource, AudioClip, resources;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      director = module.director;
      AudioSource = module.AudioSource;
      AudioClip = module.AudioClip;
      resources = module.resources;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7f62d0eH2VKKq+WRTPYwu0l", "AudioMgr", undefined);
      /**
       * 子游戏音频管理单例
       *
       * 节点挂在当前场景下，场景切换时自动销毁。
       * getter 会检查节点是否有效，失效时自动重建。
       */
      class AudioMgr {
        static get inst() {
          var _this$_inst$_audioSou;
          if (this._inst == null || !((_this$_inst$_audioSou = this._inst._audioSource) != null && (_this$_inst$_audioSou = _this$_inst$_audioSou.node) != null && _this$_inst$_audioSou.isValid)) {
            this._inst = new AudioMgr();
          }
          return this._inst;
        }
        constructor() {
          this._audioSource = void 0;
          let audioMgr = new Node();
          audioMgr.name = '__audioMgr__';
          director.getScene().addChild(audioMgr);
          // 不标记 persistent，场景切换时自动销毁
          this._audioSource = audioMgr.addComponent(AudioSource);
        }
        get audioSource() {
          return this._audioSource;
        }
        playOneShot(sound, volume = 1.0) {
          if (sound instanceof AudioClip) {
            this._audioSource.playOneShot(sound, volume);
          } else {
            resources.load(sound, (err, clip) => {
              if (err) {
                console.log(err);
              } else {
                this._audioSource.playOneShot(clip, volume);
              }
            });
          }
        }
        play(sound, volume = 1.0) {
          if (sound instanceof AudioClip) {
            this._audioSource.stop();
            this._audioSource.clip = sound;
            this._audioSource.loop = true;
            this._audioSource.play();
            this.audioSource.volume = volume;
          } else {
            resources.load(sound, (err, clip) => {
              if (err) {
                console.log(err);
              } else {
                this._audioSource.stop();
                this._audioSource.clip = clip;
                this._audioSource.loop = true;
                this._audioSource.play();
                this.audioSource.volume = volume;
              }
            });
          }
        }
        stop() {
          this._audioSource.stop();
        }
        pause() {
          this._audioSource.pause();
        }
        resume() {
          this._audioSource.play();
        }
      }
      exports('AudioMgr', AudioMgr);
      AudioMgr._inst = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Bird.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Tags.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, AudioClip, _decorator, Component, RigidBody2D, input, Input, Collider2D, Contact2DType, KeyCode, Vec2, Animation, director, Tags, AudioMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
      _decorator = module._decorator;
      Component = module.Component;
      RigidBody2D = module.RigidBody2D;
      input = module.input;
      Input = module.Input;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      KeyCode = module.KeyCode;
      Vec2 = module.Vec2;
      Animation = module.Animation;
      director = module.director;
    }, function (module) {
      Tags = module.Tags;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "8b22dKf+zZFgaFLZ8HPBspP", "Bird", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let Bird = exports('Bird', (_dec = ccclass('Bird'), _dec2 = property(AudioClip), _dec(_class = (_class2 = class Bird extends Component {
        constructor(...args) {
          super(...args);
          this._canControl = false;
          this._rgd2D = void 0;
          _initializerDefineProperty(this, "rotateSpeed", _descriptor, this);
          _initializerDefineProperty(this, "clickAudio", _descriptor2, this);
        }
        onLoad() {
          this._rgd2D = this.getComponent(RigidBody2D);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);

          // 注册单个碰撞体的回调函数
          let collider = this.getComponent(Collider2D);
          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        }
        onDestroy() {
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          let collider = this.getComponent(Collider2D);
          if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.off(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        }
        onKeyDown(event) {
          // console.log("onKeyDown");
          // console.log(event.keyCode);
          // console.log(KeyCode.SPACE);
          if (event.keyCode === KeyCode.SPACE) {
            this.onTouchStart();
          }
        }
        onTouchStart() {
          // console.log("onTouchStart");
          if (this._canControl == false) return;
          this._rgd2D.linearVelocity = new Vec2(0, 10);
          // this.node.setRotationFromEuler(new Vec3(0,0,30));
          this.node.angle = 30;
          AudioMgr.inst.playOneShot(this.clickAudio);
        }
        update(dt) {
          if (this._canControl == false) return;
          this.node.angle -= this.rotateSpeed * dt;
          if (this.node.angle < -60) {
            this.node.angle = -60;
          }
        }
        enableControl() {
          this.getComponent(Animation).enabled = true;
          this._rgd2D.enabled = true;
          this._canControl = true;
        }
        disableControl() {
          this.getComponent(Animation).enabled = false;
          this._rgd2D.enabled = false;
          this._canControl = false;
        }
        disableControlNotRGD() {
          this.getComponent(Animation).enabled = false;
          this._canControl = false;
        }
        async onBeginContact(selfCollider, otherCollider, contact) {
          // console.log(otherCollider.tag);
          if (otherCollider.tag === Tags.LAND || otherCollider.tag === Tags.PIPE) {
            director.emit('game-over');
          }
        }
        onEndContact(selfCollider, otherCollider, contact) {
          if (otherCollider.tag === Tags.PIPE_MIDDLE) {
            director.emit('add-score');
          }
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 30;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/flappy-bird", ['./api.ts', './request.ts', './AudioMgr.ts', './Bird.ts', './GameData.ts', './GameMgr.ts', './MoveBg.ts', './Pipe.ts', './PipeSpawner.ts', './Tags.ts', './GameOverUI.ts', './GameReadyUI.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/GameData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0cb28La+wlM/pZr6Alv4FsY", "GameData", undefined);
      class GameData {
        static getScore() {
          return this._score;
        }
        static addScore(value = 1) {
          this._score += value;
        }
        static resetScore() {
          this._score = 0;
        }
        static async getBestScore() {
          // const res = await fetchHighScore();
          // console.log('res', res);
          // const buf = await res.arrayBuffer();
          // const highScoreMsg = Proto.FlappyBird.Message.FetchHighScoreResponse.decode(new Uint8Array(buf));
          // console.log('fetch high score', highScoreMsg);
          // return highScoreMsg.value || 0;
          return localStorage.getItem(this.BEST_SCORE_KEY) ? parseInt(localStorage.getItem(this.BEST_SCORE_KEY)) : 0;
        }
        static async saveScore() {
          const bestScore = await this.getBestScore();
          console.log('bestScore', bestScore);
          if (this._score > bestScore) {
            this._bestScore = this._score;
            localStorage.setItem(this.BEST_SCORE_KEY, this._bestScore.toString());
            // const res = await uploadScore(this._bestScore);
            // console.log('res', res);
            // const buf = await res.arrayBuffer();
            // const scoreMsg = Proto.FlappyBird.Message.SaveScoreResponse.decode(new Uint8Array(buf));
            // console.log('scoreMsg', scoreMsg);
            // await uploadScoreProto(this._bestScore);
          }

          this._score = 0;
        }
      }
      exports('GameData', GameData);
      GameData._score = 0;
      GameData._bestScore = 0;
      GameData.BEST_SCORE_KEY = 'bestScore1';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Bird.ts', './MoveBg.ts', './PipeSpawner.ts', './GameReadyUI.ts', './GameData.ts', './GameOverUI.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, Label, AudioClip, _decorator, Component, director, Bird, MoveBg, PipeSpawner, GameReadyUI, GameData, GameOverUI, AudioMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Label = module.Label;
      AudioClip = module.AudioClip;
      _decorator = module._decorator;
      Component = module.Component;
      director = module.director;
    }, function (module) {
      Bird = module.Bird;
    }, function (module) {
      MoveBg = module.MoveBg;
    }, function (module) {
      PipeSpawner = module.PipeSpawner;
    }, function (module) {
      GameReadyUI = module.GameReadyUI;
    }, function (module) {
      GameData = module.GameData;
    }, function (module) {
      GameOverUI = module.GameOverUI;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3;
      cclegacy._RF.push({}, "afa31+7uPJCtJUpd+odaUKK", "GameMgr", undefined);
      // import { default as Proto } from '../proto/proto.js';

      const {
        ccclass,
        property
      } = _decorator;
      // console.log('score proto', Proto);

      // const score = new Proto.FlappyBird.Message.Score();
      // score.value = 100;
      // console.log('score', score);

      // const buf1 = Proto.FlappyBird.Message.GameLoginRequest.encode({
      //     name: 'test',
      //     password: '123456'
      // }).finish();
      // console.log('buf', buf1);
      // const buf2 = Proto.FlappyBird.Message.GameLoginResponse.encode({
      //     name: 'test',
      //     score: 100
      // }).finish();
      // // 接收 bytes 后反序列化
      // const recvMsg = Proto.FlappyBird.Message.GameLoginResponse.decode(buf2);
      // console.log(recvMsg);
      var GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["Ready"] = 0] = "Ready";
        GameState[GameState["Gaming"] = 1] = "Gaming";
        GameState[GameState["GameOver"] = 2] = "GameOver";
        return GameState;
      }(GameState || {});
      let GameMgr = exports('GameMgr', (_dec = ccclass('GameMgr'), _dec2 = property(Bird), _dec3 = property(MoveBg), _dec4 = property(MoveBg), _dec5 = property(PipeSpawner), _dec6 = property(GameReadyUI), _dec7 = property(GameOverUI), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(AudioClip), _dec11 = property(AudioClip), _dec(_class = (_class2 = (_class3 = class GameMgr extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "moveSpeed", _descriptor, this);
          _initializerDefineProperty(this, "bird", _descriptor2, this);
          _initializerDefineProperty(this, "bgMoving", _descriptor3, this);
          _initializerDefineProperty(this, "landMoving", _descriptor4, this);
          _initializerDefineProperty(this, "pipeSpawner", _descriptor5, this);
          _initializerDefineProperty(this, "gameReadyUI", _descriptor6, this);
          _initializerDefineProperty(this, "gameOverUI", _descriptor7, this);
          _initializerDefineProperty(this, "gamingUI", _descriptor8, this);
          _initializerDefineProperty(this, "scoreLabel", _descriptor9, this);
          _initializerDefineProperty(this, "bgAudio", _descriptor10, this);
          _initializerDefineProperty(this, "gameOverAudio", _descriptor11, this);
          this.curGS = GameState.Ready;
        }
        static inst() {
          return this._inst;
        }
        onLoad() {
          GameMgr._inst = this;
        }
        start() {
          console.log("GameMgr start");
          this.transitionToReadyState();
          AudioMgr.inst.play(this.bgAudio, 0.3);
          director.on('game-over', this.transitionToGameOverState, this);
          director.on('add-score', this.addScore, this);
        }
        onDestroy() {
          director.off('game-over', this.transitionToGameOverState, this);
          director.off('add-score', this.addScore, this);
        }
        transitionToReadyState() {
          this.curGS = GameState.Ready;
          this.bird.disableControl();
          this.bgMoving.disableMoving();
          this.landMoving.disableMoving();
          this.pipeSpawner.pause();
          this.gamingUI.active = false;
          this.gameOverUI.hide();
          this.gameReadyUI.node.active = true;
        }
        transitionToGamingState() {
          this.curGS = GameState.Gaming;
          this.bird.enableControl();
          this.bgMoving.enableMoving();
          this.landMoving.enableMoving();
          this.pipeSpawner.resume();
          this.gameReadyUI.node.active = false;
          this.gamingUI.active = true;
        }
        async transitionToGameOverState() {
          if (this.curGS == GameState.GameOver) return;
          this.curGS = GameState.GameOver;
          this.bird.disableControlNotRGD();
          this.bgMoving.disableMoving();
          this.landMoving.disableMoving();
          this.pipeSpawner.pause();
          this.gamingUI.active = false;
          this.gameOverUI.show(GameData.getScore(), await GameData.getBestScore());
          GameData.saveScore();
          AudioMgr.inst.stop();
          AudioMgr.inst.playOneShot(this.gameOverAudio);
        }
        addScore(value = 1) {
          GameData.addScore(value);
          this.scoreLabel.string = GameData.getScore().toString();
        }
      }, _class3._inst = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bird", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgMoving", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "landMoving", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pipeSpawner", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gameReadyUI", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gameOverUI", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gamingUI", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bgAudio", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "gameOverAudio", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameOverUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, Node, _decorator, Component, find, director, assetManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      find = module.find;
      director = module.director;
      assetManager = module.assetManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "ba24aYrzlxHqaQDrHcISV/a", "GameOverUI", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let GameOverUI = exports('GameOverUI', (_dec = ccclass('GameOverUI'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property([Node]), _dec(_class = (_class2 = class GameOverUI extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "currentScoreLabel", _descriptor, this);
          _initializerDefineProperty(this, "bestScoreLabel", _descriptor2, this);
          _initializerDefineProperty(this, "newSprite", _descriptor3, this);
          _initializerDefineProperty(this, "medalArray", _descriptor4, this);
          this._isClosing = false;
        }
        onLoad() {
          const closeBtn = find('CloseButton', this.node);
          if (closeBtn) {
            closeBtn.on(Node.EventType.TOUCH_END, this.onClose, this);
          }
        }
        show(score, bestScore) {
          this.node.active = true;
          this.currentScoreLabel.string = score.toString();
          this.bestScoreLabel.string = bestScore.toString();
          if (score > bestScore) {
            this.newSprite.active = true;
          } else {
            this.newSprite.active = false;
          }
          const index = Math.floor(score / 10) || 0;
          if (index >= 3) {
            this.medalArray[3].active = true;
          } else {
            this.medalArray[index].active = true;
          }
        }
        hide() {
          this.node.active = false;
        }
        onClose() {
          if (this._isClosing) return;
          this._isClosing = true;
          console.log('[GameOverUI] 退出到大厅');
          director.resume();

          // 通过 SceneRouter 回到大厅（音频节点不再是 persistent，场景切换时自动销毁）
          const router = globalThis.sceneRouter;
          const scenes = globalThis.GameSceneConfig;
          if (router && scenes) {
            router.runSceneAsync(scenes.Lobby).catch(err => {
              console.error('[GameOverUI] 切换到大厅失败:', err);
              this._isClosing = false;
            });
          } else {
            // 降级：编辑器预览模式下 SceneRouter 不可用
            console.warn('[GameOverUI] SceneRouter 不可用，尝试 director.loadScene');
            director.loadScene('Lobby', err => {
              if (err) {
                console.error('[GameOverUI] 加载 Lobby 失败:', err);
                this._isClosing = false;
              }
            });
          }
        }
        onRestart() {
          if (this._isClosing) return;
          const sceneName = "FlappyBird";
          const router = globalThis.sceneRouter;
          const scenes = globalThis.GameSceneConfig;
          if (router && scenes) {
            router.runSceneAsync(scenes.FlappyBird);
            return;
          }
          // 降级：编辑器预览
          let bundle = assetManager.getBundle('flappy-bird');
          if (bundle) {
            bundle.loadScene(sceneName, (err, sceneAsset) => {
              if (!err) {
                director.runScene(sceneAsset);
              } else {
                console.error(`[GameOverUI] 重新加载场景 ${sceneName} 失败:`, err);
              }
            });
          } else {
            const currentScene = director.getScene();
            if (currentScene) {
              const sceneUuid = currentScene.uuid;
              assetManager.loadAny({
                uuid: sceneUuid
              }, (err, sceneAsset) => {
                if (!err) {
                  director.runScene(sceneAsset);
                } else {
                  console.error(`[GameOverUI] 编辑器预览重新加载失败:`, err);
                }
              });
            }
          }
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentScoreLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bestScoreLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "newSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "medalArray", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameReadyUI.ts", ['cc', './GameMgr.ts'], function (exports) {
  var cclegacy, Component, input, Input, _decorator, GameMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      input = module.input;
      Input = module.Input;
      _decorator = module._decorator;
    }, function (module) {
      GameMgr = module.GameMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "141937z2MdKSL+l61Uygnev", "GameReadyUI", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let GameReadyUI = exports('GameReadyUI', (_dec = ccclass('GameReadyUI'), _dec(_class = class GameReadyUI extends Component {
        onLoad() {
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        }
        onDestroy() {
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        }
        onTouchStart(event) {
          // console.log("onTouchStart");
          GameMgr.inst().transitionToGamingState();
        }
      }) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoveBg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, GameMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      GameMgr = module.GameMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "f702csC2r9DZYmuugOoEZCB", "MoveBg", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let MoveBg = exports('MoveBg', (_dec = ccclass('MoveBg'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class MoveBg extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "target1ToMove", _descriptor, this);
          _initializerDefineProperty(this, "target2ToMove", _descriptor2, this);
          this._canMoving = false;
          this.speed = 100;
        }
        start() {
          this.speed = GameMgr.inst().moveSpeed;
        }
        update(deltaTime) {
          if (this._canMoving == false) return;
          const moveDistance = this.speed * deltaTime;
          const p1 = this.target1ToMove.position;
          const p2 = this.target2ToMove.position;
          this.target1ToMove.setPosition(p1.x - moveDistance, p1.y);
          this.target2ToMove.setPosition(p2.x - moveDistance, p2.y);
          if (p1.x < -730) {
            this.target1ToMove.setPosition(p2.x + 728, p1.y);
          }
          if (p2.x < -730) {
            this.target2ToMove.setPosition(p1.x + 728, p2.y);
          }
        }
        enableMoving() {
          this._canMoving = true;
        }
        disableMoving() {
          this._canMoving = false;
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target1ToMove", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "target2ToMove", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Pipe.ts", ['cc', './GameMgr.ts'], function (exports) {
  var cclegacy, Component, _decorator, GameMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }, function (module) {
      GameMgr = module.GameMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e6e8fIXEmxAtKkkY0narW9A", "Pipe", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let Pipe = exports('Pipe', (_dec = ccclass('Pipe'), _dec(_class = class Pipe extends Component {
        constructor(...args) {
          super(...args);
          this.moveSpeed = 100;
        }
        start() {
          this.moveSpeed = GameMgr.inst().moveSpeed;
        }
        update(deltaTime) {
          const p = this.node.position;
          this.node.setPosition(p.x - this.moveSpeed * deltaTime, p.y);
          if (p.x < -900) {
            this.node.destroy();
          }
        }
      }) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PipeSpawner.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Pipe.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Prefab, _decorator, Component, instantiate, math, Pipe;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      _decorator = module._decorator;
      Component = module.Component;
      instantiate = module.instantiate;
      math = module.math;
    }, function (module) {
      Pipe = module.Pipe;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "05a33ziEFBBQL5xCpk1i8hw", "PipeSpawner", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let PipeSpawner = exports('PipeSpawner', (_dec = ccclass('PipeSpawner'), _dec2 = property(Prefab), _dec(_class = (_class2 = class PipeSpawner extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "pipePrefab", _descriptor, this);
          _initializerDefineProperty(this, "spawnRate", _descriptor2, this);
          this.timer = 0;
          this._isSpawning = false;
        }
        update(deltaTime) {
          if (this._isSpawning == false) return;
          this.timer += deltaTime;
          if (this.timer > this.spawnRate) {
            this.timer = 0;
            const pipeInst = instantiate(this.pipePrefab);
            this.node.addChild(pipeInst);
            const p = this.node.getWorldPosition();
            pipeInst.setWorldPosition(p);
            const y = math.randomRangeInt(-100, 200);
            const pLoca = pipeInst.getPosition();
            pipeInst.setPosition(pLoca.x, y);
          }
        }
        pause() {
          this._isSpawning = false;
          this.node.children.forEach(child => {
            child.getComponent(Pipe).enabled = false;
          });
        }
        resume() {
          this._isSpawning = true;
          this.node.children.forEach(child => {
            child.getComponent(Pipe).enabled = true;
          });
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pipePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spawnRate", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/request.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('default', request);
      cclegacy._RF.push({}, "836a0XgB9pPm7/vBrlOAvd4", "request", undefined); // import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
      // // 创建 axios 实例
      // const http = axios.create({
      //     baseURL: 'http://localhost:3000/api', // 替换为你的服务器地址
      //     timeout: 5000,
      //     headers: {
      //         'Content-Type': 'application/json',
      //     },
      // });
      // // 请求拦截器
      // http.interceptors.request.use(
      //     (config: InternalAxiosRequestConfig) => {
      //         // 例如：自动携带 token
      //         // const token = localStorage.getItem('token');
      //         // if (token) config.headers['Authorization'] = `Bearer ${token}`;
      //         // 也可以在这里加 loading
      //         console.log(config);
      //         return config;
      //     },
      //     (error) => {
      //         // 请求错误处理
      //         console.error('请求错误:', error);
      //         return Promise.reject(error);
      //     }
      // );
      // // 响应拦截器
      // http.interceptors.response.use(
      //     (response: AxiosResponse) => {
      //         console.log(response);
      //         // 统一处理响应数据
      //         return response;
      //     },
      //     (error) => {
      //         // 统一错误处理
      //         if (error.response) {
      //             // 服务器返回了错误码
      //             console.error('响应错误:', error.response.status, error.response.data);
      //         } else if (error.request) {
      //             // 请求已发出但无响应
      //             console.error('无响应:', error.request);
      //         } else {
      //             // 其它错误
      //             console.error('请求设置错误:', error.message);
      //         }
      //         // 可以在这里做全局提示
      //         return Promise.reject(error);
      //     }
      // );
      const BASE_URL = 'http://localhost:3000/api';
      function request(url, options = {}) {
        const isBinary = options.headers && (options.headers['Content-Type'] === 'application/octet-stream' || options.headers['Accept'] === 'application/octet-stream');
        return fetch(BASE_URL + url, {
          method: options.method || 'GET',
          headers: {
            ...(options.headers || {})
          },
          body: options.body
        }).then(async res => {
          if (!res.ok) throw new Error(await res.text());
          if (isBinary) {
            return res.arrayBuffer();
          }
          return res.json();
        });
      }
      request.get = (url, options = {}) => {
        return request(url, {
          ...options,
          method: 'GET'
        });
      };
      request.post = (url, options = {}) => {
        return request(url, {
          ...options,
          method: 'POST'
        });
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Tags.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f60b54dEUFKy6FnFXRqKv2J", "Tags", undefined);
      class Tags {}
      exports('Tags', Tags);
      Tags.LAND = 10;
      Tags.PIPE = 20;
      Tags.PIPE_MIDDLE = 30;
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/flappy-bird', 'chunks:///_virtual/flappy-bird'); 
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