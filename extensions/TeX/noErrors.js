/*
 *  /MathJax/extensions/TeX/noErrors.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

(function(b,e){var d="1.1.1";var a=b.CombineConfig("TeX.noErrors",{multiLine:true,inlineDelimiters:["",""],style:{"font-size":"90%","text-align":"left",color:"black",padding:"1px 3px",border:"1px solid"}});var c="\u00A0";MathJax.Extension["TeX/noErrors"]={version:d,config:a};b.Register.StartupHook("TeX Jax Ready",function(){MathJax.InputJax.TeX.Augment({formatError:function(i,h,j,f){var g=i.message.replace(/\n.*/,"");b.signal.Post(["TeX Jax - parse error",g,h,j,f]);var l=a.inlineDelimiters;var k=(j||a.multiLine);if(!j){h=l[0]+h+l[1]}if(k){h=h.replace(/ /g,c)}else{h=h.replace(/\n/g," ")}return MathJax.ElementJax.mml.merror(h).With({isError:true,multiLine:k})}})});b.Register.StartupHook("HTML-CSS Jax Config",function(){b.Config({"HTML-CSS":{styles:{".MathJax .merror":b.Insert({"font-style":null,"background-color":null,"vertical-align":(b.Browser.isMSIE&&a.multiLine?"-2px":"")},a.style)}}})});b.Register.StartupHook("HTML-CSS Jax Ready",function(){var g=MathJax.ElementJax.mml;var h=MathJax.OutputJax["HTML-CSS"];var f=g.math.prototype.toHTML,i=g.merror.prototype.toHTML;g.math.Augment({toHTML:function(j,k){var l=this.data[0];if(l&&l.data[0]&&l.data[0].isError){j.style.fontSize="";j=this.HTMLcreateSpan(j);j.bbox=l.data[0].toHTML(j).bbox}else{j=f.call(this,j,k)}return j}});g.merror.Augment({toHTML:function(p){if(!this.isError){return i.call(this,p)}p=this.HTMLcreateSpan(p);if(this.multiLine){p.style.display="inline-block"}var r=this.data[0].data[0].data.join("").split(/\n/);for(var n=0,k=r.length;n<k;n++){h.addText(p,r[n]);if(n!==k-1){h.addElement(p,"br",{isMathJax:true})}}var s=h.getHD(p.parentNode),j=h.getW(p.parentNode);if(k>1){var q=(s.h+s.d)/2,o=h.TeX.x_height/2;var l=h.config.styles[".MathJax .merror"]["font-size"];if(l&&l.match(/%/)){o*=parseInt(l)/100}p.parentNode.style.verticalAlign=h.Em(s.d+(o-q));s.h=o+q;s.d=q-o}p.bbox={h:s.h,d:s.d,w:j,lw:0,rw:j};return p}})});b.Register.StartupHook("SVG Jax Config",function(){b.Config({SVG:{styles:{".MathJax_SVG .noError":b.Insert({"vertical-align":(b.Browser.isMSIE&&a.multiLine?"-2px":"")},a.style)}}})});b.Register.StartupHook("SVG Jax Ready",function(){var g=MathJax.ElementJax.mml;var f=g.math.prototype.toSVG,h=g.merror.prototype.toSVG;g.math.Augment({toSVG:function(i,j){var k=this.data[0];if(k&&k.data[0]&&k.data[0].isError){i=k.data[0].toSVG(i)}else{i=f.call(this,i,j)}return i}});g.merror.Augment({toSVG:function(n){if(!this.isError||this.Parent().type!=="math"){return h.call(this,n)}n=e.addElement(n,"span",{className:"noError",isMathJax:true});if(this.multiLine){n.style.display="inline-block"}var o=this.data[0].data[0].data.join("").split(/\n/);for(var l=0,j=o.length;l<j;l++){e.addText(n,o[l]);if(l!==j-1){e.addElement(n,"br",{isMathJax:true})}}if(j>1){var k=n.offsetHeight/2;n.style.verticalAlign=(-k+(k/j))+"px"}return n}})});b.Register.StartupHook("NativeMML Jax Ready",function(){var h=MathJax.ElementJax.mml;var g=MathJax.Extension["TeX/noErrors"].config;var f=h.math.prototype.toNativeMML,i=h.merror.prototype.toNativeMML;h.math.Augment({toNativeMML:function(j){var k=this.data[0];if(k&&k.data[0]&&k.data[0].isError){j=k.data[0].toNativeMML(j)}else{j=f.call(this,j)}return j}});h.merror.Augment({toNativeMML:function(n){if(!this.isError){return i.call(this,n)}n=n.appendChild(document.createElement("span"));var o=this.data[0].data[0].data.join("").split(/\n/);for(var l=0,k=o.length;l<k;l++){n.appendChild(document.createTextNode(o[l]));if(l!==k-1){n.appendChild(document.createElement("br"))}}if(this.multiLine){n.style.display="inline-block";if(k>1){n.style.verticalAlign="middle"}}for(var p in g.style){if(g.style.hasOwnProperty(p)){var j=p.replace(/-./g,function(m){return m.charAt(1).toUpperCase()});n.style[j]=g.style[p]}}return n}})});b.Startup.signal.Post("TeX noErrors Ready")})(MathJax.Hub,MathJax.HTML);MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noErrors.js");

