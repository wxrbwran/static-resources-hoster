System.register("chunks:///_virtual/page-home",["./PageHome.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PageHome.ts",["cc","./BaseView.ts","./app.ts"],(function(a){var e,o,i,n;return{setters:[function(a){e=a.cclegacy,o=a._decorator},function(a){i=a.default},function(a){n=a.app}],execute:function(){var s,t;e._RF.push({},"ad6e8toxClKb47LeZ1vVlWg","PageHome",void 0);const{ccclass:d,property:r}=o;a("PageHome",d("PageHome")(((t=class a extends i{constructor(...a){super(...a),this.miniViews=["PaperHomeIndex"]}onLoad(){}beforeShow(e){a.first?(e(),this.initUI(),a.first=!1):this.initUI(e)}onShow(a){}onHide(a){return a}initUI(a){this.showMiniViews({views:this.miniViews,onFinish(){n.manager.sound.playMusic({name:"music/home"}),a&&a(),n.lib.task.createSync().add((a=>n.manager.ui.load("PopTip",a))).add((a=>n.manager.ui.load("PageGame",a))).add((a=>n.manager.ui.load("PaperGameIndex",a))).add((a=>n.manager.sound.load("music/war",a))).add((a=>n.manager.sound.load("effect/shoot",a))).add((a=>n.manager.sound.load("effect/hit",a))).add((a=>n.manager.sound.load("effect/eat",a))).add((a=>n.manager.ui.load("PopOver",a))).add((a=>n.manager.sound.load("music/over",a))).start()}})}}).first=!0,s=t))||s);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/page-home', 'chunks:///_virtual/page-home'); 
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