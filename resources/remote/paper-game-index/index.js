System.register("chunks:///_virtual/paper-game-index",["./PaperGameIndex.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PaperGameIndex.ts",["cc","./BaseView.ts","./app.ts"],(function(e){var a,n,o,t;return{setters:[function(e){a=e.cclegacy,n=e._decorator},function(e){o=e.default},function(e){t=e.app}],execute:function(){var r;a._RF.push({},"d13a5nkMFdBY5CjoTgjGzN5","PaperGameIndex",void 0);const{ccclass:c,property:s}=n;e("PaperGameIndex",c("PaperGameIndex")(r=class extends o{onLoad(){}onShow(e){}onHide(e){return e}backPageHome(){t.manager.ui.show({name:"PageHome"})}showPopTip(){t.manager.ui.show({name:"PopTip"})}})||r);a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/paper-game-index', 'chunks:///_virtual/paper-game-index'); 
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