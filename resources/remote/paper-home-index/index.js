System.register("chunks:///_virtual/paper-home-index",["./PaperHomeIndex.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PaperHomeIndex.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./app.ts"],(function(e){var n,o,t,a,r;return{setters:[function(e){n=e.inheritsLoose},function(e){o=e.cclegacy,t=e._decorator},function(e){a=e.default},function(e){r=e.app}],execute:function(){var c;o._RF.push({},"ca4bcX/UNtPC5Vbdc7NhosJ","PaperHomeIndex",void 0);var i=t.ccclass;t.property,e("PaperHomeIndex",i("PaperHomeIndex")(c=function(e){function o(){return e.apply(this,arguments)||this}n(o,e);var t=o.prototype;return t.onLoad=function(){},t.onShow=function(e){},t.onHide=function(e){return e},t.goPageGame=function(){r.manager.ui.show({name:"PageGame"})},t.showPopTip=function(){r.manager.ui.show({name:"PopTip"})},o}(a))||c);o._RF.pop()}}}));

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