System.register("chunks:///_virtual/BetRecordsController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BetRecordsStore.ts"],(function(t){var e,o,i,r,s,n,l,c,a,h,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.initializerDefineProperty},function(t){i=t.cclegacy,r=t.Color,s=t.ScrollView,n=t.Node,l=t._decorator,c=t.Component,a=t.instantiate,h=t.Label},function(t){u=t.getBetRecordsStore}],execute:function(){var g,m,d,p,_,f,y,B,b,C,w;i._RF.push({},"07401DmxXpJtqJ17/BMoq50","BetRecordsController",void 0);const{ccclass:N,property:S}=l,v=new r(255,180,0),x=new r(76,175,80);t("BetRecordsController",(g=N("BetRecordsController"),m=S(s),d=S(n),p=S(n),_=S(n),g((B=e((y=class extends c{constructor(...t){super(...t),o(this,"scrollView",B,this),o(this,"itemTemplate",b,this),o(this,"content",C,this),o(this,"closeBtn",w,this),this.store=u(),this._itemNodes=[],this._hasMore=!0,this._loading=!1,this._nextCursor=""}onLoad(){this.itemTemplate&&(this.itemTemplate.active=!1),this.scrollView.node.on("scrolling",this._onScrolling,this),this.closeBtn&&this.closeBtn.on(n.EventType.TOUCH_END,(()=>{var t;null==(t=this.node.parent)||t.destroy()}),this)}onEnable(){this._resetData(),this._clearItemNodes(),this._fetchBetLogs()}onDisable(){this._clearItemNodes()}onDestroy(){this.scrollView.node.off("scrolling",this._onScrolling,this)}_resetData(){this._hasMore=!0,this._loading=!1,this._nextCursor=""}_clearItemNodes(){for(const t of this._itemNodes)t&&t.isValid&&t.destroy();this._itemNodes=[]}async _fetchBetLogs(){if(!this._loading){this._loading=!0;try{const t=await this.store.fetchBetLogs(this._nextCursor,20);this._hasMore=t.hasMore,this._nextCursor=t.nextCursor??"";const e=t.betLogs??[];for(const t of e)this._createItem(t)}catch(t){console.error("[BetRecords] fetchBetLogs error:",t)}finally{this._loading=!1}}}_createItem(t){var e,o,i;const r=a(this.itemTemplate);r.active=!0,r.parent=this.content;const s=null==(e=r.getChildByName("Time"))?void 0:e.getComponent(h);s&&(s.string=this._formatTime(t.time));const n=null==(o=r.getChildByName("GameName"))?void 0:o.getComponent(h);n&&(n.string=t.name??"");const l=null==(i=r.getChildByName("Amount"))?void 0:i.getComponent(h);l&&(l.string=Number(t.betAmount??0).toFixed(2));const c=r.getChildByName("PrizeResult");if(c){const e=c.getComponent(h);if(e){const o=Number(t.winAmount??0);o>0?(e.string="+"+o.toFixed(2),e.color=v):(e.string="0",e.color=x)}}this._itemNodes.push(r)}_onScrolling(){if(this._loading||!this._hasMore)return;const t=this.scrollView.getScrollOffset();this.scrollView.getMaxScrollOffset().y-t.y<=100&&this._fetchBetLogs()}_formatTime(t){if(!t)return"";const e=new Date(t);return`${`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`}\n${`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}:${String(e.getSeconds()).padStart(2,"0")}`}`}}).prototype,"scrollView",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=e(y.prototype,"itemTemplate",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=e(y.prototype,"content",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=e(y.prototype,"closeBtn",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=y))||f));i._RF.pop()}}}));

System.register("chunks:///_virtual/BetRecordsStore.ts",["cc"],(function(t){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){t("getBetRecordsStore",(function(){o||(o=new r);return o})),e._RF.push({},"f1f2a4ttTRGnI+TqrAKL56Q","BetRecordsStore",void 0);class r{get http(){const t=globalThis.__CO_HTTP_CLIENT__;if(!t)throw new Error("[BetRecordsStore] HttpClient not available");return t}async fetchBetLogs(t,e){return(await this.http.get("/api/php/betLog/fetchBetLogs",{cursor:t,size:e})).data}}let o;t("BetRecordsStore",r),e._RF.pop()}}}));

System.register("chunks:///_virtual/BetRecordsTypes.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"f0eee2VoABE4YjIH67oN82o","BetRecordsTypes",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/lobby-bet-records",["./BetRecordsController.ts","./BetRecordsStore.ts","./BetRecordsTypes.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/lobby-bet-records', 'chunks:///_virtual/lobby-bet-records'); 
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