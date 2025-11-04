System.register("chunks:///_virtual/app-controller",["./GameController.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseController.ts"],(function(t){var e,n,o;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy},function(t){o=t.default}],execute:function(){n._RF.push({},"440ee/qNX1PNpG7jqov/BUt","GameController",void 0);t("GameController",function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.shoot=function(t,e){this.emit(n.Event.Shoot,t,e)},o.enemy=function(){this.emit(n.Event.Enemy)},o.prop=function(t){this.emit(n.Event.Prop,t)},o.collectBullet=function(t){this.emit(n.Event.CollectBullet,t)},o.collectEnemy=function(t){this.emit(n.Event.CollectEnemy,t)},o.collectProp=function(t){this.emit(n.Event.CollectProp,t)},n}(o()));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/app-controller', 'chunks:///_virtual/app-controller'); 
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