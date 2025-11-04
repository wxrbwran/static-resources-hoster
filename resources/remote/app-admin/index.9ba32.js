System.register("chunks:///_virtual/app-admin",["./executor.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/executor.ts",["cc","./app.ts","./index4.ts","./index.ts","./index3.ts","./index2.ts","./SoundManager.ts","./UIManager.ts","./GameController.ts"],(function(e){var t,n,a,i,s;return{setters:[function(e){t=e.cclegacy},function(e){n=e.app},null,null,null,null,function(e){a=e.default},function(e){i=e.default},function(e){s=e.GameController}],execute:function(){t._RF.push({},"f187bY5C+FCHKyW84kaJgMh","executor",void 0);e("ViewName",i.ViewName),e("MiniViewName",i.MiniViewName),e("MusicName",a.MusicName),e("EffectName",a.EffectName);Object.assign(n.config,{}),Object.assign(n.data,{}),Object.assign(n.store,{}),Object.assign(n.Controller,{Game:s}),Object.assign(n.controller,{game:s.inst}),t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/app-admin', 'chunks:///_virtual/app-admin'); 
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