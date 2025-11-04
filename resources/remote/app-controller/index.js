System.register("chunks:///_virtual/app-controller",["./GameController.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/GameController.ts",["cc","./BaseController.ts"],(function(e){var t,o;return{setters:[function(e){t=e.cclegacy},function(e){o=e.default}],execute:function(){t._RF.push({},"440ee/qNX1PNpG7jqov/BUt","GameController",void 0);class l extends(o()){shoot(e,t){this.emit(l.Event.Shoot,e,t)}enemy(){this.emit(l.Event.Enemy)}prop(e){this.emit(l.Event.Prop,e)}collectBullet(e){this.emit(l.Event.CollectBullet,e)}collectEnemy(e){this.emit(l.Event.CollectEnemy,e)}collectProp(e){this.emit(l.Event.CollectProp,e)}}e("GameController",l),t._RF.pop()}}}));

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