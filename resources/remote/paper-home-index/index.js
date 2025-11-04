System.register("chunks:///_virtual/paper-home-index",["./PaperHomeIndex.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PaperHomeIndex.ts",["cc","./BaseView.ts","./app.ts"],(function(e){var a,o,n,t;return{setters:[function(e){a=e.cclegacy,o=e._decorator},function(e){n=e.default},function(e){t=e.app}],execute:function(){var c;a._RF.push({},"ca4bcX/UNtPC5Vbdc7NhosJ","PaperHomeIndex",void 0);const{ccclass:r,property:s}=o;e("PaperHomeIndex",r("PaperHomeIndex")(c=class extends n{onLoad(){}onShow(e){}onHide(e){return e}goPageGame(){t.manager.ui.show({name:"PageGame"})}showPopTip(){t.manager.ui.show({name:"PopTip"})}})||c);a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/paper-home-index', 'chunks:///_virtual/paper-home-index'); 
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