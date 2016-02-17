/*!CK:1687368077!*//*1454957952,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Y0is5"]); }

__d('LayerHideOnBlur',['requestAnimationFrame'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';this._layer=j;}i.prototype.enable=function(){'use strict';this._subscriptions=[this._layer.subscribe('show',this._attach.bind(this)),this._layer.subscribe('hide',this._detach.bind(this))];if(this._layer.isShown())this._attach();};i.prototype.disable=function(){'use strict';this._detach();while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=null;};i.prototype._detach=function(){'use strict';this._onBlur&&this._onBlur.unsubscribe();this._onBlur=null;};i.prototype._attach=function(){'use strict';this._onBlur=this._layer.subscribe('blur',(function(){return h((function(){this._layer.hide();return false;}).bind(this));}).bind(this));};Object.assign(i.prototype,{_subscriptions:null,_onBlur:null});f.exports=i;},null);
__d('AbstractDialog.react',['DialogX','LayerHideOnBlur','LayerHideOnEscape','React','ReactDOM'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=k.PropTypes,n={createSpec:function(o){return {displayName:o.displayName,propTypes:{behaviors:m.object,className:m.string,modal:m.bool,autohide:m.number,width:m.number,titleID:m.string,causalElement:m.object,causalElementRef:m.func,shown:m.bool,layerHideOnBlur:m.bool,hideOnEscape:m.bool,onToggle:m.func,fixedTopPosition:m.number},createLayer:function(p){var q=this.props.className,r=babelHelpers._extends({width:this.props.width,xui:true,autohide:this.props.autohide,classNames:q?q.split(' '):null,titleID:this.props.titleID,causalElement:this._getCausalElement(),fixedTopPosition:this.props.fixedTopPosition},o||{}),s=babelHelpers._extends({},o.addedBehaviors,this.props.behaviors);if(this.props.layerHideOnBlur!==false)s.LayerHideOnBlur=i;if(this.props.hideOnEscape===true)s.LayerHideOnEscape=j;r.addedBehaviors=this.enumerateBehaviors(s);var t=new h(r,p);t.conditionShow(this.props.shown);return t;},receiveProps:function(p,q){this.updateBehaviors(q.behaviors,p.behaviors);if(this.layer){this.layer.setCausalElement(this._getCausalElement());this.layer.conditionShow(p.shown);this.layer.setWidth(p.width);p.shown&&this.layer.updatePosition();}},_getCausalElement:function(){var p;if(this.props.causalElementRef){p=l.findDOMNode(this.props.causalElementRef());}else p=this.props.causalElement;return p;}};}};f.exports=n;},null);
__d('LoadingIndicator.react',['React','Image.react','cx','keyMirror','ix','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=k({white:true,blue:true,black:true}),o=k({small:true,medium:true,large:true}),p={white:{large:l('/images/loaders/indicator_blue_large.gif'),medium:l('/images/loaders/indicator_blue_medium.gif'),small:l('/images/loaders/indicator_blue_small.gif')},blue:{large:l('/images/loaders/indicator_white_large.gif'),small:l('/images/loaders/indicator_white_small.gif')},black:{large:l('/images/loaders/indicator_black.gif')}},q=h.createClass({displayName:'LoadingIndicator',render:function(){var r=this.props.color,s=this.props.size;if(!p[r])return h.createElement('span',null);if(!p[r][s])return h.createElement('span',null);var t=this.props.showonasync?"uiLoadingIndicatorAsync":'',u=p[r][s];return (h.createElement(i,babelHelpers._extends({},this.props,{src:u,className:m(this.props.className,t)})));}});q.SIZES=o;q.COLORS=n;f.exports=q;},null);
__d('ParameterizedPopover',['Arbiter','ArbiterMixin','CSS','DataStore','Event','Focus','Keys','KeyStatus','LayerHideOnEscape','SubscriptionsHandler','Toggler','curry','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u,v;r.subscribe(['show','hide'],function(x,y){var z=k.get(y.getActive(),'Popover');if(z)if(x==='show'){z.showLayer();}else z.hideLayer();});u=babelHelpers.inherits(w,t(i));v=u&&u.prototype;function w(x,y,z,aa){'use strict';v.constructor.call(this);this._root=x;this._triggerElem=y;this._behaviors=z;this._config=aa||{};this._disabled=!!this._config.disabled;this._listeners=new q();if(!this._disabled&&(y.nodeName!=='A'||y.rel!=='toggle'))this._setupClickListener();this._setupKeyListener();y.setAttribute('role','button');k.set(x,'Popover',this);if(r.getActive()===x)this.showLayer();}w.prototype.ensureInit=function(){'use strict';if(!this._layer)this._init();};w.prototype.showLayer=function(){'use strict';this.ensureInit();this._layer.show();r.show(this._root);j.addClass(this._root,'selected');this.inform('show');};w.prototype.getContentRoot=function(){'use strict';return this._root;};w.prototype.getLayer=function(){'use strict';return this._layer;};w.prototype.hideLayer=function(){'use strict';this._layer.hide();};w.prototype.isShown=function(){'use strict';return this._layer&&this._layer.isShown();};w.prototype.setLayerContent=function(x){'use strict';this.ensureInit();if(this._layer.setContent)this._layer.setContent(x);};w.prototype._init=function(){'use strict';var x=this._config.layer;x.enableBehaviors([p]);r.createInstance(x.getRoot()).setSticky(false);x.subscribe('hide',this._onLayerHide.bind(this));this._behaviors&&x.enableBehaviors(this._behaviors);this._layer=x;this.inform('init',null,h.BEHAVIOR_PERSISTENT);};w.prototype._onLayerHide=function(){'use strict';r.hide(this._root);j.removeClass(this._root,'selected');this.inform('hide');if(o.getKeyDownCode()===n.ESC)m.set(this._triggerElem);};w.prototype.enable=function(){'use strict';if(!this._disabled)return;this._listeners.engage();this._setupClickListener();this._setupKeyListener();this._disabled=false;};w.prototype.disable=function(){'use strict';if(this._disabled)return;if(this.isShown())this.hideLayer();this._listeners.release();if(this._triggerElem.getAttribute('rel')==='toggle')this._triggerElem.removeAttribute('rel');this._disabled=true;};w.prototype._setupClickListener=function(){'use strict';this._listeners.addSubscriptions(l.listen(this._triggerElem,'click',s(r.bootstrap,this._triggerElem)));};w.prototype._setupKeyListener=function(){'use strict';this._listeners.addSubscriptions(l.listen(this._triggerElem,'keydown',this._handleKeyEvent.bind(this)));};w.prototype._handleKeyEvent=function(event){'use strict';if(event.getModifiers().any)return;var x=l.getKeyCode(event);switch(x){case n.SPACE:case n.DOWN:case n.UP:if(x===n.SPACE||!this.isShown())r.bootstrap(this._triggerElem);break;default:return;}event.prevent();};w.prototype.destroy=function(){'use strict';this.disable();k.remove(this._root,'Popover');};Object.assign(w.prototype,{_layer:null});f.exports=w;},null);
__d('Popover',['ContextualLayer','ContextualLayerHideOnScroll','DOM','ParameterizedPopover'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;l=babelHelpers.inherits(n,k);m=l&&l.prototype;n.prototype._init=function(){'use strict';var o=new h({context:this._triggerElem,position:'below',arrowDimensions:{offset:12,length:16}},j.create('div'));o.enableBehaviors([i]);this._config.layer=o;if(this._config.alignh)o.setAlignment(this._config.alignh);if(this._config.layer_content)o.setContent(this._config.layer_content);if(this._config.position)o.setPosition(this._config.position);if(this._config.arrowDimensions)o.setArrowDimensions(this._config.arrowDimensions);m._init.call(this);};function n(){'use strict';l.apply(this,arguments);}f.exports=n;},null);
__d('AccessibilityWebAssistiveTechTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();function k(){this.clear();}k.prototype.log=function(){i.log('logger:AccessibilityWebAssistiveTechLoggerConfig',this.$AccessibilityWebAssistiveTechTypedLogger1,h.BASIC);};k.prototype.logVital=function(){i.log('logger:AccessibilityWebAssistiveTechLoggerConfig',this.$AccessibilityWebAssistiveTechTypedLogger1,h.VITAL);};k.prototype.clear=function(){this.$AccessibilityWebAssistiveTechTypedLogger1={};return this;};k.prototype.updateData=function(m){this.$AccessibilityWebAssistiveTechTypedLogger1=babelHelpers._extends({},this.$AccessibilityWebAssistiveTechTypedLogger1,m);return this;};k.prototype.setIndicatedBrowsers=function(m){this.$AccessibilityWebAssistiveTechTypedLogger1.indicated_browsers=i.serializeVector(m);return this;};k.prototype.setVC=function(m){this.$AccessibilityWebAssistiveTechTypedLogger1.vc=m;return this;};k.prototype.updateExtraData=function(m){m=j(i.serializeMap(m));i.checkExtraDataFieldNames(m,l);this.$AccessibilityWebAssistiveTechTypedLogger1=babelHelpers._extends({},this.$AccessibilityWebAssistiveTechTypedLogger1,m);return this;};k.prototype.addToExtraData=function(m,n){var o={};o[m]=n;return this.updateExtraData(o);};var l={indicated_browsers:true,vc:true};f.exports=k;},null);
__d('VirtualCursorStatus',['AccessibilityConfig','AccessibilityWebAssistiveTechTypedLogger','Event','KeyStatus','Set','invariant','setImmediate'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=false,p=false;function q(event){if(!h.a11yVirtualCursorTrigger)return false;var u=k.isKeyDown(),v=event.clientX,w=event.clientY,x=event.offsetX,y=event.offsetY,z=event.mozInputSource,aa=event.WEBKIT_FORCE_AT_MOUSE_DOWN,ba=event.webkitForce,ca=event.getTarget(),da=ca.clientWidth,ea=ca.clientHeight,fa=undefined,ga=new l();if(v===0&&w===0&&p)ga.add('Chrome');if(ba<aa)ga.add('Safari');if(!p&&!u)if(v<0&&w<0){ga.add('Edge');}else if(x<0||x>da||(y<0||y>ea))ga.add('IE');if(z===0)ga.add('Firefox');fa=ga.size>0;if(fa)new i().setIndicatedBrowsers(ga).log();return fa;}function r(){p=true;n(function(){p=false;});}function s(event){o=q(event);n(function(){o=false;});}var t={isVirtualCursorTriggered:function(){return o;},add:function(u){!u?m(0):undefined;var v=j.listen(u,'click',s),w=j.listen(u,'mouseup',r);return {remove:function(){v.remove();w.remove();}};}};f.exports=t;},null);
__d('PopoverMenu',['Arbiter','ArbiterMixin','ARIA','BehaviorsMixin','Event','Focus','Keys','KeyStatus','SubscriptionsHandler','VirtualCursorStatus','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s,t;s=babelHelpers.inherits(u,r(i,k));t=s&&s.prototype;function u(v,w,x,y){'use strict';t.constructor.call(this);this._popover=v;this._triggerElem=w;this._getInitialMenu=typeof x!=='function'?function(){return x;}:x;this._subscriptions=new p();this._subscriptions.addSubscriptions(v.subscribe('init',this._onLayerInit.bind(this)),v.subscribe('show',this._onPopoverShow.bind(this)),v.subscribe('hide',this._onPopoverHide.bind(this)),l.listen(this._triggerElem,'keydown',this._handleKeyEventOnTrigger.bind(this)),q.add(this._triggerElem));y&&this.enableBehaviors(y);}u.prototype.getContentRoot=function(){'use strict';return this._popover.getContentRoot();};u.prototype.setMenu=function(v){'use strict';if(this._menu&&this._menu!==v)this._menu.destroy();this._menu=v;var w=v.getRoot();this._popover.setLayerContent(w);v.subscribe('done',this._onMenuDone.bind(this));if(this._popoverShown)this._menu.onShow();j.owns(this._triggerElem,w);this.inform('setMenu',null,h.BEHAVIOR_PERSISTENT);};u.prototype.setInitialFocus=function(v,w){'use strict';if(w)v.focusAnItem();};u.prototype.getPopover=function(){'use strict';return this._popover;};u.prototype.getTriggerElem=function(){'use strict';return this._triggerElem;};u.prototype.getInitialMenu=function(){'use strict';return this._getInitialMenu();};u.prototype.getMenu=function(){'use strict';return this._menu;};u.prototype._onLayerInit=function(){'use strict';if(!this._menu)this.setMenu(this._getInitialMenu());this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));};u.prototype._onPopoverShow=function(){'use strict';var v=o.isKeyDown()||q.isVirtualCursorTriggered();if(this._menu){this._menu.onShow();this.setInitialFocus(this._menu,v);}this._popoverShown=true;};u.prototype._onPopoverHide=function(){'use strict';if(this._menu)this._menu.onHide();this._popoverShown=false;};u.prototype._handleKeyEvent=function(v,w){'use strict';var x=l.getKeyCode(w);if(x===n.TAB){this._popover.hideLayer();m.set(this._triggerElem);return;}if(w.getModifiers().any)return;switch(x){case n.RETURN:return;default:if(this._menu.handleKeydown(x,w)===false){this._menu.blur();this._menu.handleKeydown(x,w);}break;}w.prevent();};u.prototype._handleKeyEventOnTrigger=function(v){'use strict';var w=l.getKeyCode(v),x=String.fromCharCode(w).toLowerCase();if(/^\w$/.test(x)){this._popover.showLayer();this._menu.blur();if(this._menu.handleKeydown(w,v)===false){this._popover.hideLayer();m.set(this._triggerElem);}}};u.prototype._onMenuDone=function(v){'use strict';var w=o.isKeyDown();setTimeout((function(){this._popover.hideLayer();if(w)m.set(this._triggerElem);}).bind(this),0);};u.prototype.enable=function(){'use strict';this._popover.enable();};u.prototype.disable=function(){'use strict';this._popover.disable();};u.prototype.destroy=function(){'use strict';this._subscriptions.release();this._popover.destroy();this._getInitialMenu().destroy();this._menu&&this._menu.destroy();};Object.assign(u.prototype,{_popoverShown:false});f.exports=u;},null);
__d('PopoverMenu.react',['CSS','InlineBlock.react','Popover','PopoverMenu','React','ReactDOM','ReactElement','SubscriptionsHandler','cx','joinClasses','areEqual','setImmediate'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=l.PropTypes,u=l.createClass({displayName:'ReactPopoverMenu',statics:{getFirstChild:function(v){var w=v.children;return Array.isArray(w)?w[0]:w;},getButtonSize:function(v){var w=u.getFirstChild(v);return w&&w.type.getButtonSize(w.props);}},propTypes:{alignh:t.oneOf(['left','center','right']),alignv:t.oneOf(['baseline','bottom','middle','top']),position:t.oneOf(['above','below','left','right']),layerBehaviors:t.array,menu:t.object.isRequired,disabled:t.bool},getDefaultProps:function(){return {alignv:'middle'};},_menuSubscriptions:null,componentDidMount:function(){var v=m.findDOMNode(this.refs.root),w=v.firstChild;h.addClass(w,"_p");this._popover=new j(v,w,this.props.layerBehaviors,{alignh:this.props.alignh,position:this.props.position,disabled:this.props.disabled,arrowDimensions:{offset:0,length:0}});this._popoverMenu=new k(this._popover,w,this._createMenu(this.props.menu),this.props.behaviors);},componentDidUpdate:function(v){if(!r(v.menu,this.props.menu))s(this._recreateMenu);if(this.props.alignh!==v.alignh)this._popoverMenu.getPopover().getLayer().setAlignment(this.props.alignh);if(this.props.disabled!==v.disabled)if(this.props.disabled){this._popoverMenu.disable();}else this._popoverMenu.enable();},_recreateMenu:function(){if(this._menuSubscriptions){this._menuSubscriptions.release();this._menuSubscriptions=null;}this._unmountCurrentMenuItems();this._popoverMenu.setMenu(this._createMenu(this.props.menu));},render:function(){var v=l.Children.map(this.props.children,function(w,x){if(x===0){return n.cloneAndReplaceProps(w,babelHelpers._extends({},w.props,{className:q(w.props.className,"_p")}));}else return w;});return (l.createElement(i,babelHelpers._extends({},this.props,{className:q(this.props.className,"uiPopover"),ref:'root',disabled:null}),v));},componentWillUnmount:function(){this.hidePopover();if(this._menuSubscriptions){this._menuSubscriptions.release();this._menuSubscriptions=null;}this._popoverMenu&&this._popoverMenu.destroy();},_createMenu:function(v){var w=v.props,x=new v.type(w);this._menuSubscriptions=new o();if(w.onItemClick)this._menuSubscriptions.addSubscriptions(x.subscribe('itemclick',w.onItemClick));if(w.onItemFocus)this._menuSubscriptions.addSubscriptions(x.subscribe('focus',w.onItemFocus));if(w.onItemBlur)this._menuSubscriptions.addSubscriptions(x.subscribe('blur',w.onItemBlur));if(w.onChange)this._menuSubscriptions.addSubscriptions(x.subscribe('change',w.onChange));if(this.props.onShow)this._menuSubscriptions.addSubscriptions(this._popover.subscribe('show',this.props.onShow));if(this.props.onHide)this._menuSubscriptions.addSubscriptions(this._popover.subscribe('hide',this.props.onHide));return x;},getMenu:function(){return this._popoverMenu.getMenu();},showPopover:function(v){this._popover.showLayer();if(v){var w=this._popoverMenu.getMenu();w.blur();w.focusAnItem(v);}},hidePopover:function(){var v=this._popover;if(v&&v.isShown())v.hideLayer();},getFocusedItem:function(){var v=this._popoverMenu.getMenu();return v.getFocusedItem();},_unmountCurrentMenuItems:function(){var v=this.getMenu();v&&v.forEachItem(function(w){var x=w.getRoot().firstElementChild;x&&m.unmountComponentAtNode(x);});}});f.exports=u;},null);
__d('MenuItemNoAction',['MenuItem'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j;i=babelHelpers.inherits(k,h);j=i&&i.prototype;k.prototype.hasAction=function(){'use strict';return false;};function k(){'use strict';i.apply(this,arguments);}f.exports=k;},null);
__d('MenuSelectableItem',['CSS','MenuItem','cx'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;k=babelHelpers.inherits(m,i);l=k&&k.prototype;function m(n){'use strict';l.constructor.call(this,n);this._selected=!!this._data.selected;}m.prototype.getIcon=function(){'use strict';return this._data.icon;};m.prototype.isSelected=function(){'use strict';return this._selected;};m.prototype.select=function(){'use strict';if(this.isDisabled())return false;h.addClass(this._root,"_54nd");this._anchor.setAttribute('aria-selected','true');this._selected=true;};m.prototype.deselect=function(){'use strict';h.removeClass(this._root,"_54nd");this._anchor.setAttribute('aria-selected','false');this._selected=false;};m.prototype.render=function(){'use strict';var n=l.render.call(this);if(this._data.selected){h.addClass(n,"_54nd");this._anchor.setAttribute('aria-selected','true');}return n;};Object.assign(m.prototype,{_selected:false});f.exports=m;},null);
__d("SelectableMenuUtils",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={doesItemSupportSelect:function(j){return i(j);},isSelected:function(j){return i(j)&&j.isSelected();}};function i(j){return j.select&&j.deselect&&j.isSelected;}f.exports=h;},null);
__d('SelectableMenu',['Menu','arrayContains','createArrayFromMixed','SelectableMenuUtils'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;l=babelHelpers.inherits(n,h);m=l&&l.prototype;n.prototype.focusAnItem=function(){'use strict';for(var o=0;o<this._items.length;o++)if(k.isSelected(this._items[o]))if(this._focusItem(this._items[o])!==false)return true;return m.focusAnItem.call(this);};n.prototype.setValue=function(o){'use strict';if(!this._root)this._render();var p=j(o);this._items.forEach(function(q){if(k.doesItemSupportSelect(q))if(i(p,q.getValue())){q.select();}else if(k.isSelected(q))q.deselect();});this.inform('change',this.getSelection());};n.prototype._handleItemClick=function(o,p){'use strict';if(!k.doesItemSupportSelect(o))return m._handleItemClick.call(this,o,p);var q=this.inform('itemclick',{item:o,event:p});if(q)return;if(this._config.multiple){var r=k.isSelected(o)?o.deselect():o.select();if(r!==false)this.inform('change',this.getSelection());}else{if(!k.isSelected(o))if(o.select()!==false){this._items.forEach(function(s){if(k.isSelected(s)&&s!==o)s.deselect();});this.inform('change',this.getSelection());}this.done();}return o.handleClick();};n.prototype.getSelection=function(){'use strict';var o=[];this._items.forEach(function(p){if(k.isSelected(p))o.push({label:p.getLabel(),value:p.getValue(),item:p});});if(!this._config.multiple)o=o[0];return o;};function n(){'use strict';l.apply(this,arguments);}f.exports=n;},null);
__d('ReactMenu',['Menu','MenuItem','MenuItemNoAction','MenuSelectableItem','MenuTheme','ReactChildren','SelectableMenu','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q,r,s,t;function u(y){var z=[];m.forEach(y,function(aa){if(aa)z.push(aa);});return z;}function v(y){y.isReactLegacyFactory={};y.type=y;}q=babelHelpers.inherits(w,h);r=q&&q.prototype;function w(y,z){'use strict';var aa=babelHelpers._extends({theme:l,maxheight:y?y.maxheight:null,className:y?y.className:null},z);r.constructor.call(this,u(y.children),aa);}v(w);s=babelHelpers.inherits(x,n);t=s&&s.prototype;function x(y,z){'use strict';var aa=babelHelpers._extends({className:p("_57di",y?y.className:null),theme:l,multiple:y&&y.multiple,maxheight:y?y.maxheight:null},z);t.constructor.call(this,u(y.children),aa);}v(x);w.SelectableMenu=x;v(i);w.Item=i;w.ItemNoAction=j;v(k);w.SelectableItem=k;f.exports=w;},null);
__d('XUIDialogButton.react',['React','XUIButton.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=h.createClass({displayName:'XUIDialogButton',propTypes:{action:l.oneOf(['cancel','confirm','button'])},render:function(){var n=this.props.action,o=(n=='confirm'?"layerConfirm":'')+(n=='cancel'?' '+"layerCancel":'')+(n=='button'?' '+"layerButton":''),p=this.props.href;if(n=='cancel'){p='#';}else if(n=='button')p=p||'#';return (h.createElement(i,babelHelpers._extends({},this.props,{className:k(this.props.className,o),href:p})));}});f.exports=m;},null);
__d('XUIDialog.react',['AbstractDialog.react','LayerFadeOnShow','ReactLayer'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=j.createClass(h.createSpec({displayName:'XUIDialog',addedBehaviors:{LayerFadeOnShow:i}}));f.exports=k;},null);
__d('XUIDialogBody.react',['React','cx','joinClasses','XUIText.react'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=h.createClass({displayName:'XUIDialogBody',propTypes:{fontSize:l.oneOf(['medium','inherit']),useCustomPadding:l.bool},getDefaultProps:function(){return {fontSize:'medium'};},render:function(){var n="_4-i2"+(!this.props.useCustomPadding?' '+"_57_a":'');return (h.createElement(k,babelHelpers._extends({},this.props,{className:j(this.props.className,n),display:'block',size:this.props.fontSize}),this.props.children));}});f.exports=m;},null);
__d('ReactXUIMenu',['ReactMenu','XUIMenuTheme','XUIMenuWithSquareCorner'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l,m,n;function o(r){r.isReactLegacyFactory={};r.type=r;}k=babelHelpers.inherits(p,h);l=k&&k.prototype;function p(r){'use strict';var s={theme:i};if(!r||r.withsquarecorner!==false)s.behaviors=[j];l.constructor.call(this,r,s);}o(p);m=babelHelpers.inherits(q,h.SelectableMenu);n=m&&m.prototype;function q(r){'use strict';var s={theme:i};if(!r||r.withsquarecorner!==false)s.behaviors=[j];n.constructor.call(this,r,s);}o(q);p.SelectableMenu=q;p.Item=h.Item;p.SelectableItem=h.SelectableItem;f.exports=p;},null);
__d('LinkshimAsyncLink',['$','AsyncSignal','DOM','ErrorUtils','UserAgent_DEPRECATED','LinkshimHandlerConfig'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n={grabTokenFromContextForAnchor:function(o){var p=o;while(!p.getAttribute('data-xt')){if(!p.parentNode){k.reportError(new Error('Missing Tracking Token: LinkshimAsyncLink.grabTokenFromContextFor..'));return;}p=p.parentNode;}var q=p.getAttribute('data-xt'),r=o.href.split('#'),s=r[0].indexOf('?')!==-1;if(!s){o.href+='?xt='+q;}else o.href=r[0]+'&xt='+q+(r[1]||'');},swap:function(o,p){var q=l.ie()<=8;if(q){var r=j.create('wbr',{},null);j.appendContent(o,r);}o.href=p;if(q)j.remove(r);},referrer_log:function(o,p,q){var r=h('meta_referrer');r.content=m.switched_meta_referrer_policy;n.swap(o,p);setTimeout(function(){r.content=m.default_meta_referrer_policy;new i(q,{}).send();},100);}};f.exports=n;},null);
__d('legacy:dom-asynclinkshim',['LinkshimAsyncLink'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.LinkshimAsyncLink=c('LinkshimAsyncLink');},3);
__d('getScrollPosition',['getDocumentScrollElement','getUnboundedScrollPosition'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();function j(k){var l=h();if(k===window)k=l;var m=i(k),n=k===l?document.documentElement:k,o=k.scrollWidth-n.clientWidth,p=k.scrollHeight-n.clientHeight;m.x=Math.max(0,Math.min(m.x,o));m.y=Math.max(0,Math.min(m.y,p));return m;}f.exports=j;},null);
__d('getHashtagRegexString',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){var i='\xc0-\xd6'+'\xd8-\xf6'+'\xf8-\xff'+'\u0100-\u024f'+'\u0253-\u0254'+'\u0256-\u0257'+'\u0259'+'\u025b'+'\u0263'+'\u0268'+'\u026f'+'\u0272'+'\u0289'+'\u028b'+'\u02bb'+'\u0300-\u036f'+'\u1e00-\u1eff',j='\u0400-\u04ff'+'\u0500-\u0527'+'\u2de0-\u2dff'+'\ua640-\ua69f'+'\u0591-\u05bf'+'\u05c1-\u05c2'+'\u05c4-\u05c5'+'\u05c7'+'\u05d0-\u05ea'+'\u05f0-\u05f4'+'\ufb12-\ufb28'+'\ufb2a-\ufb36'+'\ufb38-\ufb3c'+'\ufb3e'+'\ufb40-\ufb41'+'\ufb43-\ufb44'+'\ufb46-\ufb4f'+'\u0610-\u061a'+'\u0620-\u065f'+'\u066e-\u06d3'+'\u06d5-\u06dc'+'\u06de-\u06e8'+'\u06ea-\u06ef'+'\u06fa-\u06fc'+'\u06ff'+'\u0750-\u077f'+'\u08a0'+'\u08a2-\u08ac'+'\u08e4-\u08fe'+'\ufb50-\ufbb1'+'\ufbd3-\ufd3d'+'\ufd50-\ufd8f'+'\ufd92-\ufdc7'+'\ufdf0-\ufdfb'+'\ufe70-\ufe74'+'\ufe76-\ufefc'+'\u200c-\u200c'+'\u0e01-\u0e3a'+'\u0e40-\u0e4e'+'\u1100-\u11ff'+'\u3130-\u3185'+'\uA960-\uA97F'+'\uAC00-\uD7AF'+'\uD7B0-\uD7FF'+'\uFFA1-\uFFDC',k=String.fromCharCode,l='\u30A1-\u30FA\u30FC-\u30FE'+'\uFF66-\uFF9F'+'\uFF10-\uFF19\uFF21-\uFF3A'+'\uFF41-\uFF5A'+'\u3041-\u3096\u3099-\u309E'+'\u3400-\u4DBF'+'\u4E00-\u9FFF'+k(173824)+'-'+k(177983)+k(177984)+'-'+k(178207)+k(194560)+'-'+k(195103)+'\u3003\u3005\u303B',m=i+j+l,n='\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6'+'\u00F8-\u0241\u0250-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EE\u037A\u0386'+'\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03CE\u03D0-\u03F5\u03F7-\u0481'+'\u048A-\u04CE\u04D0-\u04F9\u0500-\u050F\u0531-\u0556\u0559\u0561-\u0587'+'\u05D0-\u05EA\u05F0-\u05F2\u0621-\u063A\u0640-\u064A\u066E-\u066F'+'\u0671-\u06D3\u06D5\u06E5-\u06E6\u06EE-\u06EF\u06FA-\u06FC\u06FF\u0710'+'\u0712-\u072F\u074D-\u076D\u0780-\u07A5\u07B1\u0904-\u0939\u093D\u0950'+'\u0958-\u0961\u097D\u0985-\u098C\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0'+'\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC-\u09DD\u09DF-\u09E1\u09F0-\u09F1'+'\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33'+'\u0A35-\u0A36\u0A38-\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D'+'\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD'+'\u0AD0\u0AE0-\u0AE1\u0B05-\u0B0C\u0B0F-\u0B10\u0B13-\u0B28\u0B2A-\u0B30'+'\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B5C-\u0B5D\u0B5F-\u0B61\u0B71\u0B83'+'\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F'+'\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0C05-\u0C0C\u0C0E-\u0C10'+'\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C60-\u0C61\u0C85-\u0C8C'+'\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE'+'\u0CE0-\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39'+'\u0D60-\u0D61\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6'+'\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E46\u0E81-\u0E82\u0E84\u0E87-\u0E88'+'\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7'+'\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6'+'\u0EDC-\u0EDD\u0F00\u0F40-\u0F47\u0F49-\u0F6A\u0F88-\u0F8B\u1000-\u1021'+'\u1023-\u1027\u1029-\u102A\u1050-\u1055\u10A0-\u10C5\u10D0-\u10FA\u10FC'+'\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1248\u124A-\u124D'+'\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0'+'\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310'+'\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C'+'\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711'+'\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7'+'\u17DC\u1820-\u1877\u1880-\u18A8\u1900-\u191C\u1950-\u196D\u1970-\u1974'+'\u1980-\u19A9\u19C1-\u19C7\u1A00-\u1A16\u1D00-\u1DBF\u1E00-\u1E9B'+'\u1EA0-\u1EF9\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D'+'\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC'+'\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC'+'\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u2094\u2102\u2107'+'\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D'+'\u212F-\u2131\u2133-\u2139\u213C-\u213F\u2145-\u2149\u2C00-\u2C2E'+'\u2C30-\u2C5E\u2C80-\u2CE4\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96'+'\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6'+'\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3006\u3031-\u3035'+'\u303B-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF'+'\u3105-\u312C\u3131-\u318E\u31A0-\u31B7\u31F0-\u31FF\u3400-\u4DB5'+'\u4E00-\u9FBB\uA000-\uA48C\uA800-\uA801\uA803-\uA805\uA807-\uA80A'+'\uA80C-\uA822\uAC00-\uD7A3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9'+'\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C'+'\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F'+'\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A'+'\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7'+'\uFFDA-\uFFDC',o='\u0300-\u036F\u0483-\u0486\u0591-\u05B9\u05BB-\u05BD\u05BF'+'\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u0615\u064B-\u065E\u0670'+'\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\u0711\u0730-\u074A'+'\u07A6-\u07B0\u0901-\u0903\u093C\u093E-\u094D\u0951-\u0954\u0962-\u0963'+'\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7-\u09C8\u09CB-\u09CD\u09D7'+'\u09E2-\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47-\u0A48\u0A4B-\u0A4D'+'\u0A70-\u0A71\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD'+'\u0AE2-\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B43\u0B47-\u0B48\u0B4B-\u0B4D'+'\u0B56-\u0B57\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7'+'\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55-\u0C56'+'\u0C82-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5-\u0CD6'+'\u0D02-\u0D03\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D82-\u0D83'+'\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2-\u0DF3\u0E31\u0E34-\u0E3A'+'\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB-\u0EBC\u0EC8-\u0ECD\u0F18-\u0F19'+'\u0F35\u0F37\u0F39\u0F3E-\u0F3F\u0F71-\u0F84\u0F86-\u0F87\u0F90-\u0F97'+'\u0F99-\u0FBC\u0FC6\u102C-\u1032\u1036-\u1039\u1056-\u1059\u135F'+'\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17B6-\u17D3\u17DD'+'\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8-\u19C9'+'\u1A17-\u1A1B\u1DC0-\u1DC3\u20D0-\u20DC\u20E1\u20E5-\u20EB\u302A-\u302F'+'\u3099-\u309A\uA802\uA806\uA80B\uA823-\uA827\uFB1E\uFE00-\uFE0F'+'\uFE20-\uFE23',p='\u0030-\u0039\u0660-\u0669\u06F0-\u06F9\u0966-\u096F\u09E6-\u09EF'+'\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F'+'\u0CE6-\u0CEF\u0D66-\u0D6F\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29'+'\u1040-\u1049\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9'+'\uFF10-\uFF19',q=n+o+m,r=p+'_',s=q+r,t='['+q+']',u='['+s+']',v='^|$|[^&/'+s+']',w='[#\\uFF03]',x='('+v+')('+w+')('+u+'*'+t+u+'*)';return x;}f.exports=h;},null);
__d('getHashtagRegex',['getHashtagRegexString'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(){return new RegExp(h(),'ig');}f.exports=i;},null);
__d('MercuryIDs',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isValid:function(i){if(!i||typeof i!=='string')return false;return (/^\w{3,12}:/.test(i));},isValidThreadID:function(i){if(!h.isValid(i))return false;var j=h.tokenize(i);switch(j.type){case 'user':case 'group':case 'thread':case 'root':case 'pending':return true;default:return false;}},tokenize:function(i){if(!this.isValid(i))throw new Error('bad_id_format '+i);var j=i.indexOf(':');return {type:i.substr(0,j),value:i.substr(j+1)};},getUserIDFromParticipantID:function(i){if(!this.isValid(i))throw new Error('bad_id_format '+i);var j=h.tokenize(i),k=j.type,l=j.value;if(k!='fbid')return null;return l;},getParticipantIDFromUserID:function(i){if(isNaN(i))throw new Error('Not a user ID: '+i);return 'fbid:'+i;},getUserIDFromThreadID:function(i){if(!this.isCanonical(i))return null;return this.tokenize(i).value;},getThreadIDFromUserID:function(i){return 'user:'+i;},getThreadIDFromThreadFBID:function(i){return 'thread:'+i;},getThreadIDFromParticipantID:function(i){var j=this.getUserIDFromParticipantID(i);return j?this.getThreadIDFromUserID(j):null;},getParticipantIDFromFromThreadID:function(i){return this.getParticipantIDFromUserID(this.getUserIDFromThreadID(i)||'');},isCanonical:function(i){return this.isValid(i)&&this.tokenize(i).type==='user';},isGroupChat:function(i){return this.isValid(i)&&this.tokenize(i).type!=='user';},isLocalThread:function(i){return this.isValid(i)&&this.tokenize(i).type==='root';}};f.exports=h;},null);
__d('BookmarkFeedSorter',['Run'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j={init:function(k){i=k;h.onLeave(function(){i=null;});},setChecked:function(k){if(i)i.setValue(k);}};f.exports=j;},null);
__d('LitestandStream',['CSS','LitestandStoryInsertionStatus','ViewportBounds','cx','csx','getElementPosition','nullthrows'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o,p,q={init:function(r,s,t){o=t;p=r;},getStoriesSelector:function(){return "._5jmm";},getStreamRoot:function(){return p;},getSectionID:function(){return o;},isStory:function(r){return h.hasClass(r,"_5jmm");},canInsertNewerStories:function(){if(j.getTop()>m(q.getStreamRoot()).y)return false;return i.canInsert();},getFeedStreamID:function(){return parseInt(n(p).id.split('feed_stream_')[1],16)%1e+08;}};f.exports=q;},null);
__d('MercurySendErrorLogger',['Banzai','BanzaiLogger'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=i.create({retry:true}),k=h.isEnabled('mercury_send_error_logging'),l={log:function(m){if(!k)return;var n={message_id:m.message_id,timestamp_client:Date.now(),error_type:m.error_data.type,error_code:m.error_data.code,error_description:m.error_data.description,is_transient:m.error_data.is_transient};j.log('MercurySendErrorLoggerConfig',n);}};f.exports=l;},null);
__d('FBID',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={isUser:function(i){return i<2.2e+09||i>=1e+14&&i<=100099999989999||i>=8.9e+13&&i<=89999999999999||i>=6.000001e+13&&i<=60000019999999;}};f.exports=h;},null);
__d('ContextualLayerPositionClassOnContext',['CSS','cx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(l){'use strict';this._layer=l;}j.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('reposition',this._updateClassName.bind(this));if(this._layer.isShown())this._updateClassName();};j.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;if(this._prevClassName){h.removeClass(this._layer.getContext(),this._prevClassName);this._prevClassName=null;}};j.prototype._updateClassName=function(l,m){'use strict';var n=this._layer.getContext(),o=k(m);if(this._prevClassName){if(this._prevClassName===o)return;h.removeClass(n,this._prevClassName);}h.addClass(n,o);this._prevClassName=o;};function k(l){var m=l.getAlignment(),n=l.getPosition();if(n==='below'){if(m==='left'){return "_nk";}else if(m==='right'){return "_nl";}else return "_nm";}else if(n==='above'){if(m==='left'){return "_nn";}else if(m==='right'){return "_no";}else return "_np";}else if(n==='left'){return "_nq";}else return "_nr";}Object.assign(j.prototype,{_subscription:null,_prevClassName:null});f.exports=j;},null);
__d('LayerFadeOnHide',['Animation','Layer','Style','UserAgent_DEPRECATED','emptyFunction','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(o){'use strict';this._layer=o;}n.prototype.enable=function(){'use strict';if(k.ie()<9)return;this._subscription=this._layer.subscribe('starthide',this._handleStartHide.bind(this));};n.prototype.disable=function(){'use strict';if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};n.prototype._getDuration=function(){'use strict';return 150;};n.prototype._handleStartHide=function(){'use strict';var o=true,p=i.subscribe('show',function(){p.unsubscribe();o=false;});m((function(){p.unsubscribe();p=null;var q=(function(){this._layer.finishHide();}).bind(this);if(o){this._animate(q);}else q();}).bind(this),0);return false;};n.prototype._animate=function(o){'use strict';var p=this._layer.getRoot();new h(p).from('opacity',1).to('opacity',0).duration(this._getDuration()).ondone(function(){j.set(p,'opacity','');o();}).go();};n.forDuration=function(o){var p,q;'use strict';p=babelHelpers.inherits(r,n);q=p&&p.prototype;function r(){p.apply(this,arguments);}r.prototype._getDuration=l.thatReturns(o);return r;};Object.assign(n.prototype,{_subscription:null});f.exports=n;},null);
__d('XUIAmbientNUXTheme',['cx'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={wrapperClassName:"_2x6q",arrowDimensions:{offset:14,length:18}};f.exports=i;},null);