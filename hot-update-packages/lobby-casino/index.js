System.register("chunks:///_virtual/ButtonClickSoundCmp.ts", ['cc'], function (exports) {
  var cclegacy, Component, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "cc6deeMfAxJQIksfrVTJL+U", "ButtonClickSoundCmp", undefined);
      const {
        ccclass
      } = _decorator;
      let ButtonClickSoundCmp = exports('ButtonClickSoundCmp', (_dec = ccclass('ButtonClickSoundCmp'), _dec(_class = class ButtonClickSoundCmp extends Component {
        onLoad() {
          this.node.on('click', () => {
            if (typeof MEvent !== 'undefined') {
              MEvent.emit('EVENT_BTN_CLICK_SOUNDS');
            }
          }, this);
        }
      }) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CarouselCpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CarouselItemCpt.ts', './CarouselIndicatorCpt.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, CCFloat, _decorator, Component, Node, tween, Vec3, CarouselItemCpt, CarouselIndicatorCpt;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      CCFloat = module.CCFloat;
      _decorator = module._decorator;
      Component = module.Component;
      Node = module.Node;
      tween = module.tween;
      Vec3 = module.Vec3;
    }, function (module) {
      CarouselItemCpt = module.CarouselItemCpt;
    }, function (module) {
      CarouselIndicatorCpt = module.CarouselIndicatorCpt;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "bf054514l5L/b5BMwAsAHpd", "CarouselCpt", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      /**
       * 广告轮播组件
       *
       * 重构自旧版 CarouselCpt.ts（CC 2.x → CC 3.8.8）
       * 管理广告图片轮播，支持自动切换和触摸滑动
       */
      let CarouselCpt = exports('CarouselCpt', (_dec = ccclass('CarouselCpt'), _dec2 = property({
        type: CCFloat
      }), _dec3 = property(CarouselIndicatorCpt), _dec(_class = (_class2 = class CarouselCpt extends Component {
        constructor(...args) {
          super(...args);
          this.showItemList = [];
          this.indexItem = null;
          this.nextItem = null;
          this._isTouch = false;
          _initializerDefineProperty(this, "time", _descriptor, this);
          _initializerDefineProperty(this, "indicatorCpt", _descriptor2, this);
          this._curIdx = 0;
        }
        set curIdx(idx) {
          this._curIdx = idx;
          if (this.indicatorCpt) this.indicatorCpt.showPage(idx);
        }
        get curIdx() {
          return this._curIdx;
        }
        onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          this.schedule(this.onToNext, this.time);
        }
        start() {
          this.updateView();
        }
        onEnable() {
          this._isTouch = false;
        }
        onTouchStart() {
          this._isTouch = true;
        }
        onTouchEnd() {
          this._isTouch = false;
        }
        updateView() {
          this.showItemList = [];
          for (const itemCpt of this.getComponentsInChildren(CarouselItemCpt)) {
            itemCpt.carouselCpt = this;
            if (itemCpt.isOpen) {
              itemCpt.node.active = true;
              this.showItemList.push(itemCpt);
            } else {
              itemCpt.node.active = false;
            }
          }
          this.showItemList.sort((a, b) => a.ord - b.ord);
          if (this.indicatorCpt) {
            this.indicatorCpt.celaen();
            this.indicatorCpt.initPage(this.showItemList.length);
          }
          this.indexItem = this.showItemList[0] || null;
          this.nextItem = this.showItemList[1] || null;
          const nodeW = this.node.getComponent('cc.UITransform') ? this.node.getComponent('cc.UITransform').contentSize.width : 970;
          for (let i = 0; i < this.showItemList.length; i++) {
            const itemCpt = this.showItemList[i];
            itemCpt.node.setPosition(i === 0 ? 0 : nodeW, itemCpt.node.position.y, 0);
          }
          this.curIdx = 0;
        }
        onToNext() {
          var _this$nextItem$node, _this$indexItem$node, _this$node$getCompone;
          if (this._isTouch) return;
          if (!this.nextItem || !this.indexItem) return;
          if (!((_this$nextItem$node = this.nextItem.node) != null && _this$nextItem$node.isValid) || !((_this$indexItem$node = this.indexItem.node) != null && _this$indexItem$node.isValid)) return;
          const nodeW = ((_this$node$getCompone = this.node.getComponent('cc.UITransform')) == null ? void 0 : _this$node$getCompone.contentSize.width) ?? 970;
          const cur = this.indexItem;
          const next = this.nextItem;
          cur.node.setPosition(0, cur.node.position.y, 0);
          next.node.setPosition(nodeW, next.node.position.y, 0);
          tween(cur.node).to(0.4, {
            position: new Vec3(-nodeW, cur.node.position.y, 0)
          }).start();
          tween(next.node).to(0.4, {
            position: new Vec3(0, next.node.position.y, 0)
          }).call(() => {
            this.curIdx = this.showItemList.indexOf(next);
            this.indexItem = next;
            const t = this.showItemList.indexOf(next) + 1;
            this.nextItem = this.showItemList[t] || this.showItemList[0];
          }).start();
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "time", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "indicatorCpt", [_dec3], {
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

System.register("chunks:///_virtual/CarouselIndicatorCpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, instantiate, find;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      instantiate = module.instantiate;
      find = module.find;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "39f04cq+l9IeqJVHlldgico", "CarouselIndicatorCpt", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      /**
       * 广告轮播指示器组件
       *
       * 重构自旧版 CarouselIndicatorCpt.ts（CC 2.x → CC 3.8.8）
       * 管理底部小圆点指示器
       */
      let CarouselIndicatorCpt = exports('CarouselIndicatorCpt', (_dec = ccclass('CarouselIndicatorCpt'), _dec2 = property(Node), _dec(_class = (_class2 = class CarouselIndicatorCpt extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "item", _descriptor, this);
          this.itemList = [];
        }
        initPage(cnt) {
          for (let i = 0; i < cnt; i++) {
            if (this.itemList[i]) {
              this.itemList[i].active = true;
            } else if (this.item) {
              const node = instantiate(this.item);
              node.setParent(this.node);
              node.active = true;
              this.itemList.push(node);
            }
          }
        }
        celaen() {
          for (const child of this.node.children) {
            child.active = false;
          }
        }
        showPage(pageIdx) {
          this.node.active = this.itemList.length >= 2;
          this.itemList.forEach((node, idx) => {
            const selectNode = find('select', node);
            if (selectNode) selectNode.active = idx === pageIdx;
          });
        }
      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CarouselItemCpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Component, _decorator;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "b3432lWMctNJLD1zVfn/aOc", "CarouselItemCpt", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      // 前向声明（避免循环引用）
      class CarouselCpt extends Component {
        updateView() {}
      }
      exports('CarouselCpt', CarouselCpt);

      /**
       * 广告轮播项
       *
       * 重构自旧版 CarouselItemCpt.ts（CC 2.x → CC 3.8.8）
       */
      let CarouselItemCpt = exports('CarouselItemCpt', (_dec = ccclass('CarouselItemCpt'), _dec(_class = (_class2 = class CarouselItemCpt extends Component {
        constructor(...args) {
          super(...args);
          this.carouselCpt = null;
          _initializerDefineProperty(this, "reportKey", _descriptor, this);
          this._isOpen = true;
          this.ord = 0;
        }
        get isOpen() {
          return this._isOpen;
        }
        set isOpen(value) {
          this._isOpen = value;
          if (this.carouselCpt) this.carouselCpt.updateView();
        }
      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "reportKey", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FloatMenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, find, screen, Vec3, tween, UITransform, Color;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      find = module.find;
      screen = module.screen;
      Vec3 = module.Vec3;
      tween = module.tween;
      UITransform = module.UITransform;
      Color = module.Color;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "96718z7BbxEZpKljYeCtoTT", "FloatMenu", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * 浮动菜单组件
       *
       * 重构自旧版 HallFloatMenuCpt.ts（CC 2.x → CC 3.8.8）
       * 右侧可展开/收起的快捷菜单，支持拖拽移动
       * 按钮：充值/首存、排行、下载、公告、VIP、投注记录
       */
      let FloatMenu = exports('FloatMenu', (_dec = ccclass('FloatMenu'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class FloatMenu extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "btnsNode", _descriptor, this);
          _initializerDefineProperty(this, "arrowOnNode", _descriptor2, this);
          _initializerDefineProperty(this, "arrowOffNode", _descriptor3, this);
          this._isShow = false;
          this._isTouching = false;
        }
        onLoad() {
          this._isShow = false;
          this.runAnim(false);
          this.showArrowDir();
          this.registerButtonEvents();
          this.registerGlobalEvents();
          // 检查首存图标
          this.checkFirstDepositIcon();
        }
        registerButtonEvents() {
          const btnsNode = this.btnsNode || find('btns_node', this.node);
          if (!btnsNode) return;

          // 箭头按钮
          const btnArrow = find('btn_arrow', btnsNode);
          if (btnArrow) {
            btnArrow.on(Node.EventType.TOUCH_END, this.onClickMenu, this);
            btnArrow.on(Node.EventType.TOUCH_MOVE, this._onTouchArrowMove, this);
            btnArrow.on(Node.EventType.TOUCH_END, this._onTouchArrowEnd, this);
            btnArrow.on(Node.EventType.TOUCH_CANCEL, this._onTouchArrowEnd, this);
          }

          // 充值/首存按钮
          const btnFrst = find('float_node/layout/btn_frst', btnsNode);
          if (btnFrst) btnFrst.on(Node.EventType.TOUCH_END, this.onClickDeposit, this);

          // 排行榜按钮
          const btnRank = find('float_node/layout/btn_rank', btnsNode);
          if (btnRank) btnRank.on(Node.EventType.TOUCH_END, this.onClickRank, this);

          // 下载按钮
          const btnDown = find('float_node/layout/btn_down', btnsNode);
          if (btnDown) btnDown.on(Node.EventType.TOUCH_END, this.onClickDownload, this);

          // 公告按钮
          const btnNotice = find('float_node/layout/btn_notice', btnsNode);
          if (btnNotice) btnNotice.on(Node.EventType.TOUCH_END, this.onClickNotice, this);

          // VIP 按钮
          const btnVip = find('float_node/layout/btn_vip', btnsNode);
          if (btnVip) btnVip.on(Node.EventType.TOUCH_END, this.onClickVip, this);

          // 投注记录按钮
          const btnRecord = find('float_node/layout/btn_record', btnsNode);
          if (btnRecord) btnRecord.on(Node.EventType.TOUCH_END, this.onClickRecord, this);
        }
        registerGlobalEvents() {
          if (typeof MEvent === 'undefined') return;
          MEvent.on('EVENT_STATUS_FLOATMENU', this.onEventStatusMenu, this);
        }

        /** 检查首存图标是否显示 */
        async checkFirstDepositIcon() {
          const btnsNode = this.btnsNode || find('btns_node', this.node);
          const btnFrst = btnsNode ? find('float_node/layout/btn_frst', btnsNode) : null;
          if (!btnFrst) return;
          btnFrst.active = false;
          try {
            if (typeof MUser !== 'undefined' && typeof MUser.fetchShop === 'function') {
              const shopData = await MUser.fetchShop();
              if (shopData != null && shopData.firstDepositItemList) {
                btnFrst.active = true;
              }
            }
          } catch (e) {
            console.warn('[FloatMenu] checkFirstDepositIcon error:', e);
          }
        }

        // ============ 菜单切换 ============

        /** 点击箭头切换菜单展开/收起 */
        onClickMenu() {
          if (this._isTouching) return;
          this._isShow = !this._isShow;
          this.showArrowDir();
          this.runAnim(true);
          this.playToggleSound();
        }

        /** 点击遮罩关闭菜单 */
        onClickMask() {
          this._isShow = false;
          this.showArrowDir();
          this.runAnim(true);
        }

        /** 外部事件控制菜单状态（EVENT_STATUS_FLOATMENU） */
        onEventStatusMenu(val) {
          const shouldShow = val > 0;
          if (shouldShow !== this._isShow) {
            this._isShow = shouldShow;
            this.showArrowDir();
            this.runAnim(true);
          }
        }
        showArrowDir() {
          const btnsNode = this.btnsNode || find('btns_node', this.node);
          if (!btnsNode) {
            if (this.arrowOnNode) this.arrowOnNode.active = !this._isShow;
            if (this.arrowOffNode) this.arrowOffNode.active = this._isShow;
            return;
          }
          const on = find('btn_arrow/on', btnsNode);
          const off = find('btn_arrow/off', btnsNode);
          if (on) on.active = !this._isShow;
          if (off) off.active = this._isShow;
        }
        runAnim(animated) {
          const target = this.btnsNode || find('btns_node', this.node);
          if (!target) return;

          // 停止当前动画
          target.getComponent('cc.Tween');
          const layout = find('float_node/layout', target);
          const activeCount = layout ? layout.children.filter(c => c.active).length : 0;
          const offsetX = activeCount < 7 ? -20 : -200;
          const winW = screen.windowSize.width;
          const targetX = this._isShow ? winW / 2 + offsetX : winW / 2 + 200;
          const pos = new Vec3(targetX, target.position.y, 0);
          if (animated) {
            tween(target).to(0.3, {
              position: pos
            }, {
              easing: this._isShow ? 'quadOut' : 'quadIn'
            }).start();
          } else {
            target.setPosition(pos);
          }
        }

        // ============ 拖拽 ============

        _onTouchArrowMove(event) {
          var _layout$getComponent;
          const target = this.btnsNode || find('btns_node', this.node);
          if (!target) return;
          this._isTouching = true;
          this._setTouchColor(true);
          const loc = event.getUILocation();
          const layout = find('float_node/layout', target);
          const layoutH = layout ? ((_layout$getComponent = layout.getComponent(UITransform)) == null ? void 0 : _layout$getComponent.contentSize.height) ?? 0 : 0;
          const winH = screen.windowSize.height;
          let y = loc.y;
          if (y + layoutH / 2 > winH - 220) y = winH - 220 - layoutH / 2;
          if (y - layoutH / 2 < 220) y = 220 + layoutH / 2;
          const parent = target.parent;
          if (!parent) return;
          const parentUIT = parent.getComponent(UITransform);
          if (!parentUIT) return;
          const localPos = parentUIT.convertToNodeSpaceAR(new Vec3(loc.x, y, 0));
          target.setPosition(new Vec3(target.position.x, localPos.y, 0));
        }
        _onTouchArrowEnd() {
          this._isTouching = false;
          this._setTouchColor(false);
        }
        _setTouchColor(pressed) {
          var _on$getComponent;
          const target = this.btnsNode || find('btns_node', this.node);
          if (!target) return;
          const color = pressed ? new Color(128, 128, 128, 255) : new Color(255, 255, 255, 255);
          const on = find('btn_arrow/on', target);
          const off = find('btn_arrow/off', target);
          if (on) ((_on$getComponent = on.getComponent('cc.Sprite')) == null ? void 0 : _on$getComponent.node) && on.getComponent('cc.UIOpacity');
          // 直接设置节点 color（UIOpacity + Sprite）
          if (on) on.color = color;
          if (off) off.color = color;
        }

        // ============ 菜单按钮事件 ============

        onClickDeposit() {
          this.playClickSound();
          if (typeof MEvent !== 'undefined') MEvent.emit('OpenCharge');
        }
        onClickRank() {
          this.playClickSound();
          if (typeof MEvent !== 'undefined') MEvent.emit('OpenRank');
        }
        onClickDownload() {
          this.playClickSound();
          if (typeof MEvent !== 'undefined') MEvent.emit('OpenDownload');
          // 直接打开 URL
          if (typeof MUser !== 'undefined' && MUser.appdownloadurl) {
            globalThis.open == null || globalThis.open(MUser.appdownloadurl, '_blank');
          }
        }
        onClickNotice() {
          this.playClickSound();
          if (typeof MEvent !== 'undefined') MEvent.emit('OpenNotice');
        }
        onClickVip() {
          this.playClickSound();
          if (typeof MEvent !== 'undefined') MEvent.emit('OpenVip');
        }
        onClickRecord() {
          this.playClickSound();
          if (typeof MEvent !== 'undefined') MEvent.emit('OpenRecord');
        }

        // ============ 音效 ============

        playClickSound() {
          if (typeof MAudio !== 'undefined') MAudio.playOneShot('Click');
        }
        playToggleSound() {
          if (typeof MAudio === 'undefined') return;
          // MAudio.playOneShot(this._isShow ? 'MX_CLB_PanelExpand' : 'MX_CLB_PanelShrink');
        }

        onDestroy() {
          if (typeof MEvent !== 'undefined') {
            MEvent.targetOff(this);
          }
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnsNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrowOnNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrowOffNode", [_dec4], {
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

System.register("chunks:///_virtual/GameCard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Sprite, Label, Node, _decorator, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      Label = module.Label;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "f84384DpUpLFa7neufJicFs", "GameCard", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * 游戏卡片组件
       *
       * 参考旧版游戏按钮 UI，显示游戏图标、名称、状态
       */
      let GameCard = exports('GameCard', (_dec = ccclass('GameCard'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = class GameCard extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "iconSprite", _descriptor, this);
          _initializerDefineProperty(this, "lblName", _descriptor2, this);
          _initializerDefineProperty(this, "lockMask", _descriptor3, this);
          _initializerDefineProperty(this, "hotBadge", _descriptor4, this);
          /** 游戏数据 */
          this._data = null;
        }
        /**
         * 设置游戏数据
         */
        setData(data) {
          this._data = data;
          if (this.lblName) {
            this.lblName.string = data.name || '';
          }

          // 加载游戏图标
          if (this.iconSprite && data.iconPath) {
            this.loadIcon(data.iconPath);
          }

          // 不可用时显示锁定遮罩
          if (this.lockMask) {
            this.lockMask.active = !data.available;
          }
        }
        getData() {
          return this._data;
        }

        /**
         * 加载图标
         */
        loadIcon(iconPath) {
          if (typeof MAb === 'undefined') return;
          MAb.asyncLoad({
            bundle: 'resources',
            path: iconPath,
            callback: (err, spriteFrame) => {
              if (!err && this.iconSprite) {
                this.iconSprite.spriteFrame = spriteFrame;
              }
            }
          });
        }

        /**
         * 点击事件（在编辑器中绑定到按钮）
         */
        onClickEnter() {
          if (!this._data) return;
          if (!this._data.available) {
            console.log('[GameCard] 游戏未开放');
            return;
          }
          if (typeof MAudio !== 'undefined') {
            MAudio.playOneShot('Click');
          }

          // 向上冒泡通知 GameListController
          this.node.emit('game-enter', this._data);
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lockMask", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hotBadge", [_dec5], {
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

System.register("chunks:///_virtual/GameExtraCpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Sprite, sp, _decorator, Component, Node, assetManager, Texture2D, SpriteFrame;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      sp = module.sp;
      _decorator = module._decorator;
      Component = module.Component;
      Node = module.Node;
      assetManager = module.assetManager;
      Texture2D = module.Texture2D;
      SpriteFrame = module.SpriteFrame;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "72b3ddH58tOnYw7I6r5cmqz", "GameExtraCpt", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * 游戏推广横幅组件
       *
       * 重构自旧版 GameExtraCpt.ts（CC 2.x → CC 3.8.8）
       * 根据 API 返回的 extra 数据显示静态图片或 Spine 动画
       * 点击进入对应的游戏
       */
      let GameExtraCpt = exports('GameExtraCpt', (_dec = ccclass('GameExtraCpt'), _dec2 = property(Sprite), _dec3 = property(sp.Skeleton), _dec(_class = (_class2 = (_class3 = class GameExtraCpt extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "iconSprite", _descriptor, this);
          _initializerDefineProperty(this, "spineSkeleton", _descriptor2, this);
          this._extraData = null;
        }
        onLoad() {
          this.node.on(Node.EventType.TOUCH_END, this.onClickEnterGame, this);
        }

        /** 清除并隐藏节点（对应旧版 clear()） */
        clear() {
          this._extraData = null;
          this.node.active = false;
          if (this.iconSprite) {
            this.iconSprite.spriteFrame = null;
            this.iconSprite.node.active = false;
          }
          if (this.spineSkeleton) {
            this.spineSkeleton.skeletonData = null;
            this.spineSkeleton.node.active = false;
          }
        }

        /**
         * 设置 extra 数据并加载资源
          * @param data { url: string[], type: 1(图片)|2(Spine), machineId: string }
         */
        setExtraData(data) {
          if (!data || !data.url || data.url.length === 0) {
            this.node.active = false;
            return;
          }
          this._extraData = data;
          this.node.active = true;
          if (data.type === 1) {
            this.loadStaticImage(data.url[0]);
          } else if (data.type === 2) {
            this.loadSpineAnimation(data.url);
          }
        }

        /** 加载静态图片 */
        loadStaticImage(url) {
          if (!url || !this.iconSprite) return;
          if (this.spineSkeleton) this.spineSkeleton.node.active = false;
          this.iconSprite.node.active = true;
          assetManager.loadRemote(url, (err, imageAsset) => {
            if (err || !this.iconSprite || !this.iconSprite.node.isValid) {
              console.warn('[GameExtraCpt] 加载图片失败:', url, err);
              return;
            }
            const texture = new Texture2D();
            texture.image = imageAsset;
            const spriteFrame = new SpriteFrame();
            spriteFrame.texture = texture;
            this.iconSprite.spriteFrame = spriteFrame;
            this.iconSprite.sizeMode = Sprite.SizeMode.CUSTOM;
            this.iconSprite.node.getComponent(Sprite);
          });
        }

        /** 加载 Spine 动画 */
        loadSpineAnimation(urls) {
          if (!urls || urls.length < 3 || !this.spineSkeleton) {
            console.warn('[GameExtraCpt] Spine 需要 3 个文件 (.png, .atlas, .json)');
            return;
          }
          if (this.iconSprite) this.iconSprite.node.active = false;
          this.spineSkeleton.node.active = true;
          const pngUrl = urls.find(u => u.endsWith('.png'));
          const atlasUrl = urls.find(u => u.endsWith('.atlas'));
          const jsonUrl = urls.find(u => u.endsWith('.json'));
          if (!pngUrl || !atlasUrl || !jsonUrl) {
            console.warn('[GameExtraCpt] 缺少 Spine 文件');
            return;
          }
          let loadCount = 0;
          const assets = {
            texture: null,
            atlasText: null,
            jsonData: null
          };
          const checkAllLoaded = () => {
            loadCount++;
            if (loadCount === 3) {
              this.createSkeletonData(assets.texture, assets.atlasText, assets.jsonData, pngUrl);
            }
          };
          assetManager.loadRemote(pngUrl, (err, texture) => {
            if (err) return console.warn('[GameExtraCpt] 加载纹理失败');
            assets.texture = texture;
            checkAllLoaded();
          });
          assetManager.loadRemote(atlasUrl, {
            ext: '.txt'
          }, (err, asset) => {
            if (err) return console.warn('[GameExtraCpt] 加载 atlas 失败');
            assets.atlasText = asset.text || asset._nativeAsset || asset;
            checkAllLoaded();
          });
          assetManager.loadRemote(jsonUrl, {
            ext: '.json'
          }, (err, asset) => {
            if (err) return console.warn('[GameExtraCpt] 加载 json 失败');
            assets.jsonData = asset.json || asset._nativeAsset || asset;
            checkAllLoaded();
          });
        }
        createSkeletonData(texture, atlasText, jsonData, pngUrl) {
          if (!this.spineSkeleton || !this.spineSkeleton.node.isValid) return;
          try {
            const skeletonData = new sp.SkeletonData();
            skeletonData.skeletonJson = jsonData;
            skeletonData.atlasText = atlasText;
            skeletonData.textures = [texture];
            const textureName = pngUrl.substring(pngUrl.lastIndexOf('/') + 1);
            skeletonData.textureNames = [textureName];
            skeletonData._uuid = 'remote-spine-extra-' + Date.now();
            this.spineSkeleton.skeletonData = skeletonData;

            // 尝试播放动画
            const animNames = ['animation', 'idle', 'default', 'loop'];
            for (const name of animNames) {
              try {
                this.spineSkeleton.setAnimation(0, name, true);
                break;
              } catch (_) {/* 继续尝试 */}
            }
          } catch (e) {
            console.error('[GameExtraCpt] 创建 SkeletonData 失败:', e);
          }
        }

        /** 点击进入游戏 */
        onClickEnterGame() {
          var _this$_extraData;
          if (!((_this$_extraData = this._extraData) != null && _this$_extraData.machineId)) return;
          const machineId = parseInt(this._extraData.machineId);
          if (isNaN(machineId)) return;
          console.log('[GameExtraCpt] 进入游戏:', machineId);
          if (typeof MEvent !== 'undefined') {
            MEvent.emit('EnterGame', machineId);
          }
        }
        onDestroy() {
          this.node.off(Node.EventType.TOUCH_END, this.onClickEnterGame, this);
        }
      }, _class3.TARGET_WIDTH = 1000, _class3.TARGET_HEIGHT = 616, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spineSkeleton", [_dec3], {
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

System.register("chunks:///_virtual/GameList.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, CCFloat, Node, _decorator, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      CCFloat = module.CCFloat;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "edf58nVN/9G+JEebFILwgru", "GameList", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * GameList 游戏列表组件（PageView 风格轮播）
       *
       * 重构自场景中 c5a09lTqKZKE6FCobKt/vl8 引用的 GameList 组件
       * 对应属性：templateType=2, pageDistance=0.3, cyclic=false, frameByFrameRenderNum=0
       * 负责游戏列表的虚拟滚动渲染
       */
      let GameList = exports('GameList', (_dec = ccclass('GameList'), _dec2 = property({
        type: CCFloat
      }), _dec3 = property(Node), _dec4 = property({
        type: CCFloat
      }), _dec5 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = class GameList extends Component {
        constructor(...args) {
          super(...args);
          /** 模板类型：1=节点模板 2=Prefab模板 */
          _initializerDefineProperty(this, "templateType", _descriptor, this);
          _initializerDefineProperty(this, "tmpNode", _descriptor2, this);
          _initializerDefineProperty(this, "pageDistance", _descriptor3, this);
          _initializerDefineProperty(this, "cyclic", _descriptor4, this);
          _initializerDefineProperty(this, "lackCenter", _descriptor5, this);
          _initializerDefineProperty(this, "lackSlide", _descriptor6, this);
          _initializerDefineProperty(this, "frameByFrameRenderNum", _descriptor7, this);
          _initializerDefineProperty(this, "selectedMode", _descriptor8, this);
          _initializerDefineProperty(this, "repeatEventSingle", _descriptor9, this);
          /** 当前数据列表 */
          this._listData = [];
          /** 当前显示游戏类型 */
          this._gameType = '-1';
        }
        onLoad() {
          console.log('[GameList] 游戏列表已加载');
        }

        /**
         * 刷新游戏列表（由 LobbyController 调用）
         */
        refresh(listData, gameType) {
          this._listData = listData;
          this._gameType = gameType;
          this.renderList();
          console.log('[GameList] 刷新列表，数量:', listData.length, '类型:', gameType);
        }
        renderList() {
          // 实际渲染逻辑由各游戏项 prefab 负责
          // 通过事件通知各子节点更新
          if (typeof MEvent !== 'undefined') {
            MEvent.emit('GameListRefresh', {
              list: this._listData,
              type: this._gameType
            });
          }
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "templateType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tmpNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pageDistance", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.3;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cyclic", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lackCenter", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lackSlide", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "frameByFrameRenderNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "selectedMode", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "repeatEventSingle", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameListController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, ScrollView, Node, Prefab, _decorator, Component, instantiate;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      ScrollView = module.ScrollView;
      Node = module.Node;
      Prefab = module.Prefab;
      _decorator = module._decorator;
      Component = module.Component;
      instantiate = module.instantiate;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "6688e7cuHxCg7L/XCRTLvAx", "GameListController", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * 游戏分类枚举
       * 参考旧版 GameBtnList.ts 中的 type 参数
       */
      var EGameCategory = /*#__PURE__*/function (EGameCategory) {
        EGameCategory[EGameCategory["All"] = 0] = "All";
        EGameCategory[EGameCategory["Poker"] = 1] = "Poker";
        EGameCategory[EGameCategory["Sports"] = 2] = "Sports";
        EGameCategory[EGameCategory["Slots"] = 3] = "Slots";
        EGameCategory[EGameCategory["More"] = 99] = "More";
        return EGameCategory;
      }(EGameCategory || {});
      /**
       * 游戏信息接口
       */
      /**
       * 游戏列表控制器
       *
       * 参考旧版 GameBtnList.ts，转为 CC 3.8.8
       * 功能：分类 Tab 切换 + 滚动游戏列表
       */
      let GameListController = exports('GameListController', (_dec = ccclass('GameListController'), _dec2 = property(ScrollView), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property([Node]), _dec(_class = (_class2 = class GameListController extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "scrollView", _descriptor, this);
          _initializerDefineProperty(this, "content", _descriptor2, this);
          _initializerDefineProperty(this, "gameCardPrefab", _descriptor3, this);
          _initializerDefineProperty(this, "tabButtons", _descriptor4, this);
          /** 当前选中的分类 */
          this._currentCategory = EGameCategory.All;
          /** 全部游戏列表 */
          this._allGames = [];
        }
        onLoad() {
          this.registerEvents();
        }

        /**
         * 设置游戏列表数据
         * 旧版: onInit(type) 从 cc.vv.UserManager.gameList 获取
         */
        setGameList(games) {
          this._allGames = games;
          this.filterAndDisplay(this._currentCategory);
        }

        /**
         * 切换分类 Tab
         * 旧版: Tabbar 的回调
         */
        onTabChange(event, category) {
          const cat = parseInt(category);
          if (cat === this._currentCategory) return;
          this._currentCategory = cat;
          this.updateTabUI(cat);
          this.filterAndDisplay(cat);
        }

        /**
         * 按分类过滤并显示游戏
         * 旧版: onInit() 中的 filter + sort 逻辑
         */
        filterAndDisplay(category) {
          // 过滤
          let filtered = this._allGames;
          if (category !== EGameCategory.All) {
            filtered = this._allGames.filter(g => g.category === category);
          }

          // 按 order 排序
          filtered.sort((a, b) => a.order - b.order);

          // 清空列表
          if (this.content) {
            this.content.removeAllChildren();
          }

          // 生成游戏卡片
          for (const game of filtered) {
            this.createGameCard(game);
          }

          // 滚动到顶部
          if (this.scrollView) {
            this.scrollView.scrollToTop(0.1);
          }
          console.log(`[GameList] 显示 ${filtered.length} 个游戏 (分类: ${category})`);
        }

        /**
         * 创建游戏卡片
         * 旧版: onUpdateItem() 中更新列表项
         */
        createGameCard(game) {
          if (!this.gameCardPrefab || !this.content) return;
          const cardNode = instantiate(this.gameCardPrefab);
          this.content.addChild(cardNode);

          // 设置卡片数据
          const card = cardNode.getComponent('GameCard');
          if (card) {
            card.setData(game);
          }
        }

        /**
         * 更新 Tab 选中状态
         */
        updateTabUI(activeCategory) {
          this.tabButtons.forEach((btn, index) => {
            // TODO: 切换 Tab 的选中/未选中样式
          });
        }

        /**
         * 游戏卡片点击
         * 旧版: Node_submodule.ts 的 onClickEnter()
         */
        onGameCardClick(gameInfo) {
          console.log(`[GameList] 点击游戏: ${gameInfo.name} (${gameInfo.bundleName})`);

          // 通过事件通知 LobbyController 处理游戏进入逻辑
          // 包括热更检查、下载、加载 bundle、切换场景
          this.node.emit('game-enter', gameInfo);
        }
        registerEvents() {
          if (typeof MEvent === 'undefined') return;
          // 监听游戏列表数据更新
          // MEvent.on('GameListUpdate', this.onGameListUpdate, this);
        }

        onDestroy() {
          if (typeof MEvent !== 'undefined') {
            MEvent.targetOff(this);
          }
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gameCardPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tabButtons", [_dec5], {
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

System.register("chunks:///_virtual/HallAdCpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Prefab, Node, _decorator, Component, instantiate;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      instantiate = module.instantiate;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "40b6b8wYD5OpoPsVNY38dJn", "HallAdCpt", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      /**
       * 广告项数据接口
       */

      /**
       * 广告轮播管理组件
       *
       * 重构自旧版 HallAdCpt.ts（CC 2.x → CC 3.8.8）
       * 从服务器获取广告配置，动态创建广告项
       */
      let HallAdCpt = exports('HallAdCpt', (_dec = ccclass('HallAdCpt'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = class HallAdCpt extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "adItemPrefab", _descriptor, this);
          _initializerDefineProperty(this, "content", _descriptor2, this);
        }
        /**
         * 设置广告数据并显示
         */
        updateView(adConfig) {
          if (!this.content || !this.adItemPrefab) return;

          // 清空旧的广告项
          this.content.removeAllChildren();
          if (!adConfig || adConfig.length === 0) {
            console.log('[HallAdCpt] 无广告数据');
            return;
          }
          for (const item of adConfig) {
            const adNode = instantiate(this.adItemPrefab);
            this.content.addChild(adNode);
            const adItemCpt = adNode.getComponent('HallAdItemCpt');
            if (adItemCpt) {
              adItemCpt.setData(item.imgUrl, item.jumpLink);
            }
          }
          console.log('[HallAdCpt] 加载广告项:', adConfig.length);
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "adItemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
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

System.register("chunks:///_virtual/HallAdItemCpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Sprite, _decorator, Component, assetManager, Texture2D, SpriteFrame;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      _decorator = module._decorator;
      Component = module.Component;
      assetManager = module.assetManager;
      Texture2D = module.Texture2D;
      SpriteFrame = module.SpriteFrame;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "c7ca4QrOSdG0qAkupvXlmuf", "HallAdItemCpt", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * 广告项组件
       *
       * 重构自旧版 HallAdItemCpt.ts（CC 2.x → CC 3.8.8）
       * 支持网络图片和本地图集图片加载
       */
      let HallAdItemCpt = exports('HallAdItemCpt', (_dec = ccclass('HallAdItemCpt'), _dec2 = property(Sprite), _dec(_class = (_class2 = class HallAdItemCpt extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "icon", _descriptor, this);
          this._jumpLink = '';
        }
        /**
         * 设置广告数据
         */
        setData(imgUrl, jumpLink) {
          this._jumpLink = jumpLink;
          if (imgUrl && imgUrl.indexOf('http') > -1) {
            this.loadNetworkImage(imgUrl);
          }
        }

        /**
         * 加载网络图片
         */
        loadNetworkImage(url) {
          assetManager.loadRemote(url, (err, imageAsset) => {
            if (err || !this.icon || !this.icon.node.isValid) return;
            const texture = new Texture2D();
            texture.image = imageAsset;
            const spriteFrame = new SpriteFrame();
            spriteFrame.texture = texture;
            this.icon.spriteFrame = spriteFrame;
            this.icon.sizeMode = Sprite.SizeMode.CUSTOM;
          });
        }

        /** 点击广告 */
        onClickAd() {
          if (!this._jumpLink) return;
          console.log('[HallAdItemCpt] 点击广告:', this._jumpLink);
          if (typeof MEvent !== 'undefined') {
            MEvent.emit('AdClick', this._jumpLink);
          }
        }
      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HallSlotBtn.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Prefab, _decorator, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "533d6r4ACtAGoPV8NdTPrFo", "HallSlotBtn", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * 大厅 Slot 游戏入口按钮
       *
       * 重构自旧版 HallSlotBtn.ts（CC 2.x → CC 3.8.8）
       * 管理 Slot 游戏列表入口的显示/隐藏
       */
      let HallSlotBtn = exports('HallSlotBtn', (_dec = ccclass('HallSlotBtn'), _dec2 = property(Prefab), _dec(_class = (_class2 = class HallSlotBtn extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "prefab", _descriptor, this);
          this._hasSlots = false;
        }
        onLoad() {
          this.updateInfo();
        }

        /** 根据 slot 列表数据更新按钮可见性 */
        updateInfo(slotsList) {
          if (slotsList) {
            this._hasSlots = slotsList.length > 0;
          }
          this.node.active = this._hasSlots;
        }

        /** 点击进入 Slot 列表 */
        onClick() {
          if (typeof MEvent !== 'undefined') {
            MEvent.emit('OpenSlotList');
          }
        }
      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/i18nLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, CCString, _decorator, Component, Label;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      CCString = module.CCString;
      _decorator = module._decorator;
      Component = module.Component;
      Label = module.Label;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "3510dAwG3lLj5YhLG9Cmoqu", "i18nLabel", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * 多语言 Label 组件
       *
       * 重构自旧版 i18nLabel.ts（CC 2.x → CC 3.8.8）
       * 根据 _srcKey 自动显示对应语言的文字
       */
      let i18nLabel = exports('i18nLabel', (_dec = ccclass('i18nLabel'), _dec2 = property({
        visible: false
      }), _dec3 = property({
        type: CCString,
        multiline: true
      }), _dec(_class = (_class2 = class i18nLabel extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "_srcKey", _descriptor, this);
          this._key = '';
          this._args = [];
        }
        onLoad() {
          // 尝试注册到 i18n 管理器
          if (typeof MI18n !== 'undefined' && typeof MI18n.register === 'function') {
            MI18n.register(this);
          }
          if (!this._srcKey) {
            const label = this.getComponent(Label);
            if (label) this._srcKey = label.string;
          }
          this.updateView();
        }
        get string() {
          return this._srcKey;
        }
        set string(value) {
          this._srcKey = value;
          const label = this.getComponent(Label);
          if (!label) return;
          if (typeof MI18n !== 'undefined') {
            label.string = MI18n.getLabel ? MI18n.getLabel(value) : value;
          } else {
            label.string = value;
          }
        }
        setLabel(key, ...args) {
          this._key = key;
          this._args = args;
          if (typeof MI18n !== 'undefined' && MI18n.getLabel) {
            this.string = MI18n.getLabel(key, ...args);
          } else {
            this.string = key;
          }
        }
        updateView() {
          if (this._key && this._args.length > 0) {
            this.setLabel(this._key, ...this._args);
          } else {
            this.string = this._srcKey;
          }
        }
        onDestroy() {
          if (typeof MI18n !== 'undefined' && typeof MI18n.unregister === 'function') {
            MI18n.unregister(this);
          }
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_srcKey", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "string", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "string"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LeagueExpCpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Sprite, Label, ProgressBar, Node, _decorator, Component, tween;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      tween = module.tween;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "0c542lo4ZJGoZebkbRwOO1z", "LeagueExpCpt", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * 联赛/排名经验进度组件
       *
       * 重构自旧版 LeagueExpCpt.ts（CC 2.x → CC 3.8.8）
       * 显示联赛排名图标、经验进度条、剩余时间
       */
      let LeagueExpCpt = exports('LeagueExpCpt', (_dec = ccclass('LeagueExpCpt'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(ProgressBar), _dec5 = property(Node), _dec(_class = (_class2 = class LeagueExpCpt extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "icon", _descriptor, this);
          _initializerDefineProperty(this, "label", _descriptor2, this);
          _initializerDefineProperty(this, "progress", _descriptor3, this);
          _initializerDefineProperty(this, "animNode", _descriptor4, this);
          this._gameId = 0;
          this._currentExp = 0;
        }
        /**
         * 设置游戏 ID 和初始经验
         */
        setGameId(gameId, exp) {
          this._gameId = gameId;
          this._currentExp = exp;
          this.updateDisplay(exp);
        }

        /**
         * 更新经验显示
         */
        updateView(exp) {
          this._currentExp = exp;
          this.updateDisplay(exp);
        }

        /**
         * 带动画更新进度
         */
        updateProgress(oldExp, newExp, rankData) {
          if (!rankData || !this.progress) return;
          this._currentExp = newExp;
          if (rankData.next) {
            const curExp = newExp - rankData.score;
            const maxExp = rankData.next.score - rankData.score;
            const targetProgress = curExp / maxExp;
            if (this.label) {
              this.label.string = `${this.formatNumber(curExp)}/${this.formatNumber(maxExp)}`;
            }

            // 播放进度条动画
            if (this.animNode) {
              this.animNode.active = true;
            }
            tween(this.progress).to(1.2, {
              progress: Math.min(targetProgress, 1)
            }).call(() => {
              if (this.animNode) this.animNode.active = false;
            }).start();

            // TODO: 如果排名降级，播放图标缩放切换动画
          } else {
            this.progress.progress = 1;
            if (this.label) {
              this.label.string = this.formatNumber(newExp);
            }
          }
        }

        /** 网络消息：联赛经验变化 */
        onLeagueExpChange(msg) {
          if (msg.code === 200 && msg.gameid === this._gameId) {
            const oldExp = this._currentExp;
            this._currentExp = msg.exp;
            // TODO: 传入 rankData 进行动画更新
            this.updateDisplay(msg.exp);
          }
        }
        updateDisplay(exp) {
          // TODO: 根据经验值查询 rankData，设置图标和进度
          if (this.label) {
            this.label.string = this.formatNumber(exp);
          }
        }
        formatNumber(num) {
          return num.toLocaleString();
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "animNode", [_dec5], {
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

System.register("chunks:///_virtual/LevelCpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, sp, _decorator, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      sp = module.sp;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "8824cKlpupA6olLyS8pz+1N", "LevelCpt", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      /**
       * 玩家等级显示组件
       *
       * 重构自旧版 LevelCpt.ts（CC 2.x → CC 3.8.8）
       * 通过 Spine 动画显示等级图标，Label 显示等级文本
       */
      let LevelCpt = exports('LevelCpt', (_dec = ccclass('LevelCpt'), _dec2 = property(Label), _dec3 = property(sp.Skeleton), _dec(_class = (_class2 = class LevelCpt extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "value", _descriptor, this);
          _initializerDefineProperty(this, "spine", _descriptor2, this);
          this._level = 0;
        }
        /** 通过等级设置 */
        setLevel(level) {
          this._level = level;
          this.updateView();
        }

        /** 通过经验值设置（需要外部转换函数） */
        setLevelByExp(exp, levelConverter) {
          this._level = levelConverter(exp);
          this.updateView();
        }
        getLevel() {
          return this._level;
        }
        updateView() {
          if (this.value) {
            this.value.string = 'Lv' + this._level;
          }
          if (this.spine) {
            // Spine 动画名称对应等级
            // TODO: 根据实际 Spine 资源设置动画名
            try {
              this.spine.setAnimation(0, 'level_' + this._level, true);
            } catch (_) {
              // 如果指定动画不存在，使用默认动画
              try {
                this.spine.setAnimation(0, 'animation', true);
              } catch (_) {/* ignore */}
            }
          }
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spine", [_dec3], {
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

System.register("chunks:///_virtual/lobby-casino", ['./GameCard.ts', './GameListController.ts', './FloatMenu.ts', './GameExtraCpt.ts', './HallAdCpt.ts', './HallAdItemCpt.ts', './HallSlotBtn.ts', './LeagueExpCpt.ts', './LevelCpt.ts', './LobbyController.ts', './NetImgUI.ts', './PageHallAni.ts', './SafeWidget.ts', './ToGameLoading.ts', './UserCoinCpt.ts', './UserDiamondCpt.ts', './UserInfoBar.ts', './VipExpCpt.ts', './ButtonClickSoundCmp.ts', './CarouselCpt.ts', './CarouselIndicatorCpt.ts', './CarouselItemCpt.ts', './GameList.ts', './PageTabbar.ts', './RedHitCmp.ts', './RoundRectBg.ts', './SafeAreaView.ts', './SubSystemLoader.ts', './ToggleRedHit.ts', './UIFixDesign.ts', './i18nLabel.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/LobbyController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MEvent.ts', './MNode.ts', './SubSystemManager.ts', './PopupManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, ScrollView, Prefab, _decorator, Component, find, Toggle, Label, EditBox, instantiate, MEvent, MNode, MSubSystem, PopupManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      _decorator = module._decorator;
      Component = module.Component;
      find = module.find;
      Toggle = module.Toggle;
      Label = module.Label;
      EditBox = module.EditBox;
      instantiate = module.instantiate;
    }, function (module) {
      MEvent = module.MEvent;
    }, function (module) {
      MNode = module.MNode;
    }, function (module) {
      MSubSystem = module.MSubSystem;
    }, function (module) {
      PopupManager = module.PopupManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "c8ae3Ra3JNONq3YSN4RVhZz", "LobbyController", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      // 通过 globalThis 访问 core 管理器（由 core bundle 提供）

      /**
       * 大厅主控制器
       *
       * 重构自旧版 GameHall.js（CC 2.x → CC 3.8.8）
       *
       * 职责：
       * 1. 初始化大厅 UI（Tab 切换、游戏列表、浮动菜单、广告）
       * 2. 管理子系统（notice、bonus 等）按需加载
       * 3. Tab 切换和游戏列表过滤
       * 4. 大厅浮动菜单 & bgEffect prefab 延迟加载
       */
      let LobbyController = exports('LobbyController', (_dec = ccclass('LobbyController'), _dec2 = property(Node), _dec3 = property(ScrollView), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = class LobbyController extends Component {
        constructor(...args) {
          super(...args);
          /** 游戏按钮内容容器（布局节点） */
          _initializerDefineProperty(this, "gameBtnContent", _descriptor, this);
          /** 游戏列表滚动视图 */
          _initializerDefineProperty(this, "gamesScrollview", _descriptor2, this);
          /** 菜单 Tab 容器节点 */
          _initializerDefineProperty(this, "menuNode", _descriptor3, this);
          /** games 子节点（含 ad、node_search、game_extra、GameList） */
          _initializerDefineProperty(this, "gamesNode", _descriptor4, this);
          /** 广告节点 */
          _initializerDefineProperty(this, "adNode", _descriptor5, this);
          /** 浮动菜单 prefab（延迟加载用） */
          _initializerDefineProperty(this, "floatMenuPrefab", _descriptor6, this);
          /** bg_effect prefab（延迟加载用） */
          _initializerDefineProperty(this, "bgEffectPrefab", _descriptor7, this);
          /** PageHall 节点引用（用于动态挂载 FloatMenu） */
          _initializerDefineProperty(this, "pageHallNode", _descriptor8, this);
          /** bg_img 节点（用于动态挂载 bg_effect） */
          _initializerDefineProperty(this, "bgImgNode", _descriptor9, this);
          /** 当前显示的游戏类型 ID（字符串，对应 typegamelist[i].id） */
          this._showGameType = '-1';
          /** 上一次 tab */
          this._preTab = '';
          /** 节流计时器 */
          this._updateIntv = 0;
        }
        onLoad() {
          console.log('[LobbyController] 大厅场景加载');

          // 注册到 globalThis，供外部（如 main-shell）调用
          globalThis.__lobbyController = this;

          // 初始化 MNode，确保 MUi 等管理器能找到根节点
          const canvas = find('Canvas');
          if (canvas) {
            MNode.setNodes({
              canvas: canvas,
              gameUI: canvas
            });
          }

          // 注册子系统
          if (typeof MSubSystem !== 'undefined' && MSubSystem.register) {
            MSubSystem.register('lobby-casino-email', '邮箱');
          }

          // 监听事件
          this.registerEvents();

          // 搜索框监听
          this.registerSearchEvents();

          // btn_top 初始隐藏
          const btnTop = find('PageContent2/PageHall/btn_top', this.node);
          if (btnTop) btnTop.active = false;
        }
        start() {
          console.log('[LobbyController] 大厅初始化完成');

          // 延迟加载 FloatMenu 和 bg_effect
          this.addHallBgEffect();

          // 默认激活第一个 Tab
          this.scheduleOnce(() => {
            this.onClickMenu('', '0');
          }, 0.1);
        }

        /**
         * 进入大厅（由 main-shell 的 MApp.enterLobby 外部调用）
         */
        async enter() {
          console.log('[LobbyController] 进入大厅');
        }

        // ============ Tab 切换 ============

        /**
         * Tab 点击，切换游戏类型
         * 对应旧版 GameHall.js onClickMenu
         * @param event 事件源（空字符串时由代码调用）
         * @param selectedType 游戏类型 ID
         * @param forceRefresh 是否强制刷新
         */
        onClickMenu(event, selectedType, forceRefresh = false) {
          if (this._showGameType === selectedType && !forceRefresh) return;
          if (typeof MEvent !== 'undefined') {
            MEvent.emit('EVENT_STATUS_FLOATMENU', 0);
          }

          // 获取游戏列表数据（通过 MUser 全局对象）
          const allGameTypes = typeof MUser !== 'undefined' && MUser.typegamelist ? MUser.typegamelist : [];
          const displayGameList = [];
          let adPictures = [];

          // 校验 selectedType 是否有效
          const isValidType = allGameTypes.some(t => String(t.id) === String(selectedType));
          if (!isValidType && allGameTypes.length > 0) {
            selectedType = String(allGameTypes[0].id);
          }

          // 收集游戏列表
          for (const gameType of allGameTypes) {
            if (String(gameType.id) === String(selectedType)) {
              var _gameType$extra;
              for (const game of gameType.games || []) {
                if (typeof MUser !== 'undefined' && MUser.isGameOpen && MUser.isGameOpen(game.id)) {
                  displayGameList.push(game);
                } else {
                  displayGameList.push(game); // 无 MUser 时全部展示
                }
              }

              if ((_gameType$extra = gameType.extra) != null && _gameType$extra.banners) {
                adPictures = gameType.extra.banners;
              }
              break;
            }
          }

          // 更新 Toggle 状态（由代码触发时）
          if (event === '' && this.menuNode) {
            const menuBtns = this.menuNode.children;
            menuBtns.forEach(btn => {
              const idx = parseInt(btn.name.charAt(btn.name.length - 1)) - 1;
              const toggle = btn.getComponent(Toggle);
              if (toggle) toggle.isChecked = idx === Number(selectedType);
            });
          }
          this._showGameType = selectedType;

          // 搜索框显隐（slot 类型显示）
          this._showSearch(Number(selectedType) === 2);

          // 广告显隐
          if (this.adNode) {
            if (adPictures.length > 0) {
              var _find;
              this.adNode.active = true;
              const adComp = (_find = find('node_ad/ad', this.adNode)) == null ? void 0 : _find.getComponent('HallAdCpt');
              if (adComp) adComp.updateView(adPictures);
            } else {
              this.adNode.active = false;
            }
          }

          // 游戏类型标签
          if (this.gamesNode) {
            var _find2;
            const gameTypeLabel = (_find2 = find('bg_hall_ge/gameType', this.gamesNode)) == null ? void 0 : _find2.getComponent(Label);
            const typeNames = ['FAVORITE', 'MULTIPLAYER', 'SLOTS', 'FLIGHT', 'SKILL', 'FISHING'];
            if (gameTypeLabel) {
              gameTypeLabel.string = typeNames[Number(selectedType)] || '';
            }
          }

          // 刷新列表
          this._refushList(displayGameList);
          console.log('[LobbyController] 切换游戏类型:', selectedType, '游戏数:', displayGameList.length);
        }

        // ============ 游戏列表 ============

        _refushList(listData) {
          if (!this.gameBtnContent) return;

          // 对 listData 排序（按 ord 字段）
          listData.sort((a, b) => (a.ord || 1) - (b.ord || 1));

          // 通知游戏列表组件刷新（如果有专门的 GameListController）
          const gameListNode = this.gamesNode ? find('GameList', this.gamesNode) : null;
          if (gameListNode) {
            const gameListCpt = gameListNode.getComponent('GameListController');
            if (gameListCpt && typeof gameListCpt.refresh === 'function') {
              gameListCpt.refresh(listData, this._showGameType);
              return;
            }
          }
          console.log('[LobbyController] 刷新游戏列表，数量:', listData.length);
          this._preTab = this._showGameType;
        }

        // ============ 搜索 ============

        registerSearchEvents() {
          const searchNode = find('PageContent2/PageHall/games/node_search', this.node);
          if (!searchNode) return;
          const editNode = find('edit_search', searchNode);
          if (editNode) {
            editNode.on('text-changed', this.onSlotSearchTextChange, this);
            editNode.on('editing-did-began', this.onInputBegin, this);
            const btnCancel = find('btn_cancel', editNode);
            if (btnCancel) btnCancel.on(Node.EventType.TOUCH_END, this.onClickSearchCancel, this);
          }
          const btnSearch = find('btn_search', searchNode);
          if (btnSearch) btnSearch.on(Node.EventType.TOUCH_END, this.onClickSearchSlot, this);
        }
        onSlotSearchTextChange() {
          var _editNode$getComponen;
          const searchNode = find('PageContent2/PageHall/games/node_search', this.node);
          const editNode = find('edit_search', searchNode);
          if (!editNode) return;
          const str = ((_editNode$getComponen = editNode.getComponent(EditBox)) == null ? void 0 : _editNode$getComponen.string) || '';
          const btnCancel = find('btn_cancel', editNode);
          if (btnCancel) btnCancel.active = str.length > 0;
          if (str) {
            this._filterSlot(str);
          } else {
            this.onClickMenu('', this._showGameType, true);
          }
        }
        onInputBegin() {
          if (typeof MEvent !== 'undefined') MEvent.emit('EVENT_STATUS_FLOATMENU', 0);
        }
        onClickSearchCancel() {
          const searchNode = find('PageContent2/PageHall/games/node_search', this.node);
          const editNode = find('edit_search', searchNode);
          if (editNode) {
            const eb = editNode.getComponent(EditBox);
            if (eb) eb.string = '';
            const btnCancel = find('btn_cancel', editNode);
            if (btnCancel) btnCancel.active = false;
          }
          this.onClickMenu('', this._showGameType, true);
        }
        onClickSearchSlot() {
          var _editNode$getComponen2;
          if (this._showGameType !== '2') return;
          const searchNode = find('PageContent2/PageHall/games/node_search', this.node);
          const editNode = find('edit_search', searchNode);
          const str = (editNode == null || (_editNode$getComponen2 = editNode.getComponent(EditBox)) == null ? void 0 : _editNode$getComponen2.string) || '';
          if (str) this._filterSlot(str);
          if (typeof MEvent !== 'undefined') MEvent.emit('EVENT_STATUS_FLOATMENU', 0);
        }
        _filterSlot(filterText) {
          var _allGameTypes$find;
          const allGameTypes = typeof MUser !== 'undefined' && MUser.typegamelist ? MUser.typegamelist : [];
          const matchedGames = [];
          const gameList = ((_allGameTypes$find = allGameTypes.find(t => String(t.id) === '2')) == null ? void 0 : _allGameTypes$find.games) || [];
          for (const game of gameList) {
            const name = (game.name || game.gamename || game.title || '').toLowerCase();
            if (name.includes(filterText.toLowerCase())) {
              matchedGames.push(game);
            }
          }
          this._refushList(matchedGames);
        }

        // ============ 滚动回调 ============

        onListScrolling() {
          if (!this.gamesScrollview) return;
          const offset = this.gamesScrollview.getScrollOffset();
          const maxOffset = this.gamesScrollview.getMaxScrollOffset();
          const btnTop = find('PageContent2/PageHall/btn_top', this.node);
          if (!btnTop) return;
          btnTop.active = maxOffset.y > 0 && offset.y / maxOffset.y > 0.1;
        }
        onClickGamelistTop() {
          var _this$gamesScrollview, _this$gamesScrollview2;
          (_this$gamesScrollview = this.gamesScrollview) == null || _this$gamesScrollview.stopAutoScroll();
          (_this$gamesScrollview2 = this.gamesScrollview) == null || _this$gamesScrollview2.scrollToTop(0.5);
          const btnTop = find('PageContent2/PageHall/btn_top', this.node);
          if (btnTop) btnTop.active = false;
        }

        // ============ 大厅 bg 特效延迟加载 ============

        addHallBgEffect() {
          // FloatMenu
          this.scheduleOnce(() => {
            const pageHall = this.pageHallNode || find('PageContent2/PageHall', this.node);
            if (!pageHall) return;
            if (this.floatMenuPrefab && !find('FloatMenu', pageHall)) {
              const floatMenu = instantiate(this.floatMenuPrefab);
              floatMenu.parent = pageHall;
              const cpt = floatMenu.getComponent('FloatMenu');
              if (cpt && typeof cpt.onClickMenu === 'function') {
                cpt.onClickMenu();
              }
            }
          }, 0.8);

          // bg_effect
          this.scheduleOnce(() => {
            const bgImg = this.bgImgNode || find('PageContent2/PageHall/bg_img', this.node);
            if (!bgImg) return;
            if (this.bgEffectPrefab && !find('bg_effect', bgImg)) {
              const effect = instantiate(this.bgEffectPrefab);
              effect.parent = bgImg;
            }
          }, 1.5);
        }

        // ============ 搜索框显隐 ============

        _showSearch(show) {
          const searchNode = find('PageContent2/PageHall/games/node_search', this.node);
          if (!searchNode) return;
          if (!show) {
            const editNode = find('edit_search', searchNode);
            if (editNode) {
              const eb = editNode.getComponent(EditBox);
              if (eb) eb.string = '';
              const btnCancel = find('btn_cancel', editNode);
              if (btnCancel) btnCancel.active = false;
            }
          }
          searchNode.active = show;
        }

        // ============ 事件处理 ============

        registerEvents() {
          if (typeof MEvent === 'undefined') {
            console.warn('[LobbyController] MEvent 未加载');
            return;
          }
          // 收藏列表变化 → 刷新 FAVORITE tab
          MEvent.on('UP_GAME_FAV_LIST', this.UP_GAME_FAV_LIST, this);
          // 进入游戏事件 → 显示加载界面
          MEvent.on('HALL_TO_GAME', this.HALL_TO_GAME, this);
          // 金币不足
          MEvent.on('NOT_ENOUGH_COINS', this.NOT_ENOUGH_COINS, this);
          // 充值
          MEvent.on('OpenCharge', this.OpenCharge, this);
          // 邮件
          MEvent.on('OpenMail', this.OpenMail, this);
        }
        UP_GAME_FAV_LIST() {
          if (this._showGameType === '0') {
            this.onClickMenu('', '0', true);
          }
        }
        HALL_TO_GAME() {
          console.log('[LobbyController] 进入游戏中...');
          // TODO: 显示 ToGameLoading prefab
          if (typeof MEvent !== 'undefined') MEvent.emit('ShowToGameLoading');
        }
        NOT_ENOUGH_COINS() {
          console.log('[LobbyController] 金币不足');
          if (typeof MEvent !== 'undefined') MEvent.emit('ShowAlert', {
            msg: '金币不足',
            confirm: () => MEvent.emit('OpenCharge')
          });
        }
        OpenCharge() {
          const btnAdd = find('safeview/UserinfoBar/coin/btn_add', this.node);
          if (btnAdd) btnAdd.emit('click');
        }
        OpenMail() {
          console.log('[LobbyController] OpenMail');
          PopupManager.addPopup('res/PopupMailView', {
            bundle: 'lobby-casino-email',
            noTouchClose: false // 对应 tapToClose: true
          });
        }

        // ============ update ============

        update(dt) {
          this._updateIntv += dt;
          if (this._updateIntv > 1) {
            this._updateIntv = 0;
            // 每秒检查 FCM Token
            if (typeof MUser !== 'undefined' && typeof MUser.updateFCMToken === 'function') {
              MUser.updateFCMToken();
            }
          }
        }

        // ============ 生命周期 ============

        onDestroy() {
          if (typeof MEvent !== 'undefined') {
            MEvent.targetOff(this);
          }
          globalThis.__lobbyController = null;
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameBtnContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gamesScrollview", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "menuNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gamesNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "adNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "floatMenuPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bgEffectPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "pageHallNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bgImgNode", [_dec10], {
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

System.register("chunks:///_virtual/NetImgUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, CCString, _decorator, Component, assetManager, Sprite, Texture2D, SpriteFrame;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      CCString = module.CCString;
      _decorator = module._decorator;
      Component = module.Component;
      assetManager = module.assetManager;
      Sprite = module.Sprite;
      Texture2D = module.Texture2D;
      SpriteFrame = module.SpriteFrame;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "6f68dbQcZ5Ji5xF4ddC3gmT", "NetImgUI", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      /**
       * 网络图片加载组件
       *
       * 重构自旧版 NetImgUI.ts（CC 2.x → CC 3.8.8）
       * 根据 URL 列表加载多张网络图片到对应节点
       */
      let NetImgUI = exports('NetImgUI', (_dec = ccclass('NetImgUI'), _dec2 = property([Node]), _dec3 = property([CCString]), _dec(_class = (_class2 = class NetImgUI extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "domUrl", _descriptor, this);
          _initializerDefineProperty(this, "imgNodes", _descriptor2, this);
          _initializerDefineProperty(this, "imgPaths", _descriptor3, this);
        }
        onLoad() {
          this.loadImages();
        }
        loadImages() {
          for (let i = 0; i < this.imgPaths.length; i++) {
            if (!this.imgPaths[i] || !this.imgNodes[i]) continue;
            const url = this.domUrl + this.imgPaths[i];
            const targetNode = this.imgNodes[i];
            targetNode.active = true;
            assetManager.loadRemote(url, (err, imageAsset) => {
              if (err || !targetNode.isValid) return;
              const sprite = targetNode.getComponent(Sprite);
              if (!sprite) return;
              const texture = new Texture2D();
              texture.image = imageAsset;
              const spriteFrame = new SpriteFrame();
              spriteFrame.texture = texture;
              sprite.spriteFrame = spriteFrame;
            });
          }
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "domUrl", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "imgNodes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgPaths", [_dec3], {
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

System.register("chunks:///_virtual/PageHallAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, find, tween, Vec3, Widget;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      find = module.find;
      tween = module.tween;
      Vec3 = module.Vec3;
      Widget = module.Widget;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "60ca9w2f5FLibPkhsCsnI9D", "PageHallAni", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      /**
       * 大厅入场 UI 动画
       *
       * 重构自旧版 PageHall_Ani.js（CC 2.x → CC 3.8.8）
       * 负责大厅激活时的 bg 滑入、侧边按钮渐显、游戏列表缩放动效
       */
      let PageHallAni = exports('PageHallAni', (_dec = ccclass('PageHallAni'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class PageHallAni extends Component {
        constructor(...args) {
          super(...args);
          /** 顶部信息栏节点 */
          _initializerDefineProperty(this, "node_top", _descriptor, this);
          /** 背景节点 */
          _initializerDefineProperty(this, "node_bg", _descriptor2, this);
          /** 游戏列表中间区域节点 */
          _initializerDefineProperty(this, "node_mid", _descriptor3, this);
          /** 侧边 rank 节点 */
          _initializerDefineProperty(this, "node_rank", _descriptor4, this);
          /** 关闭按钮节点 */
          _initializerDefineProperty(this, "node_close", _descriptor5, this);
          /** 缓存原始位置 */
          this._orgTopY = 0;
          this._orgRankX = 0;
          this._orgCloseX = 0;
          this._orgBgScaleX = 1;
          this._orgHeadScale = 1;
        }
        onLoad() {
          this._initOrg();
        }
        onEnable() {
          this.showUIAni();
        }

        /** 播放入场动画 */
        showUIAni() {
          // ——— 顶部信息栏 bg 上滑入 ———
          const top = this.node_top || find('Canvas/UserinfoBar');
          if (top) {
            const bgNode = find('bg', top);
            if (bgNode) {
              const endY = bgNode.position.y;
              bgNode.setPosition(bgNode.position.x, endY + 200, bgNode.position.z);
              tween(bgNode).to(0.3, {
                position: new Vec3(bgNode.position.x, endY, bgNode.position.z)
              }, {
                easing: 'quintOut'
              }).start();
            }

            // 头像缩放弹出
            const headNode = find('head', top);
            if (headNode && this._orgHeadScale > 0) {
              const orgScale = this._orgHeadScale;
              headNode.setScale(orgScale + 0.1, orgScale + 0.1, 1);
              tween(headNode).delay(0.3).to(0.1, {
                scale: new Vec3(orgScale, orgScale, 1)
              }).start();
            }
          }

          // ——— 侧边按钮渐显 ———
          const rightMenu = find('BtnLayout', this.node);
          if (rightMenu) {
            const children = rightMenu.children;
            for (let i = 0; i < children.length; i++) {
              const item = children[i];
              if (item.active) {
                // 用 UIOpacity 渐变（CC 3.x 推荐）
                const opacity = item.getComponent('cc.UIOpacity');
                if (opacity) {
                  opacity.opacity = 0;
                  tween(opacity).delay(i * 0.05).to(0.1, {
                    opacity: 255
                  }).start();
                }
              }
            }
          }

          // ——— 侧边 rank 节点从右侧滑入 ———
          const rankMenu = this.node_rank || find('SimpleRank', this.node);
          if (rankMenu && this._orgRankX !== 0) {
            rankMenu.setPosition(this._orgRankX + 100, rankMenu.position.y, 0);
            tween(rankMenu).to(0.4, {
              position: new Vec3(this._orgRankX, rankMenu.position.y, 0)
            }, {
              easing: 'backOut'
            }).start();
          }

          // ——— 关闭按钮从右侧滑入 ———
          if (this.node_close && this._orgCloseX !== 0) {
            this.node_close.setPosition(this._orgCloseX + 100, this.node_close.position.y, 0);
            tween(this.node_close).to(0.5, {
              position: new Vec3(this._orgCloseX, this.node_close.position.y, 0)
            }, {
              easing: 'backOut'
            }).start();
          }

          // ——— 游戏列表轻微缩放 ———
          const gamelist = this.node_mid || find('Games', this.node);
          if (gamelist) {
            gamelist.setScale(1.05, 1.05, 1);
            tween(gamelist).to(0.8, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'quintOut'
            }).start();
          }

          // ——— 背景轻微缩放 ———
          const bg = this.node_bg || find('bg_img', this.node);
          if (bg && this._orgBgScaleX > 0) {
            const orgScale = this._orgBgScaleX;
            const bgWidget = bg.getComponent(Widget);
            if (bgWidget) bgWidget.enabled = false;
            bg.setScale(orgScale + 0.05, orgScale + 0.05, 1);
            tween(bg).to(0.8, {
              scale: new Vec3(orgScale, orgScale, 1)
            }, {
              easing: 'quintOut'
            }).call(() => {
              if (bgWidget) bgWidget.enabled = true;
            }).start();
          }
        }
        _initOrg() {
          const top = this.node_top || find('Canvas/UserinfoBar');
          if (top) {
            this._reWidgetNode(top);
            this._orgTopY = top.position.y;
            const headNode = find('head', top);
            if (headNode && !this._orgHeadScale) {
              this._orgHeadScale = headNode.scale.x;
            }
          }
          const rankMenu = this.node_rank || find('SimpleRank', this.node);
          if (rankMenu && !this._orgRankX) {
            this._reWidgetNode(rankMenu);
            this._orgRankX = rankMenu.position.x;
          }
          if (this.node_close) {
            this._reWidgetNode(this.node_close);
            this._orgCloseX = this.node_close.position.x;
          }
          const bg = this.node_bg || find('bg_img', this.node);
          if (bg && !this._orgBgScaleX) {
            this._reWidgetNode(bg);
            this._orgBgScaleX = bg.scale.x;
          }
        }
        _reWidgetNode(node) {
          const widgetCmp = node.getComponent(Widget);
          if (widgetCmp) {
            widgetCmp.updateAlignment();
          }
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_top", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_mid", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_rank", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_close", [_dec6], {
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

System.register("chunks:///_virtual/PageTabbar.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, Prefab, CCFloat, _decorator, Component, instantiate;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Prefab = module.Prefab;
      CCFloat = module.CCFloat;
      _decorator = module._decorator;
      Component = module.Component;
      instantiate = module.instantiate;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _dec8, _dec9, _dec10, _class4, _class5, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "0a279ahKB1HTbViTUwzssHU", "PageTabbar", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * TabbarItem 数据（对应旧版 Tabbar.js 的 TabbarItem cc.Class）
       */
      let TabbarItem = exports('TabbarItem', (_dec = ccclass('TabbarItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = class TabbarItem {
        constructor() {
          _initializerDefineProperty(this, "selectNode", _descriptor, this);
          _initializerDefineProperty(this, "unSelectNode", _descriptor2, this);
          _initializerDefineProperty(this, "pageNode", _descriptor3, this);
          _initializerDefineProperty(this, "pagePrefab", _descriptor4, this);
          _initializerDefineProperty(this, "pageParent", _descriptor5, this);
          _initializerDefineProperty(this, "pageOnLoad", _descriptor6, this);
          _initializerDefineProperty(this, "scale", _descriptor7, this);
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selectNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "unSelectNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pageNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pagePrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pageParent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pageOnLoad", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scale", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class));

      /**
       * PageTabbar 选项卡组件
       *
       * 重构自旧版 Tabbar.js（CC 2.x → CC 3.8.8）
       * 管理底部 Tab 切换：显示/隐藏 select/unSelect 节点，切换 pageNode
       */
      let PageTabbar = exports('PageTabbar', (_dec8 = ccclass('PageTabbar'), _dec9 = property({
        type: [TabbarItem]
      }), _dec10 = property({
        type: CCFloat
      }), _dec8(_class4 = (_class5 = class PageTabbar extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "tabs", _descriptor8, this);
          _initializerDefineProperty(this, "defaultIndex", _descriptor9, this);
          _initializerDefineProperty(this, "useSound", _descriptor10, this);
          this._index = -1;
          this._callback = null;
          this._preCallback = null;
        }
        get index() {
          return this._index;
        }
        get indexItem() {
          return this.tabs[this._index];
        }
        onLoad() {
          for (const tabItem of this.tabs) {
            if (tabItem.selectNode) tabItem.selectNode.active = false;
            if (tabItem.unSelectNode) tabItem.unSelectNode.active = true;

            // 从 prefab 实例化页面
            if (tabItem.pagePrefab && tabItem.pageParent) {
              tabItem.pageNode = instantiate(tabItem.pagePrefab);
              tabItem.pageNode.active = tabItem.pageOnLoad;
              tabItem.pageParent.addChild(tabItem.pageNode);
            }
            if (tabItem.pageNode) {
              tabItem.pageNode.active = false;
              tabItem.pageNode.setScale(tabItem.scale, tabItem.scale, 1);
            }

            // 点击未选中节点切换 tab
            if (tabItem.unSelectNode) {
              tabItem.unSelectNode.on(Node.EventType.TOUCH_END, () => {
                if (this.useSound && typeof MEvent !== 'undefined') {
                  MEvent.emit('EVENT_BTN_CLICK_SOUNDS');
                }
                this.onSelectPage(tabItem, false);
              }, this);
            }
          }
          this.setPage(this.defaultIndex);
        }

        /** 设置切换回调 */
        setChangeCallback(callback) {
          this._callback = callback;
        }

        /** 设置切换前回调（return true 可阻断切换） */
        setPreChangeCallback(callback) {
          this._preCallback = callback;
        }

        /** 切换到某个 tab item */
        onSelectPage(tabItem, noPreCheck) {
          if (!noPreCheck && this._preCallback) {
            if (this._preCallback(this.tabs.indexOf(tabItem), tabItem, this.tabs)) return;
          }
          this._index = this.tabs.indexOf(tabItem);
          for (const item of this.tabs) {
            if (item.selectNode) item.selectNode.active = item === tabItem;
            if (item.unSelectNode) item.unSelectNode.active = item !== tabItem;
            if (item.pageNode) item.pageNode.active = item === tabItem;
          }
          if (this._callback) {
            this._callback(this._index, tabItem, this.tabs);
          }
        }

        /** 跳转到指定索引 */
        setPage(index, noPreCheck = false) {
          if (this._index === index) return;
          if (this.tabs[index]) {
            this.onSelectPage(this.tabs[index], noPreCheck);
          }
        }
      }, (_descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "tabs", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "defaultIndex", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "useSound", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class5)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RedHitCmp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, _decorator, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "4744aJxJZJJoZyPh+isDxBG", "RedHitCmp", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * 红点通知组件
       *
       * 重构自旧版 RedHitCmp.js（CC 2.x → CC 3.8.8）
       * 根据 key 监听红点管理器数据，动态显示/隐藏红点与数量
       */
      let RedHitCmp = exports('RedHitCmp', (_dec = ccclass('RedHitCmp'), _dec2 = property(Label), _dec(_class = (_class2 = class RedHitCmp extends Component {
        constructor(...args) {
          super(...args);
          /** 红点 key，多个用逗号分隔 */
          _initializerDefineProperty(this, "key", _descriptor, this);
          /** 数量 Label */
          _initializerDefineProperty(this, "valueLabel", _descriptor2, this);
          /** 是否开启高级模式（互斥key、内存记录） */
          _initializerDefineProperty(this, "advanced", _descriptor3, this);
          /** 互斥 key（当互斥key count > 0 时不显示） */
          _initializerDefineProperty(this, "key_mutually_exclusive", _descriptor4, this);
          /** 是否在内存中记录点击 */
          _initializerDefineProperty(this, "check_memory", _descriptor5, this);
        }
        onLoad() {
          // 注册到全局红点管理器
          if (typeof MRedHit !== 'undefined') {
            MRedHit.register(this);
          }
        }
        onEnable() {
          this.updateView();
        }
        onDestroy() {
          if (typeof MRedHit !== 'undefined') {
            MRedHit.unregister(this);
          }
        }

        /** 更新红点显示（由 MRedHit 管理器调用） */
        updateView() {
          if (!this.key || this.key.length === 0) {
            this.node.active = false;
            return;
          }
          const data = typeof MRedHit !== 'undefined' ? MRedHit.data || {} : {};

          // 互斥 key 检查
          if (this.advanced && this.key_mutually_exclusive) {
            const mutKeys = this.key_mutually_exclusive.split(',').map(k => k.trim());
            let mutCount = 0;
            for (const k of mutKeys) {
              const v = data[k];
              if (v && typeof v === 'object') {
                for (const sub in v) mutCount += v[sub] || 0;
              } else if (v && v > 0) {
                mutCount += v;
              }
            }
            if (mutCount > 0) {
              this.node.active = false;
              return;
            }
          }

          // 内存点击记录检查
          if (this.advanced && this.check_memory) {
            const clickList = typeof MRedHit !== 'undefined' ? MRedHit.clickRecordList || [] : [];
            if (clickList.indexOf(this.key) >= 0) {
              this.node.active = false;
              return;
            }
          }

          // 统计当前 key 的总 count
          const keyArr = this.key.split(',').map(k => k.trim());
          let count = 0;
          for (const k of keyArr) {
            const v = data[k];
            if (v && typeof v === 'object') {
              for (const sub in v) count += v[sub] || 0;
            } else if (v && v > 0) {
              count += v;
            }
          }
          if (count > 0) {
            this.node.active = true;
            if (this.valueLabel) {
              this.valueLabel.string = String(count > 99 ? '99+' : count);
            }
          } else {
            this.node.active = false;
          }
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "key", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "valueLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "advanced", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "key_mutually_exclusive", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "check_memory", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoundRectBg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, CCFloat, _decorator, Component, Graphics, UITransform, Color;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      CCFloat = module.CCFloat;
      _decorator = module._decorator;
      Component = module.Component;
      Graphics = module.Graphics;
      UITransform = module.UITransform;
      Color = module.Color;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "3d9e2IY/fVDsKklWbKncxqF", "RoundRectBg", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      /**
       * 圆角矩形背景组件
       *
       * 对应场景中 6b59cLJx59HsbOgKDvxOg1f 引用的圆角组件（_radius 属性）
       * 使用 cc.Graphics 绘制圆角矩形背景
       */
      let RoundRectBg = exports('RoundRectBg', (_dec = ccclass('RoundRectBg'), _dec2 = property({
        type: CCFloat
      }), _dec3 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = class RoundRectBg extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "_radius", _descriptor, this);
        }
        get radius() {
          return this._radius;
        }
        set radius(v) {
          this._radius = v;
          this.draw();
        }
        onLoad() {
          this.draw();
        }
        draw() {
          let g = this.getComponent(Graphics);
          if (!g) g = this.addComponent(Graphics);
          const ui = this.getComponent(UITransform);
          if (!ui) return;
          const w = ui.contentSize.width;
          const h = ui.contentSize.height;
          const r = this._radius;
          g.clear();
          g.fillColor = new Color(0, 0, 0, 80);
          g.roundRect(-w / 2, -h / 2, w, h, r);
          g.fill();
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_radius", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SafeAreaView.ts", ['cc'], function (exports) {
  var cclegacy, Component, screen, sys, Widget, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      screen = module.screen;
      sys = module.sys;
      Widget = module.Widget;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a57dedUyKxMzr2kgOe4WSjz", "SafeAreaView", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      /**
       * 安全区域适配组件
       *
       * 重构自旧版 SafeWidget.js（CC 2.x → CC 3.8.8）
       * 在 iOS/Android 上适配刘海屏/圆角安全区
       */
      let SafeAreaView = exports('SafeAreaView', (_dec = ccclass('SafeAreaView'), _dec(_class = class SafeAreaView extends Component {
        onEnable() {
          this.updateArea();
          // 监听屏幕尺寸变化
          screen.on('window-resize', this.updateArea, this);
        }
        onDisable() {
          screen.off('window-resize', this.updateArea, this);
        }

        /** 更新安全区域 */
        updateArea() {
          const isNative = sys.isNative;
          const platform = sys.platform;
          if (!isNative && platform !== sys.Platform.MOBILE_BROWSER) {
            // 非移动端不处理
            return;
          }
          const widget = this.getComponent(Widget);
          if (!widget) return;

          // CC 3.x 安全区 API
          const safeArea = sys.getSafeAreaRect == null ? void 0 : sys.getSafeAreaRect();
          if (!safeArea) {
            // 无安全区数据时全铺
            widget.isAlignTop = widget.isAlignBottom = widget.isAlignLeft = widget.isAlignRight = true;
            widget.top = widget.bottom = widget.left = widget.right = 0;
            widget.updateAlignment();
            return;
          }
          const winW = screen.windowSize.width;
          const winH = screen.windowSize.height;
          widget.isAlignTop = widget.isAlignBottom = widget.isAlignLeft = widget.isAlignRight = true;
          widget.top = winH - (safeArea.y + safeArea.height);
          widget.bottom = 0;
          widget.left = safeArea.x;
          widget.right = winW - (safeArea.x + safeArea.width);
          widget.updateAlignment();
        }
      }) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SafeWidget.ts", ['cc'], function (exports) {
  var cclegacy, Widget, Component, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Widget = module.Widget;
      Component = module.Component;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class;
      cclegacy._RF.push({}, "6e75f4OS/tEhIYfK9XjfbgR", "SafeWidget", undefined);
      const {
        ccclass,
        disallowMultiple,
        menu,
        requireComponent
      } = _decorator;
      let SafeWidget = exports('SafeWidget', (_dec = ccclass('SafeWidget'), _dec2 = menu('通用/竖屏安全区域组件'), _dec3 = requireComponent(Widget), _dec(_class = disallowMultiple(_class = _dec2(_class = _dec3(_class = class SafeWidget extends Component {
        onEnable() {
          // this.updateArea(); 
          // cc.view.on('canvas-resize', this.updateArea, this); 
        }
        onDisable() {
          // cc.view.off('canvas-resize', this.updateArea, this); 
        }
        updateArea() {
          // if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) { 
          // } 
          // else { 
          // return 
          // } 
          // let widget = this.node.getComponent(cc.Widget); 
          // if (!widget) { 
          // return; 
          // } 
          // if (CC_EDITOR) { 
          // widget.top = widget.bottom = widget.left = widget.right = 0; 
          // widget.isAlignTop = widget.isAlignBottom = widget.isAlignLeft = widget.isAlignRight = true; 
          // return; 
          // } 
          // widget.updateAlignment(); 
          // let lastPos = this.node.position; 
          // let lastAnchorPoint = this.node.getAnchorPoint(); 
          // widget.isAlignTop = widget.isAlignBottom = widget.isAlignLeft = widget.isAlignRight = true; 
          // let screenWidth = cc.winSize.width, screenHeight = cc.winSize.height; 
          // let safeArea = cc.sys.getSafeAreaRect(); 
          // cc.log(cc.js.formatStr('【winSize】height=%s,width=%s', screenHeight, screenWidth)) 
          // cc.log(cc.js.formatStr('【safeArea】height=%s,width=%s,x=%s,y=%s', safeArea.height, safeArea.width, safeArea.x, safeArea.y)) 
          // widget.top = screenHeight - (safeArea.y + safeArea.height); 
          // widget.bottom = 0; //直接取0,因为在iphoneX中 取出来的 
          // widget.left = safeArea.x; 
          // widget.right = screenWidth - (safeArea.x + safeArea.width); 
          // widget.updateAlignment(); 
          // let curPos = this.node.position; 
          // let anchorX = lastAnchorPoint.x - (curPos.x - lastPos.x) / this.node.width; 
          // let anchorY = lastAnchorPoint.y - (curPos.y - lastPos.y) / this.node.height; 
          // this.node.setAnchorPoint(anchorX, anchorY); 
          // widget.enabled = true; 
        }
      }) || _class) || _class) || _class) || _class));

      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // cc.Class({
      //     extends: cc.Component,
      // 
      //     editor: {
      //         disallowMultiple: false,
      //         menu: '通用/竖屏安全区域组件',
      //         requireComponent: cc.Widget,
      //     },
      // 
      //     onEnable() {
      //         this.updateArea();
      //         cc.view.on('canvas-resize', this.updateArea, this);
      //     },
      // 
      //     onDisable() {
      //         cc.view.off('canvas-resize', this.updateArea, this);
      //     },
      // 
      //     /**
      //      * !#en Adapt to safe area
      //      * !#zh 立即适配安全区域
      //      * @method updateArea
      //      * @example
      //      * let safeArea = this.node.addComponent(cc.SafeArea);
      //      * safeArea.updateArea();
      //      */
      //     updateArea() {
      //         if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) {
      // 
      //         }
      //         else {
      //             return
      //         }
      //         let widget = this.node.getComponent(cc.Widget);
      //         if (!widget) {
      //             return;
      //         }
      //         if (CC_EDITOR) {
      //             widget.top = widget.bottom = widget.left = widget.right = 0;
      //             widget.isAlignTop = widget.isAlignBottom = widget.isAlignLeft = widget.isAlignRight = true;
      //             return;
      //         }
      //         widget.updateAlignment();
      //         let lastPos = this.node.position;
      //         let lastAnchorPoint = this.node.getAnchorPoint();
      //         //
      //         widget.isAlignTop = widget.isAlignBottom = widget.isAlignLeft = widget.isAlignRight = true;
      //         let screenWidth = cc.winSize.width, screenHeight = cc.winSize.height;
      //         let safeArea = cc.sys.getSafeAreaRect();
      // 
      //         cc.log(cc.js.formatStr('【winSize】height=%s,width=%s', screenHeight, screenWidth))
      //         cc.log(cc.js.formatStr('【safeArea】height=%s,width=%s,x=%s,y=%s', safeArea.height, safeArea.width, safeArea.x, safeArea.y))
      // 
      //         widget.top = screenHeight - (safeArea.y + safeArea.height);
      //         widget.bottom = 0; //直接取0,因为在iphoneX中 取出来的
      //         widget.left = safeArea.x;
      //         widget.right = screenWidth - (safeArea.x + safeArea.width);
      //         widget.updateAlignment();
      //         // set anchor, keep the original position unchanged
      //         let curPos = this.node.position;
      //         let anchorX = lastAnchorPoint.x - (curPos.x - lastPos.x) / this.node.width;
      //         let anchorY = lastAnchorPoint.y - (curPos.y - lastPos.y) / this.node.height;
      //         this.node.setAnchorPoint(anchorX, anchorY);
      //         // IMPORTANT: restore to lastPos even if widget is not ALWAYS
      //         widget.enabled = true;
      //     }
      // });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SubSystemLoader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SubSystemManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, Label, ProgressBar, _decorator, Component, assetManager, Prefab, instantiate, MSubSystem;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      _decorator = module._decorator;
      Component = module.Component;
      assetManager = module.assetManager;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      MSubSystem = module.MSubSystem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "da529CEU8BFh6vFEs2wRu2F", "SubSystemLoader", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      /**
       * 子系统加载器
       *
       * 通用组件：处理子系统 Bundle 的按需加载和 UI 显示
       * 挂载在大厅场景中，点击按钮时触发
       *
       * 流程：
       * 1. 显示加载进度 UI
       * 2. 热更新检查（如果需要）
       * 3. 加载 Bundle
       * 4. 从 Bundle 中加载 Prefab 并实例化
       * 5. 挂载到容器节点
       */
      let SubSystemLoader = exports('SubSystemLoader', (_dec = ccclass('SubSystemLoader'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(ProgressBar), _dec(_class = (_class2 = class SubSystemLoader extends Component {
        constructor(...args) {
          super(...args);
          /** 子系统 UI 挂载容器 */
          _initializerDefineProperty(this, "container", _descriptor, this);
          /** 加载中遮罩 */
          _initializerDefineProperty(this, "loadingMask", _descriptor2, this);
          _initializerDefineProperty(this, "loadingLabel", _descriptor3, this);
          _initializerDefineProperty(this, "loadingProgress", _descriptor4, this);
          /** 当前已加载的子系统节点 */
          this._currentNode = null;
          this._currentBundle = '';
        }
        /**
         * 打开子系统
         * @param bundleName Bundle 名称
         * @param prefabPath Bundle 内的 Prefab 路径
         */
        async open(bundleName, prefabPath = 'res/MainPanel') {
          // 如果已经打开同一个子系统，忽略
          if (this._currentBundle === bundleName && this._currentNode) {
            console.log(`[SubSystemLoader] ${bundleName} 已打开`);
            return;
          }

          // 关闭当前子系统
          this.close();
          try {
            // 显示加载 UI
            this.showLoading(MSubSystem.getDisplayName(bundleName));

            // 加载 Bundle
            await MSubSystem.load(bundleName);

            // 从 Bundle 中加载 Prefab
            const bundle = assetManager.getBundle(bundleName);
            if (!bundle) {
              throw new Error(`Bundle 加载后未找到: ${bundleName}`);
            }
            const prefab = await new Promise((resolve, reject) => {
              bundle.load(prefabPath, Prefab, (err, prefab) => {
                if (err) reject(err);else resolve(prefab);
              });
            });

            // 实例化并挂载
            this._currentNode = instantiate(prefab);
            this._currentBundle = bundleName;
            if (this.container) {
              this.container.addChild(this._currentNode);
            }
            this.hideLoading();
            console.log(`[SubSystemLoader] ${bundleName} 已打开`);
          } catch (error) {
            this.hideLoading();
            console.error(`[SubSystemLoader] 打开失败: ${bundleName}`, error);
            throw error;
          }
        }

        /**
         * 关闭当前子系统
         */
        close() {
          if (this._currentNode) {
            this._currentNode.destroy();
            this._currentNode = null;
          }
          if (this._currentBundle) {
            MSubSystem.unload(this._currentBundle);
            this._currentBundle = '';
          }
        }
        showLoading(name) {
          if (this.loadingMask) this.loadingMask.active = true;
          if (this.loadingLabel) this.loadingLabel.string = `加载${name}...`;
          if (this.loadingProgress) this.loadingProgress.progress = 0;
        }
        hideLoading() {
          if (this.loadingMask) this.loadingMask.active = false;
        }
        onDestroy() {
          this.close();
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "container", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadingMask", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loadingLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loadingProgress", [_dec5], {
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

System.register("chunks:///_virtual/ToGameLoading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Sprite, Node, _decorator, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "b52e3o5cuBNDptimGv4atrw", "ToGameLoading", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * 进入游戏加载中界面
       *
       * 重构自旧版 ToGameLoading.ts（CC 2.x → CC 3.8.8）
       * 显示加载中动画，超时自动关闭
       */
      let ToGameLoading = exports('ToGameLoading', (_dec = ccclass('ToGameLoading'), _dec2 = property(Sprite), _dec3 = property(Node), _dec(_class = (_class2 = (_class3 = class ToGameLoading extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "bgSprite", _descriptor, this);
          _initializerDefineProperty(this, "loadingNode", _descriptor2, this);
        }
        onLoad() {
          if (this.loadingNode) {
            this.loadingNode.active = true;
          }

          // 超时自动关闭
          this.scheduleOnce(() => {
            console.warn('[ToGameLoading] 进入房间超时');
            if (typeof MEvent !== 'undefined') {
              MEvent.emit('ShowToast', {
                title: '进入房间失败'
              });
            }
            this.node.destroy();
          }, ToGameLoading.TIMEOUT);
        }

        /** 游戏加载完成后调用 */
        dismiss() {
          this.unscheduleAllCallbacks();
          this.node.destroy();
        }
      }, _class3.TIMEOUT = 12, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadingNode", [_dec3], {
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

System.register("chunks:///_virtual/ToggleRedHit.ts", ['cc'], function (exports) {
  var cclegacy, Component, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "0eaf9S+OpNAdaDZUw0VYYfd", "ToggleRedHit", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      /**
       * ToggleRedHit 组件
       *
       * 对应场景中 d8545zys0dHtZ5ZAVzt5T2h 引用的 Toggle 扩展组件
       * 挂载在 toggle1~toggle6 节点上，属性为空，仅做标记用
       */
      let ToggleRedHit = exports('ToggleRedHit', (_dec = ccclass('ToggleRedHit'), _dec(_class = class ToggleRedHit extends Component {
        onLoad() {
          // Toggle 节点标记，配合 LobbyController 的 Tab 切换逻辑
          console.log('[ToggleRedHit] 初始化:', this.node.name);
        }
      }) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIFixDesign.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Component, size, find, Canvas, view;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      size = module.size;
      find = module.find;
      Canvas = module.Canvas;
      view = module.view;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "2cd56Rs6K9MBqu/rud9Llq1", "UIFixDesign", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let UIFixDesign = exports('UIFixDesign', (_dec = ccclass('UIFixDesign'), _dec(_class = (_class2 = class UIFixDesign extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "resolutionType", _descriptor, this);
        }
        onLoad() {
          this.updateResolution(this.resolutionType);
        }
        updateResolution(type) {
          if (type !== undefined) {
            this.resolutionType = type;
          }
          let _size = size(1080, 1920);
          if (1 == this.resolutionType) {
            _size = size(720, 1560);
          } else if (2 == this.resolutionType) {
            _size = size(1080, 1920);
          }
          this.fixDesignScale_V(this.node, true, _size);
        }
        fixDesignScale_V(node, force, designSize) {
          let doFix = () => {
            var _find;
            let curCanvas = (_find = find("Canvas")) == null ? void 0 : _find.getComponent(Canvas);
            if (!curCanvas) {
              return 1;
            }
            let currentDesignSize = view.getDesignResolutionSize();
            let scaleX = currentDesignSize.width / designSize.width;
            let scaleY = currentDesignSize.height / designSize.height;
            let min = scaleX > scaleY ? scaleY : scaleX;
            if (node) {
              const s = node.scale;
              node.setScale(s.x * min, s.y * min, s.z);
            }
            return min;
          };
          if (force) {
            return doFix();
          }
          return 1;
        }
      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "resolutionType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserCoinCpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, Node, _decorator, Component;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c253arnd8dHzbSciCySW4oT", "UserCoinCpt", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * 金币显示组件
       *
       * 重构自旧版 UserCoinCpt.ts（CC 2.x → CC 3.8.8）
       */
      let UserCoinCpt = exports('UserCoinCpt', (_dec = ccclass('UserCoinCpt'), _dec2 = property(Label), _dec3 = property(Node), _dec(_class = (_class2 = class UserCoinCpt extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "label", _descriptor, this);
          _initializerDefineProperty(this, "iconNode", _descriptor2, this);
        }
        onLoad() {
          if (typeof MEvent !== 'undefined') {
            MEvent.on('UpdateBalance', this.updateCoin, this);
          }
        }
        updateCoin(amount) {
          if (this.label) {
            this.label.string = amount.toLocaleString();
          }
        }
        onDestroy() {
          if (typeof MEvent !== 'undefined') {
            MEvent.targetOff(this);
          }
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconNode", [_dec3], {
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

System.register("chunks:///_virtual/UserDiamondCpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, Node, _decorator, Component;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ddcd2GOr9tLvbk+iqgbn3Ix", "UserDiamondCpt", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * 钻石/代币显示组件
       *
       * 重构自旧版 UserDiamondCpt.ts（CC 2.x → CC 3.8.8）
       */
      let UserDiamondCpt = exports('UserDiamondCpt', (_dec = ccclass('UserDiamondCpt'), _dec2 = property(Label), _dec3 = property(Node), _dec(_class = (_class2 = class UserDiamondCpt extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "label", _descriptor, this);
          _initializerDefineProperty(this, "iconNode", _descriptor2, this);
        }
        onLoad() {
          if (typeof MEvent !== 'undefined') {
            MEvent.on('UpdateDiamond', this.updateDiamond, this);
          }
        }
        updateDiamond(amount) {
          if (this.label) {
            this.label.string = amount.toLocaleString();
          }
        }
        onDestroy() {
          if (typeof MEvent !== 'undefined') {
            MEvent.targetOff(this);
          }
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconNode", [_dec3], {
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

System.register("chunks:///_virtual/UserInfoBar.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MEvent.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, Label, ProgressBar, _decorator, Component, find, MEvent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      _decorator = module._decorator;
      Component = module.Component;
      find = module.find;
    }, function (module) {
      MEvent = module.MEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "bc0259huPdO/opHPNSCIWD5", "UserInfoBar", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * 用户信息栏组件
       *
       * 重构自旧版 UserInfoCmp.js（CC 2.x → CC 3.8.8）
       * 显示：头像、昵称、UID、VIP 进度、金币、优惠钱包、提现余额、邮件红点
       */
      let UserInfoBar = exports('UserInfoBar', (_dec = ccclass('UserInfoBar'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(ProgressBar), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = class UserInfoBar extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "headNode", _descriptor, this);
          _initializerDefineProperty(this, "nameLabel", _descriptor2, this);
          _initializerDefineProperty(this, "uidLabel", _descriptor3, this);
          _initializerDefineProperty(this, "progressLevel", _descriptor4, this);
          _initializerDefineProperty(this, "vipExpNode", _descriptor5, this);
          _initializerDefineProperty(this, "coinNode", _descriptor6, this);
          _initializerDefineProperty(this, "cashNode", _descriptor7, this);
          _initializerDefineProperty(this, "withdrawalNode", _descriptor8, this);
          _initializerDefineProperty(this, "nodeMail", _descriptor9, this);
        }
        onLoad() {
          console.log('[UserInfoBar] onLoad');
          this.registerEvents();
        }
        start() {
          console.log('[UserInfoBar] start, nodeMail assigned:', !!this.nodeMail);
          console.log('[UserInfoBar] hide settings~2');
          this.updateAll();

          // 手动绑定点击事件作为兜底
          if (this.nodeMail) {
            this.nodeMail.on(Node.EventType.TOUCH_END, () => {
              console.log('[UserInfoBar] nodeMail TOUCH_END manual');
              this.onClickMail();
            }, this);
          } else {
            // 尝试通过路径查找
            const emailNode = find('email', this.node);
            if (emailNode) {
              console.log('[UserInfoBar] Found email node via find');
              emailNode.on(Node.EventType.TOUCH_END, () => {
                console.log('[UserInfoBar] email node (found) TOUCH_END manual');
                this.onClickMail();
              }, this);
            }
          }
        }
        registerEvents() {
          if (typeof MEvent === 'undefined') return;
          MEvent.on('UpdateBalance', this.onBalanceUpdate, this);
          MEvent.on('UpdateUserInfo', this.updateInfo, this);
          MEvent.on('UpdateVipExp', this.updateVipExp, this);
          MEvent.on('UpdateUserExp', this.updateExp, this);
          MEvent.on('UpdateUnreadMailCount', this.updateUnreadMailCount, this);
        }

        /** 更新头像和基本信息 */
        updateInfo(userInfo) {
          if (this.nameLabel && userInfo != null && userInfo.nickname) {
            this.nameLabel.string = userInfo.nickname;
          }
          if (this.uidLabel && userInfo != null && userInfo.uid) {
            this.uidLabel.string = userInfo.uid;
          }
          this.updateVipExp();
          this.updateCashBonus();
          this.updateWithdrawal();
        }

        /** 余额更新 */
        onBalanceUpdate(balance) {
          this.updateCoin(balance);
        }

        /** 金币更新 */
        updateCoin(balance) {
          var _find;
          if (!this.coinNode) return;
          const label = (_find = find('lbl_coin', this.coinNode)) == null ? void 0 : _find.getComponent(Label);
          if (label && balance !== undefined) {
            label.string = this.formatNumber(balance);
          }
        }

        /** 经验值更新 */
        updateExp(data) {
          if (!this.progressLevel || !data) return;
          const per = data.maxExp ? Math.min(Math.max(data.exp / data.maxExp, 0), 1) : 0;
          this.progressLevel.progress = per;
        }

        /** VIP 进度条更新（委托给 VipExpCpt） */
        updateVipExp() {
          if (!this.vipExpNode) return;
          const vipCpt = this.vipExpNode.getComponent('VipExpCpt');
          if (vipCpt && typeof vipCpt.updateVipExp === 'function') {
            vipCpt.updateVipExp();
          }
        }

        /** 邮件未读数量更新 */
        updateUnreadMailCount(count) {
          var _find2;
          if (!this.nodeMail) return;
          const nodeRed = find('RedHitAnim', this.nodeMail);
          const labelRed = (_find2 = find('RedHitAnim/val', this.nodeMail)) == null ? void 0 : _find2.getComponent(Label);
          if (!nodeRed || !labelRed) return;
          nodeRed.active = false;
          if (count > 0) {
            labelRed.string = count > 99 ? '99+' : String(count);
            nodeRed.active = true;
          }
        }

        /** 优惠钱包金额 */
        updateCashBonus(data) {
          var _find3, _find4;
          if (!this.cashNode || !data) return;
          const progressBar = (_find3 = find('progress', this.cashNode)) == null ? void 0 : _find3.getComponent(ProgressBar);
          const valueLabel = (_find4 = find('value', this.cashNode)) == null ? void 0 : _find4.getComponent(Label);
          if (progressBar) {
            progressBar.progress = data.cashbonus ? data.dcashbonus / data.cashbonus : 0;
          }
          if (valueLabel) {
            valueLabel.string = `${data.dcashbonus || 0}/${data.cashbonus || 0}`;
          }
        }

        /** 提现余额更新 */
        updateWithdrawal(amount) {
          var _find5;
          if (!this.withdrawalNode) return;
          const label = (_find5 = find('lbl_val', this.withdrawalNode)) == null ? void 0 : _find5.getComponent(Label);
          if (label && amount !== undefined) {
            label.string = this.formatNumber(amount);
          }
        }

        /** 更新全部 */
        updateAll() {
          this.fetchUnreadMailCount();
        }

        /** 获取未读邮件数量 */
        fetchUnreadMailCount() {
          // TODO: 通过 MHttp 请求邮件列表
          // 对比 localStorage 中已读 ID 计算未读数
        }

        // ============ 按钮事件 ============

        onClickAddCoin() {
          console.log('[UserInfoBar] 充值');
          MEvent.emit('OpenCharge');
        }
        onClickAddWithdrawal() {
          console.log('[UserInfoBar] 提现');
          MEvent.emit('OpenCharge');
        }
        onClickMail() {
          console.log('[UserInfoBar] onClickMail triggered');
          if (typeof MEvent !== 'undefined') {
            MEvent.emit('OpenMail');
          } else {
            console.error('[UserInfoBar] MEvent is undefined');
          }
        }
        formatNumber(num) {
          return num.toLocaleString();
        }
        onDestroy() {
          if (typeof MEvent !== 'undefined') {
            MEvent.targetOff(this);
          }
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "headNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "uidLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "progressLevel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "vipExpNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "coinNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "cashNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "withdrawalNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeMail", [_dec10], {
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

System.register("chunks:///_virtual/VipExpCpt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Sprite, Label, ProgressBar, Node, _decorator, Component, find, tween, Vec3;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      find = module.find;
      tween = module.tween;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "f29adbo1bJL8rPtrFZQ7rPq", "VipExpCpt", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      /**
       * VIP 经验进度条组件
       *
       * 重构自旧版 VipExpCpt.ts（CC 2.x → CC 3.8.8）
       * 显示 VIP 等级图标、经验进度条、经验数值
       * 支持升级动画效果
       */
      let VipExpCpt = exports('VipExpCpt', (_dec = ccclass('VipExpCpt'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(ProgressBar), _dec5 = property(Node), _dec(_class = (_class2 = class VipExpCpt extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "icon", _descriptor, this);
          _initializerDefineProperty(this, "label", _descriptor2, this);
          _initializerDefineProperty(this, "progress", _descriptor3, this);
          _initializerDefineProperty(this, "animNode", _descriptor4, this);
          /** 当前 VIP 等级 */
          this._vipLevel = 0;
          /** 当前 VIP 经验 */
          this._vipExp = 0;
          /** 下一级所需经验 */
          this._nextExp = null;
        }
        onLoad() {
          this.node.on(Node.EventType.TOUCH_END, this.onClickVip, this);
        }

        /**
         * 设置 VIP 数据（外部调用）
         */
        setVipData(data) {
          this._vipLevel = data.level;
          this._vipExp = data.exp;
          this._nextExp = data.nextExp;
          if (this.icon && data.iconSpriteFrame) {
            this.icon.spriteFrame = data.iconSpriteFrame;
          }
          this.updateDisplay();
        }

        /** 无动画更新 */
        updateVipNoAnim() {
          this.updateDisplay();
        }

        /** 带动画更新（外部由事件触发） */
        updateVipExp() {
          this.updateDisplay();
          // TODO: 如果有等级变化，播放升级动画
        }

        /** 更新显示 */
        updateDisplay() {
          const cur = this._vipExp;
          const need = this._nextExp;
          let per = need ? cur / need : 1;
          per = Math.min(Math.max(per, 0), 1);
          if (this.label) {
            if (!need) {
              this.label.string = this.formatNumber(cur);
            } else {
              this.label.string = `${this.formatShort(cur)}/${this.formatShort(need)}`;
            }
          }
          if (this.progress) {
            this.progress.progress = per;
          }

          // 锁定图标
          const lock = this.icon ? find('lock', this.icon.node) : null;
          if (lock) {
            lock.active = this._vipLevel <= 0;
          }
        }

        /**
         * 播放升级动画
         * 对应旧版中 tween 驱动的进度条 + 图标缩放效果
         */
        playUpgradeAnim(oldLevel, newLevel) {
          if (!this.animNode || !this.icon || !this.progress) return;

          // 1. 进度条先填满到 100%
          this.animNode.active = true;
          tween(this.progress).to(0.5, {
            progress: 1
          }).call(() => {
            // 2. 重置进度条，切换图标
            this.progress.progress = 0;
            const initScale = this.icon.node.scale.clone();
            tween(this.icon.node).to(0.1, {
              scale: new Vec3(initScale.x * 1.2, initScale.y * 1.2, 1)
            }).call(() => {
              // TODO: 更新 VIP 图标 spriteFrame
            }).to(0.1, {
              scale: initScale
            }).start();
          }).call(() => {
            // 3. 进度条到当前值
            const per = this._nextExp ? this._vipExp / this._nextExp : 1;
            tween(this.progress).to(1, {
              progress: Math.min(per, 1)
            }).call(() => {
              this.animNode.active = false;
            }).start();
          }).start();
        }

        /** 点击 VIP 图标 */
        onClickVip() {
          console.log('[VipExpCpt] 点击 VIP');
          if (typeof MEvent !== 'undefined') {
            MEvent.emit('OpenVip');
          }
        }
        formatNumber(num) {
          return num.toLocaleString();
        }
        formatShort(num) {
          if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
          if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
          return num.toString();
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "animNode", [_dec5], {
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

(function(r) {
  r('virtual:///prerequisite-imports/lobby-casino', 'chunks:///_virtual/lobby-casino'); 
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