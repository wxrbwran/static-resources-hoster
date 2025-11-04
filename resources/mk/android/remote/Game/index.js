System.register("chunks:///_virtual/Game",["./GameBundle.ts","./GameEvent.ts","./GameGame.ts","./GamePlayer.ts","./GameStar.ts"],(function(){return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/GameBundle.ts",["cc","./MKInit.ts","./GameGame.ts"],(function(e){var n,t,a,s;return{setters:[function(e){n=e.cclegacy,t=e.find},function(e){a=e.default},function(e){s=e.GameGame}],execute:function(){n._RF.push({},"ec936RyJRtAF5F7F2bXFlU6","GameBundle",void 0);class u extends a.Bundle_.BundleManageBase{constructor(...e){super(...e),this.nameStr="Game",this.event=new a.EventTarget}open(){t("Canvas").addComponent(s).drive()}}e("default",new u);n._RF.pop()}}}));

System.register("chunks:///_virtual/GameEvent.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"4ebb6G3PiRO24B4cNyn0gkk","GameEvent",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/GameGame.ts",["cc","./MKInit.ts","./GamePlayer.ts","./GameStar.ts","./GameBundle.ts"],(function(e){var a,t,n,s,r,i;return{setters:[function(e){a=e.cclegacy,t=e._decorator},function(e){n=e.default},function(e){s=e.GamePlayer},function(e){r=e.GameStar},function(e){i=e.default}],execute:function(){var c,o;a._RF.push({},"9931eEiSQNJn76nfv3s89OJ","GameGame",void 0);const{ccclass:u,property:l}=t;c=u("GameGame"),m=c(o=class extends n.ViewBase{constructor(...e){super(...e),this.data=new class{constructor(){this.scoreNum=0}}}open(){var e;n.uiManage.regis(s,"Module/Player/GamePlayer",this),n.uiManage.regis(r,"Module/Star/GameStar",this),n.uiManage.open(s),n.uiManage.open(r),null==(e=n.monitor.on(this.data,"scoreNum",(e=>{n.N(this.node.getChildByName("Label")).label.string=`得分：${e}`})))||e.call(this,this.data.scoreNum),i.event.on(i.event.key.generateStar,(()=>{this.data.scoreNum++,this.scheduleOnce((()=>{n.uiManage.open(r)}),2)}),this)}})||o,e({GameGame:m,default:m});var m;a._RF.pop()}}}));

System.register("chunks:///_virtual/GamePlayer.ts",["cc","./MKInit.ts"],(function(t){var a,e,i,s,d,u,h,c;return{setters:[function(t){a=t.cclegacy,e=t.tween,i=t.input,s=t.Input,d=t.KeyCode,u=t.view,h=t._decorator},function(t){c=t.default}],execute:function(){var n,o;a._RF.push({},"30685GKdK9BWqmtrCna4qBA","GamePlayer",void 0);const{ccclass:m,property:p}=h;n=m("GamePlayer"),r=n(o=class extends c.ViewBase{constructor(...t){super(...t),this.data=new class{constructor(){this.jumpDurationNum=.3,this.jumpHeightNum=200,this.isAccLeft=!1,this.isAccRight=!1,this.xSpeedNum=0,this.maxMoveSpeedNum=400,this.accelNum=300,this.nodeXNum=0,this.nodeYNum=0}}}async open(){this.data.nodeYNum=this.node.position.y;const t=e(this.data).by(this.data.jumpDurationNum,{nodeYNum:this.data.jumpHeightNum},{easing:"sineOut"}),a=e(this.data).by(this.data.jumpDurationNum,{nodeYNum:-this.data.jumpHeightNum},{easing:"sineIn"}),u=await c.audio.add("Module/Player/Audio/jump",this);e(this.data).repeatForever(e().sequence(t,a,e().call((()=>{c.audio.play(u)})))).start(),i.on(s.EventType.KEY_DOWN,(t=>{switch(t.keyCode){case d.KEY_A:this.data.isAccLeft=!0;break;case d.KEY_D:this.data.isAccRight=!0}}),this),i.on(s.EventType.KEY_UP,(t=>{switch(t.keyCode){case d.KEY_A:this.data.isAccLeft=!1;break;case d.KEY_D:this.data.isAccRight=!1}}),this)}update(t){this.data.isAccLeft?this.data.xSpeedNum-=this.data.accelNum*t:this.data.isAccRight&&(this.data.xSpeedNum+=this.data.accelNum*t),Math.abs(this.data.xSpeedNum)>this.data.maxMoveSpeedNum&&(this.data.xSpeedNum=this.data.maxMoveSpeedNum*this.data.xSpeedNum/Math.abs(this.data.xSpeedNum)),this.data.nodeXNum+=this.data.xSpeedNum*t;const a=u.getVisibleSize();this.data.nodeXNum<.5*-a.width+50?this.data.nodeXNum=.5*-a.width+50:this.data.nodeXNum>.5*a.width-50&&(this.data.nodeXNum=.5*a.width-50),this.node.setPosition(this.data.nodeXNum,this.data.nodeYNum)}})||o,t({GamePlayer:r,default:r});var r;a._RF.pop()}}}));

System.register("chunks:///_virtual/GameStar.ts",["cc","./MKInit.ts","./GameBundle.ts"],(function(t){var e,a,o,n,s,i,c,r;return{setters:[function(t){e=t.cclegacy,a=t.view,o=t.v3,n=t.Collider2D,s=t.Contact2DType,i=t._decorator},function(t){c=t.default},function(t){r=t.default}],execute:function(){var d;e._RF.push({},"78e1br4cMdFKYy8IJaIaJUH","GameStar",void 0);const{ccclass:u,property:l}=i;t("GameStar",u("GameStar")(d=class extends c.ViewBase{constructor(...t){super(...t),this.data=new class{constructor(){this.audio=void 0}}}create(){const t=a.getVisibleSize(),e=o(Math.random()*(t.width-100)+50,380+100*Math.random()-50);this.node.setWorldPosition(e)}async open(){this.data.audio=await c.audio.add("Module/Star/Audio/score",this);const t=this.getComponent(n);t&&t.on(s.BEGIN_CONTACT,this._onBeginContact,this)}close(){r.event.emit(r.event.key.generateStar)}_onBeginContact(t,e,a){console.log("onBeginContact"),c.audio.play(this.data.audio),this.scheduleOnce((()=>{this.close()}))}})||d);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/Game', 'chunks:///_virtual/Game'); 
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