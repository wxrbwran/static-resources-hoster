System.register("chunks:///_virtual/page-home",["./PageHome.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PageHome.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./app.ts"],(function(n){var e,t,a,o,i;return{setters:[function(n){e=n.inheritsLoose},function(n){t=n.cclegacy,a=n._decorator},function(n){o=n.default},function(n){i=n.app}],execute:function(){var r,u;t._RF.push({},"ad6e8toxClKb47LeZ1vVlWg","PageHome",void 0);var c=a.ccclass;a.property,n("PageHome",c("PageHome")(((u=function(n){function t(){for(var e,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))||this).miniViews=["PaperHomeIndex"],e}e(t,n);var a=t.prototype;return a.onLoad=function(){},a.beforeShow=function(n){t.first?(n(),this.initUI(),t.first=!1):this.initUI(n)},a.onShow=function(n){},a.onHide=function(n){return n},a.initUI=function(n){this.showMiniViews({views:this.miniViews,onFinish:function(){i.manager.sound.playMusic({name:"music/home"}),n&&n(),i.lib.task.createSync().add((function(n){return i.manager.ui.load("PopTip",n)})).add((function(n){return i.manager.ui.load("PageGame",n)})).add((function(n){return i.manager.ui.load("PaperGameIndex",n)})).add((function(n){return i.manager.sound.load("music/war",n)})).add((function(n){return i.manager.sound.load("effect/shoot",n)})).add((function(n){return i.manager.sound.load("effect/hit",n)})).add((function(n){return i.manager.sound.load("effect/eat",n)})).add((function(n){return i.manager.ui.load("PopOver",n)})).add((function(n){return i.manager.sound.load("music/over",n)})).start()}})},t}(o)).first=!0,r=u))||r);t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/page-home', 'chunks:///_virtual/page-home'); 
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