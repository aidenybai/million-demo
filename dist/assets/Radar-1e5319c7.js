import{r as w}from"./index-f78f48ac.js";function P(y={}){const{frames:t=50,speed:i=.0017,size:d=300,inset:h=3,parent:u=document.body}=y,M="http://www.w3.org/2000/svg",E=document.createTextNode(`
    .lagRadar-sweep > * {
      shape-rendering: crispEdges;
    }
    .lagRadar-face {
      fill: transparent;
    }
    .lagRadar-hand {
      stroke-width: 4px;
      stroke-linecap: round;
    }
  `);function o(s,r={},l=[]){const n=document.createElementNS(M,s);return Object.keys(r).forEach(a=>n.setAttribute(a,r[a])),l.forEach(a=>n.appendChild(a)),n}const R=Math.PI*2,e=d/2,c=e-h,p=o("path",{class:"lagRadar-hand"}),f=new Array(t).fill("path").map(s=>o(s)),b=o("svg",{class:"lagRadar",height:d,width:d},[o("style",{type:"text/css"},[E]),o("g",{class:"lagRadar-sweep"},f),p,o("circle",{class:"lagRadar-face",cx:e,cy:e,r:c})]);u.appendChild(b);let x,g=0,m={rotation:0,now:Date.now(),tx:e+c,ty:e};const v=(()=>{const n=120/Math.log(100);return function(a){return 120-Math.max(0,Math.min(n*Math.log(a/10),120))}})();function A(){const s=Date.now(),r=Math.min(R-i,i*(s-m.now)),l=(m.rotation+r)%R,n=e+c*Math.cos(l),a=e+c*Math.sin(l),k=r<Math.PI?"0":"1",O=`M${n} ${a}A${c} ${c} 0 ${k} 0 ${m.tx} ${m.ty}L${e} ${e}`,_=v(r/i);f[g%t].setAttribute("d",O),f[g%t].setAttribute("fill",`hsl(${_}, 80%, 40%)`),p.setAttribute("d",`M${e} ${e}L${n} ${a}`),p.setAttribute("stroke",`hsl(${_}, 80%, 60%)`);for(let $=0;$<t;$++)f[(t+g-$)%t].style.fillOpacity=1-$/t;g++,m={now:s,rotation:l,tx:n,ty:a},x=window.requestAnimationFrame(A)}return A(),function(){x&&window.cancelAnimationFrame(x),b.remove()}}const z=w.memo(function(t){let i=t.frames||20,d=t.size||100,h=Object.assign({},t,{frames:i,size:d}),u=w.useRef();return w.useLayoutEffect(()=>P(Object.assign({},h,{parent:u.current})),[h,u]),w.createElement("div",{ref:u})});export{z as default};
