function freenetjs(){var l='',F='" for "gwt:onLoadErrorFn"',D='" for "gwt:onPropertyErrorFn"',n='"><\/script>',p='#',r='/',ub='113A14889091CB7EBB006374E4D63B14.cache.html',sb='4B5C779410D13747888319B7A9ABF1FD.cache.html',zb='<script defer="defer">freenetjs.onInjectionDone(\'freenetjs\')<\/script>',Db='<script id="',A='=',q='?',tb='A46F45606B87B62322FF2BBE0EE9364E.cache.html',C='Bad handler "',wb='C843561CE028D51649F4E925CF7743B7.cache.html',xb='DOMContentLoaded',vb='E0EF231B21EF31FFE289AC528EA8CDCB.cache.html',o='SCRIPT',Cb='__gwt_marker_freenetjs',s='base',nb='begin',cb='bootstrap',u='clear.cache.gif',z='content',Bb='end',m='freenetjs',lb='gecko',mb='gecko1_8',yb='gwt.hybrid',E='gwt:onLoadErrorFn',B='gwt:onPropertyErrorFn',y='gwt:property',qb='hosted.html?freenetjs',kb='ie6',ab='iframe',t='img',bb="javascript:''",pb='loadExternalRefs',v='meta',eb='moduleRequested',Ab='moduleStartup',jb='msie',w='name',gb='opera',db='position:absolute;width:0;height:0;border:none',ib='safari',rb='selectingPermutation',x='startup',ob='unknown',fb='user.agent',hb='webkit';var Fb=window,k=document,Eb=Fb.__gwtStatsEvent?function(a){return Fb.__gwtStatsEvent(a)}:null,tc,jc,ec,dc=l,mc={},wc=[],sc=[],cc=[],pc,rc;Eb&&Eb({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:nb});if(!Fb.__gwt_stylesLoaded){Fb.__gwt_stylesLoaded={}}if(!Fb.__gwt_scriptsLoaded){Fb.__gwt_scriptsLoaded={}}function ic(){var b=false;try{b=Fb.external&&(Fb.external.gwtOnLoad&&Fb.location.search.indexOf(yb)==-1)}catch(a){}ic=function(){return b};return b}
function lc(){if(tc&&jc){var c=k.getElementById(m);var b=c.contentWindow;if(ic()){b.__gwt_getProperty=function(a){return fc(a)}}freenetjs=null;b.gwtOnLoad(pc,m,dc);Eb&&Eb({moduleName:m,subSystem:x,evtGroup:Ab,millis:(new Date()).getTime(),type:Bb})}}
function gc(){var j,h=Cb,i;k.write(Db+h+n);i=k.getElementById(h);j=i&&i.previousSibling;while(j&&j.tagName!=o){j=j.previousSibling}function f(b){var a=b.lastIndexOf(p);if(a==-1){a=b.length}var c=b.indexOf(q);if(c==-1){c=b.length}var d=b.lastIndexOf(r,Math.min(c,a));return d>=0?b.substring(0,d+1):l}
;if(j&&j.src){dc=f(j.src)}if(dc==l){var e=k.getElementsByTagName(s);if(e.length>0){dc=e[e.length-1].href}else{dc=f(k.location.href)}}else if(dc.match(/^\w+:\/\//)){}else{var g=k.createElement(t);g.src=dc+u;dc=f(g.src)}if(i){i.parentNode.removeChild(i)}}
function qc(){var f=document.getElementsByTagName(v);for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute(w),b;if(h){if(h==y){b=e.getAttribute(z);if(b){var i,c=b.indexOf(A);if(c>=0){h=b.substring(0,c);i=b.substring(c+1)}else{h=b;i=l}mc[h]=i}}else if(h==B){b=e.getAttribute(z);if(b){try{rc=eval(b)}catch(a){alert(C+b+D)}}}else if(h==E){b=e.getAttribute(z);if(b){try{pc=eval(b)}catch(a){alert(C+b+F)}}}}}}
function vc(d,e){var a=cc;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[])}a[d[c]]=e}
function fc(d){var e=sc[d](),b=wc[d];if(e in b){return e}var a=[];for(var c in b){a[b[c]]=c}if(rc){rc(d,a,e)}throw null}
var hc;function kc(){if(!hc){hc=true;var a=k.createElement(ab);a.src=bb;a.id=m;a.style.cssText=db;a.tabIndex=-1;k.body.appendChild(a);Eb&&Eb({moduleName:m,subSystem:x,evtGroup:Ab,millis:(new Date()).getTime(),type:eb});a.contentWindow.location.replace(dc+uc)}}
sc[fb]=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(d.indexOf(gb)!=-1){return gb}else if(d.indexOf(hb)!=-1){return ib}else if(d.indexOf(jb)!=-1){var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=6000){return kb}}}else if(d.indexOf(lb)!=-1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return mb}return lb}return ob};wc[fb]={gecko:0,gecko1_8:1,ie6:2,opera:3,safari:4};freenetjs.onScriptLoad=function(){if(hc){jc=true;lc()}};freenetjs.onInjectionDone=function(){tc=true;Eb&&Eb({moduleName:m,subSystem:x,evtGroup:pb,millis:(new Date()).getTime(),type:Bb});lc()};gc();var uc;if(ic()){if(Fb.external.initModule&&Fb.external.initModule(m)){Fb.location.reload();return}uc=qb}qc();Eb&&Eb({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:rb});if(!uc){try{vc([ib],sb);vc([gb],tb);vc([mb],ub);vc([lb],vb);vc([kb],wb);uc=cc[fc(fb)]}catch(a){return}}var oc;function nc(){if(!ec){ec=true;lc();if(k.removeEventListener){k.removeEventListener(xb,nc,false)}if(oc){clearInterval(oc)}}}
if(k.addEventListener){k.addEventListener(xb,function(){kc();nc()},false)}var oc=setInterval(function(){if(/loaded|complete/.test(k.readyState)){kc();nc()}},50);Eb&&Eb({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:Bb});Eb&&Eb({moduleName:m,subSystem:x,evtGroup:pb,millis:(new Date()).getTime(),type:nb});k.write(zb)}
freenetjs();