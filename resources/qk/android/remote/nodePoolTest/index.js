System.register("chunks:///_virtual/nodePoolTest",["./NodePoolTestEntry.ts","./NodePoolView.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/NodePoolTestEntry.ts",["cc","./Entry.ts","./Decorators.ts","./NodePoolView.ts"],(function(){var e,t,o,s;return{setters:[function(t){e=t.cclegacy},function(e){t=e.Entry},function(e){o=e.registerEntry},function(e){s=e.default}],execute:function(){var n;e._RF.push({},"c1472GyO+BNCappt1kF9aJB","NodePoolTestEntry",void 0);o("NodePoolTestEntry","nodePoolTest",s)(n=class extends t{addNetHandler(){}removeNetHandler(){}loadResources(e){e()}initData(){}pauseMessageQueue(){}resumeMessageQueue(){}});e._RF.pop()}}}));

System.register("chunks:///_virtual/NodePoolView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameView.ts","./Decorators.ts","./Macros.ts"],(function(t){var e,o,n,i,r,s,l,c,a,h,p,u,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.initializerDefineProperty},function(t){n=t.cclegacy,i=t.Node,r=t._decorator,s=t.find,l=t.instantiate,c=t.UITransform,a=t.Vec3,h=t.randomRangeInt},function(t){p=t.default},function(t){u=t.inject},function(t){d=t.Macro}],execute:function(){var f,N,g,D,y,P,w;n._RF.push({},"34fe2f6pW5P7Iwt1JQOfdnB","NodePoolView",void 0);const{ccclass:E,property:T}=r;t("default",(f=E("NodePoolView"),N=u("star",i),g=u("content",i),f((P=e((y=class extends p{constructor(...t){super(...t),this.pool=null,o(this,"star",P,this),o(this,"content",w,this)}static getPrefabUrl(){return"prefabs/NodePoolView"}onLoad(){super.onLoad(),this.onN(s("goback",this.node),i.EventType.TOUCH_END,(()=>{this.enterBundle(d.BUNDLE_HALL)}));let t=s("op",this.node),e=s("create",t),o=s("delete",t),n=s("get",t),r=s("put",t);this.onN(e,i.EventType.TOUCH_END,this.onCreate),this.onN(o,i.EventType.TOUCH_END,this.onDelete),this.onN(n,i.EventType.TOUCH_END,this.onGet),this.onN(r,i.EventType.TOUCH_END,this.onPut)}onCreate(){this.pool=App.pool.createPool("Star"),this.pool&&(this.pool.cloneNode=l(this.star))}onDelete(){App.pool.deletePool(this.pool),this.pool=null}onGet(){if(null==this.pool)return void Log.e("未创建对象池");if(!this.content)return;let t=this.pool.get();if(!t)return;this.content.addChild(t);let e=this.content.getComponent(c);t.position=new a(h(-e.width/2,e.width/2),h(-e.height/2,e.height/2))}onPut(){null!=this.pool?this.content&&this.content.children.length>0&&this.pool.put(this.content.children[0]):Log.e("未创建对象池")}onDestroy(){this.onDelete(),super.onDestroy()}}).prototype,"star",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=e(y.prototype,"content",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=y))||D));n._RF.pop()}}}));

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