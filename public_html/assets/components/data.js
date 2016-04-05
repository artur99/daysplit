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
return jQuery.noConflict=function(deep){return window.$===jQuery&&(window.$=_$),deep&&window.jQuery===jQuery&&(window.jQuery=_jQuery),jQuery},noGlobal||(window.jQuery=window.$=jQuery),jQuery}),"undefined"==typeof jQuery){var jQuery;jQuery="function"==typeof require?$=require("jquery"):$}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*(2*Math.PI)/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*(.3*1.5)),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*(b*b*(((f*=1.525)+1)*b-f))+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*(7.5625*b*b)+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:d/4*((b-=2)*b*b+2)+c}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;h=c(h||i,g),j.push(1+h.x),k+=16,Math.abs(h.x)>l&&Math.abs(h.v)>l;);return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(a){function l(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function n(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function r(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(u){setTimeout(function(){throw u},1)}if("scroll"===C){var w,z,A,D=/^x$/i.test(h.axis)?"Left":"Top",E=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,w=h.container["scroll"+D],A=w+m(f).position()[D.toLowerCase()]+E):h.container=null:(w=t.State.scrollAnchor[t.State["scrollProperty"+D]],z=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===D?"Top":"Left")]],A=m(f).offset()[D.toLowerCase()]+E),i={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:A,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:D,alternateValue:z}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var F=m.extend(!0,{},g(f).tweensContainer);for(var G in F)if("element"!==G){var H=F[G].startValue;F[G].startValue=F[G].currentValue=F[G].endValue,F[G].endValue=H,p.isEmptyObject(s)||(F[G].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+G+"): "+JSON.stringify(F[G]),f)}i=F}else if("start"===C){var F;g(f).tweensContainer&&g(f).isAnimating===!0&&(F=g(f).tweensContainer),m.each(q,function(a,b){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(a)){var c=l(b,!0),e=c[0],f=c[1],g=c[2];if(v.RegEx.isHex.test(e)){for(var h=["Red","Green","Blue"],i=v.Values.hexToRgb(e),j=g?v.Values.hexToRgb(g):d,k=0;k<h.length;k++){var m=[i[k]];f&&m.push(f),j!==d&&m.push(j[k]),q[a+h[k]]=m}delete q[a]}}});for(var K in q){var L=l(q[K]),M=L[0],N=L[1],O=L[2];K=v.Names.camelCase(K);var P=v.Hooks.getRoot(K),Q=!1;if(g(f).isSVG||"tween"===P||v.Names.prefixCheck(P)[1]!==!1||v.Normalizations.registered[P]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(K)&&!O&&0!==M&&(O=0),h._cacheValues&&F&&F[K]?(O===d&&(O=F[K].endValue+F[K].unitType),Q=g(f).rootPropertyValueCache[P]):v.Hooks.registered[K]?O===d?(Q=v.getPropertyValue(f,P),O=v.getPropertyValue(f,K,Q)):Q=v.Hooks.templates[P][1]:O===d&&(O=v.getPropertyValue(f,K));var R,S,T,U=!1;if(R=n(K,O),O=R[0],T=R[1],R=n(K,M),M=R[0].replace(/^([+-\/*])=/,function(a,b){return U=b,""}),S=R[1],O=parseFloat(O)||0,M=parseFloat(M)||0,"%"===S&&(/^(fontSize|lineHeight)$/.test(K)?(M/=100,S="em"):/^scale/.test(K)?(M/=100,
S=""):/(Red|Green|Blue)$/i.test(K)&&(M=M/100*255,S="")),/[\/*]/.test(U))S=T;else if(T!==S&&0!==O)if(0===M)S=T;else{e=e||r();var V=/margin|padding|left|right|width|text|word|letter/i.test(K)||/X$/.test(K)||"x"===K?"x":"y";switch(T){case"%":O*="x"===V?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:O*=e[T+"ToPx"]}switch(S){case"%":O*=1/("x"===V?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:O*=1/e[S+"ToPx"]}}switch(U){case"+":M=O+M;break;case"-":M=O-M;break;case"*":M=O*M;break;case"/":M=O/M}i[K]={rootPropertyValue:Q,startValue:O,currentValue:O,endValue:M,unitType:S,easing:N},t.debug&&console.log("tweensContainer ("+K+"): "+JSON.stringify(i[K]),f)}else t.debug&&console.log("Skipping ["+P+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer)});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):"finish"===q&&(b[2].duration=1))}):!0})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)})),!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==ka?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ia.length;){if(c=ia[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return oa++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:ra?N:sa?Q:qa?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&ya&&0===d-e,g=b&(Aa|Ba)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=na(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===ya||f.eventType===Aa)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ba&&(i>xa||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=ma(l.x)>ma(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:la(a.pointers[c].clientX),clientY:la(a.pointers[c].clientY)},c++;return{timeStamp:na(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:la(a[0].clientX),y:la(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:la(c/b),y:la(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Ca:ma(a)>=ma(b)?a>0?Da:Ea:b>0?Fa:Ga}function I(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],La)-J(a[1],a[0],La)}function L(a,b){return I(b[0],b[1],La)/I(a[0],a[1],La)}function M(){this.evEl=Na,this.evWin=Oa,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Ra,this.evWin=Sa,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ua,this.evWin=Va,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Aa|Ba)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xa,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(ya|za)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===ya)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Aa|Ba)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bb))return bb;var b=q(a,cb),c=q(a,db);return b&&c?cb+" "+db:b||c?b?cb:db:q(a,ab)?ab:_a}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=eb,this.simultaneous={},this.requireFail=[]}function W(a){return a&jb?"cancel":a&hb?"end":a&gb?"move":a&fb?"start":""}function X(a){return a==Ga?"down":a==Fa?"up":a==Da?"left":a==Ea?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function aa(){V.apply(this,arguments),this._timer=null,this._input=null}function ba(){Z.apply(this,arguments)}function ca(){Z.apply(this,arguments)}function da(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ea(a,b){return b=b||{},b.recognizers=m(b.recognizers,ea.defaults.preset),new fa(a,b)}function fa(a,b){b=b||{},this.options=i(b,ea.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),ga(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ga(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function ha(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ia=["","webkit","moz","MS","ms","o"],ja=b.createElement("div"),ka="function",la=Math.round,ma=Math.abs,na=Date.now,oa=1,pa=/mobile|tablet|ip(ad|hone|od)|android/i,qa="ontouchstart"in a,ra=v(a,"PointerEvent")!==d,sa=qa&&pa.test(navigator.userAgent),ta="touch",ua="pen",va="mouse",wa="kinect",xa=25,ya=1,za=2,Aa=4,Ba=8,Ca=1,Da=2,Ea=4,Fa=8,Ga=16,Ha=Da|Ea,Ia=Fa|Ga,Ja=Ha|Ia,Ka=["x","y"],La=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Ma={mousedown:ya,mousemove:za,mouseup:Aa},Na="mousedown",Oa="mousemove mouseup";j(M,y,{handler:function(a){var b=Ma[a.type];b&ya&&0===a.button&&(this.pressed=!0),b&za&&1!==a.which&&(b=Aa),this.pressed&&this.allow&&(b&Aa&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:va,srcEvent:a}))}});var Pa={pointerdown:ya,pointermove:za,pointerup:Aa,pointercancel:Ba,pointerout:Ba},Qa={2:ta,3:ua,4:va,5:wa},Ra="pointerdown",Sa="pointermove pointerup pointercancel";a.MSPointerEvent&&(Ra="MSPointerDown",Sa="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pa[d],f=Qa[a.pointerType]||a.pointerType,g=f==ta,h=s(b,a.pointerId,"pointerId");e&ya&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Aa|Ba)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Ta={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Ua="touchstart",Va="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Ta[a.type];if(b===ya&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Aa|Ba)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}});var Wa={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Xa="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wa[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==ta,e=c.pointerType==va;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Aa|Ba)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ya=v(ja.style,"touchAction"),Za=Ya!==d,$a="compute",_a="auto",ab="manipulation",bb="none",cb="pan-x",db="pan-y";T.prototype={set:function(a){a==$a&&(a=this.compute()),Za&&(this.manager.element.style[Ya]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Za){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bb),f=q(d,db),g=q(d,cb);return e||f&&c&Ha||g&&c&Ia?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var eb=1,fb=2,gb=4,hb=8,ib=hb,jb=16,kb=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hb>d&&b(!0),b(),d>=hb&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kb|eb)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ib|jb|kb)&&(this.state=eb),this.state=this.process(b),void(this.state&(fb|gb|hb|jb)&&this.tryEmit(b))):(this.reset(),void(this.state=kb))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fb|gb),e=this.attrTest(a);return d&&(c&Ba||!e)?b|jb:d||e?c&Aa?b|hb:b&fb?b|gb:fb:kb}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ja},getTouchAction:function(){var a=this.options.direction,b=[];return a&Ha&&b.push(db),a&Ia&&b.push(cb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Ha?(e=0===f?Ca:0>f?Da:Ea,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ca:0>g?Fa:Ga,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fb||!(this.state&fb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(aa,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_a]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Aa|Ba)&&!f)this.reset();else if(a.eventType&ya)this.reset(),this._timer=e(function(){this.state=ib,this.tryEmit()},b.time,this);else if(a.eventType&Aa)return ib;return kb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ib&&(a&&a.eventType&Aa?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=na(),this.manager.emit(this.options.event,this._input)))}}),j(ba,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fb)}}),j(ca,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Ha|Ia,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Ha|Ia)?b=a.velocity:c&Ha?b=a.velocityX:c&Ia&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&ma(b)>this.options.velocity&&a.eventType&Aa},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(da,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ab]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&ya&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Aa)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ib,this.tryEmit()},b.interval,this),fb):ib}return kb},failTimeout:function(){return this._timer=e(function(){this.state=kb},this.options.interval,this),kb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ib&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ea.VERSION="2.0.4",ea.defaults={domEvents:!1,touchAction:$a,enable:!0,inputTarget:null,inputClass:null,preset:[[ba,{enable:!1}],[_,{enable:!1},["rotate"]],[ca,{direction:Ha}],[$,{direction:Ha},["swipe"]],[da],[da,{event:"doubletap",taps:2},["tap"]],[aa]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lb=1,mb=2;fa.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mb:lb},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ib)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fb|gb|hb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&ha(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ga(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(ea,{INPUT_START:ya,INPUT_MOVE:za,INPUT_END:Aa,INPUT_CANCEL:Ba,STATE_POSSIBLE:eb,STATE_BEGAN:fb,STATE_CHANGED:gb,STATE_ENDED:hb,STATE_RECOGNIZED:ib,STATE_CANCELLED:jb,STATE_FAILED:kb,DIRECTION_NONE:Ca,DIRECTION_LEFT:Da,DIRECTION_RIGHT:Ea,DIRECTION_UP:Fa,DIRECTION_DOWN:Ga,DIRECTION_HORIZONTAL:Ha,DIRECTION_VERTICAL:Ia,DIRECTION_ALL:Ja,Manager:fa,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:da,Pan:$,Swipe:ca,Pinch:_,Rotate:ba,Press:aa,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==ka&&define.amd?define(function(){return ea}):"undefined"!=typeof module&&module.exports?module.exports=ea:a[c]=ea}(window,document,"Hammer"),function(a){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],a):"object"==typeof exports?a(require("jquery"),require("hammerjs")):a(jQuery,Hammer)}(function(a,b){function c(c,d){var e=a(c);e.data("hammer")||e.data("hammer",new b(e[0],d))}a.fn.hammer=function(a){return this.each(function(){c(this,a)})},b.Manager.prototype.emit=function(b){return function(c,d){b.call(this,c,d),a(this.element).trigger({type:c,gesture:d})}}(b.Manager.prototype.emit)}),function(a){a.Package?Materialize={}:a.Materialize={}}(window),Materialize.guid=function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}}(),Materialize.elementOrParentIsFixed=function(a){var b=$(a),c=b.add(b.parents()),d=!1;return c.each(function(){return"fixed"===$(this).css("position")?(d=!0,!1):void 0}),d};var Vel;Vel=$?$.Velocity:jQuery?jQuery.Velocity:Velocity,function(a){a.fn.collapsible=function(b){var c={accordion:void 0};return b=a.extend(c,b),this.each(function(){function c(b){h=g.find("> li > .collapsible-header"),b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}),h.not(b).removeClass("active").parent().removeClass("active"),h.not(b).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}})}function d(b){b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}})}function e(a){var b=f(a);return b.length>0}function f(a){return a.closest("li > .collapsible-header")}var g=a(this),h=a(this).find("> li > .collapsible-header"),i=g.data("collapsible");g.off("click.collapse","> li > .collapsible-header"),h.off("click.collapse"),g.on("click.collapse","> li > .collapsible-header",function(g){var h=a(this),j=a(g.target);e(j)&&(j=f(j)),j.toggleClass("active"),b.accordion||"accordion"===i||void 0===i?c(j):(d(j),h.hasClass("active")&&d(h))});var h=g.find("> li > .collapsible-header");b.accordion||"accordion"===i||void 0===i?c(h.filter(".active").first()):h.filter(".active").each(function(){d(a(this))})})},a(document).ready(function(){a(".collapsible").collapsible()})}(jQuery),function(a){a.fn.scrollTo=function(b){return a(this).scrollTop(a(this).scrollTop()-a(this).offset().top+a(b).offset().top),this},a.fn.dropdown=function(b){var c={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left"};this.each(function(){function d(){void 0!==g.data("induration")&&(h.inDuration=g.data("inDuration")),void 0!==g.data("outduration")&&(h.outDuration=g.data("outDuration")),void 0!==g.data("constrainwidth")&&(h.constrain_width=g.data("constrainwidth")),void 0!==g.data("hover")&&(h.hover=g.data("hover")),void 0!==g.data("gutter")&&(h.gutter=g.data("gutter")),void 0!==g.data("beloworigin")&&(h.belowOrigin=g.data("beloworigin")),void 0!==g.data("alignment")&&(h.alignment=g.data("alignment"))}function e(b){"focus"===b&&(i=!0),d(),j.addClass("active"),g.addClass("active"),h.constrain_width===!0?j.css("width",g.outerWidth()):j.css("white-space","nowrap");var c=window.innerHeight,e=g.innerHeight(),f=g.offset().left,k=g.offset().top-a(window).scrollTop(),l=h.alignment,m=0,n=0,o=0;h.belowOrigin===!0&&(o=e);var p=0,q=g.parent();if(!q.is("body")&&q[0].scrollHeight>q[0].clientHeight&&(p=q[0].scrollTop),f+j.innerWidth()>a(window).width()?l="right":f-j.innerWidth()+g.innerWidth()<0&&(l="left"),k+j.innerHeight()>c)if(k+e-j.innerHeight()<0){var r=c-k-o;j.css("max-height",r)}else o||(o+=e),o-=j.innerHeight();if("left"===l)m=h.gutter,n=g.position().left+m;else if("right"===l){var s=g.position().left+g.outerWidth()-j.outerWidth();m=-h.gutter,n=s+m}j.css({position:"absolute",top:g.position().top+o+p,left:n}),j.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:h.inDuration,easing:"easeOutCubic",complete:function(){a(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:h.inDuration,easing:"easeOutSine"})}function f(){i=!1,j.fadeOut(h.outDuration),j.removeClass("active"),g.removeClass("active"),setTimeout(function(){j.css("max-height","")},h.outDuration)}var g=a(this),h=a.extend({},c,b),i=!1,j=a("#"+g.attr("data-activates"));if(d(),g.after(j),h.hover){var k=!1;g.unbind("click."+g.attr("id")),g.on("mouseenter",function(a){k===!1&&(e(),k=!0)}),g.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-content").is(j)||(j.stop(!0,!0),f(),k=!1)}),j.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-button").is(g)||(j.stop(!0,!0),f(),k=!1)})}else g.unbind("click."+g.attr("id")),g.bind("click."+g.attr("id"),function(b){i||(g[0]!=b.currentTarget||g.hasClass("active")||0!==a(b.target).closest(".dropdown-content").length?g.hasClass("active")&&(f(),a(document).unbind("click."+j.attr("id")+" touchstart."+j.attr("id"))):(b.preventDefault(),e("click")),j.hasClass("active")&&a(document).bind("click."+j.attr("id")+" touchstart."+j.attr("id"),function(b){j.is(b.target)||g.is(b.target)||g.find(b.target).length||(f(),a(document).unbind("click."+j.attr("id")+" touchstart."+j.attr("id")))}))});g.on("open",function(a,b){e(b)}),g.on("close",f)})},a(document).ready(function(){a(".dropdown-button").dropdown()})}(jQuery),function(a){var b=0,c=0,d=function(){return c++,"materialize-lean-overlay-"+c};a.fn.extend({openModal:function(c){var e=a("body"),f=e.innerWidth();e.css("overflow","hidden"),e.width(f);var g={opacity:.5,in_duration:350,out_duration:250,ready:void 0,complete:void 0,dismissible:!0,starting_top:"4%"},h=a(this);h.hasClass("open")||(overlayID=d(),$overlay=a('<div class="lean-overlay"></div>'),lStack=++b,$overlay.attr("id",overlayID).css("z-index",1e3+2*lStack),h.data("overlay-id",overlayID).css("z-index",1e3+2*lStack+1),h.addClass("open"),a("body").append($overlay),c=a.extend(g,c),c.dismissible&&($overlay.click(function(){h.closeModal(c)}),a(document).on("keyup.leanModal"+overlayID,function(a){27===a.keyCode&&h.closeModal(c)})),h.find(".modal-close").on("click.close",function(a){h.closeModal(c)}),$overlay.css({display:"block",opacity:0}),h.css({display:"block",opacity:0}),$overlay.velocity({opacity:c.opacity},{duration:c.in_duration,queue:!1,ease:"easeOutCubic"}),h.data("associated-overlay",$overlay[0]),h.hasClass("bottom-sheet")?h.velocity({bottom:"0",opacity:1},{duration:c.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof c.ready&&c.ready()}}):(a.Velocity.hook(h,"scaleX",.7),h.css({top:c.starting_top}),h.velocity({top:"10%",opacity:1,scaleX:"1"},{duration:c.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof c.ready&&c.ready();
}})))}}),a.fn.extend({closeModal:function(c){var d={out_duration:250,complete:void 0},e=a(this),f=e.data("overlay-id"),g=a("#"+f);e.removeClass("open"),c=a.extend(d,c),a("body").css({overflow:"",width:""}),e.find(".modal-close").off("click.close"),a(document).off("keyup.leanModal"+f),g.velocity({opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutQuart"}),e.hasClass("bottom-sheet")?e.velocity({bottom:"-100%",opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutCubic",complete:function(){g.css({display:"none"}),"function"==typeof c.complete&&c.complete(),g.remove(),b--}}):e.velocity({top:c.starting_top,opacity:0,scaleX:.7},{duration:c.out_duration,complete:function(){a(this).css("display","none"),"function"==typeof c.complete&&c.complete(),g.remove(),b--}})}}),a.fn.extend({leanModal:function(b){return this.each(function(){var c={starting_top:"4%"},d=a.extend(c,b);a(this).click(function(b){d.starting_top=(a(this).offset().top-a(window).scrollTop())/1.15;var c=a(this).attr("href")||"#"+a(this).data("target");a(c).openModal(d),b.preventDefault()})})}})}(jQuery),function(a){a.fn.materialbox=function(){return this.each(function(){function b(){f=!1;var b=i.parent(".material-placeholder"),d=(window.innerWidth,window.innerHeight,i.data("width")),g=i.data("height");i.velocity("stop",!0),a("#materialbox-overlay").velocity("stop",!0),a(".materialbox-caption").velocity("stop",!0),a("#materialbox-overlay").velocity({opacity:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function(){e=!1,a(this).remove()}}),i.velocity({width:d,height:g,left:0,top:0},{duration:h,queue:!1,easing:"easeOutQuad"}),a(".materialbox-caption").velocity({opacity:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function(){b.css({height:"",width:"",position:"",top:"",left:""}),i.css({height:"",top:"",left:"",width:"","max-width":"",position:"","z-index":""}),i.removeClass("active"),f=!0,a(this).remove(),c&&c.css("overflow","")}})}if(!a(this).hasClass("initialized")){a(this).addClass("initialized");var c,d,e=!1,f=!0,g=275,h=200,i=a(this),j=a("<div></div>").addClass("material-placeholder");i.wrap(j),i.on("click",function(){var h=i.parent(".material-placeholder"),j=window.innerWidth,k=window.innerHeight,l=i.width(),m=i.height();if(f===!1)return b(),!1;if(e&&f===!0)return b(),!1;for(f=!1,i.addClass("active"),e=!0,h.css({width:h[0].getBoundingClientRect().width,height:h[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),c=void 0,d=h[0].parentNode;null!==d&&!a(d).is(document);){var n=a(d);"visible"!==n.css("overflow")&&(n.css("overflow","visible"),c=void 0===c?n:c.add(n)),d=d.parentNode}i.css({position:"absolute","z-index":1e3}).data("width",l).data("height",m);var o=a('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){f===!0&&b()});if(i.before(o),o.velocity({opacity:1},{duration:g,queue:!1,easing:"easeOutQuad"}),""!==i.data("caption")){var p=a('<div class="materialbox-caption"></div>');p.text(i.data("caption")),a("body").append(p),p.css({display:"inline"}),p.velocity({opacity:1},{duration:g,queue:!1,easing:"easeOutQuad"})}var q=0,r=l/j,s=m/k,t=0,u=0;r>s?(q=m/l,t=.9*j,u=.9*j*q):(q=l/m,t=.9*k*q,u=.9*k),i.hasClass("responsive-img")?i.velocity({"max-width":t,width:l},{duration:0,queue:!1,complete:function(){i.css({left:0,top:0}).velocity({height:u,width:t,left:a(document).scrollLeft()+j/2-i.parent(".material-placeholder").offset().left-t/2,top:a(document).scrollTop()+k/2-i.parent(".material-placeholder").offset().top-u/2},{duration:g,queue:!1,easing:"easeOutQuad",complete:function(){f=!0}})}}):i.css("left",0).css("top",0).velocity({height:u,width:t,left:a(document).scrollLeft()+j/2-i.parent(".material-placeholder").offset().left-t/2,top:a(document).scrollTop()+k/2-i.parent(".material-placeholder").offset().top-u/2},{duration:g,queue:!1,easing:"easeOutQuad",complete:function(){f=!0}})}),a(window).scroll(function(){e&&b()}),a(document).keyup(function(a){27===a.keyCode&&f===!0&&e&&b()})}})},a(document).ready(function(){a(".materialboxed").materialbox()})}(jQuery),function(a){a.fn.parallax=function(){var b=a(window).width();return this.each(function(c){function d(c){var d;d=601>b?e.height()>0?e.height():e.children("img").height():e.height()>0?e.height():500;var f=e.children("img").first(),g=f.height(),h=g-d,i=e.offset().top+d,j=e.offset().top,k=a(window).scrollTop(),l=window.innerHeight,m=k+l,n=(m-j)/(d+l),o=Math.round(h*n);c&&f.css("display","block"),i>k&&k+l>j&&f.css("transform","translate3D(-50%,"+o+"px, 0)")}var e=a(this);e.addClass("parallax"),e.children("img").one("load",function(){d(!0)}).each(function(){this.complete&&a(this).load()}),a(window).scroll(function(){b=a(window).width(),d(!1)}),a(window).resize(function(){b=a(window).width(),d(!1)})})}}(jQuery),function(a){var b={init:function(){return this.each(function(){var b=a(this);a(window).width(),b.width("100%");var c,d,e=b.find("li.tab a"),f=b.width(),g=Math.max(f,b[0].scrollWidth)/e.length,h=0;c=a(e.filter('[href="'+location.hash+'"]')),0===c.length&&(c=a(this).find("li.tab a.active").first()),0===c.length&&(c=a(this).find("li.tab a").first()),c.addClass("active"),h=e.index(c),0>h&&(h=0),void 0!==c[0]&&(d=a(c[0].hash)),b.append('<div class="indicator"></div>');var i=b.find(".indicator");b.is(":visible")&&(i.css({right:f-(h+1)*g}),i.css({left:h*g})),a(window).resize(function(){f=b.width(),g=Math.max(f,b[0].scrollWidth)/e.length,0>h&&(h=0),0!==g&&0!==f&&(i.css({right:f-(h+1)*g}),i.css({left:h*g}))}),e.not(c).each(function(){a(this.hash).hide()}),b.on("click","a",function(j){if(a(this).parent().hasClass("disabled"))return void j.preventDefault();f=b.width(),g=Math.max(f,b[0].scrollWidth)/e.length,c.removeClass("active"),void 0!==d&&d.hide(),c=a(this),d=a(this.hash),e=b.find("li.tab a"),c.addClass("active");var k=h;h=e.index(a(this)),0>h&&(h=0),void 0!==d&&d.show(),h-k>=0?(i.velocity({right:f-(h+1)*g},{duration:300,queue:!1,easing:"easeOutQuad"}),i.velocity({left:h*g},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(i.velocity({left:h*g},{duration:300,queue:!1,easing:"easeOutQuad"}),i.velocity({right:f-(h+1)*g},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})),j.preventDefault()})})},select_tab:function(a){this.find('a[href="#'+a+'"]').trigger("click")}};a.fn.tabs=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments)},a(document).ready(function(){a("ul.tabs").tabs()})}(jQuery),function(a){a.fn.tooltip=function(c){var d=5,e={delay:350};return"remove"===c?(this.each(function(){a("#"+a(this).attr("data-tooltip-id")).remove(),a(this).off("mouseenter.tooltip mouseleave.tooltip")}),!1):(c=a.extend(e,c),this.each(function(){var e=Materialize.guid(),f=a(this);f.attr("data-tooltip-id",e);var g=a("<span></span>").text(f.attr("data-tooltip")),h=a("<div></div>");h.addClass("material-tooltip").append(g).appendTo(a("body")).attr("id",e);var i=a("<div></div>").addClass("backdrop");i.appendTo(h),i.css({top:0,left:0}),f.off("mouseenter.tooltip mouseleave.tooltip");var j,k=!1;f.on({"mouseenter.tooltip":function(a){var e=f.attr("data-delay");e=void 0===e||""===e?c.delay:e,j=setTimeout(function(){k=!0,h.velocity("stop"),i.velocity("stop"),h.css({display:"block",left:"0px",top:"0px"}),h.children("span").text(f.attr("data-tooltip"));var a,c,e,g=f.outerWidth(),j=f.outerHeight(),l=f.attr("data-position"),m=h.outerHeight(),n=h.outerWidth(),o="0px",p="0px",q=8;"top"===l?(a=f.offset().top-m-d,c=f.offset().left+g/2-n/2,e=b(c,a,n,m),o="-10px",i.css({borderRadius:"14px 14px 0 0",transformOrigin:"50% 90%",marginTop:m,marginLeft:n/2-i.width()/2})):"left"===l?(a=f.offset().top+j/2-m/2,c=f.offset().left-n-d,e=b(c,a,n,m),p="-10px",i.css({width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:m/2,marginLeft:n})):"right"===l?(a=f.offset().top+j/2-m/2,c=f.offset().left+g+d,e=b(c,a,n,m),p="+10px",i.css({width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:m/2,marginLeft:"0px"})):(a=f.offset().top+f.outerHeight()+d,c=f.offset().left+g/2-n/2,e=b(c,a,n,m),o="+10px",i.css({marginLeft:n/2-i.width()/2})),h.css({top:e.y,left:e.x}),q=n/8,8>q&&(q=8),("right"===l||"left"===l)&&(q=n/10,6>q&&(q=6)),h.velocity({marginTop:o,marginLeft:p},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),i.css({display:"block"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scale:q},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})},e)},"mouseleave.tooltip":function(){k=!1,clearTimeout(j),setTimeout(function(){1!=k&&(h.velocity({opacity:0,marginTop:0,marginLeft:0},{duration:225,queue:!1}),i.velocity({opacity:0,scale:1},{duration:225,queue:!1,complete:function(){i.css("display","none"),h.css("display","none"),k=!1}}))},225)}})}))};var b=function(b,c,d,e){var f=b,g=c;return 0>f?f=4:f+d>window.innerWidth&&(f-=f+d-window.innerWidth),0>g?g=4:g+e>window.innerHeight+a(window).scrollTop&&(g-=g+e-window.innerHeight),{x:f,y:g}};a(document).ready(function(){a(".tooltipped").tooltip()})}(jQuery),function(a){"use strict";function b(a){return null!==a&&a===a.window}function c(a){return b(a)?a:9===a.nodeType&&a.defaultView}function d(a){var b,d,e={top:0,left:0},f=a&&a.ownerDocument;return b=f.documentElement,"undefined"!=typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect()),d=c(f),{top:e.top+d.pageYOffset-b.clientTop,left:e.left+d.pageXOffset-b.clientLeft}}function e(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}function f(a){if(k.allowEvent(a)===!1)return null;for(var b=null,c=a.target||a.srcElement;null!==c.parentElement;){if(!(c instanceof SVGElement||-1===c.className.indexOf("waves-effect"))){b=c;break}if(c.classList.contains("waves-effect")){b=c;break}c=c.parentElement}return b}function g(b){var c=f(b);null!==c&&(j.show(b,c),"ontouchstart"in a&&(c.addEventListener("touchend",j.hide,!1),c.addEventListener("touchcancel",j.hide,!1)),c.addEventListener("mouseup",j.hide,!1),c.addEventListener("mouseleave",j.hide,!1))}var h=h||{},i=document.querySelectorAll.bind(document),j={duration:750,show:function(a,b){if(2===a.button)return!1;var c=b||this,f=document.createElement("div");f.className="waves-ripple",c.appendChild(f);var g=d(c),h=a.pageY-g.top,i=a.pageX-g.left,k="scale("+c.clientWidth/100*10+")";"touches"in a&&(h=a.touches[0].pageY-g.top,i=a.touches[0].pageX-g.left),f.setAttribute("data-hold",Date.now()),f.setAttribute("data-scale",k),f.setAttribute("data-x",i),f.setAttribute("data-y",h);var l={top:h+"px",left:i+"px"};f.className=f.className+" waves-notransition",f.setAttribute("style",e(l)),f.className=f.className.replace("waves-notransition",""),l["-webkit-transform"]=k,l["-moz-transform"]=k,l["-ms-transform"]=k,l["-o-transform"]=k,l.transform=k,l.opacity="1",l["-webkit-transition-duration"]=j.duration+"ms",l["-moz-transition-duration"]=j.duration+"ms",l["-o-transition-duration"]=j.duration+"ms",l["transition-duration"]=j.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f.setAttribute("style",e(l))},hide:function(a){k.touchup(a);var b=this,c=(1.4*b.clientWidth,null),d=b.getElementsByClassName("waves-ripple");if(!(d.length>0))return!1;c=d[d.length-1];var f=c.getAttribute("data-x"),g=c.getAttribute("data-y"),h=c.getAttribute("data-scale"),i=Date.now()-Number(c.getAttribute("data-hold")),l=350-i;0>l&&(l=0),setTimeout(function(){var a={top:g+"px",left:f+"px",opacity:"0","-webkit-transition-duration":j.duration+"ms","-moz-transition-duration":j.duration+"ms","-o-transition-duration":j.duration+"ms","transition-duration":j.duration+"ms","-webkit-transform":h,"-moz-transform":h,"-ms-transform":h,"-o-transform":h,transform:h};c.setAttribute("style",e(a)),setTimeout(function(){try{b.removeChild(c)}catch(a){return!1}},j.duration)},l)},wrapInput:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("input"===c.tagName.toLowerCase()){var d=c.parentNode;if("i"===d.tagName.toLowerCase()&&-1!==d.className.indexOf("waves-effect"))continue;var e=document.createElement("i");e.className=c.className+" waves-input-wrapper";var f=c.getAttribute("style");f||(f=""),e.setAttribute("style",f),c.className="waves-button-input",c.removeAttribute("style"),d.replaceChild(e,c),e.appendChild(c)}}}},k={touches:0,allowEvent:function(a){var b=!0;return"touchstart"===a.type?k.touches+=1:"touchend"===a.type||"touchcancel"===a.type?setTimeout(function(){k.touches>0&&(k.touches-=1)},500):"mousedown"===a.type&&k.touches>0&&(b=!1),b},touchup:function(a){k.allowEvent(a)}};h.displayEffect=function(b){b=b||{},"duration"in b&&(j.duration=b.duration),j.wrapInput(i(".waves-effect")),"ontouchstart"in a&&document.body.addEventListener("touchstart",g,!1),document.body.addEventListener("mousedown",g,!1)},h.attach=function(b){"input"===b.tagName.toLowerCase()&&(j.wrapInput([b]),b=b.parentElement),"ontouchstart"in a&&b.addEventListener("touchstart",g,!1),b.addEventListener("mousedown",g,!1)},a.Waves=h,document.addEventListener("DOMContentLoaded",function(){h.displayEffect()},!1)}(window),Materialize.toast=function(a,b,c,d){function e(a){var b=document.createElement("div");if(b.classList.add("toast"),c)for(var e=c.split(" "),f=0,g=e.length;g>f;f++)b.classList.add(e[f]);("object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName)?b.appendChild(a):a instanceof jQuery?b.appendChild(a[0]):b.innerHTML=a;var h=new Hammer(b,{prevent_default:!1});return h.on("pan",function(a){var c=a.deltaX,d=80;b.classList.contains("panning")||b.classList.add("panning");var e=1-Math.abs(c/d);0>e&&(e=0),Vel(b,{left:c,opacity:e},{duration:50,queue:!1,easing:"easeOutQuad"})}),h.on("panend",function(a){var c=a.deltaX,e=80;Math.abs(c)>e?Vel(b,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),b.parentNode.removeChild(b)}}):(b.classList.remove("panning"),Vel(b,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}))}),b}c=c||"";var f=document.getElementById("toast-container");null===f&&(f=document.createElement("div"),f.id="toast-container",document.body.appendChild(f));var g=e(a);a&&f.appendChild(g),g.style.top="35px",g.style.opacity=0,Vel(g,{top:"0px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var h=b,i=setInterval(function(){null===g.parentNode&&window.clearInterval(i),g.classList.contains("panning")||(h-=20),0>=h&&(Vel(g,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),this[0].parentNode.removeChild(this[0])}}),window.clearInterval(i))},20)},function(a){var b={init:function(b){var c={menuWidth:240,edge:"left",closeOnClick:!1};b=a.extend(c,b),a(this).each(function(){function c(c){g=!1,h=!1,a("body").css({overflow:"",width:""}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),"left"===b.edge?(f.css({width:"",right:"",left:"0"}),e.velocity({translateX:"-100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth))}})):(f.css({width:"",right:"0",left:""}),e.velocity({translateX:"100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth))}}))}var d=a(this),e=a("#"+d.attr("data-activates"));240!=b.menuWidth&&e.css("width",b.menuWidth);var f=a('<div class="drag-target"></div>');a("body").append(f),"left"==b.edge?(e.css("transform","translateX(-100%)"),f.css({left:0})):(e.addClass("right-aligned").css("transform","translateX(100%)"),f.css({right:0})),e.hasClass("fixed")&&window.innerWidth>992&&e.css("transform","translateX(0)"),e.hasClass("fixed")&&a(window).resize(function(){window.innerWidth>992?0!=a("#sidenav-overlay").length&&h?c(!0):e.css("transform","translateX(0%)"):h===!1&&("left"===b.edge?e.css("transform","translateX(-100%)"):e.css("transform","translateX(100%)"))}),b.closeOnClick===!0&&e.on("click.itemclick","a:not(.collapsible-header)",function(){c()});var g=!1,h=!1;f.on("click",function(){c()}),f.hammer({prevent_default:!1}).bind("pan",function(d){if("touch"==d.gesture.pointerType){var f=(d.gesture.direction,d.gesture.center.x),g=(d.gesture.center.y,d.gesture.velocityX,a("body")),i=g.innerWidth();if(g.css("overflow","hidden"),g.width(i),0===a("#sidenav-overlay").length){var j=a('<div id="sidenav-overlay"></div>');j.css("opacity",0).click(function(){c()}),a("body").append(j)}if("left"===b.edge&&(f>b.menuWidth?f=b.menuWidth:0>f&&(f=0)),"left"===b.edge)f<b.menuWidth/2?h=!1:f>=b.menuWidth/2&&(h=!0),e.css("transform","translateX("+(f-b.menuWidth)+"px)");else{f<window.innerWidth-b.menuWidth/2?h=!0:f>=window.innerWidth-b.menuWidth/2&&(h=!1);var k=f-b.menuWidth/2;0>k&&(k=0),e.css("transform","translateX("+k+"px)")}var l;"left"===b.edge?(l=f/b.menuWidth,a("#sidenav-overlay").velocity({opacity:l},{duration:10,queue:!1,easing:"easeOutQuad"})):(l=Math.abs((f-window.innerWidth)/b.menuWidth),a("#sidenav-overlay").velocity({opacity:l},{duration:10,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(c){if("touch"==c.gesture.pointerType){var d=c.gesture.velocityX,i=c.gesture.center.x,j=i-b.menuWidth,k=i-b.menuWidth/2;j>0&&(j=0),0>k&&(k=0),g=!1,"left"===b.edge?h&&.3>=d||-.5>d?(0!=j&&e.velocity({translateX:[0,j]},{duration:300,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:0,left:""})):(!h||d>.3)&&(a("body").css({overflow:"",width:""}),e.velocity({translateX:[-1*b.menuWidth-10,j]},{duration:200,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),f.css({width:"10px",right:"",left:0})):h&&d>=-.3||d>.5?(e.velocity({translateX:[0,k]},{duration:300,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:"",left:0})):(!h||-.3>d)&&(a("body").css({overflow:"",width:""}),e.velocity({translateX:[b.menuWidth+10,k]},{duration:200,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),f.css({width:"10px",right:0,left:""}))}}),d.click(function(){if(h===!0)h=!1,g=!1,c();else{var d=a("body"),i=d.innerWidth();d.css("overflow","hidden"),d.width(i),a("body").append(f),"left"===b.edge?(f.css({width:"50%",right:0,left:""}),e.velocity({translateX:[0,-1*b.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})):(f.css({width:"50%",right:"",left:0}),e.velocity({translateX:[0,b.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"}));var j=a('<div id="sidenav-overlay"></div>');j.css("opacity",0).click(function(){h=!1,g=!1,c(),j.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}})}),a("body").append(j),j.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){h=!0,g=!1}})}return!1})})},show:function(){this.trigger("click")},hide:function(){a("#sidenav-overlay").trigger("click")}};a.fn.sideNav=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.sideNav"):b.init.apply(this,arguments)}}(jQuery),function(a){function b(b,c,d,e){var f=a();return a.each(g,function(a,g){if(g.height()>0){var h=g.offset().top,i=g.offset().left,j=i+g.width(),k=h+g.height(),l=!(i>c||e>j||h>d||b>k);l&&f.push(g)}}),f}function c(){++j;var c=f.scrollTop(),d=f.scrollLeft(),e=d+f.width(),g=c+f.height(),i=b(c+k.top+200,e+k.right,g+k.bottom,d+k.left);a.each(i,function(a,b){var c=b.data("scrollSpy:ticks");"number"!=typeof c&&b.triggerHandler("scrollSpy:enter"),b.data("scrollSpy:ticks",j)}),a.each(h,function(a,b){var c=b.data("scrollSpy:ticks");"number"==typeof c&&c!==j&&(b.triggerHandler("scrollSpy:exit"),b.data("scrollSpy:ticks",null))}),h=i}function d(){f.trigger("scrollSpy:winSize")}function e(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:l(),g=null,f=a.apply(d,e),d=e=null};return function(){var j=l();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f}}var f=a(window),g=[],h=[],i=!1,j=0,k={top:0,right:0,bottom:0,left:0},l=Date.now||function(){return(new Date).getTime()};a.scrollSpy=function(b,d){var h=[];b=a(b),b.each(function(b,c){g.push(a(c)),a(c).data("scrollSpy:id",b),a('a[href="#'+a(c).attr("id")+'"]').click(function(b){b.preventDefault();var c=a(this.hash).offset().top+1;a("html, body").animate({scrollTop:c-200},{duration:400,queue:!1,easing:"easeOutCubic"})})}),d=d||{throttle:100},k.top=d.offsetTop||0,k.right=d.offsetRight||0,k.bottom=d.offsetBottom||0,k.left=d.offsetLeft||0;var j=e(c,d.throttle||100),l=function(){a(document).ready(j)};return i||(f.on("scroll",l),f.on("resize",l),i=!0),setTimeout(l,0),b.on("scrollSpy:enter",function(){h=a.grep(h,function(a){return 0!=a.height()});var b=a(this);h[0]?(a('a[href="#'+h[0].attr("id")+'"]').removeClass("active"),b.data("scrollSpy:id")<h[0].data("scrollSpy:id")?h.unshift(a(this)):h.push(a(this))):h.push(a(this)),a('a[href="#'+h[0].attr("id")+'"]').addClass("active")}),b.on("scrollSpy:exit",function(){if(h=a.grep(h,function(a){return 0!=a.height()}),h[0]){a('a[href="#'+h[0].attr("id")+'"]').removeClass("active");var b=a(this);h=a.grep(h,function(a){return a.attr("id")!=b.attr("id")}),h[0]&&a('a[href="#'+h[0].attr("id")+'"]').addClass("active")}}),b},a.winSizeSpy=function(b){return a.winSizeSpy=function(){return f},b=b||{throttle:100},f.on("resize",e(d,b.throttle||100))},a.fn.scrollSpy=function(b){return a.scrollSpy(a(this),b)}}(jQuery),function(a){a(document).ready(function(){function b(b){var c=b.css("font-family"),d=b.css("font-size");d&&e.css("font-size",d),c&&e.css("font-family",c),"off"===b.attr("wrap")&&e.css("overflow-wrap","normal").css("white-space","pre"),e.text(b.val()+"\n");var f=e.html().replace(/\n/g,"<br>");e.html(f),b.is(":visible")?e.css("width",b.width()):e.css("width",a(window).width()/2),b.css("height",e.height())}Materialize.updateTextFields=function(){var b="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(b).each(function(b,c){a(c).val().length>0||c.autofocus||void 0!==a(this).attr("placeholder")||a(c)[0].validity.badInput===!0?a(this).siblings("label, i").addClass("active"):a(this).siblings("label, i").removeClass("active")})};var c="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(document).on("change",c,function(){(0!==a(this).val().length||void 0!==a(this).attr("placeholder"))&&a(this).siblings("label").addClass("active"),validate_field(a(this))}),a(document).ready(function(){Materialize.updateTextFields()}),a(document).on("reset",function(b){var d=a(b.target);d.is("form")&&(d.find(c).removeClass("valid").removeClass("invalid"),d.find(c).each(function(){""===a(this).attr("value")&&a(this).siblings("label, i").removeClass("active")}),d.find("select.initialized").each(function(){var a=d.find("option[selected]").text();d.siblings("input.select-dropdown").val(a)}))}),a(document).on("focus",c,function(){a(this).siblings("label, i").addClass("active")}),a(document).on("blur",c,function(){var b=a(this);0===b.val().length&&b[0].validity.badInput!==!0&&void 0===b.attr("placeholder")&&b.siblings("label, i").removeClass("active"),0===b.val().length&&b[0].validity.badInput!==!0&&void 0!==b.attr("placeholder")&&b.siblings("i").removeClass("active"),validate_field(b)}),window.validate_field=function(a){var b=void 0!==a.attr("length"),c=parseInt(a.attr("length")),d=a.val().length;0===a.val().length&&a[0].validity.badInput===!1?a.hasClass("validate")&&(a.removeClass("valid"),a.removeClass("invalid")):a.hasClass("validate")&&(a.is(":valid")&&b&&c>=d||a.is(":valid")&&!b?(a.removeClass("invalid"),a.addClass("valid")):(a.removeClass("valid"),a.addClass("invalid")))};var d="input[type=radio], input[type=checkbox]";a(document).on("keyup.radio",d,function(b){if(9===b.which){a(this).addClass("tabbed");var c=a(this);return void c.one("blur",function(b){a(this).removeClass("tabbed")})}});var e=a(".hiddendiv").first();e.length||(e=a('<div class="hiddendiv common"></div>'),a("body").append(e));var f=".materialize-textarea";a(f).each(function(){var c=a(this);c.val().length&&b(c)}),a("body").on("keyup keydown autoresize",f,function(){b(a(this))}),a(document).on("change",'.file-field input[type="file"]',function(){for(var b=a(this).closest(".file-field"),c=b.find("input.file-path"),d=a(this)[0].files,e=[],f=0;f<d.length;f++)e.push(d[f].name);c.val(e.join(", ")),c.trigger("change")});var g,h="input[type=range]",i=!1;a(h).each(function(){var b=a('<span class="thumb"><span class="value"></span></span>');a(this).after(b)});var j=".range-field";a(document).on("change",h,function(b){var c=a(this).siblings(".thumb");c.find(".value").html(a(this).val())}),a(document).on("input mousedown touchstart",h,function(b){var c=a(this).siblings(".thumb"),d=a(this).outerWidth();c.length<=0&&(c=a('<span class="thumb"><span class="value"></span></span>'),a(this).after(c)),c.find(".value").html(a(this).val()),i=!0,a(this).addClass("active"),c.hasClass("active")||c.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),"input"!==b.type&&(g=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left,0>g?g=0:g>d&&(g=d),c.addClass("active").css("left",g)),c.find(".value").html(a(this).val())}),a(document).on("mouseup touchend",j,function(){i=!1,a(this).removeClass("active")}),a(document).on("mousemove touchmove",j,function(b){var c,d=a(this).children(".thumb");if(i){d.hasClass("active")||d.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),c=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left;var e=a(this).outerWidth();0>c?c=0:c>e&&(c=e),d.addClass("active").css("left",c),d.find(".value").html(d.siblings(h).val())}}),a(document).on("mouseout touchleave",j,function(){if(!i){var b=a(this).children(".thumb");b.hasClass("active")&&b.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),b.removeClass("active")}})}),a.fn.material_select=function(b){function c(a,b,c){var e=a.indexOf(b),f=-1===e;return f?a.push(b):a.splice(e,1),c.siblings("ul.dropdown-content").find("li").eq(b).toggleClass("active"),c.find("option").eq(b).prop("selected",f),d(a,c),f}function d(a,b){for(var c="",d=0,e=a.length;e>d;d++){var f=b.find("option").eq(a[d]).text();c+=0===d?f:", "+f}""===c&&(c=b.find("option:disabled").eq(0).text()),b.siblings("input.select-dropdown").val(c)}a(this).each(function(){var d=a(this);if(!d.hasClass("browser-default")){var e=!!d.attr("multiple"),f=d.data("select-id");if(f&&(d.parent().find("span.caret").remove(),d.parent().find("input").remove(),d.unwrap(),a("ul#select-options-"+f).remove()),"destroy"===b)return void d.data("select-id",null).removeClass("initialized");var g=Materialize.guid();d.data("select-id",g);var h=a('<div class="select-wrapper"></div>');h.addClass(d.attr("class"));var i=a('<ul id="select-options-'+g+'" class="dropdown-content select-dropdown '+(e?"multiple-select-dropdown":"")+'"></ul>'),j=d.children("option, optgroup"),k=[],l=!1,m=d.find("option:selected").html()||d.find("option:first").html()||"",n=function(b,c,d){var e=c.is(":disabled")?"disabled ":"",f="optgroup-option"===d?"optgroup-option ":"",g=c.data("icon"),h=c.attr("class");if(g){var j="";return h&&(j=' class="'+h+'"'),"multiple"===d?i.append(a('<li class="'+e+'"><img src="'+g+'"'+j+'><span><input type="checkbox"'+e+"/><label></label>"+c.html()+"</span></li>")):i.append(a('<li class="'+e+f+'"><img src="'+g+'"'+j+"><span>"+c.html()+"</span></li>")),!0}"multiple"===d?i.append(a('<li class="'+e+'"><span><input type="checkbox"'+e+"/><label></label>"+c.html()+"</span></li>")):i.append(a('<li class="'+e+f+'"><span>'+c.html()+"</span></li>"))};j.length&&j.each(function(){if(a(this).is("option"))e?n(d,a(this),"multiple"):n(d,a(this));else if(a(this).is("optgroup")){var b=a(this).children("option");i.append(a('<li class="optgroup"><span>'+a(this).attr("label")+"</span></li>")),b.each(function(){n(d,a(this),"optgroup-option")})}}),i.find("li:not(.optgroup)").each(function(f){a(this).click(function(g){if(!a(this).hasClass("disabled")&&!a(this).hasClass("optgroup")){var h=!0;e?(a('input[type="checkbox"]',this).prop("checked",function(a,b){return!b}),h=c(k,a(this).index(),d),q.trigger("focus")):(i.find("li").removeClass("active"),a(this).toggleClass("active"),q.val(a(this).text())),r(i,a(this)),d.find("option").eq(f).prop("selected",h),d.trigger("change"),"undefined"!=typeof b&&b()}g.stopPropagation()})}),d.wrap(h);var o=a('<span class="caret">&#9660;</span>');d.is(":disabled")&&o.addClass("disabled");var p=m.replace(/"/g,"&quot;"),q=a('<input type="text" class="select-dropdown" readonly="true" '+(d.is(":disabled")?"disabled":"")+' data-activates="select-options-'+g+'" value="'+p+'"/>');d.before(q),q.before(o),q.after(i),d.is(":disabled")||q.dropdown({hover:!1,closeOnClick:!1}),d.attr("tabindex")&&a(q[0]).attr("tabindex",d.attr("tabindex")),d.addClass("initialized"),q.on({focus:function(){if(a("ul.select-dropdown").not(i[0]).is(":visible")&&a("input.select-dropdown").trigger("close"),!i.is(":visible")){a(this).trigger("open",["focus"]);var b=a(this).val(),c=i.find("li").filter(function(){return a(this).text().toLowerCase()===b.toLowerCase()})[0];r(i,c)}},click:function(a){a.stopPropagation()}}),q.on("blur",function(){e||a(this).trigger("close"),i.find("li.selected").removeClass("selected")}),i.hover(function(){l=!0},function(){l=!1}),a(window).on({click:function(){e&&(l||q.trigger("close"))}}),e&&d.find("option:selected:not(:disabled)").each(function(){var b=a(this).index();c(k,b,d),i.find("li").eq(b).find(":checkbox").prop("checked",!0)});var r=function(b,c){if(c){b.find("li.selected").removeClass("selected");var d=a(c);d.addClass("selected"),i.scrollTo(d)}},s=[],t=function(b){if(9==b.which)return void q.trigger("close");if(40==b.which&&!i.is(":visible"))return void q.trigger("open");if(13!=b.which||i.is(":visible")){b.preventDefault();var c=String.fromCharCode(b.which).toLowerCase(),d=[9,13,27,38,40];if(c&&-1===d.indexOf(b.which)){s.push(c);var f=s.join(""),g=i.find("li").filter(function(){return 0===a(this).text().toLowerCase().indexOf(f)})[0];g&&r(i,g)}if(13==b.which){var h=i.find("li.selected:not(.disabled)")[0];h&&(a(h).trigger("click"),e||q.trigger("close"))}40==b.which&&(g=i.find("li.selected").length?i.find("li.selected").next("li:not(.disabled)")[0]:i.find("li:not(.disabled)")[0],r(i,g)),27==b.which&&q.trigger("close"),38==b.which&&(g=i.find("li.selected").prev("li:not(.disabled)")[0],g&&r(i,g)),setTimeout(function(){s=[]},1e3)}};q.on("keydown",t)}})}}(jQuery),function(a){var b={init:function(b){var c={indicators:!0,height:400,transition:500,interval:6e3};return b=a.extend(c,b),this.each(function(){function c(a,b){a.hasClass("center-align")?a.velocity({opacity:0,translateY:-100},{duration:b,queue:!1}):a.hasClass("right-align")?a.velocity({opacity:0,translateX:100},{duration:b,queue:!1}):a.hasClass("left-align")&&a.velocity({opacity:0,translateX:-100},{duration:b,queue:!1});
}function d(a){a>=j.length?a=0:0>a&&(a=j.length-1),k=i.find(".active").index(),k!=a&&(e=j.eq(k),$caption=e.find(".caption"),e.removeClass("active"),e.velocity({opacity:0},{duration:b.transition,queue:!1,easing:"easeOutQuad",complete:function(){j.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),c($caption,b.transition),b.indicators&&f.eq(k).removeClass("active"),j.eq(a).velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),j.eq(a).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,delay:b.transition,queue:!1,easing:"easeOutQuad"}),j.eq(a).addClass("active"),b.indicators&&f.eq(a).addClass("active"))}var e,f,g,h=a(this),i=h.find("ul.slides").first(),j=i.find("li"),k=i.find(".active").index();-1!=k&&(e=j.eq(k)),h.hasClass("fullscreen")||(b.indicators?h.height(b.height+40):h.height(b.height),i.height(b.height)),j.find(".caption").each(function(){c(a(this),0)}),j.find("img").each(function(){var b="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";a(this).attr("src")!==b&&(a(this).css("background-image","url("+a(this).attr("src")+")"),a(this).attr("src",b))}),b.indicators&&(f=a('<ul class="indicators"></ul>'),j.each(function(c){var e=a('<li class="indicator-item"></li>');e.click(function(){var c=i.parent(),e=c.find(a(this)).index();d(e),clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval)}),f.append(e)}),h.append(f),f=h.find("ul.indicators").find("li.indicator-item")),e?e.show():(j.first().addClass("active").velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),k=0,e=j.eq(k),b.indicators&&f.eq(k).addClass("active")),e.find("img").each(function(){e.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,queue:!1,easing:"easeOutQuad"})}),g=setInterval(function(){k=i.find(".active").index(),d(k+1)},b.transition+b.interval);var l=!1,m=!1,n=!1;h.hammer({prevent_default:!1}).bind("pan",function(a){if("touch"===a.gesture.pointerType){clearInterval(g);var b=a.gesture.direction,c=a.gesture.deltaX,d=a.gesture.velocityX;$curr_slide=i.find(".active"),$curr_slide.velocity({translateX:c},{duration:50,queue:!1,easing:"easeOutQuad"}),4===b&&(c>h.innerWidth()/2||-.65>d)?n=!0:2===b&&(c<-1*h.innerWidth()/2||d>.65)&&(m=!0);var e;m&&(e=$curr_slide.next(),0===e.length&&(e=j.first()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),n&&(e=$curr_slide.prev(),0===e.length&&(e=j.last()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(a){"touch"===a.gesture.pointerType&&($curr_slide=i.find(".active"),l=!1,curr_index=i.find(".active").index(),!n&&!m||j.length<=1?$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}):m?(d(curr_index+1),$curr_slide.velocity({translateX:-1*h.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):n&&(d(curr_index-1),$curr_slide.velocity({translateX:h.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})),m=!1,n=!1,clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval))}),h.on("sliderPause",function(){clearInterval(g)}),h.on("sliderStart",function(){clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval)}),h.on("sliderNext",function(){k=i.find(".active").index(),d(k+1)}),h.on("sliderPrev",function(){k=i.find(".active").index(),d(k-1)})})},pause:function(){a(this).trigger("sliderPause")},start:function(){a(this).trigger("sliderStart")},next:function(){a(this).trigger("sliderNext")},prev:function(){a(this).trigger("sliderPrev")}};a.fn.slider=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments)}}(jQuery),function(a){a(document).ready(function(){a(document).on("click.card",".card",function(b){a(this).find("> .card-reveal").length&&(a(b.target).is(a(".card-reveal .card-title"))||a(b.target).is(a(".card-reveal .card-title i"))?a(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){a(this).css({display:"none"})}}):(a(b.target).is(a(".card .activator"))||a(b.target).is(a(".card .activator i")))&&(a(b.target).closest(".card").css("overflow","hidden"),a(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"}))),a(".card-reveal").closest(".card").css("overflow","hidden")})})}(jQuery),function(a){a(document).ready(function(){a(document).on("click.chip",".chip .material-icons",function(b){a(this).parent().remove()})})}(jQuery),function(a){a.fn.pushpin=function(b){var c={top:0,bottom:1/0,offset:0};return b=a.extend(c,b),$index=0,this.each(function(){function c(a){a.removeClass("pin-top"),a.removeClass("pinned"),a.removeClass("pin-bottom")}function d(d,e){d.each(function(){b.top<=e&&b.bottom>=e&&!a(this).hasClass("pinned")&&(c(a(this)),a(this).css("top",b.offset),a(this).addClass("pinned")),e<b.top&&!a(this).hasClass("pin-top")&&(c(a(this)),a(this).css("top",0),a(this).addClass("pin-top")),e>b.bottom&&!a(this).hasClass("pin-bottom")&&(c(a(this)),a(this).addClass("pin-bottom"),a(this).css("top",b.bottom-g))})}var e=Materialize.guid(),f=a(this),g=a(this).offset().top;d(f,a(window).scrollTop()),a(window).on("scroll."+e,function(){var c=a(window).scrollTop()+b.offset;d(f,c)})})}}(jQuery),function(a){a(document).ready(function(){a.fn.reverse=[].reverse,a(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(c){var d=a(this);b(d)}),a(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(b){var d=a(this);c(d)}),a(document).on("click.fixedActionBtn",".fixed-action-btn.click-to-toggle > a",function(d){var e=a(this),f=e.parent();f.hasClass("active")?c(f):b(f)})}),a.fn.extend({openFAB:function(){b(a(this))},closeFAB:function(){c(a(this))}});var b=function(b){if($this=b,$this.hasClass("active")===!1){var c,d,e=$this.hasClass("horizontal");e===!0?d=40:c=40,$this.addClass("active"),$this.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:c+"px",translateX:d+"px"},{duration:0});var f=0;$this.find("ul .btn-floating").reverse().each(function(){a(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:f}),f+=40})}},c=function(a){$this=a;var b,c,d=$this.hasClass("horizontal");d===!0?c=40:b=40,$this.removeClass("active"),$this.find("ul .btn-floating").velocity("stop",!0),$this.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:b+"px",translateX:c+"px"},{duration:80})}}(jQuery),function(a){Materialize.fadeInImage=function(b){var c=a(b);c.css({opacity:0}),a(c).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),a(c).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(b,c){c.start=100;var d=b/100,e=150-(100-b)/1.75;100>e&&(e=100),b>=0&&a(this).css({"-webkit-filter":"grayscale("+d+")brightness("+e+"%)",filter:"grayscale("+d+")brightness("+e+"%)"})}})},Materialize.showStaggeredList=function(b){var c=0;a(b).find("li").velocity({translateX:"-100px"},{duration:0}),a(b).find("li").each(function(){a(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:c,easing:[60,10]}),c+=120})},a(document).ready(function(){var b=!1,c=!1;a(".dismissable").each(function(){a(this).hammer({prevent_default:!1}).bind("pan",function(d){if("touch"===d.gesture.pointerType){var e=a(this),f=d.gesture.direction,g=d.gesture.deltaX,h=d.gesture.velocityX;e.velocity({translateX:g},{duration:50,queue:!1,easing:"easeOutQuad"}),4===f&&(g>e.innerWidth()/2||-.75>h)&&(b=!0),2===f&&(g<-1*e.innerWidth()/2||h>.75)&&(c=!0)}}).bind("panend",function(d){if(Math.abs(d.gesture.deltaX)<a(this).innerWidth()/2&&(c=!1,b=!1),"touch"===d.gesture.pointerType){var e=a(this);if(b||c){var f;f=b?e.innerWidth():-1*e.innerWidth(),e.velocity({translateX:f},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){e.css("border","none"),e.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){e.remove()}})}})}else e.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});b=!1,c=!1}})})})}(jQuery),function(a){Materialize.scrollFire=function(a){var b=!1;window.addEventListener("scroll",function(){b=!0}),setInterval(function(){if(b){b=!1;for(var c=window.pageYOffset+window.innerHeight,d=0;d<a.length;d++){var e=a[d],f=e.selector,g=e.offset,h=e.callback,i=document.querySelector(f);if(null!==i){var j=i.getBoundingClientRect().top+window.pageYOffset;if(c>j+g&&e.done!==!0){if("function"==typeof h)h.call(this);else if("string"==typeof h){var k=new Function(h);k()}e.done=!0}}}}},100)}}(jQuery),function(a){"function"==typeof define&&define.amd?define("picker",["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):this.Picker=a(jQuery)}(function(a){function b(f,g,i,l){function m(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",y.component.nodes(t.open),v.box),v.wrap),v.frame),v.holder)}function n(){w.data(g,y).addClass(v.input).attr("tabindex",-1).val(w.data("value")?y.get("select",u.format):f.value),u.editable||w.on("focus."+t.id+" click."+t.id,function(a){a.preventDefault(),y.$root.eq(0).focus()}).on("keydown."+t.id,q),e(f,{haspopup:!0,expanded:!1,readonly:!1,owns:f.id+"_root"})}function o(){y.$root.on({keydown:q,focusin:function(a){y.$root.removeClass(v.focused),a.stopPropagation()},"mousedown click":function(b){var c=b.target;c!=y.$root.children()[0]&&(b.stopPropagation(),"mousedown"!=b.type||a(c).is("input, select, textarea, button, option")||(b.preventDefault(),y.$root.eq(0).focus()))}}).on({focus:function(){w.addClass(v.target)},blur:function(){w.removeClass(v.target)}}).on("focus.toOpen",r).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var b=a(this),c=b.data(),d=b.hasClass(v.navDisabled)||b.hasClass(v.disabled),e=h();e=e&&(e.type||e.href),(d||e&&!a.contains(y.$root[0],e))&&y.$root.eq(0).focus(),!d&&c.nav?y.set("highlight",y.component.item.highlight,{nav:c.nav}):!d&&"pick"in c?y.set("select",c.pick):c.clear?y.clear().close(!0):c.close&&y.close(!0)}),e(y.$root[0],"hidden",!0)}function p(){var b;u.hiddenName===!0?(b=f.name,f.name=""):(b=["string"==typeof u.hiddenPrefix?u.hiddenPrefix:"","string"==typeof u.hiddenSuffix?u.hiddenSuffix:"_submit"],b=b[0]+f.name+b[1]),y._hidden=a('<input type=hidden name="'+b+'"'+(w.data("value")||f.value?' value="'+y.get("select",u.formatSubmit)+'"':"")+">")[0],w.on("change."+t.id,function(){y._hidden.value=f.value?y.get("select",u.formatSubmit):""}),u.container?a(u.container).append(y._hidden):w.after(y._hidden)}function q(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(y.close(),!1):void((32==b||c||!t.open&&y.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?y.clear().close():y.open()))}function r(a){a.stopPropagation(),"focus"==a.type&&y.$root.addClass(v.focused),y.open()}if(!f)return b;var s=!1,t={id:f.id||"P"+Math.abs(~~(Math.random()*new Date))},u=i?a.extend(!0,{},i.defaults,l):l||{},v=a.extend({},b.klasses(),u.klass),w=a(f),x=function(){return this.start()},y=x.prototype={constructor:x,$node:w,start:function(){return t&&t.start?y:(t.methods={},t.start=!0,t.open=!1,t.type=f.type,f.autofocus=f==h(),f.readOnly=!u.editable,f.id=f.id||t.id,"text"!=f.type&&(f.type="text"),y.component=new i(y,u),y.$root=a(b._.node("div",m(),v.picker,'id="'+f.id+'_root" tabindex="0"')),o(),u.formatSubmit&&p(),n(),u.container?a(u.container).append(y.$root):w.after(y.$root),y.on({start:y.component.onStart,render:y.component.onRender,stop:y.component.onStop,open:y.component.onOpen,close:y.component.onClose,set:y.component.onSet}).on({start:u.onStart,render:u.onRender,stop:u.onStop,open:u.onOpen,close:u.onClose,set:u.onSet}),s=c(y.$root.children()[0]),f.autofocus&&y.open(),y.trigger("start").trigger("render"))},render:function(a){return a?y.$root.html(m()):y.$root.find("."+v.box).html(y.component.nodes(t.open)),y.trigger("render")},stop:function(){return t.start?(y.close(),y._hidden&&y._hidden.parentNode.removeChild(y._hidden),y.$root.remove(),w.removeClass(v.input).removeData(g),setTimeout(function(){w.off("."+t.id)},0),f.type=t.type,f.readOnly=!1,y.trigger("stop"),t.methods={},t.start=!1,y):y},open:function(c){return t.open?y:(w.addClass(v.active),e(f,"expanded",!0),setTimeout(function(){y.$root.addClass(v.opened),e(y.$root[0],"hidden",!1)},0),c!==!1&&(t.open=!0,s&&k.css("overflow","hidden").css("padding-right","+="+d()),y.$root.eq(0).focus(),j.on("click."+t.id+" focusin."+t.id,function(a){var b=a.target;b!=f&&b!=document&&3!=a.which&&y.close(b===y.$root.children()[0])}).on("keydown."+t.id,function(c){var d=c.keyCode,e=y.component.key[d],f=c.target;27==d?y.close(!0):f!=y.$root[0]||!e&&13!=d?a.contains(y.$root[0],f)&&13==d&&(c.preventDefault(),f.click()):(c.preventDefault(),e?b._.trigger(y.component.key.go,y,[b._.trigger(e)]):y.$root.find("."+v.highlighted).hasClass(v.disabled)||y.set("select",y.component.item.highlight).close())})),y.trigger("open"))},close:function(a){return a&&(y.$root.off("focus.toOpen").eq(0).focus(),setTimeout(function(){y.$root.on("focus.toOpen",r)},0)),w.removeClass(v.active),e(f,"expanded",!1),setTimeout(function(){y.$root.removeClass(v.opened+" "+v.focused),e(y.$root[0],"hidden",!0)},0),t.open?(t.open=!1,s&&k.css("overflow","").css("padding-right","-="+d()),j.off("."+t.id),y.trigger("close")):y},clear:function(a){return y.set("clear",null,a)},set:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h)f=h[e],e in y.component.item&&(void 0===f&&(f=null),y.component.set(e,f,d)),("select"==e||"clear"==e)&&w.val("clear"==e?"":y.get(e,u.format)).trigger("change");y.render()}return d.muted?y:y.trigger("set",h)},get:function(a,c){if(a=a||"value",null!=t[a])return t[a];if("valueSubmit"==a){if(y._hidden)return y._hidden.value;a="value"}if("value"==a)return f.value;if(a in y.component.item){if("string"==typeof c){var d=y.component.get(a);return d?b._.trigger(y.component.formats.toString,y.component,[c,d]):""}return y.component.get(a)}},on:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h)f=h[e],d&&(e="_"+e),t.methods[e]=t.methods[e]||[],t.methods[e].push(f)}return y},off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;a<namesCount;a+=1)b=c[a],b in t.methods&&delete t.methods[b];return y},trigger:function(a,c){var d=function(a){var d=t.methods[a];d&&d.map(function(a){b._.trigger(a,y,[c])})};return d("_"+a),d(a),y}};return new x}function c(a){var b,c="position";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),"fixed"==b}function d(){if(k.height()<=i.height())return 0;var b=a('<div style="visibility:hidden;width:100px" />').appendTo("body"),c=b[0].offsetWidth;b.css("overflow","scroll");var d=a('<div style="width:100%" />').appendTo(b),e=d[0].offsetWidth;return b.remove(),c-e}function e(b,c,d){if(a.isPlainObject(c))for(var e in c)f(b,e,c[e]);else f(b,c,d)}function f(a,b,c){a.setAttribute(("role"==b?"":"aria-")+b,c)}function g(b,c){a.isPlainObject(b)||(b={attribute:c}),c="";for(var d in b){var e=("role"==d?"":"aria-")+d,f=b[d];c+=null==f?"":e+'="'+b[d]+'"'}return c}function h(){try{return document.activeElement}catch(a){}}var i=a(window),j=a(document),k=a(document.documentElement);return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",target:a+"__input--target",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},b._={group:function(a){for(var c,d="",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);return d},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},lead:function(a){return(10>a?"0":"")+a},trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\d/.test(a[1])?2:1},isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate())},isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&a%1===0},ariaAttr:g},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return"picker"==e?g:g&&"string"==typeof e?b._.trigger(g[e],g,[f]):this.each(function(){var f=a(this);f.data(c)||new b(this,c,d,e)})},a.fn[c].defaults=d.defaults},b}),function(a){"function"==typeof define&&define.amd?define(["picker","jquery"],a):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0],e=d.value,f=a.$node.data("value"),g=f||e,h=f?b.formatSubmit:b.format,i=function(){return d.currentStyle?"rtl"==d.currentStyle.direction:"rtl"==getComputedStyle(a.$root[0]).direction};c.settings=b,c.$node=a.$node,c.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),g?c.set("select",g,{format:h}):c.set("select",null).set("highlight",c.item.now),c.key={40:7,38:-7,39:function(){return i()?-1:1},37:function(){return i()?1:-1},go:function(a){var b=c.item.highlight,d=new Date(b.year,b.month,b.date+a);c.set("highlight",d,{interval:a}),this.render()}},a.on("render",function(){a.$root.find("."+b.klass.selectMonth).on("change",function(){var c=this.value;c&&(a.set("highlight",[a.get("view").year,c,a.get("highlight").date]),a.$root.find("."+b.klass.selectMonth).trigger("focus"))}),a.$root.find("."+b.klass.selectYear).on("change",function(){var c=this.value;c&&(a.set("highlight",[c,a.get("view").month,a.get("highlight").date]),a.$root.find("."+b.klass.selectYear).trigger("focus"))})},1).on("open",function(){var d="";c.disabled(c.get("now"))&&(d=":not(."+b.klass.buttonToday+")"),a.$root.find("button"+d+", select").attr("disabled",!1)},1).on("close",function(){a.$root.find("button, select").attr("disabled",!0)},1)}var d=7,e=6,f=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,d){var e,g=this;return c=void 0===c?a:c,c==-(1/0)||c==1/0?e=c:b.isPlainObject(c)&&f.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(c[0],c[1],c[2]),c=f.isDate(c)?c:g.create().obj):c=f.isInteger(c)||f.isDate(c)?g.normalize(new Date(c),d):g.now(a,c,d),{year:e||c.getFullYear(),month:e||c.getMonth(),date:e||c.getDate(),day:e||c.getDay(),obj:e||c,pick:e||c.getTime()}},c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||f.isDate(a)?d.create(a):a};return f.isInteger(a)||(a=e(a)),f.isInteger(c)||(c=e(c)),f.isInteger(a)&&b.isPlainObject(c)?a=[c.year,c.month,c.date+a]:f.isInteger(c)&&b.isPlainObject(a)&&(c=[a.year,a.month,a.date+c]),{from:e(a),to:e(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b,c){return b=new Date,c&&c.rel&&b.setDate(b.getDate()+c.rel),this.normalize(b,c)},c.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isPlainObject(c),k=this.item.view;if(i||j){for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),e=new Date(f,g+(d&&d.nav?d.nav:0),1),f=e.getFullYear(),g=e.getMonth();new Date(f,g,h).getMonth()!==g;)h-=1;c=[f,g,h]}return c},c.prototype.normalize=function(a){return a.setHours(0,0,0,0),a},c.prototype.measure=function(a,b){var c=this;return b?"string"==typeof b?b=c.parse(a,b):f.isInteger(b)&&(b=c.now(a,b,{rel:b})):b="min"==a?-(1/0):1/0,b},c.prototype.viewset=function(a,b){return this.create([b.year,b.month,1])},c.prototype.validate=function(a,c,d){var e,g,h,i,j=this,k=c,l=d&&d.interval?d.interval:1,m=-1===j.item.enable,n=j.item.min,o=j.item.max,p=m&&j.item.disable.filter(function(a){if(b.isArray(a)){var d=j.create(a).pick;d<c.pick?e=!0:d>c.pick&&(g=!0)}return f.isInteger(a)}).length;if((!d||!d.nav)&&(!m&&j.disabled(c)||m&&j.disabled(c)&&(p||e||g)||!m&&(c.pick<=n.pick||c.pick>=o.pick)))for(m&&!p&&(!g&&l>0||!e&&0>l)&&(l*=-1);j.disabled(c)&&(Math.abs(l)>1&&(c.month<k.month||c.month>k.month)&&(c=k,l=l>0?1:-1),c.pick<=n.pick?(h=!0,l=1,c=j.create([n.year,n.month,n.date+(c.pick===n.pick?0:-1)])):c.pick>=o.pick&&(i=!0,l=-1,c=j.create([o.year,o.month,o.date+(c.pick===o.pick?0:1)])),!h||!i);)c=j.create([c.year,c.month,c.date+l]);return c},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return f.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||f.isDate(d)?a.pick===c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[3]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.parse=function(a,b,c){var d=this,e={};return b&&"string"==typeof b?(c&&c.format||(c=c||{},c.format=d.settings.format),d.formats.toArray(c.format).map(function(a){var c=d.formats[a],g=c?f.trigger(c,d,[b,e]):a.replace(/^!/,"").length;c&&(e[a]=b.substr(0,g)),b=b.substr(g)}),[e.yyyy||e.yy,+(e.mm||e.m)-1,e.dd||e.d]):b},c.prototype.formats=function(){function a(a,b,c){var d=a.match(/\w+/)[0];return c.mm||c.m||(c.m=b.indexOf(d)+1),d.length}function b(a){return a.match(/\w+/)[0].length}return{d:function(a,b){return a?f.digits(a):b.date},dd:function(a,b){return a?2:f.lead(b.date)},ddd:function(a,c){return a?b(a):this.settings.weekdaysShort[c.day]},dddd:function(a,c){return a?b(a):this.settings.weekdaysFull[c.day]},m:function(a,b){return a?f.digits(a):b.month+1},mm:function(a,b){return a?2:f.lead(b.month+1)},mmm:function(b,c){var d=this.settings.monthsShort;return b?a(b,d,c):d[c.month]},mmmm:function(b,c){var d=this.settings.monthsFull;return b?a(b,d,c):d[c.month]},yy:function(a,b){return a?2:(""+b.year).slice(2)},yyyy:function(a,b){return a?4:b.year},toArray:function(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return f.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}}}(),c.prototype.isDateExact=function(a,c){var d=this;return f.isInteger(a)&&f.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(f.isDate(a)||b.isArray(a))&&(f.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isPlainObject(a)&&b.isPlainObject(c)?d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to):!1},c.prototype.isDateOverlap=function(a,c){var d=this,e=d.settings.firstDay?1:0;return f.isInteger(a)&&(f.isDate(c)||b.isArray(c))?(a=a%7+e,a===d.create(c).day+1):f.isInteger(c)&&(f.isDate(a)||b.isArray(a))?(c=c%7+e,c===d.create(a).day+1):b.isPlainObject(a)&&b.isPlainObject(c)?d.overlapRanges(a,c):!1},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,g=0;g<e.length;g+=1)if(d.isDateExact(a,e[g])){c=!0;break}c||(f.isInteger(a)||f.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a)}),e},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,g=e.length;return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,h,i,j;for(i=0;g>i;i+=1){if(h=e[i],d.isDateExact(h,a)){c=e[i]=null,j=!0;break}if(d.isDateOverlap(h,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push("inverted")):f.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;g>i;i+=1)if(d.isDateExact(e[i],a)){e[i]=null;break}if(j)for(i=0;g>i;i+=1)if(d.isDateOverlap(e[i],a)){e[i]=null;break}c&&e.push(c)}),e.filter(function(a){return null!=a})},c.prototype.nodes=function(a){var b=this,c=b.settings,g=b.item,h=g.now,i=g.select,j=g.highlight,k=g.view,l=g.disable,m=g.min,n=g.max,o=function(a,b){return c.firstDay&&(a.push(a.shift()),b.push(b.shift())),f.node("thead",f.node("tr",f.group({min:0,max:d-1,i:1,node:"th",item:function(d){return[a[d],c.klass.weekdays,'scope=col title="'+b[d]+'"']}})))}((c.showWeekdaysFull?c.weekdaysFull:c.weekdaysLetter).slice(0),c.weekdaysFull.slice(0)),p=function(a){return f.node("div"," ",c.klass["nav"+(a?"Next":"Prev")]+(a&&k.year>=n.year&&k.month>=n.month||!a&&k.year<=m.year&&k.month<=m.month?" "+c.klass.navDisabled:""),"data-nav="+(a||-1)+" "+f.ariaAttr({role:"button",controls:b.$node[0].id+"_table"})+' title="'+(a?c.labelMonthNext:c.labelMonthPrev)+'"')},q=function(d){var e=c.showMonthsShort?c.monthsShort:c.monthsFull;return"short_months"==d&&(e=c.monthsShort),c.selectMonths&&void 0==d?f.node("select",f.group({min:0,max:11,i:1,node:"option",item:function(a){return[e[a],0,"value="+a+(k.month==a?" selected":"")+(k.year==m.year&&a<m.month||k.year==n.year&&a>n.month?" disabled":"")]}}),c.klass.selectMonth+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelMonthSelect+'"'):"short_months"==d?null!=i?f.node("div",e[i.month]):f.node("div",e[k.month]):f.node("div",e[k.month],c.klass.month)},r=function(d){var e=k.year,g=c.selectYears===!0?5:~~(c.selectYears/2);if(g){var h=m.year,i=n.year,j=e-g,l=e+g;if(h>j&&(l+=h-j,j=h),l>i){var o=j-h,p=l-i;j-=o>p?p:o,l=i}if(c.selectYears&&void 0==d)return f.node("select",f.group({min:j,max:l,i:1,node:"option",item:function(a){return[a,0,"value="+a+(e==a?" selected":"")]}}),c.klass.selectYear+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelYearSelect+'"')}return"raw"==d?f.node("div",e):f.node("div",e,c.klass.year)};return createDayLabel=function(){return null!=i?f.node("div",i.date):f.node("div",h.date)},createWeekdayLabel=function(){var a;a=null!=i?i.day:h.day;var b=c.weekdaysFull[a];return b},f.node("div",f.node("div",createWeekdayLabel(),"picker__weekday-display")+f.node("div",q("short_months"),c.klass.month_display)+f.node("div",createDayLabel(),c.klass.day_display)+f.node("div",r("raw"),c.klass.year_display),c.klass.date_display)+f.node("div",f.node("div",(c.selectYears?q()+r():q()+r())+p()+p(1),c.klass.header)+f.node("table",o+f.node("tbody",f.group({min:0,max:e-1,i:1,node:"tr",item:function(a){var e=c.firstDay&&0===b.create([k.year,k.month,1]).day?-7:0;return[f.group({min:d*a-k.day+e+1,max:function(){return this.min+d-1},i:1,node:"td",item:function(a){a=b.create([k.year,k.month,a+(c.firstDay?1:0)]);var d=i&&i.pick==a.pick,e=j&&j.pick==a.pick,g=l&&b.disabled(a)||a.pick<m.pick||a.pick>n.pick,o=f.trigger(b.formats.toString,b,[c.format,a]);return[f.node("div",a.date,function(b){return b.push(k.month==a.month?c.klass.infocus:c.klass.outfocus),h.pick==a.pick&&b.push(c.klass.now),d&&b.push(c.klass.selected),e&&b.push(c.klass.highlighted),g&&b.push(c.klass.disabled),b.join(" ")}([c.klass.day]),"data-pick="+a.pick+" "+f.ariaAttr({role:"gridcell",label:o,selected:d&&b.$node.val()===o?!0:null,activedescendant:e?!0:null,disabled:g?!0:null})),"",f.ariaAttr({role:"presentation"})]}})]}})),c.klass.table,'id="'+b.$node[0].id+'_table" '+f.ariaAttr({role:"grid",controls:b.$node[0].id,readonly:!0})),c.klass.calendar_container)+f.node("div",f.node("button",c.today,"btn-flat picker__today","type=button data-pick="+h.pick+(a&&!b.disabled(h)?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.clear,"btn-flat picker__clear","type=button data-clear=1"+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.close,"btn-flat picker__close","type=button data-close=true "+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id})),c.klass.footer)},c.defaults=function(a){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:a+"table",header:a+"header",date_display:a+"date-display",day_display:a+"day-display",month_display:a+"month-display",year_display:a+"year-display",calendar_container:a+"calendar-container",navPrev:a+"nav--prev",navNext:a+"nav--next",navDisabled:a+"nav--disabled",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",day:a+"day",disabled:a+"day--disabled",selected:a+"day--selected",highlighted:a+"day--highlighted",now:a+"day--today",infocus:a+"day--infocus",outfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear",buttonToday:a+"button--today",buttonClose:a+"button--close"}}}(a.klasses().picker+"__"),a.extend("pickadate",c)}),function(a){function b(){var b=+a(this).attr("length"),c=+a(this).val().length,d=b>=c;a(this).parent().find('span[class="character-counter"]').html(c+"/"+b),e(d,a(this))}function c(b){var c=b.parent().find('span[class="character-counter"]');c.length||(c=a("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1),b.parent().append(c))}function d(){a(this).parent().find('span[class="character-counter"]').html("")}function e(a,b){var c=b.hasClass("invalid");a&&c?b.removeClass("invalid"):a||c||(b.removeClass("valid"),b.addClass("invalid"))}a.fn.characterCounter=function(){return this.each(function(){var e=a(this),f=e.parent().find('span[class="character-counter"]');if(!f.length){var g=void 0!==e.attr("length");g&&(e.on("input",b),e.on("focus",b),e.on("blur",d),c(e))}})},a(document).ready(function(){a("input, textarea").characterCounter()})}(jQuery),function(a){var b={init:function(b){var c={time_constant:200,dist:-100,shift:0,padding:0,full_width:!1};return b=a.extend(c,b),this.each(function(){function c(){"undefined"!=typeof window.ontouchstart&&(F[0].addEventListener("touchstart",k),F[0].addEventListener("touchmove",l),F[0].addEventListener("touchend",m)),F[0].addEventListener("mousedown",k),F[0].addEventListener("mousemove",l),F[0].addEventListener("mouseup",m),F[0].addEventListener("click",j)}function d(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientX:a.clientX}function e(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientY:a.clientY;
}function f(a){return a>=s?a%s:0>a?f(s+a%s):a}function g(a){var c,d,e,g,h,i,j;for(o="number"==typeof a?a:o,p=Math.floor((o+r/2)/r),e=o-p*r,g=0>e?1:-1,h=-g*e*2/r,b.full_width?j="translateX(0)":(j="translateX("+(F[0].clientWidth-item_width)/2+"px) ",j+="translateY("+(F[0].clientHeight-item_width)/2+"px)"),i=n[f(p)],i.style[z]=j+" translateX("+-e/2+"px) translateX("+g*b.shift*h*c+"px) translateZ("+b.dist*h+"px)",i.style.zIndex=0,b.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*h,i.style.opacity=tweenedOpacity,d=s>>1,c=1;d>=c;++c)b.full_width?(zTranslation=b.dist,tweenedOpacity=c===d&&0>e?1-h:1):(zTranslation=b.dist*(2*c+h*g),tweenedOpacity=1-.2*(2*c+h*g)),i=n[f(p+c)],i.style[z]=j+" translateX("+(b.shift+(r*c-e)/2)+"px) translateZ("+zTranslation+"px)",i.style.zIndex=-c,i.style.opacity=tweenedOpacity,b.full_width?(zTranslation=b.dist,tweenedOpacity=c===d&&e>0?1-h:1):(zTranslation=b.dist*(2*c-h*g),tweenedOpacity=1-.2*(2*c-h*g)),i=n[f(p-c)],i.style[z]=j+" translateX("+(-b.shift+(-r*c-e)/2)+"px) translateZ("+zTranslation+"px)",i.style.zIndex=-c,i.style.opacity=tweenedOpacity;i=n[f(p)],i.style[z]=j+" translateX("+-e/2+"px) translateX("+g*b.shift*h+"px) translateZ("+b.dist*h+"px)",i.style.zIndex=0,b.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*h,i.style.opacity=tweenedOpacity}function h(){var a,b,c,d;a=Date.now(),b=a-B,B=a,c=o-A,A=o,d=1e3*c/(1+b),x=.8*d+.2*x}function i(){var a,c;v&&(a=Date.now()-B,c=v*Math.exp(-a/b.time_constant),c>2||-2>c?(g(w-c),requestAnimationFrame(i)):g(w))}function j(c){if(D)return c.preventDefault(),c.stopPropagation(),!1;if(!b.full_width){var d=a(c.target).closest(".carousel-item").index(),e=p%s-d;0>e?Math.abs(e+s)<Math.abs(e)&&(e+=s):e>0&&Math.abs(e-s)<e&&(e-=s),0>e?a(this).trigger("carouselNext",[Math.abs(e)]):e>0&&a(this).trigger("carouselPrev",[e])}}function k(a){q=!0,D=!1,E=!1,t=d(a),u=e(a),x=v=0,A=o,B=Date.now(),clearInterval(C),C=setInterval(h,100)}function l(a){var b,c,f;if(q)if(b=d(a),y=e(a),c=t-b,f=Math.abs(u-y),30>f&&!E)(c>2||-2>c)&&(D=!0,t=b,g(o+c));else{if(D)return a.preventDefault(),a.stopPropagation(),!1;E=!0}return D?(a.preventDefault(),a.stopPropagation(),!1):void 0}function m(a){return q=!1,clearInterval(C),w=o,(x>10||-10>x)&&(v=.9*x,w=o+v),w=Math.round(w/r)*r,v=w-o,B=Date.now(),requestAnimationFrame(i),a.preventDefault(),a.stopPropagation(),!1}var n,o,p,q,r,s,t,u,v,w,x,z,A,B,C,D,E,F=a(this);return F.hasClass("initialized")?!0:(b.full_width&&(b.dist=0,imageHeight=F.find(".carousel-item img").first().load(function(){F.css("height",a(this).height())})),F.addClass("initialized"),q=!1,o=w=0,n=[],item_width=F.find(".carousel-item").first().innerWidth(),r=2*item_width+b.padding,F.find(".carousel-item").each(function(){n.push(a(this)[0])}),s=n.length,z="transform",["webkit","Moz","O","ms"].every(function(a){var b=a+"Transform";return"undefined"!=typeof document.body.style[b]?(z=b,!1):!0}),window.onresize=g,c(),g(o),a(this).on("carouselNext",function(a,b){void 0===b&&(b=1),w=o+r*b,o!==w&&(v=w-o,B=Date.now(),requestAnimationFrame(i))}),void a(this).on("carouselPrev",function(a,b){void 0===b&&(b=1),w=o-r*b,o!==w&&(v=w-o,B=Date.now(),requestAnimationFrame(i))}))})},next:function(b){a(this).trigger("carouselNext",[b])},prev:function(b){a(this).trigger("carouselPrev",[b])}};a.fn.carousel=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.carousel"):b.init.apply(this,arguments)}}(jQuery),/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
function(factory){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module.
define(["jquery"],factory):
// Browser globals
factory(jQuery)}(function($){
// selectors
function focusable(element,isTabIndexNotNaN){var map,mapName,img,nodeName=element.nodeName.toLowerCase();
// the element and all of its ancestors must be visible
return"area"===nodeName?(map=element.parentNode,mapName=map.name,element.href&&mapName&&"map"===map.nodeName.toLowerCase()?(img=$("img[usemap='#"+mapName+"']")[0],!!img&&visible(img)):!1):(/^(input|select|textarea|button|object)$/.test(nodeName)?!element.disabled:"a"===nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&visible(element)}function visible(element){return $.expr.filters.visible(element)&&!$(element).parents().addBack().filter(function(){return"hidden"===$.css(this,"visibility")}).length}function datepicker_getZindex(elem){for(var position,value;elem.length&&elem[0]!==document;){if(position=elem.css("position"),("absolute"===position||"relative"===position||"fixed"===position)&&(value=parseInt(elem.css("zIndex"),10),!isNaN(value)&&0!==value))return value;elem=elem.parent()}return 0}/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */
function Datepicker(){this._curInst=null,// The current instance in use
this._keyEvent=!1,// If the last event was a key event
this._disabledInputs=[],// List of date picker inputs that have been disabled
this._datepickerShowing=!1,// True if the popup picker is showing , false if not
this._inDialog=!1,// True if showing within a "dialog", false if not
this._mainDivId="ui-datepicker-div",// The ID of the main datepicker division
this._inlineClass="ui-datepicker-inline",// The name of the inline marker class
this._appendClass="ui-datepicker-append",// The name of the append marker class
this._triggerClass="ui-datepicker-trigger",// The name of the trigger marker class
this._dialogClass="ui-datepicker-dialog",// The name of the dialog marker class
this._disableClass="ui-datepicker-disabled",// The name of the disabled covering marker class
this._unselectableClass="ui-datepicker-unselectable",// The name of the unselectable cell marker class
this._currentClass="ui-datepicker-current-day",// The name of the current day marker class
this._dayOverClass="ui-datepicker-days-cell-over",// The name of the day hover marker class
this.regional=[],// Available regional settings, indexed by language code
this.regional[""]={// Default regional settings
closeText:"Done",// Display text for close link
prevText:"Prev",// Display text for previous month link
nextText:"Next",// Display text for next month link
currentText:"Today",// Display text for current month link
monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],// Names of months for drop-down and formatting
monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],// For formatting
dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],// For formatting
dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],// For formatting
dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],// Column headings for days starting at Sunday
weekHeader:"Wk",// Column header for week of the year
dateFormat:"mm/dd/yy",// See format options on parseDate
firstDay:0,// The first day of the week, Sun = 0, Mon = 1, ...
isRTL:!1,// True if right-to-left language, false if left-to-right
showMonthAfterYear:!1,// True if the year select precedes month, false for month then year
yearSuffix:""},this._defaults={// Global defaults for all the date picker instances
showOn:"focus",// "focus" for popup on focus,
// "button" for trigger button, or "both" for either
showAnim:"fadeIn",// Name of jQuery animation for popup
showOptions:{},// Options for enhanced animations
defaultDate:null,// Used when field is blank: actual date,
// +/-number for offset from today, null for today
appendText:"",// Display text following the input box, e.g. showing the format
buttonText:"...",// Text for trigger button
buttonImage:"",// URL for trigger button image
buttonImageOnly:!1,// True if the image appears alone, false if it appears on a button
hideIfNoPrevNext:!1,// True to hide next/previous month links
// if not applicable, false to just disable them
navigationAsDateFormat:!1,// True if date formatting applied to prev/today/next links
gotoCurrent:!1,// True if today link goes back to current selection instead
changeMonth:!1,// True if month can be selected directly, false if only prev/next
changeYear:!1,// True if year can be selected directly, false if only prev/next
yearRange:"c-10:c+10",// Range of years to display in drop-down,
// either relative to today's year (-nn:+nn), relative to currently displayed year
// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
showOtherMonths:!1,// True to show dates in other months, false to leave blank
selectOtherMonths:!1,// True to allow selection of dates in other months, false for unselectable
showWeek:!1,// True to show week of the year, false to not show it
calculateWeek:this.iso8601Week,// How to calculate the week of the year,
// takes a Date and returns the number of the week for it
shortYearCutoff:"+10",// Short year values < this are in the current century,
// > this are in the previous century,
// string value starting with "+" for current year + value
minDate:null,// The earliest selectable date, or null for no limit
maxDate:null,// The latest selectable date, or null for no limit
duration:"fast",// Duration of display/closure
beforeShowDay:null,// Function that takes a date and returns an array with
// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
// [2] = cell title (optional), e.g. $.datepicker.noWeekends
beforeShow:null,// Function that takes an input field and
// returns a set of custom settings for the date picker
onSelect:null,// Define a callback function when a date is selected
onChangeMonthYear:null,// Define a callback function when the month or year is changed
onClose:null,// Define a callback function when the datepicker is closed
numberOfMonths:1,// Number of months to show at a time
showCurrentAtPos:0,// The position in multipe months at which to show the current month (starting at 0)
stepMonths:1,// Number of months to step back/forward
stepBigMonths:12,// Number of months to step back/forward for the big links
altField:"",// Selector for an alternate field to store selected dates into
altFormat:"",// The date format to use for the alternate field
constrainInput:!0,// The input is constrained by the current date format
showButtonPanel:!1,// True to show button panel, false to not show it
autoSize:!1,// True to size the input for the date format, false to leave as is
disabled:!1},$.extend(this._defaults,this.regional[""]),this.regional.en=$.extend(!0,{},this.regional[""]),this.regional["en-US"]=$.extend(!0,{},this.regional.en),this.dpDiv=datepicker_bindHover($("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function datepicker_bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.delegate(selector,"mouseout",function(){$(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&$(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&$(this).removeClass("ui-datepicker-next-hover")}).delegate(selector,"mouseover",datepicker_handleMouseover)}function datepicker_handleMouseover(){$.datepicker._isDisabledDatepicker(datepicker_instActive.inline?datepicker_instActive.dpDiv.parent()[0]:datepicker_instActive.input[0])||($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),$(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&$(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&$(this).addClass("ui-datepicker-next-hover"))}/* jQuery extend now ignores nulls! */
function datepicker_extendRemove(target,props){$.extend(target,props);for(var name in props)null==props[name]&&(target[name]=props[name]);return target}/*!
 * jQuery UI Spinner 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/spinner/
 */
function spinner_modifier(fn){return function(){var previous=this.element.val();fn.apply(this,arguments),this._refresh(),previous!==this.element.val()&&this._trigger("change")}}/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui=$.ui||{},$.extend($.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),
// plugins
$.fn.extend({scrollParent:function(includeHidden){var position=this.css("position"),excludeStaticParent="absolute"===position,overflowRegex=includeHidden?/(auto|scroll|hidden)/:/(auto|scroll)/,scrollParent=this.parents().filter(function(){var parent=$(this);return excludeStaticParent&&"static"===parent.css("position")?!1:overflowRegex.test(parent.css("overflow")+parent.css("overflow-y")+parent.css("overflow-x"))}).eq(0);return"fixed"!==position&&scrollParent.length?scrollParent:$(this[0].ownerDocument||document)},uniqueId:function(){var uuid=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++uuid)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&$(this).removeAttr("id")})}}),$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName)}}):
// support: jQuery <1.8
function(elem,i,match){return!!$.data(elem,match[3])},focusable:function(element){return focusable(element,!isNaN($.attr(element,"tabindex")))},tabbable:function(element){var tabIndex=$.attr(element,"tabindex"),isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&focusable(element,!isTabIndexNaN)}}),
// support: jQuery <1.8
$("<a>").outerWidth(1).jquery||$.each(["Width","Height"],function(i,name){function reduce(elem,size,border,margin){return $.each(side,function(){size-=parseFloat($.css(elem,"padding"+this))||0,border&&(size-=parseFloat($.css(elem,"border"+this+"Width"))||0),margin&&(size-=parseFloat($.css(elem,"margin"+this))||0)}),size}var side="Width"===name?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};$.fn["inner"+name]=function(size){return void 0===size?orig["inner"+name].call(this):this.each(function(){$(this).css(type,reduce(this,size)+"px")})},$.fn["outer"+name]=function(size,margin){return"number"!=typeof size?orig["outer"+name].call(this,size):this.each(function(){$(this).css(type,reduce(this,size,!0,margin)+"px")})}}),
// support: jQuery <1.8
$.fn.addBack||($.fn.addBack=function(selector){return this.add(null==selector?this.prevObject:this.prevObject.filter(selector))}),
// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
$("<a>").data("a-b","a").removeData("a-b").data("a-b")&&($.fn.removeData=function(removeData){return function(key){return arguments.length?removeData.call(this,$.camelCase(key)):removeData.call(this)}}($.fn.removeData)),
// deprecated
$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),$.fn.extend({focus:function(orig){return function(delay,fn){return"number"==typeof delay?this.each(function(){var elem=this;setTimeout(function(){$(elem).focus(),fn&&fn.call(elem)},delay)}):orig.apply(this,arguments)}}($.fn.focus),disableSelection:function(){var eventType="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(eventType+".ui-disableSelection",function(event){event.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(zIndex){if(void 0!==zIndex)return this.css("zIndex",zIndex);if(this.length)for(var position,value,elem=$(this[0]);elem.length&&elem[0]!==document;){if(position=elem.css("position"),("absolute"===position||"relative"===position||"fixed"===position)&&(value=parseInt(elem.css("zIndex"),10),!isNaN(value)&&0!==value))return value;elem=elem.parent()}return 0}}),
// $.ui.plugin is deprecated. Use $.widget() extensions instead.
$.ui.plugin={add:function(module,option,set){var i,proto=$.ui[module].prototype;for(i in set)proto.plugins[i]=proto.plugins[i]||[],proto.plugins[i].push([option,set[i]])},call:function(instance,name,args,allowDisconnected){var i,set=instance.plugins[name];if(set&&(allowDisconnected||instance.element[0].parentNode&&11!==instance.element[0].parentNode.nodeType))for(i=0;i<set.length;i++)instance.options[set[i][0]]&&set[i][1].apply(instance.element,args)}};/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
var widget_uuid=0,widget_slice=Array.prototype.slice;$.cleanData=function(orig){return function(elems){var events,elem,i;for(i=0;null!=(elem=elems[i]);i++)try{
// Only trigger remove when necessary to save time
events=$._data(elem,"events"),events&&events.remove&&$(elem).triggerHandler("remove")}catch(e){}orig(elems)}}($.cleanData),$.widget=function(name,base,prototype){var fullName,existingConstructor,constructor,basePrototype,
// proxiedPrototype allows the provided prototype to remain unmodified
// so that it can be used as a mixin for multiple widgets (#8876)
proxiedPrototype={},namespace=name.split(".")[0];
// create selector for plugin
// extend with the existing constructor to carry over any static properties
// we need to make the options hash a property directly on the new instance
// otherwise we'll modify the options hash on the prototype that we're
// inheriting from
// If this widget is being redefined then we need to find all widgets that
// are inheriting from it and redefine all of them so that they inherit from
// the new version of this widget. We're essentially trying to replace one
// level in the prototype chain.
// remove the list of existing child constructors from the old constructor
// so the old child constructors can be garbage collected
return name=name.split(".")[1],fullName=namespace+"-"+name,prototype||(prototype=base,base=$.Widget),$.expr[":"][fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName)},$[namespace]=$[namespace]||{},existingConstructor=$[namespace][name],constructor=$[namespace][name]=function(options,element){return this._createWidget?void(arguments.length&&this._createWidget(options,element)):new constructor(options,element)},$.extend(constructor,existingConstructor,{version:prototype.version,_proto:$.extend({},prototype),_childConstructors:[]}),basePrototype=new base,basePrototype.options=$.widget.extend({},basePrototype.options),$.each(prototype,function(prop,value){return $.isFunction(value)?void(proxiedPrototype[prop]=function(){var _super=function(){return base.prototype[prop].apply(this,arguments)},_superApply=function(args){return base.prototype[prop].apply(this,args)};return function(){var returnValue,__super=this._super,__superApply=this._superApply;return this._super=_super,this._superApply=_superApply,returnValue=value.apply(this,arguments),this._super=__super,this._superApply=__superApply,returnValue}}()):void(proxiedPrototype[prop]=value)}),constructor.prototype=$.widget.extend(basePrototype,{widgetEventPrefix:existingConstructor?basePrototype.widgetEventPrefix||name:name},proxiedPrototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetFullName:fullName}),existingConstructor?($.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto)}),delete existingConstructor._childConstructors):base._childConstructors.push(constructor),$.widget.bridge(name,constructor),constructor},$.widget.extend=function(target){for(var key,value,input=widget_slice.call(arguments,1),inputIndex=0,inputLength=input.length;inputLength>inputIndex;inputIndex++)for(key in input[inputIndex])value=input[inputIndex][key],input[inputIndex].hasOwnProperty(key)&&void 0!==value&&($.isPlainObject(value)?target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):$.widget.extend({},value):target[key]=value);return target},$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall="string"==typeof options,args=widget_slice.call(arguments,1),returnValue=this;
// Allow multiple hashes to be passed on init
return isMethodCall?this.each(function(){var methodValue,instance=$.data(this,fullName);return"instance"===options?(returnValue=instance,!1):instance?$.isFunction(instance[options])&&"_"!==options.charAt(0)?(methodValue=instance[options].apply(instance,args),methodValue!==instance&&void 0!==methodValue?(returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue,!1):void 0):$.error("no such method '"+options+"' for "+name+" widget instance"):$.error("cannot call methods on "+name+" prior to initialization; attempted to call method '"+options+"'")}):(args.length&&(options=$.widget.extend.apply(null,[options].concat(args))),this.each(function(){var instance=$.data(this,fullName);instance?(instance.option(options||{}),instance._init&&instance._init()):$.data(this,fullName,new object(options,this))})),returnValue}},$.Widget=function(){},$.Widget._childConstructors=[],$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,
// callbacks
create:null},_createWidget:function(options,element){element=$(element||this.defaultElement||this)[0],this.element=$(element),this.uuid=widget_uuid++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=$(),this.hoverable=$(),this.focusable=$(),element!==this&&($.data(element,this.widgetFullName,this),this._on(!0,this.element,{remove:function(event){event.target===element&&this.destroy()}}),this.document=$(element.style?element.ownerDocument:element.document||element),this.window=$(this.document[0].defaultView||this.document[0].parentWindow)),this.options=$.widget.extend({},this.options,this._getCreateOptions(),options),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:$.noop,_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){this._destroy(),
// we can probably remove the unbind calls in 2.0
// all event bindings should go through this._on()
this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),
// clean up events and states
this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:$.noop,widget:function(){return this.element},option:function(key,value){var parts,curOption,i,options=key;if(0===arguments.length)
// don't return a reference to the internal hash
return $.widget.extend({},this.options);if("string"==typeof key)if(options={},parts=key.split("."),key=parts.shift(),parts.length){for(curOption=options[key]=$.widget.extend({},this.options[key]),i=0;i<parts.length-1;i++)curOption[parts[i]]=curOption[parts[i]]||{},curOption=curOption[parts[i]];if(key=parts.pop(),1===arguments.length)return void 0===curOption[key]?null:curOption[key];curOption[key]=value}else{if(1===arguments.length)return void 0===this.options[key]?null:this.options[key];options[key]=value}return this._setOptions(options),this},_setOptions:function(options){var key;for(key in options)this._setOption(key,options[key]);return this},_setOption:function(key,value){
// If the widget is becoming disabled, then nothing is interactive
return this.options[key]=value,"disabled"===key&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!value),value&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(suppressDisabledCheck,element,handlers){var delegateElement,instance=this;"boolean"!=typeof suppressDisabledCheck&&(handlers=element,element=suppressDisabledCheck,suppressDisabledCheck=!1),
// no element argument, shuffle and use this.element
handlers?(element=delegateElement=$(element),this.bindings=this.bindings.add(element)):(handlers=element,element=this.element,delegateElement=this.widget()),$.each(handlers,function(event,handler){function handlerProxy(){
// allow widgets to customize the disabled handling
// - disabled as an array instead of boolean
// - disabled class as method for disabling individual parts
// allow widgets to customize the disabled handling
// - disabled as an array instead of boolean
// - disabled class as method for disabling individual parts
return suppressDisabledCheck||instance.options.disabled!==!0&&!$(this).hasClass("ui-state-disabled")?("string"==typeof handler?instance[handler]:handler).apply(instance,arguments):void 0}
// copy the guid so direct unbinding works
"string"!=typeof handler&&(handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++);var match=event.match(/^([\w:-]*)\s*(.*)$/),eventName=match[1]+instance.eventNamespace,selector=match[2];selector?delegateElement.delegate(selector,eventName,handlerProxy):element.bind(eventName,handlerProxy)})},_off:function(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,element.unbind(eventName).undelegate(eventName),this.bindings=$(this.bindings.not(element).get()),this.focusable=$(this.focusable.not(element).get()),this.hoverable=$(this.hoverable.not(element).get())},_delay:function(handler,delay){function handlerProxy(){return("string"==typeof handler?instance[handler]:handler).apply(instance,arguments)}var instance=this;return setTimeout(handlerProxy,delay||0)},_hoverable:function(element){this.hoverable=this.hoverable.add(element),this._on(element,{mouseenter:function(event){$(event.currentTarget).addClass("ui-state-hover")},mouseleave:function(event){$(event.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(element){this.focusable=this.focusable.add(element),this._on(element,{focusin:function(event){$(event.currentTarget).addClass("ui-state-focus")},focusout:function(event){$(event.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(type,event,data){var prop,orig,callback=this.options[type];if(data=data||{},event=$.Event(event),event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase(),event.target=this.element[0],orig=event.originalEvent)for(prop in orig)prop in event||(event[prop]=orig[prop]);return this.element.trigger(event,data),!($.isFunction(callback)&&callback.apply(this.element[0],[event].concat(data))===!1||event.isDefaultPrevented())}},$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){"string"==typeof options&&(options={effect:options});var hasOptions,effectName=options?options===!0||"number"==typeof options?defaultEffect:options.effect||defaultEffect:method;options=options||{},"number"==typeof options&&(options={duration:options}),hasOptions=!$.isEmptyObject(options),options.complete=callback,options.delay&&element.delay(options.delay),hasOptions&&$.effects&&$.effects.effect[effectName]?element[method](options):effectName!==method&&element[effectName]?element[effectName](options.duration,options.easing,callback):element.queue(function(next){$(this)[method](),callback&&callback.call(element[0]),next()})}});var mouseHandled=($.widget,!1);$(document).mouseup(function(){mouseHandled=!1});$.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var that=this;this.element.bind("mousedown."+this.widgetName,function(event){return that._mouseDown(event)}).bind("click."+this.widgetName,function(event){return!0===$.data(event.target,that.widgetName+".preventClickEvent")?($.removeData(event.target,that.widgetName+".preventClickEvent"),event.stopImmediatePropagation(),!1):void 0}),this.started=!1},
// TODO: make sure destroying one instance of mouse doesn't mess with
// other instances of mouse
_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(event){
// don't let more than one widget handle mouseStart
if(!mouseHandled){this._mouseMoved=!1,
// we may have missed mouseup (out of window)
this._mouseStarted&&this._mouseUp(event),this._mouseDownEvent=event;var that=this,btnIsLeft=1===event.which,
// event.target.nodeName works around a bug in IE 8 with
// disabled inputs (#7620)
elIsCancel="string"==typeof this.options.cancel&&event.target.nodeName?$(event.target).closest(this.options.cancel).length:!1;
// Click event may never have fired (Gecko & Opera)
// these delegates are required to keep context
return btnIsLeft&&!elIsCancel&&this._mouseCapture(event)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){that.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(event)&&this._mouseDelayMet(event)&&(this._mouseStarted=this._mouseStart(event)!==!1,!this._mouseStarted)?(event.preventDefault(),!0):(!0===$.data(event.target,this.widgetName+".preventClickEvent")&&$.removeData(event.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(event){return that._mouseMove(event)},this._mouseUpDelegate=function(event){return that._mouseUp(event)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),event.preventDefault(),mouseHandled=!0,!0)):!0}},_mouseMove:function(event){
// Only check for mouseups outside the document if you've moved inside the document
// at least once. This prevents the firing of mouseup in the case of IE<9, which will
// fire a mousemove event if content is placed under the cursor. See #7778
// Support: IE <9
if(this._mouseMoved){
// IE mouseup check - mouseup happened when mouse was out of window
if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!event.button)return this._mouseUp(event);if(!event.which)return this._mouseUp(event)}return(event.which||event.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(event),event.preventDefault()):(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,event)!==!1,this._mouseStarted?this._mouseDrag(event):this._mouseUp(event)),!this._mouseStarted)},_mouseUp:function(event){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,event.target===this._mouseDownEvent.target&&$.data(event.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(event)),mouseHandled=!1,!1},_mouseDistanceMet:function(event){return Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},
// These are placeholder methods, to be overriden by extending plugin
_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}});/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(){function getOffsets(offsets,width,height){return[parseFloat(offsets[0])*(rpercent.test(offsets[0])?width/100:1),parseFloat(offsets[1])*(rpercent.test(offsets[1])?height/100:1)]}function parseCss(element,property){return parseInt($.css(element,property),10)||0}function getDimensions(elem){var raw=elem[0];return 9===raw.nodeType?{width:elem.width(),height:elem.height(),offset:{top:0,left:0}}:$.isWindow(raw)?{width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}}:raw.preventDefault?{width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}}:{width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()}}$.ui=$.ui||{};var cachedScrollbarWidth,supportsOffsetFractions,max=Math.max,abs=Math.abs,round=Math.round,rhorizontal=/left|center|right/,rvertical=/top|center|bottom/,roffset=/[\+\-]\d+(\.[\d]+)?%?/,rposition=/^\w+/,rpercent=/%$/,_position=$.fn.position;$.position={scrollbarWidth:function(){if(void 0!==cachedScrollbarWidth)return cachedScrollbarWidth;var w1,w2,div=$("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),innerDiv=div.children()[0];return $("body").append(div),w1=innerDiv.offsetWidth,div.css("overflow","scroll"),w2=innerDiv.offsetWidth,w1===w2&&(w2=div[0].clientWidth),div.remove(),cachedScrollbarWidth=w1-w2},getScrollInfo:function(within){var overflowX=within.isWindow||within.isDocument?"":within.element.css("overflow-x"),overflowY=within.isWindow||within.isDocument?"":within.element.css("overflow-y"),hasOverflowX="scroll"===overflowX||"auto"===overflowX&&within.width<within.element[0].scrollWidth,hasOverflowY="scroll"===overflowY||"auto"===overflowY&&within.height<within.element[0].scrollHeight;return{width:hasOverflowY?$.position.scrollbarWidth():0,height:hasOverflowX?$.position.scrollbarWidth():0}},getWithinInfo:function(element){var withinElement=$(element||window),isWindow=$.isWindow(withinElement[0]),isDocument=!!withinElement[0]&&9===withinElement[0].nodeType;return{element:withinElement,isWindow:isWindow,isDocument:isDocument,offset:withinElement.offset()||{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),
// support: jQuery 1.6.x
// jQuery 1.6 doesn't support .outerWidth/Height() on documents or windows
width:isWindow||isDocument?withinElement.width():withinElement.outerWidth(),height:isWindow||isDocument?withinElement.height():withinElement.outerHeight()}}},$.fn.position=function(options){if(!options||!options.of)return _position.apply(this,arguments);
// make a copy, we don't want to modify arguments
options=$.extend({},options);var atOffset,targetWidth,targetHeight,targetOffset,basePosition,dimensions,target=$(options.of),within=$.position.getWithinInfo(options.within),scrollInfo=$.position.getScrollInfo(within),collision=(options.collision||"flip").split(" "),offsets={};
// force left top to allow flipping
// clone to reuse original targetOffset later
// force my and at to have valid horizontal and vertical positions
// if a value is missing or invalid, it will be converted to center
// normalize collision option
return dimensions=getDimensions(target),target[0].preventDefault&&(options.at="left top"),targetWidth=dimensions.width,targetHeight=dimensions.height,targetOffset=dimensions.offset,basePosition=$.extend({},targetOffset),$.each(["my","at"],function(){var horizontalOffset,verticalOffset,pos=(options[this]||"").split(" ");1===pos.length&&(pos=rhorizontal.test(pos[0])?pos.concat(["center"]):rvertical.test(pos[0])?["center"].concat(pos):["center","center"]),pos[0]=rhorizontal.test(pos[0])?pos[0]:"center",pos[1]=rvertical.test(pos[1])?pos[1]:"center",horizontalOffset=roffset.exec(pos[0]),verticalOffset=roffset.exec(pos[1]),offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0],options[this]=[rposition.exec(pos[0])[0],rposition.exec(pos[1])[0]]}),1===collision.length&&(collision[1]=collision[0]),"right"===options.at[0]?basePosition.left+=targetWidth:"center"===options.at[0]&&(basePosition.left+=targetWidth/2),"bottom"===options.at[1]?basePosition.top+=targetHeight:"center"===options.at[1]&&(basePosition.top+=targetHeight/2),atOffset=getOffsets(offsets.at,targetWidth,targetHeight),basePosition.left+=atOffset[0],basePosition.top+=atOffset[1],this.each(function(){var collisionPosition,using,elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseCss(this,"marginLeft"),marginTop=parseCss(this,"marginTop"),collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+scrollInfo.width,collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+scrollInfo.height,position=$.extend({},basePosition),myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());"right"===options.my[0]?position.left-=elemWidth:"center"===options.my[0]&&(position.left-=elemWidth/2),"bottom"===options.my[1]?position.top-=elemHeight:"center"===options.my[1]&&(position.top-=elemHeight/2),position.left+=myOffset[0],position.top+=myOffset[1],supportsOffsetFractions||(position.left=round(position.left),position.top=round(position.top)),collisionPosition={marginLeft:marginLeft,marginTop:marginTop},$.each(["left","top"],function(i,dir){$.ui.position[collision[i]]&&$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within:within,elem:elem})}),options.using&&(using=function(props){var left=targetOffset.left-position.left,right=left+targetWidth-elemWidth,top=targetOffset.top-position.top,bottom=top+targetHeight-elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:0>right?"left":left>0?"right":"center",vertical:0>bottom?"top":top>0?"bottom":"middle"};elemWidth>targetWidth&&abs(left+right)<targetWidth&&(feedback.horizontal="center"),elemHeight>targetHeight&&abs(top+bottom)<targetHeight&&(feedback.vertical="middle"),max(abs(left),abs(right))>max(abs(top),abs(bottom))?feedback.important="horizontal":feedback.important="vertical",options.using.call(this,props,feedback)}),elem.offset($.extend(position,{using:using}))})},$.ui.position={fit:{left:function(position,data){var newOverRight,within=data.within,withinOffset=within.isWindow?within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=withinOffset-collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset;
// element is wider than within
data.collisionWidth>outerWidth?
// element is initially over the left side of within
overLeft>0&&0>=overRight?(newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-withinOffset,position.left+=overLeft-newOverRight):overRight>0&&0>=overLeft?position.left=withinOffset:overLeft>overRight?position.left=withinOffset+outerWidth-data.collisionWidth:position.left=withinOffset:overLeft>0?position.left+=overLeft:overRight>0?position.left-=overRight:position.left=max(position.left-collisionPosLeft,position.left)},top:function(position,data){var newOverBottom,within=data.within,withinOffset=within.isWindow?within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=withinOffset-collisionPosTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset;
// element is taller than within
data.collisionHeight>outerHeight?
// element is initially over the top of within
overTop>0&&0>=overBottom?(newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-withinOffset,position.top+=overTop-newOverBottom):overBottom>0&&0>=overTop?position.top=withinOffset:overTop>overBottom?position.top=withinOffset+outerHeight-data.collisionHeight:position.top=withinOffset:overTop>0?position.top+=overTop:overBottom>0?position.top-=overBottom:position.top=max(position.top-collisionPosTop,position.top)}},flip:{left:function(position,data){var newOverRight,newOverLeft,within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=collisionPosLeft-offsetLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,myOffset="left"===data.my[0]?-data.elemWidth:"right"===data.my[0]?data.elemWidth:0,atOffset="left"===data.at[0]?data.targetWidth:"right"===data.at[0]?-data.targetWidth:0,offset=-2*data.offset[0];0>overLeft?(newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-outerWidth-withinOffset,(0>newOverRight||newOverRight<abs(overLeft))&&(position.left+=myOffset+atOffset+offset)):overRight>0&&(newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+atOffset+offset-offsetLeft,(newOverLeft>0||abs(newOverLeft)<overRight)&&(position.left+=myOffset+atOffset+offset))},top:function(position,data){var newOverTop,newOverBottom,within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow?within.scrollTop:within.offset.top,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=collisionPosTop-offsetTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,top="top"===data.my[1],myOffset=top?-data.elemHeight:"bottom"===data.my[1]?data.elemHeight:0,atOffset="top"===data.at[1]?data.targetHeight:"bottom"===data.at[1]?-data.targetHeight:0,offset=-2*data.offset[1];0>overTop?(newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-outerHeight-withinOffset,(0>newOverBottom||newOverBottom<abs(overTop))&&(position.top+=myOffset+atOffset+offset)):overBottom>0&&(newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+offset-offsetTop,(newOverTop>0||abs(newOverTop)<overBottom)&&(position.top+=myOffset+atOffset+offset))}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments),$.ui.position.fit.left.apply(this,arguments)},top:function(){$.ui.position.flip.top.apply(this,arguments),$.ui.position.fit.top.apply(this,arguments)}}},
// fraction support test
function(){var testElement,testElementParent,testElementStyle,offsetLeft,i,body=document.getElementsByTagName("body")[0],div=document.createElement("div");testElement=document.createElement(body?"div":"body"),testElementStyle={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},body&&$.extend(testElementStyle,{position:"absolute",left:"-1000px",top:"-1000px"});for(i in testElementStyle)testElement.style[i]=testElementStyle[i];testElement.appendChild(div),testElementParent=body||document.documentElement,testElementParent.insertBefore(testElement,testElementParent.firstChild),div.style.cssText="position: absolute; left: 10.7432222px;",offsetLeft=$(div).offset().left,supportsOffsetFractions=offsetLeft>10&&11>offsetLeft,testElement.innerHTML="",testElementParent.removeChild(testElement)}()}();$.ui.position,$.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},
// callbacks
activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var options=this.options;this.prevShow=this.prevHide=$(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),
// don't allow collapsible: false and active: false / null
options.collapsible||options.active!==!1&&null!=options.active||(options.active=0),this._processPanels(),
// handle negative values
options.active<0&&(options.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():$()}},_createIcons:function(){var icons=this.options.icons;icons&&($("<span>").addClass("ui-accordion-header-icon ui-icon "+icons.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(icons.header).addClass(icons.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var contents;
// clean up main element
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
// clean up headers
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),contents=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&contents.css("height","")},_setOption:function(key,value){
// _activate() will handle invalid values and update this.options
// setting collapsible: false while collapsed; open first panel
// #5332 - opacity doesn't cascade to positioned elements in IE
// so we need to add the disabled class to the headers and panels
return"active"===key?void this._activate(value):("event"===key&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(value)),this._super(key,value),"collapsible"!==key||value||this.options.active!==!1||this._activate(0),"icons"===key&&(this._destroyIcons(),value&&this._createIcons()),void("disabled"===key&&(this.element.toggleClass("ui-state-disabled",!!value).attr("aria-disabled",value),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!value))))},_keydown:function(event){if(!event.altKey&&!event.ctrlKey){var keyCode=$.ui.keyCode,length=this.headers.length,currentIndex=this.headers.index(event.target),toFocus=!1;switch(event.keyCode){case keyCode.RIGHT:case keyCode.DOWN:toFocus=this.headers[(currentIndex+1)%length];break;case keyCode.LEFT:case keyCode.UP:toFocus=this.headers[(currentIndex-1+length)%length];break;case keyCode.SPACE:case keyCode.ENTER:this._eventHandler(event);break;case keyCode.HOME:toFocus=this.headers[0];break;case keyCode.END:toFocus=this.headers[length-1]}toFocus&&($(event.target).attr("tabIndex",-1),$(toFocus).attr("tabIndex",0),toFocus.focus(),event.preventDefault())}},_panelKeyDown:function(event){event.keyCode===$.ui.keyCode.UP&&event.ctrlKey&&$(event.currentTarget).prev().focus()},refresh:function(){var options=this.options;this._processPanels(),
// was collapsed or no panel
options.active===!1&&options.collapsible===!0||!this.headers.length?(options.active=!1,this.active=$()):options.active===!1?this._activate(0):this.active.length&&!$.contains(this.element[0],this.active[0])?
// all remaining panel are disabled
this.headers.length===this.headers.find(".ui-state-disabled").length?(options.active=!1,this.active=$()):this._activate(Math.max(0,options.active-1)):options.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var prevHeaders=this.headers,prevPanels=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),
// Avoid memory leaks (#10056)
prevPanels&&(this._off(prevHeaders.not(this.headers)),this._off(prevPanels.not(this.panels)))},_refresh:function(){var maxHeight,options=this.options,heightStyle=options.heightStyle,parent=this.element.parent();this.active=this._findActive(options.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var header=$(this),headerId=header.uniqueId().attr("id"),panel=header.next(),panelId=panel.uniqueId().attr("id");header.attr("aria-controls",panelId),panel.attr("aria-labelledby",headerId)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),
// make sure at least one header is in the tab order
this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(options.event),"fill"===heightStyle?(maxHeight=parent.height(),this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");"absolute"!==position&&"fixed"!==position&&(maxHeight-=elem.outerHeight(!0))}),this.headers.each(function(){maxHeight-=$(this).outerHeight(!0)}),this.headers.next().each(function(){$(this).height(Math.max(0,maxHeight-$(this).innerHeight()+$(this).height()))}).css("overflow","auto")):"auto"===heightStyle&&(maxHeight=0,this.headers.next().each(function(){maxHeight=Math.max(maxHeight,$(this).css("height","").height())}).height(maxHeight))},_activate:function(index){var active=this._findActive(index)[0];
// trying to activate the already active panel
active!==this.active[0]&&(active=active||this.active[0],this._eventHandler({target:active,currentTarget:active,preventDefault:$.noop}))},_findActive:function(selector){return"number"==typeof selector?this.headers.eq(selector):$()},_setupEvents:function(event){var events={keydown:"_keydown"};event&&$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,events),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(event){var options=this.options,active=this.active,clicked=$(event.currentTarget),clickedIsActive=clicked[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():clicked.next(),toHide=active.next(),eventData={oldHeader:active,oldPanel:toHide,newHeader:collapsing?$():clicked,newPanel:toShow};event.preventDefault(),clickedIsActive&&!options.collapsible||this._trigger("beforeActivate",event,eventData)===!1||(options.active=collapsing?!1:this.headers.index(clicked),
// when the call to ._toggle() comes after the class changes
// it causes a very odd bug in IE 8 (see #6720)
this.active=clickedIsActive?$():clicked,this._toggle(eventData),
// switch classes
// corner classes on the previously active header stay after the animation
active.removeClass("ui-accordion-header-active ui-state-active"),options.icons&&active.children(".ui-accordion-header-icon").removeClass(options.icons.activeHeader).addClass(options.icons.header),clickedIsActive||(clicked.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),options.icons&&clicked.children(".ui-accordion-header-icon").removeClass(options.icons.header).addClass(options.icons.activeHeader),clicked.next().addClass("ui-accordion-content-active")))},_toggle:function(data){var toShow=data.newPanel,toHide=this.prevShow.length?this.prevShow:data.oldPanel;
// handle activating a panel during the animation for another activation
this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=toShow,this.prevHide=toHide,this.options.animate?this._animate(toShow,toHide,data):(toHide.hide(),toShow.show(),this._toggleComplete(data)),toHide.attr({"aria-hidden":"true"}),toHide.prev().attr({"aria-selected":"false","aria-expanded":"false"}),
// if we're switching panels, remove the old header from the tab order
// if we're opening from collapsed state, remove the previous header from the tab order
// if we're collapsing, then keep the collapsing header in the tab order
toShow.length&&toHide.length?toHide.prev().attr({tabIndex:-1,"aria-expanded":"false"}):toShow.length&&this.headers.filter(function(){return 0===parseInt($(this).attr("tabIndex"),10)}).attr("tabIndex",-1),toShow.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(toShow,toHide,data){var total,easing,duration,that=this,adjust=0,boxSizing=toShow.css("box-sizing"),down=toShow.length&&(!toHide.length||toShow.index()<toHide.index()),animate=this.options.animate||{},options=down&&animate.down||animate,complete=function(){that._toggleComplete(data)};
// fall back from options to animation in case of partial down settings
return"number"==typeof options&&(duration=options),"string"==typeof options&&(easing=options),easing=easing||options.easing||animate.easing,duration=duration||options.duration||animate.duration,toHide.length?toShow.length?(total=toShow.show().outerHeight(),toHide.animate(this.hideProps,{duration:duration,easing:easing,step:function(now,fx){fx.now=Math.round(now)}}),void toShow.hide().animate(this.showProps,{duration:duration,easing:easing,complete:complete,step:function(now,fx){fx.now=Math.round(now),"height"!==fx.prop?"content-box"===boxSizing&&(adjust+=fx.now):"content"!==that.options.heightStyle&&(fx.now=Math.round(total-toHide.outerHeight()-adjust),adjust=0)}})):toHide.animate(this.hideProps,duration,easing,complete):toShow.animate(this.showProps,duration,easing,complete)},_toggleComplete:function(data){var toHide=data.oldPanel;toHide.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
// Work around for rendering bug in IE (#5421)
toHide.length&&(toHide.parent()[0].className=toHide.parent()[0].className),this._trigger("activate",null,data)}}),$.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",
// callbacks
blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,
// Flag used to prevent firing of the click handler
// as the event bubbles up through nested menus
this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({
// Prevent focus from sticking to links inside menu after clicking
// them (focus should always stay on UL during navigation).
"mousedown .ui-menu-item":function(event){event.preventDefault()},"click .ui-menu-item":function(event){var target=$(event.target);!this.mouseHandled&&target.not(".ui-state-disabled").length&&(this.select(event),
// Only set the mouseHandled flag if the event will bubble, see #9469.
event.isPropagationStopped()||(this.mouseHandled=!0),
// Open submenu on click
target.has(".ui-menu").length?this.expand(event):!this.element.is(":focus")&&$(this.document[0].activeElement).closest(".ui-menu").length&&(
// Redirect focus to the menu
this.element.trigger("focus",[!0]),
// If the active item is on the top level, let it stay active.
// Otherwise, blur the active item since it is no longer visible.
this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(event){
// Ignore mouse events while typeahead is active, see #10458.
// Prevents focusing the wrong item when typeahead causes a scroll while the mouse
// is over an item in the menu
if(!this.previousFilter){var target=$(event.currentTarget);
// Remove ui-state-active class from siblings of the newly focused menu item
// to avoid a jump caused by adjacent elements both having a class with a border
target.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(event,target)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(event,keepActiveItem){
// If there's already an active item, keep it active
// If not, activate the first item
var item=this.active||this.element.find(this.options.items).eq(0);keepActiveItem||this.focus(event,item)},blur:function(event){this._delay(function(){$.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(event)})},keydown:"_keydown"}),this.refresh(),
// Clicks outside of a menu collapse any open menus
this._on(this.document,{click:function(event){this._closeOnDocumentClick(event)&&this.collapseAll(event),
// Reset the mouseHandled flag
this.mouseHandled=!1}})},_destroy:function(){
// Destroy (sub)menus
this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
// Destroy menu items
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var elem=$(this);elem.data("ui-menu-submenu-carat")&&elem.remove()}),
// Destroy menu dividers
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(event){var match,prev,character,skip,preventDefault=!0;switch(event.keyCode){case $.ui.keyCode.PAGE_UP:this.previousPage(event);break;case $.ui.keyCode.PAGE_DOWN:this.nextPage(event);break;case $.ui.keyCode.HOME:this._move("first","first",event);break;case $.ui.keyCode.END:this._move("last","last",event);break;case $.ui.keyCode.UP:this.previous(event);break;case $.ui.keyCode.DOWN:this.next(event);break;case $.ui.keyCode.LEFT:this.collapse(event);break;case $.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(event);break;case $.ui.keyCode.ENTER:case $.ui.keyCode.SPACE:this._activate(event);break;case $.ui.keyCode.ESCAPE:this.collapse(event);break;default:preventDefault=!1,prev=this.previousFilter||"",character=String.fromCharCode(event.keyCode),skip=!1,clearTimeout(this.filterTimer),character===prev?skip=!0:character=prev+character,match=this._filterMenuItems(character),match=skip&&-1!==match.index(this.active.next())?this.active.nextAll(".ui-menu-item"):match,
// If no matches on the current filter, reset to the last character pressed
// to move down the menu to the first item that starts with that character
match.length||(character=String.fromCharCode(event.keyCode),match=this._filterMenuItems(character)),match.length?(this.focus(event,match),this.previousFilter=character,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}preventDefault&&event.preventDefault()},_activate:function(event){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(event):this.select(event))},refresh:function(){var menus,items,that=this,icon=this.options.icons.submenu,submenus=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),
// Initialize nested menus
submenus.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var menu=$(this),item=menu.parent(),submenuCarat=$("<span>").addClass("ui-menu-icon ui-icon "+icon).data("ui-menu-submenu-carat",!0);item.attr("aria-haspopup","true").prepend(submenuCarat),menu.attr("aria-labelledby",item.attr("id"))}),menus=submenus.add(this.element),items=menus.find(this.options.items),items.not(".ui-menu-item").each(function(){var item=$(this);that._isDivider(item)&&item.addClass("ui-widget-content ui-menu-divider")}),items.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),items.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!$.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(key,value){"icons"===key&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(value.submenu),"disabled"===key&&this.element.toggleClass("ui-state-disabled",!!value).attr("aria-disabled",value),this._super(key,value)},focus:function(event,item){var nested,focused;this.blur(event,event&&"focus"===event.type),this._scrollIntoView(item),this.active=item.first(),focused=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",focused.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),event&&"keydown"===event.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),nested=item.children(".ui-menu"),nested.length&&event&&/^mouse/.test(event.type)&&this._startOpening(nested),this.activeMenu=item.parent(),this._trigger("focus",event,{item:item})},_scrollIntoView:function(item){var borderTop,paddingTop,offset,scroll,elementHeight,itemHeight;this._hasScroll()&&(borderTop=parseFloat($.css(this.activeMenu[0],"borderTopWidth"))||0,paddingTop=parseFloat($.css(this.activeMenu[0],"paddingTop"))||0,offset=item.offset().top-this.activeMenu.offset().top-borderTop-paddingTop,scroll=this.activeMenu.scrollTop(),elementHeight=this.activeMenu.height(),itemHeight=item.outerHeight(),0>offset?this.activeMenu.scrollTop(scroll+offset):offset+itemHeight>elementHeight&&this.activeMenu.scrollTop(scroll+offset-elementHeight+itemHeight))},blur:function(event,fromFocus){fromFocus||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",event,{item:this.active}))},_startOpening:function(submenu){clearTimeout(this.timer),
// Don't open if already open fixes a Firefox bug that caused a .5 pixel
// shift in the submenu position when mousing over the carat icon
"true"===submenu.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(submenu)},this.delay))},_open:function(submenu){var position=$.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden","true"),submenu.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(position)},collapseAll:function(event,all){clearTimeout(this.timer),this.timer=this._delay(function(){
// If we were passed an event, look for the submenu that contains the event
var currentMenu=all?this.element:$(event&&event.target).closest(this.element.find(".ui-menu"));
// If we found no valid submenu ancestor, use the main menu to close all sub menus anyway
currentMenu.length||(currentMenu=this.element),this._close(currentMenu),this.blur(event),this.activeMenu=currentMenu},this.delay)},
// With no arguments, closes the currently active menu - if nothing is active
// it closes all menus.  If passed an argument, it will search for menus BELOW
_close:function(startMenu){startMenu||(startMenu=this.active?this.active.parent():this.element),startMenu.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(event){return!$(event.target).closest(".ui-menu").length},_isDivider:function(item){
// Match hyphen, em dash, en dash
return!/[^\-\u2014\u2013\s]/.test(item.text())},collapse:function(event){var newItem=this.active&&this.active.parent().closest(".ui-menu-item",this.element);newItem&&newItem.length&&(this._close(),this.focus(event,newItem))},expand:function(event){var newItem=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();newItem&&newItem.length&&(this._open(newItem.parent()),
// Delay so Firefox will not hide activedescendant change in expanding submenu from AT
this._delay(function(){this.focus(event,newItem)}))},next:function(event){this._move("next","first",event)},previous:function(event){this._move("prev","last",event)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(direction,filter,event){var next;this.active&&(next="first"===direction||"last"===direction?this.active["first"===direction?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[direction+"All"](".ui-menu-item").eq(0)),next&&next.length&&this.active||(next=this.activeMenu.find(this.options.items)[filter]()),this.focus(event,next)},nextPage:function(event){var item,base,height;return this.active?void(this.isLastItem()||(this._hasScroll()?(base=this.active.offset().top,height=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return item=$(this),item.offset().top-base-height<0}),this.focus(event,item)):this.focus(event,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(event)},previousPage:function(event){var item,base,height;return this.active?void(this.isFirstItem()||(this._hasScroll()?(base=this.active.offset().top,height=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return item=$(this),item.offset().top-base+height>0}),this.focus(event,item)):this.focus(event,this.activeMenu.find(this.options.items).first()))):void this.next(event)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(event){
// TODO: It should never be possible to not have an active item at this
// point, but the tests don't trigger mouseenter before click.
this.active=this.active||$(event.target).closest(".ui-menu-item");var ui={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(event,!0),this._trigger("select",event,ui)},_filterMenuItems:function(character){var escapedCharacter=character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),regex=new RegExp("^"+escapedCharacter,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return regex.test($.trim($(this).text()))})}});/*!
 * jQuery UI Autocomplete 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 */
$.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,
// callbacks
change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){
// Some browsers only repeat keydown events, not keypress events,
// so we use the suppressKeyPress flag to determine if we've already
// handled the keydown event. #7269
// Unfortunately the code for & in keypress is the same as the up arrow,
// so we use the suppressKeyPressRepeat flag to avoid handling keypress
// events when we know the keydown event was used to modify the
// search term. #7799
var suppressKeyPress,suppressKeyPressRepeat,suppressInput,nodeName=this.element[0].nodeName.toLowerCase(),isTextarea="textarea"===nodeName,isInput="input"===nodeName;this.isMultiLine=isTextarea?!0:isInput?!1:
// All other element types are determined by whether or not they're contentEditable
this.element.prop("isContentEditable"),this.valueMethod=this.element[isTextarea||isInput?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(event){if(this.element.prop("readOnly"))return suppressKeyPress=!0,suppressInput=!0,void(suppressKeyPressRepeat=!0);suppressKeyPress=!1,suppressInput=!1,suppressKeyPressRepeat=!1;var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:suppressKeyPress=!0,this._move("previousPage",event);break;case keyCode.PAGE_DOWN:suppressKeyPress=!0,this._move("nextPage",event);break;case keyCode.UP:suppressKeyPress=!0,this._keyEvent("previous",event);break;case keyCode.DOWN:suppressKeyPress=!0,this._keyEvent("next",event);break;case keyCode.ENTER:
// when menu is open and has focus
this.menu.active&&(suppressKeyPress=!0,event.preventDefault(),this.menu.select(event));break;case keyCode.TAB:this.menu.active&&this.menu.select(event);break;case keyCode.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(event),
// Different browsers have different default behavior for escape
// Single press can mean undo or clear
// Double press in IE means clear the whole form
event.preventDefault());break;default:suppressKeyPressRepeat=!0,
// search timeout should be triggered before the input value is changed
this._searchTimeout(event)}},keypress:function(event){if(suppressKeyPress)return suppressKeyPress=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||event.preventDefault());if(!suppressKeyPressRepeat){
// replicate some key handlers to allow them to repeat in Firefox and Opera
var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:this._move("previousPage",event);break;case keyCode.PAGE_DOWN:this._move("nextPage",event);break;case keyCode.UP:this._keyEvent("previous",event);break;case keyCode.DOWN:this._keyEvent("next",event)}}},input:function(event){return suppressInput?(suppressInput=!1,void event.preventDefault()):void this._searchTimeout(event)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(event){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(event),void this._change(event))}}),this._initSource(),this.menu=$("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
// disable ARIA support, the live region takes care of that
role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(event){
// prevent moving focus out of the text field
event.preventDefault(),
// IE doesn't prevent moving focus even with event.preventDefault()
// so we set a flag to know when we should ignore the blur event
this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});
// clicking on the scrollbar causes focus to shift to the body
// but we can't detect a mouseup or a click immediately afterward
// so we have to track the next mousedown and close the menu if
// the user clicks somewhere outside of the autocomplete
var menuElement=this.menu.element[0];$(event.target).closest(".ui-menu-item").length||this._delay(function(){var that=this;this.document.one("mousedown",function(event){event.target===that.element[0]||event.target===menuElement||$.contains(menuElement,event.target)||that.close()})})},menufocus:function(event,ui){var label,item;
// support: Firefox
// Prevent accidental activation of menu items in Firefox (#7024 #9118)
// support: Firefox
// Prevent accidental activation of menu items in Firefox (#7024 #9118)
// Announce the value in the liveRegion
return this.isNewMenu&&(this.isNewMenu=!1,event.originalEvent&&/^mouse/.test(event.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){$(event.target).trigger(event.originalEvent)})):(item=ui.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",event,{item:item})&&event.originalEvent&&/^key/.test(event.originalEvent.type)&&this._value(item.value),label=ui.item.attr("aria-label")||item.value,void(label&&$.trim(label).length&&(this.liveRegion.children().hide(),$("<div>").text(label).appendTo(this.liveRegion))))},menuselect:function(event,ui){var item=ui.item.data("ui-autocomplete-item"),previous=this.previous;
// only trigger when focus was lost (click on menu)
this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=previous,
// #6109 - IE triggers two focus events and the second
// is asynchronous, so we need to reset the previous
// term synchronously and asynchronously :-(
this._delay(function(){this.previous=previous,this.selectedItem=item})),!1!==this._trigger("select",event,{item:item})&&this._value(item.value),
// reset the term after the select event
// this allows custom select handling to work properly
this.term=this._value(),this.close(event),this.selectedItem=item}}),this.liveRegion=$("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),
// turning off autocomplete prevents the browser from remembering the
// value when navigating through history, so we re-enable autocomplete
// if the page is unloaded before the widget is destroyed. #7790
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(key,value){this._super(key,value),"source"===key&&this._initSource(),"appendTo"===key&&this.menu.element.appendTo(this._appendTo()),"disabled"===key&&value&&this.xhr&&this.xhr.abort()},_appendTo:function(){var element=this.options.appendTo;return element&&(element=element.jquery||element.nodeType?$(element):this.document.find(element).eq(0)),element&&element[0]||(element=this.element.closest(".ui-front")),element.length||(element=this.document[0].body),element},_initSource:function(){var array,url,that=this;$.isArray(this.options.source)?(array=this.options.source,this.source=function(request,response){response($.ui.autocomplete.filter(array,request.term))}):"string"==typeof this.options.source?(url=this.options.source,this.source=function(request,response){that.xhr&&that.xhr.abort(),that.xhr=$.ajax({url:url,data:request,dataType:"json",success:function(data){response(data)},error:function(){response([])}})}):this.source=this.options.source},_searchTimeout:function(event){clearTimeout(this.searching),this.searching=this._delay(function(){
// Search if the value has changed, or if the user retypes the same value (see #7434)
var equalValues=this.term===this._value(),menuVisible=this.menu.element.is(":visible"),modifierKey=event.altKey||event.ctrlKey||event.metaKey||event.shiftKey;equalValues&&(!equalValues||menuVisible||modifierKey)||(this.selectedItem=null,this.search(null,event))},this.options.delay)},search:function(value,event){
// always save the actual value, not the one passed as an argument
return value=null!=value?value:this._value(),this.term=this._value(),value.length<this.options.minLength?this.close(event):this._trigger("search",event)!==!1?this._search(value):void 0},_search:function(value){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:value},this._response())},_response:function(){var index=++this.requestIndex;return $.proxy(function(content){index===this.requestIndex&&this.__response(content),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(content){content&&(content=this._normalize(content)),this._trigger("response",null,{content:content}),!this.options.disabled&&content&&content.length&&!this.cancelSearch?(this._suggest(content),this._trigger("open")):
// use ._close() instead of .close() so we don't cancel future searches
this._close()},close:function(event){this.cancelSearch=!0,this._close(event)},_close:function(event){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",event))},_change:function(event){this.previous!==this._value()&&this._trigger("change",event,{item:this.selectedItem})},_normalize:function(items){
// assume all items have the right format when the first item is complete
// assume all items have the right format when the first item is complete
return items.length&&items[0].label&&items[0].value?items:$.map(items,function(item){return"string"==typeof item?{label:item,value:item}:$.extend({},item,{label:item.label||item.value,value:item.value||item.label})})},_suggest:function(items){var ul=this.menu.element.empty();this._renderMenu(ul,items),this.isNewMenu=!0,this.menu.refresh(),
// size and position menu
ul.show(),this._resizeMenu(),ul.position($.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var ul=this.menu.element;ul.outerWidth(Math.max(
// Firefox wraps long text (possibly a rounding bug)
// so we add 1px to avoid the wrapping (#7513)
ul.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(ul,items){var that=this;$.each(items,function(index,item){that._renderItemData(ul,item)})},_renderItemData:function(ul,item){return this._renderItem(ul,item).data("ui-autocomplete-item",item)},_renderItem:function(ul,item){return $("<li>").text(item.label).appendTo(ul)},_move:function(direction,event){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(direction)||this.menu.isLastItem()&&/^next/.test(direction)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[direction](event):void this.search(null,event)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(keyEvent,event){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(keyEvent,event),
// prevents moving cursor to beginning/end of the text field in some browsers
event.preventDefault())}}),$.extend($.ui.autocomplete,{escapeRegex:function(value){return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(array,term){var matcher=new RegExp($.ui.autocomplete.escapeRegex(term),"i");return $.grep(array,function(value){return matcher.test(value.label||value.value||value)})}}),
// live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
$.widget("ui.autocomplete",$.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(amount){return amount+(amount>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(content){var message;this._superApply(arguments),this.options.disabled||this.cancelSearch||(message=content&&content.length?this.options.messages.results(content.length):this.options.messages.noResults,this.liveRegion.children().hide(),$("<div>").text(message).appendTo(this.liveRegion))}});var lastActive,baseClasses=($.ui.autocomplete,"ui-button ui-widget ui-state-default ui-corner-all"),typeClasses="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",formResetHandler=function(){var form=$(this);setTimeout(function(){form.find(":ui-button").button("refresh")},1)},radioGroup=function(radio){var name=radio.name,form=radio.form,radios=$([]);return name&&(name=name.replace(/'/g,"\\'"),radios=form?$(form).find("[name='"+name+"'][type=radio]"):$("[name='"+name+"'][type=radio]",radio.ownerDocument).filter(function(){return!this.form})),radios};$.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,formResetHandler),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var that=this,options=this.options,toggleButton="checkbox"===this.type||"radio"===this.type,activeClass=toggleButton?"":"ui-state-active";null===options.label&&(options.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(baseClasses).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){options.disabled||this===lastActive&&$(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){options.disabled||$(this).removeClass(activeClass)}).bind("click"+this.eventNamespace,function(event){options.disabled&&(event.preventDefault(),event.stopImmediatePropagation())}),
// Can't use _focusable() because the element that receives focus
// and the element that gets the ui-state-focus class are different
this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),toggleButton&&this.element.bind("change"+this.eventNamespace,function(){that.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return options.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(options.disabled)return!1;$(this).addClass("ui-state-active"),that.buttonElement.attr("aria-pressed","true");var radio=that.element[0];radioGroup(radio).not(radio).map(function(){return $(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return options.disabled?!1:($(this).addClass("ui-state-active"),lastActive=this,void that.document.one("mouseup",function(){lastActive=null}))}).bind("mouseup"+this.eventNamespace,function(){return options.disabled?!1:void $(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(event){return options.disabled?!1:void(event.keyCode!==$.ui.keyCode.SPACE&&event.keyCode!==$.ui.keyCode.ENTER||$(this).addClass("ui-state-active"))}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){$(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(event){event.keyCode===$.ui.keyCode.SPACE&&
// TODO pass through original event correctly (just as 2nd argument doesn't work)
$(this).click()})),this._setOption("disabled",options.disabled),this._resetButton()},_determineButtonType:function(){var ancestor,labelSelector,checked;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button","checkbox"===this.type||"radio"===this.type?(ancestor=this.element.parents().last(),labelSelector="label[for='"+this.element.attr("id")+"']",this.buttonElement=ancestor.find(labelSelector),this.buttonElement.length||(ancestor=ancestor.length?ancestor.siblings():this.element.siblings(),this.buttonElement=ancestor.filter(labelSelector),this.buttonElement.length||(this.buttonElement=ancestor.find(labelSelector))),this.element.addClass("ui-helper-hidden-accessible"),checked=this.element.is(":checked"),checked&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",checked)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(baseClasses+" ui-state-active "+typeClasses).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(key,value){return this._super(key,value),"disabled"===key?(this.widget().toggleClass("ui-state-disabled",!!value),this.element.prop("disabled",!!value),void(value&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")))):void this._resetButton()},refresh:function(){
//See #8237 & #8828
var isDisabled=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");isDisabled!==this.options.disabled&&this._setOption("disabled",isDisabled),"radio"===this.type?radioGroup(this.element[0]).each(function(){$(this).is(":checked")?$(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):$(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return void(this.options.label&&this.element.val(this.options.label));var buttonElement=this.buttonElement.removeClass(typeClasses),buttonText=$("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(buttonElement.empty()).text(),icons=this.options.icons,multipleIcons=icons.primary&&icons.secondary,buttonClasses=[];icons.primary||icons.secondary?(this.options.text&&buttonClasses.push("ui-button-text-icon"+(multipleIcons?"s":icons.primary?"-primary":"-secondary")),icons.primary&&buttonElement.prepend("<span class='ui-button-icon-primary ui-icon "+icons.primary+"'></span>"),icons.secondary&&buttonElement.append("<span class='ui-button-icon-secondary ui-icon "+icons.secondary+"'></span>"),this.options.text||(buttonClasses.push(multipleIcons?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||buttonElement.attr("title",$.trim(buttonText)))):buttonClasses.push("ui-button-text-only"),buttonElement.addClass(buttonClasses.join(" "))}}),$.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(key,value){"disabled"===key&&this.buttons.button("option",key,value),this._super(key,value)},refresh:function(){var rtl="rtl"===this.element.css("direction"),allButtons=this.element.find(this.options.items),existingButtons=allButtons.filter(":ui-button");
// Initialize new buttons
allButtons.not(":ui-button").button(),
// Refresh existing buttons
existingButtons.button("refresh"),this.buttons=allButtons.map(function(){return $(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(rtl?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(rtl?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return $(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}});$.ui.button;/*!
 * jQuery UI Datepicker 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
$.extend($.ui,{datepicker:{version:"1.11.4"}});var datepicker_instActive;$.extend(Datepicker.prototype,{/* Class name added to elements to indicate already configured with a date picker. */
markerClassName:"hasDatepicker",
//Keep track of the maximum number of rows displayed (see #7043)
maxRows:4,
// TODO rename to "widget" when switching to widget factory
_widgetDatepicker:function(){return this.dpDiv},/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
setDefaults:function(settings){return datepicker_extendRemove(this._defaults,settings||{}),this},/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
_attachDatepicker:function(target,settings){var nodeName,inline,inst;nodeName=target.nodeName.toLowerCase(),inline="div"===nodeName||"span"===nodeName,target.id||(this.uuid+=1,target.id="dp"+this.uuid),inst=this._newInst($(target),inline),inst.settings=$.extend({},settings||{}),"input"===nodeName?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},/* Create a new instance object. */
_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");// escape jQuery meta chars
return{id:id,input:target,// associated target
selectedDay:0,selectedMonth:0,selectedYear:0,// current selection
drawMonth:0,drawYear:0,// month being drawn
inline:inline,// is datepicker inline or not
dpDiv:inline?// presentation div
datepicker_bindHover($("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},/* Attach the date picker to an input field. */
_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]),inst.trigger=$([]),input.hasClass(this.markerClassName)||(this._attachments(input,inst),input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(inst),$.data(target,"datepicker",inst),
//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
inst.settings.disabled&&this._disableDatepicker(target))},/* Make attachments based on settings. */
_attachments:function(input,inst){var showOn,buttonText,buttonImage,appendText=this._get(inst,"appendText"),isRTL=this._get(inst,"isRTL");inst.append&&inst.append.remove(),appendText&&(inst.append=$("<span class='"+this._appendClass+"'>"+appendText+"</span>"),input[isRTL?"before":"after"](inst.append)),input.unbind("focus",this._showDatepicker),inst.trigger&&inst.trigger.remove(),showOn=this._get(inst,"showOn"),"focus"!==showOn&&"both"!==showOn||input.focus(this._showDatepicker),"button"!==showOn&&"both"!==showOn||(buttonText=this._get(inst,"buttonText"),buttonImage=this._get(inst,"buttonImage"),inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$("<button type='button'></button>").addClass(this._triggerClass).html(buttonImage?$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText}):buttonText)),input[isRTL?"before":"after"](inst.trigger),inst.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput===input[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!==input[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(input[0])):$.datepicker._showDatepicker(input[0]),!1}))},/* Apply the maximum length for the date format. */
_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var findMax,max,maxI,i,date=new Date(2009,11,20),// Ensure double digits
dateFormat=this._get(inst,"dateFormat");dateFormat.match(/[DM]/)&&(findMax=function(names){for(max=0,maxI=0,i=0;i<names.length;i++)names[i].length>max&&(max=names[i].length,maxI=i);return maxI},date.setMonth(findMax(this._get(inst,dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))),date.setDate(findMax(this._get(inst,dateFormat.match(/DD/)?"dayNames":"dayNamesShort"))+20-date.getDay())),inst.input.attr("size",this._formatDate(inst,date).length)}},/* Attach an inline date picker to a div. */
_inlineDatepicker:function(target,inst){var divSpan=$(target);divSpan.hasClass(this.markerClassName)||(divSpan.addClass(this.markerClassName).append(inst.dpDiv),$.data(target,"datepicker",inst),this._setDate(inst,this._getDefaultDate(inst),!0),this._updateDatepicker(inst),this._updateAlternate(inst),
//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
inst.settings.disabled&&this._disableDatepicker(target),
// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
inst.dpDiv.css("display","block"))},/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
_dialogDatepicker:function(input,date,onSelect,settings,pos){var id,browserWidth,browserHeight,scrollX,scrollY,inst=this._dialogInst;// internal instance
// should use actual width/height below
// move input on screen for focus, but hidden behind dialog
return inst||(this.uuid+=1,id="dp"+this.uuid,this._dialogInput=$("<input type='text' id='"+id+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),inst=this._dialogInst=this._newInst(this._dialogInput,!1),inst.settings={},$.data(this._dialogInput[0],"datepicker",inst)),datepicker_extendRemove(inst.settings,settings||{}),date=date&&date.constructor===Date?this._formatDate(inst,date):date,this._dialogInput.val(date),this._pos=pos?pos.length?pos:[pos.pageX,pos.pageY]:null,this._pos||(browserWidth=document.documentElement.clientWidth,browserHeight=document.documentElement.clientHeight,scrollX=document.documentElement.scrollLeft||document.body.scrollLeft,scrollY=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[browserWidth/2-100+scrollX,browserHeight/2-150+scrollY]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),inst.settings.onSelect=onSelect,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],"datepicker",inst),this},/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
_destroyDatepicker:function(target){var nodeName,$target=$(target),inst=$.data(target,"datepicker");$target.hasClass(this.markerClassName)&&(nodeName=target.nodeName.toLowerCase(),$.removeData(target,"datepicker"),"input"===nodeName?(inst.append.remove(),inst.trigger.remove(),$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):"div"!==nodeName&&"span"!==nodeName||$target.removeClass(this.markerClassName).empty(),datepicker_instActive===inst&&(datepicker_instActive=null))},/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
_enableDatepicker:function(target){var nodeName,inline,$target=$(target),inst=$.data(target,"datepicker");$target.hasClass(this.markerClassName)&&(nodeName=target.nodeName.toLowerCase(),"input"===nodeName?(target.disabled=!1,inst.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==nodeName&&"span"!==nodeName||(inline=$target.children("."+this._inlineClass),inline.children().removeClass("ui-state-disabled"),inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=$.map(this._disabledInputs,function(value){return value===target?null:value}))},/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
_disableDatepicker:function(target){var nodeName,inline,$target=$(target),inst=$.data(target,"datepicker");$target.hasClass(this.markerClassName)&&(nodeName=target.nodeName.toLowerCase(),"input"===nodeName?(target.disabled=!0,inst.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==nodeName&&"span"!==nodeName||(inline=$target.children("."+this._inlineClass),inline.children().addClass("ui-state-disabled"),inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=$.map(this._disabledInputs,function(value){return value===target?null:value}),this._disabledInputs[this._disabledInputs.length]=target)},/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
_isDisabledDatepicker:function(target){if(!target)return!1;for(var i=0;i<this._disabledInputs.length;i++)if(this._disabledInputs[i]===target)return!0;return!1},/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
_getInst:function(target){try{return $.data(target,"datepicker")}catch(err){throw"Missing instance data for this datepicker"}},/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
_optionDatepicker:function(target,name,value){var settings,date,minDate,maxDate,inst=this._getInst(target);
// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
return 2===arguments.length&&"string"==typeof name?"defaults"===name?$.extend({},$.datepicker._defaults):inst?"all"===name?$.extend({},inst.settings):this._get(inst,name):null:(settings=name||{},"string"==typeof name&&(settings={},settings[name]=value),void(inst&&(this._curInst===inst&&this._hideDatepicker(),date=this._getDateDatepicker(target,!0),minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),datepicker_extendRemove(inst.settings,settings),null!==minDate&&void 0!==settings.dateFormat&&void 0===settings.minDate&&(inst.settings.minDate=this._formatDate(inst,minDate)),null!==maxDate&&void 0!==settings.dateFormat&&void 0===settings.maxDate&&(inst.settings.maxDate=this._formatDate(inst,maxDate)),"disabled"in settings&&(settings.disabled?this._disableDatepicker(target):this._enableDatepicker(target)),this._attachments($(target),inst),this._autoSize(inst),this._setDate(inst,date),this._updateAlternate(inst),this._updateDatepicker(inst))))},
// change method deprecated
_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
_refreshDatepicker:function(target){var inst=this._getInst(target);inst&&this._updateDatepicker(inst)},/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
_setDateDatepicker:function(target,date){var inst=this._getInst(target);inst&&(this._setDate(inst,date),this._updateDatepicker(inst),this._updateAlternate(inst))},/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);return inst&&!inst.inline&&this._setDateFromField(inst,noDefault),inst?this._getDate(inst):null},/* Handle keystrokes. */
_doKeyDown:function(event){var onSelect,dateStr,sel,inst=$.datepicker._getInst(event.target),handled=!0,isRTL=inst.dpDiv.is(".ui-datepicker-rtl");if(inst._keyEvent=!0,$.datepicker._datepickerShowing)switch(event.keyCode){case 9:$.datepicker._hideDatepicker(),handled=!1;break;// hide on tab out
case 13:
// trigger custom callback
return sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv),sel[0]&&$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0]),onSelect=$.datepicker._get(inst,"onSelect"),onSelect?(dateStr=$.datepicker._formatDate(inst),onSelect.apply(inst.input?inst.input[0]:null,[dateStr,inst])):$.datepicker._hideDatepicker(),!1;// don't submit the form
case 27:$.datepicker._hideDatepicker();break;// hide on escape
case 33:$.datepicker._adjustDate(event.target,event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths"),"M");break;// previous month/year on page up/+ ctrl
case 34:$.datepicker._adjustDate(event.target,event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths"),"M");break;// next month/year on page down/+ ctrl
case 35:(event.ctrlKey||event.metaKey)&&$.datepicker._clearDate(event.target),handled=event.ctrlKey||event.metaKey;break;// clear on ctrl or command +end
case 36:(event.ctrlKey||event.metaKey)&&$.datepicker._gotoToday(event.target),handled=event.ctrlKey||event.metaKey;break;// current on ctrl or command +home
case 37:(event.ctrlKey||event.metaKey)&&$.datepicker._adjustDate(event.target,isRTL?1:-1,"D"),handled=event.ctrlKey||event.metaKey,
// -1 day on ctrl or command +left
event.originalEvent.altKey&&$.datepicker._adjustDate(event.target,event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths"),"M");
// next month/year on alt +left on Mac
break;case 38:(event.ctrlKey||event.metaKey)&&$.datepicker._adjustDate(event.target,-7,"D"),handled=event.ctrlKey||event.metaKey;break;// -1 week on ctrl or command +up
case 39:(event.ctrlKey||event.metaKey)&&$.datepicker._adjustDate(event.target,isRTL?-1:1,"D"),handled=event.ctrlKey||event.metaKey,
// +1 day on ctrl or command +right
event.originalEvent.altKey&&$.datepicker._adjustDate(event.target,event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths"),"M");
// next month/year on alt +right
break;case 40:(event.ctrlKey||event.metaKey)&&$.datepicker._adjustDate(event.target,7,"D"),handled=event.ctrlKey||event.metaKey;break;// +1 week on ctrl or command +down
default:handled=!1}else 36===event.keyCode&&event.ctrlKey?// display the date picker on ctrl+home
$.datepicker._showDatepicker(this):handled=!1;handled&&(event.preventDefault(),event.stopPropagation())},/* Filter entered characters - based on date format. */
_doKeyPress:function(event){var chars,chr,inst=$.datepicker._getInst(event.target);return $.datepicker._get(inst,"constrainInput")?(chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat")),chr=String.fromCharCode(null==event.charCode?event.keyCode:event.charCode),event.ctrlKey||event.metaKey||" ">chr||!chars||chars.indexOf(chr)>-1):void 0},/* Synchronise manual entry and field/alternate field. */
_doKeyUp:function(event){var date,inst=$.datepicker._getInst(event.target);if(inst.input.val()!==inst.lastVal)try{date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),inst.input?inst.input.val():null,$.datepicker._getFormatConfig(inst)),date&&(// only if valid
$.datepicker._setDateFromField(inst),$.datepicker._updateAlternate(inst),$.datepicker._updateDatepicker(inst))}catch(err){}return!0},/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
_showDatepicker:function(input){if(input=input.target||input,"input"!==input.nodeName.toLowerCase()&&(input=$("input",input.parentNode)[0]),!$.datepicker._isDisabledDatepicker(input)&&$.datepicker._lastInput!==input){var inst,beforeShow,beforeShowSettings,isFixed,offset,showAnim,duration;inst=$.datepicker._getInst(input),$.datepicker._curInst&&$.datepicker._curInst!==inst&&($.datepicker._curInst.dpDiv.stop(!0,!0),inst&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0])),beforeShow=$.datepicker._get(inst,"beforeShow"),beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{},beforeShowSettings!==!1&&(datepicker_extendRemove(inst.settings,beforeShowSettings),inst.lastVal=null,$.datepicker._lastInput=input,$.datepicker._setDateFromField(inst),$.datepicker._inDialog&&(// hide cursor
input.value=""),$.datepicker._pos||(// position below input
$.datepicker._pos=$.datepicker._findPos(input),$.datepicker._pos[1]+=input.offsetHeight),isFixed=!1,$(input).parents().each(function(){return isFixed|="fixed"===$(this).css("position"),!isFixed}),offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]},$.datepicker._pos=null,inst.dpDiv.empty(),inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(inst),offset=$.datepicker._checkOffset(inst,offset,isFixed),inst.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":isFixed?"fixed":"absolute",display:"none",left:offset.left+"px",top:offset.top+"px"}),inst.inline||(showAnim=$.datepicker._get(inst,"showAnim"),duration=$.datepicker._get(inst,"duration"),inst.dpDiv.css("z-index",datepicker_getZindex($(input))+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects.effect[showAnim]?inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration):inst.dpDiv[showAnim||"show"](showAnim?duration:null),$.datepicker._shouldFocusInput(inst)&&inst.input.focus(),$.datepicker._curInst=inst))}},/* Generate the date picker content. */
_updateDatepicker:function(inst){this.maxRows=4,datepicker_instActive=inst,inst.dpDiv.empty().append(this._generateHTML(inst)),this._attachHandlers(inst);var origyearshtml,numMonths=this._getNumberOfMonths(inst),cols=numMonths[1],width=17,activeCell=inst.dpDiv.find("."+this._dayOverClass+" a");activeCell.length>0&&datepicker_handleMouseover.apply(activeCell.get(0)),inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),cols>1&&inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",width*cols+"em"),inst.dpDiv[(1!==numMonths[0]||1!==numMonths[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),inst===$.datepicker._curInst&&$.datepicker._datepickerShowing&&$.datepicker._shouldFocusInput(inst)&&inst.input.focus(),
// deffered render of the years select (to avoid flashes on Firefox)
inst.yearshtml&&(origyearshtml=inst.yearshtml,setTimeout(function(){origyearshtml===inst.yearshtml&&inst.yearshtml&&inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml),origyearshtml=inst.yearshtml=null},0))},
// #6694 - don't focus the input if it's already focused
// this breaks the change event in IE
// Support: IE and jQuery <1.9
_shouldFocusInput:function(inst){return inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&!inst.input.is(":focus")},/* Check positioning to remain on screen. */
_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth(),dpHeight=inst.dpDiv.outerHeight(),inputWidth=inst.input?inst.input.outerWidth():0,inputHeight=inst.input?inst.input.outerHeight():0,viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft()),viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());
// now check if datepicker is showing outside window viewport - move to a better place if so.
return offset.left-=this._get(inst,"isRTL")?dpWidth-inputWidth:0,offset.left-=isFixed&&offset.left===inst.input.offset().left?$(document).scrollLeft():0,offset.top-=isFixed&&offset.top===inst.input.offset().top+inputHeight?$(document).scrollTop():0,offset.left-=Math.min(offset.left,offset.left+dpWidth>viewWidth&&viewWidth>dpWidth?Math.abs(offset.left+dpWidth-viewWidth):0),offset.top-=Math.min(offset.top,offset.top+dpHeight>viewHeight&&viewHeight>dpHeight?Math.abs(dpHeight+inputHeight):0),offset},/* Find an object's position on the screen. */
_findPos:function(obj){for(var position,inst=this._getInst(obj),isRTL=this._get(inst,"isRTL");obj&&("hidden"===obj.type||1!==obj.nodeType||$.expr.filters.hidden(obj));)obj=obj[isRTL?"previousSibling":"nextSibling"];return position=$(obj).offset(),[position.left,position.top]},/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
_hideDatepicker:function(input){var showAnim,duration,postProcess,onClose,inst=this._curInst;!inst||input&&inst!==$.data(input,"datepicker")||this._datepickerShowing&&(showAnim=this._get(inst,"showAnim"),duration=this._get(inst,"duration"),postProcess=function(){$.datepicker._tidyDialog(inst)},$.effects&&($.effects.effect[showAnim]||$.effects[showAnim])?inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess):inst.dpDiv["slideDown"===showAnim?"slideUp":"fadeIn"===showAnim?"fadeOut":"hide"](showAnim?duration:null,postProcess),showAnim||postProcess(),this._datepickerShowing=!1,onClose=this._get(inst,"onClose"),onClose&&onClose.apply(inst.input?inst.input[0]:null,[inst.input?inst.input.val():"",inst]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1)},/* Tidy up after a dialog display. */
_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},/* Close date picker if clicked elsewhere. */
_checkExternalClick:function(event){if($.datepicker._curInst){var $target=$(event.target),inst=$.datepicker._getInst($target[0]);($target[0].id===$.datepicker._mainDivId||0!==$target.parents("#"+$.datepicker._mainDivId).length||$target.hasClass($.datepicker.markerClassName)||$target.closest("."+$.datepicker._triggerClass).length||!$.datepicker._datepickerShowing||$.datepicker._inDialog&&$.blockUI)&&(!$target.hasClass($.datepicker.markerClassName)||$.datepicker._curInst===inst)||$.datepicker._hideDatepicker()}},/* Adjust one of the date sub-fields. */
_adjustDate:function(id,offset,period){var target=$(id),inst=this._getInst(target[0]);this._isDisabledDatepicker(target[0])||(this._adjustInstDate(inst,offset+("M"===period?this._get(inst,"showCurrentAtPos"):0),// undo positioning
period),this._updateDatepicker(inst))},/* Action for current link. */
_gotoToday:function(id){var date,target=$(id),inst=this._getInst(target[0]);this._get(inst,"gotoCurrent")&&inst.currentDay?(inst.selectedDay=inst.currentDay,inst.drawMonth=inst.selectedMonth=inst.currentMonth,inst.drawYear=inst.selectedYear=inst.currentYear):(date=new Date,inst.selectedDay=date.getDate(),inst.drawMonth=inst.selectedMonth=date.getMonth(),inst.drawYear=inst.selectedYear=date.getFullYear()),this._notifyChange(inst),this._adjustDate(target)},/* Action for selecting a new month/year. */
_selectMonthYear:function(id,select,period){var target=$(id),inst=this._getInst(target[0]);inst["selected"+("M"===period?"Month":"Year")]=inst["draw"+("M"===period?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10),this._notifyChange(inst),this._adjustDate(target)},/* Action for selecting a day. */
_selectDay:function(id,month,year,td){var inst,target=$(id);$(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])||(inst=this._getInst(target[0]),inst.selectedDay=inst.currentDay=$("a",td).html(),inst.selectedMonth=inst.currentMonth=month,inst.selectedYear=inst.currentYear=year,this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear)))},/* Erase the input field and hide the date picker. */
_clearDate:function(id){var target=$(id);this._selectDate(target,"")},/* Update the input field with the selected date. */
_selectDate:function(id,dateStr){var onSelect,target=$(id),inst=this._getInst(target[0]);dateStr=null!=dateStr?dateStr:this._formatDate(inst),inst.input&&inst.input.val(dateStr),this._updateAlternate(inst),onSelect=this._get(inst,"onSelect"),onSelect?onSelect.apply(inst.input?inst.input[0]:null,[dateStr,inst]):inst.input&&inst.input.trigger("change"),inst.inline?this._updateDatepicker(inst):(this._hideDatepicker(),this._lastInput=inst.input[0],"object"!=typeof inst.input[0]&&inst.input.focus(),this._lastInput=null)},/* Update any alternate field to synchronise with the main field. */
_updateAlternate:function(inst){var altFormat,date,dateStr,altField=this._get(inst,"altField");altField&&(altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat"),date=this._getDate(inst),dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst)),$(altField).each(function(){$(this).val(dateStr)}))},/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
noWeekends:function(date){var day=date.getDay();return[day>0&&6>day,""]},/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
iso8601Week:function(date){var time,checkDate=new Date(date.getTime());
// Find Thursday of this week starting on Monday
// Compare with Jan 1
return checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7)),time=checkDate.getTime(),checkDate.setMonth(0),checkDate.setDate(1),Math.floor(Math.round((time-checkDate)/864e5)/7)+1},/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
parseDate:function(format,value,settings){if(null==format||null==value)throw"Invalid arguments";if(value="object"==typeof value?value.toString():value+"",""===value)return null;var iFormat,dim,extra,date,iValue=0,shortYearCutoffTemp=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff,shortYearCutoff="string"!=typeof shortYearCutoffTemp?shortYearCutoffTemp:(new Date).getFullYear()%100+parseInt(shortYearCutoffTemp,10),dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,year=-1,month=-1,day=-1,doy=-1,literal=!1,
// Check whether a format character is doubled
lookAhead=function(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)===match;return matches&&iFormat++,matches},
// Extract a number from the string value
getNumber=function(match){var isDoubled=lookAhead(match),size="@"===match?14:"!"===match?20:"y"===match&&isDoubled?4:"o"===match?3:2,minSize="y"===match?size:1,digits=new RegExp("^\\d{"+minSize+","+size+"}"),num=value.substring(iValue).match(digits);if(!num)throw"Missing number at position "+iValue;return iValue+=num[0].length,parseInt(num[0],10)},
// Extract a name from the string value and convert to an index
getName=function(match,shortNames,longNames){var index=-1,names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]}).sort(function(a,b){return-(a[1].length-b[1].length)});if($.each(names,function(i,pair){var name=pair[1];return value.substr(iValue,name.length).toLowerCase()===name.toLowerCase()?(index=pair[0],iValue+=name.length,!1):void 0}),-1!==index)return index+1;throw"Unknown name at position "+iValue},
// Confirm that a literal character matches the string value
checkLiteral=function(){if(value.charAt(iValue)!==format.charAt(iFormat))throw"Unexpected literal at position "+iValue;iValue++};for(iFormat=0;iFormat<format.length;iFormat++)if(literal)"'"!==format.charAt(iFormat)||lookAhead("'")?checkLiteral():literal=!1;else switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":date=new Date(getNumber("@")),year=date.getFullYear(),month=date.getMonth()+1,day=date.getDate();break;case"!":date=new Date((getNumber("!")-this._ticksTo1970)/1e4),year=date.getFullYear(),month=date.getMonth()+1,day=date.getDate();break;case"'":lookAhead("'")?checkLiteral():literal=!0;break;default:checkLiteral()}if(iValue<value.length&&(extra=value.substr(iValue),!/^\s+/.test(extra)))throw"Extra/unparsed characters found in date: "+extra;if(-1===year?year=(new Date).getFullYear():100>year&&(year+=(new Date).getFullYear()-(new Date).getFullYear()%100+(shortYearCutoff>=year?0:-100)),doy>-1)for(month=1,day=doy;;){if(dim=this._getDaysInMonth(year,month-1),dim>=day)break;month++,day-=dim}if(date=this._daylightSavingAdjust(new Date(year,month-1,day)),date.getFullYear()!==year||date.getMonth()+1!==month||date.getDate()!==day)throw"Invalid date";return date},/* Standard date formats. */
ATOM:"yy-mm-dd",// RFC 3339 (ISO 8601)
COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",// RFC 822
TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",// ISO 8601
_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
formatDate:function(format,date,settings){if(!date)return"";var iFormat,dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,
// Check whether a format character is doubled
lookAhead=function(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)===match;return matches&&iFormat++,matches},
// Format a number, with leading zero if necessary
formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match))for(;num.length<len;)num="0"+num;return num},
// Format a name, short or long as requested
formatName=function(match,value,shortNames,longNames){return lookAhead(match)?longNames[value]:shortNames[value]},output="",literal=!1;if(date)for(iFormat=0;iFormat<format.length;iFormat++)if(literal)"'"!==format.charAt(iFormat)||lookAhead("'")?output+=format.charAt(iFormat):literal=!1;else switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/864e5),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100;break;case"@":output+=date.getTime();break;case"!":output+=1e4*date.getTime()+this._ticksTo1970;break;case"'":lookAhead("'")?output+="'":literal=!0;break;default:output+=format.charAt(iFormat)}return output},/* Extract all possible characters from the date format. */
_possibleChars:function(format){var iFormat,chars="",literal=!1,
// Check whether a format character is doubled
lookAhead=function(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)===match;return matches&&iFormat++,matches};for(iFormat=0;iFormat<format.length;iFormat++)if(literal)"'"!==format.charAt(iFormat)||lookAhead("'")?chars+=format.charAt(iFormat):literal=!1;else switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;// Accept anything
case"'":lookAhead("'")?chars+="'":literal=!0;break;default:chars+=format.charAt(iFormat)}return chars},/* Get a setting value, defaulting if necessary. */
_get:function(inst,name){return void 0!==inst.settings[name]?inst.settings[name]:this._defaults[name]},/* Parse existing date and initialise date picker. */
_setDateFromField:function(inst,noDefault){if(inst.input.val()!==inst.lastVal){var dateFormat=this._get(inst,"dateFormat"),dates=inst.lastVal=inst.input?inst.input.val():null,defaultDate=this._getDefaultDate(inst),date=defaultDate,settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){dates=noDefault?"":dates}inst.selectedDay=date.getDate(),inst.drawMonth=inst.selectedMonth=date.getMonth(),inst.drawYear=inst.selectedYear=date.getFullYear(),inst.currentDay=dates?date.getDate():0,inst.currentMonth=dates?date.getMonth():0,inst.currentYear=dates?date.getFullYear():0,this._adjustInstDate(inst)}},/* Retrieve the default date shown on opening. */
_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date))},/* A date may be specified as an exact value or a relative one. */
_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date;return date.setDate(date.getDate()+offset),date},offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))}catch(e){}for(var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date,year=date.getFullYear(),month=date.getMonth(),day=date.getDate(),pattern=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,matches=pattern.exec(offset);matches;){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=7*parseInt(matches[1],10);break;case"m":case"M":month+=parseInt(matches[1],10),day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10),day=Math.min(day,$.datepicker._getDaysInMonth(year,month))}matches=pattern.exec(offset)}return new Date(year,month,day)},newDate=null==date||""===date?defaultDate:"string"==typeof date?offsetString(date):"number"==typeof date?isNaN(date)?defaultDate:offsetNumeric(date):new Date(date.getTime());return newDate=newDate&&"Invalid Date"===newDate.toString()?defaultDate:newDate,newDate&&(newDate.setHours(0),newDate.setMinutes(0),newDate.setSeconds(0),newDate.setMilliseconds(0)),this._daylightSavingAdjust(newDate)},/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
_daylightSavingAdjust:function(date){return date?(date.setHours(date.getHours()>12?date.getHours()+2:0),date):null},/* Set the date(s) directly. */
_setDate:function(inst,date,noChange){var clear=!date,origMonth=inst.selectedMonth,origYear=inst.selectedYear,newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date));inst.selectedDay=inst.currentDay=newDate.getDate(),inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth(),inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear(),origMonth===inst.selectedMonth&&origYear===inst.selectedYear||noChange||this._notifyChange(inst),this._adjustInstDate(inst),inst.input&&inst.input.val(clear?"":this._formatDate(inst))},/* Retrieve the date(s) directly. */
_getDate:function(inst){var startDate=!inst.currentYear||inst.input&&""===inst.input.val()?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));return startDate},/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths"),id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){$.datepicker._adjustDate(id,-stepMonths,"M")},next:function(){$.datepicker._adjustDate(id,+stepMonths,"M")},hide:function(){$.datepicker._hideDatepicker()},today:function(){$.datepicker._gotoToday(id)},selectDay:function(){return $.datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return $.datepicker._selectMonthYear(id,this,"M"),!1},selectYear:function(){return $.datepicker._selectMonthYear(id,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")])})},/* Generate the HTML for the current state of the date picker. */
_generateHTML:function(inst){var maxDraw,prevText,prev,nextText,next,currentText,gotoDate,controls,buttonPanel,firstDay,showWeek,dayNames,dayNamesMin,monthNames,monthNamesShort,beforeShowDay,showOtherMonths,selectOtherMonths,defaultDate,html,dow,row,group,col,selectedDate,cornerClass,calender,thead,day,daysInMonth,leadDays,curRows,numRows,printDate,dRow,tbody,daySettings,otherMonth,unselectable,tempDate=new Date,today=this._daylightSavingAdjust(new Date(tempDate.getFullYear(),tempDate.getMonth(),tempDate.getDate())),// clear time
isRTL=this._get(inst,"isRTL"),showButtonPanel=this._get(inst,"showButtonPanel"),hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext"),navigationAsDateFormat=this._get(inst,"navigationAsDateFormat"),numMonths=this._getNumberOfMonths(inst),showCurrentAtPos=this._get(inst,"showCurrentAtPos"),stepMonths=this._get(inst,"stepMonths"),isMultiMonth=1!==numMonths[0]||1!==numMonths[1],currentDate=this._daylightSavingAdjust(inst.currentDay?new Date(inst.currentYear,inst.currentMonth,inst.currentDay):new Date(9999,9,9)),minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),drawMonth=inst.drawMonth-showCurrentAtPos,drawYear=inst.drawYear;if(0>drawMonth&&(drawMonth+=12,drawYear--),maxDate)for(maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-numMonths[0]*numMonths[1]+1,maxDate.getDate())),maxDraw=minDate&&minDate>maxDraw?minDate:maxDraw;this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw;)drawMonth--,0>drawMonth&&(drawMonth=11,drawYear--);for(inst.drawMonth=drawMonth,inst.drawYear=drawYear,prevText=this._get(inst,"prevText"),prevText=navigationAsDateFormat?this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)):prevText,prev=this._canAdjustMonth(inst,-1,drawYear,drawMonth)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>":hideIfNoPrevNext?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>",nextText=this._get(inst,"nextText"),nextText=navigationAsDateFormat?this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)):nextText,next=this._canAdjustMonth(inst,1,drawYear,drawMonth)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>":hideIfNoPrevNext?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>",currentText=this._get(inst,"currentText"),gotoDate=this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today,currentText=navigationAsDateFormat?this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)):currentText,controls=inst.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(inst,"closeText")+"</button>",buttonPanel=showButtonPanel?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"",firstDay=parseInt(this._get(inst,"firstDay"),10),firstDay=isNaN(firstDay)?0:firstDay,showWeek=this._get(inst,"showWeek"),dayNames=this._get(inst,"dayNames"),dayNamesMin=this._get(inst,"dayNamesMin"),monthNames=this._get(inst,"monthNames"),monthNamesShort=this._get(inst,"monthNamesShort"),beforeShowDay=this._get(inst,"beforeShowDay"),showOtherMonths=this._get(inst,"showOtherMonths"),selectOtherMonths=this._get(inst,"selectOtherMonths"),defaultDate=this._getDefaultDate(inst),html="",row=0;row<numMonths[0];row++){for(group="",this.maxRows=4,col=0;col<numMonths[1];col++){if(selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay)),cornerClass=" ui-corner-all",calender="",isMultiMonth){if(calender+="<div class='ui-datepicker-group",numMonths[1]>1)switch(col){case 0:calender+=" ui-datepicker-group-first",cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last",cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle",cornerClass=""}calender+="'>"}for(calender+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+cornerClass+"'>"+(/all|left/.test(cornerClass)&&0===row?isRTL?next:prev:"")+(/all|right/.test(cornerClass)&&0===row?isRTL?prev:next:"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+// draw month headers
"</div><table class='ui-datepicker-calendar'><thead><tr>",thead=showWeek?"<th class='ui-datepicker-week-col'>"+this._get(inst,"weekHeader")+"</th>":"",dow=0;7>dow;dow++)day=(dow+firstDay)%7,thead+="<th scope='col'"+((dow+firstDay+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+dayNames[day]+"'>"+dayNamesMin[day]+"</span></th>";for(calender+=thead+"</tr></thead><tbody>",daysInMonth=this._getDaysInMonth(drawYear,drawMonth),drawYear===inst.selectedYear&&drawMonth===inst.selectedMonth&&(inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)),leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7,curRows=Math.ceil((leadDays+daysInMonth)/7),numRows=isMultiMonth&&this.maxRows>curRows?this.maxRows:curRows,this.maxRows=numRows,printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays)),dRow=0;numRows>dRow;dRow++){for(calender+="<tr>",tbody=showWeek?"<td class='ui-datepicker-week-col'>"+this._get(inst,"calculateWeek")(printDate)+"</td>":"",dow=0;7>dow;dow++)daySettings=beforeShowDay?beforeShowDay.apply(inst.input?inst.input[0]:null,[printDate]):[!0,""],otherMonth=printDate.getMonth()!==drawMonth,unselectable=otherMonth&&!selectOtherMonths||!daySettings[0]||minDate&&minDate>printDate||maxDate&&printDate>maxDate,tbody+="<td class='"+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+(printDate.getTime()===selectedDate.getTime()&&drawMonth===inst.selectedMonth&&inst._keyEvent||defaultDate.getTime()===printDate.getTime()&&defaultDate.getTime()===selectedDate.getTime()?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()===currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()===today.getTime()?" ui-datepicker-today":""))+"'"+(otherMonth&&!showOtherMonths||!daySettings[2]?"":" title='"+daySettings[2].replace(/'/g,"&#39;")+"'")+(unselectable?"":" data-handler='selectDay' data-event='click' data-month='"+printDate.getMonth()+"' data-year='"+printDate.getFullYear()+"'")+">"+(otherMonth&&!showOtherMonths?"&#xa0;":unselectable?"<span class='ui-state-default'>"+printDate.getDate()+"</span>":"<a class='ui-state-default"+(printDate.getTime()===today.getTime()?" ui-state-highlight":"")+(printDate.getTime()===currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+"' href='#'>"+printDate.getDate()+"</a>")+"</td>",printDate.setDate(printDate.getDate()+1),printDate=this._daylightSavingAdjust(printDate);calender+=tbody+"</tr>"}drawMonth++,drawMonth>11&&(drawMonth=0,drawYear++),calender+="</tbody></table>"+(isMultiMonth?"</div>"+(numMonths[0]>0&&col===numMonths[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),group+=calender}html+=group}return html+=buttonPanel,inst._keyEvent=!1,html},/* Generate the month and year header. */
_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var inMinYear,inMaxYear,month,years,thisYear,determineYear,year,endYear,changeMonth=this._get(inst,"changeMonth"),changeYear=this._get(inst,"changeYear"),showMonthAfterYear=this._get(inst,"showMonthAfterYear"),html="<div class='ui-datepicker-title'>",monthHtml="";
// month selection
if(secondary||!changeMonth)monthHtml+="<span class='ui-datepicker-month'>"+monthNames[drawMonth]+"</span>";else{for(inMinYear=minDate&&minDate.getFullYear()===drawYear,inMaxYear=maxDate&&maxDate.getFullYear()===drawYear,monthHtml+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",month=0;12>month;month++)(!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())&&(monthHtml+="<option value='"+month+"'"+(month===drawMonth?" selected='selected'":"")+">"+monthNamesShort[month]+"</option>");monthHtml+="</select>"}
// year selection
if(showMonthAfterYear||(html+=monthHtml+(!secondary&&changeMonth&&changeYear?"":"&#xa0;")),!inst.yearshtml)if(inst.yearshtml="",secondary||!changeYear)html+="<span class='ui-datepicker-year'>"+drawYear+"</span>";else{for(
// determine range of years to display
years=this._get(inst,"yearRange").split(":"),thisYear=(new Date).getFullYear(),determineYear=function(value){var year=value.match(/c[+\-].*/)?drawYear+parseInt(value.substring(1),10):value.match(/[+\-].*/)?thisYear+parseInt(value,10):parseInt(value,10);return isNaN(year)?thisYear:year},year=determineYear(years[0]),endYear=Math.max(year,determineYear(years[1]||"")),year=minDate?Math.max(year,minDate.getFullYear()):year,endYear=maxDate?Math.min(endYear,maxDate.getFullYear()):endYear,inst.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";endYear>=year;year++)inst.yearshtml+="<option value='"+year+"'"+(year===drawYear?" selected='selected'":"")+">"+year+"</option>";inst.yearshtml+="</select>",html+=inst.yearshtml,inst.yearshtml=null}// Close datepicker_header
return html+=this._get(inst,"yearSuffix"),showMonthAfterYear&&(html+=(!secondary&&changeMonth&&changeYear?"":"&#xa0;")+monthHtml),html+="</div>"},/* Adjust one of the date sub-fields. */
_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+("Y"===period?offset:0),month=inst.drawMonth+("M"===period?offset:0),day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+("D"===period?offset:0),date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate(),inst.drawMonth=inst.selectedMonth=date.getMonth(),inst.drawYear=inst.selectedYear=date.getFullYear(),"M"!==period&&"Y"!==period||this._notifyChange(inst)},/* Ensure a date is within any min/max bounds. */
_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),newDate=minDate&&minDate>date?minDate:date;return maxDate&&newDate>maxDate?maxDate:newDate},/* Notify change of month/year. */
_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");onChange&&onChange.apply(inst.input?inst.input[0]:null,[inst.selectedYear,inst.selectedMonth+1,inst])},/* Determine the number of months to show. */
_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return null==numMonths?[1,1]:"number"==typeof numMonths?[1,numMonths]:numMonths},/* Determine the current maximum date - ensure no time components are set. */
_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)},/* Find the number of days in a given month. */
_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()},/* Find the day of the week of the first of a month. */
_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},/* Determines if we should allow a "next/prev" month display change. */
_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst),date=this._daylightSavingAdjust(new Date(curYear,curMonth+(0>offset?offset:numMonths[0]*numMonths[1]),1));return 0>offset&&date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth())),this._isInRange(inst,date)},/* Is the given date in the accepted range? */
_isInRange:function(inst,date){var yearSplit,currentYear,minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),minYear=null,maxYear=null,years=this._get(inst,"yearRange");return years&&(yearSplit=years.split(":"),currentYear=(new Date).getFullYear(),minYear=parseInt(yearSplit[0],10),maxYear=parseInt(yearSplit[1],10),yearSplit[0].match(/[+\-].*/)&&(minYear+=currentYear),yearSplit[1].match(/[+\-].*/)&&(maxYear+=currentYear)),(!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime())&&(!minYear||date.getFullYear()>=minYear)&&(!maxYear||date.getFullYear()<=maxYear)},/* Provide the configuration settings for formatting/parsing. */
_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");return shortYearCutoff="string"!=typeof shortYearCutoff?shortYearCutoff:(new Date).getFullYear()%100+parseInt(shortYearCutoff,10),{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},/* Format the given date for display. */
_formatDate:function(inst,day,month,year){day||(inst.currentDay=inst.selectedDay,inst.currentMonth=inst.selectedMonth,inst.currentYear=inst.selectedYear);var date=day?"object"==typeof day?day:this._daylightSavingAdjust(new Date(year,month,day)):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}}),/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker=function(options){/* Verify an empty collection wasn't passed - Fixes #6976 */
if(!this.length)return this;/* Initialise the date picker. */
$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick),$.datepicker.initialized=!0),/* Append datepicker main container to body if not exist. */
0===$("#"+$.datepicker._mainDivId).length&&$("body").append($.datepicker.dpDiv);var otherArgs=Array.prototype.slice.call(arguments,1);return"string"!=typeof options||"isDisabled"!==options&&"getDate"!==options&&"widget"!==options?"option"===options&&2===arguments.length&&"string"==typeof arguments[1]?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs)):this.each(function(){"string"==typeof options?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)}):$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))},$.datepicker=new Datepicker,// singleton instance
$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.11.4";$.datepicker;/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */
$.widget("ui.draggable",$.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,
// callbacks
drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(key,value){this._super(key,value),"handle"===key&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(event){var o=this.options;
// among others, prevent a drag on a resizable-handle
// among others, prevent a drag on a resizable-handle
//Quit if we're not on a valid handle
return this._blurActiveElement(event),this.helper||o.disabled||$(event.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(event),this.handle?(this._blockFrames(o.iframeFix===!0?"iframe":o.iframeFix),!0):!1)},_blockFrames:function(selector){this.iframeBlocks=this.document.find(selector).map(function(){var iframe=$(this);return $("<div>").css("position","absolute").appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(event){var document=this.document[0];
// Only need to blur if the event occurred on the draggable itself, see #10527
if(this.handleElement.is(event.target))
// support: IE9
// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
try{
// Support: IE9, IE10
// If the <body> is blurred, IE will switch windows, see #9520
document.activeElement&&"body"!==document.activeElement.nodeName.toLowerCase()&&
// Blur any element that currently has focus, see #4261
$(document.activeElement).blur()}catch(error){}},_mouseStart:function(event){var o=this.options;
//Trigger event + callbacks
//Create and append the visible helper
//Cache the helper size
//If ddmanager is used for droppables, set the global draggable
/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */
//Cache the margins of the original element
//Store the helper's css position
//The element's absolute position on the page minus margins
//Generate the original position
//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
//Set a containment if given in the options
//Trigger event + callbacks
//Recache the helper size
//Prepare the droppable offsets
// Reset helper's right/bottom css if they're set and set explicit width/height instead
// as this prevents resizing of elements with right/bottom set (see #7772)
//Execute the drag once - this causes the helper not to be visible before getting its correct position
//If the ddmanager is used for droppables, inform the manager that dragging has started (see #5003)
return this.helper=this._createHelper(event),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),$.ui.ddmanager&&($.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===$(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(event),this.originalPosition=this.position=this._generatePosition(event,!1),this.originalPageX=event.pageX,this.originalPageY=event.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this._setContainment(),this._trigger("start",event)===!1?(this._clear(),!1):(this._cacheHelperProportions(),$.ui.ddmanager&&!o.dropBehaviour&&$.ui.ddmanager.prepareOffsets(this,event),this._normalizeRightBottom(),this._mouseDrag(event,!0),$.ui.ddmanager&&$.ui.ddmanager.dragStart(this,event),!0)},_refreshOffsets:function(event){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:event.pageX-this.offset.left,top:event.pageY-this.offset.top}},_mouseDrag:function(event,noPropagation){
//Call plugins and callbacks and use the resulting position if something is returned
if(
// reset any necessary cached properties (see #5009)
this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),
//Compute the helpers position
this.position=this._generatePosition(event,!0),this.positionAbs=this._convertPositionTo("absolute"),!noPropagation){var ui=this._uiHash();if(this._trigger("drag",event,ui)===!1)return this._mouseUp({}),!1;this.position=ui.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",$.ui.ddmanager&&$.ui.ddmanager.drag(this,event),!1},_mouseStop:function(event){
//If we are using droppables, inform the manager about the drop
var that=this,dropped=!1;
//if a drop comes from outside (a sortable)
return $.ui.ddmanager&&!this.options.dropBehaviour&&(dropped=$.ui.ddmanager.drop(this,event)),this.dropped&&(dropped=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!dropped||"valid"===this.options.revert&&dropped||this.options.revert===!0||$.isFunction(this.options.revert)&&this.options.revert.call(this.element,dropped)?$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){that._trigger("stop",event)!==!1&&that._clear()}):this._trigger("stop",event)!==!1&&this._clear(),!1},_mouseUp:function(event){
//If the ddmanager is used for droppables, inform the manager that dragging has stopped (see #5003)
// Only need to focus if the event occurred on the draggable itself, see #10527
// The interaction is over; whether or not the click resulted in a drag, focus the element
return this._unblockFrames(),$.ui.ddmanager&&$.ui.ddmanager.dragStop(this,event),this.handleElement.is(event.target)&&this.element.focus(),$.ui.mouse.prototype._mouseUp.call(this,event)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(event){return this.options.handle?!!$(event.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(event){var o=this.options,helperIsFunction=$.isFunction(o.helper),helper=helperIsFunction?$(o.helper.apply(this.element[0],[event])):"clone"===o.helper?this.element.clone().removeAttr("id"):this.element;
// http://bugs.jqueryui.com/ticket/9446
// a helper function can return the original element
// which wouldn't have been set to relative in _create
return helper.parents("body").length||helper.appendTo("parent"===o.appendTo?this.element[0].parentNode:o.appendTo),helperIsFunction&&helper[0]===this.element[0]&&this._setPositionRelative(),helper[0]===this.element[0]||/(fixed|absolute)/.test(helper.css("position"))||helper.css("position","absolute"),helper},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(obj){"string"==typeof obj&&(obj=obj.split(" ")),$.isArray(obj)&&(obj={left:+obj[0],top:+obj[1]||0}),"left"in obj&&(this.offset.click.left=obj.left+this.margins.left),"right"in obj&&(this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left),"top"in obj&&(this.offset.click.top=obj.top+this.margins.top),"bottom"in obj&&(this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top)},_isRootNode:function(element){return/(html|body)/i.test(element.tagName)||element===this.document[0]},_getParentOffset:function(){
//Get the offsetParent and cache its position
var po=this.offsetParent.offset(),document=this.document[0];
// This is a special case where we need to modify a offset calculated on start, since the following happened:
// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])&&(po.left+=this.scrollParent.scrollLeft(),po.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(po={top:0,left:0}),{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var p=this.element.position(),scrollIsRootNode=this._isRootNode(this.scrollParent[0]);return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+(scrollIsRootNode?0:this.scrollParent.scrollTop()),left:p.left-(parseInt(this.helper.css("left"),10)||0)+(scrollIsRootNode?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var isUserScrollable,c,ce,o=this.options,document=this.document[0];return this.relativeContainer=null,o.containment?"window"===o.containment?void(this.containment=[$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,$(window).scrollLeft()+$(window).width()-this.helperProportions.width-this.margins.left,$(window).scrollTop()+($(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===o.containment?void(this.containment=[0,0,$(document).width()-this.helperProportions.width-this.margins.left,($(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):o.containment.constructor===Array?void(this.containment=o.containment):("parent"===o.containment&&(o.containment=this.helper[0].parentNode),c=$(o.containment),ce=c[0],void(ce&&(isUserScrollable=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(isUserScrollable?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(isUserScrollable?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c))):void(this.containment=null)},_convertPositionTo:function(d,pos){pos||(pos=this.position);var mod="absolute"===d?1:-1,scrollIsRootNode=this._isRootNode(this.scrollParent[0]);return{top:pos.top+// The absolute mouse position
this.offset.relative.top*mod+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.top*mod-// The offsetParent's offset without borders (offset + border)
("fixed"===this.cssPosition?-this.offset.scroll.top:scrollIsRootNode?0:this.offset.scroll.top)*mod,left:pos.left+// The absolute mouse position
this.offset.relative.left*mod+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.left*mod-// The offsetParent's offset without borders (offset + border)
("fixed"===this.cssPosition?-this.offset.scroll.left:scrollIsRootNode?0:this.offset.scroll.left)*mod}},_generatePosition:function(event,constrainPosition){var containment,co,top,left,o=this.options,scrollIsRootNode=this._isRootNode(this.scrollParent[0]),pageX=event.pageX,pageY=event.pageY;
// Cache the scroll
/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */
// If we are not dragging yet, we won't check for options
//Check for grid elements set to 0 to prevent divide by 0 error causing invalid argument errors in IE (see ticket #6950)
return scrollIsRootNode&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),constrainPosition&&(this.containment&&(this.relativeContainer?(co=this.relativeContainer.offset(),containment=[this.containment[0]+co.left,this.containment[1]+co.top,this.containment[2]+co.left,this.containment[3]+co.top]):containment=this.containment,event.pageX-this.offset.click.left<containment[0]&&(pageX=containment[0]+this.offset.click.left),event.pageY-this.offset.click.top<containment[1]&&(pageY=containment[1]+this.offset.click.top),event.pageX-this.offset.click.left>containment[2]&&(pageX=containment[2]+this.offset.click.left),event.pageY-this.offset.click.top>containment[3]&&(pageY=containment[3]+this.offset.click.top)),o.grid&&(top=o.grid[1]?this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,pageY=containment?top-this.offset.click.top>=containment[1]||top-this.offset.click.top>containment[3]?top:top-this.offset.click.top>=containment[1]?top-o.grid[1]:top+o.grid[1]:top,left=o.grid[0]?this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,pageX=containment?left-this.offset.click.left>=containment[0]||left-this.offset.click.left>containment[2]?left:left-this.offset.click.left>=containment[0]?left-o.grid[0]:left+o.grid[0]:left),"y"===o.axis&&(pageX=this.originalPageX),"x"===o.axis&&(pageY=this.originalPageY)),{top:pageY-// The absolute mouse position
this.offset.click.top-// Click offset (relative to the element)
this.offset.relative.top-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.top+(// The offsetParent's offset without borders (offset + border)
"fixed"===this.cssPosition?-this.offset.scroll.top:scrollIsRootNode?0:this.offset.scroll.top),left:pageX-// The absolute mouse position
this.offset.click.left-// Click offset (relative to the element)
this.offset.relative.left-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.left+(// The offsetParent's offset without borders (offset + border)
"fixed"===this.cssPosition?-this.offset.scroll.left:scrollIsRootNode?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},
// From now on bulk stuff - mainly helpers
_trigger:function(type,event,ui){
// Absolute position and offset (see #6884 ) have to be recalculated after plugins
return ui=ui||this._uiHash(),$.ui.plugin.call(this,type,[event,ui,this],!0),/^(drag|start|stop)/.test(type)&&(this.positionAbs=this._convertPositionTo("absolute"),ui.offset=this.positionAbs),$.Widget.prototype._trigger.call(this,type,event,ui)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),$.ui.plugin.add("draggable","connectToSortable",{start:function(event,ui,draggable){var uiSortable=$.extend({},ui,{item:draggable.element});draggable.sortables=[],$(draggable.options.connectToSortable).each(function(){var sortable=$(this).sortable("instance");sortable&&!sortable.options.disabled&&(draggable.sortables.push(sortable),
// refreshPositions is called at drag start to refresh the containerCache
// which is used in drag. This ensures it's initialized and synchronized
// with any changes that might have happened on the page since initialization.
sortable.refreshPositions(),sortable._trigger("activate",event,uiSortable))})},stop:function(event,ui,draggable){var uiSortable=$.extend({},ui,{item:draggable.element});draggable.cancelHelperRemoval=!1,$.each(draggable.sortables,function(){var sortable=this;sortable.isOver?(sortable.isOver=0,
// Allow this sortable to handle removing the helper
draggable.cancelHelperRemoval=!0,sortable.cancelHelperRemoval=!1,
// Use _storedCSS To restore properties in the sortable,
// as this also handles revert (#9675) since the draggable
// may have modified them in unexpected ways (#8809)
sortable._storedCSS={position:sortable.placeholder.css("position"),top:sortable.placeholder.css("top"),left:sortable.placeholder.css("left")},sortable._mouseStop(event),
// Once drag has ended, the sortable should return to using
// its original helper, not the shared helper from draggable
sortable.options.helper=sortable.options._helper):(
// Prevent this Sortable from removing the helper.
// However, don't set the draggable to remove the helper
// either as another connected Sortable may yet handle the removal.
sortable.cancelHelperRemoval=!0,sortable._trigger("deactivate",event,uiSortable))})},drag:function(event,ui,draggable){$.each(draggable.sortables,function(){var innermostIntersecting=!1,sortable=this;
// Copy over variables that sortable's _intersectsWith uses
sortable.positionAbs=draggable.positionAbs,sortable.helperProportions=draggable.helperProportions,sortable.offset.click=draggable.offset.click,sortable._intersectsWith(sortable.containerCache)&&(innermostIntersecting=!0,$.each(draggable.sortables,function(){return this.positionAbs=draggable.positionAbs,this.helperProportions=draggable.helperProportions,this.offset.click=draggable.offset.click,this!==sortable&&this._intersectsWith(this.containerCache)&&$.contains(sortable.element[0],this.element[0])&&(innermostIntersecting=!1),innermostIntersecting})),innermostIntersecting?(
// If it intersects, we use a little isOver variable and set it once,
// so that the move-in stuff gets fired only once.
sortable.isOver||(sortable.isOver=1,
// Store draggable's parent in case we need to reappend to it later.
draggable._parent=ui.helper.parent(),sortable.currentItem=ui.helper.appendTo(sortable.element).data("ui-sortable-item",!0),
// Store helper option to later restore it
sortable.options._helper=sortable.options.helper,sortable.options.helper=function(){return ui.helper[0]},
// Fire the start events of the sortable with our passed browser event,
// and our own helper (so it doesn't create a new one)
event.target=sortable.currentItem[0],sortable._mouseCapture(event,!0),sortable._mouseStart(event,!0,!0),
// Because the browser event is way off the new appended portlet,
// modify necessary variables to reflect the changes
sortable.offset.click.top=draggable.offset.click.top,sortable.offset.click.left=draggable.offset.click.left,sortable.offset.parent.left-=draggable.offset.parent.left-sortable.offset.parent.left,sortable.offset.parent.top-=draggable.offset.parent.top-sortable.offset.parent.top,draggable._trigger("toSortable",event),
// Inform draggable that the helper is in a valid drop zone,
// used solely in the revert option to handle "valid/invalid".
draggable.dropped=sortable.element,
// Need to refreshPositions of all sortables in the case that
// adding to one sortable changes the location of the other sortables (#9675)
$.each(draggable.sortables,function(){this.refreshPositions()}),
// hack so receive/update callbacks work (mostly)
draggable.currentItem=draggable.element,sortable.fromOutside=draggable),sortable.currentItem&&(sortable._mouseDrag(event),
// Copy the sortable's position because the draggable's can potentially reflect
// a relative position, while sortable is always absolute, which the dragged
// element has now become. (#8809)
ui.position=sortable.position)):
// If it doesn't intersect with the sortable, and it intersected before,
// we fake the drag stop of the sortable, but make sure it doesn't remove
// the helper by using cancelHelperRemoval.
sortable.isOver&&(sortable.isOver=0,sortable.cancelHelperRemoval=!0,
// Calling sortable's mouseStop would trigger a revert,
// so revert must be temporarily false until after mouseStop is called.
sortable.options._revert=sortable.options.revert,sortable.options.revert=!1,sortable._trigger("out",event,sortable._uiHash(sortable)),sortable._mouseStop(event,!0),
// restore sortable behaviors that were modfied
// when the draggable entered the sortable area (#9481)
sortable.options.revert=sortable.options._revert,sortable.options.helper=sortable.options._helper,sortable.placeholder&&sortable.placeholder.remove(),
// Restore and recalculate the draggable's offset considering the sortable
// may have modified them in unexpected ways. (#8809, #10669)
ui.helper.appendTo(draggable._parent),draggable._refreshOffsets(event),ui.position=draggable._generatePosition(event,!0),draggable._trigger("fromSortable",event),
// Inform draggable that the helper is no longer in a valid drop zone
draggable.dropped=!1,
// Need to refreshPositions of all sortables just in case removing
// from one sortable changes the location of other sortables (#9675)
$.each(draggable.sortables,function(){this.refreshPositions()}))})}}),$.ui.plugin.add("draggable","cursor",{start:function(event,ui,instance){var t=$("body"),o=instance.options;t.css("cursor")&&(o._cursor=t.css("cursor")),t.css("cursor",o.cursor)},stop:function(event,ui,instance){var o=instance.options;o._cursor&&$("body").css("cursor",o._cursor)}}),$.ui.plugin.add("draggable","opacity",{start:function(event,ui,instance){var t=$(ui.helper),o=instance.options;t.css("opacity")&&(o._opacity=t.css("opacity")),t.css("opacity",o.opacity)},stop:function(event,ui,instance){var o=instance.options;o._opacity&&$(ui.helper).css("opacity",o._opacity)}}),$.ui.plugin.add("draggable","scroll",{start:function(event,ui,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(event,ui,i){var o=i.options,scrolled=!1,scrollParent=i.scrollParentNotHidden[0],document=i.document[0];scrollParent!==document&&"HTML"!==scrollParent.tagName?(o.axis&&"x"===o.axis||(i.overflowOffset.top+scrollParent.offsetHeight-event.pageY<o.scrollSensitivity?scrollParent.scrollTop=scrolled=scrollParent.scrollTop+o.scrollSpeed:event.pageY-i.overflowOffset.top<o.scrollSensitivity&&(scrollParent.scrollTop=scrolled=scrollParent.scrollTop-o.scrollSpeed)),o.axis&&"y"===o.axis||(i.overflowOffset.left+scrollParent.offsetWidth-event.pageX<o.scrollSensitivity?scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft+o.scrollSpeed:event.pageX-i.overflowOffset.left<o.scrollSensitivity&&(scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft-o.scrollSpeed))):(o.axis&&"x"===o.axis||(event.pageY-$(document).scrollTop()<o.scrollSensitivity?scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed):$(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity&&(scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed))),o.axis&&"y"===o.axis||(event.pageX-$(document).scrollLeft()<o.scrollSensitivity?scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed):$(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity&&(scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed)))),scrolled!==!1&&$.ui.ddmanager&&!o.dropBehaviour&&$.ui.ddmanager.prepareOffsets(i,event)}}),$.ui.plugin.add("draggable","snap",{start:function(event,ui,i){var o=i.options;i.snapElements=[],$(o.snap.constructor!==String?o.snap.items||":data(ui-draggable)":o.snap).each(function(){var $t=$(this),$o=$t.offset();this!==i.element[0]&&i.snapElements.push({item:this,width:$t.outerWidth(),height:$t.outerHeight(),top:$o.top,left:$o.left})})},drag:function(event,ui,inst){var ts,bs,ls,rs,l,r,t,b,i,first,o=inst.options,d=o.snapTolerance,x1=ui.offset.left,x2=x1+inst.helperProportions.width,y1=ui.offset.top,y2=y1+inst.helperProportions.height;for(i=inst.snapElements.length-1;i>=0;i--)l=inst.snapElements[i].left-inst.margins.left,r=l+inst.snapElements[i].width,t=inst.snapElements[i].top-inst.margins.top,b=t+inst.snapElements[i].height,l-d>x2||x1>r+d||t-d>y2||y1>b+d||!$.contains(inst.snapElements[i].item.ownerDocument,inst.snapElements[i].item)?(inst.snapElements[i].snapping&&inst.options.snap.release&&inst.options.snap.release.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})),inst.snapElements[i].snapping=!1):("inner"!==o.snapMode&&(ts=Math.abs(t-y2)<=d,bs=Math.abs(b-y1)<=d,ls=Math.abs(l-x2)<=d,rs=Math.abs(r-x1)<=d,ts&&(ui.position.top=inst._convertPositionTo("relative",{top:t-inst.helperProportions.height,left:0}).top),bs&&(ui.position.top=inst._convertPositionTo("relative",{top:b,left:0}).top),ls&&(ui.position.left=inst._convertPositionTo("relative",{top:0,left:l-inst.helperProportions.width}).left),rs&&(ui.position.left=inst._convertPositionTo("relative",{top:0,left:r}).left)),first=ts||bs||ls||rs,"outer"!==o.snapMode&&(ts=Math.abs(t-y1)<=d,bs=Math.abs(b-y2)<=d,ls=Math.abs(l-x1)<=d,rs=Math.abs(r-x2)<=d,ts&&(ui.position.top=inst._convertPositionTo("relative",{top:t,left:0}).top),bs&&(ui.position.top=inst._convertPositionTo("relative",{top:b-inst.helperProportions.height,left:0}).top),ls&&(ui.position.left=inst._convertPositionTo("relative",{top:0,left:l}).left),rs&&(ui.position.left=inst._convertPositionTo("relative",{top:0,left:r-inst.helperProportions.width}).left)),!inst.snapElements[i].snapping&&(ts||bs||ls||rs||first)&&inst.options.snap.snap&&inst.options.snap.snap.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})),inst.snapElements[i].snapping=ts||bs||ls||rs||first)}}),$.ui.plugin.add("draggable","stack",{start:function(event,ui,instance){var min,o=instance.options,group=$.makeArray($(o.stack)).sort(function(a,b){return(parseInt($(a).css("zIndex"),10)||0)-(parseInt($(b).css("zIndex"),10)||0)});group.length&&(min=parseInt($(group[0]).css("zIndex"),10)||0,$(group).each(function(i){$(this).css("zIndex",min+i)}),this.css("zIndex",min+group.length))}}),$.ui.plugin.add("draggable","zIndex",{start:function(event,ui,instance){var t=$(ui.helper),o=instance.options;t.css("zIndex")&&(o._zIndex=t.css("zIndex")),t.css("zIndex",o.zIndex)},stop:function(event,ui,instance){var o=instance.options;o._zIndex&&$(ui.helper).css("zIndex",o._zIndex)}});$.ui.draggable;/*!
 * jQuery UI Resizable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 */
$.widget("ui.resizable",$.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,
// See #7960
zIndex:90,
// callbacks
resize:null,start:null,stop:null},_num:function(value){return parseInt(value,10)||0},_isNumber:function(value){return!isNaN(parseInt(value,10))},_hasScroll:function(el,a){if("hidden"===$(el).css("overflow"))return!1;var scroll=a&&"left"===a?"scrollLeft":"scrollTop",has=!1;
// TODO: determine which cases actually cause this to happen
// if the element doesn't have the scroll set, see if it's possible to
// set the scroll
return el[scroll]>0?!0:(el[scroll]=1,has=el[scroll]>0,el[scroll]=0,has)},_create:function(){var n,i,handle,axis,hname,that=this,o=this.options;if(this.element.addClass("ui-resizable"),$.extend(this,{_aspectRatio:!!o.aspectRatio,aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null}),
// Wrap the element if it cannot hold child nodes
this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),
// support: Safari
// Prevent Safari textarea resize
this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),
// support: IE9
// avoid IE jump (hard set the margin)
this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=o.handles||($(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=$(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),n=this.handles.split(","),this.handles={},i=0;i<n.length;i++)handle=$.trim(n[i]),hname="ui-resizable-"+handle,axis=$("<div class='ui-resizable-handle "+hname+"'></div>"),axis.css({zIndex:o.zIndex}),"se"===handle&&axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[handle]=".ui-resizable-"+handle,this.element.append(axis);this._renderAxis=function(target){var i,axis,padPos,padWrapper;target=target||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=$(this.handles[i]),this._on(this.handles[i],{mousedown:that._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(axis=$(this.handles[i],this.element),padWrapper=/sw|ne|nw|se|n|s/.test(i)?axis.outerHeight():axis.outerWidth(),padPos=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),target.css(padPos,padWrapper),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},
// TODO: make renderAxis a prototype function
this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){that.resizing||(this.className&&(axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),that.axis=axis&&axis[1]?axis[1]:"se")}),o.autoHide&&(this._handles.hide(),$(this.element).addClass("ui-resizable-autohide").mouseenter(function(){o.disabled||($(this).removeClass("ui-resizable-autohide"),that._handles.show())}).mouseleave(function(){o.disabled||that.resizing||($(this).addClass("ui-resizable-autohide"),that._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var wrapper,_destroy=function(exp){$(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};
// TODO: Unwrap at same DOM position
return this.elementIsWrapper&&(_destroy(this.element),wrapper=this.element,this.originalElement.css({position:wrapper.css("position"),width:wrapper.outerWidth(),height:wrapper.outerHeight(),top:wrapper.css("top"),left:wrapper.css("left")}).insertAfter(wrapper),wrapper.remove()),this.originalElement.css("resize",this.originalResizeStyle),_destroy(this.originalElement),this},_mouseCapture:function(event){var i,handle,capture=!1;for(i in this.handles)handle=$(this.handles[i])[0],(handle===event.target||$.contains(handle,event.target))&&(capture=!0);return!this.options.disabled&&capture},_mouseStart:function(event){var curleft,curtop,cursor,o=this.options,el=this.element;return this.resizing=!0,this._renderProxy(),curleft=this._num(this.helper.css("left")),curtop=this._num(this.helper.css("top")),o.containment&&(curleft+=$(o.containment).scrollLeft()||0,curtop+=$(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:curleft,top:curtop},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:el.width(),height:el.height()},this.originalSize=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()},this.sizeDiff={width:el.outerWidth()-el.width(),height:el.outerHeight()-el.height()},this.originalPosition={left:curleft,top:curtop},this.originalMousePosition={left:event.pageX,top:event.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,cursor=$(".ui-resizable-"+this.axis).css("cursor"),$("body").css("cursor","auto"===cursor?this.axis+"-resize":cursor),el.addClass("ui-resizable-resizing"),this._propagate("start",event),!0},_mouseDrag:function(event){var data,props,smp=this.originalMousePosition,a=this.axis,dx=event.pageX-smp.left||0,dy=event.pageY-smp.top||0,trigger=this._change[a];return this._updatePrevProperties(),trigger?(data=trigger.apply(this,[event,dx,dy]),this._updateVirtualBoundaries(event.shiftKey),(this._aspectRatio||event.shiftKey)&&(data=this._updateRatio(data,event)),data=this._respectSize(data,event),this._updateCache(data),this._propagate("resize",event),props=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),$.isEmptyObject(props)||(this._updatePrevProperties(),this._trigger("resize",event,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(event){this.resizing=!1;var pr,ista,soffseth,soffsetw,s,left,top,o=this.options,that=this;return this._helper&&(pr=this._proportionallyResizeElements,ista=pr.length&&/textarea/i.test(pr[0].nodeName),soffseth=ista&&this._hasScroll(pr[0],"left")?0:that.sizeDiff.height,soffsetw=ista?0:that.sizeDiff.width,s={width:that.helper.width()-soffsetw,height:that.helper.height()-soffseth},left=parseInt(that.element.css("left"),10)+(that.position.left-that.originalPosition.left)||null,top=parseInt(that.element.css("top"),10)+(that.position.top-that.originalPosition.top)||null,o.animate||this.element.css($.extend(s,{top:top,left:left})),that.helper.height(that.size.height),that.helper.width(that.size.width),this._helper&&!o.animate&&this._proportionallyResize()),$("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",event),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var props={};return this.position.top!==this.prevPosition.top&&(props.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(props.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(props.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(props.height=this.size.height+"px"),this.helper.css(props),props},_updateVirtualBoundaries:function(forceAspectRatio){var pMinWidth,pMaxWidth,pMinHeight,pMaxHeight,b,o=this.options;b={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||forceAspectRatio)&&(pMinWidth=b.minHeight*this.aspectRatio,pMinHeight=b.minWidth/this.aspectRatio,pMaxWidth=b.maxHeight*this.aspectRatio,pMaxHeight=b.maxWidth/this.aspectRatio,pMinWidth>b.minWidth&&(b.minWidth=pMinWidth),pMinHeight>b.minHeight&&(b.minHeight=pMinHeight),pMaxWidth<b.maxWidth&&(b.maxWidth=pMaxWidth),pMaxHeight<b.maxHeight&&(b.maxHeight=pMaxHeight)),this._vBoundaries=b},_updateCache:function(data){this.offset=this.helper.offset(),this._isNumber(data.left)&&(this.position.left=data.left),this._isNumber(data.top)&&(this.position.top=data.top),this._isNumber(data.height)&&(this.size.height=data.height),this._isNumber(data.width)&&(this.size.width=data.width)},_updateRatio:function(data){var cpos=this.position,csize=this.size,a=this.axis;return this._isNumber(data.height)?data.width=data.height*this.aspectRatio:this._isNumber(data.width)&&(data.height=data.width/this.aspectRatio),"sw"===a&&(data.left=cpos.left+(csize.width-data.width),data.top=null),"nw"===a&&(data.top=cpos.top+(csize.height-data.height),data.left=cpos.left+(csize.width-data.width)),data},_respectSize:function(data){var o=this._vBoundaries,a=this.axis,ismaxw=this._isNumber(data.width)&&o.maxWidth&&o.maxWidth<data.width,ismaxh=this._isNumber(data.height)&&o.maxHeight&&o.maxHeight<data.height,isminw=this._isNumber(data.width)&&o.minWidth&&o.minWidth>data.width,isminh=this._isNumber(data.height)&&o.minHeight&&o.minHeight>data.height,dw=this.originalPosition.left+this.originalSize.width,dh=this.position.top+this.size.height,cw=/sw|nw|w/.test(a),ch=/nw|ne|n/.test(a);
// Fixing jump error on top/left - bug #2330
return isminw&&(data.width=o.minWidth),isminh&&(data.height=o.minHeight),ismaxw&&(data.width=o.maxWidth),ismaxh&&(data.height=o.maxHeight),isminw&&cw&&(data.left=dw-o.minWidth),ismaxw&&cw&&(data.left=dw-o.maxWidth),isminh&&ch&&(data.top=dh-o.minHeight),ismaxh&&ch&&(data.top=dh-o.maxHeight),data.width||data.height||data.left||!data.top?data.width||data.height||data.top||!data.left||(data.left=null):data.top=null,data},_getPaddingPlusBorderDimensions:function(element){for(var i=0,widths=[],borders=[element.css("borderTopWidth"),element.css("borderRightWidth"),element.css("borderBottomWidth"),element.css("borderLeftWidth")],paddings=[element.css("paddingTop"),element.css("paddingRight"),element.css("paddingBottom"),element.css("paddingLeft")];4>i;i++)widths[i]=parseInt(borders[i],10)||0,widths[i]+=parseInt(paddings[i],10)||0;return{height:widths[0]+widths[2],width:widths[1]+widths[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var prel,i=0,element=this.helper||this.element;i<this._proportionallyResizeElements.length;i++)prel=this._proportionallyResizeElements[i],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(prel)),prel.css({height:element.height()-this.outerDimensions.height||0,width:element.width()-this.outerDimensions.width||0})},_renderProxy:function(){var el=this.element,o=this.options;this.elementOffset=el.offset(),this._helper?(this.helper=this.helper||$("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++o.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(event,dx){return{width:this.originalSize.width+dx}},w:function(event,dx){var cs=this.originalSize,sp=this.originalPosition;return{left:sp.left+dx,width:cs.width-dx}},n:function(event,dx,dy){var cs=this.originalSize,sp=this.originalPosition;return{top:sp.top+dy,height:cs.height-dy}},s:function(event,dx,dy){return{height:this.originalSize.height+dy}},se:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]))},sw:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]))},ne:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]))},nw:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]))}},_propagate:function(n,event){$.ui.plugin.call(this,n,[event,this.ui()]),"resize"!==n&&this._trigger(n,event,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),/*
 * Resizable Extensions
 */
$.ui.plugin.add("resizable","animate",{stop:function(event){var that=$(this).resizable("instance"),o=that.options,pr=that._proportionallyResizeElements,ista=pr.length&&/textarea/i.test(pr[0].nodeName),soffseth=ista&&that._hasScroll(pr[0],"left")?0:that.sizeDiff.height,soffsetw=ista?0:that.sizeDiff.width,style={width:that.size.width-soffsetw,height:that.size.height-soffseth},left=parseInt(that.element.css("left"),10)+(that.position.left-that.originalPosition.left)||null,top=parseInt(that.element.css("top"),10)+(that.position.top-that.originalPosition.top)||null;that.element.animate($.extend(style,top&&left?{top:top,left:left}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var data={width:parseInt(that.element.css("width"),10),height:parseInt(that.element.css("height"),10),top:parseInt(that.element.css("top"),10),left:parseInt(that.element.css("left"),10)};pr&&pr.length&&$(pr[0]).css({width:data.width,height:data.height}),
// propagating resize, and updating values for each animation step
that._updateCache(data),that._propagate("resize",event)}})}}),$.ui.plugin.add("resizable","containment",{start:function(){var element,p,co,ch,cw,width,height,that=$(this).resizable("instance"),o=that.options,el=that.element,oc=o.containment,ce=oc instanceof $?oc.get(0):/parent/.test(oc)?el.parent().get(0):oc;ce&&(that.containerElement=$(ce),/document/.test(oc)||oc===document?(that.containerOffset={left:0,top:0},that.containerPosition={left:0,top:0},that.parentData={element:$(document),left:0,top:0,width:$(document).width(),height:$(document).height()||document.body.parentNode.scrollHeight}):(element=$(ce),p=[],$(["Top","Right","Left","Bottom"]).each(function(i,name){p[i]=that._num(element.css("padding"+name))}),that.containerOffset=element.offset(),that.containerPosition=element.position(),that.containerSize={height:element.innerHeight()-p[3],width:element.innerWidth()-p[1]},co=that.containerOffset,ch=that.containerSize.height,cw=that.containerSize.width,width=that._hasScroll(ce,"left")?ce.scrollWidth:cw,height=that._hasScroll(ce)?ce.scrollHeight:ch,that.parentData={element:ce,left:co.left,top:co.top,width:width,height:height}))},resize:function(event){var woset,hoset,isParent,isOffsetRelative,that=$(this).resizable("instance"),o=that.options,co=that.containerOffset,cp=that.position,pRatio=that._aspectRatio||event.shiftKey,cop={top:0,left:0},ce=that.containerElement,continueResize=!0;ce[0]!==document&&/static/.test(ce.css("position"))&&(cop=co),cp.left<(that._helper?co.left:0)&&(that.size.width=that.size.width+(that._helper?that.position.left-co.left:that.position.left-cop.left),pRatio&&(that.size.height=that.size.width/that.aspectRatio,continueResize=!1),that.position.left=o.helper?co.left:0),cp.top<(that._helper?co.top:0)&&(that.size.height=that.size.height+(that._helper?that.position.top-co.top:that.position.top),pRatio&&(that.size.width=that.size.height*that.aspectRatio,continueResize=!1),that.position.top=that._helper?co.top:0),isParent=that.containerElement.get(0)===that.element.parent().get(0),isOffsetRelative=/relative|absolute/.test(that.containerElement.css("position")),isParent&&isOffsetRelative?(that.offset.left=that.parentData.left+that.position.left,that.offset.top=that.parentData.top+that.position.top):(that.offset.left=that.element.offset().left,that.offset.top=that.element.offset().top),woset=Math.abs(that.sizeDiff.width+(that._helper?that.offset.left-cop.left:that.offset.left-co.left)),hoset=Math.abs(that.sizeDiff.height+(that._helper?that.offset.top-cop.top:that.offset.top-co.top)),woset+that.size.width>=that.parentData.width&&(that.size.width=that.parentData.width-woset,pRatio&&(that.size.height=that.size.width/that.aspectRatio,continueResize=!1)),hoset+that.size.height>=that.parentData.height&&(that.size.height=that.parentData.height-hoset,pRatio&&(that.size.width=that.size.height*that.aspectRatio,continueResize=!1)),continueResize||(that.position.left=that.prevPosition.left,that.position.top=that.prevPosition.top,that.size.width=that.prevSize.width,that.size.height=that.prevSize.height)},stop:function(){var that=$(this).resizable("instance"),o=that.options,co=that.containerOffset,cop=that.containerPosition,ce=that.containerElement,helper=$(that.helper),ho=helper.offset(),w=helper.outerWidth()-that.sizeDiff.width,h=helper.outerHeight()-that.sizeDiff.height;that._helper&&!o.animate&&/relative/.test(ce.css("position"))&&$(this).css({left:ho.left-cop.left-co.left,width:w,height:h}),that._helper&&!o.animate&&/static/.test(ce.css("position"))&&$(this).css({left:ho.left-cop.left-co.left,width:w,height:h})}}),$.ui.plugin.add("resizable","alsoResize",{start:function(){var that=$(this).resizable("instance"),o=that.options;$(o.alsoResize).each(function(){var el=$(this);el.data("ui-resizable-alsoresize",{width:parseInt(el.width(),10),height:parseInt(el.height(),10),left:parseInt(el.css("left"),10),top:parseInt(el.css("top"),10)})})},resize:function(event,ui){var that=$(this).resizable("instance"),o=that.options,os=that.originalSize,op=that.originalPosition,delta={height:that.size.height-os.height||0,width:that.size.width-os.width||0,top:that.position.top-op.top||0,left:that.position.left-op.left||0};$(o.alsoResize).each(function(){var el=$(this),start=$(this).data("ui-resizable-alsoresize"),style={},css=el.parents(ui.originalElement[0]).length?["width","height"]:["width","height","top","left"];$.each(css,function(i,prop){var sum=(start[prop]||0)+(delta[prop]||0);sum&&sum>=0&&(style[prop]=sum||null)}),el.css(style)})},stop:function(){$(this).removeData("resizable-alsoresize")}}),$.ui.plugin.add("resizable","ghost",{start:function(){var that=$(this).resizable("instance"),o=that.options,cs=that.size;that.ghost=that.originalElement.clone(),that.ghost.css({opacity:.25,display:"block",position:"relative",height:cs.height,width:cs.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof o.ghost?o.ghost:""),that.ghost.appendTo(that.helper)},resize:function(){var that=$(this).resizable("instance");that.ghost&&that.ghost.css({position:"relative",height:that.size.height,width:that.size.width})},stop:function(){var that=$(this).resizable("instance");that.ghost&&that.helper&&that.helper.get(0).removeChild(that.ghost.get(0))}}),$.ui.plugin.add("resizable","grid",{resize:function(){var outerDimensions,that=$(this).resizable("instance"),o=that.options,cs=that.size,os=that.originalSize,op=that.originalPosition,a=that.axis,grid="number"==typeof o.grid?[o.grid,o.grid]:o.grid,gridX=grid[0]||1,gridY=grid[1]||1,ox=Math.round((cs.width-os.width)/gridX)*gridX,oy=Math.round((cs.height-os.height)/gridY)*gridY,newWidth=os.width+ox,newHeight=os.height+oy,isMaxWidth=o.maxWidth&&o.maxWidth<newWidth,isMaxHeight=o.maxHeight&&o.maxHeight<newHeight,isMinWidth=o.minWidth&&o.minWidth>newWidth,isMinHeight=o.minHeight&&o.minHeight>newHeight;o.grid=grid,isMinWidth&&(newWidth+=gridX),isMinHeight&&(newHeight+=gridY),isMaxWidth&&(newWidth-=gridX),isMaxHeight&&(newHeight-=gridY),/^(se|s|e)$/.test(a)?(that.size.width=newWidth,that.size.height=newHeight):/^(ne)$/.test(a)?(that.size.width=newWidth,that.size.height=newHeight,that.position.top=op.top-oy):/^(sw)$/.test(a)?(that.size.width=newWidth,that.size.height=newHeight,that.position.left=op.left-ox):((0>=newHeight-gridY||0>=newWidth-gridX)&&(outerDimensions=that._getPaddingPlusBorderDimensions(this)),newHeight-gridY>0?(that.size.height=newHeight,that.position.top=op.top-oy):(newHeight=gridY-outerDimensions.height,that.size.height=newHeight,that.position.top=op.top+os.height-newHeight),newWidth-gridX>0?(that.size.width=newWidth,that.position.left=op.left-ox):(newWidth=gridX-outerDimensions.width,that.size.width=newWidth,that.position.left=op.left+os.width-newWidth))}});$.ui.resizable,$.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",
// Ensure the titlebar is always visible
using:function(pos){var topOffset=$(this).css(pos).offset().top;0>topOffset&&$(this).css("top",pos.top-topOffset)}},resizable:!0,show:null,title:null,width:300,
// callbacks
beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&$.fn.draggable&&this._makeDraggable(),this.options.resizable&&$.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var element=this.options.appendTo;return element&&(element.jquery||element.nodeType)?$(element):this.document.find(element||"body").eq(0)},_destroy:function(){var next,originalPosition=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),next=originalPosition.parent.children().eq(originalPosition.index),next.length&&next[0]!==this.element[0]?next.before(this.element):originalPosition.parent.append(this.element)},widget:function(){return this.uiDialog},disable:$.noop,enable:$.noop,close:function(event){var activeElement,that=this;if(this._isOpen&&this._trigger("beforeClose",event)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)
// support: IE9
// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
try{activeElement=this.document[0].activeElement,
// Support: IE9, IE10
// If the <body> is blurred, IE will switch windows, see #4520
activeElement&&"body"!==activeElement.nodeName.toLowerCase()&&
// Hiding a focused element doesn't trigger blur in WebKit
// so in case we have nothing to focus on, explicitly blur the active element
// https://bugs.webkit.org/show_bug.cgi?id=47182
$(activeElement).blur()}catch(error){}this._hide(this.uiDialog,this.options.hide,function(){that._trigger("close",event)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(event,silent){var moved=!1,zIndices=this.uiDialog.siblings(".ui-front:visible").map(function(){return+$(this).css("z-index")}).get(),zIndexMax=Math.max.apply(null,zIndices);return zIndexMax>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",zIndexMax+1),moved=!0),moved&&!silent&&this._trigger("focus",event),moved},open:function(){var that=this;
// Ensure the overlay is moved to the top with the dialog, but only when
// opening. The overlay shouldn't move after the dialog is open so that
// modeless dialogs opened after the modal dialog stack properly.
// Track the dialog immediately upon openening in case a focus event
// somehow occurs outside of the dialog before an element inside the
// dialog is focused (#10152)
return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=$(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){that._focusTabbable(),that._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){
// Set focus to the first match:
// 1. An element that was focused previously
// 2. First element inside the dialog matching [autofocus]
// 3. Tabbable element inside the content element
// 4. Tabbable element inside the buttonpane
// 5. The close button
// 6. The dialog itself
var hasFocus=this._focusedElement;hasFocus||(hasFocus=this.element.find("[autofocus]")),hasFocus.length||(hasFocus=this.element.find(":tabbable")),hasFocus.length||(hasFocus=this.uiDialogButtonPane.find(":tabbable")),hasFocus.length||(hasFocus=this.uiDialogTitlebarClose.filter(":tabbable")),hasFocus.length||(hasFocus=this.uiDialog),hasFocus.eq(0).focus()},_keepFocus:function(event){function checkFocus(){var activeElement=this.document[0].activeElement,isActive=this.uiDialog[0]===activeElement||$.contains(this.uiDialog[0],activeElement);isActive||this._focusTabbable()}event.preventDefault(),checkFocus.call(this),
// support: IE
// IE <= 8 doesn't prevent moving focus even with event.preventDefault()
// so we check again later
this._delay(checkFocus)},_createWrapper:function(){this.uiDialog=$("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({
// Setting tabIndex makes the div focusable
tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(event){if(this.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE)return event.preventDefault(),void this.close(event);
// prevent tabbing out of dialogs
if(event.keyCode===$.ui.keyCode.TAB&&!event.isDefaultPrevented()){var tabbables=this.uiDialog.find(":tabbable"),first=tabbables.filter(":first"),last=tabbables.filter(":last");event.target!==last[0]&&event.target!==this.uiDialog[0]||event.shiftKey?event.target!==first[0]&&event.target!==this.uiDialog[0]||!event.shiftKey||(this._delay(function(){last.focus()}),event.preventDefault()):(this._delay(function(){first.focus()}),event.preventDefault())}},mousedown:function(event){this._moveToTop(event)&&this._focusTabbable()}}),
// We assume that any existing aria-describedby attribute means
// that the dialog content is marked up properly
// otherwise we brute force the content as the description
this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var uiDialogTitle;this.uiDialogTitlebar=$("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(event){
// Don't prevent click on close button (#8838)
// Focusing a dialog that is partially scrolled out of view
// causes the browser to scroll it into view, preventing the click event
$(event.target).closest(".ui-dialog-titlebar-close")||
// Dialog isn't getting focus when dragging (#8063)
this.uiDialog.focus()}}),
// support: IE
// Use type="button" to prevent enter keypresses in textboxes from closing the
// dialog in IE (#9312)
this.uiDialogTitlebarClose=$("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(event){event.preventDefault(),this.close(event)}}),uiDialogTitle=$("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(uiDialogTitle),this.uiDialog.attr({"aria-labelledby":uiDialogTitle.attr("id")})},_title:function(title){this.options.title||title.html("&#160;"),title.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=$("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=$("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var that=this,buttons=this.options.buttons;
// if we already have a button pane, remove it
return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),$.isEmptyObject(buttons)||$.isArray(buttons)&&!buttons.length?void this.uiDialog.removeClass("ui-dialog-buttons"):($.each(buttons,function(name,props){var click,buttonOptions;props=$.isFunction(props)?{click:props,text:name}:props,props=$.extend({type:"button"},props),click=props.click,props.click=function(){click.apply(that.element[0],arguments)},buttonOptions={icons:props.icons,text:props.showText},delete props.icons,delete props.showText,$("<button></button>",props).button(buttonOptions).appendTo(that.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function filteredUi(ui){return{position:ui.position,offset:ui.offset}}var that=this,options=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(event,ui){$(this).addClass("ui-dialog-dragging"),that._blockFrames(),that._trigger("dragStart",event,filteredUi(ui))},drag:function(event,ui){that._trigger("drag",event,filteredUi(ui))},stop:function(event,ui){var left=ui.offset.left-that.document.scrollLeft(),top=ui.offset.top-that.document.scrollTop();options.position={my:"left top",at:"left"+(left>=0?"+":"")+left+" top"+(top>=0?"+":"")+top,of:that.window},$(this).removeClass("ui-dialog-dragging"),that._unblockFrames(),that._trigger("dragStop",event,filteredUi(ui))}})},_makeResizable:function(){function filteredUi(ui){return{originalPosition:ui.originalPosition,originalSize:ui.originalSize,position:ui.position,size:ui.size}}var that=this,options=this.options,handles=options.resizable,
// .ui-resizable has position: relative defined in the stylesheet
// but dialogs have to use absolute or fixed positioning
position=this.uiDialog.css("position"),resizeHandles="string"==typeof handles?handles:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:options.maxWidth,maxHeight:options.maxHeight,minWidth:options.minWidth,minHeight:this._minHeight(),handles:resizeHandles,start:function(event,ui){$(this).addClass("ui-dialog-resizing"),that._blockFrames(),that._trigger("resizeStart",event,filteredUi(ui))},resize:function(event,ui){that._trigger("resize",event,filteredUi(ui))},stop:function(event,ui){var offset=that.uiDialog.offset(),left=offset.left-that.document.scrollLeft(),top=offset.top-that.document.scrollTop();options.height=that.uiDialog.height(),options.width=that.uiDialog.width(),options.position={my:"left top",at:"left"+(left>=0?"+":"")+left+" top"+(top>=0?"+":"")+top,of:that.window},$(this).removeClass("ui-dialog-resizing"),that._unblockFrames(),that._trigger("resizeStop",event,filteredUi(ui))}}).css("position",position)},_trackFocus:function(){this._on(this.widget(),{focusin:function(event){this._makeFocusTarget(),this._focusedElement=$(event.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var instances=this._trackingInstances(),exists=$.inArray(this,instances);-1!==exists&&instances.splice(exists,1)},_trackingInstances:function(){var instances=this.document.data("ui-dialog-instances");return instances||(instances=[],this.document.data("ui-dialog-instances",instances)),instances},_minHeight:function(){var options=this.options;return"auto"===options.height?options.minHeight:Math.min(options.minHeight,options.height)},_position:function(){
// Need to show the dialog to get the actual offset in the position plugin
var isVisible=this.uiDialog.is(":visible");isVisible||this.uiDialog.show(),this.uiDialog.position(this.options.position),isVisible||this.uiDialog.hide()},_setOptions:function(options){var that=this,resize=!1,resizableOptions={};$.each(options,function(key,value){that._setOption(key,value),key in that.sizeRelatedOptions&&(resize=!0),key in that.resizableRelatedOptions&&(resizableOptions[key]=value)}),resize&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",resizableOptions)},_setOption:function(key,value){var isDraggable,isResizable,uiDialog=this.uiDialog;"dialogClass"===key&&uiDialog.removeClass(this.options.dialogClass).addClass(value),"disabled"!==key&&(this._super(key,value),"appendTo"===key&&this.uiDialog.appendTo(this._appendTo()),"buttons"===key&&this._createButtons(),"closeText"===key&&this.uiDialogTitlebarClose.button({
// Ensure that we always pass a string
label:""+value}),"draggable"===key&&(isDraggable=uiDialog.is(":data(ui-draggable)"),isDraggable&&!value&&uiDialog.draggable("destroy"),!isDraggable&&value&&this._makeDraggable()),"position"===key&&this._position(),"resizable"===key&&(isResizable=uiDialog.is(":data(ui-resizable)"),isResizable&&!value&&uiDialog.resizable("destroy"),isResizable&&"string"==typeof value&&uiDialog.resizable("option","handles",value),isResizable||value===!1||this._makeResizable()),"title"===key&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){
// If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
// divs will both have width and height set, so we need to reset them
var nonContentHeight,minContentHeight,maxContentHeight,options=this.options;
// Reset content sizing
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),options.minWidth>options.width&&(options.width=options.minWidth),nonContentHeight=this.uiDialog.css({height:"auto",width:options.width}).outerHeight(),minContentHeight=Math.max(0,options.minHeight-nonContentHeight),maxContentHeight="number"==typeof options.maxHeight?Math.max(0,options.maxHeight-nonContentHeight):"none","auto"===options.height?this.element.css({minHeight:minContentHeight,maxHeight:maxContentHeight,height:"auto"}):this.element.height(Math.max(0,options.height-nonContentHeight)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var iframe=$(this);return $("<div>").css({position:"absolute",width:iframe.outerWidth(),height:iframe.outerHeight()}).appendTo(iframe.parent()).offset(iframe.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(event){return $(event.target).closest(".ui-dialog").length?!0:!!$(event.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){
// We use a delay in case the overlay is created from an
// event that we're going to be cancelling (#2804)
var isOpening=!0;this._delay(function(){isOpening=!1}),this.document.data("ui-dialog-overlays")||
// Prevent use of anchors and inputs
// Using _on() for an event handler shared across many instances is
// safe because the dialogs stack and must be closed in reverse order
this._on(this.document,{focusin:function(event){isOpening||this._allowInteraction(event)||(event.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=$("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var overlays=this.document.data("ui-dialog-overlays")-1;overlays?this.document.data("ui-dialog-overlays",overlays):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}});/*!
 * jQuery UI Droppable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/droppable/
 */
$.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",
// callbacks
activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var proportions,o=this.options,accept=o.accept;this.isover=!1,this.isout=!0,this.accept=$.isFunction(accept)?accept:function(d){return d.is(accept)},this.proportions=function(){
// Store the droppable's proportions
return arguments.length?void(proportions=arguments[0]):proportions?proportions:proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(o.scope),o.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(scope){
// Add the reference and positions to the manager
$.ui.ddmanager.droppables[scope]=$.ui.ddmanager.droppables[scope]||[],$.ui.ddmanager.droppables[scope].push(this)},_splice:function(drop){for(var i=0;i<drop.length;i++)drop[i]===this&&drop.splice(i,1)},_destroy:function(){var drop=$.ui.ddmanager.droppables[this.options.scope];this._splice(drop),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(key,value){if("accept"===key)this.accept=$.isFunction(value)?value:function(d){return d.is(value)};else if("scope"===key){var drop=$.ui.ddmanager.droppables[this.options.scope];this._splice(drop),this._addToManager(value)}this._super(key,value)},_activate:function(event){var draggable=$.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),draggable&&this._trigger("activate",event,this.ui(draggable))},_deactivate:function(event){var draggable=$.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),draggable&&this._trigger("deactivate",event,this.ui(draggable))},_over:function(event){var draggable=$.ui.ddmanager.current;
// Bail if draggable and droppable are same element
draggable&&(draggable.currentItem||draggable.element)[0]!==this.element[0]&&this.accept.call(this.element[0],draggable.currentItem||draggable.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",event,this.ui(draggable)))},_out:function(event){var draggable=$.ui.ddmanager.current;
// Bail if draggable and droppable are same element
draggable&&(draggable.currentItem||draggable.element)[0]!==this.element[0]&&this.accept.call(this.element[0],draggable.currentItem||draggable.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",event,this.ui(draggable)))},_drop:function(event,custom){var draggable=custom||$.ui.ddmanager.current,childrenIntersection=!1;
// Bail if draggable and droppable are same element
// Bail if draggable and droppable are same element
return draggable&&(draggable.currentItem||draggable.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var inst=$(this).droppable("instance");return inst.options.greedy&&!inst.options.disabled&&inst.options.scope===draggable.options.scope&&inst.accept.call(inst.element[0],draggable.currentItem||draggable.element)&&$.ui.intersect(draggable,$.extend(inst,{offset:inst.element.offset()}),inst.options.tolerance,event)?(childrenIntersection=!0,!1):void 0}),childrenIntersection?!1:this.accept.call(this.element[0],draggable.currentItem||draggable.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",event,this.ui(draggable)),this.element):!1):!1},ui:function(c){return{draggable:c.currentItem||c.element,helper:c.helper,position:c.position,offset:c.positionAbs}}}),$.ui.intersect=function(){function isOverAxis(x,reference,size){return x>=reference&&reference+size>x}return function(draggable,droppable,toleranceMode,event){if(!droppable.offset)return!1;var x1=(draggable.positionAbs||draggable.position.absolute).left+draggable.margins.left,y1=(draggable.positionAbs||draggable.position.absolute).top+draggable.margins.top,x2=x1+draggable.helperProportions.width,y2=y1+draggable.helperProportions.height,l=droppable.offset.left,t=droppable.offset.top,r=l+droppable.proportions().width,b=t+droppable.proportions().height;switch(toleranceMode){case"fit":return x1>=l&&r>=x2&&y1>=t&&b>=y2;case"intersect":// Right Half
// Left Half
// Bottom Half
return l<x1+draggable.helperProportions.width/2&&x2-draggable.helperProportions.width/2<r&&t<y1+draggable.helperProportions.height/2&&y2-draggable.helperProportions.height/2<b;// Top Half
case"pointer":return isOverAxis(event.pageY,t,droppable.proportions().height)&&isOverAxis(event.pageX,l,droppable.proportions().width);case"touch":// Top edge touching
// Bottom edge touching
// Left edge touching
// Right edge touching
return(y1>=t&&b>=y1||y2>=t&&b>=y2||t>y1&&y2>b)&&(x1>=l&&r>=x1||x2>=l&&r>=x2||l>x1&&x2>r);default:return!1}}}(),/*
	This manager tracks offsets of draggables and droppables
*/
$.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,event){var i,j,m=$.ui.ddmanager.droppables[t.options.scope]||[],type=event?event.type:null,// workaround for #2317
list=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();droppablesLoop:for(i=0;i<m.length;i++)
// No disabled and non-accepted
if(!(m[i].options.disabled||t&&!m[i].accept.call(m[i].element[0],t.currentItem||t.element))){
// Filter out elements in the current dragged item
for(j=0;j<list.length;j++)if(list[j]===m[i].element[0]){m[i].proportions().height=0;continue droppablesLoop}m[i].visible="none"!==m[i].element.css("display"),m[i].visible&&(
// Activate the droppable if used directly from draggables
"mousedown"===type&&m[i]._activate.call(m[i],event),m[i].offset=m[i].element.offset(),m[i].proportions({width:m[i].element[0].offsetWidth,height:m[i].element[0].offsetHeight}))}},drop:function(draggable,event){var dropped=!1;
// Create a copy of the droppables in case the list changes during the drop (#9116)
return $.each(($.ui.ddmanager.droppables[draggable.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&$.ui.intersect(draggable,this,this.options.tolerance,event)&&(dropped=this._drop.call(this,event)||dropped),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],draggable.currentItem||draggable.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,event)))}),dropped},dragStart:function(draggable,event){
// Listen for scrolling so that if the dragging causes scrolling the position of the droppables can be recalculated (see #5003)
draggable.element.parentsUntil("body").bind("scroll.droppable",function(){draggable.options.refreshPositions||$.ui.ddmanager.prepareOffsets(draggable,event)})},drag:function(draggable,event){
// If you have a highly dynamic page, you might try this option. It renders positions every time you move the mouse.
draggable.options.refreshPositions&&$.ui.ddmanager.prepareOffsets(draggable,event),
// Run through all droppables and check their positions based on specific tolerance options
$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var parentInstance,scope,parent,intersects=$.ui.intersect(draggable,this,this.options.tolerance,event),c=!intersects&&this.isover?"isout":intersects&&!this.isover?"isover":null;c&&(this.options.greedy&&(scope=this.options.scope,parent=this.element.parents(":data(ui-droppable)").filter(function(){return $(this).droppable("instance").options.scope===scope}),parent.length&&(parentInstance=$(parent[0]).droppable("instance"),parentInstance.greedyChild="isover"===c)),
// we just moved into a greedy child
parentInstance&&"isover"===c&&(parentInstance.isover=!1,parentInstance.isout=!0,parentInstance._out.call(parentInstance,event)),this[c]=!0,this["isout"===c?"isover":"isout"]=!1,this["isover"===c?"_over":"_out"].call(this,event),
// we just moved out of a greedy child
parentInstance&&"isout"===c&&(parentInstance.isout=!1,parentInstance.isover=!0,parentInstance._over.call(parentInstance,event)))}})},dragStop:function(draggable,event){draggable.element.parentsUntil("body").unbind("scroll.droppable"),
// Call prepareOffsets one final time since IE does not fire return scroll events when overflow was caused by drag (see #5003)
draggable.options.refreshPositions||$.ui.ddmanager.prepareOffsets(draggable,event)}};var dataSpace=($.ui.droppable,"ui-effects-"),
// Create a local jQuery because jQuery Color relies on it and the
// global may not exist with AMD and a custom build (#10199)
jQuery=$;$.effects={effect:{}},/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
function(jQuery,undefined){function clamp(value,prop,allowEmpty){var type=propTypes[prop.type]||{};
// ~~ is an short way of doing floor for positive numbers
// IE will pass in empty strings as value for alpha,
// which will hit this case
return null==value?allowEmpty||!prop.def?null:prop.def:(value=type.floor?~~value:parseFloat(value),isNaN(value)?prop.def:type.mod?(value+type.mod)%type.mod:0>value?0:type.max<value?type.max:value)}function stringParse(string){var inst=color(),rgba=inst._rgba=[];return string=string.toLowerCase(),each(stringParsers,function(i,parser){var parsed,match=parser.re.exec(string),values=match&&parser.parse(match),spaceName=parser.space||"rgba";return values?(parsed=inst[spaceName](values),inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache],rgba=inst._rgba=parsed._rgba,!1):void 0}),rgba.length?("0,0,0,0"===rgba.join()&&jQuery.extend(rgba,colors.transparent),inst):colors[string]}
// hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021
function hue2rgb(p,q,h){return h=(h+1)%1,1>6*h?p+(q-p)*h*6:1>2*h?q:2>3*h?p+(q-p)*(2/3-h)*6:p}var
// colors = jQuery.Color.names
colors,stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
// plusequals test for += 100 -= 100
rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,
// a set of RE's that can match strings and generate color tuples.
stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[2.55*execResult[1],2.55*execResult[2],2.55*execResult[3],execResult[4]]}},{
// this regex ignores A-F because it's compared against an already lowercased string
re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16)]}},{
// this regex ignores A-F because it's compared against an already lowercased string
re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(execResult){return[execResult[1],execResult[2]/100,execResult[3]/100,execResult[4]]}}],
// jQuery.Color( )
color=jQuery.Color=function(color,green,blue,alpha){return new jQuery.Color.fn.parse(color,green,blue,alpha)},spaces={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},propTypes={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},support=color.support={},
// element for support tests
supportElem=jQuery("<p>")[0],
// local aliases of functions called often
each=jQuery.each;
// determine rgba support immediately
supportElem.style.cssText="background-color:rgba(1,1,1,.5)",support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1,
// define cache name and alpha properties
// for rgba and hsla spaces
each(spaces,function(spaceName,space){space.cache="_"+spaceName,space.props.alpha={idx:3,type:"percent",def:1}}),color.fn=jQuery.extend(color.prototype,{parse:function(red,green,blue,alpha){if(red===undefined)return this._rgba=[null,null,null,null],this;(red.jquery||red.nodeType)&&(red=jQuery(red).css(green),green=undefined);var inst=this,type=jQuery.type(red),rgba=this._rgba=[];
// more than 1 argument specified - assume ( red, green, blue, alpha )
return green!==undefined&&(red=[red,green,blue,alpha],type="array"),"string"===type?this.parse(stringParse(red)||colors._default):"array"===type?(each(spaces.rgba.props,function(key,prop){rgba[prop.idx]=clamp(red[prop.idx],prop)}),this):"object"===type?(red instanceof color?each(spaces,function(spaceName,space){red[space.cache]&&(inst[space.cache]=red[space.cache].slice())}):each(spaces,function(spaceName,space){var cache=space.cache;each(space.props,function(key,prop){
// if the cache doesn't exist, and we know how to convert
if(!inst[cache]&&space.to){
// if the value was null, we don't need to copy it
// if the key was alpha, we don't need to copy it either
if("alpha"===key||null==red[key])return;inst[cache]=space.to(inst._rgba)}
// this is the only case where we allow nulls for ALL properties.
// call clamp with alwaysAllowEmpty
inst[cache][prop.idx]=clamp(red[key],prop,!0)}),
// everything defined but alpha?
inst[cache]&&jQuery.inArray(null,inst[cache].slice(0,3))<0&&(
// use the default of 1
inst[cache][3]=1,space.from&&(inst._rgba=space.from(inst[cache])))}),this):void 0},is:function(compare){var is=color(compare),same=!0,inst=this;return each(spaces,function(_,space){var localCache,isCache=is[space.cache];return isCache&&(localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[],each(space.props,function(_,prop){return null!=isCache[prop.idx]?same=isCache[prop.idx]===localCache[prop.idx]:void 0})),same}),same},_space:function(){var used=[],inst=this;return each(spaces,function(spaceName,space){inst[space.cache]&&used.push(spaceName)}),used.pop()},transition:function(other,distance){var end=color(other),spaceName=end._space(),space=spaces[spaceName],startColor=0===this.alpha()?color("transparent"):this,start=startColor[space.cache]||space.to(startColor._rgba),result=start.slice();return end=end[space.cache],each(space.props,function(key,prop){var index=prop.idx,startValue=start[index],endValue=end[index],type=propTypes[prop.type]||{};null!==endValue&&(null===startValue?result[index]=endValue:(type.mod&&(endValue-startValue>type.mod/2?startValue+=type.mod:startValue-endValue>type.mod/2&&(startValue-=type.mod)),result[index]=clamp((endValue-startValue)*distance+startValue,prop)))}),this[spaceName](result)},blend:function(opaque){
// if we are already opaque - return ourself
if(1===this._rgba[3])return this;var rgb=this._rgba.slice(),a=rgb.pop(),blend=color(opaque)._rgba;return color(jQuery.map(rgb,function(v,i){return(1-a)*blend[i]+a*v}))},toRgbaString:function(){var prefix="rgba(",rgba=jQuery.map(this._rgba,function(v,i){return null==v?i>2?1:0:v});return 1===rgba[3]&&(rgba.pop(),prefix="rgb("),prefix+rgba.join()+")"},toHslaString:function(){var prefix="hsla(",hsla=jQuery.map(this.hsla(),function(v,i){
// catch 1 and 2
return null==v&&(v=i>2?1:0),i&&3>i&&(v=Math.round(100*v)+"%"),v});return 1===hsla[3]&&(hsla.pop(),prefix="hsl("),prefix+hsla.join()+")"},toHexString:function(includeAlpha){var rgba=this._rgba.slice(),alpha=rgba.pop();return includeAlpha&&rgba.push(~~(255*alpha)),"#"+jQuery.map(rgba,function(v){
// default to 0 when nulls exist
return v=(v||0).toString(16),1===v.length?"0"+v:v}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),color.fn.parse.prototype=color.fn,spaces.hsla.to=function(rgba){if(null==rgba[0]||null==rgba[1]||null==rgba[2])return[null,null,null,rgba[3]];var h,s,r=rgba[0]/255,g=rgba[1]/255,b=rgba[2]/255,a=rgba[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=.5*add;
// chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
return h=min===max?0:r===max?60*(g-b)/diff+360:g===max?60*(b-r)/diff+120:60*(r-g)/diff+240,s=0===diff?0:.5>=l?diff/add:diff/(2-add),[Math.round(h)%360,s,l,null==a?1:a]},spaces.hsla.from=function(hsla){if(null==hsla[0]||null==hsla[1]||null==hsla[2])return[null,null,null,hsla[3]];var h=hsla[0]/360,s=hsla[1],l=hsla[2],a=hsla[3],q=.5>=l?l*(1+s):l+s-l*s,p=2*l-q;return[Math.round(255*hue2rgb(p,q,h+1/3)),Math.round(255*hue2rgb(p,q,h)),Math.round(255*hue2rgb(p,q,h-1/3)),a]},each(spaces,function(spaceName,space){var props=space.props,cache=space.cache,to=space.to,from=space.from;
// makes rgba() and hsla()
color.fn[spaceName]=function(value){if(
// generate a cache for this space if it doesn't exist
to&&!this[cache]&&(this[cache]=to(this._rgba)),value===undefined)return this[cache].slice();var ret,type=jQuery.type(value),arr="array"===type||"object"===type?value:arguments,local=this[cache].slice();return each(props,function(key,prop){var val=arr["object"===type?key:prop.idx];null==val&&(val=local[prop.idx]),local[prop.idx]=clamp(val,prop)}),from?(ret=color(from(local)),ret[cache]=local,ret):color(local)},
// makes red() green() blue() alpha() hue() saturation() lightness()
each(props,function(key,prop){
// alpha is included in more than one space
color.fn[key]||(color.fn[key]=function(value){var match,vtype=jQuery.type(value),fn="alpha"===key?this._hsla?"hsla":"rgba":spaceName,local=this[fn](),cur=local[prop.idx];return"undefined"===vtype?cur:("function"===vtype&&(value=value.call(this,cur),vtype=jQuery.type(value)),null==value&&prop.empty?this:("string"===vtype&&(match=rplusequals.exec(value),match&&(value=cur+parseFloat(match[2])*("+"===match[1]?1:-1))),local[prop.idx]=value,this[fn](local)))})})}),
// add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
color.hook=function(hook){var hooks=hook.split(" ");each(hooks,function(i,hook){jQuery.cssHooks[hook]={set:function(elem,value){var parsed,curElem,backgroundColor="";if("transparent"!==value&&("string"!==jQuery.type(value)||(parsed=stringParse(value)))){if(value=color(parsed||value),!support.rgba&&1!==value._rgba[3]){for(curElem="backgroundColor"===hook?elem.parentNode:elem;(""===backgroundColor||"transparent"===backgroundColor)&&curElem&&curElem.style;)try{backgroundColor=jQuery.css(curElem,"backgroundColor"),curElem=curElem.parentNode}catch(e){}value=value.blend(backgroundColor&&"transparent"!==backgroundColor?backgroundColor:"_default")}value=value.toRgbaString()}try{elem.style[hook]=value}catch(e){}}},jQuery.fx.step[hook]=function(fx){fx.colorInit||(fx.start=color(fx.elem,hook),fx.end=color(fx.end),fx.colorInit=!0),jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos))}})},color.hook(stepHooks),jQuery.cssHooks.borderColor={expand:function(value){var expanded={};return each(["Top","Right","Bottom","Left"],function(i,part){expanded["border"+part+"Color"]=value}),expanded}},
// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
colors=jQuery.Color.names={
// 4.1. Basic color keywords
aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",
// 4.2.3. "transparent" color keyword
transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/
function(){function getElementStyles(elem){var key,len,style=elem.ownerDocument.defaultView?elem.ownerDocument.defaultView.getComputedStyle(elem,null):elem.currentStyle,styles={};if(style&&style.length&&style[0]&&style[style[0]])for(len=style.length;len--;)key=style[len],"string"==typeof style[key]&&(styles[$.camelCase(key)]=style[key]);else for(key in style)"string"==typeof style[key]&&(styles[key]=style[key]);return styles}function styleDifference(oldStyle,newStyle){var name,value,diff={};for(name in newStyle)value=newStyle[name],oldStyle[name]!==value&&(shorthandStyles[name]||!$.fx.step[name]&&isNaN(parseFloat(value))||(diff[name]=value));return diff}var classAnimationActions=["add","remove","toggle"],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,prop){$.fx.step[prop]=function(fx){("none"!==fx.end&&!fx.setAttr||1===fx.pos&&!fx.setAttr)&&(jQuery.style(fx.elem,prop,fx.end),fx.setAttr=!0)}}),
// support: jQuery <1.8
$.fn.addBack||($.fn.addBack=function(selector){return this.add(null==selector?this.prevObject:this.prevObject.filter(selector))}),$.effects.animateClass=function(value,duration,easing,callback){var o=$.speed(duration,easing,callback);return this.queue(function(){var applyClassChange,animated=$(this),baseClass=animated.attr("class")||"",allAnimations=o.children?animated.find("*").addBack():animated;allAnimations=allAnimations.map(function(){var el=$(this);return{el:el,start:getElementStyles(this)}}),applyClassChange=function(){$.each(classAnimationActions,function(i,action){value[action]&&animated[action+"Class"](value[action])})},applyClassChange(),allAnimations=allAnimations.map(function(){return this.end=getElementStyles(this.el[0]),this.diff=styleDifference(this.start,this.end),this}),animated.attr("class",baseClass),allAnimations=allAnimations.map(function(){var styleInfo=this,dfd=$.Deferred(),opts=$.extend({},o,{queue:!1,complete:function(){dfd.resolve(styleInfo)}});return this.el.animate(this.diff,opts),dfd.promise()}),$.when.apply($,allAnimations.get()).done(function(){applyClassChange(),$.each(arguments,function(){var el=this.el;$.each(this.diff,function(key){el.css(key,"")})}),o.complete.call(animated[0])})})},$.fn.extend({addClass:function(orig){return function(classNames,speed,easing,callback){return speed?$.effects.animateClass.call(this,{add:classNames},speed,easing,callback):orig.apply(this,arguments)}}($.fn.addClass),removeClass:function(orig){return function(classNames,speed,easing,callback){return arguments.length>1?$.effects.animateClass.call(this,{remove:classNames},speed,easing,callback):orig.apply(this,arguments)}}($.fn.removeClass),toggleClass:function(orig){return function(classNames,force,speed,easing,callback){return"boolean"==typeof force||void 0===force?speed?$.effects.animateClass.call(this,force?{add:classNames}:{remove:classNames},speed,easing,callback):orig.apply(this,arguments):$.effects.animateClass.call(this,{toggle:classNames},force,speed,easing)}}($.fn.toggleClass),switchClass:function(remove,add,speed,easing,callback){return $.effects.animateClass.call(this,{add:add,remove:remove},speed,easing,callback)}})}(),/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/
function(){
// return an effect options object for the given parameters:
function _normalizeArguments(effect,options,speed,callback){
// allow passing all options as the first parameter
// convert to an object
// catch (effect, null, ...)
// catch (effect, callback)
// catch (effect, speed, ?)
// catch (effect, options, callback)
// add options to effect
return $.isPlainObject(effect)&&(options=effect,effect=effect.effect),effect={effect:effect},null==options&&(options={}),$.isFunction(options)&&(callback=options,speed=null,options={}),("number"==typeof options||$.fx.speeds[options])&&(callback=speed,speed=options,options={}),$.isFunction(speed)&&(callback=speed,speed=null),options&&$.extend(effect,options),speed=speed||options.duration,effect.duration=$.fx.off?0:"number"==typeof speed?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default,effect.complete=callback||options.complete,effect}function standardAnimationOption(option){
// Valid standard speeds (nothing, number, named speed)
// Valid standard speeds (nothing, number, named speed)
// Invalid strings - treat as "normal" speed
// Complete callback
return!option||"number"==typeof option||$.fx.speeds[option]?!0:"string"!=typeof option||$.effects.effect[option]?$.isFunction(option)?!0:"object"==typeof option&&!option.effect:!0}$.extend($.effects,{version:"1.11.4",
// Saves a set of properties in a data storage
save:function(element,set){for(var i=0;i<set.length;i++)null!==set[i]&&element.data(dataSpace+set[i],element[0].style[set[i]])},
// Restores a set of previously saved properties from a data storage
restore:function(element,set){var val,i;for(i=0;i<set.length;i++)null!==set[i]&&(val=element.data(dataSpace+set[i]),void 0===val&&(val=""),element.css(set[i],val))},setMode:function(el,mode){return"toggle"===mode&&(mode=el.is(":hidden")?"show":"hide"),mode},
// Translates a [top,left] array into a baseline value
// this should be a little more flexible in the future to handle a string & hash
getBaseline:function(origin,original){var y,x;switch(origin[0]){case"top":y=0;break;case"middle":y=.5;break;case"bottom":y=1;break;default:y=origin[0]/original.height}switch(origin[1]){case"left":x=0;break;case"center":x=.5;break;case"right":x=1;break;default:x=origin[1]/original.width}return{x:x,y:y}},
// Wraps the element around a wrapper that copies position properties
createWrapper:function(element){
// if the element is already wrapped, return it
if(element.parent().is(".ui-effects-wrapper"))return element.parent();
// wrap the element
var props={width:element.outerWidth(!0),height:element.outerHeight(!0),"float":element.css("float")},wrapper=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),
// Store the size in case width/height are defined in % - Fixes #5245
size={width:element.width(),height:element.height()},active=document.activeElement;
// support: Firefox
// Firefox incorrectly exposes anonymous content
// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
try{active.id}catch(e){active=document.body}
// Fixes #7595 - Elements lose focus when wrapped.
//Hotfix for jQuery 1.4 since some change in wrap() seems to actually lose the reference to the wrapped element
// transfer positioning properties to the wrapper
return element.wrap(wrapper),(element[0]===active||$.contains(element[0],active))&&$(active).focus(),wrapper=element.parent(),"static"===element.css("position")?(wrapper.css({position:"relative"}),element.css({position:"relative"})):($.extend(props,{position:element.css("position"),zIndex:element.css("z-index")}),$.each(["top","left","bottom","right"],function(i,pos){props[pos]=element.css(pos),isNaN(parseInt(props[pos],10))&&(props[pos]="auto")}),element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),element.css(size),wrapper.css(props).show()},removeWrapper:function(element){var active=document.activeElement;
// Fixes #7595 - Elements lose focus when wrapped.
return element.parent().is(".ui-effects-wrapper")&&(element.parent().replaceWith(element),(element[0]===active||$.contains(element[0],active))&&$(active).focus()),element},setTransition:function(element,list,factor,value){return value=value||{},$.each(list,function(i,x){var unit=element.cssUnit(x);unit[0]>0&&(value[x]=unit[0]*factor+unit[1])}),value}}),$.fn.extend({effect:function(){function run(next){function done(){$.isFunction(complete)&&complete.call(elem[0]),$.isFunction(next)&&next()}var elem=$(this),complete=args.complete,mode=args.mode;
// If the element already has the correct final state, delegate to
// the core methods so the internal tracking of "olddisplay" works.
(elem.is(":hidden")?"hide"===mode:"show"===mode)?(elem[mode](),done()):effectMethod.call(elem[0],args,done)}var args=_normalizeArguments.apply(this,arguments),mode=args.mode,queue=args.queue,effectMethod=$.effects.effect[args.effect];
// delegate to the original method (e.g., .show()) if possible
return $.fx.off||!effectMethod?mode?this[mode](args.duration,args.complete):this.each(function(){args.complete&&args.complete.call(this)}):queue===!1?this.each(run):this.queue(queue||"fx",run)},show:function(orig){return function(option){if(standardAnimationOption(option))return orig.apply(this,arguments);var args=_normalizeArguments.apply(this,arguments);return args.mode="show",this.effect.call(this,args)}}($.fn.show),hide:function(orig){return function(option){if(standardAnimationOption(option))return orig.apply(this,arguments);var args=_normalizeArguments.apply(this,arguments);return args.mode="hide",this.effect.call(this,args)}}($.fn.hide),toggle:function(orig){return function(option){if(standardAnimationOption(option)||"boolean"==typeof option)return orig.apply(this,arguments);var args=_normalizeArguments.apply(this,arguments);return args.mode="toggle",this.effect.call(this,args)}}($.fn.toggle),
// helper functions
cssUnit:function(key){var style=this.css(key),val=[];return $.each(["em","px","%","pt"],function(i,unit){style.indexOf(unit)>0&&(val=[parseFloat(style),unit])}),val}})}(),/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/
function(){
// based on easing equations from Robert Penner (http://www.robertpenner.com/easing)
var baseEasings={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2)}}),$.extend(baseEasings,{Sine:function(p){return 1-Math.cos(p*Math.PI/2)},Circ:function(p){return 1-Math.sqrt(1-p*p)},Elastic:function(p){return 0===p||1===p?p:-Math.pow(2,8*(p-1))*Math.sin((80*(p-1)-7.5)*Math.PI/15)},Back:function(p){return p*p*(3*p-2)},Bounce:function(p){for(var pow2,bounce=4;p<((pow2=Math.pow(2,--bounce))-1)/11;);return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((3*pow2-2)/22-p,2)}}),$.each(baseEasings,function(name,easeIn){$.easing["easeIn"+name]=easeIn,$.easing["easeOut"+name]=function(p){return 1-easeIn(1-p)},$.easing["easeInOut"+name]=function(p){return.5>p?easeIn(2*p)/2:1-easeIn(-2*p+2)/2}})}();$.effects,$.effects.effect.blind=function(o,done){
// Create element
var wrapper,distance,margin,el=$(this),rvertical=/up|down|vertical/,rpositivemotion=/up|left|vertical|horizontal/,props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),direction=o.direction||"up",vertical=rvertical.test(direction),ref=vertical?"height":"width",ref2=vertical?"top":"left",motion=rpositivemotion.test(direction),animation={},show="show"===mode;
// if already wrapped, the wrapper's properties are my property. #6245
el.parent().is(".ui-effects-wrapper")?$.effects.save(el.parent(),props):$.effects.save(el,props),el.show(),wrapper=$.effects.createWrapper(el).css({overflow:"hidden"}),distance=wrapper[ref](),margin=parseFloat(wrapper.css(ref2))||0,animation[ref]=show?distance:0,motion||(el.css(vertical?"bottom":"right",0).css(vertical?"top":"left","auto").css({position:"absolute"}),animation[ref2]=show?margin:distance+margin),show&&(wrapper.css(ref,0),motion||wrapper.css(ref2,margin+distance)),wrapper.animate(animation,{duration:o.duration,easing:o.easing,queue:!1,complete:function(){"hide"===mode&&el.hide(),$.effects.restore(el,props),$.effects.removeWrapper(el),done()}})},$.effects.effect.bounce=function(o,done){var i,upAnim,downAnim,el=$(this),props=["position","top","bottom","left","right","height","width"],
// defaults:
mode=$.effects.setMode(el,o.mode||"effect"),hide="hide"===mode,show="show"===mode,direction=o.direction||"up",distance=o.distance,times=o.times||5,
// number of internal animations
anims=2*times+(show||hide?1:0),speed=o.duration/anims,easing=o.easing,
// utility:
ref="up"===direction||"down"===direction?"top":"left",motion="up"===direction||"left"===direction,
// we will need to re-assemble the queue to stack our animations in place
queue=el.queue(),queuelen=queue.length;
// Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
for(
// Avoid touching opacity to prevent clearType and PNG issues in IE
(show||hide)&&props.push("opacity"),$.effects.save(el,props),el.show(),$.effects.createWrapper(el),// Create Wrapper
// default distance for the BIGGEST bounce is the outer Distance / 3
distance||(distance=el["top"===ref?"outerHeight":"outerWidth"]()/3),show&&(downAnim={opacity:1},downAnim[ref]=0,el.css("opacity",0).css(ref,motion?2*-distance:2*distance).animate(downAnim,speed,easing)),
// start at the smallest distance if we are hiding
hide&&(distance/=Math.pow(2,times-1)),downAnim={},downAnim[ref]=0,i=0;times>i;i++)upAnim={},upAnim[ref]=(motion?"-=":"+=")+distance,el.animate(upAnim,speed,easing).animate(downAnim,speed,easing),distance=hide?2*distance:distance/2;
// Last Bounce when Hiding
hide&&(upAnim={opacity:0},upAnim[ref]=(motion?"-=":"+=")+distance,el.animate(upAnim,speed,easing)),el.queue(function(){hide&&el.hide(),$.effects.restore(el,props),$.effects.removeWrapper(el),done()}),
// inject all the animations we just queued to be first in line (after "inprogress")
queuelen>1&&queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1))),el.dequeue()},$.effects.effect.clip=function(o,done){
// Create element
var wrapper,animate,distance,el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show="show"===mode,direction=o.direction||"vertical",vert="vertical"===direction,size=vert?"height":"width",position=vert?"top":"left",animation={};
// Save & Show
$.effects.save(el,props),el.show(),wrapper=$.effects.createWrapper(el).css({overflow:"hidden"}),animate="IMG"===el[0].tagName?wrapper:el,distance=animate[size](),show&&(animate.css(size,0),animate.css(position,distance/2)),animation[size]=show?distance:0,animation[position]=show?0:distance/2,animate.animate(animation,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){show||el.hide(),$.effects.restore(el,props),$.effects.removeWrapper(el),done()}})},$.effects.effect.drop=function(o,done){var distance,el=$(this),props=["position","top","bottom","left","right","opacity","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show="show"===mode,direction=o.direction||"left",ref="up"===direction||"down"===direction?"top":"left",motion="up"===direction||"left"===direction?"pos":"neg",animation={opacity:show?1:0};
// Adjust
$.effects.save(el,props),el.show(),$.effects.createWrapper(el),distance=o.distance||el["top"===ref?"outerHeight":"outerWidth"](!0)/2,show&&el.css("opacity",0).css(ref,"pos"===motion?-distance:distance),animation[ref]=(show?"pos"===motion?"+=":"-=":"pos"===motion?"-=":"+=")+distance,el.animate(animation,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){"hide"===mode&&el.hide(),$.effects.restore(el,props),$.effects.removeWrapper(el),done()}})},$.effects.effect.explode=function(o,done){
// children animate complete:
function childComplete(){pieces.push(this),pieces.length===rows*cells&&animComplete()}function animComplete(){el.css({visibility:"visible"}),$(pieces).remove(),show||el.hide(),done()}var
// loop
i,j,left,top,mx,my,rows=o.pieces?Math.round(Math.sqrt(o.pieces)):3,cells=rows,el=$(this),mode=$.effects.setMode(el,o.mode||"hide"),show="show"===mode,
// show and then visibility:hidden the element before calculating offset
offset=el.show().css("visibility","hidden").offset(),
// width and height of a piece
width=Math.ceil(el.outerWidth()/cells),height=Math.ceil(el.outerHeight()/rows),pieces=[];
// clone the element for each row and cell.
for(i=0;rows>i;i++)for(top=offset.top+i*height,my=i-(rows-1)/2,j=0;cells>j;j++)left=offset.left+j*width,mx=j-(cells-1)/2,el.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*width,top:-i*height}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:width,height:height,left:left+(show?mx*width:0),top:top+(show?my*height:0),opacity:show?0:1}).animate({left:left+(show?0:mx*width),top:top+(show?0:my*height),opacity:show?1:0},o.duration||500,o.easing,childComplete)},$.effects.effect.fade=function(o,done){var el=$(this),mode=$.effects.setMode(el,o.mode||"toggle");el.animate({opacity:mode},{queue:!1,duration:o.duration,easing:o.easing,complete:done})},$.effects.effect.fold=function(o,done){
// Create element
var wrapper,distance,el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show="show"===mode,hide="hide"===mode,size=o.size||15,percent=/([0-9]+)%/.exec(size),horizFirst=!!o.horizFirst,widthFirst=show!==horizFirst,ref=widthFirst?["width","height"]:["height","width"],duration=o.duration/2,animation1={},animation2={};$.effects.save(el,props),el.show(),wrapper=$.effects.createWrapper(el).css({overflow:"hidden"}),distance=widthFirst?[wrapper.width(),wrapper.height()]:[wrapper.height(),wrapper.width()],percent&&(size=parseInt(percent[1],10)/100*distance[hide?0:1]),show&&wrapper.css(horizFirst?{height:0,width:size}:{height:size,width:0}),animation1[ref[0]]=show?distance[0]:size,animation2[ref[1]]=show?distance[1]:0,wrapper.animate(animation1,duration,o.easing).animate(animation2,duration,o.easing,function(){hide&&el.hide(),$.effects.restore(el,props),$.effects.removeWrapper(el),done()})},$.effects.effect.highlight=function(o,done){var elem=$(this),props=["backgroundImage","backgroundColor","opacity"],mode=$.effects.setMode(elem,o.mode||"show"),animation={backgroundColor:elem.css("backgroundColor")};"hide"===mode&&(animation.opacity=0),$.effects.save(elem,props),elem.show().css({backgroundImage:"none",backgroundColor:o.color||"#ffff99"}).animate(animation,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){"hide"===mode&&elem.hide(),$.effects.restore(elem,props),done()}})},$.effects.effect.size=function(o,done){
// Create element
var original,baseline,factor,el=$(this),props0=["position","top","bottom","left","right","width","height","overflow","opacity"],
// Always restore
props1=["position","top","bottom","left","right","overflow","opacity"],
// Copy for children
props2=["width","height","overflow"],cProps=["fontSize"],vProps=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],hProps=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
// Set options
mode=$.effects.setMode(el,o.mode||"effect"),restore=o.restore||"effect"!==mode,scale=o.scale||"both",origin=o.origin||["middle","center"],position=el.css("position"),props=restore?props0:props1,zero={height:0,width:0,outerHeight:0,outerWidth:0};"show"===mode&&el.show(),original={height:el.height(),width:el.width(),outerHeight:el.outerHeight(),outerWidth:el.outerWidth()},"toggle"===o.mode&&"show"===mode?(el.from=o.to||zero,el.to=o.from||original):(el.from=o.from||("show"===mode?zero:original),el.to=o.to||("hide"===mode?zero:original)),factor={from:{y:el.from.height/original.height,x:el.from.width/original.width},to:{y:el.to.height/original.height,x:el.to.width/original.width}},"box"!==scale&&"both"!==scale||(factor.from.y!==factor.to.y&&(props=props.concat(vProps),el.from=$.effects.setTransition(el,vProps,factor.from.y,el.from),el.to=$.effects.setTransition(el,vProps,factor.to.y,el.to)),factor.from.x!==factor.to.x&&(props=props.concat(hProps),el.from=$.effects.setTransition(el,hProps,factor.from.x,el.from),el.to=$.effects.setTransition(el,hProps,factor.to.x,el.to))),"content"!==scale&&"both"!==scale||factor.from.y!==factor.to.y&&(props=props.concat(cProps).concat(props2),el.from=$.effects.setTransition(el,cProps,factor.from.y,el.from),el.to=$.effects.setTransition(el,cProps,factor.to.y,el.to)),$.effects.save(el,props),el.show(),$.effects.createWrapper(el),el.css("overflow","hidden").css(el.from),origin&&(baseline=$.effects.getBaseline(origin,original),el.from.top=(original.outerHeight-el.outerHeight())*baseline.y,el.from.left=(original.outerWidth-el.outerWidth())*baseline.x,el.to.top=(original.outerHeight-el.to.outerHeight)*baseline.y,el.to.left=(original.outerWidth-el.to.outerWidth)*baseline.x),el.css(el.from),"content"!==scale&&"both"!==scale||(vProps=vProps.concat(["marginTop","marginBottom"]).concat(cProps),hProps=hProps.concat(["marginLeft","marginRight"]),props2=props0.concat(vProps).concat(hProps),el.find("*[width]").each(function(){var child=$(this),c_original={height:child.height(),width:child.width(),outerHeight:child.outerHeight(),outerWidth:child.outerWidth()};restore&&$.effects.save(child,props2),child.from={height:c_original.height*factor.from.y,width:c_original.width*factor.from.x,outerHeight:c_original.outerHeight*factor.from.y,outerWidth:c_original.outerWidth*factor.from.x},child.to={height:c_original.height*factor.to.y,width:c_original.width*factor.to.x,outerHeight:c_original.height*factor.to.y,outerWidth:c_original.width*factor.to.x},factor.from.y!==factor.to.y&&(child.from=$.effects.setTransition(child,vProps,factor.from.y,child.from),child.to=$.effects.setTransition(child,vProps,factor.to.y,child.to)),factor.from.x!==factor.to.x&&(child.from=$.effects.setTransition(child,hProps,factor.from.x,child.from),child.to=$.effects.setTransition(child,hProps,factor.to.x,child.to)),child.css(child.from),child.animate(child.to,o.duration,o.easing,function(){restore&&$.effects.restore(child,props2)})})),el.animate(el.to,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){0===el.to.opacity&&el.css("opacity",el.from.opacity),"hide"===mode&&el.hide(),$.effects.restore(el,props),restore||("static"===position?el.css({position:"relative",top:el.to.top,left:el.to.left}):$.each(["top","left"],function(idx,pos){el.css(pos,function(_,str){var val=parseInt(str,10),toRef=idx?el.to.left:el.to.top;return"auto"===str?toRef+"px":val+toRef+"px"})})),$.effects.removeWrapper(el),done()}})},$.effects.effect.scale=function(o,done){
// Create element
var el=$(this),options=$.extend(!0,{},o),mode=$.effects.setMode(el,o.mode||"effect"),percent=parseInt(o.percent,10)||(0===parseInt(o.percent,10)?0:"hide"===mode?0:100),direction=o.direction||"both",origin=o.origin,original={height:el.height(),width:el.width(),outerHeight:el.outerHeight(),outerWidth:el.outerWidth()},factor={y:"horizontal"!==direction?percent/100:1,x:"vertical"!==direction?percent/100:1};
// We are going to pass this effect to the size effect:
options.effect="size",options.queue=!1,options.complete=done,"effect"!==mode&&(options.origin=origin||["middle","center"],options.restore=!0),options.from=o.from||("show"===mode?{height:0,width:0,outerHeight:0,outerWidth:0}:original),options.to={height:original.height*factor.y,width:original.width*factor.x,outerHeight:original.outerHeight*factor.y,outerWidth:original.outerWidth*factor.x},
// Fade option to support puff
options.fade&&("show"===mode&&(options.from.opacity=0,options.to.opacity=1),"hide"===mode&&(options.from.opacity=1,options.to.opacity=0)),
// Animate
el.effect(options)},$.effects.effect.puff=function(o,done){var elem=$(this),mode=$.effects.setMode(elem,o.mode||"hide"),hide="hide"===mode,percent=parseInt(o.percent,10)||150,factor=percent/100,original={height:elem.height(),width:elem.width(),outerHeight:elem.outerHeight(),outerWidth:elem.outerWidth()};$.extend(o,{effect:"scale",queue:!1,fade:!0,mode:mode,complete:done,percent:hide?percent:100,from:hide?original:{height:original.height*factor,width:original.width*factor,outerHeight:original.outerHeight*factor,outerWidth:original.outerWidth*factor}}),elem.effect(o)},$.effects.effect.pulsate=function(o,done){var i,elem=$(this),mode=$.effects.setMode(elem,o.mode||"show"),show="show"===mode,hide="hide"===mode,showhide=show||"hide"===mode,
// showing or hiding leaves of the "last" animation
anims=2*(o.times||5)+(showhide?1:0),duration=o.duration/anims,animateTo=0,queue=elem.queue(),queuelen=queue.length;
// anims - 1 opacity "toggles"
for(!show&&elem.is(":visible")||(elem.css("opacity",0).show(),animateTo=1),i=1;anims>i;i++)elem.animate({opacity:animateTo},duration,o.easing),animateTo=1-animateTo;elem.animate({opacity:animateTo},duration,o.easing),elem.queue(function(){hide&&elem.hide(),done()}),
// We just queued up "anims" animations, we need to put them next in the queue
queuelen>1&&queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1))),elem.dequeue()},$.effects.effect.shake=function(o,done){var i,el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"effect"),direction=o.direction||"left",distance=o.distance||20,times=o.times||3,anims=2*times+1,speed=Math.round(o.duration/anims),ref="up"===direction||"down"===direction?"top":"left",positiveMotion="up"===direction||"left"===direction,animation={},animation1={},animation2={},
// we will need to re-assemble the queue to stack our animations in place
queue=el.queue(),queuelen=queue.length;
// Shakes
for($.effects.save(el,props),el.show(),$.effects.createWrapper(el),
// Animation
animation[ref]=(positiveMotion?"-=":"+=")+distance,animation1[ref]=(positiveMotion?"+=":"-=")+2*distance,animation2[ref]=(positiveMotion?"-=":"+=")+2*distance,
// Animate
el.animate(animation,speed,o.easing),i=1;times>i;i++)el.animate(animation1,speed,o.easing).animate(animation2,speed,o.easing);el.animate(animation1,speed,o.easing).animate(animation,speed/2,o.easing).queue(function(){"hide"===mode&&el.hide(),$.effects.restore(el,props),$.effects.removeWrapper(el),done()}),
// inject all the animations we just queued to be first in line (after "inprogress")
queuelen>1&&queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1))),el.dequeue()},$.effects.effect.slide=function(o,done){
// Create element
var distance,el=$(this),props=["position","top","bottom","left","right","width","height"],mode=$.effects.setMode(el,o.mode||"show"),show="show"===mode,direction=o.direction||"left",ref="up"===direction||"down"===direction?"top":"left",positiveMotion="up"===direction||"left"===direction,animation={};
// Adjust
$.effects.save(el,props),el.show(),distance=o.distance||el["top"===ref?"outerHeight":"outerWidth"](!0),$.effects.createWrapper(el).css({overflow:"hidden"}),show&&el.css(ref,positiveMotion?isNaN(distance)?"-"+distance:-distance:distance),animation[ref]=(show?positiveMotion?"+=":"-=":positiveMotion?"-=":"+=")+distance,el.animate(animation,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){"hide"===mode&&el.hide(),$.effects.restore(el,props),$.effects.removeWrapper(el),done()}})},$.effects.effect.transfer=function(o,done){var elem=$(this),target=$(o.to),targetFixed="fixed"===target.css("position"),body=$("body"),fixTop=targetFixed?body.scrollTop():0,fixLeft=targetFixed?body.scrollLeft():0,endPosition=target.offset(),animation={top:endPosition.top-fixTop,left:endPosition.left-fixLeft,height:target.innerHeight(),width:target.innerWidth()},startPosition=elem.offset(),transfer=$("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(o.className).css({top:startPosition.top-fixTop,left:startPosition.left-fixLeft,height:elem.innerHeight(),width:elem.innerWidth(),position:targetFixed?"fixed":"absolute"}).animate(animation,o.duration,o.easing,function(){transfer.remove(),done()})},$.widget("ui.progressbar",{version:"1.11.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){
// Constrain initial value
this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
// Only set static values, aria-valuenow and aria-valuemax are
// set inside _refreshValue()
role:"progressbar","aria-valuemin":this.min}),this.valueDiv=$("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(newValue){return void 0===newValue?this.options.value:(this.options.value=this._constrainedValue(newValue),void this._refreshValue())},_constrainedValue:function(newValue){
// sanitize value
return void 0===newValue&&(newValue=this.options.value),this.indeterminate=newValue===!1,"number"!=typeof newValue&&(newValue=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,newValue))},_setOptions:function(options){
// Ensure "value" option is set after other values (like max)
var value=options.value;delete options.value,this._super(options),this.options.value=this._constrainedValue(value),this._refreshValue()},_setOption:function(key,value){"max"===key&&(
// Don't allow a max less than min
value=Math.max(this.min,value)),"disabled"===key&&this.element.toggleClass("ui-state-disabled",!!value).attr("aria-disabled",value),this._super(key,value)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var value=this.options.value,percentage=this._percentage();this.valueDiv.toggle(this.indeterminate||value>this.min).toggleClass("ui-corner-right",value===this.options.max).width(percentage.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=$("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":value}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==value&&(this.oldValue=value,this._trigger("change")),value===this.options.max&&this._trigger("complete")}}),$.widget("ui.selectable",$.ui.mouse,{version:"1.11.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",
// callbacks
selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var selectees,that=this;this.element.addClass("ui-selectable"),this.dragged=!1,
// cache selectee children based on filter
this.refresh=function(){selectees=$(that.options.filter,that.element[0]),selectees.addClass("ui-selectee"),selectees.each(function(){var $this=$(this),pos=$this.offset();$.data(this,"selectable-item",{element:this,$element:$this,left:pos.left,top:pos.top,right:pos.left+$this.outerWidth(),bottom:pos.top+$this.outerHeight(),startselected:!1,selected:$this.hasClass("ui-selected"),selecting:$this.hasClass("ui-selecting"),unselecting:$this.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=selectees.addClass("ui-selectee"),this._mouseInit(),this.helper=$("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(event){var that=this,options=this.options;this.opos=[event.pageX,event.pageY],this.options.disabled||(this.selectees=$(options.filter,this.element[0]),this._trigger("start",event),$(options.appendTo).append(this.helper),
// position helper (lasso)
this.helper.css({left:event.pageX,top:event.pageY,width:0,height:0}),options.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var selectee=$.data(this,"selectable-item");selectee.startselected=!0,event.metaKey||event.ctrlKey||(selectee.$element.removeClass("ui-selected"),selectee.selected=!1,selectee.$element.addClass("ui-unselecting"),selectee.unselecting=!0,
// selectable UNSELECTING callback
that._trigger("unselecting",event,{unselecting:selectee.element}))}),$(event.target).parents().addBack().each(function(){var doSelect,selectee=$.data(this,"selectable-item");
// selectable (UN)SELECTING callback
return selectee?(doSelect=!event.metaKey&&!event.ctrlKey||!selectee.$element.hasClass("ui-selected"),selectee.$element.removeClass(doSelect?"ui-unselecting":"ui-selected").addClass(doSelect?"ui-selecting":"ui-unselecting"),selectee.unselecting=!doSelect,selectee.selecting=doSelect,selectee.selected=doSelect,doSelect?that._trigger("selecting",event,{selecting:selectee.element}):that._trigger("unselecting",event,{unselecting:selectee.element}),!1):void 0}))},_mouseDrag:function(event){if(this.dragged=!0,!this.options.disabled){var tmp,that=this,options=this.options,x1=this.opos[0],y1=this.opos[1],x2=event.pageX,y2=event.pageY;return x1>x2&&(tmp=x2,x2=x1,x1=tmp),y1>y2&&(tmp=y2,y2=y1,y1=tmp),this.helper.css({left:x1,top:y1,width:x2-x1,height:y2-y1}),this.selectees.each(function(){var selectee=$.data(this,"selectable-item"),hit=!1;
//prevent helper from being selected if appendTo: selectable
selectee&&selectee.element!==that.element[0]&&("touch"===options.tolerance?hit=!(selectee.left>x2||selectee.right<x1||selectee.top>y2||selectee.bottom<y1):"fit"===options.tolerance&&(hit=selectee.left>x1&&selectee.right<x2&&selectee.top>y1&&selectee.bottom<y2),hit?(
// SELECT
selectee.selected&&(selectee.$element.removeClass("ui-selected"),selectee.selected=!1),selectee.unselecting&&(selectee.$element.removeClass("ui-unselecting"),selectee.unselecting=!1),selectee.selecting||(selectee.$element.addClass("ui-selecting"),selectee.selecting=!0,
// selectable SELECTING callback
that._trigger("selecting",event,{selecting:selectee.element}))):(
// UNSELECT
selectee.selecting&&((event.metaKey||event.ctrlKey)&&selectee.startselected?(selectee.$element.removeClass("ui-selecting"),selectee.selecting=!1,selectee.$element.addClass("ui-selected"),selectee.selected=!0):(selectee.$element.removeClass("ui-selecting"),selectee.selecting=!1,selectee.startselected&&(selectee.$element.addClass("ui-unselecting"),selectee.unselecting=!0),
// selectable UNSELECTING callback
that._trigger("unselecting",event,{unselecting:selectee.element}))),selectee.selected&&(event.metaKey||event.ctrlKey||selectee.startselected||(selectee.$element.removeClass("ui-selected"),selectee.selected=!1,selectee.$element.addClass("ui-unselecting"),selectee.unselecting=!0,
// selectable UNSELECTING callback
that._trigger("unselecting",event,{unselecting:selectee.element})))))}),!1}},_mouseStop:function(event){var that=this;return this.dragged=!1,$(".ui-unselecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");selectee.$element.removeClass("ui-unselecting"),selectee.unselecting=!1,selectee.startselected=!1,that._trigger("unselected",event,{unselected:selectee.element})}),$(".ui-selecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");selectee.$element.removeClass("ui-selecting").addClass("ui-selected"),selectee.selecting=!1,selectee.selected=!0,selectee.startselected=!0,that._trigger("selected",event,{selected:selectee.element})}),this._trigger("stop",event),this.helper.remove(),!1}}),$.widget("ui.selectmenu",{version:"1.11.4",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,
// callbacks
change:null,close:null,focus:null,open:null,select:null},_create:function(){var selectmenuId=this.element.uniqueId().attr("id");this.ids={element:selectmenuId,button:selectmenuId+"-button",menu:selectmenuId+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var that=this;
// Associate existing label with the new button
this.label=$("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(event){this.button.focus(),event.preventDefault()}}),
// Hide original select element
this.element.hide(),
// Create button
this.button=$("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),$("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=$("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){
// Delay rendering the menu items until the button receives focus.
// The menu may have already been rendered via a programmatic open.
that.menuItems||that._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var that=this;
// Create menu
this.menu=$("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),
// Wrap menu
this.menuWrap=$("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),
// Initialize menu widget
this.menuInstance=this.menu.menu({role:"listbox",select:function(event,ui){event.preventDefault(),
// support: IE8
// If the item was selected via a click, the text selection
// will be destroyed in IE
that._setSelection(),that._select(ui.item.data("ui-selectmenu-item"),event)},focus:function(event,ui){var item=ui.item.data("ui-selectmenu-item");
// Prevent inital focus from firing and check if its a newly focused item
null!=that.focusIndex&&item.index!==that.focusIndex&&(that._trigger("focus",event,{item:item}),that.isOpen||that._select(item,event)),that.focusIndex=item.index,that.button.attr("aria-activedescendant",that.menuItems.eq(item.index).attr("id"))}}).menu("instance"),
// Adjust menu styles to dropdown
this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),
// Don't close the menu on mouseleave
this.menuInstance._off(this.menu,"mouseleave"),
// Cancel the menu's collapseAll on document click
this.menuInstance._closeOnDocumentClick=function(){return!1},
// Selects often contain empty items, but never contain dividers
this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var item,options=this.element.find("option");options.length&&(this._parseOptions(options),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),item=this._getSelectedItem(),this.menuInstance.focus(null,item),this._setAria(item.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(event){this.options.disabled||(
// If this is the first time the menu is being opened, render the items
this.menuItems?(
// Menu clears focus on close, reset focus to selected item
this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",event))},_position:function(){this.menuWrap.position($.extend({of:this.button},this.options.position))},close:function(event){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",event))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(ul,items){var that=this,currentOptgroup="";$.each(items,function(index,item){item.optgroup!==currentOptgroup&&($("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(item.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:item.optgroup}).appendTo(ul),currentOptgroup=item.optgroup),that._renderItemData(ul,item)})},_renderItemData:function(ul,item){return this._renderItem(ul,item).data("ui-selectmenu-item",item)},_renderItem:function(ul,item){var li=$("<li>");return item.disabled&&li.addClass("ui-state-disabled"),this._setText(li,item.label),li.appendTo(ul)},_setText:function(element,value){value?element.text(value):element.html("&#160;")},_move:function(direction,event){var item,next,filter=".ui-menu-item";this.isOpen?item=this.menuItems.eq(this.focusIndex):(item=this.menuItems.eq(this.element[0].selectedIndex),filter+=":not(.ui-state-disabled)"),next="first"===direction||"last"===direction?item["first"===direction?"prevAll":"nextAll"](filter).eq(-1):item[direction+"All"](filter).eq(0),next.length&&this.menuInstance.focus(event,next)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(event){this[this.isOpen?"close":"open"](event)},_setSelection:function(){var selection;this.range&&(window.getSelection?(selection=window.getSelection(),selection.removeAllRanges(),selection.addRange(this.range)):this.range.select(),
// support: IE
// Setting the text selection kills the button focus in IE, but
// restoring the focus doesn't kill the selection.
this.button.focus())},_documentClick:{mousedown:function(event){this.isOpen&&($(event.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(event))}},_buttonEvents:{
// Prevent text selection from being reset when interacting with the selectmenu (#10144)
mousedown:function(){var selection;window.getSelection?(selection=window.getSelection(),selection.rangeCount&&(this.range=selection.getRangeAt(0))):this.range=document.selection.createRange()},click:function(event){this._setSelection(),this._toggle(event)},keydown:function(event){var preventDefault=!0;switch(event.keyCode){case $.ui.keyCode.TAB:case $.ui.keyCode.ESCAPE:this.close(event),preventDefault=!1;break;case $.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(event);break;case $.ui.keyCode.UP:event.altKey?this._toggle(event):this._move("prev",event);break;case $.ui.keyCode.DOWN:event.altKey?this._toggle(event):this._move("next",event);break;case $.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(event):this._toggle(event);break;case $.ui.keyCode.LEFT:this._move("prev",event);break;case $.ui.keyCode.RIGHT:this._move("next",event);break;case $.ui.keyCode.HOME:case $.ui.keyCode.PAGE_UP:this._move("first",event);break;case $.ui.keyCode.END:case $.ui.keyCode.PAGE_DOWN:this._move("last",event);break;default:this.menu.trigger(event),preventDefault=!1}preventDefault&&event.preventDefault()}},_selectFocusedItem:function(event){var item=this.menuItems.eq(this.focusIndex);item.hasClass("ui-state-disabled")||this._select(item.data("ui-selectmenu-item"),event)},_select:function(item,event){var oldIndex=this.element[0].selectedIndex;
// Change native select element
this.element[0].selectedIndex=item.index,this._setText(this.buttonText,item.label),this._setAria(item),this._trigger("select",event,{item:item}),item.index!==oldIndex&&this._trigger("change",event,{item:item}),this.close(event)},_setAria:function(item){var id=this.menuItems.eq(item.index).attr("id");this.button.attr({"aria-labelledby":id,"aria-activedescendant":id}),this.menu.attr("aria-activedescendant",id)},_setOption:function(key,value){"icons"===key&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(value.button),this._super(key,value),"appendTo"===key&&this.menuWrap.appendTo(this._appendTo()),"disabled"===key&&(this.menuInstance.option("disabled",value),this.button.toggleClass("ui-state-disabled",value).attr("aria-disabled",value),this.element.prop("disabled",value),value?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===key&&this._resizeButton()},_appendTo:function(){var element=this.options.appendTo;return element&&(element=element.jquery||element.nodeType?$(element):this.document.find(element).eq(0)),element&&element[0]||(element=this.element.closest(".ui-front")),element.length||(element=this.document[0].body),element},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var width=this.options.width;width||(width=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(width)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),
// support: IE10
// IE10 wraps long text (possibly a rounding bug)
// so we add 1px to avoid the wrapping
this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(options){var data=[];options.each(function(index,item){var option=$(item),optgroup=option.parent("optgroup");data.push({element:option,index:index,value:option.val(),label:option.text(),optgroup:optgroup.attr("label")||"",disabled:optgroup.prop("disabled")||option.prop("disabled")})}),this.items=data},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),$.widget("ui.slider",$.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,
// callbacks
change:null,slide:null,start:null,stop:null},
// number of pages in a slider
// (how many times can you page up/down to go through the whole range)
numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var i,handleCount,options=this.options,existingHandles=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),handle="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",handles=[];for(handleCount=options.values&&options.values.length||1,existingHandles.length>handleCount&&(existingHandles.slice(handleCount).remove(),existingHandles=existingHandles.slice(0,handleCount)),i=existingHandles.length;handleCount>i;i++)handles.push(handle);this.handles=existingHandles.add($(handles.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(i){$(this).data("ui-slider-handle-index",i)})},_createRange:function(){var options=this.options,classes="";options.range?(options.range===!0&&(options.values?options.values.length&&2!==options.values.length?options.values=[options.values[0],options.values[0]]:$.isArray(options.values)&&(options.values=options.values.slice(0)):options.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=$("<div></div>").appendTo(this.element),classes="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(classes+("min"===options.range||"max"===options.range?" ui-slider-range-"+options.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(event){var position,normValue,distance,closestHandle,index,allowed,offset,mouseOverHandle,that=this,o=this.options;return o.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),position={x:event.pageX,y:event.pageY},normValue=this._normValueFromMouse(position),distance=this._valueMax()-this._valueMin()+1,this.handles.each(function(i){var thisDistance=Math.abs(normValue-that.values(i));(distance>thisDistance||distance===thisDistance&&(i===that._lastChangedValue||that.values(i)===o.min))&&(distance=thisDistance,closestHandle=$(this),index=i)}),allowed=this._start(event,index),allowed===!1?!1:(this._mouseSliding=!0,this._handleIndex=index,closestHandle.addClass("ui-state-active").focus(),offset=closestHandle.offset(),mouseOverHandle=!$(event.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:event.pageX-offset.left-closestHandle.width()/2,top:event.pageY-offset.top-closestHandle.height()/2-(parseInt(closestHandle.css("borderTopWidth"),10)||0)-(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+(parseInt(closestHandle.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(event,index,normValue),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(event){var position={x:event.pageX,y:event.pageY},normValue=this._normValueFromMouse(position);return this._slide(event,this._handleIndex,normValue),!1},_mouseStop:function(event){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(event,this._handleIndex),this._change(event,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(position){var pixelTotal,pixelMouse,percentMouse,valueTotal,valueMouse;return"horizontal"===this.orientation?(pixelTotal=this.elementSize.width,pixelMouse=position.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(pixelTotal=this.elementSize.height,pixelMouse=position.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),percentMouse=pixelMouse/pixelTotal,percentMouse>1&&(percentMouse=1),0>percentMouse&&(percentMouse=0),"vertical"===this.orientation&&(percentMouse=1-percentMouse),valueTotal=this._valueMax()-this._valueMin(),valueMouse=this._valueMin()+percentMouse*valueTotal,this._trimAlignValue(valueMouse)},_start:function(event,index){var uiHash={handle:this.handles[index],value:this.value()};return this.options.values&&this.options.values.length&&(uiHash.value=this.values(index),uiHash.values=this.values()),this._trigger("start",event,uiHash)},_slide:function(event,index,newVal){var otherVal,newValues,allowed;this.options.values&&this.options.values.length?(otherVal=this.values(index?0:1),2===this.options.values.length&&this.options.range===!0&&(0===index&&newVal>otherVal||1===index&&otherVal>newVal)&&(newVal=otherVal),newVal!==this.values(index)&&(newValues=this.values(),newValues[index]=newVal,allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal,values:newValues}),otherVal=this.values(index?0:1),allowed!==!1&&this.values(index,newVal))):newVal!==this.value()&&(allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal}),allowed!==!1&&this.value(newVal))},_stop:function(event,index){var uiHash={handle:this.handles[index],value:this.value()};this.options.values&&this.options.values.length&&(uiHash.value=this.values(index),uiHash.values=this.values()),this._trigger("stop",event,uiHash)},_change:function(event,index){if(!this._keySliding&&!this._mouseSliding){var uiHash={handle:this.handles[index],value:this.value()};this.options.values&&this.options.values.length&&(uiHash.value=this.values(index),uiHash.values=this.values()),
//store the last changed value index for reference when handles overlap
this._lastChangedValue=index,this._trigger("change",event,uiHash)}},value:function(newValue){return arguments.length?(this.options.value=this._trimAlignValue(newValue),this._refreshValue(),void this._change(null,0)):this._value()},values:function(index,newValue){var vals,newValues,i;if(arguments.length>1)return this.options.values[index]=this._trimAlignValue(newValue),this._refreshValue(),void this._change(null,index);if(!arguments.length)return this._values();if(!$.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(index):this.value();for(vals=this.options.values,newValues=arguments[0],i=0;i<vals.length;i+=1)vals[i]=this._trimAlignValue(newValues[i]),this._change(null,i);this._refreshValue()},_setOption:function(key,value){var i,valsLength=0;switch("range"===key&&this.options.range===!0&&("min"===value?(this.options.value=this._values(0),this.options.values=null):"max"===value&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),$.isArray(this.options.values)&&(valsLength=this.options.values.length),"disabled"===key&&this.element.toggleClass("ui-state-disabled",!!value),this._super(key,value),key){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),
// Reset positioning from previous orientation
this.handles.css("horizontal"===value?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),i=0;valsLength>i;i+=1)this._change(null,i);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},
//internal value getter
// _value() returns value trimmed by min and max, aligned by step
_value:function(){var val=this.options.value;return val=this._trimAlignValue(val)},
//internal values getter
// _values() returns array of values trimmed by min and max, aligned by step
// _values( index ) returns single value trimmed by min and max, aligned by step
_values:function(index){var val,vals,i;if(arguments.length)return val=this.options.values[index],val=this._trimAlignValue(val);if(this.options.values&&this.options.values.length){for(vals=this.options.values.slice(),i=0;i<vals.length;i+=1)vals[i]=this._trimAlignValue(vals[i]);return vals}return[]},
// returns the step-aligned value that val is closest to, between (inclusive) min and max
_trimAlignValue:function(val){if(val<=this._valueMin())return this._valueMin();if(val>=this._valueMax())return this._valueMax();var step=this.options.step>0?this.options.step:1,valModStep=(val-this._valueMin())%step,alignValue=val-valModStep;
// Since JavaScript has problems with large floats, round
// the final value to 5 digits after the decimal point (see #4124)
return 2*Math.abs(valModStep)>=step&&(alignValue+=valModStep>0?step:-step),parseFloat(alignValue.toFixed(5))},_calculateNewMax:function(){var max=this.options.max,min=this._valueMin(),step=this.options.step,aboveMin=Math.floor(+(max-min).toFixed(this._precision())/step)*step;max=aboveMin+min,this.max=parseFloat(max.toFixed(this._precision()))},_precision:function(){var precision=this._precisionOf(this.options.step);return null!==this.options.min&&(precision=Math.max(precision,this._precisionOf(this.options.min))),precision},_precisionOf:function(num){var str=num.toString(),decimal=str.indexOf(".");return-1===decimal?0:str.length-decimal-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var lastValPercent,valPercent,value,valueMin,valueMax,oRange=this.options.range,o=this.options,that=this,animate=this._animateOff?!1:o.animate,_set={};this.options.values&&this.options.values.length?this.handles.each(function(i){valPercent=(that.values(i)-that._valueMin())/(that._valueMax()-that._valueMin())*100,_set["horizontal"===that.orientation?"left":"bottom"]=valPercent+"%",$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate),that.options.range===!0&&("horizontal"===that.orientation?(0===i&&that.range.stop(1,1)[animate?"animate":"css"]({left:valPercent+"%"},o.animate),1===i&&that.range[animate?"animate":"css"]({width:valPercent-lastValPercent+"%"},{queue:!1,duration:o.animate})):(0===i&&that.range.stop(1,1)[animate?"animate":"css"]({bottom:valPercent+"%"},o.animate),1===i&&that.range[animate?"animate":"css"]({height:valPercent-lastValPercent+"%"},{queue:!1,duration:o.animate}))),lastValPercent=valPercent}):(value=this.value(),valueMin=this._valueMin(),valueMax=this._valueMax(),valPercent=valueMax!==valueMin?(value-valueMin)/(valueMax-valueMin)*100:0,_set["horizontal"===this.orientation?"left":"bottom"]=valPercent+"%",this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate),"min"===oRange&&"horizontal"===this.orientation&&this.range.stop(1,1)[animate?"animate":"css"]({width:valPercent+"%"},o.animate),"max"===oRange&&"horizontal"===this.orientation&&this.range[animate?"animate":"css"]({width:100-valPercent+"%"},{queue:!1,duration:o.animate}),"min"===oRange&&"vertical"===this.orientation&&this.range.stop(1,1)[animate?"animate":"css"]({height:valPercent+"%"},o.animate),"max"===oRange&&"vertical"===this.orientation&&this.range[animate?"animate":"css"]({height:100-valPercent+"%"},{queue:!1,duration:o.animate}))},_handleEvents:{keydown:function(event){var allowed,curVal,newVal,step,index=$(event.target).data("ui-slider-handle-index");switch(event.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(event.preventDefault(),!this._keySliding&&(this._keySliding=!0,$(event.target).addClass("ui-state-active"),allowed=this._start(event,index),allowed===!1))return}switch(step=this.options.step,curVal=newVal=this.options.values&&this.options.values.length?this.values(index):this.value(),event.keyCode){case $.ui.keyCode.HOME:newVal=this._valueMin();break;case $.ui.keyCode.END:newVal=this._valueMax();break;case $.ui.keyCode.PAGE_UP:newVal=this._trimAlignValue(curVal+(this._valueMax()-this._valueMin())/this.numPages);break;case $.ui.keyCode.PAGE_DOWN:newVal=this._trimAlignValue(curVal-(this._valueMax()-this._valueMin())/this.numPages);break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(curVal===this._valueMax())return;newVal=this._trimAlignValue(curVal+step);break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(curVal===this._valueMin())return;newVal=this._trimAlignValue(curVal-step)}this._slide(event,index,newVal)},keyup:function(event){var index=$(event.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(event,index),this._change(event,index),$(event.target).removeClass("ui-state-active"))}}}),$.widget("ui.sortable",$.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,
// callbacks
activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(x,reference,size){return x>=reference&&reference+size>x},_isFloating:function(item){return/left|right/.test(item.css("float"))||/inline|table-cell/.test(item.css("display"))},_create:function(){this.containerCache={},this.element.addClass("ui-sortable"),
//Get the items
this.refresh(),
//Let's determine the parent's offset
this.offset=this.element.offset(),
//Initialize mouse events for interaction
this._mouseInit(),this._setHandleClassName(),
//We're ready to go
this.ready=!0},_setOption:function(key,value){this._super(key,value),"handle"===key&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),$.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var i=this.items.length-1;i>=0;i--)this.items[i].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(event,overrideHandle){var currentItem=null,validHandle=!1,that=this;
//We have to refresh the items data once first
//Find out if the clicked node (or one of its parents) is a actual item in this.items
return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(event),$(event.target).parents().each(function(){return $.data(this,that.widgetName+"-item")===that?(currentItem=$(this),!1):void 0}),$.data(event.target,that.widgetName+"-item")===that&&(currentItem=$(event.target)),currentItem&&(!this.options.handle||overrideHandle||($(this.options.handle,currentItem).find("*").addBack().each(function(){this===event.target&&(validHandle=!0)}),validHandle))?(this.currentItem=currentItem,this._removeCurrentsFromItems(),!0):!1)},_mouseStart:function(event,overrideHandle,noActivation){var i,body,o=this.options;
//Post "activate" events to possible containers
if(this.currentContainer=this,
//We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
this.refreshPositions(),
//Create and append the visible helper
this.helper=this._createHelper(event),
//Cache the helper size
this._cacheHelperProportions(),/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */
//Cache the margins of the original element
this._cacheMargins(),
//Get the next scrolling parent
this.scrollParent=this.helper.scrollParent(),
//The element's absolute position on the page minus margins
this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},$.extend(this.offset,{click:{//Where the click happened, relative to the element
left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),
// Only after we got the offset, we can change the helper's position to absolute
// TODO: Still need to figure out a way to make relative sorting possible
this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),
//Generate the original position
this.originalPosition=this._generatePosition(event),this.originalPageX=event.pageX,this.originalPageY=event.pageY,
//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),
//Cache the former DOM position
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},
//If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),
//Create the placeholder
this._createPlaceholder(),
//Set a containment if given in the options
o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(body=this.document.find("body"),this.storedCursor=body.css("cursor"),body.css("cursor",o.cursor),this.storedStylesheet=$("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(body)),o.opacity&&(// opacity option
this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(// zIndex option
this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),
//Prepare scrolling
this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),
//Call callbacks
this._trigger("start",event,this._uiHash()),
//Recache the helper size
this._preserveHelperProportions||this._cacheHelperProportions(),!noActivation)for(i=this.containers.length-1;i>=0;i--)this.containers[i]._trigger("activate",event,this._uiHash(this));//Execute the drag once - this causes the helper not to be visible before getting its correct position
//Prepare possible droppables
return $.ui.ddmanager&&($.ui.ddmanager.current=this),$.ui.ddmanager&&!o.dropBehaviour&&$.ui.ddmanager.prepareOffsets(this,event),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(event),!0},_mouseDrag:function(event){var i,item,itemElement,intersection,o=this.options,scrolled=!1;
//Rearrange
for(
//Compute the helpers position
this.position=this._generatePosition(event),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),
//Do scrolling
this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-event.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed:event.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-event.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft+o.scrollSpeed:event.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(event.pageY-this.document.scrollTop()<o.scrollSensitivity?scrolled=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(event.pageY-this.document.scrollTop())<o.scrollSensitivity&&(scrolled=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),event.pageX-this.document.scrollLeft()<o.scrollSensitivity?scrolled=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(event.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(scrolled=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),scrolled!==!1&&$.ui.ddmanager&&!o.dropBehaviour&&$.ui.ddmanager.prepareOffsets(this,event)),
//Regenerate the absolute position used for position checks
this.positionAbs=this._convertPositionTo("absolute"),
//Set the helper position
this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(item=this.items[i],itemElement=item.item[0],intersection=this._intersectsWithPointer(item),intersection&&item.instance===this.currentContainer&&itemElement!==this.currentItem[0]&&this.placeholder[1===intersection?"next":"prev"]()[0]!==itemElement&&!$.contains(this.placeholder[0],itemElement)&&("semi-dynamic"===this.options.type?!$.contains(this.element[0],itemElement):!0)){if(this.direction=1===intersection?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(item))break;this._rearrange(event,item),this._trigger("change",event,this._uiHash());break}
//Post events to containers
//Interconnect with droppables
//Call callbacks
return this._contactContainers(event),$.ui.ddmanager&&$.ui.ddmanager.drag(this,event),this._trigger("sort",event,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(event,noPropagation){if(event){if(
//If we are using droppables, inform the manager about the drop
$.ui.ddmanager&&!this.options.dropBehaviour&&$.ui.ddmanager.drop(this,event),this.options.revert){var that=this,cur=this.placeholder.offset(),axis=this.options.axis,animation={};axis&&"x"!==axis||(animation.left=cur.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),axis&&"y"!==axis||(animation.top=cur.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,$(this.helper).animate(animation,parseInt(this.options.revert,10)||500,function(){that._clear(event)})}else this._clear(event,noPropagation);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();
//Post deactivating events to containers
for(var i=this.containers.length-1;i>=0;i--)this.containers[i]._trigger("deactivate",null,this._uiHash(this)),this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",null,this._uiHash(this)),this.containers[i].containerCache.over=0)}
//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),$.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?$(this.domPosition.prev).after(this.currentItem):$(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(o){var items=this._getItemsAsjQuery(o&&o.connected),str=[];return o=o||{},$(items).each(function(){var res=($(o.item||this).attr(o.attribute||"id")||"").match(o.expression||/(.+)[\-=_](.+)/);res&&str.push((o.key||res[1]+"[]")+"="+(o.key&&o.expression?res[1]:res[2]))}),!str.length&&o.key&&str.push(o.key+"="),str.join("&")},toArray:function(o){var items=this._getItemsAsjQuery(o&&o.connected),ret=[];return o=o||{},items.each(function(){ret.push($(o.item||this).attr(o.attribute||"id")||"")}),ret},/* Be careful with the following core functions */
_intersectsWith:function(item){var x1=this.positionAbs.left,x2=x1+this.helperProportions.width,y1=this.positionAbs.top,y2=y1+this.helperProportions.height,l=item.left,r=l+item.width,t=item.top,b=t+item.height,dyClick=this.offset.click.top,dxClick=this.offset.click.left,isOverElementHeight="x"===this.options.axis||y1+dyClick>t&&b>y1+dyClick,isOverElementWidth="y"===this.options.axis||x1+dxClick>l&&r>x1+dxClick,isOverElement=isOverElementHeight&&isOverElementWidth;// Right Half
// Left Half
// Bottom Half
return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>item[this.floating?"width":"height"]?isOverElement:l<x1+this.helperProportions.width/2&&x2-this.helperProportions.width/2<r&&t<y1+this.helperProportions.height/2&&y2-this.helperProportions.height/2<b},_intersectsWithPointer:function(item){var isOverElementHeight="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),isOverElementWidth="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),isOverElement=isOverElementHeight&&isOverElementWidth,verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();return isOverElement?this.floating?horizontalDirection&&"right"===horizontalDirection||"down"===verticalDirection?2:1:verticalDirection&&("down"===verticalDirection?2:1):!1},_intersectsWithSides:function(item){var isOverBottomHalf=this._isOverAxis(this.positionAbs.top+this.offset.click.top,item.top+item.height/2,item.height),isOverRightHalf=this._isOverAxis(this.positionAbs.left+this.offset.click.left,item.left+item.width/2,item.width),verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();return this.floating&&horizontalDirection?"right"===horizontalDirection&&isOverRightHalf||"left"===horizontalDirection&&!isOverRightHalf:verticalDirection&&("down"===verticalDirection&&isOverBottomHalf||"up"===verticalDirection&&!isOverBottomHalf)},_getDragVerticalDirection:function(){var delta=this.positionAbs.top-this.lastPositionAbs.top;return 0!==delta&&(delta>0?"down":"up")},_getDragHorizontalDirection:function(){var delta=this.positionAbs.left-this.lastPositionAbs.left;return 0!==delta&&(delta>0?"right":"left")},refresh:function(event){return this._refreshItems(event),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var options=this.options;return options.connectWith.constructor===String?[options.connectWith]:options.connectWith},_getItemsAsjQuery:function(connected){function addItems(){items.push(this)}var i,j,cur,inst,items=[],queries=[],connectWith=this._connectWith();if(connectWith&&connected)for(i=connectWith.length-1;i>=0;i--)for(cur=$(connectWith[i],this.document[0]),j=cur.length-1;j>=0;j--)inst=$.data(cur[j],this.widgetFullName),inst&&inst!==this&&!inst.options.disabled&&queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element):$(inst.options.items,inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),inst]);for(queries.push([$.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=queries.length-1;i>=0;i--)queries[i][0].each(addItems);return $(items)},_removeCurrentsFromItems:function(){var list=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=$.grep(this.items,function(item){for(var j=0;j<list.length;j++)if(list[j]===item.item[0])return!1;return!0})},_refreshItems:function(event){this.items=[],this.containers=[this];var i,j,cur,inst,targetData,_queries,item,queriesLength,items=this.items,queries=[[$.isFunction(this.options.items)?this.options.items.call(this.element[0],event,{item:this.currentItem}):$(this.options.items,this.element),this]],connectWith=this._connectWith();if(connectWith&&this.ready)//Shouldn't be run the first time through due to massive slow-down
for(i=connectWith.length-1;i>=0;i--)for(cur=$(connectWith[i],this.document[0]),j=cur.length-1;j>=0;j--)inst=$.data(cur[j],this.widgetFullName),inst&&inst!==this&&!inst.options.disabled&&(queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element[0],event,{item:this.currentItem}):$(inst.options.items,inst.element),inst]),this.containers.push(inst));for(i=queries.length-1;i>=0;i--)for(targetData=queries[i][1],_queries=queries[i][0],j=0,queriesLength=_queries.length;queriesLength>j;j++)item=$(_queries[j]),item.data(this.widgetName+"-item",targetData),items.push({item:item,instance:targetData,width:0,height:0,left:0,top:0})},refreshPositions:function(fast){
// Determine whether items are being displayed horizontally
this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,
//This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,item,t,p;for(i=this.items.length-1;i>=0;i--)item=this.items[i],item.instance!==this.currentContainer&&this.currentContainer&&item.item[0]!==this.currentItem[0]||(t=this.options.toleranceElement?$(this.options.toleranceElement,item.item):item.item,fast||(item.width=t.outerWidth(),item.height=t.outerHeight()),p=t.offset(),item.left=p.left,item.top=p.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)p=this.containers[i].element.offset(),this.containers[i].containerCache.left=p.left,this.containers[i].containerCache.top=p.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(that){that=that||this;var className,o=that.options;o.placeholder&&o.placeholder.constructor!==String||(className=o.placeholder,o.placeholder={element:function(){var nodeName=that.currentItem[0].nodeName.toLowerCase(),element=$("<"+nodeName+">",that.document[0]).addClass(className||that.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tbody"===nodeName?that._createTrPlaceholder(that.currentItem.find("tr").eq(0),$("<tr>",that.document[0]).appendTo(element)):"tr"===nodeName?that._createTrPlaceholder(that.currentItem,element):"img"===nodeName&&element.attr("src",that.currentItem.attr("src")),className||element.css("visibility","hidden"),element},update:function(container,p){className&&!o.forcePlaceholderSize||(p.height()||p.height(that.currentItem.innerHeight()-parseInt(that.currentItem.css("paddingTop")||0,10)-parseInt(that.currentItem.css("paddingBottom")||0,10)),p.width()||p.width(that.currentItem.innerWidth()-parseInt(that.currentItem.css("paddingLeft")||0,10)-parseInt(that.currentItem.css("paddingRight")||0,10)))}}),
//Create the placeholder
that.placeholder=$(o.placeholder.element.call(that.element,that.currentItem)),
//Append it after the actual current item
that.currentItem.after(that.placeholder),
//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
o.placeholder.update(that,that.placeholder)},_createTrPlaceholder:function(sourceTr,targetTr){var that=this;sourceTr.children().each(function(){$("<td>&#160;</td>",that.document[0]).attr("colspan",$(this).attr("colspan")||1).appendTo(targetTr)})},_contactContainers:function(event){var i,j,dist,itemWithLeastDistance,posProperty,sizeProperty,cur,nearBottom,floating,axis,innermostContainer=null,innermostIndex=null;
// get innermost container that intersects with item
for(i=this.containers.length-1;i>=0;i--)
// never consider a container that's located within the item itself
if(!$.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){
// if we've already found a container and it's more "inner" than this, then continue
if(innermostContainer&&$.contains(this.containers[i].element[0],innermostContainer.element[0]))continue;innermostContainer=this.containers[i],innermostIndex=i}else
// container doesn't intersect. trigger "out" event if necessary
this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",event,this._uiHash(this)),this.containers[i].containerCache.over=0);
// if no intersecting containers found, return
if(innermostContainer)
// move the item into the container if it's not there already
if(1===this.containers.length)this.containers[innermostIndex].containerCache.over||(this.containers[innermostIndex]._trigger("over",event,this._uiHash(this)),this.containers[innermostIndex].containerCache.over=1);else{for(dist=1e4,itemWithLeastDistance=null,floating=innermostContainer.floating||this._isFloating(this.currentItem),posProperty=floating?"left":"top",sizeProperty=floating?"width":"height",axis=floating?"clientX":"clientY",j=this.items.length-1;j>=0;j--)$.contains(this.containers[innermostIndex].element[0],this.items[j].item[0])&&this.items[j].item[0]!==this.currentItem[0]&&(cur=this.items[j].item.offset()[posProperty],nearBottom=!1,event[axis]-cur>this.items[j][sizeProperty]/2&&(nearBottom=!0),Math.abs(event[axis]-cur)<dist&&(dist=Math.abs(event[axis]-cur),itemWithLeastDistance=this.items[j],this.direction=nearBottom?"up":"down"));
//Check if dropOnEmpty is enabled
if(!itemWithLeastDistance&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[innermostIndex])return void(this.currentContainer.containerCache.over||(this.containers[innermostIndex]._trigger("over",event,this._uiHash()),this.currentContainer.containerCache.over=1));itemWithLeastDistance?this._rearrange(event,itemWithLeastDistance,null,!0):this._rearrange(event,null,this.containers[innermostIndex].element,!0),this._trigger("change",event,this._uiHash()),this.containers[innermostIndex]._trigger("change",event,this._uiHash(this)),this.currentContainer=this.containers[innermostIndex],
//Update the placeholder
this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[innermostIndex]._trigger("over",event,this._uiHash(this)),this.containers[innermostIndex].containerCache.over=1}},_createHelper:function(event){var o=this.options,helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event,this.currentItem])):"clone"===o.helper?this.currentItem.clone():this.currentItem;
//Add the helper to the DOM if that didn't happen already
return helper.parents("body").length||$("parent"!==o.appendTo?o.appendTo:this.currentItem[0].parentNode)[0].appendChild(helper[0]),helper[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),helper[0].style.width&&!o.forceHelperSize||helper.width(this.currentItem.width()),helper[0].style.height&&!o.forceHelperSize||helper.height(this.currentItem.height()),helper},_adjustOffsetFromHelper:function(obj){"string"==typeof obj&&(obj=obj.split(" ")),$.isArray(obj)&&(obj={left:+obj[0],top:+obj[1]||0}),"left"in obj&&(this.offset.click.left=obj.left+this.margins.left),"right"in obj&&(this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left),"top"in obj&&(this.offset.click.top=obj.top+this.margins.top),"bottom"in obj&&(this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top)},_getParentOffset:function(){
//Get the offsetParent and cache its position
this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();
// This is a special case where we need to modify a offset calculated on start, since the following happened:
// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
// This needs to be actually done for all browsers, since pageX/pageY includes this information
// with an ugly IE fix
return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0])&&(po.left+=this.scrollParent.scrollLeft(),po.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&$.ui.ie)&&(po={top:0,left:0}),{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var p=this.currentItem.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var ce,co,over,o=this.options;"parent"===o.containment&&(o.containment=this.helper[0].parentNode),"document"!==o.containment&&"window"!==o.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===o.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===o.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(o.containment)||(ce=$(o.containment)[0],co=$(o.containment).offset(),over="hidden"!==$(ce).css("overflow"),this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(d,pos){pos||(pos=this.position);var mod="absolute"===d?1:-1,scroll="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,scrollIsRootNode=/(html|body)/i.test(scroll[0].tagName);return{top:pos.top+// The absolute mouse position
this.offset.relative.top*mod+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.top*mod-// The offsetParent's offset without borders (offset + border)
("fixed"===this.cssPosition?-this.scrollParent.scrollTop():scrollIsRootNode?0:scroll.scrollTop())*mod,left:pos.left+// The absolute mouse position
this.offset.relative.left*mod+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.left*mod-// The offsetParent's offset without borders (offset + border)
("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod}},_generatePosition:function(event){var top,left,o=this.options,pageX=event.pageX,pageY=event.pageY,scroll="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,scrollIsRootNode=/(html|body)/i.test(scroll[0].tagName);
// This is another very weird special case that only happens for relative elements:
// 1. If the css position is relative
// 2. and the scroll parent is the document or similar to the offset parent
// we have to refresh the relative offset during the scroll so there are no jumps
/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */
//If we are not dragging yet, we won't check for options
return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(event.pageX-this.offset.click.left<this.containment[0]&&(pageX=this.containment[0]+this.offset.click.left),event.pageY-this.offset.click.top<this.containment[1]&&(pageY=this.containment[1]+this.offset.click.top),event.pageX-this.offset.click.left>this.containment[2]&&(pageX=this.containment[2]+this.offset.click.left),event.pageY-this.offset.click.top>this.containment[3]&&(pageY=this.containment[3]+this.offset.click.top)),o.grid&&(top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1],pageY=this.containment?top-this.offset.click.top>=this.containment[1]&&top-this.offset.click.top<=this.containment[3]?top:top-this.offset.click.top>=this.containment[1]?top-o.grid[1]:top+o.grid[1]:top,left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0],pageX=this.containment?left-this.offset.click.left>=this.containment[0]&&left-this.offset.click.left<=this.containment[2]?left:left-this.offset.click.left>=this.containment[0]?left-o.grid[0]:left+o.grid[0]:left)),{top:pageY-// The absolute mouse position
this.offset.click.top-// Click offset (relative to the element)
this.offset.relative.top-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.top+(// The offsetParent's offset without borders (offset + border)
"fixed"===this.cssPosition?-this.scrollParent.scrollTop():scrollIsRootNode?0:scroll.scrollTop()),left:pageX-// The absolute mouse position
this.offset.click.left-// Click offset (relative to the element)
this.offset.relative.left-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.left+(// The offsetParent's offset without borders (offset + border)
"fixed"===this.cssPosition?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())}},_rearrange:function(event,i,a,hardRefresh){a?a[0].appendChild(this.placeholder[0]):i.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?i.item[0]:i.item[0].nextSibling),
//Various things done here to improve the performance:
// 1. we create a setTimeout, that calls refreshPositions
// 2. on the instance, we have a counter variable, that get's higher after every append
// 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
// 4. this lets only the last addition to the timeout stack through
this.counter=this.counter?++this.counter:1;var counter=this.counter;this._delay(function(){counter===this.counter&&this.refreshPositions(!hardRefresh)})},_clear:function(event,noPropagation){
//Post events to containers
function delayEvent(type,instance,container){return function(event){container._trigger(type,event,instance._uiHash(instance))}}this.reverting=!1;
// We delay all events that have to be triggered to after the point where the placeholder has been removed and
// everything else normalized again
var i,delayedTriggers=[];if(
// We first have to update the dom position of the actual currentItem
// Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)"auto"!==this._storedCSS[i]&&"static"!==this._storedCSS[i]||(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!noPropagation&&delayedTriggers.push(function(event){this._trigger("receive",event,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||noPropagation||delayedTriggers.push(function(event){this._trigger("update",event,this._uiHash())}),
// Check if the items Container has Changed and trigger appropriate
// events.
this!==this.currentContainer&&(noPropagation||(delayedTriggers.push(function(event){this._trigger("remove",event,this._uiHash())}),delayedTriggers.push(function(c){return function(event){c._trigger("receive",event,this._uiHash(this))}}.call(this,this.currentContainer)),delayedTriggers.push(function(c){return function(event){c._trigger("update",event,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)noPropagation||delayedTriggers.push(delayEvent("deactivate",this,this.containers[i])),this.containers[i].containerCache.over&&(delayedTriggers.push(delayEvent("out",this,this.containers[i])),this.containers[i].containerCache.over=0);if(
//Do what was originally in plugins
this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,noPropagation||this._trigger("beforeStop",event,this._uiHash()),
//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!noPropagation){for(i=0;i<delayedTriggers.length;i++)delayedTriggers[i].call(this,event);//Trigger all delayed events
this._trigger("stop",event,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){$.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(_inst){var inst=_inst||this;return{helper:inst.helper,placeholder:inst.placeholder||$([]),position:inst.position,originalPosition:inst.originalPosition,offset:inst.positionAbs,item:inst.currentItem,sender:_inst?_inst.element:null}}}),$.widget("ui.spinner",{version:"1.11.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){
// handle string values that need to be parsed
this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),
// Only format if there is a value, prevents the field from being marked
// as invalid in Firefox, see #9573.
""!==this.value()&&
// Format the value, but don't constrain.
this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),
// turning off autocomplete prevents the browser from remembering the
// value when navigating through history, so we re-enable autocomplete
// if the page is unloaded before the widget is destroyed. #7790
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var options={},element=this.element;return $.each(["min","max","step"],function(i,option){var value=element.attr(option);void 0!==value&&value.length&&(options[option]=value)}),options},_events:{keydown:function(event){this._start(event)&&this._keydown(event)&&event.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(event){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",event)))},mousewheel:function(event,delta){if(delta){if(!this.spinning&&!this._start(event))return!1;this._spin((delta>0?1:-1)*this.options.step,event),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(event)},100),event.preventDefault()}},"mousedown .ui-spinner-button":function(event){function checkFocus(){var isActive=this.element[0]===this.document[0].activeElement;isActive||(this.element.focus(),this.previous=previous,
// support: IE
// IE sets focus asynchronously, so we need to check if focus
// moved off of the input because the user clicked on the button.
this._delay(function(){this.previous=previous}))}var previous;previous=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),event.preventDefault(),checkFocus.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,checkFocus.call(this)}),this._start(event)!==!1&&this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(event){return $(event.currentTarget).hasClass("ui-state-active")?this._start(event)===!1?!1:void this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event):void 0},
// TODO: do we really want to consider this a stop?
// shouldn't we just stop the repeater and wait until mouseup before
// we trigger the stop event?
"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var uiSpinner=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),
// button bindings
this.buttons=uiSpinner.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),
// IE 6 doesn't understand height: 50% for the buttons
// unless the wrapper has an explicit height
this.buttons.height()>Math.ceil(.5*uiSpinner.height())&&uiSpinner.height()>0&&uiSpinner.height(uiSpinner.height()),
// disable spinner if element was already disabled
this.options.disabled&&this.disable()},_keydown:function(event){var options=this.options,keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.UP:return this._repeat(null,1,event),!0;case keyCode.DOWN:return this._repeat(null,-1,event),!0;case keyCode.PAGE_UP:return this._repeat(null,options.page,event),!0;case keyCode.PAGE_DOWN:return this._repeat(null,-options.page,event),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(event){return this.spinning||this._trigger("start",event)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(i,steps,event){i=i||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,steps,event)},i),this._spin(steps*this.options.step,event)},_spin:function(step,event){var value=this.value()||0;this.counter||(this.counter=1),value=this._adjustValue(value+step*this._increment(this.counter)),this.spinning&&this._trigger("spin",event,{value:value})===!1||(this._value(value),this.counter++)},_increment:function(i){var incremental=this.options.incremental;return incremental?$.isFunction(incremental)?incremental(i):Math.floor(i*i*i/5e4-i*i/500+17*i/200+1):1},_precision:function(){var precision=this._precisionOf(this.options.step);return null!==this.options.min&&(precision=Math.max(precision,this._precisionOf(this.options.min))),precision},_precisionOf:function(num){var str=num.toString(),decimal=str.indexOf(".");return-1===decimal?0:str.length-decimal-1},_adjustValue:function(value){var base,aboveMin,options=this.options;return base=null!==options.min?options.min:0,aboveMin=value-base,aboveMin=Math.round(aboveMin/options.step)*options.step,value=base+aboveMin,value=parseFloat(value.toFixed(this._precision())),null!==options.max&&value>options.max?options.max:null!==options.min&&value<options.min?options.min:value},_stop:function(event){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",event))},_setOption:function(key,value){if("culture"===key||"numberFormat"===key){var prevValue=this._parse(this.element.val());return this.options[key]=value,void this.element.val(this._format(prevValue))}"max"!==key&&"min"!==key&&"step"!==key||"string"==typeof value&&(value=this._parse(value)),"icons"===key&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(value.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(value.down)),this._super(key,value),"disabled"===key&&(this.widget().toggleClass("ui-state-disabled",!!value),this.element.prop("disabled",!!value),this.buttons.button(value?"disable":"enable"))},_setOptions:spinner_modifier(function(options){this._super(options)}),_parse:function(val){return"string"==typeof val&&""!==val&&(val=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(val,10,this.options.culture):+val),""===val||isNaN(val)?null:val},_format:function(value){return""===value?"":window.Globalize&&this.options.numberFormat?Globalize.format(value,this.options.numberFormat,this.options.culture):value},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,
// TODO: what should we do with values that can't be parsed?
"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var value=this.value();
// null is invalid
// null is invalid
return null===value?!1:value===this._adjustValue(value)},
// update the value without triggering change
_value:function(value,allowAny){var parsed;""!==value&&(parsed=this._parse(value),null!==parsed&&(allowAny||(parsed=this._adjustValue(parsed)),value=this._format(parsed))),this.element.val(value),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:spinner_modifier(function(steps){this._stepUp(steps)}),_stepUp:function(steps){this._start()&&(this._spin((steps||1)*this.options.step),this._stop())},stepDown:spinner_modifier(function(steps){this._stepDown(steps)}),_stepDown:function(steps){this._start()&&(this._spin((steps||1)*-this.options.step),this._stop())},pageUp:spinner_modifier(function(pages){this._stepUp((pages||1)*this.options.page)}),pageDown:spinner_modifier(function(pages){this._stepDown((pages||1)*this.options.page)}),value:function(newVal){return arguments.length?void spinner_modifier(this._value).call(this,newVal):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),$.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,
// callbacks
activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var rhash=/#.*$/;return function(anchor){var anchorUrl,locationUrl;anchor=anchor.cloneNode(!1),anchorUrl=anchor.href.replace(rhash,""),locationUrl=location.href.replace(rhash,"");
// decoding may throw an error if the URL isn't UTF-8 (#9518)
try{anchorUrl=decodeURIComponent(anchorUrl)}catch(error){}try{locationUrl=decodeURIComponent(locationUrl)}catch(error){}return anchor.hash.length>1&&anchorUrl===locationUrl}}(),_create:function(){var that=this,options=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",options.collapsible),this._processTabs(),options.active=this._initialActive(),
// Take disabling tabs via class attribute from HTML
// into account and update option properly.
$.isArray(options.disabled)&&(options.disabled=$.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"),function(li){return that.tabs.index(li)}))).sort()),
// check for length avoids error when initializing empty list
this.options.active!==!1&&this.anchors.length?this.active=this._findActive(options.active):this.active=$(),this._refresh(),this.active.length&&this.load(options.active)},_initialActive:function(){var active=this.options.active,collapsible=this.options.collapsible,locationHash=location.hash.substring(1);
// check the fragment identifier in the URL
// check for a tab marked active via a class
// no active tab, set to false
// handle numbers: negative, out of range
// don't allow collapsible: false and active: false
return null===active&&(locationHash&&this.tabs.each(function(i,tab){return $(tab).attr("aria-controls")===locationHash?(active=i,!1):void 0}),null===active&&(active=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),null!==active&&-1!==active||(active=this.tabs.length?0:!1)),active!==!1&&(active=this.tabs.index(this.tabs.eq(active)),-1===active&&(active=collapsible?!1:0)),!collapsible&&active===!1&&this.anchors.length&&(active=0),active},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):$()}},_tabKeydown:function(event){var focusedTab=$(this.document[0].activeElement).closest("li"),selectedIndex=this.tabs.index(focusedTab),goingForward=!0;if(!this._handlePageNav(event)){switch(event.keyCode){case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:selectedIndex++;break;case $.ui.keyCode.UP:case $.ui.keyCode.LEFT:goingForward=!1,selectedIndex--;break;case $.ui.keyCode.END:selectedIndex=this.anchors.length-1;break;case $.ui.keyCode.HOME:selectedIndex=0;break;case $.ui.keyCode.SPACE:
// Activate only, no collapsing
return event.preventDefault(),clearTimeout(this.activating),void this._activate(selectedIndex);case $.ui.keyCode.ENTER:
// Toggle (cancel delayed activation, allow collapsing)
// Determine if we should collapse or activate
return event.preventDefault(),clearTimeout(this.activating),void this._activate(selectedIndex===this.options.active?!1:selectedIndex);default:return}
// Focus the appropriate tab, based on which key was pressed
event.preventDefault(),clearTimeout(this.activating),selectedIndex=this._focusNextTab(selectedIndex,goingForward),
// Navigating with control/command key will prevent automatic activation
event.ctrlKey||event.metaKey||(
// Update aria-selected immediately so that AT think the tab is already selected.
// Otherwise AT may confuse the user by stating that they need to activate the tab,
// but the tab will already be activated by the time the announcement finishes.
focusedTab.attr("aria-selected","false"),this.tabs.eq(selectedIndex).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",selectedIndex)},this.delay))}},_panelKeydown:function(event){this._handlePageNav(event)||
// Ctrl+up moves focus to the current tab
event.ctrlKey&&event.keyCode===$.ui.keyCode.UP&&(event.preventDefault(),this.active.focus())},
// Alt+page up/down moves focus to the previous/next tab (and activates)
_handlePageNav:function(event){return event.altKey&&event.keyCode===$.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):event.altKey&&event.keyCode===$.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(index,goingForward){function constrain(){return index>lastTabIndex&&(index=0),0>index&&(index=lastTabIndex),index}for(var lastTabIndex=this.tabs.length-1;-1!==$.inArray(constrain(),this.options.disabled);)index=goingForward?index+1:index-1;return index},_focusNextTab:function(index,goingForward){return index=this._findNextTab(index,goingForward),this.tabs.eq(index).focus(),index},_setOption:function(key,value){
// _activate() will handle invalid values and update this.options
// don't use the widget factory's disabled handling
// Setting collapsible: false while collapsed; open first panel
return"active"===key?void this._activate(value):"disabled"===key?void this._setupDisabled(value):(this._super(key,value),"collapsible"===key&&(this.element.toggleClass("ui-tabs-collapsible",value),value||this.options.active!==!1||this._activate(0)),"event"===key&&this._setupEvents(value),void("heightStyle"===key&&this._setupHeightStyle(value)))},_sanitizeSelector:function(hash){return hash?hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var options=this.options,lis=this.tablist.children(":has(a[href])");
// get disabled tabs from class attribute from HTML
// this will get converted to a boolean if needed in _refresh()
options.disabled=$.map(lis.filter(".ui-state-disabled"),function(tab){return lis.index(tab)}),this._processTabs(),
// was collapsed or no tabs
options.active!==!1&&this.anchors.length?this.active.length&&!$.contains(this.tablist[0],this.active[0])?
// all remaining tabs are disabled
this.tabs.length===options.disabled.length?(options.active=!1,this.active=$()):this._activate(this._findNextTab(Math.max(0,options.active-1),!1)):options.active=this.tabs.index(this.active):(options.active=!1,this.active=$()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),
// Make sure one tab is in the tab order
this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var that=this,prevTabs=this.tabs,prevAnchors=this.anchors,prevPanels=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(event){$(this).is(".ui-state-disabled")&&event.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){$(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return $("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=$(),this.anchors.each(function(i,anchor){var selector,panel,panelId,anchorId=$(anchor).uniqueId().attr("id"),tab=$(anchor).closest("li"),originalAriaControls=tab.attr("aria-controls");
// inline tab
that._isLocal(anchor)?(selector=anchor.hash,panelId=selector.substring(1),panel=that.element.find(that._sanitizeSelector(selector))):(panelId=tab.attr("aria-controls")||$({}).uniqueId()[0].id,selector="#"+panelId,panel=that.element.find(selector),panel.length||(panel=that._createPanel(panelId),panel.insertAfter(that.panels[i-1]||that.tablist)),panel.attr("aria-live","polite")),panel.length&&(that.panels=that.panels.add(panel)),originalAriaControls&&tab.data("ui-tabs-aria-controls",originalAriaControls),tab.attr({"aria-controls":panelId,"aria-labelledby":anchorId}),panel.attr("aria-labelledby",anchorId)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),
// Avoid memory leaks (#10056)
prevTabs&&(this._off(prevTabs.not(this.tabs)),this._off(prevAnchors.not(this.anchors)),this._off(prevPanels.not(this.panels)))},
// allow overriding how to find the list for rare usage scenarios (#7715)
_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(id){return $("<div>").attr("id",id).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(disabled){$.isArray(disabled)&&(disabled.length?disabled.length===this.anchors.length&&(disabled=!0):disabled=!1);
// disable tabs
for(var li,i=0;li=this.tabs[i];i++)disabled===!0||-1!==$.inArray(i,disabled)?$(li).addClass("ui-state-disabled").attr("aria-disabled","true"):$(li).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=disabled},_setupEvents:function(event){var events={};event&&$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),
// Always prevent the default action, even when disabled
this._on(!0,this.anchors,{click:function(event){event.preventDefault()}}),this._on(this.anchors,events),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(heightStyle){var maxHeight,parent=this.element.parent();"fill"===heightStyle?(maxHeight=parent.height(),maxHeight-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");"absolute"!==position&&"fixed"!==position&&(maxHeight-=elem.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){maxHeight-=$(this).outerHeight(!0)}),this.panels.each(function(){$(this).height(Math.max(0,maxHeight-$(this).innerHeight()+$(this).height()))}).css("overflow","auto")):"auto"===heightStyle&&(maxHeight=0,this.panels.each(function(){maxHeight=Math.max(maxHeight,$(this).height("").height())}).height(maxHeight))},_eventHandler:function(event){var options=this.options,active=this.active,anchor=$(event.currentTarget),tab=anchor.closest("li"),clickedIsActive=tab[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():this._getPanelForTab(tab),toHide=active.length?this._getPanelForTab(active):$(),eventData={oldTab:active,oldPanel:toHide,newTab:collapsing?$():tab,newPanel:toShow};event.preventDefault(),tab.hasClass("ui-state-disabled")||tab.hasClass("ui-tabs-loading")||this.running||clickedIsActive&&!options.collapsible||this._trigger("beforeActivate",event,eventData)===!1||(options.active=collapsing?!1:this.tabs.index(tab),this.active=clickedIsActive?$():tab,this.xhr&&this.xhr.abort(),toHide.length||toShow.length||$.error("jQuery UI Tabs: Mismatching fragment identifier."),toShow.length&&this.load(this.tabs.index(tab),event),this._toggle(event,eventData))},
// handles show/hide for selecting tabs
_toggle:function(event,eventData){function complete(){that.running=!1,that._trigger("activate",event,eventData)}function show(){eventData.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),toShow.length&&that.options.show?that._show(toShow,that.options.show,complete):(toShow.show(),complete())}var that=this,toShow=eventData.newPanel,toHide=eventData.oldPanel;this.running=!0,
// start out by hiding, then showing, then completing
toHide.length&&this.options.hide?this._hide(toHide,this.options.hide,function(){eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),show()}):(eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),toHide.hide(),show()),toHide.attr("aria-hidden","true"),eventData.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),
// If we're switching tabs, remove the old tab from the tab order.
// If we're opening from collapsed state, remove the previous tab from the tab order.
// If we're collapsing, then keep the collapsing tab in the tab order.
toShow.length&&toHide.length?eventData.oldTab.attr("tabIndex",-1):toShow.length&&this.tabs.filter(function(){return 0===$(this).attr("tabIndex")}).attr("tabIndex",-1),toShow.attr("aria-hidden","false"),eventData.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(index){var anchor,active=this._findActive(index);
// trying to activate the already active panel
active[0]!==this.active[0]&&(
// trying to collapse, simulate a click on the current active header
active.length||(active=this.active),anchor=active.find(".ui-tabs-anchor")[0],this._eventHandler({target:anchor,currentTarget:anchor,preventDefault:$.noop}))},_findActive:function(index){return index===!1?$():this.tabs.eq(index)},_getIndex:function(index){
// meta-function to give users option to provide a href string instead of a numerical index.
return"string"==typeof index&&(index=this.anchors.index(this.anchors.filter("[href$='"+index+"']"))),index},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){$.data(this,"ui-tabs-destroy")?$(this).remove():$(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var li=$(this),prev=li.data("ui-tabs-aria-controls");prev?li.attr("aria-controls",prev).removeData("ui-tabs-aria-controls"):li.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(index){var disabled=this.options.disabled;disabled!==!1&&(void 0===index?disabled=!1:(index=this._getIndex(index),disabled=$.isArray(disabled)?$.map(disabled,function(num){return num!==index?num:null}):$.map(this.tabs,function(li,num){return num!==index?num:null})),this._setupDisabled(disabled))},disable:function(index){var disabled=this.options.disabled;if(disabled!==!0){if(void 0===index)disabled=!0;else{if(index=this._getIndex(index),-1!==$.inArray(index,disabled))return;disabled=$.isArray(disabled)?$.merge([index],disabled).sort():[index]}this._setupDisabled(disabled)}},load:function(index,event){index=this._getIndex(index);var that=this,tab=this.tabs.eq(index),anchor=tab.find(".ui-tabs-anchor"),panel=this._getPanelForTab(tab),eventData={tab:tab,panel:panel},complete=function(jqXHR,status){"abort"===status&&that.panels.stop(!1,!0),tab.removeClass("ui-tabs-loading"),panel.removeAttr("aria-busy"),jqXHR===that.xhr&&delete that.xhr};
// not remote
this._isLocal(anchor[0])||(this.xhr=$.ajax(this._ajaxSettings(anchor,event,eventData)),
// support: jQuery <1.8
// jQuery <1.8 returns false if the request is canceled in beforeSend,
// but as of 1.8, $.ajax() always returns a jqXHR object.
this.xhr&&"canceled"!==this.xhr.statusText&&(tab.addClass("ui-tabs-loading"),panel.attr("aria-busy","true"),this.xhr.done(function(response,status,jqXHR){
// support: jQuery <1.8
// http://bugs.jquery.com/ticket/11778
setTimeout(function(){panel.html(response),that._trigger("load",event,eventData),complete(jqXHR,status)},1)}).fail(function(jqXHR,status){
// support: jQuery <1.8
// http://bugs.jquery.com/ticket/11778
setTimeout(function(){complete(jqXHR,status)},1)})))},_ajaxSettings:function(anchor,event,eventData){var that=this;return{url:anchor.attr("href"),beforeSend:function(jqXHR,settings){return that._trigger("beforeLoad",event,$.extend({jqXHR:jqXHR,ajaxSettings:settings},eventData))}}},_getPanelForTab:function(tab){var id=$(tab).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+id))}}),$.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){
// support: IE<9, Opera in jQuery <1.7
// .text() can't accept undefined, so coerce to a string
var title=$(this).attr("title")||"";
// Escape title, since we're going from an attribute to raw HTML
return $("<a>").text(title).html()},hide:!0,
// Disabled elements have inconsistent behavior across browsers (#8661)
items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,
// callbacks
close:null,open:null},_addDescribedBy:function(elem,id){var describedby=(elem.attr("aria-describedby")||"").split(/\s+/);describedby.push(id),elem.data("ui-tooltip-id",id).attr("aria-describedby",$.trim(describedby.join(" ")))},_removeDescribedBy:function(elem){var id=elem.data("ui-tooltip-id"),describedby=(elem.attr("aria-describedby")||"").split(/\s+/),index=$.inArray(id,describedby);-1!==index&&describedby.splice(index,1),elem.removeData("ui-tooltip-id"),describedby=$.trim(describedby.join(" ")),describedby?elem.attr("aria-describedby",describedby):elem.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),
// IDs of generated tooltips, needed for destroy
this.tooltips={},
// IDs of parent tooltips where we removed the title attribute
this.parents={},this.options.disabled&&this._disable(),
// Append the aria-live region so tooltips announce correctly
this.liveRegion=$("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(key,value){var that=this;return"disabled"===key?(this[value?"_disable":"_enable"](),void(this.options[key]=value)):(this._super(key,value),void("content"===key&&$.each(this.tooltips,function(id,tooltipData){that._updateContent(tooltipData.element)})))},_disable:function(){var that=this;
// close open tooltips
$.each(this.tooltips,function(id,tooltipData){var event=$.Event("blur");event.target=event.currentTarget=tooltipData.element[0],that.close(event,!0)}),
// remove title attributes to prevent native tooltips
this.element.find(this.options.items).addBack().each(function(){var element=$(this);element.is("[title]")&&element.data("ui-tooltip-title",element.attr("title")).removeAttr("title")})},_enable:function(){
// restore title attributes
this.element.find(this.options.items).addBack().each(function(){var element=$(this);element.data("ui-tooltip-title")&&element.attr("title",element.data("ui-tooltip-title"))})},open:function(event){var that=this,target=$(event?event.target:this.element).closest(this.options.items);
// No element to show a tooltip for or the tooltip is already open
target.length&&!target.data("ui-tooltip-id")&&(target.attr("title")&&target.data("ui-tooltip-title",target.attr("title")),target.data("ui-tooltip-open",!0),
// kill parent tooltips, custom or native, for hover
event&&"mouseover"===event.type&&target.parents().each(function(){var blurEvent,parent=$(this);parent.data("ui-tooltip-open")&&(blurEvent=$.Event("blur"),blurEvent.target=blurEvent.currentTarget=this,that.close(blurEvent,!0)),parent.attr("title")&&(parent.uniqueId(),that.parents[this.id]={element:this,title:parent.attr("title")},parent.attr("title",""))}),this._registerCloseHandlers(event,target),this._updateContent(target,event))},_updateContent:function(target,event){var content,contentOption=this.options.content,that=this,eventType=event?event.type:null;return"string"==typeof contentOption?this._open(event,target,contentOption):(content=contentOption.call(target[0],function(response){
// IE may instantly serve a cached response for ajax requests
// delay this call to _open so the other call to _open runs first
that._delay(function(){
// Ignore async response if tooltip was closed already
target.data("ui-tooltip-open")&&(
// jQuery creates a special event for focusin when it doesn't
// exist natively. To improve performance, the native event
// object is reused and the type is changed. Therefore, we can't
// rely on the type being correct after the event finished
// bubbling, so we set it back to the previous value. (#8740)
event&&(event.type=eventType),this._open(event,target,response))})}),void(content&&this._open(event,target,content)))},_open:function(event,target,content){function position(event){positionOption.of=event,tooltip.is(":hidden")||tooltip.position(positionOption)}var tooltipData,tooltip,delayedShow,a11yContent,positionOption=$.extend({},this.options.position);if(content){if(tooltipData=this._find(target))return void tooltipData.tooltip.find(".ui-tooltip-content").html(content);
// if we have a title, clear it to prevent the native tooltip
// we have to check first to avoid defining a title if none exists
// (we don't want to cause an element to start matching [title])
//
// We use removeAttr only for key events, to allow IE to export the correct
// accessible attributes. For mouse events, set to empty string to avoid
// native tooltip showing up (happens only when removing inside mouseover).
target.is("[title]")&&(event&&"mouseover"===event.type?target.attr("title",""):target.removeAttr("title")),tooltipData=this._tooltip(target),tooltip=tooltipData.tooltip,this._addDescribedBy(target,tooltip.attr("id")),tooltip.find(".ui-tooltip-content").html(content),
// Support: Voiceover on OS X, JAWS on IE <= 9
// JAWS announces deletions even when aria-relevant="additions"
// Voiceover will sometimes re-read the entire log region's contents from the beginning
this.liveRegion.children().hide(),content.clone?(a11yContent=content.clone(),a11yContent.removeAttr("id").find("[id]").removeAttr("id")):a11yContent=content,$("<div>").html(a11yContent).appendTo(this.liveRegion),this.options.track&&event&&/^mouse/.test(event.type)?(this._on(this.document,{mousemove:position}),
// trigger once to override element-relative positioning
position(event)):tooltip.position($.extend({of:target},this.options.position)),tooltip.hide(),this._show(tooltip,this.options.show),
// Handle tracking tooltips that are shown with a delay (#8644). As soon
// as the tooltip is visible, position the tooltip using the most recent
// event.
this.options.show&&this.options.show.delay&&(delayedShow=this.delayedShow=setInterval(function(){tooltip.is(":visible")&&(position(positionOption.of),clearInterval(delayedShow))},$.fx.interval)),this._trigger("open",event,{tooltip:tooltip})}},_registerCloseHandlers:function(event,target){var events={keyup:function(event){if(event.keyCode===$.ui.keyCode.ESCAPE){var fakeEvent=$.Event(event);fakeEvent.currentTarget=target[0],this.close(fakeEvent,!0)}}};
// Only bind remove handler for delegated targets. Non-delegated
// tooltips will handle this in destroy.
target[0]!==this.element[0]&&(events.remove=function(){this._removeTooltip(this._find(target).tooltip)}),event&&"mouseover"!==event.type||(events.mouseleave="close"),event&&"focusin"!==event.type||(events.focusout="close"),this._on(!0,target,events)},close:function(event){var tooltip,that=this,target=$(event?event.currentTarget:this.element),tooltipData=this._find(target);
// The tooltip may already be closed
// The tooltip may already be closed
// disabling closes the tooltip, so we need to track when we're closing
// to avoid an infinite loop in case the tooltip becomes disabled on close
// Clear the interval for delayed tracking tooltips
// only set title if we had one before (see comment in _open())
// If the title attribute has changed since open(), don't restore
// Remove 'remove' binding only on delegated targets
// We set ui-tooltip-open immediately upon open (in open()), but only set the
// additional data once there's actually content to show (in _open()). So even if the
// tooltip doesn't have full data, we always remove ui-tooltip-open in case we're in
// the period between open() and _open().
return tooltipData?(tooltip=tooltipData.tooltip,void(tooltipData.closing||(clearInterval(this.delayedShow),target.data("ui-tooltip-title")&&!target.attr("title")&&target.attr("title",target.data("ui-tooltip-title")),this._removeDescribedBy(target),tooltipData.hiding=!0,tooltip.stop(!0),this._hide(tooltip,this.options.hide,function(){that._removeTooltip($(this))}),target.removeData("ui-tooltip-open"),this._off(target,"mouseleave focusout keyup"),target[0]!==this.element[0]&&this._off(target,"remove"),this._off(this.document,"mousemove"),event&&"mouseleave"===event.type&&$.each(this.parents,function(id,parent){$(parent.element).attr("title",parent.title),delete that.parents[id]}),tooltipData.closing=!0,this._trigger("close",event,{tooltip:tooltip}),tooltipData.hiding||(tooltipData.closing=!1)))):void target.removeData("ui-tooltip-open")},_tooltip:function(element){var tooltip=$("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),id=tooltip.uniqueId().attr("id");return $("<div>").addClass("ui-tooltip-content").appendTo(tooltip),tooltip.appendTo(this.document[0].body),this.tooltips[id]={element:element,tooltip:tooltip}},_find:function(target){var id=target.data("ui-tooltip-id");return id?this.tooltips[id]:null},_removeTooltip:function(tooltip){tooltip.remove(),delete this.tooltips[tooltip.attr("id")]},_destroy:function(){var that=this;
// close open tooltips
$.each(this.tooltips,function(id,tooltipData){
// Delegate to close method to handle common cleanup
var event=$.Event("blur"),element=tooltipData.element;event.target=event.currentTarget=element[0],that.close(event,!0),
// Remove immediately; destroying an open tooltip doesn't use the
// hide animation
$("#"+id).remove(),
// Restore the title
element.data("ui-tooltip-title")&&(
// If the title attribute has changed since open(), don't restore
element.attr("title")||element.attr("title",element.data("ui-tooltip-title")),element.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})}),
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
function(){
// Create a reducing function iterating left or right.
function createReduce(dir){
// Optimized iterator function as using arguments.length
// in the main function will deoptimize the, see #1991.
function iterator(obj,iteratee,memo,keys,index,length){for(;index>=0&&length>index;index+=dir){var currentKey=keys?keys[index]:index;memo=iteratee(memo,obj[currentKey],currentKey,obj)}return memo}return function(obj,iteratee,memo,context){iteratee=optimizeCb(iteratee,context,4);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length,index=dir>0?0:length-1;
// Determine the initial value if none is provided.
return arguments.length<3&&(memo=obj[keys?keys[index]:index],index+=dir),iterator(obj,iteratee,memo,keys,index,length)}}
// Generator function to create the findIndex and findLastIndex functions
function createPredicateIndexFinder(dir){return function(array,predicate,context){predicate=cb(predicate,context);for(var length=getLength(array),index=dir>0?0:length-1;index>=0&&length>index;index+=dir)if(predicate(array[index],index,array))return index;return-1}}
// Generator function to create the indexOf and lastIndexOf functions
function createIndexFinder(dir,predicateFind,sortedIndex){return function(array,item,idx){var i=0,length=getLength(array);if("number"==typeof idx)dir>0?i=idx>=0?idx:Math.max(idx+length,i):length=idx>=0?Math.min(idx+1,length):idx+length+1;else if(sortedIndex&&idx&&length)return idx=sortedIndex(array,item),array[idx]===item?idx:-1;if(item!==item)return idx=predicateFind(slice.call(array,i,length),_.isNaN),idx>=0?idx+i:-1;for(idx=dir>0?i:length-1;idx>=0&&length>idx;idx+=dir)if(array[idx]===item)return idx;return-1}}function collectNonEnumProps(obj,keys){var nonEnumIdx=nonEnumerableProps.length,constructor=obj.constructor,proto=_.isFunction(constructor)&&constructor.prototype||ObjProto,prop="constructor";for(_.has(obj,prop)&&!_.contains(keys,prop)&&keys.push(prop);nonEnumIdx--;)prop=nonEnumerableProps[nonEnumIdx],prop in obj&&obj[prop]!==proto[prop]&&!_.contains(keys,prop)&&keys.push(prop)}
// Baseline setup
// --------------
// Establish the root object, `window` in the browser, or `exports` on the server.
var root=this,previousUnderscore=root._,ArrayProto=Array.prototype,ObjProto=Object.prototype,FuncProto=Function.prototype,push=ArrayProto.push,slice=ArrayProto.slice,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty,nativeIsArray=Array.isArray,nativeKeys=Object.keys,nativeBind=FuncProto.bind,nativeCreate=Object.create,Ctor=function(){},_=function(obj){return obj instanceof _?obj:this instanceof _?void(this._wrapped=obj):new _(obj)};
// Export the Underscore object for **Node.js**, with
// backwards-compatibility for the old `require()` API. If we're in
// the browser, add `_` as a global object.
"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=_),exports._=_):root._=_,
// Current version.
_.VERSION="1.8.3";
// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
var optimizeCb=function(func,context,argCount){if(void 0===context)return func;switch(null==argCount?3:argCount){case 1:return function(value){return func.call(context,value)};case 2:return function(value,other){return func.call(context,value,other)};case 3:return function(value,index,collection){return func.call(context,value,index,collection)};case 4:return function(accumulator,value,index,collection){return func.call(context,accumulator,value,index,collection)}}return function(){return func.apply(context,arguments)}},cb=function(value,context,argCount){return null==value?_.identity:_.isFunction(value)?optimizeCb(value,context,argCount):_.isObject(value)?_.matcher(value):_.property(value)};_.iteratee=function(value,context){return cb(value,context,1/0)};
// An internal function for creating assigner functions.
var createAssigner=function(keysFunc,undefinedOnly){return function(obj){var length=arguments.length;if(2>length||null==obj)return obj;for(var index=1;length>index;index++)for(var source=arguments[index],keys=keysFunc(source),l=keys.length,i=0;l>i;i++){var key=keys[i];undefinedOnly&&void 0!==obj[key]||(obj[key]=source[key])}return obj}},baseCreate=function(prototype){if(!_.isObject(prototype))return{};if(nativeCreate)return nativeCreate(prototype);Ctor.prototype=prototype;var result=new Ctor;return Ctor.prototype=null,result},property=function(key){return function(obj){return null==obj?void 0:obj[key]}},MAX_ARRAY_INDEX=Math.pow(2,53)-1,getLength=property("length"),isArrayLike=function(collection){var length=getLength(collection);return"number"==typeof length&&length>=0&&MAX_ARRAY_INDEX>=length};
// Collection Functions
// --------------------
// The cornerstone, an `each` implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
_.each=_.forEach=function(obj,iteratee,context){iteratee=optimizeCb(iteratee,context);var i,length;if(isArrayLike(obj))for(i=0,length=obj.length;length>i;i++)iteratee(obj[i],i,obj);else{var keys=_.keys(obj);for(i=0,length=keys.length;length>i;i++)iteratee(obj[keys[i]],keys[i],obj)}return obj},
// Return the results of applying the iteratee to each element.
_.map=_.collect=function(obj,iteratee,context){iteratee=cb(iteratee,context);for(var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length,results=Array(length),index=0;length>index;index++){var currentKey=keys?keys[index]:index;results[index]=iteratee(obj[currentKey],currentKey,obj)}return results},
// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
_.reduce=_.foldl=_.inject=createReduce(1),
// The right-associative version of reduce, also known as `foldr`.
_.reduceRight=_.foldr=createReduce(-1),
// Return the first value which passes a truth test. Aliased as `detect`.
_.find=_.detect=function(obj,predicate,context){var key;return key=isArrayLike(obj)?_.findIndex(obj,predicate,context):_.findKey(obj,predicate,context),void 0!==key&&-1!==key?obj[key]:void 0},
// Return all the elements that pass a truth test.
// Aliased as `select`.
_.filter=_.select=function(obj,predicate,context){var results=[];return predicate=cb(predicate,context),_.each(obj,function(value,index,list){predicate(value,index,list)&&results.push(value)}),results},
// Return all the elements for which a truth test fails.
_.reject=function(obj,predicate,context){return _.filter(obj,_.negate(cb(predicate)),context)},
// Determine whether all of the elements match a truth test.
// Aliased as `all`.
_.every=_.all=function(obj,predicate,context){predicate=cb(predicate,context);for(var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length,index=0;length>index;index++){var currentKey=keys?keys[index]:index;if(!predicate(obj[currentKey],currentKey,obj))return!1}return!0},
// Determine if at least one element in the object matches a truth test.
// Aliased as `any`.
_.some=_.any=function(obj,predicate,context){predicate=cb(predicate,context);for(var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length,index=0;length>index;index++){var currentKey=keys?keys[index]:index;if(predicate(obj[currentKey],currentKey,obj))return!0}return!1},
// Determine if the array or object contains a given item (using `===`).
// Aliased as `includes` and `include`.
_.contains=_.includes=_.include=function(obj,item,fromIndex,guard){return isArrayLike(obj)||(obj=_.values(obj)),("number"!=typeof fromIndex||guard)&&(fromIndex=0),_.indexOf(obj,item,fromIndex)>=0},
// Invoke a method (with arguments) on every item in a collection.
_.invoke=function(obj,method){var args=slice.call(arguments,2),isFunc=_.isFunction(method);return _.map(obj,function(value){var func=isFunc?method:value[method];return null==func?func:func.apply(value,args)})},
// Convenience version of a common use case of `map`: fetching a property.
_.pluck=function(obj,key){return _.map(obj,_.property(key))},
// Convenience version of a common use case of `filter`: selecting only objects
// containing specific `key:value` pairs.
_.where=function(obj,attrs){return _.filter(obj,_.matcher(attrs))},
// Convenience version of a common use case of `find`: getting the first object
// containing specific `key:value` pairs.
_.findWhere=function(obj,attrs){return _.find(obj,_.matcher(attrs))},
// Return the maximum element (or element-based computation).
_.max=function(obj,iteratee,context){var value,computed,result=-(1/0),lastComputed=-(1/0);if(null==iteratee&&null!=obj){obj=isArrayLike(obj)?obj:_.values(obj);for(var i=0,length=obj.length;length>i;i++)value=obj[i],value>result&&(result=value)}else iteratee=cb(iteratee,context),_.each(obj,function(value,index,list){computed=iteratee(value,index,list),(computed>lastComputed||computed===-(1/0)&&result===-(1/0))&&(result=value,lastComputed=computed)});return result},
// Return the minimum element (or element-based computation).
_.min=function(obj,iteratee,context){var value,computed,result=1/0,lastComputed=1/0;if(null==iteratee&&null!=obj){obj=isArrayLike(obj)?obj:_.values(obj);for(var i=0,length=obj.length;length>i;i++)value=obj[i],result>value&&(result=value)}else iteratee=cb(iteratee,context),_.each(obj,function(value,index,list){computed=iteratee(value,index,list),(lastComputed>computed||computed===1/0&&result===1/0)&&(result=value,lastComputed=computed)});return result},
// Shuffle a collection, using the modern version of the
// [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
_.shuffle=function(obj){for(var rand,set=isArrayLike(obj)?obj:_.values(obj),length=set.length,shuffled=Array(length),index=0;length>index;index++)rand=_.random(0,index),rand!==index&&(shuffled[index]=shuffled[rand]),shuffled[rand]=set[index];return shuffled},
// Sample **n** random values from a collection.
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `map`.
_.sample=function(obj,n,guard){return null==n||guard?(isArrayLike(obj)||(obj=_.values(obj)),obj[_.random(obj.length-1)]):_.shuffle(obj).slice(0,Math.max(0,n))},
// Sort the object's values by a criterion produced by an iteratee.
_.sortBy=function(obj,iteratee,context){return iteratee=cb(iteratee,context),_.pluck(_.map(obj,function(value,index,list){return{value:value,index:index,criteria:iteratee(value,index,list)}}).sort(function(left,right){var a=left.criteria,b=right.criteria;if(a!==b){if(a>b||void 0===a)return 1;if(b>a||void 0===b)return-1}return left.index-right.index}),"value")};
// An internal function used for aggregate "group by" operations.
var group=function(behavior){return function(obj,iteratee,context){var result={};return iteratee=cb(iteratee,context),_.each(obj,function(value,index){var key=iteratee(value,index,obj);behavior(result,value,key)}),result}};
// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
_.groupBy=group(function(result,value,key){_.has(result,key)?result[key].push(value):result[key]=[value]}),
// Indexes the object's values by a criterion, similar to `groupBy`, but for
// when you know that your index values will be unique.
_.indexBy=group(function(result,value,key){result[key]=value}),
// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
_.countBy=group(function(result,value,key){_.has(result,key)?result[key]++:result[key]=1}),
// Safely create a real, live array from anything iterable.
_.toArray=function(obj){return obj?_.isArray(obj)?slice.call(obj):isArrayLike(obj)?_.map(obj,_.identity):_.values(obj):[]},
// Return the number of elements in an object.
_.size=function(obj){return null==obj?0:isArrayLike(obj)?obj.length:_.keys(obj).length},
// Split a collection into two arrays: one whose elements all satisfy the given
// predicate, and one whose elements all do not satisfy the predicate.
_.partition=function(obj,predicate,context){predicate=cb(predicate,context);var pass=[],fail=[];return _.each(obj,function(value,key,obj){(predicate(value,key,obj)?pass:fail).push(value)}),[pass,fail]},
// Array Functions
// ---------------
// Get the first element of an array. Passing **n** will return the first N
// values in the array. Aliased as `head` and `take`. The **guard** check
// allows it to work with `_.map`.
_.first=_.head=_.take=function(array,n,guard){return null!=array?null==n||guard?array[0]:_.initial(array,array.length-n):void 0},
// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
_.initial=function(array,n,guard){return slice.call(array,0,Math.max(0,array.length-(null==n||guard?1:n)))},
// Get the last element of an array. Passing **n** will return the last N
// values in the array.
_.last=function(array,n,guard){return null!=array?null==n||guard?array[array.length-1]:_.rest(array,Math.max(0,array.length-n)):void 0},
// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
// Especially useful on the arguments object. Passing an **n** will return
// the rest N values in the array.
_.rest=_.tail=_.drop=function(array,n,guard){return slice.call(array,null==n||guard?1:n)},
// Trim out all falsy values from an array.
_.compact=function(array){return _.filter(array,_.identity)};
// Internal implementation of a recursive `flatten` function.
var flatten=function(input,shallow,strict,startIndex){for(var output=[],idx=0,i=startIndex||0,length=getLength(input);length>i;i++){var value=input[i];if(isArrayLike(value)&&(_.isArray(value)||_.isArguments(value))){
//flatten current level of array or arguments object
shallow||(value=flatten(value,shallow,strict));var j=0,len=value.length;for(output.length+=len;len>j;)output[idx++]=value[j++]}else strict||(output[idx++]=value)}return output};
// Flatten out an array, either recursively (by default), or just one level.
_.flatten=function(array,shallow){return flatten(array,shallow,!1)},
// Return a version of the array that does not contain the specified value(s).
_.without=function(array){return _.difference(array,slice.call(arguments,1))},
// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// Aliased as `unique`.
_.uniq=_.unique=function(array,isSorted,iteratee,context){_.isBoolean(isSorted)||(context=iteratee,iteratee=isSorted,isSorted=!1),null!=iteratee&&(iteratee=cb(iteratee,context));for(var result=[],seen=[],i=0,length=getLength(array);length>i;i++){var value=array[i],computed=iteratee?iteratee(value,i,array):value;isSorted?(i&&seen===computed||result.push(value),seen=computed):iteratee?_.contains(seen,computed)||(seen.push(computed),result.push(value)):_.contains(result,value)||result.push(value)}return result},
// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
_.union=function(){return _.uniq(flatten(arguments,!0,!0))},
// Produce an array that contains every item shared between all the
// passed-in arrays.
_.intersection=function(array){for(var result=[],argsLength=arguments.length,i=0,length=getLength(array);length>i;i++){var item=array[i];if(!_.contains(result,item)){for(var j=1;argsLength>j&&_.contains(arguments[j],item);j++);j===argsLength&&result.push(item)}}return result},
// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
_.difference=function(array){var rest=flatten(arguments,!0,!0,1);return _.filter(array,function(value){return!_.contains(rest,value)})},
// Zip together multiple lists into a single array -- elements that share
// an index go together.
_.zip=function(){return _.unzip(arguments)},
// Complement of _.zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices
_.unzip=function(array){for(var length=array&&_.max(array,getLength).length||0,result=Array(length),index=0;length>index;index++)result[index]=_.pluck(array,index);return result},
// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values.
_.object=function(list,values){for(var result={},i=0,length=getLength(list);length>i;i++)values?result[list[i]]=values[i]:result[list[i][0]]=list[i][1];return result},
// Returns the first index on an array-like that passes a predicate test
_.findIndex=createPredicateIndexFinder(1),_.findLastIndex=createPredicateIndexFinder(-1),
// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
_.sortedIndex=function(array,obj,iteratee,context){iteratee=cb(iteratee,context,1);for(var value=iteratee(obj),low=0,high=getLength(array);high>low;){var mid=Math.floor((low+high)/2);iteratee(array[mid])<value?low=mid+1:high=mid}return low},
// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
_.indexOf=createIndexFinder(1,_.findIndex,_.sortedIndex),_.lastIndexOf=createIndexFinder(-1,_.findLastIndex),
// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](http://docs.python.org/library/functions.html#range).
_.range=function(start,stop,step){null==stop&&(stop=start||0,start=0),step=step||1;for(var length=Math.max(Math.ceil((stop-start)/step),0),range=Array(length),idx=0;length>idx;idx++,start+=step)range[idx]=start;return range};
// Function (ahem) Functions
// ------------------
// Determines whether to execute a function as a constructor
// or a normal function with the provided arguments
var executeBound=function(sourceFunc,boundFunc,context,callingContext,args){if(!(callingContext instanceof boundFunc))return sourceFunc.apply(context,args);var self=baseCreate(sourceFunc.prototype),result=sourceFunc.apply(self,args);return _.isObject(result)?result:self};
// Create a function bound to a given object (assigning `this`, and arguments,
// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
// available.
_.bind=function(func,context){if(nativeBind&&func.bind===nativeBind)return nativeBind.apply(func,slice.call(arguments,1));if(!_.isFunction(func))throw new TypeError("Bind must be called on a function");var args=slice.call(arguments,2),bound=function(){return executeBound(func,bound,context,this,args.concat(slice.call(arguments)))};return bound},
// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. _ acts
// as a placeholder, allowing any combination of arguments to be pre-filled.
_.partial=function(func){var boundArgs=slice.call(arguments,1),bound=function(){for(var position=0,length=boundArgs.length,args=Array(length),i=0;length>i;i++)args[i]=boundArgs[i]===_?arguments[position++]:boundArgs[i];for(;position<arguments.length;)args.push(arguments[position++]);return executeBound(func,bound,this,this,args)};return bound},
// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
_.bindAll=function(obj){var i,key,length=arguments.length;if(1>=length)throw new Error("bindAll must be passed function names");for(i=1;length>i;i++)key=arguments[i],obj[key]=_.bind(obj[key],obj);return obj},
// Memoize an expensive function by storing its results.
_.memoize=function(func,hasher){var memoize=function(key){var cache=memoize.cache,address=""+(hasher?hasher.apply(this,arguments):key);return _.has(cache,address)||(cache[address]=func.apply(this,arguments)),cache[address]};return memoize.cache={},memoize},
// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
_.delay=function(func,wait){var args=slice.call(arguments,2);return setTimeout(function(){return func.apply(null,args)},wait)},
// Defers a function, scheduling it to run after the current call stack has
// cleared.
_.defer=_.partial(_.delay,_,1),
// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
_.throttle=function(func,wait,options){var context,args,result,timeout=null,previous=0;options||(options={});var later=function(){previous=options.leading===!1?0:_.now(),timeout=null,result=func.apply(context,args),timeout||(context=args=null)};return function(){var now=_.now();previous||options.leading!==!1||(previous=now);var remaining=wait-(now-previous);return context=this,args=arguments,0>=remaining||remaining>wait?(timeout&&(clearTimeout(timeout),timeout=null),previous=now,result=func.apply(context,args),timeout||(context=args=null)):timeout||options.trailing===!1||(timeout=setTimeout(later,remaining)),result}},
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
_.debounce=function(func,wait,immediate){var timeout,args,context,timestamp,result,later=function(){var last=_.now()-timestamp;wait>last&&last>=0?timeout=setTimeout(later,wait-last):(timeout=null,immediate||(result=func.apply(context,args),timeout||(context=args=null)))};return function(){context=this,args=arguments,timestamp=_.now();var callNow=immediate&&!timeout;return timeout||(timeout=setTimeout(later,wait)),callNow&&(result=func.apply(context,args),context=args=null),result}},
// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
_.wrap=function(func,wrapper){return _.partial(wrapper,func)},
// Returns a negated version of the passed-in predicate.
_.negate=function(predicate){return function(){return!predicate.apply(this,arguments)}},
// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
_.compose=function(){var args=arguments,start=args.length-1;return function(){for(var i=start,result=args[start].apply(this,arguments);i--;)result=args[i].call(this,result);return result}},
// Returns a function that will only be executed on and after the Nth call.
_.after=function(times,func){return function(){return--times<1?func.apply(this,arguments):void 0}},
// Returns a function that will only be executed up to (but not including) the Nth call.
_.before=function(times,func){var memo;return function(){return--times>0&&(memo=func.apply(this,arguments)),1>=times&&(func=null),memo}},
// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
_.once=_.partial(_.before,2);
// Object Functions
// ----------------
// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug=!{toString:null}.propertyIsEnumerable("toString"),nonEnumerableProps=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];
// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`
_.keys=function(obj){if(!_.isObject(obj))return[];if(nativeKeys)return nativeKeys(obj);var keys=[];for(var key in obj)_.has(obj,key)&&keys.push(key);
// Ahem, IE < 9.
return hasEnumBug&&collectNonEnumProps(obj,keys),keys},
// Retrieve all the property names of an object.
_.allKeys=function(obj){if(!_.isObject(obj))return[];var keys=[];for(var key in obj)keys.push(key);
// Ahem, IE < 9.
return hasEnumBug&&collectNonEnumProps(obj,keys),keys},
// Retrieve the values of an object's properties.
_.values=function(obj){for(var keys=_.keys(obj),length=keys.length,values=Array(length),i=0;length>i;i++)values[i]=obj[keys[i]];return values},
// Returns the results of applying the iteratee to each element of the object
// In contrast to _.map it returns an object
_.mapObject=function(obj,iteratee,context){iteratee=cb(iteratee,context);for(var currentKey,keys=_.keys(obj),length=keys.length,results={},index=0;length>index;index++)currentKey=keys[index],results[currentKey]=iteratee(obj[currentKey],currentKey,obj);return results},
// Convert an object into a list of `[key, value]` pairs.
_.pairs=function(obj){for(var keys=_.keys(obj),length=keys.length,pairs=Array(length),i=0;length>i;i++)pairs[i]=[keys[i],obj[keys[i]]];return pairs},
// Invert the keys and values of an object. The values must be serializable.
_.invert=function(obj){for(var result={},keys=_.keys(obj),i=0,length=keys.length;length>i;i++)result[obj[keys[i]]]=keys[i];return result},
// Return a sorted list of the function names available on the object.
// Aliased as `methods`
_.functions=_.methods=function(obj){var names=[];for(var key in obj)_.isFunction(obj[key])&&names.push(key);return names.sort()},
// Extend a given object with all the properties in passed-in object(s).
_.extend=createAssigner(_.allKeys),
// Assigns a given object with all the own properties in the passed-in object(s)
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
_.extendOwn=_.assign=createAssigner(_.keys),
// Returns the first key on an object that passes a predicate test
_.findKey=function(obj,predicate,context){predicate=cb(predicate,context);for(var key,keys=_.keys(obj),i=0,length=keys.length;length>i;i++)if(key=keys[i],predicate(obj[key],key,obj))return key},
// Return a copy of the object only containing the whitelisted properties.
_.pick=function(object,oiteratee,context){var iteratee,keys,result={},obj=object;if(null==obj)return result;_.isFunction(oiteratee)?(keys=_.allKeys(obj),iteratee=optimizeCb(oiteratee,context)):(keys=flatten(arguments,!1,!1,1),iteratee=function(value,key,obj){return key in obj},obj=Object(obj));for(var i=0,length=keys.length;length>i;i++){var key=keys[i],value=obj[key];iteratee(value,key,obj)&&(result[key]=value)}return result},
// Return a copy of the object without the blacklisted properties.
_.omit=function(obj,iteratee,context){if(_.isFunction(iteratee))iteratee=_.negate(iteratee);else{var keys=_.map(flatten(arguments,!1,!1,1),String);iteratee=function(value,key){return!_.contains(keys,key)}}return _.pick(obj,iteratee,context)},
// Fill in a given object with default properties.
_.defaults=createAssigner(_.allKeys,!0),
// Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.
_.create=function(prototype,props){var result=baseCreate(prototype);return props&&_.extendOwn(result,props),result},
// Create a (shallow-cloned) duplicate of an object.
_.clone=function(obj){return _.isObject(obj)?_.isArray(obj)?obj.slice():_.extend({},obj):obj},
// Invokes interceptor with the obj, and then returns obj.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
_.tap=function(obj,interceptor){return interceptor(obj),obj},
// Returns whether an object has a given set of `key:value` pairs.
_.isMatch=function(object,attrs){var keys=_.keys(attrs),length=keys.length;if(null==object)return!length;for(var obj=Object(object),i=0;length>i;i++){var key=keys[i];if(attrs[key]!==obj[key]||!(key in obj))return!1}return!0};
// Internal recursive comparison function for `isEqual`.
var eq=function(a,b,aStack,bStack){
// Identical objects are equal. `0 === -0`, but they aren't identical.
// See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
if(a===b)return 0!==a||1/a===1/b;
// A strict comparison is necessary because `null == undefined`.
if(null==a||null==b)return a===b;
// Unwrap any wrapped objects.
a instanceof _&&(a=a._wrapped),b instanceof _&&(b=b._wrapped);
// Compare `[[Class]]` names.
var className=toString.call(a);if(className!==toString.call(b))return!1;switch(className){
// Strings, numbers, regular expressions, dates, and booleans are compared by value.
case"[object RegExp]":
// RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
case"[object String]":
// Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
// equivalent to `new String("5")`.
return""+a==""+b;case"[object Number]":
// `NaN`s are equivalent, but non-reflexive.
// Object(NaN) is equivalent to NaN
// `NaN`s are equivalent, but non-reflexive.
// Object(NaN) is equivalent to NaN
return+a!==+a?+b!==+b:0===+a?1/+a===1/b:+a===+b;case"[object Date]":case"[object Boolean]":
// Coerce dates and booleans to numeric primitive values. Dates are compared by their
// millisecond representations. Note that invalid dates with millisecond representations
// of `NaN` are not equivalent.
return+a===+b}var areArrays="[object Array]"===className;if(!areArrays){if("object"!=typeof a||"object"!=typeof b)return!1;
// Objects with different constructors are not equivalent, but `Object`s or `Array`s
// from different frames are.
var aCtor=a.constructor,bCtor=b.constructor;if(aCtor!==bCtor&&!(_.isFunction(aCtor)&&aCtor instanceof aCtor&&_.isFunction(bCtor)&&bCtor instanceof bCtor)&&"constructor"in a&&"constructor"in b)return!1}aStack=aStack||[],bStack=bStack||[];for(var length=aStack.length;length--;)
// Linear search. Performance is inversely proportional to the number of
// unique nested structures.
if(aStack[length]===a)return bStack[length]===b;
// Recursively compare objects and arrays.
if(
// Add the first object to the stack of traversed objects.
aStack.push(a),bStack.push(b),areArrays){if(length=a.length,length!==b.length)return!1;
// Deep compare the contents, ignoring non-numeric properties.
for(;length--;)if(!eq(a[length],b[length],aStack,bStack))return!1}else{
// Deep compare objects.
var key,keys=_.keys(a);
// Ensure that both objects contain the same number of properties before comparing deep equality.
if(length=keys.length,_.keys(b).length!==length)return!1;for(;length--;)if(key=keys[length],!_.has(b,key)||!eq(a[key],b[key],aStack,bStack))return!1}
// Remove the first object from the stack of traversed objects.
return aStack.pop(),bStack.pop(),!0};
// Perform a deep comparison to check if two objects are equal.
_.isEqual=function(a,b){return eq(a,b)},
// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
_.isEmpty=function(obj){return null==obj?!0:isArrayLike(obj)&&(_.isArray(obj)||_.isString(obj)||_.isArguments(obj))?0===obj.length:0===_.keys(obj).length},
// Is a given value a DOM element?
_.isElement=function(obj){return!(!obj||1!==obj.nodeType)},
// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
_.isArray=nativeIsArray||function(obj){return"[object Array]"===toString.call(obj)},
// Is a given variable an object?
_.isObject=function(obj){var type=typeof obj;return"function"===type||"object"===type&&!!obj},
// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
_.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(name){_["is"+name]=function(obj){return toString.call(obj)==="[object "+name+"]"}}),
// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
_.isArguments(arguments)||(_.isArguments=function(obj){return _.has(obj,"callee")}),
// Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
// IE 11 (#1621), and in Safari 8 (#1929).
"function"!=typeof/./&&"object"!=typeof Int8Array&&(_.isFunction=function(obj){return"function"==typeof obj||!1}),
// Is a given object a finite number?
_.isFinite=function(obj){return isFinite(obj)&&!isNaN(parseFloat(obj))},
// Is the given value `NaN`? (NaN is the only number which does not equal itself).
_.isNaN=function(obj){return _.isNumber(obj)&&obj!==+obj},
// Is a given value a boolean?
_.isBoolean=function(obj){return obj===!0||obj===!1||"[object Boolean]"===toString.call(obj)},
// Is a given value equal to null?
_.isNull=function(obj){return null===obj},
// Is a given variable undefined?
_.isUndefined=function(obj){return void 0===obj},
// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
_.has=function(obj,key){return null!=obj&&hasOwnProperty.call(obj,key)},
// Utility Functions
// -----------------
// Run Underscore.js in *noConflict* mode, returning the `_` variable to its
// previous owner. Returns a reference to the Underscore object.
_.noConflict=function(){return root._=previousUnderscore,this},
// Keep the identity function around for default iteratees.
_.identity=function(value){return value},
// Predicate-generating functions. Often useful outside of Underscore.
_.constant=function(value){return function(){return value}},_.noop=function(){},_.property=property,
// Generates a function for a given object that returns a given property.
_.propertyOf=function(obj){return null==obj?function(){}:function(key){return obj[key]}},
// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
_.matcher=_.matches=function(attrs){return attrs=_.extendOwn({},attrs),function(obj){return _.isMatch(obj,attrs)}},
// Run a function **n** times.
_.times=function(n,iteratee,context){var accum=Array(Math.max(0,n));iteratee=optimizeCb(iteratee,context,1);for(var i=0;n>i;i++)accum[i]=iteratee(i);return accum},
// Return a random integer between min and max (inclusive).
_.random=function(min,max){return null==max&&(max=min,min=0),min+Math.floor(Math.random()*(max-min+1))},
// A (possibly faster) way to get the current timestamp as an integer.
_.now=Date.now||function(){return(new Date).getTime()};
// List of HTML entities for escaping.
var escapeMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},unescapeMap=_.invert(escapeMap),createEscaper=function(map){var escaper=function(match){return map[match]},source="(?:"+_.keys(map).join("|")+")",testRegexp=RegExp(source),replaceRegexp=RegExp(source,"g");return function(string){return string=null==string?"":""+string,testRegexp.test(string)?string.replace(replaceRegexp,escaper):string}};_.escape=createEscaper(escapeMap),_.unescape=createEscaper(unescapeMap),
// If the value of the named `property` is a function then invoke it with the
// `object` as context; otherwise, return it.
_.result=function(object,property,fallback){var value=null==object?void 0:object[property];return void 0===value&&(value=fallback),_.isFunction(value)?value.call(object):value};
// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter=0;_.uniqueId=function(prefix){var id=++idCounter+"";return prefix?prefix+id:id},
// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
// When customizing `templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch=/(.)^/,escapes={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},escaper=/\\|'|\r|\n|\u2028|\u2029/g,escapeChar=function(match){return"\\"+escapes[match]};
// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
_.template=function(text,settings,oldSettings){!settings&&oldSettings&&(settings=oldSettings),settings=_.defaults({},settings,_.templateSettings);
// Combine delimiters into one regular expression via alternation.
var matcher=RegExp([(settings.escape||noMatch).source,(settings.interpolate||noMatch).source,(settings.evaluate||noMatch).source].join("|")+"|$","g"),index=0,source="__p+='";text.replace(matcher,function(match,escape,interpolate,evaluate,offset){
// Adobe VMs need the match returned to produce the correct offest.
return source+=text.slice(index,offset).replace(escaper,escapeChar),index=offset+match.length,escape?source+="'+\n((__t=("+escape+"))==null?'':_.escape(__t))+\n'":interpolate?source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'":evaluate&&(source+="';\n"+evaluate+"\n__p+='"),match}),source+="';\n",settings.variable||(source="with(obj||{}){\n"+source+"}\n"),source="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+source+"return __p;\n";try{var render=new Function(settings.variable||"obj","_",source)}catch(e){throw e.source=source,e}var template=function(data){return render.call(this,data,_)},argument=settings.variable||"obj";return template.source="function("+argument+"){\n"+source+"}",template},
// Add a "chain" function. Start chaining a wrapped Underscore object.
_.chain=function(obj){var instance=_(obj);return instance._chain=!0,instance};
// OOP
// ---------------
// If Underscore is called as a function, it returns a wrapped object that
// can be used OO-style. This wrapper holds altered versions of all the
// underscore functions. Wrapped objects may be chained.
// Helper function to continue chaining intermediate results.
var result=function(instance,obj){return instance._chain?_(obj).chain():obj};
// Add your own custom functions to the Underscore object.
_.mixin=function(obj){_.each(_.functions(obj),function(name){var func=_[name]=obj[name];_.prototype[name]=function(){var args=[this._wrapped];return push.apply(args,arguments),result(this,func.apply(_,args))}})},
// Add all of the Underscore functions to the wrapper object.
_.mixin(_),
// Add all mutator Array functions to the wrapper.
_.each(["pop","push","reverse","shift","sort","splice","unshift"],function(name){var method=ArrayProto[name];_.prototype[name]=function(){var obj=this._wrapped;return method.apply(obj,arguments),"shift"!==name&&"splice"!==name||0!==obj.length||delete obj[0],result(this,obj)}}),
// Add all accessor Array functions to the wrapper.
_.each(["concat","join","slice"],function(name){var method=ArrayProto[name];_.prototype[name]=function(){return result(this,method.apply(this._wrapped,arguments))}}),
// Extracts the result from a wrapped and chained object.
_.prototype.value=function(){return this._wrapped},
// Provide unwrapping proxy for some methods used in engine operations
// such as arithmetic and JSON stringification.
_.prototype.valueOf=_.prototype.toJSON=_.prototype.value,_.prototype.toString=function(){return""+this._wrapped},
// AMD registration happens at the end for compatibility with AMD loaders
// that may not enforce next-turn semantics on modules. Even though general
// practice for AMD registration is to be anonymous, underscore registers
// as a named module because, like jQuery, it is a base library that is
// popular enough to be bundled in a third party lib, but not be part of
// an AMD load request. Those cases could generate an error when an
// anonymous define() is called outside of a loader request.
"function"==typeof define&&define.amd&&define("underscore",[],function(){return _})}.call(this);