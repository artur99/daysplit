/*!
 * jQuery JavaScript Library v2.2.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-03-17T17:51Z
 */
if(function(global,factory){"object"==typeof module&&"object"==typeof module.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=global.document?factory(global,!0):function(w){if(!w.document)throw new Error("jQuery requires a window with a document");return factory(w)}:factory(global)}("undefined"!=typeof window?window:this,function(window,noGlobal){function isArrayLike(obj){
// Support: iOS 8.2 (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);return"function"===type||jQuery.isWindow(obj)?!1:"array"===type||0===length||"number"==typeof length&&length>0&&length-1 in obj}
// Implement the identical functionality for filter and not
function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier))return jQuery.grep(elements,function(elem,i){/* jshint -W018 */
return!!qualifier.call(elem,i,elem)!==not});if(qualifier.nodeType)return jQuery.grep(elements,function(elem){return elem===qualifier!==not});if("string"==typeof qualifier){if(risSimple.test(qualifier))return jQuery.filter(qualifier,elements,not);qualifier=jQuery.filter(qualifier,elements)}return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not})}function sibling(cur,dir){for(;(cur=cur[dir])&&1!==cur.nodeType;);return cur}
// Convert String-formatted options into Object-formatted ones
function createOptions(options){var object={};return jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=!0}),object}/**
 * The ready event handler and self cleanup method
 */
function completed(){document.removeEventListener("DOMContentLoaded",completed),window.removeEventListener("load",completed),jQuery.ready()}function Data(){this.expando=jQuery.expando+Data.uid++}function dataAttr(elem,key,data){var name;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===data&&1===elem.nodeType)if(name="data-"+key.replace(rmultiDash,"-$&").toLowerCase(),data=elem.getAttribute(name),"string"==typeof data){try{data="true"===data?!0:"false"===data?!1:"null"===data?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data}catch(e){}
// Make sure we set the data so it isn't changed later
dataUser.set(elem,key,data)}else data=void 0;return data}function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur()}:function(){return jQuery.css(elem,prop,"")},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),
// Starting value computation is required for potential unit mismatches
initialInUnit=(jQuery.cssNumber[prop]||"px"!==unit&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){
// Trust units reported by jQuery.css
unit=unit||initialInUnit[3],
// Make sure we update the tween properties later on
valueParts=valueParts||[],
// Iteratively approximate from a nonzero starting point
initialInUnit=+initial||1;do scale=scale||".5",initialInUnit/=scale,jQuery.style(elem,prop,initialInUnit+unit);while(scale!==(scale=currentValue()/initial)&&1!==scale&&--maxIterations)}
// Apply relative offset (+=/-=) if specified
return valueParts&&(initialInUnit=+initialInUnit||+initial||0,adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2],tween&&(tween.unit=unit,tween.start=initialInUnit,tween.end=adjusted)),adjusted}function getAll(context,tag){
// Support: IE9-11+
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var ret="undefined"!=typeof context.getElementsByTagName?context.getElementsByTagName(tag||"*"):"undefined"!=typeof context.querySelectorAll?context.querySelectorAll(tag||"*"):[];return void 0===tag||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret}
// Mark scripts as having already been evaluated
function setGlobalEval(elems,refElements){for(var i=0,l=elems.length;l>i;i++)dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"))}function buildFragment(elems,context,scripts,selection,ignored){for(var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;l>i;i++)if(elem=elems[i],elem||0===elem)
// Add nodes directly
if("object"===jQuery.type(elem))
// Support: Android<4.1, PhantomJS<2
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,elem.nodeType?[elem]:elem);else if(rhtml.test(elem)){for(tmp=tmp||fragment.appendChild(context.createElement("div")),
// Deserialize a standard representation
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase(),wrap=wrapMap[tag]||wrapMap._default,tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2],
// Descend through wrappers to the right content
j=wrap[0];j--;)tmp=tmp.lastChild;
// Support: Android<4.1, PhantomJS<2
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,tmp.childNodes),
// Remember the top-level container
tmp=fragment.firstChild,
// Ensure the created nodes are orphaned (#12392)
tmp.textContent=""}else nodes.push(context.createTextNode(elem));for(
// Remove wrapper from fragment
fragment.textContent="",i=0;elem=nodes[i++];)
// Skip elements already in the context collection (trac-4087)
if(selection&&jQuery.inArray(elem,selection)>-1)ignored&&ignored.push(elem);else
// Capture executables
if(contains=jQuery.contains(elem.ownerDocument,elem),tmp=getAll(fragment.appendChild(elem),"script"),contains&&setGlobalEval(tmp),scripts)for(j=0;elem=tmp[j++];)rscriptType.test(elem.type||"")&&scripts.push(elem);return fragment}function returnTrue(){return!0}function returnFalse(){return!1}
// Support: IE9
// See #13393 for more info
function safeActiveElement(){try{return document.activeElement}catch(err){}}function on(elem,types,selector,data,fn,one){var origFn,type;
// Types can be a map of types/handlers
if("object"==typeof types){
// ( types-Object, selector, data )
"string"!=typeof selector&&(data=data||selector,selector=void 0);for(type in types)on(elem,type,selector,data,types[type],one);return elem}if(null==data&&null==fn?(fn=selector,data=selector=void 0):null==fn&&("string"==typeof selector?(fn=data,data=void 0):(fn=data,data=selector,selector=void 0)),fn===!1)fn=returnFalse;else if(!fn)return elem;
// Use same guid so caller can remove using origFn
return 1===one&&(origFn=fn,fn=function(event){return jQuery().off(event),origFn.apply(this,arguments)},fn.guid=origFn.guid||(origFn.guid=jQuery.guid++)),elem.each(function(){jQuery.event.add(this,types,fn,data,selector)})}
// Manipulating tables requires a tbody
function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(11!==content.nodeType?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript(elem){return elem.type=(null!==elem.getAttribute("type"))+"/"+elem.type,elem}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);return match?elem.type=match[1]:elem.removeAttribute("type"),elem}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(1===dest.nodeType){
// 1. Copy private data: events, handlers, etc.
if(dataPriv.hasData(src)&&(pdataOld=dataPriv.access(src),pdataCur=dataPriv.set(dest,pdataOld),events=pdataOld.events)){delete pdataCur.handle,pdataCur.events={};for(type in events)for(i=0,l=events[type].length;l>i;i++)jQuery.event.add(dest,type,events[type][i])}
// 2. Copy user data
dataUser.hasData(src)&&(udataOld=dataUser.access(src),udataCur=jQuery.extend({},udataOld),dataUser.set(dest,udataCur))}}
// Fix IE bugs, see support tests
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===nodeName&&rcheckableType.test(src.type)?dest.checked=src.checked:"input"!==nodeName&&"textarea"!==nodeName||(dest.defaultValue=src.defaultValue)}function domManip(collection,args,callback,ignored){
// Flatten any nested arrays
args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);
// We can't cloneNode fragments that contain checked, in WebKit
if(isFunction||l>1&&"string"==typeof value&&!support.checkClone&&rchecked.test(value))return collection.each(function(index){var self=collection.eq(index);isFunction&&(args[0]=value.call(this,index,self.html())),domManip(self,args,callback,ignored)});if(l&&(fragment=buildFragment(args,collection[0].ownerDocument,!1,collection,ignored),first=fragment.firstChild,1===fragment.childNodes.length&&(fragment=first),first||ignored)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(scripts=jQuery.map(getAll(fragment,"script"),disableScript),hasScripts=scripts.length;l>i;i++)node=fragment,i!==iNoClone&&(node=jQuery.clone(node,!0,!0),hasScripts&&jQuery.merge(scripts,getAll(node,"script"))),callback.call(collection[i],node,i);if(hasScripts)
// Evaluate executable scripts on first document insertion
for(doc=scripts[scripts.length-1].ownerDocument,jQuery.map(scripts,restoreScript),i=0;hasScripts>i;i++)node=scripts[i],rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)&&(node.src?jQuery._evalUrl&&jQuery._evalUrl(node.src):jQuery.globalEval(node.textContent.replace(rcleanScript,"")))}return collection}function remove(elem,selector,keepData){for(var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;null!=(node=nodes[i]);i++)keepData||1!==node.nodeType||jQuery.cleanData(getAll(node)),node.parentNode&&(keepData&&jQuery.contains(node.ownerDocument,node)&&setGlobalEval(getAll(node,"script")),node.parentNode.removeChild(node));return elem}/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");
// We don't have any data stored on the element,
// so use "detach" method as fast way to get rid of the element
return elem.detach(),display}/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];
// If the simple way fails, read from inside an iframe
// Use the already-created iframe if possible
// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
// Support: IE
// Store the correct default display
return display||(display=actualDisplay(nodeName,doc),"none"!==display&&display||(iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement),doc=iframe[0].contentDocument,doc.write(),doc.close(),display=actualDisplay(nodeName,doc),iframe.detach()),elemdisplay[nodeName]=display),display}function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;
// Support: Opera 12.1x only
// Fall back to style even without computed
// computed is undefined for elems on document fragments
// Support: IE9
// getPropertyValue is only needed for .css('filter') (#12537)
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
// Support: IE9-11+
// IE returns zIndex value as an integer.
return computed=computed||getStyles(elem),ret=computed?computed.getPropertyValue(name)||computed[name]:void 0,""!==ret&&void 0!==ret||jQuery.contains(elem.ownerDocument,elem)||(ret=jQuery.style(elem,name)),computed&&!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)&&(width=style.width,minWidth=style.minWidth,maxWidth=style.maxWidth,style.minWidth=style.maxWidth=style.width=ret,ret=computed.width,style.width=width,style.minWidth=minWidth,style.maxWidth=maxWidth),void 0!==ret?ret+"":ret}function addGetHookIf(conditionFn,hookFn){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
return conditionFn()?void delete this.get:(this.get=hookFn).apply(this,arguments)}}}
// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName(name){
// Shortcut for names that are not vendor prefixed
if(name in emptyStyle)return name;for(
// Check for vendor prefixed names
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;i--;)if(name=cssPrefixes[i]+capName,name in emptyStyle)return name}function setPositiveNumber(elem,value,subtract){
// Any relative (+/-) values have already been
// normalized at this point
var matches=rcssNum.exec(value);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return matches?Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){for(var i=extra===(isBorderBox?"border":"content")?
// If we already have the right measurement, avoid augmentation
4:"width"===name?1:0,val=0;4>i;i+=2)
// Both box models exclude margin, so add it if we want it
"margin"===extra&&(val+=jQuery.css(elem,extra+cssExpand[i],!0,styles)),isBorderBox?(
// border-box includes padding, so remove it if we want content
"content"===extra&&(val-=jQuery.css(elem,"padding"+cssExpand[i],!0,styles)),
// At this point, extra isn't border nor margin, so remove border
"margin"!==extra&&(val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",!0,styles))):(val+=jQuery.css(elem,"padding"+cssExpand[i],!0,styles),"padding"!==extra&&(val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",!0,styles)));return val}function getWidthOrHeight(elem,name,extra){
// Start with offset property, which is equivalent to the border-box value
var valueIsBorderBox=!0,val="width"===name?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox="border-box"===jQuery.css(elem,"boxSizing",!1,styles);
// Some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(
// Support: IE11 only
// In IE 11 fullscreen elements inside of an iframe have
// 100x too small dimensions (gh-1764).
document.msFullscreenElement&&window.top!==window&&elem.getClientRects().length&&(val=Math.round(100*elem.getBoundingClientRect()[name])),0>=val||null==val){
// Computed unit is not pixels. Stop here and return.
if(val=curCSS(elem,name,styles),(0>val||null==val)&&(val=elem.style[name]),rnumnonpx.test(val))return val;
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]),
// Normalize "", auto, and prepare for extra
val=parseFloat(val)||0}
// Use the active box-sizing model to add/subtract irrelevant styles
return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px"}function showHide(elements,show){for(var display,elem,hidden,values=[],index=0,length=elements.length;length>index;index++)elem=elements[index],elem.style&&(values[index]=dataPriv.get(elem,"olddisplay"),display=elem.style.display,show?(values[index]||"none"!==display||(elem.style.display=""),""===elem.style.display&&isHidden(elem)&&(values[index]=dataPriv.access(elem,"olddisplay",defaultDisplay(elem.nodeName)))):(hidden=isHidden(elem),"none"===display&&hidden||dataPriv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"))));
// Set the display of most of the elements in a second loop
// to avoid the constant reflow
for(index=0;length>index;index++)elem=elements[index],elem.style&&(show&&"none"!==elem.style.display&&""!==elem.style.display||(elem.style.display=show?values[index]||"":"none"));return elements}function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing)}
// Animations created synchronously will run synchronously
function createFxNow(){return window.setTimeout(function(){fxNow=void 0}),fxNow=jQuery.now()}
// Generate parameters to create a standard animation
function genFx(type,includeWidth){var which,i=0,attrs={height:type};for(
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
includeWidth=includeWidth?1:0;4>i;i+=2-includeWidth)which=cssExpand[i],attrs["margin"+which]=attrs["padding"+which]=type;return includeWidth&&(attrs.opacity=attrs.width=type),attrs}function createTween(value,prop,animation){for(var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;length>index;index++)if(tween=collection[index].call(animation,prop,value))
// We're done with this property
return tween}function defaultPrefilter(elem,props,opts){/* jshint validthis: true */
var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=dataPriv.get(elem,"fxshow");
// Handle queue: false promises
opts.queue||(hooks=jQuery._queueHooks(elem,"fx"),null==hooks.unqueued&&(hooks.unqueued=0,oldfire=hooks.empty.fire,hooks.empty.fire=function(){hooks.unqueued||oldfire()}),hooks.unqueued++,anim.always(function(){anim.always(function(){hooks.unqueued--,jQuery.queue(elem,"fx").length||hooks.empty.fire()})})),
// Height/width overflow pass
1===elem.nodeType&&("height"in props||"width"in props)&&(
// Make sure that nothing sneaks out
// Record all 3 overflow attributes because IE9-10 do not
// change the overflow attribute when overflowX and
// overflowY are set to the same value
opts.overflow=[style.overflow,style.overflowX,style.overflowY],display=jQuery.css(elem,"display"),checkDisplay="none"===display?dataPriv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display,"inline"===checkDisplay&&"none"===jQuery.css(elem,"float")&&(style.display="inline-block")),opts.overflow&&(style.overflow="hidden",anim.always(function(){style.overflow=opts.overflow[0],style.overflowX=opts.overflow[1],style.overflowY=opts.overflow[2]}));
// show/hide pass
for(prop in props)if(value=props[prop],rfxtypes.exec(value)){if(delete props[prop],toggle=toggle||"toggle"===value,value===(hidden?"hide":"show")){
// If there is dataShow left over from a stopped hide or show
// and we are going to proceed with show, we should pretend to be hidden
if("show"!==value||!dataShow||void 0===dataShow[prop])continue;hidden=!0}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop)}else display=void 0;if(jQuery.isEmptyObject(orig))"inline"===("none"===display?defaultDisplay(elem.nodeName):display)&&(style.display=display);else{dataShow?"hidden"in dataShow&&(hidden=dataShow.hidden):dataShow=dataPriv.access(elem,"fxshow",{}),
// Store state if its toggle - enables .stop().toggle() to "reverse"
toggle&&(dataShow.hidden=!hidden),hidden?jQuery(elem).show():anim.done(function(){jQuery(elem).hide()}),anim.done(function(){var prop;dataPriv.remove(elem,"fxshow");for(prop in orig)jQuery.style(elem,prop,orig[prop])});for(prop in orig)tween=createTween(hidden?dataShow[prop]:0,prop,anim),prop in dataShow||(dataShow[prop]=tween.start,hidden&&(tween.end=tween.start,tween.start="width"===prop||"height"===prop?1:0))}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;
// camelCase, specialEasing and expand cssHook pass
for(index in props)if(name=jQuery.camelCase(index),easing=specialEasing[name],value=props[index],jQuery.isArray(value)&&(easing=value[1],value=props[index]=value[0]),index!==name&&(props[name]=value,delete props[index]),hooks=jQuery.cssHooks[name],hooks&&"expand"in hooks){value=hooks.expand(value),delete props[name];
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(index in value)index in props||(props[index]=value[index],specialEasing[index]=easing)}else specialEasing[name]=easing}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){
// Don't match elem in the :animated selector
delete tick.elem}),tick=function(){if(stopped)return!1;for(var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),
// Support: Android 2.3
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;length>index;index++)animation.tweens[index].run(percent);return deferred.notifyWith(elem,[animation,percent,remaining]),1>percent&&length?remaining:(deferred.resolveWith(elem,[animation]),!1)},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(!0,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);return animation.tweens.push(tween),tween},stop:function(gotoEnd){var index=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
length=gotoEnd?animation.tweens.length:0;if(stopped)return this;for(stopped=!0;length>index;index++)animation.tweens[index].run(1);
// Resolve when we played the last frame; otherwise, reject
return gotoEnd?(deferred.notifyWith(elem,[animation,1,0]),deferred.resolveWith(elem,[animation,gotoEnd])):deferred.rejectWith(elem,[animation,gotoEnd]),this}}),props=animation.props;for(propFilter(props,animation.opts.specialEasing);length>index;index++)if(result=Animation.prefilters[index].call(animation,elem,props,animation.opts))return jQuery.isFunction(result.stop)&&(jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result)),result;
// attach callbacks from options
return jQuery.map(props,createTween,animation),jQuery.isFunction(animation.opts.start)&&animation.opts.start.call(elem,animation),jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue})),animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)}function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||""}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports(structure){
// dataTypeExpression is optional and defaults to "*"
return function(dataTypeExpression,func){"string"!=typeof dataTypeExpression&&(func=dataTypeExpression,dataTypeExpression="*");var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func))
// For each dataType in the dataTypeExpression
for(;dataType=dataTypes[i++];)
// Prepend if requested
"+"===dataType[0]?(dataType=dataType.slice(1)||"*",(structure[dataType]=structure[dataType]||[]).unshift(func)):(structure[dataType]=structure[dataType]||[]).push(func)}}
// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){function inspect(dataType){var selected;return inspected[dataType]=!0,jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);return"string"!=typeof dataTypeOrTransport||seekingTransport||inspected[dataTypeOrTransport]?seekingTransport?!(selected=dataTypeOrTransport):void 0:(options.dataTypes.unshift(dataTypeOrTransport),inspect(dataTypeOrTransport),!1)}),selected}var inspected={},seekingTransport=structure===transports;return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src)void 0!==src[key]&&((flatOptions[key]?target:deep||(deep={}))[key]=src[key]);return deep&&jQuery.extend(!0,target,deep),target}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses(s,jqXHR,responses){
// Remove auto dataType and get content-type in the process
for(var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;"*"===dataTypes[0];)dataTypes.shift(),void 0===ct&&(ct=s.mimeType||jqXHR.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(ct)for(type in contents)if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break}
// Check to see if we have a response for the expected dataType
if(dataTypes[0]in responses)finalDataType=dataTypes[0];else{
// Try convertible dataTypes
for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break}firstDataType||(firstDataType=type)}
// Or just use first one
finalDataType=finalDataType||firstDataType}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
return finalDataType?(finalDataType!==dataTypes[0]&&dataTypes.unshift(finalDataType),responses[finalDataType]):void 0}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},
// Work with a copy of dataTypes in case we need to modify it for conversion
dataTypes=s.dataTypes.slice();
// Create converters map with lowercased keys
if(dataTypes[1])for(conv in s.converters)converters[conv.toLowerCase()]=s.converters[conv];
// Convert to each sequential dataType
for(current=dataTypes.shift();current;)if(s.responseFields[current]&&(jqXHR[s.responseFields[current]]=response),
// Apply the dataFilter if provided
!prev&&isSuccess&&s.dataFilter&&(response=s.dataFilter(response,s.dataType)),prev=current,current=dataTypes.shift())
// There's only work to do if current dataType is non-auto
if("*"===current)current=prev;else if("*"!==prev&&prev!==current){
// If none found, seek a pair
if(conv=converters[prev+" "+current]||converters["* "+current],!conv)for(conv2 in converters)if(tmp=conv2.split(" "),tmp[1]===current&&(conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]])){
// Condense equivalence converters
conv===!0?conv=converters[conv2]:converters[conv2]!==!0&&(current=tmp[0],dataTypes.unshift(tmp[1]));break}
// Apply converter (if not an equivalence)
if(conv!==!0)
// Unless errors are allowed to bubble, catch and return them
if(conv&&s["throws"])response=conv(response);else try{response=conv(response)}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current}}}return{state:"success",data:response}}function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj))
// Serialize array item.
jQuery.each(obj,function(i,v){traditional||rbracket.test(prefix)?
// Treat each array item as a scalar.
add(prefix,v):
// Item is non-scalar (array or object), encode its numeric index.
buildParams(prefix+"["+("object"==typeof v&&null!=v?i:"")+"]",v,traditional,add)});else if(traditional||"object"!==jQuery.type(obj))
// Serialize scalar item.
add(prefix,obj);else
// Serialize object item.
for(name in obj)buildParams(prefix+"["+name+"]",obj[name],traditional,add)}/**
 * Gets a window from an element
 */
