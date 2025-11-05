System.register("chunks:///_virtual/changeOrientation",["./ChangeOrientationEntry.ts","./ChangeOrientationView.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/ChangeOrientationEntry.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Entry.ts","./Decorators.ts","./ChangeOrientationView.ts"],(function(){var n,t,e,r,i;return{setters:[function(t){n=t.inheritsLoose},function(n){t=n.cclegacy},function(n){e=n.Entry},function(n){r=n.registerEntry},function(n){i=n.default}],execute:function(){var o;t._RF.push({},"bb3b39KYjBIZ4opY+mrTgIC","ChangeOrientationEntry",void 0);r("ChangeOrientationEntry","changeOrientation",i)(o=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.addNetHandler=function(){},r.removeNetHandler=function(){},r.loadResources=function(n){n()},r.initData=function(){},r.pauseMessageQueue=function(){},r.resumeMessageQueue=function(){},e}(e));t._RF.pop()}}}));

System.register("chunks:///_virtual/ChangeOrientationView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameView.ts","./Decorators.ts","./Macros.ts"],(function(e){var n,t,i,o,a,r,c,s,u,l;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){a=e.cclegacy,r=e._decorator,c=e.Node},function(e){s=e.default},function(e){u=e.inject},function(e){l=e.Macro}],execute:function(){var p,h,f,g,d,y,B;a._RF.push({},"c91dfUBt7FP97i+RfHKuaqT","ChangeOrientationView",void 0);var N=r.ccclass;r.property,e("default",(p=N("ChangeOrientationView"),h=u("goBack",c),f=u("content/content/change",c),p((y=n((d=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return n=e.call.apply(e,[this].concat(a))||this,i(n,"goBackBtn",y,o(n)),i(n,"changeNode",B,o(n)),n}t(n,e),n.getPrefabUrl=function(){return App.stageData.isLandscape?"prefabs/ChangeOrientationView":"prefabs/ChangeOrientationViewV"};var a=n.prototype;return a.onLoad=function(){e.prototype.onLoad.call(this),this.onN(this.goBackBtn,c.EventType.TOUCH_END,this.onGoBack),this.onN(this.changeNode,c.EventType.TOUCH_END,this.onChange)},a.onGoBack=function(){this.enterBundle(l.BUNDLE_HALL)},a.onChange=function(){dispatch(l.CHANGE_ORIENTATION)},n}(s)).prototype,"goBackBtn",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=n(d.prototype,"changeNode",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=d))||g));a._RF.pop()}}}));

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