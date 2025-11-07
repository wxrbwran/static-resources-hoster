System.register("chunks:///_virtual/changeOrientation",["./ChangeOrientationEntry.ts","./ChangeOrientationView.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/ChangeOrientationEntry.ts",["cc","./Entry.ts","./Decorators.ts","./ChangeOrientationView.ts"],(function(){var e,t,n,r;return{setters:[function(t){e=t.cclegacy},function(e){t=e.Entry},function(e){n=e.registerEntry},function(e){r=e.default}],execute:function(){var a;e._RF.push({},"bb3b39KYjBIZ4opY+mrTgIC","ChangeOrientationEntry",void 0);n("ChangeOrientationEntry","changeOrientation",r)(a=class extends t{addNetHandler(){}removeNetHandler(){}loadResources(e){e()}initData(){}pauseMessageQueue(){}resumeMessageQueue(){}});e._RF.pop()}}}));

System.register("chunks:///_virtual/ChangeOrientationView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameView.ts","./Decorators.ts","./Macros.ts"],(function(e){var t,n,i,a,o,r,c,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.initializerDefineProperty},function(e){i=e.cclegacy,a=e.Node,o=e._decorator},function(e){r=e.default},function(e){c=e.inject},function(e){s=e.Macro}],execute:function(){var u,l,h,p,g,f,d;i._RF.push({},"c91dfUBt7FP97i+RfHKuaqT","ChangeOrientationView",void 0);const{ccclass:B,property:N}=o;e("default",(u=B("ChangeOrientationView"),l=c("goBack",a),h=c("content/content/change",a),u((f=t((g=class extends r{constructor(...e){super(...e),n(this,"goBackBtn",f,this),n(this,"changeNode",d,this)}static getPrefabUrl(){return App.stageData.isLandscape?"prefabs/ChangeOrientationView":"prefabs/ChangeOrientationViewV"}onLoad(){super.onLoad(),this.onN(this.goBackBtn,a.EventType.TOUCH_END,this.onGoBack),this.onN(this.changeNode,a.EventType.TOUCH_END,this.onChange)}onGoBack(){this.enterBundle(s.BUNDLE_HALL)}onChange(){dispatch(s.CHANGE_ORIENTATION)}}).prototype,"goBackBtn",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=t(g.prototype,"changeNode",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=g))||p));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/changeOrientation', 'chunks:///_virtual/changeOrientation'); 
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