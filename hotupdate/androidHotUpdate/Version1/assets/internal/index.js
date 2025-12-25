System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class DebugViewRuntimeControl extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "compositeModeToggle", _descriptor, this);
          _initializerDefineProperty(this, "singleModeToggle", _descriptor2, this);
          _initializerDefineProperty(this, "EnableAllCompositeModeButton", _descriptor3, this);
          this._single = 0;
          this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          this.compositeModeToggleList = [];
          this.singleModeToggleList = [];
          this.miscModeToggleList = [];
          this.textComponentList = [];
          this.labelComponentList = [];
          this.textContentList = [];
          this.hideButtonLabel = void 0;
          this._currentColorIndex = 0;
          this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
        }
        start() {
          // get canvas resolution
          const canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          const uiTransform = this.node.parent.getComponent(UITransform);
          const halfScreenWidth = uiTransform.width * 0.5;
          const halfScreenHeight = uiTransform.height * 0.5;
          let x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          const width = 200,
            height = 20;

          // new nodes
          const miscNode = this.node.getChildByName('MiscMode');
          const buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          const titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (let i = 0; i < 2; i++) {
            const newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            const labelComponent = newLabel.getComponent(Label);
            labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            labelComponent.color = Color.WHITE;
            labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = labelComponent;
          }
          y -= height;
          // single
          let currentRow = 0;
          for (let i = 0; i < this.strSingle.length; i++, currentRow++) {
            if (i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            const newNode = i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          let labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          const changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          const HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (let i = 0; i < this.strMisc.length; i++) {
            const newNode = instantiate(this.compositeModeToggle);
            newNode.setPosition(x, y - height * i, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = miscNode;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strMisc[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            const toggleComponent = newNode.getComponent(Toggle);
            toggleComponent.isChecked = i ? true : false;
            newNode.on(Toggle.EventType.TOGGLE, i ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[i] = newNode;
          }

          // composite
          y -= 150;
          for (let i = 0; i < this.strComposite.length; i++) {
            const newNode = i ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            newNode.setPosition(x, y - height * i, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.compositeModeToggle.parent;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strComposite[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[i] = newNode;
          }
        }
        isTextMatched(textUI, textDescription) {
          let tempText = new String(textUI);
          const findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        }
        toggleSingleMode(toggle) {
          const debugView = director.root.debugView;
          const textComponent = toggle.getComponentInChildren(RichText);
          for (let i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        }
        toggleCompositeMode(toggle) {
          const debugView = director.root.debugView;
          const textComponent = toggle.getComponentInChildren(RichText);
          for (let i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        }
        toggleLightingWithAlbedo(toggle) {
          const debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        }
        toggleCSMColoration(toggle) {
          const debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        }
        enableAllCompositeMode(button) {
          const debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (let i = 0; i < this.compositeModeToggleList.length; i++) {
            const toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            toggleComponent.isChecked = true;
          }
          let toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        }
        hideUI(button) {
          const titleNode = this.node.getChildByName('Titles');
          const activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        }
        changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (let i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (let i = 0; i < this.labelComponentList.length; i++) {
            this.labelComponentList[i].color = this.color[this._currentColorIndex];
          }
        }
        onLoad() {}
        update(deltaTime) {}
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/internal", ['./debug-view-runtime-control.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/internal', 'chunks:///_virtual/internal'); 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L0FwcGxpY2F0aW9ucy9Db2Nvcy9DcmVhdG9yLzMuOC44L0NvY29zQ3JlYXRvci5hcHAvQ29udGVudHMvUmVzb3VyY2VzL3Jlc291cmNlcy8zZC9lbmdpbmUvZWRpdG9yL2Fzc2V0cy90b29scy9maWxlOi9BcHBsaWNhdGlvbnMvQ29jb3MvQ3JlYXRvci8zLjguOC9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9yZXNvdXJjZXMvM2QvZW5naW5lL2VkaXRvci9hc3NldHMvdG9vbHMvZGVidWctdmlldy1ydW50aW1lLWNvbnRyb2wudHMiXSwibmFtZXMiOlsiY2NjbGFzcyIsInByb3BlcnR5IiwiX2RlY29yYXRvciIsIkRlYnVnVmlld1J1bnRpbWVDb250cm9sIiwiX2RlYyIsIl9kZWMyIiwiTm9kZSIsIl9kZWMzIiwiX2RlYzQiLCJfY2xhc3MiLCJfY2xhc3MyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJhcmdzIiwiX2luaXRpYWxpemVyRGVmaW5lUHJvcGVydHkiLCJfZGVzY3JpcHRvciIsIl9kZXNjcmlwdG9yMiIsIl9kZXNjcmlwdG9yMyIsIl9zaW5nbGUiLCJzdHJTaW5nbGUiLCJzdHJDb21wb3NpdGUiLCJzdHJNaXNjIiwiY29tcG9zaXRlTW9kZVRvZ2dsZUxpc3QiLCJzaW5nbGVNb2RlVG9nZ2xlTGlzdCIsIm1pc2NNb2RlVG9nZ2xlTGlzdCIsInRleHRDb21wb25lbnRMaXN0IiwibGFiZWxDb21wb25lbnRMaXN0IiwidGV4dENvbnRlbnRMaXN0IiwiaGlkZUJ1dHRvbkxhYmVsIiwiX2N1cnJlbnRDb2xvckluZGV4Iiwic3RyQ29sb3IiLCJjb2xvciIsIkNvbG9yIiwiV0hJVEUiLCJCTEFDSyIsIlJFRCIsIkdSRUVOIiwiQkxVRSIsInN0YXJ0IiwiY2FudmFzIiwibm9kZSIsInBhcmVudCIsImdldENvbXBvbmVudCIsIkNhbnZhcyIsImNvbnNvbGUiLCJlcnJvciIsInVpVHJhbnNmb3JtIiwiVUlUcmFuc2Zvcm0iLCJoYWxmU2NyZWVuV2lkdGgiLCJ3aWR0aCIsImhhbGZTY3JlZW5IZWlnaHQiLCJoZWlnaHQiLCJ4IiwieSIsIm1pc2NOb2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJidXR0b25Ob2RlIiwiaW5zdGFudGlhdGUiLCJuYW1lIiwidGl0bGVOb2RlIiwiaSIsIm5ld0xhYmVsIiwiRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbiIsInNldFBvc2l0aW9uIiwic2V0U2NhbGUiLCJsYWJlbENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwib3ZlcmZsb3ciLCJsZW5ndGgiLCJjdXJyZW50Um93IiwibmV3Tm9kZSIsInNpbmdsZU1vZGVUb2dnbGUiLCJ0ZXh0Q29tcG9uZW50IiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsIlJpY2hUZXh0Iiwib24iLCJUb2dnbGUiLCJFdmVudFR5cGUiLCJUT0dHTEUiLCJ0b2dnbGVTaW5nbGVNb2RlIiwiQnV0dG9uIiwiQ0xJQ0siLCJlbmFibGVBbGxDb21wb3NpdGVNb2RlIiwiY2hhbmdlQ29sb3JCdXR0b24iLCJjaGFuZ2VUZXh0Q29sb3IiLCJIaWRlQnV0dG9uIiwiaGlkZVVJIiwiY29tcG9zaXRlTW9kZVRvZ2dsZSIsInRvZ2dsZUNvbXBvbmVudCIsImlzQ2hlY2tlZCIsInRvZ2dsZUxpZ2h0aW5nV2l0aEFsYmVkbyIsInRvZ2dsZUNTTUNvbG9yYXRpb24iLCJ0b2dnbGVDb21wb3NpdGVNb2RlIiwiaXNUZXh0TWF0Y2hlZCIsInRleHRVSSIsInRleHREZXNjcmlwdGlvbiIsInRlbXBUZXh0IiwiU3RyaW5nIiwiZmluZEluZGV4Iiwic2VhcmNoIiwic3Vic3RyIiwidG9nZ2xlIiwiZGVidWdWaWV3IiwiZGlyZWN0b3IiLCJyb290Iiwic2luZ2xlTW9kZSIsImVuYWJsZUNvbXBvc2l0ZU1vZGUiLCJsaWdodGluZ1dpdGhBbGJlZG8iLCJjc21MYXllckNvbG9yYXRpb24iLCJidXR0b24iLCJhY3RpdmVWYWx1ZSIsImFjdGl2ZSIsIm9uTG9hZCIsInVwZGF0ZSIsImRlbHRhVGltZSIsIl9hcHBseURlY29yYXRlZERlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJpbml0aWFsaXplciIsIl9SRiIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQ0EsTUFBTTtRQUFFQSxPQUFPO1FBQUVDO01BQVMsQ0FBQyxHQUFHQyxVQUFVO1VBRzNCQyx1QkFBdUIsdUNBQUFDLElBQUEsR0FEbkNKLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxFQUFBSyxLQUFBLEdBRXZDSixRQUFRLENBQUNLLElBQUksQ0FBQyxFQUFBQyxLQUFBLEdBRWROLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLEVBQUFFLEtBQUEsR0FFZFAsUUFBUSxDQUFDSyxJQUFJLENBQUMsRUFBQUYsSUFBQSxDQUFBSyxNQUFBLElBQUFDLE9BQUEsR0FObkIsTUFDYVAsdUJBQXVCLFNBQVNRLFNBQVMsQ0FBQztRQUFBQyxZQUFBLEdBQUFDLElBQUE7VUFBQSxTQUFBQSxJQUFBO1VBQUFDLDBCQUFBLDhCQUFBQyxXQUFBO1VBQUFELDBCQUFBLDJCQUFBRSxZQUFBO1VBQUFGLDBCQUFBLHVDQUFBRyxZQUFBO1VBQUEsS0FPdERDLE9BQU8sR0FBVyxDQUFDO1VBQUEsS0FFUkMsU0FBUyxHQUFhLENBQzFCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLFdBQVcsRUFDWCxLQUFLLEVBQ0wsS0FBSyxFQUNMLGFBQWEsRUFDYixlQUFlLEVBQ2YsY0FBYyxFQUVkLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbEIsbUJBQW1CLEVBQ25CLFlBQVksRUFDWixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxVQUFVLEVBQ1YsV0FBVyxFQUNYLG9CQUFvQixFQUNwQixLQUFLLEVBRUwsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osYUFBYSxFQUNi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QUVUQyxNQUFNQSxDQUFDQyxTQUFpQixFQUFFO01BRTlCLENBQUMsR0FBQXBHLFdBQUEsR0FBQXFHLHlCQUFBLENBQUExRyxPQUFBLENBQUEyRyxTQUFBLDBCQUFBaEgsS0FBQTtRQUFBaUgsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFFBQUE7UUFBQUMsV0FBQTtVQUFBLE9BdlRzQyxJQUFJOztNQUFBLElBQUF6RyxZQUFBLEdBQUFvRyx5QkFBQSxDQUFBMUcsT0FBQSxDQUFBMkcsU0FBQSx1QkFBQTlHLEtBQUE7UUFBQStHLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxRQUFBO1FBQUFDLFdBQUE7VUFBQSxPQUVQLElBQUk7O01BQUEsSUFBQXhHLFlBQUEsR0FBQW1HLHlCQUFBLENBQUExRyxPQUFBLENBQUEyRyxTQUFBLG1DQUFBN0csS0FBQTtRQUFBOEcsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFFBQUE7UUFBQUMsV0FBQTtVQUFBLE9BRVEsSUFBSTs7TUFBQSxLQUFBL0csT0FBQSxNQUFBRCxNQUFBO2NBbVRuRCxDQUFBaUgsR0FBQSxDQUFBQyxHQUFBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yLCBDYW52YXMsIFVJVHJhbnNmb3JtLCBpbnN0YW50aWF0ZSwgbWF0aCwgVG9nZ2xlLCBUZXh0dXJlQ3ViZSwgX2RlY29yYXRvciwgQ29tcG9uZW50LCBCdXR0b24sIGxhYmVsQXNzZW1ibGVyLCBnYW1lLCBkaXJlY3RvciwgTm9kZSwgU2NlbmUsIHJlbmRlcmVyLCBDYW1lcmFDb21wb25lbnQsIExhYmVsLCBGb3J3YXJkUGlwZWxpbmUsIFJpY2hUZXh0IH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ2ludGVybmFsLkRlYnVnVmlld1J1bnRpbWVDb250cm9sJylcbmV4cG9ydCBjbGFzcyBEZWJ1Z1ZpZXdSdW50aW1lQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KE5vZGUpXG4gICAgY29tcG9zaXRlTW9kZVRvZ2dsZTogTm9kZSB8IG51bGwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShOb2RlKVxuICAgIHNpbmdsZU1vZGVUb2dnbGU6IE5vZGUgfCBudWxsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoTm9kZSlcbiAgICBFbmFibGVBbGxDb21wb3NpdGVNb2RlQnV0dG9uOiBOb2RlIHwgbnVsbCA9IG51bGw7XG5cdF9zaW5nbGU6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIHN0clNpbmdsZTogc3RyaW5nW10gPSBbXG4gICAgICAgICdObyBTaW5nbGUgRGVidWcnLFxuICAgICAgICAnVmVydGV4IENvbG9yJyxcbiAgICAgICAgJ1ZlcnRleCBOb3JtYWwnLFxuICAgICAgICAnVmVydGV4IFRhbmdlbnQnLFxuICAgICAgICAnV29ybGQgUG9zaXRpb24nLFxuICAgICAgICAnVmVydGV4IE1pcnJvcicsXG4gICAgICAgICdGYWNlIFNpZGUnLFxuICAgICAgICAnVVYwJyxcbiAgICAgICAgJ1VWMScsXG4gICAgICAgICdVViBMaWdodG1hcCcsXG4gICAgICAgICdQcm9qZWN0IERlcHRoJyxcbiAgICAgICAgJ0xpbmVhciBEZXB0aCcsXG5cbiAgICAgICAgJ0ZyYWdtZW50IE5vcm1hbCcsXG4gICAgICAgICdGcmFnbWVudCBUYW5nZW50JyxcbiAgICAgICAgJ0ZyYWdtZW50IEJpbm9ybWFsJyxcbiAgICAgICAgJ0Jhc2UgQ29sb3InLFxuICAgICAgICAnRGlmZnVzZSBDb2xvcicsXG4gICAgICAgICdTcGVjdWxhciBDb2xvcicsXG4gICAgICAgICdUcmFuc3BhcmVuY3knLFxuICAgICAgICAnTWV0YWxsaWMnLFxuICAgICAgICAnUm91Z2huZXNzJyxcbiAgICAgICAgJ1NwZWN1bGFyIEludGVuc2l0eScsXG4gICAgICAgICdJT1InLFxuXG4gICAgICAgICdEaXJlY3QgRGlmZnVzZScsXG4gICAgICAgICdEaXJlY3QgU3BlY3VsYXInLFxuICAgICAgICAnRGlyZWN0IEFsbCcsXG4gICAgICAgICdFbnYgRGlmZnVzZScsXG4gICAgICAgICdFbnYgU3BlY3VsYXInLFxuICAgICAgICAnRW52IEFsbCcsXG4gICAgICAgICdFbWlzc2l2ZScsXG4gICAgICAgICdMaWdodCBNYXAnLFxuICAgICAgICAnU2hhZG93JyxcbiAgICAgICAgJ0FPJyxcblxuICAgICAgICAnRnJlc25lbCcsXG4gICAgICAgICdEaXJlY3QgVHJhbnNtaXQgRGlmZnVzZScsXG4gICAgICAgICdEaXJlY3QgVHJhbnNtaXQgU3BlY3VsYXInLFxuICAgICAgICAnRW52IFRyYW5zbWl0IERpZmZ1c2UnLFxuICAgICAgICAnRW52IFRyYW5zbWl0IFNwZWN1bGFyJyxcbiAgICAgICAgJ1RyYW5zbWl0IEFsbCcsXG4gICAgICAgICdEaXJlY3QgSW50ZXJuYWwgU3BlY3VsYXInLFxuICAgICAgICAnRW52IEludGVybmFsIFNwZWN1bGFyJyxcbiAgICAgICAgJ0ludGVybmFsIEFsbCcsXG5cbiAgICAgICAgJ0ZvZycsXG4gICAgXTtcbiAgICBwcml2YXRlIHN0ckNvbXBvc2l0ZTogc3RyaW5nW10gPSBbXG4gICAgICAgICdEaXJlY3QgRGlmZnVzZScsXG4gICAgICAgICdEaXJlY3QgU3BlY3VsYXInLFxuICAgICAgICAnRW52IERpZmZ1c2UnLFxuICAgICAgICAnRW52IFNwZWN1bGFyJyxcbiAgICAgICAgJ0VtaXNzaXZlJyxcbiAgICAgICAgJ0xpZ2h0IE1hcCcsXG4gICAgICAgICdTaGFkb3cnLFxuICAgICAgICAnQU8nLFxuXG4gICAgICAgICdOb3JtYWwgTWFwJyxcbiAgICAgICAgJ0ZvZycsXG5cbiAgICAgICAgJ1RvbmUgTWFwcGluZycsXG4gICAgICAgICdHYW1tYSBDb3JyZWN0aW9uJyxcblxuICAgICAgICAnRnJlc25lbCcsXG4gICAgICAgICdUcmFuc21pdCBEaWZmdXNlJyxcbiAgICAgICAgJ1RyYW5zbWl0IFNwZWN1bGFyJyxcbiAgICAgICAgJ0ludGVybmFsIFNwZWN1bGFyJyxcbiAgICAgICAgJ1RUJyxcbiAgICBdO1xuICAgIHByaXZhdGUgc3RyTWlzYzogc3RyaW5nW10gPSBbXG4gICAgICAgICdDU00gTGF5ZXIgQ29sb3JhdGlvbicsXG4gICAgICAgICdMaWdodGluZyBXaXRoIEFsYmVkbycsXG4gICAgXTtcblxuICAgIHByaXZhdGUgY29tcG9zaXRlTW9kZVRvZ2dsZUxpc3Q6IE5vZGVbXSA9IFtdO1xuICAgIHByaXZhdGUgc2luZ2xlTW9kZVRvZ2dsZUxpc3Q6IE5vZGVbXSA9IFtdO1xuICAgIHByaXZhdGUgbWlzY01vZGVUb2dnbGVMaXN0OiBOb2RlW10gPSBbXTtcbiAgICBwcml2YXRlIHRleHRDb21wb25lbnRMaXN0OiBSaWNoVGV4dFtdID0gW107XG4gICAgcHJpdmF0ZSBsYWJlbENvbXBvbmVudExpc3Q6IExhYmVsW10gPSBbXTtcbiAgICBwcml2YXRlIHRleHRDb250ZW50TGlzdDogc3RyaW5nW10gPSBbXTtcbiAgICBwcml2YXRlIGhpZGVCdXR0b25MYWJlbDogTGFiZWw7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIGdldCBjYW52YXMgcmVzb2x1dGlvblxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChDYW52YXMpO1xuICAgICAgICBpZiAoIWNhbnZhcykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignZGVidWctdmlldy1ydW50aW1lLWNvbnRyb2wgc2hvdWxkIGJlIGNoaWxkIG9mIENhbnZhcycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdWlUcmFuc2Zvcm0gPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChVSVRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhbGZTY3JlZW5XaWR0aCA9IHVpVHJhbnNmb3JtLndpZHRoICogMC41O1xuICAgICAgICBjb25zdCBoYWxmU2NyZWVuSGVpZ2h0ID0gdWlUcmFuc2Zvcm0uaGVpZ2h0ICogMC41O1xuXG4gICAgICAgIGxldCB4ID0gLWhhbGZTY3JlZW5XaWR0aCArIGhhbGZTY3JlZW5XaWR0aCAqIDAuMSwgeSA9IGhhbGZTY3JlZW5IZWlnaHQgLSBoYWxmU2NyZWVuSGVpZ2h0ICogMC4xO1xuICAgICAgICBjb25zdCB3aWR0aCA9IDIwMCwgaGVpZ2h0ID0gMjA7XG5cbiAgICAgICAgLy8gbmV3IG5vZGVzXG4gICAgICAgIGNvbnN0IG1pc2NOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdNaXNjTW9kZScpO1xuICAgICAgICBjb25zdCBidXR0b25Ob2RlID0gaW5zdGFudGlhdGUobWlzY05vZGUpO1xuICAgICAgICBidXR0b25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgYnV0dG9uTm9kZS5uYW1lID0gJ0J1dHRvbnMnO1xuICAgICAgICBjb25zdCB0aXRsZU5vZGUgPSBpbnN0YW50aWF0ZShtaXNjTm9kZSk7XG4gICAgICAgIHRpdGxlTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRpdGxlTm9kZS5uYW1lID0gJ1RpdGxlcyc7XG5cbiAgICAgICAgLy8gdGl0bGVcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xhYmVsID0gaW5zdGFudGlhdGUodGhpcy5FbmFibGVBbGxDb21wb3NpdGVNb2RlQnV0dG9uLmdldENoaWxkQnlOYW1lKCdMYWJlbCcpKTtcbiAgICAgICAgICAgIG5ld0xhYmVsLnNldFBvc2l0aW9uKHggKyAoaSA+IDAgPyA1MCArIHdpZHRoICogMiA6IDE1MCksIHksIDAuMCk7XG4gICAgICAgICAgICBuZXdMYWJlbC5zZXRTY2FsZSgwLjc1LCAwLjc1LCAwLjc1KTtcbiAgICAgICAgICAgIG5ld0xhYmVsLnBhcmVudCA9IHRpdGxlTm9kZTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsQ29tcG9uZW50ID0gbmV3TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsKTtcbiAgICAgICAgICAgIGxhYmVsQ29tcG9uZW50LnN0cmluZyA9IGkgPyAnLS0tLS0tLS0tLUNvbXBvc2l0ZSBNb2RlLS0tLS0tLS0tLScgOiAnLS0tLS0tLS0tLVNpbmdsZSBNb2RlLS0tLS0tLS0tLSc7XG4gICAgICAgICAgICBsYWJlbENvbXBvbmVudC5jb2xvciA9IENvbG9yLldISVRFO1xuICAgICAgICAgICAgbGFiZWxDb21wb25lbnQub3ZlcmZsb3cgPSAwO1xuICAgICAgICAgICAgdGhpcy5sYWJlbENvbXBvbmVudExpc3RbdGhpcy5sYWJlbENvbXBvbmVudExpc3QubGVuZ3RoXSA9IGxhYmVsQ29tcG9uZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgeSAtPSBoZWlnaHQ7XG4gICAgICAgIC8vIHNpbmdsZVxuICAgICAgICBsZXQgY3VycmVudFJvdyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdHJTaW5nbGUubGVuZ3RoOyBpKyssIGN1cnJlbnRSb3crKykge1xuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuc3RyU2luZ2xlLmxlbmd0aCA+PiAxKSB7XG4gICAgICAgICAgICAgICAgeCArPSB3aWR0aDtcbiAgICAgICAgICAgICAgICBjdXJyZW50Um93ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBpID8gaW5zdGFudGlhdGUodGhpcy5zaW5nbGVNb2RlVG9nZ2xlKSA6IHRoaXMuc2luZ2xlTW9kZVRvZ2dsZTtcbiAgICAgICAgICAgIG5ld05vZGUuc2V0UG9zaXRpb24oeCwgeSAtIGhlaWdodCAqIGN1cnJlbnRSb3csIDAuMCk7XG4gICAgICAgICAgICBuZXdOb2RlLnNldFNjYWxlKDAuNSwgMC41LCAwLjUpO1xuICAgICAgICAgICAgbmV3Tm9kZS5wYXJlbnQgPSB0aGlzLnNpbmdsZU1vZGVUb2dnbGUucGFyZW50O1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0Q29tcG9uZW50ID0gbmV3Tm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFJpY2hUZXh0KTtcbiAgICAgICAgICAgIHRleHRDb21wb25lbnQuc3RyaW5nID0gdGhpcy5zdHJTaW5nbGVbaV07XG4gICAgICAgICAgICB0aGlzLnRleHRDb21wb25lbnRMaXN0W3RoaXMudGV4dENvbXBvbmVudExpc3QubGVuZ3RoXSA9IHRleHRDb21wb25lbnQ7XG4gICAgICAgICAgICB0aGlzLnRleHRDb250ZW50TGlzdFt0aGlzLnRleHRDb250ZW50TGlzdC5sZW5ndGhdID0gdGV4dENvbXBvbmVudC5zdHJpbmc7XG5cbiAgICAgICAgICAgIG5ld05vZGUub24oVG9nZ2xlLkV2ZW50VHlwZS5UT0dHTEUsIHRoaXMudG9nZ2xlU2luZ2xlTW9kZSwgdGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMuc2luZ2xlTW9kZVRvZ2dsZUxpc3RbaV0gPSBuZXdOb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgeCArPSB3aWR0aDtcbiAgICAgICAgLy8gYnV0dG9uc1xuICAgICAgICB0aGlzLkVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b24uc2V0UG9zaXRpb24oeCArIDE1LCB5LCAwLjApO1xuICAgICAgICB0aGlzLkVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b24uc2V0U2NhbGUoMC41LCAwLjUsIDAuNSk7XG4gICAgICAgIHRoaXMuRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbi5vbihCdXR0b24uRXZlbnRUeXBlLkNMSUNLLCB0aGlzLmVuYWJsZUFsbENvbXBvc2l0ZU1vZGUsIHRoaXMpO1xuICAgICAgICB0aGlzLkVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b24ucGFyZW50ID0gYnV0dG9uTm9kZTtcbiAgICAgICAgbGV0IGxhYmVsQ29tcG9uZW50ID0gdGhpcy5FbmFibGVBbGxDb21wb3NpdGVNb2RlQnV0dG9uLmdldENvbXBvbmVudEluQ2hpbGRyZW4oTGFiZWwpO1xuICAgICAgICB0aGlzLmxhYmVsQ29tcG9uZW50TGlzdFt0aGlzLmxhYmVsQ29tcG9uZW50TGlzdC5sZW5ndGhdID0gbGFiZWxDb21wb25lbnQ7XG5cbiAgICAgICAgY29uc3QgY2hhbmdlQ29sb3JCdXR0b24gPSBpbnN0YW50aWF0ZSh0aGlzLkVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b24pO1xuICAgICAgICBjaGFuZ2VDb2xvckJ1dHRvbi5zZXRQb3NpdGlvbih4ICsgOTAsIHksIDAuMCk7XG4gICAgICAgIGNoYW5nZUNvbG9yQnV0dG9uLnNldFNjYWxlKDAuNSwgMC41LCAwLjUpO1xuICAgICAgICBjaGFuZ2VDb2xvckJ1dHRvbi5vbihCdXR0b24uRXZlbnRUeXBlLkNMSUNLLCB0aGlzLmNoYW5nZVRleHRDb2xvciwgdGhpcyk7XG4gICAgICAgIGNoYW5nZUNvbG9yQnV0dG9uLnBhcmVudCA9IGJ1dHRvbk5vZGU7XG4gICAgICAgIGxhYmVsQ29tcG9uZW50ID0gY2hhbmdlQ29sb3JCdXR0b24uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihMYWJlbCk7XG4gICAgICAgIGxhYmVsQ29tcG9uZW50LnN0cmluZyA9ICdUZXh0Q29sb3InO1xuICAgICAgICB0aGlzLmxhYmVsQ29tcG9uZW50TGlzdFt0aGlzLmxhYmVsQ29tcG9uZW50TGlzdC5sZW5ndGhdID0gbGFiZWxDb21wb25lbnQ7XG5cbiAgICAgICAgY29uc3QgSGlkZUJ1dHRvbiA9IGluc3RhbnRpYXRlKHRoaXMuRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbik7XG4gICAgICAgIEhpZGVCdXR0b24uc2V0UG9zaXRpb24oeCArIDIwMCwgeSwgMC4wKTtcbiAgICAgICAgSGlkZUJ1dHRvbi5zZXRTY2FsZSgwLjUsIDAuNSwgMC41KTtcbiAgICAgICAgSGlkZUJ1dHRvbi5vbihCdXR0b24uRXZlbnRUeXBlLkNMSUNLLCB0aGlzLmhpZGVVSSwgdGhpcyk7XG4gICAgICAgIEhpZGVCdXR0b24ucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgbGFiZWxDb21wb25lbnQgPSBIaWRlQnV0dG9uLmdldENvbXBvbmVudEluQ2hpbGRyZW4oTGFiZWwpO1xuICAgICAgICBsYWJlbENvbXBvbmVudC5zdHJpbmcgPSAnSGlkZSBVSSc7XG4gICAgICAgIHRoaXMubGFiZWxDb21wb25lbnRMaXN0W3RoaXMubGFiZWxDb21wb25lbnRMaXN0Lmxlbmd0aF0gPSBsYWJlbENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5oaWRlQnV0dG9uTGFiZWwgPSBsYWJlbENvbXBvbmVudDtcblxuICAgICAgICAvLyBtaXNjXG4gICAgICAgIHkgLT0gNDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdHJNaXNjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdOb2RlID0gaW5zdGFudGlhdGUodGhpcy5jb21wb3NpdGVNb2RlVG9nZ2xlKTtcbiAgICAgICAgICAgIG5ld05vZGUuc2V0UG9zaXRpb24oeCwgeSAtIGhlaWdodCAqIGksIDAuMCk7XG4gICAgICAgICAgICBuZXdOb2RlLnNldFNjYWxlKDAuNSwgMC41LCAwLjUpO1xuICAgICAgICAgICAgbmV3Tm9kZS5wYXJlbnQgPSBtaXNjTm9kZTtcblxuICAgICAgICAgICAgY29uc3QgdGV4dENvbXBvbmVudCA9IG5ld05vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihSaWNoVGV4dCk7XG4gICAgICAgICAgICB0ZXh0Q29tcG9uZW50LnN0cmluZyA9IHRoaXMuc3RyTWlzY1tpXTtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbXBvbmVudExpc3RbdGhpcy50ZXh0Q29tcG9uZW50TGlzdC5sZW5ndGhdID0gdGV4dENvbXBvbmVudDtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnRMaXN0W3RoaXMudGV4dENvbnRlbnRMaXN0Lmxlbmd0aF0gPSB0ZXh0Q29tcG9uZW50LnN0cmluZztcblxuICAgICAgICAgICAgY29uc3QgdG9nZ2xlQ29tcG9uZW50ID0gbmV3Tm9kZS5nZXRDb21wb25lbnQoVG9nZ2xlKTtcbiAgICAgICAgICAgIHRvZ2dsZUNvbXBvbmVudC5pc0NoZWNrZWQgPSBpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgbmV3Tm9kZS5vbihUb2dnbGUuRXZlbnRUeXBlLlRPR0dMRSwgaSA/IHRoaXMudG9nZ2xlTGlnaHRpbmdXaXRoQWxiZWRvIDogdGhpcy50b2dnbGVDU01Db2xvcmF0aW9uLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubWlzY01vZGVUb2dnbGVMaXN0W2ldID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbXBvc2l0ZVxuICAgICAgICB5IC09IDE1MDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0ckNvbXBvc2l0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IGkgPyBpbnN0YW50aWF0ZSh0aGlzLmNvbXBvc2l0ZU1vZGVUb2dnbGUpIDogdGhpcy5jb21wb3NpdGVNb2RlVG9nZ2xlO1xuICAgICAgICAgICAgbmV3Tm9kZS5zZXRQb3NpdGlvbih4LCB5IC0gaGVpZ2h0ICogaSwgMC4wKTtcbiAgICAgICAgICAgIG5ld05vZGUuc2V0U2NhbGUoMC41LCAwLjUsIDAuNSk7XG4gICAgICAgICAgICBuZXdOb2RlLnBhcmVudCA9IHRoaXMuY29tcG9zaXRlTW9kZVRvZ2dsZS5wYXJlbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHRDb21wb25lbnQgPSBuZXdOb2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oUmljaFRleHQpO1xuICAgICAgICAgICAgdGV4dENvbXBvbmVudC5zdHJpbmcgPSB0aGlzLnN0ckNvbXBvc2l0ZVtpXTtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbXBvbmVudExpc3RbdGhpcy50ZXh0Q29tcG9uZW50TGlzdC5sZW5ndGhdID0gdGV4dENvbXBvbmVudDtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnRMaXN0W3RoaXMudGV4dENvbnRlbnRMaXN0Lmxlbmd0aF0gPSB0ZXh0Q29tcG9uZW50LnN0cmluZztcblxuICAgICAgICAgICAgbmV3Tm9kZS5vbihUb2dnbGUuRXZlbnRUeXBlLlRPR0dMRSwgdGhpcy50b2dnbGVDb21wb3NpdGVNb2RlLCB0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5jb21wb3NpdGVNb2RlVG9nZ2xlTGlzdFtpXSA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1RleHRNYXRjaGVkKHRleHRVSSwgdGV4dERlc2NyaXB0aW9uKSA6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgdGVtcFRleHQgPSBuZXcgU3RyaW5nKHRleHRVSSk7XG4gICAgICAgIGNvbnN0IGZpbmRJbmRleCA9IHRlbXBUZXh0LnNlYXJjaCgnPicpO1xuICAgICAgICBpZiAoZmluZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRleHRVSSA9PT0gdGV4dERlc2NyaXB0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcFRleHQgPSB0ZW1wVGV4dC5zdWJzdHIoZmluZEluZGV4ICsgMSk7XG4gICAgICAgICAgICB0ZW1wVGV4dCA9IHRlbXBUZXh0LnN1YnN0cigwLCB0ZW1wVGV4dC5zZWFyY2goJzwnKSk7XG4gICAgICAgICAgICByZXR1cm4gdGVtcFRleHQgPT09IHRleHREZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGVTaW5nbGVNb2RlKHRvZ2dsZTogVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGRlYnVnVmlldyA9IGRpcmVjdG9yLnJvb3QhLmRlYnVnVmlldztcbiAgICAgICAgY29uc3QgdGV4dENvbXBvbmVudCA9IHRvZ2dsZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFJpY2hUZXh0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0clNpbmdsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUZXh0TWF0Y2hlZCh0ZXh0Q29tcG9uZW50LnN0cmluZywgdGhpcy5zdHJTaW5nbGVbaV0pKSB7XG4gICAgICAgICAgICAgICAgZGVidWdWaWV3LnNpbmdsZU1vZGUgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZUNvbXBvc2l0ZU1vZGUodG9nZ2xlOiBUb2dnbGUpIHtcbiAgICAgICAgY29uc3QgZGVidWdWaWV3ID0gZGlyZWN0b3Iucm9vdCEuZGVidWdWaWV3O1xuICAgICAgICBjb25zdCB0ZXh0Q29tcG9uZW50ID0gdG9nZ2xlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oUmljaFRleHQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RyQ29tcG9zaXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1RleHRNYXRjaGVkKHRleHRDb21wb25lbnQuc3RyaW5nLCB0aGlzLnN0ckNvbXBvc2l0ZVtpXSkpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z1ZpZXcuZW5hYmxlQ29tcG9zaXRlTW9kZShpLCB0b2dnbGUuaXNDaGVja2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGVMaWdodGluZ1dpdGhBbGJlZG8odG9nZ2xlOiBUb2dnbGUpIHtcbiAgICAgICAgY29uc3QgZGVidWdWaWV3ID0gZGlyZWN0b3Iucm9vdCEuZGVidWdWaWV3O1xuICAgICAgICBkZWJ1Z1ZpZXcubGlnaHRpbmdXaXRoQWxiZWRvID0gdG9nZ2xlLmlzQ2hlY2tlZDtcbiAgICB9XG4gICAgdG9nZ2xlQ1NNQ29sb3JhdGlvbih0b2dnbGU6IFRvZ2dsZSkge1xuICAgICAgICBjb25zdCBkZWJ1Z1ZpZXcgPSBkaXJlY3Rvci5yb290IS5kZWJ1Z1ZpZXc7XG4gICAgICAgIGRlYnVnVmlldy5jc21MYXllckNvbG9yYXRpb24gPSB0b2dnbGUuaXNDaGVja2VkO1xuICAgIH1cbiAgICBlbmFibGVBbGxDb21wb3NpdGVNb2RlKGJ1dHRvbjogQnV0dG9uKSB7XG4gICAgICAgIGNvbnN0IGRlYnVnVmlldyA9IGRpcmVjdG9yLnJvb3QhLmRlYnVnVmlldztcbiAgICAgICAgZGVidWdWaWV3LmVuYWJsZUFsbENvbXBvc2l0ZU1vZGUodHJ1ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb21wb3NpdGVNb2RlVG9nZ2xlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlQ29tcG9uZW50ID0gdGhpcy5jb21wb3NpdGVNb2RlVG9nZ2xlTGlzdFtpXS5nZXRDb21wb25lbnQoVG9nZ2xlKTtcbiAgICAgICAgICAgIHRvZ2dsZUNvbXBvbmVudC5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRvZ2dsZUNvbXBvbmVudCA9IHRoaXMubWlzY01vZGVUb2dnbGVMaXN0WzBdLmdldENvbXBvbmVudChUb2dnbGUpO1xuICAgICAgICB0b2dnbGVDb21wb25lbnQuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGRlYnVnVmlldy5jc21MYXllckNvbG9yYXRpb24gPSBmYWxzZTtcbiAgICAgICAgdG9nZ2xlQ29tcG9uZW50ID0gdGhpcy5taXNjTW9kZVRvZ2dsZUxpc3RbMV0uZ2V0Q29tcG9uZW50KFRvZ2dsZSk7XG4gICAgICAgIHRvZ2dsZUNvbXBvbmVudC5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICBkZWJ1Z1ZpZXcubGlnaHRpbmdXaXRoQWxiZWRvID0gdHJ1ZTtcbiAgICB9XG4gICAgaGlkZVVJKGJ1dHRvbjogQnV0dG9uKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnVGl0bGVzJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVZhbHVlID0gIXRpdGxlTm9kZS5hY3RpdmU7XG4gICAgICAgIHRoaXMuc2luZ2xlTW9kZVRvZ2dsZUxpc3RbMF0ucGFyZW50LmFjdGl2ZSA9IGFjdGl2ZVZhbHVlO1xuICAgICAgICB0aGlzLm1pc2NNb2RlVG9nZ2xlTGlzdFswXS5wYXJlbnQuYWN0aXZlID0gYWN0aXZlVmFsdWU7XG4gICAgICAgIHRoaXMuY29tcG9zaXRlTW9kZVRvZ2dsZUxpc3RbMF0ucGFyZW50LmFjdGl2ZSA9IGFjdGl2ZVZhbHVlO1xuICAgICAgICB0aGlzLkVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b24ucGFyZW50LmFjdGl2ZSA9IGFjdGl2ZVZhbHVlO1xuICAgICAgICB0aXRsZU5vZGUuYWN0aXZlID0gYWN0aXZlVmFsdWU7XG4gICAgICAgIHRoaXMuaGlkZUJ1dHRvbkxhYmVsLnN0cmluZyA9IGFjdGl2ZVZhbHVlID8gJ0hpZGUgVUknIDogJ1Nob3cgVUknO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2N1cnJlbnRDb2xvckluZGV4ID0gMDtcbiAgICBwcml2YXRlIHN0ckNvbG9yOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJzxjb2xvcj0jZmZmZmZmPicsXG4gICAgICAgICc8Y29sb3I9IzAwMDAwMD4nLFxuICAgICAgICAnPGNvbG9yPSNmZjAwMDA+JyxcbiAgICAgICAgJzxjb2xvcj0jMDBmZjAwPicsXG4gICAgICAgICc8Y29sb3I9IzAwMDBmZj4nLFxuICAgIF07XG4gICAgcHJpdmF0ZSBjb2xvcjogQ29sb3JbXSA9IFtcbiAgICAgICAgQ29sb3IuV0hJVEUsXG4gICAgICAgIENvbG9yLkJMQUNLLFxuICAgICAgICBDb2xvci5SRUQsXG4gICAgICAgIENvbG9yLkdSRUVOLFxuICAgICAgICBDb2xvci5CTFVFLFxuICAgIF07XG4gICAgY2hhbmdlVGV4dENvbG9yKGJ1dHRvbjogQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRDb2xvckluZGV4Kys7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50Q29sb3JJbmRleCA+PSB0aGlzLnN0ckNvbG9yLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudENvbG9ySW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0Q29tcG9uZW50TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29tcG9uZW50TGlzdFtpXS5zdHJpbmcgPSB0aGlzLnN0ckNvbG9yW3RoaXMuX2N1cnJlbnRDb2xvckluZGV4XSArIHRoaXMudGV4dENvbnRlbnRMaXN0W2ldICsgJzwvY29sb3I+JztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFiZWxDb21wb25lbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsQ29tcG9uZW50TGlzdFtpXS5jb2xvciA9IHRoaXMuY29sb3JbdGhpcy5fY3VycmVudENvbG9ySW5kZXhdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICB9XG59XG4iXX0=