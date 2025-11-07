System.register("chunks:///_virtual/snapshot",["./SnapshotEntry.ts","./SnapshotView.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SnapshotEntry.ts",["cc","./Entry.ts","./Decorators.ts","./SnapshotView.ts"],(function(){var e,t,n,s;return{setters:[function(t){e=t.cclegacy},function(e){t=e.Entry},function(e){n=e.registerEntry},function(e){s=e.SnapshotView}],execute:function(){var r;e._RF.push({},"d51040AeChAwLmHnIUSJrlS","SnapshotEntry",void 0);n("SnapshotEntry","snapshot",s)(r=class extends t{addNetHandler(){}removeNetHandler(){}loadResources(e){e()}initData(){}pauseMessageQueue(){}resumeMessageQueue(){}});e._RF.pop()}}}));

System.register("chunks:///_virtual/SnapshotView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameView.ts","./Decorators.ts"],(function(t){var e,o,i,n,r,s,a,c,p,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.initializerDefineProperty},function(t){i=t.cclegacy,n=t.Node,r=t.Sprite,s=t._decorator,a=t.find,c=t.UITransform},function(t){p=t.default},function(t){u=t.inject}],execute:function(){var l,h,d,f,w,S,g;i._RF.push({},"804d4N0oCRIvZ2gyuHctoPu","SnapshotView",void 0);const{ccclass:b,property:y}=s;t("SnapshotView",(l=b("SnapshotView"),h=u("girl",n),d=u("girlshow",r),l((S=e((w=class extends p{constructor(...t){super(...t),o(this,"captureNode",S,this),o(this,"showSprite",g,this)}static getPrefabUrl(){return"prefabs/SnapshotView"}onLoad(){super.onLoad(),this.onN(a("Button",this.node),n.EventType.TOUCH_END,this.onClick),this.onN(a("goBack",this.node),n.EventType.TOUCH_END,this.onGoBack)}onClick(){App.platform.snapshot(this.captureNode,((t,e)=>{var o;this.showSprite.spriteFrame=t,null==(o=this.showSprite.node.getComponent(c))||o.setContentSize(e)}))}onGoBack(){this.backBundle()}}).prototype,"captureNode",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=e(w.prototype,"showSprite",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=w))||f));i._RF.pop()}}}));

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