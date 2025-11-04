System.register("chunks:///_virtual/pop-over",["./PopOver.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PopOver.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./app.ts"],(function(t){var n,e,o,r,i,a,u,c,p,s;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,u=t.Node,c=t.Button},function(t){p=t.default},function(t){s=t.app}],execute:function(){var l,f,h,v,d;i._RF.push({},"fa562kEY29D6L5ZjaJWuLY7","PopOver",void 0);var y=a.ccclass,b=a.property;t("PopOver",(l=y("PopOver"),f=b(u),l((d=n((v=function(t){function n(){for(var n,e=arguments.length,i=new Array(e),a=0;a<e;a++)i[a]=arguments[a];return n=t.call.apply(t,[this].concat(i))||this,o(n,"button",d,r(n)),n}e(n,t);var i=n.prototype;return i.onLoad=function(){var t=this;this.button.on(c.EventType.CLICK,(function(){s.manager.ui.show({name:"PageHome",onShow:function(){t.hide()}})}))},i.onShow=function(t){},i.onHide=function(t){return t},n}(p)).prototype,"button",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=v))||h));i._RF.pop()}}}));

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