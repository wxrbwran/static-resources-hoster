System.register("chunks:///_virtual/Config",["./GlobalConfig.ts","./GlobalEvent.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/GlobalConfig.ts",["cc"],(function(e){var t,n,o,r;return{setters:[function(e){t=e.cclegacy,n=e.size,o=e.game,r=e.Layout}],execute:function(){let i;t._RF.push({},"121f2LtRCdIdopt1hGvh3+p","GlobalConfig",void 0),function(e){let t;var i;let a,s;var u;let c,l,g,p;(i=t||(t=e.Constant||(e.Constant={}))).versionStr="1.0.0",i.isShowDebugInfo=!1,function(e){let t=function(e){return e[e.Effect=-99]="Effect",e[e.Music=-98]="Music",e}({});e.Type=t}(a||(a=e.Audio||(e.Audio={}))),(u=s||(s=e.Asset||(e.Asset={}))).bundle=new Proxy(Object.create(null),{get:(e,t)=>t}),u.config=new class{constructor(){this.cacheLifetimeMsNum=1e3,this.retryCountOnLoadFailureNum=0}},function(e){let t=function(e){return e[e["内容"]=0]="内容",e[e["窗口"]=1]="窗口",e[e["提示"]=2]="提示",e[e["引导"]=3]="引导",e[e["警告"]=4]="警告",e[e["加载"]=5]="加载",e[e["错误"]=6]="错误",e}({});e.LayerType=t;let r=function(e){return e[e.None=0]="None",e[e.Adaptive=1]="Adaptive",e[e.FixedSize=2]="FixedSize",e}({});e.AdaptationMode=r;e.adaptationType=r.Adaptive,e.originalDesignSize=n(),e.blockingWarningTimeMsNum=0,e.maskDataTab={nodeNameStr:"遮罩",prefabPathStr:"db://assets/resources/Module/@Common/Mask/ResourcesCommonMask.prefab"},e.config=new class{constructor(){this.layerSpacingNum=100,this.layerRefreshIntervalMsNum=o.frameTime,this.windowAnimationTab={open:{"无":null},close:{"无":null}}}}}(c||(c=e.View||(e.View={}))),function(e){const t={zhCn:{dire:r.HorizontalDirection.LEFT_TO_RIGHT,supportStrList:["zh","zh-tw"]},enUs:{dire:r.HorizontalDirection.LEFT_TO_RIGHT,supportStrList:["en"]}};e.typeTab=t,e.types=new Proxy({},{get:(e,t)=>t}),e.defaultTypeStr="auto",e.argsHeadStr="{",e.argsTailStr="}"}(l||(l=e.Language||(e.Language={}))),function(e){let t=function(e){return e[e.None=0]="None",e[e.Debug=1]="Debug",e[e.Log=2]="Log",e[e.Warn=4]="Warn",e[e.Error=8]="Error",e[e.DebugUp=15]="DebugUp",e[e.LogUp=14]="LogUp",e[e.WarnUp=12]="WarnUp",e}({});e.Level=t;let n=function(e){return e[e.MK=0]="MK",e[e.Console=1]="Console",e[e.CC=2]="CC",e}({});e.LogObjectType=n;e.config=new class{constructor(){this.cacheRowNum=100,this.errorUploadAddrStr="",this.levelNum=t.Error,this.logObjectType=n.Console,this.errorHandlingFunc=void 0}}}(g||(g=e.Log||(e.Log={}))),(p||(p=e.Network||(e.Network={}))).protoHeadKeyTab=new Proxy(Object.create(null),{get:(e,t)=>t})}(i||(i={}));e("default",i);t._RF.pop()}}}));

System.register("chunks:///_virtual/GlobalEvent.ts",["cc"],(function(r){var e,t;return{setters:[function(r){e=r.cclegacy,t=r.EventTarget}],execute:function(){e._RF.push({},"f8c37Ev7a5B86yXhi5W8Etk","GlobalEvent",void 0);r("default",new class extends t{constructor(...r){super(...r),this.key=new Proxy(Object.create(null),{get:(r,e)=>e})}on(r,e,t,s){return Array.isArray(r)?(r.forEach((r=>{super.on(r,e,t,s)})),null):super.on(r,e,t,s)}once(r,e,t){return Array.isArray(r)?(r.forEach((r=>{super.once(r,e,t)})),null):super.once(r,e,t)}off(r,e,t){Array.isArray(r)?r.forEach((r=>{super.off(r,e,t)})):super.off(r,e,t)}emit(r,...e){Array.isArray(r)?r.forEach((r=>{super.emit(r,...e)})):super.emit(r,...e)}has(r,e,t){return super.hasEventListener(r,e,t)}request(r,...e){if(Array.isArray(r)){const t=[];return r.forEach((r=>{t.push(...this._requestSingle(r,...e))})),t}return this._requestSingle(r,...e)}_requestSingle(r,...e){var t;const s=[],a=null==(t=this._callbackTable[r])?void 0:t.callbackInfos;return a?(a.forEach((r=>{const e=r.callback,t=r.target;r.callback=(...a)=>{s.push(e.call(t,...a)),r.callback=e}})),this.emit(r,...e),s):s}});e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/Config', 'chunks:///_virtual/Config'); 
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