function getWindow(elem){return jQuery.isWindow(elem)?elem:9===elem.nodeType&&elem.defaultView}
// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var arr=[],document=window.document,slice=arr.slice,concat=arr.concat,push=arr.push,indexOf=arr.indexOf,class2type={},toString=class2type.toString,hasOwn=class2type.hasOwnProperty,support={},version="2.2.2",
// Define a local copy of jQuery
jQuery=function(selector,context){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new jQuery.fn.init(selector,context)},
// Support: Android<4.1
// Make sure we trim BOM and NBSP
rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
// Matches dashed string for camelizing
rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,
// Used by jQuery.camelCase as callback to replace()
fcamelCase=function(all,letter){return letter.toUpperCase()};jQuery.fn=jQuery.prototype={
// The current version of jQuery being used
jquery:version,constructor:jQuery,
// Start with an empty selector
selector:"",
// The default length of a jQuery object is 0
length:0,toArray:function(){return slice.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(num){
// Return just the one element from the set
// Return all the elements in a clean array
return null!=num?0>num?this[num+this.length]:this[num]:slice.call(this)},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(elems){
// Build a new jQuery matched element set
var ret=jQuery.merge(this.constructor(),elems);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return ret.prevObject=this,ret.context=this.context,ret},
// Execute a callback for every element in the matched set.
each:function(callback){return jQuery.each(this,callback)},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem)}))},slice:function(){return this.pushStack(slice.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(i){var len=this.length,j=+i+(0>i?len:0);return this.pushStack(j>=0&&len>j?[this[j]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:push,sort:arr.sort,splice:arr.splice},jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=!1;for(
// Handle a deep copy situation
"boolean"==typeof target&&(deep=target,target=arguments[i]||{},i++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof target||jQuery.isFunction(target)||(target={}),
// Extend jQuery itself if only one argument is passed
i===length&&(target=this,i--);length>i;i++)
// Only deal with non-null/undefined values
if(null!=(options=arguments[i]))
// Extend the base object
for(name in options)src=target[name],copy=options[name],target!==copy&&(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))?(copyIsArray?(copyIsArray=!1,clone=src&&jQuery.isArray(src)?src:[]):clone=src&&jQuery.isPlainObject(src)?src:{},target[name]=jQuery.extend(deep,clone,copy)):void 0!==copy&&(target[name]=copy));
// Return the modified object
return target},jQuery.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(msg){throw new Error(msg)},noop:function(){},isFunction:function(obj){return"function"===jQuery.type(obj)},isArray:Array.isArray,isWindow:function(obj){return null!=obj&&obj===obj.window},isNumeric:function(obj){
// parseFloat NaNs numeric-cast false positives (null|true|false|"")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
// adding 1 corrects loss of precision from parseFloat (#15100)
var realStringObj=obj&&obj.toString();return!jQuery.isArray(obj)&&realStringObj-parseFloat(realStringObj)+1>=0},isPlainObject:function(obj){var key;
// Not plain objects:
// - Any object or value whose internal [[Class]] property is not "[object Object]"
// - DOM nodes
// - window
if("object"!==jQuery.type(obj)||obj.nodeType||jQuery.isWindow(obj))return!1;
// Not own constructor property must be Object
if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype||{},"isPrototypeOf"))return!1;
// Own properties are enumerated firstly, so to speed up,
// if last one is own, then all properties are own
for(key in obj);return void 0===key||hasOwn.call(obj,key)},isEmptyObject:function(obj){var name;for(name in obj)return!1;return!0},type:function(obj){return null==obj?obj+"":"object"==typeof obj||"function"==typeof obj?class2type[toString.call(obj)]||"object":typeof obj},
// Evaluates a script in a global context
globalEval:function(code){var script,indirect=eval;code=jQuery.trim(code),code&&(1===code.indexOf("use strict")?(script=document.createElement("script"),script.text=code,document.head.appendChild(script).parentNode.removeChild(script)):indirect(code))},
// Convert dashed to camelCase; used by the css and data modules
// Support: IE9-11+
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase()},each:function(obj,callback){var length,i=0;if(isArrayLike(obj))for(length=obj.length;length>i&&callback.call(obj[i],i,obj[i])!==!1;i++);else for(i in obj)if(callback.call(obj[i],i,obj[i])===!1)break;return obj},
// Support: Android<4.1
trim:function(text){return null==text?"":(text+"").replace(rtrim,"")},
// results is for internal usage only
makeArray:function(arr,results){var ret=results||[];return null!=arr&&(isArrayLike(Object(arr))?jQuery.merge(ret,"string"==typeof arr?[arr]:arr):push.call(ret,arr)),ret},inArray:function(elem,arr,i){return null==arr?-1:indexOf.call(arr,elem,i)},merge:function(first,second){for(var len=+second.length,j=0,i=first.length;len>j;j++)first[i++]=second[j];return first.length=i,first},grep:function(elems,callback,invert){
// Go through the array, only saving the items
// that pass the validator function
for(var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;length>i;i++)callbackInverse=!callback(elems[i],i),callbackInverse!==callbackExpect&&matches.push(elems[i]);return matches},
// arg is for internal usage only
map:function(elems,callback,arg){var length,value,i=0,ret=[];
// Go through the array, translating each of the items to their new values
if(isArrayLike(elems))for(length=elems.length;length>i;i++)value=callback(elems[i],i,arg),null!=value&&ret.push(value);else for(i in elems)value=callback(elems[i],i,arg),null!=value&&ret.push(value);
// Flatten any nested arrays
return concat.apply([],ret)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(fn,context){var tmp,args,proxy;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return"string"==typeof context&&(tmp=fn[context],context=fn,fn=tmp),jQuery.isFunction(fn)?(args=slice.call(arguments,2),proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)))},proxy.guid=fn.guid=fn.guid||jQuery.guid++,proxy):void 0},now:Date.now,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:support}),
// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
"function"==typeof Symbol&&(jQuery.fn[Symbol.iterator]=arr[Symbol.iterator]),/* jshint ignore: end */
// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase()});var Sizzle=/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
function(window){function Sizzle(selector,context,results,seed){var m,i,elem,nid,nidselect,match,groups,newSelector,newContext=context&&context.ownerDocument,
// nodeType defaults to 9, since context defaults to document
nodeType=context?context.nodeType:9;
// Return early from calls with invalid selector or context
if(results=results||[],"string"!=typeof selector||!selector||1!==nodeType&&9!==nodeType&&11!==nodeType)return results;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!seed&&((context?context.ownerDocument||context:preferredDoc)!==document&&setDocument(context),context=context||document,documentIsHTML)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==nodeType&&(match=rquickExpr.exec(selector)))
// ID selector
if(m=match[1]){
// Document context
if(9===nodeType){if(!(elem=context.getElementById(m)))return results;
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(elem.id===m)return results.push(elem),results}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m)return results.push(elem),results}else{if(match[2])return push.apply(results,context.getElementsByTagName(selector)),results;if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName)return push.apply(results,context.getElementsByClassName(m)),results}
// Take advantage of querySelectorAll
if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(1!==nodeType)newContext=context,newSelector=selector;else if("object"!==context.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(nid=context.getAttribute("id"))?nid=nid.replace(rescape,"\\$&"):context.setAttribute("id",nid=expando),
// Prefix every selector in the list
groups=tokenize(selector),i=groups.length,nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";i--;)groups[i]=nidselect+" "+toSelector(groups[i]);newSelector=groups.join(","),
// Expand context for sibling selectors
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context}if(newSelector)try{return push.apply(results,newContext.querySelectorAll(newSelector)),results}catch(qsaError){}finally{nid===expando&&context.removeAttribute("id")}}}
// All others
return select(selector.replace(rtrim,"$1"),context,results,seed)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache(){function cache(key,value){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return keys.push(key+" ")>Expr.cacheLength&&delete cache[keys.shift()],cache[key+" "]=value}var keys=[];return cache}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction(fn){return fn[expando]=!0,fn}/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert(fn){var div=document.createElement("div");try{return!!fn(div)}catch(e){return!1}finally{
// Remove from its parent by default
div.parentNode&&div.parentNode.removeChild(div),
// release memory in IE
div=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle(attrs,handler){for(var arr=attrs.split("|"),i=arr.length;i--;)Expr.attrHandle[arr[i]]=handler}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck(a,b){var cur=b&&a,diff=cur&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE);
// Use IE sourceIndex if available on both nodes
if(diff)return diff;
// Check if b follows a
if(cur)for(;cur=cur.nextSibling;)if(cur===b)return-1;return a?1:-1}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return"input"===name&&elem.type===type}}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return("input"===name||"button"===name)&&elem.type===type}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo(fn){return markFunction(function(argument){return argument=+argument,markFunction(function(seed,matches){for(var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;i--;)seed[j=matchIndexes[i]]&&(seed[j]=!(matches[j]=seed[j]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext(context){return context&&"undefined"!=typeof context.getElementsByTagName&&context}
// Easy API for creating new setFilters
function setFilters(){}function toSelector(tokens){for(var i=0,len=tokens.length,selector="";len>i;i++)selector+=tokens[i].value;return selector}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&"parentNode"===dir,doneName=done++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return combinator.first?function(elem,context,xml){for(;elem=elem[dir];)if(1===elem.nodeType||checkNonElements)return matcher(elem,context,xml)}:function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(xml){for(;elem=elem[dir];)if((1===elem.nodeType||checkNonElements)&&matcher(elem,context,xml))return!0}else for(;elem=elem[dir];)if(1===elem.nodeType||checkNonElements){if(outerCache=elem[expando]||(elem[expando]={}),uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={}),(oldCache=uniqueCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName)
// Assign to newCache so results back-propagate to previous elements
return newCache[2]=oldCache[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
uniqueCache[dir]=newCache,newCache[2]=matcher(elem,context,xml))return!0}}}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){for(var i=matchers.length;i--;)if(!matchers[i](elem,context,xml))return!1;return!0}:matchers[0]}function multipleContexts(selector,contexts,results){for(var i=0,len=contexts.length;len>i;i++)Sizzle(selector,contexts[i],results);return results}function condense(unmatched,map,filter,context,xml){for(var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=null!=map;len>i;i++)(elem=unmatched[i])&&(filter&&!filter(elem,context,xml)||(newUnmatched.push(elem),mapped&&map.push(i)));return newUnmatched}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){return postFilter&&!postFilter[expando]&&(postFilter=setMatcher(postFilter)),postFinder&&!postFinder[expando]&&(postFinder=setMatcher(postFinder,postSelector)),markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,
// Get initial elements from seed or context
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
matcherIn=!preFilter||!seed&&selector?elems:condense(elems,preMap,preFilter,context,xml),matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?
// ...intermediate processing is necessary
[]:results:matcherIn;
// Apply postFilter
if(
// Find primary matches
matcher&&matcher(matcherIn,matcherOut,context,xml),postFilter)for(temp=condense(matcherOut,postMap),postFilter(temp,[],context,xml),
// Un-match failing elements by moving them back to matcherIn
i=temp.length;i--;)(elem=temp[i])&&(matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem));if(seed){if(postFinder||preFilter){if(postFinder){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
temp=[],i=matcherOut.length;i--;)(elem=matcherOut[i])&&
// Restore matcherIn since elem is not yet a final match
temp.push(matcherIn[i]=elem);postFinder(null,matcherOut=[],temp,xml)}for(
// Move matched elements from seed to results to keep them synchronized
i=matcherOut.length;i--;)(elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1&&(seed[temp]=!(results[temp]=elem))}}else matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut),postFinder?postFinder(null,results,matcherOut,xml):push.apply(results,matcherOut)})}function matcherFromTokens(tokens){for(var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
matchContext=addCombinator(function(elem){return elem===checkContext},implicitRelative,!0),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1},implicitRelative,!0),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));
// Avoid hanging onto element (issue #299)
return checkContext=null,ret}];len>i;i++)if(matcher=Expr.relative[tokens[i].type])matchers=[addCombinator(elementMatcher(matchers),matcher)];else{
// Return special upon seeing a positional matcher
if(matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches),matcher[expando]){for(
// Find the next relative operator (if any) for proper handling
j=++i;len>j&&!Expr.relative[tokens[j].type];j++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:" "===tokens[i-2].type?"*":""})).replace(rtrim,"$1"),matcher,j>i&&matcherFromTokens(tokens.slice(i,j)),len>j&&matcherFromTokens(tokens=tokens.slice(j)),len>j&&toSelector(tokens))}matchers.push(matcher)}return elementMatcher(matchers)}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,
// We must always have either seed elements or outermost context
elems=seed||byElement&&Expr.find.TAG("*",outermost),
// Use integer dirruns iff this is the outermost matcher
dirrunsUnique=dirruns+=null==contextBackup?1:Math.random()||.1,len=elems.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(outermost&&(outermostContext=context===document||context||outermost);i!==len&&null!=(elem=elems[i]);i++){if(byElement&&elem){for(j=0,context||elem.ownerDocument===document||(setDocument(elem),xml=!documentIsHTML);matcher=elementMatchers[j++];)if(matcher(elem,context||document,xml)){results.push(elem);break}outermost&&(dirruns=dirrunsUnique)}
// Track unmatched elements for set filters
bySet&&(
// They will have gone through all possible matchers
(elem=!matcher&&elem)&&matchedCount--,
// Lengthen the array for every element, matched or not
seed&&unmatched.push(elem))}
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(matchedCount+=i,bySet&&i!==matchedCount){for(j=0;matcher=setMatchers[j++];)matcher(unmatched,setMatched,context,xml);if(seed){
// Reintegrate element matches to eliminate the need for sorting
if(matchedCount>0)for(;i--;)unmatched[i]||setMatched[i]||(setMatched[i]=pop.call(results));
// Discard index placeholder values to get only actual matches
setMatched=condense(setMatched)}
// Add matches to results
push.apply(results,setMatched),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1&&Sizzle.uniqueSort(results)}
// Override manipulation of globals by nested matchers
return outermost&&(dirruns=dirrunsUnique,outermostContext=contextBackup),unmatched};return bySet?markFunction(superMatcher):superMatcher}var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,
// Local document vars
setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,
// Instance-specific data
expando="sizzle"+1*new Date,preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){return a===b&&(hasDuplicate=!0),0},
// General-purpose constants
MAX_NEGATIVE=1<<31,
// Instance methods
hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,
// Use a stripped-down indexOf as it's faster than native
// http://jsperf.com/thor-indexof-vs-for/5
indexOf=function(list,elem){for(var i=0,len=list.length;len>i;i++)if(list[i]===elem)return i;return-1},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
whitespace="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+
// Operator (capture 2)
"*([*^$|!~]?=)"+whitespace+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={ID:new RegExp("^#("+identifier+")"),CLASS:new RegExp("^\\.("+identifier+")"),TAG:new RegExp("^("+identifier+"|[*])"),ATTR:new RegExp("^"+attributes),PSEUDO:new RegExp("^"+pseudos),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),bool:new RegExp("^(?:"+booleans+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,
// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return high!==high||escapedWhitespace?escaped:0>high?String.fromCharCode(high+65536):String.fromCharCode(high>>10|55296,1023&high|56320)},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
unloadHandler=function(){setDocument()};
// Optimize for push.apply( _, NodeList )
try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
arr[preferredDoc.childNodes.length].nodeType}catch(e){push={apply:arr.length?
// Leverage slice if possible
function(target,els){push_native.apply(target,slice.call(els))}:
// Support: IE<9
// Otherwise append directly
function(target,els){
// Can't trust NodeList.length
for(var j=target.length,i=0;target[j++]=els[i++];);target.length=j-1}}}support=Sizzle.support={},isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?"HTML"!==documentElement.nodeName:!1},setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc;return doc!==document&&9===doc.nodeType&&doc.documentElement?(document=doc,docElem=document.documentElement,documentIsHTML=!isXML(document),(parent=document.defaultView)&&parent.top!==parent&&(parent.addEventListener?parent.addEventListener("unload",unloadHandler,!1):parent.attachEvent&&parent.attachEvent("onunload",unloadHandler)),support.attributes=assert(function(div){return div.className="i",!div.getAttribute("className")}),support.getElementsByTagName=assert(function(div){return div.appendChild(document.createComment("")),!div.getElementsByTagName("*").length}),support.getElementsByClassName=rnative.test(document.getElementsByClassName),support.getById=assert(function(div){return docElem.appendChild(div).id=expando,!document.getElementsByName||!document.getElementsByName(expando).length}),support.getById?(Expr.find.ID=function(id,context){if("undefined"!=typeof context.getElementById&&documentIsHTML){var m=context.getElementById(id);return m?[m]:[]}},Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId}}):(delete Expr.find.ID,Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node="undefined"!=typeof elem.getAttributeNode&&elem.getAttributeNode("id");return node&&node.value===attrId}}),Expr.find.TAG=support.getElementsByTagName?function(tag,context){return"undefined"!=typeof context.getElementsByTagName?context.getElementsByTagName(tag):support.qsa?context.querySelectorAll(tag):void 0}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if("*"===tag){for(;elem=results[i++];)1===elem.nodeType&&tmp.push(elem);return tmp}return results},Expr.find.CLASS=support.getElementsByClassName&&function(className,context){return"undefined"!=typeof context.getElementsByClassName&&documentIsHTML?context.getElementsByClassName(className):void 0},rbuggyMatches=[],rbuggyQSA=[],(support.qsa=rnative.test(document.querySelectorAll))&&(assert(function(div){docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a><select id='"+expando+"-\r\\' msallowcapture=''><option selected=''></option></select>",div.querySelectorAll("[msallowcapture^='']").length&&rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")"),div.querySelectorAll("[selected]").length||rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")"),div.querySelectorAll("[id~="+expando+"-]").length||rbuggyQSA.push("~="),div.querySelectorAll(":checked").length||rbuggyQSA.push(":checked"),div.querySelectorAll("a#"+expando+"+*").length||rbuggyQSA.push(".#.+[+~]")}),assert(function(div){var input=document.createElement("input");input.setAttribute("type","hidden"),div.appendChild(input).setAttribute("name","D"),div.querySelectorAll("[name=d]").length&&rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?="),div.querySelectorAll(":enabled").length||rbuggyQSA.push(":enabled",":disabled"),div.querySelectorAll("*,:x"),rbuggyQSA.push(",.*:")})),(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector))&&assert(function(div){support.disconnectedMatch=matches.call(div,"div"),matches.call(div,"[s!='']:x"),rbuggyMatches.push("!=",pseudos)}),rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|")),rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|")),hasCompare=rnative.test(docElem.compareDocumentPosition),contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=9===a.nodeType?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!(!bup||1!==bup.nodeType||!(adown.contains?adown.contains(bup):a.compareDocumentPosition&&16&a.compareDocumentPosition(bup)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},sortOrder=hasCompare?function(a,b){if(a===b)return hasDuplicate=!0,0;var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;return compare?compare:(compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&compare||!support.sortDetached&&b.compareDocumentPosition(a)===compare?a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)?-1:b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0:4&compare?-1:1)}:function(a,b){if(a===b)return hasDuplicate=!0,0;var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup)return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;if(aup===bup)return siblingCheck(a,b);for(cur=a;cur=cur.parentNode;)ap.unshift(cur);for(cur=b;cur=cur.parentNode;)bp.unshift(cur);for(;ap[i]===bp[i];)i++;return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0},document):document},Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements)},Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document&&setDocument(elem),expr=expr.replace(rattributeQuotes,"='$1']"),support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr)))try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&11!==elem.document.nodeType)return ret}catch(e){}return Sizzle(expr,document,null,[elem]).length>0},Sizzle.contains=function(context,elem){return(context.ownerDocument||context)!==document&&setDocument(context),contains(context,elem)},Sizzle.attr=function(elem,name){(elem.ownerDocument||elem)!==document&&setDocument(elem);var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):void 0;return void 0!==val?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null},Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg)},Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;if(hasDuplicate=!support.detectDuplicates,sortInput=!support.sortStable&&results.slice(0),results.sort(sortOrder),hasDuplicate){for(;elem=results[i++];)elem===results[i]&&(j=duplicates.push(i));for(;j--;)results.splice(duplicates[j],1)}return sortInput=null,results},getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(nodeType){if(1===nodeType||9===nodeType||11===nodeType){if("string"==typeof elem.textContent)return elem.textContent;for(elem=elem.firstChild;elem;elem=elem.nextSibling)ret+=getText(elem)}else if(3===nodeType||4===nodeType)return elem.nodeValue}else for(;node=elem[i++];)ret+=getText(node);return ret},Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(match){return match[1]=match[1].replace(runescape,funescape),match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape),"~="===match[2]&&(match[3]=" "+match[3]+" "),match.slice(0,4)},CHILD:function(match){return match[1]=match[1].toLowerCase(),"nth"===match[1].slice(0,3)?(match[3]||Sizzle.error(match[0]),match[4]=+(match[4]?match[5]+(match[6]||1):2*("even"===match[3]||"odd"===match[3])),match[5]=+(match[7]+match[8]||"odd"===match[3])):match[3]&&Sizzle.error(match[0]),match},PSEUDO:function(match){var excess,unquoted=!match[6]&&match[2];return matchExpr.CHILD.test(match[0])?null:(match[3]?match[2]=match[4]||match[5]||"":unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,!0))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)&&(match[0]=match[0].slice(0,excess),match[2]=unquoted.slice(0,excess)),match.slice(0,3))}},filter:{TAG:function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return"*"===nodeNameSelector?function(){return!0}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName}},CLASS:function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test("string"==typeof elem.className&&elem.className||"undefined"!=typeof elem.getAttribute&&elem.getAttribute("class")||"")})},ATTR:function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);return null==result?"!="===operator:operator?(result+="","="===operator?result===check:"!="===operator?result!==check:"^="===operator?check&&0===result.indexOf(check):"*="===operator?check&&result.indexOf(check)>-1:"$="===operator?check&&result.slice(-check.length)===check:"~="===operator?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:"|="===operator?result===check||result.slice(0,check.length+1)===check+"-":!1):!0}},CHILD:function(type,what,argument,first,last){var simple="nth"!==type.slice(0,3),forward="last"!==type.slice(-4),ofType="of-type"===what;return 1===first&&0===last?function(elem){return!!elem.parentNode}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=!1;if(parent){if(simple){for(;dir;){for(node=elem;node=node[dir];)if(ofType?node.nodeName.toLowerCase()===name:1===node.nodeType)return!1;start=dir="only"===type&&!start&&"nextSibling"}return!0}if(start=[forward?parent.firstChild:parent.lastChild],forward&&useCache){for(node=parent,outerCache=node[expando]||(node[expando]={}),uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={}),cache=uniqueCache[type]||[],nodeIndex=cache[0]===dirruns&&cache[1],diff=nodeIndex&&cache[2],node=nodeIndex&&parent.childNodes[nodeIndex];node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop();)if(1===node.nodeType&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break}}else if(useCache&&(node=elem,outerCache=node[expando]||(node[expando]={}),uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={}),cache=uniqueCache[type]||[],nodeIndex=cache[0]===dirruns&&cache[1],diff=nodeIndex),diff===!1)for(;(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())&&((ofType?node.nodeName.toLowerCase()!==name:1!==node.nodeType)||!++diff||(useCache&&(outerCache=node[expando]||(node[expando]={}),uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={}),uniqueCache[type]=[dirruns,diff]),node!==elem)););return diff-=last,diff===first||diff%first===0&&diff/first>=0}}},PSEUDO:function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);return fn[expando]?fn(argument):fn.length>1?(args=[pseudo,pseudo,"",argument],Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){for(var idx,matched=fn(seed,argument),i=matched.length;i--;)idx=indexOf(seed,matched[i]),seed[idx]=!(matches[idx]=matched[i])}):function(elem){return fn(elem,0,args)}):fn}},pseudos:{not:markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){for(var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;i--;)(elem=unmatched[i])&&(seed[i]=!(matches[i]=elem))}):function(elem,context,xml){return input[0]=elem,matcher(input,null,xml,results),input[0]=null,!results.pop()}}),has:markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0}}),contains:markFunction(function(text){return text=text.replace(runescape,funescape),function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1}}),lang:markFunction(function(lang){return ridentifier.test(lang||"")||Sizzle.error("unsupported lang: "+lang),lang=lang.replace(runescape,funescape).toLowerCase(),function(elem){var elemLang;do if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))return elemLang=elemLang.toLowerCase(),elemLang===lang||0===elemLang.indexOf(lang+"-");while((elem=elem.parentNode)&&1===elem.nodeType);return!1}}),target:function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id},root:function(elem){return elem===docElem},focus:function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex)},enabled:function(elem){return elem.disabled===!1},disabled:function(elem){return elem.disabled===!0},checked:function(elem){var nodeName=elem.nodeName.toLowerCase();return"input"===nodeName&&!!elem.checked||"option"===nodeName&&!!elem.selected},selected:function(elem){return elem.parentNode&&elem.parentNode.selectedIndex,elem.selected===!0},empty:function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling)if(elem.nodeType<6)return!1;return!0},parent:function(elem){return!Expr.pseudos.empty(elem)},header:function(elem){return rheader.test(elem.nodeName)},input:function(elem){return rinputs.test(elem.nodeName)},button:function(elem){var name=elem.nodeName.toLowerCase();return"input"===name&&"button"===elem.type||"button"===name},text:function(elem){var attr;return"input"===elem.nodeName.toLowerCase()&&"text"===elem.type&&(null==(attr=elem.getAttribute("type"))||"text"===attr.toLowerCase())},first:createPositionalPseudo(function(){return[0]}),last:createPositionalPseudo(function(matchIndexes,length){return[length-1]}),eq:createPositionalPseudo(function(matchIndexes,length,argument){return[0>argument?argument+length:argument]}),even:createPositionalPseudo(function(matchIndexes,length){for(var i=0;length>i;i+=2)matchIndexes.push(i);return matchIndexes}),odd:createPositionalPseudo(function(matchIndexes,length){for(var i=1;length>i;i+=2)matchIndexes.push(i);return matchIndexes}),lt:createPositionalPseudo(function(matchIndexes,length,argument){for(var i=0>argument?argument+length:argument;--i>=0;)matchIndexes.push(i);return matchIndexes}),gt:createPositionalPseudo(function(matchIndexes,length,argument){for(var i=0>argument?argument+length:argument;++i<length;)matchIndexes.push(i);return matchIndexes})}},Expr.pseudos.nth=Expr.pseudos.eq;
// Add button/input type pseudos
for(i in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})Expr.pseudos[i]=createInputPseudo(i);for(i in{submit:!0,reset:!0})Expr.pseudos[i]=createButtonPseudo(i);/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
// One-time assignments
// Sort stability
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return setFilters.prototype=Expr.filters=Expr.pseudos,Expr.setFilters=new setFilters,tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached)return parseOnly?0:cached.slice(0);for(soFar=selector,groups=[],preFilters=Expr.preFilter;soFar;){
// Comma and first run
matched&&!(match=rcomma.exec(soFar))||(match&&(
// Don't consume trailing commas as valid
soFar=soFar.slice(match[0].length)||soFar),groups.push(tokens=[])),matched=!1,
// Combinators
(match=rcombinators.exec(soFar))&&(matched=match.shift(),tokens.push({value:matched,type:match[0].replace(rtrim," ")}),soFar=soFar.slice(matched.length));
// Filters
for(type in Expr.filter)!(match=matchExpr[type].exec(soFar))||preFilters[type]&&!(match=preFilters[type](match))||(matched=match.shift(),tokens.push({value:matched,type:type,matches:match}),soFar=soFar.slice(matched.length));if(!matched)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0)},compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){for(match||(match=tokenize(selector)),i=match.length;i--;)cached=matcherFromTokens(match[i]),cached[expando]?setMatchers.push(cached):elementMatchers.push(cached);cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers)),cached.selector=selector}return cached},select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled="function"==typeof selector&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);if(results=results||[],1===match.length){if(tokens=match[0]=match[0].slice(0),tokens.length>2&&"ID"===(token=tokens[0]).type&&support.getById&&9===context.nodeType&&documentIsHTML&&Expr.relative[tokens[1].type]){if(context=(Expr.find.ID(token.matches[0].replace(runescape,funescape),context)||[])[0],!context)return results;compiled&&(context=context.parentNode),selector=selector.slice(tokens.shift().value.length)}for(i=matchExpr.needsContext.test(selector)?0:tokens.length;i--&&(token=tokens[i],!Expr.relative[type=token.type]);)if((find=Expr.find[type])&&(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){if(tokens.splice(i,1),selector=seed.length&&toSelector(tokens),!selector)return push.apply(results,seed),results;break}}return(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context),results},support.sortStable=expando.split("").sort(sortOrder).join("")===expando,support.detectDuplicates=!!hasDuplicate,setDocument(),support.sortDetached=assert(function(div1){return 1&div1.compareDocumentPosition(document.createElement("div"))}),assert(function(div){return div.innerHTML="<a href='#'></a>","#"===div.firstChild.getAttribute("href")})||addHandle("type|href|height|width",function(elem,name,isXML){return isXML?void 0:elem.getAttribute(name,"type"===name.toLowerCase()?1:2)}),support.attributes&&assert(function(div){return div.innerHTML="<input/>",div.firstChild.setAttribute("value",""),""===div.firstChild.getAttribute("value")})||addHandle("value",function(elem,name,isXML){return isXML||"input"!==elem.nodeName.toLowerCase()?void 0:elem.defaultValue}),assert(function(div){return null==div.getAttribute("disabled")})||addHandle(booleans,function(elem,name,isXML){var val;return isXML?void 0:elem[name]===!0?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null}),Sizzle}(window);jQuery.find=Sizzle,jQuery.expr=Sizzle.selectors,jQuery.expr[":"]=jQuery.expr.pseudos,jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort,jQuery.text=Sizzle.getText,jQuery.isXMLDoc=Sizzle.isXML,jQuery.contains=Sizzle.contains;var dir=function(elem,dir,until){for(var matched=[],truncate=void 0!==until;(elem=elem[dir])&&9!==elem.nodeType;)if(1===elem.nodeType){if(truncate&&jQuery(elem).is(until))break;matched.push(elem)}return matched},siblings=function(n,elem){for(var matched=[];n;n=n.nextSibling)1===n.nodeType&&n!==elem&&matched.push(n);return matched},rneedsContext=jQuery.expr.match.needsContext,rsingleTag=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,risSimple=/^.[^:#\[\.,]*$/;jQuery.filter=function(expr,elems,not){var elem=elems[0];return not&&(expr=":not("+expr+")"),1===elems.length&&1===elem.nodeType?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return 1===elem.nodeType}))},jQuery.fn.extend({find:function(selector){var i,len=this.length,ret=[],self=this;if("string"!=typeof selector)return this.pushStack(jQuery(selector).filter(function(){for(i=0;len>i;i++)if(jQuery.contains(self[i],this))return!0}));for(i=0;len>i;i++)jQuery.find(selector,self[i],ret);
// Needed because $( selector, context ) becomes $( context ).find( selector )
return ret=this.pushStack(len>1?jQuery.unique(ret):ret),ret.selector=this.selector?this.selector+" "+selector:selector,ret},filter:function(selector){return this.pushStack(winnow(this,selector||[],!1))},not:function(selector){return this.pushStack(winnow(this,selector||[],!0))},is:function(selector){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!winnow(this,"string"==typeof selector&&rneedsContext.test(selector)?jQuery(selector):selector||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var rootjQuery,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!selector)return this;
// Handle HTML strings
if(root=root||rootjQuery,"string"==typeof selector){
// Match html or make sure no context is specified for #id
if(match="<"===selector[0]&&">"===selector[selector.length-1]&&selector.length>=3?[null,selector,null]:rquickExpr.exec(selector),!match||!match[1]&&context)return!context||context.jquery?(context||root).find(selector):this.constructor(context).find(selector);
// HANDLE: $(html) -> $(array)
if(match[1]){
// HANDLE: $(html, props)
if(context=context instanceof jQuery?context[0]:context,jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,!0)),rsingleTag.test(match[1])&&jQuery.isPlainObject(context))for(match in context)
// Properties of context are called as methods if possible
jQuery.isFunction(this[match])?this[match](context[match]):this.attr(match,context[match]);return this}
// Support: Blackberry 4.6
// gEBID returns nodes no longer in the document (#6963)
// Inject the element directly into the jQuery object
return elem=document.getElementById(match[2]),elem&&elem.parentNode&&(this.length=1,this[0]=elem),this.context=document,this.selector=selector,this}
// Execute immediately if ready is not present
return selector.nodeType?(this.context=this[0]=selector,this.length=1,this):jQuery.isFunction(selector)?void 0!==root.ready?root.ready(selector):selector(jQuery):(void 0!==selector.selector&&(this.selector=selector.selector,this.context=selector.context),jQuery.makeArray(selector,this))};
// Give the init function the jQuery prototype for later instantiation
init.prototype=jQuery.fn,
// Initialize central reference
rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
guaranteedUnique={children:!0,contents:!0,next:!0,prev:!0};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){for(var i=0;l>i;i++)if(jQuery.contains(this,targets[i]))return!0})},closest:function(selectors,context){for(var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||"string"!=typeof selectors?jQuery(selectors,context||this.context):0;l>i;i++)for(cur=this[i];cur&&cur!==context;cur=cur.parentNode)
// Always skip document fragments
if(cur.nodeType<11&&(pos?pos.index(cur)>-1:1===cur.nodeType&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched)},
// Determine the position of an element within the set
index:function(elem){
// No argument, return index in parent
// No argument, return index in parent
// Index in selector
// If it receives a jQuery object, the first element is used
return elem?"string"==typeof elem?indexOf.call(jQuery(elem),this[0]):indexOf.call(this,elem.jquery?elem[0]:elem):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))))},addBack:function(selector){return this.add(null==selector?this.prevObject:this.prevObject.filter(selector))}}),jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&11!==parent.nodeType?parent:null},parents:function(elem){return dir(elem,"parentNode")},parentsUntil:function(elem,i,until){return dir(elem,"parentNode",until)},next:function(elem){return sibling(elem,"nextSibling")},prev:function(elem){return sibling(elem,"previousSibling")},nextAll:function(elem){return dir(elem,"nextSibling")},prevAll:function(elem){return dir(elem,"previousSibling")},nextUntil:function(elem,i,until){return dir(elem,"nextSibling",until)},prevUntil:function(elem,i,until){return dir(elem,"previousSibling",until)},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem)},children:function(elem){return siblings(elem.firstChild)},contents:function(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes)}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==name.slice(-5)&&(selector=until),selector&&"string"==typeof selector&&(matched=jQuery.filter(selector,matched)),this.length>1&&(guaranteedUnique[name]||jQuery.uniqueSort(matched),rparentsprev.test(name)&&matched.reverse()),this.pushStack(matched)}});var rnotwhite=/\S+/g;/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks=function(options){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
options="string"==typeof options?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
firing,
// Last fire value for non-forgettable lists
memory,
// Flag to know if list was already fired
fired,
// Flag to prevent firing
locked,
// Actual callback list
list=[],
// Queue of execution data for repeatable lists
queue=[],
// Index of currently firing callback (modified by add/remove as needed)
firingIndex=-1,
// Fire callbacks
fire=function(){for(
// Enforce single-firing
locked=options.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
fired=firing=!0;queue.length;firingIndex=-1)for(memory=queue.shift();++firingIndex<list.length;)
// Run callback and check for early termination
list[firingIndex].apply(memory[0],memory[1])===!1&&options.stopOnFalse&&(firingIndex=list.length,memory=!1);
// Forget the data if we're done with it
options.memory||(memory=!1),firing=!1,locked&&(list=memory?[]:"")},
// Actual Callbacks object
self={
// Add a callback or a collection of callbacks to the list
add:function(){
// If we have memory from a past run, we should fire after adding
return list&&(memory&&!firing&&(firingIndex=list.length-1,queue.push(memory)),function add(args){jQuery.each(args,function(_,arg){jQuery.isFunction(arg)?options.unique&&self.has(arg)||list.push(arg):arg&&arg.length&&"string"!==jQuery.type(arg)&&
// Inspect recursively
add(arg)})}(arguments),memory&&!firing&&fire()),this},
// Remove a callback from the list
remove:function(){return jQuery.each(arguments,function(_,arg){for(var index;(index=jQuery.inArray(arg,list,index))>-1;)list.splice(index,1),
// Handle firing indexes
firingIndex>=index&&firingIndex--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0},
// Remove all callbacks from the list
empty:function(){return list&&(list=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return locked=queue=[],list=memory="",this},disabled:function(){return!list},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return locked=queue=[],memory||(list=memory=""),this},locked:function(){return!!locked},
// Call all callbacks with the given context and arguments
fireWith:function(context,args){return locked||(args=args||[],args=[context,args.slice?args.slice():args],queue.push(args),firing||fire()),this},
// Call all the callbacks with the given arguments
fire:function(){return self.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!fired}};return self},jQuery.extend({Deferred:function(func){var tuples=[
// action, add listener, listener list, final state
["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state},always:function(){return deferred.done(arguments).fail(arguments),this},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];
// deferred[ done | fail | progress ] for forwarding actions to newDefer
deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);returned&&jQuery.isFunction(returned.promise)?returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject):newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments)})}),fns=null}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(obj){return null!=obj?jQuery.extend(obj,promise):promise}},deferred={};
// All done!
// Keep pipe for back-compat
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return promise.pipe=promise.then,jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];
// promise[ done | fail | progress ] = list.add
promise[tuple[1]]=list.add,
// Handle state
stateString&&list.add(function(){
// state = [ resolved | rejected ]
state=stateString},tuples[1^i][2].disable,tuples[2][2].lock),
// deferred[ resolve | reject | notify ]
deferred[tuple[0]]=function(){return deferred[tuple[0]+"With"](this===deferred?promise:this,arguments),this},deferred[tuple[0]+"With"]=list.fireWith}),promise.promise(deferred),func&&func.call(deferred,deferred),deferred},
// Deferred helper
when:function(subordinate){var progressValues,progressContexts,resolveContexts,i=0,resolveValues=slice.call(arguments),length=resolveValues.length,
// the count of uncompleted subordinates
remaining=1!==length||subordinate&&jQuery.isFunction(subordinate.promise)?length:0,
// the master Deferred.
// If resolveValues consist of only a single Deferred, just use that.
deferred=1===remaining?subordinate:jQuery.Deferred(),
// Update function for both resolve and progress values
updateFunc=function(i,contexts,values){return function(value){contexts[i]=this,values[i]=arguments.length>1?slice.call(arguments):value,values===progressValues?deferred.notifyWith(contexts,values):--remaining||deferred.resolveWith(contexts,values)}};
// Add listeners to Deferred subordinates; treat others as resolved
if(length>1)for(progressValues=new Array(length),progressContexts=new Array(length),resolveContexts=new Array(length);length>i;i++)resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)?resolveValues[i].promise().progress(updateFunc(i,progressContexts,progressValues)).done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject):--remaining;
// If we're not waiting on anything, resolve the master
return remaining||deferred.resolveWith(resolveContexts,resolveValues),deferred.promise()}});
// The deferred used on DOM ready
var readyList;jQuery.fn.ready=function(fn){
// Add the callback
return jQuery.ready.promise().done(fn),this},jQuery.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Hold (or release) the ready event
holdReady:function(hold){hold?jQuery.readyWait++:jQuery.ready(!0)},
// Handle when the DOM is ready
ready:function(wait){
// Abort if there are pending holds or we're already ready
(wait===!0?--jQuery.readyWait:jQuery.isReady)||(
// Remember that the DOM is ready
jQuery.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
wait!==!0&&--jQuery.readyWait>0||(
// If there are functions bound, to execute
readyList.resolveWith(document,[jQuery]),
// Trigger any bound ready events
jQuery.fn.triggerHandler&&(jQuery(document).triggerHandler("ready"),jQuery(document).off("ready"))))}}),jQuery.ready.promise=function(obj){
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE9-10 only
// Older IE sometimes signals "interactive" too soon
// Handle it asynchronously to allow scripts the opportunity to delay ready
// Use the handy event callback
// A fallback to window.onload, that will always work
return readyList||(readyList=jQuery.Deferred(),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(jQuery.ready):(document.addEventListener("DOMContentLoaded",completed),window.addEventListener("load",completed))),readyList.promise(obj)},
// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=null==key;
// Sets many values
if("object"===jQuery.type(key)){chainable=!0;for(i in key)access(elems,fn,i,key[i],!0,emptyGet,raw)}else if(void 0!==value&&(chainable=!0,jQuery.isFunction(value)||(raw=!0),bulk&&(raw?(fn.call(elems,value),fn=null):(bulk=fn,fn=function(elem,key,value){return bulk.call(jQuery(elem),value)})),fn))for(;len>i;i++)fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));
// Gets
return chainable?elems:bulk?fn.call(elems):len?fn(elems[0],key):emptyGet},acceptData=function(owner){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
/* jshint -W018 */
return 1===owner.nodeType||9===owner.nodeType||!+owner.nodeType};Data.uid=1,Data.prototype={register:function(owner,initial){var value=initial||{};
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
return owner.nodeType?owner[this.expando]=value:Object.defineProperty(owner,this.expando,{value:value,writable:!0,configurable:!0}),owner[this.expando]},cache:function(owner){
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
if(!acceptData(owner))return{};
// Check if the owner object already has a cache
var value=owner[this.expando];
// If not, create one
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
return value||(value={},acceptData(owner)&&(owner.nodeType?owner[this.expando]=value:Object.defineProperty(owner,this.expando,{value:value,configurable:!0}))),value},set:function(owner,data,value){var prop,cache=this.cache(owner);
// Handle: [ owner, key, value ] args
if("string"==typeof data)cache[data]=value;else
// Copy the properties one-by-one to the cache object
for(prop in data)cache[prop]=data[prop];return cache},get:function(owner,key){return void 0===key?this.cache(owner):owner[this.expando]&&owner[this.expando][key]},access:function(owner,key,value){var stored;
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
return void 0===key||key&&"string"==typeof key&&void 0===value?(stored=this.get(owner,key),void 0!==stored?stored:this.get(owner,jQuery.camelCase(key))):(this.set(owner,key,value),void 0!==value?value:key)},remove:function(owner,key){var i,name,camel,cache=owner[this.expando];if(void 0!==cache){if(void 0===key)this.register(owner);else{
// Support array or space separated string of keys
jQuery.isArray(key)?
// If "name" is an array of keys...
// When data is initially created, via ("key", "val") signature,
// keys will be converted to camelCase.
// Since there is no way to tell _how_ a key was added, remove
// both plain key and camelCase key. #12786
// This will only penalize the array argument path.
name=key.concat(key.map(jQuery.camelCase)):(camel=jQuery.camelCase(key),key in cache?name=[key,camel]:(name=camel,name=name in cache?[name]:name.match(rnotwhite)||[])),i=name.length;for(;i--;)delete cache[name[i]]}
// Remove the expando if there's no more data
(void 0===key||jQuery.isEmptyObject(cache))&&(
// Support: Chrome <= 35-45+
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://code.google.com/p/chromium/issues/detail?id=378607
owner.nodeType?owner[this.expando]=void 0:delete owner[this.expando])}},hasData:function(owner){var cache=owner[this.expando];return void 0!==cache&&!jQuery.isEmptyObject(cache)}};var dataPriv=new Data,dataUser=new Data,rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem)},data:function(elem,name,data){return dataUser.access(elem,name,data)},removeData:function(elem,name){dataUser.remove(elem,name)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(elem,name,data){return dataPriv.access(elem,name,data)},_removeData:function(elem,name){dataPriv.remove(elem,name)}}),jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;
// Gets all values
if(void 0===key){if(this.length&&(data=dataUser.get(elem),1===elem.nodeType&&!dataPriv.get(elem,"hasDataAttrs"))){for(i=attrs.length;i--;)
// Support: IE11+
// The attrs elements can be null (#14894)
attrs[i]&&(name=attrs[i].name,0===name.indexOf("data-")&&(name=jQuery.camelCase(name.slice(5)),dataAttr(elem,name,data[name])));dataPriv.set(elem,"hasDataAttrs",!0)}return data}
// Sets multiple values
// Sets multiple values
return"object"==typeof key?this.each(function(){dataUser.set(this,key)}):access(this,function(value){var data,camelKey;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(elem&&void 0===value){if(data=dataUser.get(elem,key)||
// Try to find dashed key if it exists (gh-2779)
// This is for 2.2.x only
dataUser.get(elem,key.replace(rmultiDash,"-$&").toLowerCase()),void 0!==data)return data;if(camelKey=jQuery.camelCase(key),data=dataUser.get(elem,camelKey),void 0!==data)return data;if(data=dataAttr(elem,camelKey,void 0),void 0!==data)return data}else camelKey=jQuery.camelCase(key),this.each(function(){var data=dataUser.get(this,camelKey);dataUser.set(this,camelKey,value),key.indexOf("-")>-1&&void 0!==data&&dataUser.set(this,key,value)})},null,value,arguments.length>1,null,!0)},removeData:function(key){return this.each(function(){dataUser.remove(this,key)})}}),jQuery.extend({queue:function(elem,type,data){var queue;
// Speed up dequeue by getting out quickly if this is just a lookup
return elem?(type=(type||"fx")+"queue",queue=dataPriv.get(elem,type),data&&(!queue||jQuery.isArray(data)?queue=dataPriv.access(elem,type,jQuery.makeArray(data)):queue.push(data)),queue||[]):void 0},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===fn&&(fn=queue.shift(),startLength--),fn&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===type&&queue.unshift("inprogress"),
// Clear up the last queue stop function
delete hooks.stop,fn.call(elem,next,hooks)),!startLength&&hooks&&hooks.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key])})})}}),jQuery.fn.extend({queue:function(type,data){var setter=2;return"string"!=typeof type&&(data=type,type="fx",setter--),arguments.length<setter?jQuery.queue(this[0],type):void 0===data?this:this.each(function(){var queue=jQuery.queue(this,type,data);
// Ensure a hooks for this queue
jQuery._queueHooks(this,type),"fx"===type&&"inprogress"!==queue[0]&&jQuery.dequeue(this,type)})},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type)})},clearQueue:function(type){return this.queue(type||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){--count||defer.resolveWith(elements,[elements])};for("string"!=typeof type&&(obj=type,type=void 0),type=type||"fx";i--;)tmp=dataPriv.get(elements[i],type+"queueHooks"),tmp&&tmp.empty&&(count++,tmp.empty.add(resolve));return resolve(),defer.promise(obj)}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i"),cssExpand=["Top","Right","Bottom","Left"],isHidden=function(elem,el){
// isHidden might be called from jQuery#filter function;
// in that case, element will be second argument
return elem=el||elem,"none"===jQuery.css(elem,"display")||!jQuery.contains(elem.ownerDocument,elem)},rcheckableType=/^(?:checkbox|radio)$/i,rtagName=/<([\w:-]+)/,rscriptType=/^$|\/(?:java|ecma)script/i,wrapMap={
// Support: IE9
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE9
wrapMap.optgroup=wrapMap.option,wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead,wrapMap.th=wrapMap.td;var rhtml=/<|&#?\w+;/;!function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");
// Support: Android 4.0-4.3, Safari<=5.1
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
input.setAttribute("type","radio"),input.setAttribute("checked","checked"),input.setAttribute("name","t"),div.appendChild(input),
// Support: Safari<=5.1, Android<4.2
// Older WebKit doesn't clone checked state correctly in fragments
support.checkClone=div.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE<=11+
// Make sure textarea (and checkbox) defaultValue is properly cloned
div.innerHTML="<textarea>x</textarea>",support.noCloneChecked=!!div.cloneNode(!0).lastChild.defaultValue}();var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(elemData)for(
// Caller can pass in an object of custom data in lieu of the handler
handler.handler&&(handleObjIn=handler,handler=handleObjIn.handler,selector=handleObjIn.selector),
// Make sure that the handler has a unique ID, used to find/remove it later
handler.guid||(handler.guid=jQuery.guid++),
// Init the element's event structure and main handler, if this is the first
(events=elemData.events)||(events=elemData.events={}),(eventHandle=elemData.handle)||(eventHandle=elemData.handle=function(e){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return"undefined"!=typeof jQuery&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):void 0}),
// Handle multiple events separated by a space
types=(types||"").match(rnotwhite)||[""],t=types.length;t--;)tmp=rtypenamespace.exec(types[t])||[],type=origType=tmp[1],namespaces=(tmp[2]||"").split(".").sort(),type&&(special=jQuery.event.special[type]||{},type=(selector?special.delegateType:special.bindType)||type,special=jQuery.event.special[type]||{},handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn),(handlers=events[type])||(handlers=events[type]=[],handlers.delegateCount=0,special.setup&&special.setup.call(elem,data,namespaces,eventHandle)!==!1||elem.addEventListener&&elem.addEventListener(type,eventHandle)),special.add&&(special.add.call(elem,handleObj),handleObj.handler.guid||(handleObj.handler.guid=handler.guid)),selector?handlers.splice(handlers.delegateCount++,0,handleObj):handlers.push(handleObj),jQuery.event.global[type]=!0)},
// Detach an event or set of events from an element
remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(elemData&&(events=elemData.events)){for(
// Once for each type.namespace in types; type may be omitted
types=(types||"").match(rnotwhite)||[""],t=types.length;t--;)
// Unbind all events (on this namespace, if provided) for the element
if(tmp=rtypenamespace.exec(types[t])||[],type=origType=tmp[1],namespaces=(tmp[2]||"").split(".").sort(),type){for(special=jQuery.event.special[type]||{},type=(selector?special.delegateType:special.bindType)||type,handlers=events[type]||[],tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
origCount=j=handlers.length;j--;)handleObj=handlers[j],!mappedTypes&&origType!==handleObj.origType||handler&&handler.guid!==handleObj.guid||tmp&&!tmp.test(handleObj.namespace)||selector&&selector!==handleObj.selector&&("**"!==selector||!handleObj.selector)||(handlers.splice(j,1),handleObj.selector&&handlers.delegateCount--,special.remove&&special.remove.call(elem,handleObj));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
origCount&&!handlers.length&&(special.teardown&&special.teardown.call(elem,namespaces,elemData.handle)!==!1||jQuery.removeEvent(elem,type,elemData.handle),delete events[type])}else for(type in events)jQuery.event.remove(elem,type+types[t],handler,selector,!0);
// Remove data and the expando if it's no longer used
jQuery.isEmptyObject(events)&&dataPriv.remove(elem,"handle events")}},dispatch:function(event){
// Make a writable jQuery.Event from the native event object
event=jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=slice.call(arguments),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
args[0]=event,event.delegateTarget=this,!special.preDispatch||special.preDispatch.call(this,event)!==!1){for(
// Determine handlers
handlerQueue=jQuery.event.handlers.call(this,event,handlers),
// Run delegates first; they may want to stop propagation beneath us
i=0;(matched=handlerQueue[i++])&&!event.isPropagationStopped();)for(event.currentTarget=matched.elem,j=0;(handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
event.rnamespace&&!event.rnamespace.test(handleObj.namespace)||(event.handleObj=handleObj,event.data=handleObj.data,ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args),void 0!==ret&&(event.result=ret)===!1&&(event.preventDefault(),event.stopPropagation()));
// Call the postDispatch hook for the mapped type
return special.postDispatch&&special.postDispatch.call(this,event),event.result}},handlers:function(event,handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;
// Support (at least): Chrome, IE9
// Find delegate handlers
// Black-hole SVG <use> instance trees (#13180)
//
// Support: Firefox<=42+
// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
if(delegateCount&&cur.nodeType&&("click"!==event.type||isNaN(event.button)||event.button<1))for(;cur!==this;cur=cur.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===cur.nodeType&&(cur.disabled!==!0||"click"!==event.type)){for(matches=[],i=0;delegateCount>i;i++)handleObj=handlers[i],sel=handleObj.selector+" ",void 0===matches[sel]&&(matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length),matches[sel]&&matches.push(handleObj);matches.length&&handlerQueue.push({elem:cur,handlers:matches})}
// Add the remaining (directly-bound) handlers
return delegateCount<handlers.length&&handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)}),handlerQueue},
// Includes some event props shared by KeyEvent and MouseEvent
props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){
// Add which for key events
return null==event.which&&(event.which=null!=original.charCode?original.charCode:original.keyCode),event}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button;
// Calculate pageX/Y if missing and clientX/Y available
// Add which for click: 1 === left; 2 === middle; 3 === right
// Note: button is not normalized, so don't use it
return null==event.pageX&&null!=original.clientX&&(eventDoc=event.target.ownerDocument||document,doc=eventDoc.documentElement,body=eventDoc.body,event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0),event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0)),event.which||void 0===button||(event.which=1&button?1:2&button?3:4&button?2:0),event}},fix:function(event){if(event[jQuery.expando])return event;
// Create a writable copy of the event object and normalize some properties
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];for(fixHook||(this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{}),copy=fixHook.props?this.props.concat(fixHook.props):this.props,event=new jQuery.Event(originalEvent),i=copy.length;i--;)prop=copy[i],event[prop]=originalEvent[prop];
// Support: Cordova 2.5 (WebKit) (#13255)
// All events should have a target; Cordova deviceready doesn't
// Support: Safari 6.0+, Chrome<28
// Target should not be a text node (#504, #13143)
return event.target||(event.target=document),3===event.target.nodeType&&(event.target=event.target.parentNode),fixHook.filter?fixHook.filter(event,originalEvent):event},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){return this!==safeActiveElement()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===safeActiveElement()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){return"checkbox"===this.type&&this.click&&jQuery.nodeName(this,"input")?(this.click(),!1):void 0},
// For cross-browser consistency, don't fire native .click() on links
_default:function(event){return jQuery.nodeName(event.target,"a")}},beforeunload:{postDispatch:function(event){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==event.result&&event.originalEvent&&(event.originalEvent.returnValue=event.result)}}}},jQuery.removeEvent=function(elem,type,handle){
// This "if" is needed for plain objects
elem.removeEventListener&&elem.removeEventListener(type,handle)},jQuery.Event=function(src,props){
// Allow instantiation without the 'new' keyword
// Allow instantiation without the 'new' keyword
// Event object
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
// Support: Android<4.0
// Put explicitly provided properties onto the event object
// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
return this instanceof jQuery.Event?(src&&src.type?(this.originalEvent=src,this.type=src.type,this.isDefaultPrevented=src.defaultPrevented||void 0===src.defaultPrevented&&src.returnValue===!1?returnTrue:returnFalse):this.type=src,props&&jQuery.extend(this,props),this.timeStamp=src&&src.timeStamp||jQuery.now(),void(this[jQuery.expando]=!0)):new jQuery.Event(src,props)},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue,e&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue,e&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue,e&&e.stopImmediatePropagation(),this.stopPropagation()}},
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return related&&(related===target||jQuery.contains(target,related))||(event.type=handleObj.origType,ret=handleObj.handler.apply(this,arguments),event.type=fix),ret}}}),jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn)},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1)},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj)
// ( event )  dispatched jQuery.Event
return handleObj=types.handleObj,jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler),this;if("object"==typeof types){
// ( types-object [, selector] )
for(type in types)this.off(type,selector,types[type]);return this}
// ( types [, fn] )
return selector!==!1&&"function"!=typeof selector||(fn=selector,selector=void 0),fn===!1&&(fn=returnFalse),this.each(function(){jQuery.event.remove(this,types,fn,selector)})}});var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
// Support: IE 10-11, Edge 10240+
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
rnoInnerhtml=/<script|<style|<link/i,
// checked="checked" or checked
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;jQuery.extend({htmlPrefilter:function(html){return html.replace(rxhtmlTag,"<$1></$2>")},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(!0),inPage=jQuery.contains(elem.ownerDocument,elem);
// Fix IE cloning issues
if(!(support.noCloneChecked||1!==elem.nodeType&&11!==elem.nodeType||jQuery.isXMLDoc(elem)))for(destElements=getAll(clone),srcElements=getAll(elem),i=0,l=srcElements.length;l>i;i++)fixInput(srcElements[i],destElements[i]);
// Copy the events from the original to the clone
if(dataAndEvents)if(deepDataAndEvents)for(srcElements=srcElements||getAll(elem),destElements=destElements||getAll(clone),i=0,l=srcElements.length;l>i;i++)cloneCopyEvent(srcElements[i],destElements[i]);else cloneCopyEvent(elem,clone);
// Return the cloned set
// Preserve script evaluation history
return destElements=getAll(clone,"script"),destElements.length>0&&setGlobalEval(destElements,!inPage&&getAll(elem,"script")),clone},cleanData:function(elems){for(var data,elem,type,special=jQuery.event.special,i=0;void 0!==(elem=elems[i]);i++)if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events)for(type in data.events)special[type]?jQuery.event.remove(elem,type):jQuery.removeEvent(elem,type,data.handle);
// Support: Chrome <= 35-45+
// Assign undefined instead of using delete, see Data#remove
elem[dataPriv.expando]=void 0}elem[dataUser.expando]&&(
// Support: Chrome <= 35-45+
// Assign undefined instead of using delete, see Data#remove
elem[dataUser.expando]=void 0)}}}),jQuery.fn.extend({
// Keep domManip exposed until 3.0 (gh-2225)
domManip:domManip,detach:function(selector){return remove(this,selector,!0)},remove:function(selector){return remove(this,selector)},text:function(value){return access(this,function(value){return void 0===value?jQuery.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=value)})},null,value,arguments.length)},append:function(){return domManip(this,arguments,function(elem){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var target=manipulationTarget(this,elem);target.appendChild(elem)}})},prepend:function(){return domManip(this,arguments,function(elem){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild)}})},before:function(){return domManip(this,arguments,function(elem){this.parentNode&&this.parentNode.insertBefore(elem,this)})},after:function(){return domManip(this,arguments,function(elem){this.parentNode&&this.parentNode.insertBefore(elem,this.nextSibling)})},empty:function(){for(var elem,i=0;null!=(elem=this[i]);i++)1===elem.nodeType&&(
// Prevent memory leaks
jQuery.cleanData(getAll(elem,!1)),
// Remove any remaining nodes
elem.textContent="");return this},clone:function(dataAndEvents,deepDataAndEvents){return dataAndEvents=null==dataAndEvents?!1:dataAndEvents,deepDataAndEvents=null==deepDataAndEvents?dataAndEvents:deepDataAndEvents,this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents)})},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(void 0===value&&1===elem.nodeType)return elem.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof value&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;l>i;i++)elem=this[i]||{},1===elem.nodeType&&(jQuery.cleanData(getAll(elem,!1)),elem.innerHTML=value);elem=0}catch(e){}}elem&&this.empty().append(value)},null,value,arguments.length)},replaceWith:function(){var ignored=[];
// Make the changes, replacing each non-ignored context element with the new content
return domManip(this,arguments,function(elem){var parent=this.parentNode;jQuery.inArray(this,ignored)<0&&(jQuery.cleanData(getAll(this)),parent&&parent.replaceChild(elem,this))},ignored)}}),jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){for(var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;last>=i;i++)elems=i===last?this:this.clone(!0),jQuery(insert[i])[original](elems),push.apply(ret,elems.get());return this.pushStack(ret)}});var iframe,elemdisplay={
// Support: Firefox
// We have to pre-define these values for FF (#10227)
HTML:"block",BODY:"block"},rmargin=/^margin/,rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i"),getStyles=function(elem){
// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var view=elem.ownerDocument.defaultView;return view&&view.opener||(view=window),view.getComputedStyle(elem)},swap=function(elem,options,callback,args){var ret,name,old={};
// Remember the old values, and insert the new ones
for(name in options)old[name]=elem.style[name],elem.style[name]=options[name];ret=callback.apply(elem,args||[]);
// Revert the old values
for(name in options)elem.style[name]=old[name];return ret},documentElement=document.documentElement;!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function computeStyleTests(){div.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",div.innerHTML="",documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal="1%"!==divStyle.top,reliableMarginLeftVal="2px"===divStyle.marginLeft,boxSizingReliableVal="4px"===divStyle.width,div.style.marginRight="50%",pixelMarginRightVal="4px"===divStyle.marginRight,documentElement.removeChild(container)}var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");
// Finish early in limited (non-browser) environments
div.style&&(
// Support: IE9-11+
// Style of cloned element affects source element cloned (#8908)
div.style.backgroundClip="content-box",div.cloneNode(!0).style.backgroundClip="",support.clearCloneStyle="content-box"===div.style.backgroundClip,container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",container.appendChild(div),jQuery.extend(support,{pixelPosition:function(){
// This test is executed only once but we still do memoizing
// since we can use the boxSizingReliable pre-computing.
// No need to check if the test was already performed, though.
return computeStyleTests(),pixelPositionVal},boxSizingReliable:function(){return null==boxSizingReliableVal&&computeStyleTests(),boxSizingReliableVal},pixelMarginRight:function(){
// Support: Android 4.0-4.3
// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
// since that compresses better and they're computed together anyway.
return null==boxSizingReliableVal&&computeStyleTests(),pixelMarginRightVal},reliableMarginLeft:function(){
// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
return null==boxSizingReliableVal&&computeStyleTests(),reliableMarginLeftVal},reliableMarginRight:function(){
// Support: Android 2.3
// Check if div with explicit width and no margin-right incorrectly
// gets computed margin-right based on width of container. (#3333)
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
// This support function is only executed once so no memoizing is needed.
var ret,marginDiv=div.appendChild(document.createElement("div"));
// Reset CSS: box-sizing; display; margin; border; padding
// Support: Android 2.3
// Vendor-prefix box-sizing
return marginDiv.style.cssText=div.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",marginDiv.style.marginRight=marginDiv.style.width="0",div.style.width="1px",documentElement.appendChild(container),ret=!parseFloat(window.getComputedStyle(marginDiv).marginRight),documentElement.removeChild(container),div.removeChild(marginDiv),ret}}))}();var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"],emptyStyle=document.createElement("div").style;jQuery.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(elem,computed){if(computed){
// We should always get a number back from opacity
var ret=curCSS(elem,"opacity");return""===ret?"1":ret}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{"float":"cssFloat"},
// Get and set the style property on a DOM Node
style:function(elem,name,value,extra){
// Don't set styles on text and comment nodes
if(elem&&3!==elem.nodeType&&8!==elem.nodeType&&elem.style){
// Make sure that we're working with the right name
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;
// Check if we're setting a value
// Gets hook for the prefixed version, then unprefixed version
// Check if we're setting a value
// If a hook was provided get the non-computed value from there
// Convert "+=" or "-=" to relative numbers (#7345)
// Fixes bug #9237
// Make sure that null and NaN values aren't set (#7116)
// If a number was passed in, add the unit (except for certain CSS properties)
// Support: IE9-11+
// background-* props affect original clone's values
// If a hook was provided, use that value, otherwise just set the specified value
return name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName),hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName],void 0===value?hooks&&"get"in hooks&&void 0!==(ret=hooks.get(elem,!1,extra))?ret:style[name]:(type=typeof value,"string"===type&&(ret=rcssNum.exec(value))&&ret[1]&&(value=adjustCSS(elem,name,ret),type="number"),null!=value&&value===value&&("number"===type&&(value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px")),support.clearCloneStyle||""!==value||0!==name.indexOf("background")||(style[name]="inherit"),hooks&&"set"in hooks&&void 0===(value=hooks.set(elem,value,extra))||(style[name]=value)),void 0)}},css:function(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);return name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName),hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName],hooks&&"get"in hooks&&(val=hooks.get(elem,!0,extra)),void 0===val&&(val=curCSS(elem,name,styles)),"normal"===val&&name in cssNormalTransform&&(val=cssNormalTransform[name]),""===extra||extra?(num=parseFloat(val),extra===!0||isFinite(num)?num||0:val):val}}),jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){return computed?rdisplayswap.test(jQuery.css(elem,"display"))&&0===elem.offsetWidth?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra)}):getWidthOrHeight(elem,name,extra):void 0},set:function(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,"border-box"===jQuery.css(elem,"boxSizing",!1,styles),styles);
// Convert to pixels if value adjustment is needed
return subtract&&(matches=rcssNum.exec(value))&&"px"!==(matches[3]||"px")&&(elem.style[name]=value,value=jQuery.css(elem,name)),setPositiveNumber(elem,value,subtract)}}}),jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){return computed?(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left}))+"px":void 0}),
// Support: Android 2.3
jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){return computed?swap(elem,{display:"inline-block"},curCSS,[elem,"marginRight"]):void 0}),
// These hooks are used by animate to expand properties
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){for(var i=0,expanded={},
// Assumes a single number if not a string
parts="string"==typeof value?value.split(" "):[value];4>i;i++)expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];return expanded}},rmargin.test(prefix)||(jQuery.cssHooks[prefix+suffix].set=setPositiveNumber)}),jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){for(styles=getStyles(elem),len=name.length;len>i;i++)map[name[i]]=jQuery.css(elem,name[i],!1,styles);return map}return void 0!==value?jQuery.style(elem,name,value):jQuery.css(elem,name)},name,value,arguments.length>1)},show:function(){return showHide(this,!0)},hide:function(){return showHide(this)},toggle:function(state){return"boolean"==typeof state?state?this.show():this.hide():this.each(function(){isHidden(this)?jQuery(this).show():jQuery(this).hide()})}}),jQuery.Tween=Tween,Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem,this.prop=prop,this.easing=easing||jQuery.easing._default,this.options=options,this.start=this.now=this.cur(),this.end=end,this.unit=unit||(jQuery.cssNumber[prop]?"":"px")},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this)},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];return this.options.duration?this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration):this.pos=eased=percent,this.now=(this.end-this.start)*eased+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),hooks&&hooks.set?hooks.set(this):Tween.propHooks._default.set(this),this}},Tween.prototype.init.prototype=Tween.prototype,Tween.propHooks={_default:{get:function(tween){var result;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
return 1!==tween.elem.nodeType||null!=tween.elem[tween.prop]&&null==tween.elem.style[tween.prop]?tween.elem[tween.prop]:(result=jQuery.css(tween.elem,tween.prop,""),result&&"auto"!==result?result:0)},set:function(tween){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
jQuery.fx.step[tween.prop]?jQuery.fx.step[tween.prop](tween):1!==tween.elem.nodeType||null==tween.elem.style[jQuery.cssProps[tween.prop]]&&!jQuery.cssHooks[tween.prop]?tween.elem[tween.prop]=tween.now:jQuery.style(tween.elem,tween.prop,tween.now+tween.unit)}}},
// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){tween.elem.nodeType&&tween.elem.parentNode&&(tween.elem[tween.prop]=tween.now)}},jQuery.easing={linear:function(p){return p},swing:function(p){return.5-Math.cos(p*Math.PI)/2},_default:"swing"},jQuery.fx=Tween.prototype.init,
// Back Compat <1.8 extension point
jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);return adjustCSS(tween.elem,prop,rcssNum.exec(value),tween),tween}]},tweener:function(props,callback){jQuery.isFunction(props)?(callback=props,props=["*"]):props=props.match(rnotwhite);for(var prop,index=0,length=props.length;length>index;index++)prop=props[index],Animation.tweeners[prop]=Animation.tweeners[prop]||[],Animation.tweeners[prop].unshift(callback)},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){prepend?Animation.prefilters.unshift(callback):Animation.prefilters.push(callback)}}),jQuery.speed=function(speed,easing,fn){var opt=speed&&"object"==typeof speed?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};
// Normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return opt.duration=jQuery.fx.off?0:"number"==typeof opt.duration?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default,null!=opt.queue&&opt.queue!==!0||(opt.queue="fx"),opt.old=opt.complete,opt.complete=function(){jQuery.isFunction(opt.old)&&opt.old.call(this),opt.queue&&jQuery.dequeue(this,opt.queue)},opt},jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){
// Show any hidden elements after setting opacity to 0
return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback)},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){
// Operate on a copy of prop so per-property easing won't be lost
var anim=Animation(this,jQuery.extend({},prop),optall);
// Empty animations, or finishing resolves immediately
(empty||dataPriv.get(this,"finish"))&&anim.stop(!0)};return doAnimation.finish=doAnimation,empty||optall.queue===!1?this.each(doAnimation):this.queue(optall.queue,doAnimation)},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop,stop(gotoEnd)};return"string"!=typeof type&&(gotoEnd=clearQueue,clearQueue=type,type=void 0),clearQueue&&type!==!1&&this.queue(type||"fx",[]),this.each(function(){var dequeue=!0,index=null!=type&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index)data[index]&&data[index].stop&&stopQueue(data[index]);else for(index in data)data[index]&&data[index].stop&&rrun.test(index)&&stopQueue(data[index]);for(index=timers.length;index--;)timers[index].elem!==this||null!=type&&timers[index].queue!==type||(timers[index].anim.stop(gotoEnd),dequeue=!1,timers.splice(index,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!dequeue&&gotoEnd||jQuery.dequeue(this,type)})},finish:function(type){return type!==!1&&(type=type||"fx"),this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;
// Look for any active animations, and finish them
for(
// Enable finishing flag on private data
data.finish=!0,
// Empty the queue first
jQuery.queue(this,type,[]),hooks&&hooks.stop&&hooks.stop.call(this,!0),index=timers.length;index--;)timers[index].elem===this&&timers[index].queue===type&&(timers[index].anim.stop(!0),timers.splice(index,1));
// Look for any animations in the old queue and finish them
for(index=0;length>index;index++)queue[index]&&queue[index].finish&&queue[index].finish.call(this);
// Turn off finishing flag
delete data.finish})}}),jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return null==speed||"boolean"==typeof speed?cssFn.apply(this,arguments):this.animate(genFx(name,!0),speed,easing,callback)}}),
// Generate shortcuts for custom animations
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback)}}),jQuery.timers=[],jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;for(fxNow=jQuery.now();i<timers.length;i++)timer=timers[i],timer()||timers[i]!==timer||timers.splice(i--,1);timers.length||jQuery.fx.stop(),fxNow=void 0},jQuery.fx.timer=function(timer){jQuery.timers.push(timer),timer()?jQuery.fx.start():jQuery.timers.pop()},jQuery.fx.interval=13,jQuery.fx.start=function(){timerId||(timerId=window.setInterval(jQuery.fx.tick,jQuery.fx.interval))},jQuery.fx.stop=function(){window.clearInterval(timerId),timerId=null},jQuery.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay=function(time,type){return time=jQuery.fx?jQuery.fx.speeds[time]||time:time,type=type||"fx",this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout)}})},function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox",
// Support: iOS<=5.1, Android<=4.2+
// Default value for a checkbox should be "on"
support.checkOn=""!==input.value,
// Support: IE<=11+
// Must access selectedIndex to make default options select
support.optSelected=opt.selected,
// Support: Android<=2.3
// Options inside disabled selects are incorrectly marked as disabled
select.disabled=!0,support.optDisabled=!opt.disabled,input=document.createElement("input"),input.value="t",input.type="radio",support.radioValue="t"===input.value}();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1)},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name)})}}),jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==nType&&8!==nType&&2!==nType)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// All attributes are lowercase
// Grab necessary hook if one is defined
return"undefined"==typeof elem.getAttribute?jQuery.prop(elem,name,value):(1===nType&&jQuery.isXMLDoc(elem)||(name=name.toLowerCase(),hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:void 0)),void 0!==value?null===value?void jQuery.removeAttr(elem,name):hooks&&"set"in hooks&&void 0!==(ret=hooks.set(elem,value,name))?ret:(elem.setAttribute(name,value+""),value):hooks&&"get"in hooks&&null!==(ret=hooks.get(elem,name))?ret:(ret=jQuery.find.attr(elem,name),null==ret?void 0:ret))},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&"radio"===value&&jQuery.nodeName(elem,"input")){var val=elem.value;return elem.setAttribute("type",value),val&&(elem.value=val),value}}}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&1===elem.nodeType)for(;name=attrNames[i++];)propName=jQuery.propFix[name]||name,jQuery.expr.match.bool.test(name)&&(elem[propName]=!1),elem.removeAttribute(name)}}),boolHook={set:function(elem,value,name){
// Remove boolean attributes when set to false
return value===!1?jQuery.removeAttr(elem,name):elem.setAttribute(name,name),name}},jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle;return isXML||(handle=attrHandle[name],attrHandle[name]=ret,ret=null!=getter(elem,name,isXML)?name.toLowerCase():null,attrHandle[name]=handle),ret}});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1)},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name]})}}),jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==nType&&8!==nType&&2!==nType)
// Fix name and attach hooks
return 1===nType&&jQuery.isXMLDoc(elem)||(name=jQuery.propFix[name]||name,hooks=jQuery.propHooks[name]),void 0!==value?hooks&&"set"in hooks&&void 0!==(ret=hooks.set(elem,value,name))?ret:elem[name]=value:hooks&&"get"in hooks&&null!==(ret=hooks.get(elem,name))?ret:elem[name]},propHooks:{tabIndex:{get:function(elem){
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
support.optSelected||(jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;return parent&&parent.parentNode&&parent.parentNode.selectedIndex,null},set:function(elem){var parent=elem.parentNode;parent&&(parent.selectedIndex,parent.parentNode&&parent.parentNode.selectedIndex)}}),jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this});var rclass=/[\t\r\n\f]/g;jQuery.fn.extend({addClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value))return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)))});if("string"==typeof value&&value)for(classes=value.match(rnotwhite)||[];elem=this[i++];)if(curValue=getClass(elem),cur=1===elem.nodeType&&(" "+curValue+" ").replace(rclass," ")){for(j=0;clazz=classes[j++];)cur.indexOf(" "+clazz+" ")<0&&(cur+=clazz+" ");
// Only assign if different to avoid unneeded rendering.
finalValue=jQuery.trim(cur),curValue!==finalValue&&elem.setAttribute("class",finalValue)}return this},removeClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value))return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof value&&value)for(classes=value.match(rnotwhite)||[];elem=this[i++];)if(curValue=getClass(elem),cur=1===elem.nodeType&&(" "+curValue+" ").replace(rclass," ")){for(j=0;clazz=classes[j++];)
// Remove *all* instances
for(;cur.indexOf(" "+clazz+" ")>-1;)cur=cur.replace(" "+clazz+" "," ");
// Only assign if different to avoid unneeded rendering.
finalValue=jQuery.trim(cur),curValue!==finalValue&&elem.setAttribute("class",finalValue)}return this},toggleClass:function(value,stateVal){var type=typeof value;return"boolean"==typeof stateVal&&"string"===type?stateVal?this.addClass(value):this.removeClass(value):jQuery.isFunction(value)?this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal)}):this.each(function(){var className,i,self,classNames;if("string"===type)for(i=0,self=jQuery(this),classNames=value.match(rnotwhite)||[];className=classNames[i++];)self.hasClass(className)?self.removeClass(className):self.addClass(className);else void 0!==value&&"boolean"!==type||(className=getClass(this),className&&dataPriv.set(this,"__className__",className),this.setAttribute&&this.setAttribute("class",className||value===!1?"":dataPriv.get(this,"__className__")||""))})},hasClass:function(selector){var className,elem,i=0;for(className=" "+selector+" ";elem=this[i++];)if(1===elem.nodeType&&(" "+getClass(elem)+" ").replace(rclass," ").indexOf(className)>-1)return!0;return!1}});var rreturn=/\r/g,rspaces=/[\x20\t\r\n\f]+/g;jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];{if(arguments.length)return isFunction=jQuery.isFunction(value),this.each(function(i){var val;1===this.nodeType&&(val=isFunction?value.call(this,i,jQuery(this).val()):value,null==val?val="":"number"==typeof val?val+="":jQuery.isArray(val)&&(val=jQuery.map(val,function(value){return null==value?"":value+""})),hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()],hooks&&"set"in hooks&&void 0!==hooks.set(this,val,"value")||(this.value=val))});if(elem)
// Handle most common string cases
// Handle cases where value is null/undef or number
return hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()],hooks&&"get"in hooks&&void 0!==(ret=hooks.get(elem,"value"))?ret:(ret=elem.value,"string"==typeof ret?ret.replace(rreturn,""):null==ret?"":ret)}}}),jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");
// Support: IE10-11+
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
return null!=val?val:jQuery.trim(jQuery.text(elem)).replace(rspaces," ")}},select:{get:function(elem){
// Loop through all the selected options
for(var value,option,options=elem.options,index=elem.selectedIndex,one="select-one"===elem.type||0>index,values=one?null:[],max=one?index+1:options.length,i=0>index?max:one?index:0;max>i;i++)
// IE8-9 doesn't update selected after form reset (#2551)
if(option=options[i],(option.selected||i===index)&&(support.optDisabled?!option.disabled:null===option.getAttribute("disabled"))&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){
// We don't need an array for one selects
if(value=jQuery(option).val(),one)return value;
// Multi-Selects return an array
values.push(value)}return values},set:function(elem,value){for(var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;i--;)option=options[i],(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1)&&(optionSet=!0);
// Force browsers to behave consistently when non-matching value is set
return optionSet||(elem.selectedIndex=-1),values}}}}),
// Radios and checkboxes getter/setter
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){return jQuery.isArray(value)?elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1:void 0}},support.checkOn||(jQuery.valHooks[this].get=function(elem){return null===elem.getAttribute("value")?"on":elem.value})});
// Return jQuery for attributes-only inclusion
var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];
// Don't do events on text and comment nodes
if(cur=tmp=elem=elem||document,3!==elem.nodeType&&8!==elem.nodeType&&!rfocusMorph.test(type+jQuery.event.triggered)&&(type.indexOf(".")>-1&&(namespaces=type.split("."),type=namespaces.shift(),namespaces.sort()),ontype=type.indexOf(":")<0&&"on"+type,event=event[jQuery.expando]?event:new jQuery.Event(type,"object"==typeof event&&event),event.isTrigger=onlyHandlers?2:3,event.namespace=namespaces.join("."),event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,event.result=void 0,event.target||(event.target=elem),data=null==data?[event]:jQuery.makeArray(data,[event]),special=jQuery.event.special[type]||{},onlyHandlers||!special.trigger||special.trigger.apply(elem,data)!==!1)){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){for(bubbleType=special.delegateType||type,rfocusMorph.test(bubbleType+type)||(cur=cur.parentNode);cur;cur=cur.parentNode)eventPath.push(cur),tmp=cur;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
tmp===(elem.ownerDocument||document)&&eventPath.push(tmp.defaultView||tmp.parentWindow||window)}for(
// Fire handlers on the event path
i=0;(cur=eventPath[i++])&&!event.isPropagationStopped();)event.type=i>1?bubbleType:special.bindType||type,handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle"),handle&&handle.apply(cur,data),handle=ontype&&cur[ontype],handle&&handle.apply&&acceptData(cur)&&(event.result=handle.apply(cur,data),event.result===!1&&event.preventDefault());
// If nobody prevented the default action, do it now
// Call a native DOM method on the target with the same name name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
// Don't re-trigger an onFOO event when we call its FOO() method
// Prevent re-triggering of the same event, since we already bubbled it above
return event.type=type,onlyHandlers||event.isDefaultPrevented()||special._default&&special._default.apply(eventPath.pop(),data)!==!1||!acceptData(elem)||ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)&&(tmp=elem[ontype],tmp&&(elem[ontype]=null),jQuery.event.triggered=type,elem[type](),jQuery.event.triggered=void 0,tmp&&(elem[ontype]=tmp)),event.result}},
// Piggyback on a donor event to simulate a different one
simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event,event,{type:type,isSimulated:!0});jQuery.event.trigger(e,null,elem),e.isDefaultPrevented()&&event.preventDefault()}}),jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this)})},triggerHandler:function(type,data){var elem=this[0];return elem?jQuery.event.trigger(type,data,elem,!0):void 0}}),jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(i,name){
// Handle event binding
jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name)}}),jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver)}}),support.focusin="onfocusin"in window,
// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
support.focusin||jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event))};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);attaches||doc.addEventListener(orig,handler,!0),dataPriv.access(doc,fix,(attaches||0)+1)},teardown:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;attaches?dataPriv.access(doc,fix,attaches):(doc.removeEventListener(orig,handler,!0),dataPriv.remove(doc,fix))}}});var location=window.location,nonce=jQuery.now(),rquery=/\?/;
// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON=function(data){return JSON.parse(data+"")},
// Cross-browser xml parsing
jQuery.parseXML=function(data){var xml;if(!data||"string"!=typeof data)return null;
// Support: IE9
try{xml=(new window.DOMParser).parseFromString(data,"text/xml")}catch(e){xml=void 0}return xml&&!xml.getElementsByTagName("parsererror").length||jQuery.error("Invalid XML: "+data),xml};var rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
prefilters={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
transports={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
allTypes="*/".concat("*"),
// Anchor tag for parsing the document origin
originAnchor=document.createElement("a");originAnchor.href=location.href,jQuery.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":jQuery.parseJSON,
// Parse text as xml
"text xml":jQuery.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(target,settings){
// Building a settings object
// Extending ajaxSettings
return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target)},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),
// Main method
ajax:function(url,options){
// Callback for when everything is done
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;
// Called once
2!==state&&(state=2,timeoutTimer&&window.clearTimeout(timeoutTimer),transport=void 0,responseHeadersString=headers||"",jqXHR.readyState=status>0?4:0,isSuccess=status>=200&&300>status||304===status,responses&&(response=ajaxHandleResponses(s,jqXHR,responses)),response=ajaxConvert(s,response,jqXHR,isSuccess),isSuccess?(s.ifModified&&(modified=jqXHR.getResponseHeader("Last-Modified"),modified&&(jQuery.lastModified[cacheURL]=modified),modified=jqXHR.getResponseHeader("etag"),modified&&(jQuery.etag[cacheURL]=modified)),204===status||"HEAD"===s.type?statusText="nocontent":304===status?statusText="notmodified":(statusText=response.state,success=response.data,error=response.error,isSuccess=!error)):(error=statusText,!status&&statusText||(statusText="error",0>status&&(status=0))),jqXHR.status=status,jqXHR.statusText=(nativeStatusText||statusText)+"",isSuccess?deferred.resolveWith(callbackContext,[success,statusText,jqXHR]):deferred.rejectWith(callbackContext,[jqXHR,statusText,error]),jqXHR.statusCode(statusCode),statusCode=void 0,fireGlobals&&globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]),completeDeferred.fireWith(callbackContext,[jqXHR,statusText]),fireGlobals&&(globalEventContext.trigger("ajaxComplete",[jqXHR,s]),--jQuery.active||jQuery.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof url&&(options=url,url=void 0),
// Force options to be an object
options=options||{};var transport,
// URL without anti-cache param
cacheURL,
// Response headers
responseHeadersString,responseHeaders,
// timeout handle
timeoutTimer,
// Url cleanup var
urlAnchor,
// To know if global events are to be dispatched
fireGlobals,
// Loop variable
i,
// Create the final options object
s=jQuery.ajaxSetup({},options),
// Callbacks context
callbackContext=s.context||s,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,
// Deferreds
deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),
// Status-dependent callbacks
statusCode=s.statusCode||{},
// Headers (they are sent all at once)
requestHeaders={},requestHeadersNames={},
// The jqXHR state
state=0,
// Default abort message
strAbort="canceled",
// Fake xhr
jqXHR={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(key){var match;if(2===state){if(!responseHeaders)for(responseHeaders={};match=rheaders.exec(responseHeadersString);)responseHeaders[match[1].toLowerCase()]=match[2];match=responseHeaders[key.toLowerCase()]}return null==match?null:match},
// Raw string
getAllResponseHeaders:function(){return 2===state?responseHeadersString:null},
// Caches the header
setRequestHeader:function(name,value){var lname=name.toLowerCase();return state||(name=requestHeadersNames[lname]=requestHeadersNames[lname]||name,requestHeaders[name]=value),this},
// Overrides response content-type header
overrideMimeType:function(type){return state||(s.mimeType=type),this},
// Status-dependent callbacks
statusCode:function(map){var code;if(map)if(2>state)for(code in map)
// Lazy-add the new callback in a way that preserves old ones
statusCode[code]=[statusCode[code],map[code]];else
// Execute the appropriate callbacks
jqXHR.always(map[jqXHR.status]);return this},
// Cancel the request
abort:function(statusText){var finalText=statusText||strAbort;return transport&&transport.abort(finalText),done(0,finalText),this}};
// A cross-domain request is in order when the origin doesn't match the current origin.
if(
// Attach deferreds
deferred.promise(jqXHR).complete=completeDeferred.add,jqXHR.success=jqXHR.done,jqXHR.error=jqXHR.fail,
// Remove hash character (#7531: and string promotion)
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
s.url=((url||s.url||location.href)+"").replace(rhash,"").replace(rprotocol,location.protocol+"//"),
// Alias method option to type as per ticket #12004
s.type=options.method||options.type||s.method||s.type,
// Extract dataTypes list
s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""],null==s.crossDomain){urlAnchor=document.createElement("a");
// Support: IE8-11+
// IE throws exception if url is malformed, e.g. http://example.com:80x/
try{urlAnchor.href=s.url,
// Support: IE8-11+
// Anchor's host property isn't correctly set when s.url is relative
urlAnchor.href=urlAnchor.href,s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!=urlAnchor.protocol+"//"+urlAnchor.host}catch(e){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
s.crossDomain=!0}}
// If request was aborted inside a prefilter, stop there
if(
// Convert data if not already a string
s.data&&s.processData&&"string"!=typeof s.data&&(s.data=jQuery.param(s.data,s.traditional)),
// Apply prefilters
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR),2===state)return jqXHR;fireGlobals=jQuery.event&&s.global,fireGlobals&&0===jQuery.active++&&jQuery.event.trigger("ajaxStart"),s.type=s.type.toUpperCase(),s.hasContent=!rnoContent.test(s.type),cacheURL=s.url,s.hasContent||(s.data&&(cacheURL=s.url+=(rquery.test(cacheURL)?"&":"?")+s.data,delete s.data),s.cache===!1&&(s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+nonce++):cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++)),s.ifModified&&(jQuery.lastModified[cacheURL]&&jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]),jQuery.etag[cacheURL]&&jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL])),(s.data&&s.hasContent&&s.contentType!==!1||options.contentType)&&jqXHR.setRequestHeader("Content-Type",s.contentType),jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+("*"!==s.dataTypes[0]?", "+allTypes+"; q=0.01":""):s.accepts["*"]);
// Check for headers option
for(i in s.headers)jqXHR.setRequestHeader(i,s.headers[i]);
// Allow custom headers/mimetypes and early abort
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===!1||2===state))
// Abort if not done already and return
return jqXHR.abort();
// Aborting is no longer a cancellation
strAbort="abort";
// Install callbacks on deferreds
for(i in{success:1,error:1,complete:1})jqXHR[i](s[i]);
// If no transport, we auto-abort
if(transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR)){
// If request was aborted inside ajaxSend, stop there
if(jqXHR.readyState=1,
// Send global event
fireGlobals&&globalEventContext.trigger("ajaxSend",[jqXHR,s]),2===state)return jqXHR;
// Timeout
s.async&&s.timeout>0&&(timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout")},s.timeout));try{state=1,transport.send(requestHeaders,done)}catch(e){
// Propagate exception as error if not done
if(!(2>state))throw e;done(-1,e)}}else done(-1,"No Transport");return jqXHR},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json")},getScript:function(url,callback){return jQuery.get(url,void 0,callback,"script")}}),jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return jQuery.isFunction(data)&&(type=type||callback,callback=data,data=void 0),jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url))}}),jQuery._evalUrl=function(url){return jQuery.ajax({url:url,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},jQuery.fn.extend({wrapAll:function(html){var wrap;
// The elements to wrap the target around
return jQuery.isFunction(html)?this.each(function(i){jQuery(this).wrapAll(html.call(this,i))}):(this[0]&&(wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&wrap.insertBefore(this[0]),wrap.map(function(){for(var elem=this;elem.firstElementChild;)elem=elem.firstElementChild;return elem}).append(this)),this)},wrapInner:function(html){return jQuery.isFunction(html)?this.each(function(i){jQuery(this).wrapInner(html.call(this,i))}):this.each(function(){var self=jQuery(this),contents=self.contents();contents.length?contents.wrapAll(html):self.append(html)})},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html)})},unwrap:function(){return this.parent().each(function(){jQuery.nodeName(this,"body")||jQuery(this).replaceWith(this.childNodes)}).end()}}),jQuery.expr.filters.hidden=function(elem){return!jQuery.expr.filters.visible(elem)},jQuery.expr.filters.visible=function(elem){
// Support: Opera <= 12.12
// Opera reports offsetWidths and offsetHeights less than zero on some elements
// Use OR instead of AND as the element is not visible if either is true
// See tickets #10406 and #13132
return elem.offsetWidth>0||elem.offsetHeight>0||elem.getClientRects().length>0};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():null==value?"":value,s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value)};
// If an array was passed in, assume that it is an array of form elements.
if(
// Set traditional to true for jQuery <= 1.3.2 behavior.
void 0===traditional&&(traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional),jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a))
// Serialize the form elements
jQuery.each(a,function(){add(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(prefix in a)buildParams(prefix,a[prefix],traditional,add);
// Return the resulting serialization
return s.join("&").replace(r20,"+")},jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this}).filter(function(){var type=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type))}).map(function(i,elem){var val=jQuery(this).val();return null==val?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")}}):{name:elem.name,value:val.replace(rCRLF,"\r\n")}}).get()}}),jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(e){}};var xhrSuccessStatus={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE9
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported,support.ajax=xhrSupported=!!xhrSupported,jQuery.ajaxTransport(function(options){var callback,errorCallback;
// Cross domain only allowed if supported through XMLHttpRequest
// Cross domain only allowed if supported through XMLHttpRequest
return support.cors||xhrSupported&&!options.crossDomain?{send:function(headers,complete){var i,xhr=options.xhr();
// Apply custom fields if provided
if(xhr.open(options.type,options.url,options.async,options.username,options.password),options.xhrFields)for(i in options.xhrFields)xhr[i]=options.xhrFields[i];
// Override mime type if needed
options.mimeType&&xhr.overrideMimeType&&xhr.overrideMimeType(options.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
options.crossDomain||headers["X-Requested-With"]||(headers["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(i in headers)xhr.setRequestHeader(i,headers[i]);callback=function(type){return function(){callback&&(callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null,"abort"===type?xhr.abort():"error"===type?"number"!=typeof xhr.status?complete(0,"error"):complete(xhr.status,xhr.statusText):complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,"text"!==(xhr.responseType||"text")||"string"!=typeof xhr.responseText?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders()))}},xhr.onload=callback(),errorCallback=xhr.onerror=callback("error"),void 0!==xhr.onabort?xhr.onabort=errorCallback:xhr.onreadystatechange=function(){4===xhr.readyState&&window.setTimeout(function(){callback&&errorCallback()})},callback=callback("abort");try{
// Do send the request (this may raise an exception)
xhr.send(options.hasContent&&options.data||null)}catch(e){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(callback)throw e}},abort:function(){callback&&callback()}}:void 0}),
// Install script dataType
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){return jQuery.globalEval(text),text}}}),
// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter("script",function(s){void 0===s.cache&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),
// Bind script tag hack transport
jQuery.ajaxTransport("script",function(s){
// This transport only deals with cross domain requests
if(s.crossDomain){var script,callback;return{send:function(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove(),callback=null,evt&&complete("error"===evt.type?404:200,evt.type)}),document.head.appendChild(script[0])},abort:function(){callback&&callback()}}}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;return this[callback]=!0,callback}}),
// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==!1&&(rjsonp.test(s.url)?"url":"string"==typeof s.data&&0===(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
// Handle iff the expected data type is "jsonp" or we have a parameter to set
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// Force json dataType
// Install callback
// Clean-up function (fires after converters)
return jsonProp||"jsonp"===s.dataTypes[0]?(callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,jsonProp?s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName):s.jsonp!==!1&&(s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName),s.converters["script json"]=function(){return responseContainer||jQuery.error(callbackName+" was not called"),responseContainer[0]},s.dataTypes[0]="json",overwritten=window[callbackName],window[callbackName]=function(){responseContainer=arguments},jqXHR.always(function(){void 0===overwritten?jQuery(window).removeProp(callbackName):window[callbackName]=overwritten,s[callbackName]&&(s.jsonpCallback=originalSettings.jsonpCallback,oldCallbacks.push(callbackName)),responseContainer&&jQuery.isFunction(overwritten)&&overwritten(responseContainer[0]),responseContainer=overwritten=void 0}),"script"):void 0}),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML=function(data,context,keepScripts){if(!data||"string"!=typeof data)return null;"boolean"==typeof context&&(keepScripts=context,context=!1),context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];
// Single tag
// Single tag
return parsed?[context.createElement(parsed[1])]:(parsed=buildFragment([data],context,scripts),scripts&&scripts.length&&jQuery(scripts).remove(),jQuery.merge([],parsed.childNodes))};
// Keep a copy of the old load method
var _load=jQuery.fn.load;/**
 * Load a url into a page
 */
