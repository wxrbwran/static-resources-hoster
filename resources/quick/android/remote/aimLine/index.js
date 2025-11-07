System.register("chunks:///_virtual/aimLine",["./AimLineEntry.ts","./AimLineView.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/AimLineEntry.ts",["cc","./Entry.ts","./Decorators.ts","./AimLineView.ts"],(function(){var e,t,n,r;return{setters:[function(t){e=t.cclegacy},function(e){t=e.Entry},function(e){n=e.registerEntry},function(e){r=e.default}],execute:function(){var s;e._RF.push({},"1fa51Dde41Gjq58z70dMS4G","AimLineEntry",void 0);n("AimLineEntry","aimLine",r)(s=class extends t{addNetHandler(){}removeNetHandler(){}loadResources(e){e()}initData(){}pauseMessageQueue(){}resumeMessageQueue(){}destroy(){}});e._RF.pop()}}}));

System.register("chunks:///_virtual/AimLineView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameView.ts","./Macros.ts","./Decorators.ts"],(function(t){var e,s,i,c,o,n,h,a,r,u,p,l,V,d,g,m;return{setters:[function(t){e=t.applyDecoratedDescriptor,s=t.initializerDefineProperty},function(t){i=t.cclegacy,c=t.Graphics,o=t._decorator,n=t.Vec2,h=t.Vec3,a=t.find,r=t.Node,u=t.PhysicsSystem2D,p=t.EPhysics2DDrawFlags,l=t.ERaycast2DType,V=t.UITransform},function(t){d=t.default},function(t){g=t.Macro},function(t){m=t.inject}],execute:function(){var y,T,L,f,E;i._RF.push({},"2a2cfKsXjlBGY/e6Fg9bREH","AimLineView",void 0);const{ccclass:w,property:A}=o;t("default",(y=w("AimLineView"),T=m("graphics",c),y((E=e((f=class extends d{constructor(...t){super(...t),s(this,"graphics",E,this),this.curLenght=0,this.AIM_LINE_MAX_LENGTH=1800,this.outVec=new n,this.tempVec=new n,this.outVec3=new h,this.tempVec3=new h}static getPrefabUrl(){return"prefabs/AimLineView"}onLoad(){super.onLoad(),this.onN(a("goBack",this.node),r.EventType.TOUCH_END,this.onGoBack),u.instance.enable=!0,u.instance.debugDrawFlags=p.All,this.onN(this.graphics.node,r.EventType.TOUCH_START,this.onTouchStart),this.onN(this.graphics.node,r.EventType.TOUCH_MOVE,this.onTouchMove),this.onN(this.graphics.node,r.EventType.TOUCH_END,this.onTouchEnd),this.onN(this.graphics.node,r.EventType.TOUCH_CANCEL,this.onTouchEnd)}onTouchStart(t){this.graphics.clear()}onTouchMove(t){this.graphics.clear(),this.curLenght=0;const e=t.getUIStartLocation(),s=t.getUILocation();this.drawRayCast(e,s.subtract(e).normalize()),this.graphics.stroke()}onTouchEnd(t){this.graphics.clear()}onGoBack(){this.enterBundle(g.BUNDLE_HALL)}drawRayCast(t,e){const s=this.AIM_LINE_MAX_LENGTH-this.curLenght;if(s<=0)return;this.tempVec.set(e),n.add(this.outVec,t,this.tempVec.multiplyScalar(s));const i=u.instance.raycast(t,this.outVec,l.Closest,1);if(i.length>0){const s=i[0],c=s.point;this.drawAimLine(t,c),this.tempVec.set(c);const o=this.tempVec.subtract(t).length();this.curLenght+=o;const n=s.normal;this.tempVec.set(e);const h=this.tempVec;let a=h.dot(n),r=n.multiplyScalar(2*a);const u=h.subtract(r);this.drawRayCast(c,u)}else this.drawAimLine(t,this.outVec)}drawAimLine(t,e){let s=this.graphics.node.getComponent(V);this.tempVec3.set(t.x,t.y,0),s.convertToNodeSpaceAR(this.tempVec3,this.outVec3),this.graphics.moveTo(this.outVec3.x,this.outVec3.y);n.subtract(this.outVec,e,t);const i=Math.round(this.outVec.length()/20);this.outVec.normalize().multiplyScalar(20);for(let t=0;t<i;t++)this.tempVec3.set(this.outVec.x,this.outVec.y),this.outVec3.add(this.tempVec3),this.graphics.circle(this.outVec3.x,this.outVec3.y,2)}}).prototype,"graphics",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=f))||L));i._RF.pop()}}}));

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