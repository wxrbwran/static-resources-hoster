System.register("chunks:///_virtual/lobby-casino-email", ['./PopupMailView.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PopupMailView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MEvent.ts', './MHttp.ts', './MAudio.ts', './PopupManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, ScrollView, Node, Button, _decorator, Component, instantiate, find, Label, Vec3, tween, MEvent, MHttp, MAudio, EAudio, PopupManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      ScrollView = module.ScrollView;
      Node = module.Node;
      Button = module.Button;
      _decorator = module._decorator;
      Component = module.Component;
      instantiate = module.instantiate;
      find = module.find;
      Label = module.Label;
      Vec3 = module.Vec3;
      tween = module.tween;
    }, function (module) {
      MEvent = module.MEvent;
    }, function (module) {
      MHttp = module.MHttp;
    }, function (module) {
      MAudio = module.MAudio;
      EAudio = module.EAudio;
    }, function (module) {
      PopupManager = module.PopupManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "f40baaoAE9C+4tp94Ms266L", "PopupMailView", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let PopupMailView = exports('default', (_dec = ccclass('PopupMailView'), _dec2 = property(ScrollView), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Button), _dec(_class = (_class2 = class PopupMailView extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "svMail", _descriptor, this);
          _initializerDefineProperty(this, "nodeMailItemParent", _descriptor2, this);
          _initializerDefineProperty(this, "nodeMailItem", _descriptor3, this);
          _initializerDefineProperty(this, "nodeEmpty", _descriptor4, this);
          _initializerDefineProperty(this, "btnDeleteAll", _descriptor5, this);
          this.data = null;
          this.mailItems = [];
          this.STORAGE_KEY_READ_MAILS = "read_mail_ids";
          this.readMailIds = new Set();
        }
        onLoad() {
          if (this.nodeMailItem) this.nodeMailItem.active = false;
          this.loadReadMailIds();
          this.playEnterAnim();
        }
        onEnable() {
          this.reqInfo();
        }

        /** 从本地缓存加载已读邮件ID列表 */
        loadReadMailIds() {
          try {
            let storedData = localStorage.getItem(this.STORAGE_KEY_READ_MAILS);
            if (storedData) {
              let ids = JSON.parse(storedData);
              this.readMailIds = new Set(ids);
            }
          } catch (error) {
            console.error("加载已读邮件ID失败:", error);
            this.readMailIds = new Set();
          }
        }

        /** 保存已读邮件ID列表到本地缓存 */
        saveReadMailIds() {
          try {
            let ids = Array.from(this.readMailIds);
            localStorage.setItem(this.STORAGE_KEY_READ_MAILS, JSON.stringify(ids));
          } catch (error) {
            console.error("保存已读邮件ID失败:", error);
          }
        }

        /** 标记邮件为已读 */
        markMailAsRead(mailId) {
          if (!this.readMailIds.has(mailId)) {
            this.readMailIds.add(mailId);
            this.saveReadMailIds();
          }
        }

        /** 检查邮件是否已读 */
        isMailRead(mailId) {
          return this.readMailIds.has(mailId);
        }
        reqInfo() {
          console.log('[PopupMailView] Using mock data for testing');
          this.useMockData();
        }
        useMockData() {
          this.data = {
            mailList: [{
              mid: '101',
              createTime: Date.now() - 3600000,
              Info: [{
                title: 'Welcome',
                content: 'Welcome to our casino game! Enjoy your stay and have fun.'
              }]
            }, {
              mid: '102',
              createTime: Date.now() - 86400000,
              Info: [{
                title: 'Special Offer',
                content: 'Recharge today to get 100% bonus up to 1000 coins!'
              }]
            }]
          };
          this.refresh();
        }
        reqDelete() {
          if (!this.data || !this.data.mailList) return;
          let ids = [];
          for (let i = 0; i < this.data.mailList.length; i++) {
            ids.push(this.data.mailList[i].mid);
          }
          if (typeof MHttp === 'undefined') {
            // Mock delete
            for (let i = 0; i < ids.length; i++) {
              this.readMailIds.delete(ids[i].toString());
            }
            this.saveReadMailIds();
            this.data.mailList = [];
            this.refresh();
            return;
          }

          // Real API call
          MHttp.request({
            url: '/delete_mail',
            method: 'POST',
            data: {
              mids: ids
            },
            success: res => {
              if (res.code === 0) {
                for (let i = 0; i < ids.length; i++) {
                  this.readMailIds.delete(ids[i].toString());
                }
                this.saveReadMailIds();
                this.reqInfo();
              }
            }
          });
        }
        refresh() {
          if (this.btnDeleteAll) this.btnDeleteAll.node.active = false;
          this.clearMailItems();
          if (!this.data || !this.data.mailList || this.data.mailList.length === 0) {
            this.showEmpty(true);
            return;
          }
          this.showEmpty(false);
          let mailList = this.data.mailList;
          for (let i = 0; i < mailList.length; i++) {
            let mailData = mailList[i];
            if (this.nodeMailItem && this.nodeMailItemParent) {
              let item = instantiate(this.nodeMailItem);
              item.active = true;
              item.parent = this.nodeMailItemParent;
              this.mailItems.push(item);
              this.renderItem(item, mailData);
            }
          }
          if (this.btnDeleteAll) this.btnDeleteAll.node.active = mailList.length > 0;
          let max_mid = 0;
          if (mailList.length > 0) {
            max_mid = mailList[0].mid;
          }
          localStorage.setItem('message_last_show_mid', max_mid.toString());
        }
        clearMailItems() {
          for (let i = 0; i < this.mailItems.length; i++) {
            this.mailItems[i].destroy();
          }
          this.mailItems = [];
        }
        showEmpty(show) {
          if (this.nodeEmpty) {
            this.nodeEmpty.active = show;
          }
        }
        renderItem(item, itemData) {
          let lblTitle = find("lbl_title", item);
          let lblContent = find("lbl_content", item);
          let lblTime = find("lbl_time", item);
          if (lblTitle && itemData.Info && itemData.Info.length > 0) {
            lblTitle.getComponent(Label).string = itemData.Info[0].title || "";
          }
          if (lblContent && itemData.Info && itemData.Info.length > 0) {
            let content = itemData.Info[0].content || "";
            // 最多显示100个字符，超出部分用省略号表示
            if (content.length > 100) {
              content = content.substring(0, 100) + "...";
            }
            let labelComp = lblContent.getComponent(Label);
            if (labelComp) {
              labelComp.string = content;
              labelComp.enableWrapText = content.length > 45;
              labelComp.overflow = Label.Overflow.CLAMP;
            }
          }
          if (lblTime) {
            let timeStr = this.formatTime(itemData.createTime);
            lblTime.getComponent(Label).string = timeStr;
          }
          this.updateReadStatus(item, itemData);

          // 添加点击事件
          item.on(Node.EventType.TOUCH_END, () => {
            this.onMailItemClick(item, itemData);
          }, this);
        }
        updateReadStatus(item, itemData) {
          let markNew = find("red/new", item) || find("new", item);
          let mailId = itemData.mid ? itemData.mid.toString() : "";
          let isRead = this.isMailRead(mailId);
          if (markNew) {
            markNew.active = !isRead;
          }
        }
        onMailItemClick(item, itemData) {
          if (typeof MAudio !== 'undefined') MAudio.playOneShot(EAudio.Click);
          let mailId = itemData.mid ? itemData.mid.toString() : "";
          this.markMailAsRead(mailId);
          this.updateReadStatus(item, itemData);

          // 使用 PopupManager 打开详情
          PopupManager.addPopup('res/PopupMailInfo', {
            bundle: 'lobby-casino-email',
            onShow: node => {
              let comp = node.getComponent('PopupMailInfo');
              if (comp && comp.setData) {
                comp.setData(itemData, this);
              }
            }
          });
        }
        formatTime(timestamp) {
          let date = new Date(timestamp);
          let month = (date.getMonth() + 1).toString().padStart(2, '0');
          let day = date.getDate().toString().padStart(2, '0');
          let year = date.getFullYear();
          let hour = date.getHours().toString().padStart(2, '0');
          let minute = date.getMinutes().toString().padStart(2, '0');
          let second = date.getSeconds().toString().padStart(2, '0');
          return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
        }
        onBtnDelete() {
          if (typeof MAudio !== 'undefined') MAudio.playOneShot(EAudio.Click);
          this.reqDelete();
        }
        onDisable() {
          this.clearMailItems();
          let unreadCount = this.getUnreadMailCount();
          if (typeof MEvent !== 'undefined') {
            MEvent.emit("UpdateUnreadMailCount", unreadCount);
          }
        }
        getUnreadMailCount() {
          if (!this.data || !this.data.mailList) return 0;
          let unreadCount = 0;
          for (let i = 0; i < this.data.mailList.length; i++) {
            let mailData = this.data.mailList[i];
            let mailId = mailData.mid ? mailData.mid.toString() : "";
            if (!this.isMailRead(mailId)) {
              unreadCount++;
            }
          }
          return unreadCount;
        }
        playEnterAnim() {
          const startPos = new Vec3(0, 1000, 0);
          const endPos = new Vec3(0, 0, 0);
          this.node.setPosition(startPos);
          tween(this.node).to(0.4, {
            position: endPos
          }, {
            easing: 'backOut'
          }).start();
        }
        onClickClose() {
          if (typeof MAudio !== 'undefined') MAudio.playOneShot(EAudio.Close);
          tween(this.node).to(0.3, {
            position: new Vec3(0, 1000, 0)
          }, {
            easing: 'backIn'
          }).call(() => {
            this.node.destroy();
          }).start();
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "svMail", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeMailItemParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeMailItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeEmpty", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnDeleteAll", [_dec6], {
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
  r('virtual:///prerequisite-imports/lobby-casino-email', 'chunks:///_virtual/lobby-casino-email'); 
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