jQuery.fn.load=function(url,params,callback){if("string"!=typeof url&&_load)return _load.apply(this,arguments);var selector,type,response,self=this,off=url.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return off>-1&&(selector=jQuery.trim(url.slice(off)),url=url.slice(0,off)),jQuery.isFunction(params)?(callback=params,params=void 0):params&&"object"==typeof params&&(type="POST"),self.length>0&&jQuery.ajax({url:url,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:type||"GET",dataType:"html",data:params}).done(function(responseText){response=arguments,self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText)}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(self,response||[jqXHR.responseText,status,jqXHR])})}),this},
// Attach a bunch of functions for handling common AJAX events
jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn)}}),jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem}).length},jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};
// Set position first, in-case top/left are set even on static elem
"static"===position&&(elem.style.position="relative"),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=("absolute"===position||"fixed"===position)&&(curCSSTop+curCSSLeft).indexOf("auto")>-1,calculatePosition?(curPosition=curElem.position(),curTop=curPosition.top,curLeft=curPosition.left):(curTop=parseFloat(curCSSTop)||0,curLeft=parseFloat(curCSSLeft)||0),jQuery.isFunction(options)&&(options=options.call(elem,i,jQuery.extend({},curOffset))),null!=options.top&&(props.top=options.top-curOffset.top+curTop),null!=options.left&&(props.left=options.left-curOffset.left+curLeft),"using"in options?options.using.call(elem,props):curElem.css(props)}},jQuery.fn.extend({offset:function(options){if(arguments.length)return void 0===options?this:this.each(function(i){jQuery.offset.setOffset(this,options,i)});var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;if(doc)
// Make sure it's not a disconnected DOM node
// Make sure it's not a disconnected DOM node
return docElem=doc.documentElement,jQuery.contains(docElem,elem)?(box=elem.getBoundingClientRect(),win=getWindow(doc),{top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft}):box},position:function(){if(this[0]){var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};
// Subtract parent offsets and element margins
// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
// Assume getBoundingClientRect is there when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===jQuery.css(elem,"position")?offset=elem.getBoundingClientRect():(offsetParent=this.offsetParent(),offset=this.offset(),jQuery.nodeName(offsetParent[0],"html")||(parentOffset=offsetParent.offset()),parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",!0),parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",!0)),{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",!0),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var offsetParent=this.offsetParent;offsetParent&&"static"===jQuery.css(offsetParent,"position");)offsetParent=offsetParent.offsetParent;return offsetParent||documentElement})}}),
// Create scrollLeft and scrollTop methods
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);return void 0===val?win?win[prop]:elem[method]:void(win?win.scrollTo(top?win.pageXOffset:val,top?val:win.pageYOffset):elem[method]=val)},method,val,arguments.length)}}),
// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){return computed?(computed=curCSS(elem,prop),rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed):void 0})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){
// Margin is only for outerHeight, outerWidth
jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||"boolean"!=typeof margin),extra=defaultExtra||(margin===!0||value===!0?"margin":"border");return access(this,function(elem,type,value){var doc;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return jQuery.isWindow(elem)?elem.document.documentElement["client"+name]:9===elem.nodeType?(doc=elem.documentElement,Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name])):void 0===value?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra)},type,chainable?margin:void 0,chainable,null)}})}),jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn)},unbind:function(types,fn){return this.off(types,null,fn)},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn)},undelegate:function(selector,types,fn){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(selector,"**"):this.off(types,selector||"**",fn)},size:function(){return this.length}}),jQuery.fn.andSelf=jQuery.fn.addBack,
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
"function"==typeof define&&define.amd&&define("jquery",[],function(){return jQuery});var
// Map over jQuery in case of overwrite
_jQuery=window.jQuery,
// Map over the $ in case of overwrite
_$=window.$;
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return jQuery.noConflict=function(deep){return window.$===jQuery&&(window.$=_$),deep&&window.jQuery===jQuery&&(window.jQuery=_jQuery),jQuery},noGlobal||(window.jQuery=window.$=jQuery),jQuery}),"undefined"==typeof jQuery){var jQuery;jQuery="function"==typeof require?$=require("jQuery"):$}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*(2*Math.PI)/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*(.3*1.5)),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*(b*b*(((f*=1.525)+1)*b-f))+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*(7.5625*b*b)+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:d/4*((b-=2)*b*b+2)+c}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;h=c(h||i,g),j.push(1+h.x),k+=16,Math.abs(h.x)>l&&Math.abs(h.v)>l;);return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(a){function l(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function n(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function r(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(u){setTimeout(function(){throw u},1)}if("scroll"===C){var w,z,A,D=/^x$/i.test(h.axis)?"Left":"Top",E=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,w=h.container["scroll"+D],A=w+m(f).position()[D.toLowerCase()]+E):h.container=null:(w=t.State.scrollAnchor[t.State["scrollProperty"+D]],z=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===D?"Top":"Left")]],A=m(f).offset()[D.toLowerCase()]+E),i={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:A,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:D,alternateValue:z}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var F=m.extend(!0,{},g(f).tweensContainer);for(var G in F)if("element"!==G){var H=F[G].startValue;F[G].startValue=F[G].currentValue=F[G].endValue,F[G].endValue=H,p.isEmptyObject(s)||(F[G].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+G+"): "+JSON.stringify(F[G]),f)}i=F}else if("start"===C){var F;g(f).tweensContainer&&g(f).isAnimating===!0&&(F=g(f).tweensContainer),m.each(q,function(a,b){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(a)){var c=l(b,!0),e=c[0],f=c[1],g=c[2];if(v.RegEx.isHex.test(e)){for(var h=["Red","Green","Blue"],i=v.Values.hexToRgb(e),j=g?v.Values.hexToRgb(g):d,k=0;k<h.length;k++){var m=[i[k]];f&&m.push(f),j!==d&&m.push(j[k]),q[a+h[k]]=m}delete q[a]}}});for(var K in q){var L=l(q[K]),M=L[0],N=L[1],O=L[2];K=v.Names.camelCase(K);var P=v.Hooks.getRoot(K),Q=!1;if(g(f).isSVG||"tween"===P||v.Names.prefixCheck(P)[1]!==!1||v.Normalizations.registered[P]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(K)&&!O&&0!==M&&(O=0),h._cacheValues&&F&&F[K]?(O===d&&(O=F[K].endValue+F[K].unitType),Q=g(f).rootPropertyValueCache[P]):v.Hooks.registered[K]?O===d?(Q=v.getPropertyValue(f,P),O=v.getPropertyValue(f,K,Q)):Q=v.Hooks.templates[P][1]:O===d&&(O=v.getPropertyValue(f,K));var R,S,T,U=!1;if(R=n(K,O),O=R[0],T=R[1],R=n(K,M),M=R[0].replace(/^([+-\/*])=/,function(a,b){return U=b,""}),S=R[1],O=parseFloat(O)||0,M=parseFloat(M)||0,"%"===S&&(/^(fontSize|lineHeight)$/.test(K)?(M/=100,S="em"):/^scale/.test(K)?(M/=100,
S=""):/(Red|Green|Blue)$/i.test(K)&&(M=M/100*255,S="")),/[\/*]/.test(U))S=T;else if(T!==S&&0!==O)if(0===M)S=T;else{e=e||r();var V=/margin|padding|left|right|width|text|word|letter/i.test(K)||/X$/.test(K)||"x"===K?"x":"y";switch(T){case"%":O*="x"===V?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:O*=e[T+"ToPx"]}switch(S){case"%":O*=1/("x"===V?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:O*=1/e[S+"ToPx"]}}switch(U){case"+":M=O+M;break;case"-":M=O-M;break;case"*":M=O*M;break;case"/":M=O/M}i[K]={rootPropertyValue:Q,startValue:O,currentValue:O,endValue:M,unitType:S,easing:N},t.debug&&console.log("tweensContainer ("+K+"): "+JSON.stringify(i[K]),f)}else t.debug&&console.log("Skipping ["+P+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer)});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):"finish"===q&&(b[2].duration=1))}):!0})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)})),!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==ka?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ia.length;){if(c=ia[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return oa++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:ra?N:sa?Q:qa?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&ya&&0===d-e,g=b&(Aa|Ba)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=na(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===ya||f.eventType===Aa)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ba&&(i>xa||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=ma(l.x)>ma(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:la(a.pointers[c].clientX),clientY:la(a.pointers[c].clientY)},c++;return{timeStamp:na(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:la(a[0].clientX),y:la(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:la(c/b),y:la(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Ca:ma(a)>=ma(b)?a>0?Da:Ea:b>0?Fa:Ga}function I(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],La)-J(a[1],a[0],La)}function L(a,b){return I(b[0],b[1],La)/I(a[0],a[1],La)}function M(){this.evEl=Na,this.evWin=Oa,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Ra,this.evWin=Sa,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ua,this.evWin=Va,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Aa|Ba)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xa,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(ya|za)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===ya)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Aa|Ba)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bb))return bb;var b=q(a,cb),c=q(a,db);return b&&c?cb+" "+db:b||c?b?cb:db:q(a,ab)?ab:_a}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=eb,this.simultaneous={},this.requireFail=[]}function W(a){return a&jb?"cancel":a&hb?"end":a&gb?"move":a&fb?"start":""}function X(a){return a==Ga?"down":a==Fa?"up":a==Da?"left":a==Ea?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function aa(){V.apply(this,arguments),this._timer=null,this._input=null}function ba(){Z.apply(this,arguments)}function ca(){Z.apply(this,arguments)}function da(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ea(a,b){return b=b||{},b.recognizers=m(b.recognizers,ea.defaults.preset),new fa(a,b)}function fa(a,b){b=b||{},this.options=i(b,ea.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),ga(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ga(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function ha(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ia=["","webkit","moz","MS","ms","o"],ja=b.createElement("div"),ka="function",la=Math.round,ma=Math.abs,na=Date.now,oa=1,pa=/mobile|tablet|ip(ad|hone|od)|android/i,qa="ontouchstart"in a,ra=v(a,"PointerEvent")!==d,sa=qa&&pa.test(navigator.userAgent),ta="touch",ua="pen",va="mouse",wa="kinect",xa=25,ya=1,za=2,Aa=4,Ba=8,Ca=1,Da=2,Ea=4,Fa=8,Ga=16,Ha=Da|Ea,Ia=Fa|Ga,Ja=Ha|Ia,Ka=["x","y"],La=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Ma={mousedown:ya,mousemove:za,mouseup:Aa},Na="mousedown",Oa="mousemove mouseup";j(M,y,{handler:function(a){var b=Ma[a.type];b&ya&&0===a.button&&(this.pressed=!0),b&za&&1!==a.which&&(b=Aa),this.pressed&&this.allow&&(b&Aa&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:va,srcEvent:a}))}});var Pa={pointerdown:ya,pointermove:za,pointerup:Aa,pointercancel:Ba,pointerout:Ba},Qa={2:ta,3:ua,4:va,5:wa},Ra="pointerdown",Sa="pointermove pointerup pointercancel";a.MSPointerEvent&&(Ra="MSPointerDown",Sa="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pa[d],f=Qa[a.pointerType]||a.pointerType,g=f==ta,h=s(b,a.pointerId,"pointerId");e&ya&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Aa|Ba)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Ta={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Ua="touchstart",Va="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Ta[a.type];if(b===ya&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Aa|Ba)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}});var Wa={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Xa="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wa[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==ta,e=c.pointerType==va;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Aa|Ba)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ya=v(ja.style,"touchAction"),Za=Ya!==d,$a="compute",_a="auto",ab="manipulation",bb="none",cb="pan-x",db="pan-y";T.prototype={set:function(a){a==$a&&(a=this.compute()),Za&&(this.manager.element.style[Ya]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Za){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bb),f=q(d,db),g=q(d,cb);return e||f&&c&Ha||g&&c&Ia?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var eb=1,fb=2,gb=4,hb=8,ib=hb,jb=16,kb=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hb>d&&b(!0),b(),d>=hb&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kb|eb)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ib|jb|kb)&&(this.state=eb),this.state=this.process(b),void(this.state&(fb|gb|hb|jb)&&this.tryEmit(b))):(this.reset(),void(this.state=kb))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fb|gb),e=this.attrTest(a);return d&&(c&Ba||!e)?b|jb:d||e?c&Aa?b|hb:b&fb?b|gb:fb:kb}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ja},getTouchAction:function(){var a=this.options.direction,b=[];return a&Ha&&b.push(db),a&Ia&&b.push(cb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Ha?(e=0===f?Ca:0>f?Da:Ea,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ca:0>g?Fa:Ga,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fb||!(this.state&fb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(aa,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_a]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Aa|Ba)&&!f)this.reset();else if(a.eventType&ya)this.reset(),this._timer=e(function(){this.state=ib,this.tryEmit()},b.time,this);else if(a.eventType&Aa)return ib;return kb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ib&&(a&&a.eventType&Aa?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=na(),this.manager.emit(this.options.event,this._input)))}}),j(ba,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fb)}}),j(ca,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Ha|Ia,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Ha|Ia)?b=a.velocity:c&Ha?b=a.velocityX:c&Ia&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&ma(b)>this.options.velocity&&a.eventType&Aa},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(da,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ab]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&ya&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Aa)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ib,this.tryEmit()},b.interval,this),fb):ib}return kb},failTimeout:function(){return this._timer=e(function(){this.state=kb},this.options.interval,this),kb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ib&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ea.VERSION="2.0.4",ea.defaults={domEvents:!1,touchAction:$a,enable:!0,inputTarget:null,inputClass:null,preset:[[ba,{enable:!1}],[_,{enable:!1},["rotate"]],[ca,{direction:Ha}],[$,{direction:Ha},["swipe"]],[da],[da,{event:"doubletap",taps:2},["tap"]],[aa]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lb=1,mb=2;fa.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mb:lb},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ib)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fb|gb|hb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&ha(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ga(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(ea,{INPUT_START:ya,INPUT_MOVE:za,INPUT_END:Aa,INPUT_CANCEL:Ba,STATE_POSSIBLE:eb,STATE_BEGAN:fb,STATE_CHANGED:gb,STATE_ENDED:hb,STATE_RECOGNIZED:ib,STATE_CANCELLED:jb,STATE_FAILED:kb,DIRECTION_NONE:Ca,DIRECTION_LEFT:Da,DIRECTION_RIGHT:Ea,DIRECTION_UP:Fa,DIRECTION_DOWN:Ga,DIRECTION_HORIZONTAL:Ha,DIRECTION_VERTICAL:Ia,DIRECTION_ALL:Ja,Manager:fa,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:da,Pan:$,Swipe:ca,Pinch:_,Rotate:ba,Press:aa,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==ka&&define.amd?define(function(){return ea}):"undefined"!=typeof module&&module.exports?module.exports=ea:a[c]=ea}(window,document,"Hammer"),function(a){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],a):"object"==typeof exports?a(require("jquery"),require("hammerjs")):a(jQuery,Hammer)}(function(a,b){function c(c,d){var e=a(c);e.data("hammer")||e.data("hammer",new b(e[0],d))}a.fn.hammer=function(a){return this.each(function(){c(this,a)})},b.Manager.prototype.emit=function(b){return function(c,d){b.call(this,c,d),a(this.element).trigger({type:c,gesture:d})}}(b.Manager.prototype.emit)}),function(a){a.Package?Materialize={}:a.Materialize={}}(window),Materialize.guid=function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}}(),Materialize.elementOrParentIsFixed=function(a){var b=$(a),c=b.add(b.parents()),d=!1;return c.each(function(){return"fixed"===$(this).css("position")?(d=!0,!1):void 0}),d};var Vel;Vel=$?$.Velocity:jQuery?jQuery.Velocity:Velocity,function(a){a.fn.collapsible=function(b){var c={accordion:void 0};return b=a.extend(c,b),this.each(function(){function c(b){h=g.find("> li > .collapsible-header"),b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}),h.not(b).removeClass("active").parent().removeClass("active"),h.not(b).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}})}function d(b){b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}})}function e(a){var b=f(a);return b.length>0}function f(a){return a.closest("li > .collapsible-header")}var g=a(this),h=a(this).find("> li > .collapsible-header"),i=g.data("collapsible");g.off("click.collapse","> li > .collapsible-header"),h.off("click.collapse"),g.on("click.collapse","> li > .collapsible-header",function(g){var h=a(this),j=a(g.target);e(j)&&(j=f(j)),j.toggleClass("active"),b.accordion||"accordion"===i||void 0===i?c(j):(d(j),h.hasClass("active")&&d(h))});var h=g.find("> li > .collapsible-header");b.accordion||"accordion"===i||void 0===i?c(h.filter(".active").first()):h.filter(".active").each(function(){d(a(this))})})},a(document).ready(function(){a(".collapsible").collapsible()})}(jQuery),function(a){a.fn.scrollTo=function(b){return a(this).scrollTop(a(this).scrollTop()-a(this).offset().top+a(b).offset().top),this},a.fn.dropdown=function(b){var c={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left"};this.each(function(){function d(){void 0!==g.data("induration")&&(h.inDuration=g.data("inDuration")),void 0!==g.data("outduration")&&(h.outDuration=g.data("outDuration")),void 0!==g.data("constrainwidth")&&(h.constrain_width=g.data("constrainwidth")),void 0!==g.data("hover")&&(h.hover=g.data("hover")),void 0!==g.data("gutter")&&(h.gutter=g.data("gutter")),void 0!==g.data("beloworigin")&&(h.belowOrigin=g.data("beloworigin")),void 0!==g.data("alignment")&&(h.alignment=g.data("alignment"))}function e(b){"focus"===b&&(i=!0),d(),j.addClass("active"),g.addClass("active"),h.constrain_width===!0?j.css("width",g.outerWidth()):j.css("white-space","nowrap");var c,e=window.innerHeight,f=g.innerHeight(),k=g.offset().left,l=g.offset().top-a(window).scrollTop(),m=h.alignment,n=0;if(h.belowOrigin===!0&&(n=f),k+j.innerWidth()>a(window).width()?m="right":k-j.innerWidth()+g.innerWidth()<0&&(m="left"),l+j.innerHeight()>e)if(l+f-j.innerHeight()<0){var o=e-l-n;j.css("max-height",o)}else n||(n+=f),n-=j.innerHeight();if("left"===m)c=h.gutter,leftPosition=g.position().left+c;else if("right"===m){var p=g.position().left+g.outerWidth()-j.outerWidth();c=-h.gutter,leftPosition=p+c}j.css({position:"absolute",top:g.position().top+n,left:leftPosition}),j.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:h.inDuration,easing:"easeOutCubic",complete:function(){a(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:h.inDuration,easing:"easeOutSine"})}function f(){i=!1,j.fadeOut(h.outDuration),j.removeClass("active"),g.removeClass("active"),setTimeout(function(){j.css("max-height","")},h.outDuration)}var g=a(this),h=a.extend({},c,b),i=!1,j=a("#"+g.attr("data-activates"));if(d(),g.after(j),h.hover){var k=!1;g.unbind("click."+g.attr("id")),g.on("mouseenter",function(a){k===!1&&(e(),k=!0)}),g.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-content").is(j)||(j.stop(!0,!0),f(),k=!1)}),j.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-button").is(g)||(j.stop(!0,!0),f(),k=!1)})}else g.unbind("click."+g.attr("id")),g.bind("click."+g.attr("id"),function(b){i||(g[0]!=b.currentTarget||g.hasClass("active")||0!==a(b.target).closest(".dropdown-content").length?g.hasClass("active")&&(f(),a(document).unbind("click."+j.attr("id")+" touchstart."+j.attr("id"))):(b.preventDefault(),e("click")),j.hasClass("active")&&a(document).bind("click."+j.attr("id")+" touchstart."+j.attr("id"),function(b){j.is(b.target)||g.is(b.target)||g.find(b.target).length||(f(),a(document).unbind("click."+j.attr("id")+" touchstart."+j.attr("id")))}))});g.on("open",function(a,b){e(b)}),g.on("close",f)})},a(document).ready(function(){a(".dropdown-button").dropdown()})}(jQuery),function(a){var b=0,c=0,d=function(){return c++,"materialize-lean-overlay-"+c};a.fn.extend({openModal:function(c){a("body").css("overflow","hidden");var e={opacity:.5,in_duration:350,out_duration:250,ready:void 0,complete:void 0,dismissible:!0,starting_top:"4%"},f=d(),g=a(this),h=a('<div class="lean-overlay"></div>'),i=++b;h.attr("id",f).css("z-index",1e3+2*i),g.data("overlay-id",f).css("z-index",1e3+2*i+1),a("body").append(h),c=a.extend(e,c),c.dismissible&&(h.click(function(){g.closeModal(c)}),a(document).on("keyup.leanModal"+f,function(a){27===a.keyCode&&g.closeModal(c)})),g.find(".modal-close").on("click.close",function(a){g.closeModal(c)}),h.css({display:"block",opacity:0}),g.css({display:"block",opacity:0}),h.velocity({opacity:c.opacity},{duration:c.in_duration,queue:!1,ease:"easeOutCubic"}),g.data("associated-overlay",h[0]),g.hasClass("bottom-sheet")?g.velocity({bottom:"0",opacity:1},{duration:c.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof c.ready&&c.ready()}}):(a.Velocity.hook(g,"scaleX",.7),g.css({top:c.starting_top}),g.velocity({top:"10%",opacity:1,scaleX:"1"},{duration:c.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof c.ready&&c.ready()}}))}}),a.fn.extend({closeModal:function(c){var d={out_duration:250,complete:void 0},e=a(this),f=e.data("overlay-id"),g=a("#"+f);c=a.extend(d,c),a("body").css("overflow",""),e.find(".modal-close").off("click.close"),a(document).off("keyup.leanModal"+f),
g.velocity({opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutQuart"}),e.hasClass("bottom-sheet")?e.velocity({bottom:"-100%",opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutCubic",complete:function(){g.css({display:"none"}),"function"==typeof c.complete&&c.complete(),g.remove(),b--}}):e.velocity({top:c.starting_top,opacity:0,scaleX:.7},{duration:c.out_duration,complete:function(){a(this).css("display","none"),"function"==typeof c.complete&&c.complete(),g.remove(),b--}})}}),a.fn.extend({leanModal:function(b){return this.each(function(){var c={starting_top:"4%"},d=a.extend(c,b);a(this).click(function(b){d.starting_top=(a(this).offset().top-a(window).scrollTop())/1.15;var c=a(this).attr("href")||"#"+a(this).data("target");a(c).openModal(d),b.preventDefault()})})}})}(jQuery),function(a){a.fn.materialbox=function(){return this.each(function(){function b(){f=!1;var b=i.parent(".material-placeholder"),d=(window.innerWidth,window.innerHeight,i.data("width")),g=i.data("height");i.velocity("stop",!0),a("#materialbox-overlay").velocity("stop",!0),a(".materialbox-caption").velocity("stop",!0),a("#materialbox-overlay").velocity({opacity:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function(){e=!1,a(this).remove()}}),i.velocity({width:d,height:g,left:0,top:0},{duration:h,queue:!1,easing:"easeOutQuad"}),a(".materialbox-caption").velocity({opacity:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function(){b.css({height:"",width:"",position:"",top:"",left:""}),i.css({height:"",top:"",left:"",width:"","max-width":"",position:"","z-index":""}),i.removeClass("active"),f=!0,a(this).remove(),c.css("overflow","")}})}if(!a(this).hasClass("initialized")){a(this).addClass("initialized");var c,d,e=!1,f=!0,g=275,h=200,i=a(this),j=a("<div></div>").addClass("material-placeholder");i.wrap(j),i.on("click",function(){var h=i.parent(".material-placeholder"),j=window.innerWidth,k=window.innerHeight,l=i.width(),m=i.height();if(f===!1)return b(),!1;if(e&&f===!0)return b(),!1;for(f=!1,i.addClass("active"),e=!0,h.css({width:h[0].getBoundingClientRect().width,height:h[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),c=void 0,d=h[0].parentNode;null!==d&&!a(d).is(document);){var n=a(d);"hidden"===n.css("overflow")&&(n.css("overflow","visible"),c=void 0===c?n:c.add(n)),d=d.parentNode}i.css({position:"absolute","z-index":1e3}).data("width",l).data("height",m);var o=a('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){f===!0&&b()});if(a("body").append(o),o.velocity({opacity:1},{duration:g,queue:!1,easing:"easeOutQuad"}),""!==i.data("caption")){var p=a('<div class="materialbox-caption"></div>');p.text(i.data("caption")),a("body").append(p),p.css({display:"inline"}),p.velocity({opacity:1},{duration:g,queue:!1,easing:"easeOutQuad"})}var q=0,r=l/j,s=m/k,t=0,u=0;r>s?(q=m/l,t=.9*j,u=.9*j*q):(q=l/m,t=.9*k*q,u=.9*k),i.hasClass("responsive-img")?i.velocity({"max-width":t,width:l},{duration:0,queue:!1,complete:function(){i.css({left:0,top:0}).velocity({height:u,width:t,left:a(document).scrollLeft()+j/2-i.parent(".material-placeholder").offset().left-t/2,top:a(document).scrollTop()+k/2-i.parent(".material-placeholder").offset().top-u/2},{duration:g,queue:!1,easing:"easeOutQuad",complete:function(){f=!0}})}}):i.css("left",0).css("top",0).velocity({height:u,width:t,left:a(document).scrollLeft()+j/2-i.parent(".material-placeholder").offset().left-t/2,top:a(document).scrollTop()+k/2-i.parent(".material-placeholder").offset().top-u/2},{duration:g,queue:!1,easing:"easeOutQuad",complete:function(){f=!0}})}),a(window).scroll(function(){e&&b()}),a(document).keyup(function(a){27===a.keyCode&&f===!0&&e&&b()})}})},a(document).ready(function(){a(".materialboxed").materialbox()})}(jQuery),function(a){a.fn.parallax=function(){var b=a(window).width();return this.each(function(c){function d(c){var d;d=601>b?e.height()>0?e.height():e.children("img").height():e.height()>0?e.height():500;var f=e.children("img").first(),g=f.height(),h=g-d,i=e.offset().top+d,j=e.offset().top,k=a(window).scrollTop(),l=window.innerHeight,m=k+l,n=(m-j)/(d+l),o=Math.round(h*n);c&&f.css("display","block"),i>k&&k+l>j&&f.css("transform","translate3D(-50%,"+o+"px, 0)")}var e=a(this);e.addClass("parallax"),e.children("img").one("load",function(){d(!0)}).each(function(){this.complete&&a(this).load()}),a(window).scroll(function(){b=a(window).width(),d(!1)}),a(window).resize(function(){b=a(window).width(),d(!1)})})}}(jQuery),function(a){var b={init:function(){return this.each(function(){var b=a(this);a(window).width(),b.width("100%");var c,d,e=b.find("li.tab a"),f=b.width(),g=b.find("li").first().outerWidth(),h=0;c=a(e.filter('[href="'+location.hash+'"]')),0===c.length&&(c=a(this).find("li.tab a.active").first()),0===c.length&&(c=a(this).find("li.tab a").first()),c.addClass("active"),h=e.index(c),0>h&&(h=0),d=a(c[0].hash),b.append('<div class="indicator"></div>');var i=b.find(".indicator");b.is(":visible")&&(i.css({right:f-(h+1)*g}),i.css({left:h*g})),a(window).resize(function(){f=b.width(),g=b.find("li").first().outerWidth(),0>h&&(h=0),0!==g&&0!==f&&(i.css({right:f-(h+1)*g}),i.css({left:h*g}))}),e.not(c).each(function(){a(this.hash).hide()}),b.on("click","a",function(j){if(a(this).parent().hasClass("disabled"))return void j.preventDefault();f=b.width(),g=b.find("li").first().outerWidth(),c.removeClass("active"),d.hide(),c=a(this),d=a(this.hash),e=b.find("li.tab a"),c.addClass("active");var k=h;h=e.index(a(this)),0>h&&(h=0),d.show(),h-k>=0?(i.velocity({right:f-(h+1)*g},{duration:300,queue:!1,easing:"easeOutQuad"}),i.velocity({left:h*g},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(i.velocity({left:h*g},{duration:300,queue:!1,easing:"easeOutQuad"}),i.velocity({right:f-(h+1)*g},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})),j.preventDefault()})})},select_tab:function(a){this.find('a[href="#'+a+'"]').trigger("click")}};a.fn.tabs=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments)},a(document).ready(function(){a("ul.tabs").tabs()})}(jQuery),function(a){a.fn.tooltip=function(c){var d=5,e={delay:350};return"remove"===c?(this.each(function(){a("#"+a(this).attr("data-tooltip-id")).remove(),a(this).off("mouseenter.tooltip mouseleave.tooltip")}),!1):(c=a.extend(e,c),this.each(function(){var e=Materialize.guid(),f=a(this);f.attr("data-tooltip-id",e);var g=a("<span></span>").text(f.attr("data-tooltip")),h=a("<div></div>");h.addClass("material-tooltip").append(g).appendTo(a("body")).attr("id",e);var i=a("<div></div>").addClass("backdrop");i.appendTo(h),i.css({top:0,left:0}),f.off("mouseenter.tooltip mouseleave.tooltip");var j,k=!1;f.on({"mouseenter.tooltip":function(a){var e=f.attr("data-delay");e=void 0===e||""===e?c.delay:e,j=setTimeout(function(){k=!0,h.velocity("stop"),i.velocity("stop"),h.css({display:"block",left:"0px",top:"0px"}),h.children("span").text(f.attr("data-tooltip"));var a,c,e,g=f.outerWidth(),j=f.outerHeight(),l=f.attr("data-position"),m=h.outerHeight(),n=h.outerWidth(),o="0px",p="0px",q=8;"top"===l?(a=f.offset().top-m-d,c=f.offset().left+g/2-n/2,e=b(c,a,n,m),o="-10px",i.css({borderRadius:"14px 14px 0 0",transformOrigin:"50% 90%",marginTop:m,marginLeft:n/2-i.width()/2})):"left"===l?(a=f.offset().top+j/2-m/2,c=f.offset().left-n-d,e=b(c,a,n,m),p="-10px",i.css({width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:m/2,marginLeft:n})):"right"===l?(a=f.offset().top+j/2-m/2,c=f.offset().left+g+d,e=b(c,a,n,m),p="+10px",i.css({width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:m/2,marginLeft:"0px"})):(a=f.offset().top+f.outerHeight()+d,c=f.offset().left+g/2-n/2,e=b(c,a,n,m),o="+10px",i.css({marginLeft:n/2-i.width()/2})),h.css({top:e.y,left:e.x}),q=n/8,8>q&&(q=8),("right"===l||"left"===l)&&(q=n/10,6>q&&(q=6)),h.velocity({marginTop:o,marginLeft:p},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),i.css({display:"block"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scale:q},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})},e)},"mouseleave.tooltip":function(){k=!1,clearTimeout(j),setTimeout(function(){1!=k&&(h.velocity({opacity:0,marginTop:0,marginLeft:0},{duration:225,queue:!1}),i.velocity({opacity:0,scale:1},{duration:225,queue:!1,complete:function(){i.css("display","none"),h.css("display","none"),k=!1}}))},225)}})}))};var b=function(b,c,d,e){var f=b,g=c;return 0>f?f=4:f+d>window.innerWidth&&(f-=f+d-window.innerWidth),0>g?g=4:g+e>window.innerHeight+a(window).scrollTop&&(g-=g+e-window.innerHeight),{x:f,y:g}};a(document).ready(function(){a(".tooltipped").tooltip()})}(jQuery),function(a){"use strict";function b(a){return null!==a&&a===a.window}function c(a){return b(a)?a:9===a.nodeType&&a.defaultView}function d(a){var b,d,e={top:0,left:0},f=a&&a.ownerDocument;return b=f.documentElement,"undefined"!=typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect()),d=c(f),{top:e.top+d.pageYOffset-b.clientTop,left:e.left+d.pageXOffset-b.clientLeft}}function e(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}function f(a){if(k.allowEvent(a)===!1)return null;for(var b=null,c=a.target||a.srcElement;null!==c.parentElement;){if(!(c instanceof SVGElement||-1===c.className.indexOf("waves-effect"))){b=c;break}if(c.classList.contains("waves-effect")){b=c;break}c=c.parentElement}return b}function g(b){var c=f(b);null!==c&&(j.show(b,c),"ontouchstart"in a&&(c.addEventListener("touchend",j.hide,!1),c.addEventListener("touchcancel",j.hide,!1)),c.addEventListener("mouseup",j.hide,!1),c.addEventListener("mouseleave",j.hide,!1))}var h=h||{},i=document.querySelectorAll.bind(document),j={duration:750,show:function(a,b){if(2===a.button)return!1;var c=b||this,f=document.createElement("div");f.className="waves-ripple",c.appendChild(f);var g=d(c),h=a.pageY-g.top,i=a.pageX-g.left,k="scale("+c.clientWidth/100*10+")";"touches"in a&&(h=a.touches[0].pageY-g.top,i=a.touches[0].pageX-g.left),f.setAttribute("data-hold",Date.now()),f.setAttribute("data-scale",k),f.setAttribute("data-x",i),f.setAttribute("data-y",h);var l={top:h+"px",left:i+"px"};f.className=f.className+" waves-notransition",f.setAttribute("style",e(l)),f.className=f.className.replace("waves-notransition",""),l["-webkit-transform"]=k,l["-moz-transform"]=k,l["-ms-transform"]=k,l["-o-transform"]=k,l.transform=k,l.opacity="1",l["-webkit-transition-duration"]=j.duration+"ms",l["-moz-transition-duration"]=j.duration+"ms",l["-o-transition-duration"]=j.duration+"ms",l["transition-duration"]=j.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f.setAttribute("style",e(l))},hide:function(a){k.touchup(a);var b=this,c=(1.4*b.clientWidth,null),d=b.getElementsByClassName("waves-ripple");if(!(d.length>0))return!1;c=d[d.length-1];var f=c.getAttribute("data-x"),g=c.getAttribute("data-y"),h=c.getAttribute("data-scale"),i=Date.now()-Number(c.getAttribute("data-hold")),l=350-i;0>l&&(l=0),setTimeout(function(){var a={top:g+"px",left:f+"px",opacity:"0","-webkit-transition-duration":j.duration+"ms","-moz-transition-duration":j.duration+"ms","-o-transition-duration":j.duration+"ms","transition-duration":j.duration+"ms","-webkit-transform":h,"-moz-transform":h,"-ms-transform":h,"-o-transform":h,transform:h};c.setAttribute("style",e(a)),setTimeout(function(){try{b.removeChild(c)}catch(a){return!1}},j.duration)},l)},wrapInput:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("input"===c.tagName.toLowerCase()){var d=c.parentNode;if("i"===d.tagName.toLowerCase()&&-1!==d.className.indexOf("waves-effect"))continue;var e=document.createElement("i");e.className=c.className+" waves-input-wrapper";var f=c.getAttribute("style");f||(f=""),e.setAttribute("style",f),c.className="waves-button-input",c.removeAttribute("style"),d.replaceChild(e,c),e.appendChild(c)}}}},k={touches:0,allowEvent:function(a){var b=!0;return"touchstart"===a.type?k.touches+=1:"touchend"===a.type||"touchcancel"===a.type?setTimeout(function(){k.touches>0&&(k.touches-=1)},500):"mousedown"===a.type&&k.touches>0&&(b=!1),b},touchup:function(a){k.allowEvent(a)}};h.displayEffect=function(b){b=b||{},"duration"in b&&(j.duration=b.duration),j.wrapInput(i(".waves-effect")),"ontouchstart"in a&&document.body.addEventListener("touchstart",g,!1),document.body.addEventListener("mousedown",g,!1)},h.attach=function(b){"input"===b.tagName.toLowerCase()&&(j.wrapInput([b]),b=b.parentElement),"ontouchstart"in a&&b.addEventListener("touchstart",g,!1),b.addEventListener("mousedown",g,!1)},a.Waves=h,document.addEventListener("DOMContentLoaded",function(){h.displayEffect()},!1)}(window),Materialize.toast=function(a,b,c,d){function e(a){var b=document.createElement("div");if(b.classList.add("toast"),c)for(var e=c.split(" "),f=0,g=e.length;g>f;f++)b.classList.add(e[f]);("object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName)?b.appendChild(a):a instanceof jQuery?b.appendChild(a[0]):b.innerHTML=a;var h=new Hammer(b,{prevent_default:!1});return h.on("pan",function(a){var c=a.deltaX,d=80;b.classList.contains("panning")||b.classList.add("panning");var e=1-Math.abs(c/d);0>e&&(e=0),Vel(b,{left:c,opacity:e},{duration:50,queue:!1,easing:"easeOutQuad"})}),h.on("panend",function(a){var c=a.deltaX,e=80;Math.abs(c)>e?Vel(b,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),b.parentNode.removeChild(b)}}):(b.classList.remove("panning"),Vel(b,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}))}),b}c=c||"";var f=document.getElementById("toast-container");null===f&&(f=document.createElement("div"),f.id="toast-container",document.body.appendChild(f));var g=e(a);a&&f.appendChild(g),g.style.top="35px",g.style.opacity=0,Vel(g,{top:"0px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var h=b,i=setInterval(function(){null===g.parentNode&&window.clearInterval(i),g.classList.contains("panning")||(h-=20),0>=h&&(Vel(g,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),this[0].parentNode.removeChild(this[0])}}),window.clearInterval(i))},20)},function(a){var b={init:function(b){var c={menuWidth:240,edge:"left",closeOnClick:!1};b=a.extend(c,b),a(this).each(function(){function c(c){g=!1,h=!1,a("body").css("overflow",""),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),"left"===b.edge?(f.css({width:"",right:"",left:"0"}),e.velocity({left:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth))}})):(f.css({width:"",right:"0",left:""}),e.velocity({right:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth))}}))}var d=a(this),e=a("#"+d.attr("data-activates"));240!=b.menuWidth&&e.css("width",b.menuWidth);var f=a('<div class="drag-target"></div>');a("body").append(f),"left"==b.edge?(e.css("left",-1*(b.menuWidth+10)),f.css({left:0})):(e.addClass("right-aligned").css("right",-1*(b.menuWidth+10)).css("left",""),f.css({right:0})),e.hasClass("fixed")&&window.innerWidth>992&&e.css("left",0),e.hasClass("fixed")&&a(window).resize(function(){window.innerWidth>992?0!==a("#sidenav-overlay").css("opacity")&&h?c(!0):(e.removeAttr("style"),e.css("width",b.menuWidth)):h===!1&&("left"===b.edge?e.css("left",-1*(b.menuWidth+10)):e.css("right",-1*(b.menuWidth+10)))}),b.closeOnClick===!0&&e.on("click.itemclick","a:not(.collapsible-header)",function(){c()});var g=!1,h=!1;f.on("click",function(){c()}),f.hammer({prevent_default:!1}).bind("pan",function(d){if("touch"==d.gesture.pointerType){var f=(d.gesture.direction,d.gesture.center.x);if(d.gesture.center.y,d.gesture.velocityX,a("body").css("overflow","hidden"),0===a("#sidenav-overlay").length){var g=a('<div id="sidenav-overlay"></div>');g.css("opacity",0).click(function(){c()}),a("body").append(g)}if("left"===b.edge&&(f>b.menuWidth?f=b.menuWidth:0>f&&(f=0)),"left"===b.edge)f<b.menuWidth/2?h=!1:f>=b.menuWidth/2&&(h=!0),e.css("left",f-b.menuWidth);else{f<window.innerWidth-b.menuWidth/2?h=!0:f>=window.innerWidth-b.menuWidth/2&&(h=!1);var i=-1*(f-b.menuWidth/2);i>0&&(i=0),e.css("right",i)}var j;"left"===b.edge?(j=f/b.menuWidth,a("#sidenav-overlay").velocity({opacity:j},{duration:50,queue:!1,easing:"easeOutQuad"})):(j=Math.abs((f-window.innerWidth)/b.menuWidth),a("#sidenav-overlay").velocity({opacity:j},{duration:50,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(c){if("touch"==c.gesture.pointerType){var d=c.gesture.velocityX;g=!1,"left"===b.edge?h&&.3>=d||-.5>d?(e.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:0,left:""})):(!h||d>.3)&&(a("body").css("overflow",""),e.velocity({left:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),f.css({width:"10px",right:"",left:0})):h&&d>=-.3||d>.5?(e.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:"",left:0})):(!h||-.3>d)&&(a("body").css("overflow",""),e.velocity({right:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),f.css({width:"10px",right:0,left:""}))}}),d.click(function(){if(h===!0)h=!1,g=!1,c();else{a("body").css("overflow","hidden"),a("body").append(f),"left"===b.edge?(f.css({width:"50%",right:0,left:""}),e.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"})):(f.css({width:"50%",right:"",left:0}),e.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),e.css("left",""));var d=a('<div id="sidenav-overlay"></div>');d.css("opacity",0).click(function(){h=!1,g=!1,c(),d.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}})}),a("body").append(d),d.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){h=!0,g=!1}})}return!1})})},show:function(){this.trigger("click")},hide:function(){a("#sidenav-overlay").trigger("click")}};a.fn.sideNav=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.sideNav"):b.init.apply(this,arguments)}}(jQuery),function(a){function b(b,c,d,e){var f=a();return a.each(g,function(a,g){if(g.height()>0){var h=g.offset().top,i=g.offset().left,j=i+g.width(),k=h+g.height(),l=!(i>c||e>j||h>d||b>k);l&&f.push(g)}}),f}function c(){++j;var c=f.scrollTop(),d=f.scrollLeft(),e=d+f.width(),g=c+f.height(),i=b(c+k.top+200,e+k.right,g+k.bottom,d+k.left);a.each(i,function(a,b){var c=b.data("scrollSpy:ticks");"number"!=typeof c&&b.triggerHandler("scrollSpy:enter"),b.data("scrollSpy:ticks",j)}),a.each(h,function(a,b){var c=b.data("scrollSpy:ticks");"number"==typeof c&&c!==j&&(b.triggerHandler("scrollSpy:exit"),b.data("scrollSpy:ticks",null))}),h=i}function d(){f.trigger("scrollSpy:winSize")}function e(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:l(),g=null,f=a.apply(d,e),d=e=null};return function(){var j=l();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f}}var f=a(window),g=[],h=[],i=!1,j=0,k={top:0,right:0,bottom:0,left:0},l=Date.now||function(){return(new Date).getTime()};a.scrollSpy=function(b,d){var h=[];b=a(b),b.each(function(b,c){g.push(a(c)),a(c).data("scrollSpy:id",b),a("a[href=#"+a(c).attr("id")+"]").click(function(b){b.preventDefault();var c=a(this.hash).offset().top+1;a("html, body").animate({scrollTop:c-200},{duration:400,queue:!1,easing:"easeOutCubic"})})}),d=d||{throttle:100},k.top=d.offsetTop||0,k.right=d.offsetRight||0,k.bottom=d.offsetBottom||0,k.left=d.offsetLeft||0;var j=e(c,d.throttle||100),l=function(){a(document).ready(j)};return i||(f.on("scroll",l),f.on("resize",l),i=!0),setTimeout(l,0),b.on("scrollSpy:enter",function(){h=a.grep(h,function(a){return 0!=a.height()});var b=a(this);h[0]?(a("a[href=#"+h[0].attr("id")+"]").removeClass("active"),b.data("scrollSpy:id")<h[0].data("scrollSpy:id")?h.unshift(a(this)):h.push(a(this))):h.push(a(this)),a("a[href=#"+h[0].attr("id")+"]").addClass("active")}),b.on("scrollSpy:exit",function(){if(h=a.grep(h,function(a){return 0!=a.height()}),h[0]){a("a[href=#"+h[0].attr("id")+"]").removeClass("active");var b=a(this);h=a.grep(h,function(a){return a.attr("id")!=b.attr("id")}),h[0]&&a("a[href=#"+h[0].attr("id")+"]").addClass("active")}}),b},a.winSizeSpy=function(b){return a.winSizeSpy=function(){return f},b=b||{throttle:100},f.on("resize",e(d,b.throttle||100))},a.fn.scrollSpy=function(b){return a.scrollSpy(a(this),b)}}(jQuery),function(a){a(document).ready(function(){function b(b){var c=b.css("font-family"),e=b.css("font-size");e&&d.css("font-size",e),c&&d.css("font-family",c),"off"===b.attr("wrap")&&d.css("overflow-wrap","normal").css("white-space","pre"),d.text(b.val()+"\n");var f=d.html().replace(/\n/g,"<br>");d.html(f),b.is(":visible")?d.css("width",b.width()):d.css("width",a(window).width()/2),b.css("height",d.height())}Materialize.updateTextFields=function(){var b="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(b).each(function(b,c){a(c).val().length>0||c.autofocus||void 0!==a(this).attr("placeholder")||a(c)[0].validity.badInput===!0?a(this).siblings("label, i").addClass("active"):a(this).siblings("label, i").removeClass("active")})};var c="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(document).on("change",c,function(){(0!==a(this).val().length||void 0!==a(this).attr("placeholder"))&&a(this).siblings("label").addClass("active"),validate_field(a(this))}),a(document).ready(function(){Materialize.updateTextFields()}),a(document).on("reset",function(b){var d=a(b.target);d.is("form")&&(d.find(c).removeClass("valid").removeClass("invalid"),d.find(c).each(function(){""===a(this).attr("value")&&a(this).siblings("label, i").removeClass("active")}),d.find("select.initialized").each(function(){var a=d.find("option[selected]").text();d.siblings("input.select-dropdown").val(a)}))}),a(document).on("focus",c,function(){a(this).siblings("label, i").addClass("active")}),a(document).on("blur",c,function(){var b=a(this);0===b.val().length&&b[0].validity.badInput!==!0&&void 0===b.attr("placeholder")&&b.siblings("label, i").removeClass("active"),0===b.val().length&&b[0].validity.badInput!==!0&&void 0!==b.attr("placeholder")&&b.siblings("i").removeClass("active"),validate_field(b)}),window.validate_field=function(a){var b=void 0!==a.attr("length"),c=parseInt(a.attr("length")),d=a.val().length;0===a.val().length&&a[0].validity.badInput===!1?a.hasClass("validate")&&(a.removeClass("valid"),a.removeClass("invalid")):a.hasClass("validate")&&(a.is(":valid")&&b&&c>=d||a.is(":valid")&&!b?(a.removeClass("invalid"),a.addClass("valid")):(a.removeClass("valid"),a.addClass("invalid")))};var d=a(".hiddendiv").first();d.length||(d=a('<div class="hiddendiv common"></div>'),a("body").append(d));var e=".materialize-textarea";a(e).each(function(){var c=a(this);c.val().length&&b(c)}),a("body").on("keyup keydown autoresize",e,function(){b(a(this))}),a(document).on("change",'.file-field input[type="file"]',function(){for(var b=a(this).closest(".file-field"),c=b.find("input.file-path"),d=a(this)[0].files,e=[],f=0;f<d.length;f++)e.push(d[f].name);c.val(e.join(", ")),c.trigger("change")});var f,g="input[type=range]",h=!1;a(g).each(function(){var b=a('<span class="thumb"><span class="value"></span></span>');a(this).after(b)});var i=".range-field";a(document).on("change",g,function(b){var c=a(this).siblings(".thumb");c.find(".value").html(a(this).val())}),a(document).on("input mousedown touchstart",g,function(b){var c=a(this).siblings(".thumb"),d=a(this).outerWidth();c.length<=0&&(c=a('<span class="thumb"><span class="value"></span></span>'),a(this).after(c)),c.find(".value").html(a(this).val()),h=!0,a(this).addClass("active"),c.hasClass("active")||c.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),"input"!==b.type&&(f=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left,0>f?f=0:f>d&&(f=d),c.addClass("active").css("left",f)),c.find(".value").html(a(this).val())}),a(document).on("mouseup touchend",i,function(){h=!1,a(this).removeClass("active")}),a(document).on("mousemove touchmove",i,function(b){var c,d=a(this).children(".thumb");if(h){d.hasClass("active")||d.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),c=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left;var e=a(this).outerWidth();0>c?c=0:c>e&&(c=e),d.addClass("active").css("left",c),d.find(".value").html(d.siblings(g).val())}}),a(document).on("mouseout touchleave",i,function(){if(!h){var b=a(this).children(".thumb");b.hasClass("active")&&b.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),b.removeClass("active")}})}),a.fn.material_select=function(b){function c(a,b,c){var e=a.indexOf(b),f=-1===e;return f?a.push(b):a.splice(e,1),c.siblings("ul.dropdown-content").find("li").eq(b).toggleClass("active"),c.find("option").eq(b).prop("selected",f),d(a,c),f}function d(a,b){for(var c="",d=0,e=a.length;e>d;d++){var f=b.find("option").eq(a[d]).text();c+=0===d?f:", "+f}""===c&&(c=b.find("option:disabled").eq(0).text()),b.siblings("input.select-dropdown").val(c)}a(this).each(function(){var d=a(this);if(!d.hasClass("browser-default")){var e=!!d.attr("multiple"),f=d.data("select-id");if(f&&(d.parent().find("span.caret").remove(),d.parent().find("input").remove(),d.unwrap(),a("ul#select-options-"+f).remove()),"destroy"===b)return void d.data("select-id",null).removeClass("initialized");var g=Materialize.guid();d.data("select-id",g);var h=a('<div class="select-wrapper"></div>');h.addClass(d.attr("class"));var i=a('<ul id="select-options-'+g+'" class="dropdown-content select-dropdown '+(e?"multiple-select-dropdown":"")+'"></ul>'),j=d.children("option, optgroup"),k=[],l=!1,m=d.find("option:selected").html()||d.find("option:first").html()||"",n=function(b,c,d){var e=c.is(":disabled")?"disabled ":"",f=c.data("icon"),g=c.attr("class");if(f){var h="";return g&&(h=' class="'+g+'"'),"multiple"===d?i.append(a('<li class="'+e+'"><img src="'+f+'"'+h+'><span><input type="checkbox"'+e+"/><label></label>"+c.html()+"</span></li>")):i.append(a('<li class="'+e+'"><img src="'+f+'"'+h+"><span>"+c.html()+"</span></li>")),!0}"multiple"===d?i.append(a('<li class="'+e+'"><span><input type="checkbox"'+e+"/><label></label>"+c.html()+"</span></li>")):i.append(a('<li class="'+e+'"><span>'+c.html()+"</span></li>"))};j.length&&j.each(function(){if(a(this).is("option"))e?n(d,a(this),"multiple"):n(d,a(this));else if(a(this).is("optgroup")){var b=a(this).children("option");i.append(a('<li class="optgroup"><span>'+a(this).attr("label")+"</span></li>")),b.each(function(){n(d,a(this))})}}),i.find("li:not(.optgroup)").each(function(f){a(this).click(function(g){if(!a(this).hasClass("disabled")&&!a(this).hasClass("optgroup")){var h=!0;e?(a('input[type="checkbox"]',this).prop("checked",function(a,b){return!b}),h=c(k,a(this).index(),d),q.trigger("focus")):(i.find("li").removeClass("active"),a(this).toggleClass("active"),q.val(a(this).text())),activateOption(i,a(this)),d.find("option").eq(f).prop("selected",h),d.trigger("change"),"undefined"!=typeof b&&b()}g.stopPropagation()})}),d.wrap(h);var o=a('<span class="caret">&#9660;</span>');d.is(":disabled")&&o.addClass("disabled");var p=m.replace(/"/g,"&quot;"),q=a('<input type="text" class="select-dropdown" readonly="true" '+(d.is(":disabled")?"disabled":"")+' data-activates="select-options-'+g+'" value="'+p+'"/>');d.before(q),q.before(o),q.after(i),d.is(":disabled")||q.dropdown({hover:!1,closeOnClick:!1}),d.attr("tabindex")&&a(q[0]).attr("tabindex",d.attr("tabindex")),d.addClass("initialized"),q.on({focus:function(){if(a("ul.select-dropdown").not(i[0]).is(":visible")&&a("input.select-dropdown").trigger("close"),!i.is(":visible")){a(this).trigger("open",["focus"]);var b=a(this).val(),c=i.find("li").filter(function(){return a(this).text().toLowerCase()===b.toLowerCase()})[0];activateOption(i,c)}},click:function(a){a.stopPropagation()}}),q.on("blur",function(){e||a(this).trigger("close"),i.find("li.selected").removeClass("selected")}),i.hover(function(){l=!0},function(){l=!1}),a(window).on({click:function(){e&&(l||q.trigger("close"))}}),e&&d.find("option:selected:not(:disabled)").each(function(){var b=a(this).index();c(k,b,d),i.find("li").eq(b).find(":checkbox").prop("checked",!0)}),activateOption=function(b,c){if(c){b.find("li.selected").removeClass("selected");var d=a(c);d.addClass("selected"),i.scrollTo(d)}};var r=[],s=function(b){if(9==b.which)return void q.trigger("close");if(40==b.which&&!i.is(":visible"))return void q.trigger("open");if(13!=b.which||i.is(":visible")){b.preventDefault();var c=String.fromCharCode(b.which).toLowerCase(),d=[9,13,27,38,40];if(c&&-1===d.indexOf(b.which)){r.push(c);var f=r.join(""),g=i.find("li").filter(function(){return 0===a(this).text().toLowerCase().indexOf(f)})[0];g&&activateOption(i,g)}if(13==b.which){var h=i.find("li.selected:not(.disabled)")[0];h&&(a(h).trigger("click"),e||q.trigger("close"))}40==b.which&&(g=i.find("li.selected").length?i.find("li.selected").next("li:not(.disabled)")[0]:i.find("li:not(.disabled)")[0],activateOption(i,g)),27==b.which&&q.trigger("close"),38==b.which&&(g=i.find("li.selected").prev("li:not(.disabled)")[0],g&&activateOption(i,g)),setTimeout(function(){r=[]},1e3)}};q.on("keydown",s)}})}}(jQuery),function(a){var b={init:function(b){var c={indicators:!0,height:400,transition:500,interval:6e3};return b=a.extend(c,b),this.each(function(){function c(a,b){a.hasClass("center-align")?a.velocity({opacity:0,translateY:-100},{duration:b,queue:!1}):a.hasClass("right-align")?a.velocity({opacity:0,translateX:100},{duration:b,queue:!1}):a.hasClass("left-align")&&a.velocity({opacity:0,translateX:-100},{duration:b,queue:!1})}function d(a){a>=j.length?a=0:0>a&&(a=j.length-1),k=i.find(".active").index(),k!=a&&(e=j.eq(k),$caption=e.find(".caption"),e.removeClass("active"),e.velocity({opacity:0},{duration:b.transition,queue:!1,easing:"easeOutQuad",complete:function(){j.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),c($caption,b.transition),b.indicators&&f.eq(k).removeClass("active"),j.eq(a).velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),j.eq(a).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,delay:b.transition,queue:!1,easing:"easeOutQuad"}),j.eq(a).addClass("active"),b.indicators&&f.eq(a).addClass("active"))}var e,f,g,h=a(this),i=h.find("ul.slides").first(),j=i.find("li"),k=i.find(".active").index();-1!=k&&(e=j.eq(k)),h.hasClass("fullscreen")||(b.indicators?h.height(b.height+40):h.height(b.height),
i.height(b.height)),j.find(".caption").each(function(){c(a(this),0)}),j.find("img").each(function(){var b="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";a(this).attr("src")!==b&&(a(this).css("background-image","url("+a(this).attr("src")+")"),a(this).attr("src",b))}),b.indicators&&(f=a('<ul class="indicators"></ul>'),j.each(function(c){var e=a('<li class="indicator-item"></li>');e.click(function(){var c=i.parent(),e=c.find(a(this)).index();d(e),clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval)}),f.append(e)}),h.append(f),f=h.find("ul.indicators").find("li.indicator-item")),e?e.show():(j.first().addClass("active").velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),k=0,e=j.eq(k),b.indicators&&f.eq(k).addClass("active")),e.find("img").each(function(){e.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,queue:!1,easing:"easeOutQuad"})}),g=setInterval(function(){k=i.find(".active").index(),d(k+1)},b.transition+b.interval);var l=!1,m=!1,n=!1;h.hammer({prevent_default:!1}).bind("pan",function(a){if("touch"===a.gesture.pointerType){clearInterval(g);var b=a.gesture.direction,c=a.gesture.deltaX,d=a.gesture.velocityX;$curr_slide=i.find(".active"),$curr_slide.velocity({translateX:c},{duration:50,queue:!1,easing:"easeOutQuad"}),4===b&&(c>h.innerWidth()/2||-.65>d)?n=!0:2===b&&(c<-1*h.innerWidth()/2||d>.65)&&(m=!0);var e;m&&(e=$curr_slide.next(),0===e.length&&(e=j.first()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),n&&(e=$curr_slide.prev(),0===e.length&&(e=j.last()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(a){"touch"===a.gesture.pointerType&&($curr_slide=i.find(".active"),l=!1,curr_index=i.find(".active").index(),n||m?m?(d(curr_index+1),$curr_slide.velocity({translateX:-1*h.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):n&&(d(curr_index-1),$curr_slide.velocity({translateX:h.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}),m=!1,n=!1,clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval))}),h.on("sliderPause",function(){clearInterval(g)}),h.on("sliderStart",function(){clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval)}),h.on("sliderNext",function(){k=i.find(".active").index(),d(k+1)}),h.on("sliderPrev",function(){k=i.find(".active").index(),d(k-1)})})},pause:function(){a(this).trigger("sliderPause")},start:function(){a(this).trigger("sliderStart")},next:function(){a(this).trigger("sliderNext")},prev:function(){a(this).trigger("sliderPrev")}};a.fn.slider=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments)}}(jQuery),function(a){a(document).ready(function(){a(document).on("click.card",".card",function(b){a(this).find("> .card-reveal").length&&(a(b.target).is(a(".card-reveal .card-title"))||a(b.target).is(a(".card-reveal .card-title i"))?a(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){a(this).css({display:"none"})}}):(a(b.target).is(a(".card .activator"))||a(b.target).is(a(".card .activator i")))&&(a(b.target).closest(".card").css("overflow","hidden"),a(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"}))),a(".card-reveal").closest(".card").css("overflow","hidden")})})}(jQuery),function(a){a(document).ready(function(){a(document).on("click.chip",".chip .material-icons",function(b){a(this).parent().remove()})})}(jQuery),function(a){a(document).ready(function(){a.fn.pushpin=function(b){var c={top:0,bottom:1/0,offset:0};return b=a.extend(c,b),$index=0,this.each(function(){function c(a){a.removeClass("pin-top"),a.removeClass("pinned"),a.removeClass("pin-bottom")}function d(d,e){d.each(function(){b.top<=e&&b.bottom>=e&&!a(this).hasClass("pinned")&&(c(a(this)),a(this).css("top",b.offset),a(this).addClass("pinned")),e<b.top&&!a(this).hasClass("pin-top")&&(c(a(this)),a(this).css("top",0),a(this).addClass("pin-top")),e>b.bottom&&!a(this).hasClass("pin-bottom")&&(c(a(this)),a(this).addClass("pin-bottom"),a(this).css("top",b.bottom-g))})}var e=Materialize.guid(),f=a(this),g=a(this).offset().top;d(f,a(window).scrollTop()),a(window).on("scroll."+e,function(){var c=a(window).scrollTop()+b.offset;d(f,c)})})}})}(jQuery),function(a){a(document).ready(function(){a.fn.reverse=[].reverse,a(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(c){var d=a(this);b(d)}),a(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(b){var d=a(this);c(d)}),a(document).on("click.fixedActionBtn",".fixed-action-btn.click-to-toggle > a",function(d){var e=a(this),f=e.parent();f.hasClass("active")?c(f):b(f)})}),a.fn.extend({openFAB:function(){b(a(this))},closeFAB:function(){c(a(this))}});var b=function(b){if($this=b,$this.hasClass("active")===!1){var c,d,e=$this.hasClass("horizontal");e===!0?d=40:c=40,$this.addClass("active"),$this.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:c+"px",translateX:d+"px"},{duration:0});var f=0;$this.find("ul .btn-floating").reverse().each(function(){a(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:f}),f+=40})}},c=function(a){$this=a;var b,c,d=$this.hasClass("horizontal");d===!0?c=40:b=40,$this.removeClass("active"),$this.find("ul .btn-floating").velocity("stop",!0),$this.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:b+"px",translateX:c+"px"},{duration:80})}}(jQuery),function(a){Materialize.fadeInImage=function(b){var c=a(b);c.css({opacity:0}),a(c).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),a(c).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(b,c){c.start=100;var d=b/100,e=150-(100-b)/1.75;100>e&&(e=100),b>=0&&a(this).css({"-webkit-filter":"grayscale("+d+")brightness("+e+"%)",filter:"grayscale("+d+")brightness("+e+"%)"})}})},Materialize.showStaggeredList=function(b){var c=0;a(b).find("li").velocity({translateX:"-100px"},{duration:0}),a(b).find("li").each(function(){a(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:c,easing:[60,10]}),c+=120})},a(document).ready(function(){var b=!1,c=!1;a(".dismissable").each(function(){a(this).hammer({prevent_default:!1}).bind("pan",function(d){if("touch"===d.gesture.pointerType){var e=a(this),f=d.gesture.direction,g=d.gesture.deltaX,h=d.gesture.velocityX;e.velocity({translateX:g},{duration:50,queue:!1,easing:"easeOutQuad"}),4===f&&(g>e.innerWidth()/2||-.75>h)&&(b=!0),2===f&&(g<-1*e.innerWidth()/2||h>.75)&&(c=!0)}}).bind("panend",function(d){if(Math.abs(d.gesture.deltaX)<a(this).innerWidth()/2&&(c=!1,b=!1),"touch"===d.gesture.pointerType){var e=a(this);if(b||c){var f;f=b?e.innerWidth():-1*e.innerWidth(),e.velocity({translateX:f},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){e.css("border","none"),e.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){e.remove()}})}})}else e.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});b=!1,c=!1}})})})}(jQuery),function(a){Materialize.scrollFire=function(a){var b=!1;window.addEventListener("scroll",function(){b=!0}),setInterval(function(){if(b){b=!1;for(var c=window.pageYOffset+window.innerHeight,d=0;d<a.length;d++){var e=a[d],f=e.selector,g=e.offset,h=e.callback,i=document.querySelector(f);if(null!==i){var j=i.getBoundingClientRect().top+window.pageYOffset;if(c>j+g&&e.done!==!0){var k=new Function(h);k(),e.done=!0}}}}},100)}}(jQuery),function(a){"function"==typeof define&&define.amd?define("picker",["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):this.Picker=a(jQuery)}(function(a){function b(f,g,i,l){function m(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",y.component.nodes(t.open),v.box),v.wrap),v.frame),v.holder)}function n(){w.data(g,y).addClass(v.input).attr("tabindex",-1).val(w.data("value")?y.get("select",u.format):f.value),u.editable||w.on("focus."+t.id+" click."+t.id,function(a){a.preventDefault(),y.$root[0].focus()}).on("keydown."+t.id,q),e(f,{haspopup:!0,expanded:!1,readonly:!1,owns:f.id+"_root"})}function o(){y.$root.on({keydown:q,focusin:function(a){y.$root.removeClass(v.focused),a.stopPropagation()},"mousedown click":function(b){var c=b.target;c!=y.$root.children()[0]&&(b.stopPropagation(),"mousedown"!=b.type||a(c).is("input, select, textarea, button, option")||(b.preventDefault(),y.$root[0].focus()))}}).on({focus:function(){w.addClass(v.target)},blur:function(){w.removeClass(v.target)}}).on("focus.toOpen",r).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var b=a(this),c=b.data(),d=b.hasClass(v.navDisabled)||b.hasClass(v.disabled),e=h();e=e&&(e.type||e.href),(d||e&&!a.contains(y.$root[0],e))&&y.$root[0].focus(),!d&&c.nav?y.set("highlight",y.component.item.highlight,{nav:c.nav}):!d&&"pick"in c?y.set("select",c.pick):c.clear?y.clear().close(!0):c.close&&y.close(!0)}),e(y.$root[0],"hidden",!0)}function p(){var b;u.hiddenName===!0?(b=f.name,f.name=""):(b=["string"==typeof u.hiddenPrefix?u.hiddenPrefix:"","string"==typeof u.hiddenSuffix?u.hiddenSuffix:"_submit"],b=b[0]+f.name+b[1]),y._hidden=a('<input type=hidden name="'+b+'"'+(w.data("value")||f.value?' value="'+y.get("select",u.formatSubmit)+'"':"")+">")[0],w.on("change."+t.id,function(){y._hidden.value=f.value?y.get("select",u.formatSubmit):""}),u.container?a(u.container).append(y._hidden):w.after(y._hidden)}function q(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(y.close(),!1):void((32==b||c||!t.open&&y.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?y.clear().close():y.open()))}function r(a){a.stopPropagation(),"focus"==a.type&&y.$root.addClass(v.focused),y.open()}if(!f)return b;var s=!1,t={id:f.id||"P"+Math.abs(~~(Math.random()*new Date))},u=i?a.extend(!0,{},i.defaults,l):l||{},v=a.extend({},b.klasses(),u.klass),w=a(f),x=function(){return this.start()},y=x.prototype={constructor:x,$node:w,start:function(){return t&&t.start?y:(t.methods={},t.start=!0,t.open=!1,t.type=f.type,f.autofocus=f==h(),f.readOnly=!u.editable,f.id=f.id||t.id,"text"!=f.type&&(f.type="text"),y.component=new i(y,u),y.$root=a(b._.node("div",m(),v.picker,'id="'+f.id+'_root" tabindex="0"')),o(),u.formatSubmit&&p(),n(),u.container?a(u.container).append(y.$root):w.after(y.$root),y.on({start:y.component.onStart,render:y.component.onRender,stop:y.component.onStop,open:y.component.onOpen,close:y.component.onClose,set:y.component.onSet}).on({start:u.onStart,render:u.onRender,stop:u.onStop,open:u.onOpen,close:u.onClose,set:u.onSet}),s=c(y.$root.children()[0]),f.autofocus&&y.open(),y.trigger("start").trigger("render"))},render:function(a){return a?y.$root.html(m()):y.$root.find("."+v.box).html(y.component.nodes(t.open)),y.trigger("render")},stop:function(){return t.start?(y.close(),y._hidden&&y._hidden.parentNode.removeChild(y._hidden),y.$root.remove(),w.removeClass(v.input).removeData(g),setTimeout(function(){w.off("."+t.id)},0),f.type=t.type,f.readOnly=!1,y.trigger("stop"),t.methods={},t.start=!1,y):y},open:function(c){return t.open?y:(w.addClass(v.active),e(f,"expanded",!0),setTimeout(function(){y.$root.addClass(v.opened),e(y.$root[0],"hidden",!1)},0),c!==!1&&(t.open=!0,s&&k.css("overflow","hidden").css("padding-right","+="+d()),y.$root[0].focus(),j.on("click."+t.id+" focusin."+t.id,function(a){var b=a.target;b!=f&&b!=document&&3!=a.which&&y.close(b===y.$root.children()[0])}).on("keydown."+t.id,function(c){var d=c.keyCode,e=y.component.key[d],f=c.target;27==d?y.close(!0):f!=y.$root[0]||!e&&13!=d?a.contains(y.$root[0],f)&&13==d&&(c.preventDefault(),f.click()):(c.preventDefault(),e?b._.trigger(y.component.key.go,y,[b._.trigger(e)]):y.$root.find("."+v.highlighted).hasClass(v.disabled)||y.set("select",y.component.item.highlight).close())})),y.trigger("open"))},close:function(a){return a&&(y.$root.off("focus.toOpen")[0].focus(),setTimeout(function(){y.$root.on("focus.toOpen",r)},0)),w.removeClass(v.active),e(f,"expanded",!1),setTimeout(function(){y.$root.removeClass(v.opened+" "+v.focused),e(y.$root[0],"hidden",!0)},0),t.open?(t.open=!1,s&&k.css("overflow","").css("padding-right","-="+d()),j.off("."+t.id),y.trigger("close")):y},clear:function(a){return y.set("clear",null,a)},set:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h)f=h[e],e in y.component.item&&(void 0===f&&(f=null),y.component.set(e,f,d)),("select"==e||"clear"==e)&&w.val("clear"==e?"":y.get(e,u.format)).trigger("change");y.render()}return d.muted?y:y.trigger("set",h)},get:function(a,c){if(a=a||"value",null!=t[a])return t[a];if("valueSubmit"==a){if(y._hidden)return y._hidden.value;a="value"}if("value"==a)return f.value;if(a in y.component.item){if("string"==typeof c){var d=y.component.get(a);return d?b._.trigger(y.component.formats.toString,y.component,[c,d]):""}return y.component.get(a)}},on:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h)f=h[e],d&&(e="_"+e),t.methods[e]=t.methods[e]||[],t.methods[e].push(f)}return y},off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;a<namesCount;a+=1)b=c[a],b in t.methods&&delete t.methods[b];return y},trigger:function(a,c){var d=function(a){var d=t.methods[a];d&&d.map(function(a){b._.trigger(a,y,[c])})};return d("_"+a),d(a),y}};return new x}function c(a){var b,c="position";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),"fixed"==b}function d(){if(k.height()<=i.height())return 0;var b=a('<div style="visibility:hidden;width:100px" />').appendTo("body"),c=b[0].offsetWidth;b.css("overflow","scroll");var d=a('<div style="width:100%" />').appendTo(b),e=d[0].offsetWidth;return b.remove(),c-e}function e(b,c,d){if(a.isPlainObject(c))for(var e in c)f(b,e,c[e]);else f(b,c,d)}function f(a,b,c){a.setAttribute(("role"==b?"":"aria-")+b,c)}function g(b,c){a.isPlainObject(b)||(b={attribute:c}),c="";for(var d in b){var e=("role"==d?"":"aria-")+d,f=b[d];c+=null==f?"":e+'="'+b[d]+'"'}return c}function h(){try{return document.activeElement}catch(a){}}var i=a(window),j=a(document),k=a(document.documentElement);return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",target:a+"__input--target",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},b._={group:function(a){for(var c,d="",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);return d},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},lead:function(a){return(10>a?"0":"")+a},trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\d/.test(a[1])?2:1},isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate())},isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&a%1===0},ariaAttr:g},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return"picker"==e?g:g&&"string"==typeof e?b._.trigger(g[e],g,[f]):this.each(function(){var f=a(this);f.data(c)||new b(this,c,d,e)})},a.fn[c].defaults=d.defaults},b}),function(a){"function"==typeof define&&define.amd?define(["picker","jquery"],a):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0],e=d.value,f=a.$node.data("value"),g=f||e,h=f?b.formatSubmit:b.format,i=function(){return d.currentStyle?"rtl"==d.currentStyle.direction:"rtl"==getComputedStyle(a.$root[0]).direction};c.settings=b,c.$node=a.$node,c.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),g?c.set("select",g,{format:h}):c.set("select",null).set("highlight",c.item.now),c.key={40:7,38:-7,39:function(){return i()?-1:1},37:function(){return i()?1:-1},go:function(a){var b=c.item.highlight,d=new Date(b.year,b.month,b.date+a);c.set("highlight",d,{interval:a}),this.render()}},a.on("render",function(){a.$root.find("."+b.klass.selectMonth).on("change",function(){var c=this.value;c&&(a.set("highlight",[a.get("view").year,c,a.get("highlight").date]),a.$root.find("."+b.klass.selectMonth).trigger("focus"))}),a.$root.find("."+b.klass.selectYear).on("change",function(){var c=this.value;c&&(a.set("highlight",[c,a.get("view").month,a.get("highlight").date]),a.$root.find("."+b.klass.selectYear).trigger("focus"))})},1).on("open",function(){var d="";c.disabled(c.get("now"))&&(d=":not(."+b.klass.buttonToday+")"),a.$root.find("button"+d+", select").attr("disabled",!1)},1).on("close",function(){a.$root.find("button, select").attr("disabled",!0)},1)}var d=7,e=6,f=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,d){var e,g=this;return c=void 0===c?a:c,c==-(1/0)||c==1/0?e=c:b.isPlainObject(c)&&f.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(c[0],c[1],c[2]),c=f.isDate(c)?c:g.create().obj):c=f.isInteger(c)||f.isDate(c)?g.normalize(new Date(c),d):g.now(a,c,d),{year:e||c.getFullYear(),month:e||c.getMonth(),date:e||c.getDate(),day:e||c.getDay(),obj:e||c,pick:e||c.getTime()}},c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||f.isDate(a)?d.create(a):a};return f.isInteger(a)||(a=e(a)),f.isInteger(c)||(c=e(c)),f.isInteger(a)&&b.isPlainObject(c)?a=[c.year,c.month,c.date+a]:f.isInteger(c)&&b.isPlainObject(a)&&(c=[a.year,a.month,a.date+c]),{from:e(a),to:e(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b,c){return b=new Date,c&&c.rel&&b.setDate(b.getDate()+c.rel),this.normalize(b,c)},c.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isPlainObject(c),k=this.item.view;if(i||j){for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),e=new Date(f,g+(d&&d.nav?d.nav:0),1),f=e.getFullYear(),g=e.getMonth();new Date(f,g,h).getMonth()!==g;)h-=1;c=[f,g,h]}return c},c.prototype.normalize=function(a){return a.setHours(0,0,0,0),a},c.prototype.measure=function(a,b){var c=this;return b?"string"==typeof b?b=c.parse(a,b):f.isInteger(b)&&(b=c.now(a,b,{rel:b})):b="min"==a?-(1/0):1/0,b},c.prototype.viewset=function(a,b){return this.create([b.year,b.month,1])},c.prototype.validate=function(a,c,d){var e,g,h,i,j=this,k=c,l=d&&d.interval?d.interval:1,m=-1===j.item.enable,n=j.item.min,o=j.item.max,p=m&&j.item.disable.filter(function(a){if(b.isArray(a)){var d=j.create(a).pick;d<c.pick?e=!0:d>c.pick&&(g=!0)}return f.isInteger(a)}).length;if((!d||!d.nav)&&(!m&&j.disabled(c)||m&&j.disabled(c)&&(p||e||g)||!m&&(c.pick<=n.pick||c.pick>=o.pick)))for(m&&!p&&(!g&&l>0||!e&&0>l)&&(l*=-1);j.disabled(c)&&(Math.abs(l)>1&&(c.month<k.month||c.month>k.month)&&(c=k,l=l>0?1:-1),c.pick<=n.pick?(h=!0,l=1,c=j.create([n.year,n.month,n.date+(c.pick===n.pick?0:-1)])):c.pick>=o.pick&&(i=!0,l=-1,c=j.create([o.year,o.month,o.date+(c.pick===o.pick?0:1)])),!h||!i);)c=j.create([c.year,c.month,c.date+l]);return c},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return f.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||f.isDate(d)?a.pick===c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[3]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.parse=function(a,b,c){var d=this,e={};return b&&"string"==typeof b?(c&&c.format||(c=c||{},c.format=d.settings.format),d.formats.toArray(c.format).map(function(a){var c=d.formats[a],g=c?f.trigger(c,d,[b,e]):a.replace(/^!/,"").length;c&&(e[a]=b.substr(0,g)),b=b.substr(g)}),[e.yyyy||e.yy,+(e.mm||e.m)-1,e.dd||e.d]):b},c.prototype.formats=function(){function a(a,b,c){var d=a.match(/\w+/)[0];return c.mm||c.m||(c.m=b.indexOf(d)+1),d.length}function b(a){return a.match(/\w+/)[0].length}return{d:function(a,b){return a?f.digits(a):b.date},dd:function(a,b){return a?2:f.lead(b.date)},ddd:function(a,c){return a?b(a):this.settings.weekdaysShort[c.day]},dddd:function(a,c){return a?b(a):this.settings.weekdaysFull[c.day]},m:function(a,b){return a?f.digits(a):b.month+1},mm:function(a,b){return a?2:f.lead(b.month+1)},mmm:function(b,c){var d=this.settings.monthsShort;return b?a(b,d,c):d[c.month]},mmmm:function(b,c){var d=this.settings.monthsFull;return b?a(b,d,c):d[c.month]},yy:function(a,b){return a?2:(""+b.year).slice(2)},yyyy:function(a,b){return a?4:b.year},toArray:function(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return f.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}}}(),c.prototype.isDateExact=function(a,c){var d=this;return f.isInteger(a)&&f.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(f.isDate(a)||b.isArray(a))&&(f.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isPlainObject(a)&&b.isPlainObject(c)?d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to):!1},c.prototype.isDateOverlap=function(a,c){var d=this,e=d.settings.firstDay?1:0;return f.isInteger(a)&&(f.isDate(c)||b.isArray(c))?(a=a%7+e,a===d.create(c).day+1):f.isInteger(c)&&(f.isDate(a)||b.isArray(a))?(c=c%7+e,c===d.create(a).day+1):b.isPlainObject(a)&&b.isPlainObject(c)?d.overlapRanges(a,c):!1},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,g=0;g<e.length;g+=1)if(d.isDateExact(a,e[g])){c=!0;break}c||(f.isInteger(a)||f.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a)}),e},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,g=e.length;return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,h,i,j;for(i=0;g>i;i+=1){if(h=e[i],d.isDateExact(h,a)){c=e[i]=null,j=!0;break}if(d.isDateOverlap(h,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push("inverted")):f.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;g>i;i+=1)if(d.isDateExact(e[i],a)){e[i]=null;break}if(j)for(i=0;g>i;i+=1)if(d.isDateOverlap(e[i],a)){e[i]=null;break}c&&e.push(c)}),e.filter(function(a){return null!=a})},c.prototype.nodes=function(a){var b=this,c=b.settings,g=b.item,h=g.now,i=g.select,j=g.highlight,k=g.view,l=g.disable,m=g.min,n=g.max,o=function(a,b){return c.firstDay&&(a.push(a.shift()),b.push(b.shift())),f.node("thead",f.node("tr",f.group({min:0,max:d-1,i:1,node:"th",item:function(d){return[a[d],c.klass.weekdays,'scope=col title="'+b[d]+'"']}})))}((c.showWeekdaysFull?c.weekdaysFull:c.weekdaysLetter).slice(0),c.weekdaysFull.slice(0)),p=function(a){return f.node("div"," ",c.klass["nav"+(a?"Next":"Prev")]+(a&&k.year>=n.year&&k.month>=n.month||!a&&k.year<=m.year&&k.month<=m.month?" "+c.klass.navDisabled:""),"data-nav="+(a||-1)+" "+f.ariaAttr({role:"button",controls:b.$node[0].id+"_table"})+' title="'+(a?c.labelMonthNext:c.labelMonthPrev)+'"')},q=function(d){var e=c.showMonthsShort?c.monthsShort:c.monthsFull;return"short_months"==d&&(e=c.monthsShort),c.selectMonths&&void 0==d?f.node("select",f.group({min:0,max:11,i:1,node:"option",item:function(a){return[e[a],0,"value="+a+(k.month==a?" selected":"")+(k.year==m.year&&a<m.month||k.year==n.year&&a>n.month?" disabled":"")]}}),c.klass.selectMonth+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelMonthSelect+'"'):"short_months"==d?null!=i?f.node("div",e[i.month]):f.node("div",e[k.month]):f.node("div",e[k.month],c.klass.month)},r=function(d){var e=k.year,g=c.selectYears===!0?5:~~(c.selectYears/2);if(g){var h=m.year,i=n.year,j=e-g,l=e+g;if(h>j&&(l+=h-j,j=h),l>i){var o=j-h,p=l-i;j-=o>p?p:o,l=i}if(c.selectYears&&void 0==d)return f.node("select",f.group({min:j,max:l,i:1,node:"option",item:function(a){return[a,0,"value="+a+(e==a?" selected":"")]}}),c.klass.selectYear+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelYearSelect+'"')}return"raw"==d?f.node("div",e):f.node("div",e,c.klass.year)};return createDayLabel=function(){return null!=i?f.node("div",i.date):f.node("div",h.date)},createWeekdayLabel=function(){var a;a=null!=i?i.day:h.day;var b=c.weekdaysFull[a];return b},f.node("div",f.node("div",createWeekdayLabel(),"picker__weekday-display")+f.node("div",q("short_months"),c.klass.month_display)+f.node("div",createDayLabel(),c.klass.day_display)+f.node("div",r("raw"),c.klass.year_display),c.klass.date_display)+f.node("div",f.node("div",(c.selectYears?q()+r():q()+r())+p()+p(1),c.klass.header)+f.node("table",o+f.node("tbody",f.group({min:0,max:e-1,i:1,node:"tr",item:function(a){var e=c.firstDay&&0===b.create([k.year,k.month,1]).day?-7:0;return[f.group({min:d*a-k.day+e+1,max:function(){return this.min+d-1},i:1,node:"td",item:function(a){a=b.create([k.year,k.month,a+(c.firstDay?1:0)]);var d=i&&i.pick==a.pick,e=j&&j.pick==a.pick,g=l&&b.disabled(a)||a.pick<m.pick||a.pick>n.pick,o=f.trigger(b.formats.toString,b,[c.format,a]);return[f.node("div",a.date,function(b){return b.push(k.month==a.month?c.klass.infocus:c.klass.outfocus),h.pick==a.pick&&b.push(c.klass.now),d&&b.push(c.klass.selected),e&&b.push(c.klass.highlighted),g&&b.push(c.klass.disabled),b.join(" ")}([c.klass.day]),"data-pick="+a.pick+" "+f.ariaAttr({role:"gridcell",label:o,selected:d&&b.$node.val()===o?!0:null,activedescendant:e?!0:null,disabled:g?!0:null})),"",f.ariaAttr({role:"presentation"})]}})]}})),c.klass.table,'id="'+b.$node[0].id+'_table" '+f.ariaAttr({role:"grid",controls:b.$node[0].id,readonly:!0})),c.klass.calendar_container)+f.node("div",f.node("button",c.today,"btn-flat picker__today","type=button data-pick="+h.pick+(a&&!b.disabled(h)?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.clear,"btn-flat picker__clear","type=button data-clear=1"+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.close,"btn-flat picker__close","type=button data-close=true "+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id})),c.klass.footer)},c.defaults=function(a){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:a+"table",header:a+"header",date_display:a+"date-display",day_display:a+"day-display",month_display:a+"month-display",year_display:a+"year-display",calendar_container:a+"calendar-container",navPrev:a+"nav--prev",navNext:a+"nav--next",navDisabled:a+"nav--disabled",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",day:a+"day",disabled:a+"day--disabled",selected:a+"day--selected",highlighted:a+"day--highlighted",now:a+"day--today",infocus:a+"day--infocus",outfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear",buttonToday:a+"button--today",buttonClose:a+"button--close"}}}(a.klasses().picker+"__"),a.extend("pickadate",c)}),function(a){function b(){var b=+a(this).attr("length"),c=+a(this).val().length,d=b>=c;a(this).parent().find('span[class="character-counter"]').html(c+"/"+b),e(d,a(this))}function c(b){var c=a("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1);b.parent().append(c)}function d(){a(this).parent().find('span[class="character-counter"]').html("")}function e(a,b){var c=b.hasClass("invalid");a&&c?b.removeClass("invalid"):a||c||(b.removeClass("valid"),b.addClass("invalid"))}a.fn.characterCounter=function(){return this.each(function(){var e=void 0!==a(this).attr("length");e&&(a(this).on("input",b),a(this).on("focus",b),a(this).on("blur",d),c(a(this)))})},a(document).ready(function(){a("input, textarea").characterCounter()})}(jQuery),function(a){var b={init:function(b){var c={time_constant:200,dist:-100,shift:0,padding:0,full_width:!1};return b=a.extend(c,b),this.each(function(){function c(){"undefined"!=typeof window.ontouchstart&&(F[0].addEventListener("touchstart",k),F[0].addEventListener("touchmove",l),F[0].addEventListener("touchend",m)),F[0].addEventListener("mousedown",k),F[0].addEventListener("mousemove",l),F[0].addEventListener("mouseup",m),F[0].addEventListener("click",j)}function d(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientX:a.clientX}function e(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientY:a.clientY}function f(a){return a>=s?a%s:0>a?f(s+a%s):a}function g(a){var c,d,e,g,h,i,j;for(o="number"==typeof a?a:o,p=Math.floor((o+r/2)/r),e=o-p*r,g=0>e?1:-1,h=-g*e*2/r,b.full_width?j="translateX(0)":(j="translateX("+(F[0].clientWidth-item_width)/2+"px) ",j+="translateY("+(F[0].clientHeight-item_width)/2+"px)"),i=n[f(p)],i.style[z]=j+" translateX("+-e/2+"px) translateX("+g*b.shift*h*c+"px) translateZ("+b.dist*h+"px)",i.style.zIndex=0,b.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*h,i.style.opacity=tweenedOpacity,d=s>>1,c=1;d>=c;++c)b.full_width?(zTranslation=b.dist,tweenedOpacity=c===d&&0>e?1-h:1):(zTranslation=b.dist*(2*c+h*g),tweenedOpacity=1-.2*(2*c+h*g)),i=n[f(p+c)],i.style[z]=j+" translateX("+(b.shift+(r*c-e)/2)+"px) translateZ("+zTranslation+"px)",i.style.zIndex=-c,i.style.opacity=tweenedOpacity,b.full_width?(zTranslation=b.dist,tweenedOpacity=c===d&&e>0?1-h:1):(zTranslation=b.dist*(2*c-h*g),tweenedOpacity=1-.2*(2*c-h*g)),i=n[f(p-c)],i.style[z]=j+" translateX("+(-b.shift+(-r*c-e)/2)+"px) translateZ("+zTranslation+"px)",i.style.zIndex=-c,
i.style.opacity=tweenedOpacity;i=n[f(p)],i.style[z]=j+" translateX("+-e/2+"px) translateX("+g*b.shift*h+"px) translateZ("+b.dist*h+"px)",i.style.zIndex=0,b.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*h,i.style.opacity=tweenedOpacity}function h(){var a,b,c,d;a=Date.now(),b=a-B,B=a,c=o-A,A=o,d=1e3*c/(1+b),x=.8*d+.2*x}function i(){var a,c;v&&(a=Date.now()-B,c=v*Math.exp(-a/b.time_constant),c>2||-2>c?(g(w-c),requestAnimationFrame(i)):g(w))}function j(c){if(D)return c.preventDefault(),c.stopPropagation(),!1;if(!b.full_width){var d=a(c.target).closest(".carousel-item").index(),e=p%s-d;0>e?Math.abs(e+s)<Math.abs(e)&&(e+=s):e>0&&Math.abs(e-s)<e&&(e-=s),0>e?a(this).trigger("carouselNext",[Math.abs(e)]):e>0&&a(this).trigger("carouselPrev",[e])}}function k(a){q=!0,D=!1,E=!1,t=d(a),u=e(a),x=v=0,A=o,B=Date.now(),clearInterval(C),C=setInterval(h,100)}function l(a){var b,c,f;if(q)if(b=d(a),y=e(a),c=t-b,f=Math.abs(u-y),30>f&&!E)(c>2||-2>c)&&(D=!0,t=b,g(o+c));else{if(D)return a.preventDefault(),a.stopPropagation(),!1;E=!0}return D?(a.preventDefault(),a.stopPropagation(),!1):void 0}function m(a){return q=!1,clearInterval(C),w=o,(x>10||-10>x)&&(v=.9*x,w=o+v),w=Math.round(w/r)*r,v=w-o,B=Date.now(),requestAnimationFrame(i),a.preventDefault(),a.stopPropagation(),!1}var n,o,p,q,r,s,t,u,v,w,x,z,A,B,C,D,E,F=a(this);return F.hasClass("initialized")?!0:(b.full_width&&(b.dist=0,imageHeight=F.find(".carousel-item img").first().load(function(){F.css("height",a(this).height())})),F.addClass("initialized"),q=!1,o=w=0,n=[],item_width=F.find(".carousel-item").first().innerWidth(),r=2*item_width+b.padding,F.find(".carousel-item").each(function(){n.push(a(this)[0])}),s=n.length,z="transform",["webkit","Moz","O","ms"].every(function(a){var b=a+"Transform";return"undefined"!=typeof document.body.style[b]?(z=b,!1):!0}),window.onresize=g,c(),g(o),a(this).on("carouselNext",function(a,b){void 0===b&&(b=1),w=o+r*b,o!==w&&(v=w-o,B=Date.now(),requestAnimationFrame(i))}),void a(this).on("carouselPrev",function(a,b){void 0===b&&(b=1),w=o-r*b,o!==w&&(v=w-o,B=Date.now(),requestAnimationFrame(i))}))})},next:function(b){a(this).trigger("carouselNext",[b])},prev:function(b){a(this).trigger("carouselPrev",[b])}};a.fn.carousel=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.carousel"):b.init.apply(this,arguments)}}(jQuery);