System.register("chunks:///_virtual/eventTest",["./EventTestEntry.ts","./EventTestView.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/EventTestEntry.ts",["cc","./Entry.ts","./Decorators.ts","./EventTestView.ts"],(function(){var e,t,n,s;return{setters:[function(t){e=t.cclegacy},function(e){t=e.Entry},function(e){n=e.registerEntry},function(e){s=e.default}],execute:function(){var r;e._RF.push({},"95322x/YUxKqqMiEDYNZhj7","EventTestEntry",void 0);n("EventTestEntry","eventTest",s)(r=class extends t{addNetHandler(){}removeNetHandler(){}loadResources(e){e()}initData(){}pauseMessageQueue(){}resumeMessageQueue(){}});e._RF.pop()}}}));

System.register("chunks:///_virtual/EventTestView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameView.ts","./Decorators.ts","./EventProcessor.ts"],(function(t){var n,e,s,o,i,c,r,l,a,y,u,h,g;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.initializerDefineProperty},function(t){s=t.cclegacy,o=t.Node,i=t.ScrollView,c=t._decorator,r=t.instantiate,l=t.Label,a=t.Tween,y=t.tween},function(t){u=t.default},function(t){h=t.inject},function(t){g=t.EventProcessor}],execute:function(){var p,v,E,d,b,f,w,S,A,L,m,D,T;s._RF.push({},"83bcaILF/BBHYKu/kQiujd/","EventTestView",void 0);const{ccclass:V,property:k}=c;var C=function(t){return t.Sync="Sync",t.Async="Async",t.Log="Log",t}(C||{});class N extends g{addEvents(){this.onD(C.Sync,this.onSyncEvent,10),this.onD(C.Async,this.onAsyncEvent,10)}onSyncEvent(t){return dispatch(C.Log,"TestEvent.onSyncEvent"),"sync"}async onAsyncEvent(t){return dispatch(C.Log,"TestEvent.onAsyncEvent"),await App.utils.delay(1),dispatch(C.Log,"TestEvent.onAsyncEvent end"),"async"}}t("default",(p=V("EventTestView"),v=h("goback",o),E=h("op/sync",o),d=h("op/async",o),b=h("LogView",i),f=h("LogView/view/content/item",o),p((A=n((S=class extends u{constructor(...t){super(...t),e(this,"goback",A,this),e(this,"btnSync",L,this),e(this,"btnAsync",m,this),e(this,"logView",D,this),e(this,"logItem",T,this),this.testEvent=new N}static getPrefabUrl(){return"prefabs/EventTestView"}onLoad(){super.onLoad(),this.onN(this.goback,o.EventType.TOUCH_END,this.backBundle),this.onN(this.btnSync,o.EventType.TOUCH_END,this.onClickSync),this.onN(this.btnAsync,o.EventType.TOUCH_END,this.onClickAsync),this.logItem.removeFromParent(),this.testEvent.onLoad()}onDestroy(){this.testEvent.onDestroy(),super.onDestroy()}addEvents(){super.addEvents(),this.onD(C.Sync,this.onSyncEvent),this.onD(C.Async,this.onAsyncEvent),this.onD(C.Log,this.onLogEvent)}onSyncEvent(t){return this.toLog(`onSyncEvent ${JSON.stringify(t,null,2)}`),t.result?`上一事件处理结果:${t.result}`:"sync"}async onAsyncEvent(t){this.toLog(`onAsyncEvent ${JSON.stringify(t,null,2)}`);let n=t.result;return await App.utils.delay(1),t.result=n,this.toLog(`onAsyncEvent end ${JSON.stringify(t,null,2)}`),t.result?`上一事件处理结果:${t.result}`:"async"}onClickSync(){const t=dispatch(C.Sync);this.toLog(`onClickSync ${t}`)}async onClickAsync(){let t=await dispatchAsync(C.Async);this.toLog(`onClickAsync ${t}`)}onLogEvent(t,n){this.toLog(n)}toLog(t){var n;let e=r(this.logItem);if(e){const n=e.getComponent(l);n&&(n.string=`${Date.format("yyyy-MM-dd hh:mm:ss.SSS")} ${t}`)}null==(n=this.logView.content)||n.addChild(e),a.stopAllByTarget(this.logView),y(this.logView).delay(.1).call((()=>{this.logView.scrollToBottom(1)})).start()}}).prototype,"goback",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=n(S.prototype,"btnSync",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=n(S.prototype,"btnAsync",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=n(S.prototype,"logView",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=n(S.prototype,"logItem",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=S))||w));s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/eventTest', 'chunks:///_virtual/eventTest'); 
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