System.register("chunks:///_virtual/aimLine",["./AimLineEntry.ts","./AimLineView.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/AimLineEntry.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Entry.ts","./Decorators.ts","./AimLineView.ts"],(function(){var n,e,t,i,r;return{setters:[function(e){n=e.inheritsLoose},function(n){e=n.cclegacy},function(n){t=n.Entry},function(n){i=n.registerEntry},function(n){r=n.default}],execute:function(){var u;e._RF.push({},"1fa51Dde41Gjq58z70dMS4G","AimLineEntry",void 0);i("AimLineEntry","aimLine",r)(u=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var i=t.prototype;return i.addNetHandler=function(){},i.removeNetHandler=function(){},i.loadResources=function(n){n()},i.initData=function(){},i.pauseMessageQueue=function(){},i.resumeMessageQueue=function(){},t}(t));e._RF.pop()}}}));

System.register("chunks:///_virtual/AimLineView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameView.ts","./Macros.ts","./Decorators.ts"],(function(t){var e,i,s,n,c,o,a,r,h,u,p,l,V,d,g,m,f,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,s=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){c=t.cclegacy,o=t._decorator,a=t.Graphics,r=t.Vec2,h=t.Vec3,u=t.find,p=t.Node,l=t.PhysicsSystem2D,V=t.EPhysics2DDrawFlags,d=t.ERaycast2DType,g=t.UITransform},function(t){m=t.default},function(t){f=t.Macro},function(t){y=t.inject}],execute:function(){var v,T,L,E,w;c._RF.push({},"2a2cfKsXjlBGY/e6Fg9bREH","AimLineView",void 0);var A=o.ccclass;o.property,t("default",(v=A("AimLineView"),T=y("graphics",a),v((w=e((E=function(t){function e(){for(var e,i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return e=t.call.apply(t,[this].concat(c))||this,s(e,"graphics",w,n(e)),e.curLenght=0,e.AIM_LINE_MAX_LENGTH=1800,e.outVec=new r,e.tempVec=new r,e.outVec3=new h,e.tempVec3=new h,e}i(e,t),e.getPrefabUrl=function(){return"prefabs/AimLineView"};var c=e.prototype;return c.onLoad=function(){t.prototype.onLoad.call(this),this.onN(u("goBack",this.node),p.EventType.TOUCH_END,this.onGoBack),l.instance.enable=!0,l.instance.debugDrawFlags=V.All,this.onN(this.graphics.node,p.EventType.TOUCH_START,this.onTouchStart),this.onN(this.graphics.node,p.EventType.TOUCH_MOVE,this.onTouchMove),this.onN(this.graphics.node,p.EventType.TOUCH_END,this.onTouchEnd),this.onN(this.graphics.node,p.EventType.TOUCH_CANCEL,this.onTouchEnd)},c.onTouchStart=function(t){this.graphics.clear()},c.onTouchMove=function(t){this.graphics.clear(),this.curLenght=0;var e=t.getUIStartLocation(),i=t.getUILocation();this.drawRayCast(e,i.subtract(e).normalize()),this.graphics.stroke()},c.onTouchEnd=function(t){this.graphics.clear()},c.onGoBack=function(){this.enterBundle(f.BUNDLE_HALL)},c.drawRayCast=function(t,e){var i=this.AIM_LINE_MAX_LENGTH-this.curLenght;if(!(i<=0)){this.tempVec.set(e),r.add(this.outVec,t,this.tempVec.multiplyScalar(i));var s=l.instance.raycast(t,this.outVec,d.Closest,1);if(s.length>0){var n=s[0],c=n.point;this.drawAimLine(t,c),this.tempVec.set(c);var o=this.tempVec.subtract(t).length();this.curLenght+=o;var a=n.normal;this.tempVec.set(e);var h=this.tempVec,u=h.dot(a),p=a.multiplyScalar(2*u),V=h.subtract(p);this.drawRayCast(c,V)}else this.drawAimLine(t,this.outVec)}},c.drawAimLine=function(t,e){var i=this.graphics.node.getComponent(g);this.tempVec3.set(t.x,t.y,0),i.convertToNodeSpaceAR(this.tempVec3,this.outVec3),this.graphics.moveTo(this.outVec3.x,this.outVec3.y);r.subtract(this.outVec,e,t);var s=Math.round(this.outVec.length()/20);this.outVec.normalize().multiplyScalar(20);for(var n=0;n<s;n++)this.tempVec3.set(this.outVec.x,this.outVec.y),this.outVec3.add(this.tempVec3),this.graphics.circle(this.outVec3.x,this.outVec3.y,2)},e}(m)).prototype,"graphics",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=E))||L));c._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/aimLine', 'chunks:///_virtual/aimLine'); 
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