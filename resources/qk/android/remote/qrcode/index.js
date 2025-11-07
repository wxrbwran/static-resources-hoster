System.register("chunks:///_virtual/qrcode",["./QRCodeEntry.ts","./QRCodeView.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/QRCodeEntry.ts",["cc","./Entry.ts","./Decorators.ts","./QRCodeView.ts"],(function(e){var t,n,r,s;return{setters:[function(e){t=e.cclegacy},function(e){n=e.Entry},function(e){r=e.registerEntry},function(e){s=e.default}],execute:function(){var u;t._RF.push({},"54119QnINdAg5/wIPcKgdC3","QRCodeEntry",void 0);e("default",r("QRCodeEntry","qrcode",s)(u=class extends n{addNetHandler(){}removeNetHandler(){}loadResources(e){e()}initData(){}pauseMessageQueue(){}resumeMessageQueue(){}})||u);t._RF.pop()}}}));

System.register("chunks:///_virtual/QRCodeView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameView.ts","./UIQRCode.ts","./Decorators.ts","./Config.ts"],(function(e){var t,o,i,n,r,a,c,s,u,l,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.initializerDefineProperty},function(e){i=e.cclegacy,n=e.Node,r=e.EditBox,a=e._decorator,c=e.Component},function(e){s=e.default},function(e){u=e.default},function(e){l=e.inject},function(e){d=e.BundleType}],execute:function(){var p,h,b,f,g,C,y,m,w,x,R;i._RF.push({},"08087+Ra+REO42qmNAdm550","QRCodeView",void 0);const{ccclass:v,property:E}=a;e("default",(p=v("QRCodeView"),h=l("goback",n),b=l("editbox",r),f=l("qrcode",u),g=l("goto",n),p((m=t((y=class extends s{constructor(...e){super(...e),o(this,"goback",m,this),o(this,"editbox",w,this),o(this,"qrcode",x,this),o(this,"goto",R,this)}static getPrefabUrl(){return"prefabs/QRCodeView"}onLoad(){super.onLoad(),this.onN(this.goback,n.EventType.TOUCH_END,this.backBundle);let e=new c.EventHandler;e.component="QRCodeView",e.target=this.node,e.handler="onTextChanged",this.editbox.textChanged.push(e),this.onN(this.goto,n.EventType.TOUCH_END,this.onGoto)}onTextChanged(e){this.qrcode.string=e}onGoto(){this.enterBundle(d[d.multiLogic],{isAttach:!0})}}).prototype,"goback",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(y.prototype,"editbox",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=t(y.prototype,"qrcode",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(y.prototype,"goto",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=y))||C));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/qrcode', 'chunks:///_virtual/qrcode'); 
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