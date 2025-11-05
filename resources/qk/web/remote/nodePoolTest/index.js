System.register("chunks:///_virtual/nodePoolTest",["./NodePoolTestEntry.ts","./NodePoolView.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/NodePoolTestEntry.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Entry.ts","./Decorators.ts","./NodePoolView.ts"],(function(){var e,t,n,o,r;return{setters:[function(t){e=t.inheritsLoose},function(e){t=e.cclegacy},function(e){n=e.Entry},function(e){o=e.registerEntry},function(e){r=e.default}],execute:function(){var u;t._RF.push({},"c1472GyO+BNCappt1kF9aJB","NodePoolTestEntry",void 0);o("NodePoolTestEntry","nodePoolTest",r)(u=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.addNetHandler=function(){},o.removeNetHandler=function(){},o.loadResources=function(e){e()},o.initData=function(){},o.pauseMessageQueue=function(){},o.resumeMessageQueue=function(){},n}(n));t._RF.pop()}}}));

System.register("chunks:///_virtual/NodePoolView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameView.ts","./Decorators.ts","./Macros.ts"],(function(t){var e,o,n,i,r,l,s,a,c,p,h,u,f,d,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,l=t._decorator,s=t.Node,a=t.find,c=t.instantiate,p=t.UITransform,h=t.Vec3,u=t.randomRangeInt},function(t){f=t.default},function(t){d=t.inject},function(t){y=t.Macro}],execute:function(){var g,N,v,D,w,P,T;r._RF.push({},"34fe2f6pW5P7Iwt1JQOfdnB","NodePoolView",void 0);var E=l.ccclass;l.property,t("default",(g=E("NodePoolView"),N=d("star",s),v=d("content",s),g((P=e((w=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))||this).pool=null,n(e,"star",P,i(e)),n(e,"content",T,i(e)),e}o(e,t),e.getPrefabUrl=function(){return"prefabs/NodePoolView"};var r=e.prototype;return r.onLoad=function(){var e=this;t.prototype.onLoad.call(this),this.onN(a("goback",this.node),s.EventType.TOUCH_END,(function(){e.enterBundle(y.BUNDLE_HALL)}));var o=a("op",this.node),n=a("create",o),i=a("delete",o),r=a("get",o),l=a("put",o);this.onN(n,s.EventType.TOUCH_END,this.onCreate),this.onN(i,s.EventType.TOUCH_END,this.onDelete),this.onN(r,s.EventType.TOUCH_END,this.onGet),this.onN(l,s.EventType.TOUCH_END,this.onPut)},r.onCreate=function(){this.pool=App.pool.createPool("Star"),this.pool&&(this.pool.cloneNode=c(this.star))},r.onDelete=function(){App.pool.deletePool(this.pool),this.pool=null},r.onGet=function(){if(null!=this.pool){if(this.content){var t=this.pool.get();if(t){this.content.addChild(t);var e=this.content.getComponent(p);t.position=new h(u(-e.width/2,e.width/2),u(-e.height/2,e.height/2))}}}else Log.e("未创建对象池")},r.onPut=function(){null!=this.pool?this.content&&this.content.children.length>0&&this.pool.put(this.content.children[0]):Log.e("未创建对象池")},r.onDestroy=function(){this.onDelete(),t.prototype.onDestroy.call(this)},e}(f)).prototype,"star",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=e(w.prototype,"content",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=w))||D));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/nodePoolTest', 'chunks:///_virtual/nodePoolTest'); 
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