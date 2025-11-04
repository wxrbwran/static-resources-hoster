System.register("chunks:///_virtual/pop-over",["./PopOver.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PopOver.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./app.ts"],(function(e){var t,o,n,r,i,u,a,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.initializerDefineProperty},function(e){n=e.cclegacy,r=e.Node,i=e._decorator,u=e.Button},function(e){a=e.default},function(e){s=e.app}],execute:function(){var c,p,l,f,d;n._RF.push({},"fa562kEY29D6L5ZjaJWuLY7","PopOver",void 0);const{ccclass:h,property:v}=i;e("PopOver",(c=h("PopOver"),p=v(r),c((d=t((f=class extends a{constructor(...e){super(...e),o(this,"button",d,this)}onLoad(){this.button.on(u.EventType.CLICK,(()=>{s.manager.ui.show({name:"PageHome",onShow:()=>{this.hide()}})}))}onShow(e){}onHide(e){return e}}).prototype,"button",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),l=f))||l));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/pop-over', 'chunks:///_virtual/pop-over'); 
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