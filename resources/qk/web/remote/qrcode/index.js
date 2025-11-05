System.register("chunks:///_virtual/qrcode",["./QRCodeEntry.ts","./QRCodeView.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/QRCodeEntry.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Entry.ts","./Decorators.ts","./QRCodeView.ts"],(function(e){var t,n,o,r,u;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy},function(e){o=e.Entry},function(e){r=e.registerEntry},function(e){u=e.default}],execute:function(){var i;n._RF.push({},"54119QnINdAg5/wIPcKgdC3","QRCodeEntry",void 0);e("default",r("QRCodeEntry","qrcode",u)(i=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var o=n.prototype;return o.addNetHandler=function(){},o.removeNetHandler=function(){},o.loadResources=function(e){e()},o.initData=function(){},o.pauseMessageQueue=function(){},o.resumeMessageQueue=function(){},n}(o))||i);n._RF.pop()}}}));

System.register("chunks:///_virtual/QRCodeView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameView.ts","./UIQRCode.ts","./Decorators.ts","./Config.ts"],(function(e){var t,o,n,i,r,a,c,u,l,s,d,p,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,c=e.Node,u=e.EditBox,l=e.Component},function(e){s=e.default},function(e){d=e.default},function(e){p=e.inject},function(e){f=e.BundleType}],execute:function(){var b,g,h,y,C,w,m,v,R,x,T;r._RF.push({},"08087+Ra+REO42qmNAdm550","QRCodeView",void 0);var E=a.ccclass;a.property,e("default",(b=E("QRCodeView"),g=p("goback",c),h=p("editbox",u),y=p("qrcode",d),C=p("goto",c),b((v=t((m=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,n(t,"goback",v,i(t)),n(t,"editbox",R,i(t)),n(t,"qrcode",x,i(t)),n(t,"goto",T,i(t)),t}o(t,e),t.getPrefabUrl=function(){return"prefabs/QRCodeView"};var r=t.prototype;return r.onLoad=function(){e.prototype.onLoad.call(this),this.onN(this.goback,c.EventType.TOUCH_END,this.backBundle);var t=new l.EventHandler;t.component="QRCodeView",t.target=this.node,t.handler="onTextChanged",this.editbox.textChanged.push(t),this.onN(this.goto,c.EventType.TOUCH_END,this.onGoto)},r.onTextChanged=function(e){this.qrcode.string=e},r.onGoto=function(){this.enterBundle(f[f.multiLogic],{isAttach:!0})},t}(s)).prototype,"goback",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(m.prototype,"editbox",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=t(m.prototype,"qrcode",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(m.prototype,"goto",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=m))||w));r._RF.pop()}}}));

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