System.register("chunks:///_virtual/snapshot",["./SnapshotEntry.ts","./SnapshotView.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SnapshotEntry.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Entry.ts","./Decorators.ts","./SnapshotView.ts"],(function(){var n,t,e,o,r;return{setters:[function(t){n=t.inheritsLoose},function(n){t=n.cclegacy},function(n){e=n.Entry},function(n){o=n.registerEntry},function(n){r=n.SnapshotView}],execute:function(){var s;t._RF.push({},"d51040AeChAwLmHnIUSJrlS","SnapshotEntry",void 0);o("SnapshotEntry","snapshot",r)(s=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.addNetHandler=function(){},o.removeNetHandler=function(){},o.loadResources=function(n){n()},o.initData=function(){},o.pauseMessageQueue=function(){},o.resumeMessageQueue=function(){},e}(e));t._RF.pop()}}}));

System.register("chunks:///_virtual/SnapshotView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameView.ts","./Decorators.ts"],(function(t){var e,n,o,i,r,a,s,c,p,u,l,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.Node,c=t.Sprite,p=t.find,u=t.UITransform},function(t){l=t.default},function(t){h=t.inject}],execute:function(){var f,d,w,y,g,v,S;r._RF.push({},"804d4N0oCRIvZ2gyuHctoPu","SnapshotView",void 0);var b=a.ccclass;a.property,t("SnapshotView",(f=b("SnapshotView"),d=h("girl",s),w=h("girlshow",c),f((v=e((g=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,o(e,"captureNode",v,i(e)),o(e,"showSprite",S,i(e)),e}n(e,t),e.getPrefabUrl=function(){return"prefabs/SnapshotView"};var r=e.prototype;return r.onLoad=function(){t.prototype.onLoad.call(this),this.onN(p("Button",this.node),s.EventType.TOUCH_END,this.onClick),this.onN(p("goBack",this.node),s.EventType.TOUCH_END,this.onGoBack)},r.onClick=function(){var t=this;App.platform.snapshot(this.captureNode,(function(e,n){var o;t.showSprite.spriteFrame=e,null==(o=t.showSprite.node.getComponent(u))||o.setContentSize(n)}))},r.onGoBack=function(){this.backBundle()},e}(l)).prototype,"captureNode",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(g.prototype,"showSprite",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=g))||y));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/snapshot', 'chunks:///_virtual/snapshot'); 
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