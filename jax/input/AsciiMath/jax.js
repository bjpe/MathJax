/*
 *  /MathJax/jax/input/AsciiMath/jax.js
 *  
 *  Copyright (c) 2012-2013 The MathJax Consortium
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

(function(ag){var k;var aa=MathJax.Object.Subclass({firstChild:null,lastChild:null,Init:function(){this.childNodes=[]},appendChild:function(i){if(i.parent){i.parent.removeChild(i)}if(this.lastChild){this.lastChild.nextSibling=i}if(!this.firstChild){this.firstChild=i}this.childNodes.push(i);i.parent=this;this.lastChild=i;return i},removeChild:function(ak){for(var aj=0,ai=this.childNodes.length;aj<ai;aj++){if(this.childNodes[aj]===ak){break}}if(aj===ai){return}this.childNodes.splice(aj,1);if(ak===this.firstChild){this.firstChild=ak.nextSibling}if(ak===this.lastChild){if(!this.childNodes.length){this.lastChild=null}else{this.lastChild=this.childNodes[this.childNodes.length-1]}}if(aj){this.childNodes[aj-1].nextSibling=ak.nextSibling}ak.nextSibling=ak.parent=null;return ak},replaceChild:function(al,aj){for(var ak=0,ai=this.childNodes.length;ak<ai;ak++){if(this.childNodes[ak]===aj){break}}if(ak){this.childNodes[ak-1].nextSibling=al}else{this.firstChild=al}if(ak>=ai-1){this.lastChild=al}this.childNodes[ak]=al;al.nextSibling=aj.nextSibling;aj.nextSibling=aj.parent=null;return aj},toString:function(){return"{"+this.childNodes.join("")+"}"}});var E=function(){k=MathJax.ElementJax.mml;var i=k.mbase.prototype.Init;k.mbase.Augment({firstChild:null,lastChild:null,nodeValue:"",nextSibling:null,Init:function(){var ai=i.apply(this,arguments)||this;ai.childNodes=ai.data;ai.nodeName=ai.type;return ai},appendChild:function(al){if(al.parent){al.parent.removeChild(al)}var aj=arguments;if(al.isa(aa)){aj=al.childNodes;al.data=al.childNodes=[];al.firstChild=al.lastChild=null}for(var ak=0,ai=aj.length;ak<ai;ak++){al=aj[ak];if(this.lastChild){this.lastChild.nextSibling=al}if(!this.firstChild){this.firstChild=al}this.Append(al);this.lastChild=al;this.nodeValue+=al.nodeValue}return al},removeChild:function(ak){for(var aj=0,ai=this.childNodes.length;aj<ai;aj++){if(this.childNodes[aj]===ak){break}}if(aj===ai){return}this.childNodes.splice(aj,1);if(ak===this.firstChild){this.firstChild=ak.nextSibling}if(ak===this.lastChild){if(!this.childNodes.length){this.lastChild=null}else{this.lastChild=this.childNodes[this.childNodes.length-1]}}if(aj){this.childNodes[aj-1].nextSibling=ak.nextSibling}this.nodeValue="";for(aj=0,ai=this.childNodes.length;aj<ai;aj++){this.nodeValue+=this.childNodes[aj].nodeValue}ak.nextSibling=ak.parent=null;return ak},replaceChild:function(al,aj){for(var ak=0,ai=this.childNodes.length;ak<ai;ak++){if(this.childNodes[ak]===aj){break}}if(ak){this.childNodes[ak-1].nextSibling=al}else{this.firstChild=al}if(ak>=ai-1){this.lastChild=al}this.SetData(ak,al);al.nextSibling=aj.nextSibling;this.nodeValue="";for(ak=0,ai=this.childNodes.length;ak<ai;ak++){this.nodeValue+=this.childNodes[ak].nodeValue}aj.nextSibling=aj.parent=null;return aj},setAttribute:function(ai,aj){this[ai]=aj}})};var S={};var g={getElementById:true,createElementNS:function(ai,i){return k[i]()},createTextNode:function(i){return k.chars(i).With({nodeValue:i})},createDocumentFragment:function(){return aa()}};var O={appName:"MathJax"};var ac;var I="red";var ad="serif";var t=true;var C=true;var f=".";var q=g.createElementNS==null;function V(i){if(q){return g.createElement(i)}else{return g.createElementNS("http://www.w3.org/1999/xhtml",i)}}var J=[61237,8492,61238,61239,8496,8497,61240,8459,8464,61241,61242,8466,8499,61243,61244,61245,61246,8475,61247,61248,61249,61250,61251,61252,61253,61254];var N=[61277,61278,8493,61279,61280,61281,61282,8460,8465,61283,61284,61285,61286,61287,61288,61289,61290,8476,61291,61292,61293,61294,61295,61296,61297,8488];var D=[61324,61325,8450,61326,61327,61328,61329,8461,61330,61331,61332,61333,61334,8469,61335,8473,8474,8477,61336,61337,61338,61339,61340,61341,61342,8484];var d=0,H=1,X=2,m=3,b=4,l=5,a=6,P=7,Z=8,r=9,ab=10;var j={input:"sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:H},af={input:"root",tag:"mroot",output:"root",tex:null,ttype:X},A={input:"frac",tag:"mfrac",output:"/",tex:null,ttype:X},Q={input:"/",tag:"mfrac",output:"/",tex:null,ttype:m},o={input:"stackrel",tag:"mover",output:"stackrel",tex:null,ttype:X},s={input:"_",tag:"msub",output:"_",tex:null,ttype:m},h={input:"^",tag:"msup",output:"^",tex:null,ttype:m},ah={input:"text",tag:"mtext",output:"text",tex:null,ttype:ab},x={input:"mbox",tag:"mtext",output:"mbox",tex:null,ttype:ab},p={input:'"',tag:"mtext",output:"mbox",tex:null,ttype:ab};var G=[{input:"alpha",tag:"mi",output:"\u03B1",tex:null,ttype:d},{input:"beta",tag:"mi",output:"\u03B2",tex:null,ttype:d},{input:"chi",tag:"mi",output:"\u03C7",tex:null,ttype:d},{input:"delta",tag:"mi",output:"\u03B4",tex:null,ttype:d},{input:"Delta",tag:"mo",output:"\u0394",tex:null,ttype:d},{input:"epsi",tag:"mi",output:"\u03B5",tex:"epsilon",ttype:d},{input:"varepsilon",tag:"mi",output:"\u025B",tex:null,ttype:d},{input:"eta",tag:"mi",output:"\u03B7",tex:null,ttype:d},{input:"gamma",tag:"mi",output:"\u03B3",tex:null,ttype:d},{input:"Gamma",tag:"mo",output:"\u0393",tex:null,ttype:d},{input:"iota",tag:"mi",output:"\u03B9",tex:null,ttype:d},{input:"kappa",tag:"mi",output:"\u03BA",tex:null,ttype:d},{input:"lambda",tag:"mi",output:"\u03BB",tex:null,ttype:d},{input:"Lambda",tag:"mo",output:"\u039B",tex:null,ttype:d},{input:"mu",tag:"mi",output:"\u03BC",tex:null,ttype:d},{input:"nu",tag:"mi",output:"\u03BD",tex:null,ttype:d},{input:"omega",tag:"mi",output:"\u03C9",tex:null,ttype:d},{input:"Omega",tag:"mo",output:"\u03A9",tex:null,ttype:d},{input:"phi",tag:"mi",output:"\u03C6",tex:null,ttype:d},{input:"varphi",tag:"mi",output:"\u03D5",tex:null,ttype:d},{input:"Phi",tag:"mo",output:"\u03A6",tex:null,ttype:d},{input:"pi",tag:"mi",output:"\u03C0",tex:null,ttype:d},{input:"Pi",tag:"mo",output:"\u03A0",tex:null,ttype:d},{input:"psi",tag:"mi",output:"\u03C8",tex:null,ttype:d},{input:"Psi",tag:"mi",output:"\u03A8",tex:null,ttype:d},{input:"rho",tag:"mi",output:"\u03C1",tex:null,ttype:d},{input:"sigma",tag:"mi",output:"\u03C3",tex:null,ttype:d},{input:"Sigma",tag:"mo",output:"\u03A3",tex:null,ttype:d},{input:"tau",tag:"mi",output:"\u03C4",tex:null,ttype:d},{input:"theta",tag:"mi",output:"\u03B8",tex:null,ttype:d},{input:"vartheta",tag:"mi",output:"\u03D1",tex:null,ttype:d},{input:"Theta",tag:"mo",output:"\u0398",tex:null,ttype:d},{input:"upsilon",tag:"mi",output:"\u03C5",tex:null,ttype:d},{input:"xi",tag:"mi",output:"\u03BE",tex:null,ttype:d},{input:"Xi",tag:"mo",output:"\u039E",tex:null,ttype:d},{input:"zeta",tag:"mi",output:"\u03B6",tex:null,ttype:d},{input:"*",tag:"mo",output:"\u22C5",tex:"cdot",ttype:d},{input:"**",tag:"mo",output:"\u22C6",tex:"star",ttype:d},{input:"//",tag:"mo",output:"/",tex:null,ttype:d},{input:"\\\\",tag:"mo",output:"\\",tex:"backslash",ttype:d},{input:"setminus",tag:"mo",output:"\\",tex:null,ttype:d},{input:"xx",tag:"mo",output:"\u00D7",tex:"times",ttype:d},{input:"-:",tag:"mo",output:"\u00F7",tex:"divide",ttype:d},{input:"@",tag:"mo",output:"\u2218",tex:"circ",ttype:d},{input:"o+",tag:"mo",output:"\u2295",tex:"oplus",ttype:d},{input:"ox",tag:"mo",output:"\u2297",tex:"otimes",ttype:d},{input:"o.",tag:"mo",output:"\u2299",tex:"odot",ttype:d},{input:"sum",tag:"mo",output:"\u2211",tex:null,ttype:P},{input:"prod",tag:"mo",output:"\u220F",tex:null,ttype:P},{input:"^^",tag:"mo",output:"\u2227",tex:"wedge",ttype:d},{input:"^^^",tag:"mo",output:"\u22C0",tex:"bigwedge",ttype:P},{input:"vv",tag:"mo",output:"\u2228",tex:"vee",ttype:d},{input:"vvv",tag:"mo",output:"\u22C1",tex:"bigvee",ttype:P},{input:"nn",tag:"mo",output:"\u2229",tex:"cap",ttype:d},{input:"nnn",tag:"mo",output:"\u22C2",tex:"bigcap",ttype:P},{input:"uu",tag:"mo",output:"\u222A",tex:"cup",ttype:d},{input:"uuu",tag:"mo",output:"\u22C3",tex:"bigcup",ttype:P},{input:"!=",tag:"mo",output:"\u2260",tex:"ne",ttype:d},{input:":=",tag:"mo",output:":=",tex:null,ttype:d},{input:"lt",tag:"mo",output:"<",tex:null,ttype:d},{input:"<=",tag:"mo",output:"\u2264",tex:"le",ttype:d},{input:"lt=",tag:"mo",output:"\u2264",tex:"leq",ttype:d},{input:">=",tag:"mo",output:"\u2265",tex:"ge",ttype:d},{input:"geq",tag:"mo",output:"\u2265",tex:null,ttype:d},{input:"-<",tag:"mo",output:"\u227A",tex:"prec",ttype:d},{input:"-lt",tag:"mo",output:"\u227A",tex:null,ttype:d},{input:">-",tag:"mo",output:"\u227B",tex:"succ",ttype:d},{input:"in",tag:"mo",output:"\u2208",tex:null,ttype:d},{input:"!in",tag:"mo",output:"\u2209",tex:"notin",ttype:d},{input:"sub",tag:"mo",output:"\u2282",tex:"subset",ttype:d},{input:"sup",tag:"mo",output:"\u2283",tex:"supset",ttype:d},{input:"sube",tag:"mo",output:"\u2286",tex:"subseteq",ttype:d},{input:"supe",tag:"mo",output:"\u2287",tex:"supseteq",ttype:d},{input:"-=",tag:"mo",output:"\u2261",tex:"equiv",ttype:d},{input:"~=",tag:"mo",output:"\u2245",tex:"cong",ttype:d},{input:"~~",tag:"mo",output:"\u2248",tex:"approx",ttype:d},{input:"prop",tag:"mo",output:"\u221D",tex:"propto",ttype:d},{input:"and",tag:"mtext",output:"and",tex:null,ttype:a},{input:"or",tag:"mtext",output:"or",tex:null,ttype:a},{input:"not",tag:"mo",output:"\u00AC",tex:"neg",ttype:d},{input:"=>",tag:"mo",output:"\u21D2",tex:"implies",ttype:d},{input:"if",tag:"mo",output:"if",tex:null,ttype:a},{input:"<=>",tag:"mo",output:"\u21D4",tex:"iff",ttype:d},{input:"AA",tag:"mo",output:"\u2200",tex:"forall",ttype:d},{input:"EE",tag:"mo",output:"\u2203",tex:"exists",ttype:d},{input:"_|_",tag:"mo",output:"\u22A5",tex:"bot",ttype:d},{input:"TT",tag:"mo",output:"\u22A4",tex:"top",ttype:d},{input:"|--",tag:"mo",output:"\u22A2",tex:"vdash",ttype:d},{input:"|==",tag:"mo",output:"\u22A8",tex:"models",ttype:d},{input:"(",tag:"mo",output:"(",tex:null,ttype:b},{input:")",tag:"mo",output:")",tex:null,ttype:l},{input:"[",tag:"mo",output:"[",tex:null,ttype:b},{input:"]",tag:"mo",output:"]",tex:null,ttype:l},{input:"{",tag:"mo",output:"{",tex:null,ttype:b},{input:"}",tag:"mo",output:"}",tex:null,ttype:l},{input:"|",tag:"mo",output:"|",tex:null,ttype:r},{input:"(:",tag:"mo",output:"\u2329",tex:"langle",ttype:b},{input:":)",tag:"mo",output:"\u232A",tex:"rangle",ttype:l},{input:"<<",tag:"mo",output:"\u2329",tex:null,ttype:b},{input:">>",tag:"mo",output:"\u232A",tex:null,ttype:l},{input:"{:",tag:"mo",output:"{:",tex:null,ttype:b,invisible:true},{input:":}",tag:"mo",output:":}",tex:null,ttype:l,invisible:true},{input:"int",tag:"mo",output:"\u222B",tex:null,ttype:d},{input:"dx",tag:"mi",output:"{:d x:}",tex:null,ttype:Z},{input:"dy",tag:"mi",output:"{:d y:}",tex:null,ttype:Z},{input:"dz",tag:"mi",output:"{:d z:}",tex:null,ttype:Z},{input:"dt",tag:"mi",output:"{:d t:}",tex:null,ttype:Z},{input:"oint",tag:"mo",output:"\u222E",tex:null,ttype:d},{input:"del",tag:"mo",output:"\u2202",tex:"partial",ttype:d},{input:"grad",tag:"mo",output:"\u2207",tex:"nabla",ttype:d},{input:"+-",tag:"mo",output:"\u00B1",tex:"pm",ttype:d},{input:"O/",tag:"mo",output:"\u2205",tex:"emptyset",ttype:d},{input:"oo",tag:"mo",output:"\u221E",tex:"infty",ttype:d},{input:"aleph",tag:"mo",output:"\u2135",tex:null,ttype:d},{input:"...",tag:"mo",output:"...",tex:"ldots",ttype:d},{input:":.",tag:"mo",output:"\u2234",tex:"therefore",ttype:d},{input:"/_",tag:"mo",output:"\u2220",tex:"angle",ttype:d},{input:"\\ ",tag:"mo",output:"\u00A0",tex:null,ttype:d},{input:"quad",tag:"mo",output:"\u00A0\u00A0",tex:null,ttype:d},{input:"qquad",tag:"mo",output:"\u00A0\u00A0\u00A0\u00A0",tex:null,ttype:d},{input:"cdots",tag:"mo",output:"\u22EF",tex:null,ttype:d},{input:"vdots",tag:"mo",output:"\u22EE",tex:null,ttype:d},{input:"ddots",tag:"mo",output:"\u22F1",tex:null,ttype:d},{input:"diamond",tag:"mo",output:"\u22C4",tex:null,ttype:d},{input:"square",tag:"mo",output:"\u25A1",tex:null,ttype:d},{input:"|__",tag:"mo",output:"\u230A",tex:"lfloor",ttype:d},{input:"__|",tag:"mo",output:"\u230B",tex:"rfloor",ttype:d},{input:"|~",tag:"mo",output:"\u2308",tex:"lceiling",ttype:d},{input:"~|",tag:"mo",output:"\u2309",tex:"rceiling",ttype:d},{input:"CC",tag:"mo",output:"\u2102",tex:null,ttype:d},{input:"NN",tag:"mo",output:"\u2115",tex:null,ttype:d},{input:"QQ",tag:"mo",output:"\u211A",tex:null,ttype:d},{input:"RR",tag:"mo",output:"\u211D",tex:null,ttype:d},{input:"ZZ",tag:"mo",output:"\u2124",tex:null,ttype:d},{input:"f",tag:"mi",output:"f",tex:null,ttype:H,func:true},{input:"g",tag:"mi",output:"g",tex:null,ttype:H,func:true},{input:"lim",tag:"mo",output:"lim",tex:null,ttype:P},{input:"Lim",tag:"mo",output:"Lim",tex:null,ttype:P},{input:"sin",tag:"mo",output:"sin",tex:null,ttype:H,func:true},{input:"cos",tag:"mo",output:"cos",tex:null,ttype:H,func:true},{input:"tan",tag:"mo",output:"tan",tex:null,ttype:H,func:true},{input:"sinh",tag:"mo",output:"sinh",tex:null,ttype:H,func:true},{input:"cosh",tag:"mo",output:"cosh",tex:null,ttype:H,func:true},{input:"tanh",tag:"mo",output:"tanh",tex:null,ttype:H,func:true},{input:"cot",tag:"mo",output:"cot",tex:null,ttype:H,func:true},{input:"sec",tag:"mo",output:"sec",tex:null,ttype:H,func:true},{input:"csc",tag:"mo",output:"csc",tex:null,ttype:H,func:true},{input:"log",tag:"mo",output:"log",tex:null,ttype:H,func:true},{input:"ln",tag:"mo",output:"ln",tex:null,ttype:H,func:true},{input:"det",tag:"mo",output:"det",tex:null,ttype:H,func:true},{input:"dim",tag:"mo",output:"dim",tex:null,ttype:d},{input:"mod",tag:"mo",output:"mod",tex:null,ttype:d},{input:"gcd",tag:"mo",output:"gcd",tex:null,ttype:H,func:true},{input:"lcm",tag:"mo",output:"lcm",tex:null,ttype:H,func:true},{input:"lub",tag:"mo",output:"lub",tex:null,ttype:d},{input:"glb",tag:"mo",output:"glb",tex:null,ttype:d},{input:"min",tag:"mo",output:"min",tex:null,ttype:P},{input:"max",tag:"mo",output:"max",tex:null,ttype:P},{input:"uarr",tag:"mo",output:"\u2191",tex:"uparrow",ttype:d},{input:"darr",tag:"mo",output:"\u2193",tex:"downarrow",ttype:d},{input:"rarr",tag:"mo",output:"\u2192",tex:"rightarrow",ttype:d},{input:"->",tag:"mo",output:"\u2192",tex:"to",ttype:d},{input:"|->",tag:"mo",output:"\u21A6",tex:"mapsto",ttype:d},{input:"larr",tag:"mo",output:"\u2190",tex:"leftarrow",ttype:d},{input:"harr",tag:"mo",output:"\u2194",tex:"leftrightarrow",ttype:d},{input:"rArr",tag:"mo",output:"\u21D2",tex:"Rightarrow",ttype:d},{input:"lArr",tag:"mo",output:"\u21D0",tex:"Leftarrow",ttype:d},{input:"hArr",tag:"mo",output:"\u21D4",tex:"Leftrightarrow",ttype:d},j,af,A,Q,o,s,h,{input:"hat",tag:"mover",output:"\u005E",tex:null,ttype:H,acc:true},{input:"bar",tag:"mover",output:"\u00AF",tex:"overline",ttype:H,acc:true},{input:"vec",tag:"mover",output:"\u2192",tex:null,ttype:H,acc:true},{input:"dot",tag:"mover",output:".",tex:null,ttype:H,acc:true},{input:"ddot",tag:"mover",output:"..",tex:null,ttype:H,acc:true},{input:"ul",tag:"munder",output:"\u0332",tex:"underline",ttype:H,acc:true},ah,x,p,{input:"bb",tag:"mstyle",atname:"fontweight",atval:"bold",output:"bb",tex:null,ttype:H},{input:"mathbf",tag:"mstyle",atname:"fontweight",atval:"bold",output:"mathbf",tex:null,ttype:H},{input:"sf",tag:"mstyle",atname:"fontfamily",atval:"sans-serif",output:"sf",tex:null,ttype:H},{input:"mathsf",tag:"mstyle",atname:"fontfamily",atval:"sans-serif",output:"mathsf",tex:null,ttype:H},{input:"bbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"bbb",tex:null,ttype:H,codes:D},{input:"mathbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"mathbb",tex:null,ttype:H,codes:D},{input:"cc",tag:"mstyle",atname:"mathvariant",atval:"script",output:"cc",tex:null,ttype:H,codes:J},{input:"mathcal",tag:"mstyle",atname:"mathvariant",atval:"script",output:"mathcal",tex:null,ttype:H,codes:J},{input:"tt",tag:"mstyle",atname:"fontfamily",atval:"monospace",output:"tt",tex:null,ttype:H},{input:"mathtt",tag:"mstyle",atname:"fontfamily",atval:"monospace",output:"mathtt",tex:null,ttype:H},{input:"fr",tag:"mstyle",atname:"mathvariant",atval:"fraktur",output:"fr",tex:null,ttype:H,codes:N},{input:"mathfrak",tag:"mstyle",atname:"mathvariant",atval:"fraktur",output:"mathfrak",tex:null,ttype:H,codes:N}];function W(ai,i){if(ai.input>i.input){return 1}else{return -1}}var U=[];function v(){var aj=[],ai;for(ai=0;ai<G.length;ai++){if(G[ai].tex){aj[aj.length]={input:G[ai].tex,tag:G[ai].tag,output:G[ai].output,ttype:G[ai].ttype}}}G=G.concat(aj);G.sort(W);for(ai=0;ai<G.length;ai++){U[ai]=G[ai].input}}var Y="http://www.w3.org/1998/Math/MathML";function R(i){if(q){return g.createElement("m:"+i)}else{return g.createElementNS(Y,i)}}function M(i,aj){if(q){var ai=g.createElement("m:"+i)}else{ai=g.createElementNS(Y,i)}ai.appendChild(aj);return ai}function B(i,ai){G=G.concat([{input:i,tag:"mo",output:ai,tex:null,ttype:Z}]);G.sort(W);for(ac=0;ac<G.length;ac++){U[ac]=G[ac].input}}function u(ak,al){var ai;if(ak.charAt(al)=="\\"&&ak.charAt(al+1)!="\\"&&ak.charAt(al+1)!=" "){ai=ak.slice(al+1)}else{ai=ak.slice(al)}for(var aj=0;aj<ai.length&&ai.charCodeAt(aj)<=32;aj=aj+1){}return ai.slice(aj)}function c(aj,am,an){if(an==0){var al,ai;an=-1;al=aj.length;while(an+1<al){ai=(an+al)>>1;if(aj[ai]<am){an=ai}else{al=ai}}return al}else{for(var ak=an;ak<aj.length&&aj[ak]<am;ak++){}}return ak}function n(ao){var ai=0;var aj=0;var al;var ar;var aq;var am="";var an=true;for(var ak=1;ak<=ao.length&&an;ak++){ar=ao.slice(0,ak);aj=ai;ai=c(U,ar,aj);if(ai<U.length&&ao.slice(0,U[ai].length)==U[ai]){am=U[ai];al=ai;ak=am.length}an=ai<U.length&&ao.slice(0,U[ai].length)>=U[ai]}y=F;if(am!=""){F=G[al].ttype;return G[al]}F=d;ai=1;ar=ao.slice(0,1);var ap=true;while("0"<=ar&&ar<="9"&&ai<=ao.length){ar=ao.slice(ai,ai+1);ai++}if(ar==f){ar=ao.slice(ai,ai+1);if("0"<=ar&&ar<="9"){ap=false;ai++;while("0"<=ar&&ar<="9"&&ai<=ao.length){ar=ao.slice(ai,ai+1);ai++}}}if((ap&&ai>1)||ai>2){ar=ao.slice(0,ai-1);aq="mn"}else{ai=2;ar=ao.slice(0,1);aq=(("A">ar||ar>"Z")&&("a">ar||ar>"z")?"mo":"mi")}if(ar=="-"&&y==m){F=m;return{input:ar,tag:aq,output:ar,ttype:H,func:true}}return{input:ar,tag:aq,output:ar,ttype:d}}function T(ai){var i;if(ai.nodeName=="mrow"){i=ai.firstChild.firstChild.nodeValue;if(i=="("||i=="["||i=="{"){ai.removeChild(ai.firstChild)}}if(ai.nodeName=="mrow"){i=ai.lastChild.firstChild.nodeValue;if(i==")"||i=="]"||i=="}"){ai.removeChild(ai.lastChild)}}}var K,y,F;function L(ao){var ak,aj,ar,am,aq,an=g.createDocumentFragment();ao=u(ao,0);ak=n(ao);if(ak==null||ak.ttype==l&&K>0){return[null,ao]}if(ak.ttype==Z){ao=ak.output+u(ao,ak.input.length);ak=n(ao)}switch(ak.ttype){case P:case d:ao=u(ao,ak.input.length);return[M(ak.tag,g.createTextNode(ak.output)),ao];case b:K++;ao=u(ao,ak.input.length);ar=w(ao,true);K--;if(typeof ak.invisible=="boolean"&&ak.invisible){aj=M("mrow",ar[0])}else{aj=M("mo",g.createTextNode(ak.output));aj=M("mrow",aj);aj.appendChild(ar[0])}return[aj,ar[1]];case ab:if(ak!=p){ao=u(ao,ak.input.length)}if(ao.charAt(0)=="{"){am=ao.indexOf("}")}else{if(ao.charAt(0)=="("){am=ao.indexOf(")")}else{if(ao.charAt(0)=="["){am=ao.indexOf("]")}else{if(ak==p){am=ao.slice(1).indexOf('"')+1}else{am=0}}}}if(am==-1){am=ao.length}aq=ao.slice(1,am);if(aq.charAt(0)==" "){aj=R("mspace");aj.setAttribute("width","1ex");an.appendChild(aj)}an.appendChild(M(ak.tag,g.createTextNode(aq)));if(aq.charAt(aq.length-1)==" "){aj=R("mspace");aj.setAttribute("width","1ex");an.appendChild(aj)}ao=u(ao,am+1);return[M("mrow",an),ao];case H:ao=u(ao,ak.input.length);ar=L(ao);if(ar[0]==null){return[M(ak.tag,g.createTextNode(ak.output)),ao]}if(typeof ak.func=="boolean"&&ak.func){aq=ao.charAt(0);if(aq=="^"||aq=="_"||aq=="/"||aq=="|"||aq==","){return[M(ak.tag,g.createTextNode(ak.output)),ao]}else{aj=M("mrow",M(ak.tag,g.createTextNode(ak.output)));aj.appendChild(ar[0]);return[aj,ar[1]]}}T(ar[0]);if(ak.input=="sqrt"){return[M(ak.tag,ar[0]),ar[1]]}else{if(typeof ak.acc=="boolean"&&ak.acc){aj=M(ak.tag,ar[0]);aj.appendChild(M("mo",g.createTextNode(ak.output)));return[aj,ar[1]]}else{if(!q&&typeof ak.codes!="undefined"){for(am=0;am<ar[0].childNodes.length;am++){if(ar[0].childNodes[am].nodeName=="mi"||ar[0].nodeName=="mi"){aq=(ar[0].nodeName=="mi"?ar[0].firstChild.nodeValue:ar[0].childNodes[am].firstChild.nodeValue);var ap=[];for(var al=0;al<aq.length;al++){if(aq.charCodeAt(al)>64&&aq.charCodeAt(al)<91){ap=ap+String.fromCharCode(ak.codes[aq.charCodeAt(al)-65])}else{ap=ap+aq.charAt(al)}}if(ar[0].nodeName=="mi"){ar[0]=R("mo").appendChild(g.createTextNode(ap))}else{ar[0].replaceChild(R("mo").appendChild(g.createTextNode(ap)),ar[0].childNodes[am])}}}}aj=M(ak.tag,ar[0]);aj.setAttribute(ak.atname,ak.atval);return[aj,ar[1]]}}case X:ao=u(ao,ak.input.length);ar=L(ao);if(ar[0]==null){return[M("mo",g.createTextNode(ak.input)),ao]}T(ar[0]);var ai=L(ar[1]);if(ai[0]==null){return[M("mo",g.createTextNode(ak.input)),ao]}T(ai[0]);if(ak.input=="root"||ak.input=="stackrel"){an.appendChild(ai[0])}an.appendChild(ar[0]);if(ak.input=="frac"){an.appendChild(ai[0])}return[M(ak.tag,an),ai[1]];case m:ao=u(ao,ak.input.length);return[M("mo",g.createTextNode(ak.output)),ao];case a:ao=u(ao,ak.input.length);aj=R("mspace");aj.setAttribute("width","1ex");an.appendChild(aj);an.appendChild(M(ak.tag,g.createTextNode(ak.output)));aj=R("mspace");aj.setAttribute("width","1ex");an.appendChild(aj);return[M("mrow",an),ao];case r:K++;ao=u(ao,ak.input.length);ar=w(ao,false);K--;aq="";if(ar[0].lastChild!=null){aq=ar[0].lastChild.firstChild.nodeValue}if(aq=="|"){aj=M("mo",g.createTextNode(ak.output));aj=M("mrow",aj);aj.appendChild(ar[0]);return[aj,ar[1]]}else{aj=M("mo",g.createTextNode(ak.output));aj=M("mrow",aj);return[aj,ao]}default:ao=u(ao,ak.input.length);return[M(ak.tag,g.createTextNode(ak.output)),ao]}}function z(an){var al,ao,am,ak,i,aj;an=u(an,0);ao=n(an);i=L(an);ak=i[0];an=i[1];al=n(an);if(al.ttype==m&&al.input!="/"){an=u(an,al.input.length);i=L(an);if(i[0]==null){i[0]=M("mo",g.createTextNode("\u25A1"))}else{T(i[0])}an=i[1];if(al.input=="_"){am=n(an);aj=(ao.ttype==P);if(am.input=="^"){an=u(an,am.input.length);var ai=L(an);T(ai[0]);an=ai[1];ak=M((aj?"munderover":"msubsup"),ak);ak.appendChild(i[0]);ak.appendChild(ai[0]);ak=M("mrow",ak)}else{ak=M((aj?"munder":"msub"),ak);ak.appendChild(i[0])}}else{ak=M(al.tag,ak);ak.appendChild(i[0])}}return[ak,an]}function w(aq,ap){var av,ar,am,ay,an=g.createDocumentFragment();do{aq=u(aq,0);am=z(aq);ar=am[0];aq=am[1];av=n(aq);if(av.ttype==m&&av.input=="/"){aq=u(aq,av.input.length);am=z(aq);if(am[0]==null){am[0]=M("mo",g.createTextNode("\u25A1"))}else{T(am[0])}aq=am[1];T(ar);ar=M(av.tag,ar);ar.appendChild(am[0]);an.appendChild(ar);av=n(aq)}else{if(ar!=undefined){an.appendChild(ar)}}}while((av.ttype!=l&&(av.ttype!=r||ap)||K==0)&&av!=null&&av.output!="");if(av.ttype==l||av.ttype==r){var az=an.childNodes.length;if(az>0&&an.childNodes[az-1].nodeName=="mrow"&&az>1&&an.childNodes[az-2].nodeName=="mo"&&an.childNodes[az-2].firstChild.nodeValue==","){var aB=an.childNodes[az-1].lastChild.firstChild.nodeValue;if(aB==")"||aB=="]"){var aj=an.childNodes[az-1].firstChild.firstChild.nodeValue;if(aj=="("&&aB==")"&&av.output!="}"||aj=="["&&aB=="]"){var ak=[];var aw=true;var at=an.childNodes.length;for(ay=0;aw&&ay<at;ay=ay+2){ak[ay]=[];ar=an.childNodes[ay];if(aw){aw=ar.nodeName=="mrow"&&(ay==at-1||ar.nextSibling.nodeName=="mo"&&ar.nextSibling.firstChild.nodeValue==",")&&ar.firstChild.firstChild.nodeValue==aj&&ar.lastChild.firstChild.nodeValue==aB}if(aw){for(var ax=0;ax<ar.childNodes.length;ax++){if(ar.childNodes[ax].firstChild.nodeValue==","){ak[ay][ak[ay].length]=ax}}}if(aw&&ay>1){aw=ak[ay].length==ak[ay-2].length}}if(aw){var al,ai,ao,au,aA=g.createDocumentFragment();for(ay=0;ay<at;ay=ay+2){al=g.createDocumentFragment();ai=g.createDocumentFragment();ar=an.firstChild;ao=ar.childNodes.length;au=0;ar.removeChild(ar.firstChild);for(ax=1;ax<ao-1;ax++){if(typeof ak[ay][au]!="undefined"&&ax==ak[ay][au]){ar.removeChild(ar.firstChild);al.appendChild(M("mtd",ai));au++}else{ai.appendChild(ar.firstChild)}}al.appendChild(M("mtd",ai));if(an.childNodes.length>2){an.removeChild(an.firstChild);an.removeChild(an.firstChild)}aA.appendChild(M("mtr",al))}ar=M("mtable",aA);if(typeof av.invisible=="boolean"&&av.invisible){ar.setAttribute("columnalign","left")}an.replaceChild(ar,an.firstChild)}}}}aq=u(aq,av.input.length);if(typeof av.invisible!="boolean"||!av.invisible){ar=M("mo",g.createTextNode(av.output));an.appendChild(ar)}}return[an,aq]}function e(aj){var ai=R("mstyle");if(I!=""){ai.setAttribute("mathcolor",I)}if(t){ai.setAttribute("displaystyle","true")}if(ad!=""){ai.setAttribute("fontfamily",ad)}K=0;ai.appendChild(w(aj.replace(/^\s+/g,""),false)[0]);ai=M("math",ai);if(C){ai.setAttribute("title",aj.replace(/\s+/g," "))}if(ad!=""&&(q||ad!="serif")){var i=V("font");i.setAttribute("face",ad);i.appendChild(ai);return i}return ai}C=false;ad="";I="";(function(){for(var aj=0,ai=G.length;aj<ai;aj++){if(G[aj].codes){delete G[aj].codes}if(G[aj].func){G[aj].tag="mi"}if(G[aj].atname==="fontfamily"||G[aj].atname==="fontweight"){G[aj].atname="mathvariant"}}})();G.push({input:"gt",tag:"mo",output:">",tex:null,ttype:d},{input:"gt=",tag:"mo",output:"\u2265",tex:"geq",ttype:d},{input:"-<=",tag:"mo",output:"\u2AAF",tex:"preceq",ttype:d},{input:">-=",tag:"mo",output:"\u2AB0",tex:"succeq",ttype:d},{input:"'",tag:"mo",output:"\u2032",tex:"prime",ttype:d},{input:"arcsin",tag:"mi",output:"arcsin",tex:null,ttype:H,func:true},{input:"arccos",tag:"mi",output:"arccos",tex:null,ttype:H,func:true},{input:"arctan",tag:"mi",output:"arctan",tex:null,ttype:H,func:true},{input:"coth",tag:"mi",output:"coth",tex:null,ttype:H,func:true},{input:"sech",tag:"mi",output:"sech",tex:null,ttype:H,func:true},{input:"csch",tag:"mi",output:"csch",tex:null,ttype:H,func:true},{input:"abs",tag:"mi",output:"abs",tex:null,ttype:H,func:true},{input:"exp",tag:"mi",output:"exp",tex:null,ttype:H,func:true},{input:"tilde",tag:"mover",output:"~",tex:null,ttype:H,acc:true});ag.Augment({AM:{Init:function(){t=ag.config.displaystyle;f=(ag.config.decimal||ag.config.decimalsign);E();v()},Augment:function(i){for(var ai in i){if(i.hasOwnProperty(ai)){switch(ai){case"displaystyle":t=i[ai];break;case"decimal":decimal=i[ai];break;case"parseMath":e=i[ai];break;case"parseExpr":w=i[ai];break;case"parseIexpr":z=i[ai];break;case"parseSexpr":L=i[ai];break;case"removeBrackets":T=i[ai];break;case"getSymbol":n=i[ai];break;case"position":c=i[ai];break;case"removeCharsAndBlanks":u=i[ai];break;case"createMmlNode":M=i[ai];break;case"createElementMathML":R=i[ai];break;case"createElementXHTML":V=i[ai];break;case"initSymbols":v=i[ai];break;case"compareNames":comareNames=i[ai];break}this[ai]=i[ai]}}},parseMath:e,parseExpr:w,parseIexpr:z,parseSexr:L,removeBrackets:T,getSymbol:n,position:c,removeCharsAndBlanks:u,createMmlNode:M,createElementMathML:R,createElementXHTML:V,initSymbols:v,compareNames:W,createDocumentFragment:aa,document:g,define:B,symbols:G,names:U,TOKEN:{CONST:d,UNARY:H,BINARY:X,INFIX:m,LEFTBRACKET:b,RIGHTBRACKET:l,SPACE:a,UNDEROVER:P,DEFINITION:Z,LEFTRIGHT:r,TEXT:ab}}});var ae=[S,O];ae=null})(MathJax.InputJax.AsciiMath);(function(b){var a;b.Augment({sourceMenuTitle:["AsciiMathInput","AsciiMath Input"],prefilterHooks:MathJax.Callback.Hooks(true),postfilterHooks:MathJax.Callback.Hooks(true),Translate:function(c){var d,f=MathJax.HTML.getScript(c);var g={math:f,script:c};this.prefilterHooks.Execute(g);f=g.math;try{d=this.AM.parseMath(f)}catch(e){if(!e.asciimathError){throw e}d=this.formatError(e,f)}g.math=a(d);this.postfilterHooks.Execute(g);return g.math},formatError:function(f,e,c){var d=f.message.replace(/\n.*/,"");MathJax.Hub.signal.Post(["AsciiMath Jax - parse error",d,e,c]);return a.Error(d)},Error:function(c){throw MathJax.Hub.Insert(Error(c),{asciimathError:true})},Startup:function(){a=MathJax.ElementJax.mml;this.AM.Init()}});b.loadComplete("jax.js")})(MathJax.InputJax.AsciiMath